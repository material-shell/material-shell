/** Gnome libs imports */
const { St, GObject, Gio, Clutter, Meta, GLib } = imports.gi;
const Animation = imports.ui.animation;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { MatPanelButton } = Me.imports.src.layout.verticalPanel.panelButton;
const { TilingLayoutByKey } = Me.imports.src.manager.layoutManager;

/* exported LayoutSwitcher */
var LayoutSwitcher = GObject.registerClass(
    {
        GTypeName: 'LayoutSwitcher',
    },
    class LayoutSwitcher extends St.BoxLayout {
        _init(msWorkspace, panelMenuManager) {
            super._init({});
            this.layoutQuickWidgetBin = new St.Bin({
                style_class: 'layout-quick-widget-bin',
                y_align: Clutter.ActorAlign.CENTER,
            });
            this.tilingIcon = new St.Icon({
                style_class: 'mat-panel-button-icon',
            });
            this.switcherButton = new MatPanelButton({
                child: this.tilingIcon,
                style_class: 'mat-panel-button',
                can_focus: true,
                track_hover: true,
            });
            this.switcherButton.connect('scroll-event', (_, event) => {
                switch (event.get_scroll_direction()) {
                    case Clutter.ScrollDirection.UP:
                        this.msWorkspace.nextLayout(1);
                        break;
                    case Clutter.ScrollDirection.DOWN:
                        this.msWorkspace.nextLayout(-1);
                        break;
                }
            });
            this.add_child(this.layoutQuickWidgetBin);
            this.add_child(this.switcherButton);

            this.msWorkspace = msWorkspace;
            this.menuManager = panelMenuManager;

            this.switcherButton.connect('clicked', (_actor, _button) => {
                // Go in reverse direction on right click (button: 3)
                //msWorkspace.nextLayout(button === 3 ? -1 : 1);
                this.menu.toggle();
            });
            this.updateLayoutWidget();
            const connectId = this.msWorkspace.connect(
                'tiling-layout-changed',
                this.updateLayoutWidget.bind(this)
            );
            this.buildMenu();
            this.connect('destroy', () => {
                this.msWorkspace.disconnect(connectId);
            });
        }

        updateLayoutWidget() {
            this.layoutQuickWidgetBin.remove_all_children();

            if (!this.msWorkspace.layout) {
                return;
            }

            let quickWidget = this.msWorkspace.layout.buildQuickWidget();
            if (quickWidget) {
                this.layoutQuickWidgetBin.set_child(quickWidget);
                this.layoutQuickWidgetBin.show();
            } else {
                this.layoutQuickWidgetBin.hide();
            }
            this.tilingIcon.gicon = this.msWorkspace.layout.icon;
        }

        buildMenu() {
            if (this.menu) this.menu.destroy();
            this.menu = new PopupMenu.PopupMenu(this, 0.5, St.Side.TOP);
            this.menu.actor.add_style_class_name('horizontal-panel-menu');
            this.menu.actor.hide();
            Object.entries(TilingLayoutByKey).forEach(
                ([layoutKey, layoutConstructor]) => {
                    this.menu.addMenuItem(
                        new TilingLayoutMenuItem(
                            layoutConstructor,
                            this.msWorkspace.state.layoutStateList.find(
                                (layoutState) => layoutState.key === layoutKey
                            ) != null
                        )
                    );
                }
            );
            this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());
            this.menu.addMenuItem(new LayoutsToggle(this.menu));
            Main.uiGroup.add_actor(this.menu.actor);
            this.menuManager.addMenu(this.menu);
        }

        setLayout(layoutKey) {
            this.msWorkspace.setLayoutByKey(layoutKey);
        }

        addLayout(layoutKey) {
            if (
                this.msWorkspace.state.layoutStateList.find(
                    (layoutState) => layoutState.key === layoutKey
                ) != null
            )
                return true;

            // Add the layout in the right order
            const wantedIndex = Me.layoutManager.layoutList.findIndex(
                (layout) => {
                    return layoutKey === layout.state.key;
                }
            );
            const newState = Me.layoutManager.getLayoutByKey(layoutKey).state;
            if (wantedIndex > this.msWorkspace.state.layoutStateList.length) {
                this.msWorkspace.state.layoutStateList.push(newState);
            } else {
                this.msWorkspace.state.layoutStateList.splice(
                    wantedIndex,
                    0,
                    newState
                );
            }
            Me.stateManager.stateChanged();
            return true;
        }

        removeLayout(layoutKey) {
            if (this.msWorkspace.state.layoutStateList.length === 1)
                return false;
            if (
                this.msWorkspace.state.layoutStateList.find(
                    (layoutState) => layoutState.key === layoutKey
                ) === null
            )
                return true;
            const index = this.msWorkspace.state.layoutStateList.findIndex(
                (layoutState) => layoutState.key === layoutKey
            );
            this.msWorkspace.state.layoutStateList.splice(index, 1);
            Me.stateManager.stateChanged();

            return true;
        }

        vfunc_allocate(...args) {
            let box = args[0];
            const height = box.get_height() / 2;

            if (this.tilingIcon && this.tilingIcon.get_icon_size() != height) {
                GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                    this.tilingIcon.set_icon_size(height);
                    return GLib.SOURCE_REMOVE;
                });
            }
            super.vfunc_allocate(...args);
        }
    }
);

var TilingLayoutMenuItem = GObject.registerClass(
    class TilingLayoutMenuItem extends PopupMenu.PopupSwitchMenuItem {
        _init(layoutConstructor, active, params) {
            super._init(layoutConstructor.label, active, params);
            this.layoutConstructor = layoutConstructor;
            this._icon = new St.Icon({
                style_class: 'popup-menu-icon',
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/tiling/${layoutConstructor.state.key}-symbolic.svg`
                ),
                x_align: Clutter.ActorAlign.END,
            });
            this.insert_child_at_index(this._icon, 1);
            this.setEditable(false);
        }

        get layoutSwitcher() {
            return this._parent.sourceActor;
        }

        activate(event) {
            if (!this.editable) {
                this.layoutSwitcher.setLayout(this.layoutConstructor.state.key);
                this.emit('activate', event);
            } else {
                if (this.state) {
                    if (
                        this.layoutSwitcher.removeLayout(
                            this.layoutConstructor.state.key
                        )
                    ) {
                        this.toggle();
                    }
                } else {
                    if (
                        this.layoutSwitcher.addLayout(
                            this.layoutConstructor.state.key
                        )
                    ) {
                        this.toggle();
                    }
                }
            }
            return;
        }

        setEditable(editable) {
            this.editable = editable;
            if (this.editable) {
                this.setSwitcherVisible(true);
                this.setVisible(true);
            } else {
                this.setSwitcherVisible(false);
                if (!this.state) {
                    this.setVisible(false);
                }
            }
        }

        setSwitcherVisible(visible) {
            if (!this.mapped) {
                return (this._statusBin.opacity = visible ? 255 : 0);
            }
            this._statusBin.ease({
                opacity: visible ? 255 : 0,
                duration: 300,
            });
        }
        setVisible(visible) {
            if (!this.mapped) {
                return (this.height = visible ? -1 : 0);
            }
            if (visible) {
                if (this.height === 0) {
                    this.height = -1;
                    let height = this.height;
                    this.height = 0;
                    this.ease({
                        height: height,
                        duration: 300,
                        onComplete: () => {
                            this.height = -1;
                        },
                    });
                }
            } else {
                this.ease({
                    height: 0,
                    duration: 300,
                });
            }
        }
    }
);
var LayoutsToggle = GObject.registerClass(
    class LayoutsToggle extends PopupMenu.PopupImageMenuItem {
        _init(menu, params) {
            const editText = _('Tweak available layout');
            const editIcon = Gio.icon_new_for_string(
                `${Me.path}/assets/icons/category/settings-symbolic.svg`
            );
            super._init(editText, editIcon, params);
            this.editText = editText;
            this.editIcon = editIcon;
            this.confirmText = _('Confirm layouts');
            this.confirmIcon = Gio.icon_new_for_string(
                `${Me.path}/assets/icons/check-symbolic.svg`
            );
            this.menu = menu;
            this.editable = false;
        }

        activate(_event) {
            this.toggleEditMode();
        }

        toggleEditMode() {
            this.editable = !this.editable;
            this.menu._getMenuItems().forEach((item) => {
                if (item instanceof TilingLayoutMenuItem) {
                    item.setEditable(this.editable);
                }
            });
            if (this.editable) {
                this.label.set_text(this.confirmText);
                this._icon.gicon = this.confirmIcon;
            } else {
                this.label.set_text(this.editText);
                this._icon.gicon = this.editIcon;
            }
        }
    }
);

/** Gnome libs imports */
const { St, GObject, Gio, Clutter } = imports.gi;
const Animation = imports.ui.animation;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { MatPanelButton } = Me.imports.src.layout.verticalPanel.panelButton;
const { TilingLayoutByKey } = Me.imports.src.manager.tilingManager;

/* exported LayoutSwitcher */
var LayoutSwitcher = GObject.registerClass(
    {
        GTypeName: 'LayoutSwitcher',
    },
    class LayoutSwitcher extends MatPanelButton {
        _init(msWorkspace, panelMenuManager) {
            this.tilingIcon = new St.Icon({
                style_class: 'mat-panel-button-icon',
            });
            super._init({
                child: this.tilingIcon,
                style_class: 'mat-panel-button',
                can_focus: true,
                track_hover: true,
            });

            this.msWorkspace = msWorkspace;
            this.menuManager = panelMenuManager;

            this.connect('clicked', (actor, button) => {
                // Go in reverse direction on right click (button: 3)
                //msWorkspace.nextLayout(button === 3 ? -1 : 1);
                this.menu.toggle();
            });
            this.updateLayoutIcon();
            this.msWorkspace.connect(
                'tiling-layout-changed',
                this.updateLayoutIcon.bind(this)
            );
            this.buildMenu();
        }

        updateLayoutIcon() {
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
                        new LayoutMenuItem(
                            layoutConstructor,
                            this.msWorkspace.state.layoutKeyList.includes(
                                layoutKey
                            )
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
            if (this.msWorkspace.state.layoutKeyList.includes(layoutKey))
                return true;

            // Add the layout in the right order
            const wantedIndex = Me.layoutManager.layoutList.findIndex(
                (layout) => {
                    return layoutKey === layout.key;
                }
            );
            if (wantedIndex > this.msWorkspace.state.layoutKeyList.length) {
                this.msWorkspace.state.layoutKeyList.push(layoutKey);
            } else {
                this.msWorkspace.state.layoutKeyList.splice(
                    wantedIndex,
                    0,
                    layoutKey
                );
            }
            Me.msWorkspaceManager.stateChanged();
            return true;
        }

        removeLayout(layoutKey) {
            if (this.msWorkspace.state.layoutKeyList.length === 1) return false;
            if (!this.msWorkspace.state.layoutKeyList.includes(layoutKey))
                return true;
            const index = this.msWorkspace.state.layoutKeyList.indexOf(
                layoutKey
            );
            this.msWorkspace.state.layoutKeyList.splice(index, 1);
            Me.msWorkspaceManager.stateChanged();

            return true;
        }

        vfunc_allocate(box, flags) {
            if (
                this.tilingIcon &&
                this.tilingIcon.get_icon_size() != box.get_height() / 2
            ) {
                this.tilingIcon.set_icon_size(box.get_height() / 2);
            }
            super.vfunc_allocate(box, flags);
        }
    }
);

var LayoutMenuItem = GObject.registerClass(
    {
        Signals: { toggled: { param_types: [GObject.TYPE_BOOLEAN] } },
    },
    class LayoutMenuItem extends PopupMenu.PopupSwitchMenuItem {
        _init(layoutConstructor, active, params) {
            super._init(layoutConstructor.label, active, params);
            this.layoutConstructor = layoutConstructor;
            this._icon = new St.Icon({
                style_class: 'popup-menu-icon',
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/tiling/${layoutConstructor.key}-symbolic.svg`
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
                this.layoutSwitcher.setLayout(this.layoutConstructor.key);
                super.activate(event);
            } else {
                if (this.state) {
                    if (
                        this.layoutSwitcher.removeLayout(
                            this.layoutConstructor.key
                        )
                    ) {
                        this.toggle();
                    }
                } else {
                    if (
                        this.layoutSwitcher.addLayout(
                            this.layoutConstructor.key
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
                this._statusBin.ease({
                    opacity: 255,
                    duration: 300,
                });
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
                this._statusBin.ease({
                    opacity: 0,
                    duration: 300,
                });
                if (!this.state) {
                    this.ease({
                        height: 0,
                        duration: 300,
                    });
                }
            }
        }
    }
);
var LayoutsToggle = GObject.registerClass(
    {
        Signals: { toggled: { param_types: [GObject.TYPE_BOOLEAN] } },
    },
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

        activate(event) {
            this.toggleEditMode();
            return;
            super.activate(event);
        }

        toggleEditMode() {
            this.editable = !this.editable;
            this.menu._getMenuItems().forEach((item) => {
                if (item instanceof LayoutMenuItem) {
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

/* 
var PopupSwitchMenuItem = GObject.registerClass(
    {
        Signals: { toggled: { param_types: [GObject.TYPE_BOOLEAN] } },
    },
    class PopupSwitchMenuItem extends PopupBaseMenuItem {
        _init(text, active, params) {
            super._init(params);

            this.label = new St.Label({ text: text });
            this._switch = new Switch(active);

            this.accessible_role = Atk.Role.CHECK_MENU_ITEM;
            this.checkAccessibleState();
            this.label_actor = this.label;

            this.add_child(this.label);

            this._statusBin = new St.Bin({ x_align: St.Align.END });
            this.add(this._statusBin, { expand: true, x_align: St.Align.END });

            this._statusLabel = new St.Label({
                text: '',
                style_class: 'popup-status-menu-item',
            });
            this._statusBin.child = this._switch;
        }

        setStatus(text) {
            if (text != null) {
                this._statusLabel.text = text;
                this._statusBin.child = this._statusLabel;
                this.reactive = false;
                this.accessible_role = Atk.Role.MENU_ITEM;
            } else {
                this._statusBin.child = this._switch;
                this.reactive = true;
                this.accessible_role = Atk.Role.CHECK_MENU_ITEM;
            }
            this.checkAccessibleState();
        }

        activate(event) {
            if (this._switch.mapped) this.toggle();

            // we allow pressing space to toggle the switch
            // without closing the menu
            if (
                event.type() == Clutter.EventType.KEY_PRESS &&
                event.get_key_symbol() == Clutter.KEY_space
            )
                return;

            super.activate(event);
        }

        toggle() {
            this._switch.toggle();
            this.emit('toggled', this._switch.state);
            this.checkAccessibleState();
        }

        get state() {
            return this._switch.state;
        }

        setToggleState(state) {
            this._switch.setToggleState(state);
            this.checkAccessibleState();
        }

        checkAccessibleState() {
            switch (this.accessible_role) {
                case Atk.Role.CHECK_MENU_ITEM:
                    if (this._switch.state)
                        this.add_accessible_state(Atk.StateType.CHECKED);
                    else this.remove_accessible_state(Atk.StateType.CHECKED);
                    break;
                default:
                    this.remove_accessible_state(Atk.StateType.CHECKED);
            }
        }
    }
); */

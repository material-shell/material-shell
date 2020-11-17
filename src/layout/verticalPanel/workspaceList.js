/** Gnome libs imports */
const { Clutter, GObject, St, Gio } = imports.gi;
const PopupMenu = imports.ui.popupMenu;
const DND = imports.ui.dnd;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const { MatButton } = Me.imports.src.widget.material.button;
const { ReorderableList } = Me.imports.src.widget.reorderableList;

const {
    TaskBarItem,
} = Me.imports.src.layout.msWorkspace.horizontalPanel.taskBar;

const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const {
    MainCategories,
} = Me.imports.src.layout.msWorkspace.msWorkspaceCategory;
const { PanelIconStyleEnum } = Me.imports.src.manager.msThemeManager;

/* exported WorkspaceList */
var WorkspaceList = GObject.registerClass(
    class WorkspaceList extends St.Widget {
        _init() {
            super._init({
                clip_to_allocation: true,
                style_class: 'workspace-list',
                reactive: true,
            });
            this._delegate = this;

            this.connect('destroy', this._onDestroy.bind(this));
            this.msWorkspaceButtonMap = new Map();
            this.msWorkspaceManager = Me.msWorkspaceManager;
            this.menuManager = new PopupMenu.PopupMenuManager(this);

            this.buttonList = new ReorderableList(true);
            this.buttonList.connect('actor-moved', (_, actor, index) => {
                this.msWorkspaceManager.setMsWorkspaceAt(
                    actor.msWorkspace,
                    index
                );
            });

            this.add_child(this.buttonList);

            this.workspaceActiveIndicator = new St.Widget({
                style_class: 'workspace-active-indicator',
                height: Me.msThemeManager.getPanelSize(
                    Main.layoutManager.primaryIndex
                ),
            });

            Me.msThemeManager.connect('panel-size-changed', () => {
                this.workspaceActiveIndicator.set_height(
                    Me.msThemeManager.getPanelSize(
                        Main.layoutManager.primaryIndex
                    )
                );
                this.queue_relayout();
            });

            this.workspaceActiveIndicator.add_style_class_name('primary-bg');

            this.add_child(this.workspaceActiveIndicator);
            this.connect('notify::mapped', () => {
                if (this.mapped) {
                    this.buildButtons();
                    this.activeButtonForIndex(
                        global.workspace_manager.get_active_workspace_index()
                    );
                }
            });
            this.msWorkspaceManager.connect(
                'dynamic-super-workspaces-changed',
                () => {
                    this.buildButtons();
                }
            );
            this.workspaceSignal = global.workspace_manager.connect(
                'active-workspace-changed',
                () => {
                    this.activeButtonForIndex(
                        global.workspace_manager.get_active_workspace_index()
                    );
                }
            );
            this.connect('scroll-event', (_, event) => {
                switch (event.get_scroll_direction()) {
                    case Clutter.ScrollDirection.UP:
                        this.msWorkspaceManager.activatePreviousMsWorkspace();
                        break;
                    case Clutter.ScrollDirection.DOWN:
                        this.msWorkspaceManager.activateNextMsWorkspace();
                        break;
                }
            });
        }

        buildButtons() {
            this.msWorkspaceManager.primaryMsWorkspaces.forEach(
                (msWorkspace, index) => {
                    if (!this.msWorkspaceButtonMap.has(msWorkspace)) {
                        let workspaceButton = new WorkspaceButton(
                            this.msWorkspaceManager,
                            msWorkspace
                        );
                        this.menuManager.addMenu(workspaceButton.menu);
                        /* workspaceButton._draggable.connect('drag-begin', () => {
                            let workspaceButtonIndex = this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                                msWorkspace
                            );
                            this.tempDragData = {
                                workspaceButton: workspaceButton,
                                initialIndex: workspaceButtonIndex,
                            };
                            this.dropPlaceholder.resize(workspaceButton);
                            this.buttonList.add_child(this.dropPlaceholder);
                            this.buttonList.set_child_at_index(
                                this.dropPlaceholder,
                                workspaceButtonIndex
                            );
                            this.workspaceActiveIndicator.hide();
                        });

                        workspaceButton._draggable.connect(
                            'drag-cancelled',
                            () => {
                                delete this.tempDragData.draggedOver;
                                delete this.tempDragData.draggedBefore;
                                this.buttonList.set_child_at_index(
                                    this.dropPlaceholder,
                                    this.tempDragData.initialIndex
                                );
                            }
                        );

                        workspaceButton._draggable.connect(
                            'drag-end',
                            this._onDragEnd.bind(this)
                        ); */

                        /* workspaceButton.connect('drag-over', (_, before) => {
                            this.tempDragData.draggedOverByChild = true;
                            this._onDragOver(workspaceButton, before);
                            //this.buttonList.set_child_before(this.dropPlaceholder, this.tempDragData.draggedBefore ? index : index + 1);
                        });

                        workspaceButton.connect('drag-dropped', () => {
                            this.tempDragData.workspaceButton
                                .get_parent()
                                .remove_child(
                                    this.tempDragData.workspaceButton
                                );
                            this.buttonList.add_child(
                                this.tempDragData.workspaceButton
                            );
                        }); */
                        this.buttonList.insert_child_at_index(
                            workspaceButton,
                            index
                        );
                        this.msWorkspaceButtonMap.set(
                            msWorkspace,
                            workspaceButton
                        );
                    } else {
                        let button = this.msWorkspaceButtonMap.get(msWorkspace);
                        let index = this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                            msWorkspace
                        );
                        this.buttonList.set_child_at_index(button, index);
                    }
                }
            );
            //Check if some msWorkspace has been destroyed
            this.msWorkspaceButtonMap.forEach((button, msWorkspace) => {
                if (
                    !this.msWorkspaceManager.primaryMsWorkspaces.includes(
                        msWorkspace
                    )
                ) {
                    this.menuManager.removeMenu(button.menu);
                    button.menu.destroy();
                    button.destroy();
                    this.msWorkspaceButtonMap.delete(msWorkspace);
                }
            });
        }

        /* handleDragOver(source, _actor, _x, _y) {
            if (source instanceof WorkspaceButton) {
                // Needed for dragging over tasks
                if (!this.tempDragData.draggedOverByChild) {
                    let workspaceButton =
                        this.items[this.items.length - 1] ===
                        this.tempDragData.workspaceButton
                            ? this.items[this.items.length - 2]
                            : this.items[this.items.length - 1];
                    this._onDragOver(workspaceButton, false);
                } else {
                    this.tempDragData.draggedOverByChild = false;
                }
            }

            return DND.DragMotionResult.MOVE_DROP;
        } */

        /* _onDragEnd() {
            this.buttonList.remove_child(this.dropPlaceholder);
            if (this.tempDragData.draggedOver) {
                let toIndex = this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                    this.tempDragData.draggedOver.msWorkspace
                );

                if (this.tempDragData.draggedBefore) {
                    toIndex =
                        toIndex -
                        (this.tempDragData.initialIndex < toIndex ? 1 : 0);
                    this.buttonList.set_child_at_index(
                        this.tempDragData.workspaceButton,
                        toIndex
                    );

                    this.msWorkspaceManager.setMsWorkspaceAt(
                        this.tempDragData.workspaceButton.msWorkspace,
                        toIndex
                    );
                } else {
                    toIndex =
                        toIndex +
                        (this.tempDragData.initialIndex < toIndex ? 0 : 1);
                    this.buttonList.set_child_at_index(
                        this.tempDragData.workspaceButton,
                        toIndex
                    );
                    this.msWorkspaceManager.setMsWorkspaceAt(
                        this.tempDragData.workspaceButton.msWorkspace,
                        toIndex
                    );
                }
            } else {
                this.buttonList.set_child_at_index(
                    this.tempDragData.workspaceButton,
                    this.tempDragData.initialIndex
                );
            }
            this.workspaceActiveIndicator.show();
            delete this.tempDragData;
        }

        _onDragOver(workspaceButton, before) {
            this.tempDragData.draggedOver = workspaceButton;
            this.tempDragData.draggedBefore = before;
            this.dropPlaceholder.resize(this.tempDragData.workspaceButton);
            let dropPlaceholderIndex = this.buttonList
                .get_children()
                .indexOf(this.dropPlaceholder);
            let workspaceButtonIndex = this.buttonList
                .get_children()
                .indexOf(workspaceButton);
            let toIndex =
                dropPlaceholderIndex < workspaceButtonIndex
                    ? workspaceButtonIndex - 1
                    : workspaceButtonIndex;
            if (this.tempDragData.draggedBefore) {
                this.buttonList.set_child_at_index(
                    this.dropPlaceholder,
                    toIndex
                );
            } else {
                this.buttonList.set_child_at_index(
                    this.dropPlaceholder,
                    toIndex + 1
                );
            }
        } */

        activeButtonForIndex(index) {
            if (this.buttonActive) {
                if (this.buttonActive.has_style_class_name('active')) {
                    this.buttonActive.remove_style_class_name('active');
                }
                this.buttonActive = this.buttonList.get_child_at_index(index);
                this.buttonActive.add_style_class_name('active');
            }

            this.workspaceActiveIndicator.ease({
                translation_y: this.get_preferred_width(-1)[1] * index,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            });
        }

        getButtonFromCategoryKey(categoryKey) {
            return this.buttonList.get_children().find((workspaceButton) => {
                return workspaceButton.categoryKey === categoryKey;
            });
        }

        /**
         * Just the parent width
         */
        vfunc_get_preferred_width(_forHeight) {
            return [
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            ];
        }

        _onDestroy() {
            global.workspace_manager.disconnect(this.workspaceSignal);
        }
    }
);

var WorkspaceButton = GObject.registerClass(
    {
        GTypeName: 'WorkspaceButton',
        Signals: {
            'drag-dropped': {},
            'drag-over': {
                param_types: [GObject.TYPE_BOOLEAN],
            },
        },
    },
    class WorkspaceButtonClass extends MatButton {
        _init(msWorkspaceManager, msWorkspace) {
            this.msWorkspaceManager = msWorkspaceManager;
            this.msWorkspace = msWorkspace;
            this.workspaceButtonIcon = new WorkspaceButtonIcon(msWorkspace);
            super._init({
                child: this.workspaceButtonIcon,
            });
            this._delegate = this;

            this.buildMenu();

            Me.msThemeManager.connect('panel-size-changed', () => {
                this.queue_relayout();
            });

            this.connect('primary-action', () => {
                this.msWorkspace.activate();
            });
            this.connect('secondary-action', () => {
                this.menu.toggle();
            });
            this.connect('clicked', (actor, button) => {
                if (button === Clutter.BUTTON_MIDDLE) {
                    if (
                        this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                            this.msWorkspace
                        ) !==
                        this.msWorkspaceManager.primaryMsWorkspaces.length - 1
                    )
                        msWorkspace.close();
                }
            });

            this.mouseData = {
                pressed: false,
                dragged: false,
                originalCoords: null,
                originalSequence: null,
            };
        }

        get draggable() {
            return (
                this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                    this.msWorkspace
                ) !==
                this.msWorkspaceManager.primaryMsWorkspaces.length - 1
            );
        }

        buildMenu() {
            this.menu = new PopupMenu.PopupMenu(this, 0.5, St.Side.LEFT);
            this.menu.actor.add_style_class_name('panel-menu');
            this.menu.addMenuItem(
                new PopupMenu.PopupSeparatorMenuItem(_('Panel icons style'))
            );
            this.panelIconStyleHybridRadio = this.menu.addAction(
                _('Hybrid'),
                () => {
                    Me.msThemeManager.panelIconStyle =
                        PanelIconStyleEnum.HYBRID;
                },
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/radiobox-${
                        Me.msThemeManager.panelIconStyle ===
                        PanelIconStyleEnum.HYBRID
                            ? 'marked'
                            : 'blank'
                    }-symbolic.svg`
                )
            );
            this.panelIconStyleCategoryRadio = this.menu.addAction(
                _('Categories only'),
                () => {
                    Me.msThemeManager.panelIconStyle =
                        PanelIconStyleEnum.CATEGORY;
                },
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/radiobox-${
                        Me.msThemeManager.panelIconStyle ===
                        PanelIconStyleEnum.CATEGORY
                            ? 'marked'
                            : 'blank'
                    }-symbolic.svg`
                )
            );
            this.panelIconStyleApplicationRadio = this.menu.addAction(
                _('Applications preview'),
                () => {
                    Me.msThemeManager.panelIconStyle =
                        PanelIconStyleEnum.APPLICATION;
                },
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/radiobox-${
                        Me.msThemeManager.panelIconStyle ===
                        PanelIconStyleEnum.APPLICATION
                            ? 'marked'
                            : 'blank'
                    }-symbolic.svg`
                )
            );

            Me.msThemeManager.connect('panel-icon-style-changed', () => {
                this.panelIconStyleHybridRadio._icon.set_gicon(
                    Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/radiobox-${
                            Me.msThemeManager.panelIconStyle ===
                            PanelIconStyleEnum.HYBRID
                                ? 'marked'
                                : 'blank'
                        }-symbolic.svg`
                    )
                );
                this.panelIconStyleCategoryRadio._icon.set_gicon(
                    Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/radiobox-${
                            Me.msThemeManager.panelIconStyle ===
                            PanelIconStyleEnum.CATEGORY
                                ? 'marked'
                                : 'blank'
                        }-symbolic.svg`
                    )
                );
                this.panelIconStyleApplicationRadio._icon.set_gicon(
                    Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/radiobox-${
                            Me.msThemeManager.panelIconStyle ===
                            PanelIconStyleEnum.APPLICATION
                                ? 'marked'
                                : 'blank'
                        }-symbolic.svg`
                    )
                );
            });

            this.menu.addMenuItem(
                new PopupMenu.PopupSeparatorMenuItem(_('Override category'))
            );
            const autoSentence = _('Determined automatically');
            this.subMenu = new PopupMenu.PopupSubMenuMenuItem(
                this.msWorkspace.msWorkspaceCategory.forcedCategory ||
                    autoSentence
            );
            let setCategory = (category) => {
                this.msWorkspace.msWorkspaceCategory.forceCategory(category);
                this.workspaceButtonIcon.buildIcons();
                this.subMenu.label.text = category || autoSentence;
            };
            this.subMenu.menu.addAction(autoSentence, () => {
                setCategory();
            });
            MainCategories.forEach((key) => {
                this.subMenu.menu.addAction(
                    key,
                    () => {
                        setCategory(key);
                    },
                    Gio.icon_new_for_string(
                        `${
                            Me.path
                        }/assets/icons/category/${key.toLowerCase()}-symbolic.svg`
                    )
                );
            });

            this.menu.addMenuItem(this.subMenu);
            Main.uiGroup.add_actor(this.menu.actor);
            this.menu.close();
        }

        initDrag() {
            this._draggable = DND.makeDraggable(this, {
                restoreOnSuccess: false,
                manualMode: true,
            });

            this._draggable.connect('drag-end', () => {
                this.mouseData.pressed = false;
                this.mouseData.dragged = false;
            });
        }

        handleDragOver(source, actor, x, y) {
            if (source instanceof TaskBarItem) {
                return DND.DragMotionResult.MOVE_DROP;
            }
            return DND.DragMotionResult.NO_DROP;
        }

        acceptDrop(source) {
            if (source instanceof TaskBarItem) {
                if (source.tileable instanceof MsWindow) {
                    Me.msWorkspaceManager.setWindowToMsWorkspace(
                        source.tileable,
                        this.msWorkspace
                    );
                    this.msWorkspaceManager.stateChanged();
                    this.msWorkspace.activate();
                }
                return true;
            }
            return false;
        }

        /**
         * Just the parent width
         */
        vfunc_get_preferred_width(_forHeight) {
            return [
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            ];
        }

        /**
         * Just the child height
         */
        vfunc_get_preferred_height(_forWidth) {
            return [
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            ];
        }
    }
);

var WorkspaceButtonIcon = GObject.registerClass(
    {
        GTypeName: 'WorkspaceButtonIcon',
    },
    class WorkspaceButtonIcon extends St.Widget {
        _init(msWorkspace) {
            this.msWorkspace = msWorkspace;
            super._init();
            this.appIconList = [];
            this.add_effect(new Clutter.DesaturateEffect());
            this.connect('notify::mapped', () => {
                if (this.mapped) {
                    this.buildIcons();
                }
            });
            this.msWorkspace.connect('tileableList-changed', (_) => {
                this.buildIcons();
            });
            Me.msThemeManager.connect('panel-icon-style-changed', () => {
                this.buildIcons();
            });
            Me.msThemeManager.connect('panel-size-changed', () => {
                this.buildIcons();
            });
        }

        buildIcons() {
            this.appIconList.forEach((icon) => {
                icon.destroy();
            });

            const appList = this.msWorkspace.tileableList
                .filter((tileable) => {
                    return tileable instanceof MsWindow;
                })
                .map((msWindow) => {
                    return msWindow.app;
                });
            this.appIconList = [];

            if (appList.length) {
                const numberOfEachAppMap = new Map();
                appList.forEach((app) => {
                    if (numberOfEachAppMap.has(app)) {
                        numberOfEachAppMap.set(
                            app,
                            numberOfEachAppMap.get(app) + 1
                        );
                    } else {
                        numberOfEachAppMap.set(app, 1);
                    }
                });
                const sortedByInstanceAppList = [
                    ...numberOfEachAppMap.entries(),
                ]
                    .sort((a, b) => {
                        return b[1] - a[1];
                    })
                    .map((entry) => {
                        return entry[0];
                    });
                if (
                    this.msWorkspace.msWorkspaceCategory.forcedCategory ||
                    Me.msThemeManager.panelIconStyle ===
                        PanelIconStyleEnum.CATEGORY ||
                    (Me.msThemeManager.panelIconStyle ===
                        PanelIconStyleEnum.HYBRID &&
                        sortedByInstanceAppList.length > 1)
                ) {
                    let category =
                        this.msWorkspace.msWorkspaceCategory.category || '';
                    let icon = new St.Icon({
                        gicon: Gio.icon_new_for_string(
                            `${
                                Me.path
                            }/assets/icons/category/${category.toLowerCase()}-symbolic.svg`
                        ),
                        icon_size:
                            Me.msThemeManager.getPanelSizeNotScaled() / 2,
                    });
                    this.appIconList.push(icon);
                    this.add_child(icon);
                } else {
                    sortedByInstanceAppList.forEach((app) => {
                        const icon = app.create_icon_texture(
                            Me.msThemeManager.getPanelSizeNotScaled() / 2
                        );
                        this.appIconList.push(icon);
                        this.add_child(icon);
                    });
                }
            } else {
                let icon = new St.Icon({
                    gicon: Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/plus-symbolic.svg`
                    ),
                    icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
                });
                this.appIconList.push(icon);
                this.add_child(icon);
            }
        }

        vfunc_allocate(allocationBox, flags) {
            SetAllocation(this, allocationBox, flags);

            let themeNode = this.get_theme_node();
            allocationBox = themeNode.get_content_box(allocationBox);
            const portion = (allocationBox.x2 - allocationBox.x1) / 8;
            if (this.appIconList.length === 1) {
                let centerBox = new Clutter.ActorBox();
                centerBox.x1 = allocationBox.x1 + 2 * portion;
                centerBox.x2 = allocationBox.x2 - 2 * portion;
                centerBox.y1 = allocationBox.y1 + 2 * portion;
                centerBox.y2 = allocationBox.y2 - 2 * portion;
                Allocate(this.appIconList[0], centerBox, flags);
            } else {
                this.appIconList.forEach((icon, index) => {
                    let box = new Clutter.ActorBox();
                    switch (index) {
                        case 0:
                            box.x1 = allocationBox.x1 + portion;
                            box.x2 = allocationBox.x2 - 3 * portion;
                            box.y1 = allocationBox.y1 + 2 * portion;
                            box.y2 = allocationBox.y2 - 2 * portion;
                            Allocate(icon, box, flags);
                            break;
                        case 1:
                            box.x1 = allocationBox.x1 + 3 * portion;
                            box.x2 = allocationBox.x2 - portion;
                            box.y1 = allocationBox.y1 + 3 * portion;
                            box.y2 = allocationBox.y2 - portion;
                            Allocate(icon, box, flags);
                            break;
                        case 2:
                            box.x1 = allocationBox.x1 + 4 * portion;
                            box.x2 = allocationBox.x2 - portion;
                            box.y1 = allocationBox.y1 + portion;
                            box.y2 = allocationBox.y2 - 4 * portion;
                            Allocate(icon, box, flags);
                            break;
                    }
                });
            }
        }
    }
);

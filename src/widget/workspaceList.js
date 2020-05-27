const { Clutter, GObject, St, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;

const DND = imports.ui.dnd;
const Me = ExtensionUtils.getCurrentExtension();
const { MatButton } = Me.imports.src.widget.material.button;
const { DropPlaceholder } = Me.imports.src.widget.taskBar;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const Main = imports.ui.main;

/* exported WorkspaceList */
var WorkspaceList = GObject.registerClass(
    class WorkspaceList extends St.Widget {
        _init() {
            super._init({
                clip_to_allocation: true,
                style_class: 'workspace-list',
            });
            this.connect('destroy', this._onDestroy.bind(this));
            this.msWorkspaceButtonMap = new Map();
            this.msWorkspaceManager = Me.msWorkspaceManager;

            this.buttonList = new St.Widget({
                layout_manager: new Clutter.BoxLayout({ vertical: true }),
            });

            this.add_child(this.buttonList);
            this.dropPlaceholder = new DropPlaceholder(WorkspaceButton);
            this.dropPlaceholder.connect('drag-dropped', () => {
                this.tempDragData.workspaceButton
                    .get_parent()
                    .remove_child(this.tempDragData.workspaceButton);
                this.buttonList.add_child(this.tempDragData.workspaceButton);
            });

            this.dropPlaceholder.connect('drag-over', () => {
                this.tempDragData.draggedOverByChild = true;
            });

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
        }

        buildButtons() {
            this.msWorkspaceManager.primaryMsWorkspaces.forEach(
                (msWorkspace, index) => {
                    if (!this.msWorkspaceButtonMap.has(msWorkspace)) {
                        let workspaceButton = new WorkspaceButton(
                            this.msWorkspaceManager,
                            msWorkspace
                        );
                        workspaceButton._draggable.connect('drag-begin', () => {
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
                        );

                        workspaceButton.connect('drag-over', (_, before) => {
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
                        });
                        this.buttonList.insert_child_at_index(
                            workspaceButton,
                            index
                        );
                        this.msWorkspaceButtonMap.set(
                            msWorkspace,
                            workspaceButton
                        );
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
                    button.destroy();
                    this.msWorkspaceButtonMap.delete(msWorkspace);
                }
            });
        }

        handleDragOver() {
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

            return DND.DragMotionResult.MOVE_DROP;
        }

        _onDragEnd() {
            this.buttonList.remove_child(this.dropPlaceholder);
            if (this.tempDragData.draggedOver) {
                let toIndex = this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                    this.tempDragData.draggedOver.msWorkspace
                );

                if (this.tempDragData.draggedBefore) {
                    this.buttonList.set_child_at_index(
                        this.tempDragData.workspaceButton,
                        toIndex -
                            (this.tempDragData.initialIndex < toIndex ? 1 : 0)
                    );

                    this.msWorkspaceManager.setMsWorkspaceBefore(
                        this.tempDragData.workspaceButton.msWorkspace,
                        this.tempDragData.draggedOver.msWorkspace
                    );
                } else {
                    this.buttonList.set_child_at_index(
                        this.tempDragData.workspaceButton,
                        toIndex +
                            (this.tempDragData.initialIndex < toIndex ? 0 : 1)
                    );
                    this.msWorkspaceManager.setMsWorkspaceAfter(
                        this.tempDragData.workspaceButton.msWorkspace,
                        this.tempDragData.draggedOver.msWorkspace
                    );
                }
                //this.buttonList.set_child_at_index(this.tempDragData.item, this.tempDragData.draggedBefore ? index : index + 1);
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
        }

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
            log('workspaceList to its own destroy');
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
            Me.msThemeManager.connect('panel-size-changed', () => {
                this.queue_relayout();
            });
            this.connect('clicked', (_, button) => {
                if (button === 2) {
                    if (
                        this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                            this.msWorkspace
                        ) !==
                        this.msWorkspaceManager.primaryMsWorkspaces.length - 1
                    )
                        msWorkspace.close();
                } else {
                    this.msWorkspaceManager
                        .getWorkspaceOfMsWorkspace(this.msWorkspace)
                        .activate(global.get_current_time());
                }
            });

            this.mouseData = {
                pressed: false,
                dragged: false,
                originalCoords: null,
                originalSequence: null,
            };

            this.connect('event', (actor, event) => {
                let eventType = event.type();
                if (
                    [
                        Clutter.EventType.BUTTON_PRESS,
                        Clutter.EventType.TOUCH_BEGIN,
                    ].indexOf(eventType) > -1
                ) {
                    this.mouseData.pressed = true;
                    this.mouseData.originalCoords = event.get_coords();
                    this.mouseData.originalSequence = event.get_event_sequence();
                } else if (
                    [
                        Clutter.EventType.MOTION,
                        Clutter.EventType.TOUCH_UPDATE,
                    ].indexOf(eventType) > -1
                ) {
                    if (this.mouseData.pressed && !this.mouseData.dragged) {
                        let coords = event.get_coords();
                        if (
                            Math.abs(
                                this.mouseData.originalCoords[0] - coords[0]
                            ) > this.get_preferred_width(-1)[1] &&
                            !this.mouseData.dragged
                        ) {
                            this.mouseData.dragged = true;
                            this._draggable.startDrag(
                                this.mouseData.originalCoords[0],
                                this.mouseData.originalCoords[1],
                                global.get_current_time(),
                                this.mouseData.originalSequence
                            );
                        }
                    }
                } else if (
                    [
                        Clutter.EventType.BUTTON_RELEASE,
                        Clutter.EventType.TOUCH_END,
                    ].indexOf(eventType) > -1
                ) {
                    this.mouseData.pressed = false;
                    this.mouseData.dragged = false;
                } else if (eventType === Clutter.EventType.LEAVE) {
                    if (
                        this.draggable &&
                        this.mouseData.pressed &&
                        !this.mouseData.dragged
                    ) {
                        this.mouseData.dragged = true;
                        this._draggable.startDrag(
                            this.mouseData.originalCoords[0],
                            this.mouseData.originalCoords[1],
                            global.get_current_time(),
                            this.mouseData.originalSequence
                        );
                    }
                }
            });

            this.initDrag();
        }

        get draggable() {
            return (
                this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                    this.msWorkspace
                ) !==
                this.msWorkspaceManager.primaryMsWorkspaces.length - 1
            );
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
            if (!(source instanceof WorkspaceButton) || !this.draggable) {
                return DND.DragMotionResult.NO_DROP;
            }
            log('dragover');
            this.emit('drag-over', y < this.height / 2);
            return DND.DragMotionResult.MOVE_DROP;
        }

        acceptDrop(source) {
            if (!(source instanceof WorkspaceButton)) {
                return false;
            }
            this.emit('drag-dropped');
            return true;
        }

        /**
         * Just the parent width
         */
        vfunc_get_preferred_width(forHeight) {
            return [
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            ];
        }

        /**
         * Just the child height
         */
        vfunc_get_preferred_height(forWidth) {
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

                sortedByInstanceAppList.forEach((app) => {
                    const icon = app.create_icon_texture(
                        Me.msThemeManager.getPanelSizeNotScaled() / 2
                    );
                    this.appIconList.push(icon);
                    this.add_child(icon);
                });
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
            this.set_allocation(allocationBox, flags);

            let themeNode = this.get_theme_node();
            allocationBox = themeNode.get_content_box(allocationBox);
            const portion = (allocationBox.x2 - allocationBox.x1) / 8;
            if (this.appIconList.length === 1) {
                let centerBox = new Clutter.ActorBox();
                centerBox.x1 = allocationBox.x1 + 2 * portion;
                centerBox.x2 = allocationBox.x2 - 2 * portion;
                centerBox.y1 = allocationBox.y1 + 2 * portion;
                centerBox.y2 = allocationBox.y2 - 2 * portion;
                this.appIconList[0].allocate(centerBox, flags);
            } else {
                this.appIconList.forEach((icon, index) => {
                    let box = new Clutter.ActorBox();
                    switch (index) {
                        case 0:
                            box.x1 = allocationBox.x1 + portion;
                            box.x2 = allocationBox.x2 - 3 * portion;
                            box.y1 = allocationBox.y1 + 2 * portion;
                            box.y2 = allocationBox.y2 - 2 * portion;
                            icon.allocate(box, flags);
                            break;
                        case 1:
                            box.x1 = allocationBox.x1 + 3 * portion;
                            box.x2 = allocationBox.x2 - portion;
                            box.y1 = allocationBox.y1 + 3 * portion;
                            box.y2 = allocationBox.y2 - portion;
                            icon.allocate(box, flags);
                            break;
                        case 2:
                            box.x1 = allocationBox.x1 + 4 * portion;
                            box.x2 = allocationBox.x2 - portion;
                            box.y1 = allocationBox.y1 + portion;
                            box.y2 = allocationBox.y2 - 4 * portion;
                            icon.allocate(box, flags);
                            break;
                    }
                });
            }
        }
    }
);

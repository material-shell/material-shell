const { Clutter, GObject, St } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Tweener = imports.ui.tweener;
const DND = imports.ui.dnd;
const Me = ExtensionUtils.getCurrentExtension();
const { MatButton } = Me.imports.widget.material.button;
const { WorkspaceCategories } = Me.imports.superWorkspace.workspaceCategories;
const { dragData, DRAG_TYPES } = Me.imports.widget.dragData;
const { DropPlaceholder } = Me.imports.widget.taskBar;
const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported WorkspaceList */
var WorkspaceList = GObject.registerClass(
    class WorkspaceList extends St.Widget {
        _init(superWorkspaceManager) {
            super._init({
                clip_to_allocation: true
            });

            this.superWorkspaceManager = superWorkspaceManager;

            this.buttonList = new St.BoxLayout({
                vertical: true
            });

            this.connect('destroy', this._onDestroy.bind(this));

            this.add_child(this.buttonList);
            this.dropPlaceholder = new DropPlaceholder([
                DRAG_TYPES.workspaceItem
            ]);
            this.dropPlaceholder.connect('drag-dropped', () => {
                dragData.current.workspaceButton.reparent(this.buttonList);
            });
            this.dropPlaceholder.connect('drag-over', () => {
                dragData.current.draggedOverByChild = true;
            });
            this.workspaceActiveIndicator = new St.Widget({
                style_class: 'workspace-active-indicator'
            });

            this.workspaceActiveIndicator.add_style_class_name('primary-bg');

            this.add_child(this.workspaceActiveIndicator);

            for (let categoryKey of this.superWorkspaceManager
                .categoryKeyOrderedList) {
                let category = WorkspaceCategories[categoryKey];
                let workspaceButton = new WorkspaceButton(
                    this.superWorkspaceManager,
                    categoryKey,
                    category
                );
                workspaceButton._draggable.connect('drag-begin', () => {
                    let workspaceButtonIndex = this.superWorkspaceManager.categoryKeyOrderedList.indexOf(
                        workspaceButton.categoryKey
                    );
                    dragData.current = {
                        type: DRAG_TYPES.workspaceItem,
                        workspaceButton: workspaceButton,
                        initialIndex: workspaceButtonIndex
                    };
                    this.dropPlaceholder.resize(workspaceButton);
                    this.buttonList.add_child(this.dropPlaceholder);
                    this.buttonList.set_child_at_index(
                        this.dropPlaceholder,
                        workspaceButtonIndex
                    );
                    this.workspaceActiveIndicator.hide();
                });

                workspaceButton._draggable.connect('drag-cancelled', () => {
                    delete dragData.current.draggedOver;
                    delete dragData.current.draggedBefore;
                    this.buttonList.set_child_at_index(
                        this.dropPlaceholder,
                        dragData.current.initialIndex
                    );
                });

                workspaceButton._draggable.connect(
                    'drag-end',
                    this._onDragEnd.bind(this)
                );

                workspaceButton.connect('drag-over', (_, before) => {
                    dragData.current.draggedOverByChild = true;
                    this._onDragOver(workspaceButton, before);
                    //this.buttonList.set_child_before(this.dropPlaceholder, dragData.current.draggedBefore ? index : index + 1);
                });

                workspaceButton.connect('drag-dropped', () => {
                    dragData.current.workspaceButton.reparent(this.buttonList);
                });
                this.buttonList.add_child(workspaceButton);
            }

            this.workspaceSignal = global.workspace_manager.connect(
                'active-workspace-changed',
                () => {
                    this.activeButtonForIndex(
                        this.superWorkspaceManager.categoryKeyOrderedList[
                            global.workspace_manager.get_active_workspace_index()
                        ]
                    );
                }
            );

            this.activeButtonForIndex(
                this.superWorkspaceManager.categoryKeyOrderedList[
                    global.workspace_manager.get_active_workspace_index()
                ]
            );
        }

        handleDragOver() {
            if (!dragData.current.draggedOverByChild) {
                let workspaceButton =
                    this.items[this.items.length - 1] ===
                    dragData.current.workspaceButton
                        ? this.items[this.items.length - 2]
                        : this.items[this.items.length - 1];
                this._onDragOver(workspaceButton, false);
            } else {
                dragData.current.draggedOverByChild = false;
            }

            return DND.DragMotionResult.MOVE_DROP;
        }

        _onDragEnd() {
            this.buttonList.remove_child(this.dropPlaceholder);
            if (dragData.current.draggedOver) {
                let toIndex = this.superWorkspaceManager.categoryKeyOrderedList.indexOf(
                    dragData.current.draggedOver.categoryKey
                );
                if (dragData.current.draggedBefore) {
                    this.buttonList.set_child_at_index(
                        dragData.current.workspaceButton,
                        toIndex -
                            (dragData.current.initialIndex < toIndex ? 1 : 0)
                    );

                    this.superWorkspaceManager.setWorkspaceBefore(
                        dragData.current.workspaceButton.categoryKey,
                        dragData.current.draggedOver.categoryKey
                    );
                } else {
                    this.buttonList.set_child_at_index(
                        dragData.current.workspaceButton,
                        toIndex +
                            (dragData.current.initialIndex < toIndex ? 0 : 1)
                    );
                    this.superWorkspaceManager.setWorkspaceAfter(
                        dragData.current.workspaceButton.categoryKey,
                        dragData.current.draggedOver.categoryKey
                    );
                }
                //this.buttonList.set_child_at_index(dragData.current.item, dragData.current.draggedBefore ? index : index + 1);
            } else {
                this.buttonList.set_child_at_index(
                    dragData.current.workspaceButton,
                    dragData.current.initialIndex
                );
            }
            this.workspaceActiveIndicator.show();
            dragData.current = null;
        }

        _onDragOver(workspaceButton, before) {
            dragData.current.draggedOver = workspaceButton;
            dragData.current.draggedBefore = before;
            this.dropPlaceholder.resize(dragData.current.workspaceButton);
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
            if (dragData.current.draggedBefore) {
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

        activeButtonForIndex(categoryKey) {
            if (this.buttonActive) {
                if (
                    this.buttonActive.actorContainer.has_style_class_name(
                        'active'
                    )
                ) {
                    this.buttonActive.actorContainer.remove_style_class_name(
                        'active'
                    );
                }
            }
            this.buttonActive = this.getButtonFromCategoryKey(categoryKey);
            this.buttonActive.actorContainer.add_style_class_name('active');
            let scaleFactor = St.ThemeContext.get_for_stage(global.stage)
                .scale_factor;

            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(this.workspaceActiveIndicator, {
                    translation_y:
                        48 *
                        scaleFactor *
                        this.superWorkspaceManager.categoryKeyOrderedList.indexOf(
                            categoryKey
                        ),
                    time: 0.25,
                    transition: 'easeOutQuad'
                });
            } else {
                this.workspaceActiveIndicator.ease({
                    translation_y:
                        48 *
                        scaleFactor *
                        this.superWorkspaceManager.categoryKeyOrderedList.indexOf(
                            categoryKey
                        ),
                    duration: 250,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD
                });
            }
        }

        getButtonFromCategoryKey(categoryKey) {
            return this.buttonList.get_children().find(workspaceButton => {
                return workspaceButton.categoryKey === categoryKey;
            });
        }

        _onDestroy() {
            global.workspace_manager.disconnect(this.workspaceSignal);
        }
    }
);

var WorkspaceButton = GObject.registerClass(
    {
        Signals: {
            'drag-dropped': {},
            'drag-over': {
                param_types: [GObject.TYPE_BOOLEAN]
            }
        }
    },
    class InnerWorkspaceButton extends MatButton {
        _init(superWorkspaceManager, categoryKey, category) {
            let icon = new St.Icon({
                gicon: category.icon,
                style_class: 'workspace-icon'
            });
            super._init({
                child: icon,
                style_class: 'workspace-button'
            });
            this._delegate = this;

            this.superWorkspaceManager = superWorkspaceManager;
            this.categoryKey = categoryKey;
            this.connect('clicked', () => {
                global.workspace_manager
                    .get_workspace_by_index(
                        this.superWorkspaceManager.categoryKeyOrderedList.indexOf(
                            this.categoryKey
                        )
                    )
                    .activate(global.get_current_time());
            });

            this.mouseData = {
                pressed: false,
                dragged: false,
                originalCoords: null,
                originalSequence: null
            };

            this.connect('event', (actor, event) => {
                let eventType = event.type();
                if (
                    [
                        Clutter.EventType.BUTTON_PRESS,
                        Clutter.EventType.TOUCH_BEGIN
                    ].indexOf(eventType) > -1
                ) {
                    this.mouseData.pressed = true;
                    this.mouseData.originalCoords = event.get_coords();
                    this.mouseData.originalSequence = event.get_event_sequence();
                } else if (
                    [
                        Clutter.EventType.MOTION,
                        Clutter.EventType.TOUCH_UPDATE
                    ].indexOf(eventType) > -1
                ) {
                    if (this.mouseData.pressed && !this.mouseData.dragged) {
                        let coords = event.get_coords();
                        let scaleFactor = St.ThemeContext.get_for_stage(
                            global.stage
                        ).scale_factor;
                        if (
                            Math.abs(
                                this.mouseData.originalCoords[0] - coords[0]
                            ) >
                                48 * scaleFactor &&
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
                        Clutter.EventType.TOUCH_END
                    ].indexOf(eventType) > -1
                ) {
                    this.mouseData.pressed = false;
                    this.mouseData.dragged = false;
                } else if (eventType === Clutter.EventType.LEAVE) {
                    if (this.mouseData.pressed && !this.mouseData.dragged) {
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
        initDrag() {
            this._draggable = DND.makeDraggable(this, {
                restoreOnSuccess: false,
                manualMode: true
            });

            this._draggable.connect('drag-end', () => {
                this.mouseData.pressed = false;
                this.mouseData.dragged = false;
            });
        }

        handleDragOver(source, actor, x, y) {
            if (dragData.current.type === DRAG_TYPES.workspaceItem) {
                this.emit('drag-over', y < this.height / 2);
                return DND.DragMotionResult.MOVE_DROP;
            }
            return DND.DragMotionResult.NO_DROP;
        }

        acceptDrop() {
            if (dragData.current.type === DRAG_TYPES.workspaceItem) {
                this.emit('drag-dropped');
                return true;
            }
            return false;
        }
    }
);

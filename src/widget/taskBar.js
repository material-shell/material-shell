const { Clutter, GObject, St, Shell, Gio } = imports.gi;

const Tweener = imports.ui.tweener;
const DND = imports.ui.dnd;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { MatButton } = Me.imports.src.widget.material.button;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { MsWindow } = Me.imports.src.materialShell.msWorkspace.msWindow;

let dragData = null;

/* exported TaskBar */
var TaskBar = GObject.registerClass(
    class TaskBar extends St.Widget {
        _init(msWorkspace) {
            super._init({
                name: 'taskBar'
            });
            this._delegate = this;
            this.taskActiveIndicator = new St.Widget({
                style_class: 'task-active-indicator'
            });
            this.add_child(this.taskActiveIndicator);
            this.taskButtonContainer = new St.BoxLayout({});
            this.add_child(this.taskButtonContainer);
            this.msWorkspace = msWorkspace;
            this.connect('notify::height', () => {
                this.taskActiveIndicator.translation_y =
                    this.height - this.taskActiveIndicator.height;
            });
            this.connect('destroy', this._onDestroy.bind(this));
            this.msWorkspaceSignals = [
                msWorkspace.connect('tileableList-changed', () => {
                    this.onTileableListChange();
                }),
                msWorkspace.connect(
                    'tileable-focus-changed',
                    (_, tileable, oldTileable) => {
                        this.onFocusChanged(tileable, oldTileable);
                    }
                )
            ];

            this.tracker = Shell.WindowTracker.get_default();
            this.windowFocused = null;
            this.items = [];
            this.onTileableListChange();
        }

        onTileableListChange() {
            this.updateItems();
            this._animateActiveIndicator();
        }

        onFocusChanged(tileableFocused, oldTileableFocused) {
            if (tileableFocused === oldTileableFocused) {
                return;
            }

            let previousItem = this.getTaskBarItemOfTileable(
                oldTileableFocused
            );
            let nextItem = this.getTaskBarItemOfTileable(tileableFocused);

            if (previousItem) {
                if (
                    previousItem.actorContainer.has_style_class_name('active')
                ) {
                    previousItem.actorContainer.remove_style_class_name(
                        'active'
                    );
                }
            }

            if (!nextItem) return;

            //if you change the class before animate the indicator there is an issue for retrieving the item.x
            this._animateActiveIndicator();
            nextItem.actorContainer.add_style_class_name('active');
        }

        updateItems() {
            this.items.forEach(item => item.destroy());
            this.items = this.msWorkspace.tileableList.map(
                (tileable, index) => {
                    if (tileable instanceof MsWindow) {
                        const item = new TaskBarItem(
                            tileable,
                            index === this.msWorkspace.focusedIndex
                        );

                        item.connect('left-clicked', _ => {
                            this.msWorkspace.focusTileable(tileable);
                        });
                        item.connect('right-clicked', _ => {
                            tileable.kill();
                        });
                        item.connect('close-clicked', _ => {
                            tileable.kill();
                        });

                        item._draggable.connect('drag-begin', () => {
                            const initialIndex = this.msWorkspace.tileableList.indexOf(
                                item.tileable
                            );
                            const dropPlaceholder = new DropPlaceholder(
                                TaskBarItem
                            );
                            dragData = {
                                item,
                                initialIndex,
                                dropPlaceholder,
                                originalTaskBar: this,
                                currentTaskBar: this
                            };
                            dropPlaceholder.connect(
                                'drag-dropped',
                                this.reparentDragItem
                            );
                            dropPlaceholder.connect('drag-over', () => {
                                dragData.draggedOverByChild = true;
                            });

                            dropPlaceholder.resize(item);
                            this.taskButtonContainer.add_child(dropPlaceholder);
                            this.taskButtonContainer.set_child_at_index(
                                dropPlaceholder,
                                initialIndex
                            );
                            this.taskActiveIndicator.hide();
                        });

                        item._draggable.connect('drag-cancelled', () => {
                            delete dragData.draggedOver;
                            delete dragData.draggedBefore;
                            // We need to reparent on the original taskBar
                            // if it's a different one
                            dragData.originalTaskBar.updateCurrentTaskBar();

                            const {
                                currentTaskBar,
                                dropPlaceholder,
                                initialIndex
                            } = dragData;

                            currentTaskBar.taskButtonContainer.set_child_at_index(
                                dropPlaceholder,
                                initialIndex
                            );
                        });

                        item._draggable.connect(
                            'drag-end',
                            this._onDragEnd.bind(this)
                        );

                        item.connect('drag-over', (_, before) => {
                            dragData.draggedOverByChild = true;
                            this._onDragOver(item, before);
                        });

                        item.connect('drag-dropped', this.reparentDragItem);
                        this.taskButtonContainer.add_child(item);
                        return item;
                    } else {
                        const item = new IconTaskBarItem(
                            tileable,
                            Gio.icon_new_for_string(
                                `${Me.path}/assets/icons/plus-symbolic.svg`
                            ),
                            false
                        );
                        item.connect('left-clicked', _ => {
                            this.msWorkspace.focusTileable(tileable);
                        });
                        this.taskButtonContainer.add_child(item);
                        return item;
                    }
                }
            );
        }

        updateCurrentTaskBar() {
            const { dropPlaceholder } = dragData;

            if (dragData.currentTaskBar !== this) {
                dropPlaceholder.reparent(this.taskButtonContainer);
                dragData.currentTaskBar = this;
            }

            return DND.DragMotionResult.MOVE_DROP;
        }

        reparentDragItem() {
            const { item, currentTaskBar } = dragData;
            item.reparent(currentTaskBar.taskButtonContainer);
        }

        _onDragEnd() {
            const {
                item,
                originalTaskBar,
                currentTaskBar,
                dropPlaceholder,
                draggedOver,
                draggedBefore
            } = dragData;

            currentTaskBar.taskButtonContainer.remove_child(dropPlaceholder);
            dropPlaceholder.destroy();

            if (originalTaskBar !== currentTaskBar) {
                item.tileable.metaWindow.move_to_monitor(
                    currentTaskBar.msWorkspace.monitor.index
                );
            }
            if (draggedOver) {
                if (draggedBefore) {
                    currentTaskBar.msWorkspace.setTileableBefore(
                        item.tileable,
                        draggedOver.tileable
                    );
                } else {
                    currentTaskBar.msWorkspace.setTileableAfter(
                        item.tileable,
                        draggedOver.tileable
                    );
                }
            }

            currentTaskBar.msWorkspace.focusTileable(item.tileable);
            this.taskActiveIndicator.show();
            dragData = null;
        }

        _onDragOver(item, before) {
            dragData.draggedOver = item;
            dragData.draggedBefore = before;
            this.updateCurrentTaskBar();

            const {
                currentTaskBar,
                dropPlaceholder,
                draggedOver,
                draggedBefore
            } = dragData;

            dropPlaceholder.resize(draggedOver);

            const dropPlaceholderIndex = currentTaskBar.taskButtonContainer
                .get_children()
                .indexOf(dropPlaceholder);
            const itemIndex = currentTaskBar.taskButtonContainer
                .get_children()
                .indexOf(draggedOver);
            const toIndex =
                dropPlaceholderIndex < itemIndex ? itemIndex - 1 : itemIndex;
            currentTaskBar.taskButtonContainer.set_child_at_index(
                dropPlaceholder,
                toIndex + (draggedBefore ? 0 : 1)
            );
        }

        _animateActiveIndicator() {
            let taskBarItem = this.getTaskBarItemOfTileable(
                this.msWorkspace.tileableFocused
            );
            if (taskBarItem) {
                if (!taskBarItem.widthSignalId) {
                    taskBarItem.widthSignalId = taskBarItem.connect(
                        'notify::width',
                        () => {
                            if (!dragData) this._animateActiveIndicator();
                        }
                    );
                }
                if (ShellVersionMatch('3.32')) {
                    Tweener.addTween(this.taskActiveIndicator, {
                        x: taskBarItem.x,
                        width: taskBarItem.width,
                        time: 0.25,
                        transition: 'easeOutQuad'
                    });
                } else {
                    this.taskActiveIndicator.ease({
                        x: taskBarItem.x,
                        width: taskBarItem.width,
                        duration: 250,
                        mode: Clutter.AnimationMode.EASE_OUT_QUAD
                    });
                }

                return;
            }

            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(this.taskActiveIndicator, {
                    x: 0,
                    width: 0,
                    time: 0.25,
                    transition: 'easeOutQuad'
                });
            } else {
                this.taskActiveIndicator.ease({
                    x: 0,
                    width: 0,
                    duration: 250,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD
                });
            }
        }

        getTaskBarItemOfTileable(tileable) {
            return this.items.find(item => {
                return item.tileable === tileable;
            });
        }

        _onDestroy() {
            this.msWorkspaceSignals.forEach(signal =>
                this.msWorkspace.disconnect(signal)
            );
        }
    }
);

let TaskBarItem = GObject.registerClass(
    {
        Signals: {
            'drag-dropped': {},
            'drag-over': {
                param_types: [GObject.TYPE_BOOLEAN]
            },
            'left-clicked': {},
            'right-clicked': {},
            'close-clicked': {}
        }
    },
    class TaskBarItem extends MatButton {
        _init(tileable, actif) {
            super._init({
                style_class: `task-bar-item ${actif ? ' active' : ''}`
            });
            this.connect('destroy', this._onDestroy.bind(this));

            this._delegate = this;

            this.tileable = tileable;
            this.app = tileable.app;

            /*             this.tileable.connect('destroy', () => {
                this.destroy();
            }); */
            if (this.app) {
                // ICON
                this.iconSize = 24;
                this.icon = this.app.create_icon_texture(this.iconSize);
                this.icon.style_class = 'app-icon';
            }

            // TITLE
            this.title = new St.Label({
                style_class: 'task-bar-item-title',
                y_align: Clutter.ActorAlign.CENTER
            });
            this.updateTitle();

            this.connectSignal = this.tileable.connect('title-changed', () => {
                this.updateTitle();
            });

            // CLOSE BUTTON
            this.closeButton = new St.Button({
                style_class: 'task-close-button',
                child: new St.Icon({
                    style_class: 'task-close-icon',
                    gicon: Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/close-symbolic.svg`
                    )
                })
            });

            this.closeButton.connect('clicked', () => {
                this.emit('close-clicked');
            });

            // LAYOUT CONTAINER
            this.container = new St.BoxLayout({
                style_class: 'task-bar-item-content',
                y_align: Clutter.ActorAlign.CENTER,
                vertical: false
            });
            if (this.icon) {
                this.container.add_child(this.icon);
            }
            this.container.add_child(this.title);
            this.container.add_child(this.closeButton);

            this.set_child(this.container);

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
                    switch (event.get_button()) {
                        case 1:
                            this.emit('left-clicked');
                            break;

                        case 2:
                            this.emit('right-clicked');
                            break;
                    }
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

        // Update the title and crop it if it's too long
        updateTitle() {
            this.title.text = this.tileable.title;
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

        handleDragOver(source, actor, x) {
            if (!(source instanceof TaskBarItem)) {
                return DND.DragMotionResult.NO_DROP;
            }
            this.emit('drag-over', x < this.width / 2);
            return DND.DragMotionResult.MOVE_DROP;
        }

        acceptDrop(source) {
            if (!(source instanceof TaskBarItem)) {
                return false;
            }
            this.emit('drag-dropped');
            return true;
        }

        _onDestroy() {
            if (this.tileable && this.connectSignal) {
                this.tileable.disconnect(this.connectSignal);
            }
        }
    }
);

let IconTaskBarItem = GObject.registerClass(
    {
        Signals: {
            'drag-dropped': {},
            'drag-over': {
                param_types: [GObject.TYPE_BOOLEAN]
            },
            'left-clicked': {},
            'right-clicked': {},
            'close-clicked': {}
        }
    },
    class IconTaskBarItem extends MatButton {
        _init(tileable, gicon, actif) {
            super._init({
                style_class: `task-bar-item ${actif ? ' active' : ''}`
            });
            this.iconSize = 24;
            this.icon = new St.Icon({
                gicon,
                width: this.iconSize,
                height: this.iconSize
            });
            this.icon.style_class = 'app-icon';
            this.tileable = tileable;
            this.container = new St.BoxLayout({
                style_class: 'task-bar-item-content',
                x_align: Clutter.ActorAlign.CENTER,
                y_align: Clutter.ActorAlign.CENTER,
                vertical: false
            });
            this.container.add_child(this.icon);
            this.set_child(this.container);

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
                        Clutter.EventType.BUTTON_RELEASE,
                        Clutter.EventType.TOUCH_END
                    ].indexOf(eventType) > -1
                ) {
                    this.mouseData.pressed = false;
                    this.mouseData.dragged = false;
                    switch (event.get_button()) {
                        case 1:
                            this.emit('left-clicked');
                            break;

                        case 2:
                            this.emit('right-clicked');
                            break;
                    }
                }
            });
        }
    }
);

var DropPlaceholder = GObject.registerClass(
    {
        Signals: {
            'drag-dropped': {},
            'drag-over': {}
        }
    },
    class DropPlaceholder extends St.Widget {
        _init(targetClass) {
            super._init();
            this.targetClass = targetClass;
            this.set_style('background:rgba(255,255,255,0.1)');
            this._delegate = this;
        }

        handleDragOver(source) {
            if (!(source instanceof this.targetClass)) {
                return DND.DragMotionResult.NO_DROP;
            }
            this.emit('drag-over');
            return DND.DragMotionResult.MOVE_DROP;
        }

        acceptDrop(source) {
            if (!(source instanceof this.targetClass)) {
                return false;
            }
            this.emit('drag-dropped');
            return true;
        }

        resize(rect) {
            this.width = rect.width;
            this.height = rect.height;
        }
    }
);

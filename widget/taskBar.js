const { Clutter, GObject, St, Shell, Gio } = imports.gi;

const Tweener = imports.ui.tweener;
const DND = imports.ui.dnd;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { MatButton } = Me.imports.widget.material.button;
const { ShellVersionMatch } = Me.imports.utils.compatibility;

let dragData = null;

/* exported TaskBar */
var TaskBar = GObject.registerClass(
    class TaskBar extends St.Widget {
        _init(superWorkspace) {
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
            this.superWorkspace = superWorkspace;
            this.connect('destroy', this._onDestroy.bind(this));
            this.superWorkspaceSignals = [
                superWorkspace.connect(
                    'windows-changed',
                    this.onWindowsChanged.bind(this)
                ),
                superWorkspace.connect(
                    'window-focused-changed',
                    this.onFocusChanged.bind(this)
                )
            ];

            this.tracker = Shell.WindowTracker.get_default();
            this.windowFocused = null;
            this.items = [];
        }

        onWindowsChanged() {
            this.updateItems();
            this._animateActiveIndicator();
        }

        onFocusChanged(superWorkspace, windowFocused) {
            if (windowFocused === this.windowFocused) {
                return;
            }

            let previousItem = this.getTaskBarItemOfWindow(this.windowFocused);
            this.windowFocused = windowFocused;
            let nextItem = this.getTaskBarItemOfWindow(this.windowFocused);

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

        getFilteredWindows() {
            return this.superWorkspace.windows.filter(window => {
                return !window.skip_taskbar;
            });
        }

        updateItems() {
            this.items.forEach(item => item.destroy());
            this.items = this.getFilteredWindows().map(window => {
                let item = new TaskBarItem(
                    window,
                    this.tracker.get_window_app(window),
                    window === this.windowFocused
                );
                item._draggable.connect('drag-begin', () => {
                    let itemIndex = this.getFilteredWindows().indexOf(
                        item.window
                    );
                    dragData = {
                        item: item,
                        initialIndex: itemIndex,
                        dropPlaceholder: new DropPlaceholder(),
                        originalTaskBar: this,
                        currentTaskBar: this
                    };
                    dragData.dropPlaceholder.connect('drag-dropped', () => {
                        dragData.item.reparent(
                            dragData.currentTaskBar.taskButtonContainer
                        );
                    });
                    dragData.dropPlaceholder.connect('drag-over', () => {
                        dragData.draggedOverByChild = true;
                    });

                    dragData.dropPlaceholder.resize(item);
                    dragData.currentTaskBar.taskButtonContainer.add_child(
                        dragData.dropPlaceholder
                    );
                    dragData.currentTaskBar.taskButtonContainer.set_child_at_index(
                        dragData.dropPlaceholder,
                        itemIndex
                    );
                    this.taskActiveIndicator.hide();
                });

                item._draggable.connect('drag-cancelled', () => {
                    delete dragData.draggedOver;
                    delete dragData.draggedBefore;
                    if (dragData.originalTaskBar !== dragData.currentTaskBar) {
                        dragData.dropPlaceholder.reparent(
                            dragData.originalTaskBar.taskButtonContainer
                        );
                        dragData.currentTaskBar = dragData.originalTaskBar;
                    }
                    dragData.currentTaskBar.taskButtonContainer.set_child_at_index(
                        dragData.dropPlaceholder,
                        dragData.initialIndex
                    );
                });

                item._draggable.connect('drag-end', this._onDragEnd.bind(this));

                item.connect('drag-over', (_, before) => {
                    dragData.draggedOverByChild = true;
                    this._onDragOver(item, before);
                });

                item.connect('drag-dropped', () => {
                    dragData.item.reparent(
                        dragData.currentTaskBar.taskButtonContainer
                    );
                });

                this.taskButtonContainer.add_child(item);
                return item;
            });
            this.taskActiveIndicator.translation_y =
                this.height - this.taskActiveIndicator.height;
        }

        handleDragOver() {
            if (!dragData.draggedOverByChild) {
                let item =
                    this.items[this.items.length - 1] === dragData.item
                        ? this.items[this.items.length - 2]
                        : this.items[this.items.length - 1];
                this._onDragOver(item, false);
            } else {
                dragData.draggedOverByChild = false;
            }

            return DND.DragMotionResult.MOVE_DROP;
        }

        _onDragEnd() {
            dragData.currentTaskBar.taskButtonContainer.remove_child(
                dragData.dropPlaceholder
            );
            dragData.dropPlaceholder.destroy();

            if (dragData.originalTaskBar !== dragData.currentTaskBar) {
                dragData.item.window.move_to_monitor(
                    dragData.currentTaskBar.superWorkspace.monitor.index
                );
            }
            if (dragData.draggedOver) {
                if (dragData.draggedBefore) {
                    dragData.currentTaskBar.superWorkspace.setWindowBefore(
                        dragData.item.window,
                        dragData.draggedOver.window
                    );
                } else {
                    dragData.currentTaskBar.superWorkspace.setWindowAfter(
                        dragData.item.window,
                        dragData.draggedOver.window
                    );
                }
            }

            dragData.currentTaskBar.superWorkspace.onFocus(
                dragData.item.window
            );
            this.taskActiveIndicator.show();
            dragData = null;
        }

        _onDragOver(item, before) {
            dragData.draggedOver = item;
            dragData.draggedBefore = before;
            if (dragData.currentTaskBar !== this) {
                dragData.dropPlaceholder.reparent(this.taskButtonContainer);
                dragData.currentTaskBar = this;
            }
            dragData.dropPlaceholder.resize(dragData.item);
            let dropPlaceholderIndex = dragData.currentTaskBar.taskButtonContainer
                .get_children()
                .indexOf(dragData.dropPlaceholder);
            let itemIndex = dragData.currentTaskBar.taskButtonContainer
                .get_children()
                .indexOf(item);
            let toIndex =
                dropPlaceholderIndex < itemIndex ? itemIndex - 1 : itemIndex;
            if (dragData.draggedBefore) {
                dragData.currentTaskBar.taskButtonContainer.set_child_at_index(
                    dragData.dropPlaceholder,
                    toIndex
                );
            } else {
                dragData.currentTaskBar.taskButtonContainer.set_child_at_index(
                    dragData.dropPlaceholder,
                    toIndex + 1
                );
            }
        }

        _animateActiveIndicator() {
            if (this.windowFocused) {
                let taskBarItem = this.getTaskBarItemOfWindow(
                    this.windowFocused
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

        getTaskBarItemOfWindow(window) {
            return this.items.find(item => {
                return item.window === window;
            });
        }

        _onDestroy() {
            this.superWorkspaceSignals.forEach(signal =>
                this.superWorkspace.disconnect(signal)
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
            }
        }
    },
    class TaskBarItem extends MatButton {
        _init(window, app, actif) {
            super._init({
                style_class: `task-bar-item ${actif ? ' active' : ''}`
            });

            this._delegate = this;

            this.window = window;
            this.app = app;

            // ICON
            this.iconSize = 24;
            this.icon = app.create_icon_texture(this.iconSize);
            this.icon.style_class = 'app-icon';

            // TITLE
            this.title = new St.Label({
                style_class: 'task-bar-item-title',
                y_align: Clutter.ActorAlign.CENTER
            });
            this.updateTitle();
            this.connectSignal = this.window.connect('notify::title', () => {
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
                this.window.delete(global.get_current_time());
            });

            // LAYOUT CONTAINER
            this.container = new St.BoxLayout({
                style_class: 'task-bar-item-content',
                y_align: Clutter.ActorAlign.CENTER,
                vertical: false
            });

            this.container.add_child(this.icon);
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
                            this.window.activate(global.get_current_time());
                            break;

                        case 2:
                            this.window.delete(global.get_current_time());
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
            this.title.text = this.window.title;
        }

        destroy() {
            super.destroy();
            this.window.disconnect(this.connectSignal);
        }

        initDrag() {
            this._draggable = DND.makeDraggable(this, {
                restoreOnSuccess: false,
                manualMode: true
            });

            this._draggable.connect('drag-end', (_, time, success, test) => {
                this.mouseData.pressed = false;
                this.mouseData.dragged = false;
            });
        }

        handleDragOver(source, actor, x, y, time) {
            //return this._workspace.handleDragOver(source, actor, x, y, time);
            this.emit('drag-over', x < this.width / 2);
            return DND.DragMotionResult.MOVE_DROP;
        }

        acceptDrop(source, actor, x, y, time) {
            //this._workspace.acceptDrop(source, actor, x, y, time);
            this.emit('drag-dropped');
            return true;
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
        _init(window, app, actif) {
            super._init();
            this.set_style('background:rgba(255,255,255,0.1)');
            this._delegate = this;
        }

        handleDragOver(source, actor, x, y, time) {
            this.emit('drag-over');
            return DND.DragMotionResult.MOVE_DROP;
        }

        acceptDrop(source, actor, x, y, time) {
            this.emit('drag-dropped');
            return true;
        }

        resize(rect) {
            this.width = rect.width;
            this.height = rect.height;
        }
    }
);

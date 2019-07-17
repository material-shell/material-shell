const { Clutter, GObject, St, Shell, Gio } = imports.gi;

const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const GLib = imports.gi.GLib;
const DND = imports.ui.dnd;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { MatButton } = Me.imports.widget.material.button;

/* exported TaskBar */
var TaskBar = GObject.registerClass(
    class TaskBar extends St.Widget {
        _init(workspaceEnhancer) {
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
            this.dropPlaceholder = new DropPlaceholder();
            this.dropPlaceholder.connect('drag-dropped', () => {
                this.tempDragData.item.reparent(this.taskButtonContainer);
            });
            this.dropPlaceholder.connect('drag-over', () => {
                this.tempDragData.draggedOverByChild = true;
            });
            this.workspaceEnhancer = workspaceEnhancer;

            workspaceEnhancer.connect('windows-changed', () => {
                this.updateItems();
                GLib.timeout_add(GLib.PRIORITY_DEFAULT, 50, () => {
                    this._animateActiveIndicator();
                    return GLib.SOURCE_REMOVE;
                });
            });

            this.focusId = workspaceEnhancer.connect(
                'window-focused-changed',
                (_, windowFocused) => {
                    if (windowFocused === this.windowFocused) {
                        return;
                    }

                    let previousItem = this.getTaskBarItemOfWindow(
                        this.windowFocused
                    );
                    this.windowFocused = windowFocused;
                    let nextItem = this.getTaskBarItemOfWindow(
                        this.windowFocused
                    );

                    if (previousItem) {
                        if (previousItem.has_style_class_name('active')) {
                            previousItem.remove_style_class_name('active');
                        }
                    }

                    if (!nextItem) return;

                    //if you change the class before animate the indicator there is an issue for retrieving the item.x
                    this._animateActiveIndicator();
                    nextItem.add_style_class_name('active');
                }
            );

            this.tracker = Shell.WindowTracker.get_default();
            this.windowFocused = null;
            this.items = [];
        }

        on_destroy() {
            this.workspaceEnhancer.disconnect(this.focusId);
        }

        getFilteredWindows() {
            return this.workspaceEnhancer.windows.filter(window => {
                return !window.skip_taskbar;
            });
        }

        updateItems() {
            this.items.forEach(item => {
                item.destroy();
            });
            this.items = [];
            this.getFilteredWindows().forEach(window => {
                let item = new TaskBarItem(
                    window,
                    this.tracker.get_window_app(window),
                    window === this.windowFocused
                );
                item._draggable.connect('drag-begin', () => {
                    let itemIndex = this.getFilteredWindows().indexOf(
                        item.window
                    );
                    this.tempDragData = {
                        item: item,
                        initialIndex: itemIndex
                    };
                    this.dropPlaceholder.resize(item);
                    this.taskButtonContainer.add_child(this.dropPlaceholder);
                    this.taskButtonContainer.set_child_at_index(
                        this.dropPlaceholder,
                        itemIndex
                    );
                    this.taskActiveIndicator.hide();
                });

                item._draggable.connect('drag-cancelled', () => {
                    delete this.tempDragData.draggedOver;
                    delete this.tempDragData.draggedBefore;
                    this.taskButtonContainer.set_child_at_index(
                        this.dropPlaceholder,
                        this.tempDragData.initialIndex
                    );
                });

                item._draggable.connect('drag-end', this._onDragEnd.bind(this));

                item.connect('drag-over', (_, before) => {
                    this.tempDragData.draggedOverByChild = true;
                    this._onDragOver(item, before);
                    //this.taskButtonContainer.set_child_before(this.dropPlaceholder, this.tempDragData.draggedBefore ? index : index + 1);
                });

                item.connect('drag-dropped', () => {
                    this.tempDragData.item.reparent(this.taskButtonContainer);
                });

                this.taskButtonContainer.add_child(item);
                this.items.push(item);
            });
            this.taskActiveIndicator.translation_y =
                this.height - this.taskActiveIndicator.height;
        }

        handleDragOver() {
            if (!this.tempDragData.draggedOverByChild) {
                let item =
                    this.items[this.items.length - 1] === this.tempDragData.item
                        ? this.items[this.items.length - 2]
                        : this.items[this.items.length - 1];
                this._onDragOver(item, false);
            } else {
                this.tempDragData.draggedOverByChild = false;
            }

            return DND.DragMotionResult.MOVE_DROP;
        }

        _onDragEnd() {
            this.taskButtonContainer.remove_child(this.dropPlaceholder);
            if (this.tempDragData.draggedOver) {
                if (this.tempDragData.draggedBefore) {
                    this.workspaceEnhancer.setWindowBefore(
                        this.tempDragData.item.window,
                        this.tempDragData.draggedOver.window
                    );
                } else {
                    this.workspaceEnhancer.setWindowAfter(
                        this.tempDragData.item.window,
                        this.tempDragData.draggedOver.window
                    );
                }
                //this.taskButtonContainer.set_child_at_index(this.tempDragData.item, this.tempDragData.draggedBefore ? index : index + 1);
            } else {
                this.taskButtonContainer.set_child_at_index(
                    this.tempDragData.item,
                    this.tempDragData.initialIndex
                );
            }
            this.taskActiveIndicator.show();
            delete this.tempDragData;
        }

        _onDragOver(item, before) {
            this.tempDragData.draggedOver = item;
            this.tempDragData.draggedBefore = before;
            this.dropPlaceholder.resize(this.tempDragData.item);
            let dropPlaceholderIndex = this.taskButtonContainer
                .get_children()
                .indexOf(this.dropPlaceholder);
            let itemIndex = this.taskButtonContainer
                .get_children()
                .indexOf(item);
            let toIndex =
                dropPlaceholderIndex < itemIndex ? itemIndex - 1 : itemIndex;
            if (this.tempDragData.draggedBefore) {
                this.taskButtonContainer.set_child_at_index(
                    this.dropPlaceholder,
                    toIndex
                );
            } else {
                this.taskButtonContainer.set_child_at_index(
                    this.dropPlaceholder,
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
                                if (!this.tempDragData)
                                    this._animateActiveIndicator();
                            }
                        );
                    }
                    Tweener.addTween(this.taskActiveIndicator, {
                        x: taskBarItem.x,
                        width: taskBarItem.width,
                        time: 0.25,
                        transition: 'easeOutQuad'
                    });
                    return;
                }
            }

            Tweener.addTween(this.taskActiveIndicator, {
                x: 0,
                width: 0,
                time: 0.25,
                transition: 'easeOutQuad'
            });
        }

        getTaskBarItemOfWindow(window) {
            return this.items.find(item => {
                return item.window === window;
            });
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

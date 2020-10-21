/** Gnome libs imports */
const { Clutter, GObject, St, Shell, Gio, GLib } = imports.gi;
const DND = imports.ui.dnd;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const { MatButton } = Me.imports.src.widget.material.button;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { reparentActor } = Me.imports.src.utils.index;
const { getSettings } = Me.imports.src.utils.settings;
const { MsManager } = Me.imports.src.manager.msManager;

let dragData = null;

/* exported TaskBar */
var TaskBar = GObject.registerClass(
    class TaskBar extends St.Widget {
        _init(msWorkspace, panelMenuManager) {
            super._init({
                name: 'taskBar',
                x_expand: true,
            });
            this._delegate = this;
            this.taskActiveIndicator = new St.Widget({
                style_class: 'task-active-indicator',
            });
            this.add_child(this.taskActiveIndicator);
            this.taskButtonContainer = new Clutter.Actor({
                layout_manager: new Clutter.BoxLayout(),
            });
            this.add_child(this.taskButtonContainer);
            this.msWorkspace = msWorkspace;
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
                ),
            ];

            this.tracker = Shell.WindowTracker.get_default();
            this.windowFocused = null;
            this.items = [];
            this.menuManager = panelMenuManager;
            this.updateItems();
            this._animateActiveIndicator();
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
                if (previousItem.has_style_class_name('active')) {
                    previousItem.setActive(false);
                }
            }

            if (!nextItem) return;

            //if you change the class before animate the indicator there is an issue for retrieving the item.x

            this._animateActiveIndicator();
            nextItem.setActive(true);
        }

        updateItems() {
            this.items.forEach((item) => item.destroy());
            this.items = this.msWorkspace.tileableList.map(
                (tileable, index) => {
                    if (tileable instanceof MsWindow) {
                        const item = new TileableItem(tileable);
                        this.menuManager.addMenu(item.menu);
                        item.connect('left-clicked', (_) => {
                            this.msWorkspace.focusTileable(tileable);
                        });
                        item.connect('middle-clicked', (_) => {
                            tileable.kill();
                        });
                        item.connect('close-clicked', (_) => {
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
                                currentTaskBar: this,
                            };
                            dropPlaceholder.connect(
                                'drag-dropped',
                                this.reparentDragItem
                            );
                            dropPlaceholder.connect('drag-over', () => {
                                dragData.draggedOverByChild = true;
                            });

                            dropPlaceholder.resize(
                                item.width,
                                dragData.currentTaskBar.height
                            );
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
                                initialIndex,
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
                        item.connect('notify::width', () => {
                            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                                this._animateActiveIndicator();
                                return GLib.SOURCE_REMOVE;
                            });
                        });
                        this.taskButtonContainer.add_child(item);
                        return item;
                    } else {
                        const item = new IconTaskBarItem(
                            tileable,
                            Gio.icon_new_for_string(
                                `${Me.path}/assets/icons/plus-symbolic.svg`
                            )
                        );
                        item.connect('left-clicked', (_) => {
                            this.msWorkspace.focusTileable(tileable);
                        });
                        this.taskButtonContainer.add_child(item);
                        return item;
                    }
                }
            );
            if (this.items[this.msWorkspace.focusedIndex])
                this.items[this.msWorkspace.focusedIndex].add_style_class_name(
                    'active'
                );
        }

        updateCurrentTaskBar() {
            const { dropPlaceholder } = dragData;

            if (dragData.currentTaskBar !== this) {
                reparentActor(dropPlaceholder, this.taskButtonContainer);
                dragData.currentTaskBar = this;
            }

            return DND.DragMotionResult.MOVE_DROP;
        }

        reparentDragItem() {
            const { item, currentTaskBar } = dragData;
            reparentActor(item, currentTaskBar.taskButtonContainer);
        }

        _onDragEnd() {
            const {
                item,
                originalTaskBar,
                currentTaskBar,
                dropPlaceholder,
                draggedOver,
                draggedBefore,
            } = dragData;
            let index = currentTaskBar.taskButtonContainer
                .get_children()
                .indexOf(dropPlaceholder);
            currentTaskBar.taskButtonContainer.remove_child(dropPlaceholder);
            dropPlaceholder.destroy();
            currentTaskBar.taskButtonContainer.set_child_at_index(item, index);
            if (
                originalTaskBar !== currentTaskBar &&
                item.tileable instanceof MsWindow
            ) {
                Me.msWorkspaceManager.setWindowToMsWorkspace(
                    item.tileable,
                    currentTaskBar.msWorkspace
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
                draggedBefore,
            } = dragData;

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
            dropPlaceholder.resize(item.width, currentTaskBar.height);
        }

        _animateActiveIndicator() {
            let taskBarItem = this.getTaskBarItemOfTileable(
                this.msWorkspace.tileableFocused
            );
            if (
                this.taskBarItemSignal &&
                this.items.includes(this.taskBarItemSignal.from)
            ) {
                this.taskBarItemSignal.from.disconnect(
                    this.taskBarItemSignal.id
                );
            }
            if (!taskBarItem) {
                return;
            }

            if (!this.mapped) return;
            if (!this.taskActiveIndicator.width) {
                this.taskActiveIndicator.scale_x = 1;
                this.taskActiveIndicator.width = taskBarItem.width;
            } else {
                this.taskActiveIndicator.ease({
                    translation_x: taskBarItem.x,
                    scale_x: taskBarItem.width / this.taskActiveIndicator.width,
                    duration: 250,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    onComplete: () => {
                        this.taskActiveIndicator.scale_x = 1;
                        this.taskActiveIndicator.width = taskBarItem.width;
                    },
                });
            }
        }

        getTaskBarItemOfTileable(tileable) {
            return this.items.find((item) => {
                return item.tileable === tileable;
            });
        }
        vfunc_allocate(box, flags) {
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);

            Allocate(this.taskButtonContainer, box, flags);

            let taskActiveIndicatorBox = new Clutter.ActorBox();
            taskActiveIndicatorBox.x1 = contentBox.x1;
            taskActiveIndicatorBox.x2 =
                contentBox.x1 +
                this.taskActiveIndicator.get_preferred_width(-1)[0];
            taskActiveIndicatorBox.y1 =
                contentBox.y2 -
                this.taskActiveIndicator.get_preferred_height(-1)[0];
            taskActiveIndicatorBox.y2 = contentBox.y2;

            Allocate(this.taskActiveIndicator, taskActiveIndicatorBox, flags);
        }

        _onDestroy() {
            this.msWorkspaceSignals.forEach((signal) =>
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
                param_types: [GObject.TYPE_BOOLEAN],
            },
            'left-clicked': {},
            'middle-clicked': {},
        },
    },
    class TaskBarItemClass extends MatButton {
        _init(contentActor, draggable) {
            super._init({
                style_class: 'task-bar-item ',
            });
            this.y_expand = true;
            this._delegate = this;
            this.draggable = draggable;
            this.contentActor = contentActor;
            this.set_child(this.contentActor);
            this.mouseData = {
                pressed: false,
                dragged: false,
                originalCoords: null,
                originalSequence: null,
            };

            this.connect('event', (actor, event) => {
                let eventType = event.type();
                switch (eventType) {
                    case Clutter.EventType.BUTTON_PRESS:
                    case Clutter.EventType.TOUCH_BEGIN:
                        this.mouseData.pressed = true;
                        this.mouseData.originalCoords = event.get_coords();
                        this.mouseData.originalSequence = event.get_event_sequence();
                        break;

                    case Clutter.EventType.MOTION:
                    case Clutter.EventType.TOUCH_UPDATE:
                        if (this.mouseData.pressed && !this.mouseData.dragged) {
                            let coords = event.get_coords();
                            if (
                                Math.abs(
                                    this.mouseData.originalCoords[0] - coords[0]
                                ) > this.get_preferred_height(-1)[1] &&
                                !this.mouseData.dragged
                            ) {
                                if (this.draggable) {
                                    this.mouseData.dragged = true;
                                    this._draggable.startDrag(
                                        this.mouseData.originalCoords[0],
                                        this.mouseData.originalCoords[1],
                                        global.get_current_time(),
                                        this.mouseData.originalSequence
                                    );
                                }
                            }
                        }
                        break;

                    case Clutter.EventType.BUTTON_RELEASE:
                    case Clutter.EventType.TOUCH_END:
                        this.mouseData.pressed = false;
                        this.mouseData.dragged = false;
                        switch (event.get_button()) {
                            case 0:
                            case 1:
                                this.emit('left-clicked');
                                break;

                            case 2:
                                this.emit('middle-clicked');
                                break;

                            case 3:
                                this.menu.toggle();
                                break;
                        }
                        break;

                    case Clutter.EventType.LEAVE:
                        if (this.mouseData.pressed && !this.mouseData.dragged) {
                            if (this.draggable) {
                                this.mouseData.dragged = true;
                                this._draggable.startDrag(
                                    this.mouseData.originalCoords[0],
                                    this.mouseData.originalCoords[1],
                                    global.get_current_time(),
                                    this.mouseData.originalSequence
                                );
                            }
                        }
                        break;
                }
            });

            if (this.draggable) {
                this.initDrag();
            }
        }

        setActive(active) {
            if (!active && this.has_style_class_name('active')) {
                this.remove_style_class_name('active');
            }
            if (active && !this.has_style_class_name('active')) {
                this.add_style_class_name('active');
            }
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

        handleDragOver(source, actor, x) {
            if (!this.draggable || !(source instanceof TaskBarItem)) {
                return DND.DragMotionResult.NO_DROP;
            }
            this.emit('drag-over', x < this.width / 2);
            return DND.DragMotionResult.MOVE_DROP;
        }

        acceptDrop(source) {
            if (!this.draggable || !(source instanceof TaskBarItem)) {
                return false;
            }
            this.emit('drag-dropped');
            return true;
        }
    }
);

let TileableItem = GObject.registerClass(
    {
        Signals: {
            'close-clicked': {},
        },
    },
    class TileableItemClass extends TaskBarItem {
        _init(tileable) {
            this.container = new St.BoxLayout({
                style_class: 'task-bar-item-content',
            });
            super._init(this.container, true);
            this.tileable = tileable;
            this.app = tileable.app;
            if (ShellVersionMatch('3.34')) {
                this.startIconContainer = new St.Bin({
                    y_align: 1,
                });
            } else {
                this.startIconContainer = new St.Bin({
                    y_align: Clutter.ActorAlign.CENTER,
                });
            }
            if (ShellVersionMatch('3.34')) {
                this.endIconContainer = new St.Bin({
                    y_align: 1,
                });
            } else {
                this.endIconContainer = new St.Bin({
                    y_align: Clutter.ActorAlign.CENTER,
                });
            }
            this.menu = new PopupMenu.PopupMenu(this, 0.5, St.Side.TOP);
            this.menu.actor.add_style_class_name('horizontal-panel-menu');
            /* this.menu.addMenuItem(
                new PopupMenu.PopupSeparatorMenuItem(_('Open Windows'))
            ); */
            this.makePersistentAction = this.menu.addAction(
                `Make this fully persistent`,
                () => {
                    this.tileable.persistent = true;
                    this.endIconContainer.set_child(this.persistentIcon);
                    this.makePersistentAction.hide();
                    this.unmakePersistentAction.show();
                },
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/pin-symbolic.svg`
                )
            );

            this.unmakePersistentAction = this.menu.addAction(
                `Unmake this fully persistent`,
                () => {
                    this.tileable.persistent = false;
                    this.endIconContainer.set_child(this.closeButton);
                    this.makePersistentAction.show();
                    this.unmakePersistentAction.hide();
                },
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/pin-off-symbolic.svg`
                )
            );
            if (this.tileable._persistent) {
                this.makePersistentAction.hide();
            } else {
                this.unmakePersistentAction.hide();
            }
            this.menu.addAction(
                `Close`,
                () => {
                    this.emit('close-clicked');
                },
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/close-symbolic.svg`
                )
            );

            /* let item = new PopupMenu.PopupBaseMenuItem({ activate: true });
            item.add_child(
                new St.Label({
                    text: 'Make window persistent',
                })
            );
            this.menu.box.add_child(item); */
            Main.uiGroup.add_actor(this.menu.actor);
            this.menu.actor.hide();
            // TITLE
            this.title = new St.Label({
                style_class: 'task-bar-item-title',
                y_align: Clutter.ActorAlign.CENTER,
            });

            this.signalManager = new MsManager();
            this.style = getSettings('theme').get_string('taskbar-item-style');
            this.signalManager.observe(
                getSettings('theme'),
                'changed::taskbar-item-style',
                () => {
                    this.style = getSettings('theme').get_string(
                        'taskbar-item-style'
                    );
                    this.updateTitle();
                    this.setStyle();
                }
            );
            this.signalManager.observe(this.tileable, 'title-changed', () =>
                this.updateTitle()
            );
            this.setStyle();
            this.connect('destroy', this._onDestroy.bind(this));
            // CLOSE BUTTON
            this.closeIcon = new St.Icon({
                style_class: 'task-small-icon',
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/close-symbolic.svg`
                ),
            });
            this.closeButton = new St.Button({
                style_class: 'task-close-button',
                child: this.closeIcon,
            });
            this.closeButton.connect('clicked', () => {
                this.emit('close-clicked');
            });

            this.persistentIcon = new St.Icon({
                style_class: 'task-small-icon',
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/pin-symbolic.svg`
                ),
            });
            if (this.tileable._persistent) {
                this.endIconContainer.set_child(this.persistentIcon);
            } else {
                this.endIconContainer.set_child(this.closeButton);
            }
            // LAYOUT CONTAINER
            this.container.add_child(this.startIconContainer);
            this.container.add_child(this.title);
            this.container.add_child(this.endIconContainer);
        }

        setStyle() {
            this.updateTitle();

            if (this.style == 'icon') {
                this.title.hide();
            } else {
                this.title.show();
            }
        }

        buildIcon(height) {
            if (this.icon) this.icon.destroy();
            this.lastHeight = height;
            this.icon = this.app.create_icon_texture(height / 2);
            this.icon.style_class = 'app-icon';
            this.icon.set_size(height / 2, height / 2);
            this.startIconContainer.set_child(this.icon);
            let smallIconSize = Math.max(Math.round(height / 3), 18);
            this.persistentIcon.set_icon_size(smallIconSize);
            this.closeIcon.set_icon_size(smallIconSize);
            this.queue_relayout();
        }

        setActive(active) {
            super.setActive(active);
            this.updateTitle();
        }

        // Update the title and crop it if it's too long
        updateTitle() {
            if (this.style == 'full') {
                if (this.tileable.title.includes(this.app.get_name())) {
                    this.title.text = this.tileable.title;
                } else {
                    this.title
                        .get_clutter_text()
                        .set_markup(
                            `${this.tileable.title}<span alpha="${
                                this.has_style_class_name('active')
                                    ? '40%'
                                    : '20%'
                            }">   -   ${this.app.get_name()}</span>`
                        );
                }
            } else if (this.style == 'name') {
                this.title.text = this.app.get_name();
            }
        }
        vfunc_allocate(box, flags) {
            if (!this.icon || this.lastHeight != box.get_height()) {
                this.buildIcon(box.get_height());
            }
            super.vfunc_allocate(box, flags);
        }
        _onDestroy() {
            this.signalManager.destroy();
            this.menu.destroy();
        }
    }
);

let IconTaskBarItem = GObject.registerClass(
    class IconTaskBarItem extends TaskBarItem {
        _init(tileable, gicon) {
            this.container = new St.Bin({
                style_class: 'task-bar-icon-container',
            });
            super._init(this.container, false);
            this.tileable = tileable;

            this.icon = new St.Icon({
                gicon,
                style_class: 'app-icon',
                icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
            });
            this.container.set_child(this.icon);
        }

        /**
         * Just the panel width
         */
        vfunc_get_preferred_width(_forHeight) {
            return [_forHeight, _forHeight];
        }

        vfunc_allocate(box, flags) {
            if (
                this.icon &&
                this.icon.get_icon_size() != box.get_height() / 2
            ) {
                this.icon.set_icon_size(box.get_height() / 2);
            }
            super.vfunc_allocate(box, flags);
        }
    }
);

var DropPlaceholder = GObject.registerClass(
    {
        Signals: {
            'drag-dropped': {},
            'drag-over': {},
        },
    },
    class DropPlaceholder extends St.Widget {
        _init(targetClass) {
            super._init({ style_class: 'drop-placeholder' });
            this.targetClass = targetClass;
            //this.set_style('background:rgba(255,255,255,0.1)');
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

        resize(width, height) {
            this.width = width;
            this.height = height;
        }
    }
);

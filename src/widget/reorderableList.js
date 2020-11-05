/** Gnome libs imports */
const { Clutter, GObject, St, GLib } = imports.gi;
const DND = imports.ui.dnd;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { reparentActor } = Me.imports.src.utils.index;

/* exported ReorderableList */
var ReorderableList = GObject.registerClass(
    {
        Signals: {
            'drag-start': {},
            'drag-end': {},
            'actor-moved': {
                param_types: [Clutter.Actor.$gtype, GObject.TYPE_INT],
            },
        },
    },
    class ReorderableList extends Clutter.Actor {
        _init(vertical = false) {
            super._init({
                layout_manager: new Clutter.BoxLayout({
                    orientation: vertical
                        ? Clutter.Orientation.VERTICAL
                        : Clutter.Orientation.HORIZONTAL,
                }),
            });
            this.vertical = vertical;
            this.dragInProgress = false;
            this.connect('actor-added', (_, actor) => {
                if (!actor._draggable && actor !== this.placeHolder)
                    this.makeActorDraggable(actor);
            });

            this.placeHolder = new DropPlaceholder();
            this.placeHolder.connect('drag-dropped', () => {
                reparentActor(this.draggedActor, this);
            });
        }

        makeActorDraggable(actor) {
            actor.originalHandleDragOver = actor.handleDragOver;
            actor.originalAcceptDrop = actor.acceptDrop;
            actor.handleDragOver = (source, _, x, y) => {
                const originalResult = actor.originalHandleDragOver
                    ? actor.originalHandleDragOver(source, actor, x, y)
                    : null;
                if (source === this.draggedActor) {
                    if (
                        actor.draggable != undefined &&
                        actor.draggable === false
                    )
                        return DND.DragMotionResult.NO_DROP;
                    const actorIndex = this.get_children()
                        .filter((actor) => actor != this.placeHolder)
                        .indexOf(actor);
                    const after = this.vertical
                        ? y > actor.height / 2
                        : x > actor.width / 2;
                    Me.logFocus('handleDragOver', x, after);
                    this.movePlaceholder(actorIndex + (after ? 1 : 0));
                    return DND.DragMotionResult.NO_DROP;
                }

                return originalResult || DND.DragMotionResult.MOVE_DROP;
            };

            actor.acceptDrop = (source) => {
                source._draggable._dragActor.get_parent().remove_child(source);
                if (source === this.draggedActor) {
                    return true;
                }
                return actor.originalAcceptDrop
                    ? actor.originalAcceptDrop(source)
                    : false;
            };

            actor._draggable = DND.makeDraggable(actor, {
                restoreOnSuccess: false,
                manualMode: false,
            });

            let eventPressed = false;
            let timeoutId = null;
            let originalIndex = null;
            /* actor.connect('event', (_, event) => {
                if (actor.draggable != undefined && actor.draggable === false)
                    return;
                const eventType = event.type();
                switch (eventType) {
                    // On Press
                    case Clutter.EventType.BUTTON_PRESS:
                    case Clutter.EventType.TOUCH_BEGIN:
                        // handle press
                        eventPressed = true;
                        timeoutId = GLib.timeout_add(
                            GLib.PRIORITY_DEFAULT,
                            300,
                            () => {
                                if (eventPressed) {
                                    eventPressed = false;
                                    originalIndex = this.get_children().indexOf(
                                        actor
                                    );
                                    this.placeHolder.resize(
                                        actor.width,
                                        actor.height
                                    );
                                    this.draggedActor = actor;
                                    actor._draggable.startDrag(
                                        ...event.get_coords(),
                                        event.get_time(),
                                        event.get_event_sequence(),
                                        event.get_device()
                                    );
                                    this.movePlaceholder(originalIndex);
                                    this.emit('drag-start');
                                }
                            }
                        );
                        break;

                    //On Release
                    case Clutter.EventType.BUTTON_RELEASE:
                    case Clutter.EventType.TOUCH_END:
                    case Clutter.EventType.LEAVE:
                        // handle release
                        eventPressed = false;
                        if (timeoutId) {
                            GLib.source_remove(timeoutId);
                            timeoutId = null;
                        }
                        break;
                }
            }); */

            actor._draggable.connect('drag-begin', () => {
                originalIndex = this.get_children().indexOf(actor);
                this.placeHolder.resize(actor.width, actor.height);
                this.draggedActor = actor;
                this.movePlaceholder(originalIndex);
                this.emit('drag-start');
            });

            actor._draggable.connect('drag-cancelled', () => {
                Me.logFocus('drag-cancelled');
                this.set_child_at_index(this.placeHolder, originalIndex);
            });
            actor._draggable.connect('drag-end', () => {
                Me.logFocus('drag-end');

                const placeholderIndex = this.get_children().indexOf(
                    this.placeHolder
                );
                if (this.placeHolder.get_parent() == this)
                    this.remove_child(this.placeHolder);

                if (this.draggedActor) {
                    reparentActor(this.draggedActor, this);
                    this.set_child_at_index(
                        this.draggedActor,
                        placeholderIndex
                    );
                    if (placeholderIndex !== originalIndex) {
                        this.emit(
                            'actor-moved',
                            this.draggedActor,
                            placeholderIndex
                        );
                    }
                }

                this.draggedActor = null;
                originalIndex = null;
                this.emit('drag-end');
            });
        }

        startDragActor(actor) {}
        movePlaceholder(toIndex) {
            Me.logFocus('movePlaceholder', toIndex);

            if (this.placeHolder.get_parent()) {
                this.set_child_at_index(this.placeHolder, toIndex);
            } else {
                this.insert_child_at_index(this.placeHolder, toIndex);
            }
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
        _init() {
            super._init({ style_class: 'drop-placeholder' });
            this._delegate = this;
        }

        handleDragOver(source) {
            return DND.DragMotionResult.MOVE_DROP;
        }

        acceptDrop(source) {
            this.emit('drag-dropped');
            return true;
        }

        resize(width, height) {
            this.width = width;
            this.height = height;
        }
    }
);

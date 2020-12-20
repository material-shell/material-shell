/** Gnome libs imports */
const { Clutter, GObject, St, GLib } = imports.gi;
const DND = imports.ui.dnd;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { reparentActor } = Me.imports.src.utils.index;
const { MatButton } = Me.imports.src.widget.material.button;

/* exported ReorderableList */
var ReorderableList = GObject.registerClass(
    {
        Signals: {
            'drag-start': {},
            'drag-end': {},
            'actor-moved': {
                param_types: [Clutter.Actor.$gtype, GObject.TYPE_INT],
            },
            'foreign-actor-inserted': {
                param_types: [Clutter.Actor.$gtype, GObject.TYPE_INT],
            },
        },
    },
    class ReorderableList extends Clutter.Actor {
        _init(vertical = false, classAccepted = []) {
            super._init({
                layout_manager: new Clutter.BoxLayout({
                    orientation: vertical
                        ? Clutter.Orientation.VERTICAL
                        : Clutter.Orientation.HORIZONTAL,
                }),
            });
            this.vertical = vertical;
            this.classAccepted = classAccepted;
            this.dragInProgress = false;
            this.connect('actor-added', (_, actor) => {
                if (!actor._draggable && actor !== this.placeHolder)
                    this.makeActorDraggable(actor);
            });

            this.placeHolder = new DropPlaceholder();
            this.placeHolder.connect('drag-dropped', (_, source) => {
                if (source._draggable._dragActor.get_parent()) {
                  source._draggable._dragActor.get_parent().remove_child(source);
                }
            });
        }

        makeActorDraggable(actor) {
            actor.originalHandleDragOver = actor.handleDragOver;
            actor.originalAcceptDrop = actor.acceptDrop;
            actor.handleDragOver = (source, _, x, y) => {
                const originalResult = actor.originalHandleDragOver
                    ? actor.originalHandleDragOver(source, actor, x, y)
                    : null;
                const isForeignActor =
                    source != this.draggedActor &&
                    this.classAccepted.some(
                        (aClass) => source instanceof aClass
                    );
                if (isForeignActor && !this.foreignActor) {
                    this.foreignEntered(source);
                }
                if (source === this.draggedActor || isForeignActor) {
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
                    this.placeHolder.resize(source.width, source.height);
                    this.movePlaceholder(actorIndex + (after ? 1 : 0));
                    return DND.DragMotionResult.NO_DROP;
                }

                return originalResult || DND.DragMotionResult.MOVE_DROP;
            };

            actor.acceptDrop = (source) => {
                if (source._draggable._dragActor.get_parent()) {
                  source._draggable._dragActor.get_parent().remove_child(source);
                }
                if (
                    source === this.draggedActor ||
                    source === this.foreignActor
                ) {
                    return true;
                }

                return actor.originalAcceptDrop
                    ? actor.originalAcceptDrop(source)
                    : false;
            };

            const isMatButton = actor instanceof MatButton;
            actor._draggable = DND.makeDraggable(actor, {
                restoreOnSuccess: false,
                manualMode: isMatButton,
            });

            if (isMatButton) {
                actor.connect('drag-start', (_, event) => {
                    let [x, y] = event.get_coords();

                    actor._draggable.startDrag(
                        x,
                        y,
                        global.get_current_time(),
                        event.get_event_sequence(),
                        event.get_device()
                    );
                });
            }

            let originalIndex = null;

            actor._draggable.connect('drag-begin', () => {
                originalIndex = this.get_children().indexOf(actor);
                this.placeHolder.resize(actor.width, actor.height);
                this.draggedActor = actor;
                this.movePlaceholder(originalIndex);
                this.emit('drag-start');
            });

            actor._draggable.connect('drag-cancelled', () => {
                this.set_child_at_index(this.placeHolder, originalIndex);
            });
            actor._draggable.connect('drag-end', () => {
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

        movePlaceholder(toIndex) {
            if (this.placeHolder.get_parent()) {
                this.set_child_at_index(this.placeHolder, toIndex);
            } else {
                this.insert_child_at_index(this.placeHolder, toIndex);
            }
        }

        foreignEntered(actor) {
            this.foreignActor = actor;
            const connectCancelId = actor._draggable.connect(
                'drag-cancelled',
                () => {
                    if (this.placeHolder.get_parent() == this)
                        this.remove_child(this.placeHolder);
                }
            );
            const connectEndId = actor._draggable.connect('drag-end', () => {
                let placeholderIndex;
                let actor = this.foreignActor;
                if (this.placeHolder.get_parent()) {
                    placeholderIndex = this.get_children().indexOf(
                        this.placeHolder
                    );
                    this.remove_child(this.placeHolder);
                }
                actor._draggable.disconnect(connectCancelId);
                actor._draggable.disconnect(connectEndId);
                delete this.foreignActor;
                if (placeholderIndex) {
                    this.emit(
                        'foreign-actor-inserted',
                        actor,
                        placeholderIndex
                    );
                }
            });
        }
    }
);

var DropPlaceholder = GObject.registerClass(
    {
        Signals: {
            'drag-dropped': {
                param_types: [Clutter.Actor.$gtype],
            },
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
            this.emit('drag-dropped', source);
            return true;
        }

        resize(width, height) {
            this.width = width;
            this.height = height;
        }
    }
);

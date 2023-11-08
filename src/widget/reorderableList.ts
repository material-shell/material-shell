/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import St from 'gi://St';
import * as DND from 'resource:///org/gnome/shell/ui/dnd.js';
import { assert } from 'src/utils/assert';
import { registerGObjectClass } from 'src/utils/gjs';
import { reparentActor } from 'src/utils/index';
import { MatButton } from 'src/widget/material/button';

/** Extension imports */
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

interface DraggableActor extends Clutter.Actor {
    draggable: any;
    _draggable: any;
    originalHandleDragOver?: (
        source: DraggableActor,
        actor: Clutter.Actor,
        x: number,
        y: number
    ) => any;
    handleDragOver?: (
        source: DraggableActor,
        actor: Clutter.Actor,
        x: number,
        y: number
    ) => any;
    originalAcceptDrop: (source: DraggableActor) => boolean;
    acceptDrop: (source: DraggableActor) => boolean;
}

@registerGObjectClass
export class ReorderableList extends Clutter.Actor {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'ReorderableList',
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
    };
    foreignActor: DraggableActor | undefined;
    placeHolder: DropPlaceholder;
    draggedActor: DraggableActor | null | undefined;
    vertical: boolean;
    classAccepted: any[];
    dragInProgress: boolean;

    constructor(vertical = false, classAccepted: any[] = []) {
        super({
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

    makeActorDraggable(nonDraggableActor: Clutter.Actor) {
        const actor = nonDraggableActor as DraggableActor;
        actor.originalHandleDragOver = actor.handleDragOver;
        actor.originalAcceptDrop = actor.acceptDrop;
        actor.handleDragOver = (source, _, x, y) => {
            const originalResult = actor.originalHandleDragOver
                ? actor.originalHandleDragOver(source, actor, x, y)
                : null;
            const isForeignActor =
                source != this.draggedActor &&
                this.classAccepted.some((aClass) => source instanceof aClass);
            if (isForeignActor && !this.foreignActor) {
                this.foreignEntered(source);
            }
            if (source === this.draggedActor || isForeignActor) {
                if (actor.draggable != undefined && actor.draggable === false)
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
            if (source === this.draggedActor || source === this.foreignActor) {
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
                const [x, y] = event.get_coords();

                actor._draggable.startDrag(
                    x,
                    y,
                    global.get_current_time(),
                    event.get_event_sequence(),
                    event.get_device()
                );
            });
        }

        let originalIndex: number | null = null;

        actor._draggable.connect('drag-begin', () => {
            originalIndex = this.get_children().indexOf(actor);
            this.placeHolder.resize(actor.width, actor.height);
            this.draggedActor = actor;
            this.movePlaceholder(originalIndex);
            this.emit('drag-start');
        });

        actor._draggable.connect('drag-cancelled', () => {
            assert(
                originalIndex !== null,
                'drag cancelled before it was started'
            );
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
                this.set_child_at_index(this.draggedActor, placeholderIndex);
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

    movePlaceholder(toIndex: number) {
        if (this.placeHolder.get_parent()) {
            this.set_child_at_index(this.placeHolder, toIndex);
        } else {
            this.insert_child_at_index(this.placeHolder, toIndex);
        }
    }

    foreignEntered(actor: DraggableActor) {
        this.foreignActor = actor;
        const connectCancelId = actor._draggable.connect(
            'drag-cancelled',
            () => {
                if (this.placeHolder.get_parent() == this)
                    this.remove_child(this.placeHolder);
            }
        );
        const connectEndId = actor._draggable.connect('drag-end', () => {
            let placeholderIndex: number | undefined = undefined;
            const actor = this.foreignActor;
            assert(actor !== undefined, 'drag ended before it was started');

            if (this.placeHolder.get_parent()) {
                placeholderIndex = this.get_children().indexOf(
                    this.placeHolder
                );
                this.remove_child(this.placeHolder);
            }
            actor._draggable.disconnect(connectCancelId);
            actor._draggable.disconnect(connectEndId);
            delete this.foreignActor;
            if (placeholderIndex !== undefined) {
                this.emit('foreign-actor-inserted', actor, placeholderIndex);
            }
        });
    }
}

@registerGObjectClass
export class DropPlaceholder extends St.Widget {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'DropPlaceHolder',
        Signals: {
            'drag-dropped': {
                param_types: [Clutter.Actor.$gtype],
            },
            'drag-over': {},
        },
    };
    _delegate: this;

    constructor() {
        super({ style_class: 'drop-placeholder' });
        this._delegate = this;
    }

    /// Called by gnome's drag-drop system via the _delegate field
    handleDragOver(source: Clutter.Actor) {
        return DND.DragMotionResult.MOVE_DROP;
    }

    /// Called by gnome's drag-drop system via the _delegate field
    acceptDrop(source: Clutter.Actor) {
        this.emit('drag-dropped', source);
        return true;
    }

    resize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

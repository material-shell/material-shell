/** Gnome libs imports */
import * as GObject from 'gobject';
import * as Clutter from 'clutter';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { reparentActor } from 'src/utils/index';
import { registerGObjectClass } from 'src/utils/gjs';

interface TransitionConfig {
    duration: number,
    mode: Clutter.AnimationMode,
    onComplete: () => void,
    translation_y?: number,
    translation_x?: number,
}

@registerGObjectClass
export class TranslationAnimator extends Clutter.Actor {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'TranslationAnimator',
        Signals: {
            'transition-completed': {},
        },
    }

    vertical: boolean;
    transitionContainer: Clutter.Actor<Clutter.BoxLayout, Clutter.ContentPrototype>;
    animationInProgress: boolean | undefined;

    constructor(vertical = false) {
        super({
            layout_manager: new Clutter.BinLayout(),
            clip_to_allocation: true,
        });

        this.vertical = vertical;
        this.transitionContainer = new Clutter.Actor({
            layout_manager: new Clutter.BoxLayout({
                orientation: this.vertical
                    ? Clutter.Orientation.VERTICAL
                    : Clutter.Orientation.HORIZONTAL,
            }),
        });
        this.add_actor(this.transitionContainer);
    }

    setTranslation(initialActors: (Clutter.Actor | null)[], enteringActors: Clutter.Actor[], direction: number) {
        if (this.animationInProgress) {
            this.transitionContainer.remove_all_transitions();
            this.animationInProgress = false;

            // Remove all clones outside visible area
            let visibleArea = {
                x1: Math.abs(this.transitionContainer.translation_x),
                x2:
                    Math.abs(this.transitionContainer.translation_x) +
                    this.width,
                y1: Math.abs(this.transitionContainer.translation_y),
                y2:
                    Math.abs(this.transitionContainer.translation_y) +
                    this.height,
            };

            // Foreach child check if it's in visible bound
            this.transitionContainer.get_children().forEach((actor) => {
                let allocationBox = actor.allocation;
                if (this.vertical) {
                    if (allocationBox.y2 < visibleArea.y1) {
                        this.transitionContainer.remove_actor(actor);
                        this.transitionContainer.translation_y =
                            this.transitionContainer.translation_y +
                            allocationBox.get_height();
                    }
                    if (allocationBox.y1 > visibleArea.y2) {
                        this.transitionContainer.remove_actor(actor);
                    }
                } else {
                    if (allocationBox.x2 < visibleArea.x1) {
                        this.transitionContainer.remove_actor(actor);
                        this.transitionContainer.translation_x =
                            this.transitionContainer.translation_x +
                            allocationBox.get_width();
                    }
                    if (allocationBox.x1 > visibleArea.x2) {
                        this.transitionContainer.remove_actor(actor);
                    }
                }
            });
        } else if (initialActors) {
            initialActors.forEach((actor) => {
                reparentActor(actor, this.transitionContainer);
            });
        }

        enteringActors.forEach((actor, index) => {
            // check if the next actor are already in transition
            let nextActorFound = this.transitionContainer
                .get_children()
                .find((existingActor) => {
                    return existingActor === actor;
                });
            //insert nextActor Clone at the top pile if direction is positive or at the end if negative
            if (!nextActorFound) {
                reparentActor(actor, this.transitionContainer);
                if (direction < 0) {
                    this.transitionContainer.set_child_at_index(
                        actor,
                        index
                    );
                    if (this.vertical) {
                        this.transitionContainer.translation_y -=
                            actor.height;
                    } else {
                        this.transitionContainer.translation_x -=
                            actor.width;
                    }
                }
            }
        });
        //This seem uncessary but it's help to the this.width calculation when the next actor is a placeholder
        this.transitionContainer.set_child_at_index(
            this.transitionContainer.get_child_at_index(0),
            0
        );

        let transitionConfig: TransitionConfig = {
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                this.endTransition();
            },
        };

        let target = 0;
        if (direction > 0) {
            target = this.vertical
                ? this.transitionContainer.height - this.height
                : this.transitionContainer.width - this.width;
        }
        if (this.vertical) {
            transitionConfig.translation_y = -target;
        } else {
            transitionConfig.translation_x = -target;
        }
        this.animationInProgress = true;
        this.transitionContainer.ease(transitionConfig);
    }

    endTransition() {
        this.transitionContainer.translation_x = 0;
        this.transitionContainer.translation_y = 0;
        this.animationInProgress = false;
        this.emit('transition-completed');
        this.transitionContainer.remove_all_children();
    }
}

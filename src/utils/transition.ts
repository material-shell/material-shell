/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import { WithSignals } from 'src/utils/gjs';
import { InfinityTo0, reparentActor } from 'src/utils/index';

/** Extension imports */

interface TransitionConfig {
    duration: number;
    mode: Clutter.AnimationMode;
    onComplete: () => void;
    translation_y?: number;
    translation_x?: number;
}

export class TranslationHelper extends WithSignals {
    container: Clutter.Actor;
    vertical: boolean;
    animationInProgress: boolean | undefined;

    constructor(container: Clutter.Actor, vertical = false) {
        super();

        this.container = container;
        this.vertical = vertical;
    }

    getTransformedBox(actor: Clutter.Actor) {
        const box = new Clutter.ActorBox();
        box.x1 = actor.x + actor.translation_x;
        box.x2 = box.x1 + actor.width;
        box.y1 = actor.y + actor.translation_y;
        box.y2 = box.y1 + actor.height;
        return box;
    }

    /** Starts a transition.
     *
     * Note: The translation animator takes full control over the parenting of the actors until the animation is complete.
     * When calling this function the actors may be parented in arbitrary ways, they will be reparented to the proper state.
     */
    setTranslation(
        // Entering by translation actors
        enteringActors: Clutter.Actor[],
        // global actors list
        globalContext: Clutter.Actor[],
        direction: number
    ): void {
        let translationY = this.container.translation_y;
        let translationX = this.container.translation_x;

        // Determine visible area
        const visibleArea = {
            x1: Math.abs(translationX),
            x2: Math.abs(translationX) + this.container.allocation.get_width(),
            y1: Math.abs(translationY),
            y2: Math.abs(translationY) + this.container.allocation.get_height(),
        };

        /**
         * If Animation is already in progress we want to remove all actor that are not currently visible on the screen in order to reduce the distance needed to reach the final entering actors
         */
        if (this.animationInProgress) {
            this.container.remove_all_transitions();
            this.animationInProgress = false;

            // Foreach this.displayed child check if it's in visible bound and hide every one that are outisde and update the current translation accordingly in order to prevent any visible jump
            this.container
                .get_children()
                .filter((actor) => actor.visible)
                .forEach((actor) => {
                    const allocationBox = this.getTransformedBox(actor);
                    if (this.vertical) {
                        if (allocationBox.y2 < visibleArea.y1) {
                            actor.hide();
                            translationY += InfinityTo0(
                                allocationBox.get_height()
                            );
                        }
                        if (allocationBox.y1 > visibleArea.y2) {
                            actor.hide();
                        }
                    } else {
                        if (allocationBox.x2 < visibleArea.x1) {
                            actor.hide();
                            translationX += InfinityTo0(
                                allocationBox.get_width()
                            );
                        }
                        if (allocationBox.x1 > visibleArea.x2) {
                            actor.hide();
                        }
                    }
                });
        }

        /**
         * For each entering actors we want to be sure that:
         * 1- their are the child of the container and visible
         * 2- if is new or was previously hidden we place it at the start or end of the pile regarding the translation direction
         * 3- if we place them at the start we adjust the translation of the container
         */
        enteringActors.forEach((actor, index) => {
            // check if the next actor are already in transition
            const enteringActorFound = this.container.contains(actor);
            //insert nextActor Clone at the top pile if direction is positive or at the end if negative
            if (!enteringActorFound || !actor.visible) {
                reparentActor(actor, this.container);
                actor.visible = true;
                if (direction < 0) {
                    this.container.set_child_at_index(actor, index);
                    if (this.vertical) {
                        translationY -= actor.height;
                    } else {
                        translationX -= actor.width;
                    }
                }
            }
        });

        let visibleChildren = this.container
            .get_children()
            .filter((actor) => actor.visible);

        const originActor =
            direction > 0
                ? visibleChildren[0]
                : visibleChildren[visibleChildren.length - 1];

        const targetActor =
            direction > 0
                ? visibleChildren[visibleChildren.length - 1]
                : visibleChildren[0];

        const originActorGlobalIndex = globalContext.indexOf(originActor);
        const targetActorGlobalIndex = globalContext.indexOf(targetActor);
        const minGlobalIndex = Math.min(
            originActorGlobalIndex,
            targetActorGlobalIndex
        );
        const maxGlobalIndex = Math.max(
            originActorGlobalIndex,
            targetActorGlobalIndex
        );
        /**
         * Remove all actors that are not in the correct global context order (When transitionning back and forth between several indexes foreign actors could be at wrong indexes)
         * Ex: Navigating from index 1 to 3 then 2, the displayed actors would be [2,1,3]
         */
        for (let index = 1; index < visibleChildren.length - 1; index++) {
            const actor = visibleChildren[index];
            const globalIndex = globalContext.indexOf(actor);
            if (globalIndex < minGlobalIndex || globalIndex > maxGlobalIndex) {
                actor.hide();
                const allocationBox = this.getTransformedBox(actor);
                if (this.vertical) {
                    if (allocationBox.y1 < visibleArea.y1) {
                        translationY += InfinityTo0(allocationBox.get_height());
                    }
                } else {
                    if (allocationBox.x1 < visibleArea.x1) {
                        translationX += InfinityTo0(allocationBox.get_width());
                    }
                }
            }
        }

        /**
         * Now we rearange every actor in a row or column (if vertical) using the translation property in order to not alter allocation
         */
        visibleChildren = this.container
            .get_children()
            .filter((actor) => actor.visible);
        for (let index = 0; index < visibleChildren.length; index++) {
            const actor = visibleChildren[index];
            const isFirst = index == 0;
            if (isFirst) {
                // We want the origin to be 0
                actor.translation_x = -actor.x;
                actor.translation_y = -actor.y;
            } else {
                const prevActor = visibleChildren[index - 1];
                const allocationBox = this.getTransformedBox(prevActor);
                if (this.vertical) {
                    actor.translation_y = allocationBox.y2;
                } else {
                    actor.translation_x = allocationBox.x2 - actor.x;
                }
            }
        }

        /**
         * Update the container translation that could have changed with entered actors or clearing previous transition actors
         */
        this.container.translation_y = translationY;
        this.container.translation_x = translationX;

        /**
         * Determine the target translation value which is either the start (0) or the lastest actor external bounds
         */
        let targetTranslation = 0;
        if (direction > 0) {
            const lastChild = visibleChildren[visibleChildren.length - 1];
            const lastChildBox = this.getTransformedBox(lastChild);
            targetTranslation = this.vertical
                ? lastChildBox.y2 - this.container.allocation.get_height()
                : lastChildBox.x2 - this.container.allocation.get_width();
        }

        /**
         * Apply the new transition to the container
         */
        const transitionConfig: TransitionConfig = {
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                this.endTransition(
                    this.container
                        .get_children()
                        .filter((actor) => !enteringActors.includes(actor))
                );
            },
        };

        if (this.vertical) {
            transitionConfig.translation_y = -targetTranslation;
        } else {
            transitionConfig.translation_x = -targetTranslation;
        }

        this.animationInProgress = true;
        this.container.ease(transitionConfig);
    }

    endTransition(actorsLeftList: Clutter.Actor[]): void {
        this.container.translation_x = 0;
        this.container.translation_y = 0;
        for (const child of this.container.get_children()) {
            child.set_translation(0, 0, 0);
            child.show();
        }
        this.animationInProgress = false;
        this.emit('transition-completed', actorsLeftList);
    }
}

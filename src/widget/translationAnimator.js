const { St, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const Tweener = imports.ui.tweener;

/* exported TranslationAnimator */
var TranslationAnimator = GObject.registerClass(
    {
        GTypeName: 'TranslationAnimator',
        Signals: {
            'transition-completed': {}
        }
    },
    class TranslationAnimator extends St.Widget {
        _init(vertical = false) {
            super._init({
                clip_to_allocation: true
            });
            this.vertical = vertical;
            this.transitionContainer = new St.Widget();
            this.firstContainer = new St.Widget();
            this.secondContainer = new St.Widget();
            this.transitionContainer.add_actor(this.firstContainer);
            this.transitionContainer.add_actor(this.secondContainer);
            this.add_actor(this.transitionContainer);
        }

        setTranslation(previousActor, nextActor, direction) {
            const containers = [this.firstContainer, this.secondContainer];
            if (direction < 0) {
                containers.reverse();
            }
            const [oldContainer, newContainer] = containers;

            //Save actor origin
            [previousActor, nextActor].forEach(actor => {
                if (actor && !actor.origin) {
                    if (!actor.get_parent()) {
                        log('no parent for ', actor.title);
                    }
                    actor.origin = {
                        parent: actor.get_parent(),
                        index: actor
                            .get_parent()
                            .get_children()
                            .indexOf(actor)
                    };
                }
            });

            if (previousActor) {
                previousActor.beforeTransitionParent = previousActor.get_parent();
                previousActor.reparent(oldContainer);
            }

            if (nextActor) {
                nextActor.beforeTransitionParent = nextActor.get_parent();
                nextActor.reparent(newContainer);
                nextActor.show();
            }
            const actorUsedToDetermineSize = previousActor || nextActor;
            const sizeToTranslate = this.vertical
                ? actorUsedToDetermineSize.height
                : actorUsedToDetermineSize.width;

            if (!this.animationInProgress) {
                if (this.vertical) {
                    this.secondContainer.set_position(0, sizeToTranslate);
                    this.transitionContainer.set_position(
                        0,
                        direction > 0 ? 0 : -sizeToTranslate
                    );
                } else {
                    this.secondContainer.set_position(sizeToTranslate, 0);
                    this.transitionContainer.set_position(
                        direction > 0 ? 0 : -sizeToTranslate,
                        0
                    );
                }

                this.animationInProgress = true;
            }

            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(this.transitionContainer, {
                    x: this.vertical ? 0 : direction > 0 ? -sizeToTranslate : 0,
                    y: this.vertical
                        ? direction > 0
                            ? -sizeToTranslate
                            : 0
                        : 0,
                    time: 0.25,
                    transition: 'easeOutQuad',
                    onComplete: () => {
                        this.animationInProgress = false;
                        this.endTransition();
                    }
                });
            } else {
                this.transitionContainer.ease({
                    x: this.vertical ? 0 : direction > 0 ? -sizeToTranslate : 0,
                    y: this.vertical
                        ? direction > 0
                            ? -sizeToTranslate
                            : 0
                        : 0,
                    duration: 250,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    onComplete: () => {
                        this.animationInProgress = false;
                        this.endTransition();
                    }
                });
            }
        }
        endTransition() {
            [
                ...this.firstContainer.get_children(),
                ...this.secondContainer.get_children()
            ].forEach(actor => {
                actor.get_parent().remove_child(actor);
                actor.origin.parent.insert_child_at_index(
                    actor,
                    actor.origin.index
                );
                delete actor.origin;
            });
            this.emit('transition-completed');
        }

        _onDestroy() {}
    }
);

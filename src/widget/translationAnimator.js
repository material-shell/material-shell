const { St, GObject, Clutter, GLib } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const Tweener = imports.ui.tweener;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;
const { reparentActor } = Me.imports.src.utils.index;
/* exported TranslationAnimator */
var TranslationAnimator = GObject.registerClass(
    {
        GTypeName: 'TranslationAnimator',
        Signals: {
            'transition-completed': {},
        },
    },
    class TranslationAnimator extends St.Widget {
        _init(vertical = false) {
            super._init({
                clip_to_allocation: true,
            });
            AddLogToFunctions(this);
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
            [previousActor, nextActor].forEach((actor) => {
                if (actor && !actor.origin) {
                    if (!actor.get_parent()) {
                        log('no parent for ', actor.title);
                    }
                    actor.origin = {
                        parent: actor.get_parent(),
                        index: actor.get_parent().get_children().indexOf(actor),
                    };
                }
            });

            if (previousActor) {
                reparentActor(previousActor, oldContainer);
            }
            if (nextActor) {
                log(nextActor, nextActor.mapped, nextActor.has_key_focus());
                log('middle');
                reparentActor(nextActor, newContainer);
                log('after');
            }
            const actorUsedToDetermineSize = previousActor || nextActor;
            const sizeToTranslate = this.vertical
                ? actorUsedToDetermineSize.height
                : actorUsedToDetermineSize.width;
            if (!this.animationInProgress) {
                if (this.vertical) {
                    this.secondContainer.translation_x = 0;
                    this.secondContainer.translation_y = sizeToTranslate;
                    this.transitionContainer.translation_x = 0;
                    this.transitionContainer.translation_y =
                        direction > 0 ? 0 : -sizeToTranslate;
                } else {
                    this.secondContainer.translation_x = sizeToTranslate;
                    this.secondContainer.translation_y = 0;
                    this.transitionContainer.translation_x =
                        direction > 0 ? 0 : -sizeToTranslate;
                    this.transitionContainer.translation_y = 0;
                }

                this.animationInProgress = true;
            }

            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(this.transitionContainer, {
                    translation_x: this.vertical
                        ? 0
                        : direction > 0
                        ? -sizeToTranslate
                        : 0,
                    translation_y: this.vertical
                        ? direction > 0
                            ? -sizeToTranslate
                            : 0
                        : 0,
                    time: 0.25,
                    transition: 'easeOutQuad',
                    onComplete: () => {
                        this.endTransition();
                    },
                });
            } else {
                this.transitionContainer.ease({
                    translation_x: this.vertical
                        ? 0
                        : direction > 0
                        ? -sizeToTranslate
                        : 0,
                    translation_y: this.vertical
                        ? direction > 0
                            ? -sizeToTranslate
                            : 0
                        : 0,
                    duration: 250,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    onComplete: () => {
                        this.endTransition();
                    },
                });
            }
        }
        endTransition() {
            [
                ...this.firstContainer.get_children(),
                ...this.secondContainer.get_children(),
            ].forEach((actor) => {
                reparentActor(actor, actor.origin.parent);
                actor.origin.parent.set_child_at_index(
                    actor,
                    actor.origin.index
                );
                delete actor.origin;
            });
            this.animationInProgress = false;
            this.emit('transition-completed');
        }
    }
);

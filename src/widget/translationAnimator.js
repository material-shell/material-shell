const { St, GObject, Clutter, GLib } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

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
    class TranslationAnimator extends Clutter.Actor {
        _init(vertical = false) {
            super._init({
                layout_manager: new Clutter.BinLayout(),
                clip_to_allocation: true,
            });
            AddLogToFunctions(this);
            this.vertical = vertical;
            this.transitionContainer = new Clutter.Actor({
                layout_manager: new Clutter.BoxLayout({ vertical }),
            });
            this.add_actor(this.transitionContainer);
        }

        setTranslation(previousActor, nextActor, direction) {
            if (this.animationInProgress) {
                this.transitionContainer.remove_all_transitions();
                this.animationInProgress = false;
                //Remove all clones outside visible area

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
                // Fo reach child check if it's in visible bound
                this.transitionContainer.get_children().forEach((actor) => {
                    let allocationBox = actor.get_allocation_box();
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
                                allocationBox.get_height();
                        }
                        if (allocationBox.x1 > visibleArea.x2) {
                            this.transitionContainer.remove_actor(actor);
                        }
                    }
                });
            } else {
                this.transitionContainer.add_child(previousActor);
            }

            // check if the next actor are already in transition
            let nextActorFound = this.transitionContainer
                .get_children()
                .find((actor) => {
                    return actor === nextActor;
                });

            //insert nextActor Clone at the top pile if direction is positive or at the end if negative
            if (!nextActorFound) {
                this.transitionContainer.add_child(nextActor);
                if (direction < 0) {
                    this.transitionContainer.set_child_at_index(nextActor, 0);
                    if (this.vertical) {
                        this.transitionContainer.translation_y -=
                            nextActor.height;
                    } else {
                        this.transitionContainer.translation_x -=
                            nextActor.width;
                    }
                }
            }
            let transitionConfig = {
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.endTransition();
                },
            };
            let target = 0;
            log(
                'index',
                this.transitionContainer.get_children().indexOf(nextActor),
                this.transitionContainer.get_children().length
            );
            for (
                let i = 0;
                i < this.transitionContainer.get_children().indexOf(nextActor);
                i++
            ) {
                let child = this.transitionContainer.get_child_at_index(i);
                target += this.vertical ? child.height : child.width;
            }
            if (this.vertical) {
                transitionConfig.translation_y = -target;
            } else {
                transitionConfig.translation_x = -target;
            }
            this.animationInProgress = true;
            log(
                'translation_y',
                this.transitionContainer.translation_y,
                transitionConfig.translation_y
            );
            log('translation_x', transitionConfig.translation_x, target);

            this.transitionContainer.ease(transitionConfig);
        }

        endTransition() {
            this.transitionContainer.get_children().forEach((actor) => {
                this.transitionContainer.remove_actor(actor);
            });
            this.transitionContainer.translation_x = 0;
            this.transitionContainer.translation_y = 0;
            this.animationInProgress = false;
            this.emit('transition-completed');
        }
    }
);

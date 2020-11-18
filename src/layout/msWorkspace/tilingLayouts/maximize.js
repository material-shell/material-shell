/** Gnome libs imports */
const { GObject } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

/** Extension imports */
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { InfinityTo0 } = Me.imports.src.utils.index;

/* exported MaximizeLayout */
var MaximizeLayout = GObject.registerClass(
    class MaximizeLayout extends BaseTilingLayout {
        _init(msWorkspace, state) {
            super._init(msWorkspace, state);
            this.translationAnimator = new TranslationAnimator();
            this.translationAnimator.connect('transition-completed', () => {
                this.endTransition();
            });
        }

        get tileableListVisible() {
            return this.msWorkspace.tileableList.filter(
                (_, index) => this.msWorkspace.focusedIndex === index
            );
        }

        displayTileable(actor) {
            if (this.currentDisplayedActor) {
                if (
                    this.tileableContainer
                        .get_children()
                        .includes(this.currentDisplayedActor)
                ) {
                    this.tileableContainer.remove_child(
                        this.currentDisplayedActor
                    );
                }

                this.currentDisplayedActor.disconnect(
                    this.currentDisplayedActorDestroySignal
                );
            }
            this.currentDisplayedActor = actor;
            this.currentDisplayedActorDestroySignal = this.currentDisplayedActor.connect(
                'destroy',
                () => {
                    delete this.currentDisplayedActor;
                }
            );
            if (!this.currentDisplayedActor.get_parent()) {
                this.tileableContainer.add_child(this.currentDisplayedActor);
            }
            this.msWorkspace.refreshFocus();
        }

        showAppLauncher() {
            let actor = this.msWorkspace.appLauncher;
            actor.visible = true;
        }

        hideAppLauncher() {
            // Never hide the Applauncher
        }

        onFocusChanged(windowFocused, oldWindowFocused) {
            super.onFocusChanged();
            if (windowFocused.dragged) {
                this.displayTileable(windowFocused);
            } else {
                this.startTransition(windowFocused, oldWindowFocused);
            }
        }

        alterTileable(tileable) {
            super.alterTileable(tileable);
            tileable.visible = true;
            if (this.tileableContainer.get_children().includes(tileable)) {
                this.tileableContainer.remove_child(tileable);
            }
            if (tileable === this.msWorkspace.tileableFocused) {
                this.displayTileable(tileable);
            }
        }

        restoreTileable(tileable) {
            if (!tileable.get_parent()) {
                this.tileableContainer.add_child(tileable);
            }
        }

        tileTileable(tileable, box) {
            let { x, y, width, height } = this.applyGaps(
                box.x1, box.y1, box.x2, box.y2
            );

            tileable.x = x;
            tileable.y = y;
            tileable.width = width;
            tileable.height = height;
        }

        /*
         * Animations
         */
        startTransition(nextActor, prevActor) {
            if (!this.translationAnimator.get_parent()) {
                this.translationAnimator.width = InfinityTo0(
                    prevActor.allocation.get_width()
                );
                this.translationAnimator.height = InfinityTo0(
                    prevActor.allocation.get_height()
                );
                this.tileableContainer.add_child(this.translationAnimator);
            }
            let indexOfPrevActor = this.msWorkspace.tileableList.findIndex(
                (tileable) => {
                    return tileable === prevActor;
                }
            );
            let indexOfNextActor = this.msWorkspace.tileableList.findIndex(
                (tileable) => {
                    return tileable === nextActor;
                }
            );
            [nextActor, prevActor].forEach((actor) => {
                if (actor) {
                    actor.set_width(
                        InfinityTo0(
                            prevActor.allocation.get_width()
                        )
                    );
                    actor.set_height(
                        InfinityTo0(
                            prevActor.allocation.get_height()
                        )
                    );
                }
            });

            this.translationAnimator.setTranslation(
                [prevActor],
                [nextActor],
                indexOfNextActor > indexOfPrevActor ? 1 : -1
            );
        }

        endTransition() {
            this.tileableContainer.remove_child(this.translationAnimator);
            this.displayTileable(this.msWorkspace.tileableFocused);
        }
    }
);

MaximizeLayout.state = { key: 'maximize' };
MaximizeLayout.label = 'Maximize';

const { Clutter, GObject } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { log, logFocus } = Me.imports.src.utils.debug;

/* exported MaximizeLayout */
var MaximizeLayout = GObject.registerClass(
    class MaximizeLayout extends BaseTilingLayout {
        _init(msWorkspace) {
            logFocus(' INIT MAXIMIZE LAYOUT');
            super._init(msWorkspace);
            this.translationAnimator = new TranslationAnimator();
            this.translationAnimator.connect('transition-completed', () => {
                this.endTransition();
            });
        }

        displayTileable(actor) {
            if (this.currentDisplayedActor) {
                if (this.currentDisplayedActor.get_parent()) {
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
                    logFocus('displayTileable destroy');

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
            if (!windowFocused.isDialog) {
                this.startTransition(windowFocused, oldWindowFocused);
            }
        }

        alterTileable(tileable) {
            super.alterTileable(tileable);
            if (tileable.get_parent()) {
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
            tileable.x = box.x1;
            tileable.y = box.y1;
            tileable.width = box.get_width();
            tileable.height = box.get_height();
        }

        /*
         * Animations
         */
        startTransition(nextActor, prevActor) {
            if (!this.translationAnimator.get_parent()) {
                this.translationAnimator.width = this.tileableContainer.allocation.get_width();
                this.translationAnimator.height = this.tileableContainer.allocation.get_height();
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
                        this.tileableContainer.allocation.get_width()
                    );
                    actor.set_height(
                        this.tileableContainer.allocation.get_height()
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

MaximizeLayout.key = 'maximize';

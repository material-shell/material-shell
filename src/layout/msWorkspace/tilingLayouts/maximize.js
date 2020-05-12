const { Clutter } = imports.gi;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { log } = Me.imports.src.utils.debug;

/* exported MaximizeLayout */
var MaximizeLayout = class MaximizeLayout extends BaseTilingLayout {
    constructor(msWorkspace) {
        super(msWorkspace);
        this.translationAnimator = new TranslationAnimator();
        this.translationAnimator.connect('transition-completed', () => {
            this.endTransition();
        });
        this.currentWindowIndex = msWorkspace.focusedIndex;
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        log('onFocusChanged');
        //if (!this.msWorkspace.msWindowList.includes(oldWindowFocused)) return;
        if (!windowFocused.isDialog) {
            const oldIndex = this.currentWindowIndex;
            this.currentWindowIndex = this.msWorkspace.focusedIndex;
            if (this.currentWindowIndex === oldIndex) return;

            if (Me.loaded) {
                this.startTransition(this.currentWindowIndex, oldIndex);
            }
        }
    }

    alterTileable(tileable) {
        tileable.show();
        if (tileable instanceof MsWindow) {
            tileable.maximizeDraggedConnectId = tileable.connect(
                'dragged_changed',
                () => {
                    if (tileable.dragged) {
                        tileable.translation_x = 0;
                    }
                }
            );
        }
    }

    restoreTileable(tileable) {
        tileable.translation_x = 0;
        if (!tileable.get_parent()) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.add_child(
                tileable
            );
            tileable.show();
        }
        if (tileable.maximizeDraggedConnectId) {
            tileable.disconnect(tileable.maximizeDraggedConnectId);
            delete tileable.maximizeDraggedConnectId;
        }
    }

    onTileableListChanged(tileableList, oldTileableList) {
        // If the order of the windows changed try to follow the current visible window
        /* if (oldTileableList.length === tileableList.length) {
            let currentVisibleWindow = oldTileableList[this.currentWindowIndex];
            let indexOfCurrentVisibleWindowInNewWindows = tileableList.indexOf(
                currentVisibleWindow
            );
            if (indexOfCurrentVisibleWindowInNewWindows !== -1) {
                this.currentWindowIndex = indexOfCurrentVisibleWindowInNewWindows;
            }
        } */

        tileableList.forEach((actor, index) => {
            if (index !== this.msWorkspace.focusedIndex) {
                if (!actor.dragged && actor.get_parent()) {
                    actor.get_parent().remove_child(actor);
                }
            } else {
                if (!actor.get_parent()) {
                    this.msWorkspace.msWorkspaceActor.tileableContainer.add_child(
                        actor
                    );
                }
            }
        });

        super.onTileableListChanged(tileableList, oldTileableList);

        // if a window has been removed animate the transition (either to the "next" if there is one or the "previous" if the window removed was the last)
        if (oldTileableList.length - tileableList.length === 1) {
            let windowRemovedIndex = oldTileableList.findIndex(
                (tileable) => !tileableList.includes(tileable)
            );
            const oldIndex =
                windowRemovedIndex === oldTileableList.length - 1
                    ? windowRemovedIndex
                    : -1;
        }
    }

    onTileRegulars(tileableList) {
        if (this.animationInProgress) {
            return;
        }
        const workArea = this.getWorkspaceBounds();
        tileableList.forEach((actor, index) => {
            // Unclip windows in maximize
            if (actor.has_clip) {
                actor.set_z_position(0);
                actor.remove_clip();
            }
            if (!actor.dragged) {
                actor.set_position(0, 0);
                actor.set_size(workArea.width, workArea.height);
                actor.translation_x = index * workArea.width;
            } else {
                this.animateSetSize(actor, workArea.width, workArea.height);
            }
            if (index !== this.msWorkspace.focusedIndex && !actor.dragged) {
                if (actor.get_parent()) {
                    actor.get_parent().remove_child(actor);
                }
            }
            this.msWorkspace.msWorkspaceActor.tileableContainer.translation_x =
                -this.msWorkspace.focusedIndex * workArea.width;
        });
    }

    onDestroy() {
        super.onDestroy();
        this.msWorkspace.msWorkspaceActor.tileableContainer.translation_x = 0;
        this.msWorkspace.msWindowList.forEach((msWindow) => {
            if (msWindow !== this.windowNotDialogFocused) {
                msWindow.show();
            }
        });
    }

    startTransition(newIndex, oldIndex) {
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        let i = oldIndex;
        /* while (i != newIndex) {
            this.msWorkspace.tileableList[i].show();
            if (newIndex > oldIndex) {
                i++;
            } else {
                i--;
            }
        } */
        if (!this.msWorkspace.tileableList[newIndex].get_parent()) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.add_child(
                this.msWorkspace.tileableList[newIndex]
            );
            this.msWorkspace.tileableList[newIndex].show();
        }

        if (Math.abs(newIndex - oldIndex) > 1) {
            let prev = newIndex > oldIndex ? newIndex - 1 : newIndex + 1;
            this.msWorkspace.msWorkspaceActor.tileableContainer.translation_x =
                -1 * prev * workArea.width;

            this.msWorkspace.tileableList[oldIndex].translation_x =
                (prev > oldIndex ? 1 : -1) *
                Math.abs(prev - oldIndex) *
                workArea.width;
        }

        this.msWorkspace.msWorkspaceActor.tileableContainer.ease({
            translation_x: -newIndex * workArea.width,
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                this.endTransition();
            },
        });
    }

    endTransition() {
        this.onTile();
    }
};

MaximizeLayout.key = 'maximize';

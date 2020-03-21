const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseTilingLayout
} = Me.imports.src.tilingManager.tilingLayouts.baseTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;

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
        log('focus changed', windowFocused, oldWindowFocused);
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

    onTileableListChanged(tileableList, oldTileableList) {
        log('onTileableListChanged');
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

        super.onTileableListChanged(tileableList, oldTileableList);

        // if a window has been removed animate the transition (either to the "next" if there is one or the "previous" if the window removed was the last)
        if (oldTileableList.length - tileableList.length === 1) {
            let windowRemovedIndex = oldTileableList.findIndex(
                tileable => !tileableList.includes(tileable)
            );
            const oldIndex =
                windowRemovedIndex === oldTileableList.length - 1
                    ? windowRemovedIndex
                    : -1;

            this.currentWindowIndex = this.msWorkspace.focusedIndex;

            const direction = this.currentWindowIndex > oldIndex ? 1 : -1;
            let oldActor = this.msWorkspace.tileableList[oldIndex];
            let newActor = this.msWorkspace.tileableList[
                this.currentWindowIndex
            ];
            log(oldActor, newActor, direction);
            /* this.translationAnimator.setTranslation(
                oldActor,
                newActor,
                direction
            ); */
        }
    }

    onTileRegulars(tileableList) {
        log('onTileRegulars(onMaximize)', this.currentWindowIndex);
        if (this.animationInProgress) {
            return;
        }
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        tileableList.forEach((actor, index) => {
            // Unclip windows in maximize
            if (actor.has_clip) {
                actor.set_z_position(0);
                actor.remove_clip();
            }
            if (!actor.dragged) {
                actor.set_position(workArea.x, workArea.y);
                actor.set_size(workArea.width, workArea.height);
            }
            if (index !== this.currentWindowIndex && !actor.dragged) {
                actor.visible = false;
            } else {
                actor.visible = true;
            }
        });
    }

    onDestroy() {
        super.onDestroy();
        this.msWorkspace.msWindowList.forEach(msWindow => {
            if (msWindow !== this.windowNotDialogFocused) {
                msWindow.show();
            }
        });
    }

    startTransition(newIndex, oldIndex) {
        const direction = this.currentWindowIndex > oldIndex ? 1 : -1;
        let oldActor = this.msWorkspace.tileableList[oldIndex];
        let newActor = this.msWorkspace.tileableList[this.currentWindowIndex];
        this.translationAnimator.set_size(
            this.monitor.width,
            this.monitor.height
        );
        if (!this.translationAnimator.get_parent()) {
            this.msWorkspace.actor.insert_child_above(
                this.translationAnimator,
                this.msWorkspace.tileableContainer
            );
        }

        this.translationAnimator.setTranslation(
            oldActor && oldActor.dragged ? undefined : oldActor,
            newActor && newActor.dragged ? undefined : newActor,
            direction
        );
    }

    endTransition() {
        this.msWorkspace.actor.remove_child(this.translationAnimator);
        this.onTile();
    }
};

MaximizeLayout.key = 'maximize';

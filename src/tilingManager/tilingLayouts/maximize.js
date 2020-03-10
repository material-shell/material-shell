const { St, Meta, Clutter } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseTilingLayout
} = Me.imports.src.tilingManager.tilingLayouts.baseTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

/* exported MaximizeLayout */
var MaximizeLayout = class MaximizeLayout extends BaseTilingLayout {
    constructor(msWorkspace) {
        super(msWorkspace);
        this.translationAnimator = new TranslationAnimator();
        this.translationAnimator.connect('transition-completed', () => {
            this.endTransition();
        });
        log('here', msWorkspace.focusedIndex);
        this.currentWindowIndex = msWorkspace.focusedIndex;
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        log('focus changed', windowFocused, oldWindowFocused);
        if (!this.msWorkspace.msWindowList.includes(oldWindowFocused)) return;
        if (!windowFocused.isDialog) {
            const oldIndex = this.currentWindowIndex;
            this.currentWindowIndex = this.msWorkspace.focusedIndex;
            if (this.currentWindowIndex === oldIndex) return;
            const direction = this.currentWindowIndex > oldIndex ? 1 : -1;
            let oldActor = this.msWorkspace.tileableList[oldIndex];
            let newActor = this.msWorkspace.tileableList[
                this.currentWindowIndex
            ];

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
                oldActor,
                newActor,
                direction
            );
        }
    }

    onTileableListChanged(tileableList, oldTileableList) {
        // If the order of the windows changed try to follow the current visible window
        if (oldTileableList.length === tileableList.length) {
            let currentVisibleWindow = oldTileableList[this.currentWindowIndex];
            let indexOfCurrentVisibleWindowInNewWindows = tileableList.indexOf(
                currentVisibleWindow
            );
            if (indexOfCurrentVisibleWindowInNewWindows !== -1) {
                this.currentWindowIndex = indexOfCurrentVisibleWindowInNewWindows;
            }
        }

        super.onTileableListChanged(tileableList, oldTileableList);

        // if a window has been removed animate the transition (either to the "next" if there is one or the "previous" if the window removed was the last)
        if (oldTileableList.length - tileableList.length === 1) {
            let windowRemovedIndex = oldTileableList.findIndex(
                window => !tileableList.includes(window)
            );
            const oldIndex =
                windowRemovedIndex === oldTileableList.length - 1
                    ? windowRemovedIndex
                    : -1;

            this.currentWindowIndex = this.msWorkspace.focusedIndex;

            this.animateTransition(this.currentWindowIndex, oldIndex);
        }
    }

    onTileRegulars(tileableList) {
        log('onTileRegular in maximize');
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
            if (!actor.grabbed) {
                actor.set_position(workArea.x, workArea.y);
                actor.set_size(workArea.width, workArea.height);
                //actor.metaWindow.maximize(Meta.MaximizeFlags.BOTH);

                //drawable.tileMaximize();
                /* drawable.setPositionAndSize(
                    workArea.x * index,
                    workArea.y,
                    workArea.width,
                    workArea.height
                ); */
            }
            log(index, this.currentWindowIndex, this.msWorkspace.focusedIndex);
            if (index !== this.currentWindowIndex) {
                log('hide in tiling');
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
                //window.get_compositor_private().show();
                this.showWindow(msWindow);
            }
        });
    }

    animateTransitionOld(newIndex, oldIndex) {
        if (newIndex === oldIndex) return;

        const direction = this.currentWindowIndex > oldIndex ? 1 : -1;
        /* this.leftWindowContainer.remove_all_children();
        this.rightWindowContainer.remove_all_children(); */
        const containers = [
            this.leftWindowContainer,
            this.rightWindowContainer
        ];
        if (direction < 0) {
            containers.reverse();
        }
        const [oldContainer, newContainer] = containers;

        let oldActor = this.msWorkspace.tileableList[oldIndex];
        let newActor = this.msWorkspace.tileableList[newIndex];

        if (oldActor) {
            oldActor.reparent(oldContainer);
            //oldMetaWindow.get_compositor_private().hide();
            //this.hideWindow(oldMsDrawable);
        }

        if (newActor) {
            newActor.reparent(newContainer);
            newActor.show();
            //newMetaWindow.get_compositor_private().hide();
            //this.hideWindow(newMsDrawable);
        }
        // Get the full workArea here and not workspaceBounds which have gaps
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        //this.overContainer.set_style('background:red;');
        //newContainer.set_style('background:blue;');
        if (!this.animationInProgress) {
            this.rightWindowContainer.set_position(workArea.width, 0);
            this.transitionContainer.set_position(
                direction > 0 ? 0 : -workArea.width,
                0
            );
            this.overContainer.set_clip(
                this.monitor.x,
                this.monitor.y,
                this.monitor.width,
                this.monitor.height
            );

            this.animationInProgress = true;
        }

        if (ShellVersionMatch('3.32')) {
            Tweener.addTween(this.transitionContainer, {
                x: direction > 0 ? -workArea.width : 0,
                time: 0.25,
                transition: 'easeOutQuad',
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        } else {
            this.transitionContainer.ease({
                x: direction > 0 ? -workArea.width : 0,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        }
    }

    animateTransition(newIndex, oldIndex) {
        if (newIndex === oldIndex) return;
        log('animate transition');
        const direction = this.currentWindowIndex > oldIndex ? 1 : -1;
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        log(oldIndex);
        if (oldIndex != undefined) {
            const targetX = direction * -workArea.width;

            oldActor.ease({
                translation_x: targetX,
                duration:
                    (250 * Math.abs(targetX - oldActor.translation_x)) /
                    workArea.width,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    oldActor.hide();
                }
            });
        }

        let newActor = this.msWorkspace.tileableList[newIndex];
        const originX = direction * workArea.width;
        if (!newActor.visible) {
            newActor.translation_x = originX;
            newActor.show();
        }
        const targetX = 0;
        newActor.ease({
            translation_x: targetX,
            duration:
                (250 * Math.abs(targetX - newActor.translation_x)) /
                Math.abs(targetX - originX),
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                this.animationInProgress = false;
                this.endTransition();
            }
        });
        /* this.msWorkspace.tileableContainer.ease({
            x: workArea.x + newIndex * -workArea.width,
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                this.animationInProgress = false;
                this.endTransition();
            }
        }); */
    }

    showWindow(msWindow) {
        msWindow.show();
        //if (!window.minimized) return;
        /*  log('showWindow', window.title);
        Main.wm.skipNextEffect(window.get_compositor_private());
        window.unminimize(); */
    }

    hideWindow(msWindow) {
        log('hideWindow');
        //if (window.minimized) return;
        msWindow.hide();
        /* log('hideWindow', window.title);
        Main.wm.skipNextEffect(window.get_compositor_private());
        window.minimize(); */
    }

    endTransition() {
        /* if (this.leftWindowContainer.get_first_child()) {
            this.leftWindowContainer
                .get_first_child()
                .reparent(this.msWorkspace.tileableContainer);
        } */
        /* if (this.rightWindowContainer.get_first_child()) {
            this.rightWindowContainer
                .get_first_child()
                .reparent(this.msWorkspace.tileableContainer);
        } */
        /* [
            ...this.leftWindowContainer.get_children(),
            ...this.rightWindowContainer.get_children()
        ].forEach(actor => {
            actor.reparent(this.msWorkspace.tileableContainer);
        }); */

        this.msWorkspace.actor.remove_child(this.translationAnimator);

        this.onTile();
    }
};

MaximizeLayout.key = 'maximize';

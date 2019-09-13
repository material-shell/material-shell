const { St, Shell, Clutter } = imports.gi;
const Tweener = imports.ui.tweener;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const {
    BaseGrabbableLayout
} = Me.imports.tilingManager.tilingLayouts.custom.baseGrabbable;
const { Column, Row } = Me.imports.widget.layout;
const { ShellVersionMatch } = Me.imports.utils.compatibility;

// TODO: Make this configurable
const WINDOW_PER_SCREEN = 2;
const WINDOW_SLIDE_TWEEN_TIME = 250;
/* exported SplitLayout */
var SplitLayout = class SplitLayout extends BaseGrabbableLayout {
    constructor(superWorkspace) {
        super(superWorkspace);

        this.overContainer = new St.Widget();

        this.updateActiveWindowsFromFocused();
        this.addTransitionContainer();
    }

    updateActiveWindowsFromFocused() {
        const { regularWindows } = this.getDialogAndRegularWindows();
        this.baseIndex = Math.max(
            0,
            Math.min(
                regularWindows.indexOf(this.superWorkspace.windowFocused),
                regularWindows.length - WINDOW_PER_SCREEN
            )
        );
        this.activeWindows = regularWindows.slice(
            this.baseIndex,
            this.baseIndex + WINDOW_PER_SCREEN
        );
    }

    onWorkAreasChanged() {
        this.addTransitionContainer();
        super.onWorkAreasChanged();
    }

    onWindowsChanged(superWorkspace, newWindows, oldWindows) {
        this.updateActiveWindowsFromFocused();
        super.onWindowsChanged(superWorkspace, newWindows, oldWindows); // Calls onTile
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        if (this.isDialog(windowFocused) || this.isDialog(oldWindowFocused))
            return;

        super.onFocusChanged(windowFocused, oldWindowFocused);
        if (this.activeWindows.includes(windowFocused)) {
            return;
        }

        const { regularWindows } = this.getDialogAndRegularWindows();
        const newIndex = regularWindows.indexOf(windowFocused);
        const oldIndex = regularWindows.indexOf(oldWindowFocused);
        const oldWindows = this.activeWindows;
        if (oldIndex < newIndex) {
            this.activeWindows = regularWindows.slice(
                newIndex - WINDOW_PER_SCREEN + 1,
                newIndex + 1
            );
        } else {
            this.activeWindows = regularWindows.slice(
                newIndex,
                newIndex + WINDOW_PER_SCREEN
            );
        }
        this.baseIndex = regularWindows.indexOf(this.activeWindows[0]);
        if (Me.loaded && regularWindows.length > WINDOW_PER_SCREEN) {
            this.transition(this.activeWindows, oldWindows);
        }
    }

    onTileRegulars(windows) {
        super.onTileRegulars(windows);
        const workArea = this.getWorkspaceBounds();
        // Sizing inactive windows
        windows
            .filter(window => {
                !this.activeWindows.includes(window);
            })
            .forEach(window => {
                this.moveAndResizeMetaWindow(
                    window,
                    workArea.x,
                    workArea.y,
                    workArea.width /
                        (workArea.width > workArea.height
                            ? WINDOW_PER_SCREEN
                            : 1),
                    workArea.height /
                        (workArea.width <= workArea.height
                            ? WINDOW_PER_SCREEN
                            : 1),
                    false,
                    true
                );
            });
        // Positionning active windows
        this.activeWindows.forEach((window, i) => {
            const windowBounds = {
                x: workArea.x,
                y: workArea.y,
                width: workArea.width,
                height: workArea.height
            };
            if (workArea.width > workArea.height) {
                windowBounds.width /= WINDOW_PER_SCREEN;
                windowBounds.x += (i * workArea.width) / WINDOW_PER_SCREEN;
            } else {
                windowBounds.height /= WINDOW_PER_SCREEN;
                windowBounds.y += (i * workArea.height) / WINDOW_PER_SCREEN;
            }

            this.moveAndResizeMetaWindow(
                window,
                windowBounds.x,
                windowBounds.y,
                windowBounds.width,
                windowBounds.height,
                windows.length < WINDOW_PER_SCREEN,
                true
            );
        });
        windows.forEach(window => {
            if (
                !this.activeWindows.includes(window) ||
                !this.superWorkspace.isDisplayed()
            ) {
                window.get_compositor_private().hide();
            } else {
                window.get_compositor_private().show();
            }
        });
    }

    addTransitionContainer() {
        const workArea = this.getWorkspaceBounds();
        this.overContainer.remove_all_children();
        this.transitionContainer = new (workArea.width > workArea.height
            ? Row
            : Column)();

        this.overContainer.add_actor(this.transitionContainer);
    }

    onDestroy() {
        super.onDestroy();
        this.superWorkspace.windows.forEach(window => {
            if (!this.activeWindows.includes(window)) {
                window.get_compositor_private().show();
            }
        });
    }

    transition(newMetaWindows, oldMetaWindows) {
        const { regularWindows } = this.getDialogAndRegularWindows();
        newMetaWindows = newMetaWindows.filter(
            window => !oldMetaWindows.includes(window)
        );
        this.transitionContainer.remove_all_children();
        const direction =
            regularWindows.indexOf(newMetaWindows[0]) -
            regularWindows.indexOf(oldMetaWindows[0]);

        const allMetaWindows =
            direction > 0
                ? oldMetaWindows.concat(newMetaWindows)
                : newMetaWindows.concat(oldMetaWindows);

        allMetaWindows
            .filter(
                window => window.get_compositor_private() && !window.grabbed
            )
            .map(metaWindow => metaWindow.get_compositor_private())
            .forEach(window => {
                let rect = window.meta_window.get_frame_rect();
                let actorContent = Shell.util_get_content_for_window_actor(
                    window,
                    rect
                );
                let actorClone = new St.Widget({
                    content: actorContent
                });
                actorClone.set_size(rect.width, rect.height);
                this.transitionContainer.add_child(actorClone);
                window.hide();
            });

        const workArea = this.getWorkspaceBounds();
        let xFrom = workArea.x;
        let xTo = workArea.x;
        let yFrom = workArea.y;
        let yTo = workArea.y;
        if (workArea.width > workArea.height) {
            const shift =
                (workArea.width * newMetaWindows.length) / WINDOW_PER_SCREEN;
            if (direction > 0) {
                xTo -= shift;
            } else {
                xFrom -= shift;
            }
        } else {
            const shift =
                (workArea.height * newMetaWindows.length) / WINDOW_PER_SCREEN;
            if (direction > 0) {
                yTo -= shift;
            } else {
                yFrom -= shift;
            }
        }

        if (!this.animationInProgress) {
            this.transitionContainer.set_position(xFrom, yFrom);

            this.overContainer.set_clip(
                this.monitor.x,
                this.monitor.y,
                this.monitor.width,
                this.monitor.height
            );
            global.window_group.add_actor(this.overContainer);
            this.animationInProgress = true;
        }

        if (ShellVersionMatch('3.32')) {
            Tweener.addTween(this.transitionContainer, {
                x: xTo,
                y: yTo,
                time: WINDOW_SLIDE_TWEEN_TIME / 1000,
                transition: 'easeOutQuad',
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        } else {
            this.transitionContainer.ease({
                x: xTo,
                y: yTo,
                duration: WINDOW_SLIDE_TWEEN_TIME,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        }
    }

    endTransition() {
        this.activeWindows
            .map(metaWindow => metaWindow.get_compositor_private())
            .filter(window => window)
            .forEach(window => {
                window.show();
            });
        global.window_group.remove_child(this.overContainer);

        this.onTile();
    }
};

SplitLayout.key = 'split';

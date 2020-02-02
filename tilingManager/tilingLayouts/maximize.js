const { St, Meta, Clutter } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported MaximizeLayout */
var MaximizeLayout = class MaximizeLayout extends BaseTilingLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.overContainer = new St.Widget();
        this.transitionContainer = new St.Widget();
        this.leftWindowContainer = new St.Widget();
        this.rightWindowContainer = new St.Widget();
        this.transitionContainer.add_actor(this.leftWindowContainer);
        this.transitionContainer.add_actor(this.rightWindowContainer);
        this.overContainer.add_actor(this.transitionContainer);
        const { regularWindows } = this.getDialogAndRegularWindows();
        this.currentWindowIndex = Math.max(
            regularWindows.indexOf(this.superWorkspace.windowFocused),
            0
        );
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        log('focus changed', windowFocused, oldWindowFocused);
        if (!this.superWorkspace.superWindowList.includes(oldWindowFocused))
            return;
        if (!windowFocused.isDialog) {
            const { regularWindows } = this.getDialogAndRegularWindows();
            const oldIndex = this.currentWindowIndex;
            this.currentWindowIndex = regularWindows.indexOf(windowFocused);
            this.animateTransition(this.currentWindowIndex, oldIndex);
        }
    }

    onWindowsChanged(windows, oldWindows) {
        let regularWindows = windows.filter(window => !this.isDialog(window));
        let oldRegularWindows = oldWindows.filter(
            window => !this.isDialog(window)
        );
        // If the order of the windows changed try to follow the current visible window
        if (oldRegularWindows.length === regularWindows.length) {
            let currentVisibleWindow =
                oldRegularWindows[this.currentWindowIndex];
            let indexOfCurrentVisibleWindowInNewWindows = regularWindows.indexOf(
                currentVisibleWindow
            );
            if (indexOfCurrentVisibleWindowInNewWindows !== -1) {
                this.currentWindowIndex = indexOfCurrentVisibleWindowInNewWindows;
            }
        }

        super.onWindowsChanged();

        // if a window has been removed animate the transition (either to the "next" if there is one or the "previous" if the window removed was the last)
        if (oldRegularWindows.length - regularWindows.length === 1) {
            let windowRemovedIndex = oldRegularWindows.findIndex(
                window => !regularWindows.includes(window)
            );
            const oldIndex =
                windowRemovedIndex === oldRegularWindows.length - 1
                    ? windowRemovedIndex
                    : -1;

            this.currentWindowIndex = Math.max(
                regularWindows.indexOf(this.superWorkspace.windowFocused),
                0
            );
            this.animateTransition(this.currentWindowIndex, oldIndex);
        }
    }

    onTileRegulars(tileableList) {
        if (this.animationInProgress) {
            return;
        }
        tileableList.forEach((drawable, index) => {
            const actor = drawable.actor;
            // Unclip windows in maximize
            if (actor.has_clip) {
                actor.set_z_position(0);
                actor.remove_clip();
            }
            if (!drawable.grabbed && !drawable.tiledMaximized) {
                drawable.tileMaximize();
            }

            if (index !== this.currentWindowIndex) {
                this.hideWindow(drawable);
            } else {
                this.showWindow(drawable);
            }
        });
    }

    onDestroy() {
        super.onDestroy();
        this.superWorkspace.superWindowList.forEach(superWindow => {
            if (superWindow !== this.windowNotDialogFocused) {
                //window.get_compositor_private().show();
                this.showWindow(superWindow);
            }
        });
    }

    animateTransition(newIndex, oldIndex) {
        if (newIndex === oldIndex) return;

        const direction = this.currentWindowIndex > oldIndex ? 1 : -1;
        this.leftWindowContainer.remove_all_children();
        this.rightWindowContainer.remove_all_children();
        const containers = [
            this.leftWindowContainer,
            this.rightWindowContainer
        ];
        if (direction < 0) {
            containers.reverse();
        }
        const [oldContainer, newContainer] = containers;

        const { regularWindows } = this.getDialogAndRegularWindows();

        let oldMetaWindow = regularWindows[oldIndex];
        let newMetaWindow = regularWindows[newIndex];

        if (oldMetaWindow) {
            let oldWindowClone = Main.wm.getWindowClone(oldMetaWindow);
            oldWindowClone.reparent(oldContainer);
            //oldMetaWindow.get_compositor_private().hide();
            this.hideWindow(oldMetaWindow);
        }

        if (newMetaWindow) {
            let newWindowClone = Main.wm.getWindowClone(newMetaWindow);
            newWindowClone.reparent(newContainer);
            //newMetaWindow.get_compositor_private().hide();
            this.hideWindow(newMetaWindow);
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
            global.window_group.add_actor(this.overContainer);
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

    showWindow(superWindow) {
        superWindow.actor.show();
        //if (!window.minimized) return;
        /*  log('showWindow', window.title);
        Main.wm.skipNextEffect(window.get_compositor_private());
        window.unminimize(); */
    }

    hideWindow(superWindow) {
        //if (window.minimized) return;
        superWindow.actor.hide();
        /* log('hideWindow', window.title);
        Main.wm.skipNextEffect(window.get_compositor_private());
        window.minimize(); */
    }

    endTransition() {
        this.leftWindowContainer.remove_all_children();
        this.rightWindowContainer.remove_all_children();
        global.window_group.remove_child(this.overContainer);

        this.onTile();
    }
};

MaximizeLayout.key = 'maximize';

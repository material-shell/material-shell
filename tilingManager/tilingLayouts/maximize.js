const { St, Meta, Clutter } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;

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
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        if (!this.isDialog(windowFocused) && !this.isDialog(oldWindowFocused)) {
            const newIndex = this.windows.indexOf(windowFocused);
            const oldIndex = this.windows.indexOf(oldWindowFocused);
            this.windowFocused = windowFocused;
            const direction = newIndex > oldIndex ? 1 : -1;
            this.prepareTransition(windowFocused, oldWindowFocused, direction);
            this.animateTransition(direction);
        }
    }

    onTileRegulars(windows) {
        if (this.animationInProgress) return;

        windows.forEach(window => {
            if (window.grabbed) return;
            if (!window.maximized_horizontally) {
                Main.wm.skipNextEffect(window.get_compositor_private());
                window.maximize(Meta.MaximizeFlags.BOTH);
            }

            if (
                window !== this.windowFocused ||
                !this.superWorkspace.isDisplayed()
            ) {
                window.get_compositor_private().hide();
            } else {
                window.get_compositor_private().show();
            }
        });
    }

    onDestroy() {
        super.onDestroy();
        this.windows.forEach(window => {
            if (window !== this.windowFocused) {
                window.get_compositor_private().show();
            }
        });
    }

    prepareTransition(newMetaWindow, oldMetaWindow, direction) {
        if (oldMetaWindow && oldMetaWindow.get_compositor_private()) {
            oldMetaWindow = null;
        }
        if (direction > 0) {
            if (oldMetaWindow) {
                let oldWindowClone = Main.wm.getWindowClone(oldMetaWindow);
                oldWindowClone.reparent(this.leftWindowContainer);
            }
            let newWindowClone = Main.wm.getWindowClone(newMetaWindow);
            newWindowClone.reparent(this.rightWindowContainer);
        } else {
            let newWindowClone = Main.wm.getWindowClone(newMetaWindow);
            newWindowClone.reparent(this.leftWindowContainer);
            if (oldMetaWindow) {
                let oldWindowClone = Main.wm.getWindowClone(oldMetaWindow);
                oldWindowClone.reparent(this.rightWindowContainer);
            }
        }
        if (oldMetaWindow) oldMetaWindow.get_compositor_private().hide();
        newMetaWindow.get_compositor_private().hide();
    }

    animateTransition(direction) {
        // Get the full workArea here and not workspaceBounds which have gaps
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

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

        Tweener.addTween(this.transitionContainer, {
            x: direction > 0 ? -workArea.width : 0,
            time: 0.25,
            transition: 'easeOutQuad',
            onComplete: () => {
                this.animationInProgress = false;
                this.endTransition();
            }
        });
    }

    endTransition() {
        this.leftWindowContainer.remove_all_children();
        this.rightWindowContainer.remove_all_children();
        global.window_group.remove_child(this.overContainer);
        log(
            `${this.superWorkspace.categoryKey} tilingLayout tile itself after the transition`
        );
        this.onTile();
    }
};

MaximizeLayout.key = 'maximize';

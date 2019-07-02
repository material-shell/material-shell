const { Clutter, Meta, St } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const TilingLayout =
    Me.imports.module.workspaceEnhancer.tilingLayouts.tilingLayout.TilingLayout;

/* exported MaximizeLayout */
var MaximizeLayout = class MaximizeLayout extends TilingLayout {
    constructor(focusedWindow, windows, monitor) {
        super(windows, monitor);
        this.focusedWindow = focusedWindow;
        this.overContainer = new St.Widget();
        this.transitionContainer = new St.Widget();
        this.leftWindowContainer = new St.Widget();
        this.rightWindowContainer = new St.Widget();
        this.transitionContainer.add_actor(this.leftWindowContainer);
        this.transitionContainer.add_actor(this.rightWindowContainer);
        this.overContainer.add_actor(this.transitionContainer);
    }

    onWindowsChanged(windows) {
        super.onWindowsChanged(windows);
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        const newIndex = this.windows.indexOf(windowFocused);
        const oldIndex = this.windows.indexOf(oldWindowFocused);
        this.focusedWindow = windowFocused;
        const direction = newIndex > oldIndex ? 1 : -1;
        this.prepareTransition(windowFocused, oldWindowFocused, direction);
        this.animateTransition(direction);
    }

    onTile() {
        if (this.animationInProgress) return;
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        this.windows.forEach(window => {
            if (window.grabbed) return;
            window.move_resize_frame(
                window,
                workArea.x,
                workArea.y,
                workArea.width,
                workArea.height
            );
            if (window !== this.focusedWindow) {
                window.get_compositor_private().hide();
            }
        });
    }

    onDestroy() {
        this.windows.forEach(window => {
            if (window !== this.focusedWindow) {
                window.get_compositor_private().show();
            }
        });
    }

    prepareTransition(newMetaWindow, oldMetaWindow, direction) {
        const newWindow = newMetaWindow.get_compositor_private();
        let oldWindow = null;
        if (oldMetaWindow) oldWindow = oldMetaWindow.get_compositor_private();

        newWindow.show();
        if (oldWindow) oldWindow.show();

        if (direction > 0) {
            if (oldWindow) oldWindow.reparent(this.leftWindowContainer);
            newWindow.reparent(this.rightWindowContainer);
        } else {
            newWindow.reparent(this.leftWindowContainer);
            if (oldWindow) oldWindow.reparent(this.rightWindowContainer);
        }
    }

    animateTransition(direction) {
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
        this.leftWindowContainer
            .get_children()
            .concat(this.rightWindowContainer.get_children())
            .forEach(window => {
                window.reparent(global.window_group);
            });
        global.window_group.remove_child(this.overContainer);
        this.onTile();
    }
};

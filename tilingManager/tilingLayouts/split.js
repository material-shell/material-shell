const { St, Meta } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;

/* exported SplitLayout */
var SplitLayout = class SplitLayout extends BaseTilingLayout {
    constructor(superWorkspace) {
        super(superWorkspace);

        this.overContainer = new St.Widget();
        this.transitionContainer = new St.Widget();
        this.leftWindowContainer = new St.Widget();
        this.rightWindowContainer = new St.Widget();
        this.transitionContainer.add_actor(this.leftWindowContainer);
        this.transitionContainer.add_actor(this.rightWindowContainer);
        this.overContainer.add_actor(this.transitionContainer);
        this.activeWindows = [];
    }

    getWindowPair(window) {
        const windowIndex = this.windows.indexOf(window);
        return windowIndex % 2 === 0
            ? this.windows.slice(windowIndex, windowIndex + 2)
            : this.windows.slice(windowIndex - 1, windowIndex + 1);
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        const newIndex = this.windows.indexOf(windowFocused);
        const oldIndex = this.windows.indexOf(oldWindowFocused);
        this.activeWindows = this.getWindowPair(windowFocused);
        if (this.activeWindows.includes(oldWindowFocused)) {
            return;
        }
        const direction = newIndex > oldIndex ? 1 : -1;
        this.prepareTransition(windowFocused, oldWindowFocused, direction);
        this.animateTransition(direction);
    }

    onTileRegulars(windows) {
        if (this.animationInProgress) return;
        const workArea = this.getWorkspaceBounds();

        windows.forEach((window, i) => {
            if (window.grabbed) return;
            if (window.get_maximized()) {
                window.unmaximize(Meta.MaximizeFlags.BOTH);
            }
            const windowBounds = { ...workArea };
            if (workArea.width > workArea.height) {
                windowBounds.width /= 2;
            } else {
                windowBounds.height /= 2;
            }
            if (i % 2 !== 0) {
                if (workArea.width > workArea.height) {
                    windowBounds.x += workArea.width / 2;
                } else {
                    windowBounds.y += workArea.height / 2;
                }
            }
            this.moveAndResizeMetaWindow(
                window,
                windowBounds.x,
                windowBounds.y,
                windowBounds.width,
                windowBounds.height
            );

            if (!this.activeWindows.includes(window)) {
                window.get_compositor_private().hide();
            }
        });
    }

    onDestroy() {
        super.onDestroy();
        this.windows.forEach(window => {
            if (!this.activeWindows.includes(window)) {
                window.get_compositor_private().show();
            }
        });
    }

    prepareTransition(newMetaWindow, oldMetaWindow, direction) {
        const newMetaWindows = this.getWindowPair(newMetaWindow);
        const newWindows = newMetaWindows.map(metaWindow =>
            metaWindow.get_compositor_private()
        );
        let oldWindows = [];
        if (oldMetaWindow) {
            const oldMetaWindows = this.getWindowPair(oldMetaWindow);
            oldWindows = oldMetaWindows.map(metaWindow =>
                metaWindow.get_compositor_private()
            );
        }

        newWindows.concat(oldWindows).forEach(window => window.show());

        if (direction > 0) {
            oldWindows.forEach(window =>
                window.reparent(this.leftWindowContainer)
            );
            newWindows.forEach(window =>
                window.reparent(this.rightWindowContainer)
            );
        } else {
            oldWindows.forEach(window =>
                window.reparent(this.rightWindowContainer)
            );
            newWindows.forEach(window =>
                window.reparent(this.leftWindowContainer)
            );
        }
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
        this.leftWindowContainer
            .get_children()
            .concat(this.rightWindowContainer.get_children())
            .forEach(window => {
                window.reparent(global.window_group);
            });
        global.window_group.remove_child(this.overContainer);
        log(
            `${this.superWorkspace.categoryKey} tilingLayout tile itself after the transition`
        );
        this.onTile();
    }
};

SplitLayout.key = 'split';

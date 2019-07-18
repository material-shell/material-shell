const { St, Meta } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const { range } = Me.imports.utils.index;

// TODO: Make this configurable
const WINDOW_PER_SCREEN = 3;
const WINDOW_SLIDE_TWEEN_TIME = 1.0;
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

    onFocusChanged(windowFocused, oldWindowFocused) {
        const newIndex = this.windows.indexOf(windowFocused);
        const oldIndex = this.windows.indexOf(oldWindowFocused);
        if (this.activeWindows.includes(windowFocused)) {
            return;
        }
        const oldWindows = this.activeWindows;
        if (newIndex > oldIndex) {
            this.activeWindows = this.windows.slice(
                newIndex - WINDOW_PER_SCREEN + 1,
                newIndex + 1
            );
        } else {
            this.activeWindows = this.windows.slice(
                newIndex,
                newIndex + WINDOW_PER_SCREEN
            );
        }

        const direction = newIndex > oldIndex ? 1 : -1;
        this.onTile();
        // this.prepareTransition(this.activeWindows, oldWindows, direction);
        // this.animateTransition(direction);
    }

    onTileRegulars(windows) {
        if (this.animationInProgress) return;
        if (!this.activeWindows) {
            return;
        }
        this.windows
            .filter(window => !this.activeWindows.includes(window))
            .forEach(window => window.get_compositor_private().hide());
        this.onTileGroup(this.activeWindows);
        this.activeWindows.forEach(window =>
            window.get_compositor_private().show()
        );
    }

    onTileGroup(windows) {
        const workArea = this.getWorkspaceBounds();

        windows.forEach((window, i) => {
            if (window.grabbed) return;
            if (window.get_maximized()) {
                window.unmaximize(Meta.MaximizeFlags.BOTH);
            }
            const windowBounds = { ...workArea };
            if (workArea.width > workArea.height) {
                windowBounds.width /= WINDOW_PER_SCREEN;
            } else {
                windowBounds.height /= WINDOW_PER_SCREEN;
            }

            if (workArea.width > workArea.height) {
                windowBounds.x += (i * workArea.width) / WINDOW_PER_SCREEN;
            } else {
                windowBounds.y += (i * workArea.height) / WINDOW_PER_SCREEN;
            }

            this.moveAndResizeMetaWindow(
                window,
                windowBounds.x,
                windowBounds.y,
                windowBounds.width,
                windowBounds.height
            );
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

    prepareTransition(newMetaWindows, oldMetaWindows, direction) {
        const newWindows = newMetaWindows.map(metaWindow =>
            metaWindow.get_compositor_private()
        );
        const oldWindows = oldMetaWindows
            .filter(window => !newMetaWindows.includes(window))
            .map(metaWindow => metaWindow.get_compositor_private());

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

        // Shouldn't we positionate window actor instead ?
        this.onTileGroup(oldMetaWindows);
        this.onTileGroup(newMetaWindows);
    }

    animateTransition(direction) {
        // Get the full workArea here and not workspaceBounds which have gaps
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        const leftWidth = this.leftWindowContainer
            .get_children()
            .reduce((w, c) => w + c.width, 0);
        const rightWidth = this.leftWindowContainer
            .get_children()
            .reduce((w, c) => w + c.width, 0);
        if (!this.animationInProgress) {
            // This seems mandatory (?)
            this.leftWindowContainer.set_width(leftWidth);
            this.rightWindowContainer.set_width(rightWidth);

            this.rightWindowContainer.set_position(leftWidth, 0);
            this.transitionContainer.set_position(
                direction > 0 ? 0 : -rightWidth,
                0
            );
            log(
                'left',
                this.leftWindowContainer.x,
                this.leftWindowContainer.y,
                this.leftWindowContainer.width,
                this.leftWindowContainer.height
            );
            this.leftWindowContainer.get_children().forEach(c => {
                log(c.x, c.y, c.width, c.height);
            });
            log(
                'right',
                this.rightWindowContainer.x,
                this.rightWindowContainer.y,
                this.rightWindowContainer.width,
                this.rightWindowContainer.height
            );
            this.rightWindowContainer.get_children().forEach(c => {
                log(c.x, c.y, c.width, c.height);
            });

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
            x: direction > 0 ? -leftWidth : 0,
            time: WINDOW_SLIDE_TWEEN_TIME,
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

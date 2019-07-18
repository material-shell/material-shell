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
        this.transition(this.activeWindows, oldWindows, direction);
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

    onTileGroup(windows, offset) {
        // Get the full workArea here and not workspaceBounds which have gaps
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        offset = offset || 0;

        windows.forEach((window, j) => {
            const i = j + offset;
            if (window.grabbed) return;
            if (window.get_maximized()) {
                window.unmaximize(Meta.MaximizeFlags.BOTH);
            }
            const windowBounds = {
                x: workArea.x,
                y: workArea.y,
                width: workArea.width,
                height: workArea.height
            };
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

    transition(newMetaWindows, oldMetaWindows, direction) {
        newMetaWindows = newMetaWindows.filter(
            window => !oldMetaWindows.includes(window)
        );

        newMetaWindows
            .concat(oldMetaWindows)
            .map(metaWindow => metaWindow.get_compositor_private())
            .forEach(window => {
                window.reparent(this.transitionContainer);
                window.show();
            });

        this.onTileGroup(
            direction > 0
                ? [...oldMetaWindows, ...newMetaWindows]
                : [...newMetaWindows, ...oldMetaWindows],
            direction > 0 ? 0 : -newMetaWindows.length + 1
        );

        // Get the full workArea here and not workspaceBounds which have gaps
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        const shift =
            (workArea.width * newMetaWindows.length) / WINDOW_PER_SCREEN;

        if (!this.animationInProgress) {
            this.transitionContainer.set_position(
                direction > 0 ? 0 : -shift,
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
            x: direction > 0 ? -shift : 0,
            time: WINDOW_SLIDE_TWEEN_TIME,
            transition: 'easeOutQuad',
            onComplete: () => {
                this.animationInProgress = false;
                this.endTransition();
            }
        });
    }

    endTransition() {
        this.transitionContainer.get_children().forEach(window => {
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

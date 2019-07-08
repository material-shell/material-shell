const { Meta, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { Backdrop } = Me.imports.widget.backdrop;

/* 
var TilingLayoutList = {
    grid: {
        class: Me.imports.tilingManager.tilingLayouts.grid.Grid
    }
}; */

/* exported BaseTilingLayout */
var BaseTilingLayout = class BaseTilingLayout {
    constructor(superWorkspace) {
        this.icon = '';
        this.key = 'base';
        this.superWorkspace = superWorkspace;
        this.monitor = superWorkspace.monitor;
        this.windowFocused = this.superWorkspace.windowFocused;
        this.windowChangedId = this.superWorkspace.connect(
            'windows-changed',
            this.onWindowsChanged.bind(this)
        );

        this.windowFocusedChangedId = this.superWorkspace.connect(
            'window-focused-changed',
            (_, window, oldWindow) => {
                this.onFocusChanged(window, oldWindow);
            }
        );
        this.workAreaChangedId = global.display.connect(
            'workareas-changed',
            () => {
                this.onTile();
            }
        );
        this.windows = superWorkspace.windows;
    }

    onWindowsChanged() {
        this.windows = this.superWorkspace.windows;
        log(
            `${
                this.superWorkspace.categoryKey
            } tilingLayout tile itself from onWindowsChanged event`
        );
        this.onTile();
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        this.windowFocused = windowFocused;
    }

    onTile() {
        log('tile for real', this.superWorkspace.categoryKey);
        let [dialogWindows, regularWindows] = this.getDialogAndRegularWindows();
        this.onTileRegulars(regularWindows);
        this.onTileDialogs(dialogWindows);
    }

    onTileRegulars(windows) {
        // Define windows sizes and positions
    }

    onTileDialogs(windows) {
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        windows.forEach(metaWindow => {
            if (metaWindow.grabbed) return;
            let window = metaWindow.get_compositor_private();
            if (!window) return;

            if (!window.backdrop) {
                window.backdrop = new Backdrop(window);
            }

            window.backdrop.raise_top();
            metaWindow.raise();
            window.raise_top();
            this.moveMetaWindow(
                metaWindow,
                workArea.x + workArea.width / 2 - window.width / 2,
                workArea.y + workArea.height / 2 - window.height / 2
            );
        });
    }

    moveMetaWindow(metaWindow, x, y, alreadyDelayed) {
        let actor = metaWindow.get_compositor_private();
        if (actor && actor.mapped) {
            metaWindow.move_frame(false, x, y);
        } else if (!alreadyDelayed) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.moveMetaWindow(metaWindow, x, y, true);
            });
        } else {
            log(`failed to tile ${metaWindow.get_title()}`);
        }
    }

    moveAndResizeMetaWindow(metaWindow, x, y, width, height, alreadyDelayed) {
        let actor = metaWindow.get_compositor_private();
        if (actor && actor.mapped) {
            metaWindow.move_resize_frame(false, x, y, width, height);
        } else if (!alreadyDelayed) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.moveAndResizeMetaWindow(
                    metaWindow,
                    x,
                    y,
                    width,
                    height,
                    true
                );
            });
        } else {
            log(`failed to tile ${metaWindow.get_title()}`);
        }
    }

    onDestroy() {
        this.superWorkspace.disconnect(this.windowChangedId);
        this.superWorkspace.disconnect(this.windowFocusedChangedId);
        global.display.disconnect(this.workAreaChangedId);
    }

    getDialogAndRegularWindows() {
        let dialogWindows = [];
        let regularWindows = [];

        let dialogTypes = [
            Meta.WindowType.DIALOG,
            Meta.WindowType.MODAL_DIALOG,
            Meta.WindowType.UTILITY
        ];

        for (let window of this.windows) {
            if (
                dialogTypes.includes(window.window_type) ||
                window.find_root_ancestor() !== window ||
                !window.resizeable
            ) {
                dialogWindows.push(window);
            } else {
                regularWindows.push(window);
            }
        }
        return [dialogWindows, regularWindows];
    }
};

const Meta = imports.gi.Meta;
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
        this.windows = superWorkspace.windows;
    }

    onWindowsChanged() {
        this.windows = this.superWorkspace.windows;
        this.onTile();
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        this.windowFocused = windowFocused;
    }

    onTile() {
        log('tile for real');
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
            metaWindow.move_frame(
                window,
                workArea.x + workArea.width / 2 - window.width / 2,
                workArea.y + workArea.height / 2 - window.height / 2
            );
        });
    }

    onDestroy() {
        this.superWorkspace.disconnect(this.windowChangedId);
        this.superWorkspace.disconnect(this.windowFocusedChangedId);
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

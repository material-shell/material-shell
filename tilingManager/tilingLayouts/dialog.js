const { Clutter, Meta, St, GObject, GLib } = imports.gi;

const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { Backdrop } = Me.imports.widget.backdrop;
const {
    BaseTilingLayout
} = Me.imports.tilingManager.tilingLayouts.baseTilingLayout;

/* exported DialogLayout */
var DialogLayout = class DialogLayout extends BaseTilingLayout {
    constructor(windows, monitor) {
        super(windows, monitor);
        this.backdropContainers = {};
        this.key = 'dialog';
    }

    onWindowsChanged(windows) {
        super.onWindowsChanged(windows);
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        this.onTile();
    }

    onTile(windows, monitor) {
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            monitor.index
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
        this.windows.forEach(window => {
            if (window !== this.focusedWindow) {
                window.get_compositor_private().show();
            }
        });
    }

    getBackdropContainer(metaWindow) {
        global.tw = metaWindow;
        let backdropContainer = this.backdropContainers[metaWindow.get_id()];
        if (!backdropContainer) {
            backdropContainer = this.newBackropContainer(metaWindow);
        }
        return backdropContainer;
    }

    newBackropContainer(metaWindow) {
        let window = metaWindow.get_compositor_private();
        let backdropContainer = new BackdropContainer(window);
        this.backdropContainers[metaWindow.get_id()] = backdropContainer;
        return backdropContainer;
    }
};

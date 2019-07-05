const Main = imports.ui.main;
const Meta = imports.gi.Meta;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const TilingLayout =
    Me.imports.tilingManager.tilingLayouts.tilingLayout.TilingLayout;

/* exported GridLayout */
var GridLayout = class GridLayout extends TilingLayout {
    constructor(windows, monitor) {
        super(windows, monitor);
        this.masterWidth = 0;
    }

    onWindowsChanged(windows) {
        super.onWindowsChanged(windows);
    }

    onFocusChanged(windowFocused) {}

    onTile() {
        if (!this.windows.length) return;

        let workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        let masterWidth =
            this.masterWidth || this.windows.length > 1
                ? workArea.width / 2
                : workArea.width;

        /* let masterWindow = this.windows.shift();
        if (!masterWindow.grabbed) {
            if (masterWindow.get_maximized())
                masterWindow.unmaximize(Meta.MaximizeFlags.BOTH);
            masterWindow.move_resize_frame(
                true,
                workArea.x,
                workArea.y,
                masterWidth,
                workArea.height
            );
        } */

        this.windows.forEach((window, index) => {
            if (window.grabbed) return;

            if (window.get_maximized())
                window.unmaximize(Meta.MaximizeFlags.BOTH);

            if (index === 0) {
                window.move_resize_frame(
                    window,
                    workArea.x,
                    workArea.y,
                    masterWidth,
                    workArea.height
                );
            } else {
                window.move_resize_frame(
                    window,
                    workArea.x + masterWidth,
                    workArea.y +
                        ((index - 1) * workArea.height) /
                            (this.windows.length - 1),
                    workArea.width - masterWidth,
                    workArea.height / (this.windows.length - 1)
                );
            }
        });
    }

    onDestroy() {}
};

const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseTilingLayout
} = Me.imports.tilingManager.tilingLayouts.baseTilingLayout;

/* exported GridLayout */
var GridLayout = class GridLayout extends BaseTilingLayout {
    constructor(monitor) {
        super();
        this.monitor = monitor;
        this.key = 'grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-symbolic.svg`
        );
        this.masterWidth = 0;
    }

    onWindowsChanged(windows) {
        super.onWindowsChanged(windows);
    }

    onFocusChanged(windowFocused) {}

    onTile(windows) {
        if (!windows.length) return;

        let workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        let masterWidth =
            this.masterWidth || windows.length > 1
                ? workArea.width / 2
                : workArea.width;

        windows.forEach((window, index) => {
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
                        ((index - 1) * workArea.height) / (windows.length - 1),
                    workArea.width - masterWidth,
                    workArea.height / (windows.length - 1)
                );
            }
        });
    }

    onDestroy() {}
};

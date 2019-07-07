const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseTilingLayout
} = Me.imports.tilingManager.tilingLayouts.baseTilingLayout;

/* exported GridLayout */
var GridLayout = class GridLayout extends BaseTilingLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.key = 'grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-symbolic.svg`
        );
        this.masterWidth = 0;

        this.grabStartSignal = global.display.connect(
            'grab-op-begin',
            (display1, display2, window, op) => {
                if (op !== Meta.GrabOp.MOVING) return;
                this.grabInProgress = true;
                this.grabWindow = window;
                this.grabSignal = window.connect('position-changed', () => {
                    let windowRect = window.get_frame_rect();
                    let x = windowRect.x + windowRect.width / 2;
                    let y = windowRect.y + windowRect.height / 2;
                    const windowHovered = this.windows.find(windowToCheck => {
                        if (windowToCheck === this.grabWindow) return false;
                        let rect = windowToCheck.get_frame_rect();
                        return (
                            x >= rect.x &&
                            x <= rect.x + rect.width &&
                            y >= rect.y &&
                            y <= rect.y + rect.height
                        );
                    });
                    if (
                        windowHovered &&
                        this.windows.indexOf(windowHovered) > -1 &&
                        this.windows.indexOf(this.grabWindow) > -1
                    ) {
                        this.superWorkspace.swapWindows(
                            this.grabWindow,
                            windowHovered
                        );
                    }
                });
            }
        );

        this.grabEndSignal = global.display.connect('grab-op-end', () => {
            if (this.grabInProgress) {
                this.grabInProgress = false;
                this.grabWindow.disconnect(this.grabSignal);
                delete this.grabWindow;
                delete this.grabSignal;
            }
        });
    }

    onWindowsChanged(windows) {
        super.onWindowsChanged(windows);
    }

    onFocusChanged() {}

    onTileRegulars(windows) {
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
                this.moveAndResizeMetaWindow(
                    window,
                    workArea.x,
                    workArea.y,
                    masterWidth,
                    workArea.height
                );
            } else {
                this.moveAndResizeMetaWindow(
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

    onDestroy() {
        super.onDestroy();
        global.display.disconnect(this.grabStartSignal);
    }
};

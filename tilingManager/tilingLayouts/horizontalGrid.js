const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseGridLayout
} = Me.imports.tilingManager.tilingLayouts.baseGridLayout;

/* exported HorizontalGridLayout */
var HorizontalGridLayout = class HorizontalGridLayout extends BaseGridLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.key = 'horizontal-grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-horizontal-symbolic.svg`
        );
    }

    onTileRegulars(windows) {
        if (!windows.length) return;

        let workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        let masterWidth =
            windows.length > 1 ? workArea.width / 2 : workArea.width;

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
};

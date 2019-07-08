const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { GridLayout } = Me.imports.tilingManager.tilingLayouts.grid;

/* exported VerticalGridLayout */
var VerticalGridLayout = class VerticalGridLayout extends GridLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.key = 'vertical-grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-vertical-symbolic.svg`
        );
        this.masterHeight = 0;
    }

    onTileRegulars(windows) {
        if (!windows.length) return;

        let workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        let masterHeight =
            this.masterHeight || windows.length > 1
                ? workArea.height / 2
                : workArea.height;

        windows.forEach((window, index) => {
            if (window.grabbed) return;

            if (window.get_maximized())
                window.unmaximize(Meta.MaximizeFlags.BOTH);

            if (index === 0) {
                this.moveAndResizeMetaWindow(
                    window,
                    workArea.x,
                    workArea.y,
                    workArea.width,
                    masterHeight
                );
            } else {
                this.moveAndResizeMetaWindow(
                    window,
                    workArea.x +
                        ((index - 1) * workArea.width) / (windows.length - 1),
                    workArea.y + masterHeight,
                    workArea.width / (windows.length - 1),
                    workArea.height - masterHeight
                );
            }
        });
    }
};

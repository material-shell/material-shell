const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { AutoGridLayout } = Me.imports.tilingManager.tilingLayouts.autoGrid;

const range = to =>
    Array(to)
        .fill(0)
        .map((_, i) => i);

/* exported GridGridLayout */
var GridGridLayout = class GridGridLayout extends AutoGridLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.key = 'grid-grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-grid-symbolic.svg`
        );
    }

    onTileRegulars(windows) {
        if (!windows.length) return;

        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        const columns = Math.ceil(Math.sqrt(windows.length));
        const rows = Math.ceil(windows.length / columns);
        const width = workArea.width / columns;
        const height = workArea.height / rows;
        range(columns).forEach(i => {
            range(rows).forEach(j => {
                const index = j + i * rows;
                const window = windows[index];
                if (!window || window.grabbed) return;

                if (window.get_maximized())
                    window.unmaximize(Meta.MaximizeFlags.BOTH);

                this.moveAndResizeMetaWindow(
                    window,
                    workArea.x + i * width,
                    workArea.y + j * height,
                    width,
                    index == windows.length - 1
                        ? // If last window fill remaining space
                          height * (columns * rows - index)
                        : height
                );
            });
        });
    }
};

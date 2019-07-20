const Main = imports.ui.main;
const { Meta } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseGrabbableLayout
} = Me.imports.tilingManager.tilingLayouts.custom.baseGrabbable;

const range = to =>
    Array(to)
        .fill(0)
        .map((_, i) => i);

/* exported GridLayout */
var GridLayout = class GridLayout extends BaseGrabbableLayout {
    onTileRegulars(windows) {
        if (!windows.length) return;

        const workArea = this.getWorkspaceBounds();
        const columns = Math.ceil(Math.sqrt(windows.length));
        const rows = Math.ceil(windows.length / columns);
        const width = workArea.width / columns;
        const height = workArea.height / rows;
        range(columns).forEach(i => {
            range(rows).forEach(j => {
                const index = j + i * rows;
                const window = windows[index];
                if (!window) return;

                this.setTitleBarVisibilty(window, false);

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

GridLayout.key = 'grid';

const { GObject } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { range } = Me.imports.src.utils.index;
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;

/* exported GridLayout */
var GridLayout = GObject.registerClass(
    class GridLayout extends BaseTilingLayout {
        tileTileable(tileable, box, index, siblingLength) {
            const columns = Math.ceil(Math.sqrt(siblingLength));
            const rows = Math.ceil(siblingLength / columns);
            const width = box.get_width() / columns;
            const height = box.get_height() / rows;
            const columnIndex = index;
        }
        onTileRegulars(windows) {
            super.onTileRegulars(windows);
            if (!windows.length) return;
            log(windows.length);
            const workArea = this.getWorkspaceBounds();

            range(columns).forEach((i) => {
                range(rows).forEach((j) => {
                    const index = j + i * rows;
                    const window = windows[index];
                    if (!window) return;

                    this.moveAndResizeActor(
                        window,
                        i * width,
                        j * height,
                        width,
                        index == windows.length - 1
                            ? // If last window fill remaining space
                              height * (columns * rows - index)
                            : height,
                        true
                    );
                });
            });
        }
    }
);

GridLayout.key = 'grid';

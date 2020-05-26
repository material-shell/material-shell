const { GObject } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;

/* exported HalfLayout */
var HalfLayout = GObject.registerClass(
    class HalfLayout extends BaseTilingLayout {
        onTileRegulars(windows, skip) {
            super.onTileRegulars(windows);
            if (!windows.length || skip) return;

            const workArea = this.getWorkspaceBounds();

            if (workArea.width > workArea.height) {
                this.onTileHorizontal(windows);
            } else {
                this.onTileVertical(windows);
            }
        }

        onTileHorizontal(windows) {
            if (!windows.length) return;

            const workArea = this.getWorkspaceBounds();

            let masterWidth =
                windows.length > 1 ? workArea.width / 2 : workArea.width;

            windows.forEach((window, index) => {
                if (index === 0) {
                    this.moveAndResizeActor(
                        window,
                        0,
                        0,
                        masterWidth,
                        workArea.height,
                        true
                    );
                } else {
                    this.moveAndResizeActor(
                        window,
                        masterWidth,
                        ((index - 1) * workArea.height) / (windows.length - 1),
                        workArea.width - masterWidth,
                        workArea.height / (windows.length - 1),
                        true
                    );
                }
            });
        }

        onTileVertical(windows) {
            if (!windows.length) return;

            const workArea = this.getWorkspaceBounds();

            let masterHeight =
                windows.length > 1 ? workArea.height / 2 : workArea.height;

            windows.forEach((window, index) => {
                if (index === 0) {
                    this.moveAndResizeActor(
                        window,
                        0,
                        workArea.y,
                        workArea.width,
                        masterHeight,
                        true
                    );
                } else {
                    this.moveAndResizeActor(
                        window,
                        0 +
                            ((index - 1) * workArea.width) /
                                (windows.length - 1),
                        workArea.y + masterHeight,
                        workArea.width / (windows.length - 1),
                        workArea.height - masterHeight,
                        true
                    );
                }
            });
        }
    }
);

HalfLayout.key = 'half';

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseTilingLayout
} = Me.imports.src.materialShell.msWorkspace.tilingLayouts.baseTiling;

/* exported SimpleLayout */
var SimpleLayout = class SimpleLayout extends BaseTilingLayout {
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

        windows.forEach((window, index) => {
            this.moveAndResizeActor(
                window,
                workArea.x + (index * workArea.width) / windows.length,
                workArea.y,
                workArea.width / windows.length,
                workArea.height,
                true
            );
        });
    }

    onTileVertical(windows) {
        if (!windows.length) return;

        const workArea = this.getWorkspaceBounds();

        windows.forEach((window, index) => {
            this.moveAndResizeActor(
                window,
                workArea.x,
                workArea.y + (index * workArea.height) / windows.length,
                workArea.width,
                workArea.height / windows.length,
                true
            );
        });
    }
};

SimpleLayout.key = 'simple';

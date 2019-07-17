const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseGrabbableLayout
} = Me.imports.tilingManager.tilingLayouts.custom.baseGrabbable;

/* exported SimpleLayout */
var SimpleLayout = class SimpleLayout extends BaseGrabbableLayout {
    onTileRegulars(windows) {
        if (!windows.length) return;

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
            if (window.get_maximized())
                window.unmaximize(Meta.MaximizeFlags.BOTH);

            this.moveAndResizeMetaWindow(
                window,
                workArea.x + (index * workArea.width) / windows.length,
                workArea.y,
                workArea.width / windows.length,
                workArea.height
            );
        });
    }

    onTileVertical(windows) {
        if (!windows.length) return;

        const workArea = this.getWorkspaceBounds();

        windows.forEach((window, index) => {
            if (window.get_maximized())
                window.unmaximize(Meta.MaximizeFlags.BOTH);

            this.moveAndResizeMetaWindow(
                window,
                workArea.x,
                workArea.y + (index * workArea.height) / windows.length,
                workArea.width,
                workArea.height / windows.length
            );
        });
    }
};

SimpleLayout.key = 'simple';

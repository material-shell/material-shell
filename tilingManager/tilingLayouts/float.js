const { GLib } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const WindowUtils = Me.imports.utils.windows;

/* exported FloatLayout */
var FloatLayout = class FloatLayout extends BaseTilingLayout {
    constructor(msWorkspace) {
        super(msWorkspace);
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.msWorkspace.msWindowList.forEach(msWindow => {
                WindowUtils.updateTitleBarVisibility(msWindow.metaWindow);
            });
        });
    }

    onWindowsChanged(newMsWindows, oldMsWindows) {
        super.onWindowsChanged();
        let leavingMsWindows = oldMsWindows.filter(
            msWindow => !newMsWindows.includes(msWindow)
        );
    }

    onDestroy() {
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.msWorkspace.msWindowList.forEach(msWindow => {
                WindowUtils.updateTitleBarVisibility(msWindow.metaWindow);
            });
        });
        super.onDestroy();
    }
    onTile() {}
    onTileDialogs() {}
};

FloatLayout.key = 'float';

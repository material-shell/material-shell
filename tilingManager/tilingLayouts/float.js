const { GLib } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const WindowUtils = Me.imports.utils.windows;

/* exported FloatLayout */
var FloatLayout = class FloatLayout extends BaseTilingLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.superWorkspace.superWindowList.forEach(superWindow => {
                WindowUtils.updateTitleBarVisibility(superWindow.metaWindow);
            });
        });
    }

    onWindowsChanged(newSuperWindows, oldSuperWindows) {
        super.onWindowsChanged();
        let leavingSuperWindows = oldSuperWindows.filter(
            superWindow => !newSuperWindows.includes(superWindow)
        );
    }

    onDestroy() {
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.superWorkspace.superWindowList.forEach(superWindow => {
                WindowUtils.updateTitleBarVisibility(superWindow.metaWindow);
            });
        });
        super.onDestroy();
    }
    onTile() {}
    onTileDialogs() {}
};

FloatLayout.key = 'float';

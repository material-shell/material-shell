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
            this.superWorkspace.windows.forEach(window => {
                WindowUtils.updateTitleBarVisibility(window);
            });
        });
    }

    onWindowsChanged(newWindows, oldWindows) {
        super.onWindowsChanged();
        let leavingWindows = oldWindows.filter(
            window => !newWindows.includes(window)
        );

        /*         leavingWindows.forEach(window => {
            WindowUtils.setTitleBarVisibility(window, false);
        });

        this.superWorkspace.windows.forEach(window => {
            WindowUtils.setTitleBarVisibility(window, true);
        }); */
    }

    onDestroy() {
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.superWorkspace.windows.forEach(window => {
                WindowUtils.updateTitleBarVisibility(window);
            });
        });
        super.onDestroy();
    }
    onTile() {}
    onTileDialogs() {}
};

FloatLayout.key = 'float';

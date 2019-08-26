const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const WindowUtils = Me.imports.utils.windows;

/* exported FloatLayout */
var FloatLayout = class FloatLayout extends BaseTilingLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.superWorkspace.windows.forEach(window => {
            WindowUtils.setTitleBarVisibility(window, true);
        });
    }

    onWindowsChanged() {
        super.onWindowsChanged();
        this.superWorkspace.windows.forEach(window => {
            WindowUtils.setTitleBarVisibility(window, true);
        });
    }

    onDestroy() {
        this.superWorkspace.windows.forEach(window => {
            WindowUtils.setTitleBarVisibility(window, false);
        });
        super.onDestroy();
    }
    onTile() {}
    onTileDialogs() {}
};

FloatLayout.key = 'float';

const { GLib } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout
} = Me.imports.src.tilingManager.tilingLayouts.baseTiling;
const WindowUtils = Me.imports.src.utils.windows;

/* exported FloatLayout */
var FloatLayout = class FloatLayout extends BaseTilingLayout {
    constructor(msWorkspace) {
        super(msWorkspace);
        /* GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.msWorkspace.msWindowList.forEach(msWindow => {
                WindowUtils.updateTitleBarVisibility(msWindow.metaWindow);
            });
        });
        msWorkspace.tileableContainer.hide();
        msWorkspace.floatableContainer.hide(); */
    }

    alterTileable(tileable) {
        if (tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
            });
            tileable.followMetaWindow = true;
        }
    }

    restoreTileable(tileable) {
        if (tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
            });
            tileable.followMetaWindow = false;
        }
    }

    alterFloatable(floatable) {
        this.alterTileable(floatable);
    }

    restoreFloatable(floatable) {
        this.restoreTileable(floatable);
    }

    onDestroy() {
        super.onDestroy();
    }
    onTile() {}
    onTileDialogs() {}
};

FloatLayout.key = 'float';

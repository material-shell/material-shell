const { GLib } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.materialShell.msWorkspace.tilingLayouts.baseTiling;
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
        msWorkspace.msWorkspaceActor.tileableContainer.hide();
        msWorkspace.msWorkspaceActor.floatableContainer.hide(); */
    }

    alterTileable(tileable) {
        if (tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                log('IDLE_ADD');
                WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
            });
        }
    }

    restoreTileable(tileable) {
        if (tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                log('IDLE_ADD');
                WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
            });
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

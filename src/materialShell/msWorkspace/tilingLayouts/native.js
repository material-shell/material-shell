const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout
} = Me.imports.src.materialShell.msWorkspace.tilingLayouts.baseTiling;

/* exported NativeLayout */
var NativeLayout = class NativeLayout extends BaseTilingLayout {
    onTileRegulars(windows) {
        super.onTileRegulars(windows);
        // Sadly these functions are not js bound (yet)
        //
        // if (!windows.length) return;
        //
        // if (windows.length === 1) {
        //     windows[0].maximize(Meta.MaximizeFlags.BOTH);
        // } else {
        //     windows.forEach((window, i) => {
        //         window.tile(i % 2 ? Meta.Tile.Left : Meta.Tile.RIGHT);
        //     });
        // }
    }
};
NativeLayout.key = 'native';

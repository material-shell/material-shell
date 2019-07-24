const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { HalfLayout } = Me.imports.tilingManager.tilingLayouts.custom.half;

/* exported HalfHorizontalLayout */
var HalfHorizontalLayout = class HalfHorizontalLayout extends HalfLayout {
    onTileRegulars(windows) {
        super.onTileRegulars(windows, true);
        super.onTileHorizontal(windows);
    }
};

HalfHorizontalLayout.key = 'half-horizontal';

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { HalfLayout } = Me.imports.tilingManager.tilingLayouts.custom.half;

/* exported HalfVerticalLayout */
var HalfVerticalLayout = class HalfVerticalLayout extends HalfLayout {
    onTileRegulars(windows) {
        super.onTileRegulars(windows, true);
        super.onTileVertical(windows);
    }
};

HalfVerticalLayout.key = 'half-vertical';

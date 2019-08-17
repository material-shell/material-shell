const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { SimpleLayout } = Me.imports.tilingManager.tilingLayouts.custom.simple;

/* exported SimpleVerticalLayout */
var SimpleVerticalLayout = class SimpleVerticalLayout extends SimpleLayout {
    onTileRegulars(windows) {
        super.onTileRegulars(windows, true);
        super.onTileVertical(windows);
    }
};

SimpleVerticalLayout.key = 'simple-vertical';

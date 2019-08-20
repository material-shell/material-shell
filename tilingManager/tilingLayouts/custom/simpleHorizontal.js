const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { SimpleLayout } = Me.imports.tilingManager.tilingLayouts.custom.simple;

/* exported SimpleHorizontalLayout */
var SimpleHorizontalLayout = class SimpleHorizontalLayout extends SimpleLayout {
    onTileRegulars(windows) {
        super.onTileRegulars(windows, true);
        super.onTileHorizontal(windows);
    }
};

SimpleHorizontalLayout.key = 'simple-horizontal';

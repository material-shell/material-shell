const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { AutoGridLayout } = Me.imports.tilingManager.tilingLayouts.autoGrid;

/* exported HorizontalGridLayout */
var HorizontalGridLayout = class HorizontalGridLayout extends AutoGridLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.key = 'horizontal-grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-horizontal-symbolic.svg`
        );
    }

    onTileRegulars(windows) {
        super.onTileHorizontal(windows);
    }
};

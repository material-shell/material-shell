const { Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { AutoGridLayout } = Me.imports.tilingManager.tilingLayouts.autoGrid;

/* exported VerticalGridLayout */
var VerticalGridLayout = class VerticalGridLayout extends AutoGridLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.key = 'vertical-grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-vertical-symbolic.svg`
        );
    }

    onTileRegulars(windows) {
        super.onTileVertical(windows);
    }
};

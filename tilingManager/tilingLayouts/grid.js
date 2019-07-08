const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const {
    BaseGridLayout
} = Me.imports.tilingManager.tilingLayouts.baseGridLayout;

const {
    HorizontalGridLayout
} = Me.imports.tilingManager.tilingLayouts.horizontalGrid;
const {
    VerticalGridLayout
} = Me.imports.tilingManager.tilingLayouts.verticalGrid;

/* exported GridLayout */
var GridLayout = class GridLayout extends BaseGridLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.key = 'grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-symbolic.svg`
        );
    }

    onTile() {
        log('tile for real', this.superWorkspace.categoryKey);
        let [dialogWindows, regularWindows] = this.getDialogAndRegularWindows();
        if (
            this.superWorkspace.monitor.width >
            this.superWorkspace.monitor.height
        ) {
            HorizontalGridLayout.prototype.onTileRegulars.call(
                this,
                regularWindows
            );
        } else {
            VerticalGridLayout.prototype.onTileRegulars.call(
                this,
                regularWindows
            );
        }
        this.onTileDialogs(dialogWindows);
    }
};

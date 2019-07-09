const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const { AutoGridLayout } = Me.imports.tilingManager.tilingLayouts.autoGrid;
const {
    VerticalGridLayout
} = Me.imports.tilingManager.tilingLayouts.verticalGrid;

const {
    HorizontalGridLayout
} = Me.imports.tilingManager.tilingLayouts.horizontalGrid;
/* exported TilingLayoutByKey */
var TilingLayoutByKey = {
    'auto-grid': AutoGridLayout,
    'vertical-grid': VerticalGridLayout,
    'horizontal-grid': HorizontalGridLayout,
    maximize: MaximizeLayout
};

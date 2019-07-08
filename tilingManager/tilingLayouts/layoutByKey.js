const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const { GridLayout } = Me.imports.tilingManager.tilingLayouts.grid;
const {
    VerticalGridLayout
} = Me.imports.tilingManager.tilingLayouts.verticalGrid;

const {
    HorizontalGridLayout
} = Me.imports.tilingManager.tilingLayouts.horizontalGrid;
/* exported TilingLayoutByKey */
var TilingLayoutByKey = {
    grid: GridLayout,
    'vertical-grid': VerticalGridLayout,
    'horizontal-grid': HorizontalGridLayout,
    maximize: MaximizeLayout
};

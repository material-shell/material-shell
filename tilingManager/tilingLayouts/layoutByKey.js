const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const { AutoGridLayout } = Me.imports.tilingManager.tilingLayouts.autoGrid;
const {
    VerticalGridLayout
} = Me.imports.tilingManager.tilingLayouts.verticalGrid;

const {
    HorizontalGridLayout
} = Me.imports.tilingManager.tilingLayouts.horizontalGrid;
const { RatioGridLayout } = Me.imports.tilingManager.tilingLayouts.ratioGrid;
const { GridGridLayout } = Me.imports.tilingManager.tilingLayouts.gridGrid;

/* exported TilingLayoutByKey */
var TilingLayoutByKey = {
    'auto-grid': AutoGridLayout,
    'vertical-grid': VerticalGridLayout,
    'horizontal-grid': HorizontalGridLayout,
    maximize: MaximizeLayout,
    'ratio-grid': RatioGridLayout,
    'grid-grid': GridGridLayout
};

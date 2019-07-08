const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const { GridLayout } = Me.imports.tilingManager.tilingLayouts.grid;
const {
    VerticalGridLayout
} = Me.imports.tilingManager.tilingLayouts.verticalGrid;

/* exported TilingLayoutByKey */
var TilingLayoutByKey = {
    grid: GridLayout,
    verticalGrid: VerticalGridLayout,
    maximize: MaximizeLayout
};

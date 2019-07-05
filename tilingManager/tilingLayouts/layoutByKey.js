const { Gio } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const { GridLayout } = Me.imports.tilingManager.tilingLayouts.grid;

/* exported TilingLayoutByKey */
var TilingLayoutByKey = {
    grid: GridLayout,
    maximize: MaximizeLayout
};

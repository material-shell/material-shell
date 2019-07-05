const Me = imports.misc.extensionUtils.getCurrentExtension();
/* 
var TilingLayoutList = {
    grid: {
        class: Me.imports.tilingManager.tilingLayouts.grid.Grid
    }
}; */

/* exported BaseTilingLayout */
var BaseTilingLayout = class BaseTilingLayout {
    constructor() {
        this.icon = '';
        this.key = 'base';
    }

    onFocusChanged(windowFocused, oldWindowFocused) {}

    onTile() {}

    onDestroy() {}
};

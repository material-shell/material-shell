/* exported TilingLayout */
var TilingLayout = class TilingLayout {
    constructor(windows, monitor) {
        this.windows = windows || [];
        this.monitor = monitor;
    }

    onWindowsChanged(windows) {
        this.windows = windows || [];
    }

    onFocusChanged(windowFocused, oldWindowFocused) {}

    onTile() {}

    onDestroy() {}
};

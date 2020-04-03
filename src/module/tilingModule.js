const { Shell, Meta } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
var { TilingManager } = Me.imports.src.manager.tilingManager;
/* exported TilingModule */
var TilingModule = class TilingModule {
    constructor() {
        this.signals = [];
        global.tilingManager = new TilingManager();

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'grab-op-begin',
                (display1, display2, window, op) => {
                    if (op !== Meta.GrabOp.MOVING) return;
                    this.grabInProgress = true;
                    this.grabWindow = window;
                    window.grabbed = true;
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect('grab-op-end', () => {
                if (this.grabInProgress) {
                    this.grabInProgress = false;
                    this.grabWindow.grabbed = false;
                    global.tilingManager.tileWindows();
                }
            })
        });
    }

    destroy() {
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
    }
};

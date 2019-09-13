const { Shell, Meta } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
var { TilingManager } = Me.imports.tilingManager.tilingManager;
/* exported TilingModule */
var TilingModule = class TilingModule {
    constructor() {}

    enable() {
        this.signals = [];
        global.tilingManager = new TilingManager();
        let tracker = Shell.WindowTracker.get_default();

        /* this.signals.push({
            from: tracker,
            id: tracker.connect('tracked-windows-changed', () => {
                
                global.tilingManager.tileWindows();
            })
        }); */

        /*         this.signals.push({
            from: global.display,
            id: global.display.connect('window-created', (_, metaWindow) => {
                this.subscribeToWindowSignals(metaWindow);
            })
        }); */

        /* this.signals.push({
            from: global.display,
            id: global.display.connect(
                'window-entered-monitor',
                (display, monitorIndex, window) => {
                    
                    this.windowChangedSomething(window);
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'window-left-monitor',
                (display, monitorIndex, window) => {
                    
                    this.windowChangedSomething(window);
                }
            )
        }); */

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

    disable() {
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
    }
};

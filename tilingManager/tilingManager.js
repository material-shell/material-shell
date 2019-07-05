const Meta = imports.gi.Meta;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const MaximizeLayout =
    Me.imports.tilingManager.tilingLayouts.maximize.MaximizeLayout;
const GridLayout = Me.imports.tilingManager.tilingLayouts.grid.GridLayout;
const DialogLayout = Me.imports.tilingManager.tilingLayouts.dialog.DialogLayout;
/* exported TilingManager */
var TilingManager = class TilingManager {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.grabInProgress = false;
        this.signals = [];
        this.windows = [];

        //this.dialogLayout = new DialogLayout();
    }

    /* onWindowsChanged() {
        this.windows = this.getFilteredWindows();
        this.registerWindowsSignal();
        let [dialogWindows, regularWindows] = this.getDialogAndRegularWindows();
        this.dialogLayout.onWindowsChanged(dialogWindows);
        this.layout.onWindowsChanged(regularWindows);
        this.tileWindows();
    }

    onWindowFocusedChanged(window, oldWindow) {
        this.layout.onFocusChanged(window, oldWindow);
        this.dialogLayout.onFocusChanged(window, oldWindow);
    }

    registerWindowsSignal() {
        this.unregisterAllWindowsSignal();
        this.workspaceEnhancer.windows.forEach(window => {
            this.signals.push({
                from: window,
                id: window.connect('position-changed', window => {
                    if (!window.grabbed && !this.tilingInProgress) {
                        this.tileWindows();
                    }
                })
            });

            this.signals.push({
                from: window,
                id: window.connect('size-changed', window => {
                    if (!window.grabbed && !this.tilingInProgress) {
                        this.tileWindows();
                    }
                })
            });
        });
    }

    unregisterAllWindowsSignal() {
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
    } */

    getFilteredWindows(windows) {
        return windows.filter(window => {
            return !window.is_attached_dialog();
        });
    }

    tileWindows() {
        if (this.tilingInProgress) return;

        this.tilingInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            log(`tile windows start`);
            for (let monitor of Main.layoutManager.monitors) {
                let superWorkspace;
                if (monitor.index === Main.layoutManager.primaryIndex) {
                    superWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();
                } else {
                    superWorkspace = global.superWorkspaceManager.getSuperWorkspacesOfMonitorIndex(
                        monitor.index
                    )[0];
                }
                let layout = superWorkspace.tilingLayout;

                /* let [
                    dialogWindows,
                    regularWindows
                ] = this.getDialogAndRegularWindows(superWorkspace.windows); */

                layout.onTile();
                //this.dialogLayout.onTile(dialogWindows, monitor);
            }
            log(`tile windows end`);
            this.tilingInProgress = false;
        });
    }
};

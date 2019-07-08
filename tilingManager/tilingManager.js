const Main = imports.ui.main;
const GLib = imports.gi.GLib;

/* exported TilingManager */
var TilingManager = class TilingManager {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.grabInProgress = false;
        this.signals = [];
        this.windows = [];
    }

    getFilteredWindows(windows) {
        return windows.filter(window => {
            return !window.is_attached_dialog();
        });
    }

    tileWindows() {
        if (this.tilingInProgress) return;

        this.tilingInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            log('tile windows start');
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
                log(
                    `${
                        superWorkspace.categoryKey
                    } ask for tiling from tiling Manager`
                );
                layout.onTile();
                //this.dialogLayout.onTile(dialogWindows, monitor);
            }
            log('tile windows end');
            this.tilingInProgress = false;
        });
    }
};

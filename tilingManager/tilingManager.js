const { Gio } = imports.gi;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;

const { TilingLayoutByKey } = Me.imports.tilingManager.tilingLayouts.layouts;

/* exported TilingManager */
var TilingManager = class TilingManager {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.grabInProgress = false;
        this.signals = [];
        this.windows = [];
        this.layoutsSettings = getSettings('layouts');

        this.allLayouts = Object.keys(TilingLayoutByKey);
        // On layout settings change
        this.allLayouts.forEach(key => {
            this.layoutsSettings.connect(`changed::${key}`, (schema, key) => {
                // Compute new available layouts
                this.refreshAvailableLayouts();
                log('New available', this.availableLayouts);
                if (!schema.get_boolean(key)) {
                    // If a layout has been removed,
                    // change tiling of all workspaces using that layout.

                    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                        global.superWorkspaceManager.superWorkspaces.forEach(
                            superWorkspace => {
                                log(key, superWorkspace.tilingLayout);
                                if (key == superWorkspace.tilingLayout.key) {
                                    superWorkspace.nextTiling();
                                }
                            }
                        );
                    });
                }
            });
        });

        // Compute available layouts
        this.refreshAvailableLayouts();
    }

    refreshAvailableLayouts() {
        this.availableLayouts = this.allLayouts.filter(key =>
            this.layoutsSettings.get_boolean(key)
        );
        if (!this.availableLayouts.length) {
            // Use grid by default if all layouts are disabled
            this.availableLayouts = ['auto-grid'];
        }
    }

    getLayoutByKey(key) {
        // If the layout is not in the available layouts return the first available
        if (!this.availableLayouts.includes(key)) {
            key = this.availableLayouts[0];
        }
        return TilingLayoutByKey[key];
    }

    getNextLayout(currentLayout) {
        let { key } = currentLayout.constructor;
        if (!this.availableLayouts.includes(key)) {
            key = this.availableLayouts[0];
        }
        // Get the next layout available
        const newKey = this.availableLayouts[
            (this.availableLayouts.indexOf(key) + 1) %
                this.availableLayouts.length
        ];
        // And returns it
        return TilingLayoutByKey[newKey];
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
                    `${superWorkspace.categoryKey} ask for tiling from tiling Manager`
                );
                layout.onTile();
                //this.dialogLayout.onTile(dialogWindows, monitor);
            }
            log('tile windows end');
            this.tilingInProgress = false;
        });
    }
};

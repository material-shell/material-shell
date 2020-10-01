/** Gnome libs imports */
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.src.utils.settings;
const {
    MaximizeLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.maximize;
const {
    TilingLayoutByKey,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.layouts;
const { MsManager } = Me.imports.src.manager.msManager;

/* exported TilingManager */
var TilingManager = class TilingManager extends MsManager {
    constructor() {
        super();
        this.workspaceManager = global.workspace_manager;
        this.grabInProgress = false;
        this.signals = [];
        this.windows = [];
        this.layoutsSettings = getSettings('layouts');
        this.observe(this.layoutsSettings, 'changed::gap', (schema) => {
            this.gap = schema.get_int('gap');
            this.tileWindows();
        });
        this.observe(
            this.layoutsSettings,
            'changed::use-screen-gap',
            (schema) => {
                this.useScreenGap = schema.get_boolean('use-screen-gap');
                this.tileWindows();
            }
        );
        this.observe(this.layoutsSettings, 'changed::screen-gap', (schema) => {
            this.screenGap = schema.get_int('screen-gap');
            this.tileWindows();
        });
        this.observe(this.layoutsSettings, 'changed::tween-time', (schema) => {
            this.tweenTime = schema.get_double('tween-time');
        });
        this.observe(this.layoutsSettings, 'changed::ratio-value', (schema) => {
            this.ratio = schema.get_double('ratio-value');
            this.tileWindows();
        });

        this.ratio = this.layoutsSettings.get_double('ratio-value');
        this.gap = this.layoutsSettings.get_int('gap');
        this.useScreenGap = this.layoutsSettings.get_boolean('use-screen-gap');
        this.screenGap = this.layoutsSettings.get_int('screen-gap');
        this.tweenTime = this.layoutsSettings.get_double('tween-time');

        this.allLayouts = Object.keys(TilingLayoutByKey);
        // On layout settings change
        this.allLayouts.forEach((key) => {
            this.observe(
                this.layoutsSettings,
                `changed::${key}`,
                (schema, key) => {
                    // Compute new available layouts
                    this.refreshAvailableLayouts();

                    if (!schema.get_boolean(key)) {
                        // If a layout has been removed,
                        // change tiling of all workspaces using that layout.

                        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                            Me.msWorkspaceManager.msWorkspaceList.forEach(
                                (msWorkspace) => {
                                    if (key == msWorkspace.tilingLayout.key) {
                                        msWorkspace.nextTiling(1);
                                    }
                                }
                            );
                            return GLib.SOURCE_REMOVE;
                        });
                    }
                }
            );
        });

        // Compute available layouts
        this.refreshAvailableLayouts();
    }

    refreshAvailableLayouts() {
        this.availableLayouts = this.allLayouts.filter((key) =>
            this.layoutsSettings.get_boolean(key)
        );
        if (!this.availableLayouts.length) {
            // Use maximize by default if all layouts are disabled
            this.availableLayouts = [MaximizeLayout.key];
        }
    }

    getLayoutByKey(key) {
        // If the layout is not in the available layouts return the first available
        if (!this.availableLayouts.includes(key)) {
            key = this.availableLayouts[0];
        }
        return TilingLayoutByKey[key];
    }

    getNextLayout(currentLayout, direction) {
        let { key } = currentLayout.constructor;
        if (!this.availableLayouts.includes(key)) {
            key = this.availableLayouts[0];
        }
        let nextIndex = this.availableLayouts.indexOf(key) + direction;
        if (nextIndex < 0) {
            nextIndex += this.availableLayouts.length;
        }
        nextIndex = nextIndex % this.availableLayouts.length;
        // Get the next layout available
        const newKey = this.availableLayouts[nextIndex];
        // And returns it
        return TilingLayoutByKey[newKey];
    }

    getFilteredWindows(windows) {
        return windows.filter((window) => {
            return !window.is_attached_dialog();
        });
    }

    tileWindows() {
        if (this.tilingInProgress) return;

        this.tilingInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            for (let monitor of Main.layoutManager.monitors) {
                let msWorkspace;
                if (monitor.index === Main.layoutManager.primaryIndex) {
                    msWorkspace = Me.msWorkspaceManager.getActivePrimaryMsWorkspace();
                } else {
                    msWorkspace = Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                        monitor.index
                    )[0];
                }
                let layout = msWorkspace.tilingLayout;

                layout.tileAll();
                //this.dialogLayout.onTile(dialogWindows, monitor);
            }

            this.tilingInProgress = false;
            return GLib.SOURCE_REMOVE;
        });
    }
};

const Meta = imports.gi.Meta;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const MaximizeLayout =
    Me.imports.module.workspaceEnhancer.tilingLayouts.maximize.MaximizeLayout;
const GridLayout =
    Me.imports.module.workspaceEnhancer.tilingLayouts.grid.GridLayout;
const DialogLayout =
    Me.imports.module.workspaceEnhancer.tilingLayouts.dialog.DialogLayout;
/* exported TilingManager */
var TilingManager = class TilingManager {
    constructor(workspaceEnhancer) {
        this.workspaceEnhancer = workspaceEnhancer;
        this.workspaceManager = global.workspace_manager;
        this.grabInProgress = false;
        this.signals = [];
        this.setLayout(workspaceEnhancer.tilingLayout);
        this.workspaceEnhancer.connect('windows-changed', () => {
            this.onWindowsChanged();
        });

        this.workspaceEnhancer.connect(
            'window-focused-changed',
            (_, window, oldWindow) => {
                this.onWindowFocusedChanged(window, oldWindow);
            }
        );

        this.dialogLayout = new DialogLayout(
            this.windows,
            this.workspaceEnhancer.monitor
        );
    }

    onWindowsChanged() {
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
    }

    getFilteredWindows() {
        return this.workspaceEnhancer.windows.filter(window => {
            return !window.is_attached_dialog();
        });
    }

    getDialogAndRegularWindows() {
        let dialogWindows = [];
        let regularWindows = [];

        let dialogTypes = [
            Meta.WindowType.DIALOG,
            Meta.WindowType.MODAL_DIALOG,
            Meta.WindowType.UTILITY,
            Meta.WindowType.SPLASHSCREEN
        ];

        for (let window of this.windows) {
            if (dialogTypes.includes(window.window_type)) {
                dialogWindows.push(window);
            } else {
                regularWindows.push(window);
            }
        }

        return [dialogWindows, regularWindows];
    }

    setLayout(layout) {
        if (this.layout) {
            this.layout.onDestroy();
        }
        switch (layout) {
            case 'tileRight':
                this.layout = new GridLayout(
                    this.windows,
                    this.workspaceEnhancer.monitor
                );
                break;
            case 'maximize':
                this.layout = new MaximizeLayout(
                    this.workspaceEnhancer.windowFocused,
                    this.windows,
                    this.workspaceEnhancer.monitor
                );
                break;
        }
        this.tileWindows();
    }

    tileWindows() {
        if (this.tilingInProgress) return;

        this.tilingInProgress = true;

        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.layout.onTile();
            this.dialogLayout.onTile();
            this.tilingInProgress = false;
        });
    }
};

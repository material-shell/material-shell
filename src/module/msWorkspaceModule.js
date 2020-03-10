const { Clutter, St, Meta, Shell, GLib } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Tweener = imports.ui.tweener;

const { AppsManager } = Me.imports.src.msWorkspace.appsManager;
const { MsWorkspaceManager } = Me.imports.src.msWorkspace.msWorkspaceManager;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

const { WINDOW_ANIMATION_TIME } = imports.ui.windowManager;

var WindowManager = imports.ui.windowManager;

/* exported MsWorkspaceModule */
var MsWorkspaceModule = class MsWorkspaceModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.enabled = false;
        this.signals = [];

        this.topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
        Main.layoutManager.panelBox.add_child(this.topBarSpacer);

        global.msWorkspaceManager = new MsWorkspaceManager(
            AppsManager.groupAppsByCategory(AppsManager.getApps())
        );
        this.currentMsWorkspace = global.msWorkspaceManager.getActiveMsWorkspace();

        this.signals.push({
            from: global.display,
            id: global.display.connect('in-fullscreen-changed', () => {
                Main.layoutManager.monitors.forEach(monitor => {
                    let msWorkspace;
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        msWorkspace = global.msWorkspaceManager.getActiveMsWorkspace();
                    } else {
                        msWorkspace = global.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                            monitor.index
                        )[0];
                    }
                    msWorkspace.updateUI();
                });
            })
        });

        /*         this.signals.push({
            from: global.display,
            id: global.display.connect('restacked', () => {
                log('RESTACKED');
            })
        }); */
        this.legacyPanelGhost = Main.overview._panelGhost;
        this.legacyPanelGhostIndex = Main.overview._overview
            .get_children()
            .indexOf(this.legacyPanelGhost);

        this.myPanelGhost = new St.Bin({
            child: new Clutter.Clone({
                source: this.topBarSpacer
            }),
            reactive: false,
            opacity: 0
        });

        Main.overview._overview.remove_child(this.legacyPanelGhost);
        Main.overview._overview.insert_child_at_index(
            this.myPanelGhost,
            this.legacyPanelGhostIndex
        );

        this.overrideWindowManagerFunctions();

        this.signals.push({
            from: this.workspaceManager,
            id: this.workspaceManager.connect('notify::n-workspaces', () => {
                global.msWorkspaceManager.onWorkspacesChange();
            })
        });

        this.signals.push({
            from: this.workspaceManager,
            id: this.workspaceManager.connect(
                'active-workspace-changed',
                () => {
                    log('active-workspace-changed');
                    /* let newMsWorkspace = global.msWorkspaceManager.getActiveMsWorkspace();
                    this.currentMsWorkspace.uiVisible = false;
                    this.currentMsWorkspace.updateUI();
                    this.currentMsWorkspace = newMsWorkspace;
                    this.currentMsWorkspace.uiVisible = true;
                    this.currentMsWorkspace.updateUI(); */
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect('window-created', (_, metaWindow) => {
                global.msWorkspaceManager.onNewMetaWindow(metaWindow);
            })
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect('notify::focus-window', _ => {
                global.msWorkspaceManager.onFocusMetaWindow(
                    global.display.focus_window
                );
            })
        });
        global.msWorkspaceManager.onFocusMetaWindow(
            global.display.focus_window
        );

        this._listenToDispatchWindow();

        this.signals.push({
            from: Shell.AppSystem.get_default(),
            id: Shell.AppSystem.get_default().connect(
                'installed-changed',
                () => {
                    this.dispatchApps();
                }
            )
        });

        this.signalMonitorId = Main.layoutManager.connect(
            'monitors-changed',
            () => {
                global.msWorkspaceManager.destroy();
                global.msWorkspaceManager = new MsWorkspaceManager(
                    AppsManager.groupAppsByCategory(AppsManager.getApps())
                );
                this.currentMsWorkspace = global.msWorkspaceManager.getActiveMsWorkspace();
            }
        );
    }

    destroy() {
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
        this.topBarSpacer.destroy();
        global.msWorkspaceManager.destroy();
        delete global.msWorkspaceManager;

        Main.overview._overview.remove_child(this.myPanelGhost);
        Main.overview._overview.insert_child_at_index(
            this.legacyPanelGhost,
            this.legacyPanelGhostIndex
        );

        this.restoreWindowManagersFunctions();

        Main.layoutManager.disconnect(this.signalMonitorId);
    }

    overrideWindowManagerFunctions() {
        this.original_shouldAnimate =
            WindowManager.WindowManager.prototype._shouldAnimate;
        WindowManager.WindowManager.prototype._shouldAnimate = function() {
            return false;
        };
    }

    restoreWindowManagersFunctions() {
        WindowManager.WindowManager.prototype._finishWorkspaceSwitch = this.original_finishWorkspaceSwitch;
    }

    /*
     ** Connect to windows events and redispatch windows in workspacesEnhancer
     */
    _listenToDispatchWindow() {
        for (let w = 0; w < this.workspaceManager.n_workspaces; w++) {
            let workspace = this.workspaceManager.get_workspace_by_index(w);
            this.listenWorkspaceEventToDispatch(workspace);
        }

        this.signals.push({
            from: this.workspaceManager,
            id: this.workspaceManager.connect(
                'workspace-added',
                (_, workspaceIndex) => {
                    this.listenWorkspaceEventToDispatch(
                        this.workspaceManager.get_workspace_by_index(
                            workspaceIndex
                        )
                    );
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'window-entered-monitor',
                (display, monitorIndex, window) => {
                    //Ignore unHandle window and window on primary screens
                    global.msWorkspaceManager.windowEnteredMonitor(
                        window,
                        monitorIndex
                    );
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'window-left-monitor',
                (display, monitorIndex, window) => {
                    /* 
                    //Ignore unHandle window and window on primary screens
                    global.msWorkspaceManager.windowLeftMonitor(
                        window,
                        monitorIndex
                    ); */
                }
            )
        });
    }

    listenWorkspaceEventToDispatch(workspace) {
        this.signals.push({
            from: workspace,
            id: workspace.connect('window-added', (workspace, window) => {
                global.msWorkspaceManager.windowEnteredWorkspace(
                    window,
                    workspace
                );
            })
        });

        this.signals.push({
            from: workspace,
            id: workspace.connect('window-removed', (workspace, window) => {
                /* global.msWorkspaceManager.windowLeftWorkspace(
                    window,
                    workspace
                ); */
            })
        });
    }
};

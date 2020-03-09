const { Clutter, St, Meta, Shell, GLib } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Tweener = imports.ui.tweener;

const { AppsManager } = Me.imports.msWorkspace.appsManager;
const { MsWorkspaceManager } = Me.imports.msWorkspace.msWorkspaceManager;
const { ShellVersionMatch } = Me.imports.utils.compatibility;

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
        /*
         * Override the _prepareWorkspaceSwitch for two reasons
         *  1- Add a container around the animation container to clip around the primary monitor to prevent the animated windows to be visible in secondary screens
         *  2- Add the panels and backgrounds to the animated container so they will follow the transition animation.
         */
        this.original_prepareWorkspaceSwitch =
            WindowManager.WindowManager.prototype._prepareWorkspaceSwitch;
        WindowManager.WindowManager.prototype._prepareWorkspaceSwitch = function(
            from,
            to,
            direction
        ) {
            log('_prepareWorkspaceSwitch');
            if (this._switchData) return;

            let wgroup = Main.uiGroup;
            let windowActorList = global.get_window_actors();
            let switchData = {};

            this._switchData = switchData;
            switchData.curGroup = new Clutter.Actor();
            switchData.movingWindowBin = new Clutter.Actor();
            switchData.windows = [];
            switchData.surroundings = {};
            switchData.gestureActivated = false;
            switchData.inProgress = false;

            switchData.container = new Clutter.Actor();
            switchData.container.add_actor(switchData.curGroup);

            // Creating a new container over the switchData,container
            switchData.overContainer = new Clutter.Actor();
            switchData.overContainer.add_actor(switchData.container);

            wgroup.add_actor(switchData.movingWindowBin);
            wgroup.insert_child_above(
                switchData.overContainer,
                global.window_group
            );

            let primaryMonitorGeometry = global.display.get_monitor_geometry(
                global.display.get_primary_monitor()
            );
            switchData.overContainer.set_clip(
                primaryMonitorGeometry.x,
                primaryMonitorGeometry.y,
                primaryMonitorGeometry.width,
                primaryMonitorGeometry.height
            );

            let workspaceManager = global.workspace_manager;
            let curWs = workspaceManager.get_workspace_by_index(from);

            switchData.msWorkspace =
                global.msWorkspaceManager.primaryMsWorkspaces[from];

            switchData.msWorkspace.uiVisible = true;
            switchData.msWorkspace.updateUI();
            switchData.msWorkspace.actor.reparent(switchData.curGroup);
            /* switchData.msWorkspace.tileableList.forEach(msDrawable => {
                //let actor = msDrawable.getClone();
                msDrawable.actor.reparent(switchData.curGroup);
                msDrawable.show();
            }); */

            for (let dir of Object.values(Meta.MotionDirection)) {
                let ws = null;

                if (to < 0) ws = curWs.get_neighbor(dir);
                else if (dir == direction)
                    ws = workspaceManager.get_workspace_by_index(to);

                if (ws == null || ws == curWs) {
                    switchData.surroundings[dir] = null;
                    continue;
                }

                let info = {
                    index: ws.index(),
                    actor: new Clutter.Actor()
                };
                switchData.surroundings[dir] = info;
                switchData.container.add_actor(info.actor);
                info.actor.raise_top();

                let [x, y] = this._getPositionForDirection(dir);
                info.actor.set_position(x, y);

                info.msWorkspace =
                    global.msWorkspaceManager.primaryMsWorkspaces[ws.index()];
                //info.msWorkspace.tilingLayout.onTile();

                info.msWorkspace.uiVisible = true;
                info.msWorkspace.updateUI();
                info.msWorkspace.actor.reparent(info.actor);
                /* info.msWorkspace.tileableList.forEach(msDrawable => {
                    msDrawable.actor.reparent(info.actor);
                    msDrawable.show();
                }); */
            }

            switchData.movingWindowBin.raise_top();

            /* for (let i = 0; i < windowActorList.length; i++) {
                let metaWindow = windowActorList[i].get_meta_window();

                if (!metaWindow.showing_on_its_workspace()) continue;

                if (metaWindow.is_on_all_workspaces()) continue;

                GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                    metaWindow.get_compositor_private().hide();
                });

                if (this._movingWindow && metaWindow == this._movingWindow) {
                    let actor = metaWindow.msWindow.getClone();
                    actor.reparent(switchData.movingWindowBin);
                } else if (metaWindow.get_workspace().index() == from) {
                    let actor = metaWindow.msWindow.getClone();
                    actor.reparent(switchData.curGroup);
                } else {
                    for (let dir of Object.values(Meta.MotionDirection)) {
                        let info = switchData.surroundings[dir];
                        if (
                            !info ||
                            info.index != metaWindow.get_workspace().index()
                        )
                            continue;
                        let actor = metaWindow.msWindow.getClone();

                        actor.reparent(info.actor);
                        //actor.lower(info.msWorkspace.actor);
                        break;
                    }
                }
            } */
        };
        WindowManager.WindowManager.prototype._shouldAnimate = function() {
            return false;
        };
        /*
         * Override the _finishWorkspaceSwitch to clear the changes of _prepareWorkspaceSwitch
         */
        this.original_finishWorkspaceSwitch =
            WindowManager.WindowManager.prototype._finishWorkspaceSwitch;

        WindowManager.WindowManager.prototype._finishWorkspaceSwitch = function(
            switchData
        ) {
            log('_finishWorkspaceSwitch');
            this._switchData = null;
            switchData.msWorkspace.actor.reparent(
                global.msWorkspaceManager.msWorkspaceContainer
            );
            switchData.msWorkspace.uiVisible = false;
            switchData.msWorkspace.updateUI();

            /* switchData.msWorkspace.tileableList.forEach(msDrawable => {
                msDrawable.actor.reparent(global.window_group);
                msDrawable.hide();
            }); */

            for (let dir of Object.values(Meta.MotionDirection)) {
                let info = switchData.surroundings[dir];
                if (info) {
                    info.msWorkspace.actor.reparent(
                        global.msWorkspaceManager.msWorkspaceContainer
                    );
                    /* info.msWorkspace.tileableList.forEach(msDrawable => {
                        msDrawable.actor.reparent(global.window_group);
                        msDrawable.show();
                    }); */
                }
            }
            if (ShellVersionMatch('3.32')) {
                Tweener.removeTweens(switchData.container);
            } else {
                switchData.container.remove_all_transitions();
            }
            switchData.overContainer.destroy();
            switchData.movingWindowBin.destroy();

            this._movingWindow = null;
        };

        this.original_actionMoveWorkspace =
            WindowManager.WindowManager.prototype.actionMoveWorkspace;
        WindowManager.WindowManager.prototype.actionMoveWorkspace = (function() {
            var cachedFunction =
                WindowManager.WindowManager.prototype.actionMoveWorkspace;
            return function() {
                log('actionMoveWorkspace');
                // Before
                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                // After
                let currentWorkspace = global.msWorkspaceManager.getActiveMsWorkspace();
                currentWorkspace.uiVisible = true;
                currentWorkspace.updateUI();

                return result;
            };
        })();
    }

    restoreWindowManagersFunctions() {
        WindowManager.WindowManager.prototype._prepareWorkspaceSwitch = this.original_prepareWorkspaceSwitch;
        WindowManager.WindowManager.prototype._finishWorkspaceSwitch = this.original_finishWorkspaceSwitch;
        WindowManager.WindowManager.prototype.actionMoveWorkspace = this.original_actionMoveWorkspace;
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

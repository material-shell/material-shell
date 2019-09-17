const { Clutter, St, Meta, Shell } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Tweener = imports.ui.tweener;

const { AppsManager } = Me.imports.superWorkspace.appsManager;
const {
    SuperWorkspaceManager
} = Me.imports.superWorkspace.superWorkspaceManager;
const { ShellVersionMatch } = Me.imports.utils.compatibility;

const { WINDOW_ANIMATION_TIME } = imports.ui.windowManager;
/* exported SuperWorkspaceModule */
var SuperWorkspaceModule = class SuperWorkspaceModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.enabled = false;
        this.signals = [];
        Main.wm.getWindowClone = function(metaWindow) {
            let windowActor = metaWindow.get_compositor_private();
            /* let actorContent = Shell.util_get_content_for_window_actor(
                windowActor,
                metaWindow.get_frame_rect()
            );
            let actorClone = new St.Widget({ content: actorContent }); */
            let actorClone = new Clutter.Clone({
                source: windowActor
            });

            let constraint = new Clutter.BindConstraint({
                source: windowActor,
                coordinate: Clutter.BindCoordinate.ALL
            });

            actorClone.add_constraint(constraint);
            return actorClone;
        };
    }

    enable() {
        this.topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
        Main.layoutManager.panelBox.add_child(this.topBarSpacer);

        global.superWorkspaceManager = new SuperWorkspaceManager(
            AppsManager.groupAppsByCategory(AppsManager.getApps())
        );
        this.currentSuperWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();

        this.signals.push({
            from: global.display,
            id: global.display.connect('in-fullscreen-changed', () => {
                Main.layoutManager.monitors.forEach(monitor => {
                    let superWorkspace;
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        superWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();
                    } else {
                        superWorkspace = global.superWorkspaceManager.getSuperWorkspacesOfMonitorIndex(
                            monitor.index
                        )[0];
                    }
                    superWorkspace.updateUI();
                });
            })
        });

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
            id: this.workspaceManager.connect(
                'active-workspace-changed',
                () => {
                    let newSuperWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();
                    this.currentSuperWorkspace.uiVisible = false;
                    this.currentSuperWorkspace.updateUI();
                    this.currentSuperWorkspace = newSuperWorkspace;
                    this.currentSuperWorkspace.uiVisible = true;
                    this.currentSuperWorkspace.updateUI();
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect('window-created', (_, metaWindow) => {
                global.superWorkspaceManager.onNewWindow(metaWindow);
            })
        });

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
                global.superWorkspaceManager.destroy();
                global.superWorkspaceManager = new SuperWorkspaceManager(
                    AppsManager.groupAppsByCategory(AppsManager.getApps())
                );
                this.currentSuperWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();
            }
        );
    }

    disable() {
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
        this.topBarSpacer.destroy();
        global.superWorkspaceManager.destroy();
        delete global.superWorkspaceManager;

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
        this.original_prepareWorkspaceSwitch = Main.wm._prepareWorkspaceSwitch;
        Main.wm._prepareWorkspaceSwitch = function(from, to, direction) {
            if (this._switchData) return;

            let wgroup = Main.uiGroup;
            let windows = global.get_window_actors();
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

            switchData.superWorkspace = global.superWorkspaceManager.getPrimarySuperWorkspaceByIndex(
                from
            );

            switchData.superWorkspace.uiVisible = true;
            switchData.superWorkspace.updateUI();
            switchData.superWorkspace.backgroundContainer.reparent(
                switchData.curGroup
            );
            switchData.superWorkspace.frontendContainer.reparent(
                switchData.curGroup
            );

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

                info.superWorkspace = global.superWorkspaceManager.getPrimarySuperWorkspaceByIndex(
                    ws.index()
                );

                info.superWorkspace.backgroundContainer.reparent(info.actor);

                info.superWorkspace.uiVisible = true;
                info.superWorkspace.updateUI();
                info.superWorkspace.frontendContainer.reparent(info.actor);
            }

            switchData.movingWindowBin.raise_top();

            for (let i = 0; i < windows.length; i++) {
                let window = windows[i].get_meta_window();
                let actor = this.getWindowClone(window);

                if (!window.showing_on_its_workspace()) continue;

                if (window.is_on_all_workspaces()) continue;

                if (this._movingWindow && window == this._movingWindow) {
                    actor.reparent(switchData.movingWindowBin);
                } else if (window.get_workspace().index() == from) {
                    actor.reparent(switchData.curGroup);
                } else {
                    for (let dir of Object.values(Meta.MotionDirection)) {
                        let info = switchData.surroundings[dir];
                        if (
                            !info ||
                            info.index != window.get_workspace().index()
                        )
                            continue;

                        actor.reparent(info.actor);
                        //actor.lower(info.superWorkspace.frontendContainer);
                        break;
                    }
                }
            }

            switchData.superWorkspace.frontendContainer.reparent(
                switchData.curGroup
            );
        };

        /*
         * Override the _finishWorkspaceSwitch to clear the changes of _prepareWorkspaceSwitch
         */
        this.original_finishWorkspaceSwitch = Main.wm._finishWorkspaceSwitch;

        Main.wm._finishWorkspaceSwitch = function(switchData) {
            this._switchData = null;
            switchData.superWorkspace.frontendContainer.reparent(
                Main.layoutManager.uiGroup
            );
            switchData.superWorkspace.backgroundContainer.reparent(
                Main.layoutManager._backgroundGroup
            );
            switchData.superWorkspace.uiVisible = false;
            switchData.superWorkspace.updateUI();

            for (let dir of Object.values(Meta.MotionDirection)) {
                let info = switchData.surroundings[dir];
                if (info) {
                    info.superWorkspace.frontendContainer.reparent(
                        Main.layoutManager.uiGroup
                    );
                    info.superWorkspace.backgroundContainer.reparent(
                        Main.layoutManager._backgroundGroup
                    );
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

        Main.wm.__switchWorkspace = function(shellwm, from, to, direction) {
            if (!Main.sessionMode.hasWorkspaces || !this._shouldAnimate()) {
                shellwm.completed_switch_workspace();
                return;
            }

            // If we come from a gesture, switchData will already be set,
            // and we don't want to overwrite it.
            if (!this._switchData)
                this._prepareWorkspaceSwitch(from, to, direction);

            this._switchData.inProgress = true;

            let [xDest, yDest] = this._getPositionForDirection(direction);

            /* @direction is the direction that the "camera" moves, so the
             * screen contents have to move one screen's worth in the
             * opposite direction.
             */
            xDest = -xDest;
            yDest = -yDest;
            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(this._switchData.container, {
                    translate_x: xDest,
                    translate_y: yDest,
                    time: WINDOW_ANIMATION_TIME,
                    transition: 'easeOutQuad',
                    onComplete: this._switchWorkspaceDone,
                    onCompleteScope: this,
                    onCompleteParams: [shellwm]
                });
            } else {
                this._switchData.container.ease({
                    translate_x: xDest,
                    translate_y: yDest,
                    duration: WINDOW_ANIMATION_TIME,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    onComplete: () => this._switchWorkspaceDone(shellwm)
                });
            }
        };

        this.original_actionMoveWorkspace = Main.wm.actionMoveWorkspace;
        Main.wm.actionMoveWorkspace = (function() {
            var cachedFunction = Main.wm.actionMoveWorkspace;
            return function() {
                // Before
                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                // After
                let currentWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();
                currentWorkspace.uiVisible = true;
                currentWorkspace.updateUI();

                return result;
            };
        })();
    }

    restoreWindowManagersFunctions() {
        Main.wm._prepareWorkspaceSwitch = this.original_prepareWorkspaceSwitch;
        Main.wm._finishWorkspaceSwitch = this.original_finishWorkspaceSwitch;
        Main.wm.actionMoveWorkspace = this.original_actionMoveWorkspace;
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
                (_, workspace) => {
                    this.listenWorkspaceEventToDispatch(workspace);
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'window-entered-monitor',
                (display, monitorIndex, window) => {
                    //Ignore unHandle window and window on primary screens
                    global.superWorkspaceManager.windowEnteredMonitor(
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
                    global.superWorkspaceManager.windowLeftMonitor(
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
                global.superWorkspaceManager.windowEnteredWorkspace(
                    window,
                    workspace
                );
            })
        });

        this.signals.push({
            from: workspace,
            id: workspace.connect('window-removed', (workspace, window) => {
                /* global.superWorkspaceManager.windowLeftWorkspace(
                    window,
                    workspace
                ); */
            })
        });
    }
};

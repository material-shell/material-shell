const { Clutter, St, Meta, GLib, Shell, Gio } = imports.gi;
const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { AppsManager } = Me.imports.superWorkspace.appsManager;
const {
    SuperWorkspaceManager
} = Me.imports.superWorkspace.superWorkspaceManager;

/* exported SuperWorkspaceModule */
var SuperWorkspaceModule = class SuperWorkspaceModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.enabled = false;
        this.signals = [];
    }

    enable(fake) {
        //Hide the default Background
        //global.window_group.get_child_at_index(0).hide();

        this.topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
        this.topBarSpacer.height = 48;
        Main.layoutManager.panelBox.add_child(this.topBarSpacer);
        global.superWorkspaceManager = new SuperWorkspaceManager(
            AppsManager.groupAppsByCategory(AppsManager.getApps())
        );
        this.currentSuperWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();

        this.signals.push({
            from: global.display,
            id: global.display.connect('in-fullscreen-changed', () => {
                Main.layoutManager.monitors.forEach(monitor => {
                    let isFullscreen = global.display.get_monitor_in_fullscreen(
                        monitor.index
                    );
                    let superWorkspace;
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        superWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();
                    } else {
                        superWorkspace = global.superWorkspaceManager.getSuperWorkspacesOfMonitorIndex(
                            monitor.index
                        )[0];
                    }
                    if (isFullscreen) {
                        superWorkspace.frontendContainer.hide();
                    } else {
                        superWorkspace.frontendContainer.show();
                    }
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
                    this.currentSuperWorkspace.hideUI();
                    this.currentSuperWorkspace = newSuperWorkspace;
                    this.currentSuperWorkspace.showUI();
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect('window-created', (_, metaWindow) => {
                log('NEW window', metaWindow);
                global.superWorkspaceManager.addWindowToAppropriateSuperWorkspace(
                    metaWindow
                );
            })
        });

        //this._listenToDispatchWindow();

        this.signals.push({
            from: Shell.AppSystem.get_default(),
            id: Shell.AppSystem.get_default().connect(
                'installed-changed',
                () => {
                    this.dispatchApps();
                }
            )
        });

        //If it's a fake enable it's an internal reload
        if (!fake) {
            this.signalMonitorId = Main.layoutManager.connect(
                'monitors-changed',
                (test, test1, test2) => {
                    global.superWorkspaceManager.destroy();
                    global.superWorkspaceManager = new SuperWorkspaceManager();
                }
            );
        }
        this.enabled = true;
    }

    disable(fake) {
        if (!this.enabled) {
            return;
        }
        //Re show the default Background
        global.window_group.get_child_at_index(0).show();
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
        global.superWorkspaceManager.destroy();
        delete global.superWorkspaceManager;
        Main.panel._leftBox.remove_child(this.workspaceList);
        Main.overview._overview.remove_child(this.myPanelGhost);
        Main.overview._overview.insert_child_at_index(
            this.legacyPanelGhost,
            this.legacyPanelGhostIndex
        );

        this.restoreWindowManagersFunctions();

        if (!fake) {
            Main.layoutManager.disconnect(this.signalMonitorId);
        }
        this.enabled = false;
    }

    overrideWindowManagerFunctions() {
        /*
         * Override the _prepareWorkspaceSwitch for two reasons
         *  1- Add a container around the animation container to clip around the primary monitor to prevent the animated windows to be visible in secondary screens
         *  2- Add the panels and backgrounds to the animated container so they will follow the transition animation.
         */
        this.original_prepareWorkspaceSwitch = Main.wm._prepareWorkspaceSwitch;
        Main.wm._prepareWorkspaceSwitch = (function() {
            var cachedFunction = Main.wm._prepareWorkspaceSwitch;
            return function() {
                // Before
                global.workspaceAnimationInProgress = true;

                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                // After

                // Creating a new container over the switchData,container
                let primaryMonitorGeometry = global.display.get_monitor_geometry(
                    global.display.get_primary_monitor()
                );
                this._switchData.overContainer = new St.Widget();
                this._switchData.overContainer.set_clip(
                    primaryMonitorGeometry.x,
                    primaryMonitorGeometry.y,
                    primaryMonitorGeometry.width,
                    primaryMonitorGeometry.height
                );
                this._switchData.container.reparent(
                    this._switchData.overContainer
                );
                global.window_group.add_child(this._switchData.overContainer);

                let from = arguments[0];
                let to = arguments[1];
                let direction = arguments[2];
                let curWs = global.workspace_manager.get_workspace_by_index(
                    from
                );

                let curSuperWorkspace = global.superWorkspaceManager.getPrimarySuperWorkspaceByIndex(
                    from
                );
                this._switchData.previousFrontendContainer =
                    curSuperWorkspace.frontendContainer;
                this._switchData.previousFrontendContainer.show();
                this._switchData.previousFrontendContainer.reparent(
                    this._switchData.curGroup
                );
                this._switchData.backgroundContainer =
                    curSuperWorkspace.backgroundContainer;

                this._switchData.previousBackgroundActor =
                    curSuperWorkspace.bgManager.backgroundActor;
                this._switchData.backgroundContainer.reparent(
                    this._switchData.curGroup
                );
                this._switchData.backgroundContainer.lower_bottom();
                this._switchData.backgroundContainer.show();
                this._switchData.curGroup.set_offscreen_redirect(
                    Clutter.OffscreenRedirect.ALWAYS
                );
                for (let dir of Object.values(Meta.MotionDirection)) {
                    let ws = null;

                    if (to < 0) ws = curWs.get_neighbor(dir);
                    else if (dir == direction)
                        ws = global.workspace_manager.get_workspace_by_index(
                            to
                        );

                    if (ws == null || ws == curWs) {
                        continue;
                    }

                    let info = this._switchData.surroundings[dir];
                    let superWorkspace = global.superWorkspaceManager.getPrimarySuperWorkspaceByIndex(
                        ws.index()
                    );
                    info.panel = superWorkspace.frontendContainer;
                    info.panel.show();
                    info.backgroundContainer =
                        superWorkspace.backgroundContainer;

                    info.backgroundActor =
                        superWorkspace.bgManager.backgroundActor;
                    info.panel.reparent(info.actor);
                    info.panel.raise_top();
                    info.backgroundContainer.reparent(info.actor);
                    info.backgroundContainer.lower_bottom();
                    info.actor.set_offscreen_redirect(
                        Clutter.OffscreenRedirect.ALWAYS
                    );
                }
                return result;
            };
        })();

        /*
         * Override the _finishWorkspaceSwitch to clear the changes of _prepareWorkspaceSwitch
         */
        this.original_finishWorkspaceSwitch = Main.wm._finishWorkspaceSwitch;
        Main.wm._finishWorkspaceSwitch = (function() {
            var cachedFunction = Main.wm._finishWorkspaceSwitch;
            return function() {
                let switchData = arguments[0];
                switchData.previousFrontendContainer.reparent(
                    Main.layoutManager.uiGroup
                );
                switchData.previousFrontendContainer.hide();
                switchData.backgroundContainer.reparent(
                    Main.layoutManager._backgroundGroup
                );
                switchData.backgroundContainer.hide();
                for (let dir of Object.values(Meta.MotionDirection)) {
                    let info = switchData.surroundings[dir];
                    if (info) {
                        info.panel.reparent(Main.layoutManager.uiGroup);
                        info.panel.hide();
                        info.backgroundContainer.reparent(
                            Main.layoutManager._backgroundGroup
                        );
                        info.backgroundContainer.hide();
                    }
                }

                global.superWorkspaceManager.getActiveSuperWorkspace().showUI();
                // Before
                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                // After
                switchData.overContainer.destroy();
                global.workspaceAnimationInProgress = false;
                return result;
            };
        })();

        this.original_actionMoveWorkspace = Main.wm.actionMoveWorkspace;
        Main.wm.actionMoveWorkspace = (function() {
            var cachedFunction = Main.wm.actionMoveWorkspace;
            return function() {
                // Before
                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                // After
                let currentWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();
                currentWorkspace.showUI();

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
            this.signals.push({
                from: workspace,
                id: workspace.connect('window-added', (workspace, window) => {
                    //Ignore unHandle window and window on secondary screens
                    if (!this._handleWindow(window) || window.on_all_workspaces)
                        return;
                    workspace.workspaceEnhancer.addWindow(window);
                })
            });

            this.signals.push({
                from: workspace,
                id: workspace.connect('window-removed', (workspace, window) => {
                    //Ignore unHandle window and window on secondary screens
                    if (!this._handleWindow(window) || window.on_all_workspaces)
                        return;
                    workspace.workspaceEnhancer.removeWindow(window);
                })
            });
        }

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'grab-op-begin',
                (display1, display2, window, op) => {
                    if (op !== Meta.GrabOp.MOVING) return;
                    this.grabInProgress = true;
                    this.grabWindow = window;
                    window.grabbed = true;
                    this.grabSignal = window.connect('position-changed', () => {
                        let windowRect = window.get_frame_rect();
                        let x = windowRect.x + windowRect.width / 2;
                        let y = windowRect.y + windowRect.height / 2;
                        const windowHovered = this.grabWindow.workspaceEnhancer.windows.find(
                            windowToCheck => {
                                if (windowToCheck === this.grabWindow)
                                    return false;
                                let rect = windowToCheck.get_frame_rect();
                                return (
                                    x >= rect.x &&
                                    x <= rect.x + rect.width &&
                                    y >= rect.y &&
                                    y <= rect.y + rect.height
                                );
                            }
                        );
                        if (
                            windowHovered &&
                            !this.grabWindow.workspaceEnhancer.tilingManager
                                .tilingInProgress
                        ) {
                            this.grabWindow.workspaceEnhancer.swapWindows(
                                this.grabWindow,
                                windowHovered
                            );
                        }
                    });
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect('grab-op-end', () => {
                if (this.grabInProgress) {
                    this.grabInProgress = false;
                    this.grabWindow.disconnect(this.grabSignal);
                    this.grabWindow.grabbed = false;
                    this.grabWindow.workspaceEnhancer.tilingManager.tileWindows();
                    delete this.grabWindow;
                    delete this.grabSignal;
                }
            })
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'window-entered-monitor',
                (display, monitorIndex, window) => {
                    log('window-entered-monitor');
                    //Ignore unHandle window and window on primary screens
                    if (
                        !this._handleWindow(window) ||
                        monitorIndex === Main.layoutManager.primaryIndex ||
                        this.monitorChangeInProgress
                    )
                        return;
                    Main.layoutManager.monitors[
                        monitorIndex
                    ].workspaceEnhancer.addWindow(window);
                }
            )
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'window-left-monitor',
                (display, monitorIndex, window) => {
                    log('window-left-monitor');
                    //Ignore unHandle window and window on primary screens
                    if (
                        !this._handleWindow(window) ||
                        monitorIndex === Main.layoutManager.primaryIndex ||
                        this.monitorChangeInProgress
                    )
                        return;
                    Main.layoutManager.monitors[
                        monitorIndex
                    ].workspaceEnhancer.removeWindow(window);
                }
            )
        });
    }
};

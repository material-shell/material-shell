const { Clutter, St, Meta, GLib, Shell } = imports.gi;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const WorkspaceEnhancer =
    Me.imports.module.workspaceEnhancer.workspaceEnhancer.WorkspaceEnhancer;

/* exported WorkspaceEnhancerModule */
var WorkspaceEnhancerModule = class WorkspaceEnhancerModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.enabled = false;
        this.signals = [];

        this.currentWorkspace = this.workspaceManager.get_active_workspace();
    }

    enable(fake) {
        log('ENABLE WORKSPACE ENHANCER FAKE:', fake);
        //Hide the default Background
        global.window_group.get_child_at_index(0).hide();

        this.monitors = [...Main.layoutManager.monitors];
        this.prepareMonitors();

        this.workspaceManager
            .get_active_workspace()
            .primaryWorkspaceEnhancer.panel.show();
        this.workspaceManager
            .get_active_workspace()
            .primaryWorkspaceEnhancer.backgroundGroup.show();

        global.display.connect(
            'in-fullscreen-changed',
            (test, test2, test3) => {
                Main.layoutManager.monitors.forEach(monitor => {
                    let isFullscreen = global.display.get_monitor_in_fullscreen(
                        monitor.index
                    );
                    let workspaceEnhancer;
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        workspaceEnhancer = this.workspaceManager.get_active_workspace()
                            .primaryWorkspaceEnhancer;
                    } else {
                        workspaceEnhancer = monitor.workspaceEnhancer;
                    }
                    if (isFullscreen) {
                        workspaceEnhancer.panel.hide();
                    } else {
                        workspaceEnhancer.panel.show();
                    }
                });
            }
        );

        this.legacyPanelGhost = Main.overview._panelGhost;
        this.legacyPanelGhostIndex = Main.overview._overview
            .get_children()
            .indexOf(this.legacyPanelGhost);

        this.myPanelGhost = new St.Bin({
            child: new Clutter.Clone({
                source: Main.layoutManager.primaryMonitor.topBarSpacer
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

        this.workspaceManager.connect('active-workspace-changed', () => {
            let newWorkspace = this.workspaceManager.get_active_workspace();
            this.currentWorkspace.primaryWorkspaceEnhancer.panel.hide();
            this.currentWorkspace.primaryWorkspaceEnhancer.backgroundGroup.hide();
            this.currentWorkspace = newWorkspace;
            this.currentWorkspace.primaryWorkspaceEnhancer.panel.show();
            this.currentWorkspace.primaryWorkspaceEnhancer.backgroundGroup.show();
        });

        const SchemaSource = Gio.SettingsSchemaSource.new_from_directory(
            Me.dir.get_path(),
            Gio.SettingsSchemaSource.get_default(),
            false
        );
        const settings = new Gio.Settings({
            settings_schema: SchemaSource.lookup(Me.metadata['bindings'], true)
        });

        this.dispatchExistingWindows();

        this._listenToDispatchWindow();

        Main.wm.addKeybinding(
            'focus-next',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                log('focus-next');
                const currentMonitorIndex = global.display.get_current_monitor();
                const workspaceEnhancer =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? this.workspaceManager.get_active_workspace()
                              .primaryWorkspaceEnhancer
                        : Main.layoutManager.monitors[currentMonitorIndex]
                              .workspaceEnhancer;
                workspaceEnhancer.focusNext();
            }
        );

        Main.wm.addKeybinding(
            'focus-previous',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                log('focus-previous');
                const currentMonitorIndex = global.display.get_current_monitor();
                const workspaceEnhancer =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? this.workspaceManager.get_active_workspace()
                              .primaryWorkspaceEnhancer
                        : Main.layoutManager.monitors[currentMonitorIndex]
                              .workspaceEnhancer;
                workspaceEnhancer.focusPrevious();
            }
        );

        //If it's a fake enable it's an internal reload
        if (!fake) {
            log('registered to monitor changed');
            this.signalMonitorId = Main.layoutManager.connect(
                'monitors-changed',
                (test, test1, test2) => {
                    if (this.monitorChangeInProgress) {
                        log('monitors changed already in progress');
                        return;
                    }
                    log('monitors changed triggered');
                    this.monitorChangeInProgress = true;
                    this.disable(true);
                    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                        this.enable(true);
                        this.monitorChangeInProgress = false;
                    });
                }
            );
        }
        this.enabled = true;
    }

    disable(fake) {
        if (!this.enabled) {
            return;
        }
        log('DISABLE WORKSPACE ENHANCER FAKE:', fake);
        //Re show the default Background
        global.window_group.get_child_at_index(0).show();
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
        this.clearMonitors();

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

    prepareMonitors() {
        // For Each monitor
        this.monitors.forEach(monitor => {
            const isPrimary = Main.layoutManager.primaryIndex === monitor.index;

            // Create a spacer which will reserve the space on the screens for the taskbar
            monitor.topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
            monitor.topBarSpacer.height = 48;
            monitor.topBarSpacer.width = isPrimary
                ? monitor.width - 48
                : monitor.width;

            // If it's the primary
            if (isPrimary) {
                // add spacer inside the original panelBox (which is used for sizing some native stuff)
                Main.layoutManager.panelBox.add_child(monitor.topBarSpacer);
                Main.layoutManager.panelBox.set_position(
                    monitor.x + 48,
                    monitor.y
                );

                // And create a workspaceEnhancer for each workspaces
                for (let w = 0; w < this.workspaceManager.n_workspaces; w++) {
                    let workspace = this.workspaceManager.get_workspace_by_index(
                        w
                    );
                    workspace.primaryWorkspaceEnhancer = new WorkspaceEnhancer(
                        monitor
                    );
                }
            }
            // If it's a secondary monitor
            else {
                // add spacer in the main uigroup
                Main.layoutManager.uiGroup.add_child(monitor.topBarSpacer);
                monitor.topBarSpacer.set_position(monitor.x, monitor.y);
                Main.layoutManager._trackActor(monitor.topBarSpacer, {
                    affectsStruts: true
                });

                // And create a simple workspaceEnhancer
                monitor.workspaceEnhancer = new WorkspaceEnhancer(monitor);
            }
        });
    }

    clearMonitors() {
        log(this.monitors);
        this.monitors.forEach(monitor => {
            const isPrimary = Main.layoutManager.primaryIndex === monitor.index;
            monitor.topBarSpacer.destroy();

            if (isPrimary) {
                Main.layoutManager.panelBox.set_position(monitor.x, monitor.y);
            }
            if (monitor.workspaceEnhancer) {
                // destroy the workspaceEnhancer
                monitor.workspaceEnhancer.destroy();
            }
        });
        // destroy each workspaceEnhancer
        for (let w = 0; w < this.workspaceManager.n_workspaces; w++) {
            let workspace = this.workspaceManager.get_workspace_by_index(w);
            workspace.primaryWorkspaceEnhancer.destroy();
        }
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
                this._switchData.previousPanel =
                    curWs.primaryWorkspaceEnhancer.panel;
                this._switchData.previousPanel.show();
                this._switchData.previousPanel.reparent(
                    this._switchData.curGroup
                );
                this._switchData.previousBackgroundGroup =
                    curWs.primaryWorkspaceEnhancer.backgroundGroup;
                this._switchData.previousBackgroundActor =
                    curWs.primaryWorkspaceEnhancer.bgManager.backgroundActor;
                this._switchData.previousBackgroundActor.reparent(
                    this._switchData.curGroup
                );
                this._switchData.previousBackgroundActor.lower_bottom();
                this._switchData.previousBackgroundGroup.show();
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
                    info.panel = ws.primaryWorkspaceEnhancer.panel;
                    info.panel.show();
                    info.backgroundGroup =
                        ws.primaryWorkspaceEnhancer.backgroundGroup;
                    info.backgroundActor =
                        ws.primaryWorkspaceEnhancer.bgManager.backgroundActor;
                    info.panel.reparent(info.actor);
                    info.panel.raise_top();
                    info.backgroundActor.reparent(info.actor);
                    info.backgroundActor.lower_bottom();
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
                switchData.previousPanel.reparent(Main.layoutManager.uiGroup);
                switchData.previousPanel.hide();
                switchData.previousBackgroundActor.reparent(
                    switchData.previousBackgroundGroup
                );
                switchData.previousBackgroundGroup.hide();
                for (let dir of Object.values(Meta.MotionDirection)) {
                    let info = switchData.surroundings[dir];
                    if (info) {
                        info.panel.reparent(Main.layoutManager.uiGroup);
                        info.panel.hide();
                        info.backgroundActor.reparent(info.backgroundGroup);
                        info.backgroundGroup.hide();
                    }
                }

                global.workspace_manager
                    .get_active_workspace()
                    .primaryWorkspaceEnhancer.panel.show();
                global.workspace_manager
                    .get_active_workspace()
                    .primaryWorkspaceEnhancer.backgroundGroup.show();
                // Before
                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                // After
                switchData.overContainer.destroy();
                return result;
            };
        })();

        this.original_actionMoveWorkspace = Main.wm.actionMoveWorkspace;
        Main.wm.actionMoveWorkspace = (function() {
            var cachedFunction = Main.wm.actionMoveWorkspace;
            return function() {
                let currentWorkspace = global.workspace_manager.get_active_workspace();
                // Before
                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                // After
                currentWorkspace.primaryWorkspaceEnhancer.panel.show();
                currentWorkspace.primaryWorkspaceEnhancer.backgroundGroup.show();

                return result;
            };
        })();
    }

    restoreWindowManagersFunctions() {
        Main.wm._prepareWorkspaceSwitch = this.original_prepareWorkspaceSwitch;
        Main.wm._finishWorkspaceSwitch = this.original_finishWorkspaceSwitch;
        Main.wm.actionMoveWorkspace = this.original_actionMoveWorkspace;
    }

    dispatchExistingWindows() {
        global.get_window_actors().forEach(windowActor => {
            let metaWindow = windowActor.metaWindow;

            if (!this._handleWindow(metaWindow)) {
                return;
            }

            let monitor = Main.layoutManager.monitors[metaWindow.get_monitor()];
            if (monitor.index === Main.layoutManager.primaryIndex) {
                metaWindow
                    .get_workspace()
                    .primaryWorkspaceEnhancer.addWindow(metaWindow);
            } else {
                monitor.workspaceEnhancer.addWindow(metaWindow);
            }
        });
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
                    log('WINDOW ADDED');
                    //Ignore unHandle window and window on secondary screens
                    if (!this._handleWindow(window) || window.on_all_workspaces)
                        return;
                    workspace.primaryWorkspaceEnhancer.addWindow(window);
                })
            });

            this.signals.push({
                from: workspace,
                id: workspace.connect('window-removed', (workspace, window) => {
                    //Ignore unHandle window and window on secondary screens
                    if (!this._handleWindow(window) || window.on_all_workspaces)
                        return;
                    workspace.primaryWorkspaceEnhancer.removeWindow(window);
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
                    log('op-start', display1, display2, window, op);
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
                            log('Window hovered!', windowHovered.title);
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
                    log('grab-op-end');
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
                    //Ignore unHandle window and window on primary screens
                    if (
                        !this._handleWindow(window) ||
                        monitorIndex === Main.layoutManager.primaryIndex ||
                        this.monitorChangeInProgress
                    )
                        return;
                    log(
                        'enter-monitor',
                        monitorIndex,
                        'primary is ',
                        Main.layoutManager.primaryIndex
                    );
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
                    //Ignore unHandle window and window on primary screens
                    if (
                        !this._handleWindow(window) ||
                        monitorIndex === Main.layoutManager.primaryIndex ||
                        this.monitorChangeInProgress
                    )
                        return;
                    log(
                        'left-monitor',
                        monitorIndex,
                        'primary is ',
                        Main.layoutManager.primaryIndex
                    );
                    Main.layoutManager.monitors[
                        monitorIndex
                    ].workspaceEnhancer.removeWindow(window);
                }
            )
        });
    }

    _handleWindow(win) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(win.window_type);
    }
};

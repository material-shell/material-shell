const { Clutter, St, Meta, GLib, Shell, Gio } = imports.gi;
const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const WorkspaceEnhancer =
    Me.imports.module.workspaceEnhancer.workspaceEnhancer.WorkspaceEnhancer;
const WorkspaceList = Me.imports.widget.workspaceList.WorkspaceList;

/* exported WorkspaceEnhancerModule */
var WorkspaceEnhancerModule = class WorkspaceEnhancerModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.enabled = false;
        this.signals = [];
        this.primaryWorkspaceCategories = [
            {
                key: 'web',
                icon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/web-symbolic.svg`
                ),
                title: _('Internet'),
                categoriesIncluded: ['Network'],
                categoriesExcluded: [
                    'Chat',
                    'InstantMessaging',
                    'IRCClient',
                    'Feed',
                    'VideoConference',
                    'Email',
                    'ContactManagement',
                    'Security',
                    'Game'
                ],
                acceptAll: false,
                acceptOrphans: false
            },
            {
                key: 'development',
                icon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/code-braces-symbolic.svg`
                ),
                title: _('Development'),
                categoriesIncluded: ['Development'],
                categoriesExcluded: [],
                acceptAll: false,
                acceptOrphans: false
            },
            {
                key: 'social',
                icon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/forum-symbolic.svg`
                ),
                title: _('Social'),
                categoriesIncluded: [
                    'Chat',
                    'InstantMessaging',
                    'IRCClient',
                    'Feed',
                    'VideoConference',
                    'Email',
                    'ContactManagement'
                ],
                categoriesExcluded: [],
                acceptAll: false,
                acceptOrphans: false
            },
            {
                key: 'office',
                icon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/folder-symbolic.svg`
                ),
                title: _('Office'),
                categoriesIncluded: ['Office', 'FileManager'],
                categoriesExcluded: ['ContactManagement'],
                acceptAll: false,
                acceptOrphans: false
            },
            {
                key: 'graphics',
                icon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/palette-symbolic.svg`
                ),
                title: _('Graphics'),
                categoriesIncluded: ['Graphics'],
                categoriesExcluded: [],
                acceptAll: false,
                acceptOrphans: false
            },
            {
                key: 'multimedia',
                icon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/play-circle-outline-symbolic.svg`
                ),
                title: _('Multimedia'),
                categoriesIncluded: ['AudioVideo'],
                categoriesExcluded: [],
                acceptAll: false,
                acceptOrphans: false
            },
            {
                key: 'game',
                icon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/google-controller-symbolic.svg`
                ),
                title: _('Games'),
                categoriesIncluded: ['Game'],
                categoriesExcluded: [],
                acceptAll: false,
                acceptOrphans: false
            },
            {
                key: 'other',
                icon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/package-symbolic.svg`
                ),
                title: _('Others'),
                categoriesIncluded: [],
                categoriesExcluded: [],
                acceptAll: false,
                acceptOrphans: true
            }
        ];
        this.secondaryWorkspaceCategory = {
            key: 'external',
            icon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/package-symbolic.svg`
            ),
            title: _('All applications'),
            categoriesIncluded: [],
            categoriesExcluded: [],
            acceptAll: true,
            acceptOrphans: false
        };
        this.superWorkspaces = [];
        /* {
            AudioVideo: {},
            Development: {},
            Education: {},
            Game: {},
            Graphics: {},
            Network: {},
            Office: {},
            Settings: {},
            System: {},
            Utility: {}
        }; */
        this.currentWorkspace = this.workspaceManager.get_active_workspace();
    }

    enable(fake) {
        //Hide the default Background
        //global.window_group.get_child_at_index(0).hide();

        this.prepareWorkspaces();
        this.monitors = [...Main.layoutManager.monitors];
        this.prepareMonitors();
        this.workspaceList = new WorkspaceList();
        Main.panel._leftBox.add_child(this.workspaceList);

        this.workspaceManager
            .get_active_workspace()
            .workspaceEnhancer.frontendContainer.show();
        this.workspaceManager
            .get_active_workspace()
            .workspaceEnhancer.backgroundContainer.show();

        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'in-fullscreen-changed',
                (test, test2, test3) => {
                    Main.layoutManager.monitors.forEach(monitor => {
                        let isFullscreen = global.display.get_monitor_in_fullscreen(
                            monitor.index
                        );
                        let workspaceEnhancer;
                        if (Main.layoutManager.primaryIndex === monitor.index) {
                            workspaceEnhancer = this.workspaceManager.get_active_workspace()
                                .workspaceEnhancer;
                        } else {
                            workspaceEnhancer = monitor.workspaceEnhancer;
                        }
                        if (isFullscreen) {
                            workspaceEnhancer.frontendContainer.hide();
                        } else {
                            workspaceEnhancer.frontendContainer.show();
                        }
                    });
                }
            )
        });

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

        this.signals.push({
            from: this.workspaceManager,
            id: this.workspaceManager.connect(
                'active-workspace-changed',
                () => {
                    let newWorkspace = this.workspaceManager.get_active_workspace();
                    this.currentWorkspace.workspaceEnhancer.frontendContainer.hide();
                    this.currentWorkspace.workspaceEnhancer.backgroundContainer.hide();
                    this.currentWorkspace = newWorkspace;
                    this.currentWorkspace.workspaceEnhancer.frontendContainer.show();
                    this.currentWorkspace.workspaceEnhancer.backgroundContainer.show();
                }
            )
        });

        this.dispatchExistingWindows();

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

        this.dispatchApps();

        //If it's a fake enable it's an internal reload
        if (!fake) {
            this.signalMonitorId = Main.layoutManager.connect(
                'monitors-changed',
                (test, test1, test2) => {
                    if (this.monitorChangeInProgress) {
                        return;
                    }
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
        //Re show the default Background
        global.window_group.get_child_at_index(0).show();
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
        this.clearMonitors();
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

    prepareWorkspaces() {
        let diff = Math.abs(
            this.primaryWorkspaceCategories.length -
                this.workspaceManager.n_workspaces
        );
        for (var i = 0; i < diff; i++) {
            if (
                this.primaryWorkspaceCategories.length >
                this.workspaceManager.n_workspaces
            ) {
                this.workspaceManager.append_new_workspace(
                    false,
                    global.get_current_time()
                );
            } else {
                this.workspaceManager.remove_workspace(
                    this.workspaceManager.get_workspace_by_index(
                        this.workspaceManager.n_workspaces - 1
                    ),
                    global.get_current_time()
                );
            }
        }
    }

    prepareMonitors() {
        this.superWorkspaces = [];
        // For Each monitor
        for (let monitor of this.monitors) {
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
                    workspace.workspaceEnhancer = new WorkspaceEnhancer(
                        monitor,
                        this.primaryWorkspaceCategories[w]
                    );
                    this.superWorkspaces.push(workspace.workspaceEnhancer);
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
                monitor.workspaceEnhancer = new WorkspaceEnhancer(
                    monitor,
                    this.secondaryWorkspaceCategory
                );
                this.superWorkspaces.push(monitor.workspaceEnhancer);
            }
        }
    }

    clearMonitors() {
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
            workspace.workspaceEnhancer.destroy();
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
                this._switchData.previousPanel =
                    curWs.workspaceEnhancer.frontendContainer;
                this._switchData.previousPanel.show();
                this._switchData.previousPanel.reparent(
                    this._switchData.curGroup
                );
                this._switchData.backgroundContainer =
                    curWs.workspaceEnhancer.backgroundContainer;

                this._switchData.previousBackgroundActor =
                    curWs.workspaceEnhancer.bgManager.backgroundActor;
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
                    info.panel = ws.workspaceEnhancer.frontendContainer;
                    info.panel.show();
                    info.backgroundContainer =
                        ws.workspaceEnhancer.backgroundContainer;

                    info.backgroundActor =
                        ws.workspaceEnhancer.bgManager.backgroundActor;
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
                switchData.previousPanel.reparent(Main.layoutManager.uiGroup);
                switchData.previousPanel.hide();
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

                global.workspace_manager
                    .get_active_workspace()
                    .workspaceEnhancer.frontendContainer.show();
                global.workspace_manager
                    .get_active_workspace()
                    .workspaceEnhancer.backgroundContainer.show();
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
                let currentWorkspace = global.workspace_manager.get_active_workspace();
                // Before
                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                // After
                currentWorkspace.workspaceEnhancer.frontendContainer.show();
                currentWorkspace.workspaceEnhancer.backgroundContainer.show();

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
                    .workspaceEnhancer.addWindow(metaWindow);
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

    _handleWindow(win) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(win.window_type);
    }

    dispatchApps() {
        let usage = Shell.AppUsage.get_default();
        let appSystem = Shell.AppSystem.get_default();
        let appsInstalled = appSystem.get_installed().filter(appInfo => {
            try {
                let id = appInfo.get_id(); // catch invalid file encodings
            } catch (e) {
                return false;
            }
            return appInfo.should_show();
        });

        let appsSorted = appsInstalled.sort((a, b) => {
            return usage.compare(a.get_id(), b.get_id());
        });

        let appsByCategoryKeys = {};
        for (let workspaceCategory of this.primaryWorkspaceCategories) {
            appsByCategoryKeys[workspaceCategory.key] = [];
        }
        let orphans = [];
        for (let app of appsSorted) {
            let workspaceCategoryKeys = this.getWorkspaceCategoriesForApp(app);
            let orphan = workspaceCategoryKeys.length === 0;
            if (!orphan) {
                for (let key of workspaceCategoryKeys) {
                    appsByCategoryKeys[key].push(app);
                }
            } else {
                orphans.push(app);
            }
        }

        for (let superWorkspace of this.superWorkspaces) {
            let apps;
            if (superWorkspace.category.acceptAll) {
                apps = appsSorted;
            } else if (superWorkspace.category.acceptOrphans) {
                apps = orphans;
            } else {
                apps = appsByCategoryKeys[superWorkspace.category.key];
            }
            superWorkspace.setApps(apps);
        }
    }

    getWorkspaceCategoriesForApp(appInfo) {
        const appCategoriesList = (appInfo.get_categories() || '').split(';');

        let categoryKeys = [];
        for (let category of this.primaryWorkspaceCategories) {
            let flagIncluded = false;
            let flagExcluded = false;
            appCategoriesList.forEach(appCategory => {
                flagIncluded =
                    flagIncluded ||
                    category.categoriesIncluded.indexOf(appCategory) >= 0;
                flagExcluded =
                    flagExcluded ||
                    category.categoriesExcluded.indexOf(appCategory) >= 0;
            });
            if (flagIncluded && !flagExcluded) {
                categoryKeys.push(category.key);
            }
        }
        return categoryKeys;
    }
};

const { Shell, Meta, St, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { WorkspaceCategories } = Me.imports.src.msWorkspace.workspaceCategories;
const { MsWorkspace } = Me.imports.src.msWorkspace.msWorkspace;
const {
    MsWorkspaceContainer
} = Me.imports.src.msWorkspace.msWorkspaceContainer;

const {
    MsWorkspaceWithCategory
} = Me.imports.src.msWorkspace.msWorkspaceWithCategory;
const { WorkspaceList } = Me.imports.src.widget.workspaceList;
const { MsWindow } = Me.imports.src.msWorkspace.msWindow;
const { MsDndManager } = Me.imports.src.msWorkspace.msDndManager;

/* exported MsWorkspaceManager */
var MsWorkspaceManager = class MsWorkspaceManager {
    constructor(appsByCategory) {
        log('new msWorkspaceManager');
        this.workspaceManager = global.workspace_manager;
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWorkspaceList = [];
        this.appsByCategory = appsByCategory;
        this.categoryList = Me.stateManager.getState('categoryList') || [];
        this.noUImode = false;
        this.metaWindowFocused = null;
        let previousState = Me.stateManager.getState('workspaces-state');
        if (previousState) {
            log('PREVIOUS-STATE', previousState);
        }
        // First build all the Categorized msWorkspaces on the primary screen
        /* this.categoryList.forEach((category, index) => {
            log(`new category workspace for ${category.key}`);
            let msWorkspace = new MsWorkspaceWithCategory(
                this,
                Main.layoutManager.primaryMonitor,
                false,
                category
            );
            this.msWorkspaceList.push(msWorkspace);
            let workspace = this.workspaceManager.get_workspace_by_index(index);
            log(workspace.msWorkspaceKey);
            if (workspace.msWorkspaceKey === category.key) {
                log('Found previous workspace no need to create a new one');
                workspace._keepAliveId = true;
                return;
            }
            log('Create a new workspace for category');
            workspace = this.workspaceManager.append_new_workspace(
                false,
                global.get_current_time()
            );
            workspace._keepAliveId = true;
            workspace.msWorkspaceKey = category.key;
            this.workspaceManager.reorder_workspace(workspace, index);
        }); */

        // then build the "normal" msWorkspaces for every monitors
        for (let monitor of Main.layoutManager.monitors) {
            if (Main.layoutManager.primaryIndex === monitor.index) {
                // On the primary we fill the rest of the legacy workspace length with normal msWorkspaces
                for (
                    let i = 0;
                    i <
                    this.workspaceManager.n_workspaces -
                        this.msWorkspacesWithCategory.length;
                    i++
                ) {
                    let msWorkspace = new MsWorkspace(
                        this,
                        Main.layoutManager.primaryMonitor,
                        false
                    );
                    this.msWorkspaceList.push(msWorkspace);
                }
            } else {
                let msWorkspace = new MsWorkspace(this, monitor, true);
                this.msWorkspaceList.push(msWorkspace);
            }
        }

        this.workspaceList = new WorkspaceList(this);
        Main.panel._leftBox.add_child(this.workspaceList);
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
            this.dispatchExistingWindows();
            this.refreshVisiblePrimaryMsWorkspace();
            return GLib.SOURCE_REMOVE;
        });
        this.msWorkspaceContainer = new MsWorkspaceContainer(this);
        Main.uiGroup.insert_child_above(
            this.msWorkspaceContainer,
            global.window_group
        );
        log(
            'super workspace manager created',
            this.workspaceManager.n_workspaces
        );

        this.signals = [];
        this.signals.push({
            from: Me.msWindowManager,
            id: Me.msWindowManager.connect(
                'ms-window-focused',
                (_, msWindow) => {
                    if (
                        msWindow &&
                        !msWindow.isDialog &&
                        msWindow.msWorkspace
                    ) {
                        msWindow.msWorkspace.onFocusTileable(msWindow);
                    }
                }
            )
        });

        this.signals.push({
            from: Me.msWindowManager,
            id: Me.msWindowManager.connect(
                'ms-window-created',
                (_, msWindow) => {
                    this.addWindowToAppropriateMsWorkspace(msWindow);
                    this.stateChanged();
                }
            )
        });
    }

    destroy() {
        for (var i = 0; i < this.workspaceManager.n_workspaces; i++) {
            let workspace = this.workspaceManager.get_workspace_by_index(i);
            /* if (workspace._keepAliveId) {
                this.workspaceManager.remove_workspace(
                    workspace,
                    global.get_current_time()
                );
            } */
            delete workspace._keepAliveId;
        }
        for (let msWorkspace of this.msWorkspaceList) {
            msWorkspace.destroy();
        }
        this.workspaceList.destroy();
        this.msWorkspaceContainer.destroy();
    }

    get primaryMsWorkspaces() {
        return this.msWorkspaceList.filter(msWorkspace => {
            return (
                msWorkspace.monitor.index === Main.layoutManager.primaryIndex
            );
        });
    }

    get msWorkspacesWithCategory() {
        return this.primaryMsWorkspaces.filter(msWorkspace => {
            return msWorkspace.category != null;
        });
    }

    get dynamicMsWorkspaces() {
        return this.primaryMsWorkspaces.filter(msWorkspace => {
            return !msWorkspace.category;
        });
    }

    onWorkspacesChange() {
        const nbOfDynamicWorkspaces =
            this.workspaceManager.n_workspaces -
            this.msWorkspacesWithCategory.length;
        log('workspacesChanged');

        const nbOfDiff =
            nbOfDynamicWorkspaces - this.dynamicMsWorkspaces.length;
        if (nbOfDiff === 0) return;

        for (let i = 0; i < Math.abs(nbOfDiff); i++) {
            if (nbOfDiff > 0) {
                log('there is more workspace');
                let msWorkspace = new MsWorkspace(
                    this,
                    Main.layoutManager.primaryMonitor,
                    false
                );
                this.msWorkspaceList.push(msWorkspace);
            } else {
                log('there is less workspace');
                const emptyMsWorkspaceList = this.msWorkspaceList.filter(
                    msWorkspace => {
                        return msWorkspace.msWindowList.length === 0;
                    }
                );
                let msWorkspaceToDestroy =
                    emptyMsWorkspaceList[emptyMsWorkspaceList.length - 1];
                log('ToDestroy', msWorkspaceToDestroy);
                msWorkspaceToDestroy.destroy();
                let indexToRemove = this.msWorkspaceList.indexOf(
                    msWorkspaceToDestroy
                );
                this.msWorkspaceList.splice(indexToRemove, 1);
            }
        }
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    stateChanged() {
        this.refreshWorkspaceWindows();
        this.refreshVisiblePrimaryMsWorkspace();
        this.checkWorkspaceKeepAlive();
        this.saveCurrentState();
    }

    checkWorkspaceKeepAlive() {
        log('checkWorkspaceKeepAlive');
        this.primaryMsWorkspaces.forEach(msWorkspace => {
            const workspace = this.getWorkspaceOfMsWorkspace(msWorkspace);
            if (workspace) {
                workspace._keepAliveId = msWorkspace.msWindowList.length > 0;
            }
        });
        if (this.workspaceManager.get_active_workspace()._keepAliveId) {
            Main.wm._workspaceTracker._checkWorkspaces();
        }
    }

    setWorkspaceBefore(categoryKeyToMove, categoryKeyRelative) {
        let categoryKeyToMoveIndex = this.categoryKeyOrderedList.indexOf(
            categoryKeyToMove
        );
        this.categoryKeyOrderedList.splice(categoryKeyToMoveIndex, 1);

        let categoryKeyRelativeIndex = this.categoryKeyOrderedList.indexOf(
            categoryKeyRelative
        );
        this.categoryKeyOrderedList.splice(
            categoryKeyRelativeIndex,
            0,
            categoryKeyToMove
        );
        this.stateChanged();
    }

    setWorkspaceAfter(categoryKeyToMove, categoryKeyRelative) {
        let categoryKeyToMoveIndex = this.categoryKeyOrderedList.indexOf(
            categoryKeyToMove
        );
        this.categoryKeyOrderedList.splice(categoryKeyToMoveIndex, 1);

        let categoryKeyRelativeIndex = this.categoryKeyOrderedList.indexOf(
            categoryKeyRelative
        );
        this.categoryKeyOrderedList.splice(
            categoryKeyRelativeIndex + 1,
            0,
            categoryKeyToMove
        );
        this.stateChanged();
    }

    saveCurrentState() {
        Me.stateManager.setState(
            'workspaces-state',
            this.msWorkspaceList
                .filter(msWorkspace => {
                    return msWorkspace.tileableList.length;
                })
                .map(msWorkspace => {
                    return {
                        msWindowList: msWorkspace.tileableList
                            .filter(tileable => {
                                return tileable instanceof MsWindow;
                            })
                            .map(msWindow => {
                                return {
                                    appId: msWindow.app.get_id(),
                                    metaWindowDescription:
                                        msWindow.metaWindowDescription
                                };
                            })
                    };
                })
        );
    }

    refreshWorkspaceWindows() {
        this.primaryMsWorkspaces.forEach(msWorkspace => {
            let workspace = this.getWorkspaceOfMsWorkspace(msWorkspace);
            for (let msWindow of msWorkspace.msWindowList) {
                if (msWindow.metaWindow) {
                    msWindow.metaWindow.change_workspace(workspace);
                }
            }
        });
    }

    refreshVisiblePrimaryMsWorkspace() {
        let activeMsWorkspace = this.getActiveMsWorkspace();
        this.msWorkspaceList.forEach(msWorkspace => {
            if (
                msWorkspace.monitor !== Main.layoutManager.primaryMonitor ||
                msWorkspace === activeMsWorkspace
            ) {
                activeMsWorkspace.uiVisible = true;
                activeMsWorkspace.updateUI();
            } else {
                msWorkspace.uiVisible = false;
                msWorkspace.updateUI();
            }
        });
    }

    getActiveMsWorkspace() {
        let activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        return this.primaryMsWorkspaces[activeWorkspaceIndex];
    }

    getMsWorkspaceByCategoryKey(categoryKey) {
        return this.msWorkspaceList.find(msWorkspace => {
            return msWorkspace.categoryKey === categoryKey;
        });
    }

    getWorkspaceOfMsWorkspace(msWorkspace) {
        return this.workspaceManager.get_workspace_by_index(
            this.primaryMsWorkspaces.indexOf(msWorkspace)
        );
    }

    getMsWorkspacesOfMonitorIndex(monitorIndex) {
        return this.msWorkspaceList.filter(msWorkspace => {
            return msWorkspace.monitor.index === monitorIndex;
        });
    }

    getMsWorkspaceOfMetaWindow(metaWindow) {
        const windowMonitorIndex = metaWindow.get_monitor();
        if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
            return this.getMsWorkspacesOfMonitorIndex(windowMonitorIndex)[0];
        } else {
            return this.primaryMsWorkspaces[metaWindow.get_workspace().index()];
        }
    }

    addWindowToAppropriateMsWorkspace(msWindow) {
        const windowMonitorIndex = msWindow.metaWindow.get_monitor();
        const currentWindowWorkspace = msWindow.metaWindow.get_workspace();
        let msWorkspace;

        if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
            msWorkspace = this.getMsWorkspacesOfMonitorIndex(
                windowMonitorIndex
            )[0];
        } else {
            msWorkspace = this.primaryMsWorkspaces[
                currentWindowWorkspace.index()
            ];
        }
        log('currentWindowWorkspace.index()', currentWindowWorkspace.index());
        this.setWindowToMsWorkspace(msWindow, msWorkspace);
        /* if (!metaWindow.handledByMaterialShell) return;

        const windowMonitorIndex = metaWindow.get_monitor();
        const currentWindowWorkspace = metaWindow.get_workspace();

        let msWorkspace;
        if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
            msWorkspace = this.getMsWorkspacesOfMonitorIndex(
                windowMonitorIndex
            )[0];
        } else {
            const appToFind = this.windowTracker.get_window_app(metaWindow);

            msWorkspace = this.msWorkspaceList.find(msWorkspace => {
                return (
                    msWorkspace.category.primary &&
                    msWorkspace.apps.findIndex(app => {
                        return app.get_id() === appToFind.get_id();
                    }) > -1
                );
            });

            if (!msWorkspace) {
                msWorkspace = this.primaryMsWorkspaces[currentWindowWorkspace.index()];
            }
        }

        let workspaceOfMsWorkspace = this.getWorkspaceOfMsWorkspace(
            msWorkspace
        );
        if (
            workspaceOfMsWorkspace &&
            workspaceOfMsWorkspace !== currentWindowWorkspace
        ) {
            metaWindow.change_workspace(workspaceOfMsWorkspace); 
        }
        this.setWindowToMsWorkspace(metaWindow, msWorkspace); */
    }

    dispatchExistingWindows() {
        Me.msWindowManager.msWindowList.forEach(msWindow => {
            this.addWindowToAppropriateMsWorkspace(msWindow);
            this.stateChanged();
        });
    }

    metaWindowEnteredWorkspace(metaWindow, workspace) {
        if (
            !metaWindow.handledByMaterialShell ||
            metaWindow.on_all_workspaces ||
            !metaWindow.get_compositor_private()
        ) {
            return;
        }
        log('metaWindowEnteredWorkspace', metaWindow.get_title());
        const msWorkspace = this.primaryMsWorkspaces[workspace.index()];

        this.setWindowToMsWorkspace(metaWindow.msWindow, msWorkspace);
    }

    windowEnteredMonitor(metaWindow, monitorIndex) {
        //Ignore unHandle metaWindow and metaWindow on secondary screens
        if (
            !metaWindow.handledByMaterialShell ||
            monitorIndex === Main.layoutManager.primaryIndex
        ) {
            return;
        }
        const msWorkspace = this.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];

        if (!msWorkspace) {
            return;
        }

        this.setWindowToMsWorkspace(metaWindow, msWorkspace);
    }

    setWindowToMsWorkspace(msWindow, newMsWorkspace) {
        log('setWindowToMsWorkspace', msWindow.title);
        if (msWindow.metaWindow) {
            if (
                newMsWorkspace.monitor.index !=
                msWindow.metaWindow.get_monitor()
            ) {
                return msWindow.metaWindow.move_to_monitor(
                    newMsWorkspace.monitor
                );
            }
            const newWorkspace = this.getWorkspaceOfMsWorkspace(newMsWorkspace);
            if (msWindow.metaWindow.get_workspace() != newWorkspace) {
                log('CHANGE METAWINDOW WORKSPACE');
                return msWindow.metaWindow.change_workspace(newWorkspace);
            }
        }
        let oldMsWorkspace = msWindow.msWorkspace;

        if (oldMsWorkspace) {
            if (oldMsWorkspace === newMsWorkspace) {
                return;
            } else {
                oldMsWorkspace.removeMsWindow(msWindow);
            }
        }

        newMsWorkspace.addMsWindow(msWindow);
        this.stateChanged();
    }

    _handleWindow(metaWindow) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(metaWindow.window_type);
    }
};
Signals.addSignalMethods(MsWorkspaceManager.prototype);

const { Shell, Meta } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { WorkspaceCategories } = Me.imports.superWorkspace.workspaceCategories;
const { SuperWorkspace } = Me.imports.superWorkspace.superWorkspace;
const { WorkspaceList } = Me.imports.widget.workspaceList;

/* exported SuperWorkspaceManager */
var SuperWorkspaceManager = class SuperWorkspaceManager {
    constructor(appsByCategory) {
        this.workspaceManager = global.workspace_manager;
        this.windowTracker = Shell.WindowTracker.get_default();
        this.superWorkspaces = [];
        this.appsByCategory = appsByCategory;
        this.categoryKeyOrderedList =
            Me.stateManager.getState('categoryKeyOrderedList') || [];
        this.noUImode = false;
        for (let [key, category] of Object.entries(WorkspaceCategories)) {
            if (!this.appsByCategory[key].length) continue;
            if (category.primary) {
                let superWorkspace = new SuperWorkspace(
                    this,
                    key,
                    category,
                    this.appsByCategory[key],
                    Main.layoutManager.primaryMonitor,
                    false
                );
                if (this.categoryKeyOrderedList.indexOf(key) === -1) {
                    this.categoryKeyOrderedList.push(key);
                }
                this.superWorkspaces.push(superWorkspace);
            } else {
                // For Each monitor
                for (let monitor of Main.layoutManager.monitors) {
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        continue;
                    }
                    let superWorkspace = new SuperWorkspace(
                        this,
                        key,
                        category,
                        this.appsByCategory[key],
                        monitor,
                        true
                    );
                    this.superWorkspaces.push(superWorkspace);
                }
            }
        }

        this.prepareWorkspaces();
        let activeSuperWorkspace = this.getActiveSuperWorkspace();

        activeSuperWorkspace.uiVisible = true;
        activeSuperWorkspace.updateUI();

        this.workspaceList = new WorkspaceList(this);
        Main.panel._leftBox.add_child(this.workspaceList);
        this.dispatchExistingWindows();
    }

    destroy() {
        for (let superWorkspace of this.superWorkspaces) {
            superWorkspace.destroy();
        }
        this.workspaceList.destroy();
    }

    prepareWorkspaces() {
        let diff = Math.abs(
            this.superWorkspaces.filter(
                superWorkspace => superWorkspace.category.primary
            ).length - this.workspaceManager.n_workspaces
        );
        let activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        for (var i = 0; i < diff; i++) {
            if (
                this.superWorkspaces.length > this.workspaceManager.n_workspaces
            ) {
                this.workspaceManager.append_new_workspace(
                    false,
                    global.get_current_time()
                );
            } else {
                let workspaceIndexToRemove =
                    this.workspaceManager.n_workspaces - 1;
                if (workspaceIndexToRemove === activeWorkspaceIndex) {
                    Main.wm._blockAnimations = true;
                    this.workspaceManager
                        .get_workspace_by_index(0)
                        .activate(global.get_current_time());
                    Main.wm._blockAnimations = false;
                }
                this.workspaceManager.remove_workspace(
                    this.workspaceManager.get_workspace_by_index(
                        this.workspaceManager.n_workspaces - 1
                    ),
                    global.get_current_time()
                );
            }
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
        this.saveCategoryKeyOrderedList();
        this.refreshWorkspaceWindows();
        this.refreshVisiblePrimarySuperWorkspace();
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
        this.saveCategoryKeyOrderedList();
        this.refreshWorkspaceWindows();
        this.refreshVisiblePrimarySuperWorkspace();
    }

    saveCategoryKeyOrderedList() {
        Me.stateManager.setState(
            'categoryKeyOrderedList',
            this.categoryKeyOrderedList
        );
    }

    refreshWorkspaceWindows() {
        this.categoryKeyOrderedList.forEach((categoryKey, index) => {
            let superWorkspace = this.getSuperWorkspaceByCategoryKey(
                categoryKey
            );
            let workspace = this.workspaceManager.get_workspace_by_index(index);
            for (let metaWindow of superWorkspace.windows) {
                metaWindow.change_workspace(workspace);
            }
        });
    }

    refreshVisiblePrimarySuperWorkspace() {
        this.superWorkspaces.forEach(superWorkspace => {
            if (!superWorkspace.category.primary) return;
            superWorkspace.uiVisible = false;
            superWorkspace.updateUI();
        });
        let activeSuperWorkspace = this.getActiveSuperWorkspace();
        activeSuperWorkspace.uiVisible = true;
        activeSuperWorkspace.updateUI();
    }

    getActiveSuperWorkspace() {
        let activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        return this.getPrimarySuperWorkspaceByIndex(activeWorkspaceIndex);
    }

    getPrimarySuperWorkspaceByIndex(index) {
        return this.getSuperWorkspaceByCategoryKey(
            this.categoryKeyOrderedList[index]
        );
    }

    getSuperWorkspaceByCategoryKey(categoryKey) {
        return this.superWorkspaces.find(superWorkspace => {
            return superWorkspace.categoryKey === categoryKey;
        });
    }

    getWorkspaceOfSuperWorkspace(superWorkspace) {
        return this.workspaceManager.get_workspace_by_index(
            this.categoryKeyOrderedList.indexOf(superWorkspace.categoryKey)
        );
    }

    getSuperWorkspacesOfMonitorIndex(monitorIndex) {
        return this.superWorkspaces.filter(superWorkspace => {
            return superWorkspace.monitor.index === monitorIndex;
        });
    }

    getSuperWorkspaceOfMetaWindow(metaWindow) {
        const windowMonitorIndex = metaWindow.get_monitor();
        if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
            return this.getSuperWorkspacesOfMonitorIndex(windowMonitorIndex)[0];
        } else {
            return this.getPrimarySuperWorkspaceByIndex(
                metaWindow.get_workspace().index()
            );
        }
    }

    onNewWindow(metaWindow) {
        if (!this._handleWindow(metaWindow)) return;
        let windowActor = metaWindow.get_compositor_private();

        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        if (Me.loaded) {
            metaWindow.get_compositor_private().show();
        }
        this.addWindowToAppropriateSuperWorkspace(metaWindow);

        metaWindow.connect('unmanaged', () => {
            if (metaWindow.handledByMaterialShell && metaWindow.superWorkspace)
                metaWindow.superWorkspace.removeWindow(metaWindow);
        });
    }

    addWindowToAppropriateSuperWorkspace(metaWindow) {
        if (!metaWindow.handledByMaterialShell) return;

        const windowMonitorIndex = metaWindow.get_monitor();
        const currentWindowWorkspace = metaWindow.get_workspace();
        /*  const focusedMonitorIndex = global.display.get_current_monitor(); */

        let superWorkspace;
        if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
            superWorkspace = this.getSuperWorkspacesOfMonitorIndex(
                windowMonitorIndex
            )[0];
        } else {
            const appToFind = this.windowTracker.get_window_app(metaWindow);

            superWorkspace = this.superWorkspaces.find(superWorkspace => {
                return (
                    superWorkspace.category.primary &&
                    superWorkspace.apps.findIndex(app => {
                        return app.get_id() === appToFind.get_id();
                    }) > -1
                );
            });

            if (!superWorkspace) {
                superWorkspace = this.getPrimarySuperWorkspaceByIndex(
                    currentWindowWorkspace.index()
                );
            }
        }

        let workspaceOfSuperWorkspace = this.getWorkspaceOfSuperWorkspace(
            superWorkspace
        );
        if (
            workspaceOfSuperWorkspace &&
            workspaceOfSuperWorkspace !== currentWindowWorkspace
        ) {
            metaWindow.change_workspace(workspaceOfSuperWorkspace);
        }
        this.setWindowToSuperWorkspace(metaWindow, superWorkspace);
    }

    dispatchExistingWindows() {
        global.get_window_actors().forEach(windowActor => {
            this.onNewWindow(windowActor.metaWindow);
        });
    }

    windowEnteredWorkspace(metaWindow, workspace) {
        if (
            !metaWindow.handledByMaterialShell ||
            metaWindow.on_all_workspaces ||
            !metaWindow.get_compositor_private()
        ) {
            return;
        }
        const superWorkspace = this.getPrimarySuperWorkspaceByIndex(
            workspace.index()
        );

        this.setWindowToSuperWorkspace(metaWindow, superWorkspace);
    }

    windowEnteredMonitor(metaWindow, monitorIndex) {
        //Ignore unHandle metaWindow and metaWindow on secondary screens
        if (
            !metaWindow.handledByMaterialShell ||
            monitorIndex === Main.layoutManager.primaryIndex
        ) {
            return;
        }
        const superWorkspace = this.getSuperWorkspacesOfMonitorIndex(
            monitorIndex
        )[0];

        if (!superWorkspace) {
            return;
        }

        this.setWindowToSuperWorkspace(metaWindow, superWorkspace);
    }

    setWindowToSuperWorkspace(metaWindow, newSuperWorkspace) {
        let oldSuperWorkspace = metaWindow.superWorkspace;

        if (oldSuperWorkspace) {
            if (oldSuperWorkspace === newSuperWorkspace) {
                return;
            } else {
                oldSuperWorkspace.removeWindow(metaWindow);
            }
        }

        newSuperWorkspace.addWindow(metaWindow);
    }

    _handleWindow(metaWindow) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(metaWindow.window_type);
    }
};

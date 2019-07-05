const { Shell, Meta } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { AppsManager } = Me.imports.superWorkspace.appsManager;
const { WorkspaceCategories } = Me.imports.superWorkspace.workspaceCategories;
const { SuperWorkspace } = Me.imports.superWorkspace.superWorkspace;
const { WorkspaceList } = Me.imports.widget.workspaceList;

var SuperWorkspaceManager = class SuperWorkspaceManager {
    constructor(appsByCategory) {
        this.workspaceManager = global.workspace_manager;
        this.windowTracker = Shell.WindowTracker.get_default();
        this.superWorkspaces = [];
        this.appsByCategory = appsByCategory;
        this.categoryKeyOrderedList = [];
        for (let [key, category] of Object.entries(WorkspaceCategories)) {
            if (!this.appsByCategory[key].length) continue;
            if (category.primary) {
                let superWorkspace = new SuperWorkspace(
                    key,
                    category,
                    this.appsByCategory[key],
                    Main.layoutManager.primaryMonitor,
                    false
                );
                this.categoryKeyOrderedList.push(key);
                this.superWorkspaces.push(superWorkspace);
            } else {
                // For Each monitor
                for (let monitor of Main.layoutManager.monitors) {
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        continue;
                    }
                    let superWorkspace = new SuperWorkspace(
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

        let activeSuperWorkspace = this.getActiveSuperWorkspace();

        activeSuperWorkspace.frontendContainer.show();
        activeSuperWorkspace.backgroundContainer.show();

        this.prepareWorkspaces();

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
        for (var i = 0; i < diff; i++) {
            if (
                this.superWorkspaces.length > this.workspaceManager.n_workspaces
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
        log(
            monitorIndex,
            this.superWorkspaces.filter(superWorkspace => {
                return superWorkspace.monitor.index === monitorIndex;
            })
        );
        return this.superWorkspaces.filter(superWorkspace => {
            return superWorkspace.monitor.index === monitorIndex;
        });
    }

    addWindowToAppropriateSuperWorkspace(metaWindow) {
        if (!this._handleWindow(metaWindow)) return;
        const currentMonitorIndex = global.display.get_current_monitor();
        let superWorkspace;
        if (currentMonitorIndex === Main.layoutManager.primaryIndex) {
            const appToFind = this.windowTracker.get_window_app(metaWindow);
            superWorkspace = this.superWorkspaces.find(superWorkspace => {
                return (
                    superWorkspace.apps.findIndex(app => {
                        return app.get_id() === appToFind.get_id();
                    }) > -1
                );
            });

            metaWindow.change_workspace(
                this.getWorkspaceOfSuperWorkspace(superWorkspace)
            );
        } else {
            superWorkspace = this.getSuperWorkspacesOfMonitorIndex(
                currentMonitorIndex
            )[0];
        }
        /* metaWindow.activate_with_workspace(
            global.get_current_time(),
            this.getWorkspaceOfSuperWorkspace(superWorkspace)
        ); */
        log(superWorkspace.categoryKey);
        superWorkspace.addWindow(metaWindow);
    }

    dispatchExistingWindows() {
        global.get_window_actors().forEach(windowActor => {
            this.addWindowToAppropriateSuperWorkspace(windowActor.metaWindow);
        });
    }

    _handleWindow(win) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(win.window_type);
    }

    updateSuperWorkspaceVisibility() {
        let activeSuperWorkspace = this.getActiveSuperWorkspace();
        for (let superWorkspace of this.superWorkspaces) {
            if (superWorkspace === activeSuperWorkspace) {
                superWorkspace.showUI();
            } else {
                superWorkspace.hideUI();
            }
        }
    }
};

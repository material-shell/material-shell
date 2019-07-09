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
        this.prepareWorkspaces();
        let activeSuperWorkspace = this.getActiveSuperWorkspace();

        activeSuperWorkspace.frontendContainer.show();
        activeSuperWorkspace.backgroundContainer.show();

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
        log('diff');
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

    addWindowToAppropriateSuperWorkspace(metaWindow) {
        if (!this._handleWindow(metaWindow)) return;

        log(
            `window ${metaWindow.get_title()} search for the appropriate SuperWorkspace`
        );

        const windowMonitorIndex = metaWindow.get_monitor();
        const currentWindowWorkspace = metaWindow.get_workspace();
        /*  const focusedMonitorIndex = global.display.get_current_monitor(); */

        const appToFind = this.windowTracker.get_window_app(metaWindow);

        log('search superWorkspace by app');
        let superWorkspace = this.superWorkspaces.find(superWorkspace => {
            return (
                superWorkspace.category.primary &&
                superWorkspace.apps.findIndex(app => {
                    return app.get_id() === appToFind.get_id();
                }) > -1
            );
        });

        if (!superWorkspace) {
            log('No superWorkspace by app founded');
            if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
                log(
                    'Window is on external monitor try to find right Superworkspace'
                );
                superWorkspace = this.getSuperWorkspacesOfMonitorIndex(
                    windowMonitorIndex
                )[0];
            } else {
                log(
                    'Window is on primary monitor try to find right Superworkspace'
                );
                superWorkspace = this.getPrimarySuperWorkspaceByIndex(
                    currentWindowWorkspace.index()
                );
            }
            log(`the superWorkspace founded is ${superWorkspace.categoryKey}`);
        }

        let workspaceOfSuperWorkspace = this.getWorkspaceOfSuperWorkspace(
            superWorkspace
        );
        if (
            workspaceOfSuperWorkspace &&
            workspaceOfSuperWorkspace !== currentWindowWorkspace
        ) {
            log(
                `the window is not on the correct workspace so it's moved to  ${workspaceOfSuperWorkspace.index()}`
            );
            metaWindow.change_workspace(workspaceOfSuperWorkspace);
        }

        log(superWorkspace.categoryKey);
        superWorkspace.addWindow(metaWindow);
    }

    dispatchExistingWindows() {
        global.get_window_actors().forEach(windowActor => {
            this.addWindowToAppropriateSuperWorkspace(windowActor.metaWindow);
        });
    }

    windowEnteredWorkspace(window, workspace) {
        if (
            !this._handleWindow(window) ||
            window.on_all_workspaces ||
            !window.get_compositor_private()
        ) {
            return;
        }
        log(`window ${window.get_id()} entered in workspace`);
        this.getPrimarySuperWorkspaceByIndex(workspace.index()).addWindow(
            window
        );
    }

    windowLeftWorkspace(window, workspace) {
        if (!this._handleWindow(window) || window.on_all_workspaces) {
            return;
        }
        log(`window ${window.get_id()} left a workspace`);
        this.getPrimarySuperWorkspaceByIndex(workspace.index()).removeWindow(
            window
        );
    }

    windowEnteredMonitor(window, monitorIndex) {
        //Ignore unHandle window and window on secondary screens
        if (
            !this._handleWindow(window) ||
            monitorIndex === Main.layoutManager.primaryIndex ||
            this.monitorChangeInProgress
        ) {
            return;
        }
        this.getSuperWorkspacesOfMonitorIndex(monitorIndex)[0].addWindow(
            window
        );
    }

    windowLeftMonitor(window, monitorIndex) {
        //Ignore unHandle window and window on secondary screens
        if (
            !this._handleWindow(window) ||
            monitorIndex === Main.layoutManager.primaryIndex ||
            this.monitorChangeInProgress
        ) {
            return;
        }
        this.getSuperWorkspacesOfMonitorIndex(monitorIndex)[0].removeWindow(
            window
        );
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

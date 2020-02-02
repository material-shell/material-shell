const { Shell, Meta, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { WorkspaceCategories } = Me.imports.superWorkspace.workspaceCategories;
const { SuperWorkspace } = Me.imports.superWorkspace.superWorkspace;
const {
    SuperWorkspaceWithCategory
} = Me.imports.superWorkspace.superWorkspaceWithCategory;
const { WorkspaceList } = Me.imports.widget.workspaceList;
const { SuperWindow } = Me.imports.superWorkspace.superWindow;

/* exported SuperWorkspaceManager */
var SuperWorkspaceManager = class SuperWorkspaceManager {
    constructor(appsByCategory) {
        log('new superWorkspaceManager');
        this.workspaceManager = global.workspace_manager;
        this.windowTracker = Shell.WindowTracker.get_default();
        this.superWorkspaces = [];
        this.superWindowList = [];
        this.appsByCategory = appsByCategory;
        this.categoryList = Me.stateManager.getState('categoryList') || [];
        this.noUImode = false;
        this.metaWindowFocused = null;
        // First build all the Categorized superWorkspaces on the primary screen
        this.categoryList.forEach((category, index) => {
            log(`new category workspace for ${category.key}`);
            let superWorkspace = new SuperWorkspaceWithCategory(
                this,
                Main.layoutManager.primaryMonitor,
                true,
                category
            );
            this.superWorkspaces.push(superWorkspace);
            let workspace = this.workspaceManager.get_workspace_by_index(index);
            log(workspace.superWorkspaceKey);
            if (workspace.superWorkspaceKey === category.key) {
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
            workspace.superWorkspaceKey = category.key;
            this.workspaceManager.reorder_workspace(workspace, index);
        });

        // then build the "normal" superWorkspaces for every monitors
        for (let monitor of Main.layoutManager.monitors) {
            if (Main.layoutManager.primaryIndex === monitor.index) {
                // On the primary we fill the rest of the legacy workspace length with normal superWorkspaces
                for (
                    let i = 0;
                    i <
                    this.workspaceManager.n_workspaces -
                        this.superWorkspacesWithCategory.length;
                    i++
                ) {
                    let superWorkspace = new SuperWorkspace(
                        this,
                        Main.layoutManager.primaryMonitor,
                        true
                    );
                    this.superWorkspaces.push(superWorkspace);
                }
            } else {
                let superWorkspace = new SuperWorkspace(this, monitor, true);
                this.superWorkspaces.push(superWorkspace);
            }
        }

        //this.prepareWorkspaces();
        let activeSuperWorkspace = this.getActiveSuperWorkspace();

        activeSuperWorkspace.uiVisible = true;
        activeSuperWorkspace.updateUI();

        this.workspaceList = new WorkspaceList(this);
        Main.panel._leftBox.add_child(this.workspaceList);
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 2000, () => {
            this.dispatchExistingWindows();
            return GLib.SOURCE_REMOVE;
        });
        log(
            'super workspace manager created',
            this.workspaceManager.n_workspaces
        );
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
        for (let superWorkspace of this.superWorkspaces) {
            superWorkspace.destroy();
        }
        this.workspaceList.destroy();
    }

    get primarySuperWorkspaces() {
        return this.superWorkspaces.filter(superWorkspace => {
            return (
                superWorkspace.monitor.index === Main.layoutManager.primaryIndex
            );
        });
    }

    get superWorkspacesWithCategory() {
        return this.primarySuperWorkspaces.filter(superWorkspace => {
            return superWorkspace.category != null;
        });
    }

    get dynamicSuperWorkspaces() {
        return this.primarySuperWorkspaces.filter(superWorkspace => {
            return !superWorkspace.category;
        });
    }

    onWorkspacesChange() {
        const nbOfDynamicWorkspaces =
            this.workspaceManager.n_workspaces -
            this.superWorkspacesWithCategory.length;
        log('workspacesChanged');

        const nbOfDiff =
            nbOfDynamicWorkspaces - this.dynamicSuperWorkspaces.length;
        if (nbOfDiff === 0) return;

        for (let i = 0; i < Math.abs(nbOfDiff); i++) {
            if (nbOfDiff > 0) {
                log('there is more workspace');
                let superWorkspace = new SuperWorkspace(
                    this,
                    Main.layoutManager.primaryMonitor,
                    true
                );
                this.superWorkspaces.push(superWorkspace);
            } else {
                log('there is less workspace');
                let superWorkspaceToDestroy = this.dynamicSuperWorkspaces[
                    this.dynamicSuperWorkspaces.length - 1
                ];
                superWorkspaceToDestroy.destroy();
                let indexToRemove = this.superWorkspaces.indexOf(
                    superWorkspaceToDestroy
                );
                this.superWorkspaces.splice(indexToRemove, 1);
            }
        }
        this.emit('dynamic-super-workspaces-changed');
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
            for (let superWindow of superWorkspace.superWindowList) {
                superWindow.metaWindow.change_workspace(workspace);
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
        return this.primarySuperWorkspaces[activeWorkspaceIndex];
    }

    getSuperWorkspaceByCategoryKey(categoryKey) {
        return this.superWorkspaces.find(superWorkspace => {
            return superWorkspace.categoryKey === categoryKey;
        });
    }

    getWorkspaceOfSuperWorkspace(superWorkspace) {
        return this.workspaceManager.get_workspace_by_index(
            this.primarySuperWorkspaces.indexOf(superWorkspace)
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
            return this.primarySuperWorkspaces[
                metaWindow.get_workspace().index()
            ];
        }
    }

    onNewMetaWindow(metaWindow) {
        log('onNewMetaWindow');
        if (!this._handleWindow(metaWindow)) return;

        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        let superWindow = this.superWindowList.find(superWindow => {
            return (
                superWindow.windowDescription === metaWindow.get_description()
            );
        });
        if (superWindow) {
            superWindow.setWindow(metaWindow);
        } else {
            let app = this.windowTracker.get_window_app(metaWindow);
            log(app.get_id(), metaWindow.get_description());
            let superWindow = new SuperWindow(
                app.get_id(),
                metaWindow.get_description(),
                metaWindow
            );
            log(superWindow.title);
            this.addWindowToAppropriateSuperWorkspace(superWindow);
        }

        metaWindow.connect('unmanaged', () => {
            if (metaWindow.handledByMaterialShell && metaWindow.superWorkspace)
                metaWindow.superWorkspace.removeSuperWindow(metaWindow);
        });
    }

    onFocusMetaWindow(metaWindow) {
        log('onFocusMetaWindow', metaWindow);
        /*
             If the current superWorkspace focused window actor is inaccessible it's mean that this notify is the was automatically made by gnome-shell to try to focus previous window
             We want to prevent this in order to handle it ourselves to select the next one instead of the previous.
            */
        if (
            this.metaWindowFocused &&
            !this.metaWindowFocused.get_compositor_private()
        ) {
            return;
        }

        if (!metaWindow) return;

        if (metaWindow.is_attached_dialog()) {
            metaWindow = metaWindow.get_transient_for();
        }
        this.metaWindowFocused = metaWindow;
        if (metaWindow.superWindow && !metaWindow.superWindow.isDialog) {
            metaWindow.superWindow.superWorkspace.onFocusTileable(
                metaWindow.superWindow
            );
        }
    }

    addWindowToAppropriateSuperWorkspace(superWindow) {
        const windowMonitorIndex = superWindow.metaWindow.get_monitor();
        const currentWindowWorkspace = superWindow.metaWindow.get_workspace();
        let superWorkspace;

        if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
            superWorkspace = this.getSuperWorkspacesOfMonitorIndex(
                windowMonitorIndex
            )[0];
        } else {
            superWorkspace = this.primarySuperWorkspaces[
                currentWindowWorkspace.index()
            ];
        }
        log('currentWindowWorkspace.index()', currentWindowWorkspace.index());
        this.setWindowToSuperWorkspace(superWindow, superWorkspace);
        /* if (!metaWindow.handledByMaterialShell) return;

        const windowMonitorIndex = metaWindow.get_monitor();
        const currentWindowWorkspace = metaWindow.get_workspace();

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
                superWorkspace = this.primarySuperWorkspaces[currentWindowWorkspace.index()];
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
        this.setWindowToSuperWorkspace(metaWindow, superWorkspace); */
    }

    dispatchExistingWindows() {
        global.get_window_actors().forEach(windowActor => {
            this.onNewMetaWindow(windowActor.metaWindow);
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
        const superWorkspace = this.primarySuperWorkspaces[workspace.index()];

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

    setWindowToSuperWorkspace(superWindow, newSuperWorkspace) {
        let oldSuperWorkspace = superWindow.superWorkspace;

        if (oldSuperWorkspace) {
            if (oldSuperWorkspace === newSuperWorkspace) {
                return;
            } else {
                oldSuperWorkspace.removeSuperWindow(superWindow);
            }
        }

        newSuperWorkspace.addSuperWindow(superWindow);
    }

    _handleWindow(metaWindow) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(metaWindow.window_type);
    }
};
Signals.addSignalMethods(SuperWorkspaceManager.prototype);

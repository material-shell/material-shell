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

/* exported MsWorkspaceManager */
var MsWorkspaceManager = class MsWorkspaceManager {
    constructor(appsByCategory) {
        log('new msWorkspaceManager');
        this.workspaceManager = global.workspace_manager;
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWorkspaces = [];
        this.msWindowList = [];
        this.appsByCategory = appsByCategory;
        this.categoryList = Me.stateManager.getState('categoryList') || [];
        this.noUImode = false;
        this.metaWindowFocused = null;
        this.msWorkspaceContainer = new MsWorkspaceContainer(this);
        Main.uiGroup.insert_child_above(
            this.msWorkspaceContainer,
            global.window_group
        );
        // First build all the Categorized msWorkspaces on the primary screen
        this.categoryList.forEach((category, index) => {
            log(`new category workspace for ${category.key}`);
            let msWorkspace = new MsWorkspaceWithCategory(
                this,
                Main.layoutManager.primaryMonitor,
                true,
                category
            );
            this.msWorkspaces.push(msWorkspace);
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
        });

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
                        true
                    );
                    this.msWorkspaces.push(msWorkspace);
                }
            } else {
                let msWorkspace = new MsWorkspace(this, monitor, true);
                this.msWorkspaces.push(msWorkspace);
            }
        }

        //this.prepareWorkspaces();
        let activeMsWorkspace = this.getActiveMsWorkspace();

        activeMsWorkspace.uiVisible = true;
        activeMsWorkspace.updateUI();

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
        for (let msWorkspace of this.msWorkspaces) {
            msWorkspace.destroy();
        }
        this.workspaceList.destroy();
    }

    get primaryMsWorkspaces() {
        return this.msWorkspaces.filter(msWorkspace => {
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
                    true
                );
                this.msWorkspaces.push(msWorkspace);
            } else {
                log('there is less workspace');
                let msWorkspaceToDestroy = this.dynamicMsWorkspaces[
                    this.dynamicMsWorkspaces.length - 1
                ];
                msWorkspaceToDestroy.destroy();
                let indexToRemove = this.msWorkspaces.indexOf(
                    msWorkspaceToDestroy
                );
                this.msWorkspaces.splice(indexToRemove, 1);
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
        this.refreshVisiblePrimaryMsWorkspace();
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
        this.refreshVisiblePrimaryMsWorkspace();
    }

    saveCategoryKeyOrderedList() {
        Me.stateManager.setState(
            'categoryKeyOrderedList',
            this.categoryKeyOrderedList
        );
    }

    refreshWorkspaceWindows() {
        this.categoryKeyOrderedList.forEach((categoryKey, index) => {
            let msWorkspace = this.getMsWorkspaceByCategoryKey(categoryKey);
            let workspace = this.workspaceManager.get_workspace_by_index(index);
            for (let msWindow of msWorkspace.msWindowList) {
                msWindow.metaWindow.change_workspace(workspace);
            }
        });
    }

    refreshVisiblePrimaryMsWorkspace() {
        this.msWorkspaces.forEach(msWorkspace => {
            if (!msWorkspace.category.primary) return;
            msWorkspace.uiVisible = false;
            msWorkspace.updateUI();
        });
        let activeMsWorkspace = this.getActiveMsWorkspace();
        activeMsWorkspace.uiVisible = true;
        activeMsWorkspace.updateUI();
    }

    getActiveMsWorkspace() {
        let activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        return this.primaryMsWorkspaces[activeWorkspaceIndex];
    }

    getMsWorkspaceByCategoryKey(categoryKey) {
        return this.msWorkspaces.find(msWorkspace => {
            return msWorkspace.categoryKey === categoryKey;
        });
    }

    getWorkspaceOfMsWorkspace(msWorkspace) {
        return this.workspaceManager.get_workspace_by_index(
            this.primaryMsWorkspaces.indexOf(msWorkspace)
        );
    }

    getMsWorkspacesOfMonitorIndex(monitorIndex) {
        return this.msWorkspaces.filter(msWorkspace => {
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

    onNewMetaWindow(metaWindow) {
        log('onNewMetaWindow');
        if (!this._handleWindow(metaWindow)) return;

        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        let msWindow = this.msWindowList.find(msWindow => {
            return msWindow.windowDescription === metaWindow.get_description();
        });
        if (msWindow) {
            msWindow.setWindow(metaWindow);
        } else {
            let app = this.windowTracker.get_window_app(metaWindow);
            log(app.get_id(), metaWindow.get_description());
            let msWindow = new MsWindow(
                app.get_id(),
                metaWindow.get_description(),
                metaWindow
            );
            this.msWindowList.push(msWindow);
            log(msWindow.title);
            this.addWindowToAppropriateMsWorkspace(msWindow);
        }

        metaWindow.connect('unmanaged', () => {
            log('unmanaged', metaWindow, metaWindow.msWindow.msWorkspace);
            if (
                metaWindow.handledByMaterialShell &&
                metaWindow.msWindow.msWorkspace
            ) {
                /* metaWindow.msWindow.msWorkspace.removeMsWindow(
                    metaWindow.msWindow
                ); */
            }
        });
    }

    onFocusMetaWindow(metaWindow) {
        log('onFocusMetaWindow', metaWindow);
        /*
             If the current msWorkspace focused window actor is inaccessible it's mean that this notify is the was automatically made by gnome-shell to try to focus previous window
             We want to prevent this in order to handle it ourselves to select the next one instead of the previous.
            */
        if (
            this.metaWindowFocused &&
            !this.metaWindowFocused.get_compositor_private()
        ) {
            log('previous-focus');
            return;
        }

        if (!metaWindow) return;

        if (metaWindow.is_attached_dialog()) {
            metaWindow = metaWindow.get_transient_for();
        }
        this.metaWindowFocused = metaWindow;
        if (metaWindow.msWindow && !metaWindow.msWindow.isDialog) {
            metaWindow.msWindow.msWorkspace.onFocusTileable(
                metaWindow.msWindow
            );
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

            msWorkspace = this.msWorkspaces.find(msWorkspace => {
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
        let oldMsWorkspace = msWindow.msWorkspace;

        if (oldMsWorkspace) {
            if (oldMsWorkspace === newMsWorkspace) {
                return;
            } else {
                oldMsWorkspace.removeMsWindow(msWindow);
            }
        }

        newMsWorkspace.addMsWindow(msWindow);
    }

    _handleWindow(metaWindow) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(metaWindow.window_type);
    }
};
Signals.addSignalMethods(MsWorkspaceManager.prototype);

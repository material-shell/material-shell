const { Shell, Meta, St, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { MsWorkspace } = Me.imports.src.layout.msWorkspace.msWorkspace;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { MsManager } = Me.imports.src.manager.msManager;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;
const { WorkspaceTracker } = imports.ui.windowManager;
/* exported MsWorkspaceManager */
var MsWorkspaceManager = class MsWorkspaceManager extends MsManager {
    constructor() {
        super();
        AddLogToFunctions(this);
        this.workspaceManager = global.workspace_manager;
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWorkspaceList = [];
        this.categoryList = Me.stateManager.getState('categoryList') || [];
        this.metaWindowFocused = null;

        this.workspaceTracker = Main.wm._workspaceTracker;
        WorkspaceTracker.prototype._oldCheckWorkspaces =
            WorkspaceTracker.prototype._checkWorkspaces;
        WorkspaceTracker.prototype._checkWorkspaces = function () {
            logFocus('_checkWorkspaces', this);
            let workspaceManager = global.workspace_manager;
            let i;
            let emptyWorkspaces = [];

            if (!Meta.prefs_get_dynamic_workspaces()) {
                this._checkWorkspacesId = 0;
                return false;
            }

            // Update workspaces only if Dynamic Workspace Management has not been paused by some other function
            if (this._pauseWorkspaceCheck) return true;

            for (i = 0; i < this._workspaces.length; i++) {
                let lastRemoved = this._workspaces[i]._lastRemovedWindow;
                if (
                    (lastRemoved &&
                        (lastRemoved.get_window_type() ==
                            Meta.WindowType.SPLASHSCREEN ||
                            lastRemoved.get_window_type() ==
                                Meta.WindowType.DIALOG ||
                            lastRemoved.get_window_type() ==
                                Meta.WindowType.MODAL_DIALOG)) ||
                    this._workspaces[i]._keepAliveId
                )
                    emptyWorkspaces[i] = false;
                else emptyWorkspaces[i] = true;
            }

            let sequences = Shell.WindowTracker.get_default().get_startup_sequences();
            for (i = 0; i < sequences.length; i++) {
                let index = sequences[i].get_workspace();
                if (index >= 0 && index <= workspaceManager.n_workspaces)
                    emptyWorkspaces[index] = false;
            }

            let msWindowList = global.ms.msWindowManager.msWindowList;
            for (i = 0; i < msWindowList.length; i++) {
                let msWindow = msWindowList[i];

                if (
                    msWindow.msWorkspace.monitor !=
                    Main.layoutManager.primaryMonitor
                )
                    continue;
                let workspaceIndex = global.ms.msWorkspaceManager
                    .getWorkspaceOfMsWorkspace(msWindow.msWorkspace)
                    .index();
                emptyWorkspaces[workspaceIndex] = false;
            }

            // If we don't have an empty workspace at the end, add one
            if (!emptyWorkspaces[emptyWorkspaces.length - 1]) {
                workspaceManager.append_new_workspace(
                    false,
                    global.get_current_time()
                );
                emptyWorkspaces.push(true);
            }

            let lastIndex = emptyWorkspaces.length - 1;
            let lastEmptyIndex = emptyWorkspaces.lastIndexOf(false) + 1;
            let activeWorkspaceIndex = workspaceManager.get_active_workspace_index();
            emptyWorkspaces[activeWorkspaceIndex] = false;

            // Delete empty workspaces except for the last one; do it from the end
            // to avoid index changes
            for (i = lastIndex; i >= 0; i--) {
                if (emptyWorkspaces[i] && i != lastEmptyIndex)
                    workspaceManager.remove_workspace(
                        this._workspaces[i],
                        global.get_current_time()
                    );
            }

            this._checkWorkspacesId = 0;
            return false;
        };

        this.observe(Me.msWindowManager, 'ms-window-focused', (_, msWindow) => {
            if (msWindow && msWindow.msWorkspace) {
                msWindow.msWorkspace.focusTileable(msWindow);
            }
        });

        this.observe(
            global.display,
            'window-entered-monitor',
            (display, monitorIndex, window) => {
                //Ignore unHandle window and window on primary screens
                this.windowEnteredMonitor(window, monitorIndex);
            }
        );

        this.observe(
            this.workspaceManager,
            'workspace-added',
            (_, workspaceIndex) => {
                if (this.restoringState) return;
                this.setupNewWorkspace(
                    this.workspaceManager.get_workspace_by_index(workspaceIndex)
                );
            }
        );

        this.observe(
            this.workspaceManager,
            'workspace-removed',
            (_, workspaceIndex) => {
                log('workspace-removed', workspaceIndex);
                this.removeMsWorkspaceAtIndex(workspaceIndex);
            }
        );

        this.observe(
            global.window_manager,
            'switch-workspace',
            (_, from, to) => {
                if (!this.restoringState) {
                    this.emit('switch-workspace', from, to);
                    this.stateChanged();
                }
            }
        );
    }

    init() {
        this.refreshMsWorkspaceUI();
    }

    destroy() {
        super.destroy();
        WorkspaceTracker.prototype._checkWorkspaces =
            WorkspaceTracker.prototype._oldCheckWorkspaces;
        delete WorkspaceTracker.prototype._oldCheckWorkspaces;
        for (var i = 0; i < this.workspaceManager.n_workspaces; i++) {
            let workspace = this.workspaceManager.get_workspace_by_index(i);
            delete workspace._keepAliveId;
        }
        for (let msWorkspace of this.msWorkspaceList) {
            msWorkspace.destroy();
        }
    }

    setupInitialState() {
        this.currentState = Me.stateManager.getState('workspaces-state');
        this.restoringState = true;
        this.removeEmptyWorkspaces();

        if (this.currentState && this.currentState.primaryWorkspaceList) {
            log(
                `State contain ${this.currentState.primaryWorkspaceList.length} to restore and we currently have ${this.workspaceManager.n_workspaces} workspaces`
            );

            if (
                this.workspaceManager.n_workspaces <
                this.currentState.primaryWorkspaceList.length
            ) {
                for (
                    let i = 0;
                    i <=
                    this.currentState.primaryWorkspaceList.length -
                        this.workspaceManager.n_workspaces;
                    i++
                ) {
                    log(
                        'Creating new workspace',
                        this.workspaceManager.n_workspaces
                    );
                    this.workspaceManager.append_new_workspace(
                        this.currentState.primaryWorkspaceActiveIndex ===
                            this.workspaceManager.n_workspaces,
                        global.get_current_time()
                    );
                    log('after ', this.workspaceManager.n_workspaces);
                }
            }
        }

        // Add empty workspace at the end
        this.workspaceManager.append_new_workspace(
            false,
            global.get_current_time()
        );

        for (let monitor of Main.layoutManager.monitors) {
            if (Main.layoutManager.primaryIndex === monitor.index) {
                for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
                    const initialState =
                        this.currentState &&
                        this.currentState.primaryWorkspaceList &&
                        this.currentState.primaryWorkspaceList[i];
                    this.setupNewWorkspace(
                        this.workspaceManager.get_workspace_by_index(i),
                        initialState
                    );
                }
            } else {
                let externalIndex = Main.layoutManager.monitors
                    .filter((monitor) => {
                        return monitor != Main.layoutManager.primaryMonitor;
                    })
                    .indexOf(monitor);
                this.createNewMsWorkspace(
                    monitor,
                    this.currentState &&
                        this.currentState.externalWorkspaces &&
                        this.currentState.externalWorkspaces[externalIndex]
                );
            }
        }
        delete this.restoringState;
    }

    removeEmptyWorkspaces() {
        let emptyWorkspaces = [];
        let i;
        for (i = 0; i < this.workspaceManager.n_workspaces; i++) {
            emptyWorkspaces[i] = true;
        }
        let windows = global.get_window_actors();

        for (i = 0; i < windows.length; i++) {
            let actor = windows[i];
            let win = actor.get_meta_window();

            if (win.is_on_all_workspaces()) continue;

            let workspaceIndex = win.get_workspace().index();
            emptyWorkspaces[workspaceIndex] = false;
        }

        emptyWorkspaces
            .map((empty, index) => {
                return empty
                    ? this.workspaceManager.get_workspace_by_index(index)
                    : null;
            })
            .filter((workspace) => workspace != null)
            .forEach((workspace) => {
                this.workspaceManager.remove_workspace(
                    workspace,
                    global.get_current_time()
                );
            });
    }

    get primaryMsWorkspaces() {
        if (!this.msWorkspaceList) return [];
        return this.msWorkspaceList.filter((msWorkspace) => {
            return msWorkspace.monitorIsPrimary;
        });
    }

    get msWorkspacesWithCategory() {
        return this.primaryMsWorkspaces.filter((msWorkspace) => {
            return msWorkspace.category != null;
        });
    }

    get dynamicMsWorkspaces() {
        return this.primaryMsWorkspaces.filter((msWorkspace) => {
            return !msWorkspace.category;
        });
    }

    setupNewWorkspace(workspace, initialState) {
        log('setupNewWorkspace', workspace.index());
        this.createNewMsWorkspace(
            Main.layoutManager.primaryMonitor,
            initialState
        );
        this.observe(workspace, 'window-added', (workspace, window) => {
            this.metaWindowEnteredWorkspace(window, workspace);
        });
    }

    createNewMsWorkspace(monitor, initialState) {
        log('createNewMsWorkspace');
        let msWorkspace = new MsWorkspace(this, monitor, initialState);
        msWorkspace.connect('tileableList-changed', (_) => {
            this.stateChanged();
        });
        msWorkspace.connect('tiling-layout-changed', (_) => {
            this.saveCurrentState();
        });
        msWorkspace.connect('readyToBeClosed', () => {
            let index = this.primaryMsWorkspaces.indexOf(msWorkspace);
            if (this.getActiveMsWorkspace() === msWorkspace) {
                //Try to switch to the next workspace before kill it
                if (this.primaryMsWorkspaces[index + 1]) {
                    this.primaryMsWorkspaces[index + 1].activate();
                }
                //Try to switch to the prev workspace is there is no next one before kill it
                else if (this.primaryMsWorkspaces[index - 1]) {
                    this.primaryMsWorkspaces[index - 1].activate();
                } else {
                    //This is the single workspace don't kill it
                    return;
                }
            }
            this.workspaceManager.remove_workspace(
                this.getWorkspaceOfMsWorkspace(msWorkspace),
                global.get_current_time()
            );
        });
        this.msWorkspaceList.push(msWorkspace);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    removeMsWorkspaceAtIndex(index) {
        const msWorkspaceToDelete = this.primaryMsWorkspaces[index];
        if (msWorkspaceToDelete) {
            const globalIndex = this.msWorkspaceList.indexOf(
                msWorkspaceToDelete
            );
            this.msWorkspaceList.splice(globalIndex, 1);
            msWorkspaceToDelete.destroy();
            this.stateChanged();
            this.emit('dynamic-super-workspaces-changed');
        }
    }

    closeMsWorkspace(msWorkspace) {}

    stateChanged() {
        if (
            this.restoringState ||
            this.stateChangedTriggered ||
            Me.disableInProgress
        )
            return;
        this.stateChangedTriggered = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.workspaceTracker._checkWorkspaces();
            this.saveCurrentState();
            this.stateChangedTriggered = false;
            return GLib.SOURCE_REMOVE;
        });
    }
    setMsWorkspaceAt(msWorkspaceToMove, toIndex) {
        let sourceIndex = this.msWorkspaceList.indexOf(msWorkspaceToMove);
        let realIndex = this.msWorkspaceList.indexOf(
            this.primaryMsWorkspaces[toIndex]
        );
        this.workspaceManager.reorder_workspace(
            this.workspaceManager.get_workspace_by_index(
                this.primaryMsWorkspaces.indexOf(msWorkspaceToMove)
            ),
            toIndex
        );
        this.msWorkspaceList.splice(sourceIndex, 1);
        this.msWorkspaceList.splice(realIndex, 0, msWorkspaceToMove);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    saveCurrentState() {
        const workspacesState = {
            externalWorkspaces: [],
            primaryWorkspaceList: [],
            primaryWorkspaceActiveIndex: this.workspaceManager.get_active_workspace_index(),
        };
        for (let monitor of Main.layoutManager.monitors) {
            if (Main.layoutManager.primaryIndex === monitor.index) {
                workspacesState.primaryWorkspaceList = this.primaryMsWorkspaces
                    .filter((msWorkspace) => {
                        return msWorkspace.msWindowList.length;
                    })
                    .map((msWorkspace) => {
                        return msWorkspace.getState();
                    });
            } else {
                workspacesState.externalWorkspaces.push(
                    this.getMsWorkspacesOfMonitorIndex(
                        monitor.index
                    )[0].getState()
                );
            }
        }
        this.currentState = workspacesState;
        Me.stateManager.setState('workspaces-state', workspacesState);
    }

    refreshMsWorkspaceUI() {
        this.msWorkspaceList.forEach((msWorkspace) => {
            msWorkspace.msWorkspaceActor.updateUI();
        });
    }

    getActiveMsWorkspace() {
        let activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        return this.primaryMsWorkspaces[activeWorkspaceIndex];
    }

    getMsWorkspaceByCategoryKey(categoryKey) {
        return this.msWorkspaceList.find((msWorkspace) => {
            return msWorkspace.categoryKey === categoryKey;
        });
    }

    getWorkspaceOfMsWorkspace(msWorkspace) {
        return this.workspaceManager.get_workspace_by_index(
            this.primaryMsWorkspaces.indexOf(msWorkspace)
        );
    }

    getMsWorkspacesOfMonitorIndex(monitorIndex) {
        return this.msWorkspaceList.filter((msWorkspace) => {
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

    getMsWorkspaceOfMsWindow(msWindow) {
        return this.msWorkspaceList.find((msWorkspace) => {
            return msWorkspace.msWindowList.includes(msWindow);
        });
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
        this.setWindowToMsWorkspace(msWindow, msWorkspace);
        this.stateChanged();
    }

    metaWindowEnteredWorkspace(metaWindow, workspace) {
        if (
            !metaWindow.handledByMaterialShell ||
            !metaWindow.msWindow ||
            metaWindow.on_all_workspaces ||
            !metaWindow.get_compositor_private()
        ) {
            return;
        }

        const msWorkspace = this.primaryMsWorkspaces[workspace.index()];

        /**
         * Discard all the workspace changed of a window during the 2 seconds after creation to prevent the window changing it's workspace for the current one.
         */
        if (
            metaWindow.msWindow.msWorkspace &&
            metaWindow.msWindow.msWorkspace != msWorkspace &&
            global.display.get_current_time_roundtrip() - metaWindow.createdAt <
                2000
        ) {
            return metaWindow.change_workspace(
                metaWindow.msWindow.msWorkspace.workspace
            );
        }
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
        this.setWindowToMsWorkspace(metaWindow.msWindow, msWorkspace);
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
        logFocus(
            'setWindowToMsWorkspace',
            msWindow,
            newMsWorkspace,
            oldMsWorkspace
        );

        newMsWorkspace.addMsWindow(msWindow, true);
        this.stateChanged();
    }

    _handleWindow(metaWindow) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(metaWindow.window_type);
    }
};

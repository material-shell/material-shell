const { Shell, Meta, St, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { MsWorkspace } = Me.imports.src.layout.msWorkspace.msWorkspace;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { MsManager } = Me.imports.src.manager.msManager;
const { AddLogToFunctions } = Me.imports.src.utils.debug;

/* exported MsWorkspaceManager */
var MsWorkspaceManager = class MsWorkspaceManager extends MsManager {
    constructor() {
        super();
        AddLogToFunctions(this);
        this.workspaceManager = global.workspace_manager;
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWorkspaceList = [];
        this.categoryList = Me.stateManager.getState('categoryList') || [];
        this.noUImode = false;
        this.metaWindowFocused = null;

        this.observe(Me.msWindowManager, 'ms-window-focused', (_, msWindow) => {
            if (msWindow && !msWindow.isDialog && msWindow.msWorkspace) {
                msWindow.msWorkspace.focusTileable(msWindow);
            }
        });

        this.observe(global.display, 'in-fullscreen-changed', () => {
            Main.layoutManager.monitors.forEach((monitor) => {
                let msWorkspace;
                if (Main.layoutManager.primaryIndex === monitor.index) {
                    msWorkspace = this.getActiveMsWorkspace();
                } else {
                    msWorkspace = this.getMsWorkspacesOfMonitorIndex(
                        monitor.index
                    )[0];
                }
                if (msWorkspace) {
                    msWorkspace.updateUI();
                }
            });
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
                this.checkWorkspaces();
                if (!this.restoringState)
                    this.emit('switch-workspace', from, to);
            }
        );
    }

    init() {
        this.refreshVisiblePrimaryMsWorkspace();
    }

    destroy() {
        super.destroy();
        for (var i = 0; i < this.workspaceManager.n_workspaces; i++) {
            let workspace = this.workspaceManager.get_workspace_by_index(i);
            delete workspace._keepAliveId;
        }
        for (let msWorkspace of this.msWorkspaceList) {
            msWorkspace.destroy();
        }
    }

    setupInitialState() {
        let previousState = Me.stateManager.getState('workspaces-state');
        this.restoringState = true;
        this.removeEmptyWorkspaces();

        if (previousState && previousState.primaryWorkspaceList) {
            log(
                `State contain ${previousState.primaryWorkspaceList.length} to restore and we currently have ${this.workspaceManager.n_workspaces} workspaces`
            );
            /* if (
                this.workspaceManager.n_workspaces >
                previousState.primaryWorkspaceList.length
            ) {
                for (
                    let i = 0;
                    i <=
                    this.workspaceManager.n_workspaces -
                        previousState.primaryWorkspaceList.length;
                    i++
                ) {
                    log(
                        'deleting workspace',
                        this.workspaceManager.n_workspaces
                    );
                    this.workspaceManager.remove_workspace(
                        this.workspaceManager.get_workspace_by_index(
                            this.workspaceManager.n_workspaces - i
                        ),
                        global.get_current_time()
                    );
                    log('after ', this.workspaceManager.n_workspaces);
                }
            } */
            if (
                this.workspaceManager.n_workspaces <
                previousState.primaryWorkspaceList.length
            ) {
                for (
                    let i = 0;
                    i <=
                    previousState.primaryWorkspaceList.length -
                        this.workspaceManager.n_workspaces;
                    i++
                ) {
                    log(
                        'Creating new workspace',
                        this.workspaceManager.n_workspaces
                    );
                    this.workspaceManager.append_new_workspace(
                        false,
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
                        previousState &&
                        previousState.primaryWorkspaceList &&
                        previousState.primaryWorkspaceList[i];
                    this.setupNewWorkspace(
                        this.workspaceManager.get_workspace_by_index(i),
                        initialState
                    );
                }
            } else {
                this.createNewMsWorkspace(monitor);
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
            return (
                msWorkspace.monitor.index === Main.layoutManager.primaryIndex
            );
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
                    this.getWorkspaceOfMsWorkspace(
                        this.primaryMsWorkspaces[index + 1]
                    ).activate(global.get_current_time());
                }
                //Try to switch to the prev workspace is there is no next one before kill it
                else if (this.primaryMsWorkspaces[index - 1]) {
                    this.getWorkspaceOfMsWorkspace(
                        this.primaryMsWorkspaces[index - 1]
                    ).activate(global.get_current_time());
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
        if (this.restoringState && this.stateChangedTriggered) return;
        this.stateChangedTriggered = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            log('IDLE_ADD');
            this.refreshWorkspaceWindows();
            this.checkWorkspaces();
            this.saveCurrentState();
            this.stateChangedTriggered = false;
        });
    }

    checkWorkspaces() {
        log('checkWorkspaces', this.primaryMsWorkspaces.length);
        if (
            this.primaryMsWorkspaces[this.primaryMsWorkspaces.length - 1] &&
            this.primaryMsWorkspaces[this.primaryMsWorkspaces.length - 1]
                .msWindowList.length != 0
        ) {
            this.workspaceManager.append_new_workspace(
                false,
                global.get_current_time()
            );
            //this.createNewMsWorkspace(Main.layoutManager.primaryMonitor);
        }
        let workspacesToRemove = [];
        this.primaryMsWorkspaces.forEach((msWorkspace, index) => {
            log(index);
            if (
                msWorkspace.msWindowList.length === 0 &&
                msWorkspace != this.getActiveMsWorkspace() &&
                index != this.primaryMsWorkspaces.length - 1
            ) {
                log(
                    'SHOULD REMOVE WORKSPACE AT ',
                    index,
                    this.primaryMsWorkspaces.length,
                    msWorkspace.msWindowList.length
                );
                workspacesToRemove.push(
                    this.workspaceManager.get_workspace_by_index(index)
                );
                //this.removeMsWorkspaceAtIndex(index);
            }
        });
        workspacesToRemove.forEach((workspace) => {
            this.workspaceManager.remove_workspace(
                workspace,
                global.get_current_time()
            );
        });
    }

    setMsWorkspaceBefore(msWorkspaceToMove, msWorkspaceRelative) {
        let msWorkspaceToMoveIndex = this.msWorkspaceList.indexOf(
            msWorkspaceToMove
        );
        this.msWorkspaceList.splice(msWorkspaceToMoveIndex, 1);

        let msWorkspaceRelativeIndex = this.msWorkspaceList.indexOf(
            msWorkspaceRelative
        );
        this.msWorkspaceList.splice(
            msWorkspaceRelativeIndex,
            0,
            msWorkspaceToMove
        );

        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    setMsWorkspaceAfter(msWorkspaceToMove, msWorkspaceRelative) {
        let msWorkspaceToMoveIndex = this.msWorkspaceList.indexOf(
            msWorkspaceToMove
        );
        this.msWorkspaceList.splice(msWorkspaceToMoveIndex, 1);

        let msWorkspaceRelativeIndex = this.msWorkspaceList.indexOf(
            msWorkspaceRelative
        );
        this.msWorkspaceList.splice(
            msWorkspaceRelativeIndex + 1,
            0,
            msWorkspaceToMove
        );
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    saveCurrentState() {
        const workspacesState = {
            externalWorkspaces: [],
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
        Me.stateManager.setState('workspaces-state', workspacesState);
    }

    refreshWorkspaceWindows() {
        this.primaryMsWorkspaces.forEach((msWorkspace) => {
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
        this.msWorkspaceList.forEach((msWorkspace) => {
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
        let msWindowToSearchMsWorkspace = msWindow.isDialog
            ? msWindow.metaWindow.find_root_ancestor().msWindow
            : msWindow;
        const windowMonitorIndex = msWindowToSearchMsWorkspace.metaWindow.get_monitor();
        const currentWindowWorkspace = msWindowToSearchMsWorkspace.metaWindow.get_workspace();
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

        this.setWindowToMsWorkspace(metaWindow.msWindow, msWorkspace);
    }

    setWindowToMsWorkspace(msWindow, newMsWorkspace) {
        /* if (msWindow.metaWindow) {
            if (
                newMsWorkspace.monitor.index !=
                msWindow.metaWindow.get_monitor()
            ) {
                log('move to monitor');
                return msWindow.metaWindow.move_to_monitor(
                    newMsWorkspace.monitor
                );
            }
            if (
                newMsWorkspace.monitor.index === Main.layoutManager.primaryIndex
            ) {
                const newWorkspace = this.getWorkspaceOfMsWorkspace(
                    newMsWorkspace
                );
                if (msWindow.metaWindow.get_workspace() != newWorkspace) {
                    log('move to workspace');
                    return msWindow.metaWindow.change_workspace(newWorkspace);
                }
            }
        } */
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

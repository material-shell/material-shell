/** Gnome libs imports */
const { Shell, Meta, GLib } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsWorkspace } = Me.imports.src.layout.msWorkspace.msWorkspace;
const { MsManager } = Me.imports.src.manager.msManager;
const { WorkspaceTracker } = imports.ui.windowManager;
const { getSettings } = Me.imports.src.utils.settings;

/* exported MsWorkspaceManager */
var MsWorkspaceManager = class MsWorkspaceManager extends MsManager {
    constructor() {
        super();
        this.workspaceManager = global.workspace_manager;
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWorkspaceList = [];
        this.settings = getSettings('tweaks');
        this.isPersistenceEnabled = this.settings.get_boolean(
            'enable-persistence'
        );
        this.categoryList = Me.stateManager.getState('categoryList') || [];
        this.metaWindowFocused = null;
        this.numOfMonitors = global.display.get_n_monitors();
        this.primaryIndex = global.display.get_primary_monitor();
        this.workspaceTracker = Main.wm._workspaceTracker;
        WorkspaceTracker.prototype._oldCheckWorkspaces =
            WorkspaceTracker.prototype._checkWorkspaces;
        WorkspaceTracker.prototype._checkWorkspaces = function () {
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

        this.observe(this.settings, 'changed::enable-persistence', (schema) => {
            this.isPersistenceEnabled = schema.get_boolean(
                'enable-persistence'
            );
            if (this.isPersistenceEnabled) {
                this.saveCurrentState();
            } else {
                Me.stateManager.setState('workspaces-state');
            }
        });

        this.observe(Main.layoutManager, 'monitors-changed', () => {
            this.onMonitorsChanged();
        });

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
                Me.logFocus('[DEBUG]', `Workspace ${workspaceIndex} was added`);
                this.setupNewWorkspace(
                    this.workspaceManager.get_workspace_by_index(workspaceIndex)
                );
            }
        );

        this.observe(
            this.workspaceManager,
            'workspace-removed',
            (_, workspaceIndex) => {
                Me.logFocus(
                    '[DEBUG]',
                    `Workspace ${workspaceIndex} was removed`
                );
                this.removeMsWorkspaceAtIndex(workspaceIndex);
            }
        );

        this.observe(
            global.window_manager,
            'switch-workspace',
            (_, from, to) => {
                if (!this.restoringState) {
                    this.emit('switch-workspace', from, to);
                    Me.logFocus(
                        '[DEBUG]',
                        `stateChanged from switch-workspace`
                    );
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

    get updatingMonitors() {
        return (
            this._updatingMonitors ||
            global.display.get_n_monitors() !== this.numOfMonitors ||
            this.primaryIndex !== global.display.get_primary_monitor()
        );
    }

    restorePreviousState() {
        // Make sure nothing is restored if state persistence is disabled
        if (this.isPersistenceEnabled) {
            this.currentState = Me.stateManager.getState('workspaces-state');
        } else {
            this.currentState = undefined;
        }

        this.restoringState = true;
        Me.logFocus('[DEBUG]', 'Restoring previous state');
        Me.logFocus('[DEBUG]', 'Step 1 Remove empty workspace if any');
        this.removeEmptyWorkspaces();

        let msWorkspaceListToRestore = this.currentState
            ? this.currentState.msWorkspaceList
                ? [...this.currentState.msWorkspaceList]
                : [
                      ...this.currentState.primaryWorkspaceList,
                      ...this.currentState.externalWorkspaces,
                  ]
            : [];

        Me.logFocus(
            '[DEBUG]',
            `Step 2 Restoring ${msWorkspaceListToRestore.length} previous MS workspace`
        );
        Me.logFocus(
            '[DEBUG]',
            `Start by restoring external monitors: ${
                Main.layoutManager.monitors.length - 1
            } external monitors found and ${
                msWorkspaceListToRestore.filter(
                    (msWorkspaceState) => msWorkspaceState.external
                ).length
            } external MS workspaces found`
        );
        // First restore the external monitors
        Main.layoutManager.monitors
            .filter((monitor) => monitor != Main.layoutManager.primaryMonitor)
            .forEach((monitor) => {
                const firstExternalStateIndex = msWorkspaceListToRestore.findIndex(
                    (msWorkspaceState) => msWorkspaceState.external
                );
                this.createNewMsWorkspace(
                    monitor,
                    firstExternalStateIndex > -1
                        ? msWorkspaceListToRestore.splice(
                              firstExternalStateIndex,
                              1
                          )[0]
                        : null
                );
            });

        Me.logFocus(
            '[DEBUG]',
            `Then continue by restoring all other ${msWorkspaceListToRestore.length} MS workspaces into ${this.workspaceManager.n_workspaces} existing gnome-shell workspace`
        );
        // Then restore all the others msWorkspaces
        if (msWorkspaceListToRestore.length) {
            msWorkspaceListToRestore.forEach((msWorkspaceState, index) => {
                let workspace =
                    this.workspaceManager.get_workspace_by_index(index) ||
                    this.workspaceManager.append_new_workspace(
                        false,
                        global.get_current_time()
                    );
                this.setupNewWorkspace(workspace, msWorkspaceState);
            });
        }

        Me.logFocus(
            '[DEBUG]',
            `Then continue by creating a new Ms Workspace for every Gnome Workspace still not assigned ${
                this.workspaceManager.n_workspaces -
                this.primaryMsWorkspaces.length
            }`
        );
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            if (!this.primaryMsWorkspaces[i]) {
                this.setupNewWorkspace(
                    this.workspaceManager.get_workspace_by_index(i)
                );
            }
        }

        Me.logFocus(
            '[DEBUG]',
            `Then add the last empty Ms Workspace at the end`
        );
        // Add empty workspace at the end
        const workspace = this.workspaceManager.append_new_workspace(
            false,
            global.get_current_time()
        );
        this.setupNewWorkspace(workspace);

        // Activate the saved workspace, if valid
        if (
            this.currentState &&
            this.currentState.primaryWorkspaceActiveIndex
        ) {
            Me.logFocus(
                '[DEBUG]',
                `Finally try to activate the previous active MsWorkspace: ${this.currentState.primaryWorkspaceActiveIndex}`
            );
            const savedIndex = this.currentState.primaryWorkspaceActiveIndex;
            if (savedIndex && savedIndex < this.workspaceManager.n_workspaces) {
                this.workspaceManager
                    .get_workspace_by_index(savedIndex)
                    .activate(global.get_current_time());
            }
        }

        delete this.restoringState;
    }

    removeEmptyWorkspaces() {
        let emptyWorkspaces = [];
        let i;
        Me.logFocus(
            '[DEBUG]',
            `Checking among ${this.workspaceManager.n_workspaces} workspaces`
        );
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

        emptyWorkspaces = emptyWorkspaces
            .map((empty, index) => {
                return empty
                    ? this.workspaceManager.get_workspace_by_index(index)
                    : null;
            })
            .filter((workspace) => workspace != null);

        Me.logFocus(
            '[DEBUG]',
            `Removing ${emptyWorkspaces.length} empty workspaces`
        );
        emptyWorkspaces.forEach((workspace) => {
            this.workspaceManager.remove_workspace(
                workspace,
                global.get_current_time()
            );
        });
    }

    onMonitorsChanged() {
        this._updatingMonitors = true;
        this.numOfMonitors = global.display.get_n_monitors();
        this.primaryIndex = global.display.get_primary_monitor();
        // First manage external screen
        const externalMonitors = Main.layoutManager.monitors.filter(
            (monitor) => monitor != Main.layoutManager.primaryMonitor
        );

        externalMonitors.forEach((externalMonitor) => {
            // try to find an unused external msWorkspace for this external Monitor
            let msWorkspace = this.msWorkspaceList.find((msWorkspace) => {
                return (
                    msWorkspace.external &&
                    !Main.layoutManager.monitors.includes(msWorkspace.monitor)
                );
            });

            // if there is not external msWorkspace available create one
            if (msWorkspace) {
                msWorkspace.setMonitor(externalMonitor);
            } else {
                this.createNewMsWorkspace(externalMonitor, null);
            }
        });

        // Then reassign monitors to each msWorkspaces
        this.msWorkspaceList
            .filter(
                (msWorkspace) =>
                    !Main.layoutManager.monitors.includes(msWorkspace.monitor)
            )
            .forEach((msWorkspace) => {
                if (!msWorkspace.monitorIsExternal) {
                    msWorkspace.setMonitor(Main.layoutManager.primaryMonitor);
                } else {
                    const monitorIsNowPrimary =
                        msWorkspace.monitor ===
                        Main.layoutManager.primaryMonitor;

                    // If the current monitor of the external msWorkspace is the new primary one or if the current monitor is missing we need to replace it
                    const needToReplaceMonitor =
                        monitorIsNowPrimary ||
                        !Main.layoutManager.monitors.includes(
                            msWorkspace.monitor
                        );

                    // Try to find an unused monitor;
                    const availableMonitor = Main.layoutManager.monitors.find(
                        (monitor) => {
                            return (
                                monitor != Main.layoutManager.primaryMonitor &&
                                !this.msWorkspaceList.find((msWorkspace) => {
                                    return msWorkspace.monitor === monitor;
                                })
                            );
                        }
                    );

                    // If we need to replace the current monitor and there isn't any available just add the workspace to the primary ones
                    if (needToReplaceMonitor && availableMonitor) {
                        msWorkspace.setMonitor(availableMonitor);
                    } else {
                        // To add the msWorkspace to the end of the primary we need to add it at the end
                        this.msWorkspaceList.splice(
                            this.msWorkspaceList.indexOf(msWorkspace),
                            1
                        );
                        this.msWorkspaceList.splice(
                            this.msWorkspaceList.indexOf(
                                this.primaryMsWorkspaces[
                                    this.primaryMsWorkspaces.length - 1
                                ]
                            ),
                            1,
                            msWorkspace
                        );
                        msWorkspace.setMonitor(
                            Main.layoutManager.primaryMonitor
                        );
                        /* this.setMsWorkspaceAt(
                        msWorkspace,
                        this.primaryMsWorkspaces.length - 2
                    ); */
                        //this.restoringState = false;
                    }
                }
            });
        this._updatingMonitors = false;
        Me.logFocus('[DEBUG]', `stateChanged from onMonitorsChanged`);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    get primaryMsWorkspaces() {
        if (!this.msWorkspaceList) return [];
        return this.msWorkspaceList.filter((msWorkspace) => {
            return !msWorkspace.monitorIsExternal;
        });
    }

    setupNewWorkspace(workspace, initialState) {
        Me.logFocus('[DEBUG]', `Setup a new Workspace`);
        this.createNewMsWorkspace(
            Main.layoutManager.primaryMonitor,
            initialState
        );
        this.observe(workspace, 'window-added', (workspace, window) => {
            this.metaWindowEnteredWorkspace(window, workspace);
        });
    }

    createNewMsWorkspace(monitor, initialState) {
        Me.logFocus(
            '[DEBUG]',
            `Create new MS Workspace: Restoring previous state? ${
                initialState != null
                    ? `YES. Restoring ${initialState.msWindowList.length} windows`
                    : 'NO'
            }`
        );
        let msWorkspace = new MsWorkspace(this, monitor, initialState);
        msWorkspace.connect('tileableList-changed', (_) => {
            Me.logFocus('[DEBUG]', `stateChanged from tileableList-changed`);
            this.stateChanged();
        });
        msWorkspace.connect('tiling-layout-changed', (_) => {
            this.saveCurrentState();
        });
        msWorkspace.connect('readyToBeClosed', () => {
            let index = this.primaryMsWorkspaces.indexOf(msWorkspace);
            if (
                this.getActivePrimaryMsWorkspace() === msWorkspace &&
                !msWorkspace.msWindowList.length
            ) {
                //Try to switch to the prev workspace is there is no next one before kill it
                if (this.primaryMsWorkspaces[index - 1]) {
                    this.primaryMsWorkspaces[index - 1].activate();
                }
                //Try to switch to the next workspace before kill it
                else if (this.primaryMsWorkspaces[index + 1]) {
                    this.primaryMsWorkspaces[index + 1].activate();
                }
            }
        });
        this.msWorkspaceList.push(msWorkspace);
        Me.logFocus('[DEBUG]', `stateChanged from createNewMsWorkspace`);
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
            Me.logFocus(
                '[DEBUG]',
                `stateChanged from removeMsWorkspaceAtIndex`
            );
            this.stateChanged();
            this.emit('dynamic-super-workspaces-changed');
        }
    }

    closeMsWorkspace(msWorkspace) {}

    stateChanged() {
        if (
            this.restoringState ||
            this.updatingMonitors ||
            this.stateChangedTriggered ||
            Me.disableInProgress
        )
            return;

        Me.logFocus('[DEBUG]', `Inside stateChanged`);
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
        Me.logFocus('[DEBUG]', `stateChanged from setMsWorkspaceAt`);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    saveCurrentState() {
        // Avoid unnecessary work
        if (!this.isPersistenceEnabled || !Me.loaded || Me.disableInProgress)
            return;

        const workspacesState = {
            msWorkspaceList: [],
            primaryWorkspaceActiveIndex: this.workspaceManager.get_active_workspace_index(),
        };
        workspacesState.msWorkspaceList = this.msWorkspaceList
            .filter((msWorkspace) => {
                return msWorkspace.msWindowList.length;
            })
            .map((msWorkspace) => {
                return msWorkspace.getState();
            });
        this.currentState = workspacesState;
        Me.logFocus(
            '[DEBUG]',
            `saveCurrentState (${workspacesState.msWorkspaceList.length} different workspaces)`
        );
        Me.stateManager.setState('workspaces-state', workspacesState);
    }

    refreshMsWorkspaceUI() {
        this.msWorkspaceList.forEach((msWorkspace) => {
            msWorkspace.msWorkspaceActor.updateUI();
        });
    }

    getActiveMsWorkspace() {
        const currentMonitorIndex = global.display.get_current_monitor();
        let activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();

        const msWorkspace =
            currentMonitorIndex === Main.layoutManager.primaryIndex
                ? this.primaryMsWorkspaces[activeWorkspaceIndex]
                : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                      currentMonitorIndex
                  )[0];
        return msWorkspace;
    }

    getActivePrimaryMsWorkspace() {
        let activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        return this.primaryMsWorkspaces[activeWorkspaceIndex];
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
        Me.logFocus(
            '[DEBUG]',
            `stateChanged from addWindowToAppropriateMsWorkspace`
        );
        this.stateChanged();
    }

    metaWindowEnteredWorkspace(metaWindow, workspace) {
        if (this.updatingMonitors || !metaWindow.get_compositor_private())
            return;

        let msWindow = metaWindow.msWindow;
        if (!msWindow) return;

        const msWorkspace = this.primaryMsWorkspaces[workspace.index()];
        if (
            metaWindow.on_all_workspaces ||
            msWindow.msWorkspace === msWorkspace
        ) {
            return;
        }

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
        if (this.updatingMonitors) return;

        //Ignore unHandle metaWindow and metaWindow on secondary screens
        if (
            !metaWindow.handledByMaterialShell ||
            global.display.get_n_monitors() !== this.numOfMonitors ||
            metaWindow.get_monitor() === monitorIndex ||
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

        newMsWorkspace.addMsWindow(msWindow, true);
        Me.logFocus('[DEBUG]', `stateChanged from setWindowToMsWorkspace`);
        this.stateChanged();
    }

    shouldCycleWorkspacesNavigation() {
        return getSettings('tweaks').get_boolean('cycle-through-workspaces');
    }

    _handleWindow(metaWindow) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(metaWindow.window_type);
    }
};

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
import * as Meta from 'meta';
import * as Shell from 'shell';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import {
    MsWorkspace,
    MsWorkspaceState,
} from 'src/layout/msWorkspace/msWorkspace';
import { MsManager } from 'src/manager/msManager';
import { assert, assertNotNull } from 'src/utils/assert';
import { isNonNull } from 'src/utils/predicates';
import { getSettings } from 'src/utils/settings';
import { MetaWindowWithMsProperties } from './msWindowManager';
import { main as Main, windowManager, layout } from 'ui';
import Monitor = layout.Monitor;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const WorkspaceTracker = windowManager.WorkspaceTracker;

interface MsWorkspaceManagerState {
    msWorkspaceList: MsWorkspaceState[];
    primaryWorkspaceActiveIndex: number;
}

export class MsWorkspaceManager extends MsManager {
    workspaceManager: Meta.WorkspaceManager;
    private _state: MsWorkspaceManagerState;
    windowTracker: any;
    msWorkspaceList: MsWorkspace[];
    settings: Gio.Settings;
    metaWindowFocused: Meta.Window | null;
    numOfMonitors: number;
    primaryIndex: number;
    workspaceTracker: windowManager.WorkspaceTracker;
    private _updatingMonitors: boolean | undefined;
    restoringState: any;
    stateChangedTriggered: any;

    constructor(state = {}) {
        super();
        this.workspaceManager = global.workspace_manager;
        this._state = Object.assign(
            {
                msWorkspaceList: [],
                primaryWorkspaceActiveIndex:
                    this.workspaceManager.get_active_workspace_index(),
            },
            state
        );
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWorkspaceList = [];
        this.settings = getSettings('tweaks');
        this.metaWindowFocused = null;
        this.numOfMonitors = global.display.get_n_monitors();
        this.primaryIndex = global.display.get_primary_monitor();
        this.workspaceTracker = Main.wm._workspaceTracker;
        (WorkspaceTracker.prototype as any)._oldCheckWorkspaces =
            WorkspaceTracker.prototype._checkWorkspaces;
        WorkspaceTracker.prototype._checkWorkspaces = function () {
            const workspaceManager = global.workspace_manager;
            let i;
            const emptyWorkspaces: boolean[] = [];
            if (!Meta.prefs_get_dynamic_workspaces()) {
                this._checkWorkspacesId = 0;
                const msWorkspaceManager = global.ms.msWorkspaceManager;

                while (
                    workspaceManager.get_n_workspaces() <
                    msWorkspaceManager.primaryMsWorkspaces.length
                ) {
                    const workspaceIndex =
                        msWorkspaceManager.msWorkspaceList.indexOf(
                            msWorkspaceManager.primaryMsWorkspaces[
                                msWorkspaceManager.primaryMsWorkspaces.length -
                                    1
                            ]
                        );

                    msWorkspaceManager.removeMsWorkspaceAtIndex(workspaceIndex);
                }

                return false;
            }

            // Update workspaces only if Dynamic Workspace Management has not been paused by some other function
            if (this._pauseWorkspaceCheck) return true;

            for (i = 0; i < this._workspaces.length; i++) {
                const lastRemoved = this._workspaces[i]._lastRemovedWindow;
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

            const sequences =
                Shell.WindowTracker.get_default().get_startup_sequences();
            for (i = 0; i < sequences.length; i++) {
                const index = sequences[i].get_workspace();
                if (index >= 0 && index <= workspaceManager.n_workspaces)
                    emptyWorkspaces[index] = false;
            }

            const msWindowList = global.ms.msWindowManager.msWindowList;
            for (i = 0; i < msWindowList.length; i++) {
                const msWindow = msWindowList[i];

                if (
                    msWindow.msWorkspace.monitor !=
                    Main.layoutManager.primaryMonitor
                )
                    continue;
                const workspace =
                    global.ms.msWorkspaceManager.getWorkspaceOfMsWorkspace(
                        msWindow.msWorkspace
                    );
                assert(workspace !== null, 'Workspace does not exist');
                emptyWorkspaces[workspace.index()] = false;
            }

            // If we don't have an empty workspace at the end, add one
            if (!emptyWorkspaces[emptyWorkspaces.length - 1]) {
                workspaceManager.append_new_workspace(
                    false,
                    global.get_current_time()
                );
                emptyWorkspaces.push(true);
            }

            const lastIndex = emptyWorkspaces.length - 1;
            const lastEmptyIndex = emptyWorkspaces.lastIndexOf(false) + 1;
            const activeWorkspaceIndex =
                workspaceManager.get_active_workspace_index();
            emptyWorkspaces[activeWorkspaceIndex] = false;

            // Delete empty workspaces except for the last one; do it from the end
            // to avoid index changes
            for (i = lastIndex; i >= 0; i--) {
                if (emptyWorkspaces[i] && i != lastEmptyIndex) {
                    workspaceManager.remove_workspace(
                        this._workspaces[i],
                        global.get_current_time()
                    );
                }
            }

            this._checkWorkspacesId = 0;
            return false;
        };

        // If a _queueCheckWorkspaces is already pending it's will would use the previous _checkWorkspaces method we need to kill it and add a new one
        if (this.workspaceTracker._checkWorkspacesId !== 0) {
            Meta.later_remove(this.workspaceTracker._checkWorkspacesId);
            this.workspaceTracker._queueCheckWorkspaces();
        }

        this.observe(Main.layoutManager, 'monitors-changed', () => {
            this.onMonitorsChanged();
        });

        this.observe(
            Me.msWindowManager.msFocusManager,
            'focus-changed',
            (_, msWindow) => {
                if (msWindow && msWindow.msWorkspace) {
                    msWindow.msWorkspace.focusTileable(msWindow);
                }
            }
        );

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
                const workspace =
                    this.workspaceManager.get_workspace_by_index(
                        workspaceIndex
                    );
                assert(workspace !== null, 'Workspace does not exist');
                this.setupNewWorkspace(workspace);
            }
        );

        this.observe(
            this.workspaceManager,
            'workspace-removed',
            (_, workspaceIndex) => {
                this.removeMsWorkspaceAtIndex(workspaceIndex);
            }
        );

        this.observe(
            global.window_manager,
            'switch-workspace',
            (_, from: number, to: number) => {
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
            (WorkspaceTracker.prototype as any)._oldCheckWorkspaces;
        delete (WorkspaceTracker.prototype as any)._oldCheckWorkspaces;
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            // _keepAliveId is an internal field in gnome-shell
            const workspace = this.workspaceManager.get_workspace_by_index(
                i
            ) as Meta.Workspace & { _keepAliveId?: number };
            delete workspace._keepAliveId;
        }
        for (const msWorkspace of this.msWorkspaceList) {
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

    initState() {
        Main.layoutManager.monitors
            .filter((monitor) => monitor != Main.layoutManager.primaryMonitor)
            .forEach((monitor) => {
                this.createNewMsWorkspace(monitor);
            });
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            if (!this.primaryMsWorkspaces[i]) {
                const workspace =
                    this.workspaceManager.get_workspace_by_index(i);
                assert(workspace !== null, 'Workspace does not exist');
                this.setupNewWorkspace(workspace);
            }
        }
    }

    restorePreviousState(): void {
        this.restoringState = true;
        this.removeEmptyWorkspaces();

        const msWorkspaceListToRestore = [...this._state.msWorkspaceList];

        // First restore the external monitors
        Main.layoutManager.monitors
            .filter((monitor) => monitor != Main.layoutManager.primaryMonitor)
            .forEach((monitor) => {
                const firstExternalStateIndex =
                    msWorkspaceListToRestore.findIndex(
                        (msWorkspaceState) => msWorkspaceState.external
                    );
                this.createNewMsWorkspace(
                    monitor,
                    firstExternalStateIndex > -1
                        ? msWorkspaceListToRestore.splice(
                              firstExternalStateIndex,
                              1
                          )[0]
                        : undefined
                );
            });

        // Then restore all the others msWorkspaces
        if (msWorkspaceListToRestore.length) {
            msWorkspaceListToRestore.forEach((msWorkspaceState, index) => {
                const workspace =
                    this.workspaceManager.get_workspace_by_index(index) ||
                    this.workspaceManager.append_new_workspace(
                        false,
                        global.get_current_time()
                    );
                this.setupNewWorkspace(workspace, msWorkspaceState);
            });
        }

        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            if (!this.primaryMsWorkspaces[i]) {
                const workspace =
                    this.workspaceManager.get_workspace_by_index(i);
                assert(workspace !== null, 'Workspace does not exist');
                this.setupNewWorkspace(workspace);
            }
        }

        // Add empty workspace at the end
        if (Meta.prefs_get_dynamic_workspaces()) {
            const workspace = this.workspaceManager.append_new_workspace(
                false,
                global.get_current_time()
            );
            this.setupNewWorkspace(workspace);
        }

        // Activate the saved workspace, if valid
        if (this._state && this._state.primaryWorkspaceActiveIndex) {
            const savedIndex = this._state.primaryWorkspaceActiveIndex;
            if (
                savedIndex &&
                savedIndex >= 0 &&
                savedIndex < this.workspaceManager.n_workspaces
            ) {
                // TODO: Use this for validation instead of the above indices
                const workspace =
                    this.workspaceManager.get_workspace_by_index(savedIndex);
                assert(workspace !== null, 'Workspace does not exist');
                workspace.activate(global.get_current_time());
            }
        }
        delete this.restoringState;
    }

    removeEmptyWorkspaces(): void {
        const emptyWorkspacesSlots: boolean[] = [];
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            emptyWorkspacesSlots[i] = true;
        }
        const windows = global.get_window_actors();

        for (let i = 0; i < windows.length; i++) {
            const actor = windows[i];
            const win = actor.get_meta_window();

            if (win.is_on_all_workspaces()) continue;

            const workspaceIndex = win.get_workspace().index();
            emptyWorkspacesSlots[workspaceIndex] = false;
        }

        const emptyWorkspaces = emptyWorkspacesSlots
            .map((empty, index) => {
                return empty
                    ? this.workspaceManager.get_workspace_by_index(index)
                    : null;
            })
            .filter(isNonNull);

        emptyWorkspaces.forEach((workspace) => {
            this.workspaceManager.remove_workspace(
                workspace,
                global.get_current_time()
            );
        });
    }

    onMonitorsChanged(): void {
        this._updatingMonitors = true;
        this.numOfMonitors = global.display.get_n_monitors();
        this.primaryIndex = global.display.get_primary_monitor();
        // First manage external screen
        const externalMonitors: Monitor[] = Main.layoutManager.monitors.filter(
            (monitor: Monitor) => monitor != Main.layoutManager.primaryMonitor
        );

        externalMonitors.forEach((externalMonitor) => {
            // try to find an unused external msWorkspace for this external Monitor
            const msWorkspace = this.msWorkspaceList.find((msWorkspace) => {
                return (
                    msWorkspace.state.external &&
                    !Main.layoutManager.monitors.includes(msWorkspace.monitor)
                );
            });

            // if there is not external msWorkspace available create one
            if (msWorkspace) {
                const workspace = assertNotNull(this.getWorkspaceOfMsWorkspace(msWorkspace));
                msWorkspace.setMonitor(externalMonitor);
                if (!Meta.prefs_get_dynamic_workspaces()) {
                    this.workspaceManager.remove_workspace(
                        workspace,
                        global.get_current_time()
                    );
                }
            } else {
                this.createNewMsWorkspace(externalMonitor);
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
                    msWorkspace.setMonitor(assertNotNull(Main.layoutManager.primaryMonitor));
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
                        (monitor: any) => {
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
                        if (Meta.prefs_get_dynamic_workspaces()) {
                            this.msWorkspaceList.splice(
                                this.msWorkspaceList.indexOf(
                                    this.primaryMsWorkspaces[
                                        this.primaryMsWorkspaces.length - 1
                                    ]
                                ),
                                1,
                                msWorkspace
                            );
                        } else {
                            this.restoringState = true;
                            this.workspaceManager.append_new_workspace(
                                false,
                                global.get_current_time()
                            );
                            this.msWorkspaceList.push(msWorkspace);
                            this.restoringState = false;
                        }
                        msWorkspace.setMonitor(
                            assertNotNull(Main.layoutManager.primaryMonitor)
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
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    get primaryMsWorkspaces(): MsWorkspace[] {
        if (!this.msWorkspaceList) return [];
        return this.msWorkspaceList.filter((msWorkspace) => {
            return !msWorkspace.monitorIsExternal;
        });
    }

    setupNewWorkspace(
        workspace: Meta.Workspace,
        initialState?: Partial<MsWorkspaceState>
    ) {
        this.createNewMsWorkspace(
            assertNotNull(Main.layoutManager.primaryMonitor),
            initialState
        );
        this.observe(workspace, 'window-added', (workspace, window) => {
            this.metaWindowEnteredWorkspace(window, workspace);
        });
    }

    createNewMsWorkspace(
        monitor: Monitor,
        initialState?: Partial<MsWorkspaceState>
    ) {
        const msWorkspace = new MsWorkspace(this, monitor, initialState);
        msWorkspace.connect('tileableList-changed', (_) => {
            this.stateChanged();
        });
        msWorkspace.connect('tiling-layout-changed', (_) => {
            Me.stateManager.stateChanged();
        });
        msWorkspace.connect('readyToBeClosed', () => {
            const index = this.primaryMsWorkspaces.indexOf(msWorkspace);
            if (
                this.getActivePrimaryMsWorkspace() === msWorkspace &&
                !msWorkspace.msWindowList.length
            ) {
                // Try to switch to the prev workspace is there is no next one before kill it
                if (this.primaryMsWorkspaces[index - 1]) {
                    this.primaryMsWorkspaces[index - 1].activate();
                } else if (this.primaryMsWorkspaces[index + 1]) {
                    // Try to switch to the next workspace before kill it
                    this.primaryMsWorkspaces[index + 1].activate();
                }
            }
        });
        this.msWorkspaceList.push(msWorkspace);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    removeMsWorkspaceAtIndex(index: number) {
        const msWorkspaceToDelete = this.primaryMsWorkspaces[index];
        if (msWorkspaceToDelete) {
            const globalIndex =
                this.msWorkspaceList.indexOf(msWorkspaceToDelete);
            this.msWorkspaceList.splice(globalIndex, 1);
            msWorkspaceToDelete.destroy();
            this.stateChanged();
            this.emit('dynamic-super-workspaces-changed');
        }
    }

    stateChanged() {
        if (
            this.restoringState ||
            this.updatingMonitors ||
            this.stateChangedTriggered
        )
            return;
        this.stateChangedTriggered = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.workspaceTracker._checkWorkspaces();
            Me.stateManager.stateChanged();
            this.stateChangedTriggered = false;
            return GLib.SOURCE_REMOVE;
        });
    }
    setMsWorkspaceAt(msWorkspaceToMove: MsWorkspace, toIndex: number) {
        const sourceIndex = this.msWorkspaceList.indexOf(msWorkspaceToMove);
        const realIndex = this.msWorkspaceList.indexOf(
            this.primaryMsWorkspaces[toIndex]
        );
        const workspace = this.workspaceManager.get_workspace_by_index(
            this.primaryMsWorkspaces.indexOf(msWorkspaceToMove)
        );
        assert(workspace !== null, 'Workspace does not exist');
        this.workspaceManager.reorder_workspace(workspace, toIndex);
        this.msWorkspaceList.splice(sourceIndex, 1);
        this.msWorkspaceList.splice(realIndex, 0, msWorkspaceToMove);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }

    get state(): MsWorkspaceManagerState {
        let msWorkspaceList = this.msWorkspaceList;

        if (Meta.prefs_get_dynamic_workspaces()) {
            msWorkspaceList = msWorkspaceList.filter((msWorkspace) => {
                return msWorkspace.msWindowList.length;
            });
        }

        this._state.msWorkspaceList = msWorkspaceList.map((msWorkspace) => {
            return msWorkspace.state;
        });

        this._state.primaryWorkspaceActiveIndex =
            this.workspaceManager.get_active_workspace_index();

        return this._state;
    }

    refreshMsWorkspaceUI() {
        this.msWorkspaceList.forEach((msWorkspace) => {
            msWorkspace.msWorkspaceActor.updateUI();
        });
    }

    getActiveMsWorkspace(): MsWorkspace {
        const currentMonitorIndex = global.display.get_current_monitor();
        const activeWorkspaceIndex =
            this.workspaceManager.get_active_workspace_index();

        const msWorkspace =
            currentMonitorIndex === Main.layoutManager.primaryIndex
                ? this.primaryMsWorkspaces[activeWorkspaceIndex]
                : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                      currentMonitorIndex
                  )[0];
        return msWorkspace;
    }

    getActivePrimaryMsWorkspace(): MsWorkspace {
        const activeWorkspaceIndex =
            this.workspaceManager.get_active_workspace_index();
        return this.primaryMsWorkspaces[activeWorkspaceIndex];
    }

    getWorkspaceOfMsWorkspace(msWorkspace: MsWorkspace): Meta.Workspace | null {
        return this.workspaceManager.get_workspace_by_index(
            this.primaryMsWorkspaces.indexOf(msWorkspace)
        );
    }

    getActiveMsWorkspaceOfMonitor(monitorIndex: number): MsWorkspace {
        if (monitorIndex === Main.layoutManager.primaryIndex) {
            return this.getActivePrimaryMsWorkspace();
        } else {
            return this.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];
        }
    }

    getMsWorkspacesOfMonitorIndex(monitorIndex: number): MsWorkspace[] {
        return this.msWorkspaceList.filter((msWorkspace) => {
            return msWorkspace.monitor.index === monitorIndex;
        });
    }

    getMsWorkspaceOfMetaWindow(metaWindow: Meta.Window): MsWorkspace {
        const windowMonitorIndex = metaWindow.get_monitor();
        if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
            return this.getMsWorkspacesOfMonitorIndex(windowMonitorIndex)[0];
        } else {
            return this.primaryMsWorkspaces[metaWindow.get_workspace().index()];
        }
    }

    getMsWorkspaceOfMsWindow(msWindow: MsWindow): MsWorkspace | undefined {
        return this.msWorkspaceList.find((msWorkspace) => {
            return msWorkspace.msWindowList.includes(msWindow);
        });
    }

    determineAppropriateMsWorkspace(metaWindow: Meta.Window) {
        const windowMonitorIndex = metaWindow.get_monitor();
        const currentWindowWorkspace = metaWindow.get_workspace();
        if (windowMonitorIndex !== Main.layoutManager.primaryIndex) {
            return this.getMsWorkspacesOfMonitorIndex(windowMonitorIndex)[0];
        } else {
            return this.primaryMsWorkspaces[currentWindowWorkspace.index()];
        }
    }

    metaWindowEnteredWorkspace(
        metaWindow: MetaWindowWithMsProperties,
        workspace: Meta.Workspace
    ) {
        if (
            this.updatingMonitors ||
            !metaWindow.get_compositor_private<Meta.WindowActor>()
        )
            return;

        const msWindow = metaWindow.msWindow;
        if (!msWindow) return;

        const msWorkspace = this.primaryMsWorkspaces[workspace.index()];
        if (
            metaWindow.on_all_workspaces ||
            msWindow.msWorkspace === msWorkspace
        ) {
            return;
        }

        assert(
            metaWindow.createdAt !== undefined,
            "Can't tell when this window was created"
        );

        /**
         * Discard all the workspace changed of a window during the 2 seconds after creation to prevent the window changing it's workspace for the current one.
         */
        if (
            msWindow.msWorkspace &&
            msWindow.msWorkspace.workspace &&
            msWindow.msWorkspace != msWorkspace &&
            global.display.get_current_time_roundtrip() - metaWindow.createdAt <
                2000
        ) {
            return metaWindow.change_workspace(msWindow.msWorkspace.workspace);
        }
        this.setWindowToMsWorkspace(msWindow, msWorkspace);
    }

    windowEnteredMonitor(
        metaWindow: MetaWindowWithMsProperties,
        monitorIndex: number
    ) {
        if (this.updatingMonitors) return;

        const currentMsWorkspaceOfMetaWindow = metaWindow.msWindow
            ? metaWindow.msWindow.msWorkspace
            : null;
        //Ignore unHandle metaWindow and metaWindow on secondary screens
        const msWorkspace = this.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];
        if (
            !metaWindow.handledByMaterialShell ||
            global.display.get_n_monitors() !== this.numOfMonitors ||
            currentMsWorkspaceOfMetaWindow === msWorkspace ||
            monitorIndex === Main.layoutManager.primaryIndex
        ) {
            return;
        }

        if (!msWorkspace || !metaWindow.msWindow) {
            return;
        }
        this.setWindowToMsWorkspace(metaWindow.msWindow, msWorkspace);
    }

    setWindowToMsWorkspace(
        msWindow: MsWindow,
        newMsWorkspace: MsWorkspace,
        insert = false
    ) {
        const oldMsWorkspace = msWindow.msWorkspace;

        if (oldMsWorkspace) {
            if (oldMsWorkspace === newMsWorkspace) {
                return;
            } else {
                oldMsWorkspace.removeMsWindow(msWindow);
            }
        }

        newMsWorkspace.addMsWindow(msWindow, true, insert);
        this.stateChanged();
    }

    shouldCycleWorkspacesNavigation() {
        return getSettings('tweaks').get_boolean('cycle-through-workspaces');
    }

    _handleWindow(metaWindow: Meta.Window) {
        const meta = Meta.WindowType;
        const types = [
            meta.NORMAL,
            meta.DIALOG,
            meta.MODAL_DIALOG,
            meta.UTILITY,
        ];
        return types.includes(metaWindow.window_type);
    }

    activateNextMsWorkspace() {
        const currentIndex = this.workspaceManager.get_active_workspace_index();
        if (currentIndex < this.workspaceManager.n_workspaces - 1) {
            this.primaryMsWorkspaces[currentIndex + 1].activate();
            return;
        }

        if (this.shouldCycleWorkspacesNavigation()) {
            this.primaryMsWorkspaces[0].activate();
        }
    }

    activatePreviousMsWorkspace() {
        const currentIndex = this.workspaceManager.get_active_workspace_index();
        if (currentIndex > 0) {
            this.primaryMsWorkspaces[currentIndex - 1].activate();
            return;
        }

        if (this.shouldCycleWorkspacesNavigation()) {
            this.primaryMsWorkspaces[
                this.workspaceManager.n_workspaces - 1
            ].activate();
        }
    }

    focusMsWorkspace(msWorkspace: MsWorkspace) {
        if (!msWorkspace) return;
        const backend = Clutter.get_default_backend();
        const seat = backend.get_default_seat();
        const [containerX, containerY] =
            msWorkspace.msWorkspaceActor.tileableContainer.get_transformed_position() as [number, number];
        seat.warp_pointer(
            containerX +
                Math.floor(
                    msWorkspace.msWorkspaceActor.tileableContainer.width / 2
                ),
            containerY +
                Math.floor(
                    msWorkspace.msWorkspaceActor.tileableContainer.height / 2
                )
        );

        msWorkspace.refreshFocus();
    }
}

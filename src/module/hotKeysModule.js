const { Meta, Shell, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.src.utils.settings;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;

var KeyBindingAction = {
    PREVIOUS_WINDOW: 'previous-window',
    NEXT_WINDOW: 'next-window',
    PREVIOUS_WORKSPACE: 'previous-workspace',
    NEXT_WORKSPACE: 'next-workspace',
    KILL_FOCUSED_WINDOW: 'kill-focused-window',
    MOVE_WINDOW_LEFT: 'move-window-left',
    MOVE_WINDOW_RIGHT: 'move-window-right',
    MOVE_WINDOW_TOP: 'move-window-top',
    MOVE_WINDOW_BOTTOM: 'move-window-bottom',
    CYCLE_TILING_LAYOUT: 'cycle-tiling-layout',
    REVERSE_CYCLE_TILING_LAYOUT: 'reverse-cycle-tiling-layout',
    TOGGLE_MATERIAL_SHELL_UI: 'toggle-material-shell-ui',
};

/* exported HotKeysModule */
var HotKeysModule = class HotKeysModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.settings = getSettings('bindings');
        this.actionIdToNameMap = new Map();
        this.actionNameToActionMap = new Map();

        this.actionNameToActionMap.set(KeyBindingAction.PREVIOUS_WINDOW, () => {
            const currentMonitorIndex = global.display.get_current_monitor();
            const msWorkspace =
                currentMonitorIndex === Main.layoutManager.primaryIndex
                    ? Me.msWorkspaceManager.getActiveMsWorkspace()
                    : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                          currentMonitorIndex
                      )[0];
            msWorkspace.focusPreviousTileable();
        });

        this.actionNameToActionMap.set(KeyBindingAction.NEXT_WINDOW, () => {
            const currentMonitorIndex = global.display.get_current_monitor();
            const msWorkspace =
                currentMonitorIndex === Main.layoutManager.primaryIndex
                    ? Me.msWorkspaceManager.getActiveMsWorkspace()
                    : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                          currentMonitorIndex
                      )[0];
            msWorkspace.focusNextTileable();
        });

        this.actionNameToActionMap.set(
            KeyBindingAction.PREVIOUS_WORKSPACE,
            () => {
                let currentIndex = this.workspaceManager.get_active_workspace_index();
                if (currentIndex > 0) {
                    Me.msWorkspaceManager.primaryMsWorkspaces[
                        currentIndex - 1
                    ].activate();
                }
            }
        );

        this.actionNameToActionMap.set(KeyBindingAction.NEXT_WORKSPACE, () => {
            let currentIndex = this.workspaceManager.get_active_workspace_index();
            if (currentIndex < this.workspaceManager.n_workspaces - 1) {
                Me.msWorkspaceManager.primaryMsWorkspaces[
                    currentIndex + 1
                ].activate();
            }
        });

        this.actionNameToActionMap.set(
            KeyBindingAction.KILL_FOCUSED_WINDOW,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];

                if (msWorkspace.tileableFocused instanceof MsWindow) {
                    msWorkspace.tileableFocused.kill();
                }
            }
        );

        this.actionNameToActionMap.set(
            KeyBindingAction.MOVE_WINDOW_LEFT,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                msWorkspace.swapTileableLeft(msWorkspace.tileableFocused);
            }
        );

        this.actionNameToActionMap.set(
            KeyBindingAction.MOVE_WINDOW_RIGHT,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];

                msWorkspace.swapTileableRight(msWorkspace.tileableFocused);
            }
        );

        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_TOP, () => {
            const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
            if (
                activeMsWorkspace ===
                    Me.msWorkspaceManager.primaryMsWorkspaces[0] ||
                activeMsWorkspace.tileableFocused ===
                    activeMsWorkspace.appLauncher
            ) {
                return;
            }
            const currentMsWorkspaceIndex = Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                activeMsWorkspace
            );

            const nextMsWorkspace =
                Me.msWorkspaceManager.primaryMsWorkspaces[
                    currentMsWorkspaceIndex - 1
                ];

            Me.msWorkspaceManager.setWindowToMsWorkspace(
                activeMsWorkspace.tileableFocused,
                nextMsWorkspace
            );
            nextMsWorkspace.activate();
        });

        this.actionNameToActionMap.set(
            KeyBindingAction.MOVE_WINDOW_BOTTOM,
            () => {
                const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                if (
                    (activeMsWorkspace ===
                        Me.msWorkspaceManager.primaryMsWorkspaces[
                            Me.msWorkspaceManager.primaryMsWorkspaces.length - 2
                        ] &&
                        activeMsWorkspace.msWindowList.length === 1) ||
                    activeMsWorkspace.tileableFocused ===
                        activeMsWorkspace.appLauncher
                ) {
                    return;
                }
                const currentMsWorkspaceIndex = Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                    activeMsWorkspace
                );

                const nextMsWorkspace =
                    Me.msWorkspaceManager.primaryMsWorkspaces[
                        currentMsWorkspaceIndex + 1
                    ];
                Me.msWorkspaceManager.setWindowToMsWorkspace(
                    activeMsWorkspace.tileableFocused,
                    nextMsWorkspace
                );
                nextMsWorkspace.activate();
            }
        );

        this.actionNameToActionMap.set(
            KeyBindingAction.CYCLE_TILING_LAYOUT,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                msWorkspace.nextTiling(1);
            }
        );
        this.actionNameToActionMap.set(
            KeyBindingAction.REVERSE_CYCLE_TILING_LAYOUT,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                msWorkspace.nextTiling(-1);
            }
        );

        this.actionNameToActionMap.set(
            KeyBindingAction.TOGGLE_MATERIAL_SHELL_UI,
            () => {
                Me.layout.togglePanelsVisibilities();
                logFocus('');
                logFocus('');
                logFocus('');
                logFocus('');
                logFocus('');
            }
        );

        this.actionNameToActionMap.forEach((action, name) => {
            this.addKeybinding(name);
        });
    }

    addKeybinding(name) {
        const actionId = Main.wm.addKeybinding(
            name,
            this.settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            this.actionNameToActionMap.get(name)
        );
        this.actionIdToNameMap.set(actionId, name);
    }

    destroy() {}
};

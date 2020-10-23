/** Gnome libs imports */
const { Meta, Shell } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.src.utils.settings;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;

/* exported HotKeysModule, KeyBindingAction */

var KeyBindingAction = {
    // window actions
    PREVIOUS_WINDOW: 'previous-window',
    NEXT_WINDOW: 'next-window',
    APP_LAUNCHER: 'app-launcher',
    KILL_FOCUSED_WINDOW: 'kill-focused-window',
    MOVE_WINDOW_LEFT: 'move-window-left',
    MOVE_WINDOW_RIGHT: 'move-window-right',
    MOVE_WINDOW_TOP: 'move-window-top',
    MOVE_WINDOW_BOTTOM: 'move-window-bottom',
    // layout actions
    CYCLE_TILING_LAYOUT: 'cycle-tiling-layout',
    REVERSE_CYCLE_TILING_LAYOUT: 'reverse-cycle-tiling-layout',
    TOGGLE_MATERIAL_SHELL_UI: 'toggle-material-shell-ui',
    // workspaces actions
    PREVIOUS_WORKSPACE: 'previous-workspace',
    NEXT_WORKSPACE: 'next-workspace',
    LAST_WORKSPACE: 'last-workspace',
};

var HotKeysModule = class HotKeysModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.settings = getSettings('bindings');
        this.actionIdToNameMap = new Map();
        this.actionNameToActionMap = new Map();

        this.resetStash();
        this.connectId = global.window_manager.connect(
            'switch-workspace',
            (_, from, to) => {
                if (this.lastStash !== null && from != this.lastStash) {
                    this.resetStash();
                }
            }
        );

        this.actionNameToActionMap.set(KeyBindingAction.PREVIOUS_WINDOW, () => {
            const msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.focusPreviousTileable();
        });

        this.actionNameToActionMap.set(KeyBindingAction.NEXT_WINDOW, () => {
            const msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.focusNextTileable();
        });

        this.actionNameToActionMap.set(KeyBindingAction.APP_LAUNCHER, () => {
            const msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();

            msWorkspace.focusAppLauncher();
        });

        this.actionNameToActionMap.set(
            KeyBindingAction.PREVIOUS_WORKSPACE,
            () => {
                Me.msWorkspaceManager.activatePreviousMsWorkspace();
            }
        );

        this.actionNameToActionMap.set(KeyBindingAction.NEXT_WORKSPACE, () => {
            Me.msWorkspaceManager.activateNextMsWorkspace();
        });

        this.actionNameToActionMap.set(KeyBindingAction.LAST_WORKSPACE, () => {
            let currentIndex = this.workspaceManager.get_active_workspace_index();
            let lastIndex = this.workspaceManager.n_workspaces - 1;
            if (currentIndex < lastIndex) {
                Me.msWorkspaceManager.primaryMsWorkspaces[lastIndex].activate();
            }
        });

        this.actionNameToActionMap.set(
            KeyBindingAction.KILL_FOCUSED_WINDOW,
            () => {
                const msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();

                if (msWorkspace.tileableFocused instanceof MsWindow) {
                    msWorkspace.tileableFocused.kill();
                }
            }
        );

        this.actionNameToActionMap.set(
            KeyBindingAction.MOVE_WINDOW_LEFT,
            () => {
                const msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                msWorkspace.swapTileableLeft(msWorkspace.tileableFocused);
            }
        );

        this.actionNameToActionMap.set(
            KeyBindingAction.MOVE_WINDOW_RIGHT,
            () => {
                const msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();

                msWorkspace.swapTileableRight(msWorkspace.tileableFocused);
            }
        );

        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_TOP, () => {
            const activeMsWorkspace = Me.msWorkspaceManager.getActivePrimaryMsWorkspace();
            if (
                activeMsWorkspace.tileableFocused ===
                activeMsWorkspace.appLauncher
            ) {
                return;
            }
            if (
                activeMsWorkspace ===
                Me.msWorkspaceManager.primaryMsWorkspaces[0]
            ) {
                if (activeMsWorkspace.tileableList.length > 2) {
                    const nextMsWorkspace =
                        Me.msWorkspaceManager.msWorkspaceList[
                            Me.msWorkspaceManager.msWorkspaceList.length - 1
                        ];
                    Me.msWorkspaceManager.setWindowToMsWorkspace(
                        activeMsWorkspace.tileableFocused,
                        nextMsWorkspace
                    );

                    if (
                        !Me.msWorkspaceManager.shouldCycleWorkspacesNavigation()
                    ) {
                        Me.msWorkspaceManager.setMsWorkspaceAt(
                            nextMsWorkspace,
                            0
                        );
                    }

                    nextMsWorkspace.activate();
                }
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
                const activeMsWorkspace = Me.msWorkspaceManager.getActivePrimaryMsWorkspace();
                if (
                    activeMsWorkspace.tileableFocused ===
                    activeMsWorkspace.appLauncher
                ) {
                    return;
                }
                if (
                    activeMsWorkspace ===
                    Me.msWorkspaceManager.primaryMsWorkspaces[
                        Me.msWorkspaceManager.primaryMsWorkspaces.length - 2
                    ]
                ) {
                    if (activeMsWorkspace.msWindowList.length === 1) {
                        if (
                            Me.msWorkspaceManager.shouldCycleWorkspacesNavigation()
                        ) {
                            const nextMsWorkspace =
                                Me.msWorkspaceManager.msWorkspaceList[0];

                            Me.msWorkspaceManager.setWindowToMsWorkspace(
                                activeMsWorkspace.tileableFocused,
                                nextMsWorkspace
                            );

                            Me.msWorkspaceManager.setMsWorkspaceAt(
                                nextMsWorkspace,
                                0
                            );
                            nextMsWorkspace.activate();
                        }
                        return;
                    }
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
                const msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                msWorkspace.nextLayout(1);
            }
        );
        this.actionNameToActionMap.set(
            KeyBindingAction.REVERSE_CYCLE_TILING_LAYOUT,
            () => {
                const msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                msWorkspace.nextLayout(-1);
            }
        );

        this.actionNameToActionMap.set(
            KeyBindingAction.TOGGLE_MATERIAL_SHELL_UI,
            () => {
                Me.layout.togglePanelsVisibilities();
            }
        );

        [...Array(10).keys()].forEach((workspaceIndex) => {
            const actionKey = `NAVIGATE_TO_${workspaceIndex + 1}`;
            KeyBindingAction[actionKey] = `navigate-to-workspace-${
                workspaceIndex + 1
            }`;

            this.actionNameToActionMap.set(KeyBindingAction[actionKey], () => {
                const currentNumOfWorkspaces =
                    Me.msWorkspaceManager.msWorkspaceList.length - 1;
                const currentWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
                let nextWorkspaceIndex = workspaceIndex;

                if (
                    this.lastStash === null ||
                    nextWorkspaceIndex !== this.nextStash
                ) {
                    this.lastStash = currentWorkspaceIndex;
                    this.nextStash = nextWorkspaceIndex;
                } else {
                    if (nextWorkspaceIndex === this.nextStash) {
                        nextWorkspaceIndex = this.lastStash;
                    }
                    this.resetStash();
                }

                // go to new workspace if attempting to go to index bigger than currently available
                nextWorkspaceIndex =
                    nextWorkspaceIndex > currentNumOfWorkspaces
                        ? currentNumOfWorkspaces
                        : nextWorkspaceIndex;

                Me.msWorkspaceManager.primaryMsWorkspaces[
                    nextWorkspaceIndex
                ].activate();
            });
        });

        this.actionNameToActionMap.forEach((action, name) => {
            this.addKeybinding(name);
        });
    }

    resetStash() {
        this.lastStash = null;
        this.nextStash = null;
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

    destroy() {
        this.actionIdToNameMap.forEach((key) => {
            Main.wm.removeKeybinding(key);
            this.actionIdToNameMap.delete(key);
        });
        if (this.connectId) {
            global.window_manager.disconnect(this.connectId);
        }
    }
};

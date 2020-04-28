const { Meta, Shell } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.src.utils.settings;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;

/* exported HotKeysModule */
var HotKeysModule = class HotKeysModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;

        const settings = getSettings('bindings');

        Main.wm.addKeybinding(
            'previous-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                msWorkspace.focusPreviousTileable();
            }
        );

        Main.wm.addKeybinding(
            'next-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                msWorkspace.focusNextTileable();
            }
        );

        Main.wm.addKeybinding(
            'previous-workspace',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                let currentIndex = this.workspaceManager.get_active_workspace_index();
                if (currentIndex > 0) {
                    this.workspaceManager
                        .get_workspace_by_index(currentIndex - 1)
                        .activate(global.get_current_time());
                }
            }
        );

        Main.wm.addKeybinding(
            'next-workspace',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                let currentIndex = this.workspaceManager.get_active_workspace_index();
                if (currentIndex < this.workspaceManager.n_workspaces - 1) {
                    this.workspaceManager
                        .get_workspace_by_index(currentIndex + 1)
                        .activate(global.get_current_time());
                }
            }
        );

        Main.wm.addKeybinding(
            'kill-focused-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
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

        Main.wm.addKeybinding(
            'move-window-left',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];

                if (
                    msWorkspace.focusedIndex > 0 &&
                    msWorkspace.tileableFocused != msWorkspace.appLauncher
                ) {
                    let previousTileable =
                        msWorkspace.tileableList[msWorkspace.focusedIndex - 1];
                    msWorkspace.swapTileable(
                        msWorkspace.tileableFocused,
                        previousTileable
                    );
                    msWorkspace.focusPreviousTileable();
                }
            }
        );

        Main.wm.addKeybinding(
            'move-window-right',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];

                if (
                    msWorkspace.focusedIndex <
                    msWorkspace.tileableList.length - 1
                ) {
                    let nextTileable =
                        msWorkspace.tileableList[msWorkspace.focusedIndex + 1];
                    if (nextTileable === msWorkspace.appLauncher) {
                        return;
                    }
                    msWorkspace.swapTileable(
                        msWorkspace.tileableFocused,
                        nextTileable
                    );
                    msWorkspace.focusNextTileable();
                }
            }
        );

        Main.wm.addKeybinding(
            'move-window-top',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                if (
                    activeMsWorkspace ===
                        Me.msWorkspaceManager.primaryMsWorkspaces[0] ||
                    activeMsWorkspace.tileableFocused ===
                        activeMsWorkspace.appLauncher
                ) {
                    return;
                }
                const newMsWorkspaceIndex =
                    Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                        activeMsWorkspace
                    ) - 1;
                Me.msWorkspaceManager.setWindowToMsWorkspace(
                    activeMsWorkspace.tileableFocused,
                    Me.msWorkspaceManager.primaryMsWorkspaces[
                        newMsWorkspaceIndex
                    ]
                );
                global.workspace_manager
                    .get_workspace_by_index(newMsWorkspaceIndex)
                    .activate(global.get_current_time());
                /*                 let newWorkspace = global.workspace_manager.get_workspace_by_index(
                    global.display.focus_window.get_workspace().index() - 1
                );
                if (newWorkspace) {
                    global.display.focus_window.change_workspace(newWorkspace);
                    newWorkspace.activate(global.get_current_time());
                } */
            }
        );

        Main.wm.addKeybinding(
            'move-window-bottom',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
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
                const newMsWorkspaceIndex =
                    Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                        activeMsWorkspace
                    ) + 1;
                Me.msWorkspaceManager.setWindowToMsWorkspace(
                    activeMsWorkspace.tileableFocused,
                    Me.msWorkspaceManager.primaryMsWorkspaces[
                        newMsWorkspaceIndex
                    ]
                );
                global.workspace_manager
                    .get_workspace_by_index(newMsWorkspaceIndex)
                    .activate(global.get_current_time());
                /* let newWorkspace = global.workspace_manager.get_workspace_by_index(
                    global.display.focus_window.get_workspace().index() + 1
                );
                if (newWorkspace) {
                    global.display.focus_window.change_workspace(newWorkspace);
                    newWorkspace.activate();
                } */
            }
        );

        Main.wm.addKeybinding(
            'cycle-tiling-layout',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                Me.msWorkspaceManager.getActiveMsWorkspace().nextTiling(1);
            }
        );
        Main.wm.addKeybinding(
            'reverse-cycle-tiling-layout',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                Me.msWorkspaceManager.getActiveMsWorkspace().nextTiling(-1);
            }
        );

        Main.wm.addKeybinding(
            'toggle-material-shell-ui',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const noUImode = Me.msWorkspaceManager.noUImode;
                Me.msWorkspaceManager.noUImode = !noUImode;
                Me.layout.visible = noUImode;

                /* Main.panel.get_parent().visible = noUImode;
                Main.panel.visible = noUImode;
                Main.panel.get_parent().set_width(!noUImode ? 0 : -1);
                Main.layoutManager.panelBox.visible = noUImode;

                Main.layoutManager.panelBox.set_height(!noUImode ? 0 : -1);
                Main.layoutManager.monitors.forEach(monitor => {
                    let msWorkspace;
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                    } else {
                        msWorkspace = Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                            monitor.index
                        )[0];
                    }
                    Main.layoutManager._queueUpdateRegions();
                    msWorkspace.updateUI();
                    msWorkspace.panel.set_height(!noUImode ? 0 : -1);
                    msWorkspace.tilingLayout.onTile();
                }); */
            }
        );
    }

    destroy() {}
};

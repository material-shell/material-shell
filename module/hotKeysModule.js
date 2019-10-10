const { Meta, Shell } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;

/* exported HotKeysModule */
var HotKeysModule = class HotKeysModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
    }

    enable() {
        const settings = getSettings('bindings');

        Main.wm.addKeybinding(
            'previous-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const superWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? global.superWorkspaceManager.getActiveSuperWorkspace()
                        : global.superWorkspaceManager.getSuperWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                superWorkspace.focusPrevious();
            }
        );

        Main.wm.addKeybinding(
            'next-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const superWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? global.superWorkspaceManager.getActiveSuperWorkspace()
                        : global.superWorkspaceManager.getSuperWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                superWorkspace.focusNext();
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
                global.display
                    .get_focus_window()
                    .delete(global.get_current_time());
            }
        );

        Main.wm.addKeybinding(
            'move-window-left',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const superWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? global.superWorkspaceManager.getActiveSuperWorkspace()
                        : global.superWorkspaceManager.getSuperWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                let currentFocusIndex = superWorkspace.windows.indexOf(
                    superWorkspace.windowFocused
                );
                if (currentFocusIndex > 0) {
                    let previousMetaWindows =
                        superWorkspace.windows[currentFocusIndex - 1];
                    superWorkspace.swapWindows(
                        superWorkspace.windowFocused,
                        previousMetaWindows
                    );
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
                const superWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? global.superWorkspaceManager.getActiveSuperWorkspace()
                        : global.superWorkspaceManager.getSuperWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                let currentFocusIndex = superWorkspace.windows.indexOf(
                    superWorkspace.windowFocused
                );
                if (currentFocusIndex < superWorkspace.windows.length - 1) {
                    let nextMetaWindows =
                        superWorkspace.windows[currentFocusIndex + 1];
                    superWorkspace.swapWindows(
                        superWorkspace.windowFocused,
                        nextMetaWindows
                    );
                }
            }
        );

        Main.wm.addKeybinding(
            'move-window-top',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                let newWorkspace = global.workspace_manager.get_workspace_by_index(
                    global.display.focus_window.get_workspace().index() - 1
                );
                if (newWorkspace) {
                    global.display.focus_window.change_workspace(newWorkspace);
                    newWorkspace.activate(global.get_current_time());
                }
            }
        );

        Main.wm.addKeybinding(
            'move-window-bottom',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                let newWorkspace = global.workspace_manager.get_workspace_by_index(
                    global.display.focus_window.get_workspace().index() + 1
                );
                if (newWorkspace) {
                    global.display.focus_window.change_workspace(newWorkspace);
                    newWorkspace.activate(global.get_current_time());
                }
            }
        );

        Main.wm.addKeybinding(
            'cycle-tiling-layout',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                global.superWorkspaceManager
                    .getActiveSuperWorkspace()
                    .nextTiling(1);
            }
        );
        Main.wm.addKeybinding(
            'reverse-cycle-tiling-layout',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                global.superWorkspaceManager
                    .getActiveSuperWorkspace()
                    .nextTiling(-1);
            }
        );

        Main.wm.addKeybinding(
            'toggle-material-shell-ui',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const noUImode = global.superWorkspaceManager.noUImode;
                global.superWorkspaceManager.noUImode = !noUImode;
                Main.panel.get_parent().visible = noUImode;
                Main.panel.visible = noUImode;
                Main.panel
                .get_parent()
                .set_width(!noUImode ? 0 : -1);
                Main.layoutManager.panelBox.visible = noUImode;
                
                Main.layoutManager.panelBox.set_height(!noUImode ? 0 : -1);
                Main.layoutManager.monitors.forEach(monitor => {
                    let superWorkspace;
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        superWorkspace = global.superWorkspaceManager.getActiveSuperWorkspace();
                    } else {
                        superWorkspace = global.superWorkspaceManager.getSuperWorkspacesOfMonitorIndex(
                            monitor.index
                            )[0];
                        }
                        Main.layoutManager._queueUpdateRegions();
                        superWorkspace.updateUI();
                        superWorkspace.panel.set_height(!noUImode ? 0 : -1);
                        superWorkspace.tilingLayout.onTile();
                });
            }
        );
    }

    disable() {}
};

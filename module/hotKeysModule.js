const { Meta, Shell, Gio } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported HotKeysModule */
var HotKeysModule = class HotKeysModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
    }

    enable() {
        const SchemaSource = Gio.SettingsSchemaSource.new_from_directory(
            Me.dir.get_path(),
            Gio.SettingsSchemaSource.get_default(),
            false
        );
        const settings = new Gio.Settings({
            settings_schema: SchemaSource.lookup(Me.metadata['bindings'], true)
        });
        Main.wm.addKeybinding(
            'previous-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const workspaceEnhancer =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? this.workspaceManager.get_active_workspace()
                              .workspaceEnhancer
                        : Main.layoutManager.monitors[currentMonitorIndex]
                              .workspaceEnhancer;
                workspaceEnhancer.focusPrevious();
            }
        );

        Main.wm.addKeybinding(
            'next-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const workspaceEnhancer =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? this.workspaceManager.get_active_workspace()
                              .workspaceEnhancer
                        : Main.layoutManager.monitors[currentMonitorIndex]
                              .workspaceEnhancer;
                workspaceEnhancer.focusNext();
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
    }

    disable() {}
};

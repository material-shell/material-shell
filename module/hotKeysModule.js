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
    }

    disable() {}
};

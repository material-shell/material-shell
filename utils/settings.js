const Me = imports.misc.extensionUtils.getCurrentExtension();
const { Gio } = imports.gi;

/* exported getSettings */
var getSettings = key =>
    new Gio.Settings({
        settings_schema: Gio.SettingsSchemaSource.new_from_directory(
            Me.dir.get_path(),
            Gio.SettingsSchemaSource.get_default(),
            false
        ).lookup(Me.metadata[key], true)
    });

/** Gnome libs imports */
const { Gio } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported getSettings */
var getSettings = (key) =>
    new Gio.Settings({
        settings_schema: Gio.SettingsSchemaSource.new_from_directory(
            Me.dir.get_child('schemas').get_path(),
            Gio.SettingsSchemaSource.get_default(),
            false
        ).lookup(Me.metadata[key], true),
    });

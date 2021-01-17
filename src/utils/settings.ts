/** Gnome libs imports */
import * as Gio from 'Gio';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported getSettings */
export const getSettings = (key) =>
    new Gio.Settings({
        settings_schema: Gio.SettingsSchemaSource.new_from_directory(
            Me.dir.get_child('schemas').get_path(),
            Gio.SettingsSchemaSource.get_default(),
            false
        ).lookup(Me.metadata[key], true),
    });

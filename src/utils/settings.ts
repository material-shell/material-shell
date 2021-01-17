/** Gnome libs imports */
import * as Gio from 'gio';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported getSettings */
export const getSettings = (key: string) => {
    let schema = Gio.SettingsSchemaSource.new_from_directory(
        Me.dir.get_child('schemas').get_path(),
        Gio.SettingsSchemaSource.get_default(),
        false
    ).lookup(Me.metadata[key], true);

    if (schema !== null) {
        return new Gio.Settings({
            settings_schema: schema,
        });
    } else {
        throw Error("Cannot find schema");
    }
}

/** Gnome libs imports */
import Gio from 'gi://Gio';

/** Extension imports */
import { default as Me } from 'src/extension';

/* exported getSettings */
export const getSettings = (key: string) => {
    const schema = Gio.SettingsSchemaSource.new_from_directory(
        Me.instance.metadata.dir.get_child('schemas').get_path()!,
        Gio.SettingsSchemaSource.get_default(),
        false
    ).lookup(Me.instance.metadata[key], true);

    if (schema !== null) {
        return new Gio.Settings({
            settings_schema: schema,
        });
    } else {
        throw Error('Cannot find schema');
    }
};

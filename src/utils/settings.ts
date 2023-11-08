/** Gnome libs imports */
import Gio from 'gi://Gio';

/** Extension imports */
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

/* exported getSettings */
export const getSettings = (key: string) => {
    const schema = Gio.SettingsSchemaSource.new_from_directory(
        Me.metadata.dir.get_child('schemas').get_path()!,
        Gio.SettingsSchemaSource.get_default(),
        false
    ).lookup(Me.metadata[key], true);

    if (schema !== null) {
        return new Gio.Settings({
            settings_schema: schema,
        });
    } else {
        throw Error('Cannot find schema');
    }
};

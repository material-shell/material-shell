import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

/** Get the settings object for an extension.
 * Returns null if it cannot be found.
 */
export function getExtensionSettings(
    extensionUUID: string
): Gio.Settings | null {
    const extension = Main.extensionManager.lookup(extensionUUID);
    if (!extension) return null;

    try {
        // Check if the schema exists in the global schema source.
        // This may work for system extension, but not for custom extensions.
        return new Gio.Settings({
            schema_id: extension.metadata['settings-schema'],
        });
    } catch (_) {
        // Ignore
    }

    try {
        // Check if we can find the schema in the extension's own schema source.
        // This may work for custom extension, but not system extensions.
        const source = Gio.SettingsSchemaSource.new_from_directory(
            extension.path + '/schemas/',
            Gio.SettingsSchemaSource.get_default(),
            false
        );
        return new Gio.Settings({
            settings_schema:
                source.lookup(extension.metadata['settings-schema'], false) ||
                undefined,
        });
    } catch (_) {
        // Ignore
    }

    return null;
}

// With code from https://gitlab.com/rmnvgr/nightthemeswitcher-gnome-shell-extension/-/blob/main/src/utils.js

import * as Gio from 'gio';
import * as GLib from 'glib';
import * as Gtk from 'gtk';
const Me = imports.misc.extensionUtils.getCurrentExtension();

/**
 * Get all the directories of the system for a resource.
 *
 * @param {string} resource The resource to get the directories.
 * @returns {string[]} An array of paths.
 */
export function getResourcesDirsPaths(resource) {
    return [
        GLib.build_filenamev([GLib.get_home_dir(), `.${resource}`]),
        GLib.build_filenamev([GLib.get_user_data_dir(), resource]),
        ...GLib.get_system_data_dirs().map((path) =>
            GLib.build_filenamev([path, resource])
        ),
    ];
}

/**
 * Get all the resources installed on the system.
 *
 * @param {string} type The resources to get.
 * @returns {Set} A set of installed resources.
 */
export function getInstalledResources(type) {
    const installedResources = new Set<Map<string, string>>();
    getResourcesDirsPaths(type).forEach((resourcesDirPath) => {
        const resourcesDir = Gio.File.new_for_path(resourcesDirPath);
        if (
            resourcesDir.query_file_type(Gio.FileQueryInfoFlags.NONE, null) !==
            Gio.FileType.DIRECTORY
        )
            return;
        const resourcesDirsEnumerator = resourcesDir.enumerate_children(
            '',
            Gio.FileQueryInfoFlags.NONE,
            null
        );
        while (true) {
            let resourceDirInfo = resourcesDirsEnumerator.next_file(null);
            if (resourceDirInfo === null) break;
            const resourceDir =
                resourcesDirsEnumerator.get_child(resourceDirInfo);
            if (resourceDir === null) continue;
            const resource = new Map([
                ['name', resourceDir.get_basename()],
                ['path', resourceDir.get_path()],
            ]);
            installedResources.add(resource);
        }
        resourcesDirsEnumerator.close(null);
    });
    return installedResources;
}

/**
 * Get all the installed GTK themes on the system.
 *
 * @returns {Set<string>} A set containing all the installed GTK themes names.
 */
export function getInstalledGtkThemes() {
    const themes = new Set([
        'Adwaita',
        'Adwaita-dark',
        'HighContrast',
        'HighContrastInverse',
    ]);
    getInstalledResources('themes').forEach((theme) => {
        const version = [0, Gtk.MINOR_VERSION].find((gtkVersion) => {
            if (gtkVersion % 2) gtkVersion += 1;
            const cssFile = Gio.File.new_for_path(
                GLib.build_filenamev([
                    theme.get('path'),
                    `gtk-3.${gtkVersion}`,
                    'gtk.css',
                ])
            );
            return cssFile.query_exists(null);
        });
        if (version !== undefined) themes.add(theme.get('name'));
    });
    return themes;
}

/**
 * Get all the installed shell themes on the system.
 *
 * @returns {Set<string>} A set containing all the installed shell themes names.
 */
export function getInstalledShellThemes() {
    const themes = new Set(['']);
    getInstalledResources('themes').forEach((theme) => {
        const themeFile = Gio.File.new_for_path(
            GLib.build_filenamev([
                theme.get('path'),
                'gnome-shell',
                'gnome-shell.css',
            ])
        );
        if (themeFile.query_exists(null)) themes.add(theme.get('name'));
    });
    return themes;
}

/**
 * Get all the installed icon themes on the system.
 *
 * @returns {Set<string>} A set containing all the installed icon themes names.
 */
export function getInstalledIconThemes() {
    const themes = new Set();
    getInstalledResources('icons').forEach((theme) => {
        const themeFile = Gio.File.new_for_path(
            GLib.build_filenamev([theme.get('path'), 'index.theme'])
        );
        if (themeFile.query_exists(null)) themes.add(theme.get('name'));
    });
    themes.delete('default');
    return themes;
}

/**
 * Get all the installed cursor themes on the system.
 *
 * @returns {Set<string>} A set containing all the installed cursor themes names.
 */
export function getInstalledCursorThemes() {
    const themes = new Set();
    getInstalledResources('icons').forEach((theme) => {
        const themeFile = Gio.File.new_for_path(
            GLib.build_filenamev([theme.get('path'), 'cursors'])
        );
        if (themeFile.query_exists(null)) themes.add(theme.get('name'));
    });
    return themes;
}

/**
 * Get the User Themes extension.
 *
 * @returns {object|undefined} The User Themes extension object or undefined if
 * it isn't installed.
 */
export function getUserthemesExtension() {
    try {
        return imports.ui.main.extensionManager.lookup(
            'user-theme@gnome-shell-extensions.gcampax.github.com'
        );
    } catch (_e) {
        return undefined;
    }
}

/**
 * Get the User Themes extension settings.
 *
 * @returns {Gio.Settings|null} The User Themes extension settings or null if
 * the extension isn't installed.
 */
export function getUserthemesSettings() {
    let extension = getUserthemesExtension();
    if (!extension) return null;
    const schemaDir = extension.dir.get_child('schemas');
    const GioSSS = Gio.SettingsSchemaSource;
    let schemaSource;
    if (schemaDir.query_exists(null))
        schemaSource = GioSSS.new_from_directory(
            schemaDir.get_path(),
            GioSSS.get_default(),
            false
        );
    else schemaSource = GioSSS.get_default();
    const schemaObj = schemaSource.lookup(
        'org.gnome.shell.extensions.user-theme',
        true
    );
    return new Gio.Settings({ settings_schema: schemaObj });
}

/**
 * Get the shell theme stylesheet.
 *
 * @param {string} theme The shell theme name.
 * @returns {string|null} Path to the shell theme stylesheet.
 */
export function getShellThemeStylesheet(theme) {
    const themeName = theme ? `'${theme}'` : 'default';
    let stylesheet = null;
    if (theme) {
        const stylesheetPaths = getResourcesDirsPaths('themes').map((path) =>
            GLib.build_filenamev([
                path,
                theme,
                'gnome-shell',
                'gnome-shell.css',
            ])
        );
        stylesheet = stylesheetPaths.find((path) => {
            const file = Gio.file_new_for_path(path);
            return file.query_exists(null);
        });
    }
    return stylesheet;
}

/**
 * Apply a stylesheet to the shell.
 *
 * @param {string} stylesheet The shell stylesheet to apply.
 */
export function applyShellStylesheet(stylesheet) {
    imports.ui.main.setThemeStylesheet(stylesheet);
    imports.ui.main.loadTheme();
}

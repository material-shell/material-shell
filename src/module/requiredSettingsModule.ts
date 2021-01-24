/** Gnome libs imports */
import * as Gio from 'Gio';
import { Signal } from 'src/manager/msManager';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { getSettings } from 'src/utils/settings';

interface Setting {
    schema: string;
    key: string;
    value: boolean | string;
    valueType: string;
}

interface RestoreSetting {
    setting: Gio.Settings,
    key: string;
    value: boolean | string;
    valueType: string;
}

interface RestoreKey {
    setting: Gio.Settings,
    key: string,
    shortcut: string[]
}

export class RequiredSettingsModule {
    mutterSettings: Gio.Settings;
    settingsToForce: Setting[];
    signals: Signal[];
    settingsToRestore: RestoreSetting[];
    hotkeysToRemove: string[];
    keysToRestore: RestoreKey[];

    constructor() {
        this.mutterSettings = new Gio.Settings({
            schema_id: 'org.gnome.mutter',
        });
        this.settingsToForce = [
            {
                schema: 'org.gnome.mutter',
                key: 'workspaces-only-on-primary',
                value: true,
                valueType: 'boolean',
            },
            {
                schema: 'org.gnome.desktop.wm.preferences',
                key: 'button-layout',
                value: 'appmenu:close',
                valueType: 'string',
            },
        ];

        this.signals = [];
        this.settingsToRestore = [];
        this.settingsToForce.forEach((settingToForce) => {
            let setting = new Gio.Settings({
                schema_id: settingToForce.schema,
            });

            this.setValueIfDifferent(
                setting,
                settingToForce.key,
                settingToForce.value,
                settingToForce.valueType
            );

            let id = setting.connect(
                `changed::${settingToForce.key}`,
                () => {
                    this.setValueIfDifferent(
                        setting,
                        settingToForce.key,
                        settingToForce.value,
                        settingToForce.valueType
                    );
                }
            );

            this.signals.push({
                from: setting,
                id,
            });
        });

        const bindingSettings = getSettings('bindings');
        this.hotkeysToRemove = bindingSettings.list_keys().map((key) => {
            return bindingSettings.get_strv(key)[0];
        });

        this.keysToRestore = [];
        for (let schema of [
            'org.gnome.desktop.wm.keybindings',
            'org.gnome.shell.keybindings',
            'org.gnome.mutter.keybindings',
            'org.gnome.mutter.wayland.keybindings',
        ]) {
            let setting = new Gio.Settings({
                schema_id: schema,
            });

            setting.list_keys().forEach((key) => {
                let shortcut = setting.get_strv(key);
                if (
                    shortcut[0] &&
                    this.hotkeysToRemove.indexOf(shortcut[0]) > -1
                ) {
                    //let res = global.display.remove_keybinding(key);
                    this.keysToRestore.push({
                        setting,
                        key,
                        shortcut,
                    });
                    setting.set_strv(key, ['']);
                }
            });
        }
    }

    destroy() {
        this.signals.forEach((signal) => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
        this.settingsToRestore.forEach((settingToRestore) => {
            const { setting, key, value, valueType } = settingToRestore;
            setting[`set_${valueType}`](key, value);
        });
        this.keysToRestore.forEach((keyToRestore) => {
            keyToRestore.setting.set_strv(
                keyToRestore.key,
                keyToRestore.shortcut
            );
        });
        this.keysToRestore = [];
    }

    setValueIfDifferent(setting: Gio.Settings, key: string, value: string | boolean, valueType: string) {
        if (setting[`get_${valueType}`](key) !== value) {
            this.settingsToRestore.push({
                setting,
                key,
                value: setting[`get_${valueType}`](key),
                valueType,
            });
            setting[`set_${valueType}`](key, value);
        }
    }
};

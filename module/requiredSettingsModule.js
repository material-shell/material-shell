const { Gio } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;

/* exported RequiredSettingsModule */
var RequiredSettingsModule = class RequiredSettingsModule {
    constructor() {
        this.mutterSettings = new Gio.Settings({
            schema_id: 'org.gnome.mutter'
        });
        this.settingsToForce = [
            {
                schema: 'org.gnome.mutter',
                key: 'dynamic-workspaces',
                value: false,
                valueType: 'boolean'
            },
            {
                schema: 'org.gnome.mutter',
                key: 'workspaces-only-on-primary',
                value: true,
                valueType: 'boolean'
            },
            {
                schema: 'org.gnome.shell.overrides',
                key: 'edge-tiling',
                value: false,
                valueType: 'boolean'
            },
            {
                schema: 'org.gnome.mutter',
                key: 'edge-tiling',
                value: false,
                valueType: 'boolean'
            }
        ];
    }

    enable() {
        this.signals = [];
        this.settingsToForce.forEach(settingToForce => {
            let setting = new Gio.Settings({
                schema_id: settingToForce.schema
            });

            this.setValueIfDifferentAndNotify(
                setting,
                settingToForce.key,
                settingToForce.value,
                settingToForce.valueType
            );

            let signalId = setting.connect(
                `changed::${settingToForce.key}`,
                () => {
                    this.setValueIfDifferentAndNotify(
                        setting,
                        settingToForce.key,
                        settingToForce.value,
                        settingToForce.valueType
                    );
                }
            );

            this.signals.push({
                from: setting,
                signalId: signalId
            });
        });

        const bindingSettings = getSettings('bindings');
        this.hotkeysToRemove = bindingSettings.list_keys().map(key => {
            return bindingSettings.get_strv(key)[0];
        });

        for (let schema of [
            'org.gnome.desktop.wm.keybindings',
            'org.gnome.shell.keybindings',
            'org.gnome.mutter.keybindings',
            'org.gnome.mutter.wayland.keybindings'
        ]) {
            let setting = new Gio.Settings({
                schema_id: schema
            });

            setting.list_keys().forEach(key => {
                let shortcut = setting.get_strv(key);
                if (
                    shortcut[0] &&
                    this.hotkeysToRemove.indexOf(shortcut[0]) > -1
                ) {
                    setting.set_strv(key, ['']);
                    Main.notify(
                        'Material-shell',
                        `This extension has unset the ${key} hotkey to override it`
                    );
                }
            });
        }
    }

    disable() {
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.signalId);
        });
        this.signals = [];
    }

    setValueIfDifferentAndNotify(setting, key, value, valueType) {
        if (setting[`get_${valueType}`](key) !== value) {
            setting[`set_${valueType}`](key, value);

            Main.notify(
                'Material-shell',
                `This extension has override the ${key} setting to ${value}`
            );
        }
    }
};

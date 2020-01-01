const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;
const { MatButton } = Me.imports.widget.material.button;

/* exported SettingButtonSubModule */
var SettingButtonSubModule = class SettingButtonSubModule {
    constructor(panel) {
        this.panel = panel;
        let icon = new St.Icon({
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/settings-symbolic.svg`
            ),
            style_class: 'mat-panel-button-icon'
        });

        this.button = new MatButton({
            child: icon,
            style_class: 'mat-panel-button'
        });
        this.enabled = false;

        this.button.connect('clicked', () => {
            imports.misc.util.spawn([
                'gnome-shell-extension-prefs',
                'material-shell@papyelgringo'
            ]);
        });
        this.themeSettings = getSettings('theme');
        this.showSettingsButton = this.themeSettings.get_boolean('show-settings-button-on-panel');
        this.settingsButtonSetting = this.themeSettings.connect('changed::show-settings-button-on-panel', schema => {
            this.showSettingsButton = schema.get_boolean('show-settings-button-on-panel');
            if (this.showSettingsButton) {
                this.enable();
            } else {
                this.disable();
            }
        });
    }


    enable() {
        if (!this.showSettingsButton || this.enabled) return;
        this.panel._centerBox.add_child(this.button);
        this.enabled = true;
    }

    disable() {
        if(!this.enabled) return;
        this.panel._centerBox.remove_child(this.button);
        this.enabled = false;
    }
};

const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
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

        this.button.connect('clicked', () => {
            imports.misc.util.spawn([
                'gnome-shell-extension-prefs',
                'material-shell@papyelgringo'
            ]);
        });
    }

    enable() {
        this.panel._centerBox.add_child(this.button);
    }

    disable() {
        this.panel._centerBox.remove_child(this.button);
    }
};

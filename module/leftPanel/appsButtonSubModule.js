const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MatButton } = Me.imports.widget.material.button;

/* exported AppsButtonSubModule */
var AppsButtonSubModule = class AppsButtonSubModule {
    constructor(panel) {
        this.panel = panel;
        let icon = new St.Icon({
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/menu-symbolic.svg`
            ),
            style_class: 'mat-panel-button-icon'
        });

        this.button = new MatButton({
            child: icon,
            style_class: 'mat-panel-button',
            primary: true
        });

        this.button.connect('clicked', () => {
            if (!Main.overview._shown) {
                Main.overview.viewSelector.showApps();
            } else {
                Main.overview.hide();
            }
        });

        this.panel._leftBox.insert_child_at_index(this.button, 0);
    }

    destroy() {
        this.panel._leftBox.remove_child(this.button);
    }
};

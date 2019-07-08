const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { RippleContainer } = Me.imports.widget.material.rippleContainer;

/* exported AppsButtonSubModule */
var AppsButtonSubModule = class AppsButtonSubModule {
    constructor(panel) {
        this.panel = panel;
        let icon = new St.Icon({
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/menu-symbolic.svg`
            ),
            style_class: 'workspace-main-icon'
        });

        let button = new St.Bin({
            child: icon,
            style_class: 'workspace-button',
            reactive: true,
            can_focus: true,
            track_hover: true
        });

        button.connect('button-press-event', () => {
            if (!Main.overview._shown) {
                Main.overview.viewSelector.showApps();
            } else {
                Main.overview.hide();
            }
        });

        this.button = new RippleContainer(button);
        this.button.add_style_class_name('primary-bg');
    }

    enable() {
        this.panel._leftBox.insert_child_at_index(this.button, 0);
    }

    disable() {
        this.panel._leftBox.remove_child(this.button);
    }
};

const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const RippleContainer = Me.imports.material.rippleContainer.RippleContainer;

/* exported AppsButtonSubModule */
var AppsButtonSubModule = class AppsButtonSubModule {
    constructor(panel) {
        this.panel = panel;
        let icon = new St.Icon({
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/gnome-symbolic.svg`
            ),
            style_class: 'workspace-icon'
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
        this.button.set_background_color(
            Main.panel.statusArea.aggregateMenu._volume._volumeMenu._output._slider.actor
                .get_theme_node()
                .get_color('-barlevel-active-background-color')
        );
    }

    enable() {
        this.panel._leftBox.insert_child_at_index(this.button, 0);
    }

    disable() {
        this.panel._leftBox.remove_child(this.button);
    }
};

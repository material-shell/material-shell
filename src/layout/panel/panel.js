const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { MsStatusArea } = Me.imports.src.layout.panel.statusArea;
const { Shell, Meta, St, GLib, GObject, Clutter, Gio } = imports.gi;
const Main = imports.ui.main;
const { reparentActor } = Me.imports.src.utils.index;
const { MatButton } = Me.imports.src.widget.material.button;
const { WorkspaceList } = Me.imports.src.widget.workspaceList;

/* exported MsPanel */
var MsPanel = GObject.registerClass(
    {
        GTypeName: 'MsPanel',
    },
    class MsPanel extends St.BoxLayout {
        _init() {
            super._init({
                name: 'msPanel',
                vertical: true,
                y_align: Clutter.ActorAlign.START,
            });
            this.gnomeShellPanel = Main.panel;
            this.gnomeShellPanel.hide();
            Main.layoutManager._trackActor(this, {
                affectsStruts: true,
                trackFullscreen: true,
            });
            // Top part
            this.topBox = new St.BoxLayout({
                vertical: true,
                y_expand: true,
            });
            this.add_child(this.topBox);

            let icon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/magnify-symbolic.svg`
                ),
                style_class: 'mat-panel-button-icon',
            });

            this.searchButton = new MatButton({
                child: icon,
                style_class: 'mat-panel-button',
                primary: true,
            });

            this.searchButton.connect('clicked', () => {
                if (!Main.overview._shown) {
                    Main.overview.show();
                } else {
                    Main.overview.hide();
                }
            });

            this.topBox.add_child(this.searchButton);

            this.workspaceList = new WorkspaceList();
            this.topBox.add_child(this.workspaceList);

            //Bottom part
            this.statusArea = new MsStatusArea();
            this.add_child(this.statusArea);
            this.disableConnect = Me.connect('extension-disable', () => {
                Me.disconnect(this.disableConnect);
                this.gnomeShellPanel.show();
            });
        }

        vfunc_get_preferred_width(_forHeight) {
            return [
                super.vfunc_get_preferred_width(_forHeight)[0],
                super.vfunc_get_preferred_width(_forHeight)[0],
            ];
        }

        vfunc_get_preferred_height(_forWidth) {
            return [
                Main.layoutManager.primaryMonitor.height,
                Main.layoutManager.primaryMonitor.height,
            ];
        }
    }
);

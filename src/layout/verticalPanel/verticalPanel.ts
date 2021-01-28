/** Gnome libs imports */
import * as St from 'st';
import * as GObject from 'gobject';
import * as Clutter from 'clutter';
import * as Gio from 'gio';
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { MsStatusArea } from 'src/layout/verticalPanel/statusArea';
import { MatPanelButton } from 'src/layout/verticalPanel/panelButton';
import { WorkspaceList } from 'src/layout/verticalPanel/workspaceList';
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class MsPanel extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsPanel',
    }
    gnomeShellPanel: any;
    topBox: St.BoxLayout;
    searchButton: MatPanelButton;
    workspaceList: WorkspaceList;
    statusArea: MsStatusArea;
    disableConnect: number;

    constructor() {
            super({
                name: 'msPanel',
                vertical: true,
                y_align: Clutter.ActorAlign.START,
            });
            this.gnomeShellPanel = Main.panel;
            this.gnomeShellPanel.hide();

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
                icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
            });

            this.searchButton = new MatPanelButton({
                child: icon,
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
                this.disable();
            });

            Me.msThemeManager.connect('panel-size-changed', () => {
                icon.set_icon_size(
                    Me.msThemeManager.getPanelSizeNotScaled() / 2
                );
                this.queue_relayout();
            });
        }

        enable() {
            this.gnomeShellPanel.hide();
            this.statusArea.enable();
        }

        disable() {
            this.gnomeShellPanel.show();
            this.statusArea.disable();
        }

        vfunc_get_preferred_width(_forHeight): [number, number]{
            return [
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            ];
        }

        vfunc_get_preferred_height(_forWidth): [number, number] {
            return [
                Main.layoutManager.primaryMonitor.height,
                Main.layoutManager.primaryMonitor.height,
            ];
        }
}

/** Gnome libs imports */
const { St, GObject, Clutter, Gio } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsStatusArea } = Me.imports.src.layout.verticalPanel.statusArea;
const { MatPanelButton } = Me.imports.src.layout.verticalPanel.panelButton;
const { WorkspaceList } = Me.imports.src.layout.verticalPanel.workspaceList;
const { VerticalPanelPositionEnum } = Me.imports.src.manager.msThemeManager;

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

            // Top part
            this.topBox = new St.BoxLayout({
                vertical: true,
                y_expand: true,
            });
            this.add_child(this.topBox);

            const panelSize = Me.msThemeManager.getPanelSizeNotScaled();
            let icon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/magnify-symbolic.svg`
                ),
                style_class: 'mat-panel-button-icon',
                icon_size: panelSize / 2,
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

            this.dummyButton = new St.Widget({
                height: panelSize,
                width: panelSize,
            });

            this.topBox.add_child(this.dummyButton);
            this.topBox.add_child(this.searchButton);
            this.toggleButtons();

            this.workspaceList = new WorkspaceList();
            this.topBox.add_child(this.workspaceList);

            //Bottom part
            this.statusArea = new MsStatusArea();
            this.add_child(this.statusArea);
            this.disableConnect = Me.connect('extension-disable', () => {
                Me.disconnect(this.disableConnect);
                this.gnomeShellPanel.show();
            });

            const panelSizeSignal = Me.msThemeManager.connect(
                'panel-size-changed',
                () => {
                    const panelSize = Me.msThemeManager.getPanelSizeNotScaled();
                    icon.set_icon_size(panelSize / 2);
                    this.dummyButton.set_height(panelSize);
                    this.dummyButton.set_width(panelSize);
                    this.queue_relayout();
                }
            );

            const verticalPanelPositionSignal = Me.msThemeManager.connect(
                'vertical-panel-position-changed',
                () => {
                    this.toggleButtons();
                    this.queue_relayout();
                }
            );
            this.connect('destroy', () => {
                Me.msThemeManager.disconnect(panelSizeSignal);
                Me.msThemeManager.disconnect(verticalPanelPositionSignal);
            });
        }

        toggleButtons() {
            const isLeft = Me.msThemeManager.verticalPanelPosition ===
                VerticalPanelPositionEnum.LEFT;
            if (isLeft) {
                this.dummyButton.hide();
                this.searchButton.show();
            } else {
                this.dummyButton.show();
                this.searchButton.hide();
            }
        }

        vfunc_get_preferred_width(_forHeight) {
            return [
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
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

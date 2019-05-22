const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const VerticalisePanelSubModule = Me.imports.module.leftPanel.verticalisePanel.verticalisePanelSubModule.VerticalisePanelSubModule;
const PanelToLeftSubModule = Me.imports.module.leftPanel.panelToLeftSubModule.PanelToLeftSubModule;
const AppsButtonSubModule = Me.imports.module.leftPanel.appsButtonSubModule.AppsButtonSubModule;
const WorkspaceListSubModule = Me.imports.module.leftPanel.workspaceListSubModule.WorkspaceListSubModule;
const MaterializePanelSubModule = Me.imports.module.leftPanel.materializePanelSubModule.MaterializePanelSubModule;
const HideDashModule = Me.imports.module.leftPanel.hideDashModule.HideDashModule;

/* exported LeftPanelModule */
var LeftPanelModule = class LeftPanelModule {
    constructor() {
        this.panel = Main.panel;

        this.subModules = [
            new VerticalisePanelSubModule(
                this.panel
            ),
            new PanelToLeftSubModule(this.panel),
            new AppsButtonSubModule(this.panel),
            new WorkspaceListSubModule(this.panel),
            new MaterializePanelSubModule(
                this.panel
            ),
            new HideDashModule()
        ];
    }

    enable() {
        // 5- Hide the activities button
        this.panel.statusArea.activities.actor.hide();

        // 6- Remove the appMenu button because we can't really hide it.
        this.panel._leftBox.remove_child(
            this.panel.statusArea.appMenu.actor.get_parent()
        );

        this.subModules.forEach((subModule) => {
            subModule.enable();
        });
    }

    disable() {
        this.panel._leftBox.add_child(
            this.panel.statusArea.appMenu.actor.get_parent()
        );
        this.panel.statusArea.activities.actor.show();

        this.subModules.reverse().forEach((subModule) => {
            subModule.disable();
        });
    }
};
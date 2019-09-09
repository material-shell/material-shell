const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const {
    VerticalisePanelSubModule
} = Me.imports.module.leftPanel.verticalisePanel.verticalisePanelSubModule;
const {
    PanelToLeftSubModule
} = Me.imports.module.leftPanel.panelToLeftSubModule;
const { AppsButtonSubModule } = Me.imports.module.leftPanel.appsButtonSubModule;
const {
    MaterializePanelSubModule
} = Me.imports.module.leftPanel.materializePanelSubModule;
const { HideDashModule } = Me.imports.module.leftPanel.hideDashModule;

const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported LeftPanelModule */
var LeftPanelModule = class LeftPanelModule {
    constructor() {
        this.panel = Main.panel;

        this.subModules = [
            new VerticalisePanelSubModule(this.panel),
            new PanelToLeftSubModule(this.panel),
            new AppsButtonSubModule(this.panel),
            new MaterializePanelSubModule(this.panel),
            new HideDashModule()
        ];
    }

    enable() {
        // 5- Hide the activities button
        if (ShellVersionMatch('3.32')) {
            this.panel.statusArea.activities.actor.hide();
        } else {
            this.panel.statusArea.activities.hide();
        }

        // 6- Remove the appMenu button because we can't really hide it.
        if (this.panel.statusArea.appMenu) {
            let appMenuActor = ShellVersionMatch('3.32')
                ? this.panel.statusArea.appMenu.actor
                : this.panel.statusArea.appMenu;
            this.panel._leftBox.remove_child(appMenuActor.get_parent());
        }

        this.subModules.forEach(subModule => {
            subModule.enable();
        });
    }

    disable() {
        this.subModules.reverse().forEach(subModule => {
            subModule.disable();
        });

        if (this.panel.statusArea.appMenu) {
            let appMenuActor = ShellVersionMatch('3.32')
                ? this.panel.statusArea.appMenu.actor
                : this.panel.statusArea.appMenu;
            this.panel._leftBox.add_child(appMenuActor.get_parent());
        }
        if (ShellVersionMatch('3.32')) {
            this.panel.statusArea.activities.actor.show();
        } else {
            this.panel.statusArea.activities.show();
        }
    }
};

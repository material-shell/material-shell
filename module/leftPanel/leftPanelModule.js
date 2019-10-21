const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;

const {
    VerticalisePanelSubModule
} = Me.imports.module.leftPanel.verticalisePanel.verticalisePanelSubModule;
const {
    PanelToLeftSubModule
} = Me.imports.module.leftPanel.panelToLeftSubModule;
const { AppsButtonSubModule } = Me.imports.module.leftPanel.appsButtonSubModule;
const {
    SettingButtonSubModule
} = Me.imports.module.leftPanel.settingButtonSubModule;

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

        this.settingButtonSubModule = new SettingButtonSubModule(this.panel);
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

        this.themeSettings = getSettings('theme');
        this.showSettingsButton = this.themeSettings.get_boolean('show-settings-button-on-panel');
        this.settingsButtonSetting = this.themeSettings.connect('changed::show-settings-button-on-panel', schema => {
            this.settingsButtonSetting = schema.get_boolean('show-settings-button-on-panel');
            this.setSettingsButtonToSettingsButtonSetting(this.settingsButtonSetting);
        });
        this.setSettingsButtonToSettingsButtonSetting(this.settingsButtonSetting);
    }

    setSettingsButtonToSettingsButtonSetting(settingsButtonSetting) { // did I mention settings?
        if (settingsButtonSetting) {
            this.settingButtonSubModule.enable();
        } else {
            this.settingButtonSubModule.disable();
        }
    }

    disable() {
        this.subModules.reverse().forEach(subModule => {
            subModule.disable();
        });
        this.setSettingsButtonToSettingsButtonSetting(false);

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

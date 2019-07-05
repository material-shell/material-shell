const Me = imports.misc.extensionUtils.getCurrentExtension();

const { LeftPanelModule } = Me.imports.module.leftPanel.leftPanelModule;
const { SuperWorkspaceModule } = Me.imports.module.superWorkspaceModule;
const { NoTitleBarModule } = Me.imports.module.noTitleBarModule;
const { HotKeysModule } = Me.imports.module.hotKeysModule;
const { RequiredSettingsModule } = Me.imports.module.requiredSettingsModule;
const { TilingModule } = Me.imports.module.tilingModule;

let modules;

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    global.materialShell = Me;
    modules = [
        new RequiredSettingsModule(),
        new LeftPanelModule(),
        new SuperWorkspaceModule(),
        new NoTitleBarModule(),
        new HotKeysModule(),
        new TilingModule()
    ];
}

// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    modules.forEach(module => {
        module.enable();
    });
}

// eslint-disable-next-line no-unused-vars
function disable() {
    modules.reverse().forEach(module => {
        module.disable();
    });
}

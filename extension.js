const { GLib } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    DisableIncompatibleExtensionsModule
} = Me.imports.module.disableIncompatibleExtensionsModule;
const { LeftPanelModule } = Me.imports.module.leftPanel.leftPanelModule;
const { SuperWorkspaceModule } = Me.imports.module.superWorkspaceModule;
const { NoTitleBarModule } = Me.imports.module.noTitleBarModule;
const { HotKeysModule } = Me.imports.module.hotKeysModule;
const { RequiredSettingsModule } = Me.imports.module.requiredSettingsModule;
const { TilingModule } = Me.imports.module.tilingModule;
const { StateManager } = Me.imports.stateManager;

let disableIncompatibleExtensionsModule, modules;

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    global.materialShell = Me;
    Me.stateManager = new StateManager();
    disableIncompatibleExtensionsModule = new DisableIncompatibleExtensionsModule();
    modules = [
        new RequiredSettingsModule(),
        new LeftPanelModule(),
        new TilingModule(),
        new SuperWorkspaceModule(),
        new NoTitleBarModule(),
        new HotKeysModule()
    ];
}

// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    //Delay to wait for others extensions to load first;
    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
        //Then disable incompatibles extensions;
        disableIncompatibleExtensionsModule.enable();
        Me.stateManager.loadRegistry(() => {
            modules.forEach(module => {
                module.enable();
            });
        });
        return GLib.SOURCE_REMOVE;
    });
}

// eslint-disable-next-line no-unused-vars
function disable() {
    log('----------------');
    log('DISABLE EXTENSION');
    log('----------------');
    modules.reverse().forEach(module => {
        module.disable();
    });
}

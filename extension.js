const Me = imports.misc.extensionUtils.getCurrentExtension();

const {
    LeftPanelModule,
    WorkspaceEnhancerModule,
    NoTitleBarModule,
    HotKeysModule,
    RequiredSettingsModule
} = Me.imports.files.Module;
const TestModule = Me.imports.module;
//const AggregateMenu = imports.ui.panel.AggregateMenu;

let modules;

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');

    modules = [
        new RequiredSettingsModule(),
        new LeftPanelModule(),
        new WorkspaceEnhancerModule(),
        new NoTitleBarModule(),
        new HotKeysModule()
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

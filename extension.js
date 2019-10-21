const { GLib } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    DisableIncompatibleExtensionsModule
} = Me.imports.module.disableIncompatibleExtensionsModule;
const { LeftPanelModule } = Me.imports.module.leftPanel.leftPanelModule;
const { SuperWorkspaceModule } = Me.imports.module.superWorkspaceModule;
const { HotKeysModule } = Me.imports.module.hotKeysModule;
const { RequiredSettingsModule } = Me.imports.module.requiredSettingsModule;
const { TilingModule } = Me.imports.module.tilingModule;
const { ThemeModule } = Me.imports.module.themeModule;

const { StateManager } = Me.imports.stateManager;

let disableIncompatibleExtensionsModule, modules, _startupPreparedId;

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    Signals.addSignalMethods(Me);
    global.materialShell = Me;
    Me.stateManager = new StateManager();
    Me.loaded = false;
    disableIncompatibleExtensionsModule = new DisableIncompatibleExtensionsModule();
    modules = [
        new RequiredSettingsModule(),
        new LeftPanelModule(),
        new TilingModule(),
        new SuperWorkspaceModule(),
        new HotKeysModule(),
        new ThemeModule()
    ];
}

// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    Main.wm._blockAnimations = true;
    //Delay to wait for others extensions to load first;
    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
        //Then disable incompatibles extensions;
        disableIncompatibleExtensionsModule.enable();
        Me.stateManager.loadRegistry(() => {
            modules.forEach(module => {
                module.enable();
            });
            if (Main.layoutManager._startingUp) {
                _startupPreparedId = Main.layoutManager.connect(
                    'startup-complete',
                    () => loaded(true)
                );
            } else {
                loaded(false);
            }
        });
        return GLib.SOURCE_REMOVE;
    });
}

function loaded(disconnect) {
    log('----------------');
    log('EXTENSION LOADED');
    log('----------------');
    if (disconnect) {
        Main.layoutManager.disconnect(_startupPreparedId);
    }
    Me.loaded = true;
    Main.wm._blockAnimations = false;
    Me.emit('extension-loaded');
}

// eslint-disable-next-line no-unused-vars
function disable() {
    log('----------------');
    log('DISABLE EXTENSION');
    log('----------------');
    modules.reverse().forEach(module => {
        module.disable();
    });
    Me.loaded = false;
}

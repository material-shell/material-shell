const { GLib, St, Clutter } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    DisableIncompatibleExtensionsModule,
} = Me.imports.src.module.disableIncompatibleExtensionsModule;
const { LeftPanelModule } = Me.imports.src.module.leftPanel.leftPanelModule;
const { MsWorkspaceModule } = Me.imports.src.module.msWorkspaceModule;
const { HotKeysModule } = Me.imports.src.module.hotKeysModule;
const { RequiredSettingsModule } = Me.imports.src.module.requiredSettingsModule;
const { TilingModule } = Me.imports.src.module.tilingModule;
const { ThemeModule } = Me.imports.src.module.themeModule;

const { StateManager } = Me.imports.src.manager.stateManager;
const { MsWindowManager } = Me.imports.src.manager.msWindowManager;
const { MsWorkspaceManager } = Me.imports.src.manager.msWorkspaceManager;

let disableIncompatibleExtensionsModule, modules, _startupPreparedId;

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    Signals.addSignalMethods(Me);
    global.materialShell = Me;
}

// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    //St.Settings.slow_down_factor(10);
    //St.set_slow_down_factor(1);

    Main.wm._blockAnimations = true;
    Me.loaded = false;
    Me.stateManager = new StateManager();
    let superPressed = false;
    //detect the keyboard key press event
    /* const Keymap = imports.gi.Gdk.Keymap.get_default();
    Keymap.connect('state_changed', (_) => {
        let isSuperPressed = Keymap.get_modifier_state() === 64;
        if (superPressed != isSuperPressed) {
            superPressed = isSuperPressed;
            Me.emit('super-pressed-change', superPressed);
        }
    }); */
    //Delay to wait for others extensions to load first;
    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
        log('IDLE_ADD'); //Then disable incompatibles extensions;
        disableIncompatibleExtensionsModule = new DisableIncompatibleExtensionsModule();
        Me.stateManager.loadRegistry(() => {
            modules = [
                new RequiredSettingsModule(),
                new LeftPanelModule(),
                new TilingModule(),
            ];

            Me.msWindowManager = new MsWindowManager();
            Me.msWorkspaceManager = new MsWorkspaceManager();

            modules = [
                ...modules,
                new MsWorkspaceModule(),
                new HotKeysModule(),
                new ThemeModule(),
            ];
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
    Me.msWindowManager.init();
    Me.msWorkspaceManager.init();
    Me.loaded = true;
    Main.wm._blockAnimations = false;
    Me.emit('extension-loaded');
}

// eslint-disable-next-line no-unused-vars
function disable() {
    log('----------------');
    log('DISABLE EXTENSION');
    log('----------------');
    if (!modules) return;
    modules.reverse().forEach((module) => {
        log('Destroy', module);
        module.destroy();
    });
    log('destroy msWorkspaceManager');
    Me.msWorkspaceManager.destroy();
    log('destroy msWindowManager');
    Me.msWindowManager.destroy();

    Me.loaded = false;
}

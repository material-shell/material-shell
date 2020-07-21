/** Gnome libs imports */
const { GLib, St, Gio } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    DisableIncompatibleExtensionsModule,
} = Me.imports.src.module.disableIncompatibleExtensionsModule;
const { OverrideModule } = Me.imports.src.module.overrideModule;
const { HotKeysModule } = Me.imports.src.module.hotKeysModule;
const { RequiredSettingsModule } = Me.imports.src.module.requiredSettingsModule;
const { TilingManager } = Me.imports.src.manager.tilingManager;
const { StateManager } = Me.imports.src.manager.stateManager;
const { MsWindowManager } = Me.imports.src.manager.msWindowManager;
const { MsWorkspaceManager } = Me.imports.src.manager.msWorkspaceManager;
const { MsThemeManager } = Me.imports.src.manager.msThemeManager;
const { MsMain } = Me.imports.src.layout.main;

let disableIncompatibleExtensionsModule,
    modules,
    _startupPreparedId,
    monitorChangedId;
let splashScreens = [];

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    Signals.addSignalMethods(Me);
    global.ms = Me;
    Me.showSplashScreens = showSplashScreens;
    Me.hideSplashScreens = hideSplashScreens;
    Me.closing = false;
    Me.locked = false;
    //St.set_slow_down_factor(10);
    global.display.connect('closing', () => {
        Me.closing = true;
    });
}

// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    Me.monitorsLength = Main.layoutManager.monitors.length;
    // Show a splashscreen while we are updating the UI layout and theme
    if (Main.layoutManager._startingUp) {
        Me.showSplashScreens();
    }
    Me.loaded = false;
    Me.stateManager = new StateManager();
    //Delay to wait for others extensions to load first;
    GLib.idle_add(GLib.PRIORITY_LOW, () => {
        //Then disable incompatibles extensions;
        disableIncompatibleExtensionsModule = new DisableIncompatibleExtensionsModule();
        //Load persistent data
        Me.stateManager.loadRegistry(() => {
            modules = [new RequiredSettingsModule(), new OverrideModule()];
            Me.tilingManager = new TilingManager();
            Me.msWindowManager = new MsWindowManager();
            Me.msWorkspaceManager = new MsWorkspaceManager();
            modules = [...modules, (Me.hotKeysModule = new HotKeysModule())];
            Me.msThemeManager = new MsThemeManager();
            if (!Me.locked) {
                Me.msThemeManager.regenerateStylesheet();
            }
            Me.msWorkspaceManager.setupInitialState();
            new MsMain();
            Me.msWindowManager.handleExistingMetaWindow();
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
    Me.locked = false;
    Me.emit('extension-loaded');

    // When monitors changed we reload the extension completely by disabling and reEnabling it
    monitorChangedId = Main.layoutManager.connect('monitors-changed', () => {
        if (
            Main.layoutManager.monitors.length &&
            Main.layoutManager.monitors.length != Me.monitorsLength
        ) {
            Me.showSplashScreens();
            disable();
            enable();
        }
    });
    GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
        hideSplashScreens();
    });
    log('----------------');
    log('END EXTENSION LOADED');
    log('----------------');
}

// eslint-disable-next-line no-unused-vars
function disable() {
    log('----------------');
    log('DISABLE EXTENSION');
    log('----------------');
    if (Main.sessionMode.currentMode === 'unlock-dialog') {
        Me.locked = true;
    }
    Me.disableInProgress = true;
    if (!modules) return;
    Me.emit('extension-disable');
    Main.layoutManager.disconnect(monitorChangedId);
    modules.reverse().forEach((module) => {
        module.destroy();
    });
    Me.tilingManager.destroy();
    Me.msWorkspaceManager.destroy();
    Me.msWindowManager.destroy();

    Me.layout.destroy();
    Me.msThemeManager.destroy();
    Me.loaded = false;
    delete Me.disableInProgress;
    log('END DISABLE EXTENSION');
}

function showSplashScreens() {
    log('show splashscreen');
    Main.layoutManager.monitors.forEach((monitor) => {
        let icon = new St.Icon({
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/on-dark-small.svg`
            ),
            icon_size: 200,
        });
        let splashscreen = new St.Bin({
            style_class: 'ms-splashscreen',
            style: 'background: rgb(25,25,25)',
            child: icon,
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });
        splashScreens.push(splashscreen);
    });
    GLib.timeout_add(GLib.PRIORITY_DEFAULT, 4000, () => {
        hideSplashScreens();
    });
}

function hideSplashScreens() {
    splashScreens.forEach((splashscreen) => {
        splashscreen.ease({
            opacity: 0,
            duration: 800,
            transition: 'easeInQuad',
            onComplete: () => {
                splashscreen.destroy();
            },
        });
    });
    splashScreens = [];
}

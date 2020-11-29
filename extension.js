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
const { LayoutManager } = Me.imports.src.manager.layoutManager;
const { StateManager } = Me.imports.src.manager.stateManager;
const { MsWindowManager } = Me.imports.src.manager.msWindowManager;
const { MsWorkspaceManager } = Me.imports.src.manager.msWorkspaceManager;
const { MsThemeManager } = Me.imports.src.manager.msThemeManager;
const { TooltipManager } = Me.imports.src.manager.tooltipManager;

const { MsMain } = Me.imports.src.layout.main;
const { MsNotificationManager } = Me.imports.src.manager.msNotificationManager;
const { getSettings } = Me.imports.src.utils.settings;

let disableIncompatibleExtensionsModule,
    modules,
    _startupPreparedId,
    _splashscreenTimeoutId,
    splashscreenCalled;
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
    splashscreenCalled = false;
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
    if (Me.locked) {
        Me.locked = false;
        Me.layout.panel.enable();
        return;
    }
    Me.imports.src.utils.debug.init();
    Me.monitorsLength = Main.layoutManager.monitors.length;
    // Show a splashscreen while we are updating the UI layout and theme
    if (Main.layoutManager._startingUp) {
        Me.showSplashScreens();
    }
    Me.loaded = false;
    Me.stateManager = new StateManager();
    GLib.idle_add(GLib.PRIORITY_LOW, () => {
        //Then disable incompatibles extensions;
        disableIncompatibleExtensionsModule = new DisableIncompatibleExtensionsModule();

        //Load persistent data
        Me.stateManager.loadRegistry((state) => {
            modules = [new RequiredSettingsModule(), new OverrideModule()];
            Me.tooltipManager = new TooltipManager();
            Me.layoutManager = new LayoutManager();
            Me.msWindowManager = new MsWindowManager();
            Me.msWorkspaceManager = new MsWorkspaceManager(
                state['workspaces-state']
            );
            Me.msNotificationManager = new MsNotificationManager();
            modules = [...modules, (Me.hotKeysModule = new HotKeysModule())];
            Me.msThemeManager = new MsThemeManager();
            Me.msThemeManager.regenerateStylesheet();
            if (getSettings('tweaks').get_boolean('enable-persistence')) {
                Me.msWorkspaceManager.restorePreviousState();
            } else {
                Me.msWorkspaceManager.initState();
            }
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
    Me.msNotificationManager.check();
    if (splashscreenCalled) {
        if (_splashscreenTimeoutId) {
            GLib.source_remove(_splashscreenTimeoutId);
            _splashscreenTimeoutId = 0;
        }
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
            hideSplashScreens();
            return GLib.SOURCE_REMOVE;
        });
    }
    log('--------------------');
    log('END EXTENSION LOADED');
    log('--------------------');
}

// eslint-disable-next-line no-unused-vars
function disable() {
    log('-----------------');
    log('DISABLE EXTENSION');
    log('-----------------');
    if (Main.sessionMode.currentMode === 'unlock-dialog') {
        Me.locked = true;
        Me.layout.panel.disable();
    } else {
        Me.disableInProgress = true;
        if (!modules) return;
        Me.emit('extension-disable');
        modules.reverse().forEach((module) => {
            module.destroy();
        });
        Me.tooltipManager.destroy();
        Me.layoutManager.destroy();
        Me.msWorkspaceManager.destroy();
        Me.msWindowManager.destroy();

        Me.layout.destroy();
        Me.msThemeManager.destroy();
        disableIncompatibleExtensionsModule.destroy();
        Me.stateManager.destroy();
        Me.loaded = false;
        delete Me.disableInProgress;
    }
    log('---------------------');
    log('END DISABLE EXTENSION');
    log('---------------------');
}

function showSplashScreens() {
    log('show splashscreen');
    splashscreenCalled = true;
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
        Main.layoutManager.addChrome(splashscreen);
        splashScreens.push(splashscreen);
    });
    _splashscreenTimeoutId = GLib.timeout_add(
        GLib.PRIORITY_DEFAULT,
        5000,
        () => {
            _splashscreenTimeoutId = 0;
            hideSplashScreens();
            return GLib.SOURCE_REMOVE;
        }
    );
}

function hideSplashScreens() {
    if (splashScreens.length < 1) return;
    splashScreens.forEach((splashscreen) => {
        splashscreen.ease({
            opacity: 0,
            duration: 800,
            transition: 'easeInQuad',
            onComplete: () => {
                Main.layoutManager.removeChrome(splashscreen);
                splashscreen.destroy();
            },
        });
    });
    splashScreens = [];
    splashscreenCalled = false;
}

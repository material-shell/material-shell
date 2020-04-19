const { GLib, St, Clutter, Gio } = imports.gi;
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
const { MsMain } = Me.imports.src.layout.main;

let disableIncompatibleExtensionsModule,
    modules,
    _startupPreparedId,
    monitorChangedId;
let splashscreens = [];
// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    Signals.addSignalMethods(Me);
    global.materialShell = Me;
    Me.showSplashScreens = showSplashScreens;
    Me.hideSplashScreens = hideSplashScreens;
}

// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    Me.showSplashScreens();
    //St.Settings.slow_down_factor(10);
    St.set_slow_down_factor(1);
    monitorChangedId = Main.layoutManager.connect('monitors-changed', () => {
        Me.showSplashScreens();
        disable();
        enable();
    });
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
        log('IDLE_ADD');
        //Then disable incompatibles extensions;
        disableIncompatibleExtensionsModule = new DisableIncompatibleExtensionsModule();
        Me.stateManager.loadRegistry(() => {
            modules = [new RequiredSettingsModule(), new TilingModule()];

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
    Main.uiGroup.add_style_class_name(`dark-theme`);
    Me.msWorkspaceManager.setupInitialState();
    Me.layout = new MsMain();
    Me.msWindowManager.handleExistingMetaWindow();
    /* Me.msWorkspaceManager.init(); */
    Me.loaded = true;
    Me.emit('extension-loaded');
    GLib.timeout_add(GLib.PRIORITY_DEFAULT, 2000, () => {
        hideSplashScreens();
    });
}

// eslint-disable-next-line no-unused-vars
function disable() {
    log('----------------');
    log('DISABLE EXTENSION');
    log('----------------');
    if (!modules) return;
    Main.layoutManager.disconnect(monitorChangedId);
    modules.reverse().forEach((module) => {
        log('Destroy', module);
        module.destroy();
    });
    log('destroy msWorkspaceManager');
    Me.msWorkspaceManager.destroy();
    log('destroy msWindowManager');
    Me.msWindowManager.destroy();

    Me.emit('extension-disable');
    Me.layout.destroy();
    Main.uiGroup.remove_style_class_name(`dark-theme`);
    Me.loaded = false;
}

function showSplashScreens() {
    log('show splashscreen');
    Main.layoutManager.monitors.forEach((monitor) => {
        let icon = new St.Icon({
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/menu-symbolic.svg`
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
        Main.layoutManager.uiGroup.add_child(splashscreen);
        /* Main.layoutManager.uiGroup.set_child_below_sibling(
            splashscreen,
            Main.lookingGlass
        ); */
        splashscreens.push(splashscreen);
    });
    GLib.timeout_add(GLib.PRIORITY_DEFAULT, 4000, () => {
        hideSplashScreens();
    });
}

function hideSplashScreens() {
    splashscreens.forEach((splashscreen, index) => {
        splashscreen.ease({
            opacity: 0,
            duration: 800,
            transition: 'easeInQuad',
            onComplete: () => {
                splashscreen.destroy();
            },
        });
    });
    splashscreens = [];
}

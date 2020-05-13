const { GLib, St, Clutter, Gio } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    DisableIncompatibleExtensionsModule,
} = Me.imports.src.module.disableIncompatibleExtensionsModule;
const { OverrideModule } = Me.imports.src.module.overrideModule;

const { HotKeysModule } = Me.imports.src.module.hotKeysModule;
const { RequiredSettingsModule } = Me.imports.src.module.requiredSettingsModule;
var { TilingManager } = Me.imports.src.manager.tilingManager;
const { ThemeModule } = Me.imports.src.module.themeModule;

const { StateManager } = Me.imports.src.manager.stateManager;
const { MsWindowManager } = Me.imports.src.manager.msWindowManager;
const { MsWorkspaceManager } = Me.imports.src.manager.msWorkspaceManager;
const { MsMain } = Me.imports.src.layout.main;

const { loadInterfaceXML } = imports.misc.fileUtils;
const SystemdLoginManagerIface = loadInterfaceXML(
    'org.freedesktop.login1.Manager'
);
const LoginManager = imports.misc.loginManager;

const SystemdLoginManager = Gio.DBusProxy.makeProxyWrapper(
    SystemdLoginManagerIface
);

const GnomeSession = imports.misc.gnomeSession;

let disableIncompatibleExtensionsModule,
    modules,
    _startupPreparedId,
    monitorChangedId;
let splashscreens = [];

let originalCount, currentCount;
originalCount = currentCount = 0;
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
    //St.set_slow_down_factor(10);
    global.display.connect('closing', () => {
        log('CLOSING');
        Me.closing = true;
    });
    Me.sumChild = sumChild;
}

// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    originalCount = countActors();
    logActorRoutine();
    // Show a splashscreen while we are updating the UI layout and theme
    if (Main.layoutManager._startingUp) {
        Me.showSplashScreens();
    }
    Me.loaded = false;
    Me.stateManager = new StateManager();

    //Delay to wait for others extensions to load first;
    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
        log('IDLE_ADD');
        //Then disable incompatibles extensions;
        disableIncompatibleExtensionsModule = new DisableIncompatibleExtensionsModule();

        //Load persistent data
        Me.stateManager.loadRegistry(() => {
            modules = [new RequiredSettingsModule(), new OverrideModule()];
            Me.tilingManager = new TilingManager();
            Me.msWindowManager = new MsWindowManager();
            Me.msWorkspaceManager = new MsWorkspaceManager();

            modules = [...modules, new HotKeysModule(), new ThemeModule()];
            Me.msWorkspaceManager.setupInitialState();
            Me.layout = new MsMain();
            Main.uiGroup.add_style_class_name(`dark-theme`);
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

    /* Me.msWorkspaceManager.init(); */
    Me.loaded = true;
    Me.emit('extension-loaded');
    // When monitors changed we reload the extension completely by disabling and reenabling it
    monitorChangedId = Main.layoutManager.connect('monitors-changed', () => {
        log('here');
        Me.showSplashScreens();
        disable();
        enable();
    });
    GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
        hideSplashScreens();
    });
}

// eslint-disable-next-line no-unused-vars
function disable() {
    log('----------------');
    log('DISABLE EXTENSION');
    log('----------------');
    Me.disableInProgress = true;
    if (!modules) return;
    Me.emit('extension-disable');
    Main.layoutManager.disconnect(monitorChangedId);
    modules.reverse().forEach((module) => {
        log('Destroy', module);
        module.destroy();
    });
    Me.tilingManager.destroy();
    log('destroy msWorkspaceManager');
    Me.msWorkspaceManager.destroy();
    log('destroy msWindowManager');
    Me.msWindowManager.destroy();

    Me.layout.destroy();
    Main.uiGroup.remove_style_class_name(`dark-theme`);
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

function logActorRoutine() {
    GLib.timeout_add(GLib.PRIORITY_DEFAULT, 2000, () => {
        currentCount = countActors();
        log(
            `ACTORS from ${originalCount.val} to ${currentCount.val} and visible from ${originalCount.visible} to ${currentCount.visible} and mapped from ${originalCount.mapped} to ${currentCount.mapped}`
        );
        //logActorRoutine();
    });
}

function countActors() {
    let count = { val: 0, visible: 0, mapped: 0 };
    sumChild(global.stage, count);
    return count;
}

function sumChild(actor, count) {
    count = count || { val: 0, visible: 0, mapped: 0 };
    count.val += 1;
    if (actor.visible) {
        count.visible += 1;
    }
    if (actor.mapped) {
        count.mapped += 1;
    }
    actor.get_children().forEach((child) => {
        sumChild(child, count);
    });
    return count;
}

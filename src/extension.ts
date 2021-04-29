const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
import { MsMain } from 'src/layout/main';
import { MsOverview } from 'src/layout/overview';
import { LayoutManager } from 'src/manager/layoutManager';
import { MsNotificationManager } from 'src/manager/msNotificationManager';
import { MsThemeManager } from 'src/manager/msThemeManager';
import { MsWindowManager } from 'src/manager/msWindowManager';
import { MsWorkspaceManager } from 'src/manager/msWorkspaceManager';
import { StateManager } from 'src/manager/stateManager';
import { TooltipManager } from 'src/manager/tooltipManager';
/** Extension imports */
import { DisableIncompatibleExtensionsModule } from 'src/module/disableIncompatibleExtensionsModule';
import { HotKeysModule } from 'src/module/hotKeysModule';
import { OverrideModule } from 'src/module/overrideModule';
import { RequiredSettingsModule } from 'src/module/requiredSettingsModule';
import * as debug from 'src/utils/debug';
import { getSettings } from 'src/utils/settings';
import * as St from 'st';
import { polyfillClutter } from './utils/compatibility';

const Main = imports.ui.main;
const Signals = imports.signals;

let disableIncompatibleExtensionsModule: DisableIncompatibleExtensionsModule;
let modules: any[] | undefined;
let _startupPreparedId: number | undefined;
let _splashscreenTimeoutId: number | undefined;
let splashscreenCalled: boolean | undefined;
let splashScreens: St.Bin[] = [];

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    polyfillClutter();
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
    debug.initDebug();
    Me.monitorsLength = Main.layoutManager.monitors.length;
    // Show a splashscreen while we are updating the UI layout and theme
    if (Main.layoutManager._startingUp) {
        Me.showSplashScreens();
    }
    Me.loaded = false;
    Me.stateManager = new StateManager();
    Me.msOverview = new MsOverview();
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

function loaded(disconnect: boolean) {
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
        const icon = new St.Icon({
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/on-dark-small.svg`
            ),
            icon_size: 200,
        });
        const splashscreen = new St.Bin({
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
            mode: Clutter.AnimationMode.EASE_IN_QUAD,
            onComplete: () => {
                Main.layoutManager.removeChrome(splashscreen);
                splashscreen.destroy();
            },
        });
    });
    splashScreens = [];
    splashscreenCalled = false;
}

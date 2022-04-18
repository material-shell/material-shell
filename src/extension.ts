const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
import { MsMain } from 'src/layout/main';
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
import { Async } from './utils/async';
import { polyfillClutter } from './utils/compatibility';
import { main as Main } from 'ui';

const Signals = imports.signals;

let disableIncompatibleExtensionsModule: DisableIncompatibleExtensionsModule;
let modules: { destroy(): void }[] | undefined;
let _startupPreparedId: number | undefined;
let _splashscreenTimeoutId: number | undefined;
let _closingId: number | undefined;
let splashscreenCalled: boolean | undefined;
let splashScreens: St.Bin[] = [];
const oldOverview = Main.overview;

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');

    global.ms = Me;
    Me.showSplashScreens = showSplashScreens;
    Me.hideSplashScreens = hideSplashScreens;
    Me.closing = false;
    Me.locked = false;
    splashscreenCalled = false;
}

// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');

    if (Me.locked) {
        Me.locked = false;
        Me.layout.panel.enable();
        oldOverview.isDummy = true;

        return;
    }
    Signals.addSignalMethods(Me);
    polyfillClutter();
    debug.initDebug();
    _closingId = global.display.connect('closing', () => {
        Me.closing = true;
    });
    Me.monitorsLength = Main.layoutManager.monitors.length;
    // Show a splashscreen while we are updating the UI layout and theme
    if (Main.layoutManager._startingUp) {
        Me.showSplashScreens();
    }
    Me.loaded = false;
    Me.stateManager = new StateManager();

    GLib.idle_add(GLib.PRIORITY_LOW, () => {
        //Then disable incompatibles extensions;
        disableIncompatibleExtensionsModule =
            new DisableIncompatibleExtensionsModule();

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
    if (disconnect && _startupPreparedId !== undefined) {
        Main.layoutManager.disconnect(_startupPreparedId);
    }
    Me.loaded = true;
    Me.locked = false;
    if (oldOverview.visible) oldOverview.toggle();
    oldOverview.isDummy = true;
    Me.emit('extension-loaded');
    Me.msNotificationManager.check();
    if (splashscreenCalled) {
        if (_splashscreenTimeoutId) {
            Async.clearTimeoutId(_splashscreenTimeoutId);
            _splashscreenTimeoutId = 0;
        }
        Async.addTimeout(GLib.PRIORITY_DEFAULT, 1000, hideSplashScreens);
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
        Async.clearAllPendingTimeout();
        if (!modules) return;
        if (_closingId !== undefined) {
            global.display.disconnect(_closingId);
        }
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
    _splashscreenTimeoutId = Async.addTimeout(
        GLib.PRIORITY_DEFAULT,
        5000,
        () => {
            _splashscreenTimeoutId = 0;
            hideSplashScreens();
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

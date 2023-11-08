/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import { MsMain } from 'src/layout/main';
import { LayoutManager } from 'src/manager/layoutManager';
import { MsNotificationManager } from 'src/manager/msNotificationManager';
import { MsThemeManager } from 'src/manager/msThemeManager';
import { MsWindowManager } from 'src/manager/msWindowManager';
import { MsWorkspaceManager } from 'src/manager/msWorkspaceManager';
import { StateManager } from 'src/manager/stateManager';
import { TooltipManager } from 'src/manager/tooltipManager';
/** Extension imports */
import St from 'gi://St';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { DisableIncompatibleExtensionsModule } from 'src/module/disableIncompatibleExtensionsModule';
import { HotKeysModule } from 'src/module/hotKeysModule';
import { OverrideModule } from 'src/module/overrideModule';
import { RequiredSettingsModule } from 'src/module/requiredSettingsModule';
import * as debug from 'src/utils/debug';
import { getSettings } from 'src/utils/settings';
import { Async } from './utils/async';
import { polyfillClutter } from './utils/compatibility';
import { WithSignals } from './utils/gjs';

/* import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension; */

const Signals = imports.signals;

let disableIncompatibleExtensionsModule: DisableIncompatibleExtensionsModule;
let modules: { destroy(): void }[] | undefined;
let _startupPreparedId: number | undefined;
let _splashscreenTimeoutId: number | undefined;
let _closingId: number | undefined;
let splashscreenCalled: boolean | undefined;
let splashScreens: St.Bin[] = [];
const oldOverview = Main.overview;

export default class MaterialShellExtension
    extends Extension
    implements WithSignals
{
    disableInProgress: boolean | undefined;
    emit(name: string, ...params: any[]): void {
        throw new Error('Method not implemented.');
    }
    connect(name: string, callback: (...params: any[]) => void): number {
        throw new Error('Method not implemented.');
    }
    disconnect(id: number): void {
        throw new Error('Method not implemented.');
    }

    closing = false;
    locked = false;
    splashscreenCalled = false;
    layoutManager?: LayoutManager;
    tooltipManager?: TooltipManager;
    msWindowManager?: MsWindowManager;
    msWorkspaceManager?: MsWorkspaceManager;
    msNotificationManager?: MsNotificationManager;
    msThemeManager?: MsThemeManager;
    hotKeysModule?: HotKeysModule;
    monitorsLength?: number;
    loaded = false;
    reparentInProgress?: boolean;
    stateManager?: StateManager;
    layout?: MsMain;

    override enable(): void {
        log('----------------');
        log('ENABLE EXTENSION');
        log('----------------');
        global.ms = this;

        if (this.locked) {
            this.locked = false;
            this.layout?.panel.enable();
            oldOverview.isDummy = true;

            return;
        }
        polyfillClutter();
        debug.initDebug();
        _closingId = global.display.connect('closing', () => {
            this.closing = true;
        });
        this.monitorsLength = Main.layoutManager.monitors.length;
        // Show a splashscreen while we are updating the UI layout and theme
        if (Main.layoutManager._startingUp) {
            this.showSplashScreens();
        }
        this.loaded = false;
        this.stateManager = new StateManager();

        GLib.idle_add(GLib.PRIORITY_LOW, () => {
            //Then disable incompatibles extensions;
            disableIncompatibleExtensionsModule =
                new DisableIncompatibleExtensionsModule();

            //Load persistent data
            this.stateManager?.loadRegistry((state) => {
                modules = [new RequiredSettingsModule(), new OverrideModule()];
                this.tooltipManager = new TooltipManager();
                this.layoutManager = new LayoutManager();
                this.msWindowManager = new MsWindowManager();
                this.msWorkspaceManager = new MsWorkspaceManager(
                    state['workspaces-state']
                );
                this.msNotificationManager = new MsNotificationManager();
                modules = [
                    ...modules,
                    (this.hotKeysModule = new HotKeysModule()),
                ];
                this.msThemeManager = new MsThemeManager();
                this.msThemeManager.regenerateStylesheet();
                if (getSettings('tweaks').get_boolean('enable-persistence')) {
                    this.msWorkspaceManager.restorePreviousState();
                } else {
                    this.msWorkspaceManager.initState();
                }
                new MsMain();
                this.msWindowManager.handleExistingMetaWindows();
                if (Main.layoutManager._startingUp) {
                    _startupPreparedId = Main.layoutManager.connect(
                        'startup-complete',
                        () => this.load(true)
                    );
                } else {
                    this.load(false);
                }
            });
            return GLib.SOURCE_REMOVE;
        });
    }

    override disable(): void {
        log('-----------------');
        log('DISABLE EXTENSION');
        log('-----------------');
        if (Main.sessionMode.currentMode === 'unlock-dialog') {
            this.locked = true;
            this.layout?.panel.disable();
        } else {
            this.disableInProgress = true;
            Async.clearAllPendingTimeout();
            if (!modules) return;
            if (_closingId !== undefined) {
                global.display.disconnect(_closingId);
            }
            this.emit('extension-disable');
            modules.reverse().forEach((module) => {
                module.destroy();
            });
            this.tooltipManager?.destroy();
            this.layoutManager?.destroy();
            this.msWorkspaceManager?.destroy();
            this.msWindowManager?.destroy();

            this.layout?.destroy();
            this.msThemeManager?.destroy();
            disableIncompatibleExtensionsModule.destroy();
            this.stateManager?.destroy();
            this.loaded = false;
            delete this.disableInProgress;
        }
        log('---------------------');
        log('END DISABLE EXTENSION');
        log('---------------------');
    }

    load(disconnect: boolean) {
        log('----------------');
        log('EXTENSION LOADED');
        log('----------------');
        if (disconnect && _startupPreparedId !== undefined) {
            Main.layoutManager.disconnect(_startupPreparedId);
        }
        this.loaded = true;
        this.locked = false;
        if (oldOverview.visible) oldOverview.toggle();
        oldOverview.isDummy = true;
        this.emit('extension-loaded');
        this.msNotificationManager?.check();
        if (splashscreenCalled) {
            if (_splashscreenTimeoutId) {
                Async.clearTimeoutId(_splashscreenTimeoutId);
                _splashscreenTimeoutId = 0;
            }
            Async.addTimeout(GLib.PRIORITY_DEFAULT, 1000, () => {
                this.hideSplashScreens();
                return GLib.SOURCE_REMOVE;
            });
        }
        log('--------------------');
        log('END EXTENSION LOADED');
        log('--------------------');
    }

    showSplashScreens() {
        log('show splashscreen');
        splashscreenCalled = true;
        Main.layoutManager.monitors.forEach((monitor) => {
            const icon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${this.metadata.path}/assets/icons/on-dark-small.svg`
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
                this.hideSplashScreens();
                return GLib.SOURCE_REMOVE;
            }
        );
    }

    hideSplashScreens() {
        if (splashScreens.length < 1) return GLib.SOURCE_REMOVE;
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

    log(...args: any[]) {
        throw new Error('Method not implemented.');
    }
    logWithStackTrace(...args: any[]) {
        throw new Error('Method not implemented.');
    }
    logFocus(...args: any[]) {
        throw new Error('Method not implemented.');
    }
    logBlank() {
        throw new Error('Method not implemented.');
    }
}
Signals.addSignalMethods(MaterialShellExtension.prototype);

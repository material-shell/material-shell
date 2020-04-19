const { Shell, Meta, St, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { MsManager } = Me.imports.src.manager.msManager;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { MsDndManager } = Me.imports.src.manager.msDndManager;
const { AddLogToFunctions } = Me.imports.src.utils.debug;
/* exported MsWindowManager */
var MsWindowManager = class MsWindowManager extends MsManager {
    constructor() {
        super();
        AddLogToFunctions(this);
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWindowList = [];
        this.msWindowWaitingForMetaWindowList = [];
        this.metaWindowFocused = null;
        this.msDndManager = new MsDndManager(this);
        this.signals = [];
        this.metaWindowWaitForAppList = [];
        this.observe(global.display, 'window-created', (_, metaWindow) => {
            this.onNewMetaWindow(metaWindow);
        });

        this.observe(global.display, 'notify::focus-window', (_) => {
            this.onFocusMetaWindow(global.display.focus_window);
        });

        this.observe(this.windowTracker, 'tracked-windows-changed', () => {
            log(
                'tracked-windows-changed',
                this.metaWindowWaitForAppList.length
            );
            this.metaWindowWaitForAppList.forEach((metaWindow, index) => {
                let app = this.windowTracker.get_window_app(metaWindow);
                if (app && !app.is_window_backed()) {
                    this.metaWindowWaitForAppList.splice(index, 1);
                    this.onNewMetaWindow(metaWindow);
                }
            });
        });
    }

    handleExistingMetaWindow() {
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow = windowActor.metaWindow;
            metaWindow.firstFrameDrawn = true;
            if (this._handleWindow(metaWindow)) {
                let msWindow = this.msWindowList.find((msWindow) => {
                    return (
                        msWindow.metaWindowIdentifier ===
                        this.buildMetaWindowIdentifier(metaWindow)
                    );
                });
                if (msWindow) {
                    return msWindow.setWindow(metaWindow);
                }
            }
            this.onNewMetaWindow(metaWindow);
        });
        this.onFocusMetaWindow(global.display.focus_window);
    }

    onNewMetaWindow(metaWindow) {
        metaWindow.get_compositor_private().connect('first-frame', (params) => {
            metaWindow.firstFrameDrawn = true;
        });
        if (!this._handleWindow(metaWindow)) {
            return Me.layout.msWorkspaceContainer.setActorAbove(
                metaWindow.get_compositor_private()
            );
        }
        if (metaWindow.handledByMaterialShell) return;

        let app = this.windowTracker.get_window_app(metaWindow);
        if (app.is_window_backed()) {
            log('add to wait for app list');
            return this.metaWindowWaitForAppList.push(metaWindow);
        }
        log(app.get_id());
        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        metaWindow.connect('unmanaged', () => {
            this.onMetaWindowUnManaged(metaWindow);
        });
        if (!this.isMetaWindowDialog(metaWindow)) {
            const existingEmptyMsWindow = this.findBestEmptyMsWindow(app);
            if (existingEmptyMsWindow) {
                return existingEmptyMsWindow.setWindow(metaWindow);
            }
        }

        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            log('IDLE_ADD');
            const msWindow = this.createNewMsWindow(
                app.get_id(),
                this.buildMetaWindowIdentifier(metaWindow),
                metaWindow
            );
            Me.msWorkspaceManager.addWindowToAppropriateMsWorkspace(msWindow);
        });
    }

    onMetaWindowUnManaged(metaWindow) {
        if (metaWindow.msWindow) {
            const msWindow = metaWindow.msWindow;
            if (!msWindow.isDialog) return;
            msWindow.msWorkspace.removeMsWindow(this);
            msWindow.destroy();
        }
    }

    createNewMsWindow(appId, description, metaWindow) {
        let appSys = Shell.AppSystem.get_default();
        const app = appSys.lookup_app(appId);
        if (!app) {
            log('unable to get app from id:', appId);
            return;
        }
        let msWindow = new MsWindow(app, description, metaWindow);
        msWindow.connect('request-new-meta-window', () => {
            this.openAppForMsWindow(msWindow);
        });
        msWindow.connect('destroy', () => {
            log('msWindowManager connected to MsWindowDestroy');
            this.msWindowList.splice(this.msWindowList.indexOf(msWindow), 1);
        });
        this.msWindowList.push(msWindow);
        this.emit('ms-window-created', msWindow);
        return msWindow;
    }

    findBestEmptyMsWindow(app) {
        const msWindowWaitingForApp = this.msWindowWaitingForMetaWindowList.filter(
            (msWindow) => {
                return msWindow.app.get_id() === app.get_id();
            }
        )[0];
        if (msWindowWaitingForApp) {
            this.msWindowWaitingForMetaWindowList.splice(
                this.msWindowWaitingForMetaWindowList.indexOf(
                    msWindowWaitingForApp
                ),
                1
            );
            return msWindowWaitingForApp;
        }
        const emptyMsWindowListOfApp = this.msWindowList.filter((msWindow) => {
            return (
                !msWindow.metaWindow && msWindow.app.get_id() === app.get_id()
            );
        });
        if (!emptyMsWindowListOfApp.length) return;

        const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
        const emptyMsWindowOfCurrentWorkspace = emptyMsWindowListOfApp.filter(
            (msWindow) => {
                return msWindow.msWorkspace === activeMsWorkspace;
            }
        );

        return emptyMsWindowOfCurrentWorkspace[0] || emptyMsWindowListOfApp[0];
    }

    onFocusMetaWindow(metaWindow) {
        /*
             If the current msWorkspace focused window actor is inaccessible it's mean that this notify is the was automatically made by gnome-shell to try to focus previous window
             We want to prevent this in order to handle it ourselves to select the next one instead of the previous.
            */
        if (
            this.metaWindowFocused &&
            !this.metaWindowFocused.get_compositor_private()
        ) {
            return;
        }

        if (!metaWindow) return;

        if (metaWindow.is_attached_dialog()) {
            metaWindow = metaWindow.get_transient_for();
        }
        this.metaWindowFocused = metaWindow;
        if (metaWindow.msWindow && !metaWindow.msWindow.isDialog) {
            this.emit('ms-window-focused', metaWindow.msWindow);
        }
    }

    openAppForMsWindow(msWindow) {
        this.msWindowWaitingForMetaWindowList.push(msWindow);
        let workspaceIndex = Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
            msWindow.msWorkspace
        );
        msWindow.app.open_new_window(workspaceIndex);
    }

    _handleWindow(metaWindow) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(metaWindow.window_type);
    }

    isMetaWindowDialog(metaWindow) {
        let dialogTypes = [
            Meta.WindowType.DIALOG,
            Meta.WindowType.MODAL_DIALOG,
            Meta.WindowType.UTILITY,
        ];
        return (
            dialogTypes.includes(metaWindow.window_type) ||
            !metaWindow.resizeable ||
            (metaWindow.get_transient_for() != null && metaWindow.skip_taskbar)
        );
    }

    buildMetaWindowIdentifier(metaWindow) {
        return `${metaWindow.get_wm_class_instance()}-${metaWindow.get_pid()}-${metaWindow.get_stable_sequence()}`;
    }
};
Signals.addSignalMethods(MsWindowManager.prototype);

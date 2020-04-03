const { Shell, Meta, St, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;

const { MsWindow } = Me.imports.src.materialShell.msWorkspace.msWindow;
const { MsDndManager } = Me.imports.src.manager.msDndManager;

/* exported MsWindowManager */
var MsWindowManager = class MsWindowManager {
    constructor() {
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWindowList = [];
        this.msWindowWaitingForMetaWindowList = [];
        this.metaWindowFocused = null;
        this.msDndManager = new MsDndManager(this);
        this.signals = [];

        this.signals.push({
            from: global.display,
            id: global.display.connect('window-created', (_, metaWindow) => {
                this.onNewMetaWindow(metaWindow);
            })
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect('notify::focus-window', _ => {
                this.onFocusMetaWindow(global.display.focus_window);
            })
        });
    }

    init() {
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            global.get_window_actors().forEach(windowActor => {
                const metaWindow = windowActor.metaWindow;
                if (this._handleWindow(metaWindow)) {
                    let msWindow = this.msWindowList.find(msWindow => {
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
        });
    }

    destroy() {}

    onNewMetaWindow(metaWindow) {
        if (!this._handleWindow(metaWindow)) {
            return Me.msWorkspaceManager.msWorkspaceContainer.setActorAbove(
                metaWindow.get_compositor_private()
            );
        }

        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        metaWindow.connect('unmanaged', () => {
            if (metaWindow.msWindow) {
                const msWindow = metaWindow.msWindow;
                if (!msWindow.isDialog) return;
                msWindow.kill();
            }
        });
        let app = this.windowTracker.get_window_app(metaWindow);
        if (!this.isMetaWindowDialog(metaWindow)) {
            const existingEmptyMsWindow = this.findBestEmptyMsWindow(app);
            if (existingEmptyMsWindow) {
                return existingEmptyMsWindow.setWindow(metaWindow);
            }
        }

        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            const msWindow = this.createNewMsWindow(
                app.get_id(),
                this.buildMetaWindowIdentifier(metaWindow),
                metaWindow
            );
            Me.msWorkspaceManager.addWindowToAppropriateMsWorkspace(msWindow);
        });
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
            this.msWindowList.splice(this.msWindowList.indexOf(msWindow), 1);
        });
        this.msWindowList.push(msWindow);
        this.emit('ms-window-created', msWindow);
        return msWindow;
    }

    findBestEmptyMsWindow(app) {
        const msWindowWaitingForApp = this.msWindowWaitingForMetaWindowList.filter(
            msWindow => {
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
        const emptyMsWindowListOfApp = this.msWindowList.filter(msWindow => {
            return (
                !msWindow.metaWindow && msWindow.app.get_id() === app.get_id()
            );
        });
        if (!emptyMsWindowListOfApp.length) return;

        const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
        const emptyMsWindowOfCurrentWorkspace = emptyMsWindowListOfApp.filter(
            msWindow => {
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
        msWindow.app.open_new_window(
            Me.msWorkspaceManager
                .getWorkspaceOfMsWorkspace(msWindow.msWorkspace)
                .index()
        );
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
            Meta.WindowType.UTILITY
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

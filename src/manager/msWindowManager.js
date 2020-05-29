const { Shell, Meta, St, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { MsManager } = Me.imports.src.manager.msManager;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { MsDndManager } = Me.imports.src.manager.msDndManager;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;
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
        this.metaWindowWaitingForAppList = [];
        this.observe(global.display, 'window-created', (_, metaWindow) => {
            this.onNewMetaWindow(metaWindow);
        });

        this.observe(global.display, 'notify::focus-window', (_) => {
            this.onFocusMetaWindow(global.display.focus_window);
        });

        /* this.observe(this.windowTracker, 'tracked-windows-changed', () => {
            this.metaWindowWaitingForAppList.forEach((metaWindow, index) => {
                let app = this.windowTracker.get_window_app(metaWindow);
                if (app && !app.is_window_backed()) {
                    this.metaWindowWaitingForAppList.splice(index, 1);
                    this.onNewMetaWindow(metaWindow);
                }
            });
        }); */
    }

    handleExistingMetaWindow() {
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow = windowActor.metaWindow;
            metaWindow.firstFrameDrawn = true;
            log(metaWindow.get_title());
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
        if (Me.disableInProgress) return;

        metaWindow.get_compositor_private().connect('first-frame', (params) => {
            metaWindow.firstFrameDrawn = true;
        });
        if (!this._handleWindow(metaWindow)) {
            return Me.layout.setActorAbove(metaWindow.get_compositor_private());
        }
        if (metaWindow.handledByMaterialShell) return;

        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        metaWindow.connect('unmanaged', (test, test2, test3) => {
            log('unmanaged', test, test2, test3);
            this.onMetaWindowUnManaged(metaWindow);
        });

        return this.setMetaWindowAsWaitingForAssignation(metaWindow);
    }

    onMetaWindowUnManaged(metaWindow) {
        if (Me.disableInProgress || Me.closing) return;
        if (
            metaWindow.msWindow &&
            metaWindow.msWindow.metaWindow === metaWindow
        ) {
            const msWindow = metaWindow.msWindow;
            //if (!msWindow.isDialog) return;
            /* msWindow.msWorkspace.removeMsWindow(this);
            msWindow.destroy(); */
            //msWindow.unsetWindow();
            logFocus('onMetaWindowUnManaged kill');

            msWindow.kill();
        }
    }

    createNewMsWindow(appId, description, metaWindow) {
        let appSys = Shell.AppSystem.get_default();
        const app =
            appSys.lookup_app(appId) ||
            (metaWindow && this.windowTracker.get_window_app(metaWindow));
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

    //Sometime metaWindow don't have the app at start so we try to wait a bit to assign correctly the window.
    setMetaWindowAsWaitingForAssignation(metaWindow) {
        log('add to wait for app list');

        this.metaWindowWaitingForAppList.push({
            timestamp: Date.now(),
            metaWindow,
        });

        this.checkWindowsForAssignations();
    }

    setMsWindowAsWaitingForMetaWindow(msWindow) {
        this.msWindowWaitingForMetaWindowList.push({
            timestamp: Date.now(),
            msWindow,
            checked: false,
        });

        this.checkWindowsForAssignations();
    }

    checkWindowsForAssignations() {
        const timestamp = Date.now();
        log('checkWindowsForAssignations', timestamp, Date.now());
        this.metaWindowWaitingForAppList.forEach((waitingMetaWindow) => {
            let app = this.windowTracker.get_window_app(
                waitingMetaWindow.metaWindow
            );

            let msWindowFound = null;
            log('window_type', waitingMetaWindow.metaWindow.window_type);
            log('window_class', waitingMetaWindow.metaWindow.get_wm_class());
            log(
                'metaWindow.firstFrameDrawn',
                waitingMetaWindow.metaWindow.firstFrameDrawn
            );

            // If window is dialog try ti find his parent
            if (this.isMetaWindowDialog(waitingMetaWindow.metaWindow)) {
                // The best way to find it's parent it with the root ancestor.
                let root = waitingMetaWindow.metaWindow.find_root_ancestor();
                logFocus('search for root', root);
                if (root != waitingMetaWindow.metaWindow && root.msWindow) {
                    msWindowFound = root.msWindow;
                } else {
                    // But sometime the we failed to found one.
                    // So we try to find a regular window with the same app
                    let sameAppMsWindowList = this.msWindowList.filter(
                        (msWindow) => {
                            return msWindow.app.get_id() === app.get_id();
                        }
                    );
                    //We take the msWindow focused the last
                    sameAppMsWindowList.forEach((msWindow) => {
                        if (
                            !msWindowFound ||
                            msWindowFound.metaWindow.get_user_time() <
                                msWindow.metaWindow.get_user_time()
                        ) {
                            msWindowFound = msWindow;
                        }
                    });
                }
            }

            if (!msWindowFound) {
                // First check among the msWindow waiting for an App to be opened
                this.msWindowWaitingForMetaWindowList.forEach(
                    (waitingMsWindow) => {
                        waitingMsWindow.checked = true;
                        if (
                            !msWindowFound &&
                            waitingMsWindow.msWindow.app.get_id() ===
                                app.get_id()
                        ) {
                            msWindowFound = waitingMsWindow.msWindow;
                            this.msWindowWaitingForMetaWindowList.splice(
                                this.msWindowWaitingForMetaWindowList.indexOf(
                                    waitingMsWindow
                                ),
                                1
                            );
                        }
                    }
                );
            }

            if (!msWindowFound) {
                //Then check among empty msWindows
                const emptyMsWindowListOfApp = this.msWindowList.filter(
                    (msWindow) => {
                        return (
                            !msWindow.metaWindow &&
                            msWindow.app.get_id() === app.get_id()
                        );
                    }
                );
                if (emptyMsWindowListOfApp.length) {
                    const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                    msWindowFound = emptyMsWindowListOfApp.filter(
                        (msWindow) => {
                            return msWindow.msWorkspace === activeMsWorkspace;
                        }
                    )[0];
                    if (!msWindowFound) {
                        msWindowFound = emptyMsWindowListOfApp[0];
                    }
                }
            }

            if (msWindowFound) {
                if (this.isMetaWindowDialog(waitingMetaWindow.metaWindow)) {
                    msWindowFound.addDialog(waitingMetaWindow.metaWindow);
                } else {
                    msWindowFound.setWindow(waitingMetaWindow.metaWindow);
                }
            } else {
                let app = this.windowTracker.get_window_app(
                    waitingMetaWindow.metaWindow
                );
                log(
                    'metaWindow waiting since',
                    timestamp - waitingMetaWindow.timestamp,
                    app.is_window_backed()
                );
                if (
                    (waitingMetaWindow.metaWindow.firstFrameDrawn &&
                        !app.is_window_backed()) ||
                    timestamp - waitingMetaWindow.timestamp > 2000
                ) {
                    const msWindow = this.createNewMsWindow(
                        app.get_id(),
                        this.buildMetaWindowIdentifier(
                            waitingMetaWindow.metaWindow
                        ),
                        waitingMetaWindow.metaWindow
                    );
                    Me.msWorkspaceManager.addWindowToAppropriateMsWorkspace(
                        msWindow
                    );
                }
            }
        });
        this.metaWindowWaitingForAppList = this.metaWindowWaitingForAppList.filter(
            (waitingMetaWindow) => {
                return !waitingMetaWindow.metaWindow.msWindow;
            }
        );

        this.msWindowWaitingForMetaWindowList.forEach((waitingMsWindow) => {
            log(
                'msWindow waiting since',
                timestamp - waitingMsWindow.timestamp
            );

            if (
                (waitingMsWindow.checked &&
                    timestamp - waitingMsWindow.timestamp > 2000) ||
                timestamp - waitingMsWindow.timestamp > 5000
            ) {
                waitingMsWindow.msWindow.kill();
                this.msWindowWaitingForMetaWindowList.splice(
                    this.msWindowWaitingForMetaWindowList.indexOf(
                        waitingMsWindow
                    ),
                    1
                );
            }
        });
        if (
            this.metaWindowWaitingForAppList.length ||
            this.msWindowWaitingForMetaWindowList.length
        ) {
            if (this.checkInProgress) return;
            this.checkInProgress = true;
            GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
                this.checkInProgress = false;
                this.checkWindowsForAssignations();
            });
        }
    }

    onFocusMetaWindow(metaWindow) {
        if (Me.disableInProgress || Me.closing) return;
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
        this.setMsWindowAsWaitingForMetaWindow(msWindow);
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
            (metaWindow.get_transient_for() != null && metaWindow.skip_taskbar)
        );
    }

    buildMetaWindowIdentifier(metaWindow) {
        return `${metaWindow.get_wm_class_instance()}-${metaWindow.get_pid()}-${metaWindow.get_stable_sequence()}`;
    }

    destroy() {
        super.destroy();
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow = windowActor.metaWindow;
            if (metaWindow.handledByMaterialShell)
                delete metaWindow.handledByMaterialShell;
        });
    }
};
Signals.addSignalMethods(MsWindowManager.prototype);

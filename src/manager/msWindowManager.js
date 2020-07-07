const { Shell, Meta, St, GLib } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { MsManager } = Me.imports.src.manager.msManager;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { MsDndManager } = Me.imports.src.manager.msDndManager;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;
const { getSettings } = Me.imports.src.utils.settings;

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
        this.metaWindowWaitingForAssignationList = [];
        this.observe(global.display, 'window-created', (_, metaWindow) => {
            this.onNewMetaWindow(metaWindow);
        });

        this.observe(global.display, 'notify::focus-window', (_) => {
            this.onFocusMetaWindow(global.display.focus_window);
        });

        this.observe(
            global.display,
            'window-demands-attention',
            (_, metaWindow) => {
                logFocus('window-demands-attention', metaWindow);
            }
        );

        this.observe(
            global.display,
            'window-marked-urgent',
            (_, metaWindow) => {
                logFocus('window-marked-urgent', metaWindow);
            }
        );
    }

    handleExistingMetaWindow() {
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow = windowActor.metaWindow;
            metaWindow.firstFrameDrawn = true;
            metaWindow.createdAt = metaWindow.user_time;

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
        metaWindow.createdAt = metaWindow.user_time;
        metaWindow.get_compositor_private().connect('first-frame', (params) => {
            metaWindow.firstFrameDrawn = true;
        });

        if (!this._handleWindow(metaWindow)) {
            /* return Me.layout.setActorAbove(metaWindow.get_compositor_private()); */
            global.window_group.remove_child(
                metaWindow.get_compositor_private()
            );
            return global.top_window_group.add_child(
                metaWindow.get_compositor_private()
            );
        }
        if (metaWindow.handledByMaterialShell) return;

        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        metaWindow.connect('unmanaged', () => {
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
            msWindow.kill();
        }
    }

    createNewMsWindow(
        appId,
        description,
        metaWindow,
        persistent,
        initialAllocation
    ) {
        let appSys = Shell.AppSystem.get_default();
        const app =
            appSys.lookup_app(appId) ||
            (metaWindow && this.windowTracker.get_window_app(metaWindow));
        if (!app) {
            log('unable to get app from id:', appId);
            return;
        }
        let msWindow = new MsWindow(
            app,
            description,
            metaWindow,
            persistent,
            initialAllocation
        );
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

    setMetaWindowAsWaitingForAssignation(metaWindow) {
        this.metaWindowWaitingForAssignationList.push({
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
        logFocus('checkWindowsForAssignations', timestamp, Date.now());

        // For every waiting Window we do
        this.metaWindowWaitingForAssignationList.forEach(
            (waitingMetaWindow) => {
                let app = this.windowTracker.get_window_app(
                    waitingMetaWindow.metaWindow
                );

                let msWindowFound = null;
                // If window is dialog try t0 find his parent
                if (this.isMetaWindowDialog(waitingMetaWindow.metaWindow)) {
                    // The best way to find it's parent it with the root ancestor.
                    let root = waitingMetaWindow.metaWindow.find_root_ancestor();
                    logFocus('search for root', root);
                    if (root != waitingMetaWindow.metaWindow && root.msWindow) {
                        msWindowFound = root.msWindow;
                    } else if (app) {
                        // But sometime the we failed to found one.
                        // So we try to find a regular window with the same app
                        let sameAppMsWindowList = this.msWindowList.filter(
                            (msWindow) => {
                                return (
                                    msWindow.metaWindow &&
                                    msWindow.app.get_id() === app.get_id()
                                );
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
                logFocus(
                    'after dialog parent search msWindowFound',
                    msWindowFound
                );

                if (!msWindowFound) {
                    // First check among the msWindow waiting for an App to be opened
                    this.msWindowWaitingForMetaWindowList.some(
                        (waitingMsWindow) => {
                            waitingMsWindow.checked = true;
                            if (
                                app &&
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
                            return msWindowFound;
                        }
                    );
                }
                logFocus(
                    'after search among the msWindow waiting  msWindowFound',
                    msWindowFound
                );

                if (!msWindowFound && !app) {
                    return;
                }

                if (!msWindowFound) {
                    //Then check among empty msWindows
                    const emptyMsWindowListOfApp = this.msWindowList.filter(
                        (msWindow) => {
                            return (
                                !msWindow._metaWindow &&
                                msWindow.app.get_id() === app.get_id()
                            );
                        }
                    );
                    if (emptyMsWindowListOfApp.length) {
                        const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                        msWindowFound = emptyMsWindowListOfApp.filter(
                            (msWindow) => {
                                return (
                                    msWindow.msWorkspace === activeMsWorkspace
                                );
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
            }
        );

        // Remove assigned window for the waiting for assignation list
        this.metaWindowWaitingForAssignationList = this.metaWindowWaitingForAssignationList.filter(
            (waitingMetaWindow) => {
                return !waitingMetaWindow.metaWindow.msWindow;
            }
        );

        // Remove MsWindow waiting for too much time. We probably missed the window awaited.
        this.msWindowWaitingForMetaWindowList.forEach((waitingMsWindow) => {
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

        // Reschedule the next assignation check
        if (
            this.metaWindowWaitingForAssignationList.length ||
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
        logFocus('onFocusMetaWindow', metaWindow);
        if (Me.disableInProgress || Me.closing) return;
        /*
             If the current msWorkspace focused window actor is inaccessible it's mean that this notify is the was automatically made by gnome-shell to try to focus previous window
             We want to prevent this in order to handle it ourselves to select the next one instead of the previous.
            */
        if (
            this.metaWindowFocused &&
            !this.metaWindowFocused.get_compositor_private()
        ) {
            this.metaWindowFocused = global.display.focus_window;
            return;
        }

        if (!metaWindow) return;

        logFocus(metaWindow.msWindow);
        if (metaWindow.msWindow) {
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
        if (
            getSettings('layouts')
                .get_string('windows-excluded')
                .split(',')
                .indexOf(metaWindow.wm_class) > -1
        ) {
            return false;
        }
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
            (metaWindow.get_transient_for() != null &&
                metaWindow.skip_taskbar) ||
            !metaWindow.resizeable
        );
    }

    buildMetaWindowIdentifier(metaWindow) {
        return `${metaWindow.get_wm_class_instance()}-${metaWindow.get_pid()}-${metaWindow.get_stable_sequence()}`;
    }

    destroy() {
        super.destroy();
        this.msDndManager.destroy();
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow = windowActor.metaWindow;
            if (metaWindow.handledByMaterialShell)
                delete metaWindow.handledByMaterialShell;
        });
    }
};
Signals.addSignalMethods(MsWindowManager.prototype);

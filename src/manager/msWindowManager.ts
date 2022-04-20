/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GLib from 'glib';
import * as Meta from 'meta';
import * as Shell from 'shell';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';
import { MsDndManager } from 'src/manager/msDndManager';
import { MsFocusManager } from 'src/manager/msFocusManager';
import { MsManager } from 'src/manager/msManager';
import { MsResizeManager } from 'src/manager/msResizeManager';
import { Rectangular } from 'src/types/mod';
import { Async } from 'src/utils/async';
import { getSettings } from 'src/utils/settings';
const Signals = imports.signals;
const Me = imports.misc.extensionUtils.getCurrentExtension();

export type MetaWindowWithMsProperties = Meta.Window & {
    createdAt?: number;
    firstFrameDrawn?: boolean;
    handledByMaterialShell?: boolean;
    msWindow?: MsWindow;
    titleBarVisible?: boolean;
};

export type MetaWindowActorWithMsProperties = Meta.WindowActor & {
    lastResize: number;
};

export type MsWindowManagerType = InstanceType<typeof MsWindowManager>;
export class MsWindowManager extends MsManager {
    windowTracker: any;
    msWindowWaitingForMetaWindowList: {
        timestamp: number;
        msWindow: MsWindow;
        checked: boolean;
    }[];
    msWindowList: MsWindow[];
    metaWindowFocused: null; // TODO: Remove?
    msDndManager: MsDndManager;
    msResizeManager: MsResizeManager;
    msFocusManager: MsFocusManager;
    signals: any[];
    metaWindowWaitingForAssignationList: {
        timestamp: number,
        metaWindow: MetaWindowWithMsProperties,
    }[];
    checkInProgress: boolean | undefined;

    constructor() {
        super();

        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWindowList = [];
        this.msWindowWaitingForMetaWindowList = [];
        this.metaWindowFocused = null;
        this.msDndManager = new MsDndManager(this);
        this.msResizeManager = new MsResizeManager(this);
        this.msFocusManager = new MsFocusManager(this);
        this.signals = [];
        this.metaWindowWaitingForAssignationList = [];
        this.observe(global.display, 'window-created', (_, metaWindow) => {
            this.onNewMetaWindow(metaWindow);
        });

        this.observe(
            global.window_manager,
            'size-changed',
            (wm, actor: MetaWindowActorWithMsProperties) => {
                actor.lastResize = Date.now();
            }
        );
    }

    handleExistingMetaWindow() {
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow =
                windowActor.metaWindow as MetaWindowWithMsProperties;
            metaWindow.firstFrameDrawn = true;
            metaWindow.createdAt = metaWindow.user_time;
            if (metaWindow.msWindow) delete metaWindow.msWindow;
            if (this._handleWindow(metaWindow)) {
                const msWindow = this.msWindowList.find((msWindow) => {
                    return (
                        msWindow.metaWindowIdentifier ===
                        this.buildMetaWindowIdentifier(metaWindow)
                    );
                });
                if (msWindow) {
                    metaWindow.handledByMaterialShell = true;
                    return msWindow.setWindow(metaWindow);
                }
            }
            this.onNewMetaWindow(metaWindow);
        });
    }

    onNewMetaWindow(
        metaWindow: MetaWindowWithMsProperties
    ) {
        if (Me.disableInProgress) return;
        metaWindow.createdAt = metaWindow.user_time;
        metaWindow
            .get_compositor_private<Meta.WindowActor>()
            .connect('first-frame', (_params) => {
                metaWindow.firstFrameDrawn = true;
            });

        if (!this._handleWindow(metaWindow)) {
            /* return Me.layout.setActorAbove(metaWindow.get_compositor_private<
                    Meta.WindowActor
                >()); */
            const actor = metaWindow.get_compositor_private<Clutter.Actor>();
            if (actor.get_parent() != global.top_window_group) {
                actor
                    .get_parent()
                    .remove_child(
                        metaWindow.get_compositor_private<Meta.WindowActor>()
                    );
                global.top_window_group.add_child(
                    metaWindow.get_compositor_private<Meta.WindowActor>()
                );
            }

            return;
        }

        if (metaWindow.handledByMaterialShell) return;

        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        metaWindow.connect('unmanaged', () => {
            this.onMetaWindowUnManaged(metaWindow);
        });

        return this.setMetaWindowAsWaitingForAssignation(metaWindow);
    }

    onMetaWindowUnManaged(metaWindow: MetaWindowWithMsProperties) {
        if (Me.disableInProgress || Me.closing) return;
        if (
            this.metaWindowWaitingForAssignationList
                .map((o) => o.metaWindow)
                .includes(metaWindow)
        ) {
            this.metaWindowWaitingForAssignationList.splice(
                this.metaWindowWaitingForAssignationList
                    .map((o) => o.metaWindow)
                    .indexOf(metaWindow),
                1
            );
        }
        if (metaWindow.msWindow) {
            const msWindow = metaWindow.msWindow;
            msWindow.metaWindowUnManaged(metaWindow);
        }
    }

    createNewMsWindow(
        appId: string,
        description: string | null,
        metaWindow: MetaWindowWithMsProperties | null,
        msWorkspace: {
            msWorkspace: MsWorkspace;
            focus: boolean;
            insert: boolean;
        },
        persistent?: boolean,
        initialAllocation?: Rectangular
    ) {
        const appSys = Shell.AppSystem.get_default();
        const app: Shell.App =
            appSys.lookup_app(appId) ||
            (metaWindow && this.windowTracker.get_window_app(metaWindow));
        if (!app) {
            return;
        }
        const msWindow = new MsWindow({
            app,
            metaWindowIdentifier: description,
            metaWindow,
            persistent,
            initialAllocation,
            msWorkspace: msWorkspace.msWorkspace,
        });
        msWorkspace.msWorkspace.addMsWindowUnchecked(
            msWindow,
            msWorkspace.focus,
            msWorkspace.insert
        );
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

    setMetaWindowAsWaitingForAssignation(metaWindow: MetaWindowWithMsProperties) {
        this.metaWindowWaitingForAssignationList.push({
            timestamp: Date.now(),
            metaWindow,
        });

        this.checkWindowsForAssignations();
    }

    setMsWindowAsWaitingForMetaWindow(msWindow: MsWindow) {
        this.msWindowWaitingForMetaWindowList.push({
            timestamp: Date.now(),
            msWindow,
            checked: false,
        });

        this.checkWindowsForAssignations();
    }

    checkWindowsForAssignations() {
        const timestamp = Date.now();

        // For every waiting Window we do
        this.metaWindowWaitingForAssignationList.forEach(
            (waitingMetaWindow) => {
                const app = this.windowTracker.get_window_app(
                    waitingMetaWindow.metaWindow
                );
                let msWindowFound: MsWindow | undefined = undefined;
                // If window is dialog try t0 find his parent
                if (this.isMetaWindowDialog(waitingMetaWindow.metaWindow)) {
                    // The best way to find it's parent it with the root ancestor.
                    let root: MetaWindowWithMsProperties | undefined;
                    waitingMetaWindow.metaWindow.foreach_ancestor(
                        (ancestor) => {
                            if (!root && (ancestor as MetaWindowWithMsProperties).msWindow) {
                                root = ancestor;
                            }
                            return true;
                        }
                    );
                    if (root) {
                        msWindowFound = root.msWindow;
                    } else if (app) {
                        // But sometime the we failed to found one.
                        // So we try to find a regular window with the same app
                        const sameAppMsWindowList = this.msWindowList.filter(
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
                        const activeMsWorkspace =
                            Me.msWorkspaceManager.getActiveMsWorkspace();
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
                    const app = this.windowTracker.get_window_app(
                        waitingMetaWindow.metaWindow
                    );
                    if (
                        (waitingMetaWindow.metaWindow.firstFrameDrawn &&
                            !app.is_window_backed()) ||
                        timestamp - waitingMetaWindow.timestamp > 2000
                    ) {
                        const msWorkspace =
                            Me.msWorkspaceManager.determineAppropriateMsWorkspace(
                                waitingMetaWindow.metaWindow
                            );
                        this.createNewMsWindow(
                            app.get_id(),
                            this.buildMetaWindowIdentifier(
                                waitingMetaWindow.metaWindow
                            ),
                            waitingMetaWindow.metaWindow,
                            {
                                msWorkspace,
                                focus: true,
                                insert: true,
                            }
                        );
                        // TODO: Not sure if this is necessary
                        Me.msWorkspaceManager.stateChanged();
                    }
                }
            }
        );

        // Remove assigned window for the waiting for assignation list
        this.metaWindowWaitingForAssignationList =
            this.metaWindowWaitingForAssignationList.filter(
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
            Async.addTimeout(GLib.PRIORITY_DEFAULT, 100, () => {
                this.checkInProgress = false;
                this.checkWindowsForAssignations();
            });
        }
    }

    openAppForMsWindow(msWindow: MsWindow) {
        this.setMsWindowAsWaitingForMetaWindow(msWindow);
        const workspaceIndex =
            Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                msWindow.msWorkspace
            );
        msWindow.app.launch(0, workspaceIndex, Shell.AppLaunchGpu.APP_PREF);
    }

    _handleWindow(metaWindow: MetaWindowWithMsProperties) {
        if (
            metaWindow.wm_class !== '' &&
            getSettings('layouts')
                .get_string('windows-excluded')
                .split(',')
                .map((item) => item.trim())
                .indexOf(metaWindow.wm_class) > -1
        ) {
            return false;
        }
        if (metaWindow.above) {
            metaWindow.stick();
            return false;
        }
        const meta = Meta.WindowType;
        const types = [
            meta.NORMAL,
            meta.DIALOG,
            meta.MODAL_DIALOG,
            meta.UTILITY,
        ];
        return types.includes(metaWindow.window_type);
    }

    isMetaWindowDialog(metaWindow: MetaWindowWithMsProperties) {
        const dialogTypes = [
            Meta.WindowType.DIALOG,
            Meta.WindowType.MODAL_DIALOG,
            Meta.WindowType.UTILITY,
        ];
        const isFrozen = !(
            metaWindow.allows_resize() && metaWindow.allows_move()
        );
        const isMaximizedAny =
            metaWindow.maximized_horizontally ||
            metaWindow.maximized_vertically;
        return (
            dialogTypes.includes(metaWindow.window_type) ||
            (metaWindow.get_transient_for() != null &&
                metaWindow.skip_taskbar) ||
            !metaWindow.resizeable ||
            (isFrozen && !isMaximizedAny)
        );
    }

    buildMetaWindowIdentifier(metaWindow: MetaWindowWithMsProperties) {
        return `${metaWindow.get_wm_class_instance()}-${metaWindow.get_pid()}-${metaWindow.get_stable_sequence()}`;
    }

    destroy() {
        super.destroy();
        this.msDndManager.destroy();
        this.msResizeManager.destroy();
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow =
                windowActor.metaWindow as MetaWindowWithMsProperties;
            if (metaWindow.handledByMaterialShell)
                delete metaWindow.handledByMaterialShell;
        });
    }
}
Signals.addSignalMethods(MsWindowManager.prototype);

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GLib from 'glib';
import * as Meta from 'meta';
import * as Shell from 'shell';
import { MsWindow, MsWindowMatchingInfo } from 'src/layout/msWorkspace/msWindow';
import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';
import { MsDndManager } from 'src/manager/msDndManager';
import { MsFocusManager } from 'src/manager/msFocusManager';
import { MsManager } from 'src/manager/msManager';
import { MsResizeManager } from 'src/manager/msResizeManager';
import { Rectangular } from 'src/types/mod';
import { assert, assertNotNull } from 'src/utils/assert';
import { Async } from 'src/utils/async';
import { groupBy } from 'src/utils/group_by';
import { isNonNull } from 'src/utils/predicates';
import { getSettings } from 'src/utils/settings';
import { hungarian } from 'src/utils/weighted_matching';
const Signals = imports.signals;
const Me = imports.misc.extensionUtils.getCurrentExtension();

export type MetaWindowWithMsProperties = Meta.Window & {
    createdAt?: number;
    firstFrameDrawn?: boolean;
    firstFrameDrawnPromise?: Promise<void>,
    handledByMaterialShell?: boolean;
    msWindow?: MsWindow;
    titleBarVisible?: boolean;
};

export type MetaWindowActorWithMsProperties = Meta.WindowActor & {
    lastResize: number;
};

export type MsWindowManagerType = InstanceType<typeof MsWindowManager>;
export class MsWindowManager extends MsManager {
    windowTracker: Shell.WindowTracker;
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
        this.observe(global.display, 'window-created', (_, metaWindow: MetaWindowWithMsProperties) => {
            const actor = metaWindow.get_compositor_private<Meta.WindowActor>();
            metaWindow.firstFrameDrawn = false;
            metaWindow.firstFrameDrawnPromise = new Promise((resolve) => {
                actor.connect('first-frame', (_params) => {
                    metaWindow.firstFrameDrawn = true;
                    resolve();
                });
            });
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

    async assignWindows() {
        for (const windowActor of global.get_window_actors()) {
            Me.log(`Meta window: ${this.buildMetaWindowIdentifier(windowActor.metaWindow)} ${windowActor.metaWindow.title}, ${windowActor.metaWindow.gtk_application_id} ${windowActor.metaWindow.windowType}`);
        }
        for (const msWindow of this.msWindowList) {
            if (msWindow.lifecycleState.type === "app-placeholder" && msWindow.lifecycleState.matchingInfo !== undefined) {
                Me.log(`MSWindow: ${JSON.stringify(msWindow.lifecycleState.matchingInfo)}`);
            }
        }
        
        let groupedMsWindowsByApp = groupBy(this.msWindowList.filter(x => x.lifecycleState.type === "app-placeholder" && x.lifecycleState.matchingInfo !== undefined), window => {
            assert(window.lifecycleState.type === "app-placeholder" && window.lifecycleState.matchingInfo !== undefined, "unreachable");
            return window.lifecycleState.matchingInfo.appId
        });
        let groupedMetaWindowsByApp = groupBy(global.get_window_actors(), window => this.windowTracker.get_window_app(window.metaWindow).id);

        for (const [groupKey, windowActorGroup] of groupedMetaWindowsByApp.entries()) {
            let candidateMsWindows = groupedMsWindowsByApp.get(groupKey) || [];
            let costMatrix: number[][] = [];
            const INF_COST = 100000;
            for (const windowActor of windowActorGroup) {
                const costs = [];
                const metaWindow = windowActor.metaWindow;
                const wmClass = metaWindow.get_wm_class_instance();
                const pid = metaWindow.get_pid();
                const stableSeq = metaWindow.get_stable_sequence();
                const windowName = metaWindow.name;
                const windowTitle = metaWindow.title;

                const app = this.windowTracker.get_window_app(
                    metaWindow
                );
                const windowAppTitle = app.id;
                
                for (const msWindow of candidateMsWindows) {
                    assert(msWindow.lifecycleState.type === "app-placeholder" && msWindow.lifecycleState.matchingInfo !== undefined, "unreachable");
                    const matchingInfo = msWindow.lifecycleState.matchingInfo;
                    let cost = 0;
                    cost += wmClass === matchingInfo.wmClass ? 0 : INF_COST;
                    cost += pid === matchingInfo.pid ? 0 : 10;
                    cost += windowTitle === matchingInfo.title ? 0 : 5;
                    cost += stableSeq === matchingInfo.stableSeq ? 0 : 1;
                    costs.push(cost);
                }

                // Add N items representing potential new windows at the end.
                // In case there are no existing MsWindows, we want to be able to create new ones
                for (let i = 0; i < windowActorGroup.length; i++) {
                    costs.push(INF_COST - 1);
                }
                costMatrix.push(costs);
            }

            let { cost, assignments } = hungarian(costMatrix);
            Me.log(`Got matching between for ${groupKey}: ${windowActorGroup.length}x${candidateMsWindows.length} with total cost ${cost}. Matching ${assignments}`);
            for (let i = 0; i < assignments.length; i++) {
                const idx = assignments[i];
                if (idx < candidateMsWindows.length) {
                    Me.log(`Matching ${this.buildMetaWindowIdentifier(windowActorGroup[i].metaWindow)} to ${candidateMsWindows[idx].metaWindowIdentifier}`);
                } else {
                    Me.log(`Matching ${this.buildMetaWindowIdentifier(windowActorGroup[i].metaWindow)} to a new window`);
                }
            }
        }
    }

    async handleExistingMetaWindow() {
        // for (const windowActor of global.get_window_actors()) {
        //     Me.log(`Meta window: ${this.buildMetaWindowIdentifier(windowActor.metaWindow)} ${windowActor.metaWindow.title}, ${windowActor.metaWindow.gtk_application_id} ${windowActor.metaWindow.windowType}`);
        // }
        // for (const msWindow of this.msWindowList) {
        //     Me.log(`MSWindow: ${msWindow.metaWindowIdentifier}`);
        // }
        this.assignWindows();

        const skipped: MetaWindowWithMsProperties[] = [];
        const assigned = new Set<MsWindow>();
        let promises = global.get_window_actors().map((windowActor) => {
            const metaWindow =
                windowActor.metaWindow as MetaWindowWithMsProperties;
            metaWindow.firstFrameDrawn = true;
            metaWindow.firstFrameDrawnPromise = Promise.resolve();
            metaWindow.createdAt = metaWindow.user_time;

            if (metaWindow.msWindow) delete metaWindow.msWindow;
            if (this._handleWindow(metaWindow)) {
                const windowIdentifier = this.buildMetaWindowIdentifier(metaWindow);
                const msWindow = this.msWindowList.find((msWindow) => {
                    return msWindow.metaWindowIdentifier === windowIdentifier && !assigned.has(msWindow);
                });
                if (msWindow) {
                    Me.log(`Associating existing metawindow to monitor ${msWindow.msWorkspace.monitor.index} workspace ${msWindow.msWorkspace.workspace?.workspaceIndex}. ${msWindow.metaWindowIdentifier}`);
                    metaWindow.handledByMaterialShell = true;
                    assigned.add(msWindow);
                    return msWindow.setWindow(metaWindow);
                } else {
                    Me.log(`Failed to associate ${this.buildMetaWindowIdentifier(metaWindow)}`);
                }
            }
            skipped.push(metaWindow);
            return null;
        });

        await Promise.all(promises.filter(isNonNull));

        for (const metaWindow of skipped) {
            this.onNewMetaWindow(metaWindow);
        }
    }

    onNewMetaWindow(
        metaWindow: MetaWindowWithMsProperties
    ) {
        if (Me.disableInProgress) return;
        metaWindow.createdAt = metaWindow.user_time;
        const actor = metaWindow.get_compositor_private<Meta.WindowActor>();

        if (!this._handleWindow(metaWindow)) {
            /* return Me.layout.setActorAbove(metaWindow.get_compositor_private<
                    Meta.WindowActor
                >()); */
            if (actor.get_parent() != global.top_window_group) {
                actor
                    .get_parent()
                    .remove_child(actor);
                global.top_window_group.add_child(actor);
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
        initialAllocation?: Rectangular,
        matchingInfo?: MsWindowMatchingInfo,
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
            lifecycleState: metaWindow !== null ? {
                type: 'window',
                metaWindow: metaWindow
            } : {
                type: 'app-placeholder',
                app: app,
                waitingForAppToStart: true,
            },
            matchingInfo
        });
        msWorkspace.msWorkspace
            .addMsWindowUnchecked(
                msWindow,
                msWorkspace.focus,
                msWorkspace.insert
            )
            .catch((e) => Me.logFocus('addMsWindowUnchecked failed', e));
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
        Me.log(`Checking assignations. Waiting = ${this.metaWindowWaitingForAssignationList.length}`);
        const timestamp = Date.now();

        // For every waiting Window we do
        this.metaWindowWaitingForAssignationList.forEach(
            (waitingMetaWindow) => {
                const app = this.windowTracker.get_window_app(
                    waitingMetaWindow.metaWindow
                );
                let msWindowFound: MsWindow | undefined = undefined;
                // If window is dialog try t0 find its parent
                if (this.isMetaWindowDialog(waitingMetaWindow.metaWindow)) {
                    // The best way to find its parent is with the root ancestor.
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
                        // But sometimes the we fail to find one.
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
                                !(msWindow.lifecycleState.type !== "window" || msWindow.lifecycleState.metaWindow === null) &&
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
                    Me.log(`Associating ${waitingMetaWindow.metaWindow.name}:${waitingMetaWindow.metaWindow.title}:${app.get_id()} to monitor ${msWindowFound.msWorkspace.monitor.index} workspace ${msWindowFound.msWorkspace.workspace?.workspaceIndex}`);
                    if (this.isMetaWindowDialog(waitingMetaWindow.metaWindow)) {
                        msWindowFound.addDialog(waitingMetaWindow.metaWindow);
                    } else {
                        msWindowFound.setWindow(waitingMetaWindow.metaWindow);
                    }
                } else {
                    if (app) {
                        Me.log(`Associating ${app.appInfo.name}:${app.appInfo.get_description()}:${app.get_id()} to monitor a new window`);
                    }
                    const app2 = this.windowTracker.get_window_app(
                        waitingMetaWindow.metaWindow
                    );
                    assert(app === app2, "Expected apps to be the same");
                    if (
                        (waitingMetaWindow.metaWindow.firstFrameDrawn &&
                            !app2.is_window_backed()) ||
                        timestamp - waitingMetaWindow.timestamp > 2000
                    ) {
                        const msWorkspace =
                            Me.msWorkspaceManager.determineAppropriateMsWorkspace(
                                waitingMetaWindow.metaWindow
                            );
                        this.createNewMsWindow(
                            app2.get_id(),
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

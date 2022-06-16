/** Gnome libs imports */
import * as Meta from 'meta';
import * as Shell from 'shell';
import {
    buildMetaWindowIdentifier,
    MsWindow,
    MsWindowMatchingInfo,
} from 'src/layout/msWorkspace/msWindow';
import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';
import { MsDndManager } from 'src/manager/msDndManager';
import { MsFocusManager } from 'src/manager/msFocusManager';
import { MsManager } from 'src/manager/msManager';
import { MsResizeManager } from 'src/manager/msResizeManager';
import { Rectangular } from 'src/types/mod';
import { assert } from 'src/utils/assert';
import { AsyncDebounce } from 'src/utils/async';
import { groupBy } from 'src/utils/group_by';
import { getSettings } from 'src/utils/settings';
import { weighted_matching } from 'src/utils/weighted_matching';
const Signals = imports.signals;
const Me = imports.misc.extensionUtils.getCurrentExtension();

export type MetaWindowWithMsProperties = Meta.Window & {
    createdAt?: number;
    firstFrameDrawn?: boolean;
    firstFrameDrawnPromise?: Promise<void>;
    handledByMaterialShell?: boolean;
    msWindow?: MsWindow;
    titleBarVisible?: boolean;
};

export type MetaWindowActorWithMsProperties = Meta.WindowActor & {
    lastResize: number;
};

/** Checks if `found` is equal to `desired` and returns the appropriate cost.
 * If desired is not given (undefined) then `skipCost` is returned.
 * If `found` is equal to `desired` then `0` is returned, otherwise `mismatchCost`.
 */
function matchingCost<T>(
    desired: T | undefined,
    found: T,
    mismatchCost: number,
    skipCost: number
) {
    if (desired !== undefined) {
        return found === desired ? 0 : mismatchCost;
    } else {
        return skipCost;
    }
}

const INF_COST = 100000;

/** After a meta window has been associated with an MsWindow, we allow this association to change
 * for a small amount of time.
 *
 * This is to allow for the case where the window title changes and another association becomes much
 * more desirable. This happens often when opening text editors that restore the previously opened documents.
 * In those cases multiple windows may open with initially identical window titles, but once the documents
 * have loaded the window titles change and we might be able to make better associations.
 */
const MAX_WINDOW_REASSOCIATION_TIME_MS = 3000;

/** Cost for associating the the given metaWindow to the msWindow.
 *
 * windowInfo are the matching details for the meta window, for example its window title.
 *
 * A higher returned cost means the match is less desirable.
 */
function windowMatchingCost(
    windowInfo: MsWindowMatchingInfo,
    metaWindow: Meta.Window,
    msWindow: MsWindow
) {
    const state = msWindow.lifecycleState;
    assert(
        state.type === 'window' || state.type === 'app-placeholder',
        'MsWindow has no matching info'
    );
    const matchingInfo = state.matchingInfo;

    let cost = 0;
    // The wmClass *must* match if specified
    cost += matchingCost(matchingInfo.wmClass, windowInfo.wmClass, INF_COST, 1);
    cost += matchingCost(matchingInfo.pid, windowInfo.pid, 100, 1);
    cost += matchingCost(matchingInfo.title, windowInfo.title, 50, 1);
    cost += matchingCost(matchingInfo.stableSeq, windowInfo.stableSeq, 1, 1);

    const msWindowMeta =
        state.type === 'window' ? state.metaWindow ?? undefined : undefined;
    // Prefer to keep existing matchings
    cost += msWindowMeta === metaWindow ? 0 : 5;

    const waiting =
        state.type === 'app-placeholder'
            ? state.waitingForAppSince !== undefined
            : state.matchedWhileWaiting;
    // Prefer matching to MsWindows which are waiting for an app to open
    cost += waiting ? 0 : 200;

    return cost;
}

export type MsWindowManagerType = InstanceType<typeof MsWindowManager>;
export class MsWindowManager extends MsManager {
    private windowTracker: Shell.WindowTracker;
    msWindowList: MsWindow[];
    msDndManager: MsDndManager;
    msResizeManager: MsResizeManager;
    msFocusManager: MsFocusManager;
    private checkWindowsForAssignationsDebounce: AsyncDebounce;

    constructor() {
        super();

        this.checkWindowsForAssignationsDebounce = new AsyncDebounce(
            50,
            this.checkWindowsForAssignations.bind(this)
        );
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWindowList = [];
        this.msDndManager = new MsDndManager(this);
        this.msResizeManager = new MsResizeManager(this);
        this.msFocusManager = new MsFocusManager(this);
        this.observe(
            global.display,
            'window-created',
            (_, metaWindow: MetaWindowWithMsProperties) => {
                const actor =
                    metaWindow.get_compositor_private<Meta.WindowActor>();
                metaWindow.firstFrameDrawn = false;
                metaWindow.firstFrameDrawnPromise = new Promise((resolve) => {
                    actor.connect('first-frame', (_params) => {
                        metaWindow.firstFrameDrawn = true;
                        resolve();
                    });
                });
                this.onNewMetaWindow(metaWindow);
            }
        );

        this.observe(
            global.window_manager,
            'size-changed',
            (wm, actor: MetaWindowActorWithMsProperties) => {
                actor.lastResize = Date.now();
            }
        );
    }

    /** All meta windows that are currently managed by Material Shell.
     * This includes app windows and their dialogs.
     */
    get managedMetaWindows(): MetaWindowWithMsProperties[] {
        return new Array<MetaWindowWithMsProperties>().concat(
            ...this.msWindowList.map((w) => w.metaWindows)
        );
    }

    private async assignWindows() {
        // We capture the list of all actors at the beginning and don't care about any new ones until the
        // next time we start assigning windows.
        const actors = global
            .get_window_actors()
            .filter(
                (x) =>
                    (x.metaWindow as MetaWindowWithMsProperties)
                        .handledByMaterialShell
            );
        // Assign all non-dialog windows first
        const windowsDone = this.assignNonDialogWindows(actors);
        // Assign the dialog windows to previously existing MsWindows that fits them.
        const dialogsDone = this.assignDialogWindows(actors);
        await Promise.all([windowsDone, dialogsDone]);
    }

    /** Assign non-dialog windows to either existing empty MsWindows or determine that new MsWindows should be created for them.
     *
     * This is done by first grouping meta windows and MsWindows by their app id.
     * Then for each app, the meta windows are matched to existing MsWindows or to new MsWindows using a cost function.
     * The matching is done such that the total sum of all costs are minimized.
     *
     * The cost function is particularly important when restoring from a persisted state.
     * In the persisted state there is information about the windows' wmClass, title, process id, etc. and this is
     * used in the cost function to try to restore windows to their correct locations as accurately as possible.
     *
     * Returns a promise which resolves when the first frames of all assigned and newly created windows have been drawn.
     * Before this, it is not safe to try to reassign windows because some async functions are still in progress.
     */
    private assignNonDialogWindows(
        actors: Meta.WindowActor[]
    ): Promise<void[]> {
        const assignedMetaWindows = new Set(this.managedMetaWindows);

        // We allow meta windows to be re-assigned for a short amount of time after they have first been assigned.
        // See docs for `MAX_WINDOW_REASSOCIATION_TIME_MS` for more details.
        // Essentially this loop makes those already assigned windows available to be re-assigned.
        const now = new Date().getTime();
        for (const msWindow of this.msWindowList) {
            if (
                msWindow.lifecycleState.type === 'window' &&
                now - msWindow.lifecycleState.matchedAtTime.getTime() <
                    MAX_WINDOW_REASSOCIATION_TIME_MS &&
                msWindow.lifecycleState.metaWindow !== null
            ) {
                assignedMetaWindows.delete(msWindow.lifecycleState.metaWindow);
            }
        }

        // Handle all non-dialog windows that haven't been associated with an MsWindow yet. Dialog windows are handled by assignDialogWindows
        const windowActors = actors.filter(
            (w) =>
                !assignedMetaWindows.has(w.metaWindow) &&
                !this.isMetaWindowDialog(w.metaWindow)
        );

        const candidateMsWindows = this.msWindowList.filter(
            (x) =>
                x.lifecycleState.type === 'app-placeholder' ||
                (x.lifecycleState.type === 'window' &&
                    now - x.lifecycleState.matchedAtTime.getTime() <
                        MAX_WINDOW_REASSOCIATION_TIME_MS)
        );
        const groupedMsWindowsByApp = groupBy(candidateMsWindows, (window) => {
            assert(
                window.lifecycleState.type === 'app-placeholder' ||
                    window.lifecycleState.type === 'window',
                'unreachable'
            );
            return window.lifecycleState.matchingInfo.appId;
        });
        const groupedMetaWindowsByApp = groupBy(
            windowActors,
            (window) => this.windowTracker.get_window_app(window.metaWindow).id
        );
        const promises = [];

        let logged = false;
        const logInfoOnce = () => {
            if (logged) return;
            logged = true;
            for (const windowActor of actors) {
                Me.log(
                    `Meta window: ${buildMetaWindowIdentifier(
                        windowActor.metaWindow
                    )} title='${
                        windowActor.metaWindow.title
                    }' dialog=${this.isMetaWindowDialog(
                        windowActor.metaWindow
                    )}`
                );
            }
            for (const msWindow of candidateMsWindows) {
                assert(
                    msWindow.lifecycleState.type === 'window' ||
                        msWindow.lifecycleState.type === 'app-placeholder',
                    'MsWindow has no matching info'
                );
                Me.log(
                    `MSWindow: ${JSON.stringify(
                        msWindow.lifecycleState.matchingInfo
                    )} waiting=${
                        msWindow.lifecycleState.type == 'app-placeholder' &&
                        msWindow.lifecycleState.waitingForAppSince !== undefined
                    } workspace=${msWindow.msWorkspace.monitor.index}`
                );
            }
        };

        for (const [
            groupKey,
            windowActorGroup,
        ] of groupedMetaWindowsByApp.entries()) {
            const candidateMsWindows =
                groupedMsWindowsByApp.get(groupKey) || [];
            const costMatrix: number[][] = [];
            for (const windowActor of windowActorGroup) {
                const metaWindow = windowActor.metaWindow;
                const windowInfo: MsWindowMatchingInfo = {
                    appId: groupKey,
                    wmClass: metaWindow.get_wm_class_instance(),
                    pid: metaWindow.get_pid(),
                    stableSeq: metaWindow.get_stable_sequence(),
                    title: metaWindow.title,
                };

                const costs = candidateMsWindows.map((msWindow) =>
                    windowMatchingCost(windowInfo, metaWindow, msWindow)
                );

                // Add N items representing potential new windows at the end.
                // In case there are no existing MsWindows, we want to be able to create new ones
                for (let i = 0; i < windowActorGroup.length; i++) {
                    costs.push(INF_COST - 1);
                }
                costMatrix.push(costs);
            }

            const { cost, assignments } = weighted_matching(costMatrix);

            // The meta window to be assigned to each MsWindow
            const msWindowAssignments = new Array<Meta.Window | null>(
                candidateMsWindows.length
            ).fill(null);
            for (let i = 0; i < assignments.length; i++) {
                const idx = assignments[i];
                if (idx < candidateMsWindows.length) {
                    // Found a good match
                    msWindowAssignments[idx] = windowActorGroup[i].metaWindow;
                }
            }

            for (let i = 0; i < candidateMsWindows.length; i++) {
                const msWindow = candidateMsWindows[i];
                if (
                    msWindow.lifecycleState.type === 'window' &&
                    msWindow.lifecycleState.metaWindow !==
                        msWindowAssignments[i]
                ) {
                    // The contents of this MsWindow will be replaced.
                    // This can happen if an application starts and opens multiple windows at the same time (e.g. VSCode restoring several workspaces)
                    // initially these windows might be associated incorrectly, but once the workspaces have loaded and the window titles get updated
                    // we can associate them more accurately. This might necessitate swapping some already associated MsWindows.
                    // For all MsWindows which will need to be changed we first unassign their windows.
                    logInfoOnce();
                    // These dialogs will be re-assigned later in the assignDialogWindows function.
                    msWindow.removeAllDialogs();
                    msWindow.unsetWindow();
                }
            }

            for (let i = 0; i < assignments.length; i++) {
                const idx = assignments[i];
                const windowActor = windowActorGroup[i];
                if (idx < candidateMsWindows.length) {
                    // Found a good match
                    const msWindow = candidateMsWindows[idx];

                    // If it's still in the 'window' state that means the meta window was already associated correctly
                    // and we can skip associating it again.
                    if (msWindow.lifecycleState.type === 'app-placeholder') {
                        logInfoOnce();
                        Me.log(
                            `Associating ${buildMetaWindowIdentifier(
                                windowActor.metaWindow
                            )} with ${msWindow.windowIdentifier}`
                        );
                        promises.push(
                            msWindow.setWindow(windowActor.metaWindow)
                        );
                    }
                } else {
                    logInfoOnce();
                    Me.log(
                        `Creating a new window for ${buildMetaWindowIdentifier(
                            windowActor.metaWindow
                        )}`
                    );
                    // Did not find a good match, create a new window instead
                    const { done } = this.createNewMsWindow(
                        windowActor.metaWindow,
                        {
                            msWorkspace:
                                Me.msWorkspaceManager.determineAppropriateMsWorkspace(
                                    windowActor.metaWindow
                                ),
                            focus: true,
                            insert: true,
                        }
                    );
                    promises.push(done);
                }
            }
        }

        return Promise.all(promises);
    }

    /** Assigns dialog windows to existing MsWindows, or creates new MsWindows for them.
     *
     * Returns a promise which resolves when the first frames of all assigned and newly created windows have been drawn.
     * Before this, it is not safe to try to reassign windows because some async functions are still in progress.
     */
    private assignDialogWindows(actors: Meta.WindowActor[]): Promise<void[]> {
        const assignedMetaWindows = new Set(this.managedMetaWindows);
        const promises = [];

        for (const windowActor of actors) {
            if (windowActor.is_destroyed()) continue;
            if (assignedMetaWindows.has(windowActor.metaWindow)) continue;
            if (!this.isMetaWindowDialog(windowActor.metaWindow)) continue;

            const metaWindow = windowActor.metaWindow;
            const app = this.windowTracker.get_window_app(
                metaWindow
            ) as Shell.App | null;

            if (app === null) {
                // Note: Contrary to what the type definitions say, the get_window_app function can in fact return null.
                // This can for example happen with the "gnome-shell" pseudo-window which always seems to exist (but doesn't correspond to anything visible).
                continue;
            }

            // If window is dialog try to find its parent
            // The best way to find its parent is with the root ancestor.
            let root: MetaWindowWithMsProperties | undefined;
            metaWindow.foreach_ancestor((ancestor) => {
                if (
                    !root &&
                    (ancestor as MetaWindowWithMsProperties).msWindow
                ) {
                    root = ancestor;
                }
                return true;
            });

            let msWindowFound = root?.msWindow ?? null;

            // TODO: It's unclear if this is necessary or if the foreach_ancestor will work for the same cases.
            if (msWindowFound === null) {
                // Dialogs can specify the window they belong to using the `transient for` property.
                // So we check to see if it is specified and it is an msWindow
                const transientMetaWindow =
                    metaWindow.get_transient_for() as MetaWindowWithMsProperties | null;
                if (
                    transientMetaWindow?.msWindow?.lifecycleState.type ===
                    'window'
                ) {
                    msWindowFound = transientMetaWindow.msWindow;
                }
            }

            if (msWindowFound === null) {
                // If we still haven't found a window we try to find a regular window with the same PID
                const pid = metaWindow.get_pid();
                const samePidMsWindowList = this.msWindowList.filter(
                    (msWindow) => {
                        return (
                            msWindow.lifecycleState.type === 'window' &&
                            msWindow.lifecycleState.metaWindow?.get_pid() ===
                                pid
                        );
                    }
                );

                // We take the most recently focused msWindow
                for (const msWindow of samePidMsWindowList) {
                    if (
                        !msWindowFound ||
                        (msWindow.metaWindow &&
                            msWindowFound.metaWindow!.get_user_time() <
                                msWindow.metaWindow.get_user_time())
                    ) {
                        msWindowFound = msWindow;
                    }
                }
            }

            if (msWindowFound == null && app) {
                // If we still haven't found a window we try to find a window with the same app
                const sameAppMsWindowList = this.msWindowList.filter(
                    (msWindow) => {
                        return (
                            (msWindow.lifecycleState.type === 'window' ||
                                msWindow.lifecycleState.type ===
                                    'app-placeholder') &&
                            msWindow.app.get_id() == app.get_id()
                        );
                    }
                );

                // We take the most recently focused msWindow, prioritizing regular windows over app placeholders
                let bestScore: [number, number] = [0, 0];
                for (const msWindow of sameAppMsWindowList) {
                    const score: [number, number] = [
                        msWindow.lifecycleState.type === 'window' ? 1 : 0,
                        msWindow.metaWindow!.get_user_time(),
                    ];
                    if (
                        !msWindowFound ||
                        score[0] > bestScore[0] ||
                        (score[0] == bestScore[0] && score[1] > bestScore[1])
                    ) {
                        msWindowFound = msWindow;
                        bestScore = score;
                    }
                }
            }

            if (msWindowFound) {
                msWindowFound.addDialog(metaWindow);
            } else {
                // No good existing MsWindow was found, instead we create a new MsWindow just for this dialog.
                const { done } = this.createNewMsWindow(
                    windowActor.metaWindow,
                    {
                        msWorkspace:
                            Me.msWorkspaceManager.determineAppropriateMsWorkspace(
                                windowActor.metaWindow
                            ),
                        focus: true,
                        insert: true,
                    }
                );
                promises.push(done);
            }
        }

        return Promise.all(promises);
    }

    handleExistingMetaWindows() {
        if (this.managedMetaWindows.length > 0) {
            throw new Error(
                'You should only call this function before any windows have been associated'
            );
        }

        for (const windowActor of global.get_window_actors()) {
            const metaWindow =
                windowActor.metaWindow as MetaWindowWithMsProperties;
            // Initialize and reset fields to well defined states.
            metaWindow.firstFrameDrawn = true;
            metaWindow.firstFrameDrawnPromise = Promise.resolve();
            metaWindow.createdAt = metaWindow.user_time;
            metaWindow.handledByMaterialShell = false;
            metaWindow.msWindow = undefined;

            this.onNewMetaWindow(metaWindow);
        }
    }

    onNewMetaWindow(metaWindow: MetaWindowWithMsProperties) {
        if (Me.disableInProgress) return;
        metaWindow.createdAt = metaWindow.user_time;
        const actor = metaWindow.get_compositor_private<Meta.WindowActor>();

        if (!this.handleWindow(metaWindow)) {
            /* return Me.layout.setActorAbove(metaWindow.get_compositor_private<
                    Meta.WindowActor
                >()); */
            const parent = actor.get_parent();
            if (parent != global.top_window_group) {
                if (parent !== null) parent.remove_child(actor);
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

        // Assign windows in the next GLib micro task
        this.checkWindowsForAssignationsDebounce.schedule();
    }

    onMetaWindowUnManaged(metaWindow: MetaWindowWithMsProperties) {
        if (Me.disableInProgress || Me.closing) return;
        if (metaWindow.msWindow) {
            const msWindow = metaWindow.msWindow;
            msWindow.metaWindowUnManaged(metaWindow);
        }
    }

    /** Creates a new MsWindow
     *
     * Returns both the created window and a promise.
     * The promise resolves when the first frame of the window has been drawn.
     */
    createNewMsWindow(
        source: Shell.App | MetaWindowWithMsProperties,
        msWorkspace: {
            msWorkspace: MsWorkspace;
            focus: boolean;
            insert: boolean;
        },
        persistent?: boolean,
        initialAllocation?: Rectangular,
        matchingInfo?: MsWindowMatchingInfo
    ) {
        // Note: Contrary to what the type definitions say, the get_window_app function can in fact return null.
        // This can for example happen with the "gnome-shell" pseudo-window which always seems to exist (but doesn't correspond to anything visible).
        const app =
            source instanceof Meta.Window
                ? (this.windowTracker.get_window_app(
                      source
                  ) as Shell.App | null)
                : source;
        if (app === null) {
            throw new Error(
                'The meta window has no associated app. Cannot create window for an unknown app.'
            );
        }

        if (matchingInfo === undefined) {
            matchingInfo = {
                appId: app.id,
                title: undefined,
                pid: undefined,
                wmClass: undefined,
                stableSeq: undefined,
            };
        } else {
            assert(matchingInfo.appId === app.id, 'AppIds do not match');
        }

        const msWindow = new MsWindow({
            app,
            persistent,
            initialAllocation,
            msWorkspace: msWorkspace.msWorkspace,
            lifecycleState: {
                type: 'app-placeholder',
                matchingInfo,
                waitingForAppSince: undefined,
            },
        });
        let donePromise;
        if (source instanceof Meta.Window) {
            donePromise = msWindow.setWindow(source);
        } else {
            donePromise = Promise.resolve();
        }
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
        return {
            msWindow: msWindow,
            done: donePromise,
        };
    }

    async checkWindowsForAssignations() {
        await this.assignWindows();

        let anyWaiting = false;
        const now = new Date();
        for (const msWindow of this.msWindowList) {
            if (
                msWindow.lifecycleState.type === 'app-placeholder' &&
                msWindow.lifecycleState.waitingForAppSince !== undefined
            ) {
                if (
                    now.getTime() -
                        msWindow.lifecycleState.waitingForAppSince.getTime() >
                    5000
                ) {
                    // This window has been waiting too long for the app to launch. Possibly the window opened and closed very quickly or the app crashed.
                    msWindow.lifecycleState.waitingForAppSince = undefined;
                    // Stop the placeholder spinnner
                    msWindow.placeholder.reset();
                    // Close the window, unless it is pinned
                    msWindow.kill();
                } else {
                    anyWaiting = true;
                }
            }

            if (
                msWindow.lifecycleState.type === 'window' &&
                now.getTime() -
                    msWindow.lifecycleState.matchedAtTime.getTime() <
                    MAX_WINDOW_REASSOCIATION_TIME_MS
            ) {
                anyWaiting = true;
            }
        }

        if (anyWaiting) {
            // Check again after a small duration
            this.checkWindowsForAssignationsDebounce.schedule();
        }
    }

    openAppForMsWindow(msWindow: MsWindow) {
        if (msWindow.lifecycleState.type !== 'app-placeholder') {
            throw new Error(
                'MsWindow must be in the app-placeholder state to be able to open a new app in it.'
            );
        }
        if (msWindow.lifecycleState.matchingInfo === undefined) {
            msWindow.lifecycleState.matchingInfo = {
                appId: msWindow.app.id,
                title: undefined,
                pid: undefined,
                wmClass: undefined,
                stableSeq: undefined,
            };
        }
        msWindow.lifecycleState.waitingForAppSince = new Date();

        this.checkWindowsForAssignationsDebounce.schedule();

        const workspaceIndex =
            Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                msWindow.msWorkspace
            );
        msWindow.app.launch(0, workspaceIndex, Shell.AppLaunchGpu.APP_PREF);
    }

    private handleWindow(metaWindow: MetaWindowWithMsProperties) {
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

    isMetaWindowDialog(metaWindow: Meta.Window) {
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

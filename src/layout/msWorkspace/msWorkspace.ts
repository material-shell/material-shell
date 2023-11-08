/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Shell from 'gi://Shell';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { HorizontalPanel } from 'src/layout/msWorkspace/horizontalPanel/horizontalPanel';
import { MsWindow, MsWindowState } from 'src/layout/msWorkspace/msWindow';
import { MsWorkspaceCategory } from 'src/layout/msWorkspace/msWorkspaceCategory';
import { LayoutState, LayoutType } from 'src/manager/layoutManager';
import { HorizontalPanelPositionEnum } from 'src/manager/msThemeManager';
import { MsWorkspaceManager } from 'src/manager/msWorkspaceManager';
import { assert, assertNotNull, logAssert } from 'src/utils/assert';
import { WithSignals, registerGObjectClass } from 'src/utils/gjs';
import { reparentActor } from 'src/utils/index';
import { getSettings } from 'src/utils/settings';
import { MsApplicationLauncher } from 'src/widget/msApplicationLauncher';

/** Extension imports */
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

/** Maximum number of previously focused windows to keep track of.
 * The history should be kept reasonably short to avoid memory leaks and because it makes no sense to remember user actions too long ago.
 *
 * With a history length of N, the user can open N windows, close them all, and the focus will be correctly restored to the window they had open before.
 *
 * @See {@link MsWorkspace.focusHistory} for more details.
 */
const MAX_FOCUS_HISTORY_LENGTH = 5;

export type Tileable = MsWindow | MsApplicationLauncher;

function isMsWindow(argument: unknown): argument is MsWindow {
    return argument instanceof MsWindow;
}

export interface MsWorkspaceState {
    // This is different from monitorIsExternal since it's used to determined if it's should be moved to an external monitor when one is plugged
    external: boolean;
    focusedIndex: number;
    forcedCategory: string | null | undefined;
    msWindowList: MsWindowState[];
    layoutStateList: LayoutState[];
    layoutKey: string;
}

export class MsWorkspace extends WithSignals {
    msWorkspaceManager: MsWorkspaceManager;
    private _state: MsWorkspaceState;
    appLauncher: MsApplicationLauncher;
    tileableList: Tileable[] = [];
    msWorkspaceCategory: MsWorkspaceCategory;
    msWorkspaceActor: MsWorkspaceActor;
    // Safety: We always assign this because we call setLayoutByKey from the constructor
    layout!: InstanceType<LayoutType>;
    destroyed: boolean | undefined;
    closing = false;
    // Safety: We always assign this because we call setMonitor from the constructor
    monitorIsExternal!: boolean;
    // Definitely set because we call `setMonitor` in the constructor
    monitor!: Main.Monitor;
    emitTileableChangedInProgress: Promise<void> | undefined;
    /** History of previously focused windows.
     * This is used to get a better estimate of how to restore focus when a window is removed from the workspace.
     *
     * Take the example that a user has a window at workspace 1, and wants to move it to workspace 3.
     * This involves moving it one workspace down twice. First it is moved to workspace 2, and the focus is set to that window.
     * Then, when it is moved to workspace 3, the focus for workspace 2 needs to be changed again.
     * If we don't keep a history, we would be forced to make a simple guess, e.g. focus the last window of the workspace.
     * But this is not great. If we keep a history we can instead ensure that the focus is restored to the window
     * that was focused before the user started moving windows around.
     *
     * This list should be kept somewhat short to avoid memory leaks.
     * We do not need to persist this list between restarts, since it is only used to restore focus.
     */
    focusHistory: Tileable[] = [];

    constructor(
        msWorkspaceManager: MsWorkspaceManager,
        monitor: Main.Monitor,
        state: Partial<MsWorkspaceState> = {}
    ) {
        super();
        this.msWorkspaceManager = msWorkspaceManager;
        this.setMonitor(monitor);
        const initialState: MsWorkspaceState = Object.assign(
            {
                // This is different from monitorIsExternal since it's used to determined if it's should be moved to an external monitor when one is plugged
                external:
                    this.monitor.index !== Main.layoutManager.primaryIndex,
                focusedIndex: 0,
                forcedCategory: null,
                msWindowList: [],
                layoutStateList: Me.layoutManager!.defaultLayoutKeyList.map(
                    (layoutKey) => {
                        return Me.layoutManager!.getLayoutByKey(layoutKey)
                            .state;
                    }
                ),
                layoutKey: Me.layoutManager!.defaultLayoutKey,
            },
            state
        );
        // Note: _state may be updated while some functions in the constructor run, so we keep the original state in initialState.
        this._state = Object.assign({}, initialState);

        this.appLauncher = new MsApplicationLauncher(this);

        this.msWorkspaceCategory = new MsWorkspaceCategory(
            this,
            initialState.forcedCategory
        );

        this.msWorkspaceActor = new MsWorkspaceActor(this);

        // First add AppLauncher since windows are inserted before it otherwise the order is a mess.
        // It's important that this is done after the workspace actor is created.
        this.tileableList.push(this.appLauncher);
        const appSys = Shell.AppSystem.get_default();

        for (const msWindowData of initialState.msWindowList) {
            let matchingInfo = msWindowData.matchingInfo;
            if (
                matchingInfo === undefined &&
                msWindowData.metaWindowIdentifier !== null
            ) {
                // Compatibility
                const parts = msWindowData.metaWindowIdentifier.split('-');
                if (
                    logAssert(
                        parts.length === 3,
                        'window identifier had an unknown format'
                    )
                ) {
                    matchingInfo = {
                        appId: msWindowData.appId,
                        title: undefined,
                        pid: Number(parts[1]),
                        wmClass: parts[0],
                        stableSeq: Number(parts[2]),
                    };
                }
            }

            // Note: lookup_app can return null even though the type definitions don't say that.
            const app: Shell.App | null = appSys.lookup_app(msWindowData.appId);
            if (app) {
                Me.msWindowManager!.createNewMsWindow(
                    app,
                    {
                        msWorkspace: this,
                        focus: false,
                        insert: false,
                    },
                    msWindowData.persistent
                        ? msWindowData.persistent
                        : undefined,
                    {
                        x: msWindowData.x,
                        y: msWindowData.y,
                        width: msWindowData.width,
                        height: msWindowData.height,
                    },
                    matchingInfo,
                    // Set createdAt to yesterday when migrating older state, because we don't want restored old windows to be treated as just having been created
                    msWindowData.createdAt
                        ? new Date(msWindowData.createdAt)
                        : new Date(
                              new Date().setUTCHours(
                                  new Date().getUTCHours() - 24
                              )
                          )
                );
            }
        }

        this.msWorkspaceCategory.refreshCategory();
        this.setLayoutByKey(initialState.layoutKey);

        // Among other things, informs the TaskBar about the initial windows
        this.emit('tileableList-changed', this.tileableList);

        this.focusTileable(
            this.tileableList[initialState.focusedIndex] || null
        );

        this.connect('tileableList-changed', () => {
            this.msWorkspaceCategory.refreshCategory();
        });
    }

    destroy() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        this.appLauncher.onDestroy();
        this.layout.onDestroy();
        if (this.msWorkspaceActor) {
            this.msWorkspaceActor.destroy();
        }
        this.destroyed = true;
    }

    /** Index of the focused tileable.
     * If there are no tileables in the workspace, this will be zero.
     */
    get focusedIndex() {
        return this._state.focusedIndex;
    }

    private set focusedIndex(index) {
        this._state.focusedIndex = index;
        Me.stateManager!.stateChanged();
    }

    get state(): MsWorkspaceState {
        this._state.msWindowList = this.tileableList
            .filter(isMsWindow)
            .filter((msWindow) => {
                return (
                    !msWindow.app.is_window_backed() &&
                    (msWindow.lifecycleState.type === 'app-placeholder' ||
                        msWindow.lifecycleState.type === 'window')
                );
            })
            .map((msWindow) => {
                return msWindow.state;
            });

        if (this.layout) {
            this._state.layoutStateList[
                this._state.layoutStateList.findIndex(
                    (layoutState) => layoutState.key === this.layout.state.key
                )
            ] = this.layout.state;
            this._state.layoutKey = this.layout.state.key;
        }
        if (this.msWorkspaceCategory) {
            this._state.forcedCategory =
                this.msWorkspaceCategory.forcedCategory;
        }
        return this._state;
    }

    get tileableFocused() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        return this.tileableList[this.focusedIndex] || null;
    }

    get msWindowList() {
        return this.tileableList.filter(isMsWindow);
    }

    get containFullscreenWindow() {
        return this.msWindowList.some((msWindow) => {
            return msWindow.metaWindow
                ? msWindow.metaWindow.is_fullscreen()
                : false;
        });
    }

    get workspace() {
        if (this.monitorIsExternal) return null;
        return this.msWorkspaceManager.getWorkspaceOfMsWorkspace(this);
    }

    close() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        this.closing = true;
        Promise.all(
            this.msWindowList.map((msWindow) => {
                return msWindow.kill();
            })
        ).then((_params) => {
            this.closing = false;
            this.emit('readyToBeClosed');
        });
    }

    async addMsWindow(msWindow: MsWindow, focus = false, insert = false) {
        if (
            !msWindow ||
            (msWindow.msWorkspace && msWindow.msWorkspace === this)
        ) {
            return;
        }

        msWindow.setMsWorkspace(this);
        try {
            return await this.addMsWindowUnchecked(msWindow, focus, insert);
        } catch (e) {
            return Me.logWithStackTrace('addMsWindowUnchecked failed');
        }
    }

    /// Assumes that msWindow.msWorkspace == this already but that
    /// it hasn't been added to this workspace.
    async addMsWindowUnchecked(
        msWindow: MsWindow,
        focus = false,
        insert = false
    ) {
        logAssert(!this.destroyed, 'Workspace is destroyed');

        if (this.msWorkspaceActor && !msWindow.dragged) {
            reparentActor(msWindow, this.msWorkspaceActor.tileableContainer);
        }

        let insertAt = this.tileableList.length - 1;

        // Do not insert tileable after App Launcher
        if (insert && this.tileableFocused !== this.appLauncher) {
            insertAt = this.focusedIndex + 1;
        }

        const oldFocused = this.tileableFocused;
        this.tileableList.splice(insertAt, 0, msWindow);
        // Preserve focus index when splicing
        this.focusedIndex = this.tileableList.indexOf(oldFocused);

        // TODO: Emitting the event after a small duration is potentially bad.
        await this.emitTileableListChangedOnce();

        this.msWorkspaceActor.updateUI();
        if (focus) {
            this.focusTileable(msWindow);
        }
    }

    async removeMsWindow(msWindow: MsWindow) {
        logAssert(!this.destroyed, 'Workspace is destroyed');

        if (this.msWindowList.indexOf(msWindow) === -1) return;
        const oldFocused = this.tileableFocused;
        const tileableIndex = this.tileableList.indexOf(msWindow);
        this.tileableList.splice(tileableIndex, 1);

        if (oldFocused === msWindow) {
            let newFocusedIndex;
            const toFocus = this.popTileableFromFocusHistory();
            const chronologicalFocusIndex =
                toFocus !== undefined
                    ? this.tileableList.indexOf(toFocus)
                    : undefined;

            if (
                this.layout.preferredFocusHistory === 'chronological' &&
                chronologicalFocusIndex !== undefined
            ) {
                newFocusedIndex = chronologicalFocusIndex;
            } else {
                newFocusedIndex = Math.max(
                    0,
                    Math.min(this.tileableList.length - 1, this.focusedIndex)
                );

                if (
                    chronologicalFocusIndex === this.focusedIndex ||
                    chronologicalFocusIndex === this.focusedIndex - 1
                ) {
                    // If the previously focused tileable is adjacent to the closed tileable, prefer to focus that
                    newFocusedIndex = chronologicalFocusIndex;
                }

                if (
                    newFocusedIndex === this.tileableList.length - 1 &&
                    this.tileableList.length > 1
                ) {
                    // Since the app launcher was not focused, try to avoid making it focused if a window closes unless absolutely necessary.
                    newFocusedIndex--;
                }

                if (
                    newFocusedIndex !== chronologicalFocusIndex &&
                    chronologicalFocusIndex !== undefined
                ) {
                    // We didn't end up using the chronological focus index, so push it back onto the stack
                    this.pushTileableToFocusHistory(
                        this.tileableList[chronologicalFocusIndex]
                    );
                }
            }

            // During the 'tileableList-changed' event, no tileable is focused
            this.focusedIndex = -1;
            await this.emitTileableListChangedOnce();
            // Update our focus to the new index
            this.focusTileable(this.tileableList[newFocusedIndex]);
        } else {
            // Preserve focus
            this.focusedIndex = this.tileableList.indexOf(oldFocused);
            await this.emitTileableListChangedOnce();
        }

        this.msWorkspaceActor.updateUI();
        this.refreshFocus();
    }

    async emitTileableListChangedOnce() {
        if (!this.emitTileableChangedInProgress) {
            this.emitTileableChangedInProgress = new Promise<void>(
                (resolve) => {
                    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                        delete this.emitTileableChangedInProgress;
                        this.emit('tileableList-changed', this.tileableList);
                        resolve();
                        return GLib.SOURCE_REMOVE;
                    });
                }
            );
        }
        return this.emitTileableChangedInProgress;
    }

    swapTileable(firstTileable: Tileable, secondTileable: Tileable) {
        const firstIndex = this.tileableList.indexOf(firstTileable);
        const secondIndex = this.tileableList.indexOf(secondTileable);
        assert(firstIndex !== -1, 'Tileable did not exist in workspace');
        assert(secondIndex !== -1, 'Tileable did not exist in workspace');
        this.tileableList[firstIndex] = secondTileable;
        this.tileableList[secondIndex] = firstTileable;
        this.emit('tileableList-changed', this.tileableList);
    }

    swapTileableLeft(tileable: Tileable) {
        const index = this.tileableList.indexOf(tileable);
        if (index === -1) return;
        if (index > 0 && tileable != this.appLauncher) {
            const previousTileable = this.tileableList[index - 1];
            this.swapTileable(tileable, previousTileable);
            this.focusPreviousTileable();
        }
    }

    swapTileableRight(tileable: Tileable) {
        const index = this.tileableList.indexOf(tileable);
        if (index === -1) return;
        if (
            index < this.tileableList.length - 1 &&
            tileable != this.appLauncher
        ) {
            const nextTileable = this.tileableList[index + 1];
            if (nextTileable === this.appLauncher) {
                return;
            }
            this.swapTileable(tileable, nextTileable);
            this.focusNextTileable();
        }
    }

    focusNextTileable() {
        if (this.focusedIndex === this.tileableList.length - 1) {
            if (this.shouldCycleTileableNavigation()) {
                this.focusTileable(this.tileableList[0]);
                return;
            }
            return;
        }
        this.focusTileable(this.tileableList[this.focusedIndex + 1]);
    }

    focusPreviousTileable() {
        if (this.focusedIndex === 0) {
            if (this.shouldCycleTileableNavigation()) {
                this.focusTileable(
                    this.tileableList[this.tileableList.length - 1]
                );
                return;
            }
            return;
        }

        this.focusTileable(this.tileableList[this.focusedIndex - 1]);
    }

    focusAppLauncher() {
        if (
            !this.tileableList ||
            this.tileableList.length < 2 ||
            this.tileableFocused === this.appLauncher
        ) {
            return;
        }
        this.focusTileable(this.appLauncher);
    }

    focusPreviousTileableFromHistory() {
        const toFocus = this.popTileableFromFocusHistory();
        if (toFocus !== undefined) this.focusTileable(toFocus);
    }

    private maintainTileableFocusHistory() {
        // Remove old tileables
        for (let i = this.focusHistory.length - 1; i >= 0; i--) {
            if (!this.tileableList.includes(this.focusHistory[i])) {
                this.focusHistory.splice(i, 1);
            }
        }

        while (this.focusHistory.length > MAX_FOCUS_HISTORY_LENGTH)
            this.focusHistory.splice(0, 1);
    }

    private pushTileableToFocusHistory(tileable: Tileable) {
        logAssert(
            this.tileableList.includes(tileable),
            "Tileable doesn't exist in workspace"
        );
        this.focusHistory.push(tileable);
        this.maintainTileableFocusHistory();
    }

    /** Pops a valid tileable from the focus stack.
     * The returned tileable is guaranteed to be either undefined or a tileable in this workspace.
     */
    private popTileableFromFocusHistory(): Tileable | undefined {
        this.maintainTileableFocusHistory();
        return this.focusHistory.pop();
    }

    focusTileable(tileable: Tileable | null, forced = false) {
        if (!tileable || (tileable === this.tileableFocused && !forced)) {
            return;
        }

        const newFocusIndex = this.tileableList.indexOf(tileable);
        if (newFocusIndex === -1) return;

        const oldTileableFocused = this.tileableFocused;
        if (
            tileable !== oldTileableFocused &&
            oldTileableFocused !== null &&
            // Never push the app launcher to the focus history, it's rarely useful to focus it automatically
            oldTileableFocused instanceof MsWindow
        ) {
            this.pushTileableToFocusHistory(oldTileableFocused);
        }

        this.focusedIndex = newFocusIndex;
        if (this.msWorkspaceManager.getActiveMsWorkspace() === this) {
            tileable.grab_key_focus();
        }

        this.emit('tileable-focus-changed', tileable, oldTileableFocused);
    }

    refreshFocus(forced = false) {
        if (
            this.msWorkspaceManager.getActiveMsWorkspace() !== this &&
            !forced
        ) {
            return;
        }

        const focused = this.tileableFocused;
        if (focused !== null) focused.grab_key_focus();
    }

    setTileableAtIndex(tileableToMove: Tileable, index: number) {
        const tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);
        this.tileableList.splice(index, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList);
    }

    nextLayout(direction: number) {
        this.layout.onDestroy();

        let { key } = (this.layout.constructor as LayoutType).state;
        if (
            !this.state.layoutStateList.find(
                (layoutState) => layoutState.key === key
            )
        ) {
            key = this.state.layoutStateList[0].key;
        }
        let nextIndex =
            this.state.layoutStateList.findIndex(
                (layoutState) => layoutState.key === key
            ) + direction;
        if (nextIndex < 0) {
            nextIndex += this.state.layoutStateList.length;
        }
        nextIndex = nextIndex % this.state.layoutStateList.length;
        // Get the next layout available
        const newLayoutState = this.state.layoutStateList[nextIndex];
        this.setLayoutByKey(newLayoutState.key);
    }

    setLayoutByKey(layoutKey: string) {
        logAssert(!this.destroyed, 'Workspace is destroyed');

        if (this.layout) {
            this.layout.onDestroy();
        }

        this.layout = Me.layoutManager!.createLayout(
            this,
            assertNotNull(
                this.state.layoutStateList.find(
                    (layoutState) => layoutState.key === layoutKey
                )
            )
        );
        this.msWorkspaceActor.tileableContainer.set_layout_manager(this.layout);
        this.emit('tiling-layout-changed');
    }

    shouldPanelBeVisible() {
        return !this.containFullscreenWindow &&
            this.msWorkspaceManager &&
            Me.layout!
            ? Me.layout!.panelsVisible
            : true;
    }

    shouldCycleTileableNavigation() {
        return getSettings('tweaks').get_boolean('cycle-through-windows');
    }

    isDisplayed() {
        if (this.monitorIsExternal) {
            return true;
        } else {
            return (
                this === this.msWorkspaceManager.getActivePrimaryMsWorkspace()
            );
        }
    }

    activate() {
        const workspace = this.workspace;
        if (workspace === null) return;

        if (
            this.tileableFocused instanceof MsWindow &&
            this.tileableFocused.metaWindow &&
            !this.tileableFocused.dragged
        ) {
            workspace.activate_with_focus(
                this.tileableFocused.metaWindow,
                global.get_current_time()
            );
        } else {
            workspace.activate(global.get_current_time());
            // grab the tileable to prevent other window to take focus (eg: In multi-monitor setup if an window is opened on external monitor, switching to empty workspace or workspace with placeholder focused would result on focus being highjacked by the real window on external monitor instead)
            const grab = global.stage.grab(this.tileableFocused);
            // Focus the tileable that is selected
            this.refreshFocus();
            // Dismiss the grab
            grab.dismiss();
        }
    }

    setMonitor(monitor: Main.Monitor) {
        this.monitor = monitor;
        this.monitorIsExternal =
            monitor.index !== Main.layoutManager.primaryIndex;
        this.msWindowList.forEach((msWindow) => {
            msWindow.setMsWorkspace(this);
        });
    }
}

@registerGObjectClass
export class MsWorkspaceActor extends Clutter.Actor {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'MsWorkspaceActor',
    };
    tileableContainer: Clutter.Actor;
    panel: HorizontalPanel;
    msWorkspace: MsWorkspace;

    constructor(msWorkspace: MsWorkspace) {
        super({
            clip_to_allocation: true,
            x_expand: true,
            y_expand: true,
            //background_color: new Clutter.Color({ red: 120, alpha: 255 }),
        });
        this.msWorkspace = msWorkspace;
        this.tileableContainer = new Clutter.Actor({
            //background_color: new Clutter.Color({ blue: 120, alpha: 255 }),
        });

        this.panel = new HorizontalPanel(msWorkspace);
        this.add_child(this.tileableContainer);
        this.add_child(this.panel);
        this.updateUI();
    }

    updateUI() {
        const monitorInFullScreen = global.display.get_monitor_in_fullscreen(
            this.msWorkspace.monitor.index
        );
        this.panel.visible =
            this.msWorkspace.shouldPanelBeVisible() && !monitorInFullScreen;
        this.visible = !monitorInFullScreen;
    }

    override vfunc_allocate(box: Clutter.ActorBox) {
        this.set_allocation(box);
        const contentBox = new Clutter.ActorBox();
        contentBox.x2 = box.get_width();
        contentBox.y2 = box.get_height();
        const panelPosition = Me.msThemeManager!.horizontalPanelPosition;
        const panelHeight = (
            this.panel.get_preferred_height(-1) as [number, number]
        )[1];
        const panelBox = new Clutter.ActorBox();
        panelBox.x1 = contentBox.x1;
        panelBox.x2 = contentBox.x2;

        panelBox.y1 =
            panelPosition === HorizontalPanelPositionEnum.TOP
                ? contentBox.y1
                : contentBox.y2 - panelHeight;
        panelBox.y2 = panelBox.y1 + panelHeight;
        this.panel.allocate(panelBox);
        const containerBox = contentBox.copy();
        if (this.panel.visible) {
            if (panelPosition === HorizontalPanelPositionEnum.TOP) {
                containerBox.y1 = containerBox.y1 + panelHeight;
            } else {
                containerBox.y2 = containerBox.y2 - panelHeight;
            }
        }
        this.tileableContainer.allocate(containerBox);
        for (const actor of this.get_children()) {
            if (actor !== this.panel && actor !== this.tileableContainer) {
                actor.allocate(containerBox);
            }
        }
    }
}

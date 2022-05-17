/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import { HorizontalPanel } from 'src/layout/msWorkspace/horizontalPanel/horizontalPanel';
import { MsWindow, MsWindowState } from 'src/layout/msWorkspace/msWindow';
import { MsWorkspaceCategory } from 'src/layout/msWorkspace/msWorkspaceCategory';
import { LayoutState, LayoutType } from 'src/manager/layoutManager';
import { HorizontalPanelPositionEnum } from 'src/manager/msThemeManager';
import { MsWorkspaceManager } from 'src/manager/msWorkspaceManager';
import { layout } from 'ui';
import { assertNotNull, logAssert } from 'src/utils/assert';
import { Allocate, SetAllocation } from 'src/utils/compatibility';
import { registerGObjectClass, WithSignals } from 'src/utils/gjs';
import { reparentActor } from 'src/utils/index';
import { getSettings } from 'src/utils/settings';
import { SignalHandle } from 'src/utils/signal';
import { MsApplicationLauncher } from 'src/widget/msApplicationLauncher';
import Monitor = layout.Monitor;
const Signals = imports.signals;
import { main as Main } from 'ui';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

export type Tileable = MsWindow | MsApplicationLauncher;

function isMsWindow(argument: any): argument is MsWindow {
    return argument instanceof MsWindow;
}

export interface MsWorkspaceState {
    // This is different from monitorIsExternal since it's used to determined if it's should be moved to an external monitor when one is plugged
    external: boolean;
    focusedIndex: number | null;
    forcedCategory: string | null | undefined;
    msWindowList: MsWindowState[];
    layoutStateList: LayoutState[];
    layoutKey: string;
}

export class MsWorkspace extends WithSignals {
    msWorkspaceManager: MsWorkspaceManager;
    private _state: MsWorkspaceState;
    insertedMsWindow: MsWindow | null;
    appLauncher: MsApplicationLauncher | undefined;
    tileableList: Tileable[];
    msWorkspaceCategory: MsWorkspaceCategory;
    precedentIndex: number | null;
    msWorkspaceActor: MsWorkspaceActor;
    // Safety: We always assign this because we call setLayoutByKey from the constructor
    layout!: InstanceType<LayoutType>;
    destroyed: boolean | undefined;
    closing = false;
    // Safety: We always assign this because we call setMonitor from the constructor
    monitorIsExternal!: boolean;
    // Definitely set because we call `setMonitor` in the constructor
    monitor!: Monitor;
    emitTileableChangedInProgress: Promise<void> | undefined;
    appLauncherChangedSignal: SignalHandle;

    constructor(
        msWorkspaceManager: MsWorkspaceManager,
        monitor: Monitor,
        state: Partial<MsWorkspaceState> = {}
    ) {
        super();
        this.msWorkspaceManager = msWorkspaceManager;
        this.setMonitor(monitor);
        this._state = Object.assign(
            {
                // This is different from monitorIsExternal since it's used to determined if it's should be moved to an external monitor when one is plugged
                external:
                    this.monitor.index !== Main.layoutManager.primaryIndex,
                focusedIndex: 0,
                forcedCategory: null,
                msWindowList: [],
                layoutStateList: Me.layoutManager.defaultLayoutKeyList.map(
                    (layoutKey) => {
                        return Me.layoutManager.getLayoutByKey(layoutKey).state;
                    }
                ),
                layoutKey: Me.layoutManager.defaultLayoutKey,
            },
            state
        );
        this.insertedMsWindow = null;

        this.appLauncherChangedSignal = SignalHandle.connect(
            Me.msThemeManager,
            'app-launcher-changed',
            () => {
                if (Me.msThemeManager.appLauncher) {
                    if (!this.appLauncher) {
                        // Create new AppLauncher instance
                        if (!this.appLauncher) {
                            const oldTileableList = [...this.tileableList];
                            this.appLauncher = new MsApplicationLauncher(this);
                            this.tileableList.push(this.appLauncher);
                            this.emitTileableListChangedOnce(oldTileableList);
                        }
                    }
                } else {
                    if (this.appLauncher) {
                        // Destroy AppLauncher instance
                        if (this.appLauncher) {
                            const oldTileableList = [...this.tileableList];
                            const tileableIndex = this.tileableList.indexOf(this.appLauncher);
                            if (this.tileableFocused === this.appLauncher) {
                                this.focusPreviousTileable();
                            }
                            if (tileableIndex >= 0) {
                                this.tileableList.splice(tileableIndex, 1);
                                this.emitTileableListChangedOnce(oldTileableList);
                            }
                            this.appLauncher.onDestroy();
                        }
                        delete this.appLauncher;
                    }
                }
            }
        );

        if (Me.msThemeManager.appLauncher) {
            this.appLauncher = new MsApplicationLauncher(this);

            // First add AppLauncher since windows are inserted before it otherwise the order is a mess
            this.tileableList = [this.appLauncher];
        } else {
            this.tileableList = [];
        }

        this.msWorkspaceCategory = new MsWorkspaceCategory(
            this,
            this._state.forcedCategory
        );
        this.precedentIndex = this._state.focusedIndex;

        this._state.msWindowList.forEach((msWindowData) => {
            Me.msWindowManager.createNewMsWindow(
                msWindowData.appId,
                msWindowData.metaWindowIdentifier,
                null,
                {
                    msWorkspace: this,
                    focus: false,
                    insert: false,
                },
                msWindowData.persistent ? msWindowData.persistent : undefined,
                {
                    x: msWindowData.x,
                    y: msWindowData.y,
                    width: msWindowData.width,
                    height: msWindowData.height,
                }
            );
        });

        this.msWorkspaceCategory.refreshCategory();
        this.msWorkspaceActor = new MsWorkspaceActor(this);
        this.setLayoutByKey(this._state.layoutKey);

        this.connect('tileableList-changed', () => {
            this.msWorkspaceCategory.refreshCategory();
        });
    }

    destroy() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        if (this.appLauncher) {
            this.appLauncher.onDestroy();
        }
        this.appLauncherChangedSignal.disconnect();
        this.layout.onDestroy();
        if (this.msWorkspaceActor) {
            this.msWorkspaceActor.destroy();
        }
        this.destroyed = true;
    }

    get focusedIndex() {
        return this._state.focusedIndex;
    }

    set focusedIndex(index) {
        this._state.focusedIndex = index;
        Me.stateManager.stateChanged();
    }

    get state(): MsWorkspaceState {
        this._state.msWindowList = this.tileableList
            .filter(isMsWindow)
            .filter((msWindow) => {
                return !msWindow.app.is_window_backed();
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

        if (
            !this.tileableList ||
            (this.tileableList && !this.tileableList.length) ||
            this.focusedIndex === null
        ) {
            return null;
        }
        return this.tileableList[this.focusedIndex] || null;
    }

    get msWindowList() {
        return Me.msWindowManager.msWindowList.filter((msWindow) => {
            return msWindow.msWorkspace && msWindow.msWorkspace === this;
        });
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

    addMsWindow(msWindow: MsWindow, focus = false, insert = false) {
        if (
            !msWindow ||
            (msWindow.msWorkspace && msWindow.msWorkspace === this)
        )
            return Promise.resolve();

        msWindow.setMsWorkspace(this);
        return this.addMsWindowUnchecked(msWindow, focus, insert).catch((e) =>
            Me.logFocus('addMsWindowUnchecked failed')
        );
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

        const oldTileableList = [...this.tileableList];

        let insertAt = this.tileableList.length - 1;

        // Do not insert tileable after App Launcher
        if (
            insert &&
            this.tileableFocused &&
            this.tileableFocused !== this.appLauncher &&
            this.focusedIndex !== null
        ) {
            insertAt = this.focusedIndex + 1;
            this.insertedMsWindow = msWindow;
        }

        this.tileableList.splice(insertAt, 0, msWindow);

        if (focus) {
            this.focusTileable(msWindow);
        }
        this.msWorkspaceActor.updateUI();
        await this.emitTileableListChangedOnce(oldTileableList);
    }

    async removeMsWindow(msWindow: MsWindow) {
        logAssert(!this.destroyed, 'Workspace is destroyed');

        if (this.msWindowList.indexOf(msWindow) === -1) return;
        const tileableIsFocused = msWindow === this.tileableFocused;
        const tileableIndex = this.tileableList.indexOf(msWindow);
        const oldTileableList: (Tileable | null)[] = [...this.tileableList];
        this.tileableList.splice(tileableIndex, 1);
        let appLauncherIndex = -1;
        if (this.appLauncher) {
            appLauncherIndex = this.tileableList.indexOf(this.appLauncher);
        }
        // Update the focusedIndex
        if (this.tileableList.length === 0) {
            this.focusedIndex = null;
        } else {
            if (
                // If there's no more focused msWindow on this workspace focus the last one
                this.focusedIndex === null ||
                this.focusedIndex >= this.tileableList.length
            ) {
                this.focusedIndex = this.tileableList.length - 1
            } else if (
                // If the removed window has just been inserted focus previous instead of next
                (tileableIsFocused && this.insertedMsWindow) ||
                // If the removed window is to the left of the focused window focus previous instead of next
                this.focusedIndex > tileableIndex ||
                // Always try to focus a window instead of the AppLauncher
                (appLauncherIndex > -1 && this.focusedIndex >= appLauncherIndex)
            ) {
                this.focusedIndex = Math.max(0, this.focusedIndex - 1);
            }
        }

        await this.emitTileableListChangedOnce(oldTileableList);

        if (this.focusedIndex !== null) {
            this.focusTileable(this.tileableList[this.focusedIndex], true);
        }
        this.msWorkspaceActor.updateUI();
        this.refreshFocus();
    }

    async emitTileableListChangedOnce(oldTileableList: (Tileable | null)[]) {
        if (!this.emitTileableChangedInProgress) {
            this.emitTileableChangedInProgress = new Promise<void>(
                (resolve) => {
                    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                        delete this.emitTileableChangedInProgress;
                        this.emit(
                            'tileableList-changed',
                            this.tileableList,
                            oldTileableList
                        );
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
        const oldTileableList = [...this.tileableList];
        this.tileableList[firstIndex] = secondTileable;
        this.tileableList[secondIndex] = firstTileable;
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
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
        if (this.focusedIndex === null && this.tileableList.length > 0) {
            this.focusedIndex = 0;
        } else if (this.focusedIndex === null) {
            return;
        }
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
        if (this.focusedIndex === null && this.tileableList.length > 0) {
            this.focusedIndex = 0;
        } else if (this.focusedIndex === null) {
            return;
        }
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
            Me.msThemeManager.appLauncher &&
            this.appLauncher &&
            this.tileableList
        ) {
            this.focusTileable(this.appLauncher);
        }
    }

    focusPrecedentTileable() {
        if (this.precedentIndex === null && this.tileableList.length > 0) {
            this.precedentIndex = 0;
        } else if (this.precedentIndex === null) {
            return;
        }
        if (!this.tileableList || this.tileableList.length < 2) return;
        if (
            this.focusedIndex !== this.precedentIndex &&
            this.precedentIndex < this.tileableList.length
        ) {
            this.focusTileable(this.tileableList[this.precedentIndex]);
        }
    }

    focusTileable(
        tileable: MsWindow | MsApplicationLauncher | null,
        forced = false
    ) {
        if (!tileable || (tileable === this.tileableFocused && !forced)) {
            return;
        }

        if (tileable !== this.insertedMsWindow) {
            this.insertedMsWindow = null;
        }

        const oldTileableFocused = this.tileableFocused;
        if (tileable !== this.tileableFocused) {
            this.precedentIndex = this.focusedIndex;
        }

        if (tileable && this.tileableList.length) {
            this.focusedIndex = Math.max(this.tileableList.indexOf(tileable), 0);
        }

        if (tileable && this.msWorkspaceManager.getActiveMsWorkspace() === this) {
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

    setTileableBefore(tileableToMove: Tileable, tileableRelative: Tileable) {
        const oldTileableList = [...this.tileableList];
        const tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);

        const tileableRelativeIndex =
            this.tileableList.indexOf(tileableRelative);
        this.tileableList.splice(tileableRelativeIndex, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }

    setTileableAfter(tileableToMove: Tileable, tileableRelative: Tileable) {
        const oldTileableList = [...this.tileableList];
        const tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);

        const tileableRelativeIndex =
            this.tileableList.indexOf(tileableRelative);
        this.tileableList.splice(tileableRelativeIndex + 1, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }

    setTileableAtIndex(tileableToMove: Tileable, index: number) {
        const oldTileableList = [...this.tileableList];
        const tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);
        this.tileableList.splice(index, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
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

        this.layout = Me.layoutManager.createLayout(this, assertNotNull(this.state.layoutStateList.find(
            (layoutState) => layoutState.key === layoutKey
        )));
        this.msWorkspaceActor.tileableContainer.set_layout_manager(this.layout);
        this.emit('tiling-layout-changed');
    }

    shouldPanelBeVisible() {
        return !this.containFullscreenWindow &&
            this.msWorkspaceManager &&
            Me.layout
            ? Me.layout.panelsVisible
            : true;
    }

    shouldCycleTileableNavigation() {
        return getSettings('tweaks').get_boolean('cycle-through-windows');
    }

    // Dead code
    // emitWindowsChanged(newWindows, oldWindows, debouncedArgs) {
    //     // In case of direct call check if it has _debouncedArgs
    //     if (debouncedArgs) {
    //         // Get first debounced oldWindows
    //         const firstOldWindows = debouncedArgs[0][1];
    //         // And compare it with the new newWindows
    //         if (
    //             newWindows.length === firstOldWindows.length &&
    //             newWindows.every((window, i) => firstOldWindows[i] === window)
    //         ) {
    //             // If it's the same, the changes have compensated themselves
    //             // So in the end nothing happened:

    //             return;
    //         }
    //         oldWindows = firstOldWindows;
    //     }

    //     if (!this.destroyed) {
    //         // Make it async to prevent concurrent debounce calls
    //         if (debouncedArgs) {
    //             GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
    //                 this.emit('windows-changed', newWindows, oldWindows);
    //                 return GLib.SOURCE_REMOVE;
    //             });
    //         } else {
    //             this.emit('windows-changed', newWindows, oldWindows);
    //         }
    //     }
    // }

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
        }
    }

    focusLastTileable() {
        if (this.focusedIndex === null && this.tileableList.length > 0) {
            this.focusedIndex = 0;
        } else if (this.focusedIndex === null) {
            return;
        }
        if (this.tileableList.length) {
            const lastTileable =
                this.tileableList[this.focusedIndex] ||
                this.tileableList.slice(-1)[0];
            this.focusTileable(lastTileable);
        } else {
            //this.focusTileable(null);
        }
    }

    setMonitor(monitor: Monitor) {
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
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsWorkspaceActor',
    };
    tileableContainer: Clutter.Actor<
        Clutter.LayoutManager,
        Clutter.ContentPrototype
    >;
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
        if (this.panel) {
            this.panel.visible =
                this.msWorkspace.shouldPanelBeVisible() && !monitorInFullScreen;
        }
        this.visible = !monitorInFullScreen;
    }

    override vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const contentBox = new Clutter.ActorBox();
        contentBox.x2 = box.get_width();
        contentBox.y2 = box.get_height();
        const panelPosition = Me.msThemeManager.horizontalPanelPosition;
        const panelHeight = (this.panel.get_preferred_height(-1) as [number, number])[1];
        const panelBox = new Clutter.ActorBox();
        panelBox.x1 = contentBox.x1;
        panelBox.x2 = contentBox.x2;

        panelBox.y1 =
            panelPosition === HorizontalPanelPositionEnum.TOP
                ? contentBox.y1
                : contentBox.y2 - panelHeight;
        panelBox.y2 = panelBox.y1 + panelHeight;
        Allocate(this.panel, panelBox, flags);
        const containerBox = new Clutter.ActorBox();
        containerBox.x1 = contentBox.x1;
        containerBox.x2 = contentBox.x2;
        containerBox.y1 = contentBox.y1;
        containerBox.y2 = contentBox.y2;
        if (this.panel && this.panel.visible) {
            if (panelPosition === HorizontalPanelPositionEnum.TOP) {
                containerBox.y1 = containerBox.y1 + panelHeight;
            } else {
                containerBox.y2 = containerBox.y2 - panelHeight;
            }
        }
        Allocate(this.tileableContainer, containerBox, flags);
        this.get_children()
            .filter(
                (actor) =>
                    [this.panel, this.tileableContainer].indexOf(actor) === -1
            )
            .forEach((actor) => {
                Allocate(actor, containerBox, flags);
            });
    }
}

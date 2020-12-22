/** Gnome libs imports */
const { Clutter, GLib, GObject } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const {
    HorizontalPanel,
} = Me.imports.src.layout.msWorkspace.horizontalPanel.horizontalPanel;
const { MsApplicationLauncher } = Me.imports.src.widget.msApplicationLauncher;
const { reparentActor } = Me.imports.src.utils.index;
const {
    MsWorkspaceCategory,
} = Me.imports.src.layout.msWorkspace.msWorkspaceCategory;
const { getSettings } = Me.imports.src.utils.settings;
const { HorizontalPanelPositionEnum } = Me.imports.src.manager.msThemeManager;

/* exported MsWorkspace */
var MsWorkspace = class MsWorkspace {
    constructor(msWorkspaceManager, monitor, state = {}) {
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
        this.appLauncher = new MsApplicationLauncher(this);

        // First add AppLauncher since windows are inserted before it otherwise the order is a mess
        this.tileableList = [this.appLauncher];

        this.msWorkspaceCategory = new MsWorkspaceCategory(
            this,
            this._state.forcedCategory
        );
        this.precedentIndex = this._state.focusedIndex;

        this._state.msWindowList.forEach((msWindowData) => {
            this.addMsWindow(
                Me.msWindowManager.createNewMsWindow(
                    msWindowData.appId,
                    msWindowData.metaWindowIdentifier,
                    null,
                    msWindowData.persistent ? msWindowData.persistent : null,
                    {
                        x: msWindowData.x,
                        y: msWindowData.y,
                        width: msWindowData.width,
                        height: msWindowData.height,
                    }
                )
            );
        });

        this.msWorkspaceCategory.determineCategory();

        this.msWorkspaceActor = new MsWorkspaceActor(this);
        this.setLayoutByKey(this._state.layoutKey);

        this.connect('tileableList-changed', () => {
            this.msWorkspaceCategory.determineCategory();
        });
    }

    destroy() {
        this.layout.onDestroy();
        if (this.msWorkspaceActor) {
            this.msWorkspaceActor.destroy();
            delete this.msWorkspaceActor;
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

    get state() {
        this._state.msWindowList = this.tileableList
            .filter((tileable) => {
                return tileable instanceof MsWindow;
            })
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
            this._state.forcedCategory = this.msWorkspaceCategory.forcedCategory;
        }
        return this._state;
    }

    get tileableFocused() {
        if (!this.tileableList) return null;
        return this.tileableList[this.focusedIndex];
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
        Promise.all(
            this.msWindowList.map((msWindow) => {
                return msWindow.kill();
            })
        ).then((_params) => {
            this.emit('readyToBeClosed');
        });
    }

    async addMsWindow(msWindow, focus = false, insert = false) {
        if (
            !msWindow ||
            (msWindow.msWorkspace && msWindow.msWorkspace === this)
        )
            return Promise.resolve();

        msWindow.setMsWorkspace(this);
        if (this.msWorkspaceActor && !msWindow.dragged) {
            reparentActor(msWindow, this.msWorkspaceActor.tileableContainer);
        }

        const oldTileableList = [...this.tileableList];

        let insertAt = this.tileableList.length - 1;

        // Do not insert tileable after App Launcher
        if (insert && this.tileableFocused !== this.appLauncher) {
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

    async removeMsWindow(msWindow) {
        if (this.msWindowList.indexOf(msWindow) === -1) return;
        const tileableIsFocused = msWindow === this.tileableFocused;
        const tileableIndex = this.tileableList.indexOf(msWindow);
        const oldTileableList = [...this.tileableList];
        oldTileableList.splice(tileableIndex, 1, [null]);
        this.tileableList.splice(tileableIndex, 1);
        // Update the focusedIndex
        if (
            (tileableIsFocused && this.insertedMsWindow) ||
            this.focusedIndex > tileableIndex
        ) {
            this.focusedIndex--;
        } else if (
            this.focusedIndex === this.tileableList.length - 1 &&
            this.tileableList.length > 1
        ) {
            this.focusedIndex--;
        }
        await this.emitTileableListChangedOnce(oldTileableList);
        // If there's no more focused msWindow on this workspace focus the last one

        if (tileableIsFocused) {
            // If the window removed as just been inserted focus previous instead of next
            this.focusTileable(this.tileableList[this.focusedIndex], true);
        }
        this.msWorkspaceActor.updateUI();
        this.refreshFocus();
    }

    async emitTileableListChangedOnce(oldTileableList) {
        if (!this.emitTileableChangedInProgress) {
            this.emitTileableChangedInProgress = new Promise((resolve) => {
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
            });
        }
        return this.emitTileableChangedInProgress;
    }

    swapTileable(firstTileable, secondTileable) {
        const firstIndex = this.tileableList.indexOf(firstTileable);
        const secondIndex = this.tileableList.indexOf(secondTileable);
        const oldTileableList = [...this.tileableList];
        this.tileableList[firstIndex] = secondTileable;
        this.tileableList[secondIndex] = firstTileable;
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }

    swapTileableLeft(tileable) {
        const index = this.tileableList.indexOf(tileable);
        if (index === -1) return;
        if (index > 0 && tileable != this.appLauncher) {
            let previousTileable = this.tileableList[index - 1];
            this.swapTileable(tileable, previousTileable);
            this.focusPreviousTileable();
        }
    }

    swapTileableRight(tileable) {
        const index = this.tileableList.indexOf(tileable);
        if (index === -1) return;
        if (
            index < this.tileableList.length - 1 &&
            tileable != this.appLauncher
        ) {
            let nextTileable = this.tileableList[index + 1];
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
            this.focusTileable === this.appLauncher
        ) {
            return;
        }
        this.focusTileable(this.appLauncher);
    }

    focusPrecedentTileable() {
        if (!this.tileableList || this.tileableList.length < 2) return;
        if (
            this.focusedIndex !== this.precedentIndex &&
            this.precedentIndex < this.tileableList.length
        ) {
            this.focusTileable(this.tileableList[this.precedentIndex]);
        }
    }

    focusTileable(tileable, forced) {
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

        this.focusedIndex = Math.max(this.tileableList.indexOf(tileable), 0);
        if (this.msWorkspaceManager.getActiveMsWorkspace() === this) {
            tileable.grab_key_focus();
        }

        this.emit('tileable-focus-changed', tileable, oldTileableFocused);
    }

    refreshFocus(forced) {
        if (
            this.msWorkspaceManager.getActiveMsWorkspace() !== this &&
            !forced
        ) {
            return;
        }

        this.tileableFocused.grab_key_focus();
    }

    setTileableBefore(tileableToMove, tileableRelative) {
        const oldTileableList = [...this.tileableList];
        let tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);

        let tileableRelativeIndex = this.tileableList.indexOf(tileableRelative);
        this.tileableList.splice(tileableRelativeIndex, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }

    setTileableAfter(tileableToMove, tileableRelative) {
        const oldTileableList = [...this.tileableList];
        let tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);

        let tileableRelativeIndex = this.tileableList.indexOf(tileableRelative);
        this.tileableList.splice(tileableRelativeIndex + 1, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }

    setTileableAtIndex(tileableToMove, index) {
        const oldTileableList = [...this.tileableList];
        let tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);
        this.tileableList.splice(index, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }

    nextLayout(direction) {
        this.layout.onDestroy();

        let { key } = this.layout.constructor.state;
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

    setLayoutByKey(layoutKey) {
        if (this.layout) {
            this.layout.onDestroy();
        }

        const Layout = Me.layoutManager.getLayoutByKey(layoutKey);
        this.layout = new Layout(
            this,
            this.state.layoutStateList.find(
                (layoutState) => layoutState.key === layoutKey
            )
        );
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

    emitWindowsChanged(newWindows, oldWindows, debouncedArgs) {
        // In case of direct call check if it has _debouncedArgs
        if (debouncedArgs) {
            // Get first debounced oldWindows
            const firstOldWindows = debouncedArgs[0][1];
            // And compare it with the new newWindows
            if (
                newWindows.length === firstOldWindows.length &&
                newWindows.every((window, i) => firstOldWindows[i] === window)
            ) {
                // If it's the same, the changes have compensated themselves
                // So in the end nothing happened:

                return;
            }
            oldWindows = firstOldWindows;
        }

        if (!this.destroyed) {
            // Make it async to prevent concurrent debounce calls
            if (debouncedArgs) {
                GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                    this.emit('windows-changed', newWindows, oldWindows);
                    return GLib.SOURCE_REMOVE;
                });
            } else {
                this.emit('windows-changed', newWindows, oldWindows);
            }
        }
    }

    setApps(apps) {
        this.apps = apps;
        this.categorizedAppCard._loadApps(apps);
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
        if (this.monitorIsExternal) {
            return;
        }
        if (
            this.tileableFocused instanceof MsWindow &&
            this.tileableFocused.metaWindow &&
            !this.tileableFocused.dragged
        ) {
            this.workspace.activate_with_focus(
                this.tileableFocused.metaWindow,
                global.get_current_time()
            );
        } else {
            this.workspace.activate(global.get_current_time());
        }
    }

    focusLastTileable() {
        if (this.tileableList.length) {
            let lastTileable =
                this.tileableList[this.focusedIndex] ||
                this.tileableList.slice(-1)[0];
            this.focusTileable(lastTileable);
        } else {
            //this.focusTileable(null);
        }
    }

    setMonitor(monitor) {
        this.monitor = monitor;
        this.monitorIsExternal =
            monitor.index !== Main.layoutManager.primaryIndex;
        this.msWindowList.forEach((msWindow) => {
            msWindow.setMsWorkspace(this);
        });
    }
};
Signals.addSignalMethods(MsWorkspace.prototype);

var MsWorkspaceActor = GObject.registerClass(
    {
        GTypeName: 'MsWorkspaceActor',
    },
    class MsWorkspaceActor extends Clutter.Actor {
        _init(msWorkspace) {
            super._init({
                clip_to_allocation: true,
                x_expand: true,
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
                    this.msWorkspace.shouldPanelBeVisible() &&
                    !monitorInFullScreen;
            }
            this.visible = !monitorInFullScreen;
        }

        vfunc_allocate(box, flags) {
            SetAllocation(this, box, flags);
            let contentBox = new Clutter.ActorBox();
            contentBox.x2 = box.get_width();
            contentBox.y2 = box.get_height();
            let panelPosition = Me.msThemeManager.horizontalPanelPosition;
            const panelHeight = this.panel.get_preferred_height(-1)[1];
            let panelBox = new Clutter.ActorBox();
            panelBox.x1 = contentBox.x1;
            panelBox.x2 = contentBox.x2;

            panelBox.y1 =
                panelPosition === HorizontalPanelPositionEnum.TOP
                    ? contentBox.y1
                    : contentBox.y2 - panelHeight;
            panelBox.y2 = panelBox.y1 + panelHeight;
            Allocate(this.panel, panelBox, flags);
            let containerBox = new Clutter.ActorBox();
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
                        [this.panel, this.tileableContainer].indexOf(actor) ===
                        -1
                )
                .forEach((actor) => {
                    Allocate(actor, containerBox, flags);
                });
        }
    }
);

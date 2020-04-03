const { Clutter, GLib, St, Shell } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;
const Background = imports.ui.background;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    MaximizeLayout
} = Me.imports.src.materialShell.msWorkspace.tilingLayouts.maximize;
const { MsWindow } = Me.imports.src.materialShell.msWorkspace.msWindow;

const TopPanel = Me.imports.src.widget.topPanelWidget.TopPanel;
const { debounce } = Me.imports.src.utils.index;
const WindowUtils = Me.imports.src.utils.windows;

const { MsApplicationLauncher } = Me.imports.src.widget.msApplicationLauncher;

const { Stack } = Me.imports.src.widget.layout;

const EMIT_DEBOUNCE_DELAY = 100;

var MsWorkspace = class MsWorkspace {
    constructor(msWorkspaceManager, monitor, initialState) {
        this.msWorkspaceManager = msWorkspaceManager;
        this.monitor = monitor;
        this.monitorIsPrimary =
            monitor.index === Main.layoutManager.primaryIndex;
        this.tileableList = [];
        this.floatableList = [];
        this.uiVisible = false;
        this.focusedIndex = 0;

        const Layout = global.tilingManager.getLayoutByKey(
            initialState ? initialState.tilingLayout : 'maximized'
        );
        this.tilingLayout = new Layout(this);
        this.actor = new St.Widget({ style_class: 'msWorkspace' });
        this.actor.set_position(this.monitor.x, this.monitor.y);
        this.tileableContainer = new St.Widget();
        this.floatableContainer = new St.Widget();
        this.appLauncher = new MsApplicationLauncher(this);
        this.tileableList.push(this.appLauncher);
        this.tileableContainer.add_child(this.appLauncher);
        this.panel = new TopPanel(this);

        if (this.monitor.index !== Main.layoutManager.primaryIndex) {
            Main.layoutManager._trackActor(this.panel, {
                affectsStruts: true
            });
        }

        this.workAreaChangedId = global.display.connect(
            'workareas-changed',
            () => {
                this.updateLayout();
            }
        );
        this.loadedSignalId = Me.connect(
            'extension-loaded',
            this.handleExtensionLoaded.bind(this)
        );

        this.actor.add_child(this.tileableContainer);
        this.actor.add_child(this.floatableContainer);
        this.actor.add_child(this.panel);
        this.updateLayout();
        this.updateUI();
        this.msWorkspaceManager.msWorkspaceContainer.add_child(this.actor);

        if (initialState) {
            log(
                'IN MSWORKSPACE CREATION',
                initialState,
                initialState.msWindowList.length
            );
            initialState.msWindowList.forEach(msWindowData => {
                this.addMsWindow(
                    Me.msWindowManager.createNewMsWindow(
                        msWindowData.appId,
                        msWindowData.metaWindowIdentifier
                    )
                );
            });
        }
    }

    destroy() {
        log('destroy msWorkspace');
        global.display.disconnect(this.workAreaChangedId);
        Me.disconnect(this.loadedSignalId);
        this.tilingLayout.onDestroy();
        if (this.actor) {
            this.actor.destroy();
            delete this.actor;
        }
        this.destroyed = true;
    }

    get tileableFocused() {
        return this.tileableList[this.focusedIndex];
    }

    get msWindowList() {
        return Me.msWindowManager.msWindowList.filter(msWindow => {
            return msWindow.msWorkspace && msWindow.msWorkspace === this;
        });
    }

    isTopBarVisible() {
        return (
            !global.display.get_monitor_in_fullscreen(this.monitor.index) &&
            !Main.overview.visible
        );
    }
    updateUI() {
        if (this.actor) {
            this.actor.visible = this.uiVisible;
        }
        if (this.panel) {
            this.panel.visible = this.shouldPanelBeVisible();
        }
    }

    updateLayout() {
        let workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        //this.actorContainer.set_position(this.monitor.x, this.monitor.y);
        this.actor.set_size(this.monitor.width, this.monitor.height);
        //this.tileableContainer.set_size(workArea.width, workArea.height);
        //this.tileableContainer.set_position(workArea.x, workArea.y);
        //this.floatableContainer.set_size(workArea.width, workArea.height);
        //this.floatableContainer.set_position(workArea.x, workArea.y);
        this.panel.set_position(workArea.x - this.monitor.x, 0);
        this.panel.set_width(workArea.width);
    }

    addMsWindow(msWindow) {
        if (this.msWindowList.indexOf(msWindow) >= 0) return;

        msWindow.msWorkspace = this;
        if (msWindow.metaWindow) {
            WindowUtils.updateTitleBarVisibility(msWindow.metaWindow);
        }
        if (!msWindow.dragged) {
            if (msWindow.get_parent()) {
                msWindow.get_parent().remove_child(msWindow);
            }
            (msWindow.isDialog
                ? this.floatableContainer
                : this.tileableContainer
            ).add_child(msWindow);
        }
        if (msWindow.isDialog) {
            const oldFloatableList = [...this.floatableList];
            this.floatableList.push(msWindow);
            this.emit(
                'floatableList-changed',
                this.floatableList,
                oldFloatableList
            );
        } else {
            const oldTileableList = [...this.tileableList];
            this.tileableList.splice(this.tileableList.length - 1, 0, msWindow);

            this.emit(
                'tileableList-changed',
                this.tileableList,
                oldTileableList
            );
            this.focusTileable(msWindow);
        }

        /*  // Focusing window if the window comes from a drag and drop
        // or if there's no focused window
        if (window.grabbed || !this.windowFocused) {
        } */
    }

    removeMsWindow(msWindow) {
        if (this.msWindowList.indexOf(msWindow) === -1) return;
        if (msWindow.isDialog) {
            const oldFloatableList = [...this.floatableList];
            this.floatableList.splice(this.floatableList.indexOf(msWindow), 1);
            this.emit(
                'floatableList-changed',
                this.floatableList,
                oldFloatableList
            );
        } else {
            const tileableIndex = this.tileableList.indexOf(msWindow);
            const oldTileableList = [...this.tileableList];
            this.tileableList.splice(tileableIndex, 1);
            if (this.focusedIndex === tileableIndex) {
                this.focusLastTileable();
            }
            this.emit(
                'tileableList-changed',
                this.tileableList,
                oldTileableList
            );
            // If there's no more focused msWindow on this workspace focus the last one
        }
    }

    swapTileable(firstTileable, secondTileable) {
        const firstIndex = this.tileableList.indexOf(firstTileable);
        const secondIndex = this.tileableList.indexOf(secondTileable);
        const oldTileableList = [...this.tileableList];
        this.tileableList[firstIndex] = secondTileable;
        this.tileableList[secondIndex] = firstTileable;

        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }

    focusNextTileable() {
        if (this.focusedIndex === this.tileableList.length - 1) {
            return;
        }
        this.focusTileable(this.tileableList[this.focusedIndex + 1]);
    }

    focusPreviousTileable() {
        if (this.focusedIndex === 0) {
            return;
        }
        this.focusTileable(this.tileableList[this.focusedIndex - 1]);
    }

    focusTileable(tileable) {
        if (tileable === this.tileableFocused) {
            return;
        }
        const oldTileableFocused = this.tileableFocused;
        this.focusedIndex = Math.max(this.tileableList.indexOf(tileable), 0);
        if (this.msWorkspaceManager.getActiveMsWorkspace() === this) {
            if (tileable instanceof MsWindow) {
                tileable.takeFocus();
            } else {
                tileable.grab_key_focus();
            }
        }
        this.emit('tileable-focus-changed', tileable, oldTileableFocused);
    }

    setTileableBefore(tileableToMove, tileableRelative) {
        const oldTileableList = [...this.tileableList];
        let tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);

        let tileableRelativeIndex = this.tileableList.indexOf(tileableRelative);
        this.tileableList.splice(tileableRelativeIndex, 0, tileableToMove);
        this.emitWindowsChanged(this.tileableList, oldTileableList);
    }

    setTileableAfter(tileableToMove, tileableRelative) {
        const oldTileableList = [...this.tileableList];
        let tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);

        let tileableRelativeIndex = this.tileableList.indexOf(tileableRelative);
        this.tileableList.splice(tileableRelativeIndex + 1, 0, tileableToMove);
        this.emitWindowsChanged(this.tileableList, oldTileableList);
    }

    nextTiling(direction) {
        this.tilingLayout.onDestroy();
        const Layout = global.tilingManager.getNextLayout(
            this.tilingLayout,
            direction
        );
        this.tilingLayout = new Layout(this);

        this.panel.tilingIcon.gicon = this.tilingLayout.icon;
        this.emit('tiling-layout-changed');
        this.tilingLayout.onTile();
    }

    shouldPanelBeVisible() {
        let containFullscreenWindow = this.msWindowList.some(msWindow => {
            return msWindow.metaWindow
                ? msWindow.metaWindow.is_fullscreen()
                : false;
        });
        return (
            !containFullscreenWindow &&
            this.msWorkspaceManager &&
            !this.msWorkspaceManager.noUImode
        );
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
        if (this.monitor.index !== Main.layoutManager.primaryIndex) {
            return true;
        } else {
            return this === this.msWorkspaceManager.getActiveMsWorkspace();
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

    handleExtensionLoaded() {
        this.focusLastTileable();
    }

    getState() {
        return {
            tilingLayout: this.tilingLayout.constructor.key,
            msWindowList: this.tileableList
                .filter(tileable => {
                    return tileable instanceof MsWindow;
                })
                .map(msWindow => {
                    return {
                        appId: msWindow.app.get_id(),
                        metaWindowIdentifier: msWindow.metaWindowIdentifier
                    };
                })
        };
    }
};
Signals.addSignalMethods(MsWorkspace.prototype);

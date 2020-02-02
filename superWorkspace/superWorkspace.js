const { Clutter, GLib, St, Shell } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;
const Background = imports.ui.background;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const { SuperWindow } = Me.imports.superWorkspace.superWindow;

const TopPanel = Me.imports.widget.topPanelWidget.TopPanel;
const { debounce } = Me.imports.utils.index;
const WindowUtils = Me.imports.utils.windows;

const CategorizedAppCard =
    Me.imports.widget.categorizedAppCard.CategorizedAppCard;

const { Stack } = Me.imports.widget.layout;

const EMIT_DEBOUNCE_DELAY = 100;

var SuperWorkspace = class SuperWorkspace {
    constructor(superWorkspaceManager, monitor, visible) {
        this.superWorkspaceManager = superWorkspaceManager;
        this.monitor = monitor;
        this.monitorIsPrimary =
            monitor.index === Main.layoutManager.primaryIndex;
        this.tileableList = [];
        this.floatableList = [];
        this.uiVisible = visible;
        const Layout = global.tilingManager.getLayoutByKey('maximized');
        this.tilingLayout = new Layout(this);
        this.frontendContainer = new St.Widget();
        this.frontendContainer.set_position(this.monitor.x, this.monitor.y);

        // Only emit window changed after EMIT_DEBOUNCE_DELAY ms without call
        // This prevents multiple tiling on window add for instance
        this.emitWindowsChangedDebounced = debounce(
            this.emitWindowsChanged,
            EMIT_DEBOUNCE_DELAY
        );

        this.panel = new TopPanel(this);

        if (this.monitor.index !== Main.layoutManager.primaryIndex) {
            Main.layoutManager._trackActor(this.panel, {
                affectsStruts: true
            });
        }

        this.focusedIndex = 0;

        this.workAreaChangedId = global.display.connect(
            'workareas-changed',
            () => {
                this.updateTopBarPositionAndSize();
            }
        );
        this.loadedSignalId = Me.connect(
            'extension-loaded',
            this.handleExtensionLoaded.bind(this)
        );
        this.frontendContainer.add_child(this.panel);
        Main.layoutManager.uiGroup.add_child(this.frontendContainer);
        this.updateTopBarPositionAndSize();
        this.updateUI();
    }

    destroy() {
        if (this.frontendContainer) this.frontendContainer.destroy();
        global.display.disconnect(this.workAreaChangedId);
        Me.disconnect(this.loadedSignalId);
        this.tilingLayout.onDestroy();
        this.destroyed = true;
    }

    get focusedDrawable() {
        return this.tileableList[this.focusedIndex];
    }

    get superWindowList() {
        return this.superWorkspaceManager.superWindowList.filter(
            superWindow => {
                return superWindow.superWorkspace === this;
            }
        );
    }

    isTopBarVisible() {
        return (
            !global.display.get_monitor_in_fullscreen(this.monitor.index) &&
            !Main.overview.visible
        );
    }

    updateTopBarPositionAndSize() {
        let workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        this.panel.set_position(workArea.x - this.monitor.x, 0);
        this.panel.set_width(workArea.width);
    }

    addSuperWindow(superWindow) {
        if (this.superWindowList.indexOf(superWindow) >= 0) return;

        superWindow.superWorkspace = this;
        WindowUtils.updateTitleBarVisibility(superWindow.metaWindow);
        if (superWindow.isDialog) {
            const oldFloatableList = [...this.floatableList];
            this.floatableList.push(superWindow);
            this.emit(
                'floatableList-changed',
                this.floatableList,
                oldFloatableList
            );
        } else {
            const oldTileableList = [...this.tileableList];
            this.tileableList.push(superWindow);
            this.emit(
                'tileableList-changed',
                this.tileableList,
                oldTileableList
            );
            this.onFocusTileable(superWindow);
        }
        /*  // Focusing window if the window comes from a drag and drop
        // or if there's no focused window
        if (window.grabbed || !this.windowFocused) {
        } */
    }

    removeSuperWindow(superWindow) {
        if (this.superWindowList.indexOf(superWindow) === -1) return;
        if (superWindow.isDialog) {
            const oldFloatableList = [...this.floatableList];
            this.floatableList.splice(
                this.floatableList.indexOf(superWindow),
                1
            );
            this.emit(
                'floatableList-changed',
                this.floatableList,
                oldFloatableList
            );
        } else {
            const oldTileableList = [...this.tileableList];
            this.tileableList.splice(this.tileableList.indexOf(superWindow), 1);
            this.emit(
                'tileableList-changed',
                this.tileableList,
                oldTileableList
            );
        }
        // If there's no more focused superWindow on this workspace focus the last one
        if (superWindow === this.focusedDrawable) {
            this.focusLastWindow();
        }
    }

    swapWindows(firstWindow, secondWindow) {
        const firstIndex = this.superWindowList.indexOf(firstWindow);
        const secondIndex = this.superWindowList.indexOf(secondWindow);
        const oldWindows = [...this.superWindowList];
        this.superWindowList[firstIndex] = secondWindow;
        this.superWindowList[secondIndex] = firstWindow;
        this.emitWindowsChanged(this.superWindowList, oldWindows);
    }

    focusNextTileable() {
        if (this.focusedIndex === this.tileableList.length - 1) {
            return;
        }
        this.onFocusTileable(this.tileableList[this.focusedIndex + 1]);
    }

    focusPreviousTileable() {
        if (this.focusedIndex === 0) {
            return;
        }
        this.onFocusTileable(this.tileableList[this.focusedIndex - 1]);
    }

    onFocusTileable(superDrawable) {
        if (superDrawable === this.focusedDrawable) {
            return;
        }
        const oldFocusedDrawable = this.focusedDrawable;
        this.focusedIndex = this.tileableList.indexOf(superDrawable);
        log(superDrawable);
        this.emit('window-focused-changed', superDrawable, oldFocusedDrawable);
    }

    setWindowBefore(windowToMove, windowRelative) {
        const oldWindows = [...this.superWindowList];
        let windowToMoveIndex = this.superWindowList.indexOf(windowToMove);
        this.superWindowList.splice(windowToMoveIndex, 1);

        let windowRelativeIndex = this.superWindowList.indexOf(windowRelative);
        this.superWindowList.splice(windowRelativeIndex, 0, windowToMove);
        this.emitWindowsChanged(this.superWindowList, oldWindows);
    }

    setWindowAfter(windowToMove, windowRelative) {
        const oldWindows = [...this.superWindowList];
        let windowToMoveIndex = this.superWindowList.indexOf(windowToMove);
        this.superWindowList.splice(windowToMoveIndex, 1);

        let windowRelativeIndex = this.superWindowList.indexOf(windowRelative);
        this.superWindowList.splice(windowRelativeIndex + 1, 0, windowToMove);
        this.emitWindowsChanged(this.superWindowList, oldWindows);
    }

    nextTiling(direction) {
        this.tilingLayout.onDestroy();
        const Layout = global.tilingManager.getNextLayout(
            this.tilingLayout,
            direction
        );
        this.tilingLayout = new Layout(this);

        this.panel.tilingIcon.gicon = this.tilingLayout.icon;
        this.tilingLayout.onTile();
    }

    shouldPanelBeVisible() {
        let containFullscreenWindow = this.superWindowList.some(superWindow => {
            return superWindow.metaWindow.is_fullscreen();
        });
        return (
            !containFullscreenWindow &&
            this.superWorkspaceManager &&
            !this.superWorkspaceManager.noUImode
        );
    }

    updateUI() {
        this.frontendContainer.visible = this.uiVisible;
        this.panel.visible = this.uiVisible && this.shouldPanelBeVisible();
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
            return (
                this === this.superWorkspaceManager.getActiveSuperWorkspace()
            );
        }
    }

    focusLastWindow() {
        if (this.superWindowList.length) {
            let lastWindow =
                this.superWindowList[this.focusedIndex] ||
                this.superWindowList.slice(-1)[0];

            this.onFocusTileable(lastWindow);
        } else {
            this.onFocusTileable(null);
        }
    }

    handleExtensionLoaded() {
        log('handleExtensionLoaded');
        /* this.windows
            .map(metaWindow => metaWindow.get_compositor_private())
            .filter(window => window)
            .forEach(window => {
                log('change display');
                this.isDisplayed() ? window.show() : window.hide();
            }); */

        this.focusLastWindow();
    }
};
Signals.addSignalMethods(SuperWorkspace.prototype);

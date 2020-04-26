const { Clutter, GLib, St, Shell, GObject } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;
const Background = imports.ui.background;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    MaximizeLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.maximize;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;

const TopPanel = Me.imports.src.widget.topPanelWidget.TopPanel;
const { debounce } = Me.imports.src.utils.index;
const WindowUtils = Me.imports.src.utils.windows;

const { MsApplicationLauncher } = Me.imports.src.widget.msApplicationLauncher;

const { Stack } = Me.imports.src.widget.layout;

const EMIT_DEBOUNCE_DELAY = 100;
const { AddLogToFunctions } = Me.imports.src.utils.debug;
const { reparentActor } = Me.imports.src.utils.index;

var MsWorkspace = class MsWorkspace {
    constructor(msWorkspaceManager, monitor, initialState) {
        AddLogToFunctions(this);
        this.msWorkspaceManager = msWorkspaceManager;
        this.monitor = monitor;
        this.monitorIsPrimary =
            monitor.index === Main.layoutManager.primaryIndex;
        this.tileableList = [];
        this.floatableList = [];
        this.uiVisible = true;
        this.focusedIndex = 0;

        const Layout = Me.tilingManager.getLayoutByKey(
            initialState ? initialState.tilingLayout : 'maximized'
        );
        this.tilingLayout = new Layout(this);
        this.appLauncher = new MsApplicationLauncher(this);
        this.tileableList.push(this.appLauncher);
        this.msWorkspaceActor = new MsWorkspaceActor(this);
        this.msWorkspaceActor.tileableContainer.add_child(this.appLauncher);
        this.loadedSignalId = Me.connect(
            'extension-loaded',
            this.handleExtensionLoaded.bind(this)
        );

        this.updateUI();

        if (initialState) {
            log(
                'IN MSWORKSPACE CREATION',
                initialState,
                initialState.msWindowList.length
            );
            initialState.msWindowList.forEach((msWindowData) => {
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
        Me.disconnect(this.loadedSignalId);
        this.tilingLayout.onDestroy();
        if (this.msWorkspaceActor) {
            this.msWorkspaceActor.destroy();
            delete this.msWorkspaceActor;
        }
        this.destroyed = true;
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

    updateUI() {
        if (this.msWorkspaceActor) {
            this.msWorkspaceActor.visible = this.uiVisible;
        }
        if (this.msWorkspaceActor.panel) {
            this.msWorkspaceActor.panel.visible = this.shouldPanelBeVisible();
        }
        this.tilingLayout.onTile();
    }

    close() {
        Promise.all(
            this.msWindowList.map((msWindow) => {
                return msWindow.kill();
            })
        ).then((params) => {
            this.emit('readyToBeClosed');
        });
    }

    addMsWindow(msWindow) {
        if (msWindow.msWorkspace === this) return;

        msWindow.msWorkspace = this;
        if (msWindow.metaWindow) {
            WindowUtils.updateTitleBarVisibility(msWindow.metaWindow);
        }

        if (!msWindow.dragged) {
            reparentActor(
                msWindow,
                msWindow.isDialog
                    ? this.msWorkspaceActor.floatableContainer
                    : this.msWorkspaceActor.tileableContainer
            );
        }
        if (msWindow.isDialog) {
            const oldFloatableList = [...this.floatableList];
            this.floatableList.push(msWindow);
            this.emitFloatableListChangedOnce(oldFloatableList);
        } else {
            const oldTileableList = [...this.tileableList];
            this.tileableList.splice(this.tileableList.length - 1, 0, msWindow);

            this.emitTileableListChangedOnce(oldTileableList);

            this.focusTileable(msWindow);
        }

        /*  // Focusing window if the window comes from a drag and drop
        // or if there's no focused window
        if (window.grabbed || !this.windowFocused) {
        } */
    }

    removeMsWindow(msWindow) {
        if (this.msWindowList.indexOf(msWindow) === -1) return;
        if (this.floatableList.includes(msWindow)) {
            const oldFloatableList = [...this.floatableList];
            this.floatableList.splice(this.floatableList.indexOf(msWindow), 1);
            this.emitFloatableListChangedOnce(oldFloatableList);
        } else {
            const tileableIndex = this.tileableList.indexOf(msWindow);
            const oldTileableList = [...this.tileableList];
            this.tileableList.splice(tileableIndex, 1);
            if (this.focusedIndex > tileableIndex) {
                this.focusedIndex--;
            } else if (
                this.focusedIndex === this.tileableList.length - 1 &&
                this.tileableList.length > 1
            ) {
                this.focusedIndex--;
            }
            this.emitTileableListChangedOnce(oldTileableList);
            // If there's no more focused msWindow on this workspace focus the last one
        }
    }

    emitTileableListChangedOnce(oldTileableList) {
        if (this.emitTileableChangedInProgress) return;
        this.emitTileableChangedInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            log('IDLE_ADD');
            delete this.emitTileableChangedInProgress;
            this.emit(
                'tileableList-changed',
                this.tileableList,
                oldTileableList
            );
        });
    }

    emitFloatableListChangedOnce(oldFloatableList) {
        if (this.emitFloatableChangedInProgress) return;
        this.emitFloatableChangedInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            log('IDLE_ADD');
            delete this.emitFloatableChangedInProgress;
            this.emit(
                'floatableList-changed',
                this.floatableList,
                oldFloatableList
            );
        });
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

    refreshFocus() {
        if (this.tileableFocused instanceof MsWindow) {
            this.tileableFocused.takeFocus();
        } else {
            this.tileableFocused.grab_key_focus();
        }
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

    nextTiling(direction) {
        this.tilingLayout.onDestroy();
        const Layout = Me.tilingManager.getNextLayout(
            this.tilingLayout,
            direction
        );
        this.tilingLayout = new Layout(this);

        this.msWorkspaceActor.panel.tilingIcon.gicon = this.tilingLayout.icon;
        this.emit('tiling-layout-changed');
        this.tilingLayout.onTile();
    }

    shouldPanelBeVisible() {
        let containFullscreenWindow = this.msWindowList.some((msWindow) => {
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
                    log('IDLE_ADD');
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
                .filter((tileable) => {
                    return tileable instanceof MsWindow;
                })
                .map((msWindow) => {
                    return {
                        appId: msWindow.app.get_id(),
                        metaWindowIdentifier: msWindow.metaWindowIdentifier,
                    };
                }),
        };
    }
};
Signals.addSignalMethods(MsWorkspace.prototype);

var MsWorkspaceActor = GObject.registerClass(
    {},
    class MsWorkspaceActor extends St.Widget {
        _init(msWorkspace) {
            log('new MsWorkspaceActor');
            super._init({
                style_class: 'msWorkspace',
                clip_to_allocation: true,
                x_expand: true,
            });
            this.msWorkspace = msWorkspace;
            this.tileableContainer = new St.Widget({
                style_class: 'tileable-container',
            });
            this.floatableContainer = new St.Widget({
                style_class: 'floatable-container',
            });
            this.panel = new TopPanel(msWorkspace);
            this.add_child(this.tileableContainer);
            this.add_child(this.floatableContainer);
            this.add_child(this.panel);
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            let panelBox = new Clutter.ActorBox();
            panelBox.x1 = box.x1;
            panelBox.x2 = box.x2;
            panelBox.y1 = box.y1;
            panelBox.y2 = panelBox.y1 + this.panel.get_preferred_height(-1)[1];
            this.panel.allocate(panelBox, flags);
            let containerBox = new Clutter.ActorBox();
            containerBox.x1 = box.x1;
            containerBox.x2 = box.x2;
            containerBox.y1 =
                this.panel && this.panel.visible ? panelBox.y2 : box.y1;
            containerBox.y2 = box.y2;
            this.tileableContainer.allocate(containerBox, flags);
            this.floatableContainer.allocate(containerBox, flags);
        }
    }
);

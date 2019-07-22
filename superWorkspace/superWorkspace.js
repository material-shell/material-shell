const { Clutter, GLib, St, Gio } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;
const Background = imports.ui.background;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const TopPanel = Me.imports.widget.topPanelWidget.TopPanel;

const CategorizedAppCard =
    Me.imports.widget.categorizedAppCard.CategorizedAppCard;

const { Stack } = Me.imports.widget.layout;

var SuperWorkspace = class SuperWorkspace {
    constructor(
        superWorkspaceManager,
        categoryKey,
        category,
        apps,
        monitor,
        visible
    ) {
        this.superWorkspaceManager = superWorkspaceManager;
        this.categoryKey = categoryKey;
        this.category = category;
        this.monitor = monitor;
        this.apps = apps;
        this.monitorIsPrimary =
            monitor.index === Main.layoutManager.primaryIndex;
        this.category = category;
        this.windows = [];
        this.uiVisible = visible;
        let previousLayout =
            Me.stateManager.getState(
                `${this.categoryKey}_${this.monitor.index}`
            ) || MaximizeLayout.key;
        const Layout = global.tilingManager.getLayoutByKey(previousLayout);
        this.tilingLayout = new Layout(this);
        this.frontendContainer = new St.Widget();

        this.frontendContainer.set_position(this.monitor.x, this.monitor.y);

        this.panel = new TopPanel(this);

        if (this.monitor.index !== Main.layoutManager.primaryIndex) {
            Main.layoutManager._trackActor(this.panel, {
                affectsStruts: true
            });
        }

        this.backgroundContainer = new St.Widget();

        this.bgManager = new Background.BackgroundManager({
            container: this.backgroundContainer,
            monitorIndex: this.monitor.index,
            vignette: false
        });

        this.categorizedAppCard = new CategorizedAppCard(this.category, apps);
        this.backgroundStackLayout = new Stack({
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
            //This St.Bin fix an Incredible Bug which the source is Unknown that make the AppCard to fill his parent when clicking on app icon SOMETIMES.
            // Since the St.Bin take the size of the AppCard the bug is invisible...
            children: [new St.Bin({ child: this.categorizedAppCard })]
        });

        this.backgroundContainer.add_child(this.backgroundStackLayout);

        this.windowFocused = null;

        this.focusEventId = global.display.connect(
            'notify::focus-window',
            () => {
                let windowFocused = global.display.focus_window;
                let index = this.windows.indexOf(windowFocused);
                if (index === -1) {
                    return;
                }
                if (windowFocused.is_attached_dialog()) {
                    windowFocused = windowFocused.get_transient_for();
                    index = this.windows.indexOf(windowFocused);
                }
                this.onFocus(windowFocused);
            }
        );

        this.workAreaChangedId = global.display.connect(
            'workareas-changed',
            () => {
                this.updateTopBarPositionAndSize();
            }
        );
        this.frontendContainer.add_child(this.panel);
        Main.layoutManager.uiGroup.add_child(this.frontendContainer);
        Main.layoutManager._backgroundGroup.add_child(this.backgroundContainer);
        this.updateTopBarPositionAndSize();
        this.updateUI();
    }

    destroy() {
        if (this.frontendContainer) this.frontendContainer.destroy();
        if (this.backgroundContainer) this.backgroundContainer.destroy();
        global.display.disconnect(this.focusEventId);
        global.display.disconnect(this.workAreaChangedId);
        this.tilingLayout.onDestroy();
        this.destroyed = true;
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

    addWindow(window) {
        if (this.windows.indexOf(window) >= 0) return;
        log(`window ${window.get_title()} added to ${this.categoryKey}`);
        window.workspaceEnhancer = this;
        this.windows.push(window);
        this.onFocus(window);
        this.throttleEmit();
    }

    removeWindow(window) {
        let windowIndex = this.windows.indexOf(window);
        if (windowIndex === -1) return;
        log(`window ${window.get_title()} removed from ${this.categoryKey}`);

        this.windows.splice(windowIndex, 1);
        if (window === this.windowFocused) {
            let newWindowToFocus =
                this.windows[windowIndex - 1] || this.windows[0];
            if (newWindowToFocus) {
                this.onFocus(newWindowToFocus);
            }
        }
        this.throttleEmit();
    }

    swapWindows(firstWindow, secondWindow) {
        const firstIndex = this.windows.indexOf(firstWindow);
        const secondIndex = this.windows.indexOf(secondWindow);
        this.windows[firstIndex] = secondWindow;
        this.windows[secondIndex] = firstWindow;
        this.throttleEmit();
    }

    focusNext() {
        let windowFocusIndex = this.windows.indexOf(this.windowFocused);
        if (windowFocusIndex === this.windows.length - 1) {
            return;
        }
        this.windows[windowFocusIndex + 1].activate(global.get_current_time());
    }

    focusPrevious() {
        let windowFocusIndex = this.windows.indexOf(this.windowFocused);
        if (windowFocusIndex === 0) {
            return;
        }
        this.windows[windowFocusIndex - 1].activate(global.get_current_time());
    }

    onFocus(windowFocused) {
        if (windowFocused === this.windowFocused) return;
        this.emit('window-focused-changed', windowFocused, this.windowFocused);
        this.windowFocused = windowFocused;
    }

    setWindowBefore(windowToMove, windowRelative) {
        let windowToMoveIndex = this.windows.indexOf(windowToMove);
        this.windows.splice(windowToMoveIndex, 1);

        let windowRelativeIndex = this.windows.indexOf(windowRelative);
        this.windows.splice(windowRelativeIndex, 0, windowToMove);
        this.throttleEmit();
    }

    setWindowAfter(windowToMove, windowRelative) {
        let windowToMoveIndex = this.windows.indexOf(windowToMove);
        this.windows.splice(windowToMoveIndex, 1);

        let windowRelativeIndex = this.windows.indexOf(windowRelative);
        this.windows.splice(windowRelativeIndex + 1, 0, windowToMove);
        this.throttleEmit();
    }

    nextTiling() {
        this.tilingLayout.onDestroy();
        const Layout = global.tilingManager.getNextLayout(this.tilingLayout);
        this.tilingLayout = new Layout(this);
        Me.stateManager.setState(
            `${this.categoryKey}_${this.monitor.index}`,
            this.tilingLayout.constructor.key
        );
        log(`${this.categoryKey} ask for tiling after layout changed`);
        this.panel.tilingIcon.gicon = this.tilingLayout.icon;
        this.tilingLayout.onTile();
    }

    shouldPanelBeVisible() {
        let containFullscreenWindow = this.windows.some(metaWindow => {
            return metaWindow.is_fullscreen();
        });
        return (
            !containFullscreenWindow &&
            (this.superWorkspaceManager && !this.superWorkspaceManager.noUImode)
        );
    }

    updateUI() {
        this.frontendContainer.visible = this.uiVisible;
        this.panel.visible = this.uiVisible && this.shouldPanelBeVisible();
        this.backgroundContainer.visible = this.uiVisible;
    }

    revealBackground() {
        this.windows.forEach(window => {
            window.minimize();
        });
        this.backgroundShown = true;

        global.stage.set_key_focus(this.categorizedAppCard);
        this.backgroundSignals = [];
        let signalId = global.stage.connect('notify::key-focus', () => {
            let focus = global.stage.get_key_focus();
            if (focus !== this.categorizedAppCard) {
                this.unRevealBackground();
            }
        });
        this.backgroundSignals.push({ from: global.stage, id: signalId });
        signalId = this.categorizedAppCard.connect(
            'key-press-event',
            (_, event) => {
                if (event.get_key_symbol() == Clutter.KEY_Escape) {
                    this.unRevealBackground();
                }

                return Clutter.EVENT_PROPAGATE;
            }
        );
        this.backgroundSignals.push({
            from: this.categorizedAppCard,
            id: signalId
        });
    }

    unRevealBackground() {
        this.windows.forEach(window => {
            window.unminimize();
        });
        this.backgroundSignals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.backgroundSignals = [];
        this.backgroundShown = false;
    }

    throttleEmit() {
        if (this.emitInProgress) {
            return;
        }
        this.emitInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.emitInProgress = false;

            if (this.destroyed) {
                return GLib.SOURCE_REMOVE;
            }
            this.emit('windows-changed');
            return GLib.SOURCE_REMOVE;
        });
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
};
Signals.addSignalMethods(SuperWorkspace.prototype);

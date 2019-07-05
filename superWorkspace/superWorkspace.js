const { Clutter, GLib, St } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Background = imports.ui.background;

const TopPanel = Me.imports.widget.topPanelWidget.TopPanel;
const TilingManager = Me.imports.tilingManager.tilingManager.TilingManager;

const CategorizedAppCard =
    Me.imports.widget.categorizedAppCard.CategorizedAppCard;

const { Stack } = Me.imports.widget.layout;

var SuperWorkspace = class SuperWorkspace {
    constructor(categoryKey, category, apps, monitor, visible) {
        this.categoryKey = categoryKey;
        this.category = category;
        this.monitor = monitor;
        this.apps = apps;
        this.monitorIsPrimary =
            monitor.index === Main.layoutManager.primaryIndex;
        this.category = category;
        this.windows = [];
        this.panel = new TopPanel(this);
        Main.layoutManager._trackActor(this.panel, {
            affectsStruts: true
        });
        this.backgroundContainer = new St.Widget({
            visible: visible
        });
        this.frontendContainer = new St.Widget({
            visible: visible
        });
        this.frontendContainer.set_position(this.monitor.x, this.monitor.y);
        // this.backgroundContainer = new Meta.BackgroundGroup({ reactive: true });

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
        this.tilingLayout = 'tileRight';
        this.tilingManager = new TilingManager(this);
        this.windowFocused = null;
        this.windowFocusIndex = null;

        global.display.connect('notify::focus-window', () => {
            let windowFocused = global.display.focus_window;
            let index = this.windows.indexOf(windowFocused);
            if (index === -1) {
                return;
            }
            if (windowFocused.is_attached_dialog()) {
                windowFocused = windowFocused.get_transient_for();
                index = this.windows.indexOf(windowFocused);
            }
            this.windowFocusIndex = index;
            this.onFocus(windowFocused);
        });

        const offsetX = this.monitorIsPrimary ? 48 : 0;
        if (this.monitorIsPrimary) {
            this.frontendContainer.hide();
            this.backgroundContainer.hide();
        }
        this.frontendContainer.add_child(this.panel);
        Main.layoutManager.uiGroup.add_child(this.frontendContainer);

        this.panel.set_position(0 + offsetX, 0);
        Main.layoutManager._backgroundGroup.add_child(this.backgroundContainer);
    }

    destroy() {
        this.frontendContainer.destroy();
        this.backgroundContainer.destroy();
        this.tilingManager.unregisterAllWindowsSignal();
        this.disconnectAll();
        this.destroyed = true;
    }

    isTopBarVisible() {
        return (
            !global.display.get_monitor_in_fullscreen(this.monitor.index) &&
            !Main.overview.visible
        );
    }

    addWindow(window) {
        if (this.windows.indexOf(window) >= 0) return;
        window.workspaceEnhancer = this;
        this.windows.push(window);
        this.throttleEmit();
    }

    removeWindow(window) {
        let windowIndex = this.windows.indexOf(window);
        if (windowIndex === -1) return;
        this.windows.splice(windowIndex, 1);
        if (windowIndex === this.windowFocusIndex) {
            let newWindowToFocus =
                this.windows[windowIndex - 1] || this.windows[0];
            if (newWindowToFocus) {
                newWindowToFocus.focus(global.get_current_time());
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
        if (this.windowFocusIndex === this.windows.length - 1) {
            return;
        }
        this.windows[this.windowFocusIndex + 1].activate(
            global.get_current_time()
        );
    }

    focusPrevious() {
        if (this.windowFocusIndex === 0) {
            return;
        }
        this.windows[this.windowFocusIndex - 1].activate(
            global.get_current_time()
        );
    }

    onFocus(windowFocused) {
        if (windowFocused !== this.windowFocused) {
            this.emit(
                'window-focused-changed',
                windowFocused,
                this.windowFocused
            );
            this.windowFocused = windowFocused;
        }
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
        this.tilingLayout =
            this.tilingLayout === 'tileRight' ? 'maximize' : 'tileRight';
        this.tilingManager.setLayout(this.tilingLayout);
    }

    showUI() {
        this.frontendContainer.show();
        this.backgroundContainer.show();
    }

    hideUI() {
        this.frontendContainer.hide();
        this.backgroundContainer.hide();
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
                return;
            }
            this.emit('windows-changed');
        });
    }

    setApps(apps) {
        this.apps = apps;
        this.categorizedAppCard._loadApps(apps);
    }
};
Signals.addSignalMethods(SuperWorkspace.prototype);

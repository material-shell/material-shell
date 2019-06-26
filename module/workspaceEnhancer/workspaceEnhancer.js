const { Clutter, GLib, St } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Background = imports.ui.background;

const TopPanel = Me.imports.module.workspaceEnhancer.topPanelWidget.TopPanel;
const TilingManager =
    Me.imports.module.workspaceEnhancer.tilingManager.TilingManager;
const CategorizedAppGrid =
    Me.imports.module.workspaceEnhancer.categorizedAppGrid.CategorizedAppGrid;

var WorkspaceEnhancer = class WorkspaceEnhancer {
    constructor(monitor, category) {
        this.monitor = monitor;
        this.monitorIsPrimary =
            monitor.index === Main.layoutManager.primaryIndex;
        this.category = category;
        this.windows = [];
        this.panel = new TopPanel(this);

        this.backgroundContainer = new St.Widget();
        // this.backgroundContainer = new Meta.BackgroundGroup({ reactive: true });
        this.bgManager = new Background.BackgroundManager({
            container: this.backgroundContainer,
            monitorIndex: this.monitor.index,
            vignette: false
        });
        this.categorizedAppGrid = new CategorizedAppGrid(
            category,
            monitor.width,
            monitor.height
        );
        this.categorizedAppGrid.actor.set_position(
            this.monitor.x,
            this.monitor.y
        );
        //this.categorizedAppGrid.adapt
        //this.categorizedAppGrid.adaptToSize(monitor.width, monitor.height);
        //this.categorizedAppGrid._redisplay();
        /* this.categorizedAppGrid._grid.set_offscreen_redirect(
            Clutter.OffscreenRedirect.ALWAYS
        ); */
        this.backgroundContainer.add_child(this.categorizedAppGrid.actor);
        /* this.bgManager.backgroundActor.set_position(
            this.monitor.x,
            this.monitor.y
        ); */
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
            this.panel.hide();
            this.backgroundContainer.hide();
        }
        Main.layoutManager.uiGroup.add_child(this.panel);

        this.panel.set_position(this.monitor.x + offsetX, this.monitor.y);
        Main.layoutManager._backgroundGroup.add_child(this.backgroundContainer);
    }

    destroy() {
        log('destroy workspaceEnhancer');
        this.panel.destroy();
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
                newWindowToFocus.focus(0);
            }
            //
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

    showBackground() {
        this.windows.forEach(window => {
            window.minimize();
        });
        this.backgroundShown = true;

        global.stage.set_key_focus(this.categorizedAppGrid.actor);
        this.backgroundSignals = [];
        let signalId = global.stage.connect('notify::key-focus', () => {
            let focus = global.stage.get_key_focus();
            if (focus !== this.categorizedAppGrid.actor) {
                this.unShowBackground();
            }
        });
        this.backgroundSignals.push({ from: global.stage, id: signalId });
        signalId = this.categorizedAppGrid.actor.connect(
            'key-press-event',
            (_, event) => {
                if (event.get_key_symbol() == Clutter.KEY_Escape) {
                    this.unShowBackground();
                }

                return Clutter.EVENT_PROPAGATE;
            }
        );
        this.backgroundSignals.push({
            from: this.categorizedAppGrid.actor,
            id: signalId
        });
    }

    unShowBackground() {
        log('UnSHOW');
        this.windows.forEach(window => {
            window.unminimize();
        });
        this.backgroundSignals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.backgroundShown = false;
    }

    throttleEmit() {
        //log('throttle emit');
        if (this.emitInProgress) {
            return;
        }
        this.emitInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.emitInProgress = false;

            if (this.destroyed) {
                log('emit into destroyed');
                return;
            }
            this.emit('windows-changed');
        });
    }
};
Signals.addSignalMethods(WorkspaceEnhancer.prototype);

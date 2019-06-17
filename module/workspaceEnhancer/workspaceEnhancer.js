const { Meta, GLib } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Background = imports.ui.background;

const TopPanel = Me.imports.module.workspaceEnhancer.topPanelWidget.TopPanel;
const TilingManager =
    Me.imports.module.workspaceEnhancer.tilingManager.TilingManager;

var WorkspaceEnhancer = class WorkspaceEnhancer {
    constructor(monitor) {
        this.monitor = monitor;
        this.monitorIsPrimary =
            monitor.index === Main.layoutManager.primaryIndex;
        this.windows = [];
        this.panel = new TopPanel(this);
        this.backgroundGroup = new Meta.BackgroundGroup({ reactive: true });
        this.bgManager = new Background.BackgroundManager({
            container: this.backgroundGroup,
            monitorIndex: this.monitor.index,
            vignette: false
        });
        this.bgManager.backgroundActor.set_position(
            this.monitor.x,
            this.monitor.y
        );
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
            log('FOCUS WINDOW');

            if (windowFocused.is_attached_dialog()) {
                windowFocused = windowFocused.get_transient_for();
                index = this.windows.indexOf(windowFocused);
            }
            this.windowFocusIndex = index;
            if (windowFocused !== this.windowFocused) {
                this.emit(
                    'window-focused-changed',
                    windowFocused,
                    this.windowFocused
                );
                this.windowFocused = windowFocused;
            }
        });

        const offsetX = this.monitorIsPrimary ? 48 : 0;
        if (this.monitorIsPrimary) {
            this.panel.hide();
            this.backgroundGroup.hide();
        }
        Main.layoutManager.uiGroup.add_child(this.panel);

        this.panel.set_position(this.monitor.x + offsetX, this.monitor.y);
        global.window_group.add_child(this.backgroundGroup);
        this.backgroundGroup.lower_bottom();
    }

    destroy() {
        log('destroy workspaceEnhancer');
        this.panel.destroy();
        this.backgroundGroup.destroy();
        this.tilingManager.unregisterAllWindowsSignal();
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
        log('add window', window.title);
        window.workspaceEnhancer = this;
        this.windows.push(window);
        this.throttleEmit();
    }

    removeWindow(window) {
        let windowIndex = this.windows.indexOf(window);
        if (windowIndex === -1) return;
        log('remove window in workspaceEnhancer');
        if (windowIndex === this.windowFocusIndex) {
            let newWindowToFocus =
                this.windows[windowIndex - 1] || this.windows[0];
            newWindowToFocus.focus(0);
        }

        this.windows.splice(windowIndex, 1);
        this.throttleEmit();
    }

    swapWindows(firstWindow, secondWindow) {
        log(this.windows);
        const firstIndex = this.windows.indexOf(firstWindow);
        const secondIndex = this.windows.indexOf(secondWindow);
        log(firstIndex, secondIndex);
        this.windows[firstIndex] = secondWindow;
        this.windows[secondIndex] = firstWindow;
        this.throttleEmit();
    }

    focusNext() {
        if (this.windowFocusIndex === this.windows.length - 1) {
            return;
        }
        this.windows[this.windowFocusIndex + 1].raise();
        this.windows[this.windowFocusIndex + 1].focus(0);
    }

    focusPrevious() {
        if (this.windowFocusIndex === 0) {
            return;
        }
        this.windows[this.windowFocusIndex - 1].raise();
        this.windows[this.windowFocusIndex - 1].focus(0);
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

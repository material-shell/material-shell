const { Meta, GLib } = imports.gi;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { Backdrop } = Me.imports.widget.backdrop;

const TILE_TWEEN_TIME = 0.25;

/* exported BaseTilingLayout */
var BaseTilingLayout = class BaseTilingLayout {
    constructor(superWorkspace) {
        this.icon = '';
        this.key = 'base';
        this.superWorkspace = superWorkspace;
        this.monitor = superWorkspace.monitor;
        this.windowFocused = this.superWorkspace.windowFocused;
        this.windowChangedId = this.superWorkspace.connect(
            'windows-changed',
            this.onWindowsChanged.bind(this)
        );

        this.windowFocusedChangedId = this.superWorkspace.connect(
            'window-focused-changed',
            (_, window, oldWindow) => {
                this.onFocusChanged(window, oldWindow);
            }
        );
        this.workAreaChangedId = global.display.connect(
            'workareas-changed',
            () => {
                this.onTile();
            }
        );
        this.windows = superWorkspace.windows;
    }

    onWindowsChanged() {
        this.windows = this.superWorkspace.windows;
        log(
            `${
                this.superWorkspace.categoryKey
            } tilingLayout tile itself from onWindowsChanged event`
        );
        this.onTile();
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        this.windowFocused = windowFocused;
    }

    onTile() {
        log('tile for real', this.superWorkspace.categoryKey);
        let [dialogWindows, regularWindows] = this.getDialogAndRegularWindows();
        this.onTileRegulars(regularWindows);
        this.onTileDialogs(dialogWindows);
    }

    onTileRegulars(windows) {
        // Define windows sizes and positions
    }

    onTileDialogs(windows) {
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        windows.forEach(metaWindow => {
            if (metaWindow.grabbed) return;
            let window = metaWindow.get_compositor_private();
            if (!window) return;

            if (!window.backdrop) {
                window.backdrop = new Backdrop(window);
            }

            window.backdrop.raise_top();
            metaWindow.raise();
            window.raise_top();
            this.moveMetaWindow(
                metaWindow,
                workArea.x + workArea.width / 2 - window.width / 2,
                workArea.y + workArea.height / 2 - window.height / 2
            );
        });
    }

    moveMetaWindow(metaWindow, x, y) {
        this.callSafely(metaWindow, metaWindowInside => {
            const actor = metaWindowInside.get_compositor_private();

            Tweener.addTween(actor, {
                x,
                y,
                time: TILE_TWEEN_TIME,
                transition: 'easeOutQuad',
                onComplete: this.moveMetaWindowTweenComplete,
                onCompleteScope: this,
                onCompleteParams: [metaWindowInside, x, y]
            });
        });
    }

    moveMetaWindowTweenComplete(metaWindow, x, y) {
        const actor = metaWindow.get_compositor_private();
        Tweener.removeTweens(actor);
        metaWindowInside.move_frame(true, x, y);
    }

    moveAndResizeMetaWindow(metaWindow, x, y, width, height) {
        this.callSafely(metaWindow, metaWindowInside => {
            const actor = metaWindowInside.get_compositor_private();

            Tweener.addTween(actor, {
                x,
                y,
                scaleX: width / actor.width,
                scaleY: height / actor.height,
                time: TILE_TWEEN_TIME,
                transition: 'easeOutQuad',
                onComplete: this.moveAndResizeMetaWindowTweenComplete,
                onCompleteScope: this,
                onCompleteParams: [metaWindowInside, x, y, width, height]
            });
        });
    }
    moveAndResizeMetaWindowTweenComplete(metaWindow, x, y, width, height) {
        const actor = metaWindow.get_compositor_private();
        Tweener.removeTweens(actor);
        actor.set_scale(1, 1);
        metaWindow.move_resize_frame(true, x, y, width, height);
    }

    callSafely(metaWindow, callback, alreadyDelayed) {
        let actor = metaWindow.get_compositor_private();
        //First check if the metaWindow got an actor
        if (actor) {
            // We need the actor to be mapped to remove random crashes
            if (actor.mapped) {
                callback(metaWindow);
            } else {
                // Wait for it to be mapped
                if (actor.waitToBeMappedId) return;
                actor.waitToBeMappedId = actor.connect('notify::mapped', () => {
                    callback(metaWindow);
                    actor.disconnect(actor.waitToBeMappedId);
                    delete actor.waitToBeMappedId;
                });
            }
        } else if (!alreadyDelayed) {
            //If we don't have actor we hope to get it in the next loop
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.callSafely(metaWindow, callback, true);
            });
        } else {
            // Can't do shit for now
            log(`failed to tile ${metaWindow.get_title()}`);
        }
    }

    onDestroy() {
        this.superWorkspace.disconnect(this.windowChangedId);
        this.superWorkspace.disconnect(this.windowFocusedChangedId);
        global.display.disconnect(this.workAreaChangedId);
    }

    getDialogAndRegularWindows() {
        let dialogWindows = [];
        let regularWindows = [];

        let dialogTypes = [
            Meta.WindowType.DIALOG,
            Meta.WindowType.MODAL_DIALOG,
            Meta.WindowType.UTILITY
        ];

        for (let window of this.windows) {
            if (
                dialogTypes.includes(window.window_type) ||
                window.find_root_ancestor() !== window ||
                !window.resizeable
            ) {
                dialogWindows.push(window);
            } else {
                regularWindows.push(window);
            }
        }
        return [dialogWindows, regularWindows];
    }
};

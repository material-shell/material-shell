const { Meta, Gio, GLib, Clutter } = imports.gi;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { Backdrop } = Me.imports.widget.backdrop;
const { debounce } = Me.imports.utils.index;

const FOCUS_DEBOUNCE_DELAY = 100;

/* exported BaseTilingLayout */
var BaseTilingLayout = class BaseTilingLayout {
    constructor(superWorkspace) {
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/tiling/${this.constructor.key}-symbolic.svg`
        );
        this.superWorkspace = superWorkspace;
        this.monitor = superWorkspace.monitor;
        this.windowFocused = this.superWorkspace.windowFocused;
        this.windowChangedId = this.superWorkspace.connect(
            'windows-changed',
            this.onWindowsChanged.bind(this)
        );
        this.onFocusChangedDebounced = debounce(
            this.onFocusChangedDedup,
            FOCUS_DEBOUNCE_DELAY
        );
        this.windowFocusedChangedId = this.superWorkspace.connect(
            'window-focused-changed',
            (_, window, oldWindow) => {
                this.onFocusChangedDebounced(window, oldWindow);
            }
        );
        this.workAreaChangedId = global.display.connect(
            'workareas-changed',
            () => {
                this.onTile();
            }
        );
    }

    onWindowsChanged() {
        if (Me.loaded) {
            log(
                `${this.superWorkspace.categoryKey} tilingLayout tile itself from onWindowsChanged event`
            );
            this.onTile();
        }
    }

    onFocusChangedDedup(windowFocused, oldWindowFocused) {
        // Use indirection here for inheritance
        // And to prevent focus change with no change
        if ('_debouncedArgs' in this.onFocusChangedDedup) {
            const firstOldFocusedWindow = this.onFocusChangedDedup
                ._debouncedArgs[0][1];
            if (firstOldFocusedWindow === windowFocused) {
                log('Window focus compensated during debounce, doing nothing');
                return;
            }
            oldWindowFocused = firstOldFocusedWindow;
        }
        this.onFocusChanged(windowFocused, oldWindowFocused);
    }

    onFocusChanged(windowFocused) {
        this.windowFocused = windowFocused;
    }

    onTile() {
        log(`Tile ${this.superWorkspace.categoryKey}`);
        const {
            dialogWindows,
            regularWindows
        } = this.getDialogAndRegularWindows();
        this.onTileRegulars(regularWindows);
        this.onTileDialogs(dialogWindows);
    }

    // eslint-disable-next-line no-unused-vars
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
            window.backdrop.fillWorkArea();
            this.moveMetaWindow(
                metaWindow,
                workArea.x + workArea.width / 2 - window.width / 2,
                workArea.y + workArea.height / 2 - window.height / 2
            );
        });
    }

    moveMetaWindow(metaWindow, x, y) {
        this.callSafely(metaWindow, () => {
            metaWindow.move_frame(true, x, y);
        });
    }

    moveAndResizeMetaWindow(metaWindow, x, y, width, height, animate) {
        if (!animate || !this.superWorkspace.isDisplayed()) {
            this.callSafely(metaWindow, () => {
                metaWindow.move_resize_frame(true, x, y, width, height);
            });
            return;
        }
        const gap = global.tilingManager.gap;
        const tweenTime = global.tilingManager.tweenTime;
        if (gap) {
            x = x + gap / 2;
            y = y + gap / 2;
            width = width - gap;
            height = height - gap;
        }

        const rect = metaWindow.get_frame_rect();
        x = Math.floor(x);
        y = Math.floor(y);
        width = Math.floor(width);
        height = Math.floor(height);
        if (
            x === rect.x &&
            y === rect.y &&
            width === rect.width &&
            height === rect.height
        ) {
            return;
        }
        this.callSafely(metaWindow, () => {
            const actor = metaWindow.get_compositor_private();
            const oldRect = metaWindow.get_frame_rect();
            const [px, py] = global.get_pointer();

            if (metaWindow.grabbed) {
                const grabX = (px - actor.x) / actor.width;
                const grabY = (py - actor.y) / actor.height;
                actor.set_pivot_point(grabX, grabY);
                Tweener.addTween(actor, {
                    scale_x: width / oldRect.width,
                    scale_y: height / oldRect.height,
                    time: tweenTime,
                    transition: 'easeOutQuad'
                });
                return;
            }

            metaWindow.move_resize_frame(true, x, y, width, height);
            const newRect = metaWindow.get_frame_rect();
            actor.opacity = 255;
            actor.scale_x = oldRect.width / newRect.width;
            actor.scale_y = oldRect.height / newRect.height;
            actor.translation_x = oldRect.x - newRect.x;
            actor.translation_y = oldRect.y - newRect.y;
            Tweener.addTween(actor, {
                scale_x: 1.0,
                scale_y: 1.0,
                translation_x: 0,
                translation_y: 0,
                time: tweenTime,
                transition: 'easeOutQuad'
            });
        });
    }

    callSafely(metaWindow, callback, alreadyDelayed) {
        let actor = metaWindow.get_compositor_private();
        //First check if the metaWindow got an actor and it's not already tweening
        if (actor && actor.get_texture()) {
            // We need the actor to be mapped to remove random crashes
            if (actor.mapped) {
                callback();
            } else {
                // Wait for it to be mapped
                if (actor.waitToBeMappedId) return;
                actor.waitToBeMappedId = actor.connect('notify::mapped', () => {
                    callback();
                    actor.disconnect(actor.waitToBeMappedId);
                    delete actor.waitToBeMappedId;
                });
            }
        } else if (!alreadyDelayed || alreadyDelayed < 20) {
            // If we don't have actor we hope to get it in the next loop
            GLib.timeout_add(GLib.PRIORITY_DEFAULT, 50, () => {
                this.callSafely(
                    metaWindow,
                    callback,
                    (alreadyDelayed || 0) + 1
                );
                return GLib.SOURCE_REMOVE;
            });
        } else {
            // Can't do shit for now
            log(
                `Failed to tile ${metaWindow.get_title()} after ${alreadyDelayed} tries`
            );
        }
    }

    getWorkspaceBounds() {
        const gap = global.tilingManager.gap;
        const {
            x,
            y,
            width,
            height
        } = Main.layoutManager.getWorkAreaForMonitor(this.monitor.index);
        return {
            x: x + gap / 2,
            y: y + gap / 2,
            width: width - gap,
            height: height - gap
        };
    }

    onDestroy() {
        this.superWorkspace.disconnect(this.windowChangedId);
        this.superWorkspace.disconnect(this.windowFocusedChangedId);
        global.display.disconnect(this.workAreaChangedId);
    }

    getDialogAndRegularWindows() {
        let dialogWindows = [];
        let regularWindows = [];

        for (let window of this.superWorkspace.windows) {
            if (this.isDialog(window)) {
                dialogWindows.push(window);
            } else {
                regularWindows.push(window);
            }
        }

        return { dialogWindows, regularWindows };
    }

    isDialog(metaWindow) {
        if (!metaWindow) return false;
        let dialogTypes = [
            Meta.WindowType.DIALOG,
            Meta.WindowType.MODAL_DIALOG,
            Meta.WindowType.UTILITY
        ];
        return (
            dialogTypes.includes(metaWindow.window_type) ||
            !metaWindow.resizeable
        );
    }
};

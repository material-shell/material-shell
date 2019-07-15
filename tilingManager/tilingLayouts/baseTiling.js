const { Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { Backdrop } = Me.imports.widget.backdrop;
const { getSettings } = Me.imports.utils.settings;

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
        this.settings = getSettings('layouts');
        this.settingsSignals = [
            this.settings.connect('changed::gap', (schema, key) => {
                this.gap = schema.get_int('gap');
                this.onTile();
            }),
            this.settings.connect('changed::tween-time', (schema, key) => {
                this.tweenTime = schema.get_double('tween-time');
            })
        ];
        this.gap = this.settings.get_int('gap');
        this.tweenTime = this.settings.get_double('tween-time');
        this.windows = superWorkspace.windows;
    }

    onWindowsChanged() {
        log('windows changed');
        this.windows = this.superWorkspace.windows;
        log(
            `${this.superWorkspace.categoryKey} tilingLayout tile itself from onWindowsChanged event`
        );
        this.onTile();
    }

    onFocusChanged(windowFocused) {
        this.windowFocused = windowFocused;
    }

    onTile() {
        log('tile for real', this.superWorkspace.categoryKey);
        let [dialogWindows, regularWindows] = this.getDialogAndRegularWindows();
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
            metaWindowInside.move_frame(true, x, y);
        });
    }

    moveAndResizeMetaWindow(metaWindow, x, y, width, height) {
        if (this.gap) {
            x = x + this.gap;
            y = y + this.gap;
            width = width - 2 * this.gap;
            height = height - 2 * this.gap;
        }

        const rect = metaWindow.get_frame_rect();
        const buf = metaWindow.get_buffer_rect();
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
        this.callSafely(metaWindow, metaWindowInside => {
            const actor = metaWindowInside.get_compositor_private();
            const oldRect = metaWindow.get_frame_rect();
            const [px, py] = global.get_pointer();

            if (metaWindow.grabbed) {
                const aw = actor.width;
                const ah = actor.height;
                const grabX = (px - actor.x) / actor.width;
                const grabY = (py - actor.y) / actor.height;
                actor.set_pivot_point(grabX, grabY);
                Tweener.addTween(actor, {
                    scale_x: width / oldRect.width,
                    scale_y: height / oldRect.height,
                    time: this.tweenTime,
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
                time: this.tweenTime,
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

    onDestroy() {
        this.settings.disconnect(this.settingsSignal);
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

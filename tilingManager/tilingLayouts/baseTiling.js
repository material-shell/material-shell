const { Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { Backdrop } = Me.imports.widget.backdrop;

/* exported BaseTilingLayout */
var BaseTilingLayout = class BaseTilingLayout {
    constructor(superWorkspace) {
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/tiling/${
                this.constructor.key
            }-symbolic.svg`
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

        this.windows = superWorkspace.windows;
    }

    onWindowsChanged() {
        log('windows changed');
        this.windows = this.superWorkspace.windows;
        log(
            `${
                this.superWorkspace.categoryKey
            } tilingLayout tile itself from onWindowsChanged event`
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
        log('TILING DIALOG WINDOWS');
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        windows.forEach(metaWindow => {
            if (metaWindow.grabbed) return;
            let window = metaWindow.get_compositor_private();
            if (!window) return;
            log('TILE', metaWindow.title);
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
        this.callSafely(metaWindow, metaWindowInside => {
            metaWindowInside.move_frame(true, x, y);
        });
    }

    moveAndResizeMetaWindow(metaWindow, x, y, width, height) {
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
        this.callSafely(metaWindow, metaWindowInside => {
            const actor = metaWindowInside.get_compositor_private();
            let {
                x: oldX,
                y: oldY,
                width: oldWidth,
                height: oldHeight
            } = actor;
            const [px, py] = global.get_pointer();

            if (actor.has_clip) {
                const [, , clipWidth, clipHeight] = actor.get_clip();
                oldWidth = clipWidth;
                oldHeight = clipHeight;
                actor.set_z_position(0);
                actor.remove_clip();
            }

            if (metaWindow.grabbed) {
                const grabX = (px - actor.x) / actor.width;
                const grabY = (py - actor.y) / actor.height;
                actor.set_pivot_point(grabX, grabY);

                Tweener.addTween(actor, {
                    scale_x: width / rect.width,
                    scale_y: height / rect.height,
                    time: tweenTime,
                    transition: 'easeOutQuad'
                });
                return;
            }

            metaWindow.move_resize_frame(true, x, y, width, height);
            let {
                x: newX,
                y: newY,
                width: newWidth,
                height: newHeight
            } = actor;
            const frame = metaWindow.get_frame_rect();

            if (frame.width !== width || frame.height !== height) {
                log(
                    'Force resize of',
                    metaWindow.get_title(),
                    `${newWidth}x${newHeight} -> ${width}x${height}`
                );
                // Some windows have invisible padding
                // actor is larger in this case and we need to clip
                // only visible area
                actor.set_clip(frame.x - newX, frame.y - newY, width, height);
                // This is a gore hack to prevent clipped areas
                // to be drawn with garbage on top of other windows.
                // For some reasons this seems to force correct damaging.
                actor.set_z_position(0.01);
                newWidth = width;
                newHeight = height;
            }

            actor.opacity = 255;
            actor.scale_x = oldWidth / newWidth;
            actor.scale_y = oldHeight / newHeight;
            actor.translation_x = oldX - newX;
            actor.translation_y = oldY - newY;
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

        for (let window of this.windows) {
            if (this.isDialog(window)) {
                dialogWindows.push(window);
            } else {
                regularWindows.push(window);
            }
        }

        log(
            'Tiling ',
            this.superWorkspace.categoryKey,
            regularWindows.map(w => w.get_title())
        );
        return [dialogWindows, regularWindows];
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

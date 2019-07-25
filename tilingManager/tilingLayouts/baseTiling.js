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
        const workArea = this.getWorkspaceBounds();
        log(JSON.stringify(workArea))
        let screenCollisionFlags = {
            up: y === workArea.y,
            down: (y + height) === (workArea.height + workArea.y),
            left: x === workArea.x,
            right: (x + width) === (workArea.width + workArea.x)
        };
        const gap = global.tilingManager.gap;
        log("gap=" + gap)
        const screenGap = global.tilingManager.screenGap;
        log("screenGap=" + screenGap)
        const tweenTime = global.tilingManager.tweenTime;
        if (gap && (screenGap || screenGap === 0)) {
            log("Using screenGap")
            log("y=" + y, "y+height=" + (y+ height) + ",workArea.height=" + (workArea.height + workArea.y))
            log("Up:    " + screenCollisionFlags.up)
            log("Down:  " + screenCollisionFlags.down)
            log(screenCollisionFlags.up === screenCollisionFlags.down);
            log("x=" + x, "x+width= " + (x+width) + ",workArea.width= " + (workArea.width + workArea.y))
            log("Left:  " + screenCollisionFlags.left)
            log("Right: " + screenCollisionFlags.right)
            log(screenCollisionFlags.left === screenCollisionFlags.right);
            // Vertical
            // height
            if (screenCollisionFlags.up !== screenCollisionFlags.down) {
                log("h: Using half gap half screen gap")
                height -= (gap+screenGap)/2;
            } else {
                // they are equal here so only check one
                if (screenCollisionFlags.up) {
                    log("h: Using screen gap")
                    height -= screenGap;
                } else {
                    log("h: Using gap")
                    height -= gap;
                }
            }
            // y
            if (screenCollisionFlags.up) {
                log("y: Using screen gap")
                y += (screenGap/2);
            } else {
                log("y: Using gap")
                y += (gap/2);
            }
            
            // Horizontal
            // width
            if (screenCollisionFlags.left !== screenCollisionFlags.right) {
                width -= (gap+screenGap)/2;
            } else {
                // they are equal here so only check one
                if (screenCollisionFlags.left) {
                    width -= screenGap;
                } else {
                    width -= gap;
                }
            }
            // x
            if (screenCollisionFlags.left) {
                x += (screenGap/2);
            } else {
                x += (gap/2);
            }
        } else if (gap) {
            log("Only using gap")
            x = x + gap / 2;
            y = y + gap / 2;
            width = width - gap;
            height = height - gap;
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

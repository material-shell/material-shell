const { Meta, Gio, GLib, Clutter } = imports.gi;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;
const { Backdrop } = Me.imports.widget.backdrop;
const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported BaseTilingLayout */
var BaseTilingLayout = class BaseTilingLayout {
    constructor(superWorkspace) {
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/tiling/${this.constructor.key}-symbolic.svg`
        );
        this.superWorkspace = superWorkspace;
        this.monitor = superWorkspace.monitor;
        this.windowChangedId = this.superWorkspace.connect(
            'windows-changed',
            (_, windows, oldWindows) => {
                this.onWindowsChanged(windows, oldWindows);
            }
        );
        this.windowFocusedChangedId = this.superWorkspace.connect(
            'window-focused-changed',
            (_, window, oldWindow) => {
                this.onFocusChanged(window, oldWindow);
            }
        );
        this.workAreaChangedId = global.display.connect(
            'workareas-changed',
            this.onWorkAreasChanged.bind(this)
        );

        this.themeSettings = getSettings('theme');
        this.doDialogBackdrop = this.themeSettings.get_boolean('do-dialog-backdrop');
        this.dialogSetting = this.themeSettings.connect('changed::do-dialog-backdrop', schema => {
            this.doDialogBackdrop = schema.get_boolean('do-dialog-backdrop');
            this.onTile();
        });
    }

    onWorkAreasChanged() {
        this.onTile();
    }

    onWindowsChanged() {
        if (Me.loaded) {
            this.onTile();
        }
    }

    onFocusChanged() {}

    onTile() {
        const {
            dialogWindows,
            regularWindows
        } = this.getDialogAndRegularWindows();
        this.onTileRegulars(regularWindows);
        this.onTileDialogs(dialogWindows);
    }

    onTileRegulars(windows) {
        windows
            .filter(window => window.get_maximized())
            .forEach(window => {
                Main.wm.skipNextEffect(window.get_compositor_private());
                window.unmaximize(Meta.MaximizeFlags.BOTH);
            });

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
            if (!window.backdrop && this.doDialogBackdrop) {
                window.backdrop = new Backdrop(window);
            } else if (window.backdrop) {
                if (this.doDialogBackdrop) {
                    window.backdrop.show();
                } else {
                    window.backdrop.hide();
                }
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

    moveAndResizeMetaWindow(metaWindow, x, y, width, height, animate, noGaps) {
        const tweenTime = global.tilingManager.tweenTime;
        if (!noGaps) {
            ({ x, y, width, height } = this.applyGaps({ x, y, width, height }));
        }

        if (!animate || !this.superWorkspace.isDisplayed()) {
            this.callSafely(metaWindow, () => {
                metaWindow.move_resize_frame(true, x, y, width, height);
            });
            return;
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
            let {
                x: oldX,
                y: oldY,
                width: oldWidth,
                height: oldHeight
            } = actor;

            if (actor.has_clip) {
                const [, , clipWidth, clipHeight] = actor.get_clip();
                oldWidth = clipWidth;
                oldHeight = clipHeight;
                actor.set_z_position(0);
                actor.remove_clip();
            }

            if (metaWindow.grabbed) {
                // Removing this for now since on drop animation start with the
                // original grabbed actor size making it wonky.

                // This sizes the grabbed actor to the drop area:
                // const [px, py] = global.get_pointer();
                // const grabX = (px - actor.x) / actor.width;
                // const grabY = (py - actor.y) / actor.height;
                // actor.set_pivot_point(grabX, grabY);
                //
                // Tweener.addTween(actor, {
                //     scale_x: width / rect.width,
                //     scale_y: height / rect.height,
                //     time: tweenTime,
                //     transition: 'easeOutQuad'
                // });
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

            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(actor, {
                    scale_x: 1.0,
                    scale_y: 1.0,
                    translation_x: 0,
                    translation_y: 0,
                    time: tweenTime,
                    transition: 'easeOutQuad'
                });
            } else {
                actor.ease({
                    scale_x: 1.0,
                    scale_y: 1.0,
                    translation_x: 0,
                    translation_y: 0,
                    duration: tweenTime * 1000,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD
                });
            }
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
        }
    }

    getWorkspaceBounds() {
        const {
            x,
            y,
            width,
            height
        } = Main.layoutManager.getWorkAreaForMonitor(this.monitor.index);
        return {
            x,
            y,
            width,
            height
        };
    }

    applyGaps(window) {
        // Reduces window size according to gap setting
        const gap = global.tilingManager.gap;
        const screenGap = global.tilingManager.screenGap;
        const useScreenGap = global.tilingManager.useScreenGap;

        if (!gap && (!useScreenGap || !screenGap)) {
            return window;
        }
        let { x, y, width, height } = window;

        const bounds = this.getWorkspaceBounds();
        const edgeGap = useScreenGap ? screenGap : gap;
        const halfGap = gap / 2;

        if (window.x === bounds.x) {
            // Window is at screen left edge
            x += edgeGap;
            width -= edgeGap;
        } else {
            x += halfGap;
            width -= halfGap;
        }
        if (window.y === bounds.y) {
            // Window is at screen top edge
            y += edgeGap;
            height -= edgeGap;
        } else {
            y += halfGap;
            height -= halfGap;
        }
        if (window.x + window.width === bounds.x + bounds.width) {
            // Window is at screen right edge
            width -= edgeGap;
        } else {
            width -= halfGap;
        }
        if (window.y + window.height === bounds.y + bounds.height) {
            // Window is at screen bottom edge
            height -= edgeGap;
        } else {
            height -= halfGap;
        }

        return { x, y, width, height };
    }

    onDestroy() {
        this.superWorkspace.disconnect(this.windowChangedId);
        this.superWorkspace.disconnect(this.windowFocusedChangedId);
        this.themeSettings.disconnect(this.dialogSetting);
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
            !metaWindow.resizeable ||
            (metaWindow.get_transient_for() != null && metaWindow.skip_taskbar)
        );
    }
};

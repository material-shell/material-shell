const { St, Meta, Shell, GLib } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const { Row } = Me.imports.widget.layout;

// TODO: Make this configurable
const WINDOW_PER_SCREEN = 2;
const WINDOW_SLIDE_TWEEN_TIME = 0.25;
/* exported SplitLayout */
var SplitLayout = class SplitLayout extends BaseTilingLayout {
    constructor(superWorkspace) {
        super(superWorkspace);

        this.overContainer = new St.Widget();
        this.transitionContainer = new Row();
        this.overContainer.add_actor(this.transitionContainer);
        this.activeWindows = [];
    }

    onWindowsChanged() {
        const { regularWindows } = this.getDialogAndRegularWindows();
        let oldWindows = null;
        if (
            // We have an active window that has been closed
            this.activeWindows.some(window => !regularWindows.includes(window))
        ) {
            // baseIndex should be kept with enough window on screen
            this.baseIndex = Math.min(
                this.baseIndex,
                regularWindows.length - WINDOW_PER_SCREEN
            );
            // Keeping previous windows
            oldWindows = this.activeWindows;
            // Resetting activeWindows from base
            this.activeWindows = regularWindows.slice(
                this.baseIndex,
                this.baseIndex + WINDOW_PER_SCREEN
            );
        } else {
            // Keeping left active window as base
            // (index will change if the array has changed)
            this.baseIndex = regularWindows.indexOf(this.activeWindows[0]);
        }

        if (oldWindows) {
            // We need to transition here because focus won't change
            this.transition(this.activeWindows, oldWindows);
        }

        super.onWindowsChanged(); // Calls onTile
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        super.onFocusChanged();
        if (this.activeWindows.includes(windowFocused)) {
            return;
        }

        const { regularWindows } = this.getDialogAndRegularWindows();
        const newIndex = regularWindows.indexOf(windowFocused);
        const oldIndex = regularWindows.indexOf(oldWindowFocused);
        const oldWindows = this.activeWindows;
        if (oldIndex < newIndex) {
            this.activeWindows = regularWindows.slice(
                newIndex - WINDOW_PER_SCREEN + 1,
                newIndex + 1
            );
        } else {
            this.activeWindows = regularWindows.slice(
                newIndex,
                newIndex + WINDOW_PER_SCREEN
            );
        }
        this.baseIndex = regularWindows.indexOf(this.activeWindows[0]);
        if (regularWindows.length > WINDOW_PER_SCREEN) {
            this.transition(this.activeWindows, oldWindows);
        }
    }

    onTileRegulars(windows) {
        if (this.animationInProgress || !this.activeWindows) return;

        const { regularWindows } = this.getDialogAndRegularWindows();
        regularWindows
            .filter(window => !this.activeWindows.includes(window))
            .forEach(window => window.get_compositor_private().hide());

        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        this.activeWindows.forEach((window, i) => {
            if (window.grabbed) return;
            if (window.get_maximized()) {
                Main.wm.skipNextEffect(window.get_compositor_private());

                window.unmaximize(Meta.MaximizeFlags.BOTH);
            }
            const windowBounds = {
                x: workArea.x,
                y: workArea.y,
                width: workArea.width,
                height: workArea.height
            };
            if (workArea.width > workArea.height) {
                windowBounds.width /= WINDOW_PER_SCREEN;
            } else {
                windowBounds.height /= WINDOW_PER_SCREEN;
            }

            if (workArea.width > workArea.height) {
                windowBounds.x += (i * workArea.width) / WINDOW_PER_SCREEN;
            } else {
                windowBounds.y += (i * workArea.height) / WINDOW_PER_SCREEN;
            }

            this.moveAndResizeMetaWindow(
                window,
                windowBounds.x,
                windowBounds.y,
                windowBounds.width,
                windowBounds.height,
                regularWindows.length < WINDOW_PER_SCREEN
            );
        });
        this.activeWindows.forEach(window =>
            window.get_compositor_private().show()
        );
    }

    onDestroy() {
        super.onDestroy();
        this.windows.forEach(window => {
            if (!this.activeWindows.includes(window)) {
                window.get_compositor_private().show();
            }
        });
    }

    waitForAllActors(actors, callback, retryCount) {
        // actors.forEach(actor => {
        //     log(actor, actor.mapped, actor.get_texture(), retryCount);
        // });
        if (
            actors.every(actor => actor && actor.mapped && actor.get_texture())
        ) {
            callback();
        } else if (!retryCount || retryCount < 20) {
            // log('Retrying', retryCount);

            // If we don't have actor we hope to get it in the next loop
            GLib.timeout_add(GLib.PRIORITY_DEFAULT, 50, () => {
                this.waitForAllActors(actors, callback, (retryCount || 0) + 1);
                return GLib.SOURCE_REMOVE;
            });
        } else {
            log('Failed to transition actors');
        }
    }

    transition(newMetaWindows, oldMetaWindows) {
        const { regularWindows } = this.getDialogAndRegularWindows();
        newMetaWindows = newMetaWindows.filter(
            window => !oldMetaWindows.includes(window)
        );
        oldMetaWindows = oldMetaWindows.filter(window =>
            window.get_compositor_private()
        );
        this.transitionContainer.remove_all_children();
        const direction =
            regularWindows.indexOf(newMetaWindows[0]) -
            regularWindows.indexOf(oldMetaWindows[0]);

        let allMetaWindows =
            direction > 0
                ? oldMetaWindows.concat(newMetaWindows)
                : newMetaWindows.concat(oldMetaWindows);

        const allWindows = allMetaWindows.map(metaWindow =>
            metaWindow.get_compositor_private()
        );
        allWindows.forEach(window => window.show());

        this.waitForAllActors(allWindows, () => {
            allMetaWindows
                .map(metaWindow => metaWindow.get_compositor_private())
                .forEach(window => {
                    let rect = window.meta_window.get_frame_rect();
                    let actorContent = Shell.util_get_content_for_window_actor(
                        window,
                        rect
                    );
                    let actorClone = new St.Widget({
                        content: actorContent
                    });
                    actorClone.set_size(rect.width, rect.height);
                    this.transitionContainer.add_child(actorClone);
                    window.hide();
                });

            // Get the full workArea here and not workspaceBounds which have gaps
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.monitor.index
            );

            const shift =
                (workArea.width * newMetaWindows.length) / WINDOW_PER_SCREEN;

            if (!this.animationInProgress) {
                this.transitionContainer.set_position(
                    workArea.x + (direction > 0 ? 0 : -shift),
                    workArea.y
                );

                this.overContainer.set_clip(
                    this.monitor.x,
                    this.monitor.y,
                    this.monitor.width,
                    this.monitor.height
                );
                global.window_group.add_actor(this.overContainer);
                this.animationInProgress = true;
            }

            Tweener.addTween(this.transitionContainer, {
                x: workArea.x + (direction > 0 ? -shift : 0),
                time: WINDOW_SLIDE_TWEEN_TIME,
                transition: 'easeOutQuad',
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        });
    }

    endTransition() {
        this.activeWindows.forEach(window => {
            window.get_compositor_private().show();
        });
        global.window_group.remove_child(this.overContainer);
        log(
            `${this.superWorkspace.categoryKey} tilingLayout tile itself after the transition`
        );
        this.onTile();
    }
};

SplitLayout.key = 'split';

const { St, Meta, Shell } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const { range } = Me.imports.utils.index;
const { Column, Row } = Me.imports.widget.layout;

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
        this.activeWindows = this.getActiveWindows();
        super.onWindowsChanged();
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        super.onFocusChanged();
        const newIndex = this.windows.indexOf(windowFocused);
        const oldIndex = this.windows.indexOf(oldWindowFocused);
        if (this.activeWindows.includes(windowFocused)) {
            return;
        }
        const oldWindows = this.activeWindows;
        this.activeFromStart = oldIndex < newIndex;
        this.activeIndex = newIndex;
        this.activeWindows = this.getActiveWindows();
        const direction = newIndex > oldIndex ? 1 : -1;
        //this.onTile();
        this.transition(this.activeWindows, oldWindows, direction);
    }

    getActiveWindows() {
        let activeWindows;
        if (this.activeFromStart) {
            activeWindows = this.windows.slice(
                this.activeIndex - WINDOW_PER_SCREEN + 1,
                this.activeIndex + 1
            );
        } else {
            activeWindows = this.windows.slice(
                this.activeIndex,
                this.activeIndex + WINDOW_PER_SCREEN
            );
        }
        return activeWindows;
    }

    onTileRegulars(windows) {
        if (this.animationInProgress) return;
        if (!this.activeWindows) {
            return;
        }
        this.windows
            .filter(window => !this.activeWindows.includes(window))
            .forEach(window => window.get_compositor_private().hide());
        this.onTileGroup(this.activeWindows);
        this.activeWindows.forEach(window =>
            window.get_compositor_private().show()
        );
    }

    onTileGroup(windows, offset) {
        // Get the full workArea here and not workspaceBounds which have gaps
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        offset = offset || 0;

        windows.forEach((window, j) => {
            const i = j + offset;
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
                windowBounds.height
            );
        });
    }

    onDestroy() {
        super.onDestroy();
        this.windows.forEach(window => {
            if (!this.activeWindows.includes(window)) {
                window.get_compositor_private().show();
            }
        });
    }

    transition(newMetaWindows, oldMetaWindows, direction) {
        newMetaWindows = newMetaWindows.filter(
            window => !oldMetaWindows.includes(window)
        );
        this.transitionContainer.remove_all_children();

        let allMetaWindows =
            direction > 0
                ? oldMetaWindows.concat(newMetaWindows)
                : newMetaWindows.concat(oldMetaWindows);

        allMetaWindows
            .concat(oldMetaWindows)
            .map(metaWindow => metaWindow.get_compositor_private())
            .forEach(window => {
                let rect = window.meta_window.get_frame_rect();
                let actorContent = Shell.util_get_content_for_window_actor(
                    window,
                    rect
                );
                let actorClone = new St.Widget({ content: actorContent });
                actorClone.set_size(rect.width, rect.height);
                this.transitionContainer.add_child(actorClone);
                /* window.reparent(this.transitionContainer);*/
                window.hide();
            });

        /* this.onTileGroup(
            direction > 0
                ? [...oldMetaWindows, ...newMetaWindows]
                : [...newMetaWindows, ...oldMetaWindows],
            direction > 0 ? 0 : -newMetaWindows.length + 1
        ); */

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
    }

    endTransition() {
        this.activeWindows.forEach(window => {
            window.get_compositor_private().show();
        });
        global.window_group.remove_child(this.overContainer);
        log(
            `${
                this.superWorkspace.categoryKey
            } tilingLayout tile itself after the transition`
        );
        this.onTile();
    }
};

SplitLayout.key = 'split';

const { St, Meta, Clutter } = imports.gi;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported MaximizeLayout */
var MaximizeLayout = class MaximizeLayout extends BaseTilingLayout {
    constructor(superWorkspace) {
        super(superWorkspace);

        this.overContainer = new St.Widget();
        this.transitionContainer = new St.Widget();
        this.leftWindowContainer = new St.Widget();
        this.rightWindowContainer = new St.Widget();
        this.transitionContainer.add_actor(this.leftWindowContainer);
        this.transitionContainer.add_actor(this.rightWindowContainer);
        this.overContainer.add_actor(this.transitionContainer);
        this.windowNotDialogFocused =
            !this.isDialog(this.superWorkspace.windowFocused) &&
            this.superWorkspace.windowFocused;
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        if (!this.isDialog(windowFocused) && !this.isDialog(oldWindowFocused)) {
            const newIndex = this.superWorkspace.windows.indexOf(windowFocused);
            const oldIndex = this.superWorkspace.windows.indexOf(
                oldWindowFocused
            );
            this.windowNotDialogFocused = windowFocused;
            const direction = newIndex > oldIndex ? 1 : -1;
            this.prepareTransition(windowFocused, oldWindowFocused, direction);
            this.animateTransition(direction);
        }
    }

    onTileRegulars(windows) {
        if (this.animationInProgress) {
            return;
        }
        windows.forEach(window => {
            const actor = window.get_compositor_private();
            if (
                window !== this.windowNotDialogFocused ||
                !this.superWorkspace.isDisplayed()
            ) {
                actor.hide();
            } else {
                // Unclip windows in maximize
                if (actor.has_clip) {
                    actor.set_z_position(0);
                    actor.remove_clip();
                }
                if (!window.grabbed && !window.maximized_horizontally) {
                    Main.wm.skipNextEffect(actor);
                    window.maximize(Meta.MaximizeFlags.BOTH);
                }
                actor.show();
            }
        });
    }

    onDestroy() {
        super.onDestroy();
        this.superWorkspace.windows.forEach(window => {
            if (window !== this.windowNotDialogFocused) {
                window.get_compositor_private().show();
            }
        });
    }

    prepareTransition(newMetaWindow, oldMetaWindow, direction) {
        if (
            oldMetaWindow &&
            (!oldMetaWindow.get_compositor_private() || oldMetaWindow.grabbed)
        ) {
            oldMetaWindow = null;
        }
        if (
            newMetaWindow &&
            (!newMetaWindow.get_compositor_private() || newMetaWindow.grabbed)
        ) {
            newMetaWindow = null;
        }
        if (!oldMetaWindow && !newMetaWindow) {
            log('Refusing to animate empty windows');
            return;
        }
        const containers = [
            this.leftWindowContainer,
            this.rightWindowContainer
        ];
        if (direction < 0) {
            containers.reverse();
        }
        const [oldContainer, newContainer] = containers;

        if (oldMetaWindow) {
            let oldWindowClone = Main.wm.getWindowClone(oldMetaWindow);
            oldWindowClone.reparent(oldContainer);
            oldMetaWindow.get_compositor_private().hide();
        }
        if (newMetaWindow) {
            let newWindowClone = Main.wm.getWindowClone(newMetaWindow);
            newWindowClone.reparent(newContainer);
            newMetaWindow.get_compositor_private().hide();
        }
    }

    animateTransition(direction) {
        // Get the full workArea here and not workspaceBounds which have gaps
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );

        if (!this.animationInProgress) {
            this.rightWindowContainer.set_position(workArea.width, 0);
            this.transitionContainer.set_position(
                direction > 0 ? 0 : -workArea.width,
                0
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

        if (ShellVersionMatch('3.32')) {
            Tweener.addTween(this.transitionContainer, {
                x: direction > 0 ? -workArea.width : 0,
                time: 0.25,
                transition: 'easeOutQuad',
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        } else {
            this.transitionContainer.ease({
                x: direction > 0 ? -workArea.width : 0,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        }
    }

    endTransition() {
        this.leftWindowContainer.remove_all_children();
        this.rightWindowContainer.remove_all_children();
        global.window_group.remove_child(this.overContainer);
        log(
            `${this.superWorkspace.categoryKey} tilingLayout tile itself after the transition`
        );
        this.onTile();
    }
};

MaximizeLayout.key = 'maximize';

const { Clutter, Meta, St, GObject, GLib } = imports.gi;

const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const TilingLayout =
    Me.imports.tilingManager.tilingLayouts.tilingLayout.TilingLayout;

/* exported DialogLayout */
var DialogLayout = class DialogLayout extends TilingLayout {
    constructor(windows, monitor) {
        super(windows, monitor);
        this.backdropContainers = {};
    }

    onWindowsChanged(windows) {
        super.onWindowsChanged(windows);
    }

    onFocusChanged(windowFocused, oldWindowFocused) {
        this.onTile();
    }

    onTile() {
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        this.windows.forEach(metaWindow => {
            if (metaWindow.grabbed) return;
            let window = metaWindow.get_compositor_private();
            if (!window) return;
            let backdropContainer = this.getBackdropContainer(metaWindow);
            //backdropContainer.reparent(global.window_group);
            backdropContainer.raise_top();
            metaWindow.raise();
            window.raise_top();
            backdropContainer.set_position(workArea.x, workArea.y);
            backdropContainer.set_size(workArea.width, workArea.height);
            metaWindow.move_frame(
                window,
                workArea.x + workArea.width / 2 - window.width / 2,
                workArea.y + workArea.height / 2 - window.height / 2
            );
        });
    }

    onDestroy() {
        this.windows.forEach(window => {
            if (window !== this.focusedWindow) {
                window.get_compositor_private().show();
            }
        });
    }

    getBackdropContainer(metaWindow) {
        global.tw = metaWindow;
        let backdropContainer = this.backdropContainers[metaWindow.get_id()];
        if (!backdropContainer) {
            backdropContainer = this.newBackropContainer(metaWindow);
        }
        return backdropContainer;
    }

    newBackropContainer(metaWindow) {
        let window = metaWindow.get_compositor_private();
        let backdropContainer = new BackdropContainer(window);
        this.backdropContainers[metaWindow.get_id()] = backdropContainer;
        return backdropContainer;
    }
};

var BackdropContainer = GObject.registerClass(
    class BackdropContainer extends St.Widget {
        _init(window) {
            super._init({
                reactive: false
            });

            this.add_style_class_name('backdrop-container');
            this.window = window;
            /*             this.connect('button-press-event', (actor, event) => {
                log('PRESS ON BACKDROP');
                this.window.get_meta_window().delete(global.get_current_time());
            });
            this.connect('button-release-event', (actor, event) => {
                log('RELEASE ON BACKDROP');
                this.window.get_meta_window().delete(global.get_current_time());
            }); */

            window.connect('destroy', () => {
                //this.remove_child(window);
                this.destroyed = true;
                this.destroy();
            });

            window.connect('notify::visible', () => {
                log('DIALOG', 'notify::visible');
                this.visible = window.visible;
            });

            window.connect('parent-set', () => {
                log('DIALOG', 'WINDOW', 'parent-set');

                this.followWindow();
            });

            this.connect('parent-set', () => {
                log('DIALOG', 'BACKDROP', 'parent-set');

                if (this.destroyed) return;
                //this.raise_top();
                if (this.get_parent() === this.window.get_parent()) {
                    GLib.idle_add(GLib.PRIORITY_HIGH, () => {
                        this.get_parent().set_child_above_sibling(
                            this.window,
                            this
                        );
                    });
                } else {
                    this.followWindow();
                }
            });
            this.followWindow();
            //window.reparent(this);
        }

        followWindow() {
            let newParent = this.window.get_parent();
            if (newParent) {
                this.reparent(newParent);
            }
        }
    }
);

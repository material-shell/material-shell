const { St, GObject, GLib } = imports.gi;
const Main = imports.ui.main;
/* exported Backdrop */
var Backdrop = GObject.registerClass(
    class Backdrop extends St.Widget {
        _init(window) {
            super._init({
                reactive: false
            });

            this.add_style_class_name('backdrop-container');
            this.window = window;
            /*             this.connect('button-press-event', (actor, event) => {
                
                //this.window.get_meta_window().delete(global.get_current_time());
            });
            this.connect('button-release-event', (actor, event) => {
                
                //this.window.get_meta_window().delete(global.get_current_time());
            }); */

            window.connect('destroy', () => {
                //this.remove_child(window);
                this.destroyed = true;
                this.destroy();
            });

            window.connect('show', () => {
                this.show();
            });

            window.connect('hide', () => {
                this.hide();
            });

            window.connect('parent-set', (window, oldParent) => {
                if (!window.meta_window) return;
                this.window.raise_top();
                this.followWindow();
            });

            window.get_meta_window().connect('focus', () => {
                this.highlightWindow();
            });

            this.connect('queue-redraw', () => {
                if (
                    this.get_parent() === this.window.get_parent() &&
                    this.get_parent().get_child_at_index(
                        this.get_parent()
                            .get_children()
                            .indexOf(this) + 1
                    ) !== this.window
                ) {
                    this.lower(this.window);
                }
            });

            this.connect('parent-set', (backdrop, oldParent) => {
                if (this.destroyed) return;
                this.fillWorkArea();
                this.highlightWindow();
            });
            this.followWindow();
            this.highlightWindow();
        }

        followWindow() {
            let newParent = this.window.get_parent();
            if (newParent) {
                this.reparent(newParent);
            }
        }

        highlightWindow() {
            if (this.window.get_parent() !== this.get_parent()) return;
            this.window.raise_top();
            this.lower(this.window);
        }

        fillWorkArea() {
            if (!this.window.meta_window) return;
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.window.meta_window.get_monitor()
            );

            this.set_position(workArea.x, workArea.y);
            this.set_size(workArea.width, workArea.height);
        }
    }
);

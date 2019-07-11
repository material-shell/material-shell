const { St, GObject, GLib } = imports.gi;
const Main = imports.ui.main;
/* exported Backdrop */
var Backdrop = GObject.registerClass(
    class Backdrop extends St.Widget {
        _init(window) {
            super._init({
                reactive: false
            });
            log('NEW BACKDROP');

            this.add_style_class_name('backdrop-container');
            this.window = window;
            /*             this.connect('button-press-event', (actor, event) => {
                log('PRESS ON BACKDROP');
                //this.window.get_meta_window().delete(global.get_current_time());
            });
            this.connect('button-release-event', (actor, event) => {
                log('RELEASE ON BACKDROP');
                //this.window.get_meta_window().delete(global.get_current_time());
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
                        return GLib.SOURCE_REMOVE;
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
                this.fillWorkArea();
            }
        }

        fillWorkArea() {
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.window.meta_window.get_monitor()
            );
            this.set_position(workArea.x, workArea.y);
            this.set_size(workArea.width, workArea.height);
        }
    }
);

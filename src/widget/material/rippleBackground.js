/** Gnome libs imports */
const { St, Clutter, GObject, GLib } = imports.gi;

/* exported RippleBackground */
const Me = imports.misc.extensionUtils.getCurrentExtension();

let RippleWave = GObject.registerClass(
    class RippleWave extends St.Widget {
        _init(mouseX, mouseY, size) {
            super._init({
                style_class: 'ripple-wave',
            });
            this.destroyed = false;

            this.connect('destroy', () => {
                this.destroyed = true;
            });
            this.set_pivot_point(0.5, 0.5);
            this.mouseX = mouseX;
            this.mouseY = mouseY;

            this.fullSize = size * 3;
            this.width = this.fullSize;
            this.height = this.fullSize;
            this.x = Math.round(this.mouseX - this.width / 2);
            this.y = Math.round(this.mouseY - this.height / 2);
            this.scale_x = 32 / this.fullSize;
            this.scale_y = 32 / this.fullSize;
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.ease({
                    scale_x: 1,
                    scale_y: 1,
                    duration: (this.fullSize / 800) * 1000,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                });
                return GLib.SOURCE_REMOVE;
            });
        }

        removeIn(second) {
            this.ease({
                opacity: 0,
                duration: second * 1000,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                        if (!this.destroyed) {
                            this.remove_all_transitions();
                            this.destroy();
                        }
                    });
                },
            });
        }
    }
);

var RippleBackground = GObject.registerClass(
    class RippleBackground extends St.Widget {
        _init(eventListener) {
            super._init({
                clip_to_allocation: true,
            });
            this.displayed = true;
            eventListener.connect('event', (actor, event) => {
                let eventType = event.type();
                if (
                    [
                        Clutter.EventType.BUTTON_PRESS,
                        Clutter.EventType.TOUCH_BEGIN,
                    ].indexOf(eventType) > -1
                ) {
                    let [_, x, y] = this.transform_stage_point(
                        ...event.get_coords()
                    );
                    this.createRippleWave(x, y);
                } else if (
                    [
                        Clutter.EventType.BUTTON_RELEASE,
                        Clutter.EventType.TOUCH_END,
                        Clutter.EventType.LEAVE,
                    ].indexOf(eventType) > -1
                ) {
                    this.removeRippleWave();
                }
                return false;
            });

            const deactivateId = global.stage.connect(
                'deactivate',
                this.removeRippleWave.bind(this)
            );
            this.connect('destroy', () => {
                if (deactivateId) global.stage.disconnect(deactivateId);
            });
        }

        createRippleWave(x, y) {
            this.lastWave = new RippleWave(
                x,
                y,
                Math.max(this.width, this.height)
            );
            this.add_child(this.lastWave);
        }

        removeRippleWave() {
            if (this.lastWave) {
                let waveToDelete = this.lastWave;
                delete this.lastWave;
                waveToDelete.removeIn(0.8);
            }
        }
    }
);

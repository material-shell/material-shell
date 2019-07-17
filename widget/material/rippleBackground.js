const { St, Clutter, GObject } = imports.gi;
const Tweener = imports.ui.tweener;

let RippleWave = GObject.registerClass(
    class RippleWave extends St.Widget {
        _init(mouseX, mouseY, size) {
            super._init({
                style_class: 'ripple-wave'
            });
            this.fullSize = size * 3;
            this.width = 0;
            this.height = 0;

            this.mouseX = mouseX;
            this.mouseY = mouseY;
            this.waveSize = size / 4;
            this.x = Math.round(this.mouseX - this.width / 2);
            this.y = Math.round(this.mouseY - this.height / 2);
            //this.set_pivot_point(mouseX / this.width, mouseY / this.height);
            //this.set_anchor_point_from_gravity(Clutter.Gravity.NORTH_EAST);
            Tweener.addTween(this, {
                waveSize: this.fullSize,
                time: this.fullSize / 600,
                transition: 'easeOutQuad'
            });
        }

        removeIn(second) {
            Tweener.addTween(this, {
                opacity: 0,
                time: second,
                transition: 'easeOutQuad',
                onComplete: () => {
                    this.destroy();
                }
            });
        }

        set waveSize(waveSize) {
            this._waveSize = waveSize;
            this.width = waveSize;
            this.height = waveSize;
            this.x = Math.round(this.mouseX - this.width / 2);
            this.y = Math.round(this.mouseY - this.height / 2);
            this.queue_redraw();
        }

        get waveSize() {
            return this._waveSize;
        }
    }
);

/* exported RippleBackground */
var RippleBackground = GObject.registerClass(
    class RippleBackground extends St.Widget {
        _init() {
            super._init({
                reactive: true,
                clip_to_allocation: true
            });

            this.connect('parent-set', () => {
                let constraint = new Clutter.BindConstraint({
                    source: this.get_parent(),
                    coordinate: Clutter.BindCoordinate.SIZE
                });
                this.add_constraint(constraint);
            });

            this.connect('event', (actor, event) => {
                let eventType = event.type();
                if (
                    [
                        Clutter.EventType.BUTTON_PRESS,
                        Clutter.EventType.TOUCH_BEGIN
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
                        Clutter.EventType.LEAVE
                    ].indexOf(eventType) > -1
                ) {
                    this.removeRippleWave();
                }
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

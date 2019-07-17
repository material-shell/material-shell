const { St, GObject, Clutter } = imports.gi;
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

/* exported RippleContainer */

var RippleContainer = GObject.registerClass(
    class RippleContainer extends St.Widget {
        _init(contentActor) {
            super._init({
                reactive: true,
                clip_to_allocation: true
            });

            this.waveContainer = new St.Widget({
                clip_to_allocation: true
            });

            super.add_child(this.waveContainer);

            this.connect('button-press-event', (actor, event) => {
                let [_, x, y] = this.transform_stage_point(
                    ...event.get_coords()
                );
                this.createRippleWave(x, y);
            });

            this.connect('button-release-event', (actor, event) => {
                this.removeRippleWave();
            });

            this.connect('leave-event', (actor, event) => {
                this.removeRippleWave();
            });

            this.setContent(contentActor);
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);

            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            this.waveContainer.allocate(box, flags);
            this.waveContainer.set_clip(box.x1, box.y1, box.x2, box.y2);
            if (this.contentActor) {
                return this.contentActor.allocate(box, flags);
            }
        }

        /**
         * Just the child width but taking into account the slided out part
         */
        vfunc_get_preferred_width(forHeight) {
            if (this.contentActor) {
                return this.contentActor.vfunc_get_preferred_width(forHeight);
            }
            return [0, 0];
        }

        /**
         * Just the child height but taking into account the slided out part
         */
        vfunc_get_preferred_height(forWidth) {
            if (this.contentActor) {
                return this.contentActor.vfunc_get_preferred_height(forWidth);
            }
            return [0, 0];
        }

        setContent(actor) {
            if (this.contentActor) {
                super.remove_child(this.contentActor);
            }

            if (actor) {
                this.contentActor = actor;
                super.add_child(actor);
            }
        }

        createRippleWave(x, y) {
            this.lastWave = new RippleWave(
                x,
                y,
                Math.max(this.width, this.height)
            );
            this.waveContainer.add_child(this.lastWave);
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

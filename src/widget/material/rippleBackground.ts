/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GLib from 'glib';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';

@registerGObjectClass
export class RippleWave extends St.Widget {
    destroyed: boolean;
    mouseX: number;
    mouseY: number;
    fullSize: number;

    constructor({
        mouseX,
        mouseY,
        size,
    }: {
        mouseX: number;
        mouseY: number;
        size: number;
    }) {
        super({
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

    removeIn(second: number) {
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
                    return false;
                });
            },
        });
    }
}

@registerGObjectClass
export class RippleBackground extends St.Widget {
    displayed: boolean;
    lastWave: RippleWave | undefined;

    constructor(eventListener: St.Widget) {
        super({
            clip_to_allocation: true,
        });
        this.displayed = true;
        eventListener.connect(
            'event',
            (actor: Clutter.Actor, event: Clutter.Event) => {
                const eventType = event.type();
                if (
                    [
                        Clutter.EventType.BUTTON_PRESS,
                        Clutter.EventType.TOUCH_BEGIN,
                    ].indexOf(eventType) > -1
                ) {
                    const [_, x, y] = this.transform_stage_point(
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
            }
        );

        const deactivateId = global.stage.connect(
            'deactivate',
            this.removeRippleWave.bind(this)
        );
        this.connect('destroy', () => {
            if (deactivateId) global.stage.disconnect(deactivateId);
        });
    }

    createRippleWave(x: number, y: number) {
        this.lastWave = new RippleWave({
            mouseX: x,
            mouseY: y,
            size: Math.max(this.width, this.height),
        });
        this.add_child(this.lastWave);
    }

    removeRippleWave() {
        if (this.lastWave) {
            const waveToDelete = this.lastWave;
            delete this.lastWave;
            waveToDelete.removeIn(0.8);
        }
    }
}

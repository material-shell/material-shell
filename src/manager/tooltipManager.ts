/** Gnome libs imports */
import * as St from 'st';
import * as Clutter from 'clutter';
import * as GObject from 'gobject';
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

import { MsManager } from 'src/manager/msManager';
import { SetAllocation } from 'src/utils/compatibility';
import * as GLib from 'glib';
import { registerGObjectClass } from 'src/utils/gjs';

export class TooltipManager extends MsManager {
    constructor() {
        super();
    }
    add(actor: Clutter.Actor, params: Partial<MatTooltipParams> = {}) {
        let actorDestroyed = false;
        actor.set_reactive(true);
        const tooltipCallback = () => {
            let tooltip: MatTooltip | null | undefined;
            let left = false;
            let timeoutId: number;
            const leaveCallback = () => {
                left = true;
                if (tooltip) {
                    tooltip.remove();
                    tooltip = null;
                }
                // Cancel countdown, if any
                if (timeoutId) {
                    GLib.source_remove(timeoutId);
                    timeoutId = 0;
                }
                if (!actorDestroyed) {
                    actor.disconnect(leaveId);
                    actor.disconnect(destroyId);
                }
                global.stage.disconnect(deactivateId);
            };
            const leaveId = actor.connect('leave-event', leaveCallback);
            const destroyId = actor.connect('destroy', () => {
                actorDestroyed = true;
                leaveCallback();
            });
            const deactivateId = global.stage.connect(
                'deactivate',
                leaveCallback
            );

            timeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 200, () => {
                timeoutId = 0;
                if (!left) {
                    tooltip = this.createTooltip(actor, params);
                }
                return GLib.SOURCE_REMOVE;
            });
        };
        this.observe(actor, 'enter-event', tooltipCallback);
    }

    createTooltip(actor: Clutter.Actor, params: Partial<MatTooltipParams>): MatTooltip | undefined {
        // If actor has text, use it instead because it may be updated
        let actorText: string | undefined;
        if (actor instanceof St.Label || actor instanceof Clutter.Text) {
            const clutterText =
                actor instanceof St.Label ? actor.get_clutter_text() as Clutter.Text : actor;
            if (clutterText.get_layout().is_ellipsized()) {
                actorText = clutterText.get_text();
            }
        }
        if (actorText) params.text = actorText;

        if (!params.text) {
            return;
        }
        const tooltip = new MatTooltip(actor, params);
        Main.layoutManager.addChrome(tooltip);
        tooltip.show();
        return tooltip;
    }
};

enum TooltipSide {
    LEFT = 0,
    TOP = 1,
    RIGHT = 2,
    BOTTOM = 3,
};

interface MatTooltipParams {
    text: string,
    relativeActor: Clutter.Actor | null,
    offsetX: number,
    offsetY: number,
    side: TooltipSide,
}

@registerGObjectClass
export class MatTooltip extends St.Label {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MatTooltip',
    }
    params: MatTooltipParams;
    sourceActor: Clutter.Actor;

    constructor(sourceActor: Clutter.Actor, params: Partial<MatTooltipParams> = {}) {
        let allParams: MatTooltipParams = Object.assign(
            {
                text: '',
                relativeActor: null,
                offsetX: 0,
                offsetY: 0,
                side: TooltipSide.BOTTOM,
            },
            params
        );
        super({
            text: allParams.text,
            opacity: 0,
            scale_x: 0.8,
            scale_y: 0.8,
            y_align: Clutter.ActorAlign.CENTER,
        });
        this.set_pivot_point(0.5, 0.5);
        this.params = allParams;
        this.get_clutter_text().y_align = Clutter.ActorAlign.CENTER;
        this.sourceActor = sourceActor;
    }
    show() {
        this.ease({
            opacity: 255,
            scale_x: 1,
            scale_y: 1,
            duration: 300,
        });
    }
    remove() {
        this.ease({
            opacity: 0,
            duration: 500,
            onComplete: () => {
                Main.layoutManager.removeChrome(this);
                this.destroy();
            },
        });
    }
    vfunc_allocate(...args: [Clutter.ActorBox]) {
        const relativeActor = this.params.relativeActor || this.sourceActor;
        let [stageX, stageY] = relativeActor.get_transformed_position();
        let x, y;
        switch (this.params.side) {
            case TooltipSide.LEFT:
                x = stageX! - this.get_width();
                y =
                    stageY! +
                    relativeActor.get_height() / 2 -
                    this.get_height() / 2;
                break;
            case TooltipSide.TOP:
                x =
                    stageX! +
                    relativeActor.get_width() / 2 -
                    this.get_width() / 2;
                y = stageY! - this.get_height();
                break;
            case TooltipSide.RIGHT:
                x = stageX! + relativeActor.get_width();
                y =
                    stageY! +
                    relativeActor.get_height() / 2 -
                    this.get_height() / 2;
                break;
            case TooltipSide.BOTTOM:
                x =
                    stageX! +
                    relativeActor.get_width() / 2 -
                    this.get_width() / 2;
                y = stageY! + relativeActor.get_height();
                break;
        }
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.set_position(
                Math.max(Math.round(x + this.params.offsetX), 0),
                Math.max(Math.round(y + this.params.offsetY), 0)
            );
            return GLib.SOURCE_REMOVE;
        });

        super.vfunc_allocate(...args);
    }
}

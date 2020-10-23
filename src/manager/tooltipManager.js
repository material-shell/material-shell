/** Gnome libs imports */
const { St, GLib, Clutter, GObject, Graphene } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MsManager } = Me.imports.src.manager.msManager;
const { SetAllocation } = Me.imports.src.utils.compatibility;
/* exported TooltipManager */
var TooltipManager = class TooltipManager extends MsManager {
    constructor() {
        super();
    }
    add(actor, params = {}) {
        let actorDestroyed = false;
        actor.set_reactive(true);
        actor.connect('destroy', () => {
            actorDestroyed = true;
        });
        const enterId = actor.connect('enter-event', () => {
            let tooltip;
            let left = false;
            const leaveId = actor.connect('leave-event', () => {
                left = true;
                if (tooltip) {
                    tooltip.remove();
                }
                actor.disconnect(leaveId);
            });
            GLib.timeout_add(GLib.PRIORITY_DEFAULT, 200, () => {
                if (!left) {
                    tooltip = this.createTooltip(actor, params);
                }
                return GLib.SOURCE_REMOVE;
            });
        });
        Me.connect('extension-disable', () => {
            if (!actorDestroyed) {
                actor.disconnect(enterId);
            }
        });
    }

    createTooltip(actor, params) {
        if (!params.text) {
            if (actor instanceof St.Label || actor instanceof Clutter.Text) {
                const clutterText =
                    actor instanceof St.Label
                        ? actor.get_clutter_text()
                        : actor;
                if (clutterText.get_layout().is_ellipsized()) {
                    params.text = clutterText.get_text();
                }
            }
        }
        if (!params.text) {
            return;
        }
        const tooltip = new MatTooltip(actor, params);
        Main.layoutManager.addChrome(tooltip);
        tooltip.show();
        return tooltip;
    }
};

var TooltipSide = {
    LEFT: 0,
    TOP: 1,
    RIGHT: 2,
    BOTTOM: 3,
};

/* exported MatTooltip */
var MatTooltip = GObject.registerClass(
    {
        GTypeName: 'MatTooltip',
    },
    class MatTooltip extends St.Label {
        _init(sourceActor, params = {}) {
            params = Object.assign(
                {
                    text: '',
                    relativeActor: null,
                    offsetX: 0,
                    offsetY: 0,
                    side: TooltipSide.BOTTOM,
                },
                params
            );
            super._init({
                text: params.text,
                opacity: 0,
                scale_x: 0.8,
                scale_y: 0.8,
                pivot_point: new Graphene.Point({ x: 0.5, y: 0.5 }),
                y_align: Clutter.ActorAlign.CENTER,
            });
            this.params = params;
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
                duration: 300,
                onComplete: () => {
                    this.destroy();
                },
            });
        }
        vfunc_allocate(box, flags) {
            const relativeActor = this.params.relativeActor || this.sourceActor;
            let [stageX, stageY] = relativeActor.get_transformed_position();
            let x, y;
            switch (this.params.side) {
                case TooltipSide.LEFT:
                    x = stageX - this.get_width();
                    y =
                        stageY +
                        relativeActor.get_height() / 2 -
                        this.get_height() / 2;
                    break;
                case TooltipSide.TOP:
                    x =
                        stageX +
                        relativeActor.get_width() / 2 -
                        this.get_width() / 2;
                    y = stageY - this.get_height();
                    break;
                case TooltipSide.RIGHT:
                    x = stageX + relativeActor.get_width();
                    y =
                        stageY +
                        relativeActor.get_height() / 2 -
                        this.get_height() / 2;
                    break;
                case TooltipSide.BOTTOM:
                    x =
                        stageX +
                        relativeActor.get_width() / 2 -
                        this.get_width() / 2;
                    y = stageY + relativeActor.get_height();
                    break;
            }

            this.set_position(
                Math.max(Math.round(x + this.params.offsetX), 0),
                Math.max(Math.round(y + this.params.offsetY), 0)
            );
            super.vfunc_allocate(box, flags);
        }
    }
);

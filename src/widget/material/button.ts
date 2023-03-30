/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GObject from 'gobject';
import * as Meta from 'meta';
import { registerGObjectClass } from 'src/utils/gjs';
import {
    compareVersions,
    gnomeVersionNumber,
    parseVersion,
} from 'src/utils/shellVersionMatch';
import { RippleBackground } from 'src/widget/material/rippleBackground';
import * as St from 'st';
import { Widget } from 'st';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const beforeGnome44 =
    compareVersions(gnomeVersionNumber, parseVersion('44.0')) < 0;
interface MatButtonParams extends Partial<Widget.ConstructorProperties> {
    primary?: boolean;
    child?: St.Widget;
}

@registerGObjectClass
export class MatButton extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MatButton',
        Signals: {
            clicked: {
                param_types: [GObject.TYPE_INT],
            },
            // Left Click or Touch
            'primary-action': {},
            // Right Click or Long press
            'secondary-action': {},
            'drag-start': {
                param_types: [Clutter.Event.$gtype],
            },
        },
    };
    rippleBackground: RippleBackground;
    clicked: boolean | undefined;
    private _longPressLater: any;
    child: St.Widget | undefined;

    constructor(params: MatButtonParams) {
        const isPrimary = params.primary;
        const child = params.child;
        const super_params: Partial<Widget.ConstructorProperties> = params;
        delete super_params.child;
        delete super_params.primary;
        Object.assign(super_params, {
            reactive: true,
            track_hover: true,
            clip_to_allocation: true,
        });
        super(super_params);
        this.set_child(child);
        this.rippleBackground = new RippleBackground(this);
        this.add_child(this.rippleBackground);
        this.add_style_class_name('mat-button');
        if (isPrimary) {
            this.add_style_class_name('primary');
        }

        const clickAction = new PropagateClickAction();
        clickAction.connect('clicked', (action) => {
            this.clicked = true;
            const button = action.get_button();
            this.emit('clicked', button);
            if (button === Clutter.BUTTON_PRIMARY || button === 0) {
                this.emit('primary-action');
            }
            if (button === Clutter.BUTTON_SECONDARY) {
                this.emit('secondary-action');
            }
            this.rippleBackground.removeRippleWave();
            return true;
        });
        clickAction.connect('long-press', this._onLongPress.bind(this));

        this.add_action(clickAction);

        this.connect('enter-event', () => {
            Me.msThemeManager.setCursor(Meta.Cursor.POINTING_HAND);
        });
        this.connect('leave-event', () => {
            Me.msThemeManager.setCursor(Meta.Cursor.DEFAULT);
        });
    }

    _onLongPress(
        action: Clutter.ClickAction & { event: Clutter.Event | undefined },
        actor: Clutter.Actor,
        state: Clutter.LongPressState
    ) {
        // Take advantage of the Clutter policy to consider
        // a long-press canceled when the pointer movement
        // exceeds dnd-drag-threshold to manually start the drag
        if (state == Clutter.LongPressState.CANCEL) {
            const event = action.event;
            if (this._longPressLater) return true;

            // A click cancels a long-press before any click handler is
            // run - make sure to not start a drag in that case
            const callback = () => {
                delete this._longPressLater;
                if (this.clicked) {
                    delete this.clicked;
                    return false;
                }
                action.release();
                this.emit('drag-start', event);
                return false;
            };
            this._longPressLater = beforeGnome44
                ? Meta.later_add(Meta.LaterType.BEFORE_REDRAW, callback)
                : global.compositor
                      .get_laters()
                      .add(Meta.LaterType.BEFORE_REDRAW, callback);
        }
        if (state == Clutter.LongPressState.ACTIVATE) {
            this.emit('secondary-action');
        }
        return true;
    }

    /**
     * Just the child width
     */
    override vfunc_get_preferred_width(forHeight: number) {
        if (!this.child) return super.vfunc_get_preferred_width(forHeight);
        return this.child.vfunc_get_preferred_width(forHeight);
    }

    /**
     * Just the child height
     */
    override vfunc_get_preferred_height(forWidth: number) {
        if (!this.child) return super.vfunc_get_preferred_height(forWidth);
        return this.child.vfunc_get_preferred_height(forWidth);
    }

    override vfunc_allocate(box: Clutter.ActorBox) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        if (this.child) {
            this.child.allocate(contentBox);
        }
        if (this.rippleBackground.get_parent()) {
            this.rippleBackground.allocate(contentBox);
        }
    }

    // eslint-disable-next-line camelcase
    set_child(child?: St.Widget) {
        if (this.child) {
            this.remove_child(this.child);
        }
        this.child = child;
        if (child) {
            this.add_child(child);
        }
    }
}

const beforeGnome42 =
    compareVersions(gnomeVersionNumber, parseVersion('42.0')) < 0;
const PropagateClickAction = (() => {
    if (beforeGnome42) {
        @registerGObjectClass
        class PropagateClickActionBefore42 extends Clutter.ClickAction {
            static metaInfo: GObject.MetaInfo = {
                GTypeName: 'PropagateClickAction',
            };
            event: Clutter.Event | undefined;

            vfunc_clicked(actor: Clutter.Actor) {
                this.event = Clutter.get_current_event();
                return super.vfunc_clicked(actor);
            }

            vfunc_long_press(
                actor: Clutter.Actor,
                state: Clutter.LongPressState
            ) {
                this.event = Clutter.get_current_event();
                return super.vfunc_long_press(actor, state);
            }
        }
        return PropagateClickActionBefore42;
    } else {
        @registerGObjectClass
        class PropagateClickActionAfter42 extends Clutter.ClickAction {
            static metaInfo: GObject.MetaInfo = {
                GTypeName: 'PropagateClickAction',
            };
            event: Clutter.Event | undefined;

            vfunc_handle_event(event: Clutter.Event) {
                this.event = event;
                super.vfunc_handle_event(event);
                //Propagate ( propagating has the side effect to not assign global Clutter.get_current_event so we stash it in lastEvent)
                return false;
            }
        }
        return PropagateClickActionAfter42;
    }
})();

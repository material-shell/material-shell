/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GObject from 'gobject';
import * as Meta from 'meta';
import { Allocate, SetAllocation } from 'src/utils/compatibility';
import { registerGObjectClass } from 'src/utils/gjs';
import { RippleBackground } from 'src/widget/material/rippleBackground';
import * as St from 'st';
import { Widget } from 'st';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

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

        const clickAction = new Clutter.ClickAction();
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
            global.display.set_cursor(Meta.Cursor.POINTING_HAND);
        });
        this.connect('leave-event', () => {
            global.display.set_cursor(Meta.Cursor.DEFAULT);
        });
    }

    _onLongPress(
        action: Clutter.ClickAction,
        actor: Clutter.Actor,
        state: Clutter.LongPressState
    ) {
        // Take advantage of the Clutter policy to consider
        // a long-press canceled when the pointer movement
        // exceeds dnd-drag-threshold to manually start the drag
        if (state == Clutter.LongPressState.CANCEL) {
            const event = Clutter.get_current_event();

            if (this._longPressLater) return true;

            // A click cancels a long-press before any click handler is
            // run - make sure to not start a drag in that case
            this._longPressLater = Meta.later_add(
                Meta.LaterType.BEFORE_REDRAW,
                () => {
                    delete this._longPressLater;
                    if (this.clicked) {
                        delete this.clicked;
                        return false;
                    }
                    action.release();
                    this.emit('drag-start', event);
                    return false;
                }
            );
        }
        if (state == Clutter.LongPressState.ACTIVATE) {
            this.emit('secondary-action');
        }
        return true;
    }

    /**
     * Just the child width
     */
    vfunc_get_preferred_width(forHeight: number) {
        if (!this.child) return super.vfunc_get_preferred_width(forHeight);
        return this.child.vfunc_get_preferred_width(forHeight);
    }

    /**
     * Just the child height
     */
    vfunc_get_preferred_height(forWidth: number) {
        if (!this.child) return super.vfunc_get_preferred_height(forWidth);
        return this.child.vfunc_get_preferred_height(forWidth);
    }

    vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        if (this.child) {
            Allocate(this.child, contentBox, flags);
        }
        if (this.rippleBackground.get_parent()) {
            Allocate(this.rippleBackground, contentBox, flags);
        }
    }

    // eslint-disable-next-line camelcase
    set_child(child?: St.Widget) {
        if (!child) return;
        if (this.child) {
            this.remove_child(this.child);
        }
        this.child = child;
        this.add_child(child);
    }
}

/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import St from 'gi://St';
import { registerGObjectClass } from 'src/utils/gjs';
import { RippleBackground } from 'src/widget/material/rippleBackground';

/** Extension imports */
import { default as Me } from 'src/extension';
interface MatButtonParams extends Partial<St.Widget.ConstructorProps> {
    primary?: boolean;
    child?: St.Widget;
}

@registerGObjectClass
export class MatButton extends St.Widget {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'MatButton',
        Signals: {
            clicked: {
                param_types: [GObject.TYPE_INT],
            },
            // Left Click or Touch
            'primary-action': {},
            // Right Click or Long press
            'secondary-action': {},
        },
    };
    rippleBackground: RippleBackground;
    child: St.Widget | undefined;
    /**
     * Exposed so that a container which also makes this button draggable can
     * tell the long press not to cancel the drag, the way the shell's own
     * window previews do.
     */
    longPressGesture: Clutter.LongPressGesture;

    constructor(params: MatButtonParams) {
        const isPrimary = params.primary;
        const child = params.child;
        const super_params = params;
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

        const clickGesture = new Clutter.ClickGesture();
        clickGesture.connect('recognize', () => {
            // A touch press reports button 0.
            const button = clickGesture.get_button();
            this.emit('clicked', button);
            if (button === Clutter.BUTTON_PRIMARY || button === 0) {
                this.emit('primary-action');
            }
            if (button === Clutter.BUTTON_SECONDARY) {
                this.emit('secondary-action');
            }
            this.rippleBackground.removeRippleWave();
        });
        this.add_action(clickGesture);

        this.longPressGesture = new Clutter.LongPressGesture();
        this.longPressGesture.connect('recognize', () => {
            this.emit('secondary-action');
        });
        this.add_action(this.longPressGesture);

        this.connect('enter-event', () => {
            Me.msThemeManager!.setCursor(Clutter.CursorType.POINTER);
        });
        this.connect('leave-event', () => {
            Me.msThemeManager!.setCursor(Clutter.CursorType.DEFAULT);
        });
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

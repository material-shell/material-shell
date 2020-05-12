const { Clutter, GObject, St, Meta } = imports.gi;
const Params = imports.misc.params;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { RippleBackground } = Me.imports.src.widget.material.rippleBackground;
/* exported MatButton */
var MatButton = GObject.registerClass(
    {
        Signals: {
            clicked: {
                param_types: [GObject.TYPE_INT],
            },
        },
    },
    class MatButton extends St.Widget {
        _init(params = {}) {
            const isPrimary = params.primary;
            delete params.primary;
            const child = params.child;
            delete params.child;
            Object.assign(params, {
                reactive: true,
                track_hover: true,
                clip_to_allocation: true,
            });
            super._init(params);
            this.set_child(child);
            this.rippleBackground = new RippleBackground(this);

            this.add_style_class_name('mat-button');
            if (isPrimary) {
                this.add_style_class_name('primary');
            }

            this.connect('event', (actor, event) => {
                let eventType = event.type();
                if (
                    [
                        Clutter.EventType.BUTTON_PRESS,
                        Clutter.EventType.TOUCH_BEGIN,
                    ].indexOf(eventType) > -1
                ) {
                    this.pressed = true;
                } else if (
                    [
                        Clutter.EventType.BUTTON_RELEASE,
                        Clutter.EventType.TOUCH_END,
                    ].indexOf(eventType) > -1
                ) {
                    if (this.pressed) {
                        this.emit('clicked', event.get_button());
                        this.pressed = false;
                    }
                } else if (eventType === Clutter.EventType.LEAVE) {
                    this.pressed = false;
                    global.display.set_cursor(Meta.Cursor.DEFAULT);
                    this.remove_child(this.rippleBackground);
                } else if (eventType === Clutter.EventType.ENTER) {
                    global.display.set_cursor(Meta.Cursor.POINTING_HAND);
                    this.add_child(this.rippleBackground);
                }
            });
        }

        /**
         * Just the child width
         */
        vfunc_get_preferred_width(forHeight) {
            if (!this.child) return super.vfunc_get_preferred_width(forHeight);
            return this.child.vfunc_get_preferred_width(forHeight);
        }

        /**
         * Just the child height
         */
        vfunc_get_preferred_height(forWidth) {
            if (!this.child) return super.vfunc_get_preferred_height(forWidth);
            return this.child.vfunc_get_preferred_height(forWidth);
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            if (this.child) {
                this.child.allocate(contentBox, flags);
            }
            if (this.rippleBackground.get_parent()) {
                this.rippleBackground.allocate(contentBox, flags);
            }
        }

        set_child(child) {
            if (!child) return;
            if (this.child) {
                this.remove_child(this.child);
            }
            this.child = child;
            this.add_child(child);
        }
    }
);

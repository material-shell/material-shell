/** Gnome libs imports */
const { Clutter, GObject, St, Meta } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const { RippleBackground } = Me.imports.src.widget.material.rippleBackground;

/* exported MatButton */
var MatButton = GObject.registerClass(
    {
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
                param_types: [Clutter.Event],
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
            this.add_child(this.rippleBackground);
            this.add_style_class_name('mat-button');
            if (isPrimary) {
                this.add_style_class_name('primary');
            }

            let clickAction = new Clutter.ClickAction();
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

        _onLongPress(action, actor, state) {
            // Take advantage of the Clutter policy to consider
            // a long-press canceled when the pointer movement
            // exceeds dnd-drag-threshold to manually start the drag
            if (state == Clutter.LongPressState.CANCEL) {
                let event = Clutter.get_current_event();

                if (this._longPressLater) return true;

                // A click cancels a long-press before any click handler is
                // run - make sure to not start a drag in that case
                this._longPressLater = Meta.later_add(
                    Meta.LaterType.BEFORE_REDRAW,
                    () => {
                        delete this._longPressLater;
                        if (this.clicked) {
                            delete this.clicked;
                            return;
                        }
                        action.release();
                        this.emit('drag-start', event);
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
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            if (this.child) {
                Allocate(this.child, contentBox, flags);
            }
            if (this.rippleBackground.get_parent()) {
                Allocate(this.rippleBackground, contentBox, flags);
            }
        }

        // eslint-disable-next-line camelcase
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

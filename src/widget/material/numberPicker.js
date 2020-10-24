/** Gnome libs imports */
const { Clutter, GObject, St, Gio } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const { RippleBackground } = Me.imports.src.widget.material.rippleBackground;

/* exported MatNumberPicker */
var MatNumberPicker = GObject.registerClass(
    {
        GTypeName: 'MatNumberPicker',
        Signals: {
            changed: {
                param_types: [GObject.TYPE_INT],
            },
        },
    },
    class MatNumberPicker extends St.BoxLayout {
        _init(value, params) {
            super._init({
                y_align: Clutter.ActorAlign.CENTER,
            });
            this.value = value;
            this.params = Object.assign(
                {
                    step: 1,
                    min: 0,
                    max: 999999,
                },
                params
            );
            this.minIcon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/minus-symbolic.svg`
                ),
            });
            this.minButton = new St.Button({
                child: this.minIcon,
            });
            this.minButton.connect('clicked', () => {
                this.decrement();
            });
            this.plusIcon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/plus-symbolic.svg`
                ),
            });
            this.plusButton = new St.Button({
                child: this.plusIcon,
            });
            this.plusButton.connect('clicked', () => {
                this.increment();
            });
            this.valueLabel = new St.Label({
                text: this.value.toString(),
                y_align: Clutter.ActorAlign.CENTER,
            });
            this.add_child(this.minButton);
            this.add_child(this.valueLabel);
            this.add_child(this.plusButton);
        }
        decrement() {
            this.value = Math.max(
                this.params.min,
                this.value - this.params.step
            );
            this.updateValue();
        }
        increment() {
            this.value = Math.min(
                this.params.max,
                this.value + this.params.step
            );
            this.updateValue();
        }
        updateValue() {
            this.valueLabel.text = this.value.toString();
            this.emit('changed', this.value);
        }
    }
);

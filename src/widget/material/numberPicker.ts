/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GObject from 'gobject';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

export interface NumberPickerParams {
    step: number;
    min: number;
    max: number;
}

@registerGObjectClass
export class MatNumberPicker extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MatNumberPicker',
        Signals: {
            changed: {
                param_types: [GObject.TYPE_INT],
            },
        },
    };

    value: number;
    params: NumberPickerParams;
    minIcon: St.Icon;
    minButton: St.Button<St.Icon>;
    plusIcon: St.Icon;
    plusButton: St.Button<St.Icon>;
    valueLabel: St.Label;

    constructor(value: number, params: Partial<NumberPickerParams>) {
        super({
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
        this.value = Math.max(this.params.min, this.value - this.params.step);
        this.updateValue();
    }
    increment() {
        this.value = Math.min(this.params.max, this.value + this.params.step);
        this.updateValue();
    }
    updateValue() {
        this.valueLabel.text = this.value.toString();
        this.emit('changed', this.value);
    }
}

/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import St from 'gi://St';
import { registerGObjectClass } from 'src/utils/gjs';

/** Extension imports */
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

export interface NumberPickerParams {
    step: number;
    min: number;
    max: number;
}

@registerGObjectClass
export class MatNumberPicker extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
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
    minButton: St.Button;
    plusIcon: St.Icon;
    plusButton: St.Button;
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
                `${Me.metadata.path}/assets/icons/minus-symbolic.svg`
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
                `${Me.metadata.path}/assets/icons/plus-symbolic.svg`
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

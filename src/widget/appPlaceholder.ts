/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import St from 'gi://St';
import * as Animation from 'resource:///org/gnome/shell/ui/animation';
import { registerGObjectClass } from 'src/utils/gjs';
import { RippleBackground } from 'src/widget/material/rippleBackground';
/** Extension imports */
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

@registerGObjectClass
export class AppPlaceholder extends St.Widget {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'AppPlaceholder',
        Signals: {
            activated: {
                param_types: [GObject.TYPE_INT],
                accumulator: 0.0,
            },
        },
    };
    iconContainer = new St.Bin({
        style: 'padding:24px',
    });
    pressed = false;
    waitForReset = false;
    clickableContainer: RippleBackground;
    box: St.BoxLayout;
    identityContainer: St.BoxLayout;
    appTitle: St.Label;
    callToAction: St.Label;
    spinnerContainer: Clutter.Actor;
    vertical = true;
    private _spinner: any;

    constructor(icon: Clutter.Actor, textLabel: string) {
        super({
            x_align: Clutter.ActorAlign.FILL,
            y_align: Clutter.ActorAlign.FILL,
            layout_manager: new Clutter.BinLayout(),
            reactive: true,
        });

        this.iconContainer.set_child(icon);
        this.spinnerContainer = new Clutter.Actor({});
        this.spinnerContainer.set_opacity(0);
        this.appTitle = new St.Label({
            text: textLabel,
            style_class: 'headline-4 text-high-emphasis',
        });

        this.callToAction = new St.Label({
            text: 'Click anywhere to launch',
            style_class: 'headline-5 text-medium-emphasis',
            style: 'margin-top:32px;',
        });

        this.identityContainer = new St.BoxLayout({
            vertical: true,
            x_align: Clutter.ActorAlign.START,
            y_align: Clutter.ActorAlign.CENTER,
            x_expand: true,
            y_expand: true,
            style: 'padding:24px; text-align:start;',
        });

        [this.appTitle, this.callToAction, this.spinnerContainer].forEach(
            (actor) => this.identityContainer.add_child(actor)
        );

        this.box = new St.BoxLayout({
            vertical: false,
            x_align: Clutter.ActorAlign.CENTER,
            y_align: Clutter.ActorAlign.CENTER,
            style: 'padding:48px; border-radius:48px',
        });

        this.box.add_child(this.iconContainer);
        this.box.add_child(this.identityContainer);

        this.add_style_class_name('surface-darker');
        this.add_child(this.box);
        this.clickableContainer = new RippleBackground(this);
        this.clickableContainer.x_expand = true;
        this.clickableContainer.y_expand = true;
        this.add_child(this.clickableContainer);
        this.connect('event', (actor, event) => {
            switch (event.type()) {
                case Clutter.EventType.BUTTON_PRESS:
                case Clutter.EventType.TOUCH_BEGIN:
                    this.pressed = true;
                    break;
                case Clutter.EventType.BUTTON_RELEASE:
                case Clutter.EventType.TOUCH_END:
                    if (this.pressed) this.activate(event.get_button());
                    this.pressed = false;
                    break;
                case Clutter.EventType.LEAVE:
                    this.pressed = false;
                    break;
                default:
                    break;
            }
        });

        this.connect('key-focus-in', () => {
            this.box.add_style_class_name('surface');
        });
        this.connect('key-focus-out', () => {
            this.box.remove_style_class_name('surface');
        });
    }

    setIcon(icon: Clutter.Actor) {
        this.iconContainer.set_child(icon);
    }

    setTitle(title: string) {
        this.appTitle.set_text(title);
    }

    setOrientation(width: number, height: number) {
        const vertical = width < height;
        if (vertical === this.vertical) return;
        this.vertical = vertical;
        this.box.vertical = this.vertical;
        this.identityContainer.x_align = this.vertical
            ? Clutter.ActorAlign.CENTER
            : Clutter.ActorAlign.START;
        this.appTitle.x_align = this.vertical
            ? Clutter.ActorAlign.CENTER
            : Clutter.ActorAlign.START;
        this.callToAction.x_align = this.vertical
            ? Clutter.ActorAlign.CENTER
            : Clutter.ActorAlign.START;
    }

    override vfunc_key_press_event(keyEvent: Clutter.KeyEvent) {
        switch (keyEvent.get_key_symbol()) {
            case Clutter.KEY_Return:
            case Clutter.KEY_KP_Enter:
            case Clutter.KEY_space:
            case Clutter.KEY_KP_Space:
                this.activate(0);
                return Clutter.EVENT_STOP;
        }

        return Clutter.EVENT_PROPAGATE;
    }

    override vfunc_allocate(...args: [Clutter.ActorBox]) {
        const width = args[0].get_width();
        const height = args[0].get_height();
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.setOrientation(width, height);
            return GLib.SOURCE_REMOVE;
        });
        super.vfunc_allocate(...args);
    }

    activate(button = 0) {
        if (this.waitForReset) return;
        this.waitForReset = true;
        this.clickableContainer.reactive = false;
        this._spinner = new Animation.Spinner(16);
        this.spinnerContainer.add_child(this._spinner);
        this._spinner.play();
        this.spinnerContainer.set_opacity(255);
        this.emit('activated', button);
    }

    reset() {
        this.clickableContainer.reactive = true;
        if (this._spinner) {
            this._spinner.destroy();
        }
        this.spinnerContainer.set_opacity(0);
        this.waitForReset = false;
    }
}

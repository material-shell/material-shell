/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import { registerGObjectClass } from 'src/utils/gjs';
import { ShellVersionMatch } from 'src/utils/shellVersionMatch';
import { RippleBackground } from 'src/widget/material/rippleBackground';
import * as St from 'st';
const Animation = imports.ui.animation;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class AppPlaceholder extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'AppPlaceholder',
        Signals: {
            activated: {
                param_types: [GObject.TYPE_INT],
                accumulator: 0.0,
            },
        },
    };
    app: any;
    icon: any;
    pressed = false;
    waitForReset: boolean;
    clickableContainer: RippleBackground;
    box: any;
    identityContainer: any;
    appTitle: any;
    callToAction: any;
    spinnerContainer: any;
    vertical = true;
    private _spinner: any;

    constructor(app) {
        super({
            x_align: Clutter.ActorAlign.CENTER,
            y_align: Clutter.ActorAlign.CENTER,
            layout_manager: new Clutter.BinLayout(),
            reactive: true,
        });
        this.app = app;
        this.icon = this.app.create_icon_texture(248);
        this.icon.set_style('padding:24px');
        this.spinnerContainer = new Clutter.Actor({});
        this.spinnerContainer.set_opacity(0);
        this.appTitle = new St.Label({
            text: app.get_name(),
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

        [
            this.appTitle,
            this.callToAction,
            this.spinnerContainer,
        ].forEach((actor) => this.identityContainer.add_child(actor));

        this.box = new St.BoxLayout({
            vertical: false,
            style: 'padding:48px; border-radius:48px',
        });

        this.box.add_child(this.icon);
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
                    this.activate(event.get_button());
                    this.pressed = false;
                    break;
                case Clutter.EventType.LEAVE:
                    this.pressed = false;
                    break;
                default:
                    break;
            }
        });

        this.connect('key-press-event', (entry, event) => {
            const symbol = event.hardware_keycode;

            switch (symbol) {
                case Clutter.KEY_Return:
                case Clutter.KEY_KP_Enter:
                    this.activate(0);
                    return Clutter.EVENT_STOP;
            }

            return Clutter.EVENT_PROPAGATE;
        });

        this.connect('key-focus-in', () => {
            this.box.add_style_class_name('surface');
        });
        this.connect('key-focus-out', () => {
            this.box.remove_style_class_name('surface');
        });
    }

    setOrientation(width, height) {
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

    vfunc_allocate(...args: [Clutter.ActorBox]) {
        const width = args[0].get_width();
        const height = args[0].get_height();
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.setOrientation(width, height);
            return GLib.SOURCE_REMOVE;
        });
        super.vfunc_allocate(...args);
    }

    activate(button) {
        if (this.waitForReset) return;
        this.waitForReset = true;
        this.clickableContainer.reactive = false;
        this._spinner = new Animation.Spinner(16);
        let spinnerActor;
        if (ShellVersionMatch('3.34')) {
            spinnerActor = this._spinner.actor;
        } else {
            spinnerActor = this._spinner;
        }
        this.spinnerContainer.add_child(spinnerActor);
        this._spinner.play();
        this.spinnerContainer.set_opacity(255);
        this.emit('activated', button);
    }

    reset() {
        this.clickableContainer.reactive = true;
        if (this._spinner) {
            if (ShellVersionMatch('3.34')) {
                this._spinner.actor.destroy();
            } else {
                this._spinner.destroy();
            }
        }
        this.spinnerContainer.set_opacity(0);
        this.waitForReset = false;
    }
}

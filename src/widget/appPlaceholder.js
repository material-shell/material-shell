/** Gnome libs imports */
const { St, GObject, Clutter, GLib } = imports.gi;
const Animation = imports.ui.animation;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { RippleBackground } = Me.imports.src.widget.material.rippleBackground;

/* exported AppPlaceholder */
var AppPlaceholder = GObject.registerClass(
    {
        GTypeName: 'AppPlaceholder',
        Signals: {
            clicked: {
                param_types: [GObject.TYPE_INT],
            },
        },
    },
    class AppPlaceholder extends St.Widget {
        _init(app) {
            super._init({
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
                    if (this.pressed && !this.waitForReset) {
                        this.waitForReset = true;
                        this.activate(event.get_button());
                        this.pressed = false;
                    }
                } else if (eventType === Clutter.EventType.LEAVE) {
                    this.pressed = false;
                }
            });

            this.connect('key-press-event', (entry, event) => {
                let symbol = event.get_key_symbol();

                if (ShellVersionMatch('3.34')) {
                    switch (symbol) {
                        case Clutter.Return:
                        case Clutter.KP_Enter:
                            this.activate(0);
                            return Clutter.EVENT_STOP;
                    }
                } else {
                    switch (symbol) {
                        case Clutter.KEY_Return:
                        case Clutter.KEY_KP_Enter:
                            this.activate(0);
                            return Clutter.EVENT_STOP;
                    }
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
            let vertical = width < height;
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

        vfunc_allocate(...args) {
            const width = args[0].get_width();
            const height = args[0].get_height();
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                this.setOrientation(width, height);
                return GLib.SOURCE_REMOVE;
            });
            super.vfunc_allocate(...args);
        }

        activate(button) {
            this.emit('clicked', button);
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
            delete this.waitForReset;
        }
    }
);

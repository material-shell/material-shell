const { Pango } = imports.gi;

/* exported RectangularClockSubModule */
var RectangularClockSubModule = class RectangularClockSubModule {
    constructor(dateMenu) {
        this.dateMenu = dateMenu;
    }

    enable() {
        this.dateMenu._clock.time_only = true;
        this.dateMenu._clockDisplay.clutter_text.set_single_line_mode(
            false
        );
        this.dateMenu._clockDisplay.clutter_text.set_line_wrap(
            true
        );
        this.dateMenu._clockDisplay.clutter_text.set_line_wrap_mode(
            Pango.WrapMode.WORD_CHAR
        );

        this.dateMenu._clockDisplay.clutter_text.set_ellipsize(
            Pango.EllipsizeMode.NONE
        );

        this.removeDotsFromClock();
        this.connectSignal = this.dateMenu._clock.connect('notify::clock', () => {
            this.removeDotsFromClock();
        });

        this.dateMenu._clockDisplay.height = 38;
        this.dateMenu._clockDisplay.width = 24;
    }

    disable() {
        this.dateMenu._clock.time_only = false;
        this.dateMenu._clockDisplay.clutter_text.set_single_line_mode(
            true
        );
        this.dateMenu._clockDisplay.clutter_text.set_line_wrap(
            false
        );
        this.dateMenu._clockDisplay.clutter_text.set_line_wrap_mode(
            Pango.WrapMode.WORD
        );

        this.dateMenu._clockDisplay.clutter_text.set_ellipsize(
            Pango.EllipsizeMode.END
        );
        this.dateMenu._clockDisplay.height = -1;
        this.dateMenu._clockDisplay.width = -1;

        this.dateMenu._clock.disconnect(this.connectSignal);
        this.dateMenu._clockDisplay.text = this.dateMenu._clock.clock;
    }

    removeDotsFromClock() {
        this.dateMenu._clockDisplay.text = this.dateMenu._clock.clock.replace(
            /∶/g,
            ''
        );
    }
};
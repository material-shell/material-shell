const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported RectangularClockSubModule */
var RectangularClockSubModule = class RectangularClockSubModule {
    constructor(dateMenu) {
        this.dateMenu = dateMenu;

        this.dateMenu._clock.time_only = true;
        this.indicatorPad = (ShellVersionMatch('3.32')
            ? this.dateMenu.actor
            : this.dateMenu
        )
            .get_child_at_index(0)
            .get_child_at_index(0);
        this.indicatorPad.hide();
        this.removeDotsFromClock();
        this.connectSignal = this.dateMenu._clock.connect(
            'notify::clock',
            () => {
                this.removeDotsFromClock();
            }
        );
    }

    destroy() {
        this.dateMenu._clock.time_only = false;
        this.dateMenu._clock.disconnect(this.connectSignal);
        this.dateMenu._clockDisplay.text = this.dateMenu._clock.clock;
        this.indicatorPad.show();
    }

    removeDotsFromClock() {
        // THIS IS NOT A NORMAL DOUBLE DOTS COPY PAST
        let numbers = this.dateMenu._clock.clock.replace(/∶/g, ' ').split(' ');
        if (!numbers[0]) numbers.shift();
        let markup = '';
        numbers.forEach((number, index) => {
            markup += `<span>${number}</span>${
                index === numbers.length - 1 ? '' : '\n'
            }`;
        });
        this.dateMenu._clockDisplay.clutter_text.set_markup(markup);
        //this.dateMenu._clockDisplay.clutter_text.set_line_alignment(1);
    }
};

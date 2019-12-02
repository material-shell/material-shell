const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported RectangularClockSubModule */
var RectangularClockSubModule = class RectangularClockSubModule {
    constructor(dateMenu) {
        this.dateMenu = dateMenu;
    }

    enable() {
        this.dateMenu._clock.time_only = true;
        this.indicatorPad = (ShellVersionMatch('3.32')
            ? this.dateMenu.actor
            : this.dateMenu
        )
            .get_child_at_index(0)
            .get_child_at_index(0);
        this.indicatorPad.hide();

        this.updateDisplay();
        this.connectSignal = this.dateMenu._clock.connect(
            'notify::clock',
            () => {
                this.updateDisplay();
            }
        );
    }

    disable() {
        this.dateMenu._clock.time_only = false;
        this.dateMenu._clock.disconnect(this.connectSignal);
        this.dateMenu._clockDisplay.text = this.dateMenu._clock.clock;
        this.indicatorPad.show();
    }

    /**
     * Format the string representation of the time so it fits into the vertical label
     * 
     * - split the string into an array
     * - create markup using spans to put each section on its own line
     */
    updateDisplay() {
        const sections = this.dateMenu._clock.clock.split(' ');
        if (!sections[0]) sections.shift();

        const markup = sections.map(section => `<span>${section}</span>`).join('\n');

        this.dateMenu._clockDisplay.clutter_text.set_markup(markup);
    }
};

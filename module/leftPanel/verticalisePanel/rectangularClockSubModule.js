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
        this.update();
        this.connectSignal = this.dateMenu._clock.connect(
            'notify::clock',
            () => {
                this.update();
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
     * Format clock display to fit into the vertical panel
     * Place each section of the clock (HH, MM, AM/PM) onto its own line
     * 
     * Deliberately separates HH:MM into distinct sections
     */
    update() {
        let clockSections = this.dateMenu._clock.clock.replace(/∶/g, ' ').split(' ');
        if (!clockSections[0]) clockSections.shift();

        const markup = clockSections.map(section => `<span>${section}</span>`).join('\n');
        this.dateMenu._clockDisplay.clutter_text.set_markup(markup);
        //this.dateMenu._clockDisplay.clutter_text.set_line_alignment(1);
    }
};

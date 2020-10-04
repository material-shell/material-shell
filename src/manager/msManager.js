/** Gnome libs imports */
const Signals = imports.signals;
const { Clutter } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
/* exported MsManager */
var MsManager = class MsManager {
    constructor() {
        this.signals = [];
    }
    observe(subject, property, callback) {
        let signal = {
            from: subject,
            id: subject.connect(property, callback),
        };
        this.signals.push(signal);
        if (subject instanceof Clutter.Actor) {
            subject.connect('destroy', () => {
                this.signals.splice(this.signals.indexOf(signal), 1);
            });
        }
        return () => {
            subject.disconnect(signal.id);
        };
    }

    destroy(subject) {
        this.signals
            .filter((signal) => {
                if (subject) return signal.from === subject;
                else return true;
            })
            .forEach((signal) => {
                if (signal.from) {
                    try {
                        signal.from.disconnect(signal.id);
                        if (subject) {
                            this.signals.splice(
                                this.signals.indexOf(signal),
                                1
                            );
                        }
                    } catch (error) {
                        Me.log(
                            `Failed to disconnect signal ${signal.id} from ${
                                signal.from
                            } ${
                                signal.from.constructor.name
                            } ${signal.from.toString()}  `
                        );
                    }
                }
            });
    }
};
Signals.addSignalMethods(MsManager.prototype);

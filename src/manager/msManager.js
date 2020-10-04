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
            prop: property,
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

    disconnectItem(subject) {
        this.signals
            .filter((signal) => signal.from === subject)
            .forEach((signal) => {
                if (signal.from && signal.id) {
                    log('*** material-shell.msManager | i.prop: ' + signal.prop);
                    try {
                        signal.from.disconnect(signal.id);
                        this.signals.splice(this.signals.indexOf(signal), 1);
                    } catch {
                        log(`Failed to disconnect i.signal ${signal.id}`);
                    }
                }
            });
            log('*** material-shell.msManager | i.length: ' + this.signals.length);
    }

    destroy() {
        this.signals.forEach((signal) => {
            if (signal.from && signal.id) {
                log('*** material-shell.msManager | d.prop: ' + signal.prop);
                try {
                    signal.from.disconnect(signal.id);
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
        log('*** material-shell.msManager | d.length: ' + this.signals.length);
    }
};
Signals.addSignalMethods(MsManager.prototype);

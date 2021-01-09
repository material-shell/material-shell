/** Gnome libs imports */
const Signals = imports.signals;
const { Clutter } = imports.gi;

interface Signal {
    from: any,
    id: number,
}

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
export class MsManager {
    signals: Signal[];

    constructor() {
        this.signals = [];
    }

    observe(subject: any, property: string, callback: (...args: any[])=>void) {
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
    destroy() {
        this.signals.forEach((signal) => {
            if (signal.from) {
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
    }
};
Signals.addSignalMethods(MsManager.prototype);

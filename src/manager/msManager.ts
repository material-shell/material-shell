const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GObject from 'gobject';
import { WithSignals } from 'src/utils/gjs';

export interface Signal {
    from: WithSignals | GObject.Object;
    id: number;
}

export class MsManager extends WithSignals {
    signals: Signal[];

    constructor() {
        super();
        this.signals = [];
    }

    observe(
        subject: WithSignals | GObject.Object,
        property: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: (...args: any[]) => void
    ) {
        const signal = {
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
}

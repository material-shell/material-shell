const Signals = imports.signals;

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
                    log(
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

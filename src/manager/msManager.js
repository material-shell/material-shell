const Signals = imports.signals;

/* exported MsManager */
var MsManager = class MsManager {
    constructor() {
        this.signals = [];
    }
    observe(subject, property, callback) {
        let signal = {
            from: subject,
            id: subject.connect(property, callback)
        };
        this.signals.push(signal);
        return () => {
            subject.disconnect(signal.id);
        };
    }
    destroy() {
        this.signals.forEach(signal => {
            if (signal.from) {
                signal.from.disconnect(signal.id);
            }
        });
    }
};
Signals.addSignalMethods(MsManager.prototype);

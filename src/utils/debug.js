const { GLib } = imports.gi;

const DEBUG = false;
const FOCUS_ONLY = true;
let indent = 0;
var AddLogToFunctions = function (object) {
    if (!DEBUG) return;
    const prototype = Object.getPrototypeOf(object);
    for (let key of Object.getOwnPropertyNames(prototype)) {
        if (key === 'constructor') continue;
        const value = object[key];
        if (typeof value === 'function') {
            object[key] = function () {
                // Before
                log(
                    `${prototype.constructor.name}.${key} (${Array.from(
                        arguments
                    )
                        .map((param) => {
                            try {
                                return param.toString();
                            } catch {}
                        })
                        .join(',')})`
                );
                indent++;
                var result = value.apply(this, arguments); // use .apply() to call it
                // After

                indent--;
                return result;
            }.bind(object);
        }
    }
};

var log = function (...args) {
    if (!DEBUG || FOCUS_ONLY) return;
    let fields = { MESSAGE: `${'  '.repeat(indent)}${args.join(', ')}` };
    let domain = 'Material Shell';

    GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
};

var logFocus = function (...args) {
    if (!DEBUG) return;
    let fields = { MESSAGE: `${'##'.repeat(indent)}${args.join(', ')}` };
    let domain = 'Material Shell';

    GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
};

let doLogTick = false;
/* exported startLogTick */
var startLogTick = function () {
    doLogTick = true;
    logTick();
};

function logTick() {
    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
        if (doLogTick) {
            logTick();
        }
        return GLib.SOURCE_REMOVE;
    });
}
/* exported stopLogTick */
var stopLogTick = function () {
    doLogTick = false;
};

const { GLib } = imports.gi;

const DEBUG = true;
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
                let indentString = '-'.repeat(indent);
                /* for (var i = 0; 0 < indent; i++) {
                        indentString = indentString + '-';
                    } */
                log(
                    `${indentString} START ${key} - ${prototype.constructor.name}`
                );
                indent++;
                var result = value.apply(this, arguments); // use .apply() to call it
                // After
                log(
                    `${indentString} END ${key} - ${prototype.constructor.name}`
                );
                indent--;
                return result;
            }.bind(object);
        }
    }
};

let doLogTick = false;
/* exported startLogTick */
var startLogTick = function () {
    doLogTick = true;
    logTick();
};

function logTick() {
    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
        log('IDLE_ADD');
        log('tick');
        if (doLogTick) {
            logTick();
        }
    });
}
/* exported stopLogTick */
var stopLogTick = function () {
    doLogTick = false;
};

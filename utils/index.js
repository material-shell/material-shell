const { GLib } = imports.gi;

/* exported range */
var range = to =>
    // Returns a list containing all integers from 0 to `to`
    Array(to)
        .fill()
        .map((_, i) => i);

/* exported debounce */
var debounce = (fun, delay) => {
    // Only calls once fun after no calls for more than delay
    let timeout = null;
    let debouncedArgs = [];
    return function(...args) {
        debouncedArgs.push(args);
        const context = this;
        if (timeout) {
            GLib.source_remove(timeout);
        }
        timeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
            fun._debouncedArgs = debouncedArgs;
            fun.apply(context, args);
            delete fun._debouncedArgs;
            timeout = null;
            debouncedArgs = [];
            return GLib.SOURCE_REMOVE;
        });
    };
};

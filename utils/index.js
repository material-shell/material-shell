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
    return function(...args) {
        const context = this;
        if (timeout) {
            GLib.source_remove(timeout);
        }
        timeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
            fun.apply(context, args);
            timeout = null;
            return GLib.SOURCE_REMOVE;
        });
    };
};

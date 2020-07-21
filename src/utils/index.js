/** Gnome libs imports */
const { GLib } = imports.gi;
const Main = imports.ui.main;

/* exported range */
var range = (to) =>
    // Returns a list containing all integers from 0 to `to`
    Array(to)
        .fill()
        .map((_, i) => i);

/* exported debounce */
var debounce = (fun, delay) => {
    // Only calls once fun after no calls for more than delay
    let timeout = null;
    let debouncedArgs = [];
    return function (...args) {
        debouncedArgs.push(args);
        const context = this;
        if (timeout) {
            GLib.source_remove(timeout);
        }
        timeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
            fun.apply(context, [...args, debouncedArgs]);
            timeout = null;
            debouncedArgs = [];
            return GLib.SOURCE_REMOVE;
        });
    };
};

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
var throttle = (func, wait, options) => {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                GLib.source_remove(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, remaining, later);
        }
        return result;
    };
};

var reparentActor = (actor, parent) => {
    if (!actor || !parent) return;
    const isFocused = actor.has_key_focus();
    const currentParent = actor.get_parent();
    if (isFocused) {
        Main.layoutManager.uiGroup.grab_key_focus();
    }
    if (currentParent) {
        currentParent.remove_child(actor);
    }
    parent.add_child(actor);
    if (isFocused) {
        actor.grab_key_focus();
    }
};

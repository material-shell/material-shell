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

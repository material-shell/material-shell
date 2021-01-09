/** Gnome libs imports */
const { PACKAGE_VERSION } = imports.misc.config;

/* exported ShellVersionMatch, SetAllocation, Allocate, AllocatePreferredSize */
export var ShellVersionMatch = function (version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
};

export var SetAllocation = function (actor, box, flags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        actor.set_allocation(box, flags);
    } else {
        actor.set_allocation(box);
    }
};

export var Allocate = function (actor, box, flags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        actor.allocate(box, flags);
    } else {
        actor.allocate(box);
    }
};

export var AllocatePreferredSize = function (actor, flags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        actor.allocate_preferred_size(flags);
    } else {
        actor.allocate_preferred_size(actor.x, actor.y);
    }
};

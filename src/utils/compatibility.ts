/** Gnome libs imports */
const { PACKAGE_VERSION } = imports.misc.config;
import * as Clutter from 'Clutter';

/* exported ShellVersionMatch, SetAllocation, Allocate, AllocatePreferredSize */
export var ShellVersionMatch = function (version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
};

export var SetAllocation = function (actor: Clutter.Actor, box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        let compat = actor as unknown as { set_allocation: (box: Clutter.ActorBox, flags: Clutter.AllocationFlags)=>void };
        compat.set_allocation(box, flags!);
    } else {
        actor.set_allocation(box);
    }
};

export var Allocate = function (actor: Clutter.Actor, box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        let compat = actor as unknown as { allocate: (box: Clutter.ActorBox, flags: Clutter.AllocationFlags)=>void };
        compat.allocate(box, flags!);
    } else {
        actor.allocate(box);
    }
};

export var AllocatePreferredSize = function (actor: Clutter.Actor, flags?: Clutter.AllocationFlags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        let compat = actor as unknown as { allocate_preferred_size: (flags: Clutter.AllocationFlags)=>void };
        compat.allocate_preferred_size(flags!);
    } else {
        actor.allocate_preferred_size(actor.x, actor.y);
    }
};

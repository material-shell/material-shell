/** Gnome libs imports */
const { PACKAGE_VERSION } = imports.misc.config;
import * as Clutter from 'clutter';

/* exported ShellVersionMatch, SetAllocation, Allocate, AllocatePreferredSize */
export var ShellVersionMatch = function (version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
};

export function polyfillClutter() {
    let OldClutter = Clutter as any;
    if (!OldClutter.hasOwnProperty("KEY_Down")) OldClutter.KEY_Down = OldClutter.Down;
    if (!OldClutter.hasOwnProperty("KEY_Right")) OldClutter.KEY_Right = OldClutter.Right;
    if (!OldClutter.hasOwnProperty("KEY_Left")) OldClutter.KEY_Left = OldClutter.Left;
    if (!OldClutter.hasOwnProperty("KEY_Up")) OldClutter.KEY_Up = OldClutter.Up;
    if (!OldClutter.hasOwnProperty("KEY_Escape")) OldClutter.KEY_Escape = OldClutter.Escape;
    if (!OldClutter.hasOwnProperty("KEY_ISO_Left_Tab")) OldClutter.KEY_ISO_Left_Tab = OldClutter.ISO_Left_Tab;
    if (!OldClutter.hasOwnProperty("KEY_KP_Enter")) OldClutter.KEY_KP_Enter = OldClutter.KP_Enter;
    if (!OldClutter.hasOwnProperty("KEY_Return")) OldClutter.KEY_Return = OldClutter.Return;
    if (!OldClutter.hasOwnProperty("KEY_Tab")) OldClutter.KEY_Tab = OldClutter.Tab;
}

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

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GLib from 'glib';
import { main as Main } from 'ui';
import { assert } from './assert';
import { Async } from './async';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported range, debounce, throttle, reparentActor */
export const range = (to: any) =>
    // Returns a list containing all integers from 0 to `to`
    Array(to)
        .fill(0)
        .map((_, i) => i);

// This signature cannot be specified in TypeScript, but it's ok because it wasn't used anyway
// export const debounce = function<T extends any[]>(fun: (...args: T, debounced_args: T[])=>void, delay: number) {
//     // Only calls once fun after no calls for more than delay
//     let timeout: number | null = null;
//     let debouncedArgs: T[] = [];
//     return function (...args: T) {
//         debouncedArgs.push(args);
//         const context: any = this;
//         if (timeout !== null) {
//             GLib.source_remove(timeout);
//         }
//         timeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
//             fun.apply(context, [...args, debouncedArgs]);
//             timeout = null;
//             debouncedArgs = [];
//             return GLib.SOURCE_REMOVE;
//         });
//     };
// };

interface TrottleParams {
    trailing: boolean;
    leading: boolean;
}

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
export function throttle<T extends any[], R, C>(
    this: C,
    func: (...args: T) => R,
    wait: number,
    options?: Partial<TrottleParams>
): (...args: T) => R {
    let call: { context: C; args: T } | null;
    let result: R;
    let timeout: number | null = null;
    let previous = 0;
    const definedOptions: TrottleParams = Object.assign(
        {
            trailing: true,
            leading: true,
        },
        options
    );

    const later = function () {
        previous = definedOptions.leading === false ? 0 : Date.now();
        timeout = null;
        assert(call !== null, 'unreachable');
        result = func.apply(call.context, call.args);
        if (!timeout) call = null;
        return false;
    };
    return function (this: C, ...params: T) {
        const now = Date.now();
        if (!previous && definedOptions.leading === false) previous = now;
        const remaining = wait - (now - previous);
        call = { context: this, args: params };
        if (remaining <= 0 || remaining > wait) {
            if (timeout !== null) {
                Async.clearTimeoutId(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(call.context, call.args);
            if (!timeout) call = null;
        } else if (!timeout && definedOptions.trailing !== false) {
            timeout = Async.addTimeout(GLib.PRIORITY_DEFAULT, remaining, later);
        }
        return result;
    };
}

export const isParentOfActor = (
    parent: Clutter.Actor | null,
    actor: Clutter.Actor
) => {
    if (!parent) {
        return false;
    }
    let parentOfActor: Clutter.Actor | null = actor;

    while (parentOfActor !== null) {
        if (parentOfActor === parent) return true;
        parentOfActor = parentOfActor.get_parent();
    }
    return false;
};

export const reparentActor = (
    actor: Clutter.Actor | null,
    parent: Clutter.Actor | null,
    first = false
) => {
    if (!actor || !parent || actor.get_parent() == parent) return;
    Me.reparentInProgress = true;
    const restoreFocusTo = actor.has_key_focus()
        ? actor
        : isParentOfActor(actor, global.stage.key_focus)
        ? global.stage.key_focus
        : null;

    const currentParent = actor.get_parent();
    if (restoreFocusTo) {
        Main.layoutManager.uiGroup.grab_key_focus();
    }
    if (currentParent) {
        currentParent.remove_child(actor);
    }
    if (first) {
        parent.insert_child_at_index(actor, 0);
    } else {
        parent.add_child(actor);
    }
    if (restoreFocusTo) {
        restoreFocusTo.grab_key_focus();
    }
    Me.reparentInProgress = false;
};

export const InfinityTo0 = (number: number) => {
    return Math.abs(number) === Infinity ? 0 : number;
};

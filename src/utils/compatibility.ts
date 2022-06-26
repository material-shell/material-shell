/** Gnome libs imports */
import * as Clutter from 'clutter';
import { ShellVersionMatch } from 'src/utils/shellVersionMatch';

const GNOME_3_34 = ShellVersionMatch('3.34');
const GNOME_3_36 = ShellVersionMatch('3.36');
const GNOME_3_34_TO_36 = GNOME_3_34 || GNOME_3_36;

/* exported polyfillClutter, SetAllocation, Allocate, AllocatePreferredSize */
export function polyfillClutter() {
    const OldClutter = Clutter as any;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Down'))
        OldClutter.KEY_Down = OldClutter.Down;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Right'))
        OldClutter.KEY_Right = OldClutter.Right;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Left'))
        OldClutter.KEY_Left = OldClutter.Left;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Up'))
        OldClutter.KEY_Up = OldClutter.Up;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Escape'))
        OldClutter.KEY_Escape = OldClutter.Escape;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_ISO_Left_Tab'))
        OldClutter.KEY_ISO_Left_Tab = OldClutter.ISO_Left_Tab;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_KP_Enter'))
        OldClutter.KEY_KP_Enter = OldClutter.KP_Enter;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Return'))
        OldClutter.KEY_Return = OldClutter.Return;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Tab'))
        OldClutter.KEY_Tab = OldClutter.Tab;
}

export function SetAllocation(
    actor: Clutter.Actor,
    box: Clutter.ActorBox,
    flags?: Clutter.AllocationFlags
) {
    if (GNOME_3_34_TO_36) {
        const compat = actor as unknown as {
            set_allocation: (
                box: Clutter.ActorBox,
                flags: Clutter.AllocationFlags
            ) => void;
        };
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        compat.set_allocation(box, flags!);
    } else {
        actor.set_allocation(box);
    }
}

export function Allocate(
    actor: Clutter.Actor,
    box: Clutter.ActorBox,
    flags?: Clutter.AllocationFlags
) {
    if (GNOME_3_34_TO_36) {
        const compat = actor as unknown as {
            allocate: (
                box: Clutter.ActorBox,
                flags: Clutter.AllocationFlags
            ) => void;
        };
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        compat.allocate(box, flags!);
    } else {
        actor.allocate(box);
    }
}

export function AllocatePreferredSize(
    actor: Clutter.Actor,
    flags?: Clutter.AllocationFlags
) {
    if (GNOME_3_34_TO_36) {
        const compat = actor as unknown as {
            allocate_preferred_size: (flags: Clutter.AllocationFlags) => void;
        };
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        compat.allocate_preferred_size(flags!);
    } else {
        actor.allocate_preferred_size(actor.x, actor.y);
    }
}

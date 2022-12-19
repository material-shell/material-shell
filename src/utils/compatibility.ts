/** Gnome libs imports */
import * as Clutter from 'clutter';

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

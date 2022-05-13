/**
 * xlib 2.0
 *
 * Generated from 2.0
 */

import * as GObject from "@gi-types/gobject";

export function open_display(): void;

export class Display {
    static $gtype: GObject.GType<Display>;

    constructor(copy: Display);
}

export class Screen {
    static $gtype: GObject.GType<Screen>;

    constructor(copy: Screen);
}

export class Visual {
    static $gtype: GObject.GType<Visual>;

    constructor(copy: Visual);
}

export class XConfigureEvent {
    static $gtype: GObject.GType<XConfigureEvent>;

    constructor(copy: XConfigureEvent);
}

export class XImage {
    static $gtype: GObject.GType<XImage>;

    constructor(copy: XImage);
}

export class XFontStruct {
    static $gtype: GObject.GType<XFontStruct>;

    constructor(copy: XFontStruct);
}

export class XTrapezoid {
    static $gtype: GObject.GType<XTrapezoid>;

    constructor(copy: XTrapezoid);
}

export class XVisualInfo {
    static $gtype: GObject.GType<XVisualInfo>;

    constructor(copy: XVisualInfo);
}

export class XWindowAttributes {
    static $gtype: GObject.GType<XWindowAttributes>;

    constructor(copy: XWindowAttributes);
}

export class XEvent {
    static $gtype: GObject.GType<XEvent>;

    constructor(copy: XEvent);
}
export type Atom = number;
export type Colormap = number;
export type Cursor = number;
export type Drawable = number;
export type GC = any;
export type KeyCode = number;
export type KeySym = number;
export type Picture = number;
export type Time = number;
export type VisualID = number;
export type Window = number;
export type XID = number;
export type Pixmap = number;

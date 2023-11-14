/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './xlib-2.0-import.d.ts';
/**
 * xlib-2.0
 */

import type GObject from './gobject-2.0.js';

export namespace xlib {
    function open_display(): void;
    interface Display {}

    class Display {
        // Own properties of xlib-2.0.xlib.Display

        static name: string;
    }

    interface Screen {}

    class Screen {
        // Own properties of xlib-2.0.xlib.Screen

        static name: string;
    }

    interface Visual {}

    class Visual {
        // Own properties of xlib-2.0.xlib.Visual

        static name: string;
    }

    interface XConfigureEvent {}

    class XConfigureEvent {
        // Own properties of xlib-2.0.xlib.XConfigureEvent

        static name: string;
    }

    interface XImage {}

    class XImage {
        // Own properties of xlib-2.0.xlib.XImage

        static name: string;
    }

    interface XFontStruct {}

    class XFontStruct {
        // Own properties of xlib-2.0.xlib.XFontStruct

        static name: string;
    }

    interface XTrapezoid {}

    class XTrapezoid {
        // Own properties of xlib-2.0.xlib.XTrapezoid

        static name: string;
    }

    interface XVisualInfo {}

    class XVisualInfo {
        // Own properties of xlib-2.0.xlib.XVisualInfo

        static name: string;
    }

    interface XWindowAttributes {}

    class XWindowAttributes {
        // Own properties of xlib-2.0.xlib.XWindowAttributes

        static name: string;
    }

    interface XEvent {}

    class XEvent {
        // Own properties of xlib-2.0.xlib.XEvent

        static name: string;
    }

    type Atom = number;
    type Colormap = number;
    type Cursor = number;
    type Drawable = number;
    type GC = any;
    type KeyCode = number;
    type KeySym = number;
    type Picture = number;
    type Time = number;
    type VisualID = number;
    type Window = number;
    type XID = number;
    type Pixmap = number;
    /**
     * Name of the imported GIR library
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default xlib;
// END

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gdesktopenums-3.0-import.d.ts';
/**
 * GDesktopEnums-3.0
 */

import type GObject from './gobject-2.0.js';

export namespace GDesktopEnums {
    enum BackgroundShading {
        SOLID,
        VERTICAL,
        HORIZONTAL,
    }
    enum BackgroundStyle {
        NONE,
        WALLPAPER,
        CENTERED,
        SCALED,
        STRETCHED,
        ZOOM,
        SPANNED,
    }
    enum ClockFormat {
        TODO_24H,
        TODO_12H,
    }
    enum ColorScheme {
        DEFAULT,
        PREFER_DARK,
        PREFER_LIGHT,
    }
    enum DeviceSendEvents {
        ENABLED,
        DISABLED,
        DISABLED_ON_EXTERNAL_MOUSE,
    }
    enum FocusMode {
        CLICK,
        SLOPPY,
        MOUSE,
    }
    enum FocusNewWindows {
        SMART,
        STRICT,
    }
    enum FontAntialiasingMode {
        NONE,
        GRAYSCALE,
        RGBA,
    }
    enum FontHinting {
        NONE,
        SLIGHT,
        MEDIUM,
        FULL,
    }
    enum FontRgbaOrder {
        RGBA,
        RGB,
        BGR,
        VRGB,
        VBGR,
    }
    enum LocationAccuracyLevel {
        COUNTRY,
        CITY,
        NEIGHBORHOOD,
        STREET,
        EXACT,
    }
    enum MagnifierCaretTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }
    enum MagnifierFocusTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }
    enum MagnifierMouseTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }
    enum MagnifierScreenPosition {
        NONE,
        FULL_SCREEN,
        TOP_HALF,
        BOTTOM_HALF,
        LEFT_HALF,
        RIGHT_HALF,
    }
    enum MouseDwellDirection {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }
    enum MouseDwellMode {
        WINDOW,
        GESTURE,
    }
    enum PadButtonAction {
        NONE,
        HELP,
        SWITCH_MONITOR,
        KEYBINDING,
    }
    enum PointerAccelProfile {
        DEFAULT,
        FLAT,
        ADAPTIVE,
    }
    enum PointingStickScrollMethod {
        DEFAULT,
        NONE,
        ON_BUTTON_DOWN,
    }
    enum ProxyMode {
        NONE,
        MANUAL,
        AUTO,
    }
    enum ScreensaverMode {
        BLANK_ONLY,
        RANDOM,
        SINGLE,
    }
    enum StylusButtonAction {
        DEFAULT,
        MIDDLE,
        RIGHT,
        BACK,
        FORWARD,
    }
    enum TabletMapping {
        ABSOLUTE,
        RELATIVE,
    }
    enum TitlebarAction {
        TOGGLE_SHADE,
        TOGGLE_MAXIMIZE,
        TOGGLE_MAXIMIZE_HORIZONTALLY,
        TOGGLE_MAXIMIZE_VERTICALLY,
        MINIMIZE,
        NONE,
        LOWER,
        MENU,
    }
    enum ToolbarIconSize {
        SMALL,
        LARGE,
    }
    enum ToolbarStyle {
        BOTH,
        BOTH_HORIZ,
        ICONS,
        TEXT,
    }
    enum TouchpadClickMethod {
        DEFAULT,
        NONE,
        AREAS,
        FINGERS,
    }
    enum TouchpadHandedness {
        RIGHT,
        LEFT,
        MOUSE,
    }
    enum TouchpadTapButtonMap {
        DEFAULT,
        LRM,
        LMR,
    }
    enum UsbProtection {
        LOCKSCREEN,
        ALWAYS,
    }
    enum VisualBellType {
        FULLSCREEN_FLASH,
        FRAME_FLASH,
    }
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

export default GDesktopEnums;
// END

/**
 * GDesktopEnums 3.0
 *
 * Generated from 3.0
 */

import * as GObject from "@gi-types/gobject";

export namespace BackgroundShading {
    export const $gtype: GObject.GType<BackgroundShading>;
}

export enum BackgroundShading {
    SOLID = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
}

export namespace BackgroundStyle {
    export const $gtype: GObject.GType<BackgroundStyle>;
}

export enum BackgroundStyle {
    NONE = 0,
    WALLPAPER = 1,
    CENTERED = 2,
    SCALED = 3,
    STRETCHED = 4,
    ZOOM = 5,
    SPANNED = 6,
}

export namespace ClockFormat {
    export const $gtype: GObject.GType<ClockFormat>;
}

export enum ClockFormat {
    "24H" = 0,
    "12H" = 1,
}

export namespace DeviceSendEvents {
    export const $gtype: GObject.GType<DeviceSendEvents>;
}

export enum DeviceSendEvents {
    ENABLED = 0,
    DISABLED = 1,
    DISABLED_ON_EXTERNAL_MOUSE = 2,
}

export namespace FocusMode {
    export const $gtype: GObject.GType<FocusMode>;
}

export enum FocusMode {
    CLICK = 0,
    SLOPPY = 1,
    MOUSE = 2,
}

export namespace FocusNewWindows {
    export const $gtype: GObject.GType<FocusNewWindows>;
}

export enum FocusNewWindows {
    SMART = 0,
    STRICT = 1,
}

export namespace LocationAccuracyLevel {
    export const $gtype: GObject.GType<LocationAccuracyLevel>;
}

export enum LocationAccuracyLevel {
    COUNTRY = 0,
    CITY = 1,
    NEIGHBORHOOD = 2,
    STREET = 3,
    EXACT = 4,
}

export namespace MagnifierCaretTrackingMode {
    export const $gtype: GObject.GType<MagnifierCaretTrackingMode>;
}

export enum MagnifierCaretTrackingMode {
    NONE = 0,
    CENTERED = 1,
    PROPORTIONAL = 2,
    PUSH = 3,
}

export namespace MagnifierFocusTrackingMode {
    export const $gtype: GObject.GType<MagnifierFocusTrackingMode>;
}

export enum MagnifierFocusTrackingMode {
    NONE = 0,
    CENTERED = 1,
    PROPORTIONAL = 2,
    PUSH = 3,
}

export namespace MagnifierMouseTrackingMode {
    export const $gtype: GObject.GType<MagnifierMouseTrackingMode>;
}

export enum MagnifierMouseTrackingMode {
    NONE = 0,
    CENTERED = 1,
    PROPORTIONAL = 2,
    PUSH = 3,
}

export namespace MagnifierScreenPosition {
    export const $gtype: GObject.GType<MagnifierScreenPosition>;
}

export enum MagnifierScreenPosition {
    NONE = 0,
    FULL_SCREEN = 1,
    TOP_HALF = 2,
    BOTTOM_HALF = 3,
    LEFT_HALF = 4,
    RIGHT_HALF = 5,
}

export namespace MouseDwellDirection {
    export const $gtype: GObject.GType<MouseDwellDirection>;
}

export enum MouseDwellDirection {
    LEFT = 0,
    RIGHT = 1,
    UP = 2,
    DOWN = 3,
}

export namespace MouseDwellMode {
    export const $gtype: GObject.GType<MouseDwellMode>;
}

export enum MouseDwellMode {
    WINDOW = 0,
    GESTURE = 1,
}

export namespace PadButtonAction {
    export const $gtype: GObject.GType<PadButtonAction>;
}

export enum PadButtonAction {
    NONE = 0,
    HELP = 1,
    SWITCH_MONITOR = 2,
    KEYBINDING = 3,
}

export namespace PointerAccelProfile {
    export const $gtype: GObject.GType<PointerAccelProfile>;
}

export enum PointerAccelProfile {
    DEFAULT = 0,
    FLAT = 1,
    ADAPTIVE = 2,
}

export namespace ProxyMode {
    export const $gtype: GObject.GType<ProxyMode>;
}

export enum ProxyMode {
    NONE = 0,
    MANUAL = 1,
    AUTO = 2,
}

export namespace ScreensaverMode {
    export const $gtype: GObject.GType<ScreensaverMode>;
}

export enum ScreensaverMode {
    BLANK_ONLY = 0,
    RANDOM = 1,
    SINGLE = 2,
}

export namespace StylusButtonAction {
    export const $gtype: GObject.GType<StylusButtonAction>;
}

export enum StylusButtonAction {
    DEFAULT = 0,
    MIDDLE = 1,
    RIGHT = 2,
    BACK = 3,
    FORWARD = 4,
}

export namespace TabletMapping {
    export const $gtype: GObject.GType<TabletMapping>;
}

export enum TabletMapping {
    ABSOLUTE = 0,
    RELATIVE = 1,
}

export namespace TitlebarAction {
    export const $gtype: GObject.GType<TitlebarAction>;
}

export enum TitlebarAction {
    TOGGLE_SHADE = 0,
    TOGGLE_MAXIMIZE = 1,
    TOGGLE_MAXIMIZE_HORIZONTALLY = 2,
    TOGGLE_MAXIMIZE_VERTICALLY = 3,
    MINIMIZE = 4,
    NONE = 5,
    LOWER = 6,
    MENU = 7,
}

export namespace ToolbarIconSize {
    export const $gtype: GObject.GType<ToolbarIconSize>;
}

export enum ToolbarIconSize {
    SMALL = 0,
    LARGE = 1,
}

export namespace ToolbarStyle {
    export const $gtype: GObject.GType<ToolbarStyle>;
}

export enum ToolbarStyle {
    BOTH = 0,
    BOTH_HORIZ = 1,
    ICONS = 2,
    TEXT = 3,
}

export namespace TouchpadClickMethod {
    export const $gtype: GObject.GType<TouchpadClickMethod>;
}

export enum TouchpadClickMethod {
    DEFAULT = 0,
    NONE = 1,
    AREAS = 2,
    FINGERS = 3,
}

export namespace TouchpadHandedness {
    export const $gtype: GObject.GType<TouchpadHandedness>;
}

export enum TouchpadHandedness {
    RIGHT = 0,
    LEFT = 1,
    MOUSE = 2,
}

export namespace TouchpadTapButtonMap {
    export const $gtype: GObject.GType<TouchpadTapButtonMap>;
}

export enum TouchpadTapButtonMap {
    DEFAULT = 0,
    LRM = 1,
    LMR = 2,
}

export namespace UsbProtection {
    export const $gtype: GObject.GType<UsbProtection>;
}

export enum UsbProtection {
    LOCKSCREEN = 0,
    ALWAYS = 1,
}

export namespace VisualBellType {
    export const $gtype: GObject.GType<VisualBellType>;
}

export enum VisualBellType {
    FULLSCREEN_FLASH = 0,
    FRAME_FLASH = 1,
}

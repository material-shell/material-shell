/**
 * Meta 7
 *
 * Generated from 3.38.3
 */

import * as Atk from '@gi-types/atk';
import * as cairo from '@gi-types/cairo';
import * as Clutter from '@gi-types/clutter';
import * as Cogl from '@gi-types/cogl';
import * as GDesktopEnums from '@gi-types/gdesktopenums';
import * as Gio from '@gi-types/gio';
import * as GLib from '@gi-types/glib';
import * as GObject from '@gi-types/gobject';
import * as Gtk from '@gi-types/gtk';
import * as Json from '@gi-types/json';
import * as Pango from '@gi-types/pango';
import * as xlib from '@gi-types/xlib';

export const CURRENT_TIME: number;
export const DEFAULT_ICON_NAME: string;
export const ICON_HEIGHT: number;
export const ICON_WIDTH: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINI_ICON_HEIGHT: number;
export const MINI_ICON_WIDTH: number;
export const MINOR_VERSION: number;
export const PLUGIN_API_VERSION: number;
export const PRIORITY_BEFORE_REDRAW: number;
export const PRIORITY_PREFS_NOTIFY: number;
export const PRIORITY_REDRAW: number;
export const PRIORITY_RESIZE: number;
export const VIRTUAL_CORE_KEYBOARD_ID: number;
export const VIRTUAL_CORE_POINTER_ID: number;
export function activate_session(): boolean;
export function add_clutter_debug_flags(
    debug_flags: Clutter.DebugFlag,
    draw_flags: Clutter.DrawDebugFlag,
    pick_flags: Clutter.PickDebugFlag
): void;
export function add_debug_paint_flag(flag: DebugPaintFlag): void;
export function add_verbose_topic(topic: DebugTopic): void;
export function clutter_init(): void;
export function disable_unredirect_for_display(display: Display): void;
export function enable_unredirect_for_display(display: Display): void;
export function exit(code: ExitCode): void;
export function external_binding_name_for_action(
    keybinding_action: number
): string;
export function focus_stage_window(display: Display, timestamp: number): void;
export function frame_type_to_string(type: FrameType): string;
export function g_utf8_strndup(src: string, n: number): string;
export function get_backend(): Backend;
export function get_debug_paint_flags(): DebugPaintFlag;
export function get_feedback_group_for_display(display: Display): Clutter.Actor;
export function get_locale_direction(): LocaleDirection;
export function get_replace_current_wm(): boolean;
export function get_stage_for_display(display: Display): Clutter.Actor;
export function get_top_window_group_for_display(
    display: Display
): Clutter.Actor;
export function get_window_actors(display: Display): Clutter.Actor[];
export function get_window_group_for_display(display: Display): Clutter.Actor;
export function gravity_to_string(gravity: Gravity): string;
export function is_debugging(): boolean;
export function is_restart(): boolean;
export function is_syncing(): boolean;
export function is_verbose(): boolean;
export function is_wayland_compositor(): boolean;
export function keybindings_set_custom_handler(
    name: string,
    handler?: KeyHandlerFunc | null
): boolean;
export function later_add(when: LaterType, func: GLib.SourceFunc): number;
export function later_remove(later_id: number): void;
export function pop_no_msg_prefix(): void;
export function preference_to_string(pref: Preference): string;
export function prefs_bell_is_audible(): boolean;
export function prefs_change_workspace_name(i: number, name: string): void;
export function prefs_get_action_double_click_titlebar(): GDesktopEnums.TitlebarAction;
export function prefs_get_action_middle_click_titlebar(): GDesktopEnums.TitlebarAction;
export function prefs_get_action_right_click_titlebar(): GDesktopEnums.TitlebarAction;
export function prefs_get_attach_modal_dialogs(): boolean;
export function prefs_get_auto_maximize(): boolean;
export function prefs_get_auto_raise(): boolean;
export function prefs_get_auto_raise_delay(): number;
export function prefs_get_button_layout(): ButtonLayout;
export function prefs_get_center_new_windows(): boolean;
export function prefs_get_check_alive_timeout(): number;
export function prefs_get_compositing_manager(): boolean;
export function prefs_get_cursor_size(): number;
export function prefs_get_cursor_theme(): string;
export function prefs_get_disable_workarounds(): boolean;
export function prefs_get_drag_threshold(): number;
export function prefs_get_draggable_border_width(): number;
export function prefs_get_dynamic_workspaces(): boolean;
export function prefs_get_edge_tiling(): boolean;
export function prefs_get_focus_change_on_pointer_rest(): boolean;
export function prefs_get_focus_mode(): GDesktopEnums.FocusMode;
export function prefs_get_focus_new_windows(): GDesktopEnums.FocusNewWindows;
export function prefs_get_force_fullscreen(): boolean;
export function prefs_get_gnome_accessibility(): boolean;
export function prefs_get_gnome_animations(): boolean;
export function prefs_get_keybinding_action(name: string): KeyBindingAction;
export function prefs_get_mouse_button_menu(): number;
export function prefs_get_mouse_button_mods(): VirtualModifier;
export function prefs_get_mouse_button_resize(): number;
export function prefs_get_num_workspaces(): number;
export function prefs_get_raise_on_click(): boolean;
export function prefs_get_show_fallback_app_menu(): boolean;
export function prefs_get_titlebar_font(): Pango.FontDescription;
export function prefs_get_visual_bell(): boolean;
export function prefs_get_visual_bell_type(): GDesktopEnums.VisualBellType;
export function prefs_get_workspace_name(i: number): string;
export function prefs_get_workspaces_only_on_primary(): boolean;
export function prefs_init(): void;
export function prefs_set_force_fullscreen(whether: boolean): void;
export function prefs_set_num_workspaces(n_workspaces: number): void;
export function prefs_set_show_fallback_app_menu(whether: boolean): void;
export function push_no_msg_prefix(): void;
export function quit(code: ExitCode): void;
export function rect(
    x: number,
    y: number,
    width: number,
    height: number
): Rectangle;
export function register_with_session(): void;
export function remove_clutter_debug_flags(
    debug_flags: Clutter.DebugFlag,
    draw_flags: Clutter.DrawDebugFlag,
    pick_flags: Clutter.PickDebugFlag
): void;
export function remove_debug_paint_flag(flag: DebugPaintFlag): void;
export function remove_verbose_topic(topic: DebugTopic): void;
export function restart(message?: string | null): void;
export function test_init(): void;
export function unsigned_long_equal(v1?: any | null, v2?: any | null): number;
export function unsigned_long_hash(v?: any | null): number;
export function x11_error_trap_pop(x11_display: X11Display): void;
export function x11_error_trap_pop_with_return(x11_display: X11Display): number;
export function x11_error_trap_push(x11_display: X11Display): void;
export function x11_init_gdk_display(): boolean;
export type IdleMonitorWatchFunc = (
    monitor: IdleMonitor,
    watch_id: number
) => void;
export type KeyHandlerFunc = (
    display: Display,
    window: Window,
    event: any | null,
    binding: KeyBinding
) => void;
export type PrefsChangedFunc = (pref: Preference) => void;
export type WindowForeachFunc = (window: Window) => boolean;

export namespace ButtonFunction {
    export const $gtype: GObject.GType<ButtonFunction>;
}

export enum ButtonFunction {
    MENU = 0,
    MINIMIZE = 1,
    MAXIMIZE = 2,
    CLOSE = 3,
    LAST = 4,
}

export namespace CloseDialogResponse {
    export const $gtype: GObject.GType<CloseDialogResponse>;
}

export enum CloseDialogResponse {
    WAIT = 0,
    FORCE_CLOSE = 1,
}

export namespace CompEffect {
    export const $gtype: GObject.GType<CompEffect>;
}

export enum CompEffect {
    CREATE = 0,
    UNMINIMIZE = 1,
    DESTROY = 2,
    MINIMIZE = 3,
    NONE = 4,
}

export namespace Cursor {
    export const $gtype: GObject.GType<Cursor>;
}

export enum Cursor {
    NONE = 0,
    DEFAULT = 1,
    NORTH_RESIZE = 2,
    SOUTH_RESIZE = 3,
    WEST_RESIZE = 4,
    EAST_RESIZE = 5,
    SE_RESIZE = 6,
    SW_RESIZE = 7,
    NE_RESIZE = 8,
    NW_RESIZE = 9,
    MOVE_OR_RESIZE_WINDOW = 10,
    BUSY = 11,
    DND_IN_DRAG = 12,
    DND_MOVE = 13,
    DND_COPY = 14,
    DND_UNSUPPORTED_TARGET = 15,
    POINTING_HAND = 16,
    CROSSHAIR = 17,
    IBEAM = 18,
    BLANK = 19,
    LAST = 20,
}

export namespace DisplayCorner {
    export const $gtype: GObject.GType<DisplayCorner>;
}

export enum DisplayCorner {
    TOPLEFT = 0,
    TOPRIGHT = 1,
    BOTTOMLEFT = 2,
    BOTTOMRIGHT = 3,
}

export namespace DisplayDirection {
    export const $gtype: GObject.GType<DisplayDirection>;
}

export enum DisplayDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
}

export namespace EdgeType {
    export const $gtype: GObject.GType<EdgeType>;
}

export enum EdgeType {
    WINDOW = 0,
    MONITOR = 1,
    SCREEN = 2,
}

export namespace ExitCode {
    export const $gtype: GObject.GType<ExitCode>;
}

export enum ExitCode {
    SUCCESS = 0,
    ERROR = 1,
}

export namespace FrameType {
    export const $gtype: GObject.GType<FrameType>;
}

export enum FrameType {
    NORMAL = 0,
    DIALOG = 1,
    MODAL_DIALOG = 2,
    UTILITY = 3,
    MENU = 4,
    BORDER = 5,
    ATTACHED = 6,
    LAST = 7,
}

export namespace GrabOp {
    export const $gtype: GObject.GType<GrabOp>;
}

export enum GrabOp {
    NONE = 0,
    WINDOW_BASE = 1,
    COMPOSITOR = 2,
    WAYLAND_POPUP = 3,
    FRAME_BUTTON = 4,
    MOVING = 1,
    RESIZING_NW = 36865,
    RESIZING_N = 32769,
    RESIZING_NE = 40961,
    RESIZING_E = 8193,
    RESIZING_SW = 20481,
    RESIZING_S = 16385,
    RESIZING_SE = 24577,
    RESIZING_W = 4097,
    KEYBOARD_MOVING = 257,
    KEYBOARD_RESIZING_UNKNOWN = 769,
    KEYBOARD_RESIZING_NW = 37121,
    KEYBOARD_RESIZING_N = 33025,
    KEYBOARD_RESIZING_NE = 41217,
    KEYBOARD_RESIZING_E = 8449,
    KEYBOARD_RESIZING_SW = 20737,
    KEYBOARD_RESIZING_S = 16641,
    KEYBOARD_RESIZING_SE = 24833,
    KEYBOARD_RESIZING_W = 4353,
}

export namespace Gravity {
    export const $gtype: GObject.GType<Gravity>;
}

export enum Gravity {
    NONE = 0,
    NORTH_WEST = 1,
    NORTH = 2,
    NORTH_EAST = 3,
    WEST = 4,
    CENTER = 5,
    EAST = 6,
    SOUTH_WEST = 7,
    SOUTH = 8,
    SOUTH_EAST = 9,
    STATIC = 10,
}

export namespace InhibitShortcutsDialogResponse {
    export const $gtype: GObject.GType<InhibitShortcutsDialogResponse>;
}

export enum InhibitShortcutsDialogResponse {
    ALLOW = 0,
    DENY = 1,
}

export namespace KeyBindingAction {
    export const $gtype: GObject.GType<KeyBindingAction>;
}

export enum KeyBindingAction {
    NONE = 0,
    WORKSPACE_1 = 1,
    WORKSPACE_2 = 2,
    WORKSPACE_3 = 3,
    WORKSPACE_4 = 4,
    WORKSPACE_5 = 5,
    WORKSPACE_6 = 6,
    WORKSPACE_7 = 7,
    WORKSPACE_8 = 8,
    WORKSPACE_9 = 9,
    WORKSPACE_10 = 10,
    WORKSPACE_11 = 11,
    WORKSPACE_12 = 12,
    WORKSPACE_LEFT = 13,
    WORKSPACE_RIGHT = 14,
    WORKSPACE_UP = 15,
    WORKSPACE_DOWN = 16,
    WORKSPACE_LAST = 17,
    SWITCH_APPLICATIONS = 18,
    SWITCH_APPLICATIONS_BACKWARD = 19,
    SWITCH_GROUP = 20,
    SWITCH_GROUP_BACKWARD = 21,
    SWITCH_WINDOWS = 22,
    SWITCH_WINDOWS_BACKWARD = 23,
    SWITCH_PANELS = 24,
    SWITCH_PANELS_BACKWARD = 25,
    CYCLE_GROUP = 26,
    CYCLE_GROUP_BACKWARD = 27,
    CYCLE_WINDOWS = 28,
    CYCLE_WINDOWS_BACKWARD = 29,
    CYCLE_PANELS = 30,
    CYCLE_PANELS_BACKWARD = 31,
    SHOW_DESKTOP = 32,
    PANEL_MAIN_MENU = 33,
    PANEL_RUN_DIALOG = 34,
    TOGGLE_RECORDING = 35,
    SET_SPEW_MARK = 36,
    ACTIVATE_WINDOW_MENU = 37,
    TOGGLE_FULLSCREEN = 38,
    TOGGLE_MAXIMIZED = 39,
    TOGGLE_TILED_LEFT = 40,
    TOGGLE_TILED_RIGHT = 41,
    TOGGLE_ABOVE = 42,
    MAXIMIZE = 43,
    UNMAXIMIZE = 44,
    TOGGLE_SHADED = 45,
    MINIMIZE = 46,
    CLOSE = 47,
    BEGIN_MOVE = 48,
    BEGIN_RESIZE = 49,
    TOGGLE_ON_ALL_WORKSPACES = 50,
    MOVE_TO_WORKSPACE_1 = 51,
    MOVE_TO_WORKSPACE_2 = 52,
    MOVE_TO_WORKSPACE_3 = 53,
    MOVE_TO_WORKSPACE_4 = 54,
    MOVE_TO_WORKSPACE_5 = 55,
    MOVE_TO_WORKSPACE_6 = 56,
    MOVE_TO_WORKSPACE_7 = 57,
    MOVE_TO_WORKSPACE_8 = 58,
    MOVE_TO_WORKSPACE_9 = 59,
    MOVE_TO_WORKSPACE_10 = 60,
    MOVE_TO_WORKSPACE_11 = 61,
    MOVE_TO_WORKSPACE_12 = 62,
    MOVE_TO_WORKSPACE_LEFT = 63,
    MOVE_TO_WORKSPACE_RIGHT = 64,
    MOVE_TO_WORKSPACE_UP = 65,
    MOVE_TO_WORKSPACE_DOWN = 66,
    MOVE_TO_WORKSPACE_LAST = 67,
    MOVE_TO_MONITOR_LEFT = 68,
    MOVE_TO_MONITOR_RIGHT = 69,
    MOVE_TO_MONITOR_UP = 70,
    MOVE_TO_MONITOR_DOWN = 71,
    RAISE_OR_LOWER = 72,
    RAISE = 73,
    LOWER = 74,
    MAXIMIZE_VERTICALLY = 75,
    MAXIMIZE_HORIZONTALLY = 76,
    MOVE_TO_CORNER_NW = 77,
    MOVE_TO_CORNER_NE = 78,
    MOVE_TO_CORNER_SW = 79,
    MOVE_TO_CORNER_SE = 80,
    MOVE_TO_SIDE_N = 81,
    MOVE_TO_SIDE_S = 82,
    MOVE_TO_SIDE_E = 83,
    MOVE_TO_SIDE_W = 84,
    MOVE_TO_CENTER = 85,
    OVERLAY_KEY = 86,
    LOCATE_POINTER_KEY = 87,
    ISO_NEXT_GROUP = 88,
    ALWAYS_ON_TOP = 89,
    SWITCH_MONITOR = 90,
    ROTATE_MONITOR = 91,
    LAST = 92,
}

export namespace LaterType {
    export const $gtype: GObject.GType<LaterType>;
}

export enum LaterType {
    RESIZE = 0,
    CALC_SHOWING = 1,
    CHECK_FULLSCREEN = 2,
    SYNC_STACK = 3,
    BEFORE_REDRAW = 4,
    IDLE = 5,
}

export namespace LocaleDirection {
    export const $gtype: GObject.GType<LocaleDirection>;
}

export enum LocaleDirection {
    LTR = 0,
    RTL = 1,
}

export namespace MonitorSwitchConfigType {
    export const $gtype: GObject.GType<MonitorSwitchConfigType>;
}

export enum MonitorSwitchConfigType {
    ALL_MIRROR = 0,
    ALL_LINEAR = 1,
    EXTERNAL = 2,
    BUILTIN = 3,
    UNKNOWN = 4,
}

export namespace MotionDirection {
    export const $gtype: GObject.GType<MotionDirection>;
}

export enum MotionDirection {
    UP = -1,
    DOWN = -2,
    LEFT = -3,
    RIGHT = -4,
    UP_LEFT = -5,
    UP_RIGHT = -6,
    DOWN_LEFT = -7,
    DOWN_RIGHT = -8,
}

export namespace PadActionType {
    export const $gtype: GObject.GType<PadActionType>;
}

export enum PadActionType {
    BUTTON = 0,
    RING = 1,
    STRIP = 2,
}

export namespace Preference {
    export const $gtype: GObject.GType<Preference>;
}

export enum Preference {
    MOUSE_BUTTON_MODS = 0,
    FOCUS_MODE = 1,
    FOCUS_NEW_WINDOWS = 2,
    ATTACH_MODAL_DIALOGS = 3,
    RAISE_ON_CLICK = 4,
    ACTION_DOUBLE_CLICK_TITLEBAR = 5,
    ACTION_MIDDLE_CLICK_TITLEBAR = 6,
    ACTION_RIGHT_CLICK_TITLEBAR = 7,
    AUTO_RAISE = 8,
    AUTO_RAISE_DELAY = 9,
    FOCUS_CHANGE_ON_POINTER_REST = 10,
    TITLEBAR_FONT = 11,
    NUM_WORKSPACES = 12,
    DYNAMIC_WORKSPACES = 13,
    KEYBINDINGS = 14,
    DISABLE_WORKAROUNDS = 15,
    BUTTON_LAYOUT = 16,
    WORKSPACE_NAMES = 17,
    VISUAL_BELL = 18,
    AUDIBLE_BELL = 19,
    VISUAL_BELL_TYPE = 20,
    GNOME_ACCESSIBILITY = 21,
    GNOME_ANIMATIONS = 22,
    CURSOR_THEME = 23,
    CURSOR_SIZE = 24,
    RESIZE_WITH_RIGHT_BUTTON = 25,
    EDGE_TILING = 26,
    FORCE_FULLSCREEN = 27,
    WORKSPACES_ONLY_ON_PRIMARY = 28,
    DRAGGABLE_BORDER_WIDTH = 29,
    AUTO_MAXIMIZE = 30,
    CENTER_NEW_WINDOWS = 31,
    DRAG_THRESHOLD = 32,
    LOCATE_POINTER = 33,
    CHECK_ALIVE_TIMEOUT = 34,
}

export namespace SelectionType {
    export const $gtype: GObject.GType<SelectionType>;
}

export enum SelectionType {
    SELECTION_PRIMARY = 0,
    SELECTION_CLIPBOARD = 1,
    SELECTION_DND = 2,
    N_SELECTION_TYPES = 3,
}

export namespace ShadowMode {
    export const $gtype: GObject.GType<ShadowMode>;
}

export enum ShadowMode {
    AUTO = 0,
    FORCED_OFF = 1,
    FORCED_ON = 2,
}

export namespace Side {
    export const $gtype: GObject.GType<Side>;
}

export enum Side {
    LEFT = 1,
    RIGHT = 2,
    TOP = 4,
    BOTTOM = 8,
}

export namespace SizeChange {
    export const $gtype: GObject.GType<SizeChange>;
}

export enum SizeChange {
    MAXIMIZE = 0,
    UNMAXIMIZE = 1,
    FULLSCREEN = 2,
    UNFULLSCREEN = 3,
}

export namespace StackLayer {
    export const $gtype: GObject.GType<StackLayer>;
}

export enum StackLayer {
    DESKTOP = 0,
    BOTTOM = 1,
    NORMAL = 2,
    TOP = 4,
    DOCK = 4,
    OVERRIDE_REDIRECT = 7,
    LAST = 8,
}

export namespace TabList {
    export const $gtype: GObject.GType<TabList>;
}

export enum TabList {
    NORMAL = 0,
    DOCKS = 1,
    GROUP = 2,
    NORMAL_ALL = 3,
}

export namespace TabShowType {
    export const $gtype: GObject.GType<TabShowType>;
}

export enum TabShowType {
    ICON = 0,
    INSTANTLY = 1,
}

export namespace WindowClientType {
    export const $gtype: GObject.GType<WindowClientType>;
}

export enum WindowClientType {
    WAYLAND = 0,
    X11 = 1,
}

export namespace WindowMenuType {
    export const $gtype: GObject.GType<WindowMenuType>;
}

export enum WindowMenuType {
    WM = 0,
    APP = 1,
}

export namespace WindowType {
    export const $gtype: GObject.GType<WindowType>;
}

export enum WindowType {
    NORMAL = 0,
    DESKTOP = 1,
    DOCK = 2,
    DIALOG = 3,
    MODAL_DIALOG = 4,
    TOOLBAR = 5,
    MENU = 6,
    UTILITY = 7,
    SPLASHSCREEN = 8,
    DROPDOWN_MENU = 9,
    POPUP_MENU = 10,
    TOOLTIP = 11,
    NOTIFICATION = 12,
    COMBO = 13,
    DND = 14,
    OVERRIDE_OTHER = 15,
}

export namespace BarrierDirection {
    export const $gtype: GObject.GType<BarrierDirection>;
}

export enum BarrierDirection {
    POSITIVE_X = 1,
    POSITIVE_Y = 2,
    NEGATIVE_X = 4,
    NEGATIVE_Y = 8,
}

export namespace DebugPaintFlag {
    export const $gtype: GObject.GType<DebugPaintFlag>;
}

export enum DebugPaintFlag {
    NONE = 0,
    OPAQUE_REGION = 1,
}

export namespace DebugTopic {
    export const $gtype: GObject.GType<DebugTopic>;
}

export enum DebugTopic {
    VERBOSE = -1,
    FOCUS = 1,
    WORKAREA = 2,
    STACK = 4,
    THEMES = 8,
    SM = 16,
    EVENTS = 32,
    WINDOW_STATE = 64,
    WINDOW_OPS = 128,
    GEOMETRY = 256,
    PLACEMENT = 512,
    PING = 1024,
    XINERAMA = 2048,
    KEYBINDINGS = 4096,
    SYNC = 8192,
    ERRORS = 16384,
    STARTUP = 32768,
    PREFS = 65536,
    GROUPS = 131072,
    RESIZING = 262144,
    SHAPES = 524288,
    COMPOSITOR = 1048576,
    EDGE_RESISTANCE = 2097152,
    DBUS = 4194304,
    INPUT = 8388608,
}

export namespace Direction {
    export const $gtype: GObject.GType<Direction>;
}

export enum Direction {
    LEFT = 1,
    RIGHT = 2,
    TOP = 4,
    BOTTOM = 8,
    UP = 4,
    DOWN = 8,
    HORIZONTAL = 3,
    VERTICAL = 12,
}

export namespace FrameFlags {
    export const $gtype: GObject.GType<FrameFlags>;
}

export enum FrameFlags {
    ALLOWS_DELETE = 1,
    ALLOWS_MENU = 2,
    ALLOWS_MINIMIZE = 4,
    ALLOWS_MAXIMIZE = 8,
    ALLOWS_VERTICAL_RESIZE = 16,
    ALLOWS_HORIZONTAL_RESIZE = 32,
    HAS_FOCUS = 64,
    SHADED = 128,
    STUCK = 256,
    MAXIMIZED = 512,
    ALLOWS_SHADE = 1024,
    ALLOWS_MOVE = 2048,
    FULLSCREEN = 4096,
    ABOVE = 8192,
    TILED_LEFT = 16384,
    TILED_RIGHT = 32768,
}

export namespace KeyBindingFlags {
    export const $gtype: GObject.GType<KeyBindingFlags>;
}

export enum KeyBindingFlags {
    NONE = 0,
    PER_WINDOW = 1,
    BUILTIN = 2,
    IS_REVERSED = 4,
    NON_MASKABLE = 8,
    IGNORE_AUTOREPEAT = 16,
    NO_AUTO_GRAB = 32,
}

export namespace MaximizeFlags {
    export const $gtype: GObject.GType<MaximizeFlags>;
}

export enum MaximizeFlags {
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
}

export namespace ModalOptions {
    export const $gtype: GObject.GType<ModalOptions>;
}

export enum ModalOptions {
    POINTER_ALREADY_GRABBED = 1,
    KEYBOARD_ALREADY_GRABBED = 2,
}

export namespace VirtualModifier {
    export const $gtype: GObject.GType<VirtualModifier>;
}

export enum VirtualModifier {
    SHIFT_MASK = 32,
    CONTROL_MASK = 64,
    ALT_MASK = 128,
    META_MASK = 256,
    SUPER_MASK = 512,
    HYPER_MASK = 1024,
    MOD2_MASK = 2048,
    MOD3_MASK = 4096,
    MOD4_MASK = 8192,
    MOD5_MASK = 16384,
}
export namespace Backend {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Backend extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Backend>;

    constructor(
        properties?: Partial<Backend.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Backend.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'gpu-added',
        callback: (_source: this, gpu: unknown) => void
    ): number;
    connect_after(
        signal: 'gpu-added',
        callback: (_source: this, gpu: unknown) => void
    ): number;
    emit(signal: 'gpu-added', gpu: unknown): void;
    connect(
        signal: 'keymap-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'keymap-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'keymap-changed'): void;
    connect(
        signal: 'keymap-layout-group-changed',
        callback: (_source: this, object: number) => void
    ): number;
    connect_after(
        signal: 'keymap-layout-group-changed',
        callback: (_source: this, object: number) => void
    ): number;
    emit(signal: 'keymap-layout-group-changed', object: number): void;
    connect(
        signal: 'last-device-changed',
        callback: (_source: this, object: Clutter.InputDevice) => void
    ): number;
    connect_after(
        signal: 'last-device-changed',
        callback: (_source: this, object: Clutter.InputDevice) => void
    ): number;
    emit(signal: 'last-device-changed', object: Clutter.InputDevice): void;
    connect(
        signal: 'lid-is-closed-changed',
        callback: (_source: this, object: boolean) => void
    ): number;
    connect_after(
        signal: 'lid-is-closed-changed',
        callback: (_source: this, object: boolean) => void
    ): number;
    emit(signal: 'lid-is-closed-changed', object: boolean): void;

    // Members

    get_dnd(): Dnd;
    get_remote_access_controller(): RemoteAccessController;
    get_stage(): Clutter.Actor;
    is_rendering_hardware_accelerated(): boolean;
    lock_layout_group(idx: number): void;
    set_keymap(layouts: string, variants: string, options: string): void;
    set_numlock(numlock_state: boolean): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export namespace Background {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        meta_display: Display;
        metaDisplay: Display;
    }
}
export class Background extends GObject.Object {
    static $gtype: GObject.GType<Background>;

    constructor(
        properties?: Partial<Background.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Background.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    meta_display: Display;
    metaDisplay: Display;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](display: Display): Background;

    // Members

    set_blend(
        file1: Gio.File,
        file2: Gio.File,
        blend_factor: number,
        style: GDesktopEnums.BackgroundStyle
    ): void;
    set_color(color: Clutter.Color): void;
    set_file(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle): void;
    set_gradient(
        shading_direction: GDesktopEnums.BackgroundShading,
        color: Clutter.Color,
        second_color: Clutter.Color
    ): void;
    static refresh_all(): void;
}
export namespace BackgroundActor {
    export interface ConstructorProperties<
        A extends Clutter.Actor = Clutter.Actor
    > extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;
        meta_display: Display;
        metaDisplay: Display;
        monitor: number;
    }
}
export class BackgroundActor<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Actor
    implements
        Atk.ImplementorIface,
        Clutter.Animatable,
        Clutter.Container<A>,
        Clutter.Scriptable {
    static $gtype: GObject.GType<BackgroundActor>;

    constructor(
        properties?: Partial<BackgroundActor.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BackgroundActor.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Properties
    meta_display: Display;
    metaDisplay: Display;
    monitor: number;

    // Constructors

    static ['new'](display: Display, monitor: number): BackgroundActor;
    static ['new'](...args: never[]): never;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Clutter.Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Clutter.Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(
        script: Clutter.Script,
        name: string,
        value: any
    ): void;
    vfunc_set_id(id_: string): void;
}
export namespace BackgroundContent {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        background: Background;
        brightness: number;
        gradient: boolean;
        gradient_height: number;
        gradientHeight: number;
        gradient_max_darkness: number;
        gradientMaxDarkness: number;
        meta_display: Display;
        metaDisplay: Display;
        monitor: number;
        vignette: boolean;
        vignette_sharpness: number;
        vignetteSharpness: number;
    }
}
export class BackgroundContent
    extends GObject.Object
    implements Clutter.Content {
    static $gtype: GObject.GType<BackgroundContent>;

    constructor(
        properties?: Partial<BackgroundContent.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BackgroundContent.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    background: Background;
    brightness: number;
    gradient: boolean;
    gradient_height: number;
    gradientHeight: number;
    gradient_max_darkness: number;
    gradientMaxDarkness: number;
    meta_display: Display;
    metaDisplay: Display;
    monitor: number;
    vignette: boolean;
    vignette_sharpness: number;
    vignetteSharpness: number;

    // Members

    set_background(background: Background): void;
    set_gradient(enabled: boolean, height: number, tone_start: number): void;
    set_vignette(enabled: boolean, brightness: number, sharpness: number): void;
    static new(display: Display, monitor: number): Clutter.Content;

    // Implemented Members

    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    invalidate_size(): void;
    vfunc_attached(actor: Clutter.Actor): void;
    vfunc_detached(actor: Clutter.Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_invalidate_size(): void;
    vfunc_paint_content(
        actor: Clutter.Actor,
        node: Clutter.PaintNode,
        paint_context: Clutter.PaintContext
    ): void;
}
export namespace BackgroundGroup {
    export interface ConstructorProperties<
        A extends Clutter.Actor = Clutter.Actor
    > extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class BackgroundGroup<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Actor
    implements
        Atk.ImplementorIface,
        Clutter.Animatable,
        Clutter.Container<A>,
        Clutter.Scriptable {
    static $gtype: GObject.GType<BackgroundGroup>;

    constructor(
        properties?: Partial<BackgroundGroup.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BackgroundGroup.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): BackgroundGroup;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Clutter.Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Clutter.Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(
        script: Clutter.Script,
        name: string,
        value: any
    ): void;
    vfunc_set_id(id_: string): void;
}
export namespace BackgroundImage {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BackgroundImage extends GObject.Object {
    static $gtype: GObject.GType<BackgroundImage>;

    constructor(
        properties?: Partial<BackgroundImage.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BackgroundImage.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'loaded', callback: (_source: this) => void): number;
    connect_after(signal: 'loaded', callback: (_source: this) => void): number;
    emit(signal: 'loaded'): void;

    // Members

    get_success(): boolean;
    get_texture(): Cogl.Texture;
    is_loaded(): boolean;
}
export namespace BackgroundImageCache {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BackgroundImageCache extends GObject.Object {
    static $gtype: GObject.GType<BackgroundImageCache>;

    constructor(
        properties?: Partial<BackgroundImageCache.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BackgroundImageCache.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    load(file: Gio.File): BackgroundImage;
    purge(file: Gio.File): void;
    static get_default(): BackgroundImageCache;
}
export namespace Barrier {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        directions: BarrierDirection;
        display: Display;
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }
}
export class Barrier extends GObject.Object {
    static $gtype: GObject.GType<Barrier>;

    constructor(
        properties?: Partial<Barrier.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Barrier.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    directions: BarrierDirection;
    display: Display;
    x1: number;
    x2: number;
    y1: number;
    y2: number;

    // Fields
    priv: BarrierPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'hit',
        callback: (_source: this, event: BarrierEvent) => void
    ): number;
    connect_after(
        signal: 'hit',
        callback: (_source: this, event: BarrierEvent) => void
    ): number;
    emit(signal: 'hit', event: BarrierEvent): void;
    connect(
        signal: 'left',
        callback: (_source: this, event: BarrierEvent) => void
    ): number;
    connect_after(
        signal: 'left',
        callback: (_source: this, event: BarrierEvent) => void
    ): number;
    emit(signal: 'left', event: BarrierEvent): void;

    // Members

    destroy(): void;
    is_active(): boolean;
    release(event: BarrierEvent): void;
}
export namespace CursorTracker {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Backend;
    }
}
export class CursorTracker extends GObject.Object {
    static $gtype: GObject.GType<CursorTracker>;

    constructor(
        properties?: Partial<CursorTracker.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<CursorTracker.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    backend: Backend;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'cursor-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'cursor-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'cursor-changed'): void;
    connect(
        signal: 'cursor-moved',
        callback: (_source: this, x: number, y: number) => void
    ): number;
    connect_after(
        signal: 'cursor-moved',
        callback: (_source: this, x: number, y: number) => void
    ): number;
    emit(signal: 'cursor-moved', x: number, y: number): void;
    connect(
        signal: 'visibility-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'visibility-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'visibility-changed'): void;

    // Members

    get_hot(): [number, number];
    get_pointer(x: number, y: number, mods: Clutter.ModifierType): void;
    get_pointer_visible(): boolean;
    get_sprite(): Cogl.Texture;
    set_pointer_visible(visible: boolean): void;
    static get_for_display(display: Display): CursorTracker;
}
export namespace Display {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        focus_window: Window;
        focusWindow: Window;
    }
}
export class Display extends GObject.Object {
    static $gtype: GObject.GType<Display>;

    constructor(
        properties?: Partial<Display.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Display.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    focus_window: Window;
    focusWindow: Window;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'accelerator-activated',
        callback: (
            _source: this,
            object: number,
            p0: Clutter.InputDevice,
            p1: number
        ) => void
    ): number;
    connect_after(
        signal: 'accelerator-activated',
        callback: (
            _source: this,
            object: number,
            p0: Clutter.InputDevice,
            p1: number
        ) => void
    ): number;
    emit(
        signal: 'accelerator-activated',
        object: number,
        p0: Clutter.InputDevice,
        p1: number
    ): void;
    connect(signal: 'closing', callback: (_source: this) => void): number;
    connect_after(signal: 'closing', callback: (_source: this) => void): number;
    emit(signal: 'closing'): void;
    connect(
        signal: 'cursor-updated',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'cursor-updated',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'cursor-updated'): void;
    connect(
        signal: 'gl-video-memory-purged',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'gl-video-memory-purged',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'gl-video-memory-purged'): void;
    connect(
        signal: 'grab-op-begin',
        callback: (
            _source: this,
            object: Display,
            p0: Window,
            p1: GrabOp
        ) => void
    ): number;
    connect_after(
        signal: 'grab-op-begin',
        callback: (
            _source: this,
            object: Display,
            p0: Window,
            p1: GrabOp
        ) => void
    ): number;
    emit(
        signal: 'grab-op-begin',
        object: Display,
        p0: Window,
        p1: GrabOp
    ): void;
    connect(
        signal: 'grab-op-end',
        callback: (
            _source: this,
            object: Display,
            p0: Window,
            p1: GrabOp
        ) => void
    ): number;
    connect_after(
        signal: 'grab-op-end',
        callback: (
            _source: this,
            object: Display,
            p0: Window,
            p1: GrabOp
        ) => void
    ): number;
    emit(signal: 'grab-op-end', object: Display, p0: Window, p1: GrabOp): void;
    connect(
        signal: 'in-fullscreen-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'in-fullscreen-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'in-fullscreen-changed'): void;
    connect(
        signal: 'init-xserver',
        callback: (_source: this, object: Gio.Task) => boolean
    ): number;
    connect_after(
        signal: 'init-xserver',
        callback: (_source: this, object: Gio.Task) => boolean
    ): number;
    emit(signal: 'init-xserver', object: Gio.Task): void;
    connect(
        signal: 'modifiers-accelerator-activated',
        callback: (_source: this) => boolean
    ): number;
    connect_after(
        signal: 'modifiers-accelerator-activated',
        callback: (_source: this) => boolean
    ): number;
    emit(signal: 'modifiers-accelerator-activated'): void;
    connect(signal: 'overlay-key', callback: (_source: this) => void): number;
    connect_after(
        signal: 'overlay-key',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'overlay-key'): void;
    connect(
        signal: 'pad-mode-switch',
        callback: (
            _source: this,
            object: Clutter.InputDevice,
            p0: number,
            p1: number
        ) => void
    ): number;
    connect_after(
        signal: 'pad-mode-switch',
        callback: (
            _source: this,
            object: Clutter.InputDevice,
            p0: number,
            p1: number
        ) => void
    ): number;
    emit(
        signal: 'pad-mode-switch',
        object: Clutter.InputDevice,
        p0: number,
        p1: number
    ): void;
    connect(signal: 'restacked', callback: (_source: this) => void): number;
    connect_after(
        signal: 'restacked',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'restacked'): void;
    connect(signal: 'restart', callback: (_source: this) => boolean): number;
    connect_after(
        signal: 'restart',
        callback: (_source: this) => boolean
    ): number;
    emit(signal: 'restart'): void;
    connect(
        signal: 'show-osd',
        callback: (
            _source: this,
            object: number,
            p0: string,
            p1: string
        ) => void
    ): number;
    connect_after(
        signal: 'show-osd',
        callback: (
            _source: this,
            object: number,
            p0: string,
            p1: string
        ) => void
    ): number;
    emit(signal: 'show-osd', object: number, p0: string, p1: string): void;
    connect(
        signal: 'show-pad-osd',
        callback: (
            _source: this,
            pad: Clutter.InputDevice,
            settings: Gio.Settings,
            layout_path: string,
            edition_mode: boolean,
            monitor_idx: number
        ) => Clutter.Actor | null
    ): number;
    connect_after(
        signal: 'show-pad-osd',
        callback: (
            _source: this,
            pad: Clutter.InputDevice,
            settings: Gio.Settings,
            layout_path: string,
            edition_mode: boolean,
            monitor_idx: number
        ) => Clutter.Actor | null
    ): number;
    emit(
        signal: 'show-pad-osd',
        pad: Clutter.InputDevice,
        settings: Gio.Settings,
        layout_path: string,
        edition_mode: boolean,
        monitor_idx: number
    ): void;
    connect(
        signal: 'show-resize-popup',
        callback: (
            _source: this,
            object: boolean,
            p0: Rectangle,
            p1: number,
            p2: number
        ) => boolean
    ): number;
    connect_after(
        signal: 'show-resize-popup',
        callback: (
            _source: this,
            object: boolean,
            p0: Rectangle,
            p1: number,
            p2: number
        ) => boolean
    ): number;
    emit(
        signal: 'show-resize-popup',
        object: boolean,
        p0: Rectangle,
        p1: number,
        p2: number
    ): void;
    connect(
        signal: 'show-restart-message',
        callback: (_source: this, message: string | null) => boolean
    ): number;
    connect_after(
        signal: 'show-restart-message',
        callback: (_source: this, message: string | null) => boolean
    ): number;
    emit(signal: 'show-restart-message', message: string | null): void;
    connect(
        signal: 'showing-desktop-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'showing-desktop-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'showing-desktop-changed'): void;
    connect(
        signal: 'window-created',
        callback: (_source: this, object: Window) => void
    ): number;
    connect_after(
        signal: 'window-created',
        callback: (_source: this, object: Window) => void
    ): number;
    emit(signal: 'window-created', object: Window): void;
    connect(
        signal: 'window-demands-attention',
        callback: (_source: this, object: Window) => void
    ): number;
    connect_after(
        signal: 'window-demands-attention',
        callback: (_source: this, object: Window) => void
    ): number;
    emit(signal: 'window-demands-attention', object: Window): void;
    connect(
        signal: 'window-entered-monitor',
        callback: (_source: this, object: number, p0: Window) => void
    ): number;
    connect_after(
        signal: 'window-entered-monitor',
        callback: (_source: this, object: number, p0: Window) => void
    ): number;
    emit(signal: 'window-entered-monitor', object: number, p0: Window): void;
    connect(
        signal: 'window-left-monitor',
        callback: (_source: this, object: number, p0: Window) => void
    ): number;
    connect_after(
        signal: 'window-left-monitor',
        callback: (_source: this, object: number, p0: Window) => void
    ): number;
    emit(signal: 'window-left-monitor', object: number, p0: Window): void;
    connect(
        signal: 'window-marked-urgent',
        callback: (_source: this, object: Window) => void
    ): number;
    connect_after(
        signal: 'window-marked-urgent',
        callback: (_source: this, object: Window) => void
    ): number;
    emit(signal: 'window-marked-urgent', object: Window): void;
    connect(
        signal: 'workareas-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'workareas-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'workareas-changed'): void;
    connect(
        signal: 'x11-display-closing',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'x11-display-closing',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'x11-display-closing'): void;
    connect(
        signal: 'x11-display-opened',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'x11-display-opened',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'x11-display-opened'): void;
    connect(
        signal: 'x11-display-setup',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'x11-display-setup',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'x11-display-setup'): void;

    // Members

    add_ignored_crossing_serial(serial: number): void;
    add_keybinding(
        name: string,
        settings: Gio.Settings,
        flags: KeyBindingFlags,
        handler: KeyHandlerFunc
    ): number;
    begin_grab_op(
        window: Window,
        op: GrabOp,
        pointer_already_grabbed: boolean,
        frame_action: boolean,
        button: number,
        modmask: number,
        timestamp: number,
        root_x: number,
        root_y: number
    ): boolean;
    clear_mouse_mode(): void;
    close(timestamp: number): void;
    end_grab_op(timestamp: number): void;
    focus_default_window(timestamp: number): void;
    freeze_keyboard(timestamp: number): void;
    get_current_monitor(): number;
    get_current_time(): number;
    get_current_time_roundtrip(): number;
    get_focus_window(): Window;
    get_grab_op(): GrabOp;
    get_keybinding_action(keycode: number, mask: number): number;
    get_last_user_time(): number;
    get_monitor_geometry(monitor: number): Rectangle;
    get_monitor_in_fullscreen(monitor: number): boolean;
    get_monitor_index_for_rect(rect: Rectangle): number;
    get_monitor_neighbor_index(
        which_monitor: number,
        dir: DisplayDirection
    ): number;
    get_monitor_scale(monitor: number): number;
    get_n_monitors(): number;
    get_pad_action_label(
        pad: Clutter.InputDevice,
        action_type: PadActionType,
        action_number: number
    ): string;
    get_primary_monitor(): number;
    get_selection(): Selection;
    get_size(): [number, number];
    get_sound_player(): SoundPlayer;
    get_tab_current(type: TabList, workspace: Workspace): Window;
    get_tab_list(type: TabList, workspace?: Workspace | null): Window[];
    get_tab_next(
        type: TabList,
        workspace: Workspace,
        window: Window | null,
        backward: boolean
    ): Window;
    get_workspace_manager(): WorkspaceManager;
    grab_accelerator(accelerator: string, flags: KeyBindingFlags): number;
    is_pointer_emulating_sequence(
        sequence?: Clutter.EventSequence | null
    ): boolean;
    remove_keybinding(name: string): boolean;
    request_pad_osd(pad: Clutter.InputDevice, edition_mode: boolean): void;
    set_cursor(cursor: Cursor): void;
    set_input_focus(
        window: Window,
        focus_frame: boolean,
        timestamp: number
    ): void;
    sort_windows_by_stacking(windows: Window[]): Window[];
    supports_extended_barriers(): boolean;
    unfreeze_keyboard(timestamp: number): void;
    ungrab_accelerator(action_id: number): boolean;
    ungrab_keyboard(timestamp: number): void;
    unset_input_focus(timestamp: number): void;
    xserver_time_is_before(time1: number, time2: number): boolean;
}
export namespace Dnd {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Dnd extends GObject.Object {
    static $gtype: GObject.GType<Dnd>;

    constructor(
        properties?: Partial<Dnd.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Dnd.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'dnd-enter', callback: (_source: this) => void): number;
    connect_after(
        signal: 'dnd-enter',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'dnd-enter'): void;
    connect(signal: 'dnd-leave', callback: (_source: this) => void): number;
    connect_after(
        signal: 'dnd-leave',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'dnd-leave'): void;
    connect(
        signal: 'dnd-position-change',
        callback: (_source: this, object: number, p0: number) => void
    ): number;
    connect_after(
        signal: 'dnd-position-change',
        callback: (_source: this, object: number, p0: number) => void
    ): number;
    emit(signal: 'dnd-position-change', object: number, p0: number): void;
}
export namespace IdleMonitor {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        device: Clutter.InputDevice;
    }
}
export class IdleMonitor extends GObject.Object {
    static $gtype: GObject.GType<IdleMonitor>;

    constructor(
        properties?: Partial<IdleMonitor.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<IdleMonitor.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    device: Clutter.InputDevice;

    // Members

    add_idle_watch(
        interval_msec: number,
        callback?: IdleMonitorWatchFunc | null
    ): number;
    add_user_active_watch(callback?: IdleMonitorWatchFunc | null): number;
    get_idletime(): number;
    remove_watch(id: number): void;
    static get_core(): IdleMonitor;
}
export namespace LaunchContext {
    export interface ConstructorProperties
        extends Gio.AppLaunchContext.ConstructorProperties {
        [key: string]: any;
        display: Display;
        timestamp: number;
        workspace: Workspace;
    }
}
export class LaunchContext extends Gio.AppLaunchContext {
    static $gtype: GObject.GType<LaunchContext>;

    constructor(
        properties?: Partial<LaunchContext.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<LaunchContext.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    display: Display;
    timestamp: number;
    workspace: Workspace;

    // Members

    set_timestamp(timestamp: number): void;
    set_workspace(workspace: Workspace): void;
}
export namespace MonitorManager {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Backend;
        panel_orientation_managed: boolean;
        panelOrientationManaged: boolean;
    }
}
export class MonitorManager extends GObject.Object {
    static $gtype: GObject.GType<MonitorManager>;

    constructor(
        properties?: Partial<MonitorManager.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<MonitorManager.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    backend: Backend;
    panel_orientation_managed: boolean;
    panelOrientationManaged: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'confirm-display-change',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'confirm-display-change',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'confirm-display-change'): void;
    connect(
        signal: 'monitors-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'monitors-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'monitors-changed'): void;
    connect(
        signal: 'monitors-changed-internal',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'monitors-changed-internal',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'monitors-changed-internal'): void;
    connect(
        signal: 'power-save-mode-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'power-save-mode-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'power-save-mode-changed'): void;

    // Members

    can_switch_config(): boolean;
    get_is_builtin_display_on(): boolean;
    get_monitor_for_connector(connector: string): number;
    get_panel_orientation_managed(): boolean;
    get_switch_config(): MonitorSwitchConfigType;
    switch_config(config_type: MonitorSwitchConfigType): void;
    static get(): MonitorManager;
    static get_display_configuration_timeout(): number;
}
export namespace Plugin {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Plugin extends GObject.Object {
    static $gtype: GObject.GType<Plugin>;

    constructor(
        properties?: Partial<Plugin.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Plugin.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    begin_modal(options: ModalOptions, timestamp: number): boolean;
    complete_display_change(ok: boolean): void;
    destroy_completed(actor: WindowActor): void;
    end_modal(timestamp: number): void;
    get_display(): Display;
    get_info(): PluginInfo;
    map_completed(actor: WindowActor): void;
    minimize_completed(actor: WindowActor): void;
    size_change_completed(actor: WindowActor): void;
    switch_workspace_completed(): void;
    unminimize_completed(actor: WindowActor): void;
    vfunc_confirm_display_change(): void;
    vfunc_destroy(actor: WindowActor): void;
    vfunc_hide_tile_preview(): void;
    vfunc_keybinding_filter(binding: KeyBinding): boolean;
    vfunc_kill_switch_workspace(): void;
    vfunc_kill_window_effects(actor: WindowActor): void;
    vfunc_locate_pointer(): void;
    vfunc_map(actor: WindowActor): void;
    vfunc_minimize(actor: WindowActor): void;
    vfunc_plugin_info(): PluginInfo;
    vfunc_show_tile_preview(
        window: Window,
        tile_rect: Rectangle,
        tile_monitor_number: number
    ): void;
    vfunc_show_window_menu(
        window: Window,
        menu: WindowMenuType,
        x: number,
        y: number
    ): void;
    vfunc_show_window_menu_for_rect(
        window: Window,
        menu: WindowMenuType,
        rect: Rectangle
    ): void;
    vfunc_size_change(
        actor: WindowActor,
        which_change: SizeChange,
        old_frame_rect: Rectangle,
        old_buffer_rect: Rectangle
    ): void;
    vfunc_size_changed(actor: WindowActor): void;
    vfunc_start(): void;
    vfunc_switch_workspace(
        from: number,
        to: number,
        direction: MotionDirection
    ): void;
    vfunc_unminimize(actor: WindowActor): void;
    vfunc_xevent_filter(event: xlib.XEvent): boolean;
    static manager_set_plugin_type(gtype: GObject.GType): void;
}
export namespace RemoteAccessController {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class RemoteAccessController extends GObject.Object {
    static $gtype: GObject.GType<RemoteAccessController>;

    constructor(
        properties?: Partial<RemoteAccessController.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<RemoteAccessController.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'new-handle',
        callback: (_source: this, object: RemoteAccessHandle) => void
    ): number;
    connect_after(
        signal: 'new-handle',
        callback: (_source: this, object: RemoteAccessHandle) => void
    ): number;
    emit(signal: 'new-handle', object: RemoteAccessHandle): void;

    // Members

    inhibit_remote_access(): void;
    uninhibit_remote_access(): void;
}
export namespace RemoteAccessHandle {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        is_recording: boolean;
        isRecording: boolean;
    }
}
export class RemoteAccessHandle extends GObject.Object {
    static $gtype: GObject.GType<RemoteAccessHandle>;

    constructor(
        properties?: Partial<RemoteAccessHandle.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<RemoteAccessHandle.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    is_recording: boolean;
    isRecording: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'stopped', callback: (_source: this) => void): number;
    connect_after(signal: 'stopped', callback: (_source: this) => void): number;
    emit(signal: 'stopped'): void;

    // Members

    get_disable_animations(): boolean;
    stop(): void;
    vfunc_stop(): void;
}
export namespace Selection {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Selection extends GObject.Object {
    static $gtype: GObject.GType<Selection>;

    constructor(
        properties?: Partial<Selection.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Selection.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'owner-changed',
        callback: (_source: this, object: number, p0: SelectionSource) => void
    ): number;
    connect_after(
        signal: 'owner-changed',
        callback: (_source: this, object: number, p0: SelectionSource) => void
    ): number;
    emit(signal: 'owner-changed', object: number, p0: SelectionSource): void;

    // Constructors

    static ['new'](display: Display): Selection;

    // Members

    get_mimetypes(selection_type: SelectionType): string[];
    set_owner(selection_type: SelectionType, owner: SelectionSource): void;
    transfer_async(
        selection_type: SelectionType,
        mimetype: string,
        size: number,
        output: Gio.OutputStream,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    transfer_async(
        selection_type: SelectionType,
        mimetype: string,
        size: number,
        output: Gio.OutputStream,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    transfer_async(
        selection_type: SelectionType,
        mimetype: string,
        size: number,
        output: Gio.OutputStream,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    transfer_finish(result: Gio.AsyncResult): boolean;
    unset_owner(selection_type: SelectionType, owner: SelectionSource): void;
}
export namespace SelectionSource {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SelectionSource extends GObject.Object {
    static $gtype: GObject.GType<SelectionSource>;

    constructor(
        properties?: Partial<SelectionSource.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<SelectionSource.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activated', callback: (_source: this) => void): number;
    connect_after(
        signal: 'activated',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'activated'): void;
    connect(signal: 'deactivated', callback: (_source: this) => void): number;
    connect_after(
        signal: 'deactivated',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'deactivated'): void;

    // Members

    get_mimetypes(): string[];
    is_active(): boolean;
    read_async(
        mimetype: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<Gio.InputStream>;
    read_async(
        mimetype: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    read_async(
        mimetype: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.InputStream> | void;
    read_finish(result: Gio.AsyncResult): Gio.InputStream;
    vfunc_activated(): void;
    vfunc_deactivated(): void;
    vfunc_get_mimetypes(): string[];
    vfunc_read_async(
        mimetype: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<Gio.InputStream>;
    vfunc_read_async(
        mimetype: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_read_async(
        mimetype: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.InputStream> | void;
    vfunc_read_finish(result: Gio.AsyncResult): Gio.InputStream;
}
export namespace SelectionSourceMemory {
    export interface ConstructorProperties
        extends SelectionSource.ConstructorProperties {
        [key: string]: any;
    }
}
export class SelectionSourceMemory extends SelectionSource {
    static $gtype: GObject.GType<SelectionSourceMemory>;

    constructor(
        properties?: Partial<SelectionSourceMemory.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<SelectionSourceMemory.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](
        mimetype: string,
        content: GLib.Bytes | Uint8Array
    ): SelectionSourceMemory;
}
export namespace ShadowFactory {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ShadowFactory extends GObject.Object {
    static $gtype: GObject.GType<ShadowFactory>;

    constructor(
        properties?: Partial<ShadowFactory.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ShadowFactory.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](): ShadowFactory;

    // Members

    get_params(class_name: string, focused: boolean): ShadowParams;
    get_shadow(
        shape: WindowShape,
        width: number,
        height: number,
        class_name: string,
        focused: boolean
    ): Shadow;
    set_params(
        class_name: string,
        focused: boolean,
        params: ShadowParams
    ): void;
    static get_default(): ShadowFactory;
}
export namespace ShapedTexture {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ShapedTexture extends GObject.Object implements Clutter.Content {
    static $gtype: GObject.GType<ShapedTexture>;

    constructor(
        properties?: Partial<ShapedTexture.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ShapedTexture.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'size-changed', callback: (_source: this) => void): number;
    connect_after(
        signal: 'size-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'size-changed'): void;

    // Members

    get_image(clip?: cairo.RectangleInt | null): cairo.Surface | null;
    get_texture(): Cogl.Texture;
    set_create_mipmaps(create_mipmaps: boolean): void;
    set_mask_texture(mask_texture: Cogl.Texture): void;

    // Implemented Members

    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    invalidate_size(): void;
    vfunc_attached(actor: Clutter.Actor): void;
    vfunc_detached(actor: Clutter.Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_invalidate_size(): void;
    vfunc_paint_content(
        actor: Clutter.Actor,
        node: Clutter.PaintNode,
        paint_context: Clutter.PaintContext
    ): void;
}
export namespace SoundPlayer {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SoundPlayer extends GObject.Object {
    static $gtype: GObject.GType<SoundPlayer>;

    constructor(
        properties?: Partial<SoundPlayer.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<SoundPlayer.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    play_from_file(
        file: Gio.File,
        description: string,
        cancellable?: Gio.Cancellable | null
    ): void;
    play_from_theme(
        name: string,
        description: string,
        cancellable?: Gio.Cancellable | null
    ): void;
}
export namespace Stage {
    export interface ConstructorProperties<
        A extends Clutter.Actor = Clutter.Actor
    > extends Clutter.Stage.ConstructorProperties<A> {
        [key: string]: any;
    }
}
export class Stage<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Stage<A>
    implements
        Atk.ImplementorIface,
        Clutter.Animatable,
        Clutter.Container<A>,
        Clutter.Scriptable {
    static $gtype: GObject.GType<Stage>;

    constructor(
        properties?: Partial<Stage.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Stage.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'actors-painted',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'actors-painted',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'actors-painted'): void;

    // Members

    static is_focused(display: Display): boolean;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Clutter.Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Clutter.Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(
        script: Clutter.Script,
        name: string,
        value: any
    ): void;
    vfunc_set_id(id_: string): void;
}
export namespace StartupNotification {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        display: Display;
    }
}
export class StartupNotification extends GObject.Object {
    static $gtype: GObject.GType<StartupNotification>;

    constructor(
        properties?: Partial<StartupNotification.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<StartupNotification.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    display: Display;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'changed',
        callback: (_source: this, object: any | null) => void
    ): number;
    connect_after(
        signal: 'changed',
        callback: (_source: this, object: any | null) => void
    ): number;
    emit(signal: 'changed', object: any | null): void;

    // Members

    create_launcher(): LaunchContext;
}
export namespace StartupSequence {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        application_id: string;
        applicationId: string;
        icon_name: string;
        iconName: string;
        id: string;
        name: string;
        timestamp: number;
        wmclass: string;
        workspace: number;
    }
}
export class StartupSequence extends GObject.Object {
    static $gtype: GObject.GType<StartupSequence>;

    constructor(
        properties?: Partial<StartupSequence.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<StartupSequence.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    application_id: string;
    applicationId: string;
    icon_name: string;
    iconName: string;
    id: string;
    name: string;
    timestamp: number;
    wmclass: string;
    workspace: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'complete', callback: (_source: this) => void): number;
    connect_after(
        signal: 'complete',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'complete'): void;

    // Members

    complete(): void;
    get_application_id(): string;
    get_completed(): boolean;
    get_icon_name(): string;
    get_id(): string;
    get_name(): string;
    get_timestamp(): number;
    get_wmclass(): string;
    get_workspace(): number;
}
export namespace WaylandClient {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandClient extends GObject.Object {
    static $gtype: GObject.GType<WaylandClient>;

    constructor(
        properties?: Partial<WaylandClient.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<WaylandClient.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](launcher: Gio.SubprocessLauncher): WaylandClient;

    // Members

    hide_from_window_list(window: Window): void;
    owns_window(window: Window): boolean;
    show_in_window_list(window: Window): void;
    spawnv(display: Display, argv: string[]): Gio.Subprocess;
}
export namespace Window {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        above: boolean;
        appears_focused: boolean;
        appearsFocused: boolean;
        decorated: boolean;
        demands_attention: boolean;
        demandsAttention: boolean;
        fullscreen: boolean;
        gtk_app_menu_object_path: string;
        gtkAppMenuObjectPath: string;
        gtk_application_id: string;
        gtkApplicationId: string;
        gtk_application_object_path: string;
        gtkApplicationObjectPath: string;
        gtk_menubar_object_path: string;
        gtkMenubarObjectPath: string;
        gtk_unique_bus_name: string;
        gtkUniqueBusName: string;
        gtk_window_object_path: string;
        gtkWindowObjectPath: string;
        icon: any;
        maximized_horizontally: boolean;
        maximizedHorizontally: boolean;
        maximized_vertically: boolean;
        maximizedVertically: boolean;
        mini_icon: any;
        miniIcon: any;
        minimized: boolean;
        mutter_hints: string;
        mutterHints: string;
        on_all_workspaces: boolean;
        onAllWorkspaces: boolean;
        resizeable: boolean;
        skip_taskbar: boolean;
        skipTaskbar: boolean;
        title: string;
        urgent: boolean;
        user_time: number;
        userTime: number;
        window_type: WindowType;
        windowType: WindowType;
        wm_class: string;
        wmClass: string;
    }
}
export abstract class Window extends GObject.Object {
    static $gtype: GObject.GType<Window>;

    constructor(
        properties?: Partial<Window.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Window.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    above: boolean;
    appears_focused: boolean;
    appearsFocused: boolean;
    decorated: boolean;
    demands_attention: boolean;
    demandsAttention: boolean;
    fullscreen: boolean;
    gtk_app_menu_object_path: string;
    gtkAppMenuObjectPath: string;
    gtk_application_id: string;
    gtkApplicationId: string;
    gtk_application_object_path: string;
    gtkApplicationObjectPath: string;
    gtk_menubar_object_path: string;
    gtkMenubarObjectPath: string;
    gtk_unique_bus_name: string;
    gtkUniqueBusName: string;
    gtk_window_object_path: string;
    gtkWindowObjectPath: string;
    icon: any;
    maximized_horizontally: boolean;
    maximizedHorizontally: boolean;
    maximized_vertically: boolean;
    maximizedVertically: boolean;
    mini_icon: any;
    miniIcon: any;
    minimized: boolean;
    mutter_hints: string;
    mutterHints: string;
    on_all_workspaces: boolean;
    onAllWorkspaces: boolean;
    resizeable: boolean;
    skip_taskbar: boolean;
    skipTaskbar: boolean;
    title: string;
    urgent: boolean;
    user_time: number;
    userTime: number;
    window_type: WindowType;
    windowType: WindowType;
    wm_class: string;
    wmClass: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'focus', callback: (_source: this) => void): number;
    connect_after(signal: 'focus', callback: (_source: this) => void): number;
    emit(signal: 'focus'): void;
    connect(
        signal: 'position-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'position-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'position-changed'): void;
    connect(signal: 'raised', callback: (_source: this) => void): number;
    connect_after(signal: 'raised', callback: (_source: this) => void): number;
    emit(signal: 'raised'): void;
    connect(signal: 'shown', callback: (_source: this) => void): number;
    connect_after(signal: 'shown', callback: (_source: this) => void): number;
    emit(signal: 'shown'): void;
    connect(signal: 'size-changed', callback: (_source: this) => void): number;
    connect_after(
        signal: 'size-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'size-changed'): void;
    connect(signal: 'unmanaged', callback: (_source: this) => void): number;
    connect_after(
        signal: 'unmanaged',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'unmanaged'): void;
    connect(signal: 'unmanaging', callback: (_source: this) => void): number;
    connect_after(
        signal: 'unmanaging',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'unmanaging'): void;
    connect(
        signal: 'workspace-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'workspace-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'workspace-changed'): void;

    // Members

    activate(current_time: number): void;
    activate_with_workspace(current_time: number, workspace: Workspace): void;
    allows_move(): boolean;
    allows_resize(): boolean;
    begin_grab_op(op: GrabOp, frame_action: boolean, timestamp: number): void;
    can_close(): boolean;
    can_maximize(): boolean;
    can_minimize(): boolean;
    can_shade(): boolean;
    change_workspace(workspace: Workspace): void;
    change_workspace_by_index(space_index: number, append: boolean): void;
    check_alive(timestamp: number): void;
    client_rect_to_frame_rect(client_rect: Rectangle): Rectangle;
    compute_group(): void;
    ['delete'](timestamp: number): void;
    find_root_ancestor(): Window;
    focus(timestamp: number): void;
    foreach_ancestor(func: WindowForeachFunc): void;
    foreach_transient(func: WindowForeachFunc): void;
    frame_rect_to_client_rect(frame_rect: Rectangle): Rectangle;
    get_buffer_rect(): Rectangle;
    get_client_machine(): string;
    get_client_type(): WindowClientType;
    get_compositor_private<T = GObject.Object>(): T;
    get_description(): string;
    get_display(): Display;
    get_frame_bounds(): cairo.Region | null;
    get_frame_rect(): Rectangle;
    get_frame_type(): FrameType;
    get_gtk_app_menu_object_path(): string;
    get_gtk_application_id(): string;
    get_gtk_application_object_path(): string;
    get_gtk_menubar_object_path(): string;
    get_gtk_theme_variant(): string;
    get_gtk_unique_bus_name(): string;
    get_gtk_window_object_path(): string;
    get_icon_geometry(): [boolean, Rectangle];
    get_id(): number;
    get_layer(): StackLayer;
    get_maximized(): MaximizeFlags;
    get_monitor(): number;
    get_mutter_hints(): string;
    get_pid(): number;
    get_role(): string;
    get_sandboxed_app_id(): string;
    get_stable_sequence(): number;
    get_startup_id(): string;
    get_tile_match(): Window | null;
    get_title(): string;
    get_transient_for(): Window;
    get_user_time(): number;
    get_window_type(): WindowType;
    get_wm_class(): string;
    get_wm_class_instance(): string;
    get_work_area_all_monitors(): Rectangle;
    get_work_area_current_monitor(): Rectangle;
    get_work_area_for_monitor(which_monitor: number): Rectangle;
    get_workspace(): Workspace;
    group_leader_changed(): void;
    has_focus(): boolean;
    is_above(): boolean;
    is_always_on_all_workspaces(): boolean;
    is_ancestor_of_transient(_transient: Window): boolean;
    is_attached_dialog(): boolean;
    is_client_decorated(): boolean;
    is_fullscreen(): boolean;
    is_hidden(): boolean;
    is_monitor_sized(): boolean;
    is_on_all_workspaces(): boolean;
    is_on_primary_monitor(): boolean;
    is_override_redirect(): boolean;
    is_remote(): boolean;
    is_screen_sized(): boolean;
    is_shaded(): boolean;
    is_skip_taskbar(): boolean;
    kill(): void;
    located_on_workspace(workspace: Workspace): boolean;
    lower(): void;
    make_above(): void;
    make_fullscreen(): void;
    maximize(directions: MaximizeFlags): void;
    minimize(): void;
    move_frame(user_op: boolean, root_x_nw: number, root_y_nw: number): void;
    move_resize_frame(
        user_op: boolean,
        root_x_nw: number,
        root_y_nw: number,
        w: number,
        h: number
    ): void;
    move_to_monitor(monitor: number): void;
    raise(): void;
    set_compositor_private(priv: GObject.Object): void;
    set_demands_attention(): void;
    set_icon_geometry(rect?: Rectangle | null): void;
    shade(timestamp: number): void;
    shove_titlebar_onscreen(): void;
    showing_on_its_workspace(): boolean;
    shutdown_group(): void;
    stick(): void;
    titlebar_is_onscreen(): boolean;
    unmake_above(): void;
    unmake_fullscreen(): void;
    unmaximize(directions: MaximizeFlags): void;
    unminimize(): void;
    unset_demands_attention(): void;
    unshade(timestamp: number): void;
    unstick(): void;
}
export namespace WindowActor {
    export interface ConstructorProperties<
        A extends Clutter.Actor = Clutter.Actor
    > extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;
        meta_window: Window;
        metaWindow: Window;
    }
}
export abstract class WindowActor<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Actor
    implements
        Atk.ImplementorIface,
        Clutter.Animatable,
        Clutter.Container<A>,
        Clutter.Scriptable {
    static $gtype: GObject.GType<WindowActor>;

    constructor(
        properties?: Partial<WindowActor.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<WindowActor.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Properties
    meta_window: Window;
    metaWindow: Window;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'damaged', callback: (_source: this) => void): number;
    connect_after(signal: 'damaged', callback: (_source: this) => void): number;
    emit(signal: 'damaged'): void;
    connect(
        signal: 'effects-completed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'effects-completed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'effects-completed'): void;
    connect(signal: 'first-frame', callback: (_source: this) => void): number;
    connect_after(
        signal: 'first-frame',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'first-frame'): void;
    connect(signal: 'thawed', callback: (_source: this) => void): number;
    connect_after(signal: 'thawed', callback: (_source: this) => void): number;
    emit(signal: 'thawed'): void;

    // Members

    freeze(): void;
    get_image(clip?: cairo.RectangleInt | null): cairo.Surface | null;
    get_meta_window(): Window;
    get_texture(): ShapedTexture;
    is_destroyed(): boolean;
    sync_visibility(): void;
    thaw(): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Clutter.Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Clutter.Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(
        script: Clutter.Script,
        name: string,
        value: any
    ): void;
    vfunc_set_id(id_: string): void;
}
export namespace WindowGroup {
    export interface ConstructorProperties<
        A extends Clutter.Actor = Clutter.Actor
    > extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class WindowGroup<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Actor
    implements
        Atk.ImplementorIface,
        Clutter.Animatable,
        Clutter.Container<A>,
        Clutter.Scriptable {
    static $gtype: GObject.GType<WindowGroup>;

    constructor(
        properties?: Partial<WindowGroup.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<WindowGroup.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Clutter.Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Clutter.Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(
        script: Clutter.Script,
        name: string,
        value: any
    ): void;
    vfunc_set_id(id_: string): void;
}
export namespace Workspace {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        n_windows: number;
        nWindows: number;
        workspace_index: number;
        workspaceIndex: number;
    }
}
export class Workspace extends GObject.Object {
    static $gtype: GObject.GType<Workspace>;

    constructor(
        properties?: Partial<Workspace.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Workspace.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    active: boolean;
    n_windows: number;
    nWindows: number;
    workspace_index: number;
    workspaceIndex: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'window-added',
        callback: (_source: this, object: Window) => void
    ): number;
    connect_after(
        signal: 'window-added',
        callback: (_source: this, object: Window) => void
    ): number;
    emit(signal: 'window-added', object: Window): void;
    connect(
        signal: 'window-removed',
        callback: (_source: this, object: Window) => void
    ): number;
    connect_after(
        signal: 'window-removed',
        callback: (_source: this, object: Window) => void
    ): number;
    emit(signal: 'window-removed', object: Window): void;

    // Members

    activate(timestamp: number): void;
    activate_with_focus(focus_this: Window, timestamp: number): void;
    get_display(): Display;
    get_neighbor(direction: MotionDirection): Workspace;
    get_work_area_all_monitors(): Rectangle;
    get_work_area_for_monitor(which_monitor: number): Rectangle;
    index(): number;
    list_windows(): Window[];
    set_builtin_struts(struts: Strut[]): void;
}
export namespace WorkspaceManager {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        layout_columns: number;
        layoutColumns: number;
        layout_rows: number;
        layoutRows: number;
        n_workspaces: number;
        nWorkspaces: number;
    }
}
export class WorkspaceManager extends GObject.Object {
    static $gtype: GObject.GType<WorkspaceManager>;

    constructor(
        properties?: Partial<WorkspaceManager.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<WorkspaceManager.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    layout_columns: number;
    layoutColumns: number;
    layout_rows: number;
    layoutRows: number;
    n_workspaces: number;
    nWorkspaces: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'active-workspace-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'active-workspace-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'active-workspace-changed'): void;
    connect(
        signal: 'showing-desktop-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'showing-desktop-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'showing-desktop-changed'): void;
    connect(
        signal: 'workspace-added',
        callback: (_source: this, object: number) => void
    ): number;
    connect_after(
        signal: 'workspace-added',
        callback: (_source: this, object: number) => void
    ): number;
    emit(signal: 'workspace-added', object: number): void;
    connect(
        signal: 'workspace-removed',
        callback: (_source: this, object: number) => void
    ): number;
    connect_after(
        signal: 'workspace-removed',
        callback: (_source: this, object: number) => void
    ): number;
    emit(signal: 'workspace-removed', object: number): void;
    connect(
        signal: 'workspace-switched',
        callback: (
            _source: this,
            object: number,
            p0: number,
            p1: MotionDirection
        ) => void
    ): number;
    connect_after(
        signal: 'workspace-switched',
        callback: (
            _source: this,
            object: number,
            p0: number,
            p1: MotionDirection
        ) => void
    ): number;
    emit(
        signal: 'workspace-switched',
        object: number,
        p0: number,
        p1: MotionDirection
    ): void;
    connect(
        signal: 'workspaces-reordered',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'workspaces-reordered',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'workspaces-reordered'): void;

    // Members

    append_new_workspace(activate: boolean, timestamp: number): Workspace;
    get_active_workspace(): Workspace;
    get_active_workspace_index(): number;
    get_n_workspaces(): number;
    get_workspace_by_index(index: number): Workspace | null;
    override_workspace_layout(
        starting_corner: DisplayCorner,
        vertical_layout: boolean,
        n_rows: number,
        n_columns: number
    ): void;
    remove_workspace(workspace: Workspace, timestamp: number): void;
    reorder_workspace(workspace: Workspace, new_index: number): void;
}
export namespace X11Display {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Display extends GObject.Object {
    static $gtype: GObject.GType<X11Display>;

    constructor(
        properties?: Partial<X11Display.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<X11Display.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    clear_stage_input_region(): void;
    get_damage_event_base(): number;
    get_screen_number(): number;
    get_shape_event_base(): number;
    has_shape(): boolean;
    set_cm_selection(): void;
    set_stage_input_region(region: any): void;
    xwindow_is_a_no_focus_window(xwindow: xlib.Window): boolean;
}

export class BarrierEvent {
    static $gtype: GObject.GType<BarrierEvent>;

    constructor(
        properties?: Partial<{
            ref_count?: number;
            event_id?: number;
            dt?: number;
            time?: number;
            x?: number;
            y?: number;
            dx?: number;
            dy?: number;
            released?: boolean;
            grabbed?: boolean;
        }>
    );
    constructor(copy: BarrierEvent);

    // Fields
    ref_count: number;
    event_id: number;
    dt: number;
    time: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    released: boolean;
    grabbed: boolean;
}

export class BarrierPrivate {
    static $gtype: GObject.GType<BarrierPrivate>;

    constructor(copy: BarrierPrivate);
}

export class ButtonLayout {
    static $gtype: GObject.GType<ButtonLayout>;

    constructor(copy: ButtonLayout);

    // Fields
    left_buttons: ButtonFunction[];
    left_buttons_has_spacer: boolean[];
    right_buttons: ButtonFunction[];
    right_buttons_has_spacer: boolean[];
}

export class Edge {
    static $gtype: GObject.GType<Edge>;

    constructor(copy: Edge);

    // Fields
    rect: Rectangle;
    side_type: Side;
    edge_type: EdgeType;
}

export class Frame {
    static $gtype: GObject.GType<Frame>;

    constructor(copy: Frame);
}

export class FrameBorders {
    static $gtype: GObject.GType<FrameBorders>;

    constructor(
        properties?: Partial<{
            visible?: Gtk.Border;
            invisible?: Gtk.Border;
            total?: Gtk.Border;
        }>
    );
    constructor(copy: FrameBorders);

    // Fields
    visible: Gtk.Border;
    invisible: Gtk.Border;
    total: Gtk.Border;

    // Members
    clear(): void;
}

export class KeyBinding {
    static $gtype: GObject.GType<KeyBinding>;

    constructor(copy: KeyBinding);

    // Members
    get_mask(): number;
    get_modifiers(): VirtualModifier;
    get_name(): string;
    is_builtin(): boolean;
    is_reversed(): boolean;
}

export class PluginInfo {
    static $gtype: GObject.GType<PluginInfo>;

    constructor(
        properties?: Partial<{
            name?: string;
            version?: string;
            author?: string;
            license?: string;
            description?: string;
        }>
    );
    constructor(copy: PluginInfo);

    // Fields
    name: string;
    version: string;
    author: string;
    license: string;
    description: string;
}

export class PluginVersion {
    static $gtype: GObject.GType<PluginVersion>;

    constructor(
        properties?: Partial<{
            version_major?: number;
            version_minor?: number;
            version_micro?: number;
            version_api?: number;
        }>
    );
    constructor(copy: PluginVersion);

    // Fields
    version_major: number;
    version_minor: number;
    version_micro: number;
    version_api: number;
}

export class Rectangle {
    static $gtype: GObject.GType<Rectangle>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            width?: number;
            height?: number;
        }>
    );
    constructor(copy: Rectangle);

    // Fields
    x: number;
    y: number;
    width: number;
    height: number;

    // Members
    area(): number;
    contains_rect(inner_rect: Rectangle): boolean;
    copy(): Rectangle;
    could_fit_rect(inner_rect: Rectangle): boolean;
    equal(src2: Rectangle): boolean;
    free(): void;
    horiz_overlap(rect2: Rectangle): boolean;
    intersect(src2: Rectangle): [boolean, Rectangle];
    overlap(rect2: Rectangle): boolean;
    union(rect2: Rectangle): Rectangle;
    vert_overlap(rect2: Rectangle): boolean;
}

export class Settings {
    static $gtype: GObject.GType<Settings>;

    constructor(copy: Settings);

    // Members
    get_font_dpi(): number;
    get_ui_scaling_factor(): number;
}

export class Shadow {
    static $gtype: GObject.GType<Shadow>;

    constructor(copy: Shadow);

    // Members
    get_bounds(
        window_x: number,
        window_y: number,
        window_width: number,
        window_height: number,
        bounds: cairo.RectangleInt
    ): void;
    paint(
        framebuffer: Cogl.Framebuffer,
        window_x: number,
        window_y: number,
        window_width: number,
        window_height: number,
        opacity: number,
        clip: cairo.Region | null,
        clip_strictly: boolean
    ): void;
    ref(): Shadow;
    unref(): void;
}

export class ShadowParams {
    static $gtype: GObject.GType<ShadowParams>;

    constructor(
        properties?: Partial<{
            radius?: number;
            top_fade?: number;
            x_offset?: number;
            y_offset?: number;
            opacity?: number;
        }>
    );
    constructor(copy: ShadowParams);

    // Fields
    radius: number;
    top_fade: number;
    x_offset: number;
    y_offset: number;
    opacity: number;
}

export class Strut {
    static $gtype: GObject.GType<Strut>;

    constructor(copy: Strut);

    // Fields
    rect: Rectangle;
    side: Side;
}

export class Theme {
    static $gtype: GObject.GType<Theme>;

    constructor(copy: Theme);

    // Members
    free(): void;
}

export class WindowShape {
    static $gtype: GObject.GType<WindowShape>;

    constructor(region: cairo.Region);
    constructor(copy: WindowShape);

    // Constructors
    static ['new'](region: cairo.Region): WindowShape;

    // Members
    equal(shape_b: WindowShape): boolean;
    get_borders(
        border_top: number,
        border_right: number,
        border_bottom: number,
        border_left: number
    ): void;
    hash(): number;
    ref(): WindowShape;
    to_region(center_width: number, center_height: number): cairo.Region;
    unref(): void;
}

export interface CloseDialogNamespace {
    $gtype: GObject.GType<CloseDialog>;
    prototype: CloseDialogPrototype;
}
export type CloseDialog = CloseDialogPrototype;
export interface CloseDialogPrototype extends GObject.Object {
    // Properties
    window: Window;

    // Members

    focus(): void;
    hide(): void;
    is_visible(): boolean;
    response(response: CloseDialogResponse): void;
    show(): void;
    vfunc_focus(): void;
    vfunc_hide(): void;
    vfunc_show(): void;
}

export const CloseDialog: CloseDialogNamespace;

export interface InhibitShortcutsDialogNamespace {
    $gtype: GObject.GType<InhibitShortcutsDialog>;
    prototype: InhibitShortcutsDialogPrototype;
}
export type InhibitShortcutsDialog = InhibitShortcutsDialogPrototype;
export interface InhibitShortcutsDialogPrototype extends GObject.Object {
    // Properties
    window: Window;

    // Members

    hide(): void;
    response(response: InhibitShortcutsDialogResponse): void;
    show(): void;
    vfunc_hide(): void;
    vfunc_show(): void;
}

export const InhibitShortcutsDialog: InhibitShortcutsDialogNamespace;

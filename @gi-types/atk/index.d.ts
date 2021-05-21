/**
 * Atk 1.0
 *
 * Generated from 2.36.0
 */

import * as GObject from "@gi-types/gobject";
import * as GLib from "@gi-types/glib";

export const BINARY_AGE: number;
export const INTERFACE_AGE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_MIN_REQUIRED: number;
export function attribute_set_free(attrib_set: AttributeSet): void;
export function focus_tracker_notify(object: Object): void;
export function get_binary_age(): number;
export function get_default_registry(): Registry;
export function get_focus_object(): Object;
export function get_interface_age(): number;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function get_root(): Object;
export function get_toolkit_name(): string;
export function get_toolkit_version(): string;
export function get_version(): string;
export function relation_type_for_name(name: string): RelationType;
export function relation_type_get_name(type: RelationType): string;
export function relation_type_register(name: string): RelationType;
export function remove_focus_tracker(tracker_id: number): void;
export function remove_global_event_listener(listener_id: number): void;
export function remove_key_event_listener(listener_id: number): void;
export function role_for_name(name: string): Role;
export function role_get_localized_name(role: Role): string;
export function role_get_name(role: Role): string;
export function role_register(name: string): Role;
export function state_type_for_name(name: string): StateType;
export function state_type_get_name(type: StateType): string;
export function state_type_register(name: string): StateType;
export function text_attribute_for_name(name: string): TextAttribute;
export function text_attribute_get_name(attr: TextAttribute): string;
export function text_attribute_get_value(attr: TextAttribute, index_: number): string | null;
export function text_attribute_register(name: string): TextAttribute;
export function text_free_ranges(ranges: TextRange[]): void;
export function value_type_get_localized_name(value_type: ValueType): string;
export function value_type_get_name(value_type: ValueType): string;
export type EventListener = (obj: Object) => void;
export type EventListenerInit = () => void;
export type FocusHandler = (object: Object, focus_in: boolean) => void;
export type Function = () => boolean;
export type KeySnoopFunc = (event: KeyEventStruct) => number;
export type PropertyChangeHandler = (obj: Object, vals: PropertyValues) => void;

export namespace CoordType {
    export const $gtype: GObject.GType<CoordType>;
}

export enum CoordType {
    SCREEN = 0,
    WINDOW = 1,
    PARENT = 2,
}

export namespace KeyEventType {
    export const $gtype: GObject.GType<KeyEventType>;
}

export enum KeyEventType {
    PRESS = 0,
    RELEASE = 1,
    LAST_DEFINED = 2,
}

export namespace Layer {
    export const $gtype: GObject.GType<Layer>;
}

export enum Layer {
    INVALID = 0,
    BACKGROUND = 1,
    CANVAS = 2,
    WIDGET = 3,
    MDI = 4,
    POPUP = 5,
    OVERLAY = 6,
    WINDOW = 7,
}

export namespace RelationType {
    export const $gtype: GObject.GType<RelationType>;
}

export enum RelationType {
    NULL = 0,
    CONTROLLED_BY = 1,
    CONTROLLER_FOR = 2,
    LABEL_FOR = 3,
    LABELLED_BY = 4,
    MEMBER_OF = 5,
    NODE_CHILD_OF = 6,
    FLOWS_TO = 7,
    FLOWS_FROM = 8,
    SUBWINDOW_OF = 9,
    EMBEDS = 10,
    EMBEDDED_BY = 11,
    POPUP_FOR = 12,
    PARENT_WINDOW_OF = 13,
    DESCRIBED_BY = 14,
    DESCRIPTION_FOR = 15,
    NODE_PARENT_OF = 16,
    DETAILS = 17,
    DETAILS_FOR = 18,
    ERROR_MESSAGE = 19,
    ERROR_FOR = 20,
    LAST_DEFINED = 21,
}

export namespace Role {
    export const $gtype: GObject.GType<Role>;
}

export enum Role {
    INVALID = 0,
    ACCELERATOR_LABEL = 1,
    ALERT = 2,
    ANIMATION = 3,
    ARROW = 4,
    CALENDAR = 5,
    CANVAS = 6,
    CHECK_BOX = 7,
    CHECK_MENU_ITEM = 8,
    COLOR_CHOOSER = 9,
    COLUMN_HEADER = 10,
    COMBO_BOX = 11,
    DATE_EDITOR = 12,
    DESKTOP_ICON = 13,
    DESKTOP_FRAME = 14,
    DIAL = 15,
    DIALOG = 16,
    DIRECTORY_PANE = 17,
    DRAWING_AREA = 18,
    FILE_CHOOSER = 19,
    FILLER = 20,
    FONT_CHOOSER = 21,
    FRAME = 22,
    GLASS_PANE = 23,
    HTML_CONTAINER = 24,
    ICON = 25,
    IMAGE = 26,
    INTERNAL_FRAME = 27,
    LABEL = 28,
    LAYERED_PANE = 29,
    LIST = 30,
    LIST_ITEM = 31,
    MENU = 32,
    MENU_BAR = 33,
    MENU_ITEM = 34,
    OPTION_PANE = 35,
    PAGE_TAB = 36,
    PAGE_TAB_LIST = 37,
    PANEL = 38,
    PASSWORD_TEXT = 39,
    POPUP_MENU = 40,
    PROGRESS_BAR = 41,
    PUSH_BUTTON = 42,
    RADIO_BUTTON = 43,
    RADIO_MENU_ITEM = 44,
    ROOT_PANE = 45,
    ROW_HEADER = 46,
    SCROLL_BAR = 47,
    SCROLL_PANE = 48,
    SEPARATOR = 49,
    SLIDER = 50,
    SPLIT_PANE = 51,
    SPIN_BUTTON = 52,
    STATUSBAR = 53,
    TABLE = 54,
    TABLE_CELL = 55,
    TABLE_COLUMN_HEADER = 56,
    TABLE_ROW_HEADER = 57,
    TEAR_OFF_MENU_ITEM = 58,
    TERMINAL = 59,
    TEXT = 60,
    TOGGLE_BUTTON = 61,
    TOOL_BAR = 62,
    TOOL_TIP = 63,
    TREE = 64,
    TREE_TABLE = 65,
    UNKNOWN = 66,
    VIEWPORT = 67,
    WINDOW = 68,
    HEADER = 69,
    FOOTER = 70,
    PARAGRAPH = 71,
    RULER = 72,
    APPLICATION = 73,
    AUTOCOMPLETE = 74,
    EDIT_BAR = 75,
    EMBEDDED = 76,
    ENTRY = 77,
    CHART = 78,
    CAPTION = 79,
    DOCUMENT_FRAME = 80,
    HEADING = 81,
    PAGE = 82,
    SECTION = 83,
    REDUNDANT_OBJECT = 84,
    FORM = 85,
    LINK = 86,
    INPUT_METHOD_WINDOW = 87,
    TABLE_ROW = 88,
    TREE_ITEM = 89,
    DOCUMENT_SPREADSHEET = 90,
    DOCUMENT_PRESENTATION = 91,
    DOCUMENT_TEXT = 92,
    DOCUMENT_WEB = 93,
    DOCUMENT_EMAIL = 94,
    COMMENT = 95,
    LIST_BOX = 96,
    GROUPING = 97,
    IMAGE_MAP = 98,
    NOTIFICATION = 99,
    INFO_BAR = 100,
    LEVEL_BAR = 101,
    TITLE_BAR = 102,
    BLOCK_QUOTE = 103,
    AUDIO = 104,
    VIDEO = 105,
    DEFINITION = 106,
    ARTICLE = 107,
    LANDMARK = 108,
    LOG = 109,
    MARQUEE = 110,
    MATH = 111,
    RATING = 112,
    TIMER = 113,
    DESCRIPTION_LIST = 114,
    DESCRIPTION_TERM = 115,
    DESCRIPTION_VALUE = 116,
    STATIC = 117,
    MATH_FRACTION = 118,
    MATH_ROOT = 119,
    SUBSCRIPT = 120,
    SUPERSCRIPT = 121,
    FOOTNOTE = 122,
    CONTENT_DELETION = 123,
    CONTENT_INSERTION = 124,
    MARK = 125,
    SUGGESTION = 126,
    LAST_DEFINED = 127,
}

export namespace ScrollType {
    export const $gtype: GObject.GType<ScrollType>;
}

export enum ScrollType {
    TOP_LEFT = 0,
    BOTTOM_RIGHT = 1,
    TOP_EDGE = 2,
    BOTTOM_EDGE = 3,
    LEFT_EDGE = 4,
    RIGHT_EDGE = 5,
    ANYWHERE = 6,
}

export namespace StateType {
    export const $gtype: GObject.GType<StateType>;
}

export enum StateType {
    INVALID = 0,
    ACTIVE = 1,
    ARMED = 2,
    BUSY = 3,
    CHECKED = 4,
    DEFUNCT = 5,
    EDITABLE = 6,
    ENABLED = 7,
    EXPANDABLE = 8,
    EXPANDED = 9,
    FOCUSABLE = 10,
    FOCUSED = 11,
    HORIZONTAL = 12,
    ICONIFIED = 13,
    MODAL = 14,
    MULTI_LINE = 15,
    MULTISELECTABLE = 16,
    OPAQUE = 17,
    PRESSED = 18,
    RESIZABLE = 19,
    SELECTABLE = 20,
    SELECTED = 21,
    SENSITIVE = 22,
    SHOWING = 23,
    SINGLE_LINE = 24,
    STALE = 25,
    TRANSIENT = 26,
    VERTICAL = 27,
    VISIBLE = 28,
    MANAGES_DESCENDANTS = 29,
    INDETERMINATE = 30,
    TRUNCATED = 31,
    REQUIRED = 32,
    INVALID_ENTRY = 33,
    SUPPORTS_AUTOCOMPLETION = 34,
    SELECTABLE_TEXT = 35,
    DEFAULT = 36,
    ANIMATED = 37,
    VISITED = 38,
    CHECKABLE = 39,
    HAS_POPUP = 40,
    HAS_TOOLTIP = 41,
    READ_ONLY = 42,
    LAST_DEFINED = 43,
}

export namespace TextAttribute {
    export const $gtype: GObject.GType<TextAttribute>;
}

export enum TextAttribute {
    INVALID = 0,
    LEFT_MARGIN = 1,
    RIGHT_MARGIN = 2,
    INDENT = 3,
    INVISIBLE = 4,
    EDITABLE = 5,
    PIXELS_ABOVE_LINES = 6,
    PIXELS_BELOW_LINES = 7,
    PIXELS_INSIDE_WRAP = 8,
    BG_FULL_HEIGHT = 9,
    RISE = 10,
    UNDERLINE = 11,
    STRIKETHROUGH = 12,
    SIZE = 13,
    SCALE = 14,
    WEIGHT = 15,
    LANGUAGE = 16,
    FAMILY_NAME = 17,
    BG_COLOR = 18,
    FG_COLOR = 19,
    BG_STIPPLE = 20,
    FG_STIPPLE = 21,
    WRAP_MODE = 22,
    DIRECTION = 23,
    JUSTIFICATION = 24,
    STRETCH = 25,
    VARIANT = 26,
    STYLE = 27,
    TEXT_POSITION = 28,
    LAST_DEFINED = 29,
}

export namespace TextBoundary {
    export const $gtype: GObject.GType<TextBoundary>;
}

export enum TextBoundary {
    CHAR = 0,
    WORD_START = 1,
    WORD_END = 2,
    SENTENCE_START = 3,
    SENTENCE_END = 4,
    LINE_START = 5,
    LINE_END = 6,
}

export namespace TextClipType {
    export const $gtype: GObject.GType<TextClipType>;
}

export enum TextClipType {
    NONE = 0,
    MIN = 1,
    MAX = 2,
    BOTH = 3,
}

export namespace TextGranularity {
    export const $gtype: GObject.GType<TextGranularity>;
}

export enum TextGranularity {
    CHAR = 0,
    WORD = 1,
    SENTENCE = 2,
    LINE = 3,
    PARAGRAPH = 4,
}

export namespace ValueType {
    export const $gtype: GObject.GType<ValueType>;
}

export enum ValueType {
    VERY_WEAK = 0,
    WEAK = 1,
    ACCEPTABLE = 2,
    STRONG = 3,
    VERY_STRONG = 4,
    VERY_LOW = 5,
    LOW = 6,
    MEDIUM = 7,
    HIGH = 8,
    VERY_HIGH = 9,
    VERY_BAD = 10,
    BAD = 11,
    GOOD = 12,
    VERY_GOOD = 13,
    BEST = 14,
    LAST_DEFINED = 15,
}

export namespace HyperlinkStateFlags {
    export const $gtype: GObject.GType<HyperlinkStateFlags>;
}

export enum HyperlinkStateFlags {
    INLINE = 1,
}
export module GObjectAccessible {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class GObjectAccessible extends Object {
    static $gtype: GObject.GType<GObjectAccessible>;

    constructor(properties?: Partial<GObjectAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GObjectAccessible.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_object<T = GObject.Object>(): T;
    static for_object(obj: GObject.Object): Object;
}
export module Hyperlink {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        end_index: number;
        endIndex: number;
        number_of_anchors: number;
        numberOfAnchors: number;
        selected_link: boolean;
        selectedLink: boolean;
        start_index: number;
        startIndex: number;
    }
}
export class Hyperlink extends GObject.Object implements Action {
    static $gtype: GObject.GType<Hyperlink>;

    constructor(properties?: Partial<Hyperlink.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Hyperlink.ConstructorProperties>, ...args: any[]): void;

    // Properties
    end_index: number;
    endIndex: number;
    number_of_anchors: number;
    numberOfAnchors: number;
    selected_link: boolean;
    selectedLink: boolean;
    start_index: number;
    startIndex: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "link-activated", callback: (_source: this) => void): number;
    connect_after(signal: "link-activated", callback: (_source: this) => void): number;
    emit(signal: "link-activated"): void;

    // Members

    get_end_index(): number;
    get_n_anchors(): number;
    get_object(i: number): Object;
    get_start_index(): number;
    get_uri(i: number): string;
    is_inline(): boolean;
    is_selected_link(): boolean;
    is_valid(): boolean;
    vfunc_get_end_index(): number;
    vfunc_get_n_anchors(): number;
    vfunc_get_object(i: number): Object;
    vfunc_get_start_index(): number;
    vfunc_get_uri(i: number): string;
    vfunc_is_selected_link(): boolean;
    vfunc_is_valid(): boolean;
    vfunc_link_activated(): void;
    vfunc_link_state(): number;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    set_description(i: number, desc: string): boolean;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    vfunc_set_description(i: number, desc: string): boolean;
}
export module Misc {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Misc extends GObject.Object {
    static $gtype: GObject.GType<Misc>;

    constructor(properties?: Partial<Misc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Misc.ConstructorProperties>, ...args: any[]): void;

    // Members

    threads_enter(): void;
    threads_leave(): void;
    vfunc_threads_enter(): void;
    vfunc_threads_leave(): void;
    static get_instance(): Misc;
}
export module NoOpObject {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class NoOpObject
    extends Object
    implements
        Action,
        Component,
        Document,
        EditableText,
        Hypertext,
        Image,
        Selection,
        Table,
        TableCell,
        Text,
        Value,
        Window {
    static $gtype: GObject.GType<NoOpObject>;

    constructor(properties?: Partial<NoOpObject.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NoOpObject.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](obj: GObject.Object): NoOpObject;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    get_description(...args: never[]): never;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    get_name(...args: never[]): never;
    set_description(i: number, desc: string): boolean;
    set_description(...args: never[]): never;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    vfunc_get_description(...args: never[]): never;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    vfunc_get_name(...args: never[]): never;
    vfunc_set_description(i: number, desc: string): boolean;
    vfunc_set_description(...args: never[]): never;
    contains(x: number, y: number, coord_type: CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: CoordType): [number | null, number | null, number | null, number | null];
    get_layer(): Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: CoordType): [number | null, number | null];
    get_position(...args: never[]): never;
    get_size(): [number | null, number | null];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: ScrollType): boolean;
    scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    set_position(x: number, y: number, coord_type: CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: CoordType): [number | null, number | null, number | null, number | null];
    vfunc_get_layer(): Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: CoordType): [number | null, number | null];
    vfunc_get_position(...args: never[]): never;
    vfunc_get_size(): [number | null, number | null];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: ScrollType): boolean;
    vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_attribute_value(attribute_name: string): string | null;
    get_attributes(): AttributeSet;
    get_current_page_number(): number;
    get_document(): any | null;
    get_document_type(): string;
    get_locale(): string;
    get_page_count(): number;
    set_attribute_value(attribute_name: string, attribute_value: string): boolean;
    vfunc_get_current_page_number(): number;
    vfunc_get_document(): any | null;
    vfunc_get_document_attribute_value(attribute_name: string): string | null;
    vfunc_get_document_attributes(): AttributeSet;
    vfunc_get_document_locale(): string;
    vfunc_get_document_type(): string;
    vfunc_get_page_count(): number;
    vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean;
    copy_text(start_pos: number, end_pos: number): void;
    cut_text(start_pos: number, end_pos: number): void;
    delete_text(start_pos: number, end_pos: number): void;
    insert_text(string: string, length: number, position: number): void;
    paste_text(position: number): void;
    set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
    set_text_contents(string: string): void;
    vfunc_copy_text(start_pos: number, end_pos: number): void;
    vfunc_cut_text(start_pos: number, end_pos: number): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_insert_text(string: string, length: number, position: number): void;
    vfunc_paste_text(position: number): void;
    vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
    vfunc_set_text_contents(string: string): void;
    get_link(link_index: number): Hyperlink;
    get_link_index(char_index: number): number;
    get_n_links(): number;
    vfunc_get_link(link_index: number): Hyperlink;
    vfunc_get_link_index(char_index: number): number;
    vfunc_get_n_links(): number;
    vfunc_link_selected(link_index: number): void;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: CoordType): [number | null, number | null];
    get_image_size(): [number | null, number | null];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: CoordType): [number | null, number | null];
    vfunc_get_image_size(): [number | null, number | null];
    vfunc_set_image_description(description: string): boolean;
    add_selection(i: number): boolean;
    add_selection(...args: never[]): never;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_add_selection(...args: never[]): never;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
    add_column_selection(column: number): boolean;
    add_row_selection(row: number): boolean;
    get_caption(): Object | null;
    get_column_at_index(index_: number): number;
    get_column_description(column: number): string;
    get_column_extent_at(row: number, column: number): number;
    get_column_header(column: number): Object | null;
    get_index_at(row: number, column: number): number;
    get_n_columns(): number;
    get_n_rows(): number;
    get_row_at_index(index_: number): number;
    get_row_description(row: number): string | null;
    get_row_extent_at(row: number, column: number): number;
    get_row_header(row: number): Object | null;
    get_selected_columns(selected: number): number;
    get_selected_rows(selected: number): number;
    get_summary(): Object;
    is_column_selected(column: number): boolean;
    is_row_selected(row: number): boolean;
    is_selected(row: number, column: number): boolean;
    ref_at(row: number, column: number): Object;
    remove_column_selection(column: number): boolean;
    remove_row_selection(row: number): boolean;
    set_caption(caption: Object): void;
    set_column_description(column: number, description: string): void;
    set_column_header(column: number, header: Object): void;
    set_row_description(row: number, description: string): void;
    set_row_header(row: number, header: Object): void;
    set_summary(accessible: Object): void;
    vfunc_add_column_selection(column: number): boolean;
    vfunc_add_row_selection(row: number): boolean;
    vfunc_column_deleted(column: number, num_deleted: number): void;
    vfunc_column_inserted(column: number, num_inserted: number): void;
    vfunc_column_reordered(): void;
    vfunc_get_caption(): Object | null;
    vfunc_get_column_at_index(index_: number): number;
    vfunc_get_column_description(column: number): string;
    vfunc_get_column_extent_at(row: number, column: number): number;
    vfunc_get_column_header(column: number): Object | null;
    vfunc_get_index_at(row: number, column: number): number;
    vfunc_get_n_columns(): number;
    vfunc_get_n_rows(): number;
    vfunc_get_row_at_index(index_: number): number;
    vfunc_get_row_description(row: number): string | null;
    vfunc_get_row_extent_at(row: number, column: number): number;
    vfunc_get_row_header(row: number): Object | null;
    vfunc_get_selected_columns(selected: number): number;
    vfunc_get_selected_rows(selected: number): number;
    vfunc_get_summary(): Object;
    vfunc_is_column_selected(column: number): boolean;
    vfunc_is_row_selected(row: number): boolean;
    vfunc_is_selected(row: number, column: number): boolean;
    vfunc_model_changed(): void;
    vfunc_ref_at(row: number, column: number): Object;
    vfunc_remove_column_selection(column: number): boolean;
    vfunc_remove_row_selection(row: number): boolean;
    vfunc_row_deleted(row: number, num_deleted: number): void;
    vfunc_row_inserted(row: number, num_inserted: number): void;
    vfunc_row_reordered(): void;
    vfunc_set_caption(caption: Object): void;
    vfunc_set_column_description(column: number, description: string): void;
    vfunc_set_column_header(column: number, header: Object): void;
    vfunc_set_row_description(row: number, description: string): void;
    vfunc_set_row_header(row: number, header: Object): void;
    vfunc_set_summary(accessible: Object): void;
    get_column_header_cells(): Object[];
    get_column_span(): number;
    get_position(): [boolean, number, number];
    get_position(...args: never[]): never;
    get_row_column_span(): [boolean, number, number, number, number];
    get_row_header_cells(): Object[];
    get_row_span(): number;
    get_table(): Object;
    vfunc_get_column_header_cells(): Object[];
    vfunc_get_column_span(): number;
    vfunc_get_position(): [boolean, number, number];
    vfunc_get_position(...args: never[]): never;
    vfunc_get_row_column_span(): [boolean, number, number, number, number];
    vfunc_get_row_header_cells(): Object[];
    vfunc_get_row_span(): number;
    vfunc_get_table(): Object;
    add_selection(start_offset: number, end_offset: number): boolean;
    add_selection(...args: never[]): never;
    get_bounded_ranges(
        rect: TextRectangle,
        coord_type: CoordType,
        x_clip_type: TextClipType,
        y_clip_type: TextClipType
    ): TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(
        offset: number,
        coords: CoordType
    ): [number | null, number | null, number | null, number | null];
    get_default_attributes(): AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
    get_run_attributes(offset: number): [AttributeSet, number, number];
    get_selection(selection_num: number): [string, number, number];
    get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(...args: never[]): never;
    vfunc_get_bounded_ranges(
        rect: TextRectangle,
        coord_type: CoordType,
        x_clip_type: TextClipType,
        y_clip_type: TextClipType
    ): TextRange[];
    vfunc_get_caret_offset(): number;
    vfunc_get_character_at_offset(offset: number): number;
    vfunc_get_character_count(): number;
    vfunc_get_character_extents(
        offset: number,
        coords: CoordType
    ): [number | null, number | null, number | null, number | null];
    vfunc_get_default_attributes(): AttributeSet;
    vfunc_get_n_selections(): number;
    vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number;
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
    vfunc_get_run_attributes(offset: number): [AttributeSet, number, number];
    vfunc_get_selection(selection_num: number): [string, number, number];
    vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
    vfunc_get_text(start_offset: number, end_offset: number): string;
    vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    vfunc_remove_selection(selection_num: number): boolean;
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
    vfunc_scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: CoordType,
        x: number,
        y: number
    ): boolean;
    vfunc_set_caret_offset(offset: number): boolean;
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_text_attributes_changed(): void;
    vfunc_text_caret_moved(location: number): void;
    vfunc_text_changed(position: number, length: number): void;
    vfunc_text_selection_changed(): void;
    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Range | null;
    get_sub_ranges(): Range[];
    get_value_and_text(): [number, string | null];
    set_current_value(value: any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Range | null;
    vfunc_get_sub_ranges(): Range[];
    vfunc_get_value_and_text(): [number, string | null];
    vfunc_set_current_value(value: any): boolean;
    vfunc_set_value(new_value: number): void;
}
export module NoOpObjectFactory {
    export interface ConstructorProperties extends ObjectFactory.ConstructorProperties {
        [key: string]: any;
    }
}
export class NoOpObjectFactory extends ObjectFactory {
    static $gtype: GObject.GType<NoOpObjectFactory>;

    constructor(properties?: Partial<NoOpObjectFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NoOpObjectFactory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): NoOpObjectFactory;
}
export module Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accessible_component_layer: number;
        accessibleComponentLayer: number;
        accessible_component_mdi_zorder: number;
        accessibleComponentMdiZorder: number;
        accessible_description: string;
        accessibleDescription: string;
        accessible_hypertext_nlinks: number;
        accessibleHypertextNlinks: number;
        accessible_name: string;
        accessibleName: string;
        accessible_parent: Object;
        accessibleParent: Object;
        accessible_role: Role;
        accessibleRole: Role;
        accessible_table_caption: string;
        accessibleTableCaption: string;
        accessible_table_caption_object: Object;
        accessibleTableCaptionObject: Object;
        accessible_table_column_description: string;
        accessibleTableColumnDescription: string;
        accessible_table_column_header: Object;
        accessibleTableColumnHeader: Object;
        accessible_table_row_description: string;
        accessibleTableRowDescription: string;
        accessible_table_row_header: Object;
        accessibleTableRowHeader: Object;
        accessible_table_summary: Object;
        accessibleTableSummary: Object;
        accessible_value: number;
        accessibleValue: number;
    }
}
export class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accessible_component_layer: number;
    accessibleComponentLayer: number;
    accessible_component_mdi_zorder: number;
    accessibleComponentMdiZorder: number;
    accessible_description: string;
    accessibleDescription: string;
    accessible_hypertext_nlinks: number;
    accessibleHypertextNlinks: number;
    accessible_name: string;
    accessibleName: string;
    accessible_parent: Object;
    accessibleParent: Object;
    accessible_role: Role;
    accessibleRole: Role;
    accessible_table_caption: string;
    accessibleTableCaption: string;
    accessible_table_caption_object: Object;
    accessibleTableCaptionObject: Object;
    accessible_table_column_description: string;
    accessibleTableColumnDescription: string;
    accessible_table_column_header: Object;
    accessibleTableColumnHeader: Object;
    accessible_table_row_description: string;
    accessibleTableRowDescription: string;
    accessible_table_row_header: Object;
    accessibleTableRowHeader: Object;
    accessible_table_summary: Object;
    accessibleTableSummary: Object;
    accessible_value: number;
    accessibleValue: number;

    // Fields
    description: string;
    name: string;
    role: Role;
    relation_set: RelationSet;
    layer: Layer;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "active-descendant-changed", callback: (_source: this, arg1: Object) => void): number;
    connect_after(signal: "active-descendant-changed", callback: (_source: this, arg1: Object) => void): number;
    emit(signal: "active-descendant-changed", arg1: Object): void;
    connect(signal: "children-changed", callback: (_source: this, arg1: number, arg2: Object) => void): number;
    connect_after(signal: "children-changed", callback: (_source: this, arg1: number, arg2: Object) => void): number;
    emit(signal: "children-changed", arg1: number, arg2: Object): void;
    connect(signal: "focus-event", callback: (_source: this, arg1: boolean) => void): number;
    connect_after(signal: "focus-event", callback: (_source: this, arg1: boolean) => void): number;
    emit(signal: "focus-event", arg1: boolean): void;
    connect(signal: "property-change", callback: (_source: this, arg1: PropertyValues) => void): number;
    connect_after(signal: "property-change", callback: (_source: this, arg1: PropertyValues) => void): number;
    emit(signal: "property-change", arg1: PropertyValues): void;
    connect(signal: "state-change", callback: (_source: this, arg1: string, arg2: boolean) => void): number;
    connect_after(signal: "state-change", callback: (_source: this, arg1: string, arg2: boolean) => void): number;
    emit(signal: "state-change", arg1: string, arg2: boolean): void;
    connect(signal: "visible-data-changed", callback: (_source: this) => void): number;
    connect_after(signal: "visible-data-changed", callback: (_source: this) => void): number;
    emit(signal: "visible-data-changed"): void;

    // Members

    add_relationship(relationship: RelationType, target: Object): boolean;
    get_accessible_id(): string;
    get_attributes(): AttributeSet;
    get_description(): string;
    get_index_in_parent(): number;
    get_layer(): Layer;
    get_mdi_zorder(): number;
    get_n_accessible_children(): number;
    get_name(): string;
    get_object_locale(): string;
    get_parent(): Object;
    get_role(): Role;
    initialize(data?: any | null): void;
    notify_state_change(state: State, value: boolean): void;
    peek_parent(): Object;
    ref_accessible_child(i: number): Object;
    ref_relation_set(): RelationSet;
    ref_state_set(): StateSet;
    remove_property_change_handler(handler_id: number): void;
    remove_relationship(relationship: RelationType, target: Object): boolean;
    set_accessible_id(name: string): void;
    set_description(description: string): void;
    set_name(name: string): void;
    set_parent(parent: Object): void;
    set_role(role: Role): void;
    vfunc_active_descendant_changed(child?: any | null): void;
    vfunc_children_changed(change_index: number, changed_child?: any | null): void;
    vfunc_focus_event(focus_in: boolean): void;
    vfunc_get_attributes(): AttributeSet;
    vfunc_get_description(): string;
    vfunc_get_index_in_parent(): number;
    vfunc_get_layer(): Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_n_children(): number;
    vfunc_get_name(): string;
    vfunc_get_object_locale(): string;
    vfunc_get_parent(): Object;
    vfunc_get_role(): Role;
    vfunc_initialize(data?: any | null): void;
    vfunc_property_change(values: PropertyValues): void;
    vfunc_ref_relation_set(): RelationSet;
    vfunc_ref_state_set(): StateSet;
    vfunc_remove_property_change_handler(handler_id: number): void;
    vfunc_set_description(description: string): void;
    vfunc_set_name(name: string): void;
    vfunc_set_parent(parent: Object): void;
    vfunc_set_role(role: Role): void;
    vfunc_state_change(name: string, state_set: boolean): void;
    vfunc_visible_data_changed(): void;
}
export module ObjectFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ObjectFactory extends GObject.Object {
    static $gtype: GObject.GType<ObjectFactory>;

    constructor(properties?: Partial<ObjectFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ObjectFactory.ConstructorProperties>, ...args: any[]): void;

    // Members

    create_accessible(obj: GObject.Object): Object;
    get_accessible_type(): GObject.GType;
    invalidate(): void;
    vfunc_invalidate(): void;
}
export module Plug {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Plug extends Object implements Component {
    static $gtype: GObject.GType<Plug>;

    constructor(properties?: Partial<Plug.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Plug.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Plug;

    // Members

    get_id(): string;
    set_child(child: Object): void;
    vfunc_get_object_id(): string;

    // Implemented Members

    contains(x: number, y: number, coord_type: CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: CoordType): [number | null, number | null, number | null, number | null];
    get_layer(): Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: CoordType): [number | null, number | null];
    get_size(): [number | null, number | null];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: ScrollType): boolean;
    scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    set_position(x: number, y: number, coord_type: CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: CoordType): [number | null, number | null, number | null, number | null];
    vfunc_get_layer(): Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: CoordType): [number | null, number | null];
    vfunc_get_size(): [number | null, number | null];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: ScrollType): boolean;
    vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}
export module Registry {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Registry extends GObject.Object {
    static $gtype: GObject.GType<Registry>;

    constructor(properties?: Partial<Registry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Registry.ConstructorProperties>, ...args: any[]): void;

    // Fields
    factory_type_registry: GLib.HashTable<any, any>;
    factory_singleton_cache: GLib.HashTable<any, any>;

    // Members

    get_factory(type: GObject.GType): ObjectFactory;
    get_factory_type(type: GObject.GType): GObject.GType;
    set_factory_type(type: GObject.GType, factory_type: GObject.GType): void;
}
export module Relation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        relation_type: RelationType;
        relationType: RelationType;
        target: GObject.ValueArray;
    }
}
export class Relation extends GObject.Object {
    static $gtype: GObject.GType<Relation>;

    constructor(properties?: Partial<Relation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Relation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    relation_type: RelationType;
    relationType: RelationType;
    target: GObject.ValueArray;

    // Fields
    relationship: RelationType;

    // Constructors

    static ["new"](targets: Object[], relationship: RelationType): Relation;

    // Members

    add_target(target: Object): void;
    get_relation_type(): RelationType;
    get_target(): Object[];
    remove_target(target: Object): boolean;
}
export module RelationSet {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class RelationSet extends GObject.Object {
    static $gtype: GObject.GType<RelationSet>;

    constructor(properties?: Partial<RelationSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RelationSet.ConstructorProperties>, ...args: any[]): void;

    // Fields
    relations: any[];

    // Constructors

    static ["new"](): RelationSet;

    // Members

    add(relation: Relation): void;
    add_relation_by_type(relationship: RelationType, target: Object): void;
    contains(relationship: RelationType): boolean;
    contains_target(relationship: RelationType, target: Object): boolean;
    get_n_relations(): number;
    get_relation(i: number): Relation;
    get_relation_by_type(relationship: RelationType): Relation;
    remove(relation: Relation): void;
}
export module Socket {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Socket extends Object implements Component {
    static $gtype: GObject.GType<Socket>;

    constructor(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Socket;

    // Members

    embed(plug_id: string): void;
    is_occupied(): boolean;
    vfunc_embed(plug_id: string): void;

    // Implemented Members

    contains(x: number, y: number, coord_type: CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: CoordType): [number | null, number | null, number | null, number | null];
    get_layer(): Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: CoordType): [number | null, number | null];
    get_size(): [number | null, number | null];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: ScrollType): boolean;
    scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    set_position(x: number, y: number, coord_type: CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: CoordType): [number | null, number | null, number | null, number | null];
    vfunc_get_layer(): Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: CoordType): [number | null, number | null];
    vfunc_get_size(): [number | null, number | null];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: ScrollType): boolean;
    vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}
export module StateSet {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class StateSet extends GObject.Object {
    static $gtype: GObject.GType<StateSet>;

    constructor(properties?: Partial<StateSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StateSet.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): StateSet;

    // Members

    add_state(type: StateType): boolean;
    add_states(types: StateType[]): void;
    and_sets(compare_set: StateSet): StateSet;
    clear_states(): void;
    contains_state(type: StateType): boolean;
    contains_states(types: StateType[]): boolean;
    is_empty(): boolean;
    or_sets(compare_set: StateSet): StateSet | null;
    remove_state(type: StateType): boolean;
    xor_sets(compare_set: StateSet): StateSet;
}
export module Util {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Util extends GObject.Object {
    static $gtype: GObject.GType<Util>;

    constructor(properties?: Partial<Util.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Util.ConstructorProperties>, ...args: any[]): void;
}

export class Attribute {
    static $gtype: GObject.GType<Attribute>;

    constructor(
        properties?: Partial<{
            name?: string;
            value?: string;
        }>
    );
    constructor(copy: Attribute);

    // Fields
    name: string;
    value: string;

    // Members
    static set_free(attrib_set: AttributeSet): void;
}

export class Implementor {
    static $gtype: GObject.GType<Implementor>;

    constructor(copy: Implementor);

    // Members
    ref_accessible(): Object;
}

export class KeyEventStruct {
    static $gtype: GObject.GType<KeyEventStruct>;

    constructor(
        properties?: Partial<{
            type?: number;
            state?: number;
            keyval?: number;
            length?: number;
            string?: string;
            keycode?: number;
            timestamp?: number;
        }>
    );
    constructor(copy: KeyEventStruct);

    // Fields
    type: number;
    state: number;
    keyval: number;
    length: number;
    string: string;
    keycode: number;
    timestamp: number;
}

export class PropertyValues {
    static $gtype: GObject.GType<PropertyValues>;

    constructor(copy: PropertyValues);

    // Fields
    property_name: string;
    old_value: GObject.Value;
    new_value: GObject.Value;
}

export class Range {
    static $gtype: GObject.GType<Range>;

    constructor(lower_limit: number, upper_limit: number, description: string);
    constructor(copy: Range);

    // Constructors
    static ["new"](lower_limit: number, upper_limit: number, description: string): Range;

    // Members
    copy(): Range;
    free(): void;
    get_description(): string;
    get_lower_limit(): number;
    get_upper_limit(): number;
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
}

export class TextRange {
    static $gtype: GObject.GType<TextRange>;

    constructor(
        properties?: Partial<{
            bounds?: TextRectangle;
            start_offset?: number;
            end_offset?: number;
            content?: string;
        }>
    );
    constructor(copy: TextRange);

    // Fields
    bounds: TextRectangle;
    start_offset: number;
    end_offset: number;
    content: string;
}

export class TextRectangle {
    static $gtype: GObject.GType<TextRectangle>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            width?: number;
            height?: number;
        }>
    );
    constructor(copy: TextRectangle);

    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ActionNamespace {
    $gtype: GObject.GType<Action>;
    prototype: ActionPrototype;
}
export type Action = ActionPrototype;
export interface ActionPrototype extends GObject.Object {
    // Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    set_description(i: number, desc: string): boolean;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    vfunc_set_description(i: number, desc: string): boolean;
}

export const Action: ActionNamespace;

export interface ComponentNamespace {
    $gtype: GObject.GType<Component>;
    prototype: ComponentPrototype;
}
export type Component = ComponentPrototype;
export interface ComponentPrototype extends GObject.Object {
    // Members

    contains(x: number, y: number, coord_type: CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: CoordType): [number | null, number | null, number | null, number | null];
    get_layer(): Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: CoordType): [number | null, number | null];
    get_size(): [number | null, number | null];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: ScrollType): boolean;
    scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    set_position(x: number, y: number, coord_type: CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: CoordType): [number | null, number | null, number | null, number | null];
    vfunc_get_layer(): Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: CoordType): [number | null, number | null];
    vfunc_get_size(): [number | null, number | null];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: ScrollType): boolean;
    vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}

export const Component: ComponentNamespace;

export interface DocumentNamespace {
    $gtype: GObject.GType<Document>;
    prototype: DocumentPrototype;
}
export type Document = DocumentPrototype;
export interface DocumentPrototype extends GObject.Object {
    // Members

    get_attribute_value(attribute_name: string): string | null;
    get_attributes(): AttributeSet;
    get_current_page_number(): number;
    get_document(): any | null;
    get_document_type(): string;
    get_locale(): string;
    get_page_count(): number;
    set_attribute_value(attribute_name: string, attribute_value: string): boolean;
    vfunc_get_current_page_number(): number;
    vfunc_get_document(): any | null;
    vfunc_get_document_attribute_value(attribute_name: string): string | null;
    vfunc_get_document_attributes(): AttributeSet;
    vfunc_get_document_locale(): string;
    vfunc_get_document_type(): string;
    vfunc_get_page_count(): number;
    vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean;
}

export const Document: DocumentNamespace;

export interface EditableTextNamespace {
    $gtype: GObject.GType<EditableText>;
    prototype: EditableTextPrototype;
}
export type EditableText = EditableTextPrototype;
export interface EditableTextPrototype extends GObject.Object {
    // Members

    copy_text(start_pos: number, end_pos: number): void;
    cut_text(start_pos: number, end_pos: number): void;
    delete_text(start_pos: number, end_pos: number): void;
    insert_text(string: string, length: number, position: number): void;
    paste_text(position: number): void;
    set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
    set_text_contents(string: string): void;
    vfunc_copy_text(start_pos: number, end_pos: number): void;
    vfunc_cut_text(start_pos: number, end_pos: number): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_insert_text(string: string, length: number, position: number): void;
    vfunc_paste_text(position: number): void;
    vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
    vfunc_set_text_contents(string: string): void;
}

export const EditableText: EditableTextNamespace;

export interface HyperlinkImplNamespace {
    $gtype: GObject.GType<HyperlinkImpl>;
    prototype: HyperlinkImplPrototype;
}
export type HyperlinkImpl = HyperlinkImplPrototype;
export interface HyperlinkImplPrototype extends GObject.Object {
    // Members

    get_hyperlink(): Hyperlink;
    vfunc_get_hyperlink(): Hyperlink;
}

export const HyperlinkImpl: HyperlinkImplNamespace;

export interface HypertextNamespace {
    $gtype: GObject.GType<Hypertext>;
    prototype: HypertextPrototype;
}
export type Hypertext = HypertextPrototype;
export interface HypertextPrototype extends GObject.Object {
    // Members

    get_link(link_index: number): Hyperlink;
    get_link_index(char_index: number): number;
    get_n_links(): number;
    vfunc_get_link(link_index: number): Hyperlink;
    vfunc_get_link_index(char_index: number): number;
    vfunc_get_n_links(): number;
    vfunc_link_selected(link_index: number): void;
}

export const Hypertext: HypertextNamespace;

export interface ImageNamespace {
    $gtype: GObject.GType<Image>;
    prototype: ImagePrototype;
}
export type Image = ImagePrototype;
export interface ImagePrototype extends GObject.Object {
    // Members

    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: CoordType): [number | null, number | null];
    get_image_size(): [number | null, number | null];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: CoordType): [number | null, number | null];
    vfunc_get_image_size(): [number | null, number | null];
    vfunc_set_image_description(description: string): boolean;
}

export const Image: ImageNamespace;

export interface ImplementorIfaceNamespace {
    $gtype: GObject.GType<ImplementorIface>;
    prototype: ImplementorIfacePrototype;
}
export type ImplementorIface = ImplementorIfacePrototype;
export interface ImplementorIfacePrototype extends GObject.Object {}

export const ImplementorIface: ImplementorIfaceNamespace;

export interface SelectionNamespace {
    $gtype: GObject.GType<Selection>;
    prototype: SelectionPrototype;
}
export type Selection = SelectionPrototype;
export interface SelectionPrototype extends GObject.Object {
    // Members

    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}

export const Selection: SelectionNamespace;

export interface StreamableContentNamespace {
    $gtype: GObject.GType<StreamableContent>;
    prototype: StreamableContentPrototype;
}
export type StreamableContent = StreamableContentPrototype;
export interface StreamableContentPrototype extends GObject.Object {
    // Members

    get_mime_type(i: number): string;
    get_n_mime_types(): number;
    get_stream(mime_type: string): GLib.IOChannel;
    get_uri(mime_type: string): string | null;
    vfunc_get_mime_type(i: number): string;
    vfunc_get_n_mime_types(): number;
    vfunc_get_stream(mime_type: string): GLib.IOChannel;
    vfunc_get_uri(mime_type: string): string | null;
}

export const StreamableContent: StreamableContentNamespace;

export interface TableNamespace {
    $gtype: GObject.GType<Table>;
    prototype: TablePrototype;
}
export type Table = TablePrototype;
export interface TablePrototype extends GObject.Object {
    // Members

    add_column_selection(column: number): boolean;
    add_row_selection(row: number): boolean;
    get_caption(): Object | null;
    get_column_at_index(index_: number): number;
    get_column_description(column: number): string;
    get_column_extent_at(row: number, column: number): number;
    get_column_header(column: number): Object | null;
    get_index_at(row: number, column: number): number;
    get_n_columns(): number;
    get_n_rows(): number;
    get_row_at_index(index_: number): number;
    get_row_description(row: number): string | null;
    get_row_extent_at(row: number, column: number): number;
    get_row_header(row: number): Object | null;
    get_selected_columns(selected: number): number;
    get_selected_rows(selected: number): number;
    get_summary(): Object;
    is_column_selected(column: number): boolean;
    is_row_selected(row: number): boolean;
    is_selected(row: number, column: number): boolean;
    ref_at(row: number, column: number): Object;
    remove_column_selection(column: number): boolean;
    remove_row_selection(row: number): boolean;
    set_caption(caption: Object): void;
    set_column_description(column: number, description: string): void;
    set_column_header(column: number, header: Object): void;
    set_row_description(row: number, description: string): void;
    set_row_header(row: number, header: Object): void;
    set_summary(accessible: Object): void;
    vfunc_add_column_selection(column: number): boolean;
    vfunc_add_row_selection(row: number): boolean;
    vfunc_column_deleted(column: number, num_deleted: number): void;
    vfunc_column_inserted(column: number, num_inserted: number): void;
    vfunc_column_reordered(): void;
    vfunc_get_caption(): Object | null;
    vfunc_get_column_at_index(index_: number): number;
    vfunc_get_column_description(column: number): string;
    vfunc_get_column_extent_at(row: number, column: number): number;
    vfunc_get_column_header(column: number): Object | null;
    vfunc_get_index_at(row: number, column: number): number;
    vfunc_get_n_columns(): number;
    vfunc_get_n_rows(): number;
    vfunc_get_row_at_index(index_: number): number;
    vfunc_get_row_description(row: number): string | null;
    vfunc_get_row_extent_at(row: number, column: number): number;
    vfunc_get_row_header(row: number): Object | null;
    vfunc_get_selected_columns(selected: number): number;
    vfunc_get_selected_rows(selected: number): number;
    vfunc_get_summary(): Object;
    vfunc_is_column_selected(column: number): boolean;
    vfunc_is_row_selected(row: number): boolean;
    vfunc_is_selected(row: number, column: number): boolean;
    vfunc_model_changed(): void;
    vfunc_ref_at(row: number, column: number): Object;
    vfunc_remove_column_selection(column: number): boolean;
    vfunc_remove_row_selection(row: number): boolean;
    vfunc_row_deleted(row: number, num_deleted: number): void;
    vfunc_row_inserted(row: number, num_inserted: number): void;
    vfunc_row_reordered(): void;
    vfunc_set_caption(caption: Object): void;
    vfunc_set_column_description(column: number, description: string): void;
    vfunc_set_column_header(column: number, header: Object): void;
    vfunc_set_row_description(row: number, description: string): void;
    vfunc_set_row_header(row: number, header: Object): void;
    vfunc_set_summary(accessible: Object): void;
}

export const Table: TableNamespace;

export interface TableCellNamespace {
    $gtype: GObject.GType<TableCell>;
    prototype: TableCellPrototype;
}
export type TableCell = TableCellPrototype;
export interface TableCellPrototype extends Object {
    // Members

    get_column_header_cells(): Object[];
    get_column_span(): number;
    get_position(): [boolean, number, number];
    get_row_column_span(): [boolean, number, number, number, number];
    get_row_header_cells(): Object[];
    get_row_span(): number;
    get_table(): Object;
    vfunc_get_column_header_cells(): Object[];
    vfunc_get_column_span(): number;
    vfunc_get_position(): [boolean, number, number];
    vfunc_get_row_column_span(): [boolean, number, number, number, number];
    vfunc_get_row_header_cells(): Object[];
    vfunc_get_row_span(): number;
    vfunc_get_table(): Object;
}

export const TableCell: TableCellNamespace;

export interface TextNamespace {
    $gtype: GObject.GType<Text>;
    prototype: TextPrototype;

    free_ranges(ranges: TextRange[]): void;
}
export type Text = TextPrototype;
export interface TextPrototype extends GObject.Object {
    // Members

    add_selection(start_offset: number, end_offset: number): boolean;
    get_bounded_ranges(
        rect: TextRectangle,
        coord_type: CoordType,
        x_clip_type: TextClipType,
        y_clip_type: TextClipType
    ): TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(
        offset: number,
        coords: CoordType
    ): [number | null, number | null, number | null, number | null];
    get_default_attributes(): AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
    get_run_attributes(offset: number): [AttributeSet, number, number];
    get_selection(selection_num: number): [string, number, number];
    get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(start_offset: number, end_offset: number): boolean;
    vfunc_get_bounded_ranges(
        rect: TextRectangle,
        coord_type: CoordType,
        x_clip_type: TextClipType,
        y_clip_type: TextClipType
    ): TextRange[];
    vfunc_get_caret_offset(): number;
    vfunc_get_character_at_offset(offset: number): number;
    vfunc_get_character_count(): number;
    vfunc_get_character_extents(
        offset: number,
        coords: CoordType
    ): [number | null, number | null, number | null, number | null];
    vfunc_get_default_attributes(): AttributeSet;
    vfunc_get_n_selections(): number;
    vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number;
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
    vfunc_get_run_attributes(offset: number): [AttributeSet, number, number];
    vfunc_get_selection(selection_num: number): [string, number, number];
    vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
    vfunc_get_text(start_offset: number, end_offset: number): string;
    vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
    vfunc_remove_selection(selection_num: number): boolean;
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
    vfunc_scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: CoordType,
        x: number,
        y: number
    ): boolean;
    vfunc_set_caret_offset(offset: number): boolean;
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_text_attributes_changed(): void;
    vfunc_text_caret_moved(location: number): void;
    vfunc_text_changed(position: number, length: number): void;
    vfunc_text_selection_changed(): void;
}

export const Text: TextNamespace;

export interface ValueNamespace {
    $gtype: GObject.GType<Value>;
    prototype: ValuePrototype;
}
export type Value = ValuePrototype;
export interface ValuePrototype extends GObject.Object {
    // Members

    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Range | null;
    get_sub_ranges(): Range[];
    get_value_and_text(): [number, string | null];
    set_current_value(value: any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Range | null;
    vfunc_get_sub_ranges(): Range[];
    vfunc_get_value_and_text(): [number, string | null];
    vfunc_set_current_value(value: any): boolean;
    vfunc_set_value(new_value: number): void;
}

export const Value: ValueNamespace;

export interface WindowNamespace {
    $gtype: GObject.GType<Window>;
    prototype: WindowPrototype;
}
export type Window = WindowPrototype;
export interface WindowPrototype extends Object {}

export const Window: WindowNamespace;

export type AttributeSet = GLib.SList;
export type State = number;

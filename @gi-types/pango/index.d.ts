/**
 * Pango 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "@gi-types/gobject";
import * as HarfBuzz from "@gi-types/harfbuzz";
import * as cairo from "@gi-types/cairo";
import * as GLib from "@gi-types/glib";

export const ANALYSIS_FLAG_CENTERED_BASELINE: number;
export const ANALYSIS_FLAG_IS_ELLIPSIS: number;
export const ANALYSIS_FLAG_NEED_HYPHEN: number;
export const ATTR_INDEX_FROM_TEXT_BEGINNING: number;
export const ENGINE_TYPE_LANG: string;
export const ENGINE_TYPE_SHAPE: string;
export const GLYPH_EMPTY: Glyph;
export const GLYPH_INVALID_INPUT: Glyph;
export const GLYPH_UNKNOWN_FLAG: Glyph;
export const RENDER_TYPE_NONE: string;
export const SCALE: number;
export const UNKNOWN_GLYPH_HEIGHT: number;
export const UNKNOWN_GLYPH_WIDTH: number;
export const VERSION_MIN_REQUIRED: number;
export function attr_allow_breaks_new(allow_breaks: boolean): Attribute;
export function attr_background_alpha_new(alpha: number): Attribute;
export function attr_background_new(red: number, green: number, blue: number): Attribute;
export function attr_fallback_new(enable_fallback: boolean): Attribute;
export function attr_family_new(family: string): Attribute;
export function attr_font_desc_new(desc: FontDescription): Attribute;
export function attr_font_features_new(features: string): Attribute;
export function attr_foreground_alpha_new(alpha: number): Attribute;
export function attr_foreground_new(red: number, green: number, blue: number): Attribute;
export function attr_gravity_hint_new(hint: GravityHint): Attribute;
export function attr_gravity_new(gravity: Gravity): Attribute;
export function attr_insert_hyphens_new(insert_hyphens: boolean): Attribute;
export function attr_language_new(language: Language): Attribute;
export function attr_letter_spacing_new(letter_spacing: number): Attribute;
export function attr_overline_color_new(red: number, green: number, blue: number): Attribute;
export function attr_overline_new(overline: Overline): Attribute;
export function attr_rise_new(rise: number): Attribute;
export function attr_scale_new(scale_factor: number): Attribute;
export function attr_shape_new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
export function attr_shape_new_with_data(
    ink_rect: Rectangle,
    logical_rect: Rectangle,
    data?: any | null,
    copy_func?: AttrDataCopyFunc | null,
    destroy_func?: GLib.DestroyNotify | null
): Attribute;
export function attr_show_new(flags: ShowFlags): Attribute;
export function attr_size_new(size: number): Attribute;
export function attr_size_new_absolute(size: number): Attribute;
export function attr_stretch_new(stretch: Stretch): Attribute;
export function attr_strikethrough_color_new(red: number, green: number, blue: number): Attribute;
export function attr_strikethrough_new(strikethrough: boolean): Attribute;
export function attr_style_new(style: Style): Attribute;
export function attr_type_get_name(type: AttrType): string | null;
export function attr_type_register(name: string): AttrType;
export function attr_underline_color_new(red: number, green: number, blue: number): Attribute;
export function attr_underline_new(underline: Underline): Attribute;
export function attr_variant_new(variant: Variant): Attribute;
export function attr_weight_new(weight: Weight): Attribute;
export function bidi_type_for_unichar(ch: number): BidiType;
export function __break(text: string, length: number, analysis: Analysis, attrs: LogAttr[]): void;
export function default_break(
    text: string,
    length: number,
    analysis: Analysis | null,
    attrs: LogAttr,
    attrs_len: number
): void;
export function extents_to_pixels(inclusive?: Rectangle | null, nearest?: Rectangle | null): void;
export function find_base_dir(text: string, length: number): Direction;
export function find_paragraph_boundary(text: string, length: number): [number, number];
export function font_description_from_string(str: string): FontDescription;
export function get_log_attrs(
    text: string,
    length: number,
    level: number,
    language: Language,
    log_attrs: LogAttr[]
): void;
export function get_mirror_char(ch: number, mirrored_ch: number): boolean;
export function gravity_get_for_matrix(matrix?: Matrix | null): Gravity;
export function gravity_get_for_script(script: Script, base_gravity: Gravity, hint: GravityHint): Gravity;
export function gravity_get_for_script_and_width(
    script: Script,
    wide: boolean,
    base_gravity: Gravity,
    hint: GravityHint
): Gravity;
export function gravity_to_rotation(gravity: Gravity): number;
export function is_zero_width(ch: number): boolean;
export function itemize(
    context: Context,
    text: string,
    start_index: number,
    length: number,
    attrs: AttrList,
    cached_iter?: AttrIterator | null
): Item[];
export function itemize_with_base_dir(
    context: Context,
    base_dir: Direction,
    text: string,
    start_index: number,
    length: number,
    attrs: AttrList,
    cached_iter?: AttrIterator | null
): Item[];
export function language_from_string(language?: string | null): Language | null;
export function language_get_default(): Language;
export function language_get_preferred(): Language | null;
export function log2vis_get_embedding_levels(text: string, length: number, pbase_dir: Direction): number;
export function markup_parser_finish(
    context: GLib.MarkupParseContext
): [boolean, AttrList | null, string | null, number | null];
export function markup_parser_new(accel_marker: number): GLib.MarkupParseContext;
export function parse_enum(
    type: GObject.GType,
    str: string | null,
    warn: boolean
): [boolean, number | null, string | null];
export function parse_markup(
    markup_text: string,
    length: number,
    accel_marker: number
): [boolean, AttrList | null, string | null, number | null];
export function parse_stretch(str: string, warn: boolean): [boolean, Stretch];
export function parse_style(str: string, warn: boolean): [boolean, Style];
export function parse_variant(str: string, warn: boolean): [boolean, Variant];
export function parse_weight(str: string, warn: boolean): [boolean, Weight];
export function quantize_line_geometry(thickness: number, position: number): [number, number];
export function read_line(stream: any | null, str: GLib.String): number;
export function reorder_items(logical_items: Item[]): Item[];
export function scan_int(pos: string): [boolean, string, number];
export function scan_string(pos: string, out: GLib.String): [boolean, string];
export function scan_word(pos: string, out: GLib.String): [boolean, string];
export function script_for_unichar(ch: number): Script;
export function script_get_sample_language(script: Script): Language | null;
export function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void;
export function shape_full(
    item_text: string,
    item_length: number,
    paragraph_text: string | null,
    paragraph_length: number,
    analysis: Analysis,
    glyphs: GlyphString
): void;
export function shape_with_flags(
    item_text: string,
    item_length: number,
    paragraph_text: string | null,
    paragraph_length: number,
    analysis: Analysis,
    glyphs: GlyphString,
    flags: ShapeFlags
): void;
export function skip_space(pos: string): [boolean, string];
export function split_file_list(str: string): string[];
export function tailor_break(
    text: string,
    length: number,
    analysis: Analysis,
    offset: number,
    log_attrs: LogAttr[]
): void;
export function trim_string(str: string): string;
export function unichar_direction(ch: number): Direction;
export function units_from_double(d: number): number;
export function units_to_double(i: number): number;
export function version(): number;
export function version_check(required_major: number, required_minor: number, required_micro: number): string | null;
export function version_string(): string;
export type AttrDataCopyFunc = () => any | null;
export type AttrFilterFunc = (attribute: Attribute) => boolean;
export type FontsetForeachFunc = (fontset: Fontset, font: Font) => boolean;

export namespace Alignment {
    export const $gtype: GObject.GType<Alignment>;
}

export enum Alignment {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
}

export namespace AttrType {
    export const $gtype: GObject.GType<AttrType>;
}

export enum AttrType {
    INVALID = 0,
    LANGUAGE = 1,
    FAMILY = 2,
    STYLE = 3,
    WEIGHT = 4,
    VARIANT = 5,
    STRETCH = 6,
    SIZE = 7,
    FONT_DESC = 8,
    FOREGROUND = 9,
    BACKGROUND = 10,
    UNDERLINE = 11,
    STRIKETHROUGH = 12,
    RISE = 13,
    SHAPE = 14,
    SCALE = 15,
    FALLBACK = 16,
    LETTER_SPACING = 17,
    UNDERLINE_COLOR = 18,
    STRIKETHROUGH_COLOR = 19,
    ABSOLUTE_SIZE = 20,
    GRAVITY = 21,
    GRAVITY_HINT = 22,
    FONT_FEATURES = 23,
    FOREGROUND_ALPHA = 24,
    BACKGROUND_ALPHA = 25,
    ALLOW_BREAKS = 26,
    SHOW = 27,
    INSERT_HYPHENS = 28,
    OVERLINE = 29,
    OVERLINE_COLOR = 30,
}

export namespace BidiType {
    export const $gtype: GObject.GType<BidiType>;
}

export enum BidiType {
    L = 0,
    LRE = 1,
    LRO = 2,
    R = 3,
    AL = 4,
    RLE = 5,
    RLO = 6,
    PDF = 7,
    EN = 8,
    ES = 9,
    ET = 10,
    AN = 11,
    CS = 12,
    NSM = 13,
    BN = 14,
    B = 15,
    S = 16,
    WS = 17,
    ON = 18,
}

export namespace CoverageLevel {
    export const $gtype: GObject.GType<CoverageLevel>;
}

export enum CoverageLevel {
    NONE = 0,
    FALLBACK = 1,
    APPROXIMATE = 2,
    EXACT = 3,
}

export namespace Direction {
    export const $gtype: GObject.GType<Direction>;
}

export enum Direction {
    LTR = 0,
    RTL = 1,
    TTB_LTR = 2,
    TTB_RTL = 3,
    WEAK_LTR = 4,
    WEAK_RTL = 5,
    NEUTRAL = 6,
}

export namespace EllipsizeMode {
    export const $gtype: GObject.GType<EllipsizeMode>;
}

export enum EllipsizeMode {
    NONE = 0,
    START = 1,
    MIDDLE = 2,
    END = 3,
}

export namespace Gravity {
    export const $gtype: GObject.GType<Gravity>;
}

export enum Gravity {
    SOUTH = 0,
    EAST = 1,
    NORTH = 2,
    WEST = 3,
    AUTO = 4,
}

export namespace GravityHint {
    export const $gtype: GObject.GType<GravityHint>;
}

export enum GravityHint {
    NATURAL = 0,
    STRONG = 1,
    LINE = 2,
}

export namespace Overline {
    export const $gtype: GObject.GType<Overline>;
}

export enum Overline {
    NONE = 0,
    SINGLE = 1,
}

export namespace RenderPart {
    export const $gtype: GObject.GType<RenderPart>;
}

export enum RenderPart {
    FOREGROUND = 0,
    BACKGROUND = 1,
    UNDERLINE = 2,
    STRIKETHROUGH = 3,
    OVERLINE = 4,
}

export namespace Script {
    export const $gtype: GObject.GType<Script>;
}

export enum Script {
    INVALID_CODE = -1,
    COMMON = 0,
    INHERITED = 1,
    ARABIC = 2,
    ARMENIAN = 3,
    BENGALI = 4,
    BOPOMOFO = 5,
    CHEROKEE = 6,
    COPTIC = 7,
    CYRILLIC = 8,
    DESERET = 9,
    DEVANAGARI = 10,
    ETHIOPIC = 11,
    GEORGIAN = 12,
    GOTHIC = 13,
    GREEK = 14,
    GUJARATI = 15,
    GURMUKHI = 16,
    HAN = 17,
    HANGUL = 18,
    HEBREW = 19,
    HIRAGANA = 20,
    KANNADA = 21,
    KATAKANA = 22,
    KHMER = 23,
    LAO = 24,
    LATIN = 25,
    MALAYALAM = 26,
    MONGOLIAN = 27,
    MYANMAR = 28,
    OGHAM = 29,
    OLD_ITALIC = 30,
    ORIYA = 31,
    RUNIC = 32,
    SINHALA = 33,
    SYRIAC = 34,
    TAMIL = 35,
    TELUGU = 36,
    THAANA = 37,
    THAI = 38,
    TIBETAN = 39,
    CANADIAN_ABORIGINAL = 40,
    YI = 41,
    TAGALOG = 42,
    HANUNOO = 43,
    BUHID = 44,
    TAGBANWA = 45,
    BRAILLE = 46,
    CYPRIOT = 47,
    LIMBU = 48,
    OSMANYA = 49,
    SHAVIAN = 50,
    LINEAR_B = 51,
    TAI_LE = 52,
    UGARITIC = 53,
    NEW_TAI_LUE = 54,
    BUGINESE = 55,
    GLAGOLITIC = 56,
    TIFINAGH = 57,
    SYLOTI_NAGRI = 58,
    OLD_PERSIAN = 59,
    KHAROSHTHI = 60,
    UNKNOWN = 61,
    BALINESE = 62,
    CUNEIFORM = 63,
    PHOENICIAN = 64,
    PHAGS_PA = 65,
    NKO = 66,
    KAYAH_LI = 67,
    LEPCHA = 68,
    REJANG = 69,
    SUNDANESE = 70,
    SAURASHTRA = 71,
    CHAM = 72,
    OL_CHIKI = 73,
    VAI = 74,
    CARIAN = 75,
    LYCIAN = 76,
    LYDIAN = 77,
    BATAK = 78,
    BRAHMI = 79,
    MANDAIC = 80,
    CHAKMA = 81,
    MEROITIC_CURSIVE = 82,
    MEROITIC_HIEROGLYPHS = 83,
    MIAO = 84,
    SHARADA = 85,
    SORA_SOMPENG = 86,
    TAKRI = 87,
    BASSA_VAH = 88,
    CAUCASIAN_ALBANIAN = 89,
    DUPLOYAN = 90,
    ELBASAN = 91,
    GRANTHA = 92,
    KHOJKI = 93,
    KHUDAWADI = 94,
    LINEAR_A = 95,
    MAHAJANI = 96,
    MANICHAEAN = 97,
    MENDE_KIKAKUI = 98,
    MODI = 99,
    MRO = 100,
    NABATAEAN = 101,
    OLD_NORTH_ARABIAN = 102,
    OLD_PERMIC = 103,
    PAHAWH_HMONG = 104,
    PALMYRENE = 105,
    PAU_CIN_HAU = 106,
    PSALTER_PAHLAVI = 107,
    SIDDHAM = 108,
    TIRHUTA = 109,
    WARANG_CITI = 110,
    AHOM = 111,
    ANATOLIAN_HIEROGLYPHS = 112,
    HATRAN = 113,
    MULTANI = 114,
    OLD_HUNGARIAN = 115,
    SIGNWRITING = 116,
}

export namespace Stretch {
    export const $gtype: GObject.GType<Stretch>;
}

export enum Stretch {
    ULTRA_CONDENSED = 0,
    EXTRA_CONDENSED = 1,
    CONDENSED = 2,
    SEMI_CONDENSED = 3,
    NORMAL = 4,
    SEMI_EXPANDED = 5,
    EXPANDED = 6,
    EXTRA_EXPANDED = 7,
    ULTRA_EXPANDED = 8,
}

export namespace Style {
    export const $gtype: GObject.GType<Style>;
}

export enum Style {
    NORMAL = 0,
    OBLIQUE = 1,
    ITALIC = 2,
}

export namespace TabAlign {
    export const $gtype: GObject.GType<TabAlign>;
}

export enum TabAlign {
    LEFT = 0,
}

export namespace Underline {
    export const $gtype: GObject.GType<Underline>;
}

export enum Underline {
    NONE = 0,
    SINGLE = 1,
    DOUBLE = 2,
    LOW = 3,
    ERROR = 4,
    SINGLE_LINE = 5,
    DOUBLE_LINE = 6,
    ERROR_LINE = 7,
}

export namespace Variant {
    export const $gtype: GObject.GType<Variant>;
}

export enum Variant {
    NORMAL = 0,
    SMALL_CAPS = 1,
}

export namespace Weight {
    export const $gtype: GObject.GType<Weight>;
}

export enum Weight {
    THIN = 100,
    ULTRALIGHT = 200,
    LIGHT = 300,
    SEMILIGHT = 350,
    BOOK = 380,
    NORMAL = 400,
    MEDIUM = 500,
    SEMIBOLD = 600,
    BOLD = 700,
    ULTRABOLD = 800,
    HEAVY = 900,
    ULTRAHEAVY = 1000,
}

export namespace WrapMode {
    export const $gtype: GObject.GType<WrapMode>;
}

export enum WrapMode {
    WORD = 0,
    CHAR = 1,
    WORD_CHAR = 2,
}

export namespace FontMask {
    export const $gtype: GObject.GType<FontMask>;
}

export enum FontMask {
    FAMILY = 1,
    STYLE = 2,
    VARIANT = 4,
    WEIGHT = 8,
    STRETCH = 16,
    SIZE = 32,
    GRAVITY = 64,
    VARIATIONS = 128,
}

export namespace ShapeFlags {
    export const $gtype: GObject.GType<ShapeFlags>;
}

export enum ShapeFlags {
    NONE = 0,
    ROUND_POSITIONS = 1,
}

export namespace ShowFlags {
    export const $gtype: GObject.GType<ShowFlags>;
}

export enum ShowFlags {
    NONE = 0,
    SPACES = 1,
    LINE_BREAKS = 2,
    IGNORABLES = 4,
}
export module Context {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Context extends GObject.Object {
    static $gtype: GObject.GType<Context>;

    constructor(properties?: Partial<Context.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Context.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Context;

    // Members

    changed(): void;
    get_base_dir(): Direction;
    get_base_gravity(): Gravity;
    get_font_description(): FontDescription;
    get_font_map(): FontMap;
    get_gravity(): Gravity;
    get_gravity_hint(): GravityHint;
    get_language(): Language;
    get_matrix(): Matrix | null;
    get_metrics(desc?: FontDescription | null, language?: Language | null): FontMetrics;
    get_round_glyph_positions(): boolean;
    get_serial(): number;
    list_families(): FontFamily[];
    load_font(desc: FontDescription): Font | null;
    load_fontset(desc: FontDescription, language: Language): Fontset | null;
    set_base_dir(direction: Direction): void;
    set_base_gravity(gravity: Gravity): void;
    set_font_description(desc: FontDescription): void;
    set_font_map(font_map: FontMap): void;
    set_gravity_hint(hint: GravityHint): void;
    set_language(language: Language): void;
    set_matrix(matrix?: Matrix | null): void;
    set_round_glyph_positions(round_positions: boolean): void;
}
export module Coverage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Coverage extends GObject.Object {
    static $gtype: GObject.GType<Coverage>;

    constructor(properties?: Partial<Coverage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Coverage.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Coverage;

    // Members

    copy(): Coverage;
    get(index_: number): CoverageLevel;
    max(other: Coverage): void;
    ref(): Coverage;
    set(index_: number, level: CoverageLevel): void;
    set(...args: never[]): never;
    to_bytes(): Uint8Array;
    unref(): void;
    static from_bytes(bytes: Uint8Array | string): Coverage | null;
}
export module Engine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Engine extends GObject.Object {
    static $gtype: GObject.GType<Engine>;

    constructor(properties?: Partial<Engine.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Engine.ConstructorProperties>, ...args: any[]): void;
}
export module EngineLang {
    export interface ConstructorProperties extends Engine.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class EngineLang extends Engine {
    static $gtype: GObject.GType<EngineLang>;

    constructor(properties?: Partial<EngineLang.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EngineLang.ConstructorProperties>, ...args: any[]): void;

    // Members

    vfunc_script_break(text: string, len: number, analysis: Analysis, attrs: LogAttr, attrs_len: number): void;
}
export module EngineShape {
    export interface ConstructorProperties extends Engine.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class EngineShape extends Engine {
    static $gtype: GObject.GType<EngineShape>;

    constructor(properties?: Partial<EngineShape.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EngineShape.ConstructorProperties>, ...args: any[]): void;

    // Members

    vfunc_covers(font: Font, language: Language, wc: number): CoverageLevel;
    vfunc_script_shape(
        font: Font,
        item_text: string,
        item_length: number,
        analysis: Analysis,
        glyphs: GlyphString,
        paragraph_text: string,
        paragraph_length: number
    ): void;
}
export module Font {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Font extends GObject.Object {
    static $gtype: GObject.GType<Font>;

    constructor(properties?: Partial<Font.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Font.ConstructorProperties>, ...args: any[]): void;

    // Members

    describe(): FontDescription;
    describe_with_absolute_size(): FontDescription;
    find_shaper(language: Language, ch: number): EngineShape;
    get_coverage(language: Language): Coverage;
    get_face(): FontFace;
    get_features(num_features: number): [HarfBuzz.feature_t[], number];
    get_font_map(): FontMap | null;
    get_glyph_extents(glyph: Glyph): [Rectangle | null, Rectangle | null];
    get_metrics(language?: Language | null): FontMetrics;
    has_char(wc: number): boolean;
    vfunc_create_hb_font(): HarfBuzz.font_t;
    vfunc_describe(): FontDescription;
    vfunc_describe_absolute(): FontDescription;
    vfunc_get_coverage(language: Language): Coverage;
    vfunc_get_features(num_features: number): [HarfBuzz.feature_t[], number];
    vfunc_get_font_map(): FontMap | null;
    vfunc_get_glyph_extents(glyph: Glyph): [Rectangle | null, Rectangle | null];
    vfunc_get_metrics(language?: Language | null): FontMetrics;
    static descriptions_free(descs?: FontDescription[] | null): void;
}
export module FontFace {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class FontFace extends GObject.Object {
    static $gtype: GObject.GType<FontFace>;

    constructor(properties?: Partial<FontFace.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontFace.ConstructorProperties>, ...args: any[]): void;

    // Members

    describe(): FontDescription;
    get_face_name(): string;
    get_family(): FontFamily;
    is_synthesized(): boolean;
    list_sizes(): number[] | null;
    vfunc_describe(): FontDescription;
    vfunc_get_face_name(): string;
    vfunc_get_family(): FontFamily;
    vfunc_is_synthesized(): boolean;
    vfunc_list_sizes(): number[] | null;
}
export module FontFamily {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class FontFamily extends GObject.Object {
    static $gtype: GObject.GType<FontFamily>;

    constructor(properties?: Partial<FontFamily.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontFamily.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_face(name?: string | null): FontFace | null;
    get_name(): string;
    is_monospace(): boolean;
    is_variable(): boolean;
    list_faces(): FontFace[] | null;
    vfunc_get_face(name?: string | null): FontFace | null;
    vfunc_get_name(): string;
    vfunc_is_monospace(): boolean;
    vfunc_is_variable(): boolean;
    vfunc_list_faces(): FontFace[] | null;
}
export module FontMap {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class FontMap extends GObject.Object {
    static $gtype: GObject.GType<FontMap>;

    constructor(properties?: Partial<FontMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontMap.ConstructorProperties>, ...args: any[]): void;

    // Members

    changed(): void;
    create_context(): Context;
    get_family(name: string): FontFamily;
    get_serial(): number;
    list_families(): FontFamily[];
    load_font(context: Context, desc: FontDescription): Font | null;
    load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null;
    vfunc_changed(): void;
    vfunc_get_family(name: string): FontFamily;
    vfunc_get_serial(): number;
    vfunc_list_families(): FontFamily[];
    vfunc_load_font(context: Context, desc: FontDescription): Font | null;
    vfunc_load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null;
}
export module Fontset {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Fontset extends GObject.Object {
    static $gtype: GObject.GType<Fontset>;

    constructor(properties?: Partial<Fontset.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Fontset.ConstructorProperties>, ...args: any[]): void;

    // Members

    foreach(func: FontsetForeachFunc): void;
    get_font(wc: number): Font;
    get_metrics(): FontMetrics;
    vfunc_foreach(func: FontsetForeachFunc): void;
    vfunc_get_font(wc: number): Font;
    vfunc_get_language(): Language;
    vfunc_get_metrics(): FontMetrics;
}
export module FontsetSimple {
    export interface ConstructorProperties extends Fontset.ConstructorProperties {
        [key: string]: any;
    }
}
export class FontsetSimple extends Fontset {
    static $gtype: GObject.GType<FontsetSimple>;

    constructor(properties?: Partial<FontsetSimple.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontsetSimple.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](language: Language): FontsetSimple;

    // Members

    append(font: Font): void;
    size(): number;
}
export module Layout {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Layout extends GObject.Object {
    static $gtype: GObject.GType<Layout>;

    constructor(properties?: Partial<Layout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Layout.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](context: Context): Layout;

    // Members

    context_changed(): void;
    copy(): Layout;
    get_alignment(): Alignment;
    get_attributes(): AttrList | null;
    get_auto_dir(): boolean;
    get_baseline(): number;
    get_character_count(): number;
    get_context(): Context;
    get_cursor_pos(index_: number): [Rectangle | null, Rectangle | null];
    get_direction(index: number): Direction;
    get_ellipsize(): EllipsizeMode;
    get_extents(): [Rectangle | null, Rectangle | null];
    get_font_description(): FontDescription | null;
    get_height(): number;
    get_indent(): number;
    get_iter(): LayoutIter;
    get_justify(): boolean;
    get_line(line: number): LayoutLine | null;
    get_line_count(): number;
    get_line_readonly(line: number): LayoutLine | null;
    get_line_spacing(): number;
    get_lines(): LayoutLine[];
    get_lines_readonly(): LayoutLine[];
    get_log_attrs(): LogAttr[];
    get_log_attrs_readonly(): LogAttr[];
    get_pixel_extents(): [Rectangle | null, Rectangle | null];
    get_pixel_size(): [number | null, number | null];
    get_serial(): number;
    get_single_paragraph_mode(): boolean;
    get_size(): [number | null, number | null];
    get_spacing(): number;
    get_tabs(): TabArray | null;
    get_text(): string;
    get_unknown_glyphs_count(): number;
    get_width(): number;
    get_wrap(): WrapMode;
    index_to_line_x(index_: number, trailing: boolean): [number | null, number | null];
    index_to_pos(index_: number): Rectangle;
    is_ellipsized(): boolean;
    is_wrapped(): boolean;
    move_cursor_visually(strong: boolean, old_index: number, old_trailing: number, direction: number): [number, number];
    set_alignment(alignment: Alignment): void;
    set_attributes(attrs?: AttrList | null): void;
    set_auto_dir(auto_dir: boolean): void;
    set_ellipsize(ellipsize: EllipsizeMode): void;
    set_font_description(desc?: FontDescription | null): void;
    set_height(height: number): void;
    set_indent(indent: number): void;
    set_justify(justify: boolean): void;
    set_line_spacing(factor: number): void;
    set_markup(markup: string, length: number): void;
    set_markup_with_accel(markup: string, length: number, accel_marker: number): number | null;
    set_single_paragraph_mode(setting: boolean): void;
    set_spacing(spacing: number): void;
    set_tabs(tabs?: TabArray | null): void;
    set_text(text: string, length: number): void;
    set_width(width: number): void;
    set_wrap(wrap: WrapMode): void;
    xy_to_index(x: number, y: number): [boolean, number, number];
}
export module Renderer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Renderer extends GObject.Object {
    static $gtype: GObject.GType<Renderer>;

    constructor(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    matrix: Matrix;

    // Members

    activate(): void;
    deactivate(): void;
    draw_error_underline(x: number, y: number, width: number, height: number): void;
    draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void;
    draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void;
    draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void;
    draw_layout(layout: Layout, x: number, y: number): void;
    draw_layout_line(line: LayoutLine, x: number, y: number): void;
    draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void;
    draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void;
    get_alpha(part: RenderPart): number;
    get_color(part: RenderPart): Color | null;
    get_layout(): Layout | null;
    get_layout_line(): LayoutLine | null;
    get_matrix(): Matrix | null;
    part_changed(part: RenderPart): void;
    set_alpha(part: RenderPart, alpha: number): void;
    set_color(part: RenderPart, color?: Color | null): void;
    set_matrix(matrix?: Matrix | null): void;
    vfunc_begin(): void;
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void;
    vfunc_draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void;
    vfunc_draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void;
    vfunc_draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void;
    vfunc_draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void;
    vfunc_draw_shape(attr: AttrShape, x: number, y: number): void;
    vfunc_draw_trapezoid(
        part: RenderPart,
        y1_: number,
        x11: number,
        x21: number,
        y2: number,
        x12: number,
        x22: number
    ): void;
    vfunc_end(): void;
    vfunc_part_changed(part: RenderPart): void;
    vfunc_prepare_run(run: LayoutRun): void;
}

export class Analysis {
    static $gtype: GObject.GType<Analysis>;

    constructor(copy: Analysis);

    // Fields
    shape_engine: EngineShape;
    lang_engine: EngineLang;
    font: Font;
    level: number;
    gravity: number;
    flags: number;
    script: number;
    language: Language;
    extra_attrs: any[];
}

export class AttrClass {
    static $gtype: GObject.GType<AttrClass>;

    constructor(copy: AttrClass);

    // Fields
    type: AttrType;
}

export class AttrColor {
    static $gtype: GObject.GType<AttrColor>;

    constructor(copy: AttrColor);

    // Fields
    attr: Attribute;
    color: Color;
}

export class AttrFloat {
    static $gtype: GObject.GType<AttrFloat>;

    constructor(copy: AttrFloat);

    // Fields
    attr: Attribute;
    value: number;
}

export class AttrFontDesc {
    static $gtype: GObject.GType<AttrFontDesc>;

    constructor(copy: AttrFontDesc);

    // Fields
    attr: Attribute;
    desc: FontDescription;

    // Members
    static new(desc: FontDescription): Attribute;
}

export class AttrFontFeatures {
    static $gtype: GObject.GType<AttrFontFeatures>;

    constructor(copy: AttrFontFeatures);

    // Fields
    attr: Attribute;
    features: string;

    // Members
    static new(features: string): Attribute;
}

export class AttrInt {
    static $gtype: GObject.GType<AttrInt>;

    constructor(copy: AttrInt);

    // Fields
    attr: Attribute;
    value: number;
}

export class AttrIterator {
    static $gtype: GObject.GType<AttrIterator>;

    constructor(copy: AttrIterator);

    // Members
    copy(): AttrIterator;
    destroy(): void;
    get(type: AttrType): Attribute | null;
    get_attrs(): Attribute[];
    get_font(desc: FontDescription, language?: Language | null, extra_attrs?: Attribute[] | null): void;
    next(): boolean;
    range(): [number, number];
}

export class AttrLanguage {
    static $gtype: GObject.GType<AttrLanguage>;

    constructor(copy: AttrLanguage);

    // Fields
    attr: Attribute;
    value: Language;

    // Members
    static new(language: Language): Attribute;
}

export class AttrList {
    static $gtype: GObject.GType<AttrList>;

    constructor();
    constructor(copy: AttrList);

    // Constructors
    static ["new"](): AttrList;

    // Members
    change(attr: Attribute): void;
    copy(): AttrList | null;
    equal(other_list: AttrList): boolean;
    filter(func: AttrFilterFunc): AttrList | null;
    get_attributes(): Attribute[];
    get_iterator(): AttrIterator;
    insert(attr: Attribute): void;
    insert_before(attr: Attribute): void;
    ref(): AttrList;
    splice(other: AttrList, pos: number, len: number): void;
    unref(): void;
    update(pos: number, remove: number, add: number): void;
}

export class AttrShape {
    static $gtype: GObject.GType<AttrShape>;

    constructor(copy: AttrShape);

    // Fields
    attr: Attribute;
    ink_rect: Rectangle;
    logical_rect: Rectangle;
    data: any;
    copy_func: AttrDataCopyFunc;
    destroy_func: GLib.DestroyNotify;

    // Members
    static new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
    static new_with_data(
        ink_rect: Rectangle,
        logical_rect: Rectangle,
        data?: any | null,
        copy_func?: AttrDataCopyFunc | null,
        destroy_func?: GLib.DestroyNotify | null
    ): Attribute;
}

export class AttrSize {
    static $gtype: GObject.GType<AttrSize>;

    constructor(copy: AttrSize);

    // Fields
    attr: Attribute;
    size: number;
    absolute: number;

    // Members
    static new(size: number): Attribute;
    static new_absolute(size: number): Attribute;
}

export class AttrString {
    static $gtype: GObject.GType<AttrString>;

    constructor(copy: AttrString);

    // Fields
    attr: Attribute;
    value: string;
}

export class Attribute {
    static $gtype: GObject.GType<Attribute>;

    constructor(copy: Attribute);

    // Fields
    klass: AttrClass;
    start_index: number;
    end_index: number;

    // Members
    copy(): Attribute;
    destroy(): void;
    equal(attr2: Attribute): boolean;
    init(klass: AttrClass): void;
}

export class Color {
    static $gtype: GObject.GType<Color>;

    constructor(
        properties?: Partial<{
            red?: number;
            green?: number;
            blue?: number;
        }>
    );
    constructor(copy: Color);

    // Fields
    red: number;
    green: number;
    blue: number;

    // Members
    copy(): Color | null;
    free(): void;
    parse(spec: string): boolean;
    parse_with_alpha(spec: string): [boolean, number | null];
    to_string(): string;
}

export class EngineInfo {
    static $gtype: GObject.GType<EngineInfo>;

    constructor(copy: EngineInfo);

    // Fields
    id: string;
    engine_type: string;
    render_type: string;
    scripts: EngineScriptInfo;
    n_scripts: number;
}

export class EngineScriptInfo {
    static $gtype: GObject.GType<EngineScriptInfo>;

    constructor(copy: EngineScriptInfo);

    // Fields
    script: Script;
    langs: string;
}

export class FontDescription {
    static $gtype: GObject.GType<FontDescription>;

    constructor();
    constructor(copy: FontDescription);

    // Constructors
    static ["new"](): FontDescription;

    // Members
    better_match(old_match: FontDescription | null, new_match: FontDescription): boolean;
    copy(): FontDescription | null;
    copy_static(): FontDescription | null;
    equal(desc2: FontDescription): boolean;
    free(): void;
    get_family(): string | null;
    get_gravity(): Gravity;
    get_set_fields(): FontMask;
    get_size(): number;
    get_size_is_absolute(): boolean;
    get_stretch(): Stretch;
    get_style(): Style;
    get_variant(): Variant;
    get_variations(): string | null;
    get_weight(): Weight;
    hash(): number;
    merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void;
    merge_static(desc_to_merge: FontDescription, replace_existing: boolean): void;
    set_absolute_size(size: number): void;
    set_family(family: string): void;
    set_family_static(family: string): void;
    set_gravity(gravity: Gravity): void;
    set_size(size: number): void;
    set_stretch(stretch: Stretch): void;
    set_style(style: Style): void;
    set_variant(variant: Variant): void;
    set_variations(variations: string): void;
    set_variations_static(variations: string): void;
    set_weight(weight: Weight): void;
    to_filename(): string;
    to_string(): string;
    unset_fields(to_unset: FontMask): void;
    static from_string(str: string): FontDescription;
}

export class FontMetrics {
    static $gtype: GObject.GType<FontMetrics>;

    constructor(
        properties?: Partial<{
            ref_count?: number;
            ascent?: number;
            descent?: number;
            height?: number;
            approximate_char_width?: number;
            approximate_digit_width?: number;
            underline_position?: number;
            underline_thickness?: number;
            strikethrough_position?: number;
            strikethrough_thickness?: number;
        }>
    );
    constructor(copy: FontMetrics);

    // Fields
    ref_count: number;
    ascent: number;
    descent: number;
    height: number;
    approximate_char_width: number;
    approximate_digit_width: number;
    underline_position: number;
    underline_thickness: number;
    strikethrough_position: number;
    strikethrough_thickness: number;

    // Members
    get_approximate_char_width(): number;
    get_approximate_digit_width(): number;
    get_ascent(): number;
    get_descent(): number;
    get_height(): number;
    get_strikethrough_position(): number;
    get_strikethrough_thickness(): number;
    get_underline_position(): number;
    get_underline_thickness(): number;
    ref(): FontMetrics | null;
    unref(): void;
}

export class GlyphGeometry {
    static $gtype: GObject.GType<GlyphGeometry>;

    constructor(copy: GlyphGeometry);

    // Fields
    width: GlyphUnit;
    x_offset: GlyphUnit;
    y_offset: GlyphUnit;
}

export class GlyphInfo {
    static $gtype: GObject.GType<GlyphInfo>;

    constructor(copy: GlyphInfo);

    // Fields
    glyph: Glyph;
    geometry: GlyphGeometry;
    attr: GlyphVisAttr;
}

export class GlyphItem {
    static $gtype: GObject.GType<GlyphItem>;

    constructor(copy: GlyphItem);

    // Fields
    item: Item;
    glyphs: GlyphString;

    // Members
    apply_attrs(text: string, list: AttrList): GlyphItem[];
    copy(): GlyphItem | null;
    free(): void;
    get_logical_widths(text: string, logical_widths: number[]): void;
    letter_space(text: string, log_attrs: LogAttr[], letter_spacing: number): void;
    split(text: string, split_index: number): GlyphItem;
}

export class GlyphItemIter {
    static $gtype: GObject.GType<GlyphItemIter>;

    constructor(copy: GlyphItemIter);

    // Fields
    glyph_item: GlyphItem;
    text: string;
    start_glyph: number;
    start_index: number;
    start_char: number;
    end_glyph: number;
    end_index: number;
    end_char: number;

    // Members
    copy(): GlyphItemIter | null;
    free(): void;
    init_end(glyph_item: GlyphItem, text: string): boolean;
    init_start(glyph_item: GlyphItem, text: string): boolean;
    next_cluster(): boolean;
    prev_cluster(): boolean;
}

export class GlyphString {
    static $gtype: GObject.GType<GlyphString>;

    constructor();
    constructor(copy: GlyphString);

    // Fields
    num_glyphs: number;
    glyphs: GlyphInfo[];
    log_clusters: number;
    space: number;

    // Constructors
    static ["new"](): GlyphString;

    // Members
    copy(): GlyphString | null;
    extents(font: Font): [Rectangle | null, Rectangle | null];
    extents_range(start: number, end: number, font: Font): [Rectangle | null, Rectangle | null];
    free(): void;
    get_logical_widths(text: string, length: number, embedding_level: number, logical_widths: number[]): void;
    get_width(): number;
    index_to_x(text: string, length: number, analysis: Analysis, index_: number, trailing: boolean): number;
    set_size(new_len: number): void;
    x_to_index(text: string, length: number, analysis: Analysis, x_pos: number): [number, number];
}

export class GlyphVisAttr {
    static $gtype: GObject.GType<GlyphVisAttr>;

    constructor(
        properties?: Partial<{
            is_cluster_start?: number;
        }>
    );
    constructor(copy: GlyphVisAttr);

    // Fields
    is_cluster_start: number;
}

export class IncludedModule {
    static $gtype: GObject.GType<IncludedModule>;

    constructor(copy: IncludedModule);
}

export class Item {
    static $gtype: GObject.GType<Item>;

    constructor();
    constructor(copy: Item);

    // Fields
    offset: number;
    length: number;
    num_chars: number;
    analysis: Analysis;

    // Constructors
    static ["new"](): Item;

    // Members
    apply_attrs(iter: AttrIterator): void;
    copy(): Item | null;
    free(): void;
    split(split_index: number, split_offset: number): Item;
}

export class Language {
    static $gtype: GObject.GType<Language>;

    constructor(copy: Language);

    // Members
    get_sample_string(): string;
    get_scripts(): Script[] | null;
    includes_script(script: Script): boolean;
    matches(range_list: string): boolean;
    to_string(): string;
    static from_string(language?: string | null): Language | null;
    static get_default(): Language;
    static get_preferred(): Language | null;
}

export class LayoutIter {
    static $gtype: GObject.GType<LayoutIter>;

    constructor(copy: LayoutIter);

    // Members
    at_last_line(): boolean;
    copy(): LayoutIter | null;
    free(): void;
    get_baseline(): number;
    get_char_extents(): Rectangle;
    get_cluster_extents(): [Rectangle | null, Rectangle | null];
    get_index(): number;
    get_layout(): Layout;
    get_layout_extents(): [Rectangle | null, Rectangle | null];
    get_line(): LayoutLine;
    get_line_extents(): [Rectangle | null, Rectangle | null];
    get_line_readonly(): LayoutLine;
    get_line_yrange(): [number | null, number | null];
    get_run(): LayoutRun | null;
    get_run_extents(): [Rectangle | null, Rectangle | null];
    get_run_readonly(): LayoutRun | null;
    next_char(): boolean;
    next_cluster(): boolean;
    next_line(): boolean;
    next_run(): boolean;
}

export class LayoutLine {
    static $gtype: GObject.GType<LayoutLine>;

    constructor(copy: LayoutLine);

    // Fields
    layout: Layout;
    start_index: number;
    length: number;
    runs: LayoutRun[];
    is_paragraph_start: number;
    resolved_dir: number;

    // Members
    get_extents(): [Rectangle | null, Rectangle | null];
    get_height(): number | null;
    get_pixel_extents(): [Rectangle | null, Rectangle | null];
    get_x_ranges(start_index: number, end_index: number): number[];
    index_to_x(index_: number, trailing: boolean): number;
    ref(): LayoutLine;
    unref(): void;
    x_to_index(x_pos: number): [boolean, number, number];
}

export class LogAttr {
    static $gtype: GObject.GType<LogAttr>;

    constructor(
        properties?: Partial<{
            is_line_break?: number;
            is_mandatory_break?: number;
            is_char_break?: number;
            is_white?: number;
            is_cursor_position?: number;
            is_word_start?: number;
            is_word_end?: number;
            is_sentence_boundary?: number;
            is_sentence_start?: number;
            is_sentence_end?: number;
            backspace_deletes_character?: number;
            is_expandable_space?: number;
            is_word_boundary?: number;
        }>
    );
    constructor(copy: LogAttr);

    // Fields
    is_line_break: number;
    is_mandatory_break: number;
    is_char_break: number;
    is_white: number;
    is_cursor_position: number;
    is_word_start: number;
    is_word_end: number;
    is_sentence_boundary: number;
    is_sentence_start: number;
    is_sentence_end: number;
    backspace_deletes_character: number;
    is_expandable_space: number;
    is_word_boundary: number;
}

export class Map {
    static $gtype: GObject.GType<Map>;

    constructor(copy: Map);
}

export class MapEntry {
    static $gtype: GObject.GType<MapEntry>;

    constructor(copy: MapEntry);
}

export class Matrix {
    static $gtype: GObject.GType<Matrix>;

    constructor(
        properties?: Partial<{
            xx?: number;
            xy?: number;
            yx?: number;
            yy?: number;
            x0?: number;
            y0?: number;
        }>
    );
    constructor(copy: Matrix);

    // Fields
    xx: number;
    xy: number;
    yx: number;
    yy: number;
    x0: number;
    y0: number;

    // Members
    concat(new_matrix: Matrix): void;
    copy(): Matrix | null;
    free(): void;
    get_font_scale_factor(): number;
    get_font_scale_factors(): [number | null, number | null];
    rotate(degrees: number): void;
    scale(scale_x: number, scale_y: number): void;
    transform_distance(dx: number, dy: number): [number, number];
    transform_pixel_rectangle(rect?: Rectangle | null): Rectangle | null;
    transform_point(x: number, y: number): [number, number];
    transform_rectangle(rect?: Rectangle | null): Rectangle | null;
    translate(tx: number, ty: number): void;
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

export class RendererPrivate {
    static $gtype: GObject.GType<RendererPrivate>;

    constructor(copy: RendererPrivate);
}

export class ScriptIter {
    static $gtype: GObject.GType<ScriptIter>;

    constructor(text: string, length: number);
    constructor(copy: ScriptIter);

    // Constructors
    static ["new"](text: string, length: number): ScriptIter;

    // Members
    free(): void;
    get_range(): [string | null, string | null, Script | null];
    next(): boolean;
}

export class TabArray {
    static $gtype: GObject.GType<TabArray>;

    constructor(initial_size: number, positions_in_pixels: boolean);
    constructor(copy: TabArray);

    // Constructors
    static ["new"](initial_size: number, positions_in_pixels: boolean): TabArray;

    // Members
    copy(): TabArray;
    free(): void;
    get_positions_in_pixels(): boolean;
    get_size(): number;
    get_tab(tab_index: number): [TabAlign | null, number | null];
    get_tabs(): [TabAlign | null, number[] | null];
    resize(new_size: number): void;
    set_tab(tab_index: number, alignment: TabAlign, location: number): void;
}
export type Glyph = number;
export type GlyphUnit = number;
export type LayoutRun = GlyphItem;

/**
 * Gst 1.0
 *
 * Generated from 1.0
 */

import * as GLib from "@gi-types/glib";
import * as GModule from "@gi-types/gmodule";
import * as GObject from "@gi-types/gobject";

export const ALLOCATOR_SYSMEM: string;
export const BUFFER_COPY_ALL: BufferCopyFlags;
export const BUFFER_COPY_METADATA: BufferCopyFlags;
export const BUFFER_OFFSET_NONE: number;
export const CAN_INLINE: number;
export const CAPS_FEATURE_MEMORY_SYSTEM_MEMORY: string;
export const CLOCK_TIME_NONE: ClockTime;
export const DEBUG_BG_MASK: number;
export const DEBUG_FG_MASK: number;
export const DEBUG_FORMAT_MASK: number;
export const ELEMENT_FACTORY_KLASS_DECODER: string;
export const ELEMENT_FACTORY_KLASS_DECRYPTOR: string;
export const ELEMENT_FACTORY_KLASS_DEMUXER: string;
export const ELEMENT_FACTORY_KLASS_DEPAYLOADER: string;
export const ELEMENT_FACTORY_KLASS_ENCODER: string;
export const ELEMENT_FACTORY_KLASS_ENCRYPTOR: string;
export const ELEMENT_FACTORY_KLASS_FORMATTER: string;
export const ELEMENT_FACTORY_KLASS_HARDWARE: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_AUDIO: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_IMAGE: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_METADATA: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_SUBTITLE: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_VIDEO: string;
export const ELEMENT_FACTORY_KLASS_MUXER: string;
export const ELEMENT_FACTORY_KLASS_PARSER: string;
export const ELEMENT_FACTORY_KLASS_PAYLOADER: string;
export const ELEMENT_FACTORY_KLASS_SINK: string;
export const ELEMENT_FACTORY_KLASS_SRC: string;
export const ELEMENT_FACTORY_TYPE_ANY: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_AUDIOVIDEO_SINKS: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_AUDIO_ENCODER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DECODABLE: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DECODER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DECRYPTOR: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DEMUXER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DEPAYLOADER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_ENCODER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_ENCRYPTOR: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_FORMATTER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_HARDWARE: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MAX_ELEMENTS: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_ANY: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_AUDIO: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_IMAGE: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_METADATA: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_SUBTITLE: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_VIDEO: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MUXER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_PARSER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_PAYLOADER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_SINK: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_SRC: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_VIDEO_ENCODER: ElementFactoryListType;
export const ELEMENT_METADATA_AUTHOR: string;
export const ELEMENT_METADATA_DESCRIPTION: string;
export const ELEMENT_METADATA_DOC_URI: string;
export const ELEMENT_METADATA_ICON_NAME: string;
export const ELEMENT_METADATA_KLASS: string;
export const ELEMENT_METADATA_LONGNAME: string;
export const EVENT_NUM_SHIFT: number;
export const EVENT_TYPE_BOTH: EventTypeFlags;
export const FLAG_SET_MASK_EXACT: number;
export const FORMAT_PERCENT_MAX: number;
export const FORMAT_PERCENT_SCALE: number;
export const GROUP_ID_INVALID: number;
export const LICENSE_UNKNOWN: string;
export const LOCK_FLAG_READWRITE: LockFlags;
export const MAP_READWRITE: MapFlags;
export const META_TAG_MEMORY_STR: string;
export const MSECOND: ClockTimeDiff;
export const NSECOND: ClockTimeDiff;
export const PARAM_CONDITIONALLY_AVAILABLE: number;
export const PARAM_CONTROLLABLE: number;
export const PARAM_DOC_SHOW_DEFAULT: number;
export const PARAM_MUTABLE_PAUSED: number;
export const PARAM_MUTABLE_PLAYING: number;
export const PARAM_MUTABLE_READY: number;
export const PARAM_USER_SHIFT: number;
export const PROTECTION_SYSTEM_ID_CAPS_FIELD: string;
export const PROTECTION_UNSPECIFIED_SYSTEM_ID: string;
export const QUERY_NUM_SHIFT: number;
export const QUERY_TYPE_BOTH: QueryTypeFlags;
export const SECOND: ClockTimeDiff;
export const SEGMENT_INSTANT_FLAGS: number;
export const SEQNUM_INVALID: number;
export const TAG_ALBUM: string;
export const TAG_ALBUM_ARTIST: string;
export const TAG_ALBUM_ARTIST_SORTNAME: string;
export const TAG_ALBUM_GAIN: string;
export const TAG_ALBUM_PEAK: string;
export const TAG_ALBUM_SORTNAME: string;
export const TAG_ALBUM_VOLUME_COUNT: string;
export const TAG_ALBUM_VOLUME_NUMBER: string;
export const TAG_APPLICATION_DATA: string;
export const TAG_APPLICATION_NAME: string;
export const TAG_ARTIST: string;
export const TAG_ARTIST_SORTNAME: string;
export const TAG_ATTACHMENT: string;
export const TAG_AUDIO_CODEC: string;
export const TAG_BEATS_PER_MINUTE: string;
export const TAG_BITRATE: string;
export const TAG_CODEC: string;
export const TAG_COMMENT: string;
export const TAG_COMPOSER: string;
export const TAG_COMPOSER_SORTNAME: string;
export const TAG_CONDUCTOR: string;
export const TAG_CONTACT: string;
export const TAG_CONTAINER_FORMAT: string;
export const TAG_COPYRIGHT: string;
export const TAG_COPYRIGHT_URI: string;
export const TAG_DATE: string;
export const TAG_DATE_TIME: string;
export const TAG_DESCRIPTION: string;
export const TAG_DEVICE_MANUFACTURER: string;
export const TAG_DEVICE_MODEL: string;
export const TAG_DURATION: string;
export const TAG_ENCODED_BY: string;
export const TAG_ENCODER: string;
export const TAG_ENCODER_VERSION: string;
export const TAG_EXTENDED_COMMENT: string;
export const TAG_GENRE: string;
export const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string;
export const TAG_GEO_LOCATION_CITY: string;
export const TAG_GEO_LOCATION_COUNTRY: string;
export const TAG_GEO_LOCATION_ELEVATION: string;
export const TAG_GEO_LOCATION_HORIZONTAL_ERROR: string;
export const TAG_GEO_LOCATION_LATITUDE: string;
export const TAG_GEO_LOCATION_LONGITUDE: string;
export const TAG_GEO_LOCATION_MOVEMENT_DIRECTION: string;
export const TAG_GEO_LOCATION_MOVEMENT_SPEED: string;
export const TAG_GEO_LOCATION_NAME: string;
export const TAG_GEO_LOCATION_SUBLOCATION: string;
export const TAG_GROUPING: string;
export const TAG_HOMEPAGE: string;
export const TAG_IMAGE: string;
export const TAG_IMAGE_ORIENTATION: string;
export const TAG_INTERPRETED_BY: string;
export const TAG_ISRC: string;
export const TAG_KEYWORDS: string;
export const TAG_LANGUAGE_CODE: string;
export const TAG_LANGUAGE_NAME: string;
export const TAG_LICENSE: string;
export const TAG_LICENSE_URI: string;
export const TAG_LOCATION: string;
export const TAG_LYRICS: string;
export const TAG_MAXIMUM_BITRATE: string;
export const TAG_MIDI_BASE_NOTE: string;
export const TAG_MINIMUM_BITRATE: string;
export const TAG_NOMINAL_BITRATE: string;
export const TAG_ORGANIZATION: string;
export const TAG_PERFORMER: string;
export const TAG_PREVIEW_IMAGE: string;
export const TAG_PRIVATE_DATA: string;
export const TAG_PUBLISHER: string;
export const TAG_REFERENCE_LEVEL: string;
export const TAG_SERIAL: string;
export const TAG_SHOW_EPISODE_NUMBER: string;
export const TAG_SHOW_NAME: string;
export const TAG_SHOW_SEASON_NUMBER: string;
export const TAG_SHOW_SORTNAME: string;
export const TAG_SUBTITLE_CODEC: string;
export const TAG_TITLE: string;
export const TAG_TITLE_SORTNAME: string;
export const TAG_TRACK_COUNT: string;
export const TAG_TRACK_GAIN: string;
export const TAG_TRACK_NUMBER: string;
export const TAG_TRACK_PEAK: string;
export const TAG_USER_RATING: string;
export const TAG_VERSION: string;
export const TAG_VIDEO_CODEC: string;
export const TOC_REPEAT_COUNT_INFINITE: number;
export const URI_NO_PORT: number;
export const USECOND: ClockTimeDiff;
export const VALUE_EQUAL: number;
export const VALUE_GREATER_THAN: number;
export const VALUE_LESS_THAN: number;
export const VALUE_UNORDERED: number;
export const VERSION_MAJOR: number;
export const VERSION_MICRO: number;
export const VERSION_MINOR: number;
export const VERSION_NANO: number;
export function buffer_get_max_memory(): number;
export function caps_features_from_string(features: string): CapsFeatures | null;
export function caps_from_string(string: string): Caps | null;
export function core_error_quark(): GLib.Quark;
export function debug_add_log_function(func: LogFunction): void;
export function debug_add_ring_buffer_logger(max_size_per_thread: number, thread_timeout: number): void;
export function debug_bin_to_dot_data(bin: Bin, details: DebugGraphDetails): string;
export function debug_bin_to_dot_file(bin: Bin, details: DebugGraphDetails, file_name: string): void;
export function debug_bin_to_dot_file_with_ts(bin: Bin, details: DebugGraphDetails, file_name: string): void;
export function debug_construct_term_color(colorinfo: number): string;
export function debug_construct_win_color(colorinfo: number): number;
export function debug_get_all_categories(): DebugCategory[];
export function debug_get_color_mode(): DebugColorMode;
export function debug_get_default_threshold(): DebugLevel;
export function debug_get_stack_trace(flags: StackTraceFlags): string | null;
export function debug_is_active(): boolean;
export function debug_is_colored(): boolean;
export function debug_level_get_name(level: DebugLevel): string;
export function debug_log_default(
    category: DebugCategory,
    level: DebugLevel,
    file: string,
    _function: string,
    line: number,
    object: GObject.Object | null,
    message: DebugMessage,
    user_data?: any | null
): void;
export function debug_log_get_line(
    category: DebugCategory,
    level: DebugLevel,
    file: string,
    _function: string,
    line: number,
    object: GObject.Object | null,
    message: DebugMessage
): string;
export function debug_print_stack_trace(): void;
export function debug_remove_log_function(func?: LogFunction | null): number;
export function debug_remove_log_function_by_data(data?: any | null): number;
export function debug_remove_ring_buffer_logger(): void;
export function debug_ring_buffer_logger_get_logs(): string[];
export function debug_set_active(active: boolean): void;
export function debug_set_color_mode(mode: DebugColorMode): void;
export function debug_set_color_mode_from_string(mode: string): void;
export function debug_set_colored(colored: boolean): void;
export function debug_set_default_threshold(level: DebugLevel): void;
export function debug_set_threshold_for_name(name: string, level: DebugLevel): void;
export function debug_set_threshold_from_string(list: string, reset: boolean): void;
export function debug_unset_threshold_for_name(name: string): void;
export function deinit(): void;
export function dynamic_type_register(plugin: Plugin, type: GObject.GType): boolean;
export function error_get_message(domain: GLib.Quark, code: number): string;
export function event_type_get_flags(type: EventType): EventTypeFlags;
export function event_type_get_name(type: EventType): string;
export function event_type_to_quark(type: EventType): GLib.Quark;
export function filename_to_uri(filename: string): string;
export function flow_get_name(ret: FlowReturn): string;
export function flow_to_quark(ret: FlowReturn): GLib.Quark;
export function format_get_by_nick(nick: string): Format;
export function format_get_details(format: Format): FormatDefinition | null;
export function format_get_name(format: Format): string | null;
export function format_iterate_definitions(): Iterator;
export function format_register(nick: string, description: string): Format;
export function format_to_quark(format: Format): GLib.Quark;
export function formats_contains(formats: Format[], format: Format): boolean;
export function get_main_executable_path(): string | null;
export function init(argv?: string[] | null): string[] | null;
export function init_check(argv?: string[] | null): [boolean, string[] | null];
export function is_caps_features(obj?: any | null): boolean;
export function is_initialized(): boolean;
export function library_error_quark(): GLib.Quark;
export function message_type_get_name(type: MessageType): string;
export function message_type_to_quark(type: MessageType): GLib.Quark;
export function meta_api_type_get_tags(api: GObject.GType): string[];
export function meta_api_type_has_tag(api: GObject.GType, tag: GLib.Quark): boolean;
export function meta_api_type_register(api: string, tags: string[]): GObject.GType;
export function meta_get_info(impl: string): MetaInfo | null;
export function meta_register(
    api: GObject.GType,
    impl: string,
    size: number,
    init_func: MetaInitFunction,
    free_func: MetaFreeFunction,
    transform_func: MetaTransformFunction
): MetaInfo | null;
export function mini_object_replace(
    olddata?: MiniObject | null,
    newdata?: MiniObject | null
): [boolean, MiniObject | null];
export function mini_object_take(olddata: MiniObject, newdata: MiniObject): [boolean, MiniObject];
export function pad_mode_get_name(mode: PadMode): string;
export function param_spec_array(
    name: string,
    nick: string,
    blurb: string,
    element_spec: GObject.ParamSpec,
    flags: GObject.ParamFlags
): GObject.ParamSpec;
export function param_spec_fraction(
    name: string,
    nick: string,
    blurb: string,
    min_num: number,
    min_denom: number,
    max_num: number,
    max_denom: number,
    default_num: number,
    default_denom: number,
    flags: GObject.ParamFlags
): GObject.ParamSpec | null;
export function parent_buffer_meta_api_get_type(): GObject.GType;
export function parent_buffer_meta_get_info(): MetaInfo;
export function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: boolean): Bin;
export function parse_bin_from_description_full(
    bin_description: string,
    ghost_unlinked_pads: boolean,
    context: ParseContext | null,
    flags: ParseFlags
): Element;
export function parse_error_quark(): GLib.Quark;
export function parse_launch(pipeline_description: string): Element;
export function parse_launch_full(
    pipeline_description: string,
    context: ParseContext | null,
    flags: ParseFlags
): Element;
export function parse_launchv(argv: string[]): Element;
export function parse_launchv_full(argv: string[], context: ParseContext | null, flags: ParseFlags): Element;
export function plugin_error_quark(): GLib.Quark;
export function preset_get_app_dir(): string | null;
export function preset_set_app_dir(app_dir: string): boolean;
export function protection_filter_systems_by_available_decryptors(system_identifiers: string[]): string[] | null;
export function protection_meta_api_get_type(): GObject.GType;
export function protection_meta_get_info(): MetaInfo;
export function protection_select_system(system_identifiers: string[]): string | null;
export function query_type_get_flags(type: QueryType): QueryTypeFlags;
export function query_type_get_name(type: QueryType): string;
export function query_type_to_quark(type: QueryType): GLib.Quark;
export function reference_timestamp_meta_api_get_type(): GObject.GType;
export function reference_timestamp_meta_get_info(): MetaInfo;
export function resource_error_quark(): GLib.Quark;
export function segtrap_is_enabled(): boolean;
export function segtrap_set_enabled(enabled: boolean): void;
export function state_change_get_name(transition: StateChange): string;
export function static_caps_get_type(): GObject.GType;
export function static_pad_template_get_type(): GObject.GType;
export function stream_error_quark(): GLib.Quark;
export function stream_type_get_name(stype: StreamType): string;
export function structure_take(oldstr_ptr?: Structure | null, newstr?: Structure | null): [boolean, Structure | null];
export function tag_exists(tag: string): boolean;
export function tag_get_description(tag: string): string | null;
export function tag_get_flag(tag: string): TagFlag;
export function tag_get_nick(tag: string): string | null;
export function tag_get_type(tag: string): GObject.GType;
export function tag_is_fixed(tag: string): boolean;
export function tag_list_copy_value(list: TagList, tag: string): [boolean, unknown];
export function tag_merge_strings_with_comma(src: any): unknown;
export function tag_merge_use_first(src: any): unknown;
export function toc_entry_type_get_nick(type: TocEntryType): string;
export function tracing_get_active_tracers(): Tracer[];
export function tracing_register_hook(tracer: Tracer, detail: string, func: GObject.Callback): void;
export function type_find_get_type(): GObject.GType;
export function type_find_register(
    plugin: Plugin | null,
    name: string,
    rank: number,
    func: TypeFindFunction,
    extensions?: string | null,
    possible_caps?: Caps | null
): boolean;
export function type_is_plugin_api(type: GObject.GType): [boolean, PluginAPIFlags | null];
export function type_mark_as_plugin_api(type: GObject.GType, flags: PluginAPIFlags): void;
export function update_registry(): boolean;
export function uri_construct(protocol: string, location: string): string;
export function uri_error_quark(): GLib.Quark;
export function uri_from_string(uri: string): Uri | null;
export function uri_from_string_escaped(uri: string): Uri | null;
export function uri_get_location(uri: string): string | null;
export function uri_get_protocol(uri: string): string | null;
export function uri_has_protocol(uri: string, protocol: string): boolean;
export function uri_is_valid(uri: string): boolean;
export function uri_join_strings(base_uri: string, ref_uri: string): string;
export function uri_protocol_is_supported(type: URIType, protocol: string): boolean;
export function uri_protocol_is_valid(protocol: string): boolean;
export function util_array_binary_search(
    array: any | null,
    num_elements: number,
    element_size: number,
    search_func: GLib.CompareDataFunc,
    mode: SearchMode,
    search_data?: any | null
): any | null;
export function util_double_to_fraction(src: number): [number, number];
export function util_dump_buffer(buf: Buffer): void;
export function util_dump_mem(mem: Uint8Array | string): void;
export function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number, number];
export function util_fraction_compare(a_n: number, a_d: number, b_n: number, b_d: number): number;
export function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number, number];
export function util_fraction_to_double(src_n: number, src_d: number): number;
export function util_gdouble_to_guint64(value: number): number;
export function util_get_object_array(object: GObject.Object, name: string): [boolean, GObject.ValueArray];
export function util_get_timestamp(): ClockTime;
export function util_greatest_common_divisor(a: number, b: number): number;
export function util_greatest_common_divisor_int64(a: number, b: number): number;
export function util_group_id_next(): number;
export function util_guint64_to_gdouble(value: number): number;
export function util_seqnum_compare(s1: number, s2: number): number;
export function util_seqnum_next(): number;
export function util_set_object_arg(object: GObject.Object, name: string, value: string): void;
export function util_set_object_array(object: GObject.Object, name: string, array: GObject.ValueArray): boolean;
export function util_set_value_from_string(value_str: string): unknown;
export function util_uint64_scale(val: number, num: number, denom: number): number;
export function util_uint64_scale_ceil(val: number, num: number, denom: number): number;
export function util_uint64_scale_int(val: number, num: number, denom: number): number;
export function util_uint64_scale_int_ceil(val: number, num: number, denom: number): number;
export function util_uint64_scale_int_round(val: number, num: number, denom: number): number;
export function util_uint64_scale_round(val: number, num: number, denom: number): number;
export function value_can_compare(value1: any, value2: any): boolean;
export function value_can_intersect(value1: any, value2: any): boolean;
export function value_can_subtract(minuend: any, subtrahend: any): boolean;
export function value_can_union(value1: any, value2: any): boolean;
export function value_compare(value1: any, value2: any): number;
export function value_deserialize(src: string): [boolean, unknown];
export function value_fixate(dest: any, src: any): boolean;
export function value_fraction_multiply(product: any, factor1: any, factor2: any): boolean;
export function value_fraction_subtract(dest: any, minuend: any, subtrahend: any): boolean;
export function value_get_bitmask(value: any): number;
export function value_get_caps(value: any): Caps;
export function value_get_caps_features(value: any): CapsFeatures;
export function value_get_double_range_max(value: any): number;
export function value_get_double_range_min(value: any): number;
export function value_get_flagset_flags(value: any): number;
export function value_get_flagset_mask(value: any): number;
export function value_get_fraction_denominator(value: any): number;
export function value_get_fraction_numerator(value: any): number;
export function value_get_fraction_range_max(value: any): GObject.Value | null;
export function value_get_fraction_range_min(value: any): GObject.Value | null;
export function value_get_int64_range_max(value: any): number;
export function value_get_int64_range_min(value: any): number;
export function value_get_int64_range_step(value: any): number;
export function value_get_int_range_max(value: any): number;
export function value_get_int_range_min(value: any): number;
export function value_get_int_range_step(value: any): number;
export function value_get_structure(value: any): Structure;
export function value_init_and_copy(src: any): unknown;
export function value_intersect(value1: any, value2: any): [boolean, GObject.Value | null];
export function value_is_fixed(value: any): boolean;
export function value_is_subset(value1: any, value2: any): boolean;
export function value_register(table: ValueTable): void;
export function value_serialize(value: any): string | null;
export function value_set_bitmask(value: any, bitmask: number): void;
export function value_set_caps(value: any, caps: Caps): void;
export function value_set_caps_features(value: any, features: CapsFeatures): void;
export function value_set_double_range(value: any, start: number, end: number): void;
export function value_set_flagset(value: any, flags: number, mask: number): void;
export function value_set_fraction(value: any, numerator: number, denominator: number): void;
export function value_set_fraction_range(value: any, start: any, end: any): void;
export function value_set_fraction_range_full(
    value: any,
    numerator_start: number,
    denominator_start: number,
    numerator_end: number,
    denominator_end: number
): void;
export function value_set_int64_range(value: any, start: number, end: number): void;
export function value_set_int64_range_step(value: any, start: number, end: number, step: number): void;
export function value_set_int_range(value: any, start: number, end: number): void;
export function value_set_int_range_step(value: any, start: number, end: number, step: number): void;
export function value_set_structure(value: any, structure: Structure): void;
export function value_subtract(minuend: any, subtrahend: any): [boolean, GObject.Value | null];
export function value_union(value1: any, value2: any): [boolean, unknown];
export function version(): [number, number, number, number];
export function version_string(): string;
export type BufferForeachMetaFunc = (buffer: Buffer) => boolean;
export type BufferListFunc = (idx: number) => boolean;
export type BusFunc = (bus: Bus, message: Message) => boolean;
export type BusSyncHandler = (bus: Bus, message: Message) => BusSyncReply;
export type CapsFilterMapFunc = (features: CapsFeatures, structure: Structure) => boolean;
export type CapsForeachFunc = (features: CapsFeatures, structure: Structure) => boolean;
export type CapsMapFunc = (features: CapsFeatures, structure: Structure) => boolean;
export type ClockCallback = (clock: Clock, time: ClockTime, id: ClockID) => boolean;
export type ControlBindingConvert = (binding: ControlBinding, src_value: number, dest_value: any) => void;
export type ControlSourceGetValue = (self: ControlSource, timestamp: ClockTime, value: number) => boolean;
export type ControlSourceGetValueArray = (
    self: ControlSource,
    timestamp: ClockTime,
    interval: ClockTime,
    n_values: number,
    values: number
) => boolean;
export type DebugFuncPtr = () => void;
export type ElementCallAsyncFunc = (element: Element) => void;
export type ElementForeachPadFunc = (element: Element, pad: Pad) => boolean;
export type IteratorCopyFunction = (it: Iterator, copy: Iterator) => void;
export type IteratorFoldFunction = (item: any, ret: any) => boolean;
export type IteratorForeachFunction = (item: any) => void;
export type IteratorFreeFunction = (it: Iterator) => void;
export type IteratorItemFunction = (it: Iterator, item: any) => IteratorItem;
export type IteratorNextFunction = (it: Iterator, result: any) => IteratorResult;
export type IteratorResyncFunction = (it: Iterator) => void;
export type LogFunction<A = GObject.Object> = (
    category: DebugCategory,
    level: DebugLevel,
    file: string,
    _function: string,
    line: number,
    object: A,
    message: DebugMessage
) => void;
export type MemoryCopyFunction = (mem: Memory, offset: number, size: number) => Memory;
export type MemoryIsSpanFunction = (mem1: Memory, mem2: Memory, offset: number) => boolean;
export type MemoryMapFullFunction = (mem: Memory, info: MapInfo, maxsize: number) => any | null;
export type MemoryMapFunction = (mem: Memory, maxsize: number, flags: MapFlags) => any | null;
export type MemoryShareFunction = (mem: Memory, offset: number, size: number) => Memory;
export type MemoryUnmapFullFunction = (mem: Memory, info: MapInfo) => void;
export type MemoryUnmapFunction = (mem: Memory) => void;
export type MetaFreeFunction = (meta: Meta, buffer: Buffer) => void;
export type MetaInitFunction = (meta: Meta, params: any | null, buffer: Buffer) => boolean;
export type MetaTransformFunction = (
    transbuf: Buffer,
    meta: Meta,
    buffer: Buffer,
    type: GLib.Quark,
    data?: any | null
) => boolean;
export type MiniObjectDisposeFunction = (obj: MiniObject) => boolean;
export type MiniObjectFreeFunction = (obj: MiniObject) => void;
export type MiniObjectNotify = (obj: MiniObject) => void;
export type PadActivateFunction = (pad: Pad, parent: Object) => boolean;
export type PadActivateModeFunction = (pad: Pad, parent: Object, mode: PadMode, active: boolean) => boolean;
export type PadChainFunction = (pad: Pad, parent: Object | null, buffer: Buffer) => FlowReturn;
export type PadChainListFunction = (pad: Pad, parent: Object | null, list: BufferList) => FlowReturn;
export type PadEventFullFunction = (pad: Pad, parent: Object | null, event: Event) => FlowReturn;
export type PadEventFunction = (pad: Pad, parent: Object | null, event: Event) => boolean;
export type PadForwardFunction = (pad: Pad) => boolean;
export type PadGetRangeFunction = (
    pad: Pad,
    parent: Object | null,
    offset: number,
    length: number,
    buffer: Buffer
) => FlowReturn;
export type PadIterIntLinkFunction = (pad: Pad, parent?: Object | null) => Iterator;
export type PadLinkFunction = (pad: Pad, parent: Object | null, peer: Pad) => PadLinkReturn;
export type PadProbeCallback = (pad: Pad, info: PadProbeInfo) => PadProbeReturn;
export type PadQueryFunction = (pad: Pad, parent: Object | null, query: Query) => boolean;
export type PadStickyEventsForeachFunction = (pad: Pad, event?: Event | null) => boolean;
export type PadUnlinkFunction = (pad: Pad, parent?: Object | null) => void;
export type PluginFeatureFilter = (feature: PluginFeature) => boolean;
export type PluginFilter = (plugin: Plugin) => boolean;
export type PluginInitFullFunc = (plugin: Plugin) => boolean;
export type PluginInitFunc = (plugin: Plugin) => boolean;
export type PromiseChangeFunc = (promise: Promise) => void;
export type StructureFilterMapFunc = (field_id: GLib.Quark, value: any) => boolean;
export type StructureForeachFunc = (field_id: GLib.Quark, value: any) => boolean;
export type StructureMapFunc = (field_id: GLib.Quark, value: any) => boolean;
export type TagForeachFunc = (list: TagList, tag: string) => void;
export type TagMergeFunc = (dest: any, src: any) => void;
export type TaskFunction = () => void;
export type TaskPoolFunction = () => void;
export type TaskThreadFunc = (task: Task, thread: GLib.Thread) => void;
export type TypeFindFunction = (find: TypeFind) => void;
export type ValueCompareFunc = (value1: any, value2: any) => number;
export type ValueDeserializeFunc = (dest: any, s: string) => boolean;
export type ValueSerializeFunc = (value1: any) => string;

export namespace BufferingMode {
    export const $gtype: GObject.GType<BufferingMode>;
}

export enum BufferingMode {
    STREAM = 0,
    DOWNLOAD = 1,
    TIMESHIFT = 2,
    LIVE = 3,
}

export namespace BusSyncReply {
    export const $gtype: GObject.GType<BusSyncReply>;
}

export enum BusSyncReply {
    DROP = 0,
    PASS = 1,
    ASYNC = 2,
}

export namespace CapsIntersectMode {
    export const $gtype: GObject.GType<CapsIntersectMode>;
}

export enum CapsIntersectMode {
    ZIG_ZAG = 0,
    FIRST = 1,
}

export namespace ClockEntryType {
    export const $gtype: GObject.GType<ClockEntryType>;
}

export enum ClockEntryType {
    SINGLE = 0,
    PERIODIC = 1,
}

export namespace ClockReturn {
    export const $gtype: GObject.GType<ClockReturn>;
}

export enum ClockReturn {
    OK = 0,
    EARLY = 1,
    UNSCHEDULED = 2,
    BUSY = 3,
    BADTIME = 4,
    ERROR = 5,
    UNSUPPORTED = 6,
    DONE = 7,
}

export namespace ClockType {
    export const $gtype: GObject.GType<ClockType>;
}

export enum ClockType {
    REALTIME = 0,
    MONOTONIC = 1,
    OTHER = 2,
    TAI = 3,
}

export class CoreError extends GLib.Error {
    static $gtype: GObject.GType<CoreError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CoreError);

    // Properties
    static FAILED: number;
    static TOO_LAZY: number;
    static NOT_IMPLEMENTED: number;
    static STATE_CHANGE: number;
    static PAD: number;
    static THREAD: number;
    static NEGOTIATION: number;
    static EVENT: number;
    static SEEK: number;
    static CAPS: number;
    static TAG: number;
    static MISSING_PLUGIN: number;
    static CLOCK: number;
    static DISABLED: number;
    static NUM_ERRORS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace DebugColorMode {
    export const $gtype: GObject.GType<DebugColorMode>;
}

export enum DebugColorMode {
    OFF = 0,
    ON = 1,
    UNIX = 2,
}

export namespace DebugLevel {
    export const $gtype: GObject.GType<DebugLevel>;
}

export enum DebugLevel {
    NONE = 0,
    ERROR = 1,
    WARNING = 2,
    FIXME = 3,
    INFO = 4,
    DEBUG = 5,
    LOG = 6,
    TRACE = 7,
    MEMDUMP = 9,
    COUNT = 10,
}

export namespace EventType {
    export const $gtype: GObject.GType<EventType>;
}

export enum EventType {
    UNKNOWN = 0,
    FLUSH_START = 2563,
    FLUSH_STOP = 5127,
    STREAM_START = 10254,
    CAPS = 12814,
    SEGMENT = 17934,
    STREAM_COLLECTION = 19230,
    TAG = 20510,
    BUFFERSIZE = 23054,
    SINK_MESSAGE = 25630,
    STREAM_GROUP_DONE = 26894,
    EOS = 28174,
    TOC = 30750,
    PROTECTION = 33310,
    SEGMENT_DONE = 38406,
    GAP = 40966,
    INSTANT_RATE_CHANGE = 46090,
    QOS = 48641,
    SEEK = 51201,
    NAVIGATION = 53761,
    LATENCY = 56321,
    STEP = 58881,
    RECONFIGURE = 61441,
    TOC_SELECT = 64001,
    SELECT_STREAMS = 66561,
    INSTANT_RATE_SYNC_TIME = 66817,
    CUSTOM_UPSTREAM = 69121,
    CUSTOM_DOWNSTREAM = 71686,
    CUSTOM_DOWNSTREAM_OOB = 74242,
    CUSTOM_DOWNSTREAM_STICKY = 76830,
    CUSTOM_BOTH = 79367,
    CUSTOM_BOTH_OOB = 81923,
}

export namespace FlowReturn {
    export const $gtype: GObject.GType<FlowReturn>;
}

export enum FlowReturn {
    CUSTOM_SUCCESS_2 = 102,
    CUSTOM_SUCCESS_1 = 101,
    CUSTOM_SUCCESS = 100,
    OK = 0,
    NOT_LINKED = -1,
    FLUSHING = -2,
    EOS = -3,
    NOT_NEGOTIATED = -4,
    ERROR = -5,
    NOT_SUPPORTED = -6,
    CUSTOM_ERROR = -100,
    CUSTOM_ERROR_1 = -101,
    CUSTOM_ERROR_2 = -102,
}

export namespace Format {
    export const $gtype: GObject.GType<Format>;
}

export enum Format {
    UNDEFINED = 0,
    DEFAULT = 1,
    BYTES = 2,
    TIME = 3,
    BUFFERS = 4,
    PERCENT = 5,
}

export namespace IteratorItem {
    export const $gtype: GObject.GType<IteratorItem>;
}

export enum IteratorItem {
    SKIP = 0,
    PASS = 1,
    END = 2,
}

export namespace IteratorResult {
    export const $gtype: GObject.GType<IteratorResult>;
}

export enum IteratorResult {
    DONE = 0,
    OK = 1,
    RESYNC = 2,
    ERROR = 3,
}

export class LibraryError extends GLib.Error {
    static $gtype: GObject.GType<LibraryError>;

    constructor(options: { message: string; code: number });
    constructor(copy: LibraryError);

    // Properties
    static FAILED: number;
    static TOO_LAZY: number;
    static INIT: number;
    static SHUTDOWN: number;
    static SETTINGS: number;
    static ENCODE: number;
    static NUM_ERRORS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PadDirection {
    export const $gtype: GObject.GType<PadDirection>;
}

export enum PadDirection {
    UNKNOWN = 0,
    SRC = 1,
    SINK = 2,
}

export namespace PadLinkReturn {
    export const $gtype: GObject.GType<PadLinkReturn>;
}

export enum PadLinkReturn {
    OK = 0,
    WRONG_HIERARCHY = -1,
    WAS_LINKED = -2,
    WRONG_DIRECTION = -3,
    NOFORMAT = -4,
    NOSCHED = -5,
    REFUSED = -6,
}

export namespace PadMode {
    export const $gtype: GObject.GType<PadMode>;
}

export enum PadMode {
    NONE = 0,
    PUSH = 1,
    PULL = 2,
}

export namespace PadPresence {
    export const $gtype: GObject.GType<PadPresence>;
}

export enum PadPresence {
    ALWAYS = 0,
    SOMETIMES = 1,
    REQUEST = 2,
}

export namespace PadProbeReturn {
    export const $gtype: GObject.GType<PadProbeReturn>;
}

export enum PadProbeReturn {
    DROP = 0,
    OK = 1,
    REMOVE = 2,
    PASS = 3,
    HANDLED = 4,
}

export class ParseError extends GLib.Error {
    static $gtype: GObject.GType<ParseError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ParseError);

    // Properties
    static SYNTAX: number;
    static NO_SUCH_ELEMENT: number;
    static NO_SUCH_PROPERTY: number;
    static LINK: number;
    static COULD_NOT_SET_PROPERTY: number;
    static EMPTY_BIN: number;
    static EMPTY: number;
    static DELAYED_LINK: number;

    // Members
    static quark(): GLib.Quark;
}

export class PluginError extends GLib.Error {
    static $gtype: GObject.GType<PluginError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PluginError);

    // Properties
    static MODULE: number;
    static DEPENDENCIES: number;
    static NAME_MISMATCH: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ProgressType {
    export const $gtype: GObject.GType<ProgressType>;
}

export enum ProgressType {
    START = 0,
    CONTINUE = 1,
    COMPLETE = 2,
    CANCELED = 3,
    ERROR = 4,
}

export namespace PromiseResult {
    export const $gtype: GObject.GType<PromiseResult>;
}

export enum PromiseResult {
    PENDING = 0,
    INTERRUPTED = 1,
    REPLIED = 2,
    EXPIRED = 3,
}

export namespace QOSType {
    export const $gtype: GObject.GType<QOSType>;
}

export enum QOSType {
    OVERFLOW = 0,
    UNDERFLOW = 1,
    THROTTLE = 2,
}

export namespace QueryType {
    export const $gtype: GObject.GType<QueryType>;
}

export enum QueryType {
    UNKNOWN = 0,
    POSITION = 2563,
    DURATION = 5123,
    LATENCY = 7683,
    JITTER = 10243,
    RATE = 12803,
    SEEKING = 15363,
    SEGMENT = 17923,
    CONVERT = 20483,
    FORMATS = 23043,
    BUFFERING = 28163,
    CUSTOM = 30723,
    URI = 33283,
    ALLOCATION = 35846,
    SCHEDULING = 38401,
    ACCEPT_CAPS = 40963,
    CAPS = 43523,
    DRAIN = 46086,
    CONTEXT = 48643,
    BITRATE = 51202,
}

export namespace Rank {
    export const $gtype: GObject.GType<Rank>;
}

export enum Rank {
    NONE = 0,
    MARGINAL = 64,
    SECONDARY = 128,
    PRIMARY = 256,
}

export class ResourceError extends GLib.Error {
    static $gtype: GObject.GType<ResourceError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ResourceError);

    // Properties
    static FAILED: number;
    static TOO_LAZY: number;
    static NOT_FOUND: number;
    static BUSY: number;
    static OPEN_READ: number;
    static OPEN_WRITE: number;
    static OPEN_READ_WRITE: number;
    static CLOSE: number;
    static READ: number;
    static WRITE: number;
    static SEEK: number;
    static SYNC: number;
    static SETTINGS: number;
    static NO_SPACE_LEFT: number;
    static NOT_AUTHORIZED: number;
    static NUM_ERRORS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace SearchMode {
    export const $gtype: GObject.GType<SearchMode>;
}

export enum SearchMode {
    EXACT = 0,
    BEFORE = 1,
    AFTER = 2,
}

export namespace SeekType {
    export const $gtype: GObject.GType<SeekType>;
}

export enum SeekType {
    NONE = 0,
    SET = 1,
    END = 2,
}

export namespace State {
    export const $gtype: GObject.GType<State>;
}

export enum State {
    VOID_PENDING = 0,
    NULL = 1,
    READY = 2,
    PAUSED = 3,
    PLAYING = 4,
}

export namespace StateChange {
    export const $gtype: GObject.GType<StateChange>;
}

export enum StateChange {
    NULL_TO_READY = 10,
    READY_TO_PAUSED = 19,
    PAUSED_TO_PLAYING = 28,
    PLAYING_TO_PAUSED = 35,
    PAUSED_TO_READY = 26,
    READY_TO_NULL = 17,
    NULL_TO_NULL = 9,
    READY_TO_READY = 18,
    PAUSED_TO_PAUSED = 27,
    PLAYING_TO_PLAYING = 36,
}

export namespace StateChangeReturn {
    export const $gtype: GObject.GType<StateChangeReturn>;
}

export enum StateChangeReturn {
    FAILURE = 0,
    SUCCESS = 1,
    ASYNC = 2,
    NO_PREROLL = 3,
}

export class StreamError extends GLib.Error {
    static $gtype: GObject.GType<StreamError>;

    constructor(options: { message: string; code: number });
    constructor(copy: StreamError);

    // Properties
    static FAILED: number;
    static TOO_LAZY: number;
    static NOT_IMPLEMENTED: number;
    static TYPE_NOT_FOUND: number;
    static WRONG_TYPE: number;
    static CODEC_NOT_FOUND: number;
    static DECODE: number;
    static ENCODE: number;
    static DEMUX: number;
    static MUX: number;
    static FORMAT: number;
    static DECRYPT: number;
    static DECRYPT_NOKEY: number;
    static NUM_ERRORS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace StreamStatusType {
    export const $gtype: GObject.GType<StreamStatusType>;
}

export enum StreamStatusType {
    CREATE = 0,
    ENTER = 1,
    LEAVE = 2,
    DESTROY = 3,
    START = 8,
    PAUSE = 9,
    STOP = 10,
}

export namespace StructureChangeType {
    export const $gtype: GObject.GType<StructureChangeType>;
}

export enum StructureChangeType {
    LINK = 0,
    UNLINK = 1,
}

export namespace TagFlag {
    export const $gtype: GObject.GType<TagFlag>;
}

export enum TagFlag {
    UNDEFINED = 0,
    META = 1,
    ENCODED = 2,
    DECODED = 3,
    COUNT = 4,
}

export namespace TagMergeMode {
    export const $gtype: GObject.GType<TagMergeMode>;
}

export enum TagMergeMode {
    UNDEFINED = 0,
    REPLACE_ALL = 1,
    REPLACE = 2,
    APPEND = 3,
    PREPEND = 4,
    KEEP = 5,
    KEEP_ALL = 6,
    COUNT = 7,
}

export namespace TagScope {
    export const $gtype: GObject.GType<TagScope>;
}

export enum TagScope {
    STREAM = 0,
    GLOBAL = 1,
}

export namespace TaskState {
    export const $gtype: GObject.GType<TaskState>;
}

export enum TaskState {
    STARTED = 0,
    STOPPED = 1,
    PAUSED = 2,
}

export namespace TocEntryType {
    export const $gtype: GObject.GType<TocEntryType>;
}

export enum TocEntryType {
    ANGLE = -3,
    VERSION = -2,
    EDITION = -1,
    INVALID = 0,
    TITLE = 1,
    TRACK = 2,
    CHAPTER = 3,
}

export namespace TocLoopType {
    export const $gtype: GObject.GType<TocLoopType>;
}

export enum TocLoopType {
    NONE = 0,
    FORWARD = 1,
    REVERSE = 2,
    PING_PONG = 3,
}

export namespace TocScope {
    export const $gtype: GObject.GType<TocScope>;
}

export enum TocScope {
    GLOBAL = 1,
    CURRENT = 2,
}

export namespace TracerValueScope {
    export const $gtype: GObject.GType<TracerValueScope>;
}

export enum TracerValueScope {
    PROCESS = 0,
    THREAD = 1,
    ELEMENT = 2,
    PAD = 3,
}

export namespace TypeFindProbability {
    export const $gtype: GObject.GType<TypeFindProbability>;
}

export enum TypeFindProbability {
    NONE = 0,
    MINIMUM = 1,
    POSSIBLE = 50,
    LIKELY = 80,
    NEARLY_CERTAIN = 99,
    MAXIMUM = 100,
}

export class URIError extends GLib.Error {
    static $gtype: GObject.GType<URIError>;

    constructor(options: { message: string; code: number });
    constructor(copy: URIError);

    // Properties
    static UNSUPPORTED_PROTOCOL: number;
    static BAD_URI: number;
    static BAD_STATE: number;
    static BAD_REFERENCE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace URIType {
    export const $gtype: GObject.GType<URIType>;
}

export enum URIType {
    UNKNOWN = 0,
    SINK = 1,
    SRC = 2,
}

export namespace AllocatorFlags {
    export const $gtype: GObject.GType<AllocatorFlags>;
}

export enum AllocatorFlags {
    CUSTOM_ALLOC = 16,
    LAST = 1048576,
}

export namespace BinFlags {
    export const $gtype: GObject.GType<BinFlags>;
}

export enum BinFlags {
    NO_RESYNC = 16384,
    STREAMS_AWARE = 32768,
    LAST = 524288,
}

export namespace BufferCopyFlags {
    export const $gtype: GObject.GType<BufferCopyFlags>;
}

export enum BufferCopyFlags {
    NONE = 0,
    FLAGS = 1,
    TIMESTAMPS = 2,
    META = 4,
    MEMORY = 8,
    MERGE = 16,
    DEEP = 32,
}

export namespace BufferFlags {
    export const $gtype: GObject.GType<BufferFlags>;
}

export enum BufferFlags {
    LIVE = 16,
    DECODE_ONLY = 32,
    DISCONT = 64,
    RESYNC = 128,
    CORRUPTED = 256,
    MARKER = 512,
    HEADER = 1024,
    GAP = 2048,
    DROPPABLE = 4096,
    DELTA_UNIT = 8192,
    TAG_MEMORY = 16384,
    SYNC_AFTER = 32768,
    NON_DROPPABLE = 65536,
    LAST = 1048576,
}

export namespace BufferPoolAcquireFlags {
    export const $gtype: GObject.GType<BufferPoolAcquireFlags>;
}

export enum BufferPoolAcquireFlags {
    NONE = 0,
    KEY_UNIT = 1,
    DONTWAIT = 2,
    DISCONT = 4,
    LAST = 65536,
}

export namespace BusFlags {
    export const $gtype: GObject.GType<BusFlags>;
}

export enum BusFlags {
    FLUSHING = 16,
    FLAG_LAST = 32,
}

export namespace CapsFlags {
    export const $gtype: GObject.GType<CapsFlags>;
}

export enum CapsFlags {
    ANY = 16,
}

export namespace ClockFlags {
    export const $gtype: GObject.GType<ClockFlags>;
}

export enum ClockFlags {
    CAN_DO_SINGLE_SYNC = 16,
    CAN_DO_SINGLE_ASYNC = 32,
    CAN_DO_PERIODIC_SYNC = 64,
    CAN_DO_PERIODIC_ASYNC = 128,
    CAN_SET_RESOLUTION = 256,
    CAN_SET_MASTER = 512,
    NEEDS_STARTUP_SYNC = 1024,
    LAST = 4096,
}

export namespace DebugColorFlags {
    export const $gtype: GObject.GType<DebugColorFlags>;
}

export enum DebugColorFlags {
    FG_BLACK = 0,
    FG_RED = 1,
    FG_GREEN = 2,
    FG_YELLOW = 3,
    FG_BLUE = 4,
    FG_MAGENTA = 5,
    FG_CYAN = 6,
    FG_WHITE = 7,
    BG_BLACK = 0,
    BG_RED = 16,
    BG_GREEN = 32,
    BG_YELLOW = 48,
    BG_BLUE = 64,
    BG_MAGENTA = 80,
    BG_CYAN = 96,
    BG_WHITE = 112,
    BOLD = 256,
    UNDERLINE = 512,
}

export namespace DebugGraphDetails {
    export const $gtype: GObject.GType<DebugGraphDetails>;
}

export enum DebugGraphDetails {
    MEDIA_TYPE = 1,
    CAPS_DETAILS = 2,
    NON_DEFAULT_PARAMS = 4,
    STATES = 8,
    FULL_PARAMS = 16,
    ALL = 15,
    VERBOSE = 4294967295,
}

export namespace ElementFlags {
    export const $gtype: GObject.GType<ElementFlags>;
}

export enum ElementFlags {
    LOCKED_STATE = 16,
    SINK = 32,
    SOURCE = 64,
    PROVIDE_CLOCK = 128,
    REQUIRE_CLOCK = 256,
    INDEXABLE = 512,
    LAST = 16384,
}

export namespace EventTypeFlags {
    export const $gtype: GObject.GType<EventTypeFlags>;
}

export enum EventTypeFlags {
    UPSTREAM = 1,
    DOWNSTREAM = 2,
    SERIALIZED = 4,
    STICKY = 8,
    STICKY_MULTI = 16,
}

export namespace LockFlags {
    export const $gtype: GObject.GType<LockFlags>;
}

export enum LockFlags {
    READ = 1,
    WRITE = 2,
    EXCLUSIVE = 4,
    LAST = 256,
}

export namespace MapFlags {
    export const $gtype: GObject.GType<MapFlags>;
}

export enum MapFlags {
    READ = 1,
    WRITE = 2,
    FLAG_LAST = 65536,
}

export namespace MemoryFlags {
    export const $gtype: GObject.GType<MemoryFlags>;
}

export enum MemoryFlags {
    READONLY = 2,
    NO_SHARE = 16,
    ZERO_PREFIXED = 32,
    ZERO_PADDED = 64,
    PHYSICALLY_CONTIGUOUS = 128,
    NOT_MAPPABLE = 256,
    LAST = 1048576,
}

export namespace MessageType {
    export const $gtype: GObject.GType<MessageType>;
}

export enum MessageType {
    UNKNOWN = 0,
    EOS = 1,
    ERROR = 2,
    WARNING = 4,
    INFO = 8,
    TAG = 16,
    BUFFERING = 32,
    STATE_CHANGED = 64,
    STATE_DIRTY = 128,
    STEP_DONE = 256,
    CLOCK_PROVIDE = 512,
    CLOCK_LOST = 1024,
    NEW_CLOCK = 2048,
    STRUCTURE_CHANGE = 4096,
    STREAM_STATUS = 8192,
    APPLICATION = 16384,
    ELEMENT = 32768,
    SEGMENT_START = 65536,
    SEGMENT_DONE = 131072,
    DURATION_CHANGED = 262144,
    LATENCY = 524288,
    ASYNC_START = 1048576,
    ASYNC_DONE = 2097152,
    REQUEST_STATE = 4194304,
    STEP_START = 8388608,
    QOS = 16777216,
    PROGRESS = 33554432,
    TOC = 67108864,
    RESET_TIME = 134217728,
    STREAM_START = 268435456,
    NEED_CONTEXT = 536870912,
    HAVE_CONTEXT = 1073741824,
    EXTENDED = 2147483648,
    DEVICE_ADDED = 2147483649,
    DEVICE_REMOVED = 2147483650,
    PROPERTY_NOTIFY = 2147483651,
    STREAM_COLLECTION = 2147483652,
    STREAMS_SELECTED = 2147483653,
    REDIRECT = 2147483654,
    DEVICE_CHANGED = 2147483655,
    INSTANT_RATE_REQUEST = 2147483656,
    ANY = 4294967295,
}

export namespace MetaFlags {
    export const $gtype: GObject.GType<MetaFlags>;
}

export enum MetaFlags {
    NONE = 0,
    READONLY = 1,
    POOLED = 2,
    LOCKED = 4,
    LAST = 65536,
}

export namespace MiniObjectFlags {
    export const $gtype: GObject.GType<MiniObjectFlags>;
}

export enum MiniObjectFlags {
    LOCKABLE = 1,
    LOCK_READONLY = 2,
    MAY_BE_LEAKED = 4,
    LAST = 16,
}

export namespace ObjectFlags {
    export const $gtype: GObject.GType<ObjectFlags>;
}

export enum ObjectFlags {
    MAY_BE_LEAKED = 1,
    LAST = 16,
}

export namespace PadFlags {
    export const $gtype: GObject.GType<PadFlags>;
}

export enum PadFlags {
    BLOCKED = 16,
    FLUSHING = 32,
    EOS = 64,
    BLOCKING = 128,
    NEED_PARENT = 256,
    NEED_RECONFIGURE = 512,
    PENDING_EVENTS = 1024,
    FIXED_CAPS = 2048,
    PROXY_CAPS = 4096,
    PROXY_ALLOCATION = 8192,
    PROXY_SCHEDULING = 16384,
    ACCEPT_INTERSECT = 32768,
    ACCEPT_TEMPLATE = 65536,
    LAST = 1048576,
}

export namespace PadLinkCheck {
    export const $gtype: GObject.GType<PadLinkCheck>;
}

export enum PadLinkCheck {
    NOTHING = 0,
    HIERARCHY = 1,
    TEMPLATE_CAPS = 2,
    CAPS = 4,
    NO_RECONFIGURE = 8,
    DEFAULT = 5,
}

export namespace PadProbeType {
    export const $gtype: GObject.GType<PadProbeType>;
}

export enum PadProbeType {
    INVALID = 0,
    IDLE = 1,
    BLOCK = 2,
    BUFFER = 16,
    BUFFER_LIST = 32,
    EVENT_DOWNSTREAM = 64,
    EVENT_UPSTREAM = 128,
    EVENT_FLUSH = 256,
    QUERY_DOWNSTREAM = 512,
    QUERY_UPSTREAM = 1024,
    PUSH = 4096,
    PULL = 8192,
    BLOCKING = 3,
    DATA_DOWNSTREAM = 112,
    DATA_UPSTREAM = 128,
    DATA_BOTH = 240,
    BLOCK_DOWNSTREAM = 114,
    BLOCK_UPSTREAM = 130,
    EVENT_BOTH = 192,
    QUERY_BOTH = 1536,
    ALL_BOTH = 1776,
    SCHEDULING = 12288,
}

export namespace PadTemplateFlags {
    export const $gtype: GObject.GType<PadTemplateFlags>;
}

export enum PadTemplateFlags {
    LAST = 256,
}

export namespace ParseFlags {
    export const $gtype: GObject.GType<ParseFlags>;
}

export enum ParseFlags {
    NONE = 0,
    FATAL_ERRORS = 1,
    NO_SINGLE_ELEMENT_BINS = 2,
    PLACE_IN_BIN = 4,
}

export namespace PipelineFlags {
    export const $gtype: GObject.GType<PipelineFlags>;
}

export enum PipelineFlags {
    FIXED_CLOCK = 524288,
    LAST = 8388608,
}

export namespace PluginAPIFlags {
    export const $gtype: GObject.GType<PluginAPIFlags>;
}

export enum PluginAPIFlags {
    MEMBERS = 1,
}

export namespace PluginDependencyFlags {
    export const $gtype: GObject.GType<PluginDependencyFlags>;
}

export enum PluginDependencyFlags {
    NONE = 0,
    RECURSE = 1,
    PATHS_ARE_DEFAULT_ONLY = 2,
    FILE_NAME_IS_SUFFIX = 4,
    FILE_NAME_IS_PREFIX = 8,
    PATHS_ARE_RELATIVE_TO_EXE = 16,
}

export namespace PluginFlags {
    export const $gtype: GObject.GType<PluginFlags>;
}

export enum PluginFlags {
    CACHED = 16,
    BLACKLISTED = 32,
}

export namespace QueryTypeFlags {
    export const $gtype: GObject.GType<QueryTypeFlags>;
}

export enum QueryTypeFlags {
    UPSTREAM = 1,
    DOWNSTREAM = 2,
    SERIALIZED = 4,
}

export namespace SchedulingFlags {
    export const $gtype: GObject.GType<SchedulingFlags>;
}

export enum SchedulingFlags {
    SEEKABLE = 1,
    SEQUENTIAL = 2,
    BANDWIDTH_LIMITED = 4,
}

export namespace SeekFlags {
    export const $gtype: GObject.GType<SeekFlags>;
}

export enum SeekFlags {
    NONE = 0,
    FLUSH = 1,
    ACCURATE = 2,
    KEY_UNIT = 4,
    SEGMENT = 8,
    TRICKMODE = 16,
    SKIP = 16,
    SNAP_BEFORE = 32,
    SNAP_AFTER = 64,
    SNAP_NEAREST = 96,
    TRICKMODE_KEY_UNITS = 128,
    TRICKMODE_NO_AUDIO = 256,
    TRICKMODE_FORWARD_PREDICTED = 512,
    INSTANT_RATE_CHANGE = 1024,
}

export namespace SegmentFlags {
    export const $gtype: GObject.GType<SegmentFlags>;
}

export enum SegmentFlags {
    NONE = 0,
    RESET = 1,
    TRICKMODE = 16,
    SKIP = 16,
    SEGMENT = 8,
    TRICKMODE_KEY_UNITS = 128,
    TRICKMODE_FORWARD_PREDICTED = 512,
    TRICKMODE_NO_AUDIO = 256,
}

export namespace StackTraceFlags {
    export const $gtype: GObject.GType<StackTraceFlags>;
}

export enum StackTraceFlags {
    NONE = 0,
    FULL = 1,
}

export namespace StreamFlags {
    export const $gtype: GObject.GType<StreamFlags>;
}

export enum StreamFlags {
    NONE = 0,
    SPARSE = 1,
    SELECT = 2,
    UNSELECT = 4,
}

export namespace StreamType {
    export const $gtype: GObject.GType<StreamType>;
}

export enum StreamType {
    UNKNOWN = 1,
    AUDIO = 2,
    VIDEO = 4,
    CONTAINER = 8,
    TEXT = 16,
}

export namespace TracerValueFlags {
    export const $gtype: GObject.GType<TracerValueFlags>;
}

export enum TracerValueFlags {
    NONE = 0,
    OPTIONAL = 1,
    AGGREGATED = 2,
}
export module Allocator {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Allocator extends Object {
    static $gtype: GObject.GType<Allocator>;

    constructor(properties?: Partial<Allocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Allocator.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: Object | any;
    mem_type: string;
    mem_map: MemoryMapFunction;
    mem_unmap: MemoryUnmapFunction;
    mem_copy: MemoryCopyFunction;
    mem_share: MemoryShareFunction;
    mem_is_span: MemoryIsSpanFunction;
    mem_map_full: MemoryMapFullFunction;
    mem_unmap_full: MemoryUnmapFullFunction;

    // Members

    alloc(size: number, params?: AllocationParams | null): Memory | null;
    free(memory: Memory): void;
    set_default(): void;
    vfunc_alloc(size: number, params?: AllocationParams | null): Memory | null;
    vfunc_free(memory: Memory): void;
    static find(name?: string | null): Allocator | null;
    static register(name: string, allocator: Allocator): void;
}
export module Bin {
    export interface ConstructorProperties extends Element.ConstructorProperties {
        [key: string]: any;
        async_handling: boolean;
        asyncHandling: boolean;
        message_forward: boolean;
        messageForward: boolean;
    }
}
export class Bin extends Element implements ChildProxy {
    static $gtype: GObject.GType<Bin>;

    constructor(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    async_handling: boolean;
    asyncHandling: boolean;
    message_forward: boolean;
    messageForward: boolean;

    // Fields
    element: Element;
    numchildren: number;
    children: Element[];
    children_cookie: number;
    child_bus: Bus;
    messages: Message[];
    polling: boolean;
    state_dirty: boolean;
    clock_dirty: boolean;
    provided_clock: Clock;
    clock_provider: Element;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "deep-element-added", callback: (_source: this, sub_bin: Bin, element: Element) => void): number;
    connect_after(
        signal: "deep-element-added",
        callback: (_source: this, sub_bin: Bin, element: Element) => void
    ): number;
    emit(signal: "deep-element-added", sub_bin: Bin, element: Element): void;
    connect(signal: "deep-element-removed", callback: (_source: this, sub_bin: Bin, element: Element) => void): number;
    connect_after(
        signal: "deep-element-removed",
        callback: (_source: this, sub_bin: Bin, element: Element) => void
    ): number;
    emit(signal: "deep-element-removed", sub_bin: Bin, element: Element): void;
    connect(signal: "do-latency", callback: (_source: this) => boolean): number;
    connect_after(signal: "do-latency", callback: (_source: this) => boolean): number;
    emit(signal: "do-latency"): void;
    connect(signal: "element-added", callback: (_source: this, element: Element) => void): number;
    connect_after(signal: "element-added", callback: (_source: this, element: Element) => void): number;
    emit(signal: "element-added", element: Element): void;
    connect(signal: "element-removed", callback: (_source: this, element: Element) => void): number;
    connect_after(signal: "element-removed", callback: (_source: this, element: Element) => void): number;
    emit(signal: "element-removed", element: Element): void;

    // Constructors

    static ["new"](name?: string | null): Bin;

    // Members

    add(element: Element): boolean;
    find_unlinked_pad(direction: PadDirection): Pad | null;
    get_by_interface(iface: GObject.GType): Element | null;
    get_by_name(name: string): Element | null;
    get_by_name_recurse_up(name: string): Element | null;
    get_suppressed_flags(): ElementFlags;
    iterate_all_by_element_factory_name(factory_name: string): Iterator | null;
    iterate_all_by_interface(iface: GObject.GType): Iterator | null;
    iterate_elements(): Iterator | null;
    iterate_recurse(): Iterator | null;
    iterate_sinks(): Iterator | null;
    iterate_sorted(): Iterator | null;
    iterate_sources(): Iterator | null;
    recalculate_latency(): boolean;
    remove(element: Element): boolean;
    set_suppressed_flags(flags: ElementFlags): void;
    sync_children_states(): boolean;
    vfunc_add_element(element: Element): boolean;
    vfunc_deep_element_added(sub_bin: Bin, child: Element): void;
    vfunc_deep_element_removed(sub_bin: Bin, child: Element): void;
    vfunc_do_latency(): boolean;
    vfunc_element_added(child: Element): void;
    vfunc_element_removed(child: Element): void;
    vfunc_handle_message(message: Message): void;
    vfunc_remove_element(element: Element): boolean;

    // Implemented Members

    child_added(child: GObject.Object, name: string): void;
    child_removed(child: GObject.Object, name: string): void;
    get_child_by_index<T = GObject.Object>(index: number): T;
    get_child_by_name<T = GObject.Object>(name: string): T;
    get_children_count(): number;
    get_property(name: string): unknown;
    get_property(...args: never[]): never;
    lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
    set_property(name: string, value: any): void;
    set_property(...args: never[]): never;
    vfunc_child_added(child: GObject.Object, name: string): void;
    vfunc_child_removed(child: GObject.Object, name: string): void;
    vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
    vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
    vfunc_get_children_count(): number;
}
export module Bitmask {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class Bitmask {
    static $gtype: GObject.GType<Bitmask>;

    constructor(properties?: Partial<Bitmask.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bitmask.ConstructorProperties>, ...args: any[]): void;
}
export module BufferPool {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BufferPool extends Object {
    static $gtype: GObject.GType<BufferPool>;

    constructor(properties?: Partial<BufferPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BufferPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: Object | any;
    flushing: number;

    // Constructors

    static ["new"](): BufferPool;

    // Members

    acquire_buffer(params?: BufferPoolAcquireParams | null): [FlowReturn, Buffer];
    get_config(): Structure;
    get_options(): string[];
    has_option(option: string): boolean;
    is_active(): boolean;
    release_buffer(buffer: Buffer): void;
    set_active(active: boolean): boolean;
    set_config(config: Structure): boolean;
    set_flushing(flushing: boolean): void;
    vfunc_acquire_buffer(params?: BufferPoolAcquireParams | null): [FlowReturn, Buffer];
    vfunc_alloc_buffer(buffer: Buffer, params: BufferPoolAcquireParams): FlowReturn;
    vfunc_flush_start(): void;
    vfunc_flush_stop(): void;
    vfunc_free_buffer(buffer: Buffer): void;
    vfunc_get_options(): string[];
    vfunc_release_buffer(buffer: Buffer): void;
    vfunc_reset_buffer(buffer: Buffer): void;
    vfunc_set_config(config: Structure): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    static config_add_option(config: Structure, option: string): void;
    static config_get_allocator(config: Structure): [boolean, Allocator | null, AllocationParams | null];
    static config_get_option(config: Structure, index: number): string | null;
    static config_get_params(config: Structure): [boolean, Caps | null, number | null, number | null, number | null];
    static config_has_option(config: Structure, option: string): boolean;
    static config_n_options(config: Structure): number;
    static config_set_allocator(
        config: Structure,
        allocator?: Allocator | null,
        params?: AllocationParams | null
    ): void;
    static config_set_params(
        config: Structure,
        caps: Caps | null,
        size: number,
        min_buffers: number,
        max_buffers: number
    ): void;
    static config_validate_params(
        config: Structure,
        caps: Caps | null,
        size: number,
        min_buffers: number,
        max_buffers: number
    ): boolean;
}
export module Bus {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        enable_async: boolean;
        enableAsync: boolean;
    }
}
export class Bus extends Object {
    static $gtype: GObject.GType<Bus>;

    constructor(properties?: Partial<Bus.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bus.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enable_async: boolean;
    enableAsync: boolean;

    // Fields
    object: Object | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "message", callback: (_source: this, message: Message) => void): number;
    connect_after(signal: "message", callback: (_source: this, message: Message) => void): number;
    emit(signal: "message", message: Message): void;
    connect(signal: "sync-message", callback: (_source: this, message: Message) => void): number;
    connect_after(signal: "sync-message", callback: (_source: this, message: Message) => void): number;
    emit(signal: "sync-message", message: Message): void;

    // Constructors

    static ["new"](): Bus;

    // Members

    add_signal_watch(): void;
    add_signal_watch_full(priority: number): void;
    add_watch(priority: number, func: BusFunc): number;
    async_signal_func(message: Message, data?: any | null): boolean;
    create_watch(): GLib.Source | null;
    disable_sync_message_emission(): void;
    enable_sync_message_emission(): void;
    get_pollfd(): GLib.PollFD;
    have_pending(): boolean;
    peek(): Message | null;
    poll(events: MessageType, timeout: ClockTime): Message | null;
    pop(): Message | null;
    pop_filtered(types: MessageType): Message | null;
    post(message: Message): boolean;
    remove_signal_watch(): void;
    remove_watch(): boolean;
    set_flushing(flushing: boolean): void;
    set_sync_handler(func?: BusSyncHandler | null): void;
    sync_signal_handler(message: Message, data?: any | null): BusSyncReply;
    timed_pop(timeout: ClockTime): Message | null;
    timed_pop_filtered(timeout: ClockTime, types: MessageType): Message | null;
    vfunc_message(message: Message): void;
    vfunc_sync_message(message: Message): void;
}
export module Clock {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        timeout: number;
        window_size: number;
        windowSize: number;
        window_threshold: number;
        windowThreshold: number;
    }
}
export abstract class Clock extends Object {
    static $gtype: GObject.GType<Clock>;

    constructor(properties?: Partial<Clock.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clock.ConstructorProperties>, ...args: any[]): void;

    // Properties
    timeout: number;
    window_size: number;
    windowSize: number;
    window_threshold: number;
    windowThreshold: number;

    // Fields
    object: Object | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "synced", callback: (_source: this, synced: boolean) => void): number;
    connect_after(signal: "synced", callback: (_source: this, synced: boolean) => void): number;
    emit(signal: "synced", synced: boolean): void;

    // Members

    add_observation(slave: ClockTime, master: ClockTime): [boolean, number];
    add_observation_unapplied(
        slave: ClockTime,
        master: ClockTime
    ): [boolean, number, ClockTime | null, ClockTime | null, ClockTime | null, ClockTime | null];
    adjust_unlocked(internal: ClockTime): ClockTime;
    adjust_with_calibration(
        internal_target: ClockTime,
        cinternal: ClockTime,
        cexternal: ClockTime,
        cnum: ClockTime,
        cdenom: ClockTime
    ): ClockTime;
    get_calibration(): [ClockTime | null, ClockTime | null, ClockTime | null, ClockTime | null];
    get_internal_time(): ClockTime;
    get_master(): Clock | null;
    get_resolution(): ClockTime;
    get_time(): ClockTime;
    get_timeout(): ClockTime;
    is_synced(): boolean;
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID;
    new_single_shot_id(time: ClockTime): ClockID;
    periodic_id_reinit(id: ClockID, start_time: ClockTime, interval: ClockTime): boolean;
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
    set_master(master?: Clock | null): boolean;
    set_resolution(resolution: ClockTime): ClockTime;
    set_synced(synced: boolean): void;
    set_timeout(timeout: ClockTime): void;
    single_shot_id_reinit(id: ClockID, time: ClockTime): boolean;
    unadjust_unlocked(external: ClockTime): ClockTime;
    unadjust_with_calibration(
        external_target: ClockTime,
        cinternal: ClockTime,
        cexternal: ClockTime,
        cnum: ClockTime,
        cdenom: ClockTime
    ): ClockTime;
    wait_for_sync(timeout: ClockTime): boolean;
    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime;
    vfunc_get_internal_time(): ClockTime;
    vfunc_get_resolution(): ClockTime;
    vfunc_unschedule(entry: ClockEntry): void;
    vfunc_wait(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn;
    vfunc_wait_async(entry: ClockEntry): ClockReturn;
    static id_compare_func(id1?: any | null, id2?: any | null): number;
    static id_get_clock(id: ClockID): Clock | null;
    static id_get_time(id: ClockID): ClockTime;
    static id_ref(id: ClockID): ClockID;
    static id_unref(id: ClockID): void;
    static id_unschedule(id: ClockID): void;
    static id_uses_clock(id: ClockID, clock: Clock): boolean;
    static id_wait(id: ClockID): [ClockReturn, ClockTimeDiff | null];
    static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn;
}
export module ControlBinding {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        name: string;
        object: Object | any;
    }
}
export abstract class ControlBinding extends Object {
    static $gtype: GObject.GType<ControlBinding>;

    constructor(properties?: Partial<ControlBinding.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ControlBinding.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    object: Object | any;

    // Fields
    pspec: GObject.ParamSpec;

    // Members

    get_g_value_array(timestamp: ClockTime, interval: ClockTime, values: GObject.Value[]): boolean;
    get_g_value_array(...args: never[]): never;
    get_value(timestamp: ClockTime): GObject.Value | null;
    get_value(...args: never[]): never;
    is_disabled(): boolean;
    set_disabled(disabled: boolean): void;
    sync_values(object: Object, timestamp: ClockTime, last_sync: ClockTime): boolean;
    sync_values(...args: never[]): never;
    vfunc_get_g_value_array(timestamp: ClockTime, interval: ClockTime, values: GObject.Value[]): boolean;
    vfunc_get_value(timestamp: ClockTime): GObject.Value | null;
    vfunc_sync_values(object: Object, timestamp: ClockTime, last_sync: ClockTime): boolean;
}
export module ControlSource {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class ControlSource extends Object {
    static $gtype: GObject.GType<ControlSource>;

    constructor(properties?: Partial<ControlSource.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ControlSource.ConstructorProperties>, ...args: any[]): void;

    // Fields
    get_value: ControlSourceGetValue | any;
    get_value_array: ControlSourceGetValueArray;

    // Members

    control_source_get_value(timestamp: ClockTime): [boolean, number];
    control_source_get_value_array(timestamp: ClockTime, interval: ClockTime, values: number[]): boolean;
}
export module Device {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        caps: Caps;
        device_class: string;
        deviceClass: string;
        display_name: string;
        displayName: string;
        properties: Structure;
    }
}
export abstract class Device extends Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    caps: Caps;
    device_class: string;
    deviceClass: string;
    display_name: string;
    displayName: string;
    properties: Structure;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "removed", callback: (_source: this) => void): number;
    connect_after(signal: "removed", callback: (_source: this) => void): number;
    emit(signal: "removed"): void;

    // Members

    create_element(name?: string | null): Element | null;
    get_caps(): Caps | null;
    get_device_class(): string;
    get_display_name(): string;
    get_properties(): Structure | null;
    has_classes(classes: string): boolean;
    has_classesv(classes: string[]): boolean;
    reconfigure_element(element: Element): boolean;
    vfunc_create_element(name?: string | null): Element | null;
    vfunc_reconfigure_element(element: Element): boolean;
}
export module DeviceMonitor {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeviceMonitor extends Object {
    static $gtype: GObject.GType<DeviceMonitor>;

    constructor(properties?: Partial<DeviceMonitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceMonitor.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): DeviceMonitor;

    // Members

    add_filter(classes?: string | null, caps?: Caps | null): number;
    get_bus(): Bus;
    get_devices(): Device[] | null;
    get_providers(): string[];
    get_show_all_devices(): boolean;
    remove_filter(filter_id: number): boolean;
    set_show_all_devices(show_all: boolean): void;
    start(): boolean;
    stop(): void;
}
export module DeviceProvider {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class DeviceProvider extends Object {
    static $gtype: GObject.GType<DeviceProvider>;

    constructor(properties?: Partial<DeviceProvider.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceProvider.ConstructorProperties>, ...args: any[]): void;

    // Fields
    devices: any[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "provider-hidden", callback: (_source: this, object: string) => void): number;
    connect_after(signal: "provider-hidden", callback: (_source: this, object: string) => void): number;
    emit(signal: "provider-hidden", object: string): void;
    connect(signal: "provider-unhidden", callback: (_source: this, object: string) => void): number;
    connect_after(signal: "provider-unhidden", callback: (_source: this, object: string) => void): number;
    emit(signal: "provider-unhidden", object: string): void;

    // Members

    can_monitor(): boolean;
    device_add(device: Device): void;
    device_changed(device: Device, changed_device: Device): void;
    device_remove(device: Device): void;
    get_bus(): Bus;
    get_devices(): Device[];
    get_factory(): DeviceProviderFactory | null;
    get_hidden_providers(): string[];
    get_metadata(key: string): string;
    hide_provider(name: string): void;
    start(): boolean;
    stop(): void;
    unhide_provider(name: string): void;
    vfunc_start(): boolean;
    vfunc_stop(): void;
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.GType): boolean;
}
export module DeviceProviderFactory {
    export interface ConstructorProperties extends PluginFeature.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeviceProviderFactory extends PluginFeature {
    static $gtype: GObject.GType<DeviceProviderFactory>;

    constructor(properties?: Partial<DeviceProviderFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceProviderFactory.ConstructorProperties>, ...args: any[]): void;

    // Members

    get(): DeviceProvider | null;
    get_device_provider_type(): GObject.GType;
    get_metadata(key: string): string | null;
    get_metadata_keys(): string[] | null;
    has_classes(classes?: string | null): boolean;
    has_classesv(classes?: string[] | null): boolean;
    static find(name: string): DeviceProviderFactory | null;
    static get_by_name(factoryname: string): DeviceProvider | null;
    static list_get_device_providers(minrank: Rank): DeviceProviderFactory[];
}
export module DoubleRange {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class DoubleRange {
    static $gtype: GObject.GType<DoubleRange>;

    constructor(properties?: Partial<DoubleRange.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DoubleRange.ConstructorProperties>, ...args: any[]): void;
}
export module DynamicTypeFactory {
    export interface ConstructorProperties extends PluginFeature.ConstructorProperties {
        [key: string]: any;
    }
}
export class DynamicTypeFactory extends PluginFeature {
    static $gtype: GObject.GType<DynamicTypeFactory>;

    constructor(properties?: Partial<DynamicTypeFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DynamicTypeFactory.ConstructorProperties>, ...args: any[]): void;

    // Members

    static load(factoryname: string): GObject.GType;
    static load(...args: never[]): never;
}
export module Element {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Element extends Object {
    static $gtype: GObject.GType<Element>;

    constructor(properties?: Partial<Element.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Element.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: Object | any;
    state_lock: GLib.RecMutex;
    state_cond: GLib.Cond;
    state_cookie: number;
    target_state: State;
    current_state: State;
    next_state: State;
    pending_state: State;
    last_return: StateChangeReturn;
    bus: Bus;
    clock: Clock;
    base_time: ClockTimeDiff;
    start_time: ClockTime;
    numpads: number;
    pads: Pad[];
    numsrcpads: number;
    srcpads: Pad[];
    numsinkpads: number;
    sinkpads: Pad[];
    pads_cookie: number;
    contexts: Context[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "no-more-pads", callback: (_source: this) => void): number;
    connect_after(signal: "no-more-pads", callback: (_source: this) => void): number;
    emit(signal: "no-more-pads"): void;
    connect(signal: "pad-added", callback: (_source: this, new_pad: Pad) => void): number;
    connect_after(signal: "pad-added", callback: (_source: this, new_pad: Pad) => void): number;
    emit(signal: "pad-added", new_pad: Pad): void;
    connect(signal: "pad-removed", callback: (_source: this, old_pad: Pad) => void): number;
    connect_after(signal: "pad-removed", callback: (_source: this, old_pad: Pad) => void): number;
    emit(signal: "pad-removed", old_pad: Pad): void;

    // Members

    abort_state(): void;
    add_pad(pad: Pad): boolean;
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number;
    add_property_notify_watch(property_name: string | null, include_value: boolean): number;
    call_async(func: ElementCallAsyncFunc): void;
    change_state(transition: StateChange): StateChangeReturn;
    continue_state(ret: StateChangeReturn): StateChangeReturn;
    create_all_pads(): void;
    foreach_pad(func: ElementForeachPadFunc): boolean;
    foreach_sink_pad(func: ElementForeachPadFunc): boolean;
    foreach_src_pad(func: ElementForeachPadFunc): boolean;
    get_base_time(): ClockTime;
    get_bus(): Bus | null;
    get_clock(): Clock | null;
    get_compatible_pad(pad: Pad, caps?: Caps | null): Pad | null;
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null;
    get_context(context_type: string): Context | null;
    get_context_unlocked(context_type: string): Context | null;
    get_contexts(): Context[];
    get_current_clock_time(): ClockTime;
    get_current_running_time(): ClockTime;
    get_factory(): ElementFactory | null;
    get_metadata(key: string): string;
    get_pad_template(name: string): PadTemplate | null;
    get_pad_template_list(): PadTemplate[];
    get_request_pad(name: string): Pad | null;
    get_start_time(): ClockTime;
    get_state(timeout: ClockTime): [StateChangeReturn, State | null, State | null];
    get_static_pad(name: string): Pad | null;
    is_locked_state(): boolean;
    iterate_pads(): Iterator;
    iterate_sink_pads(): Iterator;
    iterate_src_pads(): Iterator;
    link(dest: Element): boolean;
    link_filtered(dest: Element, filter?: Caps | null): boolean;
    link_pads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean;
    link_pads_filtered(
        srcpadname: string | null,
        dest: Element,
        destpadname?: string | null,
        filter?: Caps | null
    ): boolean;
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean;
    lost_state(): void;
    message_full(
        type: MessageType,
        domain: GLib.Quark,
        code: number,
        text: string | null,
        debug: string | null,
        file: string,
        _function: string,
        line: number
    ): void;
    message_full_with_details(
        type: MessageType,
        domain: GLib.Quark,
        code: number,
        text: string | null,
        debug: string | null,
        file: string,
        _function: string,
        line: number,
        structure: Structure
    ): void;
    no_more_pads(): void;
    post_message(message: Message): boolean;
    provide_clock(): Clock | null;
    query(query: Query): boolean;
    query_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
    query_duration(format: Format): [boolean, number | null];
    query_position(format: Format): [boolean, number | null];
    release_request_pad(pad: Pad): void;
    remove_pad(pad: Pad): boolean;
    remove_property_notify_watch(watch_id: number): void;
    request_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null;
    seek(
        rate: number,
        format: Format,
        flags: SeekFlags,
        start_type: SeekType,
        start: number,
        stop_type: SeekType,
        stop: number
    ): boolean;
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean;
    send_event(event: Event): boolean;
    set_base_time(time: ClockTime): void;
    set_bus(bus?: Bus | null): void;
    set_clock(clock?: Clock | null): boolean;
    set_context(context: Context): void;
    set_locked_state(locked_state: boolean): boolean;
    set_start_time(time: ClockTime): void;
    set_state(state: State): StateChangeReturn;
    sync_state_with_parent(): boolean;
    unlink(dest: Element): void;
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void;
    vfunc_change_state(transition: StateChange): StateChangeReturn;
    vfunc_get_state(timeout: ClockTime): [StateChangeReturn, State | null, State | null];
    vfunc_no_more_pads(): void;
    vfunc_pad_added(pad: Pad): void;
    vfunc_pad_removed(pad: Pad): void;
    vfunc_post_message(message: Message): boolean;
    vfunc_provide_clock(): Clock | null;
    vfunc_query(query: Query): boolean;
    vfunc_release_pad(pad: Pad): void;
    vfunc_request_new_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null;
    vfunc_send_event(event: Event): boolean;
    vfunc_set_bus(bus?: Bus | null): void;
    vfunc_set_clock(clock?: Clock | null): boolean;
    vfunc_set_context(context: Context): void;
    vfunc_set_state(state: State): StateChangeReturn;
    vfunc_state_changed(oldstate: State, newstate: State, pending: State): void;
    static make_from_uri(type: URIType, uri: string, elementname?: string | null): Element;
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.GType): boolean;
    static state_change_return_get_name(state_ret: StateChangeReturn): string;
    static state_get_name(state: State): string;
}
export module ElementFactory {
    export interface ConstructorProperties extends PluginFeature.ConstructorProperties {
        [key: string]: any;
    }
}
export class ElementFactory extends PluginFeature {
    static $gtype: GObject.GType<ElementFactory>;

    constructor(properties?: Partial<ElementFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ElementFactory.ConstructorProperties>, ...args: any[]): void;

    // Members

    can_sink_all_caps(caps: Caps): boolean;
    can_sink_any_caps(caps: Caps): boolean;
    can_src_all_caps(caps: Caps): boolean;
    can_src_any_caps(caps: Caps): boolean;
    create(name?: string | null): Element | null;
    get_element_type(): GObject.GType;
    get_metadata(key: string): string | null;
    get_metadata_keys(): string[] | null;
    get_num_pad_templates(): number;
    get_static_pad_templates(): StaticPadTemplate[];
    get_uri_protocols(): string[];
    get_uri_type(): URIType;
    has_interface(interfacename: string): boolean;
    list_is_type(type: ElementFactoryListType): boolean;
    static find(name: string): ElementFactory | null;
    static list_filter(
        list: ElementFactory[],
        caps: Caps,
        direction: PadDirection,
        subsetonly: boolean
    ): ElementFactory[];
    static list_get_elements(type: ElementFactoryListType, minrank: Rank): ElementFactory[];
    static make(factoryname: string, name?: string | null): Element | null;
}
export module FlagSet {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class FlagSet {
    static $gtype: GObject.GType<FlagSet>;

    constructor(properties?: Partial<FlagSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlagSet.ConstructorProperties>, ...args: any[]): void;

    // Members

    static register(flags_type: GObject.GType): GObject.GType;
}
export module Fraction {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class Fraction {
    static $gtype: GObject.GType<Fraction>;

    constructor(properties?: Partial<Fraction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Fraction.ConstructorProperties>, ...args: any[]): void;
}
export module FractionRange {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class FractionRange {
    static $gtype: GObject.GType<FractionRange>;

    constructor(properties?: Partial<FractionRange.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FractionRange.ConstructorProperties>, ...args: any[]): void;
}
export module GhostPad {
    export interface ConstructorProperties extends ProxyPad.ConstructorProperties {
        [key: string]: any;
    }
}
export class GhostPad extends ProxyPad {
    static $gtype: GObject.GType<GhostPad>;

    constructor(properties?: Partial<GhostPad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GhostPad.ConstructorProperties>, ...args: any[]): void;

    // Fields
    pad: ProxyPad | any;

    // Constructors

    static ["new"](name: string | null, target: Pad): GhostPad;
    static ["new"](...args: never[]): never;
    static new_from_template(name: string | null, target: Pad, templ: PadTemplate): GhostPad;
    static new_from_template(...args: never[]): never;
    static new_no_target(name: string | null, dir: PadDirection): GhostPad;
    static new_no_target_from_template(name: string | null, templ: PadTemplate): GhostPad;

    // Members

    construct(): boolean;
    get_target(): Pad | null;
    set_target(newtarget?: Pad | null): boolean;
    static activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean;
    static internal_activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean;
}
export module Int64Range {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class Int64Range {
    static $gtype: GObject.GType<Int64Range>;

    constructor(properties?: Partial<Int64Range.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Int64Range.ConstructorProperties>, ...args: any[]): void;
}
export module IntRange {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class IntRange {
    static $gtype: GObject.GType<IntRange>;

    constructor(properties?: Partial<IntRange.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IntRange.ConstructorProperties>, ...args: any[]): void;
}
export module Object {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        name: string;
    }
}
export abstract class Object extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;

    // Fields
    object: GObject.InitiallyUnowned;
    lock: GLib.Mutex;
    flags: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "deep-notify",
        callback: (_source: this, prop_object: Object, prop: GObject.ParamSpec) => void
    ): number;
    connect_after(
        signal: "deep-notify",
        callback: (_source: this, prop_object: Object, prop: GObject.ParamSpec) => void
    ): number;
    emit(signal: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void;

    // Members

    add_control_binding(binding: ControlBinding): boolean;
    default_error(error: GLib.Error, debug?: string | null): void;
    get_control_binding(property_name: string): ControlBinding | null;
    get_control_rate(): ClockTime;
    get_g_value_array(
        property_name: string,
        timestamp: ClockTime,
        interval: ClockTime,
        values: GObject.Value[]
    ): boolean;
    get_name(): string | null;
    get_parent(): Object | null;
    get_path_string(): string;
    get_value(property_name: string, timestamp: ClockTime): GObject.Value | null;
    has_active_control_bindings(): boolean;
    has_ancestor(ancestor: Object): boolean;
    has_as_ancestor(ancestor: Object): boolean;
    has_as_parent(parent: Object): boolean;
    ref(): Object;
    ref(...args: never[]): never;
    remove_control_binding(binding: ControlBinding): boolean;
    set_control_binding_disabled(property_name: string, disabled: boolean): void;
    set_control_bindings_disabled(disabled: boolean): void;
    set_control_rate(control_rate: ClockTime): void;
    set_name(name?: string | null): boolean;
    set_parent(parent: Object): boolean;
    suggest_next_sync(): ClockTime;
    sync_values(timestamp: ClockTime): boolean;
    unparent(): void;
    unref(): void;
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void;
    static check_uniqueness(list: Object[], name: string): boolean;
    static default_deep_notify(
        object: GObject.Object,
        orig: Object,
        pspec: GObject.ParamSpec,
        excluded_props?: string[] | null
    ): void;
    static replace(oldobj?: Object | null, newobj?: Object | null): [boolean, Object | null];
}
export module Pad {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        caps: Caps;
        direction: PadDirection;
        offset: number;
        template: PadTemplate;
    }
}
export class Pad extends Object {
    static $gtype: GObject.GType<Pad>;

    constructor(properties?: Partial<Pad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Pad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    caps: Caps;
    direction: PadDirection;
    offset: number;
    template: PadTemplate;

    // Fields
    object: Object | any;
    element_private: any;
    padtemplate: PadTemplate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "linked", callback: (_source: this, peer: Pad) => void): number;
    connect_after(signal: "linked", callback: (_source: this, peer: Pad) => void): number;
    emit(signal: "linked", peer: Pad): void;
    connect(signal: "unlinked", callback: (_source: this, peer: Pad) => void): number;
    connect_after(signal: "unlinked", callback: (_source: this, peer: Pad) => void): number;
    emit(signal: "unlinked", peer: Pad): void;

    // Constructors

    static ["new"](name: string | null, direction: PadDirection): Pad;
    static new_from_static_template(templ: StaticPadTemplate, name: string): Pad;
    static new_from_template(templ: PadTemplate, name?: string | null): Pad;

    // Members

    activate_mode(mode: PadMode, active: boolean): boolean;
    add_probe(mask: PadProbeType, callback: PadProbeCallback): number;
    can_link(sinkpad: Pad): boolean;
    chain(buffer: Buffer): FlowReturn;
    chain_list(list: BufferList): FlowReturn;
    check_reconfigure(): boolean;
    create_stream_id(parent: Element, stream_id?: string | null): string;
    event_default(parent: Object | null, event: Event): boolean;
    forward(forward: PadForwardFunction): boolean;
    get_allowed_caps(): Caps | null;
    get_current_caps(): Caps | null;
    get_direction(): PadDirection;
    get_element_private(): any | null;
    get_last_flow_return(): FlowReturn;
    get_offset(): number;
    get_pad_template(): PadTemplate | null;
    get_pad_template_caps(): Caps;
    get_parent_element(): Element | null;
    get_peer(): Pad | null;
    get_range(offset: number, size: number): [FlowReturn, Buffer];
    get_single_internal_link(): Pad | null;
    get_sticky_event(event_type: EventType, idx: number): Event | null;
    get_stream(): Stream | null;
    get_stream_id(): string | null;
    get_task_state(): TaskState;
    has_current_caps(): boolean;
    is_active(): boolean;
    is_blocked(): boolean;
    is_blocking(): boolean;
    is_linked(): boolean;
    iterate_internal_links(): Iterator | null;
    iterate_internal_links_default(parent?: Object | null): Iterator | null;
    link(sinkpad: Pad): PadLinkReturn;
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn;
    link_maybe_ghosting(sink: Pad): boolean;
    link_maybe_ghosting_full(sink: Pad, flags: PadLinkCheck): boolean;
    mark_reconfigure(): void;
    needs_reconfigure(): boolean;
    pause_task(): boolean;
    peer_query(query: Query): boolean;
    peer_query_accept_caps(caps: Caps): boolean;
    peer_query_caps(filter?: Caps | null): Caps;
    peer_query_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
    peer_query_duration(format: Format): [boolean, number | null];
    peer_query_position(format: Format): [boolean, number | null];
    proxy_query_accept_caps(query: Query): boolean;
    proxy_query_caps(query: Query): boolean;
    pull_range(offset: number, size: number): [FlowReturn, Buffer];
    push(buffer: Buffer): FlowReturn;
    push_event(event: Event): boolean;
    push_list(list: BufferList): FlowReturn;
    query(query: Query): boolean;
    query_accept_caps(caps: Caps): boolean;
    query_caps(filter?: Caps | null): Caps;
    query_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
    query_default(parent: Object | null, query: Query): boolean;
    query_duration(format: Format): [boolean, number | null];
    query_position(format: Format): [boolean, number | null];
    remove_probe(id: number): void;
    send_event(event: Event): boolean;
    set_activate_function_full(activate: PadActivateFunction): void;
    set_activatemode_function_full(activatemode: PadActivateModeFunction): void;
    set_active(active: boolean): boolean;
    set_chain_function_full(chain: PadChainFunction): void;
    set_chain_list_function_full(chainlist: PadChainListFunction): void;
    set_element_private(priv?: any | null): void;
    set_event_full_function_full(event: PadEventFullFunction): void;
    set_event_function_full(event: PadEventFunction): void;
    set_getrange_function_full(get: PadGetRangeFunction): void;
    set_iterate_internal_links_function_full(iterintlink: PadIterIntLinkFunction): void;
    set_link_function_full(link: PadLinkFunction): void;
    set_offset(offset: number): void;
    set_query_function_full(query: PadQueryFunction): void;
    set_unlink_function_full(unlink: PadUnlinkFunction): void;
    start_task(func: TaskFunction): boolean;
    sticky_events_foreach(foreach_func: PadStickyEventsForeachFunction): void;
    stop_task(): boolean;
    store_sticky_event(event: Event): FlowReturn;
    unlink(sinkpad: Pad): boolean;
    use_fixed_caps(): void;
    vfunc_linked(peer: Pad): void;
    vfunc_unlinked(peer: Pad): void;
    static link_get_name(ret: PadLinkReturn): string;
}
export module PadTemplate {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        caps: Caps;
        direction: PadDirection;
        gtype: GObject.GType;
        name_template: string;
        nameTemplate: string;
        presence: PadPresence;
    }
}
export class PadTemplate extends Object {
    static $gtype: GObject.GType<PadTemplate>;

    constructor(properties?: Partial<PadTemplate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PadTemplate.ConstructorProperties>, ...args: any[]): void;

    // Properties
    caps: Caps;
    direction: PadDirection;
    gtype: GObject.GType;
    name_template: string;
    nameTemplate: string;
    presence: PadPresence;

    // Fields
    object: Object | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "pad-created", callback: (_source: this, pad: Pad) => void): number;
    connect_after(signal: "pad-created", callback: (_source: this, pad: Pad) => void): number;
    emit(signal: "pad-created", pad: Pad): void;

    // Constructors

    static ["new"](name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate;
    static new_from_static_pad_template_with_gtype(
        pad_template: StaticPadTemplate,
        pad_type: GObject.GType
    ): PadTemplate;
    static new_with_gtype(
        name_template: string,
        direction: PadDirection,
        presence: PadPresence,
        caps: Caps,
        pad_type: GObject.GType
    ): PadTemplate;

    // Members

    get_caps(): Caps;
    get_documentation_caps(): Caps;
    pad_created(pad: Pad): void;
    set_documentation_caps(caps: Caps): void;
    vfunc_pad_created(pad: Pad): void;
}
export module ParamArray {
    export interface ConstructorProperties extends GObject.ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamArray extends GObject.ParamSpec {
    static $gtype: GObject.GType<ParamArray>;

    constructor(properties?: Partial<ParamArray.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamArray.ConstructorProperties>, ...args: any[]): void;
}
export module ParamFraction {
    export interface ConstructorProperties extends GObject.ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamFraction extends GObject.ParamSpec {
    static $gtype: GObject.GType<ParamFraction>;

    constructor(properties?: Partial<ParamFraction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamFraction.ConstructorProperties>, ...args: any[]): void;
}
export module Pipeline {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        auto_flush_bus: boolean;
        autoFlushBus: boolean;
        delay: number;
        latency: number;
    }
}
export class Pipeline extends Bin implements ChildProxy {
    static $gtype: GObject.GType<Pipeline>;

    constructor(properties?: Partial<Pipeline.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Pipeline.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_flush_bus: boolean;
    autoFlushBus: boolean;
    delay: number;
    latency: number;

    // Fields
    bin: Bin;
    fixed_clock: Clock;
    stream_time: ClockTime;

    // Constructors

    static ["new"](name?: string | null): Pipeline;

    // Members

    auto_clock(): void;
    get_auto_flush_bus(): boolean;
    get_bus(): Bus;
    get_bus(...args: never[]): never;
    get_delay(): ClockTime;
    get_latency(): ClockTime;
    get_pipeline_clock(): Clock;
    set_auto_flush_bus(auto_flush: boolean): void;
    set_delay(delay: ClockTime): void;
    set_latency(latency: ClockTime): void;
    use_clock(clock?: Clock | null): void;

    // Implemented Members

    child_added(child: GObject.Object, name: string): void;
    child_removed(child: GObject.Object, name: string): void;
    get_child_by_index<T = GObject.Object>(index: number): T;
    get_child_by_name<T = GObject.Object>(name: string): T;
    get_children_count(): number;
    get_property(name: string): unknown;
    get_property(...args: never[]): never;
    lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
    set_property(name: string, value: any): void;
    set_property(...args: never[]): never;
    vfunc_child_added(child: GObject.Object, name: string): void;
    vfunc_child_removed(child: GObject.Object, name: string): void;
    vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
    vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
    vfunc_get_children_count(): number;
}
export module Plugin {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Plugin extends Object {
    static $gtype: GObject.GType<Plugin>;

    constructor(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]): void;

    // Members

    add_dependency(
        env_vars: string[] | null,
        paths: string[] | null,
        names: string[] | null,
        flags: PluginDependencyFlags
    ): void;
    add_dependency_simple(
        env_vars: string | null,
        paths: string | null,
        names: string | null,
        flags: PluginDependencyFlags
    ): void;
    get_cache_data(): Structure | null;
    get_description(): string;
    get_filename(): string | null;
    get_license(): string;
    get_name(): string;
    get_name(...args: never[]): never;
    get_origin(): string;
    get_package(): string;
    get_release_date_string(): string | null;
    get_source(): string;
    get_version(): string;
    is_loaded(): boolean;
    load(): Plugin | null;
    set_cache_data(cache_data: Structure): void;
    static list_free(list: Plugin[]): void;
    static load_by_name(name: string): Plugin | null;
    static load_file(filename: string): Plugin;
    static register_static(
        major_version: number,
        minor_version: number,
        name: string,
        description: string,
        init_func: PluginInitFunc,
        version: string,
        license: string,
        source: string,
        _package: string,
        origin: string
    ): boolean;
    static register_static_full(
        major_version: number,
        minor_version: number,
        name: string,
        description: string,
        init_full_func: PluginInitFullFunc,
        version: string,
        license: string,
        source: string,
        _package: string,
        origin: string
    ): boolean;
}
export module PluginFeature {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class PluginFeature extends Object {
    static $gtype: GObject.GType<PluginFeature>;

    constructor(properties?: Partial<PluginFeature.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PluginFeature.ConstructorProperties>, ...args: any[]): void;

    // Members

    check_version(min_major: number, min_minor: number, min_micro: number): boolean;
    get_plugin(): Plugin | null;
    get_plugin_name(): string | null;
    get_rank(): number;
    load(): PluginFeature | null;
    set_rank(rank: number): void;
    static list_copy(list: PluginFeature[]): PluginFeature[];
    static list_debug(list: PluginFeature[]): void;
    static list_free(list: PluginFeature[]): void;
    static rank_compare_func(p1?: any | null, p2?: any | null): number;
}
export module ProxyPad {
    export interface ConstructorProperties extends Pad.ConstructorProperties {
        [key: string]: any;
    }
}
export class ProxyPad extends Pad {
    static $gtype: GObject.GType<ProxyPad>;

    constructor(properties?: Partial<ProxyPad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProxyPad.ConstructorProperties>, ...args: any[]): void;

    // Fields
    pad: Pad;

    // Members

    get_internal(): ProxyPad | null;
    static chain_default(pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn;
    static chain_list_default(pad: Pad, parent: Object | null, list: BufferList): FlowReturn;
    static getrange_default(pad: Pad, parent: Object, offset: number, size: number): [FlowReturn, Buffer];
    static iterate_internal_links_default(pad: Pad, parent?: Object | null): Iterator | null;
    static iterate_internal_links_default(...args: never[]): never;
}
export module Registry {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Registry extends Object {
    static $gtype: GObject.GType<Registry>;

    constructor(properties?: Partial<Registry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Registry.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: Object | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "feature-added", callback: (_source: this, feature: PluginFeature) => void): number;
    connect_after(signal: "feature-added", callback: (_source: this, feature: PluginFeature) => void): number;
    emit(signal: "feature-added", feature: PluginFeature): void;
    connect(signal: "plugin-added", callback: (_source: this, plugin: Plugin) => void): number;
    connect_after(signal: "plugin-added", callback: (_source: this, plugin: Plugin) => void): number;
    emit(signal: "plugin-added", plugin: Plugin): void;

    // Members

    add_feature(feature: PluginFeature): boolean;
    add_plugin(plugin: Plugin): boolean;
    check_feature_version(feature_name: string, min_major: number, min_minor: number, min_micro: number): boolean;
    feature_filter(filter: PluginFeatureFilter, first: boolean): PluginFeature[];
    find_feature(name: string, type: GObject.GType): PluginFeature | null;
    find_plugin(name: string): Plugin | null;
    get_feature_list(type: GObject.GType): PluginFeature[];
    get_feature_list_by_plugin(name: string): PluginFeature[];
    get_feature_list_cookie(): number;
    get_plugin_list(): Plugin[];
    lookup(filename: string): Plugin | null;
    lookup_feature(name: string): PluginFeature | null;
    plugin_filter(filter: PluginFilter, first: boolean): Plugin[];
    remove_feature(feature: PluginFeature): void;
    remove_plugin(plugin: Plugin): void;
    scan_path(path: string): boolean;
    static fork_is_enabled(): boolean;
    static fork_set_enabled(enabled: boolean): void;
    static get(): Registry;
}
export module Stream {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        caps: Caps;
        stream_flags: StreamFlags;
        streamFlags: StreamFlags;
        stream_id: string;
        streamId: string;
        stream_type: StreamType;
        streamType: StreamType;
        tags: TagList;
    }
}
export class Stream extends Object {
    static $gtype: GObject.GType<Stream>;

    constructor(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    caps: Caps;
    stream_flags: StreamFlags;
    streamFlags: StreamFlags;
    stream_id: string;
    streamId: string;
    stream_type: StreamType;
    streamType: StreamType;
    tags: TagList;

    // Constructors

    static ["new"](stream_id: string | null, caps: Caps | null, type: StreamType, flags: StreamFlags): Stream;

    // Members

    get_caps(): Caps | null;
    get_stream_flags(): StreamFlags;
    get_stream_id(): string | null;
    get_stream_type(): StreamType;
    get_tags(): TagList | null;
    set_caps(caps?: Caps | null): void;
    set_stream_flags(flags: StreamFlags): void;
    set_stream_type(stream_type: StreamType): void;
    set_tags(tags?: TagList | null): void;
}
export module StreamCollection {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        upstream_id: string;
        upstreamId: string;
    }
}
export class StreamCollection extends Object {
    static $gtype: GObject.GType<StreamCollection>;

    constructor(properties?: Partial<StreamCollection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StreamCollection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    upstream_id: string;
    upstreamId: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "stream-notify", callback: (_source: this, object: Stream, p0: GObject.ParamSpec) => void): number;
    connect_after(
        signal: "stream-notify",
        callback: (_source: this, object: Stream, p0: GObject.ParamSpec) => void
    ): number;
    emit(signal: "stream-notify", object: Stream, p0: GObject.ParamSpec): void;

    // Constructors

    static ["new"](upstream_id?: string | null): StreamCollection;

    // Members

    add_stream(stream: Stream): boolean;
    get_size(): number;
    get_stream(index: number): Stream | null;
    get_upstream_id(): string | null;
    vfunc_stream_notify(stream: Stream, pspec: GObject.ParamSpec): void;
}
export module SystemClock {
    export interface ConstructorProperties extends Clock.ConstructorProperties {
        [key: string]: any;
        clock_type: ClockType;
        clockType: ClockType;
    }
}
export class SystemClock extends Clock {
    static $gtype: GObject.GType<SystemClock>;

    constructor(properties?: Partial<SystemClock.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SystemClock.ConstructorProperties>, ...args: any[]): void;

    // Properties
    clock_type: ClockType;
    clockType: ClockType;

    // Fields
    clock: Clock;

    // Members

    static obtain(): Clock;
    static set_default(new_clock?: Clock | null): void;
}
export module Task {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Task extends Object {
    static $gtype: GObject.GType<Task>;

    constructor(properties?: Partial<Task.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Task.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: Object | any;
    state: TaskState;
    cond: GLib.Cond;
    lock: GLib.RecMutex | any;
    func: TaskFunction;
    user_data: any;
    notify: GLib.DestroyNotify | any;
    running: boolean;

    // Constructors

    static ["new"](func: TaskFunction): Task;

    // Members

    get_pool(): TaskPool;
    get_state(): TaskState;
    join(): boolean;
    pause(): boolean;
    resume(): boolean;
    set_enter_callback(enter_func: TaskThreadFunc): void;
    set_leave_callback(leave_func: TaskThreadFunc): void;
    set_lock(mutex: GLib.RecMutex): void;
    set_pool(pool: TaskPool): void;
    set_state(state: TaskState): boolean;
    start(): boolean;
    stop(): boolean;
    static cleanup_all(): void;
}
export module TaskPool {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TaskPool extends Object {
    static $gtype: GObject.GType<TaskPool>;

    constructor(properties?: Partial<TaskPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TaskPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: Object | any;

    // Constructors

    static ["new"](): TaskPool;

    // Members

    cleanup(): void;
    join(id?: any | null): void;
    prepare(): void;
    push(func: TaskPoolFunction): any | null;
    vfunc_cleanup(): void;
    vfunc_join(id?: any | null): void;
    vfunc_prepare(): void;
    vfunc_push(func: TaskPoolFunction): any | null;
}
export module Tracer {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        params: string;
    }
}
export abstract class Tracer extends Object {
    static $gtype: GObject.GType<Tracer>;

    constructor(properties?: Partial<Tracer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Tracer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    params: string;

    // Members

    static register(plugin: Plugin | null, name: string, type: GObject.GType): boolean;
}
export module TracerFactory {
    export interface ConstructorProperties extends PluginFeature.ConstructorProperties {
        [key: string]: any;
    }
}
export class TracerFactory extends PluginFeature {
    static $gtype: GObject.GType<TracerFactory>;

    constructor(properties?: Partial<TracerFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TracerFactory.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_tracer_type(): GObject.GType;
    static get_list(): TracerFactory[];
}
export module TracerRecord {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TracerRecord extends Object {
    static $gtype: GObject.GType<TracerRecord>;

    constructor(properties?: Partial<TracerRecord.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TracerRecord.ConstructorProperties>, ...args: any[]): void;
}
export module TypeFindFactory {
    export interface ConstructorProperties extends PluginFeature.ConstructorProperties {
        [key: string]: any;
    }
}
export class TypeFindFactory extends PluginFeature {
    static $gtype: GObject.GType<TypeFindFactory>;

    constructor(properties?: Partial<TypeFindFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TypeFindFactory.ConstructorProperties>, ...args: any[]): void;

    // Members

    call_function(find: TypeFind): void;
    get_caps(): Caps | null;
    get_extensions(): string[] | null;
    has_function(): boolean;
    static get_list(): TypeFindFactory[];
}
export module ValueArray {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class ValueArray {
    static $gtype: GObject.GType<ValueArray>;

    constructor(properties?: Partial<ValueArray.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ValueArray.ConstructorProperties>, ...args: any[]): void;

    // Members

    static append_and_take_value(value: any, append_value: any): void;
    static append_value(value: any, append_value: any): void;
    static get_size(value: any): number;
    static get_value(value: any, index: number): unknown;
    static init(value: any, prealloc: number): unknown;
    static prepend_value(value: any, prepend_value: any): void;
}
export module ValueList {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class ValueList {
    static $gtype: GObject.GType<ValueList>;

    constructor(properties?: Partial<ValueList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ValueList.ConstructorProperties>, ...args: any[]): void;

    // Members

    static append_and_take_value(value: any, append_value: any): void;
    static append_value(value: any, append_value: any): void;
    static concat(value1: any, value2: any): unknown;
    static get_size(value: any): number;
    static get_value(value: any, index: number): unknown;
    static init(value: any, prealloc: number): unknown;
    static merge(value1: any, value2: any): unknown;
    static prepend_value(value: any, prepend_value: any): void;
}

export class AllocationParams {
    static $gtype: GObject.GType<AllocationParams>;

    constructor(copy: AllocationParams);

    // Fields
    flags: MemoryFlags;
    align: number;
    prefix: number;
    padding: number;

    // Members
    copy(): AllocationParams | null;
    free(): void;
    init(): void;
}

export class AllocatorPrivate {
    static $gtype: GObject.GType<AllocatorPrivate>;

    constructor(copy: AllocatorPrivate);
}

export class AtomicQueue {
    static $gtype: GObject.GType<AtomicQueue>;

    constructor(initial_size: number);
    constructor(copy: AtomicQueue);

    // Constructors
    static ["new"](initial_size: number): AtomicQueue;

    // Members
    length(): number;
    peek(): any | null;
    pop(): any | null;
    push(data?: any | null): void;
    ref(): void;
    unref(): void;
}

export class BinPrivate {
    static $gtype: GObject.GType<BinPrivate>;

    constructor(copy: BinPrivate);
}

export class Buffer {
    static $gtype: GObject.GType<Buffer>;

    constructor();
    constructor(copy: Buffer);

    // Fields
    mini_object: MiniObject;
    pool: BufferPool;
    pts: ClockTime;
    dts: ClockTime;
    duration: ClockTime;
    offset: number;
    offset_end: number;

    // Constructors
    static ["new"](): Buffer;
    static new_allocate(allocator: Allocator | null, size: number, params?: AllocationParams | null): Buffer;
    static new_wrapped(data: Uint8Array | string): Buffer;
    static new_wrapped_bytes(bytes: GLib.Bytes | Uint8Array): Buffer;
    static new_wrapped_full(
        flags: MemoryFlags,
        data: Uint8Array | string,
        maxsize: number,
        offset: number,
        notify?: GLib.DestroyNotify | null
    ): Buffer;

    // Members
    add_meta(info: MetaInfo, params?: any | null): Meta | null;
    add_parent_buffer_meta(ref: Buffer): ParentBufferMeta | null;
    add_protection_meta(info: Structure): ProtectionMeta;
    add_reference_timestamp_meta(
        reference: Caps,
        timestamp: ClockTime,
        duration: ClockTime
    ): ReferenceTimestampMeta | null;
    append(buf2: Buffer): Buffer;
    append_memory(mem: Memory): void;
    append_region(buf2: Buffer, offset: number, size: number): Buffer;
    copy_deep(): Buffer;
    copy_into(src: Buffer, flags: BufferCopyFlags, offset: number, size: number): boolean;
    copy_region(flags: BufferCopyFlags, offset: number, size: number): Buffer;
    extract(offset: number): [number, Uint8Array];
    extract_dup(offset: number, size: number): Uint8Array;
    fill(offset: number, src: Uint8Array | string): number;
    find_memory(offset: number, size: number): [boolean, number, number, number];
    foreach_meta(func: BufferForeachMetaFunc): boolean;
    get_all_memory(): Memory | null;
    get_flags(): BufferFlags;
    get_memory(idx: number): Memory | null;
    get_memory_range(idx: number, length: number): Memory | null;
    get_meta(api: GObject.GType): Meta | null;
    get_n_meta(api_type: GObject.GType): number;
    get_reference_timestamp_meta(reference?: Caps | null): ReferenceTimestampMeta | null;
    get_size(): number;
    get_sizes(): [number, number | null, number | null];
    get_sizes_range(idx: number, length: number): [number, number | null, number | null];
    has_flags(flags: BufferFlags): boolean;
    insert_memory(idx: number, mem: Memory): void;
    is_all_memory_writable(): boolean;
    is_memory_range_writable(idx: number, length: number): boolean;
    map(flags: MapFlags): [boolean, MapInfo];
    map_range(idx: number, length: number, flags: MapFlags): [boolean, MapInfo];
    memcmp(offset: number, mem: Uint8Array | string): number;
    memset(offset: number, val: number, size: number): number;
    n_memory(): number;
    peek_memory(idx: number): Memory | null;
    prepend_memory(mem: Memory): void;
    remove_all_memory(): void;
    remove_memory(idx: number): void;
    remove_memory_range(idx: number, length: number): void;
    remove_meta(meta: Meta): boolean;
    replace_all_memory(mem: Memory): void;
    replace_memory(idx: number, mem: Memory): void;
    replace_memory_range(idx: number, length: number, mem: Memory): void;
    resize(offset: number, size: number): void;
    resize_range(idx: number, length: number, offset: number, size: number): boolean;
    set_flags(flags: BufferFlags): boolean;
    set_size(size: number): void;
    unmap(info: MapInfo): void;
    unset_flags(flags: BufferFlags): boolean;
    static get_max_memory(): number;
}

export class BufferList {
    static $gtype: GObject.GType<BufferList>;

    constructor();
    constructor(copy: BufferList);

    // Constructors
    static ["new"](): BufferList;
    static new_sized(size: number): BufferList;

    // Members
    calculate_size(): number;
    copy_deep(): BufferList;
    foreach(func: BufferListFunc): boolean;
    get(idx: number): Buffer | null;
    get_writable(idx: number): Buffer | null;
    insert(idx: number, buffer: Buffer): void;
    length(): number;
    remove(idx: number, length: number): void;
}

export class BufferPoolAcquireParams {
    static $gtype: GObject.GType<BufferPoolAcquireParams>;

    constructor(copy: BufferPoolAcquireParams);

    // Fields
    format: Format;
    start: number;
    stop: number;
    flags: BufferPoolAcquireFlags;
}

export class BufferPoolPrivate {
    static $gtype: GObject.GType<BufferPoolPrivate>;

    constructor(copy: BufferPoolPrivate);
}

export class BusPrivate {
    static $gtype: GObject.GType<BusPrivate>;

    constructor(copy: BusPrivate);
}

export class Caps {
    static $gtype: GObject.GType<Caps>;

    constructor();
    constructor(copy: Caps);

    // Fields
    mini_object: MiniObject;

    // Constructors
    static new_any(): Caps;
    static new_empty(): Caps;
    static new_empty_simple(media_type: string): Caps;

    // Members
    append(caps2: Caps): void;
    append_structure(structure: Structure): void;
    append_structure_full(structure: Structure, features?: CapsFeatures | null): void;
    can_intersect(caps2: Caps): boolean;
    copy(): Caps;
    copy_nth(nth: number): Caps;
    filter_and_map_in_place(func: CapsFilterMapFunc): void;
    fixate(): Caps;
    foreach(func: CapsForeachFunc): boolean;
    get_features(index: number): CapsFeatures | null;
    get_size(): number;
    get_structure(index: number): Structure;
    intersect(caps2: Caps): Caps;
    intersect_full(caps2: Caps, mode: CapsIntersectMode): Caps;
    is_always_compatible(caps2: Caps): boolean;
    is_any(): boolean;
    is_empty(): boolean;
    is_equal(caps2: Caps): boolean;
    is_equal_fixed(caps2: Caps): boolean;
    is_fixed(): boolean;
    is_strictly_equal(caps2: Caps): boolean;
    is_subset(superset: Caps): boolean;
    is_subset_structure(structure: Structure): boolean;
    is_subset_structure_full(structure: Structure, features?: CapsFeatures | null): boolean;
    map_in_place(func: CapsMapFunc): boolean;
    merge(caps2: Caps): Caps;
    merge_structure(structure: Structure): Caps;
    merge_structure_full(structure: Structure, features?: CapsFeatures | null): Caps;
    normalize(): Caps;
    remove_structure(idx: number): void;
    set_features(index: number, features?: CapsFeatures | null): void;
    set_features_simple(features?: CapsFeatures | null): void;
    set_value(field: string, value: any): void;
    simplify(): Caps;
    steal_structure(index: number): Structure | null;
    subtract(subtrahend: Caps): Caps;
    to_string(): string;
    truncate(): Caps;
    static from_string(string: string): Caps | null;
}

export class CapsFeatures {
    static $gtype: GObject.GType<CapsFeatures>;

    constructor();
    constructor(copy: CapsFeatures);

    // Constructors
    static new_any(): CapsFeatures;
    static new_empty(): CapsFeatures;

    // Members
    add(feature: string): void;
    add_id(feature: GLib.Quark): void;
    contains(feature: string): boolean;
    contains_id(feature: GLib.Quark): boolean;
    copy(): CapsFeatures;
    free(): void;
    get_nth(i: number): string | null;
    get_nth_id(i: number): GLib.Quark;
    get_size(): number;
    is_any(): boolean;
    is_equal(features2: CapsFeatures): boolean;
    remove(feature: string): void;
    remove_id(feature: GLib.Quark): void;
    set_parent_refcount(refcount: number): boolean;
    to_string(): string;
    static from_string(features: string): CapsFeatures | null;
}

export class ClockEntry {
    static $gtype: GObject.GType<ClockEntry>;

    constructor(copy: ClockEntry);

    // Fields
    refcount: number;
    clock: Clock;
    type: ClockEntryType;
    time: ClockTime;
    interval: ClockTime;
    status: ClockReturn;
    func: ClockCallback;
    user_data: any;
    destroy_data: GLib.DestroyNotify;
    unscheduled: boolean;
    woken_up: boolean;
}

export class ClockPrivate {
    static $gtype: GObject.GType<ClockPrivate>;

    constructor(copy: ClockPrivate);
}

export class Context {
    static $gtype: GObject.GType<Context>;

    constructor(context_type: string, persistent: boolean);
    constructor(copy: Context);

    // Constructors
    static ["new"](context_type: string, persistent: boolean): Context;

    // Members
    get_context_type(): string;
    get_structure(): Structure;
    has_context_type(context_type: string): boolean;
    is_persistent(): boolean;
    writable_structure(): Structure;
}

export class ControlBindingPrivate {
    static $gtype: GObject.GType<ControlBindingPrivate>;

    constructor(copy: ControlBindingPrivate);
}

export class DateTime {
    static $gtype: GObject.GType<DateTime>;

    constructor(
        tzoffset: number,
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        seconds: number
    );
    constructor(copy: DateTime);

    // Constructors
    static ["new"](
        tzoffset: number,
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        seconds: number
    ): DateTime;
    static new_from_g_date_time(dt: GLib.DateTime): DateTime;
    static new_from_iso8601_string(string: string): DateTime;
    static new_from_unix_epoch_local_time(secs: number): DateTime;
    static new_from_unix_epoch_local_time_usecs(usecs: number): DateTime;
    static new_from_unix_epoch_utc(secs: number): DateTime;
    static new_from_unix_epoch_utc_usecs(usecs: number): DateTime;
    static new_local_time(
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        seconds: number
    ): DateTime;
    static new_now_local_time(): DateTime;
    static new_now_utc(): DateTime;
    static new_y(year: number): DateTime;
    static new_ym(year: number, month: number): DateTime;
    static new_ymd(year: number, month: number, day: number): DateTime;

    // Members
    get_day(): number;
    get_hour(): number;
    get_microsecond(): number;
    get_minute(): number;
    get_month(): number;
    get_second(): number;
    get_time_zone_offset(): number;
    get_year(): number;
    has_day(): boolean;
    has_month(): boolean;
    has_second(): boolean;
    has_time(): boolean;
    has_year(): boolean;
    ref(): DateTime;
    to_g_date_time(): GLib.DateTime | null;
    to_iso8601_string(): string | null;
    unref(): void;
}

export class DebugCategory {
    static $gtype: GObject.GType<DebugCategory>;

    constructor(
        properties?: Partial<{
            threshold?: number;
            color?: number;
            name?: string;
            description?: string;
        }>
    );
    constructor(copy: DebugCategory);

    // Fields
    threshold: number;
    color: number;
    name: string;
    description: string;

    // Members
    free(): void;
    get_color(): number;
    get_description(): string;
    get_name(): string;
    get_threshold(): DebugLevel;
    reset_threshold(): void;
    set_threshold(level: DebugLevel): void;
}

export class DebugMessage {
    static $gtype: GObject.GType<DebugMessage>;

    constructor(copy: DebugMessage);

    // Members
    get(): string | null;
}

export class DeviceMonitorPrivate {
    static $gtype: GObject.GType<DeviceMonitorPrivate>;

    constructor(copy: DeviceMonitorPrivate);
}

export class DevicePrivate {
    static $gtype: GObject.GType<DevicePrivate>;

    constructor(copy: DevicePrivate);
}

export class DeviceProviderPrivate {
    static $gtype: GObject.GType<DeviceProviderPrivate>;

    constructor(copy: DeviceProviderPrivate);
}

export class Event {
    static $gtype: GObject.GType<Event>;

    constructor(format: Format, minsize: number, maxsize: number, async: boolean);
    constructor(copy: Event);

    // Fields
    mini_object: MiniObject;
    type: EventType;
    timestamp: number;
    seqnum: number;

    // Constructors
    static new_buffer_size(format: Format, minsize: number, maxsize: number, async: boolean): Event;
    static new_caps(caps: Caps): Event;
    static new_custom(type: EventType, structure: Structure): Event;
    static new_eos(): Event;
    static new_flush_start(): Event;
    static new_flush_stop(reset_time: boolean): Event;
    static new_gap(timestamp: ClockTime, duration: ClockTime): Event;
    static new_instant_rate_change(rate_multiplier: number, new_flags: SegmentFlags): Event;
    static new_instant_rate_sync_time(
        rate_multiplier: number,
        running_time: ClockTime,
        upstream_running_time: ClockTime
    ): Event;
    static new_latency(latency: ClockTime): Event;
    static new_navigation(structure: Structure): Event;
    static new_protection(system_id: string, data: Buffer, origin: string): Event;
    static new_qos(type: QOSType, proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event;
    static new_reconfigure(): Event;
    static new_seek(
        rate: number,
        format: Format,
        flags: SeekFlags,
        start_type: SeekType,
        start: number,
        stop_type: SeekType,
        stop: number
    ): Event;
    static new_segment(segment: Segment): Event;
    static new_segment_done(format: Format, position: number): Event;
    static new_select_streams(streams: string[]): Event;
    static new_sink_message(name: string, msg: Message): Event;
    static new_step(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event;
    static new_stream_collection(collection: StreamCollection): Event;
    static new_stream_group_done(group_id: number): Event;
    static new_stream_start(stream_id: string): Event;
    static new_tag(taglist: TagList): Event;
    static new_toc(toc: Toc, updated: boolean): Event;
    static new_toc_select(uid: string): Event;

    // Members
    copy_segment(segment: Segment): void;
    get_running_time_offset(): number;
    get_seqnum(): number;
    get_structure(): Structure | null;
    has_name(name: string): boolean;
    has_name_id(name: GLib.Quark): boolean;
    parse_buffer_size(): [Format, number, number, boolean];
    parse_caps(): Caps;
    parse_flush_stop(): boolean;
    parse_gap(): [ClockTime | null, ClockTime | null];
    parse_group_id(): [boolean, number];
    parse_instant_rate_change(): [number | null, SegmentFlags | null];
    parse_instant_rate_sync_time(): [number | null, ClockTime | null, ClockTime | null];
    parse_latency(): ClockTime;
    parse_protection(): [string | null, Buffer | null, string | null];
    parse_qos(): [QOSType, number, ClockTimeDiff, ClockTime];
    parse_seek(): [number, Format, SeekFlags, SeekType, number, SeekType, number];
    parse_seek_trickmode_interval(): ClockTime;
    parse_segment(): Segment;
    parse_segment_done(): [Format | null, number | null];
    parse_select_streams(): string[];
    parse_sink_message(): Message;
    parse_step(): [Format | null, number | null, number | null, boolean | null, boolean | null];
    parse_stream(): Stream;
    parse_stream_collection(): StreamCollection;
    parse_stream_flags(): StreamFlags;
    parse_stream_group_done(): number;
    parse_stream_start(): string;
    parse_tag(): TagList;
    parse_toc(): [Toc, boolean];
    parse_toc_select(): string | null;
    set_group_id(group_id: number): void;
    set_running_time_offset(offset: number): void;
    set_seek_trickmode_interval(interval: ClockTime): void;
    set_seqnum(seqnum: number): void;
    set_stream(stream: Stream): void;
    set_stream_flags(flags: StreamFlags): void;
    writable_structure(): Structure;
}

export class FormatDefinition {
    static $gtype: GObject.GType<FormatDefinition>;

    constructor(copy: FormatDefinition);

    // Fields
    value: Format;
    nick: string;
    description: string;
    quark: GLib.Quark;
}

export class GhostPadPrivate {
    static $gtype: GObject.GType<GhostPadPrivate>;

    constructor(copy: GhostPadPrivate);
}

export class Iterator {
    static $gtype: GObject.GType<Iterator>;

    constructor(type: GObject.GType, object: any);
    constructor(copy: Iterator);

    // Fields
    item: IteratorItemFunction;
    pushed: Iterator;
    type: GObject.GType;
    lock: GLib.Mutex;
    cookie: number;
    master_cookie: number;
    size: number;

    // Constructors
    static new_single(type: GObject.GType, object: any): Iterator;

    // Members
    copy(): Iterator;
    filter(func: GLib.CompareFunc, user_data: any): Iterator;
    find_custom(func: GLib.CompareFunc): [boolean, unknown];
    fold(func: IteratorFoldFunction, ret: any): IteratorResult;
    foreach(func: IteratorForeachFunction): IteratorResult;
    free(): void;
    next(): [IteratorResult, unknown];
    push(other: Iterator): void;
    resync(): void;
}

export class MapInfo {
    static $gtype: GObject.GType<MapInfo>;

    constructor(copy: MapInfo);

    // Fields
    memory: Memory;
    flags: MapFlags;
    data: Uint8Array;
    size: number;
    maxsize: number;
    user_data: any[];
}

export class Memory {
    static $gtype: GObject.GType<Memory>;

    constructor(
        flags: MemoryFlags,
        data: Uint8Array | string,
        maxsize: number,
        offset: number,
        notify?: GLib.DestroyNotify | null
    );
    constructor(copy: Memory);

    // Fields
    mini_object: MiniObject;
    allocator: Allocator;
    maxsize: number;
    align: number;
    offset: number;
    size: number;

    // Constructors
    static new_wrapped(
        flags: MemoryFlags,
        data: Uint8Array | string,
        maxsize: number,
        offset: number,
        notify?: GLib.DestroyNotify | null
    ): Memory;

    // Members
    copy(offset: number, size: number): Memory;
    get_sizes(): [number, number | null, number | null];
    is_span(mem2: Memory): [boolean, number];
    is_type(mem_type: string): boolean;
    make_mapped(flags: MapFlags): [Memory | null, MapInfo];
    map(flags: MapFlags): [boolean, MapInfo];
    resize(offset: number, size: number): void;
    share(offset: number, size: number): Memory;
    unmap(info: MapInfo): void;
}

export class Message {
    static $gtype: GObject.GType<Message>;

    constructor(src: Object | null, structure: Structure);
    constructor(copy: Message);

    // Fields
    mini_object: MiniObject;
    type: MessageType;
    timestamp: number;
    src: Object;
    seqnum: number;
    lock: GLib.Mutex;
    cond: GLib.Cond;

    // Constructors
    static new_application(src: Object | null, structure: Structure): Message;
    static new_async_done(src: Object | null, running_time: ClockTime): Message;
    static new_async_start(src?: Object | null): Message;
    static new_buffering(src: Object | null, percent: number): Message;
    static new_clock_lost(src: Object | null, clock: Clock): Message;
    static new_clock_provide(src: Object | null, clock: Clock, ready: boolean): Message;
    static new_custom(type: MessageType, src?: Object | null, structure?: Structure | null): Message;
    static new_device_added(src: Object, device: Device): Message;
    static new_device_changed(src: Object, device: Device, changed_device: Device): Message;
    static new_device_removed(src: Object, device: Device): Message;
    static new_duration_changed(src?: Object | null): Message;
    static new_element(src: Object | null, structure: Structure): Message;
    static new_eos(src?: Object | null): Message;
    static new_error(src: Object | null, error: GLib.Error, debug: string): Message;
    static new_error_with_details(
        src: Object | null,
        error: GLib.Error,
        debug: string,
        details?: Structure | null
    ): Message;
    static new_have_context(src: Object | null, context: Context): Message;
    static new_info(src: Object | null, error: GLib.Error, debug: string): Message;
    static new_info_with_details(
        src: Object | null,
        error: GLib.Error,
        debug: string,
        details?: Structure | null
    ): Message;
    static new_instant_rate_request(src: Object, rate_multiplier: number): Message;
    static new_latency(src?: Object | null): Message;
    static new_need_context(src: Object | null, context_type: string): Message;
    static new_new_clock(src: Object | null, clock: Clock): Message;
    static new_progress(src: Object, type: ProgressType, code: string, text: string): Message;
    static new_property_notify(src: Object, property_name: string, val?: GObject.Value | null): Message;
    static new_qos(
        src: Object,
        live: boolean,
        running_time: number,
        stream_time: number,
        timestamp: number,
        duration: number
    ): Message;
    static new_redirect(
        src: Object,
        location: string,
        tag_list?: TagList | null,
        entry_struct?: Structure | null
    ): Message;
    static new_request_state(src: Object | null, state: State): Message;
    static new_reset_time(src: Object | null, running_time: ClockTime): Message;
    static new_segment_done(src: Object | null, format: Format, position: number): Message;
    static new_segment_start(src: Object | null, format: Format, position: number): Message;
    static new_state_changed(src: Object | null, oldstate: State, newstate: State, pending: State): Message;
    static new_state_dirty(src?: Object | null): Message;
    static new_step_done(
        src: Object,
        format: Format,
        amount: number,
        rate: number,
        flush: boolean,
        intermediate: boolean,
        duration: number,
        eos: boolean
    ): Message;
    static new_step_start(
        src: Object,
        active: boolean,
        format: Format,
        amount: number,
        rate: number,
        flush: boolean,
        intermediate: boolean
    ): Message;
    static new_stream_collection(src: Object, collection: StreamCollection): Message;
    static new_stream_start(src?: Object | null): Message;
    static new_stream_status(src: Object, type: StreamStatusType, owner: Element): Message;
    static new_streams_selected(src: Object, collection: StreamCollection): Message;
    static new_structure_change(src: Object | null, type: StructureChangeType, owner: Element, busy: boolean): Message;
    static new_tag(src: Object | null, tag_list: TagList): Message;
    static new_toc(src: Object, toc: Toc, updated: boolean): Message;
    static new_warning(src: Object | null, error: GLib.Error, debug: string): Message;
    static new_warning_with_details(
        src: Object | null,
        error: GLib.Error,
        debug: string,
        details?: Structure | null
    ): Message;

    // Members
    add_redirect_entry(location: string, tag_list?: TagList | null, entry_struct?: Structure | null): void;
    get_num_redirect_entries(): number;
    get_seqnum(): number;
    get_stream_status_object(): GObject.Value | null;
    get_structure(): Structure | null;
    has_name(name: string): boolean;
    parse_async_done(): ClockTime | null;
    parse_buffering(): number | null;
    parse_buffering_stats(): [BufferingMode | null, number | null, number | null, number | null];
    parse_clock_lost(): Clock | null;
    parse_clock_provide(): [Clock | null, boolean | null];
    parse_context_type(): [boolean, string | null];
    parse_device_added(): Device | null;
    parse_device_changed(): [Device | null, Device | null];
    parse_device_removed(): Device | null;
    parse_error(): [GLib.Error | null, string | null];
    parse_error_details(): Structure;
    parse_group_id(): [boolean, number | null];
    parse_have_context(): Context | null;
    parse_info(): [GLib.Error | null, string | null];
    parse_info_details(): Structure;
    parse_instant_rate_request(): number | null;
    parse_new_clock(): Clock | null;
    parse_progress(): [ProgressType | null, string | null, string | null];
    parse_property_notify(): [Object | null, string | null, GObject.Value | null];
    parse_qos(): [boolean | null, number | null, number | null, number | null, number | null];
    parse_qos_stats(): [Format | null, number | null, number | null];
    parse_qos_values(): [number | null, number | null, number | null];
    parse_redirect_entry(entry_index: number): [string | null, TagList | null, Structure | null];
    parse_request_state(): State | null;
    parse_reset_time(): ClockTime | null;
    parse_segment_done(): [Format | null, number | null];
    parse_segment_start(): [Format | null, number | null];
    parse_state_changed(): [State | null, State | null, State | null];
    parse_step_done(): [
        Format | null,
        number | null,
        number | null,
        boolean | null,
        boolean | null,
        number | null,
        boolean | null
    ];
    parse_step_start(): [boolean | null, Format | null, number | null, number | null, boolean | null, boolean | null];
    parse_stream_collection(): StreamCollection | null;
    parse_stream_status(): [StreamStatusType, Element];
    parse_streams_selected(): StreamCollection | null;
    parse_structure_change(): [StructureChangeType, Element | null, boolean | null];
    parse_tag(): TagList;
    parse_toc(): [Toc, boolean];
    parse_warning(): [GLib.Error | null, string | null];
    parse_warning_details(): Structure;
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void;
    set_group_id(group_id: number): void;
    set_qos_stats(format: Format, processed: number, dropped: number): void;
    set_qos_values(jitter: number, proportion: number, quality: number): void;
    set_seqnum(seqnum: number): void;
    set_stream_status_object(object: any): void;
    streams_selected_add(stream: Stream): void;
    streams_selected_get_size(): number;
    streams_selected_get_stream(idx: number): Stream | null;
    writable_structure(): Structure;
}

export class Meta {
    static $gtype: GObject.GType<Meta>;

    constructor(copy: Meta);

    // Fields
    flags: MetaFlags;
    info: MetaInfo;

    // Members
    compare_seqnum(meta2: Meta): number;
    get_seqnum(): number;
    static api_type_get_tags(api: GObject.GType): string[];
    static api_type_has_tag(api: GObject.GType, tag: GLib.Quark): boolean;
    static api_type_register(api: string, tags: string[]): GObject.GType;
    static get_info(impl: string): MetaInfo | null;
    static register(
        api: GObject.GType,
        impl: string,
        size: number,
        init_func: MetaInitFunction,
        free_func: MetaFreeFunction,
        transform_func: MetaTransformFunction
    ): MetaInfo | null;
}

export class MetaInfo {
    static $gtype: GObject.GType<MetaInfo>;

    constructor(copy: MetaInfo);

    // Fields
    api: GObject.GType;
    type: GObject.GType;
    size: number;
    init_func: MetaInitFunction;
    free_func: MetaFreeFunction;
    transform_func: MetaTransformFunction;
}

export class MetaTransformCopy {
    static $gtype: GObject.GType<MetaTransformCopy>;

    constructor(
        properties?: Partial<{
            region?: boolean;
            offset?: number;
            size?: number;
        }>
    );
    constructor(copy: MetaTransformCopy);

    // Fields
    region: boolean;
    offset: number;
    size: number;
}

export class MiniObject {
    static $gtype: GObject.GType<MiniObject>;

    constructor(copy: MiniObject);

    // Fields
    type: GObject.GType;
    refcount: number;
    lockstate: number;
    flags: number;
    dispose: MiniObjectDisposeFunction;
    free: MiniObjectFreeFunction;
    priv_uint: number;
    priv_pointer: any;

    // Members
    add_parent(parent: MiniObject): void;
    get_qdata(quark: GLib.Quark): any | null;
    is_writable(): boolean;
    lock(flags: LockFlags): boolean;
    remove_parent(parent: MiniObject): void;
    set_qdata(quark: GLib.Quark, data?: any | null): void;
    steal_qdata(quark: GLib.Quark): any | null;
    unlock(flags: LockFlags): void;
    static replace(olddata?: MiniObject | null, newdata?: MiniObject | null): [boolean, MiniObject | null];
    static take(olddata: MiniObject, newdata: MiniObject): [boolean, MiniObject];
}

export class PadPrivate {
    static $gtype: GObject.GType<PadPrivate>;

    constructor(copy: PadPrivate);
}

export class PadProbeInfo {
    static $gtype: GObject.GType<PadProbeInfo>;

    constructor(copy: PadProbeInfo);

    // Fields
    type: PadProbeType;
    id: number;
    data: any;
    offset: number;
    size: number;

    // Members
    get_buffer(): Buffer | null;
    get_buffer_list(): BufferList | null;
    get_event(): Event | null;
    get_query(): Query | null;
}

export class ParamSpecArray {
    static $gtype: GObject.GType<ParamSpecArray>;

    constructor(copy: ParamSpecArray);

    // Fields
    element_spec: GObject.ParamSpec;
}

export class ParamSpecFraction {
    static $gtype: GObject.GType<ParamSpecFraction>;

    constructor(
        properties?: Partial<{
            min_num?: number;
            min_den?: number;
            max_num?: number;
            max_den?: number;
            def_num?: number;
            def_den?: number;
        }>
    );
    constructor(copy: ParamSpecFraction);

    // Fields
    min_num: number;
    min_den: number;
    max_num: number;
    max_den: number;
    def_num: number;
    def_den: number;
}

export class ParentBufferMeta {
    static $gtype: GObject.GType<ParentBufferMeta>;

    constructor(copy: ParentBufferMeta);

    // Fields
    buffer: Buffer;

    // Members
    static get_info(): MetaInfo;
}

export class ParseContext {
    static $gtype: GObject.GType<ParseContext>;

    constructor();
    constructor(copy: ParseContext);

    // Constructors
    static ["new"](): ParseContext;

    // Members
    copy(): ParseContext | null;
    free(): void;
    get_missing_elements(): string[] | null;
}

export class PipelinePrivate {
    static $gtype: GObject.GType<PipelinePrivate>;

    constructor(copy: PipelinePrivate);
}

export class PluginDesc {
    static $gtype: GObject.GType<PluginDesc>;

    constructor(copy: PluginDesc);

    // Fields
    major_version: number;
    minor_version: number;
    name: string;
    description: string;
    plugin_init: PluginInitFunc;
    version: string;
    license: string;
    source: string;
    "package": string;
    origin: string;
    release_datetime: string;
}

export class Poll {
    static $gtype: GObject.GType<Poll>;

    constructor(copy: Poll);

    // Members
    add_fd(fd: PollFD): boolean;
    fd_can_read(fd: PollFD): boolean;
    fd_can_write(fd: PollFD): boolean;
    fd_ctl_pri(fd: PollFD, active: boolean): boolean;
    fd_ctl_read(fd: PollFD, active: boolean): boolean;
    fd_ctl_write(fd: PollFD, active: boolean): boolean;
    fd_has_closed(fd: PollFD): boolean;
    fd_has_error(fd: PollFD): boolean;
    fd_has_pri(fd: PollFD): boolean;
    fd_ignored(fd: PollFD): void;
    free(): void;
    get_read_gpollfd(fd: GLib.PollFD): void;
    read_control(): boolean;
    remove_fd(fd: PollFD): boolean;
    restart(): void;
    set_controllable(controllable: boolean): boolean;
    set_flushing(flushing: boolean): void;
    wait(timeout: ClockTime): number;
    write_control(): boolean;
}

export class PollFD {
    static $gtype: GObject.GType<PollFD>;

    constructor(
        properties?: Partial<{
            fd?: number;
            idx?: number;
        }>
    );
    constructor(copy: PollFD);

    // Fields
    fd: number;
    idx: number;

    // Members
    init(): void;
}

export class Promise {
    static $gtype: GObject.GType<Promise>;

    constructor();
    constructor(copy: Promise);

    // Constructors
    static ["new"](): Promise;
    static new_with_change_func(func: PromiseChangeFunc): Promise;

    // Members
    expire(): void;
    get_reply(): Structure | null;
    interrupt(): void;
    reply(s?: Structure | null): void;
    wait(): PromiseResult;
}

export class ProtectionMeta {
    static $gtype: GObject.GType<ProtectionMeta>;

    constructor(copy: ProtectionMeta);

    // Fields
    meta: Meta;
    info: Structure;

    // Members
    static get_info(): MetaInfo;
}

export class ProxyPadPrivate {
    static $gtype: GObject.GType<ProxyPadPrivate>;

    constructor(copy: ProxyPadPrivate);
}

export class Query {
    static $gtype: GObject.GType<Query>;

    constructor(caps: Caps);
    constructor(copy: Query);

    // Fields
    mini_object: MiniObject;
    type: QueryType;

    // Constructors
    static new_accept_caps(caps: Caps): Query;
    static new_allocation(caps: Caps, need_pool: boolean): Query;
    static new_bitrate(): Query;
    static new_buffering(format: Format): Query;
    static new_caps(filter: Caps): Query;
    static new_context(context_type: string): Query;
    static new_convert(src_format: Format, value: number, dest_format: Format): Query;
    static new_custom(type: QueryType, structure?: Structure | null): Query;
    static new_drain(): Query;
    static new_duration(format: Format): Query;
    static new_formats(): Query;
    static new_latency(): Query;
    static new_position(format: Format): Query;
    static new_scheduling(): Query;
    static new_seeking(format: Format): Query;
    static new_segment(format: Format): Query;
    static new_uri(): Query;

    // Members
    add_allocation_meta(api: GObject.GType, params?: Structure | null): void;
    add_allocation_param(allocator?: Allocator | null, params?: AllocationParams | null): void;
    add_allocation_pool(pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void;
    add_buffering_range(start: number, stop: number): boolean;
    add_scheduling_mode(mode: PadMode): void;
    find_allocation_meta(api: GObject.GType): [boolean, number | null];
    get_n_allocation_metas(): number;
    get_n_allocation_params(): number;
    get_n_allocation_pools(): number;
    get_n_buffering_ranges(): number;
    get_n_scheduling_modes(): number;
    get_structure(): Structure | null;
    has_scheduling_mode(mode: PadMode): boolean;
    has_scheduling_mode_with_flags(mode: PadMode, flags: SchedulingFlags): boolean;
    parse_accept_caps(): Caps;
    parse_accept_caps_result(): boolean | null;
    parse_allocation(): [Caps | null, boolean | null];
    parse_bitrate(): number | null;
    parse_buffering_percent(): [boolean | null, number | null];
    parse_buffering_range(): [Format | null, number | null, number | null, number | null];
    parse_buffering_stats(): [BufferingMode | null, number | null, number | null, number | null];
    parse_caps(): Caps;
    parse_caps_result(): Caps;
    parse_context(): Context;
    parse_context_type(): [boolean, string | null];
    parse_convert(): [Format | null, number | null, Format | null, number | null];
    parse_duration(): [Format | null, number | null];
    parse_latency(): [boolean | null, ClockTime | null, ClockTime | null];
    parse_n_formats(): number | null;
    parse_nth_allocation_meta(index: number): [GObject.GType, Structure | null];
    parse_nth_allocation_param(index: number): [Allocator | null, AllocationParams | null];
    parse_nth_allocation_pool(index: number): [BufferPool | null, number | null, number | null, number | null];
    parse_nth_buffering_range(index: number): [boolean, number | null, number | null];
    parse_nth_format(nth: number): Format | null;
    parse_nth_scheduling_mode(index: number): PadMode;
    parse_position(): [Format | null, number | null];
    parse_scheduling(): [SchedulingFlags | null, number | null, number | null, number | null];
    parse_seeking(): [Format | null, boolean | null, number | null, number | null];
    parse_segment(): [number | null, Format | null, number | null, number | null];
    parse_uri(): string | null;
    parse_uri_redirection(): string | null;
    parse_uri_redirection_permanent(): boolean | null;
    remove_nth_allocation_meta(index: number): void;
    remove_nth_allocation_param(index: number): void;
    remove_nth_allocation_pool(index: number): void;
    set_accept_caps_result(result: boolean): void;
    set_bitrate(nominal_bitrate: number): void;
    set_buffering_percent(busy: boolean, percent: number): void;
    set_buffering_range(format: Format, start: number, stop: number, estimated_total: number): void;
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void;
    set_caps_result(caps: Caps): void;
    set_context(context: Context): void;
    set_convert(src_format: Format, src_value: number, dest_format: Format, dest_value: number): void;
    set_duration(format: Format, duration: number): void;
    set_formatsv(formats: Format[]): void;
    set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void;
    set_nth_allocation_param(index: number, allocator?: Allocator | null, params?: AllocationParams | null): void;
    set_nth_allocation_pool(
        index: number,
        pool: BufferPool | null,
        size: number,
        min_buffers: number,
        max_buffers: number
    ): void;
    set_position(format: Format, cur: number): void;
    set_scheduling(flags: SchedulingFlags, minsize: number, maxsize: number, align: number): void;
    set_seeking(format: Format, seekable: boolean, segment_start: number, segment_end: number): void;
    set_segment(rate: number, format: Format, start_value: number, stop_value: number): void;
    set_uri(uri: string): void;
    set_uri_redirection(uri: string): void;
    set_uri_redirection_permanent(permanent: boolean): void;
    writable_structure(): Structure;
}

export class ReferenceTimestampMeta {
    static $gtype: GObject.GType<ReferenceTimestampMeta>;

    constructor(copy: ReferenceTimestampMeta);

    // Fields
    reference: Caps;
    timestamp: ClockTime;
    duration: ClockTime;

    // Members
    static get_info(): MetaInfo;
}

export class RegistryPrivate {
    static $gtype: GObject.GType<RegistryPrivate>;

    constructor(copy: RegistryPrivate);
}

export class Sample {
    static $gtype: GObject.GType<Sample>;

    constructor(buffer?: Buffer | null, caps?: Caps | null, segment?: Segment | null, info?: Structure | null);
    constructor(copy: Sample);

    // Constructors
    static ["new"](
        buffer?: Buffer | null,
        caps?: Caps | null,
        segment?: Segment | null,
        info?: Structure | null
    ): Sample;

    // Members
    get_buffer(): Buffer | null;
    get_buffer_list(): BufferList | null;
    get_caps(): Caps | null;
    get_info(): Structure | null;
    get_segment(): Segment;
    set_buffer(buffer: Buffer): void;
    set_buffer_list(buffer_list: BufferList): void;
    set_caps(caps: Caps): void;
    set_info(info: Structure): boolean;
    set_segment(segment: Segment): void;
}

export class Segment {
    static $gtype: GObject.GType<Segment>;

    constructor();
    constructor(copy: Segment);

    // Fields
    flags: SegmentFlags;
    rate: number;
    applied_rate: number;
    format: Format;
    base: number;
    offset: number;
    start: number;
    stop: number;
    time: number;
    position: number;
    duration: number;

    // Constructors
    static ["new"](): Segment;

    // Members
    clip(format: Format, start: number, stop: number): [boolean, number | null, number | null];
    copy(): Segment;
    copy_into(dest: Segment): void;
    do_seek(
        rate: number,
        format: Format,
        flags: SeekFlags,
        start_type: SeekType,
        start: number,
        stop_type: SeekType,
        stop: number
    ): [boolean, boolean | null];
    free(): void;
    init(format: Format): void;
    is_equal(s1: Segment): boolean;
    offset_running_time(format: Format, offset: number): boolean;
    position_from_running_time(format: Format, running_time: number): number;
    position_from_running_time_full(format: Format, running_time: number): [number, number];
    position_from_stream_time(format: Format, stream_time: number): number;
    position_from_stream_time_full(format: Format, stream_time: number): [number, number];
    set_running_time(format: Format, running_time: number): boolean;
    to_position(format: Format, running_time: number): number;
    to_running_time(format: Format, position: number): number;
    to_running_time_full(format: Format, position: number): [number, number | null];
    to_stream_time(format: Format, position: number): number;
    to_stream_time_full(format: Format, position: number): [number, number];
}

export class StaticCaps {
    static $gtype: GObject.GType<StaticCaps>;

    constructor(copy: StaticCaps);

    // Fields
    caps: Caps;
    string: string;

    // Members
    cleanup(): void;
    get(): Caps | null;
}

export class StaticPadTemplate {
    static $gtype: GObject.GType<StaticPadTemplate>;

    constructor(copy: StaticPadTemplate);

    // Fields
    name_template: string;
    direction: PadDirection;
    presence: PadPresence;
    static_caps: StaticCaps;

    // Members
    get(): PadTemplate | null;
    get_caps(): Caps;
}

export class StreamCollectionPrivate {
    static $gtype: GObject.GType<StreamCollectionPrivate>;

    constructor(copy: StreamCollectionPrivate);
}

export class StreamPrivate {
    static $gtype: GObject.GType<StreamPrivate>;

    constructor(copy: StreamPrivate);
}

export class Structure {
    static $gtype: GObject.GType<Structure>;

    constructor(string: string);
    constructor(copy: Structure);

    // Fields
    type: GObject.GType;
    name: GLib.Quark;

    // Constructors
    static from_string(string: string): Structure;
    static new_empty(name: string): Structure;
    static new_from_string(string: string): Structure;
    static new_id_empty(quark: GLib.Quark): Structure;

    // Members
    can_intersect(struct2: Structure): boolean;
    copy(): Structure;
    filter_and_map_in_place(func: StructureFilterMapFunc): void;
    fixate(): void;
    fixate_field(field_name: string): boolean;
    fixate_field_boolean(field_name: string, target: boolean): boolean;
    fixate_field_nearest_double(field_name: string, target: number): boolean;
    fixate_field_nearest_fraction(field_name: string, target_numerator: number, target_denominator: number): boolean;
    fixate_field_nearest_int(field_name: string, target: number): boolean;
    fixate_field_string(field_name: string, target: string): boolean;
    foreach(func: StructureForeachFunc): boolean;
    free(): void;
    get_array(fieldname: string): [boolean, GObject.ValueArray];
    get_boolean(fieldname: string): [boolean, boolean];
    get_clock_time(fieldname: string): [boolean, ClockTime];
    get_date(fieldname: string): [boolean, GLib.Date];
    get_date_time(fieldname: string): [boolean, DateTime];
    get_double(fieldname: string): [boolean, number];
    get_enum(fieldname: string, enumtype: GObject.GType): [boolean, number];
    get_field_type(fieldname: string): GObject.GType;
    get_flagset(fieldname: string): [boolean, number | null, number | null];
    get_fraction(fieldname: string): [boolean, number, number];
    get_int(fieldname: string): [boolean, number];
    get_int64(fieldname: string): [boolean, number];
    get_list(fieldname: string): [boolean, GObject.ValueArray];
    get_name(): string;
    get_name_id(): GLib.Quark;
    get_string(fieldname: string): string | null;
    get_uint(fieldname: string): [boolean, number];
    get_uint64(fieldname: string): [boolean, number];
    get_value(fieldname: string): GObject.Value | null;
    has_field(fieldname: string): boolean;
    has_field_typed(fieldname: string, type: GObject.GType): boolean;
    has_name(name: string): boolean;
    id_get_value(field: GLib.Quark): GObject.Value | null;
    id_has_field(field: GLib.Quark): boolean;
    id_has_field_typed(field: GLib.Quark, type: GObject.GType): boolean;
    id_set_value(field: GLib.Quark, value: any): void;
    id_take_value(field: GLib.Quark, value: any): void;
    intersect(struct2: Structure): Structure | null;
    is_equal(structure2: Structure): boolean;
    is_subset(superset: Structure): boolean;
    map_in_place(func: StructureMapFunc): boolean;
    n_fields(): number;
    nth_field_name(index: number): string;
    remove_all_fields(): void;
    remove_field(fieldname: string): void;
    set_array(fieldname: string, array: GObject.ValueArray): void;
    set_list(fieldname: string, array: GObject.ValueArray): void;
    set_name(name: string): void;
    set_parent_refcount(refcount: number): boolean;
    set_value(fieldname: string, value: any): void;
    take_value(fieldname: string, value: any): void;
    to_string(): string;
    static take(oldstr_ptr?: Structure | null, newstr?: Structure | null): [boolean, Structure | null];
}

export class SystemClockPrivate {
    static $gtype: GObject.GType<SystemClockPrivate>;

    constructor(copy: SystemClockPrivate);
}

export class TagList {
    static $gtype: GObject.GType<TagList>;

    constructor();
    constructor(copy: TagList);

    // Fields
    mini_object: MiniObject;

    // Constructors
    static new_empty(): TagList;
    static new_from_string(str: string): TagList;

    // Members
    add_value(mode: TagMergeMode, tag: string, value: any): void;
    copy(): TagList;
    foreach(func: TagForeachFunc): void;
    get_boolean(tag: string): [boolean, boolean];
    get_boolean_index(tag: string, index: number): [boolean, boolean];
    get_date(tag: string): [boolean, GLib.Date];
    get_date_index(tag: string, index: number): [boolean, GLib.Date];
    get_date_time(tag: string): [boolean, DateTime];
    get_date_time_index(tag: string, index: number): [boolean, DateTime];
    get_double(tag: string): [boolean, number];
    get_double_index(tag: string, index: number): [boolean, number];
    get_float(tag: string): [boolean, number];
    get_float_index(tag: string, index: number): [boolean, number];
    get_int(tag: string): [boolean, number];
    get_int64(tag: string): [boolean, number];
    get_int64_index(tag: string, index: number): [boolean, number];
    get_int_index(tag: string, index: number): [boolean, number];
    get_pointer(tag: string): [boolean, any | null];
    get_pointer_index(tag: string, index: number): [boolean, any | null];
    get_sample(tag: string): [boolean, Sample];
    get_sample_index(tag: string, index: number): [boolean, Sample];
    get_scope(): TagScope;
    get_string(tag: string): [boolean, string];
    get_string_index(tag: string, index: number): [boolean, string];
    get_tag_size(tag: string): number;
    get_uint(tag: string): [boolean, number];
    get_uint64(tag: string): [boolean, number];
    get_uint64_index(tag: string, index: number): [boolean, number];
    get_uint_index(tag: string, index: number): [boolean, number];
    get_value_index(tag: string, index: number): GObject.Value | null;
    insert(from: TagList, mode: TagMergeMode): void;
    is_empty(): boolean;
    is_equal(list2: TagList): boolean;
    merge(list2: TagList | null, mode: TagMergeMode): TagList | null;
    n_tags(): number;
    nth_tag_name(index: number): string;
    peek_string_index(tag: string, index: number): [boolean, string];
    remove_tag(tag: string): void;
    set_scope(scope: TagScope): void;
    to_string(): string | null;
    static copy_value(list: TagList, tag: string): [boolean, unknown];
}

export class TaskPrivate {
    static $gtype: GObject.GType<TaskPrivate>;

    constructor(copy: TaskPrivate);
}

export class TimedValue {
    static $gtype: GObject.GType<TimedValue>;

    constructor(copy: TimedValue);

    // Fields
    timestamp: ClockTime;
    value: number;
}

export class Toc {
    static $gtype: GObject.GType<Toc>;

    constructor(scope: TocScope);
    constructor(copy: Toc);

    // Constructors
    static ["new"](scope: TocScope): Toc;

    // Members
    append_entry(entry: TocEntry): void;
    dump(): void;
    find_entry(uid: string): TocEntry | null;
    get_entries(): TocEntry[];
    get_scope(): TocScope;
    get_tags(): TagList;
    merge_tags(tags: TagList | null, mode: TagMergeMode): void;
    set_tags(tags?: TagList | null): void;
}

export class TocEntry {
    static $gtype: GObject.GType<TocEntry>;

    constructor(type: TocEntryType, uid: string);
    constructor(copy: TocEntry);

    // Constructors
    static ["new"](type: TocEntryType, uid: string): TocEntry;

    // Members
    append_sub_entry(subentry: TocEntry): void;
    get_entry_type(): TocEntryType;
    get_loop(): [boolean, TocLoopType | null, number | null];
    get_parent(): TocEntry | null;
    get_start_stop_times(): [boolean, number | null, number | null];
    get_sub_entries(): TocEntry[];
    get_tags(): TagList;
    get_toc(): Toc;
    get_uid(): string;
    is_alternative(): boolean;
    is_sequence(): boolean;
    merge_tags(tags: TagList | null, mode: TagMergeMode): void;
    set_loop(loop_type: TocLoopType, repeat_count: number): void;
    set_start_stop_times(start: number, stop: number): void;
    set_tags(tags?: TagList | null): void;
}

export class TracerPrivate {
    static $gtype: GObject.GType<TracerPrivate>;

    constructor(copy: TracerPrivate);
}

export class TypeFind {
    static $gtype: GObject.GType<TypeFind>;

    constructor(
        properties?: Partial<{
            data?: any;
        }>
    );
    constructor(copy: TypeFind);

    // Fields
    data: any;

    // Members
    get_length(): number;
    peek(offset: number): Uint8Array | null;
    suggest(probability: number, caps: Caps): void;
    static register(
        plugin: Plugin | null,
        name: string,
        rank: number,
        func: TypeFindFunction,
        extensions?: string | null,
        possible_caps?: Caps | null
    ): boolean;
}

export class Uri {
    static $gtype: GObject.GType<Uri>;

    constructor(
        scheme: string | null,
        userinfo: string | null,
        host: string | null,
        port: number,
        path?: string | null,
        query?: string | null,
        fragment?: string | null
    );
    constructor(copy: Uri);

    // Constructors
    static ["new"](
        scheme: string | null,
        userinfo: string | null,
        host: string | null,
        port: number,
        path?: string | null,
        query?: string | null,
        fragment?: string | null
    ): Uri;

    // Members
    append_path(relative_path: string): boolean;
    append_path_segment(path_segment: string): boolean;
    equal(second: Uri): boolean;
    from_string_with_base(uri: string): Uri;
    get_fragment(): string | null;
    get_host(): string | null;
    get_media_fragment_table(): GLib.HashTable<string, string> | null;
    get_path(): string | null;
    get_path_segments(): string[];
    get_path_string(): string | null;
    get_port(): number;
    get_query_keys(): string[];
    get_query_string(): string | null;
    get_query_table(): GLib.HashTable<string, string> | null;
    get_query_value(query_key: string): string | null;
    get_scheme(): string | null;
    get_userinfo(): string | null;
    is_normalized(): boolean;
    is_writable(): boolean;
    join(ref_uri?: Uri | null): Uri | null;
    make_writable(): Uri;
    new_with_base(
        scheme: string | null,
        userinfo: string | null,
        host: string | null,
        port: number,
        path?: string | null,
        query?: string | null,
        fragment?: string | null
    ): Uri;
    normalize(): boolean;
    query_has_key(query_key: string): boolean;
    remove_query_key(query_key: string): boolean;
    set_fragment(fragment?: string | null): boolean;
    set_host(host: string): boolean;
    set_path(path: string): boolean;
    set_path_segments(path_segments?: string[] | null): boolean;
    set_path_string(path: string): boolean;
    set_port(port: number): boolean;
    set_query_string(query: string): boolean;
    set_query_table(query_table?: GLib.HashTable<string, string> | null): boolean;
    set_query_value(query_key: string, query_value?: string | null): boolean;
    set_scheme(scheme: string): boolean;
    set_userinfo(userinfo: string): boolean;
    to_string(): string;
    static construct(protocol: string, location: string): string;
    static from_string(uri: string): Uri | null;
    static from_string_escaped(uri: string): Uri | null;
    static get_location(uri: string): string | null;
    static get_protocol(uri: string): string | null;
    static has_protocol(uri: string, protocol: string): boolean;
    static is_valid(uri: string): boolean;
    static join_strings(base_uri: string, ref_uri: string): string;
    static protocol_is_supported(type: URIType, protocol: string): boolean;
    static protocol_is_valid(protocol: string): boolean;
}

export class ValueTable {
    static $gtype: GObject.GType<ValueTable>;

    constructor(copy: ValueTable);

    // Fields
    type: GObject.GType;
    compare: ValueCompareFunc;
    serialize: ValueSerializeFunc;
    deserialize: ValueDeserializeFunc;
}

export interface ChildProxyNamespace {
    $gtype: GObject.GType<ChildProxy>;
    prototype: ChildProxyPrototype;
}
export type ChildProxy = ChildProxyPrototype;
export interface ChildProxyPrototype extends GObject.Object {
    // Members

    child_added(child: GObject.Object, name: string): void;
    child_removed(child: GObject.Object, name: string): void;
    get_child_by_index<T = GObject.Object>(index: number): T;
    get_child_by_name<T = GObject.Object>(name: string): T;
    get_children_count(): number;
    get_property(name: string): unknown;
    get_property(...args: never[]): never;
    lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
    set_property(name: string, value: any): void;
    set_property(...args: never[]): never;
    vfunc_child_added(child: GObject.Object, name: string): void;
    vfunc_child_removed(child: GObject.Object, name: string): void;
    vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
    vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
    vfunc_get_children_count(): number;
}

export const ChildProxy: ChildProxyNamespace;

export interface PresetNamespace {
    $gtype: GObject.GType<Preset>;
    prototype: PresetPrototype;

    get_app_dir(): string | null;
    set_app_dir(app_dir: string): boolean;
}
export type Preset = PresetPrototype;
export interface PresetPrototype extends GObject.Object {
    // Members

    delete_preset(name: string): boolean;
    get_meta(name: string, tag: string): [boolean, string];
    get_preset_names(): string[];
    get_property_names(): string[];
    is_editable(): boolean;
    load_preset(name: string): boolean;
    rename_preset(old_name: string, new_name: string): boolean;
    save_preset(name: string): boolean;
    set_meta(name: string, tag: string, value?: string | null): boolean;
    vfunc_delete_preset(name: string): boolean;
    vfunc_get_meta(name: string, tag: string): [boolean, string];
    vfunc_get_preset_names(): string[];
    vfunc_get_property_names(): string[];
    vfunc_load_preset(name: string): boolean;
    vfunc_rename_preset(old_name: string, new_name: string): boolean;
    vfunc_save_preset(name: string): boolean;
    vfunc_set_meta(name: string, tag: string, value?: string | null): boolean;
}

export const Preset: PresetNamespace;

export interface TagSetterNamespace {
    $gtype: GObject.GType<TagSetter>;
    prototype: TagSetterPrototype;
}
export type TagSetter = TagSetterPrototype;
export interface TagSetterPrototype extends Element {
    // Members

    add_tag_value(mode: TagMergeMode, tag: string, value: any): void;
    get_tag_list(): TagList | null;
    get_tag_merge_mode(): TagMergeMode;
    merge_tags(list: TagList, mode: TagMergeMode): void;
    reset_tags(): void;
    set_tag_merge_mode(mode: TagMergeMode): void;
}

export const TagSetter: TagSetterNamespace;

export interface TocSetterNamespace {
    $gtype: GObject.GType<TocSetter>;
    prototype: TocSetterPrototype;
}
export type TocSetter = TocSetterPrototype;
export interface TocSetterPrototype extends Element {
    // Members

    get_toc(): Toc | null;
    reset(): void;
    set_toc(toc?: Toc | null): void;
}

export const TocSetter: TocSetterNamespace;

export interface URIHandlerNamespace {
    $gtype: GObject.GType<URIHandler>;
    prototype: URIHandlerPrototype;
}
export type URIHandler = URIHandlerPrototype;
export interface URIHandlerPrototype extends GObject.Object {
    // Members

    get_protocols(): string[] | null;
    get_uri(): string | null;
    get_uri_type(): URIType;
    set_uri(uri: string): boolean;
    vfunc_get_uri(): string | null;
    vfunc_set_uri(uri: string): boolean;
}

export const URIHandler: URIHandlerNamespace;

export type ClockID = any;
export type ClockTime = number;
export type ClockTimeDiff = number;
export type ElementFactoryListType = number;

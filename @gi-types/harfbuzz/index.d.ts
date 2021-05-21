/**
 * HarfBuzz 0.0
 *
 * Generated from 0.0
 */

import * as GObject from "@gi-types/gobject";
import * as GLib from "@gi-types/glib";

export const AAT_LAYOUT_NO_SELECTOR_INDEX: number;
export const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number;
export const FEATURE_GLOBAL_START: number;
export const LANGUAGE_INVALID: language_t;
export const MAP_VALUE_INVALID: codepoint_t;
export const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number;
export const OT_LAYOUT_NO_FEATURE_INDEX: number;
export const OT_LAYOUT_NO_SCRIPT_INDEX: number;
export const OT_LAYOUT_NO_VARIATIONS_INDEX: number;
export const OT_MAX_TAGS_PER_LANGUAGE: number;
export const OT_MAX_TAGS_PER_SCRIPT: number;
export const OT_VAR_NO_AXIS_INDEX: number;
export const SET_VALUE_INVALID: codepoint_t;
export const UNICODE_MAX: number;
export const UNICODE_MAX_DECOMPOSITION_LEN: number;
export const VERSION_MAJOR: number;
export const VERSION_MICRO: number;
export const VERSION_MINOR: number;
export const VERSION_STRING: string;
export function blob_copy_writable_or_fail(blob: blob_t): blob_t;
export function blob_create_from_file(file_name: string): blob_t;
export function blob_create_sub_blob(parent: blob_t, offset: number, length: number): blob_t;
export function blob_get_data(blob: blob_t): string[];
export function blob_get_data_writable(blob: blob_t): string[];
export function blob_get_empty(): blob_t;
export function blob_get_length(blob: blob_t): number;
export function blob_is_immutable(blob: blob_t): bool_t;
export function blob_make_immutable(blob: blob_t): void;
export function buffer_add(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void;
export function buffer_add_codepoints(
    buffer: buffer_t,
    text: codepoint_t[],
    item_offset: number,
    item_length: number
): void;
export function buffer_add_latin1(
    buffer: buffer_t,
    text: Uint8Array | string,
    item_offset: number,
    item_length: number
): void;
export function buffer_add_utf16(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void;
export function buffer_add_utf32(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void;
export function buffer_add_utf8(
    buffer: buffer_t,
    text: Uint8Array | string,
    item_offset: number,
    item_length: number
): void;
export function buffer_allocation_successful(buffer: buffer_t): bool_t;
export function buffer_append(buffer: buffer_t, source: buffer_t, start: number, end: number): void;
export function buffer_clear_contents(buffer: buffer_t): void;
export function buffer_create(): buffer_t;
export function buffer_deserialize_glyphs(
    buffer: buffer_t,
    buf: string[],
    font: font_t,
    format: buffer_serialize_format_t
): [bool_t, string];
export function buffer_deserialize_unicode(
    buffer: buffer_t,
    buf: string[],
    format: buffer_serialize_format_t
): [bool_t, string];
export function buffer_diff(
    buffer: buffer_t,
    reference: buffer_t,
    dottedcircle_glyph: codepoint_t,
    position_fuzz: number
): buffer_diff_flags_t;
export function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t;
export function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t;
export function buffer_get_direction(buffer: buffer_t): direction_t;
export function buffer_get_empty(): buffer_t;
export function buffer_get_flags(buffer: buffer_t): buffer_flags_t;
export function buffer_get_glyph_infos(buffer: buffer_t): glyph_info_t[];
export function buffer_get_glyph_positions(buffer: buffer_t): glyph_position_t[];
export function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t;
export function buffer_get_language(buffer: buffer_t): language_t;
export function buffer_get_length(buffer: buffer_t): number;
export function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t;
export function buffer_get_script(buffer: buffer_t): script_t;
export function buffer_get_segment_properties(buffer: buffer_t): segment_properties_t;
export function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t;
export function buffer_guess_segment_properties(buffer: buffer_t): void;
export function buffer_has_positions(buffer: buffer_t): bool_t;
export function buffer_normalize_glyphs(buffer: buffer_t): void;
export function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t;
export function buffer_reset(buffer: buffer_t): void;
export function buffer_reverse(buffer: buffer_t): void;
export function buffer_reverse_clusters(buffer: buffer_t): void;
export function buffer_reverse_range(buffer: buffer_t, start: number, end: number): void;
export function buffer_serialize(
    buffer: buffer_t,
    start: number,
    end: number,
    font: font_t | null,
    format: buffer_serialize_format_t,
    flags: buffer_serialize_flags_t
): [number, Uint8Array, number | null];
export function buffer_serialize_format_from_string(str: Uint8Array | string): buffer_serialize_format_t;
export function buffer_serialize_format_to_string(format: buffer_serialize_format_t): string;
export function buffer_serialize_glyphs(
    buffer: buffer_t,
    start: number,
    end: number,
    font: font_t | null,
    format: buffer_serialize_format_t,
    flags: buffer_serialize_flags_t
): [number, Uint8Array, number | null];
export function buffer_serialize_list_formats(): string[];
export function buffer_serialize_unicode(
    buffer: buffer_t,
    start: number,
    end: number,
    format: buffer_serialize_format_t,
    flags: buffer_serialize_flags_t
): [number, Uint8Array, number | null];
export function buffer_set_cluster_level(buffer: buffer_t, cluster_level: buffer_cluster_level_t): void;
export function buffer_set_content_type(buffer: buffer_t, content_type: buffer_content_type_t): void;
export function buffer_set_direction(buffer: buffer_t, direction: direction_t): void;
export function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void;
export function buffer_set_invisible_glyph(buffer: buffer_t, invisible: codepoint_t): void;
export function buffer_set_language(buffer: buffer_t, language: language_t): void;
export function buffer_set_length(buffer: buffer_t, length: number): bool_t;
export function buffer_set_message_func(buffer: buffer_t, func: buffer_message_func_t, destroy: destroy_func_t): void;
export function buffer_set_replacement_codepoint(buffer: buffer_t, replacement: codepoint_t): void;
export function buffer_set_script(buffer: buffer_t, script: script_t): void;
export function buffer_set_segment_properties(buffer: buffer_t, props: segment_properties_t): void;
export function buffer_set_unicode_funcs(buffer: buffer_t, unicode_funcs: unicode_funcs_t): void;
export function color_get_alpha(color: color_t): number;
export function color_get_blue(color: color_t): number;
export function color_get_green(color: color_t): number;
export function color_get_red(color: color_t): number;
export function direction_from_string(str: Uint8Array | string): direction_t;
export function direction_to_string(direction: direction_t): string;
export function face_builder_add_table(face: face_t, tag: tag_t, blob: blob_t): bool_t;
export function face_builder_create(): face_t;
export function face_collect_unicodes(face: face_t, out: set_t): void;
export function face_collect_variation_selectors(face: face_t, out: set_t): void;
export function face_collect_variation_unicodes(face: face_t, variation_selector: codepoint_t, out: set_t): void;
export function face_count(blob: blob_t): number;
export function face_create(blob: blob_t, index: number): face_t;
export function face_create_for_tables(reference_table_func: reference_table_func_t, destroy: destroy_func_t): face_t;
export function face_get_empty(): face_t;
export function face_get_glyph_count(face: face_t): number;
export function face_get_index(face: face_t): number;
export function face_get_table_tags(face: face_t, start_offset: number): [number, tag_t[]];
export function face_get_upem(face: face_t): number;
export function face_is_immutable(face: face_t): bool_t;
export function face_make_immutable(face: face_t): void;
export function face_reference_blob(face: face_t): blob_t;
export function face_reference_table(face: face_t, tag: tag_t): blob_t;
export function face_set_glyph_count(face: face_t, glyph_count: number): void;
export function face_set_index(face: face_t, index: number): void;
export function face_set_upem(face: face_t, upem: number): void;
export function feature_from_string(str: Uint8Array | string): [bool_t, feature_t];
export function feature_to_string(feature: feature_t): string[];
export function font_add_glyph_origin_for_direction(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t,
    x: position_t,
    y: position_t
): [position_t, position_t];
export function font_create(face: face_t): font_t;
export function font_create_sub_font(parent: font_t): font_t;
export function font_funcs_create(): font_funcs_t;
export function font_funcs_get_empty(): font_funcs_t;
export function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t;
export function font_funcs_make_immutable(ffuncs: font_funcs_t): void;
export function font_funcs_set_font_h_extents_func(
    ffuncs: font_funcs_t,
    func: font_get_font_h_extents_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_font_v_extents_func(
    ffuncs: font_funcs_t,
    func: font_get_font_v_extents_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_contour_point_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_contour_point_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_extents_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_extents_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_from_name_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_from_name_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_h_advance_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_h_advance_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_h_advances_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_h_advances_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_h_kerning_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_h_kerning_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_h_origin_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_h_origin_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_name_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_name_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_v_advance_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_v_advance_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_v_advances_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_v_advances_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_v_kerning_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_v_kerning_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_glyph_v_origin_func(
    ffuncs: font_funcs_t,
    func: font_get_glyph_v_origin_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_nominal_glyph_func(
    ffuncs: font_funcs_t,
    func: font_get_nominal_glyph_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_nominal_glyphs_func(
    ffuncs: font_funcs_t,
    func: font_get_nominal_glyphs_func_t,
    destroy: destroy_func_t
): void;
export function font_funcs_set_variation_glyph_func(
    ffuncs: font_funcs_t,
    func: font_get_variation_glyph_func_t,
    destroy: destroy_func_t
): void;
export function font_get_empty(): font_t;
export function font_get_extents_for_direction(font: font_t, direction: direction_t): font_extents_t;
export function font_get_face(font: font_t): face_t;
export function font_get_glyph(
    font: font_t,
    unicode: codepoint_t,
    variation_selector: codepoint_t
): [bool_t, codepoint_t];
export function font_get_glyph_advance_for_direction(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t
): [position_t, position_t];
export function font_get_glyph_advances_for_direction(
    font: font_t,
    direction: direction_t,
    count: number,
    first_glyph: codepoint_t,
    glyph_stride: number
): [position_t, number];
export function font_get_glyph_contour_point(
    font: font_t,
    glyph: codepoint_t,
    point_index: number
): [bool_t, position_t, position_t];
export function font_get_glyph_contour_point_for_origin(
    font: font_t,
    glyph: codepoint_t,
    point_index: number,
    direction: direction_t
): [bool_t, position_t, position_t];
export function font_get_glyph_extents(font: font_t, glyph: codepoint_t): [bool_t, glyph_extents_t];
export function font_get_glyph_extents_for_origin(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t
): [bool_t, glyph_extents_t];
export function font_get_glyph_from_name(font: font_t, name: string[]): [bool_t, codepoint_t];
export function font_get_glyph_h_advance(font: font_t, glyph: codepoint_t): position_t;
export function font_get_glyph_h_advances(
    font: font_t,
    count: number,
    first_glyph: codepoint_t,
    glyph_stride: number
): [position_t, number];
export function font_get_glyph_h_kerning(font: font_t, left_glyph: codepoint_t, right_glyph: codepoint_t): position_t;
export function font_get_glyph_h_origin(font: font_t, glyph: codepoint_t): [bool_t, position_t, position_t];
export function font_get_glyph_kerning_for_direction(
    font: font_t,
    first_glyph: codepoint_t,
    second_glyph: codepoint_t,
    direction: direction_t
): [position_t, position_t];
export function font_get_glyph_name(font: font_t, glyph: codepoint_t): [bool_t, string[]];
export function font_get_glyph_origin_for_direction(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t
): [position_t, position_t];
export function font_get_glyph_v_advance(font: font_t, glyph: codepoint_t): position_t;
export function font_get_glyph_v_advances(
    font: font_t,
    count: number,
    first_glyph: codepoint_t,
    glyph_stride: number
): [position_t, number];
export function font_get_glyph_v_kerning(font: font_t, top_glyph: codepoint_t, bottom_glyph: codepoint_t): position_t;
export function font_get_glyph_v_origin(font: font_t, glyph: codepoint_t): [bool_t, position_t, position_t];
export function font_get_h_extents(font: font_t): [bool_t, font_extents_t];
export function font_get_nominal_glyph(font: font_t, unicode: codepoint_t): [bool_t, codepoint_t];
export function font_get_nominal_glyphs(
    font: font_t,
    count: number,
    first_unicode: codepoint_t,
    unicode_stride: number,
    first_glyph: codepoint_t,
    glyph_stride: number
): number;
export function font_get_parent(font: font_t): font_t;
export function font_get_ppem(font: font_t): [number, number];
export function font_get_ptem(font: font_t): number;
export function font_get_scale(font: font_t): [number, number];
export function font_get_v_extents(font: font_t): [bool_t, font_extents_t];
export function font_get_var_coords_normalized(font: font_t, length: number): number;
export function font_get_variation_glyph(
    font: font_t,
    unicode: codepoint_t,
    variation_selector: codepoint_t
): [bool_t, codepoint_t];
export function font_glyph_from_string(font: font_t, s: Uint8Array | string): [bool_t, codepoint_t];
export function font_glyph_to_string(font: font_t, glyph: codepoint_t): string[];
export function font_is_immutable(font: font_t): bool_t;
export function font_make_immutable(font: font_t): void;
export function font_set_face(font: font_t, face: face_t): void;
export function font_set_funcs(font: font_t, klass: font_funcs_t, destroy: destroy_func_t): void;
export function font_set_funcs_data(font: font_t, font_data: any | null, destroy: destroy_func_t): void;
export function font_set_parent(font: font_t, parent: font_t): void;
export function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void;
export function font_set_ptem(font: font_t, ptem: number): void;
export function font_set_scale(font: font_t, x_scale: number, y_scale: number): void;
export function font_set_var_coords_design(font: font_t, coords: number[]): void;
export function font_set_var_coords_normalized(font: font_t, coords: number[]): void;
export function font_set_var_named_instance(font: font_t, instance_index: number): void;
export function font_set_variations(font: font_t, variations: variation_t[]): void;
export function font_subtract_glyph_origin_for_direction(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t,
    x: position_t,
    y: position_t
): [position_t, position_t];
export function ft_font_changed(font: font_t): void;
export function ft_font_get_load_flags(font: font_t): number;
export function ft_font_set_funcs(font: font_t): void;
export function ft_font_set_load_flags(font: font_t, load_flags: number): void;
export function ft_font_unlock_face(font: font_t): void;
export function glib_blob_create(gbytes: GLib.Bytes | Uint8Array): blob_t;
export function glib_get_unicode_funcs(): unicode_funcs_t;
export function glib_script_from_script(script: script_t): GLib.UnicodeScript;
export function glib_script_to_script(script: GLib.UnicodeScript): script_t;
export function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t;
export function language_from_string(str: Uint8Array | string): language_t;
export function language_get_default(): language_t;
export function language_to_string(language: language_t): string;
export function map_allocation_successful(map: map_t): bool_t;
export function map_clear(map: map_t): void;
export function map_create(): map_t;
export function map_del(map: map_t, key: codepoint_t): void;
export function map_get(map: map_t, key: codepoint_t): codepoint_t;
export function map_get_empty(): map_t;
export function map_get_population(map: map_t): number;
export function map_has(map: map_t, key: codepoint_t): bool_t;
export function map_is_empty(map: map_t): bool_t;
export function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void;
export function ot_color_glyph_get_layers(
    face: face_t,
    glyph: codepoint_t,
    start_offset: number
): [number, ot_color_layer_t[] | null];
export function ot_color_glyph_reference_png(font: font_t, glyph: codepoint_t): blob_t;
export function ot_color_glyph_reference_svg(face: face_t, glyph: codepoint_t): blob_t;
export function ot_color_has_layers(face: face_t): bool_t;
export function ot_color_has_palettes(face: face_t): bool_t;
export function ot_color_has_png(face: face_t): bool_t;
export function ot_color_has_svg(face: face_t): bool_t;
export function ot_color_palette_color_get_name_id(face: face_t, color_index: number): ot_name_id_t;
export function ot_color_palette_get_colors(
    face: face_t,
    palette_index: number,
    start_offset: number
): [number, color_t[] | null];
export function ot_color_palette_get_count(face: face_t): number;
export function ot_color_palette_get_flags(face: face_t, palette_index: number): ot_color_palette_flags_t;
export function ot_color_palette_get_name_id(face: face_t, palette_index: number): ot_name_id_t;
export function ot_font_set_funcs(font: font_t): void;
export function ot_layout_collect_features(
    face: face_t,
    table_tag: tag_t,
    scripts: tag_t,
    languages: tag_t,
    features: tag_t
): set_t;
export function ot_layout_collect_lookups(
    face: face_t,
    table_tag: tag_t,
    scripts: tag_t,
    languages: tag_t,
    features: tag_t
): set_t;
export function ot_layout_feature_get_characters(
    face: face_t,
    table_tag: tag_t,
    feature_index: number,
    start_offset: number
): [number, codepoint_t[]];
export function ot_layout_feature_get_lookups(
    face: face_t,
    table_tag: tag_t,
    feature_index: number,
    start_offset: number
): [number, number[]];
export function ot_layout_feature_get_name_ids(
    face: face_t,
    table_tag: tag_t,
    feature_index: number
): [bool_t, ot_name_id_t | null, ot_name_id_t | null, ot_name_id_t | null, number | null, ot_name_id_t | null];
export function ot_layout_feature_with_variations_get_lookups(
    face: face_t,
    table_tag: tag_t,
    feature_index: number,
    variations_index: number,
    start_offset: number
): [number, number[]];
export function ot_layout_get_attach_points(face: face_t, glyph: codepoint_t, start_offset: number): [number, number[]];
export function ot_layout_get_baseline(
    font: font_t,
    baseline_tag: ot_layout_baseline_tag_t,
    direction: direction_t,
    script_tag: tag_t,
    language_tag: tag_t
): [bool_t, position_t];
export function ot_layout_get_glyph_class(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t;
export function ot_layout_get_glyphs_in_class(face: face_t, klass: ot_layout_glyph_class_t): set_t;
export function ot_layout_get_ligature_carets(
    font: font_t,
    direction: direction_t,
    glyph: codepoint_t,
    start_offset: number
): [number, position_t[]];
export function ot_layout_get_size_params(face: face_t): [bool_t, number, number, ot_name_id_t, number, number];
export function ot_layout_has_glyph_classes(face: face_t): bool_t;
export function ot_layout_has_positioning(face: face_t): bool_t;
export function ot_layout_has_substitution(face: face_t): bool_t;
export function ot_layout_language_find_feature(
    face: face_t,
    table_tag: tag_t,
    script_index: number,
    language_index: number,
    feature_tag: tag_t
): [bool_t, number];
export function ot_layout_language_get_feature_indexes(
    face: face_t,
    table_tag: tag_t,
    script_index: number,
    language_index: number,
    start_offset: number
): [number, number[]];
export function ot_layout_language_get_feature_tags(
    face: face_t,
    table_tag: tag_t,
    script_index: number,
    language_index: number,
    start_offset: number
): [number, tag_t[]];
export function ot_layout_language_get_required_feature(
    face: face_t,
    table_tag: tag_t,
    script_index: number,
    language_index: number
): [bool_t, number, tag_t];
export function ot_layout_language_get_required_feature_index(
    face: face_t,
    table_tag: tag_t,
    script_index: number,
    language_index: number
): [bool_t, number];
export function ot_layout_lookup_collect_glyphs(
    face: face_t,
    table_tag: tag_t,
    lookup_index: number
): [set_t, set_t, set_t, set_t];
export function ot_layout_lookup_get_glyph_alternates(
    face: face_t,
    lookup_index: number,
    glyph: codepoint_t,
    start_offset: number
): [number, codepoint_t[]];
export function ot_layout_lookup_substitute_closure(face: face_t, lookup_index: number): set_t;
export function ot_layout_lookup_would_substitute(
    face: face_t,
    lookup_index: number,
    glyphs: codepoint_t,
    glyphs_length: number,
    zero_context: bool_t
): bool_t;
export function ot_layout_lookups_substitute_closure(face: face_t, lookups: set_t): set_t;
export function ot_layout_script_find_language(
    face: face_t,
    table_tag: tag_t,
    script_index: number,
    language_tag: tag_t,
    language_index: number
): bool_t;
export function ot_layout_script_get_language_tags(
    face: face_t,
    table_tag: tag_t,
    script_index: number,
    start_offset: number
): [number, tag_t[]];
export function ot_layout_script_select_language(
    face: face_t,
    table_tag: tag_t,
    script_index: number,
    language_count: number,
    language_tags: tag_t
): [bool_t, number];
export function ot_layout_table_choose_script(
    face: face_t,
    table_tag: tag_t,
    script_tags: tag_t
): [bool_t, number, tag_t];
export function ot_layout_table_find_feature_variations(
    face: face_t,
    table_tag: tag_t,
    coords: number,
    num_coords: number
): [bool_t, number];
export function ot_layout_table_find_script(face: face_t, table_tag: tag_t, script_tag: tag_t): [bool_t, number];
export function ot_layout_table_get_feature_tags(
    face: face_t,
    table_tag: tag_t,
    start_offset: number
): [number, tag_t[]];
export function ot_layout_table_get_lookup_count(face: face_t, table_tag: tag_t): number;
export function ot_layout_table_get_script_tags(
    face: face_t,
    table_tag: tag_t,
    start_offset: number
): [number, tag_t[]];
export function ot_layout_table_select_script(
    face: face_t,
    table_tag: tag_t,
    script_count: number,
    script_tags: tag_t
): [bool_t, number, tag_t];
export function ot_math_get_constant(font: font_t, constant: ot_math_constant_t): position_t;
export function ot_math_get_glyph_assembly(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t,
    start_offset: number
): [number, ot_math_glyph_part_t[], position_t];
export function ot_math_get_glyph_italics_correction(font: font_t, glyph: codepoint_t): position_t;
export function ot_math_get_glyph_kerning(
    font: font_t,
    glyph: codepoint_t,
    kern: ot_math_kern_t,
    correction_height: position_t
): position_t;
export function ot_math_get_glyph_top_accent_attachment(font: font_t, glyph: codepoint_t): position_t;
export function ot_math_get_glyph_variants(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t,
    start_offset: number
): [number, ot_math_glyph_variant_t[]];
export function ot_math_get_min_connector_overlap(font: font_t, direction: direction_t): position_t;
export function ot_math_has_data(face: face_t): bool_t;
export function ot_math_is_glyph_extended_shape(face: face_t, glyph: codepoint_t): bool_t;
export function ot_meta_get_entry_tags(face: face_t, start_offset: number): [number, ot_meta_tag_t[]];
export function ot_meta_reference_entry(face: face_t, meta_tag: ot_meta_tag_t): blob_t;
export function ot_metrics_get_position(font: font_t, metrics_tag: ot_metrics_tag_t): [bool_t, position_t | null];
export function ot_metrics_get_variation(font: font_t, metrics_tag: ot_metrics_tag_t): number;
export function ot_metrics_get_x_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t;
export function ot_metrics_get_y_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t;
export function ot_name_get_utf16(face: face_t, name_id: ot_name_id_t, language: language_t): [number, number[]];
export function ot_name_get_utf32(face: face_t, name_id: ot_name_id_t, language: language_t): [number, number[]];
export function ot_name_get_utf8(face: face_t, name_id: ot_name_id_t, language: language_t): [number, string[]];
export function ot_name_list_names(face: face_t): ot_name_entry_t[];
export function ot_shape_glyphs_closure(font: font_t, buffer: buffer_t, features: feature_t[]): set_t;
export function ot_tag_from_language(language: language_t): tag_t;
export function ot_tag_to_language(tag: tag_t): language_t;
export function ot_tag_to_script(tag: tag_t): script_t;
export function ot_tags_from_script(script: script_t, script_tag_1: tag_t, script_tag_2: tag_t): void;
export function ot_tags_from_script_and_language(
    script: script_t,
    language: language_t,
    script_count?: number | null,
    language_count?: number | null
): [tag_t | null, tag_t | null];
export function ot_tags_to_script_and_language(
    script_tag: tag_t,
    language_tag: tag_t,
    script?: script_t | null,
    language?: language_t | null
): void;
export function ot_var_find_axis(face: face_t, axis_tag: tag_t, axis_index: number): [bool_t, ot_var_axis_t];
export function ot_var_find_axis_info(face: face_t, axis_tag: tag_t): [bool_t, ot_var_axis_info_t];
export function ot_var_get_axes(face: face_t, start_offset: number): [number, ot_var_axis_t[]];
export function ot_var_get_axis_count(face: face_t): number;
export function ot_var_get_axis_infos(face: face_t, start_offset: number): [number, ot_var_axis_info_t[]];
export function ot_var_get_named_instance_count(face: face_t): number;
export function ot_var_has_data(face: face_t): bool_t;
export function ot_var_named_instance_get_design_coords(face: face_t, instance_index: number): [number, number[]];
export function ot_var_named_instance_get_postscript_name_id(face: face_t, instance_index: number): ot_name_id_t;
export function ot_var_named_instance_get_subfamily_name_id(face: face_t, instance_index: number): ot_name_id_t;
export function ot_var_normalize_coords(face: face_t, coords_length: number, design_coords: number): number;
export function ot_var_normalize_variations(face: face_t, variations: variation_t, variations_length: number): number[];
export function script_from_iso15924_tag(tag: tag_t): script_t;
export function script_from_string(str: Uint8Array | string): script_t;
export function script_get_horizontal_direction(script: script_t): direction_t;
export function script_to_iso15924_tag(script: script_t): tag_t;
export function segment_properties_equal(a: segment_properties_t, b: segment_properties_t): bool_t;
export function segment_properties_hash(p: segment_properties_t): number;
export function set_add(set: set_t, codepoint: codepoint_t): void;
export function set_add_range(set: set_t, first: codepoint_t, last: codepoint_t): void;
export function set_allocation_successful(set: set_t): bool_t;
export function set_clear(set: set_t): void;
export function set_create(): set_t;
export function set_del(set: set_t, codepoint: codepoint_t): void;
export function set_del_range(set: set_t, first: codepoint_t, last: codepoint_t): void;
export function set_get_empty(): set_t;
export function set_get_max(set: set_t): codepoint_t;
export function set_get_min(set: set_t): codepoint_t;
export function set_get_population(set: set_t): number;
export function set_has(set: set_t, codepoint: codepoint_t): bool_t;
export function set_intersect(set: set_t, other: set_t): void;
export function set_invert(set: set_t): void;
export function set_is_empty(set: set_t): bool_t;
export function set_is_equal(set: set_t, other: set_t): bool_t;
export function set_is_subset(set: set_t, larger_set: set_t): bool_t;
export function set_next(set: set_t, codepoint: codepoint_t): [bool_t, codepoint_t];
export function set_next_range(set: set_t, last: codepoint_t): [bool_t, codepoint_t, codepoint_t];
export function set_previous(set: set_t, codepoint: codepoint_t): [bool_t, codepoint_t];
export function set_previous_range(set: set_t, first: codepoint_t): [bool_t, codepoint_t, codepoint_t];
export function set_set(set: set_t, other: set_t): void;
export function set_subtract(set: set_t, other: set_t): void;
export function set_symmetric_difference(set: set_t, other: set_t): void;
export function set_union(set: set_t, other: set_t): void;
export function shape(font: font_t, buffer: buffer_t, features?: feature_t[] | null): void;
export function shape_full(
    font: font_t,
    buffer: buffer_t,
    features?: feature_t[] | null,
    shaper_list?: string[] | null
): bool_t;
export function shape_list_shapers(): string[];
export function shape_plan_create(
    face: face_t,
    props: segment_properties_t,
    user_features: feature_t[],
    shaper_list: string[]
): shape_plan_t;
export function shape_plan_create2(
    face: face_t,
    props: segment_properties_t,
    user_features: feature_t[],
    coords: number[],
    shaper_list: string[]
): shape_plan_t;
export function shape_plan_create_cached(
    face: face_t,
    props: segment_properties_t,
    user_features: feature_t[],
    shaper_list: string[]
): shape_plan_t;
export function shape_plan_create_cached2(
    face: face_t,
    props: segment_properties_t,
    user_features: feature_t[],
    coords: number[],
    shaper_list: string[]
): shape_plan_t;
export function shape_plan_execute(
    shape_plan: shape_plan_t,
    font: font_t,
    buffer: buffer_t,
    features: feature_t[]
): bool_t;
export function shape_plan_get_empty(): shape_plan_t;
export function shape_plan_get_shaper(shape_plan: shape_plan_t): string;
export function tag_from_string(str: Uint8Array | string): tag_t;
export function tag_to_string(tag: tag_t): Uint8Array;
export function unicode_combining_class(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t;
export function unicode_compose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [bool_t, codepoint_t];
export function unicode_decompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [bool_t, codepoint_t, codepoint_t];
export function unicode_decompose_compatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [number, codepoint_t];
export function unicode_eastasian_width(ufuncs: unicode_funcs_t, unicode: codepoint_t): number;
export function unicode_funcs_create(parent?: unicode_funcs_t | null): unicode_funcs_t;
export function unicode_funcs_get_default(): unicode_funcs_t;
export function unicode_funcs_get_empty(): unicode_funcs_t;
export function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t;
export function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t;
export function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void;
export function unicode_funcs_set_combining_class_func(
    ufuncs: unicode_funcs_t,
    func: unicode_combining_class_func_t,
    destroy: destroy_func_t
): void;
export function unicode_funcs_set_compose_func(
    ufuncs: unicode_funcs_t,
    func: unicode_compose_func_t,
    destroy: destroy_func_t
): void;
export function unicode_funcs_set_decompose_compatibility_func(
    ufuncs: unicode_funcs_t,
    func: unicode_decompose_compatibility_func_t,
    destroy: destroy_func_t
): void;
export function unicode_funcs_set_decompose_func(
    ufuncs: unicode_funcs_t,
    func: unicode_decompose_func_t,
    destroy: destroy_func_t
): void;
export function unicode_funcs_set_eastasian_width_func(
    ufuncs: unicode_funcs_t,
    func: unicode_eastasian_width_func_t,
    destroy: destroy_func_t
): void;
export function unicode_funcs_set_general_category_func(
    ufuncs: unicode_funcs_t,
    func: unicode_general_category_func_t,
    destroy: destroy_func_t
): void;
export function unicode_funcs_set_mirroring_func(
    ufuncs: unicode_funcs_t,
    func: unicode_mirroring_func_t,
    destroy: destroy_func_t
): void;
export function unicode_funcs_set_script_func(
    ufuncs: unicode_funcs_t,
    func: unicode_script_func_t,
    destroy: destroy_func_t
): void;
export function unicode_general_category(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t;
export function unicode_mirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t;
export function unicode_script(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t;
export function variation_from_string(str: string, len: number, variation: variation_t): bool_t;
export function variation_to_string(variation: variation_t, buf: string, size: number): void;
export function version(): [number, number, number];
export function version_atleast(major: number, minor: number, micro: number): bool_t;
export function version_string(): string;
export type buffer_message_func_t = (buffer: buffer_t, font: font_t, message: string) => bool_t;
export type destroy_func_t = () => void;
export type font_get_font_extents_func_t = (font: font_t, font_data: any | null, extents: font_extents_t) => bool_t;
export type font_get_glyph_advance_func_t = (font: font_t, font_data: any | null, glyph: codepoint_t) => position_t;
export type font_get_glyph_advances_func_t = (
    font: font_t,
    font_data: any | null,
    count: number,
    first_glyph: codepoint_t,
    glyph_stride: number,
    first_advance: position_t,
    advance_stride: number
) => void;
export type font_get_glyph_contour_point_func_t = (
    font: font_t,
    font_data: any | null,
    glyph: codepoint_t,
    point_index: number,
    x: position_t,
    y: position_t
) => bool_t;
export type font_get_glyph_extents_func_t = (
    font: font_t,
    font_data: any | null,
    glyph: codepoint_t,
    extents: glyph_extents_t
) => bool_t;
export type font_get_glyph_from_name_func_t = (
    font: font_t,
    font_data: any | null,
    name: string,
    len: number,
    glyph: codepoint_t
) => bool_t;
export type font_get_glyph_func_t = (
    font: font_t,
    font_data: any | null,
    unicode: codepoint_t,
    variation_selector: codepoint_t,
    glyph: codepoint_t
) => bool_t;
export type font_get_glyph_kerning_func_t = (
    font: font_t,
    font_data: any | null,
    first_glyph: codepoint_t,
    second_glyph: codepoint_t
) => position_t;
export type font_get_glyph_name_func_t = (
    font: font_t,
    font_data: any | null,
    glyph: codepoint_t,
    name: string,
    size: number
) => bool_t;
export type font_get_glyph_origin_func_t = (
    font: font_t,
    font_data: any | null,
    glyph: codepoint_t,
    x: position_t,
    y: position_t
) => bool_t;
export type font_get_nominal_glyph_func_t = (
    font: font_t,
    font_data: any | null,
    unicode: codepoint_t,
    glyph: codepoint_t
) => bool_t;
export type font_get_nominal_glyphs_func_t = (
    font: font_t,
    font_data: any | null,
    count: number,
    first_unicode: codepoint_t,
    unicode_stride: number,
    first_glyph: codepoint_t,
    glyph_stride: number
) => number;
export type font_get_variation_glyph_func_t = (
    font: font_t,
    font_data: any | null,
    unicode: codepoint_t,
    variation_selector: codepoint_t,
    glyph: codepoint_t
) => bool_t;
export type reference_table_func_t = (face: face_t, tag: tag_t) => blob_t;
export type unicode_combining_class_func_t = (
    ufuncs: unicode_funcs_t,
    unicode: codepoint_t
) => unicode_combining_class_t;
export type unicode_compose_func_t = (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t) => bool_t;
export type unicode_decompose_compatibility_func_t = (
    ufuncs: unicode_funcs_t,
    u: codepoint_t,
    decomposed: codepoint_t
) => number;
export type unicode_decompose_func_t = (ufuncs: unicode_funcs_t, ab: codepoint_t) => bool_t;
export type unicode_eastasian_width_func_t = (ufuncs: unicode_funcs_t, unicode: codepoint_t) => number;
export type unicode_general_category_func_t = (
    ufuncs: unicode_funcs_t,
    unicode: codepoint_t
) => unicode_general_category_t;
export type unicode_mirroring_func_t = (ufuncs: unicode_funcs_t, unicode: codepoint_t) => codepoint_t;
export type unicode_script_func_t = (ufuncs: unicode_funcs_t, unicode: codepoint_t) => script_t;

export namespace aat_layout_feature_selector_t {
    export const $gtype: GObject.GType<aat_layout_feature_selector_t>;
}

export enum aat_layout_feature_selector_t {
    INVALID = 65535,
    ALL_TYPE_FEATURES_ON = 0,
    ALL_TYPE_FEATURES_OFF = 1,
    REQUIRED_LIGATURES_ON = 0,
    REQUIRED_LIGATURES_OFF = 1,
    COMMON_LIGATURES_ON = 2,
    COMMON_LIGATURES_OFF = 3,
    RARE_LIGATURES_ON = 4,
    RARE_LIGATURES_OFF = 5,
    LOGOS_ON = 6,
    LOGOS_OFF = 7,
    REBUS_PICTURES_ON = 8,
    REBUS_PICTURES_OFF = 9,
    DIPHTHONG_LIGATURES_ON = 10,
    DIPHTHONG_LIGATURES_OFF = 11,
    SQUARED_LIGATURES_ON = 12,
    SQUARED_LIGATURES_OFF = 13,
    ABBREV_SQUARED_LIGATURES_ON = 14,
    ABBREV_SQUARED_LIGATURES_OFF = 15,
    SYMBOL_LIGATURES_ON = 16,
    SYMBOL_LIGATURES_OFF = 17,
    CONTEXTUAL_LIGATURES_ON = 18,
    CONTEXTUAL_LIGATURES_OFF = 19,
    HISTORICAL_LIGATURES_ON = 20,
    HISTORICAL_LIGATURES_OFF = 21,
    UNCONNECTED = 0,
    PARTIALLY_CONNECTED = 1,
    CURSIVE = 2,
    UPPER_AND_LOWER_CASE = 0,
    ALL_CAPS = 1,
    ALL_LOWER_CASE = 2,
    SMALL_CAPS = 3,
    INITIAL_CAPS = 4,
    INITIAL_CAPS_AND_SMALL_CAPS = 5,
    SUBSTITUTE_VERTICAL_FORMS_ON = 0,
    SUBSTITUTE_VERTICAL_FORMS_OFF = 1,
    LINGUISTIC_REARRANGEMENT_ON = 0,
    LINGUISTIC_REARRANGEMENT_OFF = 1,
    MONOSPACED_NUMBERS = 0,
    PROPORTIONAL_NUMBERS = 1,
    THIRD_WIDTH_NUMBERS = 2,
    QUARTER_WIDTH_NUMBERS = 3,
    WORD_INITIAL_SWASHES_ON = 0,
    WORD_INITIAL_SWASHES_OFF = 1,
    WORD_FINAL_SWASHES_ON = 2,
    WORD_FINAL_SWASHES_OFF = 3,
    LINE_INITIAL_SWASHES_ON = 4,
    LINE_INITIAL_SWASHES_OFF = 5,
    LINE_FINAL_SWASHES_ON = 6,
    LINE_FINAL_SWASHES_OFF = 7,
    NON_FINAL_SWASHES_ON = 8,
    NON_FINAL_SWASHES_OFF = 9,
    SHOW_DIACRITICS = 0,
    HIDE_DIACRITICS = 1,
    DECOMPOSE_DIACRITICS = 2,
    NORMAL_POSITION = 0,
    SUPERIORS = 1,
    INFERIORS = 2,
    ORDINALS = 3,
    SCIENTIFIC_INFERIORS = 4,
    NO_FRACTIONS = 0,
    VERTICAL_FRACTIONS = 1,
    DIAGONAL_FRACTIONS = 2,
    PREVENT_OVERLAP_ON = 0,
    PREVENT_OVERLAP_OFF = 1,
    HYPHENS_TO_EM_DASH_ON = 0,
    HYPHENS_TO_EM_DASH_OFF = 1,
    HYPHEN_TO_EN_DASH_ON = 2,
    HYPHEN_TO_EN_DASH_OFF = 3,
    SLASHED_ZERO_ON = 4,
    SLASHED_ZERO_OFF = 5,
    FORM_INTERROBANG_ON = 6,
    FORM_INTERROBANG_OFF = 7,
    SMART_QUOTES_ON = 8,
    SMART_QUOTES_OFF = 9,
    PERIODS_TO_ELLIPSIS_ON = 10,
    PERIODS_TO_ELLIPSIS_OFF = 11,
    HYPHEN_TO_MINUS_ON = 0,
    HYPHEN_TO_MINUS_OFF = 1,
    ASTERISK_TO_MULTIPLY_ON = 2,
    ASTERISK_TO_MULTIPLY_OFF = 3,
    SLASH_TO_DIVIDE_ON = 4,
    SLASH_TO_DIVIDE_OFF = 5,
    INEQUALITY_LIGATURES_ON = 6,
    INEQUALITY_LIGATURES_OFF = 7,
    EXPONENTS_ON = 8,
    EXPONENTS_OFF = 9,
    MATHEMATICAL_GREEK_ON = 10,
    MATHEMATICAL_GREEK_OFF = 11,
    NO_ORNAMENTS = 0,
    DINGBATS = 1,
    PI_CHARACTERS = 2,
    FLEURONS = 3,
    DECORATIVE_BORDERS = 4,
    INTERNATIONAL_SYMBOLS = 5,
    MATH_SYMBOLS = 6,
    NO_ALTERNATES = 0,
    DESIGN_LEVEL1 = 0,
    DESIGN_LEVEL2 = 1,
    DESIGN_LEVEL3 = 2,
    DESIGN_LEVEL4 = 3,
    DESIGN_LEVEL5 = 4,
    NO_STYLE_OPTIONS = 0,
    DISPLAY_TEXT = 1,
    ENGRAVED_TEXT = 2,
    ILLUMINATED_CAPS = 3,
    TITLING_CAPS = 4,
    TALL_CAPS = 5,
    TRADITIONAL_CHARACTERS = 0,
    SIMPLIFIED_CHARACTERS = 1,
    JIS1978_CHARACTERS = 2,
    JIS1983_CHARACTERS = 3,
    JIS1990_CHARACTERS = 4,
    TRADITIONAL_ALT_ONE = 5,
    TRADITIONAL_ALT_TWO = 6,
    TRADITIONAL_ALT_THREE = 7,
    TRADITIONAL_ALT_FOUR = 8,
    TRADITIONAL_ALT_FIVE = 9,
    EXPERT_CHARACTERS = 10,
    JIS2004_CHARACTERS = 11,
    HOJO_CHARACTERS = 12,
    NLCCHARACTERS = 13,
    TRADITIONAL_NAMES_CHARACTERS = 14,
    LOWER_CASE_NUMBERS = 0,
    UPPER_CASE_NUMBERS = 1,
    PROPORTIONAL_TEXT = 0,
    MONOSPACED_TEXT = 1,
    HALF_WIDTH_TEXT = 2,
    THIRD_WIDTH_TEXT = 3,
    QUARTER_WIDTH_TEXT = 4,
    ALT_PROPORTIONAL_TEXT = 5,
    ALT_HALF_WIDTH_TEXT = 6,
    NO_TRANSLITERATION = 0,
    HANJA_TO_HANGUL = 1,
    HIRAGANA_TO_KATAKANA = 2,
    KATAKANA_TO_HIRAGANA = 3,
    KANA_TO_ROMANIZATION = 4,
    ROMANIZATION_TO_HIRAGANA = 5,
    ROMANIZATION_TO_KATAKANA = 6,
    HANJA_TO_HANGUL_ALT_ONE = 7,
    HANJA_TO_HANGUL_ALT_TWO = 8,
    HANJA_TO_HANGUL_ALT_THREE = 9,
    NO_ANNOTATION = 0,
    BOX_ANNOTATION = 1,
    ROUNDED_BOX_ANNOTATION = 2,
    CIRCLE_ANNOTATION = 3,
    INVERTED_CIRCLE_ANNOTATION = 4,
    PARENTHESIS_ANNOTATION = 5,
    PERIOD_ANNOTATION = 6,
    ROMAN_NUMERAL_ANNOTATION = 7,
    DIAMOND_ANNOTATION = 8,
    INVERTED_BOX_ANNOTATION = 9,
    INVERTED_ROUNDED_BOX_ANNOTATION = 10,
    FULL_WIDTH_KANA = 0,
    PROPORTIONAL_KANA = 1,
    FULL_WIDTH_IDEOGRAPHS = 0,
    PROPORTIONAL_IDEOGRAPHS = 1,
    HALF_WIDTH_IDEOGRAPHS = 2,
    CANONICAL_COMPOSITION_ON = 0,
    CANONICAL_COMPOSITION_OFF = 1,
    COMPATIBILITY_COMPOSITION_ON = 2,
    COMPATIBILITY_COMPOSITION_OFF = 3,
    TRANSCODING_COMPOSITION_ON = 4,
    TRANSCODING_COMPOSITION_OFF = 5,
    NO_RUBY_KANA = 0,
    RUBY_KANA = 1,
    RUBY_KANA_ON = 2,
    RUBY_KANA_OFF = 3,
    NO_CJK_SYMBOL_ALTERNATIVES = 0,
    CJK_SYMBOL_ALT_ONE = 1,
    CJK_SYMBOL_ALT_TWO = 2,
    CJK_SYMBOL_ALT_THREE = 3,
    CJK_SYMBOL_ALT_FOUR = 4,
    CJK_SYMBOL_ALT_FIVE = 5,
    NO_IDEOGRAPHIC_ALTERNATIVES = 0,
    IDEOGRAPHIC_ALT_ONE = 1,
    IDEOGRAPHIC_ALT_TWO = 2,
    IDEOGRAPHIC_ALT_THREE = 3,
    IDEOGRAPHIC_ALT_FOUR = 4,
    IDEOGRAPHIC_ALT_FIVE = 5,
    CJK_VERTICAL_ROMAN_CENTERED = 0,
    CJK_VERTICAL_ROMAN_HBASELINE = 1,
    NO_CJK_ITALIC_ROMAN = 0,
    CJK_ITALIC_ROMAN = 1,
    CJK_ITALIC_ROMAN_ON = 2,
    CJK_ITALIC_ROMAN_OFF = 3,
    CASE_SENSITIVE_LAYOUT_ON = 0,
    CASE_SENSITIVE_LAYOUT_OFF = 1,
    CASE_SENSITIVE_SPACING_ON = 2,
    CASE_SENSITIVE_SPACING_OFF = 3,
    ALTERNATE_HORIZ_KANA_ON = 0,
    ALTERNATE_HORIZ_KANA_OFF = 1,
    ALTERNATE_VERT_KANA_ON = 2,
    ALTERNATE_VERT_KANA_OFF = 3,
    NO_STYLISTIC_ALTERNATES = 0,
    STYLISTIC_ALT_ONE_ON = 2,
    STYLISTIC_ALT_ONE_OFF = 3,
    STYLISTIC_ALT_TWO_ON = 4,
    STYLISTIC_ALT_TWO_OFF = 5,
    STYLISTIC_ALT_THREE_ON = 6,
    STYLISTIC_ALT_THREE_OFF = 7,
    STYLISTIC_ALT_FOUR_ON = 8,
    STYLISTIC_ALT_FOUR_OFF = 9,
    STYLISTIC_ALT_FIVE_ON = 10,
    STYLISTIC_ALT_FIVE_OFF = 11,
    STYLISTIC_ALT_SIX_ON = 12,
    STYLISTIC_ALT_SIX_OFF = 13,
    STYLISTIC_ALT_SEVEN_ON = 14,
    STYLISTIC_ALT_SEVEN_OFF = 15,
    STYLISTIC_ALT_EIGHT_ON = 16,
    STYLISTIC_ALT_EIGHT_OFF = 17,
    STYLISTIC_ALT_NINE_ON = 18,
    STYLISTIC_ALT_NINE_OFF = 19,
    STYLISTIC_ALT_TEN_ON = 20,
    STYLISTIC_ALT_TEN_OFF = 21,
    STYLISTIC_ALT_ELEVEN_ON = 22,
    STYLISTIC_ALT_ELEVEN_OFF = 23,
    STYLISTIC_ALT_TWELVE_ON = 24,
    STYLISTIC_ALT_TWELVE_OFF = 25,
    STYLISTIC_ALT_THIRTEEN_ON = 26,
    STYLISTIC_ALT_THIRTEEN_OFF = 27,
    STYLISTIC_ALT_FOURTEEN_ON = 28,
    STYLISTIC_ALT_FOURTEEN_OFF = 29,
    STYLISTIC_ALT_FIFTEEN_ON = 30,
    STYLISTIC_ALT_FIFTEEN_OFF = 31,
    STYLISTIC_ALT_SIXTEEN_ON = 32,
    STYLISTIC_ALT_SIXTEEN_OFF = 33,
    STYLISTIC_ALT_SEVENTEEN_ON = 34,
    STYLISTIC_ALT_SEVENTEEN_OFF = 35,
    STYLISTIC_ALT_EIGHTEEN_ON = 36,
    STYLISTIC_ALT_EIGHTEEN_OFF = 37,
    STYLISTIC_ALT_NINETEEN_ON = 38,
    STYLISTIC_ALT_NINETEEN_OFF = 39,
    STYLISTIC_ALT_TWENTY_ON = 40,
    STYLISTIC_ALT_TWENTY_OFF = 41,
    CONTEXTUAL_ALTERNATES_ON = 0,
    CONTEXTUAL_ALTERNATES_OFF = 1,
    SWASH_ALTERNATES_ON = 2,
    SWASH_ALTERNATES_OFF = 3,
    CONTEXTUAL_SWASH_ALTERNATES_ON = 4,
    CONTEXTUAL_SWASH_ALTERNATES_OFF = 5,
    DEFAULT_LOWER_CASE = 0,
    LOWER_CASE_SMALL_CAPS = 1,
    LOWER_CASE_PETITE_CAPS = 2,
    DEFAULT_UPPER_CASE = 0,
    UPPER_CASE_SMALL_CAPS = 1,
    UPPER_CASE_PETITE_CAPS = 2,
    HALF_WIDTH_CJK_ROMAN = 0,
    PROPORTIONAL_CJK_ROMAN = 1,
    DEFAULT_CJK_ROMAN = 2,
    FULL_WIDTH_CJK_ROMAN = 3,
}

export namespace aat_layout_feature_type_t {
    export const $gtype: GObject.GType<aat_layout_feature_type_t>;
}

export enum aat_layout_feature_type_t {
    INVALID = 65535,
    ALL_TYPOGRAPHIC = 0,
    LIGATURES = 1,
    CURISVE_CONNECTION = 2,
    LETTER_CASE = 3,
    VERTICAL_SUBSTITUTION = 4,
    LINGUISTIC_REARRANGEMENT = 5,
    NUMBER_SPACING = 6,
    SMART_SWASH_TYPE = 8,
    DIACRITICS_TYPE = 9,
    VERTICAL_POSITION = 10,
    FRACTIONS = 11,
    OVERLAPPING_CHARACTERS_TYPE = 13,
    TYPOGRAPHIC_EXTRAS = 14,
    MATHEMATICAL_EXTRAS = 15,
    ORNAMENT_SETS_TYPE = 16,
    CHARACTER_ALTERNATIVES = 17,
    DESIGN_COMPLEXITY_TYPE = 18,
    STYLE_OPTIONS = 19,
    CHARACTER_SHAPE = 20,
    NUMBER_CASE = 21,
    TEXT_SPACING = 22,
    TRANSLITERATION = 23,
    ANNOTATION_TYPE = 24,
    KANA_SPACING_TYPE = 25,
    IDEOGRAPHIC_SPACING_TYPE = 26,
    UNICODE_DECOMPOSITION_TYPE = 27,
    RUBY_KANA = 28,
    CJK_SYMBOL_ALTERNATIVES_TYPE = 29,
    IDEOGRAPHIC_ALTERNATIVES_TYPE = 30,
    CJK_VERTICAL_ROMAN_PLACEMENT_TYPE = 31,
    ITALIC_CJK_ROMAN = 32,
    CASE_SENSITIVE_LAYOUT = 33,
    ALTERNATE_KANA = 34,
    STYLISTIC_ALTERNATIVES = 35,
    CONTEXTUAL_ALTERNATIVES = 36,
    LOWER_CASE = 37,
    UPPER_CASE = 38,
    LANGUAGE_TAG_TYPE = 39,
    CJK_ROMAN_SPACING_TYPE = 103,
}

export namespace buffer_cluster_level_t {
    export const $gtype: GObject.GType<buffer_cluster_level_t>;
}

export enum buffer_cluster_level_t {
    MONOTONE_GRAPHEMES = 0,
    MONOTONE_CHARACTERS = 1,
    CHARACTERS = 2,
    DEFAULT = 0,
}

export namespace buffer_content_type_t {
    export const $gtype: GObject.GType<buffer_content_type_t>;
}

export enum buffer_content_type_t {
    INVALID = 0,
    UNICODE = 1,
    GLYPHS = 2,
}

export namespace buffer_serialize_format_t {
    export const $gtype: GObject.GType<buffer_serialize_format_t>;
}

export enum buffer_serialize_format_t {
    TEXT = 1413830740,
    JSON = 1246973774,
    INVALID = 0,
}

export namespace direction_t {
    export const $gtype: GObject.GType<direction_t>;
}

export enum direction_t {
    INVALID = 0,
    LTR = 4,
    RTL = 5,
    TTB = 6,
    BTT = 7,
}

export namespace memory_mode_t {
    export const $gtype: GObject.GType<memory_mode_t>;
}

export enum memory_mode_t {
    DUPLICATE = 0,
    READONLY = 1,
    WRITABLE = 2,
    READONLY_MAY_MAKE_WRITABLE = 3,
}

export namespace ot_layout_baseline_tag_t {
    export const $gtype: GObject.GType<ot_layout_baseline_tag_t>;
}

export enum ot_layout_baseline_tag_t {
    ROMAN = 1919905134,
    HANGING = 1751215719,
    IDEO_FACE_BOTTOM_OR_LEFT = 1768121954,
    IDEO_FACE_TOP_OR_RIGHT = 1768121972,
    IDEO_EMBOX_BOTTOM_OR_LEFT = 1768187247,
    IDEO_EMBOX_TOP_OR_RIGHT = 1768191088,
    MATH = 1835103336,
}

export namespace ot_layout_glyph_class_t {
    export const $gtype: GObject.GType<ot_layout_glyph_class_t>;
}

export enum ot_layout_glyph_class_t {
    UNCLASSIFIED = 0,
    BASE_GLYPH = 1,
    LIGATURE = 2,
    MARK = 3,
    COMPONENT = 4,
}

export namespace ot_math_constant_t {
    export const $gtype: GObject.GType<ot_math_constant_t>;
}

export enum ot_math_constant_t {
    SCRIPT_PERCENT_SCALE_DOWN = 0,
    SCRIPT_SCRIPT_PERCENT_SCALE_DOWN = 1,
    DELIMITED_SUB_FORMULA_MIN_HEIGHT = 2,
    DISPLAY_OPERATOR_MIN_HEIGHT = 3,
    MATH_LEADING = 4,
    AXIS_HEIGHT = 5,
    ACCENT_BASE_HEIGHT = 6,
    FLATTENED_ACCENT_BASE_HEIGHT = 7,
    SUBSCRIPT_SHIFT_DOWN = 8,
    SUBSCRIPT_TOP_MAX = 9,
    SUBSCRIPT_BASELINE_DROP_MIN = 10,
    SUPERSCRIPT_SHIFT_UP = 11,
    SUPERSCRIPT_SHIFT_UP_CRAMPED = 12,
    SUPERSCRIPT_BOTTOM_MIN = 13,
    SUPERSCRIPT_BASELINE_DROP_MAX = 14,
    SUB_SUPERSCRIPT_GAP_MIN = 15,
    SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT = 16,
    SPACE_AFTER_SCRIPT = 17,
    UPPER_LIMIT_GAP_MIN = 18,
    UPPER_LIMIT_BASELINE_RISE_MIN = 19,
    LOWER_LIMIT_GAP_MIN = 20,
    LOWER_LIMIT_BASELINE_DROP_MIN = 21,
    STACK_TOP_SHIFT_UP = 22,
    STACK_TOP_DISPLAY_STYLE_SHIFT_UP = 23,
    STACK_BOTTOM_SHIFT_DOWN = 24,
    STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN = 25,
    STACK_GAP_MIN = 26,
    STACK_DISPLAY_STYLE_GAP_MIN = 27,
    STRETCH_STACK_TOP_SHIFT_UP = 28,
    STRETCH_STACK_BOTTOM_SHIFT_DOWN = 29,
    STRETCH_STACK_GAP_ABOVE_MIN = 30,
    STRETCH_STACK_GAP_BELOW_MIN = 31,
    FRACTION_NUMERATOR_SHIFT_UP = 32,
    FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP = 33,
    FRACTION_DENOMINATOR_SHIFT_DOWN = 34,
    FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN = 35,
    FRACTION_NUMERATOR_GAP_MIN = 36,
    FRACTION_NUM_DISPLAY_STYLE_GAP_MIN = 37,
    FRACTION_RULE_THICKNESS = 38,
    FRACTION_DENOMINATOR_GAP_MIN = 39,
    FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN = 40,
    SKEWED_FRACTION_HORIZONTAL_GAP = 41,
    SKEWED_FRACTION_VERTICAL_GAP = 42,
    OVERBAR_VERTICAL_GAP = 43,
    OVERBAR_RULE_THICKNESS = 44,
    OVERBAR_EXTRA_ASCENDER = 45,
    UNDERBAR_VERTICAL_GAP = 46,
    UNDERBAR_RULE_THICKNESS = 47,
    UNDERBAR_EXTRA_DESCENDER = 48,
    RADICAL_VERTICAL_GAP = 49,
    RADICAL_DISPLAY_STYLE_VERTICAL_GAP = 50,
    RADICAL_RULE_THICKNESS = 51,
    RADICAL_EXTRA_ASCENDER = 52,
    RADICAL_KERN_BEFORE_DEGREE = 53,
    RADICAL_KERN_AFTER_DEGREE = 54,
    RADICAL_DEGREE_BOTTOM_RAISE_PERCENT = 55,
}

export namespace ot_math_kern_t {
    export const $gtype: GObject.GType<ot_math_kern_t>;
}

export enum ot_math_kern_t {
    TOP_RIGHT = 0,
    TOP_LEFT = 1,
    BOTTOM_RIGHT = 2,
    BOTTOM_LEFT = 3,
}

export namespace ot_meta_tag_t {
    export const $gtype: GObject.GType<ot_meta_tag_t>;
}

export enum ot_meta_tag_t {
    DESIGN_LANGUAGES = 1684827751,
    SUPPORTED_LANGUAGES = 1936485991,
}

export namespace ot_metrics_tag_t {
    export const $gtype: GObject.GType<ot_metrics_tag_t>;
}

export enum ot_metrics_tag_t {
    HORIZONTAL_ASCENDER = 1751216995,
    HORIZONTAL_DESCENDER = 1751413603,
    HORIZONTAL_LINE_GAP = 1751934832,
    HORIZONTAL_CLIPPING_ASCENT = 1751346273,
    HORIZONTAL_CLIPPING_DESCENT = 1751346276,
    VERTICAL_ASCENDER = 1986098019,
    VERTICAL_DESCENDER = 1986294627,
    VERTICAL_LINE_GAP = 1986815856,
    HORIZONTAL_CARET_RISE = 1751347827,
    HORIZONTAL_CARET_RUN = 1751347822,
    HORIZONTAL_CARET_OFFSET = 1751347046,
    VERTICAL_CARET_RISE = 1986228851,
    VERTICAL_CARET_RUN = 1986228846,
    VERTICAL_CARET_OFFSET = 1986228070,
    X_HEIGHT = 2020108148,
    CAP_HEIGHT = 1668311156,
    SUBSCRIPT_EM_X_SIZE = 1935833203,
    SUBSCRIPT_EM_Y_SIZE = 1935833459,
    SUBSCRIPT_EM_X_OFFSET = 1935833199,
    SUBSCRIPT_EM_Y_OFFSET = 1935833455,
    SUPERSCRIPT_EM_X_SIZE = 1936750707,
    SUPERSCRIPT_EM_Y_SIZE = 1936750963,
    SUPERSCRIPT_EM_X_OFFSET = 1936750703,
    SUPERSCRIPT_EM_Y_OFFSET = 1936750959,
    STRIKEOUT_SIZE = 1937011315,
    STRIKEOUT_OFFSET = 1937011311,
    UNDERLINE_SIZE = 1970168947,
    UNDERLINE_OFFSET = 1970168943,
}

export namespace script_t {
    export const $gtype: GObject.GType<script_t>;
}

export enum script_t {
    COMMON = 1517910393,
    INHERITED = 1516858984,
    UNKNOWN = 1517976186,
    ARABIC = 1098015074,
    ARMENIAN = 1098018158,
    BENGALI = 1113943655,
    CYRILLIC = 1132032620,
    DEVANAGARI = 1147500129,
    GEORGIAN = 1197830002,
    GREEK = 1198679403,
    GUJARATI = 1198877298,
    GURMUKHI = 1198879349,
    HANGUL = 1214344807,
    HAN = 1214344809,
    HEBREW = 1214603890,
    HIRAGANA = 1214870113,
    KANNADA = 1265525857,
    KATAKANA = 1264676449,
    LAO = 1281453935,
    LATIN = 1281455214,
    MALAYALAM = 1298954605,
    ORIYA = 1332902241,
    TAMIL = 1415671148,
    TELUGU = 1415933045,
    THAI = 1416126825,
    TIBETAN = 1416192628,
    BOPOMOFO = 1114599535,
    BRAILLE = 1114792297,
    CANADIAN_SYLLABICS = 1130458739,
    CHEROKEE = 1130915186,
    ETHIOPIC = 1165256809,
    KHMER = 1265134962,
    MONGOLIAN = 1299148391,
    MYANMAR = 1299803506,
    OGHAM = 1332175213,
    RUNIC = 1383427698,
    SINHALA = 1399418472,
    SYRIAC = 1400468067,
    THAANA = 1416126817,
    YI = 1500080489,
    DESERET = 1148416628,
    GOTHIC = 1198486632,
    OLD_ITALIC = 1232363884,
    BUHID = 1114990692,
    HANUNOO = 1214344815,
    TAGALOG = 1416064103,
    TAGBANWA = 1415669602,
    CYPRIOT = 1131442804,
    LIMBU = 1281977698,
    LINEAR_B = 1281977954,
    OSMANYA = 1332964705,
    SHAVIAN = 1399349623,
    TAI_LE = 1415670885,
    UGARITIC = 1432838514,
    BUGINESE = 1114990441,
    COPTIC = 1131376756,
    GLAGOLITIC = 1198285159,
    KHAROSHTHI = 1265131890,
    NEW_TAI_LUE = 1415670901,
    OLD_PERSIAN = 1483761007,
    SYLOTI_NAGRI = 1400466543,
    TIFINAGH = 1415999079,
    BALINESE = 1113681001,
    CUNEIFORM = 1483961720,
    NKO = 1315663727,
    PHAGS_PA = 1349017959,
    PHOENICIAN = 1349021304,
    CARIAN = 1130459753,
    CHAM = 1130914157,
    KAYAH_LI = 1264675945,
    LEPCHA = 1281716323,
    LYCIAN = 1283023721,
    LYDIAN = 1283023977,
    OL_CHIKI = 1332503403,
    REJANG = 1382706791,
    SAURASHTRA = 1398895986,
    SUNDANESE = 1400204900,
    VAI = 1449224553,
    AVESTAN = 1098281844,
    BAMUM = 1113681269,
    EGYPTIAN_HIEROGLYPHS = 1164409200,
    IMPERIAL_ARAMAIC = 1098018153,
    INSCRIPTIONAL_PAHLAVI = 1349020777,
    INSCRIPTIONAL_PARTHIAN = 1349678185,
    JAVANESE = 1247901281,
    KAITHI = 1265920105,
    LISU = 1281979253,
    MEETEI_MAYEK = 1299473769,
    OLD_SOUTH_ARABIAN = 1398895202,
    OLD_TURKIC = 1332898664,
    SAMARITAN = 1398893938,
    TAI_THAM = 1281453665,
    TAI_VIET = 1415673460,
    BATAK = 1113683051,
    BRAHMI = 1114792296,
    MANDAIC = 1298230884,
    CHAKMA = 1130457965,
    MEROITIC_CURSIVE = 1298494051,
    MEROITIC_HIEROGLYPHS = 1298494063,
    MIAO = 1349284452,
    SHARADA = 1399353956,
    SORA_SOMPENG = 1399812705,
    TAKRI = 1415670642,
    BASSA_VAH = 1113682803,
    CAUCASIAN_ALBANIAN = 1097295970,
    DUPLOYAN = 1148547180,
    ELBASAN = 1164730977,
    GRANTHA = 1198678382,
    KHOJKI = 1265135466,
    KHUDAWADI = 1399418468,
    LINEAR_A = 1281977953,
    MAHAJANI = 1298229354,
    MANICHAEAN = 1298230889,
    MENDE_KIKAKUI = 1298493028,
    MODI = 1299145833,
    MRO = 1299345263,
    NABATAEAN = 1315070324,
    OLD_NORTH_ARABIAN = 1315009122,
    OLD_PERMIC = 1348825709,
    PAHAWH_HMONG = 1215131239,
    PALMYRENE = 1348562029,
    PAU_CIN_HAU = 1348564323,
    PSALTER_PAHLAVI = 1349020784,
    SIDDHAM = 1399415908,
    TIRHUTA = 1416196712,
    WARANG_CITI = 1466004065,
    AHOM = 1097363309,
    ANATOLIAN_HIEROGLYPHS = 1215067511,
    HATRAN = 1214346354,
    MULTANI = 1299541108,
    OLD_HUNGARIAN = 1215655527,
    SIGNWRITING = 1399287415,
    ADLAM = 1097100397,
    BHAIKSUKI = 1114139507,
    MARCHEN = 1298231907,
    OSAGE = 1332963173,
    TANGUT = 1415671399,
    NEWA = 1315272545,
    MASARAM_GONDI = 1198485101,
    NUSHU = 1316186229,
    SOYOMBO = 1399814511,
    ZANABAZAR_SQUARE = 1516334690,
    DOGRA = 1148151666,
    GUNJALA_GONDI = 1198485095,
    HANIFI_ROHINGYA = 1383032935,
    MAKASAR = 1298230113,
    MEDEFAIDRIN = 1298490470,
    OLD_SOGDIAN = 1399809903,
    SOGDIAN = 1399809892,
    ELYMAIC = 1164736877,
    NANDINAGARI = 1315008100,
    NYIAKENG_PUACHUE_HMONG = 1215131248,
    WANCHO = 1466132591,
    CHORASMIAN = 1130918515,
    DIVES_AKURU = 1147756907,
    KHITAN_SMALL_SCRIPT = 1265202291,
    YEZIDI = 1499822697,
    INVALID = 0,
}

export namespace unicode_combining_class_t {
    export const $gtype: GObject.GType<unicode_combining_class_t>;
}

export enum unicode_combining_class_t {
    NOT_REORDERED = 0,
    OVERLAY = 1,
    NUKTA = 7,
    KANA_VOICING = 8,
    VIRAMA = 9,
    CCC10 = 10,
    CCC11 = 11,
    CCC12 = 12,
    CCC13 = 13,
    CCC14 = 14,
    CCC15 = 15,
    CCC16 = 16,
    CCC17 = 17,
    CCC18 = 18,
    CCC19 = 19,
    CCC20 = 20,
    CCC21 = 21,
    CCC22 = 22,
    CCC23 = 23,
    CCC24 = 24,
    CCC25 = 25,
    CCC26 = 26,
    CCC27 = 27,
    CCC28 = 28,
    CCC29 = 29,
    CCC30 = 30,
    CCC31 = 31,
    CCC32 = 32,
    CCC33 = 33,
    CCC34 = 34,
    CCC35 = 35,
    CCC36 = 36,
    CCC84 = 84,
    CCC91 = 91,
    CCC103 = 103,
    CCC107 = 107,
    CCC118 = 118,
    CCC122 = 122,
    CCC129 = 129,
    CCC130 = 130,
    CCC133 = 132,
    ATTACHED_BELOW_LEFT = 200,
    ATTACHED_BELOW = 202,
    ATTACHED_ABOVE = 214,
    ATTACHED_ABOVE_RIGHT = 216,
    BELOW_LEFT = 218,
    BELOW = 220,
    BELOW_RIGHT = 222,
    LEFT = 224,
    RIGHT = 226,
    ABOVE_LEFT = 228,
    ABOVE = 230,
    ABOVE_RIGHT = 232,
    DOUBLE_BELOW = 233,
    DOUBLE_ABOVE = 234,
    IOTA_SUBSCRIPT = 240,
    INVALID = 255,
}

export namespace unicode_general_category_t {
    export const $gtype: GObject.GType<unicode_general_category_t>;
}

export enum unicode_general_category_t {
    CONTROL = 0,
    FORMAT = 1,
    UNASSIGNED = 2,
    PRIVATE_USE = 3,
    SURROGATE = 4,
    LOWERCASE_LETTER = 5,
    MODIFIER_LETTER = 6,
    OTHER_LETTER = 7,
    TITLECASE_LETTER = 8,
    UPPERCASE_LETTER = 9,
    SPACING_MARK = 10,
    ENCLOSING_MARK = 11,
    NON_SPACING_MARK = 12,
    DECIMAL_NUMBER = 13,
    LETTER_NUMBER = 14,
    OTHER_NUMBER = 15,
    CONNECT_PUNCTUATION = 16,
    DASH_PUNCTUATION = 17,
    CLOSE_PUNCTUATION = 18,
    FINAL_PUNCTUATION = 19,
    INITIAL_PUNCTUATION = 20,
    OTHER_PUNCTUATION = 21,
    OPEN_PUNCTUATION = 22,
    CURRENCY_SYMBOL = 23,
    MODIFIER_SYMBOL = 24,
    MATH_SYMBOL = 25,
    OTHER_SYMBOL = 26,
    LINE_SEPARATOR = 27,
    PARAGRAPH_SEPARATOR = 28,
    SPACE_SEPARATOR = 29,
}

export namespace buffer_diff_flags_t {
    export const $gtype: GObject.GType<buffer_diff_flags_t>;
}

export enum buffer_diff_flags_t {
    EQUAL = 0,
    CONTENT_TYPE_MISMATCH = 1,
    LENGTH_MISMATCH = 2,
    NOTDEF_PRESENT = 4,
    DOTTED_CIRCLE_PRESENT = 8,
    CODEPOINT_MISMATCH = 16,
    CLUSTER_MISMATCH = 32,
    GLYPH_FLAGS_MISMATCH = 64,
    POSITION_MISMATCH = 128,
}

export namespace buffer_flags_t {
    export const $gtype: GObject.GType<buffer_flags_t>;
}

export enum buffer_flags_t {
    DEFAULT = 0,
    BOT = 1,
    EOT = 2,
    PRESERVE_DEFAULT_IGNORABLES = 4,
    REMOVE_DEFAULT_IGNORABLES = 8,
    DO_NOT_INSERT_DOTTED_CIRCLE = 16,
}

export namespace buffer_serialize_flags_t {
    export const $gtype: GObject.GType<buffer_serialize_flags_t>;
}

export enum buffer_serialize_flags_t {
    DEFAULT = 0,
    NO_CLUSTERS = 1,
    NO_POSITIONS = 2,
    NO_GLYPH_NAMES = 4,
    GLYPH_EXTENTS = 8,
    GLYPH_FLAGS = 16,
    NO_ADVANCES = 32,
}

export namespace glyph_flags_t {
    export const $gtype: GObject.GType<glyph_flags_t>;
}

export enum glyph_flags_t {
    UNSAFE_TO_BREAK = 1,
    DEFINED = 1,
}

export namespace ot_color_palette_flags_t {
    export const $gtype: GObject.GType<ot_color_palette_flags_t>;
}

export enum ot_color_palette_flags_t {
    DEFAULT = 0,
    USABLE_WITH_LIGHT_BACKGROUND = 1,
    USABLE_WITH_DARK_BACKGROUND = 2,
}

export namespace ot_math_glyph_part_flags_t {
    export const $gtype: GObject.GType<ot_math_glyph_part_flags_t>;
}

export enum ot_math_glyph_part_flags_t {
    EXTENDER = 1,
}

export namespace ot_var_axis_flags_t {
    export const $gtype: GObject.GType<ot_var_axis_flags_t>;
}

export enum ot_var_axis_flags_t {
    HIDDEN = 1,
}

export class blob_t {
    static $gtype: GObject.GType<blob_t>;

    constructor(copy: blob_t);
}

export class buffer_t {
    static $gtype: GObject.GType<buffer_t>;

    constructor(copy: buffer_t);
}

export class face_t {
    static $gtype: GObject.GType<face_t>;

    constructor(copy: face_t);
}

export class feature_t {
    static $gtype: GObject.GType<feature_t>;

    constructor(copy: feature_t);

    // Fields
    tag: tag_t;
    value: number;
    start: number;
    end: number;

    // Members
    _string(): string[];
}

export class font_extents_t {
    static $gtype: GObject.GType<font_extents_t>;

    constructor(copy: font_extents_t);

    // Fields
    ascender: position_t;
    descender: position_t;
    line_gap: position_t;
    reserved9: position_t;
    reserved8: position_t;
    reserved7: position_t;
    reserved6: position_t;
    reserved5: position_t;
    reserved4: position_t;
    reserved3: position_t;
    reserved2: position_t;
    reserved1: position_t;
}

export class font_funcs_t {
    static $gtype: GObject.GType<font_funcs_t>;

    constructor(copy: font_funcs_t);
}

export class font_t {
    static $gtype: GObject.GType<font_t>;

    constructor(copy: font_t);
}

export class glyph_extents_t {
    static $gtype: GObject.GType<glyph_extents_t>;

    constructor(copy: glyph_extents_t);

    // Fields
    x_bearing: position_t;
    y_bearing: position_t;
    width: position_t;
    height: position_t;
}

export class glyph_info_t {
    static $gtype: GObject.GType<glyph_info_t>;

    constructor(copy: glyph_info_t);

    // Fields
    codepoint: codepoint_t;
    mask: mask_t;
    cluster: number;
    var1: var_int_t;
    var2: var_int_t;
}

export class glyph_position_t {
    static $gtype: GObject.GType<glyph_position_t>;

    constructor(copy: glyph_position_t);

    // Fields
    x_advance: position_t;
    y_advance: position_t;
    x_offset: position_t;
    y_offset: position_t;
    "var": var_int_t;
}

export class language_t {
    static $gtype: GObject.GType<language_t>;

    constructor(copy: language_t);

    // Members
    _string(): string;
}

export class map_t {
    static $gtype: GObject.GType<map_t>;

    constructor(copy: map_t);
}

export class ot_color_layer_t {
    static $gtype: GObject.GType<ot_color_layer_t>;

    constructor(copy: ot_color_layer_t);

    // Fields
    glyph: codepoint_t;
    color_index: number;
}

export class ot_math_glyph_part_t {
    static $gtype: GObject.GType<ot_math_glyph_part_t>;

    constructor(copy: ot_math_glyph_part_t);

    // Fields
    glyph: codepoint_t;
    start_connector_length: position_t;
    end_connector_length: position_t;
    full_advance: position_t;
    flags: ot_math_glyph_part_flags_t;
}

export class ot_math_glyph_variant_t {
    static $gtype: GObject.GType<ot_math_glyph_variant_t>;

    constructor(copy: ot_math_glyph_variant_t);

    // Fields
    glyph: codepoint_t;
    advance: position_t;
}

export class ot_name_entry_t {
    static $gtype: GObject.GType<ot_name_entry_t>;

    constructor(copy: ot_name_entry_t);

    // Fields
    name_id: ot_name_id_t;
    "var": var_int_t;
    language: language_t;
}

export class ot_var_axis_info_t {
    static $gtype: GObject.GType<ot_var_axis_info_t>;

    constructor(copy: ot_var_axis_info_t);

    // Fields
    axis_index: number;
    tag: tag_t;
    name_id: ot_name_id_t;
    flags: ot_var_axis_flags_t;
    min_value: number;
    default_value: number;
    max_value: number;
    reserved: number;
}

export class ot_var_axis_t {
    static $gtype: GObject.GType<ot_var_axis_t>;

    constructor(copy: ot_var_axis_t);

    // Fields
    tag: tag_t;
    name_id: ot_name_id_t;
    min_value: number;
    default_value: number;
    max_value: number;
}

export class segment_properties_t {
    static $gtype: GObject.GType<segment_properties_t>;

    constructor(copy: segment_properties_t);

    // Fields
    direction: direction_t;
    script: script_t;
    language: language_t;
    reserved1: any;
    reserved2: any;
}

export class set_t {
    static $gtype: GObject.GType<set_t>;

    constructor(copy: set_t);
}

export class shape_plan_t {
    static $gtype: GObject.GType<shape_plan_t>;

    constructor(copy: shape_plan_t);
}

export class unicode_funcs_t {
    static $gtype: GObject.GType<unicode_funcs_t>;

    constructor(copy: unicode_funcs_t);
}

export class user_data_key_t {
    static $gtype: GObject.GType<user_data_key_t>;

    constructor(
        properties?: Partial<{
            unused?: number;
        }>
    );
    constructor(copy: user_data_key_t);

    // Fields
    unused: number;
}

export class variation_t {
    static $gtype: GObject.GType<variation_t>;

    constructor(copy: variation_t);

    // Fields
    tag: tag_t;
    value: number;

    // Members
    _string(buf: string, size: number): void;
}

export class var_int_t {
    static $gtype: GObject.GType<var_int_t>;

    constructor(copy: var_int_t);

    // Fields
    u32: number;
    i32: number;
    u16: number[];
    i16: number[];
    u8: Uint8Array;
    i8: Uint8Array;
}
export type bool_t = number;
export type codepoint_t = number;
export type color_t = number;
export type font_get_font_h_extents_func_t = font_get_font_extents_func_t;
export type font_get_font_v_extents_func_t = font_get_font_extents_func_t;
export type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t;
export type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t;
export type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t;
export type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t;
export type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t;
export type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t;
export type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t;
export type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t;
export type mask_t = number;
export type ot_name_id_t = number;
export type position_t = number;
export type tag_t = number;

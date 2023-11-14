/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './harfbuzz-0.0-import.d.ts';
/**
 * HarfBuzz-0.0
 */

import type freetype2 from './freetype2-2.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';

export namespace HarfBuzz {
    /**
     * Data type for holding HarfBuzz's clustering behavior options. The cluster level
     * dictates one aspect of how HarfBuzz will treat non-base characters
     * during shaping.
     *
     * In `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES,` non-base
     * characters are merged into the cluster of the base character that precedes them.
     *
     * In `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_CHARACTERS,` non-base characters are initially
     * assigned their own cluster values, which are not merged into preceding base
     * clusters. This allows HarfBuzz to perform additional operations like reorder
     * sequences of adjacent marks.
     *
     * `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES` is the default, because it maintains
     * backward compatibility with older versions of HarfBuzz. New client programs that
     * do not need to maintain such backward compatibility are recommended to use
     * `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_CHARACTERS` instead of the default.
     */
    enum buffer_cluster_level_t {
        /**
         * Return cluster values grouped by graphemes into
         *   monotone order.
         */
        MONOTONE_GRAPHEMES,
        /**
         * Return cluster values grouped into monotone order.
         */
        MONOTONE_CHARACTERS,
        /**
         * Don't group cluster values.
         */
        CHARACTERS,
        /**
         * Default cluster level,
         *   equal to `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES`.
         */
        DEFAULT,
    }
    /**
     * The type of #hb_buffer_t contents.
     */
    enum buffer_content_type_t {
        /**
         * Initial value for new buffer.
         */
        INVALID,
        /**
         * The buffer contains input characters (before shaping).
         */
        UNICODE,
        /**
         * The buffer contains output glyphs (after shaping).
         */
        GLYPHS,
    }
    /**
     * The direction of a text segment or buffer.
     *
     * A segment can also be tested for horizontal or vertical
     * orientation (irrespective of specific direction) with
     * HB_DIRECTION_IS_HORIZONTAL() or HB_DIRECTION_IS_VERTICAL().
     */
    enum direction_t {
        /**
         * Initial, unset direction.
         */
        INVALID,
        /**
         * Text is set horizontally from left to right.
         */
        LTR,
        /**
         * Text is set horizontally from right to left.
         */
        RTL,
        /**
         * Text is set vertically from top to bottom.
         */
        TTB,
        /**
         * Text is set vertically from bottom to top.
         */
        BTT,
    }
    /**
     * Data type holding the memory modes available to
     * client programs.
     *
     * Regarding these various memory-modes:
     *
     * - In no case shall the HarfBuzz client modify memory
     *   that is passed to HarfBuzz in a blob.  If there is
     *   any such possibility, `HB_MEMORY_MODE_DUPLICATE` should be used
     *   such that HarfBuzz makes a copy immediately,
     *
     * - Use `HB_MEMORY_MODE_READONLY` otherwise, unless you really really
     *   really know what you are doing,
     *
     * - `HB_MEMORY_MODE_WRITABLE` is appropriate if you really made a
     *   copy of data solely for the purpose of passing to
     *   HarfBuzz and doing that just once (no reuse!),
     *
     * - If the font is mmap()ed, it's okay to use
     *   `HB_MEMORY_MODE_READONLY_MAY_MAKE_WRITABLE,` however, using that mode
     *   correctly is very tricky.  Use `HB_MEMORY_MODE_READONLY` instead.
     */
    enum memory_mode_t {
        /**
         * HarfBuzz immediately makes a copy of the data.
         */
        DUPLICATE,
        /**
         * HarfBuzz client will never modify the data,
         *     and HarfBuzz will never modify the data.
         */
        READONLY,
        /**
         * HarfBuzz client made a copy of the data solely
         *     for HarfBuzz, so HarfBuzz may modify the data.
         */
        WRITABLE,
        /**
         * See above
         */
        READONLY_MAY_MAKE_WRITABLE,
    }
    /**
     * The GDEF classes defined for glyphs.
     */
    enum ot_layout_glyph_class_t {
        /**
         * Glyphs not matching the other classifications
         */
        UNCLASSIFIED,
        /**
         * Spacing, single characters, capable of accepting marks
         */
        BASE_GLYPH,
        /**
         * Glyphs that represent ligation of multiple characters
         */
        LIGATURE,
        /**
         * Non-spacing, combining glyphs that represent marks
         */
        MARK,
        /**
         * Spacing glyphs that represent part of a single character
         */
        COMPONENT,
    }
    /**
     * The 'MATH' table constants, refer to
     * [OpenType documentation](https://docs.microsoft.com/en-us/typography/opentype/spec/math#mathconstants-table)
     * For more explanations.
     */
    enum ot_math_constant_t {
        /**
         * scriptPercentScaleDown
         */
        SCRIPT_PERCENT_SCALE_DOWN,
        /**
         * scriptScriptPercentScaleDown
         */
        SCRIPT_SCRIPT_PERCENT_SCALE_DOWN,
        /**
         * delimitedSubFormulaMinHeight
         */
        DELIMITED_SUB_FORMULA_MIN_HEIGHT,
        /**
         * displayOperatorMinHeight
         */
        DISPLAY_OPERATOR_MIN_HEIGHT,
        /**
         * mathLeading
         */
        MATH_LEADING,
        /**
         * axisHeight
         */
        AXIS_HEIGHT,
        /**
         * accentBaseHeight
         */
        ACCENT_BASE_HEIGHT,
        /**
         * flattenedAccentBaseHeight
         */
        FLATTENED_ACCENT_BASE_HEIGHT,
        /**
         * subscriptShiftDown
         */
        SUBSCRIPT_SHIFT_DOWN,
        /**
         * subscriptTopMax
         */
        SUBSCRIPT_TOP_MAX,
        /**
         * subscriptBaselineDropMin
         */
        SUBSCRIPT_BASELINE_DROP_MIN,
        /**
         * superscriptShiftUp
         */
        SUPERSCRIPT_SHIFT_UP,
        /**
         * superscriptShiftUpCramped
         */
        SUPERSCRIPT_SHIFT_UP_CRAMPED,
        /**
         * superscriptBottomMin
         */
        SUPERSCRIPT_BOTTOM_MIN,
        /**
         * superscriptBaselineDropMax
         */
        SUPERSCRIPT_BASELINE_DROP_MAX,
        /**
         * subSuperscriptGapMin
         */
        SUB_SUPERSCRIPT_GAP_MIN,
        /**
         * superscriptBottomMaxWithSubscript
         */
        SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT,
        /**
         * spaceAfterScript
         */
        SPACE_AFTER_SCRIPT,
        /**
         * upperLimitGapMin
         */
        UPPER_LIMIT_GAP_MIN,
        /**
         * upperLimitBaselineRiseMin
         */
        UPPER_LIMIT_BASELINE_RISE_MIN,
        /**
         * lowerLimitGapMin
         */
        LOWER_LIMIT_GAP_MIN,
        /**
         * lowerLimitBaselineDropMin
         */
        LOWER_LIMIT_BASELINE_DROP_MIN,
        /**
         * stackTopShiftUp
         */
        STACK_TOP_SHIFT_UP,
        /**
         * stackTopDisplayStyleShiftUp
         */
        STACK_TOP_DISPLAY_STYLE_SHIFT_UP,
        /**
         * stackBottomShiftDown
         */
        STACK_BOTTOM_SHIFT_DOWN,
        /**
         * stackBottomDisplayStyleShiftDown
         */
        STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN,
        /**
         * stackGapMin
         */
        STACK_GAP_MIN,
        /**
         * stackDisplayStyleGapMin
         */
        STACK_DISPLAY_STYLE_GAP_MIN,
        /**
         * stretchStackTopShiftUp
         */
        STRETCH_STACK_TOP_SHIFT_UP,
        /**
         * stretchStackBottomShiftDown
         */
        STRETCH_STACK_BOTTOM_SHIFT_DOWN,
        /**
         * stretchStackGapAboveMin
         */
        STRETCH_STACK_GAP_ABOVE_MIN,
        /**
         * stretchStackGapBelowMin
         */
        STRETCH_STACK_GAP_BELOW_MIN,
        /**
         * fractionNumeratorShiftUp
         */
        FRACTION_NUMERATOR_SHIFT_UP,
        /**
         * fractionNumeratorDisplayStyleShiftUp
         */
        FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP,
        /**
         * fractionDenominatorShiftDown
         */
        FRACTION_DENOMINATOR_SHIFT_DOWN,
        /**
         * fractionDenominatorDisplayStyleShiftDown
         */
        FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN,
        /**
         * fractionNumeratorGapMin
         */
        FRACTION_NUMERATOR_GAP_MIN,
        /**
         * fractionNumDisplayStyleGapMin
         */
        FRACTION_NUM_DISPLAY_STYLE_GAP_MIN,
        /**
         * fractionRuleThickness
         */
        FRACTION_RULE_THICKNESS,
        /**
         * fractionDenominatorGapMin
         */
        FRACTION_DENOMINATOR_GAP_MIN,
        /**
         * fractionDenomDisplayStyleGapMin
         */
        FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN,
        /**
         * skewedFractionHorizontalGap
         */
        SKEWED_FRACTION_HORIZONTAL_GAP,
        /**
         * skewedFractionVerticalGap
         */
        SKEWED_FRACTION_VERTICAL_GAP,
        /**
         * overbarVerticalGap
         */
        OVERBAR_VERTICAL_GAP,
        /**
         * overbarRuleThickness
         */
        OVERBAR_RULE_THICKNESS,
        /**
         * overbarExtraAscender
         */
        OVERBAR_EXTRA_ASCENDER,
        /**
         * underbarVerticalGap
         */
        UNDERBAR_VERTICAL_GAP,
        /**
         * underbarRuleThickness
         */
        UNDERBAR_RULE_THICKNESS,
        /**
         * underbarExtraDescender
         */
        UNDERBAR_EXTRA_DESCENDER,
        /**
         * radicalVerticalGap
         */
        RADICAL_VERTICAL_GAP,
        /**
         * radicalDisplayStyleVerticalGap
         */
        RADICAL_DISPLAY_STYLE_VERTICAL_GAP,
        /**
         * radicalRuleThickness
         */
        RADICAL_RULE_THICKNESS,
        /**
         * radicalExtraAscender
         */
        RADICAL_EXTRA_ASCENDER,
        /**
         * radicalKernBeforeDegree
         */
        RADICAL_KERN_BEFORE_DEGREE,
        /**
         * radicalKernAfterDegree
         */
        RADICAL_KERN_AFTER_DEGREE,
        /**
         * radicalDegreeBottomRaisePercent
         */
        RADICAL_DEGREE_BOTTOM_RAISE_PERCENT,
    }
    /**
     * The math kerning-table types defined for the four corners
     * of a glyph.
     */
    enum ot_math_kern_t {
        /**
         * The top right corner of the glyph.
         */
        TOP_RIGHT,
        /**
         * The top left corner of the glyph.
         */
        TOP_LEFT,
        /**
         * The bottom right corner of the glyph.
         */
        BOTTOM_RIGHT,
        /**
         * The bottom left corner of the glyph.
         */
        BOTTOM_LEFT,
    }
    /**
     * An enum type representing the pre-defined name IDs.
     *
     * For more information on these fields, see the
     * [OpenType spec](https://docs.microsoft.com/en-us/typography/opentype/spec/name#name-ids).
     */
    enum ot_name_id_predefined_t {
        /**
         * Copyright notice
         */
        COPYRIGHT,
        /**
         * Font Family name
         */
        FONT_FAMILY,
        /**
         * Font Subfamily name
         */
        FONT_SUBFAMILY,
        /**
         * Unique font identifier
         */
        UNIQUE_ID,
        /**
         * Full font name that reflects
         * all family and relevant subfamily descriptors
         */
        FULL_NAME,
        /**
         * Version string
         */
        VERSION_STRING,
        /**
         * PostScript name for the font
         */
        POSTSCRIPT_NAME,
        /**
         * Trademark
         */
        TRADEMARK,
        /**
         * Manufacturer Name
         */
        MANUFACTURER,
        /**
         * Designer
         */
        DESIGNER,
        /**
         * Description
         */
        DESCRIPTION,
        /**
         * URL of font vendor
         */
        VENDOR_URL,
        /**
         * URL of typeface designer
         */
        DESIGNER_URL,
        /**
         * License Description
         */
        LICENSE,
        /**
         * URL where additional licensing
         * information can be found
         */
        LICENSE_URL,
        /**
         * Typographic Family name
         */
        TYPOGRAPHIC_FAMILY,
        /**
         * Typographic Subfamily name
         */
        TYPOGRAPHIC_SUBFAMILY,
        /**
         * Compatible Full Name for MacOS
         */
        MAC_FULL_NAME,
        /**
         * Sample text
         */
        SAMPLE_TEXT,
        /**
         * PostScript CID findfont name
         */
        CID_FINDFONT_NAME,
        /**
         * WWS Family Name
         */
        WWS_FAMILY,
        /**
         * WWS Subfamily Name
         */
        WWS_SUBFAMILY,
        /**
         * Light Background Palette
         */
        LIGHT_BACKGROUND,
        /**
         * Dark Background Palette
         */
        DARK_BACKGROUND,
        /**
         * Variations PostScript Name Prefix
         */
        VARIATIONS_PS_PREFIX,
        /**
         * Value to represent a nonexistent name ID.
         */
        INVALID,
    }
    /**
     * The values of this enumeration describe the compositing modes
     * that can be used when combining temporary redirected drawing
     * with the backdrop.
     *
     * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
     * section for details.
     */
    enum paint_composite_mode_t {
        /**
         * clear destination layer (bounded)
         */
        CLEAR,
        /**
         * replace destination layer (bounded)
         */
        SRC,
        /**
         * ignore the source
         */
        DEST,
        /**
         * draw source layer on top of destination layer
         * (bounded)
         */
        SRC_OVER,
        /**
         * draw destination on top of source
         */
        DEST_OVER,
        /**
         * draw source where there was destination content
         * (unbounded)
         */
        SRC_IN,
        /**
         * leave destination only where there was
         * source content (unbounded)
         */
        DEST_IN,
        /**
         * draw source where there was no destination
         * content (unbounded)
         */
        SRC_OUT,
        /**
         * leave destination only where there was no
         * source content
         */
        DEST_OUT,
        /**
         * draw source on top of destination content and
         * only there
         */
        SRC_ATOP,
        /**
         * leave destination on top of source content
         * and only there (unbounded)
         */
        DEST_ATOP,
        /**
         * source and destination are shown where there is only
         * one of them
         */
        XOR,
        /**
         * source and destination layers are accumulated
         */
        PLUS,
        /**
         * source and destination are complemented and
         * multiplied. This causes the result to be at least as light as the lighter
         * inputs.
         */
        SCREEN,
        /**
         * multiplies or screens, depending on the
         * lightness of the destination color.
         */
        OVERLAY,
        /**
         * replaces the destination with the source if it
         * is darker, otherwise keeps the source.
         */
        DARKEN,
        /**
         * replaces the destination with the source if it
         * is lighter, otherwise keeps the source.
         */
        LIGHTEN,
        /**
         * brightens the destination color to reflect
         * the source color.
         */
        COLOR_DODGE,
        /**
         * darkens the destination color to reflect
         * the source color.
         */
        COLOR_BURN,
        /**
         * Multiplies or screens, dependent on source
         * color.
         */
        HARD_LIGHT,
        /**
         * Darkens or lightens, dependent on source
         * color.
         */
        SOFT_LIGHT,
        /**
         * Takes the difference of the source and
         * destination color.
         */
        DIFFERENCE,
        /**
         * Produces an effect similar to difference, but
         * with lower contrast.
         */
        EXCLUSION,
        /**
         * source and destination layers are multiplied.
         * This causes the result to be at least as dark as the darker inputs.
         */
        MULTIPLY,
        /**
         * Creates a color with the hue of the source
         * and the saturation and luminosity of the target.
         */
        HSL_HUE,
        /**
         * Creates a color with the saturation
         * of the source and the hue and luminosity of the target. Painting with
         * this mode onto a gray area produces no change.
         */
        HSL_SATURATION,
        /**
         * Creates a color with the hue and saturation
         * of the source and the luminosity of the target. This preserves the gray
         * levels of the target and is useful for coloring monochrome images or
         * tinting color images.
         */
        HSL_COLOR,
        /**
         * Creates a color with the luminosity of
         * the source and the hue and saturation of the target. This produces an
         * inverse effect to `HB_PAINT_COMPOSITE_MODE_HSL_COLOR`.
         */
        HSL_LUMINOSITY,
    }
    /**
     * The values of this enumeration determine how color values
     * outside the minimum and maximum defined offset on a #hb_color_line_t
     * are determined.
     *
     * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
     * section for details.
     */
    enum paint_extend_t {
        /**
         * Outside the defined interval,
         *   the color of the closest color stop is used.
         */
        PAD,
        /**
         * The color line is repeated over
         *   repeated multiples of the defined interval
         */
        REPEAT,
        /**
         * The color line is repeated over
         *      repeated intervals, as for the repeat mode.
         *      However, in each repeated interval, the ordering of
         *      color stops is the reverse of the adjacent interval.
         */
        REFLECT,
    }
    /**
     * Data type for the Canonical_Combining_Class (ccc) property
     * from the Unicode Character Database.
     *
     * <note>Note: newer versions of Unicode may add new values.
     * Client programs should be ready to handle any value in the 0..254 range
     * being returned from hb_unicode_combining_class().</note>
     */
    enum unicode_combining_class_t {
        /**
         * Spacing and enclosing marks; also many vowel and consonant signs, even if nonspacing
         */
        NOT_REORDERED,
        /**
         * Marks which overlay a base letter or symbol
         */
        OVERLAY,
        /**
         * Diacritic nukta marks in Brahmi-derived scripts
         */
        NUKTA,
        /**
         * Hiragana/Katakana voicing marks
         */
        KANA_VOICING,
        /**
         * Viramas
         */
        VIRAMA,
        /**
         * [Hebrew]
         */
        CCC10,
        /**
         * [Hebrew]
         */
        CCC11,
        /**
         * [Hebrew]
         */
        CCC12,
        /**
         * [Hebrew]
         */
        CCC13,
        /**
         * [Hebrew]
         */
        CCC14,
        /**
         * [Hebrew]
         */
        CCC15,
        /**
         * [Hebrew]
         */
        CCC16,
        /**
         * [Hebrew]
         */
        CCC17,
        /**
         * [Hebrew]
         */
        CCC18,
        /**
         * [Hebrew]
         */
        CCC19,
        /**
         * [Hebrew]
         */
        CCC20,
        /**
         * [Hebrew]
         */
        CCC21,
        /**
         * [Hebrew]
         */
        CCC22,
        /**
         * [Hebrew]
         */
        CCC23,
        /**
         * [Hebrew]
         */
        CCC24,
        /**
         * [Hebrew]
         */
        CCC25,
        /**
         * [Hebrew]
         */
        CCC26,
        /**
         * [Arabic]
         */
        CCC27,
        /**
         * [Arabic]
         */
        CCC28,
        /**
         * [Arabic]
         */
        CCC29,
        /**
         * [Arabic]
         */
        CCC30,
        /**
         * [Arabic]
         */
        CCC31,
        /**
         * [Arabic]
         */
        CCC32,
        /**
         * [Arabic]
         */
        CCC33,
        /**
         * [Arabic]
         */
        CCC34,
        /**
         * [Arabic]
         */
        CCC35,
        /**
         * [Syriac]
         */
        CCC36,
        /**
         * [Telugu]
         */
        CCC84,
        /**
         * [Telugu]
         */
        CCC91,
        /**
         * [Thai]
         */
        CCC103,
        /**
         * [Thai]
         */
        CCC107,
        /**
         * [Lao]
         */
        CCC118,
        /**
         * [Lao]
         */
        CCC122,
        /**
         * [Tibetan]
         */
        CCC129,
        /**
         * [Tibetan]
         */
        CCC130,
        /**
         * [Tibetan] Since: 7.2.0
         */
        CCC132,
        /**
         * Marks attached at the bottom left
         */
        ATTACHED_BELOW_LEFT,
        /**
         * Marks attached directly below
         */
        ATTACHED_BELOW,
        /**
         * Marks attached directly above
         */
        ATTACHED_ABOVE,
        /**
         * Marks attached at the top right
         */
        ATTACHED_ABOVE_RIGHT,
        /**
         * Distinct marks at the bottom left
         */
        BELOW_LEFT,
        /**
         * Distinct marks directly below
         */
        BELOW,
        /**
         * Distinct marks at the bottom right
         */
        BELOW_RIGHT,
        /**
         * Distinct marks to the left
         */
        LEFT,
        /**
         * Distinct marks to the right
         */
        RIGHT,
        /**
         * Distinct marks at the top left
         */
        ABOVE_LEFT,
        /**
         * Distinct marks directly above
         */
        ABOVE,
        /**
         * Distinct marks at the top right
         */
        ABOVE_RIGHT,
        /**
         * Distinct marks subtending two bases
         */
        DOUBLE_BELOW,
        /**
         * Distinct marks extending above two bases
         */
        DOUBLE_ABOVE,
        /**
         * Greek iota subscript only
         */
        IOTA_SUBSCRIPT,
        /**
         * Invalid combining class
         */
        INVALID,
    }
    /**
     * Data type for the "General_Category" (gc) property from
     * the Unicode Character Database.
     */
    enum unicode_general_category_t {
        /**
         * [Cc]
         */
        CONTROL,
        /**
         * [Cf]
         */
        FORMAT,
        /**
         * [Cn]
         */
        UNASSIGNED,
        /**
         * [Co]
         */
        PRIVATE_USE,
        /**
         * [Cs]
         */
        SURROGATE,
        /**
         * [Ll]
         */
        LOWERCASE_LETTER,
        /**
         * [Lm]
         */
        MODIFIER_LETTER,
        /**
         * [Lo]
         */
        OTHER_LETTER,
        /**
         * [Lt]
         */
        TITLECASE_LETTER,
        /**
         * [Lu]
         */
        UPPERCASE_LETTER,
        /**
         * [Mc]
         */
        SPACING_MARK,
        /**
         * [Me]
         */
        ENCLOSING_MARK,
        /**
         * [Mn]
         */
        NON_SPACING_MARK,
        /**
         * [Nd]
         */
        DECIMAL_NUMBER,
        /**
         * [Nl]
         */
        LETTER_NUMBER,
        /**
         * [No]
         */
        OTHER_NUMBER,
        /**
         * [Pc]
         */
        CONNECT_PUNCTUATION,
        /**
         * [Pd]
         */
        DASH_PUNCTUATION,
        /**
         * [Pe]
         */
        CLOSE_PUNCTUATION,
        /**
         * [Pf]
         */
        FINAL_PUNCTUATION,
        /**
         * [Pi]
         */
        INITIAL_PUNCTUATION,
        /**
         * [Po]
         */
        OTHER_PUNCTUATION,
        /**
         * [Ps]
         */
        OPEN_PUNCTUATION,
        /**
         * [Sc]
         */
        CURRENCY_SYMBOL,
        /**
         * [Sk]
         */
        MODIFIER_SYMBOL,
        /**
         * [Sm]
         */
        MATH_SYMBOL,
        /**
         * [So]
         */
        OTHER_SYMBOL,
        /**
         * [Zl]
         */
        LINE_SEPARATOR,
        /**
         * [Zp]
         */
        PARAGRAPH_SEPARATOR,
        /**
         * [Zs]
         */
        SPACE_SEPARATOR,
    }
    /**
     * The selectors defined for specifying AAT feature settings.
     * @bitfield
     */
    enum aat_layout_feature_selector_t {
        /**
         * Initial, unset feature selector
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INVALID,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALL_TYPE_FEATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALL_TYPE_FEATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_REQUIRED_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_REQUIRED_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_COMMON_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_COMMON_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_RARE_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_RARE_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LOGOS_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LOGOS_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_REBUS_PICTURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_REBUS_PICTURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DIPHTHONG_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DIPHTHONG_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SQUARED_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SQUARED_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ABBREV_SQUARED_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ABBREV_SQUARED_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SYMBOL_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SYMBOL_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HISTORICAL_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HISTORICAL_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_UNCONNECTED,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PARTIALLY_CONNECTED,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CURSIVE,
        /**
         * Deprecated
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_UPPER_AND_LOWER_CASE,
        /**
         * Deprecated
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALL_CAPS,
        /**
         * Deprecated
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALL_LOWER_CASE,
        /**
         * Deprecated
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SMALL_CAPS,
        /**
         * Deprecated
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INITIAL_CAPS,
        /**
         * Deprecated
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INITIAL_CAPS_AND_SMALL_CAPS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SUBSTITUTE_VERTICAL_FORMS_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SUBSTITUTE_VERTICAL_FORMS_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LINGUISTIC_REARRANGEMENT_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LINGUISTIC_REARRANGEMENT_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_MONOSPACED_NUMBERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_NUMBERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_THIRD_WIDTH_NUMBERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_QUARTER_WIDTH_NUMBERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_WORD_INITIAL_SWASHES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_WORD_INITIAL_SWASHES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_WORD_FINAL_SWASHES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_WORD_FINAL_SWASHES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LINE_INITIAL_SWASHES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LINE_INITIAL_SWASHES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LINE_FINAL_SWASHES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LINE_FINAL_SWASHES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NON_FINAL_SWASHES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NON_FINAL_SWASHES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SHOW_DIACRITICS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HIDE_DIACRITICS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DECOMPOSE_DIACRITICS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NORMAL_POSITION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SUPERIORS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INFERIORS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ORDINALS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SCIENTIFIC_INFERIORS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_FRACTIONS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_VERTICAL_FRACTIONS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DIAGONAL_FRACTIONS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PREVENT_OVERLAP_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PREVENT_OVERLAP_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHENS_TO_EM_DASH_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHENS_TO_EM_DASH_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHEN_TO_EN_DASH_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHEN_TO_EN_DASH_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SLASHED_ZERO_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SLASHED_ZERO_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_FORM_INTERROBANG_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_FORM_INTERROBANG_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SMART_QUOTES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SMART_QUOTES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PERIODS_TO_ELLIPSIS_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PERIODS_TO_ELLIPSIS_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHEN_TO_MINUS_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHEN_TO_MINUS_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ASTERISK_TO_MULTIPLY_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ASTERISK_TO_MULTIPLY_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SLASH_TO_DIVIDE_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SLASH_TO_DIVIDE_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INEQUALITY_LIGATURES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INEQUALITY_LIGATURES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_EXPONENTS_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_EXPONENTS_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_MATHEMATICAL_GREEK_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_MATHEMATICAL_GREEK_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_ORNAMENTS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DINGBATS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PI_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_FLEURONS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DECORATIVE_BORDERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INTERNATIONAL_SYMBOLS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_MATH_SYMBOLS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_ALTERNATES,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL1,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL2,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL3,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL4,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL5,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_STYLE_OPTIONS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DISPLAY_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ENGRAVED_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ILLUMINATED_CAPS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TITLING_CAPS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TALL_CAPS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SIMPLIFIED_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_JIS1978_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_JIS1983_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_JIS1990_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_ONE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_TWO,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_THREE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_FOUR,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_FIVE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_EXPERT_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_JIS2004_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HOJO_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NLCCHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_NAMES_CHARACTERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LOWER_CASE_NUMBERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_UPPER_CASE_NUMBERS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_MONOSPACED_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HALF_WIDTH_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_THIRD_WIDTH_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_QUARTER_WIDTH_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALT_PROPORTIONAL_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALT_HALF_WIDTH_TEXT,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_TRANSLITERATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HANJA_TO_HANGUL,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HIRAGANA_TO_KATAKANA,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_KATAKANA_TO_HIRAGANA,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_KANA_TO_ROMANIZATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ROMANIZATION_TO_HIRAGANA,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ROMANIZATION_TO_KATAKANA,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HANJA_TO_HANGUL_ALT_ONE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HANJA_TO_HANGUL_ALT_TWO,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HANJA_TO_HANGUL_ALT_THREE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_BOX_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ROUNDED_BOX_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CIRCLE_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INVERTED_CIRCLE_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PARENTHESIS_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PERIOD_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ROMAN_NUMERAL_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DIAMOND_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INVERTED_BOX_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_INVERTED_ROUNDED_BOX_ANNOTATION,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_FULL_WIDTH_KANA,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_KANA,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_FULL_WIDTH_IDEOGRAPHS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_IDEOGRAPHS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HALF_WIDTH_IDEOGRAPHS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CANONICAL_COMPOSITION_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CANONICAL_COMPOSITION_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_COMPATIBILITY_COMPOSITION_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_COMPATIBILITY_COMPOSITION_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRANSCODING_COMPOSITION_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_TRANSCODING_COMPOSITION_OFF,
        /**
         * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_OFF instead
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_RUBY_KANA,
        /**
         * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_ON instead
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_CJK_SYMBOL_ALTERNATIVES,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_ONE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_TWO,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_THREE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_FOUR,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_FIVE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_IDEOGRAPHIC_ALTERNATIVES,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_ONE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_TWO,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_THREE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_FOUR,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_FIVE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_VERTICAL_ROMAN_CENTERED,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_VERTICAL_ROMAN_HBASELINE,
        /**
         * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_OFF instead
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_CJK_ITALIC_ROMAN,
        /**
         * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_ON instead
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CASE_SENSITIVE_LAYOUT_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CASE_SENSITIVE_LAYOUT_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CASE_SENSITIVE_SPACING_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CASE_SENSITIVE_SPACING_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALTERNATE_HORIZ_KANA_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALTERNATE_HORIZ_KANA_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALTERNATE_VERT_KANA_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_ALTERNATE_VERT_KANA_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_NO_STYLISTIC_ALTERNATES,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_ONE_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_ONE_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWO_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWO_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_THREE_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_THREE_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FOUR_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FOUR_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FIVE_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FIVE_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SIX_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SIX_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SEVEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SEVEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_EIGHT_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_EIGHT_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_NINE_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_NINE_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_ELEVEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_ELEVEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWELVE_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWELVE_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_THIRTEEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_THIRTEEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FOURTEEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FOURTEEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FIFTEEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FIFTEEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SIXTEEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SIXTEEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SEVENTEEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SEVENTEEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_EIGHTEEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_EIGHTEEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_NINETEEN_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_NINETEEN_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWENTY_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWENTY_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_ALTERNATES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_ALTERNATES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SWASH_ALTERNATES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_SWASH_ALTERNATES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_SWASH_ALTERNATES_ON,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_SWASH_ALTERNATES_OFF,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DEFAULT_LOWER_CASE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LOWER_CASE_SMALL_CAPS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_LOWER_CASE_PETITE_CAPS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DEFAULT_UPPER_CASE,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_UPPER_CASE_SMALL_CAPS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_UPPER_CASE_PETITE_CAPS,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_HALF_WIDTH_CJK_ROMAN,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_CJK_ROMAN,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_DEFAULT_CJK_ROMAN,
        /**
         * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
         */
        B_AAT_LAYOUT_FEATURE_SELECTOR_FULL_WIDTH_CJK_ROMAN,
    }
    /**
     * The possible feature types defined for AAT shaping, from Apple [Font Feature Registry](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html).
     * @bitfield
     */
    enum aat_layout_feature_type_t {
        /**
         * Initial, unset feature type
         */
        B_AAT_LAYOUT_FEATURE_TYPE_INVALID,
        /**
         * [All Typographic Features](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type0)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC,
        /**
         * [Ligatures](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type1)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_LIGATURES,
        /**
         * [Cursive Connection](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type2)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_CURISVE_CONNECTION,
        /**
         * [Letter Case](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type3)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_LETTER_CASE,
        /**
         * [Vertical Substitution](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type4)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION,
        /**
         * [Linguistic Rearrangement](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type5)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT,
        /**
         * [Number Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type6)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING,
        /**
         * [Smart Swash](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type8)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE,
        /**
         * [Diacritics](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type9)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE,
        /**
         * [Vertical Position](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type10)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION,
        /**
         * [Fractions](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type11)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS,
        /**
         * [Overlapping Characters](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type13)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE,
        /**
         * [Typographic Extras](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type14)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS,
        /**
         * [Mathematical Extras](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type15)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS,
        /**
         * [Ornament Sets](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type16)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE,
        /**
         * [Character Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type17)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_ALTERNATIVES,
        /**
         * [Design Complexity](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type18)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE,
        /**
         * [Style Options](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type19)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS,
        /**
         * [Character Shape](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type20)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE,
        /**
         * [Number Case](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type21)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE,
        /**
         * [Text Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type22)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING,
        /**
         * [Transliteration](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type23)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION,
        /**
         * [Annotation](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type24)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE,
        /**
         * [Kana Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type25)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE,
        /**
         * [Ideographic Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type26)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE,
        /**
         * [Unicode Decomposition](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type27)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE,
        /**
         * [Ruby Kana](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type28)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA,
        /**
         * [CJK Symbol Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type29)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE,
        /**
         * [Ideographic Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type30)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE,
        /**
         * [CJK Vertical Roman Placement](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type31)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE,
        /**
         * [Italic CJK Roman](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type32)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN,
        /**
         * [Case Sensitive Layout](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type33)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT,
        /**
         * [Alternate Kana](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type34)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA,
        /**
         * [Stylistic Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type35)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES,
        /**
         * [Contextual Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type36)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES,
        /**
         * [Lower Case](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type37)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE,
        /**
         * [Upper Case](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type38)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE,
        /**
         * [Language Tag](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type39)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_LANGUAGE_TAG_TYPE,
        /**
         * [CJK Roman Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type103)
         */
        B_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE,
    }
    /**
     * Flags from comparing two #hb_buffer_t's.
     *
     * Buffer with different #hb_buffer_content_type_t cannot be meaningfully
     * compared in any further detail.
     *
     * For buffers with differing length, the per-glyph comparison is not
     * attempted, though we do still scan reference buffer for dotted circle and
     * `.notdef` glyphs.
     *
     * If the buffers have the same length, we compare them glyph-by-glyph and
     * report which aspect(s) of the glyph info/position are different.
     * @bitfield
     */
    enum buffer_diff_flags_t {
        /**
         * equal buffers.
         */
        EQUAL,
        /**
         * buffers with different
         *     #hb_buffer_content_type_t.
         */
        CONTENT_TYPE_MISMATCH,
        /**
         * buffers with differing length.
         */
        LENGTH_MISMATCH,
        /**
         * `.notdef` glyph is present in the
         *     reference buffer.
         */
        NOTDEF_PRESENT,
        /**
         * dotted circle glyph is present
         *     in the reference buffer.
         */
        DOTTED_CIRCLE_PRESENT,
        /**
         * difference in #hb_glyph_info_t.codepoint
         */
        CODEPOINT_MISMATCH,
        /**
         * difference in #hb_glyph_info_t.cluster
         */
        CLUSTER_MISMATCH,
        /**
         * difference in #hb_glyph_flags_t.
         */
        GLYPH_FLAGS_MISMATCH,
        /**
         * difference in #hb_glyph_position_t.
         */
        POSITION_MISMATCH,
    }
    /**
     * Flags for #hb_buffer_t.
     * @bitfield
     */
    enum buffer_flags_t {
        /**
         * the default buffer flag.
         */
        DEFAULT,
        /**
         * flag indicating that special handling of the beginning
         *                      of text paragraph can be applied to this buffer. Should usually
         *                      be set, unless you are passing to the buffer only part
         *                      of the text without the full context.
         */
        BOT,
        /**
         * flag indicating that special handling of the end of text
         *                      paragraph can be applied to this buffer, similar to
         *                      `HB_BUFFER_FLAG_BOT`.
         */
        EOT,
        /**
         * flag indication that character with Default_Ignorable
         *                      Unicode property should use the corresponding glyph
         *                      from the font, instead of hiding them (done by
         *                      replacing them with the space glyph and zeroing the
         *                      advance width.)  This flag takes precedence over
         *                      `HB_BUFFER_FLAG_REMOVE_DEFAULT_IGNORABLES`.
         */
        PRESERVE_DEFAULT_IGNORABLES,
        /**
         * flag indication that character with Default_Ignorable
         *                      Unicode property should be removed from glyph string
         *                      instead of hiding them (done by replacing them with the
         *                      space glyph and zeroing the advance width.)
         *                      `HB_BUFFER_FLAG_PRESERVE_DEFAULT_IGNORABLES` takes
         *                      precedence over this flag. Since: 1.8.0
         */
        REMOVE_DEFAULT_IGNORABLES,
        /**
         * flag indicating that a dotted circle should
         *                      not be inserted in the rendering of incorrect
         *                      character sequences (such at <0905 093E>). Since: 2.4.0
         */
        DO_NOT_INSERT_DOTTED_CIRCLE,
        /**
         * flag indicating that the hb_shape() call and its variants
         *                      should perform various verification processes on the results
         *                      of the shaping operation on the buffer.  If the verification
         *                      fails, then either a buffer message is sent, if a message
         *                      handler is installed on the buffer, or a message is written
         *                      to standard error.  In either case, the shaping result might
         *                      be modified to show the failed output. Since: 3.4.0
         */
        VERIFY,
        /**
         * flag indicating that the `HB_GLYPH_FLAG_UNSAFE_TO_CONCAT`
         *                      glyph-flag should be produced by the shaper. By default
         *                      it will not be produced since it incurs a cost. Since: 4.0.0
         */
        PRODUCE_UNSAFE_TO_CONCAT,
        /**
         * flag indicating that the `HB_GLYPH_FLAG_SAFE_TO_INSERT_TATWEEL`
         *                      glyph-flag should be produced by the shaper. By default
         *                      it will not be produced. Since: 5.1.0
         */
        PRODUCE_SAFE_TO_INSERT_TATWEEL,
        /**
         * All currently defined flags: Since: 4.4.0
         */
        DEFINED,
    }
    /**
     * Flags that control what glyph information are serialized in hb_buffer_serialize_glyphs().
     * @bitfield
     */
    enum buffer_serialize_flags_t {
        /**
         * serialize glyph names, clusters and positions.
         */
        DEFAULT,
        /**
         * do not serialize glyph cluster.
         */
        NO_CLUSTERS,
        /**
         * do not serialize glyph position information.
         */
        NO_POSITIONS,
        /**
         * do no serialize glyph name.
         */
        NO_GLYPH_NAMES,
        /**
         * serialize glyph extents.
         */
        GLYPH_EXTENTS,
        /**
         * serialize glyph flags. Since: 1.5.0
         */
        GLYPH_FLAGS,
        /**
         * do not serialize glyph advances,
         *  glyph offsets will reflect absolute glyph positions. Since: 1.8.0
         */
        NO_ADVANCES,
        /**
         * All currently defined flags. Since: 4.4.0
         */
        DEFINED,
    }
    /**
     * The buffer serialization and de-serialization format used in
     * hb_buffer_serialize_glyphs() and hb_buffer_deserialize_glyphs().
     * @bitfield
     */
    enum buffer_serialize_format_t {
        /**
         * a human-readable, plain text format.
         */
        TEXT,
        /**
         * a machine-readable JSON format.
         */
        JSON,
        /**
         * invalid format.
         */
        INVALID,
    }
    /**
     * Flags for #hb_glyph_info_t.
     * @bitfield
     */
    enum glyph_flags_t {
        /**
         * Indicates that if input text is broken at the
         * 				   beginning of the cluster this glyph is part of,
         * 				   then both sides need to be re-shaped, as the
         * 				   result might be different.
         * 				   On the flip side, it means that when this
         * 				   flag is not present, then it is safe to break
         * 				   the glyph-run at the beginning of this
         * 				   cluster, and the two sides will represent the
         * 				   exact same result one would get if breaking
         * 				   input text at the beginning of this cluster
         * 				   and shaping the two sides separately.
         * 				   This can be used to optimize paragraph
         * 				   layout, by avoiding re-shaping of each line
         * 				   after line-breaking.
         */
        UNSAFE_TO_BREAK,
        /**
         * Indicates that if input text is changed on one
         * 				   side of the beginning of the cluster this glyph
         * 				   is part of, then the shaping results for the
         * 				   other side might change.
         * 				   Note that the absence of this flag will NOT by
         * 				   itself mean that it IS safe to concat text.
         * 				   Only two pieces of text both of which clear of
         * 				   this flag can be concatenated safely.
         * 				   This can be used to optimize paragraph
         * 				   layout, by avoiding re-shaping of each line
         * 				   after line-breaking, by limiting the
         * 				   reshaping to a small piece around the
         * 				   breaking position only, even if the breaking
         * 				   position carries the
         * 				   #HB_GLYPH_FLAG_UNSAFE_TO_BREAK or when
         * 				   hyphenation or other text transformation
         * 				   happens at line-break position, in the following
         * 				   way:
         * 				   1. Iterate back from the line-break position
         * 				   until the first cluster start position that is
         * 				   NOT unsafe-to-concat, 2. shape the segment from
         * 				   there till the end of line, 3. check whether the
         * 				   resulting glyph-run also is clear of the
         * 				   unsafe-to-concat at its start-of-text position;
         * 				   if it is, just splice it into place and the line
         * 				   is shaped; If not, move on to a position further
         * 				   back that is clear of unsafe-to-concat and retry
         * 				   from there, and repeat.
         * 				   At the start of next line a similar algorithm can
         * 				   be implemented. That is: 1. Iterate forward from
         * 				   the line-break position until the first cluster
         * 				   start position that is NOT unsafe-to-concat, 2.
         * 				   shape the segment from beginning of the line to
         * 				   that position, 3. check whether the resulting
         * 				   glyph-run also is clear of the unsafe-to-concat
         * 				   at its end-of-text position; if it is, just splice
         * 				   it into place and the beginning is shaped; If not,
         * 				   move on to a position further forward that is clear
         * 				   of unsafe-to-concat and retry up to there, and repeat.
         * 				   A slight complication will arise in the
         * 				   implementation of the algorithm above,
         * 				   because while our buffer API has a way to
         * 				   return flags for position corresponding to
         * 				   start-of-text, there is currently no position
         * 				   corresponding to end-of-text.  This limitation
         * 				   can be alleviated by shaping more text than needed
         * 				   and looking for unsafe-to-concat flag within text
         * 				   clusters.
         * 				   The #HB_GLYPH_FLAG_UNSAFE_TO_BREAK flag will
         * 				   always imply this flag.
         * 			   To use this flag, you must enable the buffer flag
         * 			   `HB_BUFFER_FLAG_PRODUCE_UNSAFE_TO_CONCAT` during
         * 			   shaping, otherwise the buffer flag will not be
         * 			   reliably produced.
         * 				   Since: 4.0.0
         */
        UNSAFE_TO_CONCAT,
        /**
         * In scripts that use elongation (Arabic,
         * 				   Mongolian, Syriac, etc.), this flag signifies
         * 				   that it is safe to insert a U+0640 TATWEEL
         * 				   character before this cluster for elongation.
         * 				   This flag does not determine the
         * 				   script-specific elongation places, but only
         * 				   when it is safe to do the elongation without
         * 				   interrupting text shaping.
         * 				   Since: 5.1.0
         */
        SAFE_TO_INSERT_TATWEEL,
        /**
         * All the currently defined flags.
         */
        DEFINED,
    }
    /**
     * Flags that describe the properties of color palette.
     * @bitfield
     */
    enum ot_color_palette_flags_t {
        /**
         * Default indicating that there is nothing special
         *   to note about a color palette.
         */
        DEFAULT,
        /**
         * Flag indicating that the color
         *   palette is appropriate to use when displaying the font on a light background such as white.
         */
        USABLE_WITH_LIGHT_BACKGROUND,
        /**
         * Flag indicating that the color
         *   palette is appropriate to use when displaying the font on a dark background such as black.
         */
        USABLE_WITH_DARK_BACKGROUND,
    }
    /**
     * Baseline tags from [Baseline Tags](https://docs.microsoft.com/en-us/typography/opentype/spec/baselinetags) registry.
     * @bitfield
     */
    enum ot_layout_baseline_tag_t {
        /**
         * The baseline used by alphabetic scripts such as Latin, Cyrillic and Greek.
         * In vertical writing mode, the alphabetic baseline for characters rotated 90 degrees clockwise.
         * (This would not apply to alphabetic characters that remain upright in vertical writing mode, since these
         * characters are not rotated.)
         */
        B_OT_LAYOUT_BASELINE_TAG_ROMAN,
        /**
         * The hanging baseline. In horizontal direction, this is the horizontal
         * line from which syllables seem, to hang in Tibetan and other similar scripts. In vertical writing mode,
         * for Tibetan (or some other similar script) characters rotated 90 degrees clockwise.
         */
        B_OT_LAYOUT_BASELINE_TAG_HANGING,
        /**
         * Ideographic character face bottom or left edge,
         * if the direction is horizontal or vertical, respectively.
         */
        B_OT_LAYOUT_BASELINE_TAG_IDEO_FACE_BOTTOM_OR_LEFT,
        /**
         * Ideographic character face top or right edge,
         * if the direction is horizontal or vertical, respectively.
         */
        B_OT_LAYOUT_BASELINE_TAG_IDEO_FACE_TOP_OR_RIGHT,
        /**
         * The center of the ideographic character face. Since: 4.0.0
         */
        B_OT_LAYOUT_BASELINE_TAG_IDEO_FACE_CENTRAL,
        /**
         * Ideographic em-box bottom or left edge,
         * if the direction is horizontal or vertical, respectively.
         */
        B_OT_LAYOUT_BASELINE_TAG_IDEO_EMBOX_BOTTOM_OR_LEFT,
        /**
         * Ideographic em-box top or right edge baseline,
         */
        B_OT_LAYOUT_BASELINE_TAG_IDEO_EMBOX_TOP_OR_RIGHT,
        /**
         * The center of the ideographic em-box. Since: 4.0.0
         * if the direction is horizontal or vertical, respectively.
         */
        B_OT_LAYOUT_BASELINE_TAG_IDEO_EMBOX_CENTRAL,
        /**
         * The baseline about which mathematical characters are centered.
         * In vertical writing mode when mathematical characters rotated 90 degrees clockwise, are centered.
         */
        B_OT_LAYOUT_BASELINE_TAG_MATH,
    }
    /**
     * Flags for math glyph parts.
     * @bitfield
     */
    enum ot_math_glyph_part_flags_t {
        /**
         * This is an extender glyph part that
         * can be repeated to reach the desired length.
         */
        OT_MATH_GLYPH_PART_FLAG_EXTENDER,
    }
    /**
     * Known metadata tags from https://docs.microsoft.com/en-us/typography/opentype/spec/meta
     * @bitfield
     */
    enum ot_meta_tag_t {
        /**
         * Design languages. Text, using only
         * Basic Latin (ASCII) characters. Indicates languages and/or scripts
         * for the user audiences that the font was primarily designed for.
         */
        B_OT_META_TAG_DESIGN_LANGUAGES,
        /**
         * Supported languages. Text, using
         * only Basic Latin (ASCII) characters. Indicates languages and/or scripts
         * that the font is declared to be capable of supporting.
         */
        B_OT_META_TAG_SUPPORTED_LANGUAGES,
    }
    /**
     * Metric tags corresponding to [MVAR Value
     * Tags](https://docs.microsoft.com/en-us/typography/opentype/spec/mvar#value-tags)
     * @bitfield
     */
    enum ot_metrics_tag_t {
        /**
         * horizontal ascender.
         */
        B_OT_METRICS_TAG_HORIZONTAL_ASCENDER,
        /**
         * horizontal descender.
         */
        B_OT_METRICS_TAG_HORIZONTAL_DESCENDER,
        /**
         * horizontal line gap.
         */
        B_OT_METRICS_TAG_HORIZONTAL_LINE_GAP,
        /**
         * horizontal clipping ascent.
         */
        B_OT_METRICS_TAG_HORIZONTAL_CLIPPING_ASCENT,
        /**
         * horizontal clipping descent.
         */
        B_OT_METRICS_TAG_HORIZONTAL_CLIPPING_DESCENT,
        /**
         * vertical ascender.
         */
        B_OT_METRICS_TAG_VERTICAL_ASCENDER,
        /**
         * vertical descender.
         */
        B_OT_METRICS_TAG_VERTICAL_DESCENDER,
        /**
         * vertical line gap.
         */
        B_OT_METRICS_TAG_VERTICAL_LINE_GAP,
        /**
         * horizontal caret rise.
         */
        B_OT_METRICS_TAG_HORIZONTAL_CARET_RISE,
        /**
         * horizontal caret run.
         */
        B_OT_METRICS_TAG_HORIZONTAL_CARET_RUN,
        /**
         * horizontal caret offset.
         */
        B_OT_METRICS_TAG_HORIZONTAL_CARET_OFFSET,
        /**
         * vertical caret rise.
         */
        B_OT_METRICS_TAG_VERTICAL_CARET_RISE,
        /**
         * vertical caret run.
         */
        B_OT_METRICS_TAG_VERTICAL_CARET_RUN,
        /**
         * vertical caret offset.
         */
        B_OT_METRICS_TAG_VERTICAL_CARET_OFFSET,
        /**
         * x height.
         */
        B_OT_METRICS_TAG_X_HEIGHT,
        /**
         * cap height.
         */
        B_OT_METRICS_TAG_CAP_HEIGHT,
        /**
         * subscript em x size.
         */
        B_OT_METRICS_TAG_SUBSCRIPT_EM_X_SIZE,
        /**
         * subscript em y size.
         */
        B_OT_METRICS_TAG_SUBSCRIPT_EM_Y_SIZE,
        /**
         * subscript em x offset.
         */
        B_OT_METRICS_TAG_SUBSCRIPT_EM_X_OFFSET,
        /**
         * subscript em y offset.
         */
        B_OT_METRICS_TAG_SUBSCRIPT_EM_Y_OFFSET,
        /**
         * superscript em x size.
         */
        B_OT_METRICS_TAG_SUPERSCRIPT_EM_X_SIZE,
        /**
         * superscript em y size.
         */
        B_OT_METRICS_TAG_SUPERSCRIPT_EM_Y_SIZE,
        /**
         * superscript em x offset.
         */
        B_OT_METRICS_TAG_SUPERSCRIPT_EM_X_OFFSET,
        /**
         * superscript em y offset.
         */
        B_OT_METRICS_TAG_SUPERSCRIPT_EM_Y_OFFSET,
        /**
         * strikeout size.
         */
        B_OT_METRICS_TAG_STRIKEOUT_SIZE,
        /**
         * strikeout offset.
         */
        B_OT_METRICS_TAG_STRIKEOUT_OFFSET,
        /**
         * underline size.
         */
        B_OT_METRICS_TAG_UNDERLINE_SIZE,
        /**
         * underline offset.
         */
        B_OT_METRICS_TAG_UNDERLINE_OFFSET,
    }
    /**
     * Flags for #hb_ot_var_axis_info_t.
     * @bitfield
     */
    enum ot_var_axis_flags_t {
        /**
         * The axis should not be exposed directly in user interfaces.
         */
        B_OT_VAR_AXIS_FLAG_HIDDEN,
    }
    /**
     * Data type for scripts. Each #hb_script_t's value is an #hb_tag_t corresponding
     * to the four-letter values defined by [ISO 15924](https://unicode.org/iso15924/).
     *
     * See also the Script (sc) property of the Unicode Character Database.
     * @bitfield
     */
    enum script_t {
        /**
         * `Zyyy`
         */
        B_SCRIPT_COMMON,
        /**
         * `Zinh`
         */
        B_SCRIPT_INHERITED,
        /**
         * `Zzzz`
         */
        B_SCRIPT_UNKNOWN,
        /**
         * `Arab`
         */
        B_SCRIPT_ARABIC,
        /**
         * `Armn`
         */
        B_SCRIPT_ARMENIAN,
        /**
         * `Beng`
         */
        B_SCRIPT_BENGALI,
        /**
         * `Cyrl`
         */
        B_SCRIPT_CYRILLIC,
        /**
         * `Deva`
         */
        B_SCRIPT_DEVANAGARI,
        /**
         * `Geor`
         */
        B_SCRIPT_GEORGIAN,
        /**
         * `Grek`
         */
        B_SCRIPT_GREEK,
        /**
         * `Gujr`
         */
        B_SCRIPT_GUJARATI,
        /**
         * `Guru`
         */
        B_SCRIPT_GURMUKHI,
        /**
         * `Hang`
         */
        B_SCRIPT_HANGUL,
        /**
         * `Hani`
         */
        B_SCRIPT_HAN,
        /**
         * `Hebr`
         */
        B_SCRIPT_HEBREW,
        /**
         * `Hira`
         */
        B_SCRIPT_HIRAGANA,
        /**
         * `Knda`
         */
        B_SCRIPT_KANNADA,
        /**
         * `Kana`
         */
        B_SCRIPT_KATAKANA,
        /**
         * `Laoo`
         */
        B_SCRIPT_LAO,
        /**
         * `Latn`
         */
        B_SCRIPT_LATIN,
        /**
         * `Mlym`
         */
        B_SCRIPT_MALAYALAM,
        /**
         * `Orya`
         */
        B_SCRIPT_ORIYA,
        /**
         * `Taml`
         */
        B_SCRIPT_TAMIL,
        /**
         * `Telu`
         */
        B_SCRIPT_TELUGU,
        /**
         * `Thai`
         */
        B_SCRIPT_THAI,
        /**
         * `Tibt`
         */
        B_SCRIPT_TIBETAN,
        /**
         * `Bopo`
         */
        B_SCRIPT_BOPOMOFO,
        /**
         * `Brai`
         */
        B_SCRIPT_BRAILLE,
        /**
         * `Cans`
         */
        B_SCRIPT_CANADIAN_SYLLABICS,
        /**
         * `Cher`
         */
        B_SCRIPT_CHEROKEE,
        /**
         * `Ethi`
         */
        B_SCRIPT_ETHIOPIC,
        /**
         * `Khmr`
         */
        B_SCRIPT_KHMER,
        /**
         * `Mong`
         */
        B_SCRIPT_MONGOLIAN,
        /**
         * `Mymr`
         */
        B_SCRIPT_MYANMAR,
        /**
         * `Ogam`
         */
        B_SCRIPT_OGHAM,
        /**
         * `Runr`
         */
        B_SCRIPT_RUNIC,
        /**
         * `Sinh`
         */
        B_SCRIPT_SINHALA,
        /**
         * `Syrc`
         */
        B_SCRIPT_SYRIAC,
        /**
         * `Thaa`
         */
        B_SCRIPT_THAANA,
        /**
         * `Yiii`
         */
        B_SCRIPT_YI,
        /**
         * `Dsrt`
         */
        B_SCRIPT_DESERET,
        /**
         * `Goth`
         */
        B_SCRIPT_GOTHIC,
        /**
         * `Ital`
         */
        B_SCRIPT_OLD_ITALIC,
        /**
         * `Buhd`
         */
        B_SCRIPT_BUHID,
        /**
         * `Hano`
         */
        B_SCRIPT_HANUNOO,
        /**
         * `Tglg`
         */
        B_SCRIPT_TAGALOG,
        /**
         * `Tagb`
         */
        B_SCRIPT_TAGBANWA,
        /**
         * `Cprt`
         */
        B_SCRIPT_CYPRIOT,
        /**
         * `Limb`
         */
        B_SCRIPT_LIMBU,
        /**
         * `Linb`
         */
        B_SCRIPT_LINEAR_B,
        /**
         * `Osma`
         */
        B_SCRIPT_OSMANYA,
        /**
         * `Shaw`
         */
        B_SCRIPT_SHAVIAN,
        /**
         * `Tale`
         */
        B_SCRIPT_TAI_LE,
        /**
         * `Ugar`
         */
        B_SCRIPT_UGARITIC,
        /**
         * `Bugi`
         */
        B_SCRIPT_BUGINESE,
        /**
         * `Copt`
         */
        B_SCRIPT_COPTIC,
        /**
         * `Glag`
         */
        B_SCRIPT_GLAGOLITIC,
        /**
         * `Khar`
         */
        B_SCRIPT_KHAROSHTHI,
        /**
         * `Talu`
         */
        B_SCRIPT_NEW_TAI_LUE,
        /**
         * `Xpeo`
         */
        B_SCRIPT_OLD_PERSIAN,
        /**
         * `Sylo`
         */
        B_SCRIPT_SYLOTI_NAGRI,
        /**
         * `Tfng`
         */
        B_SCRIPT_TIFINAGH,
        /**
         * `Bali`
         */
        B_SCRIPT_BALINESE,
        /**
         * `Xsux`
         */
        B_SCRIPT_CUNEIFORM,
        /**
         * `Nkoo`
         */
        B_SCRIPT_NKO,
        /**
         * `Phag`
         */
        B_SCRIPT_PHAGS_PA,
        /**
         * `Phnx`
         */
        B_SCRIPT_PHOENICIAN,
        /**
         * `Cari`
         */
        B_SCRIPT_CARIAN,
        /**
         * `Cham`
         */
        B_SCRIPT_CHAM,
        /**
         * `Kali`
         */
        B_SCRIPT_KAYAH_LI,
        /**
         * `Lepc`
         */
        B_SCRIPT_LEPCHA,
        /**
         * `Lyci`
         */
        B_SCRIPT_LYCIAN,
        /**
         * `Lydi`
         */
        B_SCRIPT_LYDIAN,
        /**
         * `Olck`
         */
        B_SCRIPT_OL_CHIKI,
        /**
         * `Rjng`
         */
        B_SCRIPT_REJANG,
        /**
         * `Saur`
         */
        B_SCRIPT_SAURASHTRA,
        /**
         * `Sund`
         */
        B_SCRIPT_SUNDANESE,
        /**
         * `Vaii`
         */
        B_SCRIPT_VAI,
        /**
         * `Avst`
         */
        B_SCRIPT_AVESTAN,
        /**
         * `Bamu`
         */
        B_SCRIPT_BAMUM,
        /**
         * `Egyp`
         */
        B_SCRIPT_EGYPTIAN_HIEROGLYPHS,
        /**
         * `Armi`
         */
        B_SCRIPT_IMPERIAL_ARAMAIC,
        /**
         * `Phli`
         */
        B_SCRIPT_INSCRIPTIONAL_PAHLAVI,
        /**
         * `Prti`
         */
        B_SCRIPT_INSCRIPTIONAL_PARTHIAN,
        /**
         * `Java`
         */
        B_SCRIPT_JAVANESE,
        /**
         * `Kthi`
         */
        B_SCRIPT_KAITHI,
        /**
         * `Lisu`
         */
        B_SCRIPT_LISU,
        /**
         * `Mtei`
         */
        B_SCRIPT_MEETEI_MAYEK,
        /**
         * `Sarb`
         */
        B_SCRIPT_OLD_SOUTH_ARABIAN,
        /**
         * `Orkh`
         */
        B_SCRIPT_OLD_TURKIC,
        /**
         * `Samr`
         */
        B_SCRIPT_SAMARITAN,
        /**
         * `Lana`
         */
        B_SCRIPT_TAI_THAM,
        /**
         * `Tavt`
         */
        B_SCRIPT_TAI_VIET,
        /**
         * `Batk`
         */
        B_SCRIPT_BATAK,
        /**
         * `Brah`
         */
        B_SCRIPT_BRAHMI,
        /**
         * `Mand`
         */
        B_SCRIPT_MANDAIC,
        /**
         * `Cakm`
         */
        B_SCRIPT_CHAKMA,
        /**
         * `Merc`
         */
        B_SCRIPT_MEROITIC_CURSIVE,
        /**
         * `Mero`
         */
        B_SCRIPT_MEROITIC_HIEROGLYPHS,
        /**
         * `Plrd`
         */
        B_SCRIPT_MIAO,
        /**
         * `Shrd`
         */
        B_SCRIPT_SHARADA,
        /**
         * `Sora`
         */
        B_SCRIPT_SORA_SOMPENG,
        /**
         * `Takr`
         */
        B_SCRIPT_TAKRI,
        /**
         * `Bass`, Since: 0.9.30
         */
        B_SCRIPT_BASSA_VAH,
        /**
         * `Aghb`, Since: 0.9.30
         */
        B_SCRIPT_CAUCASIAN_ALBANIAN,
        /**
         * `Dupl`, Since: 0.9.30
         */
        B_SCRIPT_DUPLOYAN,
        /**
         * `Elba`, Since: 0.9.30
         */
        B_SCRIPT_ELBASAN,
        /**
         * `Gran`, Since: 0.9.30
         */
        B_SCRIPT_GRANTHA,
        /**
         * `Khoj`, Since: 0.9.30
         */
        B_SCRIPT_KHOJKI,
        /**
         * `Sind`, Since: 0.9.30
         */
        B_SCRIPT_KHUDAWADI,
        /**
         * `Lina`, Since: 0.9.30
         */
        B_SCRIPT_LINEAR_A,
        /**
         * `Mahj`, Since: 0.9.30
         */
        B_SCRIPT_MAHAJANI,
        /**
         * `Mani`, Since: 0.9.30
         */
        B_SCRIPT_MANICHAEAN,
        /**
         * `Mend`, Since: 0.9.30
         */
        B_SCRIPT_MENDE_KIKAKUI,
        /**
         * `Modi`, Since: 0.9.30
         */
        B_SCRIPT_MODI,
        /**
         * `Mroo`, Since: 0.9.30
         */
        B_SCRIPT_MRO,
        /**
         * `Nbat`, Since: 0.9.30
         */
        B_SCRIPT_NABATAEAN,
        /**
         * `Narb`, Since: 0.9.30
         */
        B_SCRIPT_OLD_NORTH_ARABIAN,
        /**
         * `Perm`, Since: 0.9.30
         */
        B_SCRIPT_OLD_PERMIC,
        /**
         * `Hmng`, Since: 0.9.30
         */
        B_SCRIPT_PAHAWH_HMONG,
        /**
         * `Palm`, Since: 0.9.30
         */
        B_SCRIPT_PALMYRENE,
        /**
         * `Pauc`, Since: 0.9.30
         */
        B_SCRIPT_PAU_CIN_HAU,
        /**
         * `Phlp`, Since: 0.9.30
         */
        B_SCRIPT_PSALTER_PAHLAVI,
        /**
         * `Sidd`, Since: 0.9.30
         */
        B_SCRIPT_SIDDHAM,
        /**
         * `Tirh`, Since: 0.9.30
         */
        B_SCRIPT_TIRHUTA,
        /**
         * `Wara`, Since: 0.9.30
         */
        B_SCRIPT_WARANG_CITI,
        /**
         * `Ahom`, Since: 0.9.30
         */
        B_SCRIPT_AHOM,
        /**
         * `Hluw`, Since: 0.9.30
         */
        B_SCRIPT_ANATOLIAN_HIEROGLYPHS,
        /**
         * `Hatr`, Since: 0.9.30
         */
        B_SCRIPT_HATRAN,
        /**
         * `Mult`, Since: 0.9.30
         */
        B_SCRIPT_MULTANI,
        /**
         * `Hung`, Since: 0.9.30
         */
        B_SCRIPT_OLD_HUNGARIAN,
        /**
         * `Sgnw`, Since: 0.9.30
         */
        B_SCRIPT_SIGNWRITING,
        /**
         * `Adlm`, Since: 1.3.0
         */
        B_SCRIPT_ADLAM,
        /**
         * `Bhks`, Since: 1.3.0
         */
        B_SCRIPT_BHAIKSUKI,
        /**
         * `Marc`, Since: 1.3.0
         */
        B_SCRIPT_MARCHEN,
        /**
         * `Osge`, Since: 1.3.0
         */
        B_SCRIPT_OSAGE,
        /**
         * `Tang`, Since: 1.3.0
         */
        B_SCRIPT_TANGUT,
        /**
         * `Newa`, Since: 1.3.0
         */
        B_SCRIPT_NEWA,
        /**
         * `Gonm`, Since: 1.6.0
         */
        B_SCRIPT_MASARAM_GONDI,
        /**
         * `Nshu`, Since: 1.6.0
         */
        B_SCRIPT_NUSHU,
        /**
         * `Soyo`, Since: 1.6.0
         */
        B_SCRIPT_SOYOMBO,
        /**
         * `Zanb`, Since: 1.6.0
         */
        B_SCRIPT_ZANABAZAR_SQUARE,
        /**
         * `Dogr`, Since: 1.8.0
         */
        B_SCRIPT_DOGRA,
        /**
         * `Gong`, Since: 1.8.0
         */
        B_SCRIPT_GUNJALA_GONDI,
        /**
         * `Rohg`, Since: 1.8.0
         */
        B_SCRIPT_HANIFI_ROHINGYA,
        /**
         * `Maka`, Since: 1.8.0
         */
        B_SCRIPT_MAKASAR,
        /**
         * `Medf`, Since: 1.8.0
         */
        B_SCRIPT_MEDEFAIDRIN,
        /**
         * `Sogo`, Since: 1.8.0
         */
        B_SCRIPT_OLD_SOGDIAN,
        /**
         * `Sogd`, Since: 1.8.0
         */
        B_SCRIPT_SOGDIAN,
        /**
         * `Elym`, Since: 2.4.0
         */
        B_SCRIPT_ELYMAIC,
        /**
         * `Nand`, Since: 2.4.0
         */
        B_SCRIPT_NANDINAGARI,
        /**
         * `Hmnp`, Since: 2.4.0
         */
        B_SCRIPT_NYIAKENG_PUACHUE_HMONG,
        /**
         * `Wcho`, Since: 2.4.0
         */
        B_SCRIPT_WANCHO,
        /**
         * `Chrs`, Since: 2.6.7
         */
        B_SCRIPT_CHORASMIAN,
        /**
         * `Diak`, Since: 2.6.7
         */
        B_SCRIPT_DIVES_AKURU,
        /**
         * `Kits`, Since: 2.6.7
         */
        B_SCRIPT_KHITAN_SMALL_SCRIPT,
        /**
         * `Yezi`, Since: 2.6.7
         */
        B_SCRIPT_YEZIDI,
        /**
         * `Cpmn`, Since: 3.0.0
         */
        B_SCRIPT_CYPRO_MINOAN,
        /**
         * `Ougr`, Since: 3.0.0
         */
        B_SCRIPT_OLD_UYGHUR,
        /**
         * `Tnsa`, Since: 3.0.0
         */
        B_SCRIPT_TANGSA,
        /**
         * `Toto`, Since: 3.0.0
         */
        B_SCRIPT_TOTO,
        /**
         * `Vith`, Since: 3.0.0
         */
        B_SCRIPT_VITHKUQI,
        /**
         * `Zmth`, Since: 3.4.0
         */
        B_SCRIPT_MATH,
        /**
         * `Kawi`, Since: 5.2.0
         */
        B_SCRIPT_KAWI,
        /**
         * `Nagm`, Since: 5.2.0
         */
        B_SCRIPT_NAG_MUNDARI,
        /**
         * No script set
         */
        B_SCRIPT_INVALID,
    }
    /**
     * Defined by [OpenType Design-Variation Axis Tag Registry](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg).
     * @bitfield
     */
    enum style_tag_t {
        /**
         * Used to vary between non-italic and italic.
         * A value of 0 can be interpreted as "Roman" (non-italic); a value of 1 can
         * be interpreted as (fully) italic.
         */
        B_STYLE_TAG_ITALIC,
        /**
         * Used to vary design to suit different text sizes.
         * Non-zero. Values can be interpreted as text size, in points.
         */
        B_STYLE_TAG_OPTICAL_SIZE,
        /**
         * Used to vary between upright and slanted text. Values
         * must be greater than -90 and less than +90. Values can be interpreted as
         * the angle, in counter-clockwise degrees, of oblique slant from whatever the
         * designer considers to be upright for that font design. Typical right-leaning
         * Italic fonts have a negative slant angle (typically around -12)
         */
        B_STYLE_TAG_SLANT_ANGLE,
        /**
         * same as `HB_STYLE_TAG_SLANT_ANGLE` expression as ratio.
         * Typical right-leaning Italic fonts have a positive slant ratio (typically around 0.2)
         */
        B_STYLE_TAG_SLANT_RATIO,
        /**
         * Used to vary width of text from narrower to wider.
         * Non-zero. Values can be interpreted as a percentage of whatever the font
         * designer considers “normal width” for that font design.
         */
        B_STYLE_TAG_WIDTH,
        /**
         * Used to vary stroke thicknesses or other design details
         * to give variation from lighter to blacker. Values can be interpreted in direct
         * comparison to values for usWeightClass in the OS/2 table,
         * or the CSS font-weight property.
         */
        B_STYLE_TAG_WEIGHT,
    }
    /**
     * Used when getting or setting AAT feature selectors. Indicates that
     * there is no selector index corresponding to the selector of interest.
     */
    const AAT_LAYOUT_NO_SELECTOR_INDEX: number;
    /**
     * The default code point for replacing invalid characters in a given encoding.
     * Set to U+FFFD REPLACEMENT CHARACTER.
     */
    const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number;
    /**
     * Unused #hb_codepoint_t value.
     */
    const CODEPOINT_INVALID: codepoint_t;
    /**
     * Special setting for #hb_feature_t.start to apply the feature from the start
     * of the buffer.
     */
    const FEATURE_GLOBAL_START: number;
    /**
     * Constant signifying that a font does not have any
     * named-instance index set.  This is the default of
     * a font.
     */
    const FONT_NO_VAR_NAMED_INSTANCE: number;
    /**
     * An unset #hb_language_t.
     */
    const LANGUAGE_INVALID: language_t;
    /**
     * Special value for language index indicating default or unsupported language.
     */
    const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number;
    /**
     * Special value for feature index indicating unsupported feature.
     */
    const OT_LAYOUT_NO_FEATURE_INDEX: number;
    /**
     * Special value for script index indicating unsupported script.
     */
    const OT_LAYOUT_NO_SCRIPT_INDEX: number;
    /**
     * Special value for variations index indicating unsupported variation.
     */
    const OT_LAYOUT_NO_VARIATIONS_INDEX: number;
    /**
     * Maximum number of OpenType tags that can correspond to a give #hb_language_t.
     */
    const OT_MAX_TAGS_PER_LANGUAGE: number;
    /**
     * Maximum number of OpenType tags that can correspond to a give #hb_script_t.
     */
    const OT_MAX_TAGS_PER_SCRIPT: number;
    /**
     * Do not use.
     */
    const OT_VAR_NO_AXIS_INDEX: number;
    /**
     * [Tibetan]
     */
    const UNICODE_COMBINING_CLASS_CCC133: number;
    /**
     * Maximum valid Unicode code point.
     */
    const UNICODE_MAX: number;
    /**
     * See Unicode 6.1 for details on the maximum decomposition length.
     */
    const UNICODE_MAX_DECOMPOSITION_LEN: number;
    const VERSION_MAJOR: number;
    const VERSION_MICRO: number;
    const VERSION_MINOR: number;
    const VERSION_STRING: string | null;
    /**
     * Fetches the name identifier of the specified feature type in the face's `name` table.
     * @param face #hb_face_t to work upon
     * @param feature_type The #hb_aat_layout_feature_type_t of the requested feature type
     * @returns Name identifier of the requested feature type
     */
    function aat_layout_feature_type_get_name_id(
        face: face_t,
        feature_type: aat_layout_feature_type_t
    ): ot_name_id_t;
    /**
     * Fetches a list of the selectors available for the specified feature in the given face.
     *
     * If upon return, `default_index` is set to #HB_AAT_LAYOUT_NO_SELECTOR_INDEX, then
     * the feature type is non-exclusive.  Otherwise, `default_index` is the index of
     * the selector that is selected by default.
     * @param face #hb_face_t to work upon
     * @param feature_type The #hb_aat_layout_feature_type_t of the requested feature type
     * @param start_offset offset of the first feature type to retrieve
     * @returns Number of all available feature selectors
     */
    function aat_layout_feature_type_get_selector_infos(
        face: face_t,
        feature_type: aat_layout_feature_type_t,
        start_offset: number
    ): [
        /* returnType */ number,
        /* selectors */ aat_layout_feature_selector_info_t[],
        /* default_index */ number
    ];
    /**
     * Fetches a list of the AAT feature types included in the specified face.
     * @param face #hb_face_t to work upon
     * @param start_offset offset of the first feature type to retrieve
     * @returns Number of all available feature types.
     */
    function aat_layout_get_feature_types(
        face: face_t,
        start_offset: number
    ): [/* returnType */ number, /* features */ aat_layout_feature_type_t[]];
    /**
     * Tests whether the specified face includes any positioning information
     * in the `kerx` table.
     *
     * <note>Note: does not examine the `GPOS` table.</note>
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function aat_layout_has_positioning(face: face_t): bool_t;
    /**
     * Tests whether the specified face includes any substitutions in the
     * `morx` or `mort` tables.
     *
     * <note>Note: does not examine the `GSUB` table.</note>
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function aat_layout_has_substitution(face: face_t): bool_t;
    /**
     * Tests whether the specified face includes any tracking information
     * in the `trak` table.
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function aat_layout_has_tracking(face: face_t): bool_t;
    /**
     * Makes a writable copy of `blob`.
     * @param blob A blob.
     * @returns The new blob, or nullptr if allocation failed
     */
    function blob_copy_writable_or_fail(blob: blob_t): blob_t;
    /**
     * Creates a new blob containing the data from the
     * specified binary font file.
     * @param file_name A font filename
     * @returns An #hb_blob_t pointer with the content of the file, or hb_blob_get_empty() if failed.
     */
    function blob_create_from_file(file_name: string | null): blob_t;
    /**
     * Creates a new blob containing the data from the
     * specified binary font file.
     * @param file_name A font filename
     * @returns An #hb_blob_t pointer with the content of the file, or `NULL` if failed.
     */
    function blob_create_from_file_or_fail(file_name: string | null): blob_t;
    /**
     * Returns a blob that represents a range of bytes in `parent`.  The new
     * blob is always created with #HB_MEMORY_MODE_READONLY, meaning that it
     * will never modify data in the parent blob.  The parent data is not
     * expected to be modified, and will result in undefined behavior if it
     * is.
     *
     * Makes `parent` immutable.
     * @param parent Parent blob.
     * @param offset Start offset of sub-blob within `parent,` in bytes.
     * @param length Length of sub-blob.
     * @returns New blob, or the empty blob if something failed or if @length is zero or @offset is beyond the end of @parent's data.  Destroy with hb_blob_destroy().
     */
    function blob_create_sub_blob(
        parent: blob_t,
        offset: number,
        length: number
    ): blob_t;
    /**
     * Fetches the data from a blob.
     * @param blob a blob.
     * @returns the byte data of @blob.
     */
    function blob_get_data(blob: blob_t): string[] | null;
    /**
     * Tries to make blob data writable (possibly copying it) and
     * return pointer to data.
     *
     * Fails if blob has been made immutable, or if memory allocation
     * fails.
     * @param blob a blob.
     * @returns Writable blob data, or `NULL` if failed.
     */
    function blob_get_data_writable(blob: blob_t): string[];
    /**
     * Returns the singleton empty blob.
     *
     * See TODO:link object types for more information.
     * @returns The empty blob.
     */
    function blob_get_empty(): blob_t;
    /**
     * Fetches the length of a blob's data.
     * @param blob a blob.
     * @returns the length of @blob data in bytes.
     */
    function blob_get_length(blob: blob_t): number;
    /**
     * Tests whether a blob is immutable.
     * @param blob a blob.
     * @returns `true` if @blob is immutable, `false` otherwise
     */
    function blob_is_immutable(blob: blob_t): bool_t;
    /**
     * Makes a blob immutable.
     * @param blob a blob
     */
    function blob_make_immutable(blob: blob_t): void;
    /**
     * Appends a character with the Unicode value of `codepoint` to `buffer,` and
     * gives it the initial cluster value of `cluster`. Clusters can be any thing
     * the client wants, they are usually used to refer to the index of the
     * character in the input text stream and are output in
     * #hb_glyph_info_t.cluster field.
     *
     * This function does not check the validity of `codepoint,` it is up to the
     * caller to ensure it is a valid Unicode code point.
     * @param buffer An #hb_buffer_t
     * @param codepoint A Unicode code point.
     * @param cluster The cluster value of `codepoint`.
     */
    function buffer_add(
        buffer: buffer_t,
        codepoint: codepoint_t,
        cluster: number
    ): void;
    /**
     * Appends characters from `text` array to `buffer`. The `item_offset` is the
     * position of the first character from `text` that will be appended, and
     * `item_length` is the number of character. When shaping part of a larger text
     * (e.g. a run of text from a paragraph), instead of passing just the substring
     * corresponding to the run, it is preferable to pass the whole
     * paragraph and specify the run start and length as `item_offset` and
     * `item_length,` respectively, to give HarfBuzz the full context to be able,
     * for example, to do cross-run Arabic shaping or properly handle combining
     * marks at stat of run.
     *
     * This function does not check the validity of `text,` it is up to the caller
     * to ensure it contains a valid Unicode scalar values.  In contrast,
     * hb_buffer_add_utf32() can be used that takes similar input but performs
     * sanity-check on the input.
     * @param buffer a #hb_buffer_t to append characters to.
     * @param text an array of Unicode code points to append.
     * @param item_offset the offset of the first code point to add to the `buffer`.
     * @param item_length the number of code points to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated).
     */
    function buffer_add_codepoints(
        buffer: buffer_t,
        text: codepoint_t[],
        item_offset: number,
        item_length: number
    ): void;
    /**
     * Similar to hb_buffer_add_codepoints(), but allows only access to first 256
     * Unicode code points that can fit in 8-bit strings.
     *
     * <note>Has nothing to do with non-Unicode Latin-1 encoding.</note>
     * @param buffer An #hb_buffer_t
     * @param text an array of UTF-8               characters to append
     * @param item_offset the offset of the first character to add to the `buffer`
     * @param item_length the number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated)
     */
    function buffer_add_latin1(
        buffer: buffer_t,
        text: Uint8Array,
        item_offset: number,
        item_length: number
    ): void;
    /**
     * See hb_buffer_add_codepoints().
     *
     * Replaces invalid UTF-16 characters with the `buffer` replacement code point,
     * see hb_buffer_set_replacement_codepoint().
     * @param buffer An #hb_buffer_t
     * @param text An array of UTF-16 characters to append
     * @param item_offset The offset of the first character to add to the `buffer`
     * @param item_length The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated)
     */
    function buffer_add_utf16(
        buffer: buffer_t,
        text: number[],
        item_offset: number,
        item_length: number
    ): void;
    /**
     * See hb_buffer_add_codepoints().
     *
     * Replaces invalid UTF-32 characters with the `buffer` replacement code point,
     * see hb_buffer_set_replacement_codepoint().
     * @param buffer An #hb_buffer_t
     * @param text An array of UTF-32 characters to append
     * @param item_offset The offset of the first character to add to the `buffer`
     * @param item_length The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated)
     */
    function buffer_add_utf32(
        buffer: buffer_t,
        text: number[],
        item_offset: number,
        item_length: number
    ): void;
    /**
     * See hb_buffer_add_codepoints().
     *
     * Replaces invalid UTF-8 characters with the `buffer` replacement code point,
     * see hb_buffer_set_replacement_codepoint().
     * @param buffer An #hb_buffer_t
     * @param text An array of UTF-8               characters to append.
     * @param item_offset The offset of the first character to add to the `buffer`.
     * @param item_length The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated).
     */
    function buffer_add_utf8(
        buffer: buffer_t,
        text: Uint8Array,
        item_offset: number,
        item_length: number
    ): void;
    /**
     * Check if allocating memory for the buffer succeeded.
     * @param buffer An #hb_buffer_t
     * @returns `true` if @buffer memory allocation succeeded, `false` otherwise.
     */
    function buffer_allocation_successful(buffer: buffer_t): bool_t;
    /**
     * Append (part of) contents of another buffer to this buffer.
     * @param buffer An #hb_buffer_t
     * @param source source #hb_buffer_t
     * @param start start index into source buffer to copy.  Use 0 to copy from start of buffer.
     * @param end end index into source buffer to copy.  Use `HB_FEATURE_GLOBAL_END` to copy to end of buffer.
     */
    function buffer_append(
        buffer: buffer_t,
        source: buffer_t,
        start: number,
        end: number
    ): void;
    /**
     * Similar to hb_buffer_reset(), but does not clear the Unicode functions and
     * the replacement code point.
     * @param buffer An #hb_buffer_t
     */
    function buffer_clear_contents(buffer: buffer_t): void;
    /**
     * Creates a new #hb_buffer_t with all properties to defaults.
     * @returns  A newly allocated #hb_buffer_t with a reference count of 1. The initial reference count should be released with hb_buffer_destroy() when you are done using the #hb_buffer_t. This function never returns `NULL`. If memory cannot be allocated, a special #hb_buffer_t object will be returned on which hb_buffer_allocation_successful() returns `false`.
     */
    function buffer_create(): buffer_t;
    /**
     * Creates a new #hb_buffer_t, similar to hb_buffer_create(). The only
     * difference is that the buffer is configured similarly to `src`.
     * @param src An #hb_buffer_t
     * @returns  A newly allocated #hb_buffer_t, similar to hb_buffer_create().
     */
    function buffer_create_similar(src: buffer_t): buffer_t;
    /**
     * Deserializes glyphs `buffer` from textual representation in the format
     * produced by hb_buffer_serialize_glyphs().
     * @param buffer an #hb_buffer_t buffer.
     * @param buf string to deserialize
     * @param font font for getting glyph IDs
     * @param format the #hb_buffer_serialize_format_t of the input `buf`
     * @returns `true` if parse was successful, `false` if an error occurred.
     */
    function buffer_deserialize_glyphs(
        buffer: buffer_t,
        buf: string[],
        font: font_t | null,
        format: buffer_serialize_format_t
    ): [/* returnType */ bool_t, /* end_ptr */ string | null];
    /**
     * Deserializes Unicode `buffer` from textual representation in the format
     * produced by hb_buffer_serialize_unicode().
     * @param buffer an #hb_buffer_t buffer.
     * @param buf string to deserialize
     * @param format the #hb_buffer_serialize_format_t of the input `buf`
     * @returns `true` if parse was successful, `false` if an error occurred.
     */
    function buffer_deserialize_unicode(
        buffer: buffer_t,
        buf: string[],
        format: buffer_serialize_format_t
    ): [/* returnType */ bool_t, /* end_ptr */ string | null];
    /**
     * If dottedcircle_glyph is (hb_codepoint_t) -1 then #HB_BUFFER_DIFF_FLAG_DOTTED_CIRCLE_PRESENT
     * and #HB_BUFFER_DIFF_FLAG_NOTDEF_PRESENT are never returned.  This should be used by most
     * callers if just comparing two buffers is needed.
     * @param buffer a buffer.
     * @param reference other buffer to compare to.
     * @param dottedcircle_glyph glyph id of U+25CC DOTTED CIRCLE, or (hb_codepoint_t) -1.
     * @param position_fuzz allowed absolute difference in position values.
     */
    function buffer_diff(
        buffer: buffer_t,
        reference: buffer_t,
        dottedcircle_glyph: codepoint_t,
        position_fuzz: number
    ): buffer_diff_flags_t;
    /**
     * Fetches the cluster level of a buffer. The #hb_buffer_cluster_level_t
     * dictates one aspect of how HarfBuzz will treat non-base characters
     * during shaping.
     * @param buffer An #hb_buffer_t
     * @returns The cluster level of @buffer
     */
    function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t;
    /**
     * Fetches the type of `buffer` contents. Buffers are either empty, contain
     * characters (before shaping), or contain glyphs (the result of shaping).
     * @param buffer An #hb_buffer_t
     * @returns The type of @buffer contents
     */
    function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t;
    /**
     * See hb_buffer_set_direction()
     * @param buffer An #hb_buffer_t
     * @returns The direction of the @buffer.
     */
    function buffer_get_direction(buffer: buffer_t): direction_t;
    /**
     * Fetches an empty #hb_buffer_t.
     * @returns The empty buffer
     */
    function buffer_get_empty(): buffer_t;
    /**
     * Fetches the #hb_buffer_flags_t of `buffer`.
     * @param buffer An #hb_buffer_t
     * @returns The @buffer flags
     */
    function buffer_get_flags(buffer: buffer_t): buffer_flags_t;
    /**
     * Returns `buffer` glyph information array.  Returned pointer
     * is valid as long as `buffer` contents are not modified.
     * @param buffer An #hb_buffer_t
     * @returns  The @buffer glyph information array. The value valid as long as buffer has not been modified.
     */
    function buffer_get_glyph_infos(buffer: buffer_t): glyph_info_t[];
    /**
     * Returns `buffer` glyph position array.  Returned pointer
     * is valid as long as `buffer` contents are not modified.
     *
     * If buffer did not have positions before, the positions will be
     * initialized to zeros, unless this function is called from
     * within a buffer message callback (see hb_buffer_set_message_func()),
     * in which case `NULL` is returned.
     * @param buffer An #hb_buffer_t
     * @returns  The @buffer glyph position array. The value valid as long as buffer has not been modified.
     */
    function buffer_get_glyph_positions(buffer: buffer_t): glyph_position_t[];
    /**
     * See hb_buffer_set_invisible_glyph().
     * @param buffer An #hb_buffer_t
     * @returns The @buffer invisible #hb_codepoint_t
     */
    function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t;
    /**
     * See hb_buffer_set_language().
     * @param buffer An #hb_buffer_t
     * @returns  The #hb_language_t of the buffer. Must not be freed by the caller.
     */
    function buffer_get_language(buffer: buffer_t): language_t;
    /**
     * Returns the number of items in the buffer.
     * @param buffer An #hb_buffer_t
     * @returns The @buffer length. The value valid as long as buffer has not been modified.
     */
    function buffer_get_length(buffer: buffer_t): number;
    /**
     * See hb_buffer_set_not_found_glyph().
     * @param buffer An #hb_buffer_t
     * @returns The @buffer not-found #hb_codepoint_t
     */
    function buffer_get_not_found_glyph(buffer: buffer_t): codepoint_t;
    /**
     * Fetches the #hb_codepoint_t that replaces invalid entries for a given encoding
     * when adding text to `buffer`.
     * @param buffer An #hb_buffer_t
     * @returns The @buffer replacement #hb_codepoint_t
     */
    function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t;
    /**
     * Fetches the script of `buffer`.
     * @param buffer An #hb_buffer_t
     * @returns The #hb_script_t of the @buffer
     */
    function buffer_get_script(buffer: buffer_t): script_t;
    /**
     * Sets `props` to the #hb_segment_properties_t of `buffer`.
     * @param buffer An #hb_buffer_t
     */
    function buffer_get_segment_properties(
        buffer: buffer_t
    ): /* props */ segment_properties_t;
    /**
     * Fetches the Unicode-functions structure of a buffer.
     * @param buffer An #hb_buffer_t
     * @returns The Unicode-functions structure
     */
    function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t;
    /**
     * Sets unset buffer segment properties based on buffer Unicode
     * contents.  If buffer is not empty, it must have content type
     * #HB_BUFFER_CONTENT_TYPE_UNICODE.
     *
     * If buffer script is not set (ie. is #HB_SCRIPT_INVALID), it
     * will be set to the Unicode script of the first character in
     * the buffer that has a script other than #HB_SCRIPT_COMMON,
     * #HB_SCRIPT_INHERITED, and #HB_SCRIPT_UNKNOWN.
     *
     * Next, if buffer direction is not set (ie. is #HB_DIRECTION_INVALID),
     * it will be set to the natural horizontal direction of the
     * buffer script as returned by hb_script_get_horizontal_direction().
     * If hb_script_get_horizontal_direction() returns #HB_DIRECTION_INVALID,
     * then #HB_DIRECTION_LTR is used.
     *
     * Finally, if buffer language is not set (ie. is #HB_LANGUAGE_INVALID),
     * it will be set to the process's default language as returned by
     * hb_language_get_default().  This may change in the future by
     * taking buffer script into consideration when choosing a language.
     * Note that hb_language_get_default() is NOT threadsafe the first time
     * it is called.  See documentation for that function for details.
     * @param buffer An #hb_buffer_t
     */
    function buffer_guess_segment_properties(buffer: buffer_t): void;
    /**
     * Returns whether `buffer` has glyph position data.
     * A buffer gains position data when hb_buffer_get_glyph_positions() is called on it,
     * and cleared of position data when hb_buffer_clear_contents() is called.
     * @param buffer an #hb_buffer_t.
     * @returns `true` if the @buffer has position array, `false` otherwise.
     */
    function buffer_has_positions(buffer: buffer_t): bool_t;
    /**
     * Reorders a glyph buffer to have canonical in-cluster glyph order / position.
     * The resulting clusters should behave identical to pre-reordering clusters.
     *
     * <note>This has nothing to do with Unicode normalization.</note>
     * @param buffer An #hb_buffer_t
     */
    function buffer_normalize_glyphs(buffer: buffer_t): void;
    /**
     * Pre allocates memory for `buffer` to fit at least `size` number of items.
     * @param buffer An #hb_buffer_t
     * @param size Number of items to pre allocate.
     * @returns `true` if @buffer memory allocation succeeded, `false` otherwise
     */
    function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t;
    /**
     * Resets the buffer to its initial status, as if it was just newly created
     * with hb_buffer_create().
     * @param buffer An #hb_buffer_t
     */
    function buffer_reset(buffer: buffer_t): void;
    /**
     * Reverses buffer contents.
     * @param buffer An #hb_buffer_t
     */
    function buffer_reverse(buffer: buffer_t): void;
    /**
     * Reverses buffer clusters.  That is, the buffer contents are
     * reversed, then each cluster (consecutive items having the
     * same cluster number) are reversed again.
     * @param buffer An #hb_buffer_t
     */
    function buffer_reverse_clusters(buffer: buffer_t): void;
    /**
     * Reverses buffer contents between `start` and `end`.
     * @param buffer An #hb_buffer_t
     * @param start start index
     * @param end end index
     */
    function buffer_reverse_range(
        buffer: buffer_t,
        start: number,
        end: number
    ): void;
    /**
     * Serializes `buffer` into a textual representation of its content, whether
     * Unicode codepoints or glyph identifiers and positioning information. This is
     * useful for showing the contents of the buffer, for example during debugging.
     * See the documentation of hb_buffer_serialize_unicode() and
     * hb_buffer_serialize_glyphs() for a description of the output format.
     * @param buffer an #hb_buffer_t buffer.
     * @param start the first item in `buffer` to serialize.
     * @param end the last item in `buffer` to serialize.
     * @param font the #hb_font_t used to shape this buffer, needed to        read glyph names and extents. If `NULL`, an empty font will be used.
     * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
     * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
     * @returns The number of serialized items.
     */
    function buffer_serialize(
        buffer: buffer_t,
        start: number,
        end: number,
        font: font_t | null,
        format: buffer_serialize_format_t,
        flags: buffer_serialize_flags_t
    ): [
        /* returnType */ number,
        /* buf */ Uint8Array,
        /* buf_consumed */ number
    ];
    /**
     * Parses a string into an #hb_buffer_serialize_format_t. Does not check if
     * `str` is a valid buffer serialization format, use
     * hb_buffer_serialize_list_formats() to get the list of supported formats.
     * @param str a string to parse
     * @returns The parsed #hb_buffer_serialize_format_t.
     */
    function buffer_serialize_format_from_string(
        str: Uint8Array
    ): buffer_serialize_format_t;
    /**
     * Converts `format` to the string corresponding it, or `NULL` if it is not a valid
     * #hb_buffer_serialize_format_t.
     * @param format an #hb_buffer_serialize_format_t to convert.
     * @returns  A `NULL` terminated string corresponding to @format. Should not be freed.
     */
    function buffer_serialize_format_to_string(
        format: buffer_serialize_format_t
    ): string | null;
    /**
     * Serializes `buffer` into a textual representation of its glyph content,
     * useful for showing the contents of the buffer, for example during debugging.
     * There are currently two supported serialization formats:
     *
     * ## text
     * A human-readable, plain text format.
     * The serialized glyphs will look something like:
     *
     * ```
     * [uni0651=0`5`18,0+0|uni0628=0+1897]
     * ```
     *
     * - The serialized glyphs are delimited with `[` and `]`.
     * - Glyphs are separated with `|`
     * - Each glyph starts with glyph name, or glyph index if
     *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set. Then,
     *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, `=` then #hb_glyph_info_t.cluster.
     *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set, the #hb_glyph_position_t in the format:
     *     - If both #hb_glyph_position_t.x_offset and #hb_glyph_position_t.y_offset are not 0, ``x_offset,`y_offset`. Then,
     *     - `+x_advance`, then `,y_advance` if #hb_glyph_position_t.y_advance is not 0. Then,
     *   - If #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set, the #hb_glyph_extents_t in the format `<x_bearing,y_bearing,width,height>`
     *
     * ## json
     * A machine-readable, structured format.
     * The serialized glyphs will look something like:
     *
     * ```
     * [{"g":"uni0651","cl":0,"dx":518,"dy":0,"ax":0,"ay":0},
     * {"g":"uni0628","cl":0,"dx":0,"dy":0,"ax":1897,"ay":0}]
     * ```
     *
     * Each glyph is a JSON object, with the following properties:
     * - `g`: the glyph name or glyph index if
     *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set.
     * - `cl`: #hb_glyph_info_t.cluster if
     *   #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set.
     * - `dx`,`dy`,`ax`,`ay`: #hb_glyph_position_t.x_offset, #hb_glyph_position_t.y_offset,
     *    #hb_glyph_position_t.x_advance and #hb_glyph_position_t.y_advance
     *    respectively, if #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set.
     * - `xb`,`yb`,`w`,`h`: #hb_glyph_extents_t.x_bearing, #hb_glyph_extents_t.y_bearing,
     *    #hb_glyph_extents_t.width and #hb_glyph_extents_t.height respectively if
     *    #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set.
     * @param buffer an #hb_buffer_t buffer.
     * @param start the first item in `buffer` to serialize.
     * @param end the last item in `buffer` to serialize.
     * @param font the #hb_font_t used to shape this buffer, needed to        read glyph names and extents. If `NULL`, an empty font will be used.
     * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
     * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
     * @returns The number of serialized items.
     */
    function buffer_serialize_glyphs(
        buffer: buffer_t,
        start: number,
        end: number,
        font: font_t | null,
        format: buffer_serialize_format_t,
        flags: buffer_serialize_flags_t
    ): [
        /* returnType */ number,
        /* buf */ Uint8Array,
        /* buf_consumed */ number
    ];
    /**
     * Returns a list of supported buffer serialization formats.
     * @returns  A string array of buffer serialization formats. Should not be freed.
     */
    function buffer_serialize_list_formats(): string[];
    /**
     * Serializes `buffer` into a textual representation of its content,
     * when the buffer contains Unicode codepoints (i.e., before shaping). This is
     * useful for showing the contents of the buffer, for example during debugging.
     * There are currently two supported serialization formats:
     *
     * ## text
     * A human-readable, plain text format.
     * The serialized codepoints will look something like:
     *
     * ```
     *  <U+0651=0|U+0628=1>
     * ```
     *
     * - Glyphs are separated with `|`
     * - Unicode codepoints are expressed as zero-padded four (or more)
     *   digit hexadecimal numbers preceded by `U+`
     * - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, the cluster
     *   will be indicated with a `=` then #hb_glyph_info_t.cluster.
     *
     * ## json
     * A machine-readable, structured format.
     * The serialized codepoints will be a list of objects with the following
     * properties:
     * - `u`: the Unicode codepoint as a decimal integer
     * - `cl`: #hb_glyph_info_t.cluster if
     *   #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set.
     *
     * For example:
     *
     * ```
     * [{u:1617,cl:0},{u:1576,cl:1}]
     * ```
     * @param buffer an #hb_buffer_t buffer.
     * @param start the first item in `buffer` to serialize.
     * @param end the last item in `buffer` to serialize.
     * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
     * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
     * @returns The number of serialized items.
     */
    function buffer_serialize_unicode(
        buffer: buffer_t,
        start: number,
        end: number,
        format: buffer_serialize_format_t,
        flags: buffer_serialize_flags_t
    ): [
        /* returnType */ number,
        /* buf */ Uint8Array,
        /* buf_consumed */ number
    ];
    /**
     * Sets the cluster level of a buffer. The #hb_buffer_cluster_level_t
     * dictates one aspect of how HarfBuzz will treat non-base characters
     * during shaping.
     * @param buffer An #hb_buffer_t
     * @param cluster_level The cluster level to set on the buffer
     */
    function buffer_set_cluster_level(
        buffer: buffer_t,
        cluster_level: buffer_cluster_level_t
    ): void;
    /**
     * Sets the type of `buffer` contents. Buffers are either empty, contain
     * characters (before shaping), or contain glyphs (the result of shaping).
     *
     * You rarely need to call this function, since a number of other
     * functions transition the content type for you. Namely:
     *
     * - A newly created buffer starts with content type
     *   %HB_BUFFER_CONTENT_TYPE_INVALID. Calling hb_buffer_reset(),
     *   hb_buffer_clear_contents(), as well as calling hb_buffer_set_length()
     *   with an argument of zero all set the buffer content type to invalid
     *   as well.
     *
     * - Calling hb_buffer_add_utf8(), hb_buffer_add_utf16(),
     *   hb_buffer_add_utf32(), hb_buffer_add_codepoints() and
     *   hb_buffer_add_latin1() expect that buffer is either empty and
     *   have a content type of invalid, or that buffer content type is
     *   %HB_BUFFER_CONTENT_TYPE_UNICODE, and they also set the content
     *   type to Unicode if they added anything to an empty buffer.
     *
     * - Finally hb_shape() and hb_shape_full() expect that the buffer
     *   is either empty and have content type of invalid, or that buffer
     *   content type is %HB_BUFFER_CONTENT_TYPE_UNICODE, and upon
     *   success they set the buffer content type to
     *   %HB_BUFFER_CONTENT_TYPE_GLYPHS.
     *
     * The above transitions are designed such that one can use a buffer
     * in a loop of "reset : add-text : shape" without needing to ever
     * modify the content type manually.
     * @param buffer An #hb_buffer_t
     * @param content_type The type of buffer contents to set
     */
    function buffer_set_content_type(
        buffer: buffer_t,
        content_type: buffer_content_type_t
    ): void;
    /**
     * Set the text flow direction of the buffer. No shaping can happen without
     * setting `buffer` direction, and it controls the visual direction for the
     * output glyphs; for RTL direction the glyphs will be reversed. Many layout
     * features depend on the proper setting of the direction, for example,
     * reversing RTL text before shaping, then shaping with LTR direction is not
     * the same as keeping the text in logical order and shaping with RTL
     * direction.
     * @param buffer An #hb_buffer_t
     * @param direction the #hb_direction_t of the `buffer`
     */
    function buffer_set_direction(
        buffer: buffer_t,
        direction: direction_t
    ): void;
    /**
     * Sets `buffer` flags to `flags`. See #hb_buffer_flags_t.
     * @param buffer An #hb_buffer_t
     * @param flags The buffer flags to set
     */
    function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void;
    /**
     * Sets the #hb_codepoint_t that replaces invisible characters in
     * the shaping result.  If set to zero (default), the glyph for the
     * U+0020 SPACE character is used.  Otherwise, this value is used
     * verbatim.
     * @param buffer An #hb_buffer_t
     * @param invisible the invisible #hb_codepoint_t
     */
    function buffer_set_invisible_glyph(
        buffer: buffer_t,
        invisible: codepoint_t
    ): void;
    /**
     * Sets the language of `buffer` to `language`.
     *
     * Languages are crucial for selecting which OpenType feature to apply to the
     * buffer which can result in applying language-specific behaviour. Languages
     * are orthogonal to the scripts, and though they are related, they are
     * different concepts and should not be confused with each other.
     *
     * Use hb_language_from_string() to convert from BCP 47 language tags to
     * #hb_language_t.
     * @param buffer An #hb_buffer_t
     * @param language An hb_language_t to set
     */
    function buffer_set_language(buffer: buffer_t, language: language_t): void;
    /**
     * Similar to hb_buffer_pre_allocate(), but clears any new items added at the
     * end.
     * @param buffer An #hb_buffer_t
     * @param length The new length of `buffer`
     * @returns `true` if @buffer memory allocation succeeded, `false` otherwise.
     */
    function buffer_set_length(buffer: buffer_t, length: number): bool_t;
    /**
     * Sets the implementation function for #hb_buffer_message_func_t.
     * @param buffer An #hb_buffer_t
     * @param func Callback function
     */
    function buffer_set_message_func(
        buffer: buffer_t,
        func: buffer_message_func_t
    ): void;
    /**
     * Sets the #hb_codepoint_t that replaces characters not found in
     * the font during shaping.
     *
     * The not-found glyph defaults to zero, sometimes known as the
     * ".notdef" glyph.  This API allows for differentiating the two.
     * @param buffer An #hb_buffer_t
     * @param not_found the not-found #hb_codepoint_t
     */
    function buffer_set_not_found_glyph(
        buffer: buffer_t,
        not_found: codepoint_t
    ): void;
    /**
     * Sets the #hb_codepoint_t that replaces invalid entries for a given encoding
     * when adding text to `buffer`.
     *
     * Default is #HB_BUFFER_REPLACEMENT_CODEPOINT_DEFAULT.
     * @param buffer An #hb_buffer_t
     * @param replacement the replacement #hb_codepoint_t
     */
    function buffer_set_replacement_codepoint(
        buffer: buffer_t,
        replacement: codepoint_t
    ): void;
    /**
     * Sets the script of `buffer` to `script`.
     *
     * Script is crucial for choosing the proper shaping behaviour for scripts that
     * require it (e.g. Arabic) and the which OpenType features defined in the font
     * to be applied.
     *
     * You can pass one of the predefined #hb_script_t values, or use
     * hb_script_from_string() or hb_script_from_iso15924_tag() to get the
     * corresponding script from an ISO 15924 script tag.
     * @param buffer An #hb_buffer_t
     * @param script An #hb_script_t to set.
     */
    function buffer_set_script(buffer: buffer_t, script: script_t): void;
    /**
     * Sets the segment properties of the buffer, a shortcut for calling
     * hb_buffer_set_direction(), hb_buffer_set_script() and
     * hb_buffer_set_language() individually.
     * @param buffer An #hb_buffer_t
     * @param props An #hb_segment_properties_t to use
     */
    function buffer_set_segment_properties(
        buffer: buffer_t,
        props: segment_properties_t
    ): void;
    /**
     * Sets the Unicode-functions structure of a buffer to
     * `unicode_funcs`.
     * @param buffer An #hb_buffer_t
     * @param unicode_funcs The Unicode-functions structure
     */
    function buffer_set_unicode_funcs(
        buffer: buffer_t,
        unicode_funcs: unicode_funcs_t
    ): void;
    /**
     * Fetches the alpha channel of the given `color`.
     * @param color an #hb_color_t we are interested in its channels.
     * @returns Alpha channel value
     */
    function color_get_alpha(color: color_t): number;
    /**
     * Fetches the blue channel of the given `color`.
     * @param color an #hb_color_t we are interested in its channels.
     * @returns Blue channel value
     */
    function color_get_blue(color: color_t): number;
    /**
     * Fetches the green channel of the given `color`.
     * @param color an #hb_color_t we are interested in its channels.
     * @returns Green channel value
     */
    function color_get_green(color: color_t): number;
    /**
     * Fetches the red channel of the given `color`.
     * @param color an #hb_color_t we are interested in its channels.
     * @returns Red channel value
     */
    function color_get_red(color: color_t): number;
    /**
     * Fetches a list of color stops from the given color line object.
     *
     * Note that due to variations being applied, the returned color stops
     * may be out of order. It is the callers responsibility to ensure that
     * color stops are sorted by their offset before they are used.
     * @param color_line a #hb_color_line_t object
     * @param start the index of the first color stop to return
     * @returns the total number of color stops in @color_line
     */
    function color_line_get_color_stops(
        color_line: color_line_t,
        start: number
    ): [/* returnType */ number, /* color_stops */ color_stop_t[]];
    /**
     * Fetches the extend mode of the color line object.
     * @param color_line a #hb_color_line_t object
     * @returns the extend mode of @color_line
     */
    function color_line_get_extend(color_line: color_line_t): paint_extend_t;
    /**
     * Converts a string to an #hb_direction_t.
     *
     * Matching is loose and applies only to the first letter. For
     * examples, "LTR" and "left-to-right" will both return #HB_DIRECTION_LTR.
     *
     * Unmatched strings will return #HB_DIRECTION_INVALID.
     * @param str String to convert
     * @returns The #hb_direction_t matching @str
     */
    function direction_from_string(str: Uint8Array): direction_t;
    /**
     * Converts an #hb_direction_t to a string.
     * @param direction The #hb_direction_t to convert
     * @returns The string corresponding to @direction
     */
    function direction_to_string(direction: direction_t): string | null;
    /**
     * Perform a "close-path" draw operation.
     * @param dfuncs draw functions
     * @param draw_data associated draw data passed by the caller
     * @param st current draw state
     */
    function draw_close_path(
        dfuncs: draw_funcs_t,
        draw_data: any | null,
        st: draw_state_t
    ): void;
    /**
     * Perform a "cubic-to" draw operation.
     * @param dfuncs draw functions
     * @param draw_data associated draw data passed by the caller
     * @param st current draw state
     * @param control1_x X component of first control point
     * @param control1_y Y component of first control point
     * @param control2_x X component of second control point
     * @param control2_y Y component of second control point
     * @param to_x X component of target point
     * @param to_y Y component of target point
     */
    function draw_cubic_to(
        dfuncs: draw_funcs_t,
        draw_data: any | null,
        st: draw_state_t,
        control1_x: number,
        control1_y: number,
        control2_x: number,
        control2_y: number,
        to_x: number,
        to_y: number
    ): void;
    /**
     * Creates a new draw callbacks object.
     * @returns  A newly allocated #hb_draw_funcs_t with a reference count of 1. The initial reference count should be released with hb_draw_funcs_destroy when you are done using the #hb_draw_funcs_t. This function never returns `NULL`. If memory cannot be allocated, a special singleton #hb_draw_funcs_t object will be returned.
     */
    function draw_funcs_create(): draw_funcs_t;
    /**
     * Fetches the singleton empty draw-functions structure.
     * @returns The empty draw-functions structure
     */
    function draw_funcs_get_empty(): draw_funcs_t;
    /**
     * Checks whether `dfuncs` is immutable.
     * @param dfuncs draw functions
     * @returns `true` if @dfuncs is immutable, `false` otherwise
     */
    function draw_funcs_is_immutable(dfuncs: draw_funcs_t): bool_t;
    /**
     * Makes `dfuncs` object immutable.
     * @param dfuncs draw functions
     */
    function draw_funcs_make_immutable(dfuncs: draw_funcs_t): void;
    /**
     * Sets close-path callback to the draw functions object.
     * @param dfuncs draw functions object
     * @param func close-path callback
     */
    function draw_funcs_set_close_path_func(
        dfuncs: draw_funcs_t,
        func: draw_close_path_func_t
    ): void;
    /**
     * Sets cubic-to callback to the draw functions object.
     * @param dfuncs draw functions
     * @param func cubic-to callback
     */
    function draw_funcs_set_cubic_to_func(
        dfuncs: draw_funcs_t,
        func: draw_cubic_to_func_t
    ): void;
    /**
     * Sets line-to callback to the draw functions object.
     * @param dfuncs draw functions object
     * @param func line-to callback
     */
    function draw_funcs_set_line_to_func(
        dfuncs: draw_funcs_t,
        func: draw_line_to_func_t
    ): void;
    /**
     * Sets move-to callback to the draw functions object.
     * @param dfuncs draw functions object
     * @param func move-to callback
     */
    function draw_funcs_set_move_to_func(
        dfuncs: draw_funcs_t,
        func: draw_move_to_func_t
    ): void;
    /**
     * Sets quadratic-to callback to the draw functions object.
     * @param dfuncs draw functions object
     * @param func quadratic-to callback
     */
    function draw_funcs_set_quadratic_to_func(
        dfuncs: draw_funcs_t,
        func: draw_quadratic_to_func_t
    ): void;
    /**
     * Perform a "line-to" draw operation.
     * @param dfuncs draw functions
     * @param draw_data associated draw data passed by the caller
     * @param st current draw state
     * @param to_x X component of target point
     * @param to_y Y component of target point
     */
    function draw_line_to(
        dfuncs: draw_funcs_t,
        draw_data: any | null,
        st: draw_state_t,
        to_x: number,
        to_y: number
    ): void;
    /**
     * Perform a "move-to" draw operation.
     * @param dfuncs draw functions
     * @param draw_data associated draw data passed by the caller
     * @param st current draw state
     * @param to_x X component of target point
     * @param to_y Y component of target point
     */
    function draw_move_to(
        dfuncs: draw_funcs_t,
        draw_data: any | null,
        st: draw_state_t,
        to_x: number,
        to_y: number
    ): void;
    /**
     * Perform a "quadratic-to" draw operation.
     * @param dfuncs draw functions
     * @param draw_data associated draw data passed by the caller
     * @param st current draw state
     * @param control_x X component of control point
     * @param control_y Y component of control point
     * @param to_x X component of target point
     * @param to_y Y component of target point
     */
    function draw_quadratic_to(
        dfuncs: draw_funcs_t,
        draw_data: any | null,
        st: draw_state_t,
        control_x: number,
        control_y: number,
        to_x: number,
        to_y: number
    ): void;
    /**
     * Add table for `tag` with data provided by `blob` to the face.  `face` must
     * be created using hb_face_builder_create().
     * @param face A face object created with hb_face_builder_create()
     * @param tag The #hb_tag_t of the table to add
     * @param blob The blob containing the table data to add
     */
    function face_builder_add_table(
        face: face_t,
        tag: tag_t,
        blob: blob_t
    ): bool_t;
    /**
     * Creates a #hb_face_t that can be used with hb_face_builder_add_table().
     * After tables are added to the face, it can be compiled to a binary
     * font file by calling hb_face_reference_blob().
     * @returns New face.
     */
    function face_builder_create(): face_t;
    /**
     * Set the ordering of tables for serialization. Any tables not
     * specified in the tags list will be ordered after the tables in
     * tags, ordered by the default sort ordering.
     * @param face A face object created with hb_face_builder_create()
     * @param tags ordered list of table tags terminated by   %HB_TAG_NONE
     */
    function face_builder_sort_tables(face: face_t, tags: tag_t[]): void;
    /**
     * Collects the mapping from Unicode characters to nominal glyphs of the `face,`
     * and optionally all of the Unicode characters covered by `face`.
     * @param face A face object
     */
    function face_collect_nominal_glyph_mapping(
        face: face_t
    ): [/* mapping */ map_t, /* unicodes */ set_t | null];
    /**
     * Collects all of the Unicode characters covered by `face` and adds
     * them to the #hb_set_t set `out`.
     * @param face A face object
     */
    function face_collect_unicodes(face: face_t): /* out */ set_t;
    /**
     * Collects all Unicode "Variation Selector" characters covered by `face` and adds
     * them to the #hb_set_t set `out`.
     * @param face A face object
     */
    function face_collect_variation_selectors(face: face_t): /* out */ set_t;
    /**
     * Collects all Unicode characters for `variation_selector` covered by `face` and adds
     * them to the #hb_set_t set `out`.
     * @param face A face object
     * @param variation_selector The Variation Selector to query
     */
    function face_collect_variation_unicodes(
        face: face_t,
        variation_selector: codepoint_t
    ): /* out */ set_t;
    /**
     * Fetches the number of faces in a blob.
     * @param blob a blob.
     * @returns Number of faces in @blob
     */
    function face_count(blob: blob_t): number;
    /**
     * Constructs a new face object from the specified blob and
     * a face index into that blob.
     *
     * The face index is used for blobs of file formats such as TTC and
     * DFont that can contain more than one face.  Face indices within
     * such collections are zero-based.
     *
     * <note>Note: If the blob font format is not a collection, `index`
     * is ignored.  Otherwise, only the lower 16-bits of `index` are used.
     * The unmodified `index` can be accessed via hb_face_get_index().</note>
     *
     * <note>Note: The high 16-bits of `index,` if non-zero, are used by
     * hb_font_create() to load named-instances in variable fonts.  See
     * hb_font_create() for details.</note>
     * @param blob #hb_blob_t to work upon
     * @param index The index of the face within `blob`
     * @returns The new face object
     */
    function face_create(blob: blob_t, index: number): face_t;
    /**
     * Variant of hb_face_create(), built for those cases where it is more
     * convenient to provide data for individual tables instead of the whole font
     * data. With the caveat that hb_face_get_table_tags() does not currently work
     * with faces created this way.
     *
     * Creates a new face object from the specified `user_data` and `reference_table_func,`
     * with the `destroy` callback.
     * @param reference_table_func Table-referencing function
     * @returns The new face object
     */
    function face_create_for_tables(
        reference_table_func: reference_table_func_t
    ): face_t;
    /**
     * Fetches the singleton empty face object.
     * @returns The empty face object
     */
    function face_get_empty(): face_t;
    /**
     * Fetches the glyph-count value of the specified face object.
     * @param face A face object
     * @returns The glyph-count value of @face
     */
    function face_get_glyph_count(face: face_t): number;
    /**
     * Fetches the face-index corresponding to the given face.
     *
     * <note>Note: face indices within a collection are zero-based.</note>
     * @param face A face object
     * @returns The index of @face.
     */
    function face_get_index(face: face_t): number;
    /**
     * Fetches a list of all table tags for a face, if possible. The list returned will
     * begin at the offset provided
     * @param face A face object
     * @param start_offset The index of first table tag to retrieve
     * @returns Total number of tables, or zero if it is not possible to list
     */
    function face_get_table_tags(
        face: face_t,
        start_offset: number
    ): [/* returnType */ number, /* table_tags */ tag_t[]];
    /**
     * Fetches the units-per-em (UPEM) value of the specified face object.
     *
     * Typical UPEM values for fonts are 1000, or 2048, but any value
     * in between 16 and 16,384 is allowed for OpenType fonts.
     * @param face A face object
     * @returns The upem value of @face
     */
    function face_get_upem(face: face_t): number;
    /**
     * Tests whether the given face object is immutable.
     * @param face A face object
     * @returns `true` is @face is immutable, `false` otherwise
     */
    function face_is_immutable(face: face_t): bool_t;
    /**
     * Makes the given face object immutable.
     * @param face A face object
     */
    function face_make_immutable(face: face_t): void;
    /**
     * Fetches a pointer to the binary blob that contains the
     * specified face. Returns an empty blob if referencing face data is not
     * possible.
     * @param face A face object
     * @returns A pointer to the blob for @face
     */
    function face_reference_blob(face: face_t): blob_t;
    /**
     * Fetches a reference to the specified table within
     * the specified face.
     * @param face A face object
     * @param tag The #hb_tag_t of the table to query
     * @returns A pointer to the @tag table within @face
     */
    function face_reference_table(face: face_t, tag: tag_t): blob_t;
    /**
     * Sets the glyph count for a face object to the specified value.
     *
     * This API is used in rare circumstances.
     * @param face A face object
     * @param glyph_count The glyph-count value to assign
     */
    function face_set_glyph_count(face: face_t, glyph_count: number): void;
    /**
     * Assigns the specified face-index to `face`. Fails if the
     * face is immutable.
     *
     * <note>Note: changing the index has no effect on the face itself
     * This only changes the value returned by hb_face_get_index().</note>
     * @param face A face object
     * @param index The index to assign
     */
    function face_set_index(face: face_t, index: number): void;
    /**
     * Sets the units-per-em (upem) for a face object to the specified value.
     *
     * This API is used in rare circumstances.
     * @param face A face object
     * @param upem The units-per-em value to assign
     */
    function face_set_upem(face: face_t, upem: number): void;
    /**
     * Parses a string into a #hb_feature_t.
     *
     * The format for specifying feature strings follows. All valid CSS
     * font-feature-settings values other than 'normal' and the global values are
     * also accepted, though not documented below. CSS string escapes are not
     * supported.
     *
     * The range indices refer to the positions between Unicode characters. The
     * position before the first character is always 0.
     *
     * The format is Python-esque.  Here is how it all works:
     *
     * <informaltable pgwide='1' align='left' frame='none'>
     * <tgroup cols='5'>
     * <thead>
     * <row><entry>Syntax</entry>    <entry>Value</entry> <entry>Start</entry> <entry>End</entry></row>
     * </thead>
     * <tbody>
     * <row><entry>Setting value:</entry></row>
     * <row><entry>kern</entry>      <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
     * <row><entry>+kern</entry>     <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
     * <row><entry>-kern</entry>     <entry>0</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature off</entry></row>
     * <row><entry>kern=0</entry>    <entry>0</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature off</entry></row>
     * <row><entry>kern=1</entry>    <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
     * <row><entry>aalt=2</entry>    <entry>2</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Choose 2nd alternate</entry></row>
     * <row><entry>Setting index:</entry></row>
     * <row><entry>kern[]</entry>    <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
     * <row><entry>kern[:]</entry>   <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
     * <row><entry>kern[5:]</entry>  <entry>1</entry>     <entry>5</entry>      <entry>∞</entry>   <entry>Turn feature on, partial</entry></row>
     * <row><entry>kern[:5]</entry>  <entry>1</entry>     <entry>0</entry>      <entry>5</entry>   <entry>Turn feature on, partial</entry></row>
     * <row><entry>kern[3:5]</entry> <entry>1</entry>     <entry>3</entry>      <entry>5</entry>   <entry>Turn feature on, range</entry></row>
     * <row><entry>kern[3]</entry>   <entry>1</entry>     <entry>3</entry>      <entry>3+1</entry> <entry>Turn feature on, single char</entry></row>
     * <row><entry>Mixing it all:</entry></row>
     * <row><entry>aalt[3:5]=2</entry> <entry>2</entry>   <entry>3</entry>      <entry>5</entry>   <entry>Turn 2nd alternate on for range</entry></row>
     * </tbody>
     * </tgroup>
     * </informaltable>
     * @param str a string to parse
     * @returns `true` if @str is successfully parsed, `false` otherwise
     */
    function feature_from_string(
        str: Uint8Array
    ): [/* returnType */ bool_t, /* feature */ feature_t];
    /**
     * Converts a #hb_feature_t into a `NULL`-terminated string in the format
     * understood by hb_feature_from_string(). The client in responsible for
     * allocating big enough size for `buf,` 128 bytes is more than enough.
     * @param feature an #hb_feature_t to convert
     */
    function feature_to_string(feature: feature_t): /* buf */ string[];
    /**
     * Adds the origin coordinates to an (X,Y) point coordinate, in
     * the specified glyph ID in the specified font.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @param direction The direction of the text segment
     * @param x Input = The original X coordinate     Output = The X coordinate plus the X-coordinate of the origin
     * @param y Input = The original Y coordinate     Output = The Y coordinate plus the Y-coordinate of the origin
     */
    function font_add_glyph_origin_for_direction(
        font: font_t,
        glyph: codepoint_t,
        direction: direction_t,
        x: position_t,
        y: position_t
    ): [/* x */ position_t, /* y */ position_t];
    /**
     * Notifies the `font` that underlying font data has changed.
     * This has the effect of increasing the serial as returned
     * by hb_font_get_serial(), which invalidates internal caches.
     * @param font #hb_font_t to work upon
     */
    function font_changed(font: font_t): void;
    /**
     * Constructs a new font object from the specified face.
     *
     * <note>Note: If `face'`s index value (as passed to hb_face_create()
     * has non-zero top 16-bits, those bits minus one are passed to
     * hb_font_set_var_named_instance(), effectively loading a named-instance
     * of a variable font, instead of the default-instance.  This allows
     * specifying which named-instance to load by default when creating the
     * face.</note>
     * @param face a face.
     * @returns The new font object
     */
    function font_create(face: face_t): font_t;
    /**
     * Constructs a sub-font font object from the specified `parent` font,
     * replicating the parent's properties.
     * @param parent The parent font object
     * @returns The new sub-font font object
     */
    function font_create_sub_font(parent: font_t): font_t;
    /**
     * Draws the outline that corresponds to a glyph in the specified `font`.
     *
     * The outline is returned by way of calls to the callbacks of the `dfuncs`
     * objects, with `draw_data` passed to them.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID
     * @param dfuncs #hb_draw_funcs_t to draw to
     * @param draw_data User data to pass to draw callbacks
     */
    function font_draw_glyph(
        font: font_t,
        glyph: codepoint_t,
        dfuncs: draw_funcs_t,
        draw_data: any | null
    ): void;
    /**
     * Creates a new #hb_font_funcs_t structure of font functions.
     * @returns The font-functions structure
     */
    function font_funcs_create(): font_funcs_t;
    /**
     * Fetches an empty font-functions structure.
     * @returns The font-functions structure
     */
    function font_funcs_get_empty(): font_funcs_t;
    /**
     * Tests whether a font-functions structure is immutable.
     * @param ffuncs The font-functions structure
     * @returns `true` if @ffuncs is immutable, `false` otherwise
     */
    function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t;
    /**
     * Makes a font-functions structure immutable.
     * @param ffuncs The font-functions structure
     */
    function font_funcs_make_immutable(ffuncs: font_funcs_t): void;
    /**
     * Sets the implementation function for #hb_font_draw_glyph_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_draw_glyph_func(
        ffuncs: font_funcs_t,
        func: font_draw_glyph_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_font_h_extents_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_font_h_extents_func(
        ffuncs: font_funcs_t,
        func: font_get_font_h_extents_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_font_v_extents_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_font_v_extents_func(
        ffuncs: font_funcs_t,
        func: font_get_font_v_extents_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_contour_point_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_contour_point_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_contour_point_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_extents_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_extents_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_extents_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_from_name_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_from_name_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_from_name_func_t
    ): void;
    /**
     * Deprecated.  Use hb_font_funcs_set_nominal_glyph_func() and
     * hb_font_funcs_set_variation_glyph_func() instead.
     * @param ffuncs The font-functions structure
     * @param func callback function
     */
    function font_funcs_set_glyph_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_h_advance_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_h_advance_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_h_advance_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_h_advances_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_h_advances_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_h_advances_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_h_kerning_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_h_kerning_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_h_kerning_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_h_origin_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_h_origin_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_h_origin_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_name_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_name_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_name_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_shape_func_t,
     * which is the same as #hb_font_draw_glyph_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_shape_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_shape_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_v_advance_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_v_advance_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_v_advance_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_v_advances_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_v_advances_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_v_advances_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_v_kerning_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_v_kerning_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_v_kerning_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_glyph_v_origin_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_glyph_v_origin_func(
        ffuncs: font_funcs_t,
        func: font_get_glyph_v_origin_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_nominal_glyph_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_nominal_glyph_func(
        ffuncs: font_funcs_t,
        func: font_get_nominal_glyph_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_nominal_glyphs_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_nominal_glyphs_func(
        ffuncs: font_funcs_t,
        func: font_get_nominal_glyphs_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_paint_glyph_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_paint_glyph_func(
        ffuncs: font_funcs_t,
        func: font_paint_glyph_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_font_get_variation_glyph_func_t.
     * @param ffuncs A font-function structure
     * @param func The callback function to assign
     */
    function font_funcs_set_variation_glyph_func(
        ffuncs: font_funcs_t,
        func: font_get_variation_glyph_func_t
    ): void;
    /**
     * Fetches the empty font object.
     * @returns The empty font object
     */
    function font_get_empty(): font_t;
    /**
     * Fetches the extents for a font in a text segment of the
     * specified direction.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param direction The direction of the text segment
     */
    function font_get_extents_for_direction(
        font: font_t,
        direction: direction_t
    ): /* extents */ font_extents_t;
    /**
     * Fetches the face associated with the specified font object.
     * @param font #hb_font_t to work upon
     * @returns The #hb_face_t value
     */
    function font_get_face(font: font_t): face_t;
    /**
     * Fetches the glyph ID for a Unicode code point in the specified
     * font, with an optional variation selector.
     *
     * If `variation_selector` is 0, calls hb_font_get_nominal_glyph();
     * otherwise calls hb_font_get_variation_glyph().
     * @param font #hb_font_t to work upon
     * @param unicode The Unicode code point to query
     * @param variation_selector A variation-selector code point
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph(
        font: font_t,
        unicode: codepoint_t,
        variation_selector: codepoint_t
    ): [/* returnType */ bool_t, /* glyph */ codepoint_t];
    /**
     * Fetches the advance for a glyph ID from the specified font,
     * in a text segment of the specified direction.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @param direction The direction of the text segment
     */
    function font_get_glyph_advance_for_direction(
        font: font_t,
        glyph: codepoint_t,
        direction: direction_t
    ): [/* x */ position_t, /* y */ position_t];
    /**
     * Fetches the advances for a sequence of glyph IDs in the specified
     * font, in a text segment of the specified direction.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param direction The direction of the text segment
     * @param count The number of glyph IDs in the sequence queried
     * @param first_glyph The first glyph ID to query
     * @param glyph_stride The stride between successive glyph IDs
     */
    function font_get_glyph_advances_for_direction(
        font: font_t,
        direction: direction_t,
        count: number,
        first_glyph: codepoint_t,
        glyph_stride: number
    ): [/* first_advance */ position_t, /* advance_stride */ number];
    /**
     * Fetches the (x,y) coordinates of a specified contour-point index
     * in the specified glyph, within the specified font.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @param point_index The contour-point index to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph_contour_point(
        font: font_t,
        glyph: codepoint_t,
        point_index: number
    ): [/* returnType */ bool_t, /* x */ position_t, /* y */ position_t];
    /**
     * Fetches the (X,Y) coordinates of a specified contour-point index
     * in the specified glyph ID in the specified font, with respect
     * to the origin in a text segment in the specified direction.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @param point_index The contour-point index to query
     * @param direction The direction of the text segment
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph_contour_point_for_origin(
        font: font_t,
        glyph: codepoint_t,
        point_index: number,
        direction: direction_t
    ): [/* returnType */ bool_t, /* x */ position_t, /* y */ position_t];
    /**
     * Fetches the #hb_glyph_extents_t data for a glyph ID
     * in the specified font.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph_extents(
        font: font_t,
        glyph: codepoint_t
    ): [/* returnType */ bool_t, /* extents */ glyph_extents_t];
    /**
     * Fetches the #hb_glyph_extents_t data for a glyph ID
     * in the specified font, with respect to the origin in
     * a text segment in the specified direction.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @param direction The direction of the text segment
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph_extents_for_origin(
        font: font_t,
        glyph: codepoint_t,
        direction: direction_t
    ): [/* returnType */ bool_t, /* extents */ glyph_extents_t];
    /**
     * Fetches the glyph ID that corresponds to a name string in the specified `font`.
     *
     * <note>Note: `len` == -1 means the name string is null-terminated.</note>
     * @param font #hb_font_t to work upon
     * @param name The name string to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph_from_name(
        font: font_t,
        name: string[]
    ): [/* returnType */ bool_t, /* glyph */ codepoint_t];
    /**
     * Fetches the advance for a glyph ID in the specified font,
     * for horizontal text segments.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @returns The advance of @glyph within @font
     */
    function font_get_glyph_h_advance(
        font: font_t,
        glyph: codepoint_t
    ): position_t;
    /**
     * Fetches the advances for a sequence of glyph IDs in the specified
     * font, for horizontal text segments.
     * @param font #hb_font_t to work upon
     * @param count The number of glyph IDs in the sequence queried
     * @param first_glyph The first glyph ID to query
     * @param glyph_stride The stride between successive glyph IDs
     * @param advance_stride The stride between successive advances
     */
    function font_get_glyph_h_advances(
        font: font_t,
        count: number,
        first_glyph: codepoint_t,
        glyph_stride: number,
        advance_stride: number
    ): /* first_advance */ position_t;
    /**
     * Fetches the kerning-adjustment value for a glyph-pair in
     * the specified font, for horizontal text segments.
     *
     * <note>It handles legacy kerning only (as returned by the corresponding
     * #hb_font_funcs_t function).</note>
     * @param font #hb_font_t to work upon
     * @param left_glyph The glyph ID of the left glyph in the glyph pair
     * @param right_glyph The glyph ID of the right glyph in the glyph pair
     * @returns The kerning adjustment value
     */
    function font_get_glyph_h_kerning(
        font: font_t,
        left_glyph: codepoint_t,
        right_glyph: codepoint_t
    ): position_t;
    /**
     * Fetches the (X,Y) coordinates of the origin for a glyph ID
     * in the specified font, for horizontal text segments.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph_h_origin(
        font: font_t,
        glyph: codepoint_t
    ): [/* returnType */ bool_t, /* x */ position_t, /* y */ position_t];
    /**
     * Fetches the kerning-adjustment value for a glyph-pair in the specified font.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param first_glyph The glyph ID of the first glyph in the glyph pair to query
     * @param second_glyph The glyph ID of the second glyph in the glyph pair to query
     * @param direction The direction of the text segment
     */
    function font_get_glyph_kerning_for_direction(
        font: font_t,
        first_glyph: codepoint_t,
        second_glyph: codepoint_t,
        direction: direction_t
    ): [/* x */ position_t, /* y */ position_t];
    /**
     * Fetches the glyph-name string for a glyph ID in the specified `font`.
     *
     * According to the OpenType specification, glyph names are limited to 63
     * characters and can only contain (a subset of) ASCII.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph_name(
        font: font_t,
        glyph: codepoint_t
    ): [/* returnType */ bool_t, /* name */ string[]];
    /**
     * Fetches the (X,Y) coordinates of the origin for a glyph in
     * the specified font.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @param direction The direction of the text segment
     */
    function font_get_glyph_origin_for_direction(
        font: font_t,
        glyph: codepoint_t,
        direction: direction_t
    ): [/* x */ position_t, /* y */ position_t];
    /**
     * Fetches the glyph shape that corresponds to a glyph in the specified `font`.
     * The shape is returned by way of calls to the callbacks of the `dfuncs`
     * objects, with `draw_data` passed to them.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID
     * @param dfuncs #hb_draw_funcs_t to draw to
     * @param draw_data User data to pass to draw callbacks
     */
    function font_get_glyph_shape(
        font: font_t,
        glyph: codepoint_t,
        dfuncs: draw_funcs_t,
        draw_data: any | null
    ): void;
    /**
     * Fetches the advance for a glyph ID in the specified font,
     * for vertical text segments.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @returns The advance of @glyph within @font
     */
    function font_get_glyph_v_advance(
        font: font_t,
        glyph: codepoint_t
    ): position_t;
    /**
     * Fetches the advances for a sequence of glyph IDs in the specified
     * font, for vertical text segments.
     * @param font #hb_font_t to work upon
     * @param count The number of glyph IDs in the sequence queried
     * @param first_glyph The first glyph ID to query
     * @param glyph_stride The stride between successive glyph IDs
     */
    function font_get_glyph_v_advances(
        font: font_t,
        count: number,
        first_glyph: codepoint_t,
        glyph_stride: number
    ): [/* first_advance */ position_t, /* advance_stride */ number];
    /**
     * Fetches the kerning-adjustment value for a glyph-pair in
     * the specified font, for vertical text segments.
     *
     * <note>It handles legacy kerning only (as returned by the corresponding
     * #hb_font_funcs_t function).</note>
     * @param font #hb_font_t to work upon
     * @param top_glyph The glyph ID of the top glyph in the glyph pair
     * @param bottom_glyph The glyph ID of the bottom glyph in the glyph pair
     * @returns The kerning adjustment value
     */
    function font_get_glyph_v_kerning(
        font: font_t,
        top_glyph: codepoint_t,
        bottom_glyph: codepoint_t
    ): position_t;
    /**
     * Fetches the (X,Y) coordinates of the origin for a glyph ID
     * in the specified font, for vertical text segments.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_glyph_v_origin(
        font: font_t,
        glyph: codepoint_t
    ): [/* returnType */ bool_t, /* x */ position_t, /* y */ position_t];
    /**
     * Fetches the extents for a specified font, for horizontal
     * text segments.
     * @param font #hb_font_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_h_extents(
        font: font_t
    ): [/* returnType */ bool_t, /* extents */ font_extents_t];
    /**
     * Fetches the nominal glyph ID for a Unicode code point in the
     * specified font.
     *
     * This version of the function should not be used to fetch glyph IDs
     * for code points modified by variation selectors. For variation-selector
     * support, user hb_font_get_variation_glyph() or use hb_font_get_glyph().
     * @param font #hb_font_t to work upon
     * @param unicode The Unicode code point to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_nominal_glyph(
        font: font_t,
        unicode: codepoint_t
    ): [/* returnType */ bool_t, /* glyph */ codepoint_t];
    /**
     * Fetches the nominal glyph IDs for a sequence of Unicode code points. Glyph
     * IDs must be returned in a #hb_codepoint_t output parameter. Stops at the
     * first unsupported glyph ID.
     * @param font #hb_font_t to work upon
     * @param count number of code points to query
     * @param first_unicode The first Unicode code point to query
     * @param unicode_stride The stride between successive code points
     * @param glyph_stride The stride between successive glyph IDs
     * @returns the number of code points processed
     */
    function font_get_nominal_glyphs(
        font: font_t,
        count: number,
        first_unicode: codepoint_t,
        unicode_stride: number,
        glyph_stride: number
    ): [/* returnType */ number, /* first_glyph */ codepoint_t];
    /**
     * Fetches the parent font of `font`.
     * @param font #hb_font_t to work upon
     * @returns The parent font object
     */
    function font_get_parent(font: font_t): font_t;
    /**
     * Fetches the horizontal and vertical points-per-em (ppem) of a font.
     * @param font #hb_font_t to work upon
     */
    function font_get_ppem(
        font: font_t
    ): [/* x_ppem */ number, /* y_ppem */ number];
    /**
     * Fetches the "point size" of a font. Used in CoreText to
     * implement optical sizing.
     * @param font #hb_font_t to work upon
     * @returns Point size.  A value of zero means "not set."
     */
    function font_get_ptem(font: font_t): number;
    /**
     * Fetches the horizontal and vertical scale of a font.
     * @param font #hb_font_t to work upon
     */
    function font_get_scale(
        font: font_t
    ): [/* x_scale */ number, /* y_scale */ number];
    /**
     * Returns the internal serial number of the font. The serial
     * number is increased every time a setting on the font is
     * changed, using a setter function.
     * @param font #hb_font_t to work upon
     * @returns serial number
     */
    function font_get_serial(font: font_t): number;
    /**
     * Fetches the "synthetic boldness" parameters of a font.
     * @param font #hb_font_t to work upon
     */
    function font_get_synthetic_bold(
        font: font_t
    ): [
        /* x_embolden */ number,
        /* y_embolden */ number,
        /* in_place */ bool_t
    ];
    /**
     * Fetches the "synthetic slant" of a font.
     * @param font #hb_font_t to work upon
     * @returns Synthetic slant.  By default is zero.
     */
    function font_get_synthetic_slant(font: font_t): number;
    /**
     * Fetches the extents for a specified font, for vertical
     * text segments.
     * @param font #hb_font_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_v_extents(
        font: font_t
    ): [/* returnType */ bool_t, /* extents */ font_extents_t];
    /**
     * Fetches the list of variation coordinates (in design-space units) currently
     * set on a font.
     *
     * Note that this returned array may only contain values for some
     * (or none) of the axes; omitted axes effectively have their default
     * values.
     *
     * Return value is valid as long as variation coordinates of the font
     * are not modified.
     * @param font #hb_font_t to work upon
     * @returns coordinates array
     */
    function font_get_var_coords_design(
        font: font_t
    ): [/* returnType */ number, /* length */ number];
    /**
     * Fetches the list of normalized variation coordinates currently
     * set on a font.
     *
     * Note that this returned array may only contain values for some
     * (or none) of the axes; omitted axes effectively have zero values.
     *
     * Return value is valid as long as variation coordinates of the font
     * are not modified.
     * @param font #hb_font_t to work upon
     * @returns coordinates array
     */
    function font_get_var_coords_normalized(
        font: font_t
    ): [/* returnType */ number, /* length */ number];
    /**
     * Returns the currently-set named-instance index of the font.
     * @param font a font.
     * @returns Named-instance index or %HB_FONT_NO_VAR_NAMED_INSTANCE.
     */
    function font_get_var_named_instance(font: font_t): number;
    /**
     * Fetches the glyph ID for a Unicode code point when followed by
     * by the specified variation-selector code point, in the specified
     * font.
     * @param font #hb_font_t to work upon
     * @param unicode The Unicode code point to query
     * @param variation_selector The  variation-selector code point to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_get_variation_glyph(
        font: font_t,
        unicode: codepoint_t,
        variation_selector: codepoint_t
    ): [/* returnType */ bool_t, /* glyph */ codepoint_t];
    /**
     * Fetches the glyph ID from `font` that matches the specified string.
     * Strings of the format `gidDDD` or `uniUUUU` are parsed automatically.
     *
     * <note>Note: `len` == -1 means the string is null-terminated.</note>
     * @param font #hb_font_t to work upon
     * @param s string to query
     * @returns `true` if data found, `false` otherwise
     */
    function font_glyph_from_string(
        font: font_t,
        s: Uint8Array
    ): [/* returnType */ bool_t, /* glyph */ codepoint_t];
    /**
     * Fetches the name of the specified glyph ID in `font` and returns
     * it in string `s`.
     *
     * If the glyph ID has no name in `font,` a string of the form `gidDDD` is
     * generated, with `DDD` being the glyph ID.
     *
     * According to the OpenType specification, glyph names are limited to 63
     * characters and can only contain (a subset of) ASCII.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     */
    function font_glyph_to_string(
        font: font_t,
        glyph: codepoint_t
    ): /* s */ string[];
    /**
     * Tests whether a font object is immutable.
     * @param font #hb_font_t to work upon
     * @returns `true` if @font is immutable, `false` otherwise
     */
    function font_is_immutable(font: font_t): bool_t;
    /**
     * Makes `font` immutable.
     * @param font #hb_font_t to work upon
     */
    function font_make_immutable(font: font_t): void;
    /**
     * Paints the glyph.
     *
     * The painting instructions are returned by way of calls to
     * the callbacks of the `funcs` object, with `paint_data` passed
     * to them.
     *
     * If the font has color palettes (see hb_ot_color_has_palettes()),
     * then `palette_index` selects the palette to use. If the font only
     * has one palette, this will be 0.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID
     * @param pfuncs #hb_paint_funcs_t to paint with
     * @param paint_data User data to pass to paint callbacks
     * @param palette_index The index of the font's color palette to use
     * @param foreground The foreground color, unpremultipled
     */
    function font_paint_glyph(
        font: font_t,
        glyph: codepoint_t,
        pfuncs: paint_funcs_t,
        paint_data: any | null,
        palette_index: number,
        foreground: color_t
    ): void;
    /**
     * Sets `face` as the font-face value of `font`.
     * @param font #hb_font_t to work upon
     * @param face The #hb_face_t to assign
     */
    function font_set_face(font: font_t, face: face_t): void;
    /**
     * Replaces the font-functions structure attached to a font, updating
     * the font's user-data with `font-data` and the `destroy` callback.
     * @param font #hb_font_t to work upon
     * @param klass The font-functions structure.
     */
    function font_set_funcs(font: font_t, klass: font_funcs_t): void;
    /**
     * Replaces the user data attached to a font, updating the font's
     * `destroy` callback.
     * @param font #hb_font_t to work upon
     * @param font_data Data to attach to `font`
     */
    function font_set_funcs_data(font: font_t, font_data: any | null): void;
    /**
     * Sets the parent font of `font`.
     * @param font #hb_font_t to work upon
     * @param parent The parent font object to assign
     */
    function font_set_parent(font: font_t, parent: font_t): void;
    /**
     * Sets the horizontal and vertical pixels-per-em (PPEM) of a font.
     *
     * These values are used for pixel-size-specific adjustment to
     * shaping and draw results, though for the most part they are
     * unused and can be left unset.
     * @param font #hb_font_t to work upon
     * @param x_ppem Horizontal ppem value to assign
     * @param y_ppem Vertical ppem value to assign
     */
    function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void;
    /**
     * Sets the "point size" of a font. Set to zero to unset.
     * Used in CoreText to implement optical sizing.
     *
     * <note>Note: There are 72 points in an inch.</note>
     * @param font #hb_font_t to work upon
     * @param ptem font size in points.
     */
    function font_set_ptem(font: font_t, ptem: number): void;
    /**
     * Sets the horizontal and vertical scale of a font.
     *
     * The font scale is a number related to, but not the same as,
     * font size. Typically the client establishes a scale factor
     * to be used between the two. For example, 64, or 256, which
     * would be the fractional-precision part of the font scale.
     * This is necessary because #hb_position_t values are integer
     * types and you need to leave room for fractional values
     * in there.
     *
     * For example, to set the font size to 20, with 64
     * levels of fractional precision you would call
     * `hb_font_set_scale(font, 20 * 64, 20 * 64)`.
     *
     * In the example above, even what font size 20 means is up to
     * you. It might be 20 pixels, or 20 points, or 20 millimeters.
     * HarfBuzz does not care about that.  You can set the point
     * size of the font using hb_font_set_ptem(), and the pixel
     * size using hb_font_set_ppem().
     *
     * The choice of scale is yours but needs to be consistent between
     * what you set here, and what you expect out of #hb_position_t
     * as well has draw / paint API output values.
     *
     * Fonts default to a scale equal to the UPEM value of their face.
     * A font with this setting is sometimes called an "unscaled" font.
     * @param font #hb_font_t to work upon
     * @param x_scale Horizontal scale value to assign
     * @param y_scale Vertical scale value to assign
     */
    function font_set_scale(
        font: font_t,
        x_scale: number,
        y_scale: number
    ): void;
    /**
     * Sets the "synthetic boldness" of a font.
     *
     * Positive values for `x_embolden` / `y_embolden` make a font
     * bolder, negative values thinner. Typical values are in the
     * 0.01 to 0.05 range. The default value is zero.
     *
     * Synthetic boldness is applied by offsetting the contour
     * points of the glyph shape.
     *
     * Synthetic boldness is applied when rendering a glyph via
     * hb_font_draw_glyph().
     *
     * If `in_place` is `false`, then glyph advance-widths are also
     * adjusted, otherwise they are not.  The in-place mode is
     * useful for simulating [font grading](https://fonts.google.com/knowledge/glossary/grade).
     * @param font #hb_font_t to work upon
     * @param x_embolden the amount to embolden horizontally
     * @param y_embolden the amount to embolden vertically
     * @param in_place whether to embolden glyphs in-place
     */
    function font_set_synthetic_bold(
        font: font_t,
        x_embolden: number,
        y_embolden: number,
        in_place: bool_t
    ): void;
    /**
     * Sets the "synthetic slant" of a font.  By default is zero.
     * Synthetic slant is the graphical skew applied to the font
     * at rendering time.
     *
     * HarfBuzz needs to know this value to adjust shaping results,
     * metrics, and style values to match the slanted rendering.
     *
     * <note>Note: The glyph shape fetched via the hb_font_draw_glyph()
     * function is slanted to reflect this value as well.</note>
     *
     * <note>Note: The slant value is a ratio.  For example, a
     * 20% slant would be represented as a 0.2 value.</note>
     * @param font #hb_font_t to work upon
     * @param slant synthetic slant value.
     */
    function font_set_synthetic_slant(font: font_t, slant: number): void;
    /**
     * Applies a list of variation coordinates (in design-space units)
     * to a font.
     *
     * Note that this overrides all existing variations set on `font`.
     * Axes not included in `coords` will be effectively set to their
     * default values.
     * @param font #hb_font_t to work upon
     * @param coords Array of variation coordinates to apply
     */
    function font_set_var_coords_design(font: font_t, coords: number[]): void;
    /**
     * Applies a list of variation coordinates (in normalized units)
     * to a font.
     *
     * Note that this overrides all existing variations set on `font`.
     * Axes not included in `coords` will be effectively set to their
     * default values.
     *
     * <note>Note: Coordinates should be normalized to 2.14.</note>
     * @param font #hb_font_t to work upon
     * @param coords Array of variation coordinates to apply
     */
    function font_set_var_coords_normalized(
        font: font_t,
        coords: number[]
    ): void;
    /**
     * Sets design coords of a font from a named-instance index.
     * @param font a font.
     * @param instance_index named instance index.
     */
    function font_set_var_named_instance(
        font: font_t,
        instance_index: number
    ): void;
    /**
     * Change the value of one variation axis on the font.
     *
     * Note: This function is expensive to be called repeatedly.
     *   If you want to set multiple variation axes at the same time,
     *   use hb_font_set_variations() instead.
     * @param font #hb_font_t to work upon
     * @param tag The #hb_tag_t tag of the variation-axis name
     * @param value The value of the variation axis
     */
    function font_set_variation(font: font_t, tag: tag_t, value: number): void;
    /**
     * Applies a list of font-variation settings to a font.
     *
     * Note that this overrides all existing variations set on `font`.
     * Axes not included in `variations` will be effectively set to their
     * default values.
     * @param font #hb_font_t to work upon
     * @param variations Array of variation settings to apply
     */
    function font_set_variations(font: font_t, variations: variation_t[]): void;
    /**
     * Subtracts the origin coordinates from an (X,Y) point coordinate,
     * in the specified glyph ID in the specified font.
     *
     * Calls the appropriate direction-specific variant (horizontal
     * or vertical) depending on the value of `direction`.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph ID to query
     * @param direction The direction of the text segment
     * @param x Input = The original X coordinate     Output = The X coordinate minus the X-coordinate of the origin
     * @param y Input = The original Y coordinate     Output = The Y coordinate minus the Y-coordinate of the origin
     */
    function font_subtract_glyph_origin_for_direction(
        font: font_t,
        glyph: codepoint_t,
        direction: direction_t,
        x: position_t,
        y: position_t
    ): [/* x */ position_t, /* y */ position_t];
    /**
     * Creates an #hb_face_t face object from the specified FT_Face.
     *
     * Note that this is using the FT_Face object just to get at the underlying
     * font data, and fonts created from the returned #hb_face_t will use the native
     * HarfBuzz font implementation, unless you call hb_ft_font_set_funcs() on them.
     *
     * This variant of the function does not provide any life-cycle management.
     *
     * Most client programs should use hb_ft_face_create_referenced()
     * (or, perhaps, hb_ft_face_create_cached()) instead.
     *
     * If you know you have valid reasons not to use hb_ft_face_create_referenced(),
     * then it is the client program's responsibility to destroy `ft_face`
     * after the #hb_face_t face object has been destroyed.
     * @param ft_face FT_Face to work upon
     * @returns the new #hb_face_t face object
     */
    function ft_face_create(ft_face: freetype2.Face): face_t;
    /**
     * Creates an #hb_face_t face object from the specified FT_Face.
     *
     * Note that this is using the FT_Face object just to get at the underlying
     * font data, and fonts created from the returned #hb_face_t will use the native
     * HarfBuzz font implementation, unless you call hb_ft_font_set_funcs() on them.
     *
     * This variant of the function caches the newly created #hb_face_t
     * face object, using the `generic` pointer of `ft_face`. Subsequent function
     * calls that are passed the same `ft_face` parameter will have the same
     * #hb_face_t returned to them, and that #hb_face_t will be correctly
     * reference counted.
     *
     * However, client programs are still responsible for destroying
     * `ft_face` after the last #hb_face_t face object has been destroyed.
     * @param ft_face FT_Face to work upon
     * @returns the new #hb_face_t face object
     */
    function ft_face_create_cached(ft_face: freetype2.Face): face_t;
    /**
     * Creates an #hb_face_t face object from the specified FT_Face.
     *
     * Note that this is using the FT_Face object just to get at the underlying
     * font data, and fonts created from the returned #hb_face_t will use the native
     * HarfBuzz font implementation, unless you call hb_ft_font_set_funcs() on them.
     *
     * This is the preferred variant of the hb_ft_face_create*
     * function family, because it calls FT_Reference_Face() on `ft_face,`
     * ensuring that `ft_face` remains alive as long as the resulting
     * #hb_face_t face object remains alive. Also calls FT_Done_Face()
     * when the #hb_face_t face object is destroyed.
     *
     * Use this version unless you know you have good reasons not to.
     * @param ft_face FT_Face to work upon
     * @returns the new #hb_face_t face object
     */
    function ft_face_create_referenced(ft_face: freetype2.Face): face_t;
    /**
     * Refreshes the state of `font` when the underlying FT_Face has changed.
     * This function should be called after changing the size or
     * variation-axis settings on the FT_Face.
     * @param font #hb_font_t to work upon
     */
    function ft_font_changed(font: font_t): void;
    /**
     * Creates an #hb_font_t font object from the specified FT_Face.
     *
     * <note>Note: You must set the face size on `ft_face` before calling
     * hb_ft_font_create() on it. HarfBuzz assumes size is always set and will
     * access `size` member of FT_Face unconditionally.</note>
     *
     * This variant of the function does not provide any life-cycle management.
     *
     * Most client programs should use hb_ft_font_create_referenced()
     * instead.
     *
     * If you know you have valid reasons not to use hb_ft_font_create_referenced(),
     * then it is the client program's responsibility to destroy `ft_face`
     * after the #hb_font_t font object has been destroyed.
     *
     * HarfBuzz will use the `destroy` callback on the #hb_font_t font object
     * if it is supplied when you use this function. However, even if `destroy`
     * is provided, it is the client program's responsibility to destroy `ft_face,`
     * and it is the client program's responsibility to ensure that `ft_face` is
     * destroyed only after the #hb_font_t font object has been destroyed.
     * @param ft_face FT_Face to work upon
     * @returns the new #hb_font_t font object
     */
    function ft_font_create(ft_face: freetype2.Face): font_t;
    /**
     * Creates an #hb_font_t font object from the specified FT_Face.
     *
     * <note>Note: You must set the face size on `ft_face` before calling
     * hb_ft_font_create_referenced() on it. HarfBuzz assumes size is always set
     * and will access `size` member of FT_Face unconditionally.</note>
     *
     * This is the preferred variant of the hb_ft_font_create*
     * function family, because it calls FT_Reference_Face() on `ft_face,`
     * ensuring that `ft_face` remains alive as long as the resulting
     * #hb_font_t font object remains alive.
     *
     * Use this version unless you know you have good reasons not to.
     * @param ft_face FT_Face to work upon
     * @returns the new #hb_font_t font object
     */
    function ft_font_create_referenced(ft_face: freetype2.Face): font_t;
    /**
     * Fetches the FT_Load_Glyph load flags of the specified #hb_font_t.
     *
     * For more information, see
     * https://www.freetype.org/freetype2/docs/reference/ft2-base_interface.html#ft_load_xxx
     *
     * This function works with #hb_font_t objects created by
     * hb_ft_font_create() or hb_ft_font_create_referenced().
     * @param font #hb_font_t to work upon
     * @returns FT_Load_Glyph flags found, or 0
     */
    function ft_font_get_load_flags(font: font_t): number;
    /**
     * Configures the font-functions structure of the specified
     * #hb_font_t font object to use FreeType font functions.
     *
     * In particular, you can use this function to configure an
     * existing #hb_face_t face object for use with FreeType font
     * functions even if that #hb_face_t face object was initially
     * created with hb_face_create(), and therefore was not
     * initially configured to use FreeType font functions.
     *
     * An #hb_font_t object created with hb_ft_font_create()
     * is preconfigured for FreeType font functions and does not
     * require this function to be used.
     *
     * Note that if you modify the underlying #hb_font_t after
     * calling this function, you need to call hb_ft_hb_font_changed()
     * to update the underlying FT_Face.
     *
     * <note>Note: Internally, this function creates an FT_Face.
     * </note>
     * @param font #hb_font_t to work upon
     */
    function ft_font_set_funcs(font: font_t): void;
    /**
     * Sets the FT_Load_Glyph load flags for the specified #hb_font_t.
     *
     * For more information, see
     * https://www.freetype.org/freetype2/docs/reference/ft2-base_interface.html#ft_load_xxx
     *
     * This function works with #hb_font_t objects created by
     * hb_ft_font_create() or hb_ft_font_create_referenced().
     * @param font #hb_font_t to work upon
     * @param load_flags The FreeType load flags to set
     */
    function ft_font_set_load_flags(font: font_t, load_flags: number): void;
    /**
     * Refreshes the state of the underlying FT_Face of `font` when the hb_font_t
     * `font` has changed.
     * This function should be called after changing the size or
     * variation-axis settings on the `font`.
     * This call is fast if nothing has changed on `font`.
     * @param font #hb_font_t to work upon
     * @returns true if changed, false otherwise
     */
    function ft_hb_font_changed(font: font_t): bool_t;
    /**
     * Creates an #hb_blob_t blob from the specified
     * GBytes data structure.
     * @param gbytes the GBytes structure to work upon
     * @returns the new #hb_blob_t blob object
     */
    function glib_blob_create(gbytes: GLib.Bytes): blob_t;
    /**
     * Fetches a Unicode-functions structure that is populated
     * with the appropriate GLib function for each method.
     * @returns a pointer to the #hb_unicode_funcs_t Unicode-functions structure
     */
    function glib_get_unicode_funcs(): unicode_funcs_t;
    /**
     * Fetches the GUnicodeScript identifier that corresponds to the
     * specified #hb_script_t script.
     * @param script The #hb_script_t to query
     * @returns the GUnicodeScript identifier found
     */
    function glib_script_from_script(script: script_t): GLib.UnicodeScript;
    /**
     * Fetches the #hb_script_t script that corresponds to the
     * specified GUnicodeScript identifier.
     * @param script The GUnicodeScript identifier to query
     * @returns the #hb_script_t script found
     */
    function glib_script_to_script(script: GLib.UnicodeScript): script_t;
    /**
     * Returns glyph flags encoded within a #hb_glyph_info_t.
     * @param info a #hb_glyph_info_t
     * @returns The #hb_glyph_flags_t encoded within @info
     */
    function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t;
    /**
     * Converts `str` representing a BCP 47 language tag to the corresponding
     * #hb_language_t.
     * @param str a string representing       a BCP 47 language tag
     * @returns  The #hb_language_t corresponding to the BCP 47 language tag.
     */
    function language_from_string(str: Uint8Array): language_t;
    /**
     * Fetch the default language from current locale.
     *
     * <note>Note that the first time this function is called, it calls
     * "setlocale (LC_CTYPE, nullptr)" to fetch current locale.  The underlying
     * setlocale function is, in many implementations, NOT threadsafe.  To avoid
     * problems, call this function once before multiple threads can call it.
     * This function is only used from hb_buffer_guess_segment_properties() by
     * HarfBuzz itself.</note>
     * @returns The default language of the locale as an #hb_language_t
     */
    function language_get_default(): language_t;
    /**
     * Check whether a second language tag is the same or a more
     * specific version of the provided language tag.  For example,
     * "fa_IR.utf8" is a more specific tag for "fa" or for "fa_IR".
     * @param language The #hb_language_t to work on
     * @param specific Another #hb_language_t
     * @returns `true` if languages match, `false` otherwise.
     */
    function language_matches(
        language: language_t,
        specific: language_t
    ): bool_t;
    /**
     * Converts an #hb_language_t to a string.
     * @param language The #hb_language_t to convert
     * @returns  A `NULL`-terminated string representing the @language. Must not be freed by the caller.
     */
    function language_to_string(language: language_t): string | null;
    /**
     * Tests whether memory allocation for a set was successful.
     * @param map A map
     * @returns `true` if allocation succeeded, `false` otherwise
     */
    function map_allocation_successful(map: map_t): bool_t;
    /**
     * Clears out the contents of `map`.
     * @param map A map
     */
    function map_clear(map: map_t): void;
    /**
     * Allocate a copy of `map`.
     * @param map A map
     * @returns Newly-allocated map.
     */
    function map_copy(map: map_t): map_t;
    /**
     * Creates a new, initially empty map.
     * @returns The new #hb_map_t
     */
    function map_create(): map_t;
    /**
     * Removes `key` and its stored value from `map`.
     * @param map A map
     * @param key The key to delete
     */
    function map_del(map: map_t, key: codepoint_t): void;
    /**
     * Fetches the value stored for `key` in `map`.
     * @param map A map
     * @param key The key to query
     */
    function map_get(map: map_t, key: codepoint_t): codepoint_t;
    /**
     * Fetches the singleton empty #hb_map_t.
     * @returns The empty #hb_map_t
     */
    function map_get_empty(): map_t;
    /**
     * Returns the number of key-value pairs in the map.
     * @param map A map
     * @returns The population of @map
     */
    function map_get_population(map: map_t): number;
    /**
     * Tests whether `key` is an element of `map`.
     * @param map A map
     * @param key The key to query
     * @returns `true` if @key is found in @map, `false` otherwise
     */
    function map_has(map: map_t, key: codepoint_t): bool_t;
    /**
     * Creates a hash representing `map`.
     * @param map A map
     * @returns A hash of @map.
     */
    function map_hash(map: map_t): number;
    /**
     * Tests whether `map` is empty (contains no elements).
     * @param map A map
     * @returns `true` if @map is empty
     */
    function map_is_empty(map: map_t): bool_t;
    /**
     * Tests whether `map` and `other` are equal (contain the same
     * elements).
     * @param map A map
     * @param other Another map
     * @returns `true` if the two maps are equal, `false` otherwise.
     */
    function map_is_equal(map: map_t, other: map_t): bool_t;
    /**
     * Add the keys of `map` to `keys`.
     * @param map A map
     * @param keys A set
     */
    function map_keys(map: map_t, keys: set_t): void;
    /**
     * Fetches the next key/value pair in `map`.
     *
     * Set `idx` to -1 to get started.
     *
     * If the map is modified during iteration, the behavior is undefined.
     *
     * The order in which the key/values are returned is undefined.
     * @param map A map
     * @param idx Iterator internal state
     * @returns `true` if there was a next value, `false` otherwise
     */
    function map_next(
        map: map_t,
        idx: number
    ): [
        /* returnType */ bool_t,
        /* idx */ number,
        /* key */ codepoint_t,
        /* value */ codepoint_t
    ];
    /**
     * Stores `key:``value` in the map.
     * @param map A map
     * @param key The key to store in the map
     * @param value The value to store for `key`
     */
    function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void;
    /**
     * Add the contents of `other` to `map`.
     * @param map A map
     * @param other Another map
     */
    function map_update(map: map_t, other: map_t): void;
    /**
     * Add the values of `map` to `values`.
     * @param map A map
     * @param values A set
     */
    function map_values(map: map_t, values: set_t): void;
    /**
     * Fetches a list of all color layers for the specified glyph index in the specified
     * face. The list returned will begin at the offset provided.
     * @param face #hb_face_t to work upon
     * @param glyph The glyph index to query
     * @param start_offset offset of the first layer to retrieve
     * @returns Total number of layers available for the glyph index queried
     */
    function ot_color_glyph_get_layers(
        face: face_t,
        glyph: codepoint_t,
        start_offset: number
    ): [/* returnType */ number, /* layers */ ot_color_layer_t[] | null];
    /**
     * Tests where a face includes COLRv1 paint
     * data for `glyph`.
     * @param face #hb_face_t to work upon
     * @param glyph The glyph index to query
     * @returns `true` if data found, `false` otherwise
     */
    function ot_color_glyph_has_paint(face: face_t, glyph: codepoint_t): bool_t;
    /**
     * Fetches the PNG image for a glyph. This function takes a font object, not a face object,
     * as input. To get an optimally sized PNG blob, the PPEM values must be set on the `font`
     * object. If PPEM is unset, the blob returned will be the largest PNG available.
     *
     * If the glyph has no PNG image, the singleton empty blob is returned.
     * @param font #hb_font_t to work upon
     * @param glyph a glyph index
     * @returns An #hb_blob_t containing the PNG image for the glyph, if available
     */
    function ot_color_glyph_reference_png(
        font: font_t,
        glyph: codepoint_t
    ): blob_t;
    /**
     * Fetches the SVG document for a glyph. The blob may be either plain text or gzip-encoded.
     *
     * If the glyph has no SVG document, the singleton empty blob is returned.
     * @param face #hb_face_t to work upon
     * @param glyph a svg glyph index
     * @returns An #hb_blob_t containing the SVG document of the glyph, if available
     */
    function ot_color_glyph_reference_svg(
        face: face_t,
        glyph: codepoint_t
    ): blob_t;
    /**
     * Tests whether a face includes a `COLR` table
     * with data according to COLRv0.
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function ot_color_has_layers(face: face_t): bool_t;
    /**
     * Tests where a face includes a `COLR` table
     * with data according to COLRv1.
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function ot_color_has_paint(face: face_t): bool_t;
    /**
     * Tests whether a face includes a `CPAL` color-palette table.
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function ot_color_has_palettes(face: face_t): bool_t;
    /**
     * Tests whether a face has PNG glyph images (either in `CBDT` or `sbix` tables).
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function ot_color_has_png(face: face_t): bool_t;
    /**
     * Tests whether a face includes any `SVG` glyph images.
     * @param face #hb_face_t to work upon.
     * @returns `true` if data found, `false` otherwise.
     */
    function ot_color_has_svg(face: face_t): bool_t;
    /**
     * Fetches the `name` table Name ID that provides display names for
     * the specified color in a face's `CPAL` color palette.
     *
     * Display names can be generic (e.g., "Background") or specific
     * (e.g., "Eye color").
     * @param face #hb_face_t to work upon
     * @param color_index The index of the color
     * @returns the Name ID found for the color.
     */
    function ot_color_palette_color_get_name_id(
        face: face_t,
        color_index: number
    ): ot_name_id_t;
    /**
     * Fetches a list of the colors in a color palette.
     *
     * After calling this function, `colors` will be filled with the palette
     * colors. If `colors` is NULL, the function will just return the number
     * of total colors without storing any actual colors; this can be used
     * for allocating a buffer of suitable size before calling
     * hb_ot_color_palette_get_colors() a second time.
     *
     * The RGBA values in the palette are unpremultiplied. See the
     * OpenType spec [CPAL](https://learn.microsoft.com/en-us/typography/opentype/spec/cpal)
     * section for details.
     * @param face #hb_face_t to work upon
     * @param palette_index the index of the color palette to query
     * @param start_offset offset of the first color to retrieve
     * @returns the total number of colors in the palette
     */
    function ot_color_palette_get_colors(
        face: face_t,
        palette_index: number,
        start_offset: number
    ): [/* returnType */ number, /* colors */ color_t[] | null];
    /**
     * Fetches the number of color palettes in a face.
     * @param face #hb_face_t to work upon
     * @returns the number of palettes found
     */
    function ot_color_palette_get_count(face: face_t): number;
    /**
     * Fetches the flags defined for a color palette.
     * @param face #hb_face_t to work upon
     * @param palette_index The index of the color palette
     * @returns the #hb_ot_color_palette_flags_t of the requested color palette
     */
    function ot_color_palette_get_flags(
        face: face_t,
        palette_index: number
    ): ot_color_palette_flags_t;
    /**
     * Fetches the `name` table Name ID that provides display names for
     * a `CPAL` color palette.
     *
     * Palette display names can be generic (e.g., "Default") or provide
     * specific, themed names (e.g., "Spring", "Summer", "Fall", and "Winter").
     * @param face #hb_face_t to work upon
     * @param palette_index The index of the color palette
     * @returns the Named ID found for the palette. If the requested palette has no name the result is #HB_OT_NAME_ID_INVALID.
     */
    function ot_color_palette_get_name_id(
        face: face_t,
        palette_index: number
    ): ot_name_id_t;
    /**
     * Sets the font functions to use when working with `font`.
     * @param font #hb_font_t to work upon
     */
    function ot_font_set_funcs(font: font_t): void;
    /**
     * Fetches a list of all feature indexes in the specified face's GSUB table
     * or GPOS table, underneath the specified scripts, languages, and features.
     * If no list of scripts is provided, all scripts will be queried. If no list
     * of languages is provided, all languages will be queried. If no list of
     * features is provided, all features will be queried.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param scripts The array of scripts to collect features for,   terminated by %HB_TAG_NONE
     * @param languages The array of languages to collect features for,   terminated by %HB_TAG_NONE
     * @param features The array of features to collect,   terminated by %HB_TAG_NONE
     */
    function ot_layout_collect_features(
        face: face_t,
        table_tag: tag_t,
        scripts: tag_t[] | null,
        languages: tag_t[] | null,
        features: tag_t[] | null
    ): /* feature_indexes */ set_t;
    /**
     * Fetches the mapping from feature tags to feature indexes for
     * the specified script and language.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_index The index of the requested language tag
     */
    function ot_layout_collect_features_map(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_index: number
    ): /* feature_map */ map_t;
    /**
     * Fetches a list of all feature-lookup indexes in the specified face's GSUB
     * table or GPOS table, underneath the specified scripts, languages, and
     * features. If no list of scripts is provided, all scripts will be queried.
     * If no list of languages is provided, all languages will be queried. If no
     * list of features is provided, all features will be queried.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param scripts The array of scripts to collect lookups for,   terminated by %HB_TAG_NONE
     * @param languages The array of languages to collect lookups for,   terminated by %HB_TAG_NONE
     * @param features The array of features to collect lookups for,   terminated by %HB_TAG_NONE
     */
    function ot_layout_collect_lookups(
        face: face_t,
        table_tag: tag_t,
        scripts: tag_t[] | null,
        languages: tag_t[] | null,
        features: tag_t[] | null
    ): /* lookup_indexes */ set_t;
    /**
     * Fetches a list of the characters defined as having a variant under the specified
     * "Character Variant" ("cvXX") feature tag.
     * @param face #hb_face_t to work upon
     * @param table_tag table tag to query, "GSUB" or "GPOS".
     * @param feature_index index of feature to query.
     * @param start_offset offset of the first character to retrieve
     * @returns Number of total sample characters in the cvXX feature.
     */
    function ot_layout_feature_get_characters(
        face: face_t,
        table_tag: tag_t,
        feature_index: number,
        start_offset: number
    ): [/* returnType */ number, /* characters */ codepoint_t[]];
    /**
     * Fetches a list of all lookups enumerated for the specified feature, in
     * the specified face's GSUB table or GPOS table. The list returned will
     * begin at the offset provided.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param feature_index The index of the requested feature
     * @param start_offset offset of the first lookup to retrieve
     * @returns Total number of lookups.
     */
    function ot_layout_feature_get_lookups(
        face: face_t,
        table_tag: tag_t,
        feature_index: number,
        start_offset: number
    ): [/* returnType */ number, /* lookup_indexes */ number[]];
    /**
     * Fetches name indices from feature parameters for "Stylistic Set" ('ssXX') or
     * "Character Variant" ('cvXX') features.
     * @param face #hb_face_t to work upon
     * @param table_tag table tag to query, "GSUB" or "GPOS".
     * @param feature_index index of feature to query.
     * @returns `true` if data found, `false` otherwise
     */
    function ot_layout_feature_get_name_ids(
        face: face_t,
        table_tag: tag_t,
        feature_index: number
    ): [
        /* returnType */ bool_t,
        /* label_id */ ot_name_id_t,
        /* tooltip_id */ ot_name_id_t,
        /* sample_id */ ot_name_id_t,
        /* num_named_parameters */ number,
        /* first_param_id */ ot_name_id_t
    ];
    /**
     * Fetches a list of all lookups enumerated for the specified feature, in
     * the specified face's GSUB table or GPOS table, enabled at the specified
     * variations index. The list returned will begin at the offset provided.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param feature_index The index of the feature to query
     * @param variations_index The index of the feature variation to query
     * @param start_offset offset of the first lookup to retrieve
     * @returns Total number of lookups.
     */
    function ot_layout_feature_with_variations_get_lookups(
        face: face_t,
        table_tag: tag_t,
        feature_index: number,
        variations_index: number,
        start_offset: number
    ): [/* returnType */ number, /* lookup_indexes */ number[]];
    /**
     * Fetches a list of all attachment points for the specified glyph in the GDEF
     * table of the face. The list returned will begin at the offset provided.
     *
     * Useful if the client program wishes to cache the list.
     * @param face The #hb_face_t to work on
     * @param glyph The #hb_codepoint_t code point to query
     * @param start_offset offset of the first attachment point to retrieve
     * @returns Total number of attachment points for @glyph.
     */
    function ot_layout_get_attach_points(
        face: face_t,
        glyph: codepoint_t,
        start_offset: number
    ): [/* returnType */ number, /* point_array */ number[]];
    /**
     * Fetches a baseline value from the face.
     * @param font a font
     * @param baseline_tag a baseline tag
     * @param direction text direction.
     * @param script_tag script tag.
     * @param language_tag language tag, currently unused.
     * @returns `true` if found baseline value in the font.
     */
    function ot_layout_get_baseline(
        font: font_t,
        baseline_tag: ot_layout_baseline_tag_t,
        direction: direction_t,
        script_tag: tag_t,
        language_tag: tag_t
    ): [/* returnType */ bool_t, /* coord */ position_t | null];
    /**
     * Fetches a baseline value from the face.
     *
     * This function is like hb_ot_layout_get_baseline() but takes
     * #hb_script_t and #hb_language_t instead of OpenType #hb_tag_t.
     * @param font a font
     * @param baseline_tag a baseline tag
     * @param direction text direction.
     * @param script script.
     * @param language language, currently unused.
     * @returns `true` if found baseline value in the font.
     */
    function ot_layout_get_baseline2(
        font: font_t,
        baseline_tag: ot_layout_baseline_tag_t,
        direction: direction_t,
        script: script_t,
        language: language_t | null
    ): [/* returnType */ bool_t, /* coord */ position_t | null];
    /**
     * Fetches a baseline value from the face, and synthesizes
     * it if the font does not have it.
     * @param font a font
     * @param baseline_tag a baseline tag
     * @param direction text direction.
     * @param script_tag script tag.
     * @param language_tag language tag, currently unused.
     */
    function ot_layout_get_baseline_with_fallback(
        font: font_t,
        baseline_tag: ot_layout_baseline_tag_t,
        direction: direction_t,
        script_tag: tag_t,
        language_tag: tag_t
    ): /* coord */ position_t;
    /**
     * Fetches a baseline value from the face, and synthesizes
     * it if the font does not have it.
     *
     * This function is like hb_ot_layout_get_baseline_with_fallback() but takes
     * #hb_script_t and #hb_language_t instead of OpenType #hb_tag_t.
     * @param font a font
     * @param baseline_tag a baseline tag
     * @param direction text direction.
     * @param script script.
     * @param language language, currently unused.
     */
    function ot_layout_get_baseline_with_fallback2(
        font: font_t,
        baseline_tag: ot_layout_baseline_tag_t,
        direction: direction_t,
        script: script_t,
        language: language_t | null
    ): /* coord */ position_t;
    /**
     * Fetches script/language-specific font extents.  These values are
     * looked up in the `BASE` table's `MinMax` records.
     *
     * If no such extents are found, the default extents for the font are
     * fetched. As such, the return value of this function can for the
     * most part be ignored.  Note that the per-script/language extents
     * do not have a line-gap value, and the line-gap is set to zero in
     * that case.
     * @param font a font
     * @param direction text direction.
     * @param script_tag script tag.
     * @param language_tag language tag.
     * @returns `true` if found script/language-specific font extents.
     */
    function ot_layout_get_font_extents(
        font: font_t,
        direction: direction_t,
        script_tag: tag_t,
        language_tag: tag_t
    ): [/* returnType */ bool_t, /* extents */ font_extents_t | null];
    /**
     * Fetches script/language-specific font extents.  These values are
     * looked up in the `BASE` table's `MinMax` records.
     *
     * If no such extents are found, the default extents for the font are
     * fetched. As such, the return value of this function can for the
     * most part be ignored.  Note that the per-script/language extents
     * do not have a line-gap value, and the line-gap is set to zero in
     * that case.
     *
     * This function is like hb_ot_layout_get_font_extents() but takes
     * #hb_script_t and #hb_language_t instead of OpenType #hb_tag_t.
     * @param font a font
     * @param direction text direction.
     * @param script script.
     * @param language language.
     * @returns `true` if found script/language-specific font extents.
     */
    function ot_layout_get_font_extents2(
        font: font_t,
        direction: direction_t,
        script: script_t,
        language: language_t | null
    ): [/* returnType */ bool_t, /* extents */ font_extents_t | null];
    /**
     * Fetches the GDEF class of the requested glyph in the specified face.
     * @param face The #hb_face_t to work on
     * @param glyph The #hb_codepoint_t code point to query
     * @returns The #hb_ot_layout_glyph_class_t glyph class of the given code point in the GDEF table of the face.
     */
    function ot_layout_get_glyph_class(
        face: face_t,
        glyph: codepoint_t
    ): ot_layout_glyph_class_t;
    /**
     * Retrieves the set of all glyphs from the face that belong to the requested
     * glyph class in the face's GDEF table.
     * @param face The #hb_face_t to work on
     * @param klass The #hb_ot_layout_glyph_class_t GDEF class to retrieve
     */
    function ot_layout_get_glyphs_in_class(
        face: face_t,
        klass: ot_layout_glyph_class_t
    ): /* glyphs */ set_t;
    /**
     * Fetches the dominant horizontal baseline tag used by `script`.
     * @param script a script tag.
     * @returns dominant baseline tag for the @script.
     */
    function ot_layout_get_horizontal_baseline_tag_for_script(
        script: script_t
    ): ot_layout_baseline_tag_t;
    /**
     * Fetches a list of the caret positions defined for a ligature glyph in the GDEF
     * table of the font. The list returned will begin at the offset provided.
     *
     * Note that a ligature that is formed from n characters will have n-1
     * caret positions. The first character is not represented in the array,
     * since its caret position is the glyph position.
     *
     * The positions returned by this function are 'unshaped', and will have to
     * be fixed up for kerning that may be applied to the ligature glyph.
     * @param font The #hb_font_t to work on
     * @param direction The #hb_direction_t text direction to use
     * @param glyph The #hb_codepoint_t code point to query
     * @param start_offset offset of the first caret position to retrieve
     * @returns Total number of ligature caret positions for @glyph.
     */
    function ot_layout_get_ligature_carets(
        font: font_t,
        direction: direction_t,
        glyph: codepoint_t,
        start_offset: number
    ): [/* returnType */ number, /* caret_array */ position_t[]];
    /**
     * Fetches optical-size feature data (i.e., the `size` feature from GPOS). Note that
     * the subfamily_id and the subfamily name string (accessible via the subfamily_name_id)
     * as used here are defined as pertaining only to fonts within a font family that differ
     * specifically in their respective size ranges; other ways to differentiate fonts within
     * a subfamily are not covered by the `size` feature.
     *
     * For more information on this distinction, see the [`size` feature documentation](
     * https://docs.microsoft.com/en-us/typography/opentype/spec/features_pt#tag-size).
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function ot_layout_get_size_params(
        face: face_t
    ): [
        /* returnType */ bool_t,
        /* design_size */ number,
        /* subfamily_id */ number,
        /* subfamily_name_id */ ot_name_id_t,
        /* range_start */ number,
        /* range_end */ number
    ];
    /**
     * Tests whether a face has any glyph classes defined in its GDEF table.
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function ot_layout_has_glyph_classes(face: face_t): bool_t;
    /**
     * Tests whether the specified face includes any GPOS positioning.
     * @param face #hb_face_t to work upon
     * @returns `true` if the face has GPOS data, `false` otherwise
     */
    function ot_layout_has_positioning(face: face_t): bool_t;
    /**
     * Tests whether the specified face includes any GSUB substitutions.
     * @param face #hb_face_t to work upon
     * @returns `true` if data found, `false` otherwise
     */
    function ot_layout_has_substitution(face: face_t): bool_t;
    /**
     * Fetches the index of a given feature tag in the specified face's GSUB table
     * or GPOS table, underneath the specified script and language.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_index The index of the requested language tag
     * @param feature_tag #hb_tag_t of the feature tag requested
     * @returns `true` if the feature is found, `false` otherwise
     */
    function ot_layout_language_find_feature(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_index: number,
        feature_tag: tag_t
    ): [/* returnType */ bool_t, /* feature_index */ number];
    /**
     * Fetches a list of all features in the specified face's GSUB table
     * or GPOS table, underneath the specified script and language. The list
     * returned will begin at the offset provided.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_index The index of the requested language tag
     * @param start_offset offset of the first feature tag to retrieve
     * @returns Total number of features.
     */
    function ot_layout_language_get_feature_indexes(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_index: number,
        start_offset: number
    ): [/* returnType */ number, /* feature_indexes */ number[]];
    /**
     * Fetches a list of all features in the specified face's GSUB table
     * or GPOS table, underneath the specified script and language. The list
     * returned will begin at the offset provided.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_index The index of the requested language tag
     * @param start_offset offset of the first feature tag to retrieve
     * @returns Total number of feature tags.
     */
    function ot_layout_language_get_feature_tags(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_index: number,
        start_offset: number
    ): [/* returnType */ number, /* feature_tags */ tag_t[]];
    /**
     * Fetches the tag of a requested feature index in the given face's GSUB or GPOS table,
     * underneath the specified script and language.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_index The index of the requested language tag
     * @returns `true` if the feature is found, `false` otherwise
     */
    function ot_layout_language_get_required_feature(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_index: number
    ): [
        /* returnType */ bool_t,
        /* feature_index */ number,
        /* feature_tag */ tag_t
    ];
    /**
     * Fetches the index of a requested feature in the given face's GSUB or GPOS table,
     * underneath the specified script and language.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_index The index of the requested language tag
     * @returns `true` if the feature is found, `false` otherwise
     */
    function ot_layout_language_get_required_feature_index(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_index: number
    ): [/* returnType */ bool_t, /* feature_index */ number];
    /**
     * Fetches a list of all glyphs affected by the specified lookup in the
     * specified face's GSUB table or GPOS table.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param lookup_index The index of the feature lookup to query
     */
    function ot_layout_lookup_collect_glyphs(
        face: face_t,
        table_tag: tag_t,
        lookup_index: number
    ): [
        /* glyphs_before */ set_t,
        /* glyphs_input */ set_t,
        /* glyphs_after */ set_t,
        /* glyphs_output */ set_t
    ];
    /**
     * Fetches alternates of a glyph from a given GSUB lookup index.
     * @param face a face.
     * @param lookup_index index of the feature lookup to query.
     * @param glyph a glyph id.
     * @param start_offset starting offset.
     * @returns Total number of alternates found in the specific lookup index for the given glyph id.
     */
    function ot_layout_lookup_get_glyph_alternates(
        face: face_t,
        lookup_index: number,
        glyph: codepoint_t,
        start_offset: number
    ): [/* returnType */ number, /* alternate_glyphs */ codepoint_t[]];
    /**
     * Fetches the optical bound of a glyph positioned at the margin of text.
     * The direction identifies which edge of the glyph to query.
     * @param font a font.
     * @param lookup_index index of the feature lookup to query.
     * @param direction edge of the glyph to query.
     * @param glyph a glyph id.
     * @returns Adjustment value. Negative values mean the glyph will stick out of the margin.
     */
    function ot_layout_lookup_get_optical_bound(
        font: font_t,
        lookup_index: number,
        direction: direction_t,
        glyph: codepoint_t
    ): position_t;
    /**
     * Compute the transitive closure of glyphs needed for a
     * specified lookup.
     * @param face #hb_face_t to work upon
     * @param lookup_index index of the feature lookup to query
     */
    function ot_layout_lookup_substitute_closure(
        face: face_t,
        lookup_index: number
    ): /* glyphs */ set_t;
    /**
     * Tests whether a specified lookup in the specified face would
     * trigger a substitution on the given glyph sequence.
     * @param face #hb_face_t to work upon
     * @param lookup_index The index of the lookup to query
     * @param glyphs The sequence of glyphs to query for substitution
     * @param glyphs_length The length of the glyph sequence
     * @param zero_context #hb_bool_t indicating whether pre-/post-context are disallowed in substitutions
     * @returns `true` if a substitution would be triggered, `false` otherwise
     */
    function ot_layout_lookup_would_substitute(
        face: face_t,
        lookup_index: number,
        glyphs: codepoint_t,
        glyphs_length: number,
        zero_context: bool_t
    ): bool_t;
    /**
     * Compute the transitive closure of glyphs needed for all of the
     * provided lookups.
     * @param face #hb_face_t to work upon
     * @param lookups The set of lookups to query
     */
    function ot_layout_lookups_substitute_closure(
        face: face_t,
        lookups: set_t
    ): /* glyphs */ set_t;
    /**
     * Fetches the index of a given language tag in the specified face's GSUB table
     * or GPOS table, underneath the specified script tag.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_tag The #hb_tag_t of the requested language
     * @param language_index The index of the requested language
     * @returns `true` if the language tag is found, `false` otherwise
     */
    function ot_layout_script_find_language(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_tag: tag_t,
        language_index: number
    ): bool_t;
    /**
     * Fetches a list of language tags in the given face's GSUB or GPOS table, underneath
     * the specified script index. The list returned will begin at the offset provided.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param start_offset offset of the first language tag to retrieve
     * @returns Total number of language tags.
     */
    function ot_layout_script_get_language_tags(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        start_offset: number
    ): [/* returnType */ number, /* language_tags */ tag_t[]];
    /**
     * Fetches the index of the first language tag fom `language_tags` that is present
     * in the specified face's GSUB or GPOS table, underneath the specified script
     * index.
     *
     * If none of the given language tags is found, `false` is returned and
     * `language_index` is set to the default language index.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_count The number of languages in the specified script
     * @param language_tags The array of language tags
     * @returns `true` if one of the given language tags is found, `false` otherwise
     */
    function ot_layout_script_select_language(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_count: number,
        language_tags: tag_t
    ): [/* returnType */ bool_t, /* language_index */ number];
    /**
     * Fetches the index of the first language tag fom `language_tags` that is present
     * in the specified face's GSUB or GPOS table, underneath the specified script
     * index.
     *
     * If none of the given language tags is found, `false` is returned and
     * `language_index` is set to #HB_OT_LAYOUT_DEFAULT_LANGUAGE_INDEX and
     * `chosen_language` is set to #HB_TAG_NONE.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_index The index of the requested script tag
     * @param language_count The number of languages in the specified script
     * @param language_tags The array of language tags
     * @returns `true` if one of the given language tags is found, `false` otherwise
     */
    function ot_layout_script_select_language2(
        face: face_t,
        table_tag: tag_t,
        script_index: number,
        language_count: number,
        language_tags: tag_t
    ): [
        /* returnType */ bool_t,
        /* language_index */ number,
        /* chosen_language */ tag_t
    ];
    /**
     * Deprecated since 2.0.0
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_tags Array of #hb_tag_t script tags
     */
    function ot_layout_table_choose_script(
        face: face_t,
        table_tag: tag_t,
        script_tags: tag_t
    ): [
        /* returnType */ bool_t,
        /* script_index */ number,
        /* chosen_script */ tag_t
    ];
    /**
     * Fetches a list of feature variations in the specified face's GSUB table
     * or GPOS table, at the specified variation coordinates.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param coords The variation coordinates to query
     * @param num_coords The number of variation coordinates
     * @returns `true` if feature variations were found, `false` otherwise.
     */
    function ot_layout_table_find_feature_variations(
        face: face_t,
        table_tag: tag_t,
        coords: number,
        num_coords: number
    ): [/* returnType */ bool_t, /* variations_index */ number];
    /**
     * Fetches the index if a given script tag in the specified face's GSUB table
     * or GPOS table.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_tag #hb_tag_t of the script tag requested
     * @returns `true` if the script is found, `false` otherwise
     */
    function ot_layout_table_find_script(
        face: face_t,
        table_tag: tag_t,
        script_tag: tag_t
    ): [/* returnType */ bool_t, /* script_index */ number];
    /**
     * Fetches a list of all feature tags in the given face's GSUB or GPOS table.
     * Note that there might be duplicate feature tags, belonging to different
     * script/language-system pairs of the table.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param start_offset offset of the first feature tag to retrieve
     * @returns Total number of feature tags.
     */
    function ot_layout_table_get_feature_tags(
        face: face_t,
        table_tag: tag_t,
        start_offset: number
    ): [/* returnType */ number, /* feature_tags */ tag_t[]];
    /**
     * Fetches the total number of lookups enumerated in the specified
     * face's GSUB table or GPOS table.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @returns Total number of lookups.
     */
    function ot_layout_table_get_lookup_count(
        face: face_t,
        table_tag: tag_t
    ): number;
    /**
     * Fetches a list of all scripts enumerated in the specified face's GSUB table
     * or GPOS table. The list returned will begin at the offset provided.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param start_offset offset of the first script tag to retrieve
     * @returns Total number of script tags.
     */
    function ot_layout_table_get_script_tags(
        face: face_t,
        table_tag: tag_t,
        start_offset: number
    ): [/* returnType */ number, /* script_tags */ tag_t[]];
    /**
     * Selects an OpenType script for `table_tag` from the `script_tags` array.
     *
     * If the table does not have any of the requested scripts, then `DFLT`,
     * `dflt`, and `latn` tags are tried in that order. If the table still does not
     * have any of these scripts, `script_index` is set to
     * #HB_OT_LAYOUT_NO_SCRIPT_INDEX and `chosen_script` is set to #HB_TAG_NONE.
     * @param face #hb_face_t to work upon
     * @param table_tag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
     * @param script_count Number of script tags in the array
     * @param script_tags Array of #hb_tag_t script tags
     * @returns `true` if one of the requested scripts is selected, `false` if a fallback script is selected or if no scripts are selected.
     */
    function ot_layout_table_select_script(
        face: face_t,
        table_tag: tag_t,
        script_count: number,
        script_tags: tag_t
    ): [
        /* returnType */ bool_t,
        /* script_index */ number,
        /* chosen_script */ tag_t
    ];
    /**
     * Fetches the specified math constant. For most constants, the value returned
     * is an #hb_position_t.
     *
     * However, if the requested constant is #HB_OT_MATH_CONSTANT_SCRIPT_PERCENT_SCALE_DOWN,
     * #HB_OT_MATH_CONSTANT_SCRIPT_SCRIPT_PERCENT_SCALE_DOWN or
     * #HB_OT_MATH_CONSTANT_RADICAL_DEGREE_BOTTOM_RAISE_PERCENT, then the return value is
     * an integer between 0 and 100 representing that percentage.
     * @param font #hb_font_t to work upon
     * @param constant #hb_ot_math_constant_t the constant to retrieve
     * @returns the requested constant or zero
     */
    function ot_math_get_constant(
        font: font_t,
        constant: ot_math_constant_t
    ): position_t;
    /**
     * Fetches the GlyphAssembly for the specified font, glyph index, and direction.
     * Returned are a list of #hb_ot_math_glyph_part_t glyph parts that can be
     * used to draw the glyph and an italics-correction value (if one is defined
     * in the font).
     *
     * <note>The `direction` parameter is only used to select between horizontal
     * or vertical directions for the construction. Even though all #hb_direction_t
     * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
     * considered.</note>
     * @param font #hb_font_t to work upon
     * @param glyph The index of the glyph to stretch
     * @param direction direction of the stretching (horizontal or vertical)
     * @param start_offset offset of the first glyph part to retrieve
     * @returns the total number of parts in the glyph assembly
     */
    function ot_math_get_glyph_assembly(
        font: font_t,
        glyph: codepoint_t,
        direction: direction_t,
        start_offset: number
    ): [
        /* returnType */ number,
        /* parts */ ot_math_glyph_part_t[],
        /* italics_correction */ position_t
    ];
    /**
     * Fetches an italics-correction value (if one exists) for the specified
     * glyph index.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph index from which to retrieve the value
     * @returns the italics correction of the glyph or zero
     */
    function ot_math_get_glyph_italics_correction(
        font: font_t,
        glyph: codepoint_t
    ): position_t;
    /**
     * Fetches the math kerning (cut-ins) value for the specified font, glyph index, and
     * `kern`.
     *
     * If the MathKern table is found, the function examines it to find a height
     * value that is greater or equal to `correction_height`. If such a height
     * value is found, corresponding kerning value from the table is returned. If
     * no such height value is found, the last kerning value is returned.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph index from which to retrieve the value
     * @param kern The #hb_ot_math_kern_t from which to retrieve the value
     * @param correction_height the correction height to use to determine the kerning.
     * @returns requested kerning value or zero
     */
    function ot_math_get_glyph_kerning(
        font: font_t,
        glyph: codepoint_t,
        kern: ot_math_kern_t,
        correction_height: position_t
    ): position_t;
    /**
     * Fetches the raw MathKern (cut-in) data for the specified font, glyph index,
     * and `kern`. The corresponding list of kern values and correction heights is
     * returned as a list of #hb_ot_math_kern_entry_t structs.
     *
     * See also #hb_ot_math_get_glyph_kerning, which handles selecting the
     * appropriate kern value for a given correction height.
     *
     * <note>For a glyph with `n` defined kern values (where `n` > 0), there are only
     * `n−`1 defined correction heights, as each correction height defines a boundary
     * past which the next kern value should be selected. Therefore, only the
     * #hb_ot_math_kern_entry_t.kern_value of the uppermost #hb_ot_math_kern_entry_t
     * actually comes from the font; its corresponding
     * #hb_ot_math_kern_entry_t.max_correction_height is always set to
     * <code>INT32_MAX</code>.</note>
     * @param font #hb_font_t to work upon
     * @param glyph The glyph index from which to retrieve the kernings
     * @param kern The #hb_ot_math_kern_t from which to retrieve the kernings
     * @param start_offset offset of the first kern entry to retrieve
     * @returns the total number of kern values available or zero
     */
    function ot_math_get_glyph_kernings(
        font: font_t,
        glyph: codepoint_t,
        kern: ot_math_kern_t,
        start_offset: number
    ): [/* returnType */ number, /* kern_entries */ ot_math_kern_entry_t[]];
    /**
     * Fetches a top-accent-attachment value (if one exists) for the specified
     * glyph index.
     *
     * For any glyph that does not have a top-accent-attachment value - that is,
     * a glyph not covered by the `MathTopAccentAttachment` table (or, when
     * `font` has no `MathTopAccentAttachment` table or no `MATH` table, any
     * glyph) - the function synthesizes a value, returning the position at
     * one-half the glyph's advance width.
     * @param font #hb_font_t to work upon
     * @param glyph The glyph index from which to retrieve the value
     * @returns the top accent attachment of the glyph or 0.5 * the advance               width of @glyph
     */
    function ot_math_get_glyph_top_accent_attachment(
        font: font_t,
        glyph: codepoint_t
    ): position_t;
    /**
     * Fetches the MathGlyphConstruction for the specified font, glyph index, and
     * direction. The corresponding list of size variants is returned as a list of
     * #hb_ot_math_glyph_variant_t structs.
     *
     * <note>The `direction` parameter is only used to select between horizontal
     * or vertical directions for the construction. Even though all #hb_direction_t
     * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
     * considered.</note>
     * @param font #hb_font_t to work upon
     * @param glyph The index of the glyph to stretch
     * @param direction The direction of the stretching (horizontal or vertical)
     * @param start_offset offset of the first variant to retrieve
     * @returns the total number of size variants available or zero
     */
    function ot_math_get_glyph_variants(
        font: font_t,
        glyph: codepoint_t,
        direction: direction_t,
        start_offset: number
    ): [/* returnType */ number, /* variants */ ot_math_glyph_variant_t[]];
    /**
     * Fetches the MathVariants table for the specified font and returns the
     * minimum overlap of connecting glyphs that are required to draw a glyph
     * assembly in the specified direction.
     *
     * <note>The `direction` parameter is only used to select between horizontal
     * or vertical directions for the construction. Even though all #hb_direction_t
     * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
     * considered.</note>
     * @param font #hb_font_t to work upon
     * @param direction direction of the stretching (horizontal or vertical)
     * @returns requested minimum connector overlap or zero
     */
    function ot_math_get_min_connector_overlap(
        font: font_t,
        direction: direction_t
    ): position_t;
    /**
     * Tests whether a face has a `MATH` table.
     * @param face #hb_face_t to test
     * @returns `true` if the table is found, `false` otherwise
     */
    function ot_math_has_data(face: face_t): bool_t;
    /**
     * Tests whether the given glyph index is an extended shape in the face.
     * @param face #hb_face_t to work upon
     * @param glyph The glyph index to test
     * @returns `true` if the glyph is an extended shape, `false` otherwise
     */
    function ot_math_is_glyph_extended_shape(
        face: face_t,
        glyph: codepoint_t
    ): bool_t;
    /**
     * Fetches all available feature types.
     * @param face a face object
     * @param start_offset iteration's start offset
     * @returns Number of all available feature types.
     */
    function ot_meta_get_entry_tags(
        face: face_t,
        start_offset: number
    ): [/* returnType */ number, /* entries */ ot_meta_tag_t[]];
    /**
     * It fetches metadata entry of a given tag from a font.
     * @param face a #hb_face_t object.
     * @param meta_tag tag of metadata you like to have.
     * @returns A blob containing the blob.
     */
    function ot_meta_reference_entry(
        face: face_t,
        meta_tag: ot_meta_tag_t
    ): blob_t;
    /**
     * Fetches metrics value corresponding to `metrics_tag` from `font`.
     * @param font an #hb_font_t object.
     * @param metrics_tag tag of metrics value you like to fetch.
     * @returns Whether found the requested metrics in the font.
     */
    function ot_metrics_get_position(
        font: font_t,
        metrics_tag: ot_metrics_tag_t
    ): [/* returnType */ bool_t, /* position */ position_t];
    /**
     * Fetches metrics value corresponding to `metrics_tag` from `font,`
     * and synthesizes a value if it the value is missing in the font.
     * @param font an #hb_font_t object.
     * @param metrics_tag tag of metrics value you like to fetch.
     */
    function ot_metrics_get_position_with_fallback(
        font: font_t,
        metrics_tag: ot_metrics_tag_t
    ): /* position */ position_t;
    /**
     * Fetches metrics value corresponding to `metrics_tag` from `font` with the
     * current font variation settings applied.
     * @param font an #hb_font_t object.
     * @param metrics_tag tag of metrics value you like to fetch.
     * @returns The requested metric value.
     */
    function ot_metrics_get_variation(
        font: font_t,
        metrics_tag: ot_metrics_tag_t
    ): number;
    /**
     * Fetches horizontal metrics value corresponding to `metrics_tag` from `font`
     * with the current font variation settings applied.
     * @param font an #hb_font_t object.
     * @param metrics_tag tag of metrics value you like to fetch.
     * @returns The requested metric value.
     */
    function ot_metrics_get_x_variation(
        font: font_t,
        metrics_tag: ot_metrics_tag_t
    ): position_t;
    /**
     * Fetches vertical metrics value corresponding to `metrics_tag` from `font` with
     * the current font variation settings applied.
     * @param font an #hb_font_t object.
     * @param metrics_tag tag of metrics value you like to fetch.
     * @returns The requested metric value.
     */
    function ot_metrics_get_y_variation(
        font: font_t,
        metrics_tag: ot_metrics_tag_t
    ): position_t;
    /**
     * Fetches a font name from the OpenType 'name' table.
     * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
     * Returns string in UTF-16 encoding. A NUL terminator is always written
     * for convenience, and isn't included in the output `text_size`.
     * @param face font face.
     * @param name_id OpenType name identifier to fetch.
     * @param language language to fetch the name for.
     * @returns full length of the requested string, or 0 if not found.
     */
    function ot_name_get_utf16(
        face: face_t,
        name_id: ot_name_id_t,
        language: language_t
    ): [/* returnType */ number, /* text */ number[]];
    /**
     * Fetches a font name from the OpenType 'name' table.
     * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
     * Returns string in UTF-32 encoding. A NUL terminator is always written
     * for convenience, and isn't included in the output `text_size`.
     * @param face font face.
     * @param name_id OpenType name identifier to fetch.
     * @param language language to fetch the name for.
     * @returns full length of the requested string, or 0 if not found.
     */
    function ot_name_get_utf32(
        face: face_t,
        name_id: ot_name_id_t,
        language: language_t
    ): [/* returnType */ number, /* text */ number[]];
    /**
     * Fetches a font name from the OpenType 'name' table.
     * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
     * Returns string in UTF-8 encoding. A NUL terminator is always written
     * for convenience, and isn't included in the output `text_size`.
     * @param face font face.
     * @param name_id OpenType name identifier to fetch.
     * @param language language to fetch the name for.
     * @returns full length of the requested string, or 0 if not found.
     */
    function ot_name_get_utf8(
        face: face_t,
        name_id: ot_name_id_t,
        language: language_t
    ): [/* returnType */ number, /* text */ string[]];
    /**
     * Enumerates all available name IDs and language combinations. Returned
     * array is owned by the `face` and should not be modified.  It can be
     * used as long as `face` is alive.
     * @param face font face.
     * @returns Array of available name entries.
     */
    function ot_name_list_names(face: face_t): ot_name_entry_t[];
    /**
     * Computes the transitive closure of glyphs needed for a specified
     * input buffer under the given font and feature list. The closure is
     * computed as a set, not as a list.
     * @param font #hb_font_t to work upon
     * @param buffer The input buffer to compute from
     * @param features The features enabled on the buffer
     */
    function ot_shape_glyphs_closure(
        font: font_t,
        buffer: buffer_t,
        features: feature_t[]
    ): /* glyphs */ set_t;
    /**
     * Computes the complete set of GSUB or GPOS lookups that are applicable
     * under a given `shape_plan`.
     * @param shape_plan #hb_shape_plan_t to query
     * @param table_tag GSUB or GPOS
     */
    function ot_shape_plan_collect_lookups(
        shape_plan: shape_plan_t,
        table_tag: tag_t
    ): /* lookup_indexes */ set_t;
    /**
     * Converts an #hb_language_t to an #hb_tag_t.
     * @param language an #hb_language_t to convert.
     */
    function ot_tag_from_language(language: language_t): tag_t;
    /**
     * Converts a language tag to an #hb_language_t.
     * @param tag an language tag
     * @returns  The #hb_language_t corresponding to @tag.
     */
    function ot_tag_to_language(tag: tag_t): language_t | null;
    /**
     * Converts a script tag to an #hb_script_t.
     * @param tag a script tag
     * @returns The #hb_script_t corresponding to @tag.
     */
    function ot_tag_to_script(tag: tag_t): script_t;
    /**
     * Converts an #hb_script_t to script tags.
     * @param script an #hb_script_t to convert.
     */
    function ot_tags_from_script(
        script: script_t
    ): [/* script_tag_1 */ tag_t, /* script_tag_2 */ tag_t];
    /**
     * Converts an #hb_script_t and an #hb_language_t to script and language tags.
     * @param script an #hb_script_t to convert.
     * @param language an #hb_language_t to convert.
     * @param script_count maximum number of script tags to retrieve (IN) and actual number of script tags retrieved (OUT)
     * @param language_count maximum number of language tags to retrieve (IN) and actual number of language tags retrieved (OUT)
     */
    function ot_tags_from_script_and_language(
        script: script_t,
        language: language_t | null,
        script_count?: number,
        language_count?: number
    ): [
        /* script_count */ number,
        /* script_tags */ tag_t,
        /* language_count */ number,
        /* language_tags */ tag_t
    ];
    /**
     * Converts a script tag and a language tag to an #hb_script_t and an
     * #hb_language_t.
     * @param script_tag a script tag
     * @param language_tag a language tag
     */
    function ot_tags_to_script_and_language(
        script_tag: tag_t,
        language_tag: tag_t
    ): [/* script */ script_t, /* language */ language_t];
    /**
     * Fetches the variation-axis information corresponding to the specified axis tag
     * in the specified face.
     * @param face #hb_face_t to work upon
     * @param axis_tag The #hb_tag_t of the variation axis to query
     * @param axis_index The index of the variation axis
     */
    function ot_var_find_axis(
        face: face_t,
        axis_tag: tag_t,
        axis_index: number
    ): [/* returnType */ bool_t, /* axis_info */ ot_var_axis_t];
    /**
     * Fetches the variation-axis information corresponding to the specified axis tag
     * in the specified face.
     * @param face #hb_face_t to work upon
     * @param axis_tag The #hb_tag_t of the variation axis to query
     * @returns `true` if data found, `false` otherwise
     */
    function ot_var_find_axis_info(
        face: face_t,
        axis_tag: tag_t
    ): [/* returnType */ bool_t, /* axis_info */ ot_var_axis_info_t];
    /**
     * Fetches a list of all variation axes in the specified face. The list returned will begin
     * at the offset provided.
     * @param face #hb_face_t to work upon
     * @param start_offset offset of the first lookup to retrieve
     */
    function ot_var_get_axes(
        face: face_t,
        start_offset: number
    ): [/* returnType */ number, /* axes_array */ ot_var_axis_t[]];
    /**
     * Fetches the number of OpenType variation axes included in the face.
     * @param face The #hb_face_t to work on
     * @returns the number of variation axes defined
     */
    function ot_var_get_axis_count(face: face_t): number;
    /**
     * Fetches a list of all variation axes in the specified face. The list returned will begin
     * at the offset provided.
     * @param face #hb_face_t to work upon
     * @param start_offset offset of the first lookup to retrieve
     * @returns the number of variation axes in the face
     */
    function ot_var_get_axis_infos(
        face: face_t,
        start_offset: number
    ): [/* returnType */ number, /* axes_array */ ot_var_axis_info_t[]];
    /**
     * Fetches the number of named instances included in the face.
     * @param face The #hb_face_t to work on
     * @returns the number of named instances defined
     */
    function ot_var_get_named_instance_count(face: face_t): number;
    /**
     * Tests whether a face includes any OpenType variation data in the `fvar` table.
     * @param face The #hb_face_t to work on
     * @returns `true` if data found, `false` otherwise
     */
    function ot_var_has_data(face: face_t): bool_t;
    /**
     * Fetches the design-space coordinates corresponding to the given
     * named instance in the face.
     * @param face The #hb_face_t to work on
     * @param instance_index The index of the named instance to query
     * @returns the number of variation axes in the face
     */
    function ot_var_named_instance_get_design_coords(
        face: face_t,
        instance_index: number
    ): [/* returnType */ number, /* coords */ number[]];
    /**
     * Fetches the `name` table Name ID that provides display names for
     * the "PostScript name" defined for the given named instance in the face.
     * @param face The #hb_face_t to work on
     * @param instance_index The index of the named instance to query
     * @returns the Name ID found for the PostScript name
     */
    function ot_var_named_instance_get_postscript_name_id(
        face: face_t,
        instance_index: number
    ): ot_name_id_t;
    /**
     * Fetches the `name` table Name ID that provides display names for
     * the "Subfamily name" defined for the given named instance in the face.
     * @param face The #hb_face_t to work on
     * @param instance_index The index of the named instance to query
     * @returns the Name ID found for the Subfamily name
     */
    function ot_var_named_instance_get_subfamily_name_id(
        face: face_t,
        instance_index: number
    ): ot_name_id_t;
    /**
     * Normalizes the given design-space coordinates. The minimum and maximum
     * values for the axis are mapped to the interval [-1,1], with the default
     * axis value mapped to 0.
     *
     * The normalized values have 14 bits of fixed-point sub-integer precision as per
     * OpenType specification.
     *
     * Any additional scaling defined in the face's `avar` table is also
     * applied, as described at https://docs.microsoft.com/en-us/typography/opentype/spec/avar
     * @param face The #hb_face_t to work on
     * @param coords_length The length of the coordinate array
     * @param design_coords The design-space coordinates to normalize
     */
    function ot_var_normalize_coords(
        face: face_t,
        coords_length: number,
        design_coords: number
    ): /* normalized_coords */ number;
    /**
     * Normalizes all of the coordinates in the given list of variation axes.
     * @param face The #hb_face_t to work on
     * @param variations The array of variations to normalize
     * @param variations_length The number of variations to normalize
     */
    function ot_var_normalize_variations(
        face: face_t,
        variations: variation_t,
        variations_length: number
    ): /* coords */ number[];
    /**
     * Perform a "color" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param is_foreground whether the color is the foreground
     * @param color The color to use
     */
    function paint_color(
        funcs: paint_funcs_t,
        paint_data: any | null,
        is_foreground: bool_t,
        color: color_t
    ): void;
    /**
     * Perform a "color-glyph" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param glyph the glyph ID
     * @param font the font
     */
    function paint_color_glyph(
        funcs: paint_funcs_t,
        paint_data: any | null,
        glyph: codepoint_t,
        font: font_t
    ): bool_t;
    /**
     * Gets the custom palette color for `color_index`.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param color_index color index
     * @returns `true` if found, `false` otherwise
     */
    function paint_custom_palette_color(
        funcs: paint_funcs_t,
        paint_data: any | null,
        color_index: number
    ): [/* returnType */ bool_t, /* color */ color_t];
    /**
     * Creates a new #hb_paint_funcs_t structure of paint functions.
     *
     * The initial reference count of 1 should be released with hb_paint_funcs_destroy()
     * when you are done using the #hb_paint_funcs_t. This function never returns
     * `NULL`. If memory cannot be allocated, a special singleton #hb_paint_funcs_t
     * object will be returned.
     * @returns the paint-functions structure
     */
    function paint_funcs_create(): paint_funcs_t;
    /**
     * Fetches the singleton empty paint-functions structure.
     * @returns The empty paint-functions structure
     */
    function paint_funcs_get_empty(): paint_funcs_t;
    /**
     * Tests whether a paint-functions structure is immutable.
     * @param funcs The paint-functions structure
     * @returns `true` if @funcs is immutable, `false` otherwise
     */
    function paint_funcs_is_immutable(funcs: paint_funcs_t): bool_t;
    /**
     * Makes a paint-functions structure immutable.
     *
     * After this call, all attempts to set one of the callbacks
     * on `funcs` will fail.
     * @param funcs The paint-functions structure
     */
    function paint_funcs_make_immutable(funcs: paint_funcs_t): void;
    /**
     * Sets the paint-color callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The paint-color callback
     */
    function paint_funcs_set_color_func(
        funcs: paint_funcs_t,
        func: paint_color_func_t
    ): void;
    /**
     * Sets the color-glyph callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The color-glyph callback
     */
    function paint_funcs_set_color_glyph_func(
        funcs: paint_funcs_t,
        func: paint_color_glyph_func_t
    ): void;
    /**
     * Sets the custom-palette-color callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The custom-palette-color callback
     */
    function paint_funcs_set_custom_palette_color_func(
        funcs: paint_funcs_t,
        func: paint_custom_palette_color_func_t
    ): void;
    /**
     * Sets the paint-image callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The paint-image callback
     */
    function paint_funcs_set_image_func(
        funcs: paint_funcs_t,
        func: paint_image_func_t
    ): void;
    /**
     * Sets the linear-gradient callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The linear-gradient callback
     */
    function paint_funcs_set_linear_gradient_func(
        funcs: paint_funcs_t,
        func: paint_linear_gradient_func_t
    ): void;
    /**
     * Sets the pop-clip callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The pop-clip callback
     */
    function paint_funcs_set_pop_clip_func(
        funcs: paint_funcs_t,
        func: paint_pop_clip_func_t
    ): void;
    /**
     * Sets the pop-group callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The pop-group callback
     */
    function paint_funcs_set_pop_group_func(
        funcs: paint_funcs_t,
        func: paint_pop_group_func_t
    ): void;
    /**
     * Sets the pop-transform callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The pop-transform callback
     */
    function paint_funcs_set_pop_transform_func(
        funcs: paint_funcs_t,
        func: paint_pop_transform_func_t
    ): void;
    /**
     * Sets the push-clip-glyph callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The push-clip-glyph callback
     */
    function paint_funcs_set_push_clip_glyph_func(
        funcs: paint_funcs_t,
        func: paint_push_clip_glyph_func_t
    ): void;
    /**
     * Sets the push-clip-rect callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The push-clip-rectangle callback
     */
    function paint_funcs_set_push_clip_rectangle_func(
        funcs: paint_funcs_t,
        func: paint_push_clip_rectangle_func_t
    ): void;
    /**
     * Sets the push-group callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The push-group callback
     */
    function paint_funcs_set_push_group_func(
        funcs: paint_funcs_t,
        func: paint_push_group_func_t
    ): void;
    /**
     * Sets the push-transform callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The push-transform callback
     */
    function paint_funcs_set_push_transform_func(
        funcs: paint_funcs_t,
        func: paint_push_transform_func_t
    ): void;
    /**
     * Sets the radial-gradient callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The radial-gradient callback
     */
    function paint_funcs_set_radial_gradient_func(
        funcs: paint_funcs_t,
        func: paint_radial_gradient_func_t
    ): void;
    /**
     * Sets the sweep-gradient callback on the paint functions struct.
     * @param funcs A paint functions struct
     * @param func The sweep-gradient callback
     */
    function paint_funcs_set_sweep_gradient_func(
        funcs: paint_funcs_t,
        func: paint_sweep_gradient_func_t
    ): void;
    /**
     * Perform a "image" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param image image data
     * @param width width of the raster image in pixels, or 0
     * @param height height of the raster image in pixels, or 0
     * @param format the image format as a tag
     * @param slant the synthetic slant ratio to be applied to the image during rendering
     * @param extents the extents of the glyph
     */
    function paint_image(
        funcs: paint_funcs_t,
        paint_data: any | null,
        image: blob_t,
        width: number,
        height: number,
        format: tag_t,
        slant: number,
        extents: glyph_extents_t | null
    ): void;
    /**
     * Perform a "linear-gradient" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param color_line Color information for the gradient
     * @param x0 X coordinate of the first point
     * @param y0 Y coordinate of the first point
     * @param x1 X coordinate of the second point
     * @param y1 Y coordinate of the second point
     * @param x2 X coordinate of the third point
     * @param y2 Y coordinate of the third point
     */
    function paint_linear_gradient(
        funcs: paint_funcs_t,
        paint_data: any | null,
        color_line: color_line_t,
        x0: number,
        y0: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number
    ): void;
    /**
     * Perform a "pop-clip" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     */
    function paint_pop_clip(funcs: paint_funcs_t, paint_data: any | null): void;
    /**
     * Perform a "pop-group" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param mode the compositing mode to use
     */
    function paint_pop_group(
        funcs: paint_funcs_t,
        paint_data: any | null,
        mode: paint_composite_mode_t
    ): void;
    /**
     * Perform a "pop-transform" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     */
    function paint_pop_transform(
        funcs: paint_funcs_t,
        paint_data: any | null
    ): void;
    /**
     * Perform a "push-clip-glyph" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param glyph the glyph ID
     * @param font the font
     */
    function paint_push_clip_glyph(
        funcs: paint_funcs_t,
        paint_data: any | null,
        glyph: codepoint_t,
        font: font_t
    ): void;
    /**
     * Perform a "push-clip-rect" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param xmin min X for the rectangle
     * @param ymin min Y for the rectangle
     * @param xmax max X for the rectangle
     * @param ymax max Y for the rectangle
     */
    function paint_push_clip_rectangle(
        funcs: paint_funcs_t,
        paint_data: any | null,
        xmin: number,
        ymin: number,
        xmax: number,
        ymax: number
    ): void;
    /**
     * Perform a "push-group" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     */
    function paint_push_group(
        funcs: paint_funcs_t,
        paint_data: any | null
    ): void;
    /**
     * Perform a "push-transform" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param xx xx component of the transform matrix
     * @param yx yx component of the transform matrix
     * @param xy xy component of the transform matrix
     * @param yy yy component of the transform matrix
     * @param dx dx component of the transform matrix
     * @param dy dy component of the transform matrix
     */
    function paint_push_transform(
        funcs: paint_funcs_t,
        paint_data: any | null,
        xx: number,
        yx: number,
        xy: number,
        yy: number,
        dx: number,
        dy: number
    ): void;
    /**
     * Perform a "radial-gradient" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param color_line Color information for the gradient
     * @param x0 X coordinate of the first circle's center
     * @param y0 Y coordinate of the first circle's center
     * @param r0 radius of the first circle
     * @param x1 X coordinate of the second circle's center
     * @param y1 Y coordinate of the second circle's center
     * @param r1 radius of the second circle
     */
    function paint_radial_gradient(
        funcs: paint_funcs_t,
        paint_data: any | null,
        color_line: color_line_t,
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number
    ): void;
    /**
     * Perform a "sweep-gradient" paint operation.
     * @param funcs paint functions
     * @param paint_data associated data passed by the caller
     * @param color_line Color information for the gradient
     * @param x0 X coordinate of the circle's center
     * @param y0 Y coordinate of the circle's center
     * @param start_angle the start angle
     * @param end_angle the end angle
     */
    function paint_sweep_gradient(
        funcs: paint_funcs_t,
        paint_data: any | null,
        color_line: color_line_t,
        x0: number,
        y0: number,
        start_angle: number,
        end_angle: number
    ): void;
    /**
     * Converts an ISO 15924 script tag to a corresponding #hb_script_t.
     * @param tag an #hb_tag_t representing an ISO 15924 tag.
     * @returns An #hb_script_t corresponding to the ISO 15924 tag.
     */
    function script_from_iso15924_tag(tag: tag_t): script_t;
    /**
     * Converts a string `str` representing an ISO 15924 script tag to a
     * corresponding #hb_script_t. Shorthand for hb_tag_from_string() then
     * hb_script_from_iso15924_tag().
     * @param str a string representing an       ISO 15924 tag.
     * @returns An #hb_script_t corresponding to the ISO 15924 tag.
     */
    function script_from_string(str: Uint8Array): script_t;
    /**
     * Fetches the #hb_direction_t of a script when it is
     * set horizontally. All right-to-left scripts will return
     * #HB_DIRECTION_RTL. All left-to-right scripts will return
     * #HB_DIRECTION_LTR.  Scripts that can be written either
     * horizontally or vertically will return #HB_DIRECTION_INVALID.
     * Unknown scripts will return #HB_DIRECTION_LTR.
     * @param script The #hb_script_t to query
     * @returns The horizontal #hb_direction_t of @script
     */
    function script_get_horizontal_direction(script: script_t): direction_t;
    /**
     * Converts an #hb_script_t to a corresponding ISO 15924 script tag.
     * @param script an #hb_script_t to convert.
     * @returns An #hb_tag_t representing an ISO 15924 script tag.
     */
    function script_to_iso15924_tag(script: script_t): tag_t;
    /**
     * Checks the equality of two #hb_segment_properties_t's.
     * @param a first #hb_segment_properties_t to compare.
     * @param b second #hb_segment_properties_t to compare.
     * @returns `true` if all properties of @a equal those of @b, `false` otherwise.
     */
    function segment_properties_equal(
        a: segment_properties_t,
        b: segment_properties_t
    ): bool_t;
    /**
     * Creates a hash representing `p`.
     * @param p #hb_segment_properties_t to hash.
     * @returns A hash of @p.
     */
    function segment_properties_hash(p: segment_properties_t): number;
    /**
     * Fills in missing fields of `p` from `src` in a considered manner.
     *
     * First, if `p` does not have direction set, direction is copied from `src`.
     *
     * Next, if `p` and `src` have the same direction (which can be unset), if `p`
     * does not have script set, script is copied from `src`.
     *
     * Finally, if `p` and `src` have the same direction and script (which either
     * can be unset), if `p` does not have language set, language is copied from
     * `src`.
     * @param p #hb_segment_properties_t to fill in.
     * @param src #hb_segment_properties_t to fill in from.
     */
    function segment_properties_overlay(
        p: segment_properties_t,
        src: segment_properties_t
    ): void;
    /**
     * Adds `codepoint` to `set`.
     * @param set A set
     * @param codepoint The element to add to `set`
     */
    function set_add(set: set_t, codepoint: codepoint_t): void;
    /**
     * Adds all of the elements from `first` to `last`
     * (inclusive) to `set`.
     * @param set A set
     * @param first The first element to add to `set`
     * @param last The final element to add to `set`
     */
    function set_add_range(
        set: set_t,
        first: codepoint_t,
        last: codepoint_t
    ): void;
    /**
     * Adds `num_codepoints` codepoints to a set at once.
     * The codepoints array must be in increasing order,
     * with size at least `num_codepoints`.
     * @param set A set
     * @param sorted_codepoints Array of codepoints to add
     */
    function set_add_sorted_array(
        set: set_t,
        sorted_codepoints: codepoint_t[]
    ): void;
    /**
     * Tests whether memory allocation for a set was successful.
     * @param set A set
     * @returns `true` if allocation succeeded, `false` otherwise
     */
    function set_allocation_successful(set: set_t): bool_t;
    /**
     * Clears out the contents of a set.
     * @param set A set
     */
    function set_clear(set: set_t): void;
    /**
     * Allocate a copy of `set`.
     * @param set A set
     * @returns Newly-allocated set.
     */
    function set_copy(set: set_t): set_t;
    /**
     * Creates a new, initially empty set.
     * @returns The new #hb_set_t
     */
    function set_create(): set_t;
    /**
     * Removes `codepoint` from `set`.
     * @param set A set
     * @param codepoint Removes `codepoint` from `set`
     */
    function set_del(set: set_t, codepoint: codepoint_t): void;
    /**
     * Removes all of the elements from `first` to `last`
     * (inclusive) from `set`.
     *
     * If `last` is #HB_SET_VALUE_INVALID, then all values
     * greater than or equal to `first` are removed.
     * @param set A set
     * @param first The first element to remove from `set`
     * @param last The final element to remove from `set`
     */
    function set_del_range(
        set: set_t,
        first: codepoint_t,
        last: codepoint_t
    ): void;
    /**
     * Fetches the singleton empty #hb_set_t.
     * @returns The empty #hb_set_t
     */
    function set_get_empty(): set_t;
    /**
     * Finds the largest element in the set.
     * @param set A set
     * @returns maximum of @set, or #HB_SET_VALUE_INVALID if @set is empty.
     */
    function set_get_max(set: set_t): codepoint_t;
    /**
     * Finds the smallest element in the set.
     * @param set A set
     * @returns minimum of @set, or #HB_SET_VALUE_INVALID if @set is empty.
     */
    function set_get_min(set: set_t): codepoint_t;
    /**
     * Returns the number of elements in the set.
     * @param set A set
     * @returns The population of @set
     */
    function set_get_population(set: set_t): number;
    /**
     * Tests whether `codepoint` belongs to `set`.
     * @param set A set
     * @param codepoint The element to query
     * @returns `true` if @codepoint is in @set, `false` otherwise
     */
    function set_has(set: set_t, codepoint: codepoint_t): bool_t;
    /**
     * Creates a hash representing `set`.
     * @param set A set
     * @returns A hash of @set.
     */
    function set_hash(set: set_t): number;
    /**
     * Makes `set` the intersection of `set` and `other`.
     * @param set A set
     * @param other Another set
     */
    function set_intersect(set: set_t, other: set_t): void;
    /**
     * Inverts the contents of `set`.
     * @param set A set
     */
    function set_invert(set: set_t): void;
    /**
     * Tests whether a set is empty (contains no elements).
     * @param set a set.
     * @returns `true` if @set is empty
     */
    function set_is_empty(set: set_t): bool_t;
    /**
     * Tests whether `set` and `other` are equal (contain the same
     * elements).
     * @param set A set
     * @param other Another set
     * @returns `true` if the two sets are equal, `false` otherwise.
     */
    function set_is_equal(set: set_t, other: set_t): bool_t;
    /**
     * Returns whether the set is inverted.
     * @param set A set
     * @returns `true` if the set is inverted, `false` otherwise
     */
    function set_is_inverted(set: set_t): bool_t;
    /**
     * Tests whether `set` is a subset of `larger_set`.
     * @param set A set
     * @param larger_set Another set
     * @returns `true` if the @set is a subset of (or equal to) @larger_set, `false` otherwise.
     */
    function set_is_subset(set: set_t, larger_set: set_t): bool_t;
    /**
     * Fetches the next element in `set` that is greater than current value of `codepoint`.
     *
     * Set `codepoint` to #HB_SET_VALUE_INVALID to get started.
     * @param set A set
     * @param codepoint Input = Code point to query             Output = Code point retrieved
     * @returns `true` if there was a next value, `false` otherwise
     */
    function set_next(
        set: set_t,
        codepoint: codepoint_t
    ): [/* returnType */ bool_t, /* codepoint */ codepoint_t];
    /**
     * Finds the next element in `set` that is greater than `codepoint`. Writes out
     * codepoints to `out,` until either the set runs out of elements, or `size`
     * codepoints are written, whichever comes first.
     * @param set A set
     * @param codepoint Outputting codepoints starting after this one.             Use #HB_SET_VALUE_INVALID to get started.
     * @param out An array of codepoints to write to.
     * @returns the number of values written.
     */
    function set_next_many(
        set: set_t,
        codepoint: codepoint_t,
        out: codepoint_t[]
    ): number;
    /**
     * Fetches the next consecutive range of elements in `set` that
     * are greater than current value of `last`.
     *
     * Set `last` to #HB_SET_VALUE_INVALID to get started.
     * @param set A set
     * @param last Input = The current last code point in the range         Output = The last code point in the range
     * @returns `true` if there was a next range, `false` otherwise
     */
    function set_next_range(
        set: set_t,
        last: codepoint_t
    ): [
        /* returnType */ bool_t,
        /* first */ codepoint_t,
        /* last */ codepoint_t
    ];
    /**
     * Fetches the previous element in `set` that is lower than current value of `codepoint`.
     *
     * Set `codepoint` to #HB_SET_VALUE_INVALID to get started.
     * @param set A set
     * @param codepoint Input = Code point to query             Output = Code point retrieved
     * @returns `true` if there was a previous value, `false` otherwise
     */
    function set_previous(
        set: set_t,
        codepoint: codepoint_t
    ): [/* returnType */ bool_t, /* codepoint */ codepoint_t];
    /**
     * Fetches the previous consecutive range of elements in `set` that
     * are greater than current value of `last`.
     *
     * Set `first` to #HB_SET_VALUE_INVALID to get started.
     * @param set A set
     * @param first Input = The current first code point in the range         Output = The first code point in the range
     * @returns `true` if there was a previous range, `false` otherwise
     */
    function set_previous_range(
        set: set_t,
        first: codepoint_t
    ): [
        /* returnType */ bool_t,
        /* first */ codepoint_t,
        /* last */ codepoint_t
    ];
    /**
     * Makes the contents of `set` equal to the contents of `other`.
     * @param set A set
     * @param other Another set
     */
    function set_set(set: set_t, other: set_t): void;
    /**
     * Subtracts the contents of `other` from `set`.
     * @param set A set
     * @param other Another set
     */
    function set_subtract(set: set_t, other: set_t): void;
    /**
     * Makes `set` the symmetric difference of `set`
     * and `other`.
     * @param set A set
     * @param other Another set
     */
    function set_symmetric_difference(set: set_t, other: set_t): void;
    /**
     * Makes `set` the union of `set` and `other`.
     * @param set A set
     * @param other Another set
     */
    function set_union(set: set_t, other: set_t): void;
    /**
     * Shapes `buffer` using `font` turning its Unicode characters content to
     * positioned glyphs. If `features` is not `NULL`, it will be used to control the
     * features applied during shaping. If two `features` have the same tag but
     * overlapping ranges the value of the feature with the higher index takes
     * precedence.
     * @param font an #hb_font_t to use for shaping
     * @param buffer an #hb_buffer_t to shape
     * @param features an array of user    specified #hb_feature_t or `NULL`
     */
    function shape(
        font: font_t,
        buffer: buffer_t,
        features: feature_t[] | null
    ): void;
    /**
     * See hb_shape() for details. If `shaper_list` is not `NULL`, the specified
     * shapers will be used in the given order, otherwise the default shapers list
     * will be used.
     * @param font an #hb_font_t to use for shaping
     * @param buffer an #hb_buffer_t to shape
     * @param features an array of user    specified #hb_feature_t or `NULL`
     * @param shaper_list a `NULL`-terminated    array of shapers to use or `NULL`
     * @returns false if all shapers failed, true otherwise
     */
    function shape_full(
        font: font_t,
        buffer: buffer_t,
        features: feature_t[] | null,
        shaper_list: string[] | null
    ): bool_t;
    /**
     * See hb_shape_full() for basic details. If `shaper_list` is not `NULL`, the specified
     * shapers will be used in the given order, otherwise the default shapers list
     * will be used.
     *
     * In addition, justify the shaping results such that the shaping results reach
     * the target advance width/height, depending on the buffer direction.
     *
     * If the advance of the buffer shaped with hb_shape_full() is already known,
     * put that in *advance. Otherwise set *advance to zero.
     *
     * This API is currently experimental and will probably change in the future.
     * @param font a mutable #hb_font_t to use for shaping
     * @param buffer an #hb_buffer_t to shape
     * @param features an array of user    specified #hb_feature_t or `NULL`
     * @param shaper_list a `NULL`-terminated    array of shapers to use or `NULL`
     * @param min_target_advance Minimum advance width/height to aim for.
     * @param max_target_advance Maximum advance width/height to aim for.
     * @param advance Input/output advance width/height of the buffer.
     * @returns false if all shapers failed, true otherwise XSince: EXPERIMENTAL
     */
    function shape_justify(
        font: font_t,
        buffer: buffer_t,
        features: feature_t[] | null,
        shaper_list: string[] | null,
        min_target_advance: number,
        max_target_advance: number,
        advance: number
    ): [
        /* returnType */ bool_t,
        /* advance */ number,
        /* var_tag */ tag_t,
        /* var_value */ number
    ];
    /**
     * Retrieves the list of shapers supported by HarfBuzz.
     * @returns an array of    constant strings
     */
    function shape_list_shapers(): string[];
    /**
     * Constructs a shaping plan for a combination of `face,` `user_features,` `props,`
     * and `shaper_list`.
     * @param face #hb_face_t to use
     * @param props The #hb_segment_properties_t of the segment
     * @param user_features The list of user-selected features
     * @param shaper_list List of shapers to try
     * @returns The shaping plan
     */
    function shape_plan_create(
        face: face_t,
        props: segment_properties_t,
        user_features: feature_t[],
        shaper_list: string[]
    ): shape_plan_t;
    /**
     * The variable-font version of #hb_shape_plan_create.
     * Constructs a shaping plan for a combination of `face,` `user_features,` `props,`
     * and `shaper_list,` plus the variation-space coordinates `coords`.
     * @param face #hb_face_t to use
     * @param props The #hb_segment_properties_t of the segment
     * @param user_features The list of user-selected features
     * @param coords The list of variation-space coordinates
     * @param shaper_list List of shapers to try
     * @returns The shaping plan
     */
    function shape_plan_create2(
        face: face_t,
        props: segment_properties_t,
        user_features: feature_t[],
        coords: number[],
        shaper_list: string[]
    ): shape_plan_t;
    /**
     * Creates a cached shaping plan suitable for reuse, for a combination
     * of `face,` `user_features,` `props,` and `shaper_list`.
     * @param face #hb_face_t to use
     * @param props The #hb_segment_properties_t of the segment
     * @param user_features The list of user-selected features
     * @param shaper_list List of shapers to try
     * @returns The shaping plan
     */
    function shape_plan_create_cached(
        face: face_t,
        props: segment_properties_t,
        user_features: feature_t[],
        shaper_list: string[]
    ): shape_plan_t;
    /**
     * The variable-font version of #hb_shape_plan_create_cached.
     * Creates a cached shaping plan suitable for reuse, for a combination
     * of `face,` `user_features,` `props,` and `shaper_list,` plus the
     * variation-space coordinates `coords`.
     * @param face #hb_face_t to use
     * @param props The #hb_segment_properties_t of the segment
     * @param user_features The list of user-selected features
     * @param coords The list of variation-space coordinates
     * @param shaper_list List of shapers to try
     * @returns The shaping plan
     */
    function shape_plan_create_cached2(
        face: face_t,
        props: segment_properties_t,
        user_features: feature_t[],
        coords: number[],
        shaper_list: string[]
    ): shape_plan_t;
    /**
     * Executes the given shaping plan on the specified buffer, using
     * the given `font` and `features`.
     * @param shape_plan A shaping plan
     * @param font The #hb_font_t to use
     * @param buffer The #hb_buffer_t to work upon
     * @param features Features to enable
     * @returns `true` if success, `false` otherwise.
     */
    function shape_plan_execute(
        shape_plan: shape_plan_t,
        font: font_t,
        buffer: buffer_t,
        features: feature_t[]
    ): bool_t;
    /**
     * Fetches the singleton empty shaping plan.
     * @returns The empty shaping plan
     */
    function shape_plan_get_empty(): shape_plan_t;
    /**
     * Fetches the shaper from a given shaping plan.
     * @param shape_plan A shaping plan
     * @returns The shaper
     */
    function shape_plan_get_shaper(shape_plan: shape_plan_t): string | null;
    /**
     * Searches variation axes of a #hb_font_t object for a specific axis first,
     * if not set, then tries to get default style values from different
     * tables of the font.
     * @param font a #hb_font_t object.
     * @param style_tag a style tag.
     * @returns Corresponding axis or default value to a style tag.
     */
    function style_get_value(font: font_t, style_tag: style_tag_t): number;
    /**
     * Converts a string into an #hb_tag_t. Valid tags
     * are four characters. Shorter input strings will be
     * padded with spaces. Longer input strings will be
     * truncated.
     * @param str String to convert
     * @returns The #hb_tag_t corresponding to @str
     */
    function tag_from_string(str: Uint8Array): tag_t;
    /**
     * Converts an #hb_tag_t to a string and returns it in `buf`.
     * Strings will be four characters long.
     * @param tag #hb_tag_t to convert
     */
    function tag_to_string(tag: tag_t): /* buf */ Uint8Array;
    /**
     * Retrieves the Canonical Combining Class (ccc) property
     * of code point `unicode`.
     * @param ufuncs The Unicode-functions structure
     * @param unicode The code point to query
     * @returns The #hb_unicode_combining_class_t of @unicode
     */
    function unicode_combining_class(
        ufuncs: unicode_funcs_t,
        unicode: codepoint_t
    ): unicode_combining_class_t;
    /**
     * Fetches the composition of a sequence of two Unicode
     * code points.
     *
     * Calls the composition function of the specified
     * Unicode-functions structure `ufuncs`.
     * @param ufuncs The Unicode-functions structure
     * @param a The first Unicode code point to compose
     * @param b The second Unicode code point to compose
     * @returns `true` if @a and @b composed, `false` otherwise
     */
    function unicode_compose(
        ufuncs: unicode_funcs_t,
        a: codepoint_t,
        b: codepoint_t
    ): [/* returnType */ bool_t, /* ab */ codepoint_t];
    /**
     * Fetches the decomposition of a Unicode code point.
     *
     * Calls the decomposition function of the specified
     * Unicode-functions structure `ufuncs`.
     * @param ufuncs The Unicode-functions structure
     * @param ab Unicode code point to decompose
     * @returns `true` if @ab was decomposed, `false` otherwise
     */
    function unicode_decompose(
        ufuncs: unicode_funcs_t,
        ab: codepoint_t
    ): [/* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t];
    /**
     * Fetches the compatibility decomposition of a Unicode
     * code point. Deprecated.
     * @param ufuncs The Unicode-functions structure
     * @param u Code point to decompose
     * @returns length of @decomposed.
     */
    function unicode_decompose_compatibility(
        ufuncs: unicode_funcs_t,
        u: codepoint_t
    ): [/* returnType */ number, /* decomposed */ codepoint_t];
    /**
     * Don't use. Not used by HarfBuzz.
     * @param ufuncs a Unicode-function structure
     * @param unicode The code point to query
     */
    function unicode_eastasian_width(
        ufuncs: unicode_funcs_t,
        unicode: codepoint_t
    ): number;
    /**
     * Creates a new #hb_unicode_funcs_t structure of Unicode functions.
     * @param parent Parent Unicode-functions structure
     * @returns The Unicode-functions structure
     */
    function unicode_funcs_create(
        parent: unicode_funcs_t | null
    ): unicode_funcs_t;
    /**
     * Fetches a pointer to the default Unicode-functions structure that is used
     * when no functions are explicitly set on #hb_buffer_t.
     * @returns a pointer to the #hb_unicode_funcs_t Unicode-functions structure
     */
    function unicode_funcs_get_default(): unicode_funcs_t;
    /**
     * Fetches the singleton empty Unicode-functions structure.
     * @returns The empty Unicode-functions structure
     */
    function unicode_funcs_get_empty(): unicode_funcs_t;
    /**
     * Fetches the parent of the Unicode-functions structure
     * `ufuncs`.
     * @param ufuncs The Unicode-functions structure
     * @returns The parent Unicode-functions structure
     */
    function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t;
    /**
     * Tests whether the specified Unicode-functions structure
     * is immutable.
     * @param ufuncs The Unicode-functions structure
     * @returns `true` if @ufuncs is immutable, `false` otherwise
     */
    function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t;
    /**
     * Makes the specified Unicode-functions structure
     * immutable.
     * @param ufuncs The Unicode-functions structure
     */
    function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void;
    /**
     * Sets the implementation function for #hb_unicode_combining_class_func_t.
     * @param ufuncs A Unicode-functions structure
     * @param func The callback function to assign
     */
    function unicode_funcs_set_combining_class_func(
        ufuncs: unicode_funcs_t,
        func: unicode_combining_class_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_unicode_compose_func_t.
     * @param ufuncs A Unicode-functions structure
     * @param func The callback function to assign
     */
    function unicode_funcs_set_compose_func(
        ufuncs: unicode_funcs_t,
        func: unicode_compose_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_unicode_decompose_compatibility_func_t.
     * @param ufuncs A Unicode-functions structure
     * @param func The callback function to assign
     */
    function unicode_funcs_set_decompose_compatibility_func(
        ufuncs: unicode_funcs_t,
        func: unicode_decompose_compatibility_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_unicode_decompose_func_t.
     * @param ufuncs A Unicode-functions structure
     * @param func The callback function to assign
     */
    function unicode_funcs_set_decompose_func(
        ufuncs: unicode_funcs_t,
        func: unicode_decompose_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_unicode_eastasian_width_func_t.
     * @param ufuncs a Unicode-function structure
     * @param func The callback function to assign
     */
    function unicode_funcs_set_eastasian_width_func(
        ufuncs: unicode_funcs_t,
        func: unicode_eastasian_width_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_unicode_general_category_func_t.
     * @param ufuncs A Unicode-functions structure
     * @param func The callback function to assign
     */
    function unicode_funcs_set_general_category_func(
        ufuncs: unicode_funcs_t,
        func: unicode_general_category_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_unicode_mirroring_func_t.
     * @param ufuncs A Unicode-functions structure
     * @param func The callback function to assign
     */
    function unicode_funcs_set_mirroring_func(
        ufuncs: unicode_funcs_t,
        func: unicode_mirroring_func_t
    ): void;
    /**
     * Sets the implementation function for #hb_unicode_script_func_t.
     * @param ufuncs A Unicode-functions structure
     * @param func The callback function to assign
     */
    function unicode_funcs_set_script_func(
        ufuncs: unicode_funcs_t,
        func: unicode_script_func_t
    ): void;
    /**
     * Retrieves the General Category (gc) property
     * of code point `unicode`.
     * @param ufuncs The Unicode-functions structure
     * @param unicode The code point to query
     * @returns The #hb_unicode_general_category_t of @unicode
     */
    function unicode_general_category(
        ufuncs: unicode_funcs_t,
        unicode: codepoint_t
    ): unicode_general_category_t;
    /**
     * Retrieves the Bi-directional Mirroring Glyph code
     * point defined for code point `unicode`.
     * @param ufuncs The Unicode-functions structure
     * @param unicode The code point to query
     * @returns The #hb_codepoint_t of the Mirroring Glyph for @unicode
     */
    function unicode_mirroring(
        ufuncs: unicode_funcs_t,
        unicode: codepoint_t
    ): codepoint_t;
    /**
     * Retrieves the #hb_script_t script to which code
     * point `unicode` belongs.
     * @param ufuncs The Unicode-functions structure
     * @param unicode The code point to query
     * @returns The #hb_script_t of @unicode
     */
    function unicode_script(
        ufuncs: unicode_funcs_t,
        unicode: codepoint_t
    ): script_t;
    /**
     * Parses a string into a #hb_variation_t.
     *
     * The format for specifying variation settings follows. All valid CSS
     * font-variation-settings values other than 'normal' and 'inherited' are also
     * accepted, though, not documented below.
     *
     * The format is a tag, optionally followed by an equals sign, followed by a
     * number. For example `wght=500`, or `slnt=-7.5`.
     * @param str a string to parse
     * @returns `true` if @str is successfully parsed, `false` otherwise
     */
    function variation_from_string(
        str: Uint8Array
    ): [/* returnType */ bool_t, /* variation */ variation_t];
    /**
     * Converts an #hb_variation_t into a `NULL`-terminated string in the format
     * understood by hb_variation_from_string(). The client in responsible for
     * allocating big enough size for `buf,` 128 bytes is more than enough.
     * @param variation an #hb_variation_t to convert
     */
    function variation_to_string(variation: variation_t): /* buf */ string[];
    /**
     * A callback method for #hb_buffer_t. The method gets called with the
     * #hb_buffer_t it was set on, the #hb_font_t the buffer is shaped with and a
     * message describing what step of the shaping process will be performed.
     * Returning `false` from this method will skip this shaping step and move to
     * the next one.
     * @callback
     * @param buffer An #hb_buffer_t to work upon
     * @param font The #hb_font_t the `buffer` is shaped with
     * @param message `NULL`-terminated message passed to the function
     * @returns `true` to perform the shaping step, `false` to skip it.
     */
    interface buffer_message_func_t {
        (buffer: buffer_t, font: font_t, message: string | null): bool_t;
    }
    /**
     * A virtual method for the #hb_color_line_t to fetch color stops.
     * @callback
     * @param color_line a #hb_color_line_t object
     * @param color_line_data the data accompanying `color_line`
     * @param start the index of the first color stop to return
     * @returns the total number of color stops in @color_line
     */
    interface color_line_get_color_stops_func_t {
        (
            color_line: color_line_t,
            color_line_data: any | null,
            start: number
        ): number;
    }
    /**
     * A virtual method for the `hb_color_line_t` to fetches the extend mode.
     * @callback
     * @param color_line a #hb_color_line_t object
     * @param color_line_data the data accompanying `color_line`
     * @returns the extend mode of @color_line
     */
    interface color_line_get_extend_func_t {
        (color_line: color_line_t, color_line_data: any | null): paint_extend_t;
    }
    /**
     * A virtual method for destroy user-data callbacks.
     * @callback
     */
    interface destroy_func_t {
        (): void;
    }
    /**
     * A virtual method for the #hb_draw_funcs_t to perform a "close-path" draw
     * operation.
     * @callback
     * @param dfuncs draw functions object
     * @param draw_data The data accompanying the draw functions in hb_font_draw_glyph()
     * @param st current draw state
     */
    interface draw_close_path_func_t {
        (dfuncs: draw_funcs_t, draw_data: any | null, st: draw_state_t): void;
    }
    /**
     * A virtual method for the #hb_draw_funcs_t to perform a "cubic-to" draw
     * operation.
     * @callback
     * @param dfuncs draw functions object
     * @param draw_data The data accompanying the draw functions in hb_font_draw_glyph()
     * @param st current draw state
     * @param control1_x X component of first control point
     * @param control1_y Y component of first control point
     * @param control2_x X component of second control point
     * @param control2_y Y component of second control point
     * @param to_x X component of target point
     * @param to_y Y component of target point
     */
    interface draw_cubic_to_func_t {
        (
            dfuncs: draw_funcs_t,
            draw_data: any | null,
            st: draw_state_t,
            control1_x: number,
            control1_y: number,
            control2_x: number,
            control2_y: number,
            to_x: number,
            to_y: number
        ): void;
    }
    /**
     * A virtual method for the #hb_draw_funcs_t to perform a "line-to" draw
     * operation.
     * @callback
     * @param dfuncs draw functions object
     * @param draw_data The data accompanying the draw functions in hb_font_draw_glyph()
     * @param st current draw state
     * @param to_x X component of target point
     * @param to_y Y component of target point
     */
    interface draw_line_to_func_t {
        (
            dfuncs: draw_funcs_t,
            draw_data: any | null,
            st: draw_state_t,
            to_x: number,
            to_y: number
        ): void;
    }
    /**
     * A virtual method for the #hb_draw_funcs_t to perform a "move-to" draw
     * operation.
     * @callback
     * @param dfuncs draw functions object
     * @param draw_data The data accompanying the draw functions in hb_font_draw_glyph()
     * @param st current draw state
     * @param to_x X component of target point
     * @param to_y Y component of target point
     */
    interface draw_move_to_func_t {
        (
            dfuncs: draw_funcs_t,
            draw_data: any | null,
            st: draw_state_t,
            to_x: number,
            to_y: number
        ): void;
    }
    /**
     * A virtual method for the #hb_draw_funcs_t to perform a "quadratic-to" draw
     * operation.
     * @callback
     * @param dfuncs draw functions object
     * @param draw_data The data accompanying the draw functions in hb_font_draw_glyph()
     * @param st current draw state
     * @param control_x X component of control point
     * @param control_y Y component of control point
     * @param to_x X component of target point
     * @param to_y Y component of target point
     */
    interface draw_quadratic_to_func_t {
        (
            dfuncs: draw_funcs_t,
            draw_data: any | null,
            st: draw_state_t,
            control_x: number,
            control_y: number,
            to_x: number,
            to_y: number
        ): void;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param glyph The glyph ID to query
     * @param draw_funcs The draw functions to send the shape data to
     * @param draw_data The data accompanying the draw functions
     */
    interface font_draw_glyph_func_t {
        (
            font: font_t,
            font_data: any | null,
            glyph: codepoint_t,
            draw_funcs: draw_funcs_t,
            draw_data: any | null
        ): void;
    }
    /**
     * This method should retrieve the extents for a font.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     */
    interface font_get_font_extents_func_t {
        (font: font_t, font_data: any | null): bool_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the advance for a specified glyph. The
     * method must return an #hb_position_t.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param glyph The glyph ID to query
     * @returns The advance of @glyph within @font
     */
    interface font_get_glyph_advance_func_t {
        (font: font_t, font_data: any | null, glyph: codepoint_t): position_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the advances for a sequence of glyphs.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param count The number of glyph IDs in the sequence queried
     * @param first_glyph The first glyph ID to query
     * @param glyph_stride The stride between successive glyph IDs
     * @param advance_stride The stride between successive advances
     */
    interface font_get_glyph_advances_func_t {
        (
            font: font_t,
            font_data: any | null,
            count: number,
            first_glyph: codepoint_t,
            glyph_stride: number,
            advance_stride: number
        ): void;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the (X,Y) coordinates (in font units) for a
     * specified contour point in a glyph. Each coordinate must be returned as
     * an #hb_position_t output parameter.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param glyph The glyph ID to query
     * @param point_index The contour-point index to query
     * @returns `true` if data found, `false` otherwise
     */
    interface font_get_glyph_contour_point_func_t {
        (
            font: font_t,
            font_data: any | null,
            glyph: codepoint_t,
            point_index: number
        ): bool_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the extents for a specified glyph. Extents must be
     * returned in an #hb_glyph_extents output parameter.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param glyph The glyph ID to query
     * @returns `true` if data found, `false` otherwise
     */
    interface font_get_glyph_extents_func_t {
        (font: font_t, font_data: any | null, glyph: codepoint_t): bool_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the glyph ID that corresponds to a glyph-name
     * string.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param name The name string to query
     * @returns `true` if data found, `false` otherwise
     */
    interface font_get_glyph_from_name_func_t {
        (font: font_t, font_data: any | null, name: string[]): bool_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the glyph ID for a specified Unicode code point
     * font, with an optional variation selector.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param unicode The Unicode code point to query
     * @param variation_selector The  variation-selector code point to query
     * @returns `true` if data found, `false` otherwise
     */
    interface font_get_glyph_func_t {
        (
            font: font_t,
            font_data: any | null,
            unicode: codepoint_t,
            variation_selector: codepoint_t
        ): bool_t;
    }
    /**
     * This method should retrieve the kerning-adjustment value for a glyph-pair in
     * the specified font, for horizontal text segments.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param first_glyph The glyph ID of the first glyph in the glyph pair
     * @param second_glyph The glyph ID of the second glyph in the glyph pair
     */
    interface font_get_glyph_kerning_func_t {
        (
            font: font_t,
            font_data: any | null,
            first_glyph: codepoint_t,
            second_glyph: codepoint_t
        ): position_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the glyph name that corresponds to a
     * glyph ID. The name should be returned in a string output parameter.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param glyph The glyph ID to query
     * @returns `true` if data found, `false` otherwise
     */
    interface font_get_glyph_name_func_t {
        (font: font_t, font_data: any | null, glyph: codepoint_t): bool_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the (X,Y) coordinates (in font units) of the
     * origin for a glyph. Each coordinate must be returned in an #hb_position_t
     * output parameter.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param glyph The glyph ID to query
     * @returns `true` if data found, `false` otherwise
     */
    interface font_get_glyph_origin_func_t {
        (font: font_t, font_data: any | null, glyph: codepoint_t): bool_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param glyph The glyph ID to query
     * @param draw_funcs The draw functions to send the shape data to
     * @param draw_data The data accompanying the draw functions
     */
    interface font_get_glyph_shape_func_t {
        (
            font: font_t,
            font_data: any | null,
            glyph: codepoint_t,
            draw_funcs: draw_funcs_t,
            draw_data: any | null
        ): void;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the nominal glyph ID for a specified Unicode code
     * point. Glyph IDs must be returned in a #hb_codepoint_t output parameter.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param unicode The Unicode code point to query
     * @returns `true` if data found, `false` otherwise
     */
    interface font_get_nominal_glyph_func_t {
        (font: font_t, font_data: any | null, unicode: codepoint_t): bool_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the nominal glyph IDs for a sequence of
     * Unicode code points. Glyph IDs must be returned in a #hb_codepoint_t
     * output parameter.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param count number of code points to query
     * @param first_unicode The first Unicode code point to query
     * @param unicode_stride The stride between successive code points
     * @param glyph_stride The stride between successive glyph IDs
     * @returns the number of code points processed
     */
    interface font_get_nominal_glyphs_func_t {
        (
            font: font_t,
            font_data: any | null,
            count: number,
            first_unicode: codepoint_t,
            unicode_stride: number,
            glyph_stride: number
        ): number;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     *
     * This method should retrieve the glyph ID for a specified Unicode code point
     * followed by a specified Variation Selector code point. Glyph IDs must be
     * returned in a #hb_codepoint_t output parameter.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param unicode The Unicode code point to query
     * @param variation_selector The  variation-selector code point to query
     * @returns `true` if data found, `false` otherwise
     */
    interface font_get_variation_glyph_func_t {
        (
            font: font_t,
            font_data: any | null,
            unicode: codepoint_t,
            variation_selector: codepoint_t
        ): bool_t;
    }
    /**
     * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
     * @callback
     * @param font #hb_font_t to work upon
     * @param font_data `font` user data pointer
     * @param glyph The glyph ID to query
     * @param paint_funcs The paint functions to use
     * @param paint_data The data accompanying the paint functions
     * @param palette_index The color palette to use
     * @param foreground The foreground color
     */
    interface font_paint_glyph_func_t {
        (
            font: font_t,
            font_data: any | null,
            glyph: codepoint_t,
            paint_funcs: paint_funcs_t,
            paint_data: any | null,
            palette_index: number,
            foreground: color_t
        ): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to paint a
     * color everywhere within the current clip.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param is_foreground whether the color is the foreground
     * @param color The color to use, unpremultiplied
     */
    interface paint_color_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            is_foreground: bool_t,
            color: color_t
        ): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to render a color glyph by glyph index.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param glyph the glyph ID
     * @param font the font
     * @returns %true if the glyph was painted, %false otherwise.
     */
    interface paint_color_glyph_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            glyph: codepoint_t,
            font: font_t
        ): bool_t;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to fetch a color from the custom
     * color palette.
     *
     * Custom palette colors override the colors from the fonts selected color
     * palette. It is not necessary to override all palette entries; for entries
     * that should be taken from the font palette, return `false`.
     *
     * This function might get called multiple times, but the custom palette is
     * expected to remain unchanged for duration of a hb_font_paint_glyph() call.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param color_index the color index
     * @returns `true` if found, `false` otherwise
     */
    interface paint_custom_palette_color_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            color_index: number
        ): bool_t;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to paint a glyph image.
     *
     * This method is called for glyphs with image blobs in the CBDT,
     * sbix or SVG tables. The `format` identifies the kind of data that
     * is contained in `image`. Possible values include #HB_PAINT_IMAGE_FORMAT_PNG,
     * #HB_PAINT_IMAGE_FORMAT_SVG and #HB_PAINT_IMAGE_FORMAT_BGRA.
     *
     * The image dimensions and glyph extents are provided if available,
     * and should be used to size and position the image.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param image the image data
     * @param width width of the raster image in pixels, or 0
     * @param height height of the raster image in pixels, or 0
     * @param format the image format as a tag
     * @param slant the synthetic slant ratio to be applied to the image during rendering
     * @param extents glyph extents for desired rendering
     * @returns Whether the operation was successful.
     */
    interface paint_image_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            image: blob_t,
            width: number,
            height: number,
            format: tag_t,
            slant: number,
            extents: glyph_extents_t | null
        ): bool_t;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to paint a linear
     * gradient everywhere within the current clip.
     *
     * The `color_line` object contains information about the colors of the gradients.
     * It is only valid for the duration of the callback, you cannot keep it around.
     *
     * The coordinates of the points are interpreted according
     * to the current transform.
     *
     * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
     * section for details on how the points define the direction
     * of the gradient, and how to interpret the `color_line`.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param color_line Color information for the gradient
     * @param x0 X coordinate of the first point
     * @param y0 Y coordinate of the first point
     * @param x1 X coordinate of the second point
     * @param y1 Y coordinate of the second point
     * @param x2 X coordinate of the third point
     * @param y2 Y coordinate of the third point
     */
    interface paint_linear_gradient_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            color_line: color_line_t,
            x0: number,
            y0: number,
            x1: number,
            y1: number,
            x2: number,
            y2: number
        ): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to undo
     * the effect of a prior call to the #hb_paint_funcs_push_clip_glyph_func_t
     * or #hb_paint_funcs_push_clip_rectangle_func_t vfuncs.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     */
    interface paint_pop_clip_func_t {
        (funcs: paint_funcs_t, paint_data: any | null): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to undo
     * the effect of a prior call to the #hb_paint_funcs_push_group_func_t
     * vfunc.
     *
     * This call stops the redirection to the intermediate surface,
     * and then composites it on the previous surface, using the
     * compositing mode passed to this call.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param mode the compositing mode to use
     */
    interface paint_pop_group_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            mode: paint_composite_mode_t
        ): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to undo
     * the effect of a prior call to the #hb_paint_funcs_push_transform_func_t
     * vfunc.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     */
    interface paint_pop_transform_func_t {
        (funcs: paint_funcs_t, paint_data: any | null): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to clip
     * subsequent paint calls to the outline of a glyph.
     *
     * The coordinates of the glyph outline are interpreted according
     * to the current transform.
     *
     * This clip is applied in addition to the current clip,
     * and remains in effect until a matching call to
     * the #hb_paint_funcs_pop_clip_func_t vfunc.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param glyph the glyph ID
     * @param font the font
     */
    interface paint_push_clip_glyph_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            glyph: codepoint_t,
            font: font_t
        ): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to clip
     * subsequent paint calls to a rectangle.
     *
     * The coordinates of the rectangle are interpreted according
     * to the current transform.
     *
     * This clip is applied in addition to the current clip,
     * and remains in effect until a matching call to
     * the #hb_paint_funcs_pop_clip_func_t vfunc.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param xmin min X for the rectangle
     * @param ymin min Y for the rectangle
     * @param xmax max X for the rectangle
     * @param ymax max Y for the rectangle
     */
    interface paint_push_clip_rectangle_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            xmin: number,
            ymin: number,
            xmax: number,
            ymax: number
        ): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to use
     * an intermediate surface for subsequent paint calls.
     *
     * The drawing will be redirected to an intermediate surface
     * until a matching call to the #hb_paint_funcs_pop_group_func_t
     * vfunc.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     */
    interface paint_push_group_func_t {
        (funcs: paint_funcs_t, paint_data: any | null): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to apply
     * a transform to subsequent paint calls.
     *
     * This transform is applied after the current transform,
     * and remains in effect until a matching call to
     * the #hb_paint_funcs_pop_transform_func_t vfunc.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param xx xx component of the transform matrix
     * @param yx yx component of the transform matrix
     * @param xy xy component of the transform matrix
     * @param yy yy component of the transform matrix
     * @param dx dx component of the transform matrix
     * @param dy dy component of the transform matrix
     */
    interface paint_push_transform_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            xx: number,
            yx: number,
            xy: number,
            yy: number,
            dx: number,
            dy: number
        ): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to paint a radial
     * gradient everywhere within the current clip.
     *
     * The `color_line` object contains information about the colors of the gradients.
     * It is only valid for the duration of the callback, you cannot keep it around.
     *
     * The coordinates of the points are interpreted according
     * to the current transform.
     *
     * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
     * section for details on how the points define the direction
     * of the gradient, and how to interpret the `color_line`.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param color_line Color information for the gradient
     * @param x0 X coordinate of the first circle's center
     * @param y0 Y coordinate of the first circle's center
     * @param r0 radius of the first circle
     * @param x1 X coordinate of the second circle's center
     * @param y1 Y coordinate of the second circle's center
     * @param r1 radius of the second circle
     */
    interface paint_radial_gradient_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            color_line: color_line_t,
            x0: number,
            y0: number,
            r0: number,
            x1: number,
            y1: number,
            r1: number
        ): void;
    }
    /**
     * A virtual method for the #hb_paint_funcs_t to paint a sweep
     * gradient everywhere within the current clip.
     *
     * The `color_line` object contains information about the colors of the gradients.
     * It is only valid for the duration of the callback, you cannot keep it around.
     *
     * The coordinates of the points are interpreted according
     * to the current transform.
     *
     * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
     * section for details on how the points define the direction
     * of the gradient, and how to interpret the `color_line`.
     * @callback
     * @param funcs paint functions object
     * @param paint_data The data accompanying the paint functions in hb_font_paint_glyph()
     * @param color_line Color information for the gradient
     * @param x0 X coordinate of the circle's center
     * @param y0 Y coordinate of the circle's center
     * @param start_angle the start angle, in radians
     * @param end_angle the end angle, in radians
     */
    interface paint_sweep_gradient_func_t {
        (
            funcs: paint_funcs_t,
            paint_data: any | null,
            color_line: color_line_t,
            x0: number,
            y0: number,
            start_angle: number,
            end_angle: number
        ): void;
    }
    /**
     * Callback function for hb_face_create_for_tables().
     * @callback
     * @param face an #hb_face_t to reference table for
     * @param tag the tag of the table to reference
     * @returns A pointer to the @tag table within @face
     */
    interface reference_table_func_t {
        (face: face_t, tag: tag_t): blob_t;
    }
    /**
     * A virtual method for the #hb_unicode_funcs_t structure.
     *
     * This method should retrieve the Canonical Combining Class (ccc)
     * property for a specified Unicode code point.
     * @callback
     * @param ufuncs A Unicode-functions structure
     * @param unicode The code point to query
     * @returns The #hb_unicode_combining_class_t of @unicode
     */
    interface unicode_combining_class_func_t {
        (
            ufuncs: unicode_funcs_t,
            unicode: codepoint_t
        ): unicode_combining_class_t;
    }
    /**
     * A virtual method for the #hb_unicode_funcs_t structure.
     *
     * This method should compose a sequence of two input Unicode code
     * points by canonical equivalence, returning the composed code
     * point in a #hb_codepoint_t output parameter (if successful).
     * The method must return an #hb_bool_t indicating the success
     * of the composition.
     * @callback
     * @param ufuncs A Unicode-functions structure
     * @param a The first code point to compose
     * @param b The second code point to compose
     * @returns `true` is @a,@b composed, `false` otherwise
     */
    interface unicode_compose_func_t {
        (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): bool_t;
    }
    /**
     * Fully decompose `u` to its Unicode compatibility decomposition. The codepoints of the decomposition will be written to `decomposed`.
     * The complete length of the decomposition will be returned.
     *
     * If `u` has no compatibility decomposition, zero should be returned.
     *
     * The Unicode standard guarantees that a buffer of length #HB_UNICODE_MAX_DECOMPOSITION_LEN codepoints will always be sufficient for any
     * compatibility decomposition plus an terminating value of 0.  Consequently, `decompose` must be allocated by the caller to be at least this length.  Implementations
     * of this function type must ensure that they do not write past the provided array.
     * @callback
     * @param ufuncs a Unicode function structure
     * @param u codepoint to decompose
     * @param decomposed address of codepoint array (of length #HB_UNICODE_MAX_DECOMPOSITION_LEN) to write decomposition into
     * @returns number of codepoints in the full compatibility decomposition of @u, or 0 if no decomposition available.
     */
    interface unicode_decompose_compatibility_func_t {
        (
            ufuncs: unicode_funcs_t,
            u: codepoint_t,
            decomposed: codepoint_t
        ): number;
    }
    /**
     * A virtual method for the #hb_unicode_funcs_t structure.
     *
     * This method should decompose an input Unicode code point,
     * returning the two decomposed code points in #hb_codepoint_t
     * output parameters (if successful). The method must return an
     * #hb_bool_t indicating the success of the composition.
     * @callback
     * @param ufuncs A Unicode-functions structure
     * @param ab The code point to decompose
     * @returns `true` if @ab decomposed, `false` otherwise
     */
    interface unicode_decompose_func_t {
        (ufuncs: unicode_funcs_t, ab: codepoint_t): bool_t;
    }
    /**
     * A virtual method for the #hb_unicode_funcs_t structure.
     * @callback
     * @param ufuncs A Unicode-functions structure
     * @param unicode The code point to query
     */
    interface unicode_eastasian_width_func_t {
        (ufuncs: unicode_funcs_t, unicode: codepoint_t): number;
    }
    /**
     * A virtual method for the #hb_unicode_funcs_t structure.
     *
     * This method should retrieve the General Category property for
     * a specified Unicode code point.
     * @callback
     * @param ufuncs A Unicode-functions structure
     * @param unicode The code point to query
     * @returns The #hb_unicode_general_category_t of @unicode
     */
    interface unicode_general_category_func_t {
        (
            ufuncs: unicode_funcs_t,
            unicode: codepoint_t
        ): unicode_general_category_t;
    }
    /**
     * A virtual method for the #hb_unicode_funcs_t structure.
     *
     * This method should retrieve the Bi-Directional Mirroring Glyph
     * code point for a specified Unicode code point.
     *
     * <note>Note: If a code point does not have a specified
     * Bi-Directional Mirroring Glyph defined, the method should
     * return the original code point.</note>
     * @callback
     * @param ufuncs A Unicode-functions structure
     * @param unicode The code point to query
     * @returns The #hb_codepoint_t of the Mirroring Glyph for @unicode
     */
    interface unicode_mirroring_func_t {
        (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t;
    }
    /**
     * A virtual method for the #hb_unicode_funcs_t structure.
     *
     * This method should retrieve the Script property for a
     * specified Unicode code point.
     * @callback
     * @param ufuncs A Unicode-functions structure
     * @param unicode The code point to query
     * @returns The #hb_script_t of @unicode
     */
    interface unicode_script_func_t {
        (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t;
    }
    interface aat_layout_feature_selector_info_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.aat_layout_feature_selector_info_t

        /**
         * The selector's name identifier
         * @field
         */
        name_id: ot_name_id_t;
        /**
         * The value to turn the selector on
         * @field
         */
        enable: aat_layout_feature_selector_t;
        /**
         * The value to turn the selector off
         * @field
         */
        disable: aat_layout_feature_selector_t;
    }

    /**
     * Structure representing a setting for an #hb_aat_layout_feature_type_t.
     * @record
     */
    class aat_layout_feature_selector_info_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.aat_layout_feature_selector_info_t

        static name: string;
    }

    interface blob_t {}

    /**
     * Data type for blobs. A blob wraps a chunk of binary
     * data and facilitates its lifecycle management between
     * a client program and HarfBuzz.
     * @record
     */
    class blob_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.blob_t

        static name: string;
    }

    interface buffer_t {}

    /**
     * The main structure holding the input text and its properties before shaping,
     * and output glyphs and their information after shaping.
     * @record
     */
    class buffer_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.buffer_t

        static name: string;
    }

    interface color_line_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.color_line_t

        data: any;
        get_color_stops: color_line_get_color_stops_func_t;
        get_color_stops_user_data: any;
        get_extend: color_line_get_extend_func_t;
        get_extend_user_data: any;
        reserved0: any;
        reserved1: any;
        reserved2: any;
        reserved3: any;
        reserved5: any;
        reserved6: any;
        reserved7: any;
        reserved8: any;
    }

    /**
     * A struct containing color information for a gradient.
     * @record
     */
    class color_line_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.color_line_t

        static name: string;
    }

    interface color_stop_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.color_stop_t

        /**
         * the offset of the color stop
         * @field
         */
        offset: number;
        /**
         * whether the color is the foreground
         * @field
         */
        is_foreground: bool_t;
        /**
         * the color, unpremultiplied
         * @field
         */
        color: color_t;
    }

    /**
     * Information about a color stop on a color line.
     *
     * Color lines typically have offsets ranging between 0 and 1,
     * but that is not required.
     *
     * Note: despite `color` being unpremultiplied here, interpolation in
     * gradients shall happen in premultiplied space. See the OpenType spec
     * [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
     * section for details.
     * @record
     */
    class color_stop_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.color_stop_t

        static name: string;
    }

    interface draw_funcs_t {}

    /**
     * Glyph draw callbacks.
     *
     * #hb_draw_move_to_func_t, #hb_draw_line_to_func_t and
     * #hb_draw_cubic_to_func_t calls are necessary to be defined but we translate
     * #hb_draw_quadratic_to_func_t calls to #hb_draw_cubic_to_func_t if the
     * callback isn't defined.
     * @record
     */
    class draw_funcs_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.draw_funcs_t

        static name: string;
    }

    interface draw_state_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.draw_state_t

        /**
         * Whether there is an open path
         * @field
         */
        path_open: bool_t;
        /**
         * X component of the start of current path
         * @field
         */
        path_start_x: number;
        /**
         * Y component of the start of current path
         * @field
         */
        path_start_y: number;
        /**
         * X component of current point
         * @field
         */
        current_x: number;
        /**
         * Y component of current point
         * @field
         */
        current_y: number;
    }

    /**
     * Current drawing state.
     * @record
     */
    class draw_state_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.draw_state_t

        static name: string;
    }

    interface face_t {}

    /**
     * Data type for holding font faces.
     * @record
     */
    class face_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.face_t

        static name: string;
    }

    interface feature_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.feature_t

        /**
         * The #hb_tag_t tag of the feature
         * @field
         */
        tag: tag_t;
        /**
         * The value of the feature. 0 disables the feature, non-zero (usually
         * 1) enables the feature.  For features implemented as lookup type 3 (like
         * 'salt') the `value` is a one based index into the alternates.
         * @field
         */
        value: number;
        /**
         * the cluster to start applying this feature setting (inclusive).
         * @field
         */
        start: number;
        /**
         * the cluster to end applying this feature setting (exclusive).
         * @field
         */
        end: number;

        // Owm methods of HarfBuzz-0.0.HarfBuzz.feature_t

        /**
         * Converts a #hb_feature_t into a `NULL`-terminated string in the format
         * understood by hb_feature_from_string(). The client in responsible for
         * allocating big enough size for `buf,` 128 bytes is more than enough.
         */
        _string(): /* buf */ string[];
    }

    /**
     * The #hb_feature_t is the structure that holds information about requested
     * feature application. The feature will be applied with the given value to all
     * glyphs which are in clusters between `start` (inclusive) and `end` (exclusive).
     * Setting start to #HB_FEATURE_GLOBAL_START and end to #HB_FEATURE_GLOBAL_END
     * specifies that the feature always applies to the entire buffer.
     * @record
     */
    class feature_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.feature_t

        static name: string;
    }

    interface font_extents_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.font_extents_t

        /**
         * The height of typographic ascenders.
         * @field
         */
        ascender: position_t;
        /**
         * The depth of typographic descenders.
         * @field
         */
        descender: position_t;
        /**
         * The suggested line-spacing gap.
         * @field
         */
        line_gap: position_t;
    }

    /**
     * Font-wide extent values, measured in font units.
     *
     * Note that typically `ascender` is positive and `descender`
     * negative, in coordinate systems that grow up.
     * @record
     */
    class font_extents_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.font_extents_t

        static name: string;
    }

    interface font_funcs_t {}

    /**
     * Data type containing a set of virtual methods used for
     * working on #hb_font_t font objects.
     *
     * HarfBuzz provides a lightweight default function for each of
     * the methods in #hb_font_funcs_t. Client programs can implement
     * their own replacements for the individual font functions, as
     * needed, and replace the default by calling the setter for a
     * method.
     * @record
     */
    class font_funcs_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.font_funcs_t

        static name: string;
    }

    interface font_t {}

    /**
     * Data type for holding fonts.
     * @record
     */
    class font_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.font_t

        static name: string;
    }

    interface glyph_extents_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_extents_t

        /**
         * Distance from the x-origin to the left extremum of the glyph.
         * @field
         */
        x_bearing: position_t;
        /**
         * Distance from the top extremum of the glyph to the y-origin.
         * @field
         */
        y_bearing: position_t;
        /**
         * Distance from the left extremum of the glyph to the right extremum.
         * @field
         */
        width: position_t;
        /**
         * Distance from the top extremum of the glyph to the bottom extremum.
         * @field
         */
        height: position_t;
    }

    /**
     * Glyph extent values, measured in font units.
     *
     * Note that `height` is negative, in coordinate systems that grow up.
     * @record
     */
    class glyph_extents_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_extents_t

        static name: string;
    }

    interface glyph_info_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_info_t

        /**
         * either a Unicode code point (before shaping) or a glyph index
         *             (after shaping).
         * @field
         */
        codepoint: codepoint_t;
        /**
         * the index of the character in the original text that corresponds
         *           to this #hb_glyph_info_t, or whatever the client passes to
         *           hb_buffer_add(). More than one #hb_glyph_info_t can have the same
         *           `cluster` value, if they resulted from the same character (e.g. one
         *           to many glyph substitution), and when more than one character gets
         *           merged in the same glyph (e.g. many to one glyph substitution) the
         *           #hb_glyph_info_t will have the smallest cluster value of them.
         *           By default some characters are merged into the same cluster
         *           (e.g. combining marks have the same cluster as their bases)
         *           even if they are separate glyphs, hb_buffer_set_cluster_level()
         *           allow selecting more fine-grained cluster handling.
         * @field
         */
        cluster: number;
    }

    /**
     * The #hb_glyph_info_t is the structure that holds information about the
     * glyphs and their relation to input text.
     * @record
     */
    class glyph_info_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_info_t

        static name: string;
    }

    interface glyph_position_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_position_t

        /**
         * how much the line advances after drawing this glyph when setting
         *             text in horizontal direction.
         * @field
         */
        x_advance: position_t;
        /**
         * how much the line advances after drawing this glyph when setting
         *             text in vertical direction.
         * @field
         */
        y_advance: position_t;
        /**
         * how much the glyph moves on the X-axis before drawing it, this
         *            should not affect how much the line advances.
         * @field
         */
        x_offset: position_t;
        /**
         * how much the glyph moves on the Y-axis before drawing it, this
         *            should not affect how much the line advances.
         * @field
         */
        y_offset: position_t;
    }

    /**
     * The #hb_glyph_position_t is the structure that holds the positions of the
     * glyph in both horizontal and vertical directions. All positions in
     * #hb_glyph_position_t are relative to the current point.
     * @record
     */
    class glyph_position_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_position_t

        static name: string;
    }

    interface language_t {
        // Owm methods of HarfBuzz-0.0.HarfBuzz.language_t

        /**
         * Converts an #hb_language_t to a string.
         * @returns  A `NULL`-terminated string representing the @language. Must not be freed by the caller.
         */
        _string(): string | null;
    }

    /**
     * Data type for languages. Each #hb_language_t corresponds to a BCP 47
     * language tag.
     * @record
     */
    class language_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.language_t

        static name: string;
    }

    interface map_t {}

    /**
     * Data type for holding integer-to-integer hash maps.
     * @record
     */
    class map_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.map_t

        static name: string;
    }

    interface ot_color_layer_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t

        /**
         * the glyph ID of the layer
         * @field
         */
        glyph: codepoint_t;
        /**
         * the palette color index of the layer
         * @field
         */
        color_index: number;
    }

    /**
     * Pairs of glyph and color index.
     *
     * A color index of 0xFFFF does not refer to a palette
     * color, but indicates that the foreground color should
     * be used.
     * @record
     */
    class ot_color_layer_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t

        static name: string;
    }

    interface ot_math_glyph_part_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t

        /**
         * The glyph index of the variant part
         * @field
         */
        glyph: codepoint_t;
        /**
         * The length of the connector on the starting side of the variant part
         * @field
         */
        start_connector_length: position_t;
        /**
         * The length of the connector on the ending side of the variant part
         * @field
         */
        end_connector_length: position_t;
        /**
         * The total advance of the part
         * @field
         */
        full_advance: position_t;
        /**
         * #hb_ot_math_glyph_part_flags_t flags for the part
         * @field
         */
        flags: ot_math_glyph_part_flags_t;
    }

    /**
     * Data type to hold information for a "part" component of a math-variant glyph.
     * Large variants for stretchable math glyphs (such as parentheses) can be constructed
     * on the fly from parts.
     * @record
     */
    class ot_math_glyph_part_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t

        static name: string;
    }

    interface ot_math_glyph_variant_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t

        /**
         * The glyph index of the variant
         * @field
         */
        glyph: codepoint_t;
        /**
         * The advance width of the variant
         * @field
         */
        advance: position_t;
    }

    /**
     * Data type to hold math-variant information for a glyph.
     * @record
     */
    class ot_math_glyph_variant_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t

        static name: string;
    }

    interface ot_math_kern_entry_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_kern_entry_t

        /**
         * The maximum height at which this entry should be used
         * @field
         */
        max_correction_height: position_t;
        /**
         * The kern value of the entry
         * @field
         */
        kern_value: position_t;
    }

    /**
     * Data type to hold math kerning (cut-in) information for a glyph.
     * @record
     */
    class ot_math_kern_entry_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_kern_entry_t

        static name: string;
    }

    interface ot_name_entry_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t

        /**
         * name ID
         * @field
         */
        name_id: ot_name_id_t;
        /**
         * language
         * @field
         */
        language: language_t;
    }

    /**
     * Structure representing a name ID in a particular language.
     * @record
     */
    class ot_name_entry_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t

        static name: string;
    }

    interface ot_var_axis_info_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t

        /**
         * Index of the axis in the variation-axis array
         * @field
         */
        axis_index: number;
        /**
         * The #hb_tag_t tag identifying the design variation of the axis
         * @field
         */
        tag: tag_t;
        /**
         * The `name` table Name ID that provides display names for the axis
         * @field
         */
        name_id: ot_name_id_t;
        /**
         * The #hb_ot_var_axis_flags_t flags for the axis
         * @field
         */
        flags: ot_var_axis_flags_t;
        /**
         * The minimum value on the variation axis that the font covers
         * @field
         */
        min_value: number;
        /**
         * The position on the variation axis corresponding to the font's defaults
         * @field
         */
        default_value: number;
        /**
         * The maximum value on the variation axis that the font covers
         * @field
         */
        max_value: number;
    }

    /**
     * Data type for holding variation-axis values.
     *
     * The minimum, default, and maximum values are in un-normalized, user scales.
     *
     * <note>Note: at present, the only flag defined for `flags` is
     * #HB_OT_VAR_AXIS_FLAG_HIDDEN.</note>
     * @record
     */
    class ot_var_axis_info_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t

        static name: string;
    }

    interface ot_var_axis_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t

        /**
         * axis tag
         * @field
         */
        tag: tag_t;
        /**
         * axis name identifier
         * @field
         */
        name_id: ot_name_id_t;
        /**
         * minimum value of the axis
         * @field
         */
        min_value: number;
        /**
         * default value of the axis
         * @field
         */
        default_value: number;
        /**
         * maximum value of the axis
         * @field
         */
        max_value: number;
    }

    /**
     * Use #hb_ot_var_axis_info_t instead.
     * @record
     */
    class ot_var_axis_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t

        static name: string;
    }

    interface paint_funcs_t {}

    /**
     * Glyph paint callbacks.
     *
     * The callbacks assume that the caller maintains a stack
     * of current transforms, clips and intermediate surfaces,
     * as evidenced by the pairs of push/pop callbacks. The
     * push/pop calls will be properly nested, so it is fine
     * to store the different kinds of object on a single stack.
     *
     * Not all callbacks are required for all kinds of glyphs.
     * For rendering COLRv0 or non-color outline glyphs, the
     * gradient callbacks are not needed, and the composite
     * callback only needs to handle simple alpha compositing
     * (#HB_PAINT_COMPOSITE_MODE_SRC_OVER).
     *
     * The paint-image callback is only needed for glyphs
     * with image blobs in the CBDT, sbix or SVG tables.
     *
     * The custom-palette-color callback is only necessary if
     * you want to override colors from the font palette with
     * custom colors.
     * @record
     */
    class paint_funcs_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.paint_funcs_t

        static name: string;
    }

    interface segment_properties_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.segment_properties_t

        /**
         * the #hb_direction_t of the buffer, see hb_buffer_set_direction().
         * @field
         */
        direction: direction_t;
        /**
         * the #hb_script_t of the buffer, see hb_buffer_set_script().
         * @field
         */
        script: script_t;
        /**
         * the #hb_language_t of the buffer, see hb_buffer_set_language().
         * @field
         */
        language: language_t;
    }

    /**
     * The structure that holds various text properties of an #hb_buffer_t. Can be
     * set and retrieved using hb_buffer_set_segment_properties() and
     * hb_buffer_get_segment_properties(), respectively.
     * @record
     */
    class segment_properties_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.segment_properties_t

        static name: string;
    }

    interface set_t {}

    /**
     * Data type for holding a set of integers. #hb_set_t's are
     * used to gather and contain glyph IDs, Unicode code
     * points, and various other collections of discrete
     * values.
     * @record
     */
    class set_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.set_t

        static name: string;
    }

    interface shape_plan_t {}

    /**
     * Data type for holding a shaping plan.
     *
     * Shape plans contain information about how HarfBuzz will shape a
     * particular text segment, based on the segment's properties and the
     * capabilities in the font face in use.
     *
     * Shape plans can be queried about how shaping will perform, given a set
     * of specific input parameters (script, language, direction, features,
     * etc.).
     * @record
     */
    class shape_plan_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.shape_plan_t

        static name: string;
    }

    interface unicode_funcs_t {}

    /**
     * Data type containing a set of virtual methods used for
     * accessing various Unicode character properties.
     *
     * HarfBuzz provides a default function for each of the
     * methods in #hb_unicode_funcs_t. Client programs can implement
     * their own replacements for the individual Unicode functions, as
     * needed, and replace the default by calling the setter for a
     * method.
     * @record
     */
    class unicode_funcs_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.unicode_funcs_t

        static name: string;
    }

    interface user_data_key_t {}

    /**
     * Data structure for holding user-data keys.
     * @record
     */
    class user_data_key_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.user_data_key_t

        static name: string;
    }

    interface variation_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.variation_t

        /**
         * The #hb_tag_t tag of the variation-axis name
         * @field
         */
        tag: tag_t;
        /**
         * The value of the variation axis
         * @field
         */
        value: number;

        // Owm methods of HarfBuzz-0.0.HarfBuzz.variation_t

        /**
         * Converts an #hb_variation_t into a `NULL`-terminated string in the format
         * understood by hb_variation_from_string(). The client in responsible for
         * allocating big enough size for `buf,` 128 bytes is more than enough.
         */
        _string(): /* buf */ string[];
    }

    /**
     * Data type for holding variation data. Registered OpenType
     * variation-axis tags are listed in
     * [OpenType Axis Tag Registry](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg).
     * @record
     */
    class variation_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.variation_t

        static name: string;
    }

    interface var_int_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.var_int_t

        u32: number;
        i32: number;
        u16: number[];
        i16: number[];
        u8: Uint8Array;
        i8: Uint8Array;
    }

    class var_int_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.var_int_t

        static name: string;
    }

    interface var_num_t {
        // Own fields of HarfBuzz-0.0.HarfBuzz.var_num_t

        f: number;
        u32: number;
        i32: number;
        u16: number[];
        i16: number[];
        u8: Uint8Array;
        i8: Uint8Array;
    }

    class var_num_t {
        // Own properties of HarfBuzz-0.0.HarfBuzz.var_num_t

        static name: string;
    }

    type bool_t = number;
    type codepoint_t = number;
    type color_t = number;
    type font_get_font_h_extents_func_t = font_get_font_extents_func_t;
    type font_get_font_v_extents_func_t = font_get_font_extents_func_t;
    type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t;
    type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t;
    type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t;
    type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t;
    type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t;
    type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t;
    type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t;
    type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t;
    type mask_t = number;
    type ot_name_id_t = number;
    type position_t = number;
    type tag_t = number;
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

export default HarfBuzz;
// END

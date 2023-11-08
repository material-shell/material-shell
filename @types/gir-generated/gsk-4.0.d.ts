/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gsk-4.0-import.d.ts';
/**
 * Gsk-4.0
 */

import type Graphene from './graphene-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Gdk from './gdk-4.0.js';
import type cairo from './cairo-1.0.js';
import type PangoCairo from './pangocairo-1.0.js';
import type Pango from './pango-1.0.js';
import type HarfBuzz from './harfbuzz-0.0.js';
import type freetype2 from './freetype2-2.0.js';
import type Gio from './gio-2.0.js';
import type GdkPixbuf from './gdkpixbuf-2.0.js';
import type GModule from './gmodule-2.0.js';

export namespace Gsk {
    /**
     * The blend modes available for render nodes.
     *
     * The implementation of each blend mode is deferred to the
     * rendering pipeline.
     *
     * See <https://www.w3.org/TR/compositing-1/#blending> for more information
     * on blending and blend modes.
     */
    enum BlendMode {
        /**
         * The default blend mode, which specifies no blending
         */
        DEFAULT,
        /**
         * The source color is multiplied by the destination
         *   and replaces the destination
         */
        MULTIPLY,
        /**
         * Multiplies the complements of the destination and source
         *   color values, then complements the result.
         */
        SCREEN,
        /**
         * Multiplies or screens the colors, depending on the
         *   destination color value. This is the inverse of hard-list
         */
        OVERLAY,
        /**
         * Selects the darker of the destination and source colors
         */
        DARKEN,
        /**
         * Selects the lighter of the destination and source colors
         */
        LIGHTEN,
        /**
         * Brightens the destination color to reflect the source color
         */
        COLOR_DODGE,
        /**
         * Darkens the destination color to reflect the source color
         */
        COLOR_BURN,
        /**
         * Multiplies or screens the colors, depending on the source color value
         */
        HARD_LIGHT,
        /**
         * Darkens or lightens the colors, depending on the source color value
         */
        SOFT_LIGHT,
        /**
         * Subtracts the darker of the two constituent colors from the lighter color
         */
        DIFFERENCE,
        /**
         * Produces an effect similar to that of the difference mode but lower in contrast
         */
        EXCLUSION,
        /**
         * Creates a color with the hue and saturation of the source color and the luminosity of the destination color
         */
        COLOR,
        /**
         * Creates a color with the hue of the source color and the saturation and luminosity of the destination color
         */
        HUE,
        /**
         * Creates a color with the saturation of the source color and the hue and luminosity of the destination color
         */
        SATURATION,
        /**
         * Creates a color with the luminosity of the source color and the hue and saturation of the destination color
         */
        LUMINOSITY,
    }
    /**
     * The corner indices used by `GskRoundedRect`.
     */
    enum Corner {
        /**
         * The top left corner
         */
        TOP_LEFT,
        /**
         * The top right corner
         */
        TOP_RIGHT,
        /**
         * The bottom right corner
         */
        BOTTOM_RIGHT,
        /**
         * The bottom left corner
         */
        BOTTOM_LEFT,
    }
    /**
     * This defines the types of the uniforms that `GskGLShaders`
     * declare.
     *
     * It defines both what the type is called in the GLSL shader
     * code, and what the corresponding C type is on the Gtk side.
     */
    enum GLUniformType {
        /**
         * No type, used for uninitialized or unspecified values.
         */
        NONE,
        /**
         * A float uniform
         */
        FLOAT,
        /**
         * A GLSL int / gint32 uniform
         */
        INT,
        /**
         * A GLSL uint / guint32 uniform
         */
        UINT,
        /**
         * A GLSL bool / gboolean uniform
         */
        BOOL,
        /**
         * A GLSL vec2 / graphene_vec2_t uniform
         */
        VEC2,
        /**
         * A GLSL vec3 / graphene_vec3_t uniform
         */
        VEC3,
        /**
         * A GLSL vec4 / graphene_vec4_t uniform
         */
        VEC4,
    }
    /**
     * The mask modes available for mask nodes.
     */
    enum MaskMode {
        /**
         * Use the alpha channel of the mask
         */
        ALPHA,
        /**
         * Use the inverted alpha channel of the mask
         */
        INVERTED_ALPHA,
        /**
         * Use the luminance of the mask,
         *     multiplied by mask alpha
         */
        LUMINANCE,
        /**
         * Use the inverted luminance of the mask,
         *     multiplied by mask alpha
         */
        INVERTED_LUMINANCE,
    }
    /**
     * The type of a node determines what the node is rendering.
     */
    enum RenderNodeType {
        /**
         * Error type. No node will ever have this type.
         */
        NOT_A_RENDER_NODE,
        /**
         * A node containing a stack of children
         */
        CONTAINER_NODE,
        /**
         * A node drawing a `cairo_surface_t`
         */
        CAIRO_NODE,
        /**
         * A node drawing a single color rectangle
         */
        COLOR_NODE,
        /**
         * A node drawing a linear gradient
         */
        LINEAR_GRADIENT_NODE,
        /**
         * A node drawing a repeating linear gradient
         */
        REPEATING_LINEAR_GRADIENT_NODE,
        /**
         * A node drawing a radial gradient
         */
        RADIAL_GRADIENT_NODE,
        /**
         * A node drawing a repeating radial gradient
         */
        REPEATING_RADIAL_GRADIENT_NODE,
        /**
         * A node drawing a conic gradient
         */
        CONIC_GRADIENT_NODE,
        /**
         * A node stroking a border around an area
         */
        BORDER_NODE,
        /**
         * A node drawing a `GdkTexture`
         */
        TEXTURE_NODE,
        /**
         * A node drawing an inset shadow
         */
        INSET_SHADOW_NODE,
        /**
         * A node drawing an outset shadow
         */
        OUTSET_SHADOW_NODE,
        /**
         * A node that renders its child after applying a matrix transform
         */
        TRANSFORM_NODE,
        /**
         * A node that changes the opacity of its child
         */
        OPACITY_NODE,
        /**
         * A node that applies a color matrix to every pixel
         */
        COLOR_MATRIX_NODE,
        /**
         * A node that repeats the child's contents
         */
        REPEAT_NODE,
        /**
         * A node that clips its child to a rectangular area
         */
        CLIP_NODE,
        /**
         * A node that clips its child to a rounded rectangle
         */
        ROUNDED_CLIP_NODE,
        /**
         * A node that draws a shadow below its child
         */
        SHADOW_NODE,
        /**
         * A node that blends two children together
         */
        BLEND_NODE,
        /**
         * A node that cross-fades between two children
         */
        CROSS_FADE_NODE,
        /**
         * A node containing a glyph string
         */
        TEXT_NODE,
        /**
         * A node that applies a blur
         */
        BLUR_NODE,
        /**
         * Debug information that does not affect the rendering
         */
        DEBUG_NODE,
        /**
         * A node that uses OpenGL fragment shaders to render
         */
        GL_SHADER_NODE,
        /**
         * A node drawing a `GdkTexture` scaled and filtered (Since: 4.10)
         */
        TEXTURE_SCALE_NODE,
        /**
         * A node that masks one child with another (Since: 4.10)
         */
        MASK_NODE,
    }
    /**
     * The filters used when scaling texture data.
     *
     * The actual implementation of each filter is deferred to the
     * rendering pipeline.
     */
    enum ScalingFilter {
        /**
         * linear interpolation filter
         */
        LINEAR,
        /**
         * nearest neighbor interpolation filter
         */
        NEAREST,
        /**
         * linear interpolation along each axis,
         *   plus mipmap generation, with linear interpolation along the mipmap
         *   levels
         */
        TRILINEAR,
    }
    /**
     * Errors that can happen during (de)serialization.
     */
    enum SerializationError {
        /**
         * The format can not be identified
         */
        UNSUPPORTED_FORMAT,
        /**
         * The version of the data is not
         *   understood
         */
        UNSUPPORTED_VERSION,
        /**
         * The given data may not exist in
         *   a proper serialization
         */
        INVALID_DATA,
    }
    /**
     * The categories of matrices relevant for GSK and GTK.
     *
     * Note that any category includes matrices of all later categories.
     * So if you want to for example check if a matrix is a 2D matrix,
     * `category >= GSK_TRANSFORM_CATEGORY_2D` is the way to do this.
     *
     * Also keep in mind that rounding errors may cause matrices to not
     * conform to their categories. Otherwise, matrix operations done via
     * multiplication will not worsen categories. So for the matrix
     * multiplication `C = A * B`, `category(C) = MIN (category(A), category(B))`.
     */
    enum TransformCategory {
        /**
         * The category of the matrix has not been
         *   determined.
         */
        UNKNOWN,
        /**
         * Analyzing the matrix concluded that it does
         *   not fit in any other category.
         */
        ANY,
        /**
         * The matrix is a 3D matrix. This means that
         *   the w column (the last column) has the values (0, 0, 0, 1).
         */
        TODO_3D,
        /**
         * The matrix is a 2D matrix. This is equivalent
         *   to graphene_matrix_is_2d() returning %TRUE. In particular, this
         *   means that Cairo can deal with the matrix.
         */
        TODO_2D,
        /**
         * The matrix is a combination of 2D scale
         *   and 2D translation operations. In particular, this means that any
         *   rectangle can be transformed exactly using this matrix.
         */
        TODO_2D_AFFINE,
        /**
         * The matrix is a 2D translation.
         */
        TODO_2D_TRANSLATE,
        /**
         * The matrix is the identity matrix.
         */
        IDENTITY,
    }
    function serialization_error_quark(): GLib.Quark;
    /**
     * Parses the given `string` into a transform and puts it in
     * `out_transform`.
     *
     * Strings printed via [method`Gsk`.Transform.to_string]
     * can be read in again successfully using this function.
     *
     * If `string` does not describe a valid transform, %FALSE is
     * returned and %NULL is put in `out_transform`.
     * @param string the string to parse
     * @returns %TRUE if @string described a valid transform.
     */
    function transform_parse(
        string: string | null
    ): [/* returnType */ boolean, /* out_transform */ Transform];
    /**
     * Retrieves the `GskRenderNode` stored inside the given `value`, and acquires
     * a reference to it.
     * @param value a [struct`GObject`.Value] initialized with type `GSK_TYPE_RENDER_NODE`
     * @returns a `GskRenderNode`
     */
    function value_dup_render_node(value: any): RenderNode | null;
    /**
     * Retrieves the `GskRenderNode` stored inside the given `value`.
     * @param value a `GValue` initialized with type `GSK_TYPE_RENDER_NODE`
     * @returns a `GskRenderNode`
     */
    function value_get_render_node(value: any): RenderNode | null;
    /**
     * Stores the given `GskRenderNode` inside `value`.
     *
     * The [struct`GObject`.Value] will acquire a reference to the `node`.
     * @param value a [struct`GObject`.Value] initialized with type `GSK_TYPE_RENDER_NODE`
     * @param node a `GskRenderNode`
     */
    function value_set_render_node(value: any, node: RenderNode): void;
    /**
     * Stores the given `GskRenderNode` inside `value`.
     *
     * This function transfers the ownership of the `node` to the `GValue`.
     * @param value a [struct`GObject`.Value] initialized with type `GSK_TYPE_RENDER_NODE`
     * @param node a `GskRenderNode`
     */
    function value_take_render_node(value: any, node: RenderNode | null): void;
    /**
     * Type of callback that is called when an error occurs
     * during node deserialization.
     * @callback
     * @param start start of the error location
     * @param end end of the error location
     * @param error the error
     */
    interface ParseErrorFunc {
        (start: ParseLocation, end: ParseLocation, error: GLib.Error): void;
    }
    interface BlendNode {
        // Owm methods of Gsk-4.0.Gsk.BlendNode

        /**
         * Retrieves the blend mode used by `node`.
         * @returns the blend mode
         */
        get_blend_mode(): BlendMode;
        /**
         * Retrieves the bottom `GskRenderNode` child of the `node`.
         * @returns the bottom child node
         */
        get_bottom_child(): RenderNode;
        /**
         * Retrieves the top `GskRenderNode` child of the `node`.
         * @returns the top child node
         */
        get_top_child(): RenderNode;
    }

    /**
     * A render node applying a blending function between its two child nodes.
     * @class
     */
    class BlendNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.BlendNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.BlendNode

        /**
         * Creates a `GskRenderNode` that will use `blend_mode` to blend the `top`
         * node onto the `bottom` node.
         * @constructor
         * @param bottom The bottom node to be drawn
         * @param top The node to be blended onto the `bottom` node
         * @param blend_mode The blend mode to use
         * @returns A new `GskRenderNode`
         */
        constructor(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode);
        /**
         * Creates a `GskRenderNode` that will use `blend_mode` to blend the `top`
         * node onto the `bottom` node.
         * @constructor
         * @param bottom The bottom node to be drawn
         * @param top The node to be blended onto the `bottom` node
         * @param blend_mode The blend mode to use
         * @returns A new `GskRenderNode`
         */
        static new(
            bottom: RenderNode,
            top: RenderNode,
            blend_mode: BlendMode
        ): BlendNode;
    }

    interface BlurNode {
        // Owm methods of Gsk-4.0.Gsk.BlurNode

        /**
         * Retrieves the child `GskRenderNode` of the blur `node`.
         * @returns the blurred child node
         */
        get_child(): RenderNode;
        /**
         * Retrieves the blur radius of the `node`.
         * @returns the blur radius
         */
        get_radius(): number;
    }

    /**
     * A render node applying a blur effect to its single child.
     * @class
     */
    class BlurNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.BlurNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.BlurNode

        /**
         * Creates a render node that blurs the child.
         * @constructor
         * @param child the child node to blur
         * @param radius the blur radius. Must be positive
         * @returns a new `GskRenderNode`
         */
        constructor(child: RenderNode, radius: number);
        /**
         * Creates a render node that blurs the child.
         * @constructor
         * @param child the child node to blur
         * @param radius the blur radius. Must be positive
         * @returns a new `GskRenderNode`
         */
        static new(child: RenderNode, radius: number): BlurNode;
    }

    interface BorderNode {
        // Owm methods of Gsk-4.0.Gsk.BorderNode

        /**
         * Retrieves the colors of the border.
         * @returns an array of 4 `GdkRGBA` structs     for the top, right, bottom and left color of the border
         */
        get_colors(): Gdk.RGBA;
        /**
         * Retrieves the outline of the border.
         * @returns the outline of the border
         */
        get_outline(): RoundedRect;
        /**
         * Retrieves the stroke widths of the border.
         * @returns an array of 4 floats   for the top, right, bottom and left stroke width of the border,   respectively
         */
        get_widths(): number[];
    }

    /**
     * A render node for a border.
     * @class
     */
    class BorderNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.BorderNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.BorderNode

        /**
         * Creates a `GskRenderNode` that will stroke a border rectangle inside the
         * given `outline`.
         *
         * The 4 sides of the border can have different widths and colors.
         * @constructor
         * @param outline a `GskRoundedRect` describing the outline of the border
         * @param border_width the stroke width of the border on     the top, right, bottom and left side respectively.
         * @param border_color the color used on the top, right,     bottom and left side.
         * @returns A new `GskRenderNode`
         */
        constructor(
            outline: RoundedRect,
            border_width: number[],
            border_color: Gdk.RGBA[]
        );
        /**
         * Creates a `GskRenderNode` that will stroke a border rectangle inside the
         * given `outline`.
         *
         * The 4 sides of the border can have different widths and colors.
         * @constructor
         * @param outline a `GskRoundedRect` describing the outline of the border
         * @param border_width the stroke width of the border on     the top, right, bottom and left side respectively.
         * @param border_color the color used on the top, right,     bottom and left side.
         * @returns A new `GskRenderNode`
         */
        static new(
            outline: RoundedRect,
            border_width: number[],
            border_color: Gdk.RGBA[]
        ): BorderNode;
    }

    module BroadwayRenderer {
        // Constructor properties interface

        interface ConstructorProperties
            extends Renderer.ConstructorProperties {}
    }

    interface BroadwayRenderer {
        // Class property signals of Gsk-4.0.Gsk.BroadwayRenderer

        connect(
            sigName: 'notify::realized',
            callback: ($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::surface',
            callback: ($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::surface',
            callback: ($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::surface', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class BroadwayRenderer extends Renderer {
        // Own properties of Gsk-4.0.Gsk.BroadwayRenderer

        static name: string;
        static $gtype: GObject.GType<BroadwayRenderer>;

        // Constructors of Gsk-4.0.Gsk.BroadwayRenderer

        constructor(config?: BroadwayRenderer.ConstructorProperties);
        /**
         * Creates a new Broadway renderer.
         *
         * The Broadway renderer is the default renderer for the broadway backend.
         * It will only work with broadway surfaces, otherwise it will fail the
         * call to gsk_renderer_realize().
         *
         * This function is only available when GTK was compiled with Broadway
         * support.
         * @constructor
         * @returns a new Broadway renderer.
         */
        constructor();
        /**
         * Creates a new Broadway renderer.
         *
         * The Broadway renderer is the default renderer for the broadway backend.
         * It will only work with broadway surfaces, otherwise it will fail the
         * call to gsk_renderer_realize().
         *
         * This function is only available when GTK was compiled with Broadway
         * support.
         * @constructor
         * @returns a new Broadway renderer.
         */
        static new(): BroadwayRenderer;
        _init(config?: BroadwayRenderer.ConstructorProperties): void;
    }

    interface CairoNode {
        // Owm methods of Gsk-4.0.Gsk.CairoNode

        /**
         * Creates a Cairo context for drawing using the surface associated
         * to the render node.
         *
         * If no surface exists yet, a surface will be created optimized for
         * rendering to `renderer`.
         * @returns a Cairo context used for drawing; use   cairo_destroy() when done drawing
         */
        get_draw_context(): cairo.Context;
        /**
         * Retrieves the Cairo surface used by the render node.
         * @returns a Cairo surface
         */
        get_surface(): cairo.Surface;
    }

    /**
     * A render node for a Cairo surface.
     * @class
     */
    class CairoNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.CairoNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.CairoNode

        /**
         * Creates a `GskRenderNode` that will render a cairo surface
         * into the area given by `bounds`.
         *
         * You can draw to the cairo surface using [method`Gsk`.CairoNode.get_draw_context].
         * @constructor
         * @param bounds the rectangle to render to
         * @returns A new `GskRenderNode`
         */
        constructor(bounds: Graphene.Rect);
        /**
         * Creates a `GskRenderNode` that will render a cairo surface
         * into the area given by `bounds`.
         *
         * You can draw to the cairo surface using [method`Gsk`.CairoNode.get_draw_context].
         * @constructor
         * @param bounds the rectangle to render to
         * @returns A new `GskRenderNode`
         */
        static new(bounds: Graphene.Rect): CairoNode;
    }

    module CairoRenderer {
        // Constructor properties interface

        interface ConstructorProperties
            extends Renderer.ConstructorProperties {}
    }

    interface CairoRenderer {
        // Class property signals of Gsk-4.0.Gsk.CairoRenderer

        connect(
            sigName: 'notify::realized',
            callback: ($obj: CairoRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: CairoRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::surface',
            callback: ($obj: CairoRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::surface',
            callback: ($obj: CairoRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::surface', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * A GSK renderer that is using cairo.
     *
     * Since it is using cairo, this renderer cannot support
     * 3D transformations.
     * @class
     */
    class CairoRenderer extends Renderer {
        // Own properties of Gsk-4.0.Gsk.CairoRenderer

        static name: string;
        static $gtype: GObject.GType<CairoRenderer>;

        // Constructors of Gsk-4.0.Gsk.CairoRenderer

        constructor(config?: CairoRenderer.ConstructorProperties);
        /**
         * Creates a new Cairo renderer.
         *
         * The Cairo renderer is the fallback renderer drawing in ways similar
         * to how GTK 3 drew its content. Its primary use is as comparison tool.
         *
         * The Cairo renderer is incomplete. It cannot render 3D transformed
         * content and will instead render an error marker. Its usage should be
         * avoided.
         * @constructor
         * @returns a new Cairo renderer.
         */
        constructor();
        /**
         * Creates a new Cairo renderer.
         *
         * The Cairo renderer is the fallback renderer drawing in ways similar
         * to how GTK 3 drew its content. Its primary use is as comparison tool.
         *
         * The Cairo renderer is incomplete. It cannot render 3D transformed
         * content and will instead render an error marker. Its usage should be
         * avoided.
         * @constructor
         * @returns a new Cairo renderer.
         */
        static new(): CairoRenderer;
        _init(config?: CairoRenderer.ConstructorProperties): void;
    }

    interface ClipNode {
        // Owm methods of Gsk-4.0.Gsk.ClipNode

        /**
         * Gets the child node that is getting clipped by the given `node`.
         * @returns The child that is getting clipped
         */
        get_child(): RenderNode;
        /**
         * Retrieves the clip rectangle for `node`.
         * @returns a clip rectangle
         */
        get_clip(): Graphene.Rect;
    }

    /**
     * A render node applying a rectangular clip to its single child node.
     * @class
     */
    class ClipNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.ClipNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.ClipNode

        /**
         * Creates a `GskRenderNode` that will clip the `child` to the area
         * given by `clip`.
         * @constructor
         * @param child The node to draw
         * @param clip The clip to apply
         * @returns A new `GskRenderNode`
         */
        constructor(child: RenderNode, clip: Graphene.Rect);
        /**
         * Creates a `GskRenderNode` that will clip the `child` to the area
         * given by `clip`.
         * @constructor
         * @param child The node to draw
         * @param clip The clip to apply
         * @returns A new `GskRenderNode`
         */
        static new(child: RenderNode, clip: Graphene.Rect): ClipNode;
    }

    interface ColorMatrixNode {
        // Owm methods of Gsk-4.0.Gsk.ColorMatrixNode

        /**
         * Gets the child node that is getting its colors modified by the given `node`.
         * @returns The child that is getting its colors modified
         */
        get_child(): RenderNode;
        /**
         * Retrieves the color matrix used by the `node`.
         * @returns a 4x4 color matrix
         */
        get_color_matrix(): Graphene.Matrix;
        /**
         * Retrieves the color offset used by the `node`.
         * @returns a color vector
         */
        get_color_offset(): Graphene.Vec4;
    }

    /**
     * A render node controlling the color matrix of its single child node.
     * @class
     */
    class ColorMatrixNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.ColorMatrixNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.ColorMatrixNode

        /**
         * Creates a `GskRenderNode` that will drawn the `child` with
         * `color_matrix`.
         *
         * In particular, the node will transform colors by applying
         *
         *     pixel = transpose(color_matrix) * pixel + color_offset
         *
         * for every pixel. The transformation operates on unpremultiplied
         * colors, with color components ordered R, G, B, A.
         * @constructor
         * @param child The node to draw
         * @param color_matrix The matrix to apply
         * @param color_offset Values to add to the color
         * @returns A new `GskRenderNode`
         */
        constructor(
            child: RenderNode,
            color_matrix: Graphene.Matrix,
            color_offset: Graphene.Vec4
        );
        /**
         * Creates a `GskRenderNode` that will drawn the `child` with
         * `color_matrix`.
         *
         * In particular, the node will transform colors by applying
         *
         *     pixel = transpose(color_matrix) * pixel + color_offset
         *
         * for every pixel. The transformation operates on unpremultiplied
         * colors, with color components ordered R, G, B, A.
         * @constructor
         * @param child The node to draw
         * @param color_matrix The matrix to apply
         * @param color_offset Values to add to the color
         * @returns A new `GskRenderNode`
         */
        static new(
            child: RenderNode,
            color_matrix: Graphene.Matrix,
            color_offset: Graphene.Vec4
        ): ColorMatrixNode;
    }

    interface ColorNode {
        // Owm methods of Gsk-4.0.Gsk.ColorNode

        /**
         * Retrieves the color of the given `node`.
         * @returns the color of the node
         */
        get_color(): Gdk.RGBA;
    }

    /**
     * A render node for a solid color.
     * @class
     */
    class ColorNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.ColorNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.ColorNode

        /**
         * Creates a `GskRenderNode` that will render the color specified by `rgba` into
         * the area given by `bounds`.
         * @constructor
         * @param rgba a `GdkRGBA` specifying a color
         * @param bounds the rectangle to render the color into
         * @returns A new `GskRenderNode`
         */
        constructor(rgba: Gdk.RGBA, bounds: Graphene.Rect);
        /**
         * Creates a `GskRenderNode` that will render the color specified by `rgba` into
         * the area given by `bounds`.
         * @constructor
         * @param rgba a `GdkRGBA` specifying a color
         * @param bounds the rectangle to render the color into
         * @returns A new `GskRenderNode`
         */
        static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode;
    }

    interface ConicGradientNode {
        // Owm methods of Gsk-4.0.Gsk.ConicGradientNode

        /**
         * Retrieves the angle for the gradient in radians, normalized in [0, 2 * PI].
         *
         * The angle is starting at the top and going clockwise, as expressed
         * in the css specification:
         *
         *     angle = 90 - gsk_conic_gradient_node_get_rotation()
         * @returns the angle for the gradient
         */
        get_angle(): number;
        /**
         * Retrieves the center pointer for the gradient.
         * @returns the center point for the gradient
         */
        get_center(): Graphene.Point;
        /**
         * Retrieves the color stops in the gradient.
         * @returns the color stops in the gradient
         */
        get_color_stops(): ColorStop[];
        /**
         * Retrieves the number of color stops in the gradient.
         * @returns the number of color stops
         */
        get_n_color_stops(): number;
        /**
         * Retrieves the rotation for the gradient in degrees.
         * @returns the rotation for the gradient
         */
        get_rotation(): number;
    }

    /**
     * A render node for a conic gradient.
     * @class
     */
    class ConicGradientNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.ConicGradientNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.ConicGradientNode

        /**
         * Creates a `GskRenderNode` that draws a conic gradient.
         *
         * The conic gradient
         * starts around `center` in the direction of `rotation`. A rotation of 0 means
         * that the gradient points up. Color stops are then added clockwise.
         * @constructor
         * @param bounds the bounds of the node
         * @param center the center of the gradient
         * @param rotation the rotation of the gradient in degrees
         * @param color_stops a pointer to an array of   `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        constructor(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            rotation: number,
            color_stops: ColorStop[]
        );
        /**
         * Creates a `GskRenderNode` that draws a conic gradient.
         *
         * The conic gradient
         * starts around `center` in the direction of `rotation`. A rotation of 0 means
         * that the gradient points up. Color stops are then added clockwise.
         * @constructor
         * @param bounds the bounds of the node
         * @param center the center of the gradient
         * @param rotation the rotation of the gradient in degrees
         * @param color_stops a pointer to an array of   `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        static new(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            rotation: number,
            color_stops: ColorStop[]
        ): ConicGradientNode;
    }

    interface ContainerNode {
        // Owm methods of Gsk-4.0.Gsk.ContainerNode

        /**
         * Gets one of the children of `container`.
         * @param idx the position of the child to get
         * @returns the @idx'th child of @container
         */
        get_child(idx: number): RenderNode;
        /**
         * Retrieves the number of direct children of `node`.
         * @returns the number of children of the `GskRenderNode`
         */
        get_n_children(): number;
    }

    /**
     * A render node that can contain other render nodes.
     * @class
     */
    class ContainerNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.ContainerNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.ContainerNode

        /**
         * Creates a new `GskRenderNode` instance for holding the given `children`.
         *
         * The new node will acquire a reference to each of the children.
         * @constructor
         * @param children The children of the node
         * @returns the new `GskRenderNode`
         */
        constructor(children: RenderNode[]);
        /**
         * Creates a new `GskRenderNode` instance for holding the given `children`.
         *
         * The new node will acquire a reference to each of the children.
         * @constructor
         * @param children The children of the node
         * @returns the new `GskRenderNode`
         */
        static new(children: RenderNode[]): ContainerNode;
    }

    interface CrossFadeNode {
        // Owm methods of Gsk-4.0.Gsk.CrossFadeNode

        /**
         * Retrieves the child `GskRenderNode` at the end of the cross-fade.
         * @returns a `GskRenderNode`
         */
        get_end_child(): RenderNode;
        /**
         * Retrieves the progress value of the cross fade.
         * @returns the progress value, between 0 and 1
         */
        get_progress(): number;
        /**
         * Retrieves the child `GskRenderNode` at the beginning of the cross-fade.
         * @returns a `GskRenderNode`
         */
        get_start_child(): RenderNode;
    }

    /**
     * A render node cross fading between two child nodes.
     * @class
     */
    class CrossFadeNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.CrossFadeNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.CrossFadeNode

        /**
         * Creates a `GskRenderNode` that will do a cross-fade between `start` and `end`.
         * @constructor
         * @param start The start node to be drawn
         * @param end The node to be cross_fadeed onto the `start` node
         * @param progress How far the fade has progressed from start to end. The value will     be clamped to the range [0 ... 1]
         * @returns A new `GskRenderNode`
         */
        constructor(start: RenderNode, end: RenderNode, progress: number);
        /**
         * Creates a `GskRenderNode` that will do a cross-fade between `start` and `end`.
         * @constructor
         * @param start The start node to be drawn
         * @param end The node to be cross_fadeed onto the `start` node
         * @param progress How far the fade has progressed from start to end. The value will     be clamped to the range [0 ... 1]
         * @returns A new `GskRenderNode`
         */
        static new(
            start: RenderNode,
            end: RenderNode,
            progress: number
        ): CrossFadeNode;
    }

    interface DebugNode {
        // Owm methods of Gsk-4.0.Gsk.DebugNode

        /**
         * Gets the child node that is getting drawn by the given `node`.
         * @returns the child `GskRenderNode`
         */
        get_child(): RenderNode;
        /**
         * Gets the debug message that was set on this node
         * @returns The debug message
         */
        get_message(): string | null;
    }

    /**
     * A render node that emits a debugging message when drawing its
     * child node.
     * @class
     */
    class DebugNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.DebugNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.DebugNode

        /**
         * Creates a `GskRenderNode` that will add debug information about
         * the given `child`.
         *
         * Adding this node has no visual effect.
         * @constructor
         * @param child The child to add debug info for
         * @param message The debug message
         * @returns A new `GskRenderNode`
         */
        constructor(child: RenderNode, message: string | null);
        /**
         * Creates a `GskRenderNode` that will add debug information about
         * the given `child`.
         *
         * Adding this node has no visual effect.
         * @constructor
         * @param child The child to add debug info for
         * @param message The debug message
         * @returns A new `GskRenderNode`
         */
        static new(child: RenderNode, message: string | null): DebugNode;
    }

    module GLRenderer {
        // Constructor properties interface

        interface ConstructorProperties
            extends Renderer.ConstructorProperties {}
    }

    interface GLRenderer {
        // Class property signals of Gsk-4.0.Gsk.GLRenderer

        connect(
            sigName: 'notify::realized',
            callback: ($obj: GLRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: GLRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::surface',
            callback: ($obj: GLRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::surface',
            callback: ($obj: GLRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::surface', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class GLRenderer extends Renderer {
        // Own properties of Gsk-4.0.Gsk.GLRenderer

        static name: string;
        static $gtype: GObject.GType<GLRenderer>;

        // Constructors of Gsk-4.0.Gsk.GLRenderer

        constructor(config?: GLRenderer.ConstructorProperties);
        /**
         * Creates a new `GskRenderer` using the new OpenGL renderer.
         * @constructor
         * @returns a new GL renderer
         */
        constructor();
        /**
         * Creates a new `GskRenderer` using the new OpenGL renderer.
         * @constructor
         * @returns a new GL renderer
         */
        static new(): GLRenderer;
        _init(config?: GLRenderer.ConstructorProperties): void;
    }

    module GLShader {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Gsk-4.0.Gsk.GLShader

            /**
             * Resource containing the source code for the shader.
             *
             * If the shader source is not coming from a resource, this
             * will be %NULL.
             */
            resource?: string | null;
            source?: GLib.Bytes | null;
        }
    }

    interface GLShader {
        // Own properties of Gsk-4.0.Gsk.GLShader

        /**
         * Resource containing the source code for the shader.
         *
         * If the shader source is not coming from a resource, this
         * will be %NULL.
         */
        readonly resource: string | null;
        readonly source: GLib.Bytes;

        // Owm methods of Gsk-4.0.Gsk.GLShader

        /**
         * Tries to compile the `shader` for the given `renderer`.
         *
         * If there is a problem, this function returns %FALSE and reports
         * an error. You should use this function before relying on the shader
         * for rendering and use a fallback with a simpler shader or without
         * shaders if it fails.
         *
         * Note that this will modify the rendering state (for example
         * change the current GL context) and requires the renderer to be
         * set up. This means that the widget has to be realized. Commonly you
         * want to call this from the realize signal of a widget, or during
         * widget snapshot.
         * @param renderer a `GskRenderer`
         * @returns %TRUE on success, %FALSE if an error occurred
         */
        compile(renderer: Renderer): boolean;
        /**
         * Looks for a uniform by the name `name,` and returns the index
         * of the uniform, or -1 if it was not found.
         * @param name uniform name
         * @returns The index of the uniform, or -1
         */
        find_uniform_by_name(name: string | null): number;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of bool type.
         * @param args uniform arguments
         * @param idx index of the uniform
         * @returns The value
         */
        get_arg_bool(args: GLib.Bytes, idx: number): boolean;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of float type.
         * @param args uniform arguments
         * @param idx index of the uniform
         * @returns The value
         */
        get_arg_float(args: GLib.Bytes, idx: number): number;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of int type.
         * @param args uniform arguments
         * @param idx index of the uniform
         * @returns The value
         */
        get_arg_int(args: GLib.Bytes, idx: number): number;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of uint type.
         * @param args uniform arguments
         * @param idx index of the uniform
         * @returns The value
         */
        get_arg_uint(args: GLib.Bytes, idx: number): number;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of vec2 type.
         * @param args uniform arguments
         * @param idx index of the uniform
         * @param out_value location to store the uniform value in
         */
        get_arg_vec2(
            args: GLib.Bytes,
            idx: number,
            out_value: Graphene.Vec2
        ): void;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of vec3 type.
         * @param args uniform arguments
         * @param idx index of the uniform
         * @param out_value location to store the uniform value in
         */
        get_arg_vec3(
            args: GLib.Bytes,
            idx: number,
            out_value: Graphene.Vec3
        ): void;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of vec4 type.
         * @param args uniform arguments
         * @param idx index of the uniform
         * @param out_value location to store set the uniform value in
         */
        get_arg_vec4(
            args: GLib.Bytes,
            idx: number,
            out_value: Graphene.Vec4
        ): void;
        /**
         * Get the size of the data block used to specify arguments for this shader.
         * @returns The size of the data block
         */
        get_args_size(): number;
        /**
         * Returns the number of textures that the shader requires.
         *
         * This can be used to check that the a passed shader works
         * in your usecase. It is determined by looking at the highest
         * u_textureN value that the shader defines.
         * @returns The number of texture inputs required by @shader
         */
        get_n_textures(): number;
        /**
         * Get the number of declared uniforms for this shader.
         * @returns The number of declared uniforms
         */
        get_n_uniforms(): number;
        /**
         * Gets the resource path for the GLSL sourcecode being used
         * to render this shader.
         * @returns The resource path for the shader
         */
        get_resource(): string | null;
        /**
         * Gets the GLSL sourcecode being used to render this shader.
         * @returns The source code for the shader
         */
        get_source(): GLib.Bytes;
        /**
         * Get the name of the declared uniform for this shader at index `idx`.
         * @param idx index of the uniform
         * @returns The name of the declared uniform
         */
        get_uniform_name(idx: number): string | null;
        /**
         * Get the offset into the data block where data for this uniforms is stored.
         * @param idx index of the uniform
         * @returns The data offset
         */
        get_uniform_offset(idx: number): number;
        /**
         * Get the type of the declared uniform for this shader at index `idx`.
         * @param idx index of the uniform
         * @returns The type of the declared uniform
         */
        get_uniform_type(idx: number): GLUniformType;

        // Class property signals of Gsk-4.0.Gsk.GLShader

        connect(
            sigName: 'notify::resource',
            callback: ($obj: GLShader, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::resource',
            callback: ($obj: GLShader, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::resource', ...args: any[]): void;
        connect(
            sigName: 'notify::source',
            callback: ($obj: GLShader, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::source',
            callback: ($obj: GLShader, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::source', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * A `GskGLShader` is a snippet of GLSL that is meant to run in the
     * fragment shader of the rendering pipeline.
     *
     * A fragment shader gets the coordinates being rendered as input and
     * produces the pixel values for that particular pixel. Additionally,
     * the shader can declare a set of other input arguments, called
     * uniforms (as they are uniform over all the calls to your shader in
     * each instance of use). A shader can also receive up to 4
     * textures that it can use as input when producing the pixel data.
     *
     * `GskGLShader` is usually used with gtk_snapshot_push_gl_shader()
     * to produce a [class`Gsk`.GLShaderNode] in the rendering hierarchy,
     * and then its input textures are constructed by rendering the child
     * nodes to textures before rendering the shader node itself. (You can
     * pass texture nodes as children if you want to directly use a texture
     * as input).
     *
     * The actual shader code is GLSL code that gets combined with
     * some other code into the fragment shader. Since the exact
     * capabilities of the GPU driver differs between different OpenGL
     * drivers and hardware, GTK adds some defines that you can use
     * to ensure your GLSL code runs on as many drivers as it can.
     *
     * If the OpenGL driver is GLES, then the shader language version
     * is set to 100, and GSK_GLES will be defined in the shader.
     *
     * Otherwise, if the OpenGL driver does not support the 3.2 core profile,
     * then the shader will run with language version 110 for GL2 and 130 for GL3,
     * and GSK_LEGACY will be defined in the shader.
     *
     * If the OpenGL driver supports the 3.2 code profile, it will be used,
     * the shader language version is set to 150, and GSK_GL3 will be defined
     * in the shader.
     *
     * The main function the shader must implement is:
     *
     * ```glsl
     *  void mainImage(out vec4 fragColor,
     *                 in vec2 fragCoord,
     *                 in vec2 resolution,
     *                 in vec2 uv)
     * ```
     *
     * Where the input `fragCoord` is the coordinate of the pixel we're
     * currently rendering, relative to the boundary rectangle that was
     * specified in the `GskGLShaderNode`, and `resolution` is the width and
     * height of that rectangle. This is in the typical GTK coordinate
     * system with the origin in the top left. `uv` contains the u and v
     * coordinates that can be used to index a texture at the
     * corresponding point. These coordinates are in the [0..1]x[0..1]
     * region, with 0, 0 being in the lower left corder (which is typical
     * for OpenGL).
     *
     * The output `fragColor` should be a RGBA color (with
     * premultiplied alpha) that will be used as the output for the
     * specified pixel location. Note that this output will be
     * automatically clipped to the clip region of the glshader node.
     *
     * In addition to the function arguments the shader can define
     * up to 4 uniforms for textures which must be called u_textureN
     * (i.e. u_texture1 to u_texture4) as well as any custom uniforms
     * you want of types int, uint, bool, float, vec2, vec3 or vec4.
     *
     * All textures sources contain premultiplied alpha colors, but if some
     * there are outer sources of colors there is a gsk_premultiply() helper
     * to compute premultiplication when needed.
     *
     * Note that GTK parses the uniform declarations, so each uniform has to
     * be on a line by itself with no other code, like so:
     *
     * ```glsl
     * uniform float u_time;
     * uniform vec3 u_color;
     * uniform sampler2D u_texture1;
     * uniform sampler2D u_texture2;
     * ```
     *
     * GTK uses the "gsk" namespace in the symbols it uses in the
     * shader, so your code should not use any symbols with the prefix gsk
     * or GSK. There are some helper functions declared that you can use:
     *
     * ```glsl
     * vec4 GskTexture(sampler2D sampler, vec2 texCoords);
     * ```
     *
     * This samples a texture (e.g. u_texture1) at the specified
     * coordinates, and contains some helper ifdefs to ensure that
     * it works on all OpenGL versions.
     *
     * You can compile the shader yourself using [method`Gsk`.GLShader.compile],
     * otherwise the GSK renderer will do it when it handling the glshader
     * node. If errors occurs, the returned `error` will include the glsl
     * sources, so you can see what GSK was passing to the compiler. You
     * can also set GSK_DEBUG=shaders in the environment to see the sources
     * and other relevant information about all shaders that GSK is handling.
     *
     * # An example shader
     *
     * ```glsl
     * uniform float position;
     * uniform sampler2D u_texture1;
     * uniform sampler2D u_texture2;
     *
     * void mainImage(out vec4 fragColor,
     *                in vec2 fragCoord,
     *                in vec2 resolution,
     *                in vec2 uv) {
     *   vec4 source1 = GskTexture(u_texture1, uv);
     *   vec4 source2 = GskTexture(u_texture2, uv);
     *
     *   fragColor = position * source1 + (1.0 - position) * source2;
     * }
     * ```
     * @class
     */
    class GLShader extends GObject.Object {
        // Own properties of Gsk-4.0.Gsk.GLShader

        static name: string;
        static $gtype: GObject.GType<GLShader>;

        // Constructors of Gsk-4.0.Gsk.GLShader

        constructor(config?: GLShader.ConstructorProperties);
        /**
         * Creates a `GskGLShader` that will render pixels using the specified code.
         * @constructor
         * @param sourcecode GLSL sourcecode for the shader, as a `GBytes`
         * @returns A new `GskGLShader`
         */
        static new_from_bytes(sourcecode: GLib.Bytes): GLShader;
        /**
         * Creates a `GskGLShader` that will render pixels using the specified code.
         * @constructor
         * @param resource_path path to a resource that contains the GLSL sourcecode for     the shader
         * @returns A new `GskGLShader`
         */
        static new_from_resource(resource_path: string | null): GLShader;
        _init(config?: GLShader.ConstructorProperties): void;
    }

    interface GLShaderNode {
        // Owm methods of Gsk-4.0.Gsk.GLShaderNode

        /**
         * Gets args for the node.
         * @returns A `GBytes` with the uniform arguments
         */
        get_args(): GLib.Bytes;
        /**
         * Gets one of the children.
         * @param idx the position of the child to get
         * @returns the @idx'th child of @node
         */
        get_child(idx: number): RenderNode;
        /**
         * Returns the number of children
         * @returns The number of children
         */
        get_n_children(): number;
        /**
         * Gets shader code for the node.
         * @returns the `GskGLShader` shader
         */
        get_shader(): GLShader;
    }

    /**
     * A render node using a GL shader when drawing its children nodes.
     * @class
     */
    class GLShaderNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.GLShaderNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.GLShaderNode

        /**
         * Creates a `GskRenderNode` that will render the given `shader` into the
         * area given by `bounds`.
         *
         * The `args` is a block of data to use for uniform input, as per types and
         * offsets defined by the `shader`. Normally this is generated by
         * [method`Gsk`.GLShader.format_args] or [struct`Gsk`.ShaderArgsBuilder].
         *
         * See [class`Gsk`.GLShader] for details about how the shader should be written.
         *
         * All the children will be rendered into textures (if they aren't already
         * `GskTextureNodes`, which will be used directly). These textures will be
         * sent as input to the shader.
         *
         * If the renderer doesn't support GL shaders, or if there is any problem
         * when compiling the shader, then the node will draw pink. You should use
         * [method`Gsk`.GLShader.compile] to ensure the `shader` will work for the
         * renderer before using it.
         * @constructor
         * @param shader the `GskGLShader`
         * @param bounds the rectangle to render the shader into
         * @param args Arguments for the uniforms
         * @param children array of child nodes,   these will be rendered to textures and used as input.
         * @returns A new `GskRenderNode`
         */
        constructor(
            shader: GLShader,
            bounds: Graphene.Rect,
            args: GLib.Bytes,
            children: RenderNode[] | null
        );
        /**
         * Creates a `GskRenderNode` that will render the given `shader` into the
         * area given by `bounds`.
         *
         * The `args` is a block of data to use for uniform input, as per types and
         * offsets defined by the `shader`. Normally this is generated by
         * [method`Gsk`.GLShader.format_args] or [struct`Gsk`.ShaderArgsBuilder].
         *
         * See [class`Gsk`.GLShader] for details about how the shader should be written.
         *
         * All the children will be rendered into textures (if they aren't already
         * `GskTextureNodes`, which will be used directly). These textures will be
         * sent as input to the shader.
         *
         * If the renderer doesn't support GL shaders, or if there is any problem
         * when compiling the shader, then the node will draw pink. You should use
         * [method`Gsk`.GLShader.compile] to ensure the `shader` will work for the
         * renderer before using it.
         * @constructor
         * @param shader the `GskGLShader`
         * @param bounds the rectangle to render the shader into
         * @param args Arguments for the uniforms
         * @param children array of child nodes,   these will be rendered to textures and used as input.
         * @returns A new `GskRenderNode`
         */
        static new(
            shader: GLShader,
            bounds: Graphene.Rect,
            args: GLib.Bytes,
            children: RenderNode[] | null
        ): GLShaderNode;
    }

    interface InsetShadowNode {
        // Owm methods of Gsk-4.0.Gsk.InsetShadowNode

        /**
         * Retrieves the blur radius to apply to the shadow.
         * @returns the blur radius, in pixels
         */
        get_blur_radius(): number;
        /**
         * Retrieves the color of the inset shadow.
         * @returns the color of the shadow
         */
        get_color(): Gdk.RGBA;
        /**
         * Retrieves the horizontal offset of the inset shadow.
         * @returns an offset, in pixels
         */
        get_dx(): number;
        /**
         * Retrieves the vertical offset of the inset shadow.
         * @returns an offset, in pixels
         */
        get_dy(): number;
        /**
         * Retrieves the outline rectangle of the inset shadow.
         * @returns a rounded rectangle
         */
        get_outline(): RoundedRect;
        /**
         * Retrieves how much the shadow spreads inwards.
         * @returns the size of the shadow, in pixels
         */
        get_spread(): number;
    }

    /**
     * A render node for an inset shadow.
     * @class
     */
    class InsetShadowNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.InsetShadowNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.InsetShadowNode

        /**
         * Creates a `GskRenderNode` that will render an inset shadow
         * into the box given by `outline`.
         * @constructor
         * @param outline outline of the region containing the shadow
         * @param color color of the shadow
         * @param dx horizontal offset of shadow
         * @param dy vertical offset of shadow
         * @param spread how far the shadow spreads towards the inside
         * @param blur_radius how much blur to apply to the shadow
         * @returns A new `GskRenderNode`
         */
        constructor(
            outline: RoundedRect,
            color: Gdk.RGBA,
            dx: number,
            dy: number,
            spread: number,
            blur_radius: number
        );
        /**
         * Creates a `GskRenderNode` that will render an inset shadow
         * into the box given by `outline`.
         * @constructor
         * @param outline outline of the region containing the shadow
         * @param color color of the shadow
         * @param dx horizontal offset of shadow
         * @param dy vertical offset of shadow
         * @param spread how far the shadow spreads towards the inside
         * @param blur_radius how much blur to apply to the shadow
         * @returns A new `GskRenderNode`
         */
        static new(
            outline: RoundedRect,
            color: Gdk.RGBA,
            dx: number,
            dy: number,
            spread: number,
            blur_radius: number
        ): InsetShadowNode;
    }

    interface LinearGradientNode {
        // Owm methods of Gsk-4.0.Gsk.LinearGradientNode

        /**
         * Retrieves the color stops in the gradient.
         * @returns the color stops in the gradient
         */
        get_color_stops(): ColorStop[];
        /**
         * Retrieves the final point of the linear gradient.
         * @returns the final point
         */
        get_end(): Graphene.Point;
        /**
         * Retrieves the number of color stops in the gradient.
         * @returns the number of color stops
         */
        get_n_color_stops(): number;
        /**
         * Retrieves the initial point of the linear gradient.
         * @returns the initial point
         */
        get_start(): Graphene.Point;
    }

    /**
     * A render node for a linear gradient.
     * @class
     */
    class LinearGradientNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.LinearGradientNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.LinearGradientNode

        /**
         * Creates a `GskRenderNode` that will create a linear gradient from the given
         * points and color stops, and render that into the area given by `bounds`.
         * @constructor
         * @param bounds the rectangle to render the linear gradient into
         * @param start the point at which the linear gradient will begin
         * @param end the point at which the linear gradient will finish
         * @param color_stops a pointer to an array of   `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        constructor(
            bounds: Graphene.Rect,
            start: Graphene.Point,
            end: Graphene.Point,
            color_stops: ColorStop[]
        );
        /**
         * Creates a `GskRenderNode` that will create a linear gradient from the given
         * points and color stops, and render that into the area given by `bounds`.
         * @constructor
         * @param bounds the rectangle to render the linear gradient into
         * @param start the point at which the linear gradient will begin
         * @param end the point at which the linear gradient will finish
         * @param color_stops a pointer to an array of   `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        static new(
            bounds: Graphene.Rect,
            start: Graphene.Point,
            end: Graphene.Point,
            color_stops: ColorStop[]
        ): LinearGradientNode;
    }

    interface MaskNode {
        // Owm methods of Gsk-4.0.Gsk.MaskNode

        /**
         * Retrieves the mask `GskRenderNode` child of the `node`.
         * @returns the mask child node
         */
        get_mask(): RenderNode;
        /**
         * Retrieves the mask mode used by `node`.
         * @returns the mask mode
         */
        get_mask_mode(): MaskMode;
        /**
         * Retrieves the source `GskRenderNode` child of the `node`.
         * @returns the source child node
         */
        get_source(): RenderNode;
    }

    /**
     * A render node masking one child node with another.
     * @class
     */
    class MaskNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.MaskNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.MaskNode

        /**
         * Creates a `GskRenderNode` that will mask a given node by another.
         *
         * The `mask_mode` determines how the 'mask values' are derived from
         * the colors of the `mask`. Applying the mask consists of multiplying
         * the 'mask value' with the alpha of the source.
         * @constructor
         * @param source The source node to be drawn
         * @param mask The node to be used as mask
         * @param mask_mode The mask mode to use
         * @returns A new `GskRenderNode`
         */
        constructor(source: RenderNode, mask: RenderNode, mask_mode: MaskMode);
        /**
         * Creates a `GskRenderNode` that will mask a given node by another.
         *
         * The `mask_mode` determines how the 'mask values' are derived from
         * the colors of the `mask`. Applying the mask consists of multiplying
         * the 'mask value' with the alpha of the source.
         * @constructor
         * @param source The source node to be drawn
         * @param mask The node to be used as mask
         * @param mask_mode The mask mode to use
         * @returns A new `GskRenderNode`
         */
        static new(
            source: RenderNode,
            mask: RenderNode,
            mask_mode: MaskMode
        ): MaskNode;
    }

    module NglRenderer {
        // Constructor properties interface

        interface ConstructorProperties
            extends Renderer.ConstructorProperties {}
    }

    interface NglRenderer {
        // Class property signals of Gsk-4.0.Gsk.NglRenderer

        connect(
            sigName: 'notify::realized',
            callback: ($obj: NglRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: NglRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::surface',
            callback: ($obj: NglRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::surface',
            callback: ($obj: NglRenderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::surface', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class NglRenderer extends Renderer {
        // Own properties of Gsk-4.0.Gsk.NglRenderer

        static name: string;
        static $gtype: GObject.GType<NglRenderer>;

        // Constructors of Gsk-4.0.Gsk.NglRenderer

        constructor(config?: NglRenderer.ConstructorProperties);
        /**
         * Same as gsk_gl_renderer_new().
         * @constructor
         * @returns a new GL renderer
         */
        constructor();
        /**
         * Same as gsk_gl_renderer_new().
         * @constructor
         * @returns a new GL renderer
         */
        static new(): NglRenderer;
        _init(config?: NglRenderer.ConstructorProperties): void;
    }

    interface OpacityNode {
        // Owm methods of Gsk-4.0.Gsk.OpacityNode

        /**
         * Gets the child node that is getting opacityed by the given `node`.
         * @returns The child that is getting opacityed
         */
        get_child(): RenderNode;
        /**
         * Gets the transparency factor for an opacity node.
         * @returns the opacity factor
         */
        get_opacity(): number;
    }

    /**
     * A render node controlling the opacity of its single child node.
     * @class
     */
    class OpacityNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.OpacityNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.OpacityNode

        /**
         * Creates a `GskRenderNode` that will drawn the `child` with reduced
         * `opacity`.
         * @constructor
         * @param child The node to draw
         * @param opacity The opacity to apply
         * @returns A new `GskRenderNode`
         */
        constructor(child: RenderNode, opacity: number);
        /**
         * Creates a `GskRenderNode` that will drawn the `child` with reduced
         * `opacity`.
         * @constructor
         * @param child The node to draw
         * @param opacity The opacity to apply
         * @returns A new `GskRenderNode`
         */
        static new(child: RenderNode, opacity: number): OpacityNode;
    }

    interface OutsetShadowNode {
        // Owm methods of Gsk-4.0.Gsk.OutsetShadowNode

        /**
         * Retrieves the blur radius of the shadow.
         * @returns the blur radius, in pixels
         */
        get_blur_radius(): number;
        /**
         * Retrieves the color of the outset shadow.
         * @returns a color
         */
        get_color(): Gdk.RGBA;
        /**
         * Retrieves the horizontal offset of the outset shadow.
         * @returns an offset, in pixels
         */
        get_dx(): number;
        /**
         * Retrieves the vertical offset of the outset shadow.
         * @returns an offset, in pixels
         */
        get_dy(): number;
        /**
         * Retrieves the outline rectangle of the outset shadow.
         * @returns a rounded rectangle
         */
        get_outline(): RoundedRect;
        /**
         * Retrieves how much the shadow spreads outwards.
         * @returns the size of the shadow, in pixels
         */
        get_spread(): number;
    }

    /**
     * A render node for an outset shadow.
     * @class
     */
    class OutsetShadowNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.OutsetShadowNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.OutsetShadowNode

        /**
         * Creates a `GskRenderNode` that will render an outset shadow
         * around the box given by `outline`.
         * @constructor
         * @param outline outline of the region surrounded by shadow
         * @param color color of the shadow
         * @param dx horizontal offset of shadow
         * @param dy vertical offset of shadow
         * @param spread how far the shadow spreads towards the inside
         * @param blur_radius how much blur to apply to the shadow
         * @returns A new `GskRenderNode`
         */
        constructor(
            outline: RoundedRect,
            color: Gdk.RGBA,
            dx: number,
            dy: number,
            spread: number,
            blur_radius: number
        );
        /**
         * Creates a `GskRenderNode` that will render an outset shadow
         * around the box given by `outline`.
         * @constructor
         * @param outline outline of the region surrounded by shadow
         * @param color color of the shadow
         * @param dx horizontal offset of shadow
         * @param dy vertical offset of shadow
         * @param spread how far the shadow spreads towards the inside
         * @param blur_radius how much blur to apply to the shadow
         * @returns A new `GskRenderNode`
         */
        static new(
            outline: RoundedRect,
            color: Gdk.RGBA,
            dx: number,
            dy: number,
            spread: number,
            blur_radius: number
        ): OutsetShadowNode;
    }

    interface RadialGradientNode {
        // Owm methods of Gsk-4.0.Gsk.RadialGradientNode

        /**
         * Retrieves the center pointer for the gradient.
         * @returns the center point for the gradient
         */
        get_center(): Graphene.Point;
        /**
         * Retrieves the color stops in the gradient.
         * @returns the color stops in the gradient
         */
        get_color_stops(): ColorStop[];
        /**
         * Retrieves the end value for the gradient.
         * @returns the end value for the gradient
         */
        get_end(): number;
        /**
         * Retrieves the horizontal radius for the gradient.
         * @returns the horizontal radius for the gradient
         */
        get_hradius(): number;
        /**
         * Retrieves the number of color stops in the gradient.
         * @returns the number of color stops
         */
        get_n_color_stops(): number;
        /**
         * Retrieves the start value for the gradient.
         * @returns the start value for the gradient
         */
        get_start(): number;
        /**
         * Retrieves the vertical radius for the gradient.
         * @returns the vertical radius for the gradient
         */
        get_vradius(): number;
    }

    /**
     * A render node for a radial gradient.
     * @class
     */
    class RadialGradientNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.RadialGradientNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.RadialGradientNode

        /**
         * Creates a `GskRenderNode` that draws a radial gradient.
         *
         * The radial gradient
         * starts around `center`. The size of the gradient is dictated by `hradius`
         * in horizontal orientation and by `vradius` in vertical orientation.
         * @constructor
         * @param bounds the bounds of the node
         * @param center the center of the gradient
         * @param hradius the horizontal radius
         * @param vradius the vertical radius
         * @param start a percentage >= 0 that defines the start of the gradient around `center`
         * @param end a percentage >= 0 that defines the end of the gradient around `center`
         * @param color_stops a pointer to an array of   `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        constructor(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            hradius: number,
            vradius: number,
            start: number,
            end: number,
            color_stops: ColorStop[]
        );
        /**
         * Creates a `GskRenderNode` that draws a radial gradient.
         *
         * The radial gradient
         * starts around `center`. The size of the gradient is dictated by `hradius`
         * in horizontal orientation and by `vradius` in vertical orientation.
         * @constructor
         * @param bounds the bounds of the node
         * @param center the center of the gradient
         * @param hradius the horizontal radius
         * @param vradius the vertical radius
         * @param start a percentage >= 0 that defines the start of the gradient around `center`
         * @param end a percentage >= 0 that defines the end of the gradient around `center`
         * @param color_stops a pointer to an array of   `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        static new(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            hradius: number,
            vradius: number,
            start: number,
            end: number,
            color_stops: ColorStop[]
        ): RadialGradientNode;
    }

    interface RenderNode {
        // Owm methods of Gsk-4.0.Gsk.RenderNode

        /**
         * Draw the contents of `node` to the given cairo context.
         *
         * Typically, you'll use this function to implement fallback rendering
         * of `GskRenderNode`s on an intermediate Cairo context, instead of using
         * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
         *
         * For advanced nodes that cannot be supported using Cairo, in particular
         * for nodes doing 3D operations, this function may fail.
         * @param cr cairo context to draw to
         */
        draw(cr: cairo.Context): void;
        /**
         * Retrieves the boundaries of the `node`.
         *
         * The node will not draw outside of its boundaries.
         */
        get_bounds(): /* bounds */ Graphene.Rect;
        /**
         * Returns the type of the `node`.
         * @returns the type of the `GskRenderNode`
         */
        get_node_type(): RenderNodeType;
        /**
         * Acquires a reference on the given `GskRenderNode`.
         * @returns the `GskRenderNode` with an additional reference
         */
        ref(): RenderNode;
        /**
         * Serializes the `node` for later deserialization via
         * gsk_render_node_deserialize(). No guarantees are made about the format
         * used other than that the same version of GTK will be able to deserialize
         * the result of a call to gsk_render_node_serialize() and
         * gsk_render_node_deserialize() will correctly reject files it cannot open
         * that were created with previous versions of GTK.
         *
         * The intended use of this functions is testing, benchmarking and debugging.
         * The format is not meant as a permanent storage format.
         * @returns a `GBytes` representing the node.
         */
        serialize(): GLib.Bytes;
        /**
         * Releases a reference on the given `GskRenderNode`.
         *
         * If the reference was the last, the resources associated to the `node` are
         * freed.
         */
        unref(): void;
        /**
         * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
         * followed by [func`GLib`.file_set_contents].
         *
         * See those two functions for details on the arguments.
         *
         * It is mostly intended for use inside a debugger to quickly dump a render
         * node to a file for later inspection.
         * @param filename the file to save it to.
         * @returns %TRUE if saving was successful
         */
        write_to_file(filename: string): boolean;
    }

    /**
     * `GskRenderNode` is the basic block in a scene graph to be
     * rendered using [class`Gsk`.Renderer].
     *
     * Each node has a parent, except the top-level node; each node may have
     * children nodes.
     *
     * Each node has an associated drawing surface, which has the size of
     * the rectangle set when creating it.
     *
     * Render nodes are meant to be transient; once they have been associated
     * to a [class`Gsk`.Renderer] it's safe to release any reference you have on
     * them. All [class`Gsk`.RenderNode]s are immutable, you can only specify their
     * properties during construction.
     * @class
     */
    class RenderNode {
        // Own properties of Gsk-4.0.Gsk.RenderNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.RenderNode

        /**
         * Loads data previously created via [method`Gsk`.RenderNode.serialize].
         *
         * For a discussion of the supported format, see that function.
         * @param bytes the bytes containing the data
         * @returns a new `GskRenderNode`
         */
        static deserialize(bytes: GLib.Bytes): RenderNode | null;
    }

    module Renderer {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface Renderer {
        // Own properties of Gsk-4.0.Gsk.Renderer

        /**
         * Whether the renderer has been associated with a surface or draw context.
         */
        readonly realized: boolean;
        /**
         * The surface associated with renderer.
         */
        readonly surface: Gdk.Surface;

        // Owm methods of Gsk-4.0.Gsk.Renderer

        /**
         * Retrieves the `GdkSurface` set using gsk_enderer_realize().
         *
         * If the renderer has not been realized yet, %NULL will be returned.
         * @returns a `GdkSurface`
         */
        get_surface(): Gdk.Surface | null;
        /**
         * Checks whether the `renderer` is realized or not.
         * @returns %TRUE if the `GskRenderer` was realized, and %FALSE otherwise
         */
        is_realized(): boolean;
        /**
         * Creates the resources needed by the `renderer` to render the scene
         * graph.
         *
         * Since GTK 4.6, the surface may be `NULL`, which allows using
         * renderers without having to create a surface.
         *
         * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
         * destroying the renderer.
         * @param surface the `GdkSurface` renderer will be used on
         * @returns Whether the renderer was successfully realized
         */
        realize(surface: Gdk.Surface | null): boolean;
        /**
         * Renders the scene graph, described by a tree of `GskRenderNode` instances
         * to the renderer's surface,  ensuring that the given `region` gets redrawn.
         *
         * If the renderer has no associated surface, this function does nothing.
         *
         * Renderers must ensure that changes of the contents given by the `root`
         * node as well as the area given by `region` are redrawn. They are however
         * free to not redraw any pixel outside of `region` if they can guarantee that
         * it didn't change.
         *
         * The `renderer` will acquire a reference on the `GskRenderNode` tree while
         * the rendering is in progress.
         * @param root a `GskRenderNode`
         * @param region the `cairo_region_t` that must be redrawn or %NULL   for the whole window
         */
        render(root: RenderNode, region: cairo.Region | null): void;
        /**
         * Renders the scene graph, described by a tree of `GskRenderNode` instances,
         * to a `GdkTexture`.
         *
         * The `renderer` will acquire a reference on the `GskRenderNode` tree while
         * the rendering is in progress.
         *
         * If you want to apply any transformations to `root,` you should put it into a
         * transform node and pass that node instead.
         * @param root a `GskRenderNode`
         * @param viewport the section to draw or %NULL to use `root'`s bounds
         * @returns a `GdkTexture` with the rendered contents of @root.
         */
        render_texture(
            root: RenderNode,
            viewport: Graphene.Rect | null
        ): Gdk.Texture;
        /**
         * Releases all the resources created by gsk_renderer_realize().
         */
        unrealize(): void;

        // Class property signals of Gsk-4.0.Gsk.Renderer

        connect(
            sigName: 'notify::realized',
            callback: ($obj: Renderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Renderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::surface',
            callback: ($obj: Renderer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::surface',
            callback: ($obj: Renderer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::surface', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * `GskRenderer` is a class that renders a scene graph defined via a
     * tree of [class`Gsk`.RenderNode] instances.
     *
     * Typically you will use a `GskRenderer` instance to repeatedly call
     * [method`Gsk`.Renderer.render] to update the contents of its associated
     * [class`Gdk`.Surface].
     *
     * It is necessary to realize a `GskRenderer` instance using
     * [method`Gsk`.Renderer.realize] before calling [method`Gsk`.Renderer.render],
     * in order to create the appropriate windowing system resources needed
     * to render the scene.
     * @class
     */
    class Renderer extends GObject.Object {
        // Own properties of Gsk-4.0.Gsk.Renderer

        static name: string;
        static $gtype: GObject.GType<Renderer>;

        // Constructors of Gsk-4.0.Gsk.Renderer

        constructor(config?: Renderer.ConstructorProperties);
        /**
         * Creates an appropriate `GskRenderer` instance for the given `surface`.
         *
         * If the `GSK_RENDERER` environment variable is set, GSK will
         * try that renderer first, before trying the backend-specific
         * default. The ultimate fallback is the cairo renderer.
         *
         * The renderer will be realized before it is returned.
         * @constructor
         * @param surface a `GdkSurface`
         * @returns a `GskRenderer`
         */
        static new_for_surface(surface: Gdk.Surface): Renderer;
        _init(config?: Renderer.ConstructorProperties): void;
    }

    interface RepeatNode {
        // Owm methods of Gsk-4.0.Gsk.RepeatNode

        /**
         * Retrieves the child of `node`.
         * @returns a `GskRenderNode`
         */
        get_child(): RenderNode;
        /**
         * Retrieves the bounding rectangle of the child of `node`.
         * @returns a bounding rectangle
         */
        get_child_bounds(): Graphene.Rect;
    }

    /**
     * A render node repeating its single child node.
     * @class
     */
    class RepeatNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.RepeatNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.RepeatNode

        /**
         * Creates a `GskRenderNode` that will repeat the drawing of `child` across
         * the given `bounds`.
         * @constructor
         * @param bounds The bounds of the area to be painted
         * @param child The child to repeat
         * @param child_bounds The area of the child to repeat or %NULL to     use the child's bounds
         * @returns A new `GskRenderNode`
         */
        constructor(
            bounds: Graphene.Rect,
            child: RenderNode,
            child_bounds: Graphene.Rect | null
        );
        /**
         * Creates a `GskRenderNode` that will repeat the drawing of `child` across
         * the given `bounds`.
         * @constructor
         * @param bounds The bounds of the area to be painted
         * @param child The child to repeat
         * @param child_bounds The area of the child to repeat or %NULL to     use the child's bounds
         * @returns A new `GskRenderNode`
         */
        static new(
            bounds: Graphene.Rect,
            child: RenderNode,
            child_bounds: Graphene.Rect | null
        ): RepeatNode;
    }

    interface RepeatingLinearGradientNode {}

    /**
     * A render node for a repeating linear gradient.
     * @class
     */
    class RepeatingLinearGradientNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.RepeatingLinearGradientNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.RepeatingLinearGradientNode

        /**
         * Creates a `GskRenderNode` that will create a repeating linear gradient
         * from the given points and color stops, and render that into the area
         * given by `bounds`.
         * @constructor
         * @param bounds the rectangle to render the linear gradient into
         * @param start the point at which the linear gradient will begin
         * @param end the point at which the linear gradient will finish
         * @param color_stops a pointer to an array of `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        constructor(
            bounds: Graphene.Rect,
            start: Graphene.Point,
            end: Graphene.Point,
            color_stops: ColorStop[]
        );
        /**
         * Creates a `GskRenderNode` that will create a repeating linear gradient
         * from the given points and color stops, and render that into the area
         * given by `bounds`.
         * @constructor
         * @param bounds the rectangle to render the linear gradient into
         * @param start the point at which the linear gradient will begin
         * @param end the point at which the linear gradient will finish
         * @param color_stops a pointer to an array of `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        static new(
            bounds: Graphene.Rect,
            start: Graphene.Point,
            end: Graphene.Point,
            color_stops: ColorStop[]
        ): RepeatingLinearGradientNode;
    }

    interface RepeatingRadialGradientNode {}

    /**
     * A render node for a repeating radial gradient.
     * @class
     */
    class RepeatingRadialGradientNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.RepeatingRadialGradientNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.RepeatingRadialGradientNode

        /**
         * Creates a `GskRenderNode` that draws a repeating radial gradient.
         *
         * The radial gradient starts around `center`. The size of the gradient
         * is dictated by `hradius` in horizontal orientation and by `vradius`
         * in vertical orientation.
         * @constructor
         * @param bounds the bounds of the node
         * @param center the center of the gradient
         * @param hradius the horizontal radius
         * @param vradius the vertical radius
         * @param start a percentage >= 0 that defines the start of the gradient around `center`
         * @param end a percentage >= 0 that defines the end of the gradient around `center`
         * @param color_stops a pointer to an array of   `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        constructor(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            hradius: number,
            vradius: number,
            start: number,
            end: number,
            color_stops: ColorStop[]
        );
        /**
         * Creates a `GskRenderNode` that draws a repeating radial gradient.
         *
         * The radial gradient starts around `center`. The size of the gradient
         * is dictated by `hradius` in horizontal orientation and by `vradius`
         * in vertical orientation.
         * @constructor
         * @param bounds the bounds of the node
         * @param center the center of the gradient
         * @param hradius the horizontal radius
         * @param vradius the vertical radius
         * @param start a percentage >= 0 that defines the start of the gradient around `center`
         * @param end a percentage >= 0 that defines the end of the gradient around `center`
         * @param color_stops a pointer to an array of   `GskColorStop` defining the gradient. The offsets of all color stops   must be increasing. The first stop's offset must be >= 0 and the last   stop's offset must be <= 1.
         * @returns A new `GskRenderNode`
         */
        static new(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            hradius: number,
            vradius: number,
            start: number,
            end: number,
            color_stops: ColorStop[]
        ): RepeatingRadialGradientNode;
    }

    interface RoundedClipNode {
        // Owm methods of Gsk-4.0.Gsk.RoundedClipNode

        /**
         * Gets the child node that is getting clipped by the given `node`.
         * @returns The child that is getting clipped
         */
        get_child(): RenderNode;
        /**
         * Retrieves the rounded rectangle used to clip the contents of the `node`.
         * @returns a rounded rectangle
         */
        get_clip(): RoundedRect;
    }

    /**
     * A render node applying a rounded rectangle clip to its single child.
     * @class
     */
    class RoundedClipNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.RoundedClipNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.RoundedClipNode

        /**
         * Creates a `GskRenderNode` that will clip the `child` to the area
         * given by `clip`.
         * @constructor
         * @param child The node to draw
         * @param clip The clip to apply
         * @returns A new `GskRenderNode`
         */
        constructor(child: RenderNode, clip: RoundedRect);
        /**
         * Creates a `GskRenderNode` that will clip the `child` to the area
         * given by `clip`.
         * @constructor
         * @param child The node to draw
         * @param clip The clip to apply
         * @returns A new `GskRenderNode`
         */
        static new(child: RenderNode, clip: RoundedRect): RoundedClipNode;
    }

    interface ShadowNode {
        // Owm methods of Gsk-4.0.Gsk.ShadowNode

        /**
         * Retrieves the child `GskRenderNode` of the shadow `node`.
         * @returns the child render node
         */
        get_child(): RenderNode;
        /**
         * Retrieves the number of shadows in the `node`.
         * @returns the number of shadows.
         */
        get_n_shadows(): number;
        /**
         * Retrieves the shadow data at the given index `i`.
         * @param i the given index
         * @returns the shadow data
         */
        get_shadow(i: number): Shadow;
    }

    /**
     * A render node drawing one or more shadows behind its single child node.
     * @class
     */
    class ShadowNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.ShadowNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.ShadowNode

        /**
         * Creates a `GskRenderNode` that will draw a `child` with the given
         * `shadows` below it.
         * @constructor
         * @param child The node to draw
         * @param shadows The shadows to apply
         * @returns A new `GskRenderNode`
         */
        constructor(child: RenderNode, shadows: Shadow[]);
        /**
         * Creates a `GskRenderNode` that will draw a `child` with the given
         * `shadows` below it.
         * @constructor
         * @param child The node to draw
         * @param shadows The shadows to apply
         * @returns A new `GskRenderNode`
         */
        static new(child: RenderNode, shadows: Shadow[]): ShadowNode;
    }

    interface TextNode {
        // Owm methods of Gsk-4.0.Gsk.TextNode

        /**
         * Retrieves the color used by the text `node`.
         * @returns the text color
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the font used by the text `node`.
         * @returns the font
         */
        get_font(): Pango.Font;
        /**
         * Retrieves the glyph information in the `node`.
         * @returns the glyph information
         */
        get_glyphs(): Pango.GlyphInfo[];
        /**
         * Retrieves the number of glyphs in the text node.
         * @returns the number of glyphs
         */
        get_num_glyphs(): number;
        /**
         * Retrieves the offset applied to the text.
         * @returns a point with the horizontal and vertical offsets
         */
        get_offset(): Graphene.Point;
        /**
         * Checks whether the text `node` has color glyphs.
         * @returns %TRUE if the text node has color glyphs
         */
        has_color_glyphs(): boolean;
    }

    /**
     * A render node drawing a set of glyphs.
     * @class
     */
    class TextNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.TextNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.TextNode

        /**
         * Creates a render node that renders the given glyphs.
         *
         * Note that `color` may not be used if the font contains
         * color glyphs.
         * @constructor
         * @param font the `PangoFont` containing the glyphs
         * @param glyphs the `PangoGlyphString` to render
         * @param color the foreground color to render with
         * @param offset offset of the baseline
         * @returns a new `GskRenderNode`
         */
        constructor(
            font: Pango.Font,
            glyphs: Pango.GlyphString,
            color: Gdk.RGBA,
            offset: Graphene.Point
        );
        /**
         * Creates a render node that renders the given glyphs.
         *
         * Note that `color` may not be used if the font contains
         * color glyphs.
         * @constructor
         * @param font the `PangoFont` containing the glyphs
         * @param glyphs the `PangoGlyphString` to render
         * @param color the foreground color to render with
         * @param offset offset of the baseline
         * @returns a new `GskRenderNode`
         */
        static new(
            font: Pango.Font,
            glyphs: Pango.GlyphString,
            color: Gdk.RGBA,
            offset: Graphene.Point
        ): TextNode;
    }

    interface TextureNode {
        // Owm methods of Gsk-4.0.Gsk.TextureNode

        /**
         * Retrieves the `GdkTexture` used when creating this `GskRenderNode`.
         * @returns the `GdkTexture`
         */
        get_texture(): Gdk.Texture;
    }

    /**
     * A render node for a `GdkTexture`.
     * @class
     */
    class TextureNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.TextureNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.TextureNode

        /**
         * Creates a `GskRenderNode` that will render the given
         * `texture` into the area given by `bounds`.
         *
         * Note that GSK applies linear filtering when textures are
         * scaled and transformed. See [class`Gsk`.TextureScaleNode]
         * for a way to influence filtering.
         * @constructor
         * @param texture the `GdkTexture`
         * @param bounds the rectangle to render the texture into
         * @returns A new `GskRenderNode`
         */
        constructor(texture: Gdk.Texture, bounds: Graphene.Rect);
        /**
         * Creates a `GskRenderNode` that will render the given
         * `texture` into the area given by `bounds`.
         *
         * Note that GSK applies linear filtering when textures are
         * scaled and transformed. See [class`Gsk`.TextureScaleNode]
         * for a way to influence filtering.
         * @constructor
         * @param texture the `GdkTexture`
         * @param bounds the rectangle to render the texture into
         * @returns A new `GskRenderNode`
         */
        static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode;
    }

    interface TextureScaleNode {
        // Owm methods of Gsk-4.0.Gsk.TextureScaleNode

        /**
         * Retrieves the `GskScalingFilter` used when creating this `GskRenderNode`.
         * @returns the `GskScalingFilter`
         */
        get_filter(): ScalingFilter;
        /**
         * Retrieves the `GdkTexture` used when creating this `GskRenderNode`.
         * @returns the `GdkTexture`
         */
        get_texture(): Gdk.Texture;
    }

    /**
     * A render node for a `GdkTexture`.
     * @class
     */
    class TextureScaleNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.TextureScaleNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.TextureScaleNode

        /**
         * Creates a node that scales the texture to the size given by the
         * bounds using the filter and then places it at the bounds' position.
         *
         * Note that further scaling and other transformations which are
         * applied to the node will apply linear filtering to the resulting
         * texture, as usual.
         *
         * This node is intended for tight control over scaling applied
         * to a texture, such as in image editors and requires the
         * application to be aware of the whole render tree as further
         * transforms may be applied that conflict with the desired effect
         * of this node.
         * @constructor
         * @param texture the texture to scale
         * @param bounds the size of the texture to scale to
         * @param filter how to scale the texture
         * @returns A new `GskRenderNode`
         */
        constructor(
            texture: Gdk.Texture,
            bounds: Graphene.Rect,
            filter: ScalingFilter
        );
        /**
         * Creates a node that scales the texture to the size given by the
         * bounds using the filter and then places it at the bounds' position.
         *
         * Note that further scaling and other transformations which are
         * applied to the node will apply linear filtering to the resulting
         * texture, as usual.
         *
         * This node is intended for tight control over scaling applied
         * to a texture, such as in image editors and requires the
         * application to be aware of the whole render tree as further
         * transforms may be applied that conflict with the desired effect
         * of this node.
         * @constructor
         * @param texture the texture to scale
         * @param bounds the size of the texture to scale to
         * @param filter how to scale the texture
         * @returns A new `GskRenderNode`
         */
        static new(
            texture: Gdk.Texture,
            bounds: Graphene.Rect,
            filter: ScalingFilter
        ): TextureScaleNode;
    }

    interface TransformNode {
        // Owm methods of Gsk-4.0.Gsk.TransformNode

        /**
         * Gets the child node that is getting transformed by the given `node`.
         * @returns The child that is getting transformed
         */
        get_child(): RenderNode;
        /**
         * Retrieves the `GskTransform` used by the `node`.
         * @returns a `GskTransform`
         */
        get_transform(): Transform;
    }

    /**
     * A render node applying a `GskTransform` to its single child node.
     * @class
     */
    class TransformNode extends RenderNode {
        // Own properties of Gsk-4.0.Gsk.TransformNode

        static name: string;

        // Constructors of Gsk-4.0.Gsk.TransformNode

        /**
         * Creates a `GskRenderNode` that will transform the given `child`
         * with the given `transform`.
         * @constructor
         * @param child The node to transform
         * @param transform The transform to apply
         * @returns A new `GskRenderNode`
         */
        constructor(child: RenderNode, transform: Transform);
        /**
         * Creates a `GskRenderNode` that will transform the given `child`
         * with the given `transform`.
         * @constructor
         * @param child The node to transform
         * @param transform The transform to apply
         * @returns A new `GskRenderNode`
         */
        static new(child: RenderNode, transform: Transform): TransformNode;
    }

    interface BroadwayRendererClass {}

    abstract class BroadwayRendererClass {
        // Own properties of Gsk-4.0.Gsk.BroadwayRendererClass

        static name: string;
    }

    interface CairoRendererClass {}

    abstract class CairoRendererClass {
        // Own properties of Gsk-4.0.Gsk.CairoRendererClass

        static name: string;
    }

    interface ColorStop {
        // Own fields of Gsk-4.0.Gsk.ColorStop

        /**
         * the offset of the color stop
         * @field
         */
        offset: number;
        /**
         * the color at the given offset
         * @field
         */
        color: Gdk.RGBA;
    }

    /**
     * A color stop in a gradient node.
     * @record
     */
    class ColorStop {
        // Own properties of Gsk-4.0.Gsk.ColorStop

        static name: string;
    }

    interface GLRendererClass {}

    abstract class GLRendererClass {
        // Own properties of Gsk-4.0.Gsk.GLRendererClass

        static name: string;
    }

    interface GLShaderClass {
        // Own fields of Gsk-4.0.Gsk.GLShaderClass

        parent_class: GObject.ObjectClass;
    }

    abstract class GLShaderClass {
        // Own properties of Gsk-4.0.Gsk.GLShaderClass

        static name: string;
    }

    interface ParseLocation {
        // Own fields of Gsk-4.0.Gsk.ParseLocation

        /**
         * the offset of the location in the parse buffer, as bytes
         * @field
         */
        bytes: number;
        /**
         * the offset of the location in the parse buffer, as characters
         * @field
         */
        chars: number;
        /**
         * the line of the location in the parse buffer
         * @field
         */
        lines: number;
        /**
         * the position in the line, as bytes
         * @field
         */
        line_bytes: number;
        /**
         * the position in the line, as characters
         * @field
         */
        line_chars: number;
    }

    /**
     * A location in a parse buffer.
     * @record
     */
    class ParseLocation {
        // Own properties of Gsk-4.0.Gsk.ParseLocation

        static name: string;
    }

    interface RendererClass {}

    abstract class RendererClass {
        // Own properties of Gsk-4.0.Gsk.RendererClass

        static name: string;
    }

    interface RoundedRect {
        // Own fields of Gsk-4.0.Gsk.RoundedRect

        /**
         * the bounds of the rectangle
         * @field
         */
        bounds: Graphene.Rect;
        /**
         * the size of the 4 rounded corners
         * @field
         */
        corner: Graphene.Size[];

        // Owm methods of Gsk-4.0.Gsk.RoundedRect

        /**
         * Checks if the given `point` is inside the rounded rectangle.
         * @param point the point to check
         * @returns %TRUE if the @point is inside the rounded rectangle
         */
        contains_point(point: Graphene.Point): boolean;
        /**
         * Checks if the given `rect` is contained inside the rounded rectangle.
         * @param rect the rectangle to check
         * @returns %TRUE if the @rect is fully contained inside the rounded rectangle
         */
        contains_rect(rect: Graphene.Rect): boolean;
        /**
         * Initializes the given `GskRoundedRect` with the given values.
         *
         * This function will implicitly normalize the `GskRoundedRect`
         * before returning.
         * @param bounds a `graphene_rect_t` describing the bounds
         * @param top_left the rounding radius of the top left corner
         * @param top_right the rounding radius of the top right corner
         * @param bottom_right the rounding radius of the bottom right corner
         * @param bottom_left the rounding radius of the bottom left corner
         * @returns the initialized rectangle
         */
        init(
            bounds: Graphene.Rect,
            top_left: Graphene.Size,
            top_right: Graphene.Size,
            bottom_right: Graphene.Size,
            bottom_left: Graphene.Size
        ): RoundedRect;
        /**
         * Initializes `self` using the given `src` rectangle.
         *
         * This function will not normalize the `GskRoundedRect`,
         * so make sure the source is normalized.
         * @param src a `GskRoundedRect`
         * @returns the initialized rectangle
         */
        init_copy(src: RoundedRect): RoundedRect;
        /**
         * Initializes `self` to the given `bounds` and sets the radius
         * of all four corners to `radius`.
         * @param bounds a `graphene_rect_t`
         * @param radius the border radius
         * @returns the initialized rectangle
         */
        init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect;
        /**
         * Checks if part of the given `rect` is contained inside the rounded rectangle.
         * @param rect the rectangle to check
         * @returns %TRUE if the @rect intersects with the rounded rectangle
         */
        intersects_rect(rect: Graphene.Rect): boolean;
        /**
         * Checks if all corners of `self` are right angles and the
         * rectangle covers all of its bounds.
         *
         * This information can be used to decide if [ctor`Gsk`.ClipNode.new]
         * or [ctor`Gsk`.RoundedClipNode.new] should be called.
         * @returns %TRUE if the rectangle is rectilinear
         */
        is_rectilinear(): boolean;
        /**
         * Normalizes the passed rectangle.
         *
         * This function will ensure that the bounds of the rectangle
         * are normalized and ensure that the corner values are positive
         * and the corners do not overlap.
         * @returns the normalized rectangle
         */
        normalize(): RoundedRect;
        /**
         * Offsets the bound's origin by `dx` and `dy`.
         *
         * The size and corners of the rectangle are unchanged.
         * @param dx the horizontal offset
         * @param dy the vertical offset
         * @returns the offset rectangle
         */
        offset(dx: number, dy: number): RoundedRect;
        /**
         * Shrinks (or grows) the given rectangle by moving the 4 sides
         * according to the offsets given.
         *
         * The corner radii will be changed in a way that tries to keep
         * the center of the corner circle intact. This emulates CSS behavior.
         *
         * This function also works for growing rectangles if you pass
         * negative values for the `top,` `right,` `bottom` or `left`.
         * @param top How far to move the top side downwards
         * @param right How far to move the right side to the left
         * @param bottom How far to move the bottom side upwards
         * @param left How far to move the left side to the right
         * @returns the resized `GskRoundedRect`
         */
        shrink(
            top: number,
            right: number,
            bottom: number,
            left: number
        ): RoundedRect;
    }

    /**
     * A rectangular region with rounded corners.
     *
     * Application code should normalize rectangles using
     * [method`Gsk`.RoundedRect.normalize]; this function will ensure that
     * the bounds of the rectangle are normalized and ensure that the corner
     * values are positive and the corners do not overlap.
     *
     * All functions taking a `GskRoundedRect` as an argument will internally
     * operate on a normalized copy; all functions returning a `GskRoundedRect`
     * will always return a normalized one.
     *
     * The algorithm used for normalizing corner sizes is described in
     * [the CSS specification](https://drafts.csswg.org/css-backgrounds-3/#border-radius).
     * @record
     */
    class RoundedRect {
        // Own properties of Gsk-4.0.Gsk.RoundedRect

        static name: string;
    }

    interface ShaderArgsBuilder {
        // Owm methods of Gsk-4.0.Gsk.ShaderArgsBuilder

        /**
         * Increases the reference count of a `GskShaderArgsBuilder` by one.
         * @returns the passed in `GskShaderArgsBuilder`
         */
        ref(): ShaderArgsBuilder;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of bool type.
         * @param idx index of the uniform
         * @param value value to set the uniform to
         */
        set_bool(idx: number, value: boolean): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of float type.
         * @param idx index of the uniform
         * @param value value to set the uniform to
         */
        set_float(idx: number, value: number): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of int type.
         * @param idx index of the uniform
         * @param value value to set the uniform to
         */
        set_int(idx: number, value: number): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of uint type.
         * @param idx index of the uniform
         * @param value value to set the uniform to
         */
        set_uint(idx: number, value: number): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of vec2 type.
         * @param idx index of the uniform
         * @param value value to set the uniform too
         */
        set_vec2(idx: number, value: Graphene.Vec2): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of vec3 type.
         * @param idx index of the uniform
         * @param value value to set the uniform too
         */
        set_vec3(idx: number, value: Graphene.Vec3): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of vec4 type.
         * @param idx index of the uniform
         * @param value value to set the uniform too
         */
        set_vec4(idx: number, value: Graphene.Vec4): void;
        /**
         * Creates a new `GBytes` args from the current state of the
         * given `builder`.
         *
         * Any uniforms of the shader that have not been explicitly set on
         * the `builder` are zero-initialized.
         *
         * The given `GskShaderArgsBuilder` is reset once this function returns;
         * you cannot call this function multiple times on the same `builder` instance.
         *
         * This function is intended primarily for bindings. C code should use
         * [method`Gsk`.ShaderArgsBuilder.free_to_args].
         * @returns the newly allocated buffer with   all the args added to @builder
         */
        to_args(): GLib.Bytes;
        /**
         * Decreases the reference count of a `GskShaderArgBuilder` by one.
         *
         * If the resulting reference count is zero, frees the builder.
         */
        unref(): void;
    }

    /**
     * An object to build the uniforms data for a `GskGLShader`.
     * @record
     */
    class ShaderArgsBuilder {
        // Own properties of Gsk-4.0.Gsk.ShaderArgsBuilder

        static name: string;

        // Constructors of Gsk-4.0.Gsk.ShaderArgsBuilder

        /**
         * Allocates a builder that can be used to construct a new uniform data
         * chunk.
         * @constructor
         * @param shader a `GskGLShader`
         * @param initial_values optional `GBytes` with initial values
         * @returns The newly allocated builder, free with     [method@Gsk.ShaderArgsBuilder.unref]
         */
        constructor(shader: GLShader, initial_values: GLib.Bytes | null);
        /**
         * Allocates a builder that can be used to construct a new uniform data
         * chunk.
         * @constructor
         * @param shader a `GskGLShader`
         * @param initial_values optional `GBytes` with initial values
         * @returns The newly allocated builder, free with     [method@Gsk.ShaderArgsBuilder.unref]
         */
        static new(
            shader: GLShader,
            initial_values: GLib.Bytes | null
        ): ShaderArgsBuilder;
    }

    interface Shadow {
        // Own fields of Gsk-4.0.Gsk.Shadow

        /**
         * the color of the shadow
         * @field
         */
        color: Gdk.RGBA;
        /**
         * the horizontal offset of the shadow
         * @field
         */
        dx: number;
        /**
         * the vertical offset of the shadow
         * @field
         */
        dy: number;
        /**
         * the radius of the shadow
         * @field
         */
        radius: number;
    }

    /**
     * The shadow parameters in a shadow node.
     * @record
     */
    class Shadow {
        // Own properties of Gsk-4.0.Gsk.Shadow

        static name: string;
    }

    interface Transform {
        // Owm methods of Gsk-4.0.Gsk.Transform

        /**
         * Checks two transforms for equality.
         * @param second the second transform
         * @returns %TRUE if the two transforms perform the same operation
         */
        equal(second: Transform | null): boolean;
        /**
         * Returns the category this transform belongs to.
         * @returns The category of the transform
         */
        get_category(): TransformCategory;
        /**
         * Inverts the given transform.
         *
         * If `self` is not invertible, %NULL is returned.
         * Note that inverting %NULL also returns %NULL, which is
         * the correct inverse of %NULL. If you need to differentiate
         * between those cases, you should check `self` is not %NULL
         * before calling this function.
         * @returns The inverted transform
         */
        invert(): Transform | null;
        /**
         * Multiplies `next` with the given `matrix`.
         * @param matrix the matrix to multiply `next` with
         * @returns The new transform
         */
        matrix(matrix: Graphene.Matrix): Transform;
        /**
         * Applies a perspective projection transform.
         *
         * This transform scales points in X and Y based on their Z value,
         * scaling points with positive Z values away from the origin, and
         * those with negative Z values towards the origin. Points
         * on the z=0 plane are unchanged.
         * @param depth distance of the z=0 plane. Lower values give a more   flattened pyramid and therefore a more pronounced   perspective effect.
         * @returns The new transform
         */
        perspective(depth: number): Transform;
        /**
         * Converts `self` into a human-readable string representation suitable
         * for printing.
         *
         * The result of this function can later be parsed with
         * [func`Gsk`.Transform.parse].
         * @param string The string to print into
         */
        print(string: GLib.String): void;
        /**
         * Acquires a reference on the given `GskTransform`.
         * @returns the `GskTransform` with an additional reference
         */
        ref(): Transform | null;
        /**
         * Rotates `next` `angle` degrees in 2D - or in 3D-speak, around the Z axis.
         * The rotation happens around the origin point of (0, 0).
         * @param angle the rotation angle, in degrees (clockwise)
         * @returns The new transform
         */
        rotate(angle: number): Transform | null;
        /**
         * Rotates `next` `angle` degrees around `axis`.
         *
         * For a rotation in 2D space, use [method`Gsk`.Transform.rotate]
         * @param angle the rotation angle, in degrees (clockwise)
         * @param axis The rotation axis
         * @returns The new transform
         */
        rotate_3d(angle: number, axis: Graphene.Vec3): Transform | null;
        /**
         * Scales `next` in 2-dimensional space by the given factors.
         *
         * Use [method`Gsk`.Transform.scale_3d] to scale in all 3 dimensions.
         * @param factor_x scaling factor on the X axis
         * @param factor_y scaling factor on the Y axis
         * @returns The new transform
         */
        scale(factor_x: number, factor_y: number): Transform | null;
        /**
         * Scales `next` by the given factors.
         * @param factor_x scaling factor on the X axis
         * @param factor_y scaling factor on the Y axis
         * @param factor_z scaling factor on the Z axis
         * @returns The new transform
         */
        scale_3d(
            factor_x: number,
            factor_y: number,
            factor_z: number
        ): Transform | null;
        /**
         * Applies a skew transform.
         * @param skew_x skew factor, in degrees, on the X axis
         * @param skew_y skew factor, in degrees, on the Y axis
         * @returns The new transform
         */
        skew(skew_x: number, skew_y: number): Transform | null;
        /**
         * Converts a `GskTransform` to a 2D transformation matrix.
         *
         * `self` must be a 2D transformation. If you are not
         * sure, use gsk_transform_get_category() >=
         * %GSK_TRANSFORM_CATEGORY_2D to check.
         *
         * The returned values have the following layout:
         *
         * ```
         *   | xx yx |   |  a  b  0 |
         *   | xy yy | = |  c  d  0 |
         *   | dx dy |   | tx ty  1 |
         * ```
         *
         * This function can be used to convert between a `GskTransform`
         * and a matrix type from other 2D drawing libraries, in particular
         * Cairo.
         */
        to_2d(): [
            /* out_xx */ number,
            /* out_yx */ number,
            /* out_xy */ number,
            /* out_yy */ number,
            /* out_dx */ number,
            /* out_dy */ number
        ];
        /**
         * Converts a `GskTransform` to 2D transformation factors.
         *
         * To recreate an equivalent transform from the factors returned
         * by this function, use
         *
         *     gsk_transform_skew (
         *         gsk_transform_scale (
         *             gsk_transform_rotate (
         *                 gsk_transform_translate (NULL, &GRAPHENE_POINT_T (dx, dy)),
         *                 angle),
         *             scale_x, scale_y),
         *         skew_x, skew_y)
         *
         * `self` must be a 2D transformation. If you are not sure, use
         *
         *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D
         *
         * to check.
         */
        to_2d_components(): [
            /* out_skew_x */ number,
            /* out_skew_y */ number,
            /* out_scale_x */ number,
            /* out_scale_y */ number,
            /* out_angle */ number,
            /* out_dx */ number,
            /* out_dy */ number
        ];
        /**
         * Converts a `GskTransform` to 2D affine transformation factors.
         *
         * To recreate an equivalent transform from the factors returned
         * by this function, use
         *
         *     gsk_transform_scale (gsk_transform_translate (NULL,
         *                                                   &GRAPHENE_POINT_T (dx, dy)),
         *                          sx, sy)
         *
         * `self` must be a 2D affine transformation. If you are not
         * sure, use
         *
         *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D_AFFINE
         *
         * to check.
         */
        to_affine(): [
            /* out_scale_x */ number,
            /* out_scale_y */ number,
            /* out_dx */ number,
            /* out_dy */ number
        ];
        /**
         * Computes the actual value of `self` and stores it in `out_matrix`.
         *
         * The previous value of `out_matrix` will be ignored.
         */
        to_matrix(): /* out_matrix */ Graphene.Matrix;
        /**
         * Converts a matrix into a string that is suitable for printing.
         *
         * The resulting string can be parsed with [func`Gsk`.Transform.parse].
         *
         * This is a wrapper around [method`Gsk`.Transform.print].
         * @returns A new string for @self
         */
        to_string(): string | null;
        /**
         * Converts a `GskTransform` to a translation operation.
         *
         * `self` must be a 2D transformation. If you are not
         * sure, use
         *
         *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D_TRANSLATE
         *
         * to check.
         */
        to_translate(): [/* out_dx */ number, /* out_dy */ number];
        /**
         * Applies all the operations from `other` to `next`.
         * @param other Transform to apply
         * @returns The new transform
         */
        transform(other: Transform | null): Transform | null;
        /**
         * Transforms a `graphene_rect_t` using the given transform `self`.
         *
         * The result is the bounding box containing the coplanar quad.
         * @param rect a `graphene_rect_t`
         */
        transform_bounds(rect: Graphene.Rect): /* out_rect */ Graphene.Rect;
        /**
         * Transforms a `graphene_point_t` using the given transform `self`.
         * @param point a `graphene_point_t`
         */
        transform_point(point: Graphene.Point): /* out_point */ Graphene.Point;
        /**
         * Translates `next` in 2-dimensional space by `point`.
         * @param point the point to translate the transform by
         * @returns The new transform
         */
        translate(point: Graphene.Point): Transform | null;
        /**
         * Translates `next` by `point`.
         * @param point the point to translate the transform by
         * @returns The new transform
         */
        translate_3d(point: Graphene.Point3D): Transform | null;
        /**
         * Releases a reference on the given `GskTransform`.
         *
         * If the reference was the last, the resources associated to the `self` are
         * freed.
         */
        unref(): void;
    }

    /**
     * `GskTransform` is an object to describe transform matrices.
     *
     * Unlike `graphene_matrix_t`, `GskTransform` retains the steps in how
     * a transform was constructed, and allows inspecting them. It is modeled
     * after the way CSS describes transforms.
     *
     * `GskTransform` objects are immutable and cannot be changed after creation.
     * This means code can safely expose them as properties of objects without
     * having to worry about others changing them.
     * @record
     */
    class Transform {
        // Own properties of Gsk-4.0.Gsk.Transform

        static name: string;

        // Constructors of Gsk-4.0.Gsk.Transform

        constructor();
        static new(): Transform;
        /**
         * Parses the given `string` into a transform and puts it in
         * `out_transform`.
         *
         * Strings printed via [method`Gsk`.Transform.to_string]
         * can be read in again successfully using this function.
         *
         * If `string` does not describe a valid transform, %FALSE is
         * returned and %NULL is put in `out_transform`.
         * @param string the string to parse
         * @returns %TRUE if @string described a valid transform.
         */
        static parse(
            string: string | null
        ): [/* returnType */ boolean, /* out_transform */ Transform];
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

export default Gsk;
// END

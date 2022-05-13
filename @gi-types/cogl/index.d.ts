/**
 * Cogl 7
 *
 * Generated from 7.0
 */

import * as cairo from '@gi-types/cairo';
import * as GLib from '@gi-types/glib';
import * as GObject from '@gi-types/gobject';
import * as Graphene from '@gi-types/graphene';

export const AFIRST_BIT: number;
export const A_BIT: number;
export const BGR_BIT: number;
export const DEPTH_BIT: number;
export const PIXEL_FORMAT_MAX_PLANES: number;
export const PREMULT_BIT: number;
export const STENCIL_BIT: number;
export const TEXTURE_MAX_WASTE: number;
export function blend_string_error_quark(): number;
export function blit_framebuffer(
    src: Framebuffer,
    dest: Framebuffer,
    src_x: number,
    src_y: number,
    dst_x: number,
    dst_y: number,
    width: number,
    height: number
): boolean;
export function clutter_winsys_has_feature_CLUTTER(
    feature: WinsysFeature
): boolean;
export function color_equal(v1?: any | null, v2?: any | null): boolean;
export function color_init_from_hsl(
    hue: number,
    saturation: number,
    luminance: number
): Color;
export function create_program(): Handle;
export function create_shader(shader_type: ShaderType): Handle;
export function debug_matrix_print(matrix: Matrix): void;
export function debug_object_foreach_type(
    func: DebugObjectForeachTypeCallback
): void;
export function debug_object_print_instances(): void;
export function flush(): void;
export function foreach_feature(
    context: Context,
    callback: FeatureCallback
): void;
export function framebuffer_error_quark(): number;
export function get_backface_culling_enabled(): boolean;
export function get_clock_time(context: Context): number;
export function get_depth_test_enabled(): boolean;
export function get_graphics_reset_status(
    context: Context
): GraphicsResetStatus;
export function get_option_group(): GLib.OptionGroup;
export function gtype_matrix_get_type(): GObject.GType;
export function handle_get_type(): GObject.GType;
export function has_feature(context: Context, feature: FeatureID): boolean;
export function is_bitmap(object?: any | null): boolean;
export function is_context(object?: any | null): boolean;
export function is_frame_info(object?: any | null): boolean;
export function is_framebuffer(object?: any | null): boolean;
export function is_offscreen(object?: any | null): boolean;
export function is_onscreen(object?: any | null): boolean;
export function is_pipeline(object?: any | null): boolean;
export function is_program(handle: Handle): boolean;
export function is_shader(handle: Handle): boolean;
export function is_texture(object?: any | null): boolean;
export function is_texture_2d(object?: any | null): boolean;
export function is_texture_2d_sliced(object?: any | null): boolean;
export function matrix_equal(v1?: any | null, v2?: any | null): boolean;
export function pixel_format_get_bytes_per_pixel(
    format: PixelFormat,
    plane: number
): number;
export function pixel_format_get_n_planes(format: PixelFormat): number;
export function pixel_format_to_string(format: PixelFormat): string;
export function program_attach_shader(
    program_handle: Handle,
    shader_handle: Handle
): void;
export function program_get_uniform_location(
    handle: Handle,
    uniform_name: string
): number;
export function program_link(handle: Handle): void;
export function program_set_uniform_1f(
    program: Handle,
    uniform_location: number,
    value: number
): void;
export function program_set_uniform_1i(
    program: Handle,
    uniform_location: number,
    value: number
): void;
export function program_set_uniform_float(
    program: Handle,
    uniform_location: number,
    n_components: number,
    value: number[]
): void;
export function program_set_uniform_int(
    program: Handle,
    uniform_location: number,
    n_components: number,
    value: number[]
): void;
export function program_set_uniform_matrix(
    program: Handle,
    uniform_location: number,
    dimensions: number,
    transpose: boolean,
    value: number[]
): void;
export function set_backface_culling_enabled(setting: boolean): void;
export function set_depth_test_enabled(setting: boolean): void;
export function set_tracing_disabled_on_thread(
    main_context: GLib.MainContext
): void;
export function set_tracing_enabled_on_thread(
    main_context: GLib.MainContext,
    group: string,
    filename: string
): void;
export function set_tracing_enabled_on_thread_with_fd(
    main_context: GLib.MainContext,
    group: string,
    fd: number
): void;
export function shader_get_type(handle: Handle): ShaderType;
export function shader_source(shader: Handle, source: string): void;
export function texture_error_quark(): number;
export function texture_new_from_bitmap(
    bitmap: Bitmap,
    flags: TextureFlags,
    internal_format: PixelFormat
): Texture;
export function texture_new_from_data(
    width: number,
    height: number,
    flags: TextureFlags,
    format: PixelFormat,
    internal_format: PixelFormat,
    rowstride: number,
    data: Uint8Array | string
): Texture;
export function texture_new_from_file(
    filename: string,
    flags: TextureFlags,
    internal_format: PixelFormat
): Texture;
export function texture_new_with_size(
    width: number,
    height: number,
    flags: TextureFlags,
    internal_format: PixelFormat
): Texture;
export function trace_end(head: TraceHead): void;
export function x11_onscreen_get_window_xid(onscreen: Onscreen): number;
export type DebugObjectForeachTypeCallback = (
    info: DebugObjectTypeInfo
) => void;
export type FeatureCallback = (feature: FeatureID) => void;
export type FrameCallback = (
    onscreen: Onscreen,
    event: FrameEvent,
    info: FrameInfo
) => void;
export type OnscreenDirtyCallback = (
    onscreen: Onscreen,
    info: OnscreenDirtyInfo
) => void;
export type OnscreenResizeCallback = (
    onscreen: Onscreen,
    width: number,
    height: number
) => void;
export type PipelineLayerCallback = (
    pipeline: Pipeline,
    layer_index: number
) => boolean;
export type Texture2DEGLImageExternalAlloc = (tex_2d: Texture2D) => boolean;

export namespace AttributeType {
    export const $gtype: GObject.GType<AttributeType>;
}

export enum AttributeType {
    BYTE = 5120,
    UNSIGNED_BYTE = 5121,
    SHORT = 5122,
    UNSIGNED_SHORT = 5123,
    FLOAT = 5126,
}

export namespace BitmapError {
    export const $gtype: GObject.GType<BitmapError>;
}

export enum BitmapError {
    FAILED = 0,
    UNKNOWN_TYPE = 1,
    CORRUPT_IMAGE = 2,
}

export namespace BlendStringError {
    export const $gtype: GObject.GType<BlendStringError>;
}

export enum BlendStringError {
    PARSE_ERROR = 0,
    ARGUMENT_PARSE_ERROR = 1,
    INVALID_ERROR = 2,
    GPU_UNSUPPORTED_ERROR = 3,
}

export namespace DepthTestFunction {
    export const $gtype: GObject.GType<DepthTestFunction>;
}

export enum DepthTestFunction {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}

export namespace FeatureID {
    export const $gtype: GObject.GType<FeatureID>;
}

export enum FeatureID {
    OGL_FEATURE_ID_UNSIGNED_INT_INDICES = 0,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_READ = 1,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE = 2,
    OGL_FEATURE_ID_SWAP_BUFFERS_EVENT = 3,
    OGL_FEATURE_ID_PRESENTATION_TIME = 4,
    OGL_FEATURE_ID_FENCE = 5,
    OGL_FEATURE_ID_TEXTURE_RG = 6,
    OGL_FEATURE_ID_BUFFER_AGE = 7,
    OGL_FEATURE_ID_TEXTURE_EGL_IMAGE_EXTERNAL = 8,
    OGL_FEATURE_ID_BLIT_FRAMEBUFFER = 9,
}

export namespace FilterReturn {
    export const $gtype: GObject.GType<FilterReturn>;
}

export enum FilterReturn {
    CONTINUE = 0,
    REMOVE = 1,
}

export namespace FrameEvent {
    export const $gtype: GObject.GType<FrameEvent>;
}

export enum FrameEvent {
    SYNC = 1,
    COMPLETE = 2,
}

export namespace FramebufferError {
    export const $gtype: GObject.GType<FramebufferError>;
}

export enum FramebufferError {
    FRAMEBUFFER_ERROR_ALLOCATE = 0,
}

export namespace GraphicsResetStatus {
    export const $gtype: GObject.GType<GraphicsResetStatus>;
}

export enum GraphicsResetStatus {
    NO_ERROR = 0,
    GUILTY_CONTEXT_RESET = 1,
    INNOCENT_CONTEXT_RESET = 2,
    UNKNOWN_CONTEXT_RESET = 3,
    PURGED_CONTEXT_RESET = 4,
}

export namespace IndicesType {
    export const $gtype: GObject.GType<IndicesType>;
}

export enum IndicesType {
    BYTE = 0,
    SHORT = 1,
    INT = 2,
}

export namespace MaterialAlphaFunc {
    export const $gtype: GObject.GType<MaterialAlphaFunc>;
}

export enum MaterialAlphaFunc {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}

export namespace MaterialFilter {
    export const $gtype: GObject.GType<MaterialFilter>;
}

export enum MaterialFilter {
    NEAREST = 9728,
    LINEAR = 9729,
    NEAREST_MIPMAP_NEAREST = 9984,
    LINEAR_MIPMAP_NEAREST = 9985,
    NEAREST_MIPMAP_LINEAR = 9986,
    LINEAR_MIPMAP_LINEAR = 9987,
}

export namespace MaterialWrapMode {
    export const $gtype: GObject.GType<MaterialWrapMode>;
}

export enum MaterialWrapMode {
    REPEAT = 10497,
    CLAMP_TO_EDGE = 33071,
    AUTOMATIC = 519,
}

export namespace PipelineAlphaFunc {
    export const $gtype: GObject.GType<PipelineAlphaFunc>;
}

export enum PipelineAlphaFunc {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}

export namespace PipelineCullFaceMode {
    export const $gtype: GObject.GType<PipelineCullFaceMode>;
}

export enum PipelineCullFaceMode {
    NONE = 0,
    FRONT = 1,
    BACK = 2,
    BOTH = 3,
}

export namespace PipelineFilter {
    export const $gtype: GObject.GType<PipelineFilter>;
}

export enum PipelineFilter {
    NEAREST = 9728,
    LINEAR = 9729,
    NEAREST_MIPMAP_NEAREST = 9984,
    LINEAR_MIPMAP_NEAREST = 9985,
    NEAREST_MIPMAP_LINEAR = 9986,
    LINEAR_MIPMAP_LINEAR = 9987,
}

export namespace PipelineWrapMode {
    export const $gtype: GObject.GType<PipelineWrapMode>;
}

export enum PipelineWrapMode {
    REPEAT = 10497,
    MIRRORED_REPEAT = 33648,
    CLAMP_TO_EDGE = 33071,
    AUTOMATIC = 519,
}

export namespace RendererError {
    export const $gtype: GObject.GType<RendererError>;
}

export enum RendererError {
    XLIB_DISPLAY_OPEN = 0,
    BAD_CONSTRAINT = 1,
}

export namespace ShaderType {
    export const $gtype: GObject.GType<ShaderType>;
}

export enum ShaderType {
    VERTEX = 0,
    FRAGMENT = 1,
}

export namespace StereoMode {
    export const $gtype: GObject.GType<StereoMode>;
}

export enum StereoMode {
    BOTH = 0,
    LEFT = 1,
    RIGHT = 2,
}

export namespace SystemError {
    export const $gtype: GObject.GType<SystemError>;
}

export enum SystemError {
    UNSUPPORTED = 0,
    NO_MEMORY = 1,
}

export namespace TextureComponents {
    export const $gtype: GObject.GType<TextureComponents>;
}

export enum TextureComponents {
    A = 1,
    RG = 2,
    RGB = 3,
    RGBA = 4,
    DEPTH = 5,
}

export namespace TextureError {
    export const $gtype: GObject.GType<TextureError>;
}

export enum TextureError {
    SIZE = 0,
    FORMAT = 1,
    BAD_PARAMETER = 2,
    TYPE = 3,
}

export namespace VerticesMode {
    export const $gtype: GObject.GType<VerticesMode>;
}

export enum VerticesMode {
    POINTS = 0,
    LINES = 1,
    LINE_LOOP = 2,
    LINE_STRIP = 3,
    TRIANGLES = 4,
    TRIANGLE_STRIP = 5,
    TRIANGLE_FAN = 6,
}

export namespace Winding {
    export const $gtype: GObject.GType<Winding>;
}

export enum Winding {
    CLOCKWISE = 0,
    COUNTER_CLOCKWISE = 1,
}

export namespace WinsysFeature {
    export const $gtype: GObject.GType<WinsysFeature>;
}

export enum WinsysFeature {
    MULTIPLE_ONSCREEN = 0,
    VBLANK_COUNTER = 1,
    VBLANK_WAIT = 2,
    TEXTURE_FROM_PIXMAP = 3,
    SWAP_BUFFERS_EVENT = 4,
    SWAP_REGION = 5,
    SWAP_REGION_THROTTLE = 6,
    SWAP_REGION_SYNCHRONIZED = 7,
    BUFFER_AGE = 8,
    SYNC_AND_COMPLETE_EVENT = 9,
    N_FEATURES = 10,
}

export namespace BufferBit {
    export const $gtype: GObject.GType<BufferBit>;
}

export enum BufferBit {
    COLOR = 1,
    DEPTH = 2,
    STENCIL = 4,
}

export namespace BufferTarget {
    export const $gtype: GObject.GType<BufferTarget>;
}

export enum BufferTarget {
    WINDOW_BUFFER = 2,
    OFFSCREEN_BUFFER = 4,
}

export namespace EglImageFlags {
    export const $gtype: GObject.GType<EglImageFlags>;
}

export enum EglImageFlags {
    NONE = 0,
    NO_GET_DATA = 1,
}

export namespace PixelFormat {
    export const $gtype: GObject.GType<PixelFormat>;
}

export enum PixelFormat {
    ANY = 0,
    A_8 = 17,
    RGB_565 = 4,
    RGBA_4444 = 21,
    RGBA_5551 = 22,
    YUV = 7,
    G_8 = 8,
    RG_88 = 9,
    RGB_888 = 2,
    BGR_888 = 34,
    RGBA_8888 = 19,
    BGRA_8888 = 51,
    ARGB_8888 = 83,
    ABGR_8888 = 115,
    RGBA_1010102 = 29,
    BGRA_1010102 = 61,
    ARGB_2101010 = 93,
    ABGR_2101010 = 125,
    RGBA_FP_16161616 = 27,
    BGRA_FP_16161616 = 59,
    ARGB_FP_16161616 = 91,
    ABGR_FP_16161616 = 123,
    RGBA_8888_PRE = 147,
    BGRA_8888_PRE = 179,
    ARGB_8888_PRE = 211,
    ABGR_8888_PRE = 243,
    RGBA_4444_PRE = 149,
    RGBA_5551_PRE = 150,
    RGBA_1010102_PRE = 157,
    BGRA_1010102_PRE = 189,
    ARGB_2101010_PRE = 221,
    ABGR_2101010_PRE = 253,
    RGBA_FP_16161616_PRE = 155,
    BGRA_FP_16161616_PRE = 187,
    ARGB_FP_16161616_PRE = 219,
    ABGR_FP_16161616_PRE = 251,
    DEPTH_16 = 265,
    DEPTH_32 = 259,
    DEPTH_24_STENCIL_8 = 771,
}

export namespace ReadPixelsFlags {
    export const $gtype: GObject.GType<ReadPixelsFlags>;
}

export enum ReadPixelsFlags {
    READ_PIXELS_COLOR_BUFFER = 1,
}

export namespace TextureFlags {
    export const $gtype: GObject.GType<TextureFlags>;
}

export enum TextureFlags {
    NONE = 0,
    NO_AUTO_MIPMAP = 1,
    NO_SLICING = 2,
    NO_ATLAS = 4,
}
export namespace Bitmap {
    export interface ConstructorProperties
        extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Bitmap extends Object {
    static $gtype: GObject.GType<Bitmap>;

    constructor(
        properties?: Partial<Bitmap.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Bitmap.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static new_from_file(filename: string): Bitmap;

    // Members

    get_format(): PixelFormat;
    get_height(): number;
    get_rowstride(): number;
    get_width(): number;
    static error_quark(): number;
    static get_size_from_file(filename: string): [boolean, number, number];
}
export namespace Context {
    export interface ConstructorProperties
        extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Context extends Object {
    static $gtype: GObject.GType<Context>;

    constructor(
        properties?: Partial<Context.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Context.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    get_named_pipeline(key: PipelineKey): Pipeline;
    is_hardware_accelerated(): boolean;
    set_named_pipeline(key: PipelineKey, pipeline?: Pipeline | null): void;
}
export namespace FrameInfo {
    export interface ConstructorProperties
        extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FrameInfo extends Object {
    static $gtype: GObject.GType<FrameInfo>;

    constructor(
        properties?: Partial<FrameInfo.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<FrameInfo.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    get_frame_counter(): number;
    get_presentation_time(): number;
    get_refresh_rate(): number;
}
export namespace Object {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Object {
    static $gtype: GObject.GType<Object>;

    constructor(
        properties?: Partial<Object.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Object.ConstructorProperties>,
        ...args: any[]
    ): void;
}
export namespace Offscreen {
    export interface ConstructorProperties
        extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Offscreen extends Object implements Framebuffer {
    static $gtype: GObject.GType<Offscreen>;

    constructor(
        properties?: Partial<Offscreen.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Offscreen.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static new_to_texture(texture: Texture): Offscreen;
    static new_with_texture(texture: Texture): Offscreen;

    // Implemented Members

    allocate(): boolean;
    clear(buffers: number, color: Color): void;
    clear4f(
        buffers: number,
        red: number,
        green: number,
        blue: number,
        alpha: number
    ): void;
    discard_buffers(buffers: number): void;
    draw_multitextured_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        tex_coords: number[],
        tex_coords_len: number
    ): void;
    draw_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number
    ): void;
    draw_rectangles(
        pipeline: Pipeline,
        coordinates: number[],
        n_rectangles: number
    ): void;
    draw_textured_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        s_1: number,
        t_1: number,
        s_2: number,
        t_2: number
    ): void;
    draw_textured_rectangles(
        pipeline: Pipeline,
        coordinates: number[],
        n_rectangles: number
    ): void;
    finish(): void;
    flush(): void;
    frustum(
        left: number,
        right: number,
        bottom: number,
        top: number,
        z_near: number,
        z_far: number
    ): void;
    get_alpha_bits(): number;
    get_blue_bits(): number;
    get_context(): Context;
    get_depth_bits(): number;
    get_depth_write_enabled(): boolean;
    get_dither_enabled(): boolean;
    get_green_bits(): number;
    get_height(): number;
    get_is_stereo(): boolean;
    get_modelview_matrix(): Matrix;
    get_projection_matrix(): Matrix;
    get_red_bits(): number;
    get_samples_per_pixel(): number;
    get_stereo_mode(): StereoMode;
    get_viewport4fv(): number[];
    get_viewport_height(): number;
    get_viewport_width(): number;
    get_viewport_x(): number;
    get_viewport_y(): number;
    get_width(): number;
    identity_matrix(): void;
    orthographic(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        near: number,
        far: number
    ): void;
    perspective(
        fov_y: number,
        aspect: number,
        z_near: number,
        z_far: number
    ): void;
    pop_clip(): void;
    pop_matrix(): void;
    push_matrix(): void;
    push_rectangle_clip(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number
    ): void;
    push_region_clip(region: cairo.Region): void;
    push_scissor_clip(
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    read_pixels(
        x: number,
        y: number,
        width: number,
        height: number,
        format: PixelFormat,
        pixels: number
    ): boolean;
    read_pixels_into_bitmap(
        x: number,
        y: number,
        source: ReadPixelsFlags,
        bitmap: Bitmap
    ): boolean;
    resolve_samples(): void;
    resolve_samples_region(
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    rotate(angle: number, x: number, y: number, z: number): void;
    rotate_euler(euler: Graphene.Euler): void;
    scale(x: number, y: number, z: number): void;
    set_depth_write_enabled(depth_write_enabled: boolean): void;
    set_dither_enabled(dither_enabled: boolean): void;
    set_modelview_matrix(matrix: Matrix): void;
    set_projection_matrix(matrix: Matrix): void;
    set_samples_per_pixel(samples_per_pixel: number): void;
    set_stereo_mode(stereo_mode: StereoMode): void;
    set_viewport(x: number, y: number, width: number, height: number): void;
    transform(matrix: Matrix): void;
    translate(x: number, y: number, z: number): void;
}
export namespace Onscreen {
    export interface ConstructorProperties
        extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Onscreen extends Object implements Framebuffer {
    static $gtype: GObject.GType<Onscreen>;

    constructor(
        properties?: Partial<Onscreen.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Onscreen.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    add_dirty_callback(
        callback: OnscreenDirtyCallback,
        destroy?: UserDataDestroyCallback | null
    ): OnscreenDirtyClosure;
    add_frame_callback(
        callback: FrameCallback,
        destroy?: UserDataDestroyCallback | null
    ): FrameClosure;
    add_resize_callback(
        callback: OnscreenResizeCallback,
        destroy?: UserDataDestroyCallback | null
    ): OnscreenResizeClosure;
    get_buffer_age(): number;
    get_frame_counter(): number;
    get_resizable(): boolean;
    hide(): void;
    remove_dirty_callback(closure: OnscreenDirtyClosure): void;
    remove_frame_callback(closure: FrameClosure): void;
    remove_resize_callback(closure: OnscreenResizeClosure): void;
    set_resizable(resizable: boolean): void;
    show(): void;
    swap_buffers(frame_info: FrameInfo): void;
    swap_buffers_with_damage(
        rectangles: number,
        n_rectangles: number,
        info: FrameInfo
    ): void;
    swap_region(
        rectangles: number,
        n_rectangles: number,
        info: FrameInfo
    ): void;

    // Implemented Members

    allocate(): boolean;
    clear(buffers: number, color: Color): void;
    clear4f(
        buffers: number,
        red: number,
        green: number,
        blue: number,
        alpha: number
    ): void;
    discard_buffers(buffers: number): void;
    draw_multitextured_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        tex_coords: number[],
        tex_coords_len: number
    ): void;
    draw_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number
    ): void;
    draw_rectangles(
        pipeline: Pipeline,
        coordinates: number[],
        n_rectangles: number
    ): void;
    draw_textured_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        s_1: number,
        t_1: number,
        s_2: number,
        t_2: number
    ): void;
    draw_textured_rectangles(
        pipeline: Pipeline,
        coordinates: number[],
        n_rectangles: number
    ): void;
    finish(): void;
    flush(): void;
    frustum(
        left: number,
        right: number,
        bottom: number,
        top: number,
        z_near: number,
        z_far: number
    ): void;
    get_alpha_bits(): number;
    get_blue_bits(): number;
    get_context(): Context;
    get_depth_bits(): number;
    get_depth_write_enabled(): boolean;
    get_dither_enabled(): boolean;
    get_green_bits(): number;
    get_height(): number;
    get_is_stereo(): boolean;
    get_modelview_matrix(): Matrix;
    get_projection_matrix(): Matrix;
    get_red_bits(): number;
    get_samples_per_pixel(): number;
    get_stereo_mode(): StereoMode;
    get_viewport4fv(): number[];
    get_viewport_height(): number;
    get_viewport_width(): number;
    get_viewport_x(): number;
    get_viewport_y(): number;
    get_width(): number;
    identity_matrix(): void;
    orthographic(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        near: number,
        far: number
    ): void;
    perspective(
        fov_y: number,
        aspect: number,
        z_near: number,
        z_far: number
    ): void;
    pop_clip(): void;
    pop_matrix(): void;
    push_matrix(): void;
    push_rectangle_clip(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number
    ): void;
    push_region_clip(region: cairo.Region): void;
    push_scissor_clip(
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    read_pixels(
        x: number,
        y: number,
        width: number,
        height: number,
        format: PixelFormat,
        pixels: number
    ): boolean;
    read_pixels_into_bitmap(
        x: number,
        y: number,
        source: ReadPixelsFlags,
        bitmap: Bitmap
    ): boolean;
    resolve_samples(): void;
    resolve_samples_region(
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    rotate(angle: number, x: number, y: number, z: number): void;
    rotate_euler(euler: Graphene.Euler): void;
    scale(x: number, y: number, z: number): void;
    set_depth_write_enabled(depth_write_enabled: boolean): void;
    set_dither_enabled(dither_enabled: boolean): void;
    set_modelview_matrix(matrix: Matrix): void;
    set_projection_matrix(matrix: Matrix): void;
    set_samples_per_pixel(samples_per_pixel: number): void;
    set_stereo_mode(stereo_mode: StereoMode): void;
    set_viewport(x: number, y: number, width: number, height: number): void;
    transform(matrix: Matrix): void;
    translate(x: number, y: number, z: number): void;
}
export namespace Pipeline {
    export interface ConstructorProperties
        extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Pipeline extends Object {
    static $gtype: GObject.GType<Pipeline>;

    constructor(
        properties?: Partial<Pipeline.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Pipeline.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](context: Context): Pipeline;

    // Members

    copy(): Pipeline;
    foreach_layer(callback: PipelineLayerCallback): void;
    get_alpha_test_function(): PipelineAlphaFunc;
    get_alpha_test_reference(): number;
    get_color(): Color;
    get_cull_face_mode(): PipelineCullFaceMode;
    get_front_face_winding(): Winding;
    get_layer_mag_filter(layer_index: number): PipelineFilter;
    get_layer_min_filter(layer_index: number): PipelineFilter;
    get_layer_point_sprite_coords_enabled(layer_index: number): boolean;
    get_layer_texture(layer_index: number): Texture;
    get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode;
    get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode;
    get_n_layers(): number;
    get_per_vertex_point_size(): boolean;
    get_point_size(): number;
    get_uniform_location(uniform_name: string): number;
    get_user_program(): Handle;
    remove_layer(layer_index: number): void;
    set_alpha_test_function(
        alpha_func: PipelineAlphaFunc,
        alpha_reference: number
    ): void;
    set_blend(blend_string: string): boolean;
    set_blend_constant(constant_color: Color): void;
    set_color(color: Color): void;
    set_color4f(red: number, green: number, blue: number, alpha: number): void;
    set_color4ub(red: number, green: number, blue: number, alpha: number): void;
    set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void;
    set_front_face_winding(front_winding: Winding): void;
    set_layer_combine(layer_index: number, blend_string: string): boolean;
    set_layer_combine_constant(layer_index: number, constant: Color): void;
    set_layer_filters(
        layer_index: number,
        min_filter: PipelineFilter,
        mag_filter: PipelineFilter
    ): void;
    set_layer_matrix(layer_index: number, matrix: Matrix): void;
    set_layer_max_mipmap_level(layer: number, max_level: number): void;
    set_layer_null_texture(layer_index: number): void;
    set_layer_point_sprite_coords_enabled(
        layer_index: number,
        enable: boolean
    ): boolean;
    set_layer_texture(layer_index: number, texture: Texture): void;
    set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void;
    set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode): void;
    set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode): void;
    set_per_vertex_point_size(enable: boolean): boolean;
    set_point_size(point_size: number): void;
    set_uniform_1f(uniform_location: number, value: number): void;
    set_uniform_1i(uniform_location: number, value: number): void;
    set_uniform_float(
        uniform_location: number,
        n_components: number,
        count: number,
        value: number
    ): void;
    set_uniform_int(
        uniform_location: number,
        n_components: number,
        count: number,
        value: number
    ): void;
    set_uniform_matrix(
        uniform_location: number,
        dimensions: number,
        count: number,
        transpose: boolean,
        value: number
    ): void;
    set_user_program(program: Handle): void;
}
export namespace Texture2D {
    export interface ConstructorProperties
        extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Texture2D extends Object implements Texture {
    static $gtype: GObject.GType<Texture2D>;

    constructor(
        properties?: Partial<Texture2D.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Texture2D.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static new_from_bitmap(bitmap: Bitmap): Texture2D;
    static new_from_bitmap(...args: never[]): never;

    // Members

    egl_image_external_alloc_finish(user_data?: any | null): void;
    egl_image_external_bind(): void;

    // Implemented Members

    allocate(): boolean;
    get_components(): TextureComponents;
    get_data(
        format: PixelFormat,
        rowstride: number,
        data?: Uint8Array | null
    ): number;
    get_gl_texture(): [boolean, number | null, number | null];
    get_height(): number;
    get_max_waste(): number;
    get_premultiplied(): boolean;
    get_width(): number;
    is_sliced(): boolean;
    new_from_sub_texture(
        sub_x: number,
        sub_y: number,
        sub_width: number,
        sub_height: number
    ): Texture;
    set_components(components: TextureComponents): void;
    set_data(
        format: PixelFormat,
        rowstride: number,
        data: Uint8Array | string,
        level: number
    ): boolean;
    set_premultiplied(premultiplied: boolean): void;
    set_region(
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        dst_width: number,
        dst_height: number,
        width: number,
        height: number,
        format: PixelFormat,
        rowstride: number,
        data: Uint8Array | string
    ): boolean;
    set_region_from_bitmap(
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        dst_width: number,
        dst_height: number,
        bitmap: Bitmap
    ): boolean;
}
export namespace Texture2DSliced {
    export interface ConstructorProperties
        extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Texture2DSliced extends Object implements Texture {
    static $gtype: GObject.GType<Texture2DSliced>;

    constructor(
        properties?: Partial<Texture2DSliced.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Texture2DSliced.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced;
    static new_from_bitmap(...args: never[]): never;

    // Implemented Members

    allocate(): boolean;
    get_components(): TextureComponents;
    get_data(
        format: PixelFormat,
        rowstride: number,
        data?: Uint8Array | null
    ): number;
    get_gl_texture(): [boolean, number | null, number | null];
    get_height(): number;
    get_max_waste(): number;
    get_premultiplied(): boolean;
    get_width(): number;
    is_sliced(): boolean;
    new_from_sub_texture(
        sub_x: number,
        sub_y: number,
        sub_width: number,
        sub_height: number
    ): Texture;
    set_components(components: TextureComponents): void;
    set_data(
        format: PixelFormat,
        rowstride: number,
        data: Uint8Array | string,
        level: number
    ): boolean;
    set_premultiplied(premultiplied: boolean): void;
    set_region(
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        dst_width: number,
        dst_height: number,
        width: number,
        height: number,
        format: PixelFormat,
        rowstride: number,
        data: Uint8Array | string
    ): boolean;
    set_region_from_bitmap(
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        dst_width: number,
        dst_height: number,
        bitmap: Bitmap
    ): boolean;
}

export class Color {
    static $gtype: GObject.GType<Color>;

    constructor();
    constructor(
        properties?: Partial<{
            private_member_red?: number;
            private_member_green?: number;
            private_member_blue?: number;
            private_member_alpha?: number;
            private_member_padding0?: number;
            private_member_padding1?: number;
            private_member_padding2?: number;
        }>
    );
    constructor(copy: Color);

    // Fields
    private_member_red: number;
    private_member_green: number;
    private_member_blue: number;
    private_member_alpha: number;
    private_member_padding0: number;
    private_member_padding1: number;
    private_member_padding2: number;

    // Constructors
    static ['new'](): Color;

    // Members
    copy(): Color;
    free(): void;
    get_alpha(): number;
    get_alpha_byte(): number;
    get_alpha_float(): number;
    get_blue(): number;
    get_blue_byte(): number;
    get_blue_float(): number;
    get_green(): number;
    get_green_byte(): number;
    get_green_float(): number;
    get_red(): number;
    get_red_byte(): number;
    get_red_float(): number;
    init_from_4f(red: number, green: number, blue: number, alpha: number): void;
    init_from_4fv(color_array: number): void;
    init_from_4ub(
        red: number,
        green: number,
        blue: number,
        alpha: number
    ): void;
    premultiply(): void;
    set_alpha(alpha: number): void;
    set_alpha_byte(alpha: number): void;
    set_alpha_float(alpha: number): void;
    set_blue(blue: number): void;
    set_blue_byte(blue: number): void;
    set_blue_float(blue: number): void;
    set_green(green: number): void;
    set_green_byte(green: number): void;
    set_green_float(green: number): void;
    set_red(red: number): void;
    set_red_byte(red: number): void;
    set_red_float(red: number): void;
    to_hsl(): [number, number, number];
    unpremultiply(): void;
    static equal(v1?: any | null, v2?: any | null): boolean;
    static init_from_hsl(
        hue: number,
        saturation: number,
        luminance: number
    ): Color;
}

export class DebugObjectTypeInfo {
    static $gtype: GObject.GType<DebugObjectTypeInfo>;

    constructor(
        properties?: Partial<{
            name?: string;
            instance_count?: number;
        }>
    );
    constructor(copy: DebugObjectTypeInfo);

    // Fields
    name: string;
    instance_count: number;
}

export class FrameClosure {
    static $gtype: GObject.GType<FrameClosure>;

    constructor(copy: FrameClosure);
}

export class Material {
    static $gtype: GObject.GType<Material>;

    constructor();
    constructor(copy: Material);

    // Constructors
    static ['new'](): Material;

    // Members
    set_alpha_test_function(
        alpha_func: MaterialAlphaFunc,
        alpha_reference: number
    ): void;
    set_blend(blend_string: string): boolean;
    set_blend_constant(constant_color: Color): void;
    set_color(color: Color): void;
    set_color4ub(red: number, green: number, blue: number, alpha: number): void;
    set_layer(layer_index: number, texture: Handle): void;
    set_layer_combine(layer_index: number, blend_string: string): boolean;
    set_layer_combine_constant(layer_index: number, constant: Color): void;
    set_layer_filters(
        layer_index: number,
        min_filter: MaterialFilter,
        mag_filter: MaterialFilter
    ): void;
    set_layer_matrix(layer_index: number, matrix: Matrix): void;
    set_layer_point_sprite_coords_enabled(
        layer_index: number,
        enable: boolean
    ): boolean;
    set_point_size(point_size: number): void;
    set_user_program(program: Handle): void;
}

export class MaterialLayer {
    static $gtype: GObject.GType<MaterialLayer>;

    constructor(copy: MaterialLayer);
}

export class Matrix {
    static $gtype: GObject.GType<Matrix>;

    constructor(copy: Matrix);

    // Fields
    xx: number;
    yx: number;
    zx: number;
    wx: number;
    xy: number;
    yy: number;
    zy: number;
    wy: number;
    xz: number;
    yz: number;
    zz: number;
    wz: number;
    xw: number;
    yw: number;
    zw: number;
    ww: number;
    private_member_inv: number[];
    private_member_type: number;
    private_member_flags: number;
    private_member__padding3: number;

    // Members
    copy(): Matrix;
    free(): void;
    frustum(
        left: number,
        right: number,
        bottom: number,
        top: number,
        z_near: number,
        z_far: number
    ): void;
    get_array(): number;
    get_inverse(): [boolean, Matrix];
    init_from_array(array: number): void;
    init_from_euler(euler: Graphene.Euler): void;
    init_identity(): void;
    init_translation(tx: number, ty: number, tz: number): void;
    is_identity(): boolean;
    look_at(
        eye_position_x: number,
        eye_position_y: number,
        eye_position_z: number,
        object_x: number,
        object_y: number,
        object_z: number,
        world_up_x: number,
        world_up_y: number,
        world_up_z: number
    ): void;
    multiply(a: Matrix, b: Matrix): void;
    orthographic(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        near: number,
        far: number
    ): void;
    perspective(
        fov_y: number,
        aspect: number,
        z_near: number,
        z_far: number
    ): void;
    project_points(
        n_components: number,
        stride_in: number,
        points_in: any | null,
        stride_out: number,
        points_out: any | null,
        n_points: number
    ): void;
    rotate(angle: number, x: number, y: number, z: number): void;
    rotate_euler(euler: Graphene.Euler): void;
    scale(sx: number, sy: number, sz: number): void;
    transform_point(
        x: number,
        y: number,
        z: number,
        w: number
    ): [number, number, number, number];
    transform_points(
        n_components: number,
        stride_in: number,
        points_in: any | null,
        stride_out: number,
        points_out: any | null,
        n_points: number
    ): void;
    translate(x: number, y: number, z: number): void;
    transpose(): void;
    view_2d_in_frustum(
        left: number,
        right: number,
        bottom: number,
        top: number,
        z_near: number,
        z_2d: number,
        width_2d: number,
        height_2d: number
    ): void;
    view_2d_in_perspective(
        fov_y: number,
        aspect: number,
        z_near: number,
        z_2d: number,
        width_2d: number,
        height_2d: number
    ): void;
    static equal(v1?: any | null, v2?: any | null): boolean;
}

export class OnscreenDirtyClosure {
    static $gtype: GObject.GType<OnscreenDirtyClosure>;

    constructor(copy: OnscreenDirtyClosure);
}

export class OnscreenDirtyInfo {
    static $gtype: GObject.GType<OnscreenDirtyInfo>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            width?: number;
            height?: number;
        }>
    );
    constructor(copy: OnscreenDirtyInfo);

    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
}

export class OnscreenResizeClosure {
    static $gtype: GObject.GType<OnscreenResizeClosure>;

    constructor(copy: OnscreenResizeClosure);
}

export class Scanout {
    static $gtype: GObject.GType<Scanout>;

    constructor(copy: Scanout);
}

export class TextureVertex {
    static $gtype: GObject.GType<TextureVertex>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            z?: number;
            tx?: number;
            ty?: number;
            color?: Color;
        }>
    );
    constructor(copy: TextureVertex);

    // Fields
    x: number;
    y: number;
    z: number;
    tx: number;
    ty: number;
    color: Color;
}

export class TraceContext {
    static $gtype: GObject.GType<TraceContext>;

    constructor(copy: TraceContext);
}

export class TraceHead {
    static $gtype: GObject.GType<TraceHead>;

    constructor(
        properties?: Partial<{
            begin_time?: number;
            name?: string;
        }>
    );
    constructor(copy: TraceHead);

    // Fields
    begin_time: number;
    name: string;
}

export class UserDataKey {
    static $gtype: GObject.GType<UserDataKey>;

    constructor(
        properties?: Partial<{
            unused?: number;
        }>
    );
    constructor(copy: UserDataKey);

    // Fields
    unused: number;
}

export interface FramebufferNamespace {
    prototype: FramebufferPrototype;

    error_quark(): number;
}
export type Framebuffer = FramebufferPrototype;
export interface FramebufferPrototype extends Object {
    // Members

    allocate(): boolean;
    clear(buffers: number, color: Color): void;
    clear4f(
        buffers: number,
        red: number,
        green: number,
        blue: number,
        alpha: number
    ): void;
    discard_buffers(buffers: number): void;
    draw_multitextured_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        tex_coords: number[],
        tex_coords_len: number
    ): void;
    draw_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number
    ): void;
    draw_rectangles(
        pipeline: Pipeline,
        coordinates: number[],
        n_rectangles: number
    ): void;
    draw_textured_rectangle(
        pipeline: Pipeline,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        s_1: number,
        t_1: number,
        s_2: number,
        t_2: number
    ): void;
    draw_textured_rectangles(
        pipeline: Pipeline,
        coordinates: number[],
        n_rectangles: number
    ): void;
    finish(): void;
    flush(): void;
    frustum(
        left: number,
        right: number,
        bottom: number,
        top: number,
        z_near: number,
        z_far: number
    ): void;
    get_alpha_bits(): number;
    get_blue_bits(): number;
    get_context(): Context;
    get_depth_bits(): number;
    get_depth_write_enabled(): boolean;
    get_dither_enabled(): boolean;
    get_green_bits(): number;
    get_height(): number;
    get_is_stereo(): boolean;
    get_modelview_matrix(): Matrix;
    get_projection_matrix(): Matrix;
    get_red_bits(): number;
    get_samples_per_pixel(): number;
    get_stereo_mode(): StereoMode;
    get_viewport4fv(): number[];
    get_viewport_height(): number;
    get_viewport_width(): number;
    get_viewport_x(): number;
    get_viewport_y(): number;
    get_width(): number;
    identity_matrix(): void;
    orthographic(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        near: number,
        far: number
    ): void;
    perspective(
        fov_y: number,
        aspect: number,
        z_near: number,
        z_far: number
    ): void;
    pop_clip(): void;
    pop_matrix(): void;
    push_matrix(): void;
    push_rectangle_clip(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number
    ): void;
    push_region_clip(region: cairo.Region): void;
    push_scissor_clip(
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    read_pixels(
        x: number,
        y: number,
        width: number,
        height: number,
        format: PixelFormat,
        pixels: number
    ): boolean;
    read_pixels_into_bitmap(
        x: number,
        y: number,
        source: ReadPixelsFlags,
        bitmap: Bitmap
    ): boolean;
    resolve_samples(): void;
    resolve_samples_region(
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    rotate(angle: number, x: number, y: number, z: number): void;
    rotate_euler(euler: Graphene.Euler): void;
    scale(x: number, y: number, z: number): void;
    set_depth_write_enabled(depth_write_enabled: boolean): void;
    set_dither_enabled(dither_enabled: boolean): void;
    set_modelview_matrix(matrix: Matrix): void;
    set_projection_matrix(matrix: Matrix): void;
    set_samples_per_pixel(samples_per_pixel: number): void;
    set_stereo_mode(stereo_mode: StereoMode): void;
    set_viewport(x: number, y: number, width: number, height: number): void;
    transform(matrix: Matrix): void;
    translate(x: number, y: number, z: number): void;
}

export const Framebuffer: FramebufferNamespace;

export interface TextureNamespace {
    prototype: TexturePrototype;

    error_quark(): number;
    new_from_bitmap(
        bitmap: Bitmap,
        flags: TextureFlags,
        internal_format: PixelFormat
    ): Texture;
    new_from_data(
        width: number,
        height: number,
        flags: TextureFlags,
        format: PixelFormat,
        internal_format: PixelFormat,
        rowstride: number,
        data: Uint8Array | string
    ): Texture;
    new_from_file(
        filename: string,
        flags: TextureFlags,
        internal_format: PixelFormat
    ): Texture;
    new_with_size(
        width: number,
        height: number,
        flags: TextureFlags,
        internal_format: PixelFormat
    ): Texture;
}
export type Texture = TexturePrototype;
export interface TexturePrototype extends Object {
    // Members

    allocate(): boolean;
    get_components(): TextureComponents;
    get_data(
        format: PixelFormat,
        rowstride: number,
        data?: Uint8Array | null
    ): number;
    get_gl_texture(): [boolean, number | null, number | null];
    get_height(): number;
    get_max_waste(): number;
    get_premultiplied(): boolean;
    get_width(): number;
    is_sliced(): boolean;
    new_from_sub_texture(
        sub_x: number,
        sub_y: number,
        sub_width: number,
        sub_height: number
    ): Texture;
    set_components(components: TextureComponents): void;
    set_data(
        format: PixelFormat,
        rowstride: number,
        data: Uint8Array | string,
        level: number
    ): boolean;
    set_premultiplied(premultiplied: boolean): void;
    set_region(
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        dst_width: number,
        dst_height: number,
        width: number,
        height: number,
        format: PixelFormat,
        rowstride: number,
        data: Uint8Array | string
    ): boolean;
    set_region_from_bitmap(
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        dst_width: number,
        dst_height: number,
        bitmap: Bitmap
    ): boolean;
}

export const Texture: TextureNamespace;

export type Angle = number;
export type Handle = any;
export type PipelineKey = string;
export type UserDataDestroyCallback = GLib.DestroyNotify;

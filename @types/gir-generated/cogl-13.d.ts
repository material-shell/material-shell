/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cogl-13-import.d.ts';
/**
 * Cogl-13
 */

import type cairo from './cairo-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Graphene from './graphene-1.0.js';
import type GL from './gl-1.0.js';

export namespace Cogl {
    /**
     * Data types for the components of a vertex attribute.
     */
    enum AttributeType {
        /**
         * Data is the same size of a byte
         */
        BYTE,
        /**
         * Data is the same size of an
         *   unsigned byte
         */
        UNSIGNED_BYTE,
        /**
         * Data is the same size of a short integer
         */
        SHORT,
        /**
         * Data is the same size of
         *   an unsigned short integer
         */
        UNSIGNED_SHORT,
        /**
         * Data is the same size of a float
         */
        FLOAT,
    }
    /**
     * Error codes that can be thrown when performing bitmap
     * operations. Note that gdk_pixbuf_new_from_file() can also throw
     * errors directly from the underlying image loading library. For
     * example, if GdkPixbuf is used then errors #GdkPixbufError<!-- -->s
     * will be used directly.
     */
    enum BitmapError {
        /**
         * Generic failure code, something went
         *   wrong.
         */
        FAILED,
        /**
         * Unknown image type.
         */
        UNKNOWN_TYPE,
        /**
         * An image file was broken somehow.
         */
        CORRUPT_IMAGE,
    }
    /**
     * Error enumeration for the blend strings parser
     */
    enum BlendStringError {
        /**
         * Generic parse error
         */
        PARSE_ERROR,
        /**
         * Argument parse error
         */
        ARGUMENT_PARSE_ERROR,
        /**
         * Internal parser error
         */
        INVALID_ERROR,
        /**
         * Blend string not
         *   supported by the GPU
         */
        GPU_UNSUPPORTED_ERROR,
    }
    /**
     * When using depth testing one of these functions is used to compare
     * the depth of an incoming fragment against the depth value currently
     * stored in the depth buffer. The function is changed using
     * cogl_depth_state_set_test_function().
     *
     * The test is only done when depth testing is explicitly enabled. (See
     * cogl_depth_state_set_test_enabled())
     */
    enum DepthTestFunction {
        /**
         * Never passes.
         */
        NEVER,
        /**
         * Passes if the fragment's depth
         * value is less than the value currently in the depth buffer.
         */
        LESS,
        /**
         * Passes if the fragment's depth
         * value is equal to the value currently in the depth buffer.
         */
        EQUAL,
        /**
         * Passes if the fragment's depth
         * value is less or equal to the value currently in the depth buffer.
         */
        LEQUAL,
        /**
         * Passes if the fragment's depth
         * value is greater than the value currently in the depth buffer.
         */
        GREATER,
        /**
         * Passes if the fragment's depth
         * value is not equal to the value currently in the depth buffer.
         */
        NOTEQUAL,
        /**
         * Passes if the fragment's depth
         * value greater than or equal to the value currently in the depth buffer.
         */
        GEQUAL,
        /**
         * Always passes.
         */
        ALWAYS,
    }
    /**
     * All the capabilities that can vary between different GPUs supported
     * by Cogl. Applications that depend on any of these features should explicitly
     * check for them using cogl_has_feature() or cogl_has_features().
     */
    enum FeatureID {
        /**
         * Set if
         *     %COGL_INDICES_TYPE_UNSIGNED_INT is supported in
         *     cogl_indices_new().
         */
        OGL_FEATURE_ID_UNSIGNED_INT_INDICES,
        /**
         * Whether cogl_buffer_map() is
         *     supported with CoglBufferAccess including read support.
         */
        OGL_FEATURE_ID_MAP_BUFFER_FOR_READ,
        /**
         * Whether cogl_buffer_map() is
         *     supported with CoglBufferAccess including write support.
         */
        OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE,
        OGL_FEATURE_ID_FENCE,
        /**
         * Support for
         *    %COGL_TEXTURE_COMPONENTS_RG as the internal components of a
         *    texture.
         */
        OGL_FEATURE_ID_TEXTURE_RG,
        /**
         * Available if the age of #CoglOnscreen back
         *    buffers are tracked and so cogl_onscreen_get_buffer_age() can be
         *    expected to return age values other than 0.
         */
        OGL_FEATURE_ID_BUFFER_AGE,
        OGL_FEATURE_ID_TEXTURE_EGL_IMAGE_EXTERNAL,
        /**
         * Whether blitting using
         *    cogl_blit_framebuffer() is supported.
         */
        OGL_FEATURE_ID_BLIT_FRAMEBUFFER,
        OGL_FEATURE_ID_TIMESTAMP_QUERY,
    }
    /**
     * Return values for the #CoglXlibFilterFunc and #CoglWin32FilterFunc functions.
     */
    enum FilterReturn {
        /**
         * The event was not handled, continues the
         *                        processing
         */
        CONTINUE,
        /**
         * Remove the event, stops the processing
         */
        REMOVE,
    }
    /**
     * Identifiers that are passed to #CoglFrameCallback functions
     * (registered using cogl_onscreen_add_frame_callback()) that
     * mark the progression of a frame in some way which usually
     * means that new information will have been accumulated in the
     * frame's corresponding #CoglFrameInfo object.
     *
     * The last event that will be sent for a frame will be a
     * `COGL_FRAME_EVENT_COMPLETE` event and so these are a good
     * opportunity to collect statistics about a frame since the
     * #CoglFrameInfo should hold the most data at this point.
     *
     * <note>A frame may not be completed before the next frame can start
     * so applications should avoid needing to collect all statistics for
     * a particular frame before they can start a new frame.</note>
     */
    enum FrameEvent {
        /**
         * Notifies that the system compositor has
         *                         acknowledged a frame and is ready for a
         *                         new frame to be created.
         */
        SYNC,
        /**
         * Notifies that a frame has ended. This
         *                             is a good time for applications to
         *                             collect statistics about the frame
         *                             since the #CoglFrameInfo should hold
         *                             the most data at this point. No other
         *                             events should be expected after a
         *                             `COGL_FRAME_EVENT_COMPLETE` event.
         */
        COMPLETE,
    }
    enum FramebufferError {
        FRAMEBUFFER_ERROR_ALLOCATE,
    }
    /**
     * All the error values that might be returned by
     * cogl_get_graphics_reset_status(). Each value's meaning corresponds
     * to the similarly named value defined in the ARB_robustness and
     * NV_robustness_video_memory_purge extensions.
     */
    enum GraphicsResetStatus {
        NO_ERROR,
        GUILTY_CONTEXT_RESET,
        INNOCENT_CONTEXT_RESET,
        UNKNOWN_CONTEXT_RESET,
        PURGED_CONTEXT_RESET,
    }
    /**
     * You should aim to use the smallest data type that gives you enough
     * range, since it reduces the size of your index array and can help
     * reduce the demand on memory bandwidth.
     *
     * Note that %COGL_INDICES_TYPE_UNSIGNED_INT is only supported if the
     * %COGL_FEATURE_ID_UNSIGNED_INT_INDICES feature is available. This
     * should always be available on OpenGL but on OpenGL ES it will only
     * be available if the GL_OES_element_index_uint extension is
     * advertized.
     */
    enum IndicesType {
        /**
         * Your indices are unsigned bytes
         */
        BYTE,
        /**
         * Your indices are unsigned shorts
         */
        SHORT,
        /**
         * Your indices are unsigned ints
         */
        INT,
    }
    /**
     * Alpha testing happens before blending primitives with the framebuffer and
     * gives an opportunity to discard fragments based on a comparison with the
     * incoming alpha value and a reference alpha value. The #CoglPipelineAlphaFunc
     * determines how the comparison is done.
     */
    enum PipelineAlphaFunc {
        /**
         * Never let the fragment through.
         */
        NEVER,
        /**
         * Let the fragment through if the incoming
         *   alpha value is less than the reference alpha value
         */
        LESS,
        /**
         * Let the fragment through if the incoming
         *   alpha value equals the reference alpha value
         */
        EQUAL,
        /**
         * Let the fragment through if the incoming
         *   alpha value is less than or equal to the reference alpha value
         */
        LEQUAL,
        /**
         * Let the fragment through if the incoming
         *   alpha value is greater than the reference alpha value
         */
        GREATER,
        /**
         * Let the fragment through if the incoming
         *   alpha value does not equal the reference alpha value
         */
        NOTEQUAL,
        /**
         * Let the fragment through if the incoming
         *   alpha value is greater than or equal to the reference alpha value.
         */
        GEQUAL,
        /**
         * Always let the fragment through.
         */
        ALWAYS,
    }
    /**
     * Specifies which faces should be culled. This can be set on a
     * pipeline using cogl_pipeline_set_cull_face_mode().
     */
    enum PipelineCullFaceMode {
        /**
         * Neither face will be
         *  culled. This is the default.
         */
        NONE,
        /**
         * Front faces will be culled.
         */
        FRONT,
        /**
         * Back faces will be culled.
         */
        BACK,
        /**
         * All faces will be culled.
         */
        BOTH,
    }
    /**
     * Texture filtering is used whenever the current pixel maps either to more
     * than one texture element (texel) or less than one. These filter enums
     * correspond to different strategies used to come up with a pixel color, by
     * possibly referring to multiple neighbouring texels and taking a weighted
     * average or simply using the nearest texel.
     */
    enum PipelineFilter {
        /**
         * Measuring in manhatten distance from the,
         *   current pixel center, use the nearest texture texel
         */
        NEAREST,
        /**
         * Use the weighted average of the 4 texels
         *   nearest the current pixel center
         */
        LINEAR,
        /**
         * Select the mimap level whose
         *   texel size most closely matches the current pixel, and use the
         *   %COGL_PIPELINE_FILTER_NEAREST criterion
         */
        NEAREST_MIPMAP_NEAREST,
        /**
         * Select the mimap level whose
         *   texel size most closely matches the current pixel, and use the
         *   %COGL_PIPELINE_FILTER_LINEAR criterion
         */
        LINEAR_MIPMAP_NEAREST,
        /**
         * Select the two mimap levels
         *   whose texel size most closely matches the current pixel, use
         *   the %COGL_PIPELINE_FILTER_NEAREST criterion on each one and take
         *   their weighted average
         */
        NEAREST_MIPMAP_LINEAR,
        /**
         * Select the two mimap levels
         *   whose texel size most closely matches the current pixel, use
         *   the %COGL_PIPELINE_FILTER_LINEAR criterion on each one and take
         *   their weighted average
         */
        LINEAR_MIPMAP_LINEAR,
    }
    /**
     * The wrap mode specifies what happens when texture coordinates
     * outside the range 0→1 are used. Note that if the filter mode is
     * anything but %COGL_PIPELINE_FILTER_NEAREST then texels outside the
     * range 0→1 might be used even when the coordinate is exactly 0 or 1
     * because OpenGL will try to sample neighbouring pixels. For example
     * if you are trying to render the full texture then you may get
     * artifacts around the edges when the pixels from the other side are
     * merged in if the wrap mode is set to repeat.
     */
    enum PipelineWrapMode {
        /**
         * The texture will be repeated. This
         *   is useful for example to draw a tiled background.
         */
        REPEAT,
        MIRRORED_REPEAT,
        /**
         * The coordinates outside the
         *   range 0→1 will sample copies of the edge pixels of the
         *   texture. This is useful to avoid artifacts if only one copy of
         *   the texture is being rendered.
         */
        CLAMP_TO_EDGE,
        /**
         * Cogl will try to automatically
         *   decide which of the above two to use. For cogl_rectangle(), it
         *   will use repeat mode if any of the texture coordinates are
         *   outside the range 0→1, otherwise it will use clamp to edge. For
         *   cogl_polygon() it will always use repeat mode. For
         *   cogl_vertex_buffer_draw() it will use repeat mode except for
         *   layers that have point sprite coordinate generation enabled. This
         *   is the default value.
         */
        AUTOMATIC,
    }
    enum RendererError {
        XLIB_DISPLAY_OPEN,
        BAD_CONSTRAINT,
    }
    enum ScanoutError {
        SCANOUT_ERROR_INHIBITED,
    }
    /**
     * Types of shaders
     */
    enum ShaderType {
        /**
         * A program for processing vertices
         */
        VERTEX,
        /**
         * A program for processing fragments
         */
        FRAGMENT,
    }
    /**
     * #CoglSnippetHook is used to specify a location within a
     * #CoglPipeline where the code of the snippet should be used when it
     * is attached to a pipeline.
     *
     * <glosslist>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX_GLOBALS</glossterm>
     *   <glossdef>
     * <para>
     * Adds a shader snippet at the beginning of the global section of the
     * shader for the vertex processing. Any declarations here can be
     * shared with all other snippets that are attached to a vertex hook.
     * Only the ‘declarations’ string is used and the other strings are
     * ignored.
     * </para>
     *   </glossdef>
     *  </glossentry>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_FRAGMENT_GLOBALS</glossterm>
     *   <glossdef>
     * <para>
     * Adds a shader snippet at the beginning of the global section of the
     * shader for the fragment processing. Any declarations here can be
     * shared with all other snippets that are attached to a fragment
     * hook. Only the ‘declarations’ string is used and the other strings
     * are ignored.
     * </para>
     *   </glossdef>
     *  </glossentry>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX</glossterm>
     *   <glossdef>
     * <para>
     * Adds a shader snippet that will hook on to the vertex processing
     * stage of the pipeline. This gives a chance for the application to
     * modify the vertex attributes generated by the shader. Typically the
     * snippet will modify cogl_color_out or cogl_position_out builtins.
     * </para>
     * <para>
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     * </para>
     * <para>
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any vertex processing is done.
     * </para>
     * <para>
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated vertex processing if it is present. This can be used if
     * the application wants to provide a complete vertex shader and
     * doesn't need the generated output from Cogl.
     * </para>
     * <para>
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard vertex processing is done. This can be used to modify the
     * outputs.
     * </para>
     *   </glossdef>
     *  </glossentry>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX_TRANSFORM</glossterm>
     *   <glossdef>
     * <para>
     * Adds a shader snippet that will hook on to the vertex transform stage.
     * Typically the snippet will use the cogl_modelview_matrix,
     * cogl_projection_matrix and cogl_modelview_projection_matrix matrices and the
     * cogl_position_in attribute. The hook must write to cogl_position_out.
     * The default processing for this hook will multiply cogl_position_in by
     * the combined modelview-projection matrix and store it on cogl_position_out.
     * </para>
     * <para>
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     * </para>
     * <para>
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before the vertex transform is done.
     * </para>
     * <para>
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated vertex transform if it is present.
     * </para>
     * <para>
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard vertex transformation is done. This can be used to modify the
     * cogl_position_out in addition to the default processing.
     * </para>
     *   </glossdef>
     *  </glossentry>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_POINT_SIZE</glossterm>
     *   <glossdef>
     * <para>
     * Adds a shader snippet that will hook on to the point size
     * calculation step within the vertex shader stage. The snippet should
     * write to the builtin cogl_point_size_out with the new point size.
     * The snippet can either read cogl_point_size_in directly and write a
     * new value or first read an existing value in cogl_point_size_out
     * that would be set by a previous snippet. Note that this hook is
     * only used if cogl_pipeline_set_per_vertex_point_size() is enabled
     * on the pipeline.
     * </para>
     * <para>
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     * </para>
     * <para>
     * The ‘pre’ string in `snippet` will be inserted just before
     * calculating the point size.
     * </para>
     * <para>
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated point size calculation if it is present.
     * </para>
     * <para>
     * The ‘post’ string in `snippet` will be inserted after the
     * standard point size calculation is done. This can be used to modify
     * cogl_point_size_out in addition to the default processing.
     * </para>
     *   </glossdef>
     *  </glossentry>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_FRAGMENT</glossterm>
     *   <glossdef>
     * <para>
     * Adds a shader snippet that will hook on to the fragment processing
     * stage of the pipeline. This gives a chance for the application to
     * modify the fragment color generated by the shader. Typically the
     * snippet will modify cogl_color_out.
     * </para>
     * <para>
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     * </para>
     * <para>
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any fragment processing is done.
     * </para>
     * <para>
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated fragment processing if it is present. This can be used if
     * the application wants to provide a complete fragment shader and
     * doesn't need the generated output from Cogl.
     * </para>
     * <para>
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard fragment processing is done. At this point the generated
     * value for the rest of the pipeline state will already be in
     * cogl_color_out so the application can modify the result by altering
     * this variable.
     * </para>
     *   </glossdef>
     *  </glossentry>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_TEXTURE_COORD_TRANSFORM</glossterm>
     *    <glossdef>
     * <para>
     * Adds a shader snippet that will hook on to the texture coordinate
     * transformation of a particular layer. This can be used to replace
     * the processing for a layer or to modify the results.
     * </para>
     * <para>
     * Within the snippet code for this hook there are two extra
     * variables. The first is a mat4 called cogl_matrix which represents
     * the user matrix for this layer. The second is called cogl_tex_coord
     * and represents the incoming and outgoing texture coordinate. On
     * entry to the hook, cogl_tex_coord contains the value of the
     * corresponding texture coordinate attribute for this layer. The hook
     * is expected to modify this variable. The output will be passed as a
     * varying to the fragment processing stage. The default code will
     * just multiply cogl_matrix by cogl_tex_coord and store the result in
     * cogl_tex_coord.
     * </para>
     * <para>
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     * </para>
     * <para>
     * The ‘pre’ string in `snippet` will be inserted just before the
     * fragment processing for this layer. At this point cogl_tex_coord
     * still contains the value of the texture coordinate attribute.
     * </para>
     * <para>
     * If a ‘replace’ string is given then this will be used instead of
     * the default fragment processing for this layer. The snippet can
     * modify cogl_tex_coord or leave it as is to apply no transformation.
     * </para>
     * <para>
     * The ‘post’ string in `snippet` will be inserted just after the
     * transformation. At this point cogl_tex_coord will contain the
     * results of the transformation but it can be further modified by the
     * snippet.
     * </para>
     *   </glossdef>
     *  </glossentry>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_LAYER_FRAGMENT</glossterm>
     *    <glossdef>
     * <para>
     * Adds a shader snippet that will hook on to the fragment processing
     * of a particular layer. This can be used to replace the processing
     * for a layer or to modify the results.
     * </para>
     * <para>
     * Within the snippet code for this hook there is an extra vec4
     * variable called ‘cogl_layer’. This contains the resulting color
     * that will be used for the layer. This can be modified in the ‘post’
     * section or it the default processing can be replaced entirely using
     * the ‘replace’ section.
     * </para>
     * <para>
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     * </para>
     * <para>
     * The ‘pre’ string in `snippet` will be inserted just before the
     * fragment processing for this layer.
     * </para>
     * <para>
     * If a ‘replace’ string is given then this will be used instead of
     * the default fragment processing for this layer. The snippet must write to
     * the ‘cogl_layer’ variable in that case.
     * </para>
     * <para>
     * The ‘post’ string in `snippet` will be inserted just after the
     * fragment processing for the layer. The results can be modified by changing
     * the value of the ‘cogl_layer’ variable.
     * </para>
     *   </glossdef>
     *  </glossentry>
     *  <glossentry>
     *   <glossterm>%COGL_SNIPPET_HOOK_TEXTURE_LOOKUP</glossterm>
     *   <glossdef>
     * <para>
     * Adds a shader snippet that will hook on to the texture lookup part
     * of a given layer. This gives a chance for the application to modify
     * the coordinates that will be used for the texture lookup or to
     * alter the returned texel.
     * </para>
     * <para>
     * Within the snippet code for this hook there are three extra
     * variables available. ‘cogl_sampler’ is a sampler object
     * representing the sampler for the layer where the snippet is
     * attached. ‘cogl_tex_coord’ is a vec4 which contains the texture
     * coordinates that will be used for the texture lookup. This can be
     * modified. ‘cogl_texel’ will contain the result of the texture
     * lookup. This can also be modified.
     * </para>
     * <para>
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     * </para>
     * <para>
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any fragment processing is done. This is a
     * good place to modify the cogl_tex_coord variable.
     * </para>
     * <para>
     * If a ‘replace’ string is given then this will be used instead of a
     * the default texture lookup. The snippet would typically use its own
     * sampler in this case.
     * </para>
     * <para>
     * The ‘post’ string in `snippet` will be inserted after texture lookup
     * has been performed. Here the snippet can modify the cogl_texel
     * variable to alter the returned texel.
     * </para>
     *   </glossdef>
     *  </glossentry>
     * </glosslist>
     */
    enum SnippetHook {
        /**
         * A hook for the entire vertex processing
         *   stage of the pipeline.
         */
        VERTEX,
        /**
         * A hook for the vertex transformation.
         */
        VERTEX_TRANSFORM,
        /**
         * A hook for declaring global data
         *   that can be shared with all other snippets that are on a vertex
         *   hook.
         */
        VERTEX_GLOBALS,
        /**
         * A hook for manipulating the point
         *   size of a vertex. This is only used if
         *   cogl_pipeline_set_per_vertex_point_size() is enabled on the
         *   pipeline.
         */
        POINT_SIZE,
        /**
         * A hook for the entire fragment
         *   processing stage of the pipeline.
         */
        FRAGMENT,
        /**
         * A hook for declaring global
         *   data wthat can be shared with all other snippets that are on a
         *   fragment hook.
         */
        FRAGMENT_GLOBALS,
        /**
         * A hook for applying the
         *   layer matrix to a texture coordinate for a layer.
         */
        TEXTURE_COORD_TRANSFORM,
        /**
         * A hook for the fragment
         *   processing of a particular layer.
         */
        LAYER_FRAGMENT,
        /**
         * A hook for the texture lookup
         *   stage of a given layer in a pipeline.
         */
        TEXTURE_LOOKUP,
    }
    /**
     * Represents how draw should affect the two buffers
     * of a stereo framebuffer. See cogl_framebuffer_set_stereo_mode().
     */
    enum StereoMode {
        /**
         * draw to both stereo buffers
         */
        BOTH,
        /**
         * draw only to the left stereo buffer
         */
        LEFT,
        /**
         * draw only to the left stereo buffer
         */
        RIGHT,
    }
    /**
     * Error enumeration for Cogl
     *
     * The `COGL_SYSTEM_ERROR_UNSUPPORTED` error can be thrown for a
     * variety of reasons. For example:
     *
     * <itemizedlist>
     *  <listitem><para>You've tried to use a feature that is not
     *   advertised by cogl_has_feature().</para></listitem>
     *  <listitem><para>The GPU can not handle the configuration you have
     *   requested. An example might be if you try to use too many texture
     *   layers in a single #CoglPipeline</para></listitem>
     *  <listitem><para>The driver does not support some
     *   configuration.</para></listiem>
     * </itemizedlist>
     *
     * Currently this is only used by Cogl API marked as experimental so
     * this enum should also be considered experimental.
     */
    enum SystemError {
        /**
         * You tried to use a feature or
         *    configuration not currently available.
         */
        UNSUPPORTED,
        /**
         * You tried to allocate a resource
         *    such as a texture and there wasn't enough memory.
         */
        NO_MEMORY,
    }
    /**
     * See cogl_texture_set_components().
     */
    enum TextureComponents {
        /**
         * Only the alpha component
         */
        A,
        /**
         * Red and green components. Note that
         *   this can only be used if the %COGL_FEATURE_ID_TEXTURE_RG feature
         *   is advertised.
         */
        RG,
        /**
         * Red, green and blue components
         */
        RGB,
        /**
         * Red, green, blue and alpha components
         */
        RGBA,
        /**
         * Only a depth component
         */
        DEPTH,
    }
    /**
     * Error codes that can be thrown when allocating textures.
     */
    enum TextureError {
        /**
         * Unsupported size
         */
        SIZE,
        /**
         * Unsupported format
         */
        FORMAT,
        BAD_PARAMETER,
        /**
         * A primitive texture type that is
         *   unsupported by the driver was used
         */
        TYPE,
    }
    /**
     * Different ways of interpreting vertices when drawing.
     */
    enum VerticesMode {
        /**
         * FIXME, equivalent to
         * <constant>GL_POINTS</constant>
         */
        POINTS,
        /**
         * FIXME, equivalent to <constant>GL_LINES</constant>
         */
        LINES,
        /**
         * FIXME, equivalent to
         * <constant>GL_LINE_LOOP</constant>
         */
        LINE_LOOP,
        /**
         * FIXME, equivalent to
         * <constant>GL_LINE_STRIP</constant>
         */
        LINE_STRIP,
        /**
         * FIXME, equivalent to
         * <constant>GL_TRIANGLES</constant>
         */
        TRIANGLES,
        /**
         * FIXME, equivalent to
         * <constant>GL_TRIANGLE_STRIP</constant>
         */
        TRIANGLE_STRIP,
        /**
         * FIXME, equivalent to <constant>GL_TRIANGLE_FAN</constant>
         */
        TRIANGLE_FAN,
    }
    /**
     * Enum used to represent the two directions of rotation. This can be
     * used to set the front face for culling by calling
     * cogl_pipeline_set_front_face_winding().
     */
    enum Winding {
        /**
         * Vertices are in a clockwise order
         */
        CLOCKWISE,
        /**
         * Vertices are in a counter-clockwise order
         */
        COUNTER_CLOCKWISE,
    }
    enum WinsysFeature {
        VBLANK_COUNTER,
        VBLANK_WAIT,
        TEXTURE_FROM_PIXMAP,
        SWAP_BUFFERS_EVENT,
        SWAP_REGION,
        SWAP_REGION_THROTTLE,
        SWAP_REGION_SYNCHRONIZED,
        BUFFER_AGE,
        SYNC_AND_COMPLETE_EVENT,
        N_FEATURES,
    }
    /**
     * Types of auxiliary buffers
     * @bitfield
     */
    enum BufferBit {
        /**
         * Selects the primary color buffer
         */
        COLOR,
        /**
         * Selects the depth buffer
         */
        DEPTH,
        /**
         * Selects the stencil buffer
         */
        STENCIL,
    }
    /**
     * Target flags for FBOs.
     * @bitfield
     */
    enum BufferTarget {
        /**
         * FIXME
         */
        WINDOW_BUFFER,
        /**
         * FIXME
         */
        OFFSCREEN_BUFFER,
    }
    enum EglImageFlags {
        NONE,
        NO_GET_DATA,
    }
    /**
     * Pixel formats used by Cogl. For the formats with a byte per
     * component, the order of the components specify the order in
     * increasing memory addresses. So for example
     * %COGL_PIXEL_FORMAT_RGB_888 would have the red component in the
     * lowest address, green in the next address and blue after that
     * regardless of the endianness of the system.
     *
     * For the formats with non byte aligned components the component
     * order specifies the order within a 16-bit or 32-bit number from
     * most significant bit to least significant. So for
     * %COGL_PIXEL_FORMAT_RGB_565, the red component would be in bits
     * 11-15, the green component would be in 6-11 and the blue component
     * would be in 1-5. Therefore the order in memory depends on the
     * endianness of the system.
     *
     * When uploading a texture %COGL_PIXEL_FORMAT_ANY can be used as the
     * internal format. Cogl will try to pick the best format to use
     * internally and convert the texture data if necessary.
     * @bitfield
     */
    enum PixelFormat {
        /**
         * Any format
         */
        ANY,
        /**
         * 8 bits alpha mask
         */
        A_8,
        /**
         * RGB, 16 bits
         */
        RGB_565,
        /**
         * RGBA, 16 bits
         */
        RGBA_4444,
        /**
         * RGBA, 16 bits
         */
        RGBA_5551,
        /**
         * Not currently supported
         */
        YUV,
        /**
         * Single luminance component
         */
        G_8,
        /**
         * Single luminance component, 16 bits
         */
        G_16,
        /**
         * RG, 16 bits. Note that red-green textures
         *   are only available if %COGL_FEATURE_ID_TEXTURE_RG is advertised.
         *   See cogl_texture_set_components() for details.
         */
        RG_88,
        /**
         * RG, 32 bits
         */
        RG_1616,
        /**
         * RGB, 24 bits
         */
        RGB_888,
        /**
         * BGR, 24 bits
         */
        BGR_888,
        /**
         * RGBX, 32 bits
         */
        RGBX_8888,
        /**
         * RGBA, 32 bits
         */
        RGBA_8888,
        /**
         * BGRX, 32 bits
         */
        BGRX_8888,
        /**
         * BGRA, 32 bits
         */
        BGRA_8888,
        /**
         * XRGB, 32 bits
         */
        XRGB_8888,
        /**
         * ARGB, 32 bits
         */
        ARGB_8888,
        /**
         * XBGR, 32 bits
         */
        XBGR_8888,
        /**
         * ABGR, 32 bits
         */
        ABGR_8888,
        /**
         * RGBA, 32 bits, 10 bpc
         */
        RGBA_1010102,
        /**
         * BGRA, 32 bits, 10 bpc
         */
        BGRA_1010102,
        /**
         * XRGB, 32 bits, 10 bpc
         */
        XRGB_2101010,
        /**
         * ARGB, 32 bits, 10 bpc
         */
        ARGB_2101010,
        /**
         * XBGR, 32 bits, 10 bpc
         */
        XBGR_2101010,
        /**
         * ABGR, 32 bits, 10 bpc
         */
        ABGR_2101010,
        /**
         * RGBX half floating point, 64 bit
         */
        RGBX_FP_16161616,
        /**
         * RGBA half floating point, 64 bit
         */
        RGBA_FP_16161616,
        /**
         * BGRX half floating point, 64 bit
         */
        BGRX_FP_16161616,
        /**
         * BGRA half floating point, 64 bit
         */
        BGRA_FP_16161616,
        XRGB_FP_16161616,
        /**
         * ARGB half floating point, 64 bit
         */
        ARGB_FP_16161616,
        XBGR_FP_16161616,
        /**
         * ABGR half floating point, 64 bit
         */
        ABGR_FP_16161616,
        /**
         * Premultiplied RGBA, 32 bits
         */
        RGBA_8888_PRE,
        /**
         * Premultiplied BGRA, 32 bits
         */
        BGRA_8888_PRE,
        /**
         * Premultiplied ARGB, 32 bits
         */
        ARGB_8888_PRE,
        /**
         * Premultiplied ABGR, 32 bits
         */
        ABGR_8888_PRE,
        /**
         * Premultiplied RGBA, 16 bits
         */
        RGBA_4444_PRE,
        /**
         * Premultiplied RGBA, 16 bits
         */
        RGBA_5551_PRE,
        /**
         * Premultiplied RGBA, 32 bits, 10 bpc
         */
        RGBA_1010102_PRE,
        /**
         * Premultiplied BGRA, 32 bits, 10 bpc
         */
        BGRA_1010102_PRE,
        /**
         * Premultiplied ARGB, 32 bits, 10 bpc
         */
        ARGB_2101010_PRE,
        /**
         * Premultiplied ABGR, 32 bits, 10 bpc
         */
        ABGR_2101010_PRE,
        /**
         * Premultiplied RGBA half floating point, 64 bit
         */
        RGBA_FP_16161616_PRE,
        /**
         * Premultiplied BGRA half floating point, 64 bit
         */
        BGRA_FP_16161616_PRE,
        /**
         * Premultiplied ARGB half floating point, 64 bit
         */
        ARGB_FP_16161616_PRE,
        /**
         * Premultiplied ABGR half floating point, 64 bit
         */
        ABGR_FP_16161616_PRE,
        DEPTH_16,
        DEPTH_32,
        DEPTH_24_STENCIL_8,
    }
    /**
     * Flags for cogl_framebuffer_read_pixels_into_bitmap()
     * @bitfield
     */
    enum ReadPixelsFlags {
        /**
         * Read from the color buffer
         */
        READ_PIXELS_COLOR_BUFFER,
    }
    const AFIRST_BIT: number;
    const A_BIT: number;
    const BGR_BIT: number;
    const DEPTH_BIT: number;
    /**
     * The maximum number of planes of a pixel format (see also
     * cogl_pixel_format_get_planes()).
     */
    const PIXEL_FORMAT_MAX_PLANES: number;
    const PREMULT_BIT: number;
    const STENCIL_BIT: number;
    const TEXTURE_MAX_WASTE: number;
    function blend_string_error_quark(): number;
    /**
     * `return` FALSE for an immediately detected error, TRUE otherwise.
     *
     * This blits a region of the color buffer of the source buffer
     * to the destination buffer. This function should only be
     * called if the COGL_FEATURE_ID_BLIT_FRAMEBUFFER feature is
     * advertised.
     *
     * The source and destination rectangles are defined in offscreen
     * framebuffer orientation. When copying between an offscreen and
     * onscreen framebuffers, the image is y-flipped accordingly.
     *
     * The two buffers must have the same value types (e.g. floating-point,
     * unsigned int, signed int, or fixed-point), but color formats do not
     * need to match. This limitation comes from OpenGL ES 3.0 definition
     * of glBlitFramebuffer.
     *
     * Note that this function differs a lot from the glBlitFramebuffer
     * function provided by the GL_EXT_framebuffer_blit extension. Notably
     * it doesn't support having different sizes for the source and
     * destination rectangle. This doesn't seem
     * like a particularly useful feature. If the application wanted to
     * scale the results it may make more sense to draw a primitive
     * instead.
     *
     * The GL function is documented to be affected by the scissor. This
     * function therefore ensure that an empty clip stack is flushed
     * before performing the blit which means the scissor is effectively
     * ignored.
     *
     * The function also doesn't support specifying the buffers to copy
     * and instead only the color buffer is copied. When copying the depth
     * or stencil buffers the extension on GLES2.0 only supports copying
     * the full buffer which would be awkward to document with this
     * API. If we wanted to support that feature it may be better to have
     * a separate function to copy the entire buffer for a given mask.
     *
     * The `c` error argument is optional, it can be NULL. If it is not NULL
     * and this function returns FALSE, an error object with a code from
     * COGL_SYSTEM_ERROR will be created.
     * @param framebuffer The source #CoglFramebuffer
     * @param dst The destination #CoglFramebuffer
     * @param src_x Source x position
     * @param src_y Source y position
     * @param dst_x Destination x position
     * @param dst_y Destination y position
     * @param width Width of region to copy
     * @param height Height of region to copy
     */
    function blit_framebuffer(
        framebuffer: Framebuffer,
        dst: Framebuffer,
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        width: number,
        height: number
    ): boolean;
    function clutter_winsys_has_feature_CLUTTER(
        feature: WinsysFeature
    ): boolean;
    /**
     * Compares two #CoglColor<!-- -->s and checks if they are the same.
     *
     * This function can be passed to g_hash_table_new() as the `key_equal_func`
     * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
     * @param v1 a #CoglColor
     * @param v2 a #CoglColor
     * @returns %TRUE if the two colors are the same.
     */
    function color_equal(v1: any | null, v2: any | null): boolean;
    /**
     * Converts a color expressed in HLS (hue, luminance and saturation)
     * values into a #CoglColor.
     * @param hue hue value, in the 0 .. 360 range
     * @param saturation saturation value, in the 0 .. 1 range
     * @param luminance luminance value, in the 0 .. 1 range
     */
    function color_init_from_hsl(
        hue: number,
        saturation: number,
        luminance: number
    ): /* color */ Color;
    /**
     * Create a new cogl program object that can be used to replace parts of the GL
     * rendering pipeline with custom code.
     * @returns a new cogl program.
     */
    function create_program(): Handle;
    /**
     * Create a new shader handle, use cogl_shader_source() to set the
     * source code to be used on it.
     * @param shader_type COGL_SHADER_TYPE_VERTEX or COGL_SHADER_TYPE_FRAGMENT.
     * @returns a new shader handle.
     */
    function create_shader(shader_type: ShaderType): Handle;
    /**
     * Invokes `func` once for each type of object that Cogl uses and
     * passes a count of the number of objects for that type. This is
     * intended to be used solely for debugging purposes to track down
     * issues with objects leaking.
     * @param func A callback function for each type
     */
    function debug_object_foreach_type(
        func: DebugObjectForeachTypeCallback
    ): void;
    /**
     * Prints a list of all the object types that Cogl uses along with the
     * number of objects of that type that are currently in use. This is
     * intended to be used solely for debugging purposes to track down
     * issues with objects leaking.
     */
    function debug_object_print_instances(): void;
    /**
     * This function should only need to be called in exceptional circumstances.
     *
     * As an optimization Cogl drawing functions may batch up primitives
     * internally, so if you are trying to use raw GL outside of Cogl you stand a
     * better chance of being successful if you ask Cogl to flush any batched
     * geometry before making your state changes.
     *
     * It only ensure that the underlying driver is issued all the commands
     * necessary to draw the batched primitives. It provides no guarantees about
     * when the driver will complete the rendering.
     *
     * This provides no guarantees about the GL state upon returning and to avoid
     * confusing Cogl you should aim to restore any changes you make before
     * resuming use of Cogl.
     *
     * If you are making state changes with the intention of affecting Cogl drawing
     * primitives you are 100% on your own since you stand a good chance of
     * conflicting with Cogl internals. For example clutter-gst which currently
     * uses direct GL calls to bind ARBfp programs will very likely break when Cogl
     * starts to use ARBfb programs itself for the material API.
     */
    function flush(): void;
    /**
     * Iterates through all the context level features currently supported
     * for a given `context` and for each feature `callback` is called.
     * @param context A #CoglContext pointer
     * @param callback A #CoglFeatureCallback called for each            supported feature
     */
    function foreach_feature(context: Context, callback: FeatureCallback): void;
    /**
     * Returns the graphics reset status as reported by
     * GetGraphicsResetStatusARB defined in the ARB_robustness extension.
     *
     * Note that Cogl doesn't normally enable the ARB_robustness
     * extension in which case this will only ever return
     * #COGL_GRAPHICS_RESET_STATUS_NO_ERROR.
     *
     * Applications must explicitly use a backend specific method to
     * request that errors get reported such as X11's
     * cogl_xlib_renderer_request_reset_on_video_memory_purge().
     * @param context a #CoglContext pointer
     * @returns a #CoglGraphicsResetStatus
     */
    function get_graphics_reset_status(context: Context): GraphicsResetStatus;
    function handle_get_type(): GObject.GType;
    /**
     * Checks if a given `feature` is currently available
     *
     * Cogl does not aim to be a lowest common denominator API, it aims to
     * expose all the interesting features of GPUs to application which
     * means applications have some responsibility to explicitly check
     * that certain features are available before depending on them.
     * @param context A #CoglContext pointer
     * @param feature A #CoglFeatureID
     * @returns %TRUE if the @feature is currently supported or %FALSE if not.
     */
    function has_feature(context: Context, feature: FeatureID): boolean;
    /**
     * Checks whether `object` is a #CoglBitmap
     * @param object a #CoglObject pointer
     * @returns %TRUE if the passed @object represents a bitmap,   and %FALSE otherwise
     */
    function is_bitmap(object: any | null): boolean;
    /**
     * Gets whether the given object references an existing context object.
     * @param object An object or %NULL
     * @returns %TRUE if the @object references a #CoglContext,   %FALSE otherwise
     */
    function is_context(object: any | null): boolean;
    /**
     * Gets whether the given object references a #CoglFrameInfo.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the object references a #CoglFrameInfo   and %FALSE otherwise.
     */
    function is_frame_info(object: any | null): boolean;
    /**
     * Gets whether the given object references a #CoglFramebuffer.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the object references a #CoglFramebuffer   and %FALSE otherwise.
     */
    function is_framebuffer(object: any | null): boolean;
    /**
     * Gets whether the given `object` references an existing pipeline object.
     * @param object A #CoglObject
     * @returns %TRUE if the @object references a #CoglPipeline,   %FALSE otherwise
     */
    function is_pipeline(object: any | null): boolean;
    /**
     * Gets whether the given handle references an existing program object.
     * @param handle A CoglHandle
     * @returns %TRUE if the handle references a program,   %FALSE otherwise
     */
    function is_program(handle: Handle): boolean;
    /**
     * Gets whether the given handle references an existing shader object.
     * @param handle A CoglHandle
     * @returns %TRUE if the handle references a shader,   %FALSE otherwise
     */
    function is_shader(handle: Handle): boolean;
    /**
     * Gets whether the given `object` references an existing snippet object.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the @object references a #CoglSnippet,   %FALSE otherwise
     */
    function is_snippet(object: any | null): boolean;
    /**
     * Gets whether the given object references a texture object.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the @object references a texture, and   %FALSE otherwise
     */
    function is_texture(object: any | null): boolean;
    /**
     * Gets whether the given object references an existing #CoglTexture2D
     * object.
     * @param object A #CoglObject
     * @returns %TRUE if the object references a #CoglTexture2D,   %FALSE otherwise
     */
    function is_texture_2d(object: any | null): boolean;
    /**
     * Gets whether the given object references a #CoglTexture2DSliced.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the object references a #CoglTexture2DSliced   and %FALSE otherwise.
     */
    function is_texture_2d_sliced(object: any | null): boolean;
    function is_tracing(): boolean;
    /**
     * Queries the number of bytes per pixel for a given format in the given plane.
     * @param format The pixel format
     * @param plane The index of the plane (should not be more than the number of planes         in the given format).
     * @returns The number of bytes per pixel in the given format's given plane.
     */
    function pixel_format_get_bytes_per_pixel(
        format: PixelFormat,
        plane: number
    ): number;
    /**
     * Returns the number of planes the given CoglPixelFormat specifies.
     * @param format The format for which to get the number of planes
     * @returns The no. of planes of @format (at most %COGL_PIXEL_FORMAT_MAX_PLANES)
     */
    function pixel_format_get_n_planes(format: PixelFormat): number;
    /**
     * Returns a string representation of `format,` useful for debugging purposes.
     * @param format a #CoglPixelFormat
     * @returns A string representation of @format.
     */
    function pixel_format_to_string(format: PixelFormat): string | null;
    /**
     * Attaches a shader to a program object. A program can have multiple
     * vertex or fragment shaders but only one of them may provide a
     * main() function. It is allowed to use a program with only a vertex
     * shader or only a fragment shader.
     * @param program_handle a #CoglHandle for a shdaer program.
     * @param shader_handle a #CoglHandle for a vertex of fragment shader.
     */
    function program_attach_shader(
        program_handle: Handle,
        shader_handle: Handle
    ): void;
    /**
     * Retrieve the location (offset) of a uniform variable in a shader program,
     * a uniform is a variable that is constant for all vertices/fragments for a
     * shader object and is possible to modify as an external parameter.
     * @param handle a #CoglHandle for a shader program.
     * @param uniform_name the name of a uniform.
     * @returns the offset of a uniform in a specified program.
     */
    function program_get_uniform_location(
        handle: Handle,
        uniform_name: string | null
    ): number;
    /**
     * Links a program making it ready for use. Note that calling this
     * function is optional. If it is not called the program will
     * automatically be linked the first time it is used.
     * @param handle a #CoglHandle for a shader program.
     */
    function program_link(handle: Handle): void;
    /**
     * Changes the value of a floating point uniform for the given linked
     * `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param value the new value of the uniform.
     */
    function program_set_uniform_1f(
        program: Handle,
        uniform_location: number,
        value: number
    ): void;
    /**
     * Changes the value of an integer uniform for the given linked
     * `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param value the new value of the uniform.
     */
    function program_set_uniform_1i(
        program: Handle,
        uniform_location: number,
        value: number
    ): void;
    /**
     * Changes the value of a float vector uniform, or uniform array for
     * the given linked `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param n_components The number of components for the uniform. For example with glsl you'd use 3 for a vec3 or 4 for a vec4.
     * @param value the new value of the uniform[s].
     */
    function program_set_uniform_float(
        program: Handle,
        uniform_location: number,
        n_components: number,
        value: number[]
    ): void;
    /**
     * Changes the value of a int vector uniform, or uniform array for
     * the given linked `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param n_components The number of components for the uniform. For example with glsl you'd use 3 for a vec3 or 4 for a vec4.
     * @param value the new value of the uniform[s].
     */
    function program_set_uniform_int(
        program: Handle,
        uniform_location: number,
        n_components: number,
        value: number[]
    ): void;
    /**
     * Changes the value of a matrix uniform, or uniform array in the
     * given linked `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param dimensions The dimensions of the matrix. So for for example pass    2 for a 2x2 matrix or 3 for 3x3.
     * @param transpose Whether to transpose the matrix when setting the uniform.
     * @param value the new value of the uniform.
     */
    function program_set_uniform_matrix(
        program: Handle,
        uniform_location: number,
        dimensions: number,
        transpose: boolean,
        value: number[]
    ): void;
    function scanout_error_quark(): GLib.Quark;
    function set_tracing_disabled_on_thread(
        main_context: GLib.MainContext
    ): void;
    function set_tracing_enabled_on_thread(
        main_context: GLib.MainContext,
        group: string | null
    ): void;
    /**
     * Retrieves the type of a shader #CoglHandle
     * @param handle #CoglHandle for a shader.
     * @returns %COGL_SHADER_TYPE_VERTEX if the shader is a vertex processor          or %COGL_SHADER_TYPE_FRAGMENT if the shader is a fragment processor
     */
    function shader_get_type(handle: Handle): ShaderType;
    /**
     * Replaces the current source associated with a shader with a new
     * one.
     *
     * Please see <link
     * linkend="cogl-Shaders-and-Programmable-Pipeline.description">above</link>
     * for a description of the recommended format for the shader code.
     * @param shader #CoglHandle for a shader.
     * @param source Shader source.
     */
    function shader_source(shader: Handle, source: string | null): void;
    function start_tracing_with_fd(fd: number): boolean;
    function start_tracing_with_path(filename: string | null): boolean;
    function stop_tracing(): void;
    function texture_error_quark(): number;
    function trace_describe(head: TraceHead, description: string | null): void;
    function trace_end(head: TraceHead): void;
    /**
     * A callback function to use for cogl_debug_object_foreach_type().
     * @callback
     * @param info A pointer to a struct containing information about the type.
     */
    interface DebugObjectForeachTypeCallback {
        (info: DebugObjectTypeInfo): void;
    }
    /**
     * A callback used with cogl_foreach_feature() for enumerating all
     * context level features supported by Cogl.
     * @callback
     * @param feature A single feature currently supported by Cogl
     */
    interface FeatureCallback {
        (feature: FeatureID): void;
    }
    /**
     * Is a callback that can be registered via
     * cogl_onscreen_add_frame_callback() to be called when a frame
     * progresses in some notable way.
     *
     * Please see the documentation for #CoglFrameEvent and
     * cogl_onscreen_add_frame_callback() for more details about what
     * events can be notified.
     * @callback
     * @param onscreen The onscreen that the frame is associated with
     * @param event A #CoglFrameEvent notifying how the frame has progressed
     * @param info The meta information, such as timing information, about        the frame that has progressed.
     */
    interface FrameCallback {
        (onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void;
    }
    /**
     * Is a callback that can be registered via
     * cogl_onscreen_add_dirty_callback() to be called when the windowing
     * system determines that a region of the onscreen window has been
     * lost and the application should redraw it.
     * @callback
     * @param onscreen The onscreen that the frame is associated with
     * @param info A #CoglOnscreenDirtyInfo struct containing the details of the   dirty area
     */
    interface OnscreenDirtyCallback {
        (onscreen: Onscreen, info: OnscreenDirtyInfo): void;
    }
    /**
     * The callback prototype used with cogl_pipeline_foreach_layer() for
     * iterating all the layers of a `pipeline`.
     * @callback
     * @param pipeline The #CoglPipeline whose layers are being iterated
     * @param layer_index The current layer index
     */
    interface PipelineLayerCallback {
        (pipeline: Pipeline, layer_index: number): boolean;
    }
    interface Texture2DEGLImageExternalAlloc {
        (tex_2d: Texture2D): boolean;
    }
    module Texture {
        // Constructor properties interface

        interface ConstructorProperties
            extends Object.ConstructorProperties,
                GObject.Object.ConstructorProperties {}
    }

    interface Texture extends Object {
        // Owm methods of Cogl-13.Cogl.Texture

        /**
         * Explicitly allocates the storage for the given `texture` which
         * allows you to be sure that there is enough memory for the
         * texture and if not then the error can be handled gracefully.
         *
         * <note>Normally applications don't need to use this api directly
         * since the texture will be implicitly allocated when data is set on
         * the texture, or if the texture is attached to a #CoglOffscreen
         * framebuffer and rendered too.</note>
         * @returns %TRUE if the texture was successfully allocated,               otherwise %FALSE and @error will be updated if it               wasn't %NULL.
         */
        allocate(): boolean;
        /**
         * Queries what components the given `texture` stores internally as set
         * via cogl_texture_set_components().
         *
         * For textures created by the ‘_with_size’ constructors the default
         * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
         * a %CoglBitmap or a data pointer default to the same components as
         * the pixel format of the data.
         */
        get_components(): TextureComponents;
        /**
         * Copies the pixel data from a cogl texture to system memory.
         *
         * <note>Don't pass the value of cogl_texture_get_rowstride() as the
         * `rowstride` argument, the rowstride should be the rowstride you
         * want for the destination `data` buffer not the rowstride of the
         * source texture</note>
         * @param format the #CoglPixelFormat to store the texture as.
         * @param rowstride the rowstride of `data` in bytes or pass 0 to calculate             from the bytes-per-pixel of `format` multiplied by the             `texture` width.
         * @param data memory location to write the `texture'`s contents, or %NULL to only query the data size through the return value.
         * @returns the size of the texture data in bytes
         */
        get_data(
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array | null
        ): number;

        // Overloads of get_data

        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string | null): any | null;
        /**
         * Queries the GL handles for a GPU side texture through its #CoglTexture.
         *
         * If the texture is spliced the data for the first sub texture will be
         * queried.
         * @returns %TRUE if the handle was successfully retrieved, %FALSE   if the handle was invalid
         */
        get_gl_texture(): [
            /* returnType */ boolean,
            /* out_gl_handle */ number,
            /* out_gl_target */ number
        ];
        /**
         * Queries the height of a cogl texture.
         * @returns the height of the GPU side texture in pixels
         */
        get_height(): number;
        /**
         * Queries the maximum wasted (unused) pixels in one dimension of a GPU side
         * texture.
         * @returns the maximum waste
         */
        get_max_waste(): number;
        /**
         * Queries the pre-multiplied alpha status for internally stored red,
         * green and blue components for the given `texture` as set by
         * cogl_texture_set_premultiplied().
         *
         * By default the pre-multiplied state is `TRUE`.
         * @returns %TRUE if red, green and blue components are               internally stored pre-multiplied by the alpha               value or %FALSE if not.
         */
        get_premultiplied(): boolean;
        /**
         * Queries the width of a cogl texture.
         * @returns the width of the GPU side texture in pixels
         */
        get_width(): number;
        /**
         * Queries if a texture is sliced (stored as multiple GPU side tecture
         * objects).
         * @returns %TRUE if the texture is sliced, %FALSE if the texture   is stored as a single GPU texture
         */
        is_sliced(): boolean;
        /**
         * Affects the internal storage format for this texture by specifying
         * what components will be required for sampling later.
         *
         * This api affects how data is uploaded to the GPU since unused
         * components can potentially be discarded from source data.
         *
         * For textures created by the ‘_with_size’ constructors the default
         * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
         * a %CoglBitmap or a data pointer default to the same components as
         * the pixel format of the data.
         *
         * Note that the %COGL_TEXTURE_COMPONENTS_RG format is not available
         * on all drivers. The availability can be determined by checking for
         * the %COGL_FEATURE_ID_TEXTURE_RG feature. If this format is used on
         * a driver where it is not available then %COGL_TEXTURE_ERROR_FORMAT
         * will be raised when the texture is allocated. Even if the feature
         * is not available then %COGL_PIXEL_FORMAT_RG_88 can still be used as
         * an image format as long as %COGL_TEXTURE_COMPONENTS_RG isn't used
         * as the texture's components.
         * @param components
         */
        set_components(components: TextureComponents): void;
        /**
         * `texture` a #CoglTexture.
         * Sets all the pixels for a given mipmap `level` by copying the pixel
         * data pointed to by the `data` argument into the given `texture`.
         *
         * `data` should point to the first pixel to copy corresponding
         * to the top left of the mipmap `level` being set.
         *
         * If `rowstride` equals 0 then it will be automatically calculated
         * from the width of the mipmap level and the bytes-per-pixel for the
         * given `format`.
         *
         * A mipmap `level` of 0 corresponds to the largest, base image of a
         * texture and `level` 1 is half the width and height of level 0. If
         * dividing any dimension of the previous level by two results in a
         * fraction then round the number down (floor()), but clamp to 1
         * something like this:
         *
         *
         * ```
         *  next_width = MAX (1, floor (prev_width));
         * ```
         *
         *
         * You can determine the number of mipmap levels for a given texture
         * like this:
         *
         *
         * ```
         *  n_levels = 1 + floor (log2 (max_dimension));
         * ```
         *
         *
         * Where %max_dimension is the larger of cogl_texture_get_width() and
         * cogl_texture_get_height().
         *
         * It is an error to pass a `level` number >= the number of levels that
         * `texture` can have according to the above calculation.
         *
         * <note>Since the storage for a #CoglTexture is allocated lazily then
         * if the given `texture` has not previously been allocated then this
         * api can return %FALSE and throw an exceptional `error` if there is
         * not enough memory to allocate storage for `texture`.</note>
         * @param format the #CoglPixelFormat used in the source `data` buffer.
         * @param rowstride rowstride of the source `data` buffer (computed from             the texture width and `format` if it equals 0)
         * @param data the source data, pointing to the first top-left pixel to set
         * @param level The mipmap level to update (Normally 0 for the largest,         base texture)
         * @returns %TRUE if the data upload was successful, and               %FALSE otherwise
         */
        set_data(
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array,
            level: number
        ): boolean;

        // Overloads of set_data

        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string | null, data: any | null): void;
        /**
         * Affects the internal storage format for this texture by specifying
         * whether red, green and blue color components should be stored as
         * pre-multiplied alpha values.
         *
         * This api affects how data is uploaded to the GPU since Cogl will
         * convert source data to have premultiplied or unpremultiplied
         * components according to this state.
         *
         * For example if you create a texture via
         * cogl_texture_2d_new_with_size() and then upload data via
         * cogl_texture_set_data() passing a source format of
         * %COGL_PIXEL_FORMAT_RGBA_8888 then Cogl will internally multiply the
         * red, green and blue components of the source data by the alpha
         * component, for each pixel so that the internally stored data has
         * pre-multiplied alpha components. If you instead upload data that
         * already has pre-multiplied components by passing
         * %COGL_PIXEL_FORMAT_RGBA_8888_PRE as the source format to
         * cogl_texture_set_data() then the data can be uploaded without being
         * converted.
         *
         * By default the `premultipled` state is `TRUE`.
         * @param premultiplied Whether any internally stored red, green or blue                 components are pre-multiplied by an alpha                 component.
         */
        set_premultiplied(premultiplied: boolean): void;
        /**
         * Sets the pixels in a rectangular subregion of `texture` from an in-memory
         * buffer containing pixel data.
         *
         * <note>The region set can't be larger than the source `data<`/note>
         * @param src_x upper left coordinate to use from source data.
         * @param src_y upper left coordinate to use from source data.
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less   than or equal to `width)`
         * @param dst_height height of destination region to write. (Must be less   than or equal to `height)`
         * @param width width of source data buffer.
         * @param height height of source data buffer.
         * @param format the #CoglPixelFormat used in the source buffer.
         * @param rowstride rowstride of source buffer (computed from width if none specified)
         * @param data the actual pixel data.
         * @returns %TRUE if the subregion upload was successful, and   %FALSE otherwise
         */
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
            data: Uint8Array
        ): boolean;
        /**
         * Copies a specified source region from `bitmap` to the position
         * (`src_x,` `src_y)` of the given destination texture `handle`.
         *
         * <note>The region updated can't be larger than the source
         * bitmap</note>
         * @param src_x upper left coordinate to use from the source bitmap.
         * @param src_y upper left coordinate to use from the source bitmap
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less   than or equal to the bitmap width)
         * @param dst_height height of destination region to write. (Must be less   than or equal to the bitmap height)
         * @param bitmap The source bitmap to read from
         * @returns %TRUE if the subregion upload was successful, and   %FALSE otherwise
         */
        set_region_from_bitmap(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            bitmap: Bitmap
        ): boolean;

        // Class property signals of Cogl-13.Cogl.Texture

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Texture extends GObject.Object {
        // Own properties of Cogl-13.Cogl.Texture

        static name: string;
        static $gtype: GObject.GType<Texture>;

        // Constructors of Cogl-13.Cogl.Texture

        constructor(config?: Texture.ConstructorProperties);
        _init(config?: Texture.ConstructorProperties): void;
        static error_quark(): number;
    }

    module Bitmap {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {}
    }

    interface Bitmap {
        // Owm methods of Cogl-13.Cogl.Bitmap

        get_format(): PixelFormat;
        get_height(): number;
        get_rowstride(): number;
        get_width(): number;

        // Class property signals of Cogl-13.Cogl.Bitmap

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Bitmap extends Object {
        // Own properties of Cogl-13.Cogl.Bitmap

        static name: string;
        static $gtype: GObject.GType<Bitmap>;

        // Constructors of Cogl-13.Cogl.Bitmap

        constructor(config?: Bitmap.ConstructorProperties);
        /**
         * Loads an image file from disk. This function can be safely called from
         * within a thread.
         * @constructor
         * @param filename the file to load.
         * @returns a #CoglBitmap to the new loaded               image data, or %NULL if loading the image failed.
         */
        static new_from_file(filename: string | null): Bitmap;
        _init(config?: Bitmap.ConstructorProperties): void;
        static error_quark(): number;
        /**
         * Parses an image file enough to extract the width and height
         * of the bitmap.
         * @param filename the file to check
         * @returns %TRUE if the image was successfully parsed
         */
        static get_size_from_file(
            filename: string | null
        ): [/* returnType */ boolean, /* width */ number, /* height */ number];
    }

    module Context {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {}
    }

    interface Context {
        // Owm methods of Cogl-13.Cogl.Context

        free_timestamp_query(query: TimestampQuery): void;
        /**
         * This function should only be called if the COGL_FEATURE_ID_TIMESTAMP_QUERY
         * feature is advertised.
         * @returns Current GPU time in nanoseconds
         */
        get_gpu_time_ns(): number;
        get_named_pipeline(key: PipelineKey): Pipeline;
        is_hardware_accelerated(): boolean;
        /**
         * Associate a #CoglPipeline with a `context` and `key`. This will not take a new
         * reference to the `pipeline,` but will unref all associated pipelines when
         * the `context` gets destroyed. Similarly, if a pipeline gets overwritten,
         * it will get unreffed as well.
         * @param key a #CoglPipelineKey pointer
         * @param pipeline a #CoglPipeline to associate with the `context` and            `key`
         */
        set_named_pipeline(key: PipelineKey, pipeline: Pipeline | null): void;
        timestamp_query_get_time_ns(query: TimestampQuery): number;

        // Class property signals of Cogl-13.Cogl.Context

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Context extends Object {
        // Own properties of Cogl-13.Cogl.Context

        static name: string;
        static $gtype: GObject.GType<Context>;

        // Constructors of Cogl-13.Cogl.Context

        constructor(config?: Context.ConstructorProperties);
        _init(config?: Context.ConstructorProperties): void;
    }

    module FrameInfo {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {}
    }

    interface FrameInfo {
        // Owm methods of Cogl-13.Cogl.FrameInfo

        /**
         * Gets the frame counter for the #CoglOnscreen that corresponds
         * to this frame.
         * @returns The frame counter value
         */
        get_frame_counter(): number;
        get_is_symbolic(): boolean;
        /**
         * Gets the presentation time for the frame. This is the time at which
         * the frame became visible to the user.
         *
         * The presentation time measured in microseconds, is based on
         * CLOCK_MONOTONIC.
         *
         * <note>Some buggy Mesa drivers up to 9.0.1 may
         * incorrectly report non-monotonic timestamps.</note>
         * @returns the presentation time for the frame
         */
        get_presentation_time_us(): number;
        /**
         * Gets the refresh rate in Hertz for the output that the frame was on
         * at the time the frame was presented.
         *
         * <note>Some platforms can't associate a #CoglOutput with a
         * #CoglFrameInfo object but are able to report a refresh rate via
         * this api. Therefore if you need this information then this api is
         * more reliable than using cogl_frame_info_get_output() followed by
         * cogl_output_get_refresh_rate().</note>
         * @returns the refresh rate in Hertz
         */
        get_refresh_rate(): number;
        get_rendering_duration_ns(): number;
        get_sequence(): number;
        get_time_before_buffer_swap_us(): number;
        is_hw_clock(): boolean;
        is_vsync(): boolean;
        is_zero_copy(): boolean;

        // Class property signals of Cogl-13.Cogl.FrameInfo

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * Frame information.
     * @class
     */
    class FrameInfo extends Object {
        // Own properties of Cogl-13.Cogl.FrameInfo

        static name: string;
        static $gtype: GObject.GType<FrameInfo>;

        // Constructors of Cogl-13.Cogl.FrameInfo

        constructor(config?: FrameInfo.ConstructorProperties);
        _init(config?: FrameInfo.ConstructorProperties): void;
    }

    module Framebuffer {
        // Signal callback interfaces

        /**
         * Signal callback interface for `destroy`
         */
        interface DestroySignalCallback {
            ($obj: Framebuffer): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Cogl-13.Cogl.Framebuffer

            driver_config?: any | null;
            height?: number | null;
            width?: number | null;
        }
    }

    interface Framebuffer {
        // Own properties of Cogl-13.Cogl.Framebuffer

        readonly driver_config: any;
        height: number;
        width: number;

        // Own fields of Cogl-13.Cogl.Framebuffer

        parent_instance: GObject.Object;

        // Owm methods of Cogl-13.Cogl.Framebuffer

        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * <note>Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.</note>
         * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
         */
        allocate(): boolean;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
         * @param color The color to clear the color buffer too if specified in         `buffers`.
         */
        clear(buffers: number, color: Color): void;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
         * @param red The red component of color to clear the color buffer too if       specified in `buffers`.
         * @param green The green component of color to clear the color buffer too if         specified in `buffers`.
         * @param blue The blue component of color to clear the color buffer too if        specified in `buffers`.
         * @param alpha The alpha component of color to clear the color buffer too if         specified in `buffers`.
         */
        clear4f(
            buffers: number,
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;
        /**
         * Declares that the specified `buffers` no longer need to be referenced
         * by any further rendering commands. This can be an important
         * optimization to avoid subsequent frames of rendering depending on
         * the results of a previous frame.
         *
         * For example; some tile-based rendering GPUs are able to avoid allocating and
         * accessing system memory for the depth and stencil buffer so long as these
         * buffers are not required as input for subsequent frames and that can save a
         * significant amount of memory bandwidth used to save and restore their
         * contents to system memory between frames.
         *
         * It is currently considered an error to try and explicitly discard the color
         * buffer by passing %COGL_BUFFER_BIT_COLOR. This is because the color buffer is
         * already implicitly discard when you finish rendering to a #CoglOnscreen
         * framebuffer, and it's not meaningful to try and discard the color buffer of
         * a #CoglOffscreen framebuffer since they are single-buffered.
         * @param buffers A #CoglBufferBit mask of which ancillary buffers you want           to discard.
         */
        discard_buffers(buffers: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` with the given `pipeline`
         * state with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`). As a pipeline may
         * contain multiple texture layers this interface lets you supply
         * texture coordinates for each layer of the pipeline.
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture for the first layer such as
         * #CoglTexture2DSliced textures which may internally be comprised of
         * multiple low-level textures.  This is unlike low-level drawing apis
         * such as cogl_primitive_draw() which only support low level texture
         * types that are directly supported by GPUs such as #CoglTexture2D.
         *
         * <note>This api can not currently handle multiple high-level meta
         * texture layers. The first layer may be a high level meta texture
         * such as #CoglTexture2DSliced but all other layers much be low
         * level textures such as #CoglTexture2D.
         *
         * The top left texture coordinate for layer 0 of any pipeline will be
         * (tex_coords[0], tex_coords[1]) and the bottom right coordinate will
         * be (tex_coords[2], tex_coords[3]). The coordinates for layer 1
         * would be (tex_coords[4], tex_coords[5]) (tex_coords[6],
         * tex_coords[7]) and so on...
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * The first pair of coordinates are for the first layer (with the
         * smallest layer index) and if you supply less texture coordinates
         * than there are layers in the current source material then default
         * texture coordinates (0.0, 0.0, 1.0, 1.0) are generated.
         * @param pipeline A #CoglPipeline state object
         * @param x_1 x coordinate upper left on screen.
         * @param y_1 y coordinate upper left on screen.
         * @param x_2 x coordinate lower right on screen.
         * @param y_2 y coordinate lower right on screen.
         * @param tex_coords An array containing groups of   4 float values: [s_1, t_1, s_2, t_2] that are interpreted as two texture   coordinates; one for the top left texel, and one for the bottom right   texel. Each value should be between 0.0 and 1.0, where the coordinate   (0.0, 0.0) represents the top left of the texture, and (1.0, 1.0) the   bottom right.
         * @param tex_coords_len The length of the `tex_coords` array. (For one layer   and one group of texture coordinates, this would be 4)
         */
        draw_multitextured_rectangle(
            pipeline: Pipeline,
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number,
            tex_coords: number[],
            tex_coords_len: number
        ): void;
        /**
         * Draws a rectangle to `framebuffer` with the given `pipeline` state
         * and with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`).
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * <note>If you want to describe a rectangle with a texture mapped on
         * it then you can use
         * cogl_framebuffer_draw_textured_rectangle().</note>
         * @param pipeline A #CoglPipeline state object
         * @param x_1 X coordinate of the top-left corner
         * @param y_1 Y coordinate of the top-left corner
         * @param x_2 X coordinate of the bottom-right corner
         * @param y_2 Y coordinate of the bottom-right corner
         */
        draw_rectangle(
            pipeline: Pipeline,
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number
        ): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_rectangle() does.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The positions for
         * the second rectangle are (coordinates[4], coordinates[5]) and
         * (coordinates[6], coordinates[7]) and so on...
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array of coordinates   containing groups of 4 float values: [x_1, y_1, x_2, y_2] that are   interpreted as two position coordinates; one for the top left of   the rectangle (x1, y1), and one for the bottom right of the   rectangle (x2, y2).
         * @param n_rectangles number of rectangles defined in `coordinates`.
         */
        draw_rectangles(
            pipeline: Pipeline,
            coordinates: number[],
            n_rectangles: number
        ): void;
        /**
         * Draws a textured rectangle to `framebuffer` using the given
         * `pipeline` state with the top left corner positioned at (`x_1`, `y_1`)
         * and the bottom right corner positioned at (`x_2`, `y_2`). The top
         * left corner will have texture coordinates of (`s_1`, `t_1`) and the
         * bottom right corner will have texture coordinates of (`s_2`, `t_2`).
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * <note>The given texture coordinates will only be used for the first
         * texture layer of the pipeline and if your pipeline has more than
         * one layer then all other layers will have default texture
         * coordinates of `s_1`=0.0 `t_1`=0.0 `s_2`=1.0 `t_2`=1.0 </note>
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in `s_1`=0, `t_1`=0, `s_2`=1, `t_2`=1.
         * @param pipeline A #CoglPipeline state object
         * @param x_1 x coordinate upper left on screen.
         * @param y_1 y coordinate upper left on screen.
         * @param x_2 x coordinate lower right on screen.
         * @param y_2 y coordinate lower right on screen.
         * @param s_1 S texture coordinate of the top-left coorner
         * @param t_1 T texture coordinate of the top-left coorner
         * @param s_2 S texture coordinate of the bottom-right coorner
         * @param t_2 T texture coordinate of the bottom-right coorner
         */
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
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_textured_rectangle() does.
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The top left
         * texture coordinate is (coordinates[4], coordinates[5]) and the
         * bottom right texture coordinate is (coordinates[6],
         * coordinates[7]). The coordinates for subsequent rectangles
         * are defined similarly by the subsequent coordinates.
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array containing   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]   that have the same meaning as the arguments for   cogl_framebuffer_draw_textured_rectangle().
         * @param n_rectangles number of rectangles to `coordinates` to draw
         */
        draw_textured_rectangles(
            pipeline: Pipeline,
            coordinates: number[],
            n_rectangles: number
        ): void;
        /**
         * This blocks the CPU until all pending rendering associated with the
         * specified framebuffer has completed. It's very rare that developers should
         * ever need this level of synchronization with the GPU and should never be
         * used unless you clearly understand why you need to explicitly force
         * synchronization.
         *
         * One example might be for benchmarking purposes to be sure timing
         * measurements reflect the time that the GPU is busy for not just the time it
         * takes to queue rendering commands.
         */
        finish(): void;
        /**
         * Flushes `framebuffer` to ensure the current batch of commands is
         * submitted to the GPU.
         *
         * Unlike cogl_framebuffer_finish(), this does not block the CPU.
         */
        flush(): void;
        /**
         * Replaces the current projection matrix with a perspective matrix
         * for a given viewing frustum defined by 4 side clip planes that
         * all cross through the origin and 2 near and far clip planes.
         * @param left X position of the left clipping plane where it   intersects the near clipping plane
         * @param right X position of the right clipping plane where it   intersects the near clipping plane
         * @param bottom Y position of the bottom clipping plane where it   intersects the near clipping plane
         * @param top Y position of the top clipping plane where it intersects   the near clipping plane
         * @param z_near The distance to the near clipping plane (Must be positive)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        frustum(
            left: number,
            right: number,
            bottom: number,
            top: number,
            z_near: number,
            z_far: number
        ): void;
        /**
         * Retrieves the number of alpha bits of `framebuffer`
         * @returns the number of bits
         */
        get_alpha_bits(): number;
        /**
         * Retrieves the number of blue bits of `framebuffer`
         * @returns the number of bits
         */
        get_blue_bits(): number;
        /**
         * Can be used to query the #CoglContext a given `framebuffer` was
         * instantiated within. This is the #CoglContext that was passed to
         * cogl_onscreen_new() for example.
         * @returns The #CoglContext that the given               @framebuffer was instantiated within.
         */
        get_context(): Context;
        /**
         * Retrieves the number of depth bits of `framebuffer`
         * @returns the number of bits
         */
        get_depth_bits(): number;
        /**
         * Queries whether depth buffer writing is enabled for `framebuffer`. This
         * can be controlled via cogl_framebuffer_set_depth_write_enabled().
         * @returns %TRUE if depth writing is enabled or %FALSE if not.
         */
        get_depth_write_enabled(): boolean;
        /**
         * Returns whether dithering has been requested for the given `framebuffer`.
         * See cogl_framebuffer_set_dither_enabled() for more details about dithering.
         *
         * <note>This may return %TRUE even when the underlying `framebuffer`
         * display pipeline does not support dithering. This value only represents
         * the user's request for dithering.</note>
         * @returns %TRUE if dithering has been requested or %FALSE if not.
         */
        get_dither_enabled(): boolean;
        /**
         * Retrieves the number of green bits of `framebuffer`
         * @returns the number of bits
         */
        get_green_bits(): number;
        /**
         * Queries the current height of the given `framebuffer`.
         * @returns The height of @framebuffer.
         */
        get_height(): number;
        get_is_stereo(): boolean;
        /**
         * Stores the current model-view matrix in `matrix`.
         */
        get_modelview_matrix(): /* matrix */ Graphene.Matrix;
        /**
         * Stores the current projection matrix in `matrix`.
         */
        get_projection_matrix(): /* matrix */ Graphene.Matrix;
        /**
         * Retrieves the number of red bits of `framebuffer`
         * @returns the number of bits
         */
        get_red_bits(): number;
        /**
         * Gets the number of points that are sampled per-pixel when
         * rasterizing geometry. Usually by default this will return 0 which
         * means that single-sample not multisample rendering has been chosen.
         * When using a GPU supporting multisample rendering it's possible to
         * increase the number of samples per pixel using
         * cogl_framebuffer_set_samples_per_pixel().
         *
         * Calling cogl_framebuffer_get_samples_per_pixel() before the
         * framebuffer has been allocated will simply return the value set
         * using cogl_framebuffer_set_samples_per_pixel(). After the
         * framebuffer has been allocated the value will reflect the actual
         * number of samples that will be made by the GPU.
         * @returns The number of point samples made per pixel when          rasterizing geometry or 0 if single-sample rendering          has been chosen.
         */
        get_samples_per_pixel(): number;
        /**
         * Gets the current #CoglStereoMode, which defines which stereo buffers
         * should be drawn to. See cogl_framebuffer_set_stereo_mode().
         * @returns A #CoglStereoMode
         */
        get_stereo_mode(): StereoMode;
        /**
         * Queries the x, y, width and height components of the current viewport as set
         * using cogl_framebuffer_set_viewport() or the default values which are 0, 0,
         * framebuffer_width and framebuffer_height.  The values are written into the
         * given `viewport` array.
         */
        get_viewport4fv(): /* viewport */ number[];
        /**
         * Queries the height of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the height of the framebuffer.
         * @returns The height of the viewport.
         */
        get_viewport_height(): number;
        /**
         * Queries the width of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the width of the framebuffer.
         * @returns The width of the viewport.
         */
        get_viewport_width(): number;
        /**
         * Queries the x coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         * @returns The x coordinate of the viewport origin.
         */
        get_viewport_x(): number;
        /**
         * Queries the y coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         * @returns The y coordinate of the viewport origin.
         */
        get_viewport_y(): number;
        /**
         * Queries the current width of the given `framebuffer`.
         * @returns The width of @framebuffer.
         */
        get_width(): number;
        /**
         * Resets the current model-view matrix to the identity matrix.
         */
        identity_matrix(): void;
        /**
         * Replaces the current projection matrix with an orthographic projection
         * matrix.
         * @param x_1 The x coordinate for the first vertical clipping plane
         * @param y_1 The y coordinate for the first horizontal clipping plane
         * @param x_2 The x coordinate for the second vertical clipping plane
         * @param y_2 The y coordinate for the second horizontal clipping plane
         * @param near The <emphasis>distance</emphasis> to the near clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         * @param far The <emphasis>distance</emphasis> to the far clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         */
        orthographic(
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number,
            near: number,
            far: number
        ): void;
        /**
         * Replaces the current projection matrix with a perspective matrix
         * based on the provided values.
         *
         * <note>You should be careful not to have to great a `z_far` / `z_near`
         * ratio since that will reduce the effectiveness of depth testing
         * since there won't be enough precision to identify the depth of
         * objects near to each other.</note>
         * @param fov_y Vertical field of view angle in degrees.
         * @param aspect The (width over height) aspect ratio for display
         * @param z_near The distance to the near clipping plane (Must be positive,   and must not be 0)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        perspective(
            fov_y: number,
            aspect: number,
            z_near: number,
            z_far: number
        ): void;
        /**
         * Reverts the clipping region to the state before the last call to
         * cogl_framebuffer_push_rectangle_clip(), or
         * cogl_framebuffer_push_primitive_clip().
         */
        pop_clip(): void;
        /**
         * Restores the model-view matrix on the top of the matrix stack.
         */
        pop_matrix(): void;
        /**
         * Copies the current model-view matrix onto the matrix stack. The matrix
         * can later be restored with cogl_framebuffer_pop_matrix().
         */
        push_matrix(): void;
        /**
         * Specifies a modelview transformed rectangular clipping area for all
         * subsequent drawing operations. Any drawing commands that extend
         * outside the rectangle will be clipped so that only the portion
         * inside the rectangle will be displayed. The rectangle dimensions
         * are transformed by the current model-view matrix.
         *
         * The rectangle is intersected with the current clip region. To undo
         * the effect of this function, call cogl_framebuffer_pop_clip().
         * @param x_1 x coordinate for top left corner of the clip rectangle
         * @param y_1 y coordinate for top left corner of the clip rectangle
         * @param x_2 x coordinate for bottom right corner of the clip rectangle
         * @param y_2 y coordinate for bottom right corner of the clip rectangle
         */
        push_rectangle_clip(
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number
        ): void;
        push_region_clip(region: cairo.Region): void;
        /**
         * This is a convenience wrapper around
         * cogl_framebuffer_read_pixels_into_bitmap() which allocates a
         * temporary #CoglBitmap to read pixel data directly into the given
         * buffer. The rowstride of the buffer is assumed to be the width of
         * the region times the bytes per pixel of the format. The source for
         * the data is always taken from the color buffer. If you want to use
         * any other rowstride or source, please use the
         * cogl_framebuffer_read_pixels_into_bitmap() function directly.
         *
         * The implementation of the function looks like this:
         *
         *
         * ```
         * bitmap = cogl_bitmap_new_for_data (context,
         *                                    width, height,
         *                                    format,
         *                                    /<!-- -->* rowstride *<!-- -->/
         *                                    bpp * width,
         *                                    pixels);
         * cogl_framebuffer_read_pixels_into_bitmap (framebuffer,
         *                                           x, y,
         *                                           COGL_READ_PIXELS_COLOR_BUFFER,
         *                                           bitmap);
         * cogl_object_unref (bitmap);
         * ```
         *
         * @param x The x position to read from
         * @param y The y position to read from
         * @param width The width of the region of rectangles to read
         * @param height The height of the region of rectangles to read
         * @param format The pixel format to store the data in
         * @param pixels The address of the buffer to store the data in
         * @returns %TRUE if the read succeeded or %FALSE otherwise.
         */
        read_pixels(
            x: number,
            y: number,
            width: number,
            height: number,
            format: PixelFormat,
            pixels: number
        ): boolean;
        /**
         * This reads a rectangle of pixels from the given framebuffer where
         * position (0, 0) is the top left. The pixel at (x, y) is the first
         * read, and a rectangle of pixels with the same size as the bitmap is
         * read right and downwards from that point.
         *
         * Currently Cogl assumes that the framebuffer is in a premultiplied
         * format so if the format of `bitmap` is non-premultiplied it will
         * convert it. To read the pixel values without any conversion you
         * should either specify a format that doesn't use an alpha channel or
         * use one of the formats ending in PRE.
         * @param x The x position to read from
         * @param y The y position to read from
         * @param source Identifies which auxiliary buffer you want to read          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
         * @param bitmap The bitmap to store the results in.
         * @returns %TRUE if the read succeeded or %FALSE otherwise. The  function is only likely to fail if the bitmap points to a pixel  buffer and it could not be mapped.
         */
        read_pixels_into_bitmap(
            x: number,
            y: number,
            source: ReadPixelsFlags,
            bitmap: Bitmap
        ): boolean;
        /**
         * When point sample rendering (also known as multisample rendering)
         * has been enabled via cogl_framebuffer_set_samples_per_pixel()
         * then you can optionally call this function (or
         * cogl_framebuffer_resolve_samples_region()) to explicitly resolve
         * the point samples into values for the final color buffer.
         *
         * Some GPUs will implicitly resolve the point samples during
         * rendering and so this function is effectively a nop, but with other
         * architectures it is desirable to defer the resolve step until the
         * end of the frame.
         *
         * Since Cogl will automatically ensure samples are resolved if the
         * target color buffer is used as a source this API only needs to be
         * used if explicit control is desired - perhaps because you want to
         * ensure that the resolve is completed in advance to avoid later
         * having to wait for the resolve to complete.
         *
         * If you are performing incremental updates to a framebuffer you
         * should consider using cogl_framebuffer_resolve_samples_region()
         * instead to avoid resolving redundant pixels.
         */
        resolve_samples(): void;
        /**
         * When point sample rendering (also known as multisample rendering)
         * has been enabled via cogl_framebuffer_set_samples_per_pixel()
         * then you can optionally call this function (or
         * cogl_framebuffer_resolve_samples()) to explicitly resolve the point
         * samples into values for the final color buffer.
         *
         * Some GPUs will implicitly resolve the point samples during
         * rendering and so this function is effectively a nop, but with other
         * architectures it is desirable to defer the resolve step until the
         * end of the frame.
         *
         * Use of this API is recommended if incremental, small updates to
         * a framebuffer are being made because by default Cogl will
         * implicitly resolve all the point samples of the framebuffer which
         * can result in redundant work if only a small number of samples have
         * changed.
         *
         * Because some GPUs implicitly resolve point samples this function
         * only guarantees that at-least the region specified will be resolved
         * and if you have rendered to a larger region then it's possible that
         * other samples may be implicitly resolved.
         * @param x top-left x coordinate of region to resolve
         * @param y top-left y coordinate of region to resolve
         * @param width width of region to resolve
         * @param height height of region to resolve
         */
        resolve_samples_region(
            x: number,
            y: number,
            width: number,
            height: number
        ): void;
        /**
         * Multiplies the current model-view matrix by one that rotates the
         * model around the axis-vector specified by `x,` `y` and `z`. The
         * rotation follows the right-hand thumb rule so for example rotating
         * by 10 degrees about the axis-vector (0, 0, 1) causes a small
         * counter-clockwise rotation.
         * @param angle Angle in degrees to rotate.
         * @param x X-component of vertex to rotate around.
         * @param y Y-component of vertex to rotate around.
         * @param z Z-component of vertex to rotate around.
         */
        rotate(angle: number, x: number, y: number, z: number): void;
        /**
         * Multiplies the current model-view matrix by one that rotates
         * according to the rotation described by `euler`.
         * @param euler A #graphene_euler_t
         */
        rotate_euler(euler: Graphene.Euler): void;
        /**
         * Multiplies the current model-view matrix by one that scales the x,
         * y and z axes by the given values.
         * @param x Amount to scale along the x-axis
         * @param y Amount to scale along the y-axis
         * @param z Amount to scale along the z-axis
         */
        scale(x: number, y: number, z: number): void;
        /**
         * Enables or disables depth buffer writing when rendering to `framebuffer`.
         * If depth writing is enabled for both the framebuffer and the rendering
         * pipeline, and the framebuffer has an associated depth buffer, depth
         * information will be written to this buffer during rendering.
         *
         * Depth buffer writing is enabled by default.
         * @param depth_write_enabled %TRUE to enable depth writing or %FALSE to disable
         */
        set_depth_write_enabled(depth_write_enabled: boolean): void;
        /**
         * Enables or disabled dithering if supported by the hardware.
         *
         * Dithering is a hardware dependent technique to increase the visible
         * color resolution beyond what the underlying hardware supports by playing
         * tricks with the colors placed into the framebuffer to give the illusion
         * of other colors. (For example this can be compared to half-toning used
         * by some news papers to show varying levels of grey even though their may
         * only be black and white are available).
         *
         * If the current display pipeline for `framebuffer` does not support dithering
         * then this has no affect.
         *
         * Dithering is enabled by default.
         * @param dither_enabled %TRUE to enable dithering or %FALSE to disable
         */
        set_dither_enabled(dither_enabled: boolean): void;
        /**
         * Sets `matrix` as the new model-view matrix.
         * @param matrix the new model-view matrix
         */
        set_modelview_matrix(matrix: Graphene.Matrix): void;
        /**
         * Sets `matrix` as the new projection matrix.
         * @param matrix the new projection matrix
         */
        set_projection_matrix(matrix: Graphene.Matrix): void;
        /**
         * Requires that when rendering to `framebuffer` then `n` point samples
         * should be made per pixel which will all contribute to the final
         * resolved color for that pixel. The idea is that the hardware aims
         * to get quality similar to what you would get if you rendered
         * everything twice as big (for 4 samples per pixel) and then scaled
         * that image back down with filtering. It can effectively remove the
         * jagged edges of polygons and should be more efficient than if you
         * were to manually render at a higher resolution and downscale
         * because the hardware is often able to take some shortcuts. For
         * example the GPU may only calculate a single texture sample for all
         * points of a single pixel, and for tile based architectures all the
         * extra sample data (such as depth and stencil samples) may be
         * handled on-chip and so avoid increased demand on system memory
         * bandwidth.
         *
         * By default this value is usually set to 0 and that is referred to
         * as "single-sample" rendering. A value of 1 or greater is referred
         * to as "multisample" rendering.
         *
         * <note>There are some semantic differences between single-sample
         * rendering and multisampling with just 1 point sample such as it
         * being redundant to use the cogl_framebuffer_resolve_samples() and
         * cogl_framebuffer_resolve_samples_region() apis with single-sample
         * rendering.</note>
         *
         * <note>It's recommended that
         * cogl_framebuffer_resolve_samples_region() be explicitly used at the
         * end of rendering to a point sample buffer to minimize the number of
         * samples that get resolved. By default Cogl will implicitly resolve
         * all framebuffer samples but if only a small region of a
         * framebuffer has changed this can lead to redundant work being
         * done.</note>
         * @param samples_per_pixel The minimum number of samples per pixel
         */
        set_samples_per_pixel(samples_per_pixel: number): void;
        /**
         * Sets which stereo buffers should be drawn to. The default
         * is %COGL_STEREO_BOTH, which means that both the left and
         * right buffers will be affected by drawing. For this to have
         * an effect, the display system must support stereo drawables,
         * and the framebuffer must have been created with stereo
         * enabled. (See cogl_onscreen_template_set_stereo_enabled(),
         * cogl_framebuffer_get_is_stereo().)
         * @param stereo_mode A #CoglStereoMode specifying which stereo buffers               should be drawn tow.
         */
        set_stereo_mode(stereo_mode: StereoMode): void;
        /**
         * Defines a scale and offset for everything rendered relative to the
         * top-left of the destination framebuffer.
         *
         * By default the viewport has an origin of (0,0) and width and height
         * that match the framebuffer's size. Assuming a default projection and
         * modelview matrix then you could translate the contents of a window
         * down and right by leaving the viewport size unchanged by moving the
         * offset to (10,10). The viewport coordinates are measured in pixels.
         * If you left the x and y origin as (0,0) you could scale the windows
         * contents down by specify and width and height that's half the real
         * size of the framebuffer.
         *
         * <note>Although the function takes floating point arguments, existing
         * drivers only allow the use of integer values. In the future floating
         * point values will be exposed via a checkable feature.</note>
         * @param x The top-left x coordinate of the viewport origin (only integers     supported currently)
         * @param y The top-left y coordinate of the viewport origin (only integers     supported currently)
         * @param width The width of the viewport (only integers supported currently)
         * @param height The height of the viewport (only integers supported currently)
         */
        set_viewport(x: number, y: number, width: number, height: number): void;
        /**
         * Multiplies the current model-view matrix by the given matrix.
         * @param matrix the matrix to multiply with the current model-view
         */
        transform(matrix: Graphene.Matrix): void;
        /**
         * Multiplies the current model-view matrix by one that translates the
         * model along all three axes according to the given values.
         * @param x Distance to translate along the x-axis
         * @param y Distance to translate along the y-axis
         * @param z Distance to translate along the z-axis
         */
        translate(x: number, y: number, z: number): void;

        // Own virtual methods of Cogl-13.Cogl.Framebuffer

        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * <note>Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.</note>
         * @virtual
         * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
         */
        vfunc_allocate(): boolean;
        vfunc_is_y_flipped(): boolean;

        // Own signals of Cogl-13.Cogl.Framebuffer

        connect(
            sigName: 'destroy',
            callback: Framebuffer.DestroySignalCallback
        ): number;
        connect_after(
            sigName: 'destroy',
            callback: Framebuffer.DestroySignalCallback
        ): number;
        emit(sigName: 'destroy', ...args: any[]): void;

        // Class property signals of Cogl-13.Cogl.Framebuffer

        connect(
            sigName: 'notify::driver-config',
            callback: ($obj: Framebuffer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::driver-config',
            callback: ($obj: Framebuffer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::driver-config', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Framebuffer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Framebuffer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Framebuffer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Framebuffer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Framebuffer extends GObject.Object {
        // Own properties of Cogl-13.Cogl.Framebuffer

        static name: string;
        static $gtype: GObject.GType<Framebuffer>;

        // Constructors of Cogl-13.Cogl.Framebuffer

        constructor(config?: Framebuffer.ConstructorProperties);
        _init(config?: Framebuffer.ConstructorProperties): void;
        static error_quark(): number;
    }

    module Object {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface Object {
        // Class property signals of Cogl-13.Cogl.Object

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Object extends GObject.Object {
        // Own properties of Cogl-13.Cogl.Object

        static name: string;
        static $gtype: GObject.GType<Object>;

        // Constructors of Cogl-13.Cogl.Object

        constructor(config?: Object.ConstructorProperties);
        _init(config?: Object.ConstructorProperties): void;
    }

    module Offscreen {
        // Constructor properties interface

        interface ConstructorProperties
            extends Framebuffer.ConstructorProperties {}
    }

    interface Offscreen {
        // Class property signals of Cogl-13.Cogl.Offscreen

        connect(
            sigName: 'notify::driver-config',
            callback: ($obj: Offscreen, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::driver-config',
            callback: ($obj: Offscreen, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::driver-config', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Offscreen, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Offscreen, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Offscreen, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Offscreen, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Offscreen extends Framebuffer {
        // Own properties of Cogl-13.Cogl.Offscreen

        static name: string;
        static $gtype: GObject.GType<Offscreen>;

        // Constructors of Cogl-13.Cogl.Offscreen

        constructor(config?: Offscreen.ConstructorProperties);
        /**
         * This creates an offscreen framebuffer object using the given
         * `texture` as the primary color buffer. It doesn't just initialize
         * the contents of the offscreen buffer with the `texture;` they are
         * tightly bound so that drawing to the offscreen buffer effectively
         * updates the contents of the given texture. You don't need to
         * destroy the offscreen buffer before you can use the `texture` again.
         *
         * <note>This api only works with low-level #CoglTexture types such as
         * #CoglTexture2D and not with meta-texture types such as
         * #CoglTexture2DSliced.</note>
         *
         * The storage for the framebuffer is actually allocated lazily
         * so this function will never return %NULL to indicate a runtime
         * error. This means it is still possible to configure the framebuffer
         * before it is really allocated.
         *
         * Simple applications without full error handling can simply rely on
         * Cogl to lazily allocate the storage of framebuffers but you should
         * be aware that if Cogl encounters an error (such as running out of
         * GPU memory) then your application will simply abort with an error
         * message. If you need to be able to catch such exceptions at runtime
         * then you can explicitly allocate your framebuffer when you have
         * finished configuring it by calling cogl_framebuffer_allocate() and
         * passing in a #GError argument to catch any exceptions.
         * @constructor
         * @param texture A #CoglTexture pointer
         * @returns a newly instantiated #CoglOffscreen   framebuffer.
         */
        static new_with_texture(texture: Texture): Offscreen;
        _init(config?: Offscreen.ConstructorProperties): void;
    }

    module Onscreen {
        // Constructor properties interface

        interface ConstructorProperties
            extends Framebuffer.ConstructorProperties {}
    }

    interface Onscreen {
        // Own fields of Cogl-13.Cogl.Onscreen

        parent_instance: Framebuffer & GObject.Object;

        // Owm methods of Cogl-13.Cogl.Onscreen

        /**
         * Installs a `callback` function that will be called whenever the
         * window system has lost the contents of a region of the onscreen
         * buffer and the application should redraw it to repair the buffer.
         * For example this may happen in a window system without a compositor
         * if a window that was previously covering up the onscreen window has
         * been moved causing a region of the onscreen to be exposed.
         *
         * The `callback` will be passed a #CoglOnscreenDirtyInfo struct which
         * describes a rectangle containing the newly dirtied region. Note that
         * this may be called multiple times to describe a non-rectangular
         * region composed of multiple smaller rectangles.
         *
         * The dirty events are separate from %COGL_FRAME_EVENT_SYNC events so
         * the application should also listen for this event before rendering
         * the dirty region to ensure that the framebuffer is actually ready
         * for rendering.
         * @param callback A callback function to call for dirty events
         * @param destroy An optional callback to destroy `user_data` when the           `callback` is removed or `onscreen` is freed.
         * @returns a #CoglOnscreenDirtyClosure pointer that can be used to               remove the callback and associated @user_data later.
         */
        add_dirty_callback(
            callback: OnscreenDirtyCallback,
            destroy: UserDataDestroyCallback | null
        ): OnscreenDirtyClosure;
        /**
         * Installs a `callback` function that will be called for significant
         * events relating to the given `onscreen` framebuffer.
         *
         * The `callback` will be used to notify when the system compositor is
         * ready for this application to render a new frame. In this case
         * %COGL_FRAME_EVENT_SYNC will be passed as the event argument to the
         * given `callback` in addition to the #CoglFrameInfo corresponding to
         * the frame being acknowledged by the compositor.
         *
         * The `callback` will also be called to notify when the frame has
         * ended. In this case %COGL_FRAME_EVENT_COMPLETE will be passed as
         * the event argument to the given `callback` in addition to the
         * #CoglFrameInfo corresponding to the newly presented frame.  The
         * meaning of "ended" here simply means that no more timing
         * information will be collected within the corresponding
         * #CoglFrameInfo and so this is a good opportunity to analyse the
         * given info. It does not necessarily mean that the GPU has finished
         * rendering the corresponding frame.
         *
         * We highly recommend throttling your application according to
         * %COGL_FRAME_EVENT_SYNC events so that your application can avoid
         * wasting resources, drawing more frames than your system compositor
         * can display.
         * @param callback A callback function to call for frame events
         * @param destroy An optional callback to destroy `user_data`           when the `callback` is removed or `onscreen` is freed.
         * @returns a #CoglFrameClosure pointer that can be used to               remove the callback and associated @user_data later.
         */
        add_frame_callback(
            callback: FrameCallback,
            destroy: UserDataDestroyCallback | null
        ): FrameClosure;
        /**
         * Gets the current age of the buffer contents.
         *
         * This function allows applications to query the age of the current
         * back buffer contents for a #CoglOnscreen as the number of frames
         * elapsed since the contents were most recently defined.
         *
         * These age values exposes enough information to applications about
         * how Cogl internally manages back buffers to allow applications to
         * re-use the contents of old frames and minimize how much must be
         * redrawn for the next frame.
         *
         * The back buffer contents can either be reported as invalid (has an
         * age of 0) or it may be reported to be the same contents as from n
         * frames prior to the current frame.
         *
         * The queried value remains valid until the next buffer swap.
         *
         * <note>One caveat is that under X11 the buffer age does not reflect
         * changes to buffer contents caused by the window systems. X11
         * applications must track Expose events to determine what buffer
         * regions need to additionally be repaired each frame.</note>
         *
         * The recommended way to take advantage of this buffer age api is to
         * build up a circular buffer of length 3 for tracking damage regions
         * over the last 3 frames and when starting a new frame look at the
         * age of the buffer and combine the damage regions for the current
         * frame with the damage regions of previous `age` frames so you know
         * everything that must be redrawn to update the old contents for the
         * new frame.
         *
         * <note>If the system doesn't not support being able to track the age
         * of back buffers then this function will always return 0 which
         * implies that the contents are undefined.</note>
         *
         * <note>The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
         * explicitly checked to determine if Cogl is currently tracking the
         * age of #CoglOnscreen back buffer contents. If this feature is
         * missing then this function will always return 0.</note>
         * @returns The age of the buffer contents or 0 when the buffer               contents are undefined.
         */
        get_buffer_age(): number;
        /**
         * Gets the value of the framebuffers frame counter. This is
         * a counter that increases by one each time
         * cogl_onscreen_swap_buffers() or cogl_onscreen_swap_region()
         * is called.
         * @returns the current frame counter value
         */
        get_frame_counter(): number;
        /**
         * This requests to make `onscreen` invisible to the user.
         *
         * Actually the precise semantics of this function depend on the
         * window system currently in use, and if you don't have a
         * multi-windowining system this function may in-fact do nothing.
         *
         * This function does not implicitly allocate the given `onscreen`
         * framebuffer before hiding it.
         *
         * <note>Since Cogl doesn't explicitly track the visibility status of
         * onscreen framebuffers it won't try to avoid redundant window system
         * requests e.g. to show an already visible window. This also means
         * that it's acceptable to alternatively use native APIs to show and
         * hide windows without confusing Cogl.</note>
         */
        hide(): void;
        /**
         * Implementation for https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_partial_update.txt
         * This immediately queues state to OpenGL that will be used for the
         * next swap.
         * This needs to be called every frame.
         *
         * The expected values are independent of any viewport transforms applied to
         * the framebuffer.
         * @param rectangles An array of integer 4-tuples representing damaged              rectangles as (x, y, width, height) tuples.
         * @param n_rectangles The number of 4-tuples to be read from `rectangles`
         */
        queue_damage_region(rectangles: number, n_rectangles: number): void;
        /**
         * Removes a callback and associated user data that were previously
         * registered using cogl_onscreen_add_dirty_callback().
         *
         * If a destroy callback was passed to
         * cogl_onscreen_add_dirty_callback() to destroy the user data then
         * this will also get called.
         * @param closure A #CoglOnscreenDirtyClosure returned from           cogl_onscreen_add_dirty_callback()
         */
        remove_dirty_callback(closure: OnscreenDirtyClosure): void;
        /**
         * Removes a callback and associated user data that were previously
         * registered using cogl_onscreen_add_frame_callback().
         *
         * If a destroy callback was passed to
         * cogl_onscreen_add_frame_callback() to destroy the user data then
         * this will get called.
         * @param closure A #CoglFrameClosure returned from           cogl_onscreen_add_frame_callback()
         */
        remove_frame_callback(closure: FrameClosure): void;
        /**
         * This requests to make `onscreen` visible to the user.
         *
         * Actually the precise semantics of this function depend on the
         * window system currently in use, and if you don't have a
         * multi-windowining system this function may in-fact do nothing.
         *
         * This function will implicitly allocate the given `onscreen`
         * framebuffer before showing it if it hasn't already been allocated.
         *
         * When using the Wayland winsys calling this will set the surface to
         * a toplevel type which will make it appear. If the application wants
         * to set a different type for the surface, it can avoid calling
         * cogl_onscreen_show() and set its own type directly with the Wayland
         * client API via cogl_wayland_onscreen_get_surface().
         *
         * <note>Since Cogl doesn't explicitly track the visibility status of
         * onscreen framebuffers it won't try to avoid redundant window system
         * requests e.g. to show an already visible window. This also means
         * that it's acceptable to alternatively use native APIs to show and
         * hide windows without confusing Cogl.</note>
         */
        show(): void;
        /**
         * Swaps the current back buffer being rendered too, to the front for display.
         *
         * This function also implicitly discards the contents of the color, depth and
         * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
         * significance of the discard is that you should not expect to be able to
         * start a new frame that incrementally builds on the contents of the previous
         * frame.
         *
         * <note>It is highly recommended that applications use
         * cogl_onscreen_swap_buffers_with_damage() instead whenever possible
         * and also use the cogl_onscreen_get_buffer_age() api so they can
         * perform incremental updates to older buffers instead of having to
         * render a full buffer for every frame.</note>
         * @param frame_info
         * @param user_data
         */
        swap_buffers(frame_info: FrameInfo, user_data: any | null): void;
        /**
         * Swaps the current back buffer being rendered too, to the front for
         * display and provides information to any system compositor about
         * what regions of the buffer have changed (damage) with respect to
         * the last swapped buffer.
         *
         * This function has the same semantics as
         * cogl_framebuffer_swap_buffers() except that it additionally allows
         * applications to pass a list of damaged rectangles which may be
         * passed on to a compositor so that it can minimize how much of the
         * screen is redrawn in response to this applications newly swapped
         * front buffer.
         *
         * For example if your application is only animating a small object in
         * the corner of the screen and everything else is remaining static
         * then it can help the compositor to know that only the bottom right
         * corner of your newly swapped buffer has really changed with respect
         * to your previously swapped front buffer.
         *
         * If `n_rectangles` is 0 then the whole buffer will implicitly be
         * reported as damaged as if cogl_onscreen_swap_buffers() had been
         * called.
         *
         * This function also implicitly discards the contents of the color,
         * depth and stencil buffers as if cogl_framebuffer_discard_buffers()
         * were used. The significance of the discard is that you should not
         * expect to be able to start a new frame that incrementally builds on
         * the contents of the previous frame. If you want to perform
         * incremental updates to older back buffers then please refer to the
         * cogl_onscreen_get_buffer_age() api.
         *
         * Whenever possible it is recommended that applications use this
         * function instead of cogl_onscreen_swap_buffers() to improve
         * performance when running under a compositor.
         *
         * <note>It is highly recommended to use this API in conjunction with
         * the cogl_onscreen_get_buffer_age() api so that your application can
         * perform incremental rendering based on old back buffers.</note>
         * @param rectangles An array of integer 4-tuples representing damaged              rectangles as (x, y, width, height) tuples.
         * @param n_rectangles The number of 4-tuples to be read from `rectangles`
         * @param info
         * @param user_data
         */
        swap_buffers_with_damage(
            rectangles: number,
            n_rectangles: number,
            info: FrameInfo,
            user_data: any | null
        ): void;
        /**
         * Swaps a region of the back buffer being rendered too, to the front for
         * display.  `rectangles` represents the region as array of `n_rectangles` each
         * defined by 4 sequential (x, y, width, height) integers.
         *
         * This function also implicitly discards the contents of the color, depth and
         * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
         * significance of the discard is that you should not expect to be able to
         * start a new frame that incrementally builds on the contents of the previous
         * frame.
         * @param rectangles An array of integer 4-tuples representing rectangles as              (x, y, width, height) tuples.
         * @param n_rectangles The number of 4-tuples to be read from `rectangles`
         * @param info
         * @param user_data
         */
        swap_region(
            rectangles: number,
            n_rectangles: number,
            info: FrameInfo,
            user_data: any | null
        ): void;

        // Own virtual methods of Cogl-13.Cogl.Onscreen

        vfunc_bind(): void;
        /**
         * Gets the current age of the buffer contents.
         *
         * This function allows applications to query the age of the current
         * back buffer contents for a #CoglOnscreen as the number of frames
         * elapsed since the contents were most recently defined.
         *
         * These age values exposes enough information to applications about
         * how Cogl internally manages back buffers to allow applications to
         * re-use the contents of old frames and minimize how much must be
         * redrawn for the next frame.
         *
         * The back buffer contents can either be reported as invalid (has an
         * age of 0) or it may be reported to be the same contents as from n
         * frames prior to the current frame.
         *
         * The queried value remains valid until the next buffer swap.
         *
         * <note>One caveat is that under X11 the buffer age does not reflect
         * changes to buffer contents caused by the window systems. X11
         * applications must track Expose events to determine what buffer
         * regions need to additionally be repaired each frame.</note>
         *
         * The recommended way to take advantage of this buffer age api is to
         * build up a circular buffer of length 3 for tracking damage regions
         * over the last 3 frames and when starting a new frame look at the
         * age of the buffer and combine the damage regions for the current
         * frame with the damage regions of previous `age` frames so you know
         * everything that must be redrawn to update the old contents for the
         * new frame.
         *
         * <note>If the system doesn't not support being able to track the age
         * of back buffers then this function will always return 0 which
         * implies that the contents are undefined.</note>
         *
         * <note>The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
         * explicitly checked to determine if Cogl is currently tracking the
         * age of #CoglOnscreen back buffer contents. If this feature is
         * missing then this function will always return 0.</note>
         * @virtual
         * @returns The age of the buffer contents or 0 when the buffer               contents are undefined.
         */
        vfunc_get_buffer_age(): number;
        /**
         * Implementation for https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_partial_update.txt
         * This immediately queues state to OpenGL that will be used for the
         * next swap.
         * This needs to be called every frame.
         *
         * The expected values are independent of any viewport transforms applied to
         * the framebuffer.
         * @virtual
         * @param rectangles An array of integer 4-tuples representing damaged              rectangles as (x, y, width, height) tuples.
         * @param n_rectangles The number of 4-tuples to be read from `rectangles`
         */
        vfunc_queue_damage_region(
            rectangles: number,
            n_rectangles: number
        ): void;
        /**
         * Swaps the current back buffer being rendered too, to the front for
         * display and provides information to any system compositor about
         * what regions of the buffer have changed (damage) with respect to
         * the last swapped buffer.
         *
         * This function has the same semantics as
         * cogl_framebuffer_swap_buffers() except that it additionally allows
         * applications to pass a list of damaged rectangles which may be
         * passed on to a compositor so that it can minimize how much of the
         * screen is redrawn in response to this applications newly swapped
         * front buffer.
         *
         * For example if your application is only animating a small object in
         * the corner of the screen and everything else is remaining static
         * then it can help the compositor to know that only the bottom right
         * corner of your newly swapped buffer has really changed with respect
         * to your previously swapped front buffer.
         *
         * If `n_rectangles` is 0 then the whole buffer will implicitly be
         * reported as damaged as if cogl_onscreen_swap_buffers() had been
         * called.
         *
         * This function also implicitly discards the contents of the color,
         * depth and stencil buffers as if cogl_framebuffer_discard_buffers()
         * were used. The significance of the discard is that you should not
         * expect to be able to start a new frame that incrementally builds on
         * the contents of the previous frame. If you want to perform
         * incremental updates to older back buffers then please refer to the
         * cogl_onscreen_get_buffer_age() api.
         *
         * Whenever possible it is recommended that applications use this
         * function instead of cogl_onscreen_swap_buffers() to improve
         * performance when running under a compositor.
         *
         * <note>It is highly recommended to use this API in conjunction with
         * the cogl_onscreen_get_buffer_age() api so that your application can
         * perform incremental rendering based on old back buffers.</note>
         * @virtual
         * @param rectangles An array of integer 4-tuples representing damaged              rectangles as (x, y, width, height) tuples.
         * @param n_rectangles The number of 4-tuples to be read from `rectangles`
         * @param info
         */
        vfunc_swap_buffers_with_damage(
            rectangles: number,
            n_rectangles: number,
            info: FrameInfo
        ): void;
        /**
         * Swaps a region of the back buffer being rendered too, to the front for
         * display.  `rectangles` represents the region as array of `n_rectangles` each
         * defined by 4 sequential (x, y, width, height) integers.
         *
         * This function also implicitly discards the contents of the color, depth and
         * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
         * significance of the discard is that you should not expect to be able to
         * start a new frame that incrementally builds on the contents of the previous
         * frame.
         * @virtual
         * @param rectangles An array of integer 4-tuples representing rectangles as              (x, y, width, height) tuples.
         * @param n_rectangles The number of 4-tuples to be read from `rectangles`
         * @param info
         */
        vfunc_swap_region(
            rectangles: number,
            n_rectangles: number,
            info: FrameInfo
        ): void;

        // Class property signals of Cogl-13.Cogl.Onscreen

        connect(
            sigName: 'notify::driver-config',
            callback: ($obj: Onscreen, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::driver-config',
            callback: ($obj: Onscreen, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::driver-config', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Onscreen, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Onscreen, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Onscreen, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Onscreen, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Onscreen extends Framebuffer {
        // Own properties of Cogl-13.Cogl.Onscreen

        static name: string;
        static $gtype: GObject.GType<Onscreen>;

        // Constructors of Cogl-13.Cogl.Onscreen

        constructor(config?: Onscreen.ConstructorProperties);
        _init(config?: Onscreen.ConstructorProperties): void;
    }

    module Pipeline {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {}
    }

    interface Pipeline {
        // Owm methods of Cogl-13.Cogl.Pipeline

        /**
         * Adds a shader snippet that will hook on to the given layer of the
         * pipeline. The exact part of the pipeline that the snippet wraps
         * around depends on the hook that is given to
         * cogl_snippet_new(). Note that some hooks can't be used with a layer
         * and need to be added with cogl_pipeline_add_snippet() instead.
         * @param layer The layer to hook the snippet to
         * @param snippet A #CoglSnippet
         */
        add_layer_snippet(layer: number, snippet: Snippet): void;
        /**
         * Adds a shader snippet to `pipeline`. The snippet will wrap around or
         * replace some part of the pipeline as defined by the hook point in
         * `snippet`. Note that some hook points are specific to a layer and
         * must be added with cogl_pipeline_add_layer_snippet() instead.
         * @param snippet The #CoglSnippet to add to the vertex processing hook
         */
        add_snippet(snippet: Snippet): void;
        /**
         * Creates a new pipeline with the configuration copied from the
         * source pipeline.
         *
         * We would strongly advise developers to always aim to use
         * cogl_pipeline_copy() instead of cogl_pipeline_new() whenever there will
         * be any similarity between two pipelines. Copying a pipeline helps Cogl
         * keep track of a pipelines ancestry which we may use to help minimize GPU
         * state changes.
         * @returns a pointer to the newly allocated #CoglPipeline
         */
        copy(): Pipeline;
        /**
         * Iterates all the layer indices of the given `pipeline`.
         * @param callback A #CoglPipelineLayerCallback to be            called for each layer index
         */
        foreach_layer(callback: PipelineLayerCallback): void;
        get_alpha_test_function(): PipelineAlphaFunc;
        get_alpha_test_reference(): number;
        /**
         * Retrieves the current pipeline color.
         */
        get_color(): /* color */ Color;
        get_cull_face_mode(): PipelineCullFaceMode;
        /**
         * The order of the vertices within a primitive specifies whether it
         * is considered to be front or back facing. This function specifies
         * which order is considered to be the front
         * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
         * primitives with vertices in a counter-clockwise order and
         * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
         * %COGL_WINDING_COUNTER_CLOCKWISE.
         * @returns The @pipeline front face winding
         */
        get_front_face_winding(): Winding;
        /**
         * Returns the decimation and interpolation filters used when a texture is
         * drawn at other scales than 100%.
         * @param layer_index the layer number to change.
         * @param min_filter Return location for the filter used when scaling a texture down.
         * @param mag_filter Return location for the filter used when magnifying a texture.
         */
        get_layer_filters(
            layer_index: number,
            min_filter: PipelineFilter,
            mag_filter: PipelineFilter
        ): void;
        /**
         * Gets whether point sprite coordinate generation is enabled for this
         * texture layer.
         * @param layer_index the layer number to check.
         * @returns whether the texture coordinates will be replaced with point sprite coordinates.
         */
        get_layer_point_sprite_coords_enabled(layer_index: number): boolean;
        get_layer_texture(layer_index: number): Texture;
        /**
         * Returns the wrap mode for the 's' coordinate of texture lookups on this
         * layer.
         * @param layer_index the layer number to change.
         * @returns the wrap mode for the 's' coordinate of texture lookups on this layer.
         */
        get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode;
        /**
         * Returns the wrap mode for the 't' coordinate of texture lookups on this
         * layer.
         * @param layer_index the layer number to change.
         * @returns the wrap mode for the 't' coordinate of texture lookups on this layer.
         */
        get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode;
        /**
         * Retrieves the number of layers defined for the given `pipeline`
         * @returns the number of layers
         */
        get_n_layers(): number;
        get_per_vertex_point_size(): boolean;
        /**
         * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
         * used with the vertex buffer API.
         * @returns the point size of the @pipeline.
         */
        get_point_size(): number;
        /**
         * This is used to get an integer representing the uniform with the
         * name `uniform_name`. The integer can be passed to functions such as
         * cogl_pipeline_set_uniform_1f() to set the value of a uniform.
         *
         * This function will always return a valid integer. Ie, unlike
         * OpenGL, it does not return -1 if the uniform is not available in
         * this pipeline so it can not be used to test whether uniforms are
         * present. It is not necessary to set the program on the pipeline
         * before calling this function.
         * @param uniform_name The name of a uniform
         * @returns A integer representing the location of the given uniform.
         */
        get_uniform_location(uniform_name: string | null): number;
        /**
         * Queries what user program has been associated with the given
         * `pipeline` using cogl_pipeline_set_user_program().
         * @returns The current user program or %NULL.
         */
        get_user_program(): Handle;
        /**
         * This function removes a layer from your pipeline
         * @param layer_index Specifies the layer you want to remove
         */
        remove_layer(layer_index: number): void;
        /**
         * Before a primitive is blended with the framebuffer, it goes through an
         * alpha test stage which lets you discard fragments based on the current
         * alpha value. This function lets you change the function used to evaluate
         * the alpha channel, and thus determine which fragments are discarded
         * and which continue on to the blending stage.
         *
         * The default is %COGL_PIPELINE_ALPHA_FUNC_ALWAYS
         * @param alpha_func A `CoglPipelineAlphaFunc` constant
         * @param alpha_reference A reference point that the chosen alpha function uses   to compare incoming fragments to.
         */
        set_alpha_test_function(
            alpha_func: PipelineAlphaFunc,
            alpha_reference: number
        ): void;
        /**
         * If not already familiar; please refer <link linkend="cogl-Blend-Strings">here</link>
         * for an overview of what blend strings are, and their syntax.
         *
         * Blending occurs after the alpha test function, and combines fragments with
         * the framebuffer.
         *
         * Currently the only blend function Cogl exposes is ADD(). So any valid
         * blend statements will be of the form:
         *
         *
         * ```
         *   &lt;channel-mask&gt;=ADD(SRC_COLOR*(&lt;factor&gt;), DST_COLOR*(&lt;factor&gt;))
         * ```
         *
         *
         * This is the list of source-names usable as blend factors:
         * <itemizedlist>
         *   <listitem><para>SRC_COLOR: The color of the incoming fragment</para></listitem>
         *   <listitem><para>DST_COLOR: The color of the framebuffer</para></listitem>
         *   <listitem><para>CONSTANT: The constant set via cogl_pipeline_set_blend_constant()</para></listitem>
         * </itemizedlist>
         *
         * The source names can be used according to the
         * <link linkend="cogl-Blend-String-syntax">color-source and factor syntax</link>,
         * so for example "(1-SRC_COLOR[A])" would be a valid factor, as would
         * "(CONSTANT[RGB])"
         *
         * These can also be used as factors:
         * <itemizedlist>
         *   <listitem>0: (0, 0, 0, 0)</listitem>
         *   <listitem>1: (1, 1, 1, 1)</listitem>
         *   <listitem>SRC_ALPHA_SATURATE_FACTOR: (f,f,f,1) where f = MIN(SRC_COLOR[A],1-DST_COLOR[A])</listitem>
         * </itemizedlist>
         *
         * <note>Remember; all color components are normalized to the range [0, 1]
         * before computing the result of blending.</note>
         *
         * <example id="cogl-Blend-Strings-blend-unpremul">
         *   <title>Blend Strings/1</title>
         *   <para>Blend a non-premultiplied source over a destination with
         *   premultiplied alpha:</para>
         *   <programlisting>
         * "RGB = ADD(SRC_COLOR*(SRC_COLOR[A]), DST_COLOR*(1-SRC_COLOR[A]))"
         * "A   = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
         *   </programlisting>
         * </example>
         *
         * <example id="cogl-Blend-Strings-blend-premul">
         *   <title>Blend Strings/2</title>
         *   <para>Blend a premultiplied source over a destination with
         *   premultiplied alpha</para>
         *   <programlisting>
         * "RGBA = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
         *   </programlisting>
         * </example>
         *
         * The default blend string is:
         *
         * ```
         *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
         * ```
         *
         *
         * That gives normal alpha-blending when the calculated color for the pipeline
         * is in premultiplied form.
         * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>   describing the desired blend function.
         * @returns %TRUE if the blend string was successfully parsed, and the   described blending is supported by the underlying driver/hardware. If   there was an error, %FALSE is returned and @error is set accordingly (if   present).
         */
        set_blend(blend_string: string | null): boolean;
        /**
         * When blending is setup to reference a CONSTANT blend factor then
         * blending will depend on the constant set with this function.
         * @param constant_color The constant color you want
         */
        set_blend_constant(constant_color: Color): void;
        /**
         * Sets the basic color of the pipeline, used when no lighting is enabled.
         *
         * Note that if you don't add any layers to the pipeline then the color
         * will be blended unmodified with the destination; the default blend
         * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
         * semi-transparent red. See cogl_color_premultiply().
         *
         * The default value is (1.0, 1.0, 1.0, 1.0)
         * @param color The components of the color
         */
        set_color(color: Color): void;
        /**
         * Sets the basic color of the pipeline, used when no lighting is enabled.
         *
         * The default value is (1.0, 1.0, 1.0, 1.0)
         * @param red The red component
         * @param green The green component
         * @param blue The blue component
         * @param alpha The alpha component
         */
        set_color4f(
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;
        /**
         * Sets the basic color of the pipeline, used when no lighting is enabled.
         *
         * The default value is (0xff, 0xff, 0xff, 0xff)
         * @param red The red component
         * @param green The green component
         * @param blue The blue component
         * @param alpha The alpha component
         */
        set_color4ub(
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;
        /**
         * Sets which faces will be culled when drawing. Face culling can be
         * used to increase efficiency by avoiding drawing faces that would
         * get overridden. For example, if a model has gaps so that it is
         * impossible to see the inside then faces which are facing away from
         * the screen will never be seen so there is no point in drawing
         * them. This can be achieved by setting the cull face mode to
         * %COGL_PIPELINE_CULL_FACE_MODE_BACK.
         *
         * Face culling relies on the primitives being drawn with a specific
         * order to represent which faces are facing inside and outside the
         * model. This order can be specified by calling
         * cogl_pipeline_set_front_face_winding().
         * @param cull_face_mode The new mode to set
         */
        set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void;
        /**
         * The order of the vertices within a primitive specifies whether it
         * is considered to be front or back facing. This function specifies
         * which order is considered to be the front
         * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
         * primitives with vertices in a counter-clockwise order and
         * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
         * %COGL_WINDING_COUNTER_CLOCKWISE.
         * @param front_winding the winding order
         */
        set_front_face_winding(front_winding: Winding): void;
        /**
         * If not already familiar; you can refer
         * <link linkend="cogl-Blend-Strings">here</link> for an overview of what blend
         * strings are and there syntax.
         *
         * These are all the functions available for texture combining:
         * <itemizedlist>
         *   <listitem>REPLACE(arg0) = arg0</listitem>
         *   <listitem>MODULATE(arg0, arg1) = arg0 x arg1</listitem>
         *   <listitem>ADD(arg0, arg1) = arg0 + arg1</listitem>
         *   <listitem>ADD_SIGNED(arg0, arg1) = arg0 + arg1 - 0.5</listitem>
         *   <listitem>INTERPOLATE(arg0, arg1, arg2) = arg0 x arg2 + arg1 x (1 - arg2)</listitem>
         *   <listitem>SUBTRACT(arg0, arg1) = arg0 - arg1</listitem>
         *   <listitem>
         *     <programlisting>
         *  DOT3_RGB(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
         *                              (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
         *                              (arg0[B] - 0.5)) * (arg1[B] - 0.5))
         *     </programlisting>
         *   </listitem>
         *   <listitem>
         *     <programlisting>
         *  DOT3_RGBA(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
         *                               (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
         *                               (arg0[B] - 0.5)) * (arg1[B] - 0.5))
         *     </programlisting>
         *   </listitem>
         * </itemizedlist>
         *
         * Refer to the
         * <link linkend="cogl-Blend-String-syntax">color-source syntax</link> for
         * describing the arguments. The valid source names for texture combining
         * are:
         * <variablelist>
         *   <varlistentry>
         *     <term>TEXTURE</term>
         *     <listitem>Use the color from the current texture layer</listitem>
         *   </varlistentry>
         *   <varlistentry>
         *     <term>TEXTURE_0, TEXTURE_1, etc</term>
         *     <listitem>Use the color from the specified texture layer</listitem>
         *   </varlistentry>
         *   <varlistentry>
         *     <term>CONSTANT</term>
         *     <listitem>Use the color from the constant given with
         *     cogl_pipeline_set_layer_combine_constant()</listitem>
         *   </varlistentry>
         *   <varlistentry>
         *     <term>PRIMARY</term>
         *     <listitem>Use the color of the pipeline as set with
         *     cogl_pipeline_set_color()</listitem>
         *   </varlistentry>
         *   <varlistentry>
         *     <term>PREVIOUS</term>
         *     <listitem>Either use the texture color from the previous layer, or
         *     if this is layer 0, use the color of the pipeline as set with
         *     cogl_pipeline_set_color()</listitem>
         *   </varlistentry>
         * </variablelist>
         *
         * <refsect2 id="cogl-Layer-Combine-Examples">
         *   <title>Layer Combine Examples</title>
         *   <para>This is effectively what the default blending is:</para>
         *   <informalexample><programlisting>
         *   RGBA = MODULATE (PREVIOUS, TEXTURE)
         *   </programlisting></informalexample>
         *   <para>This could be used to cross-fade between two images, using
         *   the alpha component of a constant as the interpolator. The constant
         *   color is given by calling
         *   cogl_pipeline_set_layer_combine_constant().</para>
         *   <informalexample><programlisting>
         *   RGBA = INTERPOLATE (PREVIOUS, TEXTURE, CONSTANT[A])
         *   </programlisting></informalexample>
         * </refsect2>
         *
         * <note>You can't give a multiplication factor for arguments as you can
         * with blending.</note>
         * @param layer_index Specifies the layer you want define a combine function for
         * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>    describing the desired texture combine function.
         * @returns %TRUE if the blend string was successfully parsed, and the   described texture combining is supported by the underlying driver and   or hardware. On failure, %FALSE is returned and @error is set
         */
        set_layer_combine(
            layer_index: number,
            blend_string: string | null
        ): boolean;
        /**
         * When you are using the 'CONSTANT' color source in a layer combine
         * description then you can use this function to define its value.
         * @param layer_index Specifies the layer you want to specify a constant used               for texture combining
         * @param constant The constant color you want
         */
        set_layer_combine_constant(layer_index: number, constant: Color): void;
        /**
         * Changes the decimation and interpolation filters used when a texture is
         * drawn at other scales than 100%.
         *
         * <note>It is an error to pass anything other than
         * %COGL_PIPELINE_FILTER_NEAREST or %COGL_PIPELINE_FILTER_LINEAR as
         * magnification filters since magnification doesn't ever need to
         * reference values stored in the mipmap chain.</note>
         * @param layer_index the layer number to change.
         * @param min_filter the filter used when scaling a texture down.
         * @param mag_filter the filter used when magnifying a texture.
         */
        set_layer_filters(
            layer_index: number,
            min_filter: PipelineFilter,
            mag_filter: PipelineFilter
        ): void;
        /**
         * This function lets you set a matrix that can be used to e.g. translate
         * and rotate a single layer of a pipeline used to fill your geometry.
         * @param layer_index the index for the layer inside `pipeline`
         * @param matrix the transformation matrix for the layer
         */
        set_layer_matrix(layer_index: number, matrix: Graphene.Matrix): void;
        set_layer_max_mipmap_level(layer: number, max_level: number): void;
        /**
         * Sets the texture for this layer to be the default texture for the
         * given type. The default texture is a 1x1 pixel white texture.
         *
         * This function is mostly useful if you want to create a base
         * pipeline that you want to create multiple copies from using
         * cogl_pipeline_copy(). In that case this function can be used to
         * specify the texture type so that any pipeline copies can share the
         * internal texture type state for efficiency.
         * @param layer_index The layer number to modify
         */
        set_layer_null_texture(layer_index: number): void;
        /**
         * When rendering points, if `enable` is %TRUE then the texture
         * coordinates for this layer will be replaced with coordinates that
         * vary from 0.0 to 1.0 across the primitive. The top left of the
         * point will have the coordinates 0.0,0.0 and the bottom right will
         * have 1.0,1.0. If `enable` is %FALSE then the coordinates will be
         * fixed for the entire point.
         * @param layer_index the layer number to change.
         * @param enable whether to enable point sprite coord generation.
         * @returns %TRUE if the function succeeds, %FALSE otherwise.
         */
        set_layer_point_sprite_coords_enabled(
            layer_index: number,
            enable: boolean
        ): boolean;
        set_layer_texture(layer_index: number, texture: Texture): void;
        /**
         * Sets the wrap mode for all three coordinates of texture lookups on
         * this layer. This is equivalent to calling
         * cogl_pipeline_set_layer_wrap_mode_s() and
         * cogl_pipeline_set_layer_wrap_mode_t() separately.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void;
        /**
         * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_s(
            layer_index: number,
            mode: PipelineWrapMode
        ): void;
        /**
         * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_t(
            layer_index: number,
            mode: PipelineWrapMode
        ): void;
        /**
         * Sets whether to use a per-vertex point size or to use the value set
         * by cogl_pipeline_set_point_size(). If per-vertex point size is
         * enabled then the point size can be set for an individual point
         * either by drawing with a #CoglAttribute with the name
         * ‘cogl_point_size_in’ or by writing to the GLSL builtin
         * ‘cogl_point_size_out’ from a vertex shader snippet.
         *
         * If per-vertex point size is enabled and this attribute is not used
         * and cogl_point_size_out is not written to then the results are
         * undefined.
         * @param enable whether to enable per-vertex point size
         * @returns %TRUE if the change succeeded or %FALSE otherwise
         */
        set_per_vertex_point_size(enable: boolean): boolean;
        /**
         * Changes the size of points drawn when %COGL_VERTICES_MODE_POINTS is
         * used with the attribute buffer API. Note that typically the GPU
         * will only support a limited minimum and maximum range of point
         * sizes. If the chosen point size is outside that range then the
         * nearest value within that range will be used instead. The size of a
         * point is in screen space so it will be the same regardless of any
         * transformations.
         *
         * If the point size is set to 0.0 then drawing points with the
         * pipeline will have undefined results. This is the default value so
         * if an application wants to draw points it must make sure to use a
         * pipeline that has an explicit point size set on it.
         * @param point_size the new point size.
         */
        set_point_size(point_size: number): void;
        /**
         * Sets a new value for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given value will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function should be used to set uniforms that are of type
         * float. It can also be used to set a single member of a float array
         * uniform.
         * @param uniform_location The uniform's location identifier
         * @param value The new value for the uniform
         */
        set_uniform_1f(uniform_location: number, value: number): void;
        /**
         * Sets a new value for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given value will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function should be used to set uniforms that are of type
         * int. It can also be used to set a single member of a int array
         * uniform or a sampler uniform.
         * @param uniform_location The uniform's location identifier
         * @param value The new value for the uniform
         */
        set_uniform_1i(uniform_location: number, value: number): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any floating point type uniform,
         * including float arrays and float vectors. For example, to set a
         * single vec4 uniform you would use 4 for `n_components` and 1 for
         * `count`. To set an array of 8 float values, you could use 1 for
         * `n_components` and 8 for `count`.
         * @param uniform_location The uniform's location identifier
         * @param n_components The number of components in the corresponding uniform's type
         * @param count The number of values to set
         * @param value Pointer to the new values to set
         */
        set_uniform_float(
            uniform_location: number,
            n_components: number,
            count: number,
            value: number
        ): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any integer type uniform,
         * including int arrays and int vectors. For example, to set a single
         * ivec4 uniform you would use 4 for `n_components` and 1 for
         * `count`. To set an array of 8 int values, you could use 1 for
         * `n_components` and 8 for `count`.
         * @param uniform_location The uniform's location identifier
         * @param n_components The number of components in the corresponding uniform's type
         * @param count The number of values to set
         * @param value Pointer to the new values to set
         */
        set_uniform_int(
            uniform_location: number,
            n_components: number,
            count: number,
            value: number
        ): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any matrix type uniform, including
         * matrix arrays. For example, to set a single mat4 uniform you would
         * use 4 for `dimensions` and 1 for `count`. To set an array of 8
         * mat3 values, you could use 3 for `dimensions` and 8 for `count`.
         *
         * If `transpose` is %FALSE then the matrix is expected to be in
         * column-major order or if it is %TRUE then the matrix is in
         * row-major order. You can pass a #graphene_matrix_t by calling by passing
         * the result of graphene_matrix_to_float() in `value` and setting
         * `transpose` to %FALSE.
         * @param uniform_location The uniform's location identifier
         * @param dimensions The size of the matrix
         * @param count The number of values to set
         * @param transpose Whether to transpose the matrix
         * @param value Pointer to the new values to set
         */
        set_uniform_matrix(
            uniform_location: number,
            dimensions: number,
            count: number,
            transpose: boolean,
            value: number
        ): void;
        /**
         * Associates a linked CoglProgram with the given pipeline so that the
         * program can take full control of vertex and/or fragment processing.
         *
         * This is an example of how it can be used to associate an ARBfp
         * program with a #CoglPipeline:
         *
         * ```
         * CoglHandle shader;
         * CoglHandle program;
         * CoglPipeline *pipeline;
         *
         * shader = cogl_create_shader (COGL_SHADER_TYPE_FRAGMENT);
         * cogl_shader_source (shader,
         *                     "!!ARBfp1.0\n"
         *                     "MOV result.color,fragment.color;\n"
         *                     "END\n");
         *
         * program = cogl_create_program ();
         * cogl_program_attach_shader (program, shader);
         * cogl_program_link (program);
         *
         * pipeline = cogl_pipeline_new ();
         * cogl_pipeline_set_user_program (pipeline, program);
         *
         * cogl_set_source_color4ub (0xff, 0x00, 0x00, 0xff);
         * cogl_rectangle (0, 0, 100, 100);
         * ```
         *
         *
         * It is possibly worth keeping in mind that this API is not part of
         * the long term design for how we want to expose shaders to Cogl
         * developers (We are planning on deprecating the cogl_program and
         * cogl_shader APIs in favour of a "snippet" framework) but in the
         * meantime we hope this will handle most practical GLSL and ARBfp
         * requirements.
         * @param program A #CoglHandle to a linked CoglProgram
         */
        set_user_program(program: Handle): void;

        // Class property signals of Cogl-13.Cogl.Pipeline

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Pipeline extends Object {
        // Own properties of Cogl-13.Cogl.Pipeline

        static name: string;
        static $gtype: GObject.GType<Pipeline>;

        // Constructors of Cogl-13.Cogl.Pipeline

        constructor(config?: Pipeline.ConstructorProperties);
        /**
         * Allocates and initializes a default simple pipeline that will color
         * a primitive white.
         * @constructor
         * @param context a #CoglContext
         * @returns a pointer to a new #CoglPipeline
         */
        constructor(context: Context);
        /**
         * Allocates and initializes a default simple pipeline that will color
         * a primitive white.
         * @constructor
         * @param context a #CoglContext
         * @returns a pointer to a new #CoglPipeline
         */
        static new(context: Context): Pipeline;
        _init(config?: Pipeline.ConstructorProperties): void;
    }

    module Snippet {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {}
    }

    interface Snippet {
        // Owm methods of Cogl-13.Cogl.Snippet

        get_declarations(): string | null;
        get_hook(): SnippetHook;
        get_post(): string | null;
        get_pre(): string | null;
        get_replace(): string | null;
        /**
         * Sets a source string that will be inserted in the global scope of
         * the generated shader when this snippet is used on a pipeline. This
         * string is typically used to declare uniforms, attributes or
         * functions that will be used by the other parts of the snippets.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         * @param declarations The new source string for the declarations section   of this snippet.
         */
        set_declarations(declarations: string | null): void;
        /**
         * Sets a source string that will be inserted after the hook point in
         * the generated shader for the pipeline that this snippet is attached
         * to. Please see the documentation of each hook point in
         * #CoglPipeline for a description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         * @param post The new source string for the post section of this snippet.
         */
        set_post(post: string | null): void;
        /**
         * Sets a source string that will be inserted before the hook point in
         * the generated shader for the pipeline that this snippet is attached
         * to. Please see the documentation of each hook point in
         * #CoglPipeline for a description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         * @param pre The new source string for the pre section of this snippet.
         */
        set_pre(pre: string | null): void;
        /**
         * Sets a source string that will be used instead of any generated
         * source code or any previous snippets for this hook point. Please
         * see the documentation of each hook point in #CoglPipeline for a
         * description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         * @param replace The new source string for the replace section of this snippet.
         */
        set_replace(replace: string | null): void;

        // Class property signals of Cogl-13.Cogl.Snippet

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Snippet extends Object {
        // Own properties of Cogl-13.Cogl.Snippet

        static name: string;
        static $gtype: GObject.GType<Snippet>;

        // Constructors of Cogl-13.Cogl.Snippet

        constructor(config?: Snippet.ConstructorProperties);
        /**
         * Allocates and initializes a new snippet with the given source strings.
         * @constructor
         * @param hook The point in the pipeline that this snippet will wrap around   or replace.
         * @param declarations The source code for the declarations for this   snippet or %NULL. See cogl_snippet_set_declarations().
         * @param post The source code to run after the hook point where this   shader snippet is attached or %NULL. See cogl_snippet_set_post().
         * @returns a pointer to a new #CoglSnippet
         */
        constructor(
            hook: SnippetHook,
            declarations: string | null,
            post: string | null
        );
        /**
         * Allocates and initializes a new snippet with the given source strings.
         * @constructor
         * @param hook The point in the pipeline that this snippet will wrap around   or replace.
         * @param declarations The source code for the declarations for this   snippet or %NULL. See cogl_snippet_set_declarations().
         * @param post The source code to run after the hook point where this   shader snippet is attached or %NULL. See cogl_snippet_set_post().
         * @returns a pointer to a new #CoglSnippet
         */
        static new(
            hook: SnippetHook,
            declarations: string | null,
            post: string | null
        ): Snippet;
        _init(config?: Snippet.ConstructorProperties): void;
    }

    module Texture2D {
        // Constructor properties interface

        interface ConstructorProperties
            extends Texture.ConstructorProperties,
                Object.ConstructorProperties {}
    }

    interface Texture2D extends Texture {
        // Owm methods of Cogl-13.Cogl.Texture2D

        egl_image_external_alloc_finish(
            user_data: any | null,
            destroy: GLib.DestroyNotify
        ): void;
        egl_image_external_bind(): void;

        // Conflicting methods

        /**
         * Copies the pixel data from a cogl texture to system memory.
         *
         * <note>Don't pass the value of cogl_texture_get_rowstride() as the
         * `rowstride` argument, the rowstride should be the rowstride you
         * want for the destination `data` buffer not the rowstride of the
         * source texture</note>
         * @param format the #CoglPixelFormat to store the texture as.
         * @param rowstride the rowstride of `data` in bytes or pass 0 to calculate             from the bytes-per-pixel of `format` multiplied by the             `texture` width.
         * @param data memory location to write the `texture'`s contents, or %NULL to only query the data size through the return value.
         * @returns the size of the texture data in bytes
         */
        get_data(
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array | null
        ): number;

        // Overloads of get_data

        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string | null): any | null;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string | null): any | null;
        /**
         * `texture` a #CoglTexture.
         * Sets all the pixels for a given mipmap `level` by copying the pixel
         * data pointed to by the `data` argument into the given `texture`.
         *
         * `data` should point to the first pixel to copy corresponding
         * to the top left of the mipmap `level` being set.
         *
         * If `rowstride` equals 0 then it will be automatically calculated
         * from the width of the mipmap level and the bytes-per-pixel for the
         * given `format`.
         *
         * A mipmap `level` of 0 corresponds to the largest, base image of a
         * texture and `level` 1 is half the width and height of level 0. If
         * dividing any dimension of the previous level by two results in a
         * fraction then round the number down (floor()), but clamp to 1
         * something like this:
         *
         *
         * ```
         *  next_width = MAX (1, floor (prev_width));
         * ```
         *
         *
         * You can determine the number of mipmap levels for a given texture
         * like this:
         *
         *
         * ```
         *  n_levels = 1 + floor (log2 (max_dimension));
         * ```
         *
         *
         * Where %max_dimension is the larger of cogl_texture_get_width() and
         * cogl_texture_get_height().
         *
         * It is an error to pass a `level` number >= the number of levels that
         * `texture` can have according to the above calculation.
         *
         * <note>Since the storage for a #CoglTexture is allocated lazily then
         * if the given `texture` has not previously been allocated then this
         * api can return %FALSE and throw an exceptional `error` if there is
         * not enough memory to allocate storage for `texture`.</note>
         * @param format the #CoglPixelFormat used in the source `data` buffer.
         * @param rowstride rowstride of the source `data` buffer (computed from             the texture width and `format` if it equals 0)
         * @param data the source data, pointing to the first top-left pixel to set
         * @param level The mipmap level to update (Normally 0 for the largest,         base texture)
         * @returns %TRUE if the data upload was successful, and               %FALSE otherwise
         */
        set_data(
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array,
            level: number
        ): boolean;

        // Overloads of set_data

        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string | null, data: any | null): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string | null, data: any | null): void;

        // Class property signals of Cogl-13.Cogl.Texture2D

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Texture2D extends Object {
        // Own properties of Cogl-13.Cogl.Texture2D

        static name: string;
        static $gtype: GObject.GType<Texture2D>;

        // Constructors of Cogl-13.Cogl.Texture2D

        constructor(config?: Texture2D.ConstructorProperties);
        /**
         * Creates a low-level #CoglTexture2D texture based on data residing
         * in a #CoglBitmap.
         *
         * The storage for the texture is not allocated before this function
         * returns. You can call cogl_texture_allocate() to explicitly
         * allocate the underlying storage or preferably let Cogl
         * automatically allocate storage lazily when it may know more about
         * how the texture is being used and can optimize how it is allocated.
         *
         * The texture is still configurable until it has been allocated so
         * for example you can influence the internal format of the texture
         * using cogl_texture_set_components() and
         * cogl_texture_set_premultiplied().
         * @constructor
         * @param bitmap A #CoglBitmap
         * @returns A newly allocated #CoglTexture2D
         */
        static new_from_bitmap(bitmap: Bitmap): Texture2D;
        _init(config?: Texture2D.ConstructorProperties): void;
    }

    module Texture2DSliced {
        // Constructor properties interface

        interface ConstructorProperties
            extends Texture.ConstructorProperties,
                Object.ConstructorProperties {}
    }

    interface Texture2DSliced extends Texture {
        // Conflicting methods

        /**
         * Copies the pixel data from a cogl texture to system memory.
         *
         * <note>Don't pass the value of cogl_texture_get_rowstride() as the
         * `rowstride` argument, the rowstride should be the rowstride you
         * want for the destination `data` buffer not the rowstride of the
         * source texture</note>
         * @param format the #CoglPixelFormat to store the texture as.
         * @param rowstride the rowstride of `data` in bytes or pass 0 to calculate             from the bytes-per-pixel of `format` multiplied by the             `texture` width.
         * @param data memory location to write the `texture'`s contents, or %NULL to only query the data size through the return value.
         * @returns the size of the texture data in bytes
         */
        get_data(
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array | null
        ): number;

        // Overloads of get_data

        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string | null): any | null;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string | null): any | null;
        /**
         * `texture` a #CoglTexture.
         * Sets all the pixels for a given mipmap `level` by copying the pixel
         * data pointed to by the `data` argument into the given `texture`.
         *
         * `data` should point to the first pixel to copy corresponding
         * to the top left of the mipmap `level` being set.
         *
         * If `rowstride` equals 0 then it will be automatically calculated
         * from the width of the mipmap level and the bytes-per-pixel for the
         * given `format`.
         *
         * A mipmap `level` of 0 corresponds to the largest, base image of a
         * texture and `level` 1 is half the width and height of level 0. If
         * dividing any dimension of the previous level by two results in a
         * fraction then round the number down (floor()), but clamp to 1
         * something like this:
         *
         *
         * ```
         *  next_width = MAX (1, floor (prev_width));
         * ```
         *
         *
         * You can determine the number of mipmap levels for a given texture
         * like this:
         *
         *
         * ```
         *  n_levels = 1 + floor (log2 (max_dimension));
         * ```
         *
         *
         * Where %max_dimension is the larger of cogl_texture_get_width() and
         * cogl_texture_get_height().
         *
         * It is an error to pass a `level` number >= the number of levels that
         * `texture` can have according to the above calculation.
         *
         * <note>Since the storage for a #CoglTexture is allocated lazily then
         * if the given `texture` has not previously been allocated then this
         * api can return %FALSE and throw an exceptional `error` if there is
         * not enough memory to allocate storage for `texture`.</note>
         * @param format the #CoglPixelFormat used in the source `data` buffer.
         * @param rowstride rowstride of the source `data` buffer (computed from             the texture width and `format` if it equals 0)
         * @param data the source data, pointing to the first top-left pixel to set
         * @param level The mipmap level to update (Normally 0 for the largest,         base texture)
         * @returns %TRUE if the data upload was successful, and               %FALSE otherwise
         */
        set_data(
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array,
            level: number
        ): boolean;

        // Overloads of set_data

        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string | null, data: any | null): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string | null, data: any | null): void;

        // Class property signals of Cogl-13.Cogl.Texture2DSliced

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Texture2DSliced extends Object {
        // Own properties of Cogl-13.Cogl.Texture2DSliced

        static name: string;
        static $gtype: GObject.GType<Texture2DSliced>;

        // Constructors of Cogl-13.Cogl.Texture2DSliced

        constructor(config?: Texture2DSliced.ConstructorProperties);
        /**
         * Creates a new #CoglTexture2DSliced texture based on data residing
         * in a bitmap.
         *
         * A #CoglTexture2DSliced may internally be comprised of 1 or more
         * #CoglTexture2D textures depending on GPU limitations.  For example
         * if the GPU only supports power-of-two sized textures then a sliced
         * texture will turn a non-power-of-two size into a combination of
         * smaller power-of-two sized textures. If the requested texture size
         * is larger than is supported by the hardware then the texture will
         * be sliced into smaller textures that can be accessed by the
         * hardware.
         *
         * `max_waste` is used as a threshold for recursively slicing the
         * right-most or bottom-most slices into smaller sizes until the
         * wasted padding at the bottom and right of the textures is less than
         * specified. A negative `max_waste` will disable slicing.
         *
         * The storage for the texture is not allocated before this function
         * returns. You can call cogl_texture_allocate() to explicitly
         * allocate the underlying storage or let Cogl automatically allocate
         * storage lazily.
         *
         * <note>It's possible for the allocation of a sliced texture to fail
         * later due to impossible slicing constraints if a negative
         * `max_waste` value is given. If the given virtual texture size is
         * larger than is supported by the hardware but slicing is disabled
         * the texture size would be too large to handle.</note>
         * @constructor
         * @param bmp A #CoglBitmap
         * @param max_waste The threshold of how wide a strip of wasted texels             are allowed along the right and bottom textures before             they must be sliced to reduce the amount of waste. A             negative can be passed to disable slicing.
         * @returns A newly created #CoglTexture2DSliced               or %NULL on failure and @error will be updated.
         */
        static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced;
        _init(config?: Texture2DSliced.ConstructorProperties): void;
    }

    interface Color {
        // Owm methods of Cogl-13.Cogl.Color

        /**
         * Creates a copy of `color`
         * @returns a newly-allocated #CoglColor. Use cogl_color_free()   to free the allocate resources
         */
        copy(): Color;
        /**
         * Frees the resources allocated by cogl_color_new() and cogl_color_copy()
         */
        free(): void;
        /**
         * Retrieves the alpha channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the alpha channel of the passed color
         */
        get_alpha(): number;
        /**
         * Retrieves the alpha channel of `color` as a byte value
         * between 0 and 255
         * @returns the alpha channel of the passed color
         */
        get_alpha_byte(): number;
        /**
         * Retrieves the alpha channel of `color` as a floating point
         * value between 0.0 and 1.0
         * @returns the alpha channel of the passed color
         */
        get_alpha_float(): number;
        /**
         * Retrieves the blue channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the blue channel of the passed color
         */
        get_blue(): number;
        /**
         * Retrieves the blue channel of `color` as a byte value
         * between 0 and 255
         * @returns the blue channel of the passed color
         */
        get_blue_byte(): number;
        /**
         * Retrieves the blue channel of `color` as a floating point
         * value between 0.0 and 1.0
         * @returns the blue channel of the passed color
         */
        get_blue_float(): number;
        /**
         * Retrieves the green channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the green channel of the passed color
         */
        get_green(): number;
        /**
         * Retrieves the green channel of `color` as a byte value
         * between 0 and 255
         * @returns the green channel of the passed color
         */
        get_green_byte(): number;
        /**
         * Retrieves the green channel of `color` as a floating point
         * value between 0.0 and 1.0
         * @returns the green channel of the passed color
         */
        get_green_float(): number;
        /**
         * Retrieves the red channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the red channel of the passed color
         */
        get_red(): number;
        /**
         * Retrieves the red channel of `color` as a byte value
         * between 0 and 255
         * @returns the red channel of the passed color
         */
        get_red_byte(): number;
        /**
         * Retrieves the red channel of `color` as a floating point
         * value between 0.0 and 1.0
         * @returns the red channel of the passed color
         */
        get_red_float(): number;
        /**
         * Sets the values of the passed channels into a #CoglColor
         * @param red value of the red channel, between 0 and 1.0
         * @param green value of the green channel, between 0 and 1.0
         * @param blue value of the blue channel, between 0 and 1.0
         * @param alpha value of the alpha channel, between 0 and 1.0
         */
        init_from_4f(
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;
        /**
         * Sets the values of the passed channels into a #CoglColor
         * @param color_array a pointer to an array of 4 float color components
         */
        init_from_4fv(color_array: number): void;
        /**
         * Sets the values of the passed channels into a #CoglColor.
         * @param red value of the red channel, between 0 and 255
         * @param green value of the green channel, between 0 and 255
         * @param blue value of the blue channel, between 0 and 255
         * @param alpha value of the alpha channel, between 0 and 255
         */
        init_from_4ub(
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;
        /**
         * Converts a non-premultiplied color to a pre-multiplied color. For
         * example, semi-transparent red is (1.0, 0, 0, 0.5) when non-premultiplied
         * and (0.5, 0, 0, 0.5) when premultiplied.
         */
        premultiply(): void;
        /**
         * Sets the alpha channel of `color` to `alpha`.
         * @param alpha a float value between 0.0f and 1.0f
         */
        set_alpha(alpha: number): void;
        /**
         * Sets the alpha channel of `color` to `alpha`.
         * @param alpha a byte value between 0 and 255
         */
        set_alpha_byte(alpha: number): void;
        /**
         * Sets the alpha channel of `color` to `alpha`.
         * @param alpha a float value between 0.0f and 1.0f
         */
        set_alpha_float(alpha: number): void;
        /**
         * Sets the blue channel of `color` to `blue`.
         * @param blue a float value between 0.0f and 1.0f
         */
        set_blue(blue: number): void;
        /**
         * Sets the blue channel of `color` to `blue`.
         * @param blue a byte value between 0 and 255
         */
        set_blue_byte(blue: number): void;
        /**
         * Sets the blue channel of `color` to `blue`.
         * @param blue a float value between 0.0f and 1.0f
         */
        set_blue_float(blue: number): void;
        /**
         * Sets the green channel of `color` to `green`.
         * @param green a float value between 0.0f and 1.0f
         */
        set_green(green: number): void;
        /**
         * Sets the green channel of `color` to `green`.
         * @param green a byte value between 0 and 255
         */
        set_green_byte(green: number): void;
        /**
         * Sets the green channel of `color` to `green`.
         * @param green a float value between 0.0f and 1.0f
         */
        set_green_float(green: number): void;
        /**
         * Sets the red channel of `color` to `red`.
         * @param red a float value between 0.0f and 1.0f
         */
        set_red(red: number): void;
        /**
         * Sets the red channel of `color` to `red`.
         * @param red a byte value between 0 and 255
         */
        set_red_byte(red: number): void;
        /**
         * Sets the red channel of `color` to `red`.
         * @param red a float value between 0.0f and 1.0f
         */
        set_red_float(red: number): void;
        /**
         * Converts `color` to the HLS format.
         *
         * The `hue` value is in the 0 .. 360 range. The `luminance` and
         * `saturation` values are in the 0 .. 1 range.
         */
        to_hsl(): [
            /* hue */ number,
            /* saturation */ number,
            /* luminance */ number
        ];
        /**
         * Converts a pre-multiplied color to a non-premultiplied color. For
         * example, semi-transparent red is (0.5, 0, 0, 0.5) when premultiplied
         * and (1.0, 0, 0, 0.5) when non-premultiplied.
         */
        unpremultiply(): void;
    }

    /**
     * A structure for holding a color definition. The contents of
     * the CoglColor structure are private and should never by accessed
     * directly.
     * @record
     */
    class Color {
        // Own properties of Cogl-13.Cogl.Color

        static name: string;

        // Constructors of Cogl-13.Cogl.Color

        /**
         * Creates a new (empty) color
         * @constructor
         * @returns a newly-allocated #CoglColor. Use cogl_color_free()   to free the allocated resources
         */
        constructor();
        /**
         * Creates a new (empty) color
         * @constructor
         * @returns a newly-allocated #CoglColor. Use cogl_color_free()   to free the allocated resources
         */
        static new(): Color;
        /**
         * Compares two #CoglColor<!-- -->s and checks if they are the same.
         *
         * This function can be passed to g_hash_table_new() as the `key_equal_func`
         * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
         * @param v1 a #CoglColor
         * @param v2 a #CoglColor
         * @returns %TRUE if the two colors are the same.
         */
        static equal(v1: any | null, v2: any | null): boolean;
        /**
         * Converts a color expressed in HLS (hue, luminance and saturation)
         * values into a #CoglColor.
         * @param hue hue value, in the 0 .. 360 range
         * @param saturation saturation value, in the 0 .. 1 range
         * @param luminance luminance value, in the 0 .. 1 range
         */
        static init_from_hsl(
            hue: number,
            saturation: number,
            luminance: number
        ): /* color */ Color;
    }

    interface DebugObjectTypeInfo {
        // Own fields of Cogl-13.Cogl.DebugObjectTypeInfo

        /**
         * A human readable name for the type.
         * @field
         */
        name: string | null;
        /**
         * The number of objects of this type that are
         *   currently in use
         * @field
         */
        instance_count: number;
    }

    /**
     * This struct is used to pass information to the callback when
     * cogl_debug_object_foreach_type() is called.
     * @record
     */
    class DebugObjectTypeInfo {
        // Own properties of Cogl-13.Cogl.DebugObjectTypeInfo

        static name: string;
    }

    interface DmaBufHandle {}

    /**
     * An opaque type that tracks the lifetime of a DMA buffer fd. Release
     * with cogl_dma_buf_handle_free().
     * @record
     */
    class DmaBufHandle {
        // Own properties of Cogl-13.Cogl.DmaBufHandle

        static name: string;
    }

    interface FrameClosure {}

    /**
     * An opaque type that tracks a #CoglFrameCallback and associated user
     * data. A #CoglFrameClosure pointer will be returned from
     * cogl_onscreen_add_frame_callback() and it allows you to remove a
     * callback later using cogl_onscreen_remove_frame_callback().
     * @record
     */
    class FrameClosure {
        // Own properties of Cogl-13.Cogl.FrameClosure

        static name: string;
    }

    interface FramebufferClass {
        // Own fields of Cogl-13.Cogl.FramebufferClass

        allocate: (framebuffer: Framebuffer) => boolean;
        is_y_flipped: (framebuffer: Framebuffer) => boolean;
    }

    abstract class FramebufferClass {
        // Own properties of Cogl-13.Cogl.FramebufferClass

        static name: string;
    }

    interface FramebufferDriverConfig {}

    class FramebufferDriverConfig {
        // Own properties of Cogl-13.Cogl.FramebufferDriverConfig

        static name: string;
    }

    interface OffscreenClass {
        // Own fields of Cogl-13.Cogl.OffscreenClass

        parent_class: FramebufferClass;
    }

    abstract class OffscreenClass {
        // Own properties of Cogl-13.Cogl.OffscreenClass

        static name: string;
    }

    interface OnscreenClass {
        // Own fields of Cogl-13.Cogl.OnscreenClass

        bind: (onscreen: Onscreen) => void;
        swap_buffers_with_damage: (
            onscreen: Onscreen,
            rectangles: number,
            n_rectangles: number,
            info: FrameInfo
        ) => void;
        swap_region: (
            onscreen: Onscreen,
            rectangles: number,
            n_rectangles: number,
            info: FrameInfo
        ) => void;
        queue_damage_region: (
            onscreen: Onscreen,
            rectangles: number,
            n_rectangles: number
        ) => void;
        direct_scanout: (
            onscreen: Onscreen,
            scanout: Scanout,
            info: FrameInfo
        ) => boolean;
        get_buffer_age: (onscreen: Onscreen) => number;
    }

    abstract class OnscreenClass {
        // Own properties of Cogl-13.Cogl.OnscreenClass

        static name: string;
    }

    interface OnscreenDirtyClosure {}

    /**
     * An opaque type that tracks a #CoglOnscreenDirtyCallback and associated
     * user data. A #CoglOnscreenDirtyClosure pointer will be returned from
     * cogl_onscreen_add_dirty_callback() and it allows you to remove a
     * callback later using cogl_onscreen_remove_dirty_callback().
     * @record
     */
    class OnscreenDirtyClosure {
        // Own properties of Cogl-13.Cogl.OnscreenDirtyClosure

        static name: string;
    }

    interface OnscreenDirtyInfo {
        // Own fields of Cogl-13.Cogl.OnscreenDirtyInfo

        /**
         * Left edge of the dirty rectangle
         * @field
         */
        x: number;
        /**
         * Top edge of the dirty rectangle, measured from the top of the window
         * @field
         */
        y: number;
        /**
         * Width of the dirty rectangle
         * @field
         */
        width: number;
        /**
         * Height of the dirty rectangle
         * @field
         */
        height: number;
    }

    /**
     * A structure passed to callbacks registered using
     * cogl_onscreen_add_dirty_callback(). The members describe a
     * rectangle within the onscreen buffer that should be redrawn.
     * @record
     */
    class OnscreenDirtyInfo {
        // Own properties of Cogl-13.Cogl.OnscreenDirtyInfo

        static name: string;
    }

    interface Scanout {}

    class Scanout {
        // Own properties of Cogl-13.Cogl.Scanout

        static name: string;

        // Constructors of Cogl-13.Cogl.Scanout

        static error_quark(): GLib.Quark;
    }

    interface TextureVertex {
        // Own fields of Cogl-13.Cogl.TextureVertex

        /**
         * Model x-coordinate
         * @field
         */
        x: number;
        /**
         * Model y-coordinate
         * @field
         */
        y: number;
        /**
         * Model z-coordinate
         * @field
         */
        z: number;
        /**
         * Texture x-coordinate
         * @field
         */
        tx: number;
        /**
         * Texture y-coordinate
         * @field
         */
        ty: number;
        /**
         * The color to use at this vertex. This is ignored if
         *   use_color is %FALSE when calling cogl_polygon()
         * @field
         */
        color: Color;
    }

    /**
     * Used to specify vertex information when calling cogl_polygon()
     * @record
     */
    class TextureVertex {
        // Own properties of Cogl-13.Cogl.TextureVertex

        static name: string;
    }

    interface TimestampQuery {}

    class TimestampQuery {
        // Own properties of Cogl-13.Cogl.TimestampQuery

        static name: string;
    }

    interface TraceContext {}

    class TraceContext {
        // Own properties of Cogl-13.Cogl.TraceContext

        static name: string;
    }

    interface TraceHead {
        // Own fields of Cogl-13.Cogl.TraceHead

        begin_time: number;
        name: string | null;
        description: string | null;
    }

    class TraceHead {
        // Own properties of Cogl-13.Cogl.TraceHead

        static name: string;
    }

    interface UserDataKey {
        // Own fields of Cogl-13.Cogl.UserDataKey

        /**
         * ignored.
         * @field
         */
        unused: number;
    }

    /**
     * A #CoglUserDataKey is used to declare a key for attaching data to a
     * #CoglObject using cogl_object_set_user_data. The typedef only exists as a
     * formality to make code self documenting since only the unique address of a
     * #CoglUserDataKey is used.
     *
     * Typically you would declare a static #CoglUserDataKey and set private data
     * on an object something like this:
     *
     *
     * ```
     * static CoglUserDataKey path_private_key;
     *
     * static void
     * destroy_path_private_cb (void *data)
     * {
     *   g_free (data);
     * }
     *
     * static void
     * my_path_set_data (CoglPipeline *pipeline, void *data)
     * {
     *   cogl_object_set_user_data (COGL_OBJECT (pipeline),
     *                              &private_key,
     *                              data,
     *                              destroy_pipeline_private_cb);
     * }
     * ```
     *
     * @record
     */
    class UserDataKey {
        // Own properties of Cogl-13.Cogl.UserDataKey

        static name: string;
    }

    interface _ColorSizeCheck {
        // Own fields of Cogl-13.Cogl._ColorSizeCheck

        compile_time_assert_CoglColor_size: number[];
    }

    class _ColorSizeCheck {
        // Own properties of Cogl-13.Cogl._ColorSizeCheck

        static name: string;
    }

    interface _TextureVertexSizeCheck {
        // Own fields of Cogl-13.Cogl._TextureVertexSizeCheck

        compile_time_assert_CoglTextureVertex_size: number[];
    }

    class _TextureVertexSizeCheck {
        // Own properties of Cogl-13.Cogl._TextureVertexSizeCheck

        static name: string;
    }

    type Angle = number;
    type Handle = any;
    type PipelineKey = string;
    type UserDataDestroyCallback = GLib.DestroyNotify;
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

export default Cogl;
// END

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './st-13-import.d.ts';
/**
 * St-13
 */

import type Meta from './meta-13.js';
import type xlib from './xlib-2.0.js';
import type xfixes from './xfixes-4.0.js';
import type Mtk from './mtk-13.js';
import type cairo from './cairo-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Graphene from './graphene-1.0.js';
import type GDesktopEnums from './gdesktopenums-3.0.js';
import type CoglPango from './coglpango-13.js';
import type PangoCairo from './pangocairo-1.0.js';
import type Pango from './pango-1.0.js';
import type HarfBuzz from './harfbuzz-0.0.js';
import type freetype2 from './freetype2-2.0.js';
import type Gio from './gio-2.0.js';
import type Cogl from './cogl-13.js';
import type GL from './gl-1.0.js';
import type Clutter from './clutter-13.js';
import type Json from './json-1.0.js';
import type Atk from './atk-1.0.js';
import type GdkPixbuf from './gdkpixbuf-2.0.js';
import type GModule from './gmodule-2.0.js';
import type Cally from './cally-13.js';

export namespace St {
    enum BackgroundSize {
        AUTO,
        CONTAIN,
        COVER,
        FIXED,
    }
    enum ClipboardType {
        PRIMARY,
        CLIPBOARD,
    }
    /**
     * Used to target a particular corner of a #StThemeNode element.
     */
    enum Corner {
        /**
         * The top-right corner.
         */
        TOPLEFT,
        /**
         * The top-right corner.
         */
        TOPRIGHT,
        /**
         * The bottom-right corner.
         */
        BOTTOMRIGHT,
        /**
         * The bottom-left corner.
         */
        BOTTOMLEFT,
    }
    /**
     * Enumeration for focus direction.
     */
    enum DirectionType {
        /**
         * Move forward.
         */
        TAB_FORWARD,
        /**
         * Move backward.
         */
        TAB_BACKWARD,
        /**
         * Move up.
         */
        UP,
        /**
         * Move down.
         */
        DOWN,
        /**
         * Move left.
         */
        LEFT,
        /**
         * Move right.
         */
        RIGHT,
    }
    /**
     * Used to specify options when rendering gradients.
     */
    enum GradientType {
        /**
         * No gradient.
         */
        NONE,
        /**
         * A vertical gradient.
         */
        VERTICAL,
        /**
         * A horizontal gradient.
         */
        HORIZONTAL,
        /**
         * Lookup the style requested in the icon name.
         */
        RADIAL,
    }
    /**
     * Used to specify options when looking up icons.
     */
    enum IconStyle {
        /**
         * Lookup the style requested in the icon name.
         */
        REQUESTED,
        /**
         * Try to always load regular icons, even when symbolic
         *   icon names are given.
         */
        REGULAR,
        /**
         * Try to always load symbolic icons, even when regular
         *   icon names are given.
         */
        SYMBOLIC,
    }
    /**
     * Error codes for StIconTheme operations.
     */
    enum IconThemeError {
        /**
         * The icon specified does not exist in the theme
         */
        NOT_FOUND,
        /**
         * An unspecified error occurred.
         */
        FAILED,
    }
    enum PolicyType {
        ALWAYS,
        AUTOMATIC,
        NEVER,
        EXTERNAL,
    }
    /**
     * Used to target a particular side of a #StThemeNode element.
     */
    enum Side {
        /**
         * The top side.
         */
        TOP,
        /**
         * The right side.
         */
        RIGHT,
        /**
         * The bottom side.
         */
        BOTTOM,
        /**
         * The left side.
         */
        LEFT,
    }
    enum SystemColorScheme {
        DEFAULT,
        PREFER_DARK,
        PREFER_LIGHT,
    }
    /**
     * Used to align text in a label.
     */
    enum TextAlign {
        /**
         * Text is aligned at the beginning of the label.
         */
        LEFT,
        /**
         * Text is aligned in the middle of the label.
         */
        CENTER,
        /**
         * Text is aligned at the end of the label.
         */
        RIGHT,
        JUSTIFY,
    }
    enum TextureCachePolicy {
        NONE,
        FOREVER,
    }
    /**
     * A mask representing which mouse buttons an #StButton responds to.
     * @bitfield
     */
    enum ButtonMask {
        /**
         * button 1 (left)
         */
        ONE,
        /**
         * button 2 (middle)
         */
        TWO,
        /**
         * button 3 (right)
         */
        THREE,
    }
    /**
     * Used to specify options for st_icon_theme_lookup_icon()
     * @bitfield
     */
    enum IconLookupFlags {
        /**
         * Never get SVG icons, even if gdk-pixbuf
         *   supports them. Cannot be used together with %ST_ICON_LOOKUP_FORCE_SVG.
         */
        NO_SVG,
        /**
         * Get SVG icons, even if gdk-pixbuf
         *   doesn’t support them.
         *   Cannot be used together with %ST_ICON_LOOKUP_NO_SVG.
         */
        FORCE_SVG,
        /**
         * Try to shorten icon name at '-'
         *   characters before looking at inherited themes. This flag is only
         *   supported in functions that take a single icon name. For more general
         *   fallback, see st_icon_theme_choose_icon().
         */
        GENERIC_FALLBACK,
        /**
         * Always get the icon scaled to the
         *   requested size.
         */
        FORCE_SIZE,
        /**
         * Try to always load regular icons, even
         *   when symbolic icon names are given.
         */
        FORCE_REGULAR,
        /**
         * Try to always load symbolic icons, even
         *   when regular icon names are given.
         */
        FORCE_SYMBOLIC,
        /**
         * Try to load a variant of the icon for left-to-right
         *   text direction.
         */
        DIR_LTR,
        /**
         * Try to load a variant of the icon for right-to-left
         *   text direction.
         */
        DIR_RTL,
    }
    /**
     * Flags used to determine the decoration of text.
     *
     * Not that neither %ST_TEXT_DECORATION_OVERLINE or %ST_TEXT_DECORATION_BLINK
     * are implemented, currently.
     * @bitfield
     */
    enum TextDecoration {
        UNDERLINE,
        /**
         * Text is overlined
         */
        OVERLINE,
        /**
         * Text is striked out
         */
        LINE_THROUGH,
        /**
         * Text blinks
         */
        BLINK,
    }
    /**
     * Creates a string describing `actor,` for use in debugging. This
     * includes the class name and actor name (if any), plus if `actor`
     * is an #StWidget, its style class and pseudo class names.
     * @param actor a #ClutterActor
     * @returns the debug name.
     */
    function describe_actor(actor: Clutter.Actor): string | null;
    function icon_theme_error_quark(): GLib.Quark;
    /**
     * Callback function called when text is retrieved from the clipboard.
     * @callback
     * @param clipboard A #StClipboard
     * @param text text from the clipboard
     */
    interface ClipboardCallbackFunc {
        (clipboard: Clipboard, text: string | null): void;
    }
    /**
     * Callback function called when content is retrieved from the clipboard.
     * @callback
     * @param clipboard A #StClipboard
     * @param bytes content from the clipboard
     */
    interface ClipboardContentCallbackFunc {
        (clipboard: Clipboard, bytes: GLib.Bytes): void;
    }
    interface EntryCursorFunc {
        (entry: Entry, use_ibeam: boolean, data: any | null): void;
    }
    module Scrollable {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of St-13.St.Scrollable

            /**
             * The horizontal #StAdjustment used by the #StScrollable.
             *
             * Implementations should override this property to provide read-write
             * access to the #StAdjustment.
             *
             * JavaScript code may override this as demonstrated below:
             *
             *
             * ```<!-- language="JavaScript" -->
             * export const MyScrollable = GObject.registerClass({
             *     Properties: {
             *         'hadjustment': GObject.ParamSpec.override(
             *             'hadjustment',
             *             St.Scrollable
             *         )
             *     }
             * }, class MyScrollable extends St.Scrollable {
             *
             *     get hadjustment() {
             *         return this._hadjustment || null;
             *     }
             *
             *     set hadjustment(adjustment) {
             *         if (this.hadjustment === adjustment)
             *             return;
             *
             *         this._hadjustment = adjustment;
             *         this.notify('hadjustment');
             *     }
             * });
             * ```
             *
             */
            hadjustment?: Adjustment | null;
            /**
             * The vertical #StAdjustment used by the #StScrollable.
             *
             * Implementations should override this property to provide read-write
             * access to the #StAdjustment.
             *
             * See #StScrollable:hadjustment for an example of how to override this
             * property in JavaScript code.
             */
            vadjustment?: Adjustment | null;
        }
    }

    interface Scrollable {
        // Own properties of St-13.St.Scrollable

        /**
         * The horizontal #StAdjustment used by the #StScrollable.
         *
         * Implementations should override this property to provide read-write
         * access to the #StAdjustment.
         *
         * JavaScript code may override this as demonstrated below:
         *
         *
         * ```<!-- language="JavaScript" -->
         * export const MyScrollable = GObject.registerClass({
         *     Properties: {
         *         'hadjustment': GObject.ParamSpec.override(
         *             'hadjustment',
         *             St.Scrollable
         *         )
         *     }
         * }, class MyScrollable extends St.Scrollable {
         *
         *     get hadjustment() {
         *         return this._hadjustment || null;
         *     }
         *
         *     set hadjustment(adjustment) {
         *         if (this.hadjustment === adjustment)
         *             return;
         *
         *         this._hadjustment = adjustment;
         *         this.notify('hadjustment');
         *     }
         * });
         * ```
         *
         */
        hadjustment: Adjustment;
        /**
         * The vertical #StAdjustment used by the #StScrollable.
         *
         * Implementations should override this property to provide read-write
         * access to the #StAdjustment.
         *
         * See #StScrollable:hadjustment for an example of how to override this
         * property in JavaScript code.
         */
        vadjustment: Adjustment;

        // Owm methods of St-13.St.Scrollable

        get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the #StScrollable
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @param hadjustment the horizontal #StAdjustment
         * @param vadjustment the vertical #StAdjustment
         */
        set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;

        // Own virtual methods of St-13.St.Scrollable

        vfunc_get_adjustments(
            hadjustment: Adjustment,
            vadjustment: Adjustment
        ): void;
        /**
         * This method should be implemented by classes implementing the #StScrollable
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @virtual
         * @param hadjustment the horizontal #StAdjustment
         * @param vadjustment the vertical #StAdjustment
         */
        vfunc_set_adjustments(
            hadjustment: Adjustment,
            vadjustment: Adjustment
        ): void;

        // Class property signals of St-13.St.Scrollable

        connect(
            sigName: 'notify::hadjustment',
            callback: ($obj: Scrollable, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hadjustment',
            callback: ($obj: Scrollable, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hadjustment', ...args: any[]): void;
        connect(
            sigName: 'notify::vadjustment',
            callback: ($obj: Scrollable, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::vadjustment',
            callback: ($obj: Scrollable, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::vadjustment', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Scrollable extends GObject.Object {
        // Own properties of St-13.St.Scrollable

        static name: string;
        static $gtype: GObject.GType<Scrollable>;

        // Constructors of St-13.St.Scrollable

        constructor(config?: Scrollable.ConstructorProperties);
        _init(config?: Scrollable.ConstructorProperties): void;
    }

    module Adjustment {
        // Signal callback interfaces

        /**
         * Signal callback interface for `changed`
         */
        interface ChangedSignalCallback {
            ($obj: Adjustment): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Clutter.Animatable.ConstructorProperties,
                GObject.Object.ConstructorProperties {
            // Own constructor properties of St-13.St.Adjustment

            /**
             * If the adjustment is used as #ClutterAnimatable for a
             * #ClutterPropertyTransition, this property is used to determine which
             * monitor should drive the animation.
             */
            actor?: Clutter.Actor | null;
            /**
             * The minimum value of the adjustment.
             */
            lower?: number | null;
            /**
             * The page increment of the adjustment.
             */
            page_increment?: number | null;
            /**
             * The page size of the adjustment.
             *
             * Note that the page-size is irrelevant and should be set to zero if the
             * adjustment is used for a simple scalar value.
             */
            page_size?: number | null;
            /**
             * The step increment of the adjustment.
             */
            step_increment?: number | null;
            /**
             * The maximum value of the adjustment.
             *
             * Note that values will be restricted by `upper - page-size` if
             * #StAdjustment:page-size is non-zero.
             */
            upper?: number | null;
            /**
             * The value of the adjustment.
             */
            value?: number | null;
        }
    }

    interface Adjustment extends Clutter.Animatable {
        // Own properties of St-13.St.Adjustment

        /**
         * If the adjustment is used as #ClutterAnimatable for a
         * #ClutterPropertyTransition, this property is used to determine which
         * monitor should drive the animation.
         */
        actor: Clutter.Actor;
        /**
         * The minimum value of the adjustment.
         */
        lower: number;
        /**
         * The page increment of the adjustment.
         */
        page_increment: number;
        /**
         * The page size of the adjustment.
         *
         * Note that the page-size is irrelevant and should be set to zero if the
         * adjustment is used for a simple scalar value.
         */
        page_size: number;
        /**
         * The step increment of the adjustment.
         */
        step_increment: number;
        /**
         * The maximum value of the adjustment.
         *
         * Note that values will be restricted by `upper - page-size` if
         * #StAdjustment:page-size is non-zero.
         */
        upper: number;
        /**
         * The value of the adjustment.
         */
        value: number;

        // Own fields of St-13.St.Adjustment

        parent_instance: GObject.Object;

        // Owm methods of St-13.St.Adjustment

        /**
         * Add a #ClutterTransition for the adjustment. If the transition stops, it will
         * be automatically removed if #ClutterTransition:remove-on-complete is %TRUE.
         * @param name a unique name for the transition
         * @param transition a #ClutterTransition
         */
        add_transition(
            name: string | null,
            transition: Clutter.Transition
        ): void;
        /**
         * Adjusts the adjustment using delta values from a scroll event.
         * You should use this instead of using st_adjustment_set_value()
         * as this method will tweak the values directly using the same
         * math as GTK+, to ensure that scrolling is consistent across
         * the environment.
         * @param delta A delta, retrieved directly from clutter_event_get_scroll_delta()   or similar.
         */
        adjust_for_scroll_event(delta: number): void;
        /**
         * Set #StAdjustment:value to a value clamped between `lower` and `upper`. The
         * clamping described by st_adjustment_set_value() still applies.
         * @param lower the lower value
         * @param upper the upper value
         */
        clamp_page(lower: number, upper: number): void;
        /**
         * Get the #ClutterTransition for `name` previously added with
         * st_adjustment_add_transition() or %NULL if not found.
         * @param name a transition name
         * @returns a #ClutterTransition
         */
        get_transition(name: string | null): Clutter.Transition | null;
        /**
         * Gets the current value of the adjustment. See st_adjustment_set_value().
         * @returns The current value of the adjustment
         */
        get_value(): number;
        /**
         * Gets all of `adjustment'`s values at once.
         */
        get_values(): [
            /* value */ number,
            /* lower */ number,
            /* upper */ number,
            /* step_increment */ number,
            /* page_increment */ number,
            /* page_size */ number
        ];
        remove_transition(name: string | null): void;
        /**
         * Sets the #StAdjustment value. The value is clamped to lie between
         * #StAdjustment:lower and #StAdjustment:upper - #StAdjustment:page-size.
         * @param value the new value
         */
        set_value(value: number): void;
        /**
         * Sets all properties of the adjustment at once.
         *
         * Use this function to avoid multiple emissions of the #GObject::notify and
         * #StAdjustment::changed signals. See st_adjustment_set_lower() for an
         * alternative way of compressing multiple emissions of #GObject::notify into
         * one.
         * @param value the new value
         * @param lower the new minimum value
         * @param upper the new maximum value
         * @param step_increment the new step increment
         * @param page_increment the new page increment
         * @param page_size the new page size
         */
        set_values(
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number
        ): void;

        // Own virtual methods of St-13.St.Adjustment

        vfunc_changed(): void;

        // Own signals of St-13.St.Adjustment

        connect(
            sigName: 'changed',
            callback: Adjustment.ChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'changed',
            callback: Adjustment.ChangedSignalCallback
        ): number;
        emit(sigName: 'changed', ...args: any[]): void;

        // Class property signals of St-13.St.Adjustment

        connect(
            sigName: 'notify::actor',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actor',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actor', ...args: any[]): void;
        connect(
            sigName: 'notify::lower',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::lower',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::lower', ...args: any[]): void;
        connect(
            sigName: 'notify::page-increment',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::page-increment',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::page-increment', ...args: any[]): void;
        connect(
            sigName: 'notify::page-size',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::page-size',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::page-size', ...args: any[]): void;
        connect(
            sigName: 'notify::step-increment',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::step-increment',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::step-increment', ...args: any[]): void;
        connect(
            sigName: 'notify::upper',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::upper',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::upper', ...args: any[]): void;
        connect(
            sigName: 'notify::value',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::value',
            callback: ($obj: Adjustment, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::value', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Adjustment extends GObject.Object {
        // Own properties of St-13.St.Adjustment

        static name: string;
        static $gtype: GObject.GType<Adjustment>;

        // Constructors of St-13.St.Adjustment

        constructor(config?: Adjustment.ConstructorProperties);
        /**
         * Creates a new #StAdjustment
         * @constructor
         * @param actor a #ClutterActor
         * @param value the initial value
         * @param lower the minimum value
         * @param upper the maximum value
         * @param step_increment the step increment
         * @param page_increment the page increment
         * @param page_size the page size
         * @returns a new #StAdjustment
         */
        constructor(
            actor: Clutter.Actor | null,
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number
        );
        /**
         * Creates a new #StAdjustment
         * @constructor
         * @param actor a #ClutterActor
         * @param value the initial value
         * @param lower the minimum value
         * @param upper the maximum value
         * @param step_increment the step increment
         * @param page_increment the page increment
         * @param page_size the page size
         * @returns a new #StAdjustment
         */
        static new(
            actor: Clutter.Actor | null,
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number
        ): Adjustment;
        _init(config?: Adjustment.ConstructorProperties): void;
    }

    module Bin {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Widget.ConstructorProperties {
            // Own constructor properties of St-13.St.Bin

            /**
             * The child #ClutterActor of the #StBin container.
             */
            child?: Clutter.Actor | null;
        }
    }

    interface Bin
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.Bin

        /**
         * The child #ClutterActor of the #StBin container.
         */
        child: Clutter.Actor;

        // Own fields of St-13.St.Bin

        parent_instance: Widget & Clutter.Actor;

        // Owm methods of St-13.St.Bin

        /**
         * Gets the #ClutterActor child for `bin`.
         * @returns a #ClutterActor, or %NULL
         */
        get_child(): Clutter.Actor | null;
        /**
         * Sets `child` as the child of `bin`.
         *
         * If `bin` already has a child, the previous child is removed.
         * @param child a #ClutterActor, or %NULL
         */
        set_child(child: Clutter.Actor | null): void;

        // Class property signals of St-13.St.Bin

        connect(
            sigName: 'notify::child',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: Bin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Bin extends Widget {
        // Own properties of St-13.St.Bin

        static name: string;
        static $gtype: GObject.GType<Bin>;

        // Constructors of St-13.St.Bin

        constructor(config?: Bin.ConstructorProperties);
        /**
         * Creates a new #StBin, a simple container for one child.
         * @constructor
         * @returns the newly created #StBin actor
         */
        constructor();
        /**
         * Creates a new #StBin, a simple container for one child.
         * @constructor
         * @returns the newly created #StBin actor
         */
        static new(): Bin;

        // Overloads of new

        /**
         * Creates a new #ClutterActor.
         *
         * A newly created actor has a floating reference, which will be sunk
         * when it is added to another actor.
         * @constructor
         * @returns the newly created #ClutterActor
         */
        static new(): Clutter.Actor;
        _init(config?: Bin.ConstructorProperties): void;
    }

    module BorderImage {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface BorderImage {
        // Owm methods of St-13.St.BorderImage

        /**
         * Check if two #StBorderImage objects are identical.
         * @param other a different #StBorderImage
         * @returns %TRUE if the two border image objects are identical
         */
        equal(other: BorderImage): boolean;
        get_borders(
            border_top: number,
            border_right: number,
            border_bottom: number,
            border_left: number
        ): void;
        /**
         * Get the #GFile for `image`.
         * @returns a #GFile
         */
        get_file(): Gio.File;

        // Class property signals of St-13.St.BorderImage

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class BorderImage extends GObject.Object {
        // Own properties of St-13.St.BorderImage

        static name: string;
        static $gtype: GObject.GType<BorderImage>;

        // Constructors of St-13.St.BorderImage

        constructor(config?: BorderImage.ConstructorProperties);
        /**
         * Creates a new #StBorderImage.
         * @constructor
         * @param file a #GFile
         * @param border_top the top border
         * @param border_right the right border
         * @param border_bottom the bottom border
         * @param border_left the left border
         * @param scale_factor the scale factor
         * @returns a new #StBorderImage.
         */
        constructor(
            file: Gio.File,
            border_top: number,
            border_right: number,
            border_bottom: number,
            border_left: number,
            scale_factor: number
        );
        /**
         * Creates a new #StBorderImage.
         * @constructor
         * @param file a #GFile
         * @param border_top the top border
         * @param border_right the right border
         * @param border_bottom the bottom border
         * @param border_left the left border
         * @param scale_factor the scale factor
         * @returns a new #StBorderImage.
         */
        static new(
            file: Gio.File,
            border_top: number,
            border_right: number,
            border_bottom: number,
            border_left: number,
            scale_factor: number
        ): BorderImage;
        _init(config?: BorderImage.ConstructorProperties): void;
    }

    module BoxLayout {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Scrollable.ConstructorProperties,
                Viewport.ConstructorProperties {
            // Own constructor properties of St-13.St.BoxLayout

            /**
             * A convenience property for the #ClutterBoxLayout:pack-start property of the
             * internal layout for #StBoxLayout.
             */
            pack_start?: boolean | null;
            /**
             * A convenience property for the #ClutterBoxLayout:vertical property of the
             * internal layout for #StBoxLayout.
             */
            vertical?: boolean | null;
        }
    }

    interface BoxLayout
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable,
            Scrollable {
        // Own properties of St-13.St.BoxLayout

        /**
         * A convenience property for the #ClutterBoxLayout:pack-start property of the
         * internal layout for #StBoxLayout.
         */
        pack_start: boolean;
        /**
         * A convenience property for the #ClutterBoxLayout:vertical property of the
         * internal layout for #StBoxLayout.
         */
        vertical: boolean;

        // Conflicting properties

        parent_instance: Widget & Clutter.Actor & Clutter.Actor;

        // Owm methods of St-13.St.BoxLayout

        get_pack_start(): boolean;
        /**
         * Get the value of the #StBoxLayout:vertical property.
         * @returns %TRUE if the layout is vertical
         */
        get_vertical(): boolean;
        set_pack_start(pack_start: boolean): void;
        /**
         * Set the value of the #StBoxLayout:vertical property
         * @param vertical %TRUE if the layout should be vertical
         */
        set_vertical(vertical: boolean): void;

        // Class property signals of St-13.St.BoxLayout

        connect(
            sigName: 'notify::pack-start',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pack-start',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pack-start', ...args: any[]): void;
        connect(
            sigName: 'notify::vertical',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::vertical',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::vertical', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-view',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-view',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-view', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(
            sigName: 'notify::hadjustment',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hadjustment',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hadjustment', ...args: any[]): void;
        connect(
            sigName: 'notify::vadjustment',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::vadjustment',
            callback: ($obj: BoxLayout, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::vadjustment', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     * @class
     */
    class BoxLayout extends Viewport {
        // Own properties of St-13.St.BoxLayout

        static name: string;
        static $gtype: GObject.GType<BoxLayout>;

        // Constructors of St-13.St.BoxLayout

        constructor(config?: BoxLayout.ConstructorProperties);
        /**
         * Create a new #StBoxLayout.
         * @constructor
         * @returns a newly allocated #StBoxLayout
         */
        constructor();
        /**
         * Create a new #StBoxLayout.
         * @constructor
         * @returns a newly allocated #StBoxLayout
         */
        static new(): BoxLayout;

        // Overloads of new

        /**
         * Creates a new #ClutterActor.
         *
         * A newly created actor has a floating reference, which will be sunk
         * when it is added to another actor.
         * @constructor
         * @returns the newly created #ClutterActor
         */
        static new(): Clutter.Actor;
        _init(config?: BoxLayout.ConstructorProperties): void;
    }

    module Button {
        // Signal callback interfaces

        /**
         * Signal callback interface for `clicked`
         */
        interface ClickedSignalCallback {
            ($obj: Button, clicked_button: number): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Bin.ConstructorProperties {
            // Own constructor properties of St-13.St.Button

            /**
             * Which buttons will trigger the #StButton::clicked signal.
             */
            button_mask?: ButtonMask | null;
            /**
             * If #StButton:toggle-mode is %TRUE, indicates if the #StButton is toggled
             * "on" or "off".
             *
             * When the value is %TRUE, the #StButton will have the `checked` CSS
             * pseudo-class set.
             */
            checked?: boolean | null;
            /**
             * The icon name of the #StButton.
             */
            icon_name?: string | null;
            /**
             * The label of the #StButton.
             */
            label?: string | null;
            /**
             * Whether the #StButton is operating in toggle mode (on/off).
             */
            toggle_mode?: boolean | null;
        }
    }

    interface Button
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.Button

        /**
         * Which buttons will trigger the #StButton::clicked signal.
         */
        button_mask: ButtonMask;
        /**
         * If #StButton:toggle-mode is %TRUE, indicates if the #StButton is toggled
         * "on" or "off".
         *
         * When the value is %TRUE, the #StButton will have the `checked` CSS
         * pseudo-class set.
         */
        checked: boolean;
        /**
         * The icon name of the #StButton.
         */
        icon_name: string | null;
        /**
         * The label of the #StButton.
         */
        label: string | null;
        /**
         * In contrast to #StButton:checked, this property indicates whether the
         * #StButton is being actively pressed, rather than just in the "on" state.
         */
        readonly pressed: boolean;
        /**
         * Whether the #StButton is operating in toggle mode (on/off).
         */
        toggle_mode: boolean;

        // Own fields of St-13.St.Button

        parent_instance: Bin & Widget & Clutter.Actor & Clutter.Actor;

        // Owm methods of St-13.St.Button

        /**
         * If this widget is holding a pointer grab, this function will
         * will ungrab it, and reset the #StButton:pressed state.  The effect is
         * similar to if the user had released the mouse button, but without
         * emitting the #StButton::clicked signal.
         *
         * This function is useful if for example you want to do something
         * after the user is holding the mouse button for a given period of
         * time, breaking the grab.
         */
        fake_release(): void;
        /**
         * Gets the mask of mouse buttons that `button` emits the
         * #StButton::clicked signal for.
         * @returns the mask of mouse buttons that @button emits the #StButton::clicked signal for.
         */
        get_button_mask(): ButtonMask;
        /**
         * Get the #StButton:checked property of a #StButton that is in toggle mode.
         * @returns %TRUE if the button is checked, or %FALSE if not
         */
        get_checked(): boolean;
        /**
         * Get the icon name of the button. If the button isn't showing an icon,
         * the return value will be %NULL.
         * @returns the icon name of the button
         */
        get_icon_name(): string | null;
        /**
         * Get the text displayed on the button. If the label is empty, an empty string
         * will be returned instead of %NULL.
         * @returns the text for the button
         */
        get_label(): string | null;
        /**
         * Get the toggle mode status of the button.
         * @returns %TRUE if toggle mode is set, otherwise %FALSE
         */
        get_toggle_mode(): boolean;
        /**
         * Sets which mouse buttons `button` emits #StButton::clicked for.
         * @param mask the mask of mouse buttons that `button` responds to
         */
        set_button_mask(mask: ButtonMask): void;
        /**
         * Set the #StButton:checked property of the button. This is only really useful
         * if the button has #StButton:toggle-mode property set to %TRUE.
         * @param checked %TRUE or %FALSE
         */
        set_checked(checked: boolean): void;
        /**
         * Adds an `StIcon` with the given icon name as a child.
         *
         * If `button` already contains a child actor, that child will
         * be removed and replaced with the icon.
         * @param icon_name an icon name
         */
        set_icon_name(icon_name: string | null): void;
        /**
         * Sets the text displayed on the button.
         * @param text text to set the label to
         */
        set_label(text: string | null): void;
        /**
         * Enables or disables toggle mode for the button. In toggle mode, the active
         * state will be "toggled" when the user clicks the button.
         * @param toggle %TRUE or %FALSE
         */
        set_toggle_mode(toggle: boolean): void;

        // Own virtual methods of St-13.St.Button

        vfunc_clicked(clicked_button: number): void;
        vfunc_transition(): void;

        // Own signals of St-13.St.Button

        connect(
            sigName: 'clicked',
            callback: Button.ClickedSignalCallback
        ): number;
        connect_after(
            sigName: 'clicked',
            callback: Button.ClickedSignalCallback
        ): number;
        emit(sigName: 'clicked', clicked_button: number, ...args: any[]): void;

        // Class property signals of St-13.St.Button

        connect(
            sigName: 'notify::button-mask',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::button-mask',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::button-mask', ...args: any[]): void;
        connect(
            sigName: 'notify::checked',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::checked',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::checked', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::label',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label', ...args: any[]): void;
        connect(
            sigName: 'notify::pressed',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pressed',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pressed', ...args: any[]): void;
        connect(
            sigName: 'notify::toggle-mode',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::toggle-mode',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::toggle-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::child',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: Button, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Button extends Bin {
        // Own properties of St-13.St.Button

        static name: string;
        static $gtype: GObject.GType<Button>;

        // Constructors of St-13.St.Button

        constructor(config?: Button.ConstructorProperties);
        /**
         * Create a new button
         * @constructor
         * @returns a new #StButton
         */
        constructor();
        /**
         * Create a new button
         * @constructor
         * @returns a new #StButton
         */
        static new(): Button;

        // Overloads of new

        /**
         * Creates a new #StBin, a simple container for one child.
         * @constructor
         * @returns the newly created #StBin actor
         */
        static new(): Bin;
        /**
         * Creates a new #ClutterActor.
         *
         * A newly created actor has a floating reference, which will be sunk
         * when it is added to another actor.
         * @constructor
         * @returns the newly created #ClutterActor
         */
        static new(): Clutter.Actor;
        /**
         * Create a new #StButton with the specified label
         * @constructor
         * @param text text to set the label to
         * @returns a new #StButton
         */
        static new_with_label(text: string | null): Button;
        _init(config?: Button.ConstructorProperties): void;
    }

    module Clipboard {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface Clipboard {
        // Owm methods of St-13.St.Clipboard

        /**
         * Request the data from the clipboard in #GBytes form. `callback` is executed
         * when the data is retrieved.
         * @param type The type of clipboard data you want
         * @param mimetype The mimetype to get content for
         * @param callback function to be called when the type is retrieved
         */
        get_content(
            type: ClipboardType,
            mimetype: string | null,
            callback: ClipboardContentCallbackFunc
        ): void;
        /**
         * Gets a list of the mimetypes supported by the default #StClipboard.
         * @param type
         * @returns the supported mimetypes
         */
        get_mimetypes(type: ClipboardType): string[];
        /**
         * Request the data from the clipboard in text form. `callback` is executed
         * when the data is retrieved.
         * @param type The type of clipboard data you want
         * @param callback function to be called when the text is retrieved
         */
        get_text(type: ClipboardType, callback: ClipboardCallbackFunc): void;
        /**
         * Sets the clipboard content to `bytes`.
         *
         * `mimetype` is a semi-colon separated list of mime-type strings.
         * @param type The type of clipboard that you want to set
         * @param mimetype content mimetype
         * @param bytes content data
         */
        set_content(
            type: ClipboardType,
            mimetype: string | null,
            bytes: GLib.Bytes
        ): void;
        /**
         * Sets text as the current contents of the clipboard.
         * @param type The type of clipboard that you want to set
         * @param text text to copy to the clipboard
         */
        set_text(type: ClipboardType, text: string | null): void;

        // Class property signals of St-13.St.Clipboard

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     * @class
     */
    class Clipboard extends GObject.Object {
        // Own properties of St-13.St.Clipboard

        static name: string;
        static $gtype: GObject.GType<Clipboard>;

        // Constructors of St-13.St.Clipboard

        constructor(config?: Clipboard.ConstructorProperties);
        _init(config?: Clipboard.ConstructorProperties): void;
        /**
         * Get the global #StClipboard object that represents the clipboard.
         * @returns a #StClipboard owned by St and must not be unrefferenced or freed.
         */
        static get_default(): Clipboard;
    }

    module DrawingArea {
        // Signal callback interfaces

        /**
         * Signal callback interface for `repaint`
         */
        interface RepaintSignalCallback {
            ($obj: DrawingArea): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Widget.ConstructorProperties {}
    }

    interface DrawingArea
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own fields of St-13.St.DrawingArea

        parent_instance: Widget & Clutter.Actor;

        // Owm methods of St-13.St.DrawingArea

        /**
         * Gets the Cairo context to paint to. This function must only be called
         * from a signal handler or virtual function for the #StDrawingArea::repaint
         * signal.
         *
         * JavaScript code must call the special dispose function before returning from
         * the signal handler or virtual function to avoid leaking memory:
         *
         *
         * ```<!-- language="JavaScript" -->
         * function onRepaint(area) {
         *     let cr = area.get_context();
         *
         *     // Draw to the context
         *
         *     cr.$dispose();
         * }
         *
         * let area = new St.DrawingArea();
         * area.connect('repaint', onRepaint);
         * ```
         *
         * @returns the Cairo context for the paint operation
         */
        get_context(): cairo.Context;
        /**
         * Gets the size of the cairo surface being painted to, which is equal
         * to the size of the content area of the widget. This function must
         * only be called from a signal handler for the #StDrawingArea::repaint signal.
         */
        get_surface_size(): [/* width */ number, /* height */ number];
        /**
         * Will cause the actor to emit a #StDrawingArea::repaint signal before it is
         * next drawn to the scene. Useful if some parameters for the area being
         * drawn other than the size or style have changed. Note that
         * clutter_actor_queue_redraw() will simply result in the same
         * contents being drawn to the scene again.
         */
        queue_repaint(): void;

        // Own virtual methods of St-13.St.DrawingArea

        vfunc_repaint(): void;

        // Own signals of St-13.St.DrawingArea

        connect(
            sigName: 'repaint',
            callback: DrawingArea.RepaintSignalCallback
        ): number;
        connect_after(
            sigName: 'repaint',
            callback: DrawingArea.RepaintSignalCallback
        ): number;
        emit(sigName: 'repaint', ...args: any[]): void;

        // Class property signals of St-13.St.DrawingArea

        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: DrawingArea, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class DrawingArea extends Widget {
        // Own properties of St-13.St.DrawingArea

        static name: string;
        static $gtype: GObject.GType<DrawingArea>;

        // Constructors of St-13.St.DrawingArea

        constructor(config?: DrawingArea.ConstructorProperties);
        _init(config?: DrawingArea.ConstructorProperties): void;
    }

    module Entry {
        // Signal callback interfaces

        /**
         * Signal callback interface for `primary-icon-clicked`
         */
        interface PrimaryIconClickedSignalCallback {
            ($obj: Entry): void;
        }

        /**
         * Signal callback interface for `secondary-icon-clicked`
         */
        interface SecondaryIconClickedSignalCallback {
            ($obj: Entry): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Widget.ConstructorProperties {
            // Own constructor properties of St-13.St.Entry

            /**
             * A #ClutterActor to display when the entry is empty and unfocused. Setting
             * this will replace the actor displaying #StEntry:hint-text.
             */
            hint_actor?: Clutter.Actor | null;
            /**
             * The text to display when the entry is empty and unfocused. Setting this
             * will replace the actor of #StEntry::hint-actor.
             */
            hint_text?: string | null;
            /**
             * The #ClutterInputContentHintFlags providing additional hints (beyond
             * #StEntry:input-purpose) that allow input methods to fine-tune their
             * behaviour.
             */
            input_hints?: Clutter.InputContentHintFlags | null;
            /**
             * The #ClutterInputContentPurpose that helps on-screen keyboards and similar
             * input methods to decide which keys should be presented to the user.
             */
            input_purpose?: Clutter.InputContentPurpose | null;
            /**
             * The #ClutterActor acting as the primary icon at the start of the #StEntry.
             */
            primary_icon?: Clutter.Actor | null;
            /**
             * The #ClutterActor acting as the secondary icon at the end of the #StEntry.
             */
            secondary_icon?: Clutter.Actor | null;
            /**
             * The current text value of the #StEntry.
             */
            text?: string | null;
        }
    }

    interface Entry
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.Entry

        /**
         * The internal #ClutterText actor supporting the #StEntry.
         */
        readonly clutter_text: Clutter.Text;
        /**
         * A #ClutterActor to display when the entry is empty and unfocused. Setting
         * this will replace the actor displaying #StEntry:hint-text.
         */
        hint_actor: Clutter.Actor;
        /**
         * The text to display when the entry is empty and unfocused. Setting this
         * will replace the actor of #StEntry::hint-actor.
         */
        hint_text: string | null;
        /**
         * The #ClutterInputContentHintFlags providing additional hints (beyond
         * #StEntry:input-purpose) that allow input methods to fine-tune their
         * behaviour.
         */
        input_hints: Clutter.InputContentHintFlags;
        /**
         * The #ClutterInputContentPurpose that helps on-screen keyboards and similar
         * input methods to decide which keys should be presented to the user.
         */
        input_purpose: Clutter.InputContentPurpose;
        /**
         * The #ClutterActor acting as the primary icon at the start of the #StEntry.
         */
        primary_icon: Clutter.Actor;
        /**
         * The #ClutterActor acting as the secondary icon at the end of the #StEntry.
         */
        secondary_icon: Clutter.Actor;
        /**
         * The current text value of the #StEntry.
         */
        text: string | null;

        // Own fields of St-13.St.Entry

        parent_instance: Widget & Clutter.Actor;

        // Owm methods of St-13.St.Entry

        /**
         * Retrieve the internal #ClutterText so that extra parameters can be set.
         * @returns the #ClutterText used by @entry
         */
        get_clutter_text(): Clutter.Actor;
        /**
         * Get the value of the #StEntry:hint-actor property.
         * @returns a #ClutterActor
         */
        get_hint_actor(): Clutter.Actor | null;
        /**
         * Gets the text that is displayed when the entry is empty and unfocused or
         * %NULL if the #StEntry:hint-actor was set to an actor that is not a #StLabel.
         *
         * Unlike st_entry_get_text() this function may return %NULL if
         * #StEntry:hint-actor is not a #StLabel.
         * @returns the current value of the hint property
         */
        get_hint_text(): string | null;
        /**
         * Gets the value of the #StEntry:input-hints property.
         * @returns the input hints for the entry
         */
        get_input_hints(): Clutter.InputContentHintFlags;
        /**
         * Gets the value of the #StEntry:input-purpose property.
         * @returns the input purpose of the entry
         */
        get_input_purpose(): Clutter.InputContentPurpose;
        /**
         * Get the value of the #StEntry:primary-icon property.
         * @returns a #ClutterActor
         */
        get_primary_icon(): Clutter.Actor | null;
        /**
         * Get the value of the #StEntry:secondary-icon property.
         * @returns a #ClutterActor
         */
        get_secondary_icon(): Clutter.Actor | null;
        /**
         * Get the text displayed on the entry. If `entry` is empty, an empty string will
         * be returned instead of %NULL.
         * @returns the text for the entry
         */
        get_text(): string | null;
        /**
         * Set the hint actor of the entry to `hint_actor`.
         * @param hint_actor a #ClutterActor
         */
        set_hint_actor(hint_actor: Clutter.Actor | null): void;
        /**
         * Sets the text to display when the entry is empty and unfocused. When the
         * entry is displaying the hint, it has a pseudo class of `indeterminate`.
         * A value of %NULL unsets the hint.
         * @param text text to set as the entry hint
         */
        set_hint_text(text: string | null): void;
        /**
         * Sets the #StEntry:input-hints property, which
         * allows input methods to fine-tune their behaviour.
         * @param hints the hints
         */
        set_input_hints(hints: Clutter.InputContentHintFlags): void;
        /**
         * Sets the #StEntry:input-purpose property which
         * can be used by on-screen keyboards and other input
         * methods to adjust their behaviour.
         * @param purpose the purpose
         */
        set_input_purpose(purpose: Clutter.InputContentPurpose): void;
        /**
         * Set the primary icon of the entry to `icon`.
         * @param icon a #ClutterActor
         */
        set_primary_icon(icon: Clutter.Actor | null): void;
        /**
         * Set the secondary icon of the entry to `icon`.
         * @param icon an #ClutterActor
         */
        set_secondary_icon(icon: Clutter.Actor | null): void;
        /**
         * Sets the text displayed on the entry. If `text` is %NULL, the #ClutterText
         * will instead be set to an empty string.
         * @param text text to set the entry to
         */
        set_text(text: string | null): void;

        // Own virtual methods of St-13.St.Entry

        vfunc_primary_icon_clicked(): void;
        vfunc_secondary_icon_clicked(): void;

        // Own signals of St-13.St.Entry

        connect(
            sigName: 'primary-icon-clicked',
            callback: Entry.PrimaryIconClickedSignalCallback
        ): number;
        connect_after(
            sigName: 'primary-icon-clicked',
            callback: Entry.PrimaryIconClickedSignalCallback
        ): number;
        emit(sigName: 'primary-icon-clicked', ...args: any[]): void;
        connect(
            sigName: 'secondary-icon-clicked',
            callback: Entry.SecondaryIconClickedSignalCallback
        ): number;
        connect_after(
            sigName: 'secondary-icon-clicked',
            callback: Entry.SecondaryIconClickedSignalCallback
        ): number;
        emit(sigName: 'secondary-icon-clicked', ...args: any[]): void;

        // Class property signals of St-13.St.Entry

        connect(
            sigName: 'notify::clutter-text',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clutter-text',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clutter-text', ...args: any[]): void;
        connect(
            sigName: 'notify::hint-actor',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hint-actor',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hint-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::hint-text',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hint-text',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hint-text', ...args: any[]): void;
        connect(
            sigName: 'notify::input-hints',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::input-hints',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::input-hints', ...args: any[]): void;
        connect(
            sigName: 'notify::input-purpose',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::input-purpose',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::input-purpose', ...args: any[]): void;
        connect(
            sigName: 'notify::primary-icon',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::primary-icon',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::primary-icon', ...args: any[]): void;
        connect(
            sigName: 'notify::secondary-icon',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::secondary-icon',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::secondary-icon', ...args: any[]): void;
        connect(
            sigName: 'notify::text',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: Entry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Entry extends Widget {
        // Own properties of St-13.St.Entry

        static name: string;
        static $gtype: GObject.GType<Entry>;

        // Constructors of St-13.St.Entry

        constructor(config?: Entry.ConstructorProperties);
        /**
         * Create a new #StEntry with the specified text.
         * @constructor
         * @param text text to set the entry to
         * @returns a new #StEntry
         */
        constructor(text: string | null);
        /**
         * Create a new #StEntry with the specified text.
         * @constructor
         * @param text text to set the entry to
         * @returns a new #StEntry
         */
        static new(text: string | null): Entry;

        // Overloads of new

        /**
         * Creates a new #ClutterActor.
         *
         * A newly created actor has a floating reference, which will be sunk
         * when it is added to another actor.
         * @constructor
         * @returns the newly created #ClutterActor
         */
        static new(): Clutter.Actor;
        _init(config?: Entry.ConstructorProperties): void;
    }

    module FocusManager {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface FocusManager {
        // Owm methods of St-13.St.FocusManager

        /**
         * Adds a new focus group to `manager`. When the focus is in an actor
         * that is a descendant of `root,` `manager` will handle moving focus
         * from one actor to another within `root` based on keyboard events.
         * @param root the root container of the group
         */
        add_group(root: Widget): void;
        /**
         * Checks if `widget` is inside a focus group, and if so, returns
         * the root of that group.
         * @param widget an #StWidget
         * @returns the focus group root, or %NULL if @widget is not in a focus group
         */
        get_group(widget: Widget): Widget;
        /**
         * Try to navigate from `event` as if it bubbled all the way up to
         * the stage. This is useful in complex event handling situations
         * where you want key navigation, but a parent might be stopping
         * the key navigation event from bubbling all the way up to the stage.
         * @param event a #ClutterEvent
         * @returns Whether a new actor was navigated to
         */
        navigate_from_event(event: Clutter.Event): boolean;
        /**
         * Removes the group rooted at `root` from `manager`
         * @param root the root container of the group
         */
        remove_group(root: Widget): void;

        // Class property signals of St-13.St.FocusManager

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * The #StFocusManager struct contains only private data
     * @class
     */
    class FocusManager extends GObject.Object {
        // Own properties of St-13.St.FocusManager

        static name: string;
        static $gtype: GObject.GType<FocusManager>;

        // Constructors of St-13.St.FocusManager

        constructor(config?: FocusManager.ConstructorProperties);
        _init(config?: FocusManager.ConstructorProperties): void;
        /**
         * Gets the #StFocusManager for `stage,` creating it if necessary.
         * @param stage a #ClutterStage
         * @returns the focus manager for @stage
         */
        static get_for_stage(stage: Clutter.Stage): FocusManager;
    }

    module GenericAccessible {
        // Signal callback interfaces

        /**
         * Signal callback interface for `get-current-value`
         */
        interface GetCurrentValueSignalCallback {
            ($obj: GenericAccessible): number;
        }

        /**
         * Signal callback interface for `get-maximum-value`
         */
        interface GetMaximumValueSignalCallback {
            ($obj: GenericAccessible): number;
        }

        /**
         * Signal callback interface for `get-minimum-increment`
         */
        interface GetMinimumIncrementSignalCallback {
            ($obj: GenericAccessible): number;
        }

        /**
         * Signal callback interface for `get-minimum-value`
         */
        interface GetMinimumValueSignalCallback {
            ($obj: GenericAccessible): number;
        }

        /**
         * Signal callback interface for `set-current-value`
         */
        interface SetCurrentValueSignalCallback {
            ($obj: GenericAccessible, new_value: number): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.Action.ConstructorProperties,
                Atk.Component.ConstructorProperties,
                Atk.Value.ConstructorProperties,
                WidgetAccessible.ConstructorProperties {}
    }

    interface GenericAccessible extends Atk.Action, Atk.Component, Atk.Value {
        // Own fields of St-13.St.GenericAccessible

        parent: WidgetAccessible &
            Cally.Actor &
            Atk.Object &
            GObject.Object &
            GObject.Object;
        priv: GenericAccessiblePrivate;

        // Conflicting methods

        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or %NULL if @action does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * Gets the accessible description of the accessible.
         * @returns a character string representing the accessible description of the accessible.
         */
        get_description(): string | null;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via atk_action_do_action() may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or %NULL if @action does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * Gets the accessible name of the accessible.
         * @returns a character string representing the accessible name of the object.
         */
        get_name(): string | null;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string | null): boolean;
        /**
         * Sets the accessible description of the accessible. You can't set
         * the description to NULL. This is reserved for the initial value. In
         * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
         * the name to a empty value you can use "".
         * @param description a character string to be set as the accessible description
         */
        set_description(description: string | null): void;
        /**
         * Returns a description of the specified action of the object.
         * @virtual
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or %NULL if @action does not implement this interface.
         */
        vfunc_get_description(i: number): string | null;
        /**
         * Gets the accessible description of the accessible.
         * @virtual
         * @returns a character string representing the accessible description of the accessible.
         */
        vfunc_get_description(): string | null;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via atk_action_do_action() may be
         * NIL.
         * @virtual
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or %NULL if @action does not implement this interface.
         */
        vfunc_get_name(i: number): string | null;
        /**
         * Gets the accessible name of the accessible.
         * @virtual
         * @returns a character string representing the accessible name of the object.
         */
        vfunc_get_name(): string | null;
        /**
         * Sets a description of the specified action of the object.
         * @virtual
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        vfunc_set_description(i: number, desc: string | null): boolean;
        /**
         * Sets the accessible description of the accessible. You can't set
         * the description to NULL. This is reserved for the initial value. In
         * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
         * the name to a empty value you can use "".
         * @virtual
         * @param description a character string to be set as the accessible description
         */
        vfunc_set_description(description: string | null): void;

        // Own signals of St-13.St.GenericAccessible

        connect(
            sigName: 'get-current-value',
            callback: GenericAccessible.GetCurrentValueSignalCallback
        ): number;
        connect_after(
            sigName: 'get-current-value',
            callback: GenericAccessible.GetCurrentValueSignalCallback
        ): number;
        emit(sigName: 'get-current-value', ...args: any[]): void;
        connect(
            sigName: 'get-maximum-value',
            callback: GenericAccessible.GetMaximumValueSignalCallback
        ): number;
        connect_after(
            sigName: 'get-maximum-value',
            callback: GenericAccessible.GetMaximumValueSignalCallback
        ): number;
        emit(sigName: 'get-maximum-value', ...args: any[]): void;
        connect(
            sigName: 'get-minimum-increment',
            callback: GenericAccessible.GetMinimumIncrementSignalCallback
        ): number;
        connect_after(
            sigName: 'get-minimum-increment',
            callback: GenericAccessible.GetMinimumIncrementSignalCallback
        ): number;
        emit(sigName: 'get-minimum-increment', ...args: any[]): void;
        connect(
            sigName: 'get-minimum-value',
            callback: GenericAccessible.GetMinimumValueSignalCallback
        ): number;
        connect_after(
            sigName: 'get-minimum-value',
            callback: GenericAccessible.GetMinimumValueSignalCallback
        ): number;
        emit(sigName: 'get-minimum-value', ...args: any[]): void;
        connect(
            sigName: 'set-current-value',
            callback: GenericAccessible.SetCurrentValueSignalCallback
        ): number;
        connect_after(
            sigName: 'set-current-value',
            callback: GenericAccessible.SetCurrentValueSignalCallback
        ): number;
        emit(
            sigName: 'set-current-value',
            new_value: number,
            ...args: any[]
        ): void;

        // Class property signals of St-13.St.GenericAccessible

        connect(
            sigName: 'notify::accessible-component-layer',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-layer',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-layer',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-mdi-zorder',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-description',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-description',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::accessible-description', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(
            sigName: 'notify::accessible-hypertext-nlinks',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::accessible-table-caption', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption-object',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption-object',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-caption-object',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-description',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-description',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-header',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-header',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-description',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-description',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-header',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-header',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-summary',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-summary',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::accessible-table-summary', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-value',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-value',
            callback: (
                $obj: GenericAccessible,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::accessible-value', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class GenericAccessible extends WidgetAccessible {
        // Own properties of St-13.St.GenericAccessible

        static name: string;
        static $gtype: GObject.GType<GenericAccessible>;

        // Constructors of St-13.St.GenericAccessible

        constructor(config?: GenericAccessible.ConstructorProperties);
        /**
         * Create a new #StGenericAccessible for `actor`.
         *
         * This is useful only for custom widgets that need a proxy for #AtkObject.
         * @constructor
         * @param actor a #Clutter Actor
         * @returns a new #AtkObject
         */
        static new_for_actor(actor: Clutter.Actor): GenericAccessible;
        _init(config?: GenericAccessible.ConstructorProperties): void;
    }

    module Icon {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Widget.ConstructorProperties {
            // Own constructor properties of St-13.St.Icon

            /**
             * The fallback #GIcon to display if #StIcon:gicon fails to load.
             */
            fallback_gicon?: Gio.Icon | null;
            /**
             * The fallback icon name of the #StIcon. See st_icon_set_fallback_icon_name()
             * for details.
             */
            fallback_icon_name?: string | null;
            /**
             * The #GIcon being displayed by this #StIcon.
             */
            gicon?: Gio.Icon | null;
            /**
             * The name of the icon if the icon being displayed is a #GThemedIcon.
             */
            icon_name?: string | null;
            /**
             * The size of the icon, if greater than `0`. Otherwise the icon size is derived
             * from the current style.
             */
            icon_size?: number | null;
        }
    }

    interface Icon
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.Icon

        /**
         * The fallback #GIcon to display if #StIcon:gicon fails to load.
         */
        fallback_gicon: Gio.Icon;
        /**
         * The fallback icon name of the #StIcon. See st_icon_set_fallback_icon_name()
         * for details.
         */
        fallback_icon_name: string | null;
        /**
         * The #GIcon being displayed by this #StIcon.
         */
        gicon: Gio.Icon;
        /**
         * The name of the icon if the icon being displayed is a #GThemedIcon.
         */
        icon_name: string | null;
        /**
         * The size of the icon, if greater than `0`. Otherwise the icon size is derived
         * from the current style.
         */
        icon_size: number;

        // Owm methods of St-13.St.Icon

        /**
         * Gets the currently set fallback #GIcon.
         * @returns The fallback #GIcon, if set, otherwise %NULL
         */
        get_fallback_gicon(): Gio.Icon;
        /**
         * This is a convenience method to get the icon name of the fallback
         * #GThemedIcon that is currently set.
         * @returns The name of the icon or %NULL if no icon is set
         */
        get_fallback_icon_name(): string | null;
        /**
         * Gets the current #GIcon in use.
         * @returns The current #GIcon, if set, otherwise %NULL
         */
        get_gicon(): Gio.Icon | null;
        /**
         * This is a convenience method to get the icon name of the current icon, if it
         * is currently a #GThemedIcon, or %NULL otherwise.
         * @returns The name of the icon or %NULL
         */
        get_icon_name(): string | null;
        /**
         * Gets the explicit size set using st_icon_set_icon_size() for the icon.
         * This is not necessarily the size that the icon will be displayed at.
         * @returns The explicitly set size, or -1 if no size has been set
         */
        get_icon_size(): number;
        /**
         * Sets a fallback #GIcon to show if the normal icon fails to load.
         * If `fallback_gicon` is %NULL or fails to load, the icon is unset and no
         * texture will be visible for the fallback icon.
         * @param fallback_gicon the fallback #GIcon
         */
        set_fallback_gicon(fallback_gicon: Gio.Icon | null): void;
        /**
         * This is a convenience method to set the fallback #GIcon to a #GThemedIcon
         * created using the given icon name. If `fallback_icon_name` is an empty
         * string, %NULL or fails to load, the icon is unset and no texture will
         * be visible for the fallback icon.
         * @param fallback_icon_name the name of the fallback icon
         */
        set_fallback_icon_name(fallback_icon_name: string | null): void;
        /**
         * Sets a #GIcon to show for the icon. If `gicon` is %NULL or fails to load,
         * the fallback icon set using st_icon_set_fallback_icon() will be shown.
         * @param gicon a #GIcon
         */
        set_gicon(gicon: Gio.Icon | null): void;
        /**
         * This is a convenience method to set the #GIcon to a #GThemedIcon created
         * using the given icon name. If `icon_name` is an empty string, %NULL or
         * fails to load, the fallback icon will be shown.
         * @param icon_name the name of the icon
         */
        set_icon_name(icon_name: string | null): void;
        /**
         * Sets an explicit size for the icon. Setting `size` to -1 will use the size
         * defined by the current style or the default icon size.
         * @param size if positive, the new size, otherwise the size will be   derived from the current style
         */
        set_icon_size(size: number): void;

        // Class property signals of St-13.St.Icon

        connect(
            sigName: 'notify::fallback-gicon',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fallback-gicon',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fallback-gicon', ...args: any[]): void;
        connect(
            sigName: 'notify::fallback-icon-name',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fallback-icon-name',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fallback-icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::gicon',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::gicon',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::gicon', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-size',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-size',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-size', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: Icon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     * @class
     */
    class Icon extends Widget {
        // Own properties of St-13.St.Icon

        static name: string;
        static $gtype: GObject.GType<Icon>;

        // Constructors of St-13.St.Icon

        constructor(config?: Icon.ConstructorProperties);
        /**
         * Create a newly allocated #StIcon.
         * @constructor
         * @returns A newly allocated #StIcon
         */
        constructor();
        /**
         * Create a newly allocated #StIcon.
         * @constructor
         * @returns A newly allocated #StIcon
         */
        static new(): Icon;
        _init(config?: Icon.ConstructorProperties): void;
    }

    module IconInfo {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface IconInfo {
        // Owm methods of St-13.St.IconInfo

        /**
         * Gets the base scale for the icon. The base scale is a scale
         * for the icon that was specified by the icon theme creator.
         * For instance an icon drawn for a high-dpi screen with window
         * scale 2 for a base size of 32 will be 64 pixels tall and have
         * a base scale of 2.
         * @returns the base scale
         */
        get_base_scale(): number;
        /**
         * Gets the base size for the icon. The base size
         * is a size for the icon that was specified by
         * the icon theme creator. This may be different
         * than the actual size of image; an example of
         * this is small emblem icons that can be attached
         * to a larger icon. These icons will be given
         * the same base size as the larger icons to which
         * they are attached.
         *
         * Note that for scaled icons the base size does
         * not include the base scale.
         * @returns the base size, or 0, if no base     size is known for the icon.
         */
        get_base_size(): number;
        /**
         * Gets the filename for the icon.
         * @returns the filename for the icon, or %NULL.     The return value is owned by GTK+ and should not be modified     or freed.
         */
        get_filename(): string | null;
        /**
         * Checks if the icon is symbolic or not. This currently uses only
         * the file name and not the file contents for determining this.
         * This behaviour may change in the future.
         * @returns %TRUE if the icon is symbolic, %FALSE otherwise
         */
        is_symbolic(): boolean;
        /**
         * Renders an icon previously looked up in an icon theme using
         * st_icon_theme_lookup_icon(); the size will be based on the size
         * passed to st_icon_theme_lookup_icon(). Note that the resulting
         * pixbuf may not be exactly this size; an icon theme may have icons
         * that differ slightly from their nominal sizes, and in addition GTK+
         * will avoid scaling icons that it considers sufficiently close to the
         * requested size or for which the source image would have to be scaled
         * up too far. (This maintains sharpness.). This behaviour can be changed
         * by passing the %ST_ICON_LOOKUP_FORCE_SIZE flag when obtaining
         * the #StIconInfo. If this flag has been specified, the pixbuf
         * returned by this function will be scaled to the exact size.
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use g_object_unref() to release your reference     to the icon.
         */
        load_icon(): GdkPixbuf.Pixbuf;
        /**
         * Asynchronously load, render and scale an icon previously looked up
         * from the icon theme using st_icon_theme_lookup_icon().
         *
         * For more details, see st_icon_info_load_icon() which is the synchronous
         * version of this call.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the     request is satisfied
         */
        load_icon_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;

        // Overloads of load_icon_async

        /**
         * Promisified version of {@link load_icon_async}
         *
         * Asynchronously load, render and scale an icon previously looked up
         * from the icon theme using st_icon_theme_lookup_icon().
         *
         * For more details, see st_icon_info_load_icon() which is the synchronous
         * version of this call.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @returns A Promise of: the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use g_object_unref() to release your reference     to the icon.
         */
        load_icon_async(
            cancellable: Gio.Cancellable | null
        ): globalThis.Promise<GdkPixbuf.Pixbuf>;
        /**
         * Finishes an async icon load, see st_icon_info_load_icon_async().
         * @param res a #GAsyncResult
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use g_object_unref() to release your reference     to the icon.
         */
        load_icon_finish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
        /**
         * Loads an icon, modifying it to match the system colours for the foreground,
         * success, warning and error colors provided. If the icon is not a symbolic
         * one, the function will return the result from st_icon_info_load_icon().
         *
         * This allows loading symbolic icons that will match the system theme.
         *
         * Unless you are implementing a widget, you will want to use
         * g_themed_icon_new_with_default_fallbacks() to load the icon.
         *
         * As implementation details, the icon loaded needs to be of SVG type,
         * contain the “symbolic” term as the last component of the icon name,
         * and use the “fg”, “success”, “warning” and “error” CSS styles in the
         * SVG file itself.
         *
         * See the [Symbolic Icons Specification](http://www.freedesktop.org/wiki/SymbolicIcons)
         * for more information about symbolic icons.
         * @param colors a #StIconColors representing the foreground, warning and error colors
         * @returns a #GdkPixbuf representing the loaded icon
         */
        load_symbolic(
            colors: IconColors
        ): [/* returnType */ GdkPixbuf.Pixbuf, /* was_symbolic */ boolean];
        /**
         * Asynchronously load, render and scale a symbolic icon previously looked up
         * from the icon theme using st_icon_theme_lookup_icon().
         *
         * For more details, see st_icon_info_load_symbolic() which is the synchronous
         * version of this call.
         * @param colors an #StIconColors representing the foreground, error and     success colors of the icon
         * @param cancellable optional #GCancellable object,     %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the     request is satisfied
         */
        load_symbolic_async(
            colors: IconColors,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;

        // Overloads of load_symbolic_async

        /**
         * Promisified version of {@link load_symbolic_async}
         *
         * Asynchronously load, render and scale a symbolic icon previously looked up
         * from the icon theme using st_icon_theme_lookup_icon().
         *
         * For more details, see st_icon_info_load_symbolic() which is the synchronous
         * version of this call.
         * @param colors an #StIconColors representing the foreground, error and     success colors of the icon
         * @param cancellable optional #GCancellable object,     %NULL to ignore
         * @returns A Promise of: the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use g_object_unref() to release your reference     to the icon.
         */
        load_symbolic_async(
            colors: IconColors,
            cancellable: Gio.Cancellable | null
        ): globalThis.Promise</* was_symbolic */ boolean>;
        /**
         * Finishes an async icon load, see st_icon_info_load_symbolic_async().
         * @param res a #GAsyncResult
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use g_object_unref() to release your reference     to the icon.
         */
        load_symbolic_finish(
            res: Gio.AsyncResult
        ): [/* returnType */ GdkPixbuf.Pixbuf, /* was_symbolic */ boolean];

        // Class property signals of St-13.St.IconInfo

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class IconInfo extends GObject.Object {
        // Own properties of St-13.St.IconInfo

        static name: string;
        static $gtype: GObject.GType<IconInfo>;

        // Constructors of St-13.St.IconInfo

        constructor(config?: IconInfo.ConstructorProperties);
        /**
         * Creates a #StIconInfo for a #GdkPixbuf.
         * @constructor
         * @param icon_theme a #StIconTheme
         * @param pixbuf the pixbuf to wrap in a #StIconInfo
         * @returns a #StIconInfo
         */
        static new_for_pixbuf(
            icon_theme: IconTheme,
            pixbuf: GdkPixbuf.Pixbuf
        ): IconInfo;
        _init(config?: IconInfo.ConstructorProperties): void;
    }

    module IconTheme {
        // Signal callback interfaces

        /**
         * Signal callback interface for `changed`
         */
        interface ChangedSignalCallback {
            ($obj: IconTheme): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface IconTheme {
        // Owm methods of St-13.St.IconTheme

        /**
         * Adds a resource path that will be looked at when looking
         * for icons, similar to search paths.
         *
         * This function should be used to make application-specific icons
         * available as part of the icon theme.
         *
         * The resources are considered as part of the hicolor icon theme
         * and must be located in subdirectories that are defined in the
         * hicolor icon theme, such as ``path/`16x16/actions/run.png`.
         * Icons that are directly placed in the resource path instead
         * of a subdirectory are also considered as ultimate fallback.
         * @param path a resource path
         */
        add_resource_path(path: string | null): void;
        /**
         * Appends a directory to the search path.
         * See st_icon_theme_set_search_path().
         * @param path directory name to append to the icon path
         */
        append_search_path(path: string): void;
        /**
         * Looks up a named icon and returns a #StIconInfo containing
         * information such as the filename of the icon. The icon
         * can then be rendered into a pixbuf using
         * st_icon_info_load_icon(). (st_icon_theme_load_icon()
         * combines these two steps if all you need is the pixbuf.)
         *
         * If `icon_names` contains more than one name, this function
         * tries them all in the given order before falling back to
         * inherited icon themes.
         * @param icon_names %NULL-terminated array of     icon names to lookup
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo object containing information about the icon, or %NULL if the icon wasn’t found.
         */
        choose_icon(
            icon_names: string[],
            size: number,
            flags: IconLookupFlags
        ): IconInfo | null;
        /**
         * Looks up a named icon for a particular window scale and returns
         * a #StIconInfo containing information such as the filename of the
         * icon. The icon can then be rendered into a pixbuf using
         * st_icon_info_load_icon(). (st_icon_theme_load_icon()
         * combines these two steps if all you need is the pixbuf.)
         *
         * If `icon_names` contains more than one name, this function
         * tries them all in the given order before falling back to
         * inherited icon themes.
         * @param icon_names %NULL-terminated     array of icon names to lookup
         * @param size desired icon size
         * @param scale desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo object     containing information about the icon, or %NULL if the     icon wasn’t found.
         */
        choose_icon_for_scale(
            icon_names: string[],
            size: number,
            scale: number,
            flags: IconLookupFlags
        ): IconInfo | null;
        /**
         * Returns an array of integers describing the sizes at which
         * the icon is available without scaling. A size of -1 means
         * that the icon is available in a scalable format. The array
         * is zero-terminated.
         * @param icon_name the name of an icon
         * @returns An newly allocated array describing the sizes at which the icon is available. The array should be freed with g_free() when it is no longer needed.
         */
        get_icon_sizes(icon_name: string | null): number[];
        /**
         * Gets the current search path. See st_icon_theme_set_search_path().
         */
        get_search_path(): /* path */ string[];
        /**
         * Checks whether an icon theme includes an icon
         * for a particular name.
         * @param icon_name the name of an icon
         * @returns %TRUE if @icon_theme includes an  icon for @icon_name.
         */
        has_icon(icon_name: string | null): boolean;
        /**
         * Gets the list of contexts available within the current
         * hierarchy of icon themes.
         * See st_icon_theme_list_icons() for details about contexts.
         * @returns a #GList list     holding the names of all the contexts in the theme. You must first     free each element in the list with g_free(), then free the list     itself with g_list_free().
         */
        list_contexts(): string[];
        /**
         * Lists the icons in the current icon theme. Only a subset
         * of the icons can be listed by providing a context string.
         * The set of values for the context string is system dependent,
         * but will typically include such values as “Applications” and
         * “MimeTypes”. Contexts are explained in the
         * [Icon Theme Specification](http://www.freedesktop.org/wiki/Specifications/icon-theme-spec).
         * The standard contexts are listed in the
         * [Icon Naming Specification](http://www.freedesktop.org/wiki/Specifications/icon-naming-spec).
         * Also see st_icon_theme_list_contexts().
         * @param context a string identifying a particular type of           icon, or %NULL to list all icons.
         * @returns a #GList list     holding the names of all the icons in the theme. You must     first free each element in the list with g_free(), then     free the list itself with g_list_free().
         */
        list_icons(context: string | null): string[];
        /**
         * Looks up an icon in an icon theme, scales it to the given size
         * and renders it into a pixbuf. This is a convenience function;
         * if more details about the icon are needed, use
         * st_icon_theme_lookup_icon() followed by st_icon_info_load_icon().
         *
         * Note that you probably want to listen for icon theme changes and
         * update the icon. This is usually done by connecting to the
         * GtkWidget::style-set signal. If for some reason you do not want to
         * update the icon when the icon theme changes, you should consider
         * using gdk_pixbuf_copy() to make a private copy of the pixbuf
         * returned by this function. Otherwise GTK+ may need to keep the old
         * icon theme loaded, which would be a waste of memory.
         * @param icon_name the name of the icon to lookup
         * @param size the desired icon size. The resulting icon may not be     exactly this size; see st_icon_info_load_icon().
         * @param flags flags modifying the behavior of the icon lookup
         * @returns the rendered icon; this may be     a newly created icon or a new reference to an internal icon, so     you must not modify the icon. Use g_object_unref() to release     your reference to the icon. %NULL if the icon isn’t found.
         */
        load_icon(
            icon_name: string | null,
            size: number,
            flags: IconLookupFlags
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Looks up an icon in an icon theme for a particular window scale,
         * scales it to the given size and renders it into a pixbuf. This is a
         * convenience function; if more details about the icon are needed,
         * use st_icon_theme_lookup_icon() followed by
         * st_icon_info_load_icon().
         *
         * Note that you probably want to listen for icon theme changes and
         * update the icon. This is usually done by connecting to the
         * GtkWidget::style-set signal. If for some reason you do not want to
         * update the icon when the icon theme changes, you should consider
         * using gdk_pixbuf_copy() to make a private copy of the pixbuf
         * returned by this function. Otherwise GTK+ may need to keep the old
         * icon theme loaded, which would be a waste of memory.
         * @param icon_name the name of the icon to lookup
         * @param size the desired icon size. The resulting icon may not be     exactly this size; see st_icon_info_load_icon().
         * @param scale desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns the rendered icon; this may be     a newly created icon or a new reference to an internal icon, so     you must not modify the icon. Use g_object_unref() to release     your reference to the icon. %NULL if the icon isn’t found.
         */
        load_icon_for_scale(
            icon_name: string | null,
            size: number,
            scale: number,
            flags: IconLookupFlags
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Looks up an icon and returns a #StIconInfo containing information
         * such as the filename of the icon. The icon can then be rendered
         * into a pixbuf using st_icon_info_load_icon().
         *
         * When rendering on displays with high pixel densities you should not
         * use a `size` multiplied by the scaling factor returned by functions
         * like gdk_window_get_scale_factor(). Instead, you should use
         * st_icon_theme_lookup_by_gicon_for_scale(), as the assets loaded
         * for a given scaling factor may be different.
         * @param icon the #GIcon to look up
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo containing     information about the icon, or %NULL if the icon wasn’t     found. Unref with g_object_unref()
         */
        lookup_by_gicon(
            icon: Gio.Icon,
            size: number,
            flags: IconLookupFlags
        ): IconInfo | null;
        /**
         * Looks up an icon and returns a #StIconInfo containing information
         * such as the filename of the icon. The icon can then be rendered into
         * a pixbuf using st_icon_info_load_icon().
         * @param icon the #GIcon to look up
         * @param size desired icon size
         * @param scale the desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo containing     information about the icon, or %NULL if the icon wasn’t     found. Unref with g_object_unref()
         */
        lookup_by_gicon_for_scale(
            icon: Gio.Icon,
            size: number,
            scale: number,
            flags: IconLookupFlags
        ): IconInfo | null;
        /**
         * Looks up a named icon and returns a #StIconInfo containing
         * information such as the filename of the icon. The icon
         * can then be rendered into a pixbuf using
         * st_icon_info_load_icon(). (st_icon_theme_load_icon()
         * combines these two steps if all you need is the pixbuf.)
         *
         * When rendering on displays with high pixel densities you should not
         * use a `size` multiplied by the scaling factor returned by functions
         * like gdk_window_get_scale_factor(). Instead, you should use
         * st_icon_theme_lookup_icon_for_scale(), as the assets loaded
         * for a given scaling factor may be different.
         * @param icon_name the name of the icon to lookup
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo object     containing information about the icon, or %NULL if the     icon wasn’t found.
         */
        lookup_icon(
            icon_name: string | null,
            size: number,
            flags: IconLookupFlags
        ): IconInfo | null;
        /**
         * Looks up a named icon for a particular window scale and returns a
         * #StIconInfo containing information such as the filename of the
         * icon. The icon can then be rendered into a pixbuf using
         * st_icon_info_load_icon(). (st_icon_theme_load_icon() combines
         * these two steps if all you need is the pixbuf.)
         * @param icon_name the name of the icon to lookup
         * @param size desired icon size
         * @param scale the desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo object     containing information about the icon, or %NULL if the     icon wasn’t found.
         */
        lookup_icon_for_scale(
            icon_name: string | null,
            size: number,
            scale: number,
            flags: IconLookupFlags
        ): IconInfo | null;
        /**
         * Prepends a directory to the search path.
         * See st_icon_theme_set_search_path().
         * @param path directory name to prepend to the icon path
         */
        prepend_search_path(path: string): void;
        /**
         * Checks to see if the icon theme has changed; if it has, any
         * currently cached information is discarded and will be reloaded
         * next time `icon_theme` is accessed.
         * @returns %TRUE if the icon theme has changed and needed     to be reloaded.
         */
        rescan_if_needed(): boolean;
        /**
         * Sets the search path for the icon theme object. When looking
         * for an icon theme, GTK+ will search for a subdirectory of
         * one or more of the directories in `path` with the same name
         * as the icon theme containing an index.theme file. (Themes from
         * multiple of the path elements are combined to allow themes to be
         * extended by adding icons in the user’s home directory.)
         *
         * In addition if an icon found isn’t found either in the current
         * icon theme or the default icon theme, and an image file with
         * the right name is found directly in one of the elements of
         * `path,` then that image will be used for the icon name.
         * (This is legacy feature, and new icons should be put
         * into the fallback icon theme, which is called hicolor,
         * rather than directly on the icon path.)
         * @param path array of     directories that are searched for icon themes
         */
        set_search_path(path: string[]): void;

        // Own signals of St-13.St.IconTheme

        connect(
            sigName: 'changed',
            callback: IconTheme.ChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'changed',
            callback: IconTheme.ChangedSignalCallback
        ): number;
        emit(sigName: 'changed', ...args: any[]): void;

        // Class property signals of St-13.St.IconTheme

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * #StIconTheme provides a facility for looking up icons by name
     * and size. The main reason for using a name rather than simply
     * providing a filename is to allow different icons to be used
     * depending on what “icon theme” is selected
     * by the user. The operation of icon themes on Linux and Unix
     * follows the [Icon Theme Specification](http://www.freedesktop.org/Standards/icon-theme-spec)
     * There is a fallback icon theme, named `hicolor`, where applications
     * should install their icons, but additional icon themes can be installed
     * as operating system vendors and users choose.
     *
     * In many cases, named themes are used indirectly, via #StIcon,
     * rather than directly, but looking up icons directly is also simple.
     * The #StIconTheme object acts as a database of all the icons in the
     * current theme.
     * @class
     */
    class IconTheme extends GObject.Object {
        // Own properties of St-13.St.IconTheme

        static name: string;
        static $gtype: GObject.GType<IconTheme>;

        // Constructors of St-13.St.IconTheme

        constructor(config?: IconTheme.ConstructorProperties);
        /**
         * Creates a new icon theme object. Icon theme objects are used
         * to lookup up an icon by name in a particular icon theme.
         * @constructor
         * @returns the newly created #StIconTheme object.
         */
        constructor();
        /**
         * Creates a new icon theme object. Icon theme objects are used
         * to lookup up an icon by name in a particular icon theme.
         * @constructor
         * @returns the newly created #StIconTheme object.
         */
        static new(): IconTheme;
        _init(config?: IconTheme.ConstructorProperties): void;
    }

    module ImageContent {
        // Constructor properties interface

        interface ConstructorProperties
            extends Clutter.Content.ConstructorProperties,
                Gio.Icon.ConstructorProperties,
                Gio.LoadableIcon.ConstructorProperties,
                Clutter.Image.ConstructorProperties {
            // Own constructor properties of St-13.St.ImageContent

            preferred_height?: number | null;
            preferred_width?: number | null;
        }
    }

    interface ImageContent extends Clutter.Content, Gio.Icon, Gio.LoadableIcon {
        // Own properties of St-13.St.ImageContent

        readonly preferred_height: number;
        readonly preferred_width: number;

        // Conflicting methods

        /**
         * Sets the image data to be displayed by `image`.
         *
         * If the image data was successfully loaded, the `image` will be invalidated.
         *
         * In case of error, the `error` value will be set, and this function will
         * return %FALSE.
         *
         * The image data is copied in texture memory.
         *
         * The image data is expected to be a linear array of RGBA or RGB pixel data;
         * how to retrieve that data is left to platform specific image loaders. For
         * instance, if you use the GdkPixbuf library:
         *
         * ```c
         *   ClutterContent *image = clutter_image_new ();
         *
         *   GdkPixbuf *pixbuf = gdk_pixbuf_new_from_file (filename, NULL);
         *
         *   clutter_image_set_data (CLUTTER_IMAGE (image),
         *                           gdk_pixbuf_get_pixels (pixbuf),
         *                           gdk_pixbuf_get_has_alpha (pixbuf)
         *                             ? COGL_PIXEL_FORMAT_RGBA_8888
         *                             : COGL_PIXEL_FORMAT_RGB_888,
         *                           gdk_pixbuf_get_width (pixbuf),
         *                           gdk_pixbuf_get_height (pixbuf),
         *                           gdk_pixbuf_get_rowstride (pixbuf),
         *                           &error);
         *
         *   g_object_unref (pixbuf);
         * ```
         * @param data the image data, as an array of bytes
         * @param pixel_format the Cogl pixel format of the image data
         * @param width the width of the image data
         * @param height the height of the image data
         * @param row_stride the length of each row inside `data`
         * @returns %TRUE if the image data was successfully loaded,   and %FALSE otherwise.
         */
        set_data(
            data: Uint8Array,
            pixel_format: Cogl.PixelFormat,
            width: number,
            height: number,
            row_stride: number
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

        // Class property signals of St-13.St.ImageContent

        connect(
            sigName: 'notify::preferred-height',
            callback: ($obj: ImageContent, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::preferred-height',
            callback: ($obj: ImageContent, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::preferred-height', ...args: any[]): void;
        connect(
            sigName: 'notify::preferred-width',
            callback: ($obj: ImageContent, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::preferred-width',
            callback: ($obj: ImageContent, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::preferred-width', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class ImageContent extends Clutter.Image {
        // Own properties of St-13.St.ImageContent

        static name: string;
        static $gtype: GObject.GType<ImageContent>;

        // Constructors of St-13.St.ImageContent

        constructor(config?: ImageContent.ConstructorProperties);
        _init(config?: ImageContent.ConstructorProperties): void;
        /**
         * Creates a new #StImageContent, a simple content for sized images.
         *
         * See #ClutterImage for setting the actual image to display or #StIcon for
         * displaying icons.
         * @param width The preferred width to be used when drawing the content
         * @param height The preferred width to be used when drawing the content
         * @returns the newly created #StImageContent content   Use g_object_unref() when done.
         */
        static new_with_preferred_size(
            width: number,
            height: number
        ): Clutter.Content;
    }

    module Label {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Widget.ConstructorProperties {
            // Own constructor properties of St-13.St.Label

            /**
             * The current text being display in the #StLabel.
             */
            text?: string | null;
        }
    }

    interface Label
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.Label

        /**
         * The internal #ClutterText actor supporting the label
         */
        readonly clutter_text: Clutter.Text;
        /**
         * The current text being display in the #StLabel.
         */
        text: string | null;

        // Owm methods of St-13.St.Label

        /**
         * Retrieve the internal #ClutterText used by `label` so that extra parameters
         * can be set.
         * @returns the #ClutterText used by #StLabel. The actor is owned by the #StLabel and should not be destroyed by the application.
         */
        get_clutter_text(): Clutter.Actor;
        /**
         * Get the text displayed on the label.
         * @returns the text for the label. This must not be freed by the application
         */
        get_text(): string | null;
        /**
         * Sets the text displayed by the label.
         * @param text text to set the label to
         */
        set_text(text: string | null): void;

        // Class property signals of St-13.St.Label

        connect(
            sigName: 'notify::clutter-text',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clutter-text',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clutter-text', ...args: any[]): void;
        connect(
            sigName: 'notify::text',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: Label, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     * @class
     */
    class Label extends Widget {
        // Own properties of St-13.St.Label

        static name: string;
        static $gtype: GObject.GType<Label>;

        // Constructors of St-13.St.Label

        constructor(config?: Label.ConstructorProperties);
        /**
         * Create a new #StLabel with the label specified by `text`.
         * @constructor
         * @param text text to set the label to
         * @returns a new #StLabel
         */
        constructor(text: string | null);
        /**
         * Create a new #StLabel with the label specified by `text`.
         * @constructor
         * @param text text to set the label to
         * @returns a new #StLabel
         */
        static new(text: string | null): Label;

        // Overloads of new

        /**
         * Creates a new #ClutterActor.
         *
         * A newly created actor has a floating reference, which will be sunk
         * when it is added to another actor.
         * @constructor
         * @returns the newly created #ClutterActor
         */
        static new(): Clutter.Actor;
        _init(config?: Label.ConstructorProperties): void;
    }

    module PasswordEntry {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Entry.ConstructorProperties {
            // Own constructor properties of St-13.St.PasswordEntry

            /**
             * Whether the text in the entry is masked for privacy.
             */
            password_visible?: boolean | null;
            /**
             * Whether to display an icon button to toggle the masking enabled by the
             * #StPasswordEntry:password-visible property.
             */
            show_peek_icon?: boolean | null;
        }
    }

    interface PasswordEntry
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.PasswordEntry

        /**
         * Whether the text in the entry is masked for privacy.
         */
        password_visible: boolean;
        /**
         * Whether to display an icon button to toggle the masking enabled by the
         * #StPasswordEntry:password-visible property.
         */
        show_peek_icon: boolean;

        // Conflicting properties

        parent_instance: Widget & Clutter.Actor & Clutter.Actor;

        // Owm methods of St-13.St.PasswordEntry

        /**
         * Gets whether the text is masked in the password entry.
         * @returns %TRUE if visible
         */
        get_password_visible(): boolean;
        /**
         * Gets whether peek-icon is shown or hidden in the password entry.
         * @returns %TRUE if visible
         */
        get_show_peek_icon(): boolean;
        /**
         * Sets whether to show or hide text in the password entry.
         * @param value %TRUE to show the password in the entry, #FALSE otherwise
         */
        set_password_visible(value: boolean): void;
        /**
         * Sets whether to show or hide the peek-icon in the password entry. If %TRUE,
         * a icon button for temporarily unmasking the password will be shown at the
         * end of the entry.
         * @param value %TRUE to show the peek-icon in the entry
         */
        set_show_peek_icon(value: boolean): void;

        // Class property signals of St-13.St.PasswordEntry

        connect(
            sigName: 'notify::password-visible',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::password-visible',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::password-visible', ...args: any[]): void;
        connect(
            sigName: 'notify::show-peek-icon',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-peek-icon',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-peek-icon', ...args: any[]): void;
        connect(
            sigName: 'notify::clutter-text',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clutter-text',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clutter-text', ...args: any[]): void;
        connect(
            sigName: 'notify::hint-actor',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hint-actor',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hint-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::hint-text',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hint-text',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hint-text', ...args: any[]): void;
        connect(
            sigName: 'notify::input-hints',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::input-hints',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::input-hints', ...args: any[]): void;
        connect(
            sigName: 'notify::input-purpose',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::input-purpose',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::input-purpose', ...args: any[]): void;
        connect(
            sigName: 'notify::primary-icon',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::primary-icon',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::primary-icon', ...args: any[]): void;
        connect(
            sigName: 'notify::secondary-icon',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::secondary-icon',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::secondary-icon', ...args: any[]): void;
        connect(
            sigName: 'notify::text',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: PasswordEntry, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class PasswordEntry extends Entry {
        // Own properties of St-13.St.PasswordEntry

        static name: string;
        static $gtype: GObject.GType<PasswordEntry>;

        // Constructors of St-13.St.PasswordEntry

        constructor(config?: PasswordEntry.ConstructorProperties);
        /**
         * Create a new #StPasswordEntry.
         * @constructor
         * @returns a new #StEntry
         */
        constructor();
        /**
         * Create a new #StPasswordEntry.
         * @constructor
         * @returns a new #StEntry
         */
        static new(): PasswordEntry;

        // Overloads of new

        /**
         * Create a new #StEntry with the specified text.
         * @constructor
         * @param text text to set the entry to
         * @returns a new #StEntry
         */
        static new(text: string | null): Entry;
        /**
         * Creates a new #ClutterActor.
         *
         * A newly created actor has a floating reference, which will be sunk
         * when it is added to another actor.
         * @constructor
         * @returns the newly created #ClutterActor
         */
        static new(): Clutter.Actor;
        _init(config?: PasswordEntry.ConstructorProperties): void;
    }

    module ScrollBar {
        // Signal callback interfaces

        /**
         * Signal callback interface for `scroll-start`
         */
        interface ScrollStartSignalCallback {
            ($obj: ScrollBar): void;
        }

        /**
         * Signal callback interface for `scroll-stop`
         */
        interface ScrollStopSignalCallback {
            ($obj: ScrollBar): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Widget.ConstructorProperties {
            // Own constructor properties of St-13.St.ScrollBar

            /**
             * The #StAdjustment controlling the #StScrollBar.
             */
            adjustment?: Adjustment | null;
            /**
             * Whether the #StScrollBar is vertical. If %FALSE it is horizontal.
             */
            vertical?: boolean | null;
        }
    }

    interface ScrollBar
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.ScrollBar

        /**
         * The #StAdjustment controlling the #StScrollBar.
         */
        adjustment: Adjustment;
        /**
         * Whether the #StScrollBar is vertical. If %FALSE it is horizontal.
         */
        vertical: boolean;

        // Own fields of St-13.St.ScrollBar

        parent_instance: Widget & Clutter.Actor;

        // Owm methods of St-13.St.ScrollBar

        /**
         * Gets the #StAdjustment that controls the current position of `bar`.
         * @returns an #StAdjustment
         */
        get_adjustment(): Adjustment;
        set_adjustment(adjustment: Adjustment): void;

        // Own virtual methods of St-13.St.ScrollBar

        vfunc_scroll_start(): void;
        vfunc_scroll_stop(): void;

        // Own signals of St-13.St.ScrollBar

        connect(
            sigName: 'scroll-start',
            callback: ScrollBar.ScrollStartSignalCallback
        ): number;
        connect_after(
            sigName: 'scroll-start',
            callback: ScrollBar.ScrollStartSignalCallback
        ): number;
        emit(sigName: 'scroll-start', ...args: any[]): void;
        connect(
            sigName: 'scroll-stop',
            callback: ScrollBar.ScrollStopSignalCallback
        ): number;
        connect_after(
            sigName: 'scroll-stop',
            callback: ScrollBar.ScrollStopSignalCallback
        ): number;
        emit(sigName: 'scroll-stop', ...args: any[]): void;

        // Class property signals of St-13.St.ScrollBar

        connect(
            sigName: 'notify::adjustment',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::adjustment',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::adjustment', ...args: any[]): void;
        connect(
            sigName: 'notify::vertical',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::vertical',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::vertical', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: ScrollBar, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class ScrollBar extends Widget {
        // Own properties of St-13.St.ScrollBar

        static name: string;
        static $gtype: GObject.GType<ScrollBar>;

        // Constructors of St-13.St.ScrollBar

        constructor(config?: ScrollBar.ConstructorProperties);
        constructor(adjustment: Adjustment);
        static new(adjustment: Adjustment): ScrollBar;

        // Overloads of new

        /**
         * Creates a new #ClutterActor.
         *
         * A newly created actor has a floating reference, which will be sunk
         * when it is added to another actor.
         * @constructor
         * @returns the newly created #ClutterActor
         */
        static new(): Clutter.Actor;
        _init(config?: ScrollBar.ConstructorProperties): void;
    }

    module ScrollView {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Bin.ConstructorProperties {
            // Own constructor properties of St-13.St.ScrollView

            /**
             * Whether to enable automatic mouse wheel scrolling.
             */
            enable_mouse_scrolling?: boolean | null;
            /**
             * The #StPolicyType for when to show the horizontal #StScrollBar.
             */
            hscrollbar_policy?: PolicyType | null;
            /**
             * Whether scrollbars are painted on top of the content.
             */
            overlay_scrollbars?: boolean | null;
            /**
             * The #StPolicyType for when to show the vertical #StScrollBar.
             */
            vscrollbar_policy?: PolicyType | null;
        }
    }

    interface ScrollView
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.ScrollView

        /**
         * Whether to enable automatic mouse wheel scrolling.
         */
        enable_mouse_scrolling: boolean;
        /**
         * The horizontal #StScrollBar for the #StScrollView.
         */
        readonly hscroll: ScrollBar;
        /**
         * The #StPolicyType for when to show the horizontal #StScrollBar.
         */
        hscrollbar_policy: PolicyType;
        /**
         * Whether the horizontal #StScrollBar is visible.
         */
        readonly hscrollbar_visible: boolean;
        /**
         * Whether scrollbars are painted on top of the content.
         */
        overlay_scrollbars: boolean;
        /**
         * The vertical #StScrollBar for the #StScrollView.
         */
        readonly vscroll: ScrollBar;
        /**
         * The #StPolicyType for when to show the vertical #StScrollBar.
         */
        vscrollbar_policy: PolicyType;
        /**
         * Whether the vertical #StScrollBar is visible.
         */
        readonly vscrollbar_visible: boolean;

        // Conflicting properties

        parent_instance: Widget & Clutter.Actor & Clutter.Actor;

        // Owm methods of St-13.St.ScrollView

        /**
         * Get the step increment of the horizontal plane.
         * @returns the horizontal step increment
         */
        get_column_size(): number;
        /**
         * Gets the horizontal #StScrollBar of the #StScrollView.
         * @returns the horizontal scrollbar
         */
        get_hscroll_bar(): Clutter.Actor;
        /**
         * Get whether automatic mouse wheel scrolling is enabled or disabled.
         * @returns %TRUE if enabled, %FALSE otherwise
         */
        get_mouse_scrolling(): boolean;
        /**
         * Gets whether scrollbars are painted on top of the content.
         * @returns %TRUE if enabled, %FALSE otherwise
         */
        get_overlay_scrollbars(): boolean;
        /**
         * Get the step increment of the vertical plane.
         * @returns the vertical step increment
         */
        get_row_size(): number;
        /**
         * Gets the vertical scrollbar of the #StScrollView.
         * @returns the vertical #StScrollBar
         */
        get_vscroll_bar(): Clutter.Actor;
        /**
         * Set the step increment of the horizontal plane to `column_size`.
         * @param column_size horizontal step increment
         */
        set_column_size(column_size: number): void;
        /**
         * Sets automatic mouse wheel scrolling to enabled or disabled.
         * @param enabled %TRUE or %FALSE
         */
        set_mouse_scrolling(enabled: boolean): void;
        /**
         * Sets whether scrollbars are painted on top of the content.
         * @param enabled Whether to enable overlay scrollbars
         */
        set_overlay_scrollbars(enabled: boolean): void;
        /**
         * Set the scroll policy.
         * @param hscroll Whether to enable horizontal scrolling
         * @param vscroll Whether to enable vertical scrolling
         */
        set_policy(hscroll: PolicyType, vscroll: PolicyType): void;
        /**
         * Set the step increment of the vertical plane to `row_size`.
         * @param row_size vertical step increment
         */
        set_row_size(row_size: number): void;
        /**
         * Sets the fade effects in all four edges of the view. A value of 0
         * disables the effect.
         * @param fade_margins a #ClutterMargin defining the vertical fade effects, in pixels.
         */
        update_fade_effect(fade_margins: Clutter.Margin): void;

        // Class property signals of St-13.St.ScrollView

        connect(
            sigName: 'notify::enable-mouse-scrolling',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::enable-mouse-scrolling',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::enable-mouse-scrolling', ...args: any[]): void;
        connect(
            sigName: 'notify::hscroll',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hscroll',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hscroll', ...args: any[]): void;
        connect(
            sigName: 'notify::hscrollbar-policy',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hscrollbar-policy',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hscrollbar-policy', ...args: any[]): void;
        connect(
            sigName: 'notify::hscrollbar-visible',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hscrollbar-visible',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hscrollbar-visible', ...args: any[]): void;
        connect(
            sigName: 'notify::overlay-scrollbars',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::overlay-scrollbars',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::overlay-scrollbars', ...args: any[]): void;
        connect(
            sigName: 'notify::vscroll',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::vscroll',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::vscroll', ...args: any[]): void;
        connect(
            sigName: 'notify::vscrollbar-policy',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::vscrollbar-policy',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::vscrollbar-policy', ...args: any[]): void;
        connect(
            sigName: 'notify::vscrollbar-visible',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::vscrollbar-visible',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::vscrollbar-visible', ...args: any[]): void;
        connect(
            sigName: 'notify::child',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: ScrollView, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     * @class
     */
    class ScrollView extends Bin {
        // Own properties of St-13.St.ScrollView

        static name: string;
        static $gtype: GObject.GType<ScrollView>;

        // Constructors of St-13.St.ScrollView

        constructor(config?: ScrollView.ConstructorProperties);
        /**
         * Create a new #StScrollView.
         * @constructor
         * @returns a new #StScrollView
         */
        constructor();
        /**
         * Create a new #StScrollView.
         * @constructor
         * @returns a new #StScrollView
         */
        static new(): ScrollView;

        // Overloads of new

        /**
         * Creates a new #StBin, a simple container for one child.
         * @constructor
         * @returns the newly created #StBin actor
         */
        static new(): Bin;
        /**
         * Creates a new #ClutterActor.
         *
         * A newly created actor has a floating reference, which will be sunk
         * when it is added to another actor.
         * @constructor
         * @returns the newly created #ClutterActor
         */
        static new(): Clutter.Actor;
        _init(config?: ScrollView.ConstructorProperties): void;
    }

    module ScrollViewFade {
        // Constructor properties interface

        interface ConstructorProperties
            extends Clutter.ShaderEffect.ConstructorProperties {
            // Own constructor properties of St-13.St.ScrollViewFade

            /**
             * Whether faded edges should extend beyond the faded area of the #StScrollViewFade.
             */
            extend_fade_area?: boolean | null;
            /**
             * Whether the faded area should extend to the edges of the #StScrollViewFade.
             */
            fade_edges?: boolean | null;
            /**
             * The margins widths that are faded.
             */
            fade_margins?: Clutter.Margin | null;
        }
    }

    interface ScrollViewFade {
        // Own properties of St-13.St.ScrollViewFade

        /**
         * Whether faded edges should extend beyond the faded area of the #StScrollViewFade.
         */
        extend_fade_area: boolean;
        /**
         * Whether the faded area should extend to the edges of the #StScrollViewFade.
         */
        fade_edges: boolean;
        /**
         * The margins widths that are faded.
         */
        fade_margins: Clutter.Margin;

        // Class property signals of St-13.St.ScrollViewFade

        connect(
            sigName: 'notify::extend-fade-area',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::extend-fade-area',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::extend-fade-area', ...args: any[]): void;
        connect(
            sigName: 'notify::fade-edges',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fade-edges',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fade-edges', ...args: any[]): void;
        connect(
            sigName: 'notify::fade-margins',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fade-margins',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fade-margins', ...args: any[]): void;
        connect(
            sigName: 'notify::shader-type',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::shader-type',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::shader-type', ...args: any[]): void;
        connect(
            sigName: 'notify::actor',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actor',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actor', ...args: any[]): void;
        connect(
            sigName: 'notify::enabled',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::enabled',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::enabled', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: ScrollViewFade, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class ScrollViewFade extends Clutter.ShaderEffect {
        // Own properties of St-13.St.ScrollViewFade

        static name: string;
        static $gtype: GObject.GType<ScrollViewFade>;

        // Constructors of St-13.St.ScrollViewFade

        constructor(config?: ScrollViewFade.ConstructorProperties);
        /**
         * Create a new #StScrollViewFade.
         * @constructor
         * @returns a new #StScrollViewFade
         */
        constructor();
        /**
         * Create a new #StScrollViewFade.
         * @constructor
         * @returns a new #StScrollViewFade
         */
        static new(): ScrollViewFade;

        // Overloads of new

        /**
         * Creates a new #ClutterShaderEffect, to be applied to an actor using
         * [method`Actor`.add_effect].
         *
         * The effect will be empty until [method`ShaderEffect`.set_shader_source]
         * is called.
         * @constructor
         * @param shader_type the type of the shader, either %CLUTTER_FRAGMENT_SHADER,   or %CLUTTER_VERTEX_SHADER
         * @returns the newly created #ClutterShaderEffect.   Use g_object_unref() when done.
         */
        static new(shader_type: Clutter.ShaderType): Clutter.ShaderEffect;
        _init(config?: ScrollViewFade.ConstructorProperties): void;
    }

    module Settings {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of St-13.St.Settings

            /**
             * The slow-down factor applied to all animation durations.
             */
            slow_down_factor?: number | null;
        }
    }

    interface Settings {
        // Own properties of St-13.St.Settings

        /**
         * The preferred color-scheme
         */
        readonly color_scheme: SystemColorScheme;
        /**
         * Whether password showing can be locked down
         */
        readonly disable_show_password: boolean;
        /**
         * The threshold before a drag operation begins.
         */
        readonly drag_threshold: number;
        /**
         * Whether animations are enabled.
         */
        readonly enable_animations: boolean;
        /**
         * The current font name.
         */
        readonly font_name: string | null;
        /**
         * The current GTK icon theme
         */
        readonly gtk_icon_theme: string | null;
        /**
         * Whether the accessibility high contrast mode is enabled.
         */
        readonly high_contrast: boolean;
        /**
         * Whether the accessibility magnifier is active.
         */
        readonly magnifier_active: boolean;
        /**
         * Whether pasting from the `PRIMARY` selection is supported (eg. middle-click
         * paste).
         */
        readonly primary_paste: boolean;
        /**
         * The slow-down factor applied to all animation durations.
         */
        slow_down_factor: number;

        // Owm methods of St-13.St.Settings

        inhibit_animations(): void;
        uninhibit_animations(): void;

        // Class property signals of St-13.St.Settings

        connect(
            sigName: 'notify::color-scheme',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-scheme',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-scheme', ...args: any[]): void;
        connect(
            sigName: 'notify::disable-show-password',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::disable-show-password',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::disable-show-password', ...args: any[]): void;
        connect(
            sigName: 'notify::drag-threshold',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::drag-threshold',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::drag-threshold', ...args: any[]): void;
        connect(
            sigName: 'notify::enable-animations',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::enable-animations',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::enable-animations', ...args: any[]): void;
        connect(
            sigName: 'notify::font-name',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::font-name',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::font-name', ...args: any[]): void;
        connect(
            sigName: 'notify::gtk-icon-theme',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::gtk-icon-theme',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::gtk-icon-theme', ...args: any[]): void;
        connect(
            sigName: 'notify::high-contrast',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::high-contrast',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::high-contrast', ...args: any[]): void;
        connect(
            sigName: 'notify::magnifier-active',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnifier-active',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnifier-active', ...args: any[]): void;
        connect(
            sigName: 'notify::primary-paste',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::primary-paste',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::primary-paste', ...args: any[]): void;
        connect(
            sigName: 'notify::slow-down-factor',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::slow-down-factor',
            callback: ($obj: Settings, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::slow-down-factor', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Settings extends GObject.Object {
        // Own properties of St-13.St.Settings

        static name: string;
        static $gtype: GObject.GType<Settings>;

        // Constructors of St-13.St.Settings

        constructor(config?: Settings.ConstructorProperties);
        _init(config?: Settings.ConstructorProperties): void;
        /**
         * Gets the global #StSettings object.
         * @returns the global #StSettings object
         */
        static get(): Settings;
    }

    module TextureCache {
        // Signal callback interfaces

        /**
         * Signal callback interface for `icon-theme-changed`
         */
        interface IconThemeChangedSignalCallback {
            ($obj: TextureCache): void;
        }

        /**
         * Signal callback interface for `texture-file-changed`
         */
        interface TextureFileChangedSignalCallback {
            ($obj: TextureCache, file: Gio.File): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface TextureCache {
        // Own fields of St-13.St.TextureCache

        parent: GObject.Object;
        priv: TextureCachePrivate;

        // Owm methods of St-13.St.TextureCache

        /**
         * Create a #GIcon which tracks the #cairo_surface_t value of a GObject property
         * named by `property_name`.  Unlike other methods in StTextureCache, the underlying
         * #CoglTexture is not shared by default with other invocations to this method.
         *
         * If the source object is destroyed, the texture will continue to show the last
         * value of the property.
         * @param object A #GObject with a property `property_name` of type #cairo_surface_t
         * @param property_name Name of a property
         * @returns A new #GIcon
         */
        bind_cairo_surface_property(
            object: GObject.Object,
            property_name: string | null
        ): Gio.Icon;
        /**
         * Create a #GIcon from `surface`.
         * @param surface A #cairo_surface_t
         * @returns A new #GIcon
         */
        load_cairo_surface_to_gicon(surface: cairo.Surface): Gio.Icon;
        /**
         * Asynchronously load an image.   Initially, the returned texture will have a natural
         * size of zero.  At some later point, either the image will be loaded successfully
         * and at that point size will be negotiated, or upon an error, no image will be set.
         * @param file a #GFile of the image file from which to create a pixbuf
         * @param available_width available width for the image, can be -1 if not limited
         * @param available_height available height for the image, can be -1 if not limited
         * @param paint_scale scale factor of the display
         * @param resource_scale Resource scale factor
         * @returns A new #ClutterActor with no image loaded initially.
         */
        load_file_async(
            file: Gio.File,
            available_width: number,
            available_height: number,
            paint_scale: number,
            resource_scale: number
        ): Clutter.Actor;
        /**
         * This function synchronously loads the given file path
         * into a cairo surface.  On error, a warning is emitted
         * and %NULL is returned.
         * @param file A #GFile in supported image format
         * @param paint_scale Scale factor of the display
         * @param resource_scale Resource scale factor
         * @returns a new #cairo_surface_t
         */
        load_file_to_cairo_surface(
            file: Gio.File,
            paint_scale: number,
            resource_scale: number
        ): cairo.Surface;
        /**
         * This method returns a new #ClutterActor for a given #GIcon. If the
         * icon isn't loaded already, the texture will be filled
         * asynchronously.
         * @param theme_node The #StThemeNode to use for colors, or %NULL                            if the icon must not be recolored
         * @param icon the #GIcon to load
         * @param size Size of themed
         * @param paint_scale Scale factor of display
         * @param resource_scale Resource scale factor
         * @returns A new #ClutterActor for the icon, or %NULL if not found
         */
        load_gicon(
            theme_node: ThemeNode | null,
            icon: Gio.Icon,
            size: number,
            paint_scale: number,
            resource_scale: number
        ): Clutter.Actor | null;
        /**
         * This function reads a single image file which contains multiple images internally.
         * The image file will be divided using `grid_width` and `grid_height;`
         * note that the dimensions of the image loaded from `path`
         * should be a multiple of the specified grid dimensions.
         * @param file A #GFile
         * @param grid_width Width in pixels
         * @param grid_height Height in pixels
         * @param paint_scale Scale factor of the display
         * @param resource_scale
         * @param load_callback Function called when the image is loaded, or %NULL
         * @returns A new #ClutterActor
         */
        load_sliced_image(
            file: Gio.File,
            grid_width: number,
            grid_height: number,
            paint_scale: number,
            resource_scale: number,
            load_callback: GLib.Func | null
        ): Clutter.Actor;
        /**
         * Rescan the current icon theme, if necessary.
         * @returns %TRUE if the icon theme has changed and needed to be reloaded.
         */
        rescan_icon_theme(): boolean;

        // Own signals of St-13.St.TextureCache

        connect(
            sigName: 'icon-theme-changed',
            callback: TextureCache.IconThemeChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'icon-theme-changed',
            callback: TextureCache.IconThemeChangedSignalCallback
        ): number;
        emit(sigName: 'icon-theme-changed', ...args: any[]): void;
        connect(
            sigName: 'texture-file-changed',
            callback: TextureCache.TextureFileChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'texture-file-changed',
            callback: TextureCache.TextureFileChangedSignalCallback
        ): number;
        emit(
            sigName: 'texture-file-changed',
            file: Gio.File,
            ...args: any[]
        ): void;

        // Class property signals of St-13.St.TextureCache

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class TextureCache extends GObject.Object {
        // Own properties of St-13.St.TextureCache

        static name: string;
        static $gtype: GObject.GType<TextureCache>;

        // Constructors of St-13.St.TextureCache

        constructor(config?: TextureCache.ConstructorProperties);
        _init(config?: TextureCache.ConstructorProperties): void;
        static get_default(): TextureCache;
    }

    module Theme {
        // Signal callback interfaces

        /**
         * Signal callback interface for `custom-stylesheets-changed`
         */
        interface CustomStylesheetsChangedSignalCallback {
            ($obj: Theme): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of St-13.St.Theme

            /**
             * The highest priority stylesheet, representing application-specific
             * styling; this is associated with the CSS "author" stylesheet.
             */
            application_stylesheet?: Gio.File | null;
            /**
             * The lowest priority stylesheet, representing global default
             * styling; this is associated with the CSS "user agent" stylesheet.
             */
            default_stylesheet?: Gio.File | null;
            /**
             * The second priority stylesheet, representing theme-specific styling;
             * this is associated with the CSS "user" stylesheet.
             */
            theme_stylesheet?: Gio.File | null;
        }
    }

    interface Theme {
        // Own properties of St-13.St.Theme

        /**
         * The highest priority stylesheet, representing application-specific
         * styling; this is associated with the CSS "author" stylesheet.
         */
        readonly application_stylesheet: Gio.File;
        /**
         * The lowest priority stylesheet, representing global default
         * styling; this is associated with the CSS "user agent" stylesheet.
         */
        readonly default_stylesheet: Gio.File;
        /**
         * The second priority stylesheet, representing theme-specific styling;
         * this is associated with the CSS "user" stylesheet.
         */
        readonly theme_stylesheet: Gio.File;

        // Owm methods of St-13.St.Theme

        /**
         * Get a list of the stylesheet files loaded with st_theme_load_stylesheet().
         * @returns the list of stylesheet files          that were loaded with st_theme_load_stylesheet()
         */
        get_custom_stylesheets(): Gio.File[];
        /**
         * Load the stylesheet associated with `file`.
         * @param file a #GFile
         * @returns %TRUE if successful
         */
        load_stylesheet(file: Gio.File): boolean;
        /**
         * Unload the stylesheet associated with `file`. If `file` was not loaded this
         * function does nothing.
         * @param file a #GFile
         */
        unload_stylesheet(file: Gio.File): void;

        // Own signals of St-13.St.Theme

        connect(
            sigName: 'custom-stylesheets-changed',
            callback: Theme.CustomStylesheetsChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'custom-stylesheets-changed',
            callback: Theme.CustomStylesheetsChangedSignalCallback
        ): number;
        emit(sigName: 'custom-stylesheets-changed', ...args: any[]): void;

        // Class property signals of St-13.St.Theme

        connect(
            sigName: 'notify::application-stylesheet',
            callback: ($obj: Theme, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::application-stylesheet',
            callback: ($obj: Theme, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::application-stylesheet', ...args: any[]): void;
        connect(
            sigName: 'notify::default-stylesheet',
            callback: ($obj: Theme, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::default-stylesheet',
            callback: ($obj: Theme, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::default-stylesheet', ...args: any[]): void;
        connect(
            sigName: 'notify::theme-stylesheet',
            callback: ($obj: Theme, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::theme-stylesheet',
            callback: ($obj: Theme, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::theme-stylesheet', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Theme extends GObject.Object {
        // Own properties of St-13.St.Theme

        static name: string;
        static $gtype: GObject.GType<Theme>;

        // Constructors of St-13.St.Theme

        constructor(config?: Theme.ConstructorProperties);
        constructor(
            application_stylesheet: Gio.File,
            theme_stylesheet: Gio.File,
            default_stylesheet: Gio.File
        );
        static new(
            application_stylesheet: Gio.File,
            theme_stylesheet: Gio.File,
            default_stylesheet: Gio.File
        ): Theme;
        _init(config?: Theme.ConstructorProperties): void;
    }

    module ThemeContext {
        // Signal callback interfaces

        /**
         * Signal callback interface for `changed`
         */
        interface ChangedSignalCallback {
            ($obj: ThemeContext): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of St-13.St.ThemeContext

            /**
             * The scaling factor used for HiDPI scaling.
             */
            scale_factor?: number | null;
        }
    }

    interface ThemeContext {
        // Own properties of St-13.St.ThemeContext

        /**
         * The scaling factor used for HiDPI scaling.
         */
        scale_factor: number;

        // Owm methods of St-13.St.ThemeContext

        /**
         * Gets the default font for the theme context. See st_theme_context_set_font().
         * @returns the default font for the theme context.
         */
        get_font(): Pango.FontDescription;
        /**
         * Gets the root node of the tree of theme style nodes that associated with this
         * context. For the node tree associated with a stage, this node represents
         * styles applied to the stage itself.
         * @returns the root node of the context's style tree
         */
        get_root_node(): ThemeNode;
        /**
         * Return the current scale factor of `context`.
         * @returns an integer scale factor
         */
        get_scale_factor(): number;
        /**
         * Gets the default theme for the context. See st_theme_context_set_theme()
         * @returns the default theme for the context
         */
        get_theme(): Theme;
        /**
         * Return an existing node matching `node,` or if that isn't possible,
         * `node` itself.
         * @param node a #StThemeNode
         * @returns a node with the same properties as @node
         */
        intern_node(node: ThemeNode): ThemeNode;
        /**
         * Sets the default font for the theme context. This is the font that
         * is inherited by the root node of the tree of theme nodes. If the
         * font is not overridden, then this font will be used. If the font is
         * partially modified (for example, with 'font-size: 110%'), then that
         * modification is based on this font.
         * @param font the default font for theme context
         */
        set_font(font: Pango.FontDescription): void;
        /**
         * Sets the default set of theme stylesheets for the context. This theme will
         * be used for the root node and for nodes descending from it, unless some other
         * style is explicitly specified.
         * @param theme a #StTheme
         */
        set_theme(theme: Theme): void;

        // Own signals of St-13.St.ThemeContext

        connect(
            sigName: 'changed',
            callback: ThemeContext.ChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'changed',
            callback: ThemeContext.ChangedSignalCallback
        ): number;
        emit(sigName: 'changed', ...args: any[]): void;

        // Class property signals of St-13.St.ThemeContext

        connect(
            sigName: 'notify::scale-factor',
            callback: ($obj: ThemeContext, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-factor',
            callback: ($obj: ThemeContext, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-factor', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class ThemeContext extends GObject.Object {
        // Own properties of St-13.St.ThemeContext

        static name: string;
        static $gtype: GObject.GType<ThemeContext>;

        // Constructors of St-13.St.ThemeContext

        constructor(config?: ThemeContext.ConstructorProperties);
        /**
         * Create a new theme context not associated with any #ClutterStage.
         * This can be useful in testing scenarios, or if using StThemeContext
         * with something other than #ClutterActor objects, but you generally
         * should use st_theme_context_get_for_stage() instead.
         * @constructor
         * @returns a new #StThemeContext
         */
        constructor();
        /**
         * Create a new theme context not associated with any #ClutterStage.
         * This can be useful in testing scenarios, or if using StThemeContext
         * with something other than #ClutterActor objects, but you generally
         * should use st_theme_context_get_for_stage() instead.
         * @constructor
         * @returns a new #StThemeContext
         */
        static new(): ThemeContext;
        _init(config?: ThemeContext.ConstructorProperties): void;
        /**
         * Gets a singleton theme context associated with the stage.
         * @param stage a #ClutterStage
         * @returns the singleton theme context for the stage
         */
        static get_for_stage(stage: Clutter.Stage): ThemeContext;
    }

    module ThemeNode {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface ThemeNode {
        // Owm methods of St-13.St.ThemeNode

        /**
         * Adjusts a "for height" passed to clutter_actor_get_preferred_width() to
         * account for borders and padding. This is a convenience function meant
         * to be called from a get_preferred_width() method of a #ClutterActor
         * subclass. The value after adjustment is the height available for the actor's
         * content.
         * @param for_height the "for height" to adjust
         */
        adjust_for_height(for_height: number): /* for_height */ number;
        /**
         * Adjusts a "for width" passed to clutter_actor_get_preferred_height() to
         * account for borders and padding. This is a convenience function meant
         * to be called from a get_preferred_height() method of a #ClutterActor
         * subclass. The value after adjustment is the width available for the actor's
         * content.
         * @param for_width the "for width" to adjust
         */
        adjust_for_width(for_width: number): /* for_width */ number;
        /**
         * Adjusts the minimum and natural height computed for an actor by
         * adding on the necessary space for borders and padding and taking
         * into account any minimum or maximum height. This is a convenience
         * function meant to be called from the get_preferred_height() method
         * of a #ClutterActor subclass
         * @param min_height_p the minimum height to adjust
         * @param natural_height_p the natural height to adjust
         */
        adjust_preferred_height(
            min_height_p: number | null,
            natural_height_p: number
        ): [/* min_height_p */ number | null, /* natural_height_p */ number];
        /**
         * Adjusts the minimum and natural width computed for an actor by
         * adding on the necessary space for borders and padding and taking
         * into account any minimum or maximum width. This is a convenience
         * function meant to be called from the get_preferred_width() method
         * of a #ClutterActor subclass
         * @param min_width_p the minimum width to adjust
         * @param natural_width_p the natural width to adjust
         */
        adjust_preferred_width(
            min_width_p: number | null,
            natural_width_p: number
        ): [/* min_width_p */ number | null, /* natural_width_p */ number];
        /**
         * Compare two #StThemeNodes. Two nodes which compare equal will match
         * the same CSS rules and have the same style properties. However, two
         * nodes that have ended up with identical style properties do not
         * necessarily compare equal.
         *
         * In detail, `node_a` and `node_b` are considered equal if and only if:
         *
         * - they share the same #StTheme and #StThemeContext
         * - they have the same parent
         * - they have the same element type
         * - their id, class, pseudo-class and inline-style match
         * @param node_b second #StThemeNode
         * @returns %TRUE if @node_a equals @node_b
         */
        equal(node_b: ThemeNode): boolean;
        /**
         * Tests if two theme nodes have the same borders and padding; this can be
         * used to optimize having to relayout when the style applied to a Clutter
         * actor changes colors without changing the geometry.
         * @param other a different #StThemeNode
         * @returns %TRUE if equal, %FALSE otherwise
         */
        geometry_equal(other: ThemeNode): boolean;
        /**
         * Gets `node'`s background color.
         */
        get_background_color(): /* color */ Clutter.Color;
        /**
         * The `start` and `end` arguments will only be set if `type` is not #ST_GRADIENT_NONE.
         */
        get_background_gradient(): [
            /* type */ GradientType,
            /* start */ Clutter.Color,
            /* end */ Clutter.Color
        ];
        get_background_image(): Gio.File;
        /**
         * Gets the value for the -st-background-image-shadow style property
         * @returns the node's background image shadow, or   %NULL if node has no such shadow
         */
        get_background_image_shadow(): Shadow | null;
        /**
         * Gets the box used to paint the actor's background, including the area
         * occupied by properties which paint outside the actor's assigned allocation.
         * @param allocation the box allocated to a #ClutterActor
         */
        get_background_paint_box(
            allocation: Clutter.ActorBox
        ): /* paint_box */ Clutter.ActorBox;
        /**
         * Gets the color of `node'`s border on `side`
         * @param side a #StSide
         */
        get_border_color(side: Side): /* color */ Clutter.Color;
        /**
         * Gets the value for the border-image style property
         * @returns the border image, or %NULL   if there is no border image.
         */
        get_border_image(): BorderImage;
        /**
         * Get the border radius for `node` at `corner,` in physical pixels.
         * @param corner a #StCorner
         * @returns the border radius in physical pixels
         */
        get_border_radius(corner: Corner): number;
        /**
         * Get the border width for `node` on `side,` in physical pixels.
         * @param side a #StCorner
         * @returns the border width in physical pixels
         */
        get_border_width(side: Side): number;
        /**
         * Gets the value for the box-shadow style property
         * @returns the node's shadow, or %NULL   if node has no shadow
         */
        get_box_shadow(): Shadow | null;
        /**
         * Generically looks up a property containing a single color value. When
         * specific getters (like st_theme_node_get_background_color()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * If `property_name` is not found, a warning will be logged and a
         * default color returned.
         *
         * See also st_theme_node_lookup_color(), which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated color.
         * @param property_name The name of the color property
         */
        get_color(property_name: string | null): /* color */ Clutter.Color;
        /**
         * Gets the box within an actor's allocation that contents the content
         * of an actor (excluding borders and padding). This is a convenience function
         * meant to be used from the allocate() or paint() methods of a #ClutterActor
         * subclass.
         * @param allocation the box allocated to a #ClutterAlctor
         */
        get_content_box(
            allocation: Clutter.ActorBox
        ): /* content_box */ Clutter.ActorBox;
        /**
         * Generically looks up a property containing a single numeric value
         *  without units.
         *
         * See also st_theme_node_lookup_double(), which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated value.
         * @param property_name The name of the numeric property
         * @returns the value found. If @property_name is not  found, a warning will be logged and 0 will be returned.
         */
        get_double(property_name: string | null): number;
        /**
         * Get the list of element classes for `node`.
         * @returns the element's classes
         */
        get_element_classes(): string[];
        /**
         * Get the unique element ID for `node`.
         * @returns the element's ID
         */
        get_element_id(): string | null;
        /**
         * Get the element #GType for `node`.
         * @returns the element type
         */
        get_element_type(): GObject.GType;
        /**
         * Get the current font of `node` as a #PangoFontDescription
         * @returns the current font
         */
        get_font(): Pango.FontDescription;
        /**
         * Get the CSS font-features for `node`.
         * @returns font-features as a string
         */
        get_font_features(): string | null;
        /**
         * Gets `node'`s foreground color.
         */
        get_foreground_color(): /* color */ Clutter.Color;
        /**
         * Get the height for `node,` in physical pixels.
         * @returns the height in physical pixels
         */
        get_height(): number;
        /**
         * Gets the total horizontal padding (left + right padding), in physical pixels.
         * @returns the total horizontal padding in physical pixels
         */
        get_horizontal_padding(): number;
        /**
         * Gets the colors that should be used for colorizing symbolic icons according
         * the style of this node.
         * @returns the icon colors to use for this theme node
         */
        get_icon_colors(): IconColors;
        /**
         * Get the icon style for `node` (eg. symbolic, regular). This corresponds to the
         * special `-st-icon-style` CSS property.
         * @returns the icon style for @node
         */
        get_icon_style(): IconStyle;
        /**
         * Generically looks up a property containing a single length value. When
         * specific getters (like st_theme_node_get_border_width()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * Unlike st_theme_node_get_color() and st_theme_node_get_double(),
         * this does not print a warning if the property is not found; it just
         * returns 0.
         *
         * See also st_theme_node_lookup_length(), which provides more options. The
         * returned value is in physical pixels, as opposed to logical pixels.
         * @param property_name The name of the length property
         * @returns the length, in pixels, or 0 if the property was not found.
         */
        get_length(property_name: string | null): number;
        /**
         * Gets the value for the letter-spacing style property, in physical pixels.
         * @returns the value of the letter-spacing property, if   found, or zero if such property has not been found.
         */
        get_letter_spacing(): number;
        /**
         * Get the margin for `node` on `side,` in physical pixels. This corresponds to
         * the CSS properties such as `margin-top`.
         * @param side a #StSide
         * @returns the margin size in physical pixels
         */
        get_margin(side: Side): number;
        /**
         * Get the maximum height for `node,` in physical pixels.
         * @returns the maximum height in physical pixels
         */
        get_max_height(): number;
        /**
         * Get the maximum width for `node,` in physical pixels.
         * @returns the maximum width in physical pixels
         */
        get_max_width(): number;
        /**
         * Get the minimum height for `node,` in physical pixels.
         * @returns the minimum height in physical pixels
         */
        get_min_height(): number;
        /**
         * Get the minimum width for `node,` in physical pixels.
         * @returns the minimum width in physical pixels
         */
        get_min_width(): number;
        /**
         * Gets the color of `node'`s outline.
         */
        get_outline_color(): /* color */ Clutter.Color;
        /**
         * Get the width of the outline for `node,` in physical pixels.
         * @returns the width in physical pixels
         */
        get_outline_width(): number;
        /**
         * Get the padding for `node` on `side,` in physical pixels. This corresponds to
         * the CSS properties such as `padding-top`.
         * @param side a #StSide
         * @returns the padding size in physical pixels
         */
        get_padding(side: Side): number;
        /**
         * Gets the box used to paint the actor, including the area occupied
         * by properties which paint outside the actor's assigned allocation.
         * When painting `node` to an offscreen buffer, this function can be
         * used to determine the necessary size of the buffer.
         * @param allocation the box allocated to a #ClutterActor
         */
        get_paint_box(
            allocation: Clutter.ActorBox
        ): /* paint_box */ Clutter.ActorBox;
        /**
         * Gets the parent themed element node.
         * @returns the parent #StThemeNode, or %NULL if  this is the root node of the tree of theme elements.
         */
        get_parent(): ThemeNode | null;
        /**
         * Get the list of pseudo-classes for `node` (eg. `:focused`).
         * @returns the element's pseudo-classes
         */
        get_pseudo_classes(): string[];
        /**
         * Generically looks up a property containing a set of shadow values. When
         * specific getters (like st_theme_node_get_box_shadow()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * Like st_theme_get_length(), this does not print a warning if the property is
         * not found; it just returns %NULL
         *
         * See also st_theme_node_lookup_shadow (), which provides more options.
         * @param property_name The name of the shadow property
         * @returns the shadow, or %NULL if the property was   not found.
         */
        get_shadow(property_name: string | null): Shadow | null;
        /**
         * Get the text alignment of `node`.
         * @returns the alignment of text for @node
         */
        get_text_align(): TextAlign;
        /**
         * Get the text decoration for `node` (eg. underline, line-through, etc).
         * @returns the text decoration for @node
         */
        get_text_decoration(): TextDecoration;
        /**
         * Gets the value for the text-shadow style property
         * @returns the node's text-shadow, or %NULL   if node has no text-shadow
         */
        get_text_shadow(): Shadow | null;
        /**
         * Gets the theme stylesheet set that styles this node
         * @returns the theme stylesheet set
         */
        get_theme(): Theme;
        /**
         * Get the value of the transition-duration property, which
         * specifies the transition time between the previous #StThemeNode
         * and `node`.
         * @returns the node's transition duration in milliseconds
         */
        get_transition_duration(): number;
        /**
         * Looks up a property containing a single URL value.
         *
         * See also st_theme_node_lookup_url(), which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated value.
         * @param property_name The name of the string property
         * @returns the newly allocated value if found.  If @property_name is not found, a warning will be logged and %NULL  will be returned.
         */
        get_url(property_name: string | null): Gio.File | null;
        /**
         * Gets the total vertical padding (top + bottom padding), in physical pixels.
         * @returns the total vertical padding in physical pixels
         */
        get_vertical_padding(): number;
        /**
         * Get the width for `node,` in physical pixels.
         * @returns the width in physical pixels
         */
        get_width(): number;
        /**
         * Converts `node` to a hash value.
         * @returns a hash value corresponding to @node
         */
        hash(): number;
        invalidate_background_image(): void;
        invalidate_border_image(): void;
        /**
         * Generically looks up a property containing a single color value. When
         * specific getters (like st_theme_node_get_background_color()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also st_theme_node_get_color(), which provides a simpler API.
         * @param property_name The name of the color property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for `inherit;` this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_color(
            property_name: string | null,
            inherit: boolean
        ): [/* returnType */ boolean, /* color */ Clutter.Color];
        /**
         * Generically looks up a property containing a single numeric value
         *  without units.
         *
         * See also st_theme_node_get_double(), which provides a simpler API.
         * @param property_name The name of the numeric property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for `inherit;` this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_double(
            property_name: string | null,
            inherit: boolean
        ): [/* returnType */ boolean, /* value */ number];
        /**
         * Generically looks up a property containing a single length value. When
         * specific getters (like st_theme_node_get_border_width()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also st_theme_node_get_length(), which provides a simpler API.
         * @param property_name The name of the length property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for `inherit;` this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_length(
            property_name: string | null,
            inherit: boolean
        ): [/* returnType */ boolean, /* length */ number];
        /**
         * If the property is not found, the value in the shadow variable will not
         * be changed.
         *
         * Generically looks up a property containing a set of shadow values. When
         * specific getters (like st_theme_node_get_box_shadow ()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also st_theme_node_get_shadow(), which provides a simpler API.
         * @param property_name The name of the shadow property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for `inherit;` this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this   theme node (or in the properties of parent nodes when inheriting.), %FALSE   if the property was not found, or was explicitly set to 'none'.
         */
        lookup_shadow(
            property_name: string | null,
            inherit: boolean
        ): [/* returnType */ boolean, /* shadow */ Shadow];
        /**
         * Generically looks up a property containing a single time value,
         *  which is converted to milliseconds.
         * @param property_name The name of the time property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for `inherit;` this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_time(
            property_name: string | null,
            inherit: boolean
        ): [/* returnType */ boolean, /* value */ number];
        /**
         * Looks up a property containing a single URL value.
         *
         * See also st_theme_node_get_url(), which provides a simpler API.
         * @param property_name The name of the string property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for `inherit;` this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_url(
            property_name: string | null,
            inherit: boolean
        ): [/* returnType */ boolean, /* file */ Gio.File];
        /**
         * Check if st_theme_node_paint() will paint identically for `node` as it does
         * for `other`. Note that in some cases this function may return %TRUE even
         * if there is no visible difference in the painting.
         * @param other a different #StThemeNode
         * @returns %TRUE if the two theme nodes paint identically. %FALSE if the   two nodes potentially paint differently.
         */
        paint_equal(other: ThemeNode | null): boolean;
        /**
         * Serialize `node` to a string of its #GType name, CSS ID, classes and
         * pseudo-classes.
         * @returns the serialized theme node
         */
        to_string(): string | null;

        // Class property signals of St-13.St.ThemeNode

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class ThemeNode extends GObject.Object {
        // Own properties of St-13.St.ThemeNode

        static name: string;
        static $gtype: GObject.GType<ThemeNode>;

        // Constructors of St-13.St.ThemeNode

        constructor(config?: ThemeNode.ConstructorProperties);
        /**
         * Creates a new #StThemeNode. Once created, a node is immutable. If any
         * of the attributes of the node (like the `element_class)` change the node
         * and its child nodes must be destroyed and recreated.
         * @constructor
         * @param context the context representing global state for this themed tree
         * @param parent_node the parent node of this node
         * @param theme a theme (stylesheet set) that overrides the   theme inherited from the parent node
         * @param element_type the type of the GObject represented by this node  in the tree (corresponding to an element if we were theming an XML  document. %G_TYPE_NONE means this style was created for the stage actor and matches a selector element name of 'stage'.
         * @param element_id the ID to match CSS rules against
         * @param element_class a whitespace-separated list of classes   to match CSS rules against
         * @param pseudo_class a whitespace-separated list of pseudo-classes   (like 'hover' or 'visited') to match CSS rules against
         * @param inline_style
         * @returns a new #StThemeNode
         */
        constructor(
            context: ThemeContext,
            parent_node: ThemeNode | null,
            theme: Theme | null,
            element_type: GObject.GType,
            element_id: string | null,
            element_class: string | null,
            pseudo_class: string | null,
            inline_style: string | null
        );
        /**
         * Creates a new #StThemeNode. Once created, a node is immutable. If any
         * of the attributes of the node (like the `element_class)` change the node
         * and its child nodes must be destroyed and recreated.
         * @constructor
         * @param context the context representing global state for this themed tree
         * @param parent_node the parent node of this node
         * @param theme a theme (stylesheet set) that overrides the   theme inherited from the parent node
         * @param element_type the type of the GObject represented by this node  in the tree (corresponding to an element if we were theming an XML  document. %G_TYPE_NONE means this style was created for the stage actor and matches a selector element name of 'stage'.
         * @param element_id the ID to match CSS rules against
         * @param element_class a whitespace-separated list of classes   to match CSS rules against
         * @param pseudo_class a whitespace-separated list of pseudo-classes   (like 'hover' or 'visited') to match CSS rules against
         * @param inline_style
         * @returns a new #StThemeNode
         */
        static new(
            context: ThemeContext,
            parent_node: ThemeNode | null,
            theme: Theme | null,
            element_type: GObject.GType,
            element_id: string | null,
            element_class: string | null,
            pseudo_class: string | null,
            inline_style: string | null
        ): ThemeNode;
        _init(config?: ThemeNode.ConstructorProperties): void;
    }

    module Viewport {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Scrollable.ConstructorProperties,
                Widget.ConstructorProperties {
            // Own constructor properties of St-13.St.Viewport

            clip_to_view?: boolean | null;
        }
    }

    interface Viewport
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable,
            Scrollable {
        // Own properties of St-13.St.Viewport

        clip_to_view: boolean;

        // Own fields of St-13.St.Viewport

        parent_instance: Widget & Clutter.Actor;

        // Class property signals of St-13.St.Viewport

        connect(
            sigName: 'notify::clip-to-view',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-view',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-view', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(
            sigName: 'notify::hadjustment',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hadjustment',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hadjustment', ...args: any[]): void;
        connect(
            sigName: 'notify::vadjustment',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::vadjustment',
            callback: ($obj: Viewport, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::vadjustment', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Viewport extends Widget {
        // Own properties of St-13.St.Viewport

        static name: string;
        static $gtype: GObject.GType<Viewport>;

        // Constructors of St-13.St.Viewport

        constructor(config?: Viewport.ConstructorProperties);
        _init(config?: Viewport.ConstructorProperties): void;
    }

    module Widget {
        // Signal callback interfaces

        /**
         * Signal callback interface for `popup-menu`
         */
        interface PopupMenuSignalCallback {
            ($obj: Widget): void;
        }

        /**
         * Signal callback interface for `style-changed`
         */
        interface StyleChangedSignalCallback {
            ($obj: Widget): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Clutter.Actor.ConstructorProperties {
            // Own constructor properties of St-13.St.Widget

            /**
             * Object instance's name for assistive technology access.
             */
            accessible_name?: string | null;
            /**
             * The accessible role of this object
             */
            accessible_role?: Atk.Role | null;
            /**
             * Whether or not the widget can be focused via keyboard navigation.
             */
            can_focus?: boolean | null;
            /**
             * Whether or not the pointer is currently hovering over the widget. This is
             * only tracked automatically if #StWidget:track-hover is %TRUE, but you can
             * adjust it manually in any case.
             */
            hover?: boolean | null;
            /**
             * An actor that labels this widget.
             */
            label_actor?: Clutter.Actor | null;
            /**
             * The pseudo-class of the actor. Typical values include "hover", "active",
             * "focus".
             */
            pseudo_class?: string | null;
            /**
             * Inline style information for the actor as a ';'-separated list of
             * CSS properties.
             */
            style?: string | null;
            /**
             * The style-class of the actor for use in styling.
             */
            style_class?: string | null;
            /**
             * Determines whether the widget tracks pointer hover state. If
             * %TRUE (and the widget is visible and reactive), the
             * #StWidget:hover property and "hover" style pseudo class will be
             * adjusted automatically as the pointer moves in and out of the
             * widget.
             */
            track_hover?: boolean | null;
        }
    }

    interface Widget
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of St-13.St.Widget

        /**
         * Object instance's name for assistive technology access.
         */
        accessible_name: string | null;
        /**
         * The accessible role of this object
         */
        accessible_role: Atk.Role;
        /**
         * Whether or not the widget can be focused via keyboard navigation.
         */
        can_focus: boolean;
        /**
         * Whether or not the pointer is currently hovering over the widget. This is
         * only tracked automatically if #StWidget:track-hover is %TRUE, but you can
         * adjust it manually in any case.
         */
        hover: boolean;
        /**
         * An actor that labels this widget.
         */
        label_actor: Clutter.Actor;
        /**
         * The pseudo-class of the actor. Typical values include "hover", "active",
         * "focus".
         */
        pseudo_class: string | null;
        /**
         * Inline style information for the actor as a ';'-separated list of
         * CSS properties.
         */
        style: string | null;
        /**
         * The style-class of the actor for use in styling.
         */
        style_class: string | null;
        /**
         * Determines whether the widget tracks pointer hover state. If
         * %TRUE (and the widget is visible and reactive), the
         * #StWidget:hover property and "hover" style pseudo class will be
         * adjusted automatically as the pointer moves in and out of the
         * widget.
         */
        track_hover: boolean;

        // Own fields of St-13.St.Widget

        parent_instance: Clutter.Actor;

        // Owm methods of St-13.St.Widget

        /**
         * This method adds `state` as one of the accessible states for
         * `widget`. The list of states of a widget describes the current state
         * of user interface element `widget` and is provided so that assistive
         * technologies know how to present `widget` to the user.
         *
         * Usually you will have no need to add accessible states for an
         * object, as the accessible object can extract most of the states
         * from the object itself (ie: a #StButton knows when it is pressed).
         * This method is only required when one cannot extract the
         * information automatically from the object itself (i.e.: a generic
         * container used as a toggle menu item will not automatically include
         * the toggled state).
         * @param state #AtkStateType state to add
         */
        add_accessible_state(state: Atk.StateType): void;
        /**
         * Adds `style_class` to `actor'`s style class name list, if it is not
         * already present.
         * @param style_class a style class name string
         */
        add_style_class_name(style_class: string | null): void;
        /**
         * Adds `pseudo_class` to `actor'`s pseudo class list, if it is not
         * already present.
         * @param pseudo_class a pseudo class string
         */
        add_style_pseudo_class(pseudo_class: string | null): void;
        /**
         * Ensures that `widget` has read its style information and propagated any
         * changes to its children.
         */
        ensure_style(): void;
        /**
         * Gets the accessible name for this widget. See
         * st_widget_set_accessible_name() for more information.
         * @returns a character string representing the accessible name of the widget.
         */
        get_accessible_name(): string | null;
        /**
         * Gets the #AtkRole for this widget. See
         * st_widget_set_accessible_role() for more information.
         * @returns accessible #AtkRole for this widget
         */
        get_accessible_role(): Atk.Role;
        /**
         * Returns the current value of the can-focus property. See
         * st_widget_set_can_focus() for more information.
         * @returns current value of can-focus on @widget
         */
        get_can_focus(): boolean;
        /**
         * Gets a list of the focusable children of `widget,` in "Tab"
         * order. By default, this returns all visible
         * (as in clutter_actor_is_visible()) children of `widget`.
         * @returns    @widget's focusable children
         */
        get_focus_chain(): Clutter.Actor[];
        /**
         * If #StWidget:track-hover is set, this returns whether the pointer
         * is currently over the widget.
         * @returns current value of hover on @widget
         */
        get_hover(): boolean;
        /**
         * Gets the label that identifies `widget` if it is defined
         * @returns the label that identifies the widget
         */
        get_label_actor(): Clutter.Actor;
        /**
         * Get the current inline style string. See st_widget_set_style().
         * @returns The inline style string, or %NULL. The   string is owned by the #StWidget and should not be modified or freed.
         */
        get_style(): string | null;
        /**
         * Get the current style class name
         * @returns the class name string. The string is owned by the #StWidget and should not be modified or freed.
         */
        get_style_class_name(): string | null;
        /**
         * Get the current style pseudo class list.
         *
         * Note that an actor can have multiple pseudo classes; if you just
         * want to test for the presence of a specific pseudo class, use
         * st_widget_has_style_pseudo_class().
         * @returns the pseudo class list string. The string is owned by the #StWidget and should not be modified or freed.
         */
        get_style_pseudo_class(): string | null;
        /**
         * Gets the theme node holding style information for the widget.
         * The theme node is used to access standard and custom CSS
         * properties of the widget.
         *
         * Note: it is a fatal error to call this on a widget that is
         *  not been added to a stage.
         * @returns the theme node for the widget.   This is owned by the widget. When attributes of the widget   or the environment that affect the styling change (for example   the style_class property of the widget), it will be recreated,   and the ::style-changed signal will be emitted on the widget.
         */
        get_theme_node(): ThemeNode;
        /**
         * Returns the current value of the #StWidget:track-hover property. See
         * st_widget_set_track_hover() for more information.
         * @returns current value of track-hover on @widget
         */
        get_track_hover(): boolean;
        /**
         * Tests if `actor'`s style class list includes `style_class`.
         * @param style_class a style class string
         * @returns whether or not @actor's style class list includes @style_class.
         */
        has_style_class_name(style_class: string | null): boolean;
        /**
         * Tests if `actor'`s pseudo class list includes `pseudo_class`.
         * @param pseudo_class a pseudo class string
         * @returns whether or not @actor's pseudo class list includes @pseudo_class.
         */
        has_style_pseudo_class(pseudo_class: string | null): boolean;
        /**
         * Tries to update the keyboard focus within `widget` in response to a
         * keyboard event.
         *
         * If `from` is a descendant of `widget,` this attempts to move the
         * keyboard focus to the next descendant of `widget` (in the order
         * implied by `direction)` that has the #StWidget:can-focus property
         * set. If `from` is %NULL, this attempts to focus either `widget`
         * itself, or its first descendant in the order implied by
         * `direction`. If `from` is outside of `widget,` it behaves as if it was
         * a descendant if `direction` is one of the directional arrows and as
         * if it was %NULL otherwise.
         *
         * If a container type is marked #StWidget:can-focus, the expected
         * behavior is that it will only take up a single slot on the focus
         * chain as a whole, rather than allowing navigation between its child
         * actors (or having a distinction between itself being focused and
         * one of its children being focused).
         *
         * Some widget classes might have slightly different behavior from the
         * above, where that would make more sense.
         *
         * If `wrap_around` is %TRUE and `from` is a child of `widget,` but the
         * widget has no further children that can accept the focus in the
         * given direction, then st_widget_navigate_focus() will try a second
         * time, using a %NULL `from,` which should cause it to reset the focus
         * to the first available widget in the given direction.
         * @param from the actor that the focus is coming from
         * @param direction the direction focus is moving in
         * @param wrap_around whether focus should wrap around
         * @returns %TRUE if clutter_actor_grab_key_focus() has been called on an actor. %FALSE if not.
         */
        navigate_focus(
            from: Clutter.Actor | null,
            direction: DirectionType,
            wrap_around: boolean
        ): boolean;
        /**
         * Paint the background of the widget. This is meant to be called by
         * subclasses of StWidget that need to paint the background without
         * painting children.
         * @param paint_context
         */
        paint_background(paint_context: Clutter.PaintContext): void;
        /**
         * Returns the theme node for the widget if it has already been
         * computed, %NULL if the widget hasn't been added to a  stage or the theme
         * node hasn't been computed. If %NULL is returned, then ::style-changed
         * will be reliably emitted before the widget is allocated or painted.
         * @returns the theme node for the widget.   This is owned by the widget. When attributes of the widget   or the environment that affect the styling change (for example   the style_class property of the widget), it will be recreated,   and the ::style-changed signal will be emitted on the widget.
         */
        peek_theme_node(): ThemeNode;
        /**
         * Asks the widget to pop-up a context menu by emitting #StWidget::popup-menu.
         */
        popup_menu(): void;
        /**
         * This method removes `state` as on of the accessible states for
         * `widget`. See st_widget_add_accessible_state() for more information.
         * @param state #AtkState state to remove
         */
        remove_accessible_state(state: Atk.StateType): void;
        /**
         * Removes `style_class` from `actor'`s style class name, if it is
         * present.
         * @param style_class a style class name string
         */
        remove_style_class_name(style_class: string | null): void;
        /**
         * Removes `pseudo_class` from `actor'`s pseudo class, if it is present.
         * @param pseudo_class a pseudo class string
         */
        remove_style_pseudo_class(pseudo_class: string | null): void;
        /**
         * This method allows to set a customly created accessible object to
         * this widget. For example if you define a new subclass of
         * #StWidgetAccessible at the javascript code.
         *
         * NULL is a valid value for `accessible`. That contemplates the
         * hypothetical case of not needing anymore a custom accessible object
         * for the widget. Next call of st_widget_get_accessible() would
         * create and return a default accessible.
         *
         * It assumes that the call to atk_object_initialize that bound the
         * gobject with the custom accessible object was already called, so
         * not a responsibility of this method.
         * @param accessible an accessible (#AtkObject)
         */
        set_accessible(accessible: Atk.Object): void;
        /**
         * This method sets `name` as the accessible name for `widget`.
         *
         * Usually you will have no need to set the accessible name for an
         * object, as usually there is a label for most of the interface
         * elements. So in general it is better to just use
         * `st_widget_set_label_actor`. This method is only required when you
         * need to set an accessible name and there is no available label
         * object.
         * @param name a character string to be set as the accessible name
         */
        set_accessible_name(name: string | null): void;
        /**
         * This method sets `role` as the accessible role for `widget`. This
         * role describes what kind of user interface element `widget` is and
         * is provided so that assistive technologies know how to present
         * `widget` to the user.
         *
         * Usually you will have no need to set the accessible role for an
         * object, as this information is extracted from the context of the
         * object (ie: a #StButton has by default a push button role). This
         * method is only required when you need to redefine the role
         * currently associated with the widget, for instance if it is being
         * used in an unusual way (ie: a #StButton used as a togglebutton), or
         * if a generic object is used directly (ie: a container as a menu
         * item).
         *
         * If `role` is #ATK_ROLE_INVALID, the role will not be changed
         * and the accessible's default role will be used instead.
         * @param role The role to use
         */
        set_accessible_role(role: Atk.Role): void;
        /**
         * Marks `widget` as being able to receive keyboard focus via
         * keyboard navigation.
         * @param can_focus %TRUE if the widget can receive keyboard focus   via keyboard navigation
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets `widget'`s hover property and adds or removes "hover" from its
         * pseudo class accordingly.
         *
         * If you have set #StWidget:track-hover, you should not need to call
         * this directly. You can call st_widget_sync_hover() if the hover
         * state might be out of sync due to another actor's pointer grab.
         * @param hover whether the pointer is hovering over the widget
         */
        set_hover(hover: boolean): void;
        /**
         * Sets `label` as the #ClutterActor that identifies (labels)
         * `widget`. `label` can be %NULL to indicate that `widget` is not
         * labelled any more
         * @param label a #ClutterActor
         */
        set_label_actor(label: Clutter.Actor): void;
        /**
         * Set the inline style string for this widget. The inline style string is an
         * optional ';'-separated list of CSS properties that override the style as
         * determined from the stylesheets of the current theme.
         * @param style a inline style string, or %NULL
         */
        set_style(style: string | null): void;
        /**
         * Set the style class name list. `style_class_list` can either be
         * %NULL, for no classes, or a space-separated list of style class
         * names. See also st_widget_add_style_class_name() and
         * st_widget_remove_style_class_name().
         * @param style_class_list a new style class list string
         */
        set_style_class_name(style_class_list: string | null): void;
        /**
         * Set the style pseudo class list. `pseudo_class_list` can either be
         * %NULL, for no classes, or a space-separated list of pseudo class
         * names. See also st_widget_add_style_pseudo_class() and
         * st_widget_remove_style_pseudo_class().
         * @param pseudo_class_list a new pseudo class list string
         */
        set_style_pseudo_class(pseudo_class_list: string | null): void;
        /**
         * Enables hover tracking on the #StWidget.
         *
         * If hover tracking is enabled, and the widget is visible and
         * reactive, then `widget'`s #StWidget:hover property will be updated
         * automatically to reflect whether the pointer is in `widget` (or one
         * of its children), and `widget'`s #StWidget:pseudo-class will have
         * the "hover" class added and removed from it accordingly.
         *
         * Note that currently it is not possible to correctly track the hover
         * state when another actor has a pointer grab. You can use
         * st_widget_sync_hover() to update the property manually in this
         * case.
         * @param track_hover %TRUE if the widget should track the pointer hover state
         */
        set_track_hover(track_hover: boolean): void;
        style_changed(): void;
        /**
         * Sets `widget'`s hover state according to the current pointer
         * position. This can be used to ensure that it is correct after
         * (or during) a pointer grab.
         */
        sync_hover(): void;

        // Own virtual methods of St-13.St.Widget

        /**
         * Gets a list of the focusable children of `widget,` in "Tab"
         * order. By default, this returns all visible
         * (as in clutter_actor_is_visible()) children of `widget`.
         * @virtual
         * @returns    @widget's focusable children
         */
        vfunc_get_focus_chain(): Clutter.Actor[];
        vfunc_navigate_focus(
            from: Clutter.Actor | null,
            direction: DirectionType
        ): boolean;
        /**
         * Asks the widget to pop-up a context menu by emitting #StWidget::popup-menu.
         * @virtual
         */
        vfunc_popup_menu(): void;
        vfunc_style_changed(): void;

        // Own signals of St-13.St.Widget

        connect(
            sigName: 'popup-menu',
            callback: Widget.PopupMenuSignalCallback
        ): number;
        connect_after(
            sigName: 'popup-menu',
            callback: Widget.PopupMenuSignalCallback
        ): number;
        emit(sigName: 'popup-menu', ...args: any[]): void;
        connect(
            sigName: 'style-changed',
            callback: Widget.StyleChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'style-changed',
            callback: Widget.StyleChangedSignalCallback
        ): number;
        emit(sigName: 'style-changed', ...args: any[]): void;

        // Class property signals of St-13.St.Widget

        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: Widget, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Widget extends Clutter.Actor {
        // Own properties of St-13.St.Widget

        static name: string;
        static $gtype: GObject.GType<Widget>;

        // Constructors of St-13.St.Widget

        constructor(config?: Widget.ConstructorProperties);
        _init(config?: Widget.ConstructorProperties): void;
    }

    module WidgetAccessible {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.Action.ConstructorProperties,
                Atk.Component.ConstructorProperties,
                Cally.Actor.ConstructorProperties {}
    }

    interface WidgetAccessible extends Atk.Action, Atk.Component {
        // Own fields of St-13.St.WidgetAccessible

        parent: Cally.Actor & Atk.Object & GObject.Object & GObject.Object;

        // Conflicting methods

        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or %NULL if @action does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * Gets the accessible description of the accessible.
         * @returns a character string representing the accessible description of the accessible.
         */
        get_description(): string | null;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via atk_action_do_action() may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or %NULL if @action does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * Gets the accessible name of the accessible.
         * @returns a character string representing the accessible name of the object.
         */
        get_name(): string | null;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string | null): boolean;
        /**
         * Sets the accessible description of the accessible. You can't set
         * the description to NULL. This is reserved for the initial value. In
         * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
         * the name to a empty value you can use "".
         * @param description a character string to be set as the accessible description
         */
        set_description(description: string | null): void;
        /**
         * Returns a description of the specified action of the object.
         * @virtual
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or %NULL if @action does not implement this interface.
         */
        vfunc_get_description(i: number): string | null;
        /**
         * Gets the accessible description of the accessible.
         * @virtual
         * @returns a character string representing the accessible description of the accessible.
         */
        vfunc_get_description(): string | null;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via atk_action_do_action() may be
         * NIL.
         * @virtual
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or %NULL if @action does not implement this interface.
         */
        vfunc_get_name(i: number): string | null;
        /**
         * Gets the accessible name of the accessible.
         * @virtual
         * @returns a character string representing the accessible name of the object.
         */
        vfunc_get_name(): string | null;
        /**
         * Sets a description of the specified action of the object.
         * @virtual
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        vfunc_set_description(i: number, desc: string | null): boolean;
        /**
         * Sets the accessible description of the accessible. You can't set
         * the description to NULL. This is reserved for the initial value. In
         * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
         * the name to a empty value you can use "".
         * @virtual
         * @param description a character string to be set as the accessible description
         */
        vfunc_set_description(description: string | null): void;

        // Class property signals of St-13.St.WidgetAccessible

        connect(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-layer',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-mdi-zorder',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-description',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-description',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-description', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-hypertext-nlinks',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-caption', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-caption-object',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-summary', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-value',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-value',
            callback: ($obj: WidgetAccessible, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-value', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class WidgetAccessible extends Cally.Actor {
        // Own properties of St-13.St.WidgetAccessible

        static name: string;
        static $gtype: GObject.GType<WidgetAccessible>;

        // Constructors of St-13.St.WidgetAccessible

        constructor(config?: WidgetAccessible.ConstructorProperties);
        _init(config?: WidgetAccessible.ConstructorProperties): void;
    }

    interface AdjustmentClass {
        // Own fields of St-13.St.AdjustmentClass

        changed: (adjustment: Adjustment) => void;
    }

    /**
     * Base class for #StAdjustment.
     * @record
     */
    abstract class AdjustmentClass {
        // Own properties of St-13.St.AdjustmentClass

        static name: string;
    }

    interface BinClass {}

    /**
     * The #StBinClass struct contains only private data
     * @record
     */
    abstract class BinClass {
        // Own properties of St-13.St.BinClass

        static name: string;
    }

    interface BorderImageClass {
        // Own fields of St-13.St.BorderImageClass

        parent_class: GObject.ObjectClass;
    }

    abstract class BorderImageClass {
        // Own properties of St-13.St.BorderImageClass

        static name: string;
    }

    interface BoxLayoutClass {
        // Own fields of St-13.St.BoxLayoutClass

        parent_class: ViewportClass;
    }

    abstract class BoxLayoutClass {
        // Own properties of St-13.St.BoxLayoutClass

        static name: string;
    }

    interface BoxLayoutPrivate {}

    class BoxLayoutPrivate {
        // Own properties of St-13.St.BoxLayoutPrivate

        static name: string;
    }

    interface ButtonClass {
        // Own fields of St-13.St.ButtonClass

        parent_class: BinClass;
        transition: (button: Button) => void;
        clicked: (button: Button, clicked_button: number) => void;
    }

    abstract class ButtonClass {
        // Own properties of St-13.St.ButtonClass

        static name: string;
    }

    interface ClipboardClass {
        // Own fields of St-13.St.ClipboardClass

        parent_class: GObject.ObjectClass;
    }

    abstract class ClipboardClass {
        // Own properties of St-13.St.ClipboardClass

        static name: string;
    }

    interface DrawingAreaClass {
        // Own fields of St-13.St.DrawingAreaClass

        parent_class: WidgetClass;
        repaint: (area: DrawingArea) => void;
    }

    abstract class DrawingAreaClass {
        // Own properties of St-13.St.DrawingAreaClass

        static name: string;
    }

    interface EntryClass {
        // Own fields of St-13.St.EntryClass

        parent_class: WidgetClass;
        primary_icon_clicked: (entry: Entry) => void;
        secondary_icon_clicked: (entry: Entry) => void;
    }

    abstract class EntryClass {
        // Own properties of St-13.St.EntryClass

        static name: string;
    }

    interface FocusManagerClass {
        // Own fields of St-13.St.FocusManagerClass

        parent_class: GObject.ObjectClass;
    }

    abstract class FocusManagerClass {
        // Own properties of St-13.St.FocusManagerClass

        static name: string;
    }

    interface FocusManagerPrivate {}

    class FocusManagerPrivate {
        // Own properties of St-13.St.FocusManagerPrivate

        static name: string;
    }

    interface GenericAccessibleClass {
        // Own fields of St-13.St.GenericAccessibleClass

        parent_class: WidgetAccessibleClass;
    }

    abstract class GenericAccessibleClass {
        // Own properties of St-13.St.GenericAccessibleClass

        static name: string;
    }

    interface GenericAccessiblePrivate {}

    class GenericAccessiblePrivate {
        // Own properties of St-13.St.GenericAccessiblePrivate

        static name: string;
    }

    interface IconClass {
        // Own fields of St-13.St.IconClass

        parent_class: WidgetClass;
    }

    abstract class IconClass {
        // Own properties of St-13.St.IconClass

        static name: string;
    }

    interface IconColors {
        // Own fields of St-13.St.IconColors

        /**
         * foreground color
         * @field
         */
        foreground: Clutter.Color;
        /**
         * color indicating a warning state
         * @field
         */
        warning: Clutter.Color;
        /**
         * color indicating an error state
         * @field
         */
        error: Clutter.Color;
        /**
         * color indicating a successful operation
         * @field
         */
        success: Clutter.Color;

        // Owm methods of St-13.St.IconColors

        /**
         * Creates a new StIconColors structure that is a copy of the passed
         * in `colors`. You would use this function instead of st_icon_colors_ref()
         * if you were planning to change colors in the result.
         * @returns a newly created #StIconColors.
         */
        copy(): IconColors;
        /**
         * Check if two #StIconColors objects are identical.
         * @param other another #StIconColors
         * @returns %TRUE if the #StIconColors are equal
         */
        equal(other: IconColors): boolean;
        /**
         * Atomically increments the reference count of `colors` by one.
         * @returns the passed in #StIconColors.
         */
        ref(): IconColors;
        /**
         * Atomically decrements the reference count of `colors` by one.
         * If the reference count drops to 0, all memory allocated by the
         * #StIconColors is released.
         */
        unref(): void;
    }

    /**
     * The #StIconColors structure encapsulates colors for colorizing a symbolic
     * icon.
     * @record
     */
    class IconColors {
        // Own properties of St-13.St.IconColors

        static name: string;

        // Constructors of St-13.St.IconColors

        /**
         * Creates a new #StIconColors. All colors are initialized to transparent black.
         * @constructor
         * @returns a newly created #StIconColors. Free with st_icon_colors_unref()
         */
        constructor();
        /**
         * Creates a new #StIconColors. All colors are initialized to transparent black.
         * @constructor
         * @returns a newly created #StIconColors. Free with st_icon_colors_unref()
         */
        static new(): IconColors;
    }

    interface IconInfoClass {
        // Own fields of St-13.St.IconInfoClass

        parent_class: GObject.ObjectClass;
    }

    abstract class IconInfoClass {
        // Own properties of St-13.St.IconInfoClass

        static name: string;
    }

    interface IconPrivate {}

    class IconPrivate {
        // Own properties of St-13.St.IconPrivate

        static name: string;
    }

    interface IconThemeClass {
        // Own fields of St-13.St.IconThemeClass

        parent_class: GObject.ObjectClass;
    }

    abstract class IconThemeClass {
        // Own properties of St-13.St.IconThemeClass

        static name: string;
    }

    interface ImageContentClass {
        // Own fields of St-13.St.ImageContentClass

        parent_class: Clutter.ImageClass;
    }

    abstract class ImageContentClass {
        // Own properties of St-13.St.ImageContentClass

        static name: string;
    }

    interface LabelClass {
        // Own fields of St-13.St.LabelClass

        parent_class: WidgetClass;
    }

    abstract class LabelClass {
        // Own properties of St-13.St.LabelClass

        static name: string;
    }

    interface LabelPrivate {}

    class LabelPrivate {
        // Own properties of St-13.St.LabelPrivate

        static name: string;
    }

    interface PasswordEntryClass {
        // Own fields of St-13.St.PasswordEntryClass

        parent_class: EntryClass;
    }

    abstract class PasswordEntryClass {
        // Own properties of St-13.St.PasswordEntryClass

        static name: string;
    }

    interface ScrollBarClass {
        // Own fields of St-13.St.ScrollBarClass

        parent_class: WidgetClass;
        scroll_start: (bar: ScrollBar) => void;
        scroll_stop: (bar: ScrollBar) => void;
    }

    abstract class ScrollBarClass {
        // Own properties of St-13.St.ScrollBarClass

        static name: string;
    }

    interface ScrollViewClass {
        // Own fields of St-13.St.ScrollViewClass

        parent_class: BinClass;
    }

    abstract class ScrollViewClass {
        // Own properties of St-13.St.ScrollViewClass

        static name: string;
    }

    interface ScrollViewFadeClass {
        // Own fields of St-13.St.ScrollViewFadeClass

        parent_class: Clutter.ShaderEffectClass;
    }

    abstract class ScrollViewFadeClass {
        // Own properties of St-13.St.ScrollViewFadeClass

        static name: string;
    }

    interface ScrollViewPrivate {}

    class ScrollViewPrivate {
        // Own properties of St-13.St.ScrollViewPrivate

        static name: string;
    }

    interface ScrollableInterface {
        // Own fields of St-13.St.ScrollableInterface

        parent: GObject.TypeInterface;
        set_adjustments: (
            scrollable: Scrollable,
            hadjustment: Adjustment,
            vadjustment: Adjustment
        ) => void;
        get_adjustments: (
            scrollable: Scrollable,
            hadjustment: Adjustment,
            vadjustment: Adjustment
        ) => void;
    }

    abstract class ScrollableInterface {
        // Own properties of St-13.St.ScrollableInterface

        static name: string;
    }

    interface SettingsClass {
        // Own fields of St-13.St.SettingsClass

        parent_class: GObject.ObjectClass;
    }

    abstract class SettingsClass {
        // Own properties of St-13.St.SettingsClass

        static name: string;
    }

    interface Shadow {
        // Own fields of St-13.St.Shadow

        /**
         * shadow's color
         * @field
         */
        color: Clutter.Color;
        /**
         * horizontal offset - positive values mean placement to the right,
         *           negative values placement to the left of the element.
         * @field
         */
        xoffset: number;
        /**
         * vertical offset - positive values mean placement below, negative
         *           values placement above the element.
         * @field
         */
        yoffset: number;
        /**
         * shadow's blur radius - a value of 0.0 will result in a hard shadow.
         * @field
         */
        blur: number;
        /**
         * shadow's spread radius - grow the shadow without enlarging the
         *           blur.
         * @field
         */
        spread: number;
        inset: boolean;

        // Owm methods of St-13.St.Shadow

        /**
         * Check if two shadow objects are identical. Note that two shadows may
         * compare non-identically if they differ only by floating point rounding
         * errors.
         * @param other a different #StShadow
         * @returns %TRUE if the two shadows are identical
         */
        equal(other: Shadow): boolean;
        /**
         * Gets the box used to paint `shadow,` which will be partly
         * outside of `actor_box`
         * @param actor_box the box allocated to a #ClutterAlctor
         * @param shadow_box computed box occupied by `shadow`
         */
        get_box(
            actor_box: Clutter.ActorBox,
            shadow_box: Clutter.ActorBox
        ): void;
        /**
         * Atomically increments the reference count of `shadow` by one.
         * @returns the passed in #StShadow.
         */
        ref(): Shadow;
        /**
         * Atomically decrements the reference count of `shadow` by one.
         * If the reference count drops to 0, all memory allocated by the
         * #StShadow is released.
         */
        unref(): void;
    }

    /**
     * Attributes of the -st-shadow property.
     * @record
     */
    class Shadow {
        // Own properties of St-13.St.Shadow

        static name: string;

        // Constructors of St-13.St.Shadow

        /**
         * Creates a new #StShadow
         * @constructor
         * @param color shadow's color
         * @param xoffset horizontal offset
         * @param yoffset vertical offset
         * @param blur blur radius
         * @param spread spread radius
         * @param inset whether the shadow should be inset
         * @returns the newly allocated shadow. Use st_shadow_free() when done
         */
        constructor(
            color: Clutter.Color,
            xoffset: number,
            yoffset: number,
            blur: number,
            spread: number,
            inset: boolean
        );
        /**
         * Creates a new #StShadow
         * @constructor
         * @param color shadow's color
         * @param xoffset horizontal offset
         * @param yoffset vertical offset
         * @param blur blur radius
         * @param spread spread radius
         * @param inset whether the shadow should be inset
         * @returns the newly allocated shadow. Use st_shadow_free() when done
         */
        static new(
            color: Clutter.Color,
            xoffset: number,
            yoffset: number,
            blur: number,
            spread: number,
            inset: boolean
        ): Shadow;
    }

    interface ShadowHelper {
        // Owm methods of St-13.St.ShadowHelper

        copy(): ShadowHelper;
        /**
         * Free resources associated with `helper`.
         */
        free(): void;
        /**
         * Paints the shadow associated with `helper` This must only
         * be called from the implementation of ClutterActor::paint().
         * @param framebuffer a #CoglFramebuffer
         * @param actor_box the bounding box of the shadow
         * @param paint_opacity the opacity at which the shadow is painted
         */
        paint(
            framebuffer: Cogl.Framebuffer,
            actor_box: Clutter.ActorBox,
            paint_opacity: number
        ): void;
        /**
         * Update `helper` from `source`.
         * @param source a #ClutterActor
         */
        update(source: Clutter.Actor): void;
    }

    class ShadowHelper {
        // Own properties of St-13.St.ShadowHelper

        static name: string;

        // Constructors of St-13.St.ShadowHelper

        /**
         * Builds a #StShadowHelper that will build a drop shadow
         * using `source` as the mask.
         * @constructor
         * @param shadow a #StShadow representing the shadow properties
         * @returns a new #StShadowHelper
         */
        constructor(shadow: Shadow);
        /**
         * Builds a #StShadowHelper that will build a drop shadow
         * using `source` as the mask.
         * @constructor
         * @param shadow a #StShadow representing the shadow properties
         * @returns a new #StShadowHelper
         */
        static new(shadow: Shadow): ShadowHelper;
    }

    interface TextureCacheClass {
        // Own fields of St-13.St.TextureCacheClass

        parent_class: GObject.ObjectClass;
    }

    abstract class TextureCacheClass {
        // Own properties of St-13.St.TextureCacheClass

        static name: string;
    }

    interface TextureCachePrivate {}

    class TextureCachePrivate {
        // Own properties of St-13.St.TextureCachePrivate

        static name: string;
    }

    interface ThemeClass {
        // Own fields of St-13.St.ThemeClass

        parent_class: GObject.ObjectClass;
    }

    abstract class ThemeClass {
        // Own properties of St-13.St.ThemeClass

        static name: string;
    }

    interface ThemeContextClass {
        // Own fields of St-13.St.ThemeContextClass

        parent_class: GObject.ObjectClass;
    }

    abstract class ThemeContextClass {
        // Own properties of St-13.St.ThemeContextClass

        static name: string;
    }

    interface ThemeNodeClass {
        // Own fields of St-13.St.ThemeNodeClass

        parent_class: GObject.ObjectClass;
    }

    abstract class ThemeNodeClass {
        // Own properties of St-13.St.ThemeNodeClass

        static name: string;
    }

    interface ThemeNodePaintState {
        // Own fields of St-13.St.ThemeNodePaintState

        node: ThemeNode;
        alloc_width: number;
        alloc_height: number;
        box_shadow_width: number;
        box_shadow_height: number;
        resource_scale: number;
        box_shadow_pipeline: Cogl.Pipeline;
        prerendered_texture: Cogl.Pipeline;
        prerendered_pipeline: Cogl.Pipeline;
        corner_material: Cogl.Pipeline[];

        // Owm methods of St-13.St.ThemeNodePaintState

        copy(other: ThemeNodePaintState): void;
        free(): void;
        init(): void;
        invalidate(): void;
        invalidate_for_file(file: Gio.File): boolean;
        set_node(node: ThemeNode): void;
    }

    class ThemeNodePaintState {
        // Own properties of St-13.St.ThemeNodePaintState

        static name: string;
    }

    interface ViewportClass {
        // Own fields of St-13.St.ViewportClass

        parent_class: WidgetClass;
    }

    abstract class ViewportClass {
        // Own properties of St-13.St.ViewportClass

        static name: string;
    }

    interface WidgetAccessibleClass {
        // Own fields of St-13.St.WidgetAccessibleClass

        parent_class: Cally.ActorClass;
    }

    abstract class WidgetAccessibleClass {
        // Own properties of St-13.St.WidgetAccessibleClass

        static name: string;
    }

    interface WidgetAccessiblePrivate {}

    class WidgetAccessiblePrivate {
        // Own properties of St-13.St.WidgetAccessiblePrivate

        static name: string;
    }

    interface WidgetClass {
        // Own fields of St-13.St.WidgetClass

        style_changed: (self: Widget) => void;
        popup_menu: (self: Widget) => void;
        navigate_focus: (
            self: Widget,
            from: Clutter.Actor | null,
            direction: DirectionType
        ) => boolean;
        get_accessible_type: () => GObject.GType;
        get_focus_chain: (widget: Widget) => Clutter.Actor[];
    }

    /**
     * Base class for stylable actors.
     * @record
     */
    abstract class WidgetClass {
        // Own properties of St-13.St.WidgetClass

        static name: string;
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

export default St;
// END

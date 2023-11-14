/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cally-13-import.d.ts';
/**
 * Cally-13
 */

import type Mtk from './mtk-13.js';
import type cairo from './cairo-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Graphene from './graphene-1.0.js';
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

export namespace Cally {
    /**
     * Initializes the accessibility support.
     * @returns %TRUE if accessibility support has been correctly initialized.
     */
    function accessibility_init(): boolean;
    /**
     * Returns if the accessibility support using cally is enabled.
     * @returns %TRUE if accessibility support has been correctly initialized.
     */
    function get_cally_initialized(): boolean;
    function snoop_key_event(
        stage: Clutter.Stage,
        key: Clutter.KeyEvent
    ): boolean;
    /**
     * Action function, to be used on #AtkAction implementations as
     * an individual action.
     *
     * Unlike #CallyActionFunc, this function uses the `user_data`
     * argument passed to [method`Actor`.add_action_full].
     * @callback
     * @param cally_actor a #CallyActor
     */
    interface ActionCallback {
        (cally_actor: Actor): void;
    }
    /**
     * Action function, to be used on #AtkAction implementations as a individual
     * action
     * @callback
     * @param cally_actor a #CallyActor
     */
    interface ActionFunc {
        (cally_actor: Actor): void;
    }
    module Actor {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.Action.ConstructorProperties,
                Atk.Component.ConstructorProperties,
                Atk.GObjectAccessible.ConstructorProperties {}
    }

    interface Actor extends Atk.Action, Atk.Component {
        // Conflicting properties

        parent: Atk.Object & GObject.Object & GObject.Object;

        // Owm methods of Cally-13.Cally.Actor

        /**
         * Adds a new action to be accessed with the #AtkAction interface.
         * @param action_name the action name
         * @param action_description the action description
         * @param action_keybinding the action keybinding
         * @param callback the callback of the action
         * @returns added action id, or -1 if failure
         */
        add_action(
            action_name: string | null,
            action_description: string | null,
            action_keybinding: string | null,
            callback: ActionCallback
        ): number;
        /**
         * Removes a action, using the `action_id` returned by [method`Actor`.add_action]
         * @param action_id the action id
         * @returns %TRUE if the operation was successful, %FALSE otherwise
         */
        remove_action(action_id: number): boolean;
        /**
         * Removes an action, using the `action_name` used when the action was added
         * with [method`Actor`.add_action]
         * @param action_name the name of the action to remove
         * @returns %TRUE if the operation was successful, %FALSE otherwise
         */
        remove_action_by_name(action_name: string | null): boolean;

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

        // Class property signals of Cally-13.Cally.Actor

        connect(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-layer',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-mdi-zorder',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-description',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-description',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-description', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-hypertext-nlinks',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-caption', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-caption-object',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-summary', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-value',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-value',
            callback: ($obj: Actor, pspec: GObject.ParamSpec) => void
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

    /**
     * Implementation of the ATK interfaces for [class`Clutter`.Actor]
     *
     * #CallyActor implements the required ATK interfaces of [class`Clutter`.Actor]
     * exposing the common elements on each actor (position, extents, etc).
     * @class
     */
    class Actor extends Atk.GObjectAccessible {
        // Own properties of Cally-13.Cally.Actor

        static name: string;
        static $gtype: GObject.GType<Actor>;

        // Constructors of Cally-13.Cally.Actor

        constructor(config?: Actor.ConstructorProperties);
        /**
         * Creates a new #CallyActor for the given `actor`
         * @constructor
         * @param actor a #ClutterActor
         * @returns the newly created #AtkObject
         */
        constructor(actor: Clutter.Actor);
        /**
         * Creates a new #CallyActor for the given `actor`
         * @constructor
         * @param actor a #ClutterActor
         * @returns the newly created #AtkObject
         */
        static new(actor: Clutter.Actor): Actor;
        _init(config?: Actor.ConstructorProperties): void;
    }

    module Clone {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.Action.ConstructorProperties,
                Atk.Component.ConstructorProperties,
                Actor.ConstructorProperties {}
    }

    interface Clone extends Atk.Action, Atk.Component {
        // Conflicting properties

        parent: Atk.Object & GObject.Object & GObject.Object;

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

        // Class property signals of Cally-13.Cally.Clone

        connect(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-layer',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-mdi-zorder',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-description',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-description',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-description', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-hypertext-nlinks',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-caption', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-caption-object',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-summary', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-value',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-value',
            callback: ($obj: Clone, pspec: GObject.ParamSpec) => void
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

    /**
     * Implementation of the ATK interfaces for a #ClutterClone
     *
     * #CallyClone implements the required ATK interfaces of [class`Clutter`.Clone]
     *
     * In particular it sets a proper role for the clone, as just a image,
     * as it is the sanest and simplest approach.
     * @class
     */
    class Clone extends Actor {
        // Own properties of Cally-13.Cally.Clone

        static name: string;
        static $gtype: GObject.GType<Clone>;

        // Constructors of Cally-13.Cally.Clone

        constructor(config?: Clone.ConstructorProperties);
        /**
         * Creates a new #CallyClone for the given `actor`. `actor` must be a
         * [class`Clutter`.Clone].
         * @constructor
         * @param actor a #ClutterActor
         * @returns the newly created #AtkObject
         */
        constructor(actor: Clutter.Actor);
        /**
         * Creates a new #CallyClone for the given `actor`. `actor` must be a
         * [class`Clutter`.Clone].
         * @constructor
         * @param actor a #ClutterActor
         * @returns the newly created #AtkObject
         */
        static new(actor: Clutter.Actor): Clone;
        _init(config?: Clone.ConstructorProperties): void;
    }

    module Root {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.GObjectAccessible.ConstructorProperties {}
    }

    interface Root {
        // Conflicting properties

        parent: Atk.Object & GObject.Object & GObject.Object;

        // Class property signals of Cally-13.Cally.Root

        connect(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-layer',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-mdi-zorder',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-description',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-description',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-description', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-hypertext-nlinks',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-caption', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-caption-object',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-summary', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-value',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-value',
            callback: ($obj: Root, pspec: GObject.ParamSpec) => void
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

    /**
     * Root object for the Cally toolkit
     *
     * #CallyRoot is the root object of the accessibility tree-like
     * hierarchy, exposing the application level.
     *
     * Somewhat equivalent to #GailTopLevel. We consider that this class
     * expose the a11y information of the [class`Clutter`.StageManager], as the
     * children of this object are the different [class`Clutter`.Stage] managed (so
     * the [class`GObject`.Object] used in the atk_object_initialize() is the
     * [class`Clutter`.StageManager]).
     * @class
     */
    class Root extends Atk.GObjectAccessible {
        // Own properties of Cally-13.Cally.Root

        static name: string;
        static $gtype: GObject.GType<Root>;

        // Constructors of Cally-13.Cally.Root

        constructor(config?: Root.ConstructorProperties);
        /**
         * Creates a new #CallyRoot object.
         * @constructor
         * @returns the newly created #AtkObject
         */
        constructor();
        /**
         * Creates a new #CallyRoot object.
         * @constructor
         * @returns the newly created #AtkObject
         */
        static new(): Root;
        _init(config?: Root.ConstructorProperties): void;
    }

    module Stage {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.Action.ConstructorProperties,
                Atk.Component.ConstructorProperties,
                Atk.Window.ConstructorProperties,
                Actor.ConstructorProperties {}
    }

    interface Stage extends Atk.Action, Atk.Component, Atk.Window {
        // Conflicting properties

        parent: GObject.Object & Atk.Object;

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

        // Class property signals of Cally-13.Cally.Stage

        connect(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-layer',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-mdi-zorder',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-description',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-description',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-description', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-hypertext-nlinks',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-caption', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-caption-object',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-summary', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-value',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-value',
            callback: ($obj: Stage, pspec: GObject.ParamSpec) => void
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

    /**
     * Implementation of the ATK interfaces for a #ClutterStage
     *
     * #CallyStage implements the required ATK interfaces for [class`Clutter`.Stage]
     *
     * Some implementation details: at this moment #CallyStage is used as
     * the most similar Window object in this toolkit (ie: emitting window
     * related signals), although the real purpose of [class`Clutter`.Stage] is
     * being a canvas. Anyway, this is required for applications using
     * just clutter, or directly [class`Clutter`.Stage]
     * @class
     */
    class Stage extends Actor {
        // Own properties of Cally-13.Cally.Stage

        static name: string;
        static $gtype: GObject.GType<Stage>;

        // Constructors of Cally-13.Cally.Stage

        constructor(config?: Stage.ConstructorProperties);
        /**
         * Creates a new #CallyStage for the given `actor`. `actor` should be a
         * [class`Clutter`.Stage].
         * @constructor
         * @param actor a #ClutterActor
         * @returns the newly created #AtkObject
         */
        constructor(actor: Clutter.Actor);
        /**
         * Creates a new #CallyStage for the given `actor`. `actor` should be a
         * [class`Clutter`.Stage].
         * @constructor
         * @param actor a #ClutterActor
         * @returns the newly created #AtkObject
         */
        static new(actor: Clutter.Actor): Stage;
        _init(config?: Stage.ConstructorProperties): void;
    }

    module Text {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.Action.ConstructorProperties,
                Atk.Component.ConstructorProperties,
                Atk.EditableText.ConstructorProperties,
                Atk.Text.ConstructorProperties,
                Actor.ConstructorProperties {}
    }

    interface Text
        extends Atk.Action,
            Atk.Component,
            Atk.EditableText,
            Atk.Text {
        // Conflicting properties

        parent: Atk.Object & GObject.Object & GObject.Object;

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

        // Class property signals of Cally-13.Cally.Text

        connect(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-layer',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-layer',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-component-mdi-zorder',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-component-mdi-zorder',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-description',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-description',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-description', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-hypertext-nlinks',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-hypertext-nlinks',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-caption', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-caption-object',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-caption-object',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-description',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-column-header',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-column-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-description',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-description',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-row-header',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(
            sigName: 'notify::accessible-table-row-header',
            ...args: any[]
        ): void;
        connect(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-table-summary',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-table-summary', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-value',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-value',
            callback: ($obj: Text, pspec: GObject.ParamSpec) => void
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

    /**
     * Implementation of the ATK interfaces for a [class`Clutter`.Text]
     *
     * #CallyText implements the required ATK interfaces of
     * [class`Clutter`.Text], #AtkText and #AtkEditableText
     * @class
     */
    class Text extends Actor {
        // Own properties of Cally-13.Cally.Text

        static name: string;
        static $gtype: GObject.GType<Text>;

        // Constructors of Cally-13.Cally.Text

        constructor(config?: Text.ConstructorProperties);
        /**
         * Creates a new #CallyText for the given `actor`. `actor` must be a
         * [class`Clutter`.Text].
         * @constructor
         * @param actor a #ClutterActor
         * @returns the newly created #AtkObject
         */
        constructor(actor: Clutter.Actor);
        /**
         * Creates a new #CallyText for the given `actor`. `actor` must be a
         * [class`Clutter`.Text].
         * @constructor
         * @param actor a #ClutterActor
         * @returns the newly created #AtkObject
         */
        static new(actor: Clutter.Actor): Text;
        _init(config?: Text.ConstructorProperties): void;
    }

    module Util {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.Util.ConstructorProperties {}
    }

    interface Util {
        // Class property signals of Cally-13.Cally.Util

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * #AtkUtil implementation
     *
     * #CallyUtil implements #AtkUtil abstract methods. Although it
     * includes the name "Util" it is in fact one of the most important
     * interfaces to be implemented in any ATK toolkit implementation.
     *
     * For instance, it defines atk_get_root(), the method that returns
     * the root object in the hierarchy. Without it, you don't have
     * available any accessible object.
     * @class
     */
    class Util extends Atk.Util {
        // Own properties of Cally-13.Cally.Util

        static name: string;
        static $gtype: GObject.GType<Util>;

        // Constructors of Cally-13.Cally.Util

        constructor(config?: Util.ConstructorProperties);
        _init(config?: Util.ConstructorProperties): void;
    }

    interface ActorClass {
        // Own fields of Cally-13.Cally.ActorClass

        notify_clutter: (
            object: GObject.Object,
            pspec: GObject.ParamSpec
        ) => void;
        add_actor: (
            container: Clutter.Actor,
            actor: Clutter.Actor,
            data: any
        ) => number;
        remove_actor: (
            container: Clutter.Actor,
            actor: Clutter.Actor,
            data: any
        ) => number;
    }

    /**
     * The <structname>CallyActorClass</structname> structure contains
     * only private data
     * @record
     */
    abstract class ActorClass {
        // Own properties of Cally-13.Cally.ActorClass

        static name: string;
    }

    interface ActorPrivate {}

    class ActorPrivate {
        // Own properties of Cally-13.Cally.ActorPrivate

        static name: string;
    }

    interface CloneClass {}

    /**
     * The <structname>CallyCloneClass</structname> structure contains only
     * private data
     * @record
     */
    abstract class CloneClass {
        // Own properties of Cally-13.Cally.CloneClass

        static name: string;
    }

    interface ClonePrivate {}

    class ClonePrivate {
        // Own properties of Cally-13.Cally.ClonePrivate

        static name: string;
    }

    interface RootClass {}

    /**
     * The <structname>CallyRootClass</structname> structure contains only
     * private data
     * @record
     */
    abstract class RootClass {
        // Own properties of Cally-13.Cally.RootClass

        static name: string;
    }

    interface RootPrivate {}

    class RootPrivate {
        // Own properties of Cally-13.Cally.RootPrivate

        static name: string;
    }

    interface StageClass {}

    /**
     * The <structname>CallyStageClass</structname> structure contains only
     * private data
     * @record
     */
    abstract class StageClass {
        // Own properties of Cally-13.Cally.StageClass

        static name: string;
    }

    interface StagePrivate {}

    class StagePrivate {
        // Own properties of Cally-13.Cally.StagePrivate

        static name: string;
    }

    interface TextClass {}

    /**
     * The <structname>CallyTextClass</structname> structure contains only
     * private data
     * @record
     */
    abstract class TextClass {
        // Own properties of Cally-13.Cally.TextClass

        static name: string;
    }

    interface TextPrivate {}

    class TextPrivate {
        // Own properties of Cally-13.Cally.TextPrivate

        static name: string;
    }

    interface UtilClass {}

    /**
     * The <structname>CallyUtilClass</structname> structure contains only
     * private data
     * @record
     */
    abstract class UtilClass {
        // Own properties of Cally-13.Cally.UtilClass

        static name: string;
    }

    interface UtilPrivate {}

    class UtilPrivate {
        // Own properties of Cally-13.Cally.UtilPrivate

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

export default Cally;
// END

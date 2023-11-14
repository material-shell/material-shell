/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gobject-2.0-import.d.ts';
/**
 * GObject-2.0
 */

import type GLib from './glib-2.0.js';

export namespace GObject {
    /**
     * Flags to be passed to g_object_bind_property() or
     * g_object_bind_property_full().
     *
     * This enumeration can be extended at later date.
     * @bitfield
     */
    enum BindingFlags {
        /**
         * The default binding; if the source property
         *   changes, the target property is updated with its value.
         */
        DEFAULT,
        /**
         * Bidirectional binding; if either the
         *   property of the source or the property of the target changes,
         *   the other is updated.
         */
        BIDIRECTIONAL,
        /**
         * Synchronize the values of the source and
         *   target properties when creating the binding; the direction of
         *   the synchronization is always from the source to the target.
         */
        SYNC_CREATE,
        /**
         * If the two properties being bound are
         *   booleans, setting one to %TRUE will result in the other being
         *   set to %FALSE and vice versa. This flag will only work for
         *   boolean properties, and cannot be used when passing custom
         *   transformation functions to g_object_bind_property_full().
         */
        INVERT_BOOLEAN,
    }
    /**
     * The connection flags are used to specify the behaviour of a signal's
     * connection.
     * @bitfield
     */
    enum ConnectFlags {
        /**
         * Default behaviour (no special flags). Since: 2.74
         */
        DEFAULT,
        /**
         * If set, the handler should be called after the
         *  default handler of the signal. Normally, the handler is called before
         *  the default handler.
         */
        AFTER,
        /**
         * If set, the instance and data should be swapped when
         *  calling the handler; see g_signal_connect_swapped() for an example.
         */
        SWAPPED,
    }
    /**
     * Through the #GParamFlags flag values, certain aspects of parameters
     * can be configured.
     *
     * See also: %G_PARAM_STATIC_STRINGS
     * @bitfield
     */
    enum ParamFlags {
        /**
         * the parameter is readable
         */
        READABLE,
        /**
         * the parameter is writable
         */
        WRITABLE,
        /**
         * alias for %G_PARAM_READABLE | %G_PARAM_WRITABLE
         */
        READWRITE,
        /**
         * the parameter will be set upon object construction
         */
        CONSTRUCT,
        /**
         * the parameter can only be set upon object construction
         */
        CONSTRUCT_ONLY,
        /**
         * upon parameter conversion (see g_param_value_convert())
         *  strict validation is not required
         */
        LAX_VALIDATION,
        /**
         * the string used as name when constructing the
         *  parameter is guaranteed to remain valid and
         *  unmodified for the lifetime of the parameter.
         *  Since 2.8
         */
        STATIC_NAME,
        /**
         * internal
         */
        PRIVATE,
        /**
         * the string used as nick when constructing the
         *  parameter is guaranteed to remain valid and
         *  unmmodified for the lifetime of the parameter.
         *  Since 2.8
         */
        STATIC_NICK,
        /**
         * the string used as blurb when constructing the
         *  parameter is guaranteed to remain valid and
         *  unmodified for the lifetime of the parameter.
         *  Since 2.8
         */
        STATIC_BLURB,
        /**
         * calls to g_object_set_property() for this
         *   property will not automatically result in a "notify" signal being
         *   emitted: the implementation must call g_object_notify() themselves
         *   in case the property actually changes.  Since: 2.42.
         */
        EXPLICIT_NOTIFY,
        /**
         * the parameter is deprecated and will be removed
         *  in a future version. A warning will be generated if it is used
         *  while running with G_ENABLE_DIAGNOSTIC=1.
         *  Since 2.26
         */
        DEPRECATED,
    }
    /**
     * The signal flags are used to specify a signal's behaviour.
     * @bitfield
     */
    enum SignalFlags {
        /**
         * Invoke the object method handler in the first emission stage.
         */
        RUN_FIRST,
        /**
         * Invoke the object method handler in the third emission stage.
         */
        RUN_LAST,
        /**
         * Invoke the object method handler in the last emission stage.
         */
        RUN_CLEANUP,
        /**
         * Signals being emitted for an object while currently being in
         *  emission for this very object will not be emitted recursively,
         *  but instead cause the first emission to be restarted.
         */
        NO_RECURSE,
        /**
         * This signal supports "::detail" appendices to the signal name
         *  upon handler connections and emissions.
         */
        DETAILED,
        /**
         * Action signals are signals that may freely be emitted on alive
         *  objects from user code via g_signal_emit() and friends, without
         *  the need of being embedded into extra code that performs pre or
         *  post emission adjustments on the object. They can also be thought
         *  of as object methods which can be called generically by
         *  third-party code.
         */
        ACTION,
        /**
         * No emissions hooks are supported for this signal.
         */
        NO_HOOKS,
        /**
         * Varargs signal emission will always collect the
         *   arguments, even if there are no signal handlers connected.  Since 2.30.
         */
        MUST_COLLECT,
        /**
         * The signal is deprecated and will be removed
         *   in a future version. A warning will be generated if it is connected while
         *   running with G_ENABLE_DIAGNOSTIC=1.  Since 2.32.
         */
        DEPRECATED,
        /**
         * Only used in #GSignalAccumulator accumulator
         *   functions for the #GSignalInvocationHint::run_type field to mark the first
         *   call to the accumulator function for a signal emission.  Since 2.68.
         */
        ACCUMULATOR_FIRST_RUN,
    }
    /**
     * The match types specify what g_signal_handlers_block_matched(),
     * g_signal_handlers_unblock_matched() and g_signal_handlers_disconnect_matched()
     * match signals by.
     * @bitfield
     */
    enum SignalMatchType {
        /**
         * The signal id must be equal.
         */
        ID,
        /**
         * The signal detail must be equal.
         */
        DETAIL,
        /**
         * The closure must be the same.
         */
        CLOSURE,
        /**
         * The C closure callback must be the same.
         */
        FUNC,
        /**
         * The closure data must be the same.
         */
        DATA,
        /**
         * Only unblocked signals may be matched.
         */
        UNBLOCKED,
    }
    /**
     * These flags used to be passed to g_type_init_with_debug_flags() which
     * is now deprecated.
     *
     * If you need to enable debugging features, use the `GOBJECT_DEBUG`
     * environment variable.
     * @bitfield
     */
    enum TypeDebugFlags {
        /**
         * Print no messages
         */
        NONE,
        /**
         * Print messages about object bookkeeping
         */
        OBJECTS,
        /**
         * Print messages about signal emissions
         */
        SIGNALS,
        /**
         * Keep a count of instances of each type
         */
        INSTANCE_COUNT,
        /**
         * Mask covering all debug flags
         */
        MASK,
    }
    /**
     * Bit masks used to check or determine characteristics of a type.
     * @bitfield
     */
    enum TypeFlags {
        /**
         * No special flags. Since: 2.74
         */
        NONE,
        /**
         * Indicates an abstract type. No instances can be
         *  created for an abstract type
         */
        ABSTRACT,
        /**
         * Indicates an abstract value type, i.e. a type
         *  that introduces a value table, but can't be used for
         *  g_value_init()
         */
        VALUE_ABSTRACT,
        /**
         * Indicates a final type. A final type is a non-derivable
         *  leaf node in a deep derivable type hierarchy tree. Since: 2.70
         */
        FINAL,
        /**
         * The type is deprecated and may be removed in a
         *  future version. A warning will be emitted if it is instantiated while
         *  running with `G_ENABLE_DIAGNOSTIC=1`. Since 2.76
         */
        DEPRECATED,
    }
    /**
     * Bit masks used to check or determine specific characteristics of a
     * fundamental type.
     * @bitfield
     */
    enum TypeFundamentalFlags {
        /**
         * Indicates a classed type
         */
        CLASSED,
        /**
         * Indicates an instantiatable type (implies classed)
         */
        INSTANTIATABLE,
        /**
         * Indicates a flat derivable type
         */
        DERIVABLE,
        /**
         * Indicates a deep derivable type (implies derivable)
         */
        DEEP_DERIVABLE,
    }
    /**
     * Mask containing the bits of #GParamSpec.flags which are reserved for GLib.
     */
    const PARAM_MASK: number;
    /**
     * #GParamFlags value alias for %G_PARAM_STATIC_NAME | %G_PARAM_STATIC_NICK | %G_PARAM_STATIC_BLURB.
     *
     * It is recommended to use this for all properties by default, as it allows for
     * internal performance improvements in GObject.
     *
     * It is very rare that a property would have a dynamically constructed name,
     * nickname or blurb.
     *
     * Since 2.13.0
     */
    const PARAM_STATIC_STRINGS: number;
    /**
     * Minimum shift count to be used for user defined flags, to be stored in
     * #GParamSpec.flags. The maximum allowed is 10.
     */
    const PARAM_USER_SHIFT: number;
    /**
     * A mask for all #GSignalFlags bits.
     */
    const SIGNAL_FLAGS_MASK: number;
    /**
     * A mask for all #GSignalMatchType bits.
     */
    const SIGNAL_MATCH_MASK: number;
    /**
     * A bit in the type number that's supposed to be left untouched.
     */
    const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type;
    /**
     * An integer constant that represents the number of identifiers reserved
     * for types that are assigned at compile-time.
     */
    const TYPE_FUNDAMENTAL_MAX: number;
    /**
     * Shift value used in converting numbers to type IDs.
     */
    const TYPE_FUNDAMENTAL_SHIFT: number;
    /**
     * First fundamental type number to create a new fundamental type id with
     * G_TYPE_MAKE_FUNDAMENTAL() reserved for BSE.
     */
    const TYPE_RESERVED_BSE_FIRST: number;
    /**
     * Last fundamental type number reserved for BSE.
     */
    const TYPE_RESERVED_BSE_LAST: number;
    /**
     * First fundamental type number to create a new fundamental type id with
     * G_TYPE_MAKE_FUNDAMENTAL() reserved for GLib.
     */
    const TYPE_RESERVED_GLIB_FIRST: number;
    /**
     * Last fundamental type number reserved for GLib.
     */
    const TYPE_RESERVED_GLIB_LAST: number;
    /**
     * First available fundamental type number to create new fundamental
     * type id with G_TYPE_MAKE_FUNDAMENTAL().
     */
    const TYPE_RESERVED_USER_FIRST: number;
    /**
     * For string values, indicates that the string contained is canonical and will
     * exist for the duration of the process. See g_value_set_interned_string().
     */
    const VALUE_INTERNED_STRING: number;
    /**
     * If passed to G_VALUE_COLLECT(), allocated data won't be copied
     * but used verbatim. This does not affect ref-counted types like
     * objects. This does not affect usage of g_value_copy(), the data will
     * be copied if it is not ref-counted.
     */
    const VALUE_NOCOPY_CONTENTS: number;
    /**
     * Provide a copy of a boxed structure `src_boxed` which is of type `boxed_type`.
     * @param boxed_type The type of `src_boxed`.
     * @param src_boxed The boxed structure to be copied.
     * @returns The newly created copy of the boxed    structure.
     */
    function boxed_copy(boxed_type: GType, src_boxed: any): any;
    /**
     * Free the boxed structure `boxed` which is of type `boxed_type`.
     * @param boxed_type The type of `boxed`.
     * @param boxed The boxed structure to be freed.
     */
    function boxed_free(boxed_type: GType, boxed: any): void;
    /**
     * A #GClosureMarshal function for use with signals with handlers that
     * take two boxed pointers as arguments and return a boolean.  If you
     * have such a signal, you will probably also need to use an
     * accumulator, such as g_signal_accumulator_true_handled().
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_BOOLEAN__BOXED_BOXED(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `gboolean (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter
     * denotes a flags type.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value a #GValue which can store the returned #gboolean
     * @param n_param_values 2
     * @param param_values a #GValue array holding instance and arg1
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_BOOLEAN__FLAGS(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `gchar* (*callback) (gpointer instance, GObject *arg1, gpointer arg2, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value a #GValue, which can store the returned string
     * @param n_param_values 3
     * @param param_values a #GValue array holding instance, arg1 and arg2
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_STRING__OBJECT_POINTER(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gboolean arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gboolean parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__BOOLEAN(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GBoxed *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #GBoxed* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__BOXED(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gchar arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gchar parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__CHAR(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gdouble arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gdouble parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__DOUBLE(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes an enumeration type..
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the enumeration parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__ENUM(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes a flags type.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the flags parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__FLAGS(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gfloat arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gfloat parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__FLOAT(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gint parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__INT(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, glong arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #glong parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__LONG(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GObject *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #GObject* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__OBJECT(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GParamSpec *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #GParamSpec* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__PARAM(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gpointer arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gpointer parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__POINTER(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, const gchar *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gchar* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__STRING(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guchar arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #guchar parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__UCHAR(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guint arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #guint parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__UINT(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guint arg1, gpointer arg2, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 3
     * @param param_values a #GValue array holding instance, arg1 and arg2
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__UINT_POINTER(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gulong arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gulong parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__ULONG(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GVariant *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #GVariant* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__VARIANT(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 1
     * @param param_values a #GValue array holding only the instance
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    function cclosure_marshal_VOID__VOID(
        closure: TClosure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * A generic marshaller function implemented via
     * [libffi](http://sourceware.org/libffi/).
     *
     * Normally this function is not passed explicitly to g_signal_new(),
     * but used automatically by GLib when specifying a %NULL marshaller.
     * @param closure A #GClosure.
     * @param return_gvalue A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_generic(
        closure: TClosure,
        return_gvalue: any,
        n_param_values: number,
        param_values: any,
        invocation_hint: any | null,
        marshal_data: any | null
    ): void;
    /**
     * Disconnects a handler from `instance` so it will not be called during
     * any future or currently ongoing emissions of the signal it has been
     * connected to. The `handler_id_ptr` is then set to zero, which is never a valid handler ID value (see g_signal_connect()).
     *
     * If the handler ID is 0 then this function does nothing.
     *
     * There is also a macro version of this function so that the code
     * will be inlined.
     * @param handler_id_ptr A pointer to a handler ID (of type #gulong) of the handler to be disconnected.
     * @param instance The instance to remove the signal handler from.   This pointer may be %NULL or invalid, if the handler ID is zero.
     */
    function clear_signal_handler(
        handler_id_ptr: number,
        instance: Object
    ): void;
    /**
     * This function is meant to be called from the `complete_type_info`
     * function of a #GTypePlugin implementation, as in the following
     * example:
     *
     *
     * ```c
     * static void
     * my_enum_complete_type_info (GTypePlugin     *plugin,
     *                             GType            g_type,
     *                             GTypeInfo       *info,
     *                             GTypeValueTable *value_table)
     * {
     *   static const GEnumValue values[] = {
     *     { MY_ENUM_FOO, "MY_ENUM_FOO", "foo" },
     *     { MY_ENUM_BAR, "MY_ENUM_BAR", "bar" },
     *     { 0, NULL, NULL }
     *   };
     *
     *   g_enum_complete_type_info (type, info, values);
     * }
     * ```
     *
     * @param g_enum_type the type identifier of the type being completed
     * @param const_values An array of #GEnumValue structs for the possible  enumeration values. The array is terminated by a struct with all  members being 0.
     */
    function enum_complete_type_info(
        g_enum_type: GType,
        const_values: EnumValue
    ): /* info */ TypeInfo;
    /**
     * Returns the #GEnumValue for a value.
     * @param enum_class a #GEnumClass
     * @param value the value to look up
     * @returns the #GEnumValue for @value, or %NULL          if @value is not a member of the enumeration
     */
    function enum_get_value(
        enum_class: EnumClass,
        value: number
    ): EnumValue | null;
    /**
     * Looks up a #GEnumValue by name.
     * @param enum_class a #GEnumClass
     * @param name the name to look up
     * @returns the #GEnumValue with name @name,          or %NULL if the enumeration doesn't have a member          with that name
     */
    function enum_get_value_by_name(
        enum_class: EnumClass,
        name: string | null
    ): EnumValue | null;
    /**
     * Looks up a #GEnumValue by nickname.
     * @param enum_class a #GEnumClass
     * @param nick the nickname to look up
     * @returns the #GEnumValue with nickname @nick,          or %NULL if the enumeration doesn't have a member          with that nickname
     */
    function enum_get_value_by_nick(
        enum_class: EnumClass,
        nick: string | null
    ): EnumValue | null;
    /**
     * Registers a new static enumeration type with the name `name`.
     *
     * It is normally more convenient to let [glib-mkenums][glib-mkenums],
     * generate a my_enum_get_type() function from a usual C enumeration
     * definition  than to write one yourself using g_enum_register_static().
     * @param name A nul-terminated string used as the name of the new type.
     * @param const_static_values An array of #GEnumValue structs for the possible  enumeration values. The array is terminated by a struct with all  members being 0. GObject keeps a reference to the data, so it cannot  be stack-allocated.
     * @returns The new type identifier.
     */
    function enum_register_static(
        name: string | null,
        const_static_values: EnumValue
    ): GType;
    /**
     * Pretty-prints `value` in the form of the enum’s name.
     *
     * This is intended to be used for debugging purposes. The format of the output
     * may change in the future.
     * @param g_enum_type the type identifier of a #GEnumClass type
     * @param value the value
     * @returns a newly-allocated text string
     */
    function enum_to_string(g_enum_type: GType, value: number): string | null;
    /**
     * This function is meant to be called from the complete_type_info()
     * function of a #GTypePlugin implementation, see the example for
     * g_enum_complete_type_info() above.
     * @param g_flags_type the type identifier of the type being completed
     * @param const_values An array of #GFlagsValue structs for the possible  enumeration values. The array is terminated by a struct with all  members being 0.
     */
    function flags_complete_type_info(
        g_flags_type: GType,
        const_values: FlagsValue
    ): /* info */ TypeInfo;
    /**
     * Returns the first #GFlagsValue which is set in `value`.
     * @param flags_class a #GFlagsClass
     * @param value the value
     * @returns the first #GFlagsValue which is set in          @value, or %NULL if none is set
     */
    function flags_get_first_value(
        flags_class: FlagsClass,
        value: number
    ): FlagsValue | null;
    /**
     * Looks up a #GFlagsValue by name.
     * @param flags_class a #GFlagsClass
     * @param name the name to look up
     * @returns the #GFlagsValue with name @name,          or %NULL if there is no flag with that name
     */
    function flags_get_value_by_name(
        flags_class: FlagsClass,
        name: string | null
    ): FlagsValue | null;
    /**
     * Looks up a #GFlagsValue by nickname.
     * @param flags_class a #GFlagsClass
     * @param nick the nickname to look up
     * @returns the #GFlagsValue with nickname @nick,          or %NULL if there is no flag with that nickname
     */
    function flags_get_value_by_nick(
        flags_class: FlagsClass,
        nick: string | null
    ): FlagsValue | null;
    /**
     * Registers a new static flags type with the name `name`.
     *
     * It is normally more convenient to let [glib-mkenums][glib-mkenums]
     * generate a my_flags_get_type() function from a usual C enumeration
     * definition than to write one yourself using g_flags_register_static().
     * @param name A nul-terminated string used as the name of the new type.
     * @param const_static_values An array of #GFlagsValue structs for the possible  flags values. The array is terminated by a struct with all members being 0.  GObject keeps a reference to the data, so it cannot be stack-allocated.
     * @returns The new type identifier.
     */
    function flags_register_static(
        name: string | null,
        const_static_values: FlagsValue
    ): GType;
    /**
     * Pretty-prints `value` in the form of the flag names separated by ` | ` and
     * sorted. Any extra bits will be shown at the end as a hexadecimal number.
     *
     * This is intended to be used for debugging purposes. The format of the output
     * may change in the future.
     * @param flags_type the type identifier of a #GFlagsClass type
     * @param value the value
     * @returns a newly-allocated text string
     */
    function flags_to_string(flags_type: GType, value: number): string | null;
    function gtype_get_type(): GType;
    /**
     * Creates a new #GParamSpecBoolean instance specifying a %G_TYPE_BOOLEAN
     * property. In many cases, it may be more appropriate to use an enum with
     * g_param_spec_enum(), both to improve code clarity by using explicitly named
     * values, and to allow for more values to be added in future without breaking
     * API.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_boolean(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        default_value: boolean,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_BOXED
     * derived property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param boxed_type %G_TYPE_BOXED derived type of this property
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_boxed(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        boxed_type: GType,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecChar instance specifying a %G_TYPE_CHAR property.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_char(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecDouble instance specifying a %G_TYPE_DOUBLE
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_double(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecEnum instance specifying a %G_TYPE_ENUM
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param enum_type a #GType derived from %G_TYPE_ENUM
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_enum(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        enum_type: GType,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecFlags instance specifying a %G_TYPE_FLAGS
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param flags_type a #GType derived from %G_TYPE_FLAGS
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_flags(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        flags_type: GType,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecFloat instance specifying a %G_TYPE_FLOAT property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_float(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecGType instance specifying a
     * %G_TYPE_GTYPE property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param is_a_type a #GType whose subtypes are allowed as values  of the property (use %G_TYPE_NONE for any type)
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_gtype(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        is_a_type: GType,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecInt instance specifying a %G_TYPE_INT property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_int(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecInt64 instance specifying a %G_TYPE_INT64 property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_int64(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecLong instance specifying a %G_TYPE_LONG property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_long(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_OBJECT
     * derived property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param object_type %G_TYPE_OBJECT derived type of this property
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_object(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        object_type: GType,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecParam instance specifying a %G_TYPE_PARAM
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param param_type a #GType derived from %G_TYPE_PARAM
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_param(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        param_type: GType,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecPointer instance specifying a pointer property.
     * Where possible, it is better to use g_param_spec_object() or
     * g_param_spec_boxed() to expose memory management information.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_pointer(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecString instance.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_string(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        default_value: string | null,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecUChar instance specifying a %G_TYPE_UCHAR property.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_uchar(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecUInt instance specifying a %G_TYPE_UINT property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_uint(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecUInt64 instance specifying a %G_TYPE_UINT64
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_uint64(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecULong instance specifying a %G_TYPE_ULONG
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_ulong(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecUnichar instance specifying a %G_TYPE_UINT
     * property. #GValue structures for this property can be accessed with
     * g_value_set_uint() and g_value_get_uint().
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_unichar(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        default_value: string,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecVariant instance specifying a #GVariant
     * property.
     *
     * If `default_value` is floating, it is consumed.
     *
     * See g_param_spec_internal() for details on property names.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param type a #GVariantType
     * @param default_value a #GVariant of type `type` to                 use as the default value, or %NULL
     * @param flags flags for the property specified
     * @returns the newly created #GParamSpec
     */
    function param_spec_variant(
        name: string | null,
        nick: string | null,
        blurb: string | null,
        type: GLib.VariantType,
        default_value: GLib.Variant | null,
        flags: ParamFlags
    ): ParamSpec;
    /**
     * Registers `name` as the name of a new static type derived
     * from %G_TYPE_PARAM.
     *
     * The type system uses the information contained in the #GParamSpecTypeInfo
     * structure pointed to by `info` to manage the #GParamSpec type and its
     * instances.
     * @param name 0-terminated string used as the name of the new #GParamSpec type.
     * @param pspec_info The #GParamSpecTypeInfo for this #GParamSpec type.
     * @returns The new type identifier.
     */
    function param_type_register_static(
        name: string | null,
        pspec_info: ParamSpecTypeInfo
    ): GType;
    /**
     * Transforms `src_value` into `dest_value` if possible, and then
     * validates `dest_value,` in order for it to conform to `pspec`.  If
     * `strict_validation` is %TRUE this function will only succeed if the
     * transformed `dest_value` complied to `pspec` without modifications.
     *
     * See also g_value_type_transformable(), g_value_transform() and
     * g_param_value_validate().
     * @param pspec a valid #GParamSpec
     * @param src_value source #GValue
     * @param dest_value destination #GValue of correct type for `pspec`
     * @param strict_validation %TRUE requires `dest_value` to conform to `pspec` without modifications
     * @returns %TRUE if transformation and validation were successful,  %FALSE otherwise and @dest_value is left untouched.
     */
    function param_value_convert(
        pspec: ParamSpec,
        src_value: any,
        dest_value: any,
        strict_validation: boolean
    ): boolean;
    /**
     * Checks whether `value` contains the default value as specified in `pspec`.
     * @param pspec a valid #GParamSpec
     * @param value a #GValue of correct type for `pspec`
     * @returns whether @value contains the canonical default for this @pspec
     */
    function param_value_defaults(pspec: ParamSpec, value: any): boolean;
    /**
     * Return whether the contents of `value` comply with the specifications
     * set out by `pspec`.
     * @param pspec a valid #GParamSpec
     * @param value a #GValue of correct type for `pspec`
     * @returns whether the contents of @value comply with the specifications   set out by @pspec.
     */
    function param_value_is_valid(pspec: ParamSpec, value: any): boolean;
    /**
     * Sets `value` to its default value as specified in `pspec`.
     * @param pspec a valid #GParamSpec
     * @param value a #GValue of correct type for `pspec;` since 2.64, you   can also pass an empty #GValue, initialized with %G_VALUE_INIT
     */
    function param_value_set_default(pspec: ParamSpec, value: any): void;
    /**
     * Ensures that the contents of `value` comply with the specifications
     * set out by `pspec`. For example, a #GParamSpecInt might require
     * that integers stored in `value` may not be smaller than -42 and not be
     * greater than +42. If `value` contains an integer outside of this range,
     * it is modified accordingly, so the resulting value will fit into the
     * range -42 .. +42.
     * @param pspec a valid #GParamSpec
     * @param value a #GValue of correct type for `pspec`
     * @returns whether modifying @value was necessary to ensure validity
     */
    function param_value_validate(pspec: ParamSpec, value: any): boolean;
    /**
     * Compares `value1` with `value2` according to `pspec,` and return -1, 0 or +1,
     * if `value1` is found to be less than, equal to or greater than `value2`,
     * respectively.
     * @param pspec a valid #GParamSpec
     * @param value1 a #GValue of correct type for `pspec`
     * @param value2 a #GValue of correct type for `pspec`
     * @returns -1, 0 or +1, for a less than, equal to or greater than result
     */
    function param_values_cmp(
        pspec: ParamSpec,
        value1: any,
        value2: any
    ): number;
    /**
     * Creates a new %G_TYPE_POINTER derived type id for a new
     * pointer type with name `name`.
     * @param name the name of the new pointer type.
     * @returns a new %G_TYPE_POINTER derived type id for @name.
     */
    function pointer_type_register_static(name: string | null): GType;
    /**
     * A predefined #GSignalAccumulator for signals intended to be used as a
     * hook for application code to provide a particular value.  Usually
     * only one such value is desired and multiple handlers for the same
     * signal don't make much sense (except for the case of the default
     * handler defined in the class structure, in which case you will
     * usually want the signal connection to override the class handler).
     *
     * This accumulator will use the return value from the first signal
     * handler that is run as the return value for the signal and not run
     * any further handlers (ie: the first handler "wins").
     * @param ihint standard #GSignalAccumulator parameter
     * @param return_accu standard #GSignalAccumulator parameter
     * @param handler_return standard #GSignalAccumulator parameter
     * @param dummy standard #GSignalAccumulator parameter
     * @returns standard #GSignalAccumulator result
     */
    function signal_accumulator_first_wins(
        ihint: SignalInvocationHint,
        return_accu: any,
        handler_return: any,
        dummy: any | null
    ): boolean;
    /**
     * A predefined #GSignalAccumulator for signals that return a
     * boolean values. The behavior that this accumulator gives is
     * that a return of %TRUE stops the signal emission: no further
     * callbacks will be invoked, while a return of %FALSE allows
     * the emission to continue. The idea here is that a %TRUE return
     * indicates that the callback handled the signal, and no further
     * handling is needed.
     * @param ihint standard #GSignalAccumulator parameter
     * @param return_accu standard #GSignalAccumulator parameter
     * @param handler_return standard #GSignalAccumulator parameter
     * @param dummy standard #GSignalAccumulator parameter
     * @returns standard #GSignalAccumulator result
     */
    function signal_accumulator_true_handled(
        ihint: SignalInvocationHint,
        return_accu: any,
        handler_return: any,
        dummy: any | null
    ): boolean;
    /**
     * Adds an emission hook for a signal, which will get called for any emission
     * of that signal, independent of the instance. This is possible only
     * for signals which don't have %G_SIGNAL_NO_HOOKS flag set.
     * @param signal_id the signal identifier, as returned by g_signal_lookup().
     * @param detail the detail on which to call the hook.
     * @returns the hook id, for later use with g_signal_remove_emission_hook().
     */
    function signal_add_emission_hook(
        signal_id: number,
        detail: GLib.Quark
    ): number;
    /**
     * Calls the original class closure of a signal. This function should only
     * be called from an overridden class closure; see
     * g_signal_override_class_closure() and
     * g_signal_override_class_handler().
     * @param instance_and_params the argument list of the signal emission.  The first element in the array is a #GValue for the instance the signal  is being emitted on. The rest are any arguments to be passed to the signal.
     * @param return_value Location for the return value.
     */
    function signal_chain_from_overridden(
        instance_and_params: any[],
        return_value: any
    ): void;
    /**
     * Connects a closure to a signal for a particular object.
     *
     * If `closure` is a floating reference (see g_closure_sink()), this function
     * takes ownership of `closure`.
     * @param instance the instance to connect to.
     * @param detailed_signal a string of the form "signal-name::detail".
     * @param closure the closure to connect.
     * @param after whether the handler should be called before or after the  default handler of the signal.
     * @returns the handler ID (always greater than 0 for successful connections)
     */
    function signal_connect_closure(
        instance: Object,
        detailed_signal: string | null,
        closure: TClosure,
        after: boolean
    ): number;
    /**
     * Connects a closure to a signal for a particular object.
     *
     * If `closure` is a floating reference (see g_closure_sink()), this function
     * takes ownership of `closure`.
     * @param instance the instance to connect to.
     * @param signal_id the id of the signal.
     * @param detail the detail.
     * @param closure the closure to connect.
     * @param after whether the handler should be called before or after the  default handler of the signal.
     * @returns the handler ID (always greater than 0 for successful connections)
     */
    function signal_connect_closure_by_id(
        instance: Object,
        signal_id: number,
        detail: GLib.Quark,
        closure: TClosure,
        after: boolean
    ): number;
    /**
     * Emits a signal. Signal emission is done synchronously.
     * The method will only return control after all handlers are called or signal emission was stopped.
     *
     * Note that g_signal_emitv() doesn't change `return_value` if no handlers are
     * connected, in contrast to g_signal_emit() and g_signal_emit_valist().
     * @param instance_and_params argument list for the signal emission.  The first element in the array is a #GValue for the instance the signal  is being emitted on. The rest are any arguments to be passed to the signal.
     * @param signal_id the signal id
     * @param detail the detail
     * @param return_value Location to store the return value of the signal emission. This must be provided if the specified signal returns a value, but may be ignored otherwise.
     */
    function signal_emitv(
        instance_and_params: any[],
        signal_id: number,
        detail: GLib.Quark,
        return_value?: any
    ): /* return_value */ any;
    /**
     * Returns the invocation hint of the innermost signal emission of instance.
     * @param instance the instance to query
     * @returns the invocation hint of the innermost     signal emission, or %NULL if not found.
     */
    function signal_get_invocation_hint(
        instance: Object
    ): SignalInvocationHint | null;
    /**
     * Blocks a handler of an instance so it will not be called during any
     * signal emissions unless it is unblocked again. Thus "blocking" a
     * signal handler means to temporarily deactivate it, a signal handler
     * has to be unblocked exactly the same amount of times it has been
     * blocked before to become active again.
     *
     * The `handler_id` has to be a valid signal handler id, connected to a
     * signal of `instance`.
     * @param instance The instance to block the signal handler of.
     * @param handler_id Handler id of the handler to be blocked.
     */
    function signal_handler_block(instance: Object, handler_id: number): void;
    /**
     * Disconnects a handler from an instance so it will not be called during
     * any future or currently ongoing emissions of the signal it has been
     * connected to. The `handler_id` becomes invalid and may be reused.
     *
     * The `handler_id` has to be a valid signal handler id, connected to a
     * signal of `instance`.
     * @param instance The instance to remove the signal handler from.
     * @param handler_id Handler id of the handler to be disconnected.
     */
    function signal_handler_disconnect(
        instance: Object,
        handler_id: number
    ): void;
    /**
     * Finds the first signal handler that matches certain selection criteria.
     * The criteria mask is passed as an OR-ed combination of #GSignalMatchType
     * flags, and the criteria values are passed as arguments.
     * The match `mask` has to be non-0 for successful matches.
     * If no handler was found, 0 is returned.
     * @param instance The instance owning the signal handler to be found.
     * @param mask Mask indicating which of `signal_id,` `detail,` `closure,` `func`  and/or `data` the handler has to match.
     * @param signal_id Signal the handler has to be connected to.
     * @param detail Signal detail the handler has to be connected to.
     * @param func The C closure callback of the handler (useless for non-C closures).
     * @param data The closure data of the handler's closure.
     * @returns A valid non-0 signal handler id for a successful match.
     */
    function signal_handler_find(
        instance: Object,
        mask: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        func: any | null,
        data: any | null
    ): number;
    /**
     * Returns whether `handler_id` is the ID of a handler connected to `instance`.
     * @param instance The instance where a signal handler is sought.
     * @param handler_id the handler ID.
     * @returns whether @handler_id identifies a handler connected to @instance.
     */
    function signal_handler_is_connected(
        instance: Object,
        handler_id: number
    ): boolean;
    /**
     * Undoes the effect of a previous g_signal_handler_block() call.  A
     * blocked handler is skipped during signal emissions and will not be
     * invoked, unblocking it (for exactly the amount of times it has been
     * blocked before) reverts its "blocked" state, so the handler will be
     * recognized by the signal system and is called upon future or
     * currently ongoing signal emissions (since the order in which
     * handlers are called during signal emissions is deterministic,
     * whether the unblocked handler in question is called as part of a
     * currently ongoing emission depends on how far that emission has
     * proceeded yet).
     *
     * The `handler_id` has to be a valid id of a signal handler that is
     * connected to a signal of `instance` and is currently blocked.
     * @param instance The instance to unblock the signal handler of.
     * @param handler_id Handler id of the handler to be unblocked.
     */
    function signal_handler_unblock(instance: Object, handler_id: number): void;
    /**
     * Blocks all handlers on an instance that match a certain selection criteria.
     *
     * The criteria mask is passed as a combination of #GSignalMatchType flags, and
     * the criteria values are passed as arguments. A handler must match on all
     * flags set in `mask` to be blocked (i.e. the match is conjunctive).
     *
     * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
     * %G_SIGNAL_MATCH_FUNC
     * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches.
     * If no handlers were found, 0 is returned, the number of blocked handlers
     * otherwise.
     *
     * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
     * @param instance The instance to block handlers from.
     * @param mask Mask indicating which of `signal_id,` `detail,` `closure,` `func`  and/or `data` the handlers have to match.
     * @param signal_id Signal the handlers have to be connected to.
     * @param detail Signal detail the handlers have to be connected to.
     * @param func The C closure callback of the handlers (useless for non-C closures).
     * @param data The closure data of the handlers' closures.
     * @returns The number of handlers that matched.
     */
    function signal_handlers_block_matched(
        instance: Object,
        mask: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        func: any | null,
        data: any | null
    ): number;
    /**
     * Destroy all signal handlers of a type instance. This function is
     * an implementation detail of the #GObject dispose implementation,
     * and should not be used outside of the type system.
     * @param instance The instance whose signal handlers are destroyed
     */
    function signal_handlers_destroy(instance: Object): void;
    /**
     * Disconnects all handlers on an instance that match a certain
     * selection criteria.
     *
     * The criteria mask is passed as a combination of #GSignalMatchType flags, and
     * the criteria values are passed as arguments. A handler must match on all
     * flags set in `mask` to be disconnected (i.e. the match is conjunctive).
     *
     * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
     * %G_SIGNAL_MATCH_FUNC or
     * %G_SIGNAL_MATCH_DATA match flags is required for successful
     * matches.  If no handlers were found, 0 is returned, the number of
     * disconnected handlers otherwise.
     *
     * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
     * @param instance The instance to remove handlers from.
     * @param mask Mask indicating which of `signal_id,` `detail,` `closure,` `func`  and/or `data` the handlers have to match.
     * @param signal_id Signal the handlers have to be connected to.
     * @param detail Signal detail the handlers have to be connected to.
     * @param func The C closure callback of the handlers (useless for non-C closures).
     * @param data The closure data of the handlers' closures.
     * @returns The number of handlers that matched.
     */
    function signal_handlers_disconnect_matched(
        instance: Object,
        mask: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        func: any | null,
        data: any | null
    ): number;
    /**
     * Unblocks all handlers on an instance that match a certain selection
     * criteria.
     *
     * The criteria mask is passed as a combination of #GSignalMatchType flags, and
     * the criteria values are passed as arguments. A handler must match on all
     * flags set in `mask` to be unblocked (i.e. the match is conjunctive).
     *
     * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
     * %G_SIGNAL_MATCH_FUNC
     * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches.
     * If no handlers were found, 0 is returned, the number of unblocked handlers
     * otherwise. The match criteria should not apply to any handlers that are
     * not currently blocked.
     *
     * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
     * @param instance The instance to unblock handlers from.
     * @param mask Mask indicating which of `signal_id,` `detail,` `closure,` `func`  and/or `data` the handlers have to match.
     * @param signal_id Signal the handlers have to be connected to.
     * @param detail Signal detail the handlers have to be connected to.
     * @param func The C closure callback of the handlers (useless for non-C closures).
     * @param data The closure data of the handlers' closures.
     * @returns The number of handlers that matched.
     */
    function signal_handlers_unblock_matched(
        instance: Object,
        mask: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        func: any | null,
        data: any | null
    ): number;
    /**
     * Returns whether there are any handlers connected to `instance` for the
     * given signal id and detail.
     *
     * If `detail` is 0 then it will only match handlers that were connected
     * without detail.  If `detail` is non-zero then it will match handlers
     * connected both without detail and with the given detail.  This is
     * consistent with how a signal emitted with `detail` would be delivered
     * to those handlers.
     *
     * Since 2.46 this also checks for a non-default class closure being
     * installed, as this is basically always what you want.
     *
     * One example of when you might use this is when the arguments to the
     * signal are difficult to compute. A class implementor may opt to not
     * emit the signal if no one is attached anyway, thus saving the cost
     * of building the arguments.
     * @param instance the object whose signal handlers are sought.
     * @param signal_id the signal id.
     * @param detail the detail.
     * @param may_be_blocked whether blocked handlers should count as match.
     * @returns %TRUE if a handler is connected to the signal, %FALSE          otherwise.
     */
    function signal_has_handler_pending(
        instance: Object,
        signal_id: number,
        detail: GLib.Quark,
        may_be_blocked: boolean
    ): boolean;
    /**
     * Validate a signal name. This can be useful for dynamically-generated signals
     * which need to be validated at run-time before actually trying to create them.
     *
     * See [canonical parameter names][canonical-parameter-names] for details of
     * the rules for valid names. The rules for signal names are the same as those
     * for property names.
     * @param name the canonical name of the signal
     * @returns %TRUE if @name is a valid signal name, %FALSE otherwise.
     */
    function signal_is_valid_name(name: string | null): boolean;
    /**
     * Lists the signals by id that a certain instance or interface type
     * created. Further information about the signals can be acquired through
     * g_signal_query().
     * @param itype Instance or interface type.
     * @returns Newly allocated array of signal IDs.
     */
    function signal_list_ids(itype: GType): number[];
    /**
     * Given the name of the signal and the type of object it connects to, gets
     * the signal's identifying integer. Emitting the signal by number is
     * somewhat faster than using the name each time.
     *
     * Also tries the ancestors of the given type.
     *
     * The type class passed as `itype` must already have been instantiated (for
     * example, using g_type_class_ref()) for this function to work, as signals are
     * always installed during class initialization.
     *
     * See g_signal_new() for details on allowed signal names.
     * @param name the signal's name.
     * @param itype the type that the signal operates on.
     * @returns the signal's identifying number, or 0 if no signal was found.
     */
    function signal_lookup(name: string | null, itype: GType): number;
    /**
     * Given the signal's identifier, finds its name.
     *
     * Two different signals may have the same name, if they have differing types.
     * @param signal_id the signal's identifying number.
     * @returns the signal name, or %NULL if the signal number was invalid.
     */
    function signal_name(signal_id: number): string | null;
    /**
     * Overrides the class closure (i.e. the default handler) for the given signal
     * for emissions on instances of `instance_type`. `instance_type` must be derived
     * from the type to which the signal belongs.
     *
     * See g_signal_chain_from_overridden() and
     * g_signal_chain_from_overridden_handler() for how to chain up to the
     * parent class closure from inside the overridden one.
     * @param signal_id the signal id
     * @param instance_type the instance type on which to override the class closure  for the signal.
     * @param class_closure the closure.
     */
    function signal_override_class_closure(
        signal_id: number,
        instance_type: GType,
        class_closure: TClosure
    ): void;
    /**
     * Internal function to parse a signal name into its `signal_id`
     * and `detail` quark.
     * @param detailed_signal a string of the form "signal-name::detail".
     * @param itype The interface/instance type that introduced "signal-name".
     * @param force_detail_quark %TRUE forces creation of a #GQuark for the detail.
     * @returns Whether the signal name could successfully be parsed and @signal_id_p and @detail_p contain valid return values.
     */
    function signal_parse_name(
        detailed_signal: string | null,
        itype: GType,
        force_detail_quark: boolean
    ): [
        /* returnType */ boolean,
        /* signal_id_p */ number,
        /* detail_p */ GLib.Quark
    ];
    /**
     * Queries the signal system for in-depth information about a
     * specific signal. This function will fill in a user-provided
     * structure to hold signal-specific information. If an invalid
     * signal id is passed in, the `signal_id` member of the #GSignalQuery
     * is 0. All members filled into the #GSignalQuery structure should
     * be considered constant and have to be left untouched.
     * @param signal_id The signal id of the signal to query information for.
     */
    function signal_query(signal_id: number): /* query */ SignalQuery;
    /**
     * Deletes an emission hook.
     * @param signal_id the id of the signal
     * @param hook_id the id of the emission hook, as returned by  g_signal_add_emission_hook()
     */
    function signal_remove_emission_hook(
        signal_id: number,
        hook_id: number
    ): void;
    /**
     * Change the #GSignalCVaMarshaller used for a given signal.  This is a
     * specialised form of the marshaller that can often be used for the
     * common case of a single connected signal handler and avoids the
     * overhead of #GValue.  Its use is optional.
     * @param signal_id the signal id
     * @param instance_type the instance type on which to set the marshaller.
     * @param va_marshaller the marshaller to set.
     */
    function signal_set_va_marshaller(
        signal_id: number,
        instance_type: GType,
        va_marshaller: SignalCVaMarshaller
    ): void;
    /**
     * Stops a signal's current emission.
     *
     * This will prevent the default method from running, if the signal was
     * %G_SIGNAL_RUN_LAST and you connected normally (i.e. without the "after"
     * flag).
     *
     * Prints a warning if used on a signal which isn't being emitted.
     * @param instance the object whose signal handlers you wish to stop.
     * @param signal_id the signal identifier, as returned by g_signal_lookup().
     * @param detail the detail which the signal was emitted with.
     */
    function signal_stop_emission(
        instance: Object,
        signal_id: number,
        detail: GLib.Quark
    ): void;
    /**
     * Stops a signal's current emission.
     *
     * This is just like g_signal_stop_emission() except it will look up the
     * signal id for you.
     * @param instance the object whose signal handlers you wish to stop.
     * @param detailed_signal a string of the form "signal-name::detail".
     */
    function signal_stop_emission_by_name(
        instance: Object,
        detailed_signal: string | null
    ): void;
    /**
     * Creates a new closure which invokes the function found at the offset
     * `struct_offset` in the class structure of the interface or classed type
     * identified by `itype`.
     * @param itype the #GType identifier of an interface or classed type
     * @param struct_offset the offset of the member function of `itype'`s class  structure which is to be invoked by the new closure
     * @returns a floating reference to a new #GCClosure
     */
    function signal_type_cclosure_new(
        itype: GType,
        struct_offset: number
    ): TClosure;
    /**
     * Set the callback for a source as a #GClosure.
     *
     * If the source is not one of the standard GLib types, the `closure_callback`
     * and `closure_marshal` fields of the #GSourceFuncs structure must have been
     * filled in with pointers to appropriate functions.
     * @param source the source
     * @param closure a #GClosure
     */
    function source_set_closure(source: GLib.Source, closure: TClosure): void;
    /**
     * Sets a dummy callback for `source`. The callback will do nothing, and
     * if the source expects a #gboolean return value, it will return %TRUE.
     * (If the source expects any other type of return value, it will return
     * a 0/%NULL value; whatever g_value_init() initializes a #GValue to for
     * that type.)
     *
     * If the source is not one of the standard GLib types, the
     * `closure_callback` and `closure_marshal` fields of the #GSourceFuncs
     * structure must have been filled in with pointers to appropriate
     * functions.
     * @param source the source
     */
    function source_set_dummy_callback(source: GLib.Source): void;
    /**
     * Return a newly allocated string, which describes the contents of a
     * #GValue.  The main purpose of this function is to describe #GValue
     * contents for debugging output, the way in which the contents are
     * described may change between different GLib versions.
     * @param value #GValue which contents are to be described.
     * @returns Newly allocated string.
     */
    function strdup_value_contents(value: any): string | null;
    /**
     * Registers a private class structure for a classed type;
     * when the class is allocated, the private structures for
     * the class and all of its parent types are allocated
     * sequentially in the same memory block as the public
     * structures, and are zero-filled.
     *
     * This function should be called in the
     * type's get_type() function after the type is registered.
     * The private structure can be retrieved using the
     * G_TYPE_CLASS_GET_PRIVATE() macro.
     * @param class_type GType of a classed type
     * @param private_size size of private structure
     */
    function type_add_class_private(
        class_type: GType,
        private_size: number
    ): void;
    function type_add_instance_private(
        class_type: GType,
        private_size: number
    ): number;
    /**
     * Adds `interface_type` to the dynamic `instance_type`. The information
     * contained in the #GTypePlugin structure pointed to by `plugin`
     * is used to manage the relationship.
     * @param instance_type #GType value of an instantiatable type
     * @param interface_type #GType value of an interface type
     * @param plugin #GTypePlugin structure to retrieve the #GInterfaceInfo from
     */
    function type_add_interface_dynamic(
        instance_type: GType,
        interface_type: GType,
        plugin: TypePlugin
    ): void;
    /**
     * Adds `interface_type` to the static `instance_type`.
     * The information contained in the #GInterfaceInfo structure
     * pointed to by `info` is used to manage the relationship.
     * @param instance_type #GType value of an instantiatable type
     * @param interface_type #GType value of an interface type
     * @param info #GInterfaceInfo structure for this        (`instance_type,` `interface_type)` combination
     */
    function type_add_interface_static(
        instance_type: GType,
        interface_type: GType,
        info: InterfaceInfo
    ): void;
    function type_check_class_is_a(
        g_class: TypeClass,
        is_a_type: GType
    ): boolean;
    /**
     * Private helper function to aid implementation of the
     * G_TYPE_CHECK_INSTANCE() macro.
     * @param instance a valid #GTypeInstance structure
     * @returns %TRUE if @instance is valid, %FALSE otherwise
     */
    function type_check_instance(instance: TypeInstance): boolean;
    function type_check_instance_is_a(
        instance: TypeInstance,
        iface_type: GType
    ): boolean;
    function type_check_instance_is_fundamentally_a(
        instance: TypeInstance,
        fundamental_type: GType
    ): boolean;
    function type_check_is_value_type(type: GType): boolean;
    function type_check_value(value: any): boolean;
    function type_check_value_holds(value: any, type: GType): boolean;
    /**
     * Return a newly allocated and 0-terminated array of type IDs, listing
     * the child types of `type`.
     * @param type the parent type
     * @returns Newly allocated     and 0-terminated array of child types, free with g_free()
     */
    function type_children(type: GType): GType[];
    function type_class_adjust_private_offset(
        g_class: any | null,
        private_size_or_offset: number
    ): void;
    /**
     * This function is essentially the same as g_type_class_ref(),
     * except that the classes reference count isn't incremented.
     * As a consequence, this function may return %NULL if the class
     * of the type passed in does not currently exist (hasn't been
     * referenced before).
     * @param type type ID of a classed type
     * @returns the #GTypeClass     structure for the given type ID or %NULL if the class does not     currently exist
     */
    function type_class_peek(type: GType): TypeClass;
    /**
     * A more efficient version of g_type_class_peek() which works only for
     * static types.
     * @param type type ID of a classed type
     * @returns the #GTypeClass     structure for the given type ID or %NULL if the class does not     currently exist or is dynamically loaded
     */
    function type_class_peek_static(type: GType): TypeClass;
    /**
     * Increments the reference count of the class structure belonging to
     * `type`. This function will demand-create the class if it doesn't
     * exist already.
     * @param type type ID of a classed type
     * @returns the #GTypeClass     structure for the given type ID
     */
    function type_class_ref(type: GType): TypeClass;
    /**
     * If the interface type `g_type` is currently in use, returns its
     * default interface vtable.
     * @param g_type an interface type
     * @returns the default     vtable for the interface, or %NULL if the type is not currently     in use
     */
    function type_default_interface_peek(g_type: GType): TypeInterface;
    /**
     * Increments the reference count for the interface type `g_type,`
     * and returns the default interface vtable for the type.
     *
     * If the type is not currently in use, then the default vtable
     * for the type will be created and initialized by calling
     * the base interface init and default vtable init functions for
     * the type (the `base_init` and `class_init` members of #GTypeInfo).
     * Calling g_type_default_interface_ref() is useful when you
     * want to make sure that signals and properties for an interface
     * have been installed.
     * @param g_type an interface type
     * @returns the default     vtable for the interface; call g_type_default_interface_unref()     when you are done using the interface.
     */
    function type_default_interface_ref(g_type: GType): TypeInterface;
    /**
     * Decrements the reference count for the type corresponding to the
     * interface default vtable `g_iface`. If the type is dynamic, then
     * when no one is using the interface and all references have
     * been released, the finalize function for the interface's default
     * vtable (the `class_finalize` member of #GTypeInfo) will be called.
     * @param g_iface the default vtable     structure for an interface, as returned by g_type_default_interface_ref()
     */
    function type_default_interface_unref(g_iface: TypeInterface): void;
    /**
     * Returns the length of the ancestry of the passed in type. This
     * includes the type itself, so that e.g. a fundamental type has depth 1.
     * @param type a #GType
     * @returns the depth of @type
     */
    function type_depth(type: GType): number;
    /**
     * Ensures that the indicated `type` has been registered with the
     * type system, and its _class_init() method has been run.
     *
     * In theory, simply calling the type's _get_type() method (or using
     * the corresponding macro) is supposed take care of this. However,
     * _get_type() methods are often marked %G_GNUC_CONST for performance
     * reasons, even though this is technically incorrect (since
     * %G_GNUC_CONST requires that the function not have side effects,
     * which _get_type() methods do on the first call). As a result, if
     * you write a bare call to a _get_type() macro, it may get optimized
     * out by the compiler. Using g_type_ensure() guarantees that the
     * type's _get_type() method is called.
     * @param type a #GType
     */
    function type_ensure(type: GType): void;
    /**
     * Frees an instance of a type, returning it to the instance pool for
     * the type, if there is one.
     *
     * Like g_type_create_instance(), this function is reserved for
     * implementors of fundamental types.
     * @param instance an instance of a type
     */
    function type_free_instance(instance: TypeInstance): void;
    /**
     * Look up the type ID from a given type name, returning 0 if no type
     * has been registered under this name (this is the preferred method
     * to find out by name whether a specific type has been registered
     * yet).
     * @param name type name to look up
     * @returns corresponding type ID or 0
     */
    function type_from_name(name: string | null): GType;
    /**
     * Internal function, used to extract the fundamental type ID portion.
     * Use G_TYPE_FUNDAMENTAL() instead.
     * @param type_id valid type ID
     * @returns fundamental type ID
     */
    function type_fundamental(type_id: GType): GType;
    /**
     * Returns the next free fundamental type id which can be used to
     * register a new fundamental type with g_type_register_fundamental().
     * The returned type ID represents the highest currently registered
     * fundamental type identifier.
     * @returns the next available fundamental type ID to be registered,     or 0 if the type system ran out of fundamental type IDs
     */
    function type_fundamental_next(): GType;
    /**
     * Returns the number of instances allocated of the particular type;
     * this is only available if GLib is built with debugging support and
     * the `instance-count` debug flag is set (by setting the `GOBJECT_DEBUG`
     * variable to include `instance-count`).
     * @param type a #GType
     * @returns the number of instances allocated of the given type;   if instance counts are not available, returns 0.
     */
    function type_get_instance_count(type: GType): number;
    /**
     * Returns the #GTypePlugin structure for `type`.
     * @param type #GType to retrieve the plugin for
     * @returns the corresponding plugin     if @type is a dynamic type, %NULL otherwise
     */
    function type_get_plugin(type: GType): TypePlugin;
    /**
     * Obtains data which has previously been attached to `type`
     * with g_type_set_qdata().
     *
     * Note that this does not take subtyping into account; data
     * attached to one type with g_type_set_qdata() cannot
     * be retrieved from a subtype using g_type_get_qdata().
     * @param type a #GType
     * @param quark a #GQuark id to identify the data
     * @returns the data, or %NULL if no data was found
     */
    function type_get_qdata(type: GType, quark: GLib.Quark): any | null;
    /**
     * Returns an opaque serial number that represents the state of the set
     * of registered types. Any time a type is registered this serial changes,
     * which means you can cache information based on type lookups (such as
     * g_type_from_name()) and know if the cache is still valid at a later
     * time by comparing the current serial with the one at the type lookup.
     * @returns An unsigned int, representing the state of type registrations
     */
    function type_get_type_registration_serial(): number;
    /**
     * This function used to initialise the type system.  Since GLib 2.36,
     * the type system is initialised automatically and this function does
     * nothing.
     */
    function type_init(): void;
    /**
     * This function used to initialise the type system with debugging
     * flags.  Since GLib 2.36, the type system is initialised automatically
     * and this function does nothing.
     *
     * If you need to enable debugging features, use the `GOBJECT_DEBUG`
     * environment variable.
     * @param debug_flags bitwise combination of #GTypeDebugFlags values for     debugging purposes
     */
    function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void;
    /**
     * Adds `prerequisite_type` to the list of prerequisites of `interface_type`.
     * This means that any type implementing `interface_type` must also implement
     * `prerequisite_type`. Prerequisites can be thought of as an alternative to
     * interface derivation (which GType doesn't support). An interface can have
     * at most one instantiatable prerequisite type.
     * @param interface_type #GType value of an interface type
     * @param prerequisite_type #GType value of an interface or instantiatable type
     */
    function type_interface_add_prerequisite(
        interface_type: GType,
        prerequisite_type: GType
    ): void;
    /**
     * Returns the #GTypePlugin structure for the dynamic interface
     * `interface_type` which has been added to `instance_type,` or %NULL
     * if `interface_type` has not been added to `instance_type` or does
     * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
     * @param instance_type #GType of an instantiatable type
     * @param interface_type #GType of an interface type
     * @returns the #GTypePlugin for the dynamic     interface @interface_type of @instance_type
     */
    function type_interface_get_plugin(
        instance_type: GType,
        interface_type: GType
    ): TypePlugin;
    /**
     * Returns the most specific instantiatable prerequisite of an
     * interface type. If the interface type has no instantiatable
     * prerequisite, %G_TYPE_INVALID is returned.
     *
     * See g_type_interface_add_prerequisite() for more information
     * about prerequisites.
     * @param interface_type an interface type
     * @returns the instantiatable prerequisite type or %G_TYPE_INVALID if none
     */
    function type_interface_instantiatable_prerequisite(
        interface_type: GType
    ): GType;
    /**
     * Returns the #GTypeInterface structure of an interface to which the
     * passed in class conforms.
     * @param instance_class a #GTypeClass structure
     * @param iface_type an interface ID which this class conforms to
     * @returns the #GTypeInterface     structure of @iface_type if implemented by @instance_class, %NULL     otherwise
     */
    function type_interface_peek(
        instance_class: TypeClass,
        iface_type: GType
    ): TypeInterface;
    /**
     * Returns the prerequisites of an interfaces type.
     * @param interface_type an interface type
     * @returns a     newly-allocated zero-terminated array of #GType containing     the prerequisites of @interface_type
     */
    function type_interface_prerequisites(interface_type: GType): GType[];
    /**
     * Return a newly allocated and 0-terminated array of type IDs, listing
     * the interface types that `type` conforms to.
     * @param type the type to list interface types for
     * @returns Newly allocated     and 0-terminated array of interface types, free with g_free()
     */
    function type_interfaces(type: GType): GType[];
    /**
     * If `is_a_type` is a derivable type, check whether `type` is a
     * descendant of `is_a_type`. If `is_a_type` is an interface, check
     * whether `type` conforms to it.
     * @param type type to check ancestry for
     * @param is_a_type possible ancestor of `type` or interface that `type`     could conform to
     * @returns %TRUE if @type is a @is_a_type
     */
    function type_is_a(type: GType, is_a_type: GType): boolean;
    /**
     * Get the unique name that is assigned to a type ID.  Note that this
     * function (like all other GType API) cannot cope with invalid type
     * IDs. %G_TYPE_INVALID may be passed to this function, as may be any
     * other validly registered type ID, but randomized type IDs should
     * not be passed in and will most likely lead to a crash.
     * @param type type to return name for
     * @returns static type name or %NULL
     */
    function type_name(type: GType): string | null;
    function type_name_from_class(g_class: TypeClass): string | null;
    function type_name_from_instance(instance: TypeInstance): string | null;
    /**
     * Given a `leaf_type` and a `root_type` which is contained in its
     * ancestry, return the type that `root_type` is the immediate parent
     * of. In other words, this function determines the type that is
     * derived directly from `root_type` which is also a base class of
     * `leaf_type`.  Given a root type and a leaf type, this function can
     * be used to determine the types and order in which the leaf type is
     * descended from the root type.
     * @param leaf_type descendant of `root_type` and the type to be returned
     * @param root_type immediate parent of the returned type
     * @returns immediate child of @root_type and ancestor of @leaf_type
     */
    function type_next_base(leaf_type: GType, root_type: GType): GType;
    /**
     * Return the direct parent type of the passed in type. If the passed
     * in type has no parent, i.e. is a fundamental type, 0 is returned.
     * @param type the derived type
     * @returns the parent type
     */
    function type_parent(type: GType): GType;
    /**
     * Get the corresponding quark of the type IDs name.
     * @param type type to return quark of type name for
     * @returns the type names quark or 0
     */
    function type_qname(type: GType): GLib.Quark;
    /**
     * Queries the type system for information about a specific type.
     *
     * This function will fill in a user-provided structure to hold
     * type-specific information. If an invalid #GType is passed in, the
     * `type` member of the #GTypeQuery is 0. All members filled into the
     * #GTypeQuery structure should be considered constant and have to be
     * left untouched.
     *
     * Since GLib 2.78, this function allows queries on dynamic types. Previously
     * it only supported static types.
     * @param type #GType of a static, classed type
     */
    function type_query(type: GType): /* query */ TypeQuery;
    /**
     * Registers `type_name` as the name of a new dynamic type derived from
     * `parent_type`.  The type system uses the information contained in the
     * #GTypePlugin structure pointed to by `plugin` to manage the type and its
     * instances (if not abstract).  The value of `flags` determines the nature
     * (e.g. abstract or not) of the type.
     * @param parent_type type from which this type will be derived
     * @param type_name 0-terminated string used as the name of the new type
     * @param plugin #GTypePlugin structure to retrieve the #GTypeInfo from
     * @param flags bitwise combination of #GTypeFlags values
     * @returns the new type identifier or %G_TYPE_INVALID if registration failed
     */
    function type_register_dynamic(
        parent_type: GType,
        type_name: string | null,
        plugin: TypePlugin,
        flags: TypeFlags
    ): GType;
    /**
     * Registers `type_id` as the predefined identifier and `type_name` as the
     * name of a fundamental type. If `type_id` is already registered, or a
     * type named `type_name` is already registered, the behaviour is undefined.
     * The type system uses the information contained in the #GTypeInfo structure
     * pointed to by `info` and the #GTypeFundamentalInfo structure pointed to by
     * `finfo` to manage the type and its instances. The value of `flags` determines
     * additional characteristics of the fundamental type.
     * @param type_id a predefined type identifier
     * @param type_name 0-terminated string used as the name of the new type
     * @param info #GTypeInfo structure for this type
     * @param finfo #GTypeFundamentalInfo structure for this type
     * @param flags bitwise combination of #GTypeFlags values
     * @returns the predefined type identifier
     */
    function type_register_fundamental(
        type_id: GType,
        type_name: string | null,
        info: TypeInfo,
        finfo: TypeFundamentalInfo,
        flags: TypeFlags
    ): GType;
    /**
     * Registers `type_name` as the name of a new static type derived from
     * `parent_type`. The type system uses the information contained in the
     * #GTypeInfo structure pointed to by `info` to manage the type and its
     * instances (if not abstract). The value of `flags` determines the nature
     * (e.g. abstract or not) of the type.
     * @param parent_type type from which this type will be derived
     * @param type_name 0-terminated string used as the name of the new type
     * @param info #GTypeInfo structure for this type
     * @param flags bitwise combination of #GTypeFlags values
     * @returns the new type identifier
     */
    function type_register_static(
        parent_type: GType,
        type_name: string | null,
        info: TypeInfo,
        flags: TypeFlags
    ): GType;
    /**
     * Attaches arbitrary data to a type.
     * @param type a #GType
     * @param quark a #GQuark id to identify the data
     * @param data the data
     */
    function type_set_qdata(
        type: GType,
        quark: GLib.Quark,
        data: any | null
    ): void;
    function type_test_flags(type: GType, flags: number): boolean;
    /**
     * Returns whether a #GValue of type `src_type` can be copied into
     * a #GValue of type `dest_type`.
     * @param src_type source type to be copied.
     * @param dest_type destination type for copying.
     * @returns %TRUE if g_value_copy() is possible with @src_type and @dest_type.
     */
    function value_type_compatible(src_type: GType, dest_type: GType): boolean;
    /**
     * Check whether g_value_transform() is able to transform values
     * of type `src_type` into values of type `dest_type`. Note that for
     * the types to be transformable, they must be compatible or a
     * transformation function must be registered.
     * @param src_type Source type.
     * @param dest_type Target type.
     * @returns %TRUE if the transformation is possible, %FALSE otherwise.
     */
    function value_type_transformable(
        src_type: GType,
        dest_type: GType
    ): boolean;
    /**
     * A callback function used by the type system to finalize those portions
     * of a derived types class structure that were setup from the corresponding
     * GBaseInitFunc() function.
     *
     * Class finalization basically works the inverse way in which class
     * initialization is performed.
     *
     * See GClassInitFunc() for a discussion of the class initialization process.
     * @callback
     * @param g_class The #GTypeClass structure to finalize
     */
    interface BaseFinalizeFunc {
        (g_class: TypeClass): void;
    }
    /**
     * A callback function used by the type system to do base initialization
     * of the class structures of derived types.
     *
     * This function is called as part of the initialization process of all derived
     * classes and should reallocate or reset all dynamic class members copied over
     * from the parent class.
     *
     * For example, class members (such as strings) that are not sufficiently
     * handled by a plain memory copy of the parent class into the derived class
     * have to be altered. See GClassInitFunc() for a discussion of the class
     * initialization process.
     * @callback
     * @param g_class The #GTypeClass structure to initialize
     */
    interface BaseInitFunc {
        (g_class: TypeClass): void;
    }
    /**
     * A function to be called to transform `from_value` to `to_value`.
     *
     * If this is the `transform_to` function of a binding, then `from_value`
     * is the `source_property` on the `source` object, and `to_value` is the
     * `target_property` on the `target` object. If this is the
     * `transform_from` function of a %G_BINDING_BIDIRECTIONAL binding,
     * then those roles are reversed.
     * @callback
     * @param binding a #GBinding
     * @param from_value the #GValue containing the value to transform
     * @param to_value the #GValue in which to store the transformed value
     * @returns %TRUE if the transformation was successful, and %FALSE   otherwise
     */
    interface BindingTransformFunc {
        (binding: Binding, from_value: any, to_value: any): boolean;
    }
    /**
     * This function is provided by the user and should produce a copy
     * of the passed in boxed structure.
     * @callback
     * @param boxed The boxed structure to be copied.
     * @returns The newly created copy of the boxed structure.
     */
    interface BoxedCopyFunc {
        (boxed: any): any;
    }
    /**
     * This function is provided by the user and should free the boxed
     * structure passed.
     * @callback
     * @param boxed The boxed structure to be freed.
     */
    interface BoxedFreeFunc {
        (boxed: any): void;
    }
    /**
     * The type used for callback functions in structure definitions and function
     * signatures.
     *
     * This doesn't mean that all callback functions must take no  parameters and
     * return void. The required signature of a callback function is determined by
     * the context in which is used (e.g. the signal to which it is connected).
     *
     * Use G_CALLBACK() to cast the callback function to a #GCallback.
     * @callback
     */
    interface Callback {
        (): void;
    }
    /**
     * A callback function used by the type system to finalize a class.
     *
     * This function is rarely needed, as dynamically allocated class resources
     * should be handled by GBaseInitFunc() and GBaseFinalizeFunc().
     *
     * Also, specification of a GClassFinalizeFunc() in the #GTypeInfo
     * structure of a static type is invalid, because classes of static types
     * will never be finalized (they are artificially kept alive when their
     * reference count drops to zero).
     * @callback
     * @param g_class The #GTypeClass structure to finalize
     * @param class_data The `class_data` member supplied via the #GTypeInfo structure
     */
    interface ClassFinalizeFunc {
        (g_class: TypeClass, class_data: any | null): void;
    }
    /**
     * A callback function used by the type system to initialize the class
     * of a specific type.
     *
     * This function should initialize all static class members.
     *
     * The initialization process of a class involves:
     *
     * - Copying common members from the parent class over to the
     *   derived class structure.
     * - Zero initialization of the remaining members not copied
     *   over from the parent class.
     * - Invocation of the GBaseInitFunc() initializers of all parent
     *   types and the class' type.
     * - Invocation of the class' GClassInitFunc() initializer.
     *
     * Since derived classes are partially initialized through a memory copy
     * of the parent class, the general rule is that GBaseInitFunc() and
     * GBaseFinalizeFunc() should take care of necessary reinitialization
     * and release of those class members that were introduced by the type
     * that specified these GBaseInitFunc()/GBaseFinalizeFunc().
     * GClassInitFunc() should only care about initializing static
     * class members, while dynamic class members (such as allocated strings
     * or reference counted resources) are better handled by a GBaseInitFunc()
     * for this type, so proper initialization of the dynamic class members
     * is performed for class initialization of derived types as well.
     *
     * An example may help to correspond the intend of the different class
     * initializers:
     *
     *
     * ```c
     * typedef struct {
     *   GObjectClass parent_class;
     *   gint         static_integer;
     *   gchar       *dynamic_string;
     * } TypeAClass;
     * static void
     * type_a_base_class_init (TypeAClass *class)
     * {
     *   class->dynamic_string = g_strdup ("some string");
     * }
     * static void
     * type_a_base_class_finalize (TypeAClass *class)
     * {
     *   g_free (class->dynamic_string);
     * }
     * static void
     * type_a_class_init (TypeAClass *class)
     * {
     *   class->static_integer = 42;
     * }
     *
     * typedef struct {
     *   TypeAClass   parent_class;
     *   gfloat       static_float;
     *   GString     *dynamic_gstring;
     * } TypeBClass;
     * static void
     * type_b_base_class_init (TypeBClass *class)
     * {
     *   class->dynamic_gstring = g_string_new ("some other string");
     * }
     * static void
     * type_b_base_class_finalize (TypeBClass *class)
     * {
     *   g_string_free (class->dynamic_gstring);
     * }
     * static void
     * type_b_class_init (TypeBClass *class)
     * {
     *   class->static_float = 3.14159265358979323846;
     * }
     * ```
     *
     *
     * Initialization of TypeBClass will first cause initialization of
     * TypeAClass (derived classes reference their parent classes, see
     * g_type_class_ref() on this).
     *
     * Initialization of TypeAClass roughly involves zero-initializing its fields,
     * then calling its GBaseInitFunc() type_a_base_class_init() to allocate
     * its dynamic members (dynamic_string), and finally calling its GClassInitFunc()
     * type_a_class_init() to initialize its static members (static_integer).
     * The first step in the initialization process of TypeBClass is then
     * a plain memory copy of the contents of TypeAClass into TypeBClass and
     * zero-initialization of the remaining fields in TypeBClass.
     * The dynamic members of TypeAClass within TypeBClass now need
     * reinitialization which is performed by calling type_a_base_class_init()
     * with an argument of TypeBClass.
     *
     * After that, the GBaseInitFunc() of TypeBClass, type_b_base_class_init()
     * is called to allocate the dynamic members of TypeBClass (dynamic_gstring),
     * and finally the GClassInitFunc() of TypeBClass, type_b_class_init(),
     * is called to complete the initialization process with the static members
     * (static_float).
     *
     * Corresponding finalization counter parts to the GBaseInitFunc() functions
     * have to be provided to release allocated resources at class finalization
     * time.
     * @callback
     * @param g_class The #GTypeClass structure to initialize.
     * @param class_data The `class_data` member supplied via the #GTypeInfo structure.
     */
    interface ClassInitFunc {
        (g_class: TypeClass, class_data: any | null): void;
    }
    /**
     * The type used for marshaller functions.
     * @callback
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value a #GValue to store the return  value. May be %NULL if the callback of `closure` doesn't return a  value.
     * @param param_values an array of  #GValues holding the arguments on which to invoke the  callback of `closure`
     * @param invocation_hint the invocation hint given as the  last argument to g_closure_invoke()
     * @param marshal_data additional data specified when  registering the marshaller, see g_closure_set_marshal() and  g_closure_set_meta_marshal()
     */
    interface ClosureMarshal {
        (
            closure: TClosure,
            return_value: any | null,
            param_values: any[],
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
    }
    /**
     * The type used for the various notification callbacks which can be registered
     * on closures.
     * @callback
     * @param data data specified when registering the notification callback
     * @param closure the #GClosure on which the notification is emitted
     */
    interface ClosureNotify {
        (data: any | null, closure: TClosure): void;
    }
    /**
     * A callback function used by the type system to initialize a new
     * instance of a type.
     *
     * This function initializes all instance members and allocates any resources
     * required by it.
     *
     * Initialization of a derived instance involves calling all its parent
     * types instance initializers, so the class member of the instance
     * is altered during its initialization to always point to the class that
     * belongs to the type the current initializer was introduced for.
     *
     * The extended members of `instance` are guaranteed to have been filled with
     * zeros before this function is called.
     * @callback
     * @param instance The instance to initialize
     * @param g_class The class of the type the instance is    created for
     */
    interface InstanceInitFunc {
        (instance: TypeInstance, g_class: TypeClass): void;
    }
    /**
     * A callback function used by the type system to finalize an interface.
     *
     * This function should destroy any internal data and release any resources
     * allocated by the corresponding GInterfaceInitFunc() function.
     * @callback
     * @param g_iface The interface structure to finalize
     * @param iface_data The `interface_data` supplied via the #GInterfaceInfo structure
     */
    interface InterfaceFinalizeFunc {
        (g_iface: TypeInterface, iface_data: any | null): void;
    }
    /**
     * A callback function used by the type system to initialize a new
     * interface.
     *
     * This function should initialize all internal data and* allocate any
     * resources required by the interface.
     *
     * The members of `iface_data` are guaranteed to have been filled with
     * zeros before this function is called.
     * @callback
     * @param g_iface The interface structure to initialize
     * @param iface_data The `interface_data` supplied via the #GInterfaceInfo structure
     */
    interface InterfaceInitFunc {
        (g_iface: TypeInterface, iface_data: any | null): void;
    }
    /**
     * The type of the `finalize` function of #GObjectClass.
     * @callback
     * @param object the #GObject being finalized
     */
    interface ObjectFinalizeFunc {
        (object: Object): void;
    }
    /**
     * The type of the `get_property` function of #GObjectClass.
     * @callback
     * @param object a #GObject
     * @param property_id the numeric id under which the property was registered with  g_object_class_install_property().
     * @param value a #GValue to return the property value in
     * @param pspec the #GParamSpec describing the property
     */
    interface ObjectGetPropertyFunc {
        (
            object: Object,
            property_id: number,
            value: any,
            pspec: ParamSpec
        ): void;
    }
    /**
     * The type of the `set_property` function of #GObjectClass.
     * @callback
     * @param object a #GObject
     * @param property_id the numeric id under which the property was registered with  g_object_class_install_property().
     * @param value the new value for the property
     * @param pspec the #GParamSpec describing the property
     */
    interface ObjectSetPropertyFunc {
        (
            object: Object,
            property_id: number,
            value: any,
            pspec: ParamSpec
        ): void;
    }
    /**
     * The signal accumulator is a special callback function that can be used
     * to collect return values of the various callbacks that are called
     * during a signal emission.
     *
     * The signal accumulator is specified at signal creation time, if it is
     * left %NULL, no accumulation of callback return values is performed.
     * The return value of signal emissions is then the value returned by the
     * last callback.
     * @callback
     * @param ihint Signal invocation hint, see #GSignalInvocationHint.
     * @param return_accu Accumulator to collect callback return values in, this  is the return value of the current signal emission.
     * @param handler_return A #GValue holding the return value of the signal handler.
     * @param data Callback data that was specified when creating the signal.
     * @returns The accumulator function returns whether the signal emission  should be aborted. Returning %TRUE will continue with  the signal emission. Returning %FALSE will abort the current emission.  Since 2.62, returning %FALSE will skip to the CLEANUP stage. In this case,  emission will occur as normal in the CLEANUP stage and the handler's  return value will be accumulated.
     */
    interface SignalAccumulator {
        (
            ihint: SignalInvocationHint,
            return_accu: any,
            handler_return: any,
            data: any | null
        ): boolean;
    }
    /**
     * A simple function pointer to get invoked when the signal is emitted.
     *
     * Emission hooks allow you to tie a hook to the signal type, so that it will
     * trap all emissions of that signal, from any object.
     *
     * You may not attach these to signals created with the %G_SIGNAL_NO_HOOKS flag.
     * @callback
     * @param ihint Signal invocation hint, see #GSignalInvocationHint.
     * @param param_values the instance on which  the signal was emitted, followed by the parameters of the emission.
     * @param data user data associated with the hook.
     * @returns whether it wants to stay connected. If it returns %FALSE, the signal  hook is disconnected (and destroyed).
     */
    interface SignalEmissionHook {
        (
            ihint: SignalInvocationHint,
            param_values: any[],
            data: any | null
        ): boolean;
    }
    /**
     * A callback function used for notification when the state
     * of a toggle reference changes.
     *
     * See also: g_object_add_toggle_ref()
     * @callback
     * @param data Callback data passed to g_object_add_toggle_ref()
     * @param object The object on which g_object_add_toggle_ref() was called.
     * @param is_last_ref %TRUE if the toggle reference is now the  last reference to the object. %FALSE if the toggle  reference was the last reference and there are now other  references.
     */
    interface ToggleNotify {
        (data: any | null, object: Object, is_last_ref: boolean): void;
    }
    /**
     * A callback function which is called when the reference count of a class
     * drops to zero.
     *
     * It may use g_type_class_ref() to prevent the class from being freed. You
     * should not call g_type_class_unref() from a #GTypeClassCacheFunc function
     * to prevent infinite recursion, use g_type_class_unref_uncached() instead.
     *
     * The functions have to check the class id passed in to figure
     * whether they actually want to cache the class of this type, since all
     * classes are routed through the same #GTypeClassCacheFunc chain.
     * @callback
     * @param cache_data data that was given to the g_type_add_class_cache_func() call
     * @param g_class The #GTypeClass structure which is    unreferenced
     * @returns %TRUE to stop further #GTypeClassCacheFuncs from being  called, %FALSE to continue
     */
    interface TypeClassCacheFunc {
        (cache_data: any | null, g_class: TypeClass): boolean;
    }
    /**
     * A callback called after an interface vtable is initialized.
     *
     * See g_type_add_interface_check().
     * @callback
     * @param check_data data passed to g_type_add_interface_check()
     * @param g_iface the interface that has been    initialized
     */
    interface TypeInterfaceCheckFunc {
        (check_data: any | null, g_iface: TypeInterface): void;
    }
    /**
     * The type of the `complete_interface_info` function of #GTypePluginClass.
     * @callback
     * @param plugin the #GTypePlugin
     * @param instance_type the #GType of an instantiatable type to which the interface  is added
     * @param interface_type the #GType of the interface whose info is completed
     * @param info the #GInterfaceInfo to fill in
     */
    interface TypePluginCompleteInterfaceInfo {
        (
            plugin: TypePlugin,
            instance_type: GType,
            interface_type: GType,
            info: InterfaceInfo
        ): void;
    }
    /**
     * The type of the `complete_type_info` function of #GTypePluginClass.
     * @callback
     * @param plugin the #GTypePlugin
     * @param g_type the #GType whose info is completed
     * @param info the #GTypeInfo struct to fill in
     * @param value_table the #GTypeValueTable to fill in
     */
    interface TypePluginCompleteTypeInfo {
        (
            plugin: TypePlugin,
            g_type: GType,
            info: TypeInfo,
            value_table: TypeValueTable
        ): void;
    }
    /**
     * The type of the `unuse_plugin` function of #GTypePluginClass.
     * @callback
     * @param plugin the #GTypePlugin whose use count should be decreased
     */
    interface TypePluginUnuse {
        (plugin: TypePlugin): void;
    }
    /**
     * The type of the `use_plugin` function of #GTypePluginClass, which gets called
     * to increase the use count of `plugin`.
     * @callback
     * @param plugin the #GTypePlugin whose use count should be increased
     */
    interface TypePluginUse {
        (plugin: TypePlugin): void;
    }
    /**
     * This function is responsible for converting the values collected from
     * a variadic argument list into contents suitable for storage in a #GValue.
     *
     * This function should setup `value` similar to #GTypeValueInitFunc; e.g.
     * for a string value that does not allow `NULL` pointers, it needs to either
     * emit an error, or do an implicit conversion by storing an empty string.
     *
     * The `value` passed in to this function has a zero-filled data array, so
     * just like for #GTypeValueInitFunc it is guaranteed to not contain any old
     * contents that might need freeing.
     *
     * The `n_collect_values` argument is the string length of the `collect_format`
     * field of #GTypeValueTable, and `collect_values` is an array of #GTypeCValue
     * with length of `n_collect_values,` containing the collected values according
     * to `collect_format`.
     *
     * The `collect_flags` argument provided as a hint by the caller. It may
     * contain the flag %G_VALUE_NOCOPY_CONTENTS indicating that the collected
     * value contents may be considered ‘static’ for the duration of the `value`
     * lifetime. Thus an extra copy of the contents stored in `collect_values` is
     * not required for assignment to `value`.
     *
     * For our above string example, we continue with:
     *
     *
     * ```c
     * if (!collect_values[0].v_pointer)
     *   value->data[0].v_pointer = g_strdup ("");
     * else if (collect_flags & G_VALUE_NOCOPY_CONTENTS)
     *   {
     *     value->data[0].v_pointer = collect_values[0].v_pointer;
     *     // keep a flag for the value_free() implementation to not free this string
     *     value->data[1].v_uint = G_VALUE_NOCOPY_CONTENTS;
     *   }
     * else
     *   value->data[0].v_pointer = g_strdup (collect_values[0].v_pointer);
     * return NULL;
     * ```
     *
     *
     * It should be noted, that it is generally a bad idea to follow the
     * %G_VALUE_NOCOPY_CONTENTS hint for reference counted types. Due to
     * reentrancy requirements and reference count assertions performed
     * by the signal emission code, reference counts should always be
     * incremented for reference counted contents stored in the `value->data`
     * array. To deviate from our string example for a moment, and taking
     * a look at an exemplary implementation for `GTypeValueTable.collect_value()`
     * of `GObject`:
     *
     *
     * ```c
     * GObject *object = G_OBJECT (collect_values[0].v_pointer);
     * g_return_val_if_fail (object != NULL,
     *    g_strdup_printf ("Object %p passed as invalid NULL pointer", object));
     * // never honour G_VALUE_NOCOPY_CONTENTS for ref-counted types
     * value->data[0].v_pointer = g_object_ref (object);
     * return NULL;
     * ```
     *
     *
     * The reference count for valid objects is always incremented, regardless
     * of `collect_flags`. For invalid objects, the example returns a newly
     * allocated string without altering `value`.
     *
     * Upon success, `collect_value()` needs to return `NULL`. If, however,
     * an error condition occurred, `collect_value()` should return a newly
     * allocated string containing an error diagnostic.
     *
     * The calling code makes no assumptions about the `value` contents being
     * valid upon error returns, `value` is simply thrown away without further
     * freeing. As such, it is a good idea to not allocate `GValue` contents
     * prior to returning an error; however, `collect_values()` is not obliged
     * to return a correctly setup `value` for error returns, simply because
     * any non-`NULL` return is considered a fatal programming error, and
     * further program behaviour is undefined.
     * @callback
     * @param value the value to initialize
     * @param collect_values the collected values
     * @param collect_flags optional flags
     * @returns `NULL` on success, otherwise a   newly allocated error string on failure
     */
    interface TypeValueCollectFunc {
        (value: any, collect_values: TypeCValue[], collect_flags: number):
            | string
            | null;
    }
    /**
     * Copies the content of a #GValue into another.
     *
     * The `dest_value` is a #GValue with zero-filled data section and `src_value`
     * is a properly initialized #GValue of same type, or derived type.
     *
     * The purpose of this function is to copy the contents of `src_value`
     * into `dest_value` in a way, that even after `src_value` has been freed, the
     * contents of `dest_value` remain valid. String type example:
     *
     *
     * ```c
     * dest_value->data[0].v_pointer = g_strdup (src_value->data[0].v_pointer);
     * ```
     *
     * @callback
     * @param src_value the value to copy
     */
    interface TypeValueCopyFunc {
        (src_value: any): void;
    }
    /**
     * Frees any old contents that might be left in the `value->data` array of
     * the given value.
     *
     * No resources may remain allocated through the #GValue contents after this
     * function returns. E.g. for our above string type:
     *
     *
     * ```c
     * // only free strings without a specific flag for static storage
     * if (!(value->data[1].v_uint & G_VALUE_NOCOPY_CONTENTS))
     *   g_free (value->data[0].v_pointer);
     * ```
     *
     * @callback
     * @param value the value to free
     */
    interface TypeValueFreeFunc {
        (value: any): void;
    }
    /**
     * Initializes the value contents by setting the fields of the `value->data`
     * array.
     *
     * The data array of the #GValue passed into this function was zero-filled
     * with `memset()`, so no care has to be taken to free any old contents.
     * For example, in the case of a string value that may never be %NULL, the
     * implementation might look like:
     *
     *
     * ```c
     * value->data[0].v_pointer = g_strdup ("");
     * ```
     *
     * @callback
     * @param value the value to initialize
     */
    interface TypeValueInitFunc {
        (value: any): void;
    }
    /**
     * This function is responsible for storing the `value`
     * contents into arguments passed through a variadic argument list which
     * got collected into `collect_values` according to `lcopy_format`.
     *
     * The `n_collect_values` argument equals the string length of
     * `lcopy_format`, and `collect_flags` may contain %G_VALUE_NOCOPY_CONTENTS.
     *
     * In contrast to #GTypeValueCollectFunc, this function is obliged to always
     * properly support %G_VALUE_NOCOPY_CONTENTS.
     *
     * Similar to #GTypeValueCollectFunc the function may prematurely abort by
     * returning a newly allocated string describing an error condition. To
     * complete the string example:
     *
     *
     * ```c
     * gchar **string_p = collect_values[0].v_pointer;
     * g_return_val_if_fail (string_p != NULL,
     *   g_strdup ("string location passed as NULL"));
     *
     * if (collect_flags & G_VALUE_NOCOPY_CONTENTS)
     *   *string_p = value->data[0].v_pointer;
     * else
     *   *string_p = g_strdup (value->data[0].v_pointer);
     * ```
     *
     *
     * And an illustrative version of this function for reference-counted
     * types:
     *
     *
     * ```c
     * GObject **object_p = collect_values[0].v_pointer;
     * g_return_val_if_fail (object_p != NULL,
     *   g_strdup ("object location passed as NULL"));
     *
     * if (value->data[0].v_pointer == NULL)
     *   *object_p = NULL;
     * else if (collect_flags & G_VALUE_NOCOPY_CONTENTS) // always honour
     *   *object_p = value->data[0].v_pointer;
     * else
     *   *object_p = g_object_ref (value->data[0].v_pointer);
     *
     * return NULL;
     * ```
     *
     * @callback
     * @param value the value to lcopy
     * @param collect_values the collected   locations for storage
     * @param collect_flags optional flags
     * @returns `NULL` on success, otherwise   a newly allocated error string on failure
     */
    interface TypeValueLCopyFunc {
        (value: any, collect_values: TypeCValue[], collect_flags: number):
            | string
            | null;
    }
    /**
     * If the value contents fit into a pointer, such as objects or strings,
     * return this pointer, so the caller can peek at the current contents.
     *
     * To extend on our above string example:
     *
     *
     * ```c
     * return value->data[0].v_pointer;
     * ```
     *
     * @callback
     * @param value the value to peek
     * @returns a pointer to the value contents
     */
    interface TypeValuePeekPointerFunc {
        (value: any): any | null;
    }
    /**
     * The type of value transformation functions which can be registered with
     * g_value_register_transform_func().
     *
     * `dest_value` will be initialized to the correct destination type.
     * @callback
     * @param src_value Source value.
     * @param dest_value Target value.
     */
    interface ValueTransform {
        (src_value: any, dest_value: any): void;
    }
    /**
     * A #GWeakNotify function can be added to an object as a callback that gets
     * triggered when the object is finalized.
     *
     * Since the object is already being disposed when the #GWeakNotify is called,
     * there's not much you could do with the object, apart from e.g. using its
     * address as hash-index or the like.
     *
     * In particular, this means it’s invalid to call g_object_ref(),
     * g_weak_ref_init(), g_weak_ref_set(), g_object_add_toggle_ref(),
     * g_object_weak_ref(), g_object_add_weak_pointer() or any function which calls
     * them on the object from this callback.
     * @callback
     * @param data data that was provided when the weak reference was established
     * @param where_the_object_was the object being disposed
     */
    interface WeakNotify {
        (data: any | null, where_the_object_was: Object): void;
    }
    module TypePlugin {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {}
    }

    interface TypePlugin {
        // Owm methods of GObject-2.0.GObject.TypePlugin

        /**
         * Calls the `complete_interface_info` function from the
         * #GTypePluginClass of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         * @param instance_type the #GType of an instantiatable type to which the interface  is added
         * @param interface_type the #GType of the interface whose info is completed
         * @param info the #GInterfaceInfo to fill in
         */
        complete_interface_info(
            instance_type: GType,
            interface_type: GType,
            info: InterfaceInfo
        ): void;
        /**
         * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         * @param g_type the #GType whose info is completed
         * @param info the #GTypeInfo struct to fill in
         * @param value_table the #GTypeValueTable to fill in
         */
        complete_type_info(
            g_type: GType,
            info: TypeInfo,
            value_table: TypeValueTable
        ): void;
        /**
         * Calls the `unuse_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        unuse(): void;
        /**
         * Calls the `use_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;

        // Class property signals of GObject-2.0.GObject.TypePlugin

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * An interface that handles the lifecycle of dynamically loaded types.
     *
     * The GObject type system supports dynamic loading of types.
     * It goes as follows:
     *
     * 1. The type is initially introduced (usually upon loading the module
     *    the first time, or by your main application that knows what modules
     *    introduces what types), like this:
     *
     * ```c
     *    new_type_id = g_type_register_dynamic (parent_type_id,
     *                                           "TypeName",
     *                                           new_type_plugin,
     *                                           type_flags);
     *    ```
     *
     *    where `new_type_plugin` is an implementation of the
     *    #GTypePlugin interface.
     *
     * 2. The type's implementation is referenced, e.g. through
     *    g_type_class_ref() or through g_type_create_instance() (this is
     *    being called by g_object_new()) or through one of the above done on
     *    a type derived from `new_type_id`.
     *
     * 3. This causes the type system to load the type's implementation by
     *    calling g_type_plugin_use() and g_type_plugin_complete_type_info()
     *    on `new_type_plugin`.
     *
     * 4. At some point the type's implementation isn't required anymore,
     *    e.g. after g_type_class_unref() or g_type_free_instance() (called
     *    when the reference count of an instance drops to zero).
     *
     * 5. This causes the type system to throw away the information retrieved
     *    from g_type_plugin_complete_type_info() and then it calls
     *    g_type_plugin_unuse() on `new_type_plugin`.
     *
     * 6. Things may repeat from the second step.
     *
     * So basically, you need to implement a #GTypePlugin type that
     * carries a use_count, once use_count goes from zero to one, you need
     * to load the implementation to successfully handle the upcoming
     * g_type_plugin_complete_type_info() call. Later, maybe after
     * succeeding use/unuse calls, once use_count drops to zero, you can
     * unload the implementation again. The type system makes sure to call
     * g_type_plugin_use() and g_type_plugin_complete_type_info() again
     * when the type is needed again.
     *
     * #GTypeModule is an implementation of #GTypePlugin that already
     * implements most of this except for the actual module loading and
     * unloading. It even handles multiple registered types per module.
     * @interface
     */
    class TypePlugin extends Object {
        // Own properties of GObject-2.0.GObject.TypePlugin

        static name: string;
        static $gtype: GType<TypePlugin>;

        // Constructors of GObject-2.0.GObject.TypePlugin

        constructor(config?: TypePlugin.ConstructorProperties);
        _init(config?: TypePlugin.ConstructorProperties): void;
    }

    // A few things here are inspired by gi.ts
    // See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/lib/src/generators/dts/gobject.ts
    // Copyright Evan Welsh

    export type GType<T = unknown> = {
        __type__(arg: never): T;
        name: string;
    };

    // Extra interfaces used to help define GObject classes in js; these
    // aren't part of gi.
    export interface SignalDefinition {
        flags?: SignalFlags;
        accumulator: number;
        return_type?: GType;
        param_types?: GType[];
    }

    export interface MetaInfo<Props, Interfaces, Sigs> {
        GTypeName?: string;
        GTypeFlags?: TypeFlags;
        Properties?: Props;
        Signals?: Sigs;
        Implements?: Interfaces;
        CssName?: string;
        Template?: Uint8Array | GLib.Bytes | string;
        Children?: string[];
        InternalChildren?: string[];
    }

    /** Interface of GObject Interface should be implemented by all GObject interfaces */
    export class Interface<T = unknown> {
        static _classInit: (cls: any) => any;
        __name__: string;
        _construct: (params: any, ...otherArgs: any[]) => any;
        _init: (params: any) => void;
        $gtype?: GType<T>;
    }

    /**
     * Use this to signify a function that must be overridden in an
     * implementation of the interface.
     */
    export class NotImplementedError extends Error {
        get name(): 'NotImplementedError';
    }

    // Expose GObject static properties for ES6 classes

    export const GTypeName: unique symbol;
    export const requires: unique symbol;
    export const interfaces: unique symbol;
    export const properties: unique symbol;
    export const signals: unique symbol;

    export let gtypeNameBasedOnJSPath: boolean;

    export let TYPE_BOOLEAN: GType<boolean>;
    export let Boolean: BooleanConstructor;

    export let TYPE_ENUM: GType<number>;
    export let TYPE_FLAGS: GType<number>;

    export let TYPE_DOUBLE: GType<number>;
    export let Double: NumberConstructor;

    export let TYPE_STRING: GType<string>;
    export let String: StringConstructor;

    export let TYPE_NONE: GType<undefined>;
    export let TYPE_POINTER: GType<undefined>;
    export let TYPE_BOXED: GType<unknown>;
    export let TYPE_PARAM: GType<unknown>;
    export let TYPE_INTERFACE: GType<unknown>;
    export let TYPE_OBJECT: GType<object>;
    export let TYPE_VARIANT: GType<GLib.Variant>;
    export let TYPE_INT: GType<number>;
    export let TYPE_UINT: GType<number>;
    export let TYPE_INT64: GType<number>;
    export let TYPE_UINT64: GType<number>;

    // fake enum for signal accumulators, keep in sync with gi/object.c
    export enum AccumulatorType {
        NONE = 0,
        FIRST_WINS = 1,
        TRUE_HANDLED = 2,
    }

    // A simple workaround if you have a class with .connect, .disconnect or .emit
    // methods (such as Gio.Socket.connect or NMClient.Device.disconnect)
    // The original g_signal_* functions are not introspectable anyway, because
    // we need our own handling of signal argument marshalling
    export function signal_connect(
        object: Object,
        name: string,
        handler: (...args: any[]) => any
    ): number;
    export function signal_connect_after(
        object: Object,
        name: string,
        handler: (...args: any[]) => any
    ): number;
    export function signal_emit_by_name(
        object: Object,
        ...nameAndArgs: any[]
    ): void;

    /**
     * Finds the first signal handler that matches certain selection criteria.
     * The criteria are passed as properties of a match object.
     * The match object has to be non-empty for successful matches.
     * If no handler was found, a falsy value is returned.
     *
     * @param instance the instance owning the signal handler to be found.
     * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
     * @param match.signalId signal the handler has to be connected to.
     * @param match.detail signal detail the handler has to be connected to.
     * @param match.func the callback function the handler will invoke.
     * @returns A valid non-0 signal handler ID for a successful match.
     */
    export function signal_handler_find(
        instance: Object,
        match: {
            signalId: string;
            detail: string;
            func: (...args: any[]) => any;
        }
    ): number | bigint | object | null;

    /**
     * Blocks all handlers on an instance that match certain selection criteria.
     * The criteria are passed as properties of a match object.
     * The match object has to have at least `func` for successful matches.
     * If no handlers were found, 0 is returned, the number of blocked handlers
     * otherwise.
     *
     * @param instance the instance owning the signal handler to be found.
     * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
     * @param match.signalId signal the handler has to be connected to.
     * @param match.detail signal detail the handler has to be connected to.
     * @param match.func the callback function the handler will invoke.
     * @returns The number of handlers that matched.
     */
    export function signal_handlers_block_matched(
        instance: Object,
        match: {
            signalId: string;
            detail: string;
            func: (...args: any[]) => any;
        }
    ): number;

    /**
     * Disconnects all handlers on an instance that match certain selection
     * criteria.
     * The criteria are passed as properties of a match object.
     * The match object has to have at least `func` for successful matches.
     * If no handlers were found, 0 is returned, the number of disconnected
     * handlers otherwise.
     *
     * @param instance the instance owning the signal handler
     *   to be found.
     * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
     * @param match.signalId signal the handler has to be connected to.
     * @param match.detail signal detail the handler has to be connected to.
     * @param match.func the callback function the handler will invoke.
     * @returns The number of handlers that matched.
     */
    export function signal_handlers_unblock_matched(
        instance: Object,
        match: {
            signalId: string;
            detail: string;
            func: (...args: any[]) => any;
        }
    ): number;

    /**
     * Disconnects all handlers on an instance that match certain selection
     * criteria.
     * The criteria are passed as properties of a match object.
     * The match object has to have at least `func` for successful matches.
     * If no handlers were found, 0 is returned, the number of disconnected
     * handlers otherwise.
     *
     * @param instance the instance owning the signal handler
     *   to be found.
     * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
     * @param match.signalId signal the handler has to be connected to.
     * @param match.detail signal detail the handler has to be connected to.
     * @param match.func the callback function the handler will invoke.
     * @returns The number of handlers that matched.
     */
    export function signal_handlers_disconnect_matched(
        instance: Object,
        match: {
            signalId: string;
            detail: string;
            func: (...args: any[]) => any;
        }
    ): number;

    // Also match the macros used in C APIs, even though they're not introspected

    /**
     * Blocks all handlers on an instance that match `func`.
     *
     * @param instance the instance to block handlers from.
     * @param func the callback function the handler will invoke.
     * @returns The number of handlers that matched.
     */
    export function signal_handlers_block_by_func(
        instance: Object,
        func: (...args: any[]) => any
    ): number;

    /**
     * Unblocks all handlers on an instance that match `func`.
     *
     * @function
     * @param instance the instance to unblock handlers from.
     * @param func the callback function the handler will invoke.
     * @returns The number of handlers that matched.
     */
    export function signal_handlers_unblock_by_func(
        instance: Object,
        func: (...args: any[]) => any
    ): number;

    /**
     * Disconnects all handlers on an instance that match `func`.
     *
     * @param instance the instance to remove handlers from.
     * @param func the callback function the handler will invoke.
     * @returns The number of handlers that matched.
     */
    export function signal_handlers_disconnect_by_func(
        instance: Object,
        func: (...args: any[]) => any
    ): number;
    export function signal_handlers_disconnect_by_data(): void;

    export type Property<K extends ParamSpec> = K extends ParamSpecBoolean
        ? boolean
        : K extends
              | ParamSpecDouble
              | ParamSpecInt
              | ParamSpecUInt
              | ParamSpecFloat
              | ParamSpecLong
        ? number
        : K extends ParamSpecInt64 | ParamSpecUInt64 | ParamSpecULong
        ? number
        : K extends ParamSpecFlags
        ? number
        : K extends ParamSpecString | ParamSpecUnichar
        ? string
        : K extends ParamSpecValueArray
        ? any[]
        : K extends ParamSpecObject // TODO?: <infer T>
        ? ParamSpecObject // T
        : K extends ParamSpecEnum // TODO?: <infer T><infer E>
        ? ParamSpecEnum // E
        : K extends ParamSpecBoxed // TODO?: <infer T><infer B>
        ? ParamSpecBoxed //B
        : K extends ParamSpecVariant
        ? GLib.Variant
        : any;

    // TODO: What about the generated class Closure
    export type TClosure<R = any, P = any> = (...args: P[]) => R;

    // This should be replaces by a class of GObject.Object as soon as once we have implemented inheritance
    export class AnyClass {}

    export function registerClass<
        T extends AnyClass,
        Props extends { [key: string]: ParamSpec },
        Interfaces extends { $gtype: GType }[],
        Sigs extends {
            [key: string]: {
                param_types?: readonly GType[];
                [key: string]: any;
            };
        }
    >(options: MetaInfo<Props, Interfaces, Sigs>, cls: T): T;

    export function registerClass<T extends AnyClass>(cls: T): T;

    module Binding {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {
            // Own constructor properties of GObject-2.0.GObject.Binding

            /**
             * Flags to be used to control the #GBinding
             */
            flags?: BindingFlags | null;
            /**
             * The #GObject that should be used as the source of the binding
             */
            source?: Object | null;
            /**
             * The name of the property of #GBinding:source that should be used
             * as the source of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            source_property?: string | null;
            /**
             * The #GObject that should be used as the target of the binding
             */
            target?: Object | null;
            /**
             * The name of the property of #GBinding:target that should be used
             * as the target of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            target_property?: string | null;
        }
    }

    interface Binding {
        // Own properties of GObject-2.0.GObject.Binding

        /**
         * Flags to be used to control the #GBinding
         */
        readonly flags: BindingFlags;
        /**
         * The #GObject that should be used as the source of the binding
         */
        readonly source: Object;
        /**
         * The name of the property of #GBinding:source that should be used
         * as the source of the binding.
         *
         * This should be in [canonical form][canonical-parameter-names] to get the
         * best performance.
         */
        readonly source_property: string | null;
        /**
         * The #GObject that should be used as the target of the binding
         */
        readonly target: Object;
        /**
         * The name of the property of #GBinding:target that should be used
         * as the target of the binding.
         *
         * This should be in [canonical form][canonical-parameter-names] to get the
         * best performance.
         */
        readonly target_property: string | null;

        // Owm methods of GObject-2.0.GObject.Binding

        /**
         * Retrieves the #GObject instance used as the source of the binding.
         *
         * A #GBinding can outlive the source #GObject as the binding does not hold a
         * strong reference to the source. If the source is destroyed before the
         * binding then this function will return %NULL.
         * @returns the source #GObject, or %NULL if the     source does not exist any more.
         */
        dup_source(): Object | null;
        /**
         * Retrieves the #GObject instance used as the target of the binding.
         *
         * A #GBinding can outlive the target #GObject as the binding does not hold a
         * strong reference to the target. If the target is destroyed before the
         * binding then this function will return %NULL.
         * @returns the target #GObject, or %NULL if the     target does not exist any more.
         */
        dup_target(): Object | null;
        /**
         * Retrieves the flags passed when constructing the #GBinding.
         * @returns the #GBindingFlags used by the #GBinding
         */
        get_flags(): BindingFlags;
        /**
         * Retrieves the #GObject instance used as the source of the binding.
         *
         * A #GBinding can outlive the source #GObject as the binding does not hold a
         * strong reference to the source. If the source is destroyed before the
         * binding then this function will return %NULL.
         *
         * Use g_binding_dup_source() if the source or binding are used from different
         * threads as otherwise the pointer returned from this function might become
         * invalid if the source is finalized from another thread in the meantime.
         * @returns the source #GObject, or %NULL if the     source does not exist any more.
         */
        get_source(): Object | null;
        /**
         * Retrieves the name of the property of #GBinding:source used as the source
         * of the binding.
         * @returns the name of the source property
         */
        get_source_property(): string | null;
        /**
         * Retrieves the #GObject instance used as the target of the binding.
         *
         * A #GBinding can outlive the target #GObject as the binding does not hold a
         * strong reference to the target. If the target is destroyed before the
         * binding then this function will return %NULL.
         *
         * Use g_binding_dup_target() if the target or binding are used from different
         * threads as otherwise the pointer returned from this function might become
         * invalid if the target is finalized from another thread in the meantime.
         * @returns the target #GObject, or %NULL if the     target does not exist any more.
         */
        get_target(): Object | null;
        /**
         * Retrieves the name of the property of #GBinding:target used as the target
         * of the binding.
         * @returns the name of the target property
         */
        get_target_property(): string | null;
        /**
         * Explicitly releases the binding between the source and the target
         * property expressed by `binding`.
         *
         * This function will release the reference that is being held on
         * the `binding` instance if the binding is still bound; if you want to hold on
         * to the #GBinding instance after calling g_binding_unbind(), you will need
         * to hold a reference to it.
         *
         * Note however that this function does not take ownership of `binding,` it
         * only unrefs the reference that was initially created by
         * g_object_bind_property() and is owned by the binding.
         */
        unbind(): void;

        // Class property signals of GObject-2.0.GObject.Binding

        connect(
            sigName: 'notify::flags',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::flags',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        emit(sigName: 'notify::flags', ...args: any[]): void;
        connect(
            sigName: 'notify::source',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::source',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        emit(sigName: 'notify::source', ...args: any[]): void;
        connect(
            sigName: 'notify::source-property',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::source-property',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        emit(sigName: 'notify::source-property', ...args: any[]): void;
        connect(
            sigName: 'notify::target',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::target',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        emit(sigName: 'notify::target', ...args: any[]): void;
        connect(
            sigName: 'notify::target-property',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::target-property',
            callback: ($obj: Binding, pspec: ParamSpec) => void
        ): number;
        emit(sigName: 'notify::target-property', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * #GBinding is the representation of a binding between a property on a
     * #GObject instance (or source) and another property on another #GObject
     * instance (or target).
     *
     * Whenever the source property changes, the same value is applied to the
     * target property; for instance, the following binding:
     *
     *
     * ```c
     *   g_object_bind_property (object1, "property-a",
     *                           object2, "property-b",
     *                           G_BINDING_DEFAULT);
     * ```
     *
     *
     * will cause the property named "property-b" of `object2` to be updated
     * every time g_object_set() or the specific accessor changes the value of
     * the property "property-a" of `object1`.
     *
     * It is possible to create a bidirectional binding between two properties
     * of two #GObject instances, so that if either property changes, the
     * other is updated as well, for instance:
     *
     *
     * ```c
     *   g_object_bind_property (object1, "property-a",
     *                           object2, "property-b",
     *                           G_BINDING_BIDIRECTIONAL);
     * ```
     *
     *
     * will keep the two properties in sync.
     *
     * It is also possible to set a custom transformation function (in both
     * directions, in case of a bidirectional binding) to apply a custom
     * transformation from the source value to the target value before
     * applying it; for instance, the following binding:
     *
     *
     * ```c
     *   g_object_bind_property_full (adjustment1, "value",
     *                                adjustment2, "value",
     *                                G_BINDING_BIDIRECTIONAL,
     *                                celsius_to_fahrenheit,
     *                                fahrenheit_to_celsius,
     *                                NULL, NULL);
     * ```
     *
     *
     * will keep the "value" property of the two adjustments in sync; the
     * `celsius_to_fahrenheit` function will be called whenever the "value"
     * property of `adjustment1` changes and will transform the current value
     * of the property before applying it to the "value" property of `adjustment2`.
     *
     * Vice versa, the `fahrenheit_to_celsius` function will be called whenever
     * the "value" property of `adjustment2` changes, and will transform the
     * current value of the property before applying it to the "value" property
     * of `adjustment1`.
     *
     * Note that #GBinding does not resolve cycles by itself; a cycle like
     *
     *
     * ```
     *   object1:propertyA -> object2:propertyB
     *   object2:propertyB -> object3:propertyC
     *   object3:propertyC -> object1:propertyA
     * ```
     *
     *
     * might lead to an infinite loop. The loop, in this particular case,
     * can be avoided if the objects emit the #GObject::notify signal only
     * if the value has effectively been changed. A binding is implemented
     * using the #GObject::notify signal, so it is susceptible to all the
     * various ways of blocking a signal emission, like g_signal_stop_emission()
     * or g_signal_handler_block().
     *
     * A binding will be severed, and the resources it allocates freed, whenever
     * either one of the #GObject instances it refers to are finalized, or when
     * the #GBinding instance loses its last reference.
     *
     * Bindings for languages with garbage collection can use
     * g_binding_unbind() to explicitly release a binding between the source
     * and target properties, instead of relying on the last reference on the
     * binding, source, and target instances to drop.
     *
     * #GBinding is available since GObject 2.26
     * @class
     */
    class Binding extends Object {
        // Own properties of GObject-2.0.GObject.Binding

        static name: string;
        static $gtype: GType<Binding>;

        // Constructors of GObject-2.0.GObject.Binding

        constructor(config?: Binding.ConstructorProperties);
        _init(config?: Binding.ConstructorProperties): void;
    }

    module BindingGroup {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {
            // Own constructor properties of GObject-2.0.GObject.BindingGroup

            /**
             * The source object used for binding properties.
             */
            source?: Object | null;
        }
    }

    interface BindingGroup {
        // Own properties of GObject-2.0.GObject.BindingGroup

        /**
         * The source object used for binding properties.
         */
        source: Object;

        // Owm methods of GObject-2.0.GObject.BindingGroup

        /**
         * Creates a binding between `source_property` on the source object
         * and `target_property` on `target`. Whenever the `source_property`
         * is changed the `target_property` is updated using the same value.
         * The binding flag %G_BINDING_SYNC_CREATE is automatically specified.
         *
         * See g_object_bind_property() for more information.
         * @param source_property the property on the source to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags the flags used to create the #GBinding
         */
        bind(
            source_property: string | null,
            target: Object,
            target_property: string | null,
            flags: BindingFlags
        ): void;
        /**
         * Creates a binding between `source_property` on the source object and
         * `target_property` on `target,` allowing you to set the transformation
         * functions to be used by the binding. The binding flag
         * %G_BINDING_SYNC_CREATE is automatically specified.
         *
         * This function is the language bindings friendly version of
         * g_binding_group_bind_property_full(), using #GClosures
         * instead of function pointers.
         *
         * See g_object_bind_property_with_closures() for more information.
         * @param source_property the property on the source to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags the flags used to create the #GBinding
         * @param transform_to a #GClosure wrapping the     transformation function from the source object to the `target,`     or %NULL to use the default
         * @param transform_from a #GClosure wrapping the     transformation function from the `target` to the source object,     or %NULL to use the default
         */
        bind_full(
            source_property: string | null,
            target: Object,
            target_property: string | null,
            flags: BindingFlags,
            transform_to: TClosure | null,
            transform_from: TClosure | null
        ): void;
        /**
         * Gets the source object used for binding properties.
         * @returns a #GObject or %NULL.
         */
        dup_source(): Object | null;
        /**
         * Sets `source` as the source object used for creating property
         * bindings. If there is already a source object all bindings from it
         * will be removed.
         *
         * Note that all properties that have been bound must exist on `source`.
         * @param source the source #GObject,   or %NULL to clear it
         */
        set_source(source: Object | null): void;

        // Class property signals of GObject-2.0.GObject.BindingGroup

        connect(
            sigName: 'notify::source',
            callback: ($obj: BindingGroup, pspec: ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::source',
            callback: ($obj: BindingGroup, pspec: ParamSpec) => void
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
     * The #GBindingGroup can be used to bind multiple properties
     * from an object collectively.
     *
     * Use the various methods to bind properties from a single source
     * object to multiple destination objects. Properties can be bound
     * bidirectionally and are connected when the source object is set
     * with g_binding_group_set_source().
     * @class
     */
    class BindingGroup extends Object {
        // Own properties of GObject-2.0.GObject.BindingGroup

        static name: string;
        static $gtype: GType<BindingGroup>;

        // Constructors of GObject-2.0.GObject.BindingGroup

        constructor(config?: BindingGroup.ConstructorProperties);
        /**
         * Creates a new #GBindingGroup.
         * @constructor
         * @returns a new #GBindingGroup
         */
        constructor();
        /**
         * Creates a new #GBindingGroup.
         * @constructor
         * @returns a new #GBindingGroup
         */
        static new(): BindingGroup;
        _init(config?: BindingGroup.ConstructorProperties): void;
    }

    module InitiallyUnowned {
        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {}
    }

    interface InitiallyUnowned {
        // Own fields of GObject-2.0.GObject.InitiallyUnowned

        g_type_instance: TypeInstance;

        // Class property signals of GObject-2.0.GObject.InitiallyUnowned

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * A type for objects that have an initially floating reference.
     *
     * All the fields in the `GInitiallyUnowned` structure are private to the
     * implementation and should never be accessed directly.
     * @class
     */
    class InitiallyUnowned extends Object {
        // Own properties of GObject-2.0.GObject.InitiallyUnowned

        static name: string;
        static $gtype: GType<InitiallyUnowned>;

        // Constructors of GObject-2.0.GObject.InitiallyUnowned

        constructor(config?: InitiallyUnowned.ConstructorProperties);
        _init(config?: InitiallyUnowned.ConstructorProperties): void;
    }

    module Object {
        // Signal callback interfaces

        /**
         * Signal callback interface for `notify`
         */
        interface NotifySignalCallback {
            ($obj: Object, pspec: ParamSpec): void;
        }

        // Constructor properties interface

        interface ConstructorProperties {}
    }

    interface Object {
        // Own fields of GObject-2.0.GObject.Object

        g_type_instance: TypeInstance;

        // Owm methods of GObject-2.0.GObject.Object

        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string | null,
            target: Object,
            target_property: string | null,
            flags: BindingFlags
        ): Binding;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * This function is the language bindings friendly version of
         * g_object_bind_property_full(), using #GClosures instead of
         * function pointers.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string | null,
            target: Object,
            target_property: string | null,
            flags: BindingFlags,
            transform_to: TClosure,
            transform_from: TClosure
        ): Binding;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string | null): any | null;
        /**
         * Gets a property of an object.
         *
         * The `value` can be:
         *
         *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
         *    automatically initialized with the expected type of the property
         *    (since GLib 2.60)
         *  - a #GValue initialized with the expected type of the property
         *  - a #GValue initialized with a type to which the expected type
         *    of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is
         * responsible for freeing the memory by calling g_value_unset().
         *
         * Note that g_object_get_property() is really intended for language
         * bindings, g_object_get() is much more convenient for C programming.
         * @param property_name the name of the property to get
         * @param value return location for the property value
         */
        get_property(property_name: string | null, value: any): void;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: any[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string | null): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
         * Sets a property on an object.
         * @param property_name the name of the property to set
         * @param value the value
         */
        set_property(property_name: string | null, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string | null): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: TClosure): void;

        // Own virtual methods of GObject-2.0.GObject.Object

        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(
            n_pspecs: number,
            pspecs: ParamSpec
        ): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
        vfunc_get_property(
            property_id: number,
            value: any,
            pspec: ParamSpec
        ): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @virtual
         * @param pspec
         */
        vfunc_notify(pspec: ParamSpec): void;
        vfunc_set_property(
            property_id: number,
            value: any,
            pspec: ParamSpec
        ): void;

        // Own signals of GObject-2.0.GObject.Object

        connect(
            sigName: 'notify',
            callback: Object.NotifySignalCallback
        ): number;
        connect_after(
            sigName: 'notify',
            callback: Object.NotifySignalCallback
        ): number;
        emit(sigName: 'notify', pspec: ParamSpec, ...args: any[]): void;

        // Class property signals of GObject-2.0.GObject.Object

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * The base object type.
     *
     * All the fields in the `GObject` structure are private to the implementation
     * and should never be accessed directly.
     *
     * Since GLib 2.72, all #GObjects are guaranteed to be aligned to at least the
     * alignment of the largest basic GLib type (typically this is #guint64 or
     * #gdouble). If you need larger alignment for an element in a #GObject, you
     * should allocate it on the heap (aligned), or arrange for your #GObject to be
     * appropriately padded. This guarantee applies to the #GObject (or derived)
     * struct, the #GObjectClass (or derived) struct, and any private data allocated
     * by G_ADD_PRIVATE().
     * @class
     */
    class Object {
        // Own properties of GObject-2.0.GObject.Object

        static name: string;
        static $gtype: GType<Object>;

        // Constructors of GObject-2.0.GObject.Object

        constructor(config?: Object.ConstructorProperties);
        /**
         * Creates a new instance of a #GObject subtype and sets its properties.
         *
         * Construction parameters (see %G_PARAM_CONSTRUCT, %G_PARAM_CONSTRUCT_ONLY)
         * which are not explicitly specified are set to their default values.
         * @constructor
         * @param object_type the type id of the #GObject subtype to instantiate
         * @param parameters an array of #GParameter
         * @returns a new instance of @object_type
         */
        static newv(object_type: GType, parameters: Parameter[]): Object;
        _init(config?: Object.ConstructorProperties): void;
        static compat_control(what: number, data: any | null): number;
        /**
         * Find the #GParamSpec with the given name for an
         * interface. Generally, the interface vtable passed in as `g_iface`
         * will be the default vtable from g_type_default_interface_ref(), or,
         * if you know the interface has already been loaded,
         * g_type_default_interface_peek().
         * @param g_iface any interface vtable for the  interface, or the default vtable for the interface
         * @param property_name name of a property to look up.
         * @returns the #GParamSpec for the property of the          interface with the name @property_name, or %NULL if no          such property exists.
         */
        static interface_find_property(
            g_iface: TypeInterface,
            property_name: string | null
        ): ParamSpec;
        /**
         * Add a property to an interface; this is only useful for interfaces
         * that are added to GObject-derived types. Adding a property to an
         * interface forces all objects classes with that interface to have a
         * compatible property. The compatible property could be a newly
         * created #GParamSpec, but normally
         * g_object_class_override_property() will be used so that the object
         * class only needs to provide an implementation and inherits the
         * property description, default value, bounds, and so forth from the
         * interface property.
         *
         * This function is meant to be called from the interface's default
         * vtable initialization function (the `class_init` member of
         * #GTypeInfo.) It must not be called after after `class_init` has
         * been called for any object types implementing this interface.
         *
         * If `pspec` is a floating reference, it will be consumed.
         * @param g_iface any interface vtable for the    interface, or the default  vtable for the interface.
         * @param pspec the #GParamSpec for the new property
         */
        static interface_install_property(
            g_iface: TypeInterface,
            pspec: ParamSpec
        ): void;
        /**
         * Lists the properties of an interface.Generally, the interface
         * vtable passed in as `g_iface` will be the default vtable from
         * g_type_default_interface_ref(), or, if you know the interface has
         * already been loaded, g_type_default_interface_peek().
         * @param g_iface any interface vtable for the  interface, or the default vtable for the interface
         * @returns a          pointer to an array of pointers to #GParamSpec          structures. The paramspecs are owned by GLib, but the          array should be freed with g_free() when you are done with          it.
         */
        static interface_list_properties(g_iface: TypeInterface): ParamSpec[];
    }

    interface ParamSpec {
        // Own fields of GObject-2.0.GObject.ParamSpec

        /**
         * private #GTypeInstance portion
         * @field
         */
        g_type_instance: TypeInstance;
        /**
         * name of this parameter: always an interned string
         * @field
         */
        name: string | null;
        /**
         * #GParamFlags flags for this parameter
         * @field
         */
        flags: ParamFlags;
        /**
         * the #GValue type for this parameter
         * @field
         */
        value_type: GType;
        /**
         * #GType type that uses (introduces) this parameter
         * @field
         */
        owner_type: GType;

        // Owm methods of GObject-2.0.GObject.ParamSpec

        /**
         * Get the short description of a #GParamSpec.
         * @returns the short description of @pspec.
         */
        get_blurb(): string | null;
        /**
         * Gets the default value of `pspec` as a pointer to a #GValue.
         *
         * The #GValue will remain valid for the life of `pspec`.
         * @returns a pointer to a #GValue which must not be modified
         */
        get_default_value(): any;
        /**
         * Get the name of a #GParamSpec.
         *
         * The name is always an "interned" string (as per g_intern_string()).
         * This allows for pointer-value comparisons.
         * @returns the name of @pspec.
         */
        get_name(): string | null;
        /**
         * Gets the GQuark for the name.
         * @returns the GQuark for @pspec->name.
         */
        get_name_quark(): GLib.Quark;
        /**
         * Get the nickname of a #GParamSpec.
         * @returns the nickname of @pspec.
         */
        get_nick(): string | null;
        /**
         * Gets back user data pointers stored via g_param_spec_set_qdata().
         * @param quark a #GQuark, naming the user data pointer
         * @returns the user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * If the paramspec redirects operations to another paramspec,
         * returns that paramspec. Redirect is used typically for
         * providing a new implementation of a property in a derived
         * type while preserving all the properties from the parent
         * type. Redirection is established by creating a property
         * of type #GParamSpecOverride. See g_object_class_override_property()
         * for an example of the use of this capability.
         * @returns paramspec to which requests on this          paramspec should be redirected, or %NULL if none.
         */
        get_redirect_target(): ParamSpec | null;
        /**
         * Sets an opaque, named pointer on a #GParamSpec. The name is
         * specified through a #GQuark (retrieved e.g. via
         * g_quark_from_static_string()), and the pointer can be gotten back
         * from the `pspec` with g_param_spec_get_qdata().  Setting a
         * previously set user data pointer, overrides (frees) the old pointer
         * set, using %NULL as pointer essentially removes the data stored.
         * @param quark a #GQuark, naming the user data pointer
         * @param data an opaque user data pointer
         */
        set_qdata(quark: GLib.Quark, data: any | null): void;
        /**
         * The initial reference count of a newly created #GParamSpec is 1,
         * even though no one has explicitly called g_param_spec_ref() on it
         * yet. So the initial reference count is flagged as "floating", until
         * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
         * (pspec);` in sequence on it, taking over the initial
         * reference count (thus ending up with a `pspec` that has a reference
         * count of 1 still, but is not flagged "floating" anymore).
         */
        sink(): void;
        /**
         * Gets back user data pointers stored via g_param_spec_set_qdata()
         * and removes the `data` from `pspec` without invoking its destroy()
         * function (if any was set).  Usually, calling this function is only
         * required to update user data pointers with a destroy notifier.
         * @param quark a #GQuark, naming the user data pointer
         * @returns the user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;

        // Own virtual methods of GObject-2.0.GObject.ParamSpec

        vfunc_finalize(): void;
        vfunc_value_is_valid(value: any): boolean;
        vfunc_value_set_default(value: any): void;
        vfunc_value_validate(value: any): boolean;
        vfunc_values_cmp(value1: any, value2: any): number;
    }

    /**
     * #GParamSpec is an object structure that encapsulates the metadata
     * required to specify parameters, such as e.g. #GObject properties.
     *
     * ## Parameter names # {#canonical-parameter-names}
     *
     * A property name consists of one or more segments consisting of ASCII letters
     * and digits, separated by either the `-` or `_` character. The first
     * character of a property name must be a letter. These are the same rules as
     * for signal naming (see g_signal_new()).
     *
     * When creating and looking up a #GParamSpec, either separator can be
     * used, but they cannot be mixed. Using `-` is considerably more
     * efficient, and is the ‘canonical form’. Using `_` is discouraged.
     * @class
     */
    class ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpec

        static name: string;

        // Constructors of GObject-2.0.GObject.ParamSpec

        /**
         * Validate a property name for a #GParamSpec. This can be useful for
         * dynamically-generated properties which need to be validated at run-time
         * before actually trying to create them.
         *
         * See [canonical parameter names][canonical-parameter-names] for details of
         * the rules for valid names.
         * @param name the canonical name of the property
         * @returns %TRUE if @name is a valid property name, %FALSE otherwise.
         */
        static is_valid_name(name: string | null): boolean;
        static char(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecChar;
        static uchar(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecUChar;
        static int(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecInt;
        static uint(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecUInt;
        static long(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecLong;
        static ulong(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecULong;
        static int64(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecInt64;
        static uint64(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecUInt64;
        static float(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecFloat;
        static boolean(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            defaultValue: boolean
        ): ParamSpecBoolean;
        static flags(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            flagsType: GType<unknown>,
            defaultValue: boolean
        ): ParamSpecFlags;
        static enum(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            enumType: GType<unknown>,
            defaultValue: boolean
        ): ParamSpecEnum;
        static double(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            minimum: number,
            maximum: number,
            defaultValue: number
        ): ParamSpecDouble;
        static string(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            defaultValue: string | null
        ): ParamSpecString;
        static boxed(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            boxedType: GType<unknown>
        ): ParamSpecBoxed;
        static object(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            objectType: GType<unknown>
        ): ParamSpecObject;
        static jsobject(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags
        ): ParamSpecBoxed;
        static param(
            name: string,
            nick: string,
            blurb: string,
            flags: ParamFlags,
            paramType: GType<unknown>
        ): ParamSpecParam;
        static override(name: string, oclass: Object | Function | GType): void;
    }

    interface ParamSpecBoolean {
        // Own fields of GObject-2.0.GObject.ParamSpecBoolean

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * default value for the property specified
         * @field
         */
        default_value: boolean;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for boolean properties.
     * @class
     */
    class ParamSpecBoolean extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecBoolean

        static name: string;
    }

    interface ParamSpecBoxed {
        // Own fields of GObject-2.0.GObject.ParamSpecBoxed

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for boxed properties.
     * @class
     */
    class ParamSpecBoxed extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecBoxed

        static name: string;
    }

    interface ParamSpecChar {
        // Own fields of GObject-2.0.GObject.ParamSpecChar

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for character properties.
     * @class
     */
    class ParamSpecChar extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecChar

        static name: string;
    }

    interface ParamSpecDouble {
        // Own fields of GObject-2.0.GObject.ParamSpecDouble

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
        /**
         * values closer than `epsilon` will be considered identical
         *  by g_param_values_cmp(); the default value is 1e-90.
         * @field
         */
        epsilon: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for double properties.
     * @class
     */
    class ParamSpecDouble extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecDouble

        static name: string;
    }

    interface ParamSpecEnum {
        // Own fields of GObject-2.0.GObject.ParamSpecEnum

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * the #GEnumClass for the enum
         * @field
         */
        enum_class: EnumClass;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for enum
     * properties.
     * @class
     */
    class ParamSpecEnum extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecEnum

        static name: string;
    }

    interface ParamSpecFlags {
        // Own fields of GObject-2.0.GObject.ParamSpecFlags

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * the #GFlagsClass for the flags
         * @field
         */
        flags_class: FlagsClass;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for flags
     * properties.
     * @class
     */
    class ParamSpecFlags extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecFlags

        static name: string;
    }

    interface ParamSpecFloat {
        // Own fields of GObject-2.0.GObject.ParamSpecFloat

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
        /**
         * values closer than `epsilon` will be considered identical
         *  by g_param_values_cmp(); the default value is 1e-30.
         * @field
         */
        epsilon: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for float properties.
     * @class
     */
    class ParamSpecFloat extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecFloat

        static name: string;
    }

    interface ParamSpecGType {
        // Own fields of GObject-2.0.GObject.ParamSpecGType

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * a #GType whose subtypes can occur as values
         * @field
         */
        is_a_type: GType;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for #GType properties.
     * @class
     */
    class ParamSpecGType extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecGType

        static name: string;
    }

    interface ParamSpecInt {
        // Own fields of GObject-2.0.GObject.ParamSpecInt

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for integer properties.
     * @class
     */
    class ParamSpecInt extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecInt

        static name: string;
    }

    interface ParamSpecInt64 {
        // Own fields of GObject-2.0.GObject.ParamSpecInt64

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for 64bit integer properties.
     * @class
     */
    class ParamSpecInt64 extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecInt64

        static name: string;
    }

    interface ParamSpecLong {
        // Own fields of GObject-2.0.GObject.ParamSpecLong

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for long integer properties.
     * @class
     */
    class ParamSpecLong extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecLong

        static name: string;
    }

    interface ParamSpecObject {
        // Own fields of GObject-2.0.GObject.ParamSpecObject

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for object properties.
     * @class
     */
    class ParamSpecObject extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecObject

        static name: string;
    }

    interface ParamSpecOverride {}

    /**
     * A #GParamSpec derived structure that redirects operations to
     * other types of #GParamSpec.
     *
     * All operations other than getting or setting the value are redirected,
     * including accessing the nick and blurb, validating a value, and so
     * forth.
     *
     * See g_param_spec_get_redirect_target() for retrieving the overridden
     * property. #GParamSpecOverride is used in implementing
     * g_object_class_override_property(), and will not be directly useful
     * unless you are implementing a new base type similar to GObject.
     * @class
     */
    class ParamSpecOverride extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecOverride

        static name: string;
    }

    interface ParamSpecParam {
        // Own fields of GObject-2.0.GObject.ParamSpecParam

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for %G_TYPE_PARAM
     * properties.
     * @class
     */
    class ParamSpecParam extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecParam

        static name: string;
    }

    interface ParamSpecPointer {
        // Own fields of GObject-2.0.GObject.ParamSpecPointer

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for pointer properties.
     * @class
     */
    class ParamSpecPointer extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecPointer

        static name: string;
    }

    interface ParamSpecString {
        // Own fields of GObject-2.0.GObject.ParamSpecString

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * default value for the property specified
         * @field
         */
        default_value: string | null;
        /**
         * a string containing the allowed values for the first byte
         * @field
         */
        cset_first: string | null;
        /**
         * a string containing the allowed values for the subsequent bytes
         * @field
         */
        cset_nth: string | null;
        /**
         * the replacement byte for bytes which don't match `cset_first` or `cset_nth`.
         * @field
         */
        substitutor: number;
        /**
         * replace empty string by %NULL
         * @field
         */
        null_fold_if_empty: number;
        /**
         * replace %NULL strings by an empty string
         * @field
         */
        ensure_non_null: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for string
     * properties.
     * @class
     */
    class ParamSpecString extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecString

        static name: string;
    }

    interface ParamSpecUChar {
        // Own fields of GObject-2.0.GObject.ParamSpecUChar

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for unsigned character properties.
     * @class
     */
    class ParamSpecUChar extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecUChar

        static name: string;
    }

    interface ParamSpecUInt {
        // Own fields of GObject-2.0.GObject.ParamSpecUInt

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for unsigned integer properties.
     * @class
     */
    class ParamSpecUInt extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecUInt

        static name: string;
    }

    interface ParamSpecUInt64 {
        // Own fields of GObject-2.0.GObject.ParamSpecUInt64

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for unsigned 64bit integer properties.
     * @class
     */
    class ParamSpecUInt64 extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecUInt64

        static name: string;
    }

    interface ParamSpecULong {
        // Own fields of GObject-2.0.GObject.ParamSpecULong

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * minimum value for the property specified
         * @field
         */
        minimum: number;
        /**
         * maximum value for the property specified
         * @field
         */
        maximum: number;
        /**
         * default value for the property specified
         * @field
         */
        default_value: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for unsigned long integer properties.
     * @class
     */
    class ParamSpecULong extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecULong

        static name: string;
    }

    interface ParamSpecUnichar {
        // Own fields of GObject-2.0.GObject.ParamSpecUnichar

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * default value for the property specified
         * @field
         */
        default_value: string;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for unichar (unsigned integer) properties.
     * @class
     */
    class ParamSpecUnichar extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecUnichar

        static name: string;
    }

    interface ParamSpecValueArray {
        // Own fields of GObject-2.0.GObject.ParamSpecValueArray

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * a #GParamSpec describing the elements contained in arrays of this property, may be %NULL
         * @field
         */
        element_spec: ParamSpec;
        /**
         * if greater than 0, arrays of this property will always have this many elements
         * @field
         */
        fixed_n_elements: number;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for #GValueArray properties.
     * @class
     */
    class ParamSpecValueArray extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecValueArray

        static name: string;
    }

    interface ParamSpecVariant {
        // Own fields of GObject-2.0.GObject.ParamSpecVariant

        /**
         * private #GParamSpec portion
         * @field
         */
        parent_instance: ParamSpec;
        /**
         * a #GVariantType, or %NULL
         * @field
         */
        type: GLib.VariantType;
        /**
         * a #GVariant, or %NULL
         * @field
         */
        default_value: GLib.Variant;
    }

    /**
     * A #GParamSpec derived structure that contains the meta data for #GVariant properties.
     *
     * When comparing values with g_param_values_cmp(), scalar values with the same
     * type will be compared with g_variant_compare(). Other non-%NULL variants will
     * be checked for equality with g_variant_equal(), and their sort order is
     * otherwise undefined. %NULL is ordered before non-%NULL variants. Two %NULL
     * values compare equal.
     * @class
     */
    class ParamSpecVariant extends ParamSpec {
        // Own properties of GObject-2.0.GObject.ParamSpecVariant

        static name: string;
    }

    module SignalGroup {
        // Signal callback interfaces

        /**
         * Signal callback interface for `bind`
         */
        interface BindSignalCallback {
            ($obj: SignalGroup, instance: Object): void;
        }

        /**
         * Signal callback interface for `unbind`
         */
        interface UnbindSignalCallback {
            ($obj: SignalGroup): void;
        }

        // Constructor properties interface

        interface ConstructorProperties extends Object.ConstructorProperties {
            // Own constructor properties of GObject-2.0.GObject.SignalGroup

            /**
             * The target instance used when connecting signals.
             */
            target?: Object | null;
            /**
             * The #GType of the target property.
             */
            target_type?: GType | null;
        }
    }

    interface SignalGroup {
        // Own properties of GObject-2.0.GObject.SignalGroup

        /**
         * The target instance used when connecting signals.
         */
        target: Object;
        /**
         * The #GType of the target property.
         */
        readonly target_type: GType;

        // Owm methods of GObject-2.0.GObject.SignalGroup

        /**
         * Blocks all signal handlers managed by `self` so they will not
         * be called during any signal emissions. Must be unblocked exactly
         * the same number of times it has been blocked to become active again.
         *
         * This blocked state will be kept across changes of the target instance.
         */
        block(): void;
        /**
         * Connects `closure` to the signal `detailed_signal` on #GSignalGroup:target.
         *
         * You cannot connect a signal handler after #GSignalGroup:target has been set.
         * @param detailed_signal a string of the form `signal-name` with optional `::signal-detail`
         * @param closure the closure to connect.
         * @param after whether the handler should be called before or after the  default handler of the signal.
         */
        connect_closure(
            detailed_signal: string | null,
            closure: TClosure,
            after: boolean
        ): void;
        /**
         * Connects `c_handler` to the signal `detailed_signal`
         * on the target instance of `self`.
         *
         * You cannot connect a signal handler after #GSignalGroup:target has been set.
         * @param detailed_signal a string of the form "signal-name::detail"
         * @param c_handler the #GCallback to connect
         * @param flags the flags used to create the signal connection
         */
        connect_data(
            detailed_signal: string | null,
            c_handler: Callback,
            flags: ConnectFlags
        ): void;
        /**
         * Connects `c_handler` to the signal `detailed_signal`
         * on the target instance of `self`.
         *
         * The instance on which the signal is emitted and `data`
         * will be swapped when calling `c_handler`.
         *
         * You cannot connect a signal handler after #GSignalGroup:target has been set.
         * @param detailed_signal a string of the form "signal-name::detail"
         * @param c_handler the #GCallback to connect
         */
        connect_swapped(
            detailed_signal: string | null,
            c_handler: Callback
        ): void;
        /**
         * Gets the target instance used when connecting signals.
         * @returns The target instance
         */
        dup_target(): Object | null;
        /**
         * Sets the target instance used when connecting signals. Any signal
         * that has been registered with g_signal_group_connect_object() or
         * similar functions will be connected to this object.
         *
         * If the target instance was previously set, signals will be
         * disconnected from that object prior to connecting to `target`.
         * @param target The target instance used     when connecting signals.
         */
        set_target(target: Object | null): void;
        /**
         * Unblocks all signal handlers managed by `self` so they will be
         * called again during any signal emissions unless it is blocked
         * again. Must be unblocked exactly the same number of times it
         * has been blocked to become active again.
         */
        unblock(): void;

        // Own signals of GObject-2.0.GObject.SignalGroup

        connect(
            sigName: 'bind',
            callback: SignalGroup.BindSignalCallback
        ): number;
        connect_after(
            sigName: 'bind',
            callback: SignalGroup.BindSignalCallback
        ): number;
        emit(sigName: 'bind', instance: Object, ...args: any[]): void;
        connect(
            sigName: 'unbind',
            callback: SignalGroup.UnbindSignalCallback
        ): number;
        connect_after(
            sigName: 'unbind',
            callback: SignalGroup.UnbindSignalCallback
        ): number;
        emit(sigName: 'unbind', ...args: any[]): void;

        // Class property signals of GObject-2.0.GObject.SignalGroup

        connect(
            sigName: 'notify::target',
            callback: ($obj: SignalGroup, pspec: ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::target',
            callback: ($obj: SignalGroup, pspec: ParamSpec) => void
        ): number;
        emit(sigName: 'notify::target', ...args: any[]): void;
        connect(
            sigName: 'notify::target-type',
            callback: ($obj: SignalGroup, pspec: ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::target-type',
            callback: ($obj: SignalGroup, pspec: ParamSpec) => void
        ): number;
        emit(sigName: 'notify::target-type', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * #GSignalGroup manages to simplify the process of connecting
     * many signals to a #GObject as a group. As such there is no API
     * to disconnect a signal from the group.
     *
     * In particular, this allows you to:
     *
     *  - Change the target instance, which automatically causes disconnection
     *    of the signals from the old instance and connecting to the new instance.
     *  - Block and unblock signals as a group
     *  - Ensuring that blocked state transfers across target instances.
     *
     * One place you might want to use such a structure is with #GtkTextView and
     * #GtkTextBuffer. Often times, you'll need to connect to many signals on
     * #GtkTextBuffer from a #GtkTextView subclass. This allows you to create a
     * signal group during instance construction, simply bind the
     * #GtkTextView:buffer property to #GSignalGroup:target and connect
     * all the signals you need. When the #GtkTextView:buffer property changes
     * all of the signals will be transitioned correctly.
     * @class
     */
    class SignalGroup extends Object {
        // Own properties of GObject-2.0.GObject.SignalGroup

        static name: string;
        static $gtype: GType<SignalGroup>;

        // Constructors of GObject-2.0.GObject.SignalGroup

        constructor(config?: SignalGroup.ConstructorProperties);
        /**
         * Creates a new #GSignalGroup for target instances of `target_type`.
         * @constructor
         * @param target_type the #GType of the target instance.
         * @returns a new #GSignalGroup
         */
        constructor(target_type: GType);
        /**
         * Creates a new #GSignalGroup for target instances of `target_type`.
         * @constructor
         * @param target_type the #GType of the target instance.
         * @returns a new #GSignalGroup
         */
        static new(target_type: GType): SignalGroup;
        _init(config?: SignalGroup.ConstructorProperties): void;
    }

    module TypeModule {
        // Constructor properties interface

        interface ConstructorProperties
            extends TypePlugin.ConstructorProperties,
                Object.ConstructorProperties {}
    }

    interface TypeModule extends TypePlugin {
        // Own fields of GObject-2.0.GObject.TypeModule

        parent_instance: Object;
        use_count: number;
        type_infos: any[];
        interface_infos: any[];
        /**
         * the name of the module
         * @field
         */
        name: string | null;

        // Owm methods of GObject-2.0.GObject.TypeModule

        /**
         * Registers an additional interface for a type, whose interface lives
         * in the given type plugin. If the interface was already registered
         * for the type in this plugin, nothing will be done.
         *
         * As long as any instances of the type exist, the type plugin will
         * not be unloaded.
         *
         * Since 2.56 if `module` is %NULL this will call g_type_add_interface_static()
         * instead. This can be used when making a static build of the module.
         * @param instance_type type to which to add the interface.
         * @param interface_type interface type to add
         * @param interface_info type information structure
         */
        add_interface(
            instance_type: GType,
            interface_type: GType,
            interface_info: InterfaceInfo
        ): void;
        /**
         * Looks up or registers an enumeration that is implemented with a particular
         * type plugin. If a type with name `type_name` was previously registered,
         * the #GType identifier for the type is returned, otherwise the type
         * is newly registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type plugin will
         * not be unloaded.
         *
         * Since 2.56 if `module` is %NULL this will call g_type_register_static()
         * instead. This can be used when making a static build of the module.
         * @param name name for the type
         * @param const_static_values an array of #GEnumValue structs for the                       possible enumeration values. The array is                       terminated by a struct with all members being                       0.
         * @returns the new or existing type ID
         */
        register_enum(
            name: string | null,
            const_static_values: EnumValue
        ): GType;
        /**
         * Looks up or registers a flags type that is implemented with a particular
         * type plugin. If a type with name `type_name` was previously registered,
         * the #GType identifier for the type is returned, otherwise the type
         * is newly registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type plugin will
         * not be unloaded.
         *
         * Since 2.56 if `module` is %NULL this will call g_type_register_static()
         * instead. This can be used when making a static build of the module.
         * @param name name for the type
         * @param const_static_values an array of #GFlagsValue structs for the                       possible flags values. The array is                       terminated by a struct with all members being                       0.
         * @returns the new or existing type ID
         */
        register_flags(
            name: string | null,
            const_static_values: FlagsValue
        ): GType;
        /**
         * Looks up or registers a type that is implemented with a particular
         * type plugin. If a type with name `type_name` was previously registered,
         * the #GType identifier for the type is returned, otherwise the type
         * is newly registered, and the resulting #GType identifier returned.
         *
         * When reregistering a type (typically because a module is unloaded
         * then reloaded, and reinitialized), `module` and `parent_type` must
         * be the same as they were previously.
         *
         * As long as any instances of the type exist, the type plugin will
         * not be unloaded.
         *
         * Since 2.56 if `module` is %NULL this will call g_type_register_static()
         * instead. This can be used when making a static build of the module.
         * @param parent_type the type for the parent class
         * @param type_name name for the type
         * @param type_info type information structure
         * @param flags flags field providing details about the type
         * @returns the new or existing type ID
         */
        register_type(
            parent_type: GType,
            type_name: string | null,
            type_info: TypeInfo,
            flags: TypeFlags
        ): GType;
        /**
         * Sets the name for a #GTypeModule
         * @param name a human-readable name to use in error messages.
         */
        set_name(name: string | null): void;
        /**
         * Decreases the use count of a #GTypeModule by one. If the
         * result is zero, the module will be unloaded. (However, the
         * #GTypeModule will not be freed, and types associated with the
         * #GTypeModule are not unregistered. Once a #GTypeModule is
         * initialized, it must exist forever.)
         */
        unuse(): void;
        /**
         * Increases the use count of a #GTypeModule by one. If the
         * use count was zero before, the plugin will be loaded.
         * If loading the plugin fails, the use count is reset to
         * its prior value.
         * @returns %FALSE if the plugin needed to be loaded and  loading the plugin failed.
         */
        use(): boolean;

        // Overloads of use

        /**
         * Calls the `use_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;

        // Own virtual methods of GObject-2.0.GObject.TypeModule

        vfunc_load(): boolean;
        vfunc_unload(): void;

        // Class property signals of GObject-2.0.GObject.TypeModule

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * #GTypeModule provides a simple implementation of the #GTypePlugin
     * interface.
     *
     * The model of #GTypeModule is a dynamically loaded module which
     * implements some number of types and interface implementations.
     *
     * When the module is loaded, it registers its types and interfaces
     * using g_type_module_register_type() and g_type_module_add_interface().
     * As long as any instances of these types and interface implementations
     * are in use, the module is kept loaded. When the types and interfaces
     * are gone, the module may be unloaded. If the types and interfaces
     * become used again, the module will be reloaded. Note that the last
     * reference cannot be released from within the module code, since that
     * would lead to the caller's code being unloaded before g_object_unref()
     * returns to it.
     *
     * Keeping track of whether the module should be loaded or not is done by
     * using a use count - it starts at zero, and whenever it is greater than
     * zero, the module is loaded. The use count is maintained internally by
     * the type system, but also can be explicitly controlled by
     * g_type_module_use() and g_type_module_unuse(). Typically, when loading
     * a module for the first type, g_type_module_use() will be used to load
     * it so that it can initialize its types. At some later point, when the
     * module no longer needs to be loaded except for the type
     * implementations it contains, g_type_module_unuse() is called.
     *
     * #GTypeModule does not actually provide any implementation of module
     * loading and unloading. To create a particular module type you must
     * derive from #GTypeModule and implement the load and unload functions
     * in #GTypeModuleClass.
     * @class
     */
    class TypeModule extends Object {
        // Own properties of GObject-2.0.GObject.TypeModule

        static name: string;
        static $gtype: GType<TypeModule>;

        // Constructors of GObject-2.0.GObject.TypeModule

        constructor(config?: TypeModule.ConstructorProperties);
        _init(config?: TypeModule.ConstructorProperties): void;
    }

    interface CClosure {
        // Own fields of GObject-2.0.GObject.CClosure

        /**
         * the #GClosure
         * @field
         */
        closure: TClosure;
        /**
         * the callback function
         * @field
         */
        callback: any;
    }

    /**
     * A #GCClosure is a specialization of #GClosure for C function callbacks.
     * @record
     */
    class CClosure {
        // Own properties of GObject-2.0.GObject.CClosure

        static name: string;

        // Constructors of GObject-2.0.GObject.CClosure

        /**
         * A #GClosureMarshal function for use with signals with handlers that
         * take two boxed pointers as arguments and return a boolean.  If you
         * have such a signal, you will probably also need to use an
         * accumulator, such as g_signal_accumulator_true_handled().
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        static marshal_BOOLEAN__BOXED_BOXED(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `gboolean (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter
         * denotes a flags type.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value a #GValue which can store the returned #gboolean
         * @param n_param_values 2
         * @param param_values a #GValue array holding instance and arg1
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_BOOLEAN__FLAGS(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `gchar* (*callback) (gpointer instance, GObject *arg1, gpointer arg2, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value a #GValue, which can store the returned string
         * @param n_param_values 3
         * @param param_values a #GValue array holding instance, arg1 and arg2
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_STRING__OBJECT_POINTER(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gboolean arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #gboolean parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__BOOLEAN(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, GBoxed *arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #GBoxed* parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__BOXED(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gchar arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #gchar parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__CHAR(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gdouble arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #gdouble parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__DOUBLE(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes an enumeration type..
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the enumeration parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__ENUM(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes a flags type.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the flags parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__FLAGS(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gfloat arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #gfloat parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__FLOAT(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #gint parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__INT(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, glong arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #glong parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__LONG(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, GObject *arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #GObject* parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__OBJECT(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, GParamSpec *arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #GParamSpec* parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__PARAM(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gpointer arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #gpointer parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__POINTER(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, const gchar *arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #gchar* parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__STRING(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, guchar arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #guchar parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__UCHAR(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, guint arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #guint parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__UINT(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, guint arg1, gpointer arg2, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 3
         * @param param_values a #GValue array holding instance, arg1 and arg2
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__UINT_POINTER(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gulong arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #gulong parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__ULONG(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, GVariant *arg1, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 2
         * @param param_values a #GValue array holding the instance and the #GVariant* parameter
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__VARIANT(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A marshaller for a #GCClosure with a callback of type
         * `void (*callback) (gpointer instance, gpointer user_data)`.
         * @param closure the #GClosure to which the marshaller belongs
         * @param return_value ignored
         * @param n_param_values 1
         * @param param_values a #GValue array holding only the instance
         * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
         * @param marshal_data additional data specified when registering the marshaller
         */
        static marshal_VOID__VOID(
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
        /**
         * A generic marshaller function implemented via
         * [libffi](http://sourceware.org/libffi/).
         *
         * Normally this function is not passed explicitly to g_signal_new(),
         * but used automatically by GLib when specifying a %NULL marshaller.
         * @param closure A #GClosure.
         * @param return_gvalue A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        static marshal_generic(
            closure: TClosure,
            return_gvalue: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any | null,
            marshal_data: any | null
        ): void;
    }

    interface Closure {
        // Own fields of GObject-2.0.GObject.Closure

        /**
         * Indicates whether the closure is currently being invoked with
         *  g_closure_invoke()
         * @field
         */
        in_marshal: number;
        /**
         * Indicates whether the closure has been invalidated by
         *  g_closure_invalidate()
         * @field
         */
        is_invalid: number;
        marshal: (
            closure: TClosure,
            return_value: any,
            n_param_values: number,
            param_values: any,
            invocation_hint: any,
            marshal_data: any
        ) => void;

        // Owm methods of GObject-2.0.GObject.Closure

        /**
         * Sets a flag on the closure to indicate that its calling
         * environment has become invalid, and thus causes any future
         * invocations of g_closure_invoke() on this `closure` to be
         * ignored.
         *
         * Also, invalidation notifiers installed on the closure will
         * be called at this point. Note that unless you are holding a
         * reference to the closure yourself, the invalidation notifiers may
         * unref the closure and cause it to be destroyed, so if you need to
         * access the closure after calling g_closure_invalidate(), make sure
         * that you've previously called g_closure_ref().
         *
         * Note that g_closure_invalidate() will also be called when the
         * reference count of a closure drops to zero (unless it has already
         * been invalidated before).
         */
        invalidate(): void;
        /**
         * Invokes the closure, i.e. executes the callback represented by the `closure`.
         * @param param_values an array of                #GValues holding the arguments on which to                invoke the callback of `closure`
         * @param invocation_hint a context-dependent invocation hint
         */
        invoke(
            param_values: any[],
            invocation_hint: any | null
        ): /* return_value */ any;
        /**
         * Increments the reference count on a closure to force it staying
         * alive while the caller holds a pointer to it.
         * @returns The @closure passed in, for convenience
         */
        ref(): TClosure;
        /**
         * Takes over the initial ownership of a closure.
         *
         * Each closure is initially created in a "floating" state, which means
         * that the initial reference count is not owned by any caller.
         *
         * This function checks to see if the object is still floating, and if so,
         * unsets the floating state and decreases the reference count. If the
         * closure is not floating, g_closure_sink() does nothing.
         *
         * The reason for the existence of the floating state is to prevent
         * cumbersome code sequences like:
         *
         *
         * ```c
         * closure = g_cclosure_new (cb_func, cb_data);
         * g_source_set_closure (source, closure);
         * g_closure_unref (closure); // GObject doesn't really need this
         * ```
         *
         *
         * Because g_source_set_closure() (and similar functions) take ownership of the
         * initial reference count, if it is unowned, we instead can write:
         *
         *
         * ```c
         * g_source_set_closure (source, g_cclosure_new (cb_func, cb_data));
         * ```
         *
         *
         * Generally, this function is used together with g_closure_ref(). An example
         * of storing a closure for later notification looks like:
         *
         *
         * ```c
         * static GClosure *notify_closure = NULL;
         * void
         * foo_notify_set_closure (GClosure *closure)
         * {
         *   if (notify_closure)
         *     g_closure_unref (notify_closure);
         *   notify_closure = closure;
         *   if (notify_closure)
         *     {
         *       g_closure_ref (notify_closure);
         *       g_closure_sink (notify_closure);
         *     }
         * }
         * ```
         *
         *
         * Because g_closure_sink() may decrement the reference count of a closure
         * (if it hasn't been called on `closure` yet) just like g_closure_unref(),
         * g_closure_ref() should be called prior to this function.
         */
        sink(): void;
        /**
         * Decrements the reference count of a closure after it was previously
         * incremented by the same caller.
         *
         * If no other callers are using the closure, then the closure will be
         * destroyed and freed.
         */
        unref(): void;
    }

    /**
     * A #GClosure represents a callback supplied by the programmer.
     *
     * It will generally comprise a function of some kind and a marshaller
     * used to call it. It is the responsibility of the marshaller to
     * convert the arguments for the invocation from #GValues into
     * a suitable form, perform the callback on the converted arguments,
     * and transform the return value back into a #GValue.
     *
     * In the case of C programs, a closure usually just holds a pointer
     * to a function and maybe a data argument, and the marshaller
     * converts between #GValue and native C types. The GObject
     * library provides the #GCClosure type for this purpose. Bindings for
     * other languages need marshallers which convert between #GValues
     * and suitable representations in the runtime of the language in
     * order to use functions written in that language as callbacks. Use
     * g_closure_set_marshal() to set the marshaller on such a custom
     * closure implementation.
     *
     * Within GObject, closures play an important role in the
     * implementation of signals. When a signal is registered, the
     * `c_marshaller` argument to g_signal_new() specifies the default C
     * marshaller for any closure which is connected to this
     * signal. GObject provides a number of C marshallers for this
     * purpose, see the g_cclosure_marshal_*() functions. Additional C
     * marshallers can be generated with the [glib-genmarshal][glib-genmarshal]
     * utility.  Closures can be explicitly connected to signals with
     * g_signal_connect_closure(), but it usually more convenient to let
     * GObject create a closure automatically by using one of the
     * g_signal_connect_*() functions which take a callback function/user
     * data pair.
     *
     * Using closures has a number of important advantages over a simple
     * callback function/data pointer combination:
     *
     * - Closures allow the callee to get the types of the callback parameters,
     *   which means that language bindings don't have to write individual glue
     *   for each callback type.
     *
     * - The reference counting of #GClosure makes it easy to handle reentrancy
     *   right; if a callback is removed while it is being invoked, the closure
     *   and its parameters won't be freed until the invocation finishes.
     *
     * - g_closure_invalidate() and invalidation notifiers allow callbacks to be
     *   automatically removed when the objects they point to go away.
     * @record
     */
    class Closure {
        // Own properties of GObject-2.0.GObject.Closure

        static name: string;

        // Constructors of GObject-2.0.GObject.Closure

        /**
         * A variant of g_closure_new_simple() which stores `object` in the
         * `data` field of the closure and calls g_object_watch_closure() on
         * `object` and the created closure. This function is mainly useful
         * when implementing new types of closures.
         * @constructor
         * @param sizeof_closure the size of the structure to allocate, must be at least  `sizeof (GClosure)`
         * @param object a #GObject pointer to store in the `data` field of the newly  allocated #GClosure
         * @returns a newly allocated #GClosure
         */
        static new_object(sizeof_closure: number, object: Object): Closure;
        /**
         * Allocates a struct of the given size and initializes the initial
         * part as a #GClosure.
         *
         * This function is mainly useful when implementing new types of closures:
         *
         *
         * ```c
         * typedef struct _MyClosure MyClosure;
         * struct _MyClosure
         * {
         *   GClosure closure;
         *   // extra data goes here
         * };
         *
         * static void
         * my_closure_finalize (gpointer  notify_data,
         *                      GClosure *closure)
         * {
         *   MyClosure *my_closure = (MyClosure *)closure;
         *
         *   // free extra data here
         * }
         *
         * MyClosure *my_closure_new (gpointer data)
         * {
         *   GClosure *closure;
         *   MyClosure *my_closure;
         *
         *   closure = g_closure_new_simple (sizeof (MyClosure), data);
         *   my_closure = (MyClosure *) closure;
         *
         *   // initialize extra data here
         *
         *   g_closure_add_finalize_notifier (closure, notify_data,
         *                                    my_closure_finalize);
         *   return my_closure;
         * }
         * ```
         *
         * @constructor
         * @param sizeof_closure the size of the structure to allocate, must be at least                  `sizeof (GClosure)`
         * @param data data to store in the `data` field of the newly allocated #GClosure
         * @returns a floating reference to a new #GClosure
         */
        static new_simple(sizeof_closure: number, data: any | null): Closure;
    }

    interface ClosureNotifyData {
        // Own fields of GObject-2.0.GObject.ClosureNotifyData

        data: any;
        notify: ClosureNotify;
    }

    class ClosureNotifyData {
        // Own properties of GObject-2.0.GObject.ClosureNotifyData

        static name: string;
    }

    interface EnumClass {
        // Own fields of GObject-2.0.GObject.EnumClass

        /**
         * the parent class
         * @field
         */
        g_type_class: TypeClass;
        /**
         * the smallest possible value.
         * @field
         */
        minimum: number;
        /**
         * the largest possible value.
         * @field
         */
        maximum: number;
        /**
         * the number of possible values.
         * @field
         */
        n_values: number;
        /**
         * an array of #GEnumValue structs describing the
         *  individual values.
         * @field
         */
        values: EnumValue;
    }

    /**
     * The class of an enumeration type holds information about its
     * possible values.
     * @record
     */
    class EnumClass {
        // Own properties of GObject-2.0.GObject.EnumClass

        static name: string;
    }

    interface EnumValue {
        // Own fields of GObject-2.0.GObject.EnumValue

        /**
         * the enum value
         * @field
         */
        value: number;
        /**
         * the name of the value
         * @field
         */
        value_name: string | null;
        /**
         * the nickname of the value
         * @field
         */
        value_nick: string | null;
    }

    /**
     * A structure which contains a single enum value, its name, and its
     * nickname.
     * @record
     */
    class EnumValue {
        // Own properties of GObject-2.0.GObject.EnumValue

        static name: string;
    }

    interface FlagsClass {
        // Own fields of GObject-2.0.GObject.FlagsClass

        /**
         * the parent class
         * @field
         */
        g_type_class: TypeClass;
        /**
         * a mask covering all possible values.
         * @field
         */
        mask: number;
        /**
         * the number of possible values.
         * @field
         */
        n_values: number;
        /**
         * an array of #GFlagsValue structs describing the
         *  individual values.
         * @field
         */
        values: FlagsValue;
    }

    /**
     * The class of a flags type holds information about its
     * possible values.
     * @record
     */
    class FlagsClass {
        // Own properties of GObject-2.0.GObject.FlagsClass

        static name: string;
    }

    interface FlagsValue {
        // Own fields of GObject-2.0.GObject.FlagsValue

        /**
         * the flags value
         * @field
         */
        value: number;
        /**
         * the name of the value
         * @field
         */
        value_name: string | null;
        /**
         * the nickname of the value
         * @field
         */
        value_nick: string | null;
    }

    /**
     * A structure which contains a single flags value, its name, and its
     * nickname.
     * @record
     */
    class FlagsValue {
        // Own properties of GObject-2.0.GObject.FlagsValue

        static name: string;
    }

    interface InitiallyUnownedClass {
        // Own fields of GObject-2.0.GObject.InitiallyUnownedClass

        /**
         * the parent class
         * @field
         */
        g_type_class: TypeClass;
        set_property: (
            object: Object,
            property_id: number,
            value: any,
            pspec: ParamSpec
        ) => void;
        get_property: (
            object: Object,
            property_id: number,
            value: any,
            pspec: ParamSpec
        ) => void;
        dispose: (object: Object) => void;
        finalize: (object: Object) => void;
        dispatch_properties_changed: (
            object: Object,
            n_pspecs: number,
            pspecs: ParamSpec
        ) => void;
        notify: (object: Object, pspec: ParamSpec) => void;
        constructed: (object: Object) => void;
    }

    /**
     * The class structure for the GInitiallyUnowned type.
     * @record
     */
    abstract class InitiallyUnownedClass {
        // Own properties of GObject-2.0.GObject.InitiallyUnownedClass

        static name: string;
    }

    interface InterfaceInfo {
        // Own fields of GObject-2.0.GObject.InterfaceInfo

        /**
         * location of the interface initialization function
         * @field
         */
        interface_init: InterfaceInitFunc;
        /**
         * location of the interface finalization function
         * @field
         */
        interface_finalize: InterfaceFinalizeFunc;
        /**
         * user-supplied data passed to the interface init/finalize functions
         * @field
         */
        interface_data: any;
    }

    /**
     * A structure that provides information to the type system which is
     * used specifically for managing interface types.
     * @record
     */
    class InterfaceInfo {
        // Own properties of GObject-2.0.GObject.InterfaceInfo

        static name: string;
    }

    interface ObjectClass {
        // Own fields of GObject-2.0.GObject.ObjectClass

        /**
         * the parent class
         * @field
         */
        g_type_class: TypeClass;
        set_property: (
            object: Object,
            property_id: number,
            value: any,
            pspec: ParamSpec
        ) => void;
        get_property: (
            object: Object,
            property_id: number,
            value: any,
            pspec: ParamSpec
        ) => void;
        dispose: (object: Object) => void;
        finalize: (object: Object) => void;
        dispatch_properties_changed: (
            object: Object,
            n_pspecs: number,
            pspecs: ParamSpec
        ) => void;
        notify: (object: Object, pspec: ParamSpec) => void;
        constructed: (object: Object) => void;

        // Owm methods of GObject-2.0.GObject.ObjectClass

        /**
         * Looks up the #GParamSpec for a property of a class.
         * @param property_name the name of the property to look up
         * @returns the #GParamSpec for the property, or          %NULL if the class doesn't have a property of that name
         */
        find_property(
            oclass: Object | Function | GType,
            property_name: string | null
        ): ParamSpec;
        /**
         * Installs new properties from an array of #GParamSpecs.
         *
         * All properties should be installed during the class initializer.  It
         * is possible to install properties after that, but doing so is not
         * recommend, and specifically, is not guaranteed to be thread-safe vs.
         * use of properties on the same type on other threads.
         *
         * The property id of each property is the index of each #GParamSpec in
         * the `pspecs` array.
         *
         * The property id of 0 is treated specially by #GObject and it should not
         * be used to store a #GParamSpec.
         *
         * This function should be used if you plan to use a static array of
         * #GParamSpecs and g_object_notify_by_pspec(). For instance, this
         * class initialization:
         *
         *
         * ```c
         * typedef enum {
         *   PROP_FOO = 1,
         *   PROP_BAR,
         *   N_PROPERTIES
         * } MyObjectProperty;
         *
         * static GParamSpec *obj_properties[N_PROPERTIES] = { NULL, };
         *
         * static void
         * my_object_class_init (MyObjectClass *klass)
         * {
         *   GObjectClass *gobject_class = G_OBJECT_CLASS (klass);
         *
         *   obj_properties[PROP_FOO] =
         *     g_param_spec_int ("foo", "Foo", "Foo",
         *                       -1, G_MAXINT,
         *                       0,
         *                       G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *
         *   obj_properties[PROP_BAR] =
         *     g_param_spec_string ("bar", "Bar", "Bar",
         *                          NULL,
         *                          G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *
         *   gobject_class->set_property = my_object_set_property;
         *   gobject_class->get_property = my_object_get_property;
         *   g_object_class_install_properties (gobject_class,
         *                                      G_N_ELEMENTS (obj_properties),
         *                                      obj_properties);
         * }
         * ```
         *
         *
         * allows calling g_object_notify_by_pspec() to notify of property changes:
         *
         *
         * ```c
         * void
         * my_object_set_foo (MyObject *self, gint foo)
         * {
         *   if (self->foo != foo)
         *     {
         *       self->foo = foo;
         *       g_object_notify_by_pspec (G_OBJECT (self), obj_properties[PROP_FOO]);
         *     }
         *  }
         * ```
         *
         * @param pspecs the #GParamSpecs array   defining the new properties
         */
        install_properties(
            oclass: Object | Function | GType,
            pspecs: ParamSpec[]
        ): void;
        /**
         * Installs a new property.
         *
         * All properties should be installed during the class initializer.  It
         * is possible to install properties after that, but doing so is not
         * recommend, and specifically, is not guaranteed to be thread-safe vs.
         * use of properties on the same type on other threads.
         *
         * Note that it is possible to redefine a property in a derived class,
         * by installing a property with the same name. This can be useful at times,
         * e.g. to change the range of allowed values or the default value.
         * @param property_id the id for the new property
         * @param pspec the #GParamSpec for the new property
         */
        install_property(
            oclass: Object | Function | GType,
            property_id: number,
            pspec: ParamSpec
        ): void;
        /**
         * Get an array of #GParamSpec* for all properties of a class.
         * @returns an array of          #GParamSpec* which should be freed after use
         */
        list_properties(oclass: Object | Function | GType): ParamSpec[];
        /**
         * Registers `property_id` as referring to a property with the name
         * `name` in a parent class or in an interface implemented by `oclass`.
         * This allows this class to "override" a property implementation in
         * a parent class or to provide the implementation of a property from
         * an interface.
         *
         * Internally, overriding is implemented by creating a property of type
         * #GParamSpecOverride; generally operations that query the properties of
         * the object class, such as g_object_class_find_property() or
         * g_object_class_list_properties() will return the overridden
         * property. However, in one case, the `construct_properties` argument of
         * the `constructor` virtual function, the #GParamSpecOverride is passed
         * instead, so that the `param_id` field of the #GParamSpec will be
         * correct.  For virtually all uses, this makes no difference. If you
         * need to get the overridden property, you can call
         * g_param_spec_get_redirect_target().
         * @param property_id the new property ID
         * @param name the name of a property registered in a parent class or  in an interface of this class.
         */
        override_property(
            oclass: Object | Function | GType,
            property_id: number,
            name: string | null
        ): void;
    }

    /**
     * The class structure for the GObject type.
     *
     *
     * ```c
     * // Example of implementing a singleton using a constructor.
     * static MySingleton *the_singleton = NULL;
     *
     * static GObject*
     * my_singleton_constructor (GType                  type,
     *                           guint                  n_construct_params,
     *                           GObjectConstructParam *construct_params)
     * {
     *   GObject *object;
     *
     *   if (!the_singleton)
     *     {
     *       object = G_OBJECT_CLASS (parent_class)->constructor (type,
     *                                                            n_construct_params,
     *                                                            construct_params);
     *       the_singleton = MY_SINGLETON (object);
     *     }
     *   else
     *     object = g_object_ref (G_OBJECT (the_singleton));
     *
     *   return object;
     * }
     * ```
     *
     * @record
     */
    abstract class ObjectClass {
        // Own properties of GObject-2.0.GObject.ObjectClass

        static name: string;
    }

    interface ObjectConstructParam {
        // Own fields of GObject-2.0.GObject.ObjectConstructParam

        /**
         * the #GParamSpec of the construct parameter
         * @field
         */
        pspec: ParamSpec;
        /**
         * the value to set the parameter to
         * @field
         */
        value: any;
    }

    /**
     * The GObjectConstructParam struct is an auxiliary structure used to hand
     * #GParamSpec/#GValue pairs to the `constructor` of a #GObjectClass.
     * @record
     */
    class ObjectConstructParam {
        // Own properties of GObject-2.0.GObject.ObjectConstructParam

        static name: string;
    }

    interface ParamSpecClass {
        // Own fields of GObject-2.0.GObject.ParamSpecClass

        /**
         * the parent class
         * @field
         */
        g_type_class: TypeClass;
        /**
         * the #GValue type for this parameter
         * @field
         */
        value_type: GType;
        finalize: (pspec: ParamSpec) => void;
        value_set_default: (pspec: ParamSpec, value: any) => void;
        value_validate: (pspec: ParamSpec, value: any) => boolean;
        values_cmp: (pspec: ParamSpec, value1: any, value2: any) => number;
        value_is_valid: (pspec: ParamSpec, value: any) => boolean;
    }

    /**
     * The class structure for the GParamSpec type.
     * Normally, GParamSpec classes are filled by
     * g_param_type_register_static().
     * @record
     */
    abstract class ParamSpecClass {
        // Own properties of GObject-2.0.GObject.ParamSpecClass

        static name: string;
    }

    interface ParamSpecPool {
        // Owm methods of GObject-2.0.GObject.ParamSpecPool

        /**
         * Inserts a #GParamSpec in the pool.
         * @param pspec the #GParamSpec to insert
         * @param owner_type a #GType identifying the owner of `pspec`
         */
        insert(pspec: ParamSpec, owner_type: GType): void;
        /**
         * Gets an array of all #GParamSpecs owned by `owner_type` in
         * the pool.
         * @param owner_type the owner to look for
         * @returns a newly          allocated array containing pointers to all #GParamSpecs          owned by @owner_type in the pool
         */
        list(owner_type: GType): ParamSpec[];
        /**
         * Gets an #GList of all #GParamSpecs owned by `owner_type` in
         * the pool.
         * @param owner_type the owner to look for
         * @returns a          #GList of all #GParamSpecs owned by @owner_type in          the pool#GParamSpecs.
         */
        list_owned(owner_type: GType): ParamSpec[];
        /**
         * Looks up a #GParamSpec in the pool.
         * @param param_name the name to look for
         * @param owner_type the owner to look for
         * @param walk_ancestors If %TRUE, also try to find a #GParamSpec with `param_name`  owned by an ancestor of `owner_type`.
         * @returns The found #GParamSpec, or %NULL if no matching #GParamSpec was found.
         */
        lookup(
            param_name: string | null,
            owner_type: GType,
            walk_ancestors: boolean
        ): ParamSpec | null;
        /**
         * Removes a #GParamSpec from the pool.
         * @param pspec the #GParamSpec to remove
         */
        remove(pspec: ParamSpec): void;
    }

    /**
     * A #GParamSpecPool maintains a collection of #GParamSpecs which can be
     * quickly accessed by owner and name.
     *
     * The implementation of the #GObject property system uses such a pool to
     * store the #GParamSpecs of the properties all object types.
     * @record
     */
    class ParamSpecPool {
        // Own properties of GObject-2.0.GObject.ParamSpecPool

        static name: string;
    }

    interface ParamSpecTypeInfo {
        // Own fields of GObject-2.0.GObject.ParamSpecTypeInfo

        /**
         * Size of the instance (object) structure.
         * @field
         */
        instance_size: number;
        /**
         * Prior to GLib 2.10, it specified the number of pre-allocated (cached) instances to reserve memory for (0 indicates no caching). Since GLib 2.10, it is ignored, since instances are allocated with the [slice allocator][glib-Memory-Slices] now.
         * @field
         */
        n_preallocs: number;
        instance_init: (pspec: ParamSpec) => void;
        /**
         * The #GType of values conforming to this #GParamSpec
         * @field
         */
        value_type: GType;
        finalize: (pspec: ParamSpec) => void;
        value_set_default: (pspec: ParamSpec, value: any) => void;
        value_validate: (pspec: ParamSpec, value: any) => boolean;
        values_cmp: (pspec: ParamSpec, value1: any, value2: any) => number;
    }

    /**
     * This structure is used to provide the type system with the information
     * required to initialize and destruct (finalize) a parameter's class and
     * instances thereof.
     *
     * The initialized structure is passed to the g_param_type_register_static()
     * The type system will perform a deep copy of this structure, so its memory
     * does not need to be persistent across invocation of
     * g_param_type_register_static().
     * @record
     */
    class ParamSpecTypeInfo {
        // Own properties of GObject-2.0.GObject.ParamSpecTypeInfo

        static name: string;
    }

    interface Parameter {
        // Own fields of GObject-2.0.GObject.Parameter

        /**
         * the parameter name
         * @field
         */
        name: string | null;
        /**
         * the parameter value
         * @field
         */
        value: any;
    }

    /**
     * The GParameter struct is an auxiliary structure used
     * to hand parameter name/value pairs to g_object_newv().
     * @record
     */
    class Parameter {
        // Own properties of GObject-2.0.GObject.Parameter

        static name: string;
    }

    interface SignalInvocationHint {
        // Own fields of GObject-2.0.GObject.SignalInvocationHint

        /**
         * The signal id of the signal invoking the callback
         * @field
         */
        signal_id: number;
        /**
         * The detail passed on for this emission
         * @field
         */
        detail: GLib.Quark;
        /**
         * The stage the signal emission is currently in, this
         *  field will contain one of %G_SIGNAL_RUN_FIRST,
         *  %G_SIGNAL_RUN_LAST or %G_SIGNAL_RUN_CLEANUP and %G_SIGNAL_ACCUMULATOR_FIRST_RUN.
         *  %G_SIGNAL_ACCUMULATOR_FIRST_RUN is only set for the first run of the accumulator
         *  function for a signal emission.
         * @field
         */
        run_type: SignalFlags;
    }

    /**
     * The #GSignalInvocationHint structure is used to pass on additional information
     * to callbacks during a signal emission.
     * @record
     */
    class SignalInvocationHint {
        // Own properties of GObject-2.0.GObject.SignalInvocationHint

        static name: string;
    }

    interface SignalQuery {
        // Own fields of GObject-2.0.GObject.SignalQuery

        /**
         * The signal id of the signal being queried, or 0 if the
         *  signal to be queried was unknown.
         * @field
         */
        signal_id: number;
        /**
         * The signal name.
         * @field
         */
        signal_name: string | null;
        /**
         * The interface/instance type that this signal can be emitted for.
         * @field
         */
        itype: GType;
        /**
         * The signal flags as passed in to g_signal_new().
         * @field
         */
        signal_flags: SignalFlags;
        /**
         * The return type for user callbacks.
         * @field
         */
        return_type: GType;
        /**
         * The number of parameters that user callbacks take.
         * @field
         */
        n_params: number;
        /**
         * The individual parameter types for
         *  user callbacks, note that the effective callback signature is:
         *
         * ```c
         *  `return_type` callback (#gpointer     data1,
         *  [param_types param_names,]
         *  gpointer     data2);
         *  ```
         *
         * @field
         */
        param_types: GType[];
    }

    /**
     * A structure holding in-depth information for a specific signal.
     *
     * See also: g_signal_query()
     * @record
     */
    class SignalQuery {
        // Own properties of GObject-2.0.GObject.SignalQuery

        static name: string;
    }

    interface TypeClass {
        // Owm methods of GObject-2.0.GObject.TypeClass

        /**
         * Registers a private structure for an instantiatable type.
         *
         * When an object is allocated, the private structures for
         * the type and all of its parent types are allocated
         * sequentially in the same memory block as the public
         * structures, and are zero-filled.
         *
         * Note that the accumulated size of the private structures of
         * a type and all its parent types cannot exceed 64 KiB.
         *
         * This function should be called in the type's class_init() function.
         * The private structure can be retrieved using the
         * G_TYPE_INSTANCE_GET_PRIVATE() macro.
         *
         * The following example shows attaching a private structure
         * MyObjectPrivate to an object MyObject defined in the standard
         * GObject fashion in the type's class_init() function.
         *
         * Note the use of a structure member "priv" to avoid the overhead
         * of repeatedly calling MY_OBJECT_GET_PRIVATE().
         *
         *
         * ```c
         * typedef struct _MyObject        MyObject;
         * typedef struct _MyObjectPrivate MyObjectPrivate;
         *
         * struct _MyObject {
         *  GObject parent;
         *
         *  MyObjectPrivate *priv;
         * };
         *
         * struct _MyObjectPrivate {
         *   int some_field;
         * };
         *
         * static void
         * my_object_class_init (MyObjectClass *klass)
         * {
         *   g_type_class_add_private (klass, sizeof (MyObjectPrivate));
         * }
         *
         * static void
         * my_object_init (MyObject *my_object)
         * {
         *   my_object->priv = G_TYPE_INSTANCE_GET_PRIVATE (my_object,
         *                                                  MY_TYPE_OBJECT,
         *                                                  MyObjectPrivate);
         *   // my_object->priv->some_field will be automatically initialised to 0
         * }
         *
         * static int
         * my_object_get_some_field (MyObject *my_object)
         * {
         *   MyObjectPrivate *priv;
         *
         *   g_return_val_if_fail (MY_IS_OBJECT (my_object), 0);
         *
         *   priv = my_object->priv;
         *
         *   return priv->some_field;
         * }
         * ```
         *
         * @param private_size size of private structure
         */
        add_private(private_size: number): void;
        get_private(private_type: GType): any | null;
        /**
         * This is a convenience function often needed in class initializers.
         * It returns the class structure of the immediate parent type of the
         * class passed in.  Since derived classes hold a reference count on
         * their parent classes as long as they are instantiated, the returned
         * class will always exist.
         *
         * This function is essentially equivalent to:
         * g_type_class_peek (g_type_parent (G_TYPE_FROM_CLASS (g_class)))
         * @returns the parent class     of @g_class
         */
        peek_parent(): TypeClass;
        /**
         * Decrements the reference count of the class structure being passed in.
         * Once the last reference count of a class has been released, classes
         * may be finalized by the type system, so further dereferencing of a
         * class pointer after g_type_class_unref() are invalid.
         */
        unref(): void;
    }

    /**
     * An opaque structure used as the base of all classes.
     * @record
     */
    class TypeClass {
        // Own properties of GObject-2.0.GObject.TypeClass

        static name: string;

        // Constructors of GObject-2.0.GObject.TypeClass

        static adjust_private_offset(
            g_class: any | null,
            private_size_or_offset: number
        ): void;
        /**
         * This function is essentially the same as g_type_class_ref(),
         * except that the classes reference count isn't incremented.
         * As a consequence, this function may return %NULL if the class
         * of the type passed in does not currently exist (hasn't been
         * referenced before).
         * @param type type ID of a classed type
         * @returns the #GTypeClass     structure for the given type ID or %NULL if the class does not     currently exist
         */
        static peek(type: GType): TypeClass;
        /**
         * A more efficient version of g_type_class_peek() which works only for
         * static types.
         * @param type type ID of a classed type
         * @returns the #GTypeClass     structure for the given type ID or %NULL if the class does not     currently exist or is dynamically loaded
         */
        static peek_static(type: GType): TypeClass;
        /**
         * Increments the reference count of the class structure belonging to
         * `type`. This function will demand-create the class if it doesn't
         * exist already.
         * @param type type ID of a classed type
         * @returns the #GTypeClass     structure for the given type ID
         */
        static ref(type: GType): TypeClass;
    }

    interface TypeFundamentalInfo {
        // Own fields of GObject-2.0.GObject.TypeFundamentalInfo

        /**
         * #GTypeFundamentalFlags describing the characteristics of the fundamental type
         * @field
         */
        type_flags: TypeFundamentalFlags;
    }

    /**
     * A structure that provides information to the type system which is
     * used specifically for managing fundamental types.
     * @record
     */
    class TypeFundamentalInfo {
        // Own properties of GObject-2.0.GObject.TypeFundamentalInfo

        static name: string;
    }

    interface TypeInfo {
        // Own fields of GObject-2.0.GObject.TypeInfo

        /**
         * Size of the class structure (required for interface, classed and instantiatable types)
         * @field
         */
        class_size: number;
        /**
         * Location of the base initialization function (optional)
         * @field
         */
        base_init: BaseInitFunc;
        /**
         * Location of the base finalization function (optional)
         * @field
         */
        base_finalize: BaseFinalizeFunc;
        /**
         * Location of the class initialization function for
         *  classed and instantiatable types. Location of the default vtable
         *  inititalization function for interface types. (optional) This function
         *  is used both to fill in virtual functions in the class or default vtable,
         *  and to do type-specific setup such as registering signals and object
         *  properties.
         * @field
         */
        class_init: ClassInitFunc;
        /**
         * Location of the class finalization function for
         *  classed and instantiatable types. Location of the default vtable
         *  finalization function for interface types. (optional)
         * @field
         */
        class_finalize: ClassFinalizeFunc;
        /**
         * User-supplied data passed to the class init/finalize functions
         * @field
         */
        class_data: any;
        /**
         * Size of the instance (object) structure (required for instantiatable types only)
         * @field
         */
        instance_size: number;
        /**
         * Prior to GLib 2.10, it specified the number of pre-allocated (cached) instances to reserve memory for (0 indicates no caching). Since GLib 2.10 this field is ignored.
         * @field
         */
        n_preallocs: number;
        /**
         * Location of the instance initialization function (optional, for instantiatable types only)
         * @field
         */
        instance_init: InstanceInitFunc;
        /**
         * A #GTypeValueTable function table for generic handling of GValues
         *  of this type (usually only useful for fundamental types)
         * @field
         */
        value_table: TypeValueTable;
    }

    /**
     * This structure is used to provide the type system with the information
     * required to initialize and destruct (finalize) a type's class and
     * its instances.
     *
     * The initialized structure is passed to the g_type_register_static() function
     * (or is copied into the provided #GTypeInfo structure in the
     * g_type_plugin_complete_type_info()). The type system will perform a deep
     * copy of this structure, so its memory does not need to be persistent
     * across invocation of g_type_register_static().
     * @record
     */
    class TypeInfo {
        // Own properties of GObject-2.0.GObject.TypeInfo

        static name: string;
    }

    interface TypeInstance {
        // Owm methods of GObject-2.0.GObject.TypeInstance

        get_private(private_type: GType): any | null;
    }

    /**
     * An opaque structure used as the base of all type instances.
     * @record
     */
    class TypeInstance {
        // Own properties of GObject-2.0.GObject.TypeInstance

        static name: string;
    }

    interface TypeInterface {
        // Owm methods of GObject-2.0.GObject.TypeInterface

        /**
         * Returns the corresponding #GTypeInterface structure of the parent type
         * of the instance type to which `g_iface` belongs. This is useful when
         * deriving the implementation of an interface from the parent type and
         * then possibly overriding some methods.
         * @returns the     corresponding #GTypeInterface structure of the parent type of the     instance type to which @g_iface belongs, or %NULL if the parent     type doesn't conform to the interface
         */
        peek_parent(): TypeInterface;
    }

    /**
     * An opaque structure used as the base of all interface types.
     * @record
     */
    class TypeInterface {
        // Own properties of GObject-2.0.GObject.TypeInterface

        static name: string;

        // Constructors of GObject-2.0.GObject.TypeInterface

        /**
         * Adds `prerequisite_type` to the list of prerequisites of `interface_type`.
         * This means that any type implementing `interface_type` must also implement
         * `prerequisite_type`. Prerequisites can be thought of as an alternative to
         * interface derivation (which GType doesn't support). An interface can have
         * at most one instantiatable prerequisite type.
         * @param interface_type #GType value of an interface type
         * @param prerequisite_type #GType value of an interface or instantiatable type
         */
        static add_prerequisite(
            interface_type: GType,
            prerequisite_type: GType
        ): void;
        /**
         * Returns the #GTypePlugin structure for the dynamic interface
         * `interface_type` which has been added to `instance_type,` or %NULL
         * if `interface_type` has not been added to `instance_type` or does
         * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
         * @param instance_type #GType of an instantiatable type
         * @param interface_type #GType of an interface type
         * @returns the #GTypePlugin for the dynamic     interface @interface_type of @instance_type
         */
        static get_plugin(
            instance_type: GType,
            interface_type: GType
        ): TypePlugin;
        /**
         * Returns the most specific instantiatable prerequisite of an
         * interface type. If the interface type has no instantiatable
         * prerequisite, %G_TYPE_INVALID is returned.
         *
         * See g_type_interface_add_prerequisite() for more information
         * about prerequisites.
         * @param interface_type an interface type
         * @returns the instantiatable prerequisite type or %G_TYPE_INVALID if none
         */
        static instantiatable_prerequisite(interface_type: GType): GType;
        /**
         * Returns the #GTypeInterface structure of an interface to which the
         * passed in class conforms.
         * @param instance_class a #GTypeClass structure
         * @param iface_type an interface ID which this class conforms to
         * @returns the #GTypeInterface     structure of @iface_type if implemented by @instance_class, %NULL     otherwise
         */
        static peek(
            instance_class: TypeClass,
            iface_type: GType
        ): TypeInterface;
        /**
         * Returns the prerequisites of an interfaces type.
         * @param interface_type an interface type
         * @returns a     newly-allocated zero-terminated array of #GType containing     the prerequisites of @interface_type
         */
        static prerequisites(interface_type: GType): GType[];
    }

    interface TypeModuleClass {
        // Own fields of GObject-2.0.GObject.TypeModuleClass

        /**
         * the parent class
         * @field
         */
        parent_class: ObjectClass;
        load: (module: TypeModule) => boolean;
        unload: (module: TypeModule) => void;
        reserved1: () => void;
        reserved2: () => void;
        reserved3: () => void;
        reserved4: () => void;
    }

    /**
     * In order to implement dynamic loading of types based on #GTypeModule,
     * the `load` and `unload` functions in #GTypeModuleClass must be implemented.
     * @record
     */
    abstract class TypeModuleClass {
        // Own properties of GObject-2.0.GObject.TypeModuleClass

        static name: string;
    }

    interface TypePluginClass {
        // Own fields of GObject-2.0.GObject.TypePluginClass

        /**
         * Increases the use count of the plugin.
         * @field
         */
        use_plugin: TypePluginUse;
        /**
         * Decreases the use count of the plugin.
         * @field
         */
        unuse_plugin: TypePluginUnuse;
        /**
         * Fills in the #GTypeInfo and
         *  #GTypeValueTable structs for the type. The structs are initialized
         *  with `memset(s, 0, sizeof (s))` before calling this function.
         * @field
         */
        complete_type_info: TypePluginCompleteTypeInfo;
        /**
         * Fills in missing parts of the #GInterfaceInfo
         *  for the interface. The structs is initialized with
         *  `memset(s, 0, sizeof (s))` before calling this function.
         * @field
         */
        complete_interface_info: TypePluginCompleteInterfaceInfo;
    }

    /**
     * The #GTypePlugin interface is used by the type system in order to handle
     * the lifecycle of dynamically loaded types.
     * @record
     */
    class TypePluginClass {
        // Own properties of GObject-2.0.GObject.TypePluginClass

        static name: string;
    }

    interface TypeQuery {
        // Own fields of GObject-2.0.GObject.TypeQuery

        /**
         * the #GType value of the type
         * @field
         */
        type: GType;
        /**
         * the name of the type
         * @field
         */
        type_name: string | null;
        /**
         * the size of the class structure
         * @field
         */
        class_size: number;
        /**
         * the size of the instance structure
         * @field
         */
        instance_size: number;
    }

    /**
     * A structure holding information for a specific type.
     *
     * See also: g_type_query()
     * @record
     */
    class TypeQuery {
        // Own properties of GObject-2.0.GObject.TypeQuery

        static name: string;
    }

    interface TypeValueTable {
        // Own fields of GObject-2.0.GObject.TypeValueTable

        /**
         * Function to initialize a GValue
         * @field
         */
        value_init: TypeValueInitFunc;
        /**
         * Function to free a GValue
         * @field
         */
        value_free: TypeValueFreeFunc;
        /**
         * Function to copy a GValue
         * @field
         */
        value_copy: TypeValueCopyFunc;
        /**
         * Function to peek the contents of a GValue if they fit
         *   into a pointer
         * @field
         */
        value_peek_pointer: TypeValuePeekPointerFunc;
        /**
         * A string format describing how to collect the contents of
         *   this value bit-by-bit. Each character in the format represents
         *   an argument to be collected, and the characters themselves indicate
         *   the type of the argument. Currently supported arguments are:
         *    - `'i'`: Integers, passed as `collect_values[].v_int`
         *    - `'l'`: Longs, passed as `collect_values[].v_long`
         *    - `'d'`: Doubles, passed as `collect_values[].v_double`
         *    - `'p'`: Pointers, passed as `collect_values[].v_pointer`
         *   It should be noted that for variable argument list construction,
         *   ANSI C promotes every type smaller than an integer to an int, and
         *   floats to doubles. So for collection of short int or char, `'i'`
         *   needs to be used, and for collection of floats `'d'`.
         * @field
         */
        collect_format: string | null;
        /**
         * Function to initialize a GValue from the values
         *   collected from variadic arguments
         * @field
         */
        collect_value: TypeValueCollectFunc;
        /**
         * Format description of the arguments to collect for `lcopy_value,`
         *   analogous to `collect_format`. Usually, `lcopy_format` string consists
         *   only of `'p'`s to provide lcopy_value() with pointers to storage locations.
         * @field
         */
        lcopy_format: string | null;
        /**
         * Function to store the contents of a value into the
         *   locations collected from variadic arguments
         * @field
         */
        lcopy_value: TypeValueLCopyFunc;
    }

    /**
     * The #GTypeValueTable provides the functions required by the #GValue
     * implementation, to serve as a container for values of a type.
     * @record
     */
    class TypeValueTable {
        // Own properties of GObject-2.0.GObject.TypeValueTable

        static name: string;
    }

    interface Value {
        // Own fields of GObject-2.0.GObject.Value

        data: _Value__data__union[];

        // Owm methods of GObject-2.0.GObject.Value

        /**
         * Copies the value of `src_value` into `dest_value`.
         * @param dest_value An initialized #GValue structure of the same type as `src_value`.
         */
        copy(dest_value: any): void;
        /**
         * Get the contents of a %G_TYPE_OBJECT derived #GValue, increasing
         * its reference count. If the contents of the #GValue are %NULL, then
         * %NULL will be returned.
         * @returns object content of @value,          should be unreferenced when no longer needed.
         */
        dup_object(): Object | null;
        /**
         * Get a copy the contents of a %G_TYPE_STRING #GValue.
         * @returns a newly allocated copy of the string content of @value
         */
        dup_string(): string | null;
        /**
         * Get the contents of a variant #GValue, increasing its refcount. The returned
         * #GVariant is never floating.
         * @returns variant contents of @value (may be %NULL);    should be unreffed using g_variant_unref() when no longer needed
         */
        dup_variant(): GLib.Variant | null;
        /**
         * Determines if `value` will fit inside the size of a pointer value.
         * This is an internal function introduced mainly for C marshallers.
         * @returns %TRUE if @value will fit inside a pointer value.
         */
        fits_pointer(): boolean;
        /**
         * Get the contents of a %G_TYPE_BOOLEAN #GValue.
         * @returns boolean contents of @value
         */
        get_boolean(): boolean;
        /**
         * Get the contents of a %G_TYPE_BOXED derived #GValue.
         * @returns boxed contents of @value
         */
        get_boxed(): any | null;
        /**
         * Do not use this function; it is broken on platforms where the %char
         * type is unsigned, such as ARM and PowerPC.  See g_value_get_schar().
         *
         * Get the contents of a %G_TYPE_CHAR #GValue.
         * @returns character contents of @value
         */
        get_char(): number;
        /**
         * Get the contents of a %G_TYPE_DOUBLE #GValue.
         * @returns double contents of @value
         */
        get_double(): number;
        /**
         * Get the contents of a %G_TYPE_ENUM #GValue.
         * @returns enum contents of @value
         */
        get_enum(): number;
        /**
         * Get the contents of a %G_TYPE_FLAGS #GValue.
         * @returns flags contents of @value
         */
        get_flags(): number;
        /**
         * Get the contents of a %G_TYPE_FLOAT #GValue.
         * @returns float contents of @value
         */
        get_float(): number;
        /**
         * Get the contents of a %G_TYPE_GTYPE #GValue.
         * @returns the #GType stored in @value
         */
        get_gtype(): GType;
        /**
         * Get the contents of a %G_TYPE_INT #GValue.
         * @returns integer contents of @value
         */
        get_int(): number;
        /**
         * Get the contents of a %G_TYPE_INT64 #GValue.
         * @returns 64bit integer contents of @value
         */
        get_int64(): number;
        /**
         * Get the contents of a %G_TYPE_LONG #GValue.
         * @returns long integer contents of @value
         */
        get_long(): number;
        /**
         * Get the contents of a %G_TYPE_OBJECT derived #GValue.
         * @returns object contents of @value
         */
        get_object(): Object | null;
        /**
         * Get the contents of a %G_TYPE_PARAM #GValue.
         * @returns #GParamSpec content of @value
         */
        get_param(): ParamSpec;
        /**
         * Get the contents of a pointer #GValue.
         * @returns pointer contents of @value
         */
        get_pointer(): any | null;
        /**
         * Get the contents of a %G_TYPE_CHAR #GValue.
         * @returns signed 8 bit integer contents of @value
         */
        get_schar(): number;
        /**
         * Get the contents of a %G_TYPE_STRING #GValue.
         * @returns string content of @value
         */
        get_string(): string | null;
        /**
         * Get the contents of a %G_TYPE_UCHAR #GValue.
         * @returns unsigned character contents of @value
         */
        get_uchar(): number;
        /**
         * Get the contents of a %G_TYPE_UINT #GValue.
         * @returns unsigned integer contents of @value
         */
        get_uint(): number;
        /**
         * Get the contents of a %G_TYPE_UINT64 #GValue.
         * @returns unsigned 64bit integer contents of @value
         */
        get_uint64(): number;
        /**
         * Get the contents of a %G_TYPE_ULONG #GValue.
         * @returns unsigned long integer contents of @value
         */
        get_ulong(): number;
        /**
         * Get the contents of a variant #GValue.
         * @returns variant contents of @value (may be %NULL)
         */
        get_variant(): GLib.Variant | null;
        /**
         * Initializes `value` with the default value of `type`.
         * @param g_type Type the #GValue should hold values of.
         * @returns the #GValue structure that has been passed in
         */
        init(g_type: GType): any;
        /**
         * Initializes and sets `value` from an instantiatable type via the
         * value_table's collect_value() function.
         *
         * Note: The `value` will be initialised with the exact type of
         * `instance`.  If you wish to set the `value'`s type to a different GType
         * (such as a parent class GType), you need to manually call
         * g_value_init() and g_value_set_instance().
         * @param instance the instance
         */
        init_from_instance(instance: TypeInstance): void;
        /**
         * Returns the value contents as pointer. This function asserts that
         * g_value_fits_pointer() returned %TRUE for the passed in value.
         * This is an internal function introduced mainly for C marshallers.
         * @returns the value contents as pointer
         */
        peek_pointer(): any | null;
        /**
         * Clears the current value in `value` and resets it to the default value
         * (as if the value had just been initialized).
         * @returns the #GValue structure that has been passed in
         */
        reset(): any;
        /**
         * Set the contents of a %G_TYPE_BOOLEAN #GValue to `v_boolean`.
         * @param v_boolean boolean value to be set
         */
        set_boolean(v_boolean: boolean): void;
        /**
         * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
         * @param v_boxed boxed value to be set
         */
        set_boxed(v_boxed: any | null): void;
        /**
         * This is an internal function introduced mainly for C marshallers.
         * @param v_boxed duplicated unowned boxed value to be set
         */
        set_boxed_take_ownership(v_boxed: any | null): void;
        /**
         * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
         * @param v_char character value to be set
         */
        set_char(v_char: number): void;
        /**
         * Set the contents of a %G_TYPE_DOUBLE #GValue to `v_double`.
         * @param v_double double value to be set
         */
        set_double(v_double: number): void;
        /**
         * Set the contents of a %G_TYPE_ENUM #GValue to `v_enum`.
         * @param v_enum enum value to be set
         */
        set_enum(v_enum: number): void;
        /**
         * Set the contents of a %G_TYPE_FLAGS #GValue to `v_flags`.
         * @param v_flags flags value to be set
         */
        set_flags(v_flags: number): void;
        /**
         * Set the contents of a %G_TYPE_FLOAT #GValue to `v_float`.
         * @param v_float float value to be set
         */
        set_float(v_float: number): void;
        /**
         * Set the contents of a %G_TYPE_GTYPE #GValue to `v_gtype`.
         * @param v_gtype #GType to be set
         */
        set_gtype(v_gtype: GType): void;
        /**
         * Sets `value` from an instantiatable type via the
         * value_table's collect_value() function.
         * @param instance the instance
         */
        set_instance(instance: any | null): void;
        /**
         * Set the contents of a %G_TYPE_INT #GValue to `v_int`.
         * @param v_int integer value to be set
         */
        set_int(v_int: number): void;
        /**
         * Set the contents of a %G_TYPE_INT64 #GValue to `v_int6`4.
         * @param v_int64 64bit integer value to be set
         */
        set_int64(v_int64: number): void;
        /**
         * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.  The string is
         * assumed to be static and interned (canonical, for example from
         * g_intern_string()), and is thus not duplicated when setting the #GValue.
         * @param v_string static string to be set
         */
        set_interned_string(v_string: string | null): void;
        /**
         * Set the contents of a %G_TYPE_LONG #GValue to `v_long`.
         * @param v_long long integer value to be set
         */
        set_long(v_long: number): void;
        /**
         * Set the contents of a %G_TYPE_OBJECT derived #GValue to `v_object`.
         *
         * g_value_set_object() increases the reference count of `v_object`
         * (the #GValue holds a reference to `v_object)`.  If you do not wish
         * to increase the reference count of the object (i.e. you wish to
         * pass your current reference to the #GValue because you no longer
         * need it), use g_value_take_object() instead.
         *
         * It is important that your #GValue holds a reference to `v_object` (either its
         * own, or one it has taken) to ensure that the object won't be destroyed while
         * the #GValue still exists).
         * @param v_object object value to be set
         */
        set_object(v_object: Object | null): void;
        /**
         * Set the contents of a %G_TYPE_PARAM #GValue to `param`.
         * @param param the #GParamSpec to be set
         */
        set_param(param: ParamSpec | null): void;
        /**
         * Set the contents of a pointer #GValue to `v_pointer`.
         * @param v_pointer pointer value to be set
         */
        set_pointer(v_pointer: any | null): void;
        /**
         * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
         * @param v_char signed 8 bit integer to be set
         */
        set_schar(v_char: number): void;
        /**
         * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
         *
         * The boxed value is assumed to be static, and is thus not duplicated
         * when setting the #GValue.
         * @param v_boxed static boxed value to be set
         */
        set_static_boxed(v_boxed: any | null): void;
        /**
         * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.
         * The string is assumed to be static, and is thus not duplicated
         * when setting the #GValue.
         *
         * If the the string is a canonical string, using g_value_set_interned_string()
         * is more appropriate.
         * @param v_string static string to be set
         */
        set_static_string(v_string: string | null): void;
        /**
         * Set the contents of a %G_TYPE_STRING #GValue to a copy of `v_string`.
         * @param v_string caller-owned string to be duplicated for the #GValue
         */
        set_string(v_string: string | null): void;
        /**
         * This is an internal function introduced mainly for C marshallers.
         * @param v_string duplicated unowned string to be set
         */
        set_string_take_ownership(v_string: string | null): void;
        /**
         * Set the contents of a %G_TYPE_UCHAR #GValue to `v_uchar`.
         * @param v_uchar unsigned character value to be set
         */
        set_uchar(v_uchar: number): void;
        /**
         * Set the contents of a %G_TYPE_UINT #GValue to `v_uint`.
         * @param v_uint unsigned integer value to be set
         */
        set_uint(v_uint: number): void;
        /**
         * Set the contents of a %G_TYPE_UINT64 #GValue to `v_uint6`4.
         * @param v_uint64 unsigned 64bit integer value to be set
         */
        set_uint64(v_uint64: number): void;
        /**
         * Set the contents of a %G_TYPE_ULONG #GValue to `v_ulong`.
         * @param v_ulong unsigned long integer value to be set
         */
        set_ulong(v_ulong: number): void;
        /**
         * Set the contents of a variant #GValue to `variant`.
         * If the variant is floating, it is consumed.
         * @param variant a #GVariant, or %NULL
         */
        set_variant(variant: GLib.Variant | null): void;
        /**
         * Sets the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`
         * and takes over the ownership of the caller’s reference to `v_boxed;`
         * the caller doesn’t have to unref it any more.
         * @param v_boxed duplicated unowned boxed value to be set
         */
        take_boxed(v_boxed: any | null): void;
        /**
         * Sets the contents of a %G_TYPE_STRING #GValue to `v_string`.
         * @param v_string string to take ownership of
         */
        take_string(v_string: string | null): void;
        /**
         * Set the contents of a variant #GValue to `variant,` and takes over
         * the ownership of the caller's reference to `variant;`
         * the caller doesn't have to unref it any more (i.e. the reference
         * count of the variant is not increased).
         *
         * If `variant` was floating then its floating reference is converted to
         * a hard reference.
         *
         * If you want the #GValue to hold its own reference to `variant,` use
         * g_value_set_variant() instead.
         *
         * This is an internal function introduced mainly for C marshallers.
         * @param variant a #GVariant, or %NULL
         */
        take_variant(variant: GLib.Variant | null): void;
        /**
         * Tries to cast the contents of `src_value` into a type appropriate
         * to store in `dest_value,` e.g. to transform a %G_TYPE_INT value
         * into a %G_TYPE_FLOAT value. Performing transformations between
         * value types might incur precision lossage. Especially
         * transformations into strings might reveal seemingly arbitrary
         * results and shouldn't be relied upon for production code (such
         * as rcfile value or object property serialization).
         * @param dest_value Target value.
         * @returns Whether a transformation rule was found and could be applied.  Upon failing transformations, @dest_value is left untouched.
         */
        transform(dest_value: any): boolean;
        /**
         * Clears the current value in `value` (if any) and "unsets" the type,
         * this releases all resources associated with this GValue. An unset
         * value is the same as an uninitialized (zero-filled) #GValue
         * structure.
         */
        unset(): void;
    }

    /**
     * An opaque structure used to hold different types of values.
     *
     * The data within the structure has protected scope: it is accessible only
     * to functions within a #GTypeValueTable structure, or implementations of
     * the g_value_*() API. That is, code portions which implement new fundamental
     * types.
     *
     * #GValue users cannot make any assumptions about how data is stored
     * within the 2 element `data` union, and the `g_type` member should
     * only be accessed through the G_VALUE_TYPE() macro.
     * @record
     */
    class Value {
        // Own properties of GObject-2.0.GObject.Value

        static name: string;

        // Constructors of GObject-2.0.GObject.Value

        /**
         * Returns whether a #GValue of type `src_type` can be copied into
         * a #GValue of type `dest_type`.
         * @param src_type source type to be copied.
         * @param dest_type destination type for copying.
         * @returns %TRUE if g_value_copy() is possible with @src_type and @dest_type.
         */
        static type_compatible(src_type: GType, dest_type: GType): boolean;
        /**
         * Check whether g_value_transform() is able to transform values
         * of type `src_type` into values of type `dest_type`. Note that for
         * the types to be transformable, they must be compatible or a
         * transformation function must be registered.
         * @param src_type Source type.
         * @param dest_type Target type.
         * @returns %TRUE if the transformation is possible, %FALSE otherwise.
         */
        static type_transformable(src_type: GType, dest_type: GType): boolean;
    }

    interface ValueArray {
        // Own fields of GObject-2.0.GObject.ValueArray

        /**
         * number of values contained in the array
         * @field
         */
        n_values: number;
        /**
         * array of values
         * @field
         */
        values: any;

        // Owm methods of GObject-2.0.GObject.ValueArray

        /**
         * Insert a copy of `value` as last element of `value_array`. If `value` is
         * %NULL, an uninitialized value is appended.
         * @param value #GValue to copy into #GValueArray, or %NULL
         * @returns the #GValueArray passed in as @value_array
         */
        append(value: any | null): ValueArray;
        /**
         * Construct an exact copy of a #GValueArray by duplicating all its
         * contents.
         * @returns Newly allocated copy of #GValueArray
         */
        copy(): ValueArray;
        /**
         * Return a pointer to the value at `index_` containd in `value_array`.
         * @param index_ index of the value of interest
         * @returns pointer to a value at @index_ in @value_array
         */
        get_nth(index_: number): any;
        /**
         * Insert a copy of `value` at specified position into `value_array`. If `value`
         * is %NULL, an uninitialized value is inserted.
         * @param index_ insertion position, must be <= value_array->;n_values
         * @param value #GValue to copy into #GValueArray, or %NULL
         * @returns the #GValueArray passed in as @value_array
         */
        insert(index_: number, value: any | null): ValueArray;
        /**
         * Insert a copy of `value` as first element of `value_array`. If `value` is
         * %NULL, an uninitialized value is prepended.
         * @param value #GValue to copy into #GValueArray, or %NULL
         * @returns the #GValueArray passed in as @value_array
         */
        prepend(value: any | null): ValueArray;
        /**
         * Remove the value at position `index_` from `value_array`.
         * @param index_ position of value to remove, which must be less than     `value_array->`n_values
         * @returns the #GValueArray passed in as @value_array
         */
        remove(index_: number): ValueArray;
        /**
         * Sort `value_array` using `compare_func` to compare the elements according
         * to the semantics of #GCompareDataFunc.
         *
         * The current implementation uses the same sorting algorithm as standard
         * C qsort() function.
         * @param compare_func function to compare elements
         * @returns the #GValueArray passed in as @value_array
         */
        sort(compare_func: GLib.CompareDataFunc): ValueArray;
    }

    /**
     * A #GValueArray contains an array of #GValue elements.
     * @record
     */
    class ValueArray {
        // Own properties of GObject-2.0.GObject.ValueArray

        static name: string;

        // Constructors of GObject-2.0.GObject.ValueArray

        /**
         * Allocate and initialize a new #GValueArray, optionally preserve space
         * for `n_prealloced` elements. New arrays always contain 0 elements,
         * regardless of the value of `n_prealloced`.
         * @constructor
         * @param n_prealloced number of values to preallocate space for
         * @returns a newly allocated #GValueArray with 0 values
         */
        constructor(n_prealloced: number);
        /**
         * Allocate and initialize a new #GValueArray, optionally preserve space
         * for `n_prealloced` elements. New arrays always contain 0 elements,
         * regardless of the value of `n_prealloced`.
         * @constructor
         * @param n_prealloced number of values to preallocate space for
         * @returns a newly allocated #GValueArray with 0 values
         */
        static new(n_prealloced: number): ValueArray;
    }

    interface WeakRef {}

    /**
     * A structure containing a weak reference to a #GObject.
     *
     * A `GWeakRef` can either be empty (i.e. point to %NULL), or point to an
     * object for as long as at least one "strong" reference to that object
     * exists. Before the object's #GObjectClass.dispose method is called,
     * every #GWeakRef associated with becomes empty (i.e. points to %NULL).
     *
     * Like #GValue, #GWeakRef can be statically allocated, stack- or
     * heap-allocated, or embedded in larger structures.
     *
     * Unlike g_object_weak_ref() and g_object_add_weak_pointer(), this weak
     * reference is thread-safe: converting a weak pointer to a reference is
     * atomic with respect to invalidation of weak pointers to destroyed
     * objects.
     *
     * If the object's #GObjectClass.dispose method results in additional
     * references to the object being held (‘re-referencing’), any #GWeakRefs taken
     * before it was disposed will continue to point to %NULL.  Any #GWeakRefs taken
     * during disposal and after re-referencing, or after disposal has returned due
     * to the re-referencing, will continue to point to the object until its refcount
     * goes back to zero, at which point they too will be invalidated.
     *
     * It is invalid to take a #GWeakRef on an object during #GObjectClass.dispose
     * without first having or creating a strong reference to the object.
     * @record
     */
    class WeakRef {
        // Own properties of GObject-2.0.GObject.WeakRef

        static name: string;
    }

    interface TypeCValue {}

    class TypeCValue {
        // Own properties of GObject-2.0.GObject.TypeCValue

        static name: string;
    }

    interface _Value__data__union {
        // Own fields of GObject-2.0.GObject._Value__data__union

        v_int: number;
        v_uint: number;
        v_long: number;
        v_ulong: number;
        v_int64: number;
        v_uint64: number;
        v_float: number;
        v_double: number;
        v_pointer: any;
    }

    class _Value__data__union {
        // Own properties of GObject-2.0.GObject._Value__data__union

        static name: string;
    }

    type SignalCMarshaller = ClosureMarshal;
    type SignalCVaMarshaller = any;
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

export default GObject;
// END

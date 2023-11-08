/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './json-1.0-import.d.ts';
/**
 * Json-1.0
 */

import type Gio from './gio-2.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';

export namespace Json {
    /**
     * Indicates the content of a node.
     */
    enum NodeType {
        /**
         * The node contains a JSON object
         */
        OBJECT,
        /**
         * The node contains a JSON array
         */
        ARRAY,
        /**
         * The node contains a fundamental type
         */
        VALUE,
        /**
         * Special type, for nodes containing null
         */
        NULL,
    }
    /**
     * Error codes for `JSON_PARSER_ERROR`.
     *
     * This enumeration can be extended at later date
     */
    enum ParserError {
        /**
         * parse error
         */
        PARSE,
        /**
         * unexpected trailing comma
         */
        TRAILING_COMMA,
        /**
         * expected comma
         */
        MISSING_COMMA,
        /**
         * expected colon
         */
        MISSING_COLON,
        /**
         * invalid bareword
         */
        INVALID_BAREWORD,
        /**
         * empty member name (Since: 0.16)
         */
        EMPTY_MEMBER_NAME,
        /**
         * invalid data (Since: 0.18)
         */
        INVALID_DATA,
        /**
         * unknown error
         */
        UNKNOWN,
    }
    /**
     * Error codes for `JSON_PATH_ERROR`.
     *
     * This enumeration can be extended at later date
     */
    enum PathError {
        /**
         * Invalid query
         */
        QUERY,
    }
    /**
     * Error codes for `JSON_READER_ERROR`.
     *
     * This enumeration can be extended at later date
     */
    enum ReaderError {
        /**
         * No array found at the current position
         */
        NO_ARRAY,
        /**
         * Index out of bounds
         */
        INVALID_INDEX,
        /**
         * No object found at the current position
         */
        NO_OBJECT,
        /**
         * Member not found
         */
        INVALID_MEMBER,
        /**
         * No valid node found at the current position
         */
        INVALID_NODE,
        /**
         * The node at the current position does not
         *   hold a value
         */
        NO_VALUE,
        /**
         * The node at the current position does not
         *   hold a value of the desired type
         */
        INVALID_TYPE,
    }
    /**
     * Json major version component (e.g. 1 if `JSON_VERSION` is "1.2.3")
     */
    const MAJOR_VERSION: number;
    /**
     * Json micro version component (e.g. 3 if `JSON_VERSION` is "1.2.3")
     */
    const MICRO_VERSION: number;
    /**
     * Json minor version component (e.g. 2 if `JSON_VERSION` is "1.2.3")
     */
    const MINOR_VERSION: number;
    /**
     * The version of JSON-GLib, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string | null;
    /**
     * Checks whether it is possible to deserialize a `GBoxed` of
     * type `gboxed_type` from a [struct`Json`.Node] of type `node_type`.
     * @param gboxed_type a boxed type
     * @param node_type a node type
     * @returns `TRUE` if the type can be deserialized, and `FALSE` otherwise
     */
    function boxed_can_deserialize(
        gboxed_type: GObject.GType,
        node_type: NodeType
    ): boolean;
    /**
     * Checks whether it is possible to serialize a `GBoxed` of
     * type `gboxed_type` into a [struct`Json`.Node].
     *
     * The type of the node is placed inside `node_type` if the function
     * returns `TRUE`, and it's undefined otherwise.
     * @param gboxed_type a boxed type
     * @returns `TRUE` if the type can be serialized, and `FALSE` otherwise
     */
    function boxed_can_serialize(
        gboxed_type: GObject.GType
    ): [/* returnType */ boolean, /* node_type */ NodeType];
    /**
     * Deserializes the given [struct`Json`.Node] into a `GBoxed` of the given type.
     * @param gboxed_type a boxed type
     * @param node a node
     * @returns the newly allocated boxed data
     */
    function boxed_deserialize(
        gboxed_type: GObject.GType,
        node: Node
    ): any | null;
    /**
     * Serializes a pointer to a `GBoxed` of the given type into a [struct`Json`.Node].
     *
     * If the serialization is not possible, this function will return `NULL`.
     * @param gboxed_type a boxed type
     * @param boxed a pointer to a boxed of type `gboxed_type`
     * @returns a node with the serialized boxed type
     */
    function boxed_serialize(
        gboxed_type: GObject.GType,
        boxed: any | null
    ): Node | null;
    /**
     * Deserializes a JSON data stream and creates an instance of the given
     * type.
     *
     * If the given type implements the [iface`Json`.Serializable] interface, it
     * will be asked to deserialize all the JSON members into their respective
     * properties; otherwise, the default implementation will be used to translate
     * the compatible JSON native types.
     *
     * **Note**: the JSON data stream must be an object.
     *
     * For historical reasons, the `length` argument is unused. The given `data`
     * must be a `NUL`-terminated string.
     * @param gtype the type of the object to construct
     * @param data a JSON data stream
     * @param length length of the data stream (unused)
     * @returns a new object instance of the given   type
     */
    function construct_gobject(
        gtype: GObject.GType,
        data: string | null,
        length: number
    ): GObject.Object | null;
    /**
     * Parses the given string and returns the corresponding JSON tree.
     *
     * If the string is empty, this function will return `NULL`.
     *
     * In case of parsing error, this function returns `NULL` and sets
     * the error appropriately.
     * @param str a valid UTF-8 string containing JSON data
     * @returns the root node of the JSON tree
     */
    function from_string(str: string | null): Node | null;
    /**
     * Creates a new `GObject` instance of the given type, and constructs it
     * using the members of the object in the given node.
     * @param gtype the type of the object to create
     * @param node a node of type `JSON_NODE_OBJECT` describing the   object instance for the given type
     * @returns The newly created instance
     */
    function gobject_deserialize(
        gtype: GObject.GType,
        node: Node
    ): GObject.Object;
    /**
     * Deserializes a JSON data stream and creates an instance of the
     * given type.
     *
     * If the type implements the [iface`Json`.Serializable] interface, it will
     * be asked to deserialize all the JSON members into their respective properties;
     * otherwise, the default implementation will be used to translate the
     * compatible JSON native types.
     *
     * **Note**: the JSON data stream must be an object
     * @param gtype the type of the object to construct
     * @param data a JSON data stream
     * @param length length of the data stream, or -1 if it is `NUL`-terminated
     * @returns a new object instance of the given type
     */
    function gobject_from_data(
        gtype: GObject.GType,
        data: string | null,
        length: number
    ): GObject.Object | null;
    /**
     * Creates a JSON tree representing the passed object instance.
     *
     * Each member of the returned JSON object will map to a property of
     * the object type.
     *
     * The returned JSON tree will be returned as a `JsonNode` with a type
     * of `JSON_NODE_OBJECT`.
     * @param gobject the object to serialize
     * @returns the newly created JSON tree
     */
    function gobject_serialize(gobject: GObject.Object): Node;
    /**
     * Serializes a `GObject` instance into a JSON data stream, iterating
     * recursively over each property.
     *
     * If the given object implements the [iface`Json`.Serializable] interface,
     * it will be asked to serialize all its properties; otherwise, the default
     * implementation will be use to translate the compatible types into
     * JSON native types.
     * @param gobject the object to serialize
     * @returns a JSON data stream representing the given object
     */
    function gobject_to_data(
        gobject: GObject.Object
    ): [/* returnType */ string | null, /* length */ number];
    /**
     * Converts a JSON data structure to a `GVariant`.
     *
     * If `signature` is not `NULL`, it will be used to resolve ambiguous
     * data types.
     *
     * If no error occurs, the resulting `GVariant` is guaranteed to conform
     * to `signature`.
     *
     * If `signature` is not `NULL` but does not represent a valid `GVariant` type
     * string, `NULL` is returned and the `error` is set to
     * `G_IO_ERROR_INVALID_ARGUMENT`.
     *
     * If a `signature` is provided but the JSON structure cannot be mapped to it,
     * `NULL` is returned and the `error` is set to `G_IO_ERROR_INVALID_DATA`.
     *
     * If `signature` is `NULL`, the conversion is done based strictly on the types
     * in the JSON nodes.
     *
     * The returned variant has a floating reference that will need to be sunk
     * by the caller code.
     * @param json_node the node to convert
     * @param signature a valid `GVariant` type string
     * @returns A newly created `GVariant`
     */
    function gvariant_deserialize(
        json_node: Node,
        signature: string | null
    ): GLib.Variant | null;
    /**
     * Converts a JSON string to a `GVariant` value.
     *
     * This function works exactly like [func`Json`.gvariant_deserialize], but
     * takes a JSON encoded string instead.
     *
     * The string is first converted to a [struct`Json`.Node] using
     * [class`Json`.Parser], and then `json_gvariant_deserialize` is called on
     * the node.
     *
     * The returned variant has a floating reference that will need to be sunk
     * by the caller code.
     * @param json A JSON data string
     * @param length The length of `json,` or -1 if `NUL`-terminated
     * @param signature A valid `GVariant` type string
     * @returns A newly created `GVariant`D compliant
     */
    function gvariant_deserialize_data(
        json: string | null,
        length: number,
        signature: string | null
    ): GLib.Variant | null;
    /**
     * Converts `variant` to a JSON tree.
     * @param variant A `GVariant` to convert
     * @returns the root of the JSON data structure   obtained from `variant`
     */
    function gvariant_serialize(variant: GLib.Variant): Node;
    /**
     * Converts `variant` to its JSON encoded string representation.
     *
     * This is a convenience function around [func`Json`.gvariant_serialize], to
     * obtain the JSON tree, and then [class`Json`.Generator] to stringify it.
     * @param variant A #GVariant to convert
     * @returns The JSON encoded string corresponding to   the given variant
     */
    function gvariant_serialize_data(
        variant: GLib.Variant
    ): [/* returnType */ string | null, /* length */ number];
    function parser_error_quark(): GLib.Quark;
    function path_error_quark(): GLib.Quark;
    function reader_error_quark(): GLib.Quark;
    /**
     * Serializes a `GObject` instance into a JSON data stream.
     *
     * If the object implements the [iface`Json`.Serializable] interface, it will be
     * asked to serizalize all its properties; otherwise, the default
     * implementation will be use to translate the compatible types into JSON
     * native types.
     * @param gobject the object to serialize
     * @returns a JSON data stream representing the given object
     */
    function serialize_gobject(
        gobject: GObject.Object
    ): [/* returnType */ string | null, /* length */ number];
    /**
     * Check whether `a` and `b` are equal UTF-8 JSON strings and return an ordering
     * over them in `strcmp()` style.
     * @param a a JSON string
     * @param b another JSON string
     * @returns an integer less than zero if `a < b`, equal to zero if `a == b`, and   greater than zero if `a > b`
     */
    function string_compare(a: string, b: string): number;
    /**
     * Check whether `a` and `b` are equal UTF-8 JSON strings.
     * @param a a JSON string
     * @param b another JSON string
     * @returns `TRUE` if @a and @b are equal; `FALSE` otherwise
     */
    function string_equal(a: string, b: string): boolean;
    /**
     * Calculate a hash value for the given `key` (a UTF-8 JSON string).
     *
     * Note: Member names are compared byte-wise, without applying any Unicode
     * decomposition or normalisation. This is not explicitly mentioned in the JSON
     * standard (ECMA-404), but is assumed.
     * @param key a JSON string to hash
     * @returns hash value for @key
     */
    function string_hash(key: string): number;
    /**
     * Generates a stringified JSON representation of the contents of
     * the given `node`.
     * @param node a JSON tree
     * @param pretty whether the output should be prettyfied for printing
     * @returns the string representation of the node
     */
    function to_string(node: Node, pretty: boolean): string | null;
    /**
     * The function to be passed to [method`Json`.Array.foreach_element].
     *
     * You should not add or remove elements to and from `array` within
     * this function.
     *
     * It is safe to change the value of `element_node`.
     * @callback
     * @param array the iterated JSON array
     * @param index_ the index of the element
     * @param element_node the value of the element at the given `index_`
     */
    interface ArrayForeach {
        (array: Array, index_: number, element_node: Node): void;
    }
    /**
     * Deserializes the contents of the passed `JsonNode` into a `GBoxed`, for instance:
     *
     * ```c
     * static gpointer
     * my_point_deserialize (JsonNode *node)
     * {
     *   double x = 0.0, y = 0.0;
     *
     *   if (JSON_NODE_HOLDS_ARRAY (node))
     *     {
     *       JsonArray *array = json_node_get_array (node);
     *
     *       if (json_array_get_length (array) == 2)
     *         {
     *           x = json_array_get_double_element (array, 0);
     *           y = json_array_get_double_element (array, 1);
     *         }
     *     }
     *   else if (JSON_NODE_HOLDS_OBJECT (node))
     *     {
     *       JsonObject *obj = json_node_get_object (node);
     *
     *       x = json_object_get_double_member_with_default (obj, "x", 0.0);
     *       y = json_object_get_double_member_with_default (obj, "y", 0.0);
     *     }
     *
     *   // my_point_new() is defined elsewhere
     *   return my_point_new (x, y);
     * }
     * ```
     * @callback
     * @param node a node tree representing a boxed data
     * @returns the newly created boxed structure
     */
    interface BoxedDeserializeFunc {
        (node: Node): any | null;
    }
    /**
     * Serializes the passed `GBoxed` and stores it inside a `JsonNode`, for instance:
     *
     * ```c
     * static JsonNode *
     * my_point_serialize (gconstpointer boxed)
     * {
     *   const MyPoint *point = boxed;
     *
     *   g_autoptr(JsonBuilder) builder = json_builder_new ();
     *
     *   json_builder_begin_object (builder);
     *   json_builder_set_member_name (builder, "x");
     *   json_builder_add_double_value (builder, point->x);
     *   json_builder_set_member_name (builder, "y");
     *   json_builder_add_double_value (builder, point->y);
     *   json_builder_end_object (builder);
     *
     *   return json_builder_get_root (builder);
     * }
     * ```
     * @callback
     * @param boxed a boxed data structure
     * @returns the newly created JSON node tree representing the boxed data
     */
    interface BoxedSerializeFunc {
        (boxed: any | null): Node;
    }
    /**
     * The function to be passed to [method`Json`.Object.foreach_member].
     *
     * You should not add or remove members to and from `object` within
     * this function.
     *
     * It is safe to change the value of `member_node`.
     * @callback
     * @param object the iterated JSON object
     * @param member_name the name of the member
     * @param member_node the value of the member
     */
    interface ObjectForeach {
        (object: Object, member_name: string | null, member_node: Node): void;
    }
    module Serializable {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface Serializable {
        // Owm methods of Json-1.0.Json.Serializable

        /**
         * Calls the default implementation of the [vfunc`Json`.Serializable.deserialize_property]
         * virtual function.
         *
         * This function can be used inside a custom implementation of the
         * `deserialize_property()` virtual function in lieu of calling the
         * default implementation through `g_type_default_interface_peek()`:
         *
         * ```c
         * JsonSerializable *iface;
         * gboolean res;
         *
         * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
         * res = iface->deserialize_property (serializable, property_name,
         *                                    value,
         *                                    pspec,
         *                                    property_node);
         * ```
         * @param property_name the name of the property to deserialize
         * @param value a pointer to an uninitialized value
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         * @returns `TRUE` if the property was successfully deserialized
         */
        default_deserialize_property(
            property_name: string | null,
            value: any,
            pspec: GObject.ParamSpec,
            property_node: Node
        ): boolean;
        /**
         * Calls the default implementation of the [vfunc`Json`.Serializable.serialize_property]
         * virtual function.
         *
         * This function can be used inside a custom implementation of the
         * `serialize_property()` virtual function in lieu of calling the
         * default implementation through `g_type_default_interface_peek()`:
         *
         * ```c
         * JsonSerializable *iface;
         * JsonNode *node;
         *
         * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
         * node = iface->serialize_property (serializable, property_name,
         *                                   value,
         *                                   pspec);
         * ```
         *
         * This function will return `NULL` if the property could not be
         * serialized.
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         * @returns a node containing the   serialized property
         */
        default_serialize_property(
            property_name: string | null,
            value: any,
            pspec: GObject.ParamSpec
        ): Node | null;
        /**
         * Asks a `JsonSerializable` implementation to deserialize the
         * property contained inside `property_node` and place its value
         * into `value`.
         *
         * The `value` can be:
         *
         * - an empty `GValue` initialized by `G_VALUE_INIT`, which will be automatically
         *   initialized with the expected type of the property by using the given
         *   property description (since JSON-GLib 1.6)
         * - a `GValue` initialized with the expected type of the property
         *
         * This function will not be called for properties that are marked as
         * as `G_PARAM_CONSTRUCT_ONLY`.
         * @param property_name the name of the property to serialize
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         * @returns `TRUE` if the property was successfully deserialized
         */
        deserialize_property(
            property_name: string | null,
            pspec: GObject.ParamSpec,
            property_node: Node
        ): [/* returnType */ boolean, /* value */ any];
        /**
         * Calls the [vfunc`Json`.Serializable.find_property] implementation on
         * the `JsonSerializable` instance, which will return the property
         * description for the given name.
         * @param name the name of the property
         * @returns the property description
         */
        find_property(name: string | null): GObject.ParamSpec | null;
        /**
         * Calls the [vfunc`Json`.Serializable.get_property] implementation
         * on the `JsonSerializable` instance, which will get the value of
         * the given property.
         * @param pspec a property description
         */
        get_property(pspec: GObject.ParamSpec): /* value */ any;

        // Overloads of get_property

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
         * Calls the [vfunc`Json`.Serializable.list_properties] implementation on
         * the `JsonSerializable` instance, which will return the list of serializable
         * properties.
         * @returns the serializable   properties of the object
         */
        list_properties(): GObject.ParamSpec[];
        /**
         * Asks a `JsonSerializable` implementation to serialize an object
         * property into a JSON node.
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         * @returns a node containing the serialized property
         */
        serialize_property(
            property_name: string | null,
            value: any,
            pspec: GObject.ParamSpec
        ): Node;
        /**
         * Calls the [vfunc`Json`.Serializable.set_property] implementation
         * on the `JsonSerializable` instance, which will set the property
         * with the given value.
         * @param pspec a property description
         * @param value the property value to set
         */
        set_property(pspec: GObject.ParamSpec, value: any): void;

        // Overloads of set_property

        /**
         * Sets a property on an object.
         * @param property_name the name of the property to set
         * @param value the value
         */
        set_property(property_name: string | null, value: any): void;

        // Own virtual methods of Json-1.0.Json.Serializable

        /**
         * Asks a `JsonSerializable` implementation to deserialize the
         * property contained inside `property_node` and place its value
         * into `value`.
         *
         * The `value` can be:
         *
         * - an empty `GValue` initialized by `G_VALUE_INIT`, which will be automatically
         *   initialized with the expected type of the property by using the given
         *   property description (since JSON-GLib 1.6)
         * - a `GValue` initialized with the expected type of the property
         *
         * This function will not be called for properties that are marked as
         * as `G_PARAM_CONSTRUCT_ONLY`.
         * @virtual
         * @param property_name the name of the property to serialize
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         * @returns `TRUE` if the property was successfully deserialized
         */
        vfunc_deserialize_property(
            property_name: string | null,
            pspec: GObject.ParamSpec,
            property_node: Node
        ): [/* returnType */ boolean, /* value */ any];
        /**
         * Calls the [vfunc`Json`.Serializable.find_property] implementation on
         * the `JsonSerializable` instance, which will return the property
         * description for the given name.
         * @virtual
         * @param name the name of the property
         * @returns the property description
         */
        vfunc_find_property(name: string | null): GObject.ParamSpec | null;
        /**
         * Calls the [vfunc`Json`.Serializable.get_property] implementation
         * on the `JsonSerializable` instance, which will get the value of
         * the given property.
         * @virtual
         * @param pspec a property description
         */
        vfunc_get_property(pspec: GObject.ParamSpec): /* value */ any;

        // Overloads of vfunc_get_property

        vfunc_get_property(
            property_id: number,
            value: any,
            pspec: GObject.ParamSpec
        ): void;
        /**
         * Asks a `JsonSerializable` implementation to serialize an object
         * property into a JSON node.
         * @virtual
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         * @returns a node containing the serialized property
         */
        vfunc_serialize_property(
            property_name: string | null,
            value: any,
            pspec: GObject.ParamSpec
        ): Node;
        /**
         * Calls the [vfunc`Json`.Serializable.set_property] implementation
         * on the `JsonSerializable` instance, which will set the property
         * with the given value.
         * @virtual
         * @param pspec a property description
         * @param value the property value to set
         */
        vfunc_set_property(pspec: GObject.ParamSpec, value: any): void;

        // Overloads of vfunc_set_property

        vfunc_set_property(
            property_id: number,
            value: any,
            pspec: GObject.ParamSpec
        ): void;

        // Class property signals of Json-1.0.Json.Serializable

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * `JsonSerializable` is an interface for controlling the serialization
     * and deserialization of `GObject` classes.
     *
     * Implementing this interface allows controlling how the class is going
     * to be serialized or deserialized by [func`Json`.construct_gobject] and
     * [func`Json`.serialize_gobject], respectively.
     * @interface
     */
    class Serializable extends GObject.Object {
        // Own properties of Json-1.0.Json.Serializable

        static name: string;
        static $gtype: GObject.GType<Serializable>;

        // Constructors of Json-1.0.Json.Serializable

        constructor(config?: Serializable.ConstructorProperties);
        _init(config?: Serializable.ConstructorProperties): void;
    }

    module Builder {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Json-1.0.Json.Builder

            /**
             * Whether the tree should be immutable when created.
             *
             * Making the output immutable on creation avoids the expense
             * of traversing it to make it immutable later.
             */
            immutable?: boolean | null;
        }
    }

    interface Builder {
        // Own properties of Json-1.0.Json.Builder

        /**
         * Whether the tree should be immutable when created.
         *
         * Making the output immutable on creation avoids the expense
         * of traversing it to make it immutable later.
         */
        readonly immutable: boolean;

        // Owm methods of Json-1.0.Json.Builder

        /**
         * Adds a boolean value to the currently open object member or array.
         *
         * If called after [method`Json`.Builder.set_member_name], sets the given value
         * as the value of the current member in the open object; otherwise, the value
         * is appended to the elements of the open array.
         *
         * See also: [method`Json`.Builder.add_value]
         * @param value the value of the member or element
         * @returns the builder instance
         */
        add_boolean_value(value: boolean): Builder | null;
        /**
         * Adds a floating point value to the currently open object member or array.
         *
         * If called after [method`Json`.Builder.set_member_name], sets the given value
         * as the value of the current member in the open object; otherwise, the value
         * is appended to the elements of the open array.
         *
         * See also: [method`Json`.Builder.add_value]
         * @param value the value of the member or element
         * @returns the builder instance
         */
        add_double_value(value: number): Builder | null;
        /**
         * Adds an integer value to the currently open object member or array.
         *
         * If called after [method`Json`.Builder.set_member_name], sets the given value
         * as the value of the current member in the open object; otherwise, the value
         * is appended to the elements of the open array.
         *
         * See also: [method`Json`.Builder.add_value]
         * @param value the value of the member or element
         * @returns the builder instance
         */
        add_int_value(value: number): Builder | null;
        /**
         * Adds a null value to the currently open object member or array.
         *
         * If called after [method`Json`.Builder.set_member_name], sets the given value
         * as the value of the current member in the open object; otherwise, the value
         * is appended to the elements of the open array.
         *
         * See also: [method`Json`.Builder.add_value]
         * @returns the builder instance
         */
        add_null_value(): Builder | null;
        /**
         * Adds a boolean value to the currently open object member or array.
         *
         * If called after [method`Json`.Builder.set_member_name], sets the given value
         * as the value of the current member in the open object; otherwise, the value
         * is appended to the elements of the open array.
         *
         * See also: [method`Json`.Builder.add_value]
         * @param value the value of the member or element
         * @returns the builder instance
         */
        add_string_value(value: string | null): Builder | null;
        /**
         * Adds a value to the currently open object member or array.
         *
         * If called after [method`Json`.Builder.set_member_name], sets the given node
         * as the value of the current member in the open object; otherwise, the node
         * is appended to the elements of the open array.
         *
         * The builder will take ownership of the node.
         * @param node the value of the member or element
         * @returns the builder instance
         */
        add_value(node: Node): Builder | null;
        /**
         * Opens an array inside the given builder.
         *
         * You can add a new element to the array by using [method`Json`.Builder.add_value].
         *
         * Once you added all elements to the array, you must call
         * [method`Json`.Builder.end_array] to close the array.
         * @returns the builder instance
         */
        begin_array(): Builder | null;
        /**
         * Opens an object inside the given builder.
         *
         * You can add a new member to the object by using [method`Json`.Builder.set_member_name],
         * followed by [method`Json`.Builder.add_value].
         *
         * Once you added all members to the object, you must call [method`Json`.Builder.end_object]
         * to close the object.
         *
         * If the builder is in an inconsistent state, this function will return `NULL`.
         * @returns the builder instance
         */
        begin_object(): Builder | null;
        /**
         * Closes the array inside the given builder that was opened by the most
         * recent call to [method`Json`.Builder.begin_array].
         *
         * This function cannot be called after [method`Json`.Builder.set_member_name].
         * @returns the builder instance
         */
        end_array(): Builder | null;
        /**
         * Closes the object inside the given builder that was opened by the most
         * recent call to [method`Json`.Builder.begin_object].
         *
         * This function cannot be called after [method`Json`.Builder.set_member_name].
         * @returns the builder instance
         */
        end_object(): Builder | null;
        /**
         * Returns the root of the currently constructed tree.
         *
         * if the build is incomplete (ie: if there are any opened objects, or any
         * open object members and array elements) then this function will return
         * `NULL`.
         * @returns the root node
         */
        get_root(): Node | null;
        /**
         * Resets the state of the builder back to its initial state.
         */
        reset(): void;
        /**
         * Sets the name of the member in an object.
         *
         * This function must be followed by of these functions:
         *
         *  - [method`Json`.Builder.add_value], to add a scalar value to the member
         *  - [method`Json`.Builder.begin_object], to add an object to the member
         *  - [method`Json`.Builder.begin_array], to add an array to the member
         *
         * This function can only be called within an open object.
         * @param member_name the name of the member
         * @returns the builder instance
         */
        set_member_name(member_name: string | null): Builder | null;

        // Class property signals of Json-1.0.Json.Builder

        connect(
            sigName: 'notify::immutable',
            callback: ($obj: Builder, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::immutable',
            callback: ($obj: Builder, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::immutable', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * `JsonBuilder` provides an object for generating a JSON tree.
     *
     * The root of the JSON tree can be either a [struct`Json`.Object] or a [struct`Json`.Array].
     * Thus the first call must necessarily be either
     * [method`Json`.Builder.begin_object] or [method`Json`.Builder.begin_array].
     *
     * For convenience to language bindings, most `JsonBuilder` method return the
     * instance, making it easy to chain function calls.
     *
     * ## Using `JsonBuilder`
     *
     * ```c
     * g_autoptr(JsonBuilder) builder = json_builder_new ();
     *
     * json_builder_begin_object (builder);
     *
     * json_builder_set_member_name (builder, "url");
     * json_builder_add_string_value (builder, "http://www.gnome.org/img/flash/two-thirty.png");
     *
     * json_builder_set_member_name (builder, "size");
     * json_builder_begin_array (builder);
     * json_builder_add_int_value (builder, 652);
     * json_builder_add_int_value (builder, 242);
     * json_builder_end_array (builder);
     *
     * json_builder_end_object (builder);
     *
     * g_autoptr(JsonNode) root = json_builder_get_root (builder);
     *
     * g_autoptr(JsonGenerator) gen = json_generator_new ();
     * json_generator_set_root (gen, root);
     * g_autofree char *str = json_generator_to_data (gen, NULL);
     *
     * // str now contains the following JSON data
     * // { "url" : "http://www.gnome.org/img/flash/two-thirty.png", "size" : [ 652, 242 ] }
     * ```
     * @class
     */
    class Builder extends GObject.Object {
        // Own properties of Json-1.0.Json.Builder

        static name: string;
        static $gtype: GObject.GType<Builder>;

        // Constructors of Json-1.0.Json.Builder

        constructor(config?: Builder.ConstructorProperties);
        /**
         * Creates a new `JsonBuilder`.
         *
         * You can use this object to generate a JSON tree and obtain the root node.
         * @constructor
         * @returns the newly created builder instance
         */
        constructor();
        /**
         * Creates a new `JsonBuilder`.
         *
         * You can use this object to generate a JSON tree and obtain the root node.
         * @constructor
         * @returns the newly created builder instance
         */
        static new(): Builder;
        /**
         * Creates a new, immutable `JsonBuilder` instance.
         *
         * It is equivalent to setting the [property`Json`.Builder:immutable] property
         * set to `TRUE` at construction time.
         * @constructor
         * @returns the newly create builder instance
         */
        static new_immutable(): Builder;
        _init(config?: Builder.ConstructorProperties): void;
    }

    module Generator {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Json-1.0.Json.Generator

            /**
             * Number of spaces to be used to indent when pretty printing.
             */
            indent?: number | null;
            /**
             * The character that should be used when indenting in pretty print.
             */
            indent_char?: number | null;
            /**
             * Whether the output should be "pretty-printed", with indentation and
             * newlines.
             *
             * The indentation level can be controlled by using the
             * [property`Json`.Generator:indent] property.
             */
            pretty?: boolean | null;
            /**
             * The root node to be used when constructing a JSON data
             * stream.
             */
            root?: Node | null;
        }
    }

    interface Generator {
        // Own properties of Json-1.0.Json.Generator

        /**
         * Number of spaces to be used to indent when pretty printing.
         */
        indent: number;
        /**
         * The character that should be used when indenting in pretty print.
         */
        indent_char: number;
        /**
         * Whether the output should be "pretty-printed", with indentation and
         * newlines.
         *
         * The indentation level can be controlled by using the
         * [property`Json`.Generator:indent] property.
         */
        pretty: boolean;
        /**
         * The root node to be used when constructing a JSON data
         * stream.
         */
        root: Node;

        // Owm methods of Json-1.0.Json.Generator

        /**
         * Retrieves the value set using [method`Json`.Generator.set_indent].
         * @returns the number of repetitions per indentation level
         */
        get_indent(): number;
        /**
         * Retrieves the value set using [method`Json`.Generator.set_indent_char].
         * @returns the character to be used when indenting
         */
        get_indent_char(): string;
        /**
         * Retrieves the value set using [method`Json`.Generator.set_pretty].
         * @returns `TRUE` if the generated JSON should be pretty-printed, and   `FALSE` otherwise
         */
        get_pretty(): boolean;
        /**
         * Retrieves a pointer to the root node set using
         * [method`Json`.Generator.set_root].
         * @returns the root node
         */
        get_root(): Node | null;
        /**
         * Sets the number of repetitions for each indentation level.
         * @param indent_level the number of repetitions of the indentation character   that should be applied when pretty printing
         */
        set_indent(indent_level: number): void;
        /**
         * Sets the character to be used when indenting.
         * @param indent_char a Unicode character to be used when indenting
         */
        set_indent_char(indent_char: string): void;
        /**
         * Sets whether the generated JSON should be pretty printed.
         *
         * Pretty printing will use indentation character specified in the
         * [property`Json`.Generator:indent-char] property and the spacing
         * specified in the [property`Json`.Generator:indent] property.
         * @param is_pretty whether the generated string should be pretty printed
         */
        set_pretty(is_pretty: boolean): void;
        /**
         * Sets the root of the JSON data stream to be serialized by
         * the given generator.
         *
         * The passed `node` is copied by the generator object, so it can be
         * safely freed after calling this function.
         * @param node the root node
         */
        set_root(node: Node): void;
        /**
         * Generates a JSON data stream from `generator` and returns it as a
         * buffer.
         * @returns a newly allocated string holding a JSON data stream
         */
        to_data(): [/* returnType */ string | null, /* length */ number];
        /**
         * Creates a JSON data stream and puts it inside `filename`, overwriting
         * the file's current contents.
         *
         * This operation is atomic, in the sense that the data is written to a
         * temporary file which is then renamed to the given `filename`.
         * @param filename the path to the target file
         * @returns %TRUE if saving was successful.
         */
        to_file(filename: string): boolean;
        /**
         * Generates a JSON data stream and appends it to the string buffer.
         * @param string a string buffer
         * @returns the passed string, updated with   the generated JSON data
         */
        to_gstring(string: GLib.String): GLib.String;
        /**
         * Outputs JSON data and writes it (synchronously) to the given stream.
         * @param stream the output stream used to write the JSON data
         * @param cancellable a `GCancellable`
         * @returns whether the write operation was successful
         */
        to_stream(
            stream: Gio.OutputStream,
            cancellable: Gio.Cancellable | null
        ): boolean;

        // Class property signals of Json-1.0.Json.Generator

        connect(
            sigName: 'notify::indent',
            callback: ($obj: Generator, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::indent',
            callback: ($obj: Generator, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::indent', ...args: any[]): void;
        connect(
            sigName: 'notify::indent-char',
            callback: ($obj: Generator, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::indent-char',
            callback: ($obj: Generator, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::indent-char', ...args: any[]): void;
        connect(
            sigName: 'notify::pretty',
            callback: ($obj: Generator, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pretty',
            callback: ($obj: Generator, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pretty', ...args: any[]): void;
        connect(
            sigName: 'notify::root',
            callback: ($obj: Generator, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::root',
            callback: ($obj: Generator, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::root', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * `JsonGenerator` provides an object for generating a JSON data stream
     * from a tree of [struct`Json`.Node] instances, and put it into a buffer
     * or a file.
     * @class
     */
    class Generator extends GObject.Object {
        // Own properties of Json-1.0.Json.Generator

        static name: string;
        static $gtype: GObject.GType<Generator>;

        // Constructors of Json-1.0.Json.Generator

        constructor(config?: Generator.ConstructorProperties);
        /**
         * Creates a new `JsonGenerator`.
         *
         * You can use this object to generate a JSON data stream starting from a
         * data object model composed by [struct`Json`.Node]s.
         * @constructor
         * @returns the newly created generator instance
         */
        constructor();
        /**
         * Creates a new `JsonGenerator`.
         *
         * You can use this object to generate a JSON data stream starting from a
         * data object model composed by [struct`Json`.Node]s.
         * @constructor
         * @returns the newly created generator instance
         */
        static new(): Generator;
        _init(config?: Generator.ConstructorProperties): void;
    }

    module Parser {
        // Signal callback interfaces

        /**
         * Signal callback interface for `array-element`
         */
        interface ArrayElementSignalCallback {
            ($obj: Parser, array: Array, index_: number): void;
        }

        /**
         * Signal callback interface for `array-end`
         */
        interface ArrayEndSignalCallback {
            ($obj: Parser, array: Array): void;
        }

        /**
         * Signal callback interface for `array-start`
         */
        interface ArrayStartSignalCallback {
            ($obj: Parser): void;
        }

        /**
         * Signal callback interface for `error`
         */
        interface ErrorSignalCallback {
            ($obj: Parser, error: any | null): void;
        }

        /**
         * Signal callback interface for `object-end`
         */
        interface ObjectEndSignalCallback {
            ($obj: Parser, object: Object): void;
        }

        /**
         * Signal callback interface for `object-member`
         */
        interface ObjectMemberSignalCallback {
            ($obj: Parser, object: Object, member_name: string | null): void;
        }

        /**
         * Signal callback interface for `object-start`
         */
        interface ObjectStartSignalCallback {
            ($obj: Parser): void;
        }

        /**
         * Signal callback interface for `parse-end`
         */
        interface ParseEndSignalCallback {
            ($obj: Parser): void;
        }

        /**
         * Signal callback interface for `parse-start`
         */
        interface ParseStartSignalCallback {
            ($obj: Parser): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Json-1.0.Json.Parser

            /**
             * Whether the tree built by the parser should be immutable
             * when created.
             *
             * Making the output immutable on creation avoids the expense
             * of traversing it to make it immutable later.
             */
            immutable?: boolean | null;
        }
    }

    interface Parser {
        // Own properties of Json-1.0.Json.Parser

        /**
         * Whether the tree built by the parser should be immutable
         * when created.
         *
         * Making the output immutable on creation avoids the expense
         * of traversing it to make it immutable later.
         */
        readonly immutable: boolean;

        // Owm methods of Json-1.0.Json.Parser

        /**
         * Retrieves the line currently parsed, starting from 1.
         *
         * This function has defined behaviour only while parsing; calling this
         * function from outside the signal handlers emitted by the parser will
         * yield 0.
         * @returns the currently parsed line, or 0.
         */
        get_current_line(): number;
        /**
         * Retrieves the current position inside the current line, starting
         * from 0.
         *
         * This function has defined behaviour only while parsing; calling this
         * function from outside the signal handlers emitted by the parser will
         * yield 0.
         * @returns the position in the current line, or 0.
         */
        get_current_pos(): number;
        /**
         * Retrieves the top level node from the parsed JSON stream.
         *
         * If the parser input was an empty string, or if parsing failed, the root
         * will be `NULL`. It will also be `NULL` if it has been stolen using
         * [method`Json`.Parser.steal_root].
         * @returns the root node.
         */
        get_root(): Node | null;
        /**
         * A JSON data stream might sometimes contain an assignment, like:
         *
         * ```
         * var _json_data = { "member_name" : [ ...
         * ```
         *
         * even though it would technically constitute a violation of the RFC.
         *
         * `JsonParser` will ignore the left hand identifier and parse the right
         * hand value of the assignment. `JsonParser` will record, though, the
         * existence of the assignment in the data stream and the variable name
         * used.
         * @returns `TRUE` if there was an assignment, and `FALSE` otherwise
         */
        has_assignment(): [
            /* returnType */ boolean,
            /* variable_name */ string | null
        ];
        /**
         * Loads a JSON stream from a buffer and parses it.
         *
         * You can call this function multiple times with the same parser, but the
         * contents of the parser will be destroyed each time.
         * @param data the buffer to parse
         * @param length the length of the buffer, or -1 if it is `NUL` terminated
         * @returns `TRUE` if the buffer was succesfully parsed
         */
        load_from_data(data: string | null, length: number): boolean;
        /**
         * Loads a JSON stream from the content of `filename` and parses it.
         *
         * If the file is large or shared between processes,
         * [method`Json`.Parser.load_from_mapped_file] may be a more efficient
         * way to load it.
         *
         * See also: [method`Json`.Parser.load_from_data]
         * @param filename the path for the file to parse
         * @returns `TRUE` if the file was successfully loaded and parsed.
         */
        load_from_file(filename: string): boolean;
        /**
         * Loads a JSON stream from the content of `filename` and parses it.
         *
         * Unlike [method`Json`.Parser.load_from_file], `filename` will be memory
         * mapped as read-only and parsed. `filename` will be unmapped before this
         * function returns.
         *
         * If mapping or reading the file fails, a `G_FILE_ERROR` will be returned.
         * @param filename the path for the file to parse
         * @returns `TRUE` if the file was successfully loaded and parsed.
         */
        load_from_mapped_file(filename: string): boolean;
        /**
         * Loads the contents of an input stream and parses them.
         *
         * If `cancellable` is not `NULL`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the
         * operation was cancelled, `G_IO_ERROR_CANCELLED` will be set
         * on the given `error`.
         * @param stream the input stream with the JSON data
         * @param cancellable a #GCancellable
         * @returns `TRUE` if the data stream was successfully read and   parsed, and `FALSE` otherwise
         */
        load_from_stream(
            stream: Gio.InputStream,
            cancellable: Gio.Cancellable | null
        ): boolean;
        /**
         * Asynchronously reads the contents of a stream.
         *
         * For more details, see [method`Json`.Parser.load_from_stream], which is the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You should
         * then call [method`Json`.Parser.load_from_stream_finish] to get the result
         * of the operation.
         * @param stream the input stream with the JSON data
         * @param cancellable a #GCancellable
         * @param callback the function to call when the request is satisfied
         */
        load_from_stream_async(
            stream: Gio.InputStream,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;

        // Overloads of load_from_stream_async

        /**
         * Promisified version of {@link load_from_stream_async}
         *
         * Asynchronously reads the contents of a stream.
         *
         * For more details, see [method`Json`.Parser.load_from_stream], which is the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You should
         * then call [method`Json`.Parser.load_from_stream_finish] to get the result
         * of the operation.
         * @param stream the input stream with the JSON data
         * @param cancellable a #GCancellable
         * @returns A Promise of: `TRUE` if the content of the stream was successfully retrieved   and parsed, and `FALSE` otherwise
         */
        load_from_stream_async(
            stream: Gio.InputStream,
            cancellable: Gio.Cancellable | null
        ): globalThis.Promise<boolean>;
        /**
         * Finishes an asynchronous stream loading started with
         * [method`Json`.Parser.load_from_stream_async].
         * @param result the result of the asynchronous operation
         * @returns `TRUE` if the content of the stream was successfully retrieved   and parsed, and `FALSE` otherwise
         */
        load_from_stream_finish(result: Gio.AsyncResult): boolean;
        /**
         * Steals the top level node from the parsed JSON stream.
         *
         * This will be `NULL` in the same situations as [method`Json`.Parser.get_root]
         * return `NULL`.
         * @returns the root node
         */
        steal_root(): Node | null;

        // Own virtual methods of Json-1.0.Json.Parser

        vfunc_array_element(array: Array, index_: number): void;
        vfunc_array_end(array: Array): void;
        vfunc_array_start(): void;
        vfunc_error(error: GLib.Error): void;
        vfunc_object_end(object: Object): void;
        vfunc_object_member(object: Object, member_name: string | null): void;
        vfunc_object_start(): void;
        vfunc_parse_end(): void;
        vfunc_parse_start(): void;

        // Own signals of Json-1.0.Json.Parser

        connect(
            sigName: 'array-element',
            callback: Parser.ArrayElementSignalCallback
        ): number;
        connect_after(
            sigName: 'array-element',
            callback: Parser.ArrayElementSignalCallback
        ): number;
        emit(
            sigName: 'array-element',
            array: Array,
            index_: number,
            ...args: any[]
        ): void;
        connect(
            sigName: 'array-end',
            callback: Parser.ArrayEndSignalCallback
        ): number;
        connect_after(
            sigName: 'array-end',
            callback: Parser.ArrayEndSignalCallback
        ): number;
        emit(sigName: 'array-end', array: Array, ...args: any[]): void;
        connect(
            sigName: 'array-start',
            callback: Parser.ArrayStartSignalCallback
        ): number;
        connect_after(
            sigName: 'array-start',
            callback: Parser.ArrayStartSignalCallback
        ): number;
        emit(sigName: 'array-start', ...args: any[]): void;
        connect(sigName: 'error', callback: Parser.ErrorSignalCallback): number;
        connect_after(
            sigName: 'error',
            callback: Parser.ErrorSignalCallback
        ): number;
        emit(sigName: 'error', error: any | null, ...args: any[]): void;
        connect(
            sigName: 'object-end',
            callback: Parser.ObjectEndSignalCallback
        ): number;
        connect_after(
            sigName: 'object-end',
            callback: Parser.ObjectEndSignalCallback
        ): number;
        emit(sigName: 'object-end', object: Object, ...args: any[]): void;
        connect(
            sigName: 'object-member',
            callback: Parser.ObjectMemberSignalCallback
        ): number;
        connect_after(
            sigName: 'object-member',
            callback: Parser.ObjectMemberSignalCallback
        ): number;
        emit(
            sigName: 'object-member',
            object: Object,
            member_name: string | null,
            ...args: any[]
        ): void;
        connect(
            sigName: 'object-start',
            callback: Parser.ObjectStartSignalCallback
        ): number;
        connect_after(
            sigName: 'object-start',
            callback: Parser.ObjectStartSignalCallback
        ): number;
        emit(sigName: 'object-start', ...args: any[]): void;
        connect(
            sigName: 'parse-end',
            callback: Parser.ParseEndSignalCallback
        ): number;
        connect_after(
            sigName: 'parse-end',
            callback: Parser.ParseEndSignalCallback
        ): number;
        emit(sigName: 'parse-end', ...args: any[]): void;
        connect(
            sigName: 'parse-start',
            callback: Parser.ParseStartSignalCallback
        ): number;
        connect_after(
            sigName: 'parse-start',
            callback: Parser.ParseStartSignalCallback
        ): number;
        emit(sigName: 'parse-start', ...args: any[]): void;

        // Class property signals of Json-1.0.Json.Parser

        connect(
            sigName: 'notify::immutable',
            callback: ($obj: Parser, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::immutable',
            callback: ($obj: Parser, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::immutable', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * `JsonParser` provides an object for parsing a JSON data stream, either
     * inside a file or inside a static buffer.
     *
     * ## Using `JsonParser`
     *
     * The `JsonParser` API is fairly simple:
     *
     * ```c
     * gboolean
     * parse_json (const char *filename)
     * {
     *   g_autoptr(JsonParser) parser = json_parser_new ();
     *   g_autoptr(GError) error = NULL
     *
     *   json_parser_load_from_file (parser, filename, &error);
     *   if (error != NULL)
     *     {
     *       g_critical ("Unable to parse '%s': %s", filename, error->message);
     *       return FALSE;
     *     }
     *
     *   g_autoptr(JsonNode) root = json_parser_get_root (parser);
     *
     *   // manipulate the object tree from the root node
     *
     *   return TRUE
     * }
     * ```
     *
     * By default, the entire process of loading the data and parsing it is
     * synchronous; the [method`Json`.Parser.load_from_stream_async()] API will
     * load the data asynchronously, but parse it in the main context as the
     * signals of the parser must be emitted in the same thread. If you do
     * not use signals, and you wish to also parse the JSON data without blocking,
     * you should use a `GTask` and the synchronous `JsonParser` API inside the
     * task itself.
     * @class
     */
    class Parser extends GObject.Object {
        // Own properties of Json-1.0.Json.Parser

        static name: string;
        static $gtype: GObject.GType<Parser>;

        // Constructors of Json-1.0.Json.Parser

        constructor(config?: Parser.ConstructorProperties);
        /**
         * Creates a new JSON parser.
         *
         * You can use the `JsonParser` to load a JSON stream from either a file or a
         * buffer and then walk the hierarchy using the data types API.
         * @constructor
         * @returns the newly created parser
         */
        constructor();
        /**
         * Creates a new JSON parser.
         *
         * You can use the `JsonParser` to load a JSON stream from either a file or a
         * buffer and then walk the hierarchy using the data types API.
         * @constructor
         * @returns the newly created parser
         */
        static new(): Parser;
        /**
         * Creates a new parser instance with its [property`Json`.Parser:immutable]
         * property set to `TRUE` to create immutable output trees.
         * @constructor
         * @returns the newly created parser
         */
        static new_immutable(): Parser;
        _init(config?: Parser.ConstructorProperties): void;
    }

    module Path {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface Path {
        // Owm methods of Json-1.0.Json.Path

        /**
         * Validates and decomposes the given expression.
         *
         * A JSONPath expression must be compiled before calling
         * [method`Json`.Path.match].
         * @param expression a JSONPath expression
         * @returns `TRUE` if the compilation was successful, and `FALSE`   otherwise
         */
        compile(expression: string | null): boolean;
        /**
         * Matches the JSON tree pointed by `root` using the expression compiled
         * into the `JsonPath`.
         *
         * The nodes matching the expression will be copied into an array.
         * @param root the root node of the JSON data to match
         * @returns a newly-created node of type   `JSON_NODE_ARRAY` containing the array of matching nodes
         */
        match(root: Node): Node;

        // Class property signals of Json-1.0.Json.Path

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * `JsonPath` is a simple class implementing the JSONPath syntax for extracting
     * data out of a JSON tree.
     *
     * While the semantics of the JSONPath expressions are heavily borrowed by the
     * XPath specification for XML, the syntax follows the ECMAScript origins of
     * JSON.
     *
     * Once a `JsonPath` instance has been created, it has to compile a JSONPath
     * expression using [method`Json`.Path.compile] before being able to match it to
     * a JSON tree; the same `JsonPath` instance can be used to match multiple JSON
     * trees. It it also possible to compile a new JSONPath expression using the
     * same `JsonPath` instance; the previous expression will be discarded only if
     * the compilation of the new expression is successful.
     *
     * The simple convenience function [func`Json`.Path.query] can be used for
     * one-off matching.
     *
     * ## Syntax of the JSONPath expressions
     *
     * A JSONPath expression is composed by path indices and operators.
     * Each path index can either be a member name or an element index inside
     * a JSON tree. A JSONPath expression must start with the `$` operator; each
     * path index is separated using either the dot notation or the bracket
     * notation, e.g.:
     *
     * ```
     * // dot notation
     * $.store.book[0].title
     *
     * // bracket notation
     * $['store']['book'][0]['title']
     * ```
     *
     * The available operators are:
     *
     * * The `$` character represents the root node of the JSON tree, and
     *   matches the entire document.
     *
     * * Child nodes can either be matched using `.` or `[]`. For instance,
     *   both `$.store.book` and `$['store']['book']` match the contents of
     *   the book member of the store object.
     *
     * * Child nodes can be reached without specifying the whole tree structure
     *   through the recursive descent operator, or `..`. For instance,
     *   `$..author` matches all author member in every object.
     *
     * * Child nodes can grouped through the wildcard operator, or `*`. For
     *   instance, `$.store.book[*].author` matches all author members of any
     *   object element contained in the book array of the store object.
     *
     * * Element nodes can be accessed using their index (starting from zero)
     *   in the subscript operator `[]`. For instance, `$.store.book[0]` matches
     *   the first element of the book array of the store object.
     *
     * * Subsets of element nodes can be accessed using the set notation
     *   operator `[i,j,...]`. For instance, `$.store.book[0,2]` matches the
     *   elements 0 and 2 (the first and third) of the book array of the store
     *   object.
     *
     * * Slices of element nodes can be accessed using the slice notation
     *   operation `[start:end:step]`. If start is omitted, the starting index
     *   of the slice is implied to be zero; if end is omitted, the ending index
     *   of the slice is implied to be the length of the array; if step is
     *   omitted, the step of the slice is implied to be 1. For instance,
     *   `$.store.book[:2]` matches the first two elements of the book array
     *   of the store object.
     *
     * More information about JSONPath is available on Stefan Gössner's
     * [JSONPath website](http://goessner.net/articles/JsonPath/).
     *
     * ## Example of JSONPath matches
     *
     * The following example shows some of the results of using `JsonPath`
     * on a JSON tree. We use the following JSON description of a bookstore:
     *
     * ```json
     * { "store": {
     *     "book": [
     *       { "category": "reference", "author": "Nigel Rees",
     *         "title": "Sayings of the Century", "price": "8.95"  },
     *       { "category": "fiction", "author": "Evelyn Waugh",
     *         "title": "Sword of Honour", "price": "12.99" },
     *       { "category": "fiction", "author": "Herman Melville",
     *         "title": "Moby Dick", "isbn": "0-553-21311-3",
     *         "price": "8.99" },
     *       { "category": "fiction", "author": "J. R. R. Tolkien",
     *         "title": "The Lord of the Rings", "isbn": "0-395-19395-8",
     *         "price": "22.99" }
     *     ],
     *     "bicycle": { "color": "red", "price": "19.95" }
     *   }
     * }
     * ```
     *
     * We can parse the JSON using [class`Json`.Parser]:
     *
     * ```c
     * JsonParser *parser = json_parser_new ();
     * json_parser_load_from_data (parser, json_data, -1, NULL);
     * ```
     *
     * If we run the following code:
     *
     * ```c
     * JsonNode *result;
     * JsonPath *path = json_path_new ();
     * json_path_compile (path, "$.store..author", NULL);
     * result = json_path_match (path, json_parser_get_root (parser));
     * ```
     *
     * The `result` node will contain an array with all values of the
     * author member of the objects in the JSON tree. If we use a
     * [class`Json`.Generator] to convert the `result` node to a string
     * and print it:
     *
     * ```c
     * JsonGenerator *generator = json_generator_new ();
     * json_generator_set_root (generator, result);
     * char *str = json_generator_to_data (generator, NULL);
     * g_print ("Results: %s\n", str);
     * ```
     *
     * The output will be:
     *
     * ```json
     * ["Nigel Rees","Evelyn Waugh","Herman Melville","J. R. R. Tolkien"]
     * ```
     * @class
     */
    class Path extends GObject.Object {
        // Own properties of Json-1.0.Json.Path

        static name: string;
        static $gtype: GObject.GType<Path>;

        // Constructors of Json-1.0.Json.Path

        constructor(config?: Path.ConstructorProperties);
        /**
         * Creates a new `JsonPath` instance.
         *
         * Once created, the `JsonPath` object should be used with
         * [method`Json`.Path.compile] and [method`Json`.Path.match].
         * @constructor
         * @returns the newly created path
         */
        constructor();
        /**
         * Creates a new `JsonPath` instance.
         *
         * Once created, the `JsonPath` object should be used with
         * [method`Json`.Path.compile] and [method`Json`.Path.match].
         * @constructor
         * @returns the newly created path
         */
        static new(): Path;
        _init(config?: Path.ConstructorProperties): void;
        /**
         * Queries a JSON tree using a JSONPath expression.
         *
         * This function is a simple wrapper around [ctor`Json`.Path.new],
         * [method`Json`.Path.compile], and [method`Json`.Path.match]. It implicitly
         * creates a `JsonPath` instance, compiles the given expression and matches
         * it against the JSON tree pointed by `root`.
         * @param expression a JSONPath expression
         * @param root the root of a JSON tree
         * @returns a newly-created node of type   `JSON_NODE_ARRAY` containing the array of matching nodes
         */
        static query(expression: string | null, root: Node): Node;
    }

    module Reader {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Json-1.0.Json.Reader

            /**
             * The root of the JSON tree that the reader should read.
             */
            root?: Node | null;
        }
    }

    interface Reader {
        // Own properties of Json-1.0.Json.Reader

        /**
         * The root of the JSON tree that the reader should read.
         */
        root: Node;

        // Owm methods of Json-1.0.Json.Reader

        /**
         * Counts the elements of the current position, if the reader is
         * positioned on an array.
         *
         * In case of failure, the reader is set to an error state.
         * @returns the number of elements, or -1.
         */
        count_elements(): number;
        /**
         * Counts the members of the current position, if the reader is
         * positioned on an object.
         *
         * In case of failure, the reader is set to an error state.
         * @returns the number of members, or -1
         */
        count_members(): number;
        /**
         * Moves the cursor back to the previous node after being positioned
         * inside an array.
         *
         * This function resets the error state of the reader, if any was set.
         */
        end_element(): void;
        /**
         * Moves the cursor back to the previous node after being positioned
         * inside an object.
         *
         * This function resets the error state of the reader, if any was set.
         */
        end_member(): void;
        /**
         * Retrieves the boolean value of the current position of the reader.
         *
         * See also: [method`Json`.Reader.get_value]
         * @returns the boolean value
         */
        get_boolean_value(): boolean;
        /**
         * Retrieves the reader node at the current position.
         * @returns the current node of the reader
         */
        get_current_node(): Node | null;
        /**
         * Retrieves the floating point value of the current position of the reader.
         *
         * See also: [method`Json`.Reader.get_value]
         * @returns the floating point value
         */
        get_double_value(): number;
        /**
         * Retrieves the error currently set on the reader.
         * @returns the current error
         */
        get_error(): GLib.Error | null;
        /**
         * Retrieves the integer value of the current position of the reader.
         *
         * See also: [method`Json`.Reader.get_value]
         * @returns the integer value
         */
        get_int_value(): number;
        /**
         * Retrieves the name of the current member.
         *
         * In case of failure, the reader is set to an error state.
         * @returns the name of the member
         */
        get_member_name(): string | null;
        /**
         * Checks whether the value of the current position of the reader is `null`.
         *
         * See also: [method`Json`.Reader.get_value]
         * @returns `TRUE` if `null` is set, and `FALSE` otherwise
         */
        get_null_value(): boolean;
        /**
         * Retrieves the string value of the current position of the reader.
         *
         * See also: [method`Json`.Reader.get_value]
         * @returns the string value
         */
        get_string_value(): string | null;
        /**
         * Retrieves the value node at the current position of the reader.
         *
         * If the current position does not contain a scalar value, the reader
         * is set to an error state.
         * @returns the current value node
         */
        get_value(): Node | null;
        /**
         * Checks whether the reader is currently on an array.
         * @returns `TRUE` if the reader is on an array
         */
        is_array(): boolean;
        /**
         * Checks whether the reader is currently on an object.
         * @returns `TRUE` if the reader is on an object
         */
        is_object(): boolean;
        /**
         * Checks whether the reader is currently on a value.
         * @returns `TRUE` if the reader is on a value
         */
        is_value(): boolean;
        /**
         * Retrieves a list of member names from the current position, if the reader
         * is positioned on an object.
         *
         * In case of failure, the reader is set to an error state.
         * @returns the members of   the object
         */
        list_members(): string[];
        /**
         * Advances the cursor of the reader to the element of the array or
         * the member of the object at the given position.
         *
         * You can use [method`Json`.Reader.get_value] and its wrapper functions to
         * retrieve the value of the element; for instance, the following code will
         * read the first element of the array at the current cursor position:
         *
         * ```c
         * json_reader_read_element (reader, 0);
         * int_value = json_reader_get_int_value (reader);
         * ```
         *
         * After reading the value, you should call [method`Json`.Reader.end_element]
         * to reposition the cursor inside the reader, e.g.:
         *
         * ```c
         * const char *str_value = NULL;
         *
         * json_reader_read_element (reader, 1);
         * str_value = json_reader_get_string_value (reader);
         * json_reader_end_element (reader);
         *
         * json_reader_read_element (reader, 2);
         * str_value = json_reader_get_string_value (reader);
         * json_reader_end_element (reader);
         * ```
         *
         * If the reader is not currently on an array or an object, or if the index is
         * bigger than the size of the array or the object, the reader will be
         * put in an error state until [method`Json`.Reader.end_element] is called. This
         * means that, if used conditionally, [method`Json`.Reader.end_element] must be
         * called on all branches:
         *
         * ```c
         * if (!json_reader_read_element (reader, 1))
         *   {
         *     g_propagate_error (error, json_reader_get_error (reader));
         *     json_reader_end_element (reader);
         *     return FALSE;
         *   }
         * else
         *   {
         *     const char *str_value = json_reader_get_string_value (reader);
         *     json_reader_end_element (reader);
         *
         *     // use str_value
         *
         *     return TRUE;
         *   }
         * ```c
         * @param index_ the index of the element
         * @returns `TRUE` on success, and `FALSE` otherwise
         */
        read_element(index_: number): boolean;
        /**
         * Advances the cursor of the reader to the `member_name` of the object at
         * the current position.
         *
         * You can use [method`Json`.Reader.get_value] and its wrapper functions to
         * retrieve the value of the member; for instance:
         *
         * ```c
         * json_reader_read_member (reader, "width");
         * width = json_reader_get_int_value (reader);
         * ```
         *
         * After reading the value, `json_reader_end_member()` should be called to
         * reposition the cursor inside the reader, e.g.:
         *
         * ```c
         * json_reader_read_member (reader, "author");
         * author = json_reader_get_string_value (reader);
         * json_reader_end_member (reader);
         *
         * json_reader_read_member (reader, "title");
         * title = json_reader_get_string_value (reader);
         * json_reader_end_member (reader);
         * ```
         *
         * If the reader is not currently on an object, or if the `member_name` is not
         * defined in the object, the reader will be put in an error state until
         * [method`Json`.Reader.end_member] is called. This means that if used
         * conditionally, [method`Json`.Reader.end_member] must be called on all branches:
         *
         * ```c
         * if (!json_reader_read_member (reader, "title"))
         *   {
         *     g_propagate_error (error, json_reader_get_error (reader));
         *     json_reader_end_member (reader);
         *     return FALSE;
         *   }
         * else
         *   {
         *     const char *str_value = json_reader_get_string_value (reader);
         *     json_reader_end_member (reader);
         *
         *     // use str_value
         *
         *     return TRUE;
         *   }
         * ```
         * @param member_name the name of the member to read
         * @returns `TRUE` on success, and `FALSE` otherwise
         */
        read_member(member_name: string | null): boolean;
        /**
         * Sets the root node of the JSON tree to be read by `reader`.
         *
         * The reader will take a copy of the node.
         * @param root the root node
         */
        set_root(root: Node | null): void;

        // Class property signals of Json-1.0.Json.Reader

        connect(
            sigName: 'notify::root',
            callback: ($obj: Reader, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::root',
            callback: ($obj: Reader, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::root', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * `JsonReader` provides a simple, cursor-based API for parsing a JSON DOM.
     *
     * It is similar, in spirit, to the XML Reader API.
     *
     * ## Using `JsonReader`
     *
     * ```c
     * g_autoptr(JsonParser) parser = json_parser_new ();
     *
     * // str is defined elsewhere
     * json_parser_load_from_data (parser, str, -1, NULL);
     *
     * g_autoptr(JsonReader) reader = json_reader_new (json_parser_get_root (parser));
     *
     * json_reader_read_member (reader, "url");
     *   const char *url = json_reader_get_string_value (reader);
     *   json_reader_end_member (reader);
     *
     * json_reader_read_member (reader, "size");
     *   json_reader_read_element (reader, 0);
     *     int width = json_reader_get_int_value (reader);
     *     json_reader_end_element (reader);
     *   json_reader_read_element (reader, 1);
     *     int height = json_reader_get_int_value (reader);
     *     json_reader_end_element (reader);
     *   json_reader_end_member (reader);
     * ```
     *
     * ## Error handling
     *
     * In case of error, `JsonReader` will be set in an error state; all subsequent
     * calls will simply be ignored until a function that resets the error state is
     * called, e.g.:
     *
     * ```c
     * // ask for the 7th element; if the element does not exist, the
     * // reader will be put in an error state
     * json_reader_read_element (reader, 6);
     *
     * // in case of error, this will return NULL, otherwise it will
     * // return the value of the element
     * str = json_reader_get_string_value (value);
     *
     * // this function resets the error state if any was set
     * json_reader_end_element (reader);
     * ```
     *
     * If you want to detect the error state as soon as possible, you can use
     * [method`Json`.Reader.get_error]:
     *
     * ```c
     * // like the example above, but in this case we print out the
     * // error immediately
     * if (!json_reader_read_element (reader, 6))
     *   {
     *     const GError *error = json_reader_get_error (reader);
     *     g_print ("Unable to read the element: %s", error->message);
     *   }
     * ```
     * @class
     */
    class Reader extends GObject.Object {
        // Own properties of Json-1.0.Json.Reader

        static name: string;
        static $gtype: GObject.GType<Reader>;

        // Constructors of Json-1.0.Json.Reader

        constructor(config?: Reader.ConstructorProperties);
        /**
         * Creates a new reader.
         *
         * You can use this object to read the contents of the JSON tree starting
         * from the given node.
         * @constructor
         * @param node the root node
         * @returns the newly created reader
         */
        constructor(node: Node | null);
        /**
         * Creates a new reader.
         *
         * You can use this object to read the contents of the JSON tree starting
         * from the given node.
         * @constructor
         * @param node the root node
         * @returns the newly created reader
         */
        static new(node: Node | null): Reader;
        _init(config?: Reader.ConstructorProperties): void;
    }

    interface Array {
        // Owm methods of Json-1.0.Json.Array

        /**
         * Conveniently adds an array element into an array.
         *
         * If `value` is `NULL`, a `null` element will be added instead.
         *
         * See also: [method`Json`.Array.add_element], [method`Json`.Node.take_array]
         * @param value the array to add
         */
        add_array_element(value: Array | null): void;
        /**
         * Conveniently adds the given boolean value into an array.
         *
         * See also: [method`Json`.Array.add_element], [method`Json`.Node.set_boolean]
         * @param value the boolean value to add
         */
        add_boolean_element(value: boolean): void;
        /**
         * Conveniently adds the given floating point value into an array.
         *
         * See also: [method`Json`.Array.add_element], [method`Json`.Node.set_double]
         * @param value the floating point value to add
         */
        add_double_element(value: number): void;
        /**
         * Appends the given `node` inside an array.
         * @param node the element to add
         */
        add_element(node: Node): void;
        /**
         * Conveniently adds the given integer value into an array.
         *
         * See also: [method`Json`.Array.add_element], [method`Json`.Node.set_int]
         * @param value the integer value to add
         */
        add_int_element(value: number): void;
        /**
         * Conveniently adds a `null` element into an array
         *
         * See also: [method`Json`.Array.add_element], `JSON_NODE_NULL`
         */
        add_null_element(): void;
        /**
         * Conveniently adds an object into an array.
         *
         * If `value` is `NULL`, a `null` element will be added instead.
         *
         * See also: [method`Json`.Array.add_element], [method`Json`.Node.take_object]
         * @param value the object to add
         */
        add_object_element(value: Object | null): void;
        /**
         * Conveniently adds the given string value into an array.
         *
         * See also: [method`Json`.Array.add_element], [method`Json`.Node.set_string]
         * @param value the string value to add
         */
        add_string_element(value: string | null): void;
        /**
         * Retrieves a copy of the element at the given position in the array.
         * @param index_ the index of the element to retrieve
         * @returns a copy of the element at the given position
         */
        dup_element(index_: number): Node;
        /**
         * Check whether two arrays are equal.
         *
         * Equality is defined as:
         *
         *  - the array have the same number of elements
         *  - the values of elements in corresponding positions are equal
         * @param b another JSON array
         * @returns `TRUE` if the arrays are equal, and `FALSE` otherwise
         */
        equal(b: Array): boolean;
        /**
         * Iterates over all elements of an array, and calls a function on
         * each one of them.
         *
         * It is safe to change the value of an element of the array while
         * iterating over it, but it is not safe to add or remove elements
         * from the array.
         * @param func the function to be called on each element
         */
        foreach_element(func: ArrayForeach): void;
        /**
         * Conveniently retrieves the array at the given position inside an array.
         *
         * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_array]
         * @param index_ the index of the element to retrieve
         * @returns the array
         */
        get_array_element(index_: number): Array;
        /**
         * Conveniently retrieves the boolean value of the element at the given
         * position inside an array.
         *
         * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_boolean]
         * @param index_ the index of the element to retrieve
         * @returns the boolean value
         */
        get_boolean_element(index_: number): boolean;
        /**
         * Conveniently retrieves the floating point value of the element at
         * the given position inside an array.
         *
         * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_double]
         * @param index_ the index of the element to retrieve
         * @returns the floating point value
         */
        get_double_element(index_: number): number;
        /**
         * Retrieves the element at the given position in the array.
         * @param index_ the index of the element to retrieve
         * @returns the element at the given position
         */
        get_element(index_: number): Node;
        /**
         * Retrieves all the elements of an array as a list of nodes.
         * @returns the elements   of the array
         */
        get_elements(): Node[] | null;
        /**
         * Conveniently retrieves the integer value of the element at the given
         * position inside an array.
         *
         * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_int]
         * @param index_ the index of the element to retrieve
         * @returns the integer value
         */
        get_int_element(index_: number): number;
        /**
         * Retrieves the length of the given array
         * @returns the length of the array
         */
        get_length(): number;
        /**
         * Conveniently checks whether the element at the given position inside the
         * array contains a `null` value.
         *
         * See also: [method`Json`.Array.get_element], [method`Json`.Node.is_null]
         * @param index_ the index of the element to retrieve
         * @returns `TRUE` if the element is `null`
         */
        get_null_element(index_: number): boolean;
        /**
         * Conveniently retrieves the object at the given position inside an array.
         *
         * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_object]
         * @param index_ the index of the element to retrieve
         * @returns the object
         */
        get_object_element(index_: number): Object;
        /**
         * Conveniently retrieves the string value of the element at the given
         * position inside an array.
         *
         * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_string]
         * @param index_ the index of the element to retrieve
         * @returns the string value
         */
        get_string_element(index_: number): string | null;
        /**
         * Calculates a hash value for the given `key`.
         *
         * The hash is calculated over the array and all its elements, recursively.
         *
         * If the array is immutable, this is a fast operation; otherwise, it scales
         * proportionally with the length of the array.
         * @returns hash value for the key
         */
        hash(): number;
        /**
         * Check whether the given `array` has been marked as immutable by calling
         * [method`Json`.Array.seal] on it.
         * @returns %TRUE if the array is immutable
         */
        is_immutable(): boolean;
        /**
         * Acquires a reference on the given array.
         * @returns the passed array, with the reference count   increased by one
         */
        ref(): Array;
        /**
         * Removes the element at the given position inside an array.
         *
         * This function will release the reference held on the element.
         * @param index_ the position of the element to be removed
         */
        remove_element(index_: number): void;
        /**
         * Seals the given array, making it immutable to further changes.
         *
         * This function will recursively seal all elements in the array too.
         *
         * If the `array` is already immutable, this is a no-op.
         */
        seal(): void;
        /**
         * Releases a reference on the given array.
         *
         * If the reference count reaches zero, the array is destroyed and all
         * its allocated resources are freed.
         */
        unref(): void;
    }

    /**
     * `JsonArray` is the representation of the array type inside JSON.
     *
     * A `JsonArray` contains [struct`Json`.Node] elements, which may contain
     * fundamental types, other arrays or objects.
     *
     * Since arrays can be arbitrarily big, copying them can be expensive; for
     * this reason, they are reference counted. You can control the lifetime of
     * a `JsonArray` using [method`Json`.Array.ref] and [method`Json`.Array.unref].
     *
     * To append an element, use [method`Json`.Array.add_element].
     *
     * To extract an element at a given index, use [method`Json`.Array.get_element].
     *
     * To retrieve the entire array in list form, use [method`Json`.Array.get_elements].
     *
     * To retrieve the length of the array, use [method`Json`.Array.get_length].
     * @record
     */
    class Array {
        // Own properties of Json-1.0.Json.Array

        static name: string;

        // Constructors of Json-1.0.Json.Array

        /**
         * Creates a new array.
         * @constructor
         * @returns the newly created array
         */
        constructor();
        /**
         * Creates a new array.
         * @constructor
         * @returns the newly created array
         */
        static new(): Array;
        /**
         * Creates a new array with `n_elements` slots already allocated.
         * @constructor
         * @param n_elements number of slots to pre-allocate
         * @returns the newly created array
         */
        static sized_new(n_elements: number): Array;
    }

    interface BuilderClass {}

    abstract class BuilderClass {
        // Own properties of Json-1.0.Json.BuilderClass

        static name: string;
    }

    interface BuilderPrivate {}

    class BuilderPrivate {
        // Own properties of Json-1.0.Json.BuilderPrivate

        static name: string;
    }

    interface GeneratorClass {}

    abstract class GeneratorClass {
        // Own properties of Json-1.0.Json.GeneratorClass

        static name: string;
    }

    interface GeneratorPrivate {}

    class GeneratorPrivate {
        // Own properties of Json-1.0.Json.GeneratorPrivate

        static name: string;
    }

    interface Node {
        // Owm methods of Json-1.0.Json.Node

        /**
         * Copies `node`.
         *
         * If the node contains complex data types, their reference
         * counts are increased, regardless of whether the node is mutable or
         * immutable.
         *
         * The copy will be immutable if, and only if, `node` is immutable. However,
         * there should be no need to copy an immutable node.
         * @returns the copied of the given node
         */
        copy(): Node;
        /**
         * Retrieves the JSON array inside `node`.
         *
         * The reference count of the returned array is increased.
         *
         * It is a programmer error to call this on a node which doesn’t hold an
         * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
         * @returns the JSON array with its reference   count increased.
         */
        dup_array(): Array | null;
        /**
         * Retrieves the object inside `node`.
         *
         * The reference count of the returned object is increased.
         *
         * It is a programmer error to call this on a node which doesn’t hold an
         * object value. Use `JSON_NODE_HOLDS_OBJECT` first.
         * @returns the JSON object
         */
        dup_object(): Object | null;
        /**
         * Gets a copy of the string value stored inside a node.
         *
         * If the node does not hold a string value, `NULL` is returned.
         * @returns a copy of the string   inside the node
         */
        dup_string(): string | null;
        /**
         * Check whether `a` and `b` are equal node, meaning they have the same
         * type and same values (checked recursively).
         *
         * Note that integer values are compared numerically, ignoring type, so a
         * double value 4.0 is equal to the integer value 4.
         * @param b another JSON node
         * @returns `TRUE` if @a and @b are equal; `FALSE` otherwise
         */
        equal(b: Node): boolean;
        /**
         * Frees the resources allocated by the node.
         */
        free(): void;
        /**
         * Retrieves the JSON array stored inside a node.
         *
         * It is a programmer error to call this on a node which doesn’t hold an
         * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
         * @returns the JSON array
         */
        get_array(): Array | null;
        /**
         * Gets the boolean value stored inside a node.
         *
         * If the node holds an integer or double value which is zero, `FALSE` is
         * returned; otherwise `TRUE` is returned.
         *
         * If the node holds a `JSON_NODE_NULL` value or a value of another
         * non-boolean type, `FALSE` is returned.
         * @returns a boolean value.
         */
        get_boolean(): boolean;
        /**
         * Gets the double value stored inside a node.
         *
         * If the node holds an integer value, it is returned as a double.
         *
         * If the node holds a `FALSE` boolean value, `0.0` is returned; otherwise
         * a non-zero double is returned.
         *
         * If the node holds a `JSON_NODE_NULL` value or a value of another
         * non-double type, `0.0` is returned.
         * @returns a double value.
         */
        get_double(): number;
        /**
         * Gets the integer value stored inside a node.
         *
         * If the node holds a double value, its integer component is returned.
         *
         * If the node holds a `FALSE` boolean value, `0` is returned; otherwise,
         * a non-zero integer is returned.
         *
         * If the node holds a `JSON_NODE_NULL` value or a value of another
         * non-integer type, `0` is returned.
         * @returns an integer value.
         */
        get_int(): number;
        /**
         * Retrieves the type of a `node`.
         * @returns the type of the node
         */
        get_node_type(): NodeType;
        /**
         * Retrieves the object stored inside a node.
         *
         * It is a programmer error to call this on a node which doesn’t hold an
         * object value. Use `JSON_NODE_HOLDS_OBJECT` first.
         * @returns the JSON object
         */
        get_object(): Object | null;
        /**
         * Retrieves the parent node of the given `node`.
         * @returns the parent node, or `NULL` if @node   is the root node
         */
        get_parent(): Node | null;
        /**
         * Gets the string value stored inside a node.
         *
         * If the node does not hold a string value, `NULL` is returned.
         * @returns a string value.
         */
        get_string(): string | null;
        /**
         * Retrieves a value from a node and copies into `value`.
         *
         * When done using it, call `g_value_unset()` on the `GValue` to free the
         * associated resources.
         *
         * It is a programmer error to call this on a node which doesn’t hold a scalar
         * value. Use `JSON_NODE_HOLDS_VALUE` first.
         */
        get_value(): /* value */ any;
        /**
         * Returns the `GType` of the payload of the node.
         *
         * For `JSON_NODE_NULL` nodes, the returned type is `G_TYPE_INVALID`.
         * @returns the type for the payload
         */
        get_value_type(): GObject.GType;
        /**
         * Calculate a hash value for the given `key`.
         *
         * The hash is calculated over the node and its value, recursively. If the node
         * is immutable, this is a fast operation; otherwise, it scales proportionally
         * with the size of the node’s value (for example, with the number of members
         * in the JSON object if this node contains an object).
         * @returns hash value for @key
         */
        hash(): number;
        /**
         * Initializes a `node` to a specific `type`.
         *
         * If the node has already been initialized once, it will be reset to
         * the given type, and any data contained will be cleared.
         * @param type the type of JSON node to initialize `node` to
         * @returns the initialized node
         */
        init(type: NodeType): Node;
        /**
         * Initializes `node` to `JSON_NODE_ARRAY` and sets `array` into it.
         *
         * This function will take a reference on `array`.
         *
         * If the node has already been initialized once, it will be reset to
         * the given type, and any data contained will be cleared.
         * @param array the JSON array to initialize `node` with, or `NULL`
         * @returns the initialized node
         */
        init_array(array: Array | null): Node;
        /**
         * Initializes `node` to `JSON_NODE_VALUE` and sets `value` into it.
         *
         * If the node has already been initialized once, it will be reset to
         * the given type, and any data contained will be cleared.
         * @param value a boolean value
         * @returns the initialized node
         */
        init_boolean(value: boolean): Node;
        /**
         * Initializes `node` to `JSON_NODE_VALUE` and sets `value` into it.
         *
         * If the node has already been initialized once, it will be reset to
         * the given type, and any data contained will be cleared.
         * @param value a floating point value
         * @returns the initialized node
         */
        init_double(value: number): Node;
        /**
         * Initializes `node` to `JSON_NODE_VALUE` and sets `value` into it.
         *
         * If the node has already been initialized once, it will be reset to
         * the given type, and any data contained will be cleared.
         * @param value an integer
         * @returns the initialized node
         */
        init_int(value: number): Node;
        /**
         * Initializes `node` to `JSON_NODE_NULL`.
         *
         * If the node has already been initialized once, it will be reset to
         * the given type, and any data contained will be cleared.
         * @returns the initialized node
         */
        init_null(): Node;
        /**
         * Initializes `node` to `JSON_NODE_OBJECT` and sets `object` into it.
         *
         * This function will take a reference on `object`.
         *
         * If the node has already been initialized once, it will be reset to
         * the given type, and any data contained will be cleared.
         * @param object the JSON object to initialize `node` with, or `NULL`
         * @returns the initialized node
         */
        init_object(object: Object | null): Node;
        /**
         * Initializes `node` to `JSON_NODE_VALUE` and sets `value` into it.
         *
         * If the node has already been initialized once, it will be reset to
         * the given type, and any data contained will be cleared.
         * @param value a string value
         * @returns the initialized node
         */
        init_string(value: string | null): Node;
        /**
         * Check whether the given `node` has been marked as immutable by calling
         * [method`Json`.Node.seal] on it.
         * @returns `TRUE` if the @node is immutable
         */
        is_immutable(): boolean;
        /**
         * Checks whether `node` is a `JSON_NODE_NULL`.
         *
         * A `JSON_NODE_NULL` node is not the same as a `NULL` node; a `JSON_NODE_NULL`
         * represents a literal `null` value in the JSON tree.
         * @returns `TRUE` if the node is null
         */
        is_null(): boolean;
        /**
         * Increments the reference count of `node`.
         * @returns a pointer to @node
         */
        ref(): Node;
        /**
         * Seals the given node, making it immutable to further changes.
         *
         * In order to be sealed, the `node` must have a type and value set. The value
         * will be recursively sealed — if the node holds an object, that JSON object
         * will be sealed, etc.
         *
         * If the `node` is already immutable, this is a no-op.
         */
        seal(): void;
        /**
         * Sets `array` inside `node`.
         *
         * The reference count of `array` is increased.
         *
         * It is a programmer error to call this on a node which doesn’t hold an
         * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
         * @param array a JSON array
         */
        set_array(array: Array): void;
        /**
         * Sets `value` as the boolean content of the `node,` replacing any existing
         * content.
         *
         * It is an error to call this on an immutable node, or on a node which is not
         * a value node.
         * @param value a boolean value
         */
        set_boolean(value: boolean): void;
        /**
         * Sets `value` as the double content of the `node,` replacing any existing
         * content.
         *
         * It is an error to call this on an immutable node, or on a node which is not
         * a value node.
         * @param value a double value
         */
        set_double(value: number): void;
        /**
         * Sets `value` as the integer content of the `node,` replacing any existing
         * content.
         *
         * It is an error to call this on an immutable node, or on a node which is not
         * a value node.
         * @param value an integer value
         */
        set_int(value: number): void;
        /**
         * Sets `objects` inside `node`.
         *
         * The reference count of `object` is increased.
         *
         * If `object` is `NULL`, the node’s existing object is cleared.
         *
         * It is an error to call this on an immutable node, or on a node which is not
         * an object node.
         * @param object a JSON object
         */
        set_object(object: Object | null): void;
        /**
         * Sets the parent node for the given `node`.
         *
         * It is an error to call this with an immutable `parent`.
         *
         * The `node` may be immutable.
         * @param parent the parent node
         */
        set_parent(parent: Node | null): void;
        /**
         * Sets `value` as the string content of the `node,` replacing any existing
         * content.
         *
         * It is an error to call this on an immutable node, or on a node which is not
         * a value node.
         * @param value a string value
         */
        set_string(value: string | null): void;
        /**
         * Sets a scalar value inside the given node.
         *
         * The contents of the given `GValue` are copied into the `JsonNode`.
         *
         * The following `GValue` types have a direct mapping to JSON types:
         *
         *  - `G_TYPE_INT64`
         *  - `G_TYPE_DOUBLE`
         *  - `G_TYPE_BOOLEAN`
         *  - `G_TYPE_STRING`
         *
         * JSON-GLib will also automatically promote the following `GValue` types:
         *
         *  - `G_TYPE_INT` to `G_TYPE_INT64`
         *  - `G_TYPE_FLOAT` to `G_TYPE_DOUBLE`
         *
         * It is an error to call this on an immutable node, or on a node which is not
         * a value node.
         * @param value the value to set
         */
        set_value(value: any): void;
        /**
         * Sets `array` inside `node`.
         *
         * The reference count of `array` is not increased.
         *
         * It is a programmer error to call this on a node which doesn’t hold an
         * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
         * @param array a JSON array
         */
        take_array(array: Array): void;
        /**
         * Sets `object` inside `node`.
         *
         * The reference count of `object` is not increased.
         *
         * It is an error to call this on an immutable node, or on a node which is not
         * an object node.
         * @param object a JSON object
         */
        take_object(object: Object): void;
        /**
         * Retrieves the user readable name of the data type contained by `node`.
         *
         * **Note**: The name is only meant for debugging purposes, and there is no
         * guarantee the name will stay the same across different versions.
         * @returns a string containing the name of the type
         */
        type_name(): string | null;
        /**
         * Decrements the reference count of `node`.
         *
         * If the reference count reaches zero, the node is freed.
         */
        unref(): void;
    }

    /**
     * A generic container of JSON data types.
     *
     * `JsonNode` can contain fundamental types (integers, booleans, floating point
     * numbers, strings) and complex types (arrays and objects).
     *
     * When parsing a JSON data stream you extract the root node and walk
     * the node tree by retrieving the type of data contained inside the
     * node with the `JSON_NODE_TYPE` macro. If the node contains a fundamental
     * type you can retrieve a copy of the `GValue` holding it with the
     * [method`Json`.Node.get_value] function, and then use the `GValue` API to extract
     * the data; if the node contains a complex type you can retrieve the
     * [struct`Json`.Object] or the [struct`Json`.Array] using [method`Json`.Node.get_object]
     * or [method`Json`.Node.get_array] respectively, and then retrieve the nodes
     * they contain.
     *
     * A `JsonNode` may be marked as immutable using [method`Json`.Node.seal]. This
     * marks the node and all its descendents as read-only, and means that
     * subsequent calls to setter functions (such as [method`Json`.Node.set_array])
     * on them will abort as a programmer error. By marking a node tree as
     * immutable, it may be referenced in multiple places and its hash value cached
     * for fast lookups, without the possibility of a value deep within the tree
     * changing and affecting hash values. Immutable nodes may be passed to
     * functions which retain a reference to them without needing to take a copy.
     *
     * A `JsonNode` supports two types of memory management: `malloc`/`free`
     * semantics, and reference counting semantics. The two may be mixed to a
     * limited extent: nodes may be allocated (which gives them a reference count
     * of 1), referenced one or more times, unreferenced exactly that number of
     * times (using [method`Json`.Node.unref]), then either unreferenced exactly
     * once more or freed (using [method`Json`.Node.free]) to destroy them.
     * The [method`Json`.Node.free] function must not be used when a node might
     * have a reference count not equal to 1. To this end, JSON-GLib uses
     * [method`Json`.Node.copy] and [method`Json`.Node.unref] internally.
     * @record
     */
    class Node {
        // Own properties of Json-1.0.Json.Node

        static name: string;

        // Constructors of Json-1.0.Json.Node

        /**
         * Allocates a new, uninitialized node.
         *
         * Use [method`Json`.Node.init] and its variants to initialize the returned value.
         * @constructor
         * @returns the newly allocated node
         */
        static alloc(): Node;
        /**
         * Creates a new node holding the given `type`.
         *
         * This is a convenience function for [ctor`Json`.Node.alloc] and
         * [method`Json`.Node.init], and it's the equivalent of:
         *
         * ```c
         *    json_node_init (json_node_alloc (), type);
         * ```
         * @constructor
         * @param type the type of the node to create
         * @returns the newly created node
         */
        constructor(type: NodeType);
        /**
         * Creates a new node holding the given `type`.
         *
         * This is a convenience function for [ctor`Json`.Node.alloc] and
         * [method`Json`.Node.init], and it's the equivalent of:
         *
         * ```c
         *    json_node_init (json_node_alloc (), type);
         * ```
         * @constructor
         * @param type the type of the node to create
         * @returns the newly created node
         */
        static new(type: NodeType): Node;
    }

    interface Object {
        // Owm methods of Json-1.0.Json.Object

        /**
         * Adds a new member for the given name and value into an object.
         *
         * This function will return if the object already contains a member
         * with the same name.
         * @param member_name the name of the member
         * @param node the value of the member
         */
        add_member(member_name: string | null, node: Node): void;
        /**
         * Retrieves a copy of the value of the given member inside an object.
         * @param member_name the name of the JSON object member to access
         * @returns a copy of the value for the   requested object member
         */
        dup_member(member_name: string | null): Node | null;
        /**
         * Check whether `a` and `b` are equal objects, meaning they have the same
         * set of members, and the values of corresponding members are equal.
         * @param b another JSON object
         * @returns `TRUE` if @a and @b are equal, and `FALSE` otherwise
         */
        equal(b: Object): boolean;
        /**
         * Iterates over all members of `object` and calls `func` on
         * each one of them.
         *
         * It is safe to change the value of a member of the oobject
         * from within the iterator function, but it is not safe to add or
         * remove members from the object.
         *
         * The order in which the object members are iterated is the
         * insertion order.
         * @param func the function to be called on each member
         */
        foreach_member(func: ObjectForeach): void;
        /**
         * Convenience function that retrieves the array
         * stored in `member_name` of `object`. It is an error to specify a
         * `member_name` which does not exist.
         *
         * If `member_name` contains `null`, then this function will return `NULL`.
         *
         * See also: [method`Json`.Object.get_member], [method`Json`.Object.has_member]
         * @param member_name the name of the member
         * @returns the array inside the object's member
         */
        get_array_member(member_name: string | null): Array | null;
        /**
         * Convenience function that retrieves the boolean value
         * stored in `member_name` of `object`. It is an error to specify a
         * `member_name` which does not exist.
         *
         * See also: [method`Json`.Object.get_boolean_member_with_default],
         *   [method`Json`.Object.get_member], [method`Json`.Object.has_member]
         * @param member_name the name of the member
         * @returns the boolean value of the object's member
         */
        get_boolean_member(member_name: string | null): boolean;
        /**
         * Convenience function that retrieves the boolean value
         * stored in `member_name` of `object`.
         *
         * If `member_name` does not exist, does not contain a scalar value,
         * or contains `null`, then `default_value` is returned instead.
         * @param member_name the name of the `object` member
         * @param default_value the value to return if `member_name` is not valid
         * @returns the boolean value of the object's member, or the   given default
         */
        get_boolean_member_with_default(
            member_name: string | null,
            default_value: boolean
        ): boolean;
        /**
         * Convenience function that retrieves the floating point value
         * stored in `member_name` of `object`. It is an error to specify a
         * `member_name` which does not exist.
         *
         * See also: [method`Json`.Object.get_double_member_with_default],
         *   [method`Json`.Object.get_member], [method`Json`.Object.has_member]
         * @param member_name the name of the member
         * @returns the floating point value of the object's member
         */
        get_double_member(member_name: string | null): number;
        /**
         * Convenience function that retrieves the floating point value
         * stored in `member_name` of `object`.
         *
         * If `member_name` does not exist, does not contain a scalar value,
         * or contains `null`, then `default_value` is returned instead.
         * @param member_name the name of the `object` member
         * @param default_value the value to return if `member_name` is not valid
         * @returns the floating point value of the object's member, or the   given default
         */
        get_double_member_with_default(
            member_name: string | null,
            default_value: number
        ): number;
        /**
         * Convenience function that retrieves the integer value
         * stored in `member_name` of `object`. It is an error to specify a
         * `member_name` which does not exist.
         *
         * See also: [method`Json`.Object.get_int_member_with_default],
         *   [method`Json`.Object.get_member], [method`Json`.Object.has_member]
         * @param member_name the name of the object member
         * @returns the integer value of the object's member
         */
        get_int_member(member_name: string | null): number;
        /**
         * Convenience function that retrieves the integer value
         * stored in `member_name` of `object`.
         *
         * If `member_name` does not exist, does not contain a scalar value,
         * or contains `null`, then `default_value` is returned instead.
         * @param member_name the name of the object member
         * @param default_value the value to return if `member_name` is not valid
         * @returns the integer value of the object's member, or the   given default
         */
        get_int_member_with_default(
            member_name: string | null,
            default_value: number
        ): number;
        /**
         * Retrieves the value of the given member inside an object.
         * @param member_name the name of the JSON object member to access
         * @returns the value for the   requested object member
         */
        get_member(member_name: string | null): Node | null;
        /**
         * Retrieves all the names of the members of an object.
         *
         * You can obtain the value for each member by iterating the returned list
         * and calling [method`Json`.Object.get_member].
         * @returns the   member names of the object
         */
        get_members(): string[] | null;
        /**
         * Convenience function that checks whether the value
         * stored in `member_name` of `object` is null. It is an error to
         * specify a `member_name` which does not exist.
         *
         * See also: [method`Json`.Object.get_member], [method`Json`.Object.has_member]
         * @param member_name the name of the member
         * @returns `TRUE` if the value is `null`
         */
        get_null_member(member_name: string | null): boolean;
        /**
         * Convenience function that retrieves the object
         * stored in `member_name` of `object`. It is an error to specify a `member_name`
         * which does not exist.
         *
         * If `member_name` contains `null`, then this function will return `NULL`.
         *
         * See also: [method`Json`.Object.get_member], [method`Json`.Object.has_member]
         * @param member_name the name of the member
         * @returns the object inside the object's member
         */
        get_object_member(member_name: string | null): Object | null;
        /**
         * Retrieves the number of members of a JSON object.
         * @returns the number of members
         */
        get_size(): number;
        /**
         * Convenience function that retrieves the string value
         * stored in `member_name` of `object`. It is an error to specify a
         * `member_name` that does not exist.
         *
         * See also: [method`Json`.Object.get_string_member_with_default],
         *   [method`Json`.Object.get_member], [method`Json`.Object.has_member]
         * @param member_name the name of the member
         * @returns the string value of the object's member
         */
        get_string_member(member_name: string | null): string | null;
        /**
         * Convenience function that retrieves the string value
         * stored in `member_name` of `object`.
         *
         * If `member_name` does not exist, does not contain a scalar value,
         * or contains `null`, then `default_value` is returned instead.
         * @param member_name the name of the `object` member
         * @param default_value the value to return if `member_name` is not valid
         * @returns the string value of the object's member, or the   given default
         */
        get_string_member_with_default(
            member_name: string | null,
            default_value: string | null
        ): string | null;
        /**
         * Retrieves all the values of the members of an object.
         * @returns the   member values of the object
         */
        get_values(): Node[] | null;
        /**
         * Checks whether `object` has a member named `member_name`.
         * @param member_name the name of a JSON object member
         * @returns `TRUE` if the JSON object has the requested member
         */
        has_member(member_name: string | null): boolean;
        /**
         * Calculate a hash value for the given `key` (a JSON object).
         *
         * The hash is calculated over the object and all its members, recursively. If
         * the object is immutable, this is a fast operation; otherwise, it scales
         * proportionally with the number of members in the object.
         * @returns hash value for @key
         */
        hash(): number;
        /**
         * Checks whether the given object has been marked as immutable by calling
         * [method`Json`.Object.seal] on it.
         * @returns `TRUE` if the object is immutable
         */
        is_immutable(): boolean;
        /**
         * Acquires a reference on the given object.
         * @returns the given object, with the reference count   increased by one.
         */
        ref(): Object;
        /**
         * Removes `member_name` from `object,` freeing its allocated resources.
         * @param member_name the name of the member to remove
         */
        remove_member(member_name: string | null): void;
        /**
         * Seals the object, making it immutable to further changes.
         *
         * This function will recursively seal all members of the object too.
         *
         * If the object is already immutable, this is a no-op.
         */
        seal(): void;
        /**
         * Convenience function for setting an object member with an array value.
         *
         * See also: [method`Json`.Object.set_member], [method`Json`.Node.take_array]
         * @param member_name the name of the member
         * @param value the value of the member
         */
        set_array_member(member_name: string | null, value: Array): void;
        /**
         * Convenience function for setting an object member with a boolean value.
         *
         * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_boolean]
         * @param member_name the name of the member
         * @param value the value of the member
         */
        set_boolean_member(member_name: string | null, value: boolean): void;
        /**
         * Convenience function for setting an object member with a floating point value.
         *
         * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_double]
         * @param member_name the name of the member
         * @param value the value of the member
         */
        set_double_member(member_name: string | null, value: number): void;
        /**
         * Convenience function for setting an object member with an integer value.
         *
         * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_int]
         * @param member_name the name of the member
         * @param value the value of the member
         */
        set_int_member(member_name: string | null, value: number): void;
        /**
         * Sets the value of a member inside an object.
         *
         * If the object does not have a member with the given name, a new member
         * is created.
         *
         * If the object already has a member with the given name, the current
         * value is overwritten with the new.
         * @param member_name the name of the member
         * @param node the value of the member
         */
        set_member(member_name: string | null, node: Node): void;
        /**
         * Convenience function for setting an object member with a `null` value.
         *
         * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_null]
         * @param member_name the name of the member
         */
        set_null_member(member_name: string | null): void;
        /**
         * Convenience function for setting an object member with an object value.
         *
         * See also: [method`Json`.Object.set_member], [method`Json`.Node.take_object]
         * @param member_name the name of the member
         * @param value the value of the member
         */
        set_object_member(member_name: string | null, value: Object): void;
        /**
         * Convenience function for setting an object member with a string value.
         *
         * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_string]
         * @param member_name the name of the member
         * @param value the value of the member
         */
        set_string_member(
            member_name: string | null,
            value: string | null
        ): void;
        /**
         * Releases a reference on the given object.
         *
         * If the reference count reaches zero, the object is destroyed and
         * all its resources are freed.
         */
        unref(): void;
    }

    /**
     * `JsonObject` is the representation of the object type inside JSON.
     *
     * A `JsonObject` contains [struct`Json`.Node] "members", which may contain
     * fundamental types, arrays or other objects; each member of an object is
     * accessed using a unique string, or "name".
     *
     * Since objects can be arbitrarily big, copying them can be expensive; for
     * this reason they are reference counted. You can control the lifetime of
     * a `JsonObject` using [method`Json`.Object.ref] and [method`Json`.Object.unref].
     *
     * To add or overwrite a member with a given name, use [method`Json`.Object.set_member].
     *
     * To extract a member with a given name, use [method`Json`.Object.get_member].
     *
     * To retrieve the list of members, use [method`Json`.Object.get_members].
     *
     * To retrieve the size of the object (that is, the number of members it has),
     * use [method`Json`.Object.get_size].
     * @record
     */
    class Object {
        // Own properties of Json-1.0.Json.Object

        static name: string;

        // Constructors of Json-1.0.Json.Object

        /**
         * Creates a new object.
         * @constructor
         * @returns the newly created object
         */
        constructor();
        /**
         * Creates a new object.
         * @constructor
         * @returns the newly created object
         */
        static new(): Object;
    }

    interface ObjectIter {
        // Owm methods of Json-1.0.Json.ObjectIter

        /**
         * Initialises the `iter` and associate it with `object`.
         *
         * ```c
         * JsonObjectIter iter;
         * const gchar *member_name;
         * JsonNode *member_node;
         *
         * json_object_iter_init (&iter, some_object);
         * while (json_object_iter_next (&iter, &member_name, &member_node))
         *   {
         *     // Do something with `member_name` and `member_node`.
         *   }
         * ```
         *
         * The iterator initialized with this function will iterate the
         * members of the object in an undefined order.
         *
         * See also: [method`Json`.ObjectIter.init_ordered]
         * @param object the JSON object to iterate over
         */
        init(object: Object): void;
        /**
         * Initialises the `iter` and associate it with `object`.
         *
         * ```c
         * JsonObjectIter iter;
         * const gchar *member_name;
         * JsonNode *member_node;
         *
         * json_object_iter_init_ordered (&iter, some_object);
         * while (json_object_iter_next_ordered (&iter, &member_name, &member_node))
         *   {
         *     // Do something with `member_name` and `member_node`.
         *   }
         * ```
         *
         * See also: [method`Json`.ObjectIter.init]
         * @param object the JSON object to iterate over
         */
        init_ordered(object: Object): void;
        /**
         * Advances the iterator and retrieves the next member in the object.
         *
         * If the end of the object is reached, `FALSE` is returned and `member_name`
         * and `member_node` are set to invalid values. After that point, the `iter`
         * is invalid.
         *
         * The order in which members are returned by the iterator is undefined. The
         * iterator is invalidated if the object is modified during iteration.
         *
         * You must use this function with an iterator initialized with
         * [method`Json`.ObjectIter.init]; using this function with an iterator
         * initialized with [method`Json`.ObjectIter.init_ordered] yields undefined
         * behavior.
         *
         * See also: [method`Json`.ObjectIter.next_ordered]
         * @returns `TRUE` if @member_name and @member_node are valid; `FALSE` if   there are no more members
         */
        next(): [
            /* returnType */ boolean,
            /* member_name */ string | null,
            /* member_node */ Node
        ];
        /**
         * Advances the iterator and retrieves the next member in the object.
         *
         * If the end of the object is reached, `FALSE` is returned and `member_name` and
         * `member_node` are set to invalid values. After that point, the `iter` is invalid.
         *
         * The order in which members are returned by the iterator is the same order in
         * which the members were added to the `JsonObject`. The iterator is invalidated
         * if its `JsonObject` is modified during iteration.
         *
         * You must use this function with an iterator initialized with
         * [method`Json`.ObjectIter.init_ordered]; using this function with an iterator
         * initialized with [method`Json`.ObjectIter.init] yields undefined behavior.
         *
         * See also: [method`Json`.ObjectIter.next]
         * @returns `TRUE `if @member_name and @member_node are valid; `FALSE` if the end    of the object has been reached
         */
        next_ordered(): [
            /* returnType */ boolean,
            /* member_name */ string | null,
            /* member_node */ Node
        ];
    }

    /**
     * An iterator object used to iterate over the members of a JSON object.
     *
     * `JsonObjectIter` must be allocated on the stack and initialised using
     * [method`Json`.ObjectIter.init] or [method`Json`.ObjectIter.init_ordered].
     *
     * The iterator is invalidated if the object is modified during
     * iteration.
     *
     * All the fields in the `JsonObjectIter` structure are private and should
     * never be accessed directly.
     * @record
     */
    class ObjectIter {
        // Own properties of Json-1.0.Json.ObjectIter

        static name: string;
    }

    interface ParserClass {
        // Own fields of Json-1.0.Json.ParserClass

        parse_start: (parser: Parser) => void;
        object_start: (parser: Parser) => void;
        object_member: (
            parser: Parser,
            object: Object,
            member_name: string | null
        ) => void;
        object_end: (parser: Parser, object: Object) => void;
        array_start: (parser: Parser) => void;
        array_element: (parser: Parser, array: Array, index_: number) => void;
        array_end: (parser: Parser, array: Array) => void;
        parse_end: (parser: Parser) => void;
        error: (parser: Parser, error: GLib.Error) => void;
    }

    /**
     * The class structure for the JsonParser type.
     * @record
     */
    abstract class ParserClass {
        // Own properties of Json-1.0.Json.ParserClass

        static name: string;
    }

    interface ParserPrivate {}

    class ParserPrivate {
        // Own properties of Json-1.0.Json.ParserPrivate

        static name: string;
    }

    interface PathClass {}

    abstract class PathClass {
        // Own properties of Json-1.0.Json.PathClass

        static name: string;
    }

    interface ReaderClass {}

    abstract class ReaderClass {
        // Own properties of Json-1.0.Json.ReaderClass

        static name: string;
    }

    interface ReaderPrivate {}

    class ReaderPrivate {
        // Own properties of Json-1.0.Json.ReaderPrivate

        static name: string;
    }

    interface SerializableIface {
        // Own fields of Json-1.0.Json.SerializableIface

        serialize_property: (
            serializable: Serializable,
            property_name: string | null,
            value: any,
            pspec: GObject.ParamSpec
        ) => Node;
        deserialize_property: (
            serializable: Serializable,
            property_name: string | null,
            pspec: GObject.ParamSpec,
            property_node: Node
        ) => [/* returnType */ boolean, /* value */ any];
        find_property: (
            serializable: Serializable,
            name: string | null
        ) => GObject.ParamSpec | null;
        set_property: (
            serializable: Serializable,
            pspec: GObject.ParamSpec,
            value: any
        ) => void;
        get_property: (
            serializable: Serializable,
            pspec: GObject.ParamSpec
        ) => /* value */ any;
    }

    /**
     * Interface that allows serializing and deserializing object instances
     * with properties storing complex data types.
     *
     * The [func`Json`.gobject_from_data] and [func`Json`.gobject_to_data]
     * functions will check if the passed object type implements this interface,
     * so it can also be used to override the default property serialization
     * sequence.
     * @record
     */
    abstract class SerializableIface {
        // Own properties of Json-1.0.Json.SerializableIface

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

export default Json;
// END



/**
 * JavaScriptCore 4.0
 *
 * Generated from 2.30.3
 */
import * as GObject from "./gobject";
import * as GLib from "./glib";

export const MAJOR_VERSION: number;

export const MICRO_VERSION: number;

export const MINOR_VERSION: number;

export const OPTIONS_USE_DFG: string;

export const OPTIONS_USE_FTL: string;

export const OPTIONS_USE_JIT: string;

export const OPTIONS_USE_LLINT: string;

export function get_major_version(): number;

export function get_micro_version(): number;

export function get_minor_version(): number;

export function options_foreach(_function: OptionsFunc): void;

export function options_get_boolean(option: string): [boolean, boolean];

export function options_get_double(option: string): [boolean, number];

export function options_get_int(option: string): [boolean, number];

export function options_get_option_group(): GLib.OptionGroup;

export function options_get_range_string(option: string): [boolean, string];

export function options_get_size(option: string): [boolean, number];

export function options_get_string(option: string): [boolean, string];

export function options_get_uint(option: string): [boolean, number];

export function options_set_boolean(option: string, value: boolean): boolean;

export function options_set_double(option: string, value: number): boolean;

export function options_set_int(option: string, value: number): boolean;

export function options_set_range_string(option: string, value: string): boolean;

export function options_set_size(option: string, value: number): boolean;

export function options_set_string(option: string, value: string): boolean;

export function options_set_uint(option: string, value: number): boolean;

export type ClassDeletePropertyFunction = (jsc_class: Class, context: Context, instance: any | null, name: string) => boolean;

export type ClassEnumeratePropertiesFunction = (jsc_class: Class, context: Context, instance?: any | null) => (string[] | null);

export type ClassGetPropertyFunction = (jsc_class: Class, context: Context, instance: any | null, name: string) => (Value | null);

export type ClassHasPropertyFunction = (jsc_class: Class, context: Context, instance: any | null, name: string) => boolean;

export type ClassSetPropertyFunction = (jsc_class: Class, context: Context, instance: any | null, name: string, value: Value) => boolean;

export type ExceptionHandler = (context: Context, exception: Exception) => void;

export type OptionsFunc = (option: string, type: OptionType, description?: string | null) => boolean;
export namespace CheckSyntaxMode {
    export const $gtype: GObject.GType<CheckSyntaxMode>;
}
export enum CheckSyntaxMode {
    SCRIPT = 0,
    MODULE = 1,
}
export namespace CheckSyntaxResult {
    export const $gtype: GObject.GType<CheckSyntaxResult>;
}
export enum CheckSyntaxResult {
    SUCCESS = 0,
    RECOVERABLE_ERROR = 1,
    IRRECOVERABLE_ERROR = 2,
    UNTERMINATED_LITERAL_ERROR = 3,
    OUT_OF_MEMORY_ERROR = 4,
    STACK_OVERFLOW_ERROR = 5,
}
export namespace OptionType {
    export const $gtype: GObject.GType<OptionType>;
}
export enum OptionType {
    BOOLEAN = 0,
    INT = 1,
    UINT = 2,
    SIZE = 3,
    DOUBLE = 4,
    STRING = 5,
    RANGE_STRING = 6,
}
export namespace ValuePropertyFlags {
    export const $gtype: GObject.GType<ValuePropertyFlags>;
}
export enum ValuePropertyFlags {
    CONFIGURABLE = 1,
    ENUMERABLE = 2,
    WRITABLE = 4,
}
export module Class {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        context: Context;
        name: string;
    }
}
export class Class extends GObject.Object {
    static $gtype: GObject.GType<Class>;
    constructor(properties?: Partial<Class.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Class.ConstructorProperties>, ...args: any[]): void;
    // Properties
    context: Context;
    name: string;
    // Members
    add_constructor_variadic(name: string | null, callback: GObject.Callback, destroy_notify: GLib.DestroyNotify | null, return_type: GObject.GType): Value;
    add_constructor(name: string | null, callback: GObject.Callback, destroy_notify: GLib.DestroyNotify | null, return_type: GObject.GType, parameter_types?: GObject.GType[] | null): Value;
    add_method_variadic(name: string, callback: GObject.Callback, destroy_notify: GLib.DestroyNotify | null, return_type: GObject.GType): void;
    add_method(name: string, callback: GObject.Callback, destroy_notify: GLib.DestroyNotify | null, return_type: GObject.GType, parameter_types?: GObject.GType[] | null): void;
    add_property(name: string, property_type: GObject.GType, getter?: GObject.Callback | null, setter?: GObject.Callback | null, destroy_notify?: GLib.DestroyNotify | null): void;
    get_name(): string;
    get_parent(): Class;
}
export module Context {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        virtual_machine: VirtualMachine;
    }
}
export class Context extends GObject.Object {
    static $gtype: GObject.GType<Context>;
    constructor(properties?: Partial<Context.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Context.ConstructorProperties>, ...args: any[]): void;
    // Properties
    virtual_machine: VirtualMachine;
    // Constructors
    static ["new"](): Context;
    static new_with_virtual_machine(vm: VirtualMachine): Context;
    // Members
    check_syntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, line_number: number): [CheckSyntaxResult, Exception | null];
    clear_exception(): void;
    evaluate(code: string, length: number): Value;
    evaluate_in_object(code: string, length: number, object_instance: any | null, object_class: Class | null, uri: string, line_number: number): [Value, Value];
    evaluate_with_source_uri(code: string, length: number, uri: string, line_number: number): Value;
    get_exception(): Exception | null;
    get_global_object(): Value;
    get_value(name: string): Value;
    get_virtual_machine(): VirtualMachine;
    pop_exception_handler(): void;
    push_exception_handler(handler: ExceptionHandler, destroy_notify?: GLib.DestroyNotify | null): void;
    register_class(name: string, parent_class?: Class | null, vtable?: ClassVTable | null, destroy_notify?: GLib.DestroyNotify | null): Class;
    set_value(name: string, value: Value): void;
    ["throw"](error_message: string): void;
    throw_exception(exception: Exception): void;
    throw_with_name(error_name: string, error_message: string): void;
    static get_current(): Context | null;
}
export module Exception {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Exception extends GObject.Object {
    static $gtype: GObject.GType<Exception>;
    constructor(properties?: Partial<Exception.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Exception.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](context: Context, message: string): Exception;
    static new_with_name(context: Context, name: string, message: string): Exception;
    // Members
    get_backtrace_string(): string | null;
    get_column_number(): number;
    get_line_number(): number;
    get_message(): string;
    get_name(): string;
    get_source_uri(): string | null;
    report(): string;
    to_string(): string;
}
export module Value {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        context: Context;
    }
}
export class Value extends GObject.Object {
    static $gtype: GObject.GType<Value>;
    constructor(properties?: Partial<Value.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Value.ConstructorProperties>, ...args: any[]): void;
    // Properties
    context: Context;
    // Constructors
    static new_array_from_garray(context: Context, array?: Value[] | null): Value;
    static new_array_from_strv(context: Context, strv: string[]): Value;
    static new_boolean(context: Context, value: boolean): Value;
    static new_from_json(context: Context, json: string): Value;
    static new_function_variadic(context: Context, name: string | null, callback: GObject.Callback, destroy_notify: GLib.DestroyNotify | null, return_type: GObject.GType): Value;
    static new_function(context: Context, name: string | null, callback: GObject.Callback, destroy_notify: GLib.DestroyNotify | null, return_type: GObject.GType, parameter_types?: GObject.GType[] | null): Value;
    static new_null(context: Context): Value;
    static new_number(context: Context, number: number): Value;
    static new_object(context: Context, instance?: any | null, jsc_class?: Class | null): Value;
    static new_string(context: Context, string?: string | null): Value;
    static new_string_from_bytes(context: Context, bytes?: GLib.Bytes | null): Value;
    static new_undefined(context: Context): Value;
    // Members
    constructor_call(parameters?: Value[] | null): Value;
    function_call(parameters?: Value[] | null): Value;
    get_context(): Context;
    is_array(): boolean;
    is_boolean(): boolean;
    is_constructor(): boolean;
    is_function(): boolean;
    is_null(): boolean;
    is_number(): boolean;
    is_object(): boolean;
    is_string(): boolean;
    is_undefined(): boolean;
    object_define_property_accessor(property_name: string, flags: ValuePropertyFlags, property_type: GObject.GType, getter?: GObject.Callback | null, setter?: GObject.Callback | null, destroy_notify?: GLib.DestroyNotify | null): void;
    object_define_property_data(property_name: string, flags: ValuePropertyFlags, property_value?: Value | null): void;
    object_delete_property(name: string): boolean;
    object_enumerate_properties(): string[] | null;
    object_get_property(name: string): Value;
    object_get_property_at_index(index: number): Value;
    object_has_property(name: string): boolean;
    object_invoke_method(name: string, parameters?: Value[] | null): Value;
    object_is_instance_of(name: string): boolean;
    object_set_property(name: string, property: Value): void;
    object_set_property_at_index(index: number, property: Value): void;
    to_boolean(): boolean;
    to_double(): number;
    to_int32(): number;
    to_json(indent: number): string;
    to_string(): string;
    to_string_as_bytes(): GLib.Bytes;
}
export module VirtualMachine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class VirtualMachine extends GObject.Object {
    static $gtype: GObject.GType<VirtualMachine>;
    constructor(properties?: Partial<VirtualMachine.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VirtualMachine.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): VirtualMachine;
}
export module WeakValue {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        value: Value;
    }
}
export class WeakValue extends GObject.Object {
    static $gtype: GObject.GType<WeakValue>;
    constructor(properties?: Partial<WeakValue.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WeakValue.ConstructorProperties>, ...args: any[]): void;
    // Properties
    value: Value;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'cleared', callback: (_source: this) => void): number;
    connect_after(signal: 'cleared', callback: (_source: this) => void): number;
    emit(signal: 'cleared'): void;
    // Constructors
    static ["new"](value: Value): WeakValue;
    // Members
    get_value(): Value;
}
export class ClassVTable {
    static $gtype: GObject.GType<ClassVTable>;
    constructor(copy: ClassVTable);
    // Fields
    get_property: ClassGetPropertyFunction;
    set_property: ClassSetPropertyFunction;
    has_property: ClassHasPropertyFunction;
    delete_property: ClassDeletePropertyFunction;
    enumerate_properties: ClassEnumeratePropertiesFunction;
}
export class ContextPrivate {
    static $gtype: GObject.GType<ContextPrivate>;
    constructor(copy: ContextPrivate);
}
export class ExceptionPrivate {
    static $gtype: GObject.GType<ExceptionPrivate>;
    constructor(copy: ExceptionPrivate);
}
export class ValuePrivate {
    static $gtype: GObject.GType<ValuePrivate>;
    constructor(copy: ValuePrivate);
}
export class VirtualMachinePrivate {
    static $gtype: GObject.GType<VirtualMachinePrivate>;
    constructor(copy: VirtualMachinePrivate);
}
export class WeakValuePrivate {
    static $gtype: GObject.GType<WeakValuePrivate>;
    constructor(copy: WeakValuePrivate);
}
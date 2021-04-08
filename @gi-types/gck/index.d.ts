/**
 * Gck 1
 *
 * Generated from 1.0.0
 */

import * as GObject from "@gi-types/gobject";
import * as Gio from "@gi-types/gio";
import * as GLib from "@gi-types/glib";

export const INVALID: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const URI_FOR_MODULE_WITH_VERSION: number;
export const URI_FOR_OBJECT_ON_TOKEN: number;
export const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number;
export const VENDOR_CODE: number;
export function builder_unref(builder?: any | null): void;
export function error_get_quark(): GLib.Quark;
export function list_get_boxed_type(): GObject.GType;
export function message_from_rv(rv: number): string;
export function modules_enumerate_objects(
    modules: Module[],
    attrs: Attributes,
    session_options: SessionOptions
): Enumerator;
export function modules_enumerate_uri(modules: Module[], uri: string, session_options: SessionOptions): Enumerator;
export function modules_get_slots(modules: Module[], token_present: boolean): Slot[];
export function modules_initialize_registered(cancellable?: Gio.Cancellable | null): Module[];
export function modules_initialize_registered_async(cancellable?: Gio.Cancellable | null): Promise<Module[]>;
export function modules_initialize_registered_async(
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null
): void;
export function modules_initialize_registered_async(
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null
): Promise<Module[]> | void;
export function modules_initialize_registered_finish(result: Gio.AsyncResult): Module[];
export function modules_object_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object | null;
export function modules_objects_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object[];
export function modules_token_for_uri(modules: Module[], uri: string): Slot;
export function modules_tokens_for_uri(modules: Module[], uri: string): Slot[];
export function objects_from_handle_array(session: Session, object_handles: number[]): Object[];
export function slots_enumerate_objects(slots: Slot[], match: Attributes, options: SessionOptions): Enumerator;
export function uri_build(uri_data: UriData, flags: UriFlags): string;
export function uri_error_get_quark(): GLib.Quark;
export function uri_parse(string: string, flags: UriFlags): UriData;
export function value_to_boolean(value: Uint8Array | string, result: boolean): boolean;
export function value_to_ulong(value: Uint8Array | string, result: number): boolean;
export type Allocator = (data: any | null, length: number) => any | null;

export namespace BuilderFlags {
    export const $gtype: GObject.GType<BuilderFlags>;
}

export enum BuilderFlags {
    NONE = 0,
    SECURE_MEMORY = 1,
}

export namespace Error {
    export const $gtype: GObject.GType<Error>;
}

export enum Error {
    PROBLEM = -951891199,
}

export namespace UriError {
    export const $gtype: GObject.GType<UriError>;
}

export enum UriError {
    BAD_SCHEME = 1,
    BAD_ENCODING = 2,
    BAD_SYNTAX = 3,
    BAD_VERSION = 4,
    NOT_FOUND = 5,
}

export namespace SessionOptions {
    export const $gtype: GObject.GType<SessionOptions>;
}

export enum SessionOptions {
    READ_ONLY = 0,
    READ_WRITE = 2,
    LOGIN_USER = 4,
    AUTHENTICATE = 8,
}

export namespace UriFlags {
    export const $gtype: GObject.GType<UriFlags>;
}

export enum UriFlags {
    FOR_OBJECT = 2,
    FOR_TOKEN = 4,
    FOR_MODULE = 8,
    WITH_VERSION = 16,
    FOR_ANY = 65535,
}
export module Enumerator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        chained: Enumerator;
        interaction: Gio.TlsInteraction;
    }
}
export class Enumerator extends GObject.Object {
    static $gtype: GObject.GType<Enumerator>;

    constructor(properties?: Partial<Enumerator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Enumerator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    chained: Enumerator;
    interaction: Gio.TlsInteraction;

    // Members

    get_chained(): Enumerator | null;
    get_interaction(): Gio.TlsInteraction | null;
    get_object_type(): GObject.GType;
    next(cancellable?: Gio.Cancellable | null): Object | null;
    next_async(max_objects: number, cancellable?: Gio.Cancellable | null): Promise<Object[]>;
    next_async(
        max_objects: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    next_async(
        max_objects: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Object[]> | void;
    next_finish(result: Gio.AsyncResult): Object[];
    next_n(max_objects: number, cancellable?: Gio.Cancellable | null): Object[];
    set_chained(chained?: Enumerator | null): void;
    set_interaction(interaction?: Gio.TlsInteraction | null): void;
    set_object_type(object_type: GObject.GType, attr_types: number[]): void;
}
export module Module {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        functions: any;
        path: string;
    }
}
export class Module extends GObject.Object {
    static $gtype: GObject.GType<Module>;

    constructor(properties?: Partial<Module.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Module.ConstructorProperties>, ...args: any[]): void;

    // Properties
    functions: any;
    path: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "authenticate-object",
        callback: (_source: this, object: Object, label: string, password: any | null) => boolean
    ): number;
    connect_after(
        signal: "authenticate-object",
        callback: (_source: this, object: Object, label: string, password: any | null) => boolean
    ): number;
    emit(signal: "authenticate-object", object: Object, label: string, password: any | null): void;
    connect(
        signal: "authenticate-slot",
        callback: (_source: this, slot: Slot, string: string, password: any | null) => boolean
    ): number;
    connect_after(
        signal: "authenticate-slot",
        callback: (_source: this, slot: Slot, string: string, password: any | null) => boolean
    ): number;
    emit(signal: "authenticate-slot", slot: Slot, string: string, password: any | null): void;

    // Members

    equal(module2: Module): boolean;
    get_info(): ModuleInfo;
    get_path(): string;
    get_slots(token_present: boolean): Slot[];
    hash(): number;
    match(uri: UriData): boolean;
    vfunc_authenticate_object(object: Object, label: string, password: string): boolean;
    vfunc_authenticate_slot(slot: Slot, label: string, password: string): boolean;
    static initialize(path: string, cancellable?: Gio.Cancellable | null): Module;
    static initialize_async(path: string, cancellable?: Gio.Cancellable | null): Promise<Module | null>;
    static initialize_async(
        path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Module> | null
    ): void;
    static initialize_async(
        path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Module> | null
    ): Promise<Module | null> | void;
    static initialize_finish(result: Gio.AsyncResult): Module | null;
}
export module Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        handle: number;
        module: Module;
        session: Session;
    }
}
export class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: number;
    module: Module;
    session: Session;

    // Members

    cache_lookup(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes;
    cache_lookup_async(attr_types: number[], cancellable?: Gio.Cancellable | null): Promise<Attributes>;
    cache_lookup_async(
        attr_types: number[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    cache_lookup_async(
        attr_types: number[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Attributes> | void;
    cache_lookup_finish(result: Gio.AsyncResult): Attributes;
    destroy(cancellable?: Gio.Cancellable | null): boolean;
    destroy_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    destroy_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    destroy_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    destroy_finish(result: Gio.AsyncResult): boolean;
    equal(object2: Object): boolean;
    get_async(attr_types: number[], cancellable?: Gio.Cancellable | null): Promise<Attributes>;
    get_async(
        attr_types: number[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_async(
        attr_types: number[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Attributes> | void;
    get_data(attr_type: number, cancellable?: Gio.Cancellable | null): Uint8Array;
    get_data(...args: never[]): never;
    get_data_async(attr_type: number, allocator: Allocator, cancellable?: Gio.Cancellable | null): Promise<Uint8Array>;
    get_data_async(
        attr_type: number,
        allocator: Allocator,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_data_async(
        attr_type: number,
        allocator: Allocator,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Uint8Array> | void;
    get_data_finish(result: Gio.AsyncResult): Uint8Array;
    get_finish(result: Gio.AsyncResult): Attributes;
    get_full(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes;
    get_handle(): number;
    get_module(): Module;
    get_session(): Session;
    get_template(attr_type: number, cancellable?: Gio.Cancellable | null): Attributes;
    get_template_async(attr_type: number, cancellable?: Gio.Cancellable | null): Promise<Attributes>;
    get_template_async(
        attr_type: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_template_async(
        attr_type: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Attributes> | void;
    get_template_finish(result: Gio.AsyncResult): Attributes;
    hash(): number;
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean;
    set(...args: never[]): never;
    set_async(attrs: Attributes, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_async(
        attrs: Attributes,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_async(
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_finish(result: Gio.AsyncResult): boolean;
    set_template(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean;
    set_template_async(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_template_async(
        attr_type: number,
        attrs: Attributes,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_template_async(
        attr_type: number,
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_template_finish(result: Gio.AsyncResult): boolean;
    static from_handle(session: Session, object_handle: number): Object;
}
export module Password {
    export interface ConstructorProperties extends Gio.TlsPassword.ConstructorProperties {
        [key: string]: any;
        key: Object;
        module: Module;
        token: Slot;
    }
}
export class Password extends Gio.TlsPassword {
    static $gtype: GObject.GType<Password>;

    constructor(properties?: Partial<Password.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Password.ConstructorProperties>, ...args: any[]): void;

    // Properties
    key: Object;
    module: Module;
    token: Slot;

    // Members

    get_key(): Object;
    get_module(): Module;
    get_token(): Slot;
}
export module Session {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        app_data: any;
        appData: any;
        handle: number;
        interaction: Gio.TlsInteraction;
        module: Module;
        opening_flags: number;
        openingFlags: number;
        options: SessionOptions;
        slot: Slot;
    }
}
export class Session extends GObject.Object implements Gio.AsyncInitable<Session>, Gio.Initable {
    static $gtype: GObject.GType<Session>;

    constructor(properties?: Partial<Session.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Session.ConstructorProperties>, ...args: any[]): void;

    // Properties
    app_data: any;
    appData: any;
    handle: number;
    interaction: Gio.TlsInteraction;
    module: Module;
    opening_flags: number;
    openingFlags: number;
    options: SessionOptions;
    slot: Slot;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "discard-handle", callback: (_source: this, handle: number) => boolean): number;
    connect_after(signal: "discard-handle", callback: (_source: this, handle: number) => boolean): number;
    emit(signal: "discard-handle", handle: number): void;

    // Members

    create_object(attrs: Attributes, cancellable?: Gio.Cancellable | null): Object;
    create_object_async(attrs: Attributes, cancellable?: Gio.Cancellable | null): Promise<Object>;
    create_object_async(
        attrs: Attributes,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create_object_async(
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Object> | void;
    create_object_finish(result: Gio.AsyncResult): Object;
    decrypt(
        key: Object,
        mech_type: number,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): Uint8Array;
    decrypt_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): Promise<Uint8Array>;
    decrypt_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    decrypt_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Uint8Array> | void;
    decrypt_finish(result: Gio.AsyncResult): Uint8Array;
    decrypt_full(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): Uint8Array;
    derive_key(base: Object, mech_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object;
    derive_key_async(
        base: Object,
        mechanism: Mechanism,
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null
    ): Promise<Object>;
    derive_key_async(
        base: Object,
        mechanism: Mechanism,
        attrs: Attributes,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    derive_key_async(
        base: Object,
        mechanism: Mechanism,
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Object> | void;
    derive_key_finish(result: Gio.AsyncResult): Object;
    derive_key_full(
        base: Object,
        mechanism: Mechanism,
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null
    ): Object;
    encrypt(
        key: Object,
        mech_type: number,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): Uint8Array;
    encrypt_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): Promise<Uint8Array>;
    encrypt_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    encrypt_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Uint8Array> | void;
    encrypt_finish(result: Gio.AsyncResult): Uint8Array;
    encrypt_full(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): Uint8Array;
    enumerate_objects(match: Attributes): Enumerator;
    find_handles(match: Attributes, cancellable?: Gio.Cancellable | null): number[] | null;
    find_handles_async(match: Attributes, cancellable?: Gio.Cancellable | null): Promise<number[] | null>;
    find_handles_async(
        match: Attributes,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    find_handles_async(
        match: Attributes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<number[] | null> | void;
    find_handles_finish(result: Gio.AsyncResult): number[] | null;
    find_objects(match: Attributes, cancellable?: Gio.Cancellable | null): Object[];
    find_objects_async(match: Attributes, cancellable?: Gio.Cancellable | null): Promise<Object[]>;
    find_objects_async(
        match: Attributes,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    find_objects_async(
        match: Attributes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Object[]> | void;
    find_objects_finish(result: Gio.AsyncResult): Object[];
    generate_key_pair(
        mech_type: number,
        public_attrs: Attributes,
        private_attrs: Attributes,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Object | null, Object | null];
    generate_key_pair_async(
        mechanism: Mechanism,
        public_attrs: Attributes,
        private_attrs: Attributes,
        cancellable?: Gio.Cancellable | null
    ): Promise<[Object | null, Object | null]>;
    generate_key_pair_async(
        mechanism: Mechanism,
        public_attrs: Attributes,
        private_attrs: Attributes,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    generate_key_pair_async(
        mechanism: Mechanism,
        public_attrs: Attributes,
        private_attrs: Attributes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Object | null, Object | null]> | void;
    generate_key_pair_finish(result: Gio.AsyncResult): [boolean, Object | null, Object | null];
    generate_key_pair_full(
        mechanism: Mechanism,
        public_attrs: Attributes,
        private_attrs: Attributes,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Object | null, Object | null];
    get_handle(): number;
    get_info(): SessionInfo;
    get_interaction(): Gio.TlsInteraction | null;
    get_module(): Module;
    get_options(): SessionOptions;
    get_slot(): Slot;
    get_state(): number;
    init_pin(pin?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean;
    init_pin_async(pin?: Uint8Array | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_pin_async(
        pin: Uint8Array | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_pin_async(
        pin?: Uint8Array | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_pin_finish(result: Gio.AsyncResult): boolean;
    login(user_type: number, pin?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean;
    login_async(user_type: number, pin?: Uint8Array | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    login_async(
        user_type: number,
        pin: Uint8Array | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    login_async(
        user_type: number,
        pin?: Uint8Array | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    login_finish(result: Gio.AsyncResult): boolean;
    login_interactive(
        user_type: number,
        interaction?: Gio.TlsInteraction | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    login_interactive_async(
        user_type: number,
        interaction?: Gio.TlsInteraction | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    login_interactive_async(
        user_type: number,
        interaction: Gio.TlsInteraction | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    login_interactive_async(
        user_type: number,
        interaction?: Gio.TlsInteraction | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    login_interactive_finish(result: Gio.AsyncResult): boolean;
    logout(cancellable?: Gio.Cancellable | null): boolean;
    logout_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    logout_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    logout_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    logout_finish(result: Gio.AsyncResult): boolean;
    set_interaction(interaction?: Gio.TlsInteraction | null): void;
    set_pin(old_pin?: Uint8Array | null, new_pin?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean;
    set_pin_async(
        old_pin: Uint8Array | null,
        n_old_pin: number,
        new_pin?: Uint8Array | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    set_pin_async(
        old_pin: Uint8Array | null,
        n_old_pin: number,
        new_pin: Uint8Array | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_pin_async(
        old_pin: Uint8Array | null,
        n_old_pin: number,
        new_pin?: Uint8Array | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_pin_finish(result: Gio.AsyncResult): boolean;
    sign(key: Object, mech_type: number, input: Uint8Array | string, cancellable?: Gio.Cancellable | null): Uint8Array;
    sign_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): Promise<Uint8Array>;
    sign_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    sign_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Uint8Array> | void;
    sign_finish(result: Gio.AsyncResult): Uint8Array;
    sign_full(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        n_result: number,
        cancellable?: Gio.Cancellable | null
    ): number;
    unwrap_key(
        wrapper: Object,
        mech_type: number,
        input: Uint8Array | string,
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null
    ): Object;
    unwrap_key_async(
        wrapper: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null
    ): Promise<Object>;
    unwrap_key_async(
        wrapper: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        attrs: Attributes,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    unwrap_key_async(
        wrapper: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Object> | void;
    unwrap_key_finish(result: Gio.AsyncResult): Object;
    unwrap_key_full(
        wrapper: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        attrs: Attributes,
        cancellable?: Gio.Cancellable | null
    ): Object;
    verify(
        key: Object,
        mech_type: number,
        input: Uint8Array | string,
        signature: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    verify_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        signature: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    verify_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        signature: Uint8Array | string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    verify_async(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        signature: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    verify_finish(result: Gio.AsyncResult): boolean;
    verify_full(
        key: Object,
        mechanism: Mechanism,
        input: Uint8Array | string,
        signature: Uint8Array | string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    wrap_key(wrapper: Object, mech_type: number, wrapped: Object, cancellable?: Gio.Cancellable | null): Uint8Array;
    wrap_key_async(
        wrapper: Object,
        mechanism: Mechanism,
        wrapped: Object,
        cancellable?: Gio.Cancellable | null
    ): Promise<Uint8Array>;
    wrap_key_async(
        wrapper: Object,
        mechanism: Mechanism,
        wrapped: Object,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    wrap_key_async(
        wrapper: Object,
        mechanism: Mechanism,
        wrapped: Object,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Uint8Array> | void;
    wrap_key_finish(result: Gio.AsyncResult): Uint8Array;
    wrap_key_full(
        wrapper: Object,
        mechanism: Mechanism,
        wrapped: Object,
        cancellable?: Gio.Cancellable | null
    ): Uint8Array;
    static from_handle(slot: Slot, session_handle: number, options: SessionOptions): Session;
    static open(
        slot: Slot,
        options: SessionOptions,
        interaction?: Gio.TlsInteraction | null,
        cancellable?: Gio.Cancellable | null
    ): Session;
    static open_async(
        slot: Slot,
        options: SessionOptions,
        interaction?: Gio.TlsInteraction | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<Session>;
    static open_async(
        slot: Slot,
        options: SessionOptions,
        interaction: Gio.TlsInteraction | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Session> | null
    ): void;
    static open_async(
        slot: Slot,
        options: SessionOptions,
        interaction?: Gio.TlsInteraction | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Session> | null
    ): Promise<Session> | void;
    static open_finish(result: Gio.AsyncResult): Session;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): Session;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module Slot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        handle: number;
        module: Module;
    }
}
export class Slot extends GObject.Object {
    static $gtype: GObject.GType<Slot>;

    constructor(properties?: Partial<Slot.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Slot.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: number;
    module: Module;

    // Members

    enumerate_objects(match: Attributes, options: SessionOptions): Enumerator;
    equal(slot2: Slot): boolean;
    get_handle(): number;
    get_info(): SlotInfo;
    get_mechanism_info(mech_type: number): MechanismInfo;
    get_mechanisms(): number[];
    get_module(): Module;
    get_token_info(): TokenInfo;
    has_flags(flags: number): boolean;
    hash(): number;
    match(uri: UriData): boolean;
    open_session(options: SessionOptions, cancellable?: Gio.Cancellable | null): Session;
    open_session_async(options: SessionOptions, cancellable?: Gio.Cancellable | null): Promise<Session>;
    open_session_async(
        options: SessionOptions,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    open_session_async(
        options: SessionOptions,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Session> | void;
    open_session_finish(result: Gio.AsyncResult): Session;
    static from_handle(module: Module, slot_id: number): Slot;
}

export class Attribute {
    static $gtype: GObject.GType<Attribute>;

    constructor(attr_type: number, value: number, length: number);
    constructor(copy: Attribute);

    // Fields
    type: number;
    value: Uint8Array;
    length: number;

    // Constructors
    static ["new"](attr_type: number, value: number, length: number): Attribute;
    static new_boolean(attr_type: number, value: boolean): Attribute;
    static new_date(attr_type: number, value: GLib.Date): Attribute;
    static new_empty(attr_type: number): Attribute;
    static new_invalid(attr_type: number): Attribute;
    static new_string(attr_type: number, value: string): Attribute;
    static new_ulong(attr_type: number, value: number): Attribute;

    // Members
    clear(): void;
    dump(): void;
    dup(): Attribute;
    equal(attr2: Attribute): boolean;
    free(): void;
    get_boolean(): boolean;
    get_data(): Uint8Array;
    get_date(value: GLib.Date): void;
    get_string(): string | null;
    get_ulong(): number;
    hash(): number;
    init_copy(src: Attribute): void;
    is_invalid(): boolean;
}

export class Attributes {
    static $gtype: GObject.GType<Attributes>;

    constructor(reserved: number);
    constructor(copy: Attributes);

    // Constructors
    static ["new"](reserved: number): Attributes;

    // Members
    at(index: number): Attribute;
    contains(match: Attribute): boolean;
    count(): number;
    dump(): void;
    find(attr_type: number): Attribute;
    find_boolean(attr_type: number): [boolean, boolean];
    find_date(attr_type: number): [boolean, GLib.Date];
    find_string(attr_type: number): [boolean, string];
    find_ulong(attr_type: number): [boolean, number];
    ref(): Attributes;
    ref_sink(): Attributes;
    to_string(): string;
    unref(): void;
}

export class Builder {
    static $gtype: GObject.GType<Builder>;

    constructor(flags: BuilderFlags);
    constructor(copy: Builder);

    // Fields
    x: number[];

    // Constructors
    static ["new"](flags: BuilderFlags): Builder;

    // Members
    add_all(attrs: Attributes): void;
    add_attribute(attr: Attribute): void;
    add_boolean(attr_type: number, value: boolean): void;
    add_data(attr_type: number, value?: Uint8Array | null): void;
    add_date(attr_type: number, value: GLib.Date): void;
    add_empty(attr_type: number): void;
    add_invalid(attr_type: number): void;
    add_only(attrs: Attributes, only_types: number[]): void;
    add_string(attr_type: number, value?: string | null): void;
    add_ulong(attr_type: number, value: number): void;
    clear(): void;
    copy(): Builder;
    end(): Attributes;
    find(attr_type: number): Attribute;
    find_boolean(attr_type: number): [boolean, boolean];
    find_date(attr_type: number): [boolean, GLib.Date];
    find_string(attr_type: number): [boolean, string];
    find_ulong(attr_type: number): [boolean, number];
    init(): void;
    init_full(flags: BuilderFlags): void;
    ref(): Builder;
    set_all(attrs: Attributes): void;
    set_boolean(attr_type: number, value: boolean): void;
    set_data(attr_type: number, value?: Uint8Array | null): void;
    set_date(attr_type: number, value: GLib.Date): void;
    set_empty(attr_type: number): void;
    set_invalid(attr_type: number): void;
    set_string(attr_type: number, value: string): void;
    set_ulong(attr_type: number, value: number): void;
    steal(): Attributes;
    take_data(attr_type: number, value?: Uint8Array | null): void;
    static unref(builder?: any | null): void;
}

export class EnumeratorPrivate {
    static $gtype: GObject.GType<EnumeratorPrivate>;

    constructor(copy: EnumeratorPrivate);
}

export class Mechanism {
    static $gtype: GObject.GType<Mechanism>;

    constructor(
        properties?: Partial<{
            type?: number;
            parameter?: any;
            n_parameter?: number;
        }>
    );
    constructor(copy: Mechanism);

    // Fields
    type: number;
    parameter: any;
    n_parameter: number;
}

export class MechanismInfo {
    static $gtype: GObject.GType<MechanismInfo>;

    constructor(
        properties?: Partial<{
            min_key_size?: number;
            max_key_size?: number;
            flags?: number;
        }>
    );
    constructor(copy: MechanismInfo);

    // Fields
    min_key_size: number;
    max_key_size: number;
    flags: number;

    // Members
    copy(): MechanismInfo;
    free(): void;
}

export class ModuleInfo {
    static $gtype: GObject.GType<ModuleInfo>;

    constructor(
        properties?: Partial<{
            pkcs11_version_major?: number;
            pkcs11_version_minor?: number;
            manufacturer_id?: string;
            flags?: number;
            library_description?: string;
            library_version_major?: number;
            library_version_minor?: number;
        }>
    );
    constructor(copy: ModuleInfo);

    // Fields
    pkcs11_version_major: number;
    pkcs11_version_minor: number;
    manufacturer_id: string;
    flags: number;
    library_description: string;
    library_version_major: number;
    library_version_minor: number;

    // Members
    copy(): ModuleInfo;
    free(): void;
}

export class ModulePrivate {
    static $gtype: GObject.GType<ModulePrivate>;

    constructor(copy: ModulePrivate);
}

export class ObjectPrivate {
    static $gtype: GObject.GType<ObjectPrivate>;

    constructor(copy: ObjectPrivate);
}

export class PasswordPrivate {
    static $gtype: GObject.GType<PasswordPrivate>;

    constructor(copy: PasswordPrivate);
}

export class SessionInfo {
    static $gtype: GObject.GType<SessionInfo>;

    constructor(
        properties?: Partial<{
            slot_id?: number;
            state?: number;
            flags?: number;
            device_error?: number;
        }>
    );
    constructor(copy: SessionInfo);

    // Fields
    slot_id: number;
    state: number;
    flags: number;
    device_error: number;

    // Members
    copy(): SessionInfo;
    free(): void;
}

export class SessionPrivate {
    static $gtype: GObject.GType<SessionPrivate>;

    constructor(copy: SessionPrivate);
}

export class SlotInfo {
    static $gtype: GObject.GType<SlotInfo>;

    constructor(
        properties?: Partial<{
            slot_description?: string;
            manufacturer_id?: string;
            flags?: number;
            hardware_version_major?: number;
            hardware_version_minor?: number;
            firmware_version_major?: number;
            firmware_version_minor?: number;
        }>
    );
    constructor(copy: SlotInfo);

    // Fields
    slot_description: string;
    manufacturer_id: string;
    flags: number;
    hardware_version_major: number;
    hardware_version_minor: number;
    firmware_version_major: number;
    firmware_version_minor: number;

    // Members
    copy(): SlotInfo;
    free(): void;
}

export class SlotPrivate {
    static $gtype: GObject.GType<SlotPrivate>;

    constructor(copy: SlotPrivate);
}

export class TokenInfo {
    static $gtype: GObject.GType<TokenInfo>;

    constructor(
        properties?: Partial<{
            label?: string;
            manufacturer_id?: string;
            model?: string;
            serial_number?: string;
            flags?: number;
            max_session_count?: number;
            session_count?: number;
            max_rw_session_count?: number;
            rw_session_count?: number;
            max_pin_len?: number;
            min_pin_len?: number;
            total_public_memory?: number;
            free_public_memory?: number;
            total_private_memory?: number;
            free_private_memory?: number;
            hardware_version_major?: number;
            hardware_version_minor?: number;
            firmware_version_major?: number;
            firmware_version_minor?: number;
            utc_time?: number;
        }>
    );
    constructor(copy: TokenInfo);

    // Fields
    label: string;
    manufacturer_id: string;
    model: string;
    serial_number: string;
    flags: number;
    max_session_count: number;
    session_count: number;
    max_rw_session_count: number;
    rw_session_count: number;
    max_pin_len: number;
    min_pin_len: number;
    total_public_memory: number;
    free_public_memory: number;
    total_private_memory: number;
    free_private_memory: number;
    hardware_version_major: number;
    hardware_version_minor: number;
    firmware_version_major: number;
    firmware_version_minor: number;
    utc_time: number;

    // Members
    copy(): TokenInfo;
    free(): void;
}

export class UriData {
    static $gtype: GObject.GType<UriData>;

    constructor();
    constructor(copy: UriData);

    // Fields
    any_unrecognized: boolean;
    module_info: ModuleInfo;
    token_info: TokenInfo;
    attributes: Attributes;
    dummy: any[];

    // Constructors
    static ["new"](): UriData;

    // Members
    copy(): UriData;
    free(): void;
}

export interface ObjectCacheNamespace {
    $gtype: GObject.GType<ObjectCache>;
    prototype: ObjectCachePrototype;
}
export type ObjectCache = ObjectCachePrototype;
export interface ObjectCachePrototype extends Object {
    // Properties
    attributes: Attributes;

    // Members

    fill(attrs: Attributes): void;
    set_attributes(attrs?: Attributes | null): void;
    update(attr_types: number[], cancellable?: Gio.Cancellable | null): boolean;
    update_async(attr_types: number[], cancellable?: Gio.Cancellable | null): Promise<boolean>;
    update_async(
        attr_types: number[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    update_async(
        attr_types: number[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    update_finish(result: Gio.AsyncResult): boolean;
    vfunc_fill(attrs: Attributes): void;
}

export const ObjectCache: ObjectCacheNamespace;

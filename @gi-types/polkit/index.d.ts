/**
 * Polkit 1.0
 *
 * Generated from 1.0
 */

import * as Gio from "@gi-types/gio";
import * as GObject from "@gi-types/gobject";
import * as GLib from "@gi-types/glib";

export function error_quark(): GLib.Quark;
export function identity_from_string(str: string): Identity | null;
export function implicit_authorization_from_string(
    string: string,
    out_implicit_authorization: ImplicitAuthorization
): boolean;
export function implicit_authorization_to_string(implicit_authorization: ImplicitAuthorization): string;
export function subject_from_string(str: string): Subject;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static FAILED: number;
    static CANCELLED: number;
    static NOT_SUPPORTED: number;
    static NOT_AUTHORIZED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ImplicitAuthorization {
    export const $gtype: GObject.GType<ImplicitAuthorization>;
}

export enum ImplicitAuthorization {
    UNKNOWN = -1,
    NOT_AUTHORIZED = 0,
    AUTHENTICATION_REQUIRED = 1,
    ADMINISTRATOR_AUTHENTICATION_REQUIRED = 2,
    AUTHENTICATION_REQUIRED_RETAINED = 3,
    ADMINISTRATOR_AUTHENTICATION_REQUIRED_RETAINED = 4,
    AUTHORIZED = 5,
}

export namespace AuthorityFeatures {
    export const $gtype: GObject.GType<AuthorityFeatures>;
}

export enum AuthorityFeatures {
    NONE = 0,
    TEMPORARY_AUTHORIZATION = 1,
}

export namespace CheckAuthorizationFlags {
    export const $gtype: GObject.GType<CheckAuthorizationFlags>;
}

export enum CheckAuthorizationFlags {
    NONE = 0,
    ALLOW_USER_INTERACTION = 1,
}
export module ActionDescription {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ActionDescription extends GObject.Object {
    static $gtype: GObject.GType<ActionDescription>;

    constructor(properties?: Partial<ActionDescription.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ActionDescription.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_action_id(): string;
    get_annotation(key: string): string | null;
    get_annotation_keys(): string[];
    get_description(): string;
    get_icon_name(): string;
    get_implicit_active(): ImplicitAuthorization;
    get_implicit_any(): ImplicitAuthorization;
    get_implicit_inactive(): ImplicitAuthorization;
    get_message(): string;
    get_vendor_name(): string;
    get_vendor_url(): string;
}
export module Authority {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend_features: AuthorityFeatures;
        backendFeatures: AuthorityFeatures;
        backend_name: string;
        backendName: string;
        backend_version: string;
        backendVersion: string;
        owner: string;
    }
}
export class Authority extends GObject.Object implements Gio.AsyncInitable<Authority>, Gio.Initable {
    static $gtype: GObject.GType<Authority>;

    constructor(properties?: Partial<Authority.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Authority.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend_features: AuthorityFeatures;
    backendFeatures: AuthorityFeatures;
    backend_name: string;
    backendName: string;
    backend_version: string;
    backendVersion: string;
    owner: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Members

    authentication_agent_response(
        cookie: string,
        identity: Identity,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    authentication_agent_response(
        cookie: string,
        identity: Identity,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    authentication_agent_response(
        cookie: string,
        identity: Identity,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    authentication_agent_response_finish(res: Gio.AsyncResult): boolean;
    authentication_agent_response_sync(
        cookie: string,
        identity: Identity,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    check_authorization(
        subject: Subject,
        action_id: string,
        details: Details | null,
        flags: CheckAuthorizationFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<AuthorizationResult>;
    check_authorization(
        subject: Subject,
        action_id: string,
        details: Details | null,
        flags: CheckAuthorizationFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    check_authorization(
        subject: Subject,
        action_id: string,
        details: Details | null,
        flags: CheckAuthorizationFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<AuthorizationResult> | void;
    check_authorization_finish(res: Gio.AsyncResult): AuthorizationResult;
    check_authorization_sync(
        subject: Subject,
        action_id: string,
        details: Details | null,
        flags: CheckAuthorizationFlags,
        cancellable?: Gio.Cancellable | null
    ): AuthorizationResult;
    enumerate_actions(cancellable?: Gio.Cancellable | null): Promise<ActionDescription[]>;
    enumerate_actions(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    enumerate_actions(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<ActionDescription[]> | void;
    enumerate_actions_finish(res: Gio.AsyncResult): ActionDescription[];
    enumerate_actions_sync(cancellable?: Gio.Cancellable | null): ActionDescription[];
    enumerate_temporary_authorizations(
        subject: Subject,
        cancellable?: Gio.Cancellable | null
    ): Promise<TemporaryAuthorization[]>;
    enumerate_temporary_authorizations(
        subject: Subject,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    enumerate_temporary_authorizations(
        subject: Subject,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<TemporaryAuthorization[]> | void;
    enumerate_temporary_authorizations_finish(res: Gio.AsyncResult): TemporaryAuthorization[];
    enumerate_temporary_authorizations_sync(
        subject: Subject,
        cancellable?: Gio.Cancellable | null
    ): TemporaryAuthorization[];
    get_backend_features(): AuthorityFeatures;
    get_backend_name(): string;
    get_backend_version(): string;
    get_owner(): string | null;
    register_authentication_agent(
        subject: Subject,
        locale: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    register_authentication_agent(
        subject: Subject,
        locale: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    register_authentication_agent(
        subject: Subject,
        locale: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    register_authentication_agent_finish(res: Gio.AsyncResult): boolean;
    register_authentication_agent_sync(
        subject: Subject,
        locale: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    register_authentication_agent_with_options(
        subject: Subject,
        locale: string,
        object_path: string,
        options?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    register_authentication_agent_with_options(
        subject: Subject,
        locale: string,
        object_path: string,
        options: GLib.Variant | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    register_authentication_agent_with_options(
        subject: Subject,
        locale: string,
        object_path: string,
        options?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    register_authentication_agent_with_options_finish(res: Gio.AsyncResult): boolean;
    register_authentication_agent_with_options_sync(
        subject: Subject,
        locale: string,
        object_path: string,
        options?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    revoke_temporary_authorization_by_id(id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    revoke_temporary_authorization_by_id(
        id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    revoke_temporary_authorization_by_id(
        id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    revoke_temporary_authorization_by_id_finish(res: Gio.AsyncResult): boolean;
    revoke_temporary_authorization_by_id_sync(id: string, cancellable?: Gio.Cancellable | null): boolean;
    revoke_temporary_authorizations(subject: Subject, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    revoke_temporary_authorizations(
        subject: Subject,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    revoke_temporary_authorizations(
        subject: Subject,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    revoke_temporary_authorizations_finish(res: Gio.AsyncResult): boolean;
    revoke_temporary_authorizations_sync(subject: Subject, cancellable?: Gio.Cancellable | null): boolean;
    unregister_authentication_agent(
        subject: Subject,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    unregister_authentication_agent(
        subject: Subject,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    unregister_authentication_agent(
        subject: Subject,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    unregister_authentication_agent_finish(res: Gio.AsyncResult): boolean;
    unregister_authentication_agent_sync(
        subject: Subject,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    static get(): Authority;
    static get_async(cancellable?: Gio.Cancellable | null): Promise<Authority>;
    static get_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Authority> | null): void;
    static get_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Authority> | null
    ): Promise<Authority> | void;
    static get_finish(res: Gio.AsyncResult): Authority;
    static get_sync(cancellable?: Gio.Cancellable | null): Authority;

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
    new_finish(res: Gio.AsyncResult): Authority;
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
export module AuthorizationResult {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthorizationResult extends GObject.Object {
    static $gtype: GObject.GType<AuthorizationResult>;

    constructor(properties?: Partial<AuthorizationResult.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthorizationResult.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](is_authorized: boolean, is_challenge: boolean, details?: Details | null): AuthorizationResult;

    // Members

    get_details(): Details | null;
    get_dismissed(): boolean;
    get_is_authorized(): boolean;
    get_is_challenge(): boolean;
    get_retains_authorization(): boolean;
    get_temporary_authorization_id(): string | null;
}
export module Details {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Details extends GObject.Object {
    static $gtype: GObject.GType<Details>;

    constructor(properties?: Partial<Details.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Details.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Details;

    // Members

    get_keys(): string[] | null;
    insert(key: string, value?: string | null): void;
    lookup(key: string): string | null;
}
export module Permission {
    export interface ConstructorProperties extends Gio.Permission.ConstructorProperties {
        [key: string]: any;
        action_id: string;
        actionId: string;
        subject: Subject;
    }
}
export class Permission extends Gio.Permission implements Gio.AsyncInitable<Permission>, Gio.Initable {
    static $gtype: GObject.GType<Permission>;

    constructor(properties?: Partial<Permission.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Permission.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action_id: string;
    actionId: string;
    subject: Subject;

    // Constructors

    static new_finish(res: Gio.AsyncResult): Permission;
    static new_finish(...args: never[]): never;
    static new_sync(action_id: string, subject?: Subject | null, cancellable?: Gio.Cancellable | null): Permission;

    // Members

    get_action_id(): string;
    get_subject(): Subject;
    static new(action_id: string, subject?: Subject | null, cancellable?: Gio.Cancellable | null): Promise<Permission>;
    static new(
        action_id: string,
        subject: Subject | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Permission> | null
    ): void;
    static new(
        action_id: string,
        subject?: Subject | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Permission> | null
    ): Promise<Permission> | void;

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
    new_finish(res: Gio.AsyncResult): Permission;
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
export module SystemBusName {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        name: string;
    }
}
export class SystemBusName extends GObject.Object implements Subject {
    static $gtype: GObject.GType<SystemBusName>;

    constructor(properties?: Partial<SystemBusName.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SystemBusName.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;

    // Members

    get_name(): string;
    get_process_sync(cancellable?: Gio.Cancellable | null): Subject | null;
    get_user_sync(cancellable?: Gio.Cancellable | null): UnixUser | null;
    set_name(name: string): void;
    static new(name: string): Subject;

    // Implemented Members

    equal(b: Subject): boolean;
    exists(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    exists(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    exists_finish(res: Gio.AsyncResult): boolean;
    exists_sync(cancellable?: Gio.Cancellable | null): boolean;
    hash(): number;
    to_string(): string;
    vfunc_equal(b: Subject): boolean;
    vfunc_exists(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_exists(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_exists_finish(res: Gio.AsyncResult): boolean;
    vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_hash(): number;
    vfunc_to_string(): string;
}
export module TemporaryAuthorization {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TemporaryAuthorization extends GObject.Object {
    static $gtype: GObject.GType<TemporaryAuthorization>;

    constructor(properties?: Partial<TemporaryAuthorization.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TemporaryAuthorization.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_action_id(): string;
    get_id(): string;
    get_subject(): Subject;
    get_time_expires(): number;
    get_time_obtained(): number;
}
export module UnixGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        gid: number;
    }
}
export class UnixGroup extends GObject.Object implements Identity {
    static $gtype: GObject.GType<UnixGroup>;

    constructor(properties?: Partial<UnixGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    gid: number;

    // Members

    get_gid(): number;
    set_gid(gid: number): void;
    static new(gid: number): Identity;
    static new_for_name(name: string): Identity;

    // Implemented Members

    equal(b: Identity): boolean;
    hash(): number;
    to_string(): string;
    vfunc_equal(b: Identity): boolean;
    vfunc_hash(): number;
    vfunc_to_string(): string;
}
export module UnixNetgroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        name: string;
    }
}
export class UnixNetgroup extends GObject.Object implements Identity {
    static $gtype: GObject.GType<UnixNetgroup>;

    constructor(properties?: Partial<UnixNetgroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixNetgroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;

    // Members

    get_name(): string;
    set_name(name: string): void;
    static new(name: string): Identity;

    // Implemented Members

    equal(b: Identity): boolean;
    hash(): number;
    to_string(): string;
    vfunc_equal(b: Identity): boolean;
    vfunc_hash(): number;
    vfunc_to_string(): string;
}
export module UnixProcess {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        pid: number;
        start_time: number;
        startTime: number;
        uid: number;
    }
}
export class UnixProcess extends GObject.Object implements Subject {
    static $gtype: GObject.GType<UnixProcess>;

    constructor(properties?: Partial<UnixProcess.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixProcess.ConstructorProperties>, ...args: any[]): void;

    // Properties
    pid: number;
    start_time: number;
    startTime: number;
    uid: number;

    // Members

    get_owner(): number;
    get_pid(): number;
    get_start_time(): number;
    get_uid(): number;
    set_pid(pid: number): void;
    set_start_time(start_time: number): void;
    set_uid(uid: number): void;
    static new(pid: number): Subject;
    static new_for_owner(pid: number, start_time: number, uid: number): Subject;
    static new_full(pid: number, start_time: number): Subject;

    // Implemented Members

    equal(b: Subject): boolean;
    exists(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    exists(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    exists_finish(res: Gio.AsyncResult): boolean;
    exists_sync(cancellable?: Gio.Cancellable | null): boolean;
    hash(): number;
    to_string(): string;
    vfunc_equal(b: Subject): boolean;
    vfunc_exists(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_exists(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_exists_finish(res: Gio.AsyncResult): boolean;
    vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_hash(): number;
    vfunc_to_string(): string;
}
export module UnixSession {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        pid: number;
        session_id: string;
        sessionId: string;
    }
}
export class UnixSession extends GObject.Object implements Gio.AsyncInitable<UnixSession>, Gio.Initable, Subject {
    static $gtype: GObject.GType<UnixSession>;

    constructor(properties?: Partial<UnixSession.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixSession.ConstructorProperties>, ...args: any[]): void;

    // Properties
    pid: number;
    session_id: string;
    sessionId: string;

    // Members

    get_session_id(): string;
    set_session_id(session_id: string): void;
    static new(session_id: string): Subject;
    static new_for_process(pid: number, cancellable?: Gio.Cancellable | null): Promise<Subject | null>;
    static new_for_process(
        pid: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<UnixSession> | null
    ): void;
    static new_for_process(
        pid: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<UnixSession> | null
    ): Promise<Subject | null> | void;
    static new_for_process_finish(res: Gio.AsyncResult): Subject | null;
    static new_for_process_sync(pid: number, cancellable?: Gio.Cancellable | null): Subject | null;

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
    new_finish(res: Gio.AsyncResult): UnixSession;
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
    equal(b: Subject): boolean;
    exists(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    exists(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    exists_finish(res: Gio.AsyncResult): boolean;
    exists_sync(cancellable?: Gio.Cancellable | null): boolean;
    hash(): number;
    to_string(): string;
    vfunc_equal(b: Subject): boolean;
    vfunc_exists(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_exists(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_exists_finish(res: Gio.AsyncResult): boolean;
    vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_hash(): number;
    vfunc_to_string(): string;
}
export module UnixUser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        uid: number;
    }
}
export class UnixUser extends GObject.Object implements Identity {
    static $gtype: GObject.GType<UnixUser>;

    constructor(properties?: Partial<UnixUser.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixUser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    uid: number;

    // Members

    get_name(): string | null;
    get_uid(): number;
    set_uid(uid: number): void;
    static new(uid: number): Identity;
    static new_for_name(name: string): Identity | null;

    // Implemented Members

    equal(b: Identity): boolean;
    hash(): number;
    to_string(): string;
    vfunc_equal(b: Identity): boolean;
    vfunc_hash(): number;
    vfunc_to_string(): string;
}

export interface IdentityNamespace {
    $gtype: GObject.GType<Identity>;
    prototype: IdentityPrototype;

    from_string(str: string): Identity | null;
}
export type Identity = IdentityPrototype;
export interface IdentityPrototype extends GObject.Object {
    // Members

    equal(b: Identity): boolean;
    hash(): number;
    to_string(): string;
    vfunc_equal(b: Identity): boolean;
    vfunc_hash(): number;
    vfunc_to_string(): string;
}

export const Identity: IdentityNamespace;

export interface SubjectNamespace {
    $gtype: GObject.GType<Subject>;
    prototype: SubjectPrototype;

    from_string(str: string): Subject;
}
export type Subject = SubjectPrototype;
export interface SubjectPrototype extends GObject.Object {
    // Members

    equal(b: Subject): boolean;
    exists(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    exists(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    exists_finish(res: Gio.AsyncResult): boolean;
    exists_sync(cancellable?: Gio.Cancellable | null): boolean;
    hash(): number;
    to_string(): string;
    vfunc_equal(b: Subject): boolean;
    vfunc_exists(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_exists(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_exists_finish(res: Gio.AsyncResult): boolean;
    vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_hash(): number;
    vfunc_to_string(): string;
}

export const Subject: SubjectNamespace;

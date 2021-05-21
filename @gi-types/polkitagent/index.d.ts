/**
 * PolkitAgent 1.0
 *
 * Generated from 1.0
 */

import * as Gio from "@gi-types/gio";
import * as Polkit from "@gi-types/polkit";
import * as GObject from "@gi-types/gobject";
import * as GLib from "@gi-types/glib";

export function register_listener(listener: Listener, subject: Polkit.Subject, object_path: string): boolean;

export namespace RegisterFlags {
    export const $gtype: GObject.GType<RegisterFlags>;
}

export enum RegisterFlags {
    NONE = 0,
    RUN_IN_THREAD = 1,
}
export module Listener {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Listener extends GObject.Object {
    static $gtype: GObject.GType<Listener>;

    constructor(properties?: Partial<Listener.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Listener.ConstructorProperties>, ...args: any[]): void;

    // Members

    initiate_authentication(
        action_id: string,
        message: string,
        icon_name: string,
        details: Polkit.Details,
        cookie: string,
        identities: Polkit.Identity[],
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    initiate_authentication(
        action_id: string,
        message: string,
        icon_name: string,
        details: Polkit.Details,
        cookie: string,
        identities: Polkit.Identity[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    initiate_authentication(
        action_id: string,
        message: string,
        icon_name: string,
        details: Polkit.Details,
        cookie: string,
        identities: Polkit.Identity[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    initiate_authentication_finish(res: Gio.AsyncResult): boolean;
    register(
        flags: RegisterFlags,
        subject: Polkit.Subject,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): any | null;
    register_with_options(
        flags: RegisterFlags,
        subject: Polkit.Subject,
        object_path: string,
        options?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): any | null;
    vfunc_initiate_authentication(
        action_id: string,
        message: string,
        icon_name: string,
        details: Polkit.Details,
        cookie: string,
        identities: Polkit.Identity[],
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    vfunc_initiate_authentication(
        action_id: string,
        message: string,
        icon_name: string,
        details: Polkit.Details,
        cookie: string,
        identities: Polkit.Identity[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_initiate_authentication(
        action_id: string,
        message: string,
        icon_name: string,
        details: Polkit.Details,
        cookie: string,
        identities: Polkit.Identity[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_initiate_authentication_finish(res: Gio.AsyncResult): boolean;
    static unregister(registration_handle?: any | null): void;
}
export module Session {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        cookie: string;
        identity: Polkit.Identity;
    }
}
export class Session extends GObject.Object {
    static $gtype: GObject.GType<Session>;

    constructor(properties?: Partial<Session.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Session.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cookie: string;
    identity: Polkit.Identity;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "completed", callback: (_source: this, gained_authorization: boolean) => void): number;
    connect_after(signal: "completed", callback: (_source: this, gained_authorization: boolean) => void): number;
    emit(signal: "completed", gained_authorization: boolean): void;
    connect(signal: "request", callback: (_source: this, request: string, echo_on: boolean) => void): number;
    connect_after(signal: "request", callback: (_source: this, request: string, echo_on: boolean) => void): number;
    emit(signal: "request", request: string, echo_on: boolean): void;
    connect(signal: "show-error", callback: (_source: this, text: string) => void): number;
    connect_after(signal: "show-error", callback: (_source: this, text: string) => void): number;
    emit(signal: "show-error", text: string): void;
    connect(signal: "show-info", callback: (_source: this, text: string) => void): number;
    connect_after(signal: "show-info", callback: (_source: this, text: string) => void): number;
    emit(signal: "show-info", text: string): void;

    // Constructors

    static ["new"](identity: Polkit.Identity, cookie: string): Session;

    // Members

    cancel(): void;
    initiate(): void;
    response(response: string): void;
}
export module TextListener {
    export interface ConstructorProperties extends Listener.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextListener extends Listener implements Gio.Initable {
    static $gtype: GObject.GType<TextListener>;

    constructor(properties?: Partial<TextListener.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextListener.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](cancellable?: Gio.Cancellable | null): TextListener;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

/**
 * Gcr 3
 *
 * Generated from 3.38.1
 */

import * as GObject from "@gi-types/gobject";
import * as Gck from "@gi-types/gck";
import * as Gio from "@gi-types/gio";
import * as GLib from "@gi-types/glib";

export const ICON_CERTIFICATE: string;
export const ICON_GNUPG: string;
export const ICON_HOME_DIRECTORY: string;
export const ICON_KEY: string;
export const ICON_KEY_PAIR: string;
export const ICON_PASSWORD: string;
export const ICON_SMART_CARD: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PURPOSE_CLIENT_AUTH: string;
export const PURPOSE_CODE_SIGNING: string;
export const PURPOSE_EMAIL: string;
export const PURPOSE_SERVER_AUTH: string;
export const SECRET_EXCHANGE_PROTOCOL_1: string;
export const UNLOCK_OPTION_ALWAYS: string;
export const UNLOCK_OPTION_IDLE: string;
export const UNLOCK_OPTION_SESSION: string;
export const UNLOCK_OPTION_TIMEOUT: string;
export function certificate_compare(first?: Comparable | null, other?: Comparable | null): number;
export function data_error_get_domain(): GLib.Quark;
export function fingerprint_from_attributes(attrs: Gck.Attributes, checksum_type: GLib.ChecksumType): Uint8Array | null;
export function fingerprint_from_subject_public_key_info(
    key_info: Uint8Array | string,
    checksum_type: GLib.ChecksumType
): Uint8Array | null;
export function icon_for_token(token_info: Gck.TokenInfo): Gio.Icon;
export function importer_create_for_parsed(parsed: Parsed): Importer[];
export function importer_queue_and_filter_for_parsed(importers: Importer[], parsed: Parsed): Importer[];
export function importer_register(importer_type: GObject.GType, attrs: Gck.Attributes): void;
export function importer_register_well_known(): void;
export function mock_prompter_disconnect(): void;
export function mock_prompter_expect_close(): void;
export function mock_prompter_expect_confirm_cancel(): void;
export function mock_prompter_expect_password_cancel(): void;
export function mock_prompter_get_delay_msec(): number;
export function mock_prompter_is_expecting(): boolean;
export function mock_prompter_is_prompting(): boolean;
export function mock_prompter_set_delay_msec(delay_msec: number): void;
export function mock_prompter_start(): string;
export function mock_prompter_stop(): void;
export function parsed_unref(parsed?: any | null): void;
export function pkcs11_add_module(module: Gck.Module): void;
export function pkcs11_add_module_from_file(module_path: string, unused?: any | null): boolean;
export function pkcs11_get_modules(): Gck.Module[];
export function pkcs11_get_trust_lookup_slots(): Gck.Slot[];
export function pkcs11_get_trust_lookup_uris(): string[] | null;
export function pkcs11_get_trust_store_slot(): Gck.Slot | null;
export function pkcs11_get_trust_store_uri(): string | null;
export function pkcs11_initialize(cancellable?: Gio.Cancellable | null): boolean;
export function pkcs11_initialize_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
export function pkcs11_initialize_async(
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null
): void;
export function pkcs11_initialize_async(
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null
): Promise<boolean> | void;
export function pkcs11_initialize_finish(result: Gio.AsyncResult): boolean;
export function pkcs11_set_modules(modules: Gck.Module[]): void;
export function pkcs11_set_trust_lookup_uris(pkcs11_uris?: string | null): void;
export function pkcs11_set_trust_store_uri(pkcs11_uri?: string | null): void;
export function trust_add_pinned_certificate(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null
): boolean;
export function trust_add_pinned_certificate_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function trust_add_pinned_certificate_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Certificate> | null
): void;
export function trust_add_pinned_certificate_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Certificate> | null
): Promise<boolean> | void;
export function trust_add_pinned_certificate_finish(result: Gio.AsyncResult): boolean;
export function trust_is_certificate_anchored(
    certificate: Certificate,
    purpose: string,
    cancellable?: Gio.Cancellable | null
): boolean;
export function trust_is_certificate_anchored_async(
    certificate: Certificate,
    purpose: string,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function trust_is_certificate_anchored_async(
    certificate: Certificate,
    purpose: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Certificate> | null
): void;
export function trust_is_certificate_anchored_async(
    certificate: Certificate,
    purpose: string,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Certificate> | null
): Promise<boolean> | void;
export function trust_is_certificate_anchored_finish(result: Gio.AsyncResult): boolean;
export function trust_is_certificate_pinned(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null
): boolean;
export function trust_is_certificate_pinned_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function trust_is_certificate_pinned_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Certificate> | null
): void;
export function trust_is_certificate_pinned_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Certificate> | null
): Promise<boolean> | void;
export function trust_is_certificate_pinned_finish(result: Gio.AsyncResult): boolean;
export function trust_remove_pinned_certificate(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null
): boolean;
export function trust_remove_pinned_certificate_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function trust_remove_pinned_certificate_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Certificate> | null
): void;
export function trust_remove_pinned_certificate_async(
    certificate: Certificate,
    purpose: string,
    peer: string,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Certificate> | null
): Promise<boolean> | void;
export function trust_remove_pinned_certificate_finish(result: Gio.AsyncResult): boolean;
export type FilterCollectionFunc<A = GObject.Object> = (object: A) => boolean;

export namespace CertificateChainStatus {
    export const $gtype: GObject.GType<CertificateChainStatus>;
}

export enum CertificateChainStatus {
    UNKNOWN = 0,
    INCOMPLETE = 1,
    DISTRUSTED = 2,
    SELFSIGNED = 3,
    PINNED = 4,
    ANCHORED = 5,
}

export namespace CertificateRequestFormat {
    export const $gtype: GObject.GType<CertificateRequestFormat>;
}

export enum CertificateRequestFormat {
    CERTIFICATE_REQUEST_PKCS10 = 1,
}

export namespace DataError {
    export const $gtype: GObject.GType<DataError>;
}

export enum DataError {
    FAILURE = -1,
    UNRECOGNIZED = 1,
    CANCELLED = 2,
    LOCKED = 3,
}

export namespace DataFormat {
    export const $gtype: GObject.GType<DataFormat>;
}

export enum DataFormat {
    ALL = -1,
    INVALID = 0,
    DER_PRIVATE_KEY = 100,
    DER_PRIVATE_KEY_RSA = 101,
    DER_PRIVATE_KEY_DSA = 102,
    DER_PRIVATE_KEY_EC = 103,
    DER_SUBJECT_PUBLIC_KEY = 150,
    DER_CERTIFICATE_X509 = 200,
    DER_PKCS7 = 300,
    DER_PKCS8 = 400,
    DER_PKCS8_PLAIN = 401,
    DER_PKCS8_ENCRYPTED = 402,
    DER_PKCS10 = 450,
    DER_SPKAC = 455,
    BASE64_SPKAC = 456,
    DER_PKCS12 = 500,
    OPENSSH_PUBLIC = 600,
    OPENPGP_PACKET = 700,
    OPENPGP_ARMOR = 701,
    PEM = 1000,
    PEM_PRIVATE_KEY_RSA = 1001,
    PEM_PRIVATE_KEY_DSA = 1002,
    PEM_CERTIFICATE_X509 = 1003,
    PEM_PKCS7 = 1004,
    PEM_PKCS8_PLAIN = 1005,
    PEM_PKCS8_ENCRYPTED = 1006,
    PEM_PKCS12 = 1007,
    PEM_PRIVATE_KEY = 1008,
    PEM_PKCS10 = 1009,
    PEM_PRIVATE_KEY_EC = 1010,
    PEM_PUBLIC_KEY = 1011,
}

export namespace PromptReply {
    export const $gtype: GObject.GType<PromptReply>;
}

export enum PromptReply {
    CANCEL = 0,
    CONTINUE = 1,
}

export namespace SystemPromptError {
    export const $gtype: GObject.GType<SystemPromptError>;
}

export enum SystemPromptError {
    SYSTEM_PROMPT_IN_PROGRESS = 1,
}

export namespace SystemPrompterMode {
    export const $gtype: GObject.GType<SystemPrompterMode>;
}

export enum SystemPrompterMode {
    SINGLE = 0,
    MULTIPLE = 1,
}

export namespace CertificateChainFlags {
    export const $gtype: GObject.GType<CertificateChainFlags>;
}

export enum CertificateChainFlags {
    NONE = 0,
    NO_LOOKUPS = 1,
}

export namespace ColumnFlags {
    export const $gtype: GObject.GType<ColumnFlags>;
}

export enum ColumnFlags {
    NONE = 0,
    HIDDEN = 2,
    SORTABLE = 4,
}
export module CertificateChain {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        length: number;
    }
}
export class CertificateChain extends GObject.Object {
    static $gtype: GObject.GType<CertificateChain>;

    constructor(properties?: Partial<CertificateChain.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CertificateChain.ConstructorProperties>, ...args: any[]): void;

    // Properties
    length: number;

    // Constructors

    static ["new"](): CertificateChain;

    // Members

    add(certificate: Certificate): void;
    build(
        purpose: string,
        peer: string | null,
        flags: CertificateChainFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    build_async(
        purpose: string,
        peer: string | null,
        flags: CertificateChainFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    build_async(
        purpose: string,
        peer: string | null,
        flags: CertificateChainFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    build_async(
        purpose: string,
        peer: string | null,
        flags: CertificateChainFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    build_finish(result: Gio.AsyncResult): boolean;
    get_anchor(): Certificate;
    get_certificate(index: number): Certificate;
    get_endpoint(): Certificate;
    get_length(): number;
    get_status(): CertificateChainStatus;
}
export module CertificateRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        private_key: Gck.Object;
        privateKey: Gck.Object;
    }
}
export class CertificateRequest extends GObject.Object {
    static $gtype: GObject.GType<CertificateRequest>;

    constructor(properties?: Partial<CertificateRequest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CertificateRequest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    private_key: Gck.Object;
    privateKey: Gck.Object;

    // Members

    complete(cancellable?: Gio.Cancellable | null): boolean;
    complete_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    complete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    complete_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    complete_finish(result: Gio.AsyncResult): boolean;
    encode(textual: boolean): Uint8Array;
    get_format(): CertificateRequestFormat;
    get_private_key(): Gck.Object;
    set_cn(cn: string): void;
    static capable(private_key: Gck.Object, cancellable?: Gio.Cancellable | null): boolean;
    static capable_async(private_key: Gck.Object, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    static capable_async(
        private_key: Gck.Object,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<CertificateRequest> | null
    ): void;
    static capable_async(
        private_key: Gck.Object,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<CertificateRequest> | null
    ): Promise<boolean> | void;
    static capable_finish(result: Gio.AsyncResult): boolean;
    static prepare(format: CertificateRequestFormat, private_key: Gck.Object): CertificateRequest;
}
export module FilterCollection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        underlying: Collection;
    }
}
export class FilterCollection extends GObject.Object implements Collection {
    static $gtype: GObject.GType<FilterCollection>;

    constructor(properties?: Partial<FilterCollection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FilterCollection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    underlying: Collection;

    // Constructors

    static new_with_callback(underlying: Collection, callback?: FilterCollectionFunc | null): FilterCollection;

    // Members

    get_underlying(): Collection;
    refilter(): void;
    set_callback(callback?: FilterCollectionFunc | null): void;

    // Implemented Members

    contains(object: GObject.Object): boolean;
    emit_added(object: GObject.Object): void;
    emit_removed(object: GObject.Object): void;
    get_length(): number;
    get_objects(): GObject.Object[];
    vfunc_added(object: GObject.Object): void;
    vfunc_contains(object: GObject.Object): boolean;
    vfunc_get_length(): number;
    vfunc_get_objects(): GObject.Object[];
    vfunc_removed(object: GObject.Object): void;
}
export module Parser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        parsed_attributes: Gck.Attributes;
        parsedAttributes: Gck.Attributes;
        parsed_description: string;
        parsedDescription: string;
        parsed_label: string;
        parsedLabel: string;
    }
}
export class Parser extends GObject.Object {
    static $gtype: GObject.GType<Parser>;

    constructor(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    parsed_attributes: Gck.Attributes;
    parsedAttributes: Gck.Attributes;
    parsed_description: string;
    parsedDescription: string;
    parsed_label: string;
    parsedLabel: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "authenticate", callback: (_source: this, count: number) => boolean): number;
    connect_after(signal: "authenticate", callback: (_source: this, count: number) => boolean): number;
    emit(signal: "authenticate", count: number): void;
    connect(signal: "parsed", callback: (_source: this) => void): number;
    connect_after(signal: "parsed", callback: (_source: this) => void): number;
    emit(signal: "parsed"): void;

    // Constructors

    static ["new"](): Parser;

    // Members

    add_password(password?: string | null): void;
    format_disable(format: DataFormat): void;
    format_enable(format: DataFormat): void;
    format_supported(format: DataFormat): boolean;
    get_filename(): string;
    get_parsed(): Parsed;
    get_parsed_attributes(): Gck.Attributes | null;
    get_parsed_block(): Uint8Array | null;
    get_parsed_bytes(): GLib.Bytes;
    get_parsed_description(): string | null;
    get_parsed_format(): DataFormat;
    get_parsed_label(): string | null;
    parse_bytes(data: GLib.Bytes | Uint8Array): boolean;
    parse_data(data: Uint8Array | string): boolean;
    parse_stream(input: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
    parse_stream_async(input: Gio.InputStream, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    parse_stream_async(
        input: Gio.InputStream,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    parse_stream_async(
        input: Gio.InputStream,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    parse_stream_finish(result: Gio.AsyncResult): boolean;
    set_filename(filename?: string | null): void;
    vfunc_authenticate(count: number): boolean;
    vfunc_parsed(): void;
}
export module Pkcs11Certificate {
    export interface ConstructorProperties extends Gck.Object.ConstructorProperties {
        [key: string]: any;
        attributes: Gck.Attributes;
    }
}
export class Pkcs11Certificate extends Gck.Object implements Certificate, Comparable {
    static $gtype: GObject.GType<Pkcs11Certificate>;

    constructor(properties?: Partial<Pkcs11Certificate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Pkcs11Certificate.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attributes: Gck.Attributes;

    // Implemented Properties

    description: string;
    expiry: GLib.Date;
    icon: Gio.Icon;
    issuer: string;
    label: string;
    markup: string;
    subject: string;

    // Members

    get_attributes(): Gck.Attributes;
    static lookup_issuer(certificate: Certificate, cancellable?: Gio.Cancellable | null): Certificate;
    static lookup_issuer_async(certificate: Certificate, cancellable?: Gio.Cancellable | null): Promise<Certificate>;
    static lookup_issuer_async(
        certificate: Certificate,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Pkcs11Certificate> | null
    ): void;
    static lookup_issuer_async(
        certificate: Certificate,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Pkcs11Certificate> | null
    ): Promise<Certificate> | void;
    static lookup_issuer_finish(result: Gio.AsyncResult): Certificate;

    // Implemented Members

    get_basic_constraints(): [boolean, boolean | null, number | null];
    get_der_data(): Uint8Array;
    get_expiry_date(): GLib.Date;
    get_fingerprint(type: GLib.ChecksumType): Uint8Array;
    get_fingerprint_hex(type: GLib.ChecksumType): string;
    get_issued_date(): GLib.Date;
    get_issuer_cn(): string;
    get_issuer_dn(): string;
    get_issuer_name(): string;
    get_issuer_part(part: string): string | null;
    get_issuer_raw(): Uint8Array;
    get_key_size(): number;
    get_markup_text(): string;
    get_serial_number(): Uint8Array;
    get_serial_number_hex(): string;
    get_subject_cn(): string;
    get_subject_dn(): string;
    get_subject_name(): string;
    get_subject_part(part: string): string | null;
    get_subject_raw(): Uint8Array;
    is_issuer(issuer: Certificate): boolean;
    mixin_emit_notify(): void;
    vfunc_get_der_data(): Uint8Array;
    compare(other?: Comparable | null): number;
    compare(...args: never[]): never;
    vfunc_compare(other?: Comparable | null): number;
}
export module SecretExchange {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        protocol: string;
    }
}
export class SecretExchange extends GObject.Object {
    static $gtype: GObject.GType<SecretExchange>;

    constructor(properties?: Partial<SecretExchange.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SecretExchange.ConstructorProperties>, ...args: any[]): void;

    // Properties
    protocol: string;

    // Constructors

    static ["new"](protocol?: string | null): SecretExchange;

    // Members

    begin(): string;
    get_protocol(): string;
    get_secret(): string[];
    receive(exchange: string): boolean;
    send(secret: string | null, secret_len: number): string;
    vfunc_derive_transport_key(peer: number, n_peer: number): boolean;
    vfunc_generate_exchange_key(scheme: string, public_key: number, n_public_key: number): boolean;
}
export module SimpleCertificate {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimpleCertificate extends GObject.Object implements Certificate, Comparable {
    static $gtype: GObject.GType<SimpleCertificate>;

    constructor(properties?: Partial<SimpleCertificate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleCertificate.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    description: string;
    expiry: GLib.Date;
    icon: Gio.Icon;
    issuer: string;
    label: string;
    markup: string;
    subject: string;

    // Constructors

    static ["new"](data: Uint8Array | string): SimpleCertificate;

    // Implemented Members

    get_basic_constraints(): [boolean, boolean | null, number | null];
    get_der_data(): Uint8Array;
    get_expiry_date(): GLib.Date;
    get_fingerprint(type: GLib.ChecksumType): Uint8Array;
    get_fingerprint_hex(type: GLib.ChecksumType): string;
    get_issued_date(): GLib.Date;
    get_issuer_cn(): string;
    get_issuer_dn(): string;
    get_issuer_name(): string;
    get_issuer_part(part: string): string | null;
    get_issuer_raw(): Uint8Array;
    get_key_size(): number;
    get_markup_text(): string;
    get_serial_number(): Uint8Array;
    get_serial_number_hex(): string;
    get_subject_cn(): string;
    get_subject_dn(): string;
    get_subject_name(): string;
    get_subject_part(part: string): string | null;
    get_subject_raw(): Uint8Array;
    is_issuer(issuer: Certificate): boolean;
    mixin_emit_notify(): void;
    vfunc_get_der_data(): Uint8Array;
    compare(other?: Comparable | null): number;
    compare(...args: never[]): never;
    vfunc_compare(other?: Comparable | null): number;
}
export module SimpleCollection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimpleCollection extends GObject.Object implements Collection {
    static $gtype: GObject.GType<SimpleCollection>;

    constructor(properties?: Partial<SimpleCollection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleCollection.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SimpleCollection;

    // Members

    add(object: GObject.Object): void;
    remove(object: GObject.Object): void;

    // Implemented Members

    contains(object: GObject.Object): boolean;
    emit_added(object: GObject.Object): void;
    emit_removed(object: GObject.Object): void;
    get_length(): number;
    get_objects(): GObject.Object[];
    vfunc_added(object: GObject.Object): void;
    vfunc_contains(object: GObject.Object): boolean;
    vfunc_get_length(): number;
    vfunc_get_objects(): GObject.Object[];
    vfunc_removed(object: GObject.Object): void;
}
export module SshAskpass {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        interaction: Gio.TlsInteraction;
    }
}
export class SshAskpass extends GObject.Object {
    static $gtype: GObject.GType<SshAskpass>;

    constructor(properties?: Partial<SshAskpass.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SshAskpass.ConstructorProperties>, ...args: any[]): void;

    // Properties
    interaction: Gio.TlsInteraction;

    // Constructors

    static ["new"](interaction: Gio.TlsInteraction): SshAskpass;

    // Members

    get_interaction(): Gio.TlsInteraction;
    static child_setup(askpass?: any | null): void;
}
export module SystemPrompt {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bus_name: string;
        busName: string;
        secret_exchange: SecretExchange;
        secretExchange: SecretExchange;
        timeout_seconds: number;
        timeoutSeconds: number;
    }
}
export class SystemPrompt extends GObject.Object implements Prompt, Gio.AsyncInitable<SystemPrompt>, Gio.Initable {
    static $gtype: GObject.GType<SystemPrompt>;

    constructor(properties?: Partial<SystemPrompt.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SystemPrompt.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bus_name: string;
    busName: string;
    secret_exchange: SecretExchange;
    secretExchange: SecretExchange;
    timeout_seconds: number;
    timeoutSeconds: number;

    // Implemented Properties

    caller_window: string;
    callerWindow: string;
    cancel_label: string;
    cancelLabel: string;
    choice_chosen: boolean;
    choiceChosen: boolean;
    choice_label: string;
    choiceLabel: string;
    continue_label: string;
    continueLabel: string;
    description: string;
    message: string;
    password_new: boolean;
    passwordNew: boolean;
    password_strength: number;
    passwordStrength: number;
    title: string;
    warning: string;

    // Members

    close(cancellable?: Gio.Cancellable | null): boolean;
    close(...args: never[]): never;
    close_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    close_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    close_finish(result: Gio.AsyncResult): boolean;
    get_secret_exchange(): SecretExchange;
    static error_get_domain(): GLib.Quark;
    static open(timeout_seconds: number, cancellable?: Gio.Cancellable | null): SystemPrompt;
    static open_async(timeout_seconds: number, cancellable?: Gio.Cancellable | null): Promise<SystemPrompt>;
    static open_async(
        timeout_seconds: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<SystemPrompt> | null
    ): void;
    static open_async(
        timeout_seconds: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<SystemPrompt> | null
    ): Promise<SystemPrompt> | void;
    static open_finish(result: Gio.AsyncResult): SystemPrompt;
    static open_for_prompter(
        prompter_name: string | null,
        timeout_seconds: number,
        cancellable?: Gio.Cancellable | null
    ): SystemPrompt;
    static open_for_prompter_async(
        prompter_name: string | null,
        timeout_seconds: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<SystemPrompt> | null
    ): void;

    // Implemented Members

    confirm(cancellable?: Gio.Cancellable | null): PromptReply;
    confirm_async(cancellable?: Gio.Cancellable | null): Promise<PromptReply>;
    confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    confirm_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<PromptReply> | void;
    confirm_finish(result: Gio.AsyncResult): PromptReply;
    confirm_run(cancellable?: Gio.Cancellable | null): PromptReply;
    get_caller_window(): string;
    get_cancel_label(): string;
    get_choice_chosen(): boolean;
    get_choice_label(): string;
    get_continue_label(): string;
    get_description(): string;
    get_message(): string;
    get_password_new(): boolean;
    get_password_strength(): number;
    get_title(): string;
    get_warning(): string;
    password(cancellable?: Gio.Cancellable | null): string;
    password_async(cancellable?: Gio.Cancellable | null): Promise<string>;
    password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    password_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    password_finish(result: Gio.AsyncResult): string;
    password_run(cancellable?: Gio.Cancellable | null): string;
    reset(): void;
    set_caller_window(window_id: string): void;
    set_cancel_label(cancel_label: string): void;
    set_choice_chosen(chosen: boolean): void;
    set_choice_label(choice_label?: string | null): void;
    set_continue_label(continue_label: string): void;
    set_description(description: string): void;
    set_message(message: string): void;
    set_password_new(new_password: boolean): void;
    set_title(title: string): void;
    set_warning(warning?: string | null): void;
    vfunc_prompt_close(): void;
    vfunc_prompt_confirm_async(cancellable?: Gio.Cancellable | null): Promise<PromptReply>;
    vfunc_prompt_confirm_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_prompt_confirm_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<PromptReply> | void;
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply;
    vfunc_prompt_password_async(cancellable?: Gio.Cancellable | null): Promise<string>;
    vfunc_prompt_password_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_prompt_password_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
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
    new_finish(res: Gio.AsyncResult): SystemPrompt;
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
export module SystemPrompter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        prompt_type: GObject.GType;
        promptType: GObject.GType;
        prompting: boolean;
    }
}
export class SystemPrompter extends GObject.Object {
    static $gtype: GObject.GType<SystemPrompter>;

    constructor(properties?: Partial<SystemPrompter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SystemPrompter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    prompt_type: GObject.GType;
    promptType: GObject.GType;
    prompting: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "new-prompt", callback: (_source: this) => Prompt): number;
    connect_after(signal: "new-prompt", callback: (_source: this) => Prompt): number;
    emit(signal: "new-prompt"): void;

    // Constructors

    static ["new"](mode: SystemPrompterMode, prompt_type: GObject.GType): SystemPrompter;

    // Members

    get_mode(): SystemPrompterMode;
    get_prompt_type(): GObject.GType;
    get_prompting(): boolean;
    register(connection: Gio.DBusConnection): void;
    unregister(wait: boolean): void;
}
export module UnionCollection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class UnionCollection extends GObject.Object implements Collection {
    static $gtype: GObject.GType<UnionCollection>;

    constructor(properties?: Partial<UnionCollection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnionCollection.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): UnionCollection;

    // Members

    add(collection: Collection): void;
    elements(): Collection[];
    have(collection: Collection): boolean;
    remove(collection: Collection): void;
    size(): number;
    take(collection: Collection): void;

    // Implemented Members

    contains(object: GObject.Object): boolean;
    emit_added(object: GObject.Object): void;
    emit_removed(object: GObject.Object): void;
    get_length(): number;
    get_objects(): GObject.Object[];
    vfunc_added(object: GObject.Object): void;
    vfunc_contains(object: GObject.Object): boolean;
    vfunc_get_length(): number;
    vfunc_get_objects(): GObject.Object[];
    vfunc_removed(object: GObject.Object): void;
}

export class CertificateChainPrivate {
    static $gtype: GObject.GType<CertificateChainPrivate>;

    constructor(copy: CertificateChainPrivate);
}

export class Column {
    static $gtype: GObject.GType<Column>;

    constructor(copy: Column);

    // Fields
    property_name: string;
    property_type: GObject.GType;
    column_type: GObject.GType;
    label: string;
    flags: ColumnFlags;
    transformer: GObject.ValueTransform;
    user_data: any;
    reserved: any;
}

export class FilterCollectionPrivate {
    static $gtype: GObject.GType<FilterCollectionPrivate>;

    constructor(copy: FilterCollectionPrivate);
}

export class Parsed {
    static $gtype: GObject.GType<Parsed>;

    constructor(copy: Parsed);

    // Members
    get_attributes(): Gck.Attributes | null;
    get_bytes(): GLib.Bytes;
    get_data(): Uint8Array | null;
    get_description(): string | null;
    get_filename(): string;
    get_format(): DataFormat;
    get_label(): string | null;
    ref(): Parsed;
    static unref(parsed?: any | null): void;
}

export class ParserPrivate {
    static $gtype: GObject.GType<ParserPrivate>;

    constructor(copy: ParserPrivate);
}

export class Pkcs11CertificatePrivate {
    static $gtype: GObject.GType<Pkcs11CertificatePrivate>;

    constructor(copy: Pkcs11CertificatePrivate);
}

export class SecretExchangePrivate {
    static $gtype: GObject.GType<SecretExchangePrivate>;

    constructor(copy: SecretExchangePrivate);
}

export class SimpleCertificatePrivate {
    static $gtype: GObject.GType<SimpleCertificatePrivate>;

    constructor(copy: SimpleCertificatePrivate);
}

export class SimpleCollectionPrivate {
    static $gtype: GObject.GType<SimpleCollectionPrivate>;

    constructor(copy: SimpleCollectionPrivate);
}

export class SystemPromptPrivate {
    static $gtype: GObject.GType<SystemPromptPrivate>;

    constructor(copy: SystemPromptPrivate);
}

export class SystemPrompterPrivate {
    static $gtype: GObject.GType<SystemPrompterPrivate>;

    constructor(copy: SystemPrompterPrivate);
}

export class UnionCollectionPrivate {
    static $gtype: GObject.GType<UnionCollectionPrivate>;

    constructor(copy: UnionCollectionPrivate);
}

export interface CertificateNamespace {
    $gtype: GObject.GType<Certificate>;
    prototype: CertificatePrototype;

    compare(first?: Comparable | null, other?: Comparable | null): number;
    compare(...args: never[]): never;
}
export type Certificate = CertificatePrototype;
export interface CertificatePrototype extends Comparable {
    // Properties
    description: string;
    expiry: GLib.Date;
    icon: Gio.Icon;
    issuer: string;
    label: string;
    markup: string;
    subject: string;

    // Members

    get_basic_constraints(): [boolean, boolean | null, number | null];
    get_der_data(): Uint8Array;
    get_expiry_date(): GLib.Date;
    get_fingerprint(type: GLib.ChecksumType): Uint8Array;
    get_fingerprint_hex(type: GLib.ChecksumType): string;
    get_issued_date(): GLib.Date;
    get_issuer_cn(): string;
    get_issuer_dn(): string;
    get_issuer_name(): string;
    get_issuer_part(part: string): string | null;
    get_issuer_raw(): Uint8Array;
    get_key_size(): number;
    get_markup_text(): string;
    get_serial_number(): Uint8Array;
    get_serial_number_hex(): string;
    get_subject_cn(): string;
    get_subject_dn(): string;
    get_subject_name(): string;
    get_subject_part(part: string): string | null;
    get_subject_raw(): Uint8Array;
    is_issuer(issuer: Certificate): boolean;
    mixin_emit_notify(): void;
    vfunc_get_der_data(): Uint8Array;
}

export const Certificate: CertificateNamespace;

export interface CollectionNamespace {
    $gtype: GObject.GType<Collection>;
    prototype: CollectionPrototype;
}
export type Collection = CollectionPrototype;
export interface CollectionPrototype extends GObject.Object {
    // Members

    contains(object: GObject.Object): boolean;
    emit_added(object: GObject.Object): void;
    emit_removed(object: GObject.Object): void;
    get_length(): number;
    get_objects(): GObject.Object[];
    vfunc_added(object: GObject.Object): void;
    vfunc_contains(object: GObject.Object): boolean;
    vfunc_get_length(): number;
    vfunc_get_objects(): GObject.Object[];
    vfunc_removed(object: GObject.Object): void;
}

export const Collection: CollectionNamespace;

export interface ComparableNamespace {
    $gtype: GObject.GType<Comparable>;
    prototype: ComparablePrototype;
}
export type Comparable = ComparablePrototype;
export interface ComparablePrototype extends GObject.Object {
    // Members

    compare(other?: Comparable | null): number;
    vfunc_compare(other?: Comparable | null): number;
}

export const Comparable: ComparableNamespace;

export interface ImportInteractionNamespace {
    $gtype: GObject.GType<ImportInteraction>;
    prototype: ImportInteractionPrototype;
}
export type ImportInteraction = ImportInteractionPrototype;
export interface ImportInteractionPrototype extends Gio.TlsInteraction {
    // Members

    supplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult;
    supplement_async(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Promise<Gio.TlsInteractionResult>;
    supplement_async(
        builder: Gck.Builder,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    supplement_async(
        builder: Gck.Builder,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.TlsInteractionResult> | void;
    supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
    supplement_prep(builder: Gck.Builder): void;
    vfunc_supplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult;
    vfunc_supplement_async(
        builder: Gck.Builder,
        cancellable?: Gio.Cancellable | null
    ): Promise<Gio.TlsInteractionResult>;
    vfunc_supplement_async(
        builder: Gck.Builder,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_supplement_async(
        builder: Gck.Builder,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.TlsInteractionResult> | void;
    vfunc_supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
    vfunc_supplement_prep(builder: Gck.Builder): void;
}

export const ImportInteraction: ImportInteractionNamespace;

export interface ImporterNamespace {
    $gtype: GObject.GType<Importer>;
    prototype: ImporterPrototype;

    create_for_parsed(parsed: Parsed): Importer[];
    queue_and_filter_for_parsed(importers: Importer[], parsed: Parsed): Importer[];
    register(importer_type: GObject.GType, attrs: Gck.Attributes): void;
    register_well_known(): void;
}
export type Importer = ImporterPrototype;
export interface ImporterPrototype extends GObject.Object {
    // Properties
    icon: Gio.Icon;
    interaction: Gio.TlsInteraction;
    label: string;
    uri: string;

    // Members

    get_interaction(): Gio.TlsInteraction | null;
    ["import"](cancellable?: Gio.Cancellable | null): boolean;
    import_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    import_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    import_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    import_finish(result: Gio.AsyncResult): boolean;
    queue_for_parsed(parsed: Parsed): boolean;
    set_interaction(interaction: Gio.TlsInteraction): void;
    vfunc_import_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_import_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_import_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_import_finish(result: Gio.AsyncResult): boolean;
    vfunc_import_sync(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_queue_for_parsed(parsed: Parsed): boolean;
}

export const Importer: ImporterNamespace;

export interface PromptNamespace {
    $gtype: GObject.GType<Prompt>;
    prototype: PromptPrototype;
}
export type Prompt = PromptPrototype;
export interface PromptPrototype extends GObject.Object {
    // Properties
    caller_window: string;
    callerWindow: string;
    cancel_label: string;
    cancelLabel: string;
    choice_chosen: boolean;
    choiceChosen: boolean;
    choice_label: string;
    choiceLabel: string;
    continue_label: string;
    continueLabel: string;
    description: string;
    message: string;
    password_new: boolean;
    passwordNew: boolean;
    password_strength: number;
    passwordStrength: number;
    title: string;
    warning: string;

    // Members

    close(): void;
    confirm(cancellable?: Gio.Cancellable | null): PromptReply;
    confirm_async(cancellable?: Gio.Cancellable | null): Promise<PromptReply>;
    confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    confirm_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<PromptReply> | void;
    confirm_finish(result: Gio.AsyncResult): PromptReply;
    confirm_run(cancellable?: Gio.Cancellable | null): PromptReply;
    get_caller_window(): string;
    get_cancel_label(): string;
    get_choice_chosen(): boolean;
    get_choice_label(): string;
    get_continue_label(): string;
    get_description(): string;
    get_message(): string;
    get_password_new(): boolean;
    get_password_strength(): number;
    get_title(): string;
    get_warning(): string;
    password(cancellable?: Gio.Cancellable | null): string;
    password_async(cancellable?: Gio.Cancellable | null): Promise<string>;
    password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    password_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    password_finish(result: Gio.AsyncResult): string;
    password_run(cancellable?: Gio.Cancellable | null): string;
    reset(): void;
    set_caller_window(window_id: string): void;
    set_cancel_label(cancel_label: string): void;
    set_choice_chosen(chosen: boolean): void;
    set_choice_label(choice_label?: string | null): void;
    set_continue_label(continue_label: string): void;
    set_description(description: string): void;
    set_message(message: string): void;
    set_password_new(new_password: boolean): void;
    set_title(title: string): void;
    set_warning(warning?: string | null): void;
    vfunc_prompt_close(): void;
    vfunc_prompt_confirm_async(cancellable?: Gio.Cancellable | null): Promise<PromptReply>;
    vfunc_prompt_confirm_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_prompt_confirm_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<PromptReply> | void;
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply;
    vfunc_prompt_password_async(cancellable?: Gio.Cancellable | null): Promise<string>;
    vfunc_prompt_password_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_prompt_password_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
}

export const Prompt: PromptNamespace;

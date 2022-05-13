/**
 * Soup 2.4
 *
 * Generated from 2.72.0
 */

import * as Gio from "@gi-types/gio";
import * as GObject from "@gi-types/gobject";
import * as GLib from "@gi-types/glib";

export const ADDRESS_ANY_PORT: number;
export const ADDRESS_FAMILY: string;
export const ADDRESS_NAME: string;
export const ADDRESS_PHYSICAL: string;
export const ADDRESS_PORT: string;
export const ADDRESS_PROTOCOL: string;
export const ADDRESS_SOCKADDR: string;
export const AUTH_DOMAIN_ADD_PATH: string;
export const AUTH_DOMAIN_BASIC_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_BASIC_AUTH_DATA: string;
export const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_DIGEST_AUTH_DATA: string;
export const AUTH_DOMAIN_FILTER: string;
export const AUTH_DOMAIN_FILTER_DATA: string;
export const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_GENERIC_AUTH_DATA: string;
export const AUTH_DOMAIN_PROXY: string;
export const AUTH_DOMAIN_REALM: string;
export const AUTH_DOMAIN_REMOVE_PATH: string;
export const AUTH_HOST: string;
export const AUTH_IS_AUTHENTICATED: string;
export const AUTH_IS_FOR_PROXY: string;
export const AUTH_REALM: string;
export const AUTH_SCHEME_NAME: string;
export const CHAR_HTTP_CTL: number;
export const CHAR_HTTP_SEPARATOR: number;
export const CHAR_URI_GEN_DELIMS: number;
export const CHAR_URI_PERCENT_ENCODED: number;
export const CHAR_URI_SUB_DELIMS: number;
export const COOKIE_JAR_ACCEPT_POLICY: string;
export const COOKIE_JAR_DB_FILENAME: string;
export const COOKIE_JAR_READ_ONLY: string;
export const COOKIE_JAR_TEXT_FILENAME: string;
export const COOKIE_MAX_AGE_ONE_DAY: number;
export const COOKIE_MAX_AGE_ONE_HOUR: number;
export const COOKIE_MAX_AGE_ONE_WEEK: number;
export const COOKIE_MAX_AGE_ONE_YEAR: number;
export const FORM_MIME_TYPE_MULTIPART: string;
export const FORM_MIME_TYPE_URLENCODED: string;
export const HSTS_ENFORCER_DB_FILENAME: string;
export const HSTS_POLICY_MAX_AGE_PAST: number;
export const LOGGER_LEVEL: string;
export const LOGGER_MAX_BODY_SIZE: string;
export const MAJOR_VERSION: number;
export const MESSAGE_FIRST_PARTY: string;
export const MESSAGE_FLAGS: string;
export const MESSAGE_HTTP_VERSION: string;
export const MESSAGE_IS_TOP_LEVEL_NAVIGATION: string;
export const MESSAGE_METHOD: string;
export const MESSAGE_PRIORITY: string;
export const MESSAGE_REASON_PHRASE: string;
export const MESSAGE_REQUEST_BODY: string;
export const MESSAGE_REQUEST_BODY_DATA: string;
export const MESSAGE_REQUEST_HEADERS: string;
export const MESSAGE_RESPONSE_BODY: string;
export const MESSAGE_RESPONSE_BODY_DATA: string;
export const MESSAGE_RESPONSE_HEADERS: string;
export const MESSAGE_SERVER_SIDE: string;
export const MESSAGE_SITE_FOR_COOKIES: string;
export const MESSAGE_STATUS_CODE: string;
export const MESSAGE_TLS_CERTIFICATE: string;
export const MESSAGE_TLS_ERRORS: string;
export const MESSAGE_URI: string;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const REQUEST_SESSION: string;
export const REQUEST_URI: string;
export const SERVER_ASYNC_CONTEXT: string;
export const SERVER_HTTPS_ALIASES: string;
export const SERVER_HTTP_ALIASES: string;
export const SERVER_INTERFACE: string;
export const SERVER_PORT: string;
export const SERVER_RAW_PATHS: string;
export const SERVER_SERVER_HEADER: string;
export const SERVER_SSL_CERT_FILE: string;
export const SERVER_SSL_KEY_FILE: string;
export const SERVER_TLS_CERTIFICATE: string;
export const SESSION_ACCEPT_LANGUAGE: string;
export const SESSION_ACCEPT_LANGUAGE_AUTO: string;
export const SESSION_ASYNC_CONTEXT: string;
export const SESSION_HTTPS_ALIASES: string;
export const SESSION_HTTP_ALIASES: string;
export const SESSION_IDLE_TIMEOUT: string;
export const SESSION_LOCAL_ADDRESS: string;
export const SESSION_MAX_CONNS: string;
export const SESSION_MAX_CONNS_PER_HOST: string;
export const SESSION_PROXY_RESOLVER: string;
export const SESSION_PROXY_URI: string;
export const SESSION_SSL_CA_FILE: string;
export const SESSION_SSL_STRICT: string;
export const SESSION_SSL_USE_SYSTEM_CA_FILE: string;
export const SESSION_TIMEOUT: string;
export const SESSION_TLS_DATABASE: string;
export const SESSION_TLS_INTERACTION: string;
export const SESSION_USER_AGENT: string;
export const SESSION_USE_NTLM: string;
export const SESSION_USE_THREAD_CONTEXT: string;
export const SOCKET_ASYNC_CONTEXT: string;
export const SOCKET_FLAG_NONBLOCKING: string;
export const SOCKET_IS_SERVER: string;
export const SOCKET_LOCAL_ADDRESS: string;
export const SOCKET_REMOTE_ADDRESS: string;
export const SOCKET_SSL_CREDENTIALS: string;
export const SOCKET_SSL_FALLBACK: string;
export const SOCKET_SSL_STRICT: string;
export const SOCKET_TIMEOUT: string;
export const SOCKET_TLS_CERTIFICATE: string;
export const SOCKET_TLS_ERRORS: string;
export const SOCKET_TRUSTED_CERTIFICATE: string;
export const SOCKET_USE_THREAD_CONTEXT: string;
export const VERSION_MIN_REQUIRED: number;
export function check_version(major: number, minor: number, micro: number): boolean;
export function cookie_parse(header: string, origin: URI): Cookie | null;
export function cookies_from_request(msg: Message): Cookie[];
export function cookies_from_response(msg: Message): Cookie[];
export function cookies_to_cookie_header(cookies: Cookie[]): string;
export function cookies_to_request(cookies: Cookie[], msg: Message): void;
export function cookies_to_response(cookies: Cookie[], msg: Message): void;
export function form_decode(encoded_form: string): GLib.HashTable<string, string>;
export function form_decode_multipart(
    msg: Message,
    file_control_name?: string | null
): [GLib.HashTable<string, string> | null, string | null, string | null, Buffer | null];
export function form_encode_datalist(form_data_set: GLib.Data): string;
export function form_encode_hash(form_data_set: GLib.HashTable<string, string>): string;
export function form_request_new_from_datalist(method: string, uri: string, form_data_set: GLib.Data): Message;
export function form_request_new_from_hash(
    method: string,
    uri: string,
    form_data_set: GLib.HashTable<string, string>
): Message;
export function form_request_new_from_multipart(uri: string, multipart: Multipart): Message;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function get_resource(): Gio.Resource;
export function header_contains(header: string, token: string): boolean;
export function header_free_param_list(param_list: GLib.HashTable<string, string>): void;
export function header_g_string_append_param(string: GLib.String, name: string, value: string): void;
export function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void;
export function header_parse_list(header: string): string[];
export function header_parse_param_list(header: string): GLib.HashTable<string, string>;
export function header_parse_param_list_strict(header: string): GLib.HashTable<string, string> | null;
export function header_parse_quality_list(header: string): [string[], string[] | null];
export function header_parse_semi_param_list(header: string): GLib.HashTable<string, string>;
export function header_parse_semi_param_list_strict(header: string): GLib.HashTable<string, string> | null;
export function headers_parse(str: string, len: number, dest: MessageHeaders): boolean;
export function headers_parse_request(
    str: string,
    len: number,
    req_headers: MessageHeaders
): [number, string | null, string | null, HTTPVersion | null];
export function headers_parse_response(
    str: string,
    len: number,
    headers: MessageHeaders
): [boolean, HTTPVersion | null, number | null, string | null];
export function headers_parse_status_line(
    status_line: string
): [boolean, HTTPVersion | null, number | null, string | null];
export function http_error_quark(): GLib.Quark;
export function message_headers_iter_init(hdrs: MessageHeaders): MessageHeadersIter;
export function request_error_quark(): GLib.Quark;
export function requester_error_quark(): GLib.Quark;
export function status_get_phrase(status_code: number): string;
export function status_proxify(status_code: number): number;
export function str_case_equal(v1?: any | null, v2?: any | null): boolean;
export function str_case_hash(key?: any | null): number;
export function tld_domain_is_public_suffix(domain: string): boolean;
export function tld_error_quark(): GLib.Quark;
export function tld_get_base_domain(hostname: string): string;
export function uri_decode(part: string): string;
export function uri_encode(part: string, escape_extra?: string | null): string;
export function uri_normalize(part: string, unescape_extra?: string | null): string;
export function value_array_new(): GObject.ValueArray;
export function value_hash_insert_value(hash: GLib.HashTable<string, GObject.Value>, key: string, value: any): void;
export function value_hash_new(): GLib.HashTable<string, GObject.Value>;
export function websocket_client_prepare_handshake(
    msg: Message,
    origin?: string | null,
    protocols?: string[] | null
): void;
export function websocket_client_prepare_handshake_with_extensions(
    msg: Message,
    origin?: string | null,
    protocols?: string[] | null,
    supported_extensions?: GObject.TypeClass[] | null
): void;
export function websocket_client_verify_handshake(msg: Message): boolean;
export function websocket_client_verify_handshake_with_extensions(
    msg: Message,
    supported_extensions?: GObject.TypeClass[] | null
): [boolean, WebsocketExtension[] | null];
export function websocket_error_get_quark(): GLib.Quark;
export function websocket_server_check_handshake(
    msg: Message,
    origin?: string | null,
    protocols?: string[] | null
): boolean;
export function websocket_server_check_handshake_with_extensions(
    msg: Message,
    origin?: string | null,
    protocols?: string[] | null,
    supported_extensions?: GObject.TypeClass[] | null
): boolean;
export function websocket_server_process_handshake(
    msg: Message,
    expected_origin?: string | null,
    protocols?: string[] | null
): boolean;
export function websocket_server_process_handshake_with_extensions(
    msg: Message,
    expected_origin?: string | null,
    protocols?: string[] | null,
    supported_extensions?: GObject.TypeClass[] | null
): [boolean, WebsocketExtension[] | null];
export function xmlrpc_build_method_call(method_name: string, params: GObject.Value[]): string | null;
export function xmlrpc_build_method_response(value: any): string | null;
export function xmlrpc_build_request(method_name: string, params: GLib.Variant): string;
export function xmlrpc_build_response(value: GLib.Variant): string;
export function xmlrpc_error_quark(): GLib.Quark;
export function xmlrpc_fault_quark(): GLib.Quark;
export function xmlrpc_message_new(uri: string, method_name: string, params: GLib.Variant): Message;
export function xmlrpc_message_set_response(msg: Message, value: GLib.Variant): boolean;
export function xmlrpc_parse_method_call(method_call: string, length: number): [boolean, string, GObject.ValueArray];
export function xmlrpc_parse_method_response(method_response: string, length: number): [boolean, unknown];
export function xmlrpc_parse_request(method_call: string, length: number): [string, XMLRPCParams];
export function xmlrpc_parse_response(method_response: string, length: number, signature?: string | null): GLib.Variant;
export function xmlrpc_variant_get_datetime(variant: GLib.Variant): Date;
export function xmlrpc_variant_new_datetime(date: Date): GLib.Variant;
export type AddressCallback = (addr: Address, status: number) => void;
export type AuthDomainBasicAuthCallback = (
    domain: AuthDomainBasic,
    msg: Message,
    username: string,
    password: string
) => boolean;
export type AuthDomainDigestAuthCallback = (domain: AuthDomainDigest, msg: Message, username: string) => string | null;
export type AuthDomainFilter = (domain: AuthDomain, msg: Message) => boolean;
export type AuthDomainGenericAuthCallback = (domain: AuthDomain, msg: Message, username: string) => boolean;
export type ChunkAllocator = (msg: Message, max_len: number) => Buffer | null;
export type LoggerFilter = (logger: Logger, msg: Message) => LoggerLogLevel;
export type LoggerPrinter = (logger: Logger, level: LoggerLogLevel, direction: number, data: string) => void;
export type MessageHeadersForeachFunc = (name: string, value: string) => void;
export type PasswordManagerCallback = (
    password_manager: PasswordManager,
    msg: Message,
    auth: Auth,
    retrying: boolean
) => void;
export type ProxyResolverCallback = (proxy_resolver: ProxyResolver, msg: Message, arg: number, addr: Address) => void;
export type ProxyURIResolverCallback = (resolver: ProxyURIResolver, status: number, proxy_uri: URI) => void;
export type ServerCallback = (
    server: Server,
    msg: Message,
    path: string,
    query: GLib.HashTable<string, string> | null,
    client: ClientContext
) => void;
export type ServerWebsocketCallback = (
    server: Server,
    connection: WebsocketConnection,
    path: string,
    client: ClientContext
) => void;
export type SessionCallback = (session: Session, msg: Message) => void;
export type SessionConnectProgressCallback = (
    session: Session,
    event: Gio.SocketClientEvent,
    connection: Gio.IOStream
) => void;
export type SocketCallback = (sock: Socket, status: number) => void;
export type ByteArray = object | null;

export namespace AddressFamily {
    export const $gtype: GObject.GType<AddressFamily>;
}

export enum AddressFamily {
    INVALID = -1,
    IPV4 = 2,
    IPV6 = 10,
}

export namespace CacheResponse {
    export const $gtype: GObject.GType<CacheResponse>;
}

export enum CacheResponse {
    FRESH = 0,
    NEEDS_VALIDATION = 1,
    STALE = 2,
}

export namespace CacheType {
    export const $gtype: GObject.GType<CacheType>;
}

export enum CacheType {
    SINGLE_USER = 0,
    SHARED = 1,
}

export namespace ConnectionState {
    export const $gtype: GObject.GType<ConnectionState>;
}

export enum ConnectionState {
    NEW = 0,
    CONNECTING = 1,
    IDLE = 2,
    IN_USE = 3,
    REMOTE_DISCONNECTED = 4,
    DISCONNECTED = 5,
}

export namespace CookieJarAcceptPolicy {
    export const $gtype: GObject.GType<CookieJarAcceptPolicy>;
}

export enum CookieJarAcceptPolicy {
    ALWAYS = 0,
    NEVER = 1,
    NO_THIRD_PARTY = 2,
    GRANDFATHERED_THIRD_PARTY = 3,
}

export namespace DateFormat {
    export const $gtype: GObject.GType<DateFormat>;
}

export enum DateFormat {
    HTTP = 1,
    COOKIE = 2,
    RFC2822 = 3,
    ISO8601_COMPACT = 4,
    ISO8601_FULL = 5,
    ISO8601 = 5,
    ISO8601_XMLRPC = 6,
}

export namespace Encoding {
    export const $gtype: GObject.GType<Encoding>;
}

export enum Encoding {
    UNRECOGNIZED = 0,
    NONE = 1,
    CONTENT_LENGTH = 2,
    EOF = 3,
    CHUNKED = 4,
    BYTERANGES = 5,
}

export namespace HTTPVersion {
    export const $gtype: GObject.GType<HTTPVersion>;
}

export enum HTTPVersion {
    HTTP_1_0 = 0,
    HTTP_1_1 = 1,
}

export namespace KnownStatusCode {
    export const $gtype: GObject.GType<KnownStatusCode>;
}

export enum KnownStatusCode {
    NONE = 0,
    CANCELLED = 1,
    CANT_RESOLVE = 2,
    CANT_RESOLVE_PROXY = 3,
    CANT_CONNECT = 4,
    CANT_CONNECT_PROXY = 5,
    SSL_FAILED = 6,
    IO_ERROR = 7,
    MALFORMED = 8,
    TRY_AGAIN = 9,
    TOO_MANY_REDIRECTS = 10,
    TLS_FAILED = 11,
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    MOVED_TEMPORARILY = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    NOT_APPEARING_IN_THIS_PROTOCOL = 306,
    TEMPORARY_REDIRECT = 307,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    PROXY_UNAUTHORIZED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    REQUEST_ENTITY_TOO_LARGE = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    INVALID_RANGE = 416,
    EXPECTATION_FAILED = 417,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    INSUFFICIENT_STORAGE = 507,
    NOT_EXTENDED = 510,
}

export namespace LoggerLogLevel {
    export const $gtype: GObject.GType<LoggerLogLevel>;
}

export enum LoggerLogLevel {
    NONE = 0,
    MINIMAL = 1,
    HEADERS = 2,
    BODY = 3,
}

export namespace MemoryUse {
    export const $gtype: GObject.GType<MemoryUse>;
}

export enum MemoryUse {
    STATIC = 0,
    TAKE = 1,
    COPY = 2,
    TEMPORARY = 3,
}

export namespace MessageHeadersType {
    export const $gtype: GObject.GType<MessageHeadersType>;
}

export enum MessageHeadersType {
    REQUEST = 0,
    RESPONSE = 1,
    MULTIPART = 2,
}

export namespace MessagePriority {
    export const $gtype: GObject.GType<MessagePriority>;
}

export enum MessagePriority {
    VERY_LOW = 0,
    LOW = 1,
    NORMAL = 2,
    HIGH = 3,
    VERY_HIGH = 4,
}

export class RequestError extends GLib.Error {
    static $gtype: GObject.GType<RequestError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RequestError);

    // Properties
    static BAD_URI: number;
    static UNSUPPORTED_URI_SCHEME: number;
    static PARSING: number;
    static ENCODING: number;

    // Members
    static quark(): GLib.Quark;
}

export class RequesterError extends GLib.Error {
    static $gtype: GObject.GType<RequesterError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RequesterError);

    // Properties
    static BAD_URI: number;
    static UNSUPPORTED_URI_SCHEME: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace SameSitePolicy {
    export const $gtype: GObject.GType<SameSitePolicy>;
}

export enum SameSitePolicy {
    NONE = 0,
    LAX = 1,
    STRICT = 2,
}

export namespace SocketIOStatus {
    export const $gtype: GObject.GType<SocketIOStatus>;
}

export enum SocketIOStatus {
    OK = 0,
    WOULD_BLOCK = 1,
    EOF = 2,
    ERROR = 3,
}

export namespace Status {
    export const $gtype: GObject.GType<Status>;
}

export enum Status {
    NONE = 0,
    CANCELLED = 1,
    CANT_RESOLVE = 2,
    CANT_RESOLVE_PROXY = 3,
    CANT_CONNECT = 4,
    CANT_CONNECT_PROXY = 5,
    SSL_FAILED = 6,
    IO_ERROR = 7,
    MALFORMED = 8,
    TRY_AGAIN = 9,
    TOO_MANY_REDIRECTS = 10,
    TLS_FAILED = 11,
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    MOVED_TEMPORARILY = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    NOT_APPEARING_IN_THIS_PROTOCOL = 306,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    PROXY_UNAUTHORIZED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    REQUEST_ENTITY_TOO_LARGE = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    INVALID_RANGE = 416,
    EXPECTATION_FAILED = 417,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    INSUFFICIENT_STORAGE = 507,
    NOT_EXTENDED = 510,
}

export class TLDError extends GLib.Error {
    static $gtype: GObject.GType<TLDError>;

    constructor(options: { message: string; code: number });
    constructor(copy: TLDError);

    // Properties
    static INVALID_HOSTNAME: number;
    static IS_IP_ADDRESS: number;
    static NOT_ENOUGH_DOMAINS: number;
    static NO_BASE_DOMAIN: number;
    static NO_PSL_DATA: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace WebsocketCloseCode {
    export const $gtype: GObject.GType<WebsocketCloseCode>;
}

export enum WebsocketCloseCode {
    NORMAL = 1000,
    GOING_AWAY = 1001,
    PROTOCOL_ERROR = 1002,
    UNSUPPORTED_DATA = 1003,
    NO_STATUS = 1005,
    ABNORMAL = 1006,
    BAD_DATA = 1007,
    POLICY_VIOLATION = 1008,
    TOO_BIG = 1009,
    NO_EXTENSION = 1010,
    SERVER_ERROR = 1011,
    TLS_HANDSHAKE = 1015,
}

export namespace WebsocketConnectionType {
    export const $gtype: GObject.GType<WebsocketConnectionType>;
}

export enum WebsocketConnectionType {
    UNKNOWN = 0,
    CLIENT = 1,
    SERVER = 2,
}

export namespace WebsocketDataType {
    export const $gtype: GObject.GType<WebsocketDataType>;
}

export enum WebsocketDataType {
    TEXT = 1,
    BINARY = 2,
}

export namespace WebsocketError {
    export const $gtype: GObject.GType<WebsocketError>;
}

export enum WebsocketError {
    FAILED = 0,
    NOT_WEBSOCKET = 1,
    BAD_HANDSHAKE = 2,
    BAD_ORIGIN = 3,
}

export namespace WebsocketState {
    export const $gtype: GObject.GType<WebsocketState>;
}

export enum WebsocketState {
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3,
}

export class XMLRPCError extends GLib.Error {
    static $gtype: GObject.GType<XMLRPCError>;

    constructor(options: { message: string; code: number });
    constructor(copy: XMLRPCError);

    // Properties
    static ARGUMENTS: number;
    static RETVAL: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace XMLRPCFault {
    export const $gtype: GObject.GType<XMLRPCFault>;
}

export enum XMLRPCFault {
    PARSE_ERROR_NOT_WELL_FORMED = -32700,
    PARSE_ERROR_UNSUPPORTED_ENCODING = -32701,
    PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING = -32702,
    SERVER_ERROR_INVALID_XML_RPC = -32600,
    SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND = -32601,
    SERVER_ERROR_INVALID_METHOD_PARAMETERS = -32602,
    SERVER_ERROR_INTERNAL_XML_RPC_ERROR = -32603,
    APPLICATION_ERROR = -32500,
    SYSTEM_ERROR = -32400,
    TRANSPORT_ERROR = -32300,
}

export namespace Cacheability {
    export const $gtype: GObject.GType<Cacheability>;
}

export enum Cacheability {
    CACHEABLE = 1,
    UNCACHEABLE = 2,
    INVALIDATES = 4,
    VALIDATES = 8,
}

export namespace Expectation {
    export const $gtype: GObject.GType<Expectation>;
}

export enum Expectation {
    UNRECOGNIZED = 1,
    CONTINUE = 2,
}

export namespace MessageFlags {
    export const $gtype: GObject.GType<MessageFlags>;
}

export enum MessageFlags {
    NO_REDIRECT = 2,
    CAN_REBUILD = 4,
    OVERWRITE_CHUNKS = 8,
    CONTENT_DECODED = 16,
    CERTIFICATE_TRUSTED = 32,
    NEW_CONNECTION = 64,
    IDEMPOTENT = 128,
    IGNORE_CONNECTION_LIMITS = 256,
    DO_NOT_USE_AUTH_CACHE = 512,
}

export namespace ServerListenOptions {
    export const $gtype: GObject.GType<ServerListenOptions>;
}

export enum ServerListenOptions {
    HTTPS = 1,
    IPV4_ONLY = 2,
    IPV6_ONLY = 4,
}
export module Address {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        family: AddressFamily;
        name: string;
        physical: string;
        port: number;
        protocol: string;
        sockaddr: any;
    }
}
export class Address extends GObject.Object implements Gio.SocketConnectable {
    static $gtype: GObject.GType<Address>;

    constructor(properties?: Partial<Address.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Address.ConstructorProperties>, ...args: any[]): void;

    // Properties
    family: AddressFamily;
    name: string;
    physical: string;
    port: number;
    protocol: string;
    sockaddr: any;

    // Constructors

    static ["new"](name: string, port: number): Address;
    static new_any(family: AddressFamily, port: number): Address;
    static new_from_sockaddr(sa: any | null, len: number): Address;

    // Members

    equal_by_ip(addr2: Address): boolean;
    equal_by_name(addr2: Address): boolean;
    get_gsockaddr(): Gio.SocketAddress;
    get_name(): string | null;
    get_physical(): string | null;
    get_port(): number;
    get_sockaddr(len: number): any | null;
    hash_by_ip(): number;
    hash_by_name(): number;
    is_resolved(): boolean;
    resolve_async(
        async_context: GLib.MainContext | null,
        cancellable: Gio.Cancellable | null,
        callback: AddressCallback
    ): void;
    resolve_sync(cancellable?: Gio.Cancellable | null): number;

    // Implemented Members

    enumerate(): Gio.SocketAddressEnumerator;
    proxy_enumerate(): Gio.SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): Gio.SocketAddressEnumerator;
    vfunc_proxy_enumerate(): Gio.SocketAddressEnumerator;
    vfunc_to_string(): string;
}
export module Auth {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        host: string;
        is_authenticated: boolean;
        isAuthenticated: boolean;
        is_for_proxy: boolean;
        isForProxy: boolean;
        realm: string;
        scheme_name: string;
        schemeName: string;
    }
}
export abstract class Auth extends GObject.Object {
    static $gtype: GObject.GType<Auth>;

    constructor(properties?: Partial<Auth.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Auth.ConstructorProperties>, ...args: any[]): void;

    // Properties
    host: string;
    is_authenticated: boolean;
    isAuthenticated: boolean;
    is_for_proxy: boolean;
    isForProxy: boolean;
    realm: string;
    scheme_name: string;
    schemeName: string;

    // Constructors

    static ["new"](type: GObject.GType, msg: Message, auth_header: string): Auth;

    // Members

    authenticate(username: string, password: string): void;
    can_authenticate(): boolean;
    get_authorization(msg: Message): string;
    get_host(): string;
    get_info(): string;
    get_protection_space(source_uri: URI): string[];
    get_realm(): string;
    get_saved_password(user: string): string;
    get_saved_users(): string[];
    get_scheme_name(): string;
    has_saved_password(username: string, password: string): void;
    is_ready(msg: Message): boolean;
    save_password(username: string, password: string): void;
    update(msg: Message, auth_header: string): boolean;
    vfunc_authenticate(username: string, password: string): void;
    vfunc_can_authenticate(): boolean;
    vfunc_get_authorization(msg: Message): string;
    vfunc_get_protection_space(source_uri: URI): string[];
    vfunc_is_authenticated(): boolean;
    vfunc_is_ready(msg: Message): boolean;
    vfunc_update(msg: Message, auth_header: GLib.HashTable<any, any>): boolean;
}
export module AuthBasic {
    export interface ConstructorProperties extends Auth.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthBasic extends Auth {
    static $gtype: GObject.GType<AuthBasic>;

    constructor(properties?: Partial<AuthBasic.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthBasic.ConstructorProperties>, ...args: any[]): void;
}
export module AuthDigest {
    export interface ConstructorProperties extends Auth.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthDigest extends Auth {
    static $gtype: GObject.GType<AuthDigest>;

    constructor(properties?: Partial<AuthDigest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthDigest.ConstructorProperties>, ...args: any[]): void;
}
export module AuthDomain {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        add_path: string;
        addPath: string;
        filter: AuthDomainFilter;
        filter_data: any;
        filterData: any;
        generic_auth_callback: AuthDomainGenericAuthCallback;
        genericAuthCallback: AuthDomainGenericAuthCallback;
        generic_auth_data: any;
        genericAuthData: any;
        proxy: boolean;
        realm: string;
        remove_path: string;
        removePath: string;
    }
}
export abstract class AuthDomain extends GObject.Object {
    static $gtype: GObject.GType<AuthDomain>;

    constructor(properties?: Partial<AuthDomain.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthDomain.ConstructorProperties>, ...args: any[]): void;

    // Properties
    add_path: string;
    addPath: string;
    filter: AuthDomainFilter;
    filter_data: any;
    filterData: any;
    generic_auth_callback: AuthDomainGenericAuthCallback;
    genericAuthCallback: AuthDomainGenericAuthCallback;
    generic_auth_data: any;
    genericAuthData: any;
    proxy: boolean;
    realm: string;
    remove_path: string;
    removePath: string;

    // Members

    accepts(msg: Message): string | null;
    challenge(msg: Message): void;
    check_password(msg: Message, username: string, password: string): boolean;
    covers(msg: Message): boolean;
    get_realm(): string;
    set_filter(filter: AuthDomainFilter): void;
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void;
    try_generic_auth_callback(msg: Message, username: string): boolean;
    vfunc_accepts(msg: Message, header: string): string;
    vfunc_challenge(msg: Message): string;
    vfunc_check_password(msg: Message, username: string, password: string): boolean;
}
export module AuthDomainBasic {
    export interface ConstructorProperties extends AuthDomain.ConstructorProperties {
        [key: string]: any;
        auth_callback: AuthDomainBasicAuthCallback;
        authCallback: AuthDomainBasicAuthCallback;
        auth_data: any;
        authData: any;
    }
}
export class AuthDomainBasic extends AuthDomain {
    static $gtype: GObject.GType<AuthDomainBasic>;

    constructor(properties?: Partial<AuthDomainBasic.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthDomainBasic.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auth_callback: AuthDomainBasicAuthCallback;
    authCallback: AuthDomainBasicAuthCallback;
    auth_data: any;
    authData: any;

    // Members

    set_auth_callback(callback: AuthDomainBasicAuthCallback): void;
}
export module AuthDomainDigest {
    export interface ConstructorProperties extends AuthDomain.ConstructorProperties {
        [key: string]: any;
        auth_callback: AuthDomainDigestAuthCallback;
        authCallback: AuthDomainDigestAuthCallback;
        auth_data: any;
        authData: any;
    }
}
export class AuthDomainDigest extends AuthDomain {
    static $gtype: GObject.GType<AuthDomainDigest>;

    constructor(properties?: Partial<AuthDomainDigest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthDomainDigest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auth_callback: AuthDomainDigestAuthCallback;
    authCallback: AuthDomainDigestAuthCallback;
    auth_data: any;
    authData: any;

    // Members

    set_auth_callback(callback: AuthDomainDigestAuthCallback): void;
    static encode_password(username: string, realm: string, password: string): string;
}
export module AuthManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthManager extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<AuthManager>;

    constructor(properties?: Partial<AuthManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthManager.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: AuthManagerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "authenticate",
        callback: (_source: this, msg: Message, auth: Auth, retrying: boolean) => void
    ): number;
    connect_after(
        signal: "authenticate",
        callback: (_source: this, msg: Message, auth: Auth, retrying: boolean) => void
    ): number;
    emit(signal: "authenticate", msg: Message, auth: Auth, retrying: boolean): void;

    // Members

    clear_cached_credentials(): void;
    use_auth(uri: URI, auth: Auth): void;
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module AuthNTLM {
    export interface ConstructorProperties extends Auth.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthNTLM extends Auth {
    static $gtype: GObject.GType<AuthNTLM>;

    constructor(properties?: Partial<AuthNTLM.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthNTLM.ConstructorProperties>, ...args: any[]): void;
}
export module AuthNegotiate {
    export interface ConstructorProperties extends Auth.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthNegotiate extends Auth {
    static $gtype: GObject.GType<AuthNegotiate>;

    constructor(properties?: Partial<AuthNegotiate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthNegotiate.ConstructorProperties>, ...args: any[]): void;

    // Members

    static supported(): boolean;
}
export module Cache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        cache_dir: string;
        cacheDir: string;
        cache_type: CacheType;
        cacheType: CacheType;
    }
}
export class Cache extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<Cache>;

    constructor(properties?: Partial<Cache.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Cache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache_dir: string;
    cacheDir: string;
    cache_type: CacheType;
    cacheType: CacheType;

    // Fields
    priv: CachePrivate;

    // Constructors

    static ["new"](cache_dir: string | null, cache_type: CacheType): Cache;

    // Members

    clear(): void;
    dump(): void;
    flush(): void;
    get_max_size(): number;
    load(): void;
    set_max_size(max_size: number): void;
    vfunc_get_cacheability(msg: Message): Cacheability;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module ContentDecoder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContentDecoder extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<ContentDecoder>;

    constructor(properties?: Partial<ContentDecoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContentDecoder.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ContentDecoderPrivate;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module ContentSniffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContentSniffer extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<ContentSniffer>;

    constructor(properties?: Partial<ContentSniffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContentSniffer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ContentSnifferPrivate;

    // Constructors

    static ["new"](): ContentSniffer;

    // Members

    get_buffer_size(): number;
    sniff(msg: Message, buffer: Buffer): [string, GLib.HashTable<string, string> | null];
    vfunc_get_buffer_size(): number;
    vfunc_sniff(msg: Message, buffer: Buffer): [string, GLib.HashTable<string, string> | null];

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module CookieJar {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accept_policy: CookieJarAcceptPolicy;
        acceptPolicy: CookieJarAcceptPolicy;
        read_only: boolean;
        readOnly: boolean;
    }
}
export class CookieJar extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<CookieJar>;

    constructor(properties?: Partial<CookieJar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CookieJar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accept_policy: CookieJarAcceptPolicy;
    acceptPolicy: CookieJarAcceptPolicy;
    read_only: boolean;
    readOnly: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this, old_cookie: Cookie, new_cookie: Cookie) => void): number;
    connect_after(signal: "changed", callback: (_source: this, old_cookie: Cookie, new_cookie: Cookie) => void): number;
    emit(signal: "changed", old_cookie: Cookie, new_cookie: Cookie): void;

    // Constructors

    static ["new"](): CookieJar;

    // Members

    add_cookie(cookie: Cookie): void;
    add_cookie_full(cookie: Cookie, uri?: URI | null, first_party?: URI | null): void;
    add_cookie_with_first_party(first_party: URI, cookie: Cookie): void;
    all_cookies(): Cookie[];
    delete_cookie(cookie: Cookie): void;
    get_accept_policy(): CookieJarAcceptPolicy;
    get_cookie_list(uri: URI, for_http: boolean): Cookie[];
    get_cookie_list_with_same_site_info(
        uri: URI,
        top_level: URI | null,
        site_for_cookies: URI | null,
        for_http: boolean,
        is_safe_method: boolean,
        is_top_level_navigation: boolean
    ): Cookie[];
    get_cookies(uri: URI, for_http: boolean): string | null;
    is_persistent(): boolean;
    save(): void;
    set_accept_policy(policy: CookieJarAcceptPolicy): void;
    set_cookie(uri: URI, cookie: string): void;
    set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void;
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void;
    vfunc_is_persistent(): boolean;
    vfunc_save(): void;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module CookieJarDB {
    export interface ConstructorProperties extends CookieJar.ConstructorProperties {
        [key: string]: any;
        filename: string;
    }
}
export class CookieJarDB extends CookieJar implements SessionFeature {
    static $gtype: GObject.GType<CookieJarDB>;

    constructor(properties?: Partial<CookieJarDB.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CookieJarDB.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filename: string;

    // Constructors

    static ["new"](filename: string, read_only: boolean): CookieJarDB;
    static ["new"](...args: never[]): never;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module CookieJarText {
    export interface ConstructorProperties extends CookieJar.ConstructorProperties {
        [key: string]: any;
        filename: string;
    }
}
export class CookieJarText extends CookieJar implements SessionFeature {
    static $gtype: GObject.GType<CookieJarText>;

    constructor(properties?: Partial<CookieJarText.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CookieJarText.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filename: string;

    // Constructors

    static ["new"](filename: string, read_only: boolean): CookieJarText;
    static ["new"](...args: never[]): never;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module HSTSEnforcer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class HSTSEnforcer extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<HSTSEnforcer>;

    constructor(properties?: Partial<HSTSEnforcer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HSTSEnforcer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: HSTSEnforcerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "changed",
        callback: (_source: this, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void
    ): number;
    connect_after(
        signal: "changed",
        callback: (_source: this, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void
    ): number;
    emit(signal: "changed", old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
    connect(signal: "hsts-enforced", callback: (_source: this, message: Message) => void): number;
    connect_after(signal: "hsts-enforced", callback: (_source: this, message: Message) => void): number;
    emit(signal: "hsts-enforced", message: Message): void;

    // Constructors

    static ["new"](): HSTSEnforcer;

    // Members

    get_domains(session_policies: boolean): string[];
    get_policies(session_policies: boolean): HSTSPolicy[];
    has_valid_policy(domain: string): boolean;
    is_persistent(): boolean;
    set_policy(policy: HSTSPolicy): void;
    set_session_policy(domain: string, include_subdomains: boolean): void;
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
    vfunc_has_valid_policy(domain: string): boolean;
    vfunc_hsts_enforced(message: Message): void;
    vfunc_is_persistent(): boolean;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module HSTSEnforcerDB {
    export interface ConstructorProperties extends HSTSEnforcer.ConstructorProperties {
        [key: string]: any;
        filename: string;
    }
}
export class HSTSEnforcerDB extends HSTSEnforcer implements SessionFeature {
    static $gtype: GObject.GType<HSTSEnforcerDB>;

    constructor(properties?: Partial<HSTSEnforcerDB.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HSTSEnforcerDB.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filename: string;

    // Fields
    priv: HSTSEnforcerDBPrivate | any;

    // Constructors

    static ["new"](filename: string): HSTSEnforcerDB;
    static ["new"](...args: never[]): never;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module Logger {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        level: LoggerLogLevel;
        max_body_size: number;
        maxBodySize: number;
    }
}
export class Logger extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<Logger>;

    constructor(properties?: Partial<Logger.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Logger.ConstructorProperties>, ...args: any[]): void;

    // Properties
    level: LoggerLogLevel;
    max_body_size: number;
    maxBodySize: number;

    // Constructors

    static ["new"](level: LoggerLogLevel, max_body_size: number): Logger;

    // Members

    attach(session: Session): void;
    detach(session: Session): void;
    set_printer(printer: LoggerPrinter): void;
    set_request_filter(request_filter: LoggerFilter): void;
    set_response_filter(response_filter: LoggerFilter): void;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module Message {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        first_party: URI;
        firstParty: URI;
        flags: MessageFlags;
        http_version: HTTPVersion;
        httpVersion: HTTPVersion;
        is_top_level_navigation: boolean;
        isTopLevelNavigation: boolean;
        method: string;
        priority: MessagePriority;
        reason_phrase: string;
        reasonPhrase: string;
        request_body: MessageBody;
        requestBody: MessageBody;
        request_body_data: GLib.Bytes;
        requestBodyData: GLib.Bytes;
        request_headers: MessageHeaders;
        requestHeaders: MessageHeaders;
        response_body: MessageBody;
        responseBody: MessageBody;
        response_body_data: GLib.Bytes;
        responseBodyData: GLib.Bytes;
        response_headers: MessageHeaders;
        responseHeaders: MessageHeaders;
        server_side: boolean;
        serverSide: boolean;
        site_for_cookies: URI;
        siteForCookies: URI;
        status_code: number;
        statusCode: number;
        tls_certificate: Gio.TlsCertificate;
        tlsCertificate: Gio.TlsCertificate;
        tls_errors: Gio.TlsCertificateFlags;
        tlsErrors: Gio.TlsCertificateFlags;
        uri: URI;
    }
}
export class Message extends GObject.Object {
    static $gtype: GObject.GType<Message>;

    constructor(properties?: Partial<Message.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Message.ConstructorProperties>, ...args: any[]): void;

    // Properties
    first_party: URI;
    firstParty: URI;
    flags: MessageFlags;
    http_version: HTTPVersion;
    httpVersion: HTTPVersion;
    is_top_level_navigation: boolean;
    isTopLevelNavigation: boolean;
    method: string;
    priority: MessagePriority;
    reason_phrase: string;
    reasonPhrase: string;
    request_body: MessageBody;
    requestBody: MessageBody;
    request_body_data: GLib.Bytes;
    requestBodyData: GLib.Bytes;
    request_headers: MessageHeaders;
    requestHeaders: MessageHeaders;
    response_body: MessageBody;
    responseBody: MessageBody;
    response_body_data: GLib.Bytes;
    responseBodyData: GLib.Bytes;
    response_headers: MessageHeaders;
    responseHeaders: MessageHeaders;
    server_side: boolean;
    serverSide: boolean;
    site_for_cookies: URI;
    siteForCookies: URI;
    status_code: number;
    statusCode: number;
    tls_certificate: Gio.TlsCertificate;
    tlsCertificate: Gio.TlsCertificate;
    tls_errors: Gio.TlsCertificateFlags;
    tlsErrors: Gio.TlsCertificateFlags;
    uri: URI;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "content-sniffed",
        callback: (_source: this, type: string, params: GLib.HashTable<string, string>) => void
    ): number;
    connect_after(
        signal: "content-sniffed",
        callback: (_source: this, type: string, params: GLib.HashTable<string, string>) => void
    ): number;
    emit(signal: "content-sniffed", type: string, params: GLib.HashTable<string, string>): void;
    connect(signal: "finished", callback: (_source: this) => void): number;
    connect_after(signal: "finished", callback: (_source: this) => void): number;
    emit(signal: "finished"): void;
    connect(signal: "got-body", callback: (_source: this) => void): number;
    connect_after(signal: "got-body", callback: (_source: this) => void): number;
    emit(signal: "got-body"): void;
    connect(signal: "got-chunk", callback: (_source: this, chunk: Buffer) => void): number;
    connect_after(signal: "got-chunk", callback: (_source: this, chunk: Buffer) => void): number;
    emit(signal: "got-chunk", chunk: Buffer): void;
    connect(signal: "got-headers", callback: (_source: this) => void): number;
    connect_after(signal: "got-headers", callback: (_source: this) => void): number;
    emit(signal: "got-headers"): void;
    connect(signal: "got-informational", callback: (_source: this) => void): number;
    connect_after(signal: "got-informational", callback: (_source: this) => void): number;
    emit(signal: "got-informational"): void;
    connect(
        signal: "network-event",
        callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void
    ): number;
    connect_after(
        signal: "network-event",
        callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void
    ): number;
    emit(signal: "network-event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
    connect(signal: "restarted", callback: (_source: this) => void): number;
    connect_after(signal: "restarted", callback: (_source: this) => void): number;
    emit(signal: "restarted"): void;
    connect(signal: "starting", callback: (_source: this) => void): number;
    connect_after(signal: "starting", callback: (_source: this) => void): number;
    emit(signal: "starting"): void;
    connect(signal: "wrote-body", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-body", callback: (_source: this) => void): number;
    emit(signal: "wrote-body"): void;
    connect(signal: "wrote-body-data", callback: (_source: this, chunk: Buffer) => void): number;
    connect_after(signal: "wrote-body-data", callback: (_source: this, chunk: Buffer) => void): number;
    emit(signal: "wrote-body-data", chunk: Buffer): void;
    connect(signal: "wrote-chunk", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-chunk", callback: (_source: this) => void): number;
    emit(signal: "wrote-chunk"): void;
    connect(signal: "wrote-headers", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-headers", callback: (_source: this) => void): number;
    emit(signal: "wrote-headers"): void;
    connect(signal: "wrote-informational", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-informational", callback: (_source: this) => void): number;
    emit(signal: "wrote-informational"): void;

    // Constructors

    static ["new"](method: string, uri_string: string): Message;
    static new_from_uri(method: string, uri: URI): Message;

    // Members

    content_sniffed(content_type: string, params: GLib.HashTable<any, any>): void;
    disable_feature(feature_type: GObject.GType): void;
    finished(): void;
    get_address(): Address;
    get_first_party(): URI;
    get_flags(): MessageFlags;
    get_http_version(): HTTPVersion;
    get_https_status(): [boolean, Gio.TlsCertificate, Gio.TlsCertificateFlags];
    get_is_top_level_navigation(): boolean;
    get_priority(): MessagePriority;
    get_site_for_cookies(): URI;
    get_soup_request(): Request;
    get_uri(): URI;
    got_body(): void;
    got_chunk(chunk: Buffer): void;
    got_headers(): void;
    got_informational(): void;
    is_feature_disabled(feature_type: GObject.GType): boolean;
    is_keepalive(): boolean;
    restarted(): void;
    set_chunk_allocator(allocator: ChunkAllocator): void;
    set_first_party(first_party: URI): void;
    set_flags(flags: MessageFlags): void;
    set_http_version(version: HTTPVersion): void;
    set_is_top_level_navigation(is_top_level_navigation: boolean): void;
    set_priority(priority: MessagePriority): void;
    set_redirect(status_code: number, redirect_uri: string): void;
    set_request(content_type: string | null, req_use: MemoryUse, req_body?: Uint8Array | null): void;
    set_response(content_type: string | null, resp_use: MemoryUse, resp_body?: Uint8Array | null): void;
    set_site_for_cookies(site_for_cookies?: URI | null): void;
    set_status(status_code: number): void;
    set_status_full(status_code: number, reason_phrase: string): void;
    set_uri(uri: URI): void;
    starting(): void;
    wrote_body(): void;
    wrote_body_data(chunk: Buffer): void;
    wrote_chunk(): void;
    wrote_headers(): void;
    wrote_informational(): void;
    vfunc_finished(): void;
    vfunc_got_body(): void;
    vfunc_got_chunk(chunk: Buffer): void;
    vfunc_got_headers(): void;
    vfunc_got_informational(): void;
    vfunc_restarted(): void;
    vfunc_starting(): void;
    vfunc_wrote_body(): void;
    vfunc_wrote_chunk(): void;
    vfunc_wrote_headers(): void;
    vfunc_wrote_informational(): void;
}
export module MultipartInputStream {
    export interface ConstructorProperties extends Gio.FilterInputStream.ConstructorProperties {
        [key: string]: any;
        message: Message;
    }
}
export class MultipartInputStream extends Gio.FilterInputStream implements Gio.PollableInputStream {
    static $gtype: GObject.GType<MultipartInputStream>;

    constructor(properties?: Partial<MultipartInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MultipartInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    message: Message;

    // Constructors

    static ["new"](msg: Message, base_stream: Gio.InputStream): MultipartInputStream;

    // Members

    get_headers(): MessageHeaders | null;
    next_part(cancellable?: Gio.Cancellable | null): Gio.InputStream | null;
    next_part_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream | null>;
    next_part_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    next_part_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.InputStream | null> | void;
    next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null;

    // Implemented Members

    can_poll(): boolean;
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
    is_readable(): boolean;
    read_nonblocking(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): number;
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
    vfunc_is_readable(): boolean;
    vfunc_read_nonblocking(buffer?: Uint8Array | null): number;
}
export module ProxyResolverDefault {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        gproxy_resolver: Gio.ProxyResolver;
        gproxyResolver: Gio.ProxyResolver;
    }
}
export class ProxyResolverDefault extends GObject.Object implements ProxyURIResolver, SessionFeature {
    static $gtype: GObject.GType<ProxyResolverDefault>;

    constructor(properties?: Partial<ProxyResolverDefault.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProxyResolverDefault.ConstructorProperties>, ...args: any[]): void;

    // Properties
    gproxy_resolver: Gio.ProxyResolver;
    gproxyResolver: Gio.ProxyResolver;

    // Implemented Members

    get_proxy_uri_async(
        uri: URI,
        async_context: GLib.MainContext | null,
        cancellable: Gio.Cancellable | null,
        callback: ProxyURIResolverCallback
    ): void;
    get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
    vfunc_get_proxy_uri_async(
        uri: URI,
        async_context: GLib.MainContext | null,
        cancellable: Gio.Cancellable | null,
        callback: ProxyURIResolverCallback
    ): void;
    vfunc_get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module Request {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        session: Session;
        uri: URI;
    }
}
export class Request extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Request>;

    constructor(properties?: Partial<Request.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Request.ConstructorProperties>, ...args: any[]): void;

    // Properties
    session: Session;
    uri: URI;

    // Fields
    priv: RequestPrivate;

    // Members

    get_content_length(): number;
    get_content_type(): string | null;
    get_session(): Session;
    get_uri(): URI;
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream;
    send_async(cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream>;
    send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    send_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.InputStream> | void;
    send_finish(result: Gio.AsyncResult): Gio.InputStream;
    vfunc_check_uri(uri: URI): boolean;
    vfunc_get_content_length(): number;
    vfunc_get_content_type(): string | null;
    vfunc_send(cancellable?: Gio.Cancellable | null): Gio.InputStream;
    vfunc_send_async(cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream>;
    vfunc_send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_send_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.InputStream> | void;
    vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module RequestData {
    export interface ConstructorProperties extends Request.ConstructorProperties {
        [key: string]: any;
    }
}
export class RequestData extends Request implements Gio.Initable {
    static $gtype: GObject.GType<RequestData>;

    constructor(properties?: Partial<RequestData.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RequestData.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RequestDataPrivate | any;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module RequestFile {
    export interface ConstructorProperties extends Request.ConstructorProperties {
        [key: string]: any;
    }
}
export class RequestFile extends Request implements Gio.Initable {
    static $gtype: GObject.GType<RequestFile>;

    constructor(properties?: Partial<RequestFile.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RequestFile.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RequestFilePrivate | any;

    // Members

    get_file(): Gio.File;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module RequestHTTP {
    export interface ConstructorProperties extends Request.ConstructorProperties {
        [key: string]: any;
    }
}
export class RequestHTTP extends Request implements Gio.Initable {
    static $gtype: GObject.GType<RequestHTTP>;

    constructor(properties?: Partial<RequestHTTP.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RequestHTTP.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RequestHTTPPrivate | any;

    // Members

    get_message(): Message;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module Requester {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Requester extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<Requester>;

    constructor(properties?: Partial<Requester.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Requester.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RequesterPrivate;

    // Constructors

    static ["new"](): Requester;

    // Members

    request(uri_string: string): Request;
    request_uri(uri: URI): Request;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}
export module Server {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        async_context: any;
        asyncContext: any;
        http_aliases: string[];
        httpAliases: string[];
        https_aliases: string[];
        httpsAliases: string[];
        interface: Address;
        port: number;
        raw_paths: boolean;
        rawPaths: boolean;
        server_header: string;
        serverHeader: string;
        ssl_cert_file: string;
        sslCertFile: string;
        ssl_key_file: string;
        sslKeyFile: string;
        tls_certificate: Gio.TlsCertificate;
        tlsCertificate: Gio.TlsCertificate;
    }
}
export class Server extends GObject.Object {
    static $gtype: GObject.GType<Server>;

    constructor(properties?: Partial<Server.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Server.ConstructorProperties>, ...args: any[]): void;

    // Properties
    async_context: any;
    asyncContext: any;
    http_aliases: string[];
    httpAliases: string[];
    https_aliases: string[];
    httpsAliases: string[];
    "interface": Address;
    port: number;
    raw_paths: boolean;
    rawPaths: boolean;
    server_header: string;
    serverHeader: string;
    ssl_cert_file: string;
    sslCertFile: string;
    ssl_key_file: string;
    sslKeyFile: string;
    tls_certificate: Gio.TlsCertificate;
    tlsCertificate: Gio.TlsCertificate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "request-aborted",
        callback: (_source: this, message: Message, client: ClientContext) => void
    ): number;
    connect_after(
        signal: "request-aborted",
        callback: (_source: this, message: Message, client: ClientContext) => void
    ): number;
    emit(signal: "request-aborted", message: Message, client: ClientContext): void;
    connect(
        signal: "request-finished",
        callback: (_source: this, message: Message, client: ClientContext) => void
    ): number;
    connect_after(
        signal: "request-finished",
        callback: (_source: this, message: Message, client: ClientContext) => void
    ): number;
    emit(signal: "request-finished", message: Message, client: ClientContext): void;
    connect(signal: "request-read", callback: (_source: this, message: Message, client: ClientContext) => void): number;
    connect_after(
        signal: "request-read",
        callback: (_source: this, message: Message, client: ClientContext) => void
    ): number;
    emit(signal: "request-read", message: Message, client: ClientContext): void;
    connect(
        signal: "request-started",
        callback: (_source: this, message: Message, client: ClientContext) => void
    ): number;
    connect_after(
        signal: "request-started",
        callback: (_source: this, message: Message, client: ClientContext) => void
    ): number;
    emit(signal: "request-started", message: Message, client: ClientContext): void;

    // Members

    accept_iostream(
        stream: Gio.IOStream,
        local_addr?: Gio.SocketAddress | null,
        remote_addr?: Gio.SocketAddress | null
    ): boolean;
    add_auth_domain(auth_domain: AuthDomain): void;
    add_early_handler(path: string | null, callback: ServerCallback): void;
    add_handler(path: string | null, callback: ServerCallback): void;
    add_websocket_extension(extension_type: GObject.GType): void;
    add_websocket_handler(
        path: string | null,
        origin: string | null,
        protocols: string[] | null,
        callback: ServerWebsocketCallback
    ): void;
    disconnect(): void;
    disconnect(...args: never[]): never;
    get_async_context(): GLib.MainContext | null;
    get_listener(): Socket;
    get_listeners(): Gio.Socket[];
    get_port(): number;
    get_uris(): URI[];
    is_https(): boolean;
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean;
    listen_all(port: number, options: ServerListenOptions): boolean;
    listen_fd(fd: number, options: ServerListenOptions): boolean;
    listen_local(port: number, options: ServerListenOptions): boolean;
    listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean;
    pause_message(msg: Message): void;
    quit(): void;
    remove_auth_domain(auth_domain: AuthDomain): void;
    remove_handler(path: string): void;
    remove_websocket_extension(extension_type: GObject.GType): void;
    run(): void;
    run_async(): void;
    set_ssl_cert_file(ssl_cert_file: string, ssl_key_file: string): boolean;
    unpause_message(msg: Message): void;
    vfunc_request_aborted(msg: Message, client: ClientContext): void;
    vfunc_request_finished(msg: Message, client: ClientContext): void;
    vfunc_request_read(msg: Message, client: ClientContext): void;
    vfunc_request_started(msg: Message, client: ClientContext): void;
}
export module Session {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accept_language: string;
        acceptLanguage: string;
        accept_language_auto: boolean;
        acceptLanguageAuto: boolean;
        async_context: any;
        asyncContext: any;
        http_aliases: string[];
        httpAliases: string[];
        https_aliases: string[];
        httpsAliases: string[];
        idle_timeout: number;
        idleTimeout: number;
        local_address: Address;
        localAddress: Address;
        max_conns: number;
        maxConns: number;
        max_conns_per_host: number;
        maxConnsPerHost: number;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        proxy_uri: URI;
        proxyUri: URI;
        ssl_ca_file: string;
        sslCaFile: string;
        ssl_strict: boolean;
        sslStrict: boolean;
        ssl_use_system_ca_file: boolean;
        sslUseSystemCaFile: boolean;
        timeout: number;
        tls_database: Gio.TlsDatabase;
        tlsDatabase: Gio.TlsDatabase;
        tls_interaction: Gio.TlsInteraction;
        tlsInteraction: Gio.TlsInteraction;
        use_ntlm: boolean;
        useNtlm: boolean;
        use_thread_context: boolean;
        useThreadContext: boolean;
        user_agent: string;
        userAgent: string;
    }
}
export class Session extends GObject.Object {
    static $gtype: GObject.GType<Session>;

    constructor(properties?: Partial<Session.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Session.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accept_language: string;
    acceptLanguage: string;
    accept_language_auto: boolean;
    acceptLanguageAuto: boolean;
    async_context: any;
    asyncContext: any;
    http_aliases: string[];
    httpAliases: string[];
    https_aliases: string[];
    httpsAliases: string[];
    idle_timeout: number;
    idleTimeout: number;
    local_address: Address;
    localAddress: Address;
    max_conns: number;
    maxConns: number;
    max_conns_per_host: number;
    maxConnsPerHost: number;
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    proxy_uri: URI;
    proxyUri: URI;
    ssl_ca_file: string;
    sslCaFile: string;
    ssl_strict: boolean;
    sslStrict: boolean;
    ssl_use_system_ca_file: boolean;
    sslUseSystemCaFile: boolean;
    timeout: number;
    tls_database: Gio.TlsDatabase;
    tlsDatabase: Gio.TlsDatabase;
    tls_interaction: Gio.TlsInteraction;
    tlsInteraction: Gio.TlsInteraction;
    use_ntlm: boolean;
    useNtlm: boolean;
    use_thread_context: boolean;
    useThreadContext: boolean;
    user_agent: string;
    userAgent: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "authenticate",
        callback: (_source: this, msg: Message, auth: Auth, retrying: boolean) => void
    ): number;
    connect_after(
        signal: "authenticate",
        callback: (_source: this, msg: Message, auth: Auth, retrying: boolean) => void
    ): number;
    emit(signal: "authenticate", msg: Message, auth: Auth, retrying: boolean): void;
    connect(signal: "connection-created", callback: (_source: this, connection: GObject.Object) => void): number;
    connect_after(signal: "connection-created", callback: (_source: this, connection: GObject.Object) => void): number;
    emit(signal: "connection-created", connection: GObject.Object): void;
    connect(signal: "request-queued", callback: (_source: this, msg: Message) => void): number;
    connect_after(signal: "request-queued", callback: (_source: this, msg: Message) => void): number;
    emit(signal: "request-queued", msg: Message): void;
    connect(signal: "request-started", callback: (_source: this, msg: Message, socket: Socket) => void): number;
    connect_after(signal: "request-started", callback: (_source: this, msg: Message, socket: Socket) => void): number;
    emit(signal: "request-started", msg: Message, socket: Socket): void;
    connect(signal: "request-unqueued", callback: (_source: this, msg: Message) => void): number;
    connect_after(signal: "request-unqueued", callback: (_source: this, msg: Message) => void): number;
    emit(signal: "request-unqueued", msg: Message): void;
    connect(signal: "tunneling", callback: (_source: this, connection: GObject.Object) => void): number;
    connect_after(signal: "tunneling", callback: (_source: this, connection: GObject.Object) => void): number;
    emit(signal: "tunneling", connection: GObject.Object): void;

    // Constructors

    static ["new"](): Session;

    // Members

    abort(): void;
    add_feature(feature: SessionFeature): void;
    add_feature_by_type(feature_type: GObject.GType): void;
    cancel_message(msg: Message, status_code: number): void;
    connect_async(
        uri: URI,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: SessionConnectProgressCallback | null
    ): Promise<Gio.IOStream>;
    connect_async(
        uri: URI,
        cancellable: Gio.Cancellable | null,
        progress_callback: SessionConnectProgressCallback | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    connect_async(
        uri: URI,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: SessionConnectProgressCallback | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.IOStream> | void;
    connect_finish(result: Gio.AsyncResult): Gio.IOStream;
    get_async_context(): GLib.MainContext | null;
    get_feature(feature_type: GObject.GType): SessionFeature | null;
    get_feature_for_message(feature_type: GObject.GType, msg: Message): SessionFeature | null;
    get_features(feature_type: GObject.GType): SessionFeature[];
    has_feature(feature_type: GObject.GType): boolean;
    pause_message(msg: Message): void;
    prefetch_dns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void;
    prepare_for_uri(uri: URI): void;
    queue_message(msg: Message, callback?: SessionCallback | null): void;
    redirect_message(msg: Message): boolean;
    remove_feature(feature: SessionFeature): void;
    remove_feature_by_type(feature_type: GObject.GType): void;
    request(uri_string: string): Request;
    request_http(method: string, uri_string: string): RequestHTTP;
    request_http_uri(method: string, uri: URI): RequestHTTP;
    request_uri(uri: URI): Request;
    requeue_message(msg: Message): void;
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream;
    send_async(msg: Message, cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream>;
    send_async(msg: Message, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    send_async(
        msg: Message,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.InputStream> | void;
    send_finish(result: Gio.AsyncResult): Gio.InputStream;
    send_message(msg: Message): number;
    steal_connection(msg: Message): Gio.IOStream;
    unpause_message(msg: Message): void;
    websocket_connect_async(
        msg: Message,
        origin?: string | null,
        protocols?: string[] | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<WebsocketConnection>;
    websocket_connect_async(
        msg: Message,
        origin: string | null,
        protocols: string[] | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    websocket_connect_async(
        msg: Message,
        origin?: string | null,
        protocols?: string[] | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<WebsocketConnection> | void;
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection;
    would_redirect(msg: Message): boolean;
    vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void;
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void;
    vfunc_cancel_message(msg: Message, status_code: number): void;
    vfunc_flush_queue(): void;
    vfunc_kick(): void;
    vfunc_queue_message(msg: Message, callback?: SessionCallback | null): void;
    vfunc_request_started(msg: Message, socket: Socket): void;
    vfunc_requeue_message(msg: Message): void;
    vfunc_send_message(msg: Message): number;
}
export module SessionAsync {
    export interface ConstructorProperties extends Session.ConstructorProperties {
        [key: string]: any;
    }
}
export class SessionAsync extends Session {
    static $gtype: GObject.GType<SessionAsync>;

    constructor(properties?: Partial<SessionAsync.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SessionAsync.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SessionAsync;
}
export module SessionSync {
    export interface ConstructorProperties extends Session.ConstructorProperties {
        [key: string]: any;
    }
}
export class SessionSync extends Session {
    static $gtype: GObject.GType<SessionSync>;

    constructor(properties?: Partial<SessionSync.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SessionSync.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SessionSync;
}
export module Socket {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        async_context: any;
        asyncContext: any;
        fd: number;
        gsocket: Gio.Socket;
        iostream: Gio.IOStream;
        ipv6_only: boolean;
        ipv6Only: boolean;
        is_server: boolean;
        isServer: boolean;
        local_address: Address;
        localAddress: Address;
        non_blocking: boolean;
        nonBlocking: boolean;
        remote_address: Address;
        remoteAddress: Address;
        ssl_creds: any;
        sslCreds: any;
        ssl_fallback: boolean;
        sslFallback: boolean;
        ssl_strict: boolean;
        sslStrict: boolean;
        timeout: number;
        tls_certificate: Gio.TlsCertificate;
        tlsCertificate: Gio.TlsCertificate;
        tls_errors: Gio.TlsCertificateFlags;
        tlsErrors: Gio.TlsCertificateFlags;
        trusted_certificate: boolean;
        trustedCertificate: boolean;
        use_thread_context: boolean;
        useThreadContext: boolean;
    }
}
export class Socket extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Socket>;

    constructor(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]): void;

    // Properties
    async_context: any;
    asyncContext: any;
    fd: number;
    gsocket: Gio.Socket;
    iostream: Gio.IOStream;
    ipv6_only: boolean;
    ipv6Only: boolean;
    is_server: boolean;
    isServer: boolean;
    local_address: Address;
    localAddress: Address;
    non_blocking: boolean;
    nonBlocking: boolean;
    remote_address: Address;
    remoteAddress: Address;
    ssl_creds: any;
    sslCreds: any;
    ssl_fallback: boolean;
    sslFallback: boolean;
    ssl_strict: boolean;
    sslStrict: boolean;
    timeout: number;
    tls_certificate: Gio.TlsCertificate;
    tlsCertificate: Gio.TlsCertificate;
    tls_errors: Gio.TlsCertificateFlags;
    tlsErrors: Gio.TlsCertificateFlags;
    trusted_certificate: boolean;
    trustedCertificate: boolean;
    use_thread_context: boolean;
    useThreadContext: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "disconnected", callback: (_source: this) => void): number;
    connect_after(signal: "disconnected", callback: (_source: this) => void): number;
    emit(signal: "disconnected"): void;
    connect(
        signal: "event",
        callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void
    ): number;
    connect_after(
        signal: "event",
        callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void
    ): number;
    emit(signal: "event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
    connect(signal: "new-connection", callback: (_source: this, _new: Socket) => void): number;
    connect_after(signal: "new-connection", callback: (_source: this, _new: Socket) => void): number;
    emit(signal: "new-connection", _new: Socket): void;
    connect(signal: "readable", callback: (_source: this) => void): number;
    connect_after(signal: "readable", callback: (_source: this) => void): number;
    emit(signal: "readable"): void;
    connect(signal: "writable", callback: (_source: this) => void): number;
    connect_after(signal: "writable", callback: (_source: this) => void): number;
    emit(signal: "writable"): void;

    // Members

    connect_async(cancellable: Gio.Cancellable | null, callback: SocketCallback): void;
    connect_sync(cancellable?: Gio.Cancellable | null): number;
    disconnect(): void;
    disconnect(...args: never[]): never;
    get_fd(): number;
    get_local_address(): Address;
    get_remote_address(): Address;
    is_connected(): boolean;
    is_ssl(): boolean;
    listen(): boolean;
    read(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): [SocketIOStatus, number];
    read_until(
        buffer: Uint8Array | string,
        boundary: any | null,
        boundary_len: number,
        got_boundary: boolean,
        cancellable?: Gio.Cancellable | null
    ): [SocketIOStatus, number];
    start_proxy_ssl(ssl_host: string, cancellable?: Gio.Cancellable | null): boolean;
    start_ssl(cancellable?: Gio.Cancellable | null): boolean;
    write(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): [SocketIOStatus, number];
    vfunc_disconnected(): void;
    vfunc_new_connection(new_sock: Socket): void;
    vfunc_readable(): void;
    vfunc_writable(): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module WebsocketConnection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        connection_type: WebsocketConnectionType;
        connectionType: WebsocketConnectionType;
        extensions: any;
        io_stream: Gio.IOStream;
        ioStream: Gio.IOStream;
        keepalive_interval: number;
        keepaliveInterval: number;
        max_incoming_payload_size: number;
        maxIncomingPayloadSize: number;
        origin: string;
        protocol: string;
        state: WebsocketState;
        uri: URI;
    }
}
export class WebsocketConnection extends GObject.Object {
    static $gtype: GObject.GType<WebsocketConnection>;

    constructor(properties?: Partial<WebsocketConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebsocketConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection_type: WebsocketConnectionType;
    connectionType: WebsocketConnectionType;
    extensions: any;
    io_stream: Gio.IOStream;
    ioStream: Gio.IOStream;
    keepalive_interval: number;
    keepaliveInterval: number;
    max_incoming_payload_size: number;
    maxIncomingPayloadSize: number;
    origin: string;
    protocol: string;
    state: WebsocketState;
    uri: URI;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "closed", callback: (_source: this) => void): number;
    connect_after(signal: "closed", callback: (_source: this) => void): number;
    emit(signal: "closed"): void;
    connect(signal: "closing", callback: (_source: this) => void): number;
    connect_after(signal: "closing", callback: (_source: this) => void): number;
    emit(signal: "closing"): void;
    connect(signal: "error", callback: (_source: this, error: GLib.Error) => void): number;
    connect_after(signal: "error", callback: (_source: this, error: GLib.Error) => void): number;
    emit(signal: "error", error: GLib.Error): void;
    connect(signal: "message", callback: (_source: this, type: number, message: GLib.Bytes) => void): number;
    connect_after(signal: "message", callback: (_source: this, type: number, message: GLib.Bytes) => void): number;
    emit(signal: "message", type: number, message: GLib.Bytes | Uint8Array): void;
    connect(signal: "pong", callback: (_source: this, message: GLib.Bytes) => void): number;
    connect_after(signal: "pong", callback: (_source: this, message: GLib.Bytes) => void): number;
    emit(signal: "pong", message: GLib.Bytes | Uint8Array): void;

    // Constructors

    static ["new"](
        stream: Gio.IOStream,
        uri: URI,
        type: WebsocketConnectionType,
        origin?: string | null,
        protocol?: string | null
    ): WebsocketConnection;
    static new_with_extensions(
        stream: Gio.IOStream,
        uri: URI,
        type: WebsocketConnectionType,
        origin: string | null,
        protocol: string | null,
        extensions: WebsocketExtension[]
    ): WebsocketConnection;

    // Members

    close(code: number, data?: string | null): void;
    get_close_code(): number;
    get_close_data(): string;
    get_connection_type(): WebsocketConnectionType;
    get_extensions(): WebsocketExtension[];
    get_io_stream(): Gio.IOStream;
    get_keepalive_interval(): number;
    get_max_incoming_payload_size(): number;
    get_origin(): string | null;
    get_protocol(): string | null;
    get_state(): WebsocketState;
    get_uri(): URI;
    send_binary(data?: Uint8Array | null): void;
    send_message(type: WebsocketDataType, message: GLib.Bytes | Uint8Array): void;
    send_text(text: string): void;
    set_keepalive_interval(interval: number): void;
    set_max_incoming_payload_size(max_incoming_payload_size: number): void;
    vfunc_closed(): void;
    vfunc_closing(): void;
    vfunc_error(error: GLib.Error): void;
    vfunc_message(type: WebsocketDataType, message: GLib.Bytes | Uint8Array): void;
    vfunc_pong(message: GLib.Bytes | Uint8Array): void;
}
export module WebsocketExtension {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class WebsocketExtension extends GObject.Object {
    static $gtype: GObject.GType<WebsocketExtension>;

    constructor(properties?: Partial<WebsocketExtension.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebsocketExtension.ConstructorProperties>, ...args: any[]): void;

    // Members

    configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable<any, any> | null): boolean;
    get_request_params(): string | null;
    get_response_params(): string | null;
    process_incoming_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
    process_outgoing_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
    vfunc_configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable<any, any> | null): boolean;
    vfunc_get_request_params(): string | null;
    vfunc_get_response_params(): string | null;
    vfunc_process_incoming_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
    vfunc_process_outgoing_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
}
export module WebsocketExtensionDeflate {
    export interface ConstructorProperties extends WebsocketExtension.ConstructorProperties {
        [key: string]: any;
    }
}
export class WebsocketExtensionDeflate extends WebsocketExtension {
    static $gtype: GObject.GType<WebsocketExtensionDeflate>;

    constructor(properties?: Partial<WebsocketExtensionDeflate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebsocketExtensionDeflate.ConstructorProperties>, ...args: any[]): void;
}
export module WebsocketExtensionManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class WebsocketExtensionManager extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<WebsocketExtensionManager>;

    constructor(properties?: Partial<WebsocketExtensionManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebsocketExtensionManager.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}

export class AuthManagerPrivate {
    static $gtype: GObject.GType<AuthManagerPrivate>;

    constructor(copy: AuthManagerPrivate);
}

export class Buffer {
    static $gtype: GObject.GType<Buffer>;

    constructor(use: MemoryUse, data: Uint8Array | string);
    constructor(
        properties?: Partial<{
            data?: any;
            length?: number;
        }>
    );
    constructor(copy: Buffer);

    // Fields
    data: any;
    length: number;

    // Constructors
    static ["new"](use: MemoryUse, data: Uint8Array | string): Buffer;
    static ["new"](data: Uint8Array | string): Buffer;
    static new_with_owner(
        data: Uint8Array | string,
        owner?: any | null,
        owner_dnotify?: GLib.DestroyNotify | null
    ): Buffer;

    // Members
    copy(): Buffer;
    free(): void;
    get_as_bytes(): GLib.Bytes;
    get_data(): Uint8Array;
    get_owner(): any | null;
    new_subbuffer(offset: number, length: number): Buffer;
}

export class CachePrivate {
    static $gtype: GObject.GType<CachePrivate>;

    constructor(copy: CachePrivate);
}

export class ClientContext {
    static $gtype: GObject.GType<ClientContext>;

    constructor(copy: ClientContext);

    // Members
    get_address(): Address | null;
    get_auth_domain(): AuthDomain | null;
    get_auth_user(): string | null;
    get_gsocket(): Gio.Socket | null;
    get_host(): string | null;
    get_local_address(): Gio.SocketAddress | null;
    get_remote_address(): Gio.SocketAddress | null;
    get_socket(): Socket;
    steal_connection(): Gio.IOStream;
}

export class Connection {
    static $gtype: GObject.GType<Connection>;

    constructor(copy: Connection);
}

export class ContentDecoderPrivate {
    static $gtype: GObject.GType<ContentDecoderPrivate>;

    constructor(copy: ContentDecoderPrivate);
}

export class ContentSnifferPrivate {
    static $gtype: GObject.GType<ContentSnifferPrivate>;

    constructor(copy: ContentSnifferPrivate);
}

export class Cookie {
    static $gtype: GObject.GType<Cookie>;

    constructor(name: string, value: string, domain: string, path: string, max_age: number);
    constructor(
        properties?: Partial<{
            name?: string;
            value?: string;
            domain?: string;
            path?: string;
            expires?: Date;
            secure?: boolean;
            http_only?: boolean;
        }>
    );
    constructor(copy: Cookie);

    // Fields
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: Date;
    secure: boolean;
    http_only: boolean;

    // Constructors
    static ["new"](name: string, value: string, domain: string, path: string, max_age: number): Cookie;

    // Members
    applies_to_uri(uri: URI): boolean;
    copy(): Cookie;
    domain_matches(host: string): boolean;
    equal(cookie2: Cookie): boolean;
    free(): void;
    get_domain(): string;
    get_expires(): Date | null;
    get_http_only(): boolean;
    get_name(): string;
    get_path(): string;
    get_same_site_policy(): SameSitePolicy;
    get_secure(): boolean;
    get_value(): string;
    set_domain(domain: string): void;
    set_expires(expires: Date): void;
    set_http_only(http_only: boolean): void;
    set_max_age(max_age: number): void;
    set_name(name: string): void;
    set_path(path: string): void;
    set_same_site_policy(policy: SameSitePolicy): void;
    set_secure(secure: boolean): void;
    set_value(value: string): void;
    to_cookie_header(): string;
    to_set_cookie_header(): string;
    static parse(header: string, origin: URI): Cookie | null;
}

export class Date {
    static $gtype: GObject.GType<Date>;

    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
    constructor(
        properties?: Partial<{
            year?: number;
            month?: number;
            day?: number;
            hour?: number;
            minute?: number;
            second?: number;
            utc?: boolean;
            offset?: number;
        }>
    );
    constructor(copy: Date);

    // Fields
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    utc: boolean;
    offset: number;

    // Constructors
    static ["new"](year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
    static new_from_now(offset_seconds: number): Date;
    static new_from_string(date_string: string): Date;
    static new_from_time_t(when: number): Date;

    // Members
    copy(): Date;
    free(): void;
    get_day(): number;
    get_hour(): number;
    get_minute(): number;
    get_month(): number;
    get_offset(): number;
    get_second(): number;
    get_utc(): number;
    get_year(): number;
    is_past(): boolean;
    to_string(format: DateFormat): string;
    to_time_t(): number;
    to_timeval(): GLib.TimeVal;
}

export class HSTSEnforcerDBPrivate {
    static $gtype: GObject.GType<HSTSEnforcerDBPrivate>;

    constructor(copy: HSTSEnforcerDBPrivate);
}

export class HSTSEnforcerPrivate {
    static $gtype: GObject.GType<HSTSEnforcerPrivate>;

    constructor(copy: HSTSEnforcerPrivate);
}

export class HSTSPolicy {
    static $gtype: GObject.GType<HSTSPolicy>;

    constructor(domain: string, max_age: number, include_subdomains: boolean);
    constructor(
        properties?: Partial<{
            domain?: string;
            max_age?: number;
            expires?: Date;
            include_subdomains?: boolean;
        }>
    );
    constructor(copy: HSTSPolicy);

    // Fields
    domain: string;
    max_age: number;
    expires: Date;
    include_subdomains: boolean;

    // Constructors
    static ["new"](domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy;
    static new_from_response(msg: Message): HSTSPolicy;
    static new_full(domain: string, max_age: number, expires: Date, include_subdomains: boolean): HSTSPolicy;
    static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy;

    // Members
    copy(): HSTSPolicy;
    equal(policy2: HSTSPolicy): boolean;
    free(): void;
    get_domain(): string;
    includes_subdomains(): boolean;
    is_expired(): boolean;
    is_session_policy(): boolean;
}

export class MessageBody {
    static $gtype: GObject.GType<MessageBody>;

    constructor();
    constructor(
        properties?: Partial<{
            data?: string;
            length?: number;
        }>
    );
    constructor(copy: MessageBody);

    // Fields
    data: string;
    length: number;

    // Constructors
    static ["new"](): MessageBody;

    // Members
    append(use: MemoryUse, data: Uint8Array | string): void;
    append_buffer(buffer: Buffer): void;
    append(data: Uint8Array | string): void;
    complete(): void;
    flatten(): Buffer;
    free(): void;
    get_accumulate(): boolean;
    get_chunk(offset: number): Buffer | null;
    got_chunk(chunk: Buffer): void;
    set_accumulate(accumulate: boolean): void;
    truncate(): void;
    wrote_chunk(chunk: Buffer): void;
}

export class MessageHeaders {
    static $gtype: GObject.GType<MessageHeaders>;

    constructor(type: MessageHeadersType);
    constructor(copy: MessageHeaders);

    // Constructors
    static ["new"](type: MessageHeadersType): MessageHeaders;

    // Members
    append(name: string, value: string): void;
    clean_connection_headers(): void;
    clear(): void;
    foreach(func: MessageHeadersForeachFunc): void;
    free(): void;
    free_ranges(ranges: Range): void;
    get(name: string): string | null;
    get_content_disposition(): [boolean, string, GLib.HashTable<string, string>];
    get_content_length(): number;
    get_content_range(): [boolean, number, number, number | null];
    get_content_type(): [string | null, GLib.HashTable<string, string> | null];
    get_encoding(): Encoding;
    get_expectations(): Expectation;
    get_headers_type(): MessageHeadersType;
    get_list(name: string): string | null;
    get_one(name: string): string | null;
    get_ranges(total_length: number): [boolean, Range[]];
    header_contains(name: string, token: string): boolean;
    header_equals(name: string, value: string): boolean;
    remove(name: string): void;
    replace(name: string, value: string): void;
    set_content_disposition(disposition: string, params?: GLib.HashTable<string, string> | null): void;
    set_content_length(content_length: number): void;
    set_content_range(start: number, end: number, total_length: number): void;
    set_content_type(content_type: string, params?: GLib.HashTable<string, string> | null): void;
    set_encoding(encoding: Encoding): void;
    set_expectations(expectations: Expectation): void;
    set_range(start: number, end: number): void;
    set_ranges(ranges: Range, length: number): void;
}

export class MessageHeadersIter {
    static $gtype: GObject.GType<MessageHeadersIter>;

    constructor(copy: MessageHeadersIter);

    // Fields
    dummy: any[];

    // Members
    next(): [boolean, string, string];
    static init(hdrs: MessageHeaders): MessageHeadersIter;
}

export class MessageQueue {
    static $gtype: GObject.GType<MessageQueue>;

    constructor(copy: MessageQueue);
}

export class MessageQueueItem {
    static $gtype: GObject.GType<MessageQueueItem>;

    constructor(copy: MessageQueueItem);
}

export class Multipart {
    static $gtype: GObject.GType<Multipart>;

    constructor(mime_type: string);
    constructor(copy: Multipart);

    // Constructors
    static ["new"](mime_type: string): Multipart;
    static new_from_message(headers: MessageHeaders, body: MessageBody): Multipart;

    // Members
    append_form_file(control_name: string, filename: string, content_type: string, body: Buffer): void;
    append_form_string(control_name: string, data: string): void;
    append_part(headers: MessageHeaders, body: Buffer): void;
    free(): void;
    get_length(): number;
    get_part(part: number): [boolean, MessageHeaders, Buffer];
    to_message(dest_headers: MessageHeaders, dest_body: MessageBody): void;
}

export class MultipartInputStreamPrivate {
    static $gtype: GObject.GType<MultipartInputStreamPrivate>;

    constructor(copy: MultipartInputStreamPrivate);
}

export class Range {
    static $gtype: GObject.GType<Range>;

    constructor(
        properties?: Partial<{
            start?: number;
            end?: number;
        }>
    );
    constructor(copy: Range);

    // Fields
    start: number;
    end: number;
}

export class RequestDataPrivate {
    static $gtype: GObject.GType<RequestDataPrivate>;

    constructor(copy: RequestDataPrivate);
}

export class RequestFilePrivate {
    static $gtype: GObject.GType<RequestFilePrivate>;

    constructor(copy: RequestFilePrivate);
}

export class RequestHTTPPrivate {
    static $gtype: GObject.GType<RequestHTTPPrivate>;

    constructor(copy: RequestHTTPPrivate);
}

export class RequestPrivate {
    static $gtype: GObject.GType<RequestPrivate>;

    constructor(copy: RequestPrivate);
}

export class RequesterPrivate {
    static $gtype: GObject.GType<RequesterPrivate>;

    constructor(copy: RequesterPrivate);
}

export class URI {
    static $gtype: GObject.GType<URI>;

    constructor(uri_string?: string | null);
    constructor(
        properties?: Partial<{
            scheme?: string;
            user?: string;
            password?: string;
            host?: string;
            port?: number;
            path?: string;
            query?: string;
            fragment?: string;
        }>
    );
    constructor(copy: URI);

    // Fields
    scheme: string;
    user: string;
    password: string;
    host: string;
    port: number;
    path: string;
    query: string;
    fragment: string;

    // Constructors
    static ["new"](uri_string?: string | null): URI;
    static new_with_base(base: URI, uri_string: string): URI;

    // Members
    copy(): URI;
    copy_host(): URI;
    equal(uri2: URI): boolean;
    free(): void;
    get_fragment(): string;
    get_host(): string;
    get_password(): string;
    get_path(): string;
    get_port(): number;
    get_query(): string;
    get_scheme(): string;
    get_user(): string;
    host_equal(v2: URI): boolean;
    host_hash(): number;
    set_fragment(fragment?: string | null): void;
    set_host(host?: string | null): void;
    set_password(password?: string | null): void;
    set_path(path: string): void;
    set_port(port: number): void;
    set_query(query?: string | null): void;
    set_query_from_form(form: GLib.HashTable<string, string>): void;
    set_scheme(scheme: string): void;
    set_user(user?: string | null): void;
    to_string(just_path_and_query: boolean): string;
    uses_default_port(): boolean;
    static decode(part: string): string;
    static encode(part: string, escape_extra?: string | null): string;
    static normalize(part: string, unescape_extra?: string | null): string;
}

export class WebsocketConnectionPrivate {
    static $gtype: GObject.GType<WebsocketConnectionPrivate>;

    constructor(copy: WebsocketConnectionPrivate);
}

export class XMLRPCParams {
    static $gtype: GObject.GType<XMLRPCParams>;

    constructor(copy: XMLRPCParams);

    // Members
    free(): void;
    parse(signature?: string | null): GLib.Variant;
}

export interface PasswordManagerNamespace {
    $gtype: GObject.GType<PasswordManager>;
    prototype: PasswordManagerPrototype;
}
export type PasswordManager = PasswordManagerPrototype;
export interface PasswordManagerPrototype extends SessionFeature {
    // Members

    get_passwords_async(
        msg: Message,
        auth: Auth,
        retrying: boolean,
        async_context: GLib.MainContext,
        cancellable: Gio.Cancellable | null,
        callback: PasswordManagerCallback
    ): void;
    get_passwords_sync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void;
    vfunc_get_passwords_async(
        msg: Message,
        auth: Auth,
        retrying: boolean,
        async_context: GLib.MainContext,
        cancellable: Gio.Cancellable | null,
        callback: PasswordManagerCallback
    ): void;
    vfunc_get_passwords_sync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void;
}

export const PasswordManager: PasswordManagerNamespace;

export interface ProxyResolverNamespace {
    $gtype: GObject.GType<ProxyResolver>;
    prototype: ProxyResolverPrototype;
}
export type ProxyResolver = ProxyResolverPrototype;
export interface ProxyResolverPrototype extends SessionFeature {
    // Members

    get_proxy_async(
        msg: Message,
        async_context: GLib.MainContext,
        cancellable: Gio.Cancellable | null,
        callback: ProxyResolverCallback
    ): void;
    get_proxy_sync(msg: Message, cancellable: Gio.Cancellable | null): [number, Address];
    vfunc_get_proxy_async(
        msg: Message,
        async_context: GLib.MainContext,
        cancellable: Gio.Cancellable | null,
        callback: ProxyResolverCallback
    ): void;
    vfunc_get_proxy_sync(msg: Message, cancellable: Gio.Cancellable | null): [number, Address];
}

export const ProxyResolver: ProxyResolverNamespace;

export interface ProxyURIResolverNamespace {
    $gtype: GObject.GType<ProxyURIResolver>;
    prototype: ProxyURIResolverPrototype;
}
export type ProxyURIResolver = ProxyURIResolverPrototype;
export interface ProxyURIResolverPrototype extends SessionFeature {
    // Members

    get_proxy_uri_async(
        uri: URI,
        async_context: GLib.MainContext | null,
        cancellable: Gio.Cancellable | null,
        callback: ProxyURIResolverCallback
    ): void;
    get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
    vfunc_get_proxy_uri_async(
        uri: URI,
        async_context: GLib.MainContext | null,
        cancellable: Gio.Cancellable | null,
        callback: ProxyURIResolverCallback
    ): void;
    vfunc_get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
}

export const ProxyURIResolver: ProxyURIResolverNamespace;

export interface SessionFeatureNamespace {
    $gtype: GObject.GType<SessionFeature>;
    prototype: SessionFeaturePrototype;
}
export type SessionFeature = SessionFeaturePrototype;
export interface SessionFeaturePrototype extends GObject.Object {
    // Members

    add_feature(type: GObject.GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GObject.GType): boolean;
    remove_feature(type: GObject.GType): boolean;
    vfunc_add_feature(type: GObject.GType): boolean;
    vfunc_attach(session: Session): void;
    vfunc_detach(session: Session): void;
    vfunc_has_feature(type: GObject.GType): boolean;
    vfunc_remove_feature(type: GObject.GType): boolean;
    vfunc_request_queued(session: Session, msg: Message): void;
    vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
    vfunc_request_unqueued(session: Session, msg: Message): void;
}

export const SessionFeature: SessionFeatureNamespace;

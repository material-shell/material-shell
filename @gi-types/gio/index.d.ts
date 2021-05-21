/**
 * Gio 2.0
 *
 * Generated from 2.66.2
 */

import * as GObject from "@gi-types/gobject";
import * as GLib from "@gi-types/glib";

export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string;
export const DRIVE_IDENTIFIER_KIND_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_DELETE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_READ: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_RENAME: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_TRASH: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_WRITE: string;
export const FILE_ATTRIBUTE_DOS_IS_ARCHIVE: string;
export const FILE_ATTRIBUTE_DOS_IS_MOUNTPOINT: string;
export const FILE_ATTRIBUTE_DOS_IS_SYSTEM: string;
export const FILE_ATTRIBUTE_DOS_REPARSE_POINT_TAG: string;
export const FILE_ATTRIBUTE_ETAG_VALUE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_FREE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_READONLY: string;
export const FILE_ATTRIBUTE_FILESYSTEM_REMOTE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_SIZE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_TYPE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_USED: string;
export const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW: string;
export const FILE_ATTRIBUTE_GVFS_BACKEND: string;
export const FILE_ATTRIBUTE_ID_FILE: string;
export const FILE_ATTRIBUTE_ID_FILESYSTEM: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI: string;
export const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC: string;
export const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE: string;
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE: string;
export const FILE_ATTRIBUTE_OWNER_GROUP: string;
export const FILE_ATTRIBUTE_OWNER_USER: string;
export const FILE_ATTRIBUTE_OWNER_USER_REAL: string;
export const FILE_ATTRIBUTE_PREVIEW_ICON: string;
export const FILE_ATTRIBUTE_RECENT_MODIFIED: string;
export const FILE_ATTRIBUTE_SELINUX_CONTEXT: string;
export const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE: string;
export const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE: string;
export const FILE_ATTRIBUTE_STANDARD_COPY_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_DESCRIPTION: string;
export const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_EDIT_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE: string;
export const FILE_ATTRIBUTE_STANDARD_ICON: string;
export const FILE_ATTRIBUTE_STANDARD_IS_BACKUP: string;
export const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN: string;
export const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK: string;
export const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL: string;
export const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE: string;
export const FILE_ATTRIBUTE_STANDARD_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_SIZE: string;
export const FILE_ATTRIBUTE_STANDARD_SORT_ORDER: string;
export const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON: string;
export const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET: string;
export const FILE_ATTRIBUTE_STANDARD_TARGET_URI: string;
export const FILE_ATTRIBUTE_STANDARD_TYPE: string;
export const FILE_ATTRIBUTE_THUMBNAILING_FAILED: string;
export const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID: string;
export const FILE_ATTRIBUTE_THUMBNAIL_PATH: string;
export const FILE_ATTRIBUTE_TIME_ACCESS: string;
export const FILE_ATTRIBUTE_TIME_ACCESS_USEC: string;
export const FILE_ATTRIBUTE_TIME_CHANGED: string;
export const FILE_ATTRIBUTE_TIME_CHANGED_USEC: string;
export const FILE_ATTRIBUTE_TIME_CREATED: string;
export const FILE_ATTRIBUTE_TIME_CREATED_USEC: string;
export const FILE_ATTRIBUTE_TIME_MODIFIED: string;
export const FILE_ATTRIBUTE_TIME_MODIFIED_USEC: string;
export const FILE_ATTRIBUTE_TRASH_DELETION_DATE: string;
export const FILE_ATTRIBUTE_TRASH_ITEM_COUNT: string;
export const FILE_ATTRIBUTE_TRASH_ORIG_PATH: string;
export const FILE_ATTRIBUTE_UNIX_BLOCKS: string;
export const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE: string;
export const FILE_ATTRIBUTE_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_UNIX_GID: string;
export const FILE_ATTRIBUTE_UNIX_INODE: string;
export const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT: string;
export const FILE_ATTRIBUTE_UNIX_MODE: string;
export const FILE_ATTRIBUTE_UNIX_NLINK: string;
export const FILE_ATTRIBUTE_UNIX_RDEV: string;
export const FILE_ATTRIBUTE_UNIX_UID: string;
export const MEMORY_MONITOR_EXTENSION_POINT_NAME: string;
export const MENU_ATTRIBUTE_ACTION: string;
export const MENU_ATTRIBUTE_ACTION_NAMESPACE: string;
export const MENU_ATTRIBUTE_ICON: string;
export const MENU_ATTRIBUTE_LABEL: string;
export const MENU_ATTRIBUTE_TARGET: string;
export const MENU_LINK_SECTION: string;
export const MENU_LINK_SUBMENU: string;
export const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME: string;
export const NETWORK_MONITOR_EXTENSION_POINT_NAME: string;
export const PROXY_EXTENSION_POINT_NAME: string;
export const PROXY_RESOLVER_EXTENSION_POINT_NAME: string;
export const SETTINGS_BACKEND_EXTENSION_POINT_NAME: string;
export const TLS_BACKEND_EXTENSION_POINT_NAME: string;
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT: string;
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER: string;
export const VFS_EXTENSION_POINT_NAME: string;
export const VOLUME_IDENTIFIER_KIND_CLASS: string;
export const VOLUME_IDENTIFIER_KIND_HAL_UDI: string;
export const VOLUME_IDENTIFIER_KIND_LABEL: string;
export const VOLUME_IDENTIFIER_KIND_NFS_MOUNT: string;
export const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE: string;
export const VOLUME_IDENTIFIER_KIND_UUID: string;
export const VOLUME_MONITOR_EXTENSION_POINT_NAME: string;
export function action_name_is_valid(action_name: string): boolean;
export function action_parse_detailed_name(detailed_name: string): [boolean, string, GLib.Variant];
export function action_print_detailed_name(action_name: string, target_value?: GLib.Variant | null): string;
export function app_info_create_from_commandline(
    commandline: string,
    application_name: string | null,
    flags: AppInfoCreateFlags
): AppInfo;
export function app_info_get_all(): AppInfo[];
export function app_info_get_all_for_type(content_type: string): AppInfo[];
export function app_info_get_default_for_type(content_type: string, must_support_uris: boolean): AppInfo | null;
export function app_info_get_default_for_uri_scheme(uri_scheme: string): AppInfo | null;
export function app_info_get_fallback_for_type(content_type: string): AppInfo[];
export function app_info_get_recommended_for_type(content_type: string): AppInfo[];
export function app_info_launch_default_for_uri(uri: string, context?: AppLaunchContext | null): boolean;
export function app_info_launch_default_for_uri_async(
    uri: string,
    context?: AppLaunchContext | null,
    cancellable?: Cancellable | null
): Promise<boolean>;
export function app_info_launch_default_for_uri_async(
    uri: string,
    context: AppLaunchContext | null,
    cancellable: Cancellable | null,
    callback: AsyncReadyCallback<string> | null
): void;
export function app_info_launch_default_for_uri_async(
    uri: string,
    context?: AppLaunchContext | null,
    cancellable?: Cancellable | null,
    callback?: AsyncReadyCallback<string> | null
): Promise<boolean> | void;
export function app_info_launch_default_for_uri_finish(result: AsyncResult): boolean;
export function app_info_reset_type_associations(content_type: string): void;
export function async_initable_newv_async(
    object_type: GObject.GType,
    n_parameters: number,
    parameters: GObject.Parameter,
    io_priority: number,
    cancellable?: Cancellable | null,
    callback?: AsyncReadyCallback<GObject.GType> | null
): void;
export function bus_get(bus_type: BusType, cancellable?: Cancellable | null): Promise<DBusConnection>;
export function bus_get(
    bus_type: BusType,
    cancellable: Cancellable | null,
    callback: AsyncReadyCallback<BusType> | null
): void;
export function bus_get(
    bus_type: BusType,
    cancellable?: Cancellable | null,
    callback?: AsyncReadyCallback<BusType> | null
): Promise<DBusConnection> | void;
export function bus_get_finish(res: AsyncResult): DBusConnection;
export function bus_get_sync(bus_type: BusType, cancellable?: Cancellable | null): DBusConnection;
export function bus_own_name_on_connection(
    connection: DBusConnection,
    name: string,
    flags: BusNameOwnerFlags,
    name_acquired_closure?: GObject.Closure | null,
    name_lost_closure?: GObject.Closure | null
): number;
export function bus_own_name(
    bus_type: BusType,
    name: string,
    flags: BusNameOwnerFlags,
    bus_acquired_closure?: GObject.Closure | null,
    name_acquired_closure?: GObject.Closure | null,
    name_lost_closure?: GObject.Closure | null
): number;
export function bus_unown_name(owner_id: number): void;
export function bus_unwatch_name(watcher_id: number): void;
export function bus_watch_name_on_connection(
    connection: DBusConnection,
    name: string,
    flags: BusNameWatcherFlags,
    name_appeared_closure?: GObject.Closure | null,
    name_vanished_closure?: GObject.Closure | null
): number;
export function bus_watch_name(
    bus_type: BusType,
    name: string,
    flags: BusNameWatcherFlags,
    name_appeared_closure?: GObject.Closure | null,
    name_vanished_closure?: GObject.Closure | null
): number;
export function content_type_can_be_executable(type: string): boolean;
export function content_type_equals(type1: string, type2: string): boolean;
export function content_type_from_mime_type(mime_type: string): string | null;
export function content_type_get_description(type: string): string;
export function content_type_get_generic_icon_name(type: string): string | null;
export function content_type_get_icon(type: string): Icon;
export function content_type_get_mime_dirs(): string[];
export function content_type_get_mime_type(type: string): string | null;
export function content_type_get_symbolic_icon(type: string): Icon;
export function content_type_guess(filename?: string | null, data?: Uint8Array | null): [string, boolean | null];
export function content_type_guess_for_tree(root: File): string[];
export function content_type_is_a(type: string, supertype: string): boolean;
export function content_type_is_mime_type(type: string, mime_type: string): boolean;
export function content_type_is_unknown(type: string): boolean;
export function content_type_set_mime_dirs(dirs?: string[] | null): void;
export function content_types_get_registered(): string[];
export function dbus_address_escape_value(string: string): string;
export function dbus_address_get_for_bus_sync(bus_type: BusType, cancellable?: Cancellable | null): string;
export function dbus_address_get_stream(
    address: string,
    cancellable?: Cancellable | null
): Promise<[IOStream, string | null]>;
export function dbus_address_get_stream(
    address: string,
    cancellable: Cancellable | null,
    callback: AsyncReadyCallback<string> | null
): void;
export function dbus_address_get_stream(
    address: string,
    cancellable?: Cancellable | null,
    callback?: AsyncReadyCallback<string> | null
): Promise<[IOStream, string | null]> | void;
export function dbus_address_get_stream_finish(res: AsyncResult): [IOStream, string | null];
export function dbus_address_get_stream_sync(
    address: string,
    cancellable?: Cancellable | null
): [IOStream, string | null];
export function dbus_annotation_info_lookup(annotations: DBusAnnotationInfo[] | null, name: string): string;
export function dbus_error_encode_gerror(error: GLib.Error): string;
export function dbus_error_get_remote_error(error: GLib.Error): string;
export function dbus_error_is_remote_error(error: GLib.Error): boolean;
export function dbus_error_new_for_dbus_error(dbus_error_name: string, dbus_error_message: string): GLib.Error;
export function dbus_error_quark(): GLib.Quark;
export function dbus_error_register_error(
    error_domain: GLib.Quark,
    error_code: number,
    dbus_error_name: string
): boolean;
export function dbus_error_register_error_domain(
    error_domain_quark_name: string,
    quark_volatile: number,
    entries: DBusErrorEntry[]
): void;
export function dbus_error_strip_remote_error(error: GLib.Error): boolean;
export function dbus_error_unregister_error(
    error_domain: GLib.Quark,
    error_code: number,
    dbus_error_name: string
): boolean;
export function dbus_generate_guid(): string;
export function dbus_gvalue_to_gvariant(gvalue: any, type: GLib.VariantType): GLib.Variant;
export function dbus_gvariant_to_gvalue(value: GLib.Variant): unknown;
export function dbus_is_address(string: string): boolean;
export function dbus_is_guid(string: string): boolean;
export function dbus_is_interface_name(string: string): boolean;
export function dbus_is_member_name(string: string): boolean;
export function dbus_is_name(string: string): boolean;
export function dbus_is_supported_address(string: string): boolean;
export function dbus_is_unique_name(string: string): boolean;
export function dtls_client_connection_new(
    base_socket: DatagramBased,
    server_identity?: SocketConnectable | null
): DtlsClientConnection;
export function dtls_server_connection_new(
    base_socket: DatagramBased,
    certificate?: TlsCertificate | null
): DtlsServerConnection;
export function file_new_for_commandline_arg(arg: string): File;
export function file_new_for_commandline_arg_and_cwd(arg: string, cwd: string): File;
export function file_new_for_path(path: string): File;
export function file_new_for_uri(uri: string): File;
export function file_new_tmp(tmpl: string | null): [File, FileIOStream];
export function file_parse_name(parse_name: string): File;
export function icon_deserialize(value: GLib.Variant): Icon;
export function icon_hash(icon: any): number;
export function icon_new_for_string(str: string): Icon;
export function initable_newv<T = GObject.Object>(
    object_type: GObject.GType,
    parameters: GObject.Parameter[],
    cancellable?: Cancellable | null
): T;
export function io_error_from_errno(err_no: number): IOErrorEnum;
export function io_error_quark(): GLib.Quark;
export function io_extension_point_implement(
    extension_point_name: string,
    type: GObject.GType,
    extension_name: string,
    priority: number
): IOExtension;
export function io_extension_point_lookup(name: string): IOExtensionPoint;
export function io_extension_point_register(name: string): IOExtensionPoint;
export function io_modules_load_all_in_directory(dirname: string): IOModule[];
export function io_modules_load_all_in_directory_with_scope(dirname: string, scope: IOModuleScope): IOModule[];
export function io_modules_scan_all_in_directory(dirname: string): void;
export function io_modules_scan_all_in_directory_with_scope(dirname: string, scope: IOModuleScope): void;
export function io_scheduler_cancel_all_jobs(): void;
export function io_scheduler_push_job(
    job_func: IOSchedulerJobFunc,
    notify: GLib.DestroyNotify | null,
    io_priority: number,
    cancellable?: Cancellable | null
): void;
export function keyfile_settings_backend_new(
    filename: string,
    root_path: string,
    root_group?: string | null
): SettingsBackend;
export function memory_monitor_dup_default(): MemoryMonitor;
export function memory_settings_backend_new(): SettingsBackend;
export function network_monitor_get_default(): NetworkMonitor;
export function networking_init(): void;
export function null_settings_backend_new(): SettingsBackend;
export function pollable_source_new(pollable_stream: GObject.Object): GLib.Source;
export function pollable_source_new_full(
    pollable_stream: GObject.Object,
    child_source?: GLib.Source | null,
    cancellable?: Cancellable | null
): GLib.Source;
export function pollable_stream_read(
    stream: InputStream,
    buffer: Uint8Array | string,
    blocking: boolean,
    cancellable?: Cancellable | null
): number;
export function pollable_stream_write(
    stream: OutputStream,
    buffer: Uint8Array | string,
    blocking: boolean,
    cancellable?: Cancellable | null
): number;
export function pollable_stream_write_all(
    stream: OutputStream,
    buffer: Uint8Array | string,
    blocking: boolean,
    cancellable?: Cancellable | null
): [boolean, number];
export function proxy_get_default_for_protocol(protocol: string): Proxy;
export function proxy_resolver_get_default(): ProxyResolver;
export function resolver_error_quark(): GLib.Quark;
export function resource_error_quark(): GLib.Quark;
export function resource_load(filename: string): Resource;
export function resources_enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[];
export function resources_get_info(
    path: string,
    lookup_flags: ResourceLookupFlags
): [boolean, number | null, number | null];
export function resources_lookup_data(path: string, lookup_flags: ResourceLookupFlags): GLib.Bytes;
export function resources_open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream;
export function resources_register(resource: Resource): void;
export function resources_unregister(resource: Resource): void;
export function settings_schema_source_get_default(): SettingsSchemaSource | null;
export function simple_async_report_gerror_in_idle(
    object: GObject.Object | null,
    callback: AsyncReadyCallback<GObject.Object | null> | null,
    error: GLib.Error
): void;
export function tls_backend_get_default(): TlsBackend;
export function tls_channel_binding_error_quark(): GLib.Quark;
export function tls_client_connection_new(
    base_io_stream: IOStream,
    server_identity?: SocketConnectable | null
): TlsClientConnection;
export function tls_error_quark(): GLib.Quark;
export function tls_file_database_new(anchors: string): TlsFileDatabase;
export function tls_server_connection_new(
    base_io_stream: IOStream,
    certificate?: TlsCertificate | null
): TlsServerConnection;
export function unix_is_mount_path_system_internal(mount_path: string): boolean;
export function unix_is_system_device_path(device_path: string): boolean;
export function unix_is_system_fs_type(fs_type: string): boolean;
export function unix_mount_at(mount_path: string): [UnixMountEntry, number | null];
export function unix_mount_compare(mount1: UnixMountEntry, mount2: UnixMountEntry): number;
export function unix_mount_copy(mount_entry: UnixMountEntry): UnixMountEntry;
export function unix_mount_for(file_path: string): [UnixMountEntry, number | null];
export function unix_mount_free(mount_entry: UnixMountEntry): void;
export function unix_mount_get_device_path(mount_entry: UnixMountEntry): string;
export function unix_mount_get_fs_type(mount_entry: UnixMountEntry): string;
export function unix_mount_get_mount_path(mount_entry: UnixMountEntry): string;
export function unix_mount_get_options(mount_entry: UnixMountEntry): string | null;
export function unix_mount_get_root_path(mount_entry: UnixMountEntry): string | null;
export function unix_mount_guess_can_eject(mount_entry: UnixMountEntry): boolean;
export function unix_mount_guess_icon(mount_entry: UnixMountEntry): Icon;
export function unix_mount_guess_name(mount_entry: UnixMountEntry): string;
export function unix_mount_guess_should_display(mount_entry: UnixMountEntry): boolean;
export function unix_mount_guess_symbolic_icon(mount_entry: UnixMountEntry): Icon;
export function unix_mount_is_readonly(mount_entry: UnixMountEntry): boolean;
export function unix_mount_is_system_internal(mount_entry: UnixMountEntry): boolean;
export function unix_mount_point_at(mount_path: string): [UnixMountPoint | null, number | null];
export function unix_mount_points_changed_since(time: number): boolean;
export function unix_mount_points_get(): [UnixMountPoint[], number | null];
export function unix_mounts_changed_since(time: number): boolean;
export function unix_mounts_get(): [UnixMountEntry[], number | null];
export type AsyncReadyCallback<A = GObject.Object> = (source_object: A | null, res: AsyncResult) => void;
export type BusAcquiredCallback = (connection: DBusConnection, name: string) => void;
export type BusNameAcquiredCallback = (connection: DBusConnection, name: string) => void;
export type BusNameAppearedCallback = (connection: DBusConnection, name: string, name_owner: string) => void;
export type BusNameLostCallback = (connection: DBusConnection, name: string) => void;
export type BusNameVanishedCallback = (connection: DBusConnection, name: string) => void;
export type CancellableSourceFunc = (cancellable?: Cancellable | null) => boolean;
export type DBusInterfaceGetPropertyFunc = (
    connection: DBusConnection,
    sender: string,
    object_path: string,
    interface_name: string,
    property_name: string,
    error: GLib.Error
) => GLib.Variant;
export type DBusInterfaceMethodCallFunc = (
    connection: DBusConnection,
    sender: string,
    object_path: string,
    interface_name: string,
    method_name: string,
    parameters: GLib.Variant,
    invocation: DBusMethodInvocation
) => void;
export type DBusInterfaceSetPropertyFunc = (
    connection: DBusConnection,
    sender: string,
    object_path: string,
    interface_name: string,
    property_name: string,
    value: GLib.Variant,
    error: GLib.Error
) => boolean;
export type DBusMessageFilterFunction = (
    connection: DBusConnection,
    message: DBusMessage,
    incoming: boolean
) => DBusMessage | null;
export type DBusProxyTypeFunc = (
    manager: DBusObjectManagerClient,
    object_path: string,
    interface_name?: string | null
) => GObject.GType;
export type DBusSignalCallback = (
    connection: DBusConnection,
    sender_name: string | null,
    object_path: string,
    interface_name: string,
    signal_name: string,
    parameters: GLib.Variant
) => void;
export type DBusSubtreeDispatchFunc = (
    connection: DBusConnection,
    sender: string,
    object_path: string,
    interface_name: string,
    node: string,
    out_user_data: any
) => DBusInterfaceVTable;
export type DBusSubtreeIntrospectFunc = (
    connection: DBusConnection,
    sender: string,
    object_path: string,
    node: string
) => DBusInterfaceInfo;
export type DatagramBasedSourceFunc = (datagram_based: DatagramBased, condition: GLib.IOCondition) => boolean;
export type DesktopAppLaunchCallback = (appinfo: DesktopAppInfo, pid: GLib.Pid) => void;
export type FileMeasureProgressCallback = (
    reporting: boolean,
    current_size: number,
    num_dirs: number,
    num_files: number
) => void;
export type FileProgressCallback = (current_num_bytes: number, total_num_bytes: number) => void;
export type FileReadMoreCallback = (file_contents: string, file_size: number) => boolean;
export type IOSchedulerJobFunc = (job: IOSchedulerJob, cancellable?: Cancellable | null) => boolean;
export type PollableSourceFunc<A = GObject.Object> = (pollable_stream: A) => boolean;
export type ReallocFunc = (data: any | null, size: number) => any | null;
export type SettingsBindGetMapping = (value: any, variant: GLib.Variant) => boolean;
export type SettingsBindSetMapping = (value: any, expected_type: GLib.VariantType) => GLib.Variant;
export type SettingsGetMapping = (value: GLib.Variant) => boolean;
export type SimpleAsyncThreadFunc<A = GObject.Object> = (
    res: SimpleAsyncResult,
    object: A,
    cancellable?: Cancellable | null
) => void;
export type SocketSourceFunc = (socket: Socket, condition: GLib.IOCondition) => boolean;
export type TaskThreadFunc<A = GObject.Object> = (
    task: Task,
    source_object: A,
    task_data?: any | null,
    cancellable?: Cancellable | null
) => void;
export type VfsFileLookupFunc = (vfs: Vfs, identifier: string) => File;

export namespace BusType {
    export const $gtype: GObject.GType<BusType>;
}

export enum BusType {
    STARTER = -1,
    NONE = 0,
    SYSTEM = 1,
    SESSION = 2,
}

export namespace ConverterResult {
    export const $gtype: GObject.GType<ConverterResult>;
}

export enum ConverterResult {
    ERROR = 0,
    CONVERTED = 1,
    FINISHED = 2,
    FLUSHED = 3,
}

export namespace CredentialsType {
    export const $gtype: GObject.GType<CredentialsType>;
}

export enum CredentialsType {
    INVALID = 0,
    LINUX_UCRED = 1,
    FREEBSD_CMSGCRED = 2,
    OPENBSD_SOCKPEERCRED = 3,
    SOLARIS_UCRED = 4,
    NETBSD_UNPCBID = 5,
    APPLE_XUCRED = 6,
}

export class DBusError extends GLib.Error {
    static $gtype: GObject.GType<DBusError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DBusError);

    // Properties
    static FAILED: number;
    static NO_MEMORY: number;
    static SERVICE_UNKNOWN: number;
    static NAME_HAS_NO_OWNER: number;
    static NO_REPLY: number;
    static IO_ERROR: number;
    static BAD_ADDRESS: number;
    static NOT_SUPPORTED: number;
    static LIMITS_EXCEEDED: number;
    static ACCESS_DENIED: number;
    static AUTH_FAILED: number;
    static NO_SERVER: number;
    static TIMEOUT: number;
    static NO_NETWORK: number;
    static ADDRESS_IN_USE: number;
    static DISCONNECTED: number;
    static INVALID_ARGS: number;
    static FILE_NOT_FOUND: number;
    static FILE_EXISTS: number;
    static UNKNOWN_METHOD: number;
    static TIMED_OUT: number;
    static MATCH_RULE_NOT_FOUND: number;
    static MATCH_RULE_INVALID: number;
    static SPAWN_EXEC_FAILED: number;
    static SPAWN_FORK_FAILED: number;
    static SPAWN_CHILD_EXITED: number;
    static SPAWN_CHILD_SIGNALED: number;
    static SPAWN_FAILED: number;
    static SPAWN_SETUP_FAILED: number;
    static SPAWN_CONFIG_INVALID: number;
    static SPAWN_SERVICE_INVALID: number;
    static SPAWN_SERVICE_NOT_FOUND: number;
    static SPAWN_PERMISSIONS_INVALID: number;
    static SPAWN_FILE_INVALID: number;
    static SPAWN_NO_MEMORY: number;
    static UNIX_PROCESS_ID_UNKNOWN: number;
    static INVALID_SIGNATURE: number;
    static INVALID_FILE_CONTENT: number;
    static SELINUX_SECURITY_CONTEXT_UNKNOWN: number;
    static ADT_AUDIT_DATA_UNKNOWN: number;
    static OBJECT_PATH_IN_USE: number;
    static UNKNOWN_OBJECT: number;
    static UNKNOWN_INTERFACE: number;
    static UNKNOWN_PROPERTY: number;
    static PROPERTY_READ_ONLY: number;

    // Members
    static encode_gerror(error: GLib.Error): string;
    static get_remote_error(error: GLib.Error): string;
    static is_remote_error(error: GLib.Error): boolean;
    static new_for_dbus_error(dbus_error_name: string, dbus_error_message: string): GLib.Error;
    static quark(): GLib.Quark;
    static register_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean;
    static register_error_domain(
        error_domain_quark_name: string,
        quark_volatile: number,
        entries: DBusErrorEntry[]
    ): void;
    static set_dbus_error(
        error: GLib.Error,
        dbus_error_name: string,
        dbus_error_message: string,
        format: string | null,
        ___: any[]
    ): void;
    static set_dbus_error_valist(
        error: GLib.Error,
        dbus_error_name: string,
        dbus_error_message: string,
        format: string | null,
        var_args: any
    ): void;
    static strip_remote_error(error: GLib.Error): boolean;
    static unregister_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean;
}

export namespace DBusMessageByteOrder {
    export const $gtype: GObject.GType<DBusMessageByteOrder>;
}

export enum DBusMessageByteOrder {
    BIG_ENDIAN = 66,
    LITTLE_ENDIAN = 108,
}

export namespace DBusMessageHeaderField {
    export const $gtype: GObject.GType<DBusMessageHeaderField>;
}

export enum DBusMessageHeaderField {
    INVALID = 0,
    PATH = 1,
    INTERFACE = 2,
    MEMBER = 3,
    ERROR_NAME = 4,
    REPLY_SERIAL = 5,
    DESTINATION = 6,
    SENDER = 7,
    SIGNATURE = 8,
    NUM_UNIX_FDS = 9,
}

export namespace DBusMessageType {
    export const $gtype: GObject.GType<DBusMessageType>;
}

export enum DBusMessageType {
    INVALID = 0,
    METHOD_CALL = 1,
    METHOD_RETURN = 2,
    ERROR = 3,
    SIGNAL = 4,
}

export namespace DataStreamByteOrder {
    export const $gtype: GObject.GType<DataStreamByteOrder>;
}

export enum DataStreamByteOrder {
    BIG_ENDIAN = 0,
    LITTLE_ENDIAN = 1,
    HOST_ENDIAN = 2,
}

export namespace DataStreamNewlineType {
    export const $gtype: GObject.GType<DataStreamNewlineType>;
}

export enum DataStreamNewlineType {
    LF = 0,
    CR = 1,
    CR_LF = 2,
    ANY = 3,
}

export namespace DriveStartStopType {
    export const $gtype: GObject.GType<DriveStartStopType>;
}

export enum DriveStartStopType {
    UNKNOWN = 0,
    SHUTDOWN = 1,
    NETWORK = 2,
    MULTIDISK = 3,
    PASSWORD = 4,
}

export namespace EmblemOrigin {
    export const $gtype: GObject.GType<EmblemOrigin>;
}

export enum EmblemOrigin {
    UNKNOWN = 0,
    DEVICE = 1,
    LIVEMETADATA = 2,
    TAG = 3,
}

export namespace FileAttributeStatus {
    export const $gtype: GObject.GType<FileAttributeStatus>;
}

export enum FileAttributeStatus {
    UNSET = 0,
    SET = 1,
    ERROR_SETTING = 2,
}

export namespace FileAttributeType {
    export const $gtype: GObject.GType<FileAttributeType>;
}

export enum FileAttributeType {
    INVALID = 0,
    STRING = 1,
    BYTE_STRING = 2,
    BOOLEAN = 3,
    UINT32 = 4,
    INT32 = 5,
    UINT64 = 6,
    INT64 = 7,
    OBJECT = 8,
    STRINGV = 9,
}

export namespace FileMonitorEvent {
    export const $gtype: GObject.GType<FileMonitorEvent>;
}

export enum FileMonitorEvent {
    CHANGED = 0,
    CHANGES_DONE_HINT = 1,
    DELETED = 2,
    CREATED = 3,
    ATTRIBUTE_CHANGED = 4,
    PRE_UNMOUNT = 5,
    UNMOUNTED = 6,
    MOVED = 7,
    RENAMED = 8,
    MOVED_IN = 9,
    MOVED_OUT = 10,
}

export namespace FileType {
    export const $gtype: GObject.GType<FileType>;
}

export enum FileType {
    UNKNOWN = 0,
    REGULAR = 1,
    DIRECTORY = 2,
    SYMBOLIC_LINK = 3,
    SPECIAL = 4,
    SHORTCUT = 5,
    MOUNTABLE = 6,
}

export namespace FilesystemPreviewType {
    export const $gtype: GObject.GType<FilesystemPreviewType>;
}

export enum FilesystemPreviewType {
    IF_ALWAYS = 0,
    IF_LOCAL = 1,
    NEVER = 2,
}

export class IOErrorEnum extends GLib.Error {
    static $gtype: GObject.GType<IOErrorEnum>;

    constructor(options: { message: string; code: number });
    constructor(copy: IOErrorEnum);

    // Properties
    static FAILED: number;
    static NOT_FOUND: number;
    static EXISTS: number;
    static IS_DIRECTORY: number;
    static NOT_DIRECTORY: number;
    static NOT_EMPTY: number;
    static NOT_REGULAR_FILE: number;
    static NOT_SYMBOLIC_LINK: number;
    static NOT_MOUNTABLE_FILE: number;
    static FILENAME_TOO_LONG: number;
    static INVALID_FILENAME: number;
    static TOO_MANY_LINKS: number;
    static NO_SPACE: number;
    static INVALID_ARGUMENT: number;
    static PERMISSION_DENIED: number;
    static NOT_SUPPORTED: number;
    static NOT_MOUNTED: number;
    static ALREADY_MOUNTED: number;
    static CLOSED: number;
    static CANCELLED: number;
    static PENDING: number;
    static READ_ONLY: number;
    static CANT_CREATE_BACKUP: number;
    static WRONG_ETAG: number;
    static TIMED_OUT: number;
    static WOULD_RECURSE: number;
    static BUSY: number;
    static WOULD_BLOCK: number;
    static HOST_NOT_FOUND: number;
    static WOULD_MERGE: number;
    static FAILED_HANDLED: number;
    static TOO_MANY_OPEN_FILES: number;
    static NOT_INITIALIZED: number;
    static ADDRESS_IN_USE: number;
    static PARTIAL_INPUT: number;
    static INVALID_DATA: number;
    static DBUS_ERROR: number;
    static HOST_UNREACHABLE: number;
    static NETWORK_UNREACHABLE: number;
    static CONNECTION_REFUSED: number;
    static PROXY_FAILED: number;
    static PROXY_AUTH_FAILED: number;
    static PROXY_NEED_AUTH: number;
    static PROXY_NOT_ALLOWED: number;
    static BROKEN_PIPE: number;
    static CONNECTION_CLOSED: number;
    static NOT_CONNECTED: number;
    static MESSAGE_TOO_LARGE: number;
}

export namespace IOModuleScopeFlags {
    export const $gtype: GObject.GType<IOModuleScopeFlags>;
}

export enum IOModuleScopeFlags {
    NONE = 0,
    BLOCK_DUPLICATES = 1,
}

export namespace MemoryMonitorWarningLevel {
    export const $gtype: GObject.GType<MemoryMonitorWarningLevel>;
}

export enum MemoryMonitorWarningLevel {
    LOW = 50,
    MEDIUM = 100,
    CRITICAL = 255,
}

export namespace MountOperationResult {
    export const $gtype: GObject.GType<MountOperationResult>;
}

export enum MountOperationResult {
    HANDLED = 0,
    ABORTED = 1,
    UNHANDLED = 2,
}

export namespace NetworkConnectivity {
    export const $gtype: GObject.GType<NetworkConnectivity>;
}

export enum NetworkConnectivity {
    LOCAL = 1,
    LIMITED = 2,
    PORTAL = 3,
    FULL = 4,
}

export namespace NotificationPriority {
    export const $gtype: GObject.GType<NotificationPriority>;
}

export enum NotificationPriority {
    NORMAL = 0,
    LOW = 1,
    HIGH = 2,
    URGENT = 3,
}

export namespace PasswordSave {
    export const $gtype: GObject.GType<PasswordSave>;
}

export enum PasswordSave {
    NEVER = 0,
    FOR_SESSION = 1,
    PERMANENTLY = 2,
}

export namespace PollableReturn {
    export const $gtype: GObject.GType<PollableReturn>;
}

export enum PollableReturn {
    FAILED = 0,
    OK = 1,
    WOULD_BLOCK = -27,
}

export class ResolverError extends GLib.Error {
    static $gtype: GObject.GType<ResolverError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ResolverError);

    // Properties
    static NOT_FOUND: number;
    static TEMPORARY_FAILURE: number;
    static INTERNAL: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ResolverRecordType {
    export const $gtype: GObject.GType<ResolverRecordType>;
}

export enum ResolverRecordType {
    SRV = 1,
    MX = 2,
    TXT = 3,
    SOA = 4,
    NS = 5,
}

export class ResourceError extends GLib.Error {
    static $gtype: GObject.GType<ResourceError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ResourceError);

    // Properties
    static NOT_FOUND: number;
    static INTERNAL: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace SocketClientEvent {
    export const $gtype: GObject.GType<SocketClientEvent>;
}

export enum SocketClientEvent {
    RESOLVING = 0,
    RESOLVED = 1,
    CONNECTING = 2,
    CONNECTED = 3,
    PROXY_NEGOTIATING = 4,
    PROXY_NEGOTIATED = 5,
    TLS_HANDSHAKING = 6,
    TLS_HANDSHAKED = 7,
    COMPLETE = 8,
}

export namespace SocketFamily {
    export const $gtype: GObject.GType<SocketFamily>;
}

export enum SocketFamily {
    INVALID = 0,
    UNIX = 1,
    IPV4 = 2,
    IPV6 = 10,
}

export namespace SocketListenerEvent {
    export const $gtype: GObject.GType<SocketListenerEvent>;
}

export enum SocketListenerEvent {
    BINDING = 0,
    BOUND = 1,
    LISTENING = 2,
    LISTENED = 3,
}

export namespace SocketProtocol {
    export const $gtype: GObject.GType<SocketProtocol>;
}

export enum SocketProtocol {
    UNKNOWN = -1,
    DEFAULT = 0,
    TCP = 6,
    UDP = 17,
    SCTP = 132,
}

export namespace SocketType {
    export const $gtype: GObject.GType<SocketType>;
}

export enum SocketType {
    INVALID = 0,
    STREAM = 1,
    DATAGRAM = 2,
    SEQPACKET = 3,
}

export namespace TlsAuthenticationMode {
    export const $gtype: GObject.GType<TlsAuthenticationMode>;
}

export enum TlsAuthenticationMode {
    NONE = 0,
    REQUESTED = 1,
    REQUIRED = 2,
}

export namespace TlsCertificateRequestFlags {
    export const $gtype: GObject.GType<TlsCertificateRequestFlags>;
}

export enum TlsCertificateRequestFlags {
    NONE = 0,
}

export class TlsChannelBindingError extends GLib.Error {
    static $gtype: GObject.GType<TlsChannelBindingError>;

    constructor(options: { message: string; code: number });
    constructor(copy: TlsChannelBindingError);

    // Properties
    static NOT_IMPLEMENTED: number;
    static INVALID_STATE: number;
    static NOT_AVAILABLE: number;
    static NOT_SUPPORTED: number;
    static GENERAL_ERROR: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace TlsChannelBindingType {
    export const $gtype: GObject.GType<TlsChannelBindingType>;
}

export enum TlsChannelBindingType {
    UNIQUE = 0,
    SERVER_END_POINT = 1,
}

export namespace TlsDatabaseLookupFlags {
    export const $gtype: GObject.GType<TlsDatabaseLookupFlags>;
}

export enum TlsDatabaseLookupFlags {
    NONE = 0,
    KEYPAIR = 1,
}

export class TlsError extends GLib.Error {
    static $gtype: GObject.GType<TlsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: TlsError);

    // Properties
    static UNAVAILABLE: number;
    static MISC: number;
    static BAD_CERTIFICATE: number;
    static NOT_TLS: number;
    static HANDSHAKE: number;
    static CERTIFICATE_REQUIRED: number;
    static EOF: number;
    static INAPPROPRIATE_FALLBACK: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace TlsInteractionResult {
    export const $gtype: GObject.GType<TlsInteractionResult>;
}

export enum TlsInteractionResult {
    UNHANDLED = 0,
    HANDLED = 1,
    FAILED = 2,
}

export namespace TlsRehandshakeMode {
    export const $gtype: GObject.GType<TlsRehandshakeMode>;
}

export enum TlsRehandshakeMode {
    NEVER = 0,
    SAFELY = 1,
    UNSAFELY = 2,
}

export namespace UnixSocketAddressType {
    export const $gtype: GObject.GType<UnixSocketAddressType>;
}

export enum UnixSocketAddressType {
    INVALID = 0,
    ANONYMOUS = 1,
    PATH = 2,
    ABSTRACT = 3,
    ABSTRACT_PADDED = 4,
}

export namespace ZlibCompressorFormat {
    export const $gtype: GObject.GType<ZlibCompressorFormat>;
}

export enum ZlibCompressorFormat {
    ZLIB = 0,
    GZIP = 1,
    RAW = 2,
}

export namespace AppInfoCreateFlags {
    export const $gtype: GObject.GType<AppInfoCreateFlags>;
}

export enum AppInfoCreateFlags {
    NONE = 0,
    NEEDS_TERMINAL = 1,
    SUPPORTS_URIS = 2,
    SUPPORTS_STARTUP_NOTIFICATION = 4,
}

export namespace ApplicationFlags {
    export const $gtype: GObject.GType<ApplicationFlags>;
}

export enum ApplicationFlags {
    FLAGS_NONE = 0,
    IS_SERVICE = 1,
    IS_LAUNCHER = 2,
    HANDLES_OPEN = 4,
    HANDLES_COMMAND_LINE = 8,
    SEND_ENVIRONMENT = 16,
    NON_UNIQUE = 32,
    CAN_OVERRIDE_APP_ID = 64,
    ALLOW_REPLACEMENT = 128,
    REPLACE = 256,
}

export namespace AskPasswordFlags {
    export const $gtype: GObject.GType<AskPasswordFlags>;
}

export enum AskPasswordFlags {
    NEED_PASSWORD = 1,
    NEED_USERNAME = 2,
    NEED_DOMAIN = 4,
    SAVING_SUPPORTED = 8,
    ANONYMOUS_SUPPORTED = 16,
    TCRYPT = 32,
}

export namespace BusNameOwnerFlags {
    export const $gtype: GObject.GType<BusNameOwnerFlags>;
}

export enum BusNameOwnerFlags {
    NONE = 0,
    ALLOW_REPLACEMENT = 1,
    REPLACE = 2,
    DO_NOT_QUEUE = 4,
}

export namespace BusNameWatcherFlags {
    export const $gtype: GObject.GType<BusNameWatcherFlags>;
}

export enum BusNameWatcherFlags {
    NONE = 0,
    AUTO_START = 1,
}

export namespace ConverterFlags {
    export const $gtype: GObject.GType<ConverterFlags>;
}

export enum ConverterFlags {
    NONE = 0,
    INPUT_AT_END = 1,
    FLUSH = 2,
}

export namespace DBusCallFlags {
    export const $gtype: GObject.GType<DBusCallFlags>;
}

export enum DBusCallFlags {
    NONE = 0,
    NO_AUTO_START = 1,
    ALLOW_INTERACTIVE_AUTHORIZATION = 2,
}

export namespace DBusCapabilityFlags {
    export const $gtype: GObject.GType<DBusCapabilityFlags>;
}

export enum DBusCapabilityFlags {
    NONE = 0,
    UNIX_FD_PASSING = 1,
}

export namespace DBusConnectionFlags {
    export const $gtype: GObject.GType<DBusConnectionFlags>;
}

export enum DBusConnectionFlags {
    NONE = 0,
    AUTHENTICATION_CLIENT = 1,
    AUTHENTICATION_SERVER = 2,
    AUTHENTICATION_ALLOW_ANONYMOUS = 4,
    MESSAGE_BUS_CONNECTION = 8,
    DELAY_MESSAGE_PROCESSING = 16,
}

export namespace DBusInterfaceSkeletonFlags {
    export const $gtype: GObject.GType<DBusInterfaceSkeletonFlags>;
}

export enum DBusInterfaceSkeletonFlags {
    NONE = 0,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD = 1,
}

export namespace DBusMessageFlags {
    export const $gtype: GObject.GType<DBusMessageFlags>;
}

export enum DBusMessageFlags {
    NONE = 0,
    NO_REPLY_EXPECTED = 1,
    NO_AUTO_START = 2,
    ALLOW_INTERACTIVE_AUTHORIZATION = 4,
}

export namespace DBusObjectManagerClientFlags {
    export const $gtype: GObject.GType<DBusObjectManagerClientFlags>;
}

export enum DBusObjectManagerClientFlags {
    NONE = 0,
    DO_NOT_AUTO_START = 1,
}

export namespace DBusPropertyInfoFlags {
    export const $gtype: GObject.GType<DBusPropertyInfoFlags>;
}

export enum DBusPropertyInfoFlags {
    NONE = 0,
    READABLE = 1,
    WRITABLE = 2,
}

export namespace DBusProxyFlags {
    export const $gtype: GObject.GType<DBusProxyFlags>;
}

export enum DBusProxyFlags {
    NONE = 0,
    DO_NOT_LOAD_PROPERTIES = 1,
    DO_NOT_CONNECT_SIGNALS = 2,
    DO_NOT_AUTO_START = 4,
    GET_INVALIDATED_PROPERTIES = 8,
    DO_NOT_AUTO_START_AT_CONSTRUCTION = 16,
}

export namespace DBusSendMessageFlags {
    export const $gtype: GObject.GType<DBusSendMessageFlags>;
}

export enum DBusSendMessageFlags {
    NONE = 0,
    PRESERVE_SERIAL = 1,
}

export namespace DBusServerFlags {
    export const $gtype: GObject.GType<DBusServerFlags>;
}

export enum DBusServerFlags {
    NONE = 0,
    RUN_IN_THREAD = 1,
    AUTHENTICATION_ALLOW_ANONYMOUS = 2,
}

export namespace DBusSignalFlags {
    export const $gtype: GObject.GType<DBusSignalFlags>;
}

export enum DBusSignalFlags {
    NONE = 0,
    NO_MATCH_RULE = 1,
    MATCH_ARG0_NAMESPACE = 2,
    MATCH_ARG0_PATH = 4,
}

export namespace DBusSubtreeFlags {
    export const $gtype: GObject.GType<DBusSubtreeFlags>;
}

export enum DBusSubtreeFlags {
    NONE = 0,
    DISPATCH_TO_UNENUMERATED_NODES = 1,
}

export namespace DriveStartFlags {
    export const $gtype: GObject.GType<DriveStartFlags>;
}

export enum DriveStartFlags {
    NONE = 0,
}

export namespace FileAttributeInfoFlags {
    export const $gtype: GObject.GType<FileAttributeInfoFlags>;
}

export enum FileAttributeInfoFlags {
    NONE = 0,
    COPY_WITH_FILE = 1,
    COPY_WHEN_MOVED = 2,
}

export namespace FileCopyFlags {
    export const $gtype: GObject.GType<FileCopyFlags>;
}

export enum FileCopyFlags {
    NONE = 0,
    OVERWRITE = 1,
    BACKUP = 2,
    NOFOLLOW_SYMLINKS = 4,
    ALL_METADATA = 8,
    NO_FALLBACK_FOR_MOVE = 16,
    TARGET_DEFAULT_PERMS = 32,
}

export namespace FileCreateFlags {
    export const $gtype: GObject.GType<FileCreateFlags>;
}

export enum FileCreateFlags {
    NONE = 0,
    PRIVATE = 1,
    REPLACE_DESTINATION = 2,
}

export namespace FileMeasureFlags {
    export const $gtype: GObject.GType<FileMeasureFlags>;
}

export enum FileMeasureFlags {
    NONE = 0,
    REPORT_ANY_ERROR = 2,
    APPARENT_SIZE = 4,
    NO_XDEV = 8,
}

export namespace FileMonitorFlags {
    export const $gtype: GObject.GType<FileMonitorFlags>;
}

export enum FileMonitorFlags {
    NONE = 0,
    WATCH_MOUNTS = 1,
    SEND_MOVED = 2,
    WATCH_HARD_LINKS = 4,
    WATCH_MOVES = 8,
}

export namespace FileQueryInfoFlags {
    export const $gtype: GObject.GType<FileQueryInfoFlags>;
}

export enum FileQueryInfoFlags {
    NONE = 0,
    NOFOLLOW_SYMLINKS = 1,
}

export namespace IOStreamSpliceFlags {
    export const $gtype: GObject.GType<IOStreamSpliceFlags>;
}

export enum IOStreamSpliceFlags {
    NONE = 0,
    CLOSE_STREAM1 = 1,
    CLOSE_STREAM2 = 2,
    WAIT_FOR_BOTH = 4,
}

export namespace MountMountFlags {
    export const $gtype: GObject.GType<MountMountFlags>;
}

export enum MountMountFlags {
    NONE = 0,
}

export namespace MountUnmountFlags {
    export const $gtype: GObject.GType<MountUnmountFlags>;
}

export enum MountUnmountFlags {
    NONE = 0,
    FORCE = 1,
}

export namespace OutputStreamSpliceFlags {
    export const $gtype: GObject.GType<OutputStreamSpliceFlags>;
}

export enum OutputStreamSpliceFlags {
    NONE = 0,
    CLOSE_SOURCE = 1,
    CLOSE_TARGET = 2,
}

export namespace ResolverNameLookupFlags {
    export const $gtype: GObject.GType<ResolverNameLookupFlags>;
}

export enum ResolverNameLookupFlags {
    DEFAULT = 0,
    IPV4_ONLY = 1,
    IPV6_ONLY = 2,
}

export namespace ResourceFlags {
    export const $gtype: GObject.GType<ResourceFlags>;
}

export enum ResourceFlags {
    NONE = 0,
    COMPRESSED = 1,
}

export namespace ResourceLookupFlags {
    export const $gtype: GObject.GType<ResourceLookupFlags>;
}

export enum ResourceLookupFlags {
    NONE = 0,
}

export namespace SettingsBindFlags {
    export const $gtype: GObject.GType<SettingsBindFlags>;
}

export enum SettingsBindFlags {
    DEFAULT = 0,
    GET = 1,
    SET = 2,
    NO_SENSITIVITY = 4,
    GET_NO_CHANGES = 8,
    INVERT_BOOLEAN = 16,
}

export namespace SocketMsgFlags {
    export const $gtype: GObject.GType<SocketMsgFlags>;
}

export enum SocketMsgFlags {
    NONE = 0,
    OOB = 1,
    PEEK = 2,
    DONTROUTE = 4,
}

export namespace SubprocessFlags {
    export const $gtype: GObject.GType<SubprocessFlags>;
}

export enum SubprocessFlags {
    NONE = 0,
    STDIN_PIPE = 1,
    STDIN_INHERIT = 2,
    STDOUT_PIPE = 4,
    STDOUT_SILENCE = 8,
    STDERR_PIPE = 16,
    STDERR_SILENCE = 32,
    STDERR_MERGE = 64,
    INHERIT_FDS = 128,
}

export namespace TestDBusFlags {
    export const $gtype: GObject.GType<TestDBusFlags>;
}

export enum TestDBusFlags {
    NONE = 0,
}

export namespace TlsCertificateFlags {
    export const $gtype: GObject.GType<TlsCertificateFlags>;
}

export enum TlsCertificateFlags {
    UNKNOWN_CA = 1,
    BAD_IDENTITY = 2,
    NOT_ACTIVATED = 4,
    EXPIRED = 8,
    REVOKED = 16,
    INSECURE = 32,
    GENERIC_ERROR = 64,
    VALIDATE_ALL = 127,
}

export namespace TlsDatabaseVerifyFlags {
    export const $gtype: GObject.GType<TlsDatabaseVerifyFlags>;
}

export enum TlsDatabaseVerifyFlags {
    NONE = 0,
}

export namespace TlsPasswordFlags {
    export const $gtype: GObject.GType<TlsPasswordFlags>;
}

export enum TlsPasswordFlags {
    NONE = 0,
    RETRY = 2,
    MANY_TRIES = 4,
    FINAL_TRY = 8,
}
export module AppInfoMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AppInfoMonitor extends GObject.Object {
    static $gtype: GObject.GType<AppInfoMonitor>;

    constructor(properties?: Partial<AppInfoMonitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppInfoMonitor.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Members

    static get(): AppInfoMonitor;
}
export module AppLaunchContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AppLaunchContext extends GObject.Object {
    static $gtype: GObject.GType<AppLaunchContext>;

    constructor(properties?: Partial<AppLaunchContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppLaunchContext.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "launch-failed", callback: (_source: this, startup_notify_id: string) => void): number;
    connect_after(signal: "launch-failed", callback: (_source: this, startup_notify_id: string) => void): number;
    emit(signal: "launch-failed", startup_notify_id: string): void;
    connect(signal: "launched", callback: (_source: this, info: AppInfo, platform_data: GLib.Variant) => void): number;
    connect_after(
        signal: "launched",
        callback: (_source: this, info: AppInfo, platform_data: GLib.Variant) => void
    ): number;
    emit(signal: "launched", info: AppInfo, platform_data: GLib.Variant): void;

    // Constructors

    static ["new"](): AppLaunchContext;

    // Members

    get_display(info: AppInfo, files: File[]): string;
    get_environment(): string[];
    get_startup_notify_id(info: AppInfo, files: File[]): string;
    launch_failed(startup_notify_id: string): void;
    setenv(variable: string, value: string): void;
    unsetenv(variable: string): void;
    vfunc_get_display(info: AppInfo, files: File[]): string;
    vfunc_get_startup_notify_id(info: AppInfo, files: File[]): string;
    vfunc_launch_failed(startup_notify_id: string): void;
    vfunc_launched(info: AppInfo, platform_data: GLib.Variant): void;
}
export module Application {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        action_group: ActionGroup;
        actionGroup: ActionGroup;
        application_id: string;
        applicationId: string;
        flags: ApplicationFlags;
        inactivity_timeout: number;
        inactivityTimeout: number;
        is_busy: boolean;
        isBusy: boolean;
        is_registered: boolean;
        isRegistered: boolean;
        is_remote: boolean;
        isRemote: boolean;
        resource_base_path: string;
        resourceBasePath: string;
    }
}
export class Application extends GObject.Object implements ActionGroup, ActionMap {
    static $gtype: GObject.GType<Application>;

    constructor(properties?: Partial<Application.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Application.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action_group: ActionGroup;
    actionGroup: ActionGroup;
    application_id: string;
    applicationId: string;
    flags: ApplicationFlags;
    inactivity_timeout: number;
    inactivityTimeout: number;
    is_busy: boolean;
    isBusy: boolean;
    is_registered: boolean;
    isRegistered: boolean;
    is_remote: boolean;
    isRemote: boolean;
    resource_base_path: string;
    resourceBasePath: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;
    connect(signal: "command-line", callback: (_source: this, command_line: ApplicationCommandLine) => number): number;
    connect_after(
        signal: "command-line",
        callback: (_source: this, command_line: ApplicationCommandLine) => number
    ): number;
    emit(signal: "command-line", command_line: ApplicationCommandLine): void;
    connect(signal: "handle-local-options", callback: (_source: this, options: GLib.VariantDict) => number): number;
    connect_after(
        signal: "handle-local-options",
        callback: (_source: this, options: GLib.VariantDict) => number
    ): number;
    emit(signal: "handle-local-options", options: GLib.VariantDict): void;
    connect(signal: "name-lost", callback: (_source: this) => boolean): number;
    connect_after(signal: "name-lost", callback: (_source: this) => boolean): number;
    emit(signal: "name-lost"): void;
    connect(signal: "open", callback: (_source: this, files: File[], n_files: number, hint: string) => void): number;
    connect_after(
        signal: "open",
        callback: (_source: this, files: File[], n_files: number, hint: string) => void
    ): number;
    emit(signal: "open", files: File[], n_files: number, hint: string): void;
    connect(signal: "shutdown", callback: (_source: this) => void): number;
    connect_after(signal: "shutdown", callback: (_source: this) => void): number;
    emit(signal: "shutdown"): void;
    connect(signal: "startup", callback: (_source: this) => void): number;
    connect_after(signal: "startup", callback: (_source: this) => void): number;
    emit(signal: "startup"): void;

    // Constructors

    static ["new"](application_id: string | null, flags: ApplicationFlags): Application;

    // Members

    activate(): void;
    add_main_option(
        long_name: string,
        short_name: number,
        flags: GLib.OptionFlags,
        arg: GLib.OptionArg,
        description: string,
        arg_description?: string | null
    ): void;
    add_main_option_entries(entries: GLib.OptionEntry[]): void;
    add_option_group(group: GLib.OptionGroup): void;
    bind_busy_property(object: GObject.Object, property: string): void;
    get_application_id(): string;
    get_dbus_connection(): DBusConnection;
    get_dbus_object_path(): string;
    get_flags(): ApplicationFlags;
    get_inactivity_timeout(): number;
    get_is_busy(): boolean;
    get_is_registered(): boolean;
    get_is_remote(): boolean;
    get_resource_base_path(): string | null;
    hold(): void;
    mark_busy(): void;
    open(files: File[], hint: string): void;
    quit(): void;
    register(cancellable?: Cancellable | null): boolean;
    release(): void;
    run(argv?: string[] | null): number;
    send_notification(id: string | null, notification: Notification): void;
    set_action_group(action_group?: ActionGroup | null): void;
    set_application_id(application_id?: string | null): void;
    set_default(): void;
    set_flags(flags: ApplicationFlags): void;
    set_inactivity_timeout(inactivity_timeout: number): void;
    set_option_context_description(description?: string | null): void;
    set_option_context_parameter_string(parameter_string?: string | null): void;
    set_option_context_summary(summary?: string | null): void;
    set_resource_base_path(resource_path?: string | null): void;
    unbind_busy_property(object: GObject.Object, property: string): void;
    unmark_busy(): void;
    withdraw_notification(id: string): void;
    vfunc_activate(): void;
    vfunc_add_platform_data(builder: GLib.VariantBuilder): void;
    vfunc_after_emit(platform_data: GLib.Variant): void;
    vfunc_before_emit(platform_data: GLib.Variant): void;
    vfunc_command_line(command_line: ApplicationCommandLine): number;
    vfunc_dbus_register(connection: DBusConnection, object_path: string): boolean;
    vfunc_dbus_unregister(connection: DBusConnection, object_path: string): void;
    vfunc_handle_local_options(options: GLib.VariantDict): number;
    vfunc_local_command_line(_arguments: string[]): [boolean, string[], number];
    vfunc_name_lost(): boolean;
    vfunc_open(files: File[], hint: string): void;
    vfunc_quit_mainloop(): void;
    vfunc_run_mainloop(): void;
    vfunc_shutdown(): void;
    vfunc_startup(): void;
    static get_default(): Application;
    static id_is_valid(application_id: string): boolean;

    // Implemented Members

    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    add_action(action: Action): void;
    add_action_entries(entries: ActionEntry[], user_data?: any | null): void;
    lookup_action(action_name: string): Action;
    remove_action(action_name: string): void;
    vfunc_add_action(action: Action): void;
    vfunc_lookup_action(action_name: string): Action;
    vfunc_remove_action(action_name: string): void;
}
export module ApplicationCommandLine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        arguments: GLib.Variant;
        is_remote: boolean;
        isRemote: boolean;
        options: GLib.Variant;
        platform_data: GLib.Variant;
        platformData: GLib.Variant;
    }
}
export class ApplicationCommandLine extends GObject.Object {
    static $gtype: GObject.GType<ApplicationCommandLine>;

    constructor(properties?: Partial<ApplicationCommandLine.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ApplicationCommandLine.ConstructorProperties>, ...args: any[]): void;

    // Properties
    "arguments": GLib.Variant;
    is_remote: boolean;
    isRemote: boolean;
    options: GLib.Variant;
    platform_data: GLib.Variant;
    platformData: GLib.Variant;

    // Members

    create_file_for_arg(arg: string): File;
    get_arguments(): string[];
    get_cwd(): string | null;
    get_environ(): string[];
    get_exit_status(): number;
    get_is_remote(): boolean;
    get_options_dict(): GLib.VariantDict;
    get_platform_data(): GLib.Variant | null;
    get_stdin(): InputStream;
    getenv(name: string): string;
    set_exit_status(exit_status: number): void;
    vfunc_get_stdin(): InputStream;
    vfunc_print_literal(message: string): void;
    vfunc_printerr_literal(message: string): void;
}
export module BufferedInputStream {
    export interface ConstructorProperties extends FilterInputStream.ConstructorProperties {
        [key: string]: any;
        buffer_size: number;
        bufferSize: number;
    }
}
export class BufferedInputStream extends FilterInputStream implements Seekable {
    static $gtype: GObject.GType<BufferedInputStream>;

    constructor(properties?: Partial<BufferedInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BufferedInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    buffer_size: number;
    bufferSize: number;

    // Constructors

    static ["new"](base_stream: InputStream): BufferedInputStream;
    static new_sized(base_stream: InputStream, size: number): BufferedInputStream;

    // Members

    fill(count: number, cancellable?: Cancellable | null): number;
    fill_async(count: number, io_priority: number, cancellable?: Cancellable | null): Promise<number>;
    fill_async(
        count: number,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    fill_async(
        count: number,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    fill_finish(result: AsyncResult): number;
    get_available(): number;
    get_buffer_size(): number;
    peek(buffer: Uint8Array | string, offset: number): number;
    peek_buffer(): Uint8Array;
    read_byte(cancellable?: Cancellable | null): number;
    set_buffer_size(size: number): void;
    vfunc_fill(count: number, cancellable?: Cancellable | null): number;
    vfunc_fill_async(count: number, io_priority: number, cancellable?: Cancellable | null): Promise<number>;
    vfunc_fill_async(
        count: number,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_fill_async(
        count: number,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    vfunc_fill_finish(result: AsyncResult): number;

    // Implemented Members

    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean;
}
export module BufferedOutputStream {
    export interface ConstructorProperties extends FilterOutputStream.ConstructorProperties {
        [key: string]: any;
        auto_grow: boolean;
        autoGrow: boolean;
        buffer_size: number;
        bufferSize: number;
    }
}
export class BufferedOutputStream extends FilterOutputStream implements Seekable {
    static $gtype: GObject.GType<BufferedOutputStream>;

    constructor(properties?: Partial<BufferedOutputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BufferedOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_grow: boolean;
    autoGrow: boolean;
    buffer_size: number;
    bufferSize: number;

    // Fields
    priv: BufferedOutputStreamPrivate;

    // Constructors

    static ["new"](base_stream: OutputStream): BufferedOutputStream;
    static new_sized(base_stream: OutputStream, size: number): BufferedOutputStream;

    // Members

    get_auto_grow(): boolean;
    get_buffer_size(): number;
    set_auto_grow(auto_grow: boolean): void;
    set_buffer_size(size: number): void;

    // Implemented Members

    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean;
}
export module BytesIcon {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bytes: GLib.Bytes;
    }
}
export class BytesIcon extends GObject.Object implements Icon, LoadableIcon {
    static $gtype: GObject.GType<BytesIcon>;

    constructor(properties?: Partial<BytesIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BytesIcon.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bytes: GLib.Bytes;

    // Constructors

    static ["new"](bytes: GLib.Bytes | Uint8Array): BytesIcon;

    // Members

    get_bytes(): GLib.Bytes;

    // Implemented Members

    equal(icon2?: Icon | null): boolean;
    serialize(): GLib.Variant;
    to_string(): string | null;
    vfunc_equal(icon2?: Icon | null): boolean;
    vfunc_hash(): number;
    vfunc_serialize(): GLib.Variant;
    load(size: number, cancellable?: Cancellable | null): [InputStream, string | null];
    load_async(size: number, cancellable?: Cancellable | null): Promise<[InputStream, string | null]>;
    load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    load_async(
        size: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[InputStream, string | null]> | void;
    load_finish(res: AsyncResult): [InputStream, string | null];
    vfunc_load(size: number, cancellable?: Cancellable | null): [InputStream, string | null];
    vfunc_load_async(size: number, cancellable?: Cancellable | null): Promise<[InputStream, string | null]>;
    vfunc_load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_load_async(
        size: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[InputStream, string | null]> | void;
    vfunc_load_finish(res: AsyncResult): [InputStream, string | null];
}
export module Cancellable {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Cancellable extends GObject.Object {
    static $gtype: GObject.GType<Cancellable>;

    constructor(properties?: Partial<Cancellable.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Cancellable.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect_after(signal: "cancelled", callback: (_source: this) => void): number;
    emit(signal: "cancelled"): void;

    // Constructors

    static ["new"](): Cancellable;

    // Members

    cancel(): void;
    connect(callback: GObject.Callback, data_destroy_func?: GLib.DestroyNotify | null): number;
    connect(...args: never[]): never;
    disconnect(handler_id: number): void;
    get_fd(): number;
    is_cancelled(): boolean;
    make_pollfd(pollfd: GLib.PollFD): boolean;
    pop_current(): void;
    push_current(): void;
    release_fd(): void;
    reset(): void;
    set_error_if_cancelled(): boolean;
    source_new(): GLib.Source;
    vfunc_cancelled(): void;
    static get_current(): Cancellable | null;
}
export module CharsetConverter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        from_charset: string;
        fromCharset: string;
        to_charset: string;
        toCharset: string;
        use_fallback: boolean;
        useFallback: boolean;
    }
}
export class CharsetConverter extends GObject.Object implements Converter, Initable {
    static $gtype: GObject.GType<CharsetConverter>;

    constructor(properties?: Partial<CharsetConverter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CharsetConverter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    from_charset: string;
    fromCharset: string;
    to_charset: string;
    toCharset: string;
    use_fallback: boolean;
    useFallback: boolean;

    // Constructors

    static ["new"](to_charset: string, from_charset: string): CharsetConverter;

    // Members

    get_num_fallbacks(): number;
    get_use_fallback(): boolean;
    set_use_fallback(use_fallback: boolean): void;

    // Implemented Members

    convert(
        inbuf: Uint8Array | string,
        outbuf: Uint8Array | string,
        flags: ConverterFlags
    ): [ConverterResult, number, number];
    reset(): void;
    vfunc_convert(
        inbuf: Uint8Array | null,
        outbuf: Uint8Array | null,
        flags: ConverterFlags
    ): [ConverterResult, number, number];
    vfunc_reset(): void;
    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}
export module ConverterInputStream {
    export interface ConstructorProperties extends FilterInputStream.ConstructorProperties {
        [key: string]: any;
        converter: Converter;
    }
}
export class ConverterInputStream extends FilterInputStream implements PollableInputStream {
    static $gtype: GObject.GType<ConverterInputStream>;

    constructor(properties?: Partial<ConverterInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ConverterInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    converter: Converter;

    // Constructors

    static ["new"](base_stream: InputStream, converter: Converter): ConverterInputStream;

    // Members

    get_converter(): Converter;

    // Implemented Members

    can_poll(): boolean;
    create_source(cancellable?: Cancellable | null): GLib.Source;
    is_readable(): boolean;
    read_nonblocking(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source;
    vfunc_is_readable(): boolean;
    vfunc_read_nonblocking(buffer?: Uint8Array | null): number;
}
export module ConverterOutputStream {
    export interface ConstructorProperties extends FilterOutputStream.ConstructorProperties {
        [key: string]: any;
        converter: Converter;
    }
}
export class ConverterOutputStream extends FilterOutputStream implements PollableOutputStream {
    static $gtype: GObject.GType<ConverterOutputStream>;

    constructor(properties?: Partial<ConverterOutputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ConverterOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    converter: Converter;

    // Constructors

    static ["new"](base_stream: OutputStream, converter: Converter): ConverterOutputStream;

    // Members

    get_converter(): Converter;

    // Implemented Members

    can_poll(): boolean;
    create_source(cancellable?: Cancellable | null): GLib.Source;
    is_writable(): boolean;
    write_nonblocking(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    writev_nonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [PollableReturn, number | null];
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source;
    vfunc_is_writable(): boolean;
    vfunc_write_nonblocking(buffer?: Uint8Array | null): number;
    vfunc_writev_nonblocking(vectors: OutputVector[]): [PollableReturn, number | null];
}
export module Credentials {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Credentials extends GObject.Object {
    static $gtype: GObject.GType<Credentials>;

    constructor(properties?: Partial<Credentials.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Credentials.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Credentials;

    // Members

    get_unix_pid(): number;
    get_unix_user(): number;
    is_same_user(other_credentials: Credentials): boolean;
    set_native(native_type: CredentialsType, _native: any): void;
    set_unix_user(uid: number): boolean;
    to_string(): string;
}
export module DBusActionGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DBusActionGroup extends GObject.Object implements ActionGroup, RemoteActionGroup {
    static $gtype: GObject.GType<DBusActionGroup>;

    constructor(properties?: Partial<DBusActionGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusActionGroup.ConstructorProperties>, ...args: any[]): void;

    // Members

    static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusActionGroup;

    // Implemented Members

    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void;
    change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void;
    vfunc_activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void;
    vfunc_change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void;
}
export module DBusAuthObserver {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DBusAuthObserver extends GObject.Object {
    static $gtype: GObject.GType<DBusAuthObserver>;

    constructor(properties?: Partial<DBusAuthObserver.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusAuthObserver.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "allow-mechanism", callback: (_source: this, mechanism: string) => boolean): number;
    connect_after(signal: "allow-mechanism", callback: (_source: this, mechanism: string) => boolean): number;
    emit(signal: "allow-mechanism", mechanism: string): void;
    connect(
        signal: "authorize-authenticated-peer",
        callback: (_source: this, stream: IOStream, credentials: Credentials | null) => boolean
    ): number;
    connect_after(
        signal: "authorize-authenticated-peer",
        callback: (_source: this, stream: IOStream, credentials: Credentials | null) => boolean
    ): number;
    emit(signal: "authorize-authenticated-peer", stream: IOStream, credentials: Credentials | null): void;

    // Constructors

    static ["new"](): DBusAuthObserver;

    // Members

    allow_mechanism(mechanism: string): boolean;
    authorize_authenticated_peer(stream: IOStream, credentials?: Credentials | null): boolean;
}
export module DBusConnection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        address: string;
        authentication_observer: DBusAuthObserver;
        authenticationObserver: DBusAuthObserver;
        capabilities: DBusCapabilityFlags;
        closed: boolean;
        exit_on_close: boolean;
        exitOnClose: boolean;
        flags: DBusConnectionFlags;
        guid: string;
        stream: IOStream;
        unique_name: string;
        uniqueName: string;
    }
}
export class DBusConnection extends GObject.Object implements AsyncInitable<DBusConnection>, Initable {
    static $gtype: GObject.GType<DBusConnection>;

    constructor(properties?: Partial<DBusConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    address: string;
    authentication_observer: DBusAuthObserver;
    authenticationObserver: DBusAuthObserver;
    capabilities: DBusCapabilityFlags;
    closed: boolean;
    exit_on_close: boolean;
    exitOnClose: boolean;
    flags: DBusConnectionFlags;
    guid: string;
    stream: IOStream;
    unique_name: string;
    uniqueName: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "closed",
        callback: (_source: this, remote_peer_vanished: boolean, error: GLib.Error | null) => void
    ): number;
    connect_after(
        signal: "closed",
        callback: (_source: this, remote_peer_vanished: boolean, error: GLib.Error | null) => void
    ): number;
    emit(signal: "closed", remote_peer_vanished: boolean, error: GLib.Error | null): void;

    // Constructors

    static new_finish(res: AsyncResult): DBusConnection;
    static new_finish(...args: never[]): never;
    static new_for_address_finish(res: AsyncResult): DBusConnection;
    static new_for_address_sync(
        address: string,
        flags: DBusConnectionFlags,
        observer?: DBusAuthObserver | null,
        cancellable?: Cancellable | null
    ): DBusConnection;
    static new_sync(
        stream: IOStream,
        guid: string | null,
        flags: DBusConnectionFlags,
        observer?: DBusAuthObserver | null,
        cancellable?: Cancellable | null
    ): DBusConnection;

    // Members

    add_filter(filter_function: DBusMessageFilterFunction): number;
    call<T extends string = any>(
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType<T> | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null
    ): Promise<GLib.Variant<T>>;
    call<T extends string = any>(
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType<T> | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    call<T extends string = any>(
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType<T> | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant<T>> | void;
    call_finish<T extends string = any>(res: AsyncResult): GLib.Variant<T>;
    call_sync(
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null
    ): GLib.Variant;
    call_with_unix_fd_list(
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        fd_list?: UnixFDList | null,
        cancellable?: Cancellable | null
    ): Promise<[GLib.Variant, UnixFDList | null]>;
    call_with_unix_fd_list(
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        fd_list: UnixFDList | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    call_with_unix_fd_list(
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        fd_list?: UnixFDList | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant, UnixFDList | null]> | void;
    call_with_unix_fd_list_finish(res: AsyncResult): [GLib.Variant, UnixFDList | null];
    call_with_unix_fd_list_sync(
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        fd_list?: UnixFDList | null,
        cancellable?: Cancellable | null
    ): [GLib.Variant, UnixFDList | null];
    close(cancellable?: Cancellable | null): Promise<boolean>;
    close(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    close(cancellable?: Cancellable | null, callback?: AsyncReadyCallback<this> | null): Promise<boolean> | void;
    close_finish(res: AsyncResult): boolean;
    close_sync(cancellable?: Cancellable | null): boolean;
    emit_signal(
        destination_bus_name: string | null,
        object_path: string,
        interface_name: string,
        signal_name: string,
        parameters?: GLib.Variant | null
    ): boolean;
    export_action_group(object_path: string, action_group: ActionGroup): number;
    export_menu_model(object_path: string, menu: MenuModel): number;
    flush(cancellable?: Cancellable | null): Promise<boolean>;
    flush(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    flush(cancellable?: Cancellable | null, callback?: AsyncReadyCallback<this> | null): Promise<boolean> | void;
    flush_finish(res: AsyncResult): boolean;
    flush_sync(cancellable?: Cancellable | null): boolean;
    get_capabilities(): DBusCapabilityFlags;
    get_exit_on_close(): boolean;
    get_flags(): DBusConnectionFlags;
    get_guid(): string;
    get_last_serial(): number;
    get_peer_credentials(): Credentials | null;
    get_stream(): IOStream;
    get_unique_name(): string | null;
    is_closed(): boolean;
    register_object(
        object_path: string,
        interface_info: DBusInterfaceInfo,
        vtable?: DBusInterfaceVTable | null,
        user_data?: any | null
    ): number;
    register_object(
        object_path: string,
        interface_info: DBusInterfaceInfo,
        method_call_closure?: GObject.Closure | null,
        get_property_closure?: GObject.Closure | null,
        set_property_closure?: GObject.Closure | null
    ): number;
    register_subtree(
        object_path: string,
        vtable: DBusSubtreeVTable,
        flags: DBusSubtreeFlags,
        user_data?: any | null
    ): number;
    remove_filter(filter_id: number): void;
    send_message(message: DBusMessage, flags: DBusSendMessageFlags): [boolean, number | null];
    send_message_with_reply(
        message: DBusMessage,
        flags: DBusSendMessageFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null
    ): [Promise<DBusMessage>, number | null];
    send_message_with_reply(
        message: DBusMessage,
        flags: DBusSendMessageFlags,
        timeout_msec: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): number | null;
    send_message_with_reply(
        message: DBusMessage,
        flags: DBusSendMessageFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): [Promise<DBusMessage> | void, number | null];
    send_message_with_reply_finish(res: AsyncResult): DBusMessage;
    send_message_with_reply_sync(
        message: DBusMessage,
        flags: DBusSendMessageFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null
    ): [DBusMessage, number | null];
    set_exit_on_close(exit_on_close: boolean): void;
    signal_subscribe(
        sender: string | null,
        interface_name: string | null,
        member: string | null,
        object_path: string | null,
        arg0: string | null,
        flags: DBusSignalFlags,
        callback: DBusSignalCallback,
        user_data_free_func?: GLib.DestroyNotify | null
    ): number;
    signal_unsubscribe(subscription_id: number): void;
    start_message_processing(): void;
    unexport_action_group(export_id: number): void;
    unexport_menu_model(export_id: number): void;
    unregister_object(registration_id: number): boolean;
    unregister_subtree(registration_id: number): boolean;
    static new(
        stream: IOStream,
        guid: string | null,
        flags: DBusConnectionFlags,
        observer?: DBusAuthObserver | null,
        cancellable?: Cancellable | null
    ): Promise<DBusConnection>;
    static new(
        stream: IOStream,
        guid: string | null,
        flags: DBusConnectionFlags,
        observer: DBusAuthObserver | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<DBusConnection> | null
    ): void;
    static new(
        stream: IOStream,
        guid: string | null,
        flags: DBusConnectionFlags,
        observer?: DBusAuthObserver | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<DBusConnection> | null
    ): Promise<DBusConnection> | void;
    static new_for_address(
        address: string,
        flags: DBusConnectionFlags,
        observer?: DBusAuthObserver | null,
        cancellable?: Cancellable | null
    ): Promise<DBusConnection>;
    static new_for_address(
        address: string,
        flags: DBusConnectionFlags,
        observer: DBusAuthObserver | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<DBusConnection> | null
    ): void;
    static new_for_address(
        address: string,
        flags: DBusConnectionFlags,
        observer?: DBusAuthObserver | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<DBusConnection> | null
    ): Promise<DBusConnection> | void;
    watch_name(
        name: string,
        flags: BusNameWatcherFlags,
        name_appeared_closure?: GObject.Closure | null,
        name_vanished_closure?: GObject.Closure | null
    ): number;
    unwatch_name(watcher_id: number): void;
    own_name(
        name: string,
        flags: BusNameOwnerFlags,
        name_acquired_closure?: GObject.Closure | null,
        name_lost_closure?: GObject.Closure | null
    ): number;
    unown_name(owner_id: number): void;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    init_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: AsyncResult): boolean;
    new_finish(res: AsyncResult): DBusConnection;
    vfunc_init_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: AsyncResult): boolean;
    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}
export module DBusInterfaceSkeleton {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        g_flags: DBusInterfaceSkeletonFlags;
        gFlags: DBusInterfaceSkeletonFlags;
    }
}
export abstract class DBusInterfaceSkeleton extends GObject.Object implements DBusInterface {
    static $gtype: GObject.GType<DBusInterfaceSkeleton>;

    constructor(properties?: Partial<DBusInterfaceSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusInterfaceSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    g_flags: DBusInterfaceSkeletonFlags;
    gFlags: DBusInterfaceSkeletonFlags;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "g-authorize-method",
        callback: (_source: this, invocation: DBusMethodInvocation) => boolean
    ): number;
    connect_after(
        signal: "g-authorize-method",
        callback: (_source: this, invocation: DBusMethodInvocation) => boolean
    ): number;
    emit(signal: "g-authorize-method", invocation: DBusMethodInvocation): void;

    // Members

    ["export"](connection: DBusConnection, object_path: string): boolean;
    flush(): void;
    get_connection(): DBusConnection;
    get_connections(): DBusConnection[];
    get_flags(): DBusInterfaceSkeletonFlags;
    get_info(): DBusInterfaceInfo;
    get_object_path(): string;
    get_properties(): GLib.Variant;
    has_connection(connection: DBusConnection): boolean;
    set_flags(flags: DBusInterfaceSkeletonFlags): void;
    unexport(): void;
    unexport_from_connection(connection: DBusConnection): void;
    vfunc_flush(): void;
    vfunc_g_authorize_method(invocation: DBusMethodInvocation): boolean;
    vfunc_get_info(): DBusInterfaceInfo;
    vfunc_get_properties(): GLib.Variant;

    // Implemented Members

    get_object(): DBusObject;
    set_object(object?: DBusObject | null): void;
    vfunc_dup_object(): DBusObject;
    vfunc_set_object(object?: DBusObject | null): void;
}
export module DBusMenuModel {
    export interface ConstructorProperties extends MenuModel.ConstructorProperties {
        [key: string]: any;
    }
}
export class DBusMenuModel extends MenuModel {
    static $gtype: GObject.GType<DBusMenuModel>;

    constructor(properties?: Partial<DBusMenuModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusMenuModel.ConstructorProperties>, ...args: any[]): void;

    // Members

    static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusMenuModel;
}
export module DBusMessage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        locked: boolean;
    }
}
export class DBusMessage extends GObject.Object {
    static $gtype: GObject.GType<DBusMessage>;

    constructor(properties?: Partial<DBusMessage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusMessage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    locked: boolean;

    // Constructors

    static ["new"](): DBusMessage;
    static new_from_blob(blob: Uint8Array | string, capabilities: DBusCapabilityFlags): DBusMessage;
    static new_method_call(name: string | null, path: string, interface_: string | null, method: string): DBusMessage;
    static new_signal(path: string, interface_: string, signal: string): DBusMessage;

    // Members

    copy(): DBusMessage;
    get_arg0(): string;
    get_body(): GLib.Variant;
    get_byte_order(): DBusMessageByteOrder;
    get_destination(): string;
    get_error_name(): string;
    get_flags(): DBusMessageFlags;
    get_header(header_field: DBusMessageHeaderField): GLib.Variant | null;
    get_header_fields(): Uint8Array;
    get_interface(): string;
    get_locked(): boolean;
    get_member(): string;
    get_message_type(): DBusMessageType;
    get_num_unix_fds(): number;
    get_path(): string;
    get_reply_serial(): number;
    get_sender(): string;
    get_serial(): number;
    get_signature(): string;
    get_unix_fd_list(): UnixFDList;
    lock(): void;
    new_method_error_literal(error_name: string, error_message: string): DBusMessage;
    new_method_reply(): DBusMessage;
    print(indent: number): string;
    set_body(body: GLib.Variant): void;
    set_byte_order(byte_order: DBusMessageByteOrder): void;
    set_destination(value: string): void;
    set_error_name(value: string): void;
    set_flags(flags: DBusMessageFlags): void;
    set_header(header_field: DBusMessageHeaderField, value?: GLib.Variant | null): void;
    set_interface(value: string): void;
    set_member(value: string): void;
    set_message_type(type: DBusMessageType): void;
    set_num_unix_fds(value: number): void;
    set_path(value: string): void;
    set_reply_serial(value: number): void;
    set_sender(value: string): void;
    set_serial(serial: number): void;
    set_signature(value: string): void;
    set_unix_fd_list(fd_list?: UnixFDList | null): void;
    to_blob(capabilities: DBusCapabilityFlags): Uint8Array;
    to_gerror(): boolean;
    static bytes_needed(blob: Uint8Array | string): number;
}
export module DBusMethodInvocation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DBusMethodInvocation extends GObject.Object {
    static $gtype: GObject.GType<DBusMethodInvocation>;

    constructor(properties?: Partial<DBusMethodInvocation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusMethodInvocation.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_connection(): DBusConnection;
    get_interface_name(): string;
    get_message(): DBusMessage;
    get_method_info(): DBusMethodInfo;
    get_method_name(): string;
    get_object_path(): string;
    get_parameters(): GLib.Variant;
    get_property_info(): DBusPropertyInfo;
    get_sender(): string;
    return_dbus_error(error_name: string, error_message: string): void;
    return_error_literal(domain: GLib.Quark, code: number, message: string): void;
    return_gerror(error: GLib.Error): void;
    return_value(parameters?: GLib.Variant | null): void;
    return_value_with_unix_fd_list(parameters?: GLib.Variant | null, fd_list?: UnixFDList | null): void;
}
export module DBusObjectManagerClient {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bus_type: BusType;
        busType: BusType;
        connection: DBusConnection;
        flags: DBusObjectManagerClientFlags;
        get_proxy_type_destroy_notify: any;
        getProxyTypeDestroyNotify: any;
        get_proxy_type_func: any;
        getProxyTypeFunc: any;
        get_proxy_type_user_data: any;
        getProxyTypeUserData: any;
        name: string;
        name_owner: string;
        nameOwner: string;
        object_path: string;
        objectPath: string;
    }
}
export class DBusObjectManagerClient
    extends GObject.Object
    implements AsyncInitable<DBusObjectManagerClient>, DBusObjectManager, Initable {
    static $gtype: GObject.GType<DBusObjectManagerClient>;

    constructor(properties?: Partial<DBusObjectManagerClient.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusObjectManagerClient.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bus_type: BusType;
    busType: BusType;
    connection: DBusConnection;
    flags: DBusObjectManagerClientFlags;
    get_proxy_type_destroy_notify: any;
    getProxyTypeDestroyNotify: any;
    get_proxy_type_func: any;
    getProxyTypeFunc: any;
    get_proxy_type_user_data: any;
    getProxyTypeUserData: any;
    name: string;
    name_owner: string;
    nameOwner: string;
    object_path: string;
    objectPath: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "interface-proxy-properties-changed",
        callback: (
            _source: this,
            object_proxy: DBusObjectProxy,
            interface_proxy: DBusProxy,
            changed_properties: GLib.Variant,
            invalidated_properties: string[]
        ) => void
    ): number;
    connect_after(
        signal: "interface-proxy-properties-changed",
        callback: (
            _source: this,
            object_proxy: DBusObjectProxy,
            interface_proxy: DBusProxy,
            changed_properties: GLib.Variant,
            invalidated_properties: string[]
        ) => void
    ): number;
    emit(
        signal: "interface-proxy-properties-changed",
        object_proxy: DBusObjectProxy,
        interface_proxy: DBusProxy,
        changed_properties: GLib.Variant,
        invalidated_properties: string[]
    ): void;
    connect(
        signal: "interface-proxy-signal",
        callback: (
            _source: this,
            object_proxy: DBusObjectProxy,
            interface_proxy: DBusProxy,
            sender_name: string,
            signal_name: string,
            parameters: GLib.Variant
        ) => void
    ): number;
    connect_after(
        signal: "interface-proxy-signal",
        callback: (
            _source: this,
            object_proxy: DBusObjectProxy,
            interface_proxy: DBusProxy,
            sender_name: string,
            signal_name: string,
            parameters: GLib.Variant
        ) => void
    ): number;
    emit(
        signal: "interface-proxy-signal",
        object_proxy: DBusObjectProxy,
        interface_proxy: DBusProxy,
        sender_name: string,
        signal_name: string,
        parameters: GLib.Variant
    ): void;

    // Constructors

    static new_finish(res: AsyncResult): DBusObjectManagerClient;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: AsyncResult): DBusObjectManagerClient;
    static new_for_bus_sync(
        bus_type: BusType,
        flags: DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        get_proxy_type_func?: DBusProxyTypeFunc | null,
        get_proxy_type_destroy_notify?: GLib.DestroyNotify | null,
        cancellable?: Cancellable | null
    ): DBusObjectManagerClient;
    static new_sync(
        connection: DBusConnection,
        flags: DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        get_proxy_type_func?: DBusProxyTypeFunc | null,
        get_proxy_type_destroy_notify?: GLib.DestroyNotify | null,
        cancellable?: Cancellable | null
    ): DBusObjectManagerClient;

    // Members

    get_connection(): DBusConnection;
    get_flags(): DBusObjectManagerClientFlags;
    get_name(): string;
    get_name_owner(): string | null;
    vfunc_interface_proxy_properties_changed(
        object_proxy: DBusObjectProxy,
        interface_proxy: DBusProxy,
        changed_properties: GLib.Variant,
        invalidated_properties: string
    ): void;
    vfunc_interface_proxy_signal(
        object_proxy: DBusObjectProxy,
        interface_proxy: DBusProxy,
        sender_name: string,
        signal_name: string,
        parameters: GLib.Variant
    ): void;
    static new(
        connection: DBusConnection,
        flags: DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        get_proxy_type_func?: DBusProxyTypeFunc | null,
        get_proxy_type_destroy_notify?: GLib.DestroyNotify | null,
        cancellable?: Cancellable | null
    ): Promise<DBusObjectManagerClient>;
    static new(
        connection: DBusConnection,
        flags: DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        get_proxy_type_func: DBusProxyTypeFunc | null,
        get_proxy_type_destroy_notify: GLib.DestroyNotify | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<DBusObjectManagerClient> | null
    ): void;
    static new(
        connection: DBusConnection,
        flags: DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        get_proxy_type_func?: DBusProxyTypeFunc | null,
        get_proxy_type_destroy_notify?: GLib.DestroyNotify | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<DBusObjectManagerClient> | null
    ): Promise<DBusObjectManagerClient> | void;
    static new_for_bus(
        bus_type: BusType,
        flags: DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        get_proxy_type_func?: DBusProxyTypeFunc | null,
        get_proxy_type_destroy_notify?: GLib.DestroyNotify | null,
        cancellable?: Cancellable | null
    ): Promise<DBusObjectManagerClient>;
    static new_for_bus(
        bus_type: BusType,
        flags: DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        get_proxy_type_func: DBusProxyTypeFunc | null,
        get_proxy_type_destroy_notify: GLib.DestroyNotify | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<DBusObjectManagerClient> | null
    ): void;
    static new_for_bus(
        bus_type: BusType,
        flags: DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        get_proxy_type_func?: DBusProxyTypeFunc | null,
        get_proxy_type_destroy_notify?: GLib.DestroyNotify | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<DBusObjectManagerClient> | null
    ): Promise<DBusObjectManagerClient> | void;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    init_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: AsyncResult): boolean;
    new_finish(res: AsyncResult): DBusObjectManagerClient;
    vfunc_init_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: AsyncResult): boolean;
    get_interface(object_path: string, interface_name: string): DBusInterface;
    get_object(object_path: string): DBusObject;
    get_object_path(): string;
    get_objects(): DBusObject[];
    vfunc_get_interface(object_path: string, interface_name: string): DBusInterface;
    vfunc_get_object(object_path: string): DBusObject;
    vfunc_get_object_path(): string;
    vfunc_get_objects(): DBusObject[];
    vfunc_interface_added(object: DBusObject, interface_: DBusInterface): void;
    vfunc_interface_removed(object: DBusObject, interface_: DBusInterface): void;
    vfunc_object_added(object: DBusObject): void;
    vfunc_object_removed(object: DBusObject): void;
    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}
export module DBusObjectManagerServer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        connection: DBusConnection;
        object_path: string;
        objectPath: string;
    }
}
export class DBusObjectManagerServer extends GObject.Object implements DBusObjectManager {
    static $gtype: GObject.GType<DBusObjectManagerServer>;

    constructor(properties?: Partial<DBusObjectManagerServer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusObjectManagerServer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: DBusConnection;
    object_path: string;
    objectPath: string;

    // Constructors

    static ["new"](object_path: string): DBusObjectManagerServer;

    // Members

    ["export"](object: DBusObjectSkeleton): void;
    export_uniquely(object: DBusObjectSkeleton): void;
    get_connection(): DBusConnection;
    is_exported(object: DBusObjectSkeleton): boolean;
    set_connection(connection?: DBusConnection | null): void;
    unexport(object_path: string): boolean;

    // Implemented Members

    get_interface(object_path: string, interface_name: string): DBusInterface;
    get_object(object_path: string): DBusObject;
    get_object_path(): string;
    get_objects(): DBusObject[];
    vfunc_get_interface(object_path: string, interface_name: string): DBusInterface;
    vfunc_get_object(object_path: string): DBusObject;
    vfunc_get_object_path(): string;
    vfunc_get_objects(): DBusObject[];
    vfunc_interface_added(object: DBusObject, interface_: DBusInterface): void;
    vfunc_interface_removed(object: DBusObject, interface_: DBusInterface): void;
    vfunc_object_added(object: DBusObject): void;
    vfunc_object_removed(object: DBusObject): void;
}
export module DBusObjectProxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        g_connection: DBusConnection;
        gConnection: DBusConnection;
        g_object_path: string;
        gObjectPath: string;
    }
}
export class DBusObjectProxy extends GObject.Object implements DBusObject {
    static $gtype: GObject.GType<DBusObjectProxy>;

    constructor(properties?: Partial<DBusObjectProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusObjectProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    g_connection: DBusConnection;
    gConnection: DBusConnection;
    g_object_path: string;
    gObjectPath: string;

    // Constructors

    static ["new"](connection: DBusConnection, object_path: string): DBusObjectProxy;

    // Members

    get_connection(): DBusConnection;

    // Implemented Members

    get_interface(interface_name: string): DBusInterface;
    get_interfaces(): DBusInterface[];
    get_object_path(): string;
    vfunc_get_interface(interface_name: string): DBusInterface;
    vfunc_get_interfaces(): DBusInterface[];
    vfunc_get_object_path(): string;
    vfunc_interface_added(interface_: DBusInterface): void;
    vfunc_interface_removed(interface_: DBusInterface): void;
}
export module DBusObjectSkeleton {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        g_object_path: string;
        gObjectPath: string;
    }
}
export class DBusObjectSkeleton extends GObject.Object implements DBusObject {
    static $gtype: GObject.GType<DBusObjectSkeleton>;

    constructor(properties?: Partial<DBusObjectSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusObjectSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    g_object_path: string;
    gObjectPath: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "authorize-method",
        callback: (_source: this, _interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean
    ): number;
    connect_after(
        signal: "authorize-method",
        callback: (_source: this, _interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean
    ): number;
    emit(signal: "authorize-method", _interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): void;

    // Constructors

    static ["new"](object_path: string): DBusObjectSkeleton;

    // Members

    add_interface(interface_: DBusInterfaceSkeleton): void;
    flush(): void;
    remove_interface(interface_: DBusInterfaceSkeleton): void;
    remove_interface_by_name(interface_name: string): void;
    set_object_path(object_path: string): void;
    vfunc_authorize_method(interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean;

    // Implemented Members

    get_interface(interface_name: string): DBusInterface;
    get_interfaces(): DBusInterface[];
    get_object_path(): string;
    vfunc_get_interface(interface_name: string): DBusInterface;
    vfunc_get_interfaces(): DBusInterface[];
    vfunc_get_object_path(): string;
    vfunc_interface_added(interface_: DBusInterface): void;
    vfunc_interface_removed(interface_: DBusInterface): void;
}
export module DBusProxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        g_bus_type: BusType;
        gBusType: BusType;
        g_connection: DBusConnection;
        gConnection: DBusConnection;
        g_default_timeout: number;
        gDefaultTimeout: number;
        g_flags: DBusProxyFlags;
        gFlags: DBusProxyFlags;
        g_interface_info: DBusInterfaceInfo;
        gInterfaceInfo: DBusInterfaceInfo;
        g_interface_name: string;
        gInterfaceName: string;
        g_name: string;
        gName: string;
        g_name_owner: string;
        gNameOwner: string;
        g_object_path: string;
        gObjectPath: string;
    }
}
export class DBusProxy extends GObject.Object implements AsyncInitable<DBusProxy>, DBusInterface, Initable {
    [key: string]: any;

    static $gtype: GObject.GType<DBusProxy>;

    constructor(properties?: Partial<DBusProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    g_bus_type: BusType;
    gBusType: BusType;
    g_connection: DBusConnection;
    gConnection: DBusConnection;
    g_default_timeout: number;
    gDefaultTimeout: number;
    g_flags: DBusProxyFlags;
    gFlags: DBusProxyFlags;
    g_interface_info: DBusInterfaceInfo;
    gInterfaceInfo: DBusInterfaceInfo;
    g_interface_name: string;
    gInterfaceName: string;
    g_name: string;
    gName: string;
    g_name_owner: string;
    gNameOwner: string;
    g_object_path: string;
    gObjectPath: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "g-properties-changed",
        callback: (_source: this, changed_properties: GLib.Variant, invalidated_properties: string[]) => void
    ): number;
    connect_after(
        signal: "g-properties-changed",
        callback: (_source: this, changed_properties: GLib.Variant, invalidated_properties: string[]) => void
    ): number;
    emit(signal: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void;
    connect(
        signal: "g-signal",
        callback: (_source: this, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void
    ): number;
    connect_after(
        signal: "g-signal",
        callback: (_source: this, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void
    ): number;
    emit(signal: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void;

    // Constructors

    static new_finish(res: AsyncResult): DBusProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: AsyncResult): DBusProxy;
    static new_for_bus_sync(
        bus_type: BusType,
        flags: DBusProxyFlags,
        info: DBusInterfaceInfo | null,
        name: string,
        object_path: string,
        interface_name: string,
        cancellable?: Cancellable | null
    ): DBusProxy;
    static new_sync(
        connection: DBusConnection,
        flags: DBusProxyFlags,
        info: DBusInterfaceInfo | null,
        name: string | null,
        object_path: string,
        interface_name: string,
        cancellable?: Cancellable | null
    ): DBusProxy;

    // Members

    call(
        method_name: string,
        parameters: GLib.Variant | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null
    ): Promise<GLib.Variant>;
    call(
        method_name: string,
        parameters: GLib.Variant | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    call(
        method_name: string,
        parameters: GLib.Variant | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant> | void;
    call_finish(res: AsyncResult): GLib.Variant;
    call_sync(
        method_name: string,
        parameters: GLib.Variant | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        cancellable?: Cancellable | null
    ): GLib.Variant;
    call_with_unix_fd_list(
        method_name: string,
        parameters: GLib.Variant | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        fd_list?: UnixFDList | null,
        cancellable?: Cancellable | null
    ): Promise<[GLib.Variant, UnixFDList | null]>;
    call_with_unix_fd_list(
        method_name: string,
        parameters: GLib.Variant | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        fd_list: UnixFDList | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    call_with_unix_fd_list(
        method_name: string,
        parameters: GLib.Variant | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        fd_list?: UnixFDList | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant, UnixFDList | null]> | void;
    call_with_unix_fd_list_finish(res: AsyncResult): [GLib.Variant, UnixFDList | null];
    call_with_unix_fd_list_sync(
        method_name: string,
        parameters: GLib.Variant | null,
        flags: DBusCallFlags,
        timeout_msec: number,
        fd_list?: UnixFDList | null,
        cancellable?: Cancellable | null
    ): [GLib.Variant, UnixFDList | null];
    get_cached_property(property_name: string): GLib.Variant | null;
    get_cached_property_names(): string[] | null;
    get_connection(): DBusConnection;
    get_default_timeout(): number;
    get_flags(): DBusProxyFlags;
    get_interface_info(): DBusInterfaceInfo | null;
    get_interface_name(): string;
    get_name(): string;
    get_name_owner(): string | null;
    get_object_path(): string;
    set_cached_property(property_name: string, value?: GLib.Variant | null): void;
    set_default_timeout(timeout_msec: number): void;
    set_interface_info(info?: DBusInterfaceInfo | null): void;
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void;
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void;
    static new(
        connection: DBusConnection,
        flags: DBusProxyFlags,
        info: DBusInterfaceInfo | null,
        name: string | null,
        object_path: string,
        interface_name: string,
        cancellable?: Cancellable | null
    ): Promise<DBusProxy>;
    static new(
        connection: DBusConnection,
        flags: DBusProxyFlags,
        info: DBusInterfaceInfo | null,
        name: string | null,
        object_path: string,
        interface_name: string,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<DBusProxy> | null
    ): void;
    static new(
        connection: DBusConnection,
        flags: DBusProxyFlags,
        info: DBusInterfaceInfo | null,
        name: string | null,
        object_path: string,
        interface_name: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<DBusProxy> | null
    ): Promise<DBusProxy> | void;
    static new_for_bus(
        bus_type: BusType,
        flags: DBusProxyFlags,
        info: DBusInterfaceInfo | null,
        name: string,
        object_path: string,
        interface_name: string,
        cancellable?: Cancellable | null
    ): Promise<DBusProxy>;
    static new_for_bus(
        bus_type: BusType,
        flags: DBusProxyFlags,
        info: DBusInterfaceInfo | null,
        name: string,
        object_path: string,
        interface_name: string,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<DBusProxy> | null
    ): void;
    static new_for_bus(
        bus_type: BusType,
        flags: DBusProxyFlags,
        info: DBusInterfaceInfo | null,
        name: string,
        object_path: string,
        interface_name: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<DBusProxy> | null
    ): Promise<DBusProxy> | void;
    static makeProxyWrapper(...args: any[]): any;
    connectSignal(...args: any[]): any;
    disconnectSignal(...args: any[]): any;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    init_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: AsyncResult): boolean;
    new_finish(res: AsyncResult): DBusProxy;
    vfunc_init_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: AsyncResult): boolean;
    get_object(): DBusObject;
    get_info(): DBusInterfaceInfo;
    set_object(object?: DBusObject | null): void;
    vfunc_dup_object(): DBusObject;
    vfunc_get_info(): DBusInterfaceInfo;
    vfunc_set_object(object?: DBusObject | null): void;
    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}
export module DBusServer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        address: string;
        authentication_observer: DBusAuthObserver;
        authenticationObserver: DBusAuthObserver;
        client_address: string;
        clientAddress: string;
        flags: DBusServerFlags;
        guid: string;
    }
}
export class DBusServer extends GObject.Object implements Initable {
    static $gtype: GObject.GType<DBusServer>;

    constructor(properties?: Partial<DBusServer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusServer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active: boolean;
    address: string;
    authentication_observer: DBusAuthObserver;
    authenticationObserver: DBusAuthObserver;
    client_address: string;
    clientAddress: string;
    flags: DBusServerFlags;
    guid: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "new-connection", callback: (_source: this, connection: DBusConnection) => boolean): number;
    connect_after(signal: "new-connection", callback: (_source: this, connection: DBusConnection) => boolean): number;
    emit(signal: "new-connection", connection: DBusConnection): void;

    // Constructors

    static new_sync(
        address: string,
        flags: DBusServerFlags,
        guid: string,
        observer?: DBusAuthObserver | null,
        cancellable?: Cancellable | null
    ): DBusServer;

    // Members

    get_client_address(): string;
    get_flags(): DBusServerFlags;
    get_guid(): string;
    is_active(): boolean;
    start(): void;
    stop(): void;

    // Implemented Members

    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}
export module DataInputStream {
    export interface ConstructorProperties extends BufferedInputStream.ConstructorProperties {
        [key: string]: any;
        byte_order: DataStreamByteOrder;
        byteOrder: DataStreamByteOrder;
        newline_type: DataStreamNewlineType;
        newlineType: DataStreamNewlineType;
    }
}
export class DataInputStream extends BufferedInputStream implements Seekable {
    static $gtype: GObject.GType<DataInputStream>;

    constructor(properties?: Partial<DataInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DataInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    byte_order: DataStreamByteOrder;
    byteOrder: DataStreamByteOrder;
    newline_type: DataStreamNewlineType;
    newlineType: DataStreamNewlineType;

    // Constructors

    static ["new"](base_stream: InputStream): DataInputStream;

    // Members

    get_byte_order(): DataStreamByteOrder;
    get_newline_type(): DataStreamNewlineType;
    read_byte(cancellable?: Cancellable | null): number;
    read_int16(cancellable?: Cancellable | null): number;
    read_int32(cancellable?: Cancellable | null): number;
    read_int64(cancellable?: Cancellable | null): number;
    read_line(cancellable?: Cancellable | null): [Uint8Array | null, number | null];
    read_line_async(io_priority: number, cancellable?: Cancellable | null): Promise<[Uint8Array | null, number | null]>;
    read_line_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    read_line_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[Uint8Array | null, number | null]> | void;
    read_line_finish(result: AsyncResult): [Uint8Array | null, number | null];
    read_line_finish_utf8(result: AsyncResult): [string | null, number | null];
    read_line_utf8(cancellable?: Cancellable | null): [string | null, number | null];
    read_uint16(cancellable?: Cancellable | null): number;
    read_uint32(cancellable?: Cancellable | null): number;
    read_uint64(cancellable?: Cancellable | null): number;
    read_until(stop_chars: string, cancellable?: Cancellable | null): [string, number | null];
    read_until_async(
        stop_chars: string,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<[string, number | null]>;
    read_until_async(
        stop_chars: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    read_until_async(
        stop_chars: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[string, number | null]> | void;
    read_until_finish(result: AsyncResult): [string, number | null];
    read_upto(stop_chars: string, stop_chars_len: number, cancellable?: Cancellable | null): [string, number | null];
    read_upto_async(
        stop_chars: string,
        stop_chars_len: number,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<[string, number | null]>;
    read_upto_async(
        stop_chars: string,
        stop_chars_len: number,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    read_upto_async(
        stop_chars: string,
        stop_chars_len: number,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[string, number | null]> | void;
    read_upto_finish(result: AsyncResult): [string, number | null];
    set_byte_order(order: DataStreamByteOrder): void;
    set_newline_type(type: DataStreamNewlineType): void;

    // Implemented Members

    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean;
}
export module DataOutputStream {
    export interface ConstructorProperties extends FilterOutputStream.ConstructorProperties {
        [key: string]: any;
        byte_order: DataStreamByteOrder;
        byteOrder: DataStreamByteOrder;
    }
}
export class DataOutputStream extends FilterOutputStream implements Seekable {
    static $gtype: GObject.GType<DataOutputStream>;

    constructor(properties?: Partial<DataOutputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DataOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    byte_order: DataStreamByteOrder;
    byteOrder: DataStreamByteOrder;

    // Constructors

    static ["new"](base_stream: OutputStream): DataOutputStream;

    // Members

    get_byte_order(): DataStreamByteOrder;
    put_byte(data: number, cancellable?: Cancellable | null): boolean;
    put_int16(data: number, cancellable?: Cancellable | null): boolean;
    put_int32(data: number, cancellable?: Cancellable | null): boolean;
    put_int64(data: number, cancellable?: Cancellable | null): boolean;
    put_string(str: string, cancellable?: Cancellable | null): boolean;
    put_uint16(data: number, cancellable?: Cancellable | null): boolean;
    put_uint32(data: number, cancellable?: Cancellable | null): boolean;
    put_uint64(data: number, cancellable?: Cancellable | null): boolean;
    set_byte_order(order: DataStreamByteOrder): void;

    // Implemented Members

    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean;
}
export module DesktopAppInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filename: string;
    }
}
export class DesktopAppInfo extends GObject.Object implements AppInfo {
    static $gtype: GObject.GType<DesktopAppInfo>;

    constructor(properties?: Partial<DesktopAppInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DesktopAppInfo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filename: string;

    // Constructors

    static ["new"](desktop_id: string): DesktopAppInfo;
    static new_from_filename(filename: string): DesktopAppInfo;
    static new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo;

    // Members

    get_action_name(action_name: string): string;
    get_boolean(key: string): boolean;
    get_categories(): string;
    get_filename(): string;
    get_generic_name(): string;
    get_is_hidden(): boolean;
    get_keywords(): string[];
    get_locale_string(key: string): string | null;
    get_nodisplay(): boolean;
    get_show_in(desktop_env?: string | null): boolean;
    get_startup_wm_class(): string;
    get_string(key: string): string;
    get_string_list(key: string): string[];
    has_key(key: string): boolean;
    launch_action(action_name: string, launch_context?: AppLaunchContext | null): void;
    launch_uris_as_manager(
        uris: string[],
        launch_context: AppLaunchContext | null,
        spawn_flags: GLib.SpawnFlags
    ): boolean;
    launch_uris_as_manager_with_fds(
        uris: string[],
        launch_context: AppLaunchContext | null,
        spawn_flags: GLib.SpawnFlags,
        stdin_fd: number,
        stdout_fd: number,
        stderr_fd: number
    ): boolean;
    list_actions(): string[];
    static get_implementations(_interface: string): DesktopAppInfo[];
    static search(search_string: string): string[][];
    static set_desktop_env(desktop_env: string): void;

    // Implemented Members

    add_supports_type(content_type: string): boolean;
    can_delete(): boolean;
    can_remove_supports_type(): boolean;
    ["delete"](): boolean;
    dup(): AppInfo;
    equal(appinfo2: AppInfo): boolean;
    get_commandline(): string;
    get_description(): string;
    get_display_name(): string;
    get_executable(): string;
    get_icon(): Icon;
    get_id(): string;
    get_name(): string;
    get_supported_types(): string[];
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean;
    launch_uris(uris?: string[] | null, context?: AppLaunchContext | null): boolean;
    launch_uris_async(
        uris?: string[] | null,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    launch_uris_async(
        uris: string[] | null,
        context: AppLaunchContext | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    launch_uris_async(
        uris?: string[] | null,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    launch_uris_finish(result: AsyncResult): boolean;
    remove_supports_type(content_type: string): boolean;
    set_as_default_for_extension(extension: string): boolean;
    set_as_default_for_type(content_type: string): boolean;
    set_as_last_used_for_type(content_type: string): boolean;
    should_show(): boolean;
    supports_files(): boolean;
    supports_uris(): boolean;
    vfunc_add_supports_type(content_type: string): boolean;
    vfunc_can_delete(): boolean;
    vfunc_can_remove_supports_type(): boolean;
    vfunc_do_delete(): boolean;
    vfunc_dup(): AppInfo;
    vfunc_equal(appinfo2: AppInfo): boolean;
    vfunc_get_commandline(): string;
    vfunc_get_description(): string;
    vfunc_get_display_name(): string;
    vfunc_get_executable(): string;
    vfunc_get_icon(): Icon;
    vfunc_get_id(): string;
    vfunc_get_name(): string;
    vfunc_get_supported_types(): string[];
    vfunc_launch(files?: File[] | null, context?: AppLaunchContext | null): boolean;
    vfunc_launch_uris(uris?: string[] | null, context?: AppLaunchContext | null): boolean;
    vfunc_launch_uris_async(
        uris?: string[] | null,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_launch_uris_async(
        uris: string[] | null,
        context: AppLaunchContext | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_launch_uris_async(
        uris?: string[] | null,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_launch_uris_finish(result: AsyncResult): boolean;
    vfunc_remove_supports_type(content_type: string): boolean;
    vfunc_set_as_default_for_extension(extension: string): boolean;
    vfunc_set_as_default_for_type(content_type: string): boolean;
    vfunc_set_as_last_used_for_type(content_type: string): boolean;
    vfunc_should_show(): boolean;
    vfunc_supports_files(): boolean;
    vfunc_supports_uris(): boolean;
}
export module Emblem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        icon: GObject.Object;
        origin: EmblemOrigin;
    }
}
export class Emblem extends GObject.Object implements Icon {
    static $gtype: GObject.GType<Emblem>;

    constructor(properties?: Partial<Emblem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Emblem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon: GObject.Object;
    origin: EmblemOrigin;

    // Constructors

    static ["new"](icon: Icon): Emblem;
    static new_with_origin(icon: Icon, origin: EmblemOrigin): Emblem;

    // Members

    get_icon(): Icon;
    get_origin(): EmblemOrigin;

    // Implemented Members

    equal(icon2?: Icon | null): boolean;
    serialize(): GLib.Variant;
    to_string(): string | null;
    vfunc_equal(icon2?: Icon | null): boolean;
    vfunc_hash(): number;
    vfunc_serialize(): GLib.Variant;
}
export module EmblemedIcon {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        gicon: Icon;
    }
}
export class EmblemedIcon extends GObject.Object implements Icon {
    static $gtype: GObject.GType<EmblemedIcon>;

    constructor(properties?: Partial<EmblemedIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EmblemedIcon.ConstructorProperties>, ...args: any[]): void;

    // Properties
    gicon: Icon;

    // Constructors

    static ["new"](icon: Icon, emblem?: Emblem | null): EmblemedIcon;

    // Members

    add_emblem(emblem: Emblem): void;
    clear_emblems(): void;
    get_emblems(): Emblem[];
    get_icon(): Icon;

    // Implemented Members

    equal(icon2?: Icon | null): boolean;
    serialize(): GLib.Variant;
    to_string(): string | null;
    vfunc_equal(icon2?: Icon | null): boolean;
    vfunc_hash(): number;
    vfunc_serialize(): GLib.Variant;
}
export module FileEnumerator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        container: File;
    }
}
export class FileEnumerator extends GObject.Object {
    static $gtype: GObject.GType<FileEnumerator>;

    constructor(properties?: Partial<FileEnumerator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileEnumerator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    container: File;

    // Members

    close(cancellable?: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    close_finish(result: AsyncResult): boolean;
    get_child(info: FileInfo): File;
    get_container(): File;
    has_pending(): boolean;
    is_closed(): boolean;
    iterate(cancellable?: Cancellable | null): [boolean, FileInfo | null, File | null];
    next_file(cancellable?: Cancellable | null): FileInfo | null;
    next_files_async(num_files: number, io_priority: number, cancellable?: Cancellable | null): Promise<FileInfo[]>;
    next_files_async(
        num_files: number,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    next_files_async(
        num_files: number,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo[]> | void;
    next_files_finish(result: AsyncResult): FileInfo[];
    set_pending(pending: boolean): void;
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_close_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_close_finish(result: AsyncResult): boolean;
    vfunc_close_fn(cancellable?: Cancellable | null): boolean;
    vfunc_next_file(cancellable?: Cancellable | null): FileInfo | null;
    vfunc_next_files_async(
        num_files: number,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileInfo[]>;
    vfunc_next_files_async(
        num_files: number,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_next_files_async(
        num_files: number,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo[]> | void;
    vfunc_next_files_finish(result: AsyncResult): FileInfo[];
}
export module FileIOStream {
    export interface ConstructorProperties extends IOStream.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileIOStream extends IOStream implements Seekable {
    static $gtype: GObject.GType<FileIOStream>;

    constructor(properties?: Partial<FileIOStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileIOStream.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_etag(): string;
    query_info(attributes: string, cancellable?: Cancellable | null): FileInfo;
    query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null): Promise<FileInfo>;
    query_info_async(
        attributes: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    query_info_finish(result: AsyncResult): FileInfo;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_get_etag(): string;
    vfunc_query_info(attributes: string, cancellable?: Cancellable | null): FileInfo;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileInfo>;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    vfunc_query_info_finish(result: AsyncResult): FileInfo;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(size: number, cancellable?: Cancellable | null): boolean;

    // Implemented Members

    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
}
export module FileIcon {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        file: File;
    }
}
export class FileIcon extends GObject.Object implements Icon, LoadableIcon {
    static $gtype: GObject.GType<FileIcon>;

    constructor(properties?: Partial<FileIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileIcon.ConstructorProperties>, ...args: any[]): void;

    // Properties
    file: File;

    // Constructors

    static ["new"](file: File): FileIcon;

    // Members

    get_file(): File;

    // Implemented Members

    equal(icon2?: Icon | null): boolean;
    serialize(): GLib.Variant;
    to_string(): string | null;
    vfunc_equal(icon2?: Icon | null): boolean;
    vfunc_hash(): number;
    vfunc_serialize(): GLib.Variant;
    load(size: number, cancellable?: Cancellable | null): [InputStream, string | null];
    load_async(size: number, cancellable?: Cancellable | null): Promise<[InputStream, string | null]>;
    load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    load_async(
        size: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[InputStream, string | null]> | void;
    load_finish(res: AsyncResult): [InputStream, string | null];
    vfunc_load(size: number, cancellable?: Cancellable | null): [InputStream, string | null];
    vfunc_load_async(size: number, cancellable?: Cancellable | null): Promise<[InputStream, string | null]>;
    vfunc_load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_load_async(
        size: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[InputStream, string | null]> | void;
    vfunc_load_finish(res: AsyncResult): [InputStream, string | null];
}
export module FileInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileInfo extends GObject.Object {
    static $gtype: GObject.GType<FileInfo>;

    constructor(properties?: Partial<FileInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileInfo.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): FileInfo;

    // Members

    clear_status(): void;
    copy_into(dest_info: FileInfo): void;
    dup(): FileInfo;
    get_attribute_as_string(attribute: string): string | null;
    get_attribute_boolean(attribute: string): boolean;
    get_attribute_byte_string(attribute: string): string | null;
    get_attribute_data(attribute: string): [boolean, FileAttributeType | null, any | null, FileAttributeStatus | null];
    get_attribute_int32(attribute: string): number;
    get_attribute_int64(attribute: string): number;
    get_attribute_object<T = GObject.Object>(attribute: string): T;
    get_attribute_status(attribute: string): FileAttributeStatus;
    get_attribute_string(attribute: string): string | null;
    get_attribute_stringv(attribute: string): string[] | null;
    get_attribute_type(attribute: string): FileAttributeType;
    get_attribute_uint32(attribute: string): number;
    get_attribute_uint64(attribute: string): number;
    get_content_type(): string | null;
    get_deletion_date(): GLib.DateTime | null;
    get_display_name(): string;
    get_edit_name(): string;
    get_etag(): string;
    get_file_type(): FileType;
    get_icon(): Icon;
    get_is_backup(): boolean;
    get_is_hidden(): boolean;
    get_is_symlink(): boolean;
    get_modification_date_time(): GLib.DateTime | null;
    get_modification_time(): GLib.TimeVal;
    get_name(): string;
    get_size(): number;
    get_sort_order(): number;
    get_symbolic_icon(): Icon;
    get_symlink_target(): string;
    has_attribute(attribute: string): boolean;
    has_namespace(name_space: string): boolean;
    list_attributes(name_space?: string | null): string[] | null;
    remove_attribute(attribute: string): void;
    set_attribute(attribute: string, type: FileAttributeType, value_p: any): void;
    set_attribute_boolean(attribute: string, attr_value: boolean): void;
    set_attribute_byte_string(attribute: string, attr_value: string): void;
    set_attribute_int32(attribute: string, attr_value: number): void;
    set_attribute_int64(attribute: string, attr_value: number): void;
    set_attribute_mask(mask: FileAttributeMatcher): void;
    set_attribute_object(attribute: string, attr_value: GObject.Object): void;
    set_attribute_status(attribute: string, status: FileAttributeStatus): boolean;
    set_attribute_string(attribute: string, attr_value: string): void;
    set_attribute_stringv(attribute: string, attr_value: string[]): void;
    set_attribute_uint32(attribute: string, attr_value: number): void;
    set_attribute_uint64(attribute: string, attr_value: number): void;
    set_content_type(content_type: string): void;
    set_display_name(display_name: string): void;
    set_edit_name(edit_name: string): void;
    set_file_type(type: FileType): void;
    set_icon(icon: Icon): void;
    set_is_hidden(is_hidden: boolean): void;
    set_is_symlink(is_symlink: boolean): void;
    set_modification_date_time(mtime: GLib.DateTime): void;
    set_modification_time(mtime: GLib.TimeVal): void;
    set_name(name: string): void;
    set_size(size: number): void;
    set_sort_order(sort_order: number): void;
    set_symbolic_icon(icon: Icon): void;
    set_symlink_target(symlink_target: string): void;
    unset_attribute_mask(): void;
}
export module FileInputStream {
    export interface ConstructorProperties extends InputStream.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileInputStream extends InputStream implements Seekable {
    static $gtype: GObject.GType<FileInputStream>;

    constructor(properties?: Partial<FileInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileInputStream.ConstructorProperties>, ...args: any[]): void;

    // Members

    query_info(attributes: string, cancellable?: Cancellable | null): FileInfo;
    query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null): Promise<FileInfo>;
    query_info_async(
        attributes: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    query_info_finish(result: AsyncResult): FileInfo;
    vfunc_can_seek(): boolean;
    vfunc_query_info(attributes: string, cancellable?: Cancellable | null): FileInfo;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileInfo>;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    vfunc_query_info_finish(result: AsyncResult): FileInfo;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;

    // Implemented Members

    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean;
}
export module FileMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        cancelled: boolean;
        rate_limit: number;
        rateLimit: number;
    }
}
export abstract class FileMonitor extends GObject.Object {
    static $gtype: GObject.GType<FileMonitor>;

    constructor(properties?: Partial<FileMonitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileMonitor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cancelled: boolean;
    rate_limit: number;
    rateLimit: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "changed",
        callback: (_source: this, file: File, other_file: File | null, event_type: FileMonitorEvent) => void
    ): number;
    connect_after(
        signal: "changed",
        callback: (_source: this, file: File, other_file: File | null, event_type: FileMonitorEvent) => void
    ): number;
    emit(signal: "changed", file: File, other_file: File | null, event_type: FileMonitorEvent): void;

    // Members

    cancel(): boolean;
    emit_event(child: File, other_file: File, event_type: FileMonitorEvent): void;
    is_cancelled(): boolean;
    set_rate_limit(limit_msecs: number): void;
    vfunc_cancel(): boolean;
    vfunc_changed(file: File, other_file: File, event_type: FileMonitorEvent): void;
}
export module FileOutputStream {
    export interface ConstructorProperties extends OutputStream.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileOutputStream extends OutputStream implements Seekable {
    static $gtype: GObject.GType<FileOutputStream>;

    constructor(properties?: Partial<FileOutputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_etag(): string;
    query_info(attributes: string, cancellable?: Cancellable | null): FileInfo;
    query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null): Promise<FileInfo>;
    query_info_async(
        attributes: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    query_info_finish(result: AsyncResult): FileInfo;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_get_etag(): string;
    vfunc_query_info(attributes: string, cancellable?: Cancellable | null): FileInfo;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileInfo>;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_query_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    vfunc_query_info_finish(result: AsyncResult): FileInfo;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(size: number, cancellable?: Cancellable | null): boolean;

    // Implemented Members

    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
}
export module FilenameCompleter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FilenameCompleter extends GObject.Object {
    static $gtype: GObject.GType<FilenameCompleter>;

    constructor(properties?: Partial<FilenameCompleter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FilenameCompleter.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "got-completion-data", callback: (_source: this) => void): number;
    connect_after(signal: "got-completion-data", callback: (_source: this) => void): number;
    emit(signal: "got-completion-data"): void;

    // Constructors

    static ["new"](): FilenameCompleter;

    // Members

    get_completion_suffix(initial_text: string): string;
    get_completions(initial_text: string): string[];
    set_dirs_only(dirs_only: boolean): void;
    vfunc_got_completion_data(): void;
}
export module FilterInputStream {
    export interface ConstructorProperties extends InputStream.ConstructorProperties {
        [key: string]: any;
        base_stream: InputStream;
        baseStream: InputStream;
        close_base_stream: boolean;
        closeBaseStream: boolean;
    }
}
export abstract class FilterInputStream extends InputStream {
    static $gtype: GObject.GType<FilterInputStream>;

    constructor(properties?: Partial<FilterInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FilterInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_stream: InputStream;
    baseStream: InputStream;
    close_base_stream: boolean;
    closeBaseStream: boolean;

    // Members

    get_base_stream(): InputStream;
    get_close_base_stream(): boolean;
    set_close_base_stream(close_base: boolean): void;
}
export module FilterOutputStream {
    export interface ConstructorProperties extends OutputStream.ConstructorProperties {
        [key: string]: any;
        base_stream: OutputStream;
        baseStream: OutputStream;
        close_base_stream: boolean;
        closeBaseStream: boolean;
    }
}
export abstract class FilterOutputStream extends OutputStream {
    static $gtype: GObject.GType<FilterOutputStream>;

    constructor(properties?: Partial<FilterOutputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FilterOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_stream: OutputStream;
    baseStream: OutputStream;
    close_base_stream: boolean;
    closeBaseStream: boolean;

    // Members

    get_base_stream(): OutputStream;
    get_close_base_stream(): boolean;
    set_close_base_stream(close_base: boolean): void;
}
export module IOModule {
    export interface ConstructorProperties extends GObject.TypeModule.ConstructorProperties {
        [key: string]: any;
    }
}
export class IOModule extends GObject.TypeModule implements GObject.TypePlugin {
    static $gtype: GObject.GType<IOModule>;

    constructor(properties?: Partial<IOModule.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IOModule.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](filename: string): IOModule;

    // Members

    load(): void;
    unload(): void;
    static query(): string[];

    // Implemented Members

    complete_interface_info(
        instance_type: GObject.GType,
        interface_type: GObject.GType,
        info: GObject.InterfaceInfo
    ): void;
    complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;
    unuse(): void;
    use(): void;
    use(...args: never[]): never;
}
export module IOStream {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        closed: boolean;
        input_stream: InputStream;
        inputStream: InputStream;
        output_stream: OutputStream;
        outputStream: OutputStream;
    }
}
export abstract class IOStream extends GObject.Object {
    static $gtype: GObject.GType<IOStream>;

    constructor(properties?: Partial<IOStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IOStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    closed: boolean;
    input_stream: InputStream;
    inputStream: InputStream;
    output_stream: OutputStream;
    outputStream: OutputStream;

    // Members

    clear_pending(): void;
    close(cancellable?: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    close_finish(result: AsyncResult): boolean;
    get_input_stream(): InputStream;
    get_output_stream(): OutputStream;
    has_pending(): boolean;
    is_closed(): boolean;
    set_pending(): boolean;
    splice_async(
        stream2: IOStream,
        flags: IOStreamSpliceFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): void;
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_close_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_close_finish(result: AsyncResult): boolean;
    vfunc_close_fn(cancellable?: Cancellable | null): boolean;
    vfunc_get_input_stream(): InputStream;
    vfunc_get_output_stream(): OutputStream;
    static splice_finish(result: AsyncResult): boolean;
}
export module InetAddress {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bytes: any;
        family: SocketFamily;
        is_any: boolean;
        isAny: boolean;
        is_link_local: boolean;
        isLinkLocal: boolean;
        is_loopback: boolean;
        isLoopback: boolean;
        is_mc_global: boolean;
        isMcGlobal: boolean;
        is_mc_link_local: boolean;
        isMcLinkLocal: boolean;
        is_mc_node_local: boolean;
        isMcNodeLocal: boolean;
        is_mc_org_local: boolean;
        isMcOrgLocal: boolean;
        is_mc_site_local: boolean;
        isMcSiteLocal: boolean;
        is_multicast: boolean;
        isMulticast: boolean;
        is_site_local: boolean;
        isSiteLocal: boolean;
    }
}
export class InetAddress extends GObject.Object {
    static $gtype: GObject.GType<InetAddress>;

    constructor(properties?: Partial<InetAddress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InetAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bytes: any;
    family: SocketFamily;
    is_any: boolean;
    isAny: boolean;
    is_link_local: boolean;
    isLinkLocal: boolean;
    is_loopback: boolean;
    isLoopback: boolean;
    is_mc_global: boolean;
    isMcGlobal: boolean;
    is_mc_link_local: boolean;
    isMcLinkLocal: boolean;
    is_mc_node_local: boolean;
    isMcNodeLocal: boolean;
    is_mc_org_local: boolean;
    isMcOrgLocal: boolean;
    is_mc_site_local: boolean;
    isMcSiteLocal: boolean;
    is_multicast: boolean;
    isMulticast: boolean;
    is_site_local: boolean;
    isSiteLocal: boolean;

    // Constructors

    static new_any(family: SocketFamily): InetAddress;
    static new_from_bytes(bytes: Uint8Array | string, family: SocketFamily): InetAddress;
    static new_from_string(string: string): InetAddress;
    static new_loopback(family: SocketFamily): InetAddress;

    // Members

    equal(other_address: InetAddress): boolean;
    get_family(): SocketFamily;
    get_is_any(): boolean;
    get_is_link_local(): boolean;
    get_is_loopback(): boolean;
    get_is_mc_global(): boolean;
    get_is_mc_link_local(): boolean;
    get_is_mc_node_local(): boolean;
    get_is_mc_org_local(): boolean;
    get_is_mc_site_local(): boolean;
    get_is_multicast(): boolean;
    get_is_site_local(): boolean;
    get_native_size(): number;
    to_string(): string;
    vfunc_to_string(): string;
}
export module InetAddressMask {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        address: InetAddress;
        family: SocketFamily;
        length: number;
    }
}
export class InetAddressMask extends GObject.Object implements Initable {
    static $gtype: GObject.GType<InetAddressMask>;

    constructor(properties?: Partial<InetAddressMask.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InetAddressMask.ConstructorProperties>, ...args: any[]): void;

    // Properties
    address: InetAddress;
    family: SocketFamily;
    length: number;

    // Constructors

    static ["new"](addr: InetAddress, length: number): InetAddressMask;
    static new_from_string(mask_string: string): InetAddressMask;

    // Members

    equal(mask2: InetAddressMask): boolean;
    get_address(): InetAddress;
    get_family(): SocketFamily;
    get_length(): number;
    matches(address: InetAddress): boolean;
    to_string(): string;

    // Implemented Members

    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}
export module InetSocketAddress {
    export interface ConstructorProperties extends SocketAddress.ConstructorProperties {
        [key: string]: any;
        address: InetAddress;
        flowinfo: number;
        port: number;
        scope_id: number;
        scopeId: number;
    }
}
export class InetSocketAddress extends SocketAddress implements SocketConnectable {
    static $gtype: GObject.GType<InetSocketAddress>;

    constructor(properties?: Partial<InetSocketAddress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InetSocketAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    address: InetAddress;
    flowinfo: number;
    port: number;
    scope_id: number;
    scopeId: number;

    // Constructors

    static ["new"](address: InetAddress, port: number): InetSocketAddress;
    static new_from_string(address: string, port: number): InetSocketAddress;

    // Members

    get_address(): InetAddress;
    get_flowinfo(): number;
    get_port(): number;
    get_scope_id(): number;

    // Implemented Members

    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): SocketAddressEnumerator;
    vfunc_proxy_enumerate(): SocketAddressEnumerator;
    vfunc_to_string(): string;
}
export module InputStream {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class InputStream extends GObject.Object {
    static $gtype: GObject.GType<InputStream>;

    constructor(properties?: Partial<InputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InputStream.ConstructorProperties>, ...args: any[]): void;

    // Members

    clear_pending(): void;
    close(cancellable?: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    close_finish(result: AsyncResult): boolean;
    has_pending(): boolean;
    is_closed(): boolean;
    read(cancellable?: Cancellable | null): [number, Uint8Array];
    read_all(cancellable?: Cancellable | null): [boolean, Uint8Array, number];
    read_all_async(io_priority: number, cancellable?: Cancellable | null): [Promise<[number]>, Uint8Array];
    read_all_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): Uint8Array;
    read_all_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): [Promise<[number]> | void, Uint8Array];
    read_all_finish(result: AsyncResult): [boolean, number];
    read_async(io_priority: number, cancellable?: Cancellable | null): [Promise<number>, Uint8Array];
    read_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): Uint8Array;
    read_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): [Promise<number> | void, Uint8Array];
    read_bytes(count: number, cancellable?: Cancellable | null): GLib.Bytes;
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null): Promise<GLib.Bytes>;
    read_bytes_async(
        count: number,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    read_bytes_async(
        count: number,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<GLib.Bytes> | void;
    read_bytes_finish(result: AsyncResult): GLib.Bytes;
    read_finish(result: AsyncResult): number;
    set_pending(): boolean;
    skip(count: number, cancellable?: Cancellable | null): number;
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null): Promise<number>;
    skip_async(
        count: number,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    skip_async(
        count: number,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    skip_finish(result: AsyncResult): number;
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_close_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_close_finish(result: AsyncResult): boolean;
    vfunc_close_fn(cancellable?: Cancellable | null): boolean;
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null): [Promise<number>, Uint8Array | null];
    vfunc_read_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): Uint8Array | null;
    vfunc_read_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): [Promise<number> | void, Uint8Array | null];
    vfunc_read_finish(result: AsyncResult): number;
    vfunc_read_fn(buffer: any | null, count: number, cancellable?: Cancellable | null): number;
    vfunc_skip(count: number, cancellable?: Cancellable | null): number;
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null): Promise<number>;
    vfunc_skip_async(
        count: number,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_skip_async(
        count: number,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    vfunc_skip_finish(result: AsyncResult): number;
}
export module ListStore {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        item_type: GObject.GType;
        itemType: GObject.GType;
    }
}
export class ListStore<A extends GObject.Object = GObject.Object> extends GObject.Object implements ListModel<A> {
    static $gtype: GObject.GType<ListStore>;

    constructor(properties?: Partial<ListStore.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<ListStore.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    item_type: GObject.GType;
    itemType: GObject.GType;

    // Fields
    [Symbol.iterator]: () => IterableIterator<A>;

    // Constructors

    static ["new"](item_type: GObject.GType): ListStore;

    // Members

    append(item: A): void;
    find(item: A): [boolean, number | null];
    find_with_equal_func(item: A, equal_func: GLib.EqualFunc): [boolean, number | null];
    insert(position: number, item: A): void;
    insert_sorted(item: A, compare_func: GLib.CompareDataFunc): number;
    remove(position: number): void;
    remove_all(): void;
    sort(compare_func: GLib.CompareDataFunc): void;
    splice(position: number, n_removals: number, additions: A[]): void;

    // Implemented Members

    get_item_type(): GObject.GType;
    get_n_items(): number;
    get_item(position: number): A | null;
    items_changed(position: number, removed: number, added: number): void;
    vfunc_get_item(position: number): A | null;
    vfunc_get_item_type(): GObject.GType;
    vfunc_get_n_items(): number;
}
export module MemoryInputStream {
    export interface ConstructorProperties extends InputStream.ConstructorProperties {
        [key: string]: any;
    }
}
export class MemoryInputStream extends InputStream implements PollableInputStream, Seekable {
    static $gtype: GObject.GType<MemoryInputStream>;

    constructor(properties?: Partial<MemoryInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MemoryInputStream.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): MemoryInputStream;
    static new_from_bytes(bytes: GLib.Bytes | Uint8Array): MemoryInputStream;
    static new_from_data(data: Uint8Array | string, destroy?: GLib.DestroyNotify | null): MemoryInputStream;

    // Members

    add_bytes(bytes: GLib.Bytes | Uint8Array): void;
    add_data(data: Uint8Array | string, destroy?: GLib.DestroyNotify | null): void;

    // Implemented Members

    can_poll(): boolean;
    create_source(cancellable?: Cancellable | null): GLib.Source;
    is_readable(): boolean;
    read_nonblocking(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source;
    vfunc_is_readable(): boolean;
    vfunc_read_nonblocking(buffer?: Uint8Array | null): number;
    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean;
}
export module MemoryOutputStream {
    export interface ConstructorProperties extends OutputStream.ConstructorProperties {
        [key: string]: any;
        data: any;
        data_size: number;
        dataSize: number;
        size: number;
    }
}
export class MemoryOutputStream extends OutputStream implements PollableOutputStream, Seekable {
    static $gtype: GObject.GType<MemoryOutputStream>;

    constructor(properties?: Partial<MemoryOutputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MemoryOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data: any;
    data_size: number;
    dataSize: number;
    size: number;

    // Constructors

    static new_resizable(): MemoryOutputStream;

    // Members

    get_data(): any | null;
    get_data(...args: never[]): never;
    get_data_size(): number;
    get_size(): number;
    steal_as_bytes(): GLib.Bytes;
    steal_data(): any | null;
    steal_data(...args: never[]): never;

    // Implemented Members

    can_poll(): boolean;
    create_source(cancellable?: Cancellable | null): GLib.Source;
    is_writable(): boolean;
    write_nonblocking(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    writev_nonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [PollableReturn, number | null];
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source;
    vfunc_is_writable(): boolean;
    vfunc_write_nonblocking(buffer?: Uint8Array | null): number;
    vfunc_writev_nonblocking(vectors: OutputVector[]): [PollableReturn, number | null];
    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean;
}
export module Menu {
    export interface ConstructorProperties extends MenuModel.ConstructorProperties {
        [key: string]: any;
    }
}
export class Menu extends MenuModel {
    static $gtype: GObject.GType<Menu>;

    constructor(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Menu;

    // Members

    append(label?: string | null, detailed_action?: string | null): void;
    append_item(item: MenuItem): void;
    append_section(label: string | null, section: MenuModel): void;
    append_submenu(label: string | null, submenu: MenuModel): void;
    freeze(): void;
    insert(position: number, label?: string | null, detailed_action?: string | null): void;
    insert_item(position: number, item: MenuItem): void;
    insert_section(position: number, label: string | null, section: MenuModel): void;
    insert_submenu(position: number, label: string | null, submenu: MenuModel): void;
    prepend(label?: string | null, detailed_action?: string | null): void;
    prepend_item(item: MenuItem): void;
    prepend_section(label: string | null, section: MenuModel): void;
    prepend_submenu(label: string | null, submenu: MenuModel): void;
    remove(position: number): void;
    remove_all(): void;
}
export module MenuAttributeIter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class MenuAttributeIter extends GObject.Object {
    static $gtype: GObject.GType<MenuAttributeIter>;

    constructor(properties?: Partial<MenuAttributeIter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuAttributeIter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MenuAttributeIterPrivate;

    // Members

    get_name(): string;
    get_next(): [boolean, string | null, GLib.Variant | null];
    get_value(): GLib.Variant;
    next(): boolean;
    vfunc_get_next(): [boolean, string | null, GLib.Variant | null];
}
export module MenuItem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuItem extends GObject.Object {
    static $gtype: GObject.GType<MenuItem>;

    constructor(properties?: Partial<MenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuItem.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](label?: string | null, detailed_action?: string | null): MenuItem;
    static new_from_model(model: MenuModel, item_index: number): MenuItem;
    static new_section(label: string | null, section: MenuModel): MenuItem;
    static new_submenu(label: string | null, submenu: MenuModel): MenuItem;

    // Members

    get_attribute_value(attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant;
    get_link(link: string): MenuModel;
    set_action_and_target_value(action?: string | null, target_value?: GLib.Variant | null): void;
    set_attribute_value(attribute: string, value?: GLib.Variant | null): void;
    set_detailed_action(detailed_action: string): void;
    set_icon(icon: Icon): void;
    set_label(label?: string | null): void;
    set_link(link: string, model?: MenuModel | null): void;
    set_section(section?: MenuModel | null): void;
    set_submenu(submenu?: MenuModel | null): void;
}
export module MenuLinkIter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class MenuLinkIter extends GObject.Object {
    static $gtype: GObject.GType<MenuLinkIter>;

    constructor(properties?: Partial<MenuLinkIter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuLinkIter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MenuLinkIterPrivate;

    // Members

    get_name(): string;
    get_next(): [boolean, string | null, MenuModel | null];
    get_value(): MenuModel;
    next(): boolean;
    vfunc_get_next(): [boolean, string | null, MenuModel | null];
}
export module MenuModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class MenuModel extends GObject.Object {
    static $gtype: GObject.GType<MenuModel>;

    constructor(properties?: Partial<MenuModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuModel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MenuModelPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "items-changed",
        callback: (_source: this, position: number, removed: number, added: number) => void
    ): number;
    connect_after(
        signal: "items-changed",
        callback: (_source: this, position: number, removed: number, added: number) => void
    ): number;
    emit(signal: "items-changed", position: number, removed: number, added: number): void;

    // Members

    get_item_attribute_value(
        item_index: number,
        attribute: string,
        expected_type?: GLib.VariantType | null
    ): GLib.Variant;
    get_item_link(item_index: number, link: string): MenuModel;
    get_n_items(): number;
    is_mutable(): boolean;
    items_changed(position: number, removed: number, added: number): void;
    iterate_item_attributes(item_index: number): MenuAttributeIter;
    iterate_item_links(item_index: number): MenuLinkIter;
    vfunc_get_item_attribute_value(
        item_index: number,
        attribute: string,
        expected_type?: GLib.VariantType | null
    ): GLib.Variant;
    vfunc_get_item_attributes(item_index: number): GLib.HashTable<string, GLib.Variant>;
    vfunc_get_item_link(item_index: number, link: string): MenuModel;
    vfunc_get_item_links(item_index: number): GLib.HashTable<string, MenuModel>;
    vfunc_get_n_items(): number;
    vfunc_is_mutable(): boolean;
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter;
    vfunc_iterate_item_links(item_index: number): MenuLinkIter;
}
export module MountOperation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        anonymous: boolean;
        choice: number;
        domain: string;
        is_tcrypt_hidden_volume: boolean;
        isTcryptHiddenVolume: boolean;
        is_tcrypt_system_volume: boolean;
        isTcryptSystemVolume: boolean;
        password: string;
        password_save: PasswordSave;
        passwordSave: PasswordSave;
        pim: number;
        username: string;
    }
}
export class MountOperation extends GObject.Object {
    static $gtype: GObject.GType<MountOperation>;

    constructor(properties?: Partial<MountOperation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MountOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    anonymous: boolean;
    choice: number;
    domain: string;
    is_tcrypt_hidden_volume: boolean;
    isTcryptHiddenVolume: boolean;
    is_tcrypt_system_volume: boolean;
    isTcryptSystemVolume: boolean;
    password: string;
    password_save: PasswordSave;
    passwordSave: PasswordSave;
    pim: number;
    username: string;

    // Fields
    priv: MountOperationPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "aborted", callback: (_source: this) => void): number;
    connect_after(signal: "aborted", callback: (_source: this) => void): number;
    emit(signal: "aborted"): void;
    connect(
        signal: "ask-password",
        callback: (
            _source: this,
            message: string,
            default_user: string,
            default_domain: string,
            flags: AskPasswordFlags
        ) => void
    ): number;
    connect_after(
        signal: "ask-password",
        callback: (
            _source: this,
            message: string,
            default_user: string,
            default_domain: string,
            flags: AskPasswordFlags
        ) => void
    ): number;
    emit(
        signal: "ask-password",
        message: string,
        default_user: string,
        default_domain: string,
        flags: AskPasswordFlags
    ): void;
    connect(signal: "ask-question", callback: (_source: this, message: string, choices: string[]) => void): number;
    connect_after(
        signal: "ask-question",
        callback: (_source: this, message: string, choices: string[]) => void
    ): number;
    emit(signal: "ask-question", message: string, choices: string[]): void;
    connect(signal: "reply", callback: (_source: this, result: MountOperationResult) => void): number;
    connect_after(signal: "reply", callback: (_source: this, result: MountOperationResult) => void): number;
    emit(signal: "reply", result: MountOperationResult): void;
    connect(
        signal: "show-processes",
        callback: (_source: this, message: string, processes: GLib.Pid[], choices: string[]) => void
    ): number;
    connect_after(
        signal: "show-processes",
        callback: (_source: this, message: string, processes: GLib.Pid[], choices: string[]) => void
    ): number;
    emit(signal: "show-processes", message: string, processes: GLib.Pid[], choices: string[]): void;
    connect(
        signal: "show-unmount-progress",
        callback: (_source: this, message: string, time_left: number, bytes_left: number) => void
    ): number;
    connect_after(
        signal: "show-unmount-progress",
        callback: (_source: this, message: string, time_left: number, bytes_left: number) => void
    ): number;
    emit(signal: "show-unmount-progress", message: string, time_left: number, bytes_left: number): void;

    // Constructors

    static ["new"](): MountOperation;

    // Members

    get_anonymous(): boolean;
    get_choice(): number;
    get_domain(): string;
    get_is_tcrypt_hidden_volume(): boolean;
    get_is_tcrypt_system_volume(): boolean;
    get_password(): string;
    get_password_save(): PasswordSave;
    get_pim(): number;
    get_username(): string;
    reply(result: MountOperationResult): void;
    set_anonymous(anonymous: boolean): void;
    set_choice(choice: number): void;
    set_domain(domain: string): void;
    set_is_tcrypt_hidden_volume(hidden_volume: boolean): void;
    set_is_tcrypt_system_volume(system_volume: boolean): void;
    set_password(password: string): void;
    set_password_save(save: PasswordSave): void;
    set_pim(pim: number): void;
    set_username(username: string): void;
    vfunc_aborted(): void;
    vfunc_ask_password(message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void;
    vfunc_ask_question(message: string, choices: string[]): void;
    vfunc_reply(result: MountOperationResult): void;
    vfunc_show_processes(message: string, processes: GLib.Pid[], choices: string[]): void;
    vfunc_show_unmount_progress(message: string, time_left: number, bytes_left: number): void;
}
export module NativeSocketAddress {
    export interface ConstructorProperties extends SocketAddress.ConstructorProperties {
        [key: string]: any;
    }
}
export class NativeSocketAddress extends SocketAddress implements SocketConnectable {
    static $gtype: GObject.GType<NativeSocketAddress>;

    constructor(properties?: Partial<NativeSocketAddress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NativeSocketAddress.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](_native: any | null, len: number): NativeSocketAddress;

    // Implemented Members

    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): SocketAddressEnumerator;
    vfunc_proxy_enumerate(): SocketAddressEnumerator;
    vfunc_to_string(): string;
}
export module NativeVolumeMonitor {
    export interface ConstructorProperties extends VolumeMonitor.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class NativeVolumeMonitor extends VolumeMonitor {
    static $gtype: GObject.GType<NativeVolumeMonitor>;

    constructor(properties?: Partial<NativeVolumeMonitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NativeVolumeMonitor.ConstructorProperties>, ...args: any[]): void;
}
export module NetworkAddress {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        hostname: string;
        port: number;
        scheme: string;
    }
}
export class NetworkAddress extends GObject.Object implements SocketConnectable {
    static $gtype: GObject.GType<NetworkAddress>;

    constructor(properties?: Partial<NetworkAddress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NetworkAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    hostname: string;
    port: number;
    scheme: string;

    // Constructors

    static ["new"](hostname: string, port: number): NetworkAddress;
    static new_loopback(port: number): NetworkAddress;

    // Members

    get_hostname(): string;
    get_port(): number;
    get_scheme(): string;
    static parse(host_and_port: string, default_port: number): NetworkAddress;
    static parse_uri(uri: string, default_port: number): NetworkAddress;

    // Implemented Members

    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): SocketAddressEnumerator;
    vfunc_proxy_enumerate(): SocketAddressEnumerator;
    vfunc_to_string(): string;
}
export module NetworkService {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        domain: string;
        protocol: string;
        scheme: string;
        service: string;
    }
}
export class NetworkService extends GObject.Object implements SocketConnectable {
    static $gtype: GObject.GType<NetworkService>;

    constructor(properties?: Partial<NetworkService.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NetworkService.ConstructorProperties>, ...args: any[]): void;

    // Properties
    domain: string;
    protocol: string;
    scheme: string;
    service: string;

    // Constructors

    static ["new"](service: string, protocol: string, domain: string): NetworkService;

    // Members

    get_domain(): string;
    get_protocol(): string;
    get_scheme(): string;
    get_service(): string;
    set_scheme(scheme: string): void;

    // Implemented Members

    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): SocketAddressEnumerator;
    vfunc_proxy_enumerate(): SocketAddressEnumerator;
    vfunc_to_string(): string;
}
export module Notification {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Notification extends GObject.Object {
    static $gtype: GObject.GType<Notification>;

    constructor(properties?: Partial<Notification.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Notification.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](title: string): Notification;

    // Members

    add_button(label: string, detailed_action: string): void;
    add_button_with_target(label: string, action: string, target?: GLib.Variant | null): void;
    set_body(body?: string | null): void;
    set_default_action(detailed_action: string): void;
    set_default_action_and_target(action: string, target?: GLib.Variant | null): void;
    set_icon(icon: Icon): void;
    set_priority(priority: NotificationPriority): void;
    set_title(title: string): void;
    set_urgent(urgent: boolean): void;
}
export module OutputStream {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class OutputStream extends GObject.Object {
    static $gtype: GObject.GType<OutputStream>;

    constructor(properties?: Partial<OutputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<OutputStream.ConstructorProperties>, ...args: any[]): void;

    // Members

    clear_pending(): void;
    close(cancellable?: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    close_finish(result: AsyncResult): boolean;
    flush(cancellable?: Cancellable | null): boolean;
    flush_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    flush_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    flush_finish(result: AsyncResult): boolean;
    has_pending(): boolean;
    is_closed(): boolean;
    is_closing(): boolean;
    set_pending(): boolean;
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number;
    splice_async(
        source: InputStream,
        flags: OutputStreamSpliceFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<number>;
    splice_async(
        source: InputStream,
        flags: OutputStreamSpliceFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    splice_async(
        source: InputStream,
        flags: OutputStreamSpliceFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    splice_finish(result: AsyncResult): number;
    write(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    write_all(buffer: Uint8Array | string, cancellable?: Cancellable | null): [boolean, number | null];
    write_all_async(
        buffer: Uint8Array | string,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<[number | null]>;
    write_all_async(
        buffer: Uint8Array | string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    write_all_async(
        buffer: Uint8Array | string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[number | null]> | void;
    write_all_finish(result: AsyncResult): [boolean, number | null];
    write_async(buffer: Uint8Array | string, io_priority: number, cancellable?: Cancellable | null): Promise<number>;
    write_async(
        buffer: Uint8Array | string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    write_async(
        buffer: Uint8Array | string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    write_bytes(bytes: GLib.Bytes | Uint8Array, cancellable?: Cancellable | null): number;
    write_bytes_async(
        bytes: GLib.Bytes | Uint8Array,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<number>;
    write_bytes_async(
        bytes: GLib.Bytes | Uint8Array,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    write_bytes_async(
        bytes: GLib.Bytes | Uint8Array,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    write_bytes_finish(result: AsyncResult): number;
    write_finish(result: AsyncResult): number;
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [boolean, number | null];
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [boolean, number | null];
    writev_all_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<[number | null]>;
    writev_all_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    writev_all_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[number | null]> | void;
    writev_all_finish(result: AsyncResult): [boolean, number | null];
    writev_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<[number | null]>;
    writev_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    writev_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[number | null]> | void;
    writev_finish(result: AsyncResult): [boolean, number | null];
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_close_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_close_finish(result: AsyncResult): boolean;
    vfunc_close_fn(cancellable?: Cancellable | null): boolean;
    vfunc_flush(cancellable?: Cancellable | null): boolean;
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_flush_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_flush_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_flush_finish(result: AsyncResult): boolean;
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number;
    vfunc_splice_async(
        source: InputStream,
        flags: OutputStreamSpliceFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<number>;
    vfunc_splice_async(
        source: InputStream,
        flags: OutputStreamSpliceFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_splice_async(
        source: InputStream,
        flags: OutputStreamSpliceFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    vfunc_splice_finish(result: AsyncResult): number;
    vfunc_write_async(
        buffer: Uint8Array | null,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<number>;
    vfunc_write_async(
        buffer: Uint8Array | null,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_write_async(
        buffer: Uint8Array | null,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    vfunc_write_finish(result: AsyncResult): number;
    vfunc_write_fn(buffer?: Uint8Array | null, cancellable?: Cancellable | null): number;
    vfunc_writev_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<[number | null]>;
    vfunc_writev_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_writev_async(
        vectors: OutputVector[],
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[number | null]> | void;
    vfunc_writev_finish(result: AsyncResult): [boolean, number | null];
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [boolean, number | null];
}
export module Permission {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        allowed: boolean;
        can_acquire: boolean;
        canAcquire: boolean;
        can_release: boolean;
        canRelease: boolean;
    }
}
export abstract class Permission extends GObject.Object {
    static $gtype: GObject.GType<Permission>;

    constructor(properties?: Partial<Permission.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Permission.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allowed: boolean;
    can_acquire: boolean;
    canAcquire: boolean;
    can_release: boolean;
    canRelease: boolean;

    // Members

    acquire(cancellable?: Cancellable | null): boolean;
    acquire_async(cancellable?: Cancellable | null): Promise<boolean>;
    acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    acquire_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    acquire_finish(result: AsyncResult): boolean;
    get_allowed(): boolean;
    get_can_acquire(): boolean;
    get_can_release(): boolean;
    impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean): void;
    release(cancellable?: Cancellable | null): boolean;
    release_async(cancellable?: Cancellable | null): Promise<boolean>;
    release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    release_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    release_finish(result: AsyncResult): boolean;
    vfunc_acquire(cancellable?: Cancellable | null): boolean;
    vfunc_acquire_async(cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_acquire_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_acquire_finish(result: AsyncResult): boolean;
    vfunc_release(cancellable?: Cancellable | null): boolean;
    vfunc_release_async(cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_release_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_release_finish(result: AsyncResult): boolean;
}
export module PropertyAction {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        enabled: boolean;
        invert_boolean: boolean;
        invertBoolean: boolean;
        name: string;
        object: GObject.Object;
        parameter_type: GLib.VariantType;
        parameterType: GLib.VariantType;
        property_name: string;
        propertyName: string;
        state: GLib.Variant;
        state_type: GLib.VariantType;
        stateType: GLib.VariantType;
    }
}
export class PropertyAction extends GObject.Object implements Action {
    static $gtype: GObject.GType<PropertyAction>;

    constructor(properties?: Partial<PropertyAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PropertyAction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enabled: boolean;
    invert_boolean: boolean;
    invertBoolean: boolean;
    name: string;
    object: GObject.Object;
    parameter_type: GLib.VariantType;
    parameterType: GLib.VariantType;
    property_name: string;
    propertyName: string;
    state: GLib.Variant;
    state_type: GLib.VariantType;
    stateType: GLib.VariantType;

    // Constructors

    static ["new"](name: string, object: GObject.Object, property_name: string): PropertyAction;

    // Implemented Members

    activate(parameter?: GLib.Variant | null): void;
    change_state(value: GLib.Variant): void;
    get_enabled(): boolean;
    get_name(): string;
    get_parameter_type(): GLib.VariantType | null;
    get_state(): GLib.Variant;
    get_state_hint(): GLib.Variant | null;
    get_state_type(): GLib.VariantType | null;
    vfunc_activate(parameter?: GLib.Variant | null): void;
    vfunc_change_state(value: GLib.Variant): void;
    vfunc_get_enabled(): boolean;
    vfunc_get_name(): string;
    vfunc_get_parameter_type(): GLib.VariantType | null;
    vfunc_get_state(): GLib.Variant;
    vfunc_get_state_hint(): GLib.Variant | null;
    vfunc_get_state_type(): GLib.VariantType | null;
}
export module ProxyAddress {
    export interface ConstructorProperties extends InetSocketAddress.ConstructorProperties {
        [key: string]: any;
        destination_hostname: string;
        destinationHostname: string;
        destination_port: number;
        destinationPort: number;
        destination_protocol: string;
        destinationProtocol: string;
        password: string;
        protocol: string;
        uri: string;
        username: string;
    }
}
export class ProxyAddress extends InetSocketAddress implements SocketConnectable {
    static $gtype: GObject.GType<ProxyAddress>;

    constructor(properties?: Partial<ProxyAddress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProxyAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    destination_hostname: string;
    destinationHostname: string;
    destination_port: number;
    destinationPort: number;
    destination_protocol: string;
    destinationProtocol: string;
    password: string;
    protocol: string;
    uri: string;
    username: string;

    // Constructors

    static ["new"](
        inetaddr: InetAddress,
        port: number,
        protocol: string,
        dest_hostname: string,
        dest_port: number,
        username?: string | null,
        password?: string | null
    ): ProxyAddress;
    static ["new"](...args: never[]): never;

    // Members

    get_destination_hostname(): string;
    get_destination_port(): number;
    get_destination_protocol(): string;
    get_password(): string;
    get_protocol(): string;
    get_uri(): string;
    get_username(): string;

    // Implemented Members

    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): SocketAddressEnumerator;
    vfunc_proxy_enumerate(): SocketAddressEnumerator;
    vfunc_to_string(): string;
}
export module ProxyAddressEnumerator {
    export interface ConstructorProperties extends SocketAddressEnumerator.ConstructorProperties {
        [key: string]: any;
        connectable: SocketConnectable;
        default_port: number;
        defaultPort: number;
        proxy_resolver: ProxyResolver;
        proxyResolver: ProxyResolver;
        uri: string;
    }
}
export class ProxyAddressEnumerator extends SocketAddressEnumerator {
    static $gtype: GObject.GType<ProxyAddressEnumerator>;

    constructor(properties?: Partial<ProxyAddressEnumerator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProxyAddressEnumerator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connectable: SocketConnectable;
    default_port: number;
    defaultPort: number;
    proxy_resolver: ProxyResolver;
    proxyResolver: ProxyResolver;
    uri: string;
}
export module Resolver {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Resolver extends GObject.Object {
    static $gtype: GObject.GType<Resolver>;

    constructor(properties?: Partial<Resolver.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Resolver.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ResolverPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "reload", callback: (_source: this) => void): number;
    connect_after(signal: "reload", callback: (_source: this) => void): number;
    emit(signal: "reload"): void;

    // Members

    lookup_by_address(address: InetAddress, cancellable?: Cancellable | null): string;
    lookup_by_address_async(address: InetAddress, cancellable?: Cancellable | null): Promise<string>;
    lookup_by_address_async(
        address: InetAddress,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    lookup_by_address_async(
        address: InetAddress,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    lookup_by_address_finish(result: AsyncResult): string;
    lookup_by_name(hostname: string, cancellable?: Cancellable | null): InetAddress[];
    lookup_by_name_async(hostname: string, cancellable?: Cancellable | null): Promise<InetAddress[]>;
    lookup_by_name_async(
        hostname: string,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    lookup_by_name_async(
        hostname: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<InetAddress[]> | void;
    lookup_by_name_finish(result: AsyncResult): InetAddress[];
    lookup_by_name_with_flags(
        hostname: string,
        flags: ResolverNameLookupFlags,
        cancellable?: Cancellable | null
    ): InetAddress[];
    lookup_by_name_with_flags_async(
        hostname: string,
        flags: ResolverNameLookupFlags,
        cancellable?: Cancellable | null
    ): Promise<InetAddress[]>;
    lookup_by_name_with_flags_async(
        hostname: string,
        flags: ResolverNameLookupFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    lookup_by_name_with_flags_async(
        hostname: string,
        flags: ResolverNameLookupFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<InetAddress[]> | void;
    lookup_by_name_with_flags_finish(result: AsyncResult): InetAddress[];
    lookup_records(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null): GLib.Variant[];
    lookup_records_async(
        rrname: string,
        record_type: ResolverRecordType,
        cancellable?: Cancellable | null
    ): Promise<GLib.Variant[]>;
    lookup_records_async(
        rrname: string,
        record_type: ResolverRecordType,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    lookup_records_async(
        rrname: string,
        record_type: ResolverRecordType,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant[]> | void;
    lookup_records_finish(result: AsyncResult): GLib.Variant[];
    lookup_service(service: string, protocol: string, domain: string, cancellable?: Cancellable | null): SrvTarget[];
    lookup_service_async(
        service: string,
        protocol: string,
        domain: string,
        cancellable?: Cancellable | null
    ): Promise<SrvTarget[]>;
    lookup_service_async(
        service: string,
        protocol: string,
        domain: string,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    lookup_service_async(
        service: string,
        protocol: string,
        domain: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<SrvTarget[]> | void;
    lookup_service_finish(result: AsyncResult): SrvTarget[];
    set_default(): void;
    vfunc_lookup_by_address(address: InetAddress, cancellable?: Cancellable | null): string;
    vfunc_lookup_by_address_async(address: InetAddress, cancellable?: Cancellable | null): Promise<string>;
    vfunc_lookup_by_address_async(
        address: InetAddress,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup_by_address_async(
        address: InetAddress,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    vfunc_lookup_by_address_finish(result: AsyncResult): string;
    vfunc_lookup_by_name(hostname: string, cancellable?: Cancellable | null): InetAddress[];
    vfunc_lookup_by_name_async(hostname: string, cancellable?: Cancellable | null): Promise<InetAddress[]>;
    vfunc_lookup_by_name_async(
        hostname: string,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup_by_name_async(
        hostname: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<InetAddress[]> | void;
    vfunc_lookup_by_name_finish(result: AsyncResult): InetAddress[];
    vfunc_lookup_by_name_with_flags(
        hostname: string,
        flags: ResolverNameLookupFlags,
        cancellable?: Cancellable | null
    ): InetAddress[];
    vfunc_lookup_by_name_with_flags_async(
        hostname: string,
        flags: ResolverNameLookupFlags,
        cancellable?: Cancellable | null
    ): Promise<InetAddress[]>;
    vfunc_lookup_by_name_with_flags_async(
        hostname: string,
        flags: ResolverNameLookupFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup_by_name_with_flags_async(
        hostname: string,
        flags: ResolverNameLookupFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<InetAddress[]> | void;
    vfunc_lookup_by_name_with_flags_finish(result: AsyncResult): InetAddress[];
    vfunc_lookup_records(
        rrname: string,
        record_type: ResolverRecordType,
        cancellable?: Cancellable | null
    ): GLib.Variant[];
    vfunc_lookup_records_async(
        rrname: string,
        record_type: ResolverRecordType,
        cancellable?: Cancellable | null
    ): Promise<GLib.Variant[]>;
    vfunc_lookup_records_async(
        rrname: string,
        record_type: ResolverRecordType,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup_records_async(
        rrname: string,
        record_type: ResolverRecordType,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant[]> | void;
    vfunc_lookup_records_finish(result: AsyncResult): GLib.Variant[];
    vfunc_lookup_service_async(rrname: string, cancellable?: Cancellable | null): Promise<SrvTarget[]>;
    vfunc_lookup_service_async(
        rrname: string,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup_service_async(
        rrname: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<SrvTarget[]> | void;
    vfunc_lookup_service_finish(result: AsyncResult): SrvTarget[];
    vfunc_reload(): void;
    static get_default(): Resolver;
}
export module Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: SettingsBackend;
        delay_apply: boolean;
        delayApply: boolean;
        has_unapplied: boolean;
        hasUnapplied: boolean;
        path: string;
        schema: string;
        schema_id: string;
        schemaId: string;
        settings_schema: SettingsSchema;
        settingsSchema: SettingsSchema;
    }
}
export class Settings extends GObject.Object {
    static $gtype: GObject.GType<Settings>;

    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend: SettingsBackend;
    delay_apply: boolean;
    delayApply: boolean;
    has_unapplied: boolean;
    hasUnapplied: boolean;
    path: string;
    schema: string;
    schema_id: string;
    schemaId: string;
    settings_schema: SettingsSchema;
    settingsSchema: SettingsSchema;

    // Fields
    priv: SettingsPrivate;
    _realInit: (...args: any[]) => any;
    _realMethods: typeof Settings.prototype;
    _keys: string[];
    _children: string[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "change-event",
        callback: (_source: this, keys: GLib.Quark[] | null, n_keys: number) => boolean
    ): number;
    connect_after(
        signal: "change-event",
        callback: (_source: this, keys: GLib.Quark[] | null, n_keys: number) => boolean
    ): number;
    emit(signal: "change-event", keys: GLib.Quark[] | null, n_keys: number): void;
    connect(signal: "changed", callback: (_source: this, key: string) => void): number;
    connect_after(signal: "changed", callback: (_source: this, key: string) => void): number;
    emit(signal: "changed", key: string): void;
    connect(signal: "writable-change-event", callback: (_source: this, key: number) => boolean): number;
    connect_after(signal: "writable-change-event", callback: (_source: this, key: number) => boolean): number;
    emit(signal: "writable-change-event", key: number): void;
    connect(signal: "writable-changed", callback: (_source: this, key: string) => void): number;
    connect_after(signal: "writable-changed", callback: (_source: this, key: string) => void): number;
    emit(signal: "writable-changed", key: string): void;

    // Constructors

    static ["new"](schema_id: string): Settings;
    static new_full(schema: SettingsSchema, backend?: SettingsBackend | null, path?: string | null): Settings;
    static new_with_backend(schema_id: string, backend: SettingsBackend): Settings;
    static new_with_backend_and_path(schema_id: string, backend: SettingsBackend, path: string): Settings;
    static new_with_path(schema_id: string, path: string): Settings;

    // Members

    apply(): void;
    bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags): void;
    bind_writable(key: string, object: GObject.Object, property: string, inverted: boolean): void;
    create_action(key: string): Action;
    delay(): void;
    get_boolean(key: string): boolean;
    get_child(name: string): Settings;
    get_default_value<T extends string = any>(key: string): GLib.Variant<T> | null;
    get_double(key: string): number;
    get_enum(key: string): number;
    get_flags(key: string): number;
    get_has_unapplied(): boolean;
    get_int(key: string): number;
    get_int64(key: string): number;
    get_mapped(key: string, mapping: SettingsGetMapping): any | null;
    get_range(key: string): GLib.Variant;
    get_string(key: string): string;
    get_strv(key: string): string[];
    get_uint(key: string): number;
    get_uint64(key: string): number;
    get_user_value<T extends string = any>(key: string): GLib.Variant<T> | null;
    get_value<T extends string = any>(key: string): GLib.Variant<T>;
    is_writable(name: string): boolean;
    list_children(): string[];
    list_keys(): string[];
    range_check(key: string, value: GLib.Variant): boolean;
    reset(key: string): void;
    revert(): void;
    set_boolean(key: string, value: boolean): boolean;
    set_double(key: string, value: number): boolean;
    set_enum(key: string, value: number): boolean;
    set_flags(key: string, value: number): boolean;
    set_int(key: string, value: number): boolean;
    set_int64(key: string, value: number): boolean;
    set_string(key: string, value: string): boolean;
    set_strv(key: string, value?: string[] | null): boolean;
    set_uint(key: string, value: number): boolean;
    set_uint64(key: string, value: number): boolean;
    set_value(key: string, value: GLib.Variant): boolean;
    vfunc_change_event(keys: GLib.Quark, n_keys: number): boolean;
    vfunc_changed(key: string): void;
    vfunc_writable_change_event(key: GLib.Quark): boolean;
    vfunc_writable_changed(key: string): void;
    static list_relocatable_schemas(): string[];
    static list_schemas(): string[];
    static sync(): void;
    static unbind(object: GObject.Object, property: string): void;
}
export module SettingsBackend {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class SettingsBackend extends GObject.Object {
    static $gtype: GObject.GType<SettingsBackend>;

    constructor(properties?: Partial<SettingsBackend.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingsBackend.ConstructorProperties>, ...args: any[]): void;

    // Members

    changed(key: string, origin_tag?: any | null): void;
    changed_tree(tree: GLib.Tree, origin_tag?: any | null): void;
    keys_changed(path: string, items: string[], origin_tag?: any | null): void;
    path_changed(path: string, origin_tag?: any | null): void;
    path_writable_changed(path: string): void;
    writable_changed(key: string): void;
    vfunc_get_writable(key: string): boolean;
    vfunc_read(key: string, expected_type: GLib.VariantType, default_value: boolean): GLib.Variant;
    vfunc_read_user_value(key: string, expected_type: GLib.VariantType): GLib.Variant;
    vfunc_reset(key: string, origin_tag?: any | null): void;
    vfunc_subscribe(name: string): void;
    vfunc_sync(): void;
    vfunc_unsubscribe(name: string): void;
    vfunc_write(key: string, value: GLib.Variant, origin_tag?: any | null): boolean;
    vfunc_write_tree(tree: GLib.Tree, origin_tag?: any | null): boolean;
    static flatten_tree(tree: GLib.Tree): [string, string[], GLib.Variant[] | null];
    static get_default(): SettingsBackend;
}
export module SimpleAction {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        enabled: boolean;
        name: string;
        parameter_type: GLib.VariantType;
        parameterType: GLib.VariantType;
        state: GLib.Variant;
        state_type: GLib.VariantType;
        stateType: GLib.VariantType;
    }
}
export class SimpleAction extends GObject.Object implements Action {
    static $gtype: GObject.GType<SimpleAction>;

    constructor(properties?: Partial<SimpleAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleAction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enabled: boolean;
    name: string;
    parameter_type: GLib.VariantType;
    parameterType: GLib.VariantType;
    state: GLib.Variant;
    state_type: GLib.VariantType;
    stateType: GLib.VariantType;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this, parameter: GLib.Variant | null) => void): number;
    connect_after(signal: "activate", callback: (_source: this, parameter: GLib.Variant | null) => void): number;
    emit(signal: "activate", parameter: GLib.Variant | null): void;
    connect(signal: "change-state", callback: (_source: this, value: GLib.Variant | null) => void): number;
    connect_after(signal: "change-state", callback: (_source: this, value: GLib.Variant | null) => void): number;
    emit(signal: "change-state", value: GLib.Variant | null): void;

    // Constructors

    static ["new"](name: string, parameter_type?: GLib.VariantType | null): SimpleAction;
    static new_stateful(name: string, parameter_type: GLib.VariantType | null, state: GLib.Variant): SimpleAction;

    // Members

    set_enabled(enabled: boolean): void;
    set_state(value: GLib.Variant): void;
    set_state_hint(state_hint?: GLib.Variant | null): void;

    // Implemented Members

    activate(parameter?: GLib.Variant | null): void;
    change_state(value: GLib.Variant): void;
    get_enabled(): boolean;
    get_name(): string;
    get_parameter_type(): GLib.VariantType | null;
    get_state(): GLib.Variant;
    get_state_hint(): GLib.Variant | null;
    get_state_type(): GLib.VariantType | null;
    vfunc_activate(parameter?: GLib.Variant | null): void;
    vfunc_change_state(value: GLib.Variant): void;
    vfunc_get_enabled(): boolean;
    vfunc_get_name(): string;
    vfunc_get_parameter_type(): GLib.VariantType | null;
    vfunc_get_state(): GLib.Variant;
    vfunc_get_state_hint(): GLib.Variant | null;
    vfunc_get_state_type(): GLib.VariantType | null;
}
export module SimpleActionGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimpleActionGroup extends GObject.Object implements ActionGroup, ActionMap {
    static $gtype: GObject.GType<SimpleActionGroup>;

    constructor(properties?: Partial<SimpleActionGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleActionGroup.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SimpleActionGroup;

    // Members

    add_entries(entries: ActionEntry[], user_data?: any | null): void;
    insert(action: Action): void;
    lookup(action_name: string): Action;
    remove(action_name: string): void;

    // Implemented Members

    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    add_action(action: Action): void;
    add_action_entries(entries: ActionEntry[], user_data?: any | null): void;
    lookup_action(action_name: string): Action;
    remove_action(action_name: string): void;
    vfunc_add_action(action: Action): void;
    vfunc_lookup_action(action_name: string): Action;
    vfunc_remove_action(action_name: string): void;
}
export module SimpleAsyncResult {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimpleAsyncResult extends GObject.Object implements AsyncResult {
    static $gtype: GObject.GType<SimpleAsyncResult>;

    constructor(properties?: Partial<SimpleAsyncResult.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleAsyncResult.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        source_object?: GObject.Object | null,
        callback?: AsyncReadyCallback | null,
        source_tag?: any | null
    ): SimpleAsyncResult;
    static new_from_error(
        source_object: GObject.Object | null,
        callback: AsyncReadyCallback | null,
        error: GLib.Error
    ): SimpleAsyncResult;

    // Members

    complete(): void;
    complete_in_idle(): void;
    get_op_res_gboolean(): boolean;
    get_op_res_gssize(): number;
    propagate_error(): boolean;
    set_check_cancellable(check_cancellable?: Cancellable | null): void;
    set_from_error(error: GLib.Error): void;
    set_handle_cancellation(handle_cancellation: boolean): void;
    set_op_res_gboolean(op_res: boolean): void;
    set_op_res_gssize(op_res: number): void;
    static is_valid(result: AsyncResult, source?: GObject.Object | null, source_tag?: any | null): boolean;

    // Implemented Members

    get_source_object<T = GObject.Object>(): T;
    get_user_data(): any | null;
    is_tagged(source_tag?: any | null): boolean;
    legacy_propagate_error(): boolean;
    vfunc_get_source_object<T = GObject.Object>(): T;
    vfunc_get_user_data(): any | null;
    vfunc_is_tagged(source_tag?: any | null): boolean;
}
export module SimpleIOStream {
    export interface ConstructorProperties extends IOStream.ConstructorProperties {
        [key: string]: any;
        input_stream: InputStream;
        inputStream: InputStream;
        output_stream: OutputStream;
        outputStream: OutputStream;
    }
}
export class SimpleIOStream extends IOStream {
    static $gtype: GObject.GType<SimpleIOStream>;

    constructor(properties?: Partial<SimpleIOStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleIOStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    input_stream: InputStream;
    inputStream: InputStream;
    output_stream: OutputStream;
    outputStream: OutputStream;

    // Constructors

    static ["new"](input_stream: InputStream, output_stream: OutputStream): SimpleIOStream;
}
export module SimplePermission {
    export interface ConstructorProperties extends Permission.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimplePermission extends Permission {
    static $gtype: GObject.GType<SimplePermission>;

    constructor(properties?: Partial<SimplePermission.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimplePermission.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](allowed: boolean): SimplePermission;
}
export module SimpleProxyResolver {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        default_proxy: string;
        defaultProxy: string;
        ignore_hosts: string[];
        ignoreHosts: string[];
    }
}
export class SimpleProxyResolver extends GObject.Object implements ProxyResolver {
    static $gtype: GObject.GType<SimpleProxyResolver>;

    constructor(properties?: Partial<SimpleProxyResolver.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleProxyResolver.ConstructorProperties>, ...args: any[]): void;

    // Properties
    default_proxy: string;
    defaultProxy: string;
    ignore_hosts: string[];
    ignoreHosts: string[];

    // Members

    set_default_proxy(default_proxy: string): void;
    set_ignore_hosts(ignore_hosts: string): void;
    set_uri_proxy(uri_scheme: string, proxy: string): void;
    static new(default_proxy?: string | null, ignore_hosts?: string | null): ProxyResolver;

    // Implemented Members

    is_supported(): boolean;
    lookup(uri: string, cancellable?: Cancellable | null): string[];
    lookup_async(uri: string, cancellable?: Cancellable | null): Promise<string[]>;
    lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    lookup_async(
        uri: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<string[]> | void;
    lookup_finish(result: AsyncResult): string[];
    vfunc_is_supported(): boolean;
    vfunc_lookup(uri: string, cancellable?: Cancellable | null): string[];
    vfunc_lookup_async(uri: string, cancellable?: Cancellable | null): Promise<string[]>;
    vfunc_lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_lookup_async(
        uri: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<string[]> | void;
    vfunc_lookup_finish(result: AsyncResult): string[];
}
export module Socket {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        blocking: boolean;
        broadcast: boolean;
        family: SocketFamily;
        fd: number;
        keepalive: boolean;
        listen_backlog: number;
        listenBacklog: number;
        local_address: SocketAddress;
        localAddress: SocketAddress;
        multicast_loopback: boolean;
        multicastLoopback: boolean;
        multicast_ttl: number;
        multicastTtl: number;
        protocol: SocketProtocol;
        remote_address: SocketAddress;
        remoteAddress: SocketAddress;
        timeout: number;
        ttl: number;
        type: SocketType;
    }
}
export class Socket extends GObject.Object implements DatagramBased, Initable {
    static $gtype: GObject.GType<Socket>;

    constructor(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]): void;

    // Properties
    blocking: boolean;
    broadcast: boolean;
    family: SocketFamily;
    fd: number;
    keepalive: boolean;
    listen_backlog: number;
    listenBacklog: number;
    local_address: SocketAddress;
    localAddress: SocketAddress;
    multicast_loopback: boolean;
    multicastLoopback: boolean;
    multicast_ttl: number;
    multicastTtl: number;
    protocol: SocketProtocol;
    remote_address: SocketAddress;
    remoteAddress: SocketAddress;
    timeout: number;
    ttl: number;
    type: SocketType;

    // Fields
    priv: SocketPrivate;

    // Constructors

    static ["new"](family: SocketFamily, type: SocketType, protocol: SocketProtocol): Socket;
    static new_from_fd(fd: number): Socket;

    // Members

    accept(cancellable?: Cancellable | null): Socket;
    bind(address: SocketAddress, allow_reuse: boolean): boolean;
    check_connect_result(): boolean;
    close(): boolean;
    condition_check(condition: GLib.IOCondition): GLib.IOCondition;
    condition_timed_wait(condition: GLib.IOCondition, timeout_us: number, cancellable?: Cancellable | null): boolean;
    condition_wait(condition: GLib.IOCondition, cancellable?: Cancellable | null): boolean;
    condition_wait(...args: never[]): never;
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean;
    connect(...args: never[]): never;
    connection_factory_create_connection(): SocketConnection;
    get_available_bytes(): number;
    get_blocking(): boolean;
    get_broadcast(): boolean;
    get_credentials(): Credentials;
    get_family(): SocketFamily;
    get_fd(): number;
    get_keepalive(): boolean;
    get_listen_backlog(): number;
    get_local_address(): SocketAddress;
    get_multicast_loopback(): boolean;
    get_multicast_ttl(): number;
    get_option(level: number, optname: number): [boolean, number];
    get_protocol(): SocketProtocol;
    get_remote_address(): SocketAddress;
    get_socket_type(): SocketType;
    get_timeout(): number;
    get_ttl(): number;
    is_closed(): boolean;
    is_connected(): boolean;
    join_multicast_group(group: InetAddress, source_specific: boolean, iface?: string | null): boolean;
    join_multicast_group_ssm(group: InetAddress, source_specific?: InetAddress | null, iface?: string | null): boolean;
    leave_multicast_group(group: InetAddress, source_specific: boolean, iface?: string | null): boolean;
    leave_multicast_group_ssm(group: InetAddress, source_specific?: InetAddress | null, iface?: string | null): boolean;
    listen(): boolean;
    receive(cancellable?: Cancellable | null): [number, Uint8Array];
    receive_from(cancellable?: Cancellable | null): [number, SocketAddress | null, Uint8Array];
    receive_message(
        vectors: InputVector[],
        flags: number,
        cancellable?: Cancellable | null
    ): [number, SocketAddress | null, SocketControlMessage[] | null, number];
    receive_messages(messages: InputMessage[], flags: number, cancellable?: Cancellable | null): number;
    receive_messages(...args: never[]): never;
    receive_with_blocking(blocking: boolean, cancellable?: Cancellable | null): [number, Uint8Array];
    send(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    send_message(
        address: SocketAddress | null,
        vectors: OutputVector[],
        messages: SocketControlMessage[] | null,
        flags: number,
        cancellable?: Cancellable | null
    ): number;
    send_message_with_timeout(
        address: SocketAddress | null,
        vectors: OutputVector[],
        messages: SocketControlMessage[] | null,
        flags: number,
        timeout_us: number,
        cancellable?: Cancellable | null
    ): [PollableReturn, number | null];
    send_messages(messages: OutputMessage[], flags: number, cancellable?: Cancellable | null): number;
    send_messages(...args: never[]): never;
    send_to(address: SocketAddress | null, buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    send_with_blocking(buffer: Uint8Array | string, blocking: boolean, cancellable?: Cancellable | null): number;
    set_blocking(blocking: boolean): void;
    set_broadcast(broadcast: boolean): void;
    set_keepalive(keepalive: boolean): void;
    set_listen_backlog(backlog: number): void;
    set_multicast_loopback(loopback: boolean): void;
    set_multicast_ttl(ttl: number): void;
    set_option(level: number, optname: number, value: number): boolean;
    set_timeout(timeout: number): void;
    set_ttl(ttl: number): void;
    shutdown(shutdown_read: boolean, shutdown_write: boolean): boolean;
    speaks_ipv4(): boolean;

    // Implemented Members

    create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source;
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition;
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean;
    vfunc_create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source;
    vfunc_receive_messages(
        messages: InputMessage[],
        flags: number,
        timeout: number,
        cancellable?: Cancellable | null
    ): number;
    vfunc_send_messages(
        messages: OutputMessage[],
        flags: number,
        timeout: number,
        cancellable?: Cancellable | null
    ): number;
    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}
export module SocketAddress {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        family: SocketFamily;
    }
}
export abstract class SocketAddress extends GObject.Object implements SocketConnectable {
    static $gtype: GObject.GType<SocketAddress>;

    constructor(properties?: Partial<SocketAddress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SocketAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    family: SocketFamily;

    // Constructors

    static new_from_native(_native: any, len: number): SocketAddress;

    // Members

    get_family(): SocketFamily;
    get_native_size(): number;
    to_native(dest: any | null, destlen: number): boolean;
    vfunc_get_family(): SocketFamily;
    vfunc_get_native_size(): number;
    vfunc_to_native(dest: any | null, destlen: number): boolean;

    // Implemented Members

    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): SocketAddressEnumerator;
    vfunc_proxy_enumerate(): SocketAddressEnumerator;
    vfunc_to_string(): string;
}
export module SocketAddressEnumerator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class SocketAddressEnumerator extends GObject.Object {
    static $gtype: GObject.GType<SocketAddressEnumerator>;

    constructor(properties?: Partial<SocketAddressEnumerator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SocketAddressEnumerator.ConstructorProperties>, ...args: any[]): void;

    // Members

    next(cancellable?: Cancellable | null): SocketAddress;
    next_async(cancellable?: Cancellable | null): Promise<SocketAddress>;
    next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    next_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<SocketAddress> | void;
    next_finish(result: AsyncResult): SocketAddress;
    vfunc_next(cancellable?: Cancellable | null): SocketAddress;
    vfunc_next_async(cancellable?: Cancellable | null): Promise<SocketAddress>;
    vfunc_next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_next_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<SocketAddress> | void;
    vfunc_next_finish(result: AsyncResult): SocketAddress;
}
export module SocketClient {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        enable_proxy: boolean;
        enableProxy: boolean;
        family: SocketFamily;
        local_address: SocketAddress;
        localAddress: SocketAddress;
        protocol: SocketProtocol;
        proxy_resolver: ProxyResolver;
        proxyResolver: ProxyResolver;
        timeout: number;
        tls: boolean;
        tls_validation_flags: TlsCertificateFlags;
        tlsValidationFlags: TlsCertificateFlags;
        type: SocketType;
    }
}
export class SocketClient extends GObject.Object {
    static $gtype: GObject.GType<SocketClient>;

    constructor(properties?: Partial<SocketClient.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SocketClient.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enable_proxy: boolean;
    enableProxy: boolean;
    family: SocketFamily;
    local_address: SocketAddress;
    localAddress: SocketAddress;
    protocol: SocketProtocol;
    proxy_resolver: ProxyResolver;
    proxyResolver: ProxyResolver;
    timeout: number;
    tls: boolean;
    tls_validation_flags: TlsCertificateFlags;
    tlsValidationFlags: TlsCertificateFlags;
    type: SocketType;

    // Fields
    priv: SocketClientPrivate;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect_after(
        signal: "event",
        callback: (
            _source: this,
            event: SocketClientEvent,
            connectable: SocketConnectable,
            connection: IOStream | null
        ) => void
    ): number;
    emit(signal: "event", event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream | null): void;

    // Constructors

    static ["new"](): SocketClient;

    // Members

    add_application_proxy(protocol: string): void;
    connect(connectable: SocketConnectable, cancellable?: Cancellable | null): SocketConnection;
    connect(...args: never[]): never;
    connect_async(connectable: SocketConnectable, cancellable?: Cancellable | null): Promise<SocketConnection>;
    connect_async(
        connectable: SocketConnectable,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    connect_async(
        connectable: SocketConnectable,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<SocketConnection> | void;
    connect_finish(result: AsyncResult): SocketConnection;
    connect_to_host(host_and_port: string, default_port: number, cancellable?: Cancellable | null): SocketConnection;
    connect_to_host_async(
        host_and_port: string,
        default_port: number,
        cancellable?: Cancellable | null
    ): Promise<SocketConnection>;
    connect_to_host_async(
        host_and_port: string,
        default_port: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    connect_to_host_async(
        host_and_port: string,
        default_port: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<SocketConnection> | void;
    connect_to_host_finish(result: AsyncResult): SocketConnection;
    connect_to_service(domain: string, service: string, cancellable?: Cancellable | null): SocketConnection;
    connect_to_service_async(
        domain: string,
        service: string,
        cancellable?: Cancellable | null
    ): Promise<SocketConnection>;
    connect_to_service_async(
        domain: string,
        service: string,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    connect_to_service_async(
        domain: string,
        service: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<SocketConnection> | void;
    connect_to_service_finish(result: AsyncResult): SocketConnection;
    connect_to_uri(uri: string, default_port: number, cancellable?: Cancellable | null): SocketConnection;
    connect_to_uri_async(
        uri: string,
        default_port: number,
        cancellable?: Cancellable | null
    ): Promise<SocketConnection>;
    connect_to_uri_async(
        uri: string,
        default_port: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    connect_to_uri_async(
        uri: string,
        default_port: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<SocketConnection> | void;
    connect_to_uri_finish(result: AsyncResult): SocketConnection;
    get_enable_proxy(): boolean;
    get_family(): SocketFamily;
    get_local_address(): SocketAddress;
    get_protocol(): SocketProtocol;
    get_proxy_resolver(): ProxyResolver;
    get_socket_type(): SocketType;
    get_timeout(): number;
    get_tls(): boolean;
    get_tls_validation_flags(): TlsCertificateFlags;
    set_enable_proxy(enable: boolean): void;
    set_family(family: SocketFamily): void;
    set_local_address(address?: SocketAddress | null): void;
    set_protocol(protocol: SocketProtocol): void;
    set_proxy_resolver(proxy_resolver?: ProxyResolver | null): void;
    set_socket_type(type: SocketType): void;
    set_timeout(timeout: number): void;
    set_tls(tls: boolean): void;
    set_tls_validation_flags(flags: TlsCertificateFlags): void;
    vfunc_event(event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void;
}
export module SocketConnection {
    export interface ConstructorProperties extends IOStream.ConstructorProperties {
        [key: string]: any;
        socket: Socket;
    }
}
export class SocketConnection extends IOStream {
    static $gtype: GObject.GType<SocketConnection>;

    constructor(properties?: Partial<SocketConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SocketConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    socket: Socket;

    // Fields
    priv: SocketConnectionPrivate;

    // Members

    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean;
    connect(...args: never[]): never;
    connect_async(address: SocketAddress, cancellable?: Cancellable | null): Promise<boolean>;
    connect_async(
        address: SocketAddress,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    connect_async(
        address: SocketAddress,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    connect_finish(result: AsyncResult): boolean;
    get_local_address(): SocketAddress;
    get_remote_address(): SocketAddress;
    get_socket(): Socket;
    is_connected(): boolean;
    static factory_lookup_type(family: SocketFamily, type: SocketType, protocol_id: number): GObject.GType;
    static factory_register_type(g_type: GObject.GType, family: SocketFamily, type: SocketType, protocol: number): void;
}
export module SocketControlMessage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class SocketControlMessage extends GObject.Object {
    static $gtype: GObject.GType<SocketControlMessage>;

    constructor(properties?: Partial<SocketControlMessage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SocketControlMessage.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SocketControlMessagePrivate;

    // Members

    get_level(): number;
    get_msg_type(): number;
    get_size(): number;
    serialize(data: any): void;
    vfunc_get_level(): number;
    vfunc_get_size(): number;
    vfunc_get_type(): number;
    vfunc_serialize(data: any): void;
    static deserialize(level: number, type: number, data: Uint8Array | string): SocketControlMessage;
}
export module SocketListener {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        listen_backlog: number;
        listenBacklog: number;
    }
}
export class SocketListener extends GObject.Object {
    static $gtype: GObject.GType<SocketListener>;

    constructor(properties?: Partial<SocketListener.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SocketListener.ConstructorProperties>, ...args: any[]): void;

    // Properties
    listen_backlog: number;
    listenBacklog: number;

    // Fields
    priv: SocketListenerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "event", callback: (_source: this, event: SocketListenerEvent, socket: Socket) => void): number;
    connect_after(
        signal: "event",
        callback: (_source: this, event: SocketListenerEvent, socket: Socket) => void
    ): number;
    emit(signal: "event", event: SocketListenerEvent, socket: Socket): void;

    // Constructors

    static ["new"](): SocketListener;

    // Members

    accept(cancellable?: Cancellable | null): [SocketConnection, GObject.Object | null];
    accept_async(cancellable?: Cancellable | null): Promise<[SocketConnection, GObject.Object | null]>;
    accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    accept_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[SocketConnection, GObject.Object | null]> | void;
    accept_finish(result: AsyncResult): [SocketConnection, GObject.Object | null];
    accept_socket(cancellable?: Cancellable | null): [Socket, GObject.Object | null];
    accept_socket_async(cancellable?: Cancellable | null): Promise<[Socket, GObject.Object | null]>;
    accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    accept_socket_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[Socket, GObject.Object | null]> | void;
    accept_socket_finish(result: AsyncResult): [Socket, GObject.Object | null];
    add_address(
        address: SocketAddress,
        type: SocketType,
        protocol: SocketProtocol,
        source_object?: GObject.Object | null
    ): [boolean, SocketAddress | null];
    add_any_inet_port(source_object?: GObject.Object | null): number;
    add_inet_port(port: number, source_object?: GObject.Object | null): boolean;
    add_socket(socket: Socket, source_object?: GObject.Object | null): boolean;
    close(): void;
    set_backlog(listen_backlog: number): void;
    vfunc_changed(): void;
    vfunc_event(event: SocketListenerEvent, socket: Socket): void;
}
export module SocketService {
    export interface ConstructorProperties extends SocketListener.ConstructorProperties {
        [key: string]: any;
        active: boolean;
    }
}
export class SocketService extends SocketListener {
    static $gtype: GObject.GType<SocketService>;

    constructor(properties?: Partial<SocketService.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SocketService.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active: boolean;

    // Fields
    priv: SocketServicePrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "incoming",
        callback: (_source: this, connection: SocketConnection, source_object: GObject.Object | null) => boolean
    ): number;
    connect_after(
        signal: "incoming",
        callback: (_source: this, connection: SocketConnection, source_object: GObject.Object | null) => boolean
    ): number;
    emit(signal: "incoming", connection: SocketConnection, source_object: GObject.Object | null): void;

    // Constructors

    static ["new"](): SocketService;

    // Members

    is_active(): boolean;
    start(): void;
    stop(): void;
    vfunc_incoming(connection: SocketConnection, source_object: GObject.Object): boolean;
}
export module Subprocess {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        argv: string[];
        flags: SubprocessFlags;
    }
}
export class Subprocess extends GObject.Object implements Initable {
    static $gtype: GObject.GType<Subprocess>;

    constructor(properties?: Partial<Subprocess.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Subprocess.ConstructorProperties>, ...args: any[]): void;

    // Properties
    argv: string[];
    flags: SubprocessFlags;

    // Constructors

    static ["new"](argv: string[], flags: SubprocessFlags): Subprocess;

    // Members

    communicate(
        stdin_buf?: GLib.Bytes | null,
        cancellable?: Cancellable | null
    ): [boolean, GLib.Bytes | null, GLib.Bytes | null];
    communicate_async(
        stdin_buf?: GLib.Bytes | null,
        cancellable?: Cancellable | null
    ): Promise<[GLib.Bytes | null, GLib.Bytes | null]>;
    communicate_async(
        stdin_buf: GLib.Bytes | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    communicate_async(
        stdin_buf?: GLib.Bytes | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[GLib.Bytes | null, GLib.Bytes | null]> | void;
    communicate_finish(result: AsyncResult): [boolean, GLib.Bytes | null, GLib.Bytes | null];
    communicate_utf8(
        stdin_buf?: string | null,
        cancellable?: Cancellable | null
    ): [boolean, string | null, string | null];
    communicate_utf8_async(
        stdin_buf?: string | null,
        cancellable?: Cancellable | null
    ): Promise<[string | null, string | null]>;
    communicate_utf8_async(
        stdin_buf: string | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    communicate_utf8_async(
        stdin_buf?: string | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[string | null, string | null]> | void;
    communicate_utf8_finish(result: AsyncResult): [boolean, string | null, string | null];
    force_exit(): void;
    get_exit_status(): number;
    get_identifier(): string | null;
    get_if_exited(): boolean;
    get_if_signaled(): boolean;
    get_status(): number;
    get_stderr_pipe(): InputStream;
    get_stdin_pipe(): OutputStream;
    get_stdout_pipe(): InputStream;
    get_successful(): boolean;
    get_term_sig(): number;
    send_signal(signal_num: number): void;
    wait(cancellable?: Cancellable | null): boolean;
    wait_async(cancellable?: Cancellable | null): Promise<boolean>;
    wait_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    wait_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback<this> | null): Promise<boolean> | void;
    wait_check(cancellable?: Cancellable | null): boolean;
    wait_check_async(cancellable?: Cancellable | null): Promise<boolean>;
    wait_check_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    wait_check_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    wait_check_finish(result: AsyncResult): boolean;
    wait_finish(result: AsyncResult): boolean;

    // Implemented Members

    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}
export module SubprocessLauncher {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        flags: SubprocessFlags;
    }
}
export class SubprocessLauncher extends GObject.Object {
    static $gtype: GObject.GType<SubprocessLauncher>;

    constructor(properties?: Partial<SubprocessLauncher.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SubprocessLauncher.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: SubprocessFlags;

    // Constructors

    static ["new"](flags: SubprocessFlags): SubprocessLauncher;

    // Members

    getenv(variable: string): string;
    set_cwd(cwd: string): void;
    set_environ(env: string[]): void;
    set_flags(flags: SubprocessFlags): void;
    set_stderr_file_path(path?: string | null): void;
    set_stdin_file_path(path: string): void;
    set_stdout_file_path(path?: string | null): void;
    setenv(variable: string, value: string, overwrite: boolean): void;
    spawnv(argv: string[]): Subprocess;
    take_fd(source_fd: number, target_fd: number): void;
    take_stderr_fd(fd: number): void;
    take_stdin_fd(fd: number): void;
    take_stdout_fd(fd: number): void;
    unsetenv(variable: string): void;
}
export module Task {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        completed: boolean;
    }
}
export class Task extends GObject.Object implements AsyncResult {
    static $gtype: GObject.GType<Task>;

    constructor(properties?: Partial<Task.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Task.ConstructorProperties>, ...args: any[]): void;

    // Properties
    completed: boolean;

    // Constructors

    static ["new"](
        source_object?: GObject.Object | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback | null
    ): Task;

    // Members

    get_cancellable(): Cancellable;
    get_check_cancellable(): boolean;
    get_completed(): boolean;
    get_context(): GLib.MainContext;
    get_name(): string | null;
    get_priority(): number;
    get_return_on_cancel(): boolean;
    get_source_object<T = GObject.Object>(): T;
    get_source_tag(): any | null;
    get_task_data(): any | null;
    had_error(): boolean;
    propagate_boolean(): boolean;
    propagate_int(): number;
    propagate_pointer(): any | null;
    propagate_value(): [boolean, unknown];
    return_boolean(result: boolean): void;
    return_error(error: GLib.Error): void;
    return_error_if_cancelled(): boolean;
    return_int(result: number): void;
    return_pointer(result?: any | null, result_destroy?: GLib.DestroyNotify | null): void;
    return_value(result?: GObject.Value | null): void;
    run_in_thread(task_func: TaskThreadFunc): void;
    run_in_thread_sync(task_func: TaskThreadFunc): void;
    set_check_cancellable(check_cancellable: boolean): void;
    set_name(name?: string | null): void;
    set_priority(priority: number): void;
    set_return_on_cancel(return_on_cancel: boolean): boolean;
    set_source_tag(source_tag?: any | null): void;
    set_task_data(task_data?: any | null, task_data_destroy?: GLib.DestroyNotify | null): void;
    static is_valid(result: AsyncResult, source_object?: GObject.Object | null): boolean;
    static report_error(
        source_object: GObject.Object | null,
        callback: AsyncReadyCallback<Task> | null,
        source_tag: any | null,
        error: GLib.Error
    ): void;

    // Implemented Members

    get_user_data(): any | null;
    is_tagged(source_tag?: any | null): boolean;
    legacy_propagate_error(): boolean;
    vfunc_get_source_object<T = GObject.Object>(): T;
    vfunc_get_user_data(): any | null;
    vfunc_is_tagged(source_tag?: any | null): boolean;
}
export module TcpConnection {
    export interface ConstructorProperties extends SocketConnection.ConstructorProperties {
        [key: string]: any;
        graceful_disconnect: boolean;
        gracefulDisconnect: boolean;
    }
}
export class TcpConnection extends SocketConnection {
    static $gtype: GObject.GType<TcpConnection>;

    constructor(properties?: Partial<TcpConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TcpConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    graceful_disconnect: boolean;
    gracefulDisconnect: boolean;

    // Fields
    priv: TcpConnectionPrivate | any;

    // Members

    get_graceful_disconnect(): boolean;
    set_graceful_disconnect(graceful_disconnect: boolean): void;
}
export module TcpWrapperConnection {
    export interface ConstructorProperties extends TcpConnection.ConstructorProperties {
        [key: string]: any;
        base_io_stream: IOStream;
        baseIoStream: IOStream;
    }
}
export class TcpWrapperConnection extends TcpConnection {
    static $gtype: GObject.GType<TcpWrapperConnection>;

    constructor(properties?: Partial<TcpWrapperConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TcpWrapperConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_io_stream: IOStream;
    baseIoStream: IOStream;

    // Fields
    priv: TcpWrapperConnectionPrivate | any;

    // Constructors

    static ["new"](base_io_stream: IOStream, socket: Socket): TcpWrapperConnection;

    // Members

    get_base_io_stream(): IOStream;
}
export module TestDBus {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        flags: TestDBusFlags;
    }
}
export class TestDBus extends GObject.Object {
    static $gtype: GObject.GType<TestDBus>;

    constructor(properties?: Partial<TestDBus.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TestDBus.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: TestDBusFlags;

    // Constructors

    static ["new"](flags: TestDBusFlags): TestDBus;

    // Members

    add_service_dir(path: string): void;
    down(): void;
    get_bus_address(): string | null;
    get_flags(): TestDBusFlags;
    stop(): void;
    up(): void;
    static unset(): void;
}
export module ThemedIcon {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        name: string;
        names: string[];
        use_default_fallbacks: boolean;
        useDefaultFallbacks: boolean;
    }
}
export class ThemedIcon extends GObject.Object implements Icon {
    static $gtype: GObject.GType<ThemedIcon>;

    constructor(properties?: Partial<ThemedIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThemedIcon.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    names: string[];
    use_default_fallbacks: boolean;
    useDefaultFallbacks: boolean;

    // Constructors

    static ["new"](iconname: string): ThemedIcon;
    static new_from_names(iconnames: string[]): ThemedIcon;
    static new_with_default_fallbacks(iconname: string): ThemedIcon;

    // Members

    append_name(iconname: string): void;
    get_names(): string[];
    prepend_name(iconname: string): void;

    // Implemented Members

    equal(icon2?: Icon | null): boolean;
    serialize(): GLib.Variant;
    to_string(): string | null;
    vfunc_equal(icon2?: Icon | null): boolean;
    vfunc_hash(): number;
    vfunc_serialize(): GLib.Variant;
}
export module ThreadedSocketService {
    export interface ConstructorProperties extends SocketService.ConstructorProperties {
        [key: string]: any;
        max_threads: number;
        maxThreads: number;
    }
}
export class ThreadedSocketService extends SocketService {
    static $gtype: GObject.GType<ThreadedSocketService>;

    constructor(properties?: Partial<ThreadedSocketService.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThreadedSocketService.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_threads: number;
    maxThreads: number;

    // Fields
    priv: ThreadedSocketServicePrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "run",
        callback: (_source: this, connection: SocketConnection, source_object: GObject.Object | null) => boolean
    ): number;
    connect_after(
        signal: "run",
        callback: (_source: this, connection: SocketConnection, source_object: GObject.Object | null) => boolean
    ): number;
    emit(signal: "run", connection: SocketConnection, source_object: GObject.Object | null): void;

    // Constructors

    static ["new"](max_threads: number): ThreadedSocketService;
    static ["new"](...args: never[]): never;

    // Members

    vfunc_run(connection: SocketConnection, source_object: GObject.Object): boolean;
}
export module TlsCertificate {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        certificate: Uint8Array;
        certificate_pem: string;
        certificatePem: string;
        issuer: TlsCertificate;
        private_key: Uint8Array;
        privateKey: Uint8Array;
        private_key_pem: string;
        privateKeyPem: string;
    }
}
export abstract class TlsCertificate extends GObject.Object {
    static $gtype: GObject.GType<TlsCertificate>;

    constructor(properties?: Partial<TlsCertificate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TlsCertificate.ConstructorProperties>, ...args: any[]): void;

    // Properties
    certificate: Uint8Array;
    certificate_pem: string;
    certificatePem: string;
    issuer: TlsCertificate;
    private_key: Uint8Array;
    privateKey: Uint8Array;
    private_key_pem: string;
    privateKeyPem: string;

    // Fields
    priv: TlsCertificatePrivate;

    // Constructors

    static new_from_file(file: string): TlsCertificate;
    static new_from_files(cert_file: string, key_file: string): TlsCertificate;
    static new_from_pem(data: string, length: number): TlsCertificate;

    // Members

    get_issuer(): TlsCertificate;
    is_same(cert_two: TlsCertificate): boolean;
    verify(identity?: SocketConnectable | null, trusted_ca?: TlsCertificate | null): TlsCertificateFlags;
    vfunc_verify(identity?: SocketConnectable | null, trusted_ca?: TlsCertificate | null): TlsCertificateFlags;
    static list_new_from_file(file: string): TlsCertificate[];
}
export module TlsConnection {
    export interface ConstructorProperties extends IOStream.ConstructorProperties {
        [key: string]: any;
        advertised_protocols: string[];
        advertisedProtocols: string[];
        base_io_stream: IOStream;
        baseIoStream: IOStream;
        certificate: TlsCertificate;
        database: TlsDatabase;
        interaction: TlsInteraction;
        negotiated_protocol: string;
        negotiatedProtocol: string;
        peer_certificate: TlsCertificate;
        peerCertificate: TlsCertificate;
        peer_certificate_errors: TlsCertificateFlags;
        peerCertificateErrors: TlsCertificateFlags;
        rehandshake_mode: TlsRehandshakeMode;
        rehandshakeMode: TlsRehandshakeMode;
        require_close_notify: boolean;
        requireCloseNotify: boolean;
        use_system_certdb: boolean;
        useSystemCertdb: boolean;
    }
}
export abstract class TlsConnection extends IOStream {
    static $gtype: GObject.GType<TlsConnection>;

    constructor(properties?: Partial<TlsConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TlsConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    advertised_protocols: string[];
    advertisedProtocols: string[];
    base_io_stream: IOStream;
    baseIoStream: IOStream;
    certificate: TlsCertificate;
    database: TlsDatabase;
    interaction: TlsInteraction;
    negotiated_protocol: string;
    negotiatedProtocol: string;
    peer_certificate: TlsCertificate;
    peerCertificate: TlsCertificate;
    peer_certificate_errors: TlsCertificateFlags;
    peerCertificateErrors: TlsCertificateFlags;
    rehandshake_mode: TlsRehandshakeMode;
    rehandshakeMode: TlsRehandshakeMode;
    require_close_notify: boolean;
    requireCloseNotify: boolean;
    use_system_certdb: boolean;
    useSystemCertdb: boolean;

    // Fields
    priv: TlsConnectionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "accept-certificate",
        callback: (_source: this, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean
    ): number;
    connect_after(
        signal: "accept-certificate",
        callback: (_source: this, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean
    ): number;
    emit(signal: "accept-certificate", peer_cert: TlsCertificate, errors: TlsCertificateFlags): void;

    // Members

    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
    get_certificate(): TlsCertificate | null;
    get_channel_binding_data(type: TlsChannelBindingType): [boolean, Uint8Array | null];
    get_database(): TlsDatabase | null;
    get_interaction(): TlsInteraction | null;
    get_negotiated_protocol(): string | null;
    get_peer_certificate(): TlsCertificate | null;
    get_peer_certificate_errors(): TlsCertificateFlags;
    get_rehandshake_mode(): TlsRehandshakeMode;
    get_require_close_notify(): boolean;
    get_use_system_certdb(): boolean;
    handshake(cancellable?: Cancellable | null): boolean;
    handshake_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    handshake_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    handshake_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    handshake_finish(result: AsyncResult): boolean;
    set_advertised_protocols(protocols?: string[] | null): void;
    set_certificate(certificate: TlsCertificate): void;
    set_database(database?: TlsDatabase | null): void;
    set_interaction(interaction?: TlsInteraction | null): void;
    set_rehandshake_mode(mode: TlsRehandshakeMode): void;
    set_require_close_notify(require_close_notify: boolean): void;
    set_use_system_certdb(use_system_certdb: boolean): void;
    vfunc_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
    vfunc_get_binding_data(type: TlsChannelBindingType, data: Uint8Array | string): boolean;
    vfunc_handshake(cancellable?: Cancellable | null): boolean;
    vfunc_handshake_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_handshake_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_handshake_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_handshake_finish(result: AsyncResult): boolean;
}
export module TlsDatabase {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class TlsDatabase extends GObject.Object {
    static $gtype: GObject.GType<TlsDatabase>;

    constructor(properties?: Partial<TlsDatabase.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TlsDatabase.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TlsDatabasePrivate;

    // Members

    create_certificate_handle(certificate: TlsCertificate): string | null;
    lookup_certificate_for_handle(
        handle: string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): TlsCertificate | null;
    lookup_certificate_for_handle_async(
        handle: string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsCertificate>;
    lookup_certificate_for_handle_async(
        handle: string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    lookup_certificate_for_handle_async(
        handle: string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsCertificate> | void;
    lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate;
    lookup_certificate_issuer(
        certificate: TlsCertificate,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): TlsCertificate;
    lookup_certificate_issuer_async(
        certificate: TlsCertificate,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsCertificate>;
    lookup_certificate_issuer_async(
        certificate: TlsCertificate,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    lookup_certificate_issuer_async(
        certificate: TlsCertificate,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsCertificate> | void;
    lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate;
    lookup_certificates_issued_by(
        issuer_raw_dn: Uint8Array | string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): TlsCertificate[];
    lookup_certificates_issued_by_async(
        issuer_raw_dn: Uint8Array | string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsCertificate[]>;
    lookup_certificates_issued_by_async(
        issuer_raw_dn: Uint8Array | string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    lookup_certificates_issued_by_async(
        issuer_raw_dn: Uint8Array | string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsCertificate[]> | void;
    lookup_certificates_issued_by_finish(result: AsyncResult): TlsCertificate[];
    verify_chain(
        chain: TlsCertificate,
        purpose: string,
        identity: SocketConnectable | null,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseVerifyFlags,
        cancellable?: Cancellable | null
    ): TlsCertificateFlags;
    verify_chain_async(
        chain: TlsCertificate,
        purpose: string,
        identity: SocketConnectable | null,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseVerifyFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsCertificateFlags>;
    verify_chain_async(
        chain: TlsCertificate,
        purpose: string,
        identity: SocketConnectable | null,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseVerifyFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    verify_chain_async(
        chain: TlsCertificate,
        purpose: string,
        identity: SocketConnectable | null,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseVerifyFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsCertificateFlags> | void;
    verify_chain_finish(result: AsyncResult): TlsCertificateFlags;
    vfunc_create_certificate_handle(certificate: TlsCertificate): string | null;
    vfunc_lookup_certificate_for_handle(
        handle: string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): TlsCertificate | null;
    vfunc_lookup_certificate_for_handle_async(
        handle: string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsCertificate>;
    vfunc_lookup_certificate_for_handle_async(
        handle: string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup_certificate_for_handle_async(
        handle: string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsCertificate> | void;
    vfunc_lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate;
    vfunc_lookup_certificate_issuer(
        certificate: TlsCertificate,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): TlsCertificate;
    vfunc_lookup_certificate_issuer_async(
        certificate: TlsCertificate,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsCertificate>;
    vfunc_lookup_certificate_issuer_async(
        certificate: TlsCertificate,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup_certificate_issuer_async(
        certificate: TlsCertificate,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsCertificate> | void;
    vfunc_lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate;
    vfunc_lookup_certificates_issued_by(
        issuer_raw_dn: Uint8Array | string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): TlsCertificate[];
    vfunc_lookup_certificates_issued_by_async(
        issuer_raw_dn: Uint8Array | string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsCertificate[]>;
    vfunc_lookup_certificates_issued_by_async(
        issuer_raw_dn: Uint8Array | string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup_certificates_issued_by_async(
        issuer_raw_dn: Uint8Array | string,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseLookupFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsCertificate[]> | void;
    vfunc_lookup_certificates_issued_by_finish(result: AsyncResult): TlsCertificate[];
    vfunc_verify_chain(
        chain: TlsCertificate,
        purpose: string,
        identity: SocketConnectable | null,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseVerifyFlags,
        cancellable?: Cancellable | null
    ): TlsCertificateFlags;
    vfunc_verify_chain_async(
        chain: TlsCertificate,
        purpose: string,
        identity: SocketConnectable | null,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseVerifyFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsCertificateFlags>;
    vfunc_verify_chain_async(
        chain: TlsCertificate,
        purpose: string,
        identity: SocketConnectable | null,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseVerifyFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_verify_chain_async(
        chain: TlsCertificate,
        purpose: string,
        identity: SocketConnectable | null,
        interaction: TlsInteraction | null,
        flags: TlsDatabaseVerifyFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsCertificateFlags> | void;
    vfunc_verify_chain_finish(result: AsyncResult): TlsCertificateFlags;
}
export module TlsInteraction {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TlsInteraction extends GObject.Object {
    static $gtype: GObject.GType<TlsInteraction>;

    constructor(properties?: Partial<TlsInteraction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TlsInteraction.ConstructorProperties>, ...args: any[]): void;

    // Members

    ask_password(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult;
    ask_password_async(password: TlsPassword, cancellable?: Cancellable | null): Promise<TlsInteractionResult>;
    ask_password_async(
        password: TlsPassword,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    ask_password_async(
        password: TlsPassword,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsInteractionResult> | void;
    ask_password_finish(result: AsyncResult): TlsInteractionResult;
    invoke_ask_password(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult;
    invoke_request_certificate(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable?: Cancellable | null
    ): TlsInteractionResult;
    request_certificate(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable?: Cancellable | null
    ): TlsInteractionResult;
    request_certificate_async(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsInteractionResult>;
    request_certificate_async(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    request_certificate_async(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsInteractionResult> | void;
    request_certificate_finish(result: AsyncResult): TlsInteractionResult;
    vfunc_ask_password(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult;
    vfunc_ask_password_async(password: TlsPassword, cancellable?: Cancellable | null): Promise<TlsInteractionResult>;
    vfunc_ask_password_async(
        password: TlsPassword,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_ask_password_async(
        password: TlsPassword,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsInteractionResult> | void;
    vfunc_ask_password_finish(result: AsyncResult): TlsInteractionResult;
    vfunc_request_certificate(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable?: Cancellable | null
    ): TlsInteractionResult;
    vfunc_request_certificate_async(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable?: Cancellable | null
    ): Promise<TlsInteractionResult>;
    vfunc_request_certificate_async(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_request_certificate_async(
        connection: TlsConnection,
        flags: TlsCertificateRequestFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<TlsInteractionResult> | void;
    vfunc_request_certificate_finish(result: AsyncResult): TlsInteractionResult;
}
export module TlsPassword {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        description: string;
        flags: TlsPasswordFlags;
        warning: string;
    }
}
export class TlsPassword extends GObject.Object {
    static $gtype: GObject.GType<TlsPassword>;

    constructor(properties?: Partial<TlsPassword.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TlsPassword.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    flags: TlsPasswordFlags;
    warning: string;

    // Fields
    priv: TlsPasswordPrivate;

    // Constructors

    static ["new"](flags: TlsPasswordFlags, description: string): TlsPassword;

    // Members

    get_description(): string;
    get_flags(): TlsPasswordFlags;
    get_value(length?: number | null): number;
    get_warning(): string;
    set_description(description: string): void;
    set_flags(flags: TlsPasswordFlags): void;
    set_value(value: Uint8Array | string): void;
    set_value_full(value: Uint8Array | string, destroy?: GLib.DestroyNotify | null): void;
    set_warning(warning: string): void;
    vfunc_get_default_warning(): string;
    vfunc_get_value(length?: number | null): number;
    vfunc_set_value(value: Uint8Array | string, destroy?: GLib.DestroyNotify | null): void;
}
export module UnixConnection {
    export interface ConstructorProperties extends SocketConnection.ConstructorProperties {
        [key: string]: any;
    }
}
export class UnixConnection extends SocketConnection {
    static $gtype: GObject.GType<UnixConnection>;

    constructor(properties?: Partial<UnixConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixConnection.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: UnixConnectionPrivate | any;

    // Members

    receive_credentials(cancellable?: Cancellable | null): Credentials;
    receive_credentials_async(cancellable?: Cancellable | null): Promise<Credentials>;
    receive_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    receive_credentials_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<Credentials> | void;
    receive_credentials_finish(result: AsyncResult): Credentials;
    receive_fd(cancellable?: Cancellable | null): number;
    send_credentials(cancellable?: Cancellable | null): boolean;
    send_credentials_async(cancellable?: Cancellable | null): Promise<boolean>;
    send_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    send_credentials_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    send_credentials_finish(result: AsyncResult): boolean;
    send_fd(fd: number, cancellable?: Cancellable | null): boolean;
}
export module UnixCredentialsMessage {
    export interface ConstructorProperties extends SocketControlMessage.ConstructorProperties {
        [key: string]: any;
        credentials: Credentials;
    }
}
export class UnixCredentialsMessage extends SocketControlMessage {
    static $gtype: GObject.GType<UnixCredentialsMessage>;

    constructor(properties?: Partial<UnixCredentialsMessage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixCredentialsMessage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    credentials: Credentials;

    // Fields
    priv: UnixCredentialsMessagePrivate | any;

    // Constructors

    static ["new"](): UnixCredentialsMessage;
    static new_with_credentials(credentials: Credentials): UnixCredentialsMessage;

    // Members

    get_credentials(): Credentials;
    static is_supported(): boolean;
}
export module UnixFDList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class UnixFDList extends GObject.Object {
    static $gtype: GObject.GType<UnixFDList>;

    constructor(properties?: Partial<UnixFDList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixFDList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: UnixFDListPrivate;

    // Constructors

    static ["new"](): UnixFDList;
    static new_from_array(fds: number[]): UnixFDList;

    // Members

    append(fd: number): number;
    get(index_: number): number;
    get_length(): number;
    peek_fds(): number[];
    steal_fds(): number[];
}
export module UnixFDMessage {
    export interface ConstructorProperties extends SocketControlMessage.ConstructorProperties {
        [key: string]: any;
        fd_list: UnixFDList;
        fdList: UnixFDList;
    }
}
export class UnixFDMessage extends SocketControlMessage {
    static $gtype: GObject.GType<UnixFDMessage>;

    constructor(properties?: Partial<UnixFDMessage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixFDMessage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fd_list: UnixFDList;
    fdList: UnixFDList;

    // Fields
    priv: UnixFDMessagePrivate | any;

    // Constructors

    static ["new"](): UnixFDMessage;
    static new_with_fd_list(fd_list: UnixFDList): UnixFDMessage;

    // Members

    append_fd(fd: number): boolean;
    get_fd_list(): UnixFDList;
    steal_fds(): number[];
}
export module UnixInputStream {
    export interface ConstructorProperties extends InputStream.ConstructorProperties {
        [key: string]: any;
        close_fd: boolean;
        closeFd: boolean;
        fd: number;
    }
}
export class UnixInputStream extends InputStream implements FileDescriptorBased, PollableInputStream {
    static $gtype: GObject.GType<UnixInputStream>;

    constructor(properties?: Partial<UnixInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    close_fd: boolean;
    closeFd: boolean;
    fd: number;

    // Constructors

    static ["new"](fd: number, close_fd: boolean): UnixInputStream;

    // Members

    get_close_fd(): boolean;
    get_fd(): number;
    set_close_fd(close_fd: boolean): void;

    // Implemented Members

    vfunc_get_fd(): number;
    can_poll(): boolean;
    create_source(cancellable?: Cancellable | null): GLib.Source;
    is_readable(): boolean;
    read_nonblocking(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source;
    vfunc_is_readable(): boolean;
    vfunc_read_nonblocking(buffer?: Uint8Array | null): number;
}
export module UnixMountMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class UnixMountMonitor extends GObject.Object {
    static $gtype: GObject.GType<UnixMountMonitor>;

    constructor(properties?: Partial<UnixMountMonitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixMountMonitor.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "mountpoints-changed", callback: (_source: this) => void): number;
    connect_after(signal: "mountpoints-changed", callback: (_source: this) => void): number;
    emit(signal: "mountpoints-changed"): void;
    connect(signal: "mounts-changed", callback: (_source: this) => void): number;
    connect_after(signal: "mounts-changed", callback: (_source: this) => void): number;
    emit(signal: "mounts-changed"): void;

    // Constructors

    static ["new"](): UnixMountMonitor;

    // Members

    set_rate_limit(limit_msec: number): void;
    static get(): UnixMountMonitor;
}
export module UnixOutputStream {
    export interface ConstructorProperties extends OutputStream.ConstructorProperties {
        [key: string]: any;
        close_fd: boolean;
        closeFd: boolean;
        fd: number;
    }
}
export class UnixOutputStream extends OutputStream implements FileDescriptorBased, PollableOutputStream {
    static $gtype: GObject.GType<UnixOutputStream>;

    constructor(properties?: Partial<UnixOutputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    close_fd: boolean;
    closeFd: boolean;
    fd: number;

    // Constructors

    static ["new"](fd: number, close_fd: boolean): UnixOutputStream;

    // Members

    get_close_fd(): boolean;
    get_fd(): number;
    set_close_fd(close_fd: boolean): void;

    // Implemented Members

    vfunc_get_fd(): number;
    can_poll(): boolean;
    create_source(cancellable?: Cancellable | null): GLib.Source;
    is_writable(): boolean;
    write_nonblocking(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    writev_nonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [PollableReturn, number | null];
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source;
    vfunc_is_writable(): boolean;
    vfunc_write_nonblocking(buffer?: Uint8Array | null): number;
    vfunc_writev_nonblocking(vectors: OutputVector[]): [PollableReturn, number | null];
}
export module UnixSocketAddress {
    export interface ConstructorProperties extends SocketAddress.ConstructorProperties {
        [key: string]: any;
        abstract: boolean;
        address_type: UnixSocketAddressType;
        addressType: UnixSocketAddressType;
        path: string;
        path_as_array: Uint8Array;
        pathAsArray: Uint8Array;
    }
}
export class UnixSocketAddress extends SocketAddress implements SocketConnectable {
    static $gtype: GObject.GType<UnixSocketAddress>;

    constructor(properties?: Partial<UnixSocketAddress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixSocketAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    "abstract": boolean;
    address_type: UnixSocketAddressType;
    addressType: UnixSocketAddressType;
    path: string;
    path_as_array: Uint8Array;
    pathAsArray: Uint8Array;

    // Constructors

    static ["new"](path: string): UnixSocketAddress;
    static new_abstract(path: number[]): UnixSocketAddress;
    static new_with_type(path: number[], type: UnixSocketAddressType): UnixSocketAddress;

    // Members

    get_address_type(): UnixSocketAddressType;
    get_is_abstract(): boolean;
    get_path(): string;
    get_path_len(): number;
    static abstract_names_supported(): boolean;

    // Implemented Members

    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): SocketAddressEnumerator;
    vfunc_proxy_enumerate(): SocketAddressEnumerator;
    vfunc_to_string(): string;
}
export module Vfs {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Vfs extends GObject.Object {
    static $gtype: GObject.GType<Vfs>;

    constructor(properties?: Partial<Vfs.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Vfs.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_file_for_path(path: string): File;
    get_file_for_uri(uri: string): File;
    get_supported_uri_schemes(): string[];
    is_active(): boolean;
    parse_name(parse_name: string): File;
    register_uri_scheme(
        scheme: string,
        uri_func?: VfsFileLookupFunc | null,
        uri_destroy?: GLib.DestroyNotify | null,
        parse_name_func?: VfsFileLookupFunc | null,
        parse_name_destroy?: GLib.DestroyNotify | null
    ): boolean;
    unregister_uri_scheme(scheme: string): boolean;
    vfunc_add_writable_namespaces(list: FileAttributeInfoList): void;
    vfunc_get_file_for_path(path: string): File;
    vfunc_get_file_for_uri(uri: string): File;
    vfunc_get_supported_uri_schemes(): string[];
    vfunc_is_active(): boolean;
    vfunc_local_file_add_info(
        filename: string,
        device: number,
        attribute_matcher: FileAttributeMatcher,
        info: FileInfo,
        cancellable?: Cancellable | null,
        extra_data?: any | null
    ): void;
    vfunc_local_file_moved(source: string, dest: string): void;
    vfunc_local_file_removed(filename: string): void;
    vfunc_local_file_set_attributes(
        filename: string,
        info: FileInfo,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    vfunc_parse_name(parse_name: string): File;
    static get_default(): Vfs;
    static get_local(): Vfs;
}
export module VolumeMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class VolumeMonitor extends GObject.Object {
    static $gtype: GObject.GType<VolumeMonitor>;

    constructor(properties?: Partial<VolumeMonitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VolumeMonitor.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "drive-changed", callback: (_source: this, drive: Drive) => void): number;
    connect_after(signal: "drive-changed", callback: (_source: this, drive: Drive) => void): number;
    emit(signal: "drive-changed", drive: Drive): void;
    connect(signal: "drive-connected", callback: (_source: this, drive: Drive) => void): number;
    connect_after(signal: "drive-connected", callback: (_source: this, drive: Drive) => void): number;
    emit(signal: "drive-connected", drive: Drive): void;
    connect(signal: "drive-disconnected", callback: (_source: this, drive: Drive) => void): number;
    connect_after(signal: "drive-disconnected", callback: (_source: this, drive: Drive) => void): number;
    emit(signal: "drive-disconnected", drive: Drive): void;
    connect(signal: "drive-eject-button", callback: (_source: this, drive: Drive) => void): number;
    connect_after(signal: "drive-eject-button", callback: (_source: this, drive: Drive) => void): number;
    emit(signal: "drive-eject-button", drive: Drive): void;
    connect(signal: "drive-stop-button", callback: (_source: this, drive: Drive) => void): number;
    connect_after(signal: "drive-stop-button", callback: (_source: this, drive: Drive) => void): number;
    emit(signal: "drive-stop-button", drive: Drive): void;
    connect(signal: "mount-added", callback: (_source: this, mount: Mount) => void): number;
    connect_after(signal: "mount-added", callback: (_source: this, mount: Mount) => void): number;
    emit(signal: "mount-added", mount: Mount): void;
    connect(signal: "mount-changed", callback: (_source: this, mount: Mount) => void): number;
    connect_after(signal: "mount-changed", callback: (_source: this, mount: Mount) => void): number;
    emit(signal: "mount-changed", mount: Mount): void;
    connect(signal: "mount-pre-unmount", callback: (_source: this, mount: Mount) => void): number;
    connect_after(signal: "mount-pre-unmount", callback: (_source: this, mount: Mount) => void): number;
    emit(signal: "mount-pre-unmount", mount: Mount): void;
    connect(signal: "mount-removed", callback: (_source: this, mount: Mount) => void): number;
    connect_after(signal: "mount-removed", callback: (_source: this, mount: Mount) => void): number;
    emit(signal: "mount-removed", mount: Mount): void;
    connect(signal: "volume-added", callback: (_source: this, volume: Volume) => void): number;
    connect_after(signal: "volume-added", callback: (_source: this, volume: Volume) => void): number;
    emit(signal: "volume-added", volume: Volume): void;
    connect(signal: "volume-changed", callback: (_source: this, volume: Volume) => void): number;
    connect_after(signal: "volume-changed", callback: (_source: this, volume: Volume) => void): number;
    emit(signal: "volume-changed", volume: Volume): void;
    connect(signal: "volume-removed", callback: (_source: this, volume: Volume) => void): number;
    connect_after(signal: "volume-removed", callback: (_source: this, volume: Volume) => void): number;
    emit(signal: "volume-removed", volume: Volume): void;

    // Members

    get_connected_drives(): Drive[];
    get_mount_for_uuid(uuid: string): Mount;
    get_mounts(): Mount[];
    get_volume_for_uuid(uuid: string): Volume;
    get_volumes(): Volume[];
    vfunc_drive_changed(drive: Drive): void;
    vfunc_drive_connected(drive: Drive): void;
    vfunc_drive_disconnected(drive: Drive): void;
    vfunc_drive_eject_button(drive: Drive): void;
    vfunc_drive_stop_button(drive: Drive): void;
    vfunc_get_connected_drives(): Drive[];
    vfunc_get_mount_for_uuid(uuid: string): Mount;
    vfunc_get_mounts(): Mount[];
    vfunc_get_volume_for_uuid(uuid: string): Volume;
    vfunc_get_volumes(): Volume[];
    vfunc_mount_added(mount: Mount): void;
    vfunc_mount_changed(mount: Mount): void;
    vfunc_mount_pre_unmount(mount: Mount): void;
    vfunc_mount_removed(mount: Mount): void;
    vfunc_volume_added(volume: Volume): void;
    vfunc_volume_changed(volume: Volume): void;
    vfunc_volume_removed(volume: Volume): void;
    static adopt_orphan_mount(mount: Mount): Volume;
    static get(): VolumeMonitor;
}
export module ZlibCompressor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        file_info: FileInfo;
        fileInfo: FileInfo;
        format: ZlibCompressorFormat;
        level: number;
    }
}
export class ZlibCompressor extends GObject.Object implements Converter {
    static $gtype: GObject.GType<ZlibCompressor>;

    constructor(properties?: Partial<ZlibCompressor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ZlibCompressor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    file_info: FileInfo;
    fileInfo: FileInfo;
    format: ZlibCompressorFormat;
    level: number;

    // Constructors

    static ["new"](format: ZlibCompressorFormat, level: number): ZlibCompressor;

    // Members

    get_file_info(): FileInfo;
    set_file_info(file_info?: FileInfo | null): void;

    // Implemented Members

    convert(
        inbuf: Uint8Array | string,
        outbuf: Uint8Array | string,
        flags: ConverterFlags
    ): [ConverterResult, number, number];
    reset(): void;
    vfunc_convert(
        inbuf: Uint8Array | null,
        outbuf: Uint8Array | null,
        flags: ConverterFlags
    ): [ConverterResult, number, number];
    vfunc_reset(): void;
}
export module ZlibDecompressor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        file_info: FileInfo;
        fileInfo: FileInfo;
        format: ZlibCompressorFormat;
    }
}
export class ZlibDecompressor extends GObject.Object implements Converter {
    static $gtype: GObject.GType<ZlibDecompressor>;

    constructor(properties?: Partial<ZlibDecompressor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ZlibDecompressor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    file_info: FileInfo;
    fileInfo: FileInfo;
    format: ZlibCompressorFormat;

    // Constructors

    static ["new"](format: ZlibCompressorFormat): ZlibDecompressor;

    // Members

    get_file_info(): FileInfo;

    // Implemented Members

    convert(
        inbuf: Uint8Array | string,
        outbuf: Uint8Array | string,
        flags: ConverterFlags
    ): [ConverterResult, number, number];
    reset(): void;
    vfunc_convert(
        inbuf: Uint8Array | null,
        outbuf: Uint8Array | null,
        flags: ConverterFlags
    ): [ConverterResult, number, number];
    vfunc_reset(): void;
}

export class ActionEntry {
    static $gtype: GObject.GType<ActionEntry>;

    constructor(copy: ActionEntry);

    // Fields
    name: string;
    parameter_type: string;
    state: string;
    padding: number[];
}

export class AppLaunchContextPrivate {
    static $gtype: GObject.GType<AppLaunchContextPrivate>;

    constructor(copy: AppLaunchContextPrivate);
}

export class ApplicationCommandLinePrivate {
    static $gtype: GObject.GType<ApplicationCommandLinePrivate>;

    constructor(copy: ApplicationCommandLinePrivate);
}

export class ApplicationPrivate {
    static $gtype: GObject.GType<ApplicationPrivate>;

    constructor(copy: ApplicationPrivate);
}

export class BufferedInputStreamPrivate {
    static $gtype: GObject.GType<BufferedInputStreamPrivate>;

    constructor(copy: BufferedInputStreamPrivate);
}

export class BufferedOutputStreamPrivate {
    static $gtype: GObject.GType<BufferedOutputStreamPrivate>;

    constructor(copy: BufferedOutputStreamPrivate);
}

export class CancellablePrivate {
    static $gtype: GObject.GType<CancellablePrivate>;

    constructor(copy: CancellablePrivate);
}

export class ConverterInputStreamPrivate {
    static $gtype: GObject.GType<ConverterInputStreamPrivate>;

    constructor(copy: ConverterInputStreamPrivate);
}

export class ConverterOutputStreamPrivate {
    static $gtype: GObject.GType<ConverterOutputStreamPrivate>;

    constructor(copy: ConverterOutputStreamPrivate);
}

export class DBusAnnotationInfo {
    static $gtype: GObject.GType<DBusAnnotationInfo>;

    constructor(copy: DBusAnnotationInfo);

    // Fields
    ref_count: number;
    key: string;
    value: string;
    annotations: DBusAnnotationInfo[];

    // Members
    ref(): DBusAnnotationInfo;
    unref(): void;
    static lookup(annotations: DBusAnnotationInfo[] | null, name: string): string;
}

export class DBusArgInfo {
    static $gtype: GObject.GType<DBusArgInfo>;

    constructor(copy: DBusArgInfo);

    // Fields
    ref_count: number;
    name: string;
    signature: string;
    annotations: DBusAnnotationInfo[];

    // Members
    ref(): DBusArgInfo;
    unref(): void;
}

export class DBusErrorEntry {
    static $gtype: GObject.GType<DBusErrorEntry>;

    constructor(
        properties?: Partial<{
            error_code?: number;
            dbus_error_name?: string;
        }>
    );
    constructor(copy: DBusErrorEntry);

    // Fields
    error_code: number;
    dbus_error_name: string;
}

export class DBusInterfaceInfo {
    static $gtype: GObject.GType<DBusInterfaceInfo>;

    constructor(info: string);
    constructor(copy: DBusInterfaceInfo);

    // Fields
    ref_count: number;
    name: string;
    methods: DBusMethodInfo[];
    signals: DBusSignalInfo[];
    properties: DBusPropertyInfo[];
    annotations: DBusAnnotationInfo[];

    // Constructors
    static new_for_xml(info: string): DBusInterfaceInfo;

    // Members
    cache_build(): void;
    cache_release(): void;
    generate_xml(indent: number, string_builder: GLib.String): void;
    lookup_method(name: string): DBusMethodInfo;
    lookup_property(name: string): DBusPropertyInfo;
    lookup_signal(name: string): DBusSignalInfo;
    ref(): DBusInterfaceInfo;
    unref(): void;
}

export class DBusInterfaceSkeletonPrivate {
    static $gtype: GObject.GType<DBusInterfaceSkeletonPrivate>;

    constructor(copy: DBusInterfaceSkeletonPrivate);
}

export class DBusInterfaceVTable {
    static $gtype: GObject.GType<DBusInterfaceVTable>;

    constructor(copy: DBusInterfaceVTable);

    // Fields
    method_call: DBusInterfaceMethodCallFunc;
    get_property: DBusInterfaceGetPropertyFunc;
    set_property: DBusInterfaceSetPropertyFunc;
    padding: any[];
}

export class DBusMethodInfo {
    static $gtype: GObject.GType<DBusMethodInfo>;

    constructor(copy: DBusMethodInfo);

    // Fields
    ref_count: number;
    name: string;
    in_args: DBusArgInfo[];
    out_args: DBusArgInfo[];
    annotations: DBusAnnotationInfo[];

    // Members
    ref(): DBusMethodInfo;
    unref(): void;
}

export class DBusNodeInfo {
    static $gtype: GObject.GType<DBusNodeInfo>;

    constructor(xml_data: string);
    constructor(copy: DBusNodeInfo);

    // Fields
    ref_count: number;
    path: string;
    interfaces: DBusInterfaceInfo[];
    nodes: DBusNodeInfo[];
    annotations: DBusAnnotationInfo[];

    // Constructors
    static new_for_xml(xml_data: string): DBusNodeInfo;
    static new_for_xml(info: string): DBusNodeInfo;

    // Members
    generate_xml(indent: number, string_builder: GLib.String): void;
    lookup_interface(name: string): DBusInterfaceInfo;
    ref(): DBusNodeInfo;
    unref(): void;
}

export class DBusObjectManagerClientPrivate {
    static $gtype: GObject.GType<DBusObjectManagerClientPrivate>;

    constructor(copy: DBusObjectManagerClientPrivate);
}

export class DBusObjectManagerServerPrivate {
    static $gtype: GObject.GType<DBusObjectManagerServerPrivate>;

    constructor(copy: DBusObjectManagerServerPrivate);
}

export class DBusObjectProxyPrivate {
    static $gtype: GObject.GType<DBusObjectProxyPrivate>;

    constructor(copy: DBusObjectProxyPrivate);
}

export class DBusObjectSkeletonPrivate {
    static $gtype: GObject.GType<DBusObjectSkeletonPrivate>;

    constructor(copy: DBusObjectSkeletonPrivate);
}

export class DBusPropertyInfo {
    static $gtype: GObject.GType<DBusPropertyInfo>;

    constructor(copy: DBusPropertyInfo);

    // Fields
    ref_count: number;
    name: string;
    signature: string;
    flags: DBusPropertyInfoFlags;
    annotations: DBusAnnotationInfo[];

    // Members
    ref(): DBusPropertyInfo;
    unref(): void;
}

export class DBusProxyPrivate {
    static $gtype: GObject.GType<DBusProxyPrivate>;

    constructor(copy: DBusProxyPrivate);
}

export class DBusSignalInfo {
    static $gtype: GObject.GType<DBusSignalInfo>;

    constructor(copy: DBusSignalInfo);

    // Fields
    ref_count: number;
    name: string;
    args: DBusArgInfo[];
    annotations: DBusAnnotationInfo[];

    // Members
    ref(): DBusSignalInfo;
    unref(): void;
}

export class DBusSubtreeVTable {
    static $gtype: GObject.GType<DBusSubtreeVTable>;

    constructor(copy: DBusSubtreeVTable);

    // Fields
    introspect: DBusSubtreeIntrospectFunc;
    dispatch: DBusSubtreeDispatchFunc;
    padding: any[];
}

export class DataInputStreamPrivate {
    static $gtype: GObject.GType<DataInputStreamPrivate>;

    constructor(copy: DataInputStreamPrivate);
}

export class DataOutputStreamPrivate {
    static $gtype: GObject.GType<DataOutputStreamPrivate>;

    constructor(copy: DataOutputStreamPrivate);
}

export class EmblemedIconPrivate {
    static $gtype: GObject.GType<EmblemedIconPrivate>;

    constructor(copy: EmblemedIconPrivate);
}

export class FileAttributeInfo {
    static $gtype: GObject.GType<FileAttributeInfo>;

    constructor(copy: FileAttributeInfo);

    // Fields
    name: string;
    type: FileAttributeType;
    flags: FileAttributeInfoFlags;
}

export class FileAttributeInfoList {
    static $gtype: GObject.GType<FileAttributeInfoList>;

    constructor();
    constructor(copy: FileAttributeInfoList);

    // Fields
    infos: FileAttributeInfo;
    n_infos: number;

    // Constructors
    static ["new"](): FileAttributeInfoList;

    // Members
    add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void;
    dup(): FileAttributeInfoList;
    lookup(name: string): FileAttributeInfo;
    ref(): FileAttributeInfoList;
    unref(): void;
}

export class FileAttributeMatcher {
    static $gtype: GObject.GType<FileAttributeMatcher>;

    constructor(attributes: string);
    constructor(copy: FileAttributeMatcher);

    // Constructors
    static ["new"](attributes: string): FileAttributeMatcher;

    // Members
    enumerate_namespace(ns: string): boolean;
    enumerate_next(): string | null;
    matches(attribute: string): boolean;
    matches_only(attribute: string): boolean;
    ref(): FileAttributeMatcher;
    subtract(subtract: FileAttributeMatcher): FileAttributeMatcher;
    to_string(): string;
    unref(): void;
}

export class FileEnumeratorPrivate {
    static $gtype: GObject.GType<FileEnumeratorPrivate>;

    constructor(copy: FileEnumeratorPrivate);
}

export class FileIOStreamPrivate {
    static $gtype: GObject.GType<FileIOStreamPrivate>;

    constructor(copy: FileIOStreamPrivate);
}

export class FileInputStreamPrivate {
    static $gtype: GObject.GType<FileInputStreamPrivate>;

    constructor(copy: FileInputStreamPrivate);
}

export class FileMonitorPrivate {
    static $gtype: GObject.GType<FileMonitorPrivate>;

    constructor(copy: FileMonitorPrivate);
}

export class FileOutputStreamPrivate {
    static $gtype: GObject.GType<FileOutputStreamPrivate>;

    constructor(copy: FileOutputStreamPrivate);
}

export class IOExtension {
    static $gtype: GObject.GType<IOExtension>;

    constructor(copy: IOExtension);

    // Members
    get_name(): string;
    get_priority(): number;
    get_type(): GObject.GType;
}

export class IOExtensionPoint {
    static $gtype: GObject.GType<IOExtensionPoint>;

    constructor(copy: IOExtensionPoint);

    // Members
    get_extension_by_name(name: string): IOExtension;
    get_extensions(): IOExtension[];
    get_required_type(): GObject.GType;
    set_required_type(type: GObject.GType): void;
    static implement(
        extension_point_name: string,
        type: GObject.GType,
        extension_name: string,
        priority: number
    ): IOExtension;
    static lookup(name: string): IOExtensionPoint;
    static register(name: string): IOExtensionPoint;
}

export class IOModuleScope {
    static $gtype: GObject.GType<IOModuleScope>;

    constructor(copy: IOModuleScope);

    // Members
    block(basename: string): void;
    free(): void;
}

export class IOSchedulerJob {
    static $gtype: GObject.GType<IOSchedulerJob>;

    constructor(copy: IOSchedulerJob);

    // Members
    send_to_mainloop(func: GLib.SourceFunc, notify?: GLib.DestroyNotify | null): boolean;
    send_to_mainloop_async(func: GLib.SourceFunc, notify?: GLib.DestroyNotify | null): void;
}

export class IOStreamAdapter {
    static $gtype: GObject.GType<IOStreamAdapter>;

    constructor(copy: IOStreamAdapter);
}

export class IOStreamPrivate {
    static $gtype: GObject.GType<IOStreamPrivate>;

    constructor(copy: IOStreamPrivate);
}

export class InetAddressMaskPrivate {
    static $gtype: GObject.GType<InetAddressMaskPrivate>;

    constructor(copy: InetAddressMaskPrivate);
}

export class InetAddressPrivate {
    static $gtype: GObject.GType<InetAddressPrivate>;

    constructor(copy: InetAddressPrivate);
}

export class InetSocketAddressPrivate {
    static $gtype: GObject.GType<InetSocketAddressPrivate>;

    constructor(copy: InetSocketAddressPrivate);
}

export class InputMessage {
    static $gtype: GObject.GType<InputMessage>;

    constructor(copy: InputMessage);

    // Fields
    address: SocketAddress;
    vectors: InputVector[];
    num_vectors: number;
    bytes_received: number;
    flags: number;
    control_messages: SocketControlMessage[];
    num_control_messages: number;
}

export class InputStreamPrivate {
    static $gtype: GObject.GType<InputStreamPrivate>;

    constructor(copy: InputStreamPrivate);
}

export class InputVector {
    static $gtype: GObject.GType<InputVector>;

    constructor(
        properties?: Partial<{
            buffer?: any;
            size?: number;
        }>
    );
    constructor(copy: InputVector);

    // Fields
    buffer: any;
    size: number;
}

export class MemoryInputStreamPrivate {
    static $gtype: GObject.GType<MemoryInputStreamPrivate>;

    constructor(copy: MemoryInputStreamPrivate);
}

export class MemoryOutputStreamPrivate {
    static $gtype: GObject.GType<MemoryOutputStreamPrivate>;

    constructor(copy: MemoryOutputStreamPrivate);
}

export class MenuAttributeIterPrivate {
    static $gtype: GObject.GType<MenuAttributeIterPrivate>;

    constructor(copy: MenuAttributeIterPrivate);
}

export class MenuLinkIterPrivate {
    static $gtype: GObject.GType<MenuLinkIterPrivate>;

    constructor(copy: MenuLinkIterPrivate);
}

export class MenuModelPrivate {
    static $gtype: GObject.GType<MenuModelPrivate>;

    constructor(copy: MenuModelPrivate);
}

export class MountOperationPrivate {
    static $gtype: GObject.GType<MountOperationPrivate>;

    constructor(copy: MountOperationPrivate);
}

export class NativeSocketAddressPrivate {
    static $gtype: GObject.GType<NativeSocketAddressPrivate>;

    constructor(copy: NativeSocketAddressPrivate);
}

export class NetworkAddressPrivate {
    static $gtype: GObject.GType<NetworkAddressPrivate>;

    constructor(copy: NetworkAddressPrivate);
}

export class NetworkServicePrivate {
    static $gtype: GObject.GType<NetworkServicePrivate>;

    constructor(copy: NetworkServicePrivate);
}

export class OutputMessage {
    static $gtype: GObject.GType<OutputMessage>;

    constructor(copy: OutputMessage);

    // Fields
    address: SocketAddress;
    vectors: OutputVector;
    num_vectors: number;
    bytes_sent: number;
    control_messages: SocketControlMessage[];
    num_control_messages: number;
}

export class OutputStreamPrivate {
    static $gtype: GObject.GType<OutputStreamPrivate>;

    constructor(copy: OutputStreamPrivate);
}

export class OutputVector {
    static $gtype: GObject.GType<OutputVector>;

    constructor(
        properties?: Partial<{
            buffer?: any;
            size?: number;
        }>
    );
    constructor(copy: OutputVector);

    // Fields
    buffer: any;
    size: number;
}

export class PermissionPrivate {
    static $gtype: GObject.GType<PermissionPrivate>;

    constructor(copy: PermissionPrivate);
}

export class ProxyAddressEnumeratorPrivate {
    static $gtype: GObject.GType<ProxyAddressEnumeratorPrivate>;

    constructor(copy: ProxyAddressEnumeratorPrivate);
}

export class ProxyAddressPrivate {
    static $gtype: GObject.GType<ProxyAddressPrivate>;

    constructor(copy: ProxyAddressPrivate);
}

export class ResolverPrivate {
    static $gtype: GObject.GType<ResolverPrivate>;

    constructor(copy: ResolverPrivate);
}

export class Resource {
    static $gtype: GObject.GType<Resource>;

    constructor(data: GLib.Bytes | Uint8Array);
    constructor(copy: Resource);

    // Constructors
    static new_from_data(data: GLib.Bytes | Uint8Array): Resource;

    // Members
    _register(): void;
    _unregister(): void;
    enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[];
    get_info(path: string, lookup_flags: ResourceLookupFlags): [boolean, number | null, number | null];
    lookup_data(path: string, lookup_flags: ResourceLookupFlags): GLib.Bytes;
    open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream;
    ref(): Resource;
    unref(): void;
    static load(filename: string): Resource;
}

export class SettingsBackendPrivate {
    static $gtype: GObject.GType<SettingsBackendPrivate>;

    constructor(copy: SettingsBackendPrivate);
}

export class SettingsPrivate {
    static $gtype: GObject.GType<SettingsPrivate>;

    constructor(copy: SettingsPrivate);
}

export class SettingsSchema {
    static $gtype: GObject.GType<SettingsSchema>;

    constructor(properties?: Partial<{}>);
    constructor(copy: SettingsSchema);

    // Fields
    _realGetKey: typeof SettingsSchema.prototype.get_key;

    // Members
    get_id(): string;
    get_key(name: string): SettingsSchemaKey;
    get_path(): string;
    has_key(name: string): boolean;
    list_children(): string[];
    list_keys(): string[];
    ref(): SettingsSchema;
    unref(): void;
}

export class SettingsSchemaKey {
    static $gtype: GObject.GType<SettingsSchemaKey>;

    constructor(copy: SettingsSchemaKey);

    // Members
    get_default_value(): GLib.Variant;
    get_description(): string;
    get_name(): string;
    get_range(): GLib.Variant;
    get_summary(): string;
    get_value_type(): GLib.VariantType;
    range_check(value: GLib.Variant): boolean;
    ref(): SettingsSchemaKey;
    unref(): void;
}

export class SettingsSchemaSource {
    static $gtype: GObject.GType<SettingsSchemaSource>;

    constructor(directory: string, parent: SettingsSchemaSource | null, trusted: boolean);
    constructor(copy: SettingsSchemaSource);

    // Constructors
    static new_from_directory(
        directory: string,
        parent: SettingsSchemaSource | null,
        trusted: boolean
    ): SettingsSchemaSource;

    // Members
    list_schemas(recursive: boolean): [string[], string[]];
    lookup(schema_id: string, recursive: boolean): SettingsSchema | null;
    ref(): SettingsSchemaSource;
    unref(): void;
    static get_default(): SettingsSchemaSource | null;
}

export class SimpleActionGroupPrivate {
    static $gtype: GObject.GType<SimpleActionGroupPrivate>;

    constructor(copy: SimpleActionGroupPrivate);
}

export class SimpleProxyResolverPrivate {
    static $gtype: GObject.GType<SimpleProxyResolverPrivate>;

    constructor(copy: SimpleProxyResolverPrivate);
}

export class SocketClientPrivate {
    static $gtype: GObject.GType<SocketClientPrivate>;

    constructor(copy: SocketClientPrivate);
}

export class SocketConnectionPrivate {
    static $gtype: GObject.GType<SocketConnectionPrivate>;

    constructor(copy: SocketConnectionPrivate);
}

export class SocketControlMessagePrivate {
    static $gtype: GObject.GType<SocketControlMessagePrivate>;

    constructor(copy: SocketControlMessagePrivate);
}

export class SocketListenerPrivate {
    static $gtype: GObject.GType<SocketListenerPrivate>;

    constructor(copy: SocketListenerPrivate);
}

export class SocketPrivate {
    static $gtype: GObject.GType<SocketPrivate>;

    constructor(copy: SocketPrivate);
}

export class SocketServicePrivate {
    static $gtype: GObject.GType<SocketServicePrivate>;

    constructor(copy: SocketServicePrivate);
}

export class SrvTarget {
    static $gtype: GObject.GType<SrvTarget>;

    constructor(hostname: string, port: number, priority: number, weight: number);
    constructor(copy: SrvTarget);

    // Constructors
    static ["new"](hostname: string, port: number, priority: number, weight: number): SrvTarget;

    // Members
    copy(): SrvTarget;
    free(): void;
    get_hostname(): string;
    get_port(): number;
    get_priority(): number;
    get_weight(): number;
}

export class StaticResource {
    static $gtype: GObject.GType<StaticResource>;

    constructor(copy: StaticResource);

    // Fields
    data: number;
    data_len: number;
    resource: Resource;
    next: StaticResource;
    padding: any;

    // Members
    fini(): void;
    get_resource(): Resource;
    init(): void;
}

export class TcpConnectionPrivate {
    static $gtype: GObject.GType<TcpConnectionPrivate>;

    constructor(copy: TcpConnectionPrivate);
}

export class TcpWrapperConnectionPrivate {
    static $gtype: GObject.GType<TcpWrapperConnectionPrivate>;

    constructor(copy: TcpWrapperConnectionPrivate);
}

export class ThreadedSocketServicePrivate {
    static $gtype: GObject.GType<ThreadedSocketServicePrivate>;

    constructor(copy: ThreadedSocketServicePrivate);
}

export class TlsCertificatePrivate {
    static $gtype: GObject.GType<TlsCertificatePrivate>;

    constructor(copy: TlsCertificatePrivate);
}

export class TlsConnectionPrivate {
    static $gtype: GObject.GType<TlsConnectionPrivate>;

    constructor(copy: TlsConnectionPrivate);
}

export class TlsDatabasePrivate {
    static $gtype: GObject.GType<TlsDatabasePrivate>;

    constructor(copy: TlsDatabasePrivate);
}

export class TlsInteractionPrivate {
    static $gtype: GObject.GType<TlsInteractionPrivate>;

    constructor(copy: TlsInteractionPrivate);
}

export class TlsPasswordPrivate {
    static $gtype: GObject.GType<TlsPasswordPrivate>;

    constructor(copy: TlsPasswordPrivate);
}

export class UnixConnectionPrivate {
    static $gtype: GObject.GType<UnixConnectionPrivate>;

    constructor(copy: UnixConnectionPrivate);
}

export class UnixCredentialsMessagePrivate {
    static $gtype: GObject.GType<UnixCredentialsMessagePrivate>;

    constructor(copy: UnixCredentialsMessagePrivate);
}

export class UnixFDListPrivate {
    static $gtype: GObject.GType<UnixFDListPrivate>;

    constructor(copy: UnixFDListPrivate);
}

export class UnixFDMessagePrivate {
    static $gtype: GObject.GType<UnixFDMessagePrivate>;

    constructor(copy: UnixFDMessagePrivate);
}

export class UnixInputStreamPrivate {
    static $gtype: GObject.GType<UnixInputStreamPrivate>;

    constructor(copy: UnixInputStreamPrivate);
}

export class UnixMountEntry {
    static $gtype: GObject.GType<UnixMountEntry>;

    constructor(copy: UnixMountEntry);
}

export class UnixMountPoint {
    static $gtype: GObject.GType<UnixMountPoint>;

    constructor(copy: UnixMountPoint);

    // Members
    compare(mount2: UnixMountPoint): number;
    copy(): UnixMountPoint;
    free(): void;
    get_device_path(): string;
    get_fs_type(): string;
    get_mount_path(): string;
    get_options(): string;
    guess_can_eject(): boolean;
    guess_icon(): Icon;
    guess_name(): string;
    guess_symbolic_icon(): Icon;
    is_loopback(): boolean;
    is_readonly(): boolean;
    is_user_mountable(): boolean;
    static at(mount_path: string): [UnixMountPoint | null, number | null];
}

export class UnixOutputStreamPrivate {
    static $gtype: GObject.GType<UnixOutputStreamPrivate>;

    constructor(copy: UnixOutputStreamPrivate);
}

export class UnixSocketAddressPrivate {
    static $gtype: GObject.GType<UnixSocketAddressPrivate>;

    constructor(copy: UnixSocketAddressPrivate);
}

export interface ActionNamespace {
    $gtype: GObject.GType<Action>;
    prototype: ActionPrototype;

    name_is_valid(action_name: string): boolean;
    parse_detailed_name(detailed_name: string): [boolean, string, GLib.Variant];
    print_detailed_name(action_name: string, target_value?: GLib.Variant | null): string;
}
export type Action = ActionPrototype;
export interface ActionPrototype extends GObject.Object {
    // Properties
    enabled: boolean;
    name: string;
    parameter_type: GLib.VariantType;
    parameterType: GLib.VariantType;
    state: GLib.Variant;
    state_type: GLib.VariantType;
    stateType: GLib.VariantType;

    // Members

    activate(parameter?: GLib.Variant | null): void;
    change_state(value: GLib.Variant): void;
    get_enabled(): boolean;
    get_name(): string;
    get_parameter_type(): GLib.VariantType | null;
    get_state(): GLib.Variant;
    get_state_hint(): GLib.Variant | null;
    get_state_type(): GLib.VariantType | null;
    vfunc_activate(parameter?: GLib.Variant | null): void;
    vfunc_change_state(value: GLib.Variant): void;
    vfunc_get_enabled(): boolean;
    vfunc_get_name(): string;
    vfunc_get_parameter_type(): GLib.VariantType | null;
    vfunc_get_state(): GLib.Variant;
    vfunc_get_state_hint(): GLib.Variant | null;
    vfunc_get_state_type(): GLib.VariantType | null;
}

export const Action: ActionNamespace;

export interface ActionGroupNamespace {
    $gtype: GObject.GType<ActionGroup>;
    prototype: ActionGroupPrototype;
}
export type ActionGroup = ActionGroupPrototype;
export interface ActionGroupPrototype extends GObject.Object {
    // Members

    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
}

export const ActionGroup: ActionGroupNamespace;

export interface ActionMapNamespace {
    $gtype: GObject.GType<ActionMap>;
    prototype: ActionMapPrototype;
}
export type ActionMap = ActionMapPrototype;
export interface ActionMapPrototype extends GObject.Object {
    // Members

    add_action(action: Action): void;
    add_action_entries(entries: ActionEntry[], user_data?: any | null): void;
    lookup_action(action_name: string): Action;
    remove_action(action_name: string): void;
    vfunc_add_action(action: Action): void;
    vfunc_lookup_action(action_name: string): Action;
    vfunc_remove_action(action_name: string): void;
}

export const ActionMap: ActionMapNamespace;

export interface AppInfoNamespace {
    $gtype: GObject.GType<AppInfo>;
    prototype: AppInfoPrototype;

    create_from_commandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo;
    get_all(): AppInfo[];
    get_all_for_type(content_type: string): AppInfo[];
    get_default_for_type(content_type: string, must_support_uris: boolean): AppInfo | null;
    get_default_for_uri_scheme(uri_scheme: string): AppInfo | null;
    get_fallback_for_type(content_type: string): AppInfo[];
    get_recommended_for_type(content_type: string): AppInfo[];
    launch_default_for_uri(uri: string, context?: AppLaunchContext | null): boolean;
    launch_default_for_uri_async(
        uri: string,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    launch_default_for_uri_async(
        uri: string,
        context: AppLaunchContext | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<AppInfo> | null
    ): void;
    launch_default_for_uri_async(
        uri: string,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<AppInfo> | null
    ): Promise<boolean> | void;
    launch_default_for_uri_finish(result: AsyncResult): boolean;
    reset_type_associations(content_type: string): void;
}
export type AppInfo = AppInfoPrototype;
export interface AppInfoPrototype extends GObject.Object {
    // Members

    add_supports_type(content_type: string): boolean;
    can_delete(): boolean;
    can_remove_supports_type(): boolean;
    ["delete"](): boolean;
    dup(): AppInfo;
    equal(appinfo2: AppInfo): boolean;
    get_commandline(): string;
    get_description(): string;
    get_display_name(): string;
    get_executable(): string;
    get_icon(): Icon;
    get_id(): string;
    get_name(): string;
    get_supported_types(): string[];
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean;
    launch_uris(uris?: string[] | null, context?: AppLaunchContext | null): boolean;
    launch_uris_async(
        uris?: string[] | null,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    launch_uris_async(
        uris: string[] | null,
        context: AppLaunchContext | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    launch_uris_async(
        uris?: string[] | null,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    launch_uris_finish(result: AsyncResult): boolean;
    remove_supports_type(content_type: string): boolean;
    set_as_default_for_extension(extension: string): boolean;
    set_as_default_for_type(content_type: string): boolean;
    set_as_last_used_for_type(content_type: string): boolean;
    should_show(): boolean;
    supports_files(): boolean;
    supports_uris(): boolean;
    vfunc_add_supports_type(content_type: string): boolean;
    vfunc_can_delete(): boolean;
    vfunc_can_remove_supports_type(): boolean;
    vfunc_do_delete(): boolean;
    vfunc_dup(): AppInfo;
    vfunc_equal(appinfo2: AppInfo): boolean;
    vfunc_get_commandline(): string;
    vfunc_get_description(): string;
    vfunc_get_display_name(): string;
    vfunc_get_executable(): string;
    vfunc_get_icon(): Icon;
    vfunc_get_id(): string;
    vfunc_get_name(): string;
    vfunc_get_supported_types(): string[];
    vfunc_launch(files?: File[] | null, context?: AppLaunchContext | null): boolean;
    vfunc_launch_uris(uris?: string[] | null, context?: AppLaunchContext | null): boolean;
    vfunc_launch_uris_async(
        uris?: string[] | null,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_launch_uris_async(
        uris: string[] | null,
        context: AppLaunchContext | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_launch_uris_async(
        uris?: string[] | null,
        context?: AppLaunchContext | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_launch_uris_finish(result: AsyncResult): boolean;
    vfunc_remove_supports_type(content_type: string): boolean;
    vfunc_set_as_default_for_extension(extension: string): boolean;
    vfunc_set_as_default_for_type(content_type: string): boolean;
    vfunc_set_as_last_used_for_type(content_type: string): boolean;
    vfunc_should_show(): boolean;
    vfunc_supports_files(): boolean;
    vfunc_supports_uris(): boolean;
}

export const AppInfo: AppInfoNamespace;

export interface AsyncInitableNamespace {
    $gtype: GObject.GType<AsyncInitable>;
    prototype: AsyncInitablePrototype;

    newv_async(
        object_type: GObject.GType,
        n_parameters: number,
        parameters: GObject.Parameter,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<AsyncInitable> | null
    ): void;
}
export type AsyncInitable<A extends GObject.Object = GObject.Object> = AsyncInitablePrototype<A>;
export interface AsyncInitablePrototype<A extends GObject.Object = GObject.Object> extends GObject.Object {
    // Members

    init_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    init_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: AsyncResult): boolean;
    new_finish(res: AsyncResult): A;
    vfunc_init_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: AsyncResult): boolean;
}

export const AsyncInitable: AsyncInitableNamespace;

export interface AsyncResultNamespace {
    $gtype: GObject.GType<AsyncResult>;
    prototype: AsyncResultPrototype;
}
export type AsyncResult = AsyncResultPrototype;
export interface AsyncResultPrototype extends GObject.Object {
    // Members

    get_source_object<T = GObject.Object>(): T;
    get_user_data(): any | null;
    is_tagged(source_tag?: any | null): boolean;
    legacy_propagate_error(): boolean;
    vfunc_get_source_object<T = GObject.Object>(): T;
    vfunc_get_user_data(): any | null;
    vfunc_is_tagged(source_tag?: any | null): boolean;
}

export const AsyncResult: AsyncResultNamespace;

export interface ConverterNamespace {
    $gtype: GObject.GType<Converter>;
    prototype: ConverterPrototype;
}
export type Converter = ConverterPrototype;
export interface ConverterPrototype extends GObject.Object {
    // Members

    convert(
        inbuf: Uint8Array | string,
        outbuf: Uint8Array | string,
        flags: ConverterFlags
    ): [ConverterResult, number, number];
    reset(): void;
    vfunc_convert(
        inbuf: Uint8Array | null,
        outbuf: Uint8Array | null,
        flags: ConverterFlags
    ): [ConverterResult, number, number];
    vfunc_reset(): void;
}

export const Converter: ConverterNamespace;

export interface DBusInterfaceNamespace {
    $gtype: GObject.GType<DBusInterface>;
    prototype: DBusInterfacePrototype;
}
export type DBusInterface = DBusInterfacePrototype;
export interface DBusInterfacePrototype extends GObject.Object {
    // Members

    get_object(): DBusObject;
    get_info(): DBusInterfaceInfo;
    set_object(object?: DBusObject | null): void;
    vfunc_dup_object(): DBusObject;
    vfunc_get_info(): DBusInterfaceInfo;
    vfunc_set_object(object?: DBusObject | null): void;
}

export const DBusInterface: DBusInterfaceNamespace;

export interface DBusObjectNamespace {
    $gtype: GObject.GType<DBusObject>;
    prototype: DBusObjectPrototype;
}
export type DBusObject = DBusObjectPrototype;
export interface DBusObjectPrototype extends GObject.Object {
    // Members

    get_interface(interface_name: string): DBusInterface;
    get_interfaces(): DBusInterface[];
    get_object_path(): string;
    vfunc_get_interface(interface_name: string): DBusInterface;
    vfunc_get_interfaces(): DBusInterface[];
    vfunc_get_object_path(): string;
    vfunc_interface_added(interface_: DBusInterface): void;
    vfunc_interface_removed(interface_: DBusInterface): void;
}

export const DBusObject: DBusObjectNamespace;

export interface DBusObjectManagerNamespace {
    $gtype: GObject.GType<DBusObjectManager>;
    prototype: DBusObjectManagerPrototype;
}
export type DBusObjectManager = DBusObjectManagerPrototype;
export interface DBusObjectManagerPrototype extends GObject.Object {
    // Members

    get_interface(object_path: string, interface_name: string): DBusInterface;
    get_object(object_path: string): DBusObject;
    get_object_path(): string;
    get_objects(): DBusObject[];
    vfunc_get_interface(object_path: string, interface_name: string): DBusInterface;
    vfunc_get_object(object_path: string): DBusObject;
    vfunc_get_object_path(): string;
    vfunc_get_objects(): DBusObject[];
    vfunc_interface_added(object: DBusObject, interface_: DBusInterface): void;
    vfunc_interface_removed(object: DBusObject, interface_: DBusInterface): void;
    vfunc_object_added(object: DBusObject): void;
    vfunc_object_removed(object: DBusObject): void;
}

export const DBusObjectManager: DBusObjectManagerNamespace;

export interface DatagramBasedNamespace {
    $gtype: GObject.GType<DatagramBased>;
    prototype: DatagramBasedPrototype;
}
export type DatagramBased = DatagramBasedPrototype;
export interface DatagramBasedPrototype extends GObject.Object {
    // Members

    condition_check(condition: GLib.IOCondition): GLib.IOCondition;
    condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean;
    create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source;
    receive_messages(
        messages: InputMessage[],
        flags: number,
        timeout: number,
        cancellable?: Cancellable | null
    ): number;
    send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number;
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition;
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean;
    vfunc_create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source;
    vfunc_receive_messages(
        messages: InputMessage[],
        flags: number,
        timeout: number,
        cancellable?: Cancellable | null
    ): number;
    vfunc_send_messages(
        messages: OutputMessage[],
        flags: number,
        timeout: number,
        cancellable?: Cancellable | null
    ): number;
}

export const DatagramBased: DatagramBasedNamespace;

export interface DesktopAppInfoLookupNamespace {
    $gtype: GObject.GType<DesktopAppInfoLookup>;
    prototype: DesktopAppInfoLookupPrototype;
}
export type DesktopAppInfoLookup = DesktopAppInfoLookupPrototype;
export interface DesktopAppInfoLookupPrototype extends GObject.Object {
    // Members

    get_default_for_uri_scheme(uri_scheme: string): AppInfo | null;
    vfunc_get_default_for_uri_scheme(uri_scheme: string): AppInfo | null;
}

export const DesktopAppInfoLookup: DesktopAppInfoLookupNamespace;

export interface DriveNamespace {
    $gtype: GObject.GType<Drive>;
    prototype: DrivePrototype;
}
export type Drive = DrivePrototype;
export interface DrivePrototype extends GObject.Object {
    // Members

    can_eject(): boolean;
    can_poll_for_media(): boolean;
    can_start(): boolean;
    can_start_degraded(): boolean;
    can_stop(): boolean;
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    eject(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    eject_finish(result: AsyncResult): boolean;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    eject_with_operation_finish(result: AsyncResult): boolean;
    enumerate_identifiers(): string[];
    get_icon(): Icon;
    get_identifier(kind: string): string | null;
    get_name(): string;
    get_sort_key(): string | null;
    get_start_stop_type(): DriveStartStopType;
    get_symbolic_icon(): Icon;
    get_volumes(): Volume[];
    has_media(): boolean;
    has_volumes(): boolean;
    is_media_check_automatic(): boolean;
    is_media_removable(): boolean;
    is_removable(): boolean;
    poll_for_media(cancellable?: Cancellable | null): Promise<boolean>;
    poll_for_media(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    poll_for_media(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    poll_for_media_finish(result: AsyncResult): boolean;
    start(
        flags: DriveStartFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    start(
        flags: DriveStartFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    start(
        flags: DriveStartFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    start_finish(result: AsyncResult): boolean;
    stop(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    stop(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    stop(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    stop_finish(result: AsyncResult): boolean;
    vfunc_can_eject(): boolean;
    vfunc_can_poll_for_media(): boolean;
    vfunc_can_start(): boolean;
    vfunc_can_start_degraded(): boolean;
    vfunc_can_stop(): boolean;
    vfunc_changed(): void;
    vfunc_disconnected(): void;
    vfunc_eject(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_eject(
        flags: MountUnmountFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_eject(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_eject_button(): void;
    vfunc_eject_finish(result: AsyncResult): boolean;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean;
    vfunc_enumerate_identifiers(): string[];
    vfunc_get_icon(): Icon;
    vfunc_get_identifier(kind: string): string | null;
    vfunc_get_name(): string;
    vfunc_get_sort_key(): string | null;
    vfunc_get_start_stop_type(): DriveStartStopType;
    vfunc_get_symbolic_icon(): Icon;
    vfunc_get_volumes(): Volume[];
    vfunc_has_media(): boolean;
    vfunc_has_volumes(): boolean;
    vfunc_is_media_check_automatic(): boolean;
    vfunc_is_media_removable(): boolean;
    vfunc_is_removable(): boolean;
    vfunc_poll_for_media(cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_poll_for_media(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_poll_for_media(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_poll_for_media_finish(result: AsyncResult): boolean;
    vfunc_start(
        flags: DriveStartFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_start(
        flags: DriveStartFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_start(
        flags: DriveStartFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_start_finish(result: AsyncResult): boolean;
    vfunc_stop(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_stop(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_stop(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_stop_button(): void;
    vfunc_stop_finish(result: AsyncResult): boolean;
}

export const Drive: DriveNamespace;

export interface DtlsClientConnectionNamespace {
    $gtype: GObject.GType<DtlsClientConnection>;
    prototype: DtlsClientConnectionPrototype;

    ["new"](base_socket: DatagramBased, server_identity?: SocketConnectable | null): DtlsClientConnection;
}
export type DtlsClientConnection = DtlsClientConnectionPrototype;
export interface DtlsClientConnectionPrototype extends DatagramBased {
    // Properties
    accepted_cas: any[];
    acceptedCas: any[];
    server_identity: SocketConnectable;
    serverIdentity: SocketConnectable;
    validation_flags: TlsCertificateFlags;
    validationFlags: TlsCertificateFlags;

    // Members

    get_accepted_cas(): GLib.List;
    get_server_identity(): SocketConnectable;
    get_validation_flags(): TlsCertificateFlags;
    set_server_identity(identity: SocketConnectable): void;
    set_validation_flags(flags: TlsCertificateFlags): void;
}

export const DtlsClientConnection: DtlsClientConnectionNamespace;

export interface DtlsConnectionNamespace {
    $gtype: GObject.GType<DtlsConnection>;
    prototype: DtlsConnectionPrototype;
}
export type DtlsConnection = DtlsConnectionPrototype;
export interface DtlsConnectionPrototype extends DatagramBased {
    // Properties
    advertised_protocols: string[];
    advertisedProtocols: string[];
    base_socket: DatagramBased;
    baseSocket: DatagramBased;
    certificate: TlsCertificate;
    database: TlsDatabase;
    interaction: TlsInteraction;
    negotiated_protocol: string;
    negotiatedProtocol: string;
    peer_certificate: TlsCertificate;
    peerCertificate: TlsCertificate;
    peer_certificate_errors: TlsCertificateFlags;
    peerCertificateErrors: TlsCertificateFlags;
    rehandshake_mode: TlsRehandshakeMode;
    rehandshakeMode: TlsRehandshakeMode;
    require_close_notify: boolean;
    requireCloseNotify: boolean;

    // Members

    close(cancellable?: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    close_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    close_finish(result: AsyncResult): boolean;
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
    get_certificate(): TlsCertificate | null;
    get_channel_binding_data(type: TlsChannelBindingType): [boolean, Uint8Array | null];
    get_database(): TlsDatabase | null;
    get_interaction(): TlsInteraction | null;
    get_negotiated_protocol(): string | null;
    get_peer_certificate(): TlsCertificate | null;
    get_peer_certificate_errors(): TlsCertificateFlags;
    get_rehandshake_mode(): TlsRehandshakeMode;
    get_require_close_notify(): boolean;
    handshake(cancellable?: Cancellable | null): boolean;
    handshake_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    handshake_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    handshake_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    handshake_finish(result: AsyncResult): boolean;
    set_advertised_protocols(protocols?: string[] | null): void;
    set_certificate(certificate: TlsCertificate): void;
    set_database(database?: TlsDatabase | null): void;
    set_interaction(interaction?: TlsInteraction | null): void;
    set_rehandshake_mode(mode: TlsRehandshakeMode): void;
    set_require_close_notify(require_close_notify: boolean): void;
    shutdown(shutdown_read: boolean, shutdown_write: boolean, cancellable?: Cancellable | null): boolean;
    shutdown_async(
        shutdown_read: boolean,
        shutdown_write: boolean,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    shutdown_async(
        shutdown_read: boolean,
        shutdown_write: boolean,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    shutdown_async(
        shutdown_read: boolean,
        shutdown_write: boolean,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    shutdown_finish(result: AsyncResult): boolean;
    vfunc_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
    vfunc_get_binding_data(type: TlsChannelBindingType, data: Uint8Array | string): boolean;
    vfunc_get_negotiated_protocol(): string | null;
    vfunc_handshake(cancellable?: Cancellable | null): boolean;
    vfunc_handshake_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_handshake_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_handshake_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_handshake_finish(result: AsyncResult): boolean;
    vfunc_set_advertised_protocols(protocols?: string[] | null): void;
    vfunc_shutdown(shutdown_read: boolean, shutdown_write: boolean, cancellable?: Cancellable | null): boolean;
    vfunc_shutdown_async(
        shutdown_read: boolean,
        shutdown_write: boolean,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_shutdown_async(
        shutdown_read: boolean,
        shutdown_write: boolean,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_shutdown_async(
        shutdown_read: boolean,
        shutdown_write: boolean,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_shutdown_finish(result: AsyncResult): boolean;
}

export const DtlsConnection: DtlsConnectionNamespace;

export interface DtlsServerConnectionNamespace {
    $gtype: GObject.GType<DtlsServerConnection>;
    prototype: DtlsServerConnectionPrototype;

    ["new"](base_socket: DatagramBased, certificate?: TlsCertificate | null): DtlsServerConnection;
}
export type DtlsServerConnection = DtlsServerConnectionPrototype;
export interface DtlsServerConnectionPrototype extends DatagramBased {
    // Properties
    authentication_mode: TlsAuthenticationMode;
    authenticationMode: TlsAuthenticationMode;
}

export const DtlsServerConnection: DtlsServerConnectionNamespace;

export interface FileNamespace {
    $gtype: GObject.GType<File>;
    prototype: FilePrototype;

    new_for_commandline_arg(arg: string): File;
    new_for_commandline_arg_and_cwd(arg: string, cwd: string): File;
    new_for_path(path: string): File;
    new_for_uri(uri: string): File;
    new_tmp(tmpl: string | null): [File, FileIOStream];
    parse_name(parse_name: string): File;
}
export type File = FilePrototype;
export interface FilePrototype extends GObject.Object {
    // Members

    append_to(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream;
    append_to_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileOutputStream>;
    append_to_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    append_to_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileOutputStream> | void;
    append_to_finish(res: AsyncResult): FileOutputStream;
    copy(
        destination: File,
        flags: FileCopyFlags,
        cancellable?: Cancellable | null,
        progress_callback?: FileProgressCallback | null
    ): boolean;
    copy_async(destination: File, flags: FileCopyFlags, io_priority: number, cancellable?: Cancellable | null): void;
    copy_attributes(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null): boolean;
    copy_finish(res: AsyncResult): boolean;
    create(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream;
    create_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileOutputStream>;
    create_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    create_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileOutputStream> | void;
    create_finish(res: AsyncResult): FileOutputStream;
    create_readwrite(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream;
    create_readwrite_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileIOStream>;
    create_readwrite_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    create_readwrite_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileIOStream> | void;
    create_readwrite_finish(res: AsyncResult): FileIOStream;
    ["delete"](cancellable?: Cancellable | null): boolean;
    delete_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    delete_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    delete_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_finish(result: AsyncResult): boolean;
    dup(): File;
    eject_mountable(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    eject_mountable(
        flags: MountUnmountFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    eject_mountable(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    eject_mountable_finish(result: AsyncResult): boolean;
    eject_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    eject_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    eject_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    eject_mountable_with_operation_finish(result: AsyncResult): boolean;
    enumerate_children(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileEnumerator;
    enumerate_children_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileEnumerator>;
    enumerate_children_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    enumerate_children_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileEnumerator> | void;
    enumerate_children_finish(res: AsyncResult): FileEnumerator;
    equal(file2: File): boolean;
    find_enclosing_mount(cancellable?: Cancellable | null): Mount;
    find_enclosing_mount_async(io_priority: number, cancellable?: Cancellable | null): Promise<Mount>;
    find_enclosing_mount_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    find_enclosing_mount_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<Mount> | void;
    find_enclosing_mount_finish(res: AsyncResult): Mount;
    get_basename(): string | null;
    get_child(name: string): File;
    get_child_for_display_name(display_name: string): File;
    get_parent(): File | null;
    get_parse_name(): string;
    get_path(): string | null;
    get_relative_path(descendant: File): string | null;
    get_uri(): string;
    get_uri_scheme(): string;
    has_parent(parent?: File | null): boolean;
    has_prefix(prefix: File): boolean;
    has_uri_scheme(uri_scheme: string): boolean;
    hash(): number;
    is_native(): boolean;
    load_bytes(cancellable?: Cancellable | null): [GLib.Bytes, string | null];
    load_bytes_async(cancellable?: Cancellable | null): Promise<[GLib.Bytes, string | null]>;
    load_bytes_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    load_bytes_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[GLib.Bytes, string | null]> | void;
    load_bytes_finish(result: AsyncResult): [GLib.Bytes, string | null];
    load_contents(cancellable: Cancellable | null): [boolean, Uint8Array, string | null];
    load_contents_async(cancellable?: Cancellable | null): Promise<[Uint8Array, string | null]>;
    load_contents_async(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    load_contents_async(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[Uint8Array, string | null]> | void;
    load_contents_finish(res: AsyncResult): [boolean, Uint8Array, string | null];
    load_partial_contents_finish(res: AsyncResult): [boolean, Uint8Array, string | null];
    make_directory(cancellable?: Cancellable | null): boolean;
    make_directory_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    make_directory_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    make_directory_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    make_directory_finish(result: AsyncResult): boolean;
    make_directory_with_parents(cancellable?: Cancellable | null): boolean;
    make_symbolic_link(symlink_value: string, cancellable?: Cancellable | null): boolean;
    measure_disk_usage_finish(result: AsyncResult): [boolean, number | null, number | null, number | null];
    monitor(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor;
    monitor_directory(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor;
    monitor_file(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor;
    mount_enclosing_volume(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    mount_enclosing_volume(
        flags: MountMountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    mount_enclosing_volume(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    mount_enclosing_volume_finish(result: AsyncResult): boolean;
    mount_mountable(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<File>;
    mount_mountable(
        flags: MountMountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    mount_mountable(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<File> | void;
    mount_mountable_finish(result: AsyncResult): File;
    move(
        destination: File,
        flags: FileCopyFlags,
        cancellable?: Cancellable | null,
        progress_callback?: FileProgressCallback | null
    ): boolean;
    open_readwrite(cancellable?: Cancellable | null): FileIOStream;
    open_readwrite_async(io_priority: number, cancellable?: Cancellable | null): Promise<FileIOStream>;
    open_readwrite_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    open_readwrite_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileIOStream> | void;
    open_readwrite_finish(res: AsyncResult): FileIOStream;
    peek_path(): string | null;
    poll_mountable(cancellable?: Cancellable | null): Promise<boolean>;
    poll_mountable(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    poll_mountable(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    poll_mountable_finish(result: AsyncResult): boolean;
    query_default_handler(cancellable?: Cancellable | null): AppInfo;
    query_default_handler_async(io_priority: number, cancellable?: Cancellable | null): Promise<AppInfo>;
    query_default_handler_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    query_default_handler_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<AppInfo> | void;
    query_default_handler_finish(result: AsyncResult): AppInfo;
    query_exists(cancellable?: Cancellable | null): boolean;
    query_file_type(flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileType;
    query_filesystem_info(attributes: string, cancellable?: Cancellable | null): FileInfo;
    query_filesystem_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileInfo>;
    query_filesystem_info_async(
        attributes: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    query_filesystem_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    query_filesystem_info_finish(res: AsyncResult): FileInfo;
    query_info(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo;
    query_info_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileInfo>;
    query_info_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    query_info_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    query_info_finish(res: AsyncResult): FileInfo;
    query_settable_attributes(cancellable?: Cancellable | null): FileAttributeInfoList;
    query_writable_namespaces(cancellable?: Cancellable | null): FileAttributeInfoList;
    read(cancellable?: Cancellable | null): FileInputStream;
    read_async(io_priority: number, cancellable?: Cancellable | null): Promise<FileInputStream>;
    read_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    read_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInputStream> | void;
    read_finish(res: AsyncResult): FileInputStream;
    replace(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable?: Cancellable | null
    ): FileOutputStream;
    replace_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileOutputStream>;
    replace_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    replace_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileOutputStream> | void;
    replace_contents(
        contents: Uint8Array | string,
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable?: Cancellable | null
    ): [boolean, string | null];
    replace_contents_async(
        contents: Uint8Array | string,
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable?: Cancellable | null
    ): Promise<[string | null]>;
    replace_contents_async(
        contents: Uint8Array | string,
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    replace_contents_async(
        contents: Uint8Array | string,
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    replace_contents_bytes_async(
        contents: GLib.Bytes | Uint8Array,
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): void;
    replace_contents_finish(res: AsyncResult): [boolean, string | null];
    replace_finish(res: AsyncResult): FileOutputStream;
    replace_readwrite(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable?: Cancellable | null
    ): FileIOStream;
    replace_readwrite_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileIOStream>;
    replace_readwrite_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    replace_readwrite_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileIOStream> | void;
    replace_readwrite_finish(res: AsyncResult): FileIOStream;
    resolve_relative_path(relative_path: string): File;
    set_attribute(
        attribute: string,
        type: FileAttributeType,
        value_p: any | null,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    set_attribute_byte_string(
        attribute: string,
        value: string,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    set_attribute_int32(
        attribute: string,
        value: number,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    set_attribute_int64(
        attribute: string,
        value: number,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    set_attribute_string(
        attribute: string,
        value: string,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    set_attribute_uint32(
        attribute: string,
        value: number,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    set_attribute_uint64(
        attribute: string,
        value: number,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    set_attributes_async(
        info: FileInfo,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<[FileInfo]>;
    set_attributes_async(
        info: FileInfo,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    set_attributes_async(
        info: FileInfo,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[FileInfo]> | void;
    set_attributes_finish(result: AsyncResult): [boolean, FileInfo];
    set_attributes_from_info(info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean;
    set_display_name(display_name: string, cancellable?: Cancellable | null): File;
    set_display_name_async(display_name: string, io_priority: number, cancellable?: Cancellable | null): Promise<File>;
    set_display_name_async(
        display_name: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    set_display_name_async(
        display_name: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<File> | void;
    set_display_name_finish(res: AsyncResult): File;
    start_mountable(
        flags: DriveStartFlags,
        start_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    start_mountable(
        flags: DriveStartFlags,
        start_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    start_mountable(
        flags: DriveStartFlags,
        start_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    start_mountable_finish(result: AsyncResult): boolean;
    stop_mountable(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    stop_mountable(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    stop_mountable(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    stop_mountable_finish(result: AsyncResult): boolean;
    supports_thread_contexts(): boolean;
    trash(cancellable?: Cancellable | null): boolean;
    trash_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    trash_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    trash_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    trash_finish(result: AsyncResult): boolean;
    unmount_mountable(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    unmount_mountable(
        flags: MountUnmountFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    unmount_mountable(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    unmount_mountable_finish(result: AsyncResult): boolean;
    unmount_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    unmount_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    unmount_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    unmount_mountable_with_operation_finish(result: AsyncResult): boolean;
    vfunc_append_to(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream;
    vfunc_append_to_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileOutputStream>;
    vfunc_append_to_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_append_to_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileOutputStream> | void;
    vfunc_append_to_finish(res: AsyncResult): FileOutputStream;
    vfunc_copy(
        destination: File,
        flags: FileCopyFlags,
        cancellable?: Cancellable | null,
        progress_callback?: FileProgressCallback | null
    ): boolean;
    vfunc_copy_async(
        destination: File,
        flags: FileCopyFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): void;
    vfunc_copy_finish(res: AsyncResult): boolean;
    vfunc_create(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream;
    vfunc_create_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileOutputStream>;
    vfunc_create_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_create_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileOutputStream> | void;
    vfunc_create_finish(res: AsyncResult): FileOutputStream;
    vfunc_create_readwrite(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream;
    vfunc_create_readwrite_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileIOStream>;
    vfunc_create_readwrite_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_create_readwrite_async(
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileIOStream> | void;
    vfunc_create_readwrite_finish(res: AsyncResult): FileIOStream;
    vfunc_delete_file(cancellable?: Cancellable | null): boolean;
    vfunc_delete_file_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_delete_file_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_delete_file_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_delete_file_finish(result: AsyncResult): boolean;
    vfunc_dup(): File;
    vfunc_eject_mountable(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_eject_mountable(
        flags: MountUnmountFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_eject_mountable(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_eject_mountable_finish(result: AsyncResult): boolean;
    vfunc_eject_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_eject_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_eject_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_eject_mountable_with_operation_finish(result: AsyncResult): boolean;
    vfunc_enumerate_children(
        attributes: string,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): FileEnumerator;
    vfunc_enumerate_children_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileEnumerator>;
    vfunc_enumerate_children_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_enumerate_children_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileEnumerator> | void;
    vfunc_enumerate_children_finish(res: AsyncResult): FileEnumerator;
    vfunc_equal(file2: File): boolean;
    vfunc_find_enclosing_mount(cancellable?: Cancellable | null): Mount;
    vfunc_find_enclosing_mount_async(io_priority: number, cancellable?: Cancellable | null): Promise<Mount>;
    vfunc_find_enclosing_mount_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_find_enclosing_mount_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<Mount> | void;
    vfunc_find_enclosing_mount_finish(res: AsyncResult): Mount;
    vfunc_get_basename(): string;
    vfunc_get_child_for_display_name(display_name: string): File;
    vfunc_get_parent(): File | null;
    vfunc_get_parse_name(): string;
    vfunc_get_path(): string;
    vfunc_get_relative_path(descendant: File): string;
    vfunc_get_uri(): string;
    vfunc_get_uri_scheme(): string;
    vfunc_has_uri_scheme(uri_scheme: string): boolean;
    vfunc_hash(): number;
    vfunc_is_native(): boolean;
    vfunc_make_directory(cancellable?: Cancellable | null): boolean;
    vfunc_make_directory_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_make_directory_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_make_directory_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_make_directory_finish(result: AsyncResult): boolean;
    vfunc_make_symbolic_link(symlink_value: string, cancellable?: Cancellable | null): boolean;
    vfunc_measure_disk_usage_finish(result: AsyncResult): [boolean, number | null, number | null, number | null];
    vfunc_monitor_dir(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor;
    vfunc_monitor_file(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor;
    vfunc_mount_enclosing_volume(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_mount_enclosing_volume(
        flags: MountMountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_mount_enclosing_volume(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_mount_enclosing_volume_finish(result: AsyncResult): boolean;
    vfunc_mount_mountable(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<File>;
    vfunc_mount_mountable(
        flags: MountMountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_mount_mountable(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<File> | void;
    vfunc_mount_mountable_finish(result: AsyncResult): File;
    vfunc_move(
        destination: File,
        flags: FileCopyFlags,
        cancellable?: Cancellable | null,
        progress_callback?: FileProgressCallback | null
    ): boolean;
    vfunc_open_readwrite(cancellable?: Cancellable | null): FileIOStream;
    vfunc_open_readwrite_async(io_priority: number, cancellable?: Cancellable | null): Promise<FileIOStream>;
    vfunc_open_readwrite_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_open_readwrite_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileIOStream> | void;
    vfunc_open_readwrite_finish(res: AsyncResult): FileIOStream;
    vfunc_poll_mountable(cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_poll_mountable(cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_poll_mountable(
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_poll_mountable_finish(result: AsyncResult): boolean;
    vfunc_prefix_matches(file: File): boolean;
    vfunc_query_filesystem_info(attributes: string, cancellable?: Cancellable | null): FileInfo;
    vfunc_query_filesystem_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileInfo>;
    vfunc_query_filesystem_info_async(
        attributes: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_query_filesystem_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    vfunc_query_filesystem_info_finish(res: AsyncResult): FileInfo;
    vfunc_query_info(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo;
    vfunc_query_info_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileInfo>;
    vfunc_query_info_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_query_info_async(
        attributes: string,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInfo> | void;
    vfunc_query_info_finish(res: AsyncResult): FileInfo;
    vfunc_query_settable_attributes(cancellable?: Cancellable | null): FileAttributeInfoList;
    vfunc_query_writable_namespaces(cancellable?: Cancellable | null): FileAttributeInfoList;
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null): Promise<FileInputStream>;
    vfunc_read_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_read_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileInputStream> | void;
    vfunc_read_finish(res: AsyncResult): FileInputStream;
    vfunc_read_fn(cancellable?: Cancellable | null): FileInputStream;
    vfunc_replace(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable?: Cancellable | null
    ): FileOutputStream;
    vfunc_replace_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileOutputStream>;
    vfunc_replace_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_replace_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileOutputStream> | void;
    vfunc_replace_finish(res: AsyncResult): FileOutputStream;
    vfunc_replace_readwrite(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        cancellable?: Cancellable | null
    ): FileIOStream;
    vfunc_replace_readwrite_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<FileIOStream>;
    vfunc_replace_readwrite_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_replace_readwrite_async(
        etag: string | null,
        make_backup: boolean,
        flags: FileCreateFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<FileIOStream> | void;
    vfunc_replace_readwrite_finish(res: AsyncResult): FileIOStream;
    vfunc_resolve_relative_path(relative_path: string): File;
    vfunc_set_attribute(
        attribute: string,
        type: FileAttributeType,
        value_p: any | null,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    vfunc_set_attributes_async(
        info: FileInfo,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<[FileInfo]>;
    vfunc_set_attributes_async(
        info: FileInfo,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_set_attributes_async(
        info: FileInfo,
        flags: FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[FileInfo]> | void;
    vfunc_set_attributes_finish(result: AsyncResult): [boolean, FileInfo];
    vfunc_set_attributes_from_info(
        info: FileInfo,
        flags: FileQueryInfoFlags,
        cancellable?: Cancellable | null
    ): boolean;
    vfunc_set_display_name(display_name: string, cancellable?: Cancellable | null): File;
    vfunc_set_display_name_async(
        display_name: string,
        io_priority: number,
        cancellable?: Cancellable | null
    ): Promise<File>;
    vfunc_set_display_name_async(
        display_name: string,
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_set_display_name_async(
        display_name: string,
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<File> | void;
    vfunc_set_display_name_finish(res: AsyncResult): File;
    vfunc_start_mountable(
        flags: DriveStartFlags,
        start_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_start_mountable(
        flags: DriveStartFlags,
        start_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_start_mountable(
        flags: DriveStartFlags,
        start_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_start_mountable_finish(result: AsyncResult): boolean;
    vfunc_stop_mountable(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_stop_mountable(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_stop_mountable(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_stop_mountable_finish(result: AsyncResult): boolean;
    vfunc_trash(cancellable?: Cancellable | null): boolean;
    vfunc_trash_async(io_priority: number, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_trash_async(
        io_priority: number,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_trash_async(
        io_priority: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_trash_finish(result: AsyncResult): boolean;
    vfunc_unmount_mountable(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_unmount_mountable(
        flags: MountUnmountFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_unmount_mountable(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_unmount_mountable_finish(result: AsyncResult): boolean;
    vfunc_unmount_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_unmount_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_unmount_mountable_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_unmount_mountable_with_operation_finish(result: AsyncResult): boolean;
}

export const File: FileNamespace;

export interface FileDescriptorBasedNamespace {
    $gtype: GObject.GType<FileDescriptorBased>;
    prototype: FileDescriptorBasedPrototype;
}
export type FileDescriptorBased = FileDescriptorBasedPrototype;
export interface FileDescriptorBasedPrototype extends GObject.Object {
    // Members

    get_fd(): number;
    vfunc_get_fd(): number;
}

export const FileDescriptorBased: FileDescriptorBasedNamespace;

export interface IconNamespace {
    $gtype: GObject.GType<Icon>;
    prototype: IconPrototype;

    deserialize(value: GLib.Variant): Icon;
    hash(icon: any): number;
    new_for_string(str: string): Icon;
}
export type Icon = IconPrototype;
export interface IconPrototype extends GObject.Object {
    // Members

    equal(icon2?: Icon | null): boolean;
    serialize(): GLib.Variant;
    to_string(): string | null;
    vfunc_equal(icon2?: Icon | null): boolean;
    vfunc_hash(): number;
    vfunc_serialize(): GLib.Variant;
}

export const Icon: IconNamespace;

export interface InitableNamespace {
    $gtype: GObject.GType<Initable>;
    prototype: InitablePrototype;

    newv<T = GObject.Object>(
        object_type: GObject.GType,
        parameters: GObject.Parameter[],
        cancellable?: Cancellable | null
    ): T;
    newv(...args: never[]): never;
}
export type Initable = InitablePrototype;
export interface InitablePrototype extends GObject.Object {
    // Members

    init(cancellable?: Cancellable | null): boolean;
    vfunc_init(cancellable?: Cancellable | null): boolean;
}

export const Initable: InitableNamespace;

export interface ListModelNamespace {
    $gtype: GObject.GType<ListModel>;
    prototype: ListModelPrototype;
}
export type ListModel<A extends GObject.Object = GObject.Object> = ListModelPrototype<A>;
export interface ListModelPrototype<A extends GObject.Object = GObject.Object> extends GObject.Object {
    // Members

    get_item_type(): GObject.GType;
    get_n_items(): number;
    get_item(position: number): A | null;
    items_changed(position: number, removed: number, added: number): void;
    vfunc_get_item(position: number): A | null;
    vfunc_get_item_type(): GObject.GType;
    vfunc_get_n_items(): number;
}

export const ListModel: ListModelNamespace;

export interface LoadableIconNamespace {
    $gtype: GObject.GType<LoadableIcon>;
    prototype: LoadableIconPrototype;
}
export type LoadableIcon = LoadableIconPrototype;
export interface LoadableIconPrototype extends Icon {
    // Members

    load(size: number, cancellable?: Cancellable | null): [InputStream, string | null];
    load_async(size: number, cancellable?: Cancellable | null): Promise<[InputStream, string | null]>;
    load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    load_async(
        size: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[InputStream, string | null]> | void;
    load_finish(res: AsyncResult): [InputStream, string | null];
    vfunc_load(size: number, cancellable?: Cancellable | null): [InputStream, string | null];
    vfunc_load_async(size: number, cancellable?: Cancellable | null): Promise<[InputStream, string | null]>;
    vfunc_load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_load_async(
        size: number,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<[InputStream, string | null]> | void;
    vfunc_load_finish(res: AsyncResult): [InputStream, string | null];
}

export const LoadableIcon: LoadableIconNamespace;

export interface MemoryMonitorNamespace {
    $gtype: GObject.GType<MemoryMonitor>;
    prototype: MemoryMonitorPrototype;

    dup_default(): MemoryMonitor;
}
export type MemoryMonitor = MemoryMonitorPrototype;
export interface MemoryMonitorPrototype extends Initable {
    // Members

    vfunc_low_memory_warning(level: MemoryMonitorWarningLevel): void;
}

export const MemoryMonitor: MemoryMonitorNamespace;

export interface MountNamespace {
    $gtype: GObject.GType<Mount>;
    prototype: MountPrototype;
}
export type Mount = MountPrototype;
export interface MountPrototype extends GObject.Object {
    // Members

    can_eject(): boolean;
    can_unmount(): boolean;
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    eject(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    eject_finish(result: AsyncResult): boolean;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    eject_with_operation_finish(result: AsyncResult): boolean;
    get_default_location(): File;
    get_drive(): Drive | null;
    get_icon(): Icon;
    get_name(): string;
    get_root(): File;
    get_sort_key(): string | null;
    get_symbolic_icon(): Icon;
    get_uuid(): string | null;
    get_volume(): Volume | null;
    guess_content_type(force_rescan: boolean, cancellable?: Cancellable | null): Promise<string[]>;
    guess_content_type(
        force_rescan: boolean,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    guess_content_type(
        force_rescan: boolean,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<string[]> | void;
    guess_content_type_finish(result: AsyncResult): string[];
    guess_content_type_sync(force_rescan: boolean, cancellable?: Cancellable | null): string[];
    is_shadowed(): boolean;
    remount(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    remount(
        flags: MountMountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    remount(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    remount_finish(result: AsyncResult): boolean;
    shadow(): void;
    unmount(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    unmount(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    unmount(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    unmount_finish(result: AsyncResult): boolean;
    unmount_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    unmount_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    unmount_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    unmount_with_operation_finish(result: AsyncResult): boolean;
    unshadow(): void;
    vfunc_can_eject(): boolean;
    vfunc_can_unmount(): boolean;
    vfunc_changed(): void;
    vfunc_eject(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_eject(
        flags: MountUnmountFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_eject(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_eject_finish(result: AsyncResult): boolean;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean;
    vfunc_get_default_location(): File;
    vfunc_get_drive(): Drive | null;
    vfunc_get_icon(): Icon;
    vfunc_get_name(): string;
    vfunc_get_root(): File;
    vfunc_get_sort_key(): string | null;
    vfunc_get_symbolic_icon(): Icon;
    vfunc_get_uuid(): string | null;
    vfunc_get_volume(): Volume | null;
    vfunc_guess_content_type(force_rescan: boolean, cancellable?: Cancellable | null): Promise<string[]>;
    vfunc_guess_content_type(
        force_rescan: boolean,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_guess_content_type(
        force_rescan: boolean,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<string[]> | void;
    vfunc_guess_content_type_finish(result: AsyncResult): string[];
    vfunc_guess_content_type_sync(force_rescan: boolean, cancellable?: Cancellable | null): string[];
    vfunc_pre_unmount(): void;
    vfunc_remount(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_remount(
        flags: MountMountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_remount(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_remount_finish(result: AsyncResult): boolean;
    vfunc_unmount(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_unmount(
        flags: MountUnmountFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_unmount(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_unmount_finish(result: AsyncResult): boolean;
    vfunc_unmount_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_unmount_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_unmount_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_unmount_with_operation_finish(result: AsyncResult): boolean;
    vfunc_unmounted(): void;
}

export const Mount: MountNamespace;

export interface NetworkMonitorNamespace {
    $gtype: GObject.GType<NetworkMonitor>;
    prototype: NetworkMonitorPrototype;

    get_default(): NetworkMonitor;
}
export type NetworkMonitor = NetworkMonitorPrototype;
export interface NetworkMonitorPrototype extends Initable {
    // Properties
    connectivity: NetworkConnectivity;
    network_available: boolean;
    networkAvailable: boolean;
    network_metered: boolean;
    networkMetered: boolean;

    // Members

    can_reach(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean;
    can_reach_async(connectable: SocketConnectable, cancellable?: Cancellable | null): Promise<boolean>;
    can_reach_async(
        connectable: SocketConnectable,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    can_reach_async(
        connectable: SocketConnectable,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    can_reach_finish(result: AsyncResult): boolean;
    get_connectivity(): NetworkConnectivity;
    get_network_available(): boolean;
    get_network_metered(): boolean;
    vfunc_can_reach(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean;
    vfunc_can_reach_async(connectable: SocketConnectable, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_can_reach_async(
        connectable: SocketConnectable,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_can_reach_async(
        connectable: SocketConnectable,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_can_reach_finish(result: AsyncResult): boolean;
    vfunc_network_changed(network_available: boolean): void;
}

export const NetworkMonitor: NetworkMonitorNamespace;

export interface PollableInputStreamNamespace {
    $gtype: GObject.GType<PollableInputStream>;
    prototype: PollableInputStreamPrototype;
}
export type PollableInputStream = PollableInputStreamPrototype;
export interface PollableInputStreamPrototype extends InputStream {
    // Members

    can_poll(): boolean;
    create_source(cancellable?: Cancellable | null): GLib.Source;
    is_readable(): boolean;
    read_nonblocking(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source;
    vfunc_is_readable(): boolean;
    vfunc_read_nonblocking(buffer?: Uint8Array | null): number;
}

export const PollableInputStream: PollableInputStreamNamespace;

export interface PollableOutputStreamNamespace {
    $gtype: GObject.GType<PollableOutputStream>;
    prototype: PollableOutputStreamPrototype;
}
export type PollableOutputStream = PollableOutputStreamPrototype;
export interface PollableOutputStreamPrototype extends OutputStream {
    // Members

    can_poll(): boolean;
    create_source(cancellable?: Cancellable | null): GLib.Source;
    is_writable(): boolean;
    write_nonblocking(buffer: Uint8Array | string, cancellable?: Cancellable | null): number;
    writev_nonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [PollableReturn, number | null];
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source;
    vfunc_is_writable(): boolean;
    vfunc_write_nonblocking(buffer?: Uint8Array | null): number;
    vfunc_writev_nonblocking(vectors: OutputVector[]): [PollableReturn, number | null];
}

export const PollableOutputStream: PollableOutputStreamNamespace;

export interface ProxyNamespace {
    $gtype: GObject.GType<Proxy>;
    prototype: ProxyPrototype;

    get_default_for_protocol(protocol: string): Proxy;
}
export type Proxy = ProxyPrototype;
export interface ProxyPrototype extends GObject.Object {
    // Members

    connect(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null): IOStream;
    connect(...args: never[]): never;
    connect_async(
        connection: IOStream,
        proxy_address: ProxyAddress,
        cancellable?: Cancellable | null
    ): Promise<IOStream>;
    connect_async(
        connection: IOStream,
        proxy_address: ProxyAddress,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    connect_async(
        connection: IOStream,
        proxy_address: ProxyAddress,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<IOStream> | void;
    connect_finish(result: AsyncResult): IOStream;
    supports_hostname(): boolean;
    vfunc_connect(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null): IOStream;
    vfunc_connect_async(
        connection: IOStream,
        proxy_address: ProxyAddress,
        cancellable?: Cancellable | null
    ): Promise<IOStream>;
    vfunc_connect_async(
        connection: IOStream,
        proxy_address: ProxyAddress,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_connect_async(
        connection: IOStream,
        proxy_address: ProxyAddress,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<IOStream> | void;
    vfunc_connect_finish(result: AsyncResult): IOStream;
    vfunc_supports_hostname(): boolean;
}

export const Proxy: ProxyNamespace;

export interface ProxyResolverNamespace {
    $gtype: GObject.GType<ProxyResolver>;
    prototype: ProxyResolverPrototype;

    get_default(): ProxyResolver;
}
export type ProxyResolver = ProxyResolverPrototype;
export interface ProxyResolverPrototype extends GObject.Object {
    // Members

    is_supported(): boolean;
    lookup(uri: string, cancellable?: Cancellable | null): string[];
    lookup_async(uri: string, cancellable?: Cancellable | null): Promise<string[]>;
    lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    lookup_async(
        uri: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<string[]> | void;
    lookup_finish(result: AsyncResult): string[];
    vfunc_is_supported(): boolean;
    vfunc_lookup(uri: string, cancellable?: Cancellable | null): string[];
    vfunc_lookup_async(uri: string, cancellable?: Cancellable | null): Promise<string[]>;
    vfunc_lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    vfunc_lookup_async(
        uri: string,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<string[]> | void;
    vfunc_lookup_finish(result: AsyncResult): string[];
}

export const ProxyResolver: ProxyResolverNamespace;

export interface RemoteActionGroupNamespace {
    $gtype: GObject.GType<RemoteActionGroup>;
    prototype: RemoteActionGroupPrototype;
}
export type RemoteActionGroup = RemoteActionGroupPrototype;
export interface RemoteActionGroupPrototype extends ActionGroup {
    // Members

    activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void;
    change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void;
    vfunc_activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void;
    vfunc_change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void;
}

export const RemoteActionGroup: RemoteActionGroupNamespace;

export interface SeekableNamespace {
    $gtype: GObject.GType<Seekable>;
    prototype: SeekablePrototype;
}
export type Seekable = SeekablePrototype;
export interface SeekablePrototype extends GObject.Object {
    // Members

    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable?: Cancellable | null): boolean;
    vfunc_can_seek(): boolean;
    vfunc_can_truncate(): boolean;
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean;
    vfunc_tell(): number;
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean;
}

export const Seekable: SeekableNamespace;

export interface SocketConnectableNamespace {
    $gtype: GObject.GType<SocketConnectable>;
    prototype: SocketConnectablePrototype;
}
export type SocketConnectable = SocketConnectablePrototype;
export interface SocketConnectablePrototype extends GObject.Object {
    // Members

    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
    vfunc_enumerate(): SocketAddressEnumerator;
    vfunc_proxy_enumerate(): SocketAddressEnumerator;
    vfunc_to_string(): string;
}

export const SocketConnectable: SocketConnectableNamespace;

export interface TlsBackendNamespace {
    $gtype: GObject.GType<TlsBackend>;
    prototype: TlsBackendPrototype;

    get_default(): TlsBackend;
}
export type TlsBackend = TlsBackendPrototype;
export interface TlsBackendPrototype extends GObject.Object {
    // Members

    get_certificate_type(): GObject.GType;
    get_client_connection_type(): GObject.GType;
    get_default_database(): TlsDatabase;
    get_dtls_client_connection_type(): GObject.GType;
    get_dtls_server_connection_type(): GObject.GType;
    get_file_database_type(): GObject.GType;
    get_server_connection_type(): GObject.GType;
    set_default_database(database?: TlsDatabase | null): void;
    supports_dtls(): boolean;
    supports_tls(): boolean;
    vfunc_get_default_database(): TlsDatabase;
    vfunc_supports_dtls(): boolean;
    vfunc_supports_tls(): boolean;
}

export const TlsBackend: TlsBackendNamespace;

export interface TlsClientConnectionNamespace {
    $gtype: GObject.GType<TlsClientConnection>;
    prototype: TlsClientConnectionPrototype;

    ["new"](base_io_stream: IOStream, server_identity?: SocketConnectable | null): TlsClientConnection;
}
export type TlsClientConnection = TlsClientConnectionPrototype;
export interface TlsClientConnectionPrototype extends TlsConnection {
    // Properties
    accepted_cas: any[];
    acceptedCas: any[];
    server_identity: SocketConnectable;
    serverIdentity: SocketConnectable;
    use_ssl3: boolean;
    useSsl3: boolean;
    validation_flags: TlsCertificateFlags;
    validationFlags: TlsCertificateFlags;

    // Members

    copy_session_state(source: TlsClientConnection): void;
    get_accepted_cas(): GLib.List;
    get_server_identity(): SocketConnectable;
    get_use_ssl3(): boolean;
    get_validation_flags(): TlsCertificateFlags;
    set_server_identity(identity: SocketConnectable): void;
    set_use_ssl3(use_ssl3: boolean): void;
    set_validation_flags(flags: TlsCertificateFlags): void;
    vfunc_copy_session_state(source: TlsClientConnection): void;
}

export const TlsClientConnection: TlsClientConnectionNamespace;

export interface TlsFileDatabaseNamespace {
    $gtype: GObject.GType<TlsFileDatabase>;
    prototype: TlsFileDatabasePrototype;

    ["new"](anchors: string): TlsFileDatabase;
}
export type TlsFileDatabase = TlsFileDatabasePrototype;
export interface TlsFileDatabasePrototype extends TlsDatabase {
    // Properties
    anchors: string;
}

export const TlsFileDatabase: TlsFileDatabaseNamespace;

export interface TlsServerConnectionNamespace {
    $gtype: GObject.GType<TlsServerConnection>;
    prototype: TlsServerConnectionPrototype;

    ["new"](base_io_stream: IOStream, certificate?: TlsCertificate | null): TlsServerConnection;
}
export type TlsServerConnection = TlsServerConnectionPrototype;
export interface TlsServerConnectionPrototype extends TlsConnection {
    // Properties
    authentication_mode: TlsAuthenticationMode;
    authenticationMode: TlsAuthenticationMode;
}

export const TlsServerConnection: TlsServerConnectionNamespace;

export interface VolumeNamespace {
    $gtype: GObject.GType<Volume>;
    prototype: VolumePrototype;
}
export type Volume = VolumePrototype;
export interface VolumePrototype extends GObject.Object {
    // Members

    can_eject(): boolean;
    can_mount(): boolean;
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback<this> | null): void;
    eject(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    eject_finish(result: AsyncResult): boolean;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    eject_with_operation_finish(result: AsyncResult): boolean;
    enumerate_identifiers(): string[];
    get_activation_root(): File | null;
    get_drive(): Drive | null;
    get_icon(): Icon;
    get_identifier(kind: string): string | null;
    get_mount(): Mount | null;
    get_name(): string;
    get_sort_key(): string | null;
    get_symbolic_icon(): Icon;
    get_uuid(): string | null;
    mount(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    mount(
        flags: MountMountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    mount(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    mount_finish(result: AsyncResult): boolean;
    should_automount(): boolean;
    vfunc_can_eject(): boolean;
    vfunc_can_mount(): boolean;
    vfunc_changed(): void;
    vfunc_eject(flags: MountUnmountFlags, cancellable?: Cancellable | null): Promise<boolean>;
    vfunc_eject(
        flags: MountUnmountFlags,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_eject(
        flags: MountUnmountFlags,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_eject_finish(result: AsyncResult): boolean;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null
    ): Promise<boolean>;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation: MountOperation | null,
        cancellable: Cancellable | null,
        callback: AsyncReadyCallback<this> | null
    ): void;
    vfunc_eject_with_operation(
        flags: MountUnmountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean;
    vfunc_enumerate_identifiers(): string[];
    vfunc_get_activation_root(): File | null;
    vfunc_get_drive(): Drive | null;
    vfunc_get_icon(): Icon;
    vfunc_get_identifier(kind: string): string | null;
    vfunc_get_mount(): Mount | null;
    vfunc_get_name(): string;
    vfunc_get_sort_key(): string | null;
    vfunc_get_symbolic_icon(): Icon;
    vfunc_get_uuid(): string | null;
    vfunc_mount_finish(result: AsyncResult): boolean;
    vfunc_mount_fn(
        flags: MountMountFlags,
        mount_operation?: MountOperation | null,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<this> | null
    ): void;
    vfunc_removed(): void;
    vfunc_should_automount(): boolean;
}

export const Volume: VolumeNamespace;

export interface DBusNamespace {
    prototype: DBusPrototype;
    readonly session: DBusConnection;
    readonly system: DBusConnection;
    get(bus_type: BusType, cancellable?: Cancellable | null): Promise<DBusConnection>;
    get(bus_type: BusType, cancellable: Cancellable | null, callback: AsyncReadyCallback<BusType> | null): void;
    get(
        bus_type: BusType,
        cancellable?: Cancellable | null,
        callback?: AsyncReadyCallback<BusType> | null
    ): Promise<DBusConnection> | void;
    get_finish(res: AsyncResult): DBusConnection;
    get_sync(bus_type: BusType, cancellable?: Cancellable | null): DBusConnection;
    own_name(
        bus_type: BusType,
        name: string,
        flags: BusNameOwnerFlags,
        bus_acquired_closure?: GObject.Closure | null,
        name_acquired_closure?: GObject.Closure | null,
        name_lost_closure?: GObject.Closure | null
    ): number;
    own_name_on_connection(
        connection: DBusConnection,
        name: string,
        flags: BusNameOwnerFlags,
        name_acquired_closure?: GObject.Closure | null,
        name_lost_closure?: GObject.Closure | null
    ): number;
    unown_name(owner_id: number): void;
    watch_name(
        bus_type: BusType,
        name: string,
        flags: BusNameWatcherFlags,
        name_appeared_closure?: GObject.Closure | null,
        name_vanished_closure?: GObject.Closure | null
    ): number;
    unwatch_name(watcher_id: number): void;
    watch_name_on_connection(
        connection: DBusConnection,
        name: string,
        flags: BusNameWatcherFlags,
        name_appeared_closure?: GObject.Closure | null,
        name_vanished_closure?: GObject.Closure | null
    ): number;
}
export type DBus = DBusPrototype;
export interface DBusPrototype {}

export const DBus: DBusNamespace;

export module DBusExportedObject {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class DBusExportedObject {
    static $gtype: GObject.GType<DBusExportedObject>;

    constructor(properties?: Partial<DBusExportedObject.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusExportedObject.ConstructorProperties>, ...args: any[]): void;

    // Members

    static wrapJSObject(info: string, obj: any): DBusExportedObject;
    get_info(): DBusInterfaceInfo;
    get_connection(): DBusConnection;
    get_object_path(): string;
    unexport_from_connection(connection: DBusConnection): void;
    ["export"](busConnection: DBusConnection, objectPath: string): void;
    unexport(): void;
    flush(): void;
    emit_signal(name: string, variant: GLib.Variant): void;
    emit_property_changed(name: string, variant: GLib.Variant): void;
}

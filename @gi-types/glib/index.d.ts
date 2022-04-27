/**
 * GLib 2.0
 *
 * Generated from 2.66.2
 */

import * as GObject from "@gi-types/gobject";

export const ANALYZER_ANALYZING: number;
export const ASCII_DTOSTR_BUF_SIZE: number;
export const BIG_ENDIAN: number;
export const CSET_A_2_Z: string;
export const CSET_DIGITS: string;
export const CSET_a_2_z: string;
export const DATALIST_FLAGS_MASK: number;
export const DATE_BAD_DAY: number;
export const DATE_BAD_JULIAN: number;
export const DATE_BAD_YEAR: number;
export const DIR_SEPARATOR: number;
export const DIR_SEPARATOR_S: string;
export const E: number;
export const GINT16_FORMAT: string;
export const GINT16_MODIFIER: string;
export const GINT32_FORMAT: string;
export const GINT32_MODIFIER: string;
export const GINT64_FORMAT: string;
export const GINT64_MODIFIER: string;
export const GINTPTR_FORMAT: string;
export const GINTPTR_MODIFIER: string;
export const GNUC_FUNCTION: string;
export const GNUC_PRETTY_FUNCTION: string;
export const GSIZE_FORMAT: string;
export const GSIZE_MODIFIER: string;
export const GSSIZE_FORMAT: string;
export const GSSIZE_MODIFIER: string;
export const GUINT16_FORMAT: string;
export const GUINT32_FORMAT: string;
export const GUINT64_FORMAT: string;
export const GUINTPTR_FORMAT: string;
export const HAVE_GINT64: number;
export const HAVE_GNUC_VARARGS: number;
export const HAVE_GNUC_VISIBILITY: number;
export const HAVE_GROWING_STACK: number;
export const HAVE_ISO_VARARGS: number;
export const HOOK_FLAG_USER_SHIFT: number;
export const IEEE754_DOUBLE_BIAS: number;
export const IEEE754_FLOAT_BIAS: number;
export const KEY_FILE_DESKTOP_GROUP: string;
export const KEY_FILE_DESKTOP_KEY_ACTIONS: string;
export const KEY_FILE_DESKTOP_KEY_CATEGORIES: string;
export const KEY_FILE_DESKTOP_KEY_COMMENT: string;
export const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE: string;
export const KEY_FILE_DESKTOP_KEY_EXEC: string;
export const KEY_FILE_DESKTOP_KEY_GENERIC_NAME: string;
export const KEY_FILE_DESKTOP_KEY_HIDDEN: string;
export const KEY_FILE_DESKTOP_KEY_ICON: string;
export const KEY_FILE_DESKTOP_KEY_MIME_TYPE: string;
export const KEY_FILE_DESKTOP_KEY_NAME: string;
export const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN: string;
export const KEY_FILE_DESKTOP_KEY_NO_DISPLAY: string;
export const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN: string;
export const KEY_FILE_DESKTOP_KEY_PATH: string;
export const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY: string;
export const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS: string;
export const KEY_FILE_DESKTOP_KEY_TERMINAL: string;
export const KEY_FILE_DESKTOP_KEY_TRY_EXEC: string;
export const KEY_FILE_DESKTOP_KEY_TYPE: string;
export const KEY_FILE_DESKTOP_KEY_URL: string;
export const KEY_FILE_DESKTOP_KEY_VERSION: string;
export const KEY_FILE_DESKTOP_TYPE_APPLICATION: string;
export const KEY_FILE_DESKTOP_TYPE_DIRECTORY: string;
export const KEY_FILE_DESKTOP_TYPE_LINK: string;
export const LITTLE_ENDIAN: number;
export const LN10: number;
export const LN2: number;
export const LOG_2_BASE_10: number;
export const LOG_DOMAIN: number;
export const LOG_FATAL_MASK: number;
export const LOG_LEVEL_USER_SHIFT: number;
export const MAJOR_VERSION: number;
export const MAXINT16: number;
export const MAXINT32: number;
export const MAXINT64: number;
export const MAXINT8: number;
export const MAXUINT16: number;
export const MAXUINT32: number;
export const MAXUINT64: number;
export const MAXUINT8: number;
export const MICRO_VERSION: number;
export const MININT16: number;
export const MININT32: number;
export const MININT64: number;
export const MININT8: number;
export const MINOR_VERSION: number;
export const MODULE_SUFFIX: string;
export const OPTION_REMAINING: string;
export const PDP_ENDIAN: number;
export const PI: number;
export const PID_FORMAT: string;
export const PI_2: number;
export const PI_4: number;
export const POLLFD_FORMAT: string;
export const PRIORITY_DEFAULT: number;
export const PRIORITY_DEFAULT_IDLE: number;
export const PRIORITY_HIGH: number;
export const PRIORITY_HIGH_IDLE: number;
export const PRIORITY_LOW: number;
export const SEARCHPATH_SEPARATOR: number;
export const SEARCHPATH_SEPARATOR_S: string;
export const SIZEOF_LONG: number;
export const SIZEOF_SIZE_T: number;
export const SIZEOF_SSIZE_T: number;
export const SIZEOF_VOID_P: number;
export const SOURCE_CONTINUE: boolean;
export const SOURCE_REMOVE: boolean;
export const SQRT2: number;
export const STR_DELIMITERS: string;
export const SYSDEF_AF_INET: number;
export const SYSDEF_AF_INET6: number;
export const SYSDEF_AF_UNIX: number;
export const SYSDEF_MSG_DONTROUTE: number;
export const SYSDEF_MSG_OOB: number;
export const SYSDEF_MSG_PEEK: number;
export const TEST_OPTION_ISOLATE_DIRS: string;
export const TIME_SPAN_DAY: number;
export const TIME_SPAN_HOUR: number;
export const TIME_SPAN_MILLISECOND: number;
export const TIME_SPAN_MINUTE: number;
export const TIME_SPAN_SECOND: number;
export const UNICHAR_MAX_DECOMPOSITION_LENGTH: number;
export const URI_RESERVED_CHARS_GENERIC_DELIMITERS: string;
export const URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS: string;
export const USEC_PER_SEC: number;
export const VA_COPY_AS_ARRAY: number;
export const VERSION_MIN_REQUIRED: number;
export const WIN32_MSG_HANDLE: number;
export function access(filename: string, mode: number): number;
export function ascii_digit_value(c: number): number;
export function ascii_dtostr(buffer: string, buf_len: number, d: number): string;
export function ascii_formatd(buffer: string, buf_len: number, format: string, d: number): string;
export function ascii_strcasecmp(s1: string, s2: string): number;
export function ascii_strdown(str: string, len: number): string;
export function ascii_string_to_signed(str: string, base: number, min: number, max: number): [boolean, number | null];
export function ascii_string_to_unsigned(str: string, base: number, min: number, max: number): [boolean, number | null];
export function ascii_strncasecmp(s1: string, s2: string, n: number): number;
export function ascii_strtod(nptr: string): [number, string | null];
export function ascii_strtoll(nptr: string, base: number): [number, string | null];
export function ascii_strtoull(nptr: string, base: number): [number, string | null];
export function ascii_strup(str: string, len: number): string;
export function ascii_tolower(c: number): number;
export function ascii_toupper(c: number): number;
export function ascii_xdigit_value(c: number): number;
export function assert_warning(
    log_domain: string,
    file: string,
    line: number,
    pretty_function: string,
    expression: string
): void;
export function assertion_message(domain: string, file: string, line: number, func: string, message: string): void;
export function assertion_message_cmpstr(
    domain: string,
    file: string,
    line: number,
    func: string,
    expr: string,
    arg1: string,
    cmp: string,
    arg2: string
): void;
export function assertion_message_error(
    domain: string,
    file: string,
    line: number,
    func: string,
    expr: string,
    error: Error,
    error_domain: Quark,
    error_code: number
): void;
export function atexit(func: VoidFunc): void;
export function atomic_int_add(atomic: number, val: number): number;
export function atomic_int_and(atomic: number, val: number): number;
export function atomic_int_compare_and_exchange(atomic: number, oldval: number, newval: number): boolean;
export function atomic_int_dec_and_test(atomic: number): boolean;
export function atomic_int_exchange_and_add(atomic: number, val: number): number;
export function atomic_int_get(atomic: number): number;
export function atomic_int_inc(atomic: number): void;
export function atomic_int_or(atomic: number, val: number): number;
export function atomic_int_set(atomic: number, newval: number): void;
export function atomic_int_xor(atomic: number, val: number): number;
export function atomic_pointer_add(atomic: any, val: number): number;
export function atomic_pointer_and(atomic: any, val: number): number;
export function atomic_pointer_compare_and_exchange(atomic: any, oldval?: any | null, newval?: any | null): boolean;
export function atomic_pointer_get(atomic: any): any | null;
export function atomic_pointer_or(atomic: any, val: number): number;
export function atomic_pointer_set(atomic: any, newval?: any | null): void;
export function atomic_pointer_xor(atomic: any, val: number): number;
export function atomic_rc_box_acquire(mem_block: any): any;
export function atomic_rc_box_alloc(block_size: number): any;
export function atomic_rc_box_alloc0(block_size: number): any;
export function atomic_rc_box_dup(block_size: number, mem_block: any): any;
export function atomic_rc_box_get_size(mem_block: any): number;
export function atomic_rc_box_release(mem_block: any): void;
export function atomic_rc_box_release_full(mem_block: any): void;
export function atomic_ref_count_compare(arc: number, val: number): boolean;
export function atomic_ref_count_dec(arc: number): boolean;
export function atomic_ref_count_inc(arc: number): void;
export function atomic_ref_count_init(arc: number): void;
export function base64_decode(text: string): Uint8Array;
export function base64_decode_inplace(text: Uint8Array | string): [number, Uint8Array];
export function base64_encode(data?: Uint8Array | null): string;
export function base64_encode_close(
    break_lines: boolean,
    state: number,
    save: number
): [number, Uint8Array, number, number];
export function base64_encode_step(
    _in: Uint8Array | string,
    break_lines: boolean,
    state: number,
    save: number
): [number, Uint8Array, number, number];
export function basename(file_name: string): string;
export function bit_lock(address: number, lock_bit: number): void;
export function bit_nth_lsf(mask: number, nth_bit: number): number;
export function bit_nth_msf(mask: number, nth_bit: number): number;
export function bit_storage(number: number): number;
export function bit_trylock(address: number, lock_bit: number): boolean;
export function bit_unlock(address: number, lock_bit: number): void;
export function bookmark_file_error_quark(): Quark;
export function build_filenamev(args: string[]): string;
export function build_pathv(separator: string, args: string[]): string;
export function byte_array_free(array: Uint8Array | string, free_segment: boolean): number;
export function byte_array_free_to_bytes(array: Uint8Array | string): Bytes;
export function byte_array_new(): Uint8Array;
export function byte_array_new_take(data: Uint8Array | string): Uint8Array;
export function byte_array_steal(array: Uint8Array | string): [number, number | null];
export function byte_array_unref(array: Uint8Array | string): void;
export function canonicalize_filename(filename: string, relative_to?: string | null): string;
export function chdir(path: string): number;
export function check_version(required_major: number, required_minor: number, required_micro: number): string;
export function checksum_type_get_length(checksum_type: ChecksumType): number;
export function child_watch_add(
    priority: number,
    pid: Pid,
    _function: ChildWatchFunc,
    notify?: DestroyNotify | null
): number;
export function child_watch_source_new(pid: Pid): Source;
export function clear_error(): void;
export function close(fd: number): boolean;
export function compute_checksum_for_bytes(checksum_type: ChecksumType, data: Bytes | Uint8Array): string;
export function compute_checksum_for_data(checksum_type: ChecksumType, data: Uint8Array | string): string;
export function compute_checksum_for_string(checksum_type: ChecksumType, str: string, length: number): string;
export function compute_hmac_for_bytes(
    digest_type: ChecksumType,
    key: Bytes | Uint8Array,
    data: Bytes | Uint8Array
): string;
export function compute_hmac_for_data(
    digest_type: ChecksumType,
    key: Uint8Array | string,
    data: Uint8Array | string
): string;
export function compute_hmac_for_string(
    digest_type: ChecksumType,
    key: Uint8Array | string,
    str: string,
    length: number
): string;
export function convert(
    str: Uint8Array | string,
    to_codeset: string,
    from_codeset: string
): [Uint8Array, number | null];
export function convert_error_quark(): Quark;
export function convert_with_fallback(
    str: Uint8Array | string,
    to_codeset: string,
    from_codeset: string,
    fallback: string
): [Uint8Array, number | null];
export function datalist_foreach(datalist: Data, func: DataForeachFunc): void;
export function datalist_get_data(datalist: Data, key: string): any | null;
export function datalist_get_flags(datalist: Data): number;
export function datalist_id_get_data(datalist: Data, key_id: Quark): any | null;
export function datalist_set_flags(datalist: Data, flags: number): void;
export function datalist_unset_flags(datalist: Data, flags: number): void;
export function dataset_destroy(dataset_location: any): void;
export function dataset_foreach(dataset_location: any, func: DataForeachFunc): void;
export function dataset_id_get_data(dataset_location: any, key_id: Quark): any | null;
export function date_get_days_in_month(month: DateMonth, year: DateYear): number;
export function date_get_monday_weeks_in_year(year: DateYear): number;
export function date_get_sunday_weeks_in_year(year: DateYear): number;
export function date_is_leap_year(year: DateYear): boolean;
export function date_strftime(s: string, slen: number, format: string, date: Date): number;
export function date_time_compare(dt1: any, dt2: any): number;
export function date_time_equal(dt1: any, dt2: any): boolean;
export function date_time_hash(datetime: any): number;
export function date_valid_day(day: DateDay): boolean;
export function date_valid_dmy(day: DateDay, month: DateMonth, year: DateYear): boolean;
export function date_valid_julian(julian_date: number): boolean;
export function date_valid_month(month: DateMonth): boolean;
export function date_valid_weekday(weekday: DateWeekday): boolean;
export function date_valid_year(year: DateYear): boolean;
export function dcgettext(domain: string | null, msgid: string, category: number): string;
export function dgettext(domain: string | null, msgid: string): string;
export function dir_make_tmp(tmpl?: string | null): string;
export function direct_equal(v1?: any | null, v2?: any | null): boolean;
export function direct_hash(v?: any | null): number;
export function dngettext(domain: string | null, msgid: string, msgid_plural: string, n: number): string;
export function double_equal(v1: any, v2: any): boolean;
export function double_hash(v: any): number;
export function dpgettext(domain: string | null, msgctxtid: string, msgidoffset: number): string;
export function dpgettext2(domain: string | null, context: string, msgid: string): string;
export function environ_getenv(envp: string[] | null, variable: string): string;
export function environ_setenv(envp: string[] | null, variable: string, value: string, overwrite: boolean): string[];
export function environ_unsetenv(envp: string[] | null, variable: string): string[];
export function file_error_from_errno(err_no: number): FileError;
export function file_error_quark(): Quark;
export function file_get_contents(filename: string): [boolean, Uint8Array];
export function file_open_tmp(tmpl: string | null): [number, string];
export function file_read_link(filename: string): string;
export function file_set_contents(filename: string, contents: Uint8Array | string): boolean;
export function file_set_contents_full(
    filename: string,
    contents: Uint8Array | string,
    flags: FileSetContentsFlags,
    mode: number
): boolean;
export function file_test(filename: string, test: FileTest): boolean;
export function filename_display_basename(filename: string): string;
export function filename_display_name(filename: string): string;
export function filename_from_uri(uri: string): [string, string | null];
export function filename_from_utf8(utf8string: string, len: number): [string, number | null, number | null];
export function filename_to_uri(filename: string, hostname?: string | null): string;
export function filename_to_utf8(opsysstring: string, len: number): [string, number | null, number | null];
export function find_program_in_path(program: string): string | null;
export function format_size(size: number): string;
export function format_size_for_display(size: number): string;
export function format_size_full(size: number, flags: FormatSizeFlags): string;
export function free(mem?: any | null): void;
export function get_application_name(): string | null;
export function get_charset(): [boolean, string | null];
export function get_codeset(): string;
export function get_console_charset(): [boolean, string | null];
export function get_current_dir(): string;
export function get_current_time(result: TimeVal): void;
export function get_environ(): string[];
export function get_filename_charsets(): [boolean, string[]];
export function get_home_dir(): string;
export function get_host_name(): string;
export function get_language_names(): string[];
export function get_language_names_with_category(category_name: string): string[];
export function get_locale_variants(locale: string): string[];
export function get_monotonic_time(): number;
export function get_num_processors(): number;
export function get_os_info(key_name: string): string | null;
export function get_prgname(): string | null;
export function get_real_name(): string;
export function get_real_time(): number;
export function get_system_config_dirs(): string[];
export function get_system_data_dirs(): string[];
export function get_tmp_dir(): string;
export function get_user_cache_dir(): string;
export function get_user_config_dir(): string;
export function get_user_data_dir(): string;
export function get_user_name(): string;
export function get_user_runtime_dir(): string;
export function get_user_special_dir(directory: UserDirectory): string;
export function getenv(variable: string): string;
export function hash_table_add(hash_table: HashTable<any, any>, key?: any | null): boolean;
export function hash_table_contains(hash_table: HashTable<any, any>, key?: any | null): boolean;
export function hash_table_destroy(hash_table: HashTable<any, any>): void;
export function hash_table_insert(hash_table: HashTable<any, any>, key?: any | null, value?: any | null): boolean;
export function hash_table_lookup(hash_table: HashTable<any, any>, key?: any | null): any | null;
export function hash_table_lookup_extended(
    hash_table: HashTable<any, any>,
    lookup_key?: any | null
): [boolean, any | null, any | null];
export function hash_table_remove(hash_table: HashTable<any, any>, key?: any | null): boolean;
export function hash_table_remove_all(hash_table: HashTable<any, any>): void;
export function hash_table_replace(hash_table: HashTable<any, any>, key?: any | null, value?: any | null): boolean;
export function hash_table_size(hash_table: HashTable<any, any>): number;
export function hash_table_steal(hash_table: HashTable<any, any>, key?: any | null): boolean;
export function hash_table_steal_all(hash_table: HashTable<any, any>): void;
export function hash_table_steal_extended(
    hash_table: HashTable<any, any>,
    lookup_key?: any | null
): [boolean, any | null, any | null];
export function hash_table_unref(hash_table: HashTable<any, any>): void;
export function hook_destroy(hook_list: HookList, hook_id: number): boolean;
export function hook_destroy_link(hook_list: HookList, hook: Hook): void;
export function hook_free(hook_list: HookList, hook: Hook): void;
export function hook_insert_before(hook_list: HookList, sibling: Hook | null, hook: Hook): void;
export function hook_prepend(hook_list: HookList, hook: Hook): void;
export function hook_unref(hook_list: HookList, hook: Hook): void;
export function hostname_is_ascii_encoded(hostname: string): boolean;
export function hostname_is_ip_address(hostname: string): boolean;
export function hostname_is_non_ascii(hostname: string): boolean;
export function hostname_to_ascii(hostname: string): string;
export function hostname_to_unicode(hostname: string): string;
export function idle_add(priority: number, _function: SourceFunc, notify?: DestroyNotify | null): number;
export function idle_remove_by_data(data?: any | null): boolean;
export function idle_source_new(): Source;
export function int64_equal(v1: any, v2: any): boolean;
export function int64_hash(v: any): number;
export function int_equal(v1: any, v2: any): boolean;
export function int_hash(v: any): number;
export function intern_static_string(string?: string | null): string;
export function intern_string(string?: string | null): string;
export function io_add_watch(channel: IOChannel, priority: number, condition: IOCondition, func: IOFunc): number;
export function io_channel_error_from_errno(en: number): IOChannelError;
export function io_channel_error_quark(): Quark;
export function io_create_watch(channel: IOChannel, condition: IOCondition): Source;
export function key_file_error_quark(): Quark;
export function listenv(): string[];
export function locale_from_utf8(utf8string: string, len: number): [Uint8Array, number | null];
export function locale_to_utf8(opsysstring: Uint8Array | string): [string, number | null, number | null];
export function log_default_handler(
    log_domain: string | null,
    log_level: LogLevelFlags,
    message?: string | null,
    unused_data?: any | null
): void;
export function log_remove_handler(log_domain: string, handler_id: number): void;
export function log_set_always_fatal(fatal_mask: LogLevelFlags): LogLevelFlags;
export function log_set_fatal_mask(log_domain: string, fatal_mask: LogLevelFlags): LogLevelFlags;
export function log_set_handler(log_domain: string | null, log_levels: LogLevelFlags, log_func: LogFunc): number;
export function log_set_writer_func(): void;
export function log_structured_array(log_level: LogLevelFlags, fields: LogField[]): void;
export function log_variant(log_domain: string | null, log_level: LogLevelFlags, fields: Variant): void;
export function log_writer_default(
    log_level: LogLevelFlags,
    fields: LogField[],
    user_data?: any | null
): LogWriterOutput;
export function log_writer_format_fields(log_level: LogLevelFlags, fields: LogField[], use_color: boolean): string;
export function log_writer_is_journald(output_fd: number): boolean;
export function log_writer_journald(
    log_level: LogLevelFlags,
    fields: LogField[],
    user_data?: any | null
): LogWriterOutput;
export function log_writer_standard_streams(
    log_level: LogLevelFlags,
    fields: LogField[],
    user_data?: any | null
): LogWriterOutput;
export function log_writer_supports_color(output_fd: number): boolean;
export function main_context_default(): MainContext;
export function main_context_get_thread_default(): MainContext;
export function main_context_ref_thread_default(): MainContext;
export function main_current_source(): Source;
export function main_depth(): number;
export function malloc(n_bytes: number): any | null;
export function malloc0(n_bytes: number): any | null;
export function malloc0_n(n_blocks: number, n_block_bytes: number): any | null;
export function malloc_n(n_blocks: number, n_block_bytes: number): any | null;
export function markup_error_quark(): Quark;
export function markup_escape_text(text: string, length: number): string;
export function mem_is_system_malloc(): boolean;
export function mem_profile(): void;
export function mem_set_vtable(vtable: MemVTable): void;
export function memdup(mem: any | null, byte_size: number): any | null;
export function mkdir_with_parents(pathname: string, mode: number): number;
export function nullify_pointer(nullify_location: any): void;
export function number_parser_error_quark(): Quark;
export function on_error_query(prg_name: string): void;
export function on_error_stack_trace(prg_name: string): void;
export function once_init_enter(location: any): boolean;
export function once_init_leave(location: any, result: number): void;
export function option_error_quark(): Quark;
export function parse_debug_string(string: string | null, keys: DebugKey[]): number;
export function path_get_basename(file_name: string): string;
export function path_get_dirname(file_name: string): string;
export function path_is_absolute(file_name: string): boolean;
export function path_skip_root(file_name: string): string | null;
export function pattern_match(
    pspec: PatternSpec,
    string_length: number,
    string: string,
    string_reversed?: string | null
): boolean;
export function pattern_match_simple(pattern: string, string: string): boolean;
export function pattern_match_string(pspec: PatternSpec, string: string): boolean;
export function pointer_bit_lock(address: any, lock_bit: number): void;
export function pointer_bit_trylock(address: any, lock_bit: number): boolean;
export function pointer_bit_unlock(address: any, lock_bit: number): void;
export function poll(fds: PollFD, nfds: number, timeout: number): number;
export function propagate_error(src: Error): Error | null;
export function quark_from_static_string(string?: string | null): Quark;
export function quark_from_string(string?: string | null): Quark;
export function quark_to_string(quark: Quark): string;
export function quark_try_string(string?: string | null): Quark;
export function random_double(): number;
export function random_double_range(begin: number, end: number): number;
export function random_int(): number;
export function random_int_range(begin: number, end: number): number;
export function random_set_seed(seed: number): void;
export function rc_box_acquire(mem_block: any): any;
export function rc_box_alloc(block_size: number): any;
export function rc_box_alloc0(block_size: number): any;
export function rc_box_dup(block_size: number, mem_block: any): any;
export function rc_box_get_size(mem_block: any): number;
export function rc_box_release(mem_block: any): void;
export function rc_box_release_full(mem_block: any): void;
export function realloc(mem: any | null, n_bytes: number): any | null;
export function realloc_n(mem: any | null, n_blocks: number, n_block_bytes: number): any | null;
export function ref_count_compare(rc: number, val: number): boolean;
export function ref_count_dec(rc: number): boolean;
export function ref_count_inc(rc: number): void;
export function ref_count_init(rc: number): void;
export function ref_string_acquire(str: string): string;
export function ref_string_length(str: string): number;
export function ref_string_new(str: string): string;
export function ref_string_new_intern(str: string): string;
export function ref_string_new_len(str: string, len: number): string;
export function ref_string_release(str: string): void;
export function regex_check_replacement(replacement: string): [boolean, boolean | null];
export function regex_error_quark(): Quark;
export function regex_escape_nul(string: string, length: number): string;
export function regex_escape_string(string: string[]): string;
export function regex_match_simple(
    pattern: string,
    string: string,
    compile_options: RegexCompileFlags,
    match_options: RegexMatchFlags
): boolean;
export function regex_split_simple(
    pattern: string,
    string: string,
    compile_options: RegexCompileFlags,
    match_options: RegexMatchFlags
): string[];
export function reload_user_special_dirs_cache(): void;
export function rmdir(filename: string): number;
export function sequence_get(iter: SequenceIter): any | null;
export function sequence_insert_before(iter: SequenceIter, data?: any | null): SequenceIter;
export function sequence_move(src: SequenceIter, dest: SequenceIter): void;
export function sequence_move_range(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void;
export function sequence_range_get_midpoint(begin: SequenceIter, end: SequenceIter): SequenceIter;
export function sequence_remove(iter: SequenceIter): void;
export function sequence_remove_range(begin: SequenceIter, end: SequenceIter): void;
export function sequence_set(iter: SequenceIter, data?: any | null): void;
export function sequence_swap(a: SequenceIter, b: SequenceIter): void;
export function set_application_name(application_name: string): void;
export function set_error_literal(domain: Quark, code: number, message: string): Error | null;
export function set_prgname(prgname: string): void;
export function setenv(variable: string, value: string, overwrite: boolean): boolean;
export function shell_error_quark(): Quark;
export function shell_parse_argv(command_line: string): [boolean, string[] | null];
export function shell_quote(unquoted_string: string): string;
export function shell_unquote(quoted_string: string): string;
export function slice_alloc(block_size: number): any | null;
export function slice_alloc0(block_size: number): any | null;
export function slice_copy(block_size: number, mem_block?: any | null): any | null;
export function slice_free1(block_size: number, mem_block?: any | null): void;
export function slice_free_chain_with_offset(block_size: number, mem_chain: any | null, next_offset: number): void;
export function slice_get_config(ckey: SliceConfig): number;
export function slice_get_config_state(ckey: SliceConfig, address: number, n_values: number): number;
export function slice_set_config(ckey: SliceConfig, value: number): void;
export function source_remove(tag: number): boolean;
export function source_remove_by_funcs_user_data(funcs: SourceFuncs, user_data?: any | null): boolean;
export function source_remove_by_user_data(user_data?: any | null): boolean;
export function source_set_name_by_id(tag: number, name: string): void;
export function spaced_primes_closest(num: number): number;
export function spawn_async(
    working_directory: string | null,
    argv: string[],
    envp: string[] | null,
    flags: SpawnFlags,
    child_setup?: SpawnChildSetupFunc | null
): [boolean, Pid | null];
export function spawn_async_with_fds(
    working_directory: string | null,
    argv: string[],
    envp: string[] | null,
    flags: SpawnFlags,
    child_setup: SpawnChildSetupFunc | null,
    stdin_fd: number,
    stdout_fd: number,
    stderr_fd: number
): [boolean, Pid | null];
export function spawn_async_with_pipes(
    working_directory: string | null,
    argv: string[],
    envp: string[] | null,
    flags: SpawnFlags,
    child_setup?: SpawnChildSetupFunc | null
): [boolean, Pid | null, number | null, number | null, number | null];
export function spawn_check_exit_status(exit_status: number): boolean;
export function spawn_close_pid(pid: Pid): void;
export function spawn_command_line_async(command_line: string): boolean;
export function spawn_command_line_sync(
    command_line: string
): [boolean, Uint8Array | null, Uint8Array | null, number | null];
export function spawn_error_quark(): Quark;
export function spawn_exit_error_quark(): Quark;
export function spawn_sync(
    working_directory: string | null,
    argv: string[],
    envp: string[] | null,
    flags: SpawnFlags,
    child_setup?: SpawnChildSetupFunc | null
): [boolean, Uint8Array | null, Uint8Array | null, number | null];
export function stpcpy(dest: string, src: string): string;
export function str_equal(v1: any, v2: any): boolean;
export function str_has_prefix(str: string, prefix: string): boolean;
export function str_has_suffix(str: string, suffix: string): boolean;
export function str_hash(v: any): number;
export function str_is_ascii(str: string): boolean;
export function str_match_string(search_term: string, potential_hit: string, accept_alternates: boolean): boolean;
export function str_to_ascii(str: string, from_locale?: string | null): string;
export function str_tokenize_and_fold(string: string, translit_locale: string | null): [string[], string[]];
export function strcanon(string: string, valid_chars: string, substitutor: number): string;
export function strcasecmp(s1: string, s2: string): number;
export function strchomp(string: string): string;
export function strchug(string: string): string;
export function strcmp0(str1?: string | null, str2?: string | null): number;
export function strcompress(source: string): string;
export function strdelimit(string: string, delimiters: string | null, new_delimiter: number): string;
export function strdown(string: string): string;
export function strdup(str?: string | null): string;
export function strerror(errnum: number): string;
export function strescape(source: string, exceptions?: string | null): string;
export function strfreev(str_array?: string | null): void;
export function string_new(init?: string | null): String;
export function string_new_len(init: string, len: number): String;
export function string_sized_new(dfl_size: number): String;
export function strip_context(msgid: string, msgval: string): string;
export function strjoinv(separator: string | null, str_array: string): string;
export function strlcat(dest: string, src: string, dest_size: number): number;
export function strlcpy(dest: string, src: string, dest_size: number): number;
export function strncasecmp(s1: string, s2: string, n: number): number;
export function strndup(str: string, n: number): string;
export function strnfill(length: number, fill_char: number): string;
export function strreverse(string: string): string;
export function strrstr(haystack: string, needle: string): string;
export function strrstr_len(haystack: string, haystack_len: number, needle: string): string;
export function strsignal(signum: number): string;
export function strstr_len(haystack: string, haystack_len: number, needle: string): string;
export function strtod(nptr: string): [number, string | null];
export function strup(string: string): string;
export function strv_contains(strv: string, str: string): boolean;
export function strv_equal(strv1: string, strv2: string): boolean;
export function strv_get_type(): GObject.GType;
export function strv_length(str_array: string): number;
export function test_add_data_func(testpath: string, test_data: any | null, test_func: TestDataFunc): void;
export function test_add_data_func_full(testpath: string, test_data: any | null, test_func: TestDataFunc): void;
export function test_add_func(testpath: string, test_func: TestFunc): void;
export function test_assert_expected_messages_internal(domain: string, file: string, line: number, func: string): void;
export function test_bug(bug_uri_snippet: string): void;
export function test_bug_base(uri_pattern: string): void;
export function test_expect_message(log_domain: string | null, log_level: LogLevelFlags, pattern: string): void;
export function test_fail(): void;
export function test_failed(): boolean;
export function test_get_dir(file_type: TestFileType): string;
export function test_incomplete(msg?: string | null): void;
export function test_log_type_name(log_type: TestLogType): string;
export function test_queue_destroy(destroy_data?: any | null): void;
export function test_queue_free(gfree_pointer?: any | null): void;
export function test_rand_double(): number;
export function test_rand_double_range(range_start: number, range_end: number): number;
export function test_rand_int(): number;
export function test_rand_int_range(begin: number, end: number): number;
export function test_run(): number;
export function test_run_suite(suite: TestSuite): number;
export function test_set_nonfatal_assertions(): void;
export function test_skip(msg?: string | null): void;
export function test_subprocess(): boolean;
export function test_summary(summary: string): void;
export function test_timer_elapsed(): number;
export function test_timer_last(): number;
export function test_timer_start(): void;
export function test_trap_assertions(
    domain: string,
    file: string,
    line: number,
    func: string,
    assertion_flags: number,
    pattern: string
): void;
export function test_trap_fork(usec_timeout: number, test_trap_flags: TestTrapFlags): boolean;
export function test_trap_has_passed(): boolean;
export function test_trap_reached_timeout(): boolean;
export function test_trap_subprocess(
    test_path: string | null,
    usec_timeout: number,
    test_flags: TestSubprocessFlags
): void;
export function thread_error_quark(): Quark;
export function thread_exit(retval?: any | null): void;
export function thread_pool_get_max_idle_time(): number;
export function thread_pool_get_max_unused_threads(): number;
export function thread_pool_get_num_unused_threads(): number;
export function thread_pool_set_max_idle_time(interval: number): void;
export function thread_pool_set_max_unused_threads(max_threads: number): void;
export function thread_pool_stop_unused_threads(): void;
export function thread_self(): Thread;
export function thread_yield(): void;
export function time_val_from_iso8601(iso_date: string): [boolean, TimeVal];
export function timeout_add(
    priority: number,
    interval: number,
    _function: SourceFunc,
    notify?: DestroyNotify | null
): number;
export function timeout_add_seconds(
    priority: number,
    interval: number,
    _function: SourceFunc,
    notify?: DestroyNotify | null
): number;
export function timeout_source_new(interval: number): Source;
export function timeout_source_new_seconds(interval: number): Source;
export function trash_stack_height(stack_p: TrashStack): number;
export function trash_stack_peek(stack_p: TrashStack): any | null;
export function trash_stack_pop(stack_p: TrashStack): any | null;
export function trash_stack_push(stack_p: TrashStack, data_p: any): void;
export function try_malloc(n_bytes: number): any | null;
export function try_malloc0(n_bytes: number): any | null;
export function try_malloc0_n(n_blocks: number, n_block_bytes: number): any | null;
export function try_malloc_n(n_blocks: number, n_block_bytes: number): any | null;
export function try_realloc(mem: any | null, n_bytes: number): any | null;
export function try_realloc_n(mem: any | null, n_blocks: number, n_block_bytes: number): any | null;
export function ucs4_to_utf16(str: number, len: number): [number, number | null, number | null];
export function ucs4_to_utf8(str: number, len: number): [string, number | null, number | null];
export function unichar_break_type(c: number): UnicodeBreakType;
export function unichar_combining_class(uc: number): number;
export function unichar_compose(a: number, b: number): [boolean, number];
export function unichar_decompose(ch: number): [boolean, number, number];
export function unichar_digit_value(c: number): number;
export function unichar_fully_decompose(ch: number, compat: boolean, result_len: number): [number, number | null];
export function unichar_get_mirror_char(ch: number, mirrored_ch: number): boolean;
export function unichar_get_script(ch: number): UnicodeScript;
export function unichar_isalnum(c: number): boolean;
export function unichar_isalpha(c: number): boolean;
export function unichar_iscntrl(c: number): boolean;
export function unichar_isdefined(c: number): boolean;
export function unichar_isdigit(c: number): boolean;
export function unichar_isgraph(c: number): boolean;
export function unichar_islower(c: number): boolean;
export function unichar_ismark(c: number): boolean;
export function unichar_isprint(c: number): boolean;
export function unichar_ispunct(c: number): boolean;
export function unichar_isspace(c: number): boolean;
export function unichar_istitle(c: number): boolean;
export function unichar_isupper(c: number): boolean;
export function unichar_iswide(c: number): boolean;
export function unichar_iswide_cjk(c: number): boolean;
export function unichar_isxdigit(c: number): boolean;
export function unichar_iszerowidth(c: number): boolean;
export function unichar_to_utf8(c: number): [number, string | null];
export function unichar_tolower(c: number): number;
export function unichar_totitle(c: number): number;
export function unichar_toupper(c: number): number;
export function unichar_type(c: number): UnicodeType;
export function unichar_validate(ch: number): boolean;
export function unichar_xdigit_value(c: number): number;
export function unicode_canonical_decomposition(ch: number, result_len: number): number;
export function unicode_canonical_ordering(string: number, len: number): void;
export function unicode_script_from_iso15924(iso15924: number): UnicodeScript;
export function unicode_script_to_iso15924(script: UnicodeScript): number;
export function unix_error_quark(): Quark;
export function unix_fd_add_full(
    priority: number,
    fd: number,
    condition: IOCondition,
    _function: UnixFDSourceFunc
): number;
export function unix_fd_source_new(fd: number, condition: IOCondition): Source;
export function unix_get_passwd_entry(user_name: string): any | null;
export function unix_open_pipe(fds: number, flags: number): boolean;
export function unix_set_fd_nonblocking(fd: number, nonblock: boolean): boolean;
export function unix_signal_add(priority: number, signum: number, handler: SourceFunc): number;
export function unix_signal_source_new(signum: number): Source;
export function unlink(filename: string): number;
export function unsetenv(variable: string): void;
export function uri_build(
    flags: UriFlags,
    scheme: string,
    userinfo: string | null,
    host: string | null,
    port: number,
    path: string,
    query?: string | null,
    fragment?: string | null
): Uri;
export function uri_build_with_user(
    flags: UriFlags,
    scheme: string,
    user: string | null,
    password: string | null,
    auth_params: string | null,
    host: string | null,
    port: number,
    path: string,
    query?: string | null,
    fragment?: string | null
): Uri;
export function uri_error_quark(): Quark;
export function uri_escape_bytes(unescaped: Uint8Array | string, reserved_chars_allowed?: string | null): string;
export function uri_escape_string(
    unescaped: string,
    reserved_chars_allowed: string | null,
    allow_utf8: boolean
): string;
export function uri_is_valid(uri_string: string, flags: UriFlags): boolean;
export function uri_join(
    flags: UriFlags,
    scheme: string | null,
    userinfo: string | null,
    host: string | null,
    port: number,
    path: string,
    query?: string | null,
    fragment?: string | null
): string;
export function uri_join_with_user(
    flags: UriFlags,
    scheme: string | null,
    user: string | null,
    password: string | null,
    auth_params: string | null,
    host: string | null,
    port: number,
    path: string,
    query?: string | null,
    fragment?: string | null
): string;
export function uri_list_extract_uris(uri_list: string): string[];
export function uri_parse(uri_string: string, flags: UriFlags): Uri;
export function uri_parse_params(
    params: string,
    length: number,
    separators: string,
    flags: UriParamsFlags
): HashTable<string, string>;
export function uri_parse_scheme(uri: string): string | null;
export function uri_peek_scheme(uri: string): string | null;
export function uri_resolve_relative(base_uri_string: string | null, uri_ref: string, flags: UriFlags): string;
export function uri_split(
    uri_ref: string,
    flags: UriFlags
): [boolean, string | null, string | null, string | null, number | null, string | null, string | null, string | null];
export function uri_split_network(
    uri_string: string,
    flags: UriFlags
): [boolean, string | null, string | null, number | null];
export function uri_split_with_user(
    uri_ref: string,
    flags: UriFlags
): [
    boolean,
    string | null,
    string | null,
    string | null,
    string | null,
    string | null,
    number | null,
    string | null,
    string | null,
    string | null
];
export function uri_unescape_bytes(escaped_string: string, length: number, illegal_characters?: string | null): Bytes;
export function uri_unescape_segment(
    escaped_string?: string | null,
    escaped_string_end?: string | null,
    illegal_characters?: string | null
): string;
export function uri_unescape_string(escaped_string: string, illegal_characters?: string | null): string;
export function usleep(microseconds: number): void;
export function utf16_to_ucs4(str: number, len: number): [number, number | null, number | null];
export function utf16_to_utf8(str: number, len: number): [string, number | null, number | null];
export function utf8_casefold(str: string, len: number): string;
export function utf8_collate(str1: string, str2: string): number;
export function utf8_collate_key(str: string, len: number): string;
export function utf8_collate_key_for_filename(str: string, len: number): string;
export function utf8_find_next_char(p: string, end?: string | null): string | null;
export function utf8_find_prev_char(str: string, p: string): string | null;
export function utf8_get_char(p: string): number;
export function utf8_get_char_validated(p: string, max_len: number): number;
export function utf8_make_valid(str: string, len: number): string;
export function utf8_normalize(str: string, len: number, mode: NormalizeMode): string | null;
export function utf8_offset_to_pointer(str: string, offset: number): string;
export function utf8_pointer_to_offset(str: string, pos: string): number;
export function utf8_prev_char(p: string): string;
export function utf8_strchr(p: string, len: number, c: number): string | null;
export function utf8_strdown(str: string, len: number): string;
export function utf8_strlen(p: string, max: number): number;
export function utf8_strncpy(dest: string, src: string, n: number): string;
export function utf8_strrchr(p: string, len: number, c: number): string | null;
export function utf8_strreverse(str: string, len: number): string;
export function utf8_strup(str: string, len: number): string;
export function utf8_substring(str: string, start_pos: number, end_pos: number): string;
export function utf8_to_ucs4(str: string, len: number): [number, number | null, number | null];
export function utf8_to_ucs4_fast(str: string, len: number): [number, number | null];
export function utf8_to_utf16(str: string, len: number): [number, number | null, number | null];
export function utf8_validate(str: Uint8Array | string): [boolean, string | null];
export function utf8_validate_len(str: Uint8Array | string): [boolean, string | null];
export function uuid_string_is_valid(str: string): boolean;
export function uuid_string_random(): string;
export function variant_get_gtype(): GObject.GType;
export function variant_is_object_path(string: string): boolean;
export function variant_is_signature(string: string): boolean;
export function variant_parse(
    type: VariantType | null,
    text: string,
    limit?: string | null,
    endptr?: string | null
): Variant;
export function variant_parse_error_print_context(error: Error, source_str: string): string;
export function variant_parse_error_quark(): Quark;
export function variant_parser_get_error_quark(): Quark;
export function variant_type_checked_(arg0: string): VariantType;
export function variant_type_string_get_depth_(type_string: string): number;
export function variant_type_string_is_valid(type_string: string): boolean;
export function variant_type_string_scan(string: string, limit?: string | null): [boolean, string | null];
export type ChildWatchFunc = (pid: Pid, status: number) => void;
export type ClearHandleFunc = (handle_id: number) => void;
export type CompareDataFunc = (a?: any | null, b?: any | null) => number;
export type CompareFunc = (a?: any | null, b?: any | null) => number;
export type CopyFunc = (src: any, data?: any | null) => any;
export type DataForeachFunc = (key_id: Quark, data?: any | null) => void;
export type DestroyNotify = (data?: any | null) => void;
export type DuplicateFunc = (data?: any | null) => any | null;
export type EqualFunc = (a?: any | null, b?: any | null) => boolean;
export type FreeFunc = (data?: any | null) => void;
export type Func = (data?: any | null) => void;
export type HFunc = (key?: any | null, value?: any | null) => void;
export type HRFunc = (key?: any | null, value?: any | null) => boolean;
export type HashFunc = (key?: any | null) => number;
export type HookCheckFunc = (data?: any | null) => boolean;
export type HookCheckMarshaller = (hook: Hook, marshal_data?: any | null) => boolean;
export type HookCompareFunc = (new_hook: Hook, sibling: Hook) => number;
export type HookFinalizeFunc = (hook_list: HookList, hook: Hook) => void;
export type HookFindFunc = (hook: Hook, data?: any | null) => boolean;
export type HookFunc = (data?: any | null) => void;
export type HookMarshaller = (hook: Hook, marshal_data?: any | null) => void;
export type IOFunc = (source: IOChannel, condition: IOCondition, data?: any | null) => boolean;
export type LogFunc = (log_domain: string, log_level: LogLevelFlags, message: string) => void;
export type LogWriterFunc = (log_level: LogLevelFlags, fields: LogField[]) => LogWriterOutput;
export type NodeForeachFunc = (node: Node, data?: any | null) => void;
export type NodeTraverseFunc = (node: Node, data?: any | null) => boolean;
export type OptionArgFunc = (option_name: string, value: string, data?: any | null) => boolean;
export type OptionErrorFunc = (context: OptionContext, group: OptionGroup, data?: any | null) => void;
export type OptionParseFunc = (context: OptionContext, group: OptionGroup, data?: any | null) => boolean;
export type PollFunc = (ufds: PollFD, nfsd: number, timeout_: number) => number;
export type PrintFunc = (string: string) => void;
export type RegexEvalCallback = (match_info: MatchInfo, result: String) => boolean;
export type ScannerMsgFunc = (scanner: Scanner, message: string, error: boolean) => void;
export type SequenceIterCompareFunc = (a: SequenceIter, b: SequenceIter, data?: any | null) => number;
export type SourceDisposeFunc = (source: Source) => void;
export type SourceDummyMarshal = () => void;
export type SourceFunc = () => boolean;
export type SpawnChildSetupFunc = () => void;
export type TestDataFunc = () => void;
export type TestFixtureFunc = (fixture: any) => void;
export type TestFunc = () => void;
export type TestLogFatalFunc = (log_domain: string, log_level: LogLevelFlags, message: string) => boolean;
export type ThreadFunc = (data?: any | null) => any | null;
export type TranslateFunc = (str: string, data?: any | null) => string;
export type TraverseFunc = (key?: any | null, value?: any | null, data?: any | null) => boolean;
export type UnixFDSourceFunc = (fd: number, condition: IOCondition) => boolean;
export type VoidFunc = () => void;

export class BookmarkFileError extends Error {
    static $gtype: GObject.GType<BookmarkFileError>;

    constructor(options: { message: string; code: number });
    constructor(copy: BookmarkFileError);

    // Properties
    static INVALID_URI: number;
    static INVALID_VALUE: number;
    static APP_NOT_REGISTERED: number;
    static URI_NOT_FOUND: number;
    static READ: number;
    static UNKNOWN_ENCODING: number;
    static WRITE: number;
    static FILE_NOT_FOUND: number;
}

export namespace ChecksumType {
    export const $gtype: GObject.GType<ChecksumType>;
}

export enum ChecksumType {
    MD5 = 0,
    SHA1 = 1,
    SHA256 = 2,
    SHA512 = 3,
    SHA384 = 4,
}

export class ConvertError extends Error {
    static $gtype: GObject.GType<ConvertError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ConvertError);

    // Properties
    static NO_CONVERSION: number;
    static ILLEGAL_SEQUENCE: number;
    static FAILED: number;
    static PARTIAL_INPUT: number;
    static BAD_URI: number;
    static NOT_ABSOLUTE_PATH: number;
    static NO_MEMORY: number;
    static EMBEDDED_NUL: number;
}

export namespace DateDMY {
    export const $gtype: GObject.GType<DateDMY>;
}

export enum DateDMY {
    DAY = 0,
    MONTH = 1,
    YEAR = 2,
}

export namespace DateMonth {
    export const $gtype: GObject.GType<DateMonth>;
}

export enum DateMonth {
    BAD_MONTH = 0,
    JANUARY = 1,
    FEBRUARY = 2,
    MARCH = 3,
    APRIL = 4,
    MAY = 5,
    JUNE = 6,
    JULY = 7,
    AUGUST = 8,
    SEPTEMBER = 9,
    OCTOBER = 10,
    NOVEMBER = 11,
    DECEMBER = 12,
}

export namespace DateWeekday {
    export const $gtype: GObject.GType<DateWeekday>;
}

export enum DateWeekday {
    BAD_WEEKDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
}

export namespace ErrorType {
    export const $gtype: GObject.GType<ErrorType>;
}

export enum ErrorType {
    UNKNOWN = 0,
    UNEXP_EOF = 1,
    UNEXP_EOF_IN_STRING = 2,
    UNEXP_EOF_IN_COMMENT = 3,
    NON_DIGIT_IN_CONST = 4,
    DIGIT_RADIX = 5,
    FLOAT_RADIX = 6,
    FLOAT_MALFORMED = 7,
}

export class FileError extends Error {
    static $gtype: GObject.GType<FileError>;

    constructor(options: { message: string; code: number });
    constructor(copy: FileError);

    // Properties
    static EXIST: number;
    static ISDIR: number;
    static ACCES: number;
    static NAMETOOLONG: number;
    static NOENT: number;
    static NOTDIR: number;
    static NXIO: number;
    static NODEV: number;
    static ROFS: number;
    static TXTBSY: number;
    static FAULT: number;
    static LOOP: number;
    static NOSPC: number;
    static NOMEM: number;
    static MFILE: number;
    static NFILE: number;
    static BADF: number;
    static INVAL: number;
    static PIPE: number;
    static AGAIN: number;
    static INTR: number;
    static IO: number;
    static PERM: number;
    static NOSYS: number;
    static FAILED: number;
}

export class IOChannelError extends Error {
    static $gtype: GObject.GType<IOChannelError>;

    constructor(options: { message: string; code: number });
    constructor(copy: IOChannelError);

    // Properties
    static FBIG: number;
    static INVAL: number;
    static IO: number;
    static ISDIR: number;
    static NOSPC: number;
    static NXIO: number;
    static OVERFLOW: number;
    static PIPE: number;
    static FAILED: number;
}

export namespace IOError {
    export const $gtype: GObject.GType<IOError>;
}

export enum IOError {
    NONE = 0,
    AGAIN = 1,
    INVAL = 2,
    UNKNOWN = 3,
}

export namespace IOStatus {
    export const $gtype: GObject.GType<IOStatus>;
}

export enum IOStatus {
    ERROR = 0,
    NORMAL = 1,
    EOF = 2,
    AGAIN = 3,
}

export class KeyFileError extends Error {
    static $gtype: GObject.GType<KeyFileError>;

    constructor(options: { message: string; code: number });
    constructor(copy: KeyFileError);

    // Properties
    static UNKNOWN_ENCODING: number;
    static PARSE: number;
    static NOT_FOUND: number;
    static KEY_NOT_FOUND: number;
    static GROUP_NOT_FOUND: number;
    static INVALID_VALUE: number;
}

export namespace LogWriterOutput {
    export const $gtype: GObject.GType<LogWriterOutput>;
}

export enum LogWriterOutput {
    HANDLED = 1,
    UNHANDLED = 0,
}

export class MarkupError extends Error {
    static $gtype: GObject.GType<MarkupError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MarkupError);

    // Properties
    static BAD_UTF8: number;
    static EMPTY: number;
    static PARSE: number;
    static UNKNOWN_ELEMENT: number;
    static UNKNOWN_ATTRIBUTE: number;
    static INVALID_CONTENT: number;
    static MISSING_ATTRIBUTE: number;
}

export namespace NormalizeMode {
    export const $gtype: GObject.GType<NormalizeMode>;
}

export enum NormalizeMode {
    DEFAULT = 0,
    NFD = 0,
    DEFAULT_COMPOSE = 1,
    NFC = 1,
    ALL = 2,
    NFKD = 2,
    ALL_COMPOSE = 3,
    NFKC = 3,
}

export class NumberParserError extends Error {
    static $gtype: GObject.GType<NumberParserError>;

    constructor(options: { message: string; code: number });
    constructor(copy: NumberParserError);

    // Properties
    static INVALID: number;
    static OUT_OF_BOUNDS: number;
}

export namespace OnceStatus {
    export const $gtype: GObject.GType<OnceStatus>;
}

export enum OnceStatus {
    NOTCALLED = 0,
    PROGRESS = 1,
    READY = 2,
}

export namespace OptionArg {
    export const $gtype: GObject.GType<OptionArg>;
}

export enum OptionArg {
    NONE = 0,
    STRING = 1,
    INT = 2,
    CALLBACK = 3,
    FILENAME = 4,
    STRING_ARRAY = 5,
    FILENAME_ARRAY = 6,
    DOUBLE = 7,
    INT64 = 8,
}

export class OptionError extends Error {
    static $gtype: GObject.GType<OptionError>;

    constructor(options: { message: string; code: number });
    constructor(copy: OptionError);

    // Properties
    static UNKNOWN_OPTION: number;
    static BAD_VALUE: number;
    static FAILED: number;
}

export class RegexError extends Error {
    static $gtype: GObject.GType<RegexError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RegexError);

    // Properties
    static COMPILE: number;
    static OPTIMIZE: number;
    static REPLACE: number;
    static MATCH: number;
    static INTERNAL: number;
    static STRAY_BACKSLASH: number;
    static MISSING_CONTROL_CHAR: number;
    static UNRECOGNIZED_ESCAPE: number;
    static QUANTIFIERS_OUT_OF_ORDER: number;
    static QUANTIFIER_TOO_BIG: number;
    static UNTERMINATED_CHARACTER_CLASS: number;
    static INVALID_ESCAPE_IN_CHARACTER_CLASS: number;
    static RANGE_OUT_OF_ORDER: number;
    static NOTHING_TO_REPEAT: number;
    static UNRECOGNIZED_CHARACTER: number;
    static POSIX_NAMED_CLASS_OUTSIDE_CLASS: number;
    static UNMATCHED_PARENTHESIS: number;
    static INEXISTENT_SUBPATTERN_REFERENCE: number;
    static UNTERMINATED_COMMENT: number;
    static EXPRESSION_TOO_LARGE: number;
    static MEMORY_ERROR: number;
    static VARIABLE_LENGTH_LOOKBEHIND: number;
    static MALFORMED_CONDITION: number;
    static TOO_MANY_CONDITIONAL_BRANCHES: number;
    static ASSERTION_EXPECTED: number;
    static UNKNOWN_POSIX_CLASS_NAME: number;
    static POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED: number;
    static HEX_CODE_TOO_LARGE: number;
    static INVALID_CONDITION: number;
    static SINGLE_BYTE_MATCH_IN_LOOKBEHIND: number;
    static INFINITE_LOOP: number;
    static MISSING_SUBPATTERN_NAME_TERMINATOR: number;
    static DUPLICATE_SUBPATTERN_NAME: number;
    static MALFORMED_PROPERTY: number;
    static UNKNOWN_PROPERTY: number;
    static SUBPATTERN_NAME_TOO_LONG: number;
    static TOO_MANY_SUBPATTERNS: number;
    static INVALID_OCTAL_VALUE: number;
    static TOO_MANY_BRANCHES_IN_DEFINE: number;
    static DEFINE_REPETION: number;
    static INCONSISTENT_NEWLINE_OPTIONS: number;
    static MISSING_BACK_REFERENCE: number;
    static INVALID_RELATIVE_REFERENCE: number;
    static BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN: number;
    static UNKNOWN_BACKTRACKING_CONTROL_VERB: number;
    static NUMBER_TOO_BIG: number;
    static MISSING_SUBPATTERN_NAME: number;
    static MISSING_DIGIT: number;
    static INVALID_DATA_CHARACTER: number;
    static EXTRA_SUBPATTERN_NAME: number;
    static BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED: number;
    static INVALID_CONTROL_CHAR: number;
    static MISSING_NAME: number;
    static NOT_SUPPORTED_IN_CLASS: number;
    static TOO_MANY_FORWARD_REFERENCES: number;
    static NAME_TOO_LONG: number;
    static CHARACTER_VALUE_TOO_LARGE: number;
}

export namespace SeekType {
    export const $gtype: GObject.GType<SeekType>;
}

export enum SeekType {
    CUR = 0,
    SET = 1,
    END = 2,
}

export class ShellError extends Error {
    static $gtype: GObject.GType<ShellError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ShellError);

    // Properties
    static BAD_QUOTING: number;
    static EMPTY_STRING: number;
    static FAILED: number;
}

export namespace SliceConfig {
    export const $gtype: GObject.GType<SliceConfig>;
}

export enum SliceConfig {
    ALWAYS_MALLOC = 1,
    BYPASS_MAGAZINES = 2,
    WORKING_SET_MSECS = 3,
    COLOR_INCREMENT = 4,
    CHUNK_SIZES = 5,
    CONTENTION_COUNTER = 6,
}

export class SpawnError extends Error {
    static $gtype: GObject.GType<SpawnError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SpawnError);

    // Properties
    static FORK: number;
    static READ: number;
    static CHDIR: number;
    static ACCES: number;
    static PERM: number;
    static TOO_BIG: number;
    static "2BIG": number;
    static NOEXEC: number;
    static NAMETOOLONG: number;
    static NOENT: number;
    static NOMEM: number;
    static NOTDIR: number;
    static LOOP: number;
    static TXTBUSY: number;
    static IO: number;
    static NFILE: number;
    static MFILE: number;
    static INVAL: number;
    static ISDIR: number;
    static LIBBAD: number;
    static FAILED: number;
}

export namespace TestFileType {
    export const $gtype: GObject.GType<TestFileType>;
}

export enum TestFileType {
    DIST = 0,
    BUILT = 1,
}

export namespace TestLogType {
    export const $gtype: GObject.GType<TestLogType>;
}

export enum TestLogType {
    NONE = 0,
    ERROR = 1,
    START_BINARY = 2,
    LIST_CASE = 3,
    SKIP_CASE = 4,
    START_CASE = 5,
    STOP_CASE = 6,
    MIN_RESULT = 7,
    MAX_RESULT = 8,
    MESSAGE = 9,
    START_SUITE = 10,
    STOP_SUITE = 11,
}

export namespace TestResult {
    export const $gtype: GObject.GType<TestResult>;
}

export enum TestResult {
    SUCCESS = 0,
    SKIPPED = 1,
    FAILURE = 2,
    INCOMPLETE = 3,
}

export class ThreadError extends Error {
    static $gtype: GObject.GType<ThreadError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ThreadError);

    // Properties
    static THREAD_ERROR_AGAIN: number;
}

export namespace TimeType {
    export const $gtype: GObject.GType<TimeType>;
}

export enum TimeType {
    STANDARD = 0,
    DAYLIGHT = 1,
    UNIVERSAL = 2,
}

export namespace TokenType {
    export const $gtype: GObject.GType<TokenType>;
}

export enum TokenType {
    EOF = 0,
    LEFT_PAREN = 40,
    RIGHT_PAREN = 41,
    LEFT_CURLY = 123,
    RIGHT_CURLY = 125,
    LEFT_BRACE = 91,
    RIGHT_BRACE = 93,
    EQUAL_SIGN = 61,
    COMMA = 44,
    NONE = 256,
    ERROR = 257,
    CHAR = 258,
    BINARY = 259,
    OCTAL = 260,
    INT = 261,
    HEX = 262,
    FLOAT = 263,
    STRING = 264,
    SYMBOL = 265,
    IDENTIFIER = 266,
    IDENTIFIER_NULL = 267,
    COMMENT_SINGLE = 268,
    COMMENT_MULTI = 269,
}

export namespace TraverseType {
    export const $gtype: GObject.GType<TraverseType>;
}

export enum TraverseType {
    IN_ORDER = 0,
    PRE_ORDER = 1,
    POST_ORDER = 2,
    LEVEL_ORDER = 3,
}

export namespace UnicodeBreakType {
    export const $gtype: GObject.GType<UnicodeBreakType>;
}

export enum UnicodeBreakType {
    MANDATORY = 0,
    CARRIAGE_RETURN = 1,
    LINE_FEED = 2,
    COMBINING_MARK = 3,
    SURROGATE = 4,
    ZERO_WIDTH_SPACE = 5,
    INSEPARABLE = 6,
    NON_BREAKING_GLUE = 7,
    CONTINGENT = 8,
    SPACE = 9,
    AFTER = 10,
    BEFORE = 11,
    BEFORE_AND_AFTER = 12,
    HYPHEN = 13,
    NON_STARTER = 14,
    OPEN_PUNCTUATION = 15,
    CLOSE_PUNCTUATION = 16,
    QUOTATION = 17,
    EXCLAMATION = 18,
    IDEOGRAPHIC = 19,
    NUMERIC = 20,
    INFIX_SEPARATOR = 21,
    SYMBOL = 22,
    ALPHABETIC = 23,
    PREFIX = 24,
    POSTFIX = 25,
    COMPLEX_CONTEXT = 26,
    AMBIGUOUS = 27,
    UNKNOWN = 28,
    NEXT_LINE = 29,
    WORD_JOINER = 30,
    HANGUL_L_JAMO = 31,
    HANGUL_V_JAMO = 32,
    HANGUL_T_JAMO = 33,
    HANGUL_LV_SYLLABLE = 34,
    HANGUL_LVT_SYLLABLE = 35,
    CLOSE_PARANTHESIS = 36,
    CONDITIONAL_JAPANESE_STARTER = 37,
    HEBREW_LETTER = 38,
    REGIONAL_INDICATOR = 39,
    EMOJI_BASE = 40,
    EMOJI_MODIFIER = 41,
    ZERO_WIDTH_JOINER = 42,
}

export namespace UnicodeScript {
    export const $gtype: GObject.GType<UnicodeScript>;
}

export enum UnicodeScript {
    INVALID_CODE = -1,
    COMMON = 0,
    INHERITED = 1,
    ARABIC = 2,
    ARMENIAN = 3,
    BENGALI = 4,
    BOPOMOFO = 5,
    CHEROKEE = 6,
    COPTIC = 7,
    CYRILLIC = 8,
    DESERET = 9,
    DEVANAGARI = 10,
    ETHIOPIC = 11,
    GEORGIAN = 12,
    GOTHIC = 13,
    GREEK = 14,
    GUJARATI = 15,
    GURMUKHI = 16,
    HAN = 17,
    HANGUL = 18,
    HEBREW = 19,
    HIRAGANA = 20,
    KANNADA = 21,
    KATAKANA = 22,
    KHMER = 23,
    LAO = 24,
    LATIN = 25,
    MALAYALAM = 26,
    MONGOLIAN = 27,
    MYANMAR = 28,
    OGHAM = 29,
    OLD_ITALIC = 30,
    ORIYA = 31,
    RUNIC = 32,
    SINHALA = 33,
    SYRIAC = 34,
    TAMIL = 35,
    TELUGU = 36,
    THAANA = 37,
    THAI = 38,
    TIBETAN = 39,
    CANADIAN_ABORIGINAL = 40,
    YI = 41,
    TAGALOG = 42,
    HANUNOO = 43,
    BUHID = 44,
    TAGBANWA = 45,
    BRAILLE = 46,
    CYPRIOT = 47,
    LIMBU = 48,
    OSMANYA = 49,
    SHAVIAN = 50,
    LINEAR_B = 51,
    TAI_LE = 52,
    UGARITIC = 53,
    NEW_TAI_LUE = 54,
    BUGINESE = 55,
    GLAGOLITIC = 56,
    TIFINAGH = 57,
    SYLOTI_NAGRI = 58,
    OLD_PERSIAN = 59,
    KHAROSHTHI = 60,
    UNKNOWN = 61,
    BALINESE = 62,
    CUNEIFORM = 63,
    PHOENICIAN = 64,
    PHAGS_PA = 65,
    NKO = 66,
    KAYAH_LI = 67,
    LEPCHA = 68,
    REJANG = 69,
    SUNDANESE = 70,
    SAURASHTRA = 71,
    CHAM = 72,
    OL_CHIKI = 73,
    VAI = 74,
    CARIAN = 75,
    LYCIAN = 76,
    LYDIAN = 77,
    AVESTAN = 78,
    BAMUM = 79,
    EGYPTIAN_HIEROGLYPHS = 80,
    IMPERIAL_ARAMAIC = 81,
    INSCRIPTIONAL_PAHLAVI = 82,
    INSCRIPTIONAL_PARTHIAN = 83,
    JAVANESE = 84,
    KAITHI = 85,
    LISU = 86,
    MEETEI_MAYEK = 87,
    OLD_SOUTH_ARABIAN = 88,
    OLD_TURKIC = 89,
    SAMARITAN = 90,
    TAI_THAM = 91,
    TAI_VIET = 92,
    BATAK = 93,
    BRAHMI = 94,
    MANDAIC = 95,
    CHAKMA = 96,
    MEROITIC_CURSIVE = 97,
    MEROITIC_HIEROGLYPHS = 98,
    MIAO = 99,
    SHARADA = 100,
    SORA_SOMPENG = 101,
    TAKRI = 102,
    BASSA_VAH = 103,
    CAUCASIAN_ALBANIAN = 104,
    DUPLOYAN = 105,
    ELBASAN = 106,
    GRANTHA = 107,
    KHOJKI = 108,
    KHUDAWADI = 109,
    LINEAR_A = 110,
    MAHAJANI = 111,
    MANICHAEAN = 112,
    MENDE_KIKAKUI = 113,
    MODI = 114,
    MRO = 115,
    NABATAEAN = 116,
    OLD_NORTH_ARABIAN = 117,
    OLD_PERMIC = 118,
    PAHAWH_HMONG = 119,
    PALMYRENE = 120,
    PAU_CIN_HAU = 121,
    PSALTER_PAHLAVI = 122,
    SIDDHAM = 123,
    TIRHUTA = 124,
    WARANG_CITI = 125,
    AHOM = 126,
    ANATOLIAN_HIEROGLYPHS = 127,
    HATRAN = 128,
    MULTANI = 129,
    OLD_HUNGARIAN = 130,
    SIGNWRITING = 131,
    ADLAM = 132,
    BHAIKSUKI = 133,
    MARCHEN = 134,
    NEWA = 135,
    OSAGE = 136,
    TANGUT = 137,
    MASARAM_GONDI = 138,
    NUSHU = 139,
    SOYOMBO = 140,
    ZANABAZAR_SQUARE = 141,
    DOGRA = 142,
    GUNJALA_GONDI = 143,
    HANIFI_ROHINGYA = 144,
    MAKASAR = 145,
    MEDEFAIDRIN = 146,
    OLD_SOGDIAN = 147,
    SOGDIAN = 148,
    ELYMAIC = 149,
    NANDINAGARI = 150,
    NYIAKENG_PUACHUE_HMONG = 151,
    WANCHO = 152,
    CHORASMIAN = 153,
    DIVES_AKURU = 154,
    KHITAN_SMALL_SCRIPT = 155,
    YEZIDI = 156,
}

export namespace UnicodeType {
    export const $gtype: GObject.GType<UnicodeType>;
}

export enum UnicodeType {
    CONTROL = 0,
    FORMAT = 1,
    UNASSIGNED = 2,
    PRIVATE_USE = 3,
    SURROGATE = 4,
    LOWERCASE_LETTER = 5,
    MODIFIER_LETTER = 6,
    OTHER_LETTER = 7,
    TITLECASE_LETTER = 8,
    UPPERCASE_LETTER = 9,
    SPACING_MARK = 10,
    ENCLOSING_MARK = 11,
    NON_SPACING_MARK = 12,
    DECIMAL_NUMBER = 13,
    LETTER_NUMBER = 14,
    OTHER_NUMBER = 15,
    CONNECT_PUNCTUATION = 16,
    DASH_PUNCTUATION = 17,
    CLOSE_PUNCTUATION = 18,
    FINAL_PUNCTUATION = 19,
    INITIAL_PUNCTUATION = 20,
    OTHER_PUNCTUATION = 21,
    OPEN_PUNCTUATION = 22,
    CURRENCY_SYMBOL = 23,
    MODIFIER_SYMBOL = 24,
    MATH_SYMBOL = 25,
    OTHER_SYMBOL = 26,
    LINE_SEPARATOR = 27,
    PARAGRAPH_SEPARATOR = 28,
    SPACE_SEPARATOR = 29,
}

export class UriError extends Error {
    static $gtype: GObject.GType<UriError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UriError);

    // Properties
    static FAILED: number;
    static BAD_SCHEME: number;
    static BAD_USER: number;
    static BAD_PASSWORD: number;
    static BAD_AUTH_PARAMS: number;
    static BAD_HOST: number;
    static BAD_PORT: number;
    static BAD_PATH: number;
    static BAD_QUERY: number;
    static BAD_FRAGMENT: number;
}

export namespace UserDirectory {
    export const $gtype: GObject.GType<UserDirectory>;
}

export enum UserDirectory {
    DIRECTORY_DESKTOP = 0,
    DIRECTORY_DOCUMENTS = 1,
    DIRECTORY_DOWNLOAD = 2,
    DIRECTORY_MUSIC = 3,
    DIRECTORY_PICTURES = 4,
    DIRECTORY_PUBLIC_SHARE = 5,
    DIRECTORY_TEMPLATES = 6,
    DIRECTORY_VIDEOS = 7,
    N_DIRECTORIES = 8,
}

export namespace VariantClass {
    export const $gtype: GObject.GType<VariantClass>;
}

export enum VariantClass {
    BOOLEAN = 98,
    BYTE = 121,
    INT16 = 110,
    UINT16 = 113,
    INT32 = 105,
    UINT32 = 117,
    INT64 = 120,
    UINT64 = 116,
    HANDLE = 104,
    DOUBLE = 100,
    STRING = 115,
    OBJECT_PATH = 111,
    SIGNATURE = 103,
    VARIANT = 118,
    MAYBE = 109,
    ARRAY = 97,
    TUPLE = 40,
    DICT_ENTRY = 123,
}

export class VariantParseError extends Error {
    static $gtype: GObject.GType<VariantParseError>;

    constructor(options: { message: string; code: number });
    constructor(copy: VariantParseError);

    // Properties
    static FAILED: number;
    static BASIC_TYPE_EXPECTED: number;
    static CANNOT_INFER_TYPE: number;
    static DEFINITE_TYPE_EXPECTED: number;
    static INPUT_NOT_AT_END: number;
    static INVALID_CHARACTER: number;
    static INVALID_FORMAT_STRING: number;
    static INVALID_OBJECT_PATH: number;
    static INVALID_SIGNATURE: number;
    static INVALID_TYPE_STRING: number;
    static NO_COMMON_TYPE: number;
    static NUMBER_OUT_OF_RANGE: number;
    static NUMBER_TOO_BIG: number;
    static TYPE_ERROR: number;
    static UNEXPECTED_TOKEN: number;
    static UNKNOWN_KEYWORD: number;
    static UNTERMINATED_STRING_CONSTANT: number;
    static VALUE_EXPECTED: number;
    static RECURSION: number;
}

export namespace AsciiType {
    export const $gtype: GObject.GType<AsciiType>;
}

export enum AsciiType {
    ALNUM = 1,
    ALPHA = 2,
    CNTRL = 4,
    DIGIT = 8,
    GRAPH = 16,
    LOWER = 32,
    PRINT = 64,
    PUNCT = 128,
    SPACE = 256,
    UPPER = 512,
    XDIGIT = 1024,
}

export namespace FileSetContentsFlags {
    export const $gtype: GObject.GType<FileSetContentsFlags>;
}

export enum FileSetContentsFlags {
    NONE = 0,
    CONSISTENT = 1,
    DURABLE = 2,
    ONLY_EXISTING = 4,
}

export namespace FileTest {
    export const $gtype: GObject.GType<FileTest>;
}

export enum FileTest {
    IS_REGULAR = 1,
    IS_SYMLINK = 2,
    IS_DIR = 4,
    IS_EXECUTABLE = 8,
    EXISTS = 16,
}

export namespace FormatSizeFlags {
    export const $gtype: GObject.GType<FormatSizeFlags>;
}

export enum FormatSizeFlags {
    DEFAULT = 0,
    LONG_FORMAT = 1,
    IEC_UNITS = 2,
    BITS = 4,
}

export namespace HookFlagMask {
    export const $gtype: GObject.GType<HookFlagMask>;
}

export enum HookFlagMask {
    ACTIVE = 1,
    IN_CALL = 2,
    MASK = 15,
}

export namespace IOCondition {
    export const $gtype: GObject.GType<IOCondition>;
}

export enum IOCondition {
    IN = 1,
    OUT = 4,
    PRI = 2,
    ERR = 8,
    HUP = 16,
    NVAL = 32,
}

export namespace IOFlags {
    export const $gtype: GObject.GType<IOFlags>;
}

export enum IOFlags {
    APPEND = 1,
    NONBLOCK = 2,
    IS_READABLE = 4,
    IS_WRITABLE = 8,
    IS_WRITEABLE = 8,
    IS_SEEKABLE = 16,
    MASK = 31,
    GET_MASK = 31,
    SET_MASK = 3,
}

export namespace KeyFileFlags {
    export const $gtype: GObject.GType<KeyFileFlags>;
}

export enum KeyFileFlags {
    NONE = 0,
    KEEP_COMMENTS = 1,
    KEEP_TRANSLATIONS = 2,
}

export namespace LogLevelFlags {
    export const $gtype: GObject.GType<LogLevelFlags>;
}

export enum LogLevelFlags {
    FLAG_RECURSION = 1,
    FLAG_FATAL = 2,
    LEVEL_ERROR = 4,
    LEVEL_CRITICAL = 8,
    LEVEL_WARNING = 16,
    LEVEL_MESSAGE = 32,
    LEVEL_INFO = 64,
    LEVEL_DEBUG = 128,
    LEVEL_MASK = -4,
}

export namespace MarkupCollectType {
    export const $gtype: GObject.GType<MarkupCollectType>;
}

export enum MarkupCollectType {
    INVALID = 0,
    STRING = 1,
    STRDUP = 2,
    BOOLEAN = 3,
    TRISTATE = 4,
    OPTIONAL = 65536,
}

export namespace MarkupParseFlags {
    export const $gtype: GObject.GType<MarkupParseFlags>;
}

export enum MarkupParseFlags {
    DO_NOT_USE_THIS_UNSUPPORTED_FLAG = 1,
    TREAT_CDATA_AS_TEXT = 2,
    PREFIX_ERROR_POSITION = 4,
    IGNORE_QUALIFIED = 8,
}

export namespace OptionFlags {
    export const $gtype: GObject.GType<OptionFlags>;
}

export enum OptionFlags {
    NONE = 0,
    HIDDEN = 1,
    IN_MAIN = 2,
    REVERSE = 4,
    NO_ARG = 8,
    FILENAME = 16,
    OPTIONAL_ARG = 32,
    NOALIAS = 64,
}

export namespace RegexCompileFlags {
    export const $gtype: GObject.GType<RegexCompileFlags>;
}

export enum RegexCompileFlags {
    CASELESS = 1,
    MULTILINE = 2,
    DOTALL = 4,
    EXTENDED = 8,
    ANCHORED = 16,
    DOLLAR_ENDONLY = 32,
    UNGREEDY = 512,
    RAW = 2048,
    NO_AUTO_CAPTURE = 4096,
    OPTIMIZE = 8192,
    FIRSTLINE = 262144,
    DUPNAMES = 524288,
    NEWLINE_CR = 1048576,
    NEWLINE_LF = 2097152,
    NEWLINE_CRLF = 3145728,
    NEWLINE_ANYCRLF = 5242880,
    BSR_ANYCRLF = 8388608,
    JAVASCRIPT_COMPAT = 33554432,
}

export namespace RegexMatchFlags {
    export const $gtype: GObject.GType<RegexMatchFlags>;
}

export enum RegexMatchFlags {
    ANCHORED = 16,
    NOTBOL = 128,
    NOTEOL = 256,
    NOTEMPTY = 1024,
    PARTIAL = 32768,
    NEWLINE_CR = 1048576,
    NEWLINE_LF = 2097152,
    NEWLINE_CRLF = 3145728,
    NEWLINE_ANY = 4194304,
    NEWLINE_ANYCRLF = 5242880,
    BSR_ANYCRLF = 8388608,
    BSR_ANY = 16777216,
    PARTIAL_SOFT = 32768,
    PARTIAL_HARD = 134217728,
    NOTEMPTY_ATSTART = 268435456,
}

export namespace SpawnFlags {
    export const $gtype: GObject.GType<SpawnFlags>;
}

export enum SpawnFlags {
    DEFAULT = 0,
    LEAVE_DESCRIPTORS_OPEN = 1,
    DO_NOT_REAP_CHILD = 2,
    SEARCH_PATH = 4,
    STDOUT_TO_DEV_NULL = 8,
    STDERR_TO_DEV_NULL = 16,
    CHILD_INHERITS_STDIN = 32,
    FILE_AND_ARGV_ZERO = 64,
    SEARCH_PATH_FROM_ENVP = 128,
    CLOEXEC_PIPES = 256,
}

export namespace TestSubprocessFlags {
    export const $gtype: GObject.GType<TestSubprocessFlags>;
}

export enum TestSubprocessFlags {
    STDIN = 1,
    STDOUT = 2,
    STDERR = 4,
}

export namespace TestTrapFlags {
    export const $gtype: GObject.GType<TestTrapFlags>;
}

export enum TestTrapFlags {
    SILENCE_STDOUT = 128,
    SILENCE_STDERR = 256,
    INHERIT_STDIN = 512,
}

export namespace TraverseFlags {
    export const $gtype: GObject.GType<TraverseFlags>;
}

export enum TraverseFlags {
    LEAVES = 1,
    NON_LEAVES = 2,
    ALL = 3,
    MASK = 3,
    LEAFS = 1,
    NON_LEAFS = 2,
}

export namespace UriFlags {
    export const $gtype: GObject.GType<UriFlags>;
}

export enum UriFlags {
    NONE = 0,
    PARSE_RELAXED = 1,
    HAS_PASSWORD = 2,
    HAS_AUTH_PARAMS = 4,
    ENCODED = 8,
    NON_DNS = 16,
    ENCODED_QUERY = 32,
    ENCODED_PATH = 64,
    ENCODED_FRAGMENT = 128,
}

export namespace UriHideFlags {
    export const $gtype: GObject.GType<UriHideFlags>;
}

export enum UriHideFlags {
    NONE = 0,
    USERINFO = 1,
    PASSWORD = 2,
    AUTH_PARAMS = 4,
    QUERY = 8,
    FRAGMENT = 16,
}

export namespace UriParamsFlags {
    export const $gtype: GObject.GType<UriParamsFlags>;
}

export enum UriParamsFlags {
    NONE = 0,
    CASE_INSENSITIVE = 1,
    WWW_FORM = 2,
    PARSE_RELAXED = 4,
}

export class Array {
    static $gtype: GObject.GType<Array>;

    constructor(
        properties?: Partial<{
            data?: string;
            len?: number;
        }>
    );
    constructor(copy: Array);

    // Fields
    data: string;
    len: number;
}

export class AsyncQueue {
    static $gtype: GObject.GType<AsyncQueue>;

    constructor(copy: AsyncQueue);

    // Members
    length(): number;
    length_unlocked(): number;
    lock(): void;
    pop(): any | null;
    pop_unlocked(): any | null;
    push(data?: any | null): void;
    push_front(item?: any | null): void;
    push_front_unlocked(item?: any | null): void;
    push_unlocked(data?: any | null): void;
    ref_unlocked(): void;
    remove(item?: any | null): boolean;
    remove_unlocked(item?: any | null): boolean;
    timed_pop(end_time: TimeVal): any | null;
    timed_pop_unlocked(end_time: TimeVal): any | null;
    timeout_pop(timeout: number): any | null;
    timeout_pop_unlocked(timeout: number): any | null;
    try_pop(): any | null;
    try_pop_unlocked(): any | null;
    unlock(): void;
    unref(): void;
    unref_and_unlock(): void;
}

export class BookmarkFile {
    static $gtype: GObject.GType<BookmarkFile>;

    constructor(copy: BookmarkFile);

    // Members
    add_application(uri: string, name?: string | null, exec?: string | null): void;
    add_group(uri: string, group: string): void;
    free(): void;
    get_added(uri: string): number;
    get_added_date_time(uri: string): DateTime;
    get_app_info(uri: string, name: string): [boolean, string | null, number | null, number | null];
    get_application_info(uri: string, name: string): [boolean, string | null, number | null, DateTime | null];
    get_applications(uri: string): string[];
    get_description(uri: string): string;
    get_groups(uri: string): string[];
    get_icon(uri: string): [boolean, string | null, string | null];
    get_is_private(uri: string): boolean;
    get_mime_type(uri: string): string;
    get_modified(uri: string): number;
    get_modified_date_time(uri: string): DateTime;
    get_size(): number;
    get_title(uri?: string | null): string;
    get_uris(): string[];
    get_visited(uri: string): number;
    get_visited_date_time(uri: string): DateTime;
    has_application(uri: string, name: string): boolean;
    has_group(uri: string, group: string): boolean;
    has_item(uri: string): boolean;
    load_from_data(data: Uint8Array | string): boolean;
    load_from_data_dirs(file: string): [boolean, string | null];
    load_from_file(filename: string): boolean;
    move_item(old_uri: string, new_uri?: string | null): boolean;
    remove_application(uri: string, name: string): boolean;
    remove_group(uri: string, group: string): boolean;
    remove_item(uri: string): boolean;
    set_added(uri: string, added: number): void;
    set_added_date_time(uri: string, added: DateTime): void;
    set_app_info(uri: string, name: string, exec: string, count: number, stamp: number): boolean;
    set_application_info(uri: string, name: string, exec: string, count: number, stamp?: DateTime | null): boolean;
    set_description(uri: string | null, description: string): void;
    set_groups(uri: string, groups?: string[] | null): void;
    set_icon(uri: string, href: string | null, mime_type: string): void;
    set_is_private(uri: string, is_private: boolean): void;
    set_mime_type(uri: string, mime_type: string): void;
    set_modified(uri: string, modified: number): void;
    set_modified_date_time(uri: string, modified: DateTime): void;
    set_title(uri: string | null, title: string): void;
    set_visited(uri: string, visited: number): void;
    set_visited_date_time(uri: string, visited: DateTime): void;
    to_data(): Uint8Array;
    to_file(filename: string): boolean;
    static error_quark(): Quark;
}

export class ByteArray {
    static $gtype: GObject.GType<ByteArray>;

    constructor(
        properties?: Partial<{
            data?: number;
            len?: number;
        }>
    );
    constructor(copy: ByteArray);

    // Fields
    data: number;
    len: number;

    // Members
    static free(array: Uint8Array | string, free_segment: boolean): number;
    static free_to_bytes(array: Uint8Array | string): Bytes;
    static new(): Uint8Array;
    static new_take(data: Uint8Array | string): Uint8Array;
    static steal(array: Uint8Array | string): [number, number | null];
    static unref(array: Uint8Array | string): void;
}

export class Bytes {
    static $gtype: GObject.GType<Bytes>;

    constructor(data?: Uint8Array | null);
    constructor(copy: Bytes);

    // Constructors
    static ["new"](data?: Uint8Array | null): Bytes;
    static new_take(data?: Uint8Array | null): Bytes;

    // Members
    compare(bytes2: Bytes | Uint8Array): number;
    equal(bytes2: Bytes | Uint8Array): boolean;
    get_data(): Uint8Array | null;
    get_size(): number;
    hash(): number;
    new_from_bytes(offset: number, length: number): Bytes;
    ref(): Bytes;
    unref(): void;
    unref_to_array(): Uint8Array;
    unref_to_data(): Uint8Array;
    toArray(): Uint8Array;
}

export class Checksum {
    static $gtype: GObject.GType<Checksum>;

    constructor(checksum_type: ChecksumType);
    constructor(copy: Checksum);

    // Constructors
    static ["new"](checksum_type: ChecksumType): Checksum;

    // Members
    copy(): Checksum;
    free(): void;
    get_string(): string;
    reset(): void;
    update(data: Uint8Array | string): void;
    static type_get_length(checksum_type: ChecksumType): number;
}

export class Cond {
    static $gtype: GObject.GType<Cond>;

    constructor(copy: Cond);

    // Fields
    p: any;
    i: number[];

    // Members
    broadcast(): void;
    clear(): void;
    init(): void;
    signal(): void;
    wait(mutex: Mutex): void;
    wait_until(mutex: Mutex, end_time: number): boolean;
}

export class Data {
    static $gtype: GObject.GType<Data>;

    constructor(copy: Data);
}

export class Date {
    static $gtype: GObject.GType<Date>;

    constructor();
    constructor(
        properties?: Partial<{
            julian_days?: number;
            julian?: number;
            dmy?: number;
            day?: number;
            month?: number;
            year?: number;
        }>
    );
    constructor(copy: Date);

    // Fields
    julian_days: number;
    julian: number;
    dmy: number;
    day: number;
    month: number;
    year: number;

    // Constructors
    static ["new"](): Date;
    static new_dmy(day: DateDay, month: DateMonth, year: DateYear): Date;
    static new_julian(julian_day: number): Date;

    // Members
    add_days(n_days: number): void;
    add_months(n_months: number): void;
    add_years(n_years: number): void;
    clamp(min_date: Date, max_date: Date): void;
    clear(n_dates: number): void;
    compare(rhs: Date): number;
    copy(): Date;
    days_between(date2: Date): number;
    free(): void;
    get_day(): DateDay;
    get_day_of_year(): number;
    get_iso8601_week_of_year(): number;
    get_julian(): number;
    get_monday_week_of_year(): number;
    get_month(): DateMonth;
    get_sunday_week_of_year(): number;
    get_weekday(): DateWeekday;
    get_year(): DateYear;
    is_first_of_month(): boolean;
    is_last_of_month(): boolean;
    order(date2: Date): void;
    set_day(day: DateDay): void;
    set_dmy(day: DateDay, month: DateMonth, y: DateYear): void;
    set_julian(julian_date: number): void;
    set_month(month: DateMonth): void;
    set_parse(str: string): void;
    set_time(time_: Time): void;
    set_time_t(timet: number): void;
    set_time_val(timeval: TimeVal): void;
    set_year(year: DateYear): void;
    subtract_days(n_days: number): void;
    subtract_months(n_months: number): void;
    subtract_years(n_years: number): void;
    to_struct_tm(tm: any): void;
    valid(): boolean;
    static get_days_in_month(month: DateMonth, year: DateYear): number;
    static get_monday_weeks_in_year(year: DateYear): number;
    static get_sunday_weeks_in_year(year: DateYear): number;
    static is_leap_year(year: DateYear): boolean;
    static strftime(s: string, slen: number, format: string, date: Date): number;
    static valid_day(day: DateDay): boolean;
    static valid_dmy(day: DateDay, month: DateMonth, year: DateYear): boolean;
    static valid_julian(julian_date: number): boolean;
    static valid_month(month: DateMonth): boolean;
    static valid_weekday(weekday: DateWeekday): boolean;
    static valid_year(year: DateYear): boolean;
}

export class DateTime {
    static $gtype: GObject.GType<DateTime>;

    constructor(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number);
    constructor(copy: DateTime);

    // Constructors
    static ["new"](
        tz: TimeZone,
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        seconds: number
    ): DateTime;
    static new_from_iso8601(text: string, default_tz?: TimeZone | null): DateTime;
    static new_from_timeval_local(tv: TimeVal): DateTime;
    static new_from_timeval_utc(tv: TimeVal): DateTime;
    static new_from_unix_local(t: number): DateTime;
    static new_from_unix_utc(t: number): DateTime;
    static new_local(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime;
    static new_now(tz: TimeZone): DateTime;
    static new_now_local(): DateTime;
    static new_now_utc(): DateTime;
    static new_utc(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime;

    // Members
    add(timespan: TimeSpan): DateTime | null;
    add_days(days: number): DateTime | null;
    add_full(
        years: number,
        months: number,
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    ): DateTime | null;
    add_hours(hours: number): DateTime | null;
    add_minutes(minutes: number): DateTime | null;
    add_months(months: number): DateTime | null;
    add_seconds(seconds: number): DateTime | null;
    add_weeks(weeks: number): DateTime | null;
    add_years(years: number): DateTime | null;
    difference(begin: DateTime): TimeSpan;
    format(format: string): string | null;
    format_iso8601(): string | null;
    get_day_of_month(): number;
    get_day_of_week(): number;
    get_day_of_year(): number;
    get_hour(): number;
    get_microsecond(): number;
    get_minute(): number;
    get_month(): number;
    get_second(): number;
    get_seconds(): number;
    get_timezone(): TimeZone;
    get_timezone_abbreviation(): string;
    get_utc_offset(): TimeSpan;
    get_week_numbering_year(): number;
    get_week_of_year(): number;
    get_year(): number;
    get_ymd(): [number | null, number | null, number | null];
    is_daylight_savings(): boolean;
    ref(): DateTime;
    to_local(): DateTime | null;
    to_timeval(tv: TimeVal): boolean;
    to_timezone(tz: TimeZone): DateTime | null;
    to_unix(): number;
    to_utc(): DateTime | null;
    unref(): void;
    static compare(dt1: any, dt2: any): number;
    static equal(dt1: any, dt2: any): boolean;
    static hash(datetime: any): number;
}

export class DebugKey {
    static $gtype: GObject.GType<DebugKey>;

    constructor(
        properties?: Partial<{
            key?: string;
            value?: number;
        }>
    );
    constructor(copy: DebugKey);

    // Fields
    key: string;
    value: number;
}

export class Dir {
    static $gtype: GObject.GType<Dir>;

    constructor(copy: Dir);

    // Members
    close(): void;
    read_name(): string;
    rewind(): void;
    static make_tmp(tmpl?: string | null): string;
}

export class Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Fields
    domain: Quark;
    code: number;
    message: string;

    // Constructors
    static new_literal(domain: Quark, code: number, message: string): Error;

    // Members
    copy(): Error;
    free(): void;
    matches(domain: Quark, code: number): boolean;
}

export class HashTable<A = string, B = any> {
    [key: string]: B;

    static $gtype: GObject.GType<HashTable>;

    constructor(copy: HashTable);

    // Members
    static add(hash_table: HashTable<any, any>, key?: any | null): boolean;
    static contains(hash_table: HashTable<any, any>, key?: any | null): boolean;
    static destroy(hash_table: HashTable<any, any>): void;
    static insert(hash_table: HashTable<any, any>, key?: any | null, value?: any | null): boolean;
    static lookup(hash_table: HashTable<any, any>, key?: any | null): any | null;
    static lookup_extended(hash_table: HashTable<any, any>, lookup_key?: any | null): [boolean, any | null, any | null];
    static remove(hash_table: HashTable<any, any>, key?: any | null): boolean;
    static remove_all(hash_table: HashTable<any, any>): void;
    static replace(hash_table: HashTable<any, any>, key?: any | null, value?: any | null): boolean;
    static size(hash_table: HashTable<any, any>): number;
    static steal(hash_table: HashTable<any, any>, key?: any | null): boolean;
    static steal_all(hash_table: HashTable<any, any>): void;
    static steal_extended(hash_table: HashTable<any, any>, lookup_key?: any | null): [boolean, any | null, any | null];
    static unref(hash_table: HashTable<any, any>): void;
}

export class HashTableIter {
    static $gtype: GObject.GType<HashTableIter>;

    constructor(
        properties?: Partial<{
            dummy1?: any;
            dummy2?: any;
            dummy3?: any;
            dummy4?: number;
            dummy5?: boolean;
            dummy6?: any;
        }>
    );
    constructor(copy: HashTableIter);

    // Fields
    dummy1: any;
    dummy2: any;
    dummy3: any;
    dummy4: number;
    dummy5: boolean;
    dummy6: any;

    // Members
    init(hash_table: HashTable<any, any>): void;
    next(): [boolean, any | null, any | null];
    remove(): void;
    replace(value?: any | null): void;
    steal(): void;
}

export class Hmac {
    static $gtype: GObject.GType<Hmac>;

    constructor(copy: Hmac);

    // Members
    get_digest(buffer: Uint8Array | string): void;
    get_string(): string;
    unref(): void;
    update(data: Uint8Array | string): void;
}

export class Hook {
    static $gtype: GObject.GType<Hook>;

    constructor(copy: Hook);

    // Fields
    data: any;
    next: Hook;
    prev: Hook;
    ref_count: number;
    hook_id: number;
    flags: number;
    func: any;

    // Members
    compare_ids(sibling: Hook): number;
    static destroy(hook_list: HookList, hook_id: number): boolean;
    static destroy_link(hook_list: HookList, hook: Hook): void;
    static free(hook_list: HookList, hook: Hook): void;
    static insert_before(hook_list: HookList, sibling: Hook | null, hook: Hook): void;
    static prepend(hook_list: HookList, hook: Hook): void;
    static unref(hook_list: HookList, hook: Hook): void;
}

export class HookList {
    static $gtype: GObject.GType<HookList>;

    constructor(copy: HookList);

    // Fields
    seq_id: number;
    hook_size: number;
    is_setup: number;
    hooks: Hook;
    dummy3: any;
    finalize_hook: HookFinalizeFunc;
    dummy: any[];

    // Members
    clear(): void;
    init(hook_size: number): void;
    invoke(may_recurse: boolean): void;
    invoke_check(may_recurse: boolean): void;
}

export class IOChannel {
    static $gtype: GObject.GType<IOChannel>;

    constructor(filename: string, mode: string);
    constructor(copy: IOChannel);

    // Fields
    ref_count: number;
    funcs: IOFuncs;
    encoding: string;
    line_term: string;
    line_term_len: number;
    buf_size: number;
    read_buf: String;
    encoded_read_buf: String;
    write_buf: String;
    partial_write_buf: number[];
    use_buffer: number;
    do_encode: number;
    close_on_unref: number;
    is_readable: number;
    is_writeable: number;
    is_seekable: number;
    reserved1: any;
    reserved2: any;

    // Constructors
    static new_file(filename: string, mode: string): IOChannel;
    static unix_new(fd: number): IOChannel;

    // Members
    close(): void;
    flush(): IOStatus;
    get_buffer_condition(): IOCondition;
    get_buffer_size(): number;
    get_buffered(): boolean;
    get_close_on_unref(): boolean;
    get_encoding(): string;
    get_flags(): IOFlags;
    get_line_term(length: number): string;
    init(): void;
    read(buf: string, count: number, bytes_read: number): IOError;
    read_chars(): [IOStatus, Uint8Array, number | null];
    read_line(): [IOStatus, string, number | null, number | null];
    read_line_string(buffer: String, terminator_pos?: number | null): IOStatus;
    read_to_end(): [IOStatus, Uint8Array];
    read_unichar(): [IOStatus, number];
    ref(): IOChannel;
    seek(offset: number, type: SeekType): IOError;
    seek_position(offset: number, type: SeekType): IOStatus;
    set_buffer_size(size: number): void;
    set_buffered(buffered: boolean): void;
    set_close_on_unref(do_close: boolean): void;
    set_encoding(encoding?: string | null): IOStatus;
    set_flags(flags: IOFlags): IOStatus;
    set_line_term(line_term: string | null, length: number): void;
    shutdown(flush: boolean): IOStatus;
    unix_get_fd(): number;
    unref(): void;
    write(buf: string, count: number, bytes_written: number): IOError;
    write_chars(buf: Uint8Array | string, count: number): [IOStatus, number];
    write_unichar(thechar: number): IOStatus;
    static error_from_errno(en: number): IOChannelError;
    static error_quark(): Quark;
}

export class IOFuncs {
    static $gtype: GObject.GType<IOFuncs>;

    constructor(copy: IOFuncs);
}

export class KeyFile {
    static $gtype: GObject.GType<KeyFile>;

    constructor();
    constructor(copy: KeyFile);

    // Constructors
    static ["new"](): KeyFile;

    // Members
    get_boolean(group_name: string, key: string): boolean;
    get_boolean_list(group_name: string, key: string): boolean[];
    get_comment(group_name: string | null, key: string): string;
    get_double(group_name: string, key: string): number;
    get_double_list(group_name: string, key: string): number[];
    get_groups(): [string[], number | null];
    get_int64(group_name: string, key: string): number;
    get_integer(group_name: string, key: string): number;
    get_integer_list(group_name: string, key: string): number[];
    get_keys(group_name: string): [string[], number | null];
    get_locale_for_key(group_name: string, key: string, locale?: string | null): string | null;
    get_locale_string(group_name: string, key: string, locale?: string | null): string;
    get_locale_string_list(group_name: string, key: string, locale?: string | null): string[];
    get_start_group(): string;
    get_string(group_name: string, key: string): string;
    get_string_list(group_name: string, key: string): string[];
    get_uint64(group_name: string, key: string): number;
    get_value(group_name: string, key: string): string;
    has_group(group_name: string): boolean;
    load_from_bytes(bytes: Bytes | Uint8Array, flags: KeyFileFlags): boolean;
    load_from_data(data: string, length: number, flags: KeyFileFlags): boolean;
    load_from_data_dirs(file: string, flags: KeyFileFlags): [boolean, string | null];
    load_from_dirs(file: string, search_dirs: string[], flags: KeyFileFlags): [boolean, string | null];
    load_from_file(file: string, flags: KeyFileFlags): boolean;
    remove_comment(group_name?: string | null, key?: string | null): boolean;
    remove_group(group_name: string): boolean;
    remove_key(group_name: string, key: string): boolean;
    save_to_file(filename: string): boolean;
    set_boolean(group_name: string, key: string, value: boolean): void;
    set_boolean_list(group_name: string, key: string, list: boolean[]): void;
    set_comment(group_name: string | null, key: string | null, comment: string): boolean;
    set_double(group_name: string, key: string, value: number): void;
    set_double_list(group_name: string, key: string, list: number[]): void;
    set_int64(group_name: string, key: string, value: number): void;
    set_integer(group_name: string, key: string, value: number): void;
    set_integer_list(group_name: string, key: string, list: number[]): void;
    set_list_separator(separator: number): void;
    set_locale_string(group_name: string, key: string, locale: string, string: string): void;
    set_locale_string_list(group_name: string, key: string, locale: string, list: string[]): void;
    set_string(group_name: string, key: string, string: string): void;
    set_string_list(group_name: string, key: string, list: string[]): void;
    set_uint64(group_name: string, key: string, value: number): void;
    set_value(group_name: string, key: string, value: string): void;
    to_data(): [string, number | null];
    unref(): void;
    static error_quark(): Quark;
}

export class List {
    static $gtype: GObject.GType<List>;

    constructor(copy: List);

    // Fields
    data: any;
    next: any[];
    prev: any[];
}

export class LogField {
    static $gtype: GObject.GType<LogField>;

    constructor(
        properties?: Partial<{
            key?: string;
            value?: any;
            length?: number;
        }>
    );
    constructor(copy: LogField);

    // Fields
    key: string;
    value: any;
    length: number;
}

export class MainContext {
    static $gtype: GObject.GType<MainContext>;

    constructor();
    constructor(copy: MainContext);

    // Constructors
    static ["new"](): MainContext;

    // Members
    acquire(): boolean;
    add_poll(fd: PollFD, priority: number): void;
    check(max_priority: number, fds: PollFD[]): boolean;
    dispatch(): void;
    find_source_by_funcs_user_data(funcs: SourceFuncs, user_data?: any | null): Source;
    find_source_by_id(source_id: number): Source;
    find_source_by_user_data(user_data?: any | null): Source;
    invoke_full(priority: number, _function: SourceFunc, notify?: DestroyNotify | null): void;
    is_owner(): boolean;
    iteration(may_block: boolean): boolean;
    pending(): boolean;
    pop_thread_default(): void;
    prepare(): [boolean, number | null];
    push_thread_default(): void;
    query(max_priority: number): [number, number, PollFD[]];
    ref(): MainContext;
    release(): void;
    remove_poll(fd: PollFD): void;
    unref(): void;
    wait(cond: Cond, mutex: Mutex): boolean;
    wakeup(): void;
    static default(): MainContext;
    static get_thread_default(): MainContext;
    static ref_thread_default(): MainContext;
}

export class MainLoop {
    static $gtype: GObject.GType<MainLoop>;

    constructor(context: MainContext | null, is_running: boolean);
    constructor(copy: MainLoop);

    // Constructors
    static ["new"](context: MainContext | null, is_running: boolean): MainLoop;

    // Members
    get_context(): MainContext;
    is_running(): boolean;
    quit(): void;
    ref(): MainLoop;
    run(): void;
    unref(): void;
}

export class MappedFile {
    static $gtype: GObject.GType<MappedFile>;

    constructor(filename: string, writable: boolean);
    constructor(copy: MappedFile);

    // Constructors
    static ["new"](filename: string, writable: boolean): MappedFile;
    static new_from_fd(fd: number, writable: boolean): MappedFile;

    // Members
    free(): void;
    get_bytes(): Bytes;
    get_contents(): string;
    get_length(): number;
    ref(): MappedFile;
    unref(): void;
}

export class MarkupParseContext {
    static $gtype: GObject.GType<MarkupParseContext>;

    constructor(parser: MarkupParser, flags: MarkupParseFlags, user_data?: any | null);
    constructor(copy: MarkupParseContext);

    // Constructors
    static ["new"](parser: MarkupParser, flags: MarkupParseFlags, user_data?: any | null): MarkupParseContext;

    // Members
    end_parse(): boolean;
    free(): void;
    get_element(): string;
    get_position(): [number | null, number | null];
    get_user_data(): any | null;
    parse(text: string, text_len: number): boolean;
    pop(): any | null;
    push(parser: MarkupParser, user_data?: any | null): void;
    ref(): MarkupParseContext;
    unref(): void;
}

export class MarkupParser {
    static $gtype: GObject.GType<MarkupParser>;

    constructor(copy: MarkupParser);
}

export class MatchInfo {
    static $gtype: GObject.GType<MatchInfo>;

    constructor(copy: MatchInfo);

    // Members
    expand_references(string_to_expand: string): string | null;
    fetch(match_num: number): string | null;
    fetch_all(): string[];
    fetch_named(name: string): string | null;
    fetch_named_pos(name: string): [boolean, number | null, number | null];
    fetch_pos(match_num: number): [boolean, number | null, number | null];
    free(): void;
    get_match_count(): number;
    get_regex(): Regex;
    get_string(): string;
    is_partial_match(): boolean;
    matches(): boolean;
    next(): boolean;
    ref(): MatchInfo;
    unref(): void;
}

export class MemVTable {
    static $gtype: GObject.GType<MemVTable>;

    constructor(copy: MemVTable);
}

export class Node {
    static $gtype: GObject.GType<Node>;

    constructor(copy: Node);

    // Fields
    data: any;
    next: Node;
    prev: Node;
    children: Node;

    // Members
    child_index(data?: any | null): number;
    child_position(child: Node): number;
    depth(): number;
    destroy(): void;
    is_ancestor(descendant: Node): boolean;
    max_height(): number;
    n_children(): number;
    n_nodes(flags: TraverseFlags): number;
    reverse_children(): void;
    unlink(): void;
}

export class Once {
    static $gtype: GObject.GType<Once>;

    constructor(copy: Once);

    // Fields
    status: OnceStatus;
    retval: any;

    // Members
    static init_enter(location: any): boolean;
    static init_leave(location: any, result: number): void;
}

export class OptionContext {
    static $gtype: GObject.GType<OptionContext>;

    constructor(copy: OptionContext);

    // Members
    add_group(group: OptionGroup): void;
    add_main_entries(entries: OptionEntry[], translation_domain?: string | null): void;
    free(): void;
    get_description(): string;
    get_help(main_help: boolean, group?: OptionGroup | null): string;
    get_help_enabled(): boolean;
    get_ignore_unknown_options(): boolean;
    get_main_group(): OptionGroup;
    get_strict_posix(): boolean;
    get_summary(): string;
    parse(argv?: string[]): [boolean, string[]];
    parse_strv(_arguments?: string[]): [boolean, string[]];
    set_description(description?: string | null): void;
    set_help_enabled(help_enabled: boolean): void;
    set_ignore_unknown_options(ignore_unknown: boolean): void;
    set_main_group(group: OptionGroup): void;
    set_strict_posix(strict_posix: boolean): void;
    set_summary(summary?: string | null): void;
    set_translate_func(func?: TranslateFunc | null, destroy_notify?: DestroyNotify | null): void;
    set_translation_domain(domain: string): void;
}

export class OptionEntry {
    static $gtype: GObject.GType<OptionEntry>;

    constructor(copy: OptionEntry);

    // Fields
    long_name: string;
    short_name: number;
    flags: number;
    arg: OptionArg;
    arg_data: any;
    description: string;
    arg_description: string;
}

export class OptionGroup {
    static $gtype: GObject.GType<OptionGroup>;

    constructor(
        name: string,
        description: string,
        help_description: string,
        user_data?: any | null,
        destroy?: DestroyNotify | null
    );
    constructor(copy: OptionGroup);

    // Constructors
    static ["new"](
        name: string,
        description: string,
        help_description: string,
        user_data?: any | null,
        destroy?: DestroyNotify | null
    ): OptionGroup;

    // Members
    add_entries(entries: OptionEntry[]): void;
    free(): void;
    ref(): OptionGroup;
    set_translate_func(func?: TranslateFunc | null, destroy_notify?: DestroyNotify | null): void;
    set_translation_domain(domain: string): void;
    unref(): void;
}

export class PatternSpec {
    static $gtype: GObject.GType<PatternSpec>;

    constructor(copy: PatternSpec);

    // Members
    equal(pspec2: PatternSpec): boolean;
    free(): void;
}

export class PollFD {
    static $gtype: GObject.GType<PollFD>;

    constructor(
        properties?: Partial<{
            fd?: number;
            events?: number;
            revents?: number;
        }>
    );
    constructor(copy: PollFD);

    // Fields
    fd: number;
    events: number;
    revents: number;
}

export class Private {
    static $gtype: GObject.GType<Private>;

    constructor(copy: Private);

    // Fields
    p: any;
    notify: DestroyNotify;
    future: any[];

    // Members
    get(): any | null;
    replace(value?: any | null): void;
    set(value?: any | null): void;
}

export class PtrArray {
    static $gtype: GObject.GType<PtrArray>;

    constructor(
        properties?: Partial<{
            pdata?: any;
            len?: number;
        }>
    );
    constructor(copy: PtrArray);

    // Fields
    pdata: any;
    len: number;
}

export class Queue {
    static $gtype: GObject.GType<Queue>;

    constructor(copy: Queue);

    // Fields
    head: any[];
    tail: any[];
    length: number;

    // Members
    clear(): void;
    clear_full(free_func?: DestroyNotify | null): void;
    free(): void;
    free_full(): void;
    get_length(): number;
    index(data?: any | null): number;
    init(): void;
    is_empty(): boolean;
    peek_head(): any | null;
    peek_nth(n: number): any | null;
    peek_tail(): any | null;
    pop_head(): any | null;
    pop_nth(n: number): any | null;
    pop_tail(): any | null;
    push_head(data?: any | null): void;
    push_nth(data: any | null, n: number): void;
    push_tail(data?: any | null): void;
    remove(data?: any | null): boolean;
    remove_all(data?: any | null): number;
    reverse(): void;
}

export class RWLock {
    static $gtype: GObject.GType<RWLock>;

    constructor(copy: RWLock);

    // Fields
    p: any;
    i: number[];

    // Members
    clear(): void;
    init(): void;
    reader_lock(): void;
    reader_trylock(): boolean;
    reader_unlock(): void;
    writer_lock(): void;
    writer_trylock(): boolean;
    writer_unlock(): void;
}

export class Rand {
    static $gtype: GObject.GType<Rand>;

    constructor(copy: Rand);

    // Members
    double(): number;
    double_range(begin: number, end: number): number;
    free(): void;
    int(): number;
    int_range(begin: number, end: number): number;
    set_seed(seed: number): void;
    set_seed_array(seed: number, seed_length: number): void;
}

export class RecMutex {
    static $gtype: GObject.GType<RecMutex>;

    constructor(copy: RecMutex);

    // Fields
    p: any;
    i: number[];

    // Members
    clear(): void;
    init(): void;
    lock(): void;
    trylock(): boolean;
    unlock(): void;
}

export class Regex {
    static $gtype: GObject.GType<Regex>;

    constructor(pattern: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags);
    constructor(copy: Regex);

    // Constructors
    static ["new"](pattern: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): Regex;

    // Members
    get_capture_count(): number;
    get_compile_flags(): RegexCompileFlags;
    get_has_cr_or_lf(): boolean;
    get_match_flags(): RegexMatchFlags;
    get_max_backref(): number;
    get_max_lookbehind(): number;
    get_pattern(): string;
    get_string_number(name: string): number;
    match(string: string, match_options: RegexMatchFlags): [boolean, MatchInfo | null];
    match_all(string: string, match_options: RegexMatchFlags): [boolean, MatchInfo | null];
    match_all_full(
        string: string[],
        start_position: number,
        match_options: RegexMatchFlags
    ): [boolean, MatchInfo | null];
    match_full(string: string[], start_position: number, match_options: RegexMatchFlags): [boolean, MatchInfo | null];
    ref(): Regex;
    replace(string: string[], start_position: number, replacement: string, match_options: RegexMatchFlags): string;
    replace_literal(
        string: string[],
        start_position: number,
        replacement: string,
        match_options: RegexMatchFlags
    ): string;
    split(string: string, match_options: RegexMatchFlags): string[];
    split_full(string: string[], start_position: number, match_options: RegexMatchFlags, max_tokens: number): string[];
    unref(): void;
    static check_replacement(replacement: string): [boolean, boolean | null];
    static error_quark(): Quark;
    static escape_nul(string: string, length: number): string;
    static escape_string(string: string[]): string;
    static match_simple(
        pattern: string,
        string: string,
        compile_options: RegexCompileFlags,
        match_options: RegexMatchFlags
    ): boolean;
    static split_simple(
        pattern: string,
        string: string,
        compile_options: RegexCompileFlags,
        match_options: RegexMatchFlags
    ): string[];
}

export class SList {
    static $gtype: GObject.GType<SList>;

    constructor(copy: SList);

    // Fields
    data: any;
    next: any[];
}

export class Scanner {
    static $gtype: GObject.GType<Scanner>;

    constructor(copy: Scanner);

    // Fields
    user_data: any;
    max_parse_errors: number;
    parse_errors: number;
    input_name: string;
    qdata: Data;
    config: ScannerConfig;
    token: TokenType;
    value: TokenValue;
    line: number;
    position: number;
    next_token: TokenType;
    next_value: TokenValue;
    next_line: number;
    next_position: number;
    symbol_table: HashTable<any, any>;
    input_fd: number;
    text: string;
    text_end: string;
    buffer: string;
    scope_id: number;
    msg_handler: ScannerMsgFunc;

    // Members
    cur_line(): number;
    cur_position(): number;
    cur_token(): TokenType;
    destroy(): void;
    eof(): boolean;
    get_next_token(): TokenType;
    input_file(input_fd: number): void;
    input_text(text: string, text_len: number): void;
    lookup_symbol(symbol: string): any | null;
    peek_next_token(): TokenType;
    scope_add_symbol(scope_id: number, symbol: string, value?: any | null): void;
    scope_lookup_symbol(scope_id: number, symbol: string): any | null;
    scope_remove_symbol(scope_id: number, symbol: string): void;
    set_scope(scope_id: number): number;
    sync_file_offset(): void;
    unexp_token(
        expected_token: TokenType,
        identifier_spec: string,
        symbol_spec: string,
        symbol_name: string,
        message: string,
        is_error: number
    ): void;
}

export class ScannerConfig {
    static $gtype: GObject.GType<ScannerConfig>;

    constructor(
        properties?: Partial<{
            cset_skip_characters?: string;
            cset_identifier_first?: string;
            cset_identifier_nth?: string;
            cpair_comment_single?: string;
            case_sensitive?: number;
            skip_comment_multi?: number;
            skip_comment_single?: number;
            scan_comment_multi?: number;
            scan_identifier?: number;
            scan_identifier_1char?: number;
            scan_identifier_NULL?: number;
            scan_symbols?: number;
            scan_binary?: number;
            scan_octal?: number;
            scan_float?: number;
            scan_hex?: number;
            scan_hex_dollar?: number;
            scan_string_sq?: number;
            scan_string_dq?: number;
            numbers_2_int?: number;
            int_2_float?: number;
            identifier_2_string?: number;
            char_2_token?: number;
            symbol_2_token?: number;
            scope_0_fallback?: number;
            store_int64?: number;
            padding_dummy?: number;
        }>
    );
    constructor(copy: ScannerConfig);

    // Fields
    cset_skip_characters: string;
    cset_identifier_first: string;
    cset_identifier_nth: string;
    cpair_comment_single: string;
    case_sensitive: number;
    skip_comment_multi: number;
    skip_comment_single: number;
    scan_comment_multi: number;
    scan_identifier: number;
    scan_identifier_1char: number;
    scan_identifier_NULL: number;
    scan_symbols: number;
    scan_binary: number;
    scan_octal: number;
    scan_float: number;
    scan_hex: number;
    scan_hex_dollar: number;
    scan_string_sq: number;
    scan_string_dq: number;
    numbers_2_int: number;
    int_2_float: number;
    identifier_2_string: number;
    char_2_token: number;
    symbol_2_token: number;
    scope_0_fallback: number;
    store_int64: number;
    padding_dummy: number;
}

export class Sequence {
    static $gtype: GObject.GType<Sequence>;

    constructor(copy: Sequence);

    // Members
    append(data?: any | null): SequenceIter;
    free(): void;
    get_begin_iter(): SequenceIter;
    get_end_iter(): SequenceIter;
    get_iter_at_pos(pos: number): SequenceIter;
    get_length(): number;
    is_empty(): boolean;
    prepend(data?: any | null): SequenceIter;
    static get(iter: SequenceIter): any | null;
    static insert_before(iter: SequenceIter, data?: any | null): SequenceIter;
    static move(src: SequenceIter, dest: SequenceIter): void;
    static move_range(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void;
    static range_get_midpoint(begin: SequenceIter, end: SequenceIter): SequenceIter;
    static remove(iter: SequenceIter): void;
    static remove_range(begin: SequenceIter, end: SequenceIter): void;
    static set(iter: SequenceIter, data?: any | null): void;
    static swap(a: SequenceIter, b: SequenceIter): void;
}

export class SequenceIter {
    static $gtype: GObject.GType<SequenceIter>;

    constructor(copy: SequenceIter);

    // Members
    compare(b: SequenceIter): number;
    get_position(): number;
    get_sequence(): Sequence;
    is_begin(): boolean;
    is_end(): boolean;
    move(delta: number): SequenceIter;
    next(): SequenceIter;
    prev(): SequenceIter;
}

export class Source {
    static $gtype: GObject.GType<Source>;

    constructor(source_funcs: SourceFuncs, struct_size: number);
    constructor(copy: Source);

    // Fields
    callback_data: any;
    callback_funcs: SourceCallbackFuncs;
    source_funcs: SourceFuncs;
    ref_count: number;
    context: MainContext;
    priority: number;
    flags: number;
    source_id: number;
    poll_fds: any[];
    prev: Source;
    next: Source;
    name: string;
    priv: SourcePrivate;

    // Constructors
    static ["new"](source_funcs: SourceFuncs, struct_size: number): Source;

    // Members
    add_child_source(child_source: Source): void;
    add_poll(fd: PollFD): void;
    add_unix_fd(fd: number, events: IOCondition): any;
    attach(context?: MainContext | null): number;
    destroy(): void;
    get_can_recurse(): boolean;
    get_context(): MainContext | null;
    get_current_time(timeval: TimeVal): void;
    get_id(): number;
    get_name(): string;
    get_priority(): number;
    get_ready_time(): number;
    get_time(): number;
    is_destroyed(): boolean;
    modify_unix_fd(tag: any, new_events: IOCondition): void;
    query_unix_fd(tag: any): IOCondition;
    ref(): Source;
    remove_child_source(child_source: Source): void;
    remove_poll(fd: PollFD): void;
    remove_unix_fd(tag: any): void;
    set_callback(func: SourceFunc, notify?: DestroyNotify | null): void;
    set_callback_indirect(callback_data: any | null, callback_funcs: SourceCallbackFuncs): void;
    set_can_recurse(can_recurse: boolean): void;
    set_funcs(funcs: SourceFuncs): void;
    set_name(name: string): void;
    set_priority(priority: number): void;
    set_ready_time(ready_time: number): void;
    unref(): void;
    static remove(tag: number): boolean;
    static remove_by_funcs_user_data(funcs: SourceFuncs, user_data?: any | null): boolean;
    static remove_by_user_data(user_data?: any | null): boolean;
    static set_name_by_id(tag: number, name: string): void;
}

export class SourceCallbackFuncs {
    static $gtype: GObject.GType<SourceCallbackFuncs>;

    constructor(copy: SourceCallbackFuncs);
}

export class SourceFuncs {
    static $gtype: GObject.GType<SourceFuncs>;

    constructor(copy: SourceFuncs);

    // Fields
    closure_callback: SourceFunc;
    closure_marshal: SourceDummyMarshal;
}

export class SourcePrivate {
    static $gtype: GObject.GType<SourcePrivate>;

    constructor(copy: SourcePrivate);
}

export class StatBuf {
    static $gtype: GObject.GType<StatBuf>;

    constructor(copy: StatBuf);
}

export class String {
    static $gtype: GObject.GType<String>;

    constructor(
        properties?: Partial<{
            str?: string;
            len?: number;
            allocated_len?: number;
        }>
    );
    constructor(copy: String);

    // Fields
    str: string;
    len: number;
    allocated_len: number;

    // Members
    append(val: string): String;
    append_c(c: number): String;
    append_len(val: string, len: number): String;
    append_unichar(wc: number): String;
    append_uri_escaped(unescaped: string, reserved_chars_allowed: string, allow_utf8: boolean): String;
    ascii_down(): String;
    ascii_up(): String;
    assign(rval: string): String;
    down(): String;
    equal(v2: String): boolean;
    erase(pos: number, len: number): String;
    free(free_segment: boolean): string | null;
    free_to_bytes(): Bytes;
    hash(): number;
    insert(pos: number, val: string): String;
    insert_c(pos: number, c: number): String;
    insert_len(pos: number, val: string, len: number): String;
    insert_unichar(pos: number, wc: number): String;
    overwrite(pos: number, val: string): String;
    overwrite_len(pos: number, val: string, len: number): String;
    prepend(val: string): String;
    prepend_c(c: number): String;
    prepend_len(val: string, len: number): String;
    prepend_unichar(wc: number): String;
    set_size(len: number): String;
    truncate(len: number): String;
    up(): String;
}

export class StringChunk {
    static $gtype: GObject.GType<StringChunk>;

    constructor(copy: StringChunk);

    // Members
    clear(): void;
    free(): void;
    insert(string: string): string;
    insert_const(string: string): string;
    insert_len(string: string, len: number): string;
}

export class TestCase {
    static $gtype: GObject.GType<TestCase>;

    constructor(copy: TestCase);
}

export class TestConfig {
    static $gtype: GObject.GType<TestConfig>;

    constructor(
        properties?: Partial<{
            test_initialized?: boolean;
            test_quick?: boolean;
            test_perf?: boolean;
            test_verbose?: boolean;
            test_quiet?: boolean;
            test_undefined?: boolean;
        }>
    );
    constructor(copy: TestConfig);

    // Fields
    test_initialized: boolean;
    test_quick: boolean;
    test_perf: boolean;
    test_verbose: boolean;
    test_quiet: boolean;
    test_undefined: boolean;
}

export class TestLogBuffer {
    static $gtype: GObject.GType<TestLogBuffer>;

    constructor(copy: TestLogBuffer);

    // Fields
    data: String;
    msgs: any[];

    // Members
    free(): void;
    push(n_bytes: number, bytes: number): void;
}

export class TestLogMsg {
    static $gtype: GObject.GType<TestLogMsg>;

    constructor(copy: TestLogMsg);

    // Fields
    log_type: TestLogType;
    n_strings: number;
    strings: string;
    n_nums: number;

    // Members
    free(): void;
}

export class TestSuite {
    static $gtype: GObject.GType<TestSuite>;

    constructor(copy: TestSuite);

    // Members
    add(test_case: TestCase): void;
    add_suite(nestedsuite: TestSuite): void;
}

export class Thread {
    static $gtype: GObject.GType<Thread>;

    constructor(name: string | null, func: ThreadFunc);
    constructor(copy: Thread);

    // Constructors
    static ["new"](name: string | null, func: ThreadFunc): Thread;
    static try_new(name: string | null, func: ThreadFunc): Thread;

    // Members
    join(): any | null;
    ref(): Thread;
    unref(): void;
    static error_quark(): Quark;
    static exit(retval?: any | null): void;
    static self(): Thread;
    static yield(): void;
}

export class ThreadPool {
    static $gtype: GObject.GType<ThreadPool>;

    constructor(copy: ThreadPool);

    // Fields
    func: Func;
    user_data: any;
    exclusive: boolean;

    // Members
    free(immediate: boolean, wait_: boolean): void;
    get_max_threads(): number;
    get_num_threads(): number;
    move_to_front(data?: any | null): boolean;
    push(data?: any | null): boolean;
    set_max_threads(max_threads: number): boolean;
    unprocessed(): number;
    static get_max_idle_time(): number;
    static get_max_unused_threads(): number;
    static get_num_unused_threads(): number;
    static set_max_idle_time(interval: number): void;
    static set_max_unused_threads(max_threads: number): void;
    static stop_unused_threads(): void;
}

export class TimeVal {
    static $gtype: GObject.GType<TimeVal>;

    constructor(
        properties?: Partial<{
            tv_sec?: number;
            tv_usec?: number;
        }>
    );
    constructor(copy: TimeVal);

    // Fields
    tv_sec: number;
    tv_usec: number;

    // Members
    add(microseconds: number): void;
    to_iso8601(): string | null;
    static from_iso8601(iso_date: string): [boolean, TimeVal];
}

export class TimeZone {
    static $gtype: GObject.GType<TimeZone>;

    constructor(identifier?: string | null);
    constructor(copy: TimeZone);

    // Constructors
    static ["new"](identifier?: string | null): TimeZone;
    static new_local(): TimeZone;
    static new_offset(seconds: number): TimeZone;
    static new_utc(): TimeZone;

    // Members
    adjust_time(type: TimeType, time_: number): number;
    find_interval(type: TimeType, time_: number): number;
    get_abbreviation(interval: number): string;
    get_identifier(): string;
    get_offset(interval: number): number;
    is_dst(interval: number): boolean;
    ref(): TimeZone;
    unref(): void;
}

export class Timer {
    static $gtype: GObject.GType<Timer>;

    constructor(copy: Timer);

    // Members
    ["continue"](): void;
    destroy(): void;
    elapsed(microseconds: number): number;
    is_active(): boolean;
    reset(): void;
    start(): void;
    stop(): void;
}

export class TrashStack {
    static $gtype: GObject.GType<TrashStack>;

    constructor(copy: TrashStack);

    // Fields
    next: TrashStack;

    // Members
    static height(stack_p: TrashStack): number;
    static peek(stack_p: TrashStack): any | null;
    static pop(stack_p: TrashStack): any | null;
    static push(stack_p: TrashStack, data_p: any): void;
}

export class Tree {
    static $gtype: GObject.GType<Tree>;

    constructor(copy: Tree);

    // Members
    destroy(): void;
    height(): number;
    insert(key?: any | null, value?: any | null): void;
    lookup(key?: any | null): any | null;
    lookup_extended(lookup_key?: any | null): [boolean, any | null, any | null];
    nnodes(): number;
    remove(key?: any | null): boolean;
    replace(key?: any | null, value?: any | null): void;
    steal(key?: any | null): boolean;
    unref(): void;
}

export class Uri {
    static $gtype: GObject.GType<Uri>;

    constructor(copy: Uri);

    // Members
    get_auth_params(): string | null;
    get_flags(): UriFlags;
    get_fragment(): string | null;
    get_host(): string;
    get_password(): string | null;
    get_path(): string;
    get_port(): number;
    get_query(): string | null;
    get_scheme(): string;
    get_user(): string | null;
    get_userinfo(): string | null;
    parse_relative(uri_ref: string, flags: UriFlags): Uri;
    to_string(): string;
    to_string_partial(flags: UriHideFlags): string;
    static build(
        flags: UriFlags,
        scheme: string,
        userinfo: string | null,
        host: string | null,
        port: number,
        path: string,
        query?: string | null,
        fragment?: string | null
    ): Uri;
    static build_with_user(
        flags: UriFlags,
        scheme: string,
        user: string | null,
        password: string | null,
        auth_params: string | null,
        host: string | null,
        port: number,
        path: string,
        query?: string | null,
        fragment?: string | null
    ): Uri;
    static error_quark(): Quark;
    static escape_bytes(unescaped: Uint8Array | string, reserved_chars_allowed?: string | null): string;
    static escape_string(unescaped: string, reserved_chars_allowed: string | null, allow_utf8: boolean): string;
    static is_valid(uri_string: string, flags: UriFlags): boolean;
    static join(
        flags: UriFlags,
        scheme: string | null,
        userinfo: string | null,
        host: string | null,
        port: number,
        path: string,
        query?: string | null,
        fragment?: string | null
    ): string;
    static join_with_user(
        flags: UriFlags,
        scheme: string | null,
        user: string | null,
        password: string | null,
        auth_params: string | null,
        host: string | null,
        port: number,
        path: string,
        query?: string | null,
        fragment?: string | null
    ): string;
    static list_extract_uris(uri_list: string): string[];
    static parse(uri_string: string, flags: UriFlags): Uri;
    static parse_params(
        params: string,
        length: number,
        separators: string,
        flags: UriParamsFlags
    ): HashTable<string, string>;
    static parse_scheme(uri: string): string | null;
    static peek_scheme(uri: string): string | null;
    static resolve_relative(base_uri_string: string | null, uri_ref: string, flags: UriFlags): string;
    static split(
        uri_ref: string,
        flags: UriFlags
    ): [
        boolean,
        string | null,
        string | null,
        string | null,
        number | null,
        string | null,
        string | null,
        string | null
    ];
    static split_network(uri_string: string, flags: UriFlags): [boolean, string | null, string | null, number | null];
    static split_with_user(
        uri_ref: string,
        flags: UriFlags
    ): [
        boolean,
        string | null,
        string | null,
        string | null,
        string | null,
        string | null,
        number | null,
        string | null,
        string | null,
        string | null
    ];
    static unescape_bytes(escaped_string: string, length: number, illegal_characters?: string | null): Bytes;
    static unescape_segment(
        escaped_string?: string | null,
        escaped_string_end?: string | null,
        illegal_characters?: string | null
    ): string;
    static unescape_string(escaped_string: string, illegal_characters?: string | null): string;
}

export class UriParamsIter {
    static $gtype: GObject.GType<UriParamsIter>;

    constructor(copy: UriParamsIter);

    // Fields
    dummy0: number;
    dummy1: any;
    dummy2: any;
    dummy3: Uint8Array;

    // Members
    init(params: string, length: number, separators: string, flags: UriParamsFlags): void;
    next(): [boolean, string | null, string | null];
}

export class DoubleIEEE754 {
    static $gtype: GObject.GType<DoubleIEEE754>;

    constructor(
        properties?: Partial<{
            v_double?: number;
        }>
    );
    constructor(copy: DoubleIEEE754);

    // Fields
    v_double: number;
}

export class FloatIEEE754 {
    static $gtype: GObject.GType<FloatIEEE754>;

    constructor(
        properties?: Partial<{
            v_float?: number;
        }>
    );
    constructor(copy: FloatIEEE754);

    // Fields
    v_float: number;
}

export class Mutex {
    static $gtype: GObject.GType<Mutex>;

    constructor(copy: Mutex);

    // Fields
    p: any;
    i: number[];

    // Members
    clear(): void;
    init(): void;
    lock(): void;
    trylock(): boolean;
    unlock(): void;
}

export class TokenValue {
    static $gtype: GObject.GType<TokenValue>;

    constructor(
        properties?: Partial<{
            v_symbol?: any;
            v_identifier?: string;
            v_binary?: number;
            v_octal?: number;
            v_int?: number;
            v_int64?: number;
            v_float?: number;
            v_hex?: number;
            v_string?: string;
            v_comment?: string;
            v_char?: number;
            v_error?: number;
        }>
    );
    constructor(copy: TokenValue);

    // Fields
    v_symbol: any;
    v_identifier: string;
    v_binary: number;
    v_octal: number;
    v_int: number;
    v_int64: number;
    v_float: number;
    v_hex: number;
    v_string: string;
    v_comment: string;
    v_char: number;
    v_error: number;
}
export type DateDay = number;
export type DateYear = number;
export type MainContextPusher = void;
export type MutexLocker = void;
export type Pid = number;
export type Quark = number;
export type RWLockReaderLocker = void;
export type RWLockWriterLocker = void;
export type RecMutexLocker = void;
export type RefString = number;
export type Strv = string;
export type Time = number;
export type TimeSpan = number;
export type Type = number;
export function log_structured(logDomain: any, logLevel: any, stringFields: any): any;
export function strstrip(str: string): string;

// Variant parsing inspired by https://jamie.build/ slightly infamous JSON-in-TypeScript parsing.

type CreateIndexType<Key extends string, Value extends any> = Key extends `s` | `o` | `g`
    ? { [key: string]: Value }
    : Key extends `n` | `q` | `t` | `d` | `u` | `i` | `x` | `y`
    ? { [key: number]: Value }
    : never;

type VariantTypeError<T extends string> = { error: true } & T;

/**
 * Handles the {kv} of a{kv} where k is a basic type and v is any possible variant type string.
 */
type $ParseDeepVariantDict<State extends string, Memo extends Record<string, any> = {}> = string extends State
    ? VariantTypeError<"$ParseDeepVariantDict: 'string' is not a supported type.">
    : // Hitting the first '}' indicates the dictionary type is complete
    State extends `}${infer State}`
    ? [Memo, State]
    : // This separates the key (basic type) from the rest of the remaining expression.
    State extends `${infer Key}${""}${infer State}`
    ? $ParseDeepVariantValue<State> extends [infer Value, `${infer State}`]
        ? State extends `}${infer State}`
            ? [CreateIndexType<Key, Value>, State]
            : VariantTypeError<`$ParseDeepVariantDict encountered an invalid variant string: ${State} (1)`>
        : VariantTypeError<`$ParseDeepVariantValue returned unexpected value for: ${State}`>
    : VariantTypeError<`$ParseDeepVariantDict encountered an invalid variant string: ${State} (2)`>;

/**
 * Handles parsing values within a tuple (e.g. (vvv)) where v is any possible variant type string.
 */
type $ParseDeepVariantArray<State extends string, Memo extends any[] = []> = string extends State
    ? VariantTypeError<"$ParseDeepVariantArray: 'string' is not a supported type.">
    : State extends `)${infer State}`
    ? [Memo, State]
    : $ParseDeepVariantValue<State> extends [infer Value, `${infer State}`]
    ? State extends `${infer NextValue})${infer NextState}`
        ? $ParseDeepVariantArray<State, [...Memo, Value]>
        : State extends `)${infer State}`
        ? [[...Memo, Value], State]
        : VariantTypeError<`1: $ParseDeepVariantArray encountered an invalid variant string: ${State}`>
    : VariantTypeError<`2: $ParseDeepVariantValue returned unexpected value for: ${State}`>;

/**
 * Handles parsing {kv} without an 'a' prefix (key-value pair) where k is a basic type
 * and v is any possible variant type string.
 */
type $ParseDeepVariantKeyValue<State extends string, Memo extends any[] = []> = string extends State
    ? VariantTypeError<"$ParseDeepVariantKeyValue: 'string' is not a supported type.">
    : State extends `}${infer State}`
    ? [Memo, State]
    : State extends `${infer Key}${""}${infer State}`
    ? $ParseDeepVariantValue<State> extends [infer Value, `${infer State}`]
        ? State extends `}${infer State}`
            ? [[...Memo, Key, Value], State]
            : VariantTypeError<`$ParseDeepVariantKeyValue encountered an invalid variant string: ${State} (1)`>
        : VariantTypeError<`$ParseDeepVariantKeyValue returned unexpected value for: ${State}`>
    : VariantTypeError<`$ParseDeepVariantKeyValue encountered an invalid variant string: ${State} (2)`>;

/**
 * Handles parsing any variant 'value' or base unit.
 *
 * - ay - Array of bytes (Uint8Array)
 * - a* - Array of type *
 * - a{k*} - Dictionary
 * - {k*} - KeyValue
 * - (**) - tuple
 * - s | o | g - string types
 * - n | q | t | d | u | i | x | y - number types
 * - b - boolean type
 * - v - unknown Variant type
 * - h | ? - unknown types
 */
type $ParseDeepVariantValue<State extends string> = string extends State
    ? unknown
    : State extends `${`s` | `o` | `g`}${infer State}`
    ? [string, State]
    : State extends `${`n` | `q` | `t` | `d` | `u` | `i` | `x` | `y`}${infer State}`
    ? [number, State]
    : State extends `b${infer State}`
    ? [boolean, State]
    : State extends `v${infer State}`
    ? [Variant, State]
    : State extends `${"h" | "?"}${infer State}`
    ? [unknown, State]
    : State extends `(${infer State}`
    ? $ParseDeepVariantArray<State>
    : State extends `a{${infer State}`
    ? $ParseDeepVariantDict<State>
    : State extends `{${infer State}`
    ? $ParseDeepVariantKeyValue<State>
    : State extends `ay${infer State}`
    ? [Uint8Array, State]
    : State extends `a${infer State}`
    ? $ParseDeepVariantValue<State> extends [infer Value, `${infer State}`]
        ? [Value[], State]
        : VariantTypeError<`$ParseDeepVariantValue encountered an invalid variant string: ${State} (1)`>
    : VariantTypeError<`$ParseDeepVariantValue encountered an invalid variant string: ${State} (2)`>;

type $ParseDeepVariant<T extends string> = $ParseDeepVariantValue<T> extends infer Result
    ? Result extends [infer Value, string]
        ? Value
        : Result extends VariantTypeError<any>
        ? Result
        : VariantTypeError<"$ParseDeepVariantValue returned unexpected Result">
    : VariantTypeError<"$ParseDeepVariantValue returned uninferrable Result">;

type $ParseRecursiveVariantDict<State extends string, Memo extends Record<string, any> = {}> = string extends State
    ? VariantTypeError<"$ParseRecursiveVariantDict: 'string' is not a supported type.">
    : State extends `}${infer State}`
    ? [Memo, State]
    : State extends `${infer Key}${""}${infer State}`
    ? $ParseRecursiveVariantValue<State> extends [infer Value, `${infer State}`]
        ? State extends `}${infer State}`
            ? [CreateIndexType<Key, Value>, State]
            : VariantTypeError<`$ParseRecursiveVariantDict encountered an invalid variant string: ${State} (1)`>
        : VariantTypeError<`$ParseRecursiveVariantValue returned unexpected value for: ${State}`>
    : VariantTypeError<`$ParseRecursiveVariantDict encountered an invalid variant string: ${State} (2)`>;

type $ParseRecursiveVariantArray<State extends string, Memo extends any[] = []> = string extends State
    ? VariantTypeError<"$ParseRecursiveVariantArray: 'string' is not a supported type.">
    : State extends `)${infer State}`
    ? [Memo, State]
    : $ParseRecursiveVariantValue<State> extends [infer Value, `${infer State}`]
    ? State extends `${infer NextValue})${infer NextState}`
        ? $ParseRecursiveVariantArray<State, [...Memo, Value]>
        : State extends `)${infer State}`
        ? [[...Memo, Value], State]
        : VariantTypeError<`$ParseRecursiveVariantArray encountered an invalid variant string: ${State} (1)`>
    : VariantTypeError<`$ParseRecursiveVariantValue returned unexpected value for: ${State} (2)`>;

type $ParseRecursiveVariantKeyValue<State extends string, Memo extends any[] = []> = string extends State
    ? VariantTypeError<"$ParseRecursiveVariantKeyValue: 'string' is not a supported type.">
    : State extends `}${infer State}`
    ? [Memo, State]
    : State extends `${infer Key}${""}${infer State}`
    ? $ParseRecursiveVariantValue<State> extends [infer Value, `${infer State}`]
        ? State extends `}${infer State}`
            ? [[...Memo, Key, Value], State]
            : VariantTypeError<`$ParseRecursiveVariantKeyValue encountered an invalid variant string: ${State} (1)`>
        : VariantTypeError<`$ParseRecursiveVariantKeyValue returned unexpected value for: ${State}`>
    : VariantTypeError<`$ParseRecursiveVariantKeyValue encountered an invalid variant string: ${State} (2)`>;

type $ParseRecursiveVariantValue<State extends string> = string extends State
    ? unknown
    : State extends `${`s` | `o` | `g`}${infer State}`
    ? [string, State]
    : State extends `${`n` | `q` | `t` | `d` | `u` | `i` | `x` | `y`}${infer State}`
    ? [number, State]
    : State extends `b${infer State}`
    ? [boolean, State]
    : State extends `v${infer State}`
    ? [unknown, State]
    : State extends `${"h" | "?"}${infer State}`
    ? [unknown, State]
    : State extends `(${infer State}`
    ? $ParseRecursiveVariantArray<State>
    : State extends `a{${infer State}`
    ? $ParseRecursiveVariantDict<State>
    : State extends `{${infer State}`
    ? $ParseRecursiveVariantKeyValue<State>
    : State extends `ay${infer State}`
    ? [Uint8Array, State]
    : State extends `a${infer State}`
    ? $ParseRecursiveVariantValue<State> extends [infer Value, `${infer State}`]
        ? [Value[], State]
        : VariantTypeError<`$ParseRecursiveVariantValue encountered an invalid variant string: ${State} (1)`>
    : VariantTypeError<`$ParseRecursiveVariantValue encountered an invalid variant string: ${State} (2)`>;

type $ParseRecursiveVariant<T extends string> = $ParseRecursiveVariantValue<T> extends infer Result
    ? Result extends [infer Value, string]
        ? Value
        : Result extends VariantTypeError<any>
        ? Result
        : never
    : never;

type $ParseVariantDict<State extends string, Memo extends Record<string, any> = {}> = string extends State
    ? VariantTypeError<"$ParseVariantDict: 'string' is not a supported type.">
    : State extends `}${infer State}`
    ? [Memo, State]
    : State extends `${infer Key}${""}${infer State}`
    ? $ParseVariantValue<State> extends [infer Value, `${infer State}`]
        ? State extends `}${infer State}`
            ? [CreateIndexType<Key, Variant<Value extends string ? Value : any>>, State]
            : VariantTypeError<`$ParseVariantDict encountered an invalid variant string: ${State} (1)`>
        : VariantTypeError<`$ParseVariantValue returned unexpected value for: ${State}`>
    : VariantTypeError<`$ParseVariantDict encountered an invalid variant string: ${State} (2)`>;

type $ParseVariantArray<State extends string, Memo extends any[] = []> = string extends State
    ? VariantTypeError<"$ParseVariantArray: 'string' is not a supported type.">
    : State extends `)${infer State}`
    ? [Memo, State]
    : $ParseVariantValue<State> extends [infer Value, `${infer State}`]
    ? State extends `${infer NextValue})${infer NextState}`
        ? $ParseVariantArray<State, [...Memo, Variant<Value extends string ? Value : any>]>
        : State extends `)${infer State}`
        ? [[...Memo, Variant<Value extends string ? Value : any>], State]
        : VariantTypeError<`$ParseVariantArray encountered an invalid variant string: ${State} (1)`>
    : VariantTypeError<`$ParseVariantValue returned unexpected value for: ${State} (2)`>;

type $ParseVariantKeyValue<State extends string, Memo extends any[] = []> = string extends State
    ? VariantTypeError<"$ParseVariantKeyValue: 'string' is not a supported type.">
    : State extends `}${infer State}`
    ? [Memo, State]
    : State extends `${infer Key}${""}${infer State}`
    ? $ParseVariantValue<State> extends [infer Value, `${infer State}`]
        ? State extends `}${infer State}`
            ? [[...Memo, Variant<Key>, Variant<Value extends string ? Value : any>], State]
            : VariantTypeError<`$ParseVariantKeyValue encountered an invalid variant string: ${State} (1)`>
        : VariantTypeError<`$ParseVariantKeyValue returned unexpected value for: ${State}`>
    : VariantTypeError<`$ParseVariantKeyValue encountered an invalid variant string: ${State} (2)`>;

type $ParseShallowRootVariantValue<State extends string> = string extends State
    ? unknown
    : State extends `${`s` | `o` | `g`}${infer State}`
    ? [string, State]
    : State extends `${`n` | `q` | `t` | `d` | `u` | `i` | `x` | `y`}${infer State}`
    ? [number, State]
    : State extends `b${infer State}`
    ? [boolean, State]
    : State extends `v${infer State}`
    ? [Variant, State]
    : State extends `h${infer State}`
    ? [unknown, State]
    : State extends `?${infer State}`
    ? [unknown, State]
    : State extends `(${infer State}`
    ? $ParseVariantArray<State>
    : State extends `a{${infer State}`
    ? $ParseVariantDict<State>
    : State extends `{${infer State}`
    ? $ParseVariantKeyValue<State>
    : State extends `ay${infer State}`
    ? [Uint8Array, State]
    : State extends `a${infer State}`
    ? $ParseVariantValue<State> extends [infer Value, `${infer State}`]
        ? [Value[], State]
        : VariantTypeError<`$ParseShallowRootVariantValue encountered an invalid variant string: ${State} (1)`>
    : VariantTypeError<`$ParseShallowRootVariantValue encountered an invalid variant string: ${State} (2)`>;

type $ParseVariantValue<State extends string> = string extends State
    ? unknown
    : State extends `s${infer State}`
    ? ["s", State]
    : State extends `o${infer State}`
    ? ["o", State]
    : State extends `g${infer State}`
    ? ["g", State]
    : State extends `${`n` | `q` | `t` | `d` | `u` | `i` | `x` | `y`}${infer State}`
    ? // TODO
      ["u", State]
    : State extends `b${infer State}`
    ? ["b", State]
    : State extends `v${infer State}`
    ? ["v", State]
    : State extends `h${infer State}`
    ? ["h", State]
    : State extends `?${infer State}`
    ? ["?", State]
    : State extends `(${infer State}`
    ? $ParseVariantArray<State>
    : State extends `a{${infer State}`
    ? $ParseVariantDict<State>
    : State extends `{${infer State}`
    ? $ParseVariantKeyValue<State>
    : State extends `ay${infer State}`
    ? [Uint8Array, State]
    : State extends `a${infer State}`
    ? $ParseVariantValue<State> extends [infer Value, `${infer State}`]
        ? [Value[], State]
        : VariantTypeError<`$ParseVariantValue encountered an invalid variant string: ${State} (1)`>
    : VariantTypeError<`$ParseVariantValue encountered an invalid variant string: ${State} (2)`>;

type $ParseVariant<T extends string> = $ParseShallowRootVariantValue<T> extends infer Result
    ? Result extends [infer Value, string]
        ? Value
        : Result extends VariantTypeError<any>
        ? Result
        : never
    : never;

type $VariantTypeToString<T extends VariantType> = T extends VariantType<infer S> ? S : never;

export class Variant<S extends string = any> {
    static $gtype: GObject.GType<Variant>;
    constructor(sig: S, value: $ParseDeepVariant<typeof sig>);
    constructor(copy: Variant<S>);
    _init(sig: S, value: any): Variant<S>;
    // Constructors
    static ["new"]<S extends string>(sig: S, value: $ParseDeepVariant<typeof sig>): Variant<S>;
    static _new_internal<S extends string>(sig: S, value: $ParseDeepVariant<typeof sig>): Variant<S>;
    static new_array<C extends string = "a?">(
        child_type: VariantType<C>,
        children?: Variant<$VariantTypeToString<typeof child_type>>[] | null
    ): Variant<`a${C}`>;
    static new_boolean(value: boolean): Variant<"b">;
    static new_byte(value: number): Variant<"y">;
    static new_bytestring(string: Uint8Array | string): Variant<"ay">;
    static new_bytestring_array(strv: string[]): Variant<"aay">;
    static new_dict_entry(key: Variant, value: Variant): Variant<"{vv}">;
    static new_double(value: number): Variant<"d">;
    static new_fixed_array<C extends string = "a?">(
        element_type: VariantType<C>,
        elements: Variant<$VariantTypeToString<typeof element_type>>[] | null,
        n_elements: number,
        element_size: number
    ): Variant<`a${C}`>;
    static new_from_bytes<C extends string>(
        type: VariantType<C>,
        bytes: Bytes | Uint8Array,
        trusted: boolean
    ): Variant<C>;
    static new_from_data<C extends string>(
        type: VariantType<C>,
        data: Uint8Array | string,
        trusted: boolean,
        user_data?: any | null
    ): Variant<C>;
    static new_handle(value: number): Variant<"h">;
    static new_int16(value: number): Variant<"n">;
    static new_int32(value: number): Variant<"i">;
    static new_int64(value: number): Variant<"x">;
    static new_maybe(child_type?: VariantType | null, child?: Variant | null): Variant<"mv">;
    static new_object_path(object_path: string): Variant<"o">;
    static new_objv(strv: string[]): Variant<"ao">;
    static new_signature(signature: string): Variant<"g">;
    static new_string(string: string): Variant<"s">;
    static new_strv(strv: string[]): Variant<"as">;
    static new_tuple<Items extends ReadonlyArray<VariantType> | readonly [VariantType]>(
        children: Items
    ): Variant<`(${$ToTuple<Items>})`>;
    static new_uint16(value: number): Variant<"q">;
    static new_uint32(value: number): Variant<"u">;
    static new_uint64(value: number): Variant<"t">;
    static new_variant(value: Variant): Variant<"v">;
    // Members
    byteswap(): Variant;
    check_format_string(format_string: string, copy_only: boolean): boolean;
    classify(): VariantClass;
    compare(two: Variant): number;
    dup_bytestring(): Uint8Array;
    dup_bytestring_array(): string[];
    dup_objv(): string[];
    dup_string(): [string, number];
    dup_strv(): string[];
    equal(two: Variant): boolean;
    get_boolean(): boolean;
    get_byte(): number;
    get_bytestring(): Uint8Array;
    get_bytestring_array(): string[];
    get_child_value(index_: number): Variant;
    get_data(): any | null;
    get_data_as_bytes(): Bytes;
    get_double(): number;
    get_handle(): number;
    get_int16(): number;
    get_int32(): number;
    get_int64(): number;
    get_maybe(): Variant | null;
    get_normal_form(): Variant;
    get_objv(): string[];
    get_size(): number;
    get_string(): [string, number | null];
    get_strv(): string[];
    get_type(): VariantType<S>;
    get_type_string(): string;
    get_uint16(): number;
    get_uint32(): number;
    get_uint64(): number;
    get_variant(): Variant;
    hash(): number;
    is_container(): boolean;
    is_floating(): boolean;
    is_normal_form(): boolean;
    is_of_type(type: VariantType): boolean;
    lookup_value(key: string, expected_type?: VariantType | null): Variant;
    n_children(): number;
    print(type_annotate: boolean): string;
    ref(): Variant;
    ref_sink(): Variant;
    store(data: any): void;
    take_ref(): Variant;
    unref(): void;
    static is_object_path(string: string): boolean;
    static is_signature(string: string): boolean;
    static parse(type: VariantType | null, text: string, limit?: string | null, endptr?: string | null): Variant;
    static parse_error_print_context(error: Error, source_str: string): string;
    static parse_error_quark(): Quark;
    static parser_get_error_quark(): Quark;
    unpack(): $ParseVariant<S>;
    deepUnpack(): $ParseDeepVariant<S>;
    deep_unpack(): $ParseDeepVariant<S>;
    recursiveUnpack(): $ParseRecursiveVariant<S>;
}

type $ElementSig<E extends any> = E extends [infer Element]
    ? Element
    : E extends [infer Element, ...infer Elements]
    ? Element | $ElementSig<Elements>
    : E extends globalThis.Array<infer Element>
    ? Element
    : never;

export class VariantBuilder<S extends string = "a*"> {
    static $gtype: GObject.GType<VariantBuilder>;
    constructor(type: VariantType<S>);
    constructor(copy: VariantBuilder<S>);
    // Constructors
    static ["new"]<S extends string = "a*">(type: VariantType<S>): VariantBuilder<S>;
    // Members
    add_value(value: $ElementSig<$ParseDeepVariant<S>>): void;
    close(): void;
    end(): Variant<S>;
    open(type: VariantType): void;
    ref(): VariantBuilder;
    unref(): void;
}

export class VariantDict {
    static $gtype: GObject.GType<VariantDict>;
    constructor(from_asv?: Variant | null);
    constructor(copy: VariantDict);
    // Constructors
    static ["new"](from_asv?: Variant | null): VariantDict;
    // Members
    clear(): void;
    contains(key: string): boolean;
    end(): Variant;
    insert_value(key: string, value: Variant): void;
    lookup_value(key: string, expected_type?: VariantType | null): Variant;
    ref(): VariantDict;
    remove(key: string): boolean;
    unref(): void;
    lookup(key: any, variantType?: any, deep?: boolean): any;
}

type $ToTuple<T extends readonly VariantType[]> = T extends []
    ? ""
    : T extends [VariantType<infer S>]
    ? `${S}`
    : T extends [VariantType<infer S>, ...infer U]
    ? U extends [...VariantType[]]
        ? `${S}${$ToTuple<U>}`
        : never
    : "?";

export class VariantType<S extends string = any> {
    static $gtype: GObject.GType<VariantType>;
    constructor(type_string: S);
    constructor(copy: VariantType<S>);
    // Constructors
    static ["new"]<S extends string>(type_string: S): VariantType<S>;
    static new_array<S extends string>(element: VariantType<S>): VariantType<`a${S}`>;
    static new_dict_entry<K extends string, V extends string>(
        key: VariantType<K>,
        value: VariantType<V>
    ): VariantType<`{${K}${V}}`>;
    static new_maybe<S extends string>(element: VariantType<S>): VariantType<`m${S}`>;
    static new_tuple<Items extends ReadonlyArray<VariantType> | readonly [VariantType]>(
        items: Items
    ): VariantType<`(${$ToTuple<Items>})`>;
    // Members
    copy(): VariantType<S>;
    dup_string(): string;
    element(): VariantType;
    equal(type2: VariantType): boolean;
    first(): VariantType;
    free(): void;
    get_string_length(): number;
    hash(): number;
    is_array(): boolean;
    is_basic(): boolean;
    is_container(): boolean;
    is_definite(): boolean;
    is_dict_entry(): boolean;
    is_maybe(): boolean;
    is_subtype_of(supertype: VariantType): boolean;
    is_tuple(): boolean;
    is_variant(): boolean;
    key(): VariantType;
    n_items(): number;
    next(): VariantType;
    value(): VariantType;
    static checked_(arg0: string): VariantType;
    static string_get_depth_(type_string: string): number;
    static string_is_valid(type_string: string): boolean;
    static string_scan(string: string, limit?: string | null): [boolean, string | null];
}

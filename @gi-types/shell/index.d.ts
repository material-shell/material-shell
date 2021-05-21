/**
 * Shell 0.1
 *
 * Generated from 0.1
 */

import * as Atk from '@gi-types/atk';
import * as cairo from '@gi-types/cairo';
import * as Clutter from '@gi-types/clutter';
import * as Gcr from '@gi-types/gcr';
import * as GdkPixbuf from '@gi-types/gdkpixbuf';
import * as Gio from '@gi-types/gio';
import * as GLib from '@gi-types/glib';
import * as GObject from '@gi-types/gobject';
import * as Gtk from '@gi-types/gtk';
import * as Json from '@gi-types/json';
import * as Meta from '@gi-types/meta';
import * as NM from '@gi-types/nm';
import * as PolkitAgent from '@gi-types/polkitagent';
import * as St from '@gi-types/st';

export const KEYRING_SK_TAG: string;
export const KEYRING_SN_TAG: string;
export const KEYRING_UUID_TAG: string;
export function get_file_contents_utf8_sync(path: string): string;
export function util_check_cloexec_fds(): void;
export function util_composite_capture_images(
    captures: Clutter.Capture,
    n_captures: number,
    x: number,
    y: number,
    target_width: number,
    target_height: number,
    target_scale: number
): cairo.Surface;
export function util_create_pixbuf_from_data(
    data: Uint8Array | string,
    colorspace: GdkPixbuf.Colorspace,
    has_alpha: boolean,
    bits_per_sample: number,
    width: number,
    height: number,
    rowstride: number
): GdkPixbuf.Pixbuf;
export function util_get_content_for_window_actor(
    window_actor: Meta.WindowActor,
    window_rect: Meta.Rectangle
): Clutter.Content | null;
export function util_get_translated_folder_name(name: string): string | null;
export function util_get_uid(): number;
export function util_get_week_start(): number;
export function util_has_x11_display_extension(
    display: Meta.Display,
    extension: string
): boolean;
export function util_regex_escape(str: string): string;
export function util_sd_notify(): void;
export function util_set_hidden_from_pick(
    actor: Clutter.Actor,
    hidden: boolean
): void;
export function util_start_systemd_unit(
    unit: string,
    mode: string,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function util_start_systemd_unit(
    unit: string,
    mode: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<string> | null
): void;
export function util_start_systemd_unit(
    unit: string,
    mode: string,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<string> | null
): Promise<boolean> | void;
export function util_start_systemd_unit_finish(res: Gio.AsyncResult): boolean;
export function util_stop_systemd_unit(
    unit: string,
    mode: string,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function util_stop_systemd_unit(
    unit: string,
    mode: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<string> | null
): void;
export function util_stop_systemd_unit(
    unit: string,
    mode: string,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<string> | null
): Promise<boolean> | void;
export function util_stop_systemd_unit_finish(res: Gio.AsyncResult): boolean;
export function util_touch_file_async(file: Gio.File): Promise<boolean>;
export function util_touch_file_async(
    file: Gio.File,
    callback: Gio.AsyncReadyCallback<Gio.File> | null
): void;
export function util_touch_file_async(
    file: Gio.File,
    callback?: Gio.AsyncReadyCallback<Gio.File> | null
): Promise<boolean> | void;
export function util_touch_file_finish(
    file: Gio.File,
    res: Gio.AsyncResult
): boolean;
export function util_translate_time_string(str: string): string;
export function util_wifexited(status: number): [boolean, number];
export function write_string_to_stream(
    stream: Gio.OutputStream,
    str: string
): boolean;
export type LeisureFunction = (data?: any | null) => void;
export type PerfReplayFunction = (
    time: number,
    name: string,
    signature: string,
    arg: any
) => void;
export type PerfStatisticsCallback = (
    perf_log: PerfLog,
    data?: any | null
) => void;

export namespace AppLaunchGpu {
    export const $gtype: GObject.GType<AppLaunchGpu>;
}

export enum AppLaunchGpu {
    APP_PREF = 0,
    DISCRETE = 1,
    DEFAULT = 2,
}

export namespace AppState {
    export const $gtype: GObject.GType<AppState>;
}

export enum AppState {
    STOPPED = 0,
    STARTING = 1,
    RUNNING = 2,
}

export namespace BlurMode {
    export const $gtype: GObject.GType<BlurMode>;
}

export enum BlurMode {
    ACTOR = 0,
    BACKGROUND = 1,
}

export namespace NetworkAgentResponse {
    export const $gtype: GObject.GType<NetworkAgentResponse>;
}

export enum NetworkAgentResponse {
    CONFIRMED = 0,
    USER_CANCELED = 1,
    INTERNAL_ERROR = 2,
}

export namespace SnippetHook {
    export const $gtype: GObject.GType<SnippetHook>;
}

export enum SnippetHook {
    VERTEX = 0,
    VERTEX_TRANSFORM = 1,
    FRAGMENT = 2048,
    TEXTURE_COORD_TRANSFORM = 4096,
    LAYER_FRAGMENT = 6144,
    TEXTURE_LOOKUP = 6145,
}

export namespace ActionMode {
    export const $gtype: GObject.GType<ActionMode>;
}

export enum ActionMode {
    NONE = 0,
    NORMAL = 1,
    OVERVIEW = 2,
    LOCK_SCREEN = 4,
    UNLOCK_SCREEN = 8,
    LOGIN_SCREEN = 16,
    SYSTEM_MODAL = 32,
    LOOKING_GLASS = 64,
    POPUP = 128,
    ALL = -1,
}
export namespace App {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        action_group: Gio.ActionGroup;
        actionGroup: Gio.ActionGroup;
        app_info: Gio.DesktopAppInfo;
        appInfo: Gio.DesktopAppInfo;
        busy: boolean;
        id: string;
        state: AppState;
    }
}
export class App extends GObject.Object {
    static $gtype: GObject.GType<App>;

    constructor(
        properties?: Partial<App.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<App.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    action_group: Gio.ActionGroup;
    actionGroup: Gio.ActionGroup;
    app_info: Gio.DesktopAppInfo;
    appInfo: Gio.DesktopAppInfo;
    busy: boolean;
    id: string;
    state: AppState;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'windows-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'windows-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'windows-changed'): void;

    // Members

    activate(): void;
    activate_full(workspace: number, timestamp: number): void;
    activate_window(window: Meta.Window | null, timestamp: number): void;
    can_open_new_window(): boolean;
    compare(other: App): number;
    compare_by_name(other: App): number;
    create_icon_texture(size: number): Clutter.Actor;
    get_app_info(): Gio.DesktopAppInfo;
    get_busy(): boolean;
    get_description(): string;
    get_icon(): Gio.Icon;
    get_id(): string;
    get_n_windows(): number;
    get_name(): string;
    get_pids(): number[];
    get_state(): AppState;
    get_windows(): Meta.Window[];
    is_on_workspace(workspace: Meta.Workspace): boolean;
    is_window_backed(): boolean;
    launch(
        timestamp: number,
        workspace: number,
        gpu_pref: AppLaunchGpu
    ): boolean;
    launch_action(
        action_name: string,
        timestamp: number,
        workspace: number
    ): void;
    open_new_window(workspace: number): void;
    request_quit(): boolean;
    update_app_actions(window: Meta.Window): void;
    update_window_actions(window: Meta.Window): void;
}
export namespace AppSystem {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AppSystem extends GObject.Object {
    static $gtype: GObject.GType<AppSystem>;

    constructor(
        properties?: Partial<AppSystem.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<AppSystem.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'app-state-changed',
        callback: (_source: this, object: App) => void
    ): number;
    connect_after(
        signal: 'app-state-changed',
        callback: (_source: this, object: App) => void
    ): number;
    emit(signal: 'app-state-changed', object: App): void;
    connect(
        signal: 'installed-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'installed-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'installed-changed'): void;

    // Members

    get_installed(): Gio.AppInfo[];
    get_running(): App[];
    lookup_app(id: string): App;
    lookup_desktop_wmclass(wmclass?: string | null): App;
    lookup_heuristic_basename(id: string): App;
    lookup_startup_wmclass(wmclass?: string | null): App;
    static get_default(): AppSystem;
    static search(search_string: string): string[][];
}
export namespace AppUsage {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AppUsage extends GObject.Object {
    static $gtype: GObject.GType<AppUsage>;

    constructor(
        properties?: Partial<AppUsage.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<AppUsage.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    compare(id_a: string, id_b: string): number;
    get_most_used(): App[];
    static get_default(): AppUsage;
}
export namespace BlurEffect {
    export interface ConstructorProperties
        extends Clutter.Effect.ConstructorProperties {
        [key: string]: any;
        brightness: number;
        mode: BlurMode;
        sigma: number;
    }
}
export class BlurEffect extends Clutter.Effect {
    static $gtype: GObject.GType<BlurEffect>;

    constructor(
        properties?: Partial<BlurEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BlurEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    brightness: number;
    mode: BlurMode;
    sigma: number;

    // Constructors

    static ['new'](): BlurEffect;

    // Members

    get_brightness(): number;
    get_mode(): BlurMode;
    get_sigma(): number;
    set_brightness(brightness: number): void;
    set_mode(mode: BlurMode): void;
    set_sigma(sigma: number): void;
}
export namespace EmbeddedWindow {
    export interface ConstructorProperties
        extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class EmbeddedWindow
    extends Gtk.Window
    implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<EmbeddedWindow>;

    constructor(
        properties?: Partial<EmbeddedWindow.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<EmbeddedWindow.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): EmbeddedWindow;
    static ['new'](...args: never[]): never;

    // Implemented Members

    add_child(
        builder: Gtk.Builder,
        child: GObject.Object,
        type?: string | null
    ): void;
    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
    custom_finished(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string,
        data?: any | null
    ): void;
    custom_tag_end(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string,
        data?: any | null
    ): void;
    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(
        builder: Gtk.Builder,
        childname: string
    ): T;
    get_name(): string;
    parser_finished(builder: Gtk.Builder): void;
    set_buildable_property(
        builder: Gtk.Builder,
        name: string,
        value: any
    ): void;
    set_name(name: string): void;
    vfunc_add_child(
        builder: Gtk.Builder,
        child: GObject.Object,
        type?: string | null
    ): void;
    vfunc_construct_child<T = GObject.Object>(
        builder: Gtk.Builder,
        name: string
    ): T;
    vfunc_custom_finished(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string,
        data?: any | null
    ): void;
    vfunc_custom_tag_end(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string,
        data?: any | null
    ): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(
        builder: Gtk.Builder,
        childname: string
    ): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(
        builder: Gtk.Builder,
        name: string,
        value: any
    ): void;
    vfunc_set_name(name: string): void;
}
export namespace GLSLEffect {
    export interface ConstructorProperties
        extends Clutter.OffscreenEffect.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLSLEffect extends Clutter.OffscreenEffect {
    static $gtype: GObject.GType<GLSLEffect>;

    constructor(
        properties?: Partial<GLSLEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<GLSLEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    add_glsl_snippet(
        hook: SnippetHook,
        declarations: string,
        code: string,
        is_replace: boolean
    ): void;
    get_uniform_location(name: string): number;
    set_uniform_float(
        uniform: number,
        n_components: number,
        value: number[]
    ): void;
    vfunc_build_pipeline(): void;
}
export namespace Global {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Meta.Backend;
        datadir: string;
        display: Meta.Display;
        focus_manager: St.FocusManager;
        focusManager: St.FocusManager;
        frame_finish_timestamp: boolean;
        frameFinishTimestamp: boolean;
        frame_timestamps: boolean;
        frameTimestamps: boolean;
        imagedir: string;
        screen_height: number;
        screenHeight: number;
        screen_width: number;
        screenWidth: number;
        session_mode: string;
        sessionMode: string;
        settings: Gio.Settings;
        stage: Clutter.Actor;
        switcheroo_control: Gio.DBusProxy;
        switcherooControl: Gio.DBusProxy;
        top_window_group: Clutter.Actor;
        topWindowGroup: Clutter.Actor;
        userdatadir: string;
        window_group: Clutter.Actor;
        windowGroup: Clutter.Actor;
        window_manager: WM;
        windowManager: WM;
        workspace_manager: Meta.WorkspaceManager;
        workspaceManager: Meta.WorkspaceManager;
    }
}
export class Global extends GObject.Object {
    static $gtype: GObject.GType<Global>;

    constructor(
        properties?: Partial<Global.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Global.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    backend: Meta.Backend;
    datadir: string;
    display: Meta.Display;
    focus_manager: St.FocusManager;
    focusManager: St.FocusManager;
    frame_finish_timestamp: boolean;
    frameFinishTimestamp: boolean;
    frame_timestamps: boolean;
    frameTimestamps: boolean;
    imagedir: string;
    screen_height: number;
    screenHeight: number;
    screen_width: number;
    screenWidth: number;
    session_mode: string;
    sessionMode: string;
    settings: Gio.Settings;
    stage: Clutter.Actor;
    switcheroo_control: Gio.DBusProxy;
    switcherooControl: Gio.DBusProxy;
    top_window_group: Clutter.Actor;
    topWindowGroup: Clutter.Actor;
    userdatadir: string;
    window_group: Clutter.Actor;
    windowGroup: Clutter.Actor;
    window_manager: WM;
    windowManager: WM;
    workspace_manager: Meta.WorkspaceManager;
    workspaceManager: Meta.WorkspaceManager;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'locate-pointer',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'locate-pointer',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'locate-pointer'): void;
    connect(
        signal: 'notify-error',
        callback: (_source: this, object: string, p0: string) => void
    ): number;
    connect_after(
        signal: 'notify-error',
        callback: (_source: this, object: string, p0: string) => void
    ): number;
    emit(signal: 'notify-error', object: string, p0: string): void;

    // Members

    begin_modal(timestamp: number, options: Meta.ModalOptions): boolean;
    begin_work(): void;
    create_app_launch_context(
        timestamp: number,
        workspace: number
    ): Gio.AppLaunchContext;
    end_modal(timestamp: number): void;
    end_work(): void;
    get_current_time(): number;
    get_display(): Meta.Display;
    get_persistent_state(
        property_type: string,
        property_name: string
    ): GLib.Variant;
    get_pointer(): [number, number, Clutter.ModifierType];
    get_runtime_state(
        property_type: string,
        property_name: string
    ): GLib.Variant;
    get_session_mode(): string;
    get_settings(): Gio.Settings;
    get_stage(): Clutter.Stage;
    get_switcheroo_control(): Gio.DBusProxy;
    get_window_actors(): Meta.WindowActor[];
    notify_error(msg: string, details: string): void;
    reexec_self(): void;
    run_at_leisure(func: LeisureFunction): void;
    set_persistent_state(
        property_name: string,
        variant?: GLib.Variant | null
    ): void;
    set_runtime_state(
        property_name: string,
        variant?: GLib.Variant | null
    ): void;
    set_stage_input_region(rectangles: Meta.Rectangle[]): void;
    sync_pointer(): void;
    static get(): Global;
}
export namespace GtkEmbed {
    export interface ConstructorProperties<
        A extends Clutter.Actor = Clutter.Actor
    > extends Clutter.Clone.ConstructorProperties<A> {
        [key: string]: any;
        window: EmbeddedWindow;
    }
}
export class GtkEmbed<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Clone<A>
    implements
        Atk.ImplementorIface,
        Clutter.Animatable,
        Clutter.Container<A>,
        Clutter.Scriptable {
    static $gtype: GObject.GType<GtkEmbed>;

    constructor(
        properties?: Partial<GtkEmbed.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<GtkEmbed.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Properties
    window: EmbeddedWindow;

    // Constructors

    static ['new'](window: EmbeddedWindow): GtkEmbed;
    static ['new'](...args: never[]): never;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Clutter.Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Clutter.Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(
        script: Clutter.Script,
        name: string,
        value: any
    ): void;
    vfunc_set_id(id_: string): void;
}
export namespace InvertLightnessEffect {
    export interface ConstructorProperties
        extends Clutter.OffscreenEffect.ConstructorProperties {
        [key: string]: any;
    }
}
export class InvertLightnessEffect extends Clutter.OffscreenEffect {
    static $gtype: GObject.GType<InvertLightnessEffect>;

    constructor(
        properties?: Partial<InvertLightnessEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<InvertLightnessEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): InvertLightnessEffect;
}
export namespace KeyringPrompt {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        choice_visible: boolean;
        choiceVisible: boolean;
        confirm_actor: Clutter.Text;
        confirmActor: Clutter.Text;
        confirm_visible: boolean;
        confirmVisible: boolean;
        password_actor: Clutter.Text;
        passwordActor: Clutter.Text;
        password_visible: boolean;
        passwordVisible: boolean;
        warning_visible: boolean;
        warningVisible: boolean;
    }
}
export class KeyringPrompt extends GObject.Object implements Gcr.Prompt {
    static $gtype: GObject.GType<KeyringPrompt>;

    constructor(
        properties?: Partial<KeyringPrompt.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<KeyringPrompt.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    choice_visible: boolean;
    choiceVisible: boolean;
    confirm_actor: Clutter.Text;
    confirmActor: Clutter.Text;
    confirm_visible: boolean;
    confirmVisible: boolean;
    password_actor: Clutter.Text;
    passwordActor: Clutter.Text;
    password_visible: boolean;
    passwordVisible: boolean;
    warning_visible: boolean;
    warningVisible: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'show-confirm', callback: (_source: this) => void): number;
    connect_after(
        signal: 'show-confirm',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'show-confirm'): void;
    connect(signal: 'show-password', callback: (_source: this) => void): number;
    connect_after(
        signal: 'show-password',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'show-password'): void;

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

    // Constructors

    static ['new'](): KeyringPrompt;

    // Members

    cancel(): void;
    complete(): boolean;
    get_confirm_actor(): Clutter.Text | null;
    get_password_actor(): Clutter.Text | null;
    set_confirm_actor(confirm_actor?: Clutter.Text | null): void;
    set_password_actor(password_actor?: Clutter.Text | null): void;

    // Implemented Members

    close(): void;
    confirm(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;
    confirm_async(
        cancellable?: Gio.Cancellable | null
    ): Promise<Gcr.PromptReply>;
    confirm_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    confirm_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gcr.PromptReply> | void;
    confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
    confirm_run(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;
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
    password_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
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
    vfunc_prompt_confirm_async(
        cancellable?: Gio.Cancellable | null
    ): Promise<Gcr.PromptReply>;
    vfunc_prompt_confirm_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_prompt_confirm_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gcr.PromptReply> | void;
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
    vfunc_prompt_password_async(
        cancellable?: Gio.Cancellable | null
    ): Promise<string>;
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
export namespace MountOperation {
    export interface ConstructorProperties
        extends Gio.MountOperation.ConstructorProperties {
        [key: string]: any;
    }
}
export class MountOperation extends Gio.MountOperation {
    static $gtype: GObject.GType<MountOperation>;

    constructor(
        properties?: Partial<MountOperation.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<MountOperation.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'show-processes-2',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'show-processes-2',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'show-processes-2'): void;

    // Constructors

    static ['new'](): MountOperation;

    // Members

    get_show_processes_choices(): string[];
    get_show_processes_message(): string;
    get_show_processes_pids(): GLib.Pid[];
}
export namespace NetworkAgent {
    export interface ConstructorProperties
        extends NM.SecretAgentOld.ConstructorProperties {
        [key: string]: any;
    }
}
export class NetworkAgent
    extends NM.SecretAgentOld
    implements Gio.AsyncInitable<NetworkAgent>, Gio.Initable {
    static $gtype: GObject.GType<NetworkAgent>;

    constructor(
        properties?: Partial<NetworkAgent.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<NetworkAgent.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'cancel-request',
        callback: (_source: this, object: string) => void
    ): number;
    connect_after(
        signal: 'cancel-request',
        callback: (_source: this, object: string) => void
    ): number;
    emit(signal: 'cancel-request', object: string): void;
    connect(
        signal: 'new-request',
        callback: (
            _source: this,
            object: string,
            p0: NM.Connection,
            p1: string,
            p2: string[],
            p3: number
        ) => void
    ): number;
    connect_after(
        signal: 'new-request',
        callback: (
            _source: this,
            object: string,
            p0: NM.Connection,
            p1: string,
            p2: string[],
            p3: number
        ) => void
    ): number;
    emit(
        signal: 'new-request',
        object: string,
        p0: NM.Connection,
        p1: string,
        p2: string[],
        p3: number
    ): void;

    // Members

    add_vpn_secret(
        request_id: string,
        setting_key: string,
        setting_value: string
    ): void;
    respond(request_id: string, response: NetworkAgentResponse): void;
    search_vpn_plugin(service: string): Promise<NM.VpnPluginInfo | null>;
    search_vpn_plugin(
        service: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    search_vpn_plugin(
        service: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<NM.VpnPluginInfo | null> | void;
    search_vpn_plugin_finish(result: Gio.AsyncResult): NM.VpnPluginInfo | null;
    set_password(
        request_id: string,
        setting_key: string,
        setting_value: string
    ): void;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
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
    new_finish(res: Gio.AsyncResult): NetworkAgent;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
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
export namespace PerfLog {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PerfLog extends GObject.Object {
    static $gtype: GObject.GType<PerfLog>;

    constructor(
        properties?: Partial<PerfLog.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<PerfLog.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    add_statistics_callback(callback: PerfStatisticsCallback): void;
    collect_statistics(): void;
    define_event(name: string, description: string, signature: string): void;
    define_statistic(
        name: string,
        description: string,
        signature: string
    ): void;
    dump_events(out: Gio.OutputStream): boolean;
    dump_log(out: Gio.OutputStream): boolean;
    event(name: string): void;
    event_i(name: string, arg: number): void;
    event_s(name: string, arg: string): void;
    event_x(name: string, arg: number): void;
    replay(replay_function: PerfReplayFunction): void;
    set_enabled(enabled: boolean): void;
    update_statistic_i(name: string, value: number): void;
    update_statistic_x(name: string, value: number): void;
    static get_default(): PerfLog;
}
export namespace PolkitAuthenticationAgent {
    export interface ConstructorProperties
        extends PolkitAgent.Listener.ConstructorProperties {
        [key: string]: any;
    }
}
export class PolkitAuthenticationAgent extends PolkitAgent.Listener {
    static $gtype: GObject.GType<PolkitAuthenticationAgent>;

    constructor(
        properties?: Partial<PolkitAuthenticationAgent.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<PolkitAuthenticationAgent.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'cancel', callback: (_source: this) => void): number;
    connect_after(signal: 'cancel', callback: (_source: this) => void): number;
    emit(signal: 'cancel'): void;
    connect(
        signal: 'initiate',
        callback: (
            _source: this,
            object: string,
            p0: string,
            p1: string,
            p2: string,
            p3: string[]
        ) => void
    ): number;
    connect_after(
        signal: 'initiate',
        callback: (
            _source: this,
            object: string,
            p0: string,
            p1: string,
            p2: string,
            p3: string[]
        ) => void
    ): number;
    emit(
        signal: 'initiate',
        object: string,
        p0: string,
        p1: string,
        p2: string,
        p3: string[]
    ): void;

    // Constructors

    static ['new'](): PolkitAuthenticationAgent;

    // Members

    complete(dismissed: boolean): void;
    register(): void;
    register(...args: never[]): never;
    unregister(): void;
    unregister(...args: never[]): never;
}
export namespace Screenshot {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Screenshot extends GObject.Object {
    static $gtype: GObject.GType<Screenshot>;

    constructor(
        properties?: Partial<Screenshot.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Screenshot.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): Screenshot;

    // Members

    pick_color(x: number, y: number): Promise<[Clutter.Color]>;
    pick_color(
        x: number,
        y: number,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    pick_color(
        x: number,
        y: number,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Clutter.Color]> | void;
    pick_color_finish(result: Gio.AsyncResult): [boolean, Clutter.Color];
    screenshot(
        include_cursor: boolean,
        stream: Gio.OutputStream
    ): Promise<[cairo.RectangleInt]>;
    screenshot(
        include_cursor: boolean,
        stream: Gio.OutputStream,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    screenshot(
        include_cursor: boolean,
        stream: Gio.OutputStream,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[cairo.RectangleInt]> | void;
    screenshot_area(
        x: number,
        y: number,
        width: number,
        height: number,
        stream: Gio.OutputStream
    ): Promise<[cairo.RectangleInt]>;
    screenshot_area(
        x: number,
        y: number,
        width: number,
        height: number,
        stream: Gio.OutputStream,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    screenshot_area(
        x: number,
        y: number,
        width: number,
        height: number,
        stream: Gio.OutputStream,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[cairo.RectangleInt]> | void;
    screenshot_area_finish(
        result: Gio.AsyncResult
    ): [boolean, cairo.RectangleInt];
    screenshot_finish(result: Gio.AsyncResult): [boolean, cairo.RectangleInt];
    screenshot_window(
        include_frame: boolean,
        include_cursor: boolean,
        stream: Gio.OutputStream
    ): Promise<[cairo.RectangleInt]>;
    screenshot_window(
        include_frame: boolean,
        include_cursor: boolean,
        stream: Gio.OutputStream,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    screenshot_window(
        include_frame: boolean,
        include_cursor: boolean,
        stream: Gio.OutputStream,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[cairo.RectangleInt]> | void;
    screenshot_window_finish(
        result: Gio.AsyncResult
    ): [boolean, cairo.RectangleInt];
}
export namespace SecureTextBuffer {
    export interface ConstructorProperties
        extends Clutter.TextBuffer.ConstructorProperties {
        [key: string]: any;
    }
}
export class SecureTextBuffer extends Clutter.TextBuffer {
    static $gtype: GObject.GType<SecureTextBuffer>;

    constructor(
        properties?: Partial<SecureTextBuffer.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<SecureTextBuffer.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): SecureTextBuffer;
}
export namespace Stack {
    export interface ConstructorProperties<
        A extends Clutter.Actor = Clutter.Actor
    > extends St.Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class Stack<A extends Clutter.Actor = Clutter.Actor>
    extends St.Widget
    implements
        Atk.ImplementorIface,
        Clutter.Animatable,
        Clutter.Container<A>,
        Clutter.Scriptable {
    static $gtype: GObject.GType<Stack>;

    constructor(
        properties?: Partial<Stack.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Stack.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Clutter.Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Clutter.Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(
        script: Clutter.Script,
        name: string,
        value: any
    ): void;
    vfunc_set_id(id_: string): void;
}
export namespace TrayIcon {
    export interface ConstructorProperties<
        A extends Clutter.Actor = Clutter.Actor
    > extends GtkEmbed.ConstructorProperties<A> {
        [key: string]: any;
        pid: number;
        title: string;
        wm_class: string;
        wmClass: string;
    }
}
export class TrayIcon<A extends Clutter.Actor = Clutter.Actor>
    extends GtkEmbed<A>
    implements
        Atk.ImplementorIface,
        Clutter.Animatable,
        Clutter.Container<A>,
        Clutter.Scriptable {
    static $gtype: GObject.GType<TrayIcon>;

    constructor(
        properties?: Partial<TrayIcon.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<TrayIcon.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Properties
    pid: number;
    title: string;
    wm_class: string;
    wmClass: string;

    // Constructors

    static ['new'](window: EmbeddedWindow): TrayIcon;
    static ['new'](...args: never[]): never;

    // Members

    click(event: Clutter.Event): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Clutter.Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Clutter.Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Clutter.Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Clutter.Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(
        script: Clutter.Script,
        name: string,
        value: any
    ): void;
    vfunc_set_id(id_: string): void;
}
export namespace TrayManager {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bg_color: Clutter.Color;
        bgColor: Clutter.Color;
    }
}
export class TrayManager extends GObject.Object {
    static $gtype: GObject.GType<TrayManager>;

    constructor(
        properties?: Partial<TrayManager.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<TrayManager.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    bg_color: Clutter.Color;
    bgColor: Clutter.Color;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'tray-icon-added',
        callback: (_source: this, object: Clutter.Actor) => void
    ): number;
    connect_after(
        signal: 'tray-icon-added',
        callback: (_source: this, object: Clutter.Actor) => void
    ): number;
    emit(signal: 'tray-icon-added', object: Clutter.Actor): void;
    connect(
        signal: 'tray-icon-removed',
        callback: (_source: this, object: Clutter.Actor) => void
    ): number;
    connect_after(
        signal: 'tray-icon-removed',
        callback: (_source: this, object: Clutter.Actor) => void
    ): number;
    emit(signal: 'tray-icon-removed', object: Clutter.Actor): void;

    // Constructors

    static ['new'](): TrayManager;

    // Members

    manage_screen(theme_widget: St.Widget): void;
    unmanage_screen(): void;
}
export namespace WM {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class WM extends GObject.Object {
    static $gtype: GObject.GType<WM>;

    constructor(properties?: Partial<WM.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WM.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'confirm-display-change',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'confirm-display-change',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'confirm-display-change'): void;
    connect(
        signal: 'create-close-dialog',
        callback: (_source: this, window: Meta.Window) => Meta.CloseDialog
    ): number;
    connect_after(
        signal: 'create-close-dialog',
        callback: (_source: this, window: Meta.Window) => Meta.CloseDialog
    ): number;
    emit(signal: 'create-close-dialog', window: Meta.Window): void;
    connect(
        signal: 'create-inhibit-shortcuts-dialog',
        callback: (
            _source: this,
            window: Meta.Window
        ) => Meta.InhibitShortcutsDialog
    ): number;
    connect_after(
        signal: 'create-inhibit-shortcuts-dialog',
        callback: (
            _source: this,
            window: Meta.Window
        ) => Meta.InhibitShortcutsDialog
    ): number;
    emit(signal: 'create-inhibit-shortcuts-dialog', window: Meta.Window): void;
    connect(
        signal: 'destroy',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    connect_after(
        signal: 'destroy',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    emit(signal: 'destroy', object: Meta.WindowActor): void;
    connect(
        signal: 'filter-keybinding',
        callback: (_source: this, object: Meta.KeyBinding) => boolean
    ): number;
    connect_after(
        signal: 'filter-keybinding',
        callback: (_source: this, object: Meta.KeyBinding) => boolean
    ): number;
    emit(signal: 'filter-keybinding', object: Meta.KeyBinding): void;
    connect(
        signal: 'hide-tile-preview',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'hide-tile-preview',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'hide-tile-preview'): void;
    connect(
        signal: 'kill-switch-workspace',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'kill-switch-workspace',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'kill-switch-workspace'): void;
    connect(
        signal: 'kill-window-effects',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    connect_after(
        signal: 'kill-window-effects',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    emit(signal: 'kill-window-effects', object: Meta.WindowActor): void;
    connect(
        signal: 'map',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    connect_after(
        signal: 'map',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    emit(signal: 'map', object: Meta.WindowActor): void;
    connect(
        signal: 'minimize',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    connect_after(
        signal: 'minimize',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    emit(signal: 'minimize', object: Meta.WindowActor): void;
    connect(
        signal: 'show-tile-preview',
        callback: (
            _source: this,
            object: Meta.Window,
            p0: Meta.Rectangle,
            p1: number
        ) => void
    ): number;
    connect_after(
        signal: 'show-tile-preview',
        callback: (
            _source: this,
            object: Meta.Window,
            p0: Meta.Rectangle,
            p1: number
        ) => void
    ): number;
    emit(
        signal: 'show-tile-preview',
        object: Meta.Window,
        p0: Meta.Rectangle,
        p1: number
    ): void;
    connect(
        signal: 'show-window-menu',
        callback: (
            _source: this,
            object: Meta.Window,
            p0: number,
            p1: Meta.Rectangle
        ) => void
    ): number;
    connect_after(
        signal: 'show-window-menu',
        callback: (
            _source: this,
            object: Meta.Window,
            p0: number,
            p1: Meta.Rectangle
        ) => void
    ): number;
    emit(
        signal: 'show-window-menu',
        object: Meta.Window,
        p0: number,
        p1: Meta.Rectangle
    ): void;
    connect(
        signal: 'size-change',
        callback: (
            _source: this,
            object: Meta.WindowActor,
            p0: Meta.SizeChange,
            p1: Meta.Rectangle,
            p2: Meta.Rectangle
        ) => void
    ): number;
    connect_after(
        signal: 'size-change',
        callback: (
            _source: this,
            object: Meta.WindowActor,
            p0: Meta.SizeChange,
            p1: Meta.Rectangle,
            p2: Meta.Rectangle
        ) => void
    ): number;
    emit(
        signal: 'size-change',
        object: Meta.WindowActor,
        p0: Meta.SizeChange,
        p1: Meta.Rectangle,
        p2: Meta.Rectangle
    ): void;
    connect(
        signal: 'size-changed',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    connect_after(
        signal: 'size-changed',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    emit(signal: 'size-changed', object: Meta.WindowActor): void;
    connect(
        signal: 'switch-workspace',
        callback: (
            _source: this,
            object: number,
            p0: number,
            p1: number
        ) => void
    ): number;
    connect_after(
        signal: 'switch-workspace',
        callback: (
            _source: this,
            object: number,
            p0: number,
            p1: number
        ) => void
    ): number;
    emit(
        signal: 'switch-workspace',
        object: number,
        p0: number,
        p1: number
    ): void;
    connect(
        signal: 'unminimize',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    connect_after(
        signal: 'unminimize',
        callback: (_source: this, object: Meta.WindowActor) => void
    ): number;
    emit(signal: 'unminimize', object: Meta.WindowActor): void;

    // Constructors

    static ['new'](plugin: Meta.Plugin): WM;

    // Members

    complete_display_change(ok: boolean): void;
    completed_destroy(actor: Meta.WindowActor): void;
    completed_map(actor: Meta.WindowActor): void;
    completed_minimize(actor: Meta.WindowActor): void;
    completed_size_change(actor: Meta.WindowActor): void;
    completed_switch_workspace(): void;
    completed_unminimize(actor: Meta.WindowActor): void;
}
export namespace WindowTracker {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        focus_app: App;
        focusApp: App;
    }
}
export class WindowTracker extends GObject.Object {
    static $gtype: GObject.GType<WindowTracker>;

    constructor(
        properties?: Partial<WindowTracker.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<WindowTracker.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    focus_app: App;
    focusApp: App;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'startup-sequence-changed',
        callback: (_source: this, object: Meta.StartupSequence) => void
    ): number;
    connect_after(
        signal: 'startup-sequence-changed',
        callback: (_source: this, object: Meta.StartupSequence) => void
    ): number;
    emit(
        signal: 'startup-sequence-changed',
        object: Meta.StartupSequence
    ): void;
    connect(
        signal: 'tracked-windows-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'tracked-windows-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'tracked-windows-changed'): void;

    // Members

    get_app_from_pid(pid: number): App;
    get_startup_sequences(): Meta.StartupSequence[];
    get_window_app(metawin: Meta.Window): App;
    static get_default(): WindowTracker;
}

export class MemoryInfo {
    static $gtype: GObject.GType<MemoryInfo>;

    constructor(
        properties?: Partial<{
            glibc_uordblks?: number;
            js_bytes?: number;
            gjs_boxed?: number;
            gjs_gobject?: number;
            gjs_function?: number;
            gjs_closure?: number;
            last_gc_seconds_ago?: number;
        }>
    );
    constructor(copy: MemoryInfo);

    // Fields
    glibc_uordblks: number;
    js_bytes: number;
    gjs_boxed: number;
    gjs_gobject: number;
    gjs_function: number;
    gjs_closure: number;
    last_gc_seconds_ago: number;
}

export class NetworkAgentPrivate {
    static $gtype: GObject.GType<NetworkAgentPrivate>;

    constructor(copy: NetworkAgentPrivate);
}

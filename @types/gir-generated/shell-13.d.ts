/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shell-13-import.d.ts';
/**
 * Shell-13
 */

import type St from './st-13.js';
import type Meta from './meta-13.js';
import type xlib from './xlib-2.0.js';
import type xfixes from './xfixes-4.0.js';
import type Mtk from './mtk-13.js';
import type cairo from './cairo-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Graphene from './graphene-1.0.js';
import type GDesktopEnums from './gdesktopenums-3.0.js';
import type CoglPango from './coglpango-13.js';
import type PangoCairo from './pangocairo-1.0.js';
import type Pango from './pango-1.0.js';
import type HarfBuzz from './harfbuzz-0.0.js';
import type freetype2 from './freetype2-2.0.js';
import type Gio from './gio-2.0.js';
import type Cogl from './cogl-13.js';
import type GL from './gl-1.0.js';
import type Clutter from './clutter-13.js';
import type Json from './json-1.0.js';
import type Atk from './atk-1.0.js';
import type GdkPixbuf from './gdkpixbuf-2.0.js';
import type GModule from './gmodule-2.0.js';
import type Cally from './cally-13.js';
import type PolkitAgent from './polkitagent-1.0.js';
import type Polkit from './polkit-1.0.js';
import type NM from './nm-1.0.js';
import type Gvc from './gvc-1.0.js';
import type Gcr from './gcr-4.js';
import type Gck from './gck-2.js';

export namespace Shell {
    enum AppLaunchGpu {
        APP_PREF,
        DISCRETE,
        DEFAULT,
    }
    enum AppState {
        STOPPED,
        STARTING,
        RUNNING,
    }
    /**
     * The mode of blurring of the effect.
     */
    enum BlurMode {
        /**
         * blur the actor contents, and its children
         */
        ACTOR,
        /**
         * blur what's beneath the actor
         */
        BACKGROUND,
    }
    enum NetworkAgentResponse {
        CONFIRMED,
        USER_CANCELED,
        INTERNAL_ERROR,
    }
    /**
     * Temporary hack to work around Cogl not exporting CoglSnippetHook in
     * the 1.0 API. Don't use.
     */
    enum SnippetHook {
        VERTEX,
        VERTEX_TRANSFORM,
        FRAGMENT,
        TEXTURE_COORD_TRANSFORM,
        LAYER_FRAGMENT,
        TEXTURE_LOOKUP,
    }
    /**
     * Controls in which GNOME Shell states an action (like keybindings and gestures)
     * should be handled.
     * @bitfield
     */
    enum ActionMode {
        /**
         * block action
         */
        NONE,
        /**
         * allow action when in window mode,
         *     e.g. when the focus is in an application window
         */
        NORMAL,
        /**
         * allow action while the overview
         *     is active
         */
        OVERVIEW,
        /**
         * allow action when the screen
         *     is locked, e.g. when the screen shield is shown
         */
        LOCK_SCREEN,
        /**
         * allow action in the unlock
         *     dialog
         */
        UNLOCK_SCREEN,
        /**
         * allow action in the login screen
         */
        LOGIN_SCREEN,
        /**
         * allow action when a system modal
         *     dialog (e.g. authentication or session dialogs) is open
         */
        SYSTEM_MODAL,
        /**
         * allow action in looking glass
         */
        LOOKING_GLASS,
        /**
         * allow action while a shell menu is open
         */
        POPUP,
        /**
         * always allow action
         */
        ALL,
    }
    const KEYRING_SK_TAG: string | null;
    const KEYRING_SN_TAG: string | null;
    const KEYRING_UUID_TAG: string | null;
    /**
     * Synchronously load the contents of a file as a NUL terminated
     * string, validating it as UTF-8.  Embedded NUL characters count as
     * invalid content.
     * @param path UTF-8 encoded filename path
     * @returns File contents
     */
    function get_file_contents_utf8_sync(path: string | null): string | null;
    /**
     * Walk over all open file descriptors. Check them for the FD_CLOEXEC flag.
     * If this flag is not set, log the offending file descriptor number.
     *
     * It is important that gnome-shell's file descriptors are all marked CLOEXEC,
     * so that the shell's open file descriptors are not passed to child processes
     * that we launch.
     */
    function util_check_cloexec_fds(): void;
    function util_composite_capture_images(
        captures: Clutter.Capture,
        n_captures: number,
        x: number,
        y: number,
        target_width: number,
        target_height: number,
        target_scale: number
    ): cairo.Surface;
    /**
     * Workaround for non-introspectability of gdk_pixbuf_from_data().
     * @param data
     * @param colorspace
     * @param has_alpha
     * @param bits_per_sample
     * @param width
     * @param height
     * @param rowstride
     */
    function util_create_pixbuf_from_data(
        data: Uint8Array,
        colorspace: GdkPixbuf.Colorspace,
        has_alpha: boolean,
        bits_per_sample: number,
        width: number,
        height: number,
        rowstride: number
    ): GdkPixbuf.Pixbuf;
    /**
     * Attempts to translate the folder `name` using translations provided
     * by .directory files.
     * @param name the untranslated folder name
     * @returns a translated string or %NULL
     */
    function util_get_translated_folder_name(
        name: string | null
    ): string | null;
    /**
     * A wrapper around getuid() so that it can be used from JavaScript. This
     * function will always succeed.
     * @returns the real user ID of the calling process
     */
    function util_get_uid(): number;
    /**
     * Gets the first week day for the current locale, expressed as a
     * number in the range 0..6, representing week days from Sunday to
     * Saturday.
     * @returns A number representing the first week day for the current          locale
     */
    function util_get_week_start(): number;
    /**
     * If the corresponding X11 display provides the passed extension, return %TRUE,
     * otherwise %FALSE. If there is no X11 display, %FALSE is passed.
     * @param display A #MetaDisplay
     * @param extension An X11 extension
     */
    function util_has_x11_display_extension(
        display: Meta.Display,
        extension: string | null
    ): boolean;
    /**
     * A wrapper around g_regex_escape_string() that takes its argument as
     * \0-terminated string rather than a byte-array that confuses gjs.
     * @param str a UTF-8 string to escape
     * @returns @str with all regex-special characters escaped
     */
    function util_regex_escape(str: string | null): string | null;
    function util_sd_notify(): void;
    /**
     * If `hidden` is %TRUE, hide `actor` from pick even with a mode of
     * %CLUTTER_PICK_ALL; if `hidden` is %FALSE, unhide `actor`.
     * @param actor A #ClutterActor
     * @param hidden Whether `actor` should be hidden from pick
     */
    function util_set_hidden_from_pick(
        actor: Clutter.Actor,
        hidden: boolean
    ): void;
    function util_start_systemd_unit<Z = unknown>(
        unit: string | null,
        mode: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Z> | null
    ): void;
    function util_start_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_stop_systemd_unit<Z = unknown>(
        unit: string | null,
        mode: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Z> | null
    ): void;
    function util_stop_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_systemd_unit_exists<Z = unknown>(
        unit: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Z> | null
    ): void;
    function util_systemd_unit_exists_finish(res: Gio.AsyncResult): boolean;
    function util_touch_file_async<Z = unknown>(
        file: Gio.File,
        callback: Gio.AsyncReadyCallback<Z> | null
    ): void;

    // Overloads of util_touch_file_async

    /**
     * Promisified version of {@link util_touch_file_async}
     *
     *
     * @param file
     * @returns A Promise of the result of {@link util_touch_file_async}
     */
    function util_touch_file_async<Z = unknown>(
        file: Gio.File
    ): globalThis.Promise<boolean>;
    function util_touch_file_finish(
        file: Gio.File,
        res: Gio.AsyncResult
    ): boolean;
    /**
     * Translate `str` according to the locale defined by LC_TIME; unlike
     * dcgettext(), the translations is still taken from the LC_MESSAGES
     * catalogue and not the LC_TIME one.
     * @param str String to translate
     * @returns the translated string
     */
    function util_translate_time_string(str: string | null): string | null;
    /**
     * Implements libc standard WIFEXITED, that cannot be used JS
     * code.
     * @param status the status returned by wait() or waitpid()
     * @returns TRUE if the process exited normally, FALSE otherwise
     */
    function util_wifexited(
        status: number
    ): [/* returnType */ boolean, /* exit */ number];
    /**
     * Write a string to a GOutputStream as UTF-8. This is a workaround
     * for not having binary buffers in GJS.
     * @param stream a #GOutputStream
     * @param str a UTF-8 string to write to `stream`
     * @returns %TRUE if write succeeded
     */
    function write_string_to_stream(
        stream: Gio.OutputStream,
        str: string | null
    ): boolean;
    interface LeisureFunction {
        (data: any | null): void;
    }
    interface PerfReplayFunction {
        (
            time: number,
            name: string | null,
            signature: string | null,
            arg: any
        ): void;
    }
    interface PerfStatisticsCallback {
        (perf_log: PerfLog, data: any | null): void;
    }
    module App {
        // Signal callback interfaces

        /**
         * Signal callback interface for `windows-changed`
         */
        interface WindowsChangedSignalCallback {
            ($obj: App): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Shell-13.Shell.App

            /**
             * The #GDesktopAppInfo associated with this ShellApp, if any.
             */
            app_info?: Gio.DesktopAppInfo | null;
        }
    }

    interface App {
        // Own properties of Shell-13.Shell.App

        /**
         * The #GDBusActionGroup associated with this ShellApp, if any. See the
         * documentation of #GApplication and #GActionGroup for details.
         */
        readonly action_group: Gio.ActionGroup;
        /**
         * The #GDesktopAppInfo associated with this ShellApp, if any.
         */
        readonly app_info: Gio.DesktopAppInfo;
        /**
         * Whether the application has marked itself as busy.
         */
        readonly busy: boolean;
        /**
         * The #GIcon representing this ShellApp
         */
        readonly icon: Gio.Icon;
        /**
         * The id of this application (a desktop filename, or a special string
         * like window:0xabcd1234)
         */
        readonly id: string | null;
        /**
         * The high-level state of the application, effectively whether it's
         * running or not, or transitioning between those states.
         */
        readonly state: AppState;

        // Owm methods of Shell-13.Shell.App

        /**
         * Like shell_app_activate_full(), but using the default workspace and
         * event timestamp.
         */
        activate(): void;
        /**
         * Perform an appropriate default action for operating on this application,
         * dependent on its current state.  For example, if the application is not
         * currently running, launch it.  If it is running, activate the most
         * recently used NORMAL window (or if that window has a transient, the most
         * recently used transient for that window).
         * @param workspace launch on this workspace, or -1 for default. Ignored if   activating an existing window
         * @param timestamp Event timestamp
         */
        activate_full(workspace: number, timestamp: number): void;
        /**
         * Bring all windows for the given app to the foreground,
         * but ensure that `window` is on top.  If `window` is %NULL,
         * the window with the most recent user time for the app
         * will be used.
         *
         * This function has no effect if `app` is not currently running.
         * @param window Window to be focused
         * @param timestamp Event timestamp
         */
        activate_window(window: Meta.Window | null, timestamp: number): void;
        /**
         * Returns %TRUE if the app supports opening a new window through
         * shell_app_open_new_window() (ie, if calling that function will
         * result in actually opening a new window and not something else,
         * like presenting the most recently active one)
         */
        can_open_new_window(): boolean;
        /**
         * Compare one #ShellApp instance to another, in the following way:
         *   - Running applications sort before not-running applications.
         *   - If one of them has non-minimized windows and the other does not,
         *     the one with visible windows is first.
         *   - Finally, the application which the user interacted with most recently
         *     compares earlier.
         * @param other A #ShellApp
         */
        compare(other: App): number;
        /**
         * Order two applications by name.
         * @param other The other app
         * @returns -1, 0, or 1; suitable for use as a comparison function for e.g. g_slist_sort()
         */
        compare_by_name(other: App): number;
        /**
         * Look up the icon for this application, and create a #ClutterActor
         * for it at the given size.
         * @param size
         * @returns A floating #ClutterActor
         */
        create_icon_texture(size: number): Clutter.Actor;
        get_app_info(): Gio.DesktopAppInfo;
        get_busy(): boolean;
        get_description(): string | null;
        /**
         * Look up the icon for this application
         * @returns A #GIcon
         */
        get_icon(): Gio.Icon;
        get_id(): string | null;
        get_n_windows(): number;
        get_name(): string | null;
        get_pids(): number[];
        get_state(): AppState;
        /**
         * Get the windows which are associated with this application. The
         * returned list will be sorted first by whether they're on the
         * active workspace, then by whether they're visible, and finally
         * by the time the user last interacted with them.
         * @returns List of windows
         */
        get_windows(): Meta.Window[];
        is_on_workspace(workspace: Meta.Workspace): boolean;
        /**
         * A window backed application is one which represents just an open
         * window, i.e. there's no .desktop file association, so we don't know
         * how to launch it again.
         */
        is_window_backed(): boolean;
        launch(
            timestamp: number,
            workspace: number,
            gpu_pref: AppLaunchGpu
        ): boolean;
        launch_action(
            action_name: string | null,
            timestamp: number,
            workspace: number
        ): void;
        /**
         * Request that the application create a new window.
         * @param workspace open on this workspace, or -1 for default
         */
        open_new_window(workspace: number): void;
        /**
         * Initiate an asynchronous request to quit this application.
         * The application may interact with the user, and the user
         * might cancel the quit request from the application UI.
         *
         * This operation may not be supported for all applications.
         * @returns %TRUE if a quit request is supported for this application
         */
        request_quit(): boolean;
        update_app_actions(window: Meta.Window): void;
        update_window_actions(window: Meta.Window): void;

        // Own signals of Shell-13.Shell.App

        connect(
            sigName: 'windows-changed',
            callback: App.WindowsChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'windows-changed',
            callback: App.WindowsChangedSignalCallback
        ): number;
        emit(sigName: 'windows-changed', ...args: any[]): void;

        // Class property signals of Shell-13.Shell.App

        connect(
            sigName: 'notify::action-group',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::action-group',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::action-group', ...args: any[]): void;
        connect(
            sigName: 'notify::app-info',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::app-info',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::app-info', ...args: any[]): void;
        connect(
            sigName: 'notify::busy',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::busy',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::busy', ...args: any[]): void;
        connect(
            sigName: 'notify::icon',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon', ...args: any[]): void;
        connect(
            sigName: 'notify::id',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::id',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::id', ...args: any[]): void;
        connect(
            sigName: 'notify::state',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::state',
            callback: ($obj: App, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::state', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class App extends GObject.Object {
        // Own properties of Shell-13.Shell.App

        static name: string;
        static $gtype: GObject.GType<App>;

        // Constructors of Shell-13.Shell.App

        constructor(config?: App.ConstructorProperties);
        _init(config?: App.ConstructorProperties): void;
    }

    module AppSystem {
        // Signal callback interfaces

        /**
         * Signal callback interface for `app-state-changed`
         */
        interface AppStateChangedSignalCallback {
            ($obj: AppSystem, object: App): void;
        }

        /**
         * Signal callback interface for `installed-changed`
         */
        interface InstalledChangedSignalCallback {
            ($obj: AppSystem): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface AppSystem {
        // Owm methods of Shell-13.Shell.AppSystem

        /**
         * Returns all installed apps, as a list of #GAppInfo
         * @returns a list of #GAppInfo   describing all known applications. This memory is owned by the   #ShellAppSystem and should not be freed.
         */
        get_installed(): Gio.AppInfo[];
        /**
         * Returns the set of applications which currently have at least one
         * open window.  The returned list will be sorted by shell_app_compare().
         * @returns Active applications
         */
        get_running(): App[];
        /**
         * Find a #ShellApp corresponding to an id.
         * @param id
         * @returns The #ShellApp for id, or %NULL if none
         */
        lookup_app(id: string | null): App;
        /**
         * Find a valid application whose .desktop file, without the extension
         * and properly canonicalized, matches `wmclass`.
         * @param wmclass A WM_CLASS value
         * @returns A #ShellApp for @wmclass
         */
        lookup_desktop_wmclass(wmclass: string | null): App;
        /**
         * Find a valid application corresponding to a given
         * heuristically determined application identifier
         * string, or %NULL if none.
         * @param id Probable application identifier
         * @returns A #ShellApp for @name
         */
        lookup_heuristic_basename(id: string | null): App;
        /**
         * Find a valid application whose .desktop file contains a
         * StartupWMClass entry matching `wmclass`.
         * @param wmclass A WM_CLASS value
         * @returns A #ShellApp for @wmclass
         */
        lookup_startup_wmclass(wmclass: string | null): App;

        // Own signals of Shell-13.Shell.AppSystem

        connect(
            sigName: 'app-state-changed',
            callback: AppSystem.AppStateChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'app-state-changed',
            callback: AppSystem.AppStateChangedSignalCallback
        ): number;
        emit(sigName: 'app-state-changed', object: App, ...args: any[]): void;
        connect(
            sigName: 'installed-changed',
            callback: AppSystem.InstalledChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'installed-changed',
            callback: AppSystem.InstalledChangedSignalCallback
        ): number;
        emit(sigName: 'installed-changed', ...args: any[]): void;

        // Class property signals of Shell-13.Shell.AppSystem

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class AppSystem extends GObject.Object {
        // Own properties of Shell-13.Shell.AppSystem

        static name: string;
        static $gtype: GObject.GType<AppSystem>;

        // Constructors of Shell-13.Shell.AppSystem

        constructor(config?: AppSystem.ConstructorProperties);
        _init(config?: AppSystem.ConstructorProperties): void;
        static get_default(): AppSystem;
        /**
         * Wrapper around g_desktop_app_info_search() that replaces results that
         * don't validate as UTF-8 with the empty string.
         * @param search_string the search string to use
         * @returns a   list of strvs.  Free each item with g_strfreev() and free the outer   list with g_free().
         */
        static search(search_string: string | null): any[];
    }

    module AppUsage {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface AppUsage {
        // Owm methods of Shell-13.Shell.AppUsage

        /**
         * Compare `id_a` and `id_b` based on frequency of use.
         * @param id_a ID of first app
         * @param id_b ID of second app
         * @returns -1 if @id_a ranks higher than @id_b, 1 if @id_b ranks higher          than @id_a, and 0 if both rank equally.
         */
        compare(id_a: string | null, id_b: string | null): number;
        get_most_used(): App[];

        // Class property signals of Shell-13.Shell.AppUsage

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class AppUsage extends GObject.Object {
        // Own properties of Shell-13.Shell.AppUsage

        static name: string;
        static $gtype: GObject.GType<AppUsage>;

        // Constructors of Shell-13.Shell.AppUsage

        constructor(config?: AppUsage.ConstructorProperties);
        _init(config?: AppUsage.ConstructorProperties): void;
        static get_default(): AppUsage;
    }

    module BlurEffect {
        // Constructor properties interface

        interface ConstructorProperties
            extends Clutter.Effect.ConstructorProperties {
            // Own constructor properties of Shell-13.Shell.BlurEffect

            brightness?: number | null;
            mode?: BlurMode | null;
            sigma?: number | null;
        }
    }

    interface BlurEffect {
        // Own properties of Shell-13.Shell.BlurEffect

        brightness: number;
        mode: BlurMode;
        sigma: number;

        // Owm methods of Shell-13.Shell.BlurEffect

        get_brightness(): number;
        get_mode(): BlurMode;
        get_sigma(): number;
        set_brightness(brightness: number): void;
        set_mode(mode: BlurMode): void;
        set_sigma(sigma: number): void;

        // Class property signals of Shell-13.Shell.BlurEffect

        connect(
            sigName: 'notify::brightness',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::brightness',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::brightness', ...args: any[]): void;
        connect(
            sigName: 'notify::mode',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mode',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mode', ...args: any[]): void;
        connect(
            sigName: 'notify::sigma',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::sigma',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::sigma', ...args: any[]): void;
        connect(
            sigName: 'notify::actor',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actor',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actor', ...args: any[]): void;
        connect(
            sigName: 'notify::enabled',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::enabled',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::enabled', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: BlurEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class BlurEffect extends Clutter.Effect {
        // Own properties of Shell-13.Shell.BlurEffect

        static name: string;
        static $gtype: GObject.GType<BlurEffect>;

        // Constructors of Shell-13.Shell.BlurEffect

        constructor(config?: BlurEffect.ConstructorProperties);
        constructor();
        static new(): BlurEffect;
        _init(config?: BlurEffect.ConstructorProperties): void;
    }

    module CameraMonitor {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface CameraMonitor {
        // Own properties of Shell-13.Shell.CameraMonitor

        readonly cameras_in_use: boolean;

        // Class property signals of Shell-13.Shell.CameraMonitor

        connect(
            sigName: 'notify::cameras-in-use',
            callback: ($obj: CameraMonitor, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::cameras-in-use',
            callback: ($obj: CameraMonitor, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::cameras-in-use', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class CameraMonitor extends GObject.Object {
        // Own properties of Shell-13.Shell.CameraMonitor

        static name: string;
        static $gtype: GObject.GType<CameraMonitor>;

        // Constructors of Shell-13.Shell.CameraMonitor

        constructor(config?: CameraMonitor.ConstructorProperties);
        _init(config?: CameraMonitor.ConstructorProperties): void;
    }

    module GLSLEffect {
        // Constructor properties interface

        interface ConstructorProperties
            extends Clutter.OffscreenEffect.ConstructorProperties {}
    }

    interface GLSLEffect {
        // Own fields of Shell-13.Shell.GLSLEffect

        parent_instance: Clutter.OffscreenEffect & GObject.InitiallyUnowned;

        // Owm methods of Shell-13.Shell.GLSLEffect

        /**
         * Adds a GLSL snippet to the pipeline used for drawing the effect texture.
         * See #CoglSnippet for details.
         *
         * This is only valid inside the a call to the build_pipeline() virtual
         * function.
         * @param hook where to insert the code
         * @param declarations GLSL declarations
         * @param code GLSL code
         * @param is_replace whether Cogl code should be replaced by the custom shader
         */
        add_glsl_snippet(
            hook: SnippetHook,
            declarations: string | null,
            code: string | null,
            is_replace: boolean
        ): void;
        get_uniform_location(name: string | null): number;
        set_uniform_float(
            uniform: number,
            n_components: number,
            value: number[]
        ): void;
        set_uniform_matrix(
            uniform: number,
            transpose: boolean,
            dimensions: number,
            value: number[]
        ): void;

        // Own virtual methods of Shell-13.Shell.GLSLEffect

        vfunc_build_pipeline(): void;

        // Class property signals of Shell-13.Shell.GLSLEffect

        connect(
            sigName: 'notify::actor',
            callback: ($obj: GLSLEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actor',
            callback: ($obj: GLSLEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actor', ...args: any[]): void;
        connect(
            sigName: 'notify::enabled',
            callback: ($obj: GLSLEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::enabled',
            callback: ($obj: GLSLEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::enabled', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: GLSLEffect, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: GLSLEffect, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class GLSLEffect extends Clutter.OffscreenEffect {
        // Own properties of Shell-13.Shell.GLSLEffect

        static name: string;
        static $gtype: GObject.GType<GLSLEffect>;

        // Constructors of Shell-13.Shell.GLSLEffect

        constructor(config?: GLSLEffect.ConstructorProperties);
        _init(config?: GLSLEffect.ConstructorProperties): void;
    }

    module Global {
        // Signal callback interfaces

        /**
         * Signal callback interface for `locate-pointer`
         */
        interface LocatePointerSignalCallback {
            ($obj: Global): void;
        }

        /**
         * Signal callback interface for `notify-error`
         */
        interface NotifyErrorSignalCallback {
            ($obj: Global, object: string | null, p0: string | null): void;
        }

        /**
         * Signal callback interface for `shutdown`
         */
        interface ShutdownSignalCallback {
            ($obj: Global): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Shell-13.Shell.Global

            automation_script?: Gio.File | null;
            force_animations?: boolean | null;
            frame_finish_timestamp?: boolean | null;
            frame_timestamps?: boolean | null;
            session_mode?: string | null;
        }
    }

    interface Global {
        // Own properties of Shell-13.Shell.Global

        readonly automation_script: Gio.File;
        readonly backend: Meta.Backend;
        readonly compositor: Meta.Compositor;
        readonly context: Meta.Context;
        readonly datadir: string | null;
        readonly display: Meta.Display;
        readonly focus_manager: St.FocusManager;
        force_animations: boolean;
        frame_finish_timestamp: boolean;
        frame_timestamps: boolean;
        readonly imagedir: string | null;
        readonly screen_height: number;
        readonly screen_width: number;
        readonly session_mode: string | null;
        readonly settings: Gio.Settings;
        readonly stage: Clutter.Actor;
        readonly switcheroo_control: Gio.DBusProxy;
        readonly top_window_group: Clutter.Actor;
        readonly userdatadir: string | null;
        readonly window_group: Clutter.Actor;
        readonly window_manager: WM;
        readonly workspace_manager: Meta.WorkspaceManager;

        // Owm methods of Shell-13.Shell.Global

        /**
         * Marks that we are currently doing work. This is used to to track
         * whether we are busy for the purposes of shell_global_run_at_leisure().
         * A count is kept and shell_global_end_work() must be called exactly
         * as many times as shell_global_begin_work().
         */
        begin_work(): void;
        /**
         * Create a #GAppLaunchContext set up with the correct timestamp, and
         * targeted to activate on the current workspace.
         * @param timestamp the timestamp for the launch (or 0 for current time)
         * @param workspace a workspace index, or -1 to indicate the current one
         * @returns A new #GAppLaunchContext
         */
        create_app_launch_context(
            timestamp: number,
            workspace: number
        ): Gio.AppLaunchContext;
        /**
         * Marks the end of work that we started with shell_global_begin_work().
         * If no other work is ongoing and functions have been added with
         * shell_global_run_at_leisure(), they will be run at the next
         * opportunity.
         */
        end_work(): void;
        /**
         * Gets app system.
         * @returns the app system
         */
        get_app_system(): AppSystem;
        /**
         * Gets app usage.
         * @returns the app usage
         */
        get_app_usage(): AppUsage;
        get_context(): Meta.Context;
        get_current_time(): number;
        get_display(): Meta.Display;
        /**
         * The shell maintains "persistent" state which will persist after
         * logout or reboot.
         * @param property_type Expected data type
         * @param property_name Name of the property
         * @returns The value of a serialized property, or %NULL if none stored
         */
        get_persistent_state(
            property_type: string | null,
            property_name: string | null
        ): GLib.Variant;
        /**
         * Gets the pointer coordinates and current modifier key state.
         */
        get_pointer(): [
            /* x */ number,
            /* y */ number,
            /* mods */ Clutter.ModifierType
        ];
        /**
         * The shell maintains "runtime" state which does not persist across
         * logout or reboot.
         * @param property_type Expected data type
         * @param property_name Name of the property
         * @returns The value of a serialized property, or %NULL if none stored
         */
        get_runtime_state(
            property_type: string | null,
            property_name: string | null
        ): GLib.Variant;
        get_session_mode(): string | null;
        /**
         * Get the global GSettings instance.
         * @returns The GSettings object
         */
        get_settings(): Gio.Settings;
        get_stage(): Clutter.Stage;
        /**
         * Get the global #GDBusProxy instance for the switcheroo-control
         * daemon.
         * @returns the #GDBusProxy for the daemon,   or %NULL on error.
         */
        get_switcheroo_control(): Gio.DBusProxy;
        /**
         * Gets the list of #MetaWindowActor for the plugin's screen
         * @returns the list of windows
         */
        get_window_actors(): Meta.WindowActor[];
        /**
         * Gets window tracker.
         * @returns the window tracker
         */
        get_window_tracker(): WindowTracker;
        get_workspace_manager(): Meta.WorkspaceManager;
        /**
         * Show a system error notification.  Use this function
         * when a user-initiated action results in a non-fatal problem
         * from causes that may not be under system control.  For
         * example, an application crash.
         * @param msg Error message
         * @param details Error details
         */
        notify_error(msg: string | null, details: string | null): void;
        /**
         * Restart the current process.  Only intended for development purposes.
         */
        reexec_self(): void;
        /**
         * Schedules a function to be called the next time the shell is idle.
         * Idle means here no animations, no redrawing, and no ongoing background
         * work. Since there is currently no way to hook into the Clutter master
         * clock and know when is running, the implementation here is somewhat
         * approximation. Animations may be detected as terminating early if they
         * can be drawn fast enough so that the event loop goes idle between frames.
         *
         * The intent of this function is for performance measurement runs
         * where a number of actions should be run serially and each action is
         * timed individually. Using this function for other purposes will
         * interfere with the ability to use it for performance measurement so
         * should be avoided.
         * @param func function to call at leisure
         */
        run_at_leisure(func: LeisureFunction): void;
        /**
         * Change the value of serialized persistent state.
         * @param property_name Name of the property
         * @param variant A #GVariant, or %NULL to unset
         */
        set_persistent_state(
            property_name: string | null,
            variant: GLib.Variant | null
        ): void;
        /**
         * Change the value of serialized runtime state.
         * @param property_name Name of the property
         * @param variant A #GVariant, or %NULL to unset
         */
        set_runtime_state(
            property_name: string | null,
            variant: GLib.Variant | null
        ): void;
        /**
         * Sets the area of the stage that is responsive to mouse clicks when
         * we don't have a modal or grab.
         * @param rectangles a list of #MtkRectangle describing the input region.
         */
        set_stage_input_region(rectangles: Mtk.Rectangle[]): void;

        // Own signals of Shell-13.Shell.Global

        connect(
            sigName: 'locate-pointer',
            callback: Global.LocatePointerSignalCallback
        ): number;
        connect_after(
            sigName: 'locate-pointer',
            callback: Global.LocatePointerSignalCallback
        ): number;
        emit(sigName: 'locate-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify-error',
            callback: Global.NotifyErrorSignalCallback
        ): number;
        connect_after(
            sigName: 'notify-error',
            callback: Global.NotifyErrorSignalCallback
        ): number;
        emit(
            sigName: 'notify-error',
            object: string | null,
            p0: string | null,
            ...args: any[]
        ): void;
        connect(
            sigName: 'shutdown',
            callback: Global.ShutdownSignalCallback
        ): number;
        connect_after(
            sigName: 'shutdown',
            callback: Global.ShutdownSignalCallback
        ): number;
        emit(sigName: 'shutdown', ...args: any[]): void;

        // Class property signals of Shell-13.Shell.Global

        connect(
            sigName: 'notify::automation-script',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::automation-script',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::automation-script', ...args: any[]): void;
        connect(
            sigName: 'notify::backend',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::backend',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::backend', ...args: any[]): void;
        connect(
            sigName: 'notify::compositor',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::compositor',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::compositor', ...args: any[]): void;
        connect(
            sigName: 'notify::context',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::context',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::context', ...args: any[]): void;
        connect(
            sigName: 'notify::datadir',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::datadir',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::datadir', ...args: any[]): void;
        connect(
            sigName: 'notify::display',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::display',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::display', ...args: any[]): void;
        connect(
            sigName: 'notify::focus-manager',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::focus-manager',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::focus-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::force-animations',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::force-animations',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::force-animations', ...args: any[]): void;
        connect(
            sigName: 'notify::frame-finish-timestamp',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::frame-finish-timestamp',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::frame-finish-timestamp', ...args: any[]): void;
        connect(
            sigName: 'notify::frame-timestamps',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::frame-timestamps',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::frame-timestamps', ...args: any[]): void;
        connect(
            sigName: 'notify::imagedir',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::imagedir',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::imagedir', ...args: any[]): void;
        connect(
            sigName: 'notify::screen-height',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::screen-height',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::screen-height', ...args: any[]): void;
        connect(
            sigName: 'notify::screen-width',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::screen-width',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::screen-width', ...args: any[]): void;
        connect(
            sigName: 'notify::session-mode',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::session-mode',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::session-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::settings',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::settings',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::settings', ...args: any[]): void;
        connect(
            sigName: 'notify::stage',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::stage',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::stage', ...args: any[]): void;
        connect(
            sigName: 'notify::switcheroo-control',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::switcheroo-control',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::switcheroo-control', ...args: any[]): void;
        connect(
            sigName: 'notify::top-window-group',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::top-window-group',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::top-window-group', ...args: any[]): void;
        connect(
            sigName: 'notify::userdatadir',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::userdatadir',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::userdatadir', ...args: any[]): void;
        connect(
            sigName: 'notify::window-group',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::window-group',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::window-group', ...args: any[]): void;
        connect(
            sigName: 'notify::window-manager',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::window-manager',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::window-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::workspace-manager',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::workspace-manager',
            callback: ($obj: Global, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::workspace-manager', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Global extends GObject.Object {
        // Own properties of Shell-13.Shell.Global

        static name: string;
        static $gtype: GObject.GType<Global>;

        // Constructors of Shell-13.Shell.Global

        constructor(config?: Global.ConstructorProperties);
        _init(config?: Global.ConstructorProperties): void;
        /**
         * Gets the singleton global object that represents the desktop.
         * @returns the singleton global object
         */
        static get(): Global;
    }

    module InvertLightnessEffect {
        // Constructor properties interface

        interface ConstructorProperties
            extends Clutter.OffscreenEffect.ConstructorProperties {}
    }

    interface InvertLightnessEffect {
        // Class property signals of Shell-13.Shell.InvertLightnessEffect

        connect(
            sigName: 'notify::actor',
            callback: (
                $obj: InvertLightnessEffect,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::actor',
            callback: (
                $obj: InvertLightnessEffect,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::actor', ...args: any[]): void;
        connect(
            sigName: 'notify::enabled',
            callback: (
                $obj: InvertLightnessEffect,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::enabled',
            callback: (
                $obj: InvertLightnessEffect,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::enabled', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: (
                $obj: InvertLightnessEffect,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: (
                $obj: InvertLightnessEffect,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class InvertLightnessEffect extends Clutter.OffscreenEffect {
        // Own properties of Shell-13.Shell.InvertLightnessEffect

        static name: string;
        static $gtype: GObject.GType<InvertLightnessEffect>;

        // Constructors of Shell-13.Shell.InvertLightnessEffect

        constructor(config?: InvertLightnessEffect.ConstructorProperties);
        /**
         * Creates a new #ShellInvertLightnessEffect to be used with
         * clutter_actor_add_effect()
         * @constructor
         * @returns the newly created #ShellInvertLightnessEffect or %NULL.  Use g_object_unref() when done.
         */
        constructor();
        /**
         * Creates a new #ShellInvertLightnessEffect to be used with
         * clutter_actor_add_effect()
         * @constructor
         * @returns the newly created #ShellInvertLightnessEffect or %NULL.  Use g_object_unref() when done.
         */
        static new(): InvertLightnessEffect;
        _init(config?: InvertLightnessEffect.ConstructorProperties): void;
    }

    module KeyringPrompt {
        // Signal callback interfaces

        /**
         * Signal callback interface for `show-confirm`
         */
        interface ShowConfirmSignalCallback {
            ($obj: KeyringPrompt): void;
        }

        /**
         * Signal callback interface for `show-password`
         */
        interface ShowPasswordSignalCallback {
            ($obj: KeyringPrompt): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Gcr.Prompt.ConstructorProperties,
                GObject.Object.ConstructorProperties {
            // Own constructor properties of Shell-13.Shell.KeyringPrompt

            /**
             * Text field for confirmation password
             */
            confirm_actor?: Clutter.Text | null;
            /**
             * Text field for password
             */
            password_actor?: Clutter.Text | null;
        }
    }

    interface KeyringPrompt extends Gcr.Prompt {
        // Own properties of Shell-13.Shell.KeyringPrompt

        /**
         * Whether the choice check box is visible or not.
         */
        readonly choice_visible: boolean;
        /**
         * Text field for confirmation password
         */
        confirm_actor: Clutter.Text;
        /**
         * Whether the password confirm entry is visible or not.
         */
        readonly confirm_visible: boolean;
        /**
         * Text field for password
         */
        password_actor: Clutter.Text;
        /**
         * Whether the password entry is visible or not.
         */
        readonly password_visible: boolean;
        /**
         * Whether the warning label is visible or not.
         */
        readonly warning_visible: boolean;

        // Owm methods of Shell-13.Shell.KeyringPrompt

        /**
         * Called by implementation when the prompt is cancelled.
         */
        cancel(): void;
        /**
         * Called by the implementation when the prompt completes. There are various
         * checks done. %TRUE is returned if the prompt actually should complete.
         * @returns whether the prompt completed
         */
        complete(): boolean;
        /**
         * Get the prompt password text actor
         * @returns the password actor
         */
        get_confirm_actor(): Clutter.Text | null;
        /**
         * Get the prompt password text actor
         * @returns the password actor
         */
        get_password_actor(): Clutter.Text | null;
        /**
         * Set the prompt password confirmation text actor
         * @param confirm_actor the confirm password actor
         */
        set_confirm_actor(confirm_actor: Clutter.Text | null): void;
        /**
         * Set the prompt password text actor
         * @param password_actor the password actor
         */
        set_password_actor(password_actor: Clutter.Text | null): void;

        // Own signals of Shell-13.Shell.KeyringPrompt

        connect(
            sigName: 'show-confirm',
            callback: KeyringPrompt.ShowConfirmSignalCallback
        ): number;
        connect_after(
            sigName: 'show-confirm',
            callback: KeyringPrompt.ShowConfirmSignalCallback
        ): number;
        emit(sigName: 'show-confirm', ...args: any[]): void;
        connect(
            sigName: 'show-password',
            callback: KeyringPrompt.ShowPasswordSignalCallback
        ): number;
        connect_after(
            sigName: 'show-password',
            callback: KeyringPrompt.ShowPasswordSignalCallback
        ): number;
        emit(sigName: 'show-password', ...args: any[]): void;

        // Class property signals of Shell-13.Shell.KeyringPrompt

        connect(
            sigName: 'notify::choice-visible',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::choice-visible',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::choice-visible', ...args: any[]): void;
        connect(
            sigName: 'notify::confirm-actor',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::confirm-actor',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::confirm-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::confirm-visible',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::confirm-visible',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::confirm-visible', ...args: any[]): void;
        connect(
            sigName: 'notify::password-actor',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::password-actor',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::password-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::password-visible',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::password-visible',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::password-visible', ...args: any[]): void;
        connect(
            sigName: 'notify::warning-visible',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::warning-visible',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::warning-visible', ...args: any[]): void;
        connect(
            sigName: 'notify::caller-window',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::caller-window',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::caller-window', ...args: any[]): void;
        connect(
            sigName: 'notify::cancel-label',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::cancel-label',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::cancel-label', ...args: any[]): void;
        connect(
            sigName: 'notify::choice-chosen',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::choice-chosen',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::choice-chosen', ...args: any[]): void;
        connect(
            sigName: 'notify::choice-label',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::choice-label',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::choice-label', ...args: any[]): void;
        connect(
            sigName: 'notify::continue-label',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::continue-label',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::continue-label', ...args: any[]): void;
        connect(
            sigName: 'notify::description',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::description',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::description', ...args: any[]): void;
        connect(
            sigName: 'notify::message',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::message',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::message', ...args: any[]): void;
        connect(
            sigName: 'notify::password-new',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::password-new',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::password-new', ...args: any[]): void;
        connect(
            sigName: 'notify::password-strength',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::password-strength',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::password-strength', ...args: any[]): void;
        connect(
            sigName: 'notify::title',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::title',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::title', ...args: any[]): void;
        connect(
            sigName: 'notify::warning',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::warning',
            callback: ($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::warning', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class KeyringPrompt extends GObject.Object {
        // Own properties of Shell-13.Shell.KeyringPrompt

        static name: string;
        static $gtype: GObject.GType<KeyringPrompt>;

        // Constructors of Shell-13.Shell.KeyringPrompt

        constructor(config?: KeyringPrompt.ConstructorProperties);
        /**
         * Create new internal prompt base
         * @constructor
         * @returns new internal prompt
         */
        constructor();
        /**
         * Create new internal prompt base
         * @constructor
         * @returns new internal prompt
         */
        static new(): KeyringPrompt;
        _init(config?: KeyringPrompt.ConstructorProperties): void;
    }

    module MountOperation {
        // Signal callback interfaces

        /**
         * Signal callback interface for `show-processes-2`
         */
        interface ShowProcesses2SignalCallback {
            ($obj: MountOperation): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Gio.MountOperation.ConstructorProperties {}
    }

    interface MountOperation {
        // Owm methods of Shell-13.Shell.MountOperation

        get_show_processes_choices(): string[];
        get_show_processes_message(): string | null;
        get_show_processes_pids(): GLib.Pid[];

        // Own signals of Shell-13.Shell.MountOperation

        connect(
            sigName: 'show-processes-2',
            callback: MountOperation.ShowProcesses2SignalCallback
        ): number;
        connect_after(
            sigName: 'show-processes-2',
            callback: MountOperation.ShowProcesses2SignalCallback
        ): number;
        emit(sigName: 'show-processes-2', ...args: any[]): void;

        // Class property signals of Shell-13.Shell.MountOperation

        connect(
            sigName: 'notify::anonymous',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::anonymous',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::anonymous', ...args: any[]): void;
        connect(
            sigName: 'notify::choice',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::choice',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::choice', ...args: any[]): void;
        connect(
            sigName: 'notify::domain',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::domain',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::domain', ...args: any[]): void;
        connect(
            sigName: 'notify::is-tcrypt-hidden-volume',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-tcrypt-hidden-volume',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-tcrypt-hidden-volume', ...args: any[]): void;
        connect(
            sigName: 'notify::is-tcrypt-system-volume',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-tcrypt-system-volume',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-tcrypt-system-volume', ...args: any[]): void;
        connect(
            sigName: 'notify::password',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::password',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::password', ...args: any[]): void;
        connect(
            sigName: 'notify::password-save',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::password-save',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::password-save', ...args: any[]): void;
        connect(
            sigName: 'notify::pim',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pim',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pim', ...args: any[]): void;
        connect(
            sigName: 'notify::username',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::username',
            callback: ($obj: MountOperation, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::username', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MountOperation extends Gio.MountOperation {
        // Own properties of Shell-13.Shell.MountOperation

        static name: string;
        static $gtype: GObject.GType<MountOperation>;

        // Constructors of Shell-13.Shell.MountOperation

        constructor(config?: MountOperation.ConstructorProperties);
        constructor();
        static new(): MountOperation;
        _init(config?: MountOperation.ConstructorProperties): void;
    }

    module NetworkAgent {
        // Signal callback interfaces

        /**
         * Signal callback interface for `cancel-request`
         */
        interface CancelRequestSignalCallback {
            ($obj: NetworkAgent, object: string | null): void;
        }

        /**
         * Signal callback interface for `new-request`
         */
        interface NewRequestSignalCallback {
            (
                $obj: NetworkAgent,
                object: string | null,
                p0: NM.Connection,
                p1: string | null,
                p2: string[],
                p3: number
            ): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Gio.AsyncInitable.ConstructorProperties,
                Gio.Initable.ConstructorProperties,
                NM.SecretAgentOld.ConstructorProperties {}
    }

    interface NetworkAgent extends Gio.AsyncInitable, Gio.Initable {
        // Owm methods of Shell-13.Shell.NetworkAgent

        add_vpn_secret(
            request_id: string | null,
            setting_key: string | null,
            setting_value: string | null
        ): void;
        respond(
            request_id: string | null,
            response: NetworkAgentResponse
        ): void;
        search_vpn_plugin(
            service: string | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;
        search_vpn_plugin_finish(
            result: Gio.AsyncResult
        ): NM.VpnPluginInfo | null;
        set_password(
            request_id: string | null,
            setting_key: string | null,
            setting_value: string | null
        ): void;

        // Own signals of Shell-13.Shell.NetworkAgent

        connect(
            sigName: 'cancel-request',
            callback: NetworkAgent.CancelRequestSignalCallback
        ): number;
        connect_after(
            sigName: 'cancel-request',
            callback: NetworkAgent.CancelRequestSignalCallback
        ): number;
        emit(
            sigName: 'cancel-request',
            object: string | null,
            ...args: any[]
        ): void;
        connect(
            sigName: 'new-request',
            callback: NetworkAgent.NewRequestSignalCallback
        ): number;
        connect_after(
            sigName: 'new-request',
            callback: NetworkAgent.NewRequestSignalCallback
        ): number;
        emit(
            sigName: 'new-request',
            object: string | null,
            p0: NM.Connection,
            p1: string | null,
            p2: string[],
            p3: number,
            ...args: any[]
        ): void;

        // Class property signals of Shell-13.Shell.NetworkAgent

        connect(
            sigName: 'notify::auto-register',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::auto-register',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::auto-register', ...args: any[]): void;
        connect(
            sigName: 'notify::capabilities',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::capabilities',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::capabilities', ...args: any[]): void;
        connect(
            sigName: 'notify::dbus-connection',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::dbus-connection',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::dbus-connection', ...args: any[]): void;
        connect(
            sigName: 'notify::identifier',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::identifier',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::identifier', ...args: any[]): void;
        connect(
            sigName: 'notify::registered',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::registered',
            callback: ($obj: NetworkAgent, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::registered', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class NetworkAgent extends NM.SecretAgentOld {
        // Own properties of Shell-13.Shell.NetworkAgent

        static name: string;
        static $gtype: GObject.GType<NetworkAgent>;

        // Constructors of Shell-13.Shell.NetworkAgent

        constructor(config?: NetworkAgent.ConstructorProperties);
        _init(config?: NetworkAgent.ConstructorProperties): void;
    }

    module PerfLog {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface PerfLog {
        // Owm methods of Shell-13.Shell.PerfLog

        /**
         * Adds a function that will be called before statistics are recorded.
         * The function would typically compute one or more statistics values
         * and call a function such as shell_perf_log_update_statistic_i()
         * to update the value that will be recorded.
         * @param callback function to call before recording statistics
         */
        add_statistics_callback(callback: PerfStatisticsCallback): void;
        /**
         * Calls all the update functions added with
         * shell_perf_log_add_statistics_callback() and then records events
         * for all statistics, followed by a perf.statisticsCollected event.
         */
        collect_statistics(): void;
        /**
         * Defines a performance event for later recording.
         * @param name name of the event. This should of the form   '<namespace>.<specific eventf'>, for example   'clutter.stagePaintDone'.
         * @param description human readable description of the event.
         * @param signature signature defining the arguments that event takes.   This is a string of type characters, using the same characters   as D-Bus or GVariant. Only a very limited number of signatures   are supported: , '', 's', 'i', and 'x'. This mean respectively:   no arguments, one string, one 32-bit integer, and one 64-bit   integer.
         */
        define_event(
            name: string | null,
            description: string | null,
            signature: string | null
        ): void;
        /**
         * Defines a statistic. A statistic is a numeric value that is stored
         * by the performance log and recorded periodically or when
         * shell_perf_log_collect_statistics() is called explicitly.
         *
         * Code that defines a statistic should update it by calling
         * the update function for the particular data type of the statistic,
         * such as shell_perf_log_update_statistic_i(). This can be done
         * at any time, but would normally done inside a function registered
         * with shell_perf_log_add_statistics_callback(). These functions
         * are called immediately before statistics are recorded.
         * @param name name of the statistic and of the corresponding event.  This should follow the same guidelines as for shell_perf_log_define_event()
         * @param description human readable description of the statistic.
         * @param signature The type of the data stored for statistic. Must  currently be 'i' or 'x'.
         */
        define_statistic(
            name: string | null,
            description: string | null,
            signature: string | null
        ): void;
        /**
         * Dump the definition of currently defined events and statistics, formatted
         * as JSON, to the specified output stream. The JSON output is an array,
         * with each element being a dictionary of the form:
         *
         * { name: <name of event>,
         *   description: <description of string,
         *   statistic: true } (only for statistics)
         * @param out output stream into which to write the event definitions
         * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
         */
        dump_events(out: Gio.OutputStream): boolean;
        /**
         * Writes the performance event log, formatted as JSON, to the specified
         * output stream. For performance reasons, the output stream passed
         * in should generally be a buffered (or memory) output stream, since
         * it will be written to in small pieces. The JSON output is an array
         * with the elements of the array also being arrays, of the form
         * '[' <time>, <event name> [, <event_arg>... ] ']'.
         * @param out output stream into which to write the event log
         * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
         */
        dump_log(out: Gio.OutputStream): boolean;
        /**
         * Records a performance event with no arguments.
         * @param name name of the event
         */
        event(name: string | null): void;
        /**
         * Records a performance event with one 32-bit integer argument.
         * @param name name of the event
         * @param arg the argument
         */
        event_i(name: string | null, arg: number): void;
        /**
         * Records a performance event with one string argument.
         * @param name name of the event
         * @param arg the argument
         */
        event_s(name: string | null, arg: string | null): void;
        /**
         * Records a performance event with one 64-bit integer argument.
         * @param name name of the event
         * @param arg the argument
         */
        event_x(name: string | null, arg: number): void;
        /**
         * Replays the log by calling the given function for each event
         * in the log.
         * @param replay_function function to call for each event in the log
         */
        replay(replay_function: PerfReplayFunction): void;
        /**
         * Sets whether events are currently being recorded.
         * @param enabled whether to record events
         */
        set_enabled(enabled: boolean): void;
        /**
         * Updates the current value of an 32-bit integer statistic.
         * @param name name of the statistic
         * @param value new value for the statistic
         */
        update_statistic_i(name: string | null, value: number): void;
        /**
         * Updates the current value of an 64-bit integer statistic.
         * @param name name of the statistic
         * @param value new value for the statistic
         */
        update_statistic_x(name: string | null, value: number): void;

        // Class property signals of Shell-13.Shell.PerfLog

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class PerfLog extends GObject.Object {
        // Own properties of Shell-13.Shell.PerfLog

        static name: string;
        static $gtype: GObject.GType<PerfLog>;

        // Constructors of Shell-13.Shell.PerfLog

        constructor(config?: PerfLog.ConstructorProperties);
        _init(config?: PerfLog.ConstructorProperties): void;
        /**
         * Gets the global singleton performance log. This is initially disabled
         * and must be explicitly enabled with shell_perf_log_set_enabled().
         * @returns the global singleton performance log
         */
        static get_default(): PerfLog;
    }

    module PolkitAuthenticationAgent {
        // Signal callback interfaces

        /**
         * Signal callback interface for `cancel`
         */
        interface CancelSignalCallback {
            ($obj: PolkitAuthenticationAgent): void;
        }

        /**
         * Signal callback interface for `initiate`
         */
        interface InitiateSignalCallback {
            (
                $obj: PolkitAuthenticationAgent,
                object: string | null,
                p0: string | null,
                p1: string | null,
                p2: string | null,
                p3: string[]
            ): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends PolkitAgent.Listener.ConstructorProperties {}
    }

    interface PolkitAuthenticationAgent {
        // Owm methods of Shell-13.Shell.PolkitAuthenticationAgent

        complete(dismissed: boolean): void;
        register(): void;

        // Overloads of register

        /**
         * Registers `listener` with the PolicyKit daemon as an authentication
         * agent for `subject`. This is implemented by registering a D-Bus
         * object at `object_path` on the unique name assigned by the system
         * message bus.
         *
         * Whenever the PolicyKit daemon needs to authenticate a processes
         * that is related to `subject,` the methods
         * polkit_agent_listener_initiate_authentication() and
         * polkit_agent_listener_initiate_authentication_finish() will be
         * invoked on `listener`.
         *
         * Note that registration of an authentication agent can fail; for
         * example another authentication agent may already be registered for
         * `subject`.
         *
         * Note that the calling thread is blocked until a reply is received.
         * @param flags A set of flags from the #PolkitAgentRegisterFlags enumeration.
         * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
         * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %NULL if @error is set, otherwise a registration handle that can be used with polkit_agent_listener_unregister().
         */
        register(
            flags: PolkitAgent.RegisterFlags,
            subject: Polkit.Subject,
            object_path: string | null,
            cancellable: Gio.Cancellable | null
        ): any | null;
        unregister(): void;

        // Own signals of Shell-13.Shell.PolkitAuthenticationAgent

        connect(
            sigName: 'cancel',
            callback: PolkitAuthenticationAgent.CancelSignalCallback
        ): number;
        connect_after(
            sigName: 'cancel',
            callback: PolkitAuthenticationAgent.CancelSignalCallback
        ): number;
        emit(sigName: 'cancel', ...args: any[]): void;
        connect(
            sigName: 'initiate',
            callback: PolkitAuthenticationAgent.InitiateSignalCallback
        ): number;
        connect_after(
            sigName: 'initiate',
            callback: PolkitAuthenticationAgent.InitiateSignalCallback
        ): number;
        emit(
            sigName: 'initiate',
            object: string | null,
            p0: string | null,
            p1: string | null,
            p2: string | null,
            p3: string[],
            ...args: any[]
        ): void;

        // Class property signals of Shell-13.Shell.PolkitAuthenticationAgent

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class PolkitAuthenticationAgent extends PolkitAgent.Listener {
        // Own properties of Shell-13.Shell.PolkitAuthenticationAgent

        static name: string;
        static $gtype: GObject.GType<PolkitAuthenticationAgent>;

        // Constructors of Shell-13.Shell.PolkitAuthenticationAgent

        constructor(config?: PolkitAuthenticationAgent.ConstructorProperties);
        constructor();
        static new(): PolkitAuthenticationAgent;
        _init(config?: PolkitAuthenticationAgent.ConstructorProperties): void;
    }

    module Screenshot {
        // Signal callback interfaces

        /**
         * Signal callback interface for `screenshot-taken`
         */
        interface ScreenshotTakenSignalCallback {
            ($obj: Screenshot, object: Mtk.Rectangle): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface Screenshot {
        // Owm methods of Shell-13.Shell.Screenshot

        /**
         * Picks the pixel at `x,` `y` and returns its color as #ClutterColor.
         * @param x The X coordinate to pick
         * @param y The Y coordinate to pick
         * @param callback function to call returning success or failure of the async grabbing
         */
        pick_color(
            x: number,
            y: number,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_pick_color()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        pick_color_finish(
            result: Gio.AsyncResult
        ): [/* returnType */ boolean, /* color */ Clutter.Color];
        /**
         * Takes a screenshot of the whole screen
         * in `stream` as png image.
         * @param include_cursor Whether to include the cursor or not
         * @param stream The stream for the screenshot
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot(
            include_cursor: boolean,
            stream: Gio.OutputStream,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;
        /**
         * Takes a screenshot of the passed in area and saves it
         * in `stream` as png image.
         * @param x The X coordinate of the area
         * @param y The Y coordinate of the area
         * @param width The width of the area
         * @param height The height of the area
         * @param stream The stream for the screenshot
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot_area(
            x: number,
            y: number,
            width: number,
            height: number,
            stream: Gio.OutputStream,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot_area()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_area_finish(
            result: Gio.AsyncResult
        ): [/* returnType */ boolean, /* area */ Mtk.Rectangle];
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_finish(
            result: Gio.AsyncResult
        ): [/* returnType */ boolean, /* area */ Mtk.Rectangle];
        /**
         * Takes a screenshot of the whole screen as #ClutterContent.
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot_stage_to_content(
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;
        /**
         * Finish the asynchronous operation started by
         * shell_screenshot_screenshot_stage_to_content() and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns the #ClutterContent, or NULL
         */
        screenshot_stage_to_content_finish(
            result: Gio.AsyncResult
        ): [
            /* returnType */ Clutter.Content,
            /* scale */ number,
            /* cursor_content */ Clutter.Content,
            /* cursor_point */ Graphene.Point,
            /* cursor_scale */ number
        ];
        /**
         * Takes a screenshot of the focused window (optionally omitting the frame)
         * in `stream` as png image.
         * @param include_frame Whether to include the frame or not
         * @param include_cursor Whether to include the cursor or not
         * @param stream The stream for the screenshot
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot_window(
            include_frame: boolean,
            include_cursor: boolean,
            stream: Gio.OutputStream,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot_window()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_window_finish(
            result: Gio.AsyncResult
        ): [/* returnType */ boolean, /* area */ Mtk.Rectangle];

        // Own signals of Shell-13.Shell.Screenshot

        connect(
            sigName: 'screenshot-taken',
            callback: Screenshot.ScreenshotTakenSignalCallback
        ): number;
        connect_after(
            sigName: 'screenshot-taken',
            callback: Screenshot.ScreenshotTakenSignalCallback
        ): number;
        emit(
            sigName: 'screenshot-taken',
            object: Mtk.Rectangle,
            ...args: any[]
        ): void;

        // Class property signals of Shell-13.Shell.Screenshot

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Screenshot extends GObject.Object {
        // Own properties of Shell-13.Shell.Screenshot

        static name: string;
        static $gtype: GObject.GType<Screenshot>;

        // Constructors of Shell-13.Shell.Screenshot

        constructor(config?: Screenshot.ConstructorProperties);
        constructor();
        static new(): Screenshot;
        _init(config?: Screenshot.ConstructorProperties): void;
        /**
         * Composite a rectangle defined by x, y, width, height from the texture to a
         * pixbuf and write it as a PNG image into the stream.
         * @param texture the source texture
         * @param x x coordinate of the rectangle
         * @param y y coordinate of the rectangle
         * @param width width of the rectangle, or -1 to use the full texture
         * @param height height of the rectangle, or -1 to use the full texture
         * @param scale scale of the source texture
         * @param cursor the cursor texture
         * @param cursor_x x coordinate to put the cursor texture at, relative to the full source texture
         * @param cursor_y y coordinate to put the cursor texture at, relative to the full source texture
         * @param cursor_scale scale of the cursor texture
         * @param stream the stream to write the PNG image into
         * @param callback function to call returning success or failure
         */
        static composite_to_stream(
            texture: Cogl.Texture,
            x: number,
            y: number,
            width: number,
            height: number,
            scale: number,
            cursor: Cogl.Texture | null,
            cursor_x: number,
            cursor_y: number,
            cursor_scale: number,
            stream: Gio.OutputStream,
            callback: Gio.AsyncReadyCallback<Screenshot> | null
        ): void;
        /**
         * Finish the asynchronous operation started by
         * shell_screenshot_composite_to_stream () and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns a GdkPixbuf with the final image if the operation was successful, or NULL on error.
         */
        static composite_to_stream_finish(
            result: Gio.AsyncResult
        ): GdkPixbuf.Pixbuf | null;
    }

    module SecureTextBuffer {
        // Constructor properties interface

        interface ConstructorProperties
            extends Clutter.TextBuffer.ConstructorProperties {}
    }

    interface SecureTextBuffer {
        // Class property signals of Shell-13.Shell.SecureTextBuffer

        connect(
            sigName: 'notify::length',
            callback: ($obj: SecureTextBuffer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::length',
            callback: ($obj: SecureTextBuffer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::length', ...args: any[]): void;
        connect(
            sigName: 'notify::max-length',
            callback: ($obj: SecureTextBuffer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::max-length',
            callback: ($obj: SecureTextBuffer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::max-length', ...args: any[]): void;
        connect(
            sigName: 'notify::text',
            callback: ($obj: SecureTextBuffer, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text',
            callback: ($obj: SecureTextBuffer, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class SecureTextBuffer extends Clutter.TextBuffer {
        // Own properties of Shell-13.Shell.SecureTextBuffer

        static name: string;
        static $gtype: GObject.GType<SecureTextBuffer>;

        // Constructors of Shell-13.Shell.SecureTextBuffer

        constructor(config?: SecureTextBuffer.ConstructorProperties);
        constructor();
        static new(): SecureTextBuffer;
        _init(config?: SecureTextBuffer.ConstructorProperties): void;
    }

    module SquareBin {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                St.Bin.ConstructorProperties {}
    }

    interface SquareBin
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Conflicting properties

        parent_instance: St.Widget & Clutter.Actor & Clutter.Actor;

        // Class property signals of Shell-13.Shell.SquareBin

        connect(
            sigName: 'notify::child',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: SquareBin, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class SquareBin extends St.Bin {
        // Own properties of Shell-13.Shell.SquareBin

        static name: string;
        static $gtype: GObject.GType<SquareBin>;

        // Constructors of Shell-13.Shell.SquareBin

        constructor(config?: SquareBin.ConstructorProperties);
        _init(config?: SquareBin.ConstructorProperties): void;

        // Conflicting static methods

        static new(...args: any[]): any;
    }

    module Stack {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                St.Widget.ConstructorProperties {}
    }

    interface Stack
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Class property signals of Shell-13.Shell.Stack

        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: Stack, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class Stack extends St.Widget {
        // Own properties of Shell-13.Shell.Stack

        static name: string;
        static $gtype: GObject.GType<Stack>;

        // Constructors of Shell-13.Shell.Stack

        constructor(config?: Stack.ConstructorProperties);
        _init(config?: Stack.ConstructorProperties): void;
    }

    module TrayIcon {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                Clutter.Clone.ConstructorProperties {}
    }

    interface TrayIcon
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of Shell-13.Shell.TrayIcon

        readonly pid: number;
        readonly title: string | null;
        readonly wm_class: string | null;

        // Owm methods of Shell-13.Shell.TrayIcon

        /**
         * Fakes a press and release on `icon`. `event` must be a
         * %CLUTTER_BUTTON_RELEASE, %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE event.
         * Its relevant details will be passed on to the icon, but its
         * coordinates will be ignored; the click is
         * always made on the center of `icon`.
         * @param event the #ClutterEvent triggering the fake click
         */
        click(event: Clutter.Event): void;

        // Class property signals of Shell-13.Shell.TrayIcon

        connect(
            sigName: 'notify::pid',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pid',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pid', ...args: any[]): void;
        connect(
            sigName: 'notify::title',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::title',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::title', ...args: any[]): void;
        connect(
            sigName: 'notify::wm-class',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::wm-class',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::wm-class', ...args: any[]): void;
        connect(
            sigName: 'notify::source',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::source',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::source', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: TrayIcon, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class TrayIcon extends Clutter.Clone {
        // Own properties of Shell-13.Shell.TrayIcon

        static name: string;
        static $gtype: GObject.GType<TrayIcon>;

        // Constructors of Shell-13.Shell.TrayIcon

        constructor(config?: TrayIcon.ConstructorProperties);
        _init(config?: TrayIcon.ConstructorProperties): void;

        // Conflicting static methods

        static new(...args: any[]): any;
    }

    module TrayManager {
        // Signal callback interfaces

        /**
         * Signal callback interface for `tray-icon-added`
         */
        interface TrayIconAddedSignalCallback {
            ($obj: TrayManager, object: Clutter.Actor): void;
        }

        /**
         * Signal callback interface for `tray-icon-removed`
         */
        interface TrayIconRemovedSignalCallback {
            ($obj: TrayManager, object: Clutter.Actor): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Shell-13.Shell.TrayManager

            bg_color?: Clutter.Color | null;
        }
    }

    interface TrayManager {
        // Own properties of Shell-13.Shell.TrayManager

        readonly bg_color: Clutter.Color;

        // Owm methods of Shell-13.Shell.TrayManager

        manage_screen(theme_widget: St.Widget): void;
        unmanage_screen(): void;

        // Own signals of Shell-13.Shell.TrayManager

        connect(
            sigName: 'tray-icon-added',
            callback: TrayManager.TrayIconAddedSignalCallback
        ): number;
        connect_after(
            sigName: 'tray-icon-added',
            callback: TrayManager.TrayIconAddedSignalCallback
        ): number;
        emit(
            sigName: 'tray-icon-added',
            object: Clutter.Actor,
            ...args: any[]
        ): void;
        connect(
            sigName: 'tray-icon-removed',
            callback: TrayManager.TrayIconRemovedSignalCallback
        ): number;
        connect_after(
            sigName: 'tray-icon-removed',
            callback: TrayManager.TrayIconRemovedSignalCallback
        ): number;
        emit(
            sigName: 'tray-icon-removed',
            object: Clutter.Actor,
            ...args: any[]
        ): void;

        // Class property signals of Shell-13.Shell.TrayManager

        connect(
            sigName: 'notify::bg-color',
            callback: ($obj: TrayManager, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::bg-color',
            callback: ($obj: TrayManager, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::bg-color', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class TrayManager extends GObject.Object {
        // Own properties of Shell-13.Shell.TrayManager

        static name: string;
        static $gtype: GObject.GType<TrayManager>;

        // Constructors of Shell-13.Shell.TrayManager

        constructor(config?: TrayManager.ConstructorProperties);
        constructor();
        static new(): TrayManager;
        _init(config?: TrayManager.ConstructorProperties): void;
    }

    module WM {
        // Signal callback interfaces

        /**
         * Signal callback interface for `confirm-display-change`
         */
        interface ConfirmDisplayChangeSignalCallback {
            ($obj: WM): void;
        }

        /**
         * Signal callback interface for `create-close-dialog`
         */
        interface CreateCloseDialogSignalCallback {
            ($obj: WM, window: Meta.Window): Meta.CloseDialog;
        }

        /**
         * Signal callback interface for `create-inhibit-shortcuts-dialog`
         */
        interface CreateInhibitShortcutsDialogSignalCallback {
            ($obj: WM, window: Meta.Window): Meta.InhibitShortcutsDialog;
        }

        /**
         * Signal callback interface for `destroy`
         */
        interface DestroySignalCallback {
            ($obj: WM, object: Meta.WindowActor): void;
        }

        /**
         * Signal callback interface for `filter-keybinding`
         */
        interface FilterKeybindingSignalCallback {
            ($obj: WM, object: Meta.KeyBinding): boolean;
        }

        /**
         * Signal callback interface for `hide-tile-preview`
         */
        interface HideTilePreviewSignalCallback {
            ($obj: WM): void;
        }

        /**
         * Signal callback interface for `kill-switch-workspace`
         */
        interface KillSwitchWorkspaceSignalCallback {
            ($obj: WM): void;
        }

        /**
         * Signal callback interface for `kill-window-effects`
         */
        interface KillWindowEffectsSignalCallback {
            ($obj: WM, object: Meta.WindowActor): void;
        }

        /**
         * Signal callback interface for `map`
         */
        interface MapSignalCallback {
            ($obj: WM, object: Meta.WindowActor): void;
        }

        /**
         * Signal callback interface for `minimize`
         */
        interface MinimizeSignalCallback {
            ($obj: WM, object: Meta.WindowActor): void;
        }

        /**
         * Signal callback interface for `show-tile-preview`
         */
        interface ShowTilePreviewSignalCallback {
            (
                $obj: WM,
                object: Meta.Window,
                p0: Mtk.Rectangle,
                p1: number
            ): void;
        }

        /**
         * Signal callback interface for `show-window-menu`
         */
        interface ShowWindowMenuSignalCallback {
            (
                $obj: WM,
                object: Meta.Window,
                p0: number,
                p1: Mtk.Rectangle
            ): void;
        }

        /**
         * Signal callback interface for `size-change`
         */
        interface SizeChangeSignalCallback {
            (
                $obj: WM,
                object: Meta.WindowActor,
                p0: Meta.SizeChange,
                p1: Mtk.Rectangle,
                p2: Mtk.Rectangle
            ): void;
        }

        /**
         * Signal callback interface for `size-changed`
         */
        interface SizeChangedSignalCallback {
            ($obj: WM, object: Meta.WindowActor): void;
        }

        /**
         * Signal callback interface for `switch-workspace`
         */
        interface SwitchWorkspaceSignalCallback {
            ($obj: WM, object: number, p0: number, p1: number): void;
        }

        /**
         * Signal callback interface for `unminimize`
         */
        interface UnminimizeSignalCallback {
            ($obj: WM, object: Meta.WindowActor): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface WM {
        // Owm methods of Shell-13.Shell.WM

        /**
         * The plugin must call this after the user responded to the confirmation dialog.
         * @param ok if the new configuration was OK
         */
        complete_display_change(ok: boolean): void;
        /**
         * The plugin must call this when it has completed a window destroy effect.
         * @param actor the MetaWindowActor actor
         */
        completed_destroy(actor: Meta.WindowActor): void;
        /**
         * The plugin must call this when it has completed a window map effect.
         * @param actor the MetaWindowActor actor
         */
        completed_map(actor: Meta.WindowActor): void;
        /**
         * The plugin must call this when it has completed a window minimize effect.
         * @param actor the MetaWindowActor actor
         */
        completed_minimize(actor: Meta.WindowActor): void;
        completed_size_change(actor: Meta.WindowActor): void;
        /**
         * The plugin must call this when it has finished switching the
         * workspace.
         */
        completed_switch_workspace(): void;
        /**
         * The plugin must call this when it has completed a window unminimize effect.
         * @param actor the MetaWindowActor actor
         */
        completed_unminimize(actor: Meta.WindowActor): void;

        // Own signals of Shell-13.Shell.WM

        connect(
            sigName: 'confirm-display-change',
            callback: WM.ConfirmDisplayChangeSignalCallback
        ): number;
        connect_after(
            sigName: 'confirm-display-change',
            callback: WM.ConfirmDisplayChangeSignalCallback
        ): number;
        emit(sigName: 'confirm-display-change', ...args: any[]): void;
        connect(
            sigName: 'create-close-dialog',
            callback: WM.CreateCloseDialogSignalCallback
        ): number;
        connect_after(
            sigName: 'create-close-dialog',
            callback: WM.CreateCloseDialogSignalCallback
        ): number;
        emit(
            sigName: 'create-close-dialog',
            window: Meta.Window,
            ...args: any[]
        ): void;
        connect(
            sigName: 'create-inhibit-shortcuts-dialog',
            callback: WM.CreateInhibitShortcutsDialogSignalCallback
        ): number;
        connect_after(
            sigName: 'create-inhibit-shortcuts-dialog',
            callback: WM.CreateInhibitShortcutsDialogSignalCallback
        ): number;
        emit(
            sigName: 'create-inhibit-shortcuts-dialog',
            window: Meta.Window,
            ...args: any[]
        ): void;
        connect(sigName: 'destroy', callback: WM.DestroySignalCallback): number;
        connect_after(
            sigName: 'destroy',
            callback: WM.DestroySignalCallback
        ): number;
        emit(
            sigName: 'destroy',
            object: Meta.WindowActor,
            ...args: any[]
        ): void;
        connect(
            sigName: 'filter-keybinding',
            callback: WM.FilterKeybindingSignalCallback
        ): number;
        connect_after(
            sigName: 'filter-keybinding',
            callback: WM.FilterKeybindingSignalCallback
        ): number;
        emit(
            sigName: 'filter-keybinding',
            object: Meta.KeyBinding,
            ...args: any[]
        ): void;
        connect(
            sigName: 'hide-tile-preview',
            callback: WM.HideTilePreviewSignalCallback
        ): number;
        connect_after(
            sigName: 'hide-tile-preview',
            callback: WM.HideTilePreviewSignalCallback
        ): number;
        emit(sigName: 'hide-tile-preview', ...args: any[]): void;
        connect(
            sigName: 'kill-switch-workspace',
            callback: WM.KillSwitchWorkspaceSignalCallback
        ): number;
        connect_after(
            sigName: 'kill-switch-workspace',
            callback: WM.KillSwitchWorkspaceSignalCallback
        ): number;
        emit(sigName: 'kill-switch-workspace', ...args: any[]): void;
        connect(
            sigName: 'kill-window-effects',
            callback: WM.KillWindowEffectsSignalCallback
        ): number;
        connect_after(
            sigName: 'kill-window-effects',
            callback: WM.KillWindowEffectsSignalCallback
        ): number;
        emit(
            sigName: 'kill-window-effects',
            object: Meta.WindowActor,
            ...args: any[]
        ): void;
        connect(sigName: 'map', callback: WM.MapSignalCallback): number;
        connect_after(sigName: 'map', callback: WM.MapSignalCallback): number;
        emit(sigName: 'map', object: Meta.WindowActor, ...args: any[]): void;
        connect(
            sigName: 'minimize',
            callback: WM.MinimizeSignalCallback
        ): number;
        connect_after(
            sigName: 'minimize',
            callback: WM.MinimizeSignalCallback
        ): number;
        emit(
            sigName: 'minimize',
            object: Meta.WindowActor,
            ...args: any[]
        ): void;
        connect(
            sigName: 'show-tile-preview',
            callback: WM.ShowTilePreviewSignalCallback
        ): number;
        connect_after(
            sigName: 'show-tile-preview',
            callback: WM.ShowTilePreviewSignalCallback
        ): number;
        emit(
            sigName: 'show-tile-preview',
            object: Meta.Window,
            p0: Mtk.Rectangle,
            p1: number,
            ...args: any[]
        ): void;
        connect(
            sigName: 'show-window-menu',
            callback: WM.ShowWindowMenuSignalCallback
        ): number;
        connect_after(
            sigName: 'show-window-menu',
            callback: WM.ShowWindowMenuSignalCallback
        ): number;
        emit(
            sigName: 'show-window-menu',
            object: Meta.Window,
            p0: number,
            p1: Mtk.Rectangle,
            ...args: any[]
        ): void;
        connect(
            sigName: 'size-change',
            callback: WM.SizeChangeSignalCallback
        ): number;
        connect_after(
            sigName: 'size-change',
            callback: WM.SizeChangeSignalCallback
        ): number;
        emit(
            sigName: 'size-change',
            object: Meta.WindowActor,
            p0: Meta.SizeChange,
            p1: Mtk.Rectangle,
            p2: Mtk.Rectangle,
            ...args: any[]
        ): void;
        connect(
            sigName: 'size-changed',
            callback: WM.SizeChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'size-changed',
            callback: WM.SizeChangedSignalCallback
        ): number;
        emit(
            sigName: 'size-changed',
            object: Meta.WindowActor,
            ...args: any[]
        ): void;
        connect(
            sigName: 'switch-workspace',
            callback: WM.SwitchWorkspaceSignalCallback
        ): number;
        connect_after(
            sigName: 'switch-workspace',
            callback: WM.SwitchWorkspaceSignalCallback
        ): number;
        emit(
            sigName: 'switch-workspace',
            object: number,
            p0: number,
            p1: number,
            ...args: any[]
        ): void;
        connect(
            sigName: 'unminimize',
            callback: WM.UnminimizeSignalCallback
        ): number;
        connect_after(
            sigName: 'unminimize',
            callback: WM.UnminimizeSignalCallback
        ): number;
        emit(
            sigName: 'unminimize',
            object: Meta.WindowActor,
            ...args: any[]
        ): void;

        // Class property signals of Shell-13.Shell.WM

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class WM extends GObject.Object {
        // Own properties of Shell-13.Shell.WM

        static name: string;
        static $gtype: GObject.GType<WM>;

        // Constructors of Shell-13.Shell.WM

        constructor(config?: WM.ConstructorProperties);
        /**
         * Creates a new window management interface by hooking into `plugin`.
         * @constructor
         * @param plugin the #MetaPlugin
         * @returns the new window-management interface
         */
        constructor(plugin: Meta.Plugin);
        /**
         * Creates a new window management interface by hooking into `plugin`.
         * @constructor
         * @param plugin the #MetaPlugin
         * @returns the new window-management interface
         */
        static new(plugin: Meta.Plugin): WM;
        _init(config?: WM.ConstructorProperties): void;
    }

    module WindowPreview {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                St.Widget.ConstructorProperties {
            // Own constructor properties of Shell-13.Shell.WindowPreview

            window_container?: Clutter.Actor | null;
        }
    }

    interface WindowPreview
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of Shell-13.Shell.WindowPreview

        window_container: Clutter.Actor;

        // Class property signals of Shell-13.Shell.WindowPreview

        connect(
            sigName: 'notify::window-container',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::window-container',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::window-container', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: ($obj: WindowPreview, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class WindowPreview extends St.Widget {
        // Own properties of Shell-13.Shell.WindowPreview

        static name: string;
        static $gtype: GObject.GType<WindowPreview>;

        // Constructors of Shell-13.Shell.WindowPreview

        constructor(config?: WindowPreview.ConstructorProperties);
        _init(config?: WindowPreview.ConstructorProperties): void;
    }

    module WindowPreviewLayout {
        // Constructor properties interface

        interface ConstructorProperties
            extends Clutter.LayoutManager.ConstructorProperties {}
    }

    interface WindowPreviewLayout {
        // Own properties of Shell-13.Shell.WindowPreviewLayout

        readonly bounding_box: Clutter.ActorBox;

        // Owm methods of Shell-13.Shell.WindowPreviewLayout

        /**
         * Creates a ClutterActor drawing the texture of `window` and adds it
         * to the container. If `window` is already part of the preview, this
         * function will do nothing.
         * @param window the #MetaWindow
         * @returns The newly created actor drawing @window
         */
        add_window(window: Meta.Window): Clutter.Actor | null;
        /**
         * Gets an array of all MetaWindows that were added to the layout
         * using shell_window_preview_layout_add_window(), ordered by the
         * insertion order.
         * @returns The list of windows
         */
        get_windows(): Meta.Window[];
        /**
         * Removes a MetaWindow `window` from the preview which has been added
         * previously using shell_window_preview_layout_add_window().
         * If `window` is not part of preview, this function will do nothing.
         * @param window the #MetaWindow
         */
        remove_window(window: Meta.Window): void;

        // Class property signals of Shell-13.Shell.WindowPreviewLayout

        connect(
            sigName: 'notify::bounding-box',
            callback: (
                $obj: WindowPreviewLayout,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::bounding-box',
            callback: (
                $obj: WindowPreviewLayout,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::bounding-box', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class WindowPreviewLayout extends Clutter.LayoutManager {
        // Own properties of Shell-13.Shell.WindowPreviewLayout

        static name: string;
        static $gtype: GObject.GType<WindowPreviewLayout>;

        // Constructors of Shell-13.Shell.WindowPreviewLayout

        constructor(config?: WindowPreviewLayout.ConstructorProperties);
        _init(config?: WindowPreviewLayout.ConstructorProperties): void;
    }

    module WindowTracker {
        // Signal callback interfaces

        /**
         * Signal callback interface for `startup-sequence-changed`
         */
        interface StartupSequenceChangedSignalCallback {
            ($obj: WindowTracker, object: Meta.StartupSequence): void;
        }

        /**
         * Signal callback interface for `tracked-windows-changed`
         */
        interface TrackedWindowsChangedSignalCallback {
            ($obj: WindowTracker): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface WindowTracker {
        // Own properties of Shell-13.Shell.WindowTracker

        readonly focus_app: App;

        // Owm methods of Shell-13.Shell.WindowTracker

        /**
         * Look up the application corresponding to a process.
         * @param pid A Unix process identifier
         * @returns A #ShellApp, or %NULL if none
         */
        get_app_from_pid(pid: number): App;
        get_startup_sequences(): Meta.StartupSequence[];
        get_window_app(metawin: Meta.Window): App;

        // Own signals of Shell-13.Shell.WindowTracker

        connect(
            sigName: 'startup-sequence-changed',
            callback: WindowTracker.StartupSequenceChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'startup-sequence-changed',
            callback: WindowTracker.StartupSequenceChangedSignalCallback
        ): number;
        emit(
            sigName: 'startup-sequence-changed',
            object: Meta.StartupSequence,
            ...args: any[]
        ): void;
        connect(
            sigName: 'tracked-windows-changed',
            callback: WindowTracker.TrackedWindowsChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'tracked-windows-changed',
            callback: WindowTracker.TrackedWindowsChangedSignalCallback
        ): number;
        emit(sigName: 'tracked-windows-changed', ...args: any[]): void;

        // Class property signals of Shell-13.Shell.WindowTracker

        connect(
            sigName: 'notify::focus-app',
            callback: ($obj: WindowTracker, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::focus-app',
            callback: ($obj: WindowTracker, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::focus-app', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class WindowTracker extends GObject.Object {
        // Own properties of Shell-13.Shell.WindowTracker

        static name: string;
        static $gtype: GObject.GType<WindowTracker>;

        // Constructors of Shell-13.Shell.WindowTracker

        constructor(config?: WindowTracker.ConstructorProperties);
        _init(config?: WindowTracker.ConstructorProperties): void;
        static get_default(): WindowTracker;
    }

    module WorkspaceBackground {
        // Constructor properties interface

        interface ConstructorProperties
            extends Atk.ImplementorIface.ConstructorProperties,
                Clutter.Animatable.ConstructorProperties,
                Clutter.Container.ConstructorProperties,
                Clutter.Scriptable.ConstructorProperties,
                St.Widget.ConstructorProperties {
            // Own constructor properties of Shell-13.Shell.WorkspaceBackground

            monitor_index?: number | null;
            state_adjustment_value?: number | null;
        }
    }

    interface WorkspaceBackground
        extends Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Scriptable {
        // Own properties of Shell-13.Shell.WorkspaceBackground

        readonly monitor_index: number;
        state_adjustment_value: number;

        // Class property signals of Shell-13.Shell.WorkspaceBackground

        connect(
            sigName: 'notify::monitor-index',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::monitor-index',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::monitor-index', ...args: any[]): void;
        connect(
            sigName: 'notify::state-adjustment-value',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::state-adjustment-value',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::state-adjustment-value', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-name',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-name',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::accessible-name', ...args: any[]): void;
        connect(
            sigName: 'notify::accessible-role',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::accessible-role',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::accessible-role', ...args: any[]): void;
        connect(
            sigName: 'notify::can-focus',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::can-focus',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::can-focus', ...args: any[]): void;
        connect(
            sigName: 'notify::hover',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::hover',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::hover', ...args: any[]): void;
        connect(
            sigName: 'notify::label-actor',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::label-actor',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::label-actor', ...args: any[]): void;
        connect(
            sigName: 'notify::pseudo-class',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::pseudo-class',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::pseudo-class', ...args: any[]): void;
        connect(
            sigName: 'notify::style',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::style',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::style', ...args: any[]): void;
        connect(
            sigName: 'notify::style-class',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::style-class',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::style-class', ...args: any[]): void;
        connect(
            sigName: 'notify::track-hover',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::track-hover',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::track-hover', ...args: any[]): void;
        connect(
            sigName: 'notify::actions',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::actions',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::actions', ...args: any[]): void;
        connect(
            sigName: 'notify::allocation',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::allocation',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::background-color', ...args: any[]): void;
        connect(
            sigName: 'notify::background-color-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::background-color-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::background-color-set', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::child-transform', ...args: any[]): void;
        connect(
            sigName: 'notify::child-transform-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::child-transform-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::child-transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-rect',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-rect',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::clip-rect', ...args: any[]): void;
        connect(
            sigName: 'notify::clip-to-allocation',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::clip-to-allocation',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::clip-to-allocation', ...args: any[]): void;
        connect(
            sigName: 'notify::color-state',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::color-state',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::color-state', ...args: any[]): void;
        connect(
            sigName: 'notify::constraints',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::constraints',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::constraints', ...args: any[]): void;
        connect(
            sigName: 'notify::content',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::content',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::content', ...args: any[]): void;
        connect(
            sigName: 'notify::content-box',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::content-box',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::content-box', ...args: any[]): void;
        connect(
            sigName: 'notify::content-gravity',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::content-gravity',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::content-gravity', ...args: any[]): void;
        connect(
            sigName: 'notify::content-repeat',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::content-repeat',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::content-repeat', ...args: any[]): void;
        connect(
            sigName: 'notify::effect',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::effect',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::effect', ...args: any[]): void;
        connect(
            sigName: 'notify::first-child',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::first-child',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::first-child', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-position-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-position-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::fixed-position-set', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::fixed-x', ...args: any[]): void;
        connect(
            sigName: 'notify::fixed-y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::fixed-y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::fixed-y', ...args: any[]): void;
        connect(
            sigName: 'notify::has-clip',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::has-clip',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::has-clip', ...args: any[]): void;
        connect(
            sigName: 'notify::has-pointer',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::has-pointer',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::has-pointer', ...args: any[]): void;
        connect(
            sigName: 'notify::height',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::height',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::height', ...args: any[]): void;
        connect(
            sigName: 'notify::last-child',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::last-child',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::last-child', ...args: any[]): void;
        connect(
            sigName: 'notify::layout-manager',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::layout-manager',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::layout-manager', ...args: any[]): void;
        connect(
            sigName: 'notify::magnification-filter',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::magnification-filter',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::magnification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::mapped',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::mapped',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::mapped', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-bottom',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-bottom',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::margin-bottom', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-left',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-left',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::margin-left', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-right',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-right',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::margin-right', ...args: any[]): void;
        connect(
            sigName: 'notify::margin-top',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::margin-top',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::margin-top', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::min-height', ...args: any[]): void;
        connect(
            sigName: 'notify::min-height-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::min-height-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::min-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::min-width', ...args: any[]): void;
        connect(
            sigName: 'notify::min-width-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::min-width-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::min-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::minification-filter',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::minification-filter',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::minification-filter', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::natural-height', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-height-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-height-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::natural-height-set', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::natural-width', ...args: any[]): void;
        connect(
            sigName: 'notify::natural-width-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::natural-width-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::natural-width-set', ...args: any[]): void;
        connect(
            sigName: 'notify::offscreen-redirect',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::offscreen-redirect',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::offscreen-redirect', ...args: any[]): void;
        connect(
            sigName: 'notify::opacity',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::opacity',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::opacity', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::pivot-point', ...args: any[]): void;
        connect(
            sigName: 'notify::pivot-point-z',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::pivot-point-z',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::pivot-point-z', ...args: any[]): void;
        connect(
            sigName: 'notify::position',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::position',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::position', ...args: any[]): void;
        connect(
            sigName: 'notify::reactive',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::reactive',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::reactive', ...args: any[]): void;
        connect(
            sigName: 'notify::realized',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::realized',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::realized', ...args: any[]): void;
        connect(
            sigName: 'notify::request-mode',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::request-mode',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::request-mode', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-x', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-y', ...args: any[]): void;
        connect(
            sigName: 'notify::rotation-angle-z',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::rotation-angle-z',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::rotation-angle-z', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::scale-x', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::scale-y', ...args: any[]): void;
        connect(
            sigName: 'notify::scale-z',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::scale-z',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::scale-z', ...args: any[]): void;
        connect(
            sigName: 'notify::show-on-set-parent',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::show-on-set-parent',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::show-on-set-parent', ...args: any[]): void;
        connect(
            sigName: 'notify::size',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::size',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::size', ...args: any[]): void;
        connect(
            sigName: 'notify::text-direction',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::text-direction',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::text-direction', ...args: any[]): void;
        connect(
            sigName: 'notify::transform',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::transform',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::transform', ...args: any[]): void;
        connect(
            sigName: 'notify::transform-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::transform-set',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::transform-set', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::translation-x', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::translation-y', ...args: any[]): void;
        connect(
            sigName: 'notify::translation-z',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::translation-z',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::translation-z', ...args: any[]): void;
        connect(
            sigName: 'notify::visible',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::visible',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::visible', ...args: any[]): void;
        connect(
            sigName: 'notify::width',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::width',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::width', ...args: any[]): void;
        connect(
            sigName: 'notify::x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::x',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::x', ...args: any[]): void;
        connect(
            sigName: 'notify::x-align',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::x-align',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::x-align', ...args: any[]): void;
        connect(
            sigName: 'notify::x-expand',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::x-expand',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::x-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::y',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::y', ...args: any[]): void;
        connect(
            sigName: 'notify::y-align',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::y-align',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::y-align', ...args: any[]): void;
        connect(
            sigName: 'notify::y-expand',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::y-expand',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::y-expand', ...args: any[]): void;
        connect(
            sigName: 'notify::z-position',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::z-position',
            callback: (
                $obj: WorkspaceBackground,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::z-position', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class WorkspaceBackground extends St.Widget {
        // Own properties of Shell-13.Shell.WorkspaceBackground

        static name: string;
        static $gtype: GObject.GType<WorkspaceBackground>;

        // Constructors of Shell-13.Shell.WorkspaceBackground

        constructor(config?: WorkspaceBackground.ConstructorProperties);
        _init(config?: WorkspaceBackground.ConstructorProperties): void;
    }

    interface AppClass {
        // Own fields of Shell-13.Shell.AppClass

        parent_class: GObject.ObjectClass;
    }

    abstract class AppClass {
        // Own properties of Shell-13.Shell.AppClass

        static name: string;
    }

    interface AppSystemClass {
        // Own fields of Shell-13.Shell.AppSystemClass

        parent_class: GObject.ObjectClass;
    }

    abstract class AppSystemClass {
        // Own properties of Shell-13.Shell.AppSystemClass

        static name: string;
    }

    interface AppUsageClass {
        // Own fields of Shell-13.Shell.AppUsageClass

        parent_class: GObject.ObjectClass;
    }

    abstract class AppUsageClass {
        // Own properties of Shell-13.Shell.AppUsageClass

        static name: string;
    }

    interface BlurEffectClass {
        // Own fields of Shell-13.Shell.BlurEffectClass

        parent_class: Clutter.EffectClass;
    }

    abstract class BlurEffectClass {
        // Own properties of Shell-13.Shell.BlurEffectClass

        static name: string;
    }

    interface CameraMonitorClass {
        // Own fields of Shell-13.Shell.CameraMonitorClass

        parent_class: GObject.ObjectClass;
    }

    abstract class CameraMonitorClass {
        // Own properties of Shell-13.Shell.CameraMonitorClass

        static name: string;
    }

    interface GLSLEffectClass {
        // Own fields of Shell-13.Shell.GLSLEffectClass

        parent_class: Clutter.OffscreenEffectClass;
        base_pipeline: Cogl.Pipeline;
        build_pipeline: (effect: GLSLEffect) => void;
    }

    abstract class GLSLEffectClass {
        // Own properties of Shell-13.Shell.GLSLEffectClass

        static name: string;
    }

    interface GlobalClass {
        // Own fields of Shell-13.Shell.GlobalClass

        parent_class: GObject.ObjectClass;
    }

    abstract class GlobalClass {
        // Own properties of Shell-13.Shell.GlobalClass

        static name: string;
    }

    interface InvertLightnessEffectClass {}

    abstract class InvertLightnessEffectClass {
        // Own properties of Shell-13.Shell.InvertLightnessEffectClass

        static name: string;
    }

    interface KeyringPromptClass {
        // Own fields of Shell-13.Shell.KeyringPromptClass

        parent_class: GObject.ObjectClass;
    }

    abstract class KeyringPromptClass {
        // Own properties of Shell-13.Shell.KeyringPromptClass

        static name: string;
    }

    interface MemoryInfo {
        // Own fields of Shell-13.Shell.MemoryInfo

        glibc_uordblks: number;
        js_bytes: number;
        gjs_boxed: number;
        gjs_gobject: number;
        gjs_function: number;
        gjs_closure: number;
        last_gc_seconds_ago: number;
    }

    class MemoryInfo {
        // Own properties of Shell-13.Shell.MemoryInfo

        static name: string;
    }

    interface MountOperationClass {
        // Own fields of Shell-13.Shell.MountOperationClass

        parent_class: Gio.MountOperationClass;
    }

    abstract class MountOperationClass {
        // Own properties of Shell-13.Shell.MountOperationClass

        static name: string;
    }

    interface NetworkAgentClass {}

    abstract class NetworkAgentClass {
        // Own properties of Shell-13.Shell.NetworkAgentClass

        static name: string;
    }

    interface NetworkAgentPrivate {}

    class NetworkAgentPrivate {
        // Own properties of Shell-13.Shell.NetworkAgentPrivate

        static name: string;
    }

    interface PerfLogClass {
        // Own fields of Shell-13.Shell.PerfLogClass

        parent_class: GObject.ObjectClass;
    }

    abstract class PerfLogClass {
        // Own properties of Shell-13.Shell.PerfLogClass

        static name: string;
    }

    interface PolkitAuthenticationAgentClass {
        // Own fields of Shell-13.Shell.PolkitAuthenticationAgentClass

        parent_class: PolkitAgent.ListenerClass;
    }

    abstract class PolkitAuthenticationAgentClass {
        // Own properties of Shell-13.Shell.PolkitAuthenticationAgentClass

        static name: string;
    }

    interface ScreenshotClass {
        // Own fields of Shell-13.Shell.ScreenshotClass

        parent_class: GObject.ObjectClass;
    }

    abstract class ScreenshotClass {
        // Own properties of Shell-13.Shell.ScreenshotClass

        static name: string;
    }

    interface SecureTextBufferClass {
        // Own fields of Shell-13.Shell.SecureTextBufferClass

        parent_class: Clutter.TextBufferClass;
    }

    abstract class SecureTextBufferClass {
        // Own properties of Shell-13.Shell.SecureTextBufferClass

        static name: string;
    }

    interface SquareBinClass {
        // Own fields of Shell-13.Shell.SquareBinClass

        parent_class: St.BinClass;
    }

    abstract class SquareBinClass {
        // Own properties of Shell-13.Shell.SquareBinClass

        static name: string;
    }

    interface StackClass {
        // Own fields of Shell-13.Shell.StackClass

        parent_class: St.WidgetClass;
    }

    abstract class StackClass {
        // Own properties of Shell-13.Shell.StackClass

        static name: string;
    }

    interface TrayIconClass {
        // Own fields of Shell-13.Shell.TrayIconClass

        parent_class: Clutter.CloneClass;
    }

    abstract class TrayIconClass {
        // Own properties of Shell-13.Shell.TrayIconClass

        static name: string;
    }

    interface TrayManagerClass {
        // Own fields of Shell-13.Shell.TrayManagerClass

        parent_class: GObject.ObjectClass;
    }

    abstract class TrayManagerClass {
        // Own properties of Shell-13.Shell.TrayManagerClass

        static name: string;
    }

    interface WMClass {
        // Own fields of Shell-13.Shell.WMClass

        parent_class: GObject.ObjectClass;
    }

    abstract class WMClass {
        // Own properties of Shell-13.Shell.WMClass

        static name: string;
    }

    interface WindowPreviewClass {
        // Own fields of Shell-13.Shell.WindowPreviewClass

        parent_class: St.WidgetClass;
    }

    abstract class WindowPreviewClass {
        // Own properties of Shell-13.Shell.WindowPreviewClass

        static name: string;
    }

    interface WindowPreviewLayoutClass {
        // Own fields of Shell-13.Shell.WindowPreviewLayoutClass

        parent_class: Clutter.LayoutManagerClass;
    }

    abstract class WindowPreviewLayoutClass {
        // Own properties of Shell-13.Shell.WindowPreviewLayoutClass

        static name: string;
    }

    interface WindowPreviewLayoutPrivate {}

    class WindowPreviewLayoutPrivate {
        // Own properties of Shell-13.Shell.WindowPreviewLayoutPrivate

        static name: string;
    }

    interface WindowTrackerClass {
        // Own fields of Shell-13.Shell.WindowTrackerClass

        parent_class: GObject.ObjectClass;
    }

    abstract class WindowTrackerClass {
        // Own properties of Shell-13.Shell.WindowTrackerClass

        static name: string;
    }

    interface WorkspaceBackgroundClass {
        // Own fields of Shell-13.Shell.WorkspaceBackgroundClass

        parent_class: St.WidgetClass;
    }

    abstract class WorkspaceBackgroundClass {
        // Own properties of Shell-13.Shell.WorkspaceBackgroundClass

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

export default Shell;
// END

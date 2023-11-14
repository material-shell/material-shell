/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomedesktop-4.0-import.d.ts';
/**
 * GnomeDesktop-4.0
 */

import type Gio from './gio-2.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type GdkPixbuf from './gdkpixbuf-2.0.js';
import type GModule from './gmodule-2.0.js';
import type GDesktopEnums from './gdesktopenums-3.0.js';

export namespace GnomeDesktop {
    enum DesktopThumbnailSize {
        NORMAL,
        LARGE,
        XLARGE,
        XXLARGE,
    }
    const DESKTOP_PLATFORM_VERSION: number;
    /**
     * Returns whether the thumbnail has the correct uri and mtime embedded in the
     * png options. This function is threadsafe and does no blocking I/O.
     * @param pixbuf an loaded thumbnail #GdkPixbuf
     * @param uri a uri
     * @param mtime the mtime
     * @returns TRUE if the thumbnail has the right @uri and @mtime
     */
    function desktop_thumbnail_is_valid(
        pixbuf: GdkPixbuf.Pixbuf,
        uri: string | null,
        mtime: number
    ): boolean;
    /**
     * Returns the filename that a thumbnail of size `size` for `uri` would have.
     * This function is threadsafe and does no blocking I/O.
     * @param uri an uri
     * @param size a thumbnail size
     * @returns an absolute filename
     */
    function desktop_thumbnail_path_for_uri(
        uri: string | null,
        size: DesktopThumbnailSize
    ): string | null;
    /**
     * Gets all locales.
     * @returns    a newly allocated %NULL-terminated string array containing the   all locales. Free with g_strfreev().
     */
    function get_all_locales(): string[];
    /**
     * Gets the country name for `code`. If `translation` is provided the
     * returned string is translated accordingly.
     * @param code an ISO 3166 code string
     * @param translation a locale string
     * @returns the country name. Caller takes ownership.
     */
    function get_country_from_code(
        code: string | null,
        translation: string | null
    ): string | null;
    /**
     * Gets the country description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the country description. Caller takes ownership.
     */
    function get_country_from_locale(
        locale: string | null,
        translation: string | null
    ): string | null;
    /**
     * Gets the default input source's type and identifier for a given
     * locale.
     * @param locale a locale string
     * @returns %TRUE if a input source exists or %FALSE otherwise.
     */
    function get_input_source_from_locale(
        locale: string | null
    ): [
        /* returnType */ boolean,
        /* type */ string | null,
        /* id */ string | null
    ];
    /**
     * Gets the language name for `code`. If `translation` is provided the
     * returned string is translated accordingly.
     * @param code an ISO 639 code string
     * @param translation a locale string
     * @returns the language name. Caller takes ownership.
     */
    function get_language_from_code(
        code: string | null,
        translation: string | null
    ): string | null;
    /**
     * Gets the language description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the language description. Caller takes ownership.
     */
    function get_language_from_locale(
        locale: string | null,
        translation: string | null
    ): string | null;
    /**
     * Returns an integer with the major version of GNOME. Useful for
     * dynamic languages like Javascript or Python (static languages like
     * C should use %GNOME_DESKTOP_PLATFORM_VERSION). If this
     * function doesn't exist, it can be presumed that the GNOME platform
     * version is 42 or previous.
     * @returns an integer with the major version of GNOME.
     */
    function get_platform_version(): number;
    /**
     * Gets a translation of the raw `modifier` string. If `translation`
     * is provided the returned string is translated accordingly.
     * @param modifier the modifier part of a locale name
     * @param translation a locale string
     * @returns the translated modifier string. Caller takes ownership.
     */
    function get_translated_modifier(
        modifier: string | null,
        translation: string | null
    ): string | null;
    /**
     * Returns %TRUE if there are translations for language `code`.
     * @param code an ISO 639 code string
     * @returns %TRUE if there are translations for language @code.
     */
    function language_has_translations(code: string | null): boolean;
    /**
     * Gets the normalized locale string in the form
     * [language[_country][.codeset][`modifier]`] for `name`.
     * @param locale a locale string
     * @returns normalized locale string. Caller takes ownership.
     */
    function normalize_locale(locale: string | null): string | null;
    /**
     * Extracts the various components of a locale string in XPG format.
     * ([language[_country][.codeset][`modifier]`]). See
     * http://en.wikipedia.org/wiki/Locale.
     * @param locale a locale string
     * @returns %TRUE if parsing was successful.
     */
    function parse_locale(
        locale: string | null
    ): [
        /* returnType */ boolean,
        /* language_codep */ string | null,
        /* country_codep */ string | null,
        /* codesetp */ string | null,
        /* modifierp */ string | null
    ];
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID or the executable in all
     * other cases. If a desktop-id is passed then the .desktop suffix will be
     * stripped.
     *
     * It is advisable to use this function every time where the started application
     * can be considered reasonably independent of the launching application. Placing
     * it in a scope creates proper separation between the programs rather than being
     * considered a single entity by systemd.
     *
     * It is always safe to call this function. Note that a successful return code
     * does not imply that a unit has been created. It solely means that no error
     * condition was hit sending the request.
     *
     * If `connection` is %NULL then g_dbus_get() will be called internally.
     *
     * Note that most callers will not need to handle errors. As such, it is normal
     * to pass a %NULL `callback`.
     * @param name Name for the application
     * @param pid The PID of the application
     * @param description A description to use for the unit, or %NULL
     * @param connection An #GDBusConnection to the session bus, or %NULL
     * @param cancellable #GCancellable to use
     * @param callback Callback to call when the operation is done
     */
    function start_systemd_scope<Z = unknown>(
        name: string | null,
        pid: number,
        description: string | null,
        connection: Gio.DBusConnection | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Z> | null
    ): void;
    /**
     * Finish an asynchronous operation to create a transient scope that was
     * started with gnome_start_systemd_scope().
     *
     * Note that a successful return code does not imply that a unit has been
     * created. It solely means that no error condition was hit sending the request.
     * @param res A #GAsyncResult
     * @returns %FALSE on error, %TRUE otherwise
     */
    function start_systemd_scope_finish(res: Gio.AsyncResult): boolean;
    interface IdleMonitorWatchFunc {
        (monitor: IdleMonitor, id: number): void;
    }
    module DesktopThumbnailFactory {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface DesktopThumbnailFactory {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

        parent: GObject.Object;
        priv: DesktopThumbnailFactoryPrivate;

        // Owm methods of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

        /**
         * Returns TRUE if this GnomeDesktopThumbnailFactory can (at least try) to thumbnail
         * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param mtime the mtime of the file
         * @returns TRUE if the file can be thumbnailed.
         */
        can_thumbnail(
            uri: string | null,
            mime_type: string | null,
            mtime: number
        ): boolean;
        /**
         * Creates a failed thumbnail for the file so that we don't try
         * to re-thumbnail the file later.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the modification time of the file
         * @param cancellable a GCancellable object, or NULL
         * @returns TRUE if everything went fine; FALSE if there was an error.
         */
        create_failed_thumbnail(
            uri: string | null,
            mtime: number,
            cancellable: Gio.Cancellable | null
        ): boolean;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
         *
         * Since 43.0
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        create_failed_thumbnail_async(
            uri: string | null,
            original_mtime: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;

        // Overloads of create_failed_thumbnail_async

        /**
         * Promisified version of {@link create_failed_thumbnail_async}
         *
         * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
         *
         * Since 43.0
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @returns A Promise of: TRUE if the operation was correct; FALSE if there was an error Since 43.0
         */
        create_failed_thumbnail_async(
            uri: string | null,
            original_mtime: number,
            cancellable: Gio.Cancellable | null
        ): globalThis.Promise<boolean>;
        create_failed_thumbnail_finish(result: Gio.AsyncResult): boolean;
        /**
         * Tries to generate a thumbnail for the specified file. If it succeeds
         * it returns a pixbuf that can be used as a thumbnail.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param cancellable a #GCancellable object or NULL
         * @returns thumbnail pixbuf if thumbnailing succeeded, %NULL otherwise and error will be set
         */
        generate_thumbnail(
            uri: string | null,
            mime_type: string | null,
            cancellable: Gio.Cancellable | null
        ): GdkPixbuf.Pixbuf;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
         *
         * Since 43.0
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        generate_thumbnail_async(
            uri: string | null,
            mime_type: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;

        // Overloads of generate_thumbnail_async

        /**
         * Promisified version of {@link generate_thumbnail_async}
         *
         * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
         *
         * Since 43.0
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         * @returns A Promise of: thumbnail pixbuf if thumbnailing succeeded, %NULL otherwise. Since 43.0
         */
        generate_thumbnail_async(
            uri: string | null,
            mime_type: string | null,
            cancellable: Gio.Cancellable | null
        ): globalThis.Promise<GdkPixbuf.Pixbuf>;
        generate_thumbnail_finish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf;
        /**
         * Tries to locate an failed thumbnail for the file specified. Writing
         * and looking for failed thumbnails is important to avoid to try to
         * thumbnail e.g. broken images several times.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns TRUE if there is a failed thumbnail for the file.
         */
        has_valid_failed_thumbnail(uri: string | null, mtime: number): boolean;
        /**
         * Tries to locate an existing thumbnail for the file specified.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns The absolute path of the thumbnail, or %NULL if none exist.
         */
        lookup(uri: string | null, mtime: number): string | null;
        /**
         * Saves `thumbnail` at the right place. If the save fails a
         * failed thumbnail is written.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a GCancellable object, or NULL
         * @returns TRUE if everything went fine; FALSE if there was an error.
         */
        save_thumbnail(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string | null,
            original_mtime: number,
            cancellable: Gio.Cancellable | null
        ): boolean;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
         *
         * Since 43.0
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        save_thumbnail_async(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string | null,
            original_mtime: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;

        // Overloads of save_thumbnail_async

        /**
         * Promisified version of {@link save_thumbnail_async}
         *
         * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
         *
         * Since 43.0
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @returns A Promise of: TRUE if the operation was correct; FALSE if there was an error Since 43.0
         */
        save_thumbnail_async(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string | null,
            original_mtime: number,
            cancellable: Gio.Cancellable | null
        ): globalThis.Promise<boolean>;
        save_thumbnail_finish(result: Gio.AsyncResult): boolean;

        // Class property signals of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class DesktopThumbnailFactory extends GObject.Object {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

        static name: string;
        static $gtype: GObject.GType<DesktopThumbnailFactory>;

        // Constructors of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

        constructor(config?: DesktopThumbnailFactory.ConstructorProperties);
        /**
         * Creates a new #GnomeDesktopThumbnailFactory.
         *
         * This function must be called on the main thread and is non-blocking.
         * @constructor
         * @param size The thumbnail size to use
         * @returns a new #GnomeDesktopThumbnailFactory
         */
        constructor(size: DesktopThumbnailSize);
        /**
         * Creates a new #GnomeDesktopThumbnailFactory.
         *
         * This function must be called on the main thread and is non-blocking.
         * @constructor
         * @param size The thumbnail size to use
         * @returns a new #GnomeDesktopThumbnailFactory
         */
        static new(size: DesktopThumbnailSize): DesktopThumbnailFactory;
        _init(config?: DesktopThumbnailFactory.ConstructorProperties): void;
    }

    module IdleMonitor {
        // Constructor properties interface

        interface ConstructorProperties
            extends Gio.Initable.ConstructorProperties,
                GObject.Object.ConstructorProperties {}
    }

    interface IdleMonitor extends Gio.Initable {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

        parent: GObject.Object;
        priv: IdleMonitorPrivate;

        // Owm methods of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

        add_idle_watch(
            interval_msec: number,
            callback: IdleMonitorWatchFunc | null
        ): number;
        add_user_active_watch(callback: IdleMonitorWatchFunc | null): number;
        get_idletime(): number;
        /**
         * Removes an idle time watcher, previously added by
         * gnome_idle_monitor_add_idle_watch() or
         * gnome_idle_monitor_add_user_active_watch().
         * @param id A watch ID
         */
        remove_watch(id: number): void;

        // Class property signals of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class IdleMonitor extends GObject.Object {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

        static name: string;
        static $gtype: GObject.GType<IdleMonitor>;

        // Constructors of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

        constructor(config?: IdleMonitor.ConstructorProperties);
        constructor();
        static new(): IdleMonitor;
        _init(config?: IdleMonitor.ConstructorProperties): void;
    }

    module PnpIds {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface PnpIds {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.PnpIds

        parent: GObject.Object;
        priv: PnpIdsPrivate;

        // Owm methods of GnomeDesktop-4.0.GnomeDesktop.PnpIds

        /**
         * Find the full manufacturer name for the given PNP ID.
         * @param pnp_id the PNP ID to look for
         * @returns a new string representing the manufacturer name, or %NULL when not found.
         */
        get_pnp_id(pnp_id: string | null): string | null;

        // Class property signals of GnomeDesktop-4.0.GnomeDesktop.PnpIds

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class PnpIds extends GObject.Object {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.PnpIds

        static name: string;
        static $gtype: GObject.GType<PnpIds>;

        // Constructors of GnomeDesktop-4.0.GnomeDesktop.PnpIds

        constructor(config?: PnpIds.ConstructorProperties);
        /**
         * Returns a reference to a #GnomePnpIds object, or creates
         * a new one if none have been created.
         * @constructor
         * @returns a #GnomePnpIds object.
         */
        constructor();
        /**
         * Returns a reference to a #GnomePnpIds object, or creates
         * a new one if none have been created.
         * @constructor
         * @returns a #GnomePnpIds object.
         */
        static new(): PnpIds;
        _init(config?: PnpIds.ConstructorProperties): void;
    }

    module WallClock {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of GnomeDesktop-4.0.GnomeDesktop.WallClock

            /**
             * If %TRUE, the formatted clock will always have seconds precision and the
             * 'clock' property will always be updated every second, irrespective of
             * system configuration.
             */
            force_seconds?: boolean | null;
            /**
             * If %TRUE, the formatted clock will never include a date or the
             * day of the week, irrespective of configuration.
             */
            time_only?: boolean | null;
        }
    }

    interface WallClock {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.WallClock

        /**
         * A formatted string representing the current clock display.
         */
        readonly clock: string | null;
        /**
         * If %TRUE, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         */
        force_seconds: boolean;
        /**
         * If %TRUE, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         */
        time_only: boolean;
        /**
         * The timezone used for this clock
         */
        readonly timezone: GLib.TimeZone;

        // Own fields of GnomeDesktop-4.0.GnomeDesktop.WallClock

        parent_object: GObject.Object;
        priv: WallClockPrivate;

        // Owm methods of GnomeDesktop-4.0.GnomeDesktop.WallClock

        /**
         * Returns the string representing the current time of this clock
         * according to the user settings.
         * @returns the time of the clock as a string.      This string points to internally allocated storage and      must not be freed, modified or stored.
         */
        get_clock(): string | null;
        /**
         * Returns the current local time zone used by this clock.
         * @returns the #GTimeZone of the clock.
         */
        get_timezone(): GLib.TimeZone;
        string_for_datetime(
            now: GLib.DateTime,
            clock_format: GDesktopEnums.ClockFormat,
            show_weekday: boolean,
            show_full_date: boolean,
            show_seconds: boolean
        ): string | null;

        // Class property signals of GnomeDesktop-4.0.GnomeDesktop.WallClock

        connect(
            sigName: 'notify::clock',
            callback: ($obj: WallClock, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::clock',
            callback: ($obj: WallClock, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::clock', ...args: any[]): void;
        connect(
            sigName: 'notify::force-seconds',
            callback: ($obj: WallClock, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::force-seconds',
            callback: ($obj: WallClock, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::force-seconds', ...args: any[]): void;
        connect(
            sigName: 'notify::time-only',
            callback: ($obj: WallClock, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::time-only',
            callback: ($obj: WallClock, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::time-only', ...args: any[]): void;
        connect(
            sigName: 'notify::timezone',
            callback: ($obj: WallClock, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::timezone',
            callback: ($obj: WallClock, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::timezone', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class WallClock extends GObject.Object {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.WallClock

        static name: string;
        static $gtype: GObject.GType<WallClock>;

        // Constructors of GnomeDesktop-4.0.GnomeDesktop.WallClock

        constructor(config?: WallClock.ConstructorProperties);
        /**
         * Creates a new #GnomeWallClock
         * @constructor
         * @returns the new clock
         */
        constructor();
        /**
         * Creates a new #GnomeWallClock
         * @constructor
         * @returns the new clock
         */
        static new(): WallClock;
        _init(config?: WallClock.ConstructorProperties): void;
    }

    module XkbInfo {
        // Signal callback interfaces

        /**
         * Signal callback interface for `layouts-changed`
         */
        interface LayoutsChangedSignalCallback {
            ($obj: XkbInfo): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface XkbInfo {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

        parent_object: GObject.Object;
        priv: XkbInfoPrivate;

        // Owm methods of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

        description_for_group(group_id: string | null): string | null;
        description_for_option(
            group_id: string | null,
            id: string | null
        ): string | null;
        /**
         * Returns a list of all layout identifiers we know about.
         * @returns the list of layout names. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_all_layouts(): string[];
        /**
         * Returns a list of all option group identifiers we know about.
         * @returns the list of option group ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_all_option_groups(): string[];
        /**
         * Returns a list of all languages supported by a layout, given by
         * `layout_id`.
         * @param layout_id a layout identifier
         * @returns the list of ISO 639 code strings. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_languages_for_layout(layout_id: string | null): string[];
        /**
         * Retrieves information about a layout. Both `display_name` and
         * `short_name` are suitable to show in UIs and might be localized if
         * translations are available.
         *
         * Some layouts don't provide a short name (2 or 3 letters) or don't
         * specify a XKB variant, in those cases `short_name` or `xkb_variant`
         * are empty strings, i.e. "".
         *
         * If the given layout doesn't exist the return value is %FALSE and
         * all the (out) parameters are set to %NULL.
         * @param id layout's identifier about which to retrieve the info
         * @returns %TRUE if the layout exists or %FALSE otherwise.
         */
        get_layout_info(
            id: string | null
        ): [
            /* returnType */ boolean,
            /* display_name */ string | null,
            /* short_name */ string | null,
            /* xkb_layout */ string | null,
            /* xkb_variant */ string | null
        ];
        /**
         * Returns a list of all layout identifiers we know about for
         * `country_code`.
         * @param country_code an ISO 3166 code string
         * @returns the list of layout ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_layouts_for_country(country_code: string | null): string[];
        /**
         * Returns a list of all layout identifiers we know about for
         * `language_code`.
         * @param language_code an ISO 639 code string
         * @returns the list of layout ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_layouts_for_language(language_code: string | null): string[];
        /**
         * Returns a list of all option identifiers we know about for group
         * `group_id`.
         * @param group_id group's identifier about which to retrieve the options
         * @returns the list of option ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_options_for_group(group_id: string | null): string[];

        // Own signals of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

        connect(
            sigName: 'layouts-changed',
            callback: XkbInfo.LayoutsChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'layouts-changed',
            callback: XkbInfo.LayoutsChangedSignalCallback
        ): number;
        emit(sigName: 'layouts-changed', ...args: any[]): void;

        // Class property signals of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class XkbInfo extends GObject.Object {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

        static name: string;
        static $gtype: GObject.GType<XkbInfo>;

        // Constructors of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

        constructor(config?: XkbInfo.ConstructorProperties);
        constructor();
        static new(): XkbInfo;
        _init(config?: XkbInfo.ConstructorProperties): void;
    }

    interface DesktopThumbnailFactoryClass {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactoryClass

        parent: GObject.ObjectClass;
    }

    abstract class DesktopThumbnailFactoryClass {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactoryClass

        static name: string;
    }

    interface DesktopThumbnailFactoryPrivate {}

    class DesktopThumbnailFactoryPrivate {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactoryPrivate

        static name: string;
    }

    interface IdleMonitorClass {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.IdleMonitorClass

        parent_class: GObject.ObjectClass;
    }

    abstract class IdleMonitorClass {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.IdleMonitorClass

        static name: string;
    }

    interface IdleMonitorPrivate {}

    class IdleMonitorPrivate {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.IdleMonitorPrivate

        static name: string;
    }

    interface PnpIdsClass {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.PnpIdsClass

        parent_class: GObject.ObjectClass;
    }

    abstract class PnpIdsClass {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.PnpIdsClass

        static name: string;
    }

    interface PnpIdsPrivate {}

    class PnpIdsPrivate {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.PnpIdsPrivate

        static name: string;
    }

    interface WallClockClass {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.WallClockClass

        parent_class: GObject.ObjectClass;
    }

    abstract class WallClockClass {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.WallClockClass

        static name: string;
    }

    interface WallClockPrivate {}

    class WallClockPrivate {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.WallClockPrivate

        static name: string;
    }

    interface XkbInfoClass {
        // Own fields of GnomeDesktop-4.0.GnomeDesktop.XkbInfoClass

        parent_class: GObject.ObjectClass;
    }

    abstract class XkbInfoClass {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.XkbInfoClass

        static name: string;
    }

    interface XkbInfoPrivate {}

    class XkbInfoPrivate {
        // Own properties of GnomeDesktop-4.0.GnomeDesktop.XkbInfoPrivate

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

export default GnomeDesktop;
// END

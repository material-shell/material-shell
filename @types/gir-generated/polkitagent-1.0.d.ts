/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './polkitagent-1.0-import.d.ts';
/**
 * PolkitAgent-1.0
 */

import type Polkit from './polkit-1.0.js';
import type Gio from './gio-2.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';

export namespace PolkitAgent {
    /**
     * Flags used in polkit_agent_listener_register().
     * @bitfield
     */
    enum RegisterFlags {
        /**
         * No flags are set.
         */
        NONE,
        /**
         * Run the listener in a dedicated thread.
         */
        RUN_IN_THREAD,
    }
    /**
     * (deprecated)
     * @param listener A #PolkitAgentListener.
     * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
     * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
     */
    function register_listener(
        listener: Listener,
        subject: Polkit.Subject,
        object_path: string | null
    ): boolean;
    module Listener {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface Listener {
        // Own fields of PolkitAgent-1.0.PolkitAgent.Listener

        parent_instance: GObject.Object;

        // Owm methods of PolkitAgent-1.0.PolkitAgent.Listener

        /**
         * Called on a registered authentication agent (see
         * polkit_agent_listener_register()) when the user owning the session
         * needs to prove he is one of the identities listed in `identities`.
         *
         * When the user is done authenticating (for example by dismissing an
         * authentication dialog or by successfully entering a password or
         * otherwise proving the user is one of the identities in
         * `identities)`, `callback` will be invoked. The caller then calls
         * polkit_agent_listener_initiate_authentication_finish() to get the
         * result.
         *
         * #PolkitAgentListener derived subclasses imlementing this method
         * <emphasis>MUST</emphasis> not ignore `cancellable;` callers of this
         * function can and will use it. Additionally, `callback` must be
         * invoked in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> of the thread that this method is called from.
         * @param action_id The action to authenticate for.
         * @param message The message to present to the user.
         * @param icon_name A themed icon name representing the action or %NULL.
         * @param details Details describing the action.
         * @param cookie The cookie for the authentication request.
         * @param identities A list of #PolkitIdentity objects that the user can choose to authenticate as.
         * @param cancellable A #GCancellable.
         * @param callback Function to call when the user is done authenticating.
         */
        initiate_authentication(
            action_id: string | null,
            message: string | null,
            icon_name: string | null,
            details: Polkit.Details,
            cookie: string | null,
            identities: Polkit.Identity[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;
        /**
         * Finishes an authentication request from the PolicyKit daemon, see
         * polkit_agent_listener_initiate_authentication() for details.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to polkit_agent_listener_initiate_authentication().
         * @returns %TRUE if @error is set.
         */
        initiate_authentication_finish(res: Gio.AsyncResult): boolean;
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
            flags: RegisterFlags,
            subject: Polkit.Subject,
            object_path: string | null,
            cancellable: Gio.Cancellable | null
        ): any | null;
        /**
         * Like polkit_agent_listener_register() but takes options to influence registration. See the
         * <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.RegisterAuthenticationAgentWithOptions">RegisterAuthenticationAgentWithOptions()</link> D-Bus method for details.
         * @param flags A set of flags from the #PolkitAgentRegisterFlags enumeration.
         * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
         * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
         * @param options A #GVariant with options or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %NULL if @error is set, otherwise a registration handle that can be used with polkit_agent_listener_unregister().
         */
        register_with_options(
            flags: RegisterFlags,
            subject: Polkit.Subject,
            object_path: string | null,
            options: GLib.Variant | null,
            cancellable: Gio.Cancellable | null
        ): any | null;

        // Own virtual methods of PolkitAgent-1.0.PolkitAgent.Listener

        /**
         * Called on a registered authentication agent (see
         * polkit_agent_listener_register()) when the user owning the session
         * needs to prove he is one of the identities listed in `identities`.
         *
         * When the user is done authenticating (for example by dismissing an
         * authentication dialog or by successfully entering a password or
         * otherwise proving the user is one of the identities in
         * `identities)`, `callback` will be invoked. The caller then calls
         * polkit_agent_listener_initiate_authentication_finish() to get the
         * result.
         *
         * #PolkitAgentListener derived subclasses imlementing this method
         * <emphasis>MUST</emphasis> not ignore `cancellable;` callers of this
         * function can and will use it. Additionally, `callback` must be
         * invoked in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> of the thread that this method is called from.
         * @virtual
         * @param action_id The action to authenticate for.
         * @param message The message to present to the user.
         * @param icon_name A themed icon name representing the action or %NULL.
         * @param details Details describing the action.
         * @param cookie The cookie for the authentication request.
         * @param identities A list of #PolkitIdentity objects that the user can choose to authenticate as.
         * @param cancellable A #GCancellable.
         * @param callback Function to call when the user is done authenticating.
         */
        vfunc_initiate_authentication(
            action_id: string | null,
            message: string | null,
            icon_name: string | null,
            details: Polkit.Details,
            cookie: string | null,
            identities: Polkit.Identity[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null
        ): void;
        /**
         * Finishes an authentication request from the PolicyKit daemon, see
         * polkit_agent_listener_initiate_authentication() for details.
         * @virtual
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to polkit_agent_listener_initiate_authentication().
         * @returns %TRUE if @error is set.
         */
        vfunc_initiate_authentication_finish(res: Gio.AsyncResult): boolean;

        // Class property signals of PolkitAgent-1.0.PolkitAgent.Listener

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * #PolkitAgentListener is an abstract base class used for implementing authentication
     * agents. To implement an authentication agent, simply subclass #PolkitAgentListener and
     * implement the `initiate_authentication` and `initiate_authentication_finish` methods.
     *
     * Typically authentication agents use #PolkitAgentSession to
     * authenticate users (via passwords) and communicate back the
     * authentication result to the PolicyKit daemon.
     *
     * To register a #PolkitAgentListener with the PolicyKit daemon, use
     * polkit_agent_listener_register() or
     * polkit_agent_listener_register_with_options().
     * @class
     */
    class Listener extends GObject.Object {
        // Own properties of PolkitAgent-1.0.PolkitAgent.Listener

        static name: string;
        static $gtype: GObject.GType<Listener>;

        // Constructors of PolkitAgent-1.0.PolkitAgent.Listener

        constructor(config?: Listener.ConstructorProperties);
        _init(config?: Listener.ConstructorProperties): void;
        /**
         * Unregisters `listener`.
         * @param registration_handle A handle obtained from polkit_agent_listener_register().
         */
        static unregister(registration_handle: any | null): void;
    }

    module Session {
        // Signal callback interfaces

        /**
         * Signal callback interface for `completed`
         */
        interface CompletedSignalCallback {
            ($obj: Session, gained_authorization: boolean): void;
        }

        /**
         * Signal callback interface for `request`
         */
        interface RequestSignalCallback {
            ($obj: Session, request: string | null, echo_on: boolean): void;
        }

        /**
         * Signal callback interface for `show-error`
         */
        interface ShowErrorSignalCallback {
            ($obj: Session, text: string | null): void;
        }

        /**
         * Signal callback interface for `show-info`
         */
        interface ShowInfoSignalCallback {
            ($obj: Session, text: string | null): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of PolkitAgent-1.0.PolkitAgent.Session

            /**
             * The cookie obtained from the PolicyKit daemon
             */
            cookie?: string | null;
            /**
             * The identity to authenticate.
             */
            identity?: Polkit.Identity | null;
        }
    }

    interface Session {
        // Own properties of PolkitAgent-1.0.PolkitAgent.Session

        /**
         * The cookie obtained from the PolicyKit daemon
         */
        readonly cookie: string | null;
        /**
         * The identity to authenticate.
         */
        readonly identity: Polkit.Identity;

        // Owm methods of PolkitAgent-1.0.PolkitAgent.Session

        /**
         * Cancels an authentication session. This will make `session` emit the #PolkitAgentSession::completed
         * signal.
         */
        cancel(): void;
        /**
         * Initiates the authentication session. Before calling this method,
         * make sure to connect to the various signals. The signals will be
         * emitted in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> that this method is invoked from.
         *
         * Use polkit_agent_session_cancel() to cancel the session.
         */
        initiate(): void;
        /**
         * Function for providing response to requests received
         * via the #PolkitAgentSession::request signal.
         * @param response Response from the user, typically a password.
         */
        response(response: string | null): void;

        // Own signals of PolkitAgent-1.0.PolkitAgent.Session

        connect(
            sigName: 'completed',
            callback: Session.CompletedSignalCallback
        ): number;
        connect_after(
            sigName: 'completed',
            callback: Session.CompletedSignalCallback
        ): number;
        emit(
            sigName: 'completed',
            gained_authorization: boolean,
            ...args: any[]
        ): void;
        connect(
            sigName: 'request',
            callback: Session.RequestSignalCallback
        ): number;
        connect_after(
            sigName: 'request',
            callback: Session.RequestSignalCallback
        ): number;
        emit(
            sigName: 'request',
            request: string | null,
            echo_on: boolean,
            ...args: any[]
        ): void;
        connect(
            sigName: 'show-error',
            callback: Session.ShowErrorSignalCallback
        ): number;
        connect_after(
            sigName: 'show-error',
            callback: Session.ShowErrorSignalCallback
        ): number;
        emit(sigName: 'show-error', text: string | null, ...args: any[]): void;
        connect(
            sigName: 'show-info',
            callback: Session.ShowInfoSignalCallback
        ): number;
        connect_after(
            sigName: 'show-info',
            callback: Session.ShowInfoSignalCallback
        ): number;
        emit(sigName: 'show-info', text: string | null, ...args: any[]): void;

        // Class property signals of PolkitAgent-1.0.PolkitAgent.Session

        connect(
            sigName: 'notify::cookie',
            callback: ($obj: Session, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::cookie',
            callback: ($obj: Session, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::cookie', ...args: any[]): void;
        connect(
            sigName: 'notify::identity',
            callback: ($obj: Session, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::identity',
            callback: ($obj: Session, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::identity', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * The #PolkitAgentSession class is an abstraction used for interacting with the
     * native authentication system (for example PAM) for obtaining authorizations.
     * This class is typically used together with instances that are derived from
     * the #PolkitAgentListener abstract base class.
     *
     * To perform the actual authentication, #PolkitAgentSession uses a trusted suid helper.
     * The authentication conversation is done through a pipe. This is transparent; the user
     * only need to handle the
     * #PolkitAgentSession::request,
     * #PolkitAgentSession::show-info,
     * #PolkitAgentSession::show-error and
     * #PolkitAgentSession::completed
     * signals and invoke polkit_agent_session_response() in response to requests.
     *
     * If the user successfully authenticates, the authentication helper will invoke
     * a method on the PolicyKit daemon (see polkit_authority_authentication_agent_response_sync())
     * with the given `cookie`. Upon receiving a positive response from the PolicyKit daemon (via
     * the authentication helper), the #PolkitAgentSession::completed signal will be emitted
     * with the `gained_authorization` paramter set to %TRUE.
     *
     * If the user is unable to authenticate, the #PolkitAgentSession::completed signal will
     * be emitted with the `gained_authorization` paramter set to %FALSE.
     * @class
     */
    class Session extends GObject.Object {
        // Own properties of PolkitAgent-1.0.PolkitAgent.Session

        static name: string;
        static $gtype: GObject.GType<Session>;

        // Constructors of PolkitAgent-1.0.PolkitAgent.Session

        constructor(config?: Session.ConstructorProperties);
        /**
         * Creates a new authentication session.
         *
         * The caller should connect to the
         * #PolkitAgentSession::request,
         * #PolkitAgentSession::show-info,
         * #PolkitAgentSession::show-error and
         * #PolkitAgentSession::completed
         * signals and then call polkit_agent_session_initiate() to initiate the authentication session.
         * @constructor
         * @param identity The identity to authenticate.
         * @param cookie The cookie obtained from the PolicyKit daemon
         * @returns A #PolkitAgentSession. Free with g_object_unref().
         */
        constructor(identity: Polkit.Identity, cookie: string | null);
        /**
         * Creates a new authentication session.
         *
         * The caller should connect to the
         * #PolkitAgentSession::request,
         * #PolkitAgentSession::show-info,
         * #PolkitAgentSession::show-error and
         * #PolkitAgentSession::completed
         * signals and then call polkit_agent_session_initiate() to initiate the authentication session.
         * @constructor
         * @param identity The identity to authenticate.
         * @param cookie The cookie obtained from the PolicyKit daemon
         * @returns A #PolkitAgentSession. Free with g_object_unref().
         */
        static new(identity: Polkit.Identity, cookie: string | null): Session;
        _init(config?: Session.ConstructorProperties): void;
    }

    module TextListener {
        // Signal callback interfaces

        /**
         * Signal callback interface for `tty-attrs-changed`
         */
        interface TtyAttrsChangedSignalCallback {
            ($obj: TextListener, object: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends Gio.Initable.ConstructorProperties,
                Listener.ConstructorProperties {
            // Own constructor properties of PolkitAgent-1.0.PolkitAgent.TextListener

            delay?: number | null;
            use_alternate_buffer?: boolean | null;
            use_color?: boolean | null;
        }
    }

    interface TextListener extends Gio.Initable {
        // Own properties of PolkitAgent-1.0.PolkitAgent.TextListener

        readonly delay: number;
        readonly use_alternate_buffer: boolean;
        readonly use_color: boolean;

        // Own signals of PolkitAgent-1.0.PolkitAgent.TextListener

        connect(
            sigName: 'tty-attrs-changed',
            callback: TextListener.TtyAttrsChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'tty-attrs-changed',
            callback: TextListener.TtyAttrsChangedSignalCallback
        ): number;
        emit(
            sigName: 'tty-attrs-changed',
            object: boolean,
            ...args: any[]
        ): void;

        // Class property signals of PolkitAgent-1.0.PolkitAgent.TextListener

        connect(
            sigName: 'notify::delay',
            callback: ($obj: TextListener, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::delay',
            callback: ($obj: TextListener, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::delay', ...args: any[]): void;
        connect(
            sigName: 'notify::use-alternate-buffer',
            callback: ($obj: TextListener, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::use-alternate-buffer',
            callback: ($obj: TextListener, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::use-alternate-buffer', ...args: any[]): void;
        connect(
            sigName: 'notify::use-color',
            callback: ($obj: TextListener, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::use-color',
            callback: ($obj: TextListener, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::use-color', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    /**
     * #PolkitAgentTextListener is an #PolkitAgentListener implementation
     * that interacts with the user using a textual interface.
     * @class
     */
    class TextListener extends Listener {
        // Own properties of PolkitAgent-1.0.PolkitAgent.TextListener

        static name: string;
        static $gtype: GObject.GType<TextListener>;

        // Constructors of PolkitAgent-1.0.PolkitAgent.TextListener

        constructor(config?: TextListener.ConstructorProperties);
        /**
         * Creates a new #PolkitAgentTextListener for authenticating the user
         * via an textual interface on the controlling terminal
         * (e.g. <filename>/dev/tty</filename>). This can fail if e.g. the
         * current process has no controlling terminal.
         * @constructor
         * @param cancellable A #GCancellable or %NULL.
         * @returns A #PolkitAgentTextListener or %NULL if @error is set. Free with g_object_unref() when done with it.
         */
        constructor(cancellable: Gio.Cancellable | null);
        /**
         * Creates a new #PolkitAgentTextListener for authenticating the user
         * via an textual interface on the controlling terminal
         * (e.g. <filename>/dev/tty</filename>). This can fail if e.g. the
         * current process has no controlling terminal.
         * @constructor
         * @param cancellable A #GCancellable or %NULL.
         * @returns A #PolkitAgentTextListener or %NULL if @error is set. Free with g_object_unref() when done with it.
         */
        static new(cancellable: Gio.Cancellable | null): TextListener;
        _init(config?: TextListener.ConstructorProperties): void;
    }

    interface ListenerClass {
        // Own fields of PolkitAgent-1.0.PolkitAgent.ListenerClass

        /**
         * The parent class.
         * @field
         */
        parent_class: GObject.ObjectClass;
        initiate_authentication: (
            listener: Listener,
            action_id: string | null,
            message: string | null,
            icon_name: string | null,
            details: Polkit.Details,
            cookie: string | null,
            identities: Polkit.Identity[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback | null
        ) => void;
        initiate_authentication_finish: (
            listener: Listener,
            res: Gio.AsyncResult
        ) => boolean;
    }

    /**
     * VFuncs that authentication agents needs to implement.
     * @record
     */
    abstract class ListenerClass {
        // Own properties of PolkitAgent-1.0.PolkitAgent.ListenerClass

        static name: string;
    }

    interface SessionClass {}

    abstract class SessionClass {
        // Own properties of PolkitAgent-1.0.PolkitAgent.SessionClass

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

export default PolkitAgent;
// END

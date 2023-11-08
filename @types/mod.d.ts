/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/ban-types */
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import 'gi://GObject';
import Gio from 'gi://Gio';
import Meta from 'gi://Meta';
import Shell from 'gi://Shell';
import 'gi://Soup';

import MaterialShellExtension from 'src/extension';

import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';

declare global {
    function log(msg: string): void;

    /** Localization function
     * https://developer.gnome.org/glib/stable/glib-I18N.html#N-:CAPS
     */
    function N_(format: string): string;

    /** Localization function.
     * Marks a string for translation, gets replaced with the translated string at runtime.
     * https://developer.gnome.org/glib/stable/glib-I18N.html
     */
    function _(format: string): string;

    function ngettext(singular: string, plurial: string, format: any): any;
    interface Date {
        /**
         * @deprecated toLocaleFormat is deprecated
         */
        toLocaleFormat(format: string): string;
    }

    interface Rectangular {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    namespace NodeJS {
        interface Global {
            log: (msg: string) => void;
            get_persistent_state: (_: string, key: string) => any;
            set_persistent_state: (key: string, data: GLib.Variant) => void;
            get_current_time(): number;
            get_pointer(): [number, number];
            get_window_actors(): Array<Meta.WindowActor>;

            /** Create a GAppLaunchContext set up with the correct timestamp, and targeted to activate on the current workspace.
             * @param timestamp the timestamp for the launch (or 0 for current time)
             * @param workspace a workspace index, or -1 to indicate the current one
             */
            create_app_launch_context(
                timestep: number,
                workspace: number
            ): Gio.AppLaunchContext;
            /** Material shell */
            ms: MaterialShellExtension;
            display: Meta.Display;
            session_mode: string;
            stage: Clutter.Stage;
            window_group: Clutter.Actor;
            window_manager: Shell.WM;
            workspace_manager: Meta.WorkspaceManager;
            top_window_group: Clutter.Actor;
            compositor: {
                get_laters: () => {
                    add(when: Meta.LaterType, func: GLib.SourceFunc): number;
                    remove(later_id: number): void;
                };
            };
        }
    }

    function run_at_leisure(func: () => void): void;

    // GJS extends the prototype of all objects with some functions
    interface Object {
        emit(name: string, ...args: any[]): void;
    }
}

interface DialogButtonAction {
    label: string;
    action: () => void;
    key?: number;
    default?: boolean;
}

declare type ProcessResult = [boolean, any, any, number];
declare type SignalID = number;

declare module 'gi://GObject' {
    namespace GObject {
        interface Object {
            new (): Object;
        }

        export function registerClass<K, C extends new (...args: any[]) => K>(
            klass: C
        ): C;
        export function registerClass<K, C extends new (...args: any[]) => K>(
            metaInfo: MetaInfo<any, any, any>,
            klass: C
        ): C;
        // export function registerClass<T extends MetaInfo | Function, K, C extends new (...args: any[])=>K>(a: T, b?: C): C;
    }
}

declare namespace Gtk {
    export enum Orientation {
        HORIZONTAL,
        VERTICAL,
    }

    export class Box extends Container {
        constructor(orientation: Orientation, spacing: number);
    }

    export class Container extends Widget {
        constructor();
        add(widget: Widget): void;
        set_border_width(border_width: number): void;
    }

    export class Widget {
        constructor();

        show_all(): void;
    }
}

declare module 'gi://Meta' {
    namespace Meta {
        // Expose some additional "private" fields of the Workspace class
        interface Workspace {
            _lastRemovedWindow: Meta.Window;
            _keepAliveId: number | undefined;
        }
    }
}

declare module 'gi://Clutter' {
    namespace Clutter {
        export interface Actor {
            // metaWindow?: any;
            msWorkspace?: MsWorkspace;
        }

        // Existed in older versions of clutter, needed for compatibility
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        export interface AllocationFlags {}

        type AnimatableActorFields =
            | 'fixed_x'
            | 'fixed_y'
            | 'height'
            | 'margin_bottom'
            | 'margin_left'
            | 'margin_right'
            | 'margin_top'
            | 'min_height'
            | 'min_width'
            | 'natural_height'
            | 'natural_width'
            | 'opacity'
            | 'pivot_point_z'
            | 'rotation_angle_x'
            | 'rotation_angle_y'
            | 'rotation_angle_z'
            | 'scale_x'
            | 'scale_y'
            | 'scale_z'
            | 'translation_x'
            | 'translation_y'
            | 'translation_z'
            | 'width'
            | 'x'
            | 'y'
            | 'z_position';

        interface EasingParams {
            // milliseconds
            duration: number;
            // milliseconds
            delay?: number;
            mode?: Clutter.AnimationMode;
            repeatCount?: number;
            autoReverse?: boolean;
            onComplete?: () => void;
            onStopped?: (isFinished: boolean) => void;
        }

        // Any number of extra fields for the properties to be animated (e.g. "opacity: 0").
        interface EasingParamsWithProperties
            extends EasingParams,
                Partial<Pick<Clutter.Actor, AnimatableActorFields>> {}

        export interface Animatable {
            // Some extensions added by gnome-shell in gnome-shell/js/ui/environment.js->init
            ease(params: EasingParamsWithProperties): void;
            ease_property: any;
        }

        export namespace Event {
            const $gtype: any;
        }

        export interface ActorBox {
            new (
                x?: number,
                y?: number,
                width?: number,
                height?: number
            ): ActorBox;
        }
    }
}

// declare namespace Shell {
//     interface Dialog extends St.Widget {
//         _dialog: St.Widget;
//         contentLayout: St.Widget;
//     }

//     interface ModalDialog extends St.Widget {
//         contentLayout: St.Widget;
//         dialogLayout: Dialog;

//         addButton(action: DialogButtonAction): void;

//         close(timestamp: number): void;
//         open(timestamp: number, on_primary: boolean): void;

//         setInitialKeyFocus(actor: Clutter.Actor): void;
//     }
// }

declare module 'gi://Soup' {
    namespace Soup {
        export interface Session {
            send_and_read_async(
                msg: Soup.Message,
                io_priority: number,
                cancellable: Gio.Cancellable,
                callback: Gio.AsyncReadyCallback<Soup.Session>
            ): void;
            send_and_read_finish(result: Gio.AsyncResult): GLib.Bytes | null;
        }
    }
}

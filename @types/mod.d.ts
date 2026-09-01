/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/ban-types */
import GLib from 'gi://GLib';
import 'gi://GObject';
import Gio from 'gi://Gio';
import 'gi://Soup';

declare global {
    function log(msg: string): void;

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

declare module '@girs/gobject-2.0/gobject-2.0' {
    namespace GObject {
        interface Object {
            new (): Object;
        }

        export function registerClass<K, C extends new (...args: any[]) => K>(
            klass: C
        ): C;
        export function registerClass<K, C extends new (...args: any[]) => K>(
            metaInfo: GObject.MetaInfo<any, any, any>,
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

declare module '@girs/clutter-18/clutter-18' {
    export namespace Clutter {
        // Existed in older versions of Clutter, kept for the vfunc signatures.
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        export interface AllocationFlags {}

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

declare module '@girs/soup-3.0/soup-3.0' {
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

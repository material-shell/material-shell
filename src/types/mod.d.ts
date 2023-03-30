/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/ban-types */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import { AppLaunchContext } from 'gio';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import * as Meta from 'meta';
import * as Shell from 'shell';
import * as Soup from 'soup';

import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';
import { LayoutManager } from 'src/manager/layoutManager';
import { MsNotificationManager } from 'src/manager/msNotificationManager';
import { MsThemeManager } from 'src/manager/msThemeManager';
import { MsWindowManager } from 'src/manager/msWindowManager';
import { MsWorkspaceManager } from 'src/manager/msWorkspaceManager';
import { StateManager } from 'src/manager/stateManager';
import { TooltipManager } from 'src/manager/tooltipManager';
import { HotKeysModule } from 'src/module/hotKeysModule';
import { WithSignals } from 'src/utils/gjs';
export * as GObject from 'gobject';

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
            ): AppLaunchContext;
            /** Material shell */
            ms: Extension;
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

    interface Extension extends WithSignals {
        layoutManager: LayoutManager;
        tooltipManager: TooltipManager;
        msWindowManager: MsWindowManager;
        msWorkspaceManager: MsWorkspaceManager;
        msNotificationManager: MsNotificationManager;
        msThemeManager: MsThemeManager;
        hotKeysModule: HotKeysModule;
        monitorsLength: number;
        loaded: boolean;
        locked: boolean | undefined;
        reparentInProgress: boolean | undefined;
        stateManager: StateManager;
        showSplashScreens: () => void;
        hideSplashScreens: () => void;
        closing: boolean;
        disableInProgress: boolean | undefined;
        imports: any;
        dir: any;
        metadata: any;
        layout: any;
        uuid: string;
        path: string;
        logWithStackTrace: (...args: any[]) => void;
        logFocus: (...args: any[]) => void;
        logBlank: () => void;
        log: (...args: any[]) => void;
    }

    const imports: {
        misc: {
            extensionUtils: {
                getCurrentExtension(): Extension;
            };
            [key: string]: any;
        };
        [key: string]: any;
    };
    function run_at_leisure(func: () => void): void;

    // GJS extends the prototype of all objects with some functions
    interface Object {
        emit(name: string, ...args: any[]): void;
    }
}

export interface Rectangular {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface DialogButtonAction {
    label: string;
    action: () => void;
    key?: number;
    default?: boolean;
}

declare type ProcessResult = [boolean, any, any, number];
declare type SignalID = number;

declare module 'gobject' {
    export interface MetaInfo {
        GTypeName: string;
        GTypeFlags?: TypeFlags;
        Implements?: Function[];
        Properties?: { [K: string]: ParamSpec };
        Signals?: { [K: string]: SignalDefinition };
        Requires?: Function[];
        CssName?: string;
        Template?: string;
        Children?: string[];
        InternalChildren?: string[];
    }

    interface Object {
        new (): Object;
    }

    export function registerClass<K, C extends new (...args: any[]) => K>(
        klass: C
    ): C;
    export function registerClass<K, C extends new (...args: any[]) => K>(
        metaInfo: MetaInfo,
        klass: C
    ): C;
    // export function registerClass<T extends MetaInfo | Function, K, C extends new (...args: any[])=>K>(a: T, b?: C): C;
}

declare module 'clutter' {
    export interface Actor {
        // metaWindow?: any;
        msWorkspace?: MsWorkspace;
    }

    // Existed in older versions of clutter, needed for compatibility
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface AllocationFlags {}
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

declare module 'clutter' {
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

    interface Actor extends Rectangular, GObject.Object {
        // Some extensions added by gnome-shell in gnome-shell/js/ui/environment.js->init
        ease(params: EasingParamsWithProperties): void;
        ease_property: any;
    }

    // The Clutter.d.ts file doesn't have proper 'extends' information
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Clone extends Actor {}

    interface ActorBox {
        new (x: number, y: number, width: number, height: number): ActorBox;
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

declare module 'soup' {
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

import * as GLib from 'GLib';
export * as GObject from 'GObject';
import * as GObject from 'GObject';
import * as Clutter from 'Clutter';
import * as St from 'St';
import * as Meta from 'Meta';
import { MsWorkspace } from './layout/msWorkspace/msWorkspace';

declare global {
    function log(msg: string): void;

    const global: {
        log: (msg: string) => void,
        get_persistent_state: (_: String, key: String) => any,
        set_persistent_state: (key: String, data: GLib.Variant) => void,
        get_current_time(): number,
        get_pointer(): [number, number],
        get_window_actors(): Array<Meta.WindowActor>,
        // Material shell
        ms: any,
        display: Meta.Display,
        session_mode: string,
        stage: Clutter.Actor & { key_focus: any },
        window_group: Clutter.Actor,
        window_manager: Meta.WindowManager,
        workspace_manager: Meta.WorkspaceManager,
        top_window_group: Clutter.Actor,
    };

    const imports: any;
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

// declare interface GLib {
//     PRIORITY_DEFAULT: number;
//     PRIORITY_LOW: number;

//     file_test(filename: String, test: GLib.FileTest): boolean;
//     find_program_in_path(prog: string): string | null;
//     get_current_dir(): string;
//     get_monotonic_time(): number;

//     idle_add(priority: any, callback: () => boolean): number;

//     signal_handler_block(object: GObject.Object, signal: SignalID): void;
//     signal_handler_unblock(object: GObject.Object, signal: SignalID): void;

//     source_remove(id: SignalID): void;
//     spawn_command_line_sync(cmd: string): ProcessResult;
//     spawn_command_line_async(cmd: string): boolean;

//     timeout_add(priority: number, ms: number, callback: () => Boolean): number;
// }

// declare namespace GLib {
//     class FileTest {
//         static IS_REGULAR: number;
//         static IS_SYMLINK: number;
//         static IS_DIR: number;
//         static IS_EXECUTABLE: number;
//         static EXISTS: number;
//     }
// }

// declare interface Gio {
//     // TOOD: Shouldn't this be a static method on File?
//     file_new_for_path(path: String): Gio.File;
// }

// declare namespace Gio {
//     interface File {
//         load_contents_async(cancellable: Gio.Cancellable|null, callback: Gio.AsyncReadyCallback): void;
//     }

//     interface Cancellable extends GObject.Object {
//     }

//     interface AsyncResult {
//         get_user_data(): any;
//     }

//     type AsyncReadyCallback = (source_object: GObject.Object, res: Gio.AsyncResult)=>void
// }

declare module "GObject" {
    // Why these are not in the documentation or auto-generated typedefs, I do not know.
    export const TYPE_INT: GObject.Type;
    export const TYPE_STRING: GObject.Type;
    export const TYPE_BOOLEAN: GObject.Type;

    // Extra interfaces used to help define GObject classes in js; these
    // aren't part of gi.
    export interface SignalDefinition {
        flags?: SignalFlags;
        accumulator: number;
        return_type?: Type;
        param_types?: Type[];
    }

    export interface MetaInfo {
        GTypeName: string;
        GTypeFlags?: TypeFlags;
        Implements?: Function[];
        Properties?: {[K: string]: ParamSpec};
        Signals?: {[K: string]: SignalDefinition};
        Requires?: Function[];
        CssName?: string;
        Template?: string;
        Children?: string[];
        InternalChildren?: string[];
    }

    interface Object {
        new(): Object;
    }

    export function registerClass<K, C extends new (...args: any[]) => K>(klass: C): C;
    export function registerClass<K, C extends new (...args: any[]) => K>(metaInfo: MetaInfo, klass: C): C;
    // export function registerClass<T extends MetaInfo | Function, K, C extends new (...args: any[])=>K>(a: T, b?: C): C;
}

declare module "Clutter" {
    export interface Actor {
        metaWindow?: any;
        msWorkspace?: MsWorkspace
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

declare module "Clutter" {
    // enum ActorAlign {
    //     FILL = 0,
    //     START = 1,
    //     CENTER = 3,
    //     END = 3
    // }

    // enum AnimationMode {
    //     EASE_IN_QUAD = 2,
    //     EASE_OUT_QUAD = 3,
    // }

    type AnimatableActorFields = "anchor_x" | "anchor_y" | "depth" | "fixed_x" | "fixed_y" | "height" | "margin_bottom" | "margin_left" | "margin_right" | "margin_top" | "min_height" | "min_width" | "natural_height" | "natural_width" | "opacity" | "pivot_point_z" | "rotation_angle_x" | "rotation_angle_y" | "rotation_angle_z" | "scale_center_x" | "scale_center_y" | "scale_x" | "scale_y" | "scale_z" | "translation_x" | "translation_y" | "translation_z" | "width" | "x" | "y" | "z_position";

    interface EasingParams {
        // milliseconds
        duration: number;
        // milliseconds
        delay?: number;
        mode?: Clutter.AnimationMode;
        repeatCount?: number;
        autoReverse?: boolean;
        onComplete?: ()=>void;
        onStopped?: (isFinished: boolean)=>void;
    }

    // Any number of extra fields for the properties to be animated (e.g. "opacity: 0").
    interface EasingParamsWithProperties extends EasingParams, Partial<Pick<Clutter.Actor, AnimatableActorFields>> {
    }

    interface Actor extends Rectangular, GObject.Object {
        // add(child: Actor): void;
        // add_child(child: Actor): void;
        // destroy(): void;
        // destroy_all_children(): void;

        // Some extensions added by gnome-shell in gnome-shell/js/ui/environment.js->init
        ease(params: EasingParamsWithProperties): void;
        ease_property(propName: AnimatableActorFields, target: number, params: EasingParams): void;

        // hide(): void;
        // get_child_at_index(nth: number): Actor | null;
        // get_n_children(): number;
        // get_parent(): Actor | null;
        // get_stage(): Actor | null;
        // get_transition(param: string): any | null;
        // grab_key_focus(): void;
        // is_visible(): boolean;
        // queue_redraw(): void;
        // remove_all_children(): void;
        // remove_all_transitions(): void;
        // remove_child(child: Actor): void;
        // set_child_above_sibling(child: Actor, sibling: Actor | null): void;
        // set_child_below_sibling(child: Actor, sibling: Actor | null): void;
        // set_easing_duration(msecs: number | null): void;
        // set_opacity(value: number): void;
        // set_size(width: number, height: number): void;
        // set_y_align(align: ActorAlign): void;
        // set_position(x: number, y: number): void;
        // set_size(width: number, height: number): void;
        // show(): void;
    }

    // The Clutter.d.ts file doesn't have proper 'extends' information
    interface Clone extends Actor {
    }

    interface ActorBox {
        new(x: number, y: number, width: number, height: number): ActorBox;
    }


    // interface Text {
    //     get_text(): Readonly<string>;
    //     set_text(text: string | null): void;
    // }
}

declare namespace Shell {
    interface Dialog extends St.Widget {
        _dialog: St.Widget;
        contentLayout: St.Widget;
    }

    interface ModalDialog extends St.Widget {
        contentLayout: St.Widget;
        dialogLayout: Dialog;

        addButton(action: DialogButtonAction): void;

        close(timestamp: number): void;
        open(timestamp: number, on_primary: boolean): void;

        setInitialKeyFocus(actor: Clutter.Actor): void;
    }
}



// export declare namespace St {
//     interface Adjustment{}
//     interface Bin{}
//     interface BorderImage{}
//     interface BoxLayout{}
//     interface Button{}
//     interface Clipboard{}
//     interface DrawingArea{}
//     interface Entry{}
//     interface FocusManager{}
//     interface GenericAccessible{}
//     interface Icon{}
//     interface ImageContent{}
//     interface Label{}
//     interface PasswordEntry{}
//     interface ScrollBar{}
//     interface ScrollView{}
//     interface ScrollViewFade{}
//     interface Scrollable{}
//     interface Settings{}
//     interface TextureCache{}
//     interface Theme{}
//     interface ThemeContext{}
//     interface ThemeNode{}
//     interface Viewport{}
//     interface Widget{}
//     interface WidgetAccessible{}
// }
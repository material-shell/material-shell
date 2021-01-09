import * as GObject from 'GObject';
import * as Clutter from 'Clutter';
import { Rectangular } from 'src/mod';
import { MsWindow } from './layout/msWorkspace/msWindow';

declare module "Meta" {
    export enum DisplayDirection {
        UP,
        DOWN,
        LEFT,
        RIGHT,
    }

    export enum MaximizeFlags {
        HORIZONTAL,
        VERTICAL,
        BOTH
    }

    export enum MotionDirection {
        UP,
        DOWN,
        LEFT,
        RIGHT
    }

    export enum WindowType {
        DIALOG,
        MODAL_DIALOG,
        UTILITY,
        NORMAL,
    }

    export interface Display extends GObject.Object {
        get_current_monitor(): number;
        get_focus_window(): null | Window;
        get_monitor_index_for_rect(rect: Rectangular): number;
        get_monitor_geometry(monitor: number): null | Rectangular;
        get_monitor_neighbor_index(monitor: number, direction: DisplayDirection): number;
        get_n_monitors(): number;
        get_primary_monitor(): number;
        get_tab_list(list: number, workspace: Workspace | null): Array<Window>;
        get_workspace_manager(): WorkspaceManager;
        get_monitor_in_fullscreen(monitor: number): boolean;
    }

    export interface Window extends Clutter.Actor {
        appears_focused: Readonly<boolean>;
        minimized: Readonly<boolean>;
        window_type: Readonly<any>;

        activate(time: number): void;
        change_workspace_by_index(workspace: number, append: boolean): void;
        delete(timestamp: number): void;
        get_buffer_rect(): Rectangular;
        get_compositor_private(): Clutter.Actor | null;
        get_description(): string;
        get_frame_rect(): Rectangular;
        get_maximized(): number;
        get_monitor(): number;
        get_pid(): number;
        get_stable_sequence(): number;
        get_title(): string;
        get_transient_for(): Window | null;
        get_wm_class(): string | null;
        get_work_area_for_monitor(monitor: number): null | Rectangular;
        get_workspace(): Workspace;
        has_focus(): boolean;
        is_above(): boolean;
        is_client_decorated(): boolean;
        is_fullscreen(): boolean;
        is_on_all_workspaces(): boolean;
        is_skip_taskbar(): boolean;
        make_above(): void;
        make_fullscreen(): void;
        maximize(flags: MaximizeFlags): void;
        move_frame(user_op: boolean, x: number, y: number): void;
        move_resize_frame(user_op: boolean, x: number, y: number, w: number, h: number): boolean;
        raise(): void;
        unmake_fullscreen(): void;
        unmaximize(flags: any): void;
        unminimize(): void;

        msWindow: MsWindow | undefined | null;
    }

    export interface WindowActor extends Clutter.Actor {
        get_meta_window(): Window;
    }

    export interface WindowManager extends GObject.Object {

    }

    export interface Workspace extends GObject.Object {
        n_windows: number;

        activate(time: number): boolean;
        activate_with_focus(window: Window, timestamp: number): void;
        get_neighbor(direction: MotionDirection): null | Workspace;
        get_work_area_for_monitor(monitor: number): null | Rectangular;
        index(): number;
    }

    export interface WorkspaceManager extends GObject.Object {
        append_new_workspace(activate: boolean, timestamp: number): Workspace;
        get_active_workspace(): Workspace;
        get_active_workspace_index(): number;
        get_n_workspaces(): number;
        get_workspace_by_index(index: number): null | Workspace;
        remove_workspace(workspace: Workspace, timestamp: number): void;
        reorder_workspace(workspace: Workspace, new_index: number): void;
    }
}
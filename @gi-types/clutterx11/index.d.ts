/**
 * ClutterX11 7
 *
 * Generated from 7.0
 */

import * as Clutter from "@gi-types/clutter";
import * as Cogl from "@gi-types/cogl";
import * as CoglPango from "@gi-types/coglpango";
import * as xlib from "@gi-types/xlib";
import * as GObject from "@gi-types/gobject";

export function get_default_display(): xlib.Display;
export function get_default_screen(): number;
export function get_use_stereo_stage(): boolean;
export function set_display(xdpy: xlib.Display): void;
export function set_use_stereo_stage(use_stereo: boolean): void;
export function trap_x_errors(): void;
export function untrap_x_errors(): number;
export type FilterFunc = (xev: xlib.XEvent, cev: Clutter.Event) => FilterReturn;

export namespace FilterReturn {
    export const $gtype: GObject.GType<FilterReturn>;
}

export enum FilterReturn {
    CONTINUE = 0,
    TRANSLATE = 1,
    REMOVE = 2,
}

export class XInputDevice {
    static $gtype: GObject.GType<XInputDevice>;

    constructor(copy: XInputDevice);
}

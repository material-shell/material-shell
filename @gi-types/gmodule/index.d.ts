/**
 * GModule 2.0
 *
 * Generated from 2.0
 */

import * as GLib from "@gi-types/glib";
import * as GObject from "@gi-types/gobject";

export function module_build_path(directory: string | null, module_name: string): string;
export function module_error(): string;
export function module_supported(): boolean;
export type ModuleCheckInit = (module: Module) => string;
export type ModuleUnload = (module: Module) => void;

export namespace ModuleFlags {
    export const $gtype: GObject.GType<ModuleFlags>;
}

export enum ModuleFlags {
    LAZY = 1,
    LOCAL = 2,
    MASK = 3,
}

export class Module {
    static $gtype: GObject.GType<Module>;

    constructor(copy: Module);

    // Members
    close(): boolean;
    make_resident(): void;
    name(): string;
    symbol(symbol_name: string): [boolean, any | null];
    static build_path(directory: string | null, module_name: string): string;
    static error(): string;
    static supported(): boolean;
}

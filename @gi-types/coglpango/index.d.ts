/**
 * CoglPango 7
 *
 * Generated from 7.0
 */

import * as GObject from '@gi-types/gobject';
import * as Pango from '@gi-types/pango';

export function ensure_glyph_cache_for_layout(layout: Pango.Layout): void;
export function font_map_clear_glyph_cache(font_map: FontMap): void;
export function font_map_create_context(font_map: FontMap): Pango.Context;
export function font_map_get_renderer(font_map: FontMap): Pango.Renderer;
export function font_map_get_use_mipmapping(font_map: FontMap): boolean;
export function font_map_new(): Pango.FontMap;
export function font_map_set_resolution(font_map: FontMap, dpi: number): void;
export function font_map_set_use_mipmapping(
    font_map: FontMap,
    value: boolean
): void;
export namespace Renderer {
    export interface ConstructorProperties
        extends Pango.Renderer.ConstructorProperties {
        [key: string]: any;
        context: any;
    }
}
export class Renderer extends Pango.Renderer {
    static $gtype: GObject.GType<Renderer>;

    constructor(
        properties?: Partial<Renderer.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Renderer.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    context: any;
}
export type FontMap = Pango.FontMap;

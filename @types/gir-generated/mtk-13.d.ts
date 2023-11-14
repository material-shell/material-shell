/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './mtk-13-import.d.ts';
/**
 * Mtk-13
 */

import type cairo from './cairo-1.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';
import type Graphene from './graphene-1.0.js';

export namespace Mtk {
    enum RoundingStrategy {
        SHRINK,
        GROW,
        ROUND,
    }
    function rectangle_from_graphene_rect(
        rect: Graphene.Rect,
        rounding_strategy: RoundingStrategy
    ): /* dest */ Rectangle;
    function x11_errors_deinit(): void;
    interface Rectangle {
        // Own fields of Mtk-13.Mtk.Rectangle

        /**
         * X coordinate of the top-left corner
         * @field
         */
        x: number;
        /**
         * Y coordinate of the top-left corner
         * @field
         */
        y: number;
        /**
         * Width of the rectangle
         * @field
         */
        width: number;
        /**
         * Height of the rectangle
         * @field
         */
        height: number;

        // Owm methods of Mtk-13.Mtk.Rectangle

        area(): number;
        contains_rect(inner_rect: Rectangle): boolean;
        copy(): Rectangle;
        could_fit_rect(inner_rect: Rectangle): boolean;
        /**
         * Compares the two rectangles
         * @param src2 The second rectangle
         * @returns Whether the two rectangles are equal
         */
        equal(src2: Rectangle): boolean;
        free(): void;
        /**
         * Similar to [method`Rectangle`.overlap] but ignores the vertical location.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap horizontally
         */
        horiz_overlap(rect2: Rectangle): boolean;
        /**
         * Find the intersection between the two rectangles
         * @param src2 another #MtkRectangle
         * @returns TRUE is some intersection exists and is not degenerate, FALSE   otherwise.
         */
        intersect(
            src2: Rectangle
        ): [/* returnType */ boolean, /* dest */ Rectangle];
        /**
         * Similar to [method`Rectangle`.intersect] but doesn't provide
         * the location of the intersection.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap
         */
        overlap(rect2: Rectangle): boolean;
        to_graphene_rect(): Graphene.Rect;
        /**
         * Computes the union of the two rectangles
         * @param rect2 another #MtkRectangle
         */
        union(rect2: Rectangle): /* dest */ Rectangle;
        /**
         * Similar to [method`Rectangle`.overlap] but ignores the horizontal location.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap vertically
         */
        vert_overlap(rect2: Rectangle): boolean;
    }

    class Rectangle {
        // Own properties of Mtk-13.Mtk.Rectangle

        static name: string;

        // Constructors of Mtk-13.Mtk.Rectangle

        /**
         * Creates a new rectangle
         * @constructor
         * @param x X coordinate of the top left corner
         * @param y Y coordinate of the top left corner
         * @param width Width of the rectangle
         * @param height Height of the rectangle
         */
        constructor(x: number, y: number, width: number, height: number);
        /**
         * Creates a new rectangle
         * @constructor
         * @param x X coordinate of the top left corner
         * @param y Y coordinate of the top left corner
         * @param width Width of the rectangle
         * @param height Height of the rectangle
         */
        static new(
            x: number,
            y: number,
            width: number,
            height: number
        ): Rectangle;
        static from_graphene_rect(
            rect: Graphene.Rect,
            rounding_strategy: RoundingStrategy
        ): /* dest */ Rectangle;
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

export default Mtk;
// END

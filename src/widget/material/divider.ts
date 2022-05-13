/** Gnome libs imports */
import * as GObject from 'gobject';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class MatDivider extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MatDivider',
    };

    vertical: boolean;

    constructor(vertical = false) {
        super({
            y_expand: vertical,
            x_expand: !vertical,
        });

        this.vertical = vertical;
    }

    override vfunc_get_preferred_width(forHeight: number): [number, number] {
        return this.vertical
            ? [1, 1]
            // Note: clutter typing is incorrect here
            : super.vfunc_get_preferred_width(forHeight) as [number, number];
    }
    override vfunc_get_preferred_height(forWidth: number): [number, number] {
        return !this.vertical
            ? [1, 1]
            // Note: clutter typing is incorrect here
            : super.vfunc_get_preferred_height(forWidth) as [number, number];
    }
}

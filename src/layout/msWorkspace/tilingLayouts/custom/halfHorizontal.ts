/** Gnome libs imports */
import * as GObject from 'gobject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { HalfLayout, } from "src/layout/msWorkspace/tilingLayouts/custom/half";
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class HalfHorizontalLayout extends HalfLayout {
    static state = { key: 'half-horizontal' };
    static label = 'Half horizontal';

    isVerticalLayout() {
        return false;
    }
}

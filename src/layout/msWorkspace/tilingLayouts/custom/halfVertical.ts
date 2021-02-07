/** Gnome libs imports */
import * as GObject from 'gobject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { HalfLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/half';
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class HalfVerticalLayout extends HalfLayout {
    static state = { key: 'half-vertical' };
    static label = 'Half vertical';

    isVerticalLayout() {
        return true;
    }
}

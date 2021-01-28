/** Gnome libs imports */
import * as GObject from 'gobject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { SimpleLayout, } from "src/layout/msWorkspace/tilingLayouts/custom/simple";
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class SimpleVerticalLayout extends SimpleLayout {
    isVerticalLayout() {
        return true;
    }
}

SimpleVerticalLayout.state = { key: 'simple-vertical' };
SimpleVerticalLayout.label = 'Simple vertical';

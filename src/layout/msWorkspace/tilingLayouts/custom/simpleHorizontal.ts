/** Gnome libs imports */
import * as GObject from 'gobject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { SimpleLayout, } from "src/layout/msWorkspace/tilingLayouts/custom/simple";
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class SimpleHorizontalLayout extends SimpleLayout {
    isVerticalLayout() {
        return false;
    }
}

SimpleHorizontalLayout.state = { key: 'simple-horizontal' };
SimpleHorizontalLayout.label = 'Simple horizontal';

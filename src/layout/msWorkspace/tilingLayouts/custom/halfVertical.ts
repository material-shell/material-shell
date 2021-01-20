/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { HalfLayout, } from "src/layout/msWorkspace/tilingLayouts/custom/half";

@registerGObjectClass
export class HalfVerticalLayout extends HalfLayout {
    isVerticalLayout() {
            return true;
        }
}

HalfVerticalLayout.state = { key: 'half-vertical' };
HalfVerticalLayout.label = 'Half vertical';

/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { HalfLayout, } from "src/layout/msWorkspace/tilingLayouts/custom/half";

@registerGObjectClass
export class HalfHorizontalLayout extends HalfLayout {
    isVerticalLayout() {
            return false;
        }
}

HalfHorizontalLayout.state = { key: 'half-horizontal' };
HalfHorizontalLayout.label = 'Half horizontal';

/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { SimpleLayout, } from "src/layout/msWorkspace/tilingLayouts/custom/simple";

@registerGObjectClass
export class SimpleVerticalLayout extends SimpleLayout {
    isVerticalLayout() {
            return true;
        }
}

SimpleVerticalLayout.state = { key: 'simple-vertical' };
SimpleVerticalLayout.label = 'Simple vertical';

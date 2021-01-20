const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as GObject from 'GObject';
import * as Clutter from 'Clutter';
import { registerGObjectClass } from 'src/utils/gjs';

/** Extension imports */
import {
    BaseResizeableTilingLayout,
} from "src/layout/msWorkspace/tilingLayouts/baseResizeableTiling";

@registerGObjectClass
export class SimpleLayout extends BaseResizeableTilingLayout {
    static state = { key: 'simple' };
    static label = 'Simple';

    isVerticalLayout(box: Clutter.ActorBox) {
        return box.get_width() < box.get_height();
    }

    tileAll(box?: Clutter.ActorBox) {
        if (!box) {
            box = new Clutter.ActorBox();
            box.x2 = this.tileableContainer.allocation.get_width();
            box.y2 = this.tileableContainer.allocation.get_height();
        }

        const vertical = this.isVerticalLayout(box);

        if (this.mainPortion.vertical !== vertical) {
            this.mainPortion.convert();
        }

        super.tileAll(box);
    }
}

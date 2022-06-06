const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as Clutter from 'clutter';
/** Extension imports */
import { BaseResizeableTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class SimpleLayoutBase<
    S extends { key: string }
> extends BaseResizeableTilingLayout<S> {
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

@registerGObjectClass
export class SimpleLayout extends SimpleLayoutBase<{ key: 'simple' }> {
    static state = { key: 'simple' };
    static label = 'Simple';
}

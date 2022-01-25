/** Gnome libs imports */
import * as Clutter from 'clutter';
import { BaseResizeableTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { registerGObjectClass } from 'src/utils/gjs';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class HalfLayout extends BaseResizeableTilingLayout {
    static state = { key: 'half' };
    static label = 'Half';

    updateMainPortionLength(length: number) {
        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }

        while (this.mainPortion.portionLength < length) {
            if (this.mainPortion.children.length === 0) {
                this.mainPortion.push();
            } else {
                this.mainPortion.children[1].push();
            }
        }
    }

    isVerticalLayout(box: Clutter.ActorBox) {
        return box.get_width() < box.get_height();
    }

    tileAll(box?: Clutter.ActorBox) {
        box = this.resolveBox(box);

        const vertical = this.isVerticalLayout(box);

        if (this.mainPortion.vertical !== vertical) {
            this.mainPortion.convert();
        }

        super.tileAll(box);
    }
}

/** Gnome libs imports */
import * as GObject from 'gobject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { BaseResizeableTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { registerGObjectClass } from 'src/utils/gjs';
import { Portion } from '../../portion';

@registerGObjectClass
export class RatioLayout extends BaseResizeableTilingLayout<{ key: 'ratio' }> {
    static state = { key: 'ratio' };
    static label = 'Ratio';

    updateMainPortionLength(length: number) {
        const pushInPortion = (portion: Portion) => {
            if (portion.children.length === 2) {
                pushInPortion(portion.children[1]);
            } else {
                portion.push();
            }
        };

        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }

        while (length > 1 && this.mainPortion.portionLength < length) {
            pushInPortion(this.mainPortion);
        }
    }
}

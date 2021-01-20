/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { BaseResizeableTilingLayout, } from "src/layout/msWorkspace/tilingLayouts/baseResizeableTiling";

@registerGObjectClass
export class RatioLayout extends BaseResizeableTilingLayout {
    updateMainPortionLength(length) {
            const pushInPortion = (portion) => {
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

RatioLayout.state = { key: 'ratio' };
RatioLayout.label = 'Ratio';

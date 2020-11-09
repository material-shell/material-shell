/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseResizeableTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseResizeableTiling;

/* exported RatioLayout */
var RatioLayout = GObject.registerClass(
    class RatioLayout extends BaseResizeableTilingLayout {
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
);

RatioLayout.state = { key: 'ratio' };
RatioLayout.label = 'Ratio';

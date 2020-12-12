/** Gnome libs imports */
const { GObject, Clutter } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseResizeableTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseResizeableTiling;

/* exported HalfLayout */
var HalfLayout = GObject.registerClass(
    class HalfLayout extends BaseResizeableTilingLayout {
        updateMainPortionLength(length) {
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

        isVerticalLayout(box) {
            return box.get_width() < box.get_height();
        }

        tileAll(box) {
            box = this.resolveBox(box);

            const vertical = this.isVerticalLayout(box);

            if (this.mainPortion.vertical !== vertical) {
                this.mainPortion.convert();
            }

            super.tileAll(box);
        }
    }
);

HalfLayout.state = { key: 'half' };
HalfLayout.label = 'Half';

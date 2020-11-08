/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { VerticalPortion, HorizontalPortion } = Me.imports.src.layout.msWorkspace.portions;

/* exported HalfLayout */
var HalfLayout = GObject.registerClass(
    class HalfLayout extends BaseTilingLayout {
        updateMainPortionLength(length) {
            while (this.mainPortion.portionLength > length) {
                this.mainPortion.pop();
            }

            while (this.mainPortion.portionLength < length) {
                if (this.mainPortion.children.length === 0) {
                    this.mainPortion.push();
                } else if (this.mainPortion.children.length === 1) {
                    this.mainPortion.push(200);
                } else {
                    this.mainPortion.children[1].push();
                }
            }
        }

        isVerticalLayout(box) {
            return box.get_width() < box.get_height();
        }

        updateMainPortionBox(box) {
            const vertical = this.isVerticalLayout(box);
            const MainPortion = vertical ? VerticalPortion : HorizontalPortion;

            if (!(this.mainPortion instanceof MainPortion)) {
                this.mainPortion = vertical
                    ? this.mainPortion.convertToVertical()
                    : this.mainPortion.convertToHorizontal();
            }

            super.updateMainPortionBox(box);
        }
    }
);

HalfLayout.state = { key: 'half' };
HalfLayout.label = 'Half';

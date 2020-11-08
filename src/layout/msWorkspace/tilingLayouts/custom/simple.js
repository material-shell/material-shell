/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { VerticalPortion, HorizontalPortion } = Me.imports.src.layout.msWorkspace.portions;

/* exported SimpleLayout */
var SimpleLayout = GObject.registerClass(
    class SimpleLayout extends BaseTilingLayout {
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

SimpleLayout.state = { key: 'simple' };
SimpleLayout.label = 'Simple';

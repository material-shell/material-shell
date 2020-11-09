/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseResizeableTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseResizeableTiling;
const { VerticalPortion, HorizontalPortion } = Me.imports.src.layout.msWorkspace.portions;

/* exported SimpleLayout */
var SimpleLayout = GObject.registerClass(
    class SimpleLayout extends BaseResizeableTilingLayout {
        isVerticalLayout(box) {
            return box.get_width() < box.get_height();
        }

        tileAll(box) {
            if (!box) {
                box = new Clutter.ActorBox();
                box.x2 = this.tileableContainer.allocation.get_width();
                box.y2 = this.tileableContainer.allocation.get_height();
            }

            const vertical = this.isVerticalLayout(box);
            const MainPortion = vertical ? VerticalPortion : HorizontalPortion;

            if (!(this.mainPortion instanceof MainPortion)) {
                this.mainPortion = vertical
                    ? this.mainPortion.convertToVertical()
                    : this.mainPortion.convertToHorizontal();
            }

            super.tileAll(box);
        }
    }
);

SimpleLayout.state = { key: 'simple' };
SimpleLayout.label = 'Simple';

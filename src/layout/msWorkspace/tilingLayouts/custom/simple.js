/** Gnome libs imports */
const { GObject, Clutter } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseResizeableTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseResizeableTiling;

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

            if (this.mainPortion.vertical !== vertical) {
                this.mainPortion.convert();
            }

            super.tileAll(box);
        }
    }
);

SimpleLayout.state = { key: 'simple' };
SimpleLayout.label = 'Simple';

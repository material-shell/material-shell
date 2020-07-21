/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;

/* exported HalfLayout */
var HalfLayout = GObject.registerClass(
    class HalfLayout extends BaseTilingLayout {
        tileTileable(tileable, box, index, siblingLength) {
            if (box.get_width() > box.get_height()) {
                this.tileTileableHorizontal(
                    tileable,
                    box,
                    index,
                    siblingLength
                );
            } else {
                this.tileTileableVertical(tileable, box, index, siblingLength);
            }
        }

        tileTileableHorizontal(tileable, box, index, siblingLength) {
            let masterWidth =
                siblingLength > 1 ? box.get_width() / 2 : box.get_width();
            let x, y, width, height;
            if (index === 0) {
                x = box.x1;
                y = box.y1;
                width = masterWidth;
                height = box.get_height();
            } else {
                x = box.x1 + masterWidth;
                y =
                    box.y1 +
                    ((index - 1) * box.get_height()) / (siblingLength - 1);
                width = box.get_width() - masterWidth;
                height = box.get_height() / (siblingLength - 1);
            }
            let {
                x: gapX,
                y: gapY,
                width: gapWidth,
                height: gapHeight,
            } = this.applyGaps(x, y, width, height);

            tileable.x = gapX;
            tileable.y = gapY;
            tileable.width = gapWidth;
            tileable.height = gapHeight;
        }

        tileTileableVertical(tileable, box, index, siblingLength) {
            let masterHeight =
                siblingLength > 1 ? box.get_height() / 2 : box.get_height();
            let x, y, width, height;

            if (index === 0) {
                x = box.x1;
                y = box.y1;
                width = box.get_width();
                height = masterHeight;
            } else {
                x =
                    box.x1 +
                    ((index - 1) * box.get_width()) / (siblingLength - 1);
                y = box.y1 + masterHeight;
                width = box.get_width() / (siblingLength - 1);
                height = box.get_height() - masterHeight;
            }
            let {
                x: gapX,
                y: gapY,
                width: gapWidth,
                height: gapHeight,
            } = this.applyGaps(x, y, width, height);

            tileable.x = gapX;
            tileable.y = gapY;
            tileable.width = gapWidth;
            tileable.height = gapHeight;
        }
    }
);

HalfLayout.key = 'half';

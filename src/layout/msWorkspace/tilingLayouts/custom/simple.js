/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;

/* exported SimpleLayout */
var SimpleLayout = GObject.registerClass(
    class SimpleLayout extends BaseTilingLayout {
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
            let { x, y, width, height } = this.applyGaps(
                box.x1 + (index * box.get_width()) / siblingLength,
                box.y1,
                box.get_width() / siblingLength,
                box.get_height()
            );
            tileable.x = x;
            tileable.y = y;
            tileable.width = width;
            tileable.height = height;
        }

        tileTileableVertical(tileable, box, index, siblingLength) {
            let { x, y, width, height } = this.applyGaps(
                box.x1,
                (index * box.get_height()) / siblingLength,
                box.get_width(),
                box.get_height() / siblingLength
            );
            tileable.x = x;
            tileable.y = y;
            tileable.width = width;
            tileable.height = height;
        }
    }
);

SimpleLayout.key = 'simple';
SimpleLayout.label = 'Simple';

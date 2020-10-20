/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;

/* exported GridLayout */
var GridLayout = GObject.registerClass(
    class GridLayout extends BaseTilingLayout {
        tileTileable(tileable, box, index, siblingLength) {
            const columns = Math.ceil(Math.sqrt(siblingLength));

            const rows = Math.ceil(siblingLength / columns);
            const portionWidth = box.get_width() / columns;
            const portionHeight = box.get_height() / rows;
            const columnIndex = Math.floor(index / rows);
            const rowIndex = index - columnIndex * rows;

            let { x, y, width, height } = this.applyGaps(
                columnIndex * portionWidth,
                rowIndex * portionHeight,
                portionWidth,
                index === siblingLength - 1
                    ? portionHeight * (columns * rows - index)
                    : portionHeight
            );
            tileable.x = x;
            tileable.y = y;
            tileable.width = width;
            tileable.height = height;
        }
    }
);

GridLayout.key = 'grid';
GridLayout.label = 'Grid';

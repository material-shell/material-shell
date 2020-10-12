/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { BaseContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.baseContainer;

/* exported GridContainer */
class GridContainer extends BaseContainer {
    tileTileable(tileable, box, index, siblingLength) {
        const columns = Math.ceil(Math.sqrt(siblingLength));

        const rows = Math.ceil(siblingLength / columns);
        const portionWidth = box.width / columns;
        const portionHeight = box.height / rows;
        const columnIndex = Math.floor(index / rows);
        const rowIndex = index - columnIndex * rows;

        let { x, y, width, height } = this.applyGaps(
            box.x + (columnIndex * portionWidth),
            box.y + (rowIndex * portionHeight),
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
};

GridContainer.key = 'grid';

/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { BaseContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.baseContainer;

/* exported HalfContainer */
class HalfContainer extends BaseContainer {
    tileTileable(tileable, box, index, siblingLength) {
        if (box.width > box.height) {
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
            siblingLength > 1 ? box.width / 2 : box.width;
        let x, y, width, height;
        if (index === 0) {
            x = box.x;
            y = box.y;
            width = masterWidth;
            height = box.height;
        } else {
            x = box.x + masterWidth;
            y =
                box.y +
                ((index - 1) * box.height) / (siblingLength - 1);
            width = box.width - masterWidth;
            height = box.height / (siblingLength - 1);
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
            siblingLength > 1 ? box.height / 2 : box.height;
        let x, y, width, height;

        if (index === 0) {
            x = box.x;
            y = box.y;
            width = box.width;
            height = masterHeight;
        } else {
            x =
                box.x +
                ((index - 1) * box.width) / (siblingLength - 1);
            y = box.y + masterHeight;
            width = box.width / (siblingLength - 1);
            height = box.height - masterHeight;
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
};

HalfContainer.key = 'half';

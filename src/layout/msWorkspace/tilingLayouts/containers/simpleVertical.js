/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { BaseContainer } = Me.imports.src.layout.msWorkspace.tilingLayouts.containers.baseContainer

/* exported SimpleVertical */
class SimpleVertical extends BaseContainer {
    tileTileable(tileable, box, index, siblingLength) {
        let { x, y, width, height } = this.applyGaps(
            box.x,
            (index * box.height) / siblingLength,
            box.width,
            box.height / siblingLength
        );

        tileable.x = x;
        tileable.y = y;
        tileable.width = width;
        tileable.height = height;
    }
};

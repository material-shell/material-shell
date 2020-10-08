/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { BaseContainer } = Me.imports.src.layout.msWorkspace.tilingLayouts.containers.baseContainer

/* exported SimpleHorizontal */
class SimpleHorizontal extends BaseContainer {
    tileTileable(tileable, box, index, siblingLength) {
        let { x, y, width, height } = this.applyGaps(
            box.x + (index * box.width) / siblingLength,
            box.y,
            box.width / siblingLength,
            box.height
        );

        tileable.x = x;
        tileable.y = y;
        tileable.width = width;
        tileable.height = height;
    }
};

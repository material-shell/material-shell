/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SimpleContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.simple;

/* exported SimpleHorizontalContainer */
class SimpleHorizontalContainer extends SimpleContainer {
    tileTileable(tileable, box, index, siblingLength) {
        this.tileTileableHorizontal(tileable, box, index, siblingLength);
    }
};

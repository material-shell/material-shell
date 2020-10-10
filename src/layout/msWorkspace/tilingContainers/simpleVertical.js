/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension()
const { SimpleLayout } = Me.imports.src.layout.msWorkspace.tilingContainers.simple;

/* exported SimpleVerticalLayout */
class SimpleVerticalLayout extends SimpleLayout {
    tileTileable(tileable, box, index, siblingLength) {
        this.tileTileableVertical(tileable, box, index, siblingLength);
    }
};

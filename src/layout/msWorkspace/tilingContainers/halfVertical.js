/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension()
const { HalfContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.half;

/* exported HalfVerticalContainer */
class HalfVerticalContainer extends HalfContainer {
    tileTileable(tileable, box, index, siblingLength) {
        this.tileTileableVertical(tileable, box, index, siblingLength);
    }
};

HalfVerticalContainer.key = 'half-vertical';

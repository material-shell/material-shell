/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { HalfContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.half;

/* exported HalfHorizontalContainer */
class HalfHorizontalContainer extends HalfContainer {
    tileTileable(tileable, box, index, siblingLength) {
        this.tileTileableHorizontal(tileable, box, index, siblingLength);
    }
};

HalfHorizontalContainer.key = 'half-horizontal';

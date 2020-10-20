/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    HalfLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.custom.half;

/* exported HalfVerticalLayout */
var HalfVerticalLayout = GObject.registerClass(
    class HalfVerticalLayout extends HalfLayout {
        tileTileable(tileable, box, index, siblingLength) {
            this.tileTileableVertical(tileable, box, index, siblingLength);
        }
    }
);

HalfVerticalLayout.key = 'half-vertical';
HalfVerticalLayout.label = 'Half vertical';

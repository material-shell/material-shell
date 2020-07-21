/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    SimpleLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.custom.simple;

/* exported SimpleVerticalLayout */
var SimpleVerticalLayout = GObject.registerClass(
    class SimpleVerticalLayout extends SimpleLayout {
        tileTileable(tileable, box, index, siblingLength) {
            this.tileTileableVertical(tileable, box, index, siblingLength);
        }
    }
);

SimpleVerticalLayout.key = 'simple-vertical';

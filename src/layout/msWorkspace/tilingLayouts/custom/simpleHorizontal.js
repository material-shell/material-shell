/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    SimpleLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.custom.simple;

/* exported SimpleHorizontalLayout */
var SimpleHorizontalLayout = GObject.registerClass(
    class SimpleHorizontalLayout extends SimpleLayout {
        tileTileable(tileable, box, index, siblingLength) {
            this.tileTileableHorizontal(tileable, box, index, siblingLength);
        }
    }
);

SimpleHorizontalLayout.key = 'simple-horizontal';
SimpleHorizontalLayout.label = 'Simple horizontal';

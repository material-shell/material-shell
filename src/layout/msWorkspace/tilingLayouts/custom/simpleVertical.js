const { GObject } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

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

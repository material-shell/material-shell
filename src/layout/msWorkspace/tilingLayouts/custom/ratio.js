const { GObject } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;

/* exported RatioLayout */
var RatioLayout = GObject.registerClass(
    class RatioLayout extends BaseTilingLayout {
        tileTileable(tileable, box, index, siblingLength) {
            // Define tileable.x tileable.y tileable.width tileable.height
        }
    }
);

RatioLayout.key = 'ratio';

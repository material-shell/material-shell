/** Gnome libs imports */
const { Clutter, GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
    ResizablePortion,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { SimpleHorizontal } = Me.imports.src.layout.msWorkspace.tilingLayouts.containers.simpleHorizontal;
const { SimpleVertical } = Me.imports.src.layout.msWorkspace.tilingLayouts.containers.simpleVertical;

/* exported I3wmLayout */
var I3wmLayout = GObject.registerClass(
    class I3wmLayout extends BaseTilingLayout {
        _init(msWorkspace) {
            super._init(msWorkspace);

            this.container = new SimpleHorizontal(this);
        }

        addContainedTileables() {
            for (const tileable of this.tileableListVisible) {
                if (!this.container.containsTileable(tileable)) {
                    this.container.addDeepTileable(tileable);
                }
            }

            this.container.checkContained();
        }

        defineContainerBoxes(box) {
            this.container.defineContainerBoxes({
                x: box.x1,
                y: box.y1,
                width: box.get_width(),
                height: box.get_height(),
            });
        }

        tileAll(box) {
            if (!box) {
                box = new Clutter.ActorBox();
                box.x2 = this.tileableContainer.allocation.get_width();
                box.y2 = this.tileableContainer.allocation.get_height();
            }
            box = box || this.tileableContainer.allocation;

            this.addContainedTileables();
            log(this.container.contained.length);
            if (box) {
                this.defineContainerBoxes(box);
                super.tileAll(box);
            }
        }

        tileTileable(tileable) {
            this.container.containerTileTileable(tileable);
        }
    }
);

I3wmLayout.key = 'i3wm';

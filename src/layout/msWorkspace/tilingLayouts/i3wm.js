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

        alterTileable(tileable) {
            super.alterTileable(tileable);

            if (
                tileable !== this.msWorkspace.appLauncher ||
                tileable === this.msWorkspace.tileableFocused
            ) {
                this.container.addTileable(tileable);
            }

            if (this.container.contained.length == 2) {
                this.container.addTileable(new SimpleVertical(this))
            }

            if (this.container.contained.length == 3 && this.container.contained[2].contained.length == 2) {
                this.container.addTileable(new SimpleHorizontal(this))
            }
        }

        restoreTileable(tileable) {
            super.restoreTileable(tileable);

            this.container.removeTileable(tileable);
        }

        showAppLauncher() {
            super.showAppLauncher();

            this.container.addTileable(this.msWorkspace.appLauncher);
        }

        hideAppLauncher() {
            super.hideAppLauncher();

            this.container.removeTileable(this.msWorkspace.appLauncher);
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

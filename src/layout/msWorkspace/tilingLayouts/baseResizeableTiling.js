/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const {
    SetAllocation,
    Allocate,
    AllocatePreferredSize,
} = Me.imports.src.utils.compatibility;
const { getSettings } = Me.imports.src.utils.settings;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { HorizontalPortion } = Me.imports.src.layout.msWorkspace.portions;

/* exported BaseTilingLayout */
var BaseResizeableTilingLayout = GObject.registerClass(
    class BaseResizeableTilingLayout extends BaseTilingLayout {
        _init(msWorkspace, state = {}) {
            this.mainPortion = new HorizontalPortion();

            super._init(msWorkspace, state);
        }

        getTileablePortion(tileable) {
            return this.mainPortion.getPortionAtIndex(
                this.tileableListVisible.indexOf(tileable)
            );
        }

        tileTileable(tileable, box) {
            const portion = this.getTileablePortion(tileable);

            if (portion) {
                box = portion.box;
            }

            const { x, y, width, height } = this.applyGaps(
                box.x1, box.y1, box.get_width(), box.get_height()
            );

            tileable.x = x;
            tileable.y = y;
            tileable.width = width;
            tileable.height = height;
        }

        updateMainPortionLength(length) {
            while (this.mainPortion.portionLength > length) {
                this.mainPortion.pop();
            }

            while (length > 1 && this.mainPortion.portionLength < length) {
                this.mainPortion.push();
            }
        }

        updateMainPortionBox(box) {
            this.mainPortion.setPositionAndSize(box);
        }

        tileAll(box) {
            if (!box) {
                box = new Clutter.ActorBox();
                box.x2 = this.tileableContainer.allocation.get_width();
                box.y2 = this.tileableContainer.allocation.get_height();
            }

            this.updateMainPortionLength(this.tileableListVisible.length);
            this.updateMainPortionBox(box);

            this.tileableListVisible.forEach((tileable) => {
                if (tileable instanceof MsWindow && tileable.dragged) return;
                this.tileTileable(
                    tileable,
                    box || this.tileableContainer.allocation
                );
                if (tileable instanceof MsWindow) {
                    tileable.updateMetaWindowPositionAndSize();
                }
            });
        }
    }
);

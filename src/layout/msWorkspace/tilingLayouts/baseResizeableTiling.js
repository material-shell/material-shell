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

        getTileablePortionRatio(tileable) {
            return this.mainPortion.getRatioForIndex(
                this.tileableListVisible.indexOf(tileable)
            );
        }

        tileTileable(tileable, box) {
            let ratio = this.getTileablePortionRatio(tileable);

            if (!ratio) {
                ratio = { x: 0, y: 0, width: 1, height: 1 };
            }

            const { x, y, width, height } = this.applyGaps(
                box.x1 + (ratio.x * box.get_width()),
                box.y1 + (ratio.y * box.get_height()),
                ratio.width * box.get_width(),
                ratio.height * box.get_height(),
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

        tileAll(box) {
            if (!box) {
                box = new Clutter.ActorBox();
                box.x2 = this.tileableContainer.allocation.get_width();
                box.y2 = this.tileableContainer.allocation.get_height();
            }

            this.updateMainPortionLength(this.tileableListVisible.length);

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

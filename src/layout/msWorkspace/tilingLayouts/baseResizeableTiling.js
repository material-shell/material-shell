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
const { Portion } = Me.imports.src.layout.msWorkspace.portion;

/* exported BaseTilingLayout */
var BaseResizeableTilingLayout = GObject.registerClass(
    class BaseResizeableTilingLayout extends BaseTilingLayout {
        _init(msWorkspace, state = {}) {
            this.mainPortion = new Portion(100);

            super._init(msWorkspace, state);
        }

        getTileableIndex(tileable) {
            return this.tileableListVisible.indexOf(tileable);
        }

        getTileablePortionRatio(tileable) {
            const index = this.getTileableIndex(tileable);

            if (index < 0) {
                return;
            }

            return this.mainPortion.getRatioForIndex(index);
        }

        getTileableBorder(tileable, after = false) {
            const index = this.getTileableIndex(tileable);

            if (index < 0) {
                return;
            }

            return this.mainPortion.getBorderForIndex(index, after);
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
            this.updateMainPortionLength(this.tileableListVisible.length);

            super.tileAll(box);
        }
    }
);

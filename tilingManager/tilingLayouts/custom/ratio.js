const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseGrabbableLayout
} = Me.imports.tilingManager.tilingLayouts.custom.baseGrabbable;

let ratio = null;

/* exported RatioLayout */
var RatioLayout = class RatioLayout extends BaseGrabbableLayout {
    onTileRegulars(windows) {
        super.onTileRegulars(windows);
        if (!windows.length) return;
        ratio = !!ratio ? ratio : global.tilingManager.ratio; // changed to a let so it can be modified by hotkeys

        const workArea = this.getWorkspaceBounds();

        windows.forEach((window, index) => {
            let windowArea = {
                x: workArea.x,
                y: workArea.y
            };

            if (index === windows.length - 1) {
                windowArea = workArea;
            } else {
                if (workArea.width > workArea.height) {
                    windowArea.width = workArea.width * ratio;
                    windowArea.height = workArea.height;
                    workArea.x += windowArea.width;
                    workArea.width -= windowArea.width;
                } else {
                    windowArea.width = workArea.width;
                    windowArea.height = workArea.height * ratio;
                    workArea.y += windowArea.height;
                    workArea.height -= windowArea.height;
                }
            }

            this.moveAndResizeMetaWindow(
                window,
                windowArea.x,
                windowArea.y,
                windowArea.width,
                windowArea.height,
                true
            );
        });
    }
    onCustomizingHotkeyDecrease() {
        ratio = Math.max(0,ratio - 0.05);
        this.onTile();
    }
    onCustomizingHotkeyIncrease() {
        ratio = Math.min(1,ratio + 0.05);
        this.onTile();
    }
};

RatioLayout.key = 'ratio';

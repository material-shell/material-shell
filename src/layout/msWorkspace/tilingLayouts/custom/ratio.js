const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;

/* exported RatioLayout */
var RatioLayout = class RatioLayout extends BaseTilingLayout {
    onTileRegulars(windows) {
        super.onTileRegulars(windows);
        if (!windows.length) return;
        const ratio = Me.tilingManager.ratio;

        const workArea = this.getWorkspaceBounds();
        workArea.x = 0;
        workArea.y = 0;

        windows.forEach((window, index) => {
            let windowArea = {
                x: workArea.x,
                y: workArea.y,
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

            this.moveAndResizeActor(
                window,
                windowArea.x,
                windowArea.y,
                windowArea.width,
                windowArea.height,
                true
            );
        });
    }
};

RatioLayout.key = 'ratio';

const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseGrabbableLayout
} = Me.imports.tilingManager.tilingLayouts.custom.baseGrabbable;
const { getSettings } = Me.imports.utils.settings;

/* exported RatioLayout */
var RatioLayout = class RatioLayout extends BaseGrabbableLayout {
    onTileRegulars(windows) {
        if (!windows.length) return;
        const ratio = global.tilingManager.ratio;

        const workArea = this.getWorkspaceBounds();

        windows.forEach((window, index) => {
            this.setTitleBarVis(window, false);

            if (window.get_maximized())
                window.unmaximize(Meta.MaximizeFlags.BOTH);

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
                windowArea.height
            );
        });
    }
};

RatioLayout.key = 'ratio';

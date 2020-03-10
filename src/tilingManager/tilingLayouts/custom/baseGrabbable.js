const { Meta } = imports.gi;
const Tweener = imports.ui.tweener;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout
} = Me.imports.src.tilingManager.tilingLayouts.baseTiling;

/* exported BaseGrabbableLayout */
var BaseGrabbableLayout = class BaseGrabbableLayout extends BaseTilingLayout {
    constructor(msWorkspace) {
        super(msWorkspace);
        this.grabStartSignal = global.display.connect(
            'grab-op-begin',
            (display1, display2, metaWindow, op) => {
                if (op !== Meta.GrabOp.MOVING) return;
                this.grabInProgress = true;
                this.grabWindow = metaWindow;
                this.grabSignal = metaWindow.connect('position-changed', () => {
                    let windowRect = metaWindow.get_frame_rect();
                    let x = windowRect.x + windowRect.width / 2;
                    let y = windowRect.y + windowRect.height / 2;
                    const windowHovered = this.msWorkspace.msWindowList.find(
                        msWindowToCheck => {
                            if (msWindowToCheck.metaWindow === this.grabWindow)
                                return false;
                            let rect = msWindowToCheck.metaWindow.get_frame_rect();
                            return (
                                x >= rect.x &&
                                x <= rect.x + rect.width &&
                                y >= rect.y &&
                                y <= rect.y + rect.height
                            );
                        }
                    );
                    if (
                        windowHovered &&
                        this.msWorkspace.msWindowList.indexOf(windowHovered) >
                            -1 &&
                        this.msWorkspace.msWindowList.indexOf(
                            this.grabWindow.msWindow
                        ) > -1 &&
                        !Tweener.getTweenCount(
                            windowHovered.metaWindow.get_compositor_private()
                        )
                    ) {
                        this.msWorkspace.swapWindows(
                            this.grabWindow.msWindow,
                            windowHovered
                        );
                    }
                });
            }
        );

        this.grabEndSignal = global.display.connect('grab-op-end', () => {
            if (this.grabInProgress) {
                this.grabInProgress = false;
                this.grabWindow.disconnect(this.grabSignal);
                delete this.grabWindow;
                delete this.grabSignal;
            }
        });
    }

    onDestroy() {
        super.onDestroy();
        global.display.disconnect(this.grabStartSignal);
    }
};

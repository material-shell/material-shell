const { Meta } = imports.gi;
const Tweener = imports.ui.tweener;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;

/* exported BaseGrabbableLayout */
var BaseGrabbableLayout = class BaseGrabbableLayout extends BaseTilingLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
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
                    const windowHovered = this.superWorkspace.superWindowList.find(
                        superWindowToCheck => {
                            if (
                                superWindowToCheck.metaWindow ===
                                this.grabWindow
                            )
                                return false;
                            let rect = superWindowToCheck.metaWindow.get_frame_rect();
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
                        this.superWorkspace.superWindowList.indexOf(
                            windowHovered
                        ) > -1 &&
                        this.superWorkspace.superWindowList.indexOf(
                            this.grabWindow.superWindow
                        ) > -1 &&
                        !Tweener.getTweenCount(
                            windowHovered.metaWindow.get_compositor_private()
                        )
                    ) {
                        this.superWorkspace.swapWindows(
                            this.grabWindow.superWindow,
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

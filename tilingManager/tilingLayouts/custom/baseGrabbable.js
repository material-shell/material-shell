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
            (display1, display2, window, op) => {
                if (op !== Meta.GrabOp.MOVING) return;
                this.grabInProgress = true;
                this.grabWindow = window;
                this.grabSignal = window.connect('position-changed', () => {
                    let windowRect = window.get_frame_rect();
                    let x = windowRect.x + windowRect.width / 2;
                    let y = windowRect.y + windowRect.height / 2;
                    const windowHovered = this.superWorkspace.windows.find(
                        windowToCheck => {
                            if (windowToCheck === this.grabWindow) return false;
                            let rect = windowToCheck.get_frame_rect();
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
                        this.superWorkspace.windows.indexOf(windowHovered) >
                            -1 &&
                        this.superWorkspace.windows.indexOf(this.grabWindow) >
                            -1 &&
                        !Tweener.getTweenCount(
                            windowHovered.get_compositor_private()
                        )
                    ) {
                        this.superWorkspace.swapWindows(
                            this.grabWindow,
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

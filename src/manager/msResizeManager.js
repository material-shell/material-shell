/** Gnome libs imports */
const { GLib, Meta, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { reparentActor, throttle } = Me.imports.src.utils.index;
const { MsManager } = Me.imports.src.manager.msManager;
const { KeyBindingAction } = Me.imports.src.module.hotKeysModule;
const {
    BaseResizeableTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseResizeableTiling;

const RESIZE_CODES = [
    Meta.GrabOp.RESIZING_N, Meta.GrabOp.RESIZING_NE, Meta.GrabOp.RESIZING_NW, 
    Meta.GrabOp.RESIZING_E, Meta.GrabOp.RESIZING_W,
    Meta.GrabOp.RESIZING_S, Meta.GrabOp.RESIZING_SE, Meta.GrabOp.RESIZING_SW, 
];
const RESIZE_VERTICAL_CODES = [
    Meta.GrabOp.RESIZING_N, Meta.GrabOp.RESIZING_S, 
];
const RESIZE_AFTER_CODES = [
    Meta.GrabOp.RESIZING_N, Meta.GrabOp.RESIZING_NW, 
    Meta.GrabOp.RESIZING_W, Meta.GrabOp.RESIZING_SW, 
];

const CHECK_TIMEOUT_MS = 100;

/* exported MsResizeManager */
var MsResizeManager = class MsResizeManager extends MsManager {
    constructor(msWindowManager) {
        super();

        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.resizeInProgress = false;
        this.inputResizer = new InputResizer();

        this.observe(
            global.display,
            'grab-op-begin',
            (_, display, metaWindow, op) => {
                if (RESIZE_CODES.includes(op)) {
                    const msWindow = metaWindow.msWindow;

                    if (
                        msWindow &&
                        msWindow.metaWindow === metaWindow &&
                        !msWindow.followMetaWindow
                    ) {
                        global.display.end_grab_op(global.get_current_time());
                        this.startResize(msWindow, op);
                    }
                }
            }
        );

        this.observe(global.stage, 'captured-event', (_, event) => {
            if (this.resizeInProgress) {
                switch (event.type()) {
                    case Clutter.EventType.MOTION:
                        this.throttledCheckPointerPosition();
                        break;

                    case Clutter.EventType.BUTTON_RELEASE:
                        this.endPointerChecker();
                        break;
                }
            }
        });

        this.throttledCheckPointerPosition = throttle(
            this.checkPointerPosition,
            CHECK_TIMEOUT_MS,
            { trailing: false }
        );
    }

    checkPointerPositionRoutine() {
        if (!this.resizeInProgress) return;

        this.throttledCheckPointerPosition();
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, CHECK_TIMEOUT_MS, () => {
            this.checkPointerPositionRoutine();
            return GLib.SOURCE_REMOVE;
        });
    }

    checkPointerPosition() {
        if (this.resizeInProgress) {
            this.updateResize();
        }
    }

    endPointerChecker() {
        if (this.resizeInProgress) {
            this.endResize();
        }
    }

    getPointerPosition() {
        const { layout, msWorkspaceActor } = this.msWindow.msWorkspace;

        const { x1: containerX, y1: containerY } = layout.tileableContainer.allocation;
        const { x1: actorX, y1: actorY } = msWorkspaceActor.allocation;

        const [globalX, globalY] = global.get_pointer();

        return [globalX - containerX - actorX, globalY - containerY - actorY];
    }

    getPortionPositionAndSize() {
        const { layout } = this.msWindow.msWorkspace;
        const { allocation: container } = layout.tileableContainer;

        const ratio = layout.mainPortion.getRatioForPortion(this.border.portions[this.after + 0]);

        return layout.applyBoxRatio(container, ratio);
    }

    startResize(msWindow, directionOp) {
        const { layout } = msWindow.msWorkspace;

        if (!(layout instanceof BaseResizeableTilingLayout)) {
            return;
        }

        const vertical = RESIZE_VERTICAL_CODES.includes(directionOp);
        this.after = RESIZE_AFTER_CODES.includes(directionOp);
        log('DEBUG MS', 'border');
        this.border = layout.getTileableBorder(msWindow, vertical, this.after);
        log('DEBUG MS', this.border);

        if (!this.border) {
            return;
        }

        this.resizeInProgress = true;
        this.msWindow = msWindow;

        global.stage.add_child(this.inputResizer);
        Main.pushModal(this.inputResizer);

        this.checkPointerPositionRoutine();
        global.display.set_cursor(
            this.border.vertical ? Meta.Cursor.SOUTH_RESIZE : Meta.Cursor.EAST_RESIZE
        );
    }

    updateResize() {
        const [pointerX, pointerY] = this.getPointerPosition();
        const { x, y, width, height } = this.getPortionPositionAndSize();
        const [relativeX, relativeY] = [pointerX - x, pointerY - y];
        let basisRatio;

        if (this.border.vertical) {
            if (this.after) {
                basisRatio = 1 - (relativeY / height);
            } else {
                basisRatio = relativeY / height;
            }
        } else {
            if (this.after) {
                basisRatio = 1 - (relativeX / width);
            } else {
                basisRatio = relativeX / width;
            }
        }

        this.border.updateBasis(basisRatio, this.after);
        this.msWindow.msWorkspace.layout.tileAll();
    }

    endResize() {
        this.resizeInProgress = false;
        delete this.msWindow;
        delete this.after;
        delete this.border;

        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });

        Main.popModal(this.inputResizer);
        global.stage.remove_child(this.inputResizer);
        global.display.set_cursor(Meta.Cursor.DEFAULT);
    }
};

/* exported InputResizer */
var InputResizer = GObject.registerClass(
    class InputResizer extends Clutter.Actor {
        _init() {
            super._init({
                name: 'InputResizer',
                reactive: true,
            });
            this.add_constraint(
                new Clutter.BindConstraint({
                    source: global.stage,
                    coordinate: Clutter.BindCoordinate.ALL,
                })
            );
        }
    }
);

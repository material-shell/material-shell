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
    Meta.GrabOp.RESIZING_N,
    Meta.GrabOp.RESIZING_NE,
    Meta.GrabOp.RESIZING_NW,
    Meta.GrabOp.RESIZING_E,
    Meta.GrabOp.RESIZING_W,
    Meta.GrabOp.RESIZING_S,
    Meta.GrabOp.RESIZING_SE,
    Meta.GrabOp.RESIZING_SW,
];
const RESIZE_VERTICAL_CODES = [Meta.GrabOp.RESIZING_N, Meta.GrabOp.RESIZING_S];
const RESIZE_AFTER_CODES = [
    Meta.GrabOp.RESIZING_N,
    Meta.GrabOp.RESIZING_NW,
    Meta.GrabOp.RESIZING_W,
    Meta.GrabOp.RESIZING_SW,
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
            (_, display, metaWindow, directionOp) => {
                if (RESIZE_CODES.includes(directionOp)) {
                    const msWindow = metaWindow.msWindow;

                    if (
                        msWindow &&
                        msWindow.metaWindow === metaWindow &&
                        !msWindow.followMetaWindow
                    ) {
                        global.display.end_grab_op(global.get_current_time());

                        const { layout } = msWindow.msWorkspace;

                        if (!(layout instanceof BaseResizeableTilingLayout)) {
                            return;
                        }

                        const vertical = RESIZE_VERTICAL_CODES.includes(
                            directionOp
                        );
                        const after = RESIZE_AFTER_CODES.includes(directionOp);
                        const border = layout.getTileableBorder(
                            msWindow,
                            vertical,
                            after
                        );

                        if (border) {
                            this.startResize(border);
                        }
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
        const { layout, msWorkspaceActor } = this.msWorkspace;

        const {
            x1: containerX,
            y1: containerY,
        } = layout.tileableContainer.allocation;
        const { x1: actorX, y1: actorY } = msWorkspaceActor.allocation;

        const [globalX, globalY] = global.get_pointer();

        return [globalX - containerX - actorX, globalY - containerY - actorY];
    }

    getFirstPortionPositionAndSize() {
        const { layout } = this.msWorkspace;
        const ratio = layout.mainPortion.getRatioForPortion(
            this.border.firstPortion
        );

        return layout.applyBoxRatio(layout.resolveBox(), ratio);
    }

    startResize(border) {
        this.border = border;
        this.msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
        this.resizeInProgress = true;

        global.stage.add_child(this.inputResizer);
        Main.pushModal(this.inputResizer);

        global.display.set_cursor(
            this.border.vertical
                ? Meta.Cursor.SOUTH_RESIZE
                : Meta.Cursor.EAST_RESIZE
        );
    }

    updateResize() {
        const [pointerX, pointerY] = this.getPointerPosition();
        const { x, y, width, height } = this.getFirstPortionPositionAndSize();
        const [relativeX, relativeY] = [pointerX - x, pointerY - y];
        let basisRatio;

        if (this.border.vertical) {
            basisRatio = relativeY / height;
        } else {
            basisRatio = relativeX / width;
        }

        this.border.increaseBasis(basisRatio);
        this.msWorkspace.layout.tileAll();
    }

    endResize() {
        this.resizeInProgress = false;
        delete this.msWorkspace;
        delete this.border;

        Main.popModal(this.inputResizer);
        Me.stateManager.stateChanged();

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

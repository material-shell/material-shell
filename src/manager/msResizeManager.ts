/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Meta from 'meta';
import { MsWorkspace, Tileable } from 'src/layout/msWorkspace/msWorkspace';
import { PortionBorder } from 'src/layout/msWorkspace/portion';
import { BaseResizeableTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { MsManager } from 'src/manager/msManager';
import { Rectangular } from 'src/types/mod';
import { assert } from 'src/utils/assert';
import { registerGObjectClass } from 'src/utils/gjs';
import { throttle } from 'src/utils/index';
import { MsWindowManager } from './msWindowManager';
import { main as Main } from 'ui';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

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

interface CurrentResize {
    msWorkspace: MsWorkspace;
    border: PortionBorder;
}

export class MsResizeManager extends MsManager {
    msWindowManager: MsWindowManager;
    signalMap: Map<any, any>;
    inputResizer: InputResizer;
    msWorkspace: MsWorkspace | undefined;
    resizeInProgress: CurrentResize | null;
    throttledCheckPointerPosition: () => void;

    constructor(msWindowManager: MsWindowManager) {
        super();

        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.resizeInProgress = null;
        this.inputResizer = new InputResizer();

        this.observe(
            global.display,
            'grab-op-begin',
            (_, metaWindow, directionOp: Meta.GrabOp) => {
                Me.logFocus(
                    'START DRAG',
                    directionOp,
                    RESIZE_CODES.includes(directionOp)
                );
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

                        const vertical =
                            RESIZE_VERTICAL_CODES.includes(directionOp);
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

        this.observe(
            this.inputResizer,
            'captured-event',
            (_, event: Clutter.Event) => {
                if (this.resizeInProgress !== null) {
                    switch (event.type()) {
                        case Clutter.EventType.MOTION:
                            this.checkPointerPosition();
                            break;

                        case Clutter.EventType.BUTTON_RELEASE:
                            this.endPointerChecker();
                            break;
                    }
                }
            }
        );

        this.throttledCheckPointerPosition = throttle(
            this.checkPointerPosition,
            CHECK_TIMEOUT_MS,
            { trailing: false }
        );
    }

    checkPointerPosition() {
        if (this.resizeInProgress !== null) {
            this.updateResize();
        }
    }

    endPointerChecker() {
        if (this.resizeInProgress !== null) {
            this.endResize();
        }
    }

    getPointerPositionRelativeToWorkspace(): [number, number] {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const { msWorkspaceActor } = this.resizeInProgress.msWorkspace;

        const [containerX, containerY] =
            msWorkspaceActor.tileableContainer.get_transformed_position();
        const [globalX, globalY] = global.get_pointer();
        return [globalX - containerX!, globalY - containerY!];
    }

    getFirstPortionPositionAndSize(): Rectangular {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const { layout } = this.resizeInProgress.msWorkspace;
        assert(
            layout instanceof BaseResizeableTilingLayout,
            'expected a resizable layout'
        );
        const ratio = layout.mainPortion.getRatioForPortion(
            this.resizeInProgress.border.firstPortion
        );

        return layout.applyBoxRatio(layout.resolveBox(), ratio);
    }

    startResize(border: PortionBorder) {
        assert(this.resizeInProgress === null, 'Resize already in progress');
        this.resizeInProgress = {
            border: border,
            msWorkspace: Me.msWorkspaceManager.getActiveMsWorkspace(),
        };

        global.stage.add_child(this.inputResizer);
        this.msWindowManager.msFocusManager.pushModal(this.inputResizer);

        global.display.set_cursor(Meta.Cursor.MOVE_OR_RESIZE_WINDOW);
    }

    updateResize() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const [pointerX, pointerY] =
            this.getPointerPositionRelativeToWorkspace();
        const { x, y, width, height } = this.getFirstPortionPositionAndSize();
        const [relativeX, relativeY] = [pointerX - x, pointerY - y];
        let basisRatio: number;

        if (!this.resizeInProgress.border.vertical) {
            basisRatio = relativeY / height;
        } else {
            basisRatio = relativeX / width;
        }

        this.resizeInProgress.border.updateBasis(basisRatio);
        this.resizeInProgress.msWorkspace.layout.tileAll();
    }

    endResize() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        this.resizeInProgress = null;

        this.msWindowManager.msFocusManager.popModal(this.inputResizer);
        Me.stateManager.stateChanged();

        global.stage.remove_child(this.inputResizer);
        global.display.set_cursor(Meta.Cursor.DEFAULT);
    }

    resizeTileable(
        tileable: Tileable,
        directionOp: Meta.GrabOp,
        percent: number
    ) {
        const { layout } = tileable.msWorkspace;

        if (!(layout instanceof BaseResizeableTilingLayout)) {
            return;
        }
        const vertical = RESIZE_VERTICAL_CODES.includes(directionOp);
        const after = RESIZE_AFTER_CODES.includes(directionOp);
        const border = layout.getTileableBorder(tileable, vertical, after);
        if (border) {
            border.updateBasis((100 + percent * (after ? -1 : 1)) / 100);
            layout.tileAll();
        }
    }
}

@registerGObjectClass
export class InputResizer extends Clutter.Actor {
    constructor() {
        super({
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

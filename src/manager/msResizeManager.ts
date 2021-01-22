/** Gnome libs imports */
import * as GLib from 'GLib';
import * as Meta from 'Meta';
import * as Clutter from 'Clutter';
import * as GObject from 'GObject';
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { reparentActor, throttle } from 'src/utils/index';
import { MsManager } from 'src/manager/msManager';
import { KeyBindingAction } from 'src/module/hotKeysModule';
import { BaseResizeableTilingLayout, ResizableBorderActor, } from "src/layout/msWorkspace/tilingLayouts/baseResizeableTiling";
import { MsWindowManager } from './msWindowManager';
import { MsWorkspace, Tileable } from 'src/layout/msWorkspace/msWorkspace';
import { PortionBorder } from 'src/layout/msWorkspace/portion';
import { registerGObjectClass } from 'src/utils/gjs';

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

export class MsResizeManager extends MsManager {
    msWindowManager: MsWindowManager;
    signalMap: Map<any, any>;
    resizeInProgress: boolean;
    inputResizer: InputResizer;
    msWorkspace: MsWorkspace | undefined;
    throttledCheckPointerPosition: () => void;
    border?: PortionBorder;

    constructor(msWindowManager: MsWindowManager) {
        super();

        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.resizeInProgress = false;
        this.inputResizer = new InputResizer();

        this.observe(
            global.display,
            'grab-op-begin',
            (_, display, metaWindow, directionOp: Meta.GrabOp) => {
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

        this.observe(global.stage, 'captured-event', (_, event: Clutter.Event) => {
            if (this.resizeInProgress) {
                switch (event.type()) {
                    case Clutter.EventType.MOTION:
                        this.checkPointerPosition();
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

    getPointerPositionRelativeToWorkspace() {
        const { msWorkspaceActor } = this.msWorkspace;

        const [
            containerX,
            containerY,
        ] = msWorkspaceActor.tileableContainer.get_transformed_position();
        const [globalX, globalY] = global.get_pointer();
        return [globalX - containerX, globalY - containerY];
    }

    getFirstPortionPositionAndSize() {
        const { layout } = this.msWorkspace;
        const ratio = layout.mainPortion.getRatioForPortion(
            this.border.firstPortion
        );

        return layout.applyBoxRatio(layout.resolveBox(), ratio);
    }

    startResize(border: PortionBorder) {
        this.border = border;
        this.msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
        this.resizeInProgress = true;

        global.stage.add_child(this.inputResizer);
        Main.pushModal(this.inputResizer);

        global.display.set_cursor(Meta.Cursor.MOVE_OR_RESIZE_WINDOW);
    }

    updateResize() {
        const [
            pointerX,
            pointerY,
        ] = this.getPointerPositionRelativeToWorkspace();
        const { x, y, width, height } = this.getFirstPortionPositionAndSize();
        const [relativeX, relativeY] = [pointerX - x, pointerY - y];
        let basisRatio;

        if (!this.border.vertical) {
            basisRatio = relativeY / height;
        } else {
            basisRatio = relativeX / width;
        }

        this.border.updateBasis(basisRatio);
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

    resizeTileable(tileable: Tileable, directionOp: Meta.GrabOp, percent: number) {
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
};

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

/** Gnome libs imports */
import * as GLib from 'glib';
import * as Meta from 'meta';
import * as Clutter from 'clutter';
import * as GObject from 'gobject';
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { reparentActor, throttle } from 'src/utils/index';
import { MsManager } from 'src/manager/msManager';
import { KeyBindingAction } from 'src/module/hotKeysModule';
import { MsWindowManager } from './msWindowManager';
import { registerGObjectClass } from 'src/utils/gjs';
import { assert } from 'src/utils/assert';
import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';

interface CurrentDrag {
    msWindow: MsWindow;
    originPointerAnchor: [number, number];
    originalParent: any;
}

export class MsDndManager extends MsManager {
    msWindowManager: MsWindowManager;
    signalMap: Map<any, any>;
    dragInProgress: CurrentDrag | null;
    inputGrabber: InputGrabber;
    throttledCheckUnderPointer: (this: any) => any;

    constructor(msWindowManager: MsWindowManager) {
        super();
        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.dragInProgress = null;
        this.inputGrabber = new InputGrabber();
        this.observe(this.msWindowManager, 'ms-window-created', () => {
            this.listenForMsWindowsSignal();
        });
        this.listenForMsWindowsSignal();

        this.observe(
            global.workspace_manager,
            'active-workspace-changed',
            () => {
                if (this.dragInProgress !== null) {
                    const newMsWorkspace = Me.msWorkspaceManager.getActivePrimaryMsWorkspace();
                    if (this.dragInProgress.msWindow.metaWindow) {
                        this.dragInProgress.msWindow.metaWindow.change_workspace_by_index(
                            global.workspace_manager.get_active_workspace_index(),
                            true
                        );
                    } else {
                        Me.msWorkspaceManager.setWindowToMsWorkspace(
                            this.dragInProgress.msWindow,
                            newMsWorkspace
                        );
                    }

                    this.dragInProgress.originalParent =
                        newMsWorkspace.msWorkspaceActor.tileableContainer;
                }
            }
        );

        this.observe(
            global.display,
            'grab-op-begin',
            (_, display, metaWindow, op) => {
                if (op === Meta.GrabOp.MOVING) {
                    const msWindow = metaWindow.msWindow;
                    if (
                        msWindow &&
                        msWindow.metaWindow === metaWindow &&
                        !msWindow.followMetaWindow
                    ) {
                        global.display.end_grab_op(global.get_current_time());
                        this.startDrag(msWindow);
                    }
                }
            }
        );

        this.observe(global.stage, 'captured-event', (_, event) => {
            if (this.dragInProgress !== null) {
                const [stageX, stageY] = event.get_coords();
                const msWindowDragged = this.dragInProgress.msWindow;
                switch (event.type()) {
                    case Clutter.EventType.MOTION:
                        msWindowDragged.set_position(
                            Math.round(
                                stageX -
                                    msWindowDragged.width *
                                        this.dragInProgress
                                            .originPointerAnchor[0]
                            ),
                            Math.round(
                                stageY -
                                    msWindowDragged.height *
                                        this.dragInProgress
                                            .originPointerAnchor[1]
                            )
                        );
                        this.throttledCheckUnderPointer();
                        break;
                    case Clutter.EventType.BUTTON_RELEASE:
                        this.endDrag();
                        break;
                }
            }
        });

        this.throttledCheckUnderPointer = throttle(
            this.checkUnderThePointer,
            50,
            { trailing: false }
        );
    }

    /**
     * Handle drag and drop for placeholders
     */
    listenForMsWindowsSignal() {
        this.msWindowManager.msWindowList.forEach((msWindow) => {
            if (!this.signalMap.has(msWindow)) {
                const id = msWindow.connect('event', (_, event) => {
                    if (this.dragInProgress) return;
                    switch (event.type()) {
                        case Clutter.EventType.MOTION:
                            if (event.get_state() === 320) {
                                this.startDrag(msWindow);
                            }
                            break;
                    }
                });
                this.signalMap.set(msWindow, id);
            }
        });
    }

    startDrag(msWindow: MsWindow) {
        global.stage.add_child(this.inputGrabber);
        const originalParent = msWindow.get_parent();
        msWindow.freezeAllocation();
        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });
        const [globalX, globalY] = global.get_pointer();
        const [_, relativeX, relativeY] = msWindow.transform_stage_point(
            globalX,
            globalY
        );

        this.dragInProgress = {
            msWindow,
            originPointerAnchor: [
                relativeX / msWindow.width,
                relativeY / msWindow.height,
            ],
            originalParent,
        };

        Me.layout.setActorAbove(msWindow);
        this.checkUnderThePointerRoutine();
        msWindow.set_position(
            Math.round(
                globalX -
                    msWindow.width * this.dragInProgress.originPointerAnchor[0]
            ),
            Math.round(
                globalY -
                    msWindow.height * this.dragInProgress.originPointerAnchor[1]
            )
        );
        Main.pushModal(this.inputGrabber);
        global.display.set_cursor(Meta.Cursor.DND_IN_DRAG);
    }

    endDrag() {
        assert(this.dragInProgress !== null, 'No drag in progress');
        const { msWindow, originalParent } = this.dragInProgress;
        this.dragInProgress = null;

        Main.popModal(this.inputGrabber);
        global.stage.remove_child(this.inputGrabber);
        msWindow.unFreezeAllocation();
        reparentActor(msWindow, originalParent);
        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });
        global.display.set_cursor(Meta.Cursor.DEFAULT);
    }

    checkUnderThePointerRoutine() {
        if (this.dragInProgress === null) return;
        this.throttledCheckUnderPointer();
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
            this.checkUnderThePointerRoutine();
            return GLib.SOURCE_REMOVE;
        });
    }

    /**  */
    checkUnderThePointer() {
        assert(this.dragInProgress !== null, 'No drag in progress');

        const [x, y] = global.get_pointer();
        const monitor = Main.layoutManager.currentMonitor;

        //Check for all tileable of the msWindow's msWorkspace if the pointer is above another msWindow
        const msWindowDragged = this.dragInProgress.msWindow;
        const msWorkspace = msWindowDragged.msWorkspace;
        if (monitor !== msWorkspace.monitor) {
            let newMsWorkspace: MsWorkspace;
            if (monitor === Main.layoutManager.primaryMonitor) {
                newMsWorkspace = Me.msWorkspaceManager.getActivePrimaryMsWorkspace();
            } else {
                newMsWorkspace = Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                    monitor.index
                )[0];
            }

            Me.msWorkspaceManager.setWindowToMsWorkspace(
                msWindowDragged,
                newMsWorkspace
            );

            this.dragInProgress.originalParent =
                newMsWorkspace.msWorkspaceActor.tileableContainer;
        }

        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            msWorkspace.monitor.index
        );
        const relativeX = x - workArea.x;
        const relativeY = y - workArea.y;

        msWorkspace.tileableList
            .filter(
                (tileable) =>
                    tileable instanceof MsWindow &&
                    tileable.visible &&
                    tileable.get_parent() ===
                        msWorkspace.msWorkspaceActor.tileableContainer
            )
            .forEach((tileable) => {
                if (
                    relativeX >= tileable.x &&
                    relativeX <= tileable.x + tileable.width &&
                    relativeY >= tileable.y &&
                    relativeY <= tileable.y + tileable.height
                ) {
                    msWorkspace.swapTileable(msWindowDragged, tileable);
                }
            });
    }
}

@registerGObjectClass
export class InputGrabber extends Clutter.Actor {
    constructor() {
        super({
            name: 'InputGrabber',
            reactive: true,
        });
        this.add_constraint(
            new Clutter.BindConstraint({
                source: global.stage,
                coordinate: Clutter.BindCoordinate.ALL,
            })
        );
    }
    vfunc_key_press_event(keyEvent: Clutter.KeyEvent) {
        const actionId = global.display.get_keybinding_action(
            keyEvent.hardware_keycode,
            keyEvent.modifier_state
        );
        if (Me.hotKeysModule.actionIdToNameMap.has(actionId)) {
            const actionName = Me.hotKeysModule.actionIdToNameMap.get(actionId);
            switch (actionName) {
                case KeyBindingAction.PREVIOUS_WINDOW:
                    Me.hotKeysModule.actionNameToActionMap.get(
                        KeyBindingAction.MOVE_WINDOW_LEFT
                    )();
                    break;
                case KeyBindingAction.NEXT_WINDOW:
                    Me.hotKeysModule.actionNameToActionMap.get(
                        KeyBindingAction.MOVE_WINDOW_RIGHT
                    )();
                    break;
                case KeyBindingAction.PREVIOUS_WORKSPACE:
                    Me.hotKeysModule.actionNameToActionMap.get(
                        KeyBindingAction.MOVE_WINDOW_TOP
                    )();
                    break;
                case KeyBindingAction.NEXT_WORKSPACE:
                    Me.hotKeysModule.actionNameToActionMap.get(
                        KeyBindingAction.MOVE_WINDOW_BOTTOM
                    )();
                    break;
            }
        }
        return false;
    }
}

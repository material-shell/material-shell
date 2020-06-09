const { GLib, Meta, Clutter } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;
const { reparentActor, throttle } = Me.imports.src.utils.index;
const Main = imports.ui.main;
const { MsManager } = Me.imports.src.manager.msManager;

/* exported MsDndManager */
var MsDndManager = class MsDndManager extends MsManager {
    constructor(msWindowManager) {
        super();
        AddLogToFunctions(this);
        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.observe(this.msWindowManager, 'ms-window-created', () => {
            this.listenForMsWindowsSignal();
        });
        this.listenForMsWindowsSignal();

        this.observe(
            global.workspace_manager,
            'active-workspace-changed',
            () => {
                if (this.dragInProgress) {
                    const newMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                    if (this.msWindowDragged.metaWindow) {
                        this.msWindowDragged.metaWindow.change_workspace_by_index(
                            global.workspace_manager.get_active_workspace_index(),
                            true
                        );
                    } else {
                        Me.msWorkspaceManager.setWindowToMsWorkspace(
                            this.msWindowDragged,
                            newMsWorkspace
                        );
                    }

                    this.originalParent =
                        newMsWorkspace.msWorkspaceActor.tileableContainer;
                }
            }
        );
        this.observe(
            global.display,
            'grab-op-begin',
            (_, display, metaWindow, op) => {
                if (op === Meta.GrabOp.MOVING) {
                    let msWindow = metaWindow.msWindow;
                    if (msWindow && !msWindow.followMetaWindow) {
                        global.display.end_grab_op(global.get_current_time());
                        this.startDrag(msWindow);
                    }
                }
            }
        );

        this.observe(global.stage, 'captured-event', (_, event) => {
            if (this.dragInProgress) {
                let [stageX, stageY] = event.get_coords();
                switch (event.type()) {
                    case Clutter.EventType.MOTION:
                        this.msWindowDragged.set_position(
                            Math.round(
                                stageX -
                                    this.msWindowDragged.width *
                                        this.originPointerAnchor[0]
                            ),
                            Math.round(
                                stageY -
                                    this.msWindowDragged.height *
                                        this.originPointerAnchor[1]
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
                /* const id = msWindow.connect('dragged-changed', (_, dragged) => {
                    if (dragged) {
                        this.startDrag(msWindow);
                    } else {
                        this.endDrag();
                    }
                }); */
                this.signalMap.set(msWindow, id);
            }
        });
    }

    startDrag(msWindow) {
        this.dragInProgress = true;
        this.msWindowDragged = msWindow;
        this.originalParent = msWindow.get_parent();
        msWindow.freezeAllocation();
        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });
        let [globalX, globalY] = global.get_pointer();
        let [_, relativeX, relativeY] = msWindow.transform_stage_point(
            globalX,
            globalY
        );
        this.originPointerAnchor = [
            relativeX / msWindow.width,
            relativeY / msWindow.height,
        ];

        Me.layout.setActorAbove(msWindow);
        this.checkUnderThePointerRoutine();
        msWindow.set_position(
            Math.round(globalX - msWindow.width * this.originPointerAnchor[0]),
            Math.round(globalY - msWindow.height * this.originPointerAnchor[1])
        );
        global.stage.grab_key_focus();
        global.display.set_cursor(Meta.Cursor.DND_IN_DRAG);
    }

    endDrag() {
        this.msWindowDragged.unFreezeAllocation();
        reparentActor(this.msWindowDragged, this.originalParent);
        this.dragInProgress = false;
        delete this.originPointerAnchor;
        delete this.originalParent;
        delete this.msWindowDragged;
        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });
        global.display.set_cursor(Meta.Cursor.DEFAULT);
    }

    checkUnderThePointerRoutine() {
        if (!this.dragInProgress) return;
        this.throttledCheckUnderPointer();
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
            this.checkUnderThePointerRoutine();
            return GLib.SOURCE_REMOVE;
        });
    }

    /**  */
    checkUnderThePointer() {
        let [x, y] = global.get_pointer();

        let monitor = Main.layoutManager.monitors.find((monitor) => {
            return (
                x >= monitor.x &&
                x <= monitor.x + monitor.width &&
                y >= monitor.y &&
                y <= monitor.y + monitor.height
            );
        });

        //Check for all tileable of the msWindow's msWorkspace if the pointer is above another msWindow
        const msWorkspace = this.msWindowDragged.msWorkspace;
        if (monitor !== msWorkspace.monitor) {
            let newMsWorkspace;
            if (monitor === Main.layoutManager.primaryMonitor) {
                newMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
            } else {
                newMsWorkspace = Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                    monitor.index
                )[0];
            }

            Me.msWorkspaceManager.setWindowToMsWorkspace(
                this.msWindowDragged,
                newMsWorkspace
            );

            this.originalParent =
                newMsWorkspace.msWorkspaceActor.tileableContainer;
        }

        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            msWorkspace.monitor.index
        );
        let relativeX = x - workArea.x;
        let relativeY = y - workArea.y;

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
                    msWorkspace.swapTileable(this.msWindowDragged, tileable);
                }
            });
    }
};

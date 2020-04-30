const { GLib } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;
const { reparentActor } = Me.imports.src.utils.index;
const Main = imports.ui.main;

/* exported MsDndManager */
var MsDndManager = class MsDndManager {
    constructor(msWindowManager) {
        AddLogToFunctions(this);
        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.msWindowManager.connect('ms-window-created', () => {
            this.listenForMsWindowsDragSignal();
        });
        this.listenForMsWindowsDragSignal();
        this.workspaceSignal = global.workspace_manager.connect(
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
    }

    listenForMsWindowsDragSignal() {
        this.msWindowManager.msWindowList.forEach((msWindow) => {
            if (!this.signalMap.has(msWindow)) {
                const id = msWindow.connect('dragged-changed', (_, dragged) => {
                    if (dragged) {
                        this.startDrag(msWindow);
                    } else {
                        this.endDrag();
                    }
                });
                this.signalMap.set(msWindow, id);
            }
        });
    }

    startDrag(msWindow) {
        this.dragInProgress = true;
        this.msWindowDragged = msWindow;
        this.originalParent = msWindow.get_parent();
        Me.layout.setActorAbove(msWindow);
        this.checkUnderThePointerRoutine();
    }

    endDrag() {
        reparentActor(this.msWindowDragged, this.originalParent);
        this.dragInProgress = false;
        delete this.originalParent;
        this.msWindowDragged.msWorkspace.tilingLayout.onTile();
        delete this.msWindowDragged;
    }

    checkUnderThePointerRoutine() {
        if (!this.dragInProgress) return;
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
        log('check under', x, y, relativeX, relativeY);

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
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
            this.checkUnderThePointerRoutine();
            return GLib.SOURCE_REMOVE;
        });
    }
};

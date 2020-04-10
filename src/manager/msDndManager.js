const { GLib } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsWindow } = Me.imports.src.materialShell.msWorkspace.msWindow;
const { AddLogToFunctions } = Me.imports.src.utils.debug;
const { reparentActor } = Me.imports.src.utils.index;

/* exported MsDndManager */
var MsDndManager = class MsDndManager {
    constructor(msWindowManager) {
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
                    Me.msWorkspaceManager.setWindowToMsWorkspace(
                        this.msWindowDragged,
                        newMsWorkspace
                    );
                    if (this.msWindowDragged.isDialog) {
                        this.originalParent = newMsWorkspace.floatableContainer;
                    } else {
                        this.originalParent = newMsWorkspace.tileableContainer;
                    }
                }
            }
        );
        AddLogToFunctions(this);
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
        Me.msWorkspaceManager.msWorkspaceContainer.setActorAbove(msWindow);
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
        //Check for all tileable of the msWindow's msWorkspace if the pointer is above another msWindow
        const msWorkspace = this.msWindowDragged.msWorkspace;
        msWorkspace.tileableList
            .filter(
                (tileable) =>
                    tileable instanceof MsWindow &&
                    tileable.visible &&
                    tileable.get_parent() === msWorkspace.tileableContainer
            )
            .forEach((tileable) => {
                if (
                    x >= tileable.x &&
                    x <= tileable.x + tileable.width &&
                    y >= tileable.y &&
                    y <= tileable.y + tileable.height
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

/** Gnome libs imports */
const { Clutter, GLib, GObject } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsWorkspace } = Me.imports.src.layout.msWorkspace.msWorkspace
const { I3wmLayout } = Me.imports.src.layout.msWorkspace.tilingLayouts.i3wm

/* exported MsI3Workspace */
var MsI3wmWorkspace = class MsI3wmWorkspace extends MsWorkspace {
    constructor(msWorkspaceManager, monitor, initialState) {
        super(msWorkspaceManager, monitor, initialState)

        this.setTilingLayout();
    }

    nextTiling() {
        // Not supported here.
    }

    setTileableBefore(tileableToMove, tileableRelative) {
        // Not supported here.
    }

    setTileableAfter(tileableToMove, tileableRelative) {
        // Not supported here.
    }

    swapTileable(firstTileable, secondTileable) {
        // Not supported here.
    }

    setTilingContainer(container) {
        /* this.layout.setTilingContainer(container); */
    }

    swapTileableLeft(tileable) {
        this.tilingLayout.moveTileableLeft(tileable);
    }

    swapTileableRight(tileable) {
        this.tilingLayout.moveTileableRight(tileable);
    }

    setTilingLayout(layout) {
        if (layout) {
            this.setTilingContainer(layout);

            return;
        }

        this.tilingLayout.onDestroy();
        this.tilingLayout = new I3wmLayout(this);

        this.msWorkspaceActor.tileableContainer.set_layout_manager(
            this.tilingLayout
        );

        this.emit('tiling-layout-changed');
    }

    shouldPanelBeVisible() {
        return false;
    }
};

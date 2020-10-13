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

        this.tilingLayout.onDestroy();
        this.tilingLayout = new I3wmLayout(this);

        this.msWorkspaceActor.tileableContainer.set_layout_manager(
            this.tilingLayout
        );

        this.emit('tiling-layout-changed');

        this.tilingLayout.hideAppLauncher();

        const possibleAppLauncher = this.tileableList[this.tileableList.length - 1];

        if (possibleAppLauncher === this.appLauncher) {
            this.tileableList.pop();

            this.emit('tileableList-changed', this.tilingLayout, [...this.tileableList, this.appLauncher]);
        }
    }

    focusTileable(tileable, forced) {
        this.precedentFocusedTileable = this.tileableFocused;

        super.focusTileable(tileable, forced);
    }

    nextTiling(direction) {
        const Container = Me.tilingManager.getNextContainer(
            this.tilingLayout.getFocusedContainer(),
            direction
        );

        this.tilingLayout.setTilingContainer(new Container(this.tilingLayout));
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
        const Container = Me.tilingManager.getContainerByKey(container);

        this.tilingLayout.setTilingContainer(new Container(this.tilingLayout));
        this.emit('tiling-layout-changed');
    }

    swapTileable(firstTileable, secondTileable) {
        // Not supported here.
    }

    swapTileableLeft(tileable) {
        const oldTileableList = this.tileableList;
        const newTileableList = this.tilingLayout.moveTileableLeft(tileable, [...this.tileableList]);
        this.tileableList = newTileableList;

        this.emit('tileableList-changed', oldTileableList, newTileableList);
        this.focusTileable(tileable);
        this.emit('tiling-layout-changed');
    }

    swapTileableRight(tileable) {
        const oldTileableList = this.tileableList;
        const newTileableList = this.tilingLayout.moveTileableRight(tileable, [...this.tileableList]);
        this.tileableList = newTileableList;

        this.emit('tileableList-changed', oldTileableList, newTileableList);
        this.focusTileable(tileable);
        this.emit('tiling-layout-changed');
    }

    setTilingLayout(layout) {
        this.setTilingContainer(layout);
        this.emit('tiling-layout-changed');
    }

    shouldPanelBeVisible() {
        return false;
    }
};

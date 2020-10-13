/** Gnome libs imports */
const { Clutter, GLib, GObject } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsWorkspace } = Me.imports.src.layout.msWorkspace.msWorkspace
const { I3wmLayout } = Me.imports.src.layout.msWorkspace.tilingLayouts.i3wm
const { reparentActor } = Me.imports.src.utils.index;

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

        const appLauncherIndex = this.tileableList.indexOf(this.appLauncher);

        if (appLauncherIndex > -1) {
            const oldTileableList = [...this.tileableList];
            this.tileableList.splice(appLauncherIndex, 1);

            this.emit('tileableList-changed', this.tileableList, oldTileableList);
        }
    }

    refreshContainerIcon() {
        const container = this.tilingLayout.getFocusedContainer();

        this.msWorkspaceActor.panel.tilingIcon.gicon = container.icon;
    }

    nextTiling(direction) {
        const Container = Me.tilingManager.getNextContainer(
            this.tilingLayout.getFocusedContainer(),
            direction
        );

        this.tilingLayout.setTilingContainer(new Container(this.tilingLayout));
        this.refreshContainerIcon();
    }

    setTilingContainer(containerKey) {
        const Container = Me.tilingManager.getContainerByKey(containerKey);

        this.tilingLayout.setTilingContainer(new Container(this.tilingLayout));
        this.refreshContainerIcon();
    }

    setTilingLayout(layout) {
        this.setTilingContainer(layout);
        this.emit('tiling-layout-changed');
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

    focusTileable(tileable, forced) {
        super.focusTileable(tileable, forced);

        this.refreshContainerIcon();
    }
};

const { St, Shell, Clutter } = imports.gi;
const Tweener = imports.ui.tweener;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const {
    BaseTilingLayout
} = Me.imports.src.materialShell.msWorkspace.tilingLayouts.baseTiling;
const { Column, Row } = Me.imports.src.widget.layout;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

// TODO: Make this configurable
const WINDOW_PER_SCREEN = 2;
const WINDOW_SLIDE_TWEEN_TIME = 250;
/* exported SplitLayout */
var SplitLayout = class SplitLayout extends BaseTilingLayout {
    constructor(msWorkspace) {
        super(msWorkspace);

        this.overContainer = new St.Widget();

        this.updateActiveTileableListFromFocused();
        this.addTransitionContainer();
    }

    updateActiveTileableListFromFocused() {
        this.baseIndex = Math.max(
            0,
            Math.min(
                this.msWorkspace.focusedIndex,
                this.msWorkspace.tileableList.length - WINDOW_PER_SCREEN
            )
        );
        this.activeTileableList = this.msWorkspace.tileableList.slice(
            this.baseIndex,
            this.baseIndex + WINDOW_PER_SCREEN
        );
    }

    onWorkAreasChanged() {
        this.addTransitionContainer();
        super.onWorkAreasChanged();
    }

    onTileableListChanged(msWorkspace, newWindows, oldWindows) {
        this.updateActiveTileableListFromFocused();
        super.onTileableListChanged(msWorkspace, newWindows, oldWindows); // Calls onTile
    }

    onFocusChanged(tileableFocused, oldTileableFocused) {
        if (tileableFocused.isDialog || oldTileableFocused.isDialog) return;

        super.onFocusChanged(tileableFocused, oldTileableFocused);
        if (this.activeTileableList.includes(tileableFocused)) {
            return;
        }

        const newIndex = this.msWorkspace.tileableList.indexOf(tileableFocused);
        const oldIndex = this.msWorkspace.tileableList.indexOf(
            oldTileableFocused
        );
        const oldTileableList = this.activeTileableList;
        if (oldIndex < newIndex) {
            this.activeTileableList = this.msWorkspace.tileableList.slice(
                newIndex - WINDOW_PER_SCREEN + 1,
                newIndex + 1
            );
        } else {
            this.activeTileableList = this.msWorkspace.tileableList.slice(
                newIndex,
                newIndex + WINDOW_PER_SCREEN
            );
        }
        this.baseIndex = this.msWorkspace.tileableList.indexOf(
            this.activeTileableList[0]
        );
        if (
            Me.loaded &&
            this.msWorkspace.tileableList.length > WINDOW_PER_SCREEN
        ) {
            this.transition(this.activeTileableList, oldTileableList);
        }
    }

    onTileRegulars(windows) {
        const workArea = this.getWorkspaceBounds();
        // Sizing inactive windows
        windows
            .filter(window => {
                !this.activeTileableList.includes(window);
            })
            .forEach(window => {
                window.set_position(workArea.x, workArea.y);
                window.set_size(
                    workArea.width /
                        (workArea.width > workArea.height
                            ? WINDOW_PER_SCREEN
                            : 1),
                    workArea.height /
                        (workArea.width <= workArea.height
                            ? WINDOW_PER_SCREEN
                            : 1)
                );
            });
        // Positionning active windows
        this.activeTileableList.forEach((window, i) => {
            const windowBounds = {
                x: workArea.x,
                y: workArea.y,
                width: workArea.width,
                height: workArea.height
            };
            if (workArea.width > workArea.height) {
                windowBounds.width /= WINDOW_PER_SCREEN;
                windowBounds.x += (i * workArea.width) / WINDOW_PER_SCREEN;
            } else {
                windowBounds.height /= WINDOW_PER_SCREEN;
                windowBounds.y += (i * workArea.height) / WINDOW_PER_SCREEN;
            }
            if (windows.length < WINDOW_PER_SCREEN) {
                this.animateSetPosition(window, windowBounds.x, windowBounds.y);
                this.animateSetSize(
                    window,
                    windowBounds.width,
                    windowBounds.height
                );
            } else {
                window.set_position(windowBounds.x, windowBounds.y);
                window.set_size(windowBounds.width, windowBounds.height);
            }
        });
        windows.forEach(window => {
            if (!this.activeTileableList.includes(window)) {
                window.hide();
            } else {
                window.show();
            }
        });
    }

    addTransitionContainer() {
        const workArea = this.getWorkspaceBounds();
        this.overContainer.remove_all_children();
        this.transitionContainer = new (workArea.width > workArea.height
            ? Row
            : Column)();
        this.transitionContainer.set_style('background: rgba(200,200,0,0.8)');
        this.overContainer.add_actor(this.transitionContainer);
    }

    onDestroy() {
        super.onDestroy();
        this.msWorkspace.msWindowList.forEach(msWindow => {
            if (!this.activeTileableList.includes(msWindow)) {
                msWindow.show();
            }
        });
    }

    transition(newTileableList, oldTileableList) {
        newTileableList = newTileableList.filter(
            tileable => !oldTileableList.includes(tileable)
        );
        //this.transitionContainer.remove_all_children();
        const direction =
            this.msWorkspace.tileableList.indexOf(newTileableList[0]) -
            this.msWorkspace.tileableList.indexOf(oldTileableList[0]);

        const allTileableList =
            direction > 0
                ? oldTileableList.concat(newTileableList)
                : newTileableList.concat(oldTileableList);

        allTileableList
            .filter(tileable => !tileable.grabbed)
            .forEach(tileable => {
                if (tileable && !tileable.origin) {
                    if (!tileable.get_parent()) {
                        log('no parent for ', tileable.title);
                    }
                    tileable.origin = {
                        parent: tileable.get_parent(),
                        index: tileable
                            .get_parent()
                            .get_children()
                            .indexOf(tileable)
                    };
                }
                tileable.get_parent().remove_child(tileable);
                this.transitionContainer.add_child(tileable);
                tileable.show();
            });

        const workArea = this.getWorkspaceBounds();
        let xFrom = workArea.x;
        let xTo = workArea.x;
        let yFrom = workArea.y;
        let yTo = workArea.y;
        if (workArea.width > workArea.height) {
            const shift =
                (workArea.width * newTileableList.length) / WINDOW_PER_SCREEN;
            if (direction > 0) {
                xTo -= shift;
            } else {
                xFrom -= shift;
            }
        } else {
            const shift =
                (workArea.height * newTileableList.length) / WINDOW_PER_SCREEN;
            if (direction > 0) {
                yTo -= shift;
            } else {
                yFrom -= shift;
            }
        }

        if (!this.animationInProgress) {
            this.transitionContainer.set_position(xFrom, yFrom);

            /* this.overContainer.set_clip(
                this.monitor.x,
                this.monitor.y,
                this.monitor.width,
                this.monitor.height
            ); */
            this.msWorkspace.actor.insert_child_above(
                this.overContainer,
                this.msWorkspace.tileableContainer
            );
            this.animationInProgress = true;
        }

        if (ShellVersionMatch('3.32')) {
            Tweener.addTween(this.transitionContainer, {
                x: xTo,
                y: yTo,
                time: WINDOW_SLIDE_TWEEN_TIME / 1000,
                transition: 'easeOutQuad',
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        } else {
            this.transitionContainer.ease({
                x: xTo,
                y: yTo,
                duration: WINDOW_SLIDE_TWEEN_TIME,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                }
            });
        }
    }

    endTransition() {
        this.activeTileableList.forEach(tileable => {
            tileable.show();
        });
        this.msWorkspace.actor.remove_child(this.overContainer);
        this.transitionContainer.get_children().forEach(actor => {
            actor.get_parent().remove_child(actor);
            actor.origin.parent.insert_child_at_index(
                actor,
                actor.origin.index
            );
            delete actor.origin;
        });
        this.onTile();
    }
};

SplitLayout.key = 'split';

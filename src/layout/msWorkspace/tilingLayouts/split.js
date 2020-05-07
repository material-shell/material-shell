const { St, Shell, Clutter } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { Column, Row } = Me.imports.src.widget.layout;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { reparentActor } = Me.imports.src.utils.index;
const { log } = Me.imports.src.utils.debug;
// TODO: Make this configurable
const WINDOW_PER_SCREEN = 2;
const WINDOW_SLIDE_TWEEN_TIME = 250;
/* exported SplitLayout */
var SplitLayout = class SplitLayout extends BaseTilingLayout {
    constructor(msWorkspace) {
        super(msWorkspace);
        this.updateActiveTileableListFromFocused();
        this.horizontal = this.monitor.width > this.monitor.height;

        //this.addTransitionContainer();
    }

    updateActiveTileableListFromFocused() {
        this.baseIndex = Math.max(
            0,
            Math.min(
                this.msWorkspace.focusedIndex,
                this.msWorkspace.tileableList.length - WINDOW_PER_SCREEN - 1
            )
        );
        this.activeTileableList = this.msWorkspace.tileableList.slice(
            this.baseIndex,
            this.baseIndex + WINDOW_PER_SCREEN
        );
    }

    onWorkAreasChanged() {
        super.onWorkAreasChanged();
    }

    onTileableListChanged(msWorkspace, newWindows, oldWindows) {
        this.updateActiveTileableListFromFocused();
        this.transition();
        super.onTileableListChanged(msWorkspace, newWindows, oldWindows); // Calls onTile
    }

    onFocusChanged(tileableFocused, oldTileableFocused) {
        if (tileableFocused.isDialog || oldTileableFocused.isDialog) return;

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
        log(
            this.activeTileableList.map((tileable) => {
                return tileable.title;
            })
        );
        this.baseIndex = this.msWorkspace.tileableList.indexOf(
            this.activeTileableList[0]
        );
        super.onFocusChanged(tileableFocused, oldTileableFocused);
        if (
            Me.loaded &&
            this.msWorkspace.tileableList.length > WINDOW_PER_SCREEN
        ) {
            this.transition(this.activeTileableList, oldTileableList);
        }
    }

    onTileRegulars(tileableList) {
        const workArea = this.getWorkspaceBounds();
        // Sizing inactive windows
        tileableList.forEach((tileable, index) => {
            log('tileable', tileable.title, index, this.baseIndex);
            tileable.set_size(
                workArea.width / (this.horizontal ? WINDOW_PER_SCREEN : 1),
                workArea.height / (this.horizontal ? 1 : WINDOW_PER_SCREEN)
            );
            if (this.activeTileableList.includes(tileable)) {
                const activeIndex = this.activeTileableList.indexOf(tileable);
                log('activeIndex', activeIndex);

                if (this.horizontal) {
                    tileable.set_position(
                        activeIndex * (workArea.width / WINDOW_PER_SCREEN),
                        0
                    );
                    tileable.translation_x =
                        (workArea.width / WINDOW_PER_SCREEN) *
                        (index - activeIndex);
                    log(
                        'tileable.translation_x',
                        (workArea.width / WINDOW_PER_SCREEN) *
                            (index - activeIndex)
                    );
                } else {
                    tileable.set_position(
                        0,

                        activeIndex * (workArea.height / WINDOW_PER_SCREEN)
                    );
                    tileable.translation_y =
                        (workArea.height / WINDOW_PER_SCREEN) *
                        (index - activeIndex);
                }
                tileable.show();
            } else {
                tileable.set_position(0, 0);
                if (this.horizontal) {
                    tileable.translation_x =
                        (workArea.width / WINDOW_PER_SCREEN) * index;
                } else {
                    tileable.translation_y =
                        (workArea.height / WINDOW_PER_SCREEN) * index;
                }
                tileable.hide();
            }
        });
        if (
            this.baseIndex != 0 &&
            this.msWorkspace.msWorkspaceActor.tileableContainer
                .translation_x === 0 &&
            this.msWorkspace.msWorkspaceActor.tileableContainer
                .translation_y === 0
        ) {
            if (this.horizontal) {
                this.msWorkspace.msWorkspaceActor.tileableContainer.translation_x =
                    -1 * this.baseIndex * (workArea.width / WINDOW_PER_SCREEN);
            } else {
                this.msWorkspace.msWorkspaceActor.tileableContainer.translation_y =
                    -1 * this.baseIndex * (workArea.width / WINDOW_PER_SCREEN);
            }
        }
    }

    onDestroy() {
        super.onDestroy();
        if (this.horizontal) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.translation_x = 0;
        } else {
            this.msWorkspace.msWorkspaceActor.tileableContainer.translation_y = 0;
        }
        this.msWorkspace.msWindowList.forEach((msWindow) => {
            if (!this.activeTileableList.includes(msWindow)) {
                msWindow.show();
            }
        });
    }

    transition() {
        const workArea = this.getWorkspaceBounds();
        let newIndex = this.baseIndex;
        let oldIndex = Math.floor(
            Math.abs(
                this.msWorkspace.msWorkspaceActor.tileableContainer
                    .translation_x
            ) / Math.max(workArea.width / WINDOW_PER_SCREEN, 1)
        );
        log(
            oldIndex,
            workArea.width,
            WINDOW_PER_SCREEN,
            this.msWorkspace.msWorkspaceActor.tileableContainer.translation_x
        );
        let i =
            newIndex > oldIndex
                ? oldIndex - WINDOW_PER_SCREEN
                : oldIndex + WINDOW_PER_SCREEN;
        let to =
            newIndex > oldIndex
                ? newIndex + WINDOW_PER_SCREEN
                : newIndex - WINDOW_PER_SCREEN;
        while (i != to) {
            log('i', i);
            if (this.msWorkspace.tileableList[i])
                this.msWorkspace.tileableList[i].show();
            if (newIndex > oldIndex) {
                i++;
            } else {
                i--;
            }
        }
        if (this.horizontal) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.ease({
                translation_x:
                    -1 * this.baseIndex * (workArea.width / WINDOW_PER_SCREEN),
                duration: WINDOW_SLIDE_TWEEN_TIME,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                },
            });
        } else {
            this.msWorkspace.msWorkspaceActor.tileableContainer.ease({
                translation_y:
                    -1 * this.baseIndex * (workArea.width / WINDOW_PER_SCREEN),
                duration: WINDOW_SLIDE_TWEEN_TIME,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.animationInProgress = false;
                    this.endTransition();
                },
            });
        }
    }

    endTransition() {
        //this.onTile();
    }
};

SplitLayout.key = 'split';

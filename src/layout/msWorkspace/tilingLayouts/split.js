const { GObject, Clutter } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { log, logFocus } = Me.imports.src.utils.debug;
// TODO: Make this configurable
const WINDOW_PER_SCREEN = 2;
const WINDOW_SLIDE_TWEEN_TIME = 250;

/* exported SplitLayout */
var SplitLayout = GObject.registerClass(
    class SplitLayout extends BaseTilingLayout {
        _init(msWorkspace) {
            super._init(msWorkspace);
            this.updateActiveTileableListFromFocused();
            this.vertical = this.monitor.width < this.monitor.height;
            this.translationAnimator = new TranslationAnimator();
            this.translationAnimator.connect('transition-completed', () => {
                this.endTransition();
            });
        }

        afterInit() {
            super.afterInit();
            this.refreshVisibleActors();
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

        onTileableListChanged(msWorkspace, newWindows, oldWindows) {
            super.onTileableListChanged(msWorkspace, newWindows, oldWindows);
            this.updateActiveTileableListFromFocused();
            this.refreshVisibleActors();
        }

        refreshVisibleActors() {
            this.msWorkspace.tileableList.forEach((tileable) => {
                let willBeDisplay = this.activeTileableList.includes(tileable);
                if (willBeDisplay && !tileable.get_parent()) {
                    this.tileableContainer.add_child(tileable);
                } else if (!willBeDisplay && tileable.get_parent()) {
                    this.tileableContainer.remove_child(tileable);
                }
            });
            this.msWorkspace.refreshFocus();
        }

        onFocusChanged(tileableFocused, oldTileableFocused) {
            if (tileableFocused.isDialog || oldTileableFocused.isDialog) return;

            if (this.activeTileableList.includes(tileableFocused)) {
                return;
            }

            const newIndex = this.msWorkspace.tileableList.indexOf(
                tileableFocused
            );
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
            super.onFocusChanged(tileableFocused, oldTileableFocused);

            this.startTransition(oldTileableList, this.activeTileableList);
        }

        showAppLauncher() {
            let actor = this.msWorkspace.appLauncher;
            actor.visible = true;
        }

        hideAppLauncher() {
            // Never hide the Applauncher
        }

        alterTileable(tileable) {
            super.alterTileable(tileable);
            if (tileable.get_parent()) {
                this.tileableContainer.remove_child(tileable);
            }
        }

        restoreTileable(tileable) {
            if (!tileable.get_parent()) {
                this.tileableContainer.add_child(tileable);
            }
        }

        tileTileable(tileable, box, index, siblingLength) {
            let verticalPortion = this.vertical
                ? box.get_height() / WINDOW_PER_SCREEN
                : box.get_height();
            let horizontalPortion = this.vertical
                ? box.get_width()
                : box.get_width() / WINDOW_PER_SCREEN;
            if (this.activeTileableList.includes(tileable)) {
                let activeIndex = this.activeTileableList.indexOf(tileable);
                if (this.vertical) {
                    tileable.x = box.x1;
                    tileable.y = box.y1 + activeIndex * verticalPortion;
                } else {
                    tileable.x = box.x1 + activeIndex * horizontalPortion;
                    tileable.y = box.y1;
                }
            } else {
                tileable.x = box.x1;
                tileable.y = box.y1;
            }

            tileable.width = horizontalPortion;
            tileable.height = verticalPortion;
            logFocus(
                'tileSplit',
                tileable.x,
                tileable.y,
                tileable.width,
                tileable.height
            );
        }
        /* 
        getAllocationBoxOfTileableFor(actor, containerBox, index, length) {
            let allocationBox = new Clutter.ActorBox();
            if (this.vertical) {
                let verticalPortion =
                    containerBox.get_height() / WINDOW_PER_SCREEN;
                allocationBox.x2 = containerBox.get_width();
                allocationBox.y1 = index * verticalPortion;
                allocationBox.y2 = allocationBox.y1 + verticalPortion;
            } else {
                let horizontalPortion =
                    containerBox.get_width() / WINDOW_PER_SCREEN;
                allocationBox.x1 = index * horizontalPortion;
                allocationBox.x2 = allocationBox.x1 + horizontalPortion;
                allocationBox.y2 = containerBox.get_height();
            }
            return allocationBox;
        }

        vfunc_allocate(container, box, flags) {
            container.get_children().forEach((actor) => {
                if (this.activeTileableList.includes(actor)) {
                    actor.allocate(
                        this.getAllocationBoxOfTileableFor(
                            actor,
                            box,
                            this.activeTileableList.indexOf(actor),
                            this.msWorkspace.tileableList.length
                        ),
                        flags
                    );
                } else {
                    actor.allocate(box, flags);
                }
            });
        } */

        /*
         * Animations
         */
        startTransition(previousTileableList, nextTileableList) {
            if (!this.translationAnimator.get_parent()) {
                this.translationAnimator.width = this.tileableContainer.allocation.get_width();
                this.translationAnimator.height = this.tileableContainer.allocation.get_height();
                this.tileableContainer.add_child(this.translationAnimator);
            }
            let lastLeavingIndex = this.msWorkspace.tileableList.indexOf(
                previousTileableList[previousTileableList.length - 1]
            );
            let firstEnteringIndex = this.msWorkspace.tileableList.indexOf(
                nextTileableList[0]
            );
            let direction = lastLeavingIndex > firstEnteringIndex ? -1 : 1;
            [...previousTileableList, ...nextTileableList].forEach((actor) => {
                let parent = actor.get_parent();
                if (parent && parent === this.tileableContainer) {
                    parent.remove_child(actor);
                }
                if (this.vertical) {
                    actor.set_width(
                        this.tileableContainer.allocation.get_width()
                    );
                    actor.set_height(
                        this.tileableContainer.allocation.get_height() /
                            WINDOW_PER_SCREEN
                    );
                } else {
                    actor.set_width(
                        this.tileableContainer.allocation.get_width() /
                            WINDOW_PER_SCREEN
                    );
                    actor.set_height(
                        this.tileableContainer.allocation.get_height()
                    );
                }
            });
            this.translationAnimator.setTranslation(
                previousTileableList,
                nextTileableList,
                direction
            );
        }

        endTransition() {
            this.tileableContainer.remove_child(this.translationAnimator);
            this.refreshVisibleActors();
        }
    }
);

SplitLayout.key = 'split';

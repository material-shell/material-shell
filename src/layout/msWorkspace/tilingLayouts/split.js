/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;

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

        get tileableListVisible() {
            return this.msWorkspace.tileableList.filter(
                (tileable) => tileable.visible
            );
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
            tileable.visible = true;
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
            // Do nothing if App Launcher is the only tileable
            if (index === 0 && siblingLength === 1) {
                tileable.x = box.x1;
                tileable.y = box.y1;
                tileable.width = box.get_width();
                tileable.height = box.get_height();
           } else {
               let x, y, width, height;
               let verticalPortion = this.vertical
                   ? box.get_height() / WINDOW_PER_SCREEN
                   : box.get_height();
               let horizontalPortion = this.vertical
                   ? box.get_width()
                   : box.get_width() / WINDOW_PER_SCREEN;
               if (this.activeTileableList.includes(tileable)) {
                   let activeIndex = this.activeTileableList.indexOf(tileable);
                   if (this.vertical) {
                       x = box.x1;
                       y = box.y1 + activeIndex * verticalPortion;
                   } else {
                       x = box.x1 + activeIndex * horizontalPortion;
                       y = box.y1;
                   }
               } else {
                   x = box.x1;
                   y = box.y1;
               }

               width = horizontalPortion;
               height = verticalPortion;

               let {
                   x: gapX,
                   y: gapY,
                   width: gapWidth,
                   height: gapHeight,
               } = this.applyGaps(x, y, width, height);

               tileable.x = gapX;
               tileable.y = gapY;
               tileable.width = gapWidth;
               tileable.height = gapHeight;
           }
        }

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

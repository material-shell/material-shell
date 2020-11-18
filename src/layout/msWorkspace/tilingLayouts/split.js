/** Gnome libs imports */
const { GObject, St } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { MatNumberPicker } = Me.imports.src.widget.material.numberPicker;

// TODO: Make this configurable
const WINDOW_SLIDE_TWEEN_TIME = 250;

/* exported SplitLayout */
var SplitLayout = GObject.registerClass(
    class SplitLayout extends BaseTilingLayout {
        _init(msWorkspace, state) {
            super._init(msWorkspace, state);
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
                    this.msWorkspace.tileableList.length -
                        this.state.nbOfColumns -
                        1
                )
            );
            this.activeTileableList = this.msWorkspace.tileableList.slice(
                this.baseIndex,
                this.baseIndex + this.state.nbOfColumns
            );
        }

        onTileableListChanged(newWindows, oldWindows) {
            super.onTileableListChanged(newWindows, oldWindows);
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
                    newIndex - this.state.nbOfColumns + 1,
                    newIndex + 1
                );
            } else {
                this.activeTileableList = this.msWorkspace.tileableList.slice(
                    newIndex,
                    newIndex + this.state.nbOfColumns
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

        tileTileable(tileable, box) {
            let x, y, width, height;
            const nbrOfColumns = Math.min(
                this.state.nbOfColumns, this.tileableListVisible.length
            );

            let verticalPortion = this.vertical
                ? box.get_height() / nbrOfColumns
                : box.get_height();
            let horizontalPortion = this.vertical
                ? box.get_width()
                : box.get_width() / nbrOfColumns;

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
                            this.state.nbOfColumns
                    );
                } else {
                    actor.set_width(
                        this.tileableContainer.allocation.get_width() /
                            this.state.nbOfColumns
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

        buildQuickWidget() {
            const widget = new MatNumberPicker(this.state.nbOfColumns, {
                min: 2,
            });
            widget.connect('changed', (_, newValue) => {
                this.state.nbOfColumns = newValue;
                this.updateActiveTileableListFromFocused();
                this.refreshVisibleActors();
                this.tileAll();
            });
            return widget;
        }
    }
);

SplitLayout.state = { key: 'split', nbOfColumns: 2 };
SplitLayout.label = 'Split';

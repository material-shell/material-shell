/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseResizeableTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseResizeableTiling;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { MatNumberPicker } = Me.imports.src.widget.material.numberPicker;
const { reparentActor } = Me.imports.src.utils.index;

// TODO: Make this configurable
const WINDOW_SLIDE_TWEEN_TIME = 250;

/* exported SplitLayout */
var SplitLayout = GObject.registerClass(
    class SplitLayout extends BaseResizeableTilingLayout {
        _init(msWorkspace, state) {
            super._init(msWorkspace, state);
            this.updateActiveTileableListFromFocused();
            this.vertical = this.monitor.width < this.monitor.height;
            this.translationAnimator = new TranslationAnimator();
            this.translationAnimator.connect('transition-completed', () => {
                this.endTransition();
            });

            if (this.mainPortion.vertical !== this.vertical) {
                this.mainPortion.convert();
            }
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
                        this._state.nbOfColumns -
                        1
                )
            );
            this.activeTileableList = this.msWorkspace.tileableList.slice(
                this.baseIndex,
                this.baseIndex + this._state.nbOfColumns
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
                if (
                    willBeDisplay &&
                    tileable.get_parent() !== this.tileableContainer
                ) {
                    reparentActor(tileable, this.tileableContainer);
                } else if (!willBeDisplay && tileable.get_parent()) {
                    this.tileableContainer.remove_child(tileable);
                }
            });
            this.msWorkspace.refreshFocus();
        }

        onFocusChanged(tileableFocused, oldTileableFocused) {
            if (this.activeTileableList.includes(tileableFocused)) {
                this.activeTileableList.forEach((tileable) => {
                    this.setUnFocusEffect(
                        tileable,
                        this.currentFocusEffect,
                        tileable === tileableFocused
                    );
                });
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
                    newIndex - this._state.nbOfColumns + 1,
                    newIndex + 1
                );
            } else {
                this.activeTileableList = this.msWorkspace.tileableList.slice(
                    newIndex,
                    newIndex + this._state.nbOfColumns
                );
            }
            this.baseIndex = this.msWorkspace.tileableList.indexOf(
                this.activeTileableList[0]
            );

            this.startTransition(oldTileableList, this.activeTileableList);
            [...oldTileableList, ...this.activeTileableList].forEach(
                (tileable) => {
                    this.setUnFocusEffect(
                        tileable,
                        this.currentFocusEffect,
                        tileable === tileableFocused
                    );
                }
            );
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
            super.restoreTileable(tileable);
            if (!tileable.get_parent()) {
                this.tileableContainer.add_child(tileable);
            }
        }

        updateMainPortionLength(length) {
            super.updateMainPortionLength(
                length > this._state.nbOfColumns
                    ? this._state.nbOfColumns
                    : length
            );
        }

        getTileableIndex(tileable) {
            if (this.activeTileableList.includes(tileable)) {
                let activeIndex = this.activeTileableList.indexOf(tileable);

                return activeIndex;
            }

            return -1;
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

            let direction = nextTileableList.includes(previousTileableList[0])
                ? -1
                : 1;
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
                            this._state.nbOfColumns
                    );
                } else {
                    actor.set_width(
                        this.tileableContainer.allocation.get_width() /
                            this._state.nbOfColumns
                    );
                    actor.set_height(
                        this.tileableContainer.allocation.get_height()
                    );
                }
            });
            this.borderContainer.hide();
            this.translationAnimator.setTranslation(
                previousTileableList,
                nextTileableList,
                direction
            );
        }

        endTransition() {
            this.borderContainer.show();
            this.refreshVisibleActors();
            this.tileableContainer.remove_child(this.translationAnimator);
        }

        buildQuickWidget() {
            const widget = new MatNumberPicker(this._state.nbOfColumns, {
                min: 2,
            });
            widget.connect('changed', (_, newValue) => {
                this._state.nbOfColumns = newValue;
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

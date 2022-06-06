/** Gnome libs imports */
import { BaseResizeableTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { registerGObjectClass } from 'src/utils/gjs';
import { reparentActor } from 'src/utils/index';
import { MatNumberPicker } from 'src/widget/material/numberPicker';
import { TranslationAnimator } from 'src/widget/translationAnimator';
import { MsWorkspace, Tileable } from '../msWorkspace';
import { Portion } from '../portion';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

// TODO: Make this configurable
// const WINDOW_SLIDE_TWEEN_TIME = 250;

type SplitLayoutState = {
    key: 'split';
    nbOfColumns: number;
};

@registerGObjectClass
export class SplitLayout extends BaseResizeableTilingLayout<SplitLayoutState> {
    static state = { key: 'split', nbOfColumns: 2 };
    static label = 'Split';

    // _state: { key: 'split', nbOfColumns: number };
    vertical: boolean;
    translationAnimator: TranslationAnimator;
    baseIndex: number;
    activeTileableList: Tileable[];

    constructor(
        msWorkspace: MsWorkspace,
        state: Partial<SplitLayoutState & { mainPortion: Portion }>
    ) {
        super(msWorkspace, state);
        this.baseIndex = 0;
        this.activeTileableList = [];
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

    onTileableListChanged(newWindows: Tileable[]) {
        super.onTileableListChanged(newWindows);
        this.updateActiveTileableListFromFocused();
        this.refreshVisibleActors();
    }

    refreshVisibleActors() {
        // refreshVisibleActors will be called when the animation finishes
        if (this.translationAnimator.animationInProgress) return;

        for (const tileable of this.msWorkspace.tileableList) {
            if (this.shouldBeVisible(tileable)) {
                if (tileable.get_parent() !== this.tileableContainer) {
                    reparentActor(tileable, this.tileableContainer);
                }
            } else {
                if (tileable.get_parent() === this.tileableContainer) {
                    this.tileableContainer.remove_child(tileable);
                }
            }
        }
        this.msWorkspace.refreshFocus();
    }

    onFocusChanged(
        tileableFocused: Tileable,
        oldTileableFocused: Tileable | null
    ) {
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

        // TODO: What happens if newIndex=1 and oldIndex=2 and columns=3?
        const newIndex = this.msWorkspace.tileableList.indexOf(tileableFocused);
        const oldIndex = this.msWorkspace.tileableList.indexOf(
            oldTileableFocused as any
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
        [...oldTileableList, ...this.activeTileableList].forEach((tileable) => {
            this.setUnFocusEffect(
                tileable,
                this.currentFocusEffect,
                tileable === tileableFocused
            );
        });
    }

    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
    }

    hideAppLauncher() {
        // Never hide the Applauncher
    }

    alterTileable(tileable: Tileable) {
        super.alterTileable(tileable);
        tileable.visible = true;
        if (tileable.get_parent()) {
            this.tileableContainer.remove_child(tileable);
        }
    }

    restoreTileable(tileable: Tileable) {
        super.restoreTileable(tileable);
        if (!tileable.get_parent()) {
            this.tileableContainer.add_child(tileable);
        }
    }

    updateMainPortionLength(length: number) {
        super.updateMainPortionLength(
            length > this._state.nbOfColumns ? this._state.nbOfColumns : length
        );
    }

    getTileableIndex(tileable: Tileable) {
        if (this.activeTileableList.includes(tileable)) {
            return this.activeTileableList.indexOf(tileable);
        }

        return -1;
    }

    /** Start a transition from one slice of visible tileables to another slice.
     * Note that it is expected that the sequences are slices of `this.msWorkspace.tileableList`.
     */
    startTransition(
        previousTileableList: Tileable[],
        nextTileableList: Tileable[]
    ) {
        if (!this.translationAnimator.get_parent()) {
            this.translationAnimator.width =
                this.tileableContainer.allocation.get_width();
            this.translationAnimator.height =
                this.tileableContainer.allocation.get_height();
            this.tileableContainer.add_child(this.translationAnimator);
        }

        const prevBase =
            previousTileableList.length > 0
                ? this.msWorkspace.tileableList.indexOf(previousTileableList[0])
                : -1;
        const nextBase =
            nextTileableList.length > 0
                ? this.msWorkspace.tileableList.indexOf(nextTileableList[0])
                : -1;
        const direction = prevBase > nextBase ? -1 : 1;
        [...previousTileableList, ...nextTileableList].forEach((actor) => {
            const parent = actor.get_parent();
            if (parent && parent === this.tileableContainer) {
                parent.remove_child(actor);
            }
            if (this.vertical) {
                actor.set_width(this.tileableContainer.allocation.get_width());
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
        if (this.borderContainer) {
            this.borderContainer.hide();
        }
        this.translationAnimator.setTranslation(
            previousTileableList,
            nextTileableList,
            direction
        );
    }

    endTransition() {
        if (this.borderContainer) {
            this.borderContainer.show();
        }
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

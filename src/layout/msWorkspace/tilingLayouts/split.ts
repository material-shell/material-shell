/** Gnome libs imports */
import { ActorBox } from 'clutter';
import { BaseResizeableTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { registerGObjectClass } from 'src/utils/gjs';
import { TranslationHelper } from 'src/utils/transition';
import { MatNumberPicker } from 'src/widget/material/numberPicker';
import { MsWorkspace, Tileable } from '../msWorkspace';
import { Portion } from '../portion';

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
    translationHelper = new TranslationHelper(this.tileableContainer);
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
        this.translationHelper.connect(
            'transition-completed',
            (_, actorsLeftList: Tileable[]) => {
                this.endTransition(actorsLeftList);
            }
        );

        if (this.mainPortion.vertical !== this.vertical) {
            this.mainPortion.convert();
        }
    }

    afterInit() {
        super.afterInit();
        this.refreshVisibleActors();
    }

    get tileableListVisible() {
        return this.activeTileableList;
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
        if (this.translationHelper.animationInProgress) return;

        for (const tileable of this.msWorkspace.tileableList) {
            if (this.activeTileableList.includes(tileable)) {
                tileable.show();
            } else {
                tileable.hide();
            }
        }
        this.msWorkspace.refreshFocus();
    }

    onFocusChanged(
        tileableFocused: Tileable,
        _oldTileableFocused: Tileable | null
    ) {
        const newIndex = this.msWorkspace.tileableList.indexOf(tileableFocused);
        // Represents a slice from baseIndex to baseIndex + this._state.nbOfColumns (exclusive)
        let newBaseIndex = this.baseIndex;
        // Ensure the new tileable is visible
        newBaseIndex = Math.max(
            newBaseIndex,
            newIndex - this._state.nbOfColumns + 1
        );
        newBaseIndex = Math.min(newBaseIndex, newIndex);
        // Ensure the slice does not go out of bounds
        newBaseIndex = Math.min(
            newBaseIndex,
            this.msWorkspace.tileableList.length - this._state.nbOfColumns
        );
        newBaseIndex = Math.max(newBaseIndex, 0);

        const oldTileableList = this.activeTileableList;

        if (newBaseIndex !== this.baseIndex) {
            const direction = this.baseIndex > newBaseIndex ? -1 : 1;
            const nthChange = Math.abs(this.baseIndex - newBaseIndex);
            for (let index = 0; index < nthChange; index++) {
                if (direction > 0) {
                    this.mainPortion.shiftForward();
                } else {
                    this.mainPortion.shiftBackward();
                }
            }
            this.baseIndex = newBaseIndex;
            //this.tileAll();
            this.activeTileableList = this.msWorkspace.tileableList.slice(
                newBaseIndex,
                newBaseIndex + this._state.nbOfColumns
            );
            this.tileAll();
            this.startTransition(this.activeTileableList, direction);
        }

        for (const tileable of new Set([
            ...oldTileableList,
            ...this.activeTileableList,
        ])) {
            this.setUnFocusEffect(
                tileable,
                this.currentFocusEffect,
                tileable === tileableFocused
            );
        }
    }

    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
    }

    hideAppLauncher() {
        // Never hide the Applauncher
    }

    override shouldBeVisible(_tileable: Tileable): boolean {
        return true;
    }

    initializeTileable(tileable: Tileable) {
        super.initializeTileable(tileable);
        tileable.visible = true;
    }

    restoreTileable(tileable: Tileable) {
        super.restoreTileable(tileable);
        tileable.visible = true;

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

    tileAll(box?: ActorBox | undefined): void {
        if (!this.translationHelper.animationInProgress) super.tileAll(box);
    }

    /** Start a transition from one slice of visible tileables to another slice.
     * Note that it is expected that the sequences are slices of `this.msWorkspace.tileableList`.
     */
    startTransition(nextTileableList: Tileable[], direction: number) {
        if (this.borderContainer) {
            this.borderContainer.hide();
        }

        this.translationHelper.setTranslation(
            nextTileableList,
            this.msWorkspace.tileableList,
            direction
        );
    }

    endTransition(actorListToRemove: Tileable[]) {
        if (this.borderContainer) {
            this.borderContainer.show();
        }
        for (const actor of actorListToRemove) {
            actor.hide();
        }
        this.msWorkspace.refreshFocus();
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

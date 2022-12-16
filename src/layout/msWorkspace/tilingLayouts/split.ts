/** Gnome libs imports */
import { BaseResizeableTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { registerGObjectClass } from 'src/utils/gjs';
import { MatNumberPicker } from 'src/widget/material/numberPicker';
import { TranslationAnimator } from 'src/widget/translationAnimator';
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
    translationAnimator = new TranslationAnimator();
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
        this.tileableContainer.add_child(this.translationAnimator);
        this.translationAnimator.connect('transition-completed', () => {
            this.endTransition();
        });

        if (this.mainPortion.vertical !== this.vertical) {
            this.mainPortion.convert();
        }
    }

    afterInit() {
        super.afterInit();
        this.updateActiveTileableListFromFocused();
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
        this.translationAnimator.setActors(this.activeTileableList);
    }

    onTileableListChanged(newWindows: Tileable[]) {
        super.onTileableListChanged(newWindows);
        this.updateActiveTileableListFromFocused();
        this.msWorkspace.refreshFocus();
    }

    onFocusChanged(
        tileableFocused: Tileable,
        _oldTileableFocused: Tileable | null
    ) {
        const newIndex = this.msWorkspace.tileableList.indexOf(tileableFocused);
        // Represents a slice from baseIndex to baseIndex + this._state.nbOfColumns (exclusive)
        let baseIndex = this.baseIndex;
        // Ensure the new tileable is visible
        baseIndex = Math.max(baseIndex, newIndex - this._state.nbOfColumns + 1);
        baseIndex = Math.min(baseIndex, newIndex);
        // Ensure the slice does not go out of bounds
        baseIndex = Math.min(
            baseIndex,
            this.msWorkspace.tileableList.length - this._state.nbOfColumns
        );
        baseIndex = Math.max(baseIndex, 0);

        const oldTileableList = this.activeTileableList;

        if (baseIndex !== this.baseIndex) {
            this.baseIndex = baseIndex;
            this.activeTileableList = this.msWorkspace.tileableList.slice(
                baseIndex,
                baseIndex + this._state.nbOfColumns
            );
            this.startTransition(oldTileableList, this.activeTileableList);
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

    override shouldBeVisible(tileable: Tileable): boolean {
        return this.activeTileableList.includes(tileable);
    }

    initializeTileable(tileable: Tileable) {
        super.initializeTileable(tileable);
        tileable.visible = true;
    }

    restoreTileable(tileable: Tileable) {
        super.restoreTileable(tileable);
        this.translationAnimator.tryRemoveActor(tileable);
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
        const width = this.tileableContainer.allocation.get_width();
        const height = this.tileableContainer.allocation.get_height();

        const prevBase =
            previousTileableList.length > 0
                ? this.msWorkspace.tileableList.indexOf(previousTileableList[0])
                : -1;
        const nextBase =
            nextTileableList.length > 0
                ? this.msWorkspace.tileableList.indexOf(nextTileableList[0])
                : -1;
        const direction = prevBase > nextBase ? -1 : 1;

        const itemWidth = Math.round(
            this.vertical ? width : width / this._state.nbOfColumns
        );
        const itemHeight = Math.round(
            this.vertical ? height / this._state.nbOfColumns : height
        );

        for (const actor of new Set([
            ...previousTileableList,
            ...nextTileableList,
        ])) {
            actor.width = itemWidth;
            actor.height = itemHeight;
        }

        if (this.borderContainer) {
            this.borderContainer.hide();
        }

        this.translationAnimator.setTranslation(nextTileableList, direction);
    }

    endTransition() {
        if (this.borderContainer) {
            this.borderContainer.show();
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
            this.tileAll();
        });
        return widget;
    }
}

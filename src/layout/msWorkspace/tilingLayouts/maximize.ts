const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as Clutter from 'clutter';
/** Extension imports */
import { BaseTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseTiling';
import { logAssert } from 'src/utils/assert';
import { registerGObjectClass } from 'src/utils/gjs';
import { TranslationHelper } from 'src/utils/transition';
import { MsWorkspace, Tileable } from '../msWorkspace';

type MaximizeLayoutState = { key: 'maximize' };
@registerGObjectClass
export class MaximizeLayout extends BaseTilingLayout<MaximizeLayoutState> {
    static state = { key: 'maximize' };
    static label = 'Maximize';
    translationHelper: TranslationHelper;
    currentDisplayed: { tileable: Tileable; destroySignal: number } | null =
        null;

    constructor(msWorkspace: MsWorkspace, state: MaximizeLayoutState) {
        super(msWorkspace, state);
        this.translationHelper = new TranslationHelper(this.tileableContainer);
        this.translationHelper.connect('transition-completed', () => {
            this.endTransition();
        });
    }

    get tileableListVisible() {
        return this.msWorkspace.tileableList.filter(
            (tileable) => tileable.visible
        );
    }

    displayTileable(actor: Tileable) {
        if (this.translationHelper.animationInProgress) return;
        if (this.currentDisplayed) {
            if (
                logAssert(
                    this.tileableContainer
                        .get_children()
                        .includes(this.currentDisplayed.tileable),
                    'Expected the currently displayed tileable to be a child of the tileable container'
                )
            ) {
                this.currentDisplayed.tileable.hide();
            }

            this.currentDisplayed.tileable.disconnect(
                this.currentDisplayed.destroySignal
            );
        }
        this.currentDisplayed = {
            tileable: actor,
            destroySignal: actor.connect('destroy', () => {
                this.currentDisplayed = null;
            }),
        };

        actor.show();
        if (this.msWorkspace.isDisplayed()) actor.grab_key_focus();
    }

    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
    }

    hideAppLauncher() {
        // Never hide the Applauncher
    }

    onFocusChanged(windowFocused: Tileable, oldWindowFocused: Tileable | null) {
        if (windowFocused.dragged || windowFocused === oldWindowFocused) {
            this.displayTileable(windowFocused);
        } else {
            this.startTransition(windowFocused, oldWindowFocused);
        }
    }

    override shouldBeVisible(tileable: Tileable): boolean {
        return tileable === this.currentDisplayed?.tileable;
    }

    initializeTileable(tileable: Tileable) {
        super.initializeTileable(tileable);
        tileable.visible = false;
        if (tileable === this.msWorkspace.tileableFocused) {
            this.displayTileable(tileable);
        }
    }

    restoreTileable(tileable: Tileable) {
        tileable.visible = true;
    }

    tileTileable(tileable: Tileable, box: Clutter.ActorBox) {
        tileable.x = box.x1;
        tileable.y = box.y1;
        tileable.width = box.get_width();
        tileable.height = box.get_height();
    }

    /*
     * Animations
     */
    startTransition(nextActor: Tileable, prevActor: Tileable | null) {
        const indexOfPrevActor = this.msWorkspace.tileableList.findIndex(
            (tileable) => {
                return tileable === prevActor;
            }
        );
        const indexOfNextActor = this.msWorkspace.tileableList.findIndex(
            (tileable) => {
                return tileable === nextActor;
            }
        );

        this.translationHelper.setTranslation(
            [nextActor],
            this.msWorkspace.tileableList,
            indexOfNextActor > indexOfPrevActor ? 1 : -1
        );
    }

    endTransition() {
        if (this.msWorkspace.tileableFocused !== null) {
            for (const child of this.tileableContainer.get_children()) {
                if (
                    child != this.msWorkspace.tileableFocused &&
                    child != this.currentDisplayed?.tileable
                ) {
                    child.hide();
                }
            }
            this.displayTileable(this.msWorkspace.tileableFocused);
        }
    }
}

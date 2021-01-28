const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as GObject from 'gobject';
import * as Clutter from 'clutter';

/** Extension imports */
import { BaseTilingLayout, } from "src/layout/msWorkspace/tilingLayouts/baseTiling";
import { TranslationAnimator } from 'src/widget/translationAnimator';
import { InfinityTo0 } from 'src/utils/index';
import { reparentActor } from 'src/utils/index';
import { registerGObjectClass } from 'src/utils/gjs';
import { MsWorkspace, Tileable } from '../msWorkspace';
import { MsApplicationLauncher } from 'src/widget/msApplicationLauncher';
import { MsWindow } from '../msWindow';

@registerGObjectClass
export class MaximizeLayout extends BaseTilingLayout {
    static state = { key: 'maximize' };
    static label = 'Maximize';
    translationAnimator: TranslationAnimator;
    currentDisplayedActor: any;
    currentDisplayedActorDestroySignal: number | undefined;

    constructor(msWorkspace: MsWorkspace, state) {
        super(msWorkspace, state);
        this.translationAnimator = new TranslationAnimator();
        this.translationAnimator.connect('transition-completed', () => {
            this.endTransition();
        });
    }

    get tileableListVisible() {
        return this.msWorkspace.tileableList.filter(
            (tileable) => tileable.visible
        );
    }

    displayTileable(actor) {
        if (this.currentDisplayedActor) {
            if (
                this.tileableContainer
                    .get_children()
                    .includes(this.currentDisplayedActor)
            ) {
                this.tileableContainer.remove_child(
                    this.currentDisplayedActor
                );
            }

            this.currentDisplayedActor.disconnect(
                this.currentDisplayedActorDestroySignal
            );
        }
        this.currentDisplayedActor = actor;
        this.currentDisplayedActorDestroySignal = this.currentDisplayedActor.connect(
            'destroy',
            () => {
                delete this.currentDisplayedActor;
            }
        );

        reparentActor(this.currentDisplayedActor, this.tileableContainer);
        this.currentDisplayedActor.grab_key_focus();
    }

    showAppLauncher() {
        let actor = this.msWorkspace.appLauncher;
        actor.visible = true;
    }

    hideAppLauncher() {
        // Never hide the Applauncher
    }

    onFocusChanged(windowFocused: Tileable, oldWindowFocused: Tileable | null) {
        super.onFocusChanged();
        if (windowFocused.dragged) {
            this.displayTileable(windowFocused);
        } else {
            if (!windowFocused.get_parent()) {
                this.displayTileable(windowFocused);
            }

            this.startTransition(windowFocused, oldWindowFocused);
        }
    }

    alterTileable(tileable: Tileable) {
        super.alterTileable(tileable);
        tileable.visible = true;
        if (this.tileableContainer.get_children().includes(tileable)) {
            this.tileableContainer.remove_child(tileable);
        }
        if (tileable === this.msWorkspace.tileableFocused) {
            this.displayTileable(tileable);
        }
    }

    restoreTileable(tileable: Tileable) {
        if (!tileable.get_parent()) {
            this.tileableContainer.add_child(tileable);
        }
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
        if (!this.translationAnimator.get_parent()) {
            this.translationAnimator.width = InfinityTo0(
                this.tileableContainer.allocation.get_width()
            );
            this.translationAnimator.height = InfinityTo0(
                this.tileableContainer.allocation.get_height()
            );
            this.tileableContainer.add_child(this.translationAnimator);
        }
        let indexOfPrevActor = this.msWorkspace.tileableList.findIndex(
            (tileable) => {
                return tileable === prevActor;
            }
        );
        let indexOfNextActor = this.msWorkspace.tileableList.findIndex(
            (tileable) => {
                return tileable === nextActor;
            }
        );
        [nextActor, prevActor].forEach((actor) => {
            if (actor) {
                actor.set_width(
                    InfinityTo0(
                        this.tileableContainer.allocation.get_width()
                    )
                );
                actor.set_height(
                    InfinityTo0(
                        this.tileableContainer.allocation.get_height()
                    )
                );
            }
        });

        this.translationAnimator.setTranslation(
            [prevActor],
            [nextActor],
            indexOfNextActor > indexOfPrevActor ? 1 : -1
        );
    }

    endTransition() {
        this.displayTileable(this.msWorkspace.tileableFocused);
        this.tileableContainer.remove_child(this.translationAnimator);
    }
}

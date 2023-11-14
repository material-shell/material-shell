/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { Signal } from 'src/manager/msManager';
import { diffLists } from 'src/utils/diff_list';
import { registerGObjectClass } from 'src/utils/gjs';
import { InfinityTo0 } from 'src/utils/index';
import { getSettings } from 'src/utils/settings';
import { MsWorkspace, Tileable } from '../msWorkspace';

/** Extension imports */
import { default as Me } from 'src/extension';
import { Debug } from 'src/utils/debug';

@registerGObjectClass
export class BaseTilingLayout<
    S extends { key: string }
> extends Clutter.LayoutManager {
    _state: S;
    icon: Gio.Icon;
    msWorkspace: MsWorkspace;
    themeSettings: Gio.Settings;
    signals: Signal[];
    private lastObservedTileableList: Tileable[] = [];

    constructor(msWorkspace: MsWorkspace, state: Partial<S> = {}) {
        super();
        this._state = Object.assign(
            {},
            (this.constructor as unknown as { state: S }).state,
            state
        );
        this.icon = Gio.icon_new_for_string(
            `${Me.instance.metadata.path}/assets/icons/tiling/${this._state.key}-symbolic.svg`
        );
        this.msWorkspace = msWorkspace;
        this.themeSettings = getSettings('theme');
        this.signals = [];
        this.registerToSignals();
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.afterInit();
            return GLib.SOURCE_REMOVE;
        });
    }

    afterInit() {
        this.onTileableListChanged(this.msWorkspace.tileableList);
    }

    /// Specifies the focus mode used for this layout when closing a tileable.
    ///
    /// Chronological mode:
    /// The last focused tileable will be focused.
    ///
    /// Spatial mode:
    /// One of the two tileables next to the closed one will be focused.
    /// The last focused tileable will be preferred if it is next to the closed one.
    /// The application launcher will be avoided if possible.
    get preferredFocusHistory(): 'chronological' | 'spatial' {
        return 'chronological';
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }

    get tileableContainer() {
        return this.msWorkspace.msWorkspaceActor.tileableContainer;
    }

    get monitor() {
        return this.msWorkspace.monitor;
    }

    get tileableListVisible() {
        return this.msWorkspace.tileableList.filter((tileable) => {
            if (tileable === this.msWorkspace.appLauncher) {
                return (
                    tileable === this.msWorkspace.tileableFocused ||
                    this.msWorkspace.tileableList.length === 1
                );
            } else {
                return tileable.visible;
            }
        });
    }

    registerToSignals() {
        this.signals.push(
            {
                from: this.msWorkspace,
                id: this.msWorkspace.connect(
                    'tileableList-changed',
                    (_, tileableList) => {
                        this.onTileableListChanged(tileableList);
                    }
                ),
            },
            {
                from: this.msWorkspace,
                id: this.msWorkspace.connect(
                    'tileable-focus-changed',
                    (_, tileable, oldTileable) => {
                        this.onFocusChanged(tileable, oldTileable);
                    }
                ),
            },
            {
                from: global.display,
                id: global.display.connect(
                    'workareas-changed',
                    this.onWorkAreasChanged.bind(this)
                ),
            }
        );
    }

    shouldBeVisible(_tileable: Tileable): boolean {
        return true;
    }

    /** Called when a new tileable enters the workspace.
     * When the layout is initialized this will be called for all tileables currently in the workspace.
     */
    initializeTileable(tileable: Tileable) {
        if (
            tileable === this.msWorkspace.appLauncher &&
            tileable !== this.msWorkspace.tileableFocused
        ) {
            this.msWorkspace.appLauncher.hide();
        }
        if (this.shouldBeVisible(tileable)) {
            if (!tileable.get_parent()) {
                this.tileableContainer.add_child(tileable);
            }
        } else {
            if (tileable.get_parent() === this.tileableContainer) {
                this.tileableContainer.remove_child(tileable);
            }
        }
    }

    /** Called when a tileable exits the workspace.
     * Any modifications to the tileable should be restored.
     *
     * It should end up parented to the tileableContainer.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    restoreTileable(_tileable: Tileable) {}

    tileTileable(
        _tileable: Tileable,
        _box: Clutter.ActorBox,
        _index: number,
        _siblingLength: number
    ) {
        /*
         * Function called automatically size of the container change
         */
    }

    resolveBox(box?: Clutter.ActorBox): Clutter.ActorBox {
        if (!box) {
            box = new Clutter.ActorBox();
            box.x2 = InfinityTo0(this.tileableContainer.allocation.get_width());
            box.y2 = InfinityTo0(
                this.tileableContainer.allocation.get_height()
            );
        }

        return box;
    }

    tileAll(box?: Clutter.ActorBox) {
        const resolvedBox = this.resolveBox(box);

        for (const tileable of this.tileableListVisible) {
            if (tileable instanceof MsWindow && tileable.dragged) return;
            this.tileTileable(
                tileable,
                resolvedBox,
                this.tileableListVisible.indexOf(tileable),
                this.tileableListVisible.length
            );
            if (tileable instanceof MsWindow) {
                tileable.updateMetaWindowPositionAndSize();
            }
        }
    }

    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;

        actor.visible = true;
        actor.set_scale(0.8, 0.8);
        actor.translation_x = actor.width * 0.1;
        actor.translation_y = actor.height * 0.1;
        actor.opacity = 0;
        actor.ease({
            scale_x: 1,
            scale_y: 1,
            translation_x: 0,
            translation_y: 0,
            opacity: 255,
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
        });
    }

    hideAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.ease({
            scale_x: 0.8,
            scale_y: 0.8,
            translation_x: actor.width * 0.1,
            translation_y: actor.height * 0.1,
            opacity: 0,
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                actor.set_scale(1, 1);
                actor.translation_x = 0;
                actor.translation_y = 0;
                actor.opacity = 255;
                actor.visible = false;
            },
        });
    }

    onTileableListChanged(tileableList: Tileable[]) {
        const { added: enteringTileableList, removed: leavingTileableList } =
            diffLists(this.lastObservedTileableList, tileableList);
        this.lastObservedTileableList = [...tileableList];

        for (const tileable of enteringTileableList) {
            this.initializeTileable(tileable);
        }

        for (const tileable of leavingTileableList) {
            if (
                tileable instanceof MsWindow &&
                Me.msWindowManager!.msWindowList.includes(tileable)
            ) {
                this.restoreTileable(tileable);
            }
        }

        if (
            this.msWorkspace.appLauncher.visible &&
            this.msWorkspace.tileableFocused !== this.msWorkspace.appLauncher
        ) {
            this.hideAppLauncher();
        }
        if (tileableList.length == 1 && !this.msWorkspace.appLauncher.visible) {
            this.showAppLauncher();
        }
        this.tileAll();

        this.layout_changed();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onWorkAreasChanged() {}

    onFocusChanged(tileable: Tileable, oldTileable: Tileable | null) {
        if (tileable === this.msWorkspace.appLauncher) {
            this.tileAll();
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.showAppLauncher();
                return GLib.SOURCE_REMOVE;
            });
        } else if (oldTileable === this.msWorkspace.appLauncher) {
            this.hideAppLauncher();
            this.tileAll();
        }
    }

    getWorkspaceBounds() {
        const box =
            this.msWorkspace.msWorkspaceActor.tileableContainer.allocation;
        return {
            x: 0,
            y: 0,
            width: box.get_width(),
            height: box.get_height(),
        };
    }

    applyGaps(
        x: number,
        y: number,
        width: number,
        height: number,
        screenGap?: number,
        gap?: number
    ) {
        // Reduces box size according to gap setting
        gap = gap || Me.layoutManager!.gap;
        if (screenGap == undefined) {
            screenGap = Me.layoutManager!.useScreenGap
                ? Me.layoutManager!.screenGap
                : gap;
        }

        if (
            (!gap && !screenGap) ||
            // Never apply gaps if App Launcher is the only tileable
            this.msWorkspace.tileableList.length < 2
        ) {
            return { x, y, width, height };
        }
        const bounds = this.getWorkspaceBounds();
        const edgeGap = screenGap;
        const halfGap = gap / 2;

        if (x === bounds.x) {
            // box is at screen left edge
            x += edgeGap;
            width -= edgeGap;
        } else {
            x += halfGap;
            width -= halfGap;
        }
        if (y === bounds.y) {
            // box is at screen top edge
            y += edgeGap;
            height -= edgeGap;
        } else {
            y += halfGap;
            height -= halfGap;
        }
        if (x + width === bounds.x + bounds.width) {
            // box is at screen right edge
            width -= edgeGap;
        } else {
            width -= halfGap;
        }
        if (y + height === bounds.y + bounds.height) {
            // box is at screen bottom edge
            height -= edgeGap;
        } else {
            height -= halfGap;
        }

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (width < 1) width = 1;
        if (height < 1) height = 1;

        return { x, y, width, height };
    }

    buildQuickWidget() {
        // return a widget to add to the panel
    }

    override vfunc_get_preferred_width(
        _container: Clutter.Container,
        _forHeight: number
    ): [number, number] {
        return [-1, -1];
    }

    override vfunc_get_preferred_height(
        _container: Clutter.Container,
        _forWidth: number
    ): [number, number] {
        return [-1, -1];
    }

    override vfunc_allocate(container: Clutter.Actor, box: Clutter.ActorBox) {
        this.tileAll(box);
        container.get_children().forEach((actor) => {
            if (this.msWorkspace.tileableList.includes(actor as Tileable)) {
                actor.allocate_preferred_size(actor.x, actor.y);
            } else {
                actor.allocate(box);
            }
        });
    }

    onDestroy() {
        this.signals.forEach((signal) => {
            try {
                signal.from.disconnect(signal.id);
            } catch (error) {
                Debug.log(
                    `Failed to disconnect signal ${signal.id} from ${
                        signal.from
                    } ${
                        signal.from.constructor.name
                    } ${signal.from.toString()}  `
                );
            }
        });
        if (!Me.instance.disableInProgress) {
            this.msWorkspace.tileableList.forEach((tileable) => {
                this.restoreTileable(tileable);
            });
        }
    }
}

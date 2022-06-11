const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as GLib from 'glib';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
/** Extension imports */
import { BaseTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseTiling';
import { registerGObjectClass } from 'src/utils/gjs';
import * as WindowUtils from 'src/utils/windows';
import { MsWorkspace, Tileable } from '../msWorkspace';

type FloatLayoutState = { key: 'float' };

@registerGObjectClass
export class FloatLayout extends BaseTilingLayout<FloatLayoutState> {
    static state = { key: 'float' };
    static label = 'Float';

    // TODO: Unused?
    tileableFocused: Tileable | undefined;

    constructor(msWorkspace: MsWorkspace, state: FloatLayoutState) {
        super(msWorkspace, state);
        this.windowsRestacked();
    }

    override registerToSignals(): void {
        super.registerToSignals();
        this.signals.push({
            from: global.display,
            id: global.display.connect(
                'restacked',
                this.windowsRestacked.bind(this)
            ),
        });
    }

    initializeTileable(tileable: Tileable) {
        if (tileable instanceof MsWindow && tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                // Need to check again because the metaWindow may have been removed here.
                if (tileable.metaWindow) {
                    WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
                }
                tileable.mimicMetaWindowPositionAndSize();
                tileable.msContent.clip_to_allocation = false;
                return GLib.SOURCE_REMOVE;
            });
        }
        if (tileable === this.tileableFocused) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(
                tileable,
                null
            );
        }
        super.initializeTileable(tileable);
    }

    restoreTileable(tileable: Tileable) {
        if (tileable instanceof MsWindow && tileable.metaWindow) {
            tileable.msContent.clip_to_allocation = true;

            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                if (tileable.metaWindow) {
                    WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
                }
                return GLib.SOURCE_REMOVE;
            });
        }
    }

    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.x = 0;
        actor.y = 0;
        actor.width = this.tileableContainer.allocation.get_width();
        actor.height = this.tileableContainer.allocation.get_height();
        super.showAppLauncher();
    }

    onFocusChanged(tileableFocused: Tileable, oldTileable: Tileable | null) {
        if (
            tileableFocused != this.msWorkspace.appLauncher &&
            this.msWorkspace.appLauncher.visible
        ) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_below_sibling(
                tileableFocused,
                this.msWorkspace.appLauncher
            );
        } else {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(
                tileableFocused,
                null
            );
        }
        super.onFocusChanged(tileableFocused, oldTileable);
    }

    tileAll() {
        this.msWorkspace.tileableList.forEach((tileable) => {
            if (tileable.dragged) return;
            if (tileable === this.msWorkspace.appLauncher) {
                tileable.x = 0;
                tileable.y = 0;
                tileable.width = this.tileableContainer.allocation.get_width();
                tileable.height =
                    this.tileableContainer.allocation.get_height();
            }
            if (tileable instanceof MsWindow) {
                tileable.mimicMetaWindowPositionAndSize();
            }
        });
    }

    windowsRestacked() {
        global.window_group.get_children().forEach((actor) => {
            if (
                actor instanceof MsWindow &&
                actor.metaWindow &&
                actor.metaWindow.msWindow
            ) {
                if (
                    this.msWorkspace.tileableList.includes(
                        actor.metaWindow.msWindow
                    )
                ) {
                    this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(
                        actor.metaWindow.msWindow,
                        null
                    );
                }
            }
        });
    }
}

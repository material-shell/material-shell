/** Gnome libs imports */
const { GLib, GObject } = imports.gi;

/** Extension imports */
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const WindowUtils = Me.imports.src.utils.windows;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;

/* exported FloatLayout */
var FloatLayout = GObject.registerClass(
    class FloatLayout extends BaseTilingLayout {
        alterTileable(tileable) {
            if (tileable.metaWindow) {
                GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                    WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
                    tileable.mimicMetaWindowPositionAndSize();
                    return GLib.SOURCE_REMOVE;
                });
            }
            if (tileable === this.tileableFocused) {
                this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(
                    tileable,
                    null
                );
            }
            super.alterTileable(tileable);
        }

        restoreTileable(tileable) {
            if (tileable.metaWindow) {
                GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                    WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
                    return GLib.SOURCE_REMOVE;
                });
            }
        }

        showAppLauncher() {
            let actor = this.msWorkspace.appLauncher;
            actor.x = 0;
            actor.y = 0;
            actor.width = this.tileableContainer.allocation.get_width();
            actor.height = this.tileableContainer.allocation.get_height();
            super.showAppLauncher();
        }

        onFocusChanged(tileableFocused, oldTileable) {
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
                    tileable.height = this.tileableContainer.allocation.get_height();
                }
                if (tileable instanceof MsWindow) {
                    tileable.mimicMetaWindowPositionAndSize();
                }
            });
        }
    }
);

FloatLayout.state = { key: 'float' };
FloatLayout.label = 'Float';

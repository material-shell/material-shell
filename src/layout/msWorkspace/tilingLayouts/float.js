const { GLib } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const WindowUtils = Me.imports.src.utils.windows;
const { reparentActor } = Me.imports.src.utils.index;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;

/* exported FloatLayout */
var FloatLayout = class FloatLayout extends BaseTilingLayout {
    constructor(msWorkspace) {
        super(msWorkspace);
        /* msWorkspace.msWorkspaceActor.tileableContainer.hide();
        msWorkspace.msWorkspaceActor.floatableContainer.hide(); */
    }

    alterTileable(tileable) {
        if (tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                log('IDLE_ADD');
                WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
            });
        }
        reparentActor(
            tileable,
            this.msWorkspace.msWorkspaceActor.floatableContainer
        );
    }

    restoreTileable(tileable) {
        if (tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                log('IDLE_ADD');
                WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
            });
        }
        reparentActor(
            tileable,
            this.msWorkspace.msWorkspaceActor.tileableContainer
        );
    }

    alterFloatable(floatable) {
        this.alterTileable(floatable);
    }

    restoreFloatable(floatable) {
        this.restoreTileable(floatable);
    }

    onFocusChanged(tileableFocused) {
        this.msWorkspace.msWorkspaceActor.floatableContainer.set_child_above_sibling(
            tileableFocused,
            null
        );
    }

    onDestroy() {
        super.onDestroy();
        /* this.msWorkspace.msWorkspaceActor.tileableContainer.show();
        this.msWorkspace.msWorkspaceActor.floatableContainer.show(); */
    }
};

FloatLayout.key = 'float';

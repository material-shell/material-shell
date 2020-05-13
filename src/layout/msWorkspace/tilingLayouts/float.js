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
        msWorkspace.msWorkspaceActor.tileableContainer.hide(); */
    }

    alterTileable(tileable) {
        if (tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                log('IDLE_ADD');
                WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
                tileable.mimicMetaWindowPositionAndSize();
                return GLib.SOURCE_REMOVE;
            });
        }
    }

    restoreTileable(tileable) {
        if (tileable.metaWindow) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                log('IDLE_ADD');
                WindowUtils.updateTitleBarVisibility(tileable.metaWindow);
                return GLib.SOURCE_REMOVE;
            });
        }
    }

    onFocusChanged(tileableFocused) {
        this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(
            tileableFocused,
            null
        );
    }

    onDestroy() {
        super.onDestroy();
        /* this.msWorkspace.msWorkspaceActor.tileableContainer.show();
        this.msWorkspace.msWorkspaceActor.tileableContainer.show(); */
    }
};

FloatLayout.key = 'float';

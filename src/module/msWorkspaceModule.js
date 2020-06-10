const { Clutter, St, Meta, Shell, GLib } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MsWorkspaceManager } = Me.imports.src.manager.msWorkspaceManager;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

const { WINDOW_ANIMATION_TIME } = imports.ui.windowManager;

var WindowManager = imports.ui.windowManager;

/* exported MsWorkspaceModule */
var MsWorkspaceModule = class MsWorkspaceModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.enabled = false;

        this.topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
        //Main.layoutManager.panelBox.add_child(this.topBarSpacer);
        /* Main.layoutManager.addChrome(this.topBarSpacer, {
            affectsStruts: true,
            trackFullscreen: true,
        }); */

        this.legacyPanelGhost =
            Main.overview._panelGhost ||
            Main.overview._overview.get_child_at_index(0);
        this.legacyPanelGhostIndex = Main.overview._overview
            .get_children()
            .indexOf(this.legacyPanelGhost);

        this.myPanelGhost = new St.Bin({
            child: this.topBarSpacer,
            reactive: false,
            opacity: 0,
        });

        Main.overview._overview.remove_child(this.legacyPanelGhost);
        Main.overview._overview.insert_child_at_index(
            this.myPanelGhost,
            this.legacyPanelGhostIndex
        );
    }

    destroy() {
        this.topBarSpacer.destroy();

        Main.overview._overview.remove_child(this.myPanelGhost);
        Main.overview._overview.insert_child_at_index(
            this.legacyPanelGhost,
            this.legacyPanelGhostIndex
        );

        this.restoreWindowManagersFunctions();
    }
};

const { Clutter, GObject, St, Shell } = imports.gi;

const Main = imports.ui.main;
const Mainloop = imports.mainloop;

const Tweener = imports.ui.tweener;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const TopPanel = Me.imports.module.workspaceLayout.topPanelWidget.TopPanel;
const TaskBar = Me.imports.widget.taskBar.TaskBar;

/* exported WorkspaceLayoutModule */
var WorkspaceLayoutModule = class WorkspaceLayoutModule {
    constructor() {
        this.primaryMonitor = Main.layoutManager.primaryMonitor;

        this.workspacesWrapper = new WorkspacesWrapper(this.primaryMonitor.width - 48, this.primaryMonitor.height);
        this.workspacesWrapper.set_position(this.primaryMonitor.x + 48, this.primaryMonitor.y);

        this.topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
        this.topBarSpacer.height = 48;
        this.topBarSpacer.width = this.workspacesWrapper.width;
        /* Main.layoutManager._trackActor(this.topBarsContainer, {
            trackFullscreen: true
        }); */
        //this.topBarsContainer.add_child(this.topBarSpacer);
        this.legacyPanelGhost = Main.overview._panelGhost;
        this.legacyPanelGhostIndex = Main.overview._overview
            .get_children()
            .indexOf(this.legacyPanelGhost);

        this.myPanelGhost = new St.Bin({
            child: new Clutter.Clone({ source: this.topBarSpacer }),
            reactive: false,
            opacity: 0
        });

    }

    enable() {
        Main.layoutManager.panelBox.add_child(this.topBarSpacer);
        Main.layoutManager.panelBox.set_position(this.primaryMonitor.x + 48, this.primaryMonitor.y);
        Main.overview._overview.remove_child(this.legacyPanelGhost);
        Main.overview._overview.insert_child_at_index(
            this.myPanelGhost,
            this.legacyPanelGhostIndex
        );

        Main.layoutManager.uiGroup.add_actor(this.workspacesWrapper);
    }

    disable() {
        Main.layoutManager.panelBox.remove_child(this.topBarSpacer);
        Main.layoutManager.panelBox.set_position(this.primaryMonitor.x, this.primaryMonitor.y);
        Main.overview._overview.remove_child(this.myPanelGhost);
        Main.overview._overview.insert_child_at_index(
            this.legacyPanelGhost,
            this.legacyPanelGhostIndex
        );

        Main.layoutManager.uiGroup.remove_actor(this.workspacesWrapper);
    }
};

let WorkspacesWrapper = GObject.registerClass(
    class WorkspacesWrapper extends St.Widget {
        _init(workspaceWidth, workspaceHeight) {
            super._init({
                name: 'workspacesWrapper',
                clip_to_allocation: true,
                width: workspaceWidth,
                height: workspaceHeight
            });

            this.workspacesScroller = new WorkspacesScroller(workspaceWidth, workspaceHeight);
            this.add_child(this.workspacesScroller);
        }
    }
);

let WorkspacesScroller = GObject.registerClass(
    class WorkspacesScroller extends St.BoxLayout {
        _init(workspaceWidth, workspaceHeight) {
            super._init({
                name: 'workspacesScroller',
                vertical: true
            });
            let workspaceManager = global.workspace_manager;
            //this.translation_y = -workspaceHeight * workspaceManager.get_active_workspace_index();

            for (let w = 0; w < workspaceManager.n_workspaces; w++) {
                let workspaceWidget = new WorkspaceWidget(workspaceManager.get_workspace_by_index(w), workspaceWidth, workspaceHeight);
                this.add_child(workspaceWidget);
                workspaceWidget.y = workspaceHeight * (w - workspaceManager.get_active_workspace_index());
            }

            global.workspace_manager.connect('active-workspace-changed', () => {
                Tweener.addTween(this, {
                    translation_y:
                        -workspaceHeight * workspaceManager.get_active_workspace_index(),
                    time: 0.25,
                    transition: 'easeOutQuad'
                });
            });
        }
    }
);

let WorkspaceWidget = GObject.registerClass(
    class WorkspaceWidget extends St.Widget {
        _init(workspace, workspaceWidth, workspaceHeight) {
            super._init({
                name: 'WorkspaceWidget',
                clip_to_allocation: true,
                width: workspaceWidth,
                height: workspaceHeight
            });
            this.panelVisible = false;
            this.workspace = workspace;
            this.workspace.workspaceWidget = this;
            this.panel = new TopPanel(workspace);
            this.add_child(this.panel);
            /* Main.layoutManager._trackActor(this.panel, {
                trackFullscreen: true
            }); */
            global.display.connect('in-fullscreen-changed', this.togglePanel.bind(this));
            Main.overview.connect('showing', this.hidePanel.bind(this));
            Main.overview.connect('hiding', this.showPanel.bind(this));
        }

        togglePanel() {
            if (this.panelVisible) {
                this.hidePanel();
            } else {
                this.showPanel();
            }

        }

        hidePanel() {
            this.panelVisible = false;
            Tweener.addTween(this.panel, {
                translation_y: -this.panel.height,
                time: 0.25,
                transition: 'easeOutQuad'
            });
        }

        showPanel() {
            this.panelVisible = true;
            Tweener.addTween(this.panel, {
                translation_y: 0,
                time: 0.25,
                transition: 'easeOutQuad'
            });
        }
    }
);
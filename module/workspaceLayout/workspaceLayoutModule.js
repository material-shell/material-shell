const { Clutter, GObject, St, Meta } = imports.gi;

const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const Background = imports.ui.background;

const Tweener = imports.ui.tweener;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const TopPanel = Me.imports.module.workspaceLayout.topPanelWidget.TopPanel;
const TaskBar = Me.imports.widget.taskBar.TaskBar;

/* exported WorkspaceLayoutModule */
var WorkspaceLayoutModule = class WorkspaceLayoutModule {
    constructor() {
        Main.layoutManager.monitors.forEach((monitor) => {
            if (monitor.index === Main.layoutManager.primaryIndex) {
                monitor.workspacesWrapper = new WorkspacesWrapper(monitor.width - 48, monitor.height);
                monitor.workspacesWrapper.set_position(monitor.x + 48, monitor.y);

                monitor.background = new BackgroundScroller(monitor.width, monitor.height);
                monitor.background.set_position(monitor.x, monitor.y);
            } else {
                monitor.background = new Meta.BackgroundGroup({ reactive: true });
                monitor.backgroundManager = new Background.BackgroundManager({
                    container: monitor.background,
                    monitorIndex: monitor.index,
                    vignette: false
                });
                monitor.background.set_position(monitor.x, monitor.y);
            }
        });

        this.primaryMonitor = Main.layoutManager.primaryMonitor;

        this.topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
        this.topBarSpacer.height = 48;
        this.topBarSpacer.width = this.primaryMonitor.width - 48;
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
        global.window_group.get_child_at_index(0).hide();
        Main.layoutManager.monitors.forEach((monitor) => {
            if (monitor.workspacesWrapper) {
                Main.layoutManager.uiGroup.insert_child_below(monitor.workspacesWrapper, Main.layoutManager.overviewGroup);
            }
            Main.layoutManager.uiGroup.insert_child_below(monitor.background, global.window_group);
        });
    }

    disable() {
        Main.layoutManager.panelBox.remove_child(this.topBarSpacer);
        Main.layoutManager.panelBox.set_position(this.primaryMonitor.x, this.primaryMonitor.y);
        Main.overview._overview.remove_child(this.myPanelGhost);
        Main.overview._overview.insert_child_at_index(
            this.legacyPanelGhost,
            this.legacyPanelGhostIndex
        );
        Main.layoutManager.monitors.forEach((monitor) => {
            if (monitor.workspacesWrapper) {
                Main.layoutManager.uiGroup.remove_actor(monitor.workspacesWrapper);
            }
            Main.layoutManager.uiGroup.remove_actor(monitor.background);

        });
        global.window_group.get_child_at_index(0).show();
    }
};

let BackgroundScroller = GObject.registerClass(
    class BackgroundScroller extends St.Widget {
        _init(workspaceWidth, workspaceHeight) {
            super._init({
                name: 'backgroundScrollerContainer',
                clip_to_allocation: true,
                width: workspaceWidth,
                height: workspaceHeight
            });

            let workspaceManager = global.workspace_manager;

            this.backgroundContainer = new St.BoxLayout({
                name: 'backgroundScroller',
                vertical: true
            });

            //this.translation_y = -workspaceHeight * workspaceManager.get_active_workspace_index();

            this.currentWorkspaceIndex = workspaceManager.get_active_workspace_index();
            this._firstBackgroundGroup = new Meta.BackgroundGroup({ reactive: true });
            Main.bgManager = new Background.BackgroundManager({
                container: this._firstBackgroundGroup,
                monitorIndex: Main.layoutManager.primaryIndex,
                vignette: false
            });
            Main.bgManager.backgroundActor.set_position(false, false)

            this.backgroundContainer.add_child(this._firstBackgroundGroup);

            this._secondBackgroundGroup = new Meta.BackgroundGroup({ reactive: true });
            let bgManager2 = new Background.BackgroundManager({
                container: this._secondBackgroundGroup,
                monitorIndex: Main.layoutManager.primaryIndex,
                vignette: false
            });
            bgManager2.backgroundActor.set_position(false, false)
            this.backgroundContainer.add_child(this._secondBackgroundGroup);

            this.add_child(this.backgroundContainer);
            global.workspace_manager.connect('active-workspace-changed', () => {
                let newIndex = workspaceManager.get_active_workspace_index();
                if (this.currentWorkspaceIndex < newIndex) {
                    this.backgroundContainer.translation_y = 0;
                    Tweener.addTween(this.backgroundContainer, {
                        translation_y: -workspaceHeight,
                        time: 0.25,
                        transition: 'easeOutQuad'
                    });
                } else {
                    this.backgroundContainer.translation_y = -workspaceHeight;
                    Tweener.addTween(this.backgroundContainer, {
                        translation_y: 0,
                        time: 0.25,
                        transition: 'easeOutQuad'
                    });
                }
                this.currentWorkspaceIndex = newIndex;
            });
        }
    }
);

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
            //this.set_style('background:blue');

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

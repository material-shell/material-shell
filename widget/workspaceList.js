const St = imports.gi.St;
const GObject = imports.gi.GObject;
const ExtensionUtils = imports.misc.extensionUtils;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const Me = ExtensionUtils.getCurrentExtension();
const RippleContainer = Me.imports.material.rippleContainer.RippleContainer;

/* exported WorkspaceList */
var WorkspaceList = GObject.registerClass(
    class WorkspaceList extends St.Widget {
        _init() {
            super._init({
                clip_to_allocation: true
            });

            this.buttonList = new St.BoxLayout({
                vertical: true
            });

            this.add_child(this.buttonList);

            this.workspaceActiveIndicator = new St.Widget({
                style_class: 'workspace-active-indicator'
            });

            this.workspaceActiveIndicator.set_background_color(
                Main.panel.statusArea.aggregateMenu._volume._volumeMenu._output._slider.actor
                    .get_theme_node()
                    .get_color('-barlevel-active-background-color')
            );

            this.add_child(this.workspaceActiveIndicator);

            let workspaceManager = global.workspace_manager;

            for (let i = 0; i <= workspaceManager.n_workspaces - 1; i++) {
                let workspace = workspaceManager.get_workspace_by_index(i);
                let icon = new St.Icon({
                    gicon: workspace.workspaceEnhancer.category.icon,
                    style_class: 'workspace-icon'
                });

                let workspaceButton = new St.Bin({
                    child: icon,
                    style_class: 'workspace-button',
                    reactive: true,
                    can_focus: true,
                    track_hover: true
                });
                workspaceButton.workspace = workspaceManager.get_workspace_by_index(
                    i
                );
                workspaceButton.connect('button-press-event', () => {
                    workspaceButton.workspace.activate(
                        global.get_current_time()
                    );
                });
                let rippleContainer = new RippleContainer(workspaceButton);
                this.buttonList.add_child(rippleContainer);
            }

            global.workspace_manager.connect('active-workspace-changed', () => {
                this.activeButtonForIndex(
                    workspaceManager.get_active_workspace_index()
                );
            });

            this.activeButtonForIndex(
                workspaceManager.get_active_workspace_index()
            );
        }

        activeButtonForIndex(workspaceIndex) {
            let workspace = global.workspace_manager.get_workspace_by_index(
                workspaceIndex
            );

            if (this.buttonActive) {
                if (
                    this.buttonActive.contentActor.has_style_class_name(
                        'active'
                    )
                ) {
                    this.buttonActive.contentActor.remove_style_class_name(
                        'active'
                    );
                }
            }
            this.buttonActive = this.getWorkspaceButtonFromWorkspace(workspace);
            this.buttonActive.contentActor.add_style_class_name('active');
            Tweener.addTween(this.workspaceActiveIndicator, {
                translation_y: 48*2 * workspaceIndex,
                time: 0.25,
                transition: 'easeOutQuad'
            });
        }

        getWorkspaceButtonFromWorkspace(workspace) {
            return this.buttonList.get_children().find(rippleContainer => {
                return rippleContainer.contentActor.workspace === workspace;
            });
        }
    }
);

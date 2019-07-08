const St = imports.gi.St;
const GObject = imports.gi.GObject;
const ExtensionUtils = imports.misc.extensionUtils;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;
const Me = ExtensionUtils.getCurrentExtension();
const { RippleContainer } = Me.imports.widget.material.rippleContainer;

/* exported WorkspaceList */
var WorkspaceList = GObject.registerClass(
    class WorkspaceList extends St.Widget {
        _init(superWorkspaceManager) {
            super._init({
                clip_to_allocation: true
            });

            this.superWorkspaceManager = superWorkspaceManager;

            this.buttonList = new St.BoxLayout({
                vertical: true
            });

            this.add_child(this.buttonList);

            this.workspaceActiveIndicator = new St.Widget({
                style_class: 'workspace-active-indicator'
            });

            this.workspaceActiveIndicator.add_style_class_name('primary-bg');

            this.add_child(this.workspaceActiveIndicator);

            let workspaceManager = global.workspace_manager;

            for (let superWorkspace of this.superWorkspaceManager
                .superWorkspaces) {
                if (!superWorkspace.category.primary) continue;
                let icon = new St.Icon({
                    gicon: superWorkspace.category.icon,
                    style_class: 'workspace-icon'
                });

                let workspaceButton = new St.Bin({
                    child: icon,
                    style_class: 'workspace-button',
                    reactive: true,
                    can_focus: true,
                    track_hover: true
                });

                workspaceButton.superWorkspace = superWorkspace;
                workspaceButton.connect('button-press-event', () => {
                    this.superWorkspaceManager
                        .getWorkspaceOfSuperWorkspace(
                            workspaceButton.superWorkspace
                        )
                        .activate(global.get_current_time());
                });

                let rippleContainer = new RippleContainer(workspaceButton);
                this.buttonList.add_child(rippleContainer);
            }

            this.workspaceSignal = global.workspace_manager.connect(
                'active-workspace-changed',
                () => {
                    this.activeButtonForIndex(
                        workspaceManager.get_active_workspace_index()
                    );
                }
            );

            this.activeButtonForIndex(
                workspaceManager.get_active_workspace_index()
            );
        }

        activeButtonForIndex(workspaceIndex) {
            let superWorkspace = this.superWorkspaceManager.getPrimarySuperWorkspaceByIndex(
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
            this.buttonActive = this.getWorkspaceButtonFromWorkspace(
                superWorkspace
            );
            this.buttonActive.contentActor.add_style_class_name('active');
            let scaleFactor = St.ThemeContext.get_for_stage(global.stage)
                .scale_factor;
            Tweener.addTween(this.workspaceActiveIndicator, {
                translation_y: 48 * scaleFactor * workspaceIndex,
                time: 0.25,
                transition: 'easeOutQuad'
            });
        }

        getWorkspaceButtonFromWorkspace(superWorkspace) {
            return this.buttonList.get_children().find(rippleContainer => {
                return (
                    rippleContainer.contentActor.superWorkspace ===
                    superWorkspace
                );
            });
        }

        on_destroy() {
            global.workspace_manager.disconnect(this.workspaceSignal);
        }
    }
);

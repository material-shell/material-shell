const St = imports.gi.St;
const GObject = imports.gi.GObject;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Tweener = imports.ui.tweener;

const RippleContainer = Me.imports.material.rippleContainer.RippleContainer;

/* exported WorkspaceList */
var WorkspaceList = GObject.registerClass(
    class WorkspaceList extends St.Widget {
        _init() {
            super._init({
                clip_to_allocation: true
            });

            this._workspaceConfigurationList = [
                {
                    icon: 'applications-internet'
                },
                {
                    icon: 'applications-development'
                },
                {
                    icon: 'user-available'
                },
                {
                    icon: 'system-file-manager'
                },
                {
                    icon: 'applications-multimedia'
                },
                {
                    icon: 'applications-games'
                },
                {
                    icon: 'applications-other'
                }
            ];

            this.buttonList = new St.BoxLayout({
                vertical: true
            });

            this.add_child(this.buttonList);

            this.workspaceActiveIndicator = new St.Widget({
                style_class: 'workspace-active-indicator'
            });

            this.add_child(this.workspaceActiveIndicator);

            global.workspace_manager.connect('active-workspace-changed', () => {
                Tweener.addTween(this.workspaceActiveIndicator, {
                    translation_y:
                        48 * workspaceManager.get_active_workspace_index(),
                    time: 0.25,
                    transition: 'easeOutQuad'
                });
            });

            let workspaceManager = global.workspace_manager;

            for (let i = 0; i <= workspaceManager.n_workspaces - 1; i++) {
                let workspaceConfiguration = this._workspaceConfigurationList[
                    i
                ];
                let icon = new St.Icon({
                    icon_name: workspaceConfiguration.icon,
                    style_class: 'workspace-icon'
                });

                let workspaceButton = new St.Bin({
                    child: icon,
                    style_class: 'workspace-button',
                    reactive: true,
                    can_focus: true,
                    track_hover: true
                });
                workspaceButton.connect('button-press-event', () => {
                    workspaceManager.get_workspace_by_index(i).activate(0);
                });
                let rippleContainer = new RippleContainer(workspaceButton);
                this.buttonList.add_child(rippleContainer);
            }

        }
    }
);

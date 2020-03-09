const { Shell, Meta, St, GLib, GObject } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { WorkspaceCategories } = Me.imports.msWorkspace.workspaceCategories;
const { MsWorkspace } = Me.imports.msWorkspace.msWorkspace;
const {
    MsWorkspaceWithCategory
} = Me.imports.msWorkspace.msWorkspaceWithCategory;
const { WorkspaceList } = Me.imports.widget.workspaceList;
const { MsWindow } = Me.imports.msWorkspace.msWindow;
const { TranslationAnimator } = Me.imports.widget.translationAnimator;

/* exported MsWorkspaceContainer */
var MsWorkspaceContainer = GObject.registerClass(
    {
        GTypeName: 'MsWorkspaceContainer'
    },
    class MsWorkspaceContainer extends St.Widget {
        _init(msWorkspaceManager) {
            super._init();
            log('new MsWorkspaceContainer');
            this.msWorkspaceManager = msWorkspaceManager;
            this.translationAnimator = new TranslationAnimator(true);
            this.set_style('background:rgba(255,255,0,0.5)');
            this.registerToSignals();
        }

        updateMsWorkspaceViewPosition() {
            this.msWorkspaceManager.msWorkspaces.forEach(msWorkspace => {
                msWorkspace.actor.reparent(this);
            });
        }

        registerToSignals() {
            this.signals = [];
            this.signals.push({
                from: this.msWorkspaceManager,
                id: this.msWorkspaceManager.connect(
                    'dynamic-super-workspaces-changed',
                    () => {
                        this.updateMsWorkspaceViewPosition();
                    }
                )
            });

            this.signals.push({
                from: global.window_manager,
                id: global.window_manager.connect(
                    'switch-workspace',
                    (window_manager, from, to) => {
                        const direction = to > from ? 1 : -1;
                        log('switch', from, to, direction);
                        let oldActor = this.msWorkspaceManager
                            .primaryMsWorkspaces[from].actor;
                        let newActor = this.msWorkspaceManager
                            .primaryMsWorkspaces[to].actor;
                        this.translationAnimator.set_position(
                            Main.layoutManager.primaryMonitor.x,
                            Main.layoutManager.primaryMonitor.y
                        );
                        this.translationAnimator.set_size(
                            Main.layoutManager.primaryMonitor.width,
                            Main.layoutManager.primaryMonitor.height
                        );
                        if (!this.translationAnimator.get_parent()) {
                            this.add_child(this.translationAnimator);
                        }
                        this.translationAnimator.setTranslation(
                            oldActor,
                            newActor,
                            direction
                        );
                    }
                )
            });

            this.signals.push({
                from: this.translationAnimator,
                id: this.translationAnimator.connect(
                    'transition-completed',
                    () => {
                        this.remove_child(this.translationAnimator);
                        const activeMsWorkspace = this.msWorkspaceManager.getActiveMsWorkspace();
                        this.msWorkspaceManager.msWorkspaces.forEach(
                            msWorkspace => {
                                msWorkspace.actor.visible =
                                    msWorkspace === activeMsWorkspace;
                            }
                        );
                    }
                )
            });
        }

        _onDestroy() {
            this.signals.forEach(signal => signal.from.disconnect(signal.id));
        }
    }
);

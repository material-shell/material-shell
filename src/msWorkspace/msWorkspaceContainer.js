const { Shell, Meta, St, GLib, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { WorkspaceCategories } = Me.imports.src.msWorkspace.workspaceCategories;
const { MsWorkspace } = Me.imports.src.msWorkspace.msWorkspace;
const {
    MsWorkspaceWithCategory
} = Me.imports.src.msWorkspace.msWorkspaceWithCategory;
const { WorkspaceList } = Me.imports.src.widget.workspaceList;
const { MsWindow } = Me.imports.src.msWorkspace.msWindow;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;

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
            this.aboveContainer = new Clutter.Actor();
            this.add_child(this.aboveContainer);
            this.set_style('background:rgba(255,255,0,0.5)');
            this.registerToSignals();
            this.updateMsWorkspaceViewPosition();
        }

        updateMsWorkspaceViewPosition() {
            this.msWorkspaceManager.msWorkspaceList.forEach(msWorkspace => {
                const currentParent = msWorkspace.actor.get_parent();
                if (currentParent) {
                    currentParent.remove_child(msWorkspace.actor);
                }
                this.add_child(msWorkspace.actor);
            });
            this.set_child_above_sibling(this.aboveContainer, null);
        }

        setActorAbove(actor) {
            log('setActorAbove', actor);
            if (actor.get_parent()) {
                actor.get_parent().remove_child(actor);
            }
            this.aboveContainer.add_child(actor);
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
                            this.insert_child_below(
                                this.translationAnimator,
                                this.aboveContainer
                            );
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
                        this.msWorkspaceManager.msWorkspaceList.forEach(
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

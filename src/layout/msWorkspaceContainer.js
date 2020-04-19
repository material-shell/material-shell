const { Shell, Meta, St, GLib, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { AddLogToFunctions } = Me.imports.src.utils.debug;
const { reparentActor } = Me.imports.src.utils.index;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const Tweener = imports.ui.tweener;

/* exported MsWorkspaceContainer */
var MsWorkspaceContainer = GObject.registerClass(
    {
        GTypeName: 'MsWorkspaceContainer',
    },
    class MsWorkspaceContainer extends St.Widget {
        _init() {
            super._init();
            this.connect('destroy', this._onDestroy.bind(this));
            this.msWorkspaceManager = Me.msWorkspaceManager;
            //this.translationAnimator = new TranslationAnimator(true);
            this.aboveContainer = new Clutter.Actor();
            this.add_child(this.aboveContainer);
            this.monitorsContainer = [];
            for (let monitor of Main.layoutManager.monitors) {
                this.monitorsContainer[monitor.index] = new Clutter.Actor();
                this.monitorsContainer[monitor.index].set_size(
                    monitor.width,
                    monitor.height
                );
                this.monitorsContainer[monitor.index].set_position(
                    monitor.x,
                    monitor.y
                );
                this.monitorsContainer[monitor.index].set_clip_to_allocation(
                    true
                );
                this.add_child(this.monitorsContainer[monitor.index]);
            }
            this.primaryContainer = new St.Widget();
            this.monitorsContainer[Main.layoutManager.primaryIndex].add_child(
                this.primaryContainer
            );
            this.set_style('background:rgba(255,255,0,0.5)');
            this.registerToSignals();
            this.updateMsWorkspaceViewPosition();
            this.onMsWorkspacesChanged();
            AddLogToFunctions(this);
        }

        updateMsWorkspaceViewPosition() {
            this.msWorkspaceManager.primaryMsWorkspaces.forEach(
                (msWorkspace, index) => {
                    msWorkspace.msWorkspaceActor.translation_y =
                        index * Main.layoutManager.primaryMonitor.height;
                }
            );
            this.primaryContainer.translation_y =
                -1 *
                global.workspace_manager.get_active_workspace_index() *
                Main.layoutManager.primaryMonitor.height;
        }

        setActorAbove(actor) {
            reparentActor(actor, this.aboveContainer);
        }

        add_child(actor) {
            super.add_child(actor);
            this.set_child_above_sibling(this.aboveContainer, null);
        }

        onMsWorkspacesChanged() {
            this.msWorkspaceManager.msWorkspaceList.forEach((msWorkspace) => {
                if (
                    this.msWorkspaceManager.primaryMsWorkspaces.includes(
                        msWorkspace
                    ) &&
                    msWorkspace.msWorkspaceActor.get_parent() !==
                        this.primaryContainer
                ) {
                    this.primaryContainer.add_child(
                        msWorkspace.msWorkspaceActor
                    );
                } else if (msWorkspace.msWorkspaceActor.get_parent() !== this) {
                    this.add_child(msWorkspace.msWorkspaceActor);
                }
            });
            this.updateMsWorkspaceViewPosition();
        }

        onSwitchWorkspace(from, to) {
            for (let i = Math.min(from, to); i <= Math.max(from, to); i++) {
                this.msWorkspaceManager.primaryMsWorkspaces[
                    i
                ].msWorkspaceActor.show();
            }

            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(this.primaryContainer, {
                    translation_y:
                        -1 * to * Main.layoutManager.primaryMonitor.height,
                    time: 0.25,
                    transition: 'easeOutQuad',
                    onComplete: () => {
                        this.onTransitionCompleted();
                    },
                });
            } else {
                this.primaryContainer.ease({
                    translation_y:
                        -1 * to * Main.layoutManager.primaryMonitor.height,
                    duration: 250,
                    mode: Clutter.AnimationMode.EASE_OUT_CUBIC,
                    onComplete: () => {
                        this.onTransitionCompleted();
                    },
                });
            }
        }

        onTransitionCompleted() {
            /*             this.remove_child(this.translationAnimator);
             */ const activeMsWorkspace = this.msWorkspaceManager.getActiveMsWorkspace();
            activeMsWorkspace.refreshFocus();
            this.msWorkspaceManager.msWorkspaceList.forEach((msWorkspace) => {
                msWorkspace.msWorkspaceActor.visible =
                    msWorkspace.monitor != Main.layoutManager.primaryMonitor ||
                    msWorkspace === activeMsWorkspace;
            });
        }
        registerToSignals() {
            this.signals = [];

            this.signals.push({
                from: this.msWorkspaceManager,
                id: this.msWorkspaceManager.connect(
                    'switch-workspace',
                    (_, from, to) => {
                        this.onSwitchWorkspace(from, to);
                    }
                ),
            });

            /* this.signals.push({
                from: this.translationAnimator,
                id: this.translationAnimator.connect(
                    'transition-completed',
                    () => {
                        this.onTransitionCompleted();
                    }
                ),
            }); */

            this.signals.push({
                from: this.msWorkspaceManager,
                id: this.msWorkspaceManager.connect(
                    'dynamic-super-workspaces-changed',
                    () => {
                        this.onMsWorkspacesChanged();
                    }
                ),
            });
        }

        _onDestroy() {
            log('msWorkspaceManager to its own destroy');

            this.aboveContainer.get_children().forEach((actor) => {
                this.aboveContainer.remove_child(actor);
                global.window_group.add_child(actor);
            });
            this.signals.forEach((signal) => signal.from.disconnect(signal.id));
        }
    }
);

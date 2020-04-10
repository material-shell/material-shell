const { Shell, Meta, St, GLib, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { AddLogToFunctions } = Me.imports.src.utils.debug;
const { reparentActor } = Me.imports.src.utils.index;

/* exported MsWorkspaceContainer */
var MsWorkspaceContainer = GObject.registerClass(
    {
        GTypeName: 'MsWorkspaceContainer',
    },
    class MsWorkspaceContainer extends St.Widget {
        _init(msWorkspaceManager) {
            super._init();
            this.connect('destroy', this._onDestroy.bind(this));
            this.msWorkspaceManager = msWorkspaceManager;
            this.translationAnimator = new TranslationAnimator(true);
            this.aboveContainer = new Clutter.Actor();
            this.add_child(this.aboveContainer);
            this.set_style('background:rgba(255,255,0,0.5)');
            this.registerToSignals();
            this.updateMsWorkspaceViewPosition();
            AddLogToFunctions(this);
        }

        updateMsWorkspaceViewPosition() {
            this.msWorkspaceManager.msWorkspaceList.forEach((msWorkspace) => {
                const currentParent = msWorkspace.msWorkspaceActor.get_parent();
                if (currentParent) {
                    currentParent.remove_child(msWorkspace.msWorkspaceActor);
                }
                this.add_child(msWorkspace.msWorkspaceActor);
            });
        }

        setActorAbove(actor) {
            reparentActor(actor, this.aboveContainer);
        }

        add_child(actor) {
            super.add_child(actor);
            this.set_child_above_sibling(this.aboveContainer, null);
        }

        onSwitchWorkspace(window_manager, from, to) {
            const direction = to > from ? 1 : -1;
            let oldActor = this.msWorkspaceManager.primaryMsWorkspaces[from]
                .msWorkspaceActor;
            let newActor = this.msWorkspaceManager.primaryMsWorkspaces[to]
                .msWorkspaceActor;
            oldActor.show();
            newActor.show();
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

        onTransitionCompleted() {
            this.remove_child(this.translationAnimator);
            const activeMsWorkspace = this.msWorkspaceManager.getActiveMsWorkspace();
            this.msWorkspaceManager.msWorkspaceList.forEach((msWorkspace) => {
                msWorkspace.msWorkspaceActor.visible =
                    msWorkspace === activeMsWorkspace;
            });
        }
        registerToSignals() {
            this.signals = [];

            this.signals.push({
                from: global.window_manager,
                id: global.window_manager.connect(
                    'switch-workspace',
                    (window_manager, from, to) => {
                        this.onSwitchWorkspace(window_manager, from, to);
                    }
                ),
            });

            this.signals.push({
                from: this.translationAnimator,
                id: this.translationAnimator.connect(
                    'transition-completed',
                    () => {
                        this.onTransitionCompleted();
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

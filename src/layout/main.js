const Me = imports.misc.extensionUtils.getCurrentExtension();

const { Shell, Meta, St, GLib, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const { MsPanel } = Me.imports.src.layout.panel.panel;
const { reparentActor } = Me.imports.src.utils.index;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { TranslationAnimator } = Me.imports.src.widget.translationAnimator;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;
const Background = imports.ui.background;

/* exported MsMain */
var MsMain = GObject.registerClass(
    {
        GTypeName: 'MsMain',
    },
    class MsMain extends St.Widget {
        _init() {
            super._init({});
            Me.layout = this;
            this.panelsVisible = Me.stateManager.getState('panels-visible');
            this.panelsVisible =
                this.panelsVisible === undefined ? true : this.panelsVisible;

            Main.uiGroup.insert_child_above(this, global.window_group);
            this.monitorsContainer = [];
            this.monitorPanelSpacerList = [];
            this.aboveContainer = new Clutter.Actor();
            this.add_child(this.aboveContainer);
            this.backgroundGroup = new Meta.BackgroundGroup({});
            this.setBlurBackground(Me.msThemeManager.blurBackground);
            Me.msThemeManager.connect('blur-background-changed', () => {
                this.setBlurBackground(Me.msThemeManager.blurBackground);
            });
            this.add_child(this.backgroundGroup);
            this.buildMonitorsLayout();
            this.primaryMonitorContainer.setMsWorkspaceActor(
                Me.msWorkspaceManager.getActiveMsWorkspace().msWorkspaceActor
            );

            this.panel = this.monitorsContainer[
                Main.layoutManager.primaryIndex
            ].panel;
            this.registerToSignals();
            this.onMsWorkspacesChanged();
            this.updatePanelVisibilities();
        }

        setBlurBackground(blur) {
            const themeContext = St.ThemeContext.get_for_stage(global.stage);
            if ((this.blurEffect && blur) || (!this.blurEffect && !blur)) {
                return;
            } else if (this.blurEffect && !blur) {
                themeContext.disconnect(this._scaleChangedId);
                this.backgroundGroup.remove_effect(this.blurEffect);
                delete this.blurEffect;
                return;
            }

            this.blurEffect = new Shell.BlurEffect({
                brightness: 0.55,
                sigma: 60 * themeContext.scale_factor,
            });

            this._scaleChangedId = themeContext.connect(
                'notify::scale-factor',
                () => {
                    this.blurEffect.sigma = 60 * themeContext.scale_factor;
                }
            );

            this.backgroundGroup.add_effect(this.blurEffect);
        }

        buildMonitorsLayout() {
            for (let monitor of Main.layoutManager.monitors) {
                let topBarSpacer = new St.Widget({
                    x: monitor.x,
                    y: monitor.y,
                    width: monitor.width,
                    height: Me.msThemeManager.getPanelSize(monitor.index),
                });
                Me.msThemeManager.connect('panel-size-changed', () => {
                    topBarSpacer.set_height(
                        Me.msThemeManager.getPanelSize(monitor.index)
                    );
                });
                this.add_child(topBarSpacer);

                this.monitorPanelSpacerList.push(topBarSpacer);
                let bgManager = new Background.BackgroundManager({
                    container: this.backgroundGroup,
                    monitorIndex: monitor.index,
                });

                if (monitor === Main.layoutManager.primaryMonitor) {
                    this.monitorsContainer[
                        monitor.index
                    ] = new PrimaryMonitorContainer(
                        {
                            clip_to_allocation: true,
                        },
                        bgManager
                    );
                } else {
                    this.monitorsContainer[
                        monitor.index
                    ] = new MonitorContainer(
                        {
                            clip_to_allocation: true,
                        },
                        bgManager
                    );
                }

                this.monitorsContainer[monitor.index].set_size(
                    monitor.width,
                    monitor.height
                );
                this.monitorsContainer[monitor.index].set_position(
                    monitor.x,
                    monitor.y
                );
                this.add_child(this.monitorsContainer[monitor.index]);
            }
        }

        registerToSignals() {
            this.signals = [];

            this.signals.push({
                from: Me.msWorkspaceManager,
                id: Me.msWorkspaceManager.connect(
                    'switch-workspace',
                    (_, from, to) => {
                        this.onSwitchWorkspace(from, to);
                    }
                ),
            });

            this.signals.push({
                from: Me.msWorkspaceManager,
                id: Me.msWorkspaceManager.connect(
                    'dynamic-super-workspaces-changed',
                    () => {
                        this.onMsWorkspacesChanged();
                    }
                ),
            });

            this.signals.push({
                from: Me,
                id: Me.connect('extension-disable', () => {
                    this.aboveContainer.get_children().forEach((actor) => {
                        this.aboveContainer.remove_child(actor);
                        global.window_group.add_child(actor);
                    });
                    this.signals.forEach((signal) => {
                        signal.from.disconnect(signal.id);
                    });
                    this.monitorPanelSpacerList.forEach((actor) => {
                        actor.destroy();
                    });
                }),
            });

            this.signals.push({
                from: global.display,
                id: global.display.connect('in-fullscreen-changed', () => {
                    for (let monitor of Main.layoutManager.monitors) {
                        const monitorInFullScreen = global.display.get_monitor_in_fullscreen(
                            monitor.index
                        );
                        this.monitorsContainer[monitor.index].setFullscreen(
                            monitorInFullScreen
                        );
                    }
                }),
            });
        }

        onMsWorkspacesChanged() {
            this.monitorsContainer.forEach((container, index) => {
                if (index === Main.layoutManager.primaryIndex) {
                    container.setMsWorkspaceActor(
                        Me.msWorkspaceManager.getActiveMsWorkspace()
                            .msWorkspaceActor
                    );
                } else {
                    container.setMsWorkspaceActor(
                        Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                            index
                        )[0].msWorkspaceActor
                    );
                }
            });
        }

        get primaryMonitorContainer() {
            return this.monitorsContainer[Main.layoutManager.primaryIndex];
        }
        onSwitchWorkspace(from, to) {
            this.onMsWorkspacesChanged();
        }

        onTransitionCompleted() {
            /*             this.remove_child(this.translationAnimator);
             */
            this.onMsWorkspacesChanged();
            const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
            activeMsWorkspace.refreshFocus();
        }

        togglePanelsVisibilities() {
            this.panelsVisible = !this.panelsVisible;
            Me.stateManager.setState('panels-visible', this.panelsVisible);
            this.updatePanelVisibilities();
        }

        updatePanelVisibilities() {
            [
                this.primaryMonitorContainer.panel,
                ...this.monitorPanelSpacerList,
            ].forEach((actor) => {
                actor.visible = this.panelsVisible;
                if (this.panelsVisible) {
                    Main.layoutManager._trackActor(actor, {
                        affectsStruts: true,
                    });
                } else {
                    Main.layoutManager._untrackActor(actor);
                }
            });
            Me.msWorkspaceManager.refreshMsWorkspaceUI();
        }

        add_child(actor) {
            super.add_child(actor);
            this.set_child_above_sibling(this.aboveContainer, null);
        }

        setActorAbove(actor) {
            reparentActor(actor, this.aboveContainer);
        }
        vfunc_get_preferred_width(_forHeight) {
            let width = global.stage.width;
            return [width, width];
        }

        vfunc_get_preferred_height(_forWidth) {
            let height = global.stage.height;
            return [height, height];
        }
    }
);

/* exported MonitorContainer */
var MonitorContainer = GObject.registerClass(
    {
        GTypeName: 'MonitorContainer',
    },
    class MonitorContainer extends St.Widget {
        _init(params, bgManager) {
            super._init(params);
            this.bgManager = bgManager;
        }

        setFullscreen(monitorIsFullscreen) {
            this.bgManager.backgroundActor.visible = !monitorIsFullscreen;
            if (this.msWorkspaceActor) {
                this.msWorkspaceActor.updateUI();
            }
        }

        setMsWorkspaceActor(actor) {
            if (actor === this.msWorkspaceActor) return;
            if (this.msWorkspaceActor) {
                this.remove_child(this.msWorkspaceActor);
            }
            this.msWorkspaceActor = actor;
            this.add_child(this.msWorkspaceActor);
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            if (this.msWorkspaceActor) {
                let msWorkspaceActorBox = new Clutter.ActorBox();
                msWorkspaceActorBox.x1 = box.x1;
                msWorkspaceActorBox.x2 = box.x2;
                msWorkspaceActorBox.y1 = box.y1;
                msWorkspaceActorBox.y2 = box.y2;
                this.msWorkspaceActor.allocate(msWorkspaceActorBox, flags);
            }
        }
    }
);

/* exported PrimaryMonitorContainer */
var PrimaryMonitorContainer = GObject.registerClass(
    {
        GTypeName: 'PrimaryMonitorContainer',
    },
    class PrimaryMonitorContainer extends MonitorContainer {
        _init(params, bgManager) {
            super._init(params, bgManager);
            this.panel = new MsPanel();
            this.add_child(this.panel);
            this.translationAnimator = new TranslationAnimator(true);
            this.translationAnimator.connect('transition-completed', () => {
                this.remove_child(this.translationAnimator);
                this.add_child(this.msWorkspaceActor);
                if (this.panel) {
                    this.set_child_below_sibling(
                        this.msWorkspaceActor,
                        this.panel
                    );
                }
                this.msWorkspaceActor.msWorkspace.refreshFocus();
            });
        }

        setFullscreen(monitorIsFullscreen) {
            this.panel.visible =
                Me.layout.panelsVisible && !monitorIsFullscreen;
            super.setFullscreen(monitorIsFullscreen);
        }

        setTranslation(prevActor, nextActor) {
            if (!this.translationAnimator.get_parent()) {
                this.translationAnimator.width = this.width;
                this.translationAnimator.height =
                    Main.layoutManager.primaryMonitor.height;
                this.add_child(this.translationAnimator);
                if (this.panel) {
                    this.set_child_below_sibling(
                        this.translationAnimator,
                        this.panel
                    );
                }
            }
            let indexOfPrevActor = Me.msWorkspaceManager.primaryMsWorkspaces.findIndex(
                (msWorkspace) => {
                    return msWorkspace.msWorkspaceActor === prevActor;
                }
            );
            let indexOfNextActor = Me.msWorkspaceManager.primaryMsWorkspaces.findIndex(
                (msWorkspace) => {
                    return msWorkspace.msWorkspaceActor === nextActor;
                }
            );
            prevActor.height = nextActor.height = this.height;
            this.translationAnimator.setTranslation(
                [prevActor],
                [nextActor],
                indexOfNextActor > indexOfPrevActor ? 1 : -1
            );
        }

        setMsWorkspaceActor(actor) {
            if (actor === this.msWorkspaceActor) return;
            let prevActor;
            if (this.msWorkspaceActor) {
                prevActor = this.msWorkspaceActor;
                if (this.msWorkspaceActor.get_parent() === this)
                    this.remove_child(this.msWorkspaceActor);
            }
            this.msWorkspaceActor = actor;
            if (prevActor) {
                this.setTranslation(prevActor, this.msWorkspaceActor);
            } else {
                this.add_child(this.msWorkspaceActor);
                if (this.panel) {
                    this.set_child_below_sibling(
                        this.msWorkspaceActor,
                        this.panel
                    );
                }
            }
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            let panelBox = new Clutter.ActorBox();
            if (this.panel) {
                panelBox.x1 = box.x1;
                panelBox.x2 = this.panel.get_preferred_width(-1)[1];
                panelBox.y1 = box.y1;
                panelBox.y2 = this.panel.get_preferred_height(-1)[1];
                this.panel.allocate(panelBox, flags);
            }

            let msWorkspaceActorBox = new Clutter.ActorBox();
            msWorkspaceActorBox.x1 =
                this.panel && this.panel.visible ? panelBox.x2 : box.x1;
            msWorkspaceActorBox.x2 = box.x2;
            msWorkspaceActorBox.y1 = box.y1;
            msWorkspaceActorBox.y2 = box.y2;
            this.get_children().forEach((child) => {
                if (child === this.panel) return;
                child.allocate(msWorkspaceActorBox, flags);
            });
        }
    }
);

const Me = imports.misc.extensionUtils.getCurrentExtension();

const { Shell, Meta, St, GLib, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const { MsPanel } = Me.imports.src.layout.panel.panel;
const { reparentActor } = Me.imports.src.utils.index;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const Tweener = imports.ui.tweener;
/* exported MsMain */
var MsMain = GObject.registerClass(
    {
        GTypeName: 'MsMain',
    },
    class MsMain extends St.Widget {
        _init() {
            super._init({});
            this.set_style('background: rgba(255,0,255,0.2)');
            Main.uiGroup.insert_child_above(this, global.window_group);
            this.monitorsContainer = [];
            this.monitorPanelSpacerList = [];
            this.aboveContainer = new Clutter.Actor();
            this.add_child(this.aboveContainer);
            this.buildMonitorsLayout();

            this.primaryContainer = new PrimaryContainer();
            this.monitorsContainer[
                Main.layoutManager.primaryIndex
            ].setPrimaryContainer(this.primaryContainer);
            this.panel = new MsPanel();
            this.monitorsContainer[Main.layoutManager.primaryIndex].setPanel(
                this.panel
            );
            this.registerToSignals();
            this.onMsWorkspacesChanged();
        }

        buildMonitorsLayout() {
            for (let monitor of Main.layoutManager.monitors) {
                let topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
                topBarSpacer.set_position(monitor.x, monitor.y);
                topBarSpacer.set_width(monitor.width);
                Main.layoutManager.addChrome(topBarSpacer, {
                    affectsStruts: true,
                    trackFullscreen: true,
                });
                Main.layoutManager.uiGroup.set_child_below_sibling(
                    topBarSpacer,
                    this
                );
                this.monitorPanelSpacerList.push(topBarSpacer);
                if (monitor === Main.layoutManager.primaryMonitor) {
                    this.monitorsContainer[
                        monitor.index
                    ] = new PrimaryMonitorContainer({
                        clip_to_allocation: true,
                    });
                } else {
                    this.monitorsContainer[monitor.index] = new St.Bin({
                        clip_to_allocation: true,
                        x_fill: true,
                        y_fill: true,
                    });
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
        }

        onMsWorkspacesChanged() {
            Me.msWorkspaceManager.msWorkspaceList.forEach((msWorkspace) => {
                if (
                    Me.msWorkspaceManager.primaryMsWorkspaces.includes(
                        msWorkspace
                    )
                ) {
                    if (
                        msWorkspace.msWorkspaceActor.get_parent() !==
                        this.primaryContainer
                    ) {
                        this.primaryContainer.add_child(
                            msWorkspace.msWorkspaceActor
                        );
                    } else {
                        this.primaryContainer.set_child_at_index(
                            msWorkspace.msWorkspaceActor,
                            Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                                msWorkspace
                            )
                        );
                    }
                } else if (
                    msWorkspace.msWorkspaceActor.get_parent() !==
                    this.monitorsContainer[msWorkspace.monitor.index]
                ) {
                    this.monitorsContainer[msWorkspace.monitor.index].set_child(
                        msWorkspace.msWorkspaceActor
                    );
                }
            });
            this.primaryContainer.translation_y =
                -1 *
                global.workspace_manager.get_active_workspace_index() *
                Main.layoutManager.primaryMonitor.height;
        }

        onSwitchWorkspace(from, to) {
            for (let i = Math.min(from, to); i <= Math.max(from, to); i++) {
                Me.msWorkspaceManager.primaryMsWorkspaces[
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
             */
            const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
            activeMsWorkspace.refreshFocus();
            Me.msWorkspaceManager.msWorkspaceList.forEach((msWorkspace) => {
                msWorkspace.msWorkspaceActor.visible =
                    msWorkspace.monitor != Main.layoutManager.primaryMonitor ||
                    msWorkspace === activeMsWorkspace;
            });
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

/* exported PrimaryMonitorContainer */
var PrimaryMonitorContainer = GObject.registerClass(
    {
        GTypeName: 'PrimaryMonitorContainer',
    },
    class PrimaryMonitorContainer extends St.Widget {
        _init(params) {
            super._init(params);
        }

        setPanel(actor) {
            this.panel = actor;
            this.add_child(actor);
        }

        setPrimaryContainer(actor) {
            this.primaryContainer = actor;
            this.add_child(actor);
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
            if (this.primaryContainer) {
                let primaryContainerBox = new Clutter.ActorBox();
                primaryContainerBox.x1 =
                    this.panel && this.panel.visible ? panelBox.x2 : box.x1;
                primaryContainerBox.x2 = box.x2;
                primaryContainerBox.y1 = box.y1;
                primaryContainerBox.y2 = box.y2;
                this.primaryContainer.allocate(primaryContainerBox, flags);
            }
        }
    }
);

var PrimaryContainer = GObject.registerClass(
    {
        GTypeName: 'PrimaryContainer',
    },
    class PrimaryContainer extends St.Widget {
        _init(params) {
            super._init(params);
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            this.get_children().forEach((actor, index) => {
                let actorBox = new Clutter.ActorBox();
                actorBox.x1 = box.x1;
                actorBox.x2 = box.x2;
                actorBox.y1 = index * box.get_height();
                actorBox.y2 = actorBox.y1 + box.get_height();
                actor.allocate(actorBox, flags);
            });
            /* let panelBox = new Clutter.ActorBox();
            if (this.panel) {
                panelBox.x1 = box.x1;
                panelBox.x2 = this.panel.get_preferred_width(-1)[1];
                panelBox.y1 = box.y1;
                panelBox.y2 = this.panel.get_preferred_height(-1)[1];
                this.panel.allocate(panelBox, flags);
            }
            if (this.primaryContainer) {
                let primaryContainerBox = new Clutter.ActorBox();
                primaryContainerBox.x1 =
                    this.panel && this.panel.visible ? panelBox.x2 : box.x1;
                primaryContainerBox.x2 = box.x2;
                primaryContainerBox.y1 = box.y1;
                primaryContainerBox.y2 = box.y2;
                this.primaryContainer.allocate(primaryContainerBox, flags);
            } */
        }
    }
);

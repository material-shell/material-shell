/** Gnome libs imports */
import * as Shell from 'shell';
import * as Meta from 'meta';
import * as St from 'st';
import * as GObject from 'gobject';
import * as Clutter from 'clutter';
import * as GLib from 'glib';
const Main = imports.ui.main;
const Background = imports.ui.background;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { SetAllocation,
    Allocate,
    AllocatePreferredSize, } from "src/utils/compatibility";
import { MsPanel } from 'src/layout/verticalPanel/verticalPanel';
import { reparentActor } from 'src/utils/index';
import { TranslationAnimator } from 'src/widget/translationAnimator';
import { VerticalPanelPositionEnum,
    HorizontalPanelPositionEnum, } from "src/manager/msThemeManager";
import { registerGObjectClass } from 'src/utils/gjs';
import { Signal } from 'src/manager/msManager';
import { Monitor } from 'src/types/mod';
import { assert } from 'src/utils/assert';
import { SignalHandle } from 'src/utils/signal';

@registerGObjectClass
export class MsMain extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsMain',
    }
    panelsVisible: any;
    monitorsContainer: MonitorContainer[];
    aboveContainer: Clutter.Actor;
    backgroundGroup: Meta.BackgroundGroup<Clutter.Actor>;
    primaryMonitorContainer: PrimaryMonitorContainer;
    panel: any;
    blurEffect: any;
    private _scaleChangedId: SignalHandle | undefined;
    // Definitely assigned because we call registerToSignals
    signals!: Signal[];

    constructor() {
            super({});
            Me.layout = this;
            this.panelsVisible = Me.stateManager.getState('panels-visible');
            this.panelsVisible =
                this.panelsVisible === undefined ? true : this.panelsVisible;

            Main.uiGroup.insert_child_above(this, global.window_group);

            this.monitorsContainer = [];
            this.aboveContainer = new Clutter.Actor();
            this.add_child(this.aboveContainer);
            this.backgroundGroup = new Meta.BackgroundGroup({});
            this.setBlurBackground(Me.msThemeManager.blurBackground);
            Me.msThemeManager.connect('blur-background-changed', () => {
                this.setBlurBackground(Me.msThemeManager.blurBackground);
            });
            this.add_child(this.backgroundGroup);

            this.primaryMonitorContainer = new PrimaryMonitorContainer(
                this.primaryMonitor,
                this.backgroundGroup,
                {
                    clip_to_allocation: true,
                }
            );
            this.add_child(this.primaryMonitorContainer);
            this.panel = this.primaryMonitorContainer.panel;
            this.primaryMonitorContainer.setMsWorkspaceActor(
                Me.msWorkspaceManager.getActivePrimaryMsWorkspace()
                    .msWorkspaceActor
            );
            for (let externalMonitor of this.externalMonitors) {
                let container = new MonitorContainer(
                    externalMonitor,
                    this.backgroundGroup,
                    {
                        clip_to_allocation: true,
                    }
                );
                this.monitorsContainer.push(container);
                this.add_child(container);
            }

            this.registerToSignals();
            this.onMsWorkspacesChanged();
            this.updatePanelVisibilities();
            this.updateFullscreenMonitors();
        }
        get primaryMonitor() {
            return Main.layoutManager.primaryMonitor;
        }

        get externalMonitors() {
            return Main.layoutManager.monitors.filter(
                (monitor) => monitor !== this.primaryMonitor
            );
        }
        setBlurBackground(blur: boolean) {
            const themeContext = St.ThemeContext.get_for_stage(global.stage);
            if ((this.blurEffect && blur) || (!this.blurEffect && !blur)) {
                return;
            } else if (this.blurEffect && !blur) {
                this._scaleChangedId?.disconnect();
                this.backgroundGroup.remove_effect(this.blurEffect);
                delete this.blurEffect;
                return;
            }

            this.blurEffect = new Shell.BlurEffect({
                brightness: 0.55,
                sigma: 60 * themeContext.scale_factor,
            });

            this._scaleChangedId = SignalHandle.connect(themeContext,
                'notify::scale-factor',
                () => {
                    this.blurEffect.sigma = 60 * themeContext.scale_factor;
                }
            );

            this.backgroundGroup.add_effect(this.blurEffect);
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
                }),
            });

            this.signals.push({
                from: global.display,
                id: global.display.connect('in-fullscreen-changed', () => {
                    this.updateFullscreenMonitors();
                }),
            });
            this.signals.push({
                from: Main.layoutManager,
                id: Main.layoutManager.connect('monitors-changed', () => {
                    this.primaryMonitorContainer.setMonitor(
                        this.primaryMonitor
                    );

                    let externalMonitorsDiff =
                        Main.layoutManager.monitors.length -
                        1 -
                        this.monitorsContainer.length;
                    // if there are more external monitors
                    if (externalMonitorsDiff > 0) {
                        for (
                            let i = 0;
                            i < Math.abs(externalMonitorsDiff);
                            i++
                        ) {
                            let container = new MonitorContainer(
                                this.externalMonitors[
                                    this.externalMonitors.length -
                                        Math.abs(externalMonitorsDiff) +
                                        i
                                ],
                                this.backgroundGroup,
                                {
                                    clip_to_allocation: true,
                                }
                            );
                            this.monitorsContainer.push(container);
                            this.add_child(container);
                        }
                        // if there are less external monitors
                    } else if (externalMonitorsDiff < 0) {
                        for (
                            let i = 0;
                            i < Math.abs(externalMonitorsDiff);
                            i++
                        ) {
                            let container = this.monitorsContainer.pop();
                            assert(container !== undefined, "monitorsContainer was empty");
                            if (container.msWorkspaceActor) {
                                container.remove_child(
                                    container.msWorkspaceActor
                                );
                            }
                            container.destroy();
                        }
                    }

                    this.externalMonitors.forEach((monitor, index) => {
                        this.monitorsContainer[index].setMonitor(monitor);
                    });
                    this.onMsWorkspacesChanged();
                    this.updatePanelVisibilities();
                    this.updateFullscreenMonitors();
                }),
            });
        }

        onMsWorkspacesChanged() {
            this.primaryMonitorContainer.setMsWorkspaceActor(
                Me.msWorkspaceManager.getActivePrimaryMsWorkspace()
                    .msWorkspaceActor
            );
            this.monitorsContainer.forEach((container) => {
                const msWorkspace = Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                    container.monitor.index
                )[0];
                if (msWorkspace) {
                    container.setMsWorkspaceActor(msWorkspace.msWorkspaceActor);
                }
            });
        }

        onSwitchWorkspace(_from, _to) {
            this.onMsWorkspacesChanged();
        }

        togglePanelsVisibilities() {
            this.panelsVisible = !this.panelsVisible;
            Me.stateManager.setState('panels-visible', this.panelsVisible);
            this.updatePanelVisibilities();
        }

        updatePanelVisibilities() {
            [
                this.primaryMonitorContainer.panel,
                this.primaryMonitorContainer.horizontalPanelSpacer,
                ...this.monitorsContainer.map(
                    (container) => container.horizontalPanelSpacer
                ),
            ].forEach((actor) => {
                actor.visible = this.panelsVisible;
                if (this.panelsVisible) {
                    if (Main.layoutManager._findActor(actor) === -1) {
                        Main.layoutManager._trackActor(actor, {
                            affectsStruts: true,
                        });
                    }
                } else {
                    Main.layoutManager._untrackActor(actor);
                }
            });
            Me.msWorkspaceManager.refreshMsWorkspaceUI();
        }

        updateFullscreenMonitors() {
            this.primaryMonitorContainer.refreshFullscreen();
            for (let container of this.monitorsContainer) {
                container.refreshFullscreen();
            }
            Me.msWorkspaceManager.refreshMsWorkspaceUI();
        }

        // eslint-disable-next-line camelcase
        add_child(actor: Clutter.Actor) {
            super.add_child(actor);
            this.set_child_above_sibling(this.aboveContainer, null);
        }

        setActorAbove(actor) {
            reparentActor(actor, this.aboveContainer);
        }
        vfunc_get_preferred_width(_forHeight: number): [number, number] {
            let width = global.stage.width;
            return [width, width];
        }

        vfunc_get_preferred_height(_forWidth: number): [number, number] {
            let height = global.stage.height;
            return [height, height];
        }
}

@registerGObjectClass
export class MonitorContainer extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MonitorContainer',
    }
    bgGroup: any;
    horizontalPanelSpacer: St.Widget<Clutter.LayoutManager, Clutter.ContentPrototype, Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>;
    bgManager: any;
    msWorkspaceActor: any;
    monitor: any;

    constructor(monitor: Monitor, bgGroup: Meta.BackgroundGroup, params?: Partial<St.Widget.ConstructorProperties>) {
            super(params);
            this.bgGroup = bgGroup;

            this.horizontalPanelSpacer = new St.Widget({
                style_class: 'HorizontalSpacer',
            });
            this.setMonitor(monitor);

            this.add_child(this.horizontalPanelSpacer);
            const panelSizeSignal = Me.msThemeManager.connect(
                'panel-size-changed',
                () => {
                    this.updateHorizontalSpacer();
                }
            );
            const horizontalPanelPositionSignal = Me.msThemeManager.connect(
                'horizontal-panel-position-changed',
                () => {
                    this.updateHorizontalSpacer();
                }
            );
            this.connect('destroy', () => {
                Me.msThemeManager.disconnect(panelSizeSignal);
                Me.msThemeManager.disconnect(horizontalPanelPositionSignal);
            });
        }

        refreshFullscreen() {
            this.setFullscreen(
                global.display.get_monitor_in_fullscreen(this.monitor.index)
            );
        }

        protected setFullscreen(monitorIsFullscreen: boolean) {
            this.bgManager.backgroundActor.visible = !monitorIsFullscreen;
            this.horizontalPanelSpacer.visible =
                Me.layout.panelsVisible && !monitorIsFullscreen;
        }

        setMsWorkspaceActor(actor: Clutter.Actor) {
            if (actor === this.msWorkspaceActor) return;
            if (
                this.msWorkspaceActor &&
                this.msWorkspaceActor.get_parent() === this
            ) {
                this.remove_child(this.msWorkspaceActor);
            }
            this.msWorkspaceActor = actor;
            reparentActor(this.msWorkspaceActor, this);
            this.msWorkspaceActor.updateUI();
        }
        updateHorizontalSpacer() {
            const panelHeight = Me.msThemeManager.getPanelSize(
                this.monitor.index
            );
            const panelPosition = Me.msThemeManager.horizontalPanelPosition;
            this.horizontalPanelSpacer.set_size(
                this.monitor.width,
                panelHeight
            );
            this.horizontalPanelSpacer.set_position(
                0,
                panelPosition === HorizontalPanelPositionEnum.TOP
                    ? 0
                    : this.monitor.height - panelHeight
            );
        }
        setMonitor(monitor: Monitor) {
            if (this.bgManager) {
                this.bgManager.destroy();
            }
            this.monitor = monitor;
            this.set_size(monitor.width, monitor.height);
            this.set_position(monitor.x, monitor.y);
            this.updateHorizontalSpacer();
            this.bgManager = new Background.BackgroundManager({
                container: this.bgGroup,
                monitorIndex: monitor.index,
            });
        }

        allocateHorizontalPanelSpacer(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
            AllocatePreferredSize(this.horizontalPanelSpacer, flags);
        }

        vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            this.get_children().forEach((actor) => {
                if (actor === this.horizontalPanelSpacer) {
                    return this.allocateHorizontalPanelSpacer(box, flags);
                }
                if (actor === this.msWorkspaceActor) {
                    let msWorkspaceActorBox = new Clutter.ActorBox();
                    msWorkspaceActorBox.x1 = box.x1;
                    msWorkspaceActorBox.x2 = box.x2;
                    msWorkspaceActorBox.y1 = box.y1;
                    msWorkspaceActorBox.y2 = box.y2;
                    return Allocate(
                        this.msWorkspaceActor,
                        msWorkspaceActorBox,
                        flags
                    );
                }
                AllocatePreferredSize(actor, flags);
            });
        }
}

@registerGObjectClass
export class PrimaryMonitorContainer extends MonitorContainer {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'PrimaryMonitorContainer',
    }
    panel: MsPanel;
    translationAnimator: TranslationAnimator;

    constructor(monitor: Monitor, bgGroup: Meta.BackgroundGroup, params?: Partial<St.Widget.ConstructorProperties>) {
            super(monitor, bgGroup, params);
            this.panel = new MsPanel();
            this.add_child(this.panel);
            this.translationAnimator = new TranslationAnimator(true);
            this.translationAnimator.connect('transition-completed', () => {
                reparentActor(this.msWorkspaceActor, this);
                this.remove_child(this.translationAnimator);
                if (this.panel) {
                    this.set_child_below_sibling(
                        this.msWorkspaceActor,
                        this.panel
                    );
                }
                this.msWorkspaceActor.updateUI();
            });
            const verticalPanelPositionSignal = Me.msThemeManager.connect(
                'vertical-panel-position-changed',
                () => {
                    this.queue_relayout();
                }
            );
            this.connect('destroy', () => {
                Me.msThemeManager.disconnect(verticalPanelPositionSignal);
            });
        }

        protected setFullscreen(monitorIsFullscreen: boolean) {
            this.panel.visible =
                Me.layout.panelsVisible && !monitorIsFullscreen;
            super.setFullscreen(monitorIsFullscreen);
        }

        setTranslation(prevActor: Clutter.Actor, nextActor: Clutter.Actor) {
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

        setMsWorkspaceActor(actor: Clutter.Actor) {
            if (actor === this.msWorkspaceActor) return;
            let prevActor;
            if (this.msWorkspaceActor) {
                prevActor = this.msWorkspaceActor;
                if (this.msWorkspaceActor.get_parent() === this)
                    this.remove_child(this.msWorkspaceActor);
            }
            this.msWorkspaceActor = actor;
            if (!this.msWorkspaceActor.get_parent()) {
                reparentActor(this.msWorkspaceActor, this);
                if (this.panel) {
                    this.set_child_below_sibling(
                        this.msWorkspaceActor,
                        this.panel
                    );
                }
            }
            this.msWorkspaceActor.msWorkspace.refreshFocus(true);
            if (prevActor) {
                this.setTranslation(prevActor, this.msWorkspaceActor);
            }
        }

        vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            let panelBox = new Clutter.ActorBox();
            let panelPosition = Me.msThemeManager.verticalPanelPosition;
            if (this.panel) {
                const panelWidth = this.panel.get_preferred_width(-1)[1]!;
                panelBox.x1 =
                    panelPosition === VerticalPanelPositionEnum.LEFT
                        ? box.x1
                        : box.x2 - panelWidth;
                panelBox.x2 = panelBox.x1 + panelWidth;
                panelBox.y1 = box.y1;
                panelBox.y2 = this.panel.get_preferred_height(-1)[1]!;
            }

            let msWorkspaceActorBox = new Clutter.ActorBox();
            msWorkspaceActorBox.x1 = box.x1;
            msWorkspaceActorBox.x2 = box.x2;
            msWorkspaceActorBox.y1 = box.y1;
            msWorkspaceActorBox.y2 = box.y2;
            if (this.panel && this.panel.visible) {
                if (panelPosition === VerticalPanelPositionEnum.LEFT) {
                    msWorkspaceActorBox.x1 =
                        msWorkspaceActorBox.x1 + panelBox.get_width();
                } else {
                    msWorkspaceActorBox.x2 =
                        msWorkspaceActorBox.x2 - panelBox.get_width();
                }
            }
            this.get_children().forEach((child) => {
                if (child === this.panel) {
                    return Allocate(child, panelBox, flags);
                }
                if (child === this.horizontalPanelSpacer) {
                    return this.allocateHorizontalPanelSpacer(box, flags);
                }
                Allocate(child, msWorkspaceActorBox, flags);
            });
        }
}

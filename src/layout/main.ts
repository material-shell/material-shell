/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GObject from 'gobject';
import * as Meta from 'meta';
import * as Shell from 'shell';
import { MsPanel } from 'src/layout/verticalPanel/verticalPanel';
import { Signal } from 'src/manager/msManager';
import {
    HorizontalPanelPositionEnum,
    VerticalPanelPositionEnum,
} from 'src/manager/msThemeManager';
import { assert, assertNotNull } from 'src/utils/assert';
import {
    Allocate,
    AllocatePreferredSize,
    SetAllocation,
} from 'src/utils/compatibility';
import { registerGObjectClass } from 'src/utils/gjs';
import { reparentActor } from 'src/utils/index';
import { SignalHandle } from 'src/utils/signal';
import { TranslationAnimator } from 'src/widget/translationAnimator';
import * as St from 'st';
import { layout, main as Main } from 'ui';
import { MsWorkspaceActor } from './msWorkspace/msWorkspace';
import Monitor = layout.Monitor;

const Background = imports.ui.background;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class MsMain extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsMain',
    };
    panelsVisible: boolean;
    monitorsContainer: MonitorContainer[];
    aboveContainer: Clutter.Actor;
    backgroundGroup: Meta.BackgroundGroup<Clutter.Actor>;
    primaryMonitorContainer: PrimaryMonitorContainer;
    panel: MsPanel;
    blurEffect: Shell.BlurEffect | undefined;
    private _scaleChangedId: SignalHandle | undefined;
    // Definitely assigned because we call registerToSignals
    signals!: Signal[];
    overviewShown = false;

    constructor() {
        super({});
        Me.layout = this;
        this.panelsVisible = Me.stateManager.getState('panels-visible') ?? true;

        Main.layoutManager.uiGroup.insert_child_above(
            this,
            global.window_group
        );

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
            assertNotNull(this.primaryMonitor),
            this.backgroundGroup,
            {
                clip_to_allocation: true,
            }
        );
        this.add_child(this.primaryMonitorContainer);
        this.panel = this.primaryMonitorContainer.panel;
        this.primaryMonitorContainer.setMsWorkspaceActor(
            Me.msWorkspaceManager.getActivePrimaryMsWorkspace().msWorkspaceActor
        );
        for (const externalMonitor of this.externalMonitors) {
            const container = new MonitorContainer(
                externalMonitor,
                this.backgroundGroup,
                {
                    clip_to_allocation: true,
                }
            );
            this.monitorsContainer.push(container);
            this.add_child(container);
        }

        global.display.connect('overlay-key', () => {
            this.toggleOverview();
        });

        global.stage.connect('captured-event', (_, event: Clutter.Event) => {
            if (!this.overviewShown) return;
            if (event.type() === Clutter.EventType.BUTTON_PRESS) {
                const source = event.get_source();
                const [x, y] = event.get_coords();

                // Note: The Clutter typing is incorrect. See https://gitlab.gnome.org/ewlsh/gi.ts/-/issues/2
                const [x1, y1] = this.panel.get_transformed_position() as [
                    number,
                    number
                ];
                const [width, height] = this.panel.get_transformed_size() as [
                    number,
                    number
                ];

                if (
                    !(x >= x1 && x <= x1 + width && y >= y1 && y <= y1 + height)
                ) {
                    this.toggleOverview();
                }
            }

            return Clutter.EVENT_PROPAGATE;
        });

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

        const effect = (this.blurEffect = new Shell.BlurEffect({
            brightness: 0.55,
            sigma: 60 * themeContext.scale_factor,
        }));

        this._scaleChangedId = SignalHandle.connect(
            themeContext,
            'notify::scale-factor',
            () => {
                effect.sigma = 60 * themeContext.scale_factor;
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
                (_, from: number, to: number) => {
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
                    assertNotNull(this.primaryMonitor)
                );

                const externalMonitorsDiff =
                    Main.layoutManager.monitors.length -
                    1 -
                    this.monitorsContainer.length;
                // if there are more external monitors
                if (externalMonitorsDiff > 0) {
                    for (let i = 0; i < Math.abs(externalMonitorsDiff); i++) {
                        const container = new MonitorContainer(
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
                    for (let i = 0; i < Math.abs(externalMonitorsDiff); i++) {
                        const container = this.monitorsContainer.pop();
                        assert(
                            container !== undefined,
                            'monitorsContainer was empty'
                        );
                        if (container.msWorkspaceActor) {
                            container.remove_child(container.msWorkspaceActor);
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

    onMsWorkspacesChanged(): void {
        this.primaryMonitorContainer.setMsWorkspaceActor(
            Me.msWorkspaceManager.getActivePrimaryMsWorkspace().msWorkspaceActor
        );
        this.monitorsContainer.forEach((container) => {
            const msWorkspace =
                Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                    container.monitor.index
                )[0];
            if (msWorkspace) {
                container.setMsWorkspaceActor(msWorkspace.msWorkspaceActor);
            }
        });
    }

    onSwitchWorkspace(_from: number, _to: number): void {
        this.onMsWorkspacesChanged();
    }

    togglePanelsVisibilities(): void {
        this.panelsVisible = !this.panelsVisible;
        Me.stateManager.setState('panels-visible', this.panelsVisible);
        this.updatePanelVisibilities();
    }

    updatePanelVisibilities(): void {
        [
            this.primaryMonitorContainer.verticalPanelSpacer,
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
        this.primaryMonitorContainer.panel.visible = this.panelsVisible;
        Me.msWorkspaceManager.refreshMsWorkspaceUI();
    }

    updateFullscreenMonitors(): void {
        this.primaryMonitorContainer.refreshFullscreen();
        for (const container of this.monitorsContainer) {
            container.refreshFullscreen();
        }
        Me.msWorkspaceManager.refreshMsWorkspaceUI();
    }

    toggleOverview(): void {
        if (this.overviewShown) {
            this.overviewShown = false;
            this.primaryMonitorContainer.workspaceContainer.ease_property(
                '@effects.dimmer.brightness',
                Clutter.Color.new(127, 127, 127, 255),
                {
                    duration: 300,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    onComplete: () => {
                        this.primaryMonitorContainer.workspaceContainer.clear_effects();
                    },
                }
            );
            Me.msWindowManager.msFocusManager.popModal(this);
        } else {
            this.overviewShown = true;
            if (Main._findModal(this) === -1) {
                Me.msWindowManager.msFocusManager.pushModal(this, {
                    actionMode: Shell.ActionMode.OVERVIEW,
                });
            }

            const dimmerEffect = new Clutter.BrightnessContrastEffect({
                name: 'dimmer',
                brightness: Clutter.Color.new(127, 127, 127, 255),
            });
            this.primaryMonitorContainer.workspaceContainer.add_effect(
                dimmerEffect
            );
            this.primaryMonitorContainer.workspaceContainer.ease_property(
                '@effects.dimmer.brightness',
                Clutter.Color.new(90, 90, 90, 255),
                {
                    duration: 300,
                    mode: Clutter.AnimationMode.EASE_IN_QUAD,
                }
            );
        }
        this.panel.toggle();
    }

    // eslint-disable-next-line camelcase
    add_child(actor: Clutter.Actor) {
        super.add_child(actor);
        this.set_child_above_sibling(this.aboveContainer, null);
    }

    setActorAbove(actor: Clutter.Actor) {
        reparentActor(actor, this.aboveContainer);
    }
    vfunc_get_preferred_width(_forHeight: number): [number, number] {
        const width = global.stage.width;
        return [width, width];
    }

    vfunc_get_preferred_height(_forWidth: number): [number, number] {
        const height = global.stage.height;
        return [height, height];
    }
}

@registerGObjectClass
export class MonitorContainer extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MonitorContainer',
    };
    bgGroup: Meta.BackgroundGroup;
    horizontalPanelSpacer: St.Widget<
        Clutter.LayoutManager,
        Clutter.ContentPrototype,
        Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    >;
    bgManager: any;
    msWorkspaceActor: MsWorkspaceActor | undefined;
    // Safety: We definitely set this because we call setMonitor from the constructor
    monitor!: Monitor;

    constructor(
        monitor: Monitor,
        bgGroup: Meta.BackgroundGroup,
        params?: Partial<St.Widget.ConstructorProperties>
    ) {
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
                this.updateSpacer();
            }
        );
        const horizontalPanelPositionSignal = Me.msThemeManager.connect(
            'horizontal-panel-position-changed',
            () => {
                this.updateSpacer();
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

    setMsWorkspaceActor(actor: MsWorkspaceActor) {
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

    updateSpacer() {
        const panelHeight = Me.msThemeManager.getPanelSize(this.monitor.index);
        const panelPosition = Me.msThemeManager.horizontalPanelPosition;
        this.horizontalPanelSpacer.set_size(this.monitor.width, panelHeight);
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
        this.updateSpacer();
        this.bgManager = new Background.BackgroundManager({
            container: this.bgGroup,
            monitorIndex: monitor.index,
        });
    }

    allocateHorizontalPanelSpacer(
        box: Clutter.ActorBox,
        flags?: Clutter.AllocationFlags
    ) {
        AllocatePreferredSize(this.horizontalPanelSpacer, flags);
    }

    vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        this.get_children().forEach((actor) => {
            if (actor === this.horizontalPanelSpacer) {
                return this.allocateHorizontalPanelSpacer(box, flags);
            }
            if (actor === this.msWorkspaceActor) {
                const msWorkspaceActorBox = new Clutter.ActorBox();
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
    };
    panel: MsPanel;
    translationAnimator: TranslationAnimator;
    verticalPanelSpacer: St.Widget<
        Clutter.LayoutManager,
        Clutter.ContentPrototype,
        Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    >;
    workspaceContainer = new St.Widget({
        layout_manager: new Clutter.BinLayout(),
        x_align: Clutter.ActorAlign.FILL,
        y_align: Clutter.ActorAlign.FILL,
    });
    constructor(
        monitor: Monitor,
        bgGroup: Meta.BackgroundGroup,
        params?: Partial<St.Widget.ConstructorProperties>
    ) {
        super(monitor, bgGroup, params);

        this.verticalPanelSpacer = new St.Widget({
            style_class: 'VerticalSpacer',
        });
        this.add_child(this.verticalPanelSpacer);
        this.panel = new MsPanel();
        this.add_child(this.workspaceContainer);
        this.add_child(this.panel);

        this.translationAnimator = new TranslationAnimator(true);
        this.translationAnimator.connect('transition-completed', () => {
            assert(
                this.msWorkspaceActor !== undefined,
                'expected a workspace actor to exist'
            );
            reparentActor(this.msWorkspaceActor, this.workspaceContainer);
            this.workspaceContainer.remove_child(this.translationAnimator);
            this.msWorkspaceActor.updateUI();
        });
        const verticalPanelPositionSignal = Me.msThemeManager.connect(
            'vertical-panel-position-changed',
            () => {
                this.queue_relayout();
                this.updateSpacer();
            }
        );
        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(verticalPanelPositionSignal);
        });

        this.updateSpacer();
    }

    protected setFullscreen(monitorIsFullscreen: boolean) {
        this.panel.visible = Me.layout.panelsVisible && !monitorIsFullscreen;
        this.verticalPanelSpacer.visible =
            Me.layout.panelsVisible && !monitorIsFullscreen;
        super.setFullscreen(monitorIsFullscreen);
    }

    setTranslation(prevActor: Clutter.Actor, nextActor: Clutter.Actor) {
        if (!this.translationAnimator.get_parent()) {
            this.translationAnimator.width = this.width;
            this.translationAnimator.height = assertNotNull(
                Main.layoutManager.primaryMonitor
            ).height;
            this.workspaceContainer.add_child(this.translationAnimator);
        }
        const indexOfPrevActor =
            Me.msWorkspaceManager.primaryMsWorkspaces.findIndex(
                (msWorkspace) => {
                    return msWorkspace.msWorkspaceActor === prevActor;
                }
            );
        const indexOfNextActor =
            Me.msWorkspaceManager.primaryMsWorkspaces.findIndex(
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

    setMsWorkspaceActor(actor: MsWorkspaceActor) {
        if (actor === this.msWorkspaceActor) return;
        let prevActor;
        if (this.msWorkspaceActor) {
            prevActor = this.msWorkspaceActor;
            if (this.msWorkspaceActor.get_parent() === this.workspaceContainer)
                this.workspaceContainer.remove_child(this.msWorkspaceActor);
        }
        this.msWorkspaceActor = actor;
        if (!this.msWorkspaceActor.get_parent()) {
            reparentActor(this.msWorkspaceActor, this.workspaceContainer);
        }
        assertNotNull(this.msWorkspaceActor.msWorkspace).refreshFocus(true);
        if (prevActor) {
            this.setTranslation(prevActor, this.msWorkspaceActor);
        }
    }

    updateSpacer() {
        super.updateSpacer();
        if (this.verticalPanelSpacer) {
            const panelWidth = Me.msThemeManager.getPanelSize(
                this.monitor.index
            );
            const panelPosition = Me.msThemeManager.verticalPanelPosition;
            this.verticalPanelSpacer.set_size(panelWidth, this.monitor.height);
            this.verticalPanelSpacer.set_position(
                panelPosition === VerticalPanelPositionEnum.LEFT
                    ? 0
                    : this.monitor.width - panelWidth,
                0
            );
        }
    }

    vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        const panelBox = new Clutter.ActorBox();
        const panelPosition = Me.msThemeManager.verticalPanelPosition;
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

        const msWorkspaceActorBox = new Clutter.ActorBox();
        msWorkspaceActorBox.x1 = box.x1;
        msWorkspaceActorBox.x2 = box.x2;
        msWorkspaceActorBox.y1 = box.y1;
        msWorkspaceActorBox.y2 = box.y2;
        if (this.panel && this.panel.visible && Me.layout.panelsVisible) {
            if (panelPosition === VerticalPanelPositionEnum.LEFT) {
                msWorkspaceActorBox.x1 =
                    msWorkspaceActorBox.x1 +
                    Me.msThemeManager.getPanelSize(
                        Main.layoutManager.primaryIndex
                    );
            } else {
                msWorkspaceActorBox.x2 =
                    msWorkspaceActorBox.x2 -
                    Me.msThemeManager.getPanelSize(
                        Main.layoutManager.primaryIndex
                    );
            }
        }
        this.get_children().forEach((child) => {
            if (child === this.panel) {
                return Allocate(child, panelBox, flags);
            }
            if (child === this.horizontalPanelSpacer) {
                return this.allocateHorizontalPanelSpacer(box, flags);
            }
            if (child === this.verticalPanelSpacer) {
                return AllocatePreferredSize(this.verticalPanelSpacer, flags);
            }
            Allocate(child, msWorkspaceActorBox, flags);
        });
    }
}

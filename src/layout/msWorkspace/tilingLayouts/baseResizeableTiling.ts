/** JS imports */
const { round } = Math;

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Cogl from 'cogl';
import * as GObject from 'gobject';
import * as Meta from 'meta';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { Portion, PortionBorder } from 'src/layout/msWorkspace/portion';
import { BaseTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseTiling';
import { FocusEffectEnum } from 'src/manager/msThemeManager';
import { Rectangular } from 'src/types/mod';
import { assert } from 'src/utils/assert';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
import { MsWorkspace, Tileable } from '../msWorkspace';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const BORDER_WIDTH = 2;
@registerGObjectClass
export class BaseResizeableTilingLayout extends BaseTilingLayout {
    mainPortion: Portion;
    currentFocusEffect: number;
    borderContainer: Clutter.Actor | undefined;
    borderActorList: Clutter.Actor[] | undefined;

    constructor(
        msWorkspace: MsWorkspace,
        state: { mainPortion?: Portion } = {}
    ) {
        super(msWorkspace, state);
        this.mainPortion = new Portion();

        if (state.mainPortion) {
            this.mainPortion.state = state.mainPortion;

            delete state.mainPortion;
        }
        Me.layoutManager.connect('gap-changed', this.onGapChange.bind(this));
        this.currentFocusEffect = Me.msThemeManager.focusEffect;
        this.onGapChange();
        Me.msThemeManager.connect(
            'focus-effect-changed',
            this.onFocusEffectChanged.bind(this)
        );
    }

    get state() {
        return Object.assign({}, this._state, {
            mainPortion: this.mainPortion.state,
        });
    }
    onGapChange() {
        if (!Me.layoutManager.someGap) {
            if (!this.borderContainer) {
                this.borderActorList = [];
                this.borderContainer = new Clutter.Actor();
                this.msWorkspace.msWorkspaceActor.add_child(
                    this.borderContainer
                );
                this.updateBordersActor();
            }
        } else {
            if (this.borderContainer) {
                this.borderContainer.destroy();
                delete this.borderContainer;
                delete this.borderActorList;
            }
        }
    }

    getTileableIndex(tileable: Tileable): number {
        return this.tileableListVisible.indexOf(tileable);
    }

    getTileablePortionRatio(tileable: Tileable): Rectangular | undefined {
        const index = this.getTileableIndex(tileable);

        if (index < 0) {
            return;
        }

        return this.mainPortion.getRatioForIndex(index);
    }

    getTileableBorder(
        tileable: Tileable,
        vertical = false,
        after = false
    ): PortionBorder | undefined {
        const index = this.getTileableIndex(tileable);

        if (index < 0) {
            return;
        }

        return this.mainPortion.getBorderForIndex(index, vertical, after);
    }

    applyBoxRatio(box: Clutter.ActorBox, ratio: Rectangular): Rectangular {
        return {
            x: round(box.x1 + ratio.x * box.get_width()),
            y: round(box.y1 + ratio.y * box.get_height()),
            width: round(ratio.width * box.get_width()),
            height: round(ratio.height * box.get_height()),
        };
    }

    applyBoxRatioAndGaps(
        box: Clutter.ActorBox,
        ratio: Rectangular
    ): Rectangular {
        const { x, y, width, height } = this.applyBoxRatio(box, ratio);

        return this.applyGaps(x, y, width, height);
    }

    tileTileable(tileable: Tileable, box: Clutter.ActorBox) {
        const ratio = this.getTileablePortionRatio(tileable);

        if (!ratio) {
            return;
        }

        const { x, y, width, height } = this.applyBoxRatioAndGaps(box, ratio);

        tileable.x = x;
        tileable.y = y;
        tileable.width = width;
        tileable.height = height;
    }

    applyGaps(
        x: number,
        y: number,
        width: number,
        height: number
    ): Rectangular {
        const gap = Me.layoutManager.gap || BORDER_WIDTH;
        const screenGap = Me.layoutManager.useScreenGap
            ? Me.layoutManager.screenGap
            : Me.layoutManager.gap;
        return super.applyGaps(x, y, width, height, screenGap, gap);
    }

    updateMainPortionLength(length: number) {
        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }

        while (length > 1 && this.mainPortion.portionLength < length) {
            this.mainPortion.push();
        }
    }

    tileAll(box?: Clutter.ActorBox) {
        box = this.resolveBox(box);
        this.updateMainPortionLength(this.tileableListVisible.length);
        if (this.borderContainer) {
            this.updateBordersActor();
            this.updateBordersPosition(box);
        }
        super.tileAll(box);
    }

    updateBordersActor() {
        assert(this.borderActorList !== undefined, 'Layout has no borders');
        assert(this.borderContainer !== undefined, 'Layout has no borders');

        const borderLength = this.mainPortion.concatBorders.length;

        if (this.borderActorList.length < borderLength) {
            for (
                let i = 0;
                i <= borderLength - this.borderActorList.length;
                i++
            ) {
                const actor = new ResizableBorderActor();
                this.borderActorList.push(actor);
                this.borderContainer.add_child(actor);
            }
        } else if (this.borderActorList.length > borderLength) {
            this.borderActorList
                .splice(
                    borderLength,
                    this.borderActorList.length - borderLength
                )
                .forEach((actor) => {
                    actor.destroy();
                });
        }
    }

    updateBordersPosition(box: Clutter.ActorBox) {
        const borderActorList = this.borderActorList;
        assert(borderActorList !== undefined, 'Layout has no borders');

        this.mainPortion.concatBorders.forEach((portionBorder, index) => {
            const actor = borderActorList[index] as Clutter.Actor & {
                portionBorder?: PortionBorder;
            };
            actor.portionBorder = portionBorder;
            const ratio = this.mainPortion.getRatioForPortion(
                portionBorder.firstPortion
            );
            const { x, y, width, height } = this.applyBoxRatio(box, ratio);
            if (portionBorder.vertical) {
                actor.x = x + width - BORDER_WIDTH / 2;
                actor.y = y;
                actor.height = height;
                actor.width = BORDER_WIDTH;
            } else {
                actor.x = x;
                actor.y = y + height - BORDER_WIDTH / 2;
                actor.height = BORDER_WIDTH;
                actor.width = width;
            }
        });
    }

    alterTileable(tileable: Tileable) {
        this.addUnFocusEffect(
            tileable,
            this.currentFocusEffect,
            tileable === this.msWorkspace.tileableFocused
        );
        super.alterTileable(tileable);
    }

    restoreTileable(tileable: Tileable) {
        this.removeUnFocusEffect(tileable, this.currentFocusEffect);
        super.restoreTileable(tileable);
    }

    onFocusEffectChanged() {
        const oldFocusEffect = this.currentFocusEffect;
        this.currentFocusEffect = Me.msThemeManager.focusEffect;
        this.msWorkspace.tileableList.forEach((tileable) => {
            this.removeUnFocusEffect(tileable, oldFocusEffect);
            this.addUnFocusEffect(
                tileable,
                this.currentFocusEffect,
                tileable === this.msWorkspace.tileableFocused
            );
        });
    }

    onFocusChanged(tileable: Tileable, oldTileable: Tileable | null) {
        Me.logWithStackTrace("focus changed");
        this.setUnFocusEffect(tileable, this.currentFocusEffect, true);
        if (oldTileable) {
            if (
                oldTileable instanceof MsWindow &&
                oldTileable.metaWindow &&
                oldTileable.metaWindow.fullscreen
            ) {
                oldTileable.metaWindow.unmake_fullscreen();
            }
            this.setUnFocusEffect(oldTileable, this.currentFocusEffect, false);
        }
        super.onFocusChanged(tileable, oldTileable);
    }

    addUnFocusEffect(tileable: Tileable, effect: number, focused: boolean) {
        if (!tileable || tileable.focusEffects) return;
        if (effect === FocusEffectEnum.DEFAULT) {
            tileable.focusEffects = {
                dimmer: new Clutter.BrightnessContrastEffect({
                    name: 'dimmer',
                    brightness: focused
                        ? Clutter.Color.new(127, 127, 127, 255)
                        : Clutter.Color.new(100, 100, 100, 255),
                }),
            };
            tileable.add_effect(tileable.focusEffects.dimmer!);
        } else if (effect === FocusEffectEnum.BORDER) {
            tileable.focusEffects = {
                border: new PrimaryBorderEffect({
                    name: 'border',
                    opacity: focused ? 1.0 : 0.0,
                }),
            };
            tileable.add_effect(tileable.focusEffects.border!);
        }
    }

    removeUnFocusEffect(tileable: Tileable, effect: number) {
        if (!tileable || !tileable.focusEffects) return;
        tileable.remove_all_transitions();
        if (effect === FocusEffectEnum.DEFAULT) {
            assert(
                tileable.focusEffects.dimmer !== undefined,
                "Tilable doesn't have the dimmer effect"
            );
            tileable.remove_effect(tileable.focusEffects.dimmer);
        } else if (effect === FocusEffectEnum.BORDER) {
            assert(
                tileable.focusEffects.border !== undefined,
                "Tilable doesn't have the border effect"
            );
            tileable.remove_effect(tileable.focusEffects.border);
        }
        delete tileable.focusEffects;
    }

    setUnFocusEffect(tileable: Tileable, effect: number, focused: boolean) {
        if (!tileable) return;
        if (effect === FocusEffectEnum.DEFAULT) {
            if (!focused) {
                this.addUnFocusEffect(tileable, effect, !focused);
                if (tileable.get_effect('dimmer')) {
                    tileable.ease_property(
                        '@effects.dimmer.brightness',

                        Clutter.Color.new(100, 100, 100, 255),
                        {
                            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                            duration: 150,
                        }
                    );
                }
            } else {
                if (tileable.get_effect('dimmer')) {
                    tileable.ease_property(
                        '@effects.dimmer.brightness',
                        Clutter.Color.new(127, 127, 127, 255),
                        {
                            duration: 150,
                            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                            onComplete: () => {
                                // If we don't remove the effect it's can cause some issue with caching texture which lead to window flickering showing old texture
                                this.removeUnFocusEffect(tileable, effect);
                            },
                        }
                    );
                }
            }
        } else if (effect === FocusEffectEnum.BORDER) {
            if (focused) {
                this.addUnFocusEffect(tileable, effect, focused);
            } else {
                this.removeUnFocusEffect(tileable, effect);
            }
        }
    }

    onDestroy() {
        if (this.borderContainer) {
            this.borderContainer.destroy();
        }
        super.onDestroy();
    }
}

@registerGObjectClass
export class ResizableBorderActor extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'ResizableBorderActor',
        Signals: {
            'drag-start': {},
        },
    };

    constructor() {
        super({ reactive: true, track_hover: true });
        this.set_background_color(
            new Clutter.Color({ red: 10, green: 10, blue: 10, alpha: 255 })
        );

        this.connect('event', (actor, event) => {
            const eventType = event.type();
            switch (eventType) {
                case Clutter.EventType.BUTTON_PRESS:
                case Clutter.EventType.TOUCH_BEGIN: {
                    const border = (
                        this as Clutter.Actor & {
                            portionBorder?: PortionBorder;
                        }
                    ).portionBorder;
                    assert(border !== undefined, 'Actor has no border');
                    Me.msWindowManager.msResizeManager.startResize(border);
                    break;
                }
                case Clutter.EventType.ENTER:
                    global.display.set_cursor(
                        Meta.Cursor.MOVE_OR_RESIZE_WINDOW
                    );
                    break;
                case Clutter.EventType.LEAVE:
                    global.display.set_cursor(Meta.Cursor.DEFAULT);
                    break;
            }
        });
    }
    get vertical() {
        return this.height > this.width;
    }
}

@registerGObjectClass
export class PrimaryBorderEffect extends Clutter.Effect {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'PrimaryBorderEffect',
        Properties: {
            opacity: GObject.ParamSpec.float(
                'opacity',
                'opacity',
                'opacity',
                GObject.ParamFlags.READWRITE,
                0,
                1,
                1
            ),
        },
    };
    private _pipeline: Cogl.Pipeline | null;
    color: Cogl.Color;

    // Note: Default value set by GObject due to the metaInfo declaration above
    opacity!: number;

    constructor(params: Partial<Clutter.Effect.ConstructorProperties>) {
        super(params);
        this._pipeline = null;
        this.color = new Cogl.Color();
    }

    vfunc_paint_node(node: Clutter.PaintNode, paintContext: Clutter.PaintContext) {
        const framebuffer = paintContext.get_framebuffer();
        const coglContext = framebuffer.get_context();
        const actor = this.get_actor();
        actor.continue_paint(paintContext);

        if (!this._pipeline) {
            this._pipeline = new Cogl.Pipeline(coglContext);
        }

        this.color.init_from_4ub(
            parseInt(Me.msThemeManager.primary.substring(1, 3), 16),
            parseInt(Me.msThemeManager.primary.substring(3, 5), 16),
            parseInt(Me.msThemeManager.primary.substring(5, 7), 16),
            this.opacity * 255
        );
        this.color.premultiply();
        this._pipeline.set_color(this.color);

        const alloc = actor.get_allocation_box();
        const width = 2;

        // clockwise order
        framebuffer.draw_rectangle(
            this._pipeline,
            0,
            0,
            alloc.get_width(),
            width
        );
        framebuffer.draw_rectangle(
            this._pipeline,
            alloc.get_width() - width,
            width,
            alloc.get_width(),
            alloc.get_height()
        );
        framebuffer.draw_rectangle(
            this._pipeline,
            0,
            alloc.get_height(),
            alloc.get_width() - width,
            alloc.get_height() - width
        );
        framebuffer.draw_rectangle(
            this._pipeline,
            0,
            alloc.get_height() - width,
            width,
            width
        );
    }
}

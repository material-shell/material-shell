/** JS imports */
const { round } = Math;

/** Gnome libs imports */
const { Clutter, GObject, St, Meta, Cogl } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;

const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { Portion } = Me.imports.src.layout.msWorkspace.portion;

const { FocusEffectEnum } = Me.imports.src.manager.msThemeManager;

const BORDER_WIDTH = 2;
/* exported BaseTilingLayout */
var BaseResizeableTilingLayout = GObject.registerClass(
    class BaseResizeableTilingLayout extends BaseTilingLayout {
        _init(msWorkspace, state = {}) {
            this.mainPortion = new Portion();

            if (state.mainPortion) {
                this.mainPortion.state = state.mainPortion;

                delete state.mainPortion;
            }
            Me.layoutManager.connect(
                'gap-changed',
                this.onGapChange.bind(this)
            );
            this.currentFocusEffect = Me.msThemeManager.focusEffect;
            super._init(msWorkspace, state);
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
                    this.mainPortion.disconnect(this.mainPortionConnectionId);
                    delete this.mainPortionConnectionId;
                    this.borderContainer.destroy();
                    delete this.borderContainer;
                    delete this.borderActorList;
                }
            }
        }

        getTileableIndex(tileable) {
            return this.tileableListVisible.indexOf(tileable);
        }

        getTileablePortionRatio(tileable) {
            const index = this.getTileableIndex(tileable);

            if (index < 0) {
                return;
            }

            return this.mainPortion.getRatioForIndex(index);
        }

        getTileableBorder(tileable, vertical = false, after = false) {
            const index = this.getTileableIndex(tileable);

            if (index < 0) {
                return;
            }

            return this.mainPortion.getBorderForIndex(index, vertical, after);
        }

        applyBoxRatio(box, ratio) {
            return {
                x: round(box.x1 + ratio.x * box.get_width()),
                y: round(box.y1 + ratio.y * box.get_height()),
                width: round(ratio.width * box.get_width()),
                height: round(ratio.height * box.get_height()),
            };
        }

        applyBoxRatioAndGaps(box, ratio) {
            const { x, y, width, height } = this.applyBoxRatio(box, ratio);

            return this.applyGaps(x, y, width, height);
        }

        tileTileable(tileable, box) {
            let ratio = this.getTileablePortionRatio(tileable);

            if (!ratio) {
                return;
            }

            const { x, y, width, height } = this.applyBoxRatioAndGaps(
                box,
                ratio
            );

            tileable.x = x;
            tileable.y = y;
            tileable.width = width;
            tileable.height = height;
        }

        applyGaps(x, y, width, height) {
            const gap = Me.layoutManager.gap || BORDER_WIDTH;
            const screenGap = Me.layoutManager.useScreenGap
                ? Me.layoutManager.screenGap
                : Me.layoutManager.gap;
            return super.applyGaps(x, y, width, height, screenGap, gap);
        }

        updateMainPortionLength(length) {
            while (this.mainPortion.portionLength > length) {
                this.mainPortion.pop();
            }

            while (length > 1 && this.mainPortion.portionLength < length) {
                this.mainPortion.push();
            }
        }

        tileAll(box) {
            box = this.resolveBox(box);
            this.updateMainPortionLength(this.tileableListVisible.length);
            if (this.borderContainer) {
                this.updateBordersActor();
                this.updateBordersPosition(box);
            }
            super.tileAll(box);
        }

        updateBordersActor() {
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

        updateBordersPosition(box) {
            this.mainPortion.concatBorders.forEach((portionBorder, index) => {
                let actor = this.borderActorList[index];
                actor.portionBorder = portionBorder;
                let ratio = this.mainPortion.getRatioForPortion(
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

        alterTileable(tileable) {
            this.addUnFocusEffect(
                tileable,
                this.currentFocusEffect,
                tileable === this.msWorkspace.tileableFocused
            );
            super.alterTileable(tileable);
        }

        restoreTileable(tileable) {
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

        onFocusChanged(tileable, oldTileable) {
            this.setUnFocusEffect(tileable, this.currentFocusEffect, true);
            if (oldTileable) {
                if (
                    oldTileable instanceof MsWindow &&
                    oldTileable.metaWindow &&
                    oldTileable.metaWindow.fullscreen
                ) {
                    oldTileable.metaWindow.unmake_fullscreen();
                }
                this.setUnFocusEffect(
                    oldTileable,
                    this.currentFocusEffect,
                    false
                );
            }
            super.onFocusChanged(tileable, oldTileable);
        }

        addUnFocusEffect(tileable, effect, focused) {
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
                tileable.add_effect(tileable.focusEffects.dimmer);
            } else if (effect === FocusEffectEnum.BORDER) {
                tileable.focusEffects = {
                    border: new PrimaryBorderEffect({
                        name: 'border',
                        opacity: focused ? 1.0 : 0.0,
                    }),
                };
                tileable.add_effect(tileable.focusEffects.border);
            }
        }

        removeUnFocusEffect(tileable, effect) {
            if (!tileable || !tileable.focusEffects) return;
            tileable.remove_all_transitions();
            if (effect === FocusEffectEnum.DEFAULT) {
                tileable.remove_effect(tileable.focusEffects.dimmer);
            } else if (effect === FocusEffectEnum.BORDER) {
                tileable.remove_effect(tileable.focusEffects.border);
            }
            delete tileable.focusEffects;
        }

        setUnFocusEffect(tileable, effect, focused) {
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
                                onComplete: () => {},
                            }
                        );
                    }
                }

                /* if (tileable.get_effect('dimmer')) {
                    tileable.ease_property(
                        '@effects.dimmer.brightness',
                        focused
                            ? Clutter.Color.new(127, 127, 127, 255)
                            : Clutter.Color.new(10, 10, 10, 255),
                        {
                            duration: 2500,
                            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                            onComplete: () => {
                                GLib.idle_add(
                                    GLib.PRIORITY_DEFAULT_IDLE,
                                    () => {
                                        if (focused) {
                                            this.removeUnFocusEffect(
                                                tileable,
                                                effect
                                            );
                                        }
                                        return GLib.SOURCE_REMOVE;
                                    }
                                );
                            },
                        }
                    );
                } */
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
);

var ResizableBorderActor = GObject.registerClass(
    {
        Signals: {
            'drag-start': {},
        },
    },
    class ResizeableBorderActor extends St.Widget {
        _init() {
            super._init({ reactive: true, track_hover: true });
            this.set_background_color(
                new Clutter.Color({ red: 10, green: 10, blue: 10, alpha: 255 })
            );

            this.connect('event', (actor, event) => {
                let eventType = event.type();
                switch (eventType) {
                    case Clutter.EventType.BUTTON_PRESS:
                    case Clutter.EventType.TOUCH_BEGIN:
                        Me.msWindowManager.msResizeManager.startResize(
                            this.portionBorder
                        );
                        break;

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
);

var PrimaryBorderEffect = GObject.registerClass(
    {
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
    },
    class PrimaryBorderEffect extends Clutter.Effect {
        _init(params) {
            super._init(params);
            this._pipeline = null;
            this.color = new Cogl.Color();
        }

        vfunc_paint(paintContext) {
            let framebuffer = paintContext.get_framebuffer();
            let coglContext = framebuffer.get_context();
            let actor = this.get_actor();
            actor.continue_paint(paintContext);

            if (!this._pipeline) {
                this._pipeline = new Cogl.Pipeline(coglContext);
            }

            this.color.init_from_4ub(
                parseInt(Me.msThemeManager.primary.substring(1, 3), 16),
                parseInt(Me.msThemeManager.primary.substring(3, 5), 16),
                parseInt(Me.msThemeManager.primary.substring(5, 7), 16),
                parseInt((this.opacity.toFixed(2) * 255).toString(16), 16)
            );
            this.color.premultiply();
            this._pipeline.set_color(this.color);

            let alloc = actor.get_allocation_box();
            let width = 2;

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
);

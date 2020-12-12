/** JS imports */
const { round } = Math;

/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject, St, Meta } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    BaseTilingLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const {
    SetAllocation,
    Allocate,
    AllocatePreferredSize,
} = Me.imports.src.utils.compatibility;
const { getSettings } = Me.imports.src.utils.settings;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { Portion } = Me.imports.src.layout.msWorkspace.portion;

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
            super._init(msWorkspace, state);
            this.onGapChange();
        }

        get state() {
            return Object.assign({}, this._state, {
                mainPortion: this.mainPortion.state,
            });
        }
        onGapChange() {
            Me.logFocus('onGapChange', Me.layoutManager.someGap);
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
                        Me.logFocus('remove ResizableBorder');
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
        onDestroy() {
            this.borderContainer.destroy();
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
                        Me.logFocus('enter-event', event);
                        global.display.set_cursor(
                            Meta.Cursor.MOVE_OR_RESIZE_WINDOW
                        );
                        break;
                    case Clutter.EventType.LEAVE:
                        Me.logFocus('leave-event', event);
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

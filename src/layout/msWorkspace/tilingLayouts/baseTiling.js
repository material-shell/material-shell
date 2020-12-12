/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    SetAllocation,
    Allocate,
    AllocatePreferredSize,
} = Me.imports.src.utils.compatibility;
const { getSettings } = Me.imports.src.utils.settings;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { InfinityTo0 } = Me.imports.src.utils.index;

/* exported BaseTilingLayout */
var BaseTilingLayout = GObject.registerClass(
    class BaseTilingLayout extends Clutter.LayoutManager {
        _init(msWorkspace, state = {}) {
            this._state = Object.assign({}, this.constructor.state, state);
            this.icon = Gio.icon_new_for_string(
                `${Me.path}/assets/icons/tiling/${this.state.key}-symbolic.svg`
            );
            this.msWorkspace = msWorkspace;
            this.themeSettings = getSettings('theme');
            this.signals = [];
            this.registerToSignals();
            super._init();
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.afterInit();
                return GLib.SOURCE_REMOVE;
            });
        }

        afterInit() {
            this.onTileableListChanged(this.msWorkspace.tileableList, []);
        }

        get state() {
            return this._state;
        }

        set state(state) {
            this._state = state;
        }

        get tileableContainer() {
            return this.msWorkspace.msWorkspaceActor.tileableContainer;
        }

        get monitor() {
            return this.msWorkspace.monitor;
        }

        get tileableListVisible() {
            return this.msWorkspace.tileableList.filter((tileable) => {
                if (tileable === this.msWorkspace.appLauncher) {
                    return tileable === this.msWorkspace.tileableFocused;
                } else {
                    return tileable.visible;
                }
            });
        }

        registerToSignals() {
            this.signals.push(
                {
                    from: this.msWorkspace,
                    id: this.msWorkspace.connect(
                        'tileableList-changed',
                        (_, tileableList, oldTileableList) => {
                            this.onTileableListChanged(
                                tileableList,
                                oldTileableList
                            );
                        }
                    ),
                },
                {
                    from: this.msWorkspace,
                    id: this.msWorkspace.connect(
                        'tileable-focus-changed',
                        (_, tileable, oldTileable) => {
                            this.onFocusChanged(tileable, oldTileable);
                        }
                    ),
                },
                {
                    from: global.display,
                    id: global.display.connect(
                        'workareas-changed',
                        this.onWorkAreasChanged.bind(this)
                    ),
                }
            );
        }

        alterTileable(tileable) {
            if (
                tileable === this.msWorkspace.appLauncher &&
                tileable !== this.msWorkspace.tileableFocused
            ) {
                this.msWorkspace.appLauncher.hide();
            }
            if (!tileable.get_parent()) {
                this.tileableContainer.add_child(tileable);
            }
            /*
             * Function called automatically at the layout init or when a new window enter
             */
        }

        restoreTileable(tileable) {
            /*
             * Function called automatically at the layout destroy or when a window leave
             */
        }

        tileTileable(tileable, box, index, siblingLength) {
            /*
             * Function called automatically size of the container change
             */
        }

        resolveBox(box) {
            if (!box) {
                box = new Clutter.ActorBox();
                box.x2 = InfinityTo0(
                    this.tileableContainer.allocation.get_width()
                );
                box.y2 = InfinityTo0(
                    this.tileableContainer.allocation.get_height()
                );
            }

            return box;
        }

        tileAll(box) {
            box = this.resolveBox(box);

            this.tileableListVisible.forEach((tileable) => {
                if (tileable instanceof MsWindow && tileable.dragged) return;
                this.tileTileable(
                    tileable,
                    box || this.tileableContainer.allocation,
                    this.tileableListVisible.indexOf(tileable),
                    this.tileableListVisible.length
                );
                if (tileable instanceof MsWindow) {
                    tileable.updateMetaWindowPositionAndSize();
                }
            });
        }

        showAppLauncher() {
            let actor = this.msWorkspace.appLauncher;

            actor.visible = true;
            actor.set_scale(0.8, 0.8);
            actor.translation_x = actor.width * 0.1;
            actor.translation_y = actor.height * 0.1;
            actor.opacity = 0;
            actor.ease({
                scale_x: 1,
                scale_y: 1,
                translation_x: 0,
                translation_y: 0,
                opacity: 255,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            });
        }

        hideAppLauncher() {
            let actor = this.msWorkspace.appLauncher;
            actor.ease({
                scale_x: 0.8,
                scale_y: 0.8,
                translation_x: actor.width * 0.1,
                translation_y: actor.height * 0.1,
                opacity: 0,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    actor.set_scale(1, 1);
                    actor.translation_x = 0;
                    actor.translation_y = 0;
                    actor.opacity = 255;
                    actor.visible = false;
                },
            });
        }

        onTileableListChanged(tileableList, oldTileableList) {
            const enteringTileableList = tileableList.filter(
                (tileable) => !oldTileableList.includes(tileable)
            );
            const leavingTileableList = oldTileableList.filter(
                (tileable) =>
                    !tileableList.includes(tileable) &&
                    Me.msWindowManager.msWindowList.includes(tileable)
            );

            enteringTileableList.forEach((tileable) => {
                this.alterTileable(tileable);
            });
            leavingTileableList.forEach((tileable) => {
                this.restoreTileable(tileable);
            });
            if (
                this.msWorkspace.appLauncher.visible &&
                this.msWorkspace.tileableFocused !==
                    this.msWorkspace.appLauncher
            ) {
                this.hideAppLauncher();
            }

            this.tileAll();

            this.layout_changed();
        }

        onWorkAreasChanged() {
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.monitor.index
            );
        }

        onFocusChanged(tileable, oldTileable) {
            if (tileable === this.msWorkspace.appLauncher) {
                this.tileAll();
                GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                    this.showAppLauncher();
                    return GLib.SOURCE_REMOVE;
                });
            } else if (oldTileable === this.msWorkspace.appLauncher) {
                this.hideAppLauncher();
                this.tileAll();
            }
        }

        animateSetPosition(actor, x, y) {
            if (actor.dragged) return;
            const { x: oldX, y: oldY } = actor;
            actor.set_position(x, y);
            if (actor.metaWindow && actor.metaWindow.fullscreen) {
                return;
            }
            actor.translation_x = oldX - x;
            actor.translation_y = oldY - y;

            actor.ease({
                translation_x: 0,
                translation_y: 0,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            });
        }

        animateSetSize(actor, width, height) {
            const { width: oldWidth, height: oldHeight } = actor;
            actor.set_size(width, height);
            if (actor.metaWindow && actor.metaWindow.fullscreen) {
                return;
            }
            actor.scale_x = oldWidth / width;
            actor.scale_y = oldHeight / height;

            actor.ease({
                scale_x: 1.0,
                scale_y: 1.0,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            });
        }

        getWorkspaceBounds() {
            const box = this.msWorkspace.msWorkspaceActor.tileableContainer
                .allocation;
            return {
                x: 0,
                y: 0,
                width: box.get_width(),
                height: box.get_height(),
            };
        }

        applyGaps(x, y, width, height, screenGap, gap) {
            // Reduces box size according to gap setting
            gap = gap || Me.layoutManager.gap;
            if (screenGap == undefined) {
                screenGap = Me.layoutManager.useScreenGap
                    ? Me.layoutManager.screenGap
                    : gap;
            }

            if (
                (!gap && !screenGap) ||
                // Never apply gaps if App Launcher is the only tileable
                this.msWorkspace.tileableList.length < 2
            ) {
                return { x, y, width, height };
            }
            const bounds = this.getWorkspaceBounds();
            const edgeGap = screenGap;
            const halfGap = gap / 2;

            if (x === bounds.x) {
                // box is at screen left edge
                x += edgeGap;
                width -= edgeGap;
            } else {
                x += halfGap;
                width -= halfGap;
            }
            if (y === bounds.y) {
                // box is at screen top edge
                y += edgeGap;
                height -= edgeGap;
            } else {
                y += halfGap;
                height -= halfGap;
            }
            if (x + width === bounds.x + bounds.width) {
                // box is at screen right edge
                width -= edgeGap;
            } else {
                width -= halfGap;
            }
            if (y + height === bounds.y + bounds.height) {
                // box is at screen bottom edge
                height -= edgeGap;
            } else {
                height -= halfGap;
            }

            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (width < 1) width = 1;
            if (height < 1) height = 1;

            return { x, y, width, height };
        }

        buildQuickWidget() {
            // return a widget to add to the panel
        }

        vfunc_get_preferred_width(container, forHeight) {
            return [-1, -1];
        }

        vfunc_get_preferred_height(container, forWidth) {
            return [-1, -1];
        }

        vfunc_allocate(container, box, flags) {
            this.tileAll(box);
            container.get_children().forEach((actor) => {
                if (this.msWorkspace.tileableList.includes(actor)) {
                    AllocatePreferredSize(actor, flags);
                } else {
                    Allocate(actor, box, flags);
                }
            });
        }

        onDestroy() {
            this.signals.forEach((signal) => {
                try {
                    signal.from.disconnect(signal.id);
                } catch (error) {
                    Me.log(
                        `Failed to disconnect signal ${signal.id} from ${
                            signal.from
                        } ${
                            signal.from.constructor.name
                        } ${signal.from.toString()}  `
                    );
                }
            });
            if (!Me.disableInProgress) {
                this.msWorkspace.tileableList.forEach((tileable) => {
                    this.restoreTileable(tileable);
                });
            }
        }
    }
);

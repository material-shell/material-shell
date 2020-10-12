/** Gnome libs imports */
const { Clutter, GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { BaseContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.baseContainer;
const { BaseTilingLayout } = Me.imports.src.layout.msWorkspace.tilingLayouts.baseTiling;
const { SimpleHorizontalContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.simpleHorizontal;
const { SimpleVerticalContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.simpleVertical;

/* exported I3wmLayout */
var I3wmLayout = GObject.registerClass(
    class I3wmLayout extends BaseTilingLayout {
        _init(msWorkspace) {
            super._init(msWorkspace);

            this.defaultContainer = SimpleHorizontalContainer;

            const Container = this.defaultContainer;
            this.container = new Container(this);
        }

        setTilingContainer(container) {
            const tileableFocused = this.msWorkspace.tileableFocused;

            this.changeTileableContainer(tileableFocused, container);
        }

        getFocusedContainer() {
            return this.container.getTileableContainer(this.msWorkspace.tileableFocused);
        }

        changeTileableContainer(tileable, container) {
            if (this.container.isFirstTileable(tileable, true)) {
                container.contained = this.container.contained;
                this.container = container;
                this.layout_changed();

                return;
            }

            this.container.changeTileableContainer(tileable, container);
        }

        alterTileable(tileable) {
            super.alterTileable(tileable);

            if (
                tileable !== this.msWorkspace.appLauncher ||
                tileable === this.msWorkspace.tileableFocused
            ) {
/*                 if (this.msWorkspace.precedentFocusedTileable) {
                    this.container.addTileableAfter(tileable, this.msWorkspace.precedentFocusedTileable);
                } else { */
                    this.container.addTileableLast(tileable);
                /* } */
            }
        }

        restoreTileable(tileable) {
            super.restoreTileable(tileable);

            this.container.removeTileable(tileable);
        }

        showAppLauncher() {
            super.showAppLauncher();

            this.container.addTileableLast(this.msWorkspace.appLauncher);
        }

        hideAppLauncher() {
            super.hideAppLauncher();

            this.container.removeTileable(this.msWorkspace.appLauncher);
        }

        defineContainerBoxes(box) {
            this.container.defineContainerBoxes({
                x: box.x1,
                y: box.y1,
                width: box.get_width(),
                height: box.get_height(),
            });
        }

        tileAll(box) {
            if (!box) {
                box = new Clutter.ActorBox();
                box.x2 = this.tileableContainer.allocation.get_width();
                box.y2 = this.tileableContainer.allocation.get_height();
            }
            box = box || this.tileableContainer.allocation;

            if (box) {
                this.defineContainerBoxes(box);
                super.tileAll(box);

                log('--------------');
                const desc = function (container, space) {
                    log(space, container.constructor.key);

                    for (let index = 0; index < container.contained.length; index++) {
                        const tileable = container.contained[index];

                        if (tileable instanceof BaseContainer) {
                            desc(tileable, space + '  ');
                        } else {
                            log(space, 'element');
                        }
                    }
                };
                desc(this.container, '');
            }
        }

        tileTileable(tileable) {
            this.container.containerTileTileable(tileable);
        }

        moveTileableLeft(tileable, tileableList) {
            if (!this.container.containsTileable(tileable)) {
                return tileableList;
            }

            if (tileableList.length > 0 && tileableList[0] === tileable) {
                this.container.removeTileable(tileable);
                this.container.addTileableLast(tileable);

                tileableList.splice(0, 1);
                tileableList.push(tileable);

                return tileableList;
            }

            return this.container.moveTileableLeft(tileable, tileableList);
        }

        moveTileableRight(tileable, tileableList) {
            if (!this.container.containsTileable(tileable)) {
                return tileableList;
            }

            if (tileableList.length === 1) {
                const oldContainer = this.container;
                const Container = this.defaultContainer;

                this.container = new Container(this);
                this.container.addTileableFirst(oldContainer.contained[0]);

                return tileableList;
            }

            if (tileableList.length > 0 && (
                (tileableList[tileableList.length - 1] === tileable) ||
                (tileableList[tileableList.length - 1] === this.msWorkspace.appLauncher && tileableList[tileableList.length - 2] === tileable)
            ) && !(this.container.contained[this.container.contained.length - 1] instanceof BaseContainer))
            {
                this.container.removeTileable(tileable);
                this.container.addTileableFirst(tileable);

                tileableList.splice(tileableList.length - 1, 1);
                tileableList.unshift(tileable);

                return tileableList;
            }

            return this.container.moveTileableRight(tileable, tileableList);
        }
    }
);

I3wmLayout.key = 'i3wm';

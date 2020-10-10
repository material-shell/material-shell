/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/* exported BaseTilingLayout */
class BaseContainer {
    constructor(layout) {
        this.layout = layout;

        this.contained = [];

        this.definingBoxes = false;

        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    get box() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        };
    }

    applyGaps(x, y, width, height) {
        if (this.definingBoxes) {
            return { x, y, width, height };
        }

        return this.layout.applyGaps(x, y, width, height);
    }

    defineContainerBoxes(box) {
        this.x = box.x;
        this.y = box.y;
        this.width = box.width;
        this.height = box.height;
        this.definingBoxes = true;

        for (let index = 0; index < this.contained.length; index++) {
            const possibleContainer = this.contained[index];
            let subBox = {};

            if (possibleContainer instanceof BaseContainer) {
                this.tileTileable(subBox, this.box, index, this.contained.length);

                possibleContainer.defineContainerBoxes(subBox);
            }
        }

        this.definingBoxes = false;
    }

    containsContainers() {
        for (const possibleTile of this.contained) {
            if (possibleTile instanceof BaseContainer) {
                return true;
            }
        }

        return false;
    }

    containsTileable(tileable) {
        for (const possibleTile of this.contained) {
            if (
                (possibleTile === tileable) ||
                (possibleTile instanceof BaseContainer && possibleTile.containsTileable(tileable))
            ) {
                return true;
            }
        }

        return false;
    }

    isFirstTileable(tileable) {
        if (this.contained.length === 0) {
            return;
        }

        const firstTilable = this.contained[0];

        if (firstTilable instanceof BaseContainer) {
            return firstTilable.isFirstTileable(tileable);
        }

        return firstTilable === tileable;
    }

    isLastTileable(tileable) {
        return this.contained[0] === tileable;
    }

    addTileable(tileable) {
        for (let index = this.contained.length - 1; index >= 0; index--) {
            const possibleContainer = this.contained[index];

            if (possibleContainer instanceof BaseContainer) {
                possibleContainer.addTileable(tileable);

                return;
            }
        }

        this.contained.push(tileable);
    }

    removeTileable(tileable) {
        for (let index = 0; index < this.contained.length; index++) {
            const possibleTile = this.contained[index];

            if (possibleTile === tileable) {
                this.contained.splice(index, 1);

                return;
            }

            if (possibleTile instanceof BaseContainer && possibleTile.containsTileable(tileable)) {
                possibleTile.removeTileable(tileable);

                if (possibleTile.contained.length === 0) {
                    this.contained.splice(index, 1);
                }

                return;
            }
        }
    }

    containerTileTileable(tileable) {
        for (let index = 0; index < this.contained.length; index++) {
            const possibleTile = this.contained[index];

            if (possibleTile === tileable) {
                this.tileTileable(tileable, this.box, index, this.contained.length);

                return;
            }

            if (possibleTile instanceof BaseContainer && possibleTile.containsTileable(tileable)) {
                possibleTile.containerTileTileable(tileable);

                return;
            }
        }
    }

    moveTileableLeft(tileable) {
        for (let index = 0; index < this.contained.length; index++) {
            const possibleTile = this.contained[index];

            if (possibleTile === tileable) {
                this.tileTileable(tileable, this.box, index, this.contained.length);

                return;
            }

            if (possibleTile instanceof BaseContainer && possibleTile.containsTileable(tileable)) {
                possibleTile.containerTileTileable(tileable);

                return;
            }
        }
    }
};

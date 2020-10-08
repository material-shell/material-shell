/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/* exported BaseTilingLayout */
class BaseContainer {
    constructor(layout) {
        this.layout = layout;

        this.validatedContained = [];
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

            if (possibleContainer instanceof BaseContainer) {
                this.tileTileable(possibleContainer, this.box, index, this.contained.length);
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

    checkContained() {
        for (let index = 0; index < this.contained.length; index++) {
            const contained = this.contained[index];

            if (contained instanceof BaseContainer) {
                contained.checkContained();

                if (contained.contained.length === 0) {
                    this.contained.splice(index--, 1);
                }

                continue;
            }

            if (!this.validatedContained.includes(contained)) {
                this.contained.splice(index--, 1);
            }
        }

        this.validatedContained = [];
    }

    addDeepTileable(tileable) {
        for (let i = this.contained.length - 1; i >= 0; i--) {
            const possibleContainer = this.contained[i];

            if (possibleContainer instanceof BaseContainer) {
                possibleContainer.addDeepTileable(tileable);

                return;
            }
        }

        this.contained.push(tileable);
        this.validatedContained.push(tileable);
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
            }
        }
    }
};

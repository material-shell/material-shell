/** Gnome libs imports */
const { Gio, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/* exported BaseContainer */
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
        for (const possibleTileable of this.contained) {
            if (possibleTileable instanceof BaseContainer) {
                return true;
            }
        }

        return false;
    }

    containsTileable(tileable, notDeep) {
        for (const possibleTileable of this.contained) {
            if (
                (possibleTileable === tileable) ||
                (possibleTileable instanceof BaseContainer && !notDeep && possibleTileable.containsTileable(tileable))
            ) {
                return true;
            }
        }

        return false;
    }

    isFirstTileable(tileable, notDeep) {
        if (this.contained.length === 0) {
            return false;
        }

        const firstTilable = this.contained[0];

        if (!notDeep && firstTilable instanceof BaseContainer) {
            return firstTilable.isFirstTileable(tileable);
        }

        return firstTilable === tileable;
    }

    isLastTileable(tileable, notDeep) {
        if (this.contained.length === 0) {
            return false;
        }

        const lastTilable = this.contained[this.contained.length - 1];

        if (!notDeep && lastTilable instanceof BaseContainer) {
            return lastTilable.isLastTileable(tileable);
        }

        return lastTilable === tileable;
    }

    addTileableFirst(tileable) {
        this.contained.unshift(tileable);
    }

    addTileableAfter(tileable, referencedTileable) {
        for (let index = this.contained.length - 1; index >= 0; index--) {
            const possibleReference = this.contained[index];

            if (possibleContainer instanceof BaseContainer) {
                possibleContainer.addTileableAfter(tileable, referencedTileable);

                return;
            }

            if (possibleReference === referencedTileable) {
                this.contained.splice(index, 0, tileable);

                return;
            }
        }
    }

    addTileableLast(tileable) {
        for (let index = this.contained.length - 1; index >= 0; index--) {
            const possibleContainer = this.contained[index];

            if (possibleContainer instanceof BaseContainer) {
                possibleContainer.addTileableLast(tileable);

                return;
            }
        }

        this.contained.push(tileable);
    }

    removeTileable(tileable) {
        for (let index = 0; index < this.contained.length; index++) {
            const possibleTileable = this.contained[index];

            if (possibleTileable === tileable) {
                this.contained.splice(index, 1);

                return;
            }

            if (possibleTileable instanceof BaseContainer && possibleTileable.containsTileable(tileable)) {
                possibleTileable.removeTileable(tileable);

                if (possibleTileable.contained.length === 0) {
                    this.contained.splice(index, 1);

                    return;
                }

                // If the sub container contains only one tileable and it is a container,
                // replace our sub container by its contained container.
                if (possibleTileable.contained.length === 1 && possibleTileable.contained[0] instanceof BaseContainer) {
                    this.contained[index] = possibleTileable.contained[0];
                }

                return;
            }
        }
    }

    getTileableContainer(tileable) {
        if (this.containsTileable(tileable, true)) {
            return this;
        }

        for (let index = 0; index < this.contained.length; index++) {
            const possibleContainer = this.contained[index];

            if (possibleContainer instanceof BaseContainer && possibleContainer.containsTileable(tileable)) {
                return possibleContainer.getTileableContainer(tileable);
            }
        }
    }

    changeTileableContainer(tileable, container) {
        // The top tileable of a container cannot be contained again.
        if (this.contained.length > 0 && this.contained[0] === tileable) {
            return;
        }

        for (let index = 0; index < this.contained.length; index++) {
            const possibleTileable = this.contained[index];

            if (possibleTileable === tileable) {
                this.contained[index] = container;
                container.addTileableLast(tileable);

                return;
            }

            if (possibleTileable instanceof BaseContainer && possibleTileable.containsTileable(tileable)) {
                if (possibleTileable.isFirstTileable(tileable, true)) {
                    container.contained = possibleTileable.contained;
                    this.contained[index] = container;
                    this.layout.layout_changed();

                    return;
                }

                possibleTileable.changeTileableContainer(tileable, container);

                return;
            }
        }
    }

    containerTileTileable(tileable) {
        for (let index = 0; index < this.contained.length; index++) {
            const possibleTileable = this.contained[index];

            if (possibleTileable === tileable) {
                this.tileTileable(tileable, this.box, index, this.contained.length);

                return;
            }

            if (possibleTileable instanceof BaseContainer && possibleTileable.containsTileable(tileable)) {
                possibleTileable.containerTileTileable(tileable);

                return;
            }
        }
    }

    moveTileableLeft(tileable, tileableList) {
        const tileableIndex = tileableList.indexOf(tileable);

        if (tileableIndex === -1) return tileableList;

        if (!this.containsTileable(tileable, true)) {
            for (let index = 0; index < this.contained.length; index++) {
                const possibleContainer = this.contained[index];

                if ((possibleContainer instanceof BaseContainer) && possibleContainer.containsTileable(tileable)) {
                    if (possibleContainer.contained[0] === tileable) {
                        possibleContainer.contained.shift();
                        const removeContainer = possibleContainer.contained.length === 0;

                        this.contained.splice(index, removeContainer, tileable);

                        return tileableList;
                    }

                    return possibleContainer.moveTileableLeft(tileable, tileableList);
                }
            }

            return tileableList;
        }

        if (tileableIndex > 0 && tileable != this.layout.msWorkspace.appLauncher) {
            const containedIndex = this.contained.indexOf(tileable);
            const possibleContainer = this.contained[containedIndex - 1];

            if (possibleContainer instanceof BaseContainer) {
                this.removeTileable(tileable);

                possibleContainer.addTileableLast(tileable);

                return tileableList;
            }

            this.contained[containedIndex - 1] = tileable;
            this.contained[containedIndex] = possibleContainer;

            tileableList[tileableIndex - 1] = tileable;
            tileableList[tileableIndex] = possibleContainer;
        }

        return tileableList;
    }

    moveTileableRight(tileable, tileableList) {
        const tileableIndex = tileableList.indexOf(tileable);

        if (tileableIndex === -1) return tileableList;

        if (!this.containsTileable(tileable, true)) {
            for (let index = 0; index < this.contained.length; index++) {
                const possibleContainer = this.contained[index];

                if ((possibleContainer instanceof BaseContainer) && possibleContainer.containsTileable(tileable)) {
                    if (possibleContainer.contained[possibleContainer.contained.length - 1] === tileable) {
                        possibleContainer.contained.pop();
                        const removeContainer = possibleContainer.contained.length === 0;

                        this.contained.splice(index + 1, removeContainer, tileable);

                        return tileableList;
                    }

                    return possibleContainer.moveTileableRight(tileable, tileableList);
                }
            }

            return tileableList;
        }

        if (tileableIndex < tileableList.length && tileable != this.layout.msWorkspace.appLauncher) {
            const containedIndex = this.contained.indexOf(tileable);
            const possibleContainer = this.contained[containedIndex + 1];

            if (possibleContainer instanceof BaseContainer) {
                this.removeTileable(tileable);

                possibleContainer.addTileableFirst(tileable);

                return tileableList;
            }

            this.contained[containedIndex] = possibleContainer;
            this.contained[containedIndex + 1] = tileable;

            tileableList[tileableIndex] = possibleContainer;
            tileableList[tileableIndex + 1] = tileable;
        }

        return tileableList;
    }
};

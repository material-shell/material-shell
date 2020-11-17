/** Gnome libs imports */
const { GObject, Clutter, St } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const MIN_BASIS_RATIO = 0.10;

class Portion {
    constructor(basis = 100, vertical = false) {
        this.basis = basis;
        this.vertical = vertical;
        this.children = [];
        this.borders = [];
    }

    get state() {
        return {
            basis: this.basis,
            vertical: this.vertical,
            children: this.children.map((child) => child.state),
        };
    }

    set state(state) {
        this.basis = state.basis;
        this.vertical = state.vertical;
        this.children = state.children.map((childState) => {
            const child = new Portion();
            child.state = childState;

            return child;
        });

        this.updateBorders();
    }

    get portionLength() {
        return this.children.length
            ? this.children.reduce((sum, portion) => sum + portion.portionLength, 0)
            : 1;
    }

    get basis() {
        return this._basis;
    }

    set basis(value) {
        if (value < 0) {
            value = 0;
        }

        this._basis = value;
    }

    updateBorders() {
        this.borders = [];

        if (this.children < 2) {
            return;
        }

        for (let i = 0; i < this.children.length - 1; i++) {
            this.borders.push(new PortionBorder(this.children.slice(i, i + 2), this.vertical));
        }
    }

    hasPortion(portion) {
        for (let i = 0; i < this.children.length; i++) {
            const possiblePortion = this.children[i];

            if (possiblePortion === portion || (
                possiblePortion.children.length > 0 && possiblePortion.hasPortion(portion)
            )) {
                return true;
            }
        }

        return false;
    }

    insert(basis = 100, vertical) {
        if (vertical === undefined) {
            vertical = !this.vertical;
        }

        if (this.children.length === 0) {
            this.children.splice(0, 0, new Portion(basis, vertical));
        }

        this.children.splice(0, 0, new Portion(basis, vertical));
     
        this.updateBorders();
    }

    insertVertical(basis = 100) {
        this.insert(basis, true);
    }

    insertHorizontal(basis = 100) {
        this.insert(basis, false);
    }

    push(basis = 100, vertical) {
        if (vertical === undefined) {
            vertical = !this.vertical;
        }

        if (this.children.length === 0) {
            this.children.push(new Portion(basis, vertical));
        }

        this.children.push(new Portion(basis, vertical));
     
        this.updateBorders();
    }

    pushVertical(basis = 100) {
        this.push(basis, true);
    }

    pushHorizontal(basis = 100) {
        this.push(basis, false);
    }

    shift() {
        // If this portion has less than 3 portions, it means that when
        // want to delete one, this portion describes the space.
        if (this.portionLength <= 2) {
            this.children = [];
            this.borders = [];

            return;
        }

        let child = this.children[0];

        if (child) {
            if (child.children.length) {
                child.shift();
            } else {
                this.children.shift();
            }
        }

        this.updateBorders();
    }

    pop() {
        // If this portion has less than 3 portions, it means that when
        // want to delete one, this portion describes the space.
        if (this.portionLength <= 2) {
            this.children = [];
            this.borders = [];

            return;
        }

        let child = this.children[this.children.length - 1];

        if (child) {
            if (child.children.length) {
                child.pop();
            } else {
                this.children.pop();
            }
        }
     
        this.updateBorders();
    }

    isBorderInSubPortion(index, after = false) {
        let portionIndex = 0;

        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];

            if (portionIndex === index) {
                if (after || i - after < 0 || portion.children.length === 0) {
                    return false;
                }
            }

            if (portion.portionLength + portionIndex > index) {
                if (portion.children.length === 0) {
                    return false;
                }

                if (after) {
                    if (portionIndex === index) {
                        if (portion.children[0].portionLength > 1) {
                            return portion.children[0].isBorderInSubPortion(0, after);
                        } else {
                            return false;
                        }
                    }

                    return true;
                }

                const lastPortion = portion.children[portion.children.length - 1];
                const portionIndexUntilLast = portion.portionLength + portionIndex 
                    - lastPortion.portionLength;

                if (index > portionIndexUntilLast) {
                    if (lastPortion.portionLength > 1) {
                        return lastPortion.isBorderInSubPortion(index- portionIndexUntilLast, after);
                    } else {
                        return false;
                    }
                }

                return true;
            }

            portionIndex += portion.portionLength;
        }

        return false;
    }
    
    getBorderForIndex(index, vertical = false, after = false) {
        let portionIndex = 0;

        if (index >= this.portionLength) {
            return;
        }

        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];

            if (portionIndex === index) {
                if (i - after < 0) {
                    return;
                }
            }

            if (portion.portionLength + portionIndex > index) {
                if (this.vertical === vertical && !portion.isBorderInSubPortion(index - portionIndex, after)) {
                    return this.borders[i - after];
                }

                return portion.getBorderForIndex(index - portionIndex, vertical, after);
            }

            portionIndex += portion.portionLength;
        }
    }

    getRatioForIndex(index, ratio={ x: 0, y: 0, width: 1, height: 1 }) {
        let portionIndex = 0;

        if (index >= this.portionLength) {
            return;
        }

        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];

            if (portionIndex === index && portion.children.length === 0) {
                return this.getRatioForPortion(portion, ratio);
            }

            if (portion.portionLength + portionIndex > index) {
                return portion.getRatioForIndex(
                    index - portionIndex, 
                    this.getRatioForPortion(portion, ratio)
                );
            }

            portionIndex += portion.portionLength;
        }

        return ratio;
    }

    getRatioForPortion(portion, ratio={ x: 0, y: 0, width: 1, height: 1 }) {
        const basisTotal = this.children.reduce(
            (sum, child) => sum + child.basis, 
            0
        );
        let basisSum = 0;

        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            const hasPortion = child.hasPortion(portion);

            if (child !== portion && !hasPortion) {
                basisSum += child.basis;

                continue;
            }

            const [ position, size ] = this.vertical
                ? [ 'y', 'height' ]
                : [ 'x', 'width' ];
            
            ratio[position] += (ratio[size] * (basisSum / basisTotal));
            ratio[size] *= (child.basis / basisTotal);

            if (hasPortion) {
                return child.getRatioForPortion(
                    portion, 
                    ratio
                );
            }

            break;
        }

        return ratio;
    }

    convert() {
        this.vertical = !this.vertical;
        
        this.children.forEach(
            (portion) => portion.convert()
        );

        this.borders.forEach(
            (border) => border.convert()
        );
    }
};


class PortionBorder {
    constructor(portions, vertical = false) {
        this.portions = portions;
        this.vertical = vertical;

        this.lastBasis = this.portions.map((portion) => portion.basis);
    }

    convert() {
        this.vertical = !this.vertical;
    }

    updateBasis(basisRatio, after = false) {
        if (basisRatio < 0) {
            basisRatio = 0;
        }

        basisRatio = basisRatio.toFixed(2);

        const [i, j] = [after + 0, (after + 1) % 2];
        const basisSum = this.portions[i].basis + this.portions[j].basis;

        this.portions[i].basis *= basisRatio;
        this.portions[j].basis = basisSum - this.portions[i].basis;

        if (this.portions[i].basis / basisSum < MIN_BASIS_RATIO) {
            this.portions[i].basis = MIN_BASIS_RATIO * basisSum;
            this.portions[j].basis = basisSum - this.portions[i].basis;
        } else if (this.portions[j].basis / basisSum < MIN_BASIS_RATIO) {
            this.portions[j].basis = MIN_BASIS_RATIO * basisSum;
            this.portions[i].basis = basisSum - this.portions[j].basis;
        }
    }
}
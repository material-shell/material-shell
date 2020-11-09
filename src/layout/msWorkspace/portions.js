/** Gnome libs imports */
const { GObject, Clutter, St } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

class BasePortion {
    constructor(basis = 100) {
        this.basis = basis;
        this.children = [];
    }

    get portionLength() {
        return this.children.length
            ? this.children.reduce((sum, portion) => sum + portion.portionLength, 0)
            : 1;
    }

    insertVertical(basis = 100) {
        this.children.splice(0, 0, new VerticalPortion(basis));
    }

    insertHorizontal(basis = 100) {
        this.children.splice(0, 0, new HorizontalPortion(basis));
    }

    pushVertical(basis = 100) {
        this.children.push(new VerticalPortion(basis));
    }

    pushHorizontal(basis = 100) {
        this.children.push(new HorizontalPortion(basis));
    }

    shift() {
        // If this portion has less than 3 portions, it means that when
        // want to delete one, this portion describes the space.
        if (this.portionLength <= 2) {
            this.children = [];

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
    }

    pop() {
        // If this portion has less than 3 portions, it means that when
        // want to delete one, this portion describes the space.
        if (this.portionLength <= 2) {
            this.children = [];

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
    }
    
    getPortionAtIndex(index) {
        let portionIndex = 0;

        if (index >= this.portionLength) {
            return;
        }

        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];

            if (portionIndex === index && portion.children.length === 0) {
                return portion;
            }

            if (portion.portionLength + portionIndex > index) {
                return portion.getPortionAtIndex(index - portionIndex);
            }

            portionIndex += portion.portionLength;
        }

        return this;
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

    convertToHorizontal() {
        const horizontal = new HorizontalPortion(this.basis);
        horizontal.children = this.children.map(
            (portion) => portion.convertToVertical()
        );

        this.basis = 100;
        this.children = [];

        return horizontal;
    }

    convertToVertical() {
        const vertical = new VerticalPortion(this.basis);
        vertical.children = this.children.map(
            (portion) => portion.convertToHorizontal()
        );

        this.basis = 100;
        this.children = [];

        return vertical;
    }
};

const VerticalPortion = class VerticalPortion extends BasePortion {
    insert(basis = 100) {
        if (this.children.length === 0) {
            this.insertHorizontal(basis);
        }

        this.insertHorizontal(basis);
    }
    
    push(basis = 100) {
        if (this.children.length === 0) {
            this.pushHorizontal(basis);
        }

        this.pushHorizontal(basis);
    }

    getRatioForPortion(portion, ratio={ x: 0, y: 0, width: 1, height: 1 }) {
        const basisTotal = this.children.reduce(
            (sum, portion) => sum + portion.basis, 
            0
        );
        let basisSum = 0;

        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];

            if (child !== portion) {
                basisSum += child.basis;

                continue;
            }
            
            ratio.y = ratio.y + (ratio.height * (basisSum / basisTotal));
            ratio.height = ratio.height * (portion.basis / basisTotal);

            break;
        }

        return ratio;
    }
};

const HorizontalPortion = class HorizontalPortion extends BasePortion {
    insert(basis = 100) {
        if (this.children.length === 0) {
            this.insertVertical(basis);
        }
        
        this.insertVertical(basis);
    }
    
    push(basis = 100) {
        if (this.children.length === 0) {
            this.pushVertical(basis);
        }

        this.pushVertical(basis);
    }

    getRatioForPortion(portion, ratio={ x: 0, y: 0, width: 1, height: 1 }) {
        const basisTotal = this.children.reduce(
            (sum, portion) => sum + portion.basis, 
            0
        );
        let basisSum = 0;

        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];

            if (child !== portion) {
                basisSum += child.basis;

                continue;
            }
            
            ratio.x = ratio.x + (ratio.width * (basisSum / basisTotal));
            ratio.width = ratio.width * (portion.basis / basisTotal);

            break;
        }

        return ratio;
    }
};
/** Gnome libs imports */
const { GObject, Clutter, St } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

class Portion {
    constructor(basis = 100, vertical = false) {
        this.basis = basis;
        this.vertical = vertical;
        this.children = [];
        this.borders = [];
    }

    get portionLength() {
        return this.children.length
            ? this.children.reduce((sum, portion) => sum + portion.portionLength, 0)
            : 1;
    }

    updateBorders() {
        this.borders = [];

        if (this.children < 2) {
            return;
        }

        for (let i = 0; i < this.children.length - 1; i++) {
            this.borders.push(new PortionBorder(this.children.slice(i, i + 1), this.vertical));
        }
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
    
    getBorderForIndex(index, after = false) {
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
                
                return this.borders[i - after];
            }

            if (portion.portionLength + portionIndex > index) {
                return portion.getBorderForIndex(index - portionIndex, after);
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

            const [ position, size ] = this.vertical
                ? [ 'y', 'height' ]
                : [ 'x', 'width' ];
            
            ratio[position] = ratio[position] + (ratio[size] * (basisSum / basisTotal));
            ratio[size] = ratio[size] * (portion.basis / basisTotal);

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
            (border) => portion.convert()
        );
    }
};


class PortionBorder {
    constructor(portions, vertical = false) {
        this.portions = portions;
        this.vertical = vertical;
    }

    convert() {
        this.vertical = !this.vertical;
    }
}
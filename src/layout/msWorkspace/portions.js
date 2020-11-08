/** Gnome libs imports */
const { GObject, Clutter, St } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

class BasePortion {
    constructor(basis = 100) {
        this.basis = basis;
        this.children = [];
        this.box = new Clutter.ActorBox();
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

    split() {
        this.push();
        this.push();
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

            if (portion.portionLength + i > index) {
                return portion.getPortionAtIndex(index - i);
            }

            portionIndex += portion.portionLength;
        }
    }

    setPositionAndSize(box) {
        this.box = box;

        this.setChildrenPositionAndSize();
    }
};

const VerticalPortion = class VerticalPortion extends BasePortion {
    insert(basis = 100) {
        this.insertHorizontal(basis);
    }
    
    push(basis = 100) {
        this.pushHorizontal(basis);
    }

    setChildrenPositionAndSize() {
        const basisSum = this.children.reduce(
            (sum, portion) => sum + portion.basis, 
            0
        );
        let verticalBasisSum = 0;

        this.children.forEach((portion) => {
            const box = new Clutter.ActorBox();
            
            box.x1 = this.box.x1;
            box.y1 = (verticalBasisSum * this.box.get_height()) / basisSum;
            box.x2 = this.box.get_width();
            box.y2 = this.box.get_height() * portion.basis / basisSum;

            verticalBasisSum += portion.basis;
            portion.setPositionAndSize(box);
        });
    }
};

const HorizontalPortion = class HorizontalPortion extends BasePortion {
    insert(basis = 100) {
        this.insertVertical(basis);
    }
    
    push(basis = 100) {
        this.pushVertical(basis);
    }

    setChildrenPositionAndSize() {
        const basisSum = this.children.reduce(
            (sum, portion) => sum + portion.basis, 
            0
        );
        let horizontalBasisSum = 0;

        this.children.forEach((portion) => {
            const box = new Clutter.ActorBox();
            
            box.x1 = (horizontalBasisSum * this.box.get_width()) / basisSum;
            box.y1 = this.box.y1;
            box.x2 = this.box.get_width() * portion.basis / basisSum;
            box.y2 = this.box.get_height();

            horizontalBasisSum += portion.basis;
            portion.setPositionAndSize(box);
        });
    }
};
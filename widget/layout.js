const { Clutter, GObject, St } = imports.gi;

/* exported Column */
var Column = GObject.registerClass(
    class Column extends St.BoxLayout {
        _init(params = {}) {
            let children = params.children;
            delete params.children;
            Object.assign(params, {
                vertical: true
            });
            super._init(params);
            if (children) {
                children.forEach(child => {
                    this.add_child(child);
                });
            }
        }
    }
);

/* exported Row */
var Row = GObject.registerClass(
    class Row extends St.BoxLayout {
        _init(params = {}) {
            let children = params.children;
            delete params.children;
            Object.assign(params, {
                vertical: false
            });
            super._init(params);
            if (children) {
                children.forEach(child => {
                    this.add_child(child);
                });
            }
        }
    }
);

/* exported Stack */
var Stack = GObject.registerClass(
    class Stack extends St.Widget {
        _init(params = {}) {
            let children = params.children;
            delete params.children;
            Object.assign(params, {
                layout_manager: new Clutter.BinLayout()
            });
            super._init(params);
            if (children) {
                children.forEach(child => {
                    this.add_child(child);
                });
            }
        }
    }
);

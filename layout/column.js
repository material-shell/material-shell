const { Clutter, GObject, St, Shell, Gio } = imports.gi;
const Params = imports.misc.params;

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

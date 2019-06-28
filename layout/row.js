const { Clutter, GObject, St, Shell, Gio } = imports.gi;
const Params = imports.misc.params;

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

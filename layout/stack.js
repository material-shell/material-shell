const { Clutter, GObject, St, Shell, Gio } = imports.gi;
const Params = imports.misc.params;

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

const { St, GObject } = imports.gi;

var AppPlaceholder = GObject.registerClass(
    class AppPlaceholder extends St.Widget {
        _init(app) {}
    }
);

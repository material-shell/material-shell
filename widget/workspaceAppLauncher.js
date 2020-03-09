const { Clutter, GObject, St, Shell, Gio } = imports.gi;

/* exported WorkspaceAppLauncher */
var WorkspaceAppLauncher = GObject.registerClass(
    class WorkspaceAppLauncher extends St.Bin {
        _init(msWorkspace) {
            super._init({});
        }
    }
);

/** Gnome libs imports */
const { Meta } = imports.gi;
const { WindowManager } = imports.ui.windowManager;

/* exported OverrideModule */
var OverrideModule = class OverrideModule {
    constructor() {
        this.overrideWindowManagerFunctions();
        this.orignalMetaWorkspaceOnPrimary =
            Meta.prefs_get_workspaces_only_on_primary;
        Meta.prefs_get_workspaces_only_on_primary = () => true;
    }

    destroy() {
        this.restoreWindowManagersFunctions();
        Meta.prefs_get_workspaces_only_on_primary = this.orignalMetaWorkspaceOnPrimary;
    }

    overrideWindowManagerFunctions() {
        this.windowManagersFunctionToRestore = [];
        let _shouldAnimate = WindowManager.prototype._shouldAnimate;
        WindowManager.prototype._shouldAnimate = function (_actor, _types) {
            return false;
        };
        this.windowManagersFunctionToRestore.push([
            WindowManager.prototype._shouldAnimate,
            _shouldAnimate,
        ]);
    }

    restoreWindowManagersFunctions() {
        this.windowManagersFunctionToRestore.forEach((functions) => {
            functions[0] = functions[1];
        });
    }
};

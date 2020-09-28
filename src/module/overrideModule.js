/** Gnome libs imports */
const { Meta } = imports.gi;
const { WindowManager } = imports.ui.windowManager;

/* exported OverrideModule */
var OverrideModule = class OverrideModule {
    constructor() {
        this.overrideWindowManagerFunctions();
        this.orignalMetaDynamicWorkspaces = Meta.prefs_get_dynamic_workspaces;
        this.orignalMetaWorkspaceOnPrimary =
            Meta.prefs_get_workspaces_only_on_primary;
        Meta.prefs_get_dynamic_workspaces = () => true;
        Meta.prefs_get_workspaces_only_on_primary = () => true;
    }

    destroy() {
        this.restoreWindowManagersFunctions();
        Meta.prefs_get_dynamic_workspaces = this.orignalMetaDynamicWorkspaces;
        Meta.prefs_get_workspaces_only_on_primary = this.orignalMetaWorkspaceOnPrimary;
    }

    overrideWindowManagerFunctions() {
        this.windowManagersFunctionToRestore = [];
        let _shouldAnimate = WindowManager.prototype._shouldAnimate;
        WindowManager.prototype._shouldAnimate = function (actor, types) {
            return false;
        };
        this.windowManagersFunctionToRestore.push([
            WindowManager.prototype._shouldAnimate,
            _shouldAnimate,
        ]);

        /**
         * The two following overrides are meant to prevent a shell crash when unmaximizing a window at the window creation time.
         * eg. Discord or Vscode
         * The crash occur when Main.wm._shellwm.completed_size_change is called from _sizeChangeWindow
         * To prevent this we make Main.wm believe that the window will animate then don't animate it then call Main.wm._shellwm.completed_size_change ourselve from the MsWindow.updateMetaWindowPositionAndSize
         */
        const _shouldAnimateActor = WindowManager.prototype._shouldAnimateActor;
        WindowManager.prototype._shouldAnimateActor = function () {
            let actor = arguments[0];
            let types = arguments[1];

            if (
                !actor ||
                this._skippedActors.delete(actor) ||
                !this._shouldAnimate() ||
                !actor.get_texture()
            ) {
                return false;
            }

            if (actor.manipulateByMs && !actor.completeIsRequested) {
                actor.completeIsRequested = true;
                return true;
            }
            return types.includes(actor.meta_window.get_window_type());
        };
        this.windowManagersFunctionToRestore.push([
            WindowManager.prototype._shouldAnimateActor,
            _shouldAnimateActor,
        ]);

        const _prepareAnimationInfo = WindowManager.prototype._prepareAnimationInfo;
        WindowManager.prototype._prepareAnimationInfo = function () {
            let actor = arguments[1];
            if (!actor) return;
            if (actor.manipulateByMs) {
                delete actor.manipulateByMs;
                return;
            }
            return _prepareAnimationInfo.apply(this, arguments);
        };
        this.windowManagersFunctionToRestore.push([
            WindowManager.prototype._prepareAnimationInfo,
            _prepareAnimationInfo,
        ]);
    }

    restoreWindowManagersFunctions() {
        this.windowManagersFunctionToRestore.forEach((functions) => {
            functions[0] = functions[1];
        });
    }
};

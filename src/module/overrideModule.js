var WindowManager = imports.ui.windowManager;

/* exported OverrideModule */
var OverrideModule = class OverrideModule {
    constructor() {
        this.overrideWindowManagerFunctions();
    }

    destroy() {
        this.restoreWindowManagersFunctions();
    }

    overrideWindowManagerFunctions() {
        this.original_shouldAnimate =
            WindowManager.WindowManager.prototype._shouldAnimate;
        WindowManager.WindowManager.prototype._shouldAnimate = function () {
            return false;
        };
    }

    restoreWindowManagersFunctions() {
        WindowManager.WindowManager.prototype._shouldAnimate = this.original_shouldAnimate;
    }
};

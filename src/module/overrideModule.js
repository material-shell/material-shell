const { WindowManager } = imports.ui.windowManager;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;

/* exported OverrideModule */
var OverrideModule = class OverrideModule {
    constructor() {
        this.overrideWindowManagerFunctions('toto');
    }

    destroy() {
        this.restoreWindowManagersFunctions();
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

        const _shouldAnimateActor = WindowManager.prototype._shouldAnimateActor;
        WindowManager.prototype._shouldAnimateActor = function () {
            let actor = arguments[0];
            if (actor.resizeHandledByMs) {
                logFocus('SHOULDANIMATEACTOR INTTERUPTED');
                actor.completeIsRequested = true;
                return true;
            }
            return _shouldAnimateActor.apply(this, arguments);
        };
        this.windowManagersFunctionToRestore.push([
            WindowManager.prototype._shouldAnimateActor,
            _shouldAnimateActor,
        ]);

        const _prepareAnimationInfo =
            WindowManager.prototype._prepareAnimationInfo;
        WindowManager.prototype._prepareAnimationInfo = function () {
            let actor = arguments[1];
            if (actor.resizeHandledByMs) {
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

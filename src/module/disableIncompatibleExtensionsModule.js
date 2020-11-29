/** Gnome libs imports */
const Main = imports.ui.main;
const { ExtensionManager, ENABLED_EXTENSIONS_KEY } = imports.ui.extensionSystem;
const { ExtensionState } = imports.misc.extensionUtils;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const incompatibleExtensions = [
    'desktop-icons@csoriano',
    'ubuntu-dock@ubuntu.com',
    'dash-to-dock@micxgx.gmail.com',
    'ding@rastersoft.com',
];

let originalFunction;
/* exported DisableIncompatibleExtensionsModule */
var DisableIncompatibleExtensionsModule = class DisableIncompatibleExtensionsModule {
    constructor() {
        originalFunction = ExtensionManager.prototype._callExtensionEnable;
        ExtensionManager.prototype._callExtensionEnable = function () {
            const uuid = arguments[0];
            if (incompatibleExtensions.includes(uuid)) return;
            originalFunction.apply(this, arguments);
        };

        this.disableExtensions();
    }

    disableExtensions() {
        for (let incompatibleExtension of incompatibleExtensions) {
            const extension = Main.extensionManager.lookup(
                incompatibleExtension
            );
            if (extension) {
                try {
                    extension.stateObj.disable();
                } catch (e) {
                    Me.logFocus('disable error', incompatibleExtension, e);
                }
            }
        }
    }

    destroy() {
        ExtensionManager.prototype._callExtensionEnable = originalFunction;
        originalFunction = null;
    }
};

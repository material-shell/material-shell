/** Gnome libs imports */
const Main = imports.ui.main;
const { ExtensionManager, ENABLED_EXTENSIONS_KEY } = imports.ui.extensionSystem;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const incompatibleExtensions = [
    'desktop-icons@csoriano',
    'ubuntu-dock@ubuntu.com',
    'dash-to-dock@micxgx.gmail.com',
    'ding@rastersoft.com',
];

let originalFunction: { apply: (uuid: any, args: IArguments) => void } | null;
export class DisableIncompatibleExtensionsModule {
    constructor() {
        originalFunction = ExtensionManager.prototype._callExtensionEnable;
        ExtensionManager.prototype._callExtensionEnable = function (...args) {
            const uuid = args[0];
            if (incompatibleExtensions.includes(uuid)) return;
            // eslint-disable-next-line prefer-rest-params
            originalFunction!.apply(this, arguments);
        };

        this.disableExtensions();
    }

    disableExtensions() {
        for (const incompatibleExtension of incompatibleExtensions) {
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
}

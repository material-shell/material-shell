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
    // 'improved-workspace-indicator' adds styling to the window tabs in a weird greenish color.
    // That extension is very much redundant anyway, given that MS has its own workspace indicator.
    'improved-workspace-indicator@michaelaquilina.github.io',
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
            try {
                if(Main.extensionManager.disableExtension(incompatibleExtension)) {
                    Me.log(`Disabled gnome extension ${incompatibleExtension} because it is incompatible with Material Shell`);
                }
            } catch (e) {
                Me.logFocus('disable error', incompatibleExtension, e);
            }
        }
    }

    destroy() {
        ExtensionManager.prototype._callExtensionEnable = originalFunction;
        originalFunction = null;
    }
}

/** Gnome libs imports */
import { main as Main } from 'ui';
const { ExtensionManager, ENABLED_EXTENSIONS_KEY } = imports.ui.extensionSystem;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const incompatibleExtensions = [
    'desktop-icons@csoriano',
    'ubuntu-dock@ubuntu.com',
    'dash-to-dock@micxgx.gmail.com',
    'ding@rastersoft.com',
    // Pop Shell is another window manager, it will very likely cause massive conflicts with Material Shell.
    'pop-shell@system76.com',
    // 'improved-workspace-indicator' adds styling to the window tabs in a weird greenish color.
    // That extension is very much redundant anyway, given that MS has its own workspace indicator.
    'improved-workspace-indicator@michaelaquilina.github.io',
];

let originalFunction: { apply: (uuid: any, args: IArguments) => Promise<undefined> } | null;
export class DisableIncompatibleExtensionsModule {
    constructor() {
        originalFunction = ExtensionManager.prototype._callExtensionEnable;
        ExtensionManager.prototype._callExtensionEnable = function (
            uuid: string,
            ...args: any[]
        ) {
            if (incompatibleExtensions.includes(uuid))
                return Promise.resolve();

            // eslint-disable-next-line prefer-rest-params
            return originalFunction!.apply(this, arguments);
        };

        this.disableExtensions();
    }

    disableExtensions() {
        for (const incompatibleExtension of incompatibleExtensions) {
            try {
                if (
                    Main.extensionManager.disableExtension(
                        incompatibleExtension
                    )
                ) {
                    Me.log(
                        `Disabled gnome extension ${incompatibleExtension} because it is incompatible with Material Shell`
                    );
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

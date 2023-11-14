/** Gnome libs imports */
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import * as ExtensionSystem from 'resource:///org/gnome/shell/ui/extensionSystem.js';
import { Debug } from 'src/utils/debug';

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

let originalFunction: { apply: (uuid: any, args: IArguments) => void } | null;
export class DisableIncompatibleExtensionsModule {
    constructor() {
        originalFunction =
            ExtensionSystem.ExtensionManager.prototype._callExtensionEnable;
        ExtensionSystem.ExtensionManager.prototype._callExtensionEnable =
            function (uuid: string, ...args: any[]) {
                if (incompatibleExtensions.includes(uuid)) return;
                // eslint-disable-next-line prefer-rest-params
                originalFunction!.apply(this, arguments);
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
                    Debug.log(
                        `Disabled gnome extension ${incompatibleExtension} because it is incompatible with Material Shell`
                    );
                }
            } catch (e) {
                Debug.logFocus('disable error', incompatibleExtension, e);
            }
        }
    }

    destroy() {
        ExtensionSystem.ExtensionManager.prototype._callExtensionEnable =
            originalFunction;
        originalFunction = null;
    }
}

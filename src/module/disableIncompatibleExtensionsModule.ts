/** Gnome libs imports */
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import * as ExtensionSystem from 'resource:///org/gnome/shell/ui/extensionSystem.js';
import { assertNotNull } from 'src/utils/assert';
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

let originalFunction: ((uuid: string) => void) | null;
export class DisableIncompatibleExtensionsModule {
    constructor() {
        originalFunction =
            ExtensionSystem.ExtensionManager.prototype._callExtensionEnable;
        ExtensionSystem.ExtensionManager.prototype._callExtensionEnable =
            function (uuid: string) {
                if (incompatibleExtensions.includes(uuid)) return;
                assertNotNull(originalFunction).call(this, uuid);
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
            assertNotNull(originalFunction);
        originalFunction = null;
    }
}

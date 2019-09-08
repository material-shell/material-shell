const { Gio } = imports.gi;

const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported DisableIncompatibleExtensionsModule */
var DisableIncompatibleExtensionsModule = class DisableIncompatibleExtensionsModule {
    constructor() {
        this.incompatibleExtensions = [
            {
                uuid: 'desktop-icons@csoriano',
                disable: extension => {
                    if (extension.stateObj) {
                        let _startupPreparedId;
                        if (Main.layoutManager._startingUp) {
                            _startupPreparedId = Main.layoutManager.connect(
                                'startup-complete',
                                () => {
                                    extension.stateObj.disable();
                                    Main.layoutManager.disconnect(
                                        _startupPreparedId
                                    );
                                }
                            );
                        } else {
                            extension.stateObj.disable();
                        }
                    }
                }
            },
            {
                uuid: 'ubuntu-dock@ubuntu.com',
                disable: extension => {
                    if (extension.stateObj) extension.stateObj.disable();
                }
            }
        ];
    }

    enable() {
        for (let incompatibleExtension of this.incompatibleExtensions) {
            let extension = ShellVersionMatch('3.32')
                ? ExtensionUtils.extensions[incompatibleExtension.uuid]
                : Main.extensionManager.lookup(incompatibleExtension.uuid);
            if (extension) {
                incompatibleExtension.disable(extension);
            }
        }
    }

    disable() {}
};

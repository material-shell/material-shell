/** Gnome libs imports */
const Main = imports.ui.main;

/* exported DisableIncompatibleExtensionsModule */
var DisableIncompatibleExtensionsModule = class DisableIncompatibleExtensionsModule {
    constructor() {
        this.incompatibleExtensions = [
            {
                uuid: 'desktop-icons@csoriano',
                disable: (extension) => {
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
                },
            },
            {
                uuid: 'ubuntu-dock@ubuntu.com',
                disable: (extension) => {
                    if (extension.stateObj) extension.stateObj.disable();
                },
            },
        ];

        for (let incompatibleExtension of this.incompatibleExtensions) {
            let extension = Main.extensionManager.lookup(
                incompatibleExtension.uuid
            );
            if (extension) {
                incompatibleExtension.disable(extension);
            }
        }
    }

    destroy() {
        /* for (let incompatibleExtension of this.incompatibleExtensions) {
            let extension = Main.extensionManager.lookup(
                incompatibleExtension.uuid
            );
            if (extension) {
                extension.stateObj.enable();
            }
        } */
    }
};

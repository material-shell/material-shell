const ExtensionUtils = imports.misc.extensionUtils;

/* exported DisableIncompatibleExtensionsModule */
var DisableIncompatibleExtensionsModule = class DisableIncompatibleExtensionsModule {
    constructor() {
        this.incompatibleExtensions = [
            'ubuntu-dock@ubuntu.com',
            'desktop-icons@csoriano'
        ];
    }

    enable() {
        for (let incompatibleExtension of this.incompatibleExtensions) {
            let extension = ExtensionUtils.extensions[incompatibleExtension];
            if (extension && extension.stateObj) {
                extension.stateObj.disable();
            }
        }
    }

    disable() {}
};

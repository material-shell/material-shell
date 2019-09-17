const { Shell, Meta } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
var { ThemeManager } = Me.imports.themeManager.themeManager;
/* exported ThemeModule */
var ThemeModule = class ThemeModule {
    constructor() {}

    enable() {
        this.signals = [];
        global.themeManager = new ThemeManager();
    }

    disable() {
        global.themeManager.destroyKeysAndToggles();
    }
};

const { Shell, Meta } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
var { ThemeManager } = Me.imports.themeManager.themeManager;
/* exported ThemeModule */
var ThemeModule = class ThemeModule {
    constructor() {}

    enable() {
        this.signals = [];
        global.themeManager = new ThemeManager();
        global.themeManager.test();
    }

    disable() {
        global.themeManager.onDisable();
        return;
        // not needed(?)
        this.signals.forEach(signal => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
    }
};

let prop = '_MOTIF_WM_HINTS';

const ByteArray = imports.byteArray;
const Util = imports.misc.util;
const Meta = imports.gi.Meta;
const GLib = imports.gi.GLib;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const WindowUtils = Me.imports.utils.windows;

/* exported NoTitleBarModule */
var NoTitleBarModule = class NoTitleBarModule {
    constructor() {}

    enable() {
        global.display.connect('window-created', (display, window) => {
            WindowUtils.setTitleBarVisibility(window, false);
        });
    }

    disable() {}
};

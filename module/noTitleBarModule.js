let prop = '_MOTIF_WM_HINTS';

const ByteArray = imports.byteArray;
const Util = imports.misc.util;
const Meta = imports.gi.Meta;
const GLib = imports.gi.GLib;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { NoTitleBar } = Me.imports.tilingManager.noTitleBar;

/* exported NoTitleBarModule */
var NoTitleBarModule = class NoTitleBarModule {
    constructor() {
        this._noTitleBar = new NoTitleBar();
    }

    enable() {
        global.display.connect('window-created', (display, window) => {
            this._noTitleBar.setWindowTitleBarVisibilty(window, false);
        });
    }

    disable() {}

};

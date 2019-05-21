let prop = '_MOTIF_WM_HINTS';


const Main = imports.ui.main;
const Util = imports.misc.util;
const Meta = imports.gi.Meta;
const GLib = imports.gi.GLib;

/* exported NoTitleBarModule */
var NoTitleBarModule = class NoTitleBarModule {
    constructor() {

    }

    enable() {
        global.display.connect('window-created', (display, window) => {
            log(display, window, this.getWindowXID(window));
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.toggleTitleBar(this.getWindowXID(window), true);
            });
        });
    }

    disable() {

    }

    toggleTitleBar(winId, hide) {
        let flag = '0x2, 0x0, %s, 0x0, 0x0';
        let value = hide ? flag.format(Meta.is_wayland_compositor() ? '0x2' : '0x0') : flag.format('0x1');

        Util.spawn(['xprop', '-id', winId, '-f', prop, '32c', '-set', prop, value]);
    }

    getWindowXID(win) {
        let desc = win.get_description() || '';
        let match = desc.match(/0x[0-9a-f]+/) || [null];

        return match[0];
    }

};



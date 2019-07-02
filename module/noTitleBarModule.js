let prop = '_MOTIF_WM_HINTS';

const ByteArray = imports.byteArray;
const Main = imports.ui.main;
const Util = imports.misc.util;
const Meta = imports.gi.Meta;
const GLib = imports.gi.GLib;

/* exported NoTitleBarModule */
var NoTitleBarModule = class NoTitleBarModule {
    constructor() {}

    enable() {
        global.display.connect('window-created', (display, window) => {
            if (!this._handleWindow(window)) return;
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.toggleTitleBar(this.getWindowXID(window), true);
            });
        });
    }

    disable() {}

    _setHintValue(win, hint, value) {
        let winId = this.getWindowXID(win);
        if (!winId) return;

        Util.spawn([
            'xprop',
            '-id',
            winId,
            '-f',
            hint,
            '32c',
            '-set',
            hint,
            value
        ]);
    }

    _getHintValue(win, hint) {
        let winId = this.getWindowXID(win);
        if (!winId) return;

        let result = GLib.spawn_command_line_sync(`xprop -id ${winId} ${hint}`);
        let string = ByteArray.toString(result[1]);
        if (!string.match(/=/)) return;

        string = string
            .split('=')[1]
            .trim()
            .split(',')
            .map(part => {
                part = part.trim();
                return part.match(/\dx/) ? part : `0x${part}`;
            });

        return string;
    }

    _getMotifHints(win) {
        if (!win._GTKTitleBarOriginalState) {
            let state = this._getHintValue(win, '_GTKTitleBar_ORIGINAL_STATE');

            if (!state) {
                state = this._getHintValue(win, '_MOTIF_WM_HINTS');
                state = state || ['0x2', '0x0', '0x1', '0x0', '0x0'];

                this._setHintValue(
                    win,
                    '_GTKTitleBar_ORIGINAL_STATE',
                    state.join(', ')
                );
            }

            win._GTKTitleBarOriginalState = state;
        }

        return win._GTKTitleBarOriginalState;
    }

    _handleWindow(win) {
        let handleWin = false;
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];

        if (!types.includes(win.window_type)) return;

        let state = this._getMotifHints(win);
        handleWin = !win.is_client_decorated();
        handleWin = handleWin && (state[2] != '0x2' && state[2] != '0x0');

        return handleWin;
    }

    toggleTitleBar(winId, hide) {
        let flag = '0x2, 0x0, %s, 0x0, 0x0';
        let value = hide
            ? flag.format(Meta.is_wayland_compositor() ? '0x2' : '0x0')
            : flag.format('0x1');

        Util.spawn([
            'xprop',
            '-id',
            winId,
            '-f',
            prop,
            '32c',
            '-set',
            prop,
            value
        ]);
    }

    getWindowXID(win) {
        let desc = win.get_description() || '';
        let match = desc.match(/0x[0-9a-f]+/) || [null];

        return match[0];
    }
};

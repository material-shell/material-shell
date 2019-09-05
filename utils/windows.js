const ByteArray = imports.byteArray;
const Util = imports.misc.util;
const Meta = imports.gi.Meta;
const GLib = imports.gi.GLib;

var updateTitleBarVisibility = function(window) {
    let superWorkspaceIsInFloatLayout =
        window.superWorkspace.tilingLayout.constructor.key === 'float';
    let shouldTitleBarBeVisible = superWorkspaceIsInFloatLayout;
    if (window.titleBarVisible != shouldTitleBarBeVisible) {
        setTitleBarVisibility(window, shouldTitleBarBeVisible);
    }
};

var setTitleBarVisibility = function(window, visible) {
    //if (!_handleWindow(window)) return;
    let windowXID = getWindowXID(window);
    if (!windowXID) return;

    Util.spawn([
        'xprop',
        '-id',
        windowXID,
        '-f',
        '_MOTIF_WM_HINTS',
        '32c',
        '-set',
        '_MOTIF_WM_HINTS',
        `2, 0, ${visible ? '1' : '2'} 0, 0`
    ]);

    window.titleBarVisible = visible;
};
/* 
var _setHintValue = function(win, hint, value) {
    let winId = getWindowXID(win);
    if (!winId) return;

    Util.spawn(['xprop', '-id', winId, '-f', hint, '32c', '-set', hint, value]);
};

var _getHintValue = function(win, hint) {
    let winId = getWindowXID(win);
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
};

var _getMotifHints = function(win) {
    if (!win._GTKTitleBarOriginalState) {
        let state = _getHintValue(win, '_GTKTitleBar_ORIGINAL_STATE');

        if (!state) {
            state = _getHintValue(win, '_MOTIF_WM_HINTS');
            state = state || ['0x2', '0x0', '0x1', '0x0', '0x0'];

            //_setHintValue(win, '_GTKTitleBar_ORIGINAL_STATE', state.join(', '));
        }

        win._GTKTitleBarOriginalState = state;
    }

    return win._GTKTitleBarOriginalState;
};

var _handleWindow = function(win) {
    let handleWin = false;
    let meta = Meta.WindowType;
    let types = [meta.NORMAL];
    if (!types.includes(win.window_type) || win.find_root_ancestor() !== win)
        return;

    let state = _getMotifHints(win);
    handleWin = !win.is_client_decorated();
    handleWin = handleWin && (state[2] != '0x2' && state[2] != '0x0');

    return handleWin;
};
 */
var getWindowXID = function(win) {
    let desc = win.get_description() || '';
    let match = desc.match(/0x[0-9a-f]+/) || [null];

    return match[0];
};

const ByteArray = imports.byteArray;
const Util = imports.misc.util;
const Meta = imports.gi.Meta;
const GLib = imports.gi.GLib;

var updateTitleBarVisibility = function(window) {
    let superWorkspaceIsInFloatLayout =
        window.superWorkspace.tilingLayout.constructor.key === 'float';
    let shouldTitleBarBeVisible = superWorkspaceIsInFloatLayout;
    if (window.titleBarVisible !== shouldTitleBarBeVisible) {
        setTitleBarVisibility(window, shouldTitleBarBeVisible);
    }
};

var setTitleBarVisibility = function(window, visible) {
    let windowXID = getWindowXID(window);
    if (!windowXID || window.is_client_decorated()) return;

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

var getWindowXID = function(win) {
    let desc = win.get_description() || '';
    let match = desc.match(/0x[0-9a-f]+/) || [null];

    return match[0];
};

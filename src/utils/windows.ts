/** Gnome libs imports */
const Util = imports.misc.util;
import * as Meta from 'meta';
import { MetaWindowWithMsProperties } from 'src/manager/msWindowManager';
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported updateTitleBarVisibility */

export const updateTitleBarVisibility = function (
    metaWindow: MetaWindowWithMsProperties
) {try{
    const msWorkspaceIsInFloatLayout =
        metaWindow.msWindow?.msWorkspace.layout.state.key === 'float' ?? false;
    const shouldTitleBarBeVisible = msWorkspaceIsInFloatLayout;
    if (
        !metaWindow.titleBarVisible ||
        metaWindow.titleBarVisible !== shouldTitleBarBeVisible
    ) {
        setTitleBarVisibility(metaWindow, shouldTitleBarBeVisible);
    }} finally {}
};

export const setTitleBarVisibility = function (
    metaWindow: MetaWindowWithMsProperties,
    visible: boolean
) {
try{
    const windowXID = getWindowXID(metaWindow);
    if (!windowXID || metaWindow.is_client_decorated() || !metaWindow.decorated)
        return;
    try {
        Util.trySpawn([
            'xprop',
            '-id',
            windowXID,
            '-f',
            '_MOTIF_WM_HINTS',
            '32c',
            '-set',
            '_MOTIF_WM_HINTS',
            `2, 0, ${visible ? '1' : '2'} 0, 0`,
        ]);
    } catch (e) {
        Me.logFocus('xprop', e);
    }

    metaWindow.titleBarVisible = visible;} finally {}
};

export const getWindowXID = function (win: Meta.Window): string | null {
try{
    const desc = win.get_description() || '';
    const match = desc.match(/0x[0-9a-f]+/);

    return match !== null ? match[0] : null;} finally {}
};

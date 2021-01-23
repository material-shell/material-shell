/** Gnome libs imports */
const Util = imports.misc.util;
import * as Meta from 'Meta';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';

/* exported updateTitleBarVisibility */

interface MetaWindowWithVisiblity extends Meta.Window {
    titleBarVisible?: boolean;
    msWindow: MsWindow;
}

export const updateTitleBarVisibility = function (metaWindow: MetaWindowWithVisiblity) {
    let msWorkspaceIsInFloatLayout =
        metaWindow.msWindow.msWorkspace.layout.state.key === 'float';
    let shouldTitleBarBeVisible = msWorkspaceIsInFloatLayout;
    if (
        !metaWindow.titleBarVisible ||
        metaWindow.titleBarVisible !== shouldTitleBarBeVisible
    ) {
        setTitleBarVisibility(metaWindow, shouldTitleBarBeVisible);
    }
};

export const setTitleBarVisibility = function (metaWindow: MetaWindowWithVisiblity, visible: boolean) {
    let windowXID = getWindowXID(metaWindow);
    if (!windowXID || metaWindow.is_client_decorated() || !metaWindow.decorated)
        return;

    Util.spawn([
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

    metaWindow.titleBarVisible = visible;
};

export const getWindowXID = function (win: Meta.Window) {
    let desc = win.get_description() || '';
    let match = desc.match(/0x[0-9a-f]+/) || [null];

    return match[0];
};

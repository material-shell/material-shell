/** Gnome libs imports */
const Util = imports.misc.util;
import * as Meta from 'meta';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';

/* exported updateTitleBarVisibility */

interface MetaWindowWithVisiblity extends Meta.Window {
    titleBarVisible?: boolean;
    msWindow: MsWindow;
}

export const updateTitleBarVisibility = function (
    metaWindow: MetaWindowWithVisiblity
) {
    const msWorkspaceIsInFloatLayout =
        metaWindow.msWindow.msWorkspace.layout.state.key === 'float';
    const shouldTitleBarBeVisible = msWorkspaceIsInFloatLayout;
    if (
        !metaWindow.titleBarVisible ||
        metaWindow.titleBarVisible !== shouldTitleBarBeVisible
    ) {
        setTitleBarVisibility(metaWindow, shouldTitleBarBeVisible);
    }
};

export const setTitleBarVisibility = function (
    metaWindow: MetaWindowWithVisiblity,
    visible: boolean
) {
    const windowXID = getWindowXID(metaWindow);
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
    const desc = win.get_description() || '';
    const match = desc.match(/0x[0-9a-f]+/) || [null];

    return match[0];
};

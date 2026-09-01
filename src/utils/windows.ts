/** Gnome libs imports */
import Meta from 'gi://Meta';
import * as Util from 'resource:///org/gnome/shell/misc/util.js';
import { MetaWindowWithMsProperties } from 'src/manager/msWindowManager';
import { Debug } from './debug';

/* exported updateTitleBarVisibility */
export const updateTitleBarVisibility = function (
    metaWindow: MetaWindowWithMsProperties
) {
    const msWorkspaceIsInFloatLayout =
        metaWindow.msWindow?.msWorkspace.layout.state.key === 'float';
    const shouldTitleBarBeVisible = msWorkspaceIsInFloatLayout;
    if (
        !metaWindow.titleBarVisible ||
        metaWindow.titleBarVisible !== shouldTitleBarBeVisible
    ) {
        setTitleBarVisibility(metaWindow, shouldTitleBarBeVisible);
    }
};

export const setTitleBarVisibility = function (
    metaWindow: MetaWindowWithMsProperties,
    visible: boolean
) {
    const windowXID = getWindowXID(metaWindow);
    // Meta.Window.is_client_decorated() is gone; `decorated` already excludes
    // the client side decorated windows this used to filter out.
    if (!windowXID || !metaWindow.decorated) return;
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
            `2, 0, ${visible ? '1' : '0'} 0, 0`,
        ]);
    } catch (e) {
        Debug.logFocus('xprop', e);
    }

    metaWindow.titleBarVisible = visible;
};

export const getWindowXID = function (win: Meta.Window): string | null {
    const desc = win.get_description() || '';
    const match = desc.match(/0x[0-9a-f]+/);

    return match !== null ? match[0] : null;
};

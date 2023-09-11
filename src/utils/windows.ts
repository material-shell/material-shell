/** Gnome libs imports */
const Util = imports.misc.util;
import * as Meta from 'meta';
import { MetaWindowWithMsProperties } from 'src/manager/msWindowManager';
import { compareVersions, gnomeVersionNumber, parseVersion } from './shellVersionMatch';
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported updateTitleBarVisibility */
const beforeGnome44 =
    compareVersions(gnomeVersionNumber, parseVersion('44.0')) < 0;
    
export const updateTitleBarVisibility = function (
    metaWindow: MetaWindowWithMsProperties
) {
    const msWorkspaceIsInFloatLayout =
        metaWindow.msWindow?.msWorkspace.layout.state.key === 'float' ?? false;
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
            `2, 0, ${visible ? '1' : beforeGnome44 ? '2' : '0'} 0, 0`,
        ]);
    } catch (e) {
        Me.logFocus('xprop', e);
    }

    metaWindow.titleBarVisible = visible;
};

export const getWindowXID = function (win: Meta.Window): string | null {
    const desc = win.get_description() || '';
    const match = desc.match(/0x[0-9a-f]+/);

    return match !== null ? match[0] : null;
};

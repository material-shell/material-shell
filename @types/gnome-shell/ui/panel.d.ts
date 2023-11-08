import type St from '../../gir-generated/st-13.js';
import { DateMenuButton } from './dateMenu.js';
import { PopupMenuManager } from './popupMenu.js';

export class Panel extends St.Widget {
    _leftBox: St.BoxLayout;
    _centerBox: St.BoxLayout;
    _rightBox: St.BoxLayout;
    menuManager: PopupMenuManager;
    statusArea: {
        // TODO: Make all optional?
        activities: any; // ActivitiesButton,
        aggregateMenu: any; // AggregateMenu,
        quickSettings: any; // QuickSettings,
        appMenu: any; // AppMenuButton,
        dateMenu: DateMenuButton;
        a11y: any; // imports.ui.status.accessibility.ATIndicator,
        keyboard: any; // imports.ui.status.keyboard.InputSourceIndicator,
        dwellClick: any; // imports.ui.status.dwellClick.DwellClickIndicator,
        screenRecording: any; // imports.ui.status.remoteAccess.ScreenRecordingIndicator,
    };
}
export let PANEL_ICON_SIZE: number;

// QuickSettings replaces AggregateMenu starting with Gnome 43
export class QuickSettings {}

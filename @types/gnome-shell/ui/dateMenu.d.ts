import type St from '../../gir-generated/st-13.js';
import * as PanelMenu from './panelMenu.js';

export class DateMenuButton extends PanelMenu.Button {
    _clockDisplay: St.Label;
    _indicator: MessagesIndicator;
}
export class MessagesIndicator extends St.Icon {}

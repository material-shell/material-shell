import {
    IntroducedInGnome,
    RemovedInGnome,
} from '../../../src/utils/shellVersionMatch';
import type Clutter from '../../gir-generated/clutter-13.js';
import type Gio from '../../gir-generated/gio-2.0.js';
import type St from '../../gir-generated/st-13.js';
import { BoxPointer } from './main';

export class PopupMenuManager {
    constructor(owner: any, params?: any);
    _menus: (
        | (PopupMenu & IntroducedInGnome<'42.0'> & RemovedInGnome<'never'>)
        | ({ menu: PopupMenu } & IntroducedInGnome<'ancient'> &
              RemovedInGnome<'42.0'>)
    )[];
    addMenu(menu: PopupMenu, position?: number): void;
    removeMenu(menu: PopupMenu): void;
}

interface PopupBaseMenuItemParams {
    reactive?: boolean;
    activate?: boolean;
    hover?: boolean;
    style_class?: string | null;
    can_focus?: boolean;
}

export class PopupBaseMenuItem extends St.BoxLayout {
    _icon?: St.Icon;
    _parent: PopupMenuBase | null;
    toggle(): void;
    activate(event: Clutter.Event): void;
}

export class PopupSeparatorMenuItem extends PopupBaseMenuItem {
    constructor(text?: string);
}

export class PopupImageMenuItem extends PopupBaseMenuItem {
    label: St.Label;
    _icon: St.Icon;
    constructor(
        text: string,
        icon: Gio.Icon | string,
        params?: PopupBaseMenuItemParams
    );
}

export class PopupSubMenuMenuItem extends PopupBaseMenuItem {
    constructor(text: string, wantIcon?: boolean);
    menu: PopupSubMenu;
    label: St.Label;
}

export class PopupSwitchMenuItem extends PopupBaseMenuItem {
    _statusBin: St.Bin;
    get state(): boolean;
    constructor(
        text: string,
        active: boolean,
        params?: PopupBaseMenuItemParams
    );
}

export class PopupMenuBase {
    actor: St.Widget;
    sourceActor: Clutter.Actor;
    toggle(): void;
    destroy(): void;
    removeAll(): void;
    addMenuItem(
        menuItem:
            | PopupMenuSection
            | PopupSubMenuMenuItem
            | PopupSeparatorMenuItem
            | PopupBaseMenuItem,
        position?: number
    ): void;
    addAction(
        title: string,
        callback: (event: any) => void,
        icon?: Gio.Icon
    ): PopupBaseMenuItem;
    _getMenuItems(): (PopupBaseMenuItem | PopupMenuSection)[];
    get numMenuItems(): number;
}

export class PopupMenuSection extends PopupMenuBase {}

export class PopupSubMenu extends PopupMenuBase {}

export class PopupMenu extends PopupMenuBase {
    constructor(
        sourceActor: Clutter.Actor,
        arrowAlignment: number,
        arrowSide: St.Side
    );
    menu: PopupMenu | undefined;
    _boxPointer: BoxPointer;
    close(): void;
}

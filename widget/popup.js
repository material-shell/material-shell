// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
/* exported addContextMenu */

const { Clutter, Shell, St } = imports.gi;

const BoxPointer = imports.ui.boxpointer;
const Main = imports.ui.main;
const Params = imports.misc.params;
const PopupMenu = imports.ui.popupMenu;

var Popup = class extends PopupMenu.PopupMenu {
    constructor(entry, items = [], callback = () => { }) {
        super(entry, 0, St.Side.BOTTOM);

        this._entry = entry;

        // Populate menu
        items.forEach(text => {
            const item = new PopupMenu.PopupMenuItem(_(text));
            item.connect('activate', () => callback(text));
            this.addMenuItem(item);
        });

        Main.uiGroup.add_actor(this.actor);
        this.actor.hide();
    }

    open(animate) {
        super.open(animate);
        this._entry.add_style_pseudo_class('focus');

        let direction = St.DirectionType.TAB_FORWARD;
        if (!this.actor.navigate_focus(null, direction, false))
            this.actor.grab_key_focus();
    }

};

function _setMenuAlignment(entry, stageX) {
    let [success, entryX] = entry.transform_stage_point(stageX, 0);
    if (success)
        entry.menu.setSourceAlignment(entryX / entry.width);
}

function _onButtonPressEvent(actor, event, entry) {
    if (entry.menu.isOpen) {
        entry.menu.close(BoxPointer.PopupAnimation.FULL);
        return Clutter.EVENT_STOP;
    } else if (event.get_button() == 1) {
        let [stageX] = event.get_coords();
        _setMenuAlignment(entry, stageX);
        entry.menu.open(BoxPointer.PopupAnimation.FULL);
        return Clutter.EVENT_STOP;
    }
    return Clutter.EVENT_PROPAGATE;
}

function addContextMenu(entry, items = [], callback = () => { }, params) {
    if (entry.menu)
        return;

    params = Params.parse(params, { actionMode: Shell.ActionMode.POPUP });

    entry.menu = new Popup(entry, items, callback);
    entry._menuManager = new PopupMenu.PopupMenuManager(entry, {
        actionMode: params.actionMode
    });
    entry._menuManager.addMenu(entry.menu);

    // Add an event handler to both the entry and its clutter_text; the former
    // so padding is included in the clickable area, the latter because the
    // event processing of ClutterText prevents event-bubbling.
    // entry.clutter_text.connect('button-press-event', (actor, event) => {
    //     _onButtonPressEvent(actor, event, entry);
    // });
    entry.connect('button-press-event', (actor, event) => {
        _onButtonPressEvent(actor, event, entry);
    });

    entry.connect('destroy', () => {
        entry.menu.destroy();
        entry.menu = null;
        entry._menuManager = null;
    });
}
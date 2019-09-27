// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
/* exported PromptDialog */

const { Clutter, Gio, GLib, GObject, Meta, Shell, St } = imports.gi;

const Main = imports.ui.main;
const ModalDialog = imports.ui.modalDialog.ModalDialog;
// const ShellEntry = imports.ui.shellEntry;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const ShellEntry = Me.imports.widget.popup;

var DIALOG_GROW_TIME = 100;

var PromptDialog = class PromptDialog {
    constructor({ title = 'Enter Text', onSubmit }) {

        this.onSubmit = onSubmit;
        this.title = title;
        
        this.md = new ModalDialog({
            styleClass: 'run-dialog',
        });

        let label = new St.Label({
            style_class: 'run-dialog-label',
            text: this.title
        });

        this.md.contentLayout.add(label, {
            x_fill: false,
            x_align: St.Align.START,
            y_align: St.Align.START
        });

        let entry = new St.Entry({
            style_class: 'run-dialog-entry',
            can_focus: true
        });

        ShellEntry.addContextMenu(entry);

        entry.label_actor = label;

        this.md._entryText = entry.clutter_text;
        this.md.contentLayout.add(entry, { y_align: St.Align.START });
        this.md.setInitialKeyFocus(this.md._entryText);

        this.md.setButtons([{
            action: this.md.close.bind(this.md),
            label: _("Close"),
            key: Clutter.Escape,
        }]);

        this.md._entryText.connect('activate', o => {
            this.md.popModal();
            this.md.close();
            this.onSubmit(o.get_text());
        });

    }


    open() {
        // this._entryText.set_text('');
        this.md.open();
    }
};
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

/* exported HideDashModule */
var HideDashModule = class HideDashModule {
    constructor() {
        this.controls =
            Main.overview._controls || Main.overview._overview._controls;
        if (ShellVersionMatch('3.32') || ShellVersionMatch('3.34')) {
            this.controls.dash.actor.hide();
        } else {
            this.controls.dash.hide();
        }
        this.controls._group.remove_child(this.controls._dashSpacer);
    }

    destroy() {
        if (ShellVersionMatch('3.32') || ShellVersionMatch('3.34')) {
            this.controls.dash.actor.show();
        } else {
            this.controls.dash.show();
        }
        this.controls._group.insert_child_at_index(
            this.controls._dashSpacer,
            0
        );
    }
};

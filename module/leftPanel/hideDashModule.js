const Main = imports.ui.main;

/* exported HideDashModule */
var HideDashModule = class HideDashModule {
    constructor() {
        this.controls =
            Main.overview._controls || Main.overview._overview._controls;
    }

    enable() {
        this.controls.dash.actor.hide();
        this.controls._group.remove_child(this.controls._dashSpacer);
    }

    disable() {
        this.controls.dash.actor.show();
        this.controls._group.insert_child_at_index(
            this.controls._dashSpacer,
            0
        );
    }
};

const Main = imports.ui.main;

/* exported HideDashModule */
var HideDashModule = class HideDashModule {
    constructor() {}

    enable() {
        Main.overview._controls.dash.actor.hide();
        Main.overview._controls._group.remove_child(
            Main.overview._controls._dashSpacer
        );
    }

    disable() {
        Main.overview._controls.dash.actor.show();
        Main.overview._controls._group.insert_child_at_index(
            Main.overview._controls._dashSpacer,
            0
        );
    }
};

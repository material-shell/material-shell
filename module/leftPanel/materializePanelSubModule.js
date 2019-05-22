const { Clutter } = imports.gi;

/* exported MaterializePanelSubModule */
var MaterializePanelSubModule = class MaterializePanelSubModule {
    constructor(panel) {
        this.panel = panel;
    }

    enable() {
        // Remove the offscreen redirect that currently break the cropping and so the Ripple Effect
        this.panel.actor.set_offscreen_redirect(0);
    }

    disable() {
        this.panel.actor.set_offscreen_redirect(
            Clutter.OffscreenRedirect.ALWAYS
        );
    }
}
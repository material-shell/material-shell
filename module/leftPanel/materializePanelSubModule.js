const { Clutter } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.utils.compatibility;

/* exported MaterializePanelSubModule */
var MaterializePanelSubModule = class MaterializePanelSubModule {
    constructor(panel) {
        this.panel = panel;
    }

    enable() {
        // Remove the offscreen redirect that currently break the cropping and so the Ripple Effect
        (ShellVersionMatch('3.32')
            ? this.panel.actor
            : this.panel
        ).set_offscreen_redirect(0);
    }

    disable() {
        (ShellVersionMatch('3.32')
            ? this.panel.actor
            : this.panel
        ).set_offscreen_redirect(Clutter.OffscreenRedirect.ALWAYS);
    }
};

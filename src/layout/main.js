const Me = imports.misc.extensionUtils.getCurrentExtension();

const { Shell, Meta, St, GLib, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const { MsPanel } = Me.imports.src.layout.panel.panel;
const { MsWorkspaceContainer } = Me.imports.src.layout.msWorkspaceContainer;

/* exported MsMain */
var MsMain = GObject.registerClass(
    {
        GTypeName: 'MsMain',
    },
    class MsMain extends St.Widget {
        _init() {
            super._init({});
            this.set_style('background: rgba(255,0,255,0.2)');
            Main.uiGroup.insert_child_above(this, global.window_group);
            this.msWorkspaceContainer = new MsWorkspaceContainer();
            this.add_child(this.msWorkspaceContainer);
            this.buildMonitorPanelSpacers();
            this.panel = new MsPanel();
            this.add_child(this.panel);
        }

        buildMonitorPanelSpacers() {
            if (this.monitorPanelSpacerList) {
                this.monitorPanelSpacerList.forEach((actor) => {
                    actor.destroy();
                });
            }
            this.monitorPanelSpacerList = [];
            for (let monitor of Main.layoutManager.monitors) {
                let topBarSpacer = new St.Widget({ name: 'topBarSpacer' });
                topBarSpacer.set_position(monitor.x, monitor.y);
                topBarSpacer.set_width(monitor.width);
                Main.layoutManager.addChrome(topBarSpacer, {
                    affectsStruts: true,
                    trackFullscreen: true,
                });
                Main.layoutManager.uiGroup.set_child_below_sibling(
                    topBarSpacer,
                    this
                );
                this.monitorPanelSpacerList.push(topBarSpacer);
            }
        }

        vfunc_get_preferred_width(_forHeight) {
            let width = global.stage.width;
            return [width, width];
        }

        vfunc_get_preferred_height(_forWidth) {
            let height = global.stage.height;
            return [height, height];
        }
    }
);

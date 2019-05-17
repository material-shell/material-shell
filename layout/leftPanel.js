const St = imports.gi.St;
const GObject = imports.gi.GObject;

const Main = imports.ui.main;
const OverviewControls = imports.ui.overviewControls;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const WorkspaceList = Me.imports.widget.workspaceList.WorkspaceList;
const PanelMenu = imports.ui.panelMenu;

function recurcisvelySetVertical(actor, value) {
    if (actor instanceof St.BoxLayout) {
        actor.vertical = value;
    }
    actor.get_children().forEach(child => {
        recurcisvelySetVertical(child, value);
    });
}

/* exported LeftPanelBox */
var LeftPanelBox = GObject.registerClass(
    class LeftPanelBox extends St.BoxLayout {
        _init() {
            super._init({
                name: 'dash',
                style_class: 'test-panel',
                reactive: true,
                can_focus: false,
                x_align: St.Align.START,
                y_align: St.Align.START,
                track_hover: true
            });
            let dashSpacer = new OverviewControls.DashSpacer();
            dashSpacer.setDashActor(this);
            Main.overview._controls._group.insert_child_at_index(dashSpacer, 0); // insert on first

            this.container = new St.BoxLayout({
                vertical: true
            });

            /* this._topBox = new St.BoxLayout({
                vertical: true
            });

            this._centerBox = new St.BoxLayout({
                vertical: true
            });

            this._bottomBox = new St.BoxLayout({
                vertical: true
            }); */

            this._topBox = new St.BoxLayout({
                vertical: true
            });

            this._bottomBox = new St.BoxLayout({
                vertical: true
            });

            this.container.add_child(this._topBox);
            this.container.add_child(this._bottomBox);

            this.add_child(this.container);

            //this._panelLeftBox.hide();

            this.listOfWorkspaces = new WorkspaceList();
            this._topBox.add_child(this.listOfWorkspaces);

            this.stealPanelBoxes();
            // Steal the dateMenu
            /* this._dateMenu = Main.panel.statusArea.dateMenu;
            Main.panel._centerBox.remove_child(this._dateMenu.container); */

            // Steal the aggregateMenu
            //this._aggregateMenu = new imports.ui.panel.AggregateMenu();
            //this._aggregateMenu._indicators.vertical = true;
            //Main.panel._rightBox.remove_child(this._aggregateMenu.container);

            // Create a box for all other possibly icon buttons
            this._allOtherButtonsBox = new St.BoxLayout({
                vertical: true
            });

            //Main.panel.statusArea.aggregateMenu._indicators.hide();
            // And steal all other buttons of centerBox and rightBox of the panel

            /* Main.panel._centerBox.get_children().forEach(child => {
                log('center_child');
                Main.panel._centerBox.remove_child(child);
                this._allOtherButtonsBox.add_child(child);
            });

            Main.panel._rightBox.get_children().forEach(child => {
                log('right_child');
                Main.panel._rightBox.remove_child(child);
                this._allOtherButtonsBox.add_child(child);
            }); */

            this._bottomBox.add_child(this._allOtherButtonsBox);
            //this._bottomBox.add_child(this._aggregateMenu.container);
            //this._bottomBox.add_child(this._dateMenu.container);

            /* let aggregateMenu = Main.panel.statusArea.aggregateMenu;
            aggregateMenu._indicators.vertical = true; */
            /*             this._panelRightBox.width = 24;
            aggregateMenu.actor.width = 24;
            aggregateMenu._indicators.width = 24; */
            /* this._panelRightBox.vertical = true;
            Main.panel.actor.remove_child(this._panelCenterBox);
            Main.panel.actor.remove_child(this._panelRightBox);
            let clockContainer = Main.panel.statusArea.dateMenu.actor.get_parent();
            clockContainer.get_parent().remove_child(clockContainer);
            this._topBox.add_child(this._panelRightBox);
            this._topBox.add_child(this._panelCenterBox); */
            global.display.connect('workareas-changed', () => {
                this.updatePosition();
            });
        }

        stealPanelBoxes() {
            this._panelLeftBox = Main.panel._leftBox;
            recurcisvelySetVertical(this._panelLeftBox, true);
            Main.panel.actor.remove_child(this._panelLeftBox);
            this._bottomBox.add_child(this._panelLeftBox);

            this._panelCenterBox = Main.panel._centerBox;
            recurcisvelySetVertical(this._panelCenterBox, true);
            Main.panel.actor.remove_child(this._panelCenterBox);
            this._bottomBox.add_child(this._panelCenterBox);

            this._panelRightBox = Main.panel._rightBox;
            recurcisvelySetVertical(this._panelRightBox, true);
            Main.panel.actor.remove_child(this._panelRightBox);
            this._bottomBox.add_child(this._panelRightBox);
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);

            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);

            this.container.allocate(box, flags);
        }

        /**
         * Just the child width but taking into account the slided out part
         */
        vfunc_get_preferred_width() {
            return [48, 48];
        }

        /**
         * Just the child height but taking into account the slided out part
         */
        vfunc_get_preferred_height() {
            return [
                Main.layoutManager.getWorkAreaForMonitor(
                    Main.layoutManager.primaryMonitor
                ).height,
                Main.layoutManager.getWorkAreaForMonitor(
                    Main.layoutManager.primaryMonitor
                ).height
            ];
        }

        updatePosition() {
            let monitor = Main.layoutManager.primaryMonitor;
            let workArea = Main.layoutManager.getWorkAreaForMonitor(
                Main.layoutManager.primaryMonitor
            );
            this.x = monitor.x;
            this.y = workArea.y;
        }
    }
);

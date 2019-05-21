const Gi = imports._gi;
const { Clutter, Meta, St, Pango, GObject } = imports.gi;

const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const Tweener = imports.ui.tweener;
const Overview = imports.ui.overview;
const OverviewControls = imports.ui.overviewControls;
const WindowManager = imports.ui.windowManager;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const PanelMenu = imports.ui.panelMenu;
const Panel = imports.ui.panel;
const BoxPointer = imports.ui.boxpointer;

const WorkspaceList = Me.imports.widget.workspaceList.WorkspaceList;

/* exported LeftPanelModule */
var LeftPanelModule = class LeftPanelModule {
    constructor() {
        this.panel = Main.panel;

        this.verticalisePanelSubModule = new VerticalisePanelSubModule(
            this.panel
        );
        this.panelToLeftSubModule = new PanelToLeftSubModule(this.panel);
        this.workspaceListSubModule = new WorkspaceListSubModule(this.panel);
        this.materializePanelSubModule = new MaterializePanelSubModule(
            this.panel
        );
        this.hideDashModule = new HideDashModule();
    }

    enable() {
        this.verticalisePanelSubModule.enable();
        this.panelToLeftSubModule.enable();

        // 5- Hide the activities button
        this.panel.statusArea.activities.actor.hide();

        // 6- Remove the appMenu button because we can't really hide it.
        this.panel._leftBox.remove_child(
            this.panel.statusArea.appMenu.actor.get_parent()
        );

        this.workspaceListSubModule.enable();
        this.materializePanelSubModule.enable();
        this.hideDashModule.enable();
    }

    disable() {
        this.materializePanelSubModule.disable();
        this.workspaceListSubModule.disable();
        this.panel._leftBox.add_child(
            this.panel.statusArea.appMenu.actor.get_parent()
        );
        this.panel.statusArea.activities.actor.show();
        this.panelToLeftSubModule.disable();
        this.verticalisePanelSubModule.disable();
        this.hideDashModule.disable();
    }
};

class VerticalisePanelSubModule {
    constructor(panel) {
        this.panel = panel;
        this.rectangularClockSubModule = new RectangularClockSubModule(this.panel.statusArea.dateMenu);
        this.panelAllocate = function(box, flags) {
            this.set_allocation(box, flags);
            let allocWidth = box.x2 - box.x1;
            let allocHeight = box.y2 - box.y1;
            let [, leftNaturalHeight] = this._leftBox.get_preferred_height(-1);
            let [, centerNaturalHeight] = this._centerBox.get_preferred_height(
                -1
            );
            let [, rightNaturalHeight] = this._rightBox.get_preferred_height(
                -1
            );
            let startY = allocHeight - (centerNaturalHeight + rightNaturalHeight);

            let leftChildBox = new Clutter.ActorBox();
            leftChildBox.clip_to_allocation = true;
            leftChildBox.x1 = 0;
            leftChildBox.x2 = allocWidth;
            leftChildBox.y1 = 0;
            leftChildBox.y2 = leftNaturalHeight;
            this._leftBox.allocate(leftChildBox, flags);

            let centerChildBox = new Clutter.ActorBox();
            centerChildBox.x1 = 0;
            centerChildBox.x2 = allocWidth;
            centerChildBox.y1 = startY + rightNaturalHeight;
            centerChildBox.y2 = startY + centerNaturalHeight + rightNaturalHeight;
            this._centerBox.allocate(centerChildBox, flags);

            let rightChildBox = new Clutter.ActorBox();
            rightChildBox.x1 = 0;
            rightChildBox.x2 = allocWidth;
            rightChildBox.y1 = startY;
            rightChildBox.y2 =
                startY + rightNaturalHeight;
            this._rightBox.allocate(rightChildBox, flags);
        };

        this.wmGetPositionForDirection = function(direction) {
            let xDest = 0,
                yDest = 0;

            if (
                direction == Meta.MotionDirection.UP ||
                direction == Meta.MotionDirection.UP_LEFT ||
                direction == Meta.MotionDirection.UP_RIGHT
            )
                yDest = -Main.layoutManager.primaryMonitor.height;
            else if (
                direction == Meta.MotionDirection.DOWN ||
                direction == Meta.MotionDirection.DOWN_LEFT ||
                direction == Meta.MotionDirection.DOWN_RIGHT
            )
                yDest = Main.layoutManager.primaryMonitor.height;

            if (
                direction == Meta.MotionDirection.LEFT ||
                direction == Meta.MotionDirection.UP_LEFT ||
                direction == Meta.MotionDirection.DOWN_LEFT
            )
                xDest = -global.screen_width;
            else if (
                direction == Meta.MotionDirection.RIGHT ||
                direction == Meta.MotionDirection.UP_RIGHT ||
                direction == Meta.MotionDirection.DOWN_RIGHT
            )
                xDest = global.screen_width;

            return [xDest, yDest];
        };
    }

    enable() {
        // 1- Set all List container to vertical
        this.recursivelySetVertical(this.panel, true);

        // 2- Override the allocate function of the panel to display the PanelBoxes vertically
        this.panel.__proto__[Gi.hook_up_vfunc_symbol](
            'allocate',
            this.panelAllocate
        );

        //3- Fix workspace switch animation by overriding the window manager function that used the panel height to define window position
        Main.wm._getPositionForDirection = this.wmGetPositionForDirection;

        this.rectangularClockSubModule.enable();

    }

    disable() {
        this.recursivelySetVertical(this.panel, false);
        this.panel.__proto__[Gi.hook_up_vfunc_symbol](
            'allocate',
            this.panel.__proto__.vfunc_allocate
        );
        //3- Revert function
        Main.wm._getPositionForDirection =
            WindowManager._getPositionForDirection;

        this.rectangularClockSubModule.disable();
    }

    recursivelySetVertical(actor, value) {
        if (actor instanceof St.BoxLayout) {
            actor.vertical = value;
        }
        actor.get_children().forEach(child => {
            this.recursivelySetVertical(child, value);
        });
    }
}

class RectangularClockSubModule {
    constructor(dateMenu) {
        this.dateMenu = dateMenu;
    }

    enable() {
        this.dateMenu._clock.time_only = true;
        this.dateMenu._clockDisplay.clutter_text.set_single_line_mode(
            false
        );
        this.dateMenu._clockDisplay.clutter_text.set_line_wrap(
            true
        );
        this.dateMenu._clockDisplay.clutter_text.set_line_wrap_mode(
            Pango.WrapMode.WORD_CHAR
        );

        this.dateMenu._clockDisplay.clutter_text.set_ellipsize(
            Pango.EllipsizeMode.NONE
        );

        this.removeDotsFromClock();
        this.connectSignal = this.dateMenu._clock.connect('notify::clock', () => {
            this.removeDotsFromClock();
        });

        this.dateMenu._clockDisplay.height = 38;
        this.dateMenu._clockDisplay.width = 24;
    }

    disable() {
        this.dateMenu._clock.time_only = false;
        this.dateMenu._clockDisplay.clutter_text.set_single_line_mode(
            true
        );
        this.dateMenu._clockDisplay.clutter_text.set_line_wrap(
            false
        );
        this.dateMenu._clockDisplay.clutter_text.set_line_wrap_mode(
            Pango.WrapMode.WORD
        );

        this.dateMenu._clockDisplay.clutter_text.set_ellipsize(
            Pango.EllipsizeMode.END
        );
        this.dateMenu._clockDisplay.height = -1;
        this.dateMenu._clockDisplay.width = -1;

        this.dateMenu._clock.disconnect(this.connectSignal);
        this.dateMenu._clockDisplay.text = this.dateMenu._clock.clock;
    }

    removeDotsFromClock() {
        this.dateMenu._clockDisplay.text = this.dateMenu._clock.clock.replace(
            /∶/g,
            ''
        );
    }
}

class WorkspaceListSubModule {
    constructor(panel) {
        this.panel = panel;
        this.workspaceList = new WorkspaceList();
    }

    enable() {
        this.panel._leftBox.add_child(this.workspaceList);
    }

    disable() {
        this.panel._leftBox.remove_child(this.workspaceList);
    }
}

class MaterializePanelSubModule {
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

class PanelToLeftSubModule {
    constructor(panel) {
        this.panel = panel;
        this.panelBox = new St.BoxLayout({
            name: 'leftPanelBox',
            vertical: true
        });
        this.dashSpacer = new St.Widget();
        this.primaryMonitor = Main.layoutManager.primaryMonitor;

        this.dashSpacer.set_size(48, Main.overview._controls._group.height);
        this.panelBox.set_size(48, this.primaryMonitor.height);
    }

    enable() {
        Main.overview._controls._group.insert_child_at_index(
            this.dashSpacer,
            0
        ); // insert on first
        Main.layoutManager.panelBox.remove_child(this.panel);
        this.panelBox.add_child(this.panel);
        Main.layoutManager.addChrome(this.panelBox, {
            affectsStruts: true,
            trackFullscreen: true
        });
        this.panelBox.set_position(
            this.primaryMonitor.x,
            this.primaryMonitor.y
        );
        Main.layoutManager.uiGroup.set_child_below_sibling(
            this.panelBox,
            Main.layoutManager.panelBox
        );

        // 4- For each menu override the opening side to match the vertical panel
        this.panel.menuManager._menus.forEach(menuData => {
            if (menuData.menu._boxPointer) {
                menuData.menu._boxPointer._calculateArrowSide = function() {
                    return St.Side.LEFT;
                };
            }
        });
    }

    disable() {
        Main.overview._controls._group.remove_child(this.dashSpacer); // insert on first
        this.panelBox.remove_child(this.panel);
        Main.layoutManager.panelBox.add_child(this.panel);
        Main.layoutManager.removeChrome(this.panelBox);

        this.panel.menuManager._menus.forEach(menuData => {
            if (menuData.menu._boxPointer) {
                menuData.menu._boxPointer._calculateArrowSide =
                    BoxPointer._calculateArrowSide;
            }
        });
    }
}

class HideDashModule {
    constructor() { }

    enable() {
        Main.overview._controls.dash.actor.hide();
        Main.overview._controls._group.remove_child(Main.overview._controls._dashSpacer);
    }

    disable() {
        Main.overview._controls.dash.actor.show();
        Main.overview._controls._group.insert_child_at_index(
            Main.overview._controls._dashSpacer,
            0
        );
    }
}
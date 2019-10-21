const Main = imports.ui.main;
const Gi = imports._gi;
const GLib = imports.gi.GLib;
const { Clutter, Meta, St } = imports.gi;
const WindowManager = imports.ui.windowManager;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const RectangularClockSubModule =
    Me.imports.module.leftPanel.verticalisePanel.rectangularClockSubModule
        .RectangularClockSubModule;

/* exported VerticalisePanelSubModule */
var VerticalisePanelSubModule = class VerticalisePanelSubModule {
    constructor(panel) {
        this.panel = panel;
        this.rectangularClockSubModule = new RectangularClockSubModule(
            this.panel.statusArea.dateMenu
        );
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
            let startY =
                allocHeight - (centerNaturalHeight + rightNaturalHeight);

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
            centerChildBox.y2 =
                startY + centerNaturalHeight + rightNaturalHeight;
            this._centerBox.allocate(centerChildBox, flags);

            let rightChildBox = new Clutter.ActorBox();
            rightChildBox.x1 = 0;
            rightChildBox.x2 = allocWidth;
            rightChildBox.y1 = startY;
            rightChildBox.y2 = startY + rightNaturalHeight;
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
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.recursivelySetVertical(this.panel, true);
            return GLib.SOURCE_REMOVE;
        });

        // 2- Override the allocate function of the panel to display the PanelBoxes vertically
        this.panel.__proto__[Gi.hook_up_vfunc_symbol](
            'allocate',
            this.panelAllocate
        );

        //3- Fix workspace switch animation by overriding the window manager function that used the panel height to define window position
        Main.wm._getPositionForDirection = this.wmGetPositionForDirection;

        this.panel._leftCorner.actor.hide();
        this.panel._rightCorner.actor.hide();
        this.rectangularClockSubModule.enable();

        this.leftBoxActorAddedSignal = this.panel._leftBox.connect(
            'actor-added',
            (_, actor) => {
                this.recursivelySetVertical(actor, true);
            }
        );
        this.centerBoxActorAddedSignal = this.panel._centerBox.connect(
            'actor-added',
            (_, actor) => {
                this.recursivelySetVertical(actor, true);
            }
        );
        this.rightBoxActorAddedSignal = this.panel._rightBox.connect(
            'actor-added',
            (_, actor) => {
                this.recursivelySetVertical(actor, true);
            }
        );
        this.panel.statusArea.style_class = "status-area";
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
        this.panel._leftCorner.actor.show();
        this.panel._rightCorner.actor.show();
        this.rectangularClockSubModule.disable();
        this.panel._leftBox.disconnect(this.leftBoxActorAddedSignal);
        this.panel._centerBox.disconnect(this.centerBoxActorAddedSignal);
        this.panel._rightBox.disconnect(this.rightBoxActorAddedSignal);
    }

    recursivelySetVertical(actor, value) {
        if (actor instanceof St.BoxLayout) {
            actor.vertical = value;
        }
        actor.get_children().forEach(child => {
            this.recursivelySetVertical(child, value);
        });
    }
};

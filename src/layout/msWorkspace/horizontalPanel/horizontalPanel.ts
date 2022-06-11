/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GnomeDesktop from 'gnomedesktop';
import { LayoutSwitcher } from 'src/layout/msWorkspace/horizontalPanel/layoutSwitcher';
import { TaskBar } from 'src/layout/msWorkspace/horizontalPanel/taskBar';
import { Allocate, SetAllocation } from 'src/utils/compatibility';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
import { popupMenu as PopupMenu } from 'ui';
import { MsWorkspace } from '../msWorkspace';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class HorizontalPanel extends St.BoxLayout {
    private _delegate: this;
    menuManager: PopupMenu.PopupMenuManager;
    taskBar: TaskBar;
    layoutSwitcher: LayoutSwitcher;
    clockLabel: St.Label | undefined;
    clockBin: St.BoxLayout | null | undefined;
    private _wallClock: any;
    msWorkspace: MsWorkspace;

    constructor(msWorkspace: MsWorkspace) {
        super({
            name: 'horizontalPanel',
        });
        this._delegate = this;

        this.msWorkspace = msWorkspace;
        this.menuManager = new PopupMenu.PopupMenuManager(this);
        this.taskBar = new TaskBar(msWorkspace, this.menuManager);
        this.layoutSwitcher = new LayoutSwitcher(msWorkspace, this.menuManager);

        this.add_child(this.taskBar);
        this.add_child(this.layoutSwitcher);
        const horizontalChangedSignal = Me.msThemeManager.connect(
            'clock-horizontal-changed',
            () => {
                if (Me.msThemeManager.clockHorizontal) {
                    this.createClock();
                } else {
                    this.removeClock();
                }
            }
        );
        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(horizontalChangedSignal);
        });

        if (Me.msThemeManager.clockHorizontal) {
            this.createClock();
        }
    }

    createClock() {
        const clockLabel = new St.Label({
            style_class: 'clock-label',
            y_align: Clutter.ActorAlign.CENTER,
        });
        this.clockLabel = clockLabel;

        this.clockBin = new St.BoxLayout({});

        this.clockBin.add_child(clockLabel);
        this._wallClock = new GnomeDesktop.WallClock();
        const updateClock = () => {
            clockLabel.text = this._wallClock.clock;
        };
        const signalClock = this._wallClock.connect(
            'notify::clock',
            updateClock
        );
        // There was a bug when updating the clock while the clock was not in the stage which didn't update the time correctly
        clockLabel.connect('notify::mapped', () => {
            if (clockLabel.mapped) {
                updateClock();
                clockLabel.queue_relayout();
            }
        });
        this.insert_child_at_index(this.clockBin, 1);
        clockLabel.connect('destroy', () => {
            this._wallClock.disconnect(signalClock);
            delete this._wallClock;
        });
    }

    removeClock() {
        if (!this.clockBin) return;
        this.remove_child(this.clockBin);
        this.clockBin.destroy();
        this.clockBin = null;
    }

    vfunc_get_preferred_height(_forWidth: number): [number, number] {
        const height = Me.msThemeManager.getPanelSize(
            this.msWorkspace.monitor.index
        );
        return [height, height];
    }

    vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        const clockWidth = this.clockBin
            ? this.clockBin.get_preferred_width(-1)[1]
            : 0;
        const taskBarBox = new Clutter.ActorBox();
        taskBarBox.x1 = contentBox.x1;
        taskBarBox.x2 = Math.max(
            contentBox.x2 - this.layoutSwitcher.width - clockWidth,
            0
        );
        taskBarBox.y1 = contentBox.y1;
        taskBarBox.y2 = contentBox.y2;
        Allocate(this.taskBar, taskBarBox, flags);

        if (this.clockBin) {
            const clockBox = new Clutter.ActorBox();
            clockBox.x1 = taskBarBox.x2;
            clockBox.x2 = contentBox.x2 - this.layoutSwitcher.width;
            clockBox.y1 = contentBox.y1;
            clockBox.y2 = contentBox.y2;
            Allocate(this.clockBin, clockBox, flags);
        }

        const layoutSwitcherBox = new Clutter.ActorBox();
        layoutSwitcherBox.x1 = contentBox.x2 - this.layoutSwitcher.width;
        layoutSwitcherBox.x2 = contentBox.x2;
        layoutSwitcherBox.y1 = contentBox.y1;
        layoutSwitcherBox.y2 = contentBox.y2;
        Allocate(this.layoutSwitcher, layoutSwitcherBox, flags);
    }
}

/** Gnome libs imports */
const { GObject, St, Clutter, GnomeDesktop, Shell } = imports.gi;
const DND = imports.ui.dnd;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const { MatPanelButton } = Me.imports.src.layout.verticalPanel.panelButton;
const { TaskBar, TaskBarItem } = Me.imports.src.widget.taskBar;

/* exported HorizontalPanel */
var HorizontalPanel = GObject.registerClass(
    class HorizontalPanel extends St.BoxLayout {
        _init(msWorkspace) {
            super._init({
                name: 'horizontalPanel',
            });
            this._delegate = this;
            this.msWorkspace = msWorkspace;

            this.taskBar = new TaskBar(msWorkspace);

            this.tilingIcon = new St.Icon({
                style_class: 'mat-panel-button-icon',
                icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
            });

            this.tilingButton = new MatPanelButton({
                child: this.tilingIcon,
                style_class: 'mat-panel-button',
                can_focus: true,
                track_hover: true,
            });

            this.tilingButton.connect('clicked', (actor, button) => {
                // Go in reverse direction on right click (button: 3)
                msWorkspace.nextTiling(button === 3 ? -1 : 1);
            });

            this.add_child(this.taskBar);
            this.add_child(this.tilingButton);
            Me.msThemeManager.connect('clock-horizontal-changed', () => {
                if (Me.msThemeManager.clockHorizontal) {
                    this.createClock();
                } else {
                    this.removeClock();
                }
            });
            if (Me.msThemeManager.clockHorizontal) {
                this.createClock();
            }
        }

        createClock() {
            this.clockLabel = new St.Label({
                style_class: 'clock-label',
                y_align: Clutter.ActorAlign.CENTER,
            });

            this.clockBin = new St.BoxLayout({});

            this.clockBin.add_child(this.clockLabel);
            this._wallClock = new GnomeDesktop.WallClock();
            const updateClock = () => {
                this.clockLabel.text = this._wallClock.clock;
            };
            this.signalClock = this._wallClock.connect(
                'notify::clock',
                updateClock
            );
            updateClock();
            this.insert_child_at_index(this.clockBin, 1);
            this.clockLabel.connect('destroy', () => {
                this._wallClock.disconnect(this.signalClock);
                delete this._wallClock;
            });
        }

        removeClock() {
            if (!this.clockBin) return;
            this.clockBin.destroy();
            delete this.clockBin;
        }

        handleDragOver(source) {
            if (source instanceof TaskBarItem) {
                return this.taskBar.updateCurrentTaskBar();
            }
            return DND.DragMotionResult.NO_DROP;
        }

        acceptDrop(source) {
            if (source instanceof TaskBarItem) {
                this.taskBar.reparentDragItem();
                return true;
            }
            return false;
        }

        vfunc_get_preferred_height(_forWidth) {
            let height = Me.msThemeManager.getPanelSize(
                this.msWorkspace.monitor.index
            );
            return [height, height];
        }

        vfunc_allocate(box, flags) {
            if (
                this.tilingIcon &&
                this.tilingIcon.get_icon_size() != box.get_height() / 2
            ) {
                this.tilingIcon.set_icon_size(box.get_height() / 2);
            }
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            let clockWidth = this.clockBin
                ? this.clockBin.get_preferred_width(-1)[1]
                : 0;
            let taskBarBox = new Clutter.ActorBox();
            taskBarBox.x1 = contentBox.x1;
            taskBarBox.x2 = Math.max(
                contentBox.x2 - this.tilingButton.width - clockWidth,
                0
            );
            taskBarBox.y1 = contentBox.y1;
            taskBarBox.y2 = contentBox.y2;
            Allocate(this.taskBar, taskBarBox, flags);

            if (this.clockBin) {
                let clockBox = new Clutter.ActorBox();
                clockBox.x1 = taskBarBox.x2;
                clockBox.x2 = contentBox.x2 - this.tilingButton.width;
                clockBox.y1 = contentBox.y1;
                clockBox.y2 = contentBox.y2;
                Allocate(this.clockBin, clockBox, flags);
            }

            let tilingButtonBox = new Clutter.ActorBox();
            tilingButtonBox.x1 = contentBox.x2 - this.tilingButton.width;
            tilingButtonBox.x2 = contentBox.x2;
            tilingButtonBox.y1 = contentBox.y1;
            tilingButtonBox.y2 = contentBox.y2;
            Allocate(this.tilingButton, tilingButtonBox, flags);
        }
    }
);

/** Gnome libs imports */
const { Gio, GObject, St, Clutter, GnomeDesktop, Shell } = imports.gi;
const DND = imports.ui.dnd;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const {
    TaskBar,
    TaskBarItem,
} = Me.imports.src.layout.msWorkspace.horizontalPanel.taskBar;
const {
    LayoutSwitcher,
} = Me.imports.src.layout.msWorkspace.horizontalPanel.layoutSwitcher;
const { VerticalPanelPositionEnum } = Me.imports.src.manager.msThemeManager;
const { MatPanelButton } = Me.imports.src.layout.verticalPanel.panelButton;

/* exported HorizontalPanel */
var HorizontalPanel = GObject.registerClass(
    class HorizontalPanel extends St.BoxLayout {
        _init(msWorkspace) {
            super._init({
                name: 'horizontalPanel',
            });
            this._delegate = this;

            this.msWorkspace = msWorkspace;
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.taskBar = new TaskBar(msWorkspace, this.menuManager);
            this.layoutSwitcher = new LayoutSwitcher(
                msWorkspace,
                this.menuManager
            );

            this.add_child(this.taskBar);
            this.add_child(this.layoutSwitcher);
            const clockHorizontalSignal = Me.msThemeManager.connect(
                'clock-horizontal-changed',
                () => {
                    this.toggleClock();
                }
            );
            const verticalPanelPositionSignal = Me.msThemeManager.connect(
                'vertical-panel-position-changed',
                () => {
                    this.toggleButton();
                }
            );
            this.connect('destroy', () => {
                Me.msThemeManager.disconnect(clockHorizontalSignal);
                Me.msThemeManager.disconnect(verticalPanelPositionSignal);
            });
            this.toggleClock();
            this.toggleButton();
        }

        toggleClock() {
            if (Me.msThemeManager.clockHorizontal) {
                this.createClock();
            } else {
                this.removeClock();
            }
        }

        toggleButton() {
            if (
                Me.msThemeManager.verticalPanelPosition ===
                VerticalPanelPositionEnum.LEFT
            ) {
                this.removeSearchButton();
            } else {
                this.createSearchButton();
            }
        }

        createSearchButton() {
            // this.searchButtonBin = new St.BoxLayout({});
            this.icon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/magnify-symbolic.svg`
                ),
                style_class: 'mat-panel-button-icon',
                icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
            });

            this.searchButton = new MatPanelButton({
                child: this.icon,
                primary: true,
            });

            this.searchButton.connect('clicked', () => {
                if (!Main.overview._shown) {
                    Main.overview.show();
                } else {
                    Main.overview.hide();
                }
            });
            // this.searchButtonBin.add_child(this.searchButton);
            // this.searchButtonBin.add_style_class_name('msPanel');
            this.insert_child_at_index(this.searchButton, 0);
        }

        removeSearchButton() {
            if (!this.searchButton) return;
            this.remove_child(this.searchButton);
            this.searchButton.destroy();
            this.searchButton = null;
            this.icon = null;
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
            const clockPosition = this.get_n_children() - 2;
            this.insert_child_at_index(this.clockBin, clockPosition);
            this.clockLabel.connect('destroy', () => {
                this._wallClock.disconnect(this.signalClock);
                delete this._wallClock;
            });
        }

        removeClock() {
            if (!this.clockBin) return;
            this.remove_child(this.clockBin);
            this.clockBin.destroy();
            this.clockBin = null;
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
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            let clockWidth = this.clockBin
                ? this.clockBin.get_preferred_width(-1)[1]
                : 0;

            if (this.icon && this.icon.height !== contentBox.heigh) {
                this.icon.set_icon_size(
                    Me.msThemeManager.getPanelSizeNotScaled() / 2
                );
            }
            let searchButtonWidth = this.searchButton
                ? this.searchButton.width
                : 0;
            if (this.searchButton) {
                let searchButtonBox = new Clutter.ActorBox();
                searchButtonBox.x1 = contentBox.x1;
                searchButtonBox.x2 = contentBox.x1 + searchButtonWidth;
                searchButtonBox.y1 = contentBox.y1;
                searchButtonBox.y2 = contentBox.y2;
                Allocate(this.searchButton, searchButtonBox, flags);
            }

            let taskBarBox = new Clutter.ActorBox();
            taskBarBox.x1 = contentBox.x1 + searchButtonWidth;
            taskBarBox.x2 = Math.max(
                contentBox.x2 - this.layoutSwitcher.width - clockWidth,
                0
            );
            taskBarBox.y1 = contentBox.y1;
            taskBarBox.y2 = contentBox.y2;
            Allocate(this.taskBar, taskBarBox, flags);

            if (this.clockBin) {
                let clockBox = new Clutter.ActorBox();
                clockBox.x1 = taskBarBox.x2;
                clockBox.x2 = contentBox.x2 - this.layoutSwitcher.width;
                clockBox.y1 = contentBox.y1;
                clockBox.y2 = contentBox.y2;
                Allocate(this.clockBin, clockBox, flags);
            }

            let layoutSwitcherBox = new Clutter.ActorBox();
            layoutSwitcherBox.x1 = contentBox.x2 - this.layoutSwitcher.width;
            layoutSwitcherBox.x2 = contentBox.x2;
            layoutSwitcherBox.y1 = contentBox.y1;
            layoutSwitcherBox.y2 = contentBox.y2;
            Allocate(this.layoutSwitcher, layoutSwitcherBox, flags);
        }
    }
);

/** Gnome libs imports */
const { St, GObject, Clutter, Gio, GnomeDesktop } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { reparentActor } = Me.imports.src.utils.index;
const { VerticalPanelPositionEnum } = Me.imports.src.manager.msThemeManager;
/* exported MsStatusArea */
var MsStatusArea = GObject.registerClass(
    {
        GTypeName: 'MsStatusArea',
    },
    class MsStatusArea extends Clutter.Actor {
        _init() {
            super._init({
                layout_manager: new Clutter.BoxLayout({
                    orientation: Clutter.Orientation.VERTICAL,
                    pack_start: true,
                }),
            });
            this.gnomeShellPanel = Main.panel;
            this.leftBoxActors = [];
            this.centerBoxActors = [];
            this.rightBoxActors = [];
            this.dateMenu = this.gnomeShellPanel.statusArea.dateMenu;
            this.enable();
        }

        enable() {
            this.verticaliseDateMenuButton();
            this.stealPanelActors();
            this.overridePanelMenuSide();
        }

        verticaliseDateMenuButton() {
            this.originalDateMenuBox = this.dateMenu._clockDisplay.get_parent();
            this.dateMenu.remove_child(this.originalDateMenuBox);
            this.msDateMenuBox = new MsDateMenuBox(this.dateMenu);
            this.dateMenu.add_child(this.msDateMenuBox);
        }

        unVerticaliseDateMenuButton() {
            this.msDateMenuBox.destroy();
            delete this.msDateMenuBox;
            this.dateMenu.add_child(this.originalDateMenuBox);
        }

        stealPanelActors() {
            this.gnomeShellPanel._leftBox
                .get_children()
                .filter((actor) => {
                    return (
                        actor !=
                            this.gnomeShellPanel.statusArea.activities
                                .container &&
                        actor !=
                            this.gnomeShellPanel.statusArea.appMenu.container
                    );
                })
                .forEach((actor) => {
                    this.stealActor(actor, this.leftBoxActors);
                });
            this.leftBoxActorAddedSignal = this.gnomeShellPanel._leftBox.connect(
                'actor-added',
                (_, actor) => {
                    this.stealActor(actor, this.leftBoxActors);
                }
            );
            this.gnomeShellPanel._centerBox.get_children().forEach((actor) => {
                this.stealActor(actor, this.centerBoxActors);
            });
            this.centerBoxActorAddedSignal = this.gnomeShellPanel._centerBox.connect(
                'actor-added',
                (_, actor) => {
                    this.stealActor(actor, this.centerBoxActors);
                }
            );
            this.gnomeShellPanel._rightBox
                .get_children()
                .reverse()
                .forEach((actor) => {
                    this.stealActor(actor, this.rightBoxActors);
                });
            this.rightBoxActorAddedSignal = this.gnomeShellPanel._rightBox.connect(
                'actor-added',
                (_, actor) => {
                    this.stealActor(actor, this.rightBoxActors);
                }
            );
        }

        stealActor(actor, container) {
            container.push(actor);
            actor.connect('destroy', () => {
                container.splice(container.indexOf(actor), 1);
            });
            actor.y_expand = false;
            actor.x_expand = true;
            this.recursivelySetVertical(actor, true);
            reparentActor(actor, this);
        }

        restorePanelActors() {
            this.gnomeShellPanel._leftBox.disconnect(
                this.leftBoxActorAddedSignal
            );
            this.gnomeShellPanel._centerBox.disconnect(
                this.centerBoxActorAddedSignal
            );
            this.gnomeShellPanel._rightBox.disconnect(
                this.rightBoxActorAddedSignal
            );

            this.leftBoxActors.forEach((actor) => {
                if (!actor) return;
                this.recursivelySetVertical(actor, false);
                reparentActor(actor, this.gnomeShellPanel._leftBox);
            });
            this.centerBoxActors.forEach((actor) => {
                if (!actor) return;
                this.recursivelySetVertical(actor, false);
                reparentActor(actor, this.gnomeShellPanel._centerBox);
            });
            this.rightBoxActors.reverse().forEach((actor) => {
                if (!actor) return;
                this.recursivelySetVertical(actor, false);
                reparentActor(actor, this.gnomeShellPanel._rightBox);
            });
        }

        recursivelySetVertical(actor, value) {
            if (actor instanceof St.BoxLayout) {
                actor.vertical = value;
                actor.set_x_align(Clutter.ActorAlign.CENTER);
            }
            if (
                actor instanceof St.Icon &&
                actor.has_style_class_name('popup-menu-arrow')
            ) {
                actor.visible = !value;
            }
            if (
                actor.has_style_class_name &&
                actor.has_style_class_name('panel-button')
            ) {
                actor.y_expand = !value;
            }

            actor.get_children().forEach((child) => {
                this.recursivelySetVertical(child, value);
            });
        }

        overridePanelMenuSide() {
            // For each menu override the opening side to match the vertical panel
            this.gnomeShellPanel.menuManager._menus.forEach((menuData) => {
                if (menuData.menu._boxPointer) {
                    menuData.menu._boxPointer.oldArrowSideFunction =
                        menuData.menu._boxPointer._calculateArrowSide;
                    menuData.menu._boxPointer._calculateArrowSide = function () {
                        return Me.msThemeManager.verticalPanelPosition ===
                            VerticalPanelPositionEnum.LEFT
                            ? St.Side.LEFT
                            : St.Side.RIGHT;
                    };
                }
            });
        }

        restorePanelMenuSide() {
            this.gnomeShellPanel.menuManager._menus.forEach((menuData) => {
                if (menuData.menu._boxPointer) {
                    menuData.menu._boxPointer._calculateArrowSide =
                        menuData.menu._boxPointer.oldArrowSideFunction;
                    delete menuData.menu._boxPointer.oldArrowSideFunction;
                }
            });
        }
        disable() {
            this.unVerticaliseDateMenuButton();
            this.restorePanelMenuSide();
            this.restorePanelActors();
            this.gnomeShellPanel.statusArea.aggregateMenu.set_y_expand(true);
        }
    }
);

var MsDateMenuBox = GObject.registerClass(
    {
        GTypeName: 'MsDateMenuBox',
    },
    class MsDateMenuBox extends St.Widget {
        _init(dateMenu) {
            super._init({
                x_align: Clutter.ActorAlign.CENTER,
                layout_manager: new Clutter.BinLayout(),
            });
            this.dateMenu = dateMenu;
            // Before 3.36 _indicator was just a class with an actor as property
            this.indicatorActor =
                this.dateMenu._indicator instanceof Clutter.Actor
                    ? this.dateMenu._indicator
                    : this.dateMenu._indicator.actor;

            this._wallClock = new GnomeDesktop.WallClock({ time_only: true });

            this.clockLabel = new St.Label({});

            this.notificationIcon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/bell-symbolic.svg`
                ),
            });

            this.notificationIconRing = new St.Icon({
                style_class: 'primary',
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/bell-ring-symbolic.svg`
                ),
            });

            this.dndIcon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/bell-off-symbolic.svg`
                ),
            });

            this._settings = new Gio.Settings({
                schema_id: 'org.gnome.desktop.notifications',
            });

            this.iconDisplay = new Clutter.Actor();
            this.iconDisplay.add_child(this.notificationIcon);
            this.iconDisplay.add_child(this.notificationIconRing);
            this.iconDisplay.add_child(this.dndIcon);
            if (Me.msThemeManager.clockHorizontal) {
                this.add_child(this.iconDisplay);
            } else {
                this.add_child(this.clockLabel);
            }

            Me.msThemeManager.connect('clock-horizontal-changed', () => {
                if (Me.msThemeManager.clockHorizontal) {
                    this.remove_child(this.clockLabel);
                    this.add_child(this.iconDisplay);
                } else {
                    this.remove_child(this.iconDisplay);
                    this.add_child(this.clockLabel);
                }
                this.updateVisibility();
            });

            this.updateVisibility();
            this.updateClock();
            this.dateMenuSignal = this._wallClock.connect(
                'notify::clock',
                this.updateClock.bind(this)
            );

            this.indicatorSignal = this.indicatorActor.connect(
                'notify::visible',
                this.updateVisibility.bind(this)
            );

            this.connect('destroy', () => {
                this.indicatorActor.disconnect(this.indicatorSignal);
                this._wallClock.disconnect(this.dateMenuSignal);
                delete this._wallClock;
            });
        }

        updateClock() {
            /**
             * Format clock display to fit into the vertical panel
             * Place each section of the clock (HH, MM, AM/PM) onto its own line
             *
             * Deliberately separates HH:MM into distinct sections
             */
            let clockSections = this._wallClock.clock
                .replace(/∶/g, ' ')
                .split(' ');
            if (!clockSections[0]) clockSections.shift();
            const markup = clockSections
                .map((section) => `<span>${section}</span>`)
                .join('\n');
            this.clockLabel.clutter_text.set_markup(markup);
            this.updateVisibility();
        }

        updateVisibility() {
            let doNotDisturb = !this._settings.get_boolean('show-banners');
            if (this.indicatorActor.visible) {
                if (Me.msThemeManager.clockHorizontal) {
                    if (doNotDisturb) {
                        this.dndIcon.show();
                        this.notificationIconRing.hide();
                    } else {
                        this.dndIcon.hide();
                        this.notificationIconRing.show();
                    }
                    this.notificationIcon.hide();
                } else {
                    if (doNotDisturb) {
                        if (this.clockLabel.has_style_class_name('primary')) {
                            this.clockLabel.remove_style_class_name('primary');
                        }
                        return;
                    }
                    if (this.clockLabel.has_style_class_name('primary')) return;
                    this.clockLabel.add_style_class_name('primary');
                }
            } else {
                if (Me.msThemeManager.clockHorizontal) {
                    this.notificationIcon.show();
                    this.notificationIconRing.hide();
                    this.dndIcon.hide();
                } else {
                    if (!this.clockLabel.has_style_class_name('primary'))
                        return;
                    this.clockLabel.remove_style_class_name('primary');
                }
            }
        }
    }
);

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GnomeDesktop from 'gnomedesktop';
import * as GObject from 'gobject';
import { VerticalPanelPositionEnum } from 'src/manager/msThemeManager';
import { assert, assertNotNull } from 'src/utils/assert';
import { registerGObjectClass } from 'src/utils/gjs';
import { reparentActor } from 'src/utils/index';
import { gnomeVersionGreaterOrEqualTo, gnomeVersionLessOrEqualTo } from 'src/utils/shellVersionMatch';
import * as St from 'st';
import { dateMenu, main as Main } from 'ui';
import { panel } from 'ui';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class MsStatusArea extends Clutter.Actor {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsStatusArea',
    };
    gnomeShellPanel: panel.Panel;
    leftBoxActors: Clutter.Actor[];
    rightBoxActors: Clutter.Actor[];
    dateMenu: dateMenu.DateMenuButton;
    originalDateMenuBox: any;
    msDateMenuBox?: MsDateMenuBox;
    signalIds: {
        leftBoxActor: number,
        centerBoxActor: number,
        rightBoxActor: number,
    } | null = null;
    centerBoxActors: Clutter.Actor[];

    constructor() {
        super({
            layout_manager: new Clutter.BoxLayout({
                orientation: Clutter.Orientation.VERTICAL,
                pack_start: false,
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
        assert(
            this.msDateMenuBox === undefined,
            'date menu button has alreayd been verticalized'
        );
        this.originalDateMenuBox = this.dateMenu._clockDisplay.get_parent();
        this.dateMenu.remove_child(this.originalDateMenuBox);
        this.msDateMenuBox = new MsDateMenuBox(this.dateMenu);
        this.dateMenu.add_child(this.msDateMenuBox);
    }

    unVerticaliseDateMenuButton() {
        assert(
            this.msDateMenuBox !== undefined,
            "date menu button hasn't been verticalized"
        );
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
                        this.gnomeShellPanel.statusArea.activities.container &&
                    actor != this.gnomeShellPanel.statusArea.appMenu.container
                );
            })
            .forEach((actor) => {
                this.stealActor(actor, this.leftBoxActors);
            });
        const leftBoxActorAddedSignal = this.gnomeShellPanel._leftBox.connect(
            'actor-added',
            (_, actor) => {
                this.stealActor(actor, this.leftBoxActors);
            }
        );
        this.gnomeShellPanel._centerBox.get_children().forEach((actor) => {
            this.stealActor(actor, this.centerBoxActors);
        });
        const centerBoxActorAddedSignal =
            this.gnomeShellPanel._centerBox.connect(
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
        const rightBoxActorAddedSignal = this.gnomeShellPanel._rightBox.connect(
            'actor-added',
            (_, actor) => {
                this.stealActor(actor, this.rightBoxActors);
            }
        );
        this.signalIds = {
            rightBoxActor: rightBoxActorAddedSignal,
            leftBoxActor: leftBoxActorAddedSignal,
            centerBoxActor: centerBoxActorAddedSignal,
        };
    }

    stealActor(actor: Clutter.Actor, container: Clutter.Actor[]) {
        container.push(actor);
        actor.connect('destroy', () => {
            container.splice(container.indexOf(actor), 1);
        });
        actor.y_expand = false;
        actor.x_expand = true;
        this.recursivelySetVertical(actor, true);
        reparentActor(actor, this, true);
    }

    restorePanelActors() {
        const signalIds = assertNotNull(this.signalIds);
        this.gnomeShellPanel._leftBox.disconnect(signalIds.leftBoxActor);
        this.gnomeShellPanel._centerBox.disconnect(signalIds.centerBoxActor);
        this.gnomeShellPanel._rightBox.disconnect(signalIds.rightBoxActor);

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

    recursivelySetVertical(
        actor: Clutter.Actor & {
            has_style_class_name?: (name: string) => boolean;
        },
        value: boolean
    ) {
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
        // TODO: Is `actor instanceof St.Button` enough?
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
        for (const menuData of this.gnomeShellPanel.menuManager._menus) {
            const menu = gnomeVersionGreaterOrEqualTo(menuData, "42.0") ? menuData : menuData.menu;

            if (menu._boxPointer) {
                (menu._boxPointer as any).oldArrowSideFunction =
                    menu._boxPointer._calculateArrowSide;
                menu._boxPointer._calculateArrowSide = function () {
                    return Me.msThemeManager.verticalPanelPosition ===
                        VerticalPanelPositionEnum.LEFT
                        ? St.Side.LEFT
                        : St.Side.RIGHT;
                };
            }
        }
    }

    restorePanelMenuSide() {
        for (const menuData of this.gnomeShellPanel.menuManager._menus) {
            const menu = gnomeVersionGreaterOrEqualTo(menuData, "42.0") ? menuData : menuData.menu;

            if (menu._boxPointer) {
                menu._boxPointer._calculateArrowSide =
                    (menu._boxPointer as any).oldArrowSideFunction;
                delete (menu._boxPointer as any).oldArrowSideFunction;
            }
        }
    }
    disable() {
        Me.logFocus('disable statusArea');
        this.unVerticaliseDateMenuButton();
        this.restorePanelMenuSide();
        this.restorePanelActors();
        this.gnomeShellPanel.statusArea.aggregateMenu.set_y_expand(true);
    }
}

@registerGObjectClass
export class MsDateMenuBox extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsDateMenuBox',
    };
    dateMenu: dateMenu.DateMenuButton;
    indicatorActor: dateMenu.MessagesIndicator;
    private _wallClock: any;
    clockLabel: St.Label<
        Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    >;
    notificationIcon: St.Icon<
        Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    >;
    notificationIconRing: St.Icon<
        Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    >;
    dndIcon: St.Icon<
        Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    >;
    private _settings: Gio.Settings;
    iconDisplay: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>;
    dateMenuSignal: number;
    indicatorSignal: number;

    constructor(dateMenu: dateMenu.DateMenuButton) {
        super({
            x_align: Clutter.ActorAlign.CENTER,
            layout_manager: new Clutter.BinLayout(),
        });
        this.dateMenu = dateMenu;
        this.indicatorActor = this.dateMenu._indicator;

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
        const clockSections: string[] = this._wallClock.clock
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
        const doNotDisturb = !this._settings.get_boolean('show-banners');
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
                if (!this.clockLabel.has_style_class_name('primary')) return;
                this.clockLabel.remove_style_class_name('primary');
            }
        }
    }
}

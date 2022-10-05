/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GnomeDesktop from 'gnomedesktop';
import * as GObject from 'gobject';
import * as Shell from 'shell';
import { VerticalPanelPositionEnum } from 'src/manager/msThemeManager';
import { assert, assertNotNull } from 'src/utils/assert';
import { getExtensionSettings } from 'src/utils/extension_utils';
import { registerGObjectClass } from 'src/utils/gjs';
import { reparentActor } from 'src/utils/index';
import {
    compareVersions,
    gnomeVersionGreaterOrEqualTo,
    gnomeVersionNumber,
    parseVersion,
} from 'src/utils/shellVersionMatch';
import * as St from 'st';
import { dateMenu, main as Main, panel } from 'ui';
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
    msDateMenuBox?: {
        box: MsDateMenuBox;
        originalDateMenuBox: Clutter.Actor;
    };
    signalIds: {
        leftBoxActor: number;
        centerBoxActor: number;
        rightBoxActor: number;
    } | null = null;
    centerBoxActors: Clutter.Actor[];
    originalAppIndicatorIconSize: number | undefined = undefined;

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

        const panelSizeSignal = Me.msThemeManager.connect(
            'panel-size-changed',
            () => this.onPanelSizeChanged()
        );

        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(panelSizeSignal);
            this.restoreAppIndicatorSettings();
        });

        this.onPanelSizeChanged();
    }

    onPanelSizeChanged() {
        for (const child of this.get_children()) {
            this.recursivelySetProperties(child, true);
        }
        this.overrideAppIndicatorSettings();
    }

    overrideAppIndicatorSettings() {
        // Ubuntu app indicators forces the icon size to whatever is specified in their settings.
        // So we need to override its icon size.
        const iconSize = this.iconSize();
        const appIndicatorSettings =
            getExtensionSettings('ubuntu-appindicators@ubuntu.com') ||
            getExtensionSettings('appindicatorsupport@rgcjonas.gmail.com');
        if (appIndicatorSettings) {
            if (this.originalAppIndicatorIconSize === undefined) {
                this.originalAppIndicatorIconSize =
                    appIndicatorSettings.get_int('icon-size');
            }
            appIndicatorSettings.set_int('icon-size', iconSize);
        }

        // Ubuntu app indicators reads this property.
        // Sadly it only does that on startup, so we can't quite
        // get things to work properly if the panel size setting changes.
        panel.PANEL_ICON_SIZE = iconSize;
    }

    restoreAppIndicatorSettings() {
        if (this.originalAppIndicatorIconSize === undefined) return;
        // Restoring the settings won't actually work most of the time.
        // Since we don't get a proper signal when shutting down gnome-shell (when logging out, or gnome-shell crashes, etc.)
        // we can't reliably restore the settings. But it might still be useful if a user tries material shell for a few minutes
        // and realizes its not for them. Then we can properly restore the settings.
        const appIndicatorSettings =
            getExtensionSettings('ubuntu-appindicators@ubuntu.com') ||
            getExtensionSettings('appindicatorsupport@rgcjonas.gmail.com');
        if (appIndicatorSettings) {
            appIndicatorSettings.set_int(
                'icon-size',
                this.originalAppIndicatorIconSize
            );
        }
        // Reset to the default value (based on gnome source code)
        panel.PANEL_ICON_SIZE = 16;
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
        const originalDateMenuBox = assertNotNull(
            this.dateMenu._clockDisplay.get_parent()
        );
        this.dateMenu.remove_child(originalDateMenuBox);
        this.msDateMenuBox = {
            box: new MsDateMenuBox(this.dateMenu),
            originalDateMenuBox,
        };
        this.dateMenu.add_child(this.msDateMenuBox.box);
    }

    unVerticaliseDateMenuButton() {
        assert(
            this.msDateMenuBox !== undefined,
            "date menu button hasn't been verticalized"
        );
        this.msDateMenuBox.box.destroy();
        this.dateMenu.add_child(this.msDateMenuBox.originalDateMenuBox);
        delete this.msDateMenuBox;
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

    /** Returns a comparable index indicating where the actor should be shown in the icon list.
     * The desired sorting order is clock/notification -> system menu -> extensions icons.
     */
    determineSortingOrder(actor: Clutter.Actor) {
        // All icons actors should have a single child.
        const mainChild = actor.get_children()[0] as Clutter.Actor | undefined;
        if (mainChild !== undefined) {
            if (
                mainChild instanceof
                (compareVersions(gnomeVersionNumber, parseVersion('43.0')) >= 0
                    ? panel.QuickSettings
                    : panel.AggregateMenu)
            ) {
                // This is the main system menu
                return 1;
            } else if (mainChild instanceof dateMenu.DateMenuButton) {
                return 2;
            }
        }
        return 0;
    }

    stealActor(actor: Clutter.Actor, container: Clutter.Actor[]) {
        container.push(actor);
        actor.connect('destroy', () => {
            container.splice(container.indexOf(actor), 1);
        });
        actor.y_expand = false;
        actor.x_expand = true;
        this.recursivelySetProperties(actor, true);
        actor.get_parent()?.remove_child(actor);
        const index = [actor, ...this.get_children()]
            .sort((a, b) => {
                return (
                    this.determineSortingOrder(a) -
                    this.determineSortingOrder(b)
                );
            })
            .indexOf(actor);
        assert(index !== -1, 'Expected actor to be in one of the containers');
        this.insert_child_at_index(actor, index);
    }

    restorePanelActors() {
        const signalIds = assertNotNull(this.signalIds);
        this.gnomeShellPanel._leftBox.disconnect(signalIds.leftBoxActor);
        this.gnomeShellPanel._centerBox.disconnect(signalIds.centerBoxActor);
        this.gnomeShellPanel._rightBox.disconnect(signalIds.rightBoxActor);

        this.leftBoxActors.forEach((actor) => {
            if (!actor) return;
            this.recursivelySetProperties(actor, false);
            reparentActor(actor, this.gnomeShellPanel._leftBox);
        });
        this.centerBoxActors.forEach((actor) => {
            if (!actor) return;
            this.recursivelySetProperties(actor, false);
            reparentActor(actor, this.gnomeShellPanel._centerBox);
        });
        this.rightBoxActors.reverse().forEach((actor) => {
            if (!actor) return;
            this.recursivelySetProperties(actor, false);
            reparentActor(actor, this.gnomeShellPanel._rightBox);
        });
    }

    iconSize() {
        return Math.max(
            16.0,
            Math.round(Me.msThemeManager.getPanelSizeNotScaled() / 3)
        );
    }

    recursivelySetProperties(
        actor: Clutter.Actor & {
            has_style_class_name?: (name: string) => boolean;
        },
        controlledByMS: boolean
    ) {
        if (actor instanceof St.BoxLayout) {
            actor.vertical = controlledByMS;
            actor.set_x_align(Clutter.ActorAlign.CENTER);
        }
        if (
            actor instanceof St.Icon &&
            actor.has_style_class_name('popup-menu-arrow')
        ) {
            actor.visible = !controlledByMS;
        }
        if (actor instanceof St.Icon) {
            if (controlledByMS) {
                const iconSize = this.iconSize();
                // Scale the icon to the panel size and ensure the spacing is also scaled appropriately
                // Can't use actor.marginTop/... because they seem to be reset somehow.
                actor.set_style(
                    `margin-top: ${Math.round(iconSize * 0.5)}px;
                    margin-bottom: ${Math.round(iconSize * 0.5)}px;
                    icon-size: ${iconSize}px;
                    `
                );
            } else {
                // Unset all values. The gnome theme will take care of sizing them now.
                actor.set_style(null);
            }
        }
        if (actor instanceof Shell.TrayIcon) {
            if (controlledByMS) {
                const iconSize = this.iconSize();
                // Scale the icon to the panel size and ensure the spacing is also scaled appropriately
                actor.marginTop = Math.round(iconSize * 0.5);
                actor.marginBottom = Math.round(iconSize * 0.5);
                actor.width = iconSize;
                actor.height = iconSize;
            } else {
                // Unset all values. The gnome theme will take care of sizing them now.
                actor.marginTop = -1;
                actor.marginBottom = -1;
                actor.width = -1;
                actor.height = -1;
            }
        }

        // TODO: Is `actor instanceof St.Button` enough?
        if (
            actor.has_style_class_name &&
            actor.has_style_class_name('panel-button')
        ) {
            actor.y_expand = !controlledByMS;
        }

        actor.get_children().forEach((child) => {
            this.recursivelySetProperties(child, controlledByMS);
        });
    }

    overridePanelMenuSide() {
        // For each menu override the opening side to match the vertical panel
        for (const menuData of this.gnomeShellPanel.menuManager._menus) {
            const menu = gnomeVersionGreaterOrEqualTo(menuData, '42.0')
                ? menuData
                : menuData.menu;

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
            const menu = gnomeVersionGreaterOrEqualTo(menuData, '42.0')
                ? menuData
                : menuData.menu;

            if (menu._boxPointer) {
                menu._boxPointer._calculateArrowSide = (
                    menu._boxPointer as any
                ).oldArrowSideFunction;
                delete (menu._boxPointer as any).oldArrowSideFunction;
            }
        }
    }
    disable() {
        Me.logFocus('disable statusArea');
        this.unVerticaliseDateMenuButton();
        this.restorePanelMenuSide();
        this.restorePanelActors();
        this.restoreAppIndicatorSettings();

        if (compareVersions(gnomeVersionNumber, parseVersion('43.0')) >= 0) {
            this.gnomeShellPanel.statusArea.quickSettings.set_y_expand(true);
        } else {
            this.gnomeShellPanel.statusArea.aggregateMenu.set_y_expand(true);
        }
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

        const clockHorizontalSignal = Me.msThemeManager.connect(
            'clock-horizontal-changed',
            () => {
                if (Me.msThemeManager.clockHorizontal) {
                    this.remove_child(this.clockLabel);
                    this.add_child(this.iconDisplay);
                } else {
                    this.remove_child(this.iconDisplay);
                    this.add_child(this.clockLabel);
                }
                this.updateVisibility();
            }
        );

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
            Me.msThemeManager.disconnect(clockHorizontalSignal);
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

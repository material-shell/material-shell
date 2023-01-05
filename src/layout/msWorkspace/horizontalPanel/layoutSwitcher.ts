/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import { MatPanelButton } from 'src/layout/verticalPanel/panelButton';
import {
    LayoutState,
    LayoutType,
    TilingLayoutByKey,
} from 'src/manager/layoutManager';
import { assert, assertNotNull } from 'src/utils/assert';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
import { main as Main, popupMenu } from 'ui';
import { MsWorkspace } from '../msWorkspace';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class LayoutSwitcher extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'LayoutSwitcher',
    };
    layoutQuickWidgetBin: St.Bin;
    tilingIcon: St.Icon;
    switcherButton: MatPanelButton;
    menuManager: popupMenu.PopupMenuManager;
    msWorkspace: MsWorkspace;
    menu: popupMenu.PopupMenu;

    constructor(
        msWorkspace: MsWorkspace,
        panelMenuManager: popupMenu.PopupMenuManager
    ) {
        super({});
        this.layoutQuickWidgetBin = new St.Bin({
            style_class: 'layout-quick-widget-bin',
            y_align: Clutter.ActorAlign.CENTER,
        });
        this.tilingIcon = new St.Icon({
            style_class: 'mat-panel-button-icon',
        });
        this.switcherButton = new MatPanelButton({
            child: this.tilingIcon,
            style_class: 'mat-panel-button',
            can_focus: true,
            track_hover: true,
        });
        this.switcherButton.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter.ScrollDirection.UP:
                    this.msWorkspace.nextLayout(-1);
                    break;
                case Clutter.ScrollDirection.DOWN:
                    this.msWorkspace.nextLayout(1);
                    break;
            }
        });
        this.add_child(this.layoutQuickWidgetBin);
        this.add_child(this.switcherButton);

        this.msWorkspace = msWorkspace;
        this.menuManager = panelMenuManager;

        this.switcherButton.connect('clicked', (_actor, _button) => {
            // Go in reverse direction on right click (button: 3)
            //msWorkspace.nextLayout(button === 3 ? -1 : 1);
            this.menu.toggle();
        });
        this.updateLayoutWidget();
        const connectId = this.msWorkspace.connect(
            'tiling-layout-changed',
            this.updateLayoutWidget.bind(this)
        );
        this.menu = this.buildMenu();
        Main.layoutManager.uiGroup.add_actor(this.menu.actor);
        this.menuManager.addMenu(this.menu);

        this.connect('destroy', () => {
            this.msWorkspace.disconnect(connectId);
        });
    }

    updateLayoutWidget() {
        this.layoutQuickWidgetBin.set_child(null);

        if (!this.msWorkspace.layout) {
            return;
        }

        const quickWidget = this.msWorkspace.layout.buildQuickWidget();
        if (quickWidget) {
            this.layoutQuickWidgetBin.set_child(quickWidget);
            this.layoutQuickWidgetBin.show();
        } else {
            this.layoutQuickWidgetBin.hide();
        }
        this.tilingIcon.gicon = this.msWorkspace.layout.icon;
    }

    buildMenu() {
        const menu = new popupMenu.PopupMenu(this, 0.5, St.Side.TOP);
        menu.actor.add_style_class_name('horizontal-panel-menu');
        menu.actor.hide();
        Object.entries(TilingLayoutByKey).forEach(
            ([layoutKey, layoutConstructor]) => {
                menu.addMenuItem(
                    new TilingLayoutMenuItem(
                        layoutConstructor,
                        this.msWorkspace.state.layoutStateList.find(
                            (layoutState) => layoutState.key === layoutKey
                        ) != null
                    )
                );
            }
        );
        menu.addMenuItem(new popupMenu.PopupSeparatorMenuItem());
        menu.addMenuItem(new LayoutsToggle(menu));
        return menu;
    }

    setLayout(layoutKey: string) {
        this.msWorkspace.setLayoutByKey(layoutKey);
    }

    addLayout(layoutKey: string) {
        if (
            this.msWorkspace.state.layoutStateList.find(
                (layoutState) => layoutState.key === layoutKey
            ) != null
        )
            return true;

        // Add the layout in the right order
        const wantedIndex = Me.layoutManager.layoutList.findIndex((layout) => {
            return layoutKey === layout.state.key;
        });
        // Note: This cast is safe, typescript is just not good enough to figure that out
        const newState = Me.layoutManager.getLayoutByKey(layoutKey)
            .state as LayoutState;
        if (wantedIndex > this.msWorkspace.state.layoutStateList.length) {
            this.msWorkspace.state.layoutStateList.push(newState);
        } else {
            this.msWorkspace.state.layoutStateList.splice(
                wantedIndex,
                0,
                newState
            );
        }
        Me.stateManager.stateChanged();
        return true;
    }

    removeLayout(layoutKey: string) {
        if (this.msWorkspace.state.layoutStateList.length === 1) return false;
        if (
            this.msWorkspace.state.layoutStateList.find(
                (layoutState) => layoutState.key === layoutKey
            ) === null
        )
            return true;
        const index = this.msWorkspace.state.layoutStateList.findIndex(
            (layoutState) => layoutState.key === layoutKey
        );
        this.msWorkspace.state.layoutStateList.splice(index, 1);
        Me.stateManager.stateChanged();

        return true;
    }

    vfunc_allocate(...args: [Clutter.ActorBox]) {
        const height = Me.msThemeManager.getPanelSizeNotScaled() / 2;

        if (this.tilingIcon && this.tilingIcon.get_icon_size() != height) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                this.tilingIcon.set_icon_size(height);
                return GLib.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
}

@registerGObjectClass
export class TilingLayoutMenuItem extends popupMenu.PopupSwitchMenuItem {
    layoutConstructor: LayoutType;
    editable = false;

    constructor(
        layoutConstructor: LayoutType,
        active: boolean,
        params?: popupMenu.PopupBaseMenuItemParams
    ) {
        super(layoutConstructor.label, active, params);
        this.layoutConstructor = layoutConstructor;
        this._icon = new St.Icon({
            style_class: 'popup-menu-icon',
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/tiling/${layoutConstructor.state.key}-symbolic.svg`
            ),
            x_align: Clutter.ActorAlign.END,
        });
        this.insert_child_at_index(this._icon, 1);
        this.setEditable(false);
    }

    get layoutSwitcher(): LayoutSwitcher {
        const layoutSwitcher = assertNotNull(this._parent).sourceActor;
        assert(
            layoutSwitcher instanceof LayoutSwitcher,
            "expected menu's source actor to be a LayoutSwitcher"
        );
        return layoutSwitcher;
    }

    override activate(event: Clutter.Event) {
        if (!this.editable) {
            this.layoutSwitcher.setLayout(this.layoutConstructor.state.key);
            this.emit('activate', event);
        } else {
            if (this.state) {
                if (
                    this.layoutSwitcher.removeLayout(
                        this.layoutConstructor.state.key
                    )
                ) {
                    this.toggle();
                }
            } else {
                if (
                    this.layoutSwitcher.addLayout(
                        this.layoutConstructor.state.key
                    )
                ) {
                    this.toggle();
                }
            }
        }
        return;
    }

    setEditable(editable: boolean) {
        this.editable = editable;
        if (this.editable) {
            this.setSwitcherVisible(true);
            this.setVisible(true);
        } else {
            this.setSwitcherVisible(false);
            if (!this.state) {
                this.setVisible(false);
            }
        }
    }

    setSwitcherVisible(visible: boolean) {
        if (!this.mapped) {
            return (this._statusBin.opacity = visible ? 255 : 0);
        }
        this._statusBin.ease({
            opacity: visible ? 255 : 0,
            duration: 300,
        });
    }

    setVisible(visible: boolean) {
        if (!this.mapped) {
            return (this.height = visible ? -1 : 0);
        }
        if (visible) {
            if (this.height === 0) {
                this.height = -1;
                const height = this.height;
                this.height = 0;
                this.ease({
                    height: height,
                    duration: 300,
                    onComplete: () => {
                        this.height = -1;
                    },
                });
            }
        } else {
            this.ease({
                height: 0,
                duration: 300,
            });
        }
    }
}

@registerGObjectClass
export class LayoutsToggle extends popupMenu.PopupImageMenuItem {
    editText: string;
    editIcon: Gio.IconPrototype;
    confirmText: string;
    confirmIcon: Gio.IconPrototype;
    menu: popupMenu.PopupMenu;
    editable: boolean;

    constructor(
        menu: popupMenu.PopupMenu,
        params?: popupMenu.PopupBaseMenuItemParams
    ) {
        const editText = _('Tweak available layouts');
        const editIcon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/category/settings-symbolic.svg`
        );
        super(editText, editIcon, params);
        this.editText = editText;
        this.editIcon = editIcon;
        this.confirmText = _('Confirm layouts');
        this.confirmIcon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/check-symbolic.svg`
        );
        this.menu = menu;
        this.editable = false;
    }

    activate(_event: Clutter.Event) {
        this.toggleEditMode();
    }

    toggleEditMode() {
        this.editable = !this.editable;
        this.menu._getMenuItems().forEach((item) => {
            if (item instanceof TilingLayoutMenuItem) {
                item.setEditable(this.editable);
            }
        });
        if (this.editable) {
            this.label.set_text(this.confirmText);
            this._icon.gicon = this.confirmIcon;
        } else {
            this.label.set_text(this.editText);
            this._icon.gicon = this.editIcon;
        }
    }
}

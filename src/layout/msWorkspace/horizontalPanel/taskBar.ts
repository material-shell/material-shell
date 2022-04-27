/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import * as Shell from 'shell';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { MsManager } from 'src/manager/msManager';
import { assert, assertNotNull } from 'src/utils/assert';
import { Allocate, SetAllocation } from 'src/utils/compatibility';
import { registerGObjectClass } from 'src/utils/gjs';
import { getSettings } from 'src/utils/settings';
import { ShellVersionMatch } from 'src/utils/shellVersionMatch';
import { MatButton } from 'src/widget/material/button';
import { ReorderableList } from 'src/widget/reorderableList';
import * as St from 'st';
import { MsWorkspace, Tileable } from '../msWorkspace';
import { popupMenu as PopupMenu } from 'ui';
const DND = imports.ui.dnd;
import { main as Main } from 'ui';
import { layout } from 'ui';
import Monitor = layout.Monitor;
import { MsApplicationLauncher } from 'src/widget/msApplicationLauncher';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

let isTileableItem = (obj: any): obj is TileableItem => {
    return obj instanceof TileableItem;
};

let isIconTaskBarItem = (obj: any): obj is IconTaskBarItem => {
    return obj instanceof IconTaskBarItem;
};

let isTileableItemOrIconTaskBarItem = (
    obj: any
): obj is TileableItem | IconTaskBarItem => {
    return isTileableItem(obj) || isIconTaskBarItem(obj);
};
@registerGObjectClass
export class TaskBar extends St.Widget {
    private _delegate: this;
    taskActiveIndicator: TaskActiveIndicator;
    taskButtonContainer: ReorderableList;
    msWorkspace: MsWorkspace;
    msWorkspaceSignals: number[];
    tracker: Shell.WindowTracker;
    windowFocused: null;
    menuManager: PopupMenu.PopupMenuManager;

    constructor(msWorkspace: MsWorkspace, panelMenuManager: PopupMenu.PopupMenuManager) {
        super({
            name: 'taskBar',
            x_expand: true,
            reactive: true,
        });
        this._delegate = this;
        this.taskActiveIndicator = new TaskActiveIndicator({
            style_class: 'task-active-indicator',
        });
        this.add_child(this.taskActiveIndicator);
        this.taskButtonContainer = new ReorderableList(false, [TaskBarItem]);
        this.taskButtonContainer.connect('actor-moved', (_, item, index) => {
            this.msWorkspace.setTileableAtIndex(item.tileable, index);
            this.msWorkspace.focusTileable(item.tileable);
        });
        this.taskButtonContainer.connect(
            'foreign-actor-inserted',
            (_, actor, index) => {
                if (actor.tileable instanceof MsWindow) {
                    Me.msWorkspaceManager.setWindowToMsWorkspace(
                        actor.tileable,
                        this.msWorkspace
                    );
                    this.msWorkspace.setTileableAtIndex(actor.tileable, index);
                    this.msWorkspace.focusTileable(actor.tileable);
                    Me.msWorkspaceManager.stateChanged();
                }
            }
        );
        this.taskButtonContainer.connect(
            'drag-start',
            (_, actor, foreignActor) => {
                this.taskActiveIndicator.hide();
            }
        );
        this.taskButtonContainer.connect(
            'drag-end',
            (_, actor, foreignActor) => {
                this.taskActiveIndicator.show();
            }
        );
        this.add_child(this.taskButtonContainer);
        this.msWorkspace = msWorkspace;
        this.connect('destroy', this._onDestroy.bind(this));
        this.msWorkspaceSignals = [
            msWorkspace.connect(
                'tileableList-changed',
                (_, newTileableList, oldTileableList) => {
                    this.onTileableListChange(newTileableList, oldTileableList);
                }
            ),
            msWorkspace.connect(
                'tileable-focus-changed',
                (_, tileable, oldTileable) => {
                    this.onFocusChanged(tileable, oldTileable);
                }
            ),
        ];

        this.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter.ScrollDirection.UP:
                    this.msWorkspace.focusPreviousTileable();
                    break;
                case Clutter.ScrollDirection.DOWN:
                    this.msWorkspace.focusNextTileable();

                    break;
            }
        });

        this.tracker = Shell.WindowTracker.get_default();
        this.windowFocused = null;
        this.menuManager = panelMenuManager;

        for (const tileable of this.msWorkspace.tileableList) {
            let item = this.createNewItemForTileable(tileable);
            this.taskButtonContainer.add_child(item);
        }
        if (this.items[this.msWorkspace.focusedIndex]) {
            this.items[this.msWorkspace.focusedIndex].setActive(true);
        }
    }

    get items(): (TileableItem | IconTaskBarItem)[] {
        return this.taskButtonContainer
            .get_children()
            .filter(isTileableItemOrIconTaskBarItem);
    }

    /**
     * Update the current list of taskBarItem with the least of widget manipulation possible
     * @param newTileableList
     * @param oldTileableList
     */
    onTileableListChange(
        newTileableList: Tileable[],
        oldTileableList: Tileable[]
    ) {
        const tileableToRemove = oldTileableList.filter(
            (tileable) => !newTileableList.includes(tileable)
        );
        const tileableToAdd = newTileableList.filter(
            (tileable) => !oldTileableList.includes(tileable)
        );

        for (let tileable of tileableToRemove) {
            let item = assertNotNull(this.getTaskBarItemOfTileable(tileable));
            item.destroy();
        }

        for (let tileable of tileableToAdd) {
            let item = this.createNewItemForTileable(tileable);
            this.taskButtonContainer.insert_child_at_index(
                item,
                newTileableList.indexOf(tileable)
            );
        }

        // Ensure tileable position in case of reorder
        newTileableList.forEach((tileable, index) => {
            this.items[index].setTileable(tileable);
        });
    }

    onFocusChanged(
        tileableFocused: Tileable,
        oldTileableFocused: Tileable | null
    ) {
        if (tileableFocused === oldTileableFocused) {
            return;
        }

        const previousItem = oldTileableFocused !== null ? this.getTaskBarItemOfTileable(oldTileableFocused) : null;
        const nextItem = this.getTaskBarItemOfTileable(tileableFocused);

        if (previousItem) {
            if (previousItem.has_style_class_name('active')) {
                previousItem.setActive(false);
            }
        }

        if (!nextItem) return;

        //if you change the class before animate the indicator there is an issue for retrieving the item.x

        nextItem.setActive(true);
    }

    getActiveItem() {
        return this.items[this.msWorkspace.focusedIndex];
    }

    createNewItemForTileable(tileable: Tileable) {
        let item: TileableItem | IconTaskBarItem;
        if (tileable instanceof MsWindow) {
            item = new TileableItem(tileable);
            this.menuManager.addMenu(assertNotNull(item.menu));
            item.connect('middle-clicked', (_) => {
                tileable.kill();
            });
            item.connect('close-clicked', (_) => {
                tileable.kill();
            });
        } else {
            item = new IconTaskBarItem(
                tileable,
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/plus-symbolic.svg`
                )
            );
        }
        item.connect('left-clicked', (_) => {
            this.msWorkspace.focusTileable(item.tileable);
        });
        return item;
    }

    getTaskBarItemOfTileable(tileable: Tileable) {
        return this.items.find((item) => {
            return item.tileable === tileable;
        });
    }
    vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        Allocate(this.taskButtonContainer, contentBox, flags);

        const taskActiveIndicatorBox = new Clutter.ActorBox({
            x1: this.getActiveItem().x,
            x2: this.getActiveItem().x + this.getActiveItem().width,
            y1: contentBox.get_height() - this.taskActiveIndicator.height,
            y2: contentBox.get_height(),
        });
        Allocate(this.taskActiveIndicator, taskActiveIndicatorBox, flags);
    }

    _onDestroy() {
        this.msWorkspaceSignals.forEach((signal) =>
            this.msWorkspace.disconnect(signal)
        );
    }
}

@registerGObjectClass
export class TaskActiveIndicator extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'TaskActiveIndicator',
    };

    constructor(...args: any[]) {
        super(...args);
    }

    prepareAnimation(newAllocation: Clutter.ActorBox) {
        this.translation_x = this.translation_x + this.x - newAllocation.x1;
        this.scale_x = (this.width * this.scale_x) / newAllocation.get_width();
    }
    animate() {
        this.ease({
            translation_x: 0,
            scale_x: 1,
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
        });
    }
    vfunc_allocate(...args: [Clutter.ActorBox]) {
        if (this.width && this.mapped) {
            this.prepareAnimation(args[0]);
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                this.animate();
                return GLib.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
}

@registerGObjectClass
export class TaskBarItem extends MatButton {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'TaskBarItem',
        Signals: {
            'drag-dropped': {},
            'drag-over': {
                param_types: [GObject.TYPE_BOOLEAN],
            },
            'left-clicked': {},
            'middle-clicked': {},
        },
    };
    private _delegate: this;
    draggable: boolean;
    contentActor: St.Widget;
    monitor: Monitor;
    menu: PopupMenu.PopupMenu | undefined;
    tileable: Tileable | undefined;

    constructor(contentActor: St.Widget, draggable: boolean) {
        super({
            style_class: 'task-bar-item ',
        });
        this.y_expand = true;
        this._delegate = this;
        this.draggable = draggable;
        this.contentActor = contentActor;
        this.monitor = assertNotNull(Main.layoutManager.primaryMonitor);
        this.set_child(this.contentActor);

        this.connect('primary-action', () => {
            this.emit('left-clicked');
        });
        this.connect('secondary-action', () => {
            if (this.menu !== undefined) {
                this.menu.toggle();
            }
        });
        this.connect('clicked', (actor, button) => {
            if (button === Clutter.BUTTON_MIDDLE) {
                this.emit('middle-clicked');
            }
        });
    }

    override vfunc_parent_set() {
        const actor = this.get_parent() || this;
        if (actor.is_mapped()) {
            this.monitor = assertNotNull(Main.layoutManager.findMonitorForActor(actor));
        }
    }

    override vfunc_get_preferred_height(_forWidth: number): [number, number] {
        const height = Me.msThemeManager.getPanelSize(this.monitor.index);
        return [height, height];
    }

    setActive(active: boolean) {
        if (!active && this.has_style_class_name('active')) {
            this.remove_style_class_name('active');
        }
        if (active && !this.has_style_class_name('active')) {
            this.add_style_class_name('active');
        }
    }
}

@registerGObjectClass
export class TileableItem extends TaskBarItem {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'TileableItem',
        Signals: {
            'close-clicked': {},
        },
    };
    container: St.BoxLayout;
    // Safety: We definitely initialize this because we call setTileable from the constructor
    tileable!: Tileable;
    // Safety: We definitely initialize this because we call setTileable from the constructor
    app!: Shell.App | null;
    startIconContainer: St.Bin;
    endIconContainer: St.Bin;
    makePersistentAction: PopupMenu.PopupBaseMenuItem;
    unmakePersistentAction: PopupMenu.PopupBaseMenuItem;
    closeButton: St.Button;
    persistentIcon: St.Icon;
    title: St.Label;
    signalManager: MsManager;
    titleSignalKiller: (()=>void) | undefined;
    closeIcon: St.Icon;
    icon: St.Widget | undefined;
    lastHeight: number | undefined;
    buildIconIdle: number | undefined;

    constructor(tileable: MsWindow) {
        const container = new St.BoxLayout({
            style_class: 'task-bar-item-content',
        });
        super(container, true);
        this.container = container;

        if (ShellVersionMatch('3.34')) {
            this.startIconContainer = new St.Bin({
                y_align: 1,
            });
        } else {
            this.startIconContainer = new St.Bin({
                y_align: Clutter.ActorAlign.CENTER,
            });
        }
        if (ShellVersionMatch('3.34')) {
            this.endIconContainer = new St.Bin({
                y_align: 1,
            });
        } else {
            this.endIconContainer = new St.Bin({
                y_align: Clutter.ActorAlign.CENTER,
            });
        }
        this.menu = new PopupMenu.PopupMenu(this, 0.5, St.Side.TOP);
        this.menu.actor.add_style_class_name('horizontal-panel-menu');
        /* this.menu.addMenuItem(
            new PopupMenu.PopupSeparatorMenuItem(_('Open Windows'))
        ); */
        this.makePersistentAction = this.menu.addAction(
            'Make this fully persistent',
            () => {
                if (this.tileable instanceof MsWindow) {
                    this.tileable.persistent = true;
                }
                this.endIconContainer.set_child(this.persistentIcon);
                this.makePersistentAction.hide();
                this.unmakePersistentAction.show();
            },
            Gio.icon_new_for_string(`${Me.path}/assets/icons/pin-symbolic.svg`)
        );

        this.unmakePersistentAction = this.menu.addAction(
            'Unmake this fully persistent',
            () => {
                if (this.tileable instanceof MsWindow) {
                    this.tileable.persistent = false;
                }
                this.endIconContainer.set_child(this.closeButton);
                this.makePersistentAction.show();
                this.unmakePersistentAction.hide();
            },
            Gio.icon_new_for_string(
                `${Me.path}/assets/icons/pin-off-symbolic.svg`
            )
        );

        this.menu.addAction(
            'Close',
            () => {
                this.emit('close-clicked');
            },
            Gio.icon_new_for_string(
                `${Me.path}/assets/icons/close-symbolic.svg`
            )
        );

        /* let item = new PopupMenu.PopupBaseMenuItem({ activate: true });
        item.add_child(
            new St.Label({
                text: 'Make window persistent',
            })
        );
        this.menu.box.add_child(item); */
        Main.layoutManager.uiGroup.add_actor(this.menu.actor);
        this.menu.actor.hide();
        // TITLE
        this.title = new St.Label({
            style_class: 'task-bar-item-title',
            y_align: Clutter.ActorAlign.CENTER,
        });
        Me.tooltipManager.add(this.title, { relativeActor: this });

        this.signalManager = new MsManager();
        this.style = getSettings('theme').get_string('taskbar-item-style');
        this.signalManager.observe(
            getSettings('theme'),
            'changed::taskbar-item-style',
            () => {
                this.style =
                    getSettings('theme').get_string('taskbar-item-style');
                this.updateTitle();
                this.setStyle();
            }
        );

        this.connect('destroy', this._onDestroy.bind(this));
        // CLOSE BUTTON
        this.closeIcon = new St.Icon({
            style_class: 'task-small-icon',
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/close-symbolic.svg`
            ),
        });
        this.closeButton = new St.Button({
            style_class: 'task-close-button',
            child: this.closeIcon,
        });
        this.closeButton.connect('clicked', () => {
            this.emit('close-clicked');
        });

        this.persistentIcon = new St.Icon({
            style_class: 'task-small-icon',
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/pin-symbolic.svg`
            ),
        });

        // LAYOUT CONTAINER
        this.container.add_child(this.startIconContainer);
        this.container.add_child(this.title);
        this.container.add_child(this.endIconContainer);

        this.setTileable(tileable);
    }

    setTileable(tileable: Tileable) {
        if (tileable === this.tileable) return;
        if (this.titleSignalKiller) this.titleSignalKiller();
        this.tileable = tileable;
        this.app = tileable instanceof MsWindow ? tileable.app : null;
        if (this.icon) {
            this.buildIcon(assertNotNull(this.lastHeight));
        }
        this.titleSignalKiller = this.signalManager.observe(
            this.tileable,
            'title-changed',
            () => this.updateTitle()
        );
        if (this.tileable instanceof MsWindow && this.tileable._persistent) {
            this.makePersistentAction.hide();
            this.unmakePersistentAction.show();
            this.endIconContainer.set_child(this.persistentIcon);
        } else {
            this.unmakePersistentAction.hide();
            this.makePersistentAction.show();
            this.endIconContainer.set_child(this.closeButton);
        }
        this.setStyle();
    }

    setStyle() {
        this.updateTitle();
        if (this.style == 'icon') {
            this.title.hide();
        } else {
            this.title.show();
        }
    }

    buildIcon(height: number) {
        if (this.icon) this.icon.destroy();
        assert(this.app !== null, "cannot build an icon without an app");
        this.lastHeight = height;
        const icon = this.app.create_icon_texture(height / 2);
        assert(icon instanceof St.Widget, "expected icon to be a widget");
        this.icon = icon;
        this.icon.style_class = 'app-icon';
        this.icon.set_size(height / 2, height / 2);
        this.startIconContainer.set_child(this.icon);
        const smallIconSize = Math.max(Math.round(height / 3), 18);
        this.persistentIcon.set_icon_size(smallIconSize);
        this.closeIcon.set_icon_size(smallIconSize);
        this.queue_relayout();
    }

    setActive(active: boolean) {
        super.setActive(active);
        this.updateTitle();
    }

    // Update the title and crop it if it's too long
    updateTitle() {
        assert(this.tileable !== undefined, 'item has no tileable');
        if (this.tileable instanceof MsApplicationLauncher || this.app === null) {
            this.title.text = "";
        } else {
            if (this.style == 'full') {
                if (this.tileable.title.includes(this.app.get_name())) {
                    this.title.text = this.tileable.title;
                } else {
                    const escapedAppName = GLib.markup_escape_text(
                        this.app.get_name(),
                        -1
                    );
                    const escapedTitle = GLib.markup_escape_text(
                        this.tileable.title,
                        -1
                    );
                    (this.title.get_clutter_text() as Clutter.Text).set_markup(
                        `${escapedTitle}<span alpha="${
                            this.has_style_class_name('active') ? '40%' : '20%'
                        }">   -   ${escapedAppName}</span>`
                    );
                }
            } else if (this.style == 'name') {
                this.title.text = this.app.get_name();
            }
        }
    }
    override vfunc_allocate(...args: [Clutter.ActorBox]) {
        const box = args[0];
        const height = box.get_height();

        if (!this.icon || this.lastHeight != height) {
            this.buildIconIdle = GLib.idle_add(
                GLib.PRIORITY_DEFAULT_IDLE,
                () => {
                    delete this.buildIconIdle;
                    this.buildIcon(height);
                    return GLib.SOURCE_REMOVE;
                }
            );
        }
        super.vfunc_allocate(...args);
    }
    _onDestroy() {
        if (this.buildIconIdle) {
            GLib.Source.remove(this.buildIconIdle);
        }
        this.signalManager.destroy();
        if (this.menu !== undefined) this.menu.destroy();
    }
}

@registerGObjectClass
export class IconTaskBarItem extends TaskBarItem {
    container: St.Bin;
    tileable: Tileable;
    icon: St.Icon;

    constructor(tileable: Tileable, gicon: Gio.IconPrototype) {
        const container = new St.Bin({
            style_class: 'task-bar-icon-container',
        });
        super(container, false);
        this.container = container;

        this.icon = new St.Icon({
            gicon,
            style_class: 'app-icon',
            icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
        });
        this.container.set_child(this.icon);
        this.tileable = tileable;
    }

    setTileable(tileable: Tileable) {
        if (tileable === this.tileable) return;
        this.tileable = tileable;
    }

    override vfunc_get_preferred_width(_forHeight: number): [number, number] {
        return [_forHeight, _forHeight];
    }

    override vfunc_allocate(...args: [Clutter.ActorBox]) {
        const box = args[0];
        const height = box.get_height() / 2;

        if (this.icon && this.icon.get_icon_size() != height) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                this.icon.set_icon_size(height);
                return GLib.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
}

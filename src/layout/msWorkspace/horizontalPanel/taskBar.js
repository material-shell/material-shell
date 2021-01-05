/** Gnome libs imports */
const { Clutter, GObject, St, Shell, Gio, Meta, GLib } = imports.gi;
const DND = imports.ui.dnd;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const { MatButton } = Me.imports.src.widget.material.button;
const { ReorderableList } = Me.imports.src.widget.reorderableList;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { reparentActor } = Me.imports.src.utils.index;
const { getSettings } = Me.imports.src.utils.settings;
const { MsManager } = Me.imports.src.manager.msManager;

let dragData = null;

/* exported TaskBar */
var TaskBar = GObject.registerClass(
    class TaskBar extends St.Widget {
        _init(msWorkspace, panelMenuManager) {
            super._init({
                name: 'taskBar',
                x_expand: true,
                reactive: true,
            });
            this._delegate = this;
            this.taskActiveIndicator = new TaskActiveIndicator({
                style_class: 'task-active-indicator',
            });
            this.add_child(this.taskActiveIndicator);
            this.taskButtonContainer = new ReorderableList(false, [
                TaskBarItem,
            ]);
            this.taskButtonContainer.connect(
                'actor-moved',
                (_, item, index) => {
                    this.msWorkspace.setTileableAtIndex(item.tileable, index);
                    this.msWorkspace.focusTileable(item.tileable);
                }
            );
            this.taskButtonContainer.connect(
                'foreign-actor-inserted',
                (_, actor, index) => {
                    if (actor.tileable instanceof MsWindow) {
                        Me.msWorkspaceManager.setWindowToMsWorkspace(
                            actor.tileable,
                            this.msWorkspace
                        );
                        this.msWorkspace.setTileableAtIndex(
                            actor.tileable,
                            index
                        );
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
                msWorkspace.connect('tileableList-changed', () => {
                    this.onTileableListChange();
                }),
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
            this.items = [];
            this.menuManager = panelMenuManager;
            this.updateItems();
        }

        onTileableListChange() {
            this.updateItems();
        }

        onFocusChanged(tileableFocused, oldTileableFocused) {
            if (tileableFocused === oldTileableFocused) {
                return;
            }

            let previousItem = this.getTaskBarItemOfTileable(
                oldTileableFocused
            );
            let nextItem = this.getTaskBarItemOfTileable(tileableFocused);

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

        updateItems() {
            this.items.forEach((item) => item.destroy());
            this.items = this.msWorkspace.tileableList.map(
                (tileable, _index) => {
                    let item;
                    if (tileable instanceof MsWindow) {
                        item = new TileableItem(tileable);
                        this.menuManager.addMenu(item.menu);
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
                        this.msWorkspace.focusTileable(tileable);
                    });
                    this.taskButtonContainer.add_child(item);
                    return item;
                }
            );
            if (this.items[this.msWorkspace.focusedIndex]) {
                this.items[this.msWorkspace.focusedIndex].setActive(true);
            }
        }

        getTaskBarItemOfTileable(tileable) {
            return this.items.find((item) => {
                return item.tileable === tileable;
            });
        }
        vfunc_allocate(box, flags) {
            SetAllocation(this, box, flags);
            const themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            Allocate(this.taskButtonContainer, contentBox, flags);

            let taskActiveIndicatorBox = new Clutter.ActorBox({
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
);

var TaskActiveIndicator = GObject.registerClass(
    {
        GTypeName: 'TaskActiveIndicator',
    },
    class TaskActiveIndicator extends St.Widget {
        _init() {
            super._init(...arguments);
        }
        prepareAnimation(newAllocation) {
            this.translation_x = this.translation_x + this.x - newAllocation.x1;
            this.scale_x =
                (this.width * this.scale_x) / newAllocation.get_width();
        }
        animate() {
            this.ease({
                translation_x: 0,
                scale_x: 1,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            });
        }
        vfunc_allocate(...args) {
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
);

var TaskBarItem = GObject.registerClass(
    {
        Signals: {
            'drag-dropped': {},
            'drag-over': {
                param_types: [GObject.TYPE_BOOLEAN],
            },
            'left-clicked': {},
            'middle-clicked': {},
        },
    },
    class TaskBarItemClass extends MatButton {
        _init(contentActor, draggable) {
            super._init({
                style_class: 'task-bar-item ',
            });
            this.y_expand = true;
            this._delegate = this;
            this.draggable = draggable;
            this.contentActor = contentActor;
            this.monitor = Main.layoutManager.primaryMonitor;
            this.set_child(this.contentActor);

            this.connect('primary-action', () => {
                this.emit('left-clicked');
            });
            this.connect('secondary-action', () => {
                this.menu.toggle();
            });
            this.connect('clicked', (actor, button) => {
                if (button === Clutter.BUTTON_MIDDLE) {
                    this.emit('middle-clicked');
                }
            });
        }

        vfunc_parent_set() {
            if (this.get_parent()) {
                this.monitor = Main.layoutManager.findMonitorForActor(
                    this.get_parent()
                );
            } else {
                this.monitor = Main.layoutManager.findMonitorForActor(this);
            }
        }

        vfunc_get_preferred_height(_forWidth) {
            let height = Me.msThemeManager.getPanelSize(this.monitor);
            return [height, height];
        }

        setActive(active) {
            if (!active && this.has_style_class_name('active')) {
                this.remove_style_class_name('active');
            }
            if (active && !this.has_style_class_name('active')) {
                this.add_style_class_name('active');
            }
        }
    }
);

var TileableItem = GObject.registerClass(
    {
        Signals: {
            'close-clicked': {},
        },
    },
    class TileableItemClass extends TaskBarItem {
        _init(tileable) {
            this.container = new St.BoxLayout({
                style_class: 'task-bar-item-content',
            });
            super._init(this.container, true);
            this.tileable = tileable;
            this.app = tileable.app;
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
                    this.tileable.persistent = true;
                    this.endIconContainer.set_child(this.persistentIcon);
                    this.makePersistentAction.hide();
                    this.unmakePersistentAction.show();
                },
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/pin-symbolic.svg`
                )
            );

            this.unmakePersistentAction = this.menu.addAction(
                'Unmake this fully persistent',
                () => {
                    this.tileable.persistent = false;
                    this.endIconContainer.set_child(this.closeButton);
                    this.makePersistentAction.show();
                    this.unmakePersistentAction.hide();
                },
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/pin-off-symbolic.svg`
                )
            );
            if (this.tileable._persistent) {
                this.makePersistentAction.hide();
            } else {
                this.unmakePersistentAction.hide();
            }
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
            Main.uiGroup.add_actor(this.menu.actor);
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
                    this.style = getSettings('theme').get_string(
                        'taskbar-item-style'
                    );
                    this.updateTitle();
                    this.setStyle();
                }
            );
            this.signalManager.observe(this.tileable, 'title-changed', () =>
                this.updateTitle()
            );
            this.setStyle();
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
            if (this.tileable._persistent) {
                this.endIconContainer.set_child(this.persistentIcon);
            } else {
                this.endIconContainer.set_child(this.closeButton);
            }
            // LAYOUT CONTAINER
            this.container.add_child(this.startIconContainer);
            this.container.add_child(this.title);
            this.container.add_child(this.endIconContainer);
        }

        setStyle() {
            this.updateTitle();

            if (this.style == 'icon') {
                this.title.hide();
            } else {
                this.title.show();
            }
        }

        buildIcon(height) {
            if (this.icon) this.icon.destroy();
            this.lastHeight = height;
            this.icon = this.app.create_icon_texture(height / 2);
            this.icon.style_class = 'app-icon';
            this.icon.set_size(height / 2, height / 2);
            this.startIconContainer.set_child(this.icon);
            let smallIconSize = Math.max(Math.round(height / 3), 18);
            this.persistentIcon.set_icon_size(smallIconSize);
            this.closeIcon.set_icon_size(smallIconSize);
            this.queue_relayout();
        }

        setActive(active) {
            super.setActive(active);
            this.updateTitle();
        }

        // Update the title and crop it if it's too long
        updateTitle() {
            if (this.style == 'full') {
                if (this.tileable.title.includes(this.app.get_name())) {
                    this.title.text = this.tileable.title;
                } else {
                    const escapedAppName = GLib.markup_escape_text(this.app.get_name(), -1);
                    const escapedTitle = GLib.markup_escape_text(this.tileable.title, -1);
                    this.title
                        .get_clutter_text()
                        .set_markup(
                            `${escapedTitle}<span alpha="${
                                this.has_style_class_name('active')
                                    ? '40%'
                                    : '20%'
                            }">   -   ${escapedAppName}</span>`
                        );
                }
            } else if (this.style == 'name') {
                this.title.text = this.app.get_name();
            }
        }
        vfunc_allocate(...args) {
            const box = args[0];
            const height = box.get_height();

            if (!this.icon || this.lastHeight != height) {
                this.buildIconIdle = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                    delete this.buildIconIdle;
                    this.buildIcon(height);
                    return GLib.SOURCE_REMOVE;
                });
            }
            super.vfunc_allocate(...args);
        }
        _onDestroy() {
            if (this.buildIconIdle) {
                GLib.Source.remove(this.buildIconIdle);
            }
            this.signalManager.destroy();
            this.menu.destroy();
        }
    }
);

var IconTaskBarItem = GObject.registerClass(
    class IconTaskBarItem extends TaskBarItem {
        _init(tileable, gicon) {
            this.container = new St.Bin({
                style_class: 'task-bar-icon-container',
            });
            super._init(this.container, false);
            this.tileable = tileable;

            this.icon = new St.Icon({
                gicon,
                style_class: 'app-icon',
                icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
            });
            this.container.set_child(this.icon);
        }

        /**
         * Just the panel width
         */
        vfunc_get_preferred_width(_forHeight) {
            return [_forHeight, _forHeight];
        }

        vfunc_allocate(...args) {
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
);

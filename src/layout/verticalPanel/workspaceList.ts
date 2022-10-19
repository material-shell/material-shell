/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GObject from 'gobject';
import { TaskBarItem } from 'src/layout/msWorkspace/horizontalPanel/taskBar';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { MainCategories } from 'src/layout/msWorkspace/msWorkspaceCategory';
import { PanelIconStyleEnum } from 'src/manager/msThemeManager';
import { MsWorkspaceManager } from 'src/manager/msWorkspaceManager';
import { assert, assertNotNull } from 'src/utils/assert';
import {
    Allocate,
    AllocatePreferredSize,
    SetAllocation,
} from 'src/utils/compatibility';
import { registerGObjectClass } from 'src/utils/gjs';
import { MatButton } from 'src/widget/material/button';
import { ReorderableList } from 'src/widget/reorderableList';
import * as St from 'st';
import { main as Main, popupMenu } from 'ui';
import { MsWorkspace } from '../msWorkspace/msWorkspace';
const DND = imports.ui.dnd;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class WorkspaceList extends St.Widget {
    private _delegate: this;
    msWorkspaceButtonMap: Map<MsWorkspace, WorkspaceButton>;
    msWorkspaceManager: MsWorkspaceManager;
    menuManager: popupMenu.PopupMenuManager;
    buttonList: ReorderableList;
    workspaceActiveIndicator: St.Widget;
    workspaceSignal: number;
    buttonActive: St.Widget | undefined;

    constructor() {
        super({
            clip_to_allocation: true,
            style_class: 'workspace-list',
            reactive: true,
        });
        this._delegate = this;

        this.connect('destroy', this._onDestroy.bind(this));
        this.msWorkspaceButtonMap = new Map();
        this.msWorkspaceManager = Me.msWorkspaceManager;
        this.menuManager = new popupMenu.PopupMenuManager(this);

        this.buttonList = new ReorderableList(true);
        this.buttonList.connect('actor-moved', (_, actor, index) => {
            this.msWorkspaceManager.setMsWorkspaceAt(actor.msWorkspace, index);
        });

        this.add_child(this.buttonList);

        this.workspaceActiveIndicator = new WorkspaceActiveIndicator();

        const panelSizeSignal = Me.msThemeManager.connect(
            'panel-size-changed',
            () => {
                this.workspaceActiveIndicator.set_height(
                    Me.msThemeManager.getPanelSize(
                        Main.layoutManager.primaryIndex
                    )
                );
                this.queue_relayout();
            }
        );

        this.add_child(this.workspaceActiveIndicator);
        this.connect('notify::mapped', () => {
            if (this.mapped) {
                this.buildButtons();
                this.activeButtonForIndex(
                    global.workspace_manager.get_active_workspace_index()
                );
            }
        });
        this.msWorkspaceManager.connect(
            'dynamic-super-workspaces-changed',
            () => {
                this.buildButtons();
            }
        );
        this.workspaceSignal = global.workspace_manager.connect(
            'active-workspace-changed',
            () => {
                this.activeButtonForIndex(
                    global.workspace_manager.get_active_workspace_index()
                );
            }
        );
        this.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter.ScrollDirection.UP:
                    this.msWorkspaceManager.activatePreviousMsWorkspace();
                    break;
                case Clutter.ScrollDirection.DOWN:
                    this.msWorkspaceManager.activateNextMsWorkspace();
                    break;
            }
        });

        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(panelSizeSignal);
        });
    }

    buildButtons() {
        this.msWorkspaceManager.primaryMsWorkspaces.forEach(
            (msWorkspace, index) => {
                const button = this.msWorkspaceButtonMap.get(msWorkspace);
                if (button === undefined) {
                    const workspaceButton = new WorkspaceButton(
                        this.msWorkspaceManager,
                        msWorkspace
                    );
                    this.menuManager.addMenu(workspaceButton.menu.menu);
                    this.buttonList.insert_child_at_index(
                        workspaceButton,
                        index
                    );
                    this.msWorkspaceButtonMap.set(msWorkspace, workspaceButton);
                } else {
                    const index =
                        this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                            msWorkspace
                        );
                    this.buttonList.set_child_at_index(button, index);
                }
            }
        );
        //Check if some msWorkspace has been destroyed
        this.msWorkspaceButtonMap.forEach((button, msWorkspace) => {
            if (
                !this.msWorkspaceManager.primaryMsWorkspaces.includes(
                    msWorkspace
                )
            ) {
                // Note: We don't have to remove the menu from the menu manager manually as
                // this is, and should, be done during the menu's destroy signal.
                button.destroy();
                this.msWorkspaceButtonMap.delete(msWorkspace);
            }
        });
    }

    activeButtonForIndex(index: number) {
        if (this.buttonActive) {
            if (this.buttonActive.has_style_class_name('active')) {
                this.buttonActive.remove_style_class_name('active');
            }
        }
        const child = this.buttonList.get_child_at_index(index);
        assert(child instanceof St.Widget, 'Child was not a widget');
        this.buttonActive = child;
        this.buttonActive.add_style_class_name('active');

        this.workspaceActiveIndicator.ease({
            translation_y: this.get_preferred_width(-1)[1]! * index,
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
        });
    }
    vfunc_allocate(
        box: Clutter.ActorBox,
        flags?: Clutter.AllocationFlags
    ): void {
        SetAllocation(this, box, flags);

        for (const child of this.get_children()) {
            if (child == this.workspaceActiveIndicator) {
                const themeNode = this.get_theme_node();
                const contentBox = themeNode.get_content_box(box);
                const width = this.workspaceActiveIndicator.get_width();
                const height = this.workspaceActiveIndicator.get_height();
                const actorBox = new Clutter.ActorBox({
                    x1: contentBox.x2 - width,
                    x2: contentBox.x2,
                    y1: contentBox.y1,
                    y2: contentBox.y1 + height,
                });

                Allocate(this.workspaceActiveIndicator, actorBox);
            } else {
                AllocatePreferredSize(child);
            }
        }
    }
    vfunc_get_preferred_width(_forHeight: number): [number, number] {
        return [
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
        ];
    }

    _onDestroy() {
        global.workspace_manager.disconnect(this.workspaceSignal);
    }
}

interface StyleMenu {
    menu: popupMenu.PopupMenu;
    panelIconStyleHybridRadio: popupMenu.PopupBaseMenuItem;
    panelIconStyleCategoryRadio: popupMenu.PopupBaseMenuItem;
    panelIconStyleApplicationRadio: popupMenu.PopupBaseMenuItem;
    subMenu: popupMenu.PopupSubMenuMenuItem;

    disconnectSignals(): void;
}
@registerGObjectClass
export class WorkspaceButton extends MatButton {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'WorkspaceButton',
        Signals: {
            'drag-dropped': {},
            'drag-over': {
                param_types: [GObject.TYPE_BOOLEAN],
            },
        },
    };

    msWorkspace: MsWorkspace;
    msWorkspaceManager: MsWorkspaceManager;
    workspaceButtonIcon: WorkspaceButtonIcon;
    private _delegate: this;
    menu: StyleMenu;
    mouseData: {
        pressed: boolean;
        dragged: boolean;
        originalCoords: null;
        originalSequence: null;
    };
    _draggable: any;

    constructor(
        msWorkspaceManager: MsWorkspaceManager,
        msWorkspace: MsWorkspace
    ) {
        const workspaceButtonIcon = new WorkspaceButtonIcon(msWorkspace);
        super({
            child: workspaceButtonIcon,
            style: 'mat-panel-button',
        });
        this.msWorkspaceManager = msWorkspaceManager;
        this.msWorkspace = msWorkspace;
        this.workspaceButtonIcon = workspaceButtonIcon;
        this._delegate = this;

        this.menu = this.buildMenu();

        const panelSizeSignal = Me.msThemeManager.connect(
            'panel-size-changed',
            () => {
                this.queue_relayout();
            }
        );

        this.connect('primary-action', () => {
            this.msWorkspace.activate();
        });
        this.connect('secondary-action', () => {
            this.menu.menu.toggle();
        });
        this.connect('clicked', (actor, button) => {
            if (button === Clutter.BUTTON_MIDDLE) {
                if (
                    this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                        this.msWorkspace
                    ) !==
                    this.msWorkspaceManager.primaryMsWorkspaces.length - 1
                )
                    msWorkspace.close();
            }
        });

        this.connect('destroy', () => {
            this.menu.menu.destroy();
            this.menu.disconnectSignals();
            Me.msThemeManager.disconnect(panelSizeSignal);
        });

        this.mouseData = {
            pressed: false,
            dragged: false,
            originalCoords: null,
            originalSequence: null,
        };
    }

    get draggable() {
        return (
            this.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                this.msWorkspace
            ) !==
            this.msWorkspaceManager.primaryMsWorkspaces.length - 1
        );
    }

    buildMenu(): StyleMenu {
        const rootMenu = new popupMenu.PopupMenu(this, 0.5, St.Side.LEFT);
        rootMenu.actor.add_style_class_name('panel-menu');
        rootMenu.addMenuItem(
            new popupMenu.PopupSeparatorMenuItem(_('Panel icons style'))
        );

        const panelIconStyleHybridRadio = rootMenu.addAction(
            _('Hybrid'),
            () => {
                Me.msThemeManager.panelIconStyle = PanelIconStyleEnum.HYBRID;
            },
            Gio.icon_new_for_string(
                `${Me.path}/assets/icons/radiobox-${
                    Me.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.HYBRID
                        ? 'marked'
                        : 'blank'
                }-symbolic.svg`
            )
        );
        const panelIconStyleCategoryRadio = rootMenu.addAction(
            _('Categories only'),
            () => {
                Me.msThemeManager.panelIconStyle = PanelIconStyleEnum.CATEGORY;
            },
            Gio.icon_new_for_string(
                `${Me.path}/assets/icons/radiobox-${
                    Me.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.CATEGORY
                        ? 'marked'
                        : 'blank'
                }-symbolic.svg`
            )
        );
        const panelIconStyleApplicationRadio = rootMenu.addAction(
            _('Applications preview'),
            () => {
                Me.msThemeManager.panelIconStyle =
                    PanelIconStyleEnum.APPLICATION;
            },
            Gio.icon_new_for_string(
                `${Me.path}/assets/icons/radiobox-${
                    Me.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.APPLICATION
                        ? 'marked'
                        : 'blank'
                }-symbolic.svg`
            )
        );

        const iconStyleSignal = Me.msThemeManager.connect(
            'panel-icon-style-changed',
            () => {
                assertNotNull(panelIconStyleHybridRadio._icon).set_gicon(
                    Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/radiobox-${
                            Me.msThemeManager.panelIconStyle ===
                            PanelIconStyleEnum.HYBRID
                                ? 'marked'
                                : 'blank'
                        }-symbolic.svg`
                    )
                );
                assertNotNull(panelIconStyleCategoryRadio._icon).set_gicon(
                    Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/radiobox-${
                            Me.msThemeManager.panelIconStyle ===
                            PanelIconStyleEnum.CATEGORY
                                ? 'marked'
                                : 'blank'
                        }-symbolic.svg`
                    )
                );
                assertNotNull(panelIconStyleApplicationRadio._icon).set_gicon(
                    Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/radiobox-${
                            Me.msThemeManager.panelIconStyle ===
                            PanelIconStyleEnum.APPLICATION
                                ? 'marked'
                                : 'blank'
                        }-symbolic.svg`
                    )
                );
            }
        );

        rootMenu.addMenuItem(
            new popupMenu.PopupSeparatorMenuItem(_('Override category'))
        );
        const autoSentence = _('Determined automatically');
        const subMenu = new popupMenu.PopupSubMenuMenuItem(
            this.msWorkspace.msWorkspaceCategory.forcedCategory || autoSentence
        );
        const setCategory = (category?: string) => {
            this.msWorkspace.msWorkspaceCategory.forceCategory(category);
            this.workspaceButtonIcon.buildIcons();
            subMenu.label.text = category || autoSentence;
        };
        subMenu.menu.addAction(autoSentence, () => {
            setCategory();
        });
        MainCategories.forEach((key) => {
            subMenu.menu.addAction(
                key,
                () => {
                    setCategory(key);
                },
                Gio.icon_new_for_string(
                    `${
                        Me.path
                    }/assets/icons/category/${key.toLowerCase()}-symbolic.svg`
                )
            );
        });

        rootMenu.addMenuItem(subMenu);
        Main.layoutManager.uiGroup.add_actor(rootMenu.actor);
        rootMenu.close();

        return {
            menu: rootMenu,
            panelIconStyleHybridRadio,
            panelIconStyleCategoryRadio,
            panelIconStyleApplicationRadio,
            subMenu,
            disconnectSignals: () => {
                Me.msThemeManager.disconnect(iconStyleSignal);
            },
        };
    }

    initDrag() {
        this._draggable = DND.makeDraggable(this, {
            restoreOnSuccess: false,
            manualMode: true,
        });

        this._draggable.connect('drag-end', () => {
            this.mouseData.pressed = false;
            this.mouseData.dragged = false;
        });
    }

    handleDragOver(source: any, actor: Clutter.Actor, x: number, y: number) {
        if (source instanceof TaskBarItem) {
            return DND.DragMotionResult.MOVE_DROP;
        }
        return DND.DragMotionResult.NO_DROP;
    }

    acceptDrop(source: any) {
        if (source instanceof TaskBarItem) {
            if (source.tileable instanceof MsWindow) {
                Me.msWorkspaceManager.setWindowToMsWorkspace(
                    source.tileable,
                    this.msWorkspace
                );
                this.msWorkspaceManager.stateChanged();
                this.msWorkspace.activate();
            }
            return true;
        }
        return false;
    }

    /**
     * Just the parent width
     */
    vfunc_get_preferred_width(_forHeight: number): [number, number] {
        return [
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
        ];
    }

    /**
     * Just the child height
     */
    vfunc_get_preferred_height(_forWidth: number): [number, number] {
        return [
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
        ];
    }
}

function isMsWindow(argument: any): argument is MsWindow {
    return argument instanceof MsWindow;
}

@registerGObjectClass
export class WorkspaceButtonIcon extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'WorkspaceButtonIcon',
    };

    msWorkspace: MsWorkspace;
    appIconList: St.Icon[];
    desaturateEffect: Clutter.DesaturateEffect | undefined;

    constructor(msWorkspace: MsWorkspace) {
        super();
        this.msWorkspace = msWorkspace;
        this.appIconList = [];
        this.desaturateIcons();
        this.connect('notify::mapped', () => {
            if (this.mapped) {
                this.buildIcons();
            }
        });
        this.msWorkspace.connect('tileableList-changed', (_) => {
            this.buildIcons();
        });
        const themeSignals = [
            Me.msThemeManager.connect('panel-icon-style-changed', () => {
                this.buildIcons();
            }),
            Me.msThemeManager.connect('panel-icon-color-changed', () => {
                this.desaturateIcons();
            }),
            Me.msThemeManager.connect('panel-size-changed', () => {
                this.buildIcons();
            }),
        ];
        this.connect('destroy', () => {
            for (const s of themeSignals) Me.msThemeManager.disconnect(s);
        });
    }

    desaturateIcons() {
        const shouldDesaturate = !Me.msThemeManager.panelIconColor;
        const isDesaturate =
            this.desaturateEffect !== undefined &&
            this.desaturateEffect === this.get_effect('desaturate_icons');
        if (shouldDesaturate === isDesaturate) return;
        if (shouldDesaturate) {
            this.desaturateEffect = new Clutter.DesaturateEffect();
            this.add_effect_with_name(
                'desaturate_icons',
                this.desaturateEffect
            );
        } else {
            assert(this.desaturateEffect !== undefined, 'true by construction');
            this.remove_effect(this.desaturateEffect);
            delete this.desaturateEffect;
        }
    }

    buildIcons() {
        this.appIconList.forEach((icon) => {
            icon.destroy();
        });

        const appList = this.msWorkspace.tileableList
            .filter(isMsWindow)
            .map((msWindow) => {
                return msWindow.app;
            });
        this.appIconList = [];

        if (appList.length) {
            const numberOfEachAppMap = new Map();
            appList.forEach((app) => {
                if (numberOfEachAppMap.has(app)) {
                    numberOfEachAppMap.set(
                        app,
                        numberOfEachAppMap.get(app) + 1
                    );
                } else {
                    numberOfEachAppMap.set(app, 1);
                }
            });
            const sortedByInstanceAppList = [...numberOfEachAppMap.entries()]
                .sort((a, b) => {
                    return b[1] - a[1];
                })
                .map((entry) => {
                    return entry[0];
                });
            if (
                this.msWorkspace.msWorkspaceCategory.forcedCategory ||
                Me.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.CATEGORY ||
                (Me.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.HYBRID &&
                    sortedByInstanceAppList.length > 1)
            ) {
                const category =
                    this.msWorkspace.msWorkspaceCategory.category || '';
                const icon = new St.Icon({
                    gicon: Gio.icon_new_for_string(
                        `${
                            Me.path
                        }/assets/icons/category/${category.toLowerCase()}-symbolic.svg`
                    ),
                    icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
                });
                this.appIconList.push(icon);
                this.add_child(icon);
            } else {
                sortedByInstanceAppList.forEach((app) => {
                    const icon = app.create_icon_texture(
                        Me.msThemeManager.getPanelSizeNotScaled() / 2
                    );
                    this.appIconList.push(icon);
                    this.add_child(icon);
                });
            }
        } else {
            const icon = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/plus-symbolic.svg`
                ),
                icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
            });
            this.appIconList.push(icon);
            this.add_child(icon);
        }
    }

    vfunc_allocate(
        allocationBox: Clutter.ActorBox,
        flags?: Clutter.AllocationFlags
    ) {
        SetAllocation(this, allocationBox, flags);

        const themeNode = this.get_theme_node();
        allocationBox = themeNode.get_content_box(allocationBox);
        const portion = (allocationBox.x2 - allocationBox.x1) / 8;
        if (this.appIconList.length === 1) {
            const centerBox = new Clutter.ActorBox();
            centerBox.x1 = allocationBox.x1 + 2 * portion;
            centerBox.x2 = allocationBox.x2 - 2 * portion;
            centerBox.y1 = allocationBox.y1 + 2 * portion;
            centerBox.y2 = allocationBox.y2 - 2 * portion;
            Allocate(this.appIconList[0], centerBox, flags);
        } else {
            this.appIconList.forEach((icon, index) => {
                const box = new Clutter.ActorBox();
                switch (index) {
                    case 0:
                        box.x1 = allocationBox.x1 + portion;
                        box.x2 = allocationBox.x2 - 3 * portion;
                        box.y1 = allocationBox.y1 + 2 * portion;
                        box.y2 = allocationBox.y2 - 2 * portion;
                        Allocate(icon, box, flags);
                        break;
                    case 1:
                        box.x1 = allocationBox.x1 + 3 * portion;
                        box.x2 = allocationBox.x2 - portion;
                        box.y1 = allocationBox.y1 + 3 * portion;
                        box.y2 = allocationBox.y2 - portion;
                        Allocate(icon, box, flags);
                        break;
                    case 2:
                        box.x1 = allocationBox.x1 + 4 * portion;
                        box.x2 = allocationBox.x2 - portion;
                        box.y1 = allocationBox.y1 + portion;
                        box.y2 = allocationBox.y2 - 4 * portion;
                        Allocate(icon, box, flags);
                        break;
                }
            });
        }
    }
}

@registerGObjectClass
export class WorkspaceActiveIndicator extends St.Widget {
    constructor() {
        super({
            style_class: 'workspace-active-indicator',
        });
    }
    vfunc_get_preferred_height(
        _for_width: number
    ): [number | null, number | null] {
        const height = Me.msThemeManager.getPanelSize(
            Main.layoutManager.primaryIndex
        );
        return [height, height];
    }
}

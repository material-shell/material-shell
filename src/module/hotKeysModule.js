const { Meta, Shell, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.src.utils.settings;
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;

let LogAllocateActor = GObject.registerClass(
    {
        GTypeName: 'LogAllocateActor',
    },
    class LogAllocateActor extends Clutter.Actor {
        _init(params) {
            this.title = params.title;
            log(this.title);
            delete params.title;
            super._init(params);
        }

        vfunc_allocate(box, flags) {
            log(`allocate ${this.title}`, this.layout_manager);
            this.set_allocation(box, flags);
            this.get_children().forEach((actor, index) => {
                let childBox = new Clutter.ActorBox();
                childBox.x2 = box.get_width();
                childBox.y1 = index * box.get_height();
                childBox.y2 = childBox.y1 + box.get_height();
                actor.allocate(childBox, flags);
            });
            //this.old_vfunc_allocate(box, flags);
        }
    }
);
let ColorActor = GObject.registerClass(
    {
        GTypeName: 'ColorActor',
    },
    class ColorActor extends LogAllocateActor {
        _init() {
            super._init({
                title: 'ColorActor',
                width: Main.layoutManager.primaryMonitor.width,
                height: Main.layoutManager.primaryMonitor.height,
                background_color: new Clutter.Color({
                    red: Math.random() * 255,
                    blue: Math.random() * 255,
                    green: Math.random() * 255,
                    alpha: 255,
                }),
            });
        }
    }
);

/* exported HotKeysModule */
var HotKeysModule = class HotKeysModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.testInProgress = false;
        this.testContainer = new LogAllocateActor({
            title: 'container',
            layout_manager: new Clutter.BoxLayout({ vertical: true }),
        });
        this.testContainer.add_child(new ColorActor());
        this.testContainer.add_child(new ColorActor());
        /* Me.layout.visible = noUImode; */
        this.testFunc = (to) => {
            this.testContainer.ease({
                translation_y:
                    -1 * to * Main.layoutManager.primaryMonitor.height,
                duration: 250,
                mode: Clutter.AnimationMode.EASE_OUT_CUBIC,
                onComplete: () => {
                    let next = to === 1 ? 0 : 1;
                    if (this.testInProgress) {
                        this.testFunc(next);
                    }
                },
            });
        };

        const settings = getSettings('bindings');

        Main.wm.addKeybinding(
            'previous-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                if (Me.msWindowManager.msDndManager.dragInProgress) {
                    msWorkspace.swapTileableLeft(msWorkspace.tileableFocused);
                } else {
                    msWorkspace.focusPreviousTileable();
                }
            }
        );

        Main.wm.addKeybinding(
            'next-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                if (Me.msWindowManager.msDndManager.dragInProgress) {
                    msWorkspace.swapTileableRight(msWorkspace.tileableFocused);
                } else {
                    msWorkspace.focusNextTileable();
                }
            }
        );

        Main.wm.addKeybinding(
            'previous-workspace',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                let currentIndex = this.workspaceManager.get_active_workspace_index();
                if (currentIndex > 0) {
                    this.workspaceManager
                        .get_workspace_by_index(currentIndex - 1)
                        .activate(global.get_current_time());
                }
            }
        );

        Main.wm.addKeybinding(
            'next-workspace',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                let currentIndex = this.workspaceManager.get_active_workspace_index();
                if (currentIndex < this.workspaceManager.n_workspaces - 1) {
                    this.workspaceManager
                        .get_workspace_by_index(currentIndex + 1)
                        .activate(global.get_current_time());
                }
            }
        );

        Main.wm.addKeybinding(
            'kill-focused-window',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];

                if (msWorkspace.tileableFocused instanceof MsWindow) {
                    msWorkspace.tileableFocused.kill();
                }
            }
        );

        Main.wm.addKeybinding(
            'move-window-left',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];
                msWorkspace.swapTileableLeft(msWorkspace.tileableFocused);
            }
        );

        Main.wm.addKeybinding(
            'move-window-right',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const currentMonitorIndex = global.display.get_current_monitor();
                const msWorkspace =
                    currentMonitorIndex === Main.layoutManager.primaryIndex
                        ? Me.msWorkspaceManager.getActiveMsWorkspace()
                        : Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                              currentMonitorIndex
                          )[0];

                msWorkspace.swapTileableRight(msWorkspace.tileableFocused);
            }
        );

        Main.wm.addKeybinding(
            'move-window-top',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                if (
                    activeMsWorkspace ===
                        Me.msWorkspaceManager.primaryMsWorkspaces[0] ||
                    activeMsWorkspace.tileableFocused ===
                        activeMsWorkspace.appLauncher
                ) {
                    return;
                }
                const newMsWorkspaceIndex =
                    Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                        activeMsWorkspace
                    ) - 1;
                Me.msWorkspaceManager.setWindowToMsWorkspace(
                    activeMsWorkspace.tileableFocused,
                    Me.msWorkspaceManager.primaryMsWorkspaces[
                        newMsWorkspaceIndex
                    ]
                );
                global.workspace_manager
                    .get_workspace_by_index(newMsWorkspaceIndex)
                    .activate(global.get_current_time());
                /*                 let newWorkspace = global.workspace_manager.get_workspace_by_index(
                    global.display.focus_window.get_workspace().index() - 1
                );
                if (newWorkspace) {
                    global.display.focus_window.change_workspace(newWorkspace);
                    newWorkspace.activate(global.get_current_time());
                } */
            }
        );

        Main.wm.addKeybinding(
            'move-window-bottom',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const activeMsWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                if (
                    (activeMsWorkspace ===
                        Me.msWorkspaceManager.primaryMsWorkspaces[
                            Me.msWorkspaceManager.primaryMsWorkspaces.length - 2
                        ] &&
                        activeMsWorkspace.msWindowList.length === 1) ||
                    activeMsWorkspace.tileableFocused ===
                        activeMsWorkspace.appLauncher
                ) {
                    return;
                }
                const newMsWorkspaceIndex =
                    Me.msWorkspaceManager.primaryMsWorkspaces.indexOf(
                        activeMsWorkspace
                    ) + 1;
                Me.msWorkspaceManager.setWindowToMsWorkspace(
                    activeMsWorkspace.tileableFocused,
                    Me.msWorkspaceManager.primaryMsWorkspaces[
                        newMsWorkspaceIndex
                    ]
                );
                global.workspace_manager
                    .get_workspace_by_index(newMsWorkspaceIndex)
                    .activate(global.get_current_time());
                /* let newWorkspace = global.workspace_manager.get_workspace_by_index(
                    global.display.focus_window.get_workspace().index() + 1
                );
                if (newWorkspace) {
                    global.display.focus_window.change_workspace(newWorkspace);
                    newWorkspace.activate();
                } */
            }
        );

        Main.wm.addKeybinding(
            'cycle-tiling-layout',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                Me.msWorkspaceManager.getActiveMsWorkspace().nextTiling(1);
            }
        );
        Main.wm.addKeybinding(
            'reverse-cycle-tiling-layout',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                Me.msWorkspaceManager.getActiveMsWorkspace().nextTiling(-1);
            }
        );

        Main.wm.addKeybinding(
            'toggle-material-shell-ui',
            settings,
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL,
            () => {
                const noUImode = Me.msWorkspaceManager.noUImode;
                Me.msWorkspaceManager.noUImode = !noUImode;
                Me.layout.visible = noUImode;
                logFocus('');
                logFocus('');
                logFocus('');
                logFocus('');
                logFocus('');
                /* 
                if (!this.testInProgress) {
                    this.testInProgress = true;
                    Main.uiGroup.add_child(this.testContainer);
                    this.testFunc(1);
                } else {
                    this.testInProgress = false;
                    Main.uiGroup.remove_child(this.testContainer);
                } */
                /* Main.panel.get_parent().visible = noUImode;
                Main.panel.visible = noUImode;
                Main.panel.get_parent().set_width(!noUImode ? 0 : -1);
                Main.layoutManager.panelBox.visible = noUImode;

                Main.layoutManager.panelBox.set_height(!noUImode ? 0 : -1);
                Main.layoutManager.monitors.forEach(monitor => {
                    let msWorkspace;
                    if (Main.layoutManager.primaryIndex === monitor.index) {
                        msWorkspace = Me.msWorkspaceManager.getActiveMsWorkspace();
                    } else {
                        msWorkspace = Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                            monitor.index
                        )[0];
                    }
                    Main.layoutManager._queueUpdateRegions();
                    msWorkspace.updateUI();
                    msWorkspace.panel.set_height(!noUImode ? 0 : -1);
                    msWorkspace.tilingLayout.onTile();
                }); */
            }
        );
    }

    destroy() {}
};

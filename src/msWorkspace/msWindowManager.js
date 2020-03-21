const { Shell, Meta, St, GLib } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Signals = imports.signals;
const { WorkspaceCategories } = Me.imports.src.msWorkspace.workspaceCategories;
const { MsWorkspace } = Me.imports.src.msWorkspace.msWorkspace;
const {
    MsWorkspaceContainer
} = Me.imports.src.msWorkspace.msWorkspaceContainer;

const {
    MsWorkspaceWithCategory
} = Me.imports.src.msWorkspace.msWorkspaceWithCategory;
const { WorkspaceList } = Me.imports.src.widget.workspaceList;
const { MsWindow } = Me.imports.src.msWorkspace.msWindow;
const { MsDndManager } = Me.imports.src.msWorkspace.msDndManager;

/* exported MsWindowManager */
var MsWindowManager = class MsWindowManager {
    constructor(appsByCategory) {
        log('new MsWindowManager');
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWindowList = [];
        this.metaWindowFocused = null;
        this.msDndManager = new MsDndManager(this);
        this.signals = [];

        this.signals.push({
            from: global.display,
            id: global.display.connect('window-created', (_, metaWindow) => {
                this.onNewMetaWindow(metaWindow);
            })
        });

        this.signals.push({
            from: global.display,
            id: global.display.connect('notify::focus-window', _ => {
                this.onFocusMetaWindow(global.display.focus_window);
            })
        });
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            global.get_window_actors().forEach(windowActor => {
                this.onNewMetaWindow(windowActor.metaWindow);
            });
            this.onFocusMetaWindow(global.display.focus_window);
        });
    }

    destroy() {}

    onNewMetaWindow(metaWindow) {
        log('onNewMetaWindow', metaWindow);
        if (!this._handleWindow(metaWindow)) {
            log('metaWindow not handled', metaWindow);

            return global.msWorkspaceManager.msWorkspaceContainer.setActorAbove(
                metaWindow.get_compositor_private()
            );
        }

        // This flags if we handle this window or not for the session
        metaWindow.handledByMaterialShell = true;
        let msWindow = this.msWindowList.find(msWindow => {
            return msWindow.windowDescription === metaWindow.get_description();
        });
        if (msWindow) {
            msWindow.setWindow(metaWindow);
        } else {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                this.createNewMsWindow(metaWindow);
            });
        }

        metaWindow.connect('unmanaged', () => {
            log('unmanaged', metaWindow, metaWindow.msWindow.msWorkspace);
            if (
                metaWindow.handledByMaterialShell &&
                metaWindow.msWindow.msWorkspace
            ) {
                /* metaWindow.msWindow.msWorkspace.removeMsWindow(
                    metaWindow.msWindow
                ); */
            }
        });
    }

    createNewMsWindow(metaWindow) {
        log('create new ms window');
        let app = this.windowTracker.get_window_app(metaWindow);
        log(metaWindow.get_title(), app.get_id(), metaWindow.get_description());
        let msWindow = new MsWindow(
            app.get_id(),
            metaWindow.get_description(),
            metaWindow
        );
        this.msWindowList.push(msWindow);
        this.emit('ms-window-created', msWindow);
    }

    onFocusMetaWindow(metaWindow) {
        log('onFocusMetaWindow', metaWindow);
        /*
             If the current msWorkspace focused window actor is inaccessible it's mean that this notify is the was automatically made by gnome-shell to try to focus previous window
             We want to prevent this in order to handle it ourselves to select the next one instead of the previous.
            */
        if (
            this.metaWindowFocused &&
            !this.metaWindowFocused.get_compositor_private()
        ) {
            log(
                'previous-focus',
                this.metaWindowFocused.get_compositor_private()
            );
            return;
        }

        if (!metaWindow) return;

        if (metaWindow.is_attached_dialog()) {
            metaWindow = metaWindow.get_transient_for();
        }
        this.metaWindowFocused = metaWindow;
        if (metaWindow.msWindow && !metaWindow.msWindow.isDialog) {
            this.emit('ms-window-focused', metaWindow.msWindow);
        }
    }

    _handleWindow(metaWindow) {
        let meta = Meta.WindowType;
        let types = [meta.NORMAL, meta.DIALOG, meta.MODAL_DIALOG, meta.UTILITY];
        return types.includes(metaWindow.window_type);
    }
};
Signals.addSignalMethods(MsWindowManager.prototype);

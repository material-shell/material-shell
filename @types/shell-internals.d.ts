/**
 * Members of GNOME Shell that Material Shell reaches into but that
 * `@girs/gnome-shell` does not declare, because they are private to the shell.
 *
 * Every entry here is a hook the extension depends on and that upstream is free
 * to rename in any release; keep this list short and check each entry against
 * the shell sources when bumping the targeted version.
 */
import type Meta from 'gi://Meta';
import type St from 'gi://St';

declare module '@girs/gnome-shell/ui/windowManager' {
    /** `js/ui/windowManager.js` keeps this class private. */
    interface WorkspaceTracker {
        _checkWorkspaces(): void;
        _workspaces: Meta.Workspace[];
        keepWorkspaceAlive(workspace: Meta.Workspace, duration: number): void;
    }

    interface WindowManager {
        _workspaceTracker: WorkspaceTracker;
        _shouldAnimate(actor?: Meta.WindowActor): boolean;
    }
}

declare module '@girs/gnome-shell/ui/extensionSystem' {
    interface ExtensionManager {
        _callExtensionEnable(uuid: string): void;
    }
}

declare module '@girs/gnome-shell/ui/panel' {
    interface Panel {
        _leftBox: St.BoxLayout;
        _centerBox: St.BoxLayout;
        _rightBox: St.BoxLayout;
    }
}

declare module '@girs/gnome-shell/ui/popupMenu' {
    interface PopupMenuManager {
        _menus: PopupMenu[];
    }

    /** Constructor parameters of the private `PopupBaseMenuItem` class. */
    interface PopupBaseMenuItemParams {
        reactive?: boolean;
        activate?: boolean;
        hover?: boolean;
        style_class?: string | null;
        can_focus?: boolean;
    }
}

declare module '@girs/gnome-shell/ui/dateMenu' {
    /** `js/ui/dateMenu.js` keeps this class private. */
    interface MessagesIndicator extends St.Icon {
        _sync(): void;
    }
}

declare module '@girs/clutter-18/clutter-18' {
    export namespace Clutter {
        interface Actor {
            /** Set by Material Shell on the actors it owns. */
            msWorkspace?: import('src/layout/msWorkspace/msWorkspace').MsWorkspace;
        }
    }
}

declare module '@girs/meta-18/meta-18' {
    export namespace Meta {
        interface Workspace {
            _lastRemovedWindow: Meta.Window;
            _keepAliveId: number | undefined;
        }
    }
}

declare module '@girs/shell-18/shell-18' {
    export namespace Shell {
        interface Global {
            /** The running Material Shell instance, published by `extension.ts`. */
            ms: import('src/extension').default;
        }
    }
}

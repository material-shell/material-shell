/**
 * Members of GNOME Shell that Material Shell reaches into but that
 * `@girs/gnome-shell` does not declare, because they are private to the shell.
 *
 * Every entry here is a hook the extension depends on and that upstream is free
 * to rename in any release; keep this list short and check each entry against
 * the shell sources when bumping the targeted version.
 */
import type Clutter from 'gi://Clutter';
import type Gio from 'gi://Gio';
import type Meta from 'gi://Meta';
import type St from 'gi://St';

declare module '@girs/gnome-shell/ui/windowManager' {
    /** `js/ui/windowManager.js` keeps this class private. */
    interface WorkspaceTracker {
        _checkWorkspaces(): void;
        _checkWorkspacesId: number;
        _queueCheckWorkspaces(): void;
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

    interface PopupSwitchMenuItem {
        /** The bin holding the switch, on the right of the item. */
        _statusBin: St.Bin;
        /** The menu the item was added to. */
        _parent: PopupMenuBase | null;
    }

    interface PopupImageMenuItem {
        _icon: St.Icon;
    }

    interface PopupMenuBase {
        /**
         * addAction() is declared as returning the base item, but it builds a
         * PopupImageMenuItem whenever an icon is given.
         */
        addAction(
            title: string,
            callback: (event: Clutter.Event) => void,
            icon?: Gio.Icon
        ): PopupImageMenuItem;
    }
}

declare module '@girs/gnome-shell/ui/dialog' {
    interface MessageDialogContent {
        /** The label behind the `description` property. */
        _description: St.Label;
    }
}

declare module '@girs/gnome-shell/ui/dateMenu' {
    /** `js/ui/dateMenu.js` keeps this class private. */
    interface MessagesIndicator extends St.Icon {
        _sync(): void;
    }

    interface DateMenuButton {
        _clockDisplay: St.Label;
        _indicator: MessagesIndicator;
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

/**
 * Below: parts of the shell that exist but that `@girs/gnome-shell` 50.0.4
 * does not describe yet. Unlike the private members above, these are public
 * API, so they should disappear as the package catches up.
 */

declare module '@girs/gnome-shell/misc/util' {
    export function trySpawn(argv: string[]): void;
    export function trySpawnCommandLine(commandLine: string): void;
}

declare module '@girs/gnome-shell/misc/fileUtils' {
    interface SubdirInfo {
        /**
         * collectFromDatadirs yields the entry itself under `file`; the
         * package's SubdirInfo only names the enclosing `dir`.
         */
        file: Gio.File;
    }
}

declare module '@girs/gnome-shell/misc/systemActions' {
    interface SystemActions {
        getMatchingActions(terms: string[]): string[];
        getName(id: string): string | null;
        getIconName(id: string): string | null;
        activateAction(id: string): void;
    }
}

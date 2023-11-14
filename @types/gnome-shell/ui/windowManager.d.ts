import type Clutter from '../../gir-generated/clutter-13.js';
import type Gio from '../../gir-generated/gio-2.0.js';
import type Meta from '../../gir-generated/meta-13.js';
import type Shell from '../../gir-generated/shell-13.js';

export const SHELL_KEYBINDINGS_SCHEMA: string;

export class WindowManager {
    _workspaceTracker: WorkspaceTracker;
    _shouldAnimate(actor: Clutter.Actor, types: Meta.WindowType[]): void;
    removeKeybinding(name: string): void;
    addKeybinding(
        name: string,
        settings: Gio.Settings,
        flags: Meta.KeyBindingFlags,
        modes: Shell.ActionMode,
        handler: Meta.KeyHandlerFunc
    ): number;
}

export class WorkspaceTracker {
    _workspaces: Meta.Workspace[];
    _checkWorkspacesId: number;
    _queueCheckWorkspaces(): void;
    _checkWorkspaces(): void;
}

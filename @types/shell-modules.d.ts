/**
 * Shell modules that `@girs/gnome-shell` 50.0.4 does not ship types for.
 *
 * This file must stay free of top level imports: these are declarations of
 * modules the package does not know about, not augmentations of existing ones.
 */

declare module 'resource:///org/gnome/shell/ui/shellEntry.js' {
    export function addContextMenu(
        entry: import('gi://St').default.Entry,
        params?: { actionMode?: number }
    ): void;
}

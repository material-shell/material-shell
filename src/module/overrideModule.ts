/** Gnome libs imports */
import * as Meta from 'meta';
import { windowManager } from 'ui';

/* exported OverrideModule */
export class OverrideModule {
    orignalMetaWorkspaceOnPrimary: () => boolean;
    windowManagersFunctionToRestore: any[];

    constructor() {
        this.windowManagersFunctionToRestore = [];
        this.overrideWindowManagerFunctions();
        this.orignalMetaWorkspaceOnPrimary =
            Meta.prefs_get_workspaces_only_on_primary;
        // Typescript doesn't allow us to modify this method by default, but we can trick it into allowing us
        (Meta as any).prefs_get_workspaces_only_on_primary = () => true;
    }

    destroy() {
    try{
        this.restoreWindowManagersFunctions();
        (Meta as any).prefs_get_workspaces_only_on_primary =
            this.orignalMetaWorkspaceOnPrimary;} finally {}
    }

    overrideWindowManagerFunctions() {
    try{
        this.windowManagersFunctionToRestore = [];
        const _shouldAnimate =
            windowManager.WindowManager.prototype._shouldAnimate;
        windowManager.WindowManager.prototype._shouldAnimate = function (
            _actor,
            _types
        ) {
            return false;
        };
        this.windowManagersFunctionToRestore.push([
            windowManager.WindowManager.prototype._shouldAnimate,
            _shouldAnimate,
        ]);} finally {}
    }

    restoreWindowManagersFunctions() {try{
        this.windowManagersFunctionToRestore.forEach((functions) => {
            functions[0] = functions[1];
        });} finally {}
    }
}

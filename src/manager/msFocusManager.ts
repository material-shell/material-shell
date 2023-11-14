/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import Shell from 'gi://Shell';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { default as Me } from 'src/extension';

import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { MsManager } from 'src/manager/msManager';
import { Async } from 'src/utils/async';

import { Debug } from 'src/utils/debug';
import {
    MetaWindowWithMsProperties,
    MsWindowManagerType,
} from './msWindowManager';

export type MsFocusManagerType = InstanceType<typeof MsFocusManager>;
export class MsFocusManager extends MsManager {
    msWindowManager: MsWindowManagerType;
    lastMsWindowFocused: MsWindow | null = null;
    lastKeyFocus: Clutter.Actor | null = null;
    focusProtected?: boolean;
    actorGrabMap: Map<Clutter.Actor, boolean | Clutter.Grab> = new Map();
    constructor(msWindowManager: MsWindowManagerType) {
        super();
        this.msWindowManager = msWindowManager;
        this.observe(
            global.stage,
            'notify::key-focus',
            this.onKeyFocus.bind(this)
        );

        this.observe(
            global.display,
            'notify::focus-window',
            this.onWindowFocus.bind(this)
        );

        this.observe(
            global.workspace_manager,
            'active-workspace-changed',
            () => {
                if (!Me.instance.loaded) return;
                this.focusProtected = true;
                Async.addTimeout(GLib.PRIORITY_DEFAULT, 100, () => {
                    delete this.focusProtected;
                    return GLib.SOURCE_REMOVE;
                });
            }
        );
    }

    onKeyFocus(): void {
        const keyFocus = global.stage.key_focus;
        if (!keyFocus) {
            if (
                this.focusProtected &&
                this.lastKeyFocus &&
                this.lastKeyFocus != this.lastMsWindowFocused &&
                this.lastKeyFocus.mapped
            ) {
                Debug.logFocus(
                    'Focus Protected, restore focus to ',
                    this.lastKeyFocus
                );

                return this.lastKeyFocus.grab_key_focus();
            }
            return;
        }

        this.lastKeyFocus = keyFocus;

        let actor: Clutter.Actor | null = keyFocus;
        while (actor !== null) {
            if (actor instanceof MsWindow) {
                this.setFocusToMsWindow(actor);
                return;
            }
            actor = actor.get_parent();
        }

        if (keyFocus != Main.layoutManager.uiGroup) {
            this.lastMsWindowFocused = null;
        }
    }

    onWindowFocus(): void {
        const windowFocus =
            global.display.get_focus_window() as MetaWindowWithMsProperties;

        if (!windowFocus || !windowFocus.msWindow) return;

        const msWindow = windowFocus.msWindow;
        msWindow.focusDialogs();
        this.setFocusToMsWindow(msWindow);
    }

    setFocusToMsWindow(msWindow: MsWindow): void {
        if (msWindow === this.lastMsWindowFocused) return;
        this.lastMsWindowFocused = msWindow;
        this.emit('focus-changed', msWindow);
    }

    /**
     * Return true if granted
     * @param {MsWindow} msWindow
     */
    requestFocus(msWindow: MsWindow): boolean {
        return (
            msWindow !== this.lastMsWindowFocused &&
            !this.msWindowManager.msDndManager.dragInProgress
        );
    }

    pushModal(
        actor: Clutter.Actor,
        options?: {
            timestamp?: number;
            options?: any;
            actionMode?: Shell.ActionMode;
        }
    ) {
        const grab = Main.pushModal(actor, options);
        this.actorGrabMap.set(actor, grab);
    }

    popModal(actor: Clutter.Actor) {
        const grab = this.actorGrabMap.get(actor);
        if (grab !== undefined) {
            Main.popModal(grab);

            this.actorGrabMap.delete(actor);
        }
    }
}

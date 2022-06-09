/** Gnome libs imports */
import { Actor } from 'clutter';
import * as GLib from 'glib';
import { ModalOptions } from 'meta';
import { ActionMode } from 'shell';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { MsManager } from 'src/manager/msManager';
import { Async } from 'src/utils/async';
import { main as Main } from 'ui';
import {
    MetaWindowWithMsProperties,
    MsWindowManagerType,
} from './msWindowManager';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

export type MsFocusManagerType = InstanceType<typeof MsFocusManager>;
export class MsFocusManager extends MsManager {
    msWindowManager: MsWindowManagerType;
    lastMsWindowFocused: MsWindow | null = null;
    lastKeyFocus: Actor | null = null;
    focusProtected?: boolean;
    actorGrabMap: Map<Actor, any> = new Map();
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
                if (!Me.loaded) return;
                this.focusProtected = true;
                Async.addTimeout(GLib.PRIORITY_DEFAULT, 100, () => {
                    delete this.focusProtected;
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
                Me.logFocus(
                    'Focus Protected, restore focus to ',
                    this.lastKeyFocus
                );

                return this.lastKeyFocus.grab_key_focus();
            }
            return;
        }

        this.lastKeyFocus = keyFocus;

        let actor: Actor | null = keyFocus;
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
        actor: Actor,
        options?: {
            timestamp?: number;
            options?: ModalOptions;
            actionMode?: ActionMode;
        }
    ) {
        const currentFocus = global.stage.key_focus;
        const grab = Main.pushModal(actor, options);
        this.actorGrabMap.set(actor, grab);
    }

    popModal(actor: Actor) {
        const grab = this.actorGrabMap.get(actor);
        if (grab != null) {
            Main.popModal(grab != true ? grab : actor);
            this.actorGrabMap.delete(actor);
        }
    }
}

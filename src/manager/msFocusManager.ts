/** Gnome libs imports */
import { Actor, Grab } from 'clutter';
import * as GLib from 'glib';
import { ModalOptions } from 'meta';
import { ActionMode } from 'shell';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { MsManager } from 'src/manager/msManager';
import { assert } from 'src/utils/assert';
import { Async } from 'src/utils/async';
import { gnomeVersionGreaterOrEqualTo } from 'src/utils/shellVersionMatch';
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
    actorGrabMap: Map<Actor, boolean | Grab> = new Map();
    constructor(msWindowManager: MsWindowManagerType) {
 
        super();
        try{
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
        );} finally {}
    }

    onKeyFocus(): void {
    try{
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
        }} finally {}
    }

    onWindowFocus(): void {
    try{
        const windowFocus =
            global.display.get_focus_window() as MetaWindowWithMsProperties;

        if (!windowFocus || !windowFocus.msWindow) return;

        const msWindow = windowFocus.msWindow;
        msWindow.focusDialogs();
        this.setFocusToMsWindow(msWindow);} finally {}
    }

    setFocusToMsWindow(msWindow: MsWindow): void {
    try{
        if (msWindow === this.lastMsWindowFocused) return;
        this.lastMsWindowFocused = msWindow;
        this.emit('focus-changed', msWindow);} finally {}
    }

    /**
     * Return true if granted
     * @param {MsWindow} msWindow
     */
    requestFocus(msWindow: MsWindow): boolean {
    try{
        return (
            msWindow !== this.lastMsWindowFocused &&
            !this.msWindowManager.msDndManager.dragInProgress
        );} finally {}
    }

    pushModal(
        actor: Actor,
        options?: {
            timestamp?: number;
            options?: ModalOptions;
            actionMode?: ActionMode;
        }
    ) {try{
        const grab = Main.pushModal(actor, options);
        this.actorGrabMap.set(actor, grab);} finally {}
    }

    popModal(actor: Actor) {
    try {
        const grab = this.actorGrabMap.get(actor);
        if (grab !== undefined) {
            if (gnomeVersionGreaterOrEqualTo(Main.popModal, '42.0')) {
                assert(
                    typeof grab !== 'boolean',
                    'Expected grab to be a grab object'
                );
                Main.popModal(grab);
            } else {
                Main.popModal(actor);
            }
            this.actorGrabMap.delete(actor);
        }} finally {}
    }
}

/** Gnome libs imports */
import * as GLib from 'glib';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { MsManager } from 'src/manager/msManager';
import { MsWindowManagerType } from './msWindowManager';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

export type MsFocusManagerType = InstanceType<typeof MsFocusManager>;
export class MsFocusManager extends MsManager {
    msWindowManager: MsWindowManagerType;
    lastMsWindowFocused: MsWindow | null = null;
    lastKeyFocus: MsWindow | null = null;
    focusProtected?: boolean;

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
                GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
                    delete this.focusProtected;
                    return GLib.SOURCE_REMOVE;
                });
            }
        );

        this.observe(
            global.display,
            'window-demands-attention',
            (_, _metaWindow) => {
                Me.logFocus('window-demands-attention', _metaWindow);
            }
        );

        this.observe(
            global.display,
            'window-marked-urgent',
            (_, _metaWindow) => {
                Me.logFocus('window-marked-urgent', _metaWindow);
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

        if (keyFocus instanceof MsWindow) {
            return this.setFocusToMsWindow(keyFocus);
        }

        let actor = keyFocus;
        let isChildrenOfMsWindow = false;
        while (actor.get_parent() && !isChildrenOfMsWindow) {
            actor = actor.get_parent();
            if (actor instanceof MsWindow) {
                isChildrenOfMsWindow = true;
            }
        }
        if (isChildrenOfMsWindow) {
            this.setFocusToMsWindow(actor);
        } else {
            this.lastMsWindowFocused = null;
        }
    }

    onWindowFocus(): void {
        const windowFocus = global.display.get_focus_window();

        if (!windowFocus || !windowFocus.msWindow) return;

        const msWindow = windowFocus.msWindow;
        msWindow.onFocus();
        this.setFocusToMsWindow(msWindow);
    }

    setFocusToMsWindow(msWindow: MsWindow): void {
        if (msWindow === this.lastMsWindowFocused) return;
        Me.logFocus('Focus MsWindow', msWindow.title);
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
}

/** Gnome libs imports */
const { GLib, Meta, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MsWindow } = Me.imports.src.layout.msWorkspace.msWindow;
const { MsManager } = Me.imports.src.manager.msManager;

/* exported MsFocusManager */
var MsFocusManager = class MsFocusManager extends MsManager {
    constructor(msWindowManager) {
        super();
        this.msWindowManager = msWindowManager;
        this.lastMsWindowFocused;
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
    }

    onKeyFocus() {
        const keyFocus = global.stage.key_focus;
        if (!keyFocus) {
            if (
                this.focusProtected &&
                this.lastKeyFocus &&
                this.lastKeyFocus != this.lastMsWindowFocused
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
            delete this.lastMsWindowFocused;
        }
    }

    onWindowFocus() {
        const windowFocus = global.display.focus_window;
        if (!windowFocus) return;
        if (this.focusProtected && this.lastMsWindowFocused) {
            Me.logFocus(
                'Focus Protected, restore focus to ',
                this.lastMsWindowFocused
            );
            return this.lastMsWindowFocused.grab_key_focus();
        }

        const msWindow = windowFocus.msWindow;
        this.setFocusToMsWindow(msWindow);
    }

    setFocusToMsWindow(msWindow) {
        if (msWindow === this.lastMsWindowFocused) return;
        this.lastMsWindowFocused = msWindow;
        this.emit('focus-changed', msWindow);
    }

    /**
     * Return true if granted
     * @param {MsWindow} msWindow
     */
    requestFocus(msWindow) {
        return (
            msWindow !== this.lastMsWindowFocused &&
            !this.msWindowManager.msDndManager.dragInProgress
        );
    }

    determineFocusedMsWindow() {}

    onNewMsWindow(msWindow) {}
};

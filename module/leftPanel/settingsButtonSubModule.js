const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;
const Util = imports.misc.util;
// const ShellEntry = imports.ui.shellEntry;


const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MatButton } = Me.imports.widget.material.button;
const { PromptDialog } = Me.imports.widget.promptDialog;
const Popup = Me.imports.widget.popup;

/* exported AppsButtonSubModule */
var SettingsButtonSubModule = class SettingsButtonSubModule {
    constructor(panel) {
        this.panel = panel;
        let icon = new St.Icon({
            gicon: Gio.icon_new_for_string(
                `${Me.path}/assets/icons/more-horiz.svg`
            ),
            style_class: 'workspace-main-icon'
        });

        this.button = new MatButton({
            child: icon,
            style_class: 'workspace-button'
        });
    }

    _handlePopupItemSelect(item) {
        switch (item) {
            case 'Add Category': {
                let promptDialog = new PromptDialog({
                    title: 'Enter Category Name', 
                    onSubmit: () => log('submited!')
                });
                promptDialog.open()
                break;
            }
            case 'Settings': {
                Util.trySpawnCommandLine(`gnome-shell-extension-prefs ${Me.uuid}`)
                break;
            }
            default: {}
        }
    }


    enable() {
        this.button.actor = this.panel._rightBox;
        Popup.addContextMenu(this.button, ['Add Category', 'Settings'], this._handlePopupItemSelect);
        this.panel._rightBox.insert_child_at_index(this.button,0);
        
    }

    disable() {
        this.panel._leftBox.remove_child(this.button);
    }
};

/** Gnome libs imports */
const { GLib, Meta, Clutter, GObject, Gio, St, Soup } = imports.gi;
const MessageTray = imports.ui.messageTray;
const Main = imports.ui.main;
const Dialog = imports.ui.dialog;
const ModalDialog = imports.ui.modalDialog;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.src.utils.settings;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { MsManager } = Me.imports.src.manager.msManager;

const API_SERVER = 'http://api.material-shell.com';
/* exported MsNotificationManager */
var MsNotificationManager = class MsNotificationManager extends MsManager {
    constructor() {
        super();
        this.httpSession = new Soup.Session({ ssl_use_system_ca_file: true });
    }
    check() {
        if (getSettings('tweaks').get_boolean('disable-notifications')) return;
        let previousCheck = Me.stateManager.getState('notification-check')
            ? new Date(Me.stateManager.getState('notification-check'))
            : new Date();

        var message = new Soup.Message({
            method: 'GET',
            uri: new Soup.URI(
                `${API_SERVER}/notifications?lastCheck=${previousCheck.toISOString()}`
            ),
        });
        // send the HTTP request and wait for response
        this.httpSession.queue_message(message, () => {
            if (message.status_code != Soup.KnownStatusCode.OK) {
                global.log(
                    `error fetching notification ${message.status_code.toString()}`
                );
                return;
            }

            let notifications = [];
            try {
                notifications = JSON.parse(message.response_body.data);
            } catch (e) {
                global.log(`error unpack notification error ${e.toString()}`);
                return;
            }
            this.source = new MsNotificationSource();
            notifications.forEach((notificationData) => {
                Main.messageTray.add(this.source);
                const notification = new MsNotification(
                    this.source,
                    notificationData.title,
                    notificationData.content,
                    notificationData.icon,
                    notificationData.action
                );

                this.source.showNotification(notification);
            });
        });
        Me.stateManager.setState(
            'notification-check',
            new Date().toISOString()
        );
    }
};
let MsNotificationSource, MsNotification;
if (ShellVersionMatch('3.34')) {
    MsNotificationSource = class MsNotificationSource extends MessageTray.Source {
        constructor() {
            super('Material Shell');
        }

        getIcon() {
            return Gio.icon_new_for_string(
                `${Me.path}/assets/icons/on-dark-small.svg`
            );
        }
    };
    MsNotification = class MsNotification extends MessageTray.Notification {
        constructor(source, title, text, icon, action) {
            let params = {};
            if (icon) {
                params.gicon = Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/${icon}.svg`
                );
            }
            super(source, title, text, params);
            this.action = action;
            this.bannerBodyMarkup = true;
        }

        activate() {
            super.activate();
            let dialog = new MsNotificationDialog(
                this.title,
                this.bannerBodyText,
                this.action
            );
            dialog.open(global.get_current_time());
        }
    };
} else {
    MsNotificationSource = GObject.registerClass(
        class MsNotificationSource extends MessageTray.Source {
            _init() {
                super._init('Material Shell');
            }

            getIcon() {
                return Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/on-dark-small.svg`
                );
            }
        }
    );

    MsNotification = GObject.registerClass(
        class MsNotification extends MessageTray.Notification {
            _init(source, title, text, icon, action) {
                let params = {};
                if (icon) {
                    params.gicon = Gio.icon_new_for_string(
                        `${Me.path}/assets/icons/${icon}.svg`
                    );
                }
                super._init(source, title, text, params);
                this.action = action;
                this.bannerBodyMarkup = true;
            }

            activate() {
                super.activate();
                let dialog = new MsNotificationDialog(
                    this.title,
                    this.bannerBodyText,
                    this.action
                );
                dialog.open(global.get_current_time());
            }
        }
    );
}

const MsNotificationDialog = GObject.registerClass(
    class MsNotificationDialog extends ModalDialog.ModalDialog {
        _init(title, text, action) {
            super._init({ styleClass: '' });
            const actions = [
                {
                    label: _('Cancel'),
                    action: this._onCancelButtonPressed.bind(this),
                    key: Clutter.Escape || Clutter.KEY_Escape,
                },
            ];
            if (action) {
                actions.push({
                    default: true,
                    label: action.label,
                    action: () => {
                        Gio.AppInfo.launch_default_for_uri(
                            action.url,
                            global.create_app_launch_context(0, -1)
                        );
                        this.close();
                    },
                });
            }
            this.setButtons(actions);

            let content = new Dialog.MessageDialogContent({
                title: title,
                description: text,
            });

            content._description.get_clutter_text().use_markup = true;

            this.contentLayout.add(content);
        }

        _onCancelButtonPressed() {
            this.close();
        }
    }
);

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as Soup from 'soup';
import { MsManager } from 'src/manager/msManager';
import { registerGObjectClass } from 'src/utils/gjs';
import { getSettings } from 'src/utils/settings';
import { ShellVersionMatch } from 'src/utils/shellVersionMatch';
import { messageTray } from 'ui';
import { main as Main } from 'ui';
const Dialog = imports.ui.dialog;
const ModalDialog = imports.ui.modalDialog;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const API_SERVER = 'http://api.material-shell.com';
export class MsNotificationManager extends MsManager {
    httpSession: Soup.Session;

    constructor() {
        super();
        this.httpSession = new Soup.Session({ ssl_use_system_ca_file: true });
    }
    check() {
        if (getSettings('tweaks').get_boolean('disable-notifications')) return;
        const previousCheck = Me.stateManager.getState('notification-check')
            ? new Date(Me.stateManager.getState('notification-check'))
            : new Date();

        const message = new Soup.Message({
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

            let notifications: NotificationResponseItem[] = [];
            try {
                notifications = JSON.parse(message.response_body.data);
            } catch (e) {
                global.log(`error unpack notification error ${e.toString()}`);
                return;
            }
            const source = new MsNotificationSource();
            notifications.forEach((notificationData) => {
                Main.messageTray.add(source);
                const notification = new MsNotification(
                    source,
                    notificationData.title,
                    notificationData.content,
                    notificationData.icon,
                    notificationData.action
                );

                source.showNotification(notification);
            });
        });
        Me.stateManager.setState(
            'notification-check',
            new Date().toISOString()
        );
    }
}

interface NotificationResponseItem {
    title: string;
    content: string;
    icon: string;
    action: any;
}

interface IMsNotification {
    action: any;
}

let MsNotificationSource: { new (): messageTray.Source };
let MsNotification: {
    new (
        source: messageTray.Source,
        title: string,
        text: string,
        icon: string,
        action: any
    ): messageTray.Notification & IMsNotification;
};

if (ShellVersionMatch('3.34')) {
    MsNotificationSource = class MsNotificationSource extends messageTray.Source {
        constructor() {
            super('Material Shell');
        }

        getIcon() {
            return Gio.icon_new_for_string(
                `${Me.path}/assets/icons/on-dark-small.svg`
            );
        }
    };
    MsNotification = class MsNotification extends messageTray.Notification {
        action: any;

        constructor(
            source: messageTray.Source,
            title: string,
            text: string,
            icon: string,
            action: any
        ) {
            const params: messageTray.NotificationParams = {};
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
            const dialog = new MsNotificationDialog(
                this.title,
                this.bannerBodyText,
                this.action
            );
            dialog.open(global.get_current_time());
        }
    };
} else {
    @registerGObjectClass
    class MsNotificationSourceClass extends messageTray.Source {
        constructor() {
            super('Material Shell');
        }

        getIcon() {
            return Gio.icon_new_for_string(
                `${Me.path}/assets/icons/on-dark-small.svg`
            );
        }
    }
    MsNotificationSource = MsNotificationSourceClass;

    @registerGObjectClass
    class MsNotificationClass extends messageTray.Notification {
        action: any;
        constructor(
            source: messageTray.Source,
            title: string,
            text: string,
            icon: string,
            action: any
        ) {
            const params: messageTray.NotificationParams = {};
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
            const dialog = new MsNotificationDialog(
                this.title,
                this.bannerBodyText,
                this.action
            );
            dialog.open(global.get_current_time());
        }
    }
    MsNotification = MsNotificationClass;
}

interface Action {
    default?: boolean;
    label: string;
    key?: number;
    action: () => void;
}

@registerGObjectClass
export class MsNotificationDialog extends ModalDialog.ModalDialog {
    constructor(
        title: string,
        text: string,
        action?: { url: string; label: string }
    ) {
        super({ styleClass: '' });
        const actions: Action[] = [
            {
                label: _('Cancel'),
                action: this._onCancelButtonPressed.bind(this),
                key: Clutter.KEY_Escape,
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

        const content = new Dialog.MessageDialogContent({
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

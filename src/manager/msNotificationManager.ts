/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
import * as Soup from 'soup';
import { MsManager } from 'src/manager/msManager';
import { registerGObjectClass } from 'src/utils/gjs';
import { getSettings } from 'src/utils/settings';
import {
    compareVersions,
    gnomeVersionNumber,
    parseVersion,
} from 'src/utils/shellVersionMatch';
import { main as Main, messageTray } from 'ui';
const Dialog = imports.ui.dialog;
const ModalDialog = imports.ui.modalDialog;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const API_SERVER = 'http://api.material-shell.com';
export class MsNotificationManager extends MsManager {
    httpSession: Soup.Session;

    constructor() {
        super();
        this.httpSession = new Soup.Session();
    }
    check() {
        if (getSettings('tweaks').get_boolean('disable-notifications')) return;
        const previousCheck = Me.stateManager.getState('notification-check')
            ? new Date(Me.stateManager.getState('notification-check'))
            : new Date();

        const message = Soup.Message.new(
            'GET',
            `${API_SERVER}/notifications?lastCheck=${previousCheck.toISOString()}`
        );

        // send the HTTP request and wait for response
        // Before gnome 43 we use Soup 2.4 API
        if (compareVersions(gnomeVersionNumber, parseVersion('43.0')) < 0) {
            this.httpSession.queue_message(message, () => {
                if (message.status_code != Soup.KnownStatusCode.OK) {
                    Me.log(
                        `error fetching notification: ${message.status_code.toString()}`
                    );
                    return;
                }

                let notifications: NotificationResponseItem[] = [];
                try {
                    notifications = JSON.parse(message.response_body.data);
                } catch (e: unknown) {
                    Me.log(`error unpacking notification: ${e}`);
                    return;
                }
                this.showNotifications(notifications);
            });
        } else {
            this.httpSession.send_and_read_async(
                message,
                GLib.PRIORITY_DEFAULT,
                new Gio.Cancellable(),
                (session, result) => {
                    if (session && message.status_code === Soup.Status.OK) {
                        const bytes = session.send_and_read_finish(
                            result
                        ) as GLib.Bytes;
                        const decoder = new TextDecoder('utf-8');
                        const response = decoder.decode(
                            bytes.get_data() as ArrayBuffer
                        );
                        let notifications: NotificationResponseItem[];
                        try {
                            notifications = JSON.parse(
                                response
                            ) as NotificationResponseItem[];
                        } catch (e: unknown) {
                            Me.log(`error unpacking notification: ${e}`);
                            return;
                        }
                        this.showNotifications(notifications);
                    }
                }
            );
        }
        Me.stateManager.setState(
            'notification-check',
            new Date().toISOString()
        );
    }
    showNotifications(notifications: NotificationResponseItem[]) {
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
    }
}

interface NotificationResponseItem {
    title: string;
    content: string;
    icon: string;
    action?: { url: string; label: string };
}

@registerGObjectClass
class MsNotificationSource extends messageTray.Source {
    constructor() {
        super('Material Shell');
    }

    getIcon() {
        return Gio.icon_new_for_string(
            `${Me.path}/assets/icons/on-dark-small.svg`
        );
    }
}

@registerGObjectClass
class MsNotification extends messageTray.Notification {
    action: { url: string; label: string } | undefined;
    constructor(
        source: messageTray.Source,
        title: string,
        text: string,
        icon: string,
        action: { url: string; label: string } | undefined
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

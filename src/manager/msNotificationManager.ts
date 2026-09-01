/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import Soup from 'gi://Soup';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as MessageTray from 'resource:///org/gnome/shell/ui/messageTray.js';
import { default as Me } from 'src/extension';
import { MsManager } from 'src/manager/msManager';
import { registerGObjectClass } from 'src/utils/gjs';
import { getSettings } from 'src/utils/settings';

import { PACKAGE_VERSION } from 'resource:///org/gnome/shell/misc/config.js';
import * as Dialog from 'resource:///org/gnome/shell/ui/dialog.js';
import * as ModalDialog from 'resource:///org/gnome/shell/ui/modalDialog.js';
import { Debug } from 'src/utils/debug';

const API_SERVER = 'http://api.material-shell.com';
export class MsNotificationManager extends MsManager {
    httpSession: Soup.Session;

    constructor() {
        super();
        this.httpSession = new Soup.Session();
    }
    check() {
        if (getSettings('tweaks').get_boolean('disable-notifications')) return;
        let uuid = Me.stateManager!.getState('notification-uuid');
        if (!uuid) {
            uuid = GLib.uuid_string_random();
            Me.stateManager!.setState('notification-uuid', uuid);
        }

        const previousCheck = Me.stateManager!.getState('notification-check')
            ? new Date(Me.stateManager!.getState('notification-check'))
            : new Date();

        const message = Soup.Message.new(
            'GET',
            `${API_SERVER}/notifications?lastCheck=${previousCheck.toISOString()}&uuid=${uuid}&gnomeVersion=${PACKAGE_VERSION}&version=${
                Me.instance.metadata['version-name']
            }`
        );

        // send the HTTP request and wait for response
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
                        Debug.log(`error unpacking notification: ${e}`);
                        return;
                    }
                    this.showNotifications(notifications);
                }
            }
        );
        Me.stateManager!.setState(
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

            source.addNotification(notification);
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
class MsNotificationSource extends MessageTray.Source {
    constructor() {
        super({
            title: 'Material Shell',
            icon: Gio.icon_new_for_string(
                `${Me.instance.metadata.path}/assets/icons/on-dark-small.svg`
            ),
        });
    }
}

@registerGObjectClass
class MsNotification extends MessageTray.Notification {
    action: { url: string; label: string } | undefined;
    constructor(
        source: MessageTray.Source,
        title: string,
        text: string,
        icon: string,
        action: { url: string; label: string } | undefined
    ) {
        super({
            source,
            title,
            body: text,
            useBodyMarkup: true,
            gicon: icon
                ? Gio.icon_new_for_string(
                      `${Me.instance.metadata.path}/assets/icons/${icon}.svg`
                  )
                : null,
        });
        this.action = action;
    }

    activate() {
        super.activate();
        const dialog = new MsNotificationDialog(
            this.title ?? '',
            this.body ?? '',
            this.action
        );
        dialog.open();
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

        this.contentLayout.add_child(content);
    }

    _onCancelButtonPressed() {
        this.close();
    }
}

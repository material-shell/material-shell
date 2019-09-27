const MessageTray = imports.ui.messageTray;

function notify(msg, details, actions) {
    let source = new MessageTray.SystemNotificationSource();
    let messageTray = new MessageTray.MessageTray();
    messageTray.add(source);
    let notification = new MessageTray.Notification(source, msg, details);
    notification.actions = actions;
    notification.setTransient(true);
    source.notify(notification);
}

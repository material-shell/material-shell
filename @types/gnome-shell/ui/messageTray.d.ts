import type Gio from '../../gir-generated/gio-2.0.js';
import type St from '../../gir-generated/st-13.js';

export class MessageTray extends St.Widget {
    add(source: any): void;
}

export interface NotificationParams {
    gicon?: Gio.Icon;
}

export class Notification {
    title: string;
    content: string;
    bannerBodyText: string;
    bannerBodyMarkup?: boolean;

    constructor(
        source: Source,
        title: string,
        text: string,
        params: NotificationParams
    );
    activate(): void;
}

export class Source {
    constructor(name: string);
    getIcon(): Gio.Icon;
    showNotification(notification: Notification): void;
}

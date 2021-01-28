import * as Gio from 'gio';

declare module "ui" {
    export namespace messageTray {
        interface NotificationParams {
            gicon?: Gio.Icon,
        }

        class Notification {
            title: string;
            content: string;
            bannerBodyText: string;
            bannerBodyMarkup?: boolean;

            constructor(source: Source, title: string, text: string, params: NotificationParams);
            activate(): void;
        }

        class Source {
            constructor(name: string);
            getIcon(): Gio.Icon;
        }
    }
}
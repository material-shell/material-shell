import * as GLib from 'glib';

export class Async {
    static timeoutIdList = [] as number[];

    static addTimeout(priority: number, interval: number, func: () => void) {
        const timeoutId = GLib.timeout_add(priority, interval, () => {
            func();
            this.clearTimeoutId(timeoutId);
            return GLib.SOURCE_REMOVE;
        });
        this.timeoutIdList.push(timeoutId);
        return timeoutId;
    }

    static clearTimeoutId(timeoutId: number) {
        if (timeoutId && this.timeoutIdList.includes(timeoutId)) {
            GLib.source_remove(timeoutId);
            this.timeoutIdList.splice(this.timeoutIdList.indexOf(timeoutId), 1);
        }
    }

    static clearAllPendingTimeout() {
        for (const timeoutId of this.timeoutIdList) {
            this.clearTimeoutId(timeoutId);
        }
    }
}

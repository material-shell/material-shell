import GLib from 'gi://GLib';
import { assert } from './assert';
import { logAsyncException } from './log';

export class Async {
    static timeoutIdList = [] as number[];

    static addTimeout(priority: number, interval: number, func: () => boolean) {
        const timeoutId = GLib.timeout_add(priority, interval, () => {
            const source = func();
            if (source == GLib.SOURCE_REMOVE) {
                this.clearTimeoutId(timeoutId);
            }
            return source;
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

/** Debounces a given function */
export class AsyncDebounce {
    public delayMs: number;

    private timeoutId: number | undefined;
    private running = false;
    private runAgain = false;
    private readonly f: () => Promise<void>;

    constructor(delayMs: number, f: () => Promise<void>) {
        this.delayMs = delayMs;
        this.f = f;
    }

    /** Cancels any pending invocation.
     * If `f` is currently running, it cannot be cancelled.
     */
    cancel() {
        if (this.timeoutId !== undefined) GLib.source_remove(this.timeoutId);
        this.runAgain = false;
    }

    /** Call `f` in about `delayMs` milliseconds.
     * If this function is called multiple times before `f` runs, `f` will still only be called once.
     *
     * If `schedule` is called while `f` is running (it is asynchronous) then `f` will be called again
     * as soon as `f` has finished its current execution.
     *
     * See https://docs.gtk.org/glib/main-loop.html
     */
    schedule() {
        if (this.running) {
            this.runAgain = true;
        } else if (this.timeoutId === undefined) {
            this.timeoutId = Async.addTimeout(
                GLib.PRIORITY_DEFAULT,
                this.delayMs,
                () => {
                    // Note: need to manually catch exceptions in async functions, otherwise they will not be logged
                    this.runInternal().catch(logAsyncException);
                    return GLib.SOURCE_REMOVE;
                }
            );
        } else {
            // Already scheduled and not running. We can just sit back and wait.
        }
    }

    private async runInternal() {
        assert(
            !this.running,
            'Expected all other invocations to have finished'
        );
        this.running = true;
        this.timeoutId = undefined;
        try {
            await this.f();
        } finally {
            this.running = false;
            if (this.runAgain) {
                this.runAgain = false;
                this.schedule();
            }
        }
    }
}

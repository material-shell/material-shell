import * as GLib from 'glib';
import { assert } from './assert';
import { logAsyncException } from './log';

const Me = imports.misc.extensionUtils.getCurrentExtension();

export class Async {
    static timeoutIdList = [] as number[];

    static addTimeout(priority: number, interval: number, func: () => void) {
    try{
        const timeoutId = GLib.timeout_add(priority, interval, () => {
            func();
            this.clearTimeoutId(timeoutId);
            return GLib.SOURCE_REMOVE;
        });
        this.timeoutIdList.push(timeoutId);
        return timeoutId;} finally {}
    }

    static clearTimeoutId(timeoutId: number) {
    try{
        if (timeoutId && this.timeoutIdList.includes(timeoutId)) {
            GLib.source_remove(timeoutId);
            this.timeoutIdList.splice(this.timeoutIdList.indexOf(timeoutId), 1);
        }} finally {}
    }

    static clearAllPendingTimeout() {
    try{
        for (const timeoutId of this.timeoutIdList) {
            this.clearTimeoutId(timeoutId);
        }} finally {}
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
    try{
        this.delayMs = delayMs;
        this.f = f;} finally {}
    }

    /** Cancels any pending invocation.
     * If `f` is currently running, it cannot be cancelled.
     */
    cancel() {try{
        if (this.timeoutId !== undefined) GLib.source_remove(this.timeoutId);
        this.runAgain = false;} finally {}
    }

    /** Call `f` in about `delayMs` milliseconds.
     * If this function is called multiple times before `f` runs, `f` will still only be called once.
     *
     * If `schedule` is called while `f` is running (it is asynchronous) then `f` will be called again
     * as soon as `f` has finished its current execution.
     *
     * See https://docs.gtk.org/glib/main-loop.html
     */
    schedule() {try{
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
        }} finally {}
    }

    private async runInternal() {
    try{
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
        }} finally {}
    }
}

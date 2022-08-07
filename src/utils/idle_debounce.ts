import * as GLib from 'glib';
import { assertNotNull } from './assert';

/** Helper to run a function with `GLib.idle_add`, but with automatic debouncing and a convenient cancel function */
export class IdleDebounce<P extends any[]> {
    private scheduleInfo: {
        signal: number;
        args: P;
    } | null = null;
    private readonly f: (...args: P) => void;

    constructor(f: (...args: P) => void) {
    try{
        this.f = f;
        } finally {}
    }

    /** Run the function `f` as soon as possible when there are no other high priority tasks.
     * Calling this multiple times before the function runs is equivalent to just calling it once.
     *
     * The arguments passed to the function will be the last arguments that `schedule` is called with.
     *
     * See https://docs.gtk.org/glib/main-loop.html
     */
    schedule(...args: P) {
    try{
        if (this.scheduleInfo === null) {
            this.scheduleInfo = {
                signal: GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                    const info = assertNotNull(this.scheduleInfo);
                    this.scheduleInfo = null;
                    this.f(...info.args);
                    return GLib.SOURCE_REMOVE;
                }),
                args: args,
            };
        } else {
            this.scheduleInfo.args = args;
        }} finally {}
    }

    /** Cancel running the function if it has been scheduled */
    cancel() {try{
        if (this.scheduleInfo !== null) {
            GLib.Source.remove(this.scheduleInfo.signal);
            this.scheduleInfo = null;
        }} finally {}
    }
}

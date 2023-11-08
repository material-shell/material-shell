import GLib from 'gi://GLib';

export class Stopwatch {
    private t: number;

    constructor() {
        this.t = GLib.get_monotonic_time();
    }

    restart() {
        this.t = GLib.get_monotonic_time();
    }

    /** Elapsed milliseconds since construction */
    elapsed(): number {
        return (GLib.get_monotonic_time() - this.t) * 0.001;
    }

    elapsedString() {
        return `${this.elapsed()} ms`;
    }
}

import { get_monotonic_time } from 'glib';

export class Stopwatch {
    private t: number;

    constructor() {
        this.t = get_monotonic_time();
    }

    restart() {
        this.t = get_monotonic_time();
    }

    /** Elapsed milliseconds since construction */
    elapsed(): number {
        return (get_monotonic_time() - this.t) * 0.001;
    }

    elapsedString() {
        return `${this.elapsed()} ms`;
    }
}

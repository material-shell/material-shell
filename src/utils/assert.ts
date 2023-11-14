import GLib from 'gi://GLib';

export function assertNotNull<T>(value: T | null | undefined): T {
    if (value === null || value === undefined) {
        throw Error(`Expected value, but found ${value}`);
    }
    return value;
}

export function assert(
    shouldBeTrue: boolean,
    message: string
): asserts shouldBeTrue {
    if (!shouldBeTrue) {
        throw Error('Assertion failed: ' + message);
    }
}

export function logAssert(shouldBeTrue: boolean, message: string): boolean {
    if (!shouldBeTrue) {
        GLib.log_structured('Material Shell', GLib.LogLevelFlags.FLAG_FATAL, {
            MESSAGE: 'Assertion failed: ' + message,
            STACKTRACE: new Error().stack,
        });
    }
    return shouldBeTrue;
}

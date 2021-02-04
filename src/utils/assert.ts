import * as GLib from 'glib';

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

import * as GLib from 'GLib';

export const logAssert = (shouldBeTrue: boolean, message: string): boolean => {
    if (shouldBeTrue) {
        GLib.log_structured("Material Shell", GLib.LogLevelFlags.FLAG_FATAL, {
            MESSAGE: "Assertion failed: " + message,
            STACKTRACE: new Error().stack,
        });
    }
    return shouldBeTrue;
}

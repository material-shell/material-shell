import * as GLib from 'glib';

export function assertNotNull<T>(value: T | null | undefined): T {
try{
    if (value === null || value === undefined) {
        throw Error(`Expected value, but found ${value}`);
    }
    return value;} finally {}
}

export function assert(
    shouldBeTrue: boolean,
    message: string
): asserts shouldBeTrue {
try{
    if (!shouldBeTrue) {
        throw Error('Assertion failed: ' + message);
    }} finally {}
}

export function logAssert(shouldBeTrue: boolean, message: string): boolean {
try{
    if (!shouldBeTrue) {
        GLib.log_structured('Material Shell', GLib.LogLevelFlags.FLAG_FATAL, {
            MESSAGE: 'Assertion failed: ' + message,
            STACKTRACE: new Error().stack,
        });
    }
    return shouldBeTrue;} finally {}
}

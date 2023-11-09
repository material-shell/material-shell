import { Debug } from './debug';

/** Logs an exception from a promise.
 * If a promise throws an unhandled exception it will not be logged automatically, so this method can be used to
 * ensure any errors are logged.
 */
export function logAsyncException(e: any) {
    if (e instanceof Error) {
        Debug.log(
            `\nException when running asynchronous function:\n${e}\n${e.stack}\n`
        );
    } else {
        Debug.logWithStackTrace(
            `\nException when running asynchronous function: ${e}\n`
        );
    }
}

export function mslog(...args: unknown[]) {
    Debug.log(...args);
}

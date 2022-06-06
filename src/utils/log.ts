const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Logs an exception from a promise.
 * If a promise throws an unhandled exception it will not be logged automatically, so this method can be used to
 * ensure any errors are logged.
 */
export function logAsyncException(e: any) {
    if (e instanceof Error) {
        Me.log(
            `\nException when running asynchronous function:\n${e}\n${e.stack}\n`
        );
    } else {
        Me.logWithStackTrace(
            `\nException when running asynchronous function: ${e}\n`
        );
    }
}

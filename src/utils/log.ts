import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

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

export function mslog(...args: unknown[]) {
    Me.log(...args);
}

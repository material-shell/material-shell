/** Gnome libs imports */
import GLib from 'gi://GLib';

/** Extension imports */

const DEBUG = true;
const FOCUS_ONLY = false;
let indent = 0;

export class Debug {
    doLogTick = false;
    constructor() {
        if (DEBUG) {
            // In IDLE otherwise all the files are not yet enabled since this is called during the file inventory
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                const objects: any[] = [
                    /* MsWindowManager,
                    MsWorkspaceManager,
                    MsThemeManager,
                    MsMain,
                    MsWorkspace,
                    MsDndManager,
                    MsResizeManager,
                    MsWindow,
                    MsFocusManager,
                    TaskBar,
                    TaskBarItem,
                    IconTaskBarItem,
                    TaskActiveIndicator,
                    TileableItem,
                    LayoutSwitcher,
                    TilingLayoutMenuItem,
                    ReorderableList, */
                ];
                objects
                    .filter((object) => object)
                    .forEach((object) =>
                        this.addLogToFunctions(object.prototype)
                    );
                return false;
            });
        }
    }

    static logWithStackTrace(...args: any[]) {
        this.log(...args, new Error().stack);
    }

    static log(...args: any[]) {
        if (!DEBUG || FOCUS_ONLY) return;
        const fields = { MESSAGE: `${'  '.repeat(indent)}${args.join(', ')}` };
        const domain = 'Material Shell';

        GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
    }

    static logFocus(...args: any[]) {
        if (!DEBUG) return;
        const fields = { MESSAGE: `${'##'.repeat(indent)}${args.join(', ')}` };
        const domain = 'Material Shell';

        GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
    }

    static logBlank() {
        for (let i = 0; i < 50; i++) {
            this.logFocus('');
        }
    }

    /* exported startLogTick */
    startLogTick() {
        this.doLogTick = true;
        this.logTick();
    }

    logTick() {
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            if (this.doLogTick) {
                this.logTick();
            }
            return GLib.SOURCE_REMOVE;
        });
    }
    /* exported stopLogTick */
    stopLogTick() {
        this.doLogTick = false;
    }

    addLogToFunctions(prototype: any) {
        if (!DEBUG) return;
        for (const key of Object.getOwnPropertyNames(prototype)) {
            if (key === 'constructor') continue;
            const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
            if (descriptor) {
                const value = descriptor.value;
                if (typeof value === 'function') {
                    prototype[key] = function (...args: any[]) {
                        // Before
                        Debug.log(
                            `${prototype.constructor.name}.${key} (${Array.from(
                                args
                            )
                                .map((param) => {
                                    try {
                                        return param.toString();
                                    } catch (_e) {
                                        return '';
                                    }
                                })
                                .join(',')})`
                        );
                        indent++;
                        try {
                            const result = value.apply(this, args); // use .apply() to call it
                            // After
                            return result;
                        } finally {
                            indent--;
                        }
                    };
                }
            }
        }
    }
}

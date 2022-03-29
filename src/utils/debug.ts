/** Gnome libs imports */
import * as GLib from 'glib';
import { MsMain } from 'src/layout/main';
import {
    LayoutSwitcher,
    TilingLayoutMenuItem,
} from 'src/layout/msWorkspace/horizontalPanel/layoutSwitcher';
import {
    IconTaskBarItem,
    TaskActiveIndicator,
    TaskBar,
    TaskBarItem,
    TileableItem,
} from 'src/layout/msWorkspace/horizontalPanel/taskBar';
import { MsWindow } from 'src/layout/msWorkspace/msWindow';
import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';
import { MsDndManager } from 'src/manager/msDndManager';
import { MsResizeManager } from 'src/manager/msResizeManager';
import { MsThemeManager } from 'src/manager/msThemeManager';
import { MsWindowManager } from 'src/manager/msWindowManager';
import { MsWorkspaceManager } from 'src/manager/msWorkspaceManager';
import { ReorderableList } from 'src/widget/reorderableList';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const DEBUG = true;
const FOCUS_ONLY = false;
let indent = 0;
export function initDebug() {
    // TODO: Essentially dead code
    const AddLogToFunctions = function (prototype) {
        if (!DEBUG) return;
        for (const key of Object.getOwnPropertyNames(prototype)) {
            if (key === 'constructor') continue;
            const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
            if (descriptor) {
                const value = descriptor.value;
                if (typeof value === 'function') {
                    prototype[key] = function (...args) {
                        // Before
                        Me.log(
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
                        const result = value.apply(this, args); // use .apply() to call it
                        // After

                        indent--;
                        return result;
                    };
                }
            }
        }
    };

    Me.log = function (...args: any[]) {
        if (!DEBUG || FOCUS_ONLY) return;
        const fields = { MESSAGE: `${'  '.repeat(indent)}${args.join(', ')}` };
        const domain = 'Material Shell';

        GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
    };

    Me.logFocus = function (...args: any[]) {
        if (!DEBUG) return;
        const fields = { MESSAGE: `${'##'.repeat(indent)}${args.join(', ')}` };
        const domain = 'Material Shell';

        GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
    };

    let doLogTick = false;
    /* exported startLogTick */
    const startLogTick = function () {
        doLogTick = true;
        logTick();
    };

    function logTick() {
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            if (doLogTick) {
                logTick();
            }
            return GLib.SOURCE_REMOVE;
        });
    }
    /* exported stopLogTick */
    const stopLogTick = function () {
        doLogTick = false;
    };

    Me.logBlank = function () {
        for (let i = 0; i < 50; i++) {
            Me.logFocus('');
        }
    };

    if (DEBUG) {
        // In IDLE otherwise all the files are not yet enabled since this is called during the file inventory
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            const objects: any[] = [
                MsWindowManager,
                MsWorkspaceManager,
                MsThemeManager,
                MsMain,
                MsWorkspace,
                MsDndManager,
                MsResizeManager,
                MsWindow,
                TaskBar,
                TaskBarItem,
                IconTaskBarItem,
                TaskActiveIndicator,
                TileableItem,
                LayoutSwitcher,
                TilingLayoutMenuItem,
                ReorderableList,
            ];
            objects
                .filter((object) => object)
                .forEach((object) => AddLogToFunctions(object.prototype));
            return false;
        });
    }
}

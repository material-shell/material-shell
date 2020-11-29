/** Gnome libs imports */
const { GLib } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const DEBUG = true;
const FOCUS_ONLY = false;
let indent = 0;
var init = function () {
    var AddLogToFunctions = function (prototype) {
        if (!DEBUG) return;
        for (let key of Object.getOwnPropertyNames(prototype)) {
            if (key === 'constructor') continue;
            const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
            if (descriptor) {
                const value = descriptor.value;
                if (typeof value === 'function') {
                    prototype[key] = function () {
                        // Before
                        Me.log(
                            `${prototype.constructor.name}.${key} (${Array.from(
                                arguments
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
                        var result = value.apply(this, arguments); // use .apply() to call it
                        // After

                        indent--;
                        return result;
                    };
                }
            }
        }
    };

    Me.log = function (...args) {
        if (!DEBUG || FOCUS_ONLY) return;
        let fields = { MESSAGE: `${'  '.repeat(indent)}${args.join(', ')}` };
        let domain = 'Material Shell';

        GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
    };

    Me.logFocus = function (...args) {
        if (!DEBUG) return;
        let fields = { MESSAGE: `${'##'.repeat(indent)}${args.join(', ')}` };
        let domain = 'Material Shell';

        GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
    };

    let doLogTick = false;
    /* exported startLogTick */
    var startLogTick = function () {
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
    var stopLogTick = function () {
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
            [
                /* Me.imports.src.manager.msWindowManager.MsWindowManager,
                Me.imports.src.manager.msWorkspaceManager.MsWorkspaceManager,
                Me.imports.src.manager.msThemeManager.MsThemeManager,
                Me.imports.src.layout.main.MsMain,
                Me.imports.src.layout.msWorkspace.msWorkspace.MsWorkspace,
                Me.imports.src.layout.msWorkspace.msWindow.MsWindow,
                Me.imports.src.layout.msWorkspace.horizontalPanel.taskBar
                    .TaskBar,
                Me.imports.src.layout.msWorkspace.horizontalPanel.taskBar
                    .TaskBarItem,
                Me.imports.src.layout.msWorkspace.horizontalPanel.taskBar
                    .IconTaskBarItem,
                Me.imports.src.layout.msWorkspace.horizontalPanel.taskBar
                    .TaskActiveIndicator,
                Me.imports.src.layout.msWorkspace.horizontalPanel.taskBar
                    .TileableItem,
                Me.imports.src.layout.msWorkspace.horizontalPanel.layoutSwitcher
                    .LayoutSwitcher,
                Me.imports.src.layout.msWorkspace.horizontalPanel.layoutSwitcher
                    .TilingLayoutMenuItem,
                Me.imports.src.widget.reorderableList.ReorderableList, */
            ]
                .filter((object) => object)
                .forEach((object) => AddLogToFunctions(object.prototype));
        });
    }
};

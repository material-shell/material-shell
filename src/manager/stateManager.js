// Inspired by https://github.com/Tudmotu/gnome-shell-extension-clipboard-indicator/blob/master/utils.js

/** Gnome libs imports */
const { GLib, Gio } = imports.gi;
const FileTest = GLib.FileTest;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

const REGISTRY_PATH = `${GLib.get_user_cache_dir()}/${Me.uuid}-state.json`;
const REGISTRY_NEXT_PATH = `${GLib.get_user_cache_dir()}/${
    Me.uuid
}-state-next.json`;

/* exported StateManager */
var StateManager = class StateManager {
    constructor() {
        this.state = {};
        this.stateFile = Gio.file_new_for_path(REGISTRY_PATH);
    }
    loadRegistry(callback) {
        if (typeof callback !== 'function')
            throw TypeError('`callback` must be a function');

        if (GLib.file_test(REGISTRY_PATH, FileTest.EXISTS)) {
            this.stateFile.load_contents_async(null, (obj, res) => {
                let [success, contents] = obj.load_contents_finish(res);
                if (success) {
                    try {
                        this.state = JSON.parse(
                            imports.byteArray.toString(contents)
                        );
                    } catch {
                        this.state = {};
                    }
                }
                callback(this.state);
            });
        } else {
            callback(this.state);
        }
    }
    saveRegistry() {
        let json = JSON.stringify(this.state);
        let contents = new GLib.Bytes(json);

        // Write contents to file asynchronously
        let file = Gio.file_new_for_path(REGISTRY_NEXT_PATH);
        file.replace_async(
            null,
            false,
            Gio.FileCreateFlags.NONE,
            GLib.PRIORITY_DEFAULT,
            null,
            (obj, res) => {
                let stream = obj.replace_finish(res);

                stream.write_bytes_async(
                    contents,
                    GLib.PRIORITY_DEFAULT,
                    null,
                    (w_obj, w_res) => {
                        w_obj.write_bytes_finish(w_res);
                        stream.close(null);
                        file.move(this.stateFile, 1, null, () => {
                            //Progress callback
                            Me.logFocus(
                                '[DEBUG]',
                                `registry successfully saved`
                            );
                        });
                    }
                );
            }
        );
    }
    getState(key) {
        return this.state[key];
    }
    setState(key, value) {
        if (value === undefined) {
            delete this.state[key];
        } else {
            this.state[key] = value;
        }
        this.saveRegistry();
    }

    destroy() {}
};

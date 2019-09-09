// Inspired by https://github.com/Tudmotu/gnome-shell-extension-clipboard-indicator/blob/master/utils.js

const { GLib, Gio } = imports.gi;
const FileQueryInfoFlags = Gio.FileQueryInfoFlags;
const FileTest = GLib.FileTest;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const REGISTRY_PATH = `${GLib.get_user_cache_dir()}/${Me.uuid}-state.json`;

var StateManager = class StateManager {
    constructor() {
        this.state = {};
    }
    loadRegistry(callback) {
        if (typeof callback !== 'function')
            throw TypeError('`callback` must be a function');

        if (GLib.file_test(REGISTRY_PATH, FileTest.EXISTS)) {
            let file = Gio.file_new_for_path(REGISTRY_PATH);

            file.query_info_async(
                '*',
                FileQueryInfoFlags.NONE,
                GLib.PRIORITY_DEFAULT,
                null,
                (src, res) => {
                    file.load_contents_async(null, (obj, res) => {
                        let [success, contents] = obj.load_contents_finish(res);
                        if (success) {
                            this.state = JSON.parse(
                                imports.byteArray.toString(contents)
                            );
                        }

                        callback(this.state);
                    });
                }
            );
        } else {
            callback(this.state);
        }
    }
    saveRegistry() {
        let json = JSON.stringify(this.state);
        let contents = new GLib.Bytes(json);

        // Write contents to file asynchronously
        let file = Gio.file_new_for_path(REGISTRY_PATH);
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
                    }
                );
            }
        );
    }
    getState(key) {
        if (this.state[key]) return this.state[key];
    }
    setState(key, value) {
        if (!value) {
            delete this.state[key];
        } else {
            this.state[key] = value;
        }
        this.saveRegistry();
    }
};

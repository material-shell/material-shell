// Inspired by https://github.com/Tudmotu/gnome-shell-extension-clipboard-indicator/blob/master/utils.js

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { getSettings } from 'src/utils/settings';
import * as Gio from 'gio';
import * as GLib from 'glib';

/** Gnome libs imports */
const FileTest = GLib.FileTest;

const REGISTRY_PATH = `${GLib.get_user_cache_dir()}/${Me.uuid}-state.json`;
const REGISTRY_NEXT_PATH = `${GLib.get_user_cache_dir()}/${
    Me.uuid
}-state-next.json`;

type StateDict = { [Key: string]: any };

export class StateManager {
    state: StateDict;
    stateFile: Gio.File;
    stateChangedTriggered: boolean|undefined;

    constructor() {
        this.state = {};
        this.stateFile = Gio.file_new_for_path(REGISTRY_PATH);
    }
    loadRegistry(callback: (state: StateDict)=>void) {
        if (typeof callback !== 'function')
            throw TypeError('`callback` must be a function');
        const serializedState = global.get_persistent_state(
            's',
            'material-shell-state'
        );
        if (serializedState) {
            try {
                this.state = this.updateState(
                    JSON.parse(serializedState.deep_unpack())
                );
            } catch (e) {
                this.state = {};
            }
            return callback(this.state);
        }
        if (GLib.file_test(REGISTRY_PATH, FileTest.EXISTS)) {
            this.stateFile.load_contents_async(null, (obj, res) => {
                let file = obj as unknown as Gio.File;
                let [success, contents] = file.load_contents_finish(res);
                if (success) {
                    try {
                        this.state = this.updateState(
                            JSON.parse(imports.byteArray.toString(contents))
                        );
                    } catch (e) {
                        Me.log(e);
                        this.state = {};
                    }
                }
                callback(this.state);
            });
        } else {
            this.state = {};
            callback(this.state);
        }
    }

    updateState(state: StateDict) {
        if (state) {
            const workspacesState = state['workspaces-state'];
            if (workspacesState) {
                // in old version the workspaces was split in 2 different array
                workspacesState.msWorkspaceList = workspacesState.msWorkspaceList || [
                    ...workspacesState.primaryWorkspaceList,
                    ...workspacesState.externalWorkspaces,
                ];

                workspacesState.msWorkspaceList.map((msWorkspaceState) => {
                    msWorkspaceState.layoutKey =
                        msWorkspaceState.layoutKey ||
                        msWorkspaceState.tilingLayout;
                    delete msWorkspaceState.tilingLayout;
                    return msWorkspaceState;
                });
            }
        }
        return state;
    }

    saveRegistry() {
        let json = JSON.stringify(this.state);
        global.set_persistent_state(
            'material-shell-state',
            GLib.Variant.new_string(json)
        );
    }
    getState(key: string) {
        return this.state[key];
    }
    setState(key: string, value) {
        if (value === undefined) {
            delete this.state[key];
        } else {
            this.state[key] = value;
        }
        this.saveRegistry();
    }

    stateChanged() {
        if (
            !Me.loaded ||
            Me.msWorkspaceManager.updatingMonitors ||
            this.stateChangedTriggered ||
            Me.disableInProgress
        )
            return;

        this.stateChangedTriggered = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            this.saveCurrentState();
            this.stateChangedTriggered = false;
            return GLib.SOURCE_REMOVE;
        });
    }

    saveCurrentState() {
        // Avoid unnecessary work
        if (!Me.loaded || Me.disableInProgress) return;

        if (getSettings('tweaks').get_boolean('enable-persistence')) {
            this.setState('workspaces-state', Me.msWorkspaceManager.state);
        }
    }

    destroy() {}
};

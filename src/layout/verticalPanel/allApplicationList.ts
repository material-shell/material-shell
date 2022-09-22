/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GObject from 'gobject';
import * as Shell from 'shell';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
import { SearchResultEntry } from './searchResultList';
const ParentalControlsManager = imports.misc.parentalControlsManager;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class AllApplicationList extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'AllApplicationList',
        Signals: {
            'result-selected-changed': {
                param_types: [SearchResultEntry.$gtype],
                accumulator: 0,
            },
        },
    };
    disconnectList: Function[] = [];
    parentalControlsManager;
    entrySelected: SearchResultEntry | null = null;
    constructor(searchEntry: St.Entry) {
        super({
            style_class: 'search-result-list',
            vertical: true,
        });
        // Note: Clutter typedefs seem to be incorrect. According to the docs `ev` should be a Clutter.KeyEvent, but it actually seems to be a Clutter.Event.
        const keyId = searchEntry.clutter_text.connect(
            'key-press-event',
            this.onKeyPress.bind(this)
        );
        this.disconnectList.push(() => searchEntry.disconnect(keyId));
        this.parentalControlsManager = ParentalControlsManager.getDefault();
        const parentalId = this.parentalControlsManager.connect(
            'app-filter-changed',
            this.updateResults.bind(this)
        );
        this.disconnectList.push(() =>
            this.parentalControlsManager.disconnect(parentalId)
        );

        this.connect('destroy', () =>
            this.disconnectList.forEach((disconnectFunction) =>
                disconnectFunction()
            )
        );

        const appSystem = Shell.AppSystem.get_default();
        appSystem.connect('installed-changed', this.updateResults.bind(this));
        this.updateResults();
    }

    get resultEntryList() {
        return this.get_children().filter(
            (actor) => actor instanceof SearchResultEntry
        ) as SearchResultEntry[];
    }

    onKeyPress(entry: Clutter.Actor, event: Clutter.Event) {
        const symbol = event.get_key_symbol();
        switch (symbol) {
            case Clutter.KEY_Escape: {
            this.resetAndClose();
            return Clutter.EVENT_STOP;
            }
            case Clutter.KEY_Tab:
            case Clutter.KEY_Down: {
                this.selectNext();
                return Clutter.EVENT_STOP;
            }
            case Clutter.KEY_ISO_Left_Tab:
            case Clutter.KEY_Up: {
                this.selectPrevious();
                return Clutter.EVENT_STOP;
            }
            case Clutter.KEY_Return:
            case Clutter.KEY_KP_Enter: {
                if (this.entrySelected !== null) {
                    this.entrySelected.emit('primary-action');
                }
                return Clutter.EVENT_STOP;
            }
        }
        return Clutter.EVENT_PROPAGATE;
    }

    updateResults() {
        const appSystem = Shell.AppSystem.get_default();
        const appsInstalled = appSystem
            .get_installed()
            .filter((appInfo) => {
                try {
                    const _ = appInfo.get_id(); // catch invalid file encodings
                } catch (e) {
                    return false;
                }
                return (
                    appInfo.should_show() &&
                    this.parentalControlsManager.shouldShowApp(appInfo)
                );
            })
            .sort((a, b) =>
                a.get_display_name().localeCompare(b.get_display_name())
            );

        for (let appInfo of appsInstalled) {
            let icon = new St.Icon({
                icon_size: 32,
                gicon: appInfo.get_icon(),
            });

            const entry = new SearchResultEntry(
                icon,
                appInfo.get_display_name(),
                // The remote search provider also provides a description field, but the app search does not
                appInfo.get_description(),
                true
            );
            entry.connect('primary-action', () => {
                // It's important that we do this first because it will remove the focus grab that we use.
                // This has the effect of restoring focus to the actor that was focused when we first grabbed it.
                // So if we want to focus a newly created window we need to be sure to do it after we close the search view.
                this.resetAndClose();

                const app = Shell.AppSystem.get_default().lookup_app(
                    appInfo.get_id()
                );
                if (app) {
                    Me.msWindowManager.openApp(
                        app,
                        Me.msWorkspaceManager.getActiveMsWorkspace()
                    );
                }
            });
            this.addResult(entry);
        }
    }

    addResult(resultEntry: SearchResultEntry): void {
        this.add_child(resultEntry);
        if (this.resultEntryList.length === 1) {
            this.selectResult(resultEntry);
        }
    }

    selectResult(entry: SearchResultEntry): void {
        if (this.entrySelected) {
            this.entrySelected.setSelected(false);
        }
        this.entrySelected = entry;
        this.entrySelected.setSelected(true);
        this.emit('result-selected-changed', this.entrySelected);
    }

    selectNext() {
        if (this.entrySelected == null) {
            this.entrySelected = this.resultEntryList[0];
            this.selectResult(this.entrySelected);
            return;
        }
        const currentIndex = this.resultEntryList.indexOf(this.entrySelected);
        const nextEntry = this.resultEntryList[currentIndex + 1];
        if (nextEntry) {
            this.selectResult(nextEntry);
        }
    }

    selectPrevious() {
        if (this.entrySelected == null) {
            this.entrySelected = this.resultEntryList[0];
            this.selectResult(this.entrySelected);
            return;
        }
        const currentIndex = this.resultEntryList.indexOf(this.entrySelected);
        const previousEntry = this.resultEntryList[currentIndex - 1];
        if (previousEntry) {
            this.selectResult(previousEntry);
        }
    }

    resetAndClose() {
        Me.layout.toggleOverview();
    }
}

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
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
    parentalControlsManager;
    terms: string[] = [];
    private searchTimeoutId = 0;
    startingSearch = false;
    private results: Record<string, string[]> = {};
    isSubSearch = false;
    cancellable = new Gio.Cancellable();
    iconClickedId = 0;
    entrySelected: SearchResultEntry | null = null;
    constructor() {
        super({
            style_class: 'search-result-list',
            vertical: true,
        });
        this.parentalControlsManager = ParentalControlsManager.getDefault();
        this.parentalControlsManager.connect(
            'app-filter-changed',
            this.updateResults.bind(this)
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
        if (symbol === Clutter.KEY_Escape) {
            this.resetAndClose();

            return Clutter.EVENT_STOP;
        } else {
            if (symbol === Clutter.KEY_Tab) {
                this.selectNext();
                return Clutter.EVENT_STOP;
            } else if (symbol === Clutter.KEY_ISO_Left_Tab) {
                this.selectPrevious();

                return Clutter.EVENT_STOP;
            } else if (symbol === Clutter.KEY_Down) {
                this.selectNext();
                return Clutter.EVENT_STOP;
            } else if (symbol === Clutter.KEY_Up) {
                this.selectPrevious();
                return Clutter.EVENT_STOP;
            } else if (
                symbol === Clutter.KEY_Return ||
                symbol === Clutter.KEY_KP_Enter
            ) {
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
        const currentIndex =
            this.entrySelected !== null
                ? this.resultEntryList.indexOf(this.entrySelected)
                : -1;
        const nextEntry = this.resultEntryList[currentIndex + 1];
        if (nextEntry) {
            this.selectResult(nextEntry);
        }
    }

    selectPrevious() {
        const currentIndex =
            this.entrySelected !== null
                ? this.resultEntryList.indexOf(this.entrySelected)
                : -1;
        const previousEntry = this.resultEntryList[currentIndex - 1];
        if (previousEntry) {
            this.selectResult(previousEntry);
        }
    }

    /* reset() {
        this.searchEntry.text = '';
        this.terms = [];
        this.results = {};
        this.entrySelected = null;
        this.remove_all_children();
        this.clearSearchTimeout();
        this.startingSearch = false;
    } */

    resetAndClose() {
        //this.reset();
        Me.layout.toggleOverview();
    }
}

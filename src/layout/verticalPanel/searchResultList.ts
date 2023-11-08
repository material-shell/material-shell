/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Shell from 'gi://Shell';
import St from 'gi://St';
import { throttle } from 'src/utils';
import { assert } from 'src/utils/assert';
import { Async } from 'src/utils/async';
import { registerGObjectClass } from 'src/utils/gjs';
import { logAsyncException } from 'src/utils/log';
import { SignalObserver } from 'src/utils/signal';
import { ProviderResultList } from './search/ProviderResultList';
import { AppSearchProvider } from './search/searchProvider/AppSearchProvider';
import { RecentSearchProvider } from './search/searchProvider/RecentSearchProvider';
import {
    loadRemoteSearchProviders,
    RemoteSearchProvider,
} from './search/searchProvider/RemoteSearchProvider';
import {
    ReactiveSearchProvider,
    ResultMeta,
    SearchProvider,
} from './search/searchProvider/searchProvider';
import { SearchResultEntry } from './search/SearchResultEntry';

import * as ParentalControlsManager from 'resource:///org/gnome/shell/misc/parentalControlsManager.js';

function getTermsForSearchString(searchString: string): string[] {
    searchString = searchString.replace(/^\s+/g, '').replace(/\s+$/g, '');
    if (searchString === '') return [];
    return searchString.split(/\s+/);
}
const SEARCH_PROVIDERS_SCHEMA = 'org.gnome.desktop.search-providers';

/** Extension imports */
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

@registerGObjectClass
export class SearchResultList extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'SearchResultList',
        Signals: {
            'result-selected-changed': {
                param_types: [SearchResultEntry.$gtype],
                accumulator: 0,
            },
        },
    };
    signalObserver: SignalObserver = new SignalObserver();
    searchEntry: St.Entry;
    text: Clutter.Text;
    parentalControlsManager;
    providerList: ReactiveSearchProvider[] = [];
    searchSettings;
    terms: string[] = [];
    private searchTimeoutId = 0;
    startingSearch = false;
    private results: Record<string, string[]> = {};
    isSubSearch = false;
    cancellable = new Gio.Cancellable();
    clearIcon = new St.Icon({
        style_class: 'search-entry-icon',
        icon_name: 'edit-clear-symbolic',
    });
    iconClickedId = 0;
    entrySelected: SearchResultEntry | null = null;
    allApplicationList = new St.BoxLayout({ vertical: true });
    providerDisplayMap: Map<ReactiveSearchProvider, ProviderResultList> =
        new Map();
    recentSearchProvider: RecentSearchProvider;
    recentSearchProviderSearchThrottled: () => void;
    navigated = false;
    constructor(searchEntry: St.Entry) {
        super({
            style_class: 'search-result-list',
            vertical: true,
        });
        this.recentSearchProvider = new RecentSearchProvider();
        this.recentSearchProvider.loadHistoryFromExtensionState();
        // Throttle the recent search provider to avoid searching many times in a row
        // if multiple search providers return their results around the same time.
        this.recentSearchProviderSearchThrottled = throttle(() => {
            this.updateResults(
                this.recentSearchProvider,
                this.recentSearchProvider.search(
                    this.terms,
                    new Map(
                        [...this.providerDisplayMap.values()]
                            .filter(
                                (x) => x.provider != this.recentSearchProvider
                            )
                            .map((x) => [x.provider.id, x.resultList])
                    )
                )
            );
        }, 30);
        this.searchEntry = searchEntry;

        this.text = this.searchEntry.clutter_text;
        this.add_child(this.allApplicationList);
        this.signalObserver.observe(
            this.searchEntry,
            'secondary-icon-clicked',
            () => {
                this.searchEntry.text = '';
            }
        );
        this.signalObserver.observe(
            this.text,
            'text-changed',
            this.onTextChanged.bind(this)
        );
        // Note: Clutter typedefs seem to be incorrect. According to the docs `ev` should be a Clutter.KeyEvent, but it actually seems to be a Clutter.Event.
        this.signalObserver.observe<typeof this.onKeyPress>(
            this.text,
            'key-press-event',
            this.onKeyPress.bind(this)
        );

        this.parentalControlsManager = ParentalControlsManager.getDefault();
        this.parentalControlsManager.connect(
            'app-filter-changed',
            this.reloadRemoteProviders.bind(this)
        );

        this.searchSettings = new Gio.Settings({
            schema_id: SEARCH_PROVIDERS_SCHEMA,
        });
        this.signalObserver.observe(
            this.searchSettings,
            'changed::disabled',
            this.reloadRemoteProviders.bind(this)
        );
        this.signalObserver.observe(
            this.searchSettings,
            'changed::enabled',
            this.reloadRemoteProviders.bind(this)
        );
        this.signalObserver.observe(
            this.searchSettings,
            'changed::disable-external',
            this.reloadRemoteProviders.bind(this)
        );
        this.signalObserver.observe(
            this.searchSettings,
            'changed::sort-order',
            this.reloadRemoteProviders.bind(this)
        );

        this.registerProvider(this.recentSearchProvider);
        this.registerProvider(new AppSearchProvider());

        const appSystem = Shell.AppSystem.get_default();
        this.signalObserver.observe(
            appSystem,
            'installed-changed',
            this.reloadRemoteProviders.bind(this)
        );
        this.reloadRemoteProviders();

        this.connect('destroy', () => {
            this.signalObserver.clear();
        });
    }

    get resultEntryList() {
        const list: SearchResultEntry[] = [];
        for (const providerDisplay of this.providerDisplayMap.values()) {
            list.push(
                ...(providerDisplay.firstResultEntryList.get_children() as SearchResultEntry[])
            );
            if (providerDisplay.restResultEntryList.visible) {
                list.push(
                    ...(providerDisplay.restResultEntryList.get_children() as SearchResultEntry[])
                );
            }
        }
        if (this.allApplicationList.visible) {
            list.push(
                ...(this.allApplicationList.get_children() as SearchResultEntry[])
            );
        }
        return list;
    }

    registerProvider(provider: ReactiveSearchProvider): void {
        provider.searchInProgress = false;

        // Filter out unwanted providers.
        if (
            provider instanceof RemoteSearchProvider &&
            !this.parentalControlsManager.shouldShowApp(provider.appInfo)
        )
            return;

        this.providerList.push(provider);
        const providerDisplay = new ProviderResultList(provider, (id) => {
            // It's important that we do this first because it will remove the focus grab that we use.
            // This has the effect of restoring focus to the actor that was focused when we first grabbed it.
            // So if we want to focus a newly created window we need to be sure to do it after we close the search view.
            Me.layout!.toggleOverview();
            let remappedProvider = provider;

            if (remappedProvider === this.recentSearchProvider) {
                const splitId = RecentSearchProvider.splitId(id);
                const actualProvider = this.providerList.find(
                    (x) => x.id == splitId.provider_id
                );
                assert(
                    actualProvider !== undefined,
                    `Could not find provider with id ${splitId.provider_id}`
                );

                remappedProvider = actualProvider;
                id = splitId.id;
            }

            remappedProvider.activateResult(id, this.terms);
            this.recentSearchProvider.onResultActivated(
                remappedProvider.id,
                id,
                this.terms
            );
        });
        this.providerDisplayMap.set(provider, providerDisplay);
        this.add_child(providerDisplay);
    }

    reloadRemoteProviders(): void {
        const remoteProviders = this.providerList.filter(
            (p) => p.isRemoteProvider
        );
        remoteProviders.forEach((provider) => {
            this.unregisterProvider(provider);
        });
        const remoteProviderList = loadRemoteSearchProviders(
            this.searchSettings
        );
        remoteProviderList.forEach(this.registerProvider.bind(this));
        this.updateAllApplicationResults();
    }

    unregisterProvider(provider: ReactiveSearchProvider): void {
        const index = this.providerList.indexOf(provider);
        this.providerList.splice(index, 1);

        if (this.providerDisplayMap.has(provider)) {
            this.providerDisplayMap.get(provider)!.destroy();
            this.providerDisplayMap.delete(provider);
        }
    }

    onTextChanged(): void {
        const terms = getTermsForSearchString(this.searchEntry.get_text()!);
        if (terms == this.terms) return;
        const searchActive = terms.length > 0;
        this.setTerms(terms);

        if (searchActive) {
            this.searchEntry.set_secondary_icon(this.clearIcon);
        } else {
            this.searchEntry.set_secondary_icon(null);
            this.searchCancelled();
        }
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

    async doProviderSearch(
        provider: SearchProvider,
        previousResults: string[]
    ) {
        provider.searchInProgress = true;

        let results: string[];
        if (this.isSubSearch && previousResults) {
            results = await provider
                .getSubsearchResultSet(
                    previousResults,
                    this.terms,
                    this.cancellable
                )
                .catch(logAsyncException);
        } else {
            results = await provider
                .getInitialResultSet(this.terms, this.cancellable)
                .catch(logAsyncException);
        }

        this.results[provider.id] = results;
        const resultsMetas = await provider
            .getResultMetas(results, this.cancellable)
            .catch(logAsyncException);
        if (resultsMetas !== undefined)
            this.updateResults(provider, resultsMetas);
    }

    private async doSearch() {
        this.startingSearch = false;

        const previousResults = this.results;
        this.results = {};
        this.entrySelected = null;
        this.navigated = false;
        for (const provider of this.providerList) {
            const previousProviderResults = previousResults[provider.id];
            if (provider.id != 'ms-recent') {
                this.doProviderSearch(
                    provider as SearchProvider,
                    previousProviderResults
                ).catch(logAsyncException);
            }
        }

        this.clearSearchTimeout();
    }

    private clearSearchTimeout() {
        if (this.searchTimeoutId > 0) {
            Async.clearTimeoutId(this.searchTimeoutId);
            this.searchTimeoutId = 0;
        }
    }

    private onSearchTimeout() {
        this.searchTimeoutId = 0;
        this.doSearch();
        return GLib.SOURCE_REMOVE;
    }

    private searchCancelled() {
        // Leave the entry focused when it doesn't have any text;
        // when replacing a selected search term, Clutter emits
        // two 'text-changed' signals, one for deleting the previous
        // text and one for the new one - the second one is handled
        // incorrectly when we remove focus
        // (https://bugzilla.gnome.org/show_bug.cgi?id=636341) */
        if (this.text.text !== '') this.reset();
    }

    setTerms(terms: string[]): void {
        this.allApplicationList.visible = terms.length == 0;

        // Check for the case of making a duplicate previous search before
        // setting state of the current search or cancelling the search.
        // This will prevent incorrect state being as a result of a duplicate
        // search while the previous search is still active.
        const searchString = terms.join(' ');
        const previousSearchString = this.terms.join(' ');
        if (searchString == previousSearchString) return;
        this.startingSearch = true;

        this.cancellable.cancel();
        this.cancellable.reset();

        if (terms.length == 0) {
            this.reset();
            return;
        }

        let isSubSearch = false;
        if (this.terms.length > 0)
            isSubSearch = searchString.indexOf(previousSearchString) == 0;

        this.terms = terms;
        this.isSubSearch = isSubSearch;

        if (this.searchTimeoutId == 0)
            this.searchTimeoutId = Async.addTimeout(
                GLib.PRIORITY_DEFAULT,
                150,
                this.onSearchTimeout.bind(this)
            );
    }

    updateResults(provider: ReactiveSearchProvider, results: ResultMeta[]) {
        const terms = this.terms;
        const display = this.providerDisplayMap.get(provider);
        if (!display) return;

        display
            .updateSearch(results, terms)
            .then(() => {
                provider.searchInProgress = false;
                if (!this.navigated) {
                    const resultEntryList = this.resultEntryList;

                    if (resultEntryList.length > 0) {
                        this.selectResult(resultEntryList[0]);
                    }
                }
            })
            .catch(logAsyncException);

        if (display.provider != this.recentSearchProvider) {
            this.recentSearchProviderSearchThrottled();
        }
    }

    updateAllApplicationResults() {
        this.allApplicationList.remove_all_children();
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
                a.get_display_name()!.localeCompare(b.get_display_name()!)
            );

        for (const appInfo of appsInstalled) {
            const icon = new St.Icon({
                icon_size: 32,
                gicon: appInfo.get_icon(),
            });

            const entry = new SearchResultEntry(
                icon,
                appInfo.get_display_name()!,
                // The remote search provider also provides a description field, but the app search does not
                appInfo.get_description()!,
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
                    Me.msWindowManager!.openApp(
                        app,
                        Me.msWorkspaceManager!.getActiveMsWorkspace()
                    );
                }
            });
            this.allApplicationList.add_child(entry);
        }

        const resultEntryList = this.resultEntryList;

        if (resultEntryList.length > 0) {
            this.selectResult(resultEntryList[0]);
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
        this.navigated = true;
        const entryList = this.resultEntryList;
        if (this.entrySelected == null || entryList.length == 0) {
            return;
        }
        const currentIndex = entryList.indexOf(this.entrySelected);
        const nextEntry = entryList[currentIndex + 1];
        if (nextEntry) {
            this.selectResult(nextEntry);
        }
    }

    selectPrevious() {
        this.navigated = true;
        const entryList = this.resultEntryList;
        if (this.entrySelected == null || entryList.length == 0) {
            return;
        }
        const currentIndex = entryList.indexOf(this.entrySelected);
        const previousEntry = entryList[currentIndex - 1];
        if (previousEntry) {
            this.selectResult(previousEntry);
        }
    }

    reset() {
        // We need to reset terms before searchEntry text in order to prevent calling reset twice and causing crash
        this.searchEntry.text = '';
        this.terms = [];

        this.results = {};
        this.entrySelected = null;

        //Reset search results
        for (const providerDisplay of this.providerDisplayMap.values()) {
            providerDisplay.updateSearch([], []);
        }
        this.clearSearchTimeout();
        this.startingSearch = false;
    }

    resetAndClose() {
        this.reset();
        Me.layout!.toggleOverview();
    }
}

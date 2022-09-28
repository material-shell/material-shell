/** Gnome libs imports */
import * as Clutter from 'clutter';
import { Text } from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import * as Shell from 'shell';
import { Async } from 'src/utils/async';
import { registerGObjectClass } from 'src/utils/gjs';
import { SignalObserver } from 'src/utils/signal';
import { MatButton } from 'src/widget/material/button';
import * as St from 'st';
import { appDisplay, remoteSearch } from 'ui';

const ParentalControlsManager = imports.misc.parentalControlsManager;
const SystemActions = imports.misc.systemActions;

function getTermsForSearchString(searchString: string): string[] {
    searchString = searchString.replace(/^\s+/g, '').replace(/\s+$/g, '');
    if (searchString === '') return [];
    return searchString.split(/\s+/);
}
const SEARCH_PROVIDERS_SCHEMA = 'org.gnome.desktop.search-providers';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

type SearchProvider =
    | appDisplay.AppSearchProvider
    | remoteSearch.RemoteSearchProvider;

@registerGObjectClass
export class SearchResultHeader extends St.Bin {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'SearchResultHeader',
    };
    label: St.Label;
    constructor(text: string) {
        super({
            style_class:
                'subtitle-2 margin margin-top-x2 margin-bottom-x2 text-high-emphasis',
        });

        this.label = new St.Label({
            text: text,
        });
        this.set_child(this.label);
    }
}

@registerGObjectClass
export class SearchResultEntry extends MatButton {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'SearchResultEntry',
        Signals: {
            activate: {
                param_types: [],
                accumulator: 0,
            },
        },
    };
    layout = new St.BoxLayout();
    icon: St.Icon | null;
    textLayout = new St.BoxLayout({
        vertical: true,
        styleClass: 'margin-left-x2 margin-top margin-bottom margin-right-x2',
        y_align: Clutter.ActorAlign.CENTER,
    });
    title: St.Label;
    description: St.Label | null;
    constructor(
        icon: St.Icon | null,
        title: string,
        description?: string,
        _withMenu?: boolean
    ) {
        super({});
        if (icon) {
            this.icon = icon;
            this.icon.set_style('margin: 12px');
            this.layout.add_child(this.icon);
        } else {
            this.icon = null;
        }

        this.layout.add_child(this.textLayout);
        this.title = new St.Label({
            text: title,
        });
        this.textLayout.add_child(this.title);
        if (description) {
            this.description = new St.Label({
                text: description,
                styleClass: 'caption text-medium-emphasis',
                style: 'margin-top:2px',
            });
            this.textLayout.add_child(this.description);
        } else {
            this.description = null;
        }

        this.set_child(this.layout);
        /*         if (withMenu) {
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.menu = new AppDisplay.AppIconMenu(this, St.Side.RIGHT);
        } */
    }

    setSelected(selected: boolean) {
        if (selected) {
            this.add_style_class_name('highlighted');
        } else {
            this.remove_style_class_name('highlighted');
        }
    }
}

@registerGObjectClass
export class SearchResultList extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
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
    text: Text;
    parentalControlsManager;
    providers: SearchProvider[] = [];
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
    allApplicationList: SearchResultEntry[] = [];
    constructor(searchEntry: St.Entry) {
        super({
            style_class: 'search-result-list',
            vertical: true,
        });
        this.searchEntry = searchEntry;

        this.text = this.searchEntry.clutter_text;

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

        this.signalObserver.observe(
            Shell.AppSystem.get_default(),
            'installed-changed',
            () => {
                if (!Object.keys(this.results).length) {
                    this.updateAllApplicationResults();
                }
            }
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

        this.registerProvider(new appDisplay.AppSearchProvider());

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
        this.updateAllApplicationResults();
    }

    get resultEntryList() {
        return this.get_children().filter(
            (actor) => actor instanceof SearchResultEntry
        ) as SearchResultEntry[];
    }

    registerProvider(provider: SearchProvider): void {
        provider.searchInProgress = false;

        // Filter out unwanted providers.
        if (
            provider.isRemoteProvider &&
            !this.parentalControlsManager.shouldShowApp(provider.appInfo)
        )
            return;

        this.providers.push(provider);
    }

    reloadRemoteProviders(): void {
        const remoteProviders = this.providers.filter(
            (p) => p.isRemoteProvider
        );
        remoteProviders.forEach((provider) => {
            this.unregisterProvider(provider);
        });

        remoteSearch.loadRemoteSearchProviders(
            this.searchSettings,
            (providers) => {
                providers.forEach(this.registerProvider.bind(this));
            }
        );
    }

    unregisterProvider(provider: SearchProvider): void {
        const index = this.providers.indexOf(provider);
        this.providers.splice(index, 1);

        if (provider.display) provider.display.destroy();
    }

    onTextChanged(): void {
        const terms = getTermsForSearchString(this.searchEntry.get_text());
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

    private doSearch() {
        this.startingSearch = false;

        const previousResults = this.results;
        this.results = {};
        this.entrySelected = null;
        this.remove_all_children();
        this.providers.forEach((provider) => {
            provider.searchInProgress = true;

            const previousProviderResults = previousResults[provider.id];
            if (this.isSubSearch && previousProviderResults) {
                provider.getSubsearchResultSet(
                    previousProviderResults,
                    this.terms,
                    (results) => {
                        this.gotResults(results, provider);
                    },
                    this.cancellable
                );
            } else {
                provider.getInitialResultSet(
                    this.terms,
                    (results) => {
                        this.gotResults(results, provider);
                    },
                    this.cancellable
                );
            }
        });

        if (!Object.keys(this.results).length) {
            this.updateAllApplicationResults();
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
        //this._updateSearchProgress();

        if (this.searchTimeoutId == 0)
            this.searchTimeoutId = Async.addTimeout(
                GLib.PRIORITY_DEFAULT,
                150,
                this.onSearchTimeout.bind(this)
            );

        //this.emit('terms-changed');
    }

    gotResults(results: string[], provider: SearchProvider) {
        this.results[provider.id] = results;
        this.updateResults(provider, results);
    }

    updateResults(provider: SearchProvider, results: string[]) {
        if (!results.length) return;

        if (provider.isRemoteProvider) {
            this.add_child(new SearchResultHeader(provider.appInfo.get_name()));
        } else {
            this.add_child(new SearchResultHeader(_('Applications')));
        }

        // Note: The remote search provider also provides a description field, but the app search does not
        const onSearchMetas = (
            resMetas: {
                id: string;
                name: string;
                description?: string;
                createIcon: (size: number) => St.Icon;
            }[]
        ) => {
            let moreEntry: SearchResultEntry | null = null;
            //
            const extraResults: SearchResultEntry[] = [];
            if (resMetas.length > 5) {
                const more = (moreEntry = new SearchResultEntry(
                    new St.Icon({
                        icon_size: 32,
                        gicon: Gio.icon_new_for_string(
                            `${Me.path}/assets/icons/chevron-down-symbolic.svg`
                        ),
                    }),
                    ngettext('%d more', '%d more', resMetas.length - 5).format(
                        resMetas.length - 5
                    ),
                    '',
                    provider.id === 'applications'
                ));

                more.connect('primary-action', () => {
                    extraResults.forEach((entry) => {
                        this.insert_child_below(entry, more);
                    });
                    this.remove_child(more);
                    this.selectResult(extraResults[0]);
                });
            }
            let numberOfRes = 0;
            for (const res of resMetas) {
                if (!res.name) return;
                numberOfRes++;

                let icon = res.createIcon(32);
                if (!icon && provider.isRemoteProvider) {
                    icon = new St.Icon({
                        icon_size: 32,
                        gicon: provider.appInfo.get_icon(),
                    });
                }
                const entry = new SearchResultEntry(
                    icon,
                    res.name,
                    // The remote search provider also provides a description field, but the app search does not
                    res.description,
                    provider.id === 'applications'
                );
                entry.connect('primary-action', () => {
                    // It's important that we do this first because it will remove the focus grab that we use.
                    // This has the effect of restoring focus to the actor that was focused when we first grabbed it.
                    // So if we want to focus a newly created window we need to be sure to do it after we close the search view.
                    this.resetAndClose();

                    if (provider.isRemoteProvider) {
                        provider.activateResult(res.id, this.terms);
                    } else {
                        const app = Shell.AppSystem.get_default().lookup_app(
                            res.id
                        );
                        if (app) {
                            Me.msWindowManager.openApp(
                                app,
                                Me.msWorkspaceManager.getActiveMsWorkspace()
                            );
                        } else {
                            SystemActions.getDefault().activateAction(res.id);
                        }
                    }
                });
                if (numberOfRes <= 5) {
                    this.add_child(entry);
                } else {
                    extraResults.push(entry);
                }
            }
            if (moreEntry) {
                this.add_child(moreEntry);
            }
        };

        const resultEntryList = this.resultEntryList;

        if (resultEntryList.length > 0) {
            this.selectResult(resultEntryList[0]);
        }

        if (provider.isRemoteProvider) {
            provider.getResultMetas(results, onSearchMetas, this.cancellable);
        } else {
            provider.getResultMetas(results, onSearchMetas);
        }
    }

    updateAllApplicationResults() {
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

        for (const appInfo of appsInstalled) {
            const icon = new St.Icon({
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
            this.add_child(entry);
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
        this.remove_all_children();
        this.clearSearchTimeout();
        this.startingSearch = false;
        this.updateAllApplicationResults();
    }

    resetAndClose() {
        this.reset();
        Me.layout.toggleOverview();
    }
}

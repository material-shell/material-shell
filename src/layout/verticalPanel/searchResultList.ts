/** Gnome libs imports */
import * as Clutter from 'clutter';
import { Text } from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import * as Shell from 'shell';
import { registerGObjectClass } from 'src/utils/gjs';
import { MatButton } from 'src/widget/material/button';
import * as St from 'st';

const AppDisplay = imports.ui.appDisplay;

const DND = imports.ui.dnd;
const Main = imports.ui.main;
const ShellEntry = imports.ui.shellEntry;
const ParentalControlsManager = imports.misc.parentalControlsManager;
const RemoteSearch = imports.ui.remoteSearch;
const PopupMenu = imports.ui.popupMenu;

function getTermsForSearchString(searchString) {
    searchString = searchString.replace(/^\s+/g, '').replace(/\s+$/g, '');
    if (searchString === '') return [];
    return searchString.split(/\s+/);
}
const SEARCH_PROVIDERS_SCHEMA = 'org.gnome.desktop.search-providers';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class SearchResultHeader extends St.Bin {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'SearchResultHeader',
    };
    label: St.Label;
    constructor(text) {
        super({
            style_class: 'subtitle-2 margin margin-top-x2 margin-bottom-x2',
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
    icon: St.Icon;
    textLayout = new St.BoxLayout({
        vertical: true,
        styleClass: 'margin-left-x2 margin-top margin-bottom margin-right-x2',
        y_align: Clutter.ActorAlign.CENTER,
    });
    title: St.Label;
    description: St.Label;
    constructor(icon, title, description?, withMenu?) {
        super({});
        if (icon) {
            this.icon = icon;
            this.icon.set_style('margin: 12px');
            this.layout.add_child(this.icon);
        }

        this.layout.add_child(this.textLayout);
        this.title = new St.Label({
            text: title,
        });
        this.textLayout.add_child(this.title);
        if (description) {
            this.description = new St.Label({
                text: description,
                styleClass: 'caption',
                style: 'margin-top:2px',
            });
            this.textLayout.add_child(this.description);
        }

        this.set_child(this.layout);
        /*         if (withMenu) {
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.menu = new AppDisplay.AppIconMenu(this, St.Side.RIGHT);
        } */
    }

    setSelected(selected) {
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
    searchEntry: St.Entry;
    text: Text;
    parentalControlsManager;
    providers = [];
    searchSettings;
    terms: string[] = [];
    private searchTimeoutId = 0;
    startingSearch: boolean;
    private results: any = {};
    isSubSearch: boolean;
    highlightRegex: RegExp;
    cancellable = new Gio.Cancellable();
    clearIcon = new St.Icon({
        style_class: 'search-entry-icon',
        icon_name: 'edit-clear-symbolic',
    });
    iconClickedId = 0;
    resMetas: any;
    entrySelected: SearchResultEntry | null = null;
    constructor(searchEntry: St.Entry) {
        super({
            style_class: 'search-result-list',
            vertical: true,
        });
        this.searchEntry = searchEntry;
        ShellEntry.addContextMenu(this.searchEntry);

        this.text = this.searchEntry.clutter_text;
        this.text.connect('text-changed', this.onTextChanged.bind(this));
        this.text.connect('key-press-event', this.onKeyPress.bind(this));
        this.text.connect('key-focus-in', () => {});
        this.text.connect('key-focus-out', () => {});
        this.searchEntry.connect('popup-menu', () => {
            /* if (!this._searchActive) return;

            this._entry.menu.close();
            this._searchResults.popupMenuDefault(); */
        });

        this.parentalControlsManager = ParentalControlsManager.getDefault();
        this.parentalControlsManager.connect(
            'app-filter-changed',
            this.reloadRemoteProviders.bind(this)
        );

        this.searchSettings = new Gio.Settings({
            schema_id: SEARCH_PROVIDERS_SCHEMA,
        });
        this.searchSettings.connect(
            'changed::disabled',
            this.reloadRemoteProviders.bind(this)
        );
        this.searchSettings.connect(
            'changed::enabled',
            this.reloadRemoteProviders.bind(this)
        );
        this.searchSettings.connect(
            'changed::disable-external',
            this.reloadRemoteProviders.bind(this)
        );
        this.searchSettings.connect(
            'changed::sort-order',
            this.reloadRemoteProviders.bind(this)
        );

        this.registerProvider(new AppDisplay.AppSearchProvider());

        const appSystem = Shell.AppSystem.get_default();
        appSystem.connect(
            'installed-changed',
            this.reloadRemoteProviders.bind(this)
        );
        this.reloadRemoteProviders();
    }

    get resultEntryList() {
        return this.get_children().filter(
            (actor) => actor instanceof SearchResultEntry
        ) as SearchResultEntry[];
    }

    registerProvider(provider): void {
        provider.searchInProgress = false;

        // Filter out unwanted providers.
        if (
            provider.appInfo &&
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

        RemoteSearch.loadRemoteSearchProviders(
            this.searchSettings,
            (providers) => {
                providers.forEach(this.registerProvider.bind(this));
            }
        );
    }

    unregisterProvider(provider): void {
        const index = this.providers.indexOf(provider);
        this.providers.splice(index, 1);

        if (provider.display) provider.display.destroy();
    }

    onTextChanged(): void {
        const terms = getTermsForSearchString(this.searchEntry.get_text());

        const searchActive = terms.length > 0;
        this.setTerms(terms);

        if (searchActive) {
            this.searchEntry.set_secondary_icon(this.clearIcon);

            if (this.iconClickedId === 0) {
                this.iconClickedId = this.searchEntry.connect(
                    'secondary-icon-clicked',
                    () => {
                        this.reset();
                    }
                );
            }
        } else {
            if (this.iconClickedId > 0) {
                this.searchEntry.disconnect(this.iconClickedId);
                this.iconClickedId = 0;
            }

            this.searchEntry.set_secondary_icon(null);
            this.searchCancelled();
        }
    }

    onKeyPress(entry, event) {
        const symbol = event.get_key_symbol();
        if (symbol === Clutter.KEY_Escape) {
            this.resetAndClose();

            return Clutter.EVENT_STOP;
        } else {
            let arrowNext, nextDirection;

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
                this.entrySelected.emit('primary-action');
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

        this.clearSearchTimeout();
    }

    private clearSearchTimeout() {
        if (this.searchTimeoutId > 0) {
            GLib.source_remove(this.searchTimeoutId);
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

    setTerms(terms): void {
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
            this.searchTimeoutId = GLib.timeout_add(
                GLib.PRIORITY_DEFAULT,
                150,
                this.onSearchTimeout.bind(this)
            );

        const escapedTerms = this.terms.map((term) =>
            Shell.util_regex_escape(term)
        );
        this.highlightRegex = new RegExp(
            ('(%s)' as any).format(escapedTerms.join('|')),
            'gi'
        );

        //this.emit('terms-changed');
    }

    gotResults(results, provider) {
        this.results[provider.id] = results;
        this.updateResults(provider, results);
    }

    updateResults(provider, results) {
        if (!results.length) return;

        if (provider.isRemoteProvider) {
            this.add_child(new SearchResultHeader(provider.appInfo.get_name()));
        } else {
            this.add_child(new SearchResultHeader(_('Applications')));
        }
        provider.getResultMetas(
            results,
            (resMetas, index) => {
                this.resMetas = resMetas;
                let moreEntry;
                //
                const extraResults = [];
                if (resMetas.length > 5) {
                    moreEntry = new SearchResultEntry(
                        new St.Icon({
                            icon_size: 32,
                            gicon: Gio.icon_new_for_string(
                                `${Me.path}/assets/icons/chevron-down-symbolic.svg`
                            ),
                        }),
                        ngettext(
                            '%d more',
                            '%d more',
                            resMetas.length - 5
                        ).format(resMetas.length - 5),
                        '',
                        provider.id === 'applications'
                    );

                    moreEntry.connect('primary-action', () => {
                        extraResults.forEach((entry) => {
                            this.insert_child_below(entry, moreEntry);
                        });
                        this.remove_child(moreEntry);
                        this.selectResult(extraResults[0]);
                    });
                }
                let numberOfRes = 0;
                for (const res of resMetas) {
                    if (!res.name) return;
                    numberOfRes++;

                    let icon = res.createIcon(32);
                    if (!icon && provider.appInfo) {
                        icon = new St.Icon({
                            icon_size: 32,
                            gicon: provider.appInfo.get_icon(),
                        });
                    }
                    const entry = new SearchResultEntry(
                        icon,
                        res.name,
                        res.description,
                        provider.id === 'applications'
                    );
                    entry.connect('primary-action', () => {
                        if (provider.isRemoteProvider) {
                            provider.activateResult(res.id, this.terms);
                        } else {
                            const app = Shell.AppSystem.get_default().lookup_app(
                                res.id
                            );
                            if (app.can_open_new_window()) {
                                const msWindow = Me.msWindowManager.createNewMsWindow(
                                    app.id,
                                    null,
                                    null,
                                    {
                                        msWorkspace: Me.msWorkspaceManager.getActiveMsWorkspace(),
                                        focus: true,
                                        insert: true,
                                    }
                                );
                                Me.msWindowManager.openAppForMsWindow(msWindow);
                            } else {
                                app.activate();
                            }
                        }
                        this.resetAndClose();
                    });
                    if (numberOfRes <= 5) {
                        this.addResult(entry);
                    } else {
                        extraResults.push(entry);
                    }
                }
                if (moreEntry) {
                    this.addResult(moreEntry);
                }
            },
            this.cancellable
        );

        /* display.updateSearch(results, terms, () => {
            provider.searchInProgress = false;

            this._maybeSetInitialSelection();
            this._updateSearchProgress();
        }); */
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
        const currentIndex = this.resultEntryList.indexOf(this.entrySelected);
        const nextEntry = this.resultEntryList[currentIndex + 1];
        if (nextEntry) {
            this.selectResult(nextEntry);
        }
    }

    selectPrevious() {
        const currentIndex = this.resultEntryList.indexOf(this.entrySelected);
        const previousEntry = this.resultEntryList[currentIndex - 1];
        if (previousEntry) {
            this.selectResult(previousEntry);
        }
    }

    reset() {
        this.searchEntry.text = '';
        this.terms = [];
        this.results = {};
        this.entrySelected = null;
        this.remove_all_children();
        this.clearSearchTimeout();
        this.startingSearch = false;
    }

    resetAndClose() {
        this.reset();
        Me.layout.toggleOverview();
    }
}

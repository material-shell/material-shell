import * as Gio from 'gio';
import * as GObject from 'gobject';
import * as Shell from 'shell';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
import { SystemActions } from './searchProvider/AppSearchProvider';
import { RemoteSearchProvider } from './searchProvider/RemoteSearchProvider';
import {
    Me,
    ResultMeta,
    SearchProvider,
} from './searchProvider/searchProvider';
import { SearchResultEntry } from './SearchResultEntry';
import { SearchResultHeader } from './SearchResultHeader';

@registerGObjectClass
export class ProviderResultList extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'ProviderResultList',
    };
    resultList: ResultMeta[] = [];
    provider: SearchProvider;
    header: SearchResultHeader;
    firstResultEntryList = new St.BoxLayout({ vertical: true });
    restResultEntryList = new St.BoxLayout({ vertical: true });
    moreResultEntry: SearchResultEntry;
    maxResultLength = 5;
    constructor(provider: SearchProvider) {
        super({ vertical: true, visible: false });
        this.provider = provider;
        if (provider instanceof RemoteSearchProvider) {
            this.header = new SearchResultHeader(provider.appInfo.get_name());
        } else {
            this.header = new SearchResultHeader(_('Applications'));
        }

        this.add_child(this.header);
        this.add_child(this.firstResultEntryList);
        this.add_child(this.restResultEntryList);

        this.moreResultEntry = new SearchResultEntry(
            new St.Icon({
                icon_size: 32,
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/chevron-down-symbolic.svg`
                ),
            }),
            '',
            '',
            provider.id === 'applications'
        );
        this.moreResultEntry.visible = false;

        this.moreResultEntry.connect('primary-action', () => {
            this.restResultEntryList.show();
            this.moreResultEntry.hide();
        });

        this.add_child(this.moreResultEntry);
    }

    async updateSearch(newResultList: ResultMeta[], termList: string[]) {
        this.visible = newResultList.length > 0;
        this.moreResultEntry.visible =
            newResultList.length > this.maxResultLength;
        this.restResultEntryList.visible = false;
        this.firstResultEntryList.remove_all_children();
        this.restResultEntryList.remove_all_children();
        for (const resultMeta of newResultList) {
            Me.logFocus(JSON.stringify(resultMeta));
            let icon = resultMeta.createIcon(32);
            if (!icon && this.provider instanceof RemoteSearchProvider) {
                icon = new St.Icon({
                    icon_size: 32,
                    gicon: this.provider.appInfo.get_icon(),
                });
            }
            const entry = new SearchResultEntry(
                icon,
                resultMeta.name,
                resultMeta.description,
                this.provider.id === 'applications'
            );
            entry.connect('primary-action', () => {
                // It's important that we do this first because it will remove the focus grab that we use.
                // This has the effect of restoring focus to the actor that was focused when we first grabbed it.
                // So if we want to focus a newly created window we need to be sure to do it after we close the search view.
                Me.layout.toggleOverview();

                if (this.provider.isRemoteProvider) {
                    this.provider.activateResult(resultMeta.id, termList);
                } else {
                    const app = Shell.AppSystem.get_default().lookup_app(
                        resultMeta.id
                    );
                    if (app) {
                        Me.msWindowManager.openApp(
                            app,
                            Me.msWorkspaceManager.getActiveMsWorkspace()
                        );
                    } else {
                        SystemActions.getDefault().activateAction(
                            resultMeta.id
                        );
                    }
                }
            });

            if (newResultList.length > this.maxResultLength) {
                this.moreResultEntry.title.text = ngettext(
                    '%d more',
                    '%d more',
                    newResultList.length - 5
                ).format(newResultList.length - 5);
            }
            if (
                this.firstResultEntryList.get_children().length <
                this.maxResultLength
            ) {
                this.firstResultEntryList.add_child(entry);
            } else {
                this.restResultEntryList.add_child(entry);
            }
        }
    }
}

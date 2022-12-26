import * as Gio from 'gio';
import * as GObject from 'gobject';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
import {
    ReactiveSearchProvider,
    ResultMeta,
} from './searchProvider/searchProvider';
import { SearchResultEntry } from './SearchResultEntry';
import { SearchResultHeader } from './SearchResultHeader';

const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class ProviderResultList extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'ProviderResultList',
        Signals: {
            activated: {
                param_types: [GObject.TYPE_STRING],
            },
        },
    };
    resultList: ResultMeta[] = [];
    provider: ReactiveSearchProvider;
    header: SearchResultHeader;
    firstResultEntryList = new St.BoxLayout({ vertical: true });
    restResultEntryList = new St.BoxLayout({ vertical: true });
    moreResultEntry: SearchResultEntry;
    maxResultLength = 5;
    onClicked: (id: string) => void;

    constructor(
        provider: ReactiveSearchProvider,
        onClicked: (id: string) => void
    ) {
        super({ vertical: true, visible: false });
        this.provider = provider;
        this.onClicked = onClicked;
        this.header = new SearchResultHeader(provider.title);

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
        this.resultList = newResultList;
        for (const resultMeta of newResultList) {
            let icon = resultMeta.createIcon(32);
            if (!icon) icon = this.provider.createFallbackIcon(32);
            const entry = new SearchResultEntry(
                icon,
                resultMeta.name,
                resultMeta.description,
                this.provider.id === 'applications'
            );
            entry.connect('primary-action', () => {
                this.onClicked(resultMeta.id);
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

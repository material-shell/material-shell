/** Gnome libs imports */
import Clutter from 'gi://Clutter';
import St from 'gi://St';
import * as Util from 'resource:///org/gnome/shell/misc/util.js';
import * as ShellEntry from 'resource:///org/gnome/shell/ui/shellEntry.js';
import { registerGObjectClass } from 'src/utils/gjs';
import { SearchResultList } from './searchResultList';

/** Extension imports */
import { default as Me } from 'src/extension';

@registerGObjectClass
export class ExtendedPanelContent extends St.BoxLayout {
    searchEntry: St.Entry;
    searchEntryBin: St.Bin;
    searchResultList: SearchResultList;
    scrollView = new St.ScrollView({
        x_expand: true,
        hscrollbar_policy: St.PolicyType.NEVER,
        vscrollbar_policy: St.PolicyType.AUTOMATIC,
    });
    constructor() {
        super({
            vertical: true,
            y_expand: true,
            x_expand: true,
            x_align: Clutter.ActorAlign.FILL,
        });

        this.searchEntry = new St.Entry({
            style_class: 'search-entry',
            style: 'margin: 6px 8px',
            /* Translators: this is the text displayed
               in the search entry when no search is
               active; it should not exceed ~30
               characters. */
            hint_text: _('Type to search'),
            track_hover: true,
            can_focus: true,
        });

        this.searchEntry.set_offscreen_redirect(
            Clutter.OffscreenRedirect.ALWAYS
        );
        ShellEntry.addContextMenu(this.searchEntry);

        this.searchEntryBin = new SearchEntryBin({
            child: this.searchEntry,
            x_align: Clutter.ActorAlign.FILL,
            styleClass: 'background-primary',
        });

        this.add_child(this.searchEntryBin);

        this.searchResultList = new SearchResultList(this.searchEntry);
        this.searchResultList.connect('result-selected-changed', (_, res) => {
            Util?.ensureActorVisibleInScrollView(this.scrollView, res);
        });
        this.scrollView.add_child(this.searchResultList);

        this.add_child(this.scrollView);
    }

    override vfunc_get_preferred_width(_forHeight: number): [number, number] {
        const desiredWidth =
            Me.msThemeManager!.getScaledSize(448) -
            Me.msThemeManager!.getPanelSize();
        return [desiredWidth, desiredWidth];
    }
}

@registerGObjectClass
export class SearchEntryBin extends St.Bin {
    constructor(params = {}) {
        super(params);
    }
    override vfunc_get_preferred_height(_for_width: number): [number, number] {
        const height = Math.max(
            Me.msThemeManager!.getScaledSize(48),
            Me.msThemeManager!.getPanelSize()
        );
        return [height, height];
    }
}

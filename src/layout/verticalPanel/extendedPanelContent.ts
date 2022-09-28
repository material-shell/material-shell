/** Gnome libs imports */
import * as Clutter from 'clutter';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
import { main as Main } from 'ui';
import { SearchResultList } from './searchResultList';
const Util = imports.misc.util;
const ShellEntry = imports.ui.shellEntry;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

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
            style_class: 'search-entry margin',
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

        this.searchEntryBin = new St.Bin({
            child: this.searchEntry,
            x_align: Clutter.ActorAlign.FILL,
            styleClass: 'background-primary',
            height: Math.max(
                48,
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex)
            ),
        });

        this.add_child(this.searchEntryBin);

        this.searchResultList = new SearchResultList(this.searchEntry);
        this.searchResultList.connect('result-selected-changed', (_, res) => {
            Util.ensureActorVisibleInScrollView(this.scrollView, res);
        });
        this.scrollView.add_actor(this.searchResultList);

        const panelSizeSignal = Me.msThemeManager.connect(
            'panel-size-changed',
            () => {
                this.searchEntryBin.height = Math.max(
                    48,
                    Me.msThemeManager.getPanelSize(
                        Main.layoutManager.primaryIndex
                    )
                );
                this.queue_relayout();
            }
        );

        this.add_child(this.scrollView);
    }

    override vfunc_get_preferred_width(_forHeight: number): [number, number] {
        const desiredWidth =
            448 -
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex);
        return [desiredWidth, desiredWidth];
    }
}

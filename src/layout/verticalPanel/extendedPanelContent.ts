/** Gnome libs imports */
import * as Clutter from 'clutter';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
import { main as Main } from 'ui';
import { AllApplicationList } from './allApplicationList';
import { SearchResultList } from './searchResultList';
const Util = imports.misc.util;

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

        let allApplicationList = new AllApplicationList(this.searchEntry);

        this.searchResultList = new SearchResultList(this.searchEntry);
        this.searchResultList.connect('result-selected-changed', (_, res) => {
            Util.ensureActorVisibleInScrollView(this.scrollView, res);
        });
        this.searchResultList.connect('result-changed', (_) => {
            if (this.searchResultList.get_children().length > 0) {
                if (allApplicationList.get_parent() == this.scrollView) {
                    this.scrollView.remove_actor(allApplicationList);
                    this.scrollView.add_actor(this.searchResultList);
                }
            } else {
                if (allApplicationList.get_parent() != this.scrollView) {
                    this.scrollView.remove_actor(this.searchResultList);
                    this.scrollView.add_actor(allApplicationList);
                }
            }
        });
        this.scrollView.add_actor(allApplicationList);

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

        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(panelSizeSignal);
        });

        this.add_child(this.scrollView);
    }

    override vfunc_get_preferred_width(_forHeight: number): [number, number] {
        return [
            448 -
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            448 -
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
        ];
    }
}

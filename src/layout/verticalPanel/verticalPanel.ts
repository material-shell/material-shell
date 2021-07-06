/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GObject from 'gobject';
import { MatPanelButton } from 'src/layout/verticalPanel/panelButton';
import { MsStatusArea } from 'src/layout/verticalPanel/statusArea';
import { WorkspaceList } from 'src/layout/verticalPanel/workspaceList';
import { VerticalPanelPositionEnum } from 'src/manager/msThemeManager';
import { registerGObjectClass } from 'src/utils/gjs';
import { MatDivider } from 'src/widget/material/divider';
import * as St from 'st';
import { SearchResultList } from './searchResultList';
const Util = imports.misc.util;

const SearchController = imports.ui.searchController;

const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class PanelContent extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'PanelContent',
        Signals: {
            toggle: {
                param_types: [],
                accumulator: 0,
            },
        },
    };
    topBox: St.BoxLayout;
    workspaceList: WorkspaceList;
    statusArea: MsStatusArea;
    disableConnect: number;
    searchButton;
    buttonIcon: St.Icon;
    constructor() {
        super({
            vertical: true,
            y_expand: true,
        });

        // Top part
        this.topBox = new St.BoxLayout({
            vertical: true,
            y_expand: true,
        });
        this.add_child(this.topBox);

        this.buttonIcon = new St.Icon({
            style_class: 'mat-panel-button-icon',
            icon_size: Me.msThemeManager.getPanelSizeNotScaled() / 2,
        });

        this.searchButton = new MatPanelButton({
            child: this.buttonIcon,
            primary: true,
        });

        this.searchButton.connect('clicked', () => {
            this.emit('toggle');
        });

        this.topBox.add_child(this.searchButton);

        this.workspaceList = new WorkspaceList();
        this.topBox.add_child(this.workspaceList);

        //Bottom part
        this.statusArea = new MsStatusArea();
        this.add_child(this.statusArea);

        Me.msThemeManager.connect('panel-size-changed', () => {
            this.buttonIcon.set_icon_size(
                Me.msThemeManager.getPanelSizeNotScaled() / 2
            );

            this.queue_relayout();
        });

        this.setIcon('search');
    }

    enable() {
        this.statusArea.enable();
    }

    disable() {
        this.statusArea.disable();
    }

    vfunc_get_preferred_width(_forHeight): [number, number] {
        return [
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
        ];
    }

    setIcon(icon: 'search' | 'close') {
        if (icon === 'search') {
            this.buttonIcon.set_gicon(
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/magnify-symbolic.svg`
                )
            );
        }
        if (icon === 'close') {
            this.buttonIcon.set_gicon(
                Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/close-symbolic.svg`
                )
            );
        }
    }
}

@registerGObjectClass
export class SearchContent extends St.BoxLayout {
    searchEntry: St.Entry;
    searchEntryBin: St.Bin;
    searchResultList: SearchResultList;
    disableConnect: number;
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

        /* this.searchController = new SearchController.SearchController(
            this.searchEntry,
            Main.overview.dash.showAppsButton
        );

        this.searchController.connect('notify::search-active', () => {
            Me.logFocus('search changed');
        });

        this.add_child(this.searchController); */
        this.searchResultList = new SearchResultList(this.searchEntry);
        this.searchResultList.connect('result-selected-changed', (_, res) => {
            Me.logFocus('new result', res);
            Util.ensureActorVisibleInScrollView(this.scrollView, res);
        });
        this.scrollView.add_actor(this.searchResultList);

        Me.msThemeManager.connect('panel-size-changed', () => {
            this.searchEntryBin.height = Math.max(
                48,
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex)
            );
            this.queue_relayout();
        });

        this.add_child(this.scrollView);
    }

    vfunc_get_preferred_width(_forHeight): [number, number] {
        return [
            448 -
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
            448 -
                Me.msThemeManager.getPanelSize(Main.layoutManager.primaryIndex),
        ];
    }
}
@registerGObjectClass
export class MsPanel extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsPanel',
    };
    gnomeShellPanel: any;
    searchButton: MatPanelButton;
    panelContent: PanelContent;
    searchContent: SearchContent;
    divider: MatDivider;
    disableConnect: number;
    isExpanded = false;
    constructor() {
        super({
            name: 'msPanel',
            reactive: true,
        });
        this.gnomeShellPanel = Main.panel;
        this.gnomeShellPanel.hide();

        // Top part
        this.panelContent = new PanelContent();
        this.add_child(this.panelContent);
        this.searchContent = new SearchContent();
        this.divider = new MatDivider();
        this.disableConnect = Me.connect('extension-disable', () => {
            Me.logFocus('extension-disable');
            Me.disconnect(this.disableConnect);
            this.disable();
        });

        Me.msThemeManager.connect('panel-size-changed', () => {
            this.queue_relayout();
        });

        this.panelContent.connect('toggle', () => {
            Me.layout.toggleOverview();
        });
    }

    enable() {
        this.gnomeShellPanel.hide();
        this.panelContent.enable();
    }

    disable() {
        this.gnomeShellPanel.show();
        this.panelContent.disable();
    }

    toggle() {
        if (!this.isExpanded) {
            if (!Me.layout.panelsVisible) {
                this.show();
            }
            if (this.searchContent.get_parent() === null) {
                if (
                    Me.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT
                ) {
                    this.insert_child_above(
                        this.searchContent,
                        this.panelContent
                    );
                } else {
                    this.insert_child_below(
                        this.searchContent,
                        this.panelContent
                    );
                }
            }
            if (this.divider.get_parent() === null) {
                if (
                    Me.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT
                ) {
                    this.insert_child_above(this.divider, this.panelContent);
                } else {
                    this.insert_child_below(this.divider, this.panelContent);
                }
            }

            this.width = 448;
            this.translation_x =
                (448 -
                    (Me.layout.panelsVisible
                        ? Me.msThemeManager.getPanelSize(
                              Main.layoutManager.primaryIndex
                          )
                        : 0)) *
                (Me.msThemeManager.verticalPanelPosition ===
                VerticalPanelPositionEnum.LEFT
                    ? -1
                    : 1);

            this.ease({
                translation_x: 0,
                duration: 200,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            });
            this.searchContent.searchEntry.grab_key_focus();
            this.panelContent.setIcon('close');
            this.isExpanded = true;
        } else {
            this.isExpanded = false;
            this.panelContent.setIcon('search');

            this.ease({
                translation_x:
                    (448 -
                        (Me.layout.panelsVisible
                            ? Me.msThemeManager.getPanelSize(
                                  Main.layoutManager.primaryIndex
                              )
                            : 0)) *
                    (Me.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT
                        ? -1
                        : 1),
                duration: 200,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.remove_child(this.searchContent);
                    this.remove_child(this.divider);
                    this.width = Me.msThemeManager.getPanelSize(
                        Main.layoutManager.primaryIndex
                    );
                    this.translation_x = 0;
                    if (!Me.layout.panelsVisible) {
                        this.hide();
                    }
                    this.searchContent.searchResultList.reset();
                },
            });
        }
    }

    vfunc_get_preferred_height(_forWidth): [number, number] {
        return [
            Main.layoutManager.primaryMonitor.height,
            Main.layoutManager.primaryMonitor.height,
        ];
    }
}

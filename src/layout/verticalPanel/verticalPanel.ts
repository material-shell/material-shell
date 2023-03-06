/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GObject from 'gobject';
import { MatPanelButton } from 'src/layout/verticalPanel/panelButton';
import { MsStatusArea } from 'src/layout/verticalPanel/statusArea';
import { WorkspaceList } from 'src/layout/verticalPanel/workspaceList';
import {
    msThemeSignalEnum,
    VerticalPanelPositionEnum,
} from 'src/manager/msThemeManager';
import { assert } from 'src/utils/assert';
import { registerGObjectClass } from 'src/utils/gjs';
import { SignalObserver } from 'src/utils/signal';
import { MatDivider } from 'src/widget/material/divider';
import * as St from 'st';
import { main as Main, panel } from 'ui';
import { ExtendedPanelContent } from './extendedPanelContent';
const Util = imports.misc.util;

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
    searchButton: MatPanelButton;
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

        this.searchButton = new SearchButton({
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

        const panelSizeSignal = Me.msThemeManager.connect(
            'panel-size-changed',
            () => {
                this.buttonIcon.set_icon_size(
                    Me.msThemeManager.getPanelSizeNotScaled() / 2
                );

                this.queue_relayout();
            }
        );

        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(panelSizeSignal);
        });

        this.setIcon('search');
    }

    enable() {
        this.statusArea.enable();
    }

    disable() {
        this.statusArea.disable();
    }

    override vfunc_get_preferred_width(_for_height: number): [number, number] {
        const panelSize = Me.msThemeManager.getPanelSize();
        return [panelSize, panelSize];
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
export class MsPanel extends St.BoxLayout {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsPanel',
    };
    gnomeShellPanel: panel.Panel;
    panelContent: PanelContent;
    extendedPanelContent: ExtendedPanelContent;
    divider: MatDivider;
    disableConnect: number;
    isExpanded = false;
    signalObserver = new SignalObserver();

    constructor() {
        super({
            name: 'msPanel',
            reactive: true,
        });
        this.gnomeShellPanel = Main.panel;
        this.gnomeShellPanel.hide();

        this.updateStyle();
        this.signalObserver.observe(
            Me.msThemeManager,
            msThemeSignalEnum.VerticalPanelPositionChanged,
            this.updateStyle.bind(this)
        );
        // Top part
        this.panelContent = new PanelContent();
        this.add_child(this.panelContent);
        this.extendedPanelContent = new ExtendedPanelContent();
        this.divider = new MatDivider();
        this.disableConnect = Me.connect('extension-disable', () => {
            Me.logFocus('extension-disable');
            Me.disconnect(this.disableConnect);
            this.disable();
        });

        this.signalObserver.observe(
            Me.msThemeManager,
            msThemeSignalEnum.PanelSizeChanged,
            () => {
                this.queue_relayout();
            }
        );

        this.connect('destroy', () => {
            this.signalObserver.clear();
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

    updateStyle() {
        this.remove_style_class_name('position-left');
        this.remove_style_class_name('position-right');
        switch (Me.msThemeManager.verticalPanelPosition) {
            case VerticalPanelPositionEnum.LEFT: {
                this.add_style_class_name('position-left');
                break;
            }
            case VerticalPanelPositionEnum.RIGHT: {
                this.add_style_class_name('position-right');
            }
        }
    }

    override vfunc_get_preferred_width(_for_height: number): [number, number] {
        const panelSize = Me.msThemeManager.getPanelSize();
        return [panelSize, panelSize];
    }

    toggle() {
        if (!this.isExpanded) {
            if (!Me.layout.panelsVisible) {
                this.show();
            }
            if (this.extendedPanelContent.get_parent() === null) {
                if (
                    Me.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT
                ) {
                    this.insert_child_below(
                        this.extendedPanelContent,
                        this.panelContent
                    );
                } else {
                    this.insert_child_above(
                        this.extendedPanelContent,
                        this.panelContent
                    );
                }
            }
            if (this.divider.get_parent() === null) {
                if (
                    Me.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT
                ) {
                    this.insert_child_below(this.divider, this.panelContent);
                } else {
                    this.insert_child_above(this.divider, this.panelContent);
                }
            }

            this.width = Me.msThemeManager.getScaledSize(448);
            this.translation_x =
                (Me.msThemeManager.getScaledSize(448) -
                    (Me.layout.panelsVisible
                        ? Me.msThemeManager.getPanelSize()
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
            this.extendedPanelContent.searchEntry.grab_key_focus();
            this.panelContent.setIcon('close');
            this.isExpanded = true;
            this.add_style_class_name('shadow');
        } else {
            this.isExpanded = false;
            this.panelContent.setIcon('search');
            this.remove_style_class_name('shadow');

            this.ease({
                translation_x:
                    (Me.msThemeManager.getScaledSize(448) -
                        (Me.layout.panelsVisible
                            ? Me.msThemeManager.getPanelSize()
                            : 0)) *
                    (Me.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT
                        ? -1
                        : 1),
                duration: 200,
                mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.remove_child(this.extendedPanelContent);
                    this.remove_child(this.divider);
                    this.width = -1;
                    this.translation_x = 0;
                    if (!Me.layout.panelsVisible) {
                        this.hide();
                    }
                    this.extendedPanelContent.searchResultList.reset();
                },
            });
        }
    }

    override vfunc_get_preferred_height(_forWidth: number): [number, number] {
        const monitor = Main.layoutManager.primaryMonitor;
        assert(monitor !== null, 'found no primary monitor');
        return [monitor.height, monitor.height];
    }
}

@registerGObjectClass
export class SearchButton extends MatPanelButton {
    constructor(params = {}) {
        super(params);
    }
    override vfunc_get_preferred_height(_for_width: number): [number, number] {
        const height = Math.max(
            Me.msThemeManager.getScaledSize(48),
            Me.msThemeManager.getPanelSize()
        );
        return [height, height];
    }
}

import * as Clutter from 'clutter';
import { Actor } from 'clutter';
import * as Gio from 'gio';
import * as Meta from 'meta';
import {
    KeyBindingAction,
    KeyBindingFlags,
    KeyHandlerFunc,
    ModalOptions,
    Rectangle,
    WindowType,
    Workspace,
} from 'meta';
import { ActionMode } from 'shell';
import { IntroducedInGnome, RemovedInGnome } from 'src/utils/shellVersionMatch';
import * as St from 'st';
import { Widget } from 'st';
import { GObject } from './mod';

declare module 'meta' {
    // Expose some additional "private" fields of the Workspace class
    interface Workspace {
        _lastRemovedWindow: Meta.Window;
        _keepAliveId: number | undefined;
    }
}

declare module 'clutter' {
    // Seems to be part of gnome's version of clutter, but I can't find it in the offical docs or in the gir files.
    class Grab {
        // Necessary to disallow weird assignments. If this is not here typescript allows assigning e.g. booleans to fields of type 'Grab', which is weird.
        private _grab: 'symbol';
    }
}

declare module 'ui' {
    export namespace messageTray {
        interface NotificationParams {
            gicon?: Gio.Icon;
        }

        class Notification {
            title: string;
            content: string;
            bannerBodyText: string;
            bannerBodyMarkup?: boolean;

            constructor(
                source: Source,
                title: string,
                text: string,
                params: NotificationParams
            );
            activate(): void;
        }

        class Source {
            constructor(name: string);
            getIcon(): Gio.Icon;
            showNotification(notification: Notification): void;
        }

        class MessageTray extends Widget {
            add(source: any): void;
        }
    }

    export namespace Overview {}

    export namespace layout {
        const STARTUP_ANIMATION_TIME: number;

        export class Monitor {
            readonly index: number;
            readonly x: number;
            readonly y: number;
            readonly width: number;
            readonly height: number;
            readonly geometry_scale: any;
        }

        class MonitorConstraint extends Clutter.Constraint {
            constructor(
                props: Partial<{
                    primary: boolean;
                    workArea: boolean;
                    index: number;
                }>
            );
            get primary(): boolean;
            set primary(v: boolean);
            get workArea(): boolean;
            set workArea(v: boolean);
            get index(): number;
            set index(v: number);
        }

        export class UiActor extends St.Widget {}

        export class LayoutManager extends GObject.Object {
            monitors: Monitor[];
            /// The primary monitor. Can be null if there are no monitors.
            primaryMonitor: Monitor | null;
            get currentMonitor(): Monitor;
            get keyboardMonitor(): Monitor;
            // Note: can be -1
            get focusIndex(): number;
            get focusMonitor(): Monitor | null;
            primaryIndex: number;
            hotCorners: any[];
            _startingUp: boolean;
            overviewGroup: St.Widget;

            uiGroup: UiActor;

            removeChrome(actor: Actor): void;
            addChrome(actor: Actor): void;
            _findActor(actor: Actor): number;
            _trackActor(
                actor: Actor,
                params: {
                    trackFullscreen?: boolean;
                    affectsStruts?: boolean;
                    affectsInputRegion?: boolean;
                }
            ): void;
            _untrackActor(actor: Actor): void;
            getWorkAreaForMonitor(monitorIndex: number): Rectangle;
            findMonitorForActor(actor: Actor): Monitor | null;
            showOverview(): void;
        }
    }

    type popModalPre42 = (actor: Clutter.Actor, timestamp?: number) => void;
    type popModalPost42 = (grab: Clutter.Grab, timestamp?: number) => void;

    type findModalPre42 = (actor: Actor) => number;
    type findModalPost42 = (grab: Clutter.Grab) => number;

    export const main: {
        layoutManager: layout.LayoutManager;
        wm: windowManager.WindowManager;
        sessionMode: sessionMode.SessionMode;
        overview: overview.Overview;
        panel: panel.Panel;
        messageTray: messageTray.MessageTray;
        uiGroup: layout.UiActor;
        extensionManager: extensionSystem.ExtensionManager;
        pushModal(
            actor: Actor,
            options?: {
                timestamp?: number;
                options?: ModalOptions;
                actionMode?: ActionMode;
            }
        ):
            | (Clutter.Grab &
                  IntroducedInGnome<'42.0'> &
                  RemovedInGnome<'never'>)
            | (boolean & IntroducedInGnome<'ancient'> & RemovedInGnome<'42.0'>);
        popModal:
            | (popModalPost42 &
                  IntroducedInGnome<'42.0'> &
                  RemovedInGnome<'never'>)
            | (popModalPre42 &
                  IntroducedInGnome<'ancient'> &
                  RemovedInGnome<'42.0'>);
        _findModal:
            | (findModalPost42 &
                  IntroducedInGnome<'42.0'> &
                  RemovedInGnome<'never'>)
            | (findModalPre42 &
                  IntroducedInGnome<'ancient'> &
                  RemovedInGnome<'42.0'>);
        loadTheme(): void;
        reloadThemeResource(): void;
    };

    export namespace extensionSystem {
        class ExtensionManager {
            lookup(uuid: string):
                | {
                      uuid: string;
                      stateObj: extension.Extension;
                      path: string;
                      metadata: {
                          'settings-schema': string;
                      };
                  }
                | undefined;
            disableExtension(uuid: string): boolean;
        }
    }

    export namespace extension {
        class Extension {
            enable(): void;
            disable(): void;
        }
    }

    export namespace panel {
        let PANEL_ICON_SIZE: number;

        class AggregateMenu {}

        class Panel extends St.Widget {
            _leftBox: St.BoxLayout;
            _centerBox: St.BoxLayout;
            _rightBox: St.BoxLayout;
            menuManager: popupMenu.PopupMenuManager;
            statusArea: {
                // TODO: Make all optional?
                activities: any; // ActivitiesButton,
                aggregateMenu: any; // AggregateMenu,
                appMenu: any; // AppMenuButton,
                dateMenu: dateMenu.DateMenuButton;
                a11y: any; // imports.ui.status.accessibility.ATIndicator,
                keyboard: any; // imports.ui.status.keyboard.InputSourceIndicator,
                dwellClick: any; // imports.ui.status.dwellClick.DwellClickIndicator,
                screenRecording: any; // imports.ui.status.remoteAccess.ScreenRecordingIndicator,
            };
        }
    }

    export namespace dateMenu {
        class DateMenuButton extends panelMenu.Button {
            _clockDisplay: St.Label;
            _indicator: MessagesIndicator;
        }

        class MessagesIndicator extends St.Icon {}
    }

    export namespace panelMenu {
        class ButtonBox extends St.Widget {}

        class Button extends ButtonBox {}
    }

    export namespace dialog {
        class Dialog extends St.Widget {}
    }

    export namespace popupMenu {
        class PopupMenuManager {
            constructor(owner: any, params?: any);
            _menus: (
                | (PopupMenu &
                      IntroducedInGnome<'42.0'> &
                      RemovedInGnome<'never'>)
                | ({ menu: PopupMenu } & IntroducedInGnome<'ancient'> &
                      RemovedInGnome<'42.0'>)
            )[];
            addMenu(menu: PopupMenu, position?: number): void;
            removeMenu(menu: PopupMenu): void;
        }

        interface PopupBaseMenuItemParams {
            reactive?: boolean;
            activate?: boolean;
            hover?: boolean;
            style_class?: string | null;
            can_focus?: boolean;
        }

        class PopupBaseMenuItem extends St.BoxLayout {
            _icon?: St.Icon;
            _parent: PopupMenuBase | null;
            toggle(): void;
            activate(event: Clutter.Event): void;
        }

        class PopupSeparatorMenuItem extends PopupBaseMenuItem {
            constructor(text?: string);
        }

        class PopupImageMenuItem extends PopupBaseMenuItem {
            label: St.Label;
            _icon: St.Icon;
            constructor(
                text: string,
                icon: Gio.Icon | string,
                params?: PopupBaseMenuItemParams
            );
        }

        class PopupSubMenuMenuItem extends PopupBaseMenuItem {
            constructor(text: string, wantIcon?: boolean);
            menu: PopupSubMenu;
            label: St.Label;
        }

        class PopupSwitchMenuItem extends PopupBaseMenuItem {
            _statusBin: St.Bin;
            get state(): boolean;
            constructor(
                text: string,
                active: boolean,
                params?: PopupBaseMenuItemParams
            );
        }

        class PopupMenuBase {
            actor: St.Widget;
            sourceActor: Clutter.Actor;
            toggle(): void;
            destroy(): void;
            removeAll(): void;
            addMenuItem(
                menuItem:
                    | PopupMenuSection
                    | PopupSubMenuMenuItem
                    | PopupSeparatorMenuItem
                    | PopupBaseMenuItem,
                position?: number
            ): void;
            addAction(
                title: string,
                callback: (event: any) => void,
                icon?: Gio.IconPrototype
            ): PopupBaseMenuItem;
            _getMenuItems(): (PopupBaseMenuItem | PopupMenuSection)[];
            get numMenuItems(): number;
        }

        class PopupMenuSection extends PopupMenuBase {}

        class PopupSubMenu extends PopupMenuBase {}

        class PopupMenu extends PopupMenuBase {
            constructor(
                sourceActor: Actor,
                arrowAlignment: number,
                arrowSide: St.Side
            );
            menu: PopupMenu | undefined;
            _boxPointer: boxPointer.BoxPointer;
            close(): void;
        }
    }

    export namespace boxPointer {
        class BoxPointer extends St.Widget {
            _calculateArrowSide(arrowSide: St.Side): St.Side;
        }
    }

    export namespace appDisplay {
        class BaseAppView extends St.Widget {}
        class AppDisplay extends BaseAppView {
            constructor();
        }

        interface SearchProvider {
            isRemoteProvider: boolean;
            id: string;
            canLaunchSearch: boolean;
            searchInProgress?: boolean;
            display: search.SearchResult | null | undefined;

            getInitialResultSet(
                terms: string[],
                callback: (results: string[]) => void,
                _cancellable: Gio.Cancellable
            ): void;
            getSubsearchResultSet(
                previousResults: string[],
                terms: string[],
                callback: (results: string[]) => void,
                _cancellable: Gio.Cancellable
            ): void;
            activateResult(id: string, terms: string[]): void;
            getResultMetas(
                identifiers: string[],
                callback: (
                    metas: {
                        id: string;
                        name: string;
                        createIcon: (size: number) => St.Icon;
                    }[]
                ) => void
            ): void;
        }

        class AppIcon extends GObject.Object {}

        class AppSearchProvider implements SearchProvider {
            isRemoteProvider: false;
            id: string;
            canLaunchSearch: boolean;
            searchInProgress?: boolean;
            display: search.SearchResult | null | undefined;

            getInitialResultSet(
                terms: string[],
                callback: (results: string[]) => void,
                _cancellable: Gio.Cancellable
            ): void;
            getSubsearchResultSet(
                previousResults: string[],
                terms: string[],
                callback: (results: string[]) => void,
                _cancellable: Gio.Cancellable
            ): void;
            activateResult(id: string, terms: string[]): void;
            getResultMetas(
                identifiers: string[],
                callback: (
                    metas: {
                        id: string;
                        name: string;
                        createIcon: (size: number) => St.Icon;
                    }[]
                ) => void
            ): void;
        }
    }

    export namespace search {
        class SearchResult extends St.Button {}
    }

    export namespace remoteSearch {
        class RemoteSearchProvider implements appDisplay.SearchProvider {
            isRemoteProvider: true;
            id: string;
            canLaunchSearch: boolean;
            searchInProgress?: boolean;
            display: search.SearchResult | null | undefined;

            getInitialResultSet(
                terms: string[],
                callback: (results: string[]) => void,
                _cancellable: Gio.Cancellable
            ): void;
            getSubsearchResultSet(
                previousResults: string[],
                terms: string[],
                callback: (results: string[]) => void,
                _cancellable: Gio.Cancellable
            ): void;
            activateResult(id: string, terms: string[]): void;
            getResultMetas(
                identifiers: string[],
                callback: (
                    metas: {
                        id: string;
                        name: string;
                        description: string;
                        createIcon: (size: number) => St.Icon;
                    }[]
                ) => void,
                cancellable?: Gio.Cancellable
            ): void;

            appInfo: Gio.DesktopAppInfo;
        }

        function loadRemoteSearchProviders(
            searchSettings: Gio.Settings,
            callback: (providers: remoteSearch.RemoteSearchProvider[]) => void
        ): void;
    }

    export namespace sessionMode {
        class SessionMode {
            pushMode(mode: string): void;
            popMode(mode: string): void;
            switchMode(mode: string): void;
            get currentMode(): string;
        }
    }

    export namespace overview {
        class OverviewActor extends St.BoxLayout {
            _delegate: any;
        }

        class ShellInfo {
            constructor();
        }

        class Overview {
            _initCalled: boolean;
            _visible: boolean;
            _shellInfo: ShellInfo;
            _swipeTracker: swipeTracker.SwipeTracker;
            isDummy: boolean;
            _overview: OverviewActor;
            init(): void;
            toggle(): void;
            _relayout(): void;
            _gestureBegin(tracker: swipeTracker.SwipeTracker): void;
            _gestureUpdate(
                tracker: swipeTracker.SwipeTracker,
                progress: number
            ): void;
            _gestureEnd(
                tracker: swipeTracker.SwipeTracker,
                duration: number,
                endProgress: number
            ): void;
            get visible(): boolean;
        }
    }

    export namespace swipeTracker {
        class SwipeTracker extends GObject.Object {
            orientation: Clutter.Orientation;
            constructor(
                actor: Actor,
                orientation: Clutter.Orientation,
                allowedModes: ActionMode,
                params: { allowDrag: boolean; allowScroll: boolean }
            );
        }
    }

    export namespace overviewControls {
        export enum ControlsState {
            HIDDEN = 0,
            WINDOW_PICKER = 1,
            APP_GRID = 2,
        }
    }

    export namespace windowManager {
        export const SHELL_KEYBINDINGS_SCHEMA: string;

        export class WindowManager {
            _workspaceTracker: WorkspaceTracker;
            _shouldAnimate(actor: Actor, types: WindowType[]): void;
            removeKeybinding(name: string): void;
            addKeybinding(
                name: string,
                settings: Gio.Settings,
                flags: KeyBindingFlags,
                modes: ActionMode,
                handler: KeyHandlerFunc
            ): number | KeyBindingAction.NONE;
        }

        export class WorkspaceTracker {
            _workspaces: Workspace[];
            _checkWorkspacesId: number;
            _queueCheckWorkspaces(): void;
            _checkWorkspaces(): void;
        }
    }

    export namespace searchController {
        class SearchController extends St.Widget {
            constructor(searchEntry: St.Entry, showAppsButton: St.Button);
            prepareToEnterOverview(): void;
            get searchActive(): boolean;
            visible: boolean;
        }
    }

    export namespace dash {
        class Dash extends St.Widget {
            constructor();

            showAppsButton: St.Button;
        }
    }
}

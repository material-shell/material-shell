import type Clutter from '../../gir-generated/clutter-13.js';
import type Gio from '../../gir-generated/gio-2.0.js';
import type GObject from '../../gir-generated/gobject-2.0.js';
import type Meta from '../../gir-generated/meta-13.js';
import type Pango from '../../gir-generated/pango-1.0.js';
import type Shell from '../../gir-generated/shell-13.js';
import type St from '../../gir-generated/st-13.js';

import * as MessageTray from 'resource:///org/gnome/shell/ui/messageTray.js';
import * as Panel from 'resource:///org/gnome/shell/ui/panel.js';

import {
    IntroducedInGnome,
    RemovedInGnome,
} from '../../../src/utils/shellVersionMatch';
import { Extension } from '../extensions/extension.js';
import { WindowManager } from './windowManager.js';

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
        dismiss(): void;
    }

    interface ClickAction {
        vfunc_handle_event(event: Clutter.Event): boolean;
    }
}

interface NotificationParams {
    gicon?: Gio.Icon;
}

export class Notification {
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

export class Source {
    constructor(name: string);
    getIcon(): Gio.Icon;
    showNotification(notification: Notification): void;
}

export namespace Overview {}

export const STARTUP_ANIMATION_TIME: number;

export class Monitor {
    readonly index: number;
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly geometry_scale: any;
}

export class MonitorConstraint extends Clutter.Constraint {
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

    removeChrome(actor: Clutter.Actor): void;
    addChrome(actor: Clutter.Actor): void;
    _findActor(actor: Clutter.Actor): number;
    _trackActor(
        actor: Clutter.Actor,
        params: {
            trackFullscreen?: boolean;
            affectsStruts?: boolean;
            affectsInputRegion?: boolean;
        }
    ): void;
    _untrackActor(actor: Clutter.Actor): void;
    getWorkAreaForMonitor(monitorIndex: number): Pango.Rectangle;
    findMonitorForActor(actor: Clutter.Actor): Monitor | null;
    showOverview(): void;
}

type popModalPre42 = (actor: Clutter.Actor, timestamp?: number) => void;
type popModalPost42 = (grab: Clutter.Grab, timestamp?: number) => void;

type findModalPre42 = (actor: Clutter.Actor) => number;
type findModalPost42 = (grab: Clutter.Grab) => number;

export const modalActorFocusStack: {
    actor: Clutter.Actor;
    grab: Clutter.Grab;
    destroyId: number;
    prevFocus: Clutter.Actor;
    prevFocusDestroyId: number;
    actionMode: Shell.ActionMode;
}[];
export const layoutManager: LayoutManager;
export const wm: WindowManager;
export const sessionMode: SessionMode;
export const overview: Overview;
export const messageTray: MessageTray.MessageTray;
export const uiGroup: UiActor;
export const extensionManager: ExtensionManager;
export const panel: Panel.Panel;

export function pushModal(
    actor: Clutter.Actor,
    options?: {
        timestamp?: number;
        options?: any;
        actionMode?: Shell.ActionMode;
    }
):
    | (Clutter.Grab & IntroducedInGnome<'42.0'> & RemovedInGnome<'never'>)
    | (boolean & IntroducedInGnome<'ancient'> & RemovedInGnome<'42.0'>);
export function popModal(grab: any): void;
export function _findModal():
    | (findModalPost42 & IntroducedInGnome<'42.0'> & RemovedInGnome<'never'>)
    | (findModalPre42 & IntroducedInGnome<'ancient'> & RemovedInGnome<'42.0'>);

export function loadTheme(): void;
export function reloadThemeResource(): void;

export class ExtensionManager {
    _callExtensionEnable: any;

    lookup(uuid: string):
        | {
              uuid: string;
              stateObj: Extension;
              path: string;
              metadata: {
                  'settings-schema': string;
              };
          }
        | undefined;
    disableExtension(uuid: string): boolean;
}

export class BoxPointer extends St.Widget {
    _calculateArrowSide(arrowSide: St.Side): St.Side;
}

export class SessionMode {
    isLocked: boolean;
    pushMode(mode: string): void;
    popMode(mode: string): void;
    switchMode(mode: string): void;
    get currentMode(): string;
}

export class OverviewActor extends St.BoxLayout {
    _delegate: any;
}

export class ShellInfo {
    constructor();
}

export class Overview {
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
    _gestureUpdate(tracker: swipeTracker.SwipeTracker, progress: number): void;
    _gestureEnd(
        tracker: swipeTracker.SwipeTracker,
        duration: number,
        endProgress: number
    ): void;
    get visible(): boolean;
}

export namespace swipeTracker {
    class SwipeTracker extends GObject.Object {
        orientation: Clutter.Orientation;
        constructor(
            actor: Clutter.Actor,
            orientation: Clutter.Orientation,
            allowedModes: Shell.ActionMode,
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

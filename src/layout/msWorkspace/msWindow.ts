const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import { main as Main } from 'ui';
import * as Clutter from 'clutter';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import * as Meta from 'meta';
import {
    MetaWindowActorWithMsProperties,
    MetaWindowWithMsProperties,
} from 'src/manager/msWindowManager';
import { Rectangular } from 'src/types/mod';
import { Async, AsyncDebounce } from 'src/utils/async';
/** Extension imports */
import {
    Allocate,
    AllocatePreferredSize,
    SetAllocation,
} from 'src/utils/compatibility';
import { registerGObjectClass } from 'src/utils/gjs';
import * as WindowUtils from 'src/utils/windows';
import { AppPlaceholder } from 'src/widget/appPlaceholder';
import * as St from 'st';
import { MsWorkspace } from './msWorkspace';
import { PrimaryBorderEffect } from './tilingLayouts/baseResizeableTiling';
import { App } from 'shell';
import { assert, assertNotNull } from 'src/utils/assert';
import { set_style_class } from 'src/utils/styling_utils';
import { throttle } from 'src/utils';
import { logAsyncException } from 'src/utils/log';

const isWayland = GLib.getenv('XDG_SESSION_TYPE').toLowerCase() === 'wayland';

export let isMsWindow = (obj: any): obj is MsWindow => {
    return obj instanceof MsWindow;
};

export function buildMetaWindowIdentifier(metaWindow: Meta.Window) {
    return `${metaWindow.get_wm_class_instance()}-${metaWindow.get_pid()}-${metaWindow.get_stable_sequence()}`;
}

interface Dialog {
    metaWindow: MetaWindowWithMsProperties;
    clone: Clutter.Clone;
}

export interface MsWindowMatchingInfo {
    appId: string;
    /** Window title */
    title: string | undefined,
    pid: number | undefined,
    wmClass: string | undefined,
    /** Meta windows have a unique integer associated with them, this can be used to differentiate otherwise identical windows */
    stableSeq: number | undefined,
}
export interface MsWindowState {
    appId: string;
    matchingInfo: MsWindowMatchingInfo | undefined,
    metaWindowIdentifier: string | null;
    persistent: boolean | undefined;
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface MsWindowConstructProps {
    app: App;
    persistent?: boolean;
    initialAllocation?: Rectangular;
    msWorkspace: MsWorkspace;
    lifecycleState: MsWindowLifecycleState,
}

type MsWindowLifecycleState = {
    /** An MsWindow displaying an app with optional dialogs, or in rare cases only dialogs */
    type: "window",
    /** The main window. Note that this can be null if a dialog was opened and then the main window closed */
    metaWindow: MetaWindowWithMsProperties | null,
    metaWindowSignals: number[],
    dialogs: Dialog[],
    /** Original matching info from when the window was associated.
     * This does not necessarily perfectly match the current window.
     * It is used to allow swapping window association for a small duration after an application has started in case new information becomes available.
     * For example window titles are often updated if the application loads a document, which it might do automatically on startup.
     */
    matchingInfo: MsWindowMatchingInfo,
    /** Time when the meta window was associated with this MsWindow */
    matchedAtTime: Date,
} | {
    /** An MsWindow showing a placeholder for a particular app */
    type: "app-placeholder",
    /** Desired properties of windows to be assigned to this MsWindow.
     * This is in particular used when restoring from a persisted state.
     * It allows meta windows to be associated with the correct MsWindows when restoring.
     *
     * These are not hard constraints, they only come into play if there are multiple alternatives
     * for how meta windows could be associated with MsWindows.
     */
    matchingInfo: MsWindowMatchingInfo,
    /** Set when an app has been launched and this window is expecting to be associated to that app */
    waitingForAppSince: Date | undefined,
} | {
    /** An MsWindow which will be destroyed soon unless another window or dialog opens */
    type: "waiting-for-destroy",
} | {
    /** An MsWindow in the process of getting destroyed */
    type: "destroying",
} | {
    /** A destroyed MsWindow. This cannot be used for anything anymore. */
    type: "destroyed",
}

@registerGObjectClass
export class MsWindow extends Clutter.Actor {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsWindow',
        Signals: {
            title_changed: {
                param_types: [GObject.TYPE_STRING],
                accumulator: 0,
            },
            dragged_changed: {
                param_types: [GObject.TYPE_BOOLEAN],
                accumulator: 0,
            },
            request_new_meta_window: {
                param_types: [],
                accumulator: 0,
            },
        },
    };

    lifecycleState: MsWindowLifecycleState

    public app: App;
    _persistent: boolean | undefined;
    windowClone: Clutter.Clone;
    placeholder: AppPlaceholder;
    destroyId: number;
    msContent: MsWindowContent;
    msWorkspace: MsWorkspace;
    focusEffects?: {
        dimmer?: Clutter.BrightnessContrastEffect;
        border?: PrimaryBorderEffect;
    };
    updateMetaWindowPositionAndSizeThrottled: ()=>void;

    constructor({
        app,
        persistent,
        initialAllocation,
        msWorkspace,
        lifecycleState
    }: MsWindowConstructProps) {
        super({
            reactive: true,
            x: initialAllocation ? initialAllocation.x || 0 : 0,
            y: initialAllocation ? initialAllocation.y || 0 : 0,
            width: initialAllocation ? initialAllocation.width || 0 : 0,
            height: initialAllocation ? initialAllocation.height || 0 : 0,
        });

        this.lifecycleState = lifecycleState;
        this.app = app;
        this._persistent = persistent;
        this.msWorkspace = msWorkspace;
        this.updateMetaWindowPositionAndSizeThrottled = throttle(() => this.updateMetaWindowPositionAndSizeInternal(), 16);

        this.windowClone = new Clutter.Clone();
        this.placeholder = new AppPlaceholder(this.app);
        this.placeholder.connect('activated', (_) => {
            this.emit('request-new-meta-window');
        });
        this.destroyId = this.connect('destroy', this._onDestroy.bind(this));
        this.connect('parent-set', () => {
            this.msContent.style_changed();
            this.updateMetaWindowVisibility();
        });
        this.connect('notify::visible', () => {
            this.updateMetaWindowVisibility();
        });
        this.msContent = new MsWindowContent({
            placeholder: this.placeholder,
            clone: this.windowClone,
        });
        this.add_child(this.msContent);

        this.setMsWorkspace(msWorkspace);
    }

    get state(): MsWindowState {
        const metaWindow = this.metaWindow;
        let matchingInfo: MsWindowMatchingInfo;
        switch(this.lifecycleState.type) {
            case 'app-placeholder':
                matchingInfo = this.lifecycleState.matchingInfo;
                break;
            case 'window':
                matchingInfo = {
                    appId: this.app.id,
                    title: this.lifecycleState.metaWindow?.title,
                    pid: this.lifecycleState.metaWindow?.get_pid(),
                    wmClass: this.lifecycleState.metaWindow?.get_wm_class_instance(),
                    stableSeq: this.lifecycleState.metaWindow?.get_stable_sequence(),
                }
                break;
            default:
                matchingInfo = {
                    appId: this.app.id,
                    title: undefined,
                    pid: undefined,
                    wmClass: undefined,
                    stableSeq: undefined,
                }
        }

        return {
            appId: this.app.id,
            // For compatibility we save a meta window identifier string.
            // This is useful if the user decides to downgrade material-shell to a previous version.
            metaWindowIdentifier: metaWindow !== null ? buildMetaWindowIdentifier(metaWindow) : null,
            matchingInfo: matchingInfo,
            persistent: this._persistent,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        };
    }

    get metaWindow(): MetaWindowWithMsProperties | null {
        const state = this.lifecycleState;
        if (state.type !== 'window') return null;

        return (
            state.metaWindow ||
            (state.dialogs &&
                state.dialogs.length > 0 ? state.dialogs[state.dialogs.length - 1].metaWindow : null)
        );
    }

    /** All meta windows represented by this MSWindow.
     *
     * This may be more than one window if dialogs are present, or it may be no windows if no app is launched for example.
     */
    get metaWindows(): MetaWindowWithMsProperties[] {
        const state = this.lifecycleState;
        if (state.type !== 'window') return [];

        const windows = state.dialogs.map(d => d.metaWindow);
        if (state.metaWindow !== null) windows.push(state.metaWindow);
        return windows;
    }

    /** A human-readable identifier for this window.
     * This is not intended for anything other than debugging.
     */
    get windowIdentifier(): string {
        const metaWindow = this.metaWindow;
        if (metaWindow !== null) {
            return buildMetaWindowIdentifier(metaWindow)
        } else {
            return `${this.app.id}-${this.lifecycleState.type}`;
        }
    }

    get title() {
        if (!this.app) return '';
        const metaWindow = this.metaWindow
        return metaWindow
            ? metaWindow.get_title()
            : this.app.get_name();
    }

    set persistent(boolean: boolean) {
        this._persistent = boolean;
        Me.stateManager.stateChanged();
    }

    delayGetMetaWindowActor(
        metaWindow: MetaWindowWithMsProperties,
        delayedCount: number,
        resolve: (actor: Meta.WindowActor)=>void,
        reject: ()=>void
    ) {
        if (delayedCount < 20) {
            // If we don't have actor we hope to get it in the next loop
            Async.addTimeout(GLib.PRIORITY_DEFAULT, 50, () => {
                const actor =
                    metaWindow.get_compositor_private<Meta.WindowActor>();
                if (actor && actor.get_texture()) {
                    resolve(actor);
                } else {
                    this.delayGetMetaWindowActor(
                        metaWindow,
                        delayedCount++,
                        resolve,
                        reject
                    );
                }
            });
        } else {
            reject();
        }
    }

    get dragged() {
        return (
            Me.msWindowManager.msDndManager.dragInProgress?.msWindow === this
        );
    }

    get followMetaWindow() {
        if (!this.msWorkspace) return false;
        return (
            (this.msWorkspace &&
                this.msWorkspace.layout.state.key === 'float') ||
            (this.metaWindow && this.metaWindow.fullscreen)
        );
    }

    async onMetaWindowActorExist(
        metaWindow: MetaWindowWithMsProperties
    ): Promise<Meta.WindowActor | void> {
        return new Promise<Meta.WindowActor | void>((resolve, reject) => {
            if (!metaWindow) {
                return resolve();
            }
            const actor = metaWindow.get_compositor_private<Meta.WindowActor>();
            if (actor && actor.get_texture()) {
                resolve(actor);
            } else {
                this.delayGetMetaWindowActor(metaWindow, 0, resolve, reject);
            }
        });
    }

    async onMetaWindowFirstFrameDrawn(metaWindow: MetaWindowWithMsProperties) {
        return new Promise<void>((resolve) => {
            if (!metaWindow) {
                return resolve();
            }
            if (metaWindow.firstFrameDrawn) {
                resolve();
            } else {
                metaWindow
                    .get_compositor_private<Meta.WindowActor>()
                    .connect('first-frame', () => {
                        resolve();
                    });
            }
        });
    }

    override vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        box.x1 = Math.round(box.x1);
        box.y1 = Math.round(box.y1);
        box.x2 = Math.round(box.x2);
        box.y2 = Math.round(box.y2);
        SetAllocation(this, box, flags);
        const contentBox = Clutter.ActorBox.new(
            0,
            0,
            box.get_width(),
            box.get_height()
        );
        Allocate(this.msContent, contentBox, flags);
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.msWorkspace.monitor.index
        );
        const monitorInFullScreen = global.display.get_monitor_in_fullscreen(
            this.msWorkspace.monitor.index
        );
        const offsetX = monitorInFullScreen
            ? this.msWorkspace.monitor.x
            : workArea.x;
        const offsetY = monitorInFullScreen
            ? this.msWorkspace.monitor.y
            : workArea.y;
        if (this.lifecycleState.type === "window") {
            // The dialogs are sorted because it affects their stacking order when displayed. We show the most recently created one on top.
            [...this.lifecycleState.dialogs]
                .sort(
                    (firstDialog, secondDialog) =>
                        firstDialog.metaWindow.user_time -
                        secondDialog.metaWindow.user_time
                )
                .forEach((dialog) => {
                    const dialogFrame = dialog.metaWindow.get_buffer_rect();
                    const x1 = dialogFrame.x - box.x1 - offsetX;
                    const x2 = x1 + dialogFrame.width;
                    const y1 = dialogFrame.y - box.y1 - offsetY;
                    const y2 = y1 + dialogFrame.height;

                    const dialogBox = Clutter.ActorBox.new(x1, y1, x2, y2);
                    Allocate(dialog.clone, dialogBox, flags);
                });
        }
    }

    // eslint-disable-next-line camelcase
    override set_position(x: number, y: number) {
        if (this.followMetaWindow) return;
        super.set_position(x, y);
    }

    // eslint-disable-next-line camelcase
    override set_size(width: number, height: number) {
        if (this.followMetaWindow) return;
        super.set_size(width, height);
    }

    getRelativeMetaWindowPosition(metaWindow: Meta.Window) {
        const x = this.x;
        const y = this.y;

        const currentFrameRect = metaWindow.get_frame_rect();
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.msWorkspace.monitor.index
        );

        return {
            x: this.dragged ? currentFrameRect.x : workArea.x + x,
            y: this.dragged ? currentFrameRect.y : workArea.y + y,
        };
    }

    /*
     * This function is called every time the position or the size of the actor change and is meant to update the metaWindow accordingly
     */
    updateMetaWindowPositionAndSize() {
        // This will call updateMetaWindowPositionAndSizeInternal immediately, or in a little while if it has been throttled
        this.updateMetaWindowPositionAndSizeThrottled();
    }

    private updateMetaWindowPositionAndSizeInternal() {
        const state = this.lifecycleState;
        if (state.type !== "window") return;
        const metaWindow = state.metaWindow;
        const windowActor =
            metaWindow &&
            metaWindow.get_compositor_private<MetaWindowActorWithMsProperties>();

        if (
            !windowActor ||
            !this.mapped ||
            this.width === 0 ||
            this.height === 0 ||
            !metaWindow.firstFrameDrawn ||
            this.followMetaWindow ||
            metaWindow.minimized
        ) {
            return;
        }

        let shouldBeMaximizedHorizontally =
            metaWindow.maximized_horizontally;
        let shouldBeMaximizedVertically = metaWindow.maximized_vertically;

        // Check for maximized only if the msWindow is inside the tileableContainer
        if (
            this.get_parent() ===
            this.msWorkspace.msWorkspaceActor.tileableContainer
        ) {
            //Check if the actor position is corresponding of the maximized state (is equal of the size of the workArea)
            shouldBeMaximizedHorizontally =
                this.x === 0 &&
                this.width ===
                    this.msWorkspace.msWorkspaceActor.tileableContainer.allocation.get_width();
            shouldBeMaximizedVertically =
                this.y === 0 &&
                this.height ===
                    this.msWorkspace.msWorkspaceActor.tileableContainer.allocation.get_height();
        }

        const needToChangeMaximizeHorizontally =
            shouldBeMaximizedHorizontally !==
            metaWindow.maximized_horizontally;
        const needToChangeMaximizeVertically =
            shouldBeMaximizedVertically !==
            metaWindow.maximized_vertically;

        let needToMove = false;
        let needToResize = false;
        let needToMoveOrResize = false;
        let moveTo: { x: number, y: number } | undefined = undefined;
        let resizeTo: { width: number, height: number } | undefined = undefined;

        // check if the window need a changes only if we don't need to already maximize
        if (!shouldBeMaximizedHorizontally || !shouldBeMaximizedVertically) {
            const currentFrameRect = metaWindow.get_frame_rect();
            const contentBox = this.msContent.allocation;

            if (metaWindow.allows_resize()) {
                moveTo = this.getRelativeMetaWindowPosition(metaWindow);
                resizeTo = {
                    width: this.width,
                    height: this.height,
                };
            } else {
                const relativePosition = this.getRelativeMetaWindowPosition(
                    metaWindow
                );

                moveTo = {
                    x:
                        relativePosition.x +
                        (contentBox.get_width() - currentFrameRect.width) / 2,
                    y:
                        relativePosition.y +
                        (contentBox.get_height() - currentFrameRect.height) / 2,
                };
                resizeTo = {
                    width: currentFrameRect.width,
                    height: currentFrameRect.height,
                };
            }
            needToMove =
                currentFrameRect.x !== moveTo.x ||
                currentFrameRect.y !== moveTo.y;
            needToResize =
                currentFrameRect.width !== resizeTo.width ||
                currentFrameRect.height !== resizeTo.height;
            needToMoveOrResize = needToMove || needToResize;
        }

        // If there is no need to maximize, unmaximize, resize or move discard
        if (
            !needToChangeMaximizeHorizontally &&
            !needToChangeMaximizeVertically &&
            !needToMoveOrResize
        ) {
            return;
        }

        if (
            needToChangeMaximizeHorizontally ||
            needToChangeMaximizeVertically
        ) {
            const shouldMaximizeHorizontally =
                shouldBeMaximizedHorizontally &&
                !metaWindow.maximized_horizontally;
            const shouldMaximizeVertically =
                shouldBeMaximizedVertically &&
                !metaWindow.maximized_vertically;
            const shouldUnMaximizeHorizontally =
                !shouldBeMaximizedHorizontally &&
                metaWindow.maximized_horizontally;
            const shouldUnMaximizeVertically =
                !shouldBeMaximizedVertically &&
                metaWindow.maximized_vertically;

            const callback = () => {
                if (shouldMaximizeVertically && shouldUnMaximizeVertically) {
                    metaWindow.unmaximize(Meta.MaximizeFlags.BOTH);
                } else if (shouldUnMaximizeHorizontally) {
                    metaWindow.unmaximize(Meta.MaximizeFlags.HORIZONTAL);
                } else if (shouldUnMaximizeVertically) {
                    metaWindow.unmaximize(Meta.MaximizeFlags.VERTICAL);
                }

                if (shouldMaximizeHorizontally && shouldMaximizeVertically) {
                    metaWindow.maximize(Meta.MaximizeFlags.BOTH);
                } else if (shouldMaximizeHorizontally) {
                    metaWindow.maximize(Meta.MaximizeFlags.HORIZONTAL);
                } else if (shouldMaximizeVertically) {
                    metaWindow.maximize(Meta.MaximizeFlags.VERTICAL);
                }
            };

            if (isWayland) {
                GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                    callback();
                    return GLib.SOURCE_REMOVE;
                });
            } else {
                callback();
            }
        }

        if (needToMoveOrResize && moveTo !== undefined && resizeTo !== undefined) {
            // Secure the futur metaWindow Position to ensure it's not outside the current monitor
            if (!this.dragged) {
                moveTo.x = Math.max(
                    Math.min(
                        moveTo.x,
                        this.msWorkspace.monitor.x +
                            this.msWorkspace.monitor.width -
                            resizeTo.width
                    ),
                    this.msWorkspace.monitor.x
                );
                moveTo.y = Math.max(
                    Math.min(
                        moveTo.y,
                        this.msWorkspace.monitor.y +
                            this.msWorkspace.monitor.height -
                            resizeTo.height
                    ),
                    this.msWorkspace.monitor.y
                );
            }
            //Set the size accordingly
            if (isWayland) {
                const moveTo2 = moveTo;
                const resizeTo2 = resizeTo;
                GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                    if (needToResize) {
                        metaWindow.move_resize_frame(
                            true,
                            moveTo2.x,
                            moveTo2.y,
                            resizeTo2.width,
                            resizeTo2.height
                        );
                    } else {
                        metaWindow.move_frame(true, moveTo2.x, moveTo2.y);
                    }

                    return GLib.SOURCE_REMOVE;
                });
            } else {
                if (needToResize) {
                    metaWindow.move_resize_frame(
                        true,
                        moveTo.x,
                        moveTo.y,
                        resizeTo.width,
                        resizeTo.height
                    );

                    // Enforce window positioning since Gnome Terminal don't always move when requested
                    const moveTo2 = moveTo;
                    GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                        const currentFrameRect =
                            metaWindow.get_frame_rect();

                        if (
                            currentFrameRect.x !== moveTo2.x ||
                            currentFrameRect.y !== moveTo2.y
                        ) {
                            metaWindow.move_frame(
                                true,
                                moveTo2.x,
                                moveTo2.y
                            );
                        }

                        return GLib.SOURCE_REMOVE;
                    });
                } else {
                    metaWindow.move_frame(true, moveTo.x, moveTo.y);
                }
            }
        }
    }

    mimicMetaWindowPositionAndSize() {
        const metaWindow = this.metaWindow;
        if (!metaWindow || this.dragged) return;
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            metaWindow.get_monitor()
        );
        const currentFrameRect = metaWindow.get_frame_rect();
        const newPosition = {
            x:
                currentFrameRect.x -
                (metaWindow.fullscreen
                    ? this.msWorkspace.monitor.x
                    : workArea.x) -
                this.msContent.x,
            y:
                currentFrameRect.y -
                (metaWindow.fullscreen
                    ? this.msWorkspace.monitor.y
                    : workArea.y) -
                this.msContent.y,
        };
        const newSize = {
            width: currentFrameRect.width + this.msContent.x * 2,
            height: currentFrameRect.height + this.msContent.y * 2,
        };
        super.set_position(newPosition.x, newPosition.y);
        super.set_size(newSize.width, newSize.height);
    }

    resizeDialogs() {
        if (this.lifecycleState.type !== "window") return;
        this.lifecycleState.dialogs.forEach((dialog) => {
            const { metaWindow } = dialog;
            const frame = metaWindow.get_frame_rect();
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.msWorkspace.monitor.index
            );
            const monitorInFullScreen =
                global.display.get_monitor_in_fullscreen(
                    this.msWorkspace.monitor.index
                );
            const offsetX = monitorInFullScreen
                ? this.msWorkspace.monitor.x
                : workArea.x;
            const offsetY = monitorInFullScreen
                ? this.msWorkspace.monitor.y
                : workArea.y;
            const needMove =
                frame.x - offsetX < this.x ||
                frame.x - offsetX + frame.width > this.x + this.width ||
                frame.y - offsetY < this.y ||
                frame.y - offsetY + frame.height > this.y + this.height;
            const needResize =
                frame.width > this.width || frame.height > this.height;

            if (needResize && metaWindow.resizeable) {
                const minWidth = Math.min(frame.width, this.width);
                const minHeight = Math.min(frame.height, this.height);
                metaWindow.move_resize_frame(
                    true,
                    needMove
                        ? offsetX + this.x + (this.width - minWidth) / 2
                        : frame.x,
                    needMove
                        ? offsetY + this.y + (this.height - minHeight) / 2
                        : frame.y,
                    minWidth,
                    minHeight
                );
            } else if (needMove && metaWindow.allows_move()) {
                metaWindow.move_frame(
                    true,
                    offsetX + this.x + (this.width - frame.width) / 2,
                    offsetY + this.y + (this.height - frame.height) / 2
                );
            }
        });
    }

    resizeMetaWindows() {
        if (this.lifecycleState.type == "window" && this.lifecycleState.metaWindow !== null) {
            this.followMetaWindow
                ? this.mimicMetaWindowPositionAndSize()
                : this.updateMetaWindowPositionAndSize();
        }

        this.resizeDialogs();
    }

    registerOnMetaWindowSignals(metaWindow: MetaWindowWithMsProperties): number[] {
        return [
            metaWindow.connect('notify::title', (_) => {
                this.emit('title-changed', this.title);
            }),
            metaWindow.connect('position-changed', () => {
                if (this.followMetaWindow) {
                    this.mimicMetaWindowPositionAndSize();
                }
            }),
            metaWindow.connect('size-changed', () => {
                if (this.followMetaWindow) {
                    this.mimicMetaWindowPositionAndSize();
                }
            }),
            metaWindow.connect('notify::fullscreen', () => {
                if (this.followMetaWindow) {
                    this.mimicMetaWindowPositionAndSize();
                }
            })
        ]
    }

    unregisterOnMetaWindowSignals() {
        const state = this.lifecycleState;
        if (state.type !== "window" || state.metaWindow === null) return;
        for(const signalId of state.metaWindowSignals) {
            state.metaWindow.disconnect(signalId);
        }
        state.metaWindowSignals = [];
    }

    setMsWorkspace(msWorkspace: MsWorkspace) {
        this.msWorkspace = msWorkspace;
        if (this.lifecycleState.type === "window") {
            [
                ...this.lifecycleState.dialogs.map((dialog) => dialog.metaWindow),
                this.lifecycleState.metaWindow,
            ].forEach((metaWindow) => {
                if (metaWindow) {
                    WindowUtils.updateTitleBarVisibility(metaWindow);
                    this.updateWorkspaceAndMonitor(metaWindow);
                }
            });
        }
        this.resizeMetaWindows();
    }

    async setWindow(metaWindow: MetaWindowWithMsProperties): Promise<void> {
        assert(this.lifecycleState.type === "app-placeholder", "Can only set the window if the MsWindow is in the app-placeholder state.");

        this.lifecycleState = {
            type: "window",
            metaWindow: metaWindow,
            metaWindowSignals: this.registerOnMetaWindowSignals(metaWindow),
            dialogs: [],
            matchingInfo: this.lifecycleState.matchingInfo,
            matchedAtTime: new Date(),
        }
        metaWindow.msWindow = this;

        await this.onMetaWindowActorExist(metaWindow);
        await this.onMetaWindowFirstFrameDrawn(metaWindow);
        this.updateWorkspaceAndMonitor(metaWindow);
        this.windowClone.set_source(
            metaWindow.get_compositor_private<Meta.WindowActor>()
        );
        await this.onMetaWindowsChanged();
    }

    public unsetWindow() {
        assert(this.lifecycleState.type === "window", "Can only unset the window when in the window state");
        this.unregisterOnMetaWindowSignals();
        // Required when re-assigning windows.
        // Normally if a window is destroyed the source is implicitly cleared because the source window doesn't exist anymore.
        this.windowClone.set_source(null);
        this.reactive = true;
        this.lifecycleState = {
            type: 'app-placeholder',
            matchingInfo: this.lifecycleState.matchingInfo,
            waitingForAppSince: undefined,
        };
        this.onMetaWindowsChanged().catch(logAsyncException);
    }

    updateWorkspaceAndMonitor(metaWindow: Meta.Window) {
        if (metaWindow && this.msWorkspace) {
            // We need to move the window before changing the workspace, because
            // the move itself could cause a workspace change if the window enters
            // the primary monitor
            if (metaWindow.get_monitor() != this.msWorkspace.monitor.index) {
                metaWindow.move_to_monitor(this.msWorkspace.monitor.index);
            }

            const workspace = Me.msWorkspaceManager.getWorkspaceOfMsWorkspace(
                this.msWorkspace
            );
            if (workspace && metaWindow.get_workspace() != workspace) {
                metaWindow.change_workspace(workspace);
            }
        }
    }

    addDialog(metaWindow: MetaWindowWithMsProperties): void {
        if (this.lifecycleState.type === "app-placeholder") {
            this.lifecycleState = {
                type: "window",
                metaWindow: null,
                metaWindowSignals: [],
                dialogs: [],
                matchingInfo: this.lifecycleState.matchingInfo,
                matchedAtTime: new Date(),
            }
        }

        if (this.lifecycleState.type !== "window") {
            throw new Error(`Cannot add dialog to an MsWindow in the ${this.lifecycleState.type} state`);
        };

        this.updateWorkspaceAndMonitor(metaWindow);
        const clone = new Clutter.Clone({
            source: metaWindow.get_compositor_private<Meta.WindowActor>(),
        });

        const dialog = {
            metaWindow,
            clone,
        };
        metaWindow.msWindow = this;
        this.lifecycleState.dialogs.push(dialog);
        this.add_child(clone);
        this.resizeDialogs();
        this.onMetaWindowsChanged();
        if (this.msWorkspace.tileableFocused === this) {
            this.grab_key_focus();
        }
    }

    removeAllDialogs() {
        if (this.lifecycleState.type === "window") {
            const d = [...this.lifecycleState.dialogs];
            for (const dialog of d) {
                this.removeDialog(dialog.metaWindow);
            }
        }
    }

    removeDialog(metaWindow: MetaWindowWithMsProperties) {
        if (this.lifecycleState.type !== "window") {
            throw new Error("Can only remove dialogs when in the window state");
        }

        const idx = this.lifecycleState.dialogs.findIndex(x => x.metaWindow == metaWindow);
        if (idx === -1) {
            throw new Error("Dialog is not added to window");
        }

        const dialog = this.lifecycleState.dialogs[idx];
        this.lifecycleState.dialogs.splice(idx, 1);
        this.remove_child(dialog.clone);
        metaWindow.msWindow = undefined;
    }

    async onMetaWindowsChanged(): Promise<void> {
        if (this.lifecycleState.type == "window") {
            this.reactive = false;
            let metaWindow = assertNotNull(this.metaWindow);
            await this.onMetaWindowActorExist(metaWindow);
            await this.onMetaWindowFirstFrameDrawn(metaWindow);
            WindowUtils.updateTitleBarVisibility(metaWindow);
            this.resizeMetaWindows();
            set_style_class(this.msContent, 'surface-darker', this.lifecycleState.metaWindow === null);
            if (this.placeholder.get_parent()) {
                this.fadeOutPlaceholder();
            }
        } else {
            this.reactive = false;
            set_style_class(this.msContent, 'surface-darker', false);
            if (!this.placeholder.get_parent()) {
                this.msContent.add_child(this.placeholder);
            }
        }
        this.emit('title-changed', this.title);
    }

    grab_key_focus(): void {
        // TODO: Seems a bit redundant to first focus the dialogs and then change focus to the main window (is that even desired?)
        this.focusDialogs();
        if (!Me.msWindowManager.msFocusManager.requestFocus(this)) return;
        if (this.metaWindow) {
            this.metaWindow.activate(global.get_current_time());
        } else {
            this.placeholder.grab_key_focus();
        }
    }

    focusDialogs(): boolean {
        let focused = false;
        if (this.lifecycleState.type === 'window' && this.lifecycleState.dialogs) {
            [...this.lifecycleState.dialogs]
                .sort((firstDialog, secondDialog) => {
                    return (
                        firstDialog.metaWindow.user_time -
                        secondDialog.metaWindow.user_time
                    );
                })
                .forEach((dialog, index, array) => {
                    this.set_child_above_sibling(dialog.clone, null);
                    if (index === array.length - 1) {
                        dialog.metaWindow.activate(global.get_current_time());
                        focused = true;
                    }
                });
        }
        return focused;
    }

    /**
     * When a MetaWindow associated to this MsWindow is unManaged we remove it from the dialogs if it's a dialog or the MainMetaWindow then we kill the MsWindow only if it was the last one.
     * @param {MetaWindow} metaWindow the MetaWindow currently unManaged
     */
    metaWindowUnManaged(metaWindow: MetaWindowWithMsProperties): void {
        const state = this.lifecycleState;
        assert(state.type == "window", "Expected the MsWindow to be in the 'window' state");

        const isMainMetaWindow = metaWindow === state.metaWindow;
        const dialog = state.dialogs.find(
            (dialog) => dialog.metaWindow === metaWindow
        );
        // If it's neither the MainMetaWindow or a Dialog we ignore, but this shouldn't happen
        if (!isMainMetaWindow && dialog === undefined) {
            Me.log("Cannot find the window which was unmanaged");
            return;
        }
        if (dialog) {
            state.dialogs.splice(state.dialogs.indexOf(dialog), 1);
            this.remove_child(dialog.clone);
            dialog.clone.destroy();
        }
        if (isMainMetaWindow) {
            state.metaWindow = null;
        }

        if (state.metaWindow == null && state.dialogs.length == 0) {
            if (this._persistent) {
                this.unsetWindow();
            } else {
                this.lifecycleState = { type: 'waiting-for-destroy' };

                // We check in an idle that closing dialog didn't pop up a new window. If there is no new window we kill the msWindow
                GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                    if (this.lifecycleState.type === 'waiting-for-destroy') {
                        this.kill();
                    }
                    return GLib.SOURCE_REMOVE;
                });
            }
        }
    }

    async kill() {
        const state = this.lifecycleState;

        switch (state.type) {
            case "window": {
                if (this._persistent) {
                    this.unsetWindow();
                } else {
                    this.lifecycleState = { type: "destroying" };
                }

                const dialogPromises = state.dialogs.map((dialog) => {
                    return new Promise<void>((resolve) => {
                        delete dialog.metaWindow.msWindow;
                        // Make sure the window is not re-assigned to another MsWindow in the short duration
                        // while it is being destroyed.
                        dialog.metaWindow.handledByMaterialShell = false;
                        // TODO: When can this return false?
                        if (
                            dialog.metaWindow.get_compositor_private<Meta.WindowActor>()
                        ) {
                            dialog.metaWindow.connect('unmanaged', (_) => {
                                resolve();
                            });
                            dialog.metaWindow.delete(global.get_current_time());
                        } else {
                            resolve();
                        }
                    });
                });

                const promise = new Promise<void>((resolve) => {
                    if (
                        state.metaWindow &&
                        state.metaWindow.get_compositor_private<Meta.WindowActor>()
                    ) {
                        delete state.metaWindow.msWindow;
                        state.metaWindow.handledByMaterialShell = false;
                        state.metaWindow.connect('unmanaged', (_) => {
                            resolve();
                        });
                        state.metaWindow.delete(global.get_current_time());
                    } else {
                        resolve();
                    }
                });

                await Promise.all([...dialogPromises, promise]);

                if (!this._persistent) {
                    assert(this.lifecycleState.type === "destroying", "Did not expect the lifecycle state to have changed");
                    this.destroy();
                }
                break;
            }
            case "app-placeholder": {
                if (this._persistent) {
                    // Persistent app placeholders cannot be closed
                } else {
                    this.destroy();
                }
                break;
            }
            case "waiting-for-destroy":
                this.destroy();
                break;
            case "destroyed":
            case "destroying":
                break;
        }
    }

    fadeOutPlaceholder() {
        const onComplete = () => {
            this.placeholder.set_opacity(255);
            if (this.metaWindow) {
                this.msContent.remove_child(this.placeholder);
            }
            this.placeholder.reset();
        };

        this.placeholder.ease({
            opacity: 0,
            duration: 250,
            mode: Clutter.AnimationMode.EASE_OUT_CUBIC,
            onComplete,
        });
    }

    freezeAllocation() {
        this.set_width(this.allocation.get_width());
        this.set_height(this.allocation.get_height());
    }

    unFreezeAllocation() {
        this.set_width(-1);
        this.set_height(-1);
    }

    updateMetaWindowVisibility() {
        const metaWindow = this.metaWindow;
        if (metaWindow) {
            const shouldBeHidden =
                !this.visible ||
                this.get_parent() === null ||
                Me.msWindowManager.msDndManager.dragInProgress;
            if (shouldBeHidden && !metaWindow.minimized) {
                metaWindow.minimize();
            } else if (!shouldBeHidden && metaWindow.minimized) {
                metaWindow.unminimize();
            }
        }
    }

    toString() {
        // When MS function parameter logging is enabled, toString may be called on windows that have been destroyed.
        // So we need to guard against this. super.toString would otherwise try to access the destroyed C object.
        if (this.lifecycleState.type === "destroyed") {
            return `[destroyed MsWindow - ${this.app.get_name()}]`;
        }

        const string = super.toString();
        return `${string.slice(0, string.length - 1)} ${this.app.get_name()}]`;
    }

    _onDestroy() {
        if (this.destroyId) this.disconnect(this.destroyId);
        this.msWorkspace.removeMsWindow(this);
        this.unregisterOnMetaWindowSignals();
        this.lifecycleState = { type: "destroyed" };
    }
}

@registerGObjectClass
export class MsWindowContent extends St.Widget {
    placeholder: Clutter.Actor;
    clone: Clutter.Clone;

    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsWindowContent',
    };

    constructor({
        placeholder,
        clone,
    }: {
        placeholder: Clutter.Actor;
        clone: Clutter.Clone;
    }) {
        super({ clip_to_allocation: true });
        this.placeholder = placeholder;
        this.clone = clone;
        this.add_child(this.clone);
        this.add_child(this.placeholder);
    }

    override vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        const parent = this.get_parent();
        assert(parent instanceof MsWindow, "expected parent to be an MsWindow");
        const metaWindow = parent.metaWindow;
        if (metaWindow && metaWindow.firstFrameDrawn) {
            const windowFrameRect = metaWindow.get_frame_rect();
            const windowBufferRect = metaWindow.get_buffer_rect();
            //The WindowActor position are not the same as the real window position, I'm not sure why. We need to determine the offset to correctly position the windowClone inside the msWindow container;
            if (metaWindow.get_compositor_private<Meta.WindowActor>()) {
                let x1: number, x2: number, y1: number, y2: number;
                if (metaWindow.resizeable || metaWindow.fullscreen) {
                    x1 = windowBufferRect.x - windowFrameRect.x;
                    y1 = windowBufferRect.y - windowFrameRect.y;
                    x2 = x1 + windowBufferRect.width;
                    y2 = y1 + windowBufferRect.height;
                } else {
                    const monitor = this.get_parent().msWorkspace!.monitor;
                    const workArea = Main.layoutManager.getWorkAreaForMonitor(
                        monitor.index
                    );
                    x1 = windowBufferRect.x - workArea.x - this.get_parent().x;
                    y1 = windowBufferRect.y - workArea.y - this.get_parent().y;
                    x2 = x1 + windowBufferRect.width;
                    y2 = y1 + windowBufferRect.height;
                }
                const cloneBox = Clutter.ActorBox.new(x1, y1, x2, y2);

                Allocate(this.clone, cloneBox, flags);
            } else {
                AllocatePreferredSize(this.clone, flags);
            }
        } else {
            AllocatePreferredSize(this.clone, flags);
        }

        if (this.placeholder.get_parent() === this) {
            const height = box.get_height();
            const width = box.get_width();
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                this.placeholder.set_size(width, height);
                return GLib.SOURCE_REMOVE;
            });
            Allocate(this.placeholder, box, flags);
        }
    }
}

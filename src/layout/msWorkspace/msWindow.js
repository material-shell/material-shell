/** Gnome libs imports */
const { St, Meta, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    SetAllocation,
    Allocate,
    AllocatePreferredSize,
} = Me.imports.src.utils.compatibility;
const WindowUtils = Me.imports.src.utils.windows;
const { AppPlaceholder } = Me.imports.src.widget.appPlaceholder;
const isWayland = GLib.getenv('XDG_SESSION_TYPE').toLowerCase() === 'wayland';

/* exported MsWindow */
var MsWindow = GObject.registerClass(
    {
        GTypeName: 'MsWindow',
        Signals: {
            title_changed: {
                param_types: [GObject.TYPE_STRING],
            },
            dragged_changed: {
                param_types: [GObject.TYPE_BOOLEAN],
            },
            request_new_meta_window: {},
        },
    },
    class MsWindow extends Clutter.Actor {
        _init(
            app,
            metaWindowIdentifier,
            metaWindow,
            persistent,
            initialAllocation
        ) {
            super._init({
                reactive: true,
                x: initialAllocation ? initialAllocation.x || 0 : 0,
                y: initialAllocation ? initialAllocation.y || 0 : 0,
                width: initialAllocation ? initialAllocation.width || 0 : 0,
                height: initialAllocation ? initialAllocation.height || 0 : 0,
            });

            this.app = app;
            this._persistent = persistent;

            this.dialogs = [];
            this.metaWindowIdentifier = metaWindowIdentifier;
            this.windowClone = new Clutter.Clone();
            this.placeholder = new AppPlaceholder(this.app);
            this.metaWindowSignals = [];
            this.placeholder.connect('clicked', (_) => {
                this.emit('request-new-meta-window');
            });
            this.destroyId = this.connect(
                'destroy',
                this._onDestroy.bind(this)
            );
            this.connect('parent-set', () => {
                this.msContent.style_changed();
                this.updateMetaWindowVisibility();
            });
            this.connect('notify::visible', () => {
                this.updateMetaWindowVisibility();
            });
            this.msContent = new MsWindowContent(
                this.placeholder,
                this.windowClone
            );
            this.add_child(this.msContent);
            if (metaWindow) {
                this.setWindow(metaWindow);
            }
        }

        get state() {
            return {
                appId: this.app.get_id(),
                metaWindowIdentifier: this.metaWindowIdentifier,
                persistent: this._persistent,
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
            };
        }

        get metaWindow() {
            return (
                this._metaWindow ||
                (this.dialogs &&
                    this.dialogs[this.dialogs.length - 1] &&
                    this.dialogs[this.dialogs.length - 1].metaWindow)
            );
        }

        get title() {
            if (!this.app) return '';
            return this.metaWindow
                ? this.metaWindow.get_title()
                : this.app.get_name();
        }

        set persistent(boolean) {
            this._persistent = boolean;
            Me.stateManager.stateChanged();
        }

        delayGetMetaWindowActor(metaWindow, delayedCount, resolve, reject) {
            if (delayedCount < 20) {
                // If we don't have actor we hope to get it in the next loop
                GLib.timeout_add(GLib.PRIORITY_DEFAULT, 50, () => {
                    let actor = metaWindow.get_compositor_private();
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
                    return GLib.SOURCE_REMOVE;
                });
            } else {
                reject();
            }
        }

        get dragged() {
            return Me.msWindowManager.msDndManager.msWindowDragged === this;
        }

        get followMetaWindow() {
            if (!this.msWorkspace) return false;
            return (
                (this.msWorkspace &&
                    this.msWorkspace.layout.state.key === 'float') ||
                (this.metaWindow && this.metaWindow.fullscreen)
            );
        }

        async onMetaWindowActorExist(metaWindow) {
            return new Promise((resolve, reject) => {
                if (!metaWindow) {
                    return resolve();
                }
                let actor = metaWindow.get_compositor_private();
                if (actor && actor.get_texture()) {
                    resolve(actor);
                } else {
                    this.delayGetMetaWindowActor(
                        metaWindow,
                        0,
                        resolve,
                        reject
                    );
                }
            });
        }

        async onMetaWindowFirstFrameDrawn() {
            return new Promise((resolve) => {
                if (!this.metaWindow) {
                    return resolve();
                }
                if (this.metaWindow.firstFrameDrawn) {
                    resolve();
                } else {
                    this.metaWindow
                        .get_compositor_private()
                        .connect('first-frame', () => {
                            resolve();
                        });
                }
            });
        }

        vfunc_allocate(box, flags) {
            box.x1 = Math.round(box.x1);
            box.y1 = Math.round(box.y1);
            box.x2 = Math.round(box.x2);
            box.y2 = Math.round(box.y2);
            SetAllocation(this, box, flags);
            let contentBox = new Clutter.ActorBox();
            contentBox.x2 = box.get_width();
            contentBox.y2 = box.get_height();
            Allocate(this.msContent, contentBox, flags);
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.msWorkspace.monitor.index
            );
            const monitorInFullScreen = global.display.get_monitor_in_fullscreen(
                this.msWorkspace.monitor.index
            );
            let offsetX = monitorInFullScreen
                ? this.msWorkspace.monitor.x
                : workArea.x;
            let offsetY = monitorInFullScreen
                ? this.msWorkspace.monitor.y
                : workArea.y;
            this.dialogs.forEach((dialog) => {
                let dialogBox = new Clutter.ActorBox();
                let dialogFrame = dialog.metaWindow.get_buffer_rect();
                dialogBox.x1 = dialogFrame.x - box.x1 - offsetX;
                dialogBox.x2 = dialogBox.x1 + dialogFrame.width;
                dialogBox.y1 = dialogFrame.y - box.y1 - offsetY;
                dialogBox.y2 = dialogBox.y1 + dialogFrame.height;
                Allocate(dialog.clone, dialogBox, flags);
            });
        }

        // eslint-disable-next-line camelcase
        set_position(x, y) {
            if (this.followMetaWindow) return;
            super.set_position(x, y);
        }

        // eslint-disable-next-line camelcase
        set_size(width, height) {
            if (this.followMetaWindow) return;
            super.set_size(width, height);
        }

        getRelativeMetaWindowPosition(metaWindow) {
            let x = this.x;
            let y = this.y;

            let currentFrameRect = metaWindow.get_frame_rect();
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.msWorkspace.monitor.index
            );

            return {
                x: this.dragged ? currentFrameRect.x : workArea.x + x,
                y: this.dragged ? currentFrameRect.y : workArea.y + y,
            };
        }

        delayUpdateMetaWindowPositionAndSize() {
            GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
                this.updateDelayed = false;
                this.updateMetaWindowPositionAndSize();
                return GLib.SOURCE_REMOVE;
            });
        }

        /*
         * This function is called every time the position or the size of the actor change and is meant to update the metaWindow accordingly
         */
        updateMetaWindowPositionAndSize() {
            let windowActor =
                this._metaWindow && this._metaWindow.get_compositor_private();

            if (
                this.destroyed ||
                !windowActor ||
                !this.mapped ||
                this.width === 0 ||
                this.height === 0 ||
                !this._metaWindow.firstFrameDrawn ||
                this.followMetaWindow ||
                this.updateDelayed ||
                this._metaWindow.minimized
            ) {
                return;
            }

            let shouldBeMaximizedHorizontally = this._metaWindow
                .maximized_horizontally;
            let shouldBeMaximizedVertically = this._metaWindow
                .maximized_vertically;

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

            let needToChangeMaximizeHorizontally =
                shouldBeMaximizedHorizontally !==
                this._metaWindow.maximized_horizontally;
            let needToChangeMaximizeVertically =
                shouldBeMaximizedVertically !==
                this._metaWindow.maximized_vertically;
            let needToMoveOrResize = false;
            let moveTo, resizeTo;
            // check if the window need a changes only if we don't need to already maximize
            if (
                !shouldBeMaximizedHorizontally ||
                !shouldBeMaximizedVertically
            ) {
                let currentFrameRect = this._metaWindow.get_frame_rect();
                let contentBox = this.msContent.allocation;

                if (this._metaWindow.allows_resize()) {
                    moveTo = this.getRelativeMetaWindowPosition(
                        this._metaWindow
                    );
                    resizeTo = {
                        width: this.width,
                        height: this.height,
                    };
                } else {
                    let relativePosition = this.getRelativeMetaWindowPosition(
                        this._metaWindow
                    );

                    moveTo = {
                        x:
                            relativePosition.x +
                            (contentBox.get_width() - currentFrameRect.width) /
                                2,
                        y:
                            relativePosition.y +
                            (contentBox.get_height() -
                                currentFrameRect.height) /
                                2,
                    };
                    resizeTo = {
                        width: currentFrameRect.width,
                        height: currentFrameRect.height,
                    };
                }

                needToMoveOrResize = !(
                    currentFrameRect.x === moveTo.x &&
                    currentFrameRect.y === moveTo.y &&
                    currentFrameRect.width === resizeTo.width &&
                    currentFrameRect.height === resizeTo.height
                );
            }
            // If there is no need to maximize, unmaximize, resize or move discard
            if (
                !needToChangeMaximizeHorizontally &&
                !needToChangeMaximizeVertically &&
                !needToMoveOrResize
            ) {
                return;
            }

            // Delay the update if the previous one is too recent to prevent freeze bug aka window don't update anymore
            if (
                windowActor.lastResize &&
                Date.now() - windowActor.lastResize < 100
            ) {
                this.updateDelayed = true;
                return this.delayUpdateMetaWindowPositionAndSize();
            }

            if (
                needToChangeMaximizeHorizontally ||
                needToChangeMaximizeVertically
            ) {
                const shouldMaximizeHorizontally =
                    shouldBeMaximizedHorizontally &&
                    !this._metaWindow.maximized_horizontally;
                const shouldMaximizeVertically =
                    shouldBeMaximizedVertically &&
                    !this._metaWindow.maximized_vertically;
                const shouldUnMaximizeHorizontally =
                    !shouldBeMaximizedHorizontally &&
                    this._metaWindow.maximized_horizontally;
                const shouldUnMaximizeVertically =
                    !shouldBeMaximizedVertically &&
                    this._metaWindow.maximized_vertically;

                const callback = () => {
                    if (
                        shouldMaximizeVertically &&
                        shouldUnMaximizeVertically
                    ) {
                        this._metaWindow.unmaximize(Meta.MaximizeFlags.BOTH);
                    } else if (shouldUnMaximizeHorizontally) {
                        this._metaWindow.unmaximize(
                            Meta.MaximizeFlags.HORIZONTAL
                        );
                    } else if (shouldUnMaximizeVertically) {
                        this._metaWindow.unmaximize(
                            Meta.MaximizeFlags.VERTICAL
                        );
                    }

                    if (
                        shouldMaximizeHorizontally &&
                        shouldMaximizeVertically
                    ) {
                        this._metaWindow.maximize(Meta.MaximizeFlags.BOTH);
                    } else if (shouldMaximizeHorizontally) {
                        this._metaWindow.maximize(
                            Meta.MaximizeFlags.HORIZONTAL
                        );
                    } else if (shouldMaximizeVertically) {
                        this._metaWindow.maximize(Meta.MaximizeFlags.VERTICAL);
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

            if (needToMoveOrResize) {
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
                    GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                        this._metaWindow.move_resize_frame(
                            true,
                            moveTo.x,
                            moveTo.y,
                            resizeTo.width,
                            resizeTo.height
                        );
                        return GLib.SOURCE_REMOVE;
                    });
                } else {
                    this._metaWindow.move_resize_frame(
                        true,
                        moveTo.x,
                        moveTo.y,
                        resizeTo.width,
                        resizeTo.height
                    );
                }
            }
        }

        mimicMetaWindowPositionAndSize() {
            if (!this.metaWindow || this.dragged) return;
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.metaWindow.get_monitor()
            );
            const currentFrameRect = this.metaWindow.get_frame_rect();
            let newPosition = {
                x:
                    currentFrameRect.x -
                    (this.metaWindow.fullscreen
                        ? this.msWorkspace.monitor.x
                        : workArea.x) -
                    this.msContent.x,
                y:
                    currentFrameRect.y -
                    (this.metaWindow.fullscreen
                        ? this.msWorkspace.monitor.y
                        : workArea.y) -
                    this.msContent.y,
            };
            let newSize = {
                width: currentFrameRect.width + this.msContent.x * 2,
                height: currentFrameRect.height + this.msContent.y * 2,
            };
            super.set_position(newPosition.x, newPosition.y);
            super.set_size(newSize.width, newSize.height);
        }

        resizeDialogs() {
            this.dialogs.forEach((dialog) => {
                let { metaWindow } = dialog;
                let frame = metaWindow.get_frame_rect();
                const workArea = Main.layoutManager.getWorkAreaForMonitor(
                    this.msWorkspace.monitor.index
                );
                const monitorInFullScreen = global.display.get_monitor_in_fullscreen(
                    this.msWorkspace.monitor.index
                );
                let offsetX = monitorInFullScreen
                    ? this.msWorkspace.monitor.x
                    : workArea.x;
                let offsetY = monitorInFullScreen
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
                    let minWidth = Math.min(frame.width, this.width);
                    let minHeight = Math.min(frame.height, this.height);

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
            if (this._metaWindow) {
                this.followMetaWindow
                    ? this.mimicMetaWindowPositionAndSize()
                    : this.updateMetaWindowPositionAndSize();
            }

            this.resizeDialogs();
        }

        registerOnMetaWindowSignals() {
            if (!this.metaWindow) return;
            this.metaWindowSignals.push(
                this.metaWindow.connect('notify::title', (_) => {
                    this.emit('title-changed', this.title);
                }),
                this.metaWindow.connect('position-changed', () => {
                    if (this.followMetaWindow) {
                        this.mimicMetaWindowPositionAndSize();
                    }
                }),
                this.metaWindow.connect('size-changed', () => {
                    if (this.followMetaWindow) {
                        this.mimicMetaWindowPositionAndSize();
                    }
                }),
                this.metaWindow.connect('notify::fullscreen', () => {
                    if (this.followMetaWindow) {
                        this.mimicMetaWindowPositionAndSize();
                    }
                })
            );
        }

        unregisterOnMetaWindowSignals() {
            if (!this.metaWindow) return;
            this.metaWindowSignals.forEach((signalId) => {
                this.metaWindow.disconnect(signalId);
            });
            this.metaWindowSignals = [];
        }

        setMsWorkspace(msWorkspace) {
            this.msWorkspace = msWorkspace;
            [
                ...this.dialogs.map((dialog) => dialog.metaWindow),
                this.metaWindow,
            ].forEach((metaWindow) => {
                if (metaWindow) {
                    WindowUtils.updateTitleBarVisibility(metaWindow);
                    this.updateWorkspaceAndMonitor(metaWindow);
                }
            });
            this.resizeMetaWindows();
        }

        async setWindow(metaWindow) {
            this._metaWindow = metaWindow;
            metaWindow.msWindow = this;

            this.registerOnMetaWindowSignals();
            this.updateWorkspaceAndMonitor(metaWindow);
            this.windowClone.set_source(metaWindow.get_compositor_private());
            await this.onMetaWindowsChanged();
        }

        unsetWindow() {
            this.unregisterOnMetaWindowSignals();
            this.reactive = true;
            delete this._metaWindow;
            delete this.metaWindowUpdateInProgressPromise;
            this.onMetaWindowsChanged();
        }

        updateWorkspaceAndMonitor(metaWindow) {
            if (metaWindow && this.msWorkspace) {
                // We need to move the window before changing the workspace, because
                // the move itself could cause a workspace change if the window enters
                // the primary monitor
                if (metaWindow.get_monitor() != this.msWorkspace.monitor.index)
                    metaWindow.move_to_monitor(this.msWorkspace.monitor.index);

                let workspace = Me.msWorkspaceManager.getWorkspaceOfMsWorkspace(
                    this.msWorkspace
                );
                if (workspace && metaWindow.get_workspace() != workspace) {
                    metaWindow.change_workspace(workspace);
                }
            }
        }

        addDialog(metaWindow) {
            this.updateWorkspaceAndMonitor(metaWindow);
            let clone = new Clutter.Clone({
                source: metaWindow.get_compositor_private(),
            });

            let dialog = {
                metaWindow,
                clone,
            };
            metaWindow.msWindow = this;
            this.dialogs.push(dialog);
            this.add_child(clone);
            this.resizeDialogs();
            this.onMetaWindowsChanged();
            if (this.msWorkspace.tileableFocused === this) {
                this.grab_key_focus();
            }
        }

        removeDialog(dialog) {
            this.dialogs.splice(this.dialogs.indexOf(dialog), 1);
            this.remove_child(dialog.clone);
            dialog.clone.destroy();
        }

        async onMetaWindowsChanged() {
            if (this.metaWindow) {
                this.metaWindowIdentifier = Me.msWindowManager.buildMetaWindowIdentifier(
                    this.metaWindow
                );
                this.reactive = false;
                await this.onMetaWindowActorExist(this.metaWindow);
                await this.onMetaWindowFirstFrameDrawn();
                WindowUtils.updateTitleBarVisibility(this.metaWindow);
                this.resizeMetaWindows();
                if (!this._metaWindow) {
                    if (
                        !this.msContent.has_style_class_name('surface-darker')
                    ) {
                        this.msContent.add_style_class_name('surface-darker');
                    }
                } else {
                    if (this.msContent.has_style_class_name('surface-darker')) {
                        this.msContent.remove_style_class_name(
                            'surface-darker'
                        );
                    }
                }
                if (this.placeholder.get_parent()) {
                    this.fadeOutPlaceholder();
                }
            } else {
                this.reactive = false;
                if (this.msContent.has_style_class_name('surface-darker')) {
                    this.msContent.remove_style_class_name('surface-darker');
                }
                if (!this.placeholder.get_parent()) {
                    this.msContent.add_child(this.placeholder);
                }
            }
            this.emit('title-changed', this.title);
        }

        grab_key_focus() {
            if (!Me.msWindowManager.msFocusManager.requestFocus(this)) return;
            if (this.dialogs.length) {
                this.dialogs[this.dialogs.length - 1].metaWindow.activate(
                    global.get_current_time()
                );
            } else if (this.metaWindow) {
                this.metaWindow.activate(global.get_current_time());
            } else {
                this.placeholder.grab_key_focus();
            }
        }

        /**
         * When a MetaWindow associated to this MsWindow is unManaged we remove it from the dialogs if it's a dialog or the MainMetaWindow then we kill the MsWindow only if it was the last one.
         * @param {MetaWindow} metaWindow the MetaWindow currently unManaged
         */
        metaWindowUnManaged(metaWindow) {
            const isMainMetaWindow = metaWindow === this._metaWindow;
            const isDialogMetaWindow = this.dialogs
                .map((dialog) => dialog.metaWindow)
                .includes(metaWindow);
            // If it's neither the MainMetaWindow or a Dialog we ignore but this shouldn't happen
            if (!isMainMetaWindow && !isDialogMetaWindow) {
                return;
            }
            if (isDialogMetaWindow) {
                const dialog = this.dialogs.find(
                    (dialog) => dialog.metaWindow === metaWindow
                );
                this.removeDialog(dialog);
            }
            if (isMainMetaWindow) {
                this._metaWindow = null;
            }

            // We check in an idle that closing dialog didn't popped a new window. If there is no new window we kill the msWindow
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                if (!this.dialogs.length && !this._metaWindow) {
                    this.kill();
                }
                return GLib.SOURCE_REMOVE;
            });
        }

        kill() {
            let dialogPromises = this.dialogs.map((dialog) => {
                return new Promise((resolve) => {
                    delete dialog.metaWindow.msWindow;
                    if (dialog.metaWindow.get_compositor_private()) {
                        dialog.metaWindow.connect('unmanaged', (_) => {
                            resolve();
                        });
                        dialog.metaWindow.delete(global.get_current_time());
                    }
                });
            });
            let promise = new Promise((resolve) => {
                if (
                    this.metaWindow &&
                    this.metaWindow.get_compositor_private()
                ) {
                    delete this.metaWindow.msWindow;
                    this.metaWindow.connect('unmanaged', (_) => {
                        resolve();
                    });
                    this.metaWindow.delete(global.get_current_time());
                } else {
                    resolve();
                }
            });
            Promise.all([...dialogPromises, promise]).then(() => {
                if (this._persistent) {
                    this.unsetWindow();
                } else {
                    delete this.metaWindow;
                    if (!this.destroyed) {
                      this._onDestroy();
                      this.msWorkspace.removeMsWindow(this);
                      if (this.destroyId) this.disconnect(this.destroyId);
                      this.destroy();
                    }
                }
            });

            return promise;
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
            if (this.metaWindow) {
                let shouldBeHidden =
                    !this.visible ||
                    this.get_parent() === null ||
                    Me.msWindowManager.msDndManager.dragInProgress;
                if (shouldBeHidden && !this.metaWindow.minimized) {
                    this.metaWindow.minimize();
                } else if (!shouldBeHidden && this.metaWindow.minimized) {
                    this.metaWindow.unminimize();
                }
            }
        }

        toString() {
            let string = super.toString();
            return `${string.slice(
                0,
                string.length - 1
            )} ${this.app.get_name()}]`;
        }

        _onDestroy() {
            this.destroyed = true;
            this.unregisterOnMetaWindowSignals();
        }
    }
);

var MsWindowContent = GObject.registerClass(
    {
        GTypeName: 'MsWindowContent',
    },
    class MsWindowContent extends St.Widget {
        _init(placeholder, clone) {
            super._init({ clip_to_allocation: true });
            this.placeholder = placeholder;
            this.clone = clone;
            this.add_child(this.clone);
            this.add_child(this.placeholder);
        }

        vfunc_allocate(box, flags) {
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            let metaWindow = this.get_parent().metaWindow;
            if (metaWindow && metaWindow.firstFrameDrawn) {
                let windowFrameRect = metaWindow.get_frame_rect();
                let windowBufferRect = metaWindow.get_buffer_rect();
                //The WindowActor position are not the same as the real window position, I'm not sure why. We need to determine the offset to correctly position the windowClone inside the msWindow container;
                if (metaWindow.get_compositor_private()) {
                    let cloneBox = new Clutter.ActorBox();
                    if (metaWindow.resizeable || metaWindow.fullscreen) {
                        cloneBox.x1 = windowBufferRect.x - windowFrameRect.x;
                        cloneBox.y1 = windowBufferRect.y - windowFrameRect.y;
                        cloneBox.x2 = cloneBox.x1 + windowBufferRect.width;
                        cloneBox.y2 = cloneBox.y1 + windowBufferRect.height;
                    } else {
                        const monitor = this.get_parent().msWorkspace.monitor;
                        const workArea = Main.layoutManager.getWorkAreaForMonitor(
                            monitor.index
                        );
                        cloneBox.x1 =
                            windowBufferRect.x -
                            workArea.x -
                            this.get_parent().x;
                        cloneBox.y1 =
                            windowBufferRect.y -
                            workArea.y -
                            this.get_parent().y;
                        cloneBox.x2 = cloneBox.x1 + windowBufferRect.width;
                        cloneBox.y2 = cloneBox.y1 + windowBufferRect.height;
                    }

                    Allocate(this.clone, cloneBox, flags);
                } else {
                    AllocatePreferredSize(this.clone, flags);
                }
            } else {
                AllocatePreferredSize(this.clone, flags);
            }

            if (this.placeholder.get_parent() === this) {
                let height = box.get_height();
                let width = box.get_width();
                GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                    this.placeholder.set_size(width, height);
                    return GLib.SOURCE_REMOVE;
                });
                Allocate(this.placeholder, box, flags);
            }
        }
    }
);

const { St, Meta, GLib, Clutter, GObject, Gio } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { AppPlaceholder } = Me.imports.src.widget.appPlaceholder;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const Tweener = imports.ui.tweener;
const WindowUtils = Me.imports.src.utils.windows;
const { AddLogToFunctions } = Me.imports.src.utils.debug;
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
    class MsWindow extends St.Widget {
        _init(app, metaWindowIdentifier, metaWindow) {
            AddLogToFunctions(this);
            super._init({ reactive: true, clip_to_allocation: true });
            this.destroyId = this.connect(
                'destroy',
                this._onDestroy.bind(this)
            );
            this.app = app;
            this.metaWindowIdentifier = metaWindowIdentifier;
            this.windowClone = new Clutter.Clone();
            this.placeholder = new AppPlaceholder(this.app);
            this.placeholder.connect('clicked', (_) => {
                this.emit('request-new-meta-window');
            });
            this.metaWindowSignals = [];
            this.dragged = false;
            this.add_child(this.windowClone);
            this.add_child(this.placeholder);
            if (metaWindow) {
                this.setWindow(metaWindow);
            }

            this.registerToEvents();
        }

        get title() {
            if (!this.app) return '';
            return this.metaWindow
                ? this.metaWindow.get_title()
                : this.app.get_name();
        }

        get isDialog() {
            if (!this.metaWindow) return false;
            let dialogTypes = [
                Meta.WindowType.DIALOG,
                Meta.WindowType.MODAL_DIALOG,
                Meta.WindowType.UTILITY,
            ];
            return (
                dialogTypes.includes(this.metaWindow.window_type) ||
                !this.metaWindow.resizeable ||
                (this.metaWindow.get_transient_for() != null &&
                    this.metaWindow.skip_taskbar)
            );
        }

        registerToEvents() {
            let cursorTracker = Meta.CursorTracker.get_for_display(
                global.display
            );
            let buttonPressed = false;
            let originPointerCoords = null;
            let originMsWindowPosition = null;
            let stageMotionEventId = null;
            this.wmPreferenceSettings = new Gio.Settings({
                schema_id: 'org.gnome.desktop.wm.preferences',
            });
            this.connect('event', (_, event) => {
                const focusOnHover =
                    this.wmPreferenceSettings.get_enum('focus-mode') > 0;
                switch (event.type()) {
                    case Clutter.EventType.BUTTON_PRESS:
                        buttonPressed = true;
                        originPointerCoords = event.get_coords();
                        if (!focusOnHover) {
                            this.takeFocus();
                        }
                        break;

                    case Clutter.EventType.BUTTON_RELEASE:
                        buttonPressed = false;
                        break;

                    case Clutter.EventType.ENTER:
                        if (focusOnHover) {
                            this.takeFocus();
                        }
                        break;

                    case Clutter.EventType.MOTION:
                        if (this.dragged) return;
                        if (buttonPressed) {
                            const [originX, originY] = originPointerCoords;
                            const [currentX, currentY] = event.get_coords();
                            const distance = Math.max(
                                Math.abs(originX - currentX),
                                Math.abs(originY - currentY)
                            );
                            if (distance > 48) {
                                this.dragged = true;
                                originMsWindowPosition = this.get_position();
                                stageMotionEventId = global.stage.connect(
                                    'captured-event',
                                    (_, event) => {
                                        const [
                                            currentX,
                                            currentY,
                                        ] = event.get_coords();
                                        const diffX = originX - currentX;
                                        const diffY = originY - currentY;
                                        const [
                                            originMsWindowX,
                                            originMsWindowY,
                                        ] = originMsWindowPosition;
                                        this.set_position(
                                            Math.round(originMsWindowX - diffX),
                                            Math.round(originMsWindowY - diffY)
                                        );

                                        if (
                                            event.type() ===
                                            Clutter.EventType.BUTTON_RELEASE
                                        ) {
                                            if (this.dragged) {
                                                this.dragged = false;
                                                this.emit(
                                                    'dragged-changed',
                                                    this.dragged
                                                );
                                            }
                                            global.stage.disconnect(
                                                stageMotionEventId
                                            );
                                            stageMotionEventId = null;
                                        }

                                        return Clutter.EVENT_PROPAGATE;
                                    }
                                );
                                this.emit('dragged-changed', this.dragged);
                            }
                        }
                        break;
                }

                //log('EVENT', this.title, event.type());
            });
            this.superConnectId = Me.connect(
                'super-pressed-change',
                (_, pressed) => {
                    this.reactive = !this.metaWindow || pressed;
                }
            );
        }

        delayGetMetaWindowActor(delayedCount, resolve, reject) {
            log('delay actor !', delayedCount);

            if (delayedCount < 20) {
                // If we don't have actor we hope to get it in the next loop
                GLib.timeout_add(GLib.PRIORITY_DEFAULT, 50, () => {
                    let actor = this.metaWindow.get_compositor_private();
                    if (actor && actor.get_texture()) {
                        resolve(actor);
                    } else {
                        this.delayGetMetaWindowActor(
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

        get followMetaWindow() {
            if (!this.msWorkspace) return false;
            return (
                this.isDialog ||
                (this.msWorkspace &&
                    this.msWorkspace.tilingLayout.constructor.key === 'float')
            );
        }

        get metaWindowActorIsAvailable() {
            if (!this.metaWindow) return false;
            let actor = this.metaWindow.get_compositor_private();
            if (actor && actor.get_texture()) {
                return true;
            } else {
                return false;
            }
        }

        async onMetaWindowActorExist() {
            return new Promise((resolve, reject) => {
                if (!this.metaWindow) {
                    return resolve();
                }
                let actor = this.metaWindow.get_compositor_private();
                if (actor && actor.get_texture()) {
                    resolve(actor);
                } else {
                    this.delayGetMetaWindowActor(0, resolve, reject);
                }
            });
        }

        async onMetaWindowActorMapped() {
            return this.onMetaWindowActorExist().then((metaWindowActor) => {
                if (metaWindowActor.mapped) {
                    return metaWindowActor;
                } else {
                    log('wait for it to be mapped', this.title);
                    // Wait for it to be mapped
                    return new Promise((resolve, reject) => {
                        let waitToBeMappedId = metaWindowActor.connect(
                            'notify::mapped',
                            () => {
                                resolve(metaWindowActor);
                                metaWindowActor.disconnect(waitToBeMappedId);
                            }
                        );
                    });
                }
            });
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            if (this.metaWindow) {
                let windowFrameRect = this.metaWindow.get_frame_rect();
                let windowActor = this.metaWindow.get_compositor_private();
                //The WindowActor position are not the same as the real window position, I'm not sure why. We need to determine the offset to correctly position the windowClone inside the msWindow container;
                if (windowActor) {
                    let cloneBox = new Clutter.ActorBox();
                    cloneBox.x1 = windowActor.x - windowFrameRect.x;
                    cloneBox.y1 = windowActor.y - windowFrameRect.y;
                    cloneBox.x2 = cloneBox.x1 + windowActor.width;
                    cloneBox.y2 = cloneBox.y1 + windowActor.height;
                    this.windowClone.allocate(cloneBox, flags);
                } else {
                    log('windowactor is missing', this.title);
                }
            }

            if (this.placeholder.get_parent() === this) {
                this.placeholder.set_size(box.get_width(), box.get_height());
                this.placeholder.allocate(box, flags);
            }
        }

        set_position(x, y, propagate = true) {
            super.set_position(Math.round(x), Math.round(y));
            if (propagate) {
                this.updateMetaWindowPositionAndSize();
            }
        }

        set_size(width, height, propagate = true) {
            super.set_size(Math.round(width), Math.round(height));
            if (propagate) {
                this.updateMetaWindowPositionAndSize();
            }
        }

        /*
         * This function is called every time the position or the size of the actor change and is meant to update the metaWindow accordingly
         */
        updateMetaWindowPositionAndSize() {
            if (!this.metaWindow) return;
            //If an update is already in progress discard all incoming call
            if (this.metaWindowUpdateInProgress) return;
            this.metaWindowUpdateInProgress = true;
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                log('IDLE_ADD'); //Wait for the WindowActor to be available
                this.onMetaWindowActorExist().then(() => {
                    if (!this.metaWindow) return;
                    delete this.metaWindowUpdateInProgress;
                    const workArea = Main.layoutManager.getWorkAreaForMonitor(
                        this.metaWindow.get_monitor()
                    );
                    //Check if the actor position is corresponding of the maximized state (is equal of the size of the workArea)
                    const isMaximized =
                        this.x === workArea.x &&
                        this.y === workArea.y &&
                        this.width === workArea.width &&
                        this.height === workArea.height;

                    //Set the metaWindow maximized if it's the case
                    if (isMaximized) {
                        if (this.metaWindow.maximized) return;
                        return this.metaWindow.maximize(
                            Meta.MaximizeFlags.BOTH
                        );
                    }
                    //Or remove the maximized if it's not
                    if (this.metaWindow.maximized_horizontally) {
                        this.metaWindow.unmaximize(Meta.MaximizeFlags.BOTH);
                    }
                    //Set the size accordingly
                    this.metaWindow.move_resize_frame(
                        true,
                        workArea.x + this.x,
                        workArea.y + this.y,
                        this.width,
                        this.height
                    );
                });
            });
        }

        mimicMetaWindowPositionAndSize() {
            const currentFrameRect = this.metaWindow.get_frame_rect();
            this.set_position(currentFrameRect.x, currentFrameRect.y, false);
            this.set_size(
                currentFrameRect.width,
                currentFrameRect.height,
                false
            );
        }

        setWindow(metaWindow) {
            this.metaWindowIdentifier = Me.msWindowManager.buildMetaWindowIdentifier(
                metaWindow
            );
            this.metaWindow = metaWindow;
            metaWindow.msWindow = this;
            this.reactive = false;
            this.registerOnMetaWindowSignals();
            if (this.msWorkspace) {
                let workspace = Me.msWorkspaceManager.getWorkspaceOfMsWorkspace(
                    this.msWorkspace
                );
                if (workspace && metaWindow.get_workspace() != workspace) {
                    metaWindow.change_workspace(workspace);
                }
                WindowUtils.updateTitleBarVisibility(this.metaWindow);
            }

            this.onMetaWindowActorExist().then((_) => {
                this.windowClone.set_source(
                    metaWindow.get_compositor_private()
                );
                if (this.followMetaWindow) {
                    this.mimicMetaWindowPositionAndSize();
                } else {
                    this.updateMetaWindowPositionAndSize();
                }
            });
            if (this.placeholder.get_parent()) {
                this.fadeOutPlaceholder();
            }
            this.emit('title-changed', this.title);
        }

        registerOnMetaWindowSignals() {
            if (!this.metaWindow) return;
            this.metaWindowSignals.push(
                this.metaWindow.connect('unmanaged', (_) => {
                    this.unsetWindow();
                }),
                this.metaWindow.connect('notify::title', (_) => {
                    this.emit('title-changed', this.title);
                }),
                this.metaWindow.connect('position-changed', () => {
                    if (!this.followMetaWindow) return;
                    this.mimicMetaWindowPositionAndSize();
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

        unsetWindow() {
            this.unregisterOnMetaWindowSignals();
            this.reactive = true;
            delete this.metaWindow;
            delete this.metaWindowUpdateInProgress;
            this.add_child(this.placeholder);
            this.emit('title-changed', this.title);
        }

        takeFocus() {
            if (this.metaWindow) {
                this.metaWindow.activate(global.get_current_time());
            } else {
                this.grab_key_focus();
            }
        }

        show() {
            super.show();
            if (this.metaWindow && this.metaWindow.minimized) {
                this.metaWindow.unminimize();
            }
        }

        hide() {
            super.hide();
            if (this.metaWindow && !this.metaWindow.minimized) {
                this.metaWindow.minimize();
            }
        }

        kill() {
            let promise = new Promise((resolve) => {
                if (this.metaWindow) {
                    this.metaWindow.connect('unmanaged', (_) => {
                        resolve();
                    });
                    this.metaWindow.delete(global.get_current_time());
                } else {
                    resolve();
                }
            });
            promise.then(() => {
                this._onDestroy();
                this.msWorkspace.removeMsWindow(this);
                this.disconnect(this.destroyId);
                this.destroy();
            });
        }

        fadeOutPlaceholder() {
            const onComplete = () => {
                this.placeholder.set_opacity(255);
                this.remove_child(this.placeholder);
                this.placeholder.reset();
            };
            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(this.placeholder, {
                    opacity: 0,
                    time: 0.25,
                    transition: 'easeOutQuad',
                    onComplete,
                });
            } else {
                this.placeholder.ease({
                    opacity: 0,
                    duration: 250,
                    mode: Clutter.AnimationMode.EASE_OUT_CUBIC,
                    onComplete,
                });
            }
        }

        freeze() {
            /*             if (this.metaWindow) return;
            let actorContent = Shell.util_get_content_for_window_actor(
                this.metaWindow.get_,
                oldFrameRect
              );
              let actorClone = new St.Widget({ content: actorContent });
              actorClone.set_offscreen_redirect(Clutter.OffscreenRedirect.ALWAYS); */
        }

        _onDestroy() {
            log('msWindow to its own destroy');
            this.unregisterOnMetaWindowSignals();
            Me.disconnect(this.superConnectId);
        }
    }
);

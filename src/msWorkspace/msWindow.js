const { Shell, Meta, GLib, Clutter, GObject, Gio } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { AppPlaceholder } = Me.imports.src.widget.appPlaceholder;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const Tweener = imports.ui.tweener;

/* exported MsWindow */

var MsWindow = GObject.registerClass(
    {
        GTypeName: 'MsWindow',
        Signals: {
            title_changed: {
                param_types: [GObject.TYPE_STRING]
            },
            dragged_changed: {
                param_types: [GObject.TYPE_BOOLEAN]
            }
        }
    },
    class MsWindow extends Clutter.Actor {
        _init(appId, metaWindowDescription, metaWindow) {
            log('New MsWindow', appId, metaWindowDescription, metaWindow);
            super._init({ reactive: true });
            let appSys = Shell.AppSystem.get_default();
            this.app = appSys.lookup_app(appId);
            this.metaWindowDescription = metaWindowDescription;
            this.windowClone = new Clutter.Clone();
            this.placeholder = new AppPlaceholder(this.app);
            this.metaWindowSignals = [];
            this.followMetaWindow = false;
            this.dragged = false;
            this.add_child(this.windowClone);
            if (metaWindow) {
                this.setWindow(metaWindow);
            }

            this.registerToEvents();
        }

        get title() {
            return this.metaWindow
                ? this.metaWindow.get_title()
                : this.app.get_name();
        }

        get tiledMaximized() {
            if (this.actor === this.placeholder) {
                return this._tiledMaximized;
            } else {
                return (
                    this.metaWindow.maximized_horizontally &&
                    this.metaWindow.maximized_vertically
                );
            }
        }

        get isDialog() {
            if (!this.metaWindow) return false;
            let dialogTypes = [
                Meta.WindowType.DIALOG,
                Meta.WindowType.MODAL_DIALOG,
                Meta.WindowType.UTILITY
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
                schema_id: 'org.gnome.desktop.wm.preferences'
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
                                log('GRAB', this.title);
                                this.dragged = true;
                                originMsWindowPosition = this.get_position();
                                stageMotionEventId = global.stage.connect(
                                    'captured-event',
                                    (_, event) => {
                                        const [
                                            currentX,
                                            currentY
                                        ] = event.get_coords();
                                        const diffX = originX - currentX;
                                        const diffY = originY - currentY;
                                        const [
                                            originMsWindowX,
                                            originMsWindowY
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
            Me.connect('super-pressed-change', (_, pressed) => {
                this.reactive = pressed;
            });
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

        get metaWindowActorIsAvailable() {
            let actor = this.metaWindow.get_compositor_private();
            if (actor && actor.get_texture()) {
                return true;
            } else {
                return false;
            }
        }

        async onMetaWindowActorExist() {
            return new Promise((resolve, reject) => {
                let actor = this.metaWindow.get_compositor_private();
                if (actor && actor.get_texture()) {
                    resolve(actor);
                } else {
                    this.delayGetMetaWindowActor(0, resolve, reject);
                }
            });
        }

        async onMetaWindowActorMapped() {
            return this.onMetaWindowActorExist().then(metaWindowActor => {
                if (metaWindowActor.mapped) {
                    return metaWindowActor;
                } else {
                    log('wait for it to be mapped');
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
                const contentBox = this.get_content_box();
                this.placeholder.set_size(
                    contentBox.get_width(),
                    contentBox.get_height()
                );
                this.placeholder.allocate(this.get_content_box(), flags);
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
            //If an update is already in progress discard all incoming call
            if (this.metaWindowUpdateInProgress) return;
            this.metaWindowUpdateInProgress = true;
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                //Wait for the WindowActor to be available
                this.onMetaWindowActorMapped().then(() => {
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
                        this.x,
                        this.y,
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
            this.metaWindowDescription = metaWindow.get_description();
            this.metaWindow = metaWindow;
            metaWindow.msWindow = this;
            this.reactive = false;
            this.registerOnMetaWindowSignals();
            this.onMetaWindowActorExist().then(metaWindowActor => {
                this.windowClone.set_source(
                    metaWindow.get_compositor_private()
                );
                this.mimicMetaWindowPositionAndSize();
            });
            if (this.showPlaceholder) {
                this.hideMetaWindow();
                this.onMetaWindowActorMapped().then(metaWindowActor => {
                    log('WINDOW READY');
                    this.switchActorToMetaWindowActor(true);
                });
            }
        }

        registerOnMetaWindowSignals() {
            if (!this.metaWindow) return;
            this.metaWindowSignals.push(
                this.metaWindow.connect('unmanaged', _ => {
                    log('unmanaged', this.title);
                    this.unsetWindow();
                }),
                this.metaWindow.connect('notify::title', _ => {
                    this.emit('title-changed', this.title);
                }),
                this.metaWindow.connect('position-changed', () => {
                    if (!this.followMetaWindow) return;
                    this.mimicMetaWindowPositionAndSize();
                }),
                this.metaWindow.connect('focus', () => {
                    log(this.title, 'focus');
                })
            );
        }

        unregisterOnMetaWindowSignals() {
            if (!this.metaWindow) return;
            this.metaWindowSignals.forEach(signalId => {
                this.metaWindow.disconnect(signalId);
            });
            this.metaWindowSignals = [];
        }

        unsetWindow() {
            this.unregisterOnMetaWindowSignals();
            this.reactive = true;
            delete this.metaWindow;
            this.add_child(this.placeholder);
            this.emit('title-changed', this.title);
        }

        takeFocus() {
            log('TAKE_FOCUS', this.title);
            if (this.metaWindow) {
                //this.metaWindow.focus(global.get_current_time());
            } else {
                this.grab_key_focus();
            }
        }

        _onDestroy() {
            log('MsWindow destroy', this.metaWindow, this.title);
        }
    }
);

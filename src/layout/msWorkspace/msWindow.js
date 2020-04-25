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
            super._init({
                reactive: true,
                width: 200,
                height: 200,
            });
            this.destroyId = this.connect(
                'destroy',
                this._onDestroy.bind(this)
            );
            this.app = app;
            this.metaWindowIdentifier = metaWindowIdentifier;
            this.windowClone = new Clutter.Clone();
            this.windowClone.set_background_color(
                new Clutter.Color({ red: 255, alpha: 255 })
            );
            this.placeholder = new AppPlaceholder(this.app);
            this.placeholder.connect('clicked', (_) => {
                this.emit('request-new-meta-window');
            });
            this.metaWindowSignals = [];
            this.dragged = false;
            this.msContent = new MsWindowContent(
                this.placeholder,
                this.windowClone
            );
            this.previousResize = {
                width: 0,
                height: 0,
            };
            this.previousRealSize = {
                width: 0,
                height: 0,
            };
            this.connect('notify::position', () => {
                if (this.propagate && !this.dragged && !this.followMetaWindow) {
                    log('this notify::position');
                    this.updateMetaWindowPositionAndSize();
                }
            });
            this.msContent.connect('notify::position', () => {
                log('msContent notify::position');
                if (!this.followMetaWindow) {
                    this.updateMetaWindowPositionAndSize();
                }
            });
            this.msContent.connect('notify::size', () => {
                log('msContent notify::size');

                if (this.propagate && !this.followMetaWindow) {
                    this.updateMetaWindowPositionAndSize();
                }
            });
            this.add_child(this.msContent);
            if (metaWindow) {
                this.setWindow(metaWindow);
            }

            this.registerToEvents();
        }

        get propagate() {
            return true;
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
            let buttonPressed = false;
            let originPointerAnchor = null;
            let originPointerCoords = null;
            let stageMotionEventId = null;
            this.wmPreferenceSettings = new Gio.Settings({
                schema_id: 'org.gnome.desktop.wm.preferences',
            });
            const listenToStageEvent = () => {
                stageMotionEventId = global.stage.connect(
                    'captured-event',
                    (_, event) => {
                        const [currentX, currentY] = event.get_coords();

                        this.set_position(
                            Math.round(
                                currentX - this.width * originPointerAnchor[0]
                            ),
                            Math.round(
                                currentY - this.height * originPointerAnchor[1]
                            )
                        );

                        if (event.type() === Clutter.EventType.BUTTON_RELEASE) {
                            buttonPressed = false;
                            if (this.dragged) {
                                this.dragged = false;
                                if (this.metaWindow) {
                                    this.metaWindow.unminimize();
                                    this.metaWindow
                                        .get_compositor_private()
                                        .show();
                                    this.updateMetaWindowPositionAndSize();
                                }

                                this.emit('dragged-changed', this.dragged);
                            }
                            global.stage.disconnect(stageMotionEventId);
                            stageMotionEventId = null;
                        }

                        return Clutter.EVENT_PROPAGATE;
                    }
                );
            };
            this.connect('event', (_, event) => {
                const focusOnHover =
                    this.wmPreferenceSettings.get_enum('focus-mode') > 0;
                switch (event.type()) {
                    case Clutter.EventType.BUTTON_PRESS:
                        buttonPressed = true;
                        originPointerCoords = event.get_coords();
                        let [stageX, stageY] = event.get_coords();
                        let [
                            _,
                            relativeX,
                            relativeY,
                        ] = this.transform_stage_point(stageX, stageY);
                        log('relative', relativeX, relativeY);
                        originPointerAnchor = [
                            relativeX / this.width,
                            relativeY / this.height,
                        ];
                        log(originPointerAnchor);
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
                                if (this.metaWindow) {
                                    this.metaWindow.minimize();
                                    this.metaWindow
                                        .get_compositor_private()
                                        .hide();
                                }

                                listenToStageEvent();
                                this.emit('dragged-changed', this.dragged);
                            }
                        }
                        break;
                }

                //log('EVENT', this.title, event.type());
            });
            this.Keymap = imports.gi.Gdk.Keymap.get_default();
            this.superConnectId = this.Keymap.connect('state_changed', (_) => {
                if (!this.msWorkspace) log(this.title);
                let isSuperPressed = this.Keymap.get_modifier_state() === 64;
                this.reactive =
                    (!this.metaWindow || isSuperPressed) &&
                    this.msWorkspace.tilingLayout.constructor.key !== 'float';
            });
            this.grabEndSignal = global.display.connect('grab-op-end', () => {
                if (this.metaWindow) {
                    log('grab-open-end');
                    //this.updateMetaWindowPositionAndSize();
                }
            });
            /* this.superConnectId = Me.connect(
                'super-pressed-change',
                (_, pressed) => {
                    
                }
            ); */
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
            log(
                'allocate msWindow',
                this.title,
                box.x1,
                box.y1,
                box.get_width(),
                box.get_height()
            );
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            this.msContent.allocate(box, flags);
        }

        getRelativeMetaWindowPosition() {
            let contentBox = this.msContent.get_allocation_box();
            let x = this.x + contentBox.x1;
            let y = this.y + contentBox.y1;
            let currentFrameRect = this.metaWindow.get_frame_rect();
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
        async updateMetaWindowPositionAndSize() {
            if (!this.metaWindow) return Promise.resolve();
            //If an update is already in progress discard all incoming call
            if (this.metaWindowUpdateInProgressPromise) {
                log('update already in progress');
                return this.metaWindowUpdateInProgressPromise;
            }
            log('step 1 call');
            //Wait for the WindowActor to be available
            this.metaWindowUpdateInProgressPromise = new Promise((resolve) => {
                GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                    log('step 2 delay');
                    resolve();
                });
            })
                .then(() => {
                    return this.onMetaWindowActorExist().then(() => {
                        if (!this.metaWindow) return;
                        log('step 3 actor exist');
                        const workArea = Main.layoutManager.getWorkAreaForMonitor(
                            this.msWorkspace.monitor.index
                        );
                        let contentBox = this.msContent.get_allocation_box();

                        //Check if the actor position is corresponding of the maximized state (is equal of the size of the workArea)
                        const isMaximized =
                            this.x === workArea.x &&
                            this.y === workArea.y &&
                            this.width === workArea.width &&
                            this.height === workArea.height;

                        //Set the metaWindow maximized if it's the case
                        let moveTo = this.getRelativeMetaWindowPosition();
                        let resizeTo = {
                            width: contentBox.get_width(),
                            height: contentBox.get_height(),
                        };
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
                        let currentFrameRect = this.metaWindow.get_frame_rect();
                        //Set the size accordingly
                        log(
                            'resize metaWindow to ',
                            moveTo.x,
                            moveTo.y,
                            resizeTo.width,
                            resizeTo.height,
                            ' from: ',
                            currentFrameRect.x,
                            currentFrameRect.y,
                            currentFrameRect.width,
                            currentFrameRect.height
                        );
                        //return new Promise((resolve, reject) => {});

                        let willMove =
                            currentFrameRect.x != moveTo.x ||
                            currentFrameRect.y != moveTo.y;

                        let willResize =
                            currentFrameRect.width !== resizeTo.width ||
                            currentFrameRect.height !== resizeTo.height;

                        log('WILL RESIZE:', willResize);

                        if (!willMove && !willResize) {
                            return;
                        }
                        let promises = [];
                        if (willMove) {
                            promises.push(
                                new Promise((resolve) => {
                                    let connectId = this.metaWindow.connect(
                                        'position-changed',
                                        () => {
                                            log('did move');
                                            this.metaWindow.disconnect(
                                                connectId
                                            );
                                            resolve();
                                        }
                                    );
                                })
                            );
                        }
                        if (willResize) {
                            this.previousResize = resizeTo;
                            promises.push(
                                new Promise((resolve) => {
                                    let connectId = this.metaWindow.connect(
                                        'size-changed',
                                        () => {
                                            log('did resize');
                                            this.previousRealSize = {
                                                width: this.metaWindow.get_frame_rect()
                                                    .width,
                                                height: this.metaWindow.get_frame_rect()
                                                    .height,
                                            };
                                            this.metaWindow.disconnect(
                                                connectId
                                            );
                                            resolve();
                                        }
                                    );
                                    // Gnome-terminal decide his own size so in some case the size-changed it's not called
                                    GLib.timeout_add(
                                        GLib.PRIORITY_DEFAULT,
                                        100,
                                        () => {
                                            log('did resize fake');
                                            resolve();
                                        }
                                    );
                                })
                            );
                        }
                        log('step 4 call resize');

                        this.metaWindow.move_resize_frame(
                            true,
                            moveTo.x,
                            moveTo.y,
                            resizeTo.width,
                            resizeTo.height
                        );
                        return Promise.all(promises);
                    });
                })
                .then(() => {
                    log('step 5 delete promise');
                    delete this.metaWindowUpdateInProgressPromise;
                });

            return this.metaWindowUpdateInProgressPromise;
        }

        mimicMetaWindowPositionAndSize() {
            if (this.dragged) return;
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.metaWindow.get_monitor()
            );
            const currentFrameRect = this.metaWindow.get_frame_rect();
            this.set_position(
                currentFrameRect.x - workArea.x - this.msContent.x,
                currentFrameRect.y - workArea.y - this.msContent.y
            );
            this.set_size(
                currentFrameRect.width + this.msContent.x * 2,
                currentFrameRect.height + this.msContent.y * 2
            );
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
                    if (this.followMetaWindow) {
                        this.mimicMetaWindowPositionAndSize();
                    } else {
                        if (!this.dragged) {
                            let wantedPosition = this.getRelativeMetaWindowPosition();
                            if (
                                wantedPosition.x !=
                                    this.metaWindow.get_frame_rect().x ||
                                wantedPosition.y !=
                                    this.metaWindow.get_frame_rect().y
                            ) {
                                this.updateMetaWindowPositionAndSize();
                            }
                        }
                    }
                }),
                this.metaWindow.connect('size-changed', () => {
                    log(
                        'meta window size changed',
                        this.metaWindow.get_frame_rect().width,
                        this.metaWindow.get_frame_rect().height
                    );
                    if (this.followMetaWindow) {
                        this.mimicMetaWindowPositionAndSize();
                    } else if (
                        this.metaWindow.get_frame_rect().width !=
                            this.previousRealSize.width ||
                        this.metaWindow.get_frame_rect().height !=
                            this.previousRealSize.height
                    ) {
                        this.updateMetaWindowPositionAndSize();
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

        async setWindow(metaWindow) {
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
            }

            await this.onMetaWindowActorExist();
            await this.onMetaWindowFirstFrameDrawn();
            WindowUtils.updateTitleBarVisibility(this.metaWindow);
            this.windowClone.set_source(metaWindow.get_compositor_private());

            await (this.followMetaWindow
                ? Promise.resolve(this.mimicMetaWindowPositionAndSize())
                : this.updateMetaWindowPositionAndSize());

            if (this.placeholder.get_parent()) {
                this.fadeOutPlaceholder();
            }
            this.emit('title-changed', this.title);
        }

        unsetWindow() {
            this.unregisterOnMetaWindowSignals();
            this.reactive = true;
            delete this.metaWindow;
            delete this.metaWindowUpdateInProgressPromise;
            if (!this.placeholder.get_parent()) {
                this.msContent.add_child(this.placeholder);
            }
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
            this.Keymap.disconnect(this.superConnectId);
            global.display.disconnect(this.grabEndSignal);
            //Me.disconnect(this.superConnectId);
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
            log('allocate msContent', box.get_width(), box.get_height());
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            let metaWindow = this.get_parent().metaWindow;
            if (metaWindow) {
                let windowFrameRect = metaWindow.get_frame_rect();
                let windowActor = metaWindow.get_compositor_private();
                //The WindowActor position are not the same as the real window position, I'm not sure why. We need to determine the offset to correctly position the windowClone inside the msWindow container;
                if (windowActor) {
                    let cloneBox = new Clutter.ActorBox();
                    cloneBox.x1 = windowActor.x - windowFrameRect.x;
                    cloneBox.y1 = windowActor.y - windowFrameRect.y;
                    cloneBox.x2 = cloneBox.x1 + windowActor.width;
                    cloneBox.y2 = cloneBox.y1 + windowActor.height;
                    this.clone.allocate(cloneBox, flags);
                } else {
                    log('windowactor is missing', this.title);
                }
            }

            if (this.placeholder.get_parent() === this) {
                this.placeholder.set_size(box.get_width(), box.get_height());
                this.placeholder.allocate(box, flags);
            }
        }
    }
);

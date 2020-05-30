const { St, Meta, GLib, Clutter, GObject, Gio } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { AppPlaceholder } = Me.imports.src.widget.appPlaceholder;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const WindowUtils = Me.imports.src.utils.windows;
const { AddLogToFunctions, log, logFocus } = Me.imports.src.utils.debug;
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
        _init(app, metaWindowIdentifier, metaWindow) {
            AddLogToFunctions(this);
            super._init({
                reactive: true,
            });
            this.destroyId = this.connect(
                'destroy',
                this._onDestroy.bind(this)
            );
            this.app = app;
            this.dialogs = [];
            this.metaWindowIdentifier = metaWindowIdentifier;
            this.windowClone = new Clutter.Clone();

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
            this.connect('notify::visible', () => {
                this.updateMetaWindowVisibility();
            });
            this.connect('notify::mapped', () => {
                this.updateMetaWindowVisibility();
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
            return Me.msWindowManager.isMetaWindowDialog(this.metaWindow);
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
                        if (
                            this.dragged ||
                            (this.metaWindow && this.metaWindow.fullscreen)
                        )
                            return;
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
            if (this.Keymap) {
                this.superConnectId = this.Keymap.connect(
                    'state_changed',
                    (_) => {
                        if (!this.msWorkspace) log(this.title);
                        let isSuperPressed =
                            this.Keymap.get_modifier_state() === 64;
                        this.reactive =
                            (!this.metaWindow || isSuperPressed) &&
                            this.msWorkspace.tilingLayout.constructor.key !==
                                'float';
                    }
                );
            }

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

        delayGetMetaWindowActor(metaWindow, delayedCount, resolve, reject) {
            log('delay actor !', delayedCount);

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

        get followMetaWindow() {
            if (!this.msWorkspace) return false;
            return (
                this.isDialog ||
                (this.msWorkspace &&
                    this.msWorkspace.tilingLayout.constructor.key ===
                        'float') ||
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

        async onMetaWindowActorMapped() {
            return this.onMetaWindowActorExist(this.metaWindow).then(
                (metaWindowActor) => {
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
                                    metaWindowActor.disconnect(
                                        waitToBeMappedId
                                    );
                                }
                            );
                        });
                    }
                }
            );
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
            let contentBox = new Clutter.ActorBox();
            contentBox.x2 = box.get_width();
            contentBox.y2 = box.get_height();
            this.msContent.allocate(contentBox, flags);
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.msWorkspace.monitor.index
            );
            this.dialogs.forEach((dialog) => {
                let dialogBox = new Clutter.ActorBox();
                let dialogFrame = dialog.metaWindow.get_buffer_rect();
                dialogBox.x1 = dialogFrame.x - box.x1 - workArea.x;
                dialogBox.x2 = dialogBox.x1 + dialogFrame.width;
                dialogBox.y1 = dialogFrame.y - box.y1 - workArea.y;
                dialogBox.y2 = dialogBox.y1 + dialogFrame.height;
                dialog.clone.allocate(dialogBox, flags);
            });
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

        /*
         * This function is called every time the position or the size of the actor change and is meant to update the metaWindow accordingly
         */
        updateMetaWindowPositionAndSize() {
            if (
                !this.metaWindow ||
                this.followMetaWindow ||
                this.width === 0 ||
                this.height === 0 ||
                !this.metaWindow.firstFrameDrawn
            ) {
                return;
            }

            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.msWorkspace.monitor.index
            );
            let contentBox = this.msContent.allocation;

            //Check if the actor position is corresponding of the maximized state (is equal of the size of the workArea)
            const isMaximized =
                this.x === workArea.x &&
                this.y === workArea.y &&
                this.width === workArea.width &&
                this.height === workArea.height;

            /*  if (isMaximized) {
                if (this.metaWindow.maximized) return;
                return this.metaWindow.maximize(Meta.MaximizeFlags.BOTH);
            }*/
            //Or remove the maximized if it's not
            let currentFrameRect = this.metaWindow.get_frame_rect();

            if (this.metaWindow.maximized_horizontally) {
                this.metaWindow.unmaximize(Meta.MaximizeFlags.BOTH);
            }
            let moveTo, resizeTo;
            if (this.metaWindow.resizeable) {
                //Set the metaWindow maximized if it's the case
                moveTo = this.getRelativeMetaWindowPosition(this.metaWindow);
                resizeTo = {
                    width: this.width,
                    height: this.height,
                };
            } else {
                let relativePosition = this.getRelativeMetaWindowPosition(
                    this.metaWindow
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

            //Set the size accordingly
            logFocus(
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

            this.metaWindow.move_resize_frame(
                true,
                moveTo.x,
                moveTo.y,
                resizeTo.width,
                resizeTo.height
            );
            this.resizeDialogs();
        }

        set_position(x, y) {
            if (this.followMetaWindow) return;
            super.set_position(x, y);
        }

        set_size(width, height) {
            if (this.followMetaWindow) return;
            super.set_size(width, height);
        }

        mimicMetaWindowPositionAndSize() {
            if (this.dragged) return;
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
                    log(
                        'meta window size changed',
                        this.metaWindow.get_frame_rect().width,
                        this.metaWindow.get_frame_rect().height
                    );
                    if (this.followMetaWindow) {
                        this.mimicMetaWindowPositionAndSize();
                    }
                }),
                this.metaWindow.connect('notify::fullscreen', () => {
                    log('NOTIFY FULLSCREEN !!!!', this.followMetaWindow);
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

        addDialog(metaWindow) {
            if (metaWindow.get_monitor() != this.msWorkspace.monitor.index) {
                metaWindow.move_to_monitor(this.msWorkspace.monitor.index);
            }
            let clone = new Clutter.Clone({
                source: metaWindow.get_compositor_private(),
            });

            let dialog = {
                metaWindow,
                clone,
            };
            metaWindow.connect('unmanaged', () => {
                this.dialogs.splice(this.dialogs.indexOf(dialog), 1);
            });
            metaWindow.msWindow = this;
            this.dialogs.push(dialog);
            this.add_child(clone);
            this.resizeDialogs();
        }

        resizeDialogs() {
            this.dialogs.forEach((dialog) => {
                let { metaWindow } = dialog;
                if (metaWindow.resizeable) {
                    log('resizeDialog');
                    let frame = metaWindow.get_frame_rect();
                    let minWidth = Math.min(
                        Math.max(frame.width, this.width * 0.8),
                        this.width
                    );
                    log('minWidth', frame.width, this.width, minWidth);
                    let minHeight = Math.min(
                        Math.max(frame.height, this.height * 0.8),
                        this.height
                    );
                    log('minHeight', frame.height, this.height, minHeight);

                    const workArea = Main.layoutManager.getWorkAreaForMonitor(
                        this.msWorkspace.monitor.index
                    );
                    metaWindow.move_resize_frame(
                        true,
                        workArea.x + this.x + (this.width - minWidth) / 2,
                        workArea.y + this.y + (this.height - minHeight) / 2,
                        minWidth,
                        minHeight
                    );
                }
            });
        }

        async whenIsMapped() {
            return new Promise((resolve) => {
                if (this.mapped) {
                    return resolve();
                } else {
                    let connectId = this.connect('notify::mapped', () => {
                        log('notify::mapped');
                        if (this.mapped) {
                            this.disconnect(connectId);
                            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                                if (!Me.loaded) return;
                                return resolve();
                            });
                        }
                    });
                }
            });
        }

        setMsWorkspace(msWorkspace) {
            this.msWorkspace = msWorkspace;
            if (this.metaWindow) {
                WindowUtils.updateTitleBarVisibility(this.metaWindow);
            }
            logFocus('updateMetaWindowPositionAndSize setMsWorkspace');

            this.followMetaWindow
                ? this.mimicMetaWindowPositionAndSize()
                : this.updateMetaWindowPositionAndSize();
        }
        async setWindow(metaWindow) {
            logFocus('setWindow', this);

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

            await this.onMetaWindowActorExist(this.metaWindow);
            await this.onMetaWindowFirstFrameDrawn();
            WindowUtils.updateTitleBarVisibility(this.metaWindow);
            this.windowClone.set_source(metaWindow.get_compositor_private());
            if (!this.metaWindow.resizeable) {
                this.msContent.add_style_class_name('surface-darker');
            }
            logFocus('updateMetaWindowPositionAndSize setWindow');
            this.followMetaWindow
                ? this.mimicMetaWindowPositionAndSize()
                : this.updateMetaWindowPositionAndSize();

            if (this.placeholder.get_parent()) {
                this.fadeOutPlaceholder();
            }
            this.emit('title-changed', this.title);
        }

        unsetWindow() {
            logFocus('unsetWindow', this);

            this.unregisterOnMetaWindowSignals();
            this.reactive = true;
            delete this.metaWindow;
            delete this.metaWindowUpdateInProgressPromise;
            if (this.msContent.has_style_class_name('surface-darker')) {
                this.msContent.remove_style_class_name('surface-darker');
            }
            if (!this.placeholder.get_parent()) {
                this.msContent.add_child(this.placeholder);
            }
            this.emit('title-changed', this.title);
        }

        takeFocus() {
            if (this.dialogs.length) {
                this.dialogs[this.dialogs.length - 1].metaWindow.activate(
                    global.get_current_time()
                );
            } else if (this.metaWindow) {
                this.metaWindow.activate(global.get_current_time());
            } else {
                this.grab_key_focus();
            }
        }

        kill() {
            logFocus('kill', this);
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
            promise.then(() => {
                logFocus('in then');

                delete this.metaWindow;
                this._onDestroy();
                logFocus('just before');
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
                    (!this.visible || !this.mapped) &&
                    !Me.msWorkspaceManager.noUImode;

                if (shouldBeHidden) {
                    this.metaWindow.minimize();
                } else {
                    this.metaWindow.unminimize();
                }
            }
        }

        _onDestroy() {
            logFocus('msWindow to its own destroy');
            this.unregisterOnMetaWindowSignals();
            logFocus('before keymap disconnect', this.Keymap);
            if (this.Keymap) {
                this.Keymap.disconnect(this.superConnectId);
            }
            logFocus('before global disconnect');

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
                    if (metaWindow.resizeable || metaWindow.fullscreen) {
                        cloneBox.x1 = windowActor.x - windowFrameRect.x;
                        cloneBox.y1 = windowActor.y - windowFrameRect.y;
                        cloneBox.x2 = cloneBox.x1 + windowActor.width;
                        cloneBox.y2 = cloneBox.y1 + windowActor.height;
                    } else {
                        const monitor = this.get_parent().msWorkspace.monitor;
                        const workArea = Main.layoutManager.getWorkAreaForMonitor(
                            monitor.index
                        );
                        cloneBox.x1 =
                            windowActor.x - workArea.x - this.get_parent().x;
                        cloneBox.y1 =
                            windowActor.y - workArea.y - this.get_parent().y;
                        cloneBox.x2 = cloneBox.x1 + windowActor.width;
                        cloneBox.y2 = cloneBox.y1 + windowActor.height;
                    }

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

const { Shell, Meta, GLib, Clutter, GObject } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { AppPlaceholder } = Me.imports.widget.appPlaceholder;
const { ShellVersionMatch } = Me.imports.utils.compatibility;
const Tweener = imports.ui.tweener;

/* exported MsWindow */

var MsWindow = GObject.registerClass(
    {
        GTypeName: 'MsWindow'
    },
    class MsWindow extends Clutter.Actor {
        _init(appId, metaWindowDescription, metaWindow) {
            super._init();
            let appSys = Shell.AppSystem.get_default();
            let app = appSys.lookup_app(appId);
            let appPlaceholder = new AppPlaceholder(app);
            this.windowClone = new Clutter.Clone();
            this.placeholder = appPlaceholder;
            this.add_child(this.windowClone);
            //this.add_child(this.placeholder);
            this.showPlaceholder = false;
            this.app = app;
            this.metaWindowDescription = metaWindowDescription;
            if (metaWindow) {
                this.setWindow(metaWindow);
            } else {
                let windowFound = global
                    .get_window_actors()
                    .map(windowActor => {
                        return windowActor.metaWindow;
                    })
                    .find(metaWindow => {
                        return (
                            metaWindow.get_description() ===
                            this.metaWindowDescription
                        );
                    });
                if (windowFound) {
                    this.setWindow(windowFound);
                }
            }
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

        switchActorToPlaceholder() {
            /* if (this.showPlaceholder) return;
        const parent = this.actor.get_parent();
        const allocationBox = this.getAllocation();
        const previousActor = this.actor;
        this.showPlaceholder = true;

        parent.insert_child_above(this.actor, previousActor);
        this.setPositionAndSize(
            allocationBox.x,
            allocationBox.y,
            allocationBox.width,
            allocationBox.height
        );
        this.hideMetaWindow();
        this.placeholder.show(); */
        }

        switchActorToMetaWindowActor(animated) {
            /* if (!this.showPlaceholder) return;
        const parent = this.actor.get_parent();
        const allocationBox = this.getAllocation();
        const previousActor = this.actor;
        this.showPlaceholder = false;
        parent.insert_child_below(this.actor, previousActor);
        this.setPositionAndSize(
            allocationBox.x,
            allocationBox.y,
            allocationBox.width,
            allocationBox.height
        );
        if (!animated) {
            this.showMetaWindow();
            this.placeholder.get_parent().remove_child(this.placeholder);
        } else {
            this.showMetaWindow();
            if (ShellVersionMatch('3.32')) {
                Tweener.addTween(this.placeholder, {
                    opacity: 0,
                    time: 0.25,
                    transition: 'easeOutQuad',
                    onComplete: () => {
                        this.placeholder.set_opacity(255);
                        this.placeholder
                            .get_parent()
                            .remove_child(this.placeholder);
                    }
                });
            } else {
                this.placeholder.ease({
                    opacity: 0,
                    duration: 250,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    onComplete: () => {
                        this.placeholder.set_opacity(255);
                        this.placeholder
                            .get_parent()
                            .remove_child(this.placeholder);
                    }
                });
            }
        } */
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
                this.placeholder.allocate(this.get_content_box(), flags);
            }
        }

        set_position(x, y) {
            super.set_position(x, y);
            this.updateMetaWindowPositionAndSize();
        }

        set_size(width, height) {
            super.set_size(width, height);
            this.updateMetaWindowPositionAndSize();
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

        togglePlaceholder() {
            /* 
        const parent = this.actor.get_parent();
        const allocationBox = this.getAllocation();
        const previousActor = this.actor;
        this.showPlaceholder = !this.showPlaceholder;
        if (previousActor === this.placeholder) {
            parent.insert_child_below(this.actor, previousActor);
        } else {
            parent.insert_child_above(this.actor, previousActor);
        }
        this.setPositionAndSize(
            allocationBox.x,
            allocationBox.y,
            allocationBox.width,
            allocationBox.height
        );
        if (previousActor === this.placeholder) {
            this.showMetaWindow();
            this.placeholder.hide();
        } else {
            this.hideMetaWindow();
            this.placeholder.show();
        } */
        }

        setWindow(metaWindow) {
            this.metaWindowDescription = metaWindow.get_description();
            this.metaWindow = metaWindow;
            metaWindow.msWindow = this;
            this.windowClone.set_source(
                metaWindow.get_compositor_private().first_child
            );
            metaWindow.connect('unmanaged', _ => {
                log('unmanaged', this.title);
                this.unsetWindow();
            });
            if (this.showPlaceholder) {
                this.hideMetaWindow();
                this.onMetaWindowActorMapped().then(metaWindowActor => {
                    log('WINDOW READY');
                    this.switchActorToMetaWindowActor(true);
                });
            }
        }

        unsetWindow() {
            delete this.metaWindow;
            this.add_child(this.placeholder);
        }

        /* hideMetaWindow() {
            log('hideMeta');
            Main.wm.skipNextEffect(this.metaWindow.get_compositor_private());
            this.metaWindow.minimize();
        }

        showMetaWindow() {
            log('showMeta');
            Main.wm.skipNextEffect(this.metaWindow.get_compositor_private());
            this.metaWindow.unminimize();
        }

        getAllocation() {
            if (this.actor === this.placeholder) {
                return this.placeholder.get_allocation_box();
            } else {
                return this.metaWindow.get_frame_rect();
            }
        } */

        /* setPosition(x, y) {
            this.position = {
                x,
                y
            };
            if (this.actor === this.placeholder) {
                super.setPosition(x, y);
            } else {
                this.metaWindow.move_frame(true, x, y);
            }
        }

        setPositionAndSize(x, y, width, height) {
            this.position = {
                x,
                y
            };
            this.size = {
                width,
                height
            };
            if (this.actor === this.placeholder) {
                super.setPositionAndSize(x, y, width, height);
            } else {
                this.metaWindow.move_resize_frame(true, x, y, width, height);
            }
        }

        tileMaximize() {
            if (this.actor === this.placeholder) {
                this._tiledMaximized = true;
                super.tileMaximize();
            } else {
                Main.wm.skipNextEffect(this.actor);
                this.metaWindow.maximize(Meta.MaximizeFlags.BOTH);
            }
        }

        tileLeft() {}

        tileRight() {} */
    }
);

const { Shell, Meta } = imports.gi;
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SuperDrawable } = Me.imports.superWorkspace.superDrawable;
const { AppPlaceholder } = Me.imports.widget.appPlaceholder;

/* exported SuperWindow */

var SuperWindow = class SuperWindow extends SuperDrawable {
    constructor(appId, metaWindowDescription, metaWindow) {
        let appSys = Shell.AppSystem.get_default();
        let app = appSys.lookup_app(appId);
        let appPlaceholder = new AppPlaceholder(app);
        super(app.get_name(), appPlaceholder);
        this.app = app;
        this.placeholder = appPlaceholder;
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
        this.position = {
            x: 0,
            y: 0
        };
        this.size = {
            width: 0,
            height: 0
        };
    }

    get title() {
        return this.metaWindow ? this.metaWindow.get_title() : this._title;
    }

    get actor() {
        return this.metaWindow
            ? this.metaWindow.get_compositor_private()
            : this.placeholder;
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

    setWindow(metaWindow) {
        this.metaWindowDescription = metaWindow.get_description();
        this.metaWindow = metaWindow;
        metaWindow.superWindow = this;
    }

    setPosition(x, y) {
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
        this.tiledMaximized = true;
        if (this.actor === this.placeholder) {
            super.tileMaximize();
        } else {
            Main.wm.skipNextEffect(this.actor);
            this.metaWindow.maximize(Meta.MaximizeFlags.BOTH);
        }
    }

    tileLeft() {}

    tileRight() {}
};

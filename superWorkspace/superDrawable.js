const Main = imports.ui.main;
const Signals = imports.signals;

/* exported SuperDrawable */
var SuperDrawable = class SuperDrawable {
    constructor(title, actor) {
        this._title = title;
        this._actor = actor;
    }

    set title(string) {
        this._title = string;
        this.emit('title-changed');
    }
    get title() {
        return this._title;
    }

    get actor() {
        return this._actor;
    }

    get monitor() {
        return Main.layoutManager.monitors.find(monitor => {
            return (
                this.actor.allocation.x1 >= monitor.x &&
                this.actor.allocation.x1 <= monitor.x + monitor.width &&
                this.actor.allocation.y1 >= monitor.y &&
                this.actor.allocation.y1 <= monitor.y + monitor.height
            );
        });
    }

    setPosition(x, y) {
        this.position = {
            x,
            y
        };
        this.actor.set_position(x, y);
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
        this.actor.set_position(x, y);
        this.actor.set_size(width, height);
    }

    tileMaximize() {
        this.tiledMaximized = true;
        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        this.setPositionAndSize(
            workArea.x,
            workArea.y,
            workArea.width,
            workArea.height
        );
    }
};
Signals.addSignalMethods(SuperDrawable.prototype);

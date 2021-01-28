import * as GObject from 'gobject';
import * as GLib from 'glib';
import * as Meta from 'meta';
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { MatButton } from 'src/widget/material/button';
import { registerGObjectClass } from 'src/utils/gjs';
const Main = imports.ui.main;

@registerGObjectClass
export class MatPanelButton extends MatButton {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MatPanelButton',
    };
    monitor: number;

    constructor(params = {}) {
        super(params);
        this.add_style_class_name('mat-panel-button');
        const panelSizeSignal = Me.msThemeManager.connect('panel-size-changed', () => {
            this.queue_relayout();
        });
        this.monitor = this.findMonitor();
        const monitorSignal = Main.layoutManager.connect('monitors-changed', () => {
            GLib.idle_add(GLib.PRIORITY_LOW, () => {
                this.monitor = this.findMonitor();
                return false;
            });
        });
        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(panelSizeSignal);
            Main.layoutManager.disconnect(monitorSignal);
        });
    }

    findMonitor() {
        let [x, y] = this.get_transformed_position();
        return (
            global.display.get_monitor_index_for_rect(
                new Meta.Rectangle({ x: x!, y: y!, width: 0, height: 0 })
            ) || global.display.get_current_monitor()
        );
    }

    /**
     * Just the panel width
     */
    vfunc_get_preferred_width(_forHeight) : [number, number] {
        return [
            Me.msThemeManager.getPanelSize(this.monitor.index),
            Me.msThemeManager.getPanelSize(this.monitor.index),
        ];
    }

    /**
     * Just the panel height
     */
    vfunc_get_preferred_height(_forWidth): [number, number]  {
        return [
            Me.msThemeManager.getPanelSize(this.monitor.index),
            Me.msThemeManager.getPanelSize(this.monitor.index),
        ];
    }
}

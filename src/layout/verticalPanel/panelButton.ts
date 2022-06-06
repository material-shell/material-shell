import * as GObject from 'gobject';
import * as GLib from 'glib';
import * as Meta from 'meta';
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { MatButton } from 'src/widget/material/button';
import { registerGObjectClass } from 'src/utils/gjs';
import { main as Main } from 'ui';

@registerGObjectClass
export class MatPanelButton extends MatButton {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MatPanelButton',
    };
    monitorIndex: number;

    constructor(params = {}) {
        super(params);
        this.add_style_class_name('mat-panel-button');
        const panelSizeSignal = Me.msThemeManager.connect(
            'panel-size-changed',
            () => {
                this.queue_relayout();
            }
        );
        this.monitorIndex = this.findMonitor();
        const monitorSignal = Main.layoutManager.connect(
            'monitors-changed',
            () => {
                GLib.idle_add(GLib.PRIORITY_LOW, () => {
                    this.monitorIndex = this.findMonitor();
                    return false;
                });
            }
        );
        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(panelSizeSignal);
            Main.layoutManager.disconnect(monitorSignal);
        });
    }

    findMonitor() {
        const [x, y] = this.get_transformed_position();
        return (
            global.display.get_monitor_index_for_rect(
                new Meta.Rectangle({ x: x!, y: y!, width: 0, height: 0 })
            ) || global.display.get_current_monitor()
        );
    }

    /**
     * Just the panel width
     */
    override vfunc_get_preferred_width(_forHeight: number): [number, number] {
        return [
            Me.msThemeManager.getPanelSize(this.monitorIndex),
            Me.msThemeManager.getPanelSize(this.monitorIndex),
        ];
    }

    /**
     * Just the panel height
     */
    override vfunc_get_preferred_height(_forWidth: number): [number, number] {
        return [
            Me.msThemeManager.getPanelSize(this.monitorIndex),
            Me.msThemeManager.getPanelSize(this.monitorIndex),
        ];
    }
}

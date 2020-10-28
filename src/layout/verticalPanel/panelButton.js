const { GObject, GLib, Meta } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MatButton } = Me.imports.src.widget.material.button;
const Main = imports.ui.main;

/* exported MatPanelButton */
var MatPanelButton = GObject.registerClass(
    {
        GTypeName: 'MatPanelButton',
    },
    class MatPanelButton extends MatButton {
        _init(params = {}) {
            super._init(params);
            this.add_style_class_name('mat-panel-button');
            const panelSizeSignal = Me.msThemeManager.connect('panel-size-changed', () => {
                this.queue_relayout();
            });
            this.monitor = this.findMonitor();
            const monitorSignal = Main.layoutManager.connect('monitors-changed', () => {
                GLib.idle_add(GLib.PRIORITY_LOW, () => {
                    this.monitor = this.findMonitor();
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
                    new Meta.Rectangle({ x, y, width: 0, height: 0 })
                ) || global.display.get_current_monitor()
            );
        }

        /**
         * Just the panel width
         */
        vfunc_get_preferred_width(_forHeight) {
            return [
                Me.msThemeManager.getPanelSize(this.monitor.index),
                Me.msThemeManager.getPanelSize(this.monitor.index),
            ];
        }

        /**
         * Just the panel height
         */
        vfunc_get_preferred_height(_forWidth) {
            return [
                Me.msThemeManager.getPanelSize(this.monitor.index),
                Me.msThemeManager.getPanelSize(this.monitor.index),
            ];
        }
    }
);

const { GObject } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MatButton } = Me.imports.src.widget.material.button;
const Main = imports.ui.main;

/* exported MatPanelButton */
var MatPanelButton = GObject.registerClass(
    {
        GTypeName: 'MatPanelButton',
    },
    class MatPanelButton extends MatButton {
        _init(params = {}, monitor) {
            this.monitor = monitor;
            super._init(params);
            this.add_style_class_name('mat-panel-button');
            Me.msThemeManager.connect('panel-size-changed', () => {
                this.queue_relayout();
            });
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
        vfunc_get_preferred_height(forWidth) {
            return [
                Me.msThemeManager.getPanelSize(this.monitor.index),
                Me.msThemeManager.getPanelSize(this.monitor.index),
            ];
        }
    }
);

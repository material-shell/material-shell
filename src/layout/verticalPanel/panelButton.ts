import * as GObject from 'gobject';
import { registerGObjectClass } from 'src/utils/gjs';
import { MatButton } from 'src/widget/material/button';
import * as St from 'st';

const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class MatPanelButton extends MatButton {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MatPanelButton',
    };

    constructor(params = {}) {
        super(params);
        this.add_style_class_name('mat-panel-button');
        const panelSizeSignal = Me.msThemeManager.connect(
            'panel-size-changed',
            () => {
                this.queue_relayout();
            }
        );
        this.connect('destroy', () => {
            Me.msThemeManager.disconnect(panelSizeSignal);
        });
    }

    /**
     * Just the panel width
     */
    override vfunc_get_preferred_width(_forHeight: number): [number, number] {
        const { scaleFactor } = St.ThemeContext.get_for_stage(global.stage);
        return [
            Me.msThemeManager.getPanelSizeNotScaled() * scaleFactor,
            Me.msThemeManager.getPanelSizeNotScaled() * scaleFactor,
        ];
    }

    /**
     * Just the panel height
     */
    override vfunc_get_preferred_height(_forWidth: number): [number, number] {
        const { scaleFactor } = St.ThemeContext.get_for_stage(global.stage);
        return [
            Me.msThemeManager.getPanelSizeNotScaled() * scaleFactor,
            Me.msThemeManager.getPanelSizeNotScaled() * scaleFactor,
        ];
    }
}

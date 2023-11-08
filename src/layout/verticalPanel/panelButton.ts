import GObject from 'gi://GObject';
import St from 'gi://St';
import { registerGObjectClass } from 'src/utils/gjs';
import { MatButton } from 'src/widget/material/button';

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import MaterialShellExtension from 'src/extension';
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

@registerGObjectClass
export class MatPanelButton extends MatButton {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'MatPanelButton',
    };

    constructor(params = {}) {
        super(params);
        this.add_style_class_name('mat-panel-button');
        const panelSizeSignal = Me.msThemeManager!.connect(
            'panel-size-changed',
            () => {
                this.queue_relayout();
            }
        );
        this.connect('destroy', () => {
            Me.msThemeManager!.disconnect(panelSizeSignal);
        });
    }

    /**
     * Just the panel width
     */
    override vfunc_get_preferred_width(_forHeight: number): [number, number] {
        const { scale_factor } = St.ThemeContext.get_for_stage(global.stage);
        return [
            Me.msThemeManager!.getPanelSizeNotScaled() * scale_factor,
            Me.msThemeManager!.getPanelSizeNotScaled() * scale_factor,
        ];
    }

    /**
     * Just the panel height
     */
    override vfunc_get_preferred_height(_forWidth: number): [number, number] {
        const { scale_factor } = St.ThemeContext.get_for_stage(global.stage);
        return [
            Me.msThemeManager!.getPanelSizeNotScaled() * scale_factor,
            Me.msThemeManager!.getPanelSizeNotScaled() * scale_factor,
        ];
    }
}

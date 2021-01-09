/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    HalfLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.custom.half;

export const HalfVerticalLayout = GObject.registerClass(
    class HalfVerticalLayout extends HalfLayout {
        isVerticalLayout() {
            return true;
        }
    }
);

HalfVerticalLayout.state = { key: 'half-vertical' };
HalfVerticalLayout.label = 'Half vertical';

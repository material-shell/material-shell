/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    HalfLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.custom.half;

export const HalfHorizontalLayout = GObject.registerClass(
    class HalfHorizontalLayout extends HalfLayout {
        isVerticalLayout() {
            return false;
        }
    }
);

HalfHorizontalLayout.state = { key: 'half-horizontal' };
HalfHorizontalLayout.label = 'Half horizontal';

/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    SimpleLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.custom.simple;

export const SimpleHorizontalLayout = GObject.registerClass(
    class SimpleHorizontalLayout extends SimpleLayout {
        isVerticalLayout() {
            return false;
        }
    }
);

SimpleHorizontalLayout.state = { key: 'simple-horizontal' };
SimpleHorizontalLayout.label = 'Simple horizontal';

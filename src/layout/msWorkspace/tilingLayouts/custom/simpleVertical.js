/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    SimpleLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.custom.simple;

export const SimpleVerticalLayout = GObject.registerClass(
    class SimpleVerticalLayout extends SimpleLayout {
        isVerticalLayout() {
            return true;
        }
    }
);

SimpleVerticalLayout.state = { key: 'simple-vertical' };
SimpleVerticalLayout.label = 'Simple vertical';

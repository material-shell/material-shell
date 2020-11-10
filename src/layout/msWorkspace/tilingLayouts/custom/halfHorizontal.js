/** Gnome libs imports */
const { GObject } = imports.gi;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    HalfLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.custom.half;

/* exported HalfHorizontalLayout */
var HalfHorizontalLayout = GObject.registerClass(
    class HalfHorizontalLayout extends HalfLayout {
        isVerticalLayout() {
            return false;
        }
    }
);

HalfHorizontalLayout.state = { key: 'half-horizontal' };
HalfHorizontalLayout.label = 'Half horizontal';

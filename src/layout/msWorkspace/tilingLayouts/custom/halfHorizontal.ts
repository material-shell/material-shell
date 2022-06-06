/** Gnome libs imports */
import { HalfLayoutBase } from 'src/layout/msWorkspace/tilingLayouts/custom/half';
import { registerGObjectClass } from 'src/utils/gjs';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

@registerGObjectClass
export class HalfHorizontalLayout extends HalfLayoutBase<{
    key: 'half-horizontal';
}> {
    static state = { key: 'half-horizontal' };
    static label = 'Half horizontal';

    isVerticalLayout() {
        return false;
    }
}

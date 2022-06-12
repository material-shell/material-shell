/** Gnome libs imports */
import { HalfLayoutBase } from 'src/layout/msWorkspace/tilingLayouts/custom/half';
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class HalfVerticalLayout extends HalfLayoutBase<{
    key: 'half-vertical';
}> {
    static state = { key: 'half-vertical' };
    static label = 'Half vertical';

    isVerticalLayout() {
        return true;
    }
}

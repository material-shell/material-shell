/** Gnome libs imports */
import { SimpleLayoutBase } from 'src/layout/msWorkspace/tilingLayouts/custom/simple';
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class SimpleVerticalLayout extends SimpleLayoutBase<{
    key: 'simple-vertical';
}> {
    static state = { key: 'simple-vertical' };
    static label = 'Simple vertical';

    override isVerticalLayout() {
        return true;
    }
}

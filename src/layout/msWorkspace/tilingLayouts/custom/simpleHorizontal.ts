/** Gnome libs imports */
import { SimpleLayoutBase } from 'src/layout/msWorkspace/tilingLayouts/custom/simple';
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class SimpleHorizontalLayout extends SimpleLayoutBase<{
    key: 'simple-horizontal';
}> {
    static state = { key: 'simple-horizontal' };
    static label = 'Simple horizontal';

    override isVerticalLayout() {
        return false;
    }
}

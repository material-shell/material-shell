import GObject from 'gi://GObject';
import St from 'gi://St';
import { registerGObjectClass } from 'src/utils/gjs';

@registerGObjectClass
export class SearchResultHeader extends St.Bin {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'SearchResultHeader',
    };
    label: St.Label;
    constructor(text: string) {
        super({
            style_class:
                'subtitle-2 margin margin-top-x2 margin-bottom-x2 text-high-emphasis',
        });

        this.label = new St.Label({
            text: text,
        });
        this.set_child(this.label);
    }
}

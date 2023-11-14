import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import St from 'gi://St';
import { registerGObjectClass } from 'src/utils/gjs';
import { MatButton } from 'src/widget/material/button';

@registerGObjectClass
export class SearchResultEntry extends MatButton {
    static metaInfo: GObject.MetaInfo<any, any, any> = {
        GTypeName: 'SearchResultEntry',
        Signals: {
            activate: {
                param_types: [],
                accumulator: 0,
            },
        },
    };
    layout = new St.BoxLayout();
    icon: St.Icon | null;
    textLayout = new St.BoxLayout({
        vertical: true,
        style_class: 'margin-left-x2 margin-top margin-bottom margin-right-x2',
        y_align: Clutter.ActorAlign.CENTER,
    });
    title: St.Label;
    description: St.Label | null;
    constructor(
        icon: St.Icon | null,
        title: string,
        description?: string,
        _withMenu?: boolean
    ) {
        super({});
        if (icon) {
            this.icon = icon;
            this.icon.set_style('margin: 12px');
            this.layout.add_child(this.icon);
        } else {
            this.icon = null;
        }

        this.layout.add_child(this.textLayout);
        this.title = new St.Label({
            text: title,
        });
        this.textLayout.add_child(this.title);
        if (description) {
            this.description = new St.Label({
                text: description,
                style_class: 'caption text-medium-emphasis',
                style: 'margin-top:2px',
            });
            this.textLayout.add_child(this.description);
        } else {
            this.description = null;
        }

        this.set_child(this.layout);
    }

    setSelected(selected: boolean) {
        if (selected) {
            this.add_style_class_name('highlighted');
        } else {
            this.remove_style_class_name('highlighted');
        }
    }
}

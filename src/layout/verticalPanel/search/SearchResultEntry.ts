import * as Clutter from 'clutter';
import * as GObject from 'gobject';
import { registerGObjectClass } from 'src/utils/gjs';
import { MatButton } from 'src/widget/material/button';
import * as St from 'st';

@registerGObjectClass
export class SearchResultEntry extends MatButton {
    static metaInfo: GObject.MetaInfo = {
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
        styleClass: 'margin-left-x2 margin-top margin-bottom margin-right-x2',
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
                styleClass: 'caption text-medium-emphasis',
                style: 'margin-top:2px',
            });
            this.textLayout.add_child(this.description);
        } else {
            this.description = null;
        }

        this.set_child(this.layout);
        /*         if (withMenu) {
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.menu = new AppDisplay.AppIconMenu(this, St.Side.RIGHT);
        } */
    }

    setSelected(selected: boolean) {
        if (selected) {
            this.add_style_class_name('highlighted');
        } else {
            this.remove_style_class_name('highlighted');
        }
    }
}

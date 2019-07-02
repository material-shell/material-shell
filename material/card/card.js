const { Clutter, GObject, St, Shell, Gio } = imports.gi;
const Params = imports.misc.params;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { Row } = Me.imports.files.Layout;
/* exported MatCard */
var MatCard = GObject.registerClass(
    class MatCard extends St.Bin {
        _init(params = {}) {
            super._init(params);
            this.add_style_class_name('mat-card');
        }
    }
);

/* exported MatCardTitle */
var MatCardTitle = GObject.registerClass(
    class MatCardTitle extends Row {
        _init(params = {}) {
            this.icon = params.icon;
            delete params.icon;
            this.label = params.label;
            delete params.label;
            super._init(params);
            this.add_style_class_name('mat-card-title');
            if (this.icon) {
                this.icon.add_style_class_name('mat-card-title-icon');
                this.add_child(this.icon);
            }

            if (this.label) {
                this.label.add_style_class_name('mat-card-title-label');
                this.add_child(this.label);
            }
        }

        /* vfunc_allocate(cardTitleBox, flags) {
            this.set_allocation(cardTitleBox, flags);
            let themeNode = this.get_theme_node();
            let contentBox = themeNode.get_content_box(cardTitleBox);
            let offsetX = 0;
            if (this.icon) {
                offsetX = 32;
                let iconBox = new Clutter.ActorBox({
                    x1: contentBox.x1,
                    y1: contentBox.y1,
                    x2: contentBox.x1 + offsetX,
                    y2: contentBox.y2
                });
                this.icon.allocate(iconBox, flags);
            }
            if (this.label) {
                let iconBox = new Clutter.ActorBox({
                    x1: contentBox.x1 + offsetX,
                    y1: contentBox.y1,
                    x2: contentBox.x1 + offsetX,
                    y2: contentBox.y2
                });
                this.icon.allocate(iconBox, flags);
            }
        } */
    }
);

/* exported MatCardContent */
var MatCardContent = GObject.registerClass(
    class MatCardContent extends St.Bin {
        _init(params = {}) {
            super._init(params);
            this.add_style_class_name('mat-card-content');
        }
    }
);

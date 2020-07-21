/** Gnome libs imports */
const { Clutter, GObject, St } = imports.gi;

/* exported MatCard */
var MatCard = GObject.registerClass(
    class MatCard extends St.Bin {
        _init(params = {}) {
            super._init(params);
            this.add_style_class_name('mat-card');
            this.add_style_class_name('surface');
        }
    }
);

/* exported MatCardTitle */
var MatCardTitle = GObject.registerClass(
    class MatCardTitle extends Clutter.Actor {
        _init(
            params = {
                layout_manager: new Clutter.BoxLayout(),
            }
        ) {
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

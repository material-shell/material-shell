const { St, GObject } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { RippleBackground } = Me.imports.widget.material.rippleBackground;
const { Column } = Me.imports.widget.layout;

/* exported AppPlaceholder */
var AppPlaceholder = GObject.registerClass(
    class AppPlaceholder extends St.Widget {
        _init(app) {
            super._init({});
            this.app = app;

            this.icon = this.app.create_icon_texture(248);
            this.appTitle = new St.Label({ text: app.get_name() });
            this.identityContainer = new Column({
                children: [this.icon, this.appTitle]
            });
            this.add_style_class_name('surface');
            this.add_child(this.identityContainer);
            this.clickableContainer = new RippleBackground();
            this.add_child(this.clickableContainer);
        }
        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            this.identityContainer.allocate(box, flags);
            this.clickableContainer.allocate(box, flags);
        }
    }
);

const { St, GObject, Clutter } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { RippleBackground } = Me.imports.src.widget.material.rippleBackground;
const { Column } = Me.imports.src.widget.layout;

/* exported AppPlaceholder */
var AppPlaceholder = GObject.registerClass(
    class AppPlaceholder extends St.Widget {
        _init(app) {
            super._init({
                x_align: Clutter.ActorAlign.CENTER,
                y_align: Clutter.ActorAlign.CENTER,
                layout_manager: new Clutter.BinLayout()
            });
            this.app = app;
            this.icon = this.app.create_icon_texture(248);
            this.appTitle = new St.Label({
                text: app.get_name(),
                x_align: Clutter.ActorAlign.CENTER,
                style_class: 'headline-4',
                style: 'margin-top:48px'
            });
            this.callToAction = new St.Label({
                text: 'Click anywhere to launch',
                x_align: Clutter.ActorAlign.CENTER,
                style_class: 'headline-5 text-medium-emphasis',
                style: 'margin-top:32px;'
            });
            this.identityContainer = new Column({
                x_align: Clutter.ActorAlign.CENTER,
                y_align: Clutter.ActorAlign.CENTER,
                x_expand: true,
                y_expand: true,
                children: [this.icon, this.appTitle, this.callToAction]
            });

            this.add_style_class_name('surface');
            this.add_child(this.identityContainer);
            this.clickableContainer = new RippleBackground();
            this.clickableContainer.x_expand = true;
            this.clickableContainer.y_expand = true;
            this.add_child(this.clickableContainer);
        }
    }
);

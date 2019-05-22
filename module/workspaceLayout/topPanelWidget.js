const { GObject, St, Clutter } = imports.gi;

const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const RippleContainer = Me.imports.material.rippleContainer.RippleContainer;
const TaskBar = Me.imports.widget.taskBar.TaskBar;

/* exported TopPanel */
var TopPanel = GObject.registerClass(
    class TopPanel extends St.Widget {
        _init(workspace) {
            super._init({
                name: 'dash'
            });
            this.taskBar = new TaskBar(workspace);
            this.add_child(this.taskBar);

            this.tilingIcon = new St.Icon({
                icon_name: 'view-grid-symbol',
                style_class: 'workspace-icon'
            });

            let button = new St.Bin({
                child: this.tilingIcon,
                style_class: 'workspace-button',
                reactive: true,
                can_focus: true,
                track_hover: true
            });

            button.connect('button-press-event', () => {
                workspace.nextTiling();
                this.tilingIcon.set_icon_name(workspace.tilingLayout === 'tileRight' ? 'view-grid-symbol' : 'window-maximize-symbolic');
            });

            this.tilingButton = new RippleContainer(button);
            this.add_child(this.tilingButton);
        }

        vfunc_get_preferred_width() {
            return [0, Main.layoutManager.primaryMonitor.width - 48];
        }

        vfunc_get_preferred_height() {
            return [0, 48];
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);

            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            box.x2 = box.x2 - 48;
            this.taskBar.allocate(box, flags);

            let tilingButtonBox = new Clutter.ActorBox();
            tilingButtonBox.x1 = box.x2;
            tilingButtonBox.x2 = box.x2 + 48;
            tilingButtonBox.y1 = box.y1;
            tilingButtonBox.y2 = box.y2;
            this.tilingButton.allocate(tilingButtonBox, flags);
        }
    }
);
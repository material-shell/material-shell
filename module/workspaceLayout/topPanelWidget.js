const { GObject, St } = imports.gi;

const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

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

            this.taskBar.allocate(box, flags);
        }
    }
);
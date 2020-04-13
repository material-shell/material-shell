const { GObject, St, Clutter, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { MatButton } = Me.imports.src.widget.material.button;

const { TaskBar } = Me.imports.src.widget.taskBar;

/* exported TopPanel */
var TopPanel = GObject.registerClass(
    class TopPanel extends St.BoxLayout {
        _init(msWorkspace) {
            super._init({
                name: 'topPanel',
            });
            this._delegate = this;
            this.msWorkspace = msWorkspace;

            this.taskBar = new TaskBar(msWorkspace);

            this.tilingIcon = new St.Icon({
                gicon: msWorkspace.tilingLayout.icon,
                style_class: 'mat-panel-button-icon',
            });

            this.tilingButton = new MatButton({
                child: this.tilingIcon,
                style_class: 'mat-panel-button',
                can_focus: true,
                track_hover: true,
            });

            this.tilingButton.connect('clicked', (actor, button) => {
                // Go in reverse direction on right click (button: 3)
                msWorkspace.nextTiling(button === 3 ? -1 : 1);
            });

            this.add_child(this.taskBar);
            this.add_child(this.tilingButton);
        }

        handleDragOver() {
            return this.taskBar.updateCurrentTaskBar();
        }

        acceptDrop() {
            this.taskBar.reparentDragItem();
            return true;
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            let taskBarBox = new Clutter.ActorBox();
            taskBarBox.x1 = contentBox.x1;
            taskBarBox.x2 = contentBox.x2 - this.tilingButton.width;
            taskBarBox.y1 = contentBox.y1;
            taskBarBox.y2 = contentBox.y2;
            this.taskBar.allocate(taskBarBox, flags);

            let tilingButtonBox = new Clutter.ActorBox();
            tilingButtonBox.x1 = taskBarBox.x2;
            tilingButtonBox.x2 = contentBox.x2;
            tilingButtonBox.y1 = contentBox.y1;
            tilingButtonBox.y2 = contentBox.y2;
            this.tilingButton.allocate(tilingButtonBox, flags);
        }
    }
);

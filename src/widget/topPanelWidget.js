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
                name: 'topPanel'
            });
            this._delegate = this;
            this.msWorkspace = msWorkspace;
            this._leftContainer = new St.BoxLayout({
                x_expand: true
            });

            this.taskBar = new TaskBar(msWorkspace);

            let iconContainer = new St.Icon({
                gicon: Gio.icon_new_for_string(
                    `${Me.path}/assets/icons/plus-symbolic.svg`
                ),
                style_class: 'mat-panel-button-icon'
            });

            this.addButton = new MatButton({
                child: iconContainer,
                style_class: 'mat-panel-button'
            });

            this._leftContainer.add_child(this.taskBar);

            this.tilingIcon = new St.Icon({
                gicon: msWorkspace.tilingLayout.icon,
                style_class: 'mat-panel-button-icon'
            });

            this.tilingButton = new MatButton({
                child: this.tilingIcon,
                style_class: 'mat-panel-button',
                can_focus: true,
                track_hover: true
            });

            this.tilingButton.connect('clicked', (actor, button) => {
                // Go in reverse direction on right click (button: 3)
                msWorkspace.nextTiling(button === 3 ? -1 : 1);
            });

            this.add_child(this._leftContainer);
            this.add_child(this.tilingButton);
        }

        handleDragOver() {
            return this.taskBar.updateCurrentTaskBar();
        }

        acceptDrop() {
            this.taskBar.reparentDragItem();
            return true;
        }
    }
);

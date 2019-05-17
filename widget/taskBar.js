const { Clutter, GObject, St, Shell } = imports.gi;

const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Mainloop = imports.mainloop;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const RippleContainer = Me.imports.material.rippleContainer.RippleContainer;

/* exported TaskBar */
var TaskBar = GObject.registerClass(
    class TaskBar extends St.Widget {
        _init(workspace) {
            super._init({
                name: 'taskBar'
            });
            this.taskActiveIndicator = new St.Widget({
                style_class: 'task-active-indicator'
            });
            this.add_child(this.taskActiveIndicator);

            this.taskButtonContainer = new St.BoxLayout({});
            this.add_child(this.taskButtonContainer);

            global.display.connect('notify::focus-window', () => {
                let windowFocused = global.display.focus_window;
                if (workspace === windowFocused.get_workspace()) {
                    let taskBarItem = this.getTaskBarItemOfWindow(windowFocused);
                    this.setTaskBarItemActif(taskBarItem);
                }
            });

            this.workspace = workspace;
            this.tracker = Shell.WindowTracker.get_default();
            this.taskBarItemActif = null;
            this.items = [];
            workspace.connect('window-added', this.handleNewWindow.bind(this));
            workspace.connect('window-removed', this.handleOldWindow.bind(this));
        }

        handleNewWindow(workspace, window) {
            if (window.get_monitor() === Main.layoutManager.primaryMonitor.index) {
                let item = new TaskBarItem(
                    window,
                    this.tracker.get_window_app(window)
                );
                this.items.push(item);
                this.taskButtonContainer.add_child(item);
                this._animateActiveIndicator();
            }
        }

        handleOldWindow(workspace, window) {
            let taskBarItemIndex = this.items.findIndex((taskBarItem) => {
                return taskBarItem.window === window;
            });

            if (taskBarItemIndex !== -1) {
                let taskBarItem = this.items.splice(taskBarItemIndex, 1)[0];
                if (taskBarItem === this.taskBarItemActif) {
                    taskBarItem.disconnect(this.taskBarItemActifWidthSignal);
                    this.taskBarItemActif = null;
                }
                taskBarItem.destroy();
                Mainloop.timeout_add(50, () => {
                    this._animateActiveIndicator();
                });
            }
        }

        _animateActiveIndicator() {
            if (this.taskBarItemActif) {
                Tweener.addTween(this.taskActiveIndicator, {
                    translation_x:
                        this.taskBarItemActif.x,
                    width: this.taskBarItemActif.width,
                    time: 0.25,
                    transition: 'easeOutQuad'
                });
            } else {
                Tweener.addTween(this.taskActiveIndicator, {
                    translation_x:
                        0,
                    width: 0,
                    time: 0.25,
                    transition: 'easeOutQuad'
                });
            }
        }

        getTaskBarItemOfWindow(window) {
            return this.items.find((item) => {
                return item.window === window;
            });
        }

        setTaskBarItemActif(taskBarItem) {
            if (this.taskBarItemActif) {
                if (this.taskBarItemActif.has_style_class_name('active')) {
                    this.taskBarItemActif.remove_style_class_name('active');
                }
                this.taskBarItemActif.disconnect(this.taskBarItemActifWidthSignal);
            }
            this.taskBarItemActif = taskBarItem;

            // Delay the new class otherwise it's break the style system Dunno why
            Mainloop.timeout_add(50, () => {
                this.taskBarItemActif.add_style_class_name('active');
            });
            this.taskActiveIndicator.translation_y = this.height - this.taskActiveIndicator.height;
            this._animateActiveIndicator();
            this.taskBarItemActifWidthSignal = this.taskBarItemActif.connect('notify::width', () => {
                log('width changed')
                this._animateActiveIndicator();
            });
        }
    }
);

let TaskBarItem = GObject.registerClass(
    class TaskBarItem extends St.Widget {
        _init(window, app) {
            super._init({
                style_class: 'task-bar-item',
                reactive: true,
                can_focus: true,
                track_hover: true
            });

            this.window = window;
            this.app = app;

            // ICON
            this.iconSize = 24;
            this.icon = app.create_icon_texture(this.iconSize);
            this.icon.style_class = 'app-icon';

            // TITLE
            this.title = new St.Label({
                style_class: 'task-bar-item-title',
                y_align: Clutter.ActorAlign.CENTER
            });
            this.updateTitle();
            this.connectSignal = this.window.connect('notify::title', () => {
                this.updateTitle();
            });

            // CLOSE BUTTON
            this.closeButton = new St.Bin({
                reactive: true,
                can_focus: true,
                track_hover: true,
                style_class: 'close-button',
                child: new St.Icon({
                    icon_name: 'window-close-symbolic',
                    icon_size: 24
                })
            });

            this.closeButton.connect('button-release-event', () => {
                this.window.delete(global.get_current_time());
            });

            // LAYOUT CONTAINER
            this.container = new St.BoxLayout({
                style_class: 'task-bar-item-content',
                y_align: Clutter.ActorAlign.CENTER,
                vertical: false
            });
            this.container.add_child(this.icon);
            this.container.add_child(this.title);
            this.container.add_child(this.closeButton);

            // RIPPLE CONTAINER
            this.rippleContainer = new RippleContainer(this.container);
            this.add_child(this.rippleContainer);
            this.connect('button-release-event', (_, event) => {
                switch (event.get_button()) {
                    case 1:
                        this.window.raise();
                        this.window.focus(0);
                        break;
                    case 2:
                        this.window.delete(global.get_current_time());
                        break;
                }
            });
        }

        // Overide the allocate to make the rippleContainer fill the TaskBarItem
        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            box = themeNode.get_content_box(box);
            this.rippleContainer.allocate(box, flags);
        }

        // Update the title and crop it if it's too long
        updateTitle() {
            this.title.text = this.window.title;
        }
    }
);

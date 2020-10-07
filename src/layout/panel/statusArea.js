/** Gnome libs imports */
const { St, Gio, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const MessagesIndicator = imports.ui.dateMenu.MessagesIndicator;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { reparentActor } = Me.imports.src.utils.index;
const { VerticalPanelPositionEnum } = Me.imports.src.manager.msThemeManager;

var BlinkingIndicator = GObject.registerClass(
    class BlinkingIndicator extends MessagesIndicator {
        _init() {
            super._init();
            this.visible = true;
            log('*** material-shell.statusArea | actor: ' + (this instanceof Clutter.Actor));

        }

        _sync() {
            let pt = new Clutter.PropertyTransition({ property_name: 'opacity' });
            pt.set_from(100);
            pt.set_to(180);
            pt.set_duration(3000);
            pt.set_progress_mode(Clutter.AnimationMode.EASE_IN_OUT);

            let transition = new Clutter.TransitionGroup();
            transition.set_duration(3000);
            transition.set_repeat_count(-1);
            // Unfortunately auto.reverse does not work well (buggy = not smooth)
            transition.set_auto_reverse(true);
            transition.add_transition(pt);
            let doNotDisturb = !this._settings.get_boolean('show-banners');
            this.icon_name = doNotDisturb
                ? 'notifications-disabled-symbolic'
                : 'message-indicator-symbolic';
            if (this._count > 0 && !doNotDisturb) {
                this.add_style_class_name('indicator-active');
                this.add_transition('blink', transition);
            } else {
                this.remove_transition('blink');
                this.set_opacity(255);
                if (this.has_style_class_name('indicator-active')) {
                    this.remove_style_class_name('indicator-active');
                }
            }
        }
    }
);

/* exported MsStatusArea */
var MsStatusArea = GObject.registerClass(
    {
        GTypeName: 'MsStatusArea',
    },
    class MsStatusArea extends Clutter.Actor {
        _init() {
            super._init({
                layout_manager: new Clutter.BoxLayout({
                    orientation: Clutter.Orientation.VERTICAL,
                    pack_start: true,
                }),
            });
            this.gnomeShellPanel = Main.panel;
            this.leftBoxActors = [];
            this.centerBoxActors = [];
            this.rightBoxActors = [];
            this.dateMenu = this.gnomeShellPanel.statusArea.dateMenu;
            this.verticaliseDateMenuButton();
            this.stealPanelActors();
            this.overridePanelMenuSide();

            this.disableConnect = Me.connect(
                'extension-disable',
                this.onDisable.bind(this)
            );
        }

        verticaliseDateMenuButton() {
            this.dateMenu._clock.time_only = true;
            /*this.dateMenu.set_x_expand(false);
            this.dateMenu.set_y_expand(false); */
            this.dateMenu.box = this.dateMenu.get_child_at_index(0);
            this.dateMenu.indicatorPad = this.dateMenu.box.get_child_at_index(
                0
            );
            this.dateMenu.box.remove_child(this.dateMenu.indicatorPad);
            // this.dateMenu._indicator.bind_property(
            //     'visible',
            //     this.dateMenu.indicatorPad,
            //     'visible',
            //     GObject.BindingFlags.SYNC_CREATE |
            //     GObject.BindingFlags.INVERT_BOOLEAN
            // );
            // this.dateMenu.box.add_child(this.dateMenu.indicatorPad);
            this.oldIndicator = this.dateMenu._indicator;
            this.dateMenu.box.remove_child(this.oldIndicator);
            this.dateMenu._indicator = new BlinkingIndicator();
            this.dateMenu.box.add_child(this.dateMenu._indicator);
            this.dateMenu.box.set_x_align(Clutter.ActorAlign.CENTER);
            let update = () => {
                /**
                 * Format clock display to fit into the vertical panel
                 * Place each section of the clock (HH, MM, AM/PM) onto its own line
                 *
                 * Deliberately separates HH:MM into distinct sections
                 */
                let clockSections = this.dateMenu._clock.clock
                    .replace(/∶/g, ' ')
                    .split(' ');
                if (!clockSections[0]) clockSections.shift();
                const markup = clockSections
                    .map((section) => `<span>${section}</span>`)
                    .join('\n');
                this.dateMenu._clockDisplay.clutter_text.set_markup(markup);
            };
            update();
            this.dateMenuSignal = this.dateMenu._clock.connect(
                'notify::clock',
                update
            );
        }

        unVerticaliseDateMenuButton() {
            this.dateMenu.set_x_expand(true);
            this.dateMenu.set_y_expand(true);
            this.dateMenu.box.set_x_align(Clutter.ActorAlign.FILL);
            this.dateMenu._clock.time_only = false;
            this.dateMenu._clock.disconnect(this.dateMenuSignal);
            this.dateMenu._clockDisplay.text = this.dateMenu._clock.clock;
            this.dateMenu.box.insert_child_at_index(
                this.dateMenu.indicatorPad,
                0
            );
        }

        stealPanelActors() {
            this.gnomeShellPanel._leftBox
                .get_children()
                .filter((actor) => {
                    return (
                        actor !=
                            this.gnomeShellPanel.statusArea.activities
                                .container &&
                        actor !=
                            this.gnomeShellPanel.statusArea.appMenu.container
                    );
                })
                .forEach((actor) => {
                    this.stealActor(actor, this.leftBoxActors);
                });
            this.leftBoxActorAddedSignal = this.gnomeShellPanel._leftBox.connect(
                'actor-added',
                (_, actor) => {
                    this.stealActor(actor, this.leftBoxActors);
                }
            );
            this.gnomeShellPanel._centerBox.get_children().forEach((actor) => {
                this.stealActor(actor, this.centerBoxActors);
            });
            this.centerBoxActorAddedSignal = this.gnomeShellPanel._centerBox.connect(
                'actor-added',
                (_, actor) => {
                    this.stealActor(actor, this.centerBoxActors);
                }
            );
            this.gnomeShellPanel._rightBox
                .get_children()
                .reverse()
                .forEach((actor) => {
                    this.stealActor(actor, this.rightBoxActors);
                });
            this.rightBoxActorAddedSignal = this.gnomeShellPanel._rightBox.connect(
                'actor-added',
                (_, actor) => {
                    this.stealActor(actor, this.rightBoxActors);
                }
            );
        }

        stealActor(actor, container) {
            container.push(actor);
            actor.connect('destroy', () => {
                container.splice(container.indexOf(actor), 1);
            });
            actor.y_expand = false;
            actor.x_expand = true;
            this.recursivelySetVertical(actor, true);
            reparentActor(actor, this);
        }

        restorePanelActors() {
            this.gnomeShellPanel._leftBox.disconnect(
                this.leftBoxActorAddedSignal
            );
            this.gnomeShellPanel._centerBox.disconnect(
                this.centerBoxActorAddedSignal
            );
            this.gnomeShellPanel._rightBox.disconnect(
                this.rightBoxActorAddedSignal
            );

            this.leftBoxActors.forEach((actor) => {
                if (!actor) return;
                this.recursivelySetVertical(actor, false);
                reparentActor(actor, this.gnomeShellPanel._leftBox);
            });
            this.centerBoxActors.forEach((actor) => {
                if (!actor) return;
                this.recursivelySetVertical(actor, false);
                reparentActor(actor, this.gnomeShellPanel._centerBox);
            });
            this.rightBoxActors.reverse().forEach((actor) => {
                if (!actor) return;
                this.recursivelySetVertical(actor, false);
                reparentActor(actor, this.gnomeShellPanel._rightBox);
            });
        }

        recursivelySetVertical(actor, value) {
            if (actor instanceof St.BoxLayout) {
                actor.vertical = value;
                actor.set_x_align(Clutter.ActorAlign.CENTER);
            }
            if (
                actor instanceof St.Icon &&
                actor.has_style_class_name('popup-menu-arrow')
            ) {
                actor.visible = !value;
            }
            if (
                actor.has_style_class_name &&
                actor.has_style_class_name('panel-button')
            ) {
                actor.y_expand = !value;
            }

            actor.get_children().forEach((child) => {
                this.recursivelySetVertical(child, value);
            });
        }

        overridePanelMenuSide() {
            // For each menu override the opening side to match the vertical panel
            this.gnomeShellPanel.menuManager._menus.forEach((menuData) => {
                if (menuData.menu._boxPointer) {
                    menuData.menu._boxPointer.oldArrowSideFunction =
                        menuData.menu._boxPointer._calculateArrowSide;
                    menuData.menu._boxPointer._calculateArrowSide = function () {
                        return Me.msThemeManager.verticalPanelPosition ===
                            VerticalPanelPositionEnum.LEFT
                            ? St.Side.LEFT
                            : St.Side.RIGHT;
                    };
                }
            });
        }

        restorePanelMenuSide() {
            this.gnomeShellPanel.menuManager._menus.forEach((menuData) => {
                if (menuData.menu._boxPointer) {
                    menuData.menu._boxPointer._calculateArrowSide =
                        menuData.menu._boxPointer.oldArrowSideFunction;
                    delete menuData.menu._boxPointer.oldArrowSideFunction;
                }
            });
        }
        onDisable() {
            Me.disconnect(this.disableConnect);
            // this.dateMenu.box.remove_child(this.dateMenu.indicatorPad);
            // this.dateMenu._indicator.bind_property(
            //     'visible',
            //     this.dateMenu.indicatorPad,
            //     'visible',
            //     GObject.BindingFlags.SYNC_CREATE
            // );
            this.dateMenu.box.remove_child(this.dateMenu._indicator);
            this.dateMenu._indicator.destroy();
            this.dateMenu.box.add_child(this.oldIndicator);
            this.dateMenu._indicator = this.oldIndicator;
            this.dateMenu.box.insert_child_at_index(this.dateMenu.indicatorPad, 0);
            this.dateMenu._indicator = this.oldIndicator;
            this.unVerticaliseDateMenuButton();
            this.restorePanelMenuSide();
            this.restorePanelActors();
            this.gnomeShellPanel.statusArea.aggregateMenu.set_y_expand(true);
        }
    }
);

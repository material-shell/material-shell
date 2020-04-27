const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

const { Shell, Meta, St, GLib, GObject, Clutter } = imports.gi;
const Main = imports.ui.main;
const { reparentActor } = Me.imports.src.utils.index;
const { DateMenuButton } = imports.ui.dateMenu;
const { log } = Me.imports.src.utils.debug;

/* exported MsStatusArea */
var MsStatusArea = GObject.registerClass(
    {
        GTypeName: 'MsStatusArea',
    },
    class MsStatusArea extends St.BoxLayout {
        _init() {
            super._init({
                vertical: true,
            });
            this.gnomeShellPanel = Main.panel;
            this.leftBoxActors = [];
            this.centerBoxActors = [];
            this.rightBoxActors = [];
            this.dateMenu = this.gnomeShellPanel.statusArea.dateMenu;
            this.verticaliseDateMenuButton();
            this.stealPanelActors();
            this.remove_child(this.dateMenu.container);
            this.add_child(this.dateMenu.container);
            this.overridePanelMenuSide();
            this.disableConnect = Me.connect(
                'extension-disable',
                this.onDisable.bind(this)
            );
        }

        verticaliseDateMenuButton() {
            this.dateMenu._clock.time_only = true;
            this.dateMenu.set_x_expand(false);
            this.dateMenu.set_y_expand(false);
            this.indicatorPad = (ShellVersionMatch('3.32')
                ? this.dateMenu.actor
                : this.dateMenu
            )
                .get_child_at_index(0)
                .get_child_at_index(0);
            this.indicatorPad.hide();
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
            this.dateMenu._clock.time_only = false;
            this.dateMenu._clock.disconnect(this.dateMenuSignal);
            this.dateMenu._clockDisplay.text = this.dateMenu._clock.clock;
            this.indicatorPad.show();
        }

        stealPanelActors() {
            this.gnomeShellPanel._leftBox
                .get_children()
                .filter((actor) => {
                    log(actor, this.gnomeShellPanel.statusArea.activities);

                    return (
                        actor !=
                            this.gnomeShellPanel.statusArea.activities
                                .container &&
                        actor !=
                            this.gnomeShellPanel.statusArea.appMenu.container
                    );
                })
                .forEach((actor) => {
                    this.leftBoxActors.push(actor);
                    this.recursivelySetVertical(actor, true);
                    reparentActor(actor, this);
                });
            this.leftBoxActorAddedSignal = this.gnomeShellPanel._leftBox.connect(
                'actor-added',
                (_, actor) => {
                    this.leftBoxActors.push(actor);
                    this.recursivelySetVertical(actor, true);
                    reparentActor(actor, this);
                }
            );
            this.gnomeShellPanel._centerBox.get_children().forEach((actor) => {
                this.centerBoxActors.push(actor);
                this.recursivelySetVertical(actor, true);
                reparentActor(actor, this);
            });
            this.centerBoxActorAddedSignal = this.gnomeShellPanel._centerBox.connect(
                'actor-added',
                (_, actor) => {
                    this.centerBoxActors.push(actor);
                    this.recursivelySetVertical(actor, true);
                    reparentActor(actor, this);
                }
            );
            this.gnomeShellPanel._rightBox.get_children().forEach((actor) => {
                this.rightBoxActors.push(actor);
                this.recursivelySetVertical(actor, true);
                reparentActor(actor, this);
            });
            this.rightBoxActorAddedSignal = this.gnomeShellPanel._rightBox.connect(
                'actor-added',
                (_, actor) => {
                    this.rightBoxActors.push(actor);
                    this.recursivelySetVertical(actor, true);
                    reparentActor(actor, this);
                }
            );
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

            let box;
            this.get_children().forEach((actor) => {
                box = this.leftBoxActors.includes(actor)
                    ? this.gnomeShellPanel._leftBox
                    : this.centerBoxActors.includes(actor)
                    ? this.gnomeShellPanel._centerBox
                    : this.gnomeShellPanel._rightBox;
                this.recursivelySetVertical(actor, false);
                reparentActor(actor, box);
            });
        }

        recursivelySetVertical(actor, value) {
            if (actor instanceof St.BoxLayout) {
                actor.vertical = value;
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
                        return St.Side.LEFT;
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
            log('onDisable');
            Me.disconnect(this.disableConnect);
            this.unVerticaliseDateMenuButton();
            this.restorePanelMenuSide();
            this.restorePanelActors();
        }
    }
);

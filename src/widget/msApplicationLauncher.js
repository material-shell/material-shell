/** Gnome libs imports */
const { Clutter, GLib, GObject, St, GnomeDesktop, Shell } = imports.gi;
const Main = imports.ui.main;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { SetAllocation, Allocate } = Me.imports.src.utils.compatibility;
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;
const { AppsManager } = Me.imports.src.manager.appsManager;
const { MatButton } = Me.imports.src.widget.material.button;

/* exported MsApplicationLauncher */

const BUTTON_SIZE = 124;
var MsApplicationLauncher = GObject.registerClass(
    {
        GTypeName: 'MsApplicationLauncher',
        CssName: 'MsApplicationLauncher',
    },
    class MsApplicationLauncher extends St.Widget {
        _init(msWorkspace) {
            super._init({
                reactive: true,
                style: 'padding:64px',
            });
            this.msWorkspace = msWorkspace;
            this.add_style_class_name('surface-darker');
            this.appListContainer = null;
            this.initAppListContainer();
            Me.msThemeManager.connect('clock-app-launcher-changed', () => {
                this.restartAppListContainer();
            });
            Shell.AppSystem.get_default().connect('installed-changed', () => {
                this.restartAppListContainer();
            });
            this.connect('key-focus-in', () => {
                this.appListContainer.inputContainer.grab_key_focus();
            });
            this.connect('parent-set', () => {
                if (this.msWorkspace.tileableFocused === this) {
                    this.grab_key_focus();
                }
            });
            this.connect('key-focus-out', () => {
                //this._searchResults.highlightDefault(false);
            });
        }

        restartAppListContainer() {
            this.appListContainer.destroy();
            this.initAppListContainer();
        }

        initAppListContainer() {
            this.appListContainer = new MsApplicationButtonContainer(
                this.msWorkspace
            );
            this.add_child(this.appListContainer);
            AppsManager.getApps().forEach((app) => {
                const button = new MsApplicationButton(
                    app,
                    this.appListContainer.buttonSize
                );
                button.connect('notify::hover', () => {
                    this.appListContainer.highlightButton(button);
                });
                button.connect('clicked', () => {
                    const msWindow = Me.msWindowManager.createNewMsWindow(
                        app.id
                    );
                    this.msWorkspace.addMsWindow(msWindow, true);
                    Me.msWindowManager.openAppForMsWindow(msWindow);
                    this.appListContainer.reset();
                });
                this.appListContainer.addAppButton(button);
            });
            this.appListContainer.initFilteredAppButtonList();
        }

        vfunc_allocate(box, flags) {
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            const containerBox = new Clutter.ActorBox();
            const minSize = Math.min(
                contentBox.get_width(),
                contentBox.get_height()
            );
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.msWorkspace.monitor.index
            );
            const containerWidth = Math.min(
                contentBox.get_width() * 0.8,
                workArea.width / 2
            );
            containerBox.x1 = Math.round(
                contentBox.x1 + (contentBox.get_width() - containerWidth) / 2
            );
            containerBox.x2 = Math.round(
                contentBox.x2 - (contentBox.get_width() - containerWidth) / 2
            );

            containerBox.y1 = Math.round(contentBox.y1 + 0.1 * minSize);
            containerBox.y2 = Math.round(contentBox.y2 - 0.1 * minSize);

            // Prevent odd number size to have proper font aliasing
            containerBox.x2 =
                containerBox.get_width() % 2 != 0
                    ? containerBox.x2 + 1
                    : containerBox.x2;
            containerBox.y2 =
                containerBox.get_height() % 2 != 0
                    ? containerBox.y2 + 1
                    : containerBox.y2;

            Allocate(this.appListContainer, containerBox, flags);
        }
    }
);

var MsApplicationButtonContainer = GObject.registerClass(
    class MsApplicationButtonContainer extends St.Widget {
        _init(msWorkspace) {
            super._init({});
            this.msWorkspace = msWorkspace;
            this.appButtonList = [];
            this.currentButtonFocused = null;
            if (Me.msThemeManager.clockAppLauncher) {
                this.clockLabel = new St.Label({
                    style_class:
                        'headline-6 text-medium-emphasis margin-right-x2',
                    y_align: Clutter.ActorAlign.CENTER,
                });
                this.dateLabel = new St.Label({
                    style_class: 'headline-6 text-medium-emphasis',
                    y_align: Clutter.ActorAlign.CENTER,
                });
                this.clockBin = new St.BoxLayout({
                    x_align: Clutter.ActorAlign.CENTER,
                });
                this.clockBin.add_child(this.clockLabel);
                this.clockBin.add_child(this.dateLabel);
                this._wallClock = new GnomeDesktop.WallClock({
                    time_only: true,
                });
                const updateClock = () => {
                  if (this.clockLabel.mapped) {
                    this.clockLabel.text = this._wallClock.clock;
                    const date = new Date();
                    let dateFormat = Shell.util_translate_time_string(
                      N_('%A %B %-d')
                    );
                    this.dateLabel.text = date.toLocaleFormat(dateFormat);
                  }
                };

                this.signalClock = this._wallClock.connect(
                    'notify::clock',
                    updateClock
                );

                // There was a bug when updating the clock while the clock was not in the stage which didn't update the time correct
                this.clockLabel.connect('notify::mapped', () => {
                    if (this.clockLabel.mapped) {
                        updateClock();
                        this.clockLabel.queue_relayout();
                    }
                });
                this.clockLabel.connect('destroy', () => {
                    this._wallClock.disconnect(this.signalClock);
                    delete this._wallClock;
                });
                this.add_child(this.clockBin);
            }

            this.inputLayout = new St.BoxLayout({});
            this.searchIcon = new St.Icon({
                style_class: 'search-entry-icon',
                icon_name: 'edit-find-symbolic',
            });
            this.inputContainer = new St.Entry({
                style_class: 'search-entry',
                /* Translators: this is the text displayed
                   in the search entry when no search is
                   active; it should not exceed ~30
                   characters. */
                hint_text: _('Type to search…'),
                track_hover: true,
                can_focus: true,
            });
            this.inputContainer.set_primary_icon(this.searchIcon);
            this._text = this.inputContainer.clutter_text;
            this._text.connect('text-changed', () => {
                this.updateFilteredAppButtonList();
                this.highlightInitialButton();
            });
            this._text.connect('key-press-event', (entry, event) => {
                let symbol = event.get_key_symbol();
                if (ShellVersionMatch('3.34')) {
                    switch (symbol) {
                        case Clutter.Escape:
                            this.reset(); // Reset both
                            this.removeHighlightButton();
                            return Clutter.EVENT_STOP;
                        case Clutter.Tab:
                            this.highlightNextButton();
                            return Clutter.EVENT_STOP;
                        case Clutter.ISO_Left_Tab:
                            this.highlightPreviousButton();
                            return Clutter.EVENT_STOP;
                        case Clutter.Down:
                            this.highlightButtonBelow();
                            return Clutter.EVENT_STOP;
                        case Clutter.Up:
                            this.highlightButtonAbove();
                            return Clutter.EVENT_STOP;
                        case Clutter.Right:
                            if (this._text.cursor_position === -1) {
                                this.highlightNextButton();
                                return Clutter.EVENT_STOP;
                            } else {
                                return Clutter.EVENT_PROPAGATE;
                            }
                        case Clutter.Left:
                            if (
                                this.currentButtonFocused !=
                                this.filteredAppButtonList[0]
                            ) {
                                this.highlightPreviousButton();
                                return Clutter.EVENT_STOP;
                            } else {
                                return Clutter.EVENT_PROPAGATE;
                            }
                        case Clutter.Return:
                        case Clutter.KP_Enter:
                            this.currentButtonFocused.emit('clicked', 0);
                            return Clutter.EVENT_STOP;
                    }
                } else {
                    switch (symbol) {
                        case Clutter.KEY_Escape:
                            this.reset(); // Reset both
                            this.removeHighlightButton();
                            return Clutter.EVENT_STOP;
                        case Clutter.KEY_Tab:
                            this.highlightNextButton();
                            return Clutter.EVENT_STOP;
                        case Clutter.KEY_ISO_Left_Tab:
                            this.highlightPreviousButton();
                            return Clutter.EVENT_STOP;
                        case Clutter.KEY_Down:
                            this.highlightButtonBelow();
                            return Clutter.EVENT_STOP;
                        case Clutter.KEY_Up:
                            this.highlightButtonAbove();
                            return Clutter.EVENT_STOP;
                        case Clutter.KEY_Right:
                            if (this._text.cursor_position === -1) {
                                this.highlightNextButton();
                                return Clutter.EVENT_STOP;
                            } else {
                                return Clutter.EVENT_PROPAGATE;
                            }
                        case Clutter.KEY_Left:
                            if (
                                this.currentButtonFocused !=
                                    this.filteredAppButtonListBuffer[0] &&
                                this.getCurrentIndex() > -1
                            ) {
                                this.highlightPreviousButton();
                                return Clutter.EVENT_STOP;
                            } else {
                                return Clutter.EVENT_PROPAGATE;
                            }
                        case Clutter.KEY_Return:
                        case Clutter.KEY_KP_Enter:
                            this.currentButtonFocused.emit('clicked', 0);
                            return Clutter.EVENT_STOP;
                    }
                }

                return Clutter.EVENT_PROPAGATE;
            });
            this.add_child(this.inputContainer);
            this.container = new St.Widget();
            this.container.add_style_class_name('surface');
            this.container.set_style('border-radius:16px;');
            this.add_child(this.container);
        }

        get monitorScale() {
            return global.display.get_monitor_scale(
                this.msWorkspace.monitor.index
            );
        }
        get buttonSize() {
            return BUTTON_SIZE * this.monitorScale;
        }
        reset() {
            //Go back to the previous window if ESC is pressed and nothing is selected
            if (
                this.inputContainer.get_text() === '' &&
                this.currentButtonFocused === null
            ) {
                this.msWorkspace.focusPrecedentTileable();
                return;
            }
            if (this.inputContainer.get_text().length) {
                this.inputContainer.set_text('');
                this._text.cursor_position = -1;
                return;
            }
            this.updateFilteredAppButtonList();
        }

        initFilteredAppButtonList() {
            this.filteredAppButtonList = this.appButtonList;
            this.filteredAppButtonListBuffer = this.appButtonList;
            this.startIndex = 0;
        }

        updateFilteredAppButtonList() {
            this.filteredAppButtonListBuffer = this.appButtonList.filter(
                (button) => {
                    let stringToSearch = `${button.app.get_name()}${button.app.get_id()}${button.app.get_description()}`;
                    let regex = new RegExp(this.inputContainer.get_text(), 'i');
                    if (regex.test(stringToSearch)) {
                        button.visible = true;
                        return true;
                    } else {
                        button.visible = false;
                        return false;
                    }
                }
            );
            this.filteredAppButtonList = [];
            const maxButtons = this.numberOfColumn * this.numberOfRow;
            let index = 0;
            while (
                index < maxButtons &&
                index < this.filteredAppButtonListBuffer.length
            ) {
                this.filteredAppButtonList.push(
                    this.filteredAppButtonListBuffer[index]
                );
                index++;
            }
            this.startIndex = 0;
        }

        scrollFilteredAppButtonListUp() {
            const maxButtons = this.numberOfColumn * this.numberOfRow;
            if (
                this.startIndex + maxButtons >
                this.filteredAppButtonListBuffer.length - 1
            ) {
                return false;
            }
            const maxColumns = this.numberOfColumn;
            let index = 0;
            let showIndex;
            this.startIndex += maxColumns;
            while (index < this.startIndex) {
                if (
                    this.filteredAppButtonListBuffer &&
                    this.filteredAppButtonListBuffer[index]
                ) {
                    this.filteredAppButtonListBuffer[index].visible = false;
                }
                index++;
            }
            this.filteredAppButtonList = [];
            index = 0;
            while (
                index < maxButtons &&
                index < this.filteredAppButtonListBuffer.length
            ) {
                showIndex = this.startIndex + index;
                if (
                    this.filteredAppButtonListBuffer &&
                    this.filteredAppButtonListBuffer[showIndex]
                ) {
                    this.filteredAppButtonListBuffer[showIndex].visible = true;
                    this.filteredAppButtonList.push(
                        this.filteredAppButtonListBuffer[showIndex]
                    );
                }
                index++;
            }
            return true;
        }

        scrollFilteredAppButtonListDown() {
            const maxColumns = this.numberOfColumn;
            if (this.startIndex - maxColumns < 0) {
                return false;
            }
            let index = 0;
            let showIndex;
            const maxButtons = this.numberOfColumn * this.numberOfRow;
            this.startIndex -= maxColumns;
            this.filteredAppButtonList = [];
            while (
                index < maxButtons &&
                index < this.filteredAppButtonListBuffer.length
            ) {
                showIndex = this.startIndex + index;
                if (
                    this.filteredAppButtonListBuffer &&
                    this.filteredAppButtonListBuffer[showIndex]
                ) {
                    this.filteredAppButtonListBuffer[showIndex].visible = true;
                    this.filteredAppButtonList.push(
                        this.filteredAppButtonListBuffer[showIndex]
                    );
                }
                index++;
            }
            return true;
        }

        // Get current focused button index, resets to 0 if value is invalid
        getCurrentIndex() {
            const index = this.filteredAppButtonList.indexOf(
                this.currentButtonFocused
            );
            if (index < 0 || index > this.maxIndex) {
                this.highlightInitialButton();
            }
            return index;
        }

        highlightNextButton() {
            let currentIndex = this.getCurrentIndex();
            if (currentIndex < 0) {
                return;
            } else if (currentIndex == this.maxIndex) {
                if (this.scrollFilteredAppButtonListUp()) {
                    currentIndex -= this.numberOfColumn;
                } else {
                    return;
                }
            }
            if (currentIndex < this.filteredAppButtonList.length - 1) {
                this.highlightButton(
                    this.filteredAppButtonList[currentIndex + 1]
                );
            }
        }

        highlightPreviousButton() {
            let currentIndex = this.getCurrentIndex();
            if (currentIndex > 0) {
                this.highlightButton(
                    this.filteredAppButtonList[currentIndex - 1]
                );
            } else if (currentIndex === 0) {
                if (this.scrollFilteredAppButtonListDown()) {
                    currentIndex += this.numberOfColumn - 1;
                    this.highlightButton(
                        this.filteredAppButtonList[currentIndex]
                    );
                }
            }
        }

        highlightButtonAbove() {
            let currentIndex = this.getCurrentIndex();
            if (currentIndex < this.numberOfColumn) {
                if (this.scrollFilteredAppButtonListDown()) {
                    currentIndex += this.numberOfColumn;
                }
            }
            const nextButton = this.filteredAppButtonList[
                currentIndex - this.numberOfColumn
            ];
            if (nextButton) {
                this.highlightButton(nextButton);
            }
        }

        highlightButtonBelow() {
            let currentIndex = this.getCurrentIndex();
            if (currentIndex < 0) {
                return;
            } else if (currentIndex + this.numberOfColumn > this.maxIndex) {
                if (this.scrollFilteredAppButtonListUp()) {
                    currentIndex -= this.numberOfColumn;
                } else {
                    return;
                }
            }
            const nextButton = this.filteredAppButtonList[
                currentIndex + this.numberOfColumn
            ];

            if (nextButton) {
                this.highlightButton(nextButton);
            }
        }

        highlightButton(button) {
            if (button) {
                if (this.currentButtonFocused) {
                    this.currentButtonFocused.remove_style_class_name(
                        'highlighted'
                    );
                }
                this.currentButtonFocused = button;
                this.currentButtonFocused.add_style_class_name('highlighted');
            }
        }

        // Set starting button as focused
        highlightInitialButton() {
            if (
                this.filteredAppButtonList &&
                this.filteredAppButtonList.length > 0
            ) {
                this.highlightButton(this.filteredAppButtonList[0]);
            }
        }

        // Remove focus
        removeHighlightButton() {
            if (this.currentButtonFocused) {
                this.currentButtonFocused.remove_style_class_name(
                    'highlighted'
                );
            }
            if (this.filteredAppButtonList) {
                this.currentButtonFocused = null;
            }
        }

        addAppButton(button) {
            this.appButtonList.push(button);
            this.add_child(button);
        }

        vfunc_allocate(box, flags) {
            SetAllocation(this, box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            const containerPadding = 16 * this.monitorScale;
            const clockHeight =
                (Me.msThemeManager.clockAppLauncher ? 64 : 0) *
                this.monitorScale;
            const searchHeight = 48 * this.monitorScale;
            const searchMargin = 24 * this.monitorScale;

            const availableWidth =
                contentBox.get_width() - containerPadding * 2;

            const availableHeight =
                contentBox.get_height() -
                containerPadding * 2 -
                searchHeight -
                searchMargin -
                clockHeight;

            const numberOfButtons = this.filteredAppButtonList.length;
            this.numberOfColumn = Math.floor(availableWidth / this.buttonSize);
            this.numberOfRow = Math.floor(availableHeight / this.buttonSize);
            const numberOfRowNeeded = Math.ceil(
                numberOfButtons / this.numberOfColumn
            );
            this.maxIndex =
                this.numberOfColumn *
                    Math.min(this.numberOfRow, numberOfRowNeeded) -
                1;

            const horizontalOffset =
                (contentBox.get_width() -
                    (this.buttonSize * this.numberOfColumn +
                        containerPadding * 2)) /
                2;
            const verticalOffset =
                (contentBox.get_height() -
                    (this.buttonSize * this.numberOfRow +
                        containerPadding * 2 +
                        searchHeight +
                        searchMargin +
                        clockHeight)) /
                2;

            if (this.clockBin) {
                const clockBox = new Clutter.ActorBox();
                clockBox.x1 =
                    contentBox.x1 + horizontalOffset + containerPadding;
                clockBox.x2 =
                    contentBox.x2 - horizontalOffset - containerPadding;
                clockBox.y1 = contentBox.y1 + verticalOffset;
                clockBox.y2 = clockBox.y1 + clockHeight;
                Allocate(this.clockBin, clockBox, flags);
            }

            const searchBox = new Clutter.ActorBox();
            searchBox.x1 = contentBox.x1 + horizontalOffset;
            searchBox.x2 = contentBox.x2 - horizontalOffset;
            searchBox.y1 = contentBox.y1 + verticalOffset + clockHeight;
            searchBox.y2 = searchBox.y1 + searchHeight;
            Allocate(this.inputContainer, searchBox, flags);
            const containerBox = new Clutter.ActorBox();
            containerBox.x1 = contentBox.x1 + horizontalOffset;
            containerBox.x2 = contentBox.x2 - horizontalOffset;
            containerBox.y1 =
                contentBox.y1 +
                verticalOffset +
                searchHeight +
                searchMargin +
                clockHeight;
            containerBox.y2 = contentBox.y2 - verticalOffset;
            Allocate(this.container, containerBox, flags);

            let index;
            for (let y = 0; y < this.numberOfRow; y++) {
                for (let x = 0; x < this.numberOfColumn; x++) {
                    index = x + this.numberOfColumn * y;
                    if (index < this.filteredAppButtonList.length) {
                        let button = this.filteredAppButtonList[index];
                        const buttonBox = new Clutter.ActorBox();
                        buttonBox.x1 =
                            containerBox.x1 +
                            this.buttonSize * x +
                            containerPadding;
                        buttonBox.x2 = buttonBox.x1 + this.buttonSize;
                        buttonBox.y1 =
                            containerBox.y1 +
                            this.buttonSize * y +
                            containerPadding;
                        buttonBox.y2 = buttonBox.y1 + this.buttonSize;
                        button.visible = true;
                        Allocate(button, buttonBox, flags);
                    }
                }
            }
            if (index < numberOfButtons - 1) {
                for (let i = index + 1; i < numberOfButtons; i++) {
                    this.filteredAppButtonList[i].visible = false;
                }
            }

            //hide other buttons
            this.appButtonList
                .filter((button) => {
                    return !this.filteredAppButtonList.includes(button);
                })
                .forEach((button) => {
                    this.hideButton(button, contentBox, flags);
                });

            // Reset focused button to position zero if hidden
            if (this.currentButtonFocused) {
                this.getCurrentIndex();
            }
        }

        hideButton(button, contentBox, flags) {
            const hiddenBox = new Clutter.ActorBox();
            hiddenBox.x1 = contentBox.x1;
            hiddenBox.x2 = contentBox.x1;
            hiddenBox.y1 = contentBox.x1;
            hiddenBox.y2 = contentBox.x1;
            Allocate(button, hiddenBox, flags);
            button.visible = false;
        }
    }
);

var MsApplicationButton = GObject.registerClass(
    class MsApplicationButton extends MatButton {
        _init(app, buttonSize) {
            this.app = app;
            this.buttonSize = buttonSize;
            super._init({});
            this.layout = new St.BoxLayout({
                vertical: true,
                width: this.buttonSize,
                height: this.buttonSize,
                clip_to_allocation: true,
            });

            if (app) {
                this.icon = this.app.create_icon_texture(72);
                this.title = new St.Label({
                    text: this.app.get_name(),
                    x_align: Clutter.ActorAlign.CENTER,
                    style_class: 'subtitle-2',
                    style: 'margin-top:12px',
                });
                this.layout.add_child(this.icon);
                this.layout.add_child(this.title);

                Me.tooltipManager.add(this.title, { relativeActor: this });
            }
            this.layout.set_style('padding:12px;');
            this.set_child(this.layout);
        }
    }
);

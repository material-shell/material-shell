/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as GnomeDesktop from 'gnomedesktop';
import * as GObject from 'gobject';
import * as Shell from 'shell';
import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';
import { PrimaryBorderEffect } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { AppsManager } from 'src/manager/appsManager';
import { Allocate, SetAllocation } from 'src/utils/compatibility';
import { registerGObjectClass } from 'src/utils/gjs';
import { ShellVersionMatch } from 'src/utils/shellVersionMatch';
import { SignalHandle } from 'src/utils/signal';
import { MatButton } from 'src/widget/material/button';
import * as St from 'st';
import { main as Main } from 'ui';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported MsApplicationLauncher */

const BUTTON_SIZE = 124;
@registerGObjectClass
export class MsApplicationLauncher extends St.Widget {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsApplicationLauncher',
        CssName: 'MsApplicationLauncher',
    };
    appListContainer: MsApplicationButtonContainer;
    msWorkspace: MsWorkspace;
    focusEffects?: {
        dimmer: Clutter.BrightnessContrastEffect;
        border?: PrimaryBorderEffect;
    };
    launcherChangedSignal: SignalHandle;
    installedChangedSignal: SignalHandle;

    constructor(msWorkspace: MsWorkspace) {
        super({
            reactive: true,
            style: 'padding:64px',
        });
        this.msWorkspace = msWorkspace;
        this.add_style_class_name('surface-darker');
        this.appListContainer = new MsApplicationButtonContainer(
            this.msWorkspace
        );
        this.initAppListContainer();
        this.launcherChangedSignal = SignalHandle.connect(
            Me.msThemeManager,
            'clock-app-launcher-changed',
            () => {
                this.restartAppListContainer();
            }
        );
        this.installedChangedSignal = SignalHandle.connect(
            Shell.AppSystem.get_default(),
            'installed-changed',
            () => {
                this.restartAppListContainer();
            }
        );
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

    onDestroy() {
        this.launcherChangedSignal.disconnect();
        this.installedChangedSignal.disconnect();
    }

    get dragged() {
        return false;
    }

    restartAppListContainer() {
        this.appListContainer.destroy();
        this.appListContainer = new MsApplicationButtonContainer(
            this.msWorkspace
        );
        this.initAppListContainer();
    }

    initAppListContainer() {
        this.add_child(this.appListContainer);
        AppsManager.getApps().forEach((app) => {
            const button = new MsApplicationButton({
                app,
                buttonSize: this.appListContainer.buttonSize,
            });
            button.connect('notify::hover', () => {
                this.appListContainer.highlightButton(button);
            });
            button.connect('clicked', () => {
                Me.msWindowManager.openApp(app, this.msWorkspace);
                this.appListContainer.reset();
            });
            this.appListContainer.addAppButton(button);
        });
        this.appListContainer.initFilteredAppButtonList();
    }

    vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
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

@registerGObjectClass
export class MsApplicationButtonContainer extends St.Widget {
    appButtonList: MsApplicationButton[];
    currentButtonFocused: MsApplicationButton | null;
    clockLabel: St.Label | undefined;
    dateLabel: St.Label | undefined;
    clockBin: St.BoxLayout | undefined;
    private _wallClock: any;
    signalClock: any;
    inputLayout: St.BoxLayout;
    searchIcon: St.Icon;
    inputContainer: St.Entry;
    private _text: Clutter.Text;
    filteredAppButtonListBuffer: MsApplicationButton[];
    container: St.Widget;
    msWorkspace: MsWorkspace;
    filteredAppButtonList: MsApplicationButton[];
    startIndex: number;
    numberOfColumn: number;
    numberOfRow: number;
    maxIndex: number;

    constructor(msWorkspace: MsWorkspace) {
        super({});
        this.msWorkspace = msWorkspace;
        this.appButtonList = [];
        this.filteredAppButtonList = [];
        this.filteredAppButtonListBuffer = [];
        this.currentButtonFocused = null;
        this.startIndex = 0;

        // These will be updated to more accurate values
        // when vfunc_allocate runs
        this.numberOfRow = 1;
        this.numberOfColumn = 1;
        this.maxIndex = 1;

        if (Me.msThemeManager.clockAppLauncher) {
            const clockLabel = new St.Label({
                style_class: 'headline-6 text-medium-emphasis margin-right-x2',
                y_align: Clutter.ActorAlign.CENTER,
            });
            this.clockLabel = clockLabel;
            const dateLabel = new St.Label({
                style_class: 'headline-6 text-medium-emphasis',
                y_align: Clutter.ActorAlign.CENTER,
            });
            this.dateLabel = dateLabel;
            this.clockBin = new St.BoxLayout({
                x_align: Clutter.ActorAlign.CENTER,
            });
            this.clockBin.add_child(clockLabel);
            this.clockBin.add_child(this.dateLabel);
            this._wallClock = new GnomeDesktop.WallClock({
                time_only: true,
            });
            const updateClock = () => {
                if (clockLabel.mapped) {
                    clockLabel.text = this._wallClock.clock;
                    const date = new Date();
                    const dateFormat = Shell.util_translate_time_string(
                        N_('%A %B %-d')
                    );
                    // TODO: toLocaleFormat is deprecated
                    dateLabel.text = date.toLocaleFormat(dateFormat);
                }
            };

            this.signalClock = this._wallClock.connect(
                'notify::clock',
                updateClock
            );

            // There was a bug when updating the clock while the clock was not in the stage which didn't update the time correct
            clockLabel.connect('notify::mapped', () => {
                if (clockLabel.mapped) {
                    updateClock();
                    clockLabel.queue_relayout();
                }
            });
            clockLabel.connect('destroy', () => {
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
            const symbol = event.get_key_symbol();
            if (ShellVersionMatch('3.34')) {
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
                            this.filteredAppButtonList.length > 0 &&
                            this.currentButtonFocused !=
                                this.filteredAppButtonList[0]
                        ) {
                            this.highlightPreviousButton();
                            return Clutter.EVENT_STOP;
                        } else {
                            return Clutter.EVENT_PROPAGATE;
                        }
                    case Clutter.KEY_Return:
                    case Clutter.KEY_KP_Enter:
                        if (this.currentButtonFocused)
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
                        if (this.currentButtonFocused)
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
        return global.display.get_monitor_scale(this.msWorkspace.monitor.index);
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
                const stringToSearch = `${button.app.get_name()}${button.app.get_id()}${button.app.get_description()}`;
                const regex = new RegExp(this.inputContainer.get_text(), 'i');
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
        let showIndex: number;
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
        let showIndex: number;
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

    // Get current focused button index, highlights the initial button if current button is invalid (but returns -1 in that case)
    getCurrentIndex() {
        const index = this.currentButtonFocused
            ? this.filteredAppButtonList.indexOf(this.currentButtonFocused)
            : -1;
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
            this.highlightButton(this.filteredAppButtonList[currentIndex + 1]);
        }
    }

    highlightPreviousButton() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex > 0) {
            this.highlightButton(this.filteredAppButtonList[currentIndex - 1]);
        } else if (currentIndex === 0) {
            if (this.scrollFilteredAppButtonListDown()) {
                currentIndex += this.numberOfColumn - 1;
                this.highlightButton(this.filteredAppButtonList[currentIndex]);
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
        const nextButton =
            this.filteredAppButtonList[currentIndex - this.numberOfColumn];
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
        const nextButton =
            this.filteredAppButtonList[currentIndex + this.numberOfColumn];

        if (nextButton) {
            this.highlightButton(nextButton);
        }
    }

    highlightButton(button: MsApplicationButton) {
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
            this.currentButtonFocused.remove_style_class_name('highlighted');
        }
        if (this.filteredAppButtonList) {
            this.currentButtonFocused = null;
        }
    }

    addAppButton(button: MsApplicationButton) {
        this.appButtonList.push(button);
        this.add_child(button);
    }

    vfunc_allocate(box: Clutter.ActorBox, flags?: Clutter.AllocationFlags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        const containerPadding = 16 * this.monitorScale;
        const clockHeight =
            (Me.msThemeManager.clockAppLauncher ? 64 : 0) * this.monitorScale;
        const searchHeight = 48 * this.monitorScale;
        const searchMargin = 24 * this.monitorScale;

        const availableWidth = contentBox.get_width() - containerPadding * 2;

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
            clockBox.x1 = contentBox.x1 + horizontalOffset + containerPadding;
            clockBox.x2 = contentBox.x2 - horizontalOffset - containerPadding;
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

        let index = 0;
        for (let y = 0; y < this.numberOfRow; y++) {
            for (let x = 0; x < this.numberOfColumn; x++) {
                index = x + this.numberOfColumn * y;
                if (index < this.filteredAppButtonList.length) {
                    const button = this.filteredAppButtonList[index];
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
        for (let i = index + 1; i < numberOfButtons; i++) {
            this.filteredAppButtonList[i].visible = false;
        }

        // Hide other buttons
        const buttonSet = new Set(this.filteredAppButtonList);
        const hiddenBox = new Clutter.ActorBox();
        hiddenBox.x1 = contentBox.x1;
        hiddenBox.x2 = contentBox.x1;
        hiddenBox.y1 = contentBox.x1;
        hiddenBox.y2 = contentBox.x1;
        for (const button of this.appButtonList) {
            if (!buttonSet.has(button)) {
                Allocate(button, hiddenBox, flags);
                button.visible = false;
            }
        }

        // Reset focused button to position zero if hidden
        if (this.currentButtonFocused) {
            this.getCurrentIndex();
        }
    }
}

@registerGObjectClass
export class MsApplicationButton extends MatButton {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'MsApplicationButton',
    };

    app: Shell.App;
    buttonSize: number;
    layout: St.BoxLayout;
    icon: any;
    title: St.Label | undefined;
    constructor({ app, buttonSize }: { app: Shell.App; buttonSize: number }) {
        super({});
        this.app = app;
        this.buttonSize = buttonSize;
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

const { Clutter, GObject, St, Shell, Gio } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Main = imports.ui.main;
const { AppsManager } = Me.imports.src.manager.appsManager;
const { MatButton } = Me.imports.src.widget.material.button;

const BUTTON_SIZE = 124;
/* exported MsApplicationLauncher */
var MsApplicationLauncher = GObject.registerClass(
    class MsApplicationLauncher extends St.Widget {
        _init(msWorkspace) {
            super._init({
                style: 'padding:64px'
            });
            this.msWorkspace = msWorkspace;
            this.add_style_class_name('surface-darker');

            this.appListContainer = new MsApplicationButtonContainer();
            this.add_child(this.appListContainer);
            AppsManager.getApps().forEach(app => {
                const button = new MsApplicationButton(app);
                button.connect('clicked', () => {
                    const msWindow = Me.msWindowManager.createNewMsWindow(
                        app.id
                    );
                    this.msWorkspace.addMsWindow(msWindow);
                    Me.msWindowManager.openAppForMsWindow(msWindow);
                    this.appListContainer.reset();
                });
                this.appListContainer.addAppButton(button);
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

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            const containerBox = new Clutter.ActorBox();
            const minSize = Math.min(
                contentBox.get_width(),
                contentBox.get_height()
            );
            const workArea = Main.layoutManager.getWorkAreaForMonitor(
                this.msWorkspace.monitor
            );
            const containerWidth = Math.min(
                contentBox.get_width() * 0.8,
                workArea.width / 2
            );
            containerBox.x1 =
                contentBox.x1 + (contentBox.get_width() - containerWidth) / 2;
            containerBox.x2 =
                contentBox.x2 - (contentBox.get_width() - containerWidth) / 2;
            containerBox.y1 = contentBox.y1 + 0.1 * minSize;
            containerBox.y2 = contentBox.y2 - 0.1 * minSize;
            this.appListContainer.allocate(containerBox, flags);
        }
    }
);

var MsApplicationButtonContainer = GObject.registerClass(
    class MsApplicationButtonContainer extends St.Widget {
        _init() {
            super._init({});
            this.appButtonList = [];
            this.currentButtonFocused = null;
            this.inputLayout = new St.BoxLayout({});
            this.searchIcon = new St.Icon({
                style_class: 'search-entry-icon',
                icon_name: 'edit-find-symbolic'
            });
            this.inputContainer = new St.Entry({
                style_class: 'search-entry',
                /* Translators: this is the text displayed
                   in the search entry when no search is
                   active; it should not exceed ~30
                   characters. */
                hint_text: _('Type to search…'),
                track_hover: true,
                can_focus: true
            });
            this.inputContainer.set_primary_icon(this.searchIcon);
            this._text = this.inputContainer.clutter_text;
            this._text.connect('text-changed', () => {
                log(this.inputContainer.get_text());
                this.updateFilteredAppButtonList();
            });
            this._text.connect('key-press-event', (entry, event) => {
                let symbol = event.get_key_symbol();
                switch (symbol) {
                    case Clutter.Escape:
                        return Clutter.EVENT_STOP;
                    case Clutter.Tab:
                        this.highlightNextButton();
                        return Clutter.EVENT_STOP;
                    case Clutter.ISO_Left_Tab:
                        this.highlightPreviousButton();
                        return Clutter.EVENT_STOP;
                    case Clutter.Return:
                    case Clutter.KP_Enter:
                        this.currentButtonFocused.emit('clicked', 0);
                        return Clutter.EVENT_STOP;
                }
                return Clutter.EVENT_PROPAGATE;
            });

            this.add_child(this.inputContainer);
            this.container = new St.Widget();
            this.container.add_style_class_name('surface');
            this.container.set_style('border-radius:16px;');
            this.add_child(this.container);
            this.expandButton = new MatButton({
                child: new St.Label({
                    text: 'VIEW ALL APPLICATIONS',
                    style_class: 'body-2'
                })
            });
            this.expandButton.add_style_class_name('surface-lighter');
            this.expandButton.set_style('border-radius: 0,0 ,16px, 16px;');

            this.add_child(this.expandButton);
        }
        reset() {
            this.inputContainer.set_text('');
        }

        updateFilteredAppButtonList() {
            this.filteredAppButtonList = this.appButtonList.filter(button => {
                let stringToSearch = `${button.app.get_name()}${button.app.get_id()}`;
                let regex = new RegExp(this.inputContainer.get_text(), 'i');
                if (regex.test(stringToSearch)) {
                    button.visible = true;
                    return true;
                } else {
                    button.visible = false;
                    return false;
                }
            });
            this.highlightButton(this.filteredAppButtonList[0]);
        }

        highlightNextButton() {
            let currentIndex = this.filteredAppButtonList.indexOf(
                this.currentButtonFocused
            );
            if (currentIndex != this.filteredAppButtonList.length - 1) {
                this.highlightButton(
                    this.filteredAppButtonList[currentIndex + 1]
                );
            }
        }

        highlightPreviousButton() {
            let currentIndex = this.filteredAppButtonList.indexOf(
                this.currentButtonFocused
            );
            if (currentIndex != 0) {
                this.highlightButton(
                    this.filteredAppButtonList[currentIndex - 1]
                );
            }
        }

        highlightButton(button) {
            if (this.currentButtonFocused) {
                this.currentButtonFocused.remove_style_class_name(
                    'highlighted'
                );
            }
            this.currentButtonFocused = button;
            this.currentButtonFocused.add_style_class_name('highlighted');
        }

        addAppButton(button) {
            this.appButtonList.push(button);
            this.add_child(button);
            this.updateFilteredAppButtonList();
        }

        vfunc_allocate(box, flags) {
            this.set_allocation(box, flags);
            let themeNode = this.get_theme_node();
            const contentBox = themeNode.get_content_box(box);
            const containerPadding = 16;
            let expandButtonHeight = 48;
            const searchHeight = 48;
            const searchMargin = 24;
            const availableWidth =
                contentBox.get_width() - containerPadding * 2;
            const availableHeight =
                contentBox.get_height() -
                containerPadding * 2 -
                expandButtonHeight -
                searchHeight -
                searchMargin;
            const numberOfButtons = this.filteredAppButtonList.length;
            const numberOfColumn = Math.floor(availableWidth / BUTTON_SIZE);
            const maxNumberOfRow = Math.floor(availableHeight / BUTTON_SIZE);
            const numberOfRowNeeded = Math.ceil(
                numberOfButtons / numberOfColumn
            );
            const numberOfRow = Math.min(maxNumberOfRow, numberOfRowNeeded);
            expandButtonHeight =
                numberOfRow === numberOfRowNeeded ? 0 : expandButtonHeight;

            const horizontalOffset =
                (contentBox.get_width() -
                    (BUTTON_SIZE * numberOfColumn + containerPadding * 2)) /
                2;
            const verticalOffset =
                (contentBox.get_height() -
                    (BUTTON_SIZE * numberOfRow +
                        containerPadding * 2 +
                        expandButtonHeight +
                        searchHeight +
                        searchMargin)) /
                2;
            const searchBox = new Clutter.ActorBox();
            searchBox.x1 = contentBox.x1 + horizontalOffset;
            searchBox.x2 = contentBox.x2 - horizontalOffset;
            searchBox.y1 = contentBox.y1 + verticalOffset;
            searchBox.y2 = searchBox.y1 + searchHeight;
            this.inputContainer.allocate(searchBox, flags);
            const containerBox = new Clutter.ActorBox();
            containerBox.x1 = contentBox.x1 + horizontalOffset;
            containerBox.x2 = contentBox.x2 - horizontalOffset;
            containerBox.y1 =
                contentBox.y1 + verticalOffset + searchHeight + searchMargin;
            containerBox.y2 = contentBox.y2 - verticalOffset;
            this.container.allocate(containerBox, flags);

            let index;
            for (let y = 0; y < numberOfRow; y++) {
                for (let x = 0; x < numberOfColumn; x++) {
                    index = x + numberOfColumn * y;
                    if (index < this.filteredAppButtonList.length) {
                        let button = this.filteredAppButtonList[index];
                        const buttonBox = new Clutter.ActorBox();
                        buttonBox.x1 =
                            containerBox.x1 +
                            BUTTON_SIZE * x +
                            containerPadding;
                        buttonBox.x2 = buttonBox.x1 + BUTTON_SIZE;
                        buttonBox.y1 =
                            containerBox.y1 +
                            BUTTON_SIZE * y +
                            containerPadding;
                        buttonBox.y2 = buttonBox.y1 + BUTTON_SIZE;
                        button.visible = true;
                        button.allocate(buttonBox, flags);
                    }
                }
            }
            if (index < this.filteredAppButtonList.length - 1) {
                for (
                    index = index + 1;
                    index < this.filteredAppButtonList.length;
                    index++
                ) {
                    this.filteredAppButtonList[index].visible = false;
                }
                this.expandButton.visible = true;
                const expandButtonBox = new Clutter.ActorBox();
                expandButtonBox.x1 = containerBox.x1;
                expandButtonBox.x2 = containerBox.x2;
                expandButtonBox.y1 = containerBox.y2 - expandButtonHeight;
                expandButtonBox.y2 = containerBox.y2;
                this.expandButton.allocate(expandButtonBox, flags);
            } else {
                this.expandButton.visible = false;
            }

            //hide other buttons
            this.appButtonList
                .filter(button => {
                    return !this.filteredAppButtonList.includes(button);
                })
                .forEach(button => {
                    const hiddenBox = new Clutter.ActorBox();
                    hiddenBox.x1 = contentBox.x1;
                    hiddenBox.x2 = contentBox.x1;
                    hiddenBox.y1 = contentBox.x1;
                    hiddenBox.y2 = contentBox.x1;
                    button.allocate(hiddenBox, flags);
                    button.visible = false;
                });
        }
    }
);

var MsApplicationButton = GObject.registerClass(
    class MsApplicationButton extends MatButton {
        _init(app) {
            super._init({});
            this.app = app;
            this.icon = this.app.create_icon_texture(72);
            this.title = new St.Label({
                text: this.app.get_name(),
                x_align: Clutter.ActorAlign.CENTER,
                style_class: 'subtitle-2',
                style: 'margin-top:12px'
            });
            this.layout = new St.BoxLayout({
                vertical: true,
                width: BUTTON_SIZE,
                height: BUTTON_SIZE,
                clip_to_allocation: true
            });
            this.layout.set_style('padding:12px;');
            this.layout.add_child(this.icon);
            this.layout.add_child(this.title);
            this.set_child(this.layout);
        }
    }
);

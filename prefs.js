const { GObject, Gtk, Gdk, Gio, GLib } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { ShellVersionMatch } = Me.imports.src.utils.compatibility;

const schemaSource = Gio.SettingsSchemaSource.new_from_directory(
    Me.dir.get_child('schemas').get_path(),
    Gio.SettingsSchemaSource.get_default(),
    false
);

const WidgetType = {
    BOOLEAN: 0,
    COMBO: 1,
    INT: 2,
    DECIMAL: 3,
    INPUT: 4,
    COLOR: 5,
    CUSTOM: 6,
};

// eslint-disable-next-line no-unused-vars
function init() {}

// eslint-disable-next-line no-unused-vars
function buildPrefsWidget() {
    const tabsContainer = new TabsContainer();
    const settingsTab = new SettingsTab();
    tabsContainer.addTab('Settings', settingsTab);
    const hotkeysTab = new HotkeysTab(
        'org.gnome.shell.extensions.materialshell.bindings'
    );
    tabsContainer.addHotkeysTab('Hotkeys', hotkeysTab);

    const theme = new SettingCategory(
        'Theme',
        'org.gnome.shell.extensions.materialshell.theme'
    );

    theme.addSetting('theme', WidgetType.COMBO);
    theme.addSetting('primary-color', WidgetType.COLOR);
    theme.addSetting('vertical-panel-position', WidgetType.COMBO);
    theme.addSetting('horizontal-panel-position', WidgetType.COMBO);
    theme.addSetting('panel-size', WidgetType.INT);
    theme.addSetting('panel-opacity', WidgetType.INT);
    theme.addSetting('panel-icon-style', WidgetType.COMBO);
    theme.addSetting('taskbar-item-style', WidgetType.COMBO);
    theme.addSetting('surface-opacity', WidgetType.INT);
    if (!ShellVersionMatch('3.34')) {
        theme.addSetting('blur-background', WidgetType.BOOLEAN);
    }
    theme.addSetting('clock-horizontal', WidgetType.BOOLEAN);
    theme.addSetting('clock-app-launcher', WidgetType.BOOLEAN);
    theme.addSetting('focus-effect', WidgetType.COMBO);

    settingsTab.addCategory(theme);

    const tweaks = new SettingCategory(
        'Tweaks',
        'org.gnome.shell.extensions.materialshell.tweaks'
    );

    tweaks.addSetting('cycle-through-windows', WidgetType.BOOLEAN);
    tweaks.addSetting('cycle-through-workspaces', WidgetType.BOOLEAN);
    tweaks.addSetting('disable-notifications', WidgetType.BOOLEAN);
    tweaks.addSetting('enable-persistence', WidgetType.BOOLEAN);

    settingsTab.addCategory(tweaks);

    const layouts = new SettingCategory(
        'Tiling layouts',
        'org.gnome.shell.extensions.materialshell.layouts'
    );

    const tilingLayouts = [
        'maximize',
        'split',
        'half',
        'half-horizontal',
        'half-vertical',
        'ratio',
        'grid',
        'float',
        'simple',
        'simple-horizontal',
        'simple-vertical',
    ];

    layouts.addSetting(
        'default-layout',
        WidgetType.CUSTOM,
        getDefaultLayoutComboBox(tilingLayouts, layouts.settings)
    );

    tilingLayouts.forEach((layoutKey) => {
        layouts.addSetting(layoutKey, WidgetType.BOOLEAN);
        if (layoutKey === 'ratio') {
            layouts.addSetting('ratio-value', WidgetType.DECIMAL);
        }
    });

    layouts.addSetting('gap', WidgetType.INT);
    layouts.addSetting('use-screen-gap', WidgetType.BOOLEAN);
    layouts.addSetting('screen-gap', WidgetType.INT);
    layouts.addSetting('tween-time', WidgetType.DECIMAL);
    layouts.addSetting('windows-excluded', WidgetType.INPUT);

    settingsTab.addCategory(layouts);

    tabsContainer.show_all();

    return tabsContainer;
}

var TabsContainer = GObject.registerClass(
    class TabsContainer extends Gtk.Box {
        _init() {
            super._init({
                orientation: Gtk.Orientation.VERTICAL,
            });
            this.stack = new Gtk.Stack({
                transition_type: 6,
                margin_left: 16,
                margin_right: 16,
                margin_bottom: 16,
            });
            this.stackSwitcher = new Gtk.StackSwitcher({
                margin_left: 16,
                margin_right: 16,
            });
            this.stackSwitcher.set_stack(this.stack);
            this.pack_start(this.stackSwitcher, false, false, 0);
            this.pack_start(this.stack, true, true, 0);
        }

        addTab(title, tab) {
            this.stack.add_titled(tab, title, title);
        }

        addHotkeysTab(title, hotkeysTab) {
            // Add some padding to TreeView
            const cssProvider = new Gtk.CssProvider();
            const style = `
                .tree-view {
                    padding-left: 16px;
                    padding-right: 16px;
                }
            `;
            cssProvider.load_from_data(style);
            Gtk.StyleContext.add_provider_for_screen(
                Gdk.Screen.get_default(),
                cssProvider,
                Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
            );
            const styleContext = hotkeysTab.get_style_context();
            styleContext.add_class('tree-view');

            // Search for action and hotkeys
            hotkeysTab.treeView.set_enable_search(true);
            hotkeysTab.treeView.set_search_column(1);
            hotkeysTab.treeView.set_search_equal_func(
                (model, column, key, iter) => {
                    const index = model.get_value(iter, 0);
                    const action = model.get_value(iter, 1).toLowerCase();
                    const keys = hotkeysTab.settings
                        .get_strv(index)[0]
                        .replace(/\>/gi, '+')
                        .replace(/\</gi, '')
                        .toLowerCase();
                    if (
                        action.includes(key.toLowerCase()) ||
                        keys.includes(key.toLowerCase())
                    ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );

            // Move search widget to top (it is hidden in Float layout)
            hotkeysTab.treeView.set_search_position_func((treeView, search) => {
                let window = this.get_toplevel();
                let [x, y] = window.get_position();
                let [width, height] = window.get_size();
                search.move(x + width / 2 + 64, y);
            });

            // Grab focus for keyboard navigation and search
            hotkeysTab.connect('realize', () => {
                hotkeysTab.treeView.grab_focus();
            });

            this.stack.add_titled(hotkeysTab, title, title);
        }
    }
);

var SettingsTab = GObject.registerClass(
    class SettingsTab extends Gtk.ScrolledWindow {
        _init() {
            super._init({ vexpand: true });
            this.content = new Gtk.VBox();
            this.add(this.content);
        }

        addCategory(category) {
            this.content.pack_start(category, false, false, 0);
        }
    }
);

var HotkeysTab = GObject.registerClass(
    class HotkeysTab extends Gtk.ScrolledWindow {
        _init(schema) {
            super._init({
                vexpand: true,
            });
            const model = new Gtk.ListStore();
            model.set_column_types([
                GObject.TYPE_STRING,
                GObject.TYPE_STRING,
                GObject.TYPE_INT,
                GObject.TYPE_INT,
            ]);
            this.treeView = new Gtk.TreeView({ expand: true, model: model });
            this.add(this.treeView);
            this.settings = new Gio.Settings({
                settings_schema: schemaSource.lookup(schema, false),
            });

            this.settings
                .list_keys()
                .map((key) => {
                    const [accelKey, mods] = Gtk.accelerator_parse(
                        this.settings.get_strv(key)[0]
                    );
                    const settingKey = this.settings.settings_schema.get_key(
                        key
                    );
                    const summary = settingKey.get_summary();

                    return {
                        key,
                        summary,
                        mods,
                        accelKey,
                    };
                })
                .sort((modelEntryA, modelEntryB) => {
                    return modelEntryA.summary > modelEntryB.summary;
                })
                .forEach((modelEntry) => {
                    const row = model.insert(-1);
                    model.set(
                        row,
                        [0, 1, 2, 3],
                        [
                            modelEntry.key,
                            modelEntry.summary,
                            modelEntry.mods,
                            modelEntry.accelKey,
                        ]
                    );
                });

            const cellTextRenderer = new Gtk.CellRendererText();
            const actionColumn = new Gtk.TreeViewColumn({
                title: 'Action',
                expand: true,
            });
            actionColumn.pack_start(cellTextRenderer, true);
            actionColumn.add_attribute(cellTextRenderer, 'text', 1);

            const cellAccelRenderer = new Gtk.CellRendererAccel({
                editable: true,
                'accel-mode': Gtk.CellRendererAccelMode.OTHER,
            });
            cellAccelRenderer.connect('accel-cleared', (rend, strIter) => {
                const [success, iter] = model.get_iter_from_string(strIter);
                if (!success) {
                    throw new Error('Something be broken, yo.');
                }

                const name = model.get_value(iter, 0);
                model.set(iter, [3], [0]);
                this.settings.set_strv(name, ['']);
            });
            cellAccelRenderer.connect(
                'accel-edited',
                (rend, strIter, key, mods) => {
                    const value = Gtk.accelerator_name(key, mods);
                    const [success, iter] = model.get_iter_from_string(strIter);
                    if (!success) {
                        throw new Error('Something be broken, yo.');
                    }

                    const name = model.get_value(iter, 0);
                    model.set(iter, [2, 3], [mods, key]);
                    this.settings.set_strv(name, [value]);
                }
            );

            const hotkeyColumn = new Gtk.TreeViewColumn({
                title: 'Hotkeys',
                min_width: 200,
            });
            hotkeyColumn.pack_end(cellAccelRenderer, false);
            hotkeyColumn.add_attribute(cellAccelRenderer, 'accel-mods', 2);
            hotkeyColumn.add_attribute(cellAccelRenderer, 'accel-key', 3);

            this.treeView.append_column(actionColumn);
            this.treeView.append_column(hotkeyColumn);
        }
    }
);

var SettingCategory = GObject.registerClass(
    class SettingCategory extends Gtk.ListBox {
        _init(title, schema) {
            super._init({
                valign: Gtk.Align.START,
            });
            this.schema = schema;
            this.settings = new Gio.Settings({
                settings_schema: schemaSource.lookup(schema, false),
            });
            this.addTitle(title);
        }

        addTitle(title) {
            let titleRow = new Gtk.ListBoxRow({
                activatable: false,
                selectable: false,
            });
            titleRow.add(
                new Gtk.Label({
                    label: `<span size="large">${title}</span>`,
                    xalign: 0,
                    use_markup: true,
                    margin_left: 0,
                    margin_top: 16,
                    margin_bottom: 8,
                })
            );
            this.add(titleRow);
        }

        addSetting(key, type, customWidget) {
            const settingKey = this.settings.settings_schema.get_key(key);
            const summary = settingKey.get_summary();
            const description = settingKey.get_description();
            const nameLabel = new Gtk.Label({
                label: `<span size="medium">${summary}</span>`,
                xalign: 0,
                use_markup: true,
                margin_top: 8,
                margin_left: 8,
            });
            const descriptionLabel = new Gtk.Label({
                label: `<span size="small">${description}</span>`,
                xalign: 0,
                use_markup: true,
                margin_top: 8,
                margin_left: 8,
                margin_bottom: 8,
            });
            const labelsVBox = new Gtk.VBox();
            labelsVBox.pack_start(nameLabel, false, false, 0);
            labelsVBox.pack_start(descriptionLabel, false, false, 0);

            let widget;
            let values;
            let rgba;
            switch (type) {
                case WidgetType.BOOLEAN:
                    widget = new Gtk.Switch({ valign: Gtk.Align.CENTER });
                    this.settings.bind(
                        key,
                        widget,
                        'active',
                        Gio.SettingsBindFlags.DEFAULT
                    );
                    break;

                case WidgetType.COMBO:
                    widget = new Gtk.ComboBoxText();
                    values = settingKey
                        .get_range()
                        .get_child_value(1)
                        .recursiveUnpack();
                    values.forEach((value) => {
                        widget.append(value, value);
                    });
                    this.settings.bind(
                        key,
                        widget,
                        'active-id',
                        Gio.SettingsBindFlags.DEFAULT
                    );
                    break;

                case WidgetType.COLOR:
                    widget = new Gtk.ColorButton();
                    rgba = new Gdk.RGBA();
                    rgba.parse(this.settings.get_string(key));
                    widget.set_rgba(rgba);
                    widget.connect('notify::color', (button) => {
                        let rgba = button.get_rgba();
                        let css = rgba.to_string();
                        let hexString = cssHexString(css);
                        this.settings.set_string(key, hexString);
                    });
                    break;

                case WidgetType.INT:
                    widget = Gtk.SpinButton.new_with_range(0, 1000, 1);
                    this.settings.bind(
                        key,
                        widget.get_adjustment(),
                        'value',
                        Gio.SettingsBindFlags.DEFAULT
                    );
                    break;

                case WidgetType.DECIMAL:
                    widget = Gtk.SpinButton.new_with_range(0, 1, 0.1);
                    this.settings.bind(
                        key,
                        widget.get_adjustment(),
                        'value',
                        Gio.SettingsBindFlags.DEFAULT
                    );
                    break;

                case WidgetType.INPUT:
                    widget = Gtk.Entry.new();
                    this.settings.bind(
                        key,
                        widget,
                        'text',
                        Gio.SettingsBindFlags.DEFAULT
                    );
                    break;

                case WidgetType.CUSTOM:
                    widget = customWidget;
                    break;
            }
            const rowHBox = new Gtk.HBox();
            rowHBox.pack_start(labelsVBox, true, true, 10);
            widget.margin_top = widget.margin_bottom = 8;
            rowHBox.pack_start(widget, false, false, 10);

            const listRow = new Gtk.ListBoxRow();
            listRow.add(rowHBox);
            this.add(listRow);
        }
    }
);

function cssHexString(css) {
    let rrggbb = '#';
    let start;
    for (let loop = 0; loop < 3; loop++) {
        let end = 0;
        let xx = '';
        for (let loop = 0; loop < 2; loop++) {
            while (true) {
                let x = css.slice(end, end + 1);
                if (x == '(' || x == ',' || x == ')') break;
                end++;
            }
            if (loop == 0) {
                end++;
                start = end;
            }
        }
        xx = parseInt(css.slice(start, end)).toString(16);
        if (xx.length == 1) xx = `0${xx}`;
        rrggbb += xx;
        css = css.slice(end);
    }
    return rrggbb;
}

function getDefaultLayoutComboBox(tilingLayouts, setting) {
    let widget = new Gtk.ComboBoxText();
    let refreshComboBox = () => {
        widget.remove_all();
        tilingLayouts.forEach((layoutKey) => {
            if (setting.get_boolean(layoutKey)) {
                widget.append(layoutKey, layoutKey);
            }
        });
    };
    tilingLayouts.forEach((layoutKey) => {
        if (setting.get_boolean(layoutKey)) {
            widget.append(layoutKey, layoutKey);
        }
        setting.connect(`changed::${layoutKey}`, refreshComboBox);
    });
    setting.bind(
        'default-layout',
        widget,
        'active-id',
        Gio.SettingsBindFlags.DEFAULT
    );
    return widget;
}

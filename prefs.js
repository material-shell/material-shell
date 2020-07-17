const { GObject, Gtk, Gdk, Gio, GLib } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.src.utils.settings;
let defaultLayoutComboBox = null;
// eslint-disable-next-line no-unused-vars
function init() { }

const makePage = (title, content) => {
    const tabWindow = new Gtk.ScrolledWindow({ vexpand: true });
    tabWindow.add(content);
    const tabLabel = new Gtk.Label({
        label: title,
        halign: Gtk.Align.START,
        use_markup: false
    });
    tabWindow.set_name(title);
    return [tabWindow, tabLabel];
};

const makeItemRow = (name, description, item) => {
    const nameLabel = new Gtk.Label({ xalign: 0 });
    nameLabel.set_markup(`<span size="medium">${name}</span>`);

    const descriptionLabel = new Gtk.Label({ xalign: 0 });
    descriptionLabel.set_markup(`<span size="small">${description}</span>`);

    const labelsVBox = new Gtk.VBox();
    labelsVBox.pack_start(nameLabel, false, false, 0);
    labelsVBox.pack_start(descriptionLabel, false, false, 0);

    const rowHBox = new Gtk.HBox();
    rowHBox.pack_start(labelsVBox, true, true, 10);
    rowHBox.pack_start(item, false, false, 0);

    const listRow = new Gtk.ListBoxRow();
    listRow.add(rowHBox);

    return listRow;
};

const makeItemList = (rows) => {
    const listBox = new Gtk.ListBox({
        valign: Gtk.Align.START,
    });
    const listWrapper = new Gtk.VBox({
        border_width: 10,
    });
    rows.forEach((row) => {
        listBox.add(row);
    });
    listWrapper.add(listBox);
    return listWrapper;
};

const hotKeysLabels = {
    'previous-window': 'Focus the previous window',
    'next-window': 'Focus the next window',
    'previous-workspace': 'Focus the previous workspace',
    'next-workspace': 'Focus the next workspace',
    'kill-focused-window': 'Kill the current window',
    'move-window-left': 'Move the current window to the left',
    'move-window-right': 'Move the current window to the right',
    'move-window-top': 'Move the current window to upper workspace',
    'move-window-bottom': 'Move the current window to lower workspace',
    'cycle-tiling-layout':
        'Cycle around the tiling layout on the current workspace',
    'reverse-cycle-tiling-layout':
        'Cycle around in reverse order the tiling layout on the current workspace',
    'toggle-material-shell-ui':
        'Toggle the material-shell UI to simulate fullscreen',
};

const layouts = {
    maximize: 'Maximize all windows',
    split: 'Put all windows side by side, two at a time',
    float: 'Windows are not tiled',
    half: 'Tile windows according to screen ratio',
    'half-horizontal': 'Tile windows horizontally',
    'half-vertical': 'Tile windows vertically',
    ratio: 'Tile windows according to the ratio of remaining space',
    grid: 'Tile windows according to a regular grid',
    simple: 'Split screen unidirectionally according to screen ratio',
    'simple-horizontal': 'Split screen horizontally',
    'simple-vertical': 'Split screen vertically',
};

// eslint-disable-next-line no-unused-vars
function buildPrefsWidget() {
    const notebook = new Gtk.Notebook();
    GlobalSettingsTab(notebook);
    accelTab(notebook);
    layoutsTab(notebook);
    layoutsSettingsTab(notebook);
    let mainVBox = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
    });
    mainVBox.pack_start(notebook, true, true, 0);
    mainVBox.show_all();
    return mainVBox;
}

function accelTab(notebook) {
    const settings = getSettings('bindings');

    const model = new Gtk.ListStore();
    model.set_column_types([
        GObject.TYPE_STRING,
        GObject.TYPE_STRING,
        GObject.TYPE_INT,
        GObject.TYPE_INT,
    ]);

    Object.entries(hotKeysLabels).forEach(([key, label]) => {
        const [accelKey, mods] = Gtk.accelerator_parse(
            settings.get_strv(key)[0]
        );
        const row = model.insert(55);
        model.set(row, [0, 1, 2, 3], [key, label, mods, accelKey]);
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
        'accel-mode': Gtk.CellRendererAccelMode.GTK,
    });
    cellAccelRenderer.connect('accel-cleared', (rend, strIter) => {
        const [success, iter] = model.get_iter_from_string(strIter);
        if (!success) {
            throw new Error('Something be broken, yo.');
        }

        const name = model.get_value(iter, 0);
        model.set(iter, [3], [0]);
        settings.set_strv(name, ['']);
    });
    cellAccelRenderer.connect('accel-edited', (rend, strIter, key, mods) => {
        const value = Gtk.accelerator_name(key, mods);
        const [success, iter] = model.get_iter_from_string(strIter);
        if (!success) {
            throw new Error('Something be broken, yo.');
        }

        const name = model.get_value(iter, 0);
        model.set(iter, [2, 3], [mods, key]);
        settings.set_strv(name, [value]);
    });

    const hotkeyColumn = new Gtk.TreeViewColumn({
        title: 'hotkeys',
    });
    hotkeyColumn.pack_end(cellAccelRenderer, false);
    hotkeyColumn.add_attribute(cellAccelRenderer, 'accel-mods', 2);
    hotkeyColumn.add_attribute(cellAccelRenderer, 'accel-key', 3);

    const treeview = new Gtk.TreeView({
        expand: true,
        model: model,
    });
    treeview.append_column(actionColumn);
    treeview.append_column(hotkeyColumn);

    const accelGrid = new Gtk.Grid({
        column_spacing: 10,
        margin: 24,
        orientation: Gtk.Orientation.VERTICAL,
        row_spacing: 10,
    });
    accelGrid.add(
        new Gtk.Label({
            label: 'Keyboard shortcuts.',
            halign: Gtk.Align.START,
            justify: Gtk.Justification.LEFT,
            use_markup: false,
            wrap: true,
        })
    );
    accelGrid.add(treeview);

    notebook.append_page(...makePage('Shortcuts', accelGrid));
}
function getActiveLayouts() {
    const settings = getSettings('layouts');
    return Object.keys(layouts).filter(entry => {
        return settings.get_boolean(entry.toString()) === true;
    });
}
function getDefaultLayoutModel() {
    let model = new Gtk.ListStore();
    model.set_column_types([GObject.TYPE_STRING, GObject.TYPE_STRING]);
    let activeLayouts = getActiveLayouts();
    activeLayouts.forEach(layout => {
        model.set(model.append(), [0, 1], [layout, layout]);
    });
    return model;
}
function getDefaultLayoutCheckbox() {
    const settings = getSettings('layouts');
    let model = getDefaultLayoutModel();
    let activeLayouts = getActiveLayouts();
    defaultLayoutComboBox = new Gtk.ComboBox({ model: model });
    let renderer = new Gtk.CellRendererText();
    defaultLayoutComboBox.pack_start(renderer, true);
    defaultLayoutComboBox.add_attribute(renderer, 'text', 1);
    let defaultLayout = settings.get_string('defaultlayout');
    defaultLayoutComboBox.set_active(activeLayouts.indexOf(defaultLayout));
    defaultLayoutComboBox.connect('changed', (entry) => {
        let [success, iter] = defaultLayoutComboBox.get_active_iter();
        if (!success) return;
        let value = model.get_value(iter, 0);
        settings.set_string('defaultlayout', value);
    });
    return defaultLayoutComboBox;


}

function layoutsTab(notebook) {
    const settings = getSettings('layouts');
    // update the list of active layouts every time a layout-switch is toggled
    for (const [layoutKey, layoutDescription] of Object.entries(layouts)) {
        settings.connect(`changed::${layoutKey}`, () => {
            // update the model of the combobox
            let model = getDefaultLayoutModel();
            defaultLayoutComboBox.set_model(model);
            let activeLayouts = getActiveLayouts();
            let defaultLayout = settings.get_string('defaultlayout');
            defaultLayoutComboBox.set_active(activeLayouts.indexOf(defaultLayout));
        });
    }
    let setDefaultLayoutAdded = false;
    const layoutItemCreator = (rows, [layout, description]) => {
        if (!setDefaultLayoutAdded) {
            let cbox = getDefaultLayoutCheckbox();
            rows.push(
                makeItemRow(
                    'Default layout',
                    'Determines the default layout for Material Shell. This will only affect the workspaces that will be created after the selection',
                    cbox
                )
            );
            setDefaultLayoutAdded = true;
        }
        const name = layout
            .replace('-', ' ')
            .replace(/^\w/g, (c) => c.toUpperCase());
        const item = new Gtk.Switch({ valign: Gtk.Align.CENTER });
        settings.bind(layout, item, 'active', Gio.SettingsBindFlags.DEFAULT);
        rows.push(makeItemRow(name, description, item));
        if (layout === 'ratio') {
            const ratio = Gtk.SpinButton.new_with_range(0, 1, 0.01);
            settings.bind(
                'ratio-value',
                ratio.get_adjustment(),
                'value',
                Gio.SettingsBindFlags.DEFAULT
            );
            rows.push(
                makeItemRow(
                    'Ratio value',
                    'Ratio between frame and available space.',
                    ratio
                )
            );
        }
        return rows;
    };

    notebook.append_page(
        ...makePage(
            'Layouts',
            makeItemList(Object.entries(layouts).reduce(layoutItemCreator, []))
        )
    );
}



function layoutsSettingsTab(notebook) {
    const settings = getSettings('layouts');
    const itemRows = [];

    const gap = Gtk.SpinButton.new_with_range(0, 1000, 1);
    settings.bind(
        'gap',
        gap.get_adjustment(),
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );
    itemRows.push(
        makeItemRow(
            'Gap size',
            'Determines the gap size in pixel between windows.',
            gap
        )
    );
    const useScreenGap = new Gtk.Switch({ valign: Gtk.Align.CENTER });
    itemRows.push(
        makeItemRow(
            'Use a different gap size for screen',
            'Determines whether to use a different screen gap config.',
            useScreenGap
        )
    );
    settings.bind(
        'use-screen-gap',
        useScreenGap,
        'active',
        Gio.SettingsBindFlags.DEFAULT
    );

    const screenGap = Gtk.SpinButton.new_with_range(0, 1000, 1);
    settings.bind(
        'screen-gap',
        screenGap.get_adjustment(),
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );
    settings.bind(
        'use-screen-gap',
        screenGap,
        'sensitive',
        Gio.SettingsBindFlags.DEFAULT
    );
    itemRows.push(
        makeItemRow(
            'Screen edge gap size',
            'Determines the screen edge gap size in pixel between windows.',
            screenGap
        )
    );

    const tweentime = Gtk.SpinButton.new_with_range(0, 1, 0.01);
    settings.bind(
        'tween-time',
        tweentime.get_adjustment(),
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );

    itemRows.push(
        makeItemRow(
            'Animation duration',
            'Ajust duration (in seconds) of window move/resize animation.',
            tweentime
        )
    );

    const excludedClasses = Gtk.Entry.new();
    settings.bind(
        'windows-excluded',
        excludedClasses,
        'text',
        Gio.SettingsBindFlags.DEFAULT
    );

    itemRows.push(
        makeItemRow(
            "Window's class excluded",
            "Comma separated list of window's class that will be ignored by Material shell.",
            excludedClasses
        )
    );
    notebook.append_page(
        ...makePage('Tiling settings', makeItemList(itemRows))
    );
}

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

function GlobalSettingsTab(notebook) {
    const settings = getSettings('theme');
    const itemRows = [];

    const darkMode = new Gtk.Switch({ valign: Gtk.Align.CENTER });
    let model = new Gtk.ListStore();
    model.set_column_types([GObject.TYPE_STRING, GObject.TYPE_STRING]);

    let cbox = new Gtk.ComboBox({ model: model });
    let renderer = new Gtk.CellRendererText();
    cbox.pack_start(renderer, true);
    cbox.add_attribute(renderer, 'text', 1);

    model.set(model.append(), [0, 1], ['dark', 'Dark']);
    model.set(model.append(), [0, 1], ['light', 'Light']);
    model.set(model.append(), [0, 1], ['primary', 'Primary']);
    let shit = ['dark', 'light', 'primary'];
    cbox.set_active(shit.indexOf(settings.get_string('theme'))); // set value

    cbox.connect('changed', (entry) => {
        let [success, iter] = cbox.get_active_iter();
        if (!success) return;
        let themeValue = model.get_value(iter, 0); // get value
        settings.set_string('theme', themeValue);
    });
    itemRows.push(
        makeItemRow(
            'Theme',
            'Determines the active theme for Material Shell',
            cbox
        )
    );

    const primaryColor = new Gtk.ColorButton();
    let rgba = new Gdk.RGBA();
    rgba.parse(settings.get_string('primary-color'));
    primaryColor.set_rgba(rgba);
    itemRows.push(
        makeItemRow(
            'Primary color',
            'A color that stylizes the majority of the UI',
            primaryColor
        )
    );
    primaryColor.connect('notify::color', (button) => {
        let rgba = button.get_rgba();
        let css = rgba.to_string();
        let hexString = cssHexString(css);
        settings.set_string('primary-color', hexString);
    });
    const panelSize = Gtk.SpinButton.new_with_range(0, 1000, 1);
    itemRows.push(
        makeItemRow(
            'Panels Size',
            'Width of the left panel and heigh of the top panels',
            panelSize
        )
    );
    settings.bind(
        'panel-size',
        panelSize.get_adjustment(),
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );

    const panelOpacity = Gtk.SpinButton.new_with_range(0, 100, 1);
    itemRows.push(
        makeItemRow(
            'Panel opacity',
            'Change the opacity of Panels',
            panelOpacity
        )
    );
    settings.bind(
        'panel-opacity',
        panelOpacity.get_adjustment(),
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );

    const surfaceOpacity = Gtk.SpinButton.new_with_range(0, 100, 1);
    itemRows.push(
        makeItemRow(
            'Surface opacity',
            'Change the opacity of Panels or other UI elements',
            surfaceOpacity
        )
    );
    settings.bind(
        'surface-opacity',
        surfaceOpacity.get_adjustment(),
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );

    const blurBackground = new Gtk.Switch({ valign: Gtk.Align.CENTER });
    itemRows.push(
        makeItemRow(
            'Blur background',
            'Add the blurred effect to the background wallpaper',
            blurBackground
        )
    );
    settings.bind(
        'blur-background',
        blurBackground,
        'active',
        Gio.SettingsBindFlags.DEFAULT
    );

    notebook.append_page(
        ...makePage('Global settings', makeItemList(itemRows))
    );
}

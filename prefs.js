const { GObject, Gtk, Gio } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { makePage, makeItemRow, makeItemList } = Me.imports.utils.prefsUi;
const { getSettings } = Me.imports.utils.settings;

// eslint-disable-next-line no-unused-vars
function init() {}

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
    'toggle-material-shell-ui':
        'Toggle the material-shell UI to simulate fullscreen'
};

const layouts = {
    maximize: 'Maximize all windows',
    split: 'Put all windows side by side, two at a time',
    float: 'Windows are not tiled',
    half: 'Tile windows according to screen ratio',
    'half-horizontal': 'Tile windows horizontally',
    'half-vertical': 'Tile windows vertically',
    ratio:
        'Tile windows in both way according to the ratio of the remaining space',
    grid: 'Tile windows according to a regular grid',
    simple: 'Split screen unidirectionally according to screen ratio',
    'simple-horizontal': 'Split screen horizontally',
    'simple-vertical': 'Split screen vertically'
};

// eslint-disable-next-line no-unused-vars
function buildPrefsWidget() {
    const notebook = new Gtk.Notebook();
    accelTab(notebook);
    layoutsTab(notebook);
    layoutsSettingsTab(notebook);

    let mainVBox = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        spacing: 10,
        border_width: 10
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
        GObject.TYPE_INT
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
        expand: true
    });
    actionColumn.pack_start(cellTextRenderer, true);
    actionColumn.add_attribute(cellTextRenderer, 'text', 1);

    const cellAccelRenderer = new Gtk.CellRendererAccel({
        editable: true,
        'accel-mode': Gtk.CellRendererAccelMode.GTK
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
        title: 'hotkeys'
    });
    hotkeyColumn.pack_end(cellAccelRenderer, false);
    hotkeyColumn.add_attribute(cellAccelRenderer, 'accel-mods', 2);
    hotkeyColumn.add_attribute(cellAccelRenderer, 'accel-key', 3);

    const treeview = new Gtk.TreeView({
        expand: true,
        model: model
    });
    treeview.append_column(actionColumn);
    treeview.append_column(hotkeyColumn);

    const accelGrid = new Gtk.Grid({
        column_spacing: 10,
        margin: 24,
        orientation: Gtk.Orientation.VERTICAL,
        row_spacing: 10
    });
    accelGrid.add(
        new Gtk.Label({
            label: 'Keyboard shortcuts.',
            halign: Gtk.Align.START,
            justify: Gtk.Justification.LEFT,
            use_markup: false,
            wrap: true
        })
    );
    accelGrid.add(treeview);

    notebook.append_page(...makePage('Shortcuts', accelGrid));
}

function layoutsTab(notebook) {
    const settings = getSettings('layouts');
    const layoutItemCreator = (rows, [layout, description]) => {
        const name = layout
            .replace('-', ' ')
            .replace(/^\w/g, c => c.toUpperCase());
        const item = new Gtk.Switch({ valign: Gtk.Align.CENTER });
        settings.bind(layout, item, 'active', Gio.SettingsBindFlags.DEFAULT);
        rows.push(makeItemRow(name, description, item));

        if (layout === 'ratio') {
            const ratio = Gtk.Scale.new_with_range(
                Gtk.Orientation.HORIZONTAL,
                0,
                1,
                0.01
            );
            ratio.add_mark(
                0.6180339887498948,
                Gtk.PositionType.BOTTOM,
                'Golden Ratio'
            );
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

    const gap = Gtk.Scale.new_with_range(Gtk.Orientation.HORIZONTAL, 0, 250, 1);
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

    const screenGap = Gtk.Scale.new_with_range(
        Gtk.Orientation.HORIZONTAL,
        0,
        250,
        1
    );
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

    const tweentime = Gtk.Scale.new_with_range(
        Gtk.Orientation.HORIZONTAL,
        0,
        1,
        0.01
    );
    settings.bind(
        'tween-time',
        tweentime.get_adjustment(),
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );

    tweentime.add_mark(0.1, Gtk.PositionType.BOTTOM, 'Fast');
    tweentime.add_mark(0.25, Gtk.PositionType.BOTTOM, 'Smooth');
    tweentime.add_mark(0.75, Gtk.PositionType.BOTTOM, 'Mesmerizing');

    itemRows.push(
        makeItemRow(
            'Animation duration',
            'Ajust duration (in seconds) of window move/resize animation.',
            tweentime
        )
    );
    notebook.append_page(
        ...makePage('Tiling settings', makeItemList(itemRows))
    );
}

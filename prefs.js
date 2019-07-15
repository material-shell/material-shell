// Library imports
const { GObject, Gdk, Gtk, Gio } = imports.gi;

const Lang = imports.lang;

// Extension imports
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;

function init() {}

const pretty_names = {
    'previous-window': 'Focus the previous window',
    'next-window': 'Focus the next window',
    'previous-workspace': 'Focus the previous workspace',
    'next-workspace': 'Focus the next workspace',
    'kill-focused-window': 'kill the current window'
};
const layouts = {
    maximize: 'Maximize all windows',
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
function buildPrefsWidget() {
    let notebook = new Gtk.Notebook();
    accel_tab(notebook);
    layouts_tab(notebook);
    layouts_settings_tab(notebook);
    /* basics_tab(notebook);

    presets_tab(notebook);
    margins_tab(notebook);
    help_tab(notebook); */

    let main_vbox = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        spacing: 10,
        border_width: 10
    });

    main_vbox.pack_start(notebook, true, true, 0);

    main_vbox.show_all();

    return main_vbox;
}

function accel_tab(notebook) {
    const settings = getSettings('bindings');

    let ks_grid = new Gtk.Grid({
        column_spacing: 10,
        margin: 24,
        orientation: Gtk.Orientation.VERTICAL,
        row_spacing: 10
    });

    let model = new Gtk.ListStore();

    model.set_column_types([
        GObject.TYPE_STRING,
        GObject.TYPE_STRING,
        GObject.TYPE_INT,
        GObject.TYPE_INT
    ]);

    for (let key in pretty_names) {
        append_hotkey(model, settings, key, pretty_names[key]);
    }

    let treeview = new Gtk.TreeView({
        expand: true,
        model: model
    });

    let col;
    let cellrend;

    cellrend = new Gtk.CellRendererText();

    col = new Gtk.TreeViewColumn({
        title: 'Action',
        expand: true
    });

    col.pack_start(cellrend, true);
    col.add_attribute(cellrend, 'text', 1);

    treeview.append_column(col);

    cellrend = new Gtk.CellRendererAccel({
        editable: true,
        'accel-mode': Gtk.CellRendererAccelMode.GTK
    });

    cellrend.connect('accel-cleared', function(rend, str_iter) {
        let [success, iter] = model.get_iter_from_string(str_iter);

        if (!success) {
            throw new Error('Something be broken, yo.');
        }

        let name = model.get_value(iter, 0);
        model.set(iter, [3], [0]);
        settings.set_strv(name, ['']);
    });

    cellrend.connect('accel-edited', function(rend, str_iter, key, mods) {
        let value = Gtk.accelerator_name(key, mods);

        let [success, iter] = model.get_iter_from_string(str_iter);

        if (!success) {
            throw new Error('Something be broken, yo.');
        }

        let name = model.get_value(iter, 0);

        model.set(iter, [2, 3], [mods, key]);

        global.log('Changing value for ' + name + ': ' + value);

        settings.set_strv(name, [value]);
    });

    col = new Gtk.TreeViewColumn({
        title: 'hotkeys'
    });

    col.pack_end(cellrend, false);
    col.add_attribute(cellrend, 'accel-mods', 2);
    col.add_attribute(cellrend, 'accel-key', 3);

    treeview.append_column(col);

    let text = 'Keyboard shortcuts.';
    ks_grid.add(
        new Gtk.Label({
            label: text,
            halign: Gtk.Align.START,
            justify: Gtk.Justification.LEFT,
            use_markup: false,
            wrap: true
        })
    );
    ks_grid.add(treeview);

    let ks_window = new Gtk.ScrolledWindow({ vexpand: true });
    ks_window.add(ks_grid);
    let ks_label = new Gtk.Label({
        label: 'Shortcuts',
        halign: Gtk.Align.START,
        use_markup: false
    });
    notebook.append_page(ks_window, ks_label);
}

function layouts_tab(notebook) {
    const settings = getSettings('layouts');

    let ks_window = new Gtk.ScrolledWindow({ vexpand: true });
    const ks_lbox = new Gtk.ListBox({
        valign: Gtk.Align.START
    });
    const w_box = new Gtk.VBox({
        border_width: 10
    });

    w_box.add(ks_lbox);
    ks_window.add(w_box);
    let ks_label = new Gtk.Label({
        label: 'Layouts',
        halign: Gtk.Align.START,
        use_markup: false
    });
    Object.entries(layouts).forEach(([layout, description]) => {
        const row = new Gtk.ListBoxRow();
        const hbox = new Gtk.HBox();
        let item = new Gtk.Switch({ valign: Gtk.Align.CENTER });

        const name = new Gtk.Label({ xalign: 0 });
        name.set_markup(
            `<span size="medium">${layout
                .replace('-', ' ')
                .replace(/^\w/g, c => c.toUpperCase())}</span>`
        );
        const desc = new Gtk.Label({ xalign: 0 });
        desc.set_markup(`<span size="small">${description}</span>`);

        const vbox = new Gtk.VBox();
        vbox.pack_start(name, false, false, 0);
        vbox.pack_start(desc, false, false, 0);
        hbox.pack_start(vbox, true, true, 10);
        hbox.pack_start(item, false, false, 0);

        row.add(hbox);

        ks_lbox.add(row);

        settings.bind(layout, item, 'active', Gio.SettingsBindFlags.DEFAULT);
        if (layout === 'ratio') {
            const row = new Gtk.ListBoxRow();
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
            row.add(ratio);
            ks_lbox.add(row);
        }
    });
    notebook.append_page(ks_window, ks_label);
}

function layouts_settings_tab(notebook) {
    const settings = getSettings('layouts');

    let ks_window = new Gtk.ScrolledWindow({ vexpand: true });
    const parent_vbox = new Gtk.VBox({
        valign: Gtk.Align.START,
        border_width: 10
    });
    ks_window.add(parent_vbox);
    let ks_label = new Gtk.Label({
        label: 'Tiling settings',
        halign: Gtk.Align.START,
        use_markup: false
    });

    const gaphbox = new Gtk.HBox();
    const gap = Gtk.Scale.new_with_range(Gtk.Orientation.HORIZONTAL, 0, 50, 1);
    settings.bind(
        'gap',
        gap.get_adjustment(),
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );

    const gapname = new Gtk.Label({ xalign: 0 });
    gapname.set_markup(`<span size="medium">Gap size</span>`);
    const gapdesc = new Gtk.Label({ xalign: 0 });
    gapdesc.set_markup(
        `<span size="small">Determines the gap size in pixel between windows</span>`
    );

    const gapvbox = new Gtk.VBox();
    gapvbox.pack_start(gapname, false, false, 0);
    gapvbox.pack_start(gapdesc, false, false, 0);
    gaphbox.pack_start(gapvbox, true, true, 10);
    gaphbox.pack_end(gap, true, true, 0);

    parent_vbox.add(gaphbox);

    const tweentimehbox = new Gtk.HBox();
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

    const tweentimename = new Gtk.Label({ xalign: 0 });
    tweentimename.set_markup(`<span size="medium">Animation duration</span>`);
    const tweentimedesc = new Gtk.Label({ xalign: 0 });
    tweentimedesc.set_markup(
        `<span size="small">Ajust duration (in seconds) of window move/resize animation</span>`
    );

    const tweentimevbox = new Gtk.VBox();
    tweentimevbox.pack_start(tweentimename, false, false, 0);
    tweentimevbox.pack_start(tweentimedesc, false, false, 0);
    tweentimehbox.pack_start(tweentimevbox, true, true, 10);
    tweentimehbox.pack_start(tweentime, true, true, 0);

    parent_vbox.add(tweentimehbox);
    notebook.append_page(ks_window, ks_label);
}

function append_hotkey(model, settings, name, pretty_name) {
    let [key, mods] = Gtk.accelerator_parse(settings.get_strv(name)[0]);

    let row = model.insert(55);

    model.set(row, [0, 1, 2, 3], [name, pretty_name, mods, key]);
}

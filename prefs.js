// Library imports
const { GObject, Gdk, Gtk, Gio } = imports.gi;

const Lang = imports.lang;

// Extension imports
const Me = imports.misc.extensionUtils.getCurrentExtension();
function init() {}

const pretty_names = {
    'previous-window': 'Focus the previous window',
    'next-window': 'Focus the next window',
    'previous-workspace': 'Focus the previous workspace',
    'next-workspace': 'Focus the next workspace',
    'kill-focused-window': 'kill the current window'
};

function buildPrefsWidget() {
    let notebook = new Gtk.Notebook();
    accel_tab(notebook);
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
    const SchemaSource = Gio.SettingsSchemaSource.new_from_directory(
        Me.dir.get_path(),
        Gio.SettingsSchemaSource.get_default(),
        false
    );
    const settings = new Gio.Settings({
        settings_schema: SchemaSource.lookup(Me.metadata['bindings'], true)
    });

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

function append_hotkey(model, settings, name, pretty_name) {
    let [key, mods] = Gtk.accelerator_parse(settings.get_strv(name)[0]);

    let row = model.insert(55);

    model.set(row, [0, 1, 2, 3], [name, pretty_name, mods, key]);
}

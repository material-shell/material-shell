import * as Gdk from 'gdk';
import * as Gio from 'gio';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import * as Gtk from 'gtk';
import { registerGObjectClass } from 'src/utils/gjs';

const Me = imports.misc.extensionUtils.getCurrentExtension();

const schemaSource = Gio.SettingsSchemaSource.new_from_directory(
    Me.dir.get_child('schemas').get_path(),
    Gio.SettingsSchemaSource.get_default(),
    false
);

const hotkeysSchemaName = 'org.gnome.shell.extensions.materialshell.bindings';

function log(...args: any[]) {
    const fields = { MESSAGE: `${args.join(', ')}` };
    const domain = 'Material Shell';

    GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
function init() {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function buildPrefsWidget() {
    log('build pref');
    return new PrefsWidget();
}

enum WidgetType {
    BOOLEAN = 0,
    COMBO = 1,
    INT = 2,
    DECIMAL = 3,
    INPUT = 4,
    COLOR = 5,
    CUSTOM = 6,
}

/* TODO make the hotkey edition through Dialog
 @registerGObjectClass
class HotkeyDialog extends Gtk.Dialog {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'HotkeyDialog',
        Template: Me.dir.get_child('hotkey_dialog.ui').get_uri(),
        Signals: {
            key_press_cb: {
                param_types: [GObject.TYPE_STRING],
                accumulator: 0,
            },
        },
    };
    constructor(parent: Gtk.Window) {
        super({
            destroyWithParent: true,
            transientFor: parent,
        });

        this.connect('key_press_cb', (_, response) => {
            log('key', response);
        });
    }
} */

@registerGObjectClass
class SettingListBoxRow extends Gtk.ListBoxRow {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'SettingListBoxRow',
        Template: Me.dir.get_child('setting_list_box_row.ui').get_uri(),
        Properties: {
            'settings-widget': GObject.ParamSpec.object(
                'settings-widget',
                'Settings Widget',
                'The widget in which the user sets the settings value',
                GObject.ParamFlags.READWRITE,
                Gtk.Widget.$gtype
            ),
        },
        InternalChildren: [
            'name_label',
            'description_label',
            'widget_container',
        ],
    };

    private _name_label: Gtk.Label;
    private _description_label: Gtk.Label;
    private _widget_container: Gtk.Box;
    private _settings_widget: Gtk.Widget;

    constructor(summary, description, widget) {
        super();
        this._name_label.set_text(summary);
        this._description_label.set_text(description);
        this._settings_widget = widget;
        this._widget_container.append(this._settings_widget);
    }
}

@registerGObjectClass
class HotkeyRowData extends GObject.Object {
    key: string;
    summary: string;
    accelName: string;

    constructor(key: string, summary: string, accelName: string) {
        super();
        this.key = key;
        this.summary = summary;
        this.accelName = accelName;
    }
}

@registerGObjectClass
class HotkeyListBox extends Gtk.TreeView {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'HotkeyListBox',
        Template: Me.dir.get_child('hotkey_list_box.ui').get_uri(),
    };
    settings: Gio.Settings;
    model: Gtk.ListStore;
    constructor() {
        const model = new Gtk.ListStore();
        model.set_column_types([
            GObject.TYPE_STRING,
            GObject.TYPE_STRING,
            GObject.TYPE_INT,
            GObject.TYPE_INT,
        ]);

        super({ model: model });

        this.settings = new Gio.Settings({
            settings_schema: schemaSource.lookup(hotkeysSchemaName, false),
        });

        this.settings
            .list_keys()
            .map((key) => {
                const [_, accelKey, mods] = Gtk.accelerator_parse(
                    this.settings.get_strv(key)[0]
                );
                let accelName;
                if (accelKey == 0) {
                    accelName = 'Disabled';
                } else {
                    accelName = Gtk.accelerator_get_label(accelKey, mods);
                }
                const summary = this.settings.settings_schema
                    .get_key(key)
                    .get_summary();

                return {
                    key,
                    summary,
                    accelKey,
                    mods,
                };
            })
            .sort((modelEntryA, modelEntryB) => {
                return modelEntryA.summary > modelEntryB.summary ? 1 : 0;
            })
            .forEach((modelEntry) => {
                const row = model.insert(-1);
                log(
                    modelEntry.key,
                    modelEntry.summary,
                    modelEntry.mods,
                    modelEntry.accelKey
                );
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
    }

    onAccelEdited(rend, strIter, key, mods) {
        const value = Gtk.accelerator_name(key, mods);
        const [success, iter] = this.model.get_iter_from_string(strIter);
        if (!success) {
            throw new Error('Something be broken, yo.');
        }
        const name = this.model.get_value(iter, 0) as string;
        this.model.set(iter, [2, 3], [mods, key]);
        this.settings.set_strv(name, [value]);
    }

    onAccelCleared(rend, strIter) {
        const [success, iter] = this.model.get_iter_from_string(strIter);
        if (!success) {
            throw new Error('Something be broken, yo.');
        }

        const name = this.model.get_value(iter, 0) as string;
        this.model.set(iter, [3], [0]);
        this.settings.set_strv(name, ['']);
    }

    /* createHotkeyRow(obj: GObject.Object): Gtk.Widget {
        const data = obj as HotkeyRowData;
        return new HotkeyListBoxRow(data.key, data.summary, data.accelName);
    } */
}

/* Todo: Replace Gtk TreeView with Gtk ListBox
 @registerGObjectClass
class HotkeyListBoxRow extends Gtk.ListBoxRow {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'HotkeyListBoxRow',
        Template: Me.dir.get_child('hotkey_list_box_row.ui').get_uri(),
        InternalChildren: ['accel_label', 'hotkey_label'],
    };
    private _accel_label: Gtk.Label;
    private _hotkey_label: Gtk.Label;
    key: string;
    constructor(key: string, hotkeyName: string, accel: string) {
        super();
        this.key = key;
        this._accel_label.set_text(accel);
        this._hotkey_label.set_text(hotkeyName);
    }
} */
@registerGObjectClass
class SettingCategoryListBox extends Gtk.Box {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'SettingCategoryListBox',
        Template: Me.dir.get_child('setting_category_list_box.ui').get_uri(),
        Properties: {
            title: GObject.ParamSpec.string(
                'title',
                'Title',
                'The title of the category',
                GObject.ParamFlags.READWRITE,
                ''
            ),
        },
        InternalChildren: ['title_label', 'list_box'],
    };
    private _title_label: Gtk.Label;
    private _list_box: Gtk.ListBox;

    public settings: Gio.Settings;

    constructor(title: string, schema: string) {
        super();

        this.settings = new Gio.Settings({
            settings_schema: schemaSource.lookup(schema, false),
        });
        this.title = title;
    }

    get title(): string {
        return this._title_label.get_text();
    }

    set title(value: string) {
        this._title_label.set_markup(`<span size="medium">${value}</span>`);
    }

    addSetting(key: string, type: WidgetType, customWidget?: Gtk.Widget) {
        const settingKey = this.settings.settings_schema.get_key(key);
        const summary = settingKey.get_summary();
        const description = settingKey.get_description();
        let widget;
        switch (type) {
            case WidgetType.BOOLEAN:
                widget = new Gtk.Switch();
                this.settings.bind(
                    key,
                    widget,
                    'active',
                    Gio.SettingsBindFlags.DEFAULT
                );
                break;

            case WidgetType.COMBO:
                widget = new Gtk.ComboBoxText();
                const a = settingKey
                    .get_range()
                    .get_child_value(1)
                    .recursiveUnpack() as any[];
                a.forEach((value) => {
                    widget.append(value, value);
                });
                this.settings.bind(
                    key,
                    widget,
                    'active-id',
                    Gio.SettingsBindFlags.DEFAULT
                );
                break;

            case WidgetType.COLOR: {
                widget = new Gtk.ColorButton();
                const rgba = new Gdk.RGBA();
                rgba.parse(this.settings.get_string(key));
                widget.set_rgba(rgba);
                widget.connect('notify::color', (button) => {
                    const rgba = button.get_rgba();
                    const css = rgba.to_string();
                    const hexString = cssHexString(css);
                    this.settings.set_string(key, hexString);
                });
                break;
            }
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
        widget.set_valign(Gtk.Align.CENTER);
        const row = new SettingListBoxRow(summary, description, widget);

        this._list_box.append(row);
    }
}
@registerGObjectClass
class PrefsWidget extends Gtk.Box {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'PrefsWidget',
        Template: Me.dir.get_child('prefs.ui').get_uri(),
        InternalChildren: ['settings_box'],
    };
    private _settings_box: Gtk.Box;

    constructor() {
        super();

        const theme = new SettingCategoryListBox(
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
        theme.addSetting('panel-icon-color', WidgetType.BOOLEAN);
        theme.addSetting('taskbar-item-style', WidgetType.COMBO);
        theme.addSetting('surface-opacity', WidgetType.INT);
        theme.addSetting('blur-background', WidgetType.BOOLEAN);
        theme.addSetting('clock-horizontal', WidgetType.BOOLEAN);
        theme.addSetting('clock-app-launcher', WidgetType.BOOLEAN);
        theme.addSetting('focus-effect', WidgetType.COMBO);
        this._settings_box.append(theme);

        const tweaks = new SettingCategoryListBox(
            'Tweaks',
            'org.gnome.shell.extensions.materialshell.tweaks'
        );

        tweaks.addSetting('cycle-through-windows', WidgetType.BOOLEAN);
        tweaks.addSetting('cycle-through-workspaces', WidgetType.BOOLEAN);
        tweaks.addSetting('disable-notifications', WidgetType.BOOLEAN);
        tweaks.addSetting('enable-persistence', WidgetType.BOOLEAN);
        this._settings_box.append(tweaks);

        const layouts = new SettingCategoryListBox(
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
        this._settings_box.append(layouts);
    }
}

function cssHexString(css: string) {
    let rrggbb = '#';
    let start: number;
    for (let loop = 0; loop < 3; loop++) {
        let end = 0;
        let xx = '';
        for (let loop = 0; loop < 2; loop++) {
            for (;;) {
                const x = css.slice(end, end + 1);
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

function getDefaultLayoutComboBox(
    tilingLayouts: string[],
    setting: Gio.Settings
) {
    const widget = new Gtk.ComboBoxText();
    const refreshComboBox = () => {
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
        widget as any as GObject.Object,
        'active-id',
        Gio.SettingsBindFlags.DEFAULT
    );
    return widget;
}

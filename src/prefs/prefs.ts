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

const hotkeysSchemaName =
    'org.gnome.shell.extensions.materialshell.bindings';

function log(...args: any[]) {
    const fields = { MESSAGE: `${args.join(', ')}` };
    const domain = 'Material Shell';

    GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
function init() { }

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
    };
    private _settings_widget: GObject.Object;

    get settings_widget(): GObject.Object {
        return this._settings_widget;
    }

    set settings_widget(value: GObject.Object) {
        this._settings_widget = value;
    }
}

@registerGObjectClass
class HotkeyRowData extends GObject.Object {
    key: string;
    summary: string;
    mods: number;
    accelKey: boolean;

    constructor(key: string, summary: string, mods: number, accelKey: boolean) {
        super();

        this.key = key;
        this.summary = summary;
        this.mods = mods;
        this.accelKey = accelKey;
    }
}

@registerGObjectClass
class HotkeyListBox extends Gtk.ListBox {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'HotkeyListBox',
        Template: Me.dir.get_child('hotkey_list_box.ui').get_uri(),
    };

    constructor() {
        super();

        const model = new Gio.ListStore(HotkeyRowData.$gtype);
        const settings = new Gio.Settings({
            settings_schema: schemaSource.lookup(hotkeysSchemaName, false),
        });

        settings
            .list_keys()
            .map((key) => {
                const [accelKey, mods] = Gtk.accelerator_parse(
                    settings.get_strv(key)[0]
                );
                const settingKey = settings.settings_schema.get_key(key);
                const summary = settingKey.get_summary();

                return {
                    key,
                    summary,
                    mods,
                    accelKey,
                };
            })
            .sort((modelEntryA, modelEntryB) => {
                return modelEntryA.summary > modelEntryB.summary ? 1 : 0;
            })
            .forEach((modelEntry) => {
                model.append(
                    new HotkeyRowData(
                        modelEntry.key,
                        modelEntry.summary,
                        modelEntry.mods,
                        modelEntry.accelKey
                    )
                );
            });

        this.bind_model(model, this.createHotkeyRow);
    }

    createHotkeyRow(obj: GObject.Object): Gtk.Widget {
        const data = obj as HotkeyRowData;
        return new HotkeyListBoxRow(data.summary, data.key);
    }
}

@registerGObjectClass
class HotkeyListBoxRow extends Gtk.ListBoxRow {
    static metaInfo: GObject.MetaInfo = {
        GTypeName: 'HotkeyListBoxRow',
        Template: Me.dir.get_child('hotkey_list_box_row.ui').get_uri(),
        InternalChildren: ['accel_label', 'hotkey_label'],
    };
    private _accel_label: Gtk.Label;
    private _hotkey_label: Gtk.Label;

    constructor(hotkeyName: string, accel: string) {
        super();

        this._accel_label.set_text(hotkeyName);
        this._hotkey_label.set_text(accel);
    }
}
@registerGObjectClass
class SettingCategoryListBox extends Gtk.ListBox {
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
        InternalChildren: ['title_label'],
    };
    private _title_label: Gtk.Label;
    private schema: string;
    public settings: Gio.Settings;

    constructor(title: string, schema: string) {
        super();

        this.schema = schema;
        this.settings = new Gio.Settings({
            settings_schema: schemaSource.lookup(schema, false),
        });
        this.title = title;
    }

    get title(): string {
        return this._title_label.get_text();
    }

    set title(value: string) {
        this._title_label.set_text(`<span size="medium">${value}</span>`);
    }

    addSetting(key: string, type: WidgetType, customWidget?: Gtk.Widget) {
        const row = new SettingListBoxRow();
        const settingKey = this.settings.settings_schema.get_key(key);

        let widget;
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

        row.settings_widget = widget;

        this.append(row);
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
            for (; ;) {
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
        (widget as any) as GObject.Object,
        'active-id',
        Gio.SettingsBindFlags.DEFAULT
    );
    return widget;
}

const { GLib, Gio, St } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;
const { DynamicForeground } = Me.imports.utils.dynamicForeground;
const THEME_PATH = `${GLib.get_user_cache_dir()}/${Me.uuid}-theme.css`;

/* exported ThemeModule */
var ThemeModule = class ThemeModule {
    constructor() {
        this.themeSettings = getSettings('theme');
        this.darkMode = this.themeSettings.get_boolean('dark-mode');
        this.primary = this.themeSettings.get_string('primary-color');
        this.settingsSignals = [
            this.themeSettings.connect('changed::dark-mode', schema => {
                this.darkMode = schema.get_boolean('dark-mode');
                this.theme = new MaterialShellTheme(
                    this.primary,
                    this.darkMode
                );
                this.regenerateStylesheet();
            }),
            this.themeSettings.connect('changed::primary-color', schema => {
                this.primary = schema.get_string('primary-color');
                this.theme = new MaterialShellTheme(
                    this.primary,
                    this.darkMode
                );
                this.regenerateStylesheet();
            })
        ];
        this.theme = new MaterialShellTheme(this.primary, this.darkMode);
    }

    enable() {
        this.regenerateStylesheet();
    }

    regenerateStylesheet() {
        log('Doing regenerate stylesheet');
        // First start by grabbing the current material shell stylesheet content
        this.getStylesheetContent(content => {
            //Replace in the content the color we want to replace
            //content = content.replace(/#3f51b5/g, '#FF1483');
            content = content
                .replace(/#191919/g, this.theme.colors.bg) // color-bg
                .replace(/#c8c8c8/g, this.theme.colors.fg) // color-fg
                .replace(
                    /rgba\(255, 255, 255, 0\.12\)/g,
                    this.theme.colors.active_bg
                ) // color-active-bg
                .replace(/#ffffff/g, this.theme.colors.active_fg) // color-active-fg
                .replace(
                    /rgba\(255, 255, 255, 0\.04\)/g,
                    this.theme.colors.hover_bg
                ) // color-hover-bg
                .replace(/#BEEEEF/g, this.theme.colors.dynamic_fg) // color-dynamic-fg
                .replace(/#3f51b5/g, this.theme.colors.primary); // color-primary

            //Save the new stylesheet content in a cache file inside the cache directory
            this.replaceContentOfTheme(content, themedStylesheet => {
                // Once the theme saved reload the theme by replacing the original stylesheet by the new one
                let themeContext = St.ThemeContext.get_for_stage(global.stage);
                let previousTheme = themeContext.get_theme();

                let theme = new St.Theme({
                    application_stylesheet: Main.getThemeStylesheet(),
                    default_stylesheet: Main._getDefaultStylesheet()
                });

                if (previousTheme) {
                    let customStylesheets = previousTheme.get_custom_stylesheets();

                    for (let i = 0; i < customStylesheets.length; i++) {
                        //The test to replace the original stylesheet is here
                        if (customStylesheets[i] === Me.stylesheet) {
                            theme.load_stylesheet(themedStylesheet);
                        } else {
                            theme.load_stylesheet(customStylesheets[i]);
                        }
                    }
                }
                themeContext.set_theme(theme);
                global.stage.get_children().forEach(child => {
                    child.style_class = this.theme.darkMode ? '' : 'lightmode';
                });
            });
        });
    }

    getStylesheetContent(callback) {
        //Load the content of the GFile referenced at Me.Stylesheet which is the extension css file
        Me.stylesheet.load_contents_async(null, (obj, res) => {
            let [success, contents] = obj.load_contents_finish(res);
            let content;
            if (success) {
                //Read the binay content as string
                content = imports.byteArray.toString(contents);
            }
            // Return the content string
            callback(content);
        });
    }

    replaceContentOfTheme(content, callback) {
        let themeFile = Gio.file_new_for_path(THEME_PATH);
        const contentBytes = new GLib.Bytes(content);
        themeFile.replace_async(
            null,
            false,
            Gio.FileCreateFlags.NONE,
            GLib.PRIORITY_DEFAULT,
            null,
            (file, res) => {
                let stream = file.replace_finish(res);

                stream.write_bytes_async(
                    contentBytes,
                    GLib.PRIORITY_DEFAULT,
                    null,
                    (ioStream, wRes) => {
                        ioStream.write_bytes_finish(wRes);
                        stream.close(null);
                        callback(file);
                    }
                );
            }
        );
    }

    disable() {
        this.settingsSignals.forEach(signal =>
            this.themeSettings.disconnect(signal)
        );
    }
};

var MaterialShellTheme = class MaterialShellTheme {
    constructor(primary, darkMode) {
        this.dynamicForeground = new DynamicForeground();
        this.darkMode = darkMode;
        /* using snake case to match more closely with Sass */
        this.colors = {
            primary,
            bg: darkMode ? '#191919' : '#FFFFFF',
            fg: darkMode ? '#C8C8C8' : '#191919',
            active_bg: darkMode
                ? 'rgba(255, 255, 255, 0.12)'
                : 'rgba(0, 0, 0, 0.12)',
            active_fg: darkMode ? '#FFFFFF' : '#000000',
            dynamic_fg: this.getDynamicForegroundColor(primary),
            hover_bg: darkMode
                ? 'rgba(255, 255, 255, 0.04)'
                : 'rgba(0, 0, 0, 0.04)'
        };
        log(this.getDynamicForegroundColor(primary));
    }

    getDynamicForegroundColor(primary) {
        return this.dynamicForeground.generateCSSFromColor(
            this.dynamicForeground.chooseContrastColor(
                this.dynamicForeground.parseHexColor(primary),
                { r: 25, g: 25, b: 25 },
                { r: 255, g: 255, b: 255 }
            )
        );
    }
};

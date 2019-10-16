const { GLib, Gio, St } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;
const THEME_PATH = `${GLib.get_user_cache_dir()}/${Me.uuid}-theme.css`;

/* exported ThemeModule */
var ThemeModule = class ThemeModule {
    constructor() {
        this.themeSettings = getSettings('theme');
        this.theme = this.themeSettings.get_string('theme');
        this.primary = this.themeSettings.get_string('primary-color');
        this.settingsSignals = [
            this.themeSettings.connect('changed::theme', schema => {
                this.theme = schema.get_string('theme');
                this.regenerateStylesheet();
            }),
            this.themeSettings.connect('changed::primary-color', schema => {
                this.primary = schema.get_string('primary-color');
                this.regenerateStylesheet();
            })
        ];
    }

    enable() {
        this.regenerateStylesheet();
    }

    isColorDark(color) {
        color = color.replace('#', '');
        let r = parseInt(color.substring(0, 2), 16);
        let g = parseInt(color.substring(2, 4), 16);
        let b = parseInt(color.substring(4, 6), 16);
        let linearColors = [r / 255, g / 255, b / 255];

        for (var i = 0; i < linearColors.length; ++i) {
            if (linearColors[i] <= 0.03928) {
                linearColors[i] = linearColors[i] / 12.92;
            } else {
                linearColors[i] = Math.pow(
                    (linearColors[i] + 0.055) / 1.055,
                    2.4
                );
            }
        }

        let luminance =
            0.2126 * linearColors[0] +
            0.7152 * linearColors[1] +
            0.0722 * linearColors[2];
        return luminance < 0.179;
    }

    regenerateStylesheet() {
        log('Doing regenerate stylesheet');
        // First start by grabbing the current material shell stylesheet content
        this.getStylesheetContent(content => {
            //Replace in the content the color we want to replace
            //content = content.replace(/#3f51b5/g, '#FF1483');
            Main.uiGroup.remove_style_class_name('light-primary');
            Main.uiGroup.remove_style_class_name('dark-primary');
            Main.uiGroup.remove_style_class_name('light-theme');
            Main.uiGroup.remove_style_class_name('primary-theme');

            if (this.isColorDark(this.primary)) {
                Main.uiGroup.add_style_class_name('dark-primary');
            } else {
                Main.uiGroup.add_style_class_name('light-primary');
            }
            Main.uiGroup.add_style_class_name(`${this.theme}-theme`);

            content = content.replace(/#3f51b5/g, this.primary); // color-primary

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

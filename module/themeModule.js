const { GLib, Gio, St } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const THEME_PATH = `${GLib.get_user_cache_dir()}/${Me.uuid}-theme.css`;

/* exported ThemeModule */
var ThemeModule = class ThemeModule {
    constructor() {}

    enable() {
        // First start by grabbing the current material shell stylesheet content
        this.getStylesheetContent(content => {
            //Replace in the content the color we want to replace
            content = content.replace(/#3f51b5/g, '#FF1483');

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

    disable() {}
};

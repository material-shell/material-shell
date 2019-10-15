const { GLib, Gio, St } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const THEME_PATH = `${GLib.get_user_cache_dir()}/${Me.uuid}-theme.css`;

/* exported ThemeModule */
var ThemeModule = class ThemeModule {
    constructor() {}

    enable() {
        this.getStylesheetContent(content => {
            content = content.replace(/#3f51b5/g, '#FF1483');
            this.replaceContentOfTheme(content, themedStylesheet => {
                GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                    let themeContext = St.ThemeContext.get_for_stage(
                        global.stage
                    );
                    let previousTheme = themeContext.get_theme();

                    let theme = new St.Theme({
                        application_stylesheet: Main.getThemeStylesheet(),
                        default_stylesheet: Main._getDefaultStylesheet()
                    });

                    if (previousTheme) {
                        let customStylesheets = previousTheme.get_custom_stylesheets();

                        for (let i = 0; i < customStylesheets.length; i++)
                            if (customStylesheets[i] === Me.stylesheet) {
                                theme.load_stylesheet(themedStylesheet);
                            } else {
                                theme.load_stylesheet(customStylesheets[i]);
                            }
                    }
                    themeContext.set_theme(theme);
                    log('done');
                });
            });
        });
    }

    getStylesheetContent(callback) {
        Me.stylesheet.load_contents_async(null, (obj, res) => {
            let [success, contents] = obj.load_contents_finish(res);
            let content;
            if (success) {
                content = imports.byteArray.toString(contents);
            }

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
            (obj, res) => {
                let stream = obj.replace_finish(res);

                stream.write_bytes_async(
                    contentBytes,
                    GLib.PRIORITY_DEFAULT,
                    null,
                    (w_obj, w_res) => {
                        w_obj.write_bytes_finish(w_res);
                        stream.close(null);
                        callback(obj);
                    }
                );
            }
        );
    }

    disable() {}
};

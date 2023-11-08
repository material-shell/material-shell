/** Gnome libs imports */
import Cogl from 'gi://Cogl';
import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import Meta from 'gi://Meta';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import MaterialShellExtension from 'src/extension';
import { throttle } from 'src/utils';
import { assertNotNull } from 'src/utils/assert';
import { getSettings } from 'src/utils/settings';
import { Extension } from '../../@types/gnome-shell/extensions/extension';
import { MsManager } from './msManager';

/** Extension imports */
const Me = Extension.lookupByUUID(
    'material-shell@papyelgringo'
) as MaterialShellExtension;

/* exported VerticalPanelPositionEnum, HorizontalPanelPositionEnum, PanelIconStyleEnum, FocusEffectEnum, MsThemeManager */

export const VerticalPanelPositionEnum = {
    LEFT: 0,
    RIGHT: 1,
};

export const HorizontalPanelPositionEnum = {
    TOP: 0,
    BOTTOM: 1,
};

export const PanelIconStyleEnum = {
    HYBRID: 0,
    CATEGORY: 1,
    APPLICATION: 2,
};

export const FocusEffectEnum = {
    NONE: 0,
    DEFAULT: 1,
    BORDER: 2,
};

export const msThemeSignalEnum = {
    HorizontalPanelPositionChanged: 'horizontal-panel-position-changed',
    VerticalPanelPositionChanged: 'vertical-panel-position-changed',
    PanelSizeChanged: 'panel-size-changed',
    BlurBackgroundChanged: 'blur-background-changed',
    PanelIconStyleChanged: 'panel-icon-style-changed',
    PanelIconColorChanged: 'panel-icon-color-changed',
    ClockHorizontalChanged: 'clock-horizontal-changed',
    ClockAppLauncherChanged: 'clock-app-launcher-changed',
    FocusEffectChanged: 'focus-effect-changed',
};

function parseCoglColor(color: string): Cogl.Color {
    const c = new Cogl.Color();
    c.init_from_4ub(
        parseInt(color.substring(1, 3), 16),
        parseInt(color.substring(3, 5), 16),
        parseInt(color.substring(5, 7), 16),
        255
    );
    return c;
}

export class MsThemeManager extends MsManager {
    themeContext: St.ThemeContext;
    theme: St.Theme;
    themeSettings: Gio.Settings;
    themeFile: Gio.File;
    themeValue: string;
    primary: string;
    primaryColor: Cogl.Color;
    metaCursor: Meta.Cursor;
    throttledDisplaySetCursor: () => void;

    constructor() {
        super();
        this.themeContext = St.ThemeContext.get_for_stage(global.stage);
        this.theme = this.themeContext.get_theme();
        this.themeSettings = getSettings('theme');
        this.themeFile = Gio.file_new_for_path(
            `${GLib.get_user_cache_dir()}/${Me.metadata.uuid}-theme.css`
        );
        this.themeValue = this.themeSettings.get_string('theme')!;
        this.primary = this.themeSettings.get_string('primary-color')!;
        this.primaryColor = parseCoglColor(this.primary);
        this.metaCursor = Meta.Cursor.DEFAULT;
        let displayedCursor: Meta.Cursor = this.metaCursor;
        this.throttledDisplaySetCursor = throttle(
            () => {
                if (displayedCursor == this.metaCursor) return;
                displayedCursor = this.metaCursor;
                return global.display.set_cursor(this.metaCursor);
            },
            16,
            { leading: false }
        );
        this.observe(this.themeContext, 'changed', () => {
            Me.log('theme changed');
            this.theme = this.themeContext.get_theme();

            if (Main.layoutManager.uiGroup.has_style_class_name('no-theme')) {
                Main.layoutManager.uiGroup.remove_style_class_name('no-theme');
            }
            if (!this.theme.application_stylesheet) {
                Main.layoutManager.uiGroup.add_style_class_name('no-theme');
            }
        });
        this.observe(this.themeSettings, 'changed::theme', (schema) => {
            this.themeValue = schema.get_string('theme');
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::primary-color', (schema) => {
            this.primary = schema.get_string('primary-color');
            this.primaryColor = parseCoglColor(this.primary);
            this.regenerateStylesheet();
        });
        this.observe(
            this.themeSettings,
            'changed::vertical-panel-position',
            () => {
                this.emit(msThemeSignalEnum.VerticalPanelPositionChanged);
            }
        );
        this.observe(
            this.themeSettings,
            'changed::horizontal-panel-position',
            () => {
                this.emit(msThemeSignalEnum.HorizontalPanelPositionChanged);
            }
        );
        this.observe(this.themeSettings, 'changed::panel-opacity', () => {
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::surface-opacity', () => {
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::panel-size', () => {
            this.emit(msThemeSignalEnum.PanelSizeChanged);
        });
        this.observe(this.themeSettings, 'changed::blur-background', () => {
            this.emit(msThemeSignalEnum.BlurBackgroundChanged);
        });
        this.observe(this.themeSettings, 'changed::panel-icon-style', () => {
            this.emit(msThemeSignalEnum.PanelIconStyleChanged);
        });
        this.observe(this.themeSettings, 'changed::panel-icon-color', () => {
            this.emit(msThemeSignalEnum.PanelIconColorChanged);
        });
        this.observe(this.themeSettings, 'changed::clock-horizontal', () => {
            this.emit(msThemeSignalEnum.ClockHorizontalChanged);
        });
        this.observe(this.themeSettings, 'changed::clock-app-launcher', () => {
            this.emit(msThemeSignalEnum.ClockAppLauncherChanged);
        });
        this.observe(this.themeSettings, 'changed::focus-effect', () => {
            this.emit(msThemeSignalEnum.FocusEffectChanged);
        });
    }

    get verticalPanelPosition() {
        return this.themeSettings.get_enum('vertical-panel-position');
    }

    get horizontalPanelPosition() {
        return this.themeSettings.get_enum('horizontal-panel-position');
    }

    get panelOpacity() {
        return this.themeSettings.get_int('panel-opacity');
    }

    get panelIconStyle() {
        return this.themeSettings.get_enum('panel-icon-style');
    }

    set panelIconStyle(value) {
        this.themeSettings.set_enum('panel-icon-style', value);
    }

    get panelIconColor() {
        return this.themeSettings.get_boolean('panel-icon-color');
    }

    get surfaceOpacity() {
        return this.themeSettings.get_int('surface-opacity');
    }

    get blurBackground() {
        return this.themeSettings.get_boolean('blur-background');
    }

    get clockHorizontal() {
        return this.themeSettings.get_boolean('clock-horizontal');
    }

    get clockAppLauncher() {
        return this.themeSettings.get_boolean('clock-app-launcher');
    }

    getPanelSize() {
        return this.getScaledSize(this.themeSettings.get_int('panel-size'));
    }

    getPanelSizeNotScaled() {
        return this.themeSettings.get_int('panel-size');
    }

    getScaledSize(size: number) {
        const { scale_factor } = St.ThemeContext.get_for_stage(global.stage);
        return size * scale_factor;
    }

    get focusEffect() {
        return this.themeSettings.get_enum('focus-effect');
    }

    isColorDark(color: string) {
        color = color.replace('#', '');
        const r = parseInt(color.substring(0, 2), 16);
        const g = parseInt(color.substring(2, 4), 16);
        const b = parseInt(color.substring(4, 6), 16);
        const linearColors = [r / 255, g / 255, b / 255];

        for (let i = 0; i < linearColors.length; ++i) {
            if (linearColors[i] <= 0.03928) {
                linearColors[i] = linearColors[i] / 12.92;
            } else {
                linearColors[i] = Math.pow(
                    (linearColors[i] + 0.055) / 1.055,
                    2.4
                );
            }
        }

        const luminance =
            0.2126 * linearColors[0] +
            0.7152 * linearColors[1] +
            0.0722 * linearColors[2];
        return luminance < 0.179;
    }

    setCursor(cursor: Meta.Cursor) {
        this.metaCursor = cursor;
        this.throttledDisplaySetCursor();
    }

    async readFileContent(file: Gio.File) {
        return new Promise<string>((resolve, reject) => {
            file.load_contents_async(null, (obj, res) => {
                const [success, contents] =
                    assertNotNull(obj).load_contents_finish(res);
                if (success) {
                    //Read the binay content as string
                    const content = new TextDecoder().decode(contents);
                    resolve(content);
                } else {
                    reject(success);
                }
            });
        });
    }

    async writeContentToFile(content: string, file: Gio.File) {
        return new Promise<Gio.File>((resolve, _) => {
            const contentBytes = new GLib.Bytes(
                new TextEncoder().encode(content)
            );
            file.replace_async(
                null,
                false,
                Gio.FileCreateFlags.NONE,
                GLib.PRIORITY_DEFAULT,
                null,
                (file, res) => {
                    const stream = assertNotNull(file).replace_finish(res);

                    stream.write_bytes_async(
                        contentBytes,
                        GLib.PRIORITY_DEFAULT,
                        null,
                        (ioStream, wRes) => {
                            assertNotNull(ioStream).write_bytes_finish(wRes);
                            stream.close(null);
                            resolve(assertNotNull(file));
                        }
                    );
                }
            );
        });
    }

    async buildThemeStylesheetToFile(file: Gio.File) {
        const originThemeFile = Gio.file_new_for_path(
            `${Me.metadata.path}/style-${this.themeValue}-theme.css`
        );
        let content = await this.readFileContent(originThemeFile);
        content = content.replace(/#3f51b5/g, this.primary); // color-primary
        content = content.replace(/0.876/g, `${this.panelOpacity / 100}`); // panel-opacity
        content = content.replace(/0.987/g, `${this.surfaceOpacity / 100}`); // surface-opacity
        await this.writeContentToFile(content, file);
    }

    async regenerateStylesheet() {
        this.unloadStylesheet();
        if (!this.theme.application_stylesheet) {
            Main.layoutManager.uiGroup.add_style_class_name('no-theme');
        }

        await this.buildThemeStylesheetToFile(this.themeFile);
        this.theme.load_stylesheet(this.themeFile);
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.themeContext.set_theme(this.theme);
            Main.reloadThemeResource();
            Main.loadTheme();
            return GLib.SOURCE_REMOVE;
        });
    }

    unloadStylesheet() {
        if (Main.layoutManager.uiGroup.has_style_class_name('no-theme')) {
            Main.layoutManager.uiGroup.remove_style_class_name('no-theme');
        }
        this.theme.unload_stylesheet(this.themeFile);
    }

    destroy() {
        super.destroy();
        // Do not remove the stylesheet in during locking disable
        if (!Me.locked) {
            this.unloadStylesheet();
        }
    }
}

const Main = imports.ui.main;
const GLib = imports.gi.GLib;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.utils.settings;

/* exported ThemeManager */
var ThemeManager = class ThemeManager {
    constructor() {
        this.styleKeys = [];
        this.classToggles = [];
        this.signals = [];
        this.themeSettings = getSettings('theme');
        this.settingsSignals = [
            this.themeSettings.connect('changed::dark-mode', schema => {
                this.darkMode = schema.get_boolean('dark-mode');
                this.styleElements(true);
            }),
            this.themeSettings.connect('changed::primary-color', schema => {
                this.primaryColor = schema.get_string('primary-color');
                this.styleElements(true);
            })
        ];

        this.darkMode = this.themeSettings.get_boolean('dark-mode');
        this.primaryColor = this.themeSettings.get_string('primary-color');
        this.dynamicFG = this.generateCSSFromColor(this.chooseContrastColor(this.parseHexColor(this.primaryColor), {r:25,g:25,b:25}, {r:255,g:255,b:255}));
    }

    addStyleKey(object, darkStyle, lightStyle) {
        this.styleKeys.push({
            object,
            darkStyle,
            lightStyle,
            isNew: true
        });
        this.styleElements(false);
    }

    addClassToggle(object) {
        this.classToggles.push(object);
        this.styleElements(false);
    }

    computeLuminance(r, g, b) {
        let { luminanceTable } = Me.imports.themeManager.luminanceTable;
        let redLuminance = 0.2126 * luminanceTable[r];
        let greenLuminance = 0.7152 * luminanceTable[g];
        let blueLuminance = 0.0722 * luminanceTable[b];
        luminanceTable = null; // Unload to ensure garbage collection since the table is relatively large
        return redLuminance + greenLuminance + blueLuminance + .05;
    }

    computeContrast(fgColor, bgColor) {
        let bgLuminance = this.computeLuminance(bgColor.r, bgColor.g, bgColor.b);
        let fgLuminance = this.computeLuminance(fgColor.r, fgColor.g, fgColor.b);

        return Math.max(bgLuminance, fgLuminance) / Math.min(bgLuminance, fgLuminance);
    }

    chooseContrastColor(color, darkColor, lightColor) {
        let darkContrast = this.computeContrast(color, darkColor);
        let lightContrast = this.computeContrast(color, lightColor);
        return (darkContrast >= lightContrast ? darkColor : lightColor);
    }

    parseHexColor(color) {
        color = color.replace("#","");
        let r = parseInt(color.substring(0,2),16);
        let g = parseInt(color.substring(2,4),16);
        let b = parseInt(color.substring(4,6),16);
        return {r,g,b};
    }

    generateCSSFromColor(color) {
        return `rgb(${color.r},${color.g},${color.b})`;
    }

    generateStyleForKey(key, dynamicFG) {
        if (key === "") return "";
        if (this.darkMode) {
            return key.replace('$primary',this.primaryColor)
                      .replace('$bg', '#191919')
                      .replace('$fg', '#C8C8C8')
                      .replace('$active-bg', 'rgba(255,255,255,0.12)')
                      .replace('$hover-bg', 'rgba(255,255,255,0.04)')
                      .replace('$active-fg', 'rgba(255,255,255,0.16)')
                      .replace('$ripple', 'rgba(255,255,255,0.16)')
                      .replace('$shadow','3px 3px 3px rgba(0,0,0,0.3)')
                      .replace('$dynamic-fg', dynamicFG);
        } else {
            return key.replace('$primary',this.primaryColor)
                      .replace('$bg', '#FFFFFF')
                      .replace('$fg', '#191919')
                      .replace('$active-bg', 'rgba(0,0,0,0.12)')
                      .replace('$hover-bg', 'rgba(0,0,0,0.04)')
                      .replace('$active-fg', 'rgba(0,0,0,0.16)')
                      .replace('$ripple', 'rgba(0,0,0,0.16)')
                      .replace('$shadow','3px 3px 3px rgba(0,0,0,0.3)')
                      .replace('$dynamic-fg', dynamicFG);
        }
    }

    removeObject(object) {
        let keyIndex = this.styleKeys.findIndex(key=>{
            return key.object === object;
        });
        let toggleIndex = this.classToggles.findIndex(obj=>{
            return obj === object;
        });
        if (keyIndex) this.styleKeys.splice(keyIndex, 1);
        if (toggleIndex) this.classToggles.splice(toggleIndex, 1);
    }

    styleElements(restyleAllElements) {
        if (restyleAllElements) this.dynamicFG = this.generateCSSFromColor(this.chooseContrastColor(this.parseHexColor(this.primaryColor), {r:25,g:25,b:25}, {r:255,g:255,b:255}));
        let styleKeyPrunes = [];
        let classTogglePrunes = [];
        this.styleKeys.forEach((key,index)=>{
            /*if (!key.object) {
                styleKeyPrunes.push(index);
                return;
            }*/
            try {
                if (restyleAllElements || key.isNew) {
                    key.object.style = this.generateStyleForKey(this.darkMode ? key.darkStyle : key.lightStyle, this.dynamicFG);
                    key.isNew = false;
                }
            } catch {
                // object may have been deallocated, remove it
                styleKeyPrunes.push(index);
            }
        });
        this.classToggles.forEach((object,index)=>{
            /*if (!object) {
                classTogglePrunes.push(index);
                return;
            }*/
            try {
                if (this.darkMode && object.style_class.indexOf && object.style_class.indexOf("light-mode") > -1) {
                    object.remove_style_class_name("light-mode");
                } else if (!this.darkMode && (!object.style_class.indexOf || object.style_class.indexOf("light-mode") === -1)) {
                    object.add_style_class_name("light-mode");
                }
            } catch {
                classTogglePrunes.push(index);
            }
        });
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            styleKeyPrunes.forEach(index=>this.styleKeys.splice(index,1));
            classTogglePrunes.forEach(index=>this.classToggles.splice(index,1));
        });
    }

    onDestroy() {
        this.settingsSignals.forEach(signal =>
            this.settings.disconnect(signal)
        );
        this.styleKeys = [];
        this.classToggles = [];
    }

    destroyKeysAndToggles() {
        this.styleKeys = [];
        this.classToggles = [];
    }
}
const Config = imports.misc.config;
const [major] = Config.PACKAGE_VERSION.split('.');
const shellVersion = Number.parseInt(major);
import { buildGtk3 } from 'src/prefs/prefs-gtk3';
import { buildGtk4 } from 'src/prefs/prefs-gtk4';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
function init() {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function buildPrefsWidget() {
    if (shellVersion >= 40) {
        return buildGtk4();
    } else {
        return buildGtk3();
    }
}

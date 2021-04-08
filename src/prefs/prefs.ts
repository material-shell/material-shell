const Config = imports.misc.config;
const [major] = Config.PACKAGE_VERSION.split('.');
import * as GObject from 'gobject';
import * as Gtk from 'gtk';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
function init() {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function buildPrefsWidget() {
    return new PrefsWidget();
}

const PrefsWidget = GObject.registerClass(
    {
        GTypeName: 'PrefsWidget',
    },
    class PrefsWidget extends Gtk.Box {
        _init(params = {}) {
            super._init(params);
        }

        _onButtonClicked(button) {
            button.set_label('Clicked!');
        }
    }
);

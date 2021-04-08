import * as GObject from 'gobject';
import * as Gtk from 'gtk4';

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

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

export function buildGtk4() {
    return new PrefsWidget();
}

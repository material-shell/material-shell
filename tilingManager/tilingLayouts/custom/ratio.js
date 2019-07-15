const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const {
    BaseGrabbableLayout
} = Me.imports.tilingManager.tilingLayouts.custom.baseGrabbable;
const { getSettings } = Me.imports.utils.settings;

/* exported RatioLayout */
var RatioLayout = class RatioLayout extends BaseGrabbableLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.settings = getSettings('layouts');
        this.settingsSignal = this.settings.connect(
            'changed::ratio-value',
            (schema, key) => {
                this.ratio = schema.get_double('ratio-value');
                this.onTile();
            }
        );
        this.ratio = this.settings.get_double('ratio-value');
    }

    onTileRegulars(windows) {
        if (!windows.length) return;

        const workArea = Main.layoutManager.getWorkAreaForMonitor(
            this.monitor.index
        );
        const freeArea = {
            x: workArea.x,
            y: workArea.y,
            width: workArea.width,
            height: workArea.height
        };

        windows.forEach((window, index) => {
            if (window.get_maximized())
                window.unmaximize(Meta.MaximizeFlags.BOTH);

            let windowArea = {
                x: freeArea.x,
                y: freeArea.y
            };

            if (index === windows.length - 1) {
                windowArea = freeArea;
            } else {
                if (freeArea.width > freeArea.height) {
                    windowArea.width = freeArea.width * this.ratio;
                    windowArea.height = freeArea.height;
                    freeArea.x += windowArea.width;
                    freeArea.width -= windowArea.width;
                } else {
                    windowArea.width = freeArea.width;
                    windowArea.height = freeArea.height * this.ratio;
                    freeArea.y += windowArea.height;
                    freeArea.height -= windowArea.height;
                }
            }

            this.moveAndResizeMetaWindow(
                window,
                windowArea.x,
                windowArea.y,
                windowArea.width,
                windowArea.height
            );
        });
    }
    onDestroy() {
        super.onDestroy();
        this.settings.disconnect(this.settingsSignal);
    }
};

RatioLayout.key = 'ratio';

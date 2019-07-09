const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { AutoGridLayout } = Me.imports.tilingManager.tilingLayouts.autoGrid;
const { getSettings } = Me.imports.utils.settings;

/* exported RatioGridLayout */
var RatioGridLayout = class RatioGridLayout extends AutoGridLayout {
    constructor(superWorkspace) {
        super(superWorkspace);
        this.key = 'ratio-grid';
        this.icon = Gio.icon_new_for_string(
            `${Me.path}/assets/icons/view-quilt-ratio-symbolic.svg`
        );
        this.settings = getSettings('layouts');
        this.settings.connect('changed::ratio-grid-ratio', (schema, key) => {
            log('changed');
            this.onTile();
        });
    }

    onTileRegulars(windows) {
        if (!windows.length) return;

        const ratio = this.settings.get_double('ratio-grid-ratio');
        log('tile', ratio);

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
            if (window.grabbed) return;

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
                    windowArea.width = freeArea.width * ratio;
                    windowArea.height = freeArea.height;
                    freeArea.x += windowArea.width;
                    freeArea.width -= windowArea.width;
                } else {
                    windowArea.width = freeArea.width;
                    windowArea.height = freeArea.height * ratio;
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
};

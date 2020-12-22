/** Gnome libs imports */
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { getSettings } = Me.imports.src.utils.settings;
const { MsManager } = Me.imports.src.manager.msManager;

const layoutsFolder = Me.imports.src.layout.msWorkspace.tilingLayouts;
const { MaximizeLayout } = layoutsFolder.maximize;
const { SplitLayout } = layoutsFolder.split;
const { FloatLayout } = layoutsFolder.float;
const { HalfLayout } = layoutsFolder.custom.half;
const { HalfHorizontalLayout } = layoutsFolder.custom.halfHorizontal;
const { HalfVerticalLayout } = layoutsFolder.custom.halfVertical;
const { SimpleLayout } = layoutsFolder.custom.simple;
const { SimpleHorizontalLayout } = layoutsFolder.custom.simpleHorizontal;
const { SimpleVerticalLayout } = layoutsFolder.custom.simpleVertical;
const { RatioLayout } = layoutsFolder.custom.ratio;
const { GridLayout } = layoutsFolder.custom.grid;

const layouts = [
    MaximizeLayout,
    SplitLayout,
    GridLayout,
    HalfLayout,
    HalfHorizontalLayout,
    HalfVerticalLayout,
    RatioLayout,
    SimpleLayout,
    SimpleHorizontalLayout,
    SimpleVerticalLayout,
    FloatLayout,
];

var TilingLayoutByKey = layouts.reduce((layoutsByKey, layout) => {
    layoutsByKey[layout.state.key] = layout;
    return layoutsByKey;
}, {});

/* exported LayoutManager */
var LayoutManager = class LayoutManager extends MsManager {
    constructor() {
        super();
        this.workspaceManager = global.workspace_manager;
        this.layoutList = layouts;
        this.layoutsSettings = getSettings('layouts');

        this.observe(this.layoutsSettings, 'changed::gap', (schema) => {
            this.gap = schema.get_int('gap');
            this.emit('gap-changed');
            this.tileWindows();
        });

        this.observe(
            this.layoutsSettings,
            'changed::use-screen-gap',
            (schema) => {
                this.useScreenGap = schema.get_boolean('use-screen-gap');
                this.emit('gap-changed');
                this.tileWindows();
            }
        );

        this.observe(this.layoutsSettings, 'changed::screen-gap', (schema) => {
            this.screenGap = schema.get_int('screen-gap');
            this.emit('gap-changed');
            this.tileWindows();
        });
        this.observe(this.layoutsSettings, 'changed::tween-time', (schema) => {
            this.tweenTime = schema.get_double('tween-time');
        });
        this.observe(this.layoutsSettings, 'changed::ratio-value', (schema) => {
            this.ratio = schema.get_double('ratio-value');
            this.tileWindows();
        });

        this.ratio = this.layoutsSettings.get_double('ratio-value');
        this.gap = this.layoutsSettings.get_int('gap');
        this.useScreenGap = this.layoutsSettings.get_boolean('use-screen-gap');
        this.screenGap = this.layoutsSettings.get_int('screen-gap');
        this.tweenTime = this.layoutsSettings.get_double('tween-time');
    }

    get someGap() {
        return this.gap != 0 || (this.useScreenGap && this.screenGap != 0);
    }

    get defaultLayoutKeyList() {
        return layouts
            .map((layout) => layout.state.key)
            .filter((layoutKey) => this.layoutsSettings.get_boolean(layoutKey));
    }

    get defaultLayoutKey() {
        return this.layoutsSettings.get_string('default-layout');
    }

    getLayoutListFromKeys(layoutKeys) {
        return layoutKeys.map((layoutKey) => {
            return TilingLayoutByKey[layoutKey];
        });
    }

    getLayoutByKey(key) {
        return TilingLayoutByKey[key];
    }

    getNextLayout(currentLayout, direction) {
        let { key } = currentLayout.constructor;
        if (!this.availableLayouts.includes(key)) {
            key = this.availableLayouts[0];
        }
        let nextIndex = this.availableLayouts.indexOf(key) + direction;
        if (nextIndex < 0) {
            nextIndex += this.availableLayouts.length;
        }
        nextIndex = nextIndex % this.availableLayouts.length;
        // Get the next layout available
        const newKey = this.availableLayouts[nextIndex];
        // And returns it
        return TilingLayoutByKey[newKey];
    }

    tileWindows() {
        if (this.tilingInProgress) return;

        this.tilingInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            for (let monitor of Main.layoutManager.monitors) {
                let msWorkspace;
                if (monitor.index === Main.layoutManager.primaryIndex) {
                    msWorkspace = Me.msWorkspaceManager.getActivePrimaryMsWorkspace();
                } else {
                    msWorkspace = Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                        monitor.index
                    )[0];
                }
                let layout = msWorkspace.layout;

                layout.tileAll();
                //this.dialogLayout.onTile(dialogWindows, monitor);
            }

            this.tilingInProgress = false;
            return GLib.SOURCE_REMOVE;
        });
    }
};

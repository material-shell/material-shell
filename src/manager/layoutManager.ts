/** Gnome libs imports */
import { main as Main } from 'ui';
import * as GLib from 'glib';
import * as Meta from 'meta';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { getSettings } from 'src/utils/settings';
import { MsManager } from 'src/manager/msManager';
import { BaseTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseTiling';

import { MaximizeLayout } from 'src/layout/msWorkspace/tilingLayouts/maximize';
import { SplitLayout } from 'src/layout/msWorkspace/tilingLayouts/split';
import { FloatLayout } from 'src/layout/msWorkspace/tilingLayouts/float';
import { HalfLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/half';
import { HalfHorizontalLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/halfHorizontal';
import { HalfVerticalLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/halfVertical';
import { SimpleLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/simple';
import { SimpleHorizontalLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/simpleHorizontal';
import { SimpleVerticalLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/simpleVertical';
import { RatioLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/ratio';
import { GridLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/grid';

export type LayoutState = 
    (typeof MaximizeLayout)["state"]
    | (typeof SplitLayout)["state"]
    | (typeof GridLayout)["state"]
    | (typeof HalfLayout)["state"]
    | (typeof HalfHorizontalLayout)["state"]
    | (typeof HalfVerticalLayout)["state"]
    | (typeof RatioLayout)["state"]
    | (typeof SimpleLayout)["state"]
    | (typeof SimpleHorizontalLayout)["state"]
    | (typeof SimpleVerticalLayout)["state"]
    | (typeof FloatLayout)["state"];
    
export type LayoutType = typeof BaseTilingLayout & { state: LayoutState, label: string };

const layouts: LayoutType[] = [
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

export const TilingLayoutByKey: {
    [key: string]: LayoutType;
} = layouts.reduce((layoutsByKey, layout) => {
    layoutsByKey[layout.state.key] = layout;
    return layoutsByKey;
}, {} as { [key: string]: LayoutType; });

export class LayoutManager extends MsManager {
    workspaceManager: Meta.WorkspaceManager;
    layoutList: any[];
    layoutsSettings: any;
    screenGap: number;
    ratio: number;
    useScreenGap: boolean;
    tweenTime: number;
    gap: number;
    availableLayouts: LayoutType[] | undefined;
    tilingInProgress: boolean | undefined;

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

    getLayoutListFromKeys(layoutKeys: string[]) {
        return layoutKeys.map((layoutKey) => {
            return TilingLayoutByKey[layoutKey];
        });
    }

    getLayoutByKey(key: string): LayoutType {
        return TilingLayoutByKey[key];
    }

    // getNextLayout(currentLayout, direction: string): string {
    //     let { key } = currentLayout.constructor;
    //     if (!this.availableLayouts.includes(key)) {
    //         key = this.availableLayouts[0];
    //     }
    //     let nextIndex = this.availableLayouts.indexOf(key) + direction;
    //     if (nextIndex < 0) {
    //         nextIndex += this.availableLayouts.length;
    //     }
    //     nextIndex = nextIndex % this.availableLayouts.length;
    //     // Get the next layout available
    //     const newKey = this.availableLayouts[nextIndex];
    //     // And returns it
    //     return TilingLayoutByKey[newKey];
    // }

    tileWindows() {
        if (this.tilingInProgress) return;

        this.tilingInProgress = true;
        GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
            for (const monitor of Main.layoutManager.monitors) {
                let msWorkspace;
                if (monitor.index === Main.layoutManager.primaryIndex) {
                    msWorkspace = Me.msWorkspaceManager.getActivePrimaryMsWorkspace();
                } else {
                    msWorkspace = Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
                        monitor.index
                    )[0];
                }
                const layout = msWorkspace.layout;

                layout.tileAll();
                //this.dialogLayout.onTile(dialogWindows, monitor);
            }

            this.tilingInProgress = false;
            return GLib.SOURCE_REMOVE;
        });
    }
}

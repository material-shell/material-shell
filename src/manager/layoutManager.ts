/** Gnome libs imports */
import { Settings } from 'gio';
import * as GLib from 'glib';
import * as Meta from 'meta';
import { MsWorkspace } from 'src/layout/msWorkspace/msWorkspace';
import { BaseTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseTiling';
import { GridLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/grid';
import { HalfLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/half';
import { HalfHorizontalLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/halfHorizontal';
import { HalfVerticalLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/halfVertical';
import { RatioLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/ratio';
import { SimpleLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/simple';
import { SimpleHorizontalLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/simpleHorizontal';
import { SimpleVerticalLayout } from 'src/layout/msWorkspace/tilingLayouts/custom/simpleVertical';
import { FloatLayout } from 'src/layout/msWorkspace/tilingLayouts/float';
import { MaximizeLayout } from 'src/layout/msWorkspace/tilingLayouts/maximize';
import { SplitLayout } from 'src/layout/msWorkspace/tilingLayouts/split';
import { MsManager } from 'src/manager/msManager';
import { getSettings } from 'src/utils/settings';
import { main as Main } from 'ui';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

type ExtractState<L> = L extends BaseTilingLayout<infer S> ? S : never;

export type LayoutState =
    | ExtractState<MaximizeLayout>
    | ExtractState<SplitLayout>
    | ExtractState<GridLayout>
    | ExtractState<HalfLayout>
    | ExtractState<HalfHorizontalLayout>
    | ExtractState<HalfVerticalLayout>
    | ExtractState<RatioLayout>
    | ExtractState<SimpleLayout>
    | ExtractState<SimpleHorizontalLayout>
    | ExtractState<SimpleVerticalLayout>
    | ExtractState<FloatLayout>;

export type LayoutType =
    | typeof MaximizeLayout
    | typeof SplitLayout
    | typeof GridLayout
    | typeof HalfLayout
    | typeof HalfHorizontalLayout
    | typeof HalfVerticalLayout
    | typeof RatioLayout
    | typeof SimpleLayout
    | typeof SimpleHorizontalLayout
    | typeof SimpleVerticalLayout
    | typeof FloatLayout;

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
}, {} as { [key: string]: LayoutType });

export class LayoutManager extends MsManager {
    workspaceManager: Meta.WorkspaceManager;
    layoutList: LayoutType[];
    layoutsSettings: Settings;
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

    createLayout(
        workspace: MsWorkspace,
        state: LayoutState
    ): InstanceType<LayoutType> {
        switch (state.key) {
            case 'maximize':
                return new MaximizeLayout(workspace, state);
            case 'split':
                return new SplitLayout(workspace, state);
            case 'grid':
                return new GridLayout(workspace, state);
            case 'half':
                return new HalfLayout(workspace, state);
            case 'half-horizontal':
                return new HalfHorizontalLayout(workspace, state);
            case 'half-vertical':
                return new HalfVerticalLayout(workspace, state);
            case 'ratio':
                return new RatioLayout(workspace, state);
            case 'simple':
                return new SimpleLayout(workspace, state);
            case 'simple-horizontal':
                return new SimpleHorizontalLayout(workspace, state);
            case 'simple-vertical':
                return new SimpleVerticalLayout(workspace, state);
            case 'float':
                return new FloatLayout(workspace, state);
        }
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
                    msWorkspace =
                        Me.msWorkspaceManager.getActivePrimaryMsWorkspace();
                } else {
                    msWorkspace =
                        Me.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(
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

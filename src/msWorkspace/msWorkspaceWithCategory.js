const { Clutter, GLib, St } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;
const Background = imports.ui.background;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MaximizeLayout } = Me.imports.src.tilingManager.tilingLayouts.maximize;
const TopPanel = Me.imports.src.widget.topPanelWidget.TopPanel;
const { debounce } = Me.imports.src.utils.index;
const WindowUtils = Me.imports.src.utils.windows;
const { MsWorkspace } = Me.imports.src.msWorkspace.msWorkspace;
const CategorizedAppCard =
    Me.imports.src.widget.categorizedAppCard.CategorizedAppCard;

const { Stack } = Me.imports.src.widget.layout;

const EMIT_DEBOUNCE_DELAY = 100;

var MsWorkspaceWithCategory = class MsWorkspaceWithCategory extends MsWorkspace {
    constructor(msWorkspaceManager, monitor, visible, category) {
        super(msWorkspaceManager, monitor, visible);
        this.category = category;
        let previousLayout = category.tilingLayout;
        const Layout = global.tilingManager.getLayoutByKey(
            category.tilingLayout
        );
        this.tilingLayout = new Layout(this);
    }

    nextTiling(direction) {
        super.nextTiling(direction);
        this.category.tilingLayout = this.tilingLayout.constructor.key;
        this.msWorkspaceManager.saveCategoryState();
        /* Me.stateManager.setState(
            `${this.categoryKey}_${this.monitor.index}`,
            this.tilingLayout.constructor.key
        ); */
    }
};
Signals.addSignalMethods(MsWorkspaceWithCategory.prototype);

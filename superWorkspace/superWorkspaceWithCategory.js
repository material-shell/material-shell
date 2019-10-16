const { Clutter, GLib, St } = imports.gi;
const Signals = imports.signals;
const Main = imports.ui.main;
const Background = imports.ui.background;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const TopPanel = Me.imports.widget.topPanelWidget.TopPanel;
const { debounce } = Me.imports.utils.index;
const WindowUtils = Me.imports.utils.windows;
const { SuperWorkspace } = Me.imports.superWorkspace.superWorkspace;
const CategorizedAppCard =
    Me.imports.widget.categorizedAppCard.CategorizedAppCard;

const { Stack } = Me.imports.widget.layout;

const EMIT_DEBOUNCE_DELAY = 100;

var SuperWorkspaceWithCategory = class SuperWorkspaceWithCategory extends SuperWorkspace {
    constructor(superWorkspaceManager, monitor, visible, category) {
        super(superWorkspaceManager, monitor, visible);
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
        this.superWorkspaceManager.saveCategoryState();
        /* Me.stateManager.setState(
            `${this.categoryKey}_${this.monitor.index}`,
            this.tilingLayout.constructor.key
        ); */
    }
};
Signals.addSignalMethods(SuperWorkspaceWithCategory.prototype);

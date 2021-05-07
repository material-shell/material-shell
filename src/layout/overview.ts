import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as Meta from 'meta';
import * as Shell from 'shell';
import { registerGObjectClass } from 'src/utils/gjs';
import * as St from 'st';
const Dash = imports.ui.dash;
const SearchController = imports.ui.searchController;
const LayoutManager = imports.ui.layout;
const Main = imports.ui.main;
const OverviewControls = imports.ui.overviewControls;
const SwipeTracker = imports.ui.swipeTracker;
const WindowManager = imports.ui.windowManager;
const Overview = imports.ui.overview.Overview;
const ShellInfo = imports.ui.overview.ShellInfo;
const AppDisplay = imports.ui.appDisplay;
const Layout = imports.ui.layout;
const ANIMATION_TIME = 250;
const A11Y_SCHEMA = 'org.gnome.desktop.a11y.keyboard';

const Me = imports.misc.extensionUtils.getCurrentExtension();
/*
@registerGObjectClass
class ControlsManagerLayout extends Clutter.BoxLayout {
    _container;
    _appDisplay;
    _searchEntry;
    _searchController;
    _dash;
    _postAllocationCallbacks;
    _init(searchEntry, appDisplay, searchController, dash) {
        super._init({ orientation: Clutter.Orientation.VERTICAL });
        this._appDisplay = appDisplay;

        this._searchEntry = searchEntry;
        this._searchController = searchController;
        this._dash = dash;

        this._postAllocationCallbacks = [];
    }

    _getAppDisplayBoxForState(
        state,
        box,
        startY,
        searchHeight,
        dashHeight,
        appGridBox
    ) {
        const [width, height] = box.get_size();
        const appDisplayBox = new Clutter.ActorBox();
        const { spacing } = this;

        appDisplayBox.set_origin(
            0,
            startY + searchHeight + spacing + appGridBox.get_height()
        );

        appDisplayBox.set_size(
            width,
            height -
                searchHeight -
                spacing -
                appGridBox.get_height() -
                spacing -
                dashHeight
        );

        return appDisplayBox;
    }

    _runPostAllocation() {
        if (this._postAllocationCallbacks.length === 0) return;

        this._postAllocationCallbacks.forEach((cb) => cb());
        this._postAllocationCallbacks = [];
    }

    vfunc_set_container(container) {
        this._container = container;
        this.hookup_style(container);
    }

    vfunc_get_preferred_width(_container, _forHeight) {
        // The MonitorConstraint will allocate us a fixed size anyway
        return [0, 0];
    }

    vfunc_get_preferred_height(_container, _forWidth) {
        // The MonitorConstraint will allocate us a fixed size anyway
        return [0, 0];
    }

    vfunc_allocate(container, box) {
        const childBox = new Clutter.ActorBox();

        const { spacing } = this;

        let startY = 0;
        if (
            Main.layoutManager.panelBox.y ===
            Main.layoutManager.primaryMonitor.y
        ) {
            startY = Main.layoutManager.panelBox.height;
            box.y1 += startY;
        }
        const [width, height] = box.get_size();
        let availableHeight = height;

        // Search entry
        const [searchHeight] = this._searchEntry.get_preferred_height(width);
        childBox.set_origin(0, startY);
        childBox.set_size(width, searchHeight);
        this._searchEntry.allocate(childBox);

        availableHeight -= searchHeight + spacing;

        // Dash
        const maxDashHeight = Math.round(
            box.get_height() * DASH_MAX_HEIGHT_RATIO
        );
        this._dash.setMaxSize(width, maxDashHeight);

        let [, dashHeight] = this._dash.get_preferred_height(width);
        dashHeight = Math.min(dashHeight, maxDashHeight);
        childBox.set_origin(0, startY + height - dashHeight);
        childBox.set_size(width, dashHeight);
        this._dash.allocate(childBox);

        availableHeight -= dashHeight + spacing;

        // AppDisplay
        if (this._appDisplay.visible) {
            const workspaceAppGridBox = this._cachedWorkspaceBoxes.get(
                ControlsState.APP_GRID
            );

            params = [
                box,
                startY,
                searchHeight,
                dashHeight,
                workspaceAppGridBox,
            ];
            let appDisplayBox;
            if (!transitionParams.transitioning) {
                appDisplayBox = this._getAppDisplayBoxForState(
                    transitionParams.currentState,
                    ...params
                );
            } else {
                const initialBox = this._getAppDisplayBoxForState(
                    transitionParams.initialState,
                    ...params
                );
                const finalBox = this._getAppDisplayBoxForState(
                    transitionParams.finalState,
                    ...params
                );

                appDisplayBox = initialBox.interpolate(
                    finalBox,
                    transitionParams.progress
                );
            }

            this._appDisplay.allocate(appDisplayBox);
        }

        // Search
        childBox.set_origin(0, startY + searchHeight + spacing);
        childBox.set_size(width, availableHeight);

        this._searchController.allocate(childBox);

        this._runPostAllocation();
    }

    ensureAllocation() {
        this.layout_changed();
        return new Promise((resolve) =>
            this._postAllocationCallbacks.push(resolve)
        );
    }

} */

export function _computeWorkspacesBoxForState(
    state,
    box,
    startY,
    searchHeight,
    dashHeight,
    thumbnailsHeight
) {
    const workspaceBox = box.copy();
    const [width, height] = workspaceBox.get_size();
    const { spacing } = this;
    const { expandFraction } = this._workspacesThumbnails;

    workspaceBox.set_origin(0, startY + searchHeight + spacing);
    workspaceBox.set_size(0, 0);

    return workspaceBox;
}

export function OverviewShow(state = OverviewControls.ControlsState.APP_GRID) {
    if (state === OverviewControls.ControlsState.HIDDEN)
        throw new Error('Invalid state, use hide() to hide');

    if (this.isDummy) return;
    if (this._shown) return;
    this._shown = true;

    if (!this._syncGrab()) return;

    Main.layoutManager.showOverview();
    this._animateVisible(state);
}

@registerGObjectClass
class MsControlsManager extends St.Widget {
    _searchEntry: St.Entry;
    _searchEntryBin: St.Bin;
    _searchController;
    dash;
    _a11ySettings;
    _appDisplay;
    _init() {
        super._init({
            style_class: 'controls-manager',
            x_expand: true,
            y_expand: true,
            clip_to_allocation: true,
        });

        this._searchEntry = new St.Entry({
            style_class: 'search-entry',
            /* Translators: this is the text displayed
               in the search entry when no search is
               active; it should not exceed ~30
               characters. */
            hint_text: _('Type to search'),
            track_hover: true,
            can_focus: true,
        });
        this._searchEntry.set_offscreen_redirect(
            Clutter.OffscreenRedirect.ALWAYS
        );
        this._searchEntryBin = new St.Bin({
            child: this._searchEntry,
            x_align: Clutter.ActorAlign.CENTER,
        });

        this.dash = new Dash.Dash();

        this._searchController = new SearchController.SearchController(
            this._searchEntry,
            this.dash.showAppsButton
        );
        this._searchController.connect(
            'notify::search-active',
            this._onSearchChanged.bind(this)
        );

        this._appDisplay = new AppDisplay.AppDisplay();

        this.add_child(this._searchEntryBin);
        this.add_child(this._appDisplay);
        this.add_child(this.dash);
        this.add_child(this._searchController);

        this._a11ySettings = new Gio.Settings({ schema_id: A11Y_SCHEMA });

        /* global.display.connect('overlay-key', () => {
            Main.overview.toggle();
            Me.logFocus('overlay-key', Main.overview.isDummy);
        }); */

        /* Main.wm.addKeybinding(
            'toggle-application-view',
            new Gio.Settings({
                schema_id: WindowManager.SHELL_KEYBINDINGS_SCHEMA,
            }),
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL | Shell.ActionMode.OVERVIEW,
            this._toggleAppsPage.bind(this)
        );

        Main.wm.addKeybinding(
            'shift-overview-up',
            new Gio.Settings({
                schema_id: WindowManager.SHELL_KEYBINDINGS_SCHEMA,
            }),
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL | Shell.ActionMode.OVERVIEW,
            () => this._shiftState(Meta.MotionDirection.UP)
        );

        Main.wm.addKeybinding(
            'shift-overview-down',
            new Gio.Settings({
                schema_id: WindowManager.SHELL_KEYBINDINGS_SCHEMA,
            }),
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL | Shell.ActionMode.OVERVIEW,
            () => this._shiftState(Meta.MotionDirection.DOWN)
        ); */
    }

    _onSearchChanged() {
        const { searchActive } = this._searchController;

        if (!searchActive) {
            this._updateAppDisplayVisibility();
        } else {
            this._searchController.show();
        }

        this._appDisplay.ease({
            opacity: searchActive ? 0 : 255,
            duration: ANIMATION_TIME,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => this._updateAppDisplayVisibility(),
        });

        this._searchController.ease({
            opacity: searchActive ? 255 : 0,
            duration: ANIMATION_TIME,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => (this._searchController.visible = searchActive),
        });
    }

    animateToOverview(state, callback) {
        this._searchController.prepareToEnterOverview();
        callback();
    }

    animateFromOverview(callback) {
        callback();
    }
    _updateAppDisplayVisibility() {
        this._appDisplay.visible = !this._searchController.searchActive;
    }
    /*  gestureBegin(tracker) {
        const baseDistance = global.screen_height;
        const progress = this._stateAdjustment.value;
        const points = [
            ControlsState.HIDDEN,
            ControlsState.WINDOW_PICKER,
            ControlsState.APP_GRID,
        ];

        const transition = this._stateAdjustment.get_transition('value');
        const cancelProgress = transition
            ? transition.get_interval().peek_final_value()
            : Math.round(progress);

        tracker.confirmSwipe(baseDistance, points, progress, cancelProgress);
        this._searchController.prepareToEnterOverview();
    }

    gestureProgress(progress) {
        this._stateAdjustment.value = progress;
    }

    gestureEnd(target, duration, onComplete) {
        if (target === ControlsState.HIDDEN)
            this._workspacesDisplay.prepareToLeaveOverview();

        this.dash.showAppsButton.checked = target === ControlsState.APP_GRID;

        this._stateAdjustment.remove_transition('value');
        this._stateAdjustment.ease(target, {
            duration,
            mode: Clutter.AnimationMode.EASE_OUT_CUBIC,
            onComplete,
        });

        this._stateAdjustment.gestureInProgress = false;
    } */

    async runStartupAnimation(callback) {
        this._searchController.prepareToEnterOverview();

        this.dash.showAppsButton.checked = false;

        // Set the opacity here to avoid a 1-frame flicker
        this.opacity = 0;

        // We can't run the animation before the first allocation happens
        //await this.layout_manager.ensureAllocation();

        const { STARTUP_ANIMATION_TIME } = Layout;

        // Opacity
        this.ease({
            opacity: 255,
            duration: STARTUP_ANIMATION_TIME,
            mode: Clutter.AnimationMode.LINEAR,
        });

        // Search bar falls from the ceiling
        const { primaryMonitor } = Main.layoutManager;
        const [, y] = this._searchEntryBin.get_transformed_position();
        const yOffset = y - primaryMonitor.y;

        this._searchEntryBin.translation_y = -(
            yOffset + this._searchEntryBin.height
        );
        this._searchEntryBin.ease({
            translation_y: 0,
            duration: STARTUP_ANIMATION_TIME,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
        });

        // The Dash rises from the bottom. This is the last animation to finish,
        // so run the callback there.
        this.dash.translation_y = this.dash.height;
        this.dash.ease({
            translation_y: 0,
            delay: STARTUP_ANIMATION_TIME,
            duration: STARTUP_ANIMATION_TIME,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => callback(),
        });
    }

    get searchEntry() {
        return this._searchEntry;
    }

    get appDisplay() {
        return this._appDisplay;
    }
}

@registerGObjectClass
class OverviewActor extends St.BoxLayout {
    _controls: MsControlsManager;
    _init() {
        super._init({
            name: 'overview',
            /* Translators: This is the main Fview to select
                activities. See also note for "Activities" string. */
            accessible_name: _('Overview'),
            vertical: true,
        });

        this.add_constraint(
            new LayoutManager.MonitorConstraint({ primary: true })
        );

        this._controls = new MsControlsManager();
        this.add_child(this._controls);
    }

    animateToOverview(state, callback) {
        this._controls.animateToOverview(state, callback);
    }

    animateFromOverview(callback) {
        this._controls.animateFromOverview(callback);
    }

    runStartupAnimation(callback) {
        this._controls.runStartupAnimation(callback);
    }

    get dash() {
        return this._controls.dash;
    }

    get searchEntry() {
        return this._controls.searchEntry;
    }

    get controls() {
        return this._controls;
    }
}

export class MsOverview extends Overview {
    toto = 'toto';

    constructor() {
        super();
    }

    // The members we construct that are implemented in JS might
    // want to access the overview as Main.overview to connect
    // signal handlers and so forth. So we create them after
    // construction in this init() method.
    init() {
        this._initCalled = true;

        if (this.isDummy) return;

        this._overview = new OverviewActor();
        this._overview._delegate = this;
        Main.layoutManager.overviewGroup.add_child(this._overview);

        this._shellInfo = new ShellInfo();

        Main.layoutManager.connect(
            'monitors-changed',
            this._relayout.bind(this)
        );
        this._relayout();

        Main.wm.addKeybinding(
            'toggle-overview',
            new Gio.Settings({
                schema_id: WindowManager.SHELL_KEYBINDINGS_SCHEMA,
            }),
            Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
            Shell.ActionMode.NORMAL | Shell.ActionMode.OVERVIEW,
            this.toggle.bind(this)
        );

        const swipeTracker = new SwipeTracker.SwipeTracker(
            global.stage,
            Clutter.Orientation.VERTICAL,
            Shell.ActionMode.NORMAL | Shell.ActionMode.OVERVIEW,
            { allowDrag: false, allowScroll: false }
        );
        swipeTracker.orientation = Clutter.Orientation.VERTICAL;
        swipeTracker.connect('begin', this._gestureBegin.bind(this));
        swipeTracker.connect('update', this._gestureUpdate.bind(this));
        swipeTracker.connect('end', this._gestureEnd.bind(this));
        this._swipeTracker = swipeTracker;
    }
}

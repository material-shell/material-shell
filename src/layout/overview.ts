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

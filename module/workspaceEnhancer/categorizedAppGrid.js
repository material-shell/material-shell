const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const FrequentView = imports.ui.appDisplay.FrequentView;
const AppIcon = imports.ui.appDisplay.AppIcon;
const { Clutter, Shell, Meta, St } = imports.gi;

var MAX_COLUMNS = 6;
var MIN_COLUMNS = 4;
var MIN_ROWS = 4;
/* exported CategorizedAppGrid */
var CategorizedAppGrid = class CategorizedAppGrid extends Object.getPrototypeOf(
    FrequentView
) {
    constructor(workspaceCategory, monitorWidth, monitorHeight) {
        super(null, { fillParent: false });
        this.workspaceCategory = workspaceCategory;
        this.actor = new St.Widget({
            style_class: 'categorized-apps',
            layout_manager: new Clutter.BinLayout(),
            width: monitorWidth,
            height: monitorHeight
        });

        this.container = new St.BoxLayout({
            vertical: true
        });
        this.titleContainer = new St.BoxLayout({
            style_class: 'categorized-apps-title-container'
        });
        this.categoryIcon = new St.Icon({
            icon_name: workspaceCategory.icon,
            style_class: 'categorized-apps-icon'
        });
        this.categoryTitle = new St.Label({
            text: workspaceCategory.title,
            style_class: 'categorized-apps-title',
            x_expand: true,
            y_align: Clutter.ActorAlign.CENTER
        });
        this.titleContainer.add_child(this.categoryIcon);
        this.titleContainer.add_child(this.categoryTitle);
        //this._grid.y_expand = true;

        let grid = this._grid;
        this._grid._cancelAnimation = (function() {
            var cachedFunction = grid._cancelAnimation;
            return function() {
                // Before
                if (global.workspaceAnimationInProgress) return;
                var result = cachedFunction.apply(this, arguments); // use .apply() to call it
                return result;
            };
        })();

        this.container.add_child(this.titleContainer);
        this.container.add_child(this._grid);
        this.actor.add_actor(this.container);

        this._usage = Shell.AppUsage.get_default();

        this.actor.connect('notify::mapped', () => {
            //if (this.actor.mapped) this._redisplay();
        });

        this._redisplay();
        //this.adaptToSize(this.actor.width, this.actor.height);
    }

    hasUsefulData() {
        return this._usage.get_most_used().length >= 3;
    }

    _loadApps() {
        let mostUsed = this.filterAppsToMatchCategory(
            this._usage.get_most_used().map(usageInfo => {
                return usageInfo.app_info;
            })
        );
        let appInstalled = this.filterAppsToMatchCategory(
            Shell.AppSystem.get_default()
                .get_installed()
                .filter(appInfo => {
                    try {
                        let id = appInfo.get_id(); // catch invalid file encodings
                    } catch (e) {
                        return false;
                    }
                    return appInfo.should_show();
                })
        );

        let appSys = Shell.AppSystem.get_default();

        let allAppsId = [
            ...new Set(
                mostUsed
                    .map(appInfo => {
                        return appInfo.get_id();
                    })
                    .concat(
                        appInstalled.map(appInfo => {
                            return appInfo.get_id();
                        })
                    )
            )
        ];

        for (let i = 0; i < Math.min(allAppsId.length, 12); i++) {
            let app = appSys.lookup_app(allAppsId[i]);
            let appIcon = new AppIcon(app, {
                isDraggable: false
            });
            this._grid.addItem(appIcon, -1);
        }
    }

    filterAppsToMatchCategory(appsInfo) {
        return appsInfo.filter(appInfo => {
            const appCategories = appInfo.get_categories() || '';
            const appCategoriesList = appCategories.split(';');
            log(appCategoriesList);
            let flagIncluded = false;
            let flagExcluded = false;
            appCategoriesList.forEach(category => {
                flagIncluded =
                    flagIncluded ||
                    this.workspaceCategory.categoriesIncluded.indexOf(
                        category
                    ) >= 0;
                flagExcluded =
                    flagExcluded ||
                    this.workspaceCategory.categoriesExcluded.indexOf(
                        category
                    ) >= 0;
            });
            return flagIncluded && !flagExcluded && appInfo.should_show();
        });
    }

    // Called before allocation to calculate dynamic spacing
    adaptToSize(width, height) {
        log('toto');
        let box = new Clutter.ActorBox();
        box.x1 = box.y1 = 0;
        box.x2 = width;
        box.y2 = height;
        box = this.actor.get_theme_node().get_content_box(box);
        box = this._grid.get_theme_node().get_content_box(box);
        let availWidth = box.x2 - box.x1;
        let availHeight = box.y2 - box.y1;
        this._grid.adaptToSize(availWidth, availHeight);
    }
};

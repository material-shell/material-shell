const { Clutter, Shell, St, GObject } = imports.gi;
const AppIcon = imports.ui.appDisplay.AppIcon;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MatCard, MatCardTitle, MatCardContent } = Me.imports.material.card.card;
const { Column, Row } = Me.imports.lib.Layout;

/* exported CategorizedAppCard */
var CategorizedAppCard = GObject.registerClass(
    class CategorizedAppCard extends MatCard {
        _init(workspaceCategory) {
            this.workspaceCategory = workspaceCategory;

            this._grid = new SimpleIconGrid(6);

            super._init({
                style_class: 'categorized-app-card',
                child: new Column({
                    children: [
                        new MatCardTitle({
                            icon: new St.Icon({
                                gicon: workspaceCategory.icon
                            }),
                            label: new St.Label({
                                text: workspaceCategory.title,
                                style_class: 'categorized-apps-title',
                                x_expand: true,
                                y_align: Clutter.ActorAlign.CENTER
                            })
                        }),
                        new MatCardContent({
                            child: this._grid
                        })
                    ]
                })
            });

            this._usage = Shell.AppUsage.get_default();
            this._loadApps();
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

            let icons = [];
            for (let i = 0; i < Math.min(allAppsId.length, 12); i++) {
                let app = appSys.lookup_app(allAppsId[i]);
                let appIcon = new AppIcon(app, {
                    isDraggable: false
                });
                icons.push(appIcon);
            }
            this._grid.loadIcons(icons);
        }

        filterAppsToMatchCategory(appsInfo) {
            return appsInfo.filter(appInfo => {
                const appCategories = appInfo.get_categories() || '';
                const appCategoriesList = appCategories.split(';');
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
    }
);

var SimpleIconGrid = GObject.registerClass(
    class SimpleIconGrid extends Column {
        _init(nbColumns) {
            super._init();
            this.nbColumns = nbColumns;
        }
        loadIcons(icons) {
            this.nbRows = Math.ceil(icons.length / this.nbColumns);
            for (let i = 0; i < this.nbRows; i++) {
                let row = new Row({
                    children: icons.splice(0, this.nbColumns).map(icon => {
                        return icon.actor;
                    })
                });
                this.add_child(row);
            }
        }
    }
);

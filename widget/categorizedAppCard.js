const { Clutter, Shell, St, GObject } = imports.gi;
const AppIcon = imports.ui.appDisplay.AppIcon;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    MatCard,
    MatCardTitle,
    MatCardContent
} = Me.imports.widget.material.card;
const { Column, Row } = Me.imports.widget.layout;

/* exported CategorizedAppCard */
var CategorizedAppCard = GObject.registerClass(
    class CategorizedAppCard extends MatCard {
        _init(superWorkspaceCategory, apps) {
            this.workspaceCategory = superWorkspaceCategory;
            this._grid = new SimpleIconGrid(6);
            super._init({
                style_class: 'categorized-app-card',
                child: new Column({
                    children: [
                        new MatCardTitle({
                            icon: new St.Icon({
                                gicon: this.workspaceCategory.icon
                            }),
                            label: new St.Label({
                                text: this.workspaceCategory.title,
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
            this.appSys = Shell.AppSystem.get_default();
            this._loadApps(apps);
        }

        _loadApps(apps) {
            let icons = [];
            for (let i = 0; i < Math.min(apps.length, 12); i++) {
                let app = this.appSys.lookup_app(apps[i].get_id());
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
                const appId = (appInfo.get_id() || '');
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
                flagIncluded = flagIncluded ||
                    this.workspaceCategory.applicationsIncluded.indexOf(appId) >= 0;
                flagExcluded = flagExcluded ||
                    this.workspaceCategory.applicationsExcluded.indexOf(appId) >= 0;
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
            this.destroy_all_children();
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

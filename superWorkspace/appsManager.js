const { Shell } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const { WorkspaceCategories } = Me.imports.superWorkspace.workspaceCategories;

/* exported AppsManager */
var AppsManager = class AppsManager {
    constructor() {}

    static getApps() {
        let usage = Shell.AppUsage.get_default();
        let appSystem = Shell.AppSystem.get_default();
        let appsInstalled = appSystem.get_installed().filter(appInfo => {
            try {
                let id = appInfo.get_id(); // catch invalid file encodings
            } catch (e) {
                return false;
            }
            return appInfo.should_show();
        });

        return appsInstalled.sort((a, b) => {
            return usage.compare(a.get_id(), b.get_id());
        });
    }

    static groupAppsByCategory(apps) {
        let appsByCategoryKeys = {};
        for (let categoryKey of Object.keys(WorkspaceCategories)) {
            appsByCategoryKeys[categoryKey] = [];
        }
        let orphans = [];
        for (let app of apps) {
            let workspaceCategoryKeys = this.getWorkspaceCategoriesForApp(app);
            let orphan = workspaceCategoryKeys.length === 0;
            if (!orphan) {
                for (let key of workspaceCategoryKeys) {
                    appsByCategoryKeys[key].push(app);
                }
            } else {
                orphans.push(app);
            }
        }
        for (let [categoryKey, category] of Object.entries(
            WorkspaceCategories
        )) {
            if (category.acceptOrphans) {
                appsByCategoryKeys[categoryKey] = orphans;
            }
            if (category.acceptAll) {
                appsByCategoryKeys[categoryKey] = apps;
            }
        }
        return appsByCategoryKeys;
    }

    static getWorkspaceCategoriesForApp(appInfo) {
        const appCategoriesList = (appInfo.get_categories() || '').split(';');

        let categoryKeys = [];
        for (let [key, category] of Object.entries(WorkspaceCategories)) {
            let flagIncluded = false;
            let flagExcluded = false;
            appCategoriesList.forEach(appCategory => {
                flagIncluded =
                    flagIncluded ||
                    category.categoriesIncluded.indexOf(appCategory) >= 0;
                flagExcluded =
                    flagExcluded ||
                    category.categoriesExcluded.indexOf(appCategory) >= 0;
            });
            if (flagIncluded && !flagExcluded) {
                categoryKeys.push(key);
            }
        }
        return categoryKeys;
    }
};

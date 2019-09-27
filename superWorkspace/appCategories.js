const { Shell, GLib, Gio } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { WorkspaceCategories } = Me.imports.superWorkspace.workspaceCategories;
const { SuperWorkspaceManager } = Me.imports.superWorkspace.superWorkspaceManager;


/* exported AppCategories */
function AppCategories() {

    let data = load();
    monitor();

    return {
        get() { 
            return data;
        },
        getApps(categoryKey) { 
            return filterByCategory(categoryKey)
        },
        add(appId, categoryKey) {
            data.add(`${appId},${categoryKey}`);
        },
        remove(appId, categoryKey) {
            data.delete(`${appId},${categoryKey}`);
        },
        persist,
        reset,
    }

    // private

    function load() {
        let _data = loadCustom();
        if (!_data.length) {
            _data = loadDefault();
            Me.stateManager.setState('appCategories', _data)
        }
        return new Set([..._data]);
    }

    function monitor() {
        Me.stateManager.monitor(() => {
            let _data = loadCustom();
            if (!_data.length) {
                reset();
                persist();
                global.superWorkspaceManager.superWorkspaces.forEach(ws => {
                    ws.setApps(filterByCategory(ws.categoryKey));
                })
            }
        });
    }

    function persist() {
        Me.stateManager.setState('appCategories', [...data])
    }
    
    function reset() {
        data = new Set([...loadDefault()]);
    }

    function filterByCategory(categoryKey) {
        return [...data].filter(d => d.split(',')[1] === categoryKey).map(d => d.split(',')[0])
    }

    function loadCustom() {
        const appCategories = Me.stateManager.getState('appCategories') || [];
        return appCategories;
    }

    function getInstalledApps() {
        const usage = Shell.AppUsage.get_default();
        const appSystem = Shell.AppSystem.get_default();
        const installedApps = appSystem.get_installed().filter(appInfo => {
            try {
                let id = appInfo.get_id(); // catch invalid file encodings
            } catch (e) {
                return false;
            }
            return appInfo.should_show();
        });
        return installedApps;
        // return appsInstalled.sort((a, b) => {
        //     return usage.compare(a, b);
        // });
    }

    function loadDefault() {
        return getInstalledApps().reduce((acc, cur) => {
            const appCategories = getDefaultAppCategories(cur);
            const id = cur.get_id();
            acc.push(`${id},external`);
            if (!appCategories.length) {
                acc.push(`${id},other`);
            }
            else {
                appCategories.forEach(key => {
                    acc.push(`${cur.get_id()},${key}`);
                });
            }
            return acc
        }, []);
    }
    
    function getDefaultAppCategories(app) {
        const appCategoriesList = (app.get_categories() || '').split(';');

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

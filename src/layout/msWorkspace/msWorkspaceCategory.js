/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported MsWorkspaceCategory, MainCategories */

//Ordered by specificity in case of equality the most specific category will be chosen
var MainCategories = [
    'Game',
    'Development',
    'Video',
    'Audio',
    'AudioVideo',
    'Graphics',
    'Office',
    'Science',
    'Education',
    'FileManager',
    'InstantMessaging',
    'Network',
    'Settings',
    'System',
    'Utility',
];

var meaningfulCategories = ['IDE', 'WebBrowser', 'Player'];

var MsWorkspaceCategory = class MsWorkspaceCategory {
    constructor(msWorkspace, forcedCategory) {
        this.msWorkspace = msWorkspace;
        this.forcedCategory = forcedCategory;
        this.determineCategory();
    }

    forceCategory(category) {
        this.forcedCategory = category;
        this.determineCategory();
        Me.stateManager.stateChanged();
    }

    determineCategory() {
        if (this.forcedCategory) {
            return (this.category = this.forcedCategory);
        }
        let appList = this.msWorkspace.msWindowList.map((msWindow) => {
            return msWindow.app;
        });
        if (!appList.length) return;
        const categoryScoreMap = new Map();

        appList.forEach((app) => {
            if (app.is_window_backed()) return;
            let appMainCategories = [];
            let multiplier = 1;
            const categoriesString = app.get_app_info().get_categories();
            const categories = categoriesString
                ? categoriesString.split(';')
                : [];
            categories.forEach((category) => {
                if (MainCategories.includes(category)) {
                    appMainCategories.push(category);
                }
                if (meaningfulCategories.includes(category)) {
                    multiplier += 1;
                }
            });

            appMainCategories.forEach((category) => {
                if (categoryScoreMap.has(category)) {
                    categoryScoreMap.set(
                        category,
                        categoryScoreMap.get(category) + 1 * Number(multiplier)
                    );
                } else {
                    categoryScoreMap.set(category, 1 * Number(multiplier));
                }
            });
        });
        let mostRatedCategoryEntry;
        for (const entry of categoryScoreMap.entries()) {
            if (!mostRatedCategoryEntry || entry[1] > mostRatedCategoryEntry[1])
                mostRatedCategoryEntry = entry;

            if (
                entry[1] === mostRatedCategoryEntry[1] &&
                MainCategories.indexOf(entry[0]) <
                    MainCategories.indexOf(mostRatedCategoryEntry[0])
            ) {
                mostRatedCategoryEntry = entry;
            }
        }
        if (!mostRatedCategoryEntry) return;
        this.category = mostRatedCategoryEntry[0];
    }
};
